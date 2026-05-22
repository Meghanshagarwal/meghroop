'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'


export default function Contact() {
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
    'w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 focus:bg-white/[0.06] transition-all duration-200'

  return (
    <section id="contact" className="section-padding relative overflow-hidden" aria-label="Contact MeghRoop">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            So.
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Hello.{' '}
            <span className="gradient-text">That&apos;s usually how these start.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Tell us what you&apos;re building, what&apos;s broken, or just what you&apos;re thinking about. We read every message. Even the unnecessarily long ones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {[
              {
                icon: Mail,
                label: 'Email Us',
                value: 'hello@meghroop.tech',
                href: 'mailto:hello@meghroop.tech',
                color: 'text-purple-400',
                bg: 'bg-purple-500/10 border-purple-500/20',
              },
              {
                icon: MessageSquare,
                label: 'WhatsApp',
                value: 'Sometimes a quick message beats 17 emails.',
                href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210'}`,
                color: 'text-emerald-400',
                bg: 'bg-emerald-500/10 border-emerald-500/20',
              },
            ].map(({ icon: Icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-5 rounded-2xl border ${bg} hover:opacity-80 transition-opacity duration-200`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                  <Icon size={18} className={color} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                  <div className="text-sm text-white font-medium">{value}</div>
                </div>
              </a>
            ))}

            {/* Response time */}
            <div className="p-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">Usually back within</span>
              </div>
              <div className="font-heading font-bold text-2xl text-white">24 hours</div>
              <div className="text-xs text-gray-500 mt-1">Mon–Sat, 9AM–9PM IST. Often much sooner.</div>
              <address className="not-italic mt-3 text-xs text-gray-600 leading-relaxed">
                MeghRoop Studio<br />
                Jaipur, Rajasthan, India · Working worldwide<br />
                Email: <a href="mailto:hello@meghroop.tech" className="hover:text-gray-400 transition-colors">hello@meghroop.tech</a><br />
                Phone: <a href="tel:+919876543210" className="hover:text-gray-400 transition-colors">+91 98765 43210</a>
              </address>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-7">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <div className="text-center">
                    <div className="font-heading font-bold text-xl text-white mb-2">Got it. We&apos;ll be in touch.</div>
                    <div className="text-sm text-gray-500">Usually faster than you&apos;d expect. We read every one.</div>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs text-gray-400 mb-1.5 block">Your Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="What should we call you?"
                        required
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-xs text-gray-400 mb-1.5 block">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Where should we reply?"
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="text-xs text-gray-400 mb-1.5 block">What are we talking about?</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`${inputClass} cursor-pointer`}
                    >
                      <option value="" className="bg-gray-900">Select project type...</option>
                      <optgroup label="── AI Services" className="bg-gray-900 text-gray-400">
                        {['Agentic AI Development','AI Agent Development','AI Workflow Automation','n8n Automation','MCP Server Development','Multi-Agent System','AI Customer Support System','AI Sales & Lead Automation','AI Integration'].map((type) => (
                          <option key={type} value={type} className="bg-gray-900">{type}</option>
                        ))}
                      </optgroup>
                      <optgroup label="── Shopify & Commerce" className="bg-gray-900 text-gray-400">
                        {['Shopify Development','Headless Shopify','Shopify + AI Automation','Shopify SEO','AI Commerce System','Shopify Store Build'].map((type) => (
                          <option key={type} value={type} className="bg-gray-900">{type}</option>
                        ))}
                      </optgroup>
                      <optgroup label="── Web Services" className="bg-gray-900 text-gray-400">
                        {['Full Stack Development','React / Next.js App','WordPress Website','UI/UX Implementation','Website Optimization','GEO & AI Search Optimization','Other'].map((type) => (
                          <option key={type} value={type} className="bg-gray-900">{type}</option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs text-gray-400 mb-1.5 block">What&apos;s on your mind? *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what you're building, what's broken, or just what's on your mind. No template required."
                      required
                      rows={5}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-400">Something went sideways. Try again, or just email us directly — we promise we read those too.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-sm transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send it over
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
