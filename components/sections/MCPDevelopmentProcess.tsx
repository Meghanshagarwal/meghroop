'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const steps = [
  {
    num: '01',
    title: 'System Discovery',
    desc: 'We map your existing company data architectures, database setups, key operational endpoints, and safe API access profiles to understand where model dependencies lie.',
  },
  {
    num: '02',
    title: 'Context Mapping',
    desc: 'Determining exact parameters required by reasoning agents to answer prompts dynamically, ensuring the model never operates with blind spots or stale state data.',
  },
  {
    num: '03',
    title: 'Infrastructure Architecture',
    desc: 'Designing safe sandbox environments, caching layers, load balancer rules, and token failovers to shield core production tables while maintaining speed.',
  },
  {
    num: '04',
    title: 'Custom MCP Integration',
    desc: 'We write fully typed custom Model Context Protocol servers in Node.js/TypeScript that expose secure systems as standardized callable tools.',
  },
  {
    num: '05',
    title: 'Workflow Orchestration',
    desc: 'Assembling robust coordination rules, automated queuing structures, observability triggers, and validation boundaries to guarantee operation success.',
  },
  {
    num: '06',
    title: 'Optimization & Scaling',
    desc: 'Tuning query cache ratios, analyzing tracer logs to prune context overheads, and stress-testing multi-agent runs under high concurrent state drift.',
  },
]

export default function MCPDevelopmentProcess() {
  return (
    <section id="process" className="section-padding relative overflow-hidden" aria-label="Development Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Engineering Lifecycle
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How we engineer{' '}
            <span className="gradient-text">predictable AI systems.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A meticulous, developer-centric workflow structured to yield secure and high-performance system execution from day one.
          </p>
        </motion.div>

        {/* Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/[0.01] to-transparent rounded-bl-full pointer-events-none" />
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-cyan-400 font-bold bg-cyan-500/10 px-3 py-1 rounded-full">
                    STAGE {step.num}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-white/[0.02] border border-white/[0.05] flex items-center justify-center group-hover:bg-cyan-500/15 group-hover:border-cyan-500/20 transition-all duration-300">
                    <Check size={12} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
