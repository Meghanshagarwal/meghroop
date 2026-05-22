'use client'

import { motion, type Variants } from 'framer-motion'

const reasons = [
  {
    title: 'They all use templates.',
    description:
      'Theme stores look interchangeable. Same layouts. Same interactions. Same boring. Templates are cheap. They don\'t build brand memory. They don\'t convert better than competitors.',
    color: 'from-red-600/30',
    borderColor: 'border-red-500/40',
  },
  {
    title: 'They prioritize volume over quality.',
    description:
      'Generic Shopify agencies churn out stores fast. 100 stores a year. Each one generic. No thought on UX. No focus on performance. No optimization for conversion. Just template + product photos + done.',
    color: 'from-orange-600/30',
    borderColor: 'border-orange-500/40',
  },
  {
    title: 'They ignore performance.',
    description:
      'Bloated templates with slow third-party apps. 100+ API calls. JavaScript everywhere. 3-4 second load times. Slow stores lose customers. But generic builds don\'t measure or care.',
    color: 'from-amber-600/30',
    borderColor: 'border-amber-500/40',
  },
  {
    title: 'They don\'t focus on conversion.',
    description:
      'Generic stores have generic checkout flows. No psychology. No friction removal. No optimization. A store that doesn\'t convert is just a brochure. Expensive brochures that make no money.',
    color: 'from-yellow-600/30',
    borderColor: 'border-yellow-500/40',
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

export default function WhyStoresFeelGeneric() {
  return (
    <section id="why-generic" className="section-padding" aria-label="Why most ecommerce stores feel generic">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Real talk
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why most stores{' '}
            <span className="gradient-text">feel interchangeable.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            People remember experiences. Not themes. Not templates. Modern ecommerce deserves modern systems, not throwaway
            solutions.
          </p>
        </motion.div>

        {/* Reasons */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {reasons.map((reason, idx) => (
            <motion.div
              key={reason.title}
              variants={item}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border border-white/[0.08] ${reason.borderColor} overflow-hidden group cursor-default transition-all duration-300 p-8`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${reason.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex items-start gap-6">
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                  <span className="font-heading font-bold text-lg text-white/60 group-hover:text-white transition-colors duration-300">
                    {idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-orange-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl text-white mb-4">We build different.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Custom architecture. Thoughtful design. Performance-first engineering. Every store we build is designed for your exact
              business, your exact customers, your exact goals.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We don't sell volume. We build systems. Storefronts that convert. Stores your customers remember. Modern commerce
              infrastructure that scales with you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
