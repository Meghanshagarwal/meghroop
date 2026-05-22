'use client'

import { motion } from 'framer-motion'
import { Server, Activity, Network } from 'lucide-react'

const features = [
  {
    icon: Server,
    title: 'Distributed Host Architecture',
    desc: 'Deploying secure, load-balanced containerized environments tailored for resource-heavy contextual reasoning and high API frequency workloads.',
  },
  {
    icon: Activity,
    title: 'Observability & Context Trace',
    desc: 'Real-time trace logs capturing absolute model tool calls, token usage efficiency, cache hit ratios, and prompt latencies for deep debugging.',
  },
  {
    icon: Network,
    title: 'Reliable Failover Pipelines',
    desc: 'Integrated message queuing, automated token retry policies, and secondary reasoning models that intercept errors before systems fail.',
  },
]

export default function MCPIntelligentInfrastructure() {
  return (
    <section id="infrastructure" className="section-padding relative overflow-hidden" aria-label="Intelligent Systems Infrastructure">
      {/* Background radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Backend Integrity
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Industrial-grade AI backend{' '}
            <span className="gradient-text">orchestration layers.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            We build the secure, resilient, observable piping that shields your production systems while granting agents precise functional scope.
          </p>
        </motion.div>

        {/* 3 Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 cursor-default"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-6 group-hover:bg-white/[0.08] transition-colors duration-300">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3">{f.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom philosophy callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 text-center"
        >
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            &quot;AI without infrastructure is a toy. Scale relies on robust, predictable server logic, explicit schema constraints, and strict execution guardrails.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  )
}
