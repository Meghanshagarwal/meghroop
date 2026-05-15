'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Users, Mail, HeadphonesIcon, BarChart3, Database, Repeat } from 'lucide-react'

const workflows = [
  {
    icon: Users,
    title: 'AI Lead Generation',
    color: 'text-purple-400',
    border: 'border-purple-500/20',
    bg: 'bg-purple-500/[0.05]',
    steps: ['Prospect Discovery', 'AI Qualification', 'Enrichment & Scoring', 'CRM Handoff'],
  },
  {
    icon: Repeat,
    title: 'AI CRM Automation',
    color: 'text-blue-400',
    border: 'border-blue-500/20',
    bg: 'bg-blue-500/[0.05]',
    steps: ['Contact Sync', 'Deal Stage Updates', 'Activity Logging', 'Follow-up Triggers'],
  },
  {
    icon: Mail,
    title: 'AI Email Workflows',
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
    bg: 'bg-cyan-500/[0.05]',
    steps: ['Intent Detection', 'Personalised Draft', 'Send & Track', 'Reply Handling'],
  },
  {
    icon: HeadphonesIcon,
    title: 'AI Customer Support',
    color: 'text-emerald-400',
    border: 'border-emerald-500/20',
    bg: 'bg-emerald-500/[0.05]',
    steps: ['Query Classification', 'KB Lookup & RAG', 'Auto-Resolution', 'Escalation Logic'],
  },
  {
    icon: BarChart3,
    title: 'AI Operations Pipeline',
    color: 'text-amber-400',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/[0.05]',
    steps: ['Data Ingestion', 'AI Processing', 'Report Generation', 'Stakeholder Alerts'],
  },
  {
    icon: Database,
    title: 'AI Data Processing',
    color: 'text-rose-400',
    border: 'border-rose-500/20',
    bg: 'bg-rose-500/[0.05]',
    steps: ['Raw Data Intake', 'Cleaning & Transform', 'AI Extraction', 'Structured Output'],
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

export default function AIWorkflows() {
  return (
    <section id="ai-workflows" className="section-padding">
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
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            AI Automation
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Automation workflows for{' '}
            <span className="gradient-text">every operation</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We build AI-powered pipelines that connect your tools, process your data, and run your business operations automatically.
          </p>
        </motion.div>

        {/* Workflow Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {workflows.map((wf) => {
            const Icon = wf.icon
            return (
              <motion.div
                key={wf.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border ${wf.border} ${wf.bg} p-5 group cursor-default transition-all duration-300 hover:border-opacity-60`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center">
                    <Icon size={18} className={wf.color} />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm">{wf.title}</h3>
                </div>

                {/* Step flow */}
                <div className="space-y-2">
                  {wf.steps.map((step, i) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border ${wf.border} ${wf.bg} flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-[9px] font-bold ${wf.color}`}>{i + 1}</span>
                      </div>
                      <span className="text-xs text-gray-400">{step}</span>
                      {i < wf.steps.length - 1 && (
                        <div className="ml-auto">
                          <ArrowRight size={10} className="text-gray-700" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Connector line */}
                <div className={`absolute left-5 top-[72px] bottom-5 w-[1px] bg-gradient-to-b ${wf.border.replace('border-', 'from-').replace('/20', '/30')} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 relative rounded-2xl border border-white/[0.08] overflow-hidden p-8 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-blue-600/10" />
          <div className="relative z-10">
            <p className="text-sm text-gray-400 mb-2">Built with n8n · LangChain · OpenAI · Claude AI · Zapier · Make</p>
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-3">
              Have a workflow in mind?
            </h3>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Tell us your current process and we'll design an AI-powered version that runs itself.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
