'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function AIAgentsAutomationCTA() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden" aria-label="Call to action for AI agents project inquiry">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-purple-600/15 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] animate-float" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.p {...fadeUp(0)} className="font-heading font-bold text-sm sm:text-base text-gray-500 uppercase tracking-[0.2em] mb-4">
          Let&apos;s build it
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight mb-6"
        >
          Sometimes a workflow problem{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text">is actually an infrastructure problem.</span>
        </motion.h2>

        <motion.p {...fadeUp(0.2)} className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
          Let&apos;s talk about what you&apos;re trying to automate. We&apos;ll figure out if it needs agents, workflows, better
          integrations, or some combination that doesn&apos;t exist yet.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10">
          <a
            href="mailto:hello@meghroop.tech"
            onClick={() => trackEvent('cta_click', 'Contact', { label: 'email_inquiry', location: 'final_cta' })}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <Mail size={16} className="flex-shrink-0" />
            Email us
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <Link
            href="/"
            onClick={() => trackEvent('cta_click', 'ViewContent', { label: 'back_home', location: 'final_cta' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
          >
            Back to Home
          </Link>
        </motion.div>

        {/* Contact info */}
        <motion.div {...fadeUp(0.4)} className="space-y-2 text-center">
          <p className="text-sm text-gray-500">Or just message us</p>
          <p className="text-base text-gray-400">
            <span className="font-semibold text-white">hello@meghroop.tech</span>
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
