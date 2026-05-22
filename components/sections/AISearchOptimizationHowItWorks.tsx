'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, Lightbulb, Zap } from 'lucide-react'

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

const concepts = [
  {
    title: 'LLMs Read Semantic Meaning',
    description: 'Large language models don\'t scan keywords. They parse meaning, context, and relationships. Your content needs to express ideas clearly, not keyword-stuff.',
    accent: 'text-purple-400',
    gradient: 'from-purple-600/20 to-violet-600/20',
  },
  {
    title: 'Entities & Context Matter',
    description: 'AI systems understand entities and how they relate. A person, brand, location, or concept isn\'t just text—it\'s a node in a knowledge graph. Build with that in mind.',
    accent: 'text-cyan-400',
    gradient: 'from-cyan-600/20 to-blue-600/20',
  },
  {
    title: 'Structured Data Is Infrastructure',
    description: 'Schema markup, JSON-LD, and structured metadata are how you tell AI what your content means. Without it, you\'re making AI guess.',
    accent: 'text-blue-400',
    gradient: 'from-blue-600/20 to-sky-600/20',
  },
  {
    title: 'AI-Generated Answers Need Systems',
    description: 'ChatGPT and similar models pull from indexed content. If your site is structured cleanly and semantically rich, it\'s more likely to be the source for AI answers.',
    accent: 'text-pink-400',
    gradient: 'from-pink-600/20 to-rose-600/20',
  },
  {
    title: 'Conversational Discovery Works Differently',
    description: 'People ask questions to AI, not keywords to search bars. Optimize for natural language, intent, and the full context of how people actually ask.',
    accent: 'text-amber-400',
    gradient: 'from-amber-600/20 to-yellow-600/20',
  },
]

function ConceptCard({ concept, index }: { concept: typeof concepts[0]; index: number }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ x: 8, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl border border-white/[0.08] overflow-hidden p-6 sm:p-7 group cursor-default transition-all duration-300 hover:border-white/[0.12]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${concept.gradient}`} />
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className={`text-2xl font-heading font-bold ${concept.accent}`}>{String(index + 1).padStart(2, '0')}.</span>
              <h3 className="font-heading font-bold text-lg text-white">
                {concept.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
              {concept.description}
            </p>
          </div>
          <ArrowRight size={20} className={`flex-shrink-0 ${concept.accent} opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200 mt-1`} />
        </div>
      </div>
    </motion.div>
  )
}

export default function AISearchOptimizationHowItWorks() {
  return (
    <section id="how-it-works" className="section-padding" aria-label="How AI search systems work">
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
            <Lightbulb size={14} className="text-amber-400" />
            The intelligence layer
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            How AI search actually{' '}
            <span className="gradient-text">works now.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Understanding the mechanics of AI-powered search helps us build sites that rank, get discovered, and become sources of truth.
          </p>
        </motion.div>

        {/* Concepts */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {concepts.map((concept, index) => (
            <ConceptCard key={concept.title} concept={concept} index={index} />
          ))}
        </motion.div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5" />
          <div className="relative z-10 flex items-start gap-4">
            <Zap size={24} className="text-cyan-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                The insight: Visibility is becoming semantic.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Old SEO was about optimizing for search engine crawlers. Modern SEO is about building systems that make semantic sense. When your content is clear, structured, and semantically rich, it works better everywhere—in search engines, LLMs, voice search, and emerging discovery systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
