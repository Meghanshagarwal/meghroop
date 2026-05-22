'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Network, Layers, Settings, Code2, Zap, CheckCircle2,
} from 'lucide-react'

const processSteps = [
  {
    icon: Network,
    title: 'Entity Mapping',
    description: 'Map your brand entities, products, services, and the semantic relationships between them. Build the knowledge structure.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Layers,
    title: 'Semantic Architecture',
    description: 'Design information architecture that makes semantic sense. Organize topics, subtopics, and connections logically.',
    gradient: 'from-blue-600/30 to-sky-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Code2,
    title: 'Technical SEO Systems',
    description: 'Implement clean code, semantic HTML, and proper technical foundations. Build the infrastructure layer.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Zap,
    title: 'AI Discoverability Optimization',
    description: 'Optimize for AI crawlers, LLM training data inclusion, and modern discovery systems. Make your site findable.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: Settings,
    title: 'Structured Data Engineering',
    description: 'Implement JSON-LD schemas, metadata, OpenGraph tags. Give AI all the signals it needs to understand your content.',
    gradient: 'from-amber-600/30 to-yellow-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: CheckCircle2,
    title: 'Search Performance Evolution',
    description: 'Monitor AI rankings, content inclusion in LLMs, search visibility. Optimize based on data. Continuous improvement.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

function ProcessStep({ step }: { step: typeof processSteps[0] }) {
  const Icon = step.icon
  return (
    <motion.div
      variants={item}
      whileHover={{ x: 8, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl border border-white/[0.08] overflow-hidden p-6 sm:p-7 group cursor-default transition-all duration-300 hover:border-white/[0.12]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.12] transition-colors duration-200`}>
          <Icon size={24} className={`${step.iconColor} group-hover:scale-110 transition-transform duration-200`} />
        </div>
        <h3 className="font-heading font-bold text-lg text-white mb-2">
          {step.title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function AISearchOptimizationProcess() {
  return (
    <section id="process" className="section-padding" aria-label="AI search optimization development process">
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
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            How we build
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Our process.{' '}
            <span className="gradient-text">Technical. Thoughtful. Cinematic.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not generic steps. A modern workflow designed for AI search optimization, semantic architecture, and long-term discoverability.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {processSteps.map((step) => (
            <ProcessStep key={step.title} step={step} />
          ))}
        </motion.div>

        {/* Process insight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-lg text-white mb-3">
              Why this process works.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We don&apos;t just optimize existing websites. We build semantic systems from the ground up. Entity mapping ensures everything makes sense. Architecture design ensures scalability. Technical implementation ensures performance. Discoverability optimization ensures visibility. Structured data engineering ensures AI understands you. And continuous evolution ensures you stay ahead as search keeps changing.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
