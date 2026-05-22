'use client'

import { motion, type Variants } from 'framer-motion'
import { Brain, Zap, Layers, TrendingUp } from 'lucide-react'

const aiFeatures = [
  {
    icon: Brain,
    title: 'Smart Product Recommendations',
    description: 'AI learns customer behavior. Personalized product suggestions that increase average order value and customer lifetime value.',
    color: 'text-violet-400',
  },
  {
    icon: Zap,
    title: 'Automation Workflows',
    description: 'Intelligent order automation. Inventory management. Customer journey workflows that respond in real-time to behavior.',
    color: 'text-amber-400',
  },
  {
    icon: Layers,
    title: 'Predictive Analytics',
    description: 'Forecast demand. Identify churn risk. Optimize pricing. AI-driven insights that inform better business decisions.',
    color: 'text-cyan-400',
  },
  {
    icon: TrendingUp,
    title: 'Dynamic Experiences',
    description: 'Collections adapt to user. Search results personalize. Cart abandonment flows auto-optimize. Commerce that learns.',
    color: 'text-emerald-400',
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

export default function ShopifyAISection() {
  return (
    <section id="shopify-ai" className="section-padding" aria-label="AI-powered ecommerce systems">
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
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            AI × Shopify
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            The future of{' '}
            <span className="gradient-text">ecommerce infrastructure.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Intelligent automation, personalization at scale, and predictive systems. AI-powered Shopify storefronts that adapt,
            learn, and convert.
          </p>
        </motion.div>

        {/* AI Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {aiFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative rounded-2xl border border-white/[0.08] hover:border-white/[0.15] overflow-hidden group cursor-default transition-all duration-300 p-6 sm:p-8"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: 'inset 0 0 60px rgba(139, 92, 246, 0.1)' }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={24} className={feature.color} />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-violet-600/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Why it matters */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl text-white mb-4">Why AI changes everything.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Most storefronts are static. They show the same products to everyone, the same way, forever. But real shopping is
              personal. AI-powered Shopify systems adapt to each customer—learning what they want before they know it themselves.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Personalization increases AOV by 15-25%. Automation removes manual work. Predictive systems prevent losses. This is
              modern ecommerce infrastructure. Not fancy. Just smart.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
