'use client'

import { useEffect, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'

const SESSION_KEY = 'mr_popup_shown'      // once per browser session
const CAPTURED_KEY = 'mr_lead_captured'   // never again after they submit

export default function ExitIntentPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [brand, setBrand] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState('')

  const trigger = useCallback(() => {
    if (typeof window === 'undefined') return
    if (localStorage.getItem(CAPTURED_KEY)) return
    if (sessionStorage.getItem(SESSION_KEY)) return
    sessionStorage.setItem(SESSION_KEY, '1')
    setOpen(true)
  }, [])

  useEffect(() => {
    // Never on admin
    if (pathname?.startsWith('/admin')) return
    if (typeof window === 'undefined') return
    if (localStorage.getItem(CAPTURED_KEY) || sessionStorage.getItem(SESSION_KEY)) return

    // Desktop: cursor leaves the top of the viewport (heading for the tab bar / close)
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0 && !e.relatedTarget) trigger()
    }
    // Fallback (covers mobile / no exit-intent): show after time on site
    const timer = window.setTimeout(trigger, 40000)

    // Small grace period so it can't fire the instant the page loads
    const ready = window.setTimeout(() => {
      document.addEventListener('mouseout', onMouseOut)
    }, 5000)

    return () => {
      document.removeEventListener('mouseout', onMouseOut)
      clearTimeout(timer)
      clearTimeout(ready)
    }
  }, [pathname, trigger])

  if (pathname?.startsWith('/admin')) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, brand, source: 'exit_intent' }),
      })
      if (!res.ok) throw new Error('failed')
      localStorage.setItem(CAPTURED_KEY, '1')
      setDone(true)
      setTimeout(() => setOpen(false), 2600)
    } catch {
      setError('Something went wrong. Please try again or email hello@meghroop.tech.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 no-print">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
            className="relative w-full max-w-md rounded-3xl border border-white/[0.1] bg-[#0d0d0d] overflow-hidden shadow-2xl shadow-black/60"
            style={{ boxShadow: '0 0 60px rgba(192,132,252,0.08)' }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c084fc]/40 to-transparent" />
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-72 h-40 bg-[#c084fc]/[0.12] rounded-full blur-[80px] pointer-events-none" />

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white transition-all"
            >
              <X size={15} />
            </button>

            <div className="relative z-10 p-7 sm:p-8">
              {done ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                    <CheckCircle2 size={26} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-2">You&apos;re on the list 🎉</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Thanks! We&apos;ll reach out within 24 hours with something genuinely useful for {brand.trim() || 'your brand'}.
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2.5 mb-5">
                    <MeghRoopLogo variant="favicon" />
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#c084fc]">
                      <Sparkles size={12} /> Before you go
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-2xl sm:text-[26px] text-white leading-tight mb-2.5">
                    Leaving already?{' '}
                    <span className="gradient-text-purple">Let&apos;s not lose this.</span>
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    Drop your email and brand name — we&apos;ll send one helpful, no-pressure idea on how to grow with
                    marketing, AI, or software. No spam, just value.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <input
                      type="text"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      placeholder="Brand / company name"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c084fc]/50 transition-all"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      required
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-[#c084fc]/50 transition-all"
                    />

                    {error && <p className="text-xs text-red-400">{error}</p>}

                    <button
                      type="submit"
                      disabled={submitting}
                      className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all duration-200 disabled:opacity-60"
                    >
                      {submitting ? 'Sending…' : 'Send me the idea'}
                      {!submitting && <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />}
                    </button>
                  </form>

                  <p className="text-[11px] text-gray-600 text-center mt-4">
                    We reply within 24 hours. Unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
