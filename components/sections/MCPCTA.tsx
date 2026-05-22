'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Mail } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function MCPCTA() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden" aria-label="Build with MeghRoop">
      {/* Glow treatment */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden"
        >
          {/* Subtle grid bg inside card */}
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-xs tracking-wider uppercase text-cyan-400 mb-6 block">
              Architect the Future
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Build AI systems that{' '}
              <br />
              <span className="gradient-text">actually remember.</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop deploying disconnected models that guess. Let’s map your system parameters, connect custom Model Context Protocol interfaces, and ground your workflows in absolute reality.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="mailto:hello@meghroop.com"
                onClick={() => trackEvent('cta_click', 'Contact', { label: 'email_founders', location: 'mcp_cta' })}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                <Mail size={16} />
                hello@meghroop.com
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="#faq"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
              >
                Read the FAQs
              </Link>
            </div>

            {/* Studio tagline */}
            <div className="mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
              <div>MEGHROOP COGNITIVE SYSTEMS CO.</div>
              <div>EST. 2022 // INDIA TO THE WORLD</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
