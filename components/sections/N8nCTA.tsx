'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function N8nCTA() {
  return (
    <section
      id="final-cta"
      aria-label="Call to action for workflow automation"
      className="relative py-16 sm:py-24 overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-[120px] animate-float-delay" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main message */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6 sm:mb-8"
        >
          Sometimes operational{' '}
          <br />
          problems are{' '}
          <span className="gradient-text">systems problems.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.15)}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Built the right way, automation makes your operations feel effortless. People focus on judgment calls. The systems handle the repetition. Everyone moves faster.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8">
          <Link
            href="https://calendly.com/meghroop/consultation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('cta_click', 'Contact', { label: 'schedule_consultation', location: 'final_cta' })}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-base hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Schedule Consultation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="mailto:hello@meghroop.tech"
            onClick={() => trackEvent('cta_click', 'Contact', { label: 'email_us', location: 'final_cta' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-base hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
          >
            Email Us Details
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.45)}
          className="text-gray-500 text-sm md:text-base"
        >
          We build automation infrastructure that actually works.
        </motion.p>
      </div>
    </section>
  )
}
