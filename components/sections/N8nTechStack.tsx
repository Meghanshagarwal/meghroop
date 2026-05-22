'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Zap, Code2, Brain, Database, GitMerge, Shield, Workflow, Package,
} from 'lucide-react'

const techStackItems = [
  {
    icon: Workflow,
    title: 'n8n',
    description: 'Workflow automation platform. Open-source option. Powerful workflow orchestration.',
    category: 'Core',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Code2,
    title: 'APIs & Webhooks',
    description: 'RESTful APIs. GraphQL. Webhooks. Event-driven architectures. Modern integration.',
    category: 'Integration',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Brain,
    title: 'OpenAI / Claude / Llama',
    description: 'LLM integration. AI decision logic. Smart routing. Context awareness.',
    category: 'AI',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Shield,
    title: 'MCP (Model Context Protocol)',
    description: 'AI access to systems securely. Grounded intelligence. Custom MCP servers.',
    category: 'AI Infrastructure',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'PostgreSQL, MongoDB, MySQL, Supabase. Data storage and retrieval.',
    category: 'Data',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: GitMerge,
    title: 'CRM Systems',
    description: 'Salesforce, HubSpot, Pipedrive, custom CRM APIs. Customer data orchestration.',
    category: 'CRM',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Package,
    title: 'Commerce Platforms',
    description: 'Shopify, WooCommerce, custom stores. Ecommerce automation.',
    category: 'Commerce',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
  },
  {
    icon: Zap,
    title: 'Communication',
    description: 'Slack, Discord, email, SMS. Multi-channel notifications.',
    category: 'Notifications',
    gradient: 'from-indigo-600/30 to-blue-600/30',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Code2,
    title: 'WordPress & Custom CMS',
    description: 'WordPress webhooks, REST API. Custom CMS integrations.',
    category: 'CMS',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
  },
  {
    icon: GitMerge,
    title: 'Data Transformation',
    description: 'ETL logic. Data mapping. Transformation rules. Complex data flows.',
    category: 'Data Pipeline',
    gradient: 'from-teal-600/30 to-cyan-600/30',
    iconColor: 'text-teal-400',
  },
  {
    icon: Shield,
    title: 'Security & Auth',
    description: 'OAuth2, API keys, encryption. Secure integrations and data handling.',
    category: 'Security',
    gradient: 'from-red-600/30 to-orange-600/30',
    iconColor: 'text-red-400',
  },
  {
    icon: Workflow,
    title: 'Custom Middleware',
    description: 'Node.js backend. Custom logic. Proprietary automation infrastructure.',
    category: 'Backend',
    gradient: 'from-gray-600/30 to-slate-600/30',
    iconColor: 'text-gray-400',
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
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

export default function N8nTechStack() {
  return (
    <section id="tech-stack" className="section-padding" aria-label="Technology stack and tools">
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
            The tools we use to build automation
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Technology stack.{' '}
            <span className="gradient-text">Modern & Scalable.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Best-in-class tools for workflow automation. Open-source where possible. Enterprise-grade reliability. Chosen for their ability to integrate seamlessly.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12"
        >
          {techStackItems.map((tech, index) => {
            const Icon = tech.icon
            return (
              <motion.div key={index} variants={item}>
                <div
                  className={`group relative p-5 md:p-6 rounded-xl border border-white/[0.08] bg-gradient-to-br ${tech.gradient} hover:border-white/[0.15] transition-all duration-500 h-full`}
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`,
                  }}
                >
                  {/* Category badge */}
                  <div className="absolute top-3 right-3 text-xs font-semibold px-2 py-1 rounded-md bg-white/10 text-gray-300 group-hover:bg-white/15 transition-colors">
                    {tech.category}
                  </div>

                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-black/20 flex items-center justify-center ${tech.iconColor} transition-transform duration-300 group-hover:scale-110 mb-3`}>
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading font-bold text-base text-white mb-1 group-hover:text-white transition-colors duration-300">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Architecture note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-blue-600/10 to-cyan-600/10"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4">
            The philosophy behind our stack
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            We choose tools that work well together. n8n for orchestration. OpenAI/Claude for intelligence. APIs for connection. Custom middleware for logic that doesn&apos;t fit elsewhere. Every tool serves a specific purpose. No bloat. No unnecessary complexity.
          </p>
          <p className="text-gray-400 text-sm">
            The best tech stack is invisible. You don&apos;t notice it working. Your automations just run. Smoothly. Reliably. Getting work done while you focus on what matters.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
