'use client'

import { motion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Commerce Strategy',
    description:
      'We start with your goals. Product positioning. Customer psychology. Competitive landscape. The strategy that informs every design decision.',
    color: 'from-emerald-600/30',
    borderColor: 'border-emerald-500/40',
  },
  {
    number: '2',
    title: 'UX Architecture',
    description:
      'Design system thinking. User flows mapped. Product experience designed. Every interaction planned for conversion and joy.',
    color: 'from-teal-600/30',
    borderColor: 'border-teal-500/40',
  },
  {
    number: '3',
    title: 'Storefront Engineering',
    description:
      'Clean component architecture. Shopify API integration. Custom logic. Built in React/Next.js or Hydrogen. Everything production-ready.',
    color: 'from-cyan-600/30',
    borderColor: 'border-cyan-500/40',
  },
  {
    number: '4',
    title: 'Automation Systems',
    description:
      'Order workflows. Inventory sync. CRM integration. n8n orchestration. Backend infrastructure that scales and doesn&apos;t break.',
    color: 'from-sky-600/30',
    borderColor: 'border-sky-500/40',
  },
  {
    number: '5',
    title: 'Performance Optimization',
    description:
      'Core Web Vitals tuned. Images optimized. Caching strategies. Third-party scripts audited. Every millisecond matters for conversion.',
    color: 'from-violet-600/30',
    borderColor: 'border-violet-500/40',
  },
  {
    number: '6',
    title: 'Launch & Iteration',
    description:
      'Testing in production. Monitoring dashboards. A/B frameworks ready. We don&apos;t disappear after launch. Your store gets better over time.',
    color: 'from-purple-600/30',
    borderColor: 'border-purple-500/40',
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

export default function ShopifyProcessSection() {
  return (
    <section id="process" className="section-padding" aria-label="Shopify development process and workflow">
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Ecommerce engineering process
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How we <span className="gradient-text">build Shopify stores.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not agency templates. A thoughtful engineering workflow designed for modern ecommerce. Strategy to launch, then beyond.
          </p>
        </motion.div>

        {/* Process steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={item}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className={`relative rounded-2xl border border-white/[0.08] ${step.borderColor} overflow-hidden group cursor-default transition-all duration-300 p-8 sm:p-8`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${step.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10 flex items-start gap-6">
                {/* Step number */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                  <span className="font-heading font-bold text-lg text-white/60 group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>

                {/* Check icon on hover */}
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check size={20} className="text-white/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-cyan-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl text-white mb-4">Not a waterfall. Not chaos.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              We work iteratively. Commerce strategy informs design. Design informs engineering. Testing and optimization happen
              throughout. We ship in phases, not big bangs. Your feedback shapes the outcome.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The result is storefronts that are thoughtfully built, well-tested, and ready to scale. Shopify stores that don&apos;t just
              exist—they convert, they perform, and they grow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
