'use client'

import { motion } from 'framer-motion'
import { BrainCircuit, Shuffle, Ban } from 'lucide-react'

const limitations = [
  {
    icon: BrainCircuit,
    title: 'The Amnesia Loop',
    desc: 'Most AI systems reset context memory bounds after every request. The model forgets exactly what was done in the previous step, resulting in repetitive, shallow outcomes.',
  },
  {
    icon: Ban,
    title: 'Zero Grounding Guardrails',
    desc: 'Without Model Context Protocol servers linking systems natively, models make up parameters (hallucinate) trying to match custom APIs or private schemas.',
  },
  {
    icon: Shuffle,
    title: 'Prompts vs Orchestration',
    desc: 'Hoping a model self-corrects using long, convoluted system prompts is a design failure. True intelligence requires deterministic workflow pipelines and state logic.',
  },
]

export default function MCPWhySystemsFeelLimited() {
  return (
    <section id="limitations" className="section-padding relative overflow-hidden" aria-label="Why most AI systems feel limited">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Opinionated Architecture
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Why most AI implementations{' '}
            <span className="gradient-text-purple">feel like expensive toys.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Throwing API calls at isolated LLMs creates temporary magic, not long-term business leverage. Memory changes the nature of intelligence.
          </p>
        </div>

        {/* 3 Column Limitation Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {limitations.map((l, i) => {
            const Icon = l.icon
            return (
              <motion.div
                key={l.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/[0.02] to-transparent rounded-bl-full pointer-events-none" />
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6">
                    <Icon size={18} className="text-red-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">{l.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">{l.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Closing stance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-red-500/20 bg-red-500/[0.03] text-xs text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            We don&apos;t build generic chat setups. We build systems that remember.
          </div>
        </motion.div>
      </div>
    </section>
  )
}
