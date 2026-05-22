'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

export default function ContactExperience() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const formStartedRef = useRef(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (!formStartedRef.current) {
      formStartedRef.current = true
      trackEvent('contact_form_start', undefined, { field: e.target.name })
    }
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', projectType: '', message: '' })
        formStartedRef.current = false
        trackEvent('contact_form_submit', 'Lead', { project_type: form.projectType })
      } else {
        setStatus('error')
        trackEvent('contact_form_error', undefined)
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-white/[0.06] transition-all duration-200 font-mono text-xs'

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden" aria-label="Contact Inquiry Form">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Form Container */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#050505]/60 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.12] transition-colors">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success-frame"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-16 gap-6 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 size={26} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-xl text-white">Handshake Complete</h3>
                  <p className="text-xs sm:text-sm text-gray-500 max-w-sm">
                    We have successfully queued your connection packet. We read every message and will respond sooner than you expect.
                  </p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-widest pt-2"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                      Name / Identity *
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="e.g. Robin Smith"
                      required
                      className={inputClass}
                      aria-label="Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Where should we reply?"
                      required
                      className={inputClass}
                      aria-label="Email"
                    />
                  </div>
                </div>

                {/* Dropdown Select Menu */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                    Scope of Discussion
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer appearance-none`}
                      aria-label="Select scope of discussion"
                    >
                      <option value="" className="bg-black">Select what you are building...</option>
                      <optgroup label="── AI Services" className="bg-black text-gray-500">
                        {['Agentic AI Development', 'AI Agent Development', 'AI Workflow Automation', 'n8n Automation', 'MCP Server Development'].map((type) => (
                          <option key={type} value={type} className="bg-black">{type}</option>
                        ))}
                      </optgroup>
                      <optgroup label="── Custom Frontends & Commerce" className="bg-black text-gray-500">
                        {['Shopify Custom Storefront', 'Headless Storefront', 'Shopify + AI Automation', 'React / Next.js Canvas Web'].map((type) => (
                          <option key={type} value={type} className="bg-black">{type}</option>
                        ))}
                      </optgroup>
                      <optgroup label="── Decoupled CMS & Operations" className="bg-black text-gray-500">
                        {['Headless WordPress Build', 'API Layer Integration', 'Website Speed Audit', 'Other Systems'].map((type) => (
                          <option key={type} value={type} className="bg-black">{type}</option>
                        ))}
                      </optgroup>
                    </select>
                    {/* Custom caret indicator */}
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600 text-[10px] font-mono">
                      [SELECT]
                    </div>
                  </div>
                </div>

                {/* Textarea Description */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                    Message Envelope *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're building, what's broken, or just what is on your mind. No templates required."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                    aria-label="Message"
                  />
                </div>

                {/* Error prompt */}
                {status === 'error' && (
                  <p className="text-xs font-mono text-rose-400">
                    Transmission encountered an error. Please try again, or direct mail us: hello@meghroop.tech
                  </p>
                )}

                {/* Interactive Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black font-semibold text-xs font-mono tracking-widest uppercase hover:bg-gray-200 transition-colors disabled:opacity-60 disabled:cursor-not-allowed select-none"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={12} className="animate-spin" />
                      Broadcasting...
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      Transmit Message Packet
                    </>
                  )}
                </button>

              </form>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
