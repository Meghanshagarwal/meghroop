'use client'

import { motion, type Variants } from 'framer-motion'
import { Code2, Link2, Shield, Zap, Database, GitBranch } from 'lucide-react'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const systems = [
  {
    icon: Code2,
    title: 'Schema Markup',
    description: 'JSON-LD for structured data. Product schemas, organization info, article markup. Tell AI exactly what you\'re offering.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
  },
  {
    icon: Database,
    title: 'Metadata Layering',
    description: 'OpenGraph tags, Twitter cards, canonical URLs. Every signal helps AI understand your content and prevents duplication issues.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Link2,
    title: 'Semantic Linking',
    description: 'Internal links that make sense contextually. Not keyword-anchor text, but meaningful connections between related concepts.',
    gradient: 'from-blue-600/30 to-sky-600/30',
    iconColor: 'text-blue-400',
  },
  {
    icon: Zap,
    title: 'Crawlability & Core Web Vitals',
    description: 'Fast load times, mobile optimization, and proper robots.txt. AI crawlers need to actually reach your content.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
  },
  {
    icon: GitBranch,
    title: 'Semantic HTML Structure',
    description: 'Proper heading hierarchy, semantic elements, and logical content flow. Structure that both humans and AI can follow.',
    gradient: 'from-amber-600/30 to-yellow-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Shield,
    title: 'Trust & Authority Signals',
    description: 'E-E-A-T implementation, author bio, publication dates, and credentials. AI evaluates source quality.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
  },
]

function SystemCard({ system }: { system: typeof systems[0] }) {
  const Icon = system.icon
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative rounded-2xl border border-white/[0.08] overflow-hidden p-6 sm:p-7 group cursor-default transition-all duration-300 hover:border-white/[0.12]`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${system.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl bg-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.12] transition-colors duration-200`}>
          <Icon size={24} className={`${system.iconColor} group-hover:scale-110 transition-transform duration-200`} />
        </div>
        <h3 className="font-heading font-bold text-lg text-white mb-2">
          {system.title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed">
          {system.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function AISearchOptimizationTechnicalSEO() {
  return (
    <section id="technical-seo" className="section-padding overflow-hidden" aria-label="Technical SEO and AI systems">
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
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
            Infrastructure layer
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Technical SEO ×{' '}
            <span className="gradient-text">AI Systems.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Structure matters more than ever. These are the technical foundations that make your site discoverable to AI systems.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {systems.map((system) => (
            <SystemCard key={system.title} system={system} />
          ))}
        </motion.div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-lg text-white mb-3">
              Why this matters: Structure matters more than ever.
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Old technical SEO fixed problems. Modern technical SEO is about building systems that scale with AI understanding. When your site is technically sound and semantically structured, it performs better in search engines, shows up more in LLM training data, and becomes a trusted source across discovery channels.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
