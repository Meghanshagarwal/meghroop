'use client'

import { motion, type Variants } from 'framer-motion'
import { FileJson, Code2, Search, Zap, CheckCircle2, Link2, Brain } from 'lucide-react'

type Tech = {
  name: string
  icon: React.ElementType
  color: string
  bg: string
  border: string
  category: string
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

const schemaAndData: Tech[] = [
  { name: 'JSON-LD', icon: FileJson, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', category: 'Schema' },
  { name: 'Schema.org', icon: Code2, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', category: 'Schema' },
  { name: 'OpenGraph', icon: Link2, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20', category: 'Schema' },
  { name: 'Twitter Cards', icon: Link2, color: 'text-sky-400', bg: 'bg-sky-500/10', border: 'border-sky-500/20', category: 'Schema' },
]

const aiReadyTech: Tech[] = [
  { name: 'Semantic HTML', icon: Code2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', category: 'Foundation' },
  { name: 'Next.js', icon: Code2, color: 'text-white', bg: 'bg-white/5', border: 'border-white/10', category: 'Framework' },
  { name: 'Structured Metadata', icon: FileJson, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20', category: 'Data' },
  { name: 'Core Web Vitals', icon: Zap, color: 'text-amber-400', bg: 'bg-amber-500/10', border: 'border-amber-500/20', category: 'Performance' },
]

const searchAndCrawlers: Tech[] = [
  { name: 'Google Search Console', icon: Search, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', category: 'Monitoring' },
  { name: 'Lighthouse', icon: CheckCircle2, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', category: 'Audit' },
  { name: 'AI Crawlers', icon: Zap, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', category: 'AI' },
  { name: 'LLM Optimization', icon: Brain, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', category: 'AI' },
]

function TechCard({ tech }: { tech: Tech }) {
  const Icon = tech.icon
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
      className={`relative rounded-2xl border ${tech.border} ${tech.bg} p-4 flex flex-col items-center gap-3 cursor-default group transition-all duration-300`}
    >
      <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
        <Icon size={20} className={tech.color} />
      </div>
      <span className="text-xs text-gray-400 font-medium text-center group-hover:text-white transition-colors duration-200">
        {tech.name}
      </span>
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tech.bg}`} />
    </motion.div>
  )
}

export default function AISearchOptimizationTechStack() {
  return (
    <section id="tech" className="section-padding overflow-hidden" aria-label="AI search optimization technology stack">
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
            Tech Stack
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Built with tools we{' '}
            <span className="gradient-text">genuinely trust.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Modern tech stack for AI search optimization. Every tool chosen for semantic clarity, crawlability, and performance. No bloat. All signal.
          </p>
        </motion.div>

        {/* Schema & Data */}
        <div className="mb-12">
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Schema & Metadata</span>
            <div className="flex-1 h-px bg-cyan-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {schemaAndData.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* AI-Ready Stack */}
        <div className="mb-12">
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">AI-Ready Stack</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {aiReadyTech.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Search & Crawlers */}
        <div>
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Search & Crawlers</span>
            <div className="flex-1 h-px bg-violet-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {searchAndCrawlers.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Mobile stack list */}
        <div className="sm:hidden space-y-4">
          <div>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">All Technologies</p>
            <div className="grid grid-cols-2 gap-3">
              {[...schemaAndData, ...aiReadyTech, ...searchAndCrawlers].map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Why this stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Why this tech stack?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              JSON-LD and Schema.org give AI precise semantic data. Semantic HTML ensures both humans and crawlers understand structure. Next.js provides server-side rendering, essential for SEO and proper crawlability. Core Web Vitals optimization ensures pages load fast—a ranking signal across all search systems. Google Search Console and Lighthouse give real visibility into performance. And AI crawler optimization ensures your site is indexed and understood by LLM systems. This stack isn't just fast—it's semantic-first and AI-ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
