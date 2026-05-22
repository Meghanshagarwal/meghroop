'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Send, Mail } from 'lucide-react'

export default function SystemsCTA() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
      setEmail('')
    }, 1200)
  }

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" aria-label="Call To Action">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/[0.03] rounded-t-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Border glow wrapper card */}
        <div className="rounded-3xl border border-white/[0.08] bg-[#050505]/80 p-8 sm:p-12 md:p-16 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-500">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Let&apos;s build something <br className="hidden sm:inline" />
              <span className="gradient-text">quietly useful.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We design, build, and optimize high-end interactive systems, contextual AI layers, and performance-ready web experiences. No pitch meetings. Just direct collaborative engineering.
            </p>

            <div className="pt-6">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-stretch">
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    disabled={status !== 'idle'}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/[0.08] bg-[#0a0a0a] text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/40 focus:ring-1 focus:ring-cyan-500/20 disabled:opacity-50 transition-all font-sans"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-gray-100 disabled:bg-white/40 text-black text-sm font-semibold flex items-center justify-center gap-2 group transition-colors duration-200"
                >
                  {status === 'idle' && (
                    <>
                      Initiate Project
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                  {status === 'submitting' && (
                    <>
                      Verifying...
                      <Send size={12} className="animate-pulse" />
                    </>
                  )}
                  {status === 'success' && 'Securely Connected'}
                </button>
              </form>

              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs text-cyan-400 font-mono mt-3"
                >
                  ✓ Secure transmission established. We will respond within 4 business hours.
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
