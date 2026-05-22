'use client'

import { motion, type Variants } from 'framer-motion'
import { Boxes, Layers, Structure, Zap } from 'lucide-react'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const systems = [
  {
    icon: Structure,
    title: 'Semantic Architecture',
    description: 'Information organized by meaning, not marketing categories. Topics, subtopics, and related concepts arranged logically.',
  },
  {
    icon: Layers,
    title: 'Service-Page Structuring',
    description: 'Each service page is a semantic system. Clear intent, comprehensive context, proper hierarchies. Not thin content.',
  },
  {
    icon: Boxes,
    title: 'Metadata Layering',
    description: 'Title tags, meta descriptions, OpenGraph, JSON-LD. Multiple signals telling the same semantic story.',
  },
  {
    icon: Zap,
    title: 'Schema Implementation',
    description: 'Structured data that describes exactly what you offer. Product schemas, local business, FAQs, articles, all properly marked.',
  },
  {
    icon: Structure,
    title: 'AI-Readable UX',
    description: 'Clean code, semantic HTML, logical navigation. Humans and AI can both understand the structure.',
  },
  {
    icon: Layers,
    title: 'Internal Linking Systems',
    description: 'Links that create semantic connections. Not just homepage links everywhere. Contextual, meaningful, strategic.',
  },
]

function System({ system, index }: { system: typeof systems[0]; index: number }) {
  const Icon = system.icon
  return (
    <motion.div
      variants={item}
      className="relative rounded-2xl border border-white/[0.08] overflow-hidden p-6 sm:p-7 group cursor-default transition-all duration-300 hover:border-white/[0.12]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.12] transition-colors duration-200">
            <Icon size={24} className="text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm font-heading font-bold text-cyan-400">{String(index + 1).padStart(2, '0')}.</span>
              <h3 className="font-heading font-bold text-lg text-white">
                {system.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
              {system.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AISearchOptimizationWebStructure() {
  return (
    <section id="web-structure" className="section-padding" aria-label="AI-ready website structure">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Systems design
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            AI-ready website{' '}
            <span className="gradient-text">structure.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not just responsive design. Engineered systems that scale with AI understanding. Here's what modern website architecture looks like.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {systems.map((system, index) => (
            <System key={system.title} system={system} index={index} />
          ))}
        </motion.div>

        {/* Design principles */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Design principles for AI-ready systems.
            </h3>
            <div className="space-y-3 text-gray-400">
              <p>
                <span className="text-white font-semibold">Clarity first:</span> Your structure should be obvious to both humans and AI. No hidden complexity.
              </p>
              <p>
                <span className="text-white font-semibold">Semantic consistency:</span> The same concepts should be named and marked consistently throughout.
              </p>
              <p>
                <span className="text-white font-semibold">Context layering:</span> Metadata, schema, and content all tell the same semantic story.
              </p>
              <p>
                <span className="text-white font-semibold">Scalable systems:</span> Architecture that grows with your business without creating silos or orphaned content.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
