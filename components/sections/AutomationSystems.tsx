'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Workflow, Users, ShoppingCart, BarChart3, Mail, Clock, CheckCircle2, Zap,
} from 'lucide-react'

const automationSystems = [
  {
    icon: Workflow,
    title: 'CRM Automation',
    description: 'Lead capture, qualification, assignment, and follow-up pipelines. Data flows. No manual entry. Deals move faster.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    span: 'md:col-span-1',
    use: 'Lead management, sales automation',
  },
  {
    icon: Mail,
    title: 'Email & Marketing Workflows',
    description: 'Campaign automation, personalized follow-ups, segmentation flows. Email that actually converts.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    span: 'md:col-span-1',
    use: 'Marketing automation, nurture sequences',
  },
  {
    icon: ShoppingCart,
    title: 'Shopify Commerce Flows',
    description: 'Abandoned cart recovery, order notifications, inventory alerts, post-purchase automation. Commerce that runs.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    span: 'md:col-span-1',
    tag: 'E-Commerce Focus',
    use: 'Shopify automation, operational workflows',
  },
  {
    icon: Users,
    title: 'Support Ticket Workflows',
    description: 'Auto-triage, AI routing, knowledge base integration, escalation rules. Support that scales.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    span: 'md:col-span-1',
    use: 'Support automation, customer success',
  },
  {
    icon: BarChart3,
    title: 'Reporting & Analytics',
    description: 'Automated dashboards, metric collection, data integration. Reporting that updates itself.',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    span: 'md:col-span-1',
    use: 'Data ops, business intelligence',
  },
  {
    icon: Clock,
    title: 'Scheduling & Timing',
    description: 'Smart scheduling, delay logic, time-based triggers. Workflows that know when to act.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    span: 'md:col-span-1',
    use: 'Operational automation, workflow timing',
  },
  {
    icon: CheckCircle2,
    title: 'Validation & Cleanup',
    description: 'Data validation, duplicate handling, format normalization. Clean data, always.',
    gradient: 'from-teal-600/30 to-cyan-600/30',
    iconColor: 'text-teal-400',
    borderHover: 'hover:border-teal-500/40',
    span: 'md:col-span-1',
    use: 'Data quality, system hygiene',
  },
  {
    icon: Zap,
    title: 'Real-time Integrations',
    description: 'Webhook triggers, API orchestration, system sync. Everything connected. Nothing manual.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    span: 'md:col-span-1',
    tag: 'Infrastructure',
    use: 'System integration, API orchestration',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function AutomationSystems() {
  return (
    <section id="automation-systems" className="section-padding" aria-label="n8n automation and workflow systems">
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Automation without chaos
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Workflow systems that{' '}
            <span className="gradient-text">actually scale.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            n8n automation, API orchestration, CRM workflows, commerce automation. Built on infrastructure that handles real
            load. No bottlenecks. No dropped messages. Systems that quietly move work forward.
          </p>
        </motion.div>

        {/* Automation Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {automationSystems.map((system) => {
            const Icon = system.icon
            return (
              <motion.div
                key={system.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`${system.span} relative rounded-2xl border border-white/[0.08] ${system.borderHover} overflow-hidden group cursor-default transition-all duration-300`}
              >
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={22} className={system.iconColor} />
                    </div>
                    {system.tag && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400">
                        {system.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{system.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">{system.description}</p>
                  <div className="text-xs text-gray-500 pt-3 border-t border-white/[0.06]">{system.use}</div>
                </div>

                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Impact callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 sm:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '10-15 hrs/week', label: 'Average time saved per team member' },
              { metric: '80%', label: 'Reduction in manual data entry errors' },
              { metric: '3-6 months', label: 'ROI timeline for most automation systems' },
            ].map(({ metric, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text-purple mb-2">{metric}</div>
                <div className="text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Semantic content for AI crawlers */}
        <p className="sr-only">
          Automation systems include n8n workflows, CRM automation for lead management and sales, email marketing automation,
          Shopify automation for commerce workflows, support ticket automation, reporting and analytics automation, data
          validation workflows, and real-time API integrations. Systems are built for scalability, reliability, and production use.
        </p>
      </div>
    </section>
  )
}
