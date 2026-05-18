'use client'

import { motion, type Variants } from 'framer-motion'
import { Server, Plug, GitBranch, LayoutGrid, Layers, ArrowRight } from 'lucide-react'

const cards = [
  {
    icon: Server,
    title: 'MCP Server Development',
    description: 'Custom MCP servers that hand your data, tools, and APIs to AI models in structured, grounded context — so the model always knows exactly what it&apos;s working with. No guessing. No hallucinating your own product.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    border: 'border-cyan-500/20',
    hover: 'hover:border-cyan-500/40',
    glow: 'rgba(6, 182, 212, 0.12)',
    tag: 'Infrastructure',
    span: 'md:col-span-2',
  },
  {
    icon: Plug,
    title: 'AI Tool Connectivity',
    description: 'Your databases, CRMs, and APIs — exposed as callable tools your agents can use mid-task, in real time, without looping in a developer every time.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    border: 'border-violet-500/20',
    hover: 'hover:border-violet-500/40',
    glow: 'rgba(124, 58, 237, 0.12)',
    span: 'md:col-span-1',
  },
  {
    icon: LayoutGrid,
    title: 'AI Context Management',
    description: 'Structured pipelines that give AI exactly what it needs, exactly when it needs it — fewer hallucinations, sharper answers, and output you can actually trust.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    border: 'border-emerald-500/20',
    hover: 'hover:border-emerald-500/40',
    glow: 'rgba(16, 185, 129, 0.12)',
    span: 'md:col-span-1',
  },
  {
    icon: GitBranch,
    title: 'AI System Orchestration',
    description: 'Orchestration layers that route tasks between models, agents, and tools in the right order — coordinated, observable, and reliable enough to trust with real work.',
    gradient: 'from-blue-600/30 to-indigo-600/30',
    iconColor: 'text-blue-400',
    border: 'border-blue-500/20',
    hover: 'hover:border-blue-500/40',
    glow: 'rgba(59, 130, 246, 0.12)',
    span: 'md:col-span-2',
  },
  {
    icon: Layers,
    title: 'AI Workflow Infrastructure',
    description: 'The boring-but-critical stuff that makes AI actually reliable — queues, retries, state management, structured logging, observability from day one. We build systems that quietly do their job. Like good infrastructure should.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    border: 'border-amber-500/20',
    hover: 'hover:border-amber-500/40',
    glow: 'rgba(245, 158, 11, 0.12)',
    span: 'md:col-span-3',
    tag: 'Scalable',
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

export default function MCPServers() {
  return (
    <section id="mcp" className="section-padding" aria-label="MCP server development and AI infrastructure">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Wait — MCP what?
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            The layer that makes your{' '}
            <span className="gradient-text">AI actually know things.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Model Context Protocol. It&apos;s the open standard that finally lets AI talk to the real world — your data, your tools, your systems. So it stops guessing and starts being genuinely useful.
          </p>
        </motion.div>

        {/* Cards Grid */}
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
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`${card.span} relative rounded-2xl border ${card.border} ${card.hover} overflow-hidden group cursor-default transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 60px ${card.glow}` }}
                />
                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={22} className={card.iconColor} />
                    </div>
                    {card.tag && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400">
                        {card.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Protocol badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex justify-center"
        >
          <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 rounded-2xl sm:rounded-full border border-cyan-500/20 bg-cyan-500/[0.04] text-xs sm:text-sm text-gray-400 text-center">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse flex-shrink-0" />
            MCP — so your AI stops guessing and starts knowing
            <ArrowRight size={14} className="text-cyan-400 flex-shrink-0" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
