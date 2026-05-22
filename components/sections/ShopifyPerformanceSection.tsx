'use client'

import { motion, type Variants } from 'framer-motion'
import { Zap, Users, DollarSign, Clock } from 'lucide-react'

const performanceMetrics = [
  {
    icon: Clock,
    stat: '< 2s',
    label: 'Load Time',
    description: 'Every millisecond matters. Slow stores lose customers. We build for speed.',
  },
  {
    icon: Users,
    stat: '98+',
    label: 'Lighthouse',
    description: 'Performance, accessibility, best practices. Every metric matters for SEO and conversions.',
  },
  {
    icon: DollarSign,
    stat: '+25%',
    label: 'Conversion Lift',
    description: 'Fast, optimized storefronts convert better. Better UX means better revenue.',
  },
  {
    icon: Zap,
    stat: '0.1s',
    label: 'Interaction Delay',
    description: 'Responsive interactions. Zero janky moments. Every tap feels intentional and instant.',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ShopifyPerformanceSection() {
  return (
    <section id="shopify-performance" className="section-padding" aria-label="Shopify storefront performance metrics">
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
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            Performance is profit
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Slow stores lose{' '}
            <span className="gradient-text">attention fast.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Every 100ms of latency costs conversions. Good ecommerce quietly removes friction. We build Shopify stores that perform,
            convert, and scale.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {performanceMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative rounded-2xl border border-white/[0.08] hover:border-amber-500/40 overflow-hidden group cursor-default transition-all duration-300 p-8"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: 'inset 0 0 60px rgba(245, 158, 11, 0.1)' }}
                />

                <div className="relative z-10 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={24} className="text-amber-400" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-heading font-bold text-3xl text-white mb-1">{metric.stat}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest mb-2">{metric.label}</div>
                    <p className="text-sm text-gray-400 leading-relaxed">{metric.description}</p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-amber-600/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Performance benefits */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            {
              title: 'Mobile Optimized',
              description: 'Your store works perfectly on every device. Fast on 4G. Smooth on old phones. No compromises.',
            },
            {
              title: 'Core Web Vitals',
              description: 'LCP, FID, CLS all optimized. Google ranks faster sites higher. Your store wins in search.',
            },
            {
              title: 'Conversion Ready',
              description: 'Fast checkout. Quick product loads. Smooth interactions. Every millisecond improves bottom line.',
            },
          ].map((benefit) => (
            <motion.div
              key={benefit.title}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-white/[0.08] hover:border-white/[0.15] p-6 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
            >
              <h3 className="font-heading font-bold text-lg text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
