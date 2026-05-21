'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Bot, Network, Zap, Settings2, MessageSquare, TrendingUp, Search, ShoppingBag, Brain,
} from 'lucide-react'

const agentCards = [
  {
    icon: Bot,
    title: 'Custom AI Agents',
    description: 'Purpose-built agents that reason, plan, and execute. Not a wrapper. A thinking system wired to your tools.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    span: 'md:col-span-2',
    tag: 'Core',
  },
  {
    icon: Network,
    title: 'Multi-Agent Systems',
    description: 'Agents that coordinate, delegate, and solve together. Complex problems made manageable.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Zap,
    title: 'Autonomous Workflows',
    description: 'Pipelines that trigger themselves and finish the job. No human required. Unless you want one.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Settings2,
    title: 'Operations Automation',
    description: 'The repetitive work your team does daily — data entry, reporting, scheduling. Just gone.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: MessageSquare,
    title: 'AI Support Agents',
    description: 'Support that reads, understands, and resolves. Or escalates with full context. No scripted menus.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    glowColor: 'rgba(6, 182, 212, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: TrendingUp,
    title: 'Sales & Lead Agents',
    description: 'Agents that qualify, outreach, and follow up. Landing warm leads. While you focus on closing.',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    span: 'md:col-span-2',
    tag: 'Revenue',
  },
  {
    icon: Search,
    title: 'Research Agents',
    description: 'Agents that browse, extract, read, and synthesize. Turning chaos into clean, structured intelligence.',
    gradient: 'from-indigo-600/30 to-violet-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: ShoppingBag,
    title: 'Commerce Agents',
    description: 'Wired into Shopify. Recovering carts, managing inventory, handling post-purchase. Commerce that runs.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
    tag: 'E-Commerce',
  },
  {
    icon: Brain,
    title: 'Memory-Enabled AI',
    description: 'AI that learns your processes, remembers decisions, and gets smarter over time. Almost like an employee.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    glowColor: 'rgba(124, 58, 237, 0.15)',
    span: 'md:col-span-2',
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

export default function WhatWeBuild() {
  return (
    <section id="what-we-build" className="section-padding" aria-label="AI agents and automation solutions we build">
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
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Building the future of work
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            What we build.{' '}
            <span className="gradient-text">Systems that scale quietly.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            AI agents, autonomous workflows, and intelligent infrastructure. Every system designed for production use, wired
            to real tools, optimized for real results.
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

        {/* Semantic summary for SEO/AI crawlers */}
        <p className="sr-only">
          MeghRoop builds custom AI agents using GPT-4o, Claude, and Gemini. Services include AI agent development, multi-agent
          systems, autonomous AI workflows, AI operations automation, AI customer support agents, AI sales and lead generation
          agents, AI research agents, Shopify commerce AI agents, and memory-enabled AI task automation. All systems built for
          production use with real integrations and actual results.
        </p>
      </div>
    </section>
  )
}
