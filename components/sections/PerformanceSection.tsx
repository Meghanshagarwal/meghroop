'use client'

import { motion } from 'framer-motion'
import { Zap, TrendingUp, Gauge, Accessibility, Lock, Smartphone } from 'lucide-react'

const metrics = [
  {
    icon: Gauge,
    label: 'Page Load',
    value: '<1s',
    description: 'Sub-second load times across all devices',
  },
  {
    icon: TrendingUp,
    label: 'Lighthouse',
    value: '95+',
    description: 'Performance scores consistently above 95',
  },
  {
    icon: Accessibility,
    label: 'Accessibility',
    value: 'WCAG AA',
    description: 'Built for everyone, no compromises',
  },
  {
    icon: Zap,
    label: 'Core Web Vitals',
    value: 'Optimized',
    description: 'LCP, FID, CLS all in the green',
  },
  {
    icon: Lock,
    label: 'Security',
    value: 'A+',
    description: 'SSL, headers, and best practices',
  },
  {
    icon: Smartphone,
    label: 'Responsive',
    value: '100%',
    description: 'Pixel perfect from mobile to 4K',
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function PerformanceSection() {
  return (
    <section id="performance" className="section-padding relative overflow-hidden" aria-label="Performance and optimization focus">
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
            Performance as a feature
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Fast should feel <span className="gradient-text">invisible.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Speed isn&apos;t just a metric—it&apos;s part of the experience. Every website we build is optimized from the ground up for performance. Good engineering feels invisible.
          </p>
        </motion.div>

        {/* Philosophy boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.08] hover:border-amber-500/40 overflow-hidden group cursor-default transition-all duration-300 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/5 to-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Optimized by default
              </h3>
              <p className="text-gray-400">
                Image optimization. Code splitting. Edge caching. Lazy loading. Smart prefetching. Not performance hacks added later—baked into the architecture from day one.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl border border-white/[0.08] hover:border-sky-500/40 overflow-hidden group cursor-default transition-all duration-300 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <h3 className="font-heading font-bold text-xl text-white mb-3">
                Metrics that matter
              </h3>
              <p className="text-gray-400">
                We don&apos;t ship anything until Core Web Vitals are green. Lighthouse scores are tracked. Performance budgets are respected. Speed is measured, not assumed.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.label}
                {...fadeUp(i * 0.05)}
                whileInView="animate"
                initial="initial"
                viewport={{ once: true }}
                className="relative rounded-2xl border border-white/[0.08] hover:border-white/[0.15] overflow-hidden group cursor-default transition-all duration-300 p-6"
              >
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.06] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-white/60" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                    <p className="font-heading font-bold text-xl text-white mb-1">{metric.value}</p>
                    <p className="text-xs text-gray-400">{metric.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl text-white mb-4">
              Performance is part of the user experience.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We care about metrics because they translate to human experience. Slower pages lose users. Good interfaces quietly remove friction. Performance engineering ensures every interaction feels snappy, every animation runs at 60fps, and the entire experience feels premium. Not fast enough to notice it&apos;s fast—fast enough that slow feels wrong.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
