'use client'

import { motion } from 'framer-motion'
import { Search, Sparkles, Link2, Zap } from 'lucide-react'

const seoStrategies = [
  {
    icon: Search,
    title: 'Semantic Architecture',
    description: 'Proper heading hierarchy, microdata markup, and structured content. Search engines understand exactly what your site is about.',
    points: ['H1/H2/H3 hierarchy', 'Schema markup', 'Semantic HTML'],
  },
  {
    icon: Sparkles,
    title: 'AI Search Optimization',
    description: 'Your content optimized for modern AI search engines. ChatGPT, Perplexity, Claude can actually understand and cite your content.',
    points: ['Snippet optimization', 'Attribution headers', 'Content clarity'],
  },
  {
    icon: Link2,
    title: 'Content Infrastructure',
    description: 'Internal linking systems, taxonomy optimization, and content organization that helps bots crawl and understand relationships.',
    points: ['Smart linking', 'Content taxonomy', 'Topic clustering'],
  },
  {
    icon: Zap,
    title: 'Performance = SEO',
    description: 'Google ranks faster sites higher. Core Web Vitals aren\'t just metrics—they\'re ranking factors. Fast WordPress = better rankings.',
    points: ['Core Web Vitals', 'Mobile first', 'Fast delivery'],
  },
]

export default function WordPressSEO() {
  return (
    <section className="section-padding overflow-hidden" aria-label="WordPress SEO and content infrastructure">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            SEO & Content Infrastructure
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Content infrastructure{' '}
            <span className="gradient-text">engineered for discovery.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            SEO isn&apos;t about keywords. It&apos;s about architecture. Semantic HTML, proper structure, and content organization that helps both search engines and AI understand what you&apos;re building.
          </p>
        </motion.div>

        {/* Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 sm:mb-16">
          {seoStrategies.map((strategy, idx) => {
            const Icon = strategy.icon
            return (
              <motion.div
                key={strategy.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/[0.08] hover:border-white/[0.15] overflow-hidden group bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 p-7"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <Icon size={24} className="text-pink-400" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {strategy.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {strategy.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {strategy.points.map((point) => (
                    <span key={point} className="text-xs px-2 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400">
                      {point}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Technical SEO Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02] p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-8">
            Our technical SEO checklist:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Optimized robots.txt and sitemap',
              'Structured data & schema markup',
              'Open Graph & Twitter cards',
              'Canonical URLs for duplicate prevention',
              'Mobile optimization & responsiveness',
              'XML sitemap auto-generation',
              'Meta description optimization',
              'Internal linking strategy',
              'Page speed optimization',
              'Crawlability analysis',
              'Breadcrumb schema markup',
              'Image alt text optimization',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-400">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden bg-gradient-to-br from-pink-600/5 to-purple-600/5 p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg mb-4">
            Future-proofing for AI search
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            AI search engines like ChatGPT and Perplexity are changing how people find information. Your content needs to be discoverable and citable. That means:
          </p>
          <ul className="space-y-2">
            {[
              'Clear, well-structured content that AI can understand',
              'Proper attribution headers so AI knows who created it',
              'Semantic HTML so machines understand context',
              'Original, high-quality content that AI wants to cite',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-400">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
