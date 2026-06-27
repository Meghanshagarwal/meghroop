'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'
import ObfuscatedEmail from '@/components/common/ObfuscatedEmail'

export default function FinalCTA() {
  return (
    <section id="contact" className="section-padding" aria-label="Get in touch with MeghRoop">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden px-8 py-20 sm:py-28 text-center"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] bg-[#c084fc]/[0.12] rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight mb-6">
              Let&apos;s build{' '}
              <span className="gradient-text">something amazing.</span>
            </h2>
            <p className="text-lg text-white/[0.6] max-w-xl mx-auto mb-10">
              Tell us where you want to grow. We&apos;ll show you how software, AI, and
              marketing get you there.
            </p>
            <Link
              href="/contact"
              onClick={() => trackEvent('cta_click', 'Contact', { label: 'discovery_call', location: 'final_cta' })}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_50px_rgba(192,132,252,0.2)]"
            >
              Book a Discovery Call
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <p className="mt-8 text-sm text-[#52525b]">
              Or email{' '}
              <ObfuscatedEmail className="text-[#c084fc] hover:text-[#d8b4fe] transition-colors" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
