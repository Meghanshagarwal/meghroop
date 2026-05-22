'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'

export default function AboutCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" aria-label="About Page Call to Action">
      {/* Dynamic background glow ring */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-purple-500/[0.04] to-transparent rounded-t-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Core title tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/5 text-[10px] font-mono text-purple-400 mb-6 uppercase tracking-wider">
          Next Phase
        </div>

        {/* Heading */}
        <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-2xl">
          The internet deserves <br className="hidden sm:inline" />
          <span className="gradient-text">better experiences.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mb-12">
          Let&apos;s build something useful. We design quiet backends, high-performance commerce systems, and secure AI automations that help your business scale.
        </p>

        {/* Interactive email capture */}
        <form onSubmit={handleSubmit} className="w-full max-w-md relative flex items-center p-1.5 rounded-xl border border-white/[0.08] bg-[#050505]/80 backdrop-blur-md focus-within:border-purple-500/30 transition-all duration-300">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to connect..."
            className="w-full bg-transparent pl-4 pr-12 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none font-mono"
            required
            aria-label="Email Address for contact"
          />
          <button
            type="submit"
            className="absolute right-1.5 p-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors focus:outline-none"
            aria-label="Submit Email Address"
          >
            <ArrowRight size={14} />
          </button>
        </form>

        {/* Success toast notification inside the context */}
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 flex items-center gap-2 font-mono text-[10px] text-emerald-400"
            >
              <Terminal size={10} className="animate-pulse" />
              Connection queued. We will read your message and reply soon.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Quiet footer signature */}
        <div className="mt-16 text-[9px] font-mono text-gray-600 uppercase tracking-widest">
          SYSTEM: meghroop-about-engine-v3.0 // SHIPPED SECURE
        </div>

      </div>
    </section>
  )
}
