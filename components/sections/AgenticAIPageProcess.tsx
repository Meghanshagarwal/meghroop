'use client'

import { motion, type Variants } from 'framer-motion'
import { Check } from 'lucide-react'

const steps = [
  {
    number: '1',
    title: 'Discover — week 0',
    description: 'Free 30-min call. We understand your workflow, stack, and constraints. No slide dump.',
    color: 'from-cyan-600/30',
    borderColor: 'border-cyan-500/40',
  },
  {
    number: '2',
    title: 'Scope — week 1',
    description: 'Fixed-fee proposal with outcome targets, timeline, and deliverables. No time-and-materials.',
    color: 'from-blue-600/30',
    borderColor: 'border-blue-500/40',
  },
  {
    number: '3',
    title: 'Build — weeks 2–8',
    description: 'Sprint-based delivery. Working output every week, not just at the end.',
    color: 'from-violet-600/30',
    borderColor: 'border-violet-500/40',
  },
  {
    number: '4',
    title: 'Deploy & measure — week 8+',
    description: 'Go live with evals, monitoring, and weekly ops. We stay on retainer or hand off clean.',
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

export default function AgenticAIPageProcess() {
  return (
    <section id="how-we-work" className="section-padding" aria-label="How we work">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            The engagement
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How we <span className="gradient-text">actually work.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Fixed scope, fixed fee, fixed timeline. Discovery to deployment — then we stay on or hand off clean.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5 sm:gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative rounded-2xl border border-white/[0.08] ${step.borderColor} overflow-hidden transition-all duration-300 p-6 sm:p-8`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${step.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                  <span className="font-heading font-bold text-lg text-white/60 group-hover:text-white transition-colors duration-300">
                    {step.number}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                </div>
                <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Check size={20} className="text-white/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
