'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Zap, Brain, Database, GitMerge, Workflow, Target,
} from 'lucide-react'

const steps = [
  {
    icon: Zap,
    title: 'Trigger',
    description: 'Event fires. Webhook. Scheduled. User action. Something happens.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Brain,
    title: 'Reasoning',
    description: 'Agent reads context. Understands the problem. Plans next steps. Thinks like a person.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: GitMerge,
    title: 'Tool Use',
    description: 'Agent calls your APIs. Searches data. Reads databases. Uses real tools. Takes action.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Database,
    title: 'Memory & Context',
    description: 'Agent recalls prior decisions. Maintains context across sessions. Learns from patterns.',
    gradient: 'from-cyan-600/30 to-teal-600/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Workflow,
    title: 'Execution',
    description: 'Completes the task. Updates systems. Sends notifications. Runs to completion.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Target,
    title: 'Result',
    description: 'Work is done. Systems are updated. Human is notified. Nothing falls through the cracks.',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
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

export default function HowAIAgentsWork() {
  return (
    <section id="how-ai-works" className="section-padding" aria-label="How AI agents work and execute autonomous workflows">
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
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            The workflow that doesn&apos;t involve you
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How it actually works.{' '}
            <span className="gradient-text">The thinking part.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            From trigger to completion. An AI agent that reasons through problems, uses your tools, remembers context, and
            executes autonomously. No human required until it decides one is.
          </p>
        </motion.div>

        {/* Flow Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div key={step.title} variants={item} className="relative">
                {/* Card */}
                <div className="relative rounded-2xl border border-white/[0.08] hover:border-white/[0.12] overflow-hidden group cursor-default transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-[#0a0a0a]" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 p-6 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300 flex-shrink-0">
                        <Icon size={24} className={step.iconColor} />
                      </div>
                      <div className="text-xs font-semibold text-gray-500 tracking-widest pt-1">{String(idx + 1).padStart(2, '0')}</div>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">{step.description}</p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Connecting arrow (visible on larger screens, between items) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-white/20 to-transparent" />
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/40" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key benefits callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { title: 'Intelligent Reasoning', desc: 'Agents think through problems, not just follow scripts. Context matters.' },
            { title: 'Tool Integration', desc: 'Access your real APIs, databases, CRMs, and tools. Not wrappers or sandboxes.' },
            { title: 'Persistent Memory', desc: 'Long-term context via vector DBs. Agents remember decisions and learn patterns.' },
          ].map(({ title, desc }) => (
            <div key={title} className="p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-300">
              <div className="text-sm font-semibold text-white mb-2">{title}</div>
              <div className="text-xs text-gray-400">{desc}</div>
            </div>
          ))}
        </motion.div>

        {/* Semantic description for AI crawlers */}
        <p className="sr-only">
          AI agents work through a structured workflow: trigger events initiate the agent, reasoning phase analyzes context
          and plans actions, tool use phase calls APIs and accesses databases, memory systems maintain context and learn from
          patterns, execution phase completes tasks, and result phase delivers outcomes. This creates autonomous workflows that
          integrate with real business tools and systems.
        </p>
      </div>
    </section>
  )
}
