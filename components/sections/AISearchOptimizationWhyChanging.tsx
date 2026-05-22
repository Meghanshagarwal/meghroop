'use client'

import { motion, type Variants } from 'framer-motion'
import { TrendingUp, Zap } from 'lucide-react'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
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

const statements = [
  {
    title: 'Search engines are becoming answer engines.',
    description: 'Google is no longer just ranking pages. It\'s generating answers. Your site needs to be the source of truth, not just a ranking.',
    accent: 'text-purple-400',
  },
  {
    title: 'Keyword stuffing died years ago.',
    description: 'AI understands language. Repeating keywords weakens your message. Clear, semantic content ranks better than optimized content.',
    accent: 'text-cyan-400',
  },
  {
    title: 'Modern SEO is infrastructure.',
    description: 'It\'s not about tricks. It\'s about building systems. Schema markup, semantic HTML, structured metadata—these are engineering problems, not copywriting problems.',
    accent: 'text-blue-400',
  },
  {
    title: 'Visibility now depends on context.',
    description: 'Your rank depends on how well you fit the semantic context of searches. A page about "web development" needs to understand that context deeply.',
    accent: 'text-pink-400',
  },
  {
    title: 'Links still matter, but differently.',
    description: 'Quality links signal that others trust you. But contextual links from semantically related sites matter more than high-authority links that don\'t fit.',
    accent: 'text-amber-400',
  },
  {
    title: 'You\'re competing with AI-generated content.',
    description: 'LLMs will generate content on your topics. Your advantage is authenticity, expertise, and original insights that AI can\'t create.',
    accent: 'text-emerald-400',
  },
]

function Statement({ statement, index }: { statement: typeof statements[0]; index: number }) {
  return (
    <motion.div
      variants={item}
      className="relative rounded-2xl border border-white/[0.08] overflow-hidden p-6 sm:p-7 group cursor-default transition-all duration-300 hover:border-white/[0.12]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className={`text-3xl font-heading font-bold ${statement.accent} flex-shrink-0`}>
            {String(index + 1).padStart(2, '0')}
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-white transition-colors">
              {statement.title}
            </h3>
            <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
              {statement.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AISearchOptimizationWhyChanging() {
  return (
    <section id="why-changing" className="section-padding overflow-hidden" aria-label="Why traditional SEO is changing">
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
            <TrendingUp size={14} className="text-violet-400" />
            The shift
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why traditional SEO is{' '}
            <span className="gradient-text">fundamentally changing.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not tactics. Not updates. Fundamental shifts in how search and discovery work. Here&apos;s the reality.
          </p>
        </motion.div>

        {/* Statements Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5"
        >
          {statements.map((statement, index) => (
            <Statement key={statement.title} statement={statement} index={index} />
          ))}
        </motion.div>

        {/* Authority statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5" />
          <div className="relative z-10 flex items-start gap-4">
            <Zap size={24} className="text-violet-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                The bottom line.
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Old SEO strategies won&apos;t work in the new search landscape. You need to build systems that make genuine sense to AI. That means semantic architecture, technical soundness, and authentic expertise. When you do this right, you don&apos;t just rank higher—you become part of the intelligence layer. You become a source of truth.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
