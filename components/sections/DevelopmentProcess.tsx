'use client'

import { motion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Strategy & Discovery',
    description: 'We start with why, not what. Your goals, your audience, your competition. The insight that becomes the foundation.',
    color: 'from-blue-600/30',
    borderColor: 'border-blue-500/40',
  },
  {
    number: '2',
    title: 'System Architecture',
    description: 'We design the bones. Design systems, component hierarchies, data flows. Everything planned before code is written.',
    color: 'from-cyan-600/30',
    borderColor: 'border-cyan-500/40',
  },
  {
    number: '3',
    title: 'Interface Design',
    description: 'Pixel-perfect design in context. Components designed to be built. Motion designed to be coded. Everything documented.',
    color: 'from-purple-600/30',
    borderColor: 'border-purple-500/40',
  },
  {
    number: '4',
    title: 'Frontend Engineering',
    description: 'Clean code, component libraries, performance budgets. Every line written with scale in mind. TypeScript. Testing. Documentation.',
    color: 'from-violet-600/30',
    borderColor: 'border-violet-500/40',
  },
  {
    number: '5',
    title: 'Motion & Optimization',
    description: 'Animation systems, interaction design, performance tuning. Every frame optimized. Every transition purposeful.',
    color: 'from-pink-600/30',
    borderColor: 'border-pink-500/40',
  },
  {
    number: '6',
    title: 'Launch & Evolution',
    description: 'We don&apos;t disappear after launch. Monitoring, optimization, and iteration. Your website gets better over time.',
    color: 'from-emerald-600/30',
    borderColor: 'border-emerald-500/40',
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

export default function DevelopmentProcess() {
  return (
    <section id="process" className="section-padding" aria-label="Our web development process and workflow">
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
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            The engineering process
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How we <span className="gradient-text">actually build.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not generic agency steps. A thoughtful engineering workflow designed for modern web development. Strategy to launch, then beyond.
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
              className={`relative rounded-2xl border border-white/[0.08] ${step.borderColor} overflow-hidden group cursor-default transition-all duration-300 p-6 sm:p-8`}
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
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
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
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl text-white mb-4">
              Not a waterfall. Not chaos.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We work iteratively. Design feeds engineering. Engineering informs design. Testing and optimization happen throughout. We ship in phases, not big bangs. Your feedback shapes the outcome. The result is websites that are thoughtfully built, well-tested, and ready for scale.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
