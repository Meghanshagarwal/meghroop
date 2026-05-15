'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Bot, Brain, Network, Zap, Search, MessageSquare, TrendingUp, Settings2,
  Cpu, GitMerge, Database,
} from 'lucide-react'

const agentCards = [
  {
    icon: Bot,
    title: 'AI Agent Development',
    description: 'Custom intelligent agents that reason, plan, and execute tasks autonomously — connected to your tools and data.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    span: 'md:col-span-2',
    tag: 'Core Service',
  },
  {
    icon: Network,
    title: 'Multi-Agent Systems',
    description: 'Orchestrate networks of specialized AI agents that collaborate, delegate, and solve complex workflows end-to-end.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Zap,
    title: 'Autonomous AI Workflows',
    description: 'End-to-end automation pipelines that run without human intervention — triggered, reasoned, and executed by AI.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Settings2,
    title: 'AI Operations Automation',
    description: 'Automate repetitive business operations — from data entry and reporting to scheduling and internal workflows.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: MessageSquare,
    title: 'AI Customer Support Agents',
    description: 'Intelligent support agents that understand context, resolve queries, escalate intelligently, and never sleep.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: TrendingUp,
    title: 'AI Sales & Lead Agents',
    description: 'Agents that qualify leads, personalise outreach, follow up autonomously, and feed warm prospects into your CRM.',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Search,
    title: 'AI Research Agents',
    description: 'Agents that browse the web, extract structured insights, summarise documents, and deliver ready-to-use intelligence.',
    gradient: 'from-indigo-600/30 to-violet-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Brain,
    title: 'AI Task Automation',
    description: 'Memory-enabled AI that learns your processes, retains context across sessions, and handles tasks with human-level judgement.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    glowColor: 'rgba(124, 58, 237, 0.15)',
    span: 'md:col-span-3',
    tag: 'Advanced',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AgenticAI() {
  return (
    <section id="agentic-ai" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Agentic AI
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Intelligent systems that{' '}
            <span className="gradient-text">act autonomously</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We build AI systems capable of autonomous reasoning, task execution, workflow coordination, and business automation.
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
          {agentCards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`${card.span} relative rounded-2xl border border-white/[0.08] ${card.borderHover} overflow-hidden group cursor-default transition-all duration-300`}
                style={{
                  ['--glow' as string]: card.glowColor,
                }}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow ring on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 60px ${card.glowColor}` }}
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
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom feature callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { icon: Cpu, label: 'LLM-Powered Reasoning', desc: 'GPT-4, Claude, Gemini — best model for every task' },
            { icon: Database, label: 'Memory & Context', desc: 'Long-term memory with vector databases and RAG' },
            { icon: GitMerge, label: 'Tool Use & APIs', desc: 'Agents that call APIs, search the web, and use your tools' },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02]">
              <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-purple-400" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{label}</div>
                <div className="text-xs text-gray-500 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
