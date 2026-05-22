'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Zap, Link2, Package, GitMerge, Shield, Workflow,
} from 'lucide-react'

const integrations = [
  {
    icon: GitMerge,
    title: 'CRM Systems',
    description: 'Salesforce, HubSpot, Pipedrive, custom CRM APIs. Data flowing between your CRM and everywhere it needs to go.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Platforms',
    description: 'Shopify, WooCommerce, custom stores. Orders, inventory, customers all connected. Automation that grows with your store.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Workflow,
    title: 'WordPress & CMS',
    description: 'WordPress webhooks, custom CMS APIs. Content workflows, user management, automated publishing pipelines.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: MessageSquare,
    title: 'Communication',
    description: 'Slack, Discord, Telegram, email, SMS. Getting information to your team through the tools they already use.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Database,
    title: 'Databases',
    description: 'PostgreSQL, MongoDB, MySQL, data warehouses. Direct integration with your data infrastructure.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Package,
    title: 'Payment & Finance',
    description: 'Stripe, PayPal, QuickBooks, accounting systems. Payment workflows and financial automation.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: Zap,
    title: 'Custom APIs',
    description: 'Your proprietary APIs. Legacy systems. Internal tools. We integrate with anything that has an endpoint.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
  },
  {
    icon: Shield,
    title: 'MCP Servers',
    description: 'Model Context Protocol infrastructure. AI connected to your systems securely. Grounded intelligence.',
    gradient: 'from-indigo-600/30 to-blue-600/30',
    iconColor: 'text-indigo-400',
  },
  {
    icon: Link2,
    title: 'Webhooks',
    description: 'Event-driven architectures. Real-time reactions to system changes. Instant data propagation.',
    gradient: 'from-teal-600/30 to-cyan-600/30',
    iconColor: 'text-teal-400',
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
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

// Missing imports - need to add
import { MessageSquare, Database, ShoppingCart } from 'lucide-react'

export default function N8nAPIIntegrations() {
  return (
    <section id="api-integrations" className="section-padding" aria-label="API and system integrations">
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
            Your entire operational stack connected
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Integrations that{' '}
            <span className="gradient-text">actually matter.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not a disconnected pile of tools. An integrated operational infrastructure. Your CRM talks to your store. Your store updates your database. Everything syncs. Everything flows.
          </p>
        </motion.div>

        {/* Integration Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <motion.div key={index} variants={item}>
                <div
                  className={`group relative p-6 md:p-7 rounded-2xl border border-white/[0.08] bg-gradient-to-br ${integration.gradient} hover:border-white/[0.15] transition-all duration-500 h-full`}
                  style={{
                    boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.05)`,
                  }}
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center ${integration.iconColor} transition-transform duration-300 group-hover:scale-110 mb-4`}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg md:text-base text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {integration.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {integration.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Integration architecture note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 relative p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-cyan-600/10 to-blue-600/10"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl text-white mb-4">
            Modern digital infrastructure
          </h3>
          <p className="text-gray-400 text-base leading-relaxed">
            Connected systems eliminate organizational chaos. When your CRM is synced with your database, which updates your store, which notifies your team, which logs everything for analysis — work moves forward. No manual data entry. No duplicate records. No waiting for updates. Just smooth operational flow. That&apos;s the goal of modern automation architecture.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
