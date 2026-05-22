'use client'

import { motion, type Variants } from 'framer-motion'
import {
  GitMerge, Zap, Code2, MessageSquare, ShoppingCart, BarChart3, Bell, Workflow, Brain, Box,
} from 'lucide-react'

const automationServices = [
  {
    icon: GitMerge,
    title: 'CRM Automation',
    description: 'Lead scoring, contact enrichment, deal progression, and automated CRM updates. Systems that keep your data clean and moving.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-2',
    tag: 'Core',
  },
  {
    icon: Zap,
    title: 'Lead Automation',
    description: 'Lead capture, qualification, routing, and automated follow-ups. Systems that turn leads into meetings without human intervention.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Brain,
    title: 'AI-Powered Workflows',
    description: 'LLM-enhanced automation with context-aware decision making. Workflows that think, reason, and adapt to edge cases.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    glowColor: 'rgba(168, 85, 247, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Code2,
    title: 'Internal Operations',
    description: 'Process automation for your team. Document routing, approvals, scheduling, and operational workflows that scale.',
    gradient: 'from-violet-600/30 to-blue-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Bell,
    title: 'Notifications & Alerts',
    description: 'Smart notification systems across Slack, Discord, email, and SMS. Getting the right information to the right person at the right time.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: GitMerge,
    title: 'API Orchestration',
    description: 'Complex multi-step workflows connecting dozens of APIs. Error handling, retries, and intelligent data transformation.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    glowColor: 'rgba(34, 211, 238, 0.15)',
    span: 'md:col-span-2',
    tag: 'Advanced',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Workflows',
    description: 'Order processing, inventory sync, customer notifications, and fulfillment workflows. Automation that powers your store.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
    borderHover: 'hover:border-pink-500/40',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: MessageSquare,
    title: 'Customer Systems',
    description: 'Support workflows, customer feedback loops, and response automation. Keeping your customers heard and supported.',
    gradient: 'from-rose-600/30 to-orange-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Box,
    title: 'Backend Automation',
    description: 'Data synchronization, batch processing, and backend infrastructure automation. Systems designed for scale and reliability.',
    gradient: 'from-indigo-600/30 to-purple-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: BarChart3,
    title: 'Reporting Systems',
    description: 'Automated data aggregation, report generation, and insights delivery. Analytics that work while you sleep.',
    gradient: 'from-teal-600/30 to-cyan-600/30',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-500/40',
    glowColor: 'rgba(20, 184, 166, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Workflow,
    title: 'Process Orchestration',
    description: 'Complex multi-stakeholder workflows with conditional logic, approvals, and human-in-the-loop automation.',
    gradient: 'from-blue-600/30 to-purple-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-2',
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

export default function N8nWhatWeAutomate() {
  return (
    <section id="what-we-automate" className="section-padding" aria-label="Automation systems and workflows we build">
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
            Automation that scales
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            What we automate.{' '}
            <span className="gradient-text">Actually.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not generic templates. Not theoretical workflows. Real automation systems for real business problems. Built to be useful. Built to scale.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
        >
          {automationServices.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={item}>
                <div
                  className={`group relative p-6 md:p-7 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${service.gradient} hover:border-white/[0.15] transition-all duration-500 ${service.borderHover} h-full ${service.span} cursor-pointer`}
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05), 0 0 40px ${service.glowColor}`,
                  }}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center ${service.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon size={24} />
                    </div>
                    {service.tag && (
                      <span className="text-xs font-semibold px-2 py-1 rounded-md bg-white/10 text-gray-300">
                        {service.tag}
                      </span>
                    )}
                  </div>

                  {/* Title and description */}
                  <h3 className="font-heading font-bold text-lg md:text-base text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
