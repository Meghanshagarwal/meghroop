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

export default function AgenticAIPageCTA() {
  return (
    <section
      id="contact"
      aria-label="Start with an AI readiness audit"
      className="relative min-h-[500px] sm:min-h-[600px] flex items-center justify-center overflow-hidden grid-bg section-padding"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/15 rounded-full blur-[120px] animate-float-delay" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-float-slow" />
      </div>

      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.p {...fadeUp(0)} className="font-heading font-bold text-sm sm:text-base text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6">
          Not sure where to start?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl leading-[1.1] tracking-tight mb-4 sm:mb-6"
        >
          Start with an{' '}
          <span className="gradient-text">AI Readiness Audit.</span>
        </motion.h2>

        <motion.p {...fadeUp(0.25)} className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
          If we build together after, the audit fee is credited toward your first engagement. If we&apos;re not the
          right fit, we&apos;ll say so in 30 minutes — no slide dump, no hard sell.
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            onClick={() => trackEvent('cta_click', 'Lead', { label: 'ai_roadmap', location: 'services_cta' })}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Get my 90-day AI roadmap
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <a
            href="mailto:hello@meghroop.tech?subject=AI%20Services%20Enquiry"
            onClick={() => trackEvent('cta_click', 'Contact', { label: 'email_hello', location: 'services_cta' })}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
          >
            hello@meghroop.tech
          </a>
        </motion.div>

        <motion.p {...fadeUp(0.45)} className="mt-10 sm:mt-14 text-xs text-gray-500 max-w-lg mx-auto mb-12">
          Based in India. Working everywhere. Direct communication. No account managers. Just engineers building your
          systems.
        </motion.p>

        {/* Cross-linking capabilities mesh */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-4 flex flex-wrap justify-center items-center gap-x-5 gap-y-3.5 border-t border-white/[0.06] pt-8 text-xs text-gray-500 max-w-2xl mx-auto font-sans"
        >
          <Link href="/ai-agents/custom-ai-agents" className="hover:text-cyan-400 transition-colors">Custom AI Agents</Link>
          <span className="text-white/10">•</span>
          <Link href="/ai-agents/agentic-automation" className="hover:text-cyan-400 transition-colors">Agentic Automation</Link>
          <span className="text-white/10">•</span>
          <Link href="/ai-agents/ai-voice-agents" className="hover:text-cyan-400 transition-colors">AI Voice Agents</Link>
          <span className="text-white/10">•</span>
          <Link href="/ai-agents/sales-ai" className="hover:text-cyan-400 transition-colors">Sales AI</Link>
          <span className="text-white/10">•</span>
          <Link href="/ai-agents/knowledge-intelligence" className="hover:text-cyan-400 transition-colors">Knowledge Intelligence</Link>
          <span className="text-white/10">•</span>
          <Link href="/ai-agents/ai-integration" className="hover:text-cyan-400 transition-colors">AI Integration</Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
