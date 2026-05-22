'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const useCases = [
  {
    category: 'Operational Systems',
    title: 'Context-Aware Internal Assistants',
    description: 'Empowering internal operations teams with AI agents that interface directly with active Postgres/GraphQL databases and custom code repositories. Instead of explaining queries, employees query complex system states in plain English.',
    outcomes: ['Sub-second query conversions', 'Zero hallucinated schema properties', 'Full observability trace log integration'],
  },
  {
    category: 'Ecommerce Intelligence',
    title: 'Grounded Customer Commerce',
    description: 'Automating high-volume Shopify support interactions by providing model context loops directly into stock levels, return policies, order tracking webhooks, and active customer profiles securely.',
    outcomes: ['90%+ Support automation rates', 'Seamless multi-platform CRM sync', 'Zero leaked customer keys'],
  },
  {
    category: 'AI Workflow Integration',
    title: 'Multi-Agent Operations',
    description: 'Routing automated tasks safely across marketing, data analysis, and support teams. Our MCP servers structure context transitions dynamically, ensuring agents never execute actions with stale state data.',
    outcomes: ['Predictable execution cycles', 'Automated retry and recovery guardrails', 'Low token consumption overhead'],
  },
]

export default function MCPUseCases() {
  return (
    <section id="use-cases" className="section-padding relative overflow-hidden" aria-label="Real-world MCP Use Cases">
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
            Applied Engineering
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            MCP in the wild.{' '}
            <span className="gradient-text">Real systems in action.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Practical architectures designed for modern operators who refuse to settle for generic chat tools.
          </p>
        </motion.div>

        {/* Use Cases Cards */}
        <div className="space-y-6">
          {useCases.map((u, idx) => (
            <motion.div
              key={u.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch group hover:border-white/[0.12] transition-colors duration-300"
            >
              {/* Info Column */}
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs tracking-wider uppercase text-cyan-400 mb-3 block">
                    {u.category}
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {u.title}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                    {u.description}
                  </p>
                </div>
              </div>

              {/* Outcomes Column */}
              <div className="lg:col-span-4 rounded-xl bg-white/[0.02] border border-white/[0.04] p-6 flex flex-col justify-center">
                <div className="text-xs text-gray-500 font-mono tracking-wider uppercase mb-4">System Impact:</div>
                <div className="space-y-3.5">
                  {u.outcomes.map((out) => (
                    <div key={out} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-cyan-400" />
                      </div>
                      <span className="text-sm text-gray-300 font-medium">{out}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
