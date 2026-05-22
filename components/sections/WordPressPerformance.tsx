'use client'

import { motion } from 'framer-motion'
import { Zap, BarChart3, Globe, Lock } from 'lucide-react'

const performanceMetrics = [
  {
    icon: Zap,
    title: 'Fastest First Contentful Paint',
    description: 'Under 0.8 seconds on average connections. Optimized images, lazy loading, and smart caching strategies.',
    value: '0.8s',
  },
  {
    icon: BarChart3,
    title: 'Core Web Vitals Optimized',
    description: 'LCP, FID, and CLS all in the green. Google-ranked performance metrics built into architecture.',
    value: '95+',
  },
  {
    icon: Globe,
    title: 'Global CDN Delivery',
    description: 'Content served from servers near your users. WordPress cache strategies optimized for edge servers.',
    value: '~50ms',
  },
  {
    icon: Lock,
    title: 'Security First Architecture',
    description: 'WordPress hardened and maintained. Regular security audits, dependency updates, and threat monitoring.',
    value: 'A+',
  },
]

export default function WordPressPerformance() {
  return (
    <section className="section-padding overflow-hidden" aria-label="WordPress performance engineering">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            WordPress × Performance
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Fast should feel{' '}
            <span className="gradient-text">invisible.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Performance isn&apos;t a feature. It&apos;s infrastructure. Good systems quietly improve everything. WordPress sites that load instantly. Content that serves globally. Architecture that scales.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 sm:mb-16">
          {performanceMetrics.map((metric, idx) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/[0.08] hover:border-white/[0.15] overflow-hidden group bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <span className="text-lg font-heading font-bold text-cyan-400">{metric.value}</span>
                </div>
                <h3 className="font-heading font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                  {metric.title}
                </h3>
                <p className="text-sm text-gray-400">{metric.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Deep dive section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Left side - Text */}
          <div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4">
              Performance is part of the{' '}
              <span className="gradient-text">experience.</span>
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Every millisecond counts. Users abandon slow sites. Search engines rank them lower. Teams stop using sluggish tools. We treat performance as architecture, not afterthought.
              </p>
              <p className="text-gray-400 leading-relaxed">
                WordPress on our architecture: optimized database queries, strategic caching, asset optimization, global CDN delivery. Your content loads faster than the user can blink.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Monitoring, analytics, and continuous optimization. We track Core Web Vitals in production. Performance degrades? We fix it before you notice.
              </p>
            </div>
          </div>

          {/* Right side - Feature list */}
          <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02] p-8">
            <h4 className="font-heading font-bold text-white mb-6">What&apos;s included:</h4>
            <ul className="space-y-3">
              {[
                'Image optimization & modern formats',
                'Strategic caching & cache busting',
                'Code splitting & lazy loading',
                'Database query optimization',
                'Global CDN integration',
                'Performance monitoring & alerts',
                'Continuous optimization',
                'Regular security updates',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
