'use client'

import { motion, type Variants } from 'framer-motion'
import { Zap, Database, Brain, Settings } from 'lucide-react'

const automationFeatures = [
  {
    icon: Zap,
    title: 'Order Automation',
    description: 'Automatic order fulfillment. Inventory sync. Shipping label generation. Email sequences that trigger on behavior.',
    color: 'text-amber-400',
    gradient: 'from-amber-600/30',
  },
  {
    icon: Brain,
    title: 'Customer Intelligence',
    description: 'Automated CRM sync. Customer segments that update in real-time. Behavioral triggers. Retention flows that work.',
    color: 'text-violet-400',
    gradient: 'from-violet-600/30',
  },
  {
    icon: Database,
    title: 'Inventory Systems',
    description: 'Real-time stock tracking. Automatic reorder triggers. Multi-channel inventory. Supply chain automation that scales.',
    color: 'text-cyan-400',
    gradient: 'from-cyan-600/30',
  },
  {
    icon: Settings,
    title: 'n8n Workflows',
    description: 'Custom integrations that connect everything. Slack notifications. Airtable syncs. Your tools talking to each other.',
    color: 'text-emerald-400',
    gradient: 'from-emerald-600/30',
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

export default function ShopifyAutomationSection() {
  return (
    <section id="automation" className="section-padding" aria-label="Shopify automation and workflow systems">
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ecommerce infrastructure
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Automation that{' '}
            <span className="gradient-text">actually scales.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Commerce infrastructure, not just websites. Automation systems, workflows, and intelligent operations. Build once, scale
            infinitely.
          </p>
        </motion.div>

        {/* Automation Features */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {automationFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative rounded-2xl border border-white/[0.08] overflow-hidden group cursor-default transition-all duration-300 p-8"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 60px rgba(${feature.color === 'text-amber-400' ? '245, 158, 11' : feature.color === 'text-violet-400' ? '139, 92, 246' : feature.color === 'text-cyan-400' ? '34, 211, 238' : '16, 185, 129'}, 0.1)` }}
                />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300 mb-4">
                    <Icon size={24} className={feature.color} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Integration showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-cyan-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl text-white mb-4">Why automation is infrastructure.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              A Shopify store without automation is like a warehouse with no conveyor belts. Everything moves manually. Everything
              breaks. Everything costs.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              We integrate Shopify with n8n, Zapier, and custom APIs. Order workflows that move without manual work. CRM that stays
              in sync. Inventory that never lies. Customers who get instant emails. Reporting that updates in real&apos;time.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Ecommerce infrastructure means your team can focus on growth, not operations. That&apos;s what scales. That&apos;s what we
              build.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
