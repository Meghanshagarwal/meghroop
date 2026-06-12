'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Brain, Workflow, HeadphonesIcon, Bot, Plug, BookOpen, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    id: 'ai-strategy-audit',
    icon: Brain,
    title: 'AI Strategy & Readiness Audit',
    description:
      'Fixed-fee, 3-week engagement that maps your highest-ROI AI opportunities, scores them by feasibility, and delivers a 90-day action plan. The audit fee is credited toward your first build.',
    cta: 'See the AI Strategy Audit',
    href: '/ai-agents/ai-strategy-audit',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    span: 'md:col-span-2',
    tag: 'Start here',
  },
  {
    id: 'agentic-automation',
    icon: Workflow,
    title: 'Agentic Systems & Process Automation',
    description:
      'Productized AI agents that run back-office processes end-to-end — invoice-to-pay, ticket triage, reconciliation, vendor onboarding. Start with our Agent Sprint: one production agent live in weeks.',
    cta: 'See Agentic Automation',
    href: '/ai-agents/agentic-automation',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
  },
  {
    id: 'ai-voice-agents',
    icon: HeadphonesIcon,
    title: 'AI Voice Agents',
    description:
      'Human-sounding voice bots for inbound support, outbound qualification, collections, and appointment booking. Multilingual (Hindi, English, regional Indian languages, Spanish). 24/7 operation, zero hold time.',
    cta: 'See AI Voice Agents',
    href: '/ai-agents/ai-voice-agents',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-1',
  },
  {
    id: 'custom-ai-agents',
    icon: Bot,
    title: 'Custom AI Agent Development',
    description:
      'Bespoke agents for your unique workflow — SDR research, AR clerk, L2 support, RFP drafting, internal analyst. Built from scratch, not templated. You own the code, data, and IP.',
    cta: 'See Custom AI Agent Development',
    href: '/ai-agents/custom-ai-agents',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    glowColor: 'rgba(124, 58, 237, 0.15)',
    span: 'md:col-span-1',
  },
  {
    id: 'ai-integration',
    icon: Plug,
    title: 'AI Integration Services',
    description:
      'Plug AI into the tools you already run — Salesforce, HubSpot, Zoho, Zendesk, SAP, Tally, custom internal systems. No rip-and-replace.',
    cta: 'See AI Integration Services',
    href: '/ai-agents/ai-integration',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    span: 'md:col-span-1',
  },
  {
    id: 'knowledge-intelligence',
    icon: BookOpen,
    title: 'Document & Knowledge Intelligence',
    description:
      'Private, permission-aware AI that reads your documents, contracts, SOPs, and knowledge bases — and answers with citations. Deployed in your cloud.',
    cta: 'See Knowledge Intelligence',
    href: '/ai-agents/knowledge-intelligence',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    span: 'md:col-span-2',
    tag: 'Private cloud',
  },
  {
    id: 'sales-ai',
    icon: TrendingUp,
    title: 'Sales Intelligence & Outreach Automation',
    description:
      'Signal-triggered outbound for B2B SaaS. Lead research, personalized email + LinkedIn + voice, reply handling. Start with a Performance Pilot: pay per qualified meeting.',
    cta: 'See Sales AI',
    href: '/ai-agents/sales-ai',
    gradient: 'from-indigo-600/30 to-violet-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    span: 'md:col-span-3',
    tag: 'Performance pilot',
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

export default function AgenticAIPageGrid() {
  return (
    <section id="our-services" className="section-padding" aria-label="Our agentic AI services">
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
            What we deliver
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our services.{' '}
            <span className="gradient-text">Every engagement ships.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Pick a starting point or build a full-stack AI roadmap — every engagement ends with a working system in
            production.
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
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`${service.span} relative rounded-2xl border border-white/[0.08] ${service.borderHover} overflow-hidden group transition-all duration-300 scroll-mt-28`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow ring on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 60px ${service.glowColor}` }}
                />

                <div className="relative z-10 p-6 sm:p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={22} className={service.iconColor} />
                    </div>
                    {service.tag && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400">
                        {service.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5 flex-1">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-purple-200 transition-colors"
                  >
                    {service.cta}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        <p className="sr-only">
          MeghRoop provides end-to-end agentic AI services including AI strategy and readiness audits, agentic systems
          and process automation, AI voice agents, custom AI agent development, AI integration with existing CRM and ERP
          tools, document and knowledge intelligence, and sales intelligence and outreach automation. Fixed-fee,
          delivered in weeks, with code and IP owned by the client.
        </p>
      </div>
    </section>
  )
}
