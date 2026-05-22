'use client'

import { motion, type Variants } from 'framer-motion'
import { Network, Brain, Zap, BookOpen, Code2, Database } from 'lucide-react'

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

const cards = [
  {
    icon: Brain,
    title: 'Semantic SEO',
    description: 'Build meaning into your content architecture. AI understands context, relationships, and intent. Structure matters more than ever.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Zap,
    title: 'AI Discoverability',
    description: 'Make your site findable by LLMs, search engines, and AI systems. Optimize for how modern discovery actually works.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Code2,
    title: 'Structured Content',
    description: 'JSON-LD schemas, microdata, and semantic HTML. Give AI the metadata it needs to understand your content.',
    gradient: 'from-blue-600/30 to-sky-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Network,
    title: 'Entity Systems',
    description: 'Build knowledge graphs and entity relationships. Modern search is about connections, not just keywords.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: Database,
    title: 'AI-Readable Architecture',
    description: 'Design information architecture that scales with AI understanding. Clean, logical, interconnected systems.',
    gradient: 'from-amber-600/30 to-yellow-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: BookOpen,
    title: 'Metadata Systems',
    description: 'OpenGraph, JSON-LD, canonical tags, and metadata layering. Every signal matters for AI crawlers.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
]

function Card({ card }: { card: typeof cards[0] }) {
  const Icon = card.icon
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl border border-white/[0.08] overflow-hidden p-6 sm:p-7 group cursor-default transition-all duration-300 hover:border-white/[0.12]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.12] transition-colors duration-200`}>
          <Icon size={24} className={`${card.iconColor} group-hover:scale-110 transition-transform duration-200`} />
        </div>
        <h3 className="font-heading font-bold text-lg text-white mb-2">
          {card.title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
          {card.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function AISearchOptimizationWhatItMeans() {
  return (
    <section id="what-it-means" className="section-padding" aria-label="What AI search optimization means">
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
            Core systems
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            What AI search optimization{' '}
            <span className="gradient-text">actually means.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Modern visibility isn&apos;t about fooling algorithms. It&apos;s about building systems that AI genuinely understands. Here&apos;s what that looks like.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {cards.map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
