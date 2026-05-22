'use client'

import { motion } from 'framer-motion'
import { Brain, Orbit, Terminal } from 'lucide-react'

const comparisons = [
  {
    title: 'Standard AI Agents',
    status: 'Disconnected',
    desc: 'Operate inside strict virtual boxes. They guess parameters, generate hallucinations when asked about internal company tools, and reset their entire context memory baseline after every single message thread.',
    points: ['No native tool coordination', 'High hallucination rates on schemas', 'Isolated memory boundaries', 'Vulnerable to system state drift'],
    border: 'border-red-500/10',
    bg: 'bg-red-500/[0.01]',
    textColor: 'text-red-400',
  },
  {
    title: 'MCP-Enabled Agents',
    status: 'Grounded & Aware',
    desc: 'Operate as true secure interface layers. They read and edit real-world assets safely via structured APIs, utilize high-performance vector caches, and preserve context across complex multi-agent workflows.',
    points: ['Secure read-write capabilities', 'Strict schema validation guardrails', 'Shared system context memory pool', 'Observable execution traces'],
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/[0.01]',
    textColor: 'text-cyan-400',
    highlight: true,
  },
]

export default function MCPAIAgents() {
  return (
    <section id="agents" className="section-padding relative overflow-hidden" aria-label="MCP and AI Agents Integration">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
              <Brain size={12} className="text-purple-400 animate-pulse" />
              Cognitive Anchoring
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              AI becomes useful when it{' '}
              <span className="gradient-text">remembers system context.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Without an MCP infrastructure layer, multi-agent systems are just chat instances screaming queries into the dark. Grounded memories give agents physical capability.
            </p>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {comparisons.map((c) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.01 }}
              className={`rounded-2xl border ${c.border} ${c.bg} p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative`}
            >
              {c.highlight && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-bl-full pointer-events-none" />
              )}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-heading font-bold text-2xl text-white">{c.title}</h3>
                  <span className={`text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] ${c.textColor}`}>
                    {c.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed mb-8">{c.desc}</p>
              </div>

              <div className="space-y-3">
                <div className="text-xs text-gray-500 font-mono tracking-wider uppercase mb-2">Capabilities Included:</div>
                {c.points.map((pt) => (
                  <div key={pt} className="flex items-center gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full ${c.textColor}`} />
                    <span className="text-sm text-gray-300">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro Interaction Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
        >
          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-lg text-white mb-2">Persistent Context Loops</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              We engineer multi-tool architectures where memory flows natively from model query to vector store and down into live execution queues, validating responses before committing them to production.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end gap-3 font-mono text-[10px]">
            <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-gray-400">
              <Orbit size={12} className="text-purple-400 animate-spin" />
              Shared Context Pool
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.02] border border-white/[0.05] text-gray-400">
              <Terminal size={12} className="text-cyan-400" />
              Safe Sandboxing Active
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
