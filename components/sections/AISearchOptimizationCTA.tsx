'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function AISearchOptimizationCTA() {
  return (
    <section id="contact" aria-label="Call to action for AI search optimization" className="section-padding relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-float-delay" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Main message */}
        <motion.h2
          {...fadeUp(0)}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6"
        >
          Visibility is becoming{' '}
          <br />
          <span className="gradient-text">semantic.</span>
          <br />
          Build systems AI can actually understand.
        </motion.h2>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.15)}
          className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed mb-10"
        >
          We build semantic architecture, technical foundations, and AI-discoverable systems. Not guesses. Not templates. Engineered systems that rank in search engines, get included in LLM training data, and become sources of truth.
        </motion.p>

        {/* CTA Button */}
        <motion.div {...fadeUp(0.3)}>
          <Link
            href="/#contact"
            onClick={() => trackEvent('cta_click', 'Contact', { label: 'optimize_website_ai', location: 'cta_section' })}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.15)]"
          >
            Let&apos;s Talk
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Secondary text */}
        <motion.p
          {...fadeUp(0.4)}
          className="text-sm text-gray-500 mt-8 mb-16"
        >
          No generic SEO agency language. Just humans who understand semantic systems, modern search, and how to build for the internet that actually exists.
        </motion.p>

        {/* Cross-linking capabilities mesh index */}
        <motion.div {...fadeUp(0.5)} className="mt-16 flex flex-wrap justify-center items-center gap-x-5 gap-y-3.5 border-t border-white/[0.06] pt-8 text-xs text-gray-500 max-w-2xl mx-auto">
          <Link href="/ai-agents-automation" className="hover:text-purple-400 transition-colors">AI Agents & Automation</Link>
          <span className="text-white/10">•</span>
          <Link href="/mcp-infrastructure" className="hover:text-purple-400 transition-colors">MCP Infrastructure</Link>
          <span className="text-white/10">•</span>
          <Link href="/n8n-workflows" className="hover:text-purple-400 transition-colors">n8n Workflows</Link>
          <span className="text-white/10">•</span>
          <Link href="/ai-search-optimization" className="hover:text-purple-400 transition-colors">AI Search (GEO)</Link>
          <span className="text-white/10">•</span>
          <Link href="/shopify-engineering" className="hover:text-purple-400 transition-colors">Shopify Development</Link>
          <span className="text-white/10">•</span>
          <Link href="/web-engineering" className="hover:text-purple-400 transition-colors">Next.js Web Engineering</Link>
          <span className="text-white/10">•</span>
          <Link href="/wordpress-engineering" className="hover:text-purple-400 transition-colors">WordPress Engineering</Link>
        </motion.div>
      </div>
    </section>
  )
}
