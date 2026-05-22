'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Brain, Zap, Target, Lightbulb, Workflow, Lock,
} from 'lucide-react'

const aiCapabilities = [
  {
    icon: Brain,
    title: 'AI Reasoning',
    description: 'LLMs embedded in workflows. AI reads your data, understands context, makes intelligent decisions. Automation that thinks.',
    gradient: 'from-purple-600/30 to-blue-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Lightbulb,
    title: 'Context Awareness',
    description: 'AI understands your business context. Customer history. Product details. Market conditions. Smart decisions from real information.',
    gradient: 'from-amber-600/30 to-yellow-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Target,
    title: 'Adaptive Logic',
    description: 'Workflows that learn from outcomes. Edge cases handled intelligently. Continuous improvement through feedback loops.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: Zap,
    title: 'Real-time Intelligence',
    description: 'AI processes happen instantly. No latency. No delays. Decisions made in milliseconds while you work.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Workflow,
    title: 'Multi-step Orchestration',
    description: 'Complex workflows with AI at every decision point. Marketing campaigns. Sales sequences. Operations. All coordinated intelligently.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Lock,
    title: 'Grounded in Reality',
    description: 'AI connected to your actual data via MCP. No hallucinations. AI reads truth from your systems. Every decision backed by facts.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function N8nAIAutomation() {
  return (
    <section id="ai-automation" className="section-padding" aria-label="AI-enhanced workflow automation">
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
            When automation meets intelligence
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            AI becomes useful{' '}
            <br />
            <span className="gradient-text">when wired to systems.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Workflow automation powered by AI. Not just smart automations. Intelligent infrastructure. AI that reads your data, understands context, and makes decisions your team would make. But faster. And while you sleep.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12"
        >
          {aiCapabilities.map((capability, index) => {
            const Icon = capability.icon
            return (
              <motion.div key={index} variants={item}>
                <div
                  className={`group relative p-6 md:p-7 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${capability.gradient} hover:border-white/[0.15] transition-all duration-500 h-full`}
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`,
                  }}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center ${capability.iconColor} transition-transform duration-300 group-hover:scale-110 mb-4`}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg md:text-base text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {capability.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Key insight box */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-purple-600/15 to-blue-600/15"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <h3 className="font-heading font-bold text-2xl text-white mb-4">
            Operational intelligence through automation
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <span className="text-white font-semibold">Good workflows quietly save hours every week.</span> Your team doesn&apos;t notice because work just flows. Leads get routed to the right person. Customers get responses. Data stays sync&apos;d. Support tickets get resolved. Everything moves forward without needing a human to push it.
              </p>
              <p className="text-gray-400 text-sm">
                That&apos;s the goal. Automation so smooth that it becomes invisible. Your team focuses on judgment calls. The systems handle the repetition.
              </p>
            </div>
            <div>
              <p className="text-gray-300 leading-relaxed mb-4">
                <span className="text-white font-semibold">Automation should feel invisible.</span> Not another tool to manage. Not another dashboard to check. Not more tabs open. Just work happening in the background. Quietly. Reliably. Getting smarter over time.
              </p>
              <p className="text-gray-400 text-sm">
                When AI is properly integrated into workflows, people feel it as relief. Friction disappears. Operations scale.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
