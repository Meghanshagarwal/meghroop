'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Lightbulb, Zap, Workflow, Settings, CheckCircle2, Gauge,
} from 'lucide-react'

const processSteps = [
  {
    icon: Lightbulb,
    title: 'Workflow Discovery',
    description: 'We sit with your team. Understand the work. Map the processes. Identify inefficiencies. Find the real pain points.',
    gradient: 'from-amber-600/30 to-yellow-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Zap,
    title: 'Systems Mapping',
    description: 'Map your tech stack. Understand how data flows today. Identify disconnects. Plan for integrations.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Workflow,
    title: 'Automation Architecture',
    description: 'Design the workflows. Plan triggers. Define actions. Specify error handling. Document the system.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Settings,
    title: 'Integration Engineering',
    description: 'Build the n8n workflows. Set up integrations. Configure APIs. Test connections. Ensure reliability.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: Zap,
    title: 'AI Enhancement',
    description: 'Add intelligence where it matters. LLM decision logic. Smart routing. Context-aware automation.',
    gradient: 'from-purple-600/30 to-blue-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: CheckCircle2,
    title: 'Testing & Launch',
    description: 'Test edge cases. Verify integrations. Run in staging. Then launch to production with monitoring.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Gauge,
    title: 'Optimization & Scaling',
    description: 'Monitor performance. Gather feedback. Optimize workflows. Plan for scale. Continuous improvement.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function N8nDevelopmentProcess() {
  return (
    <section id="process" className="section-padding" aria-label="Our workflow development process">
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
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            How we build workflow infrastructure
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our process.{' '}
            <span className="gradient-text">Technical. Thoughtful. Cinematic.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not a template. Not a generic agency checklist. A modern workflow engineering methodology designed for complex systems.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div key={index} variants={item} className="flex gap-4 md:gap-6">
                {/* Step number and connector */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white/[0.1] bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0`}
                    style={{
                      boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`,
                    }}
                  >
                    <Icon className={`${step.iconColor}`} size={24} />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="w-1 h-12 md:h-16 bg-gradient-to-b from-white/20 to-white/5 my-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 md:pt-3">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg md:text-xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Timeline summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 relative p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-violet-600/15 to-purple-600/10"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4">
            Timeline & Investment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Simple Workflows</span>
              <p className="text-white font-semibold text-lg">2-4 weeks</p>
              <span className="text-sm text-gray-400">Single integration, basic logic</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Complex Systems</span>
              <p className="text-white font-semibold text-lg">6-10 weeks</p>
              <span className="text-sm text-gray-400">Multiple integrations, AI logic</span>
            </div>
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider">Enterprise Infrastructure</span>
              <p className="text-white font-semibold text-lg">12+ weeks</p>
              <span className="text-sm text-gray-400">Full systems, multiple teams</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
