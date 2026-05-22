'use client'

import { motion, type Variants } from 'framer-motion'
import { Cpu, Database, Network, GitMerge, ShieldCheck } from 'lucide-react'

const cards = [
  {
    icon: Cpu,
    title: 'Model Context Protocol (MCP)',
    description: 'The standard protocol enabling AI to interface directly with files, tools, and databases. We architect servers that ground models in truth, eliminating standard chat-context blind spots entirely.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    border: 'border-cyan-500/20',
    hover: 'hover:border-cyan-500/40',
    glow: 'rgba(6, 182, 212, 0.12)',
    tag: 'Core Protocol',
    span: 'md:col-span-2',
  },
  {
    icon: Database,
    title: 'Cognitive Memory Systems',
    description: 'Dynamic long-term memory pools utilizing semantic vector databases. We write intelligent context caching systems so your agents remember critical session histories and operational patterns seamlessly.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    border: 'border-purple-500/20',
    hover: 'hover:border-purple-500/40',
    glow: 'rgba(124, 58, 237, 0.12)',
    tag: 'AI Memory',
    span: 'md:col-span-1',
  },
  {
    icon: Network,
    title: 'Context-Aware Orchestration',
    description: 'State management layers that govern multi-agent task routing. Instead of chaotic loop structures, our systems enforce structured pipelines that feed models precise execution rules under real-time constraints.',
    gradient: 'from-blue-600/30 to-indigo-600/30',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20',
    hover: 'hover:border-blue-500/40',
    glow: 'rgba(59, 130, 246, 0.12)',
    tag: 'Orchestration',
    span: 'md:col-span-1',
  },
  {
    icon: GitMerge,
    title: 'Intelligent Data Integrations',
    description: 'Unified context mapping across isolated company databases, SaaS interfaces, and internal APIs. We merge fragmented systems into logical read-write utilities that models digest in real time.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    border: 'border-amber-500/20',
    hover: 'hover:border-amber-500/40',
    glow: 'rgba(245, 158, 11, 0.12)',
    tag: 'Integrations',
    span: 'md:col-span-2',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Trust & Guardrails',
    description: 'Granular context authorization layers that sit between AI models and secure infrastructure. We enforce zero-trust scopes, token tracking, request validation, and real-time audit trails for mission-critical operations.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    border: 'border-emerald-500/20',
    hover: 'hover:border-emerald-500/40',
    glow: 'rgba(16, 185, 129, 0.12)',
    tag: 'Security & Access',
    span: 'md:col-span-3',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function MCPWhatItMeans() {
  return (
    <section id="what-it-means" className="section-padding" aria-label="What MCP Infrastructure means">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            The Foundation
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            AI is only as intelligent as the{' '}
            <span className="gradient-text">context it can access.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Traditional AI attempts to solve problems through raw computational guesswork. MCP infrastructure grounds intelligence in structured system reality.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={item}
                whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
                className={`${card.span} relative rounded-2xl border ${card.border} ${card.hover} overflow-hidden group cursor-default transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 60px ${card.glow}` }}
                />
                <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between min-h-[220px]">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                        <Icon size={22} className={card.iconColor} />
                      </div>
                      {card.tag && (
                        <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400">
                          {card.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{card.title}</h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mt-2">{card.description}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
