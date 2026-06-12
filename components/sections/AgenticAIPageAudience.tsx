'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import Link from 'next/link'

const audiences = [
  'SMB and mid-market teams (20–5,000 employees) in India and the US',
  'Heads of Ops, RevOps, CX, IT, Sales, and Finance — anyone owning a painful workflow',
  'B2B SaaS, services, D2C, BFSI, healthcare, education, real estate, and manufacturing',
]

export default function AgenticAIPageAudience() {
  return (
    <section id="who-we-work-with" className="section-padding" aria-label="Who we work with">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Who it&apos;s for
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Who we <span className="gradient-text">work with.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            We partner with teams who want AI to reduce workload, boost revenue, and improve customer experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-3"
        >
          {audiences.map((a) => (
            <div
              key={a}
              className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6"
            >
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                <Users size={17} className="text-cyan-400" />
              </div>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed pt-1">{a}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href="/ai-agents-automation"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            See our approach to AI agents &amp; automation
            <ArrowRight size={15} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
