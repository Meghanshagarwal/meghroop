'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Zap, GitMerge, Code2, Brain, CheckCircle2, Bell,
} from 'lucide-react'

const workflowSteps = [
  {
    icon: Zap,
    title: 'Trigger',
    description: 'Event fires. Webhook. Form submission. Scheduled time. Something happens.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: GitMerge,
    title: 'Fetch Data',
    description: 'Pull context from your systems. Read CRM. Query database. Gather the facts.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Brain,
    title: 'Process Logic',
    description: 'Apply rules, transform data, make decisions. AI if needed. Intelligent automation.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Code2,
    title: 'API Calls',
    description: 'Call external services. Update systems. Move data. Integrate across your stack.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: CheckCircle2,
    title: 'Execution',
    description: 'Action completes. Systems update. Database records change. Work gets done.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Bell,
    title: 'Notification',
    description: 'Alert the right people. Slack message. Email. SMS. Keep humans in the loop.',
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
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function N8nHowWorkflowsWork() {
  return (
    <section id="how-workflows-work" className="section-padding" aria-label="How n8n workflows work and execute">
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
            The machinery behind the automation
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How it works.{' '}
            <span className="gradient-text">Under the hood.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Clean workflow architecture. Every piece serves purpose. Triggers fire. Data flows. Systems update. Humans are notified. No wasted steps.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {workflowSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div key={index} variants={item}>
                <div
                  className={`group relative p-6 md:p-7 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${step.gradient} hover:border-white/[0.15] transition-all duration-500 h-full`}
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`,
                  }}
                >
                  {/* Step number */}
                  <div className="absolute top-4 right-4 text-xs font-bold text-gray-600 group-hover:text-gray-500 transition-colors">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center ${step.iconColor} transition-transform duration-300 group-hover:scale-110 mb-4`}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Architecture explanation */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-600/10 to-violet-600/10"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4">
            Intelligent workflow infrastructure
          </h3>
          <p className="text-gray-400 text-base leading-relaxed mb-5">
            Every workflow is built with reliability in mind. Error handling at every step. Retry logic for transient failures. Monitoring and logging so you know what happened. Conditional branching for edge cases. Human approval workflows for high-stakes decisions. The difference between automation that works and automation that creates chaos is architecture.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Error Handling', value: 'Built-in' },
              { label: 'Monitoring', value: '24/7' },
              { label: 'Logging', value: 'Complete audit trail' },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="text-xs text-gray-500 uppercase tracking-wider">{label}</span>
                <p className="text-white font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
