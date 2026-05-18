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
    description: 'Custom agents that reason, plan, and execute end-to-end — wired into your tools, your data, your actual workflow. Not a demo. Not a chatbot wrapper. A system.',
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
    description: 'Agents that delegate to each other, share context, and solve problems no single model can handle alone. Coordinated. Observable. Surprisingly reliable.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Zap,
    title: 'Autonomous AI Workflows',
    description: 'Pipelines that trigger themselves, reason through the steps, and finish the job. No human in the loop unless you want one. Which sometimes you do. That&apos;s fine.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Settings2,
    title: 'AI Operations Automation',
    description: 'The tasks your team does on repeat, every single day — we hand those to AI. Data entry, reporting, scheduling, internal ops. Just gone. Agentic AI sounds complicated until it starts saving 12 hours a week.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: MessageSquare,
    title: 'AI Customer Support Agents',
    description: 'Agents that actually read the ticket, find the right answer, and resolve — or escalate with full context. No scripted menus. No numbered options. No frustration.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: TrendingUp,
    title: 'AI Sales & Lead Agents',
    description: 'Agents that qualify prospects, write personalised outreach, follow up on their own schedule, and land warm leads in your CRM — while you focus on the part only you can do.',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    span: 'md:col-span-2',
  },
  {
    icon: Search,
    title: 'AI Research Agents',
    description: 'Agents that browse, extract, read, and synthesise — turning raw web and document chaos into clean, structured intelligence you can actually act on. Fast.',
    gradient: 'from-indigo-600/30 to-violet-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Brain,
    title: 'AI Task Automation',
    description: 'Memory-enabled AI that learns your processes, remembers decisions across sessions, and handles complex tasks with the kind of judgement that makes you forget it&apos;s not a person. Almost.',
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
    <section id="agentic-ai" className="section-padding" aria-label="AI agent development and agentic AI services">
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
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            AI is cool. Useful AI is cooler.
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            AI that does things.{' '}
            <span className="gradient-text">Not just says things.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Agents that reason, plan, and execute — wired into your real tools, your real data, your actual workflow. Not demos. Not wrappers. Systems that quietly get things done while you&apos;re doing something else.
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
            { icon: Cpu, label: 'LLM-Powered Reasoning', desc: 'GPT-4o, Claude, Gemini — right model, right task. Every time.' },
            { icon: Database, label: 'Memory & Persistence', desc: 'Long-term memory via vector DBs, RAG, and structured recall. It remembers.' },
            { icon: GitMerge, label: 'Tool Use & Real-World APIs', desc: 'Agents that call your APIs, search the web, and use your actual tools in real time.' },
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

        {/* Semantic summary for AI search crawlers */}
        <p className="sr-only">
          MeghRoop builds custom AI agents using GPT-4o, Claude, and Gemini with LangChain and
          LlamaIndex. Services include multi-agent system development, autonomous AI workflow
          pipelines, AI customer support agents, AI sales and lead generation agents, AI research
          agents, and memory-enabled task automation. All systems are built for production use
          with real tool integrations, vector database memory, and RAG capabilities.
        </p>
      </div>
    </section>
  )
}
