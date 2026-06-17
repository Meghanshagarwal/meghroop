'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowUpRight, Search, BookOpen, ArrowRight } from 'lucide-react'
import { Article } from '@/lib/journal'
import CodeBuiltVisual from '@/components/common/CodeBuiltVisual'

interface JournalCatalogProps {
  articles: Article[]
}

const categories = ['All', 'AI Infrastructure', 'AI Search Optimization', 'Web Engineering', 'Automation']

export default function JournalCatalog({ articles }: JournalCatalogProps) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Recent articles for sidebar (latest 5, unfiltered)
  const recentArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <section className="relative min-h-screen py-24 sm:py-32 overflow-hidden bg-black">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-medium mb-6 font-heading tracking-wider uppercase"
          >
            <BookOpen size={12} className="text-purple-400" />
            Engineering Journal
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading tracking-tight text-white mb-6 leading-[1.1]"
          >
            Internet-native systems.{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 bg-clip-text text-transparent">
              Engineered with intent.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light mb-4"
          >
            Deep architectural teardowns, technical playbooks, and strategic perspectives on generative engines, high-performance web systems, and autonomous infrastructure.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-gray-500 text-sm sm:text-base leading-relaxed"
          >
            Our engineering journal is a collection of direct playbooks and post-mortems from real production deployments. We document our methods, benchmarks, and breakthroughs in Model Context Protocol (MCP) integrations, Generative Engine Optimization (GEO) indexes, headless e-commerce builds, and complex autonomous workflow systems. No surface-level summaries—just granular logs written by engineers, for engineers.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-white/[0.06]"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-white text-black border-white'
                  : 'bg-white/[0.02] text-gray-400 border-white/[0.08] hover:border-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Content: Articles List + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* ─── LEFT: Vertical Article List ─── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="popLayout">
              {filteredArticles.length > 0 ? (
                <motion.div layout className="flex flex-col gap-8">
                  {filteredArticles.map((article, idx) => (
                    <motion.article
                      key={article.slug}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden hover:border-white/[0.15] transition-colors duration-300"
                    >
                      {/* Background Radial Glow */}
                      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-purple-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <div className="flex flex-col md:flex-row">
                        {/* Visual / Thumbnail */}
                        <div className="relative w-full md:w-80 lg:w-96 shrink-0 h-56 md:h-auto min-h-[220px] overflow-hidden border-b md:border-b-0 md:border-r border-white/[0.06] bg-black">
                          <CodeBuiltVisual category={article.category} slug={article.slug} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between min-h-[260px]">
                          <div>
                            {/* Meta Row */}
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <span className="px-3 py-1 rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/70 text-[11px] tracking-wider uppercase font-medium font-heading">
                                {article.category}
                              </span>
                              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                <Calendar size={13} />
                                {new Date(article.date).toLocaleDateString('en-US', {
                                  year: 'numeric',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </span>
                              <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                <Clock size={13} />
                                {article.readTime}
                              </span>
                            </div>

                            {/* Title */}
                            <Link href={`/journal/${article.slug}`} className="block group/link">
                              <h2 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors duration-300 mb-3 leading-snug">
                                {article.title}
                              </h2>
                            </Link>

                            {/* Description */}
                            <p className="text-gray-400 text-sm sm:text-base font-light line-clamp-3 leading-relaxed">
                              {article.description}
                            </p>
                          </div>

                          {/* Footer: Author + Read Link */}
                          <div className="flex items-center justify-between pt-5 mt-5 border-t border-white/[0.06]">
                            <div className="flex items-center gap-3">
                              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/[0.1] bg-white/[0.05]">
                                <Image
                                  src={article.author.avatar}
                                  alt={article.author.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <div className="text-sm font-medium text-white">{article.author.name}</div>
                                <div className="text-[10px] text-gray-500 font-heading tracking-wide uppercase">
                                  {article.author.role}
                                </div>
                              </div>
                            </div>

                            <Link
                              href={`/journal/${article.slug}`}
                              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/[0.08] bg-white/[0.02] text-gray-400 text-xs font-medium hover:text-white hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group/read"
                              aria-label={`Read ${article.title}`}
                            >
                              Read Article
                              <ArrowRight size={14} className="group-hover/read:translate-x-0.5 transition-transform duration-300" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20 border border-dashed border-white/[0.08] rounded-3xl"
                >
                  <p className="text-gray-500 text-lg mb-2">No articles found matching your criteria.</p>
                  <button
                    onClick={() => {
                      setActiveCategory('All')
                      setSearchQuery('')
                    }}
                    className="text-purple-400 text-sm hover:underline"
                  >
                    Clear all filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ─── RIGHT: Sticky Sidebar ─── */}
          <aside className="w-full lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-28 space-y-8">

              {/* Search Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="p-5 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <h3 className="text-sm font-bold font-heading text-white mb-4 tracking-wider uppercase flex items-center gap-2">
                  <Search size={14} className="text-purple-400" />
                  Search Articles
                </h3>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
                    <Search size={14} />
                  </span>
                  <input
                    type="text"
                    placeholder="Search by title, topic..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white/[0.03] text-white placeholder-gray-600 border border-white/[0.08] focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 rounded-xl py-2.5 pl-10 pr-4 text-sm transition-all duration-300 outline-none"
                  />
                </div>
              </motion.div>

              {/* Recently Added Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.45 }}
                className="p-5 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <h3 className="text-sm font-bold font-heading text-white mb-5 tracking-wider uppercase flex items-center gap-2">
                  <BookOpen size={14} className="text-purple-400" />
                  Recently Added
                </h3>
                <div className="space-y-4">
                  {recentArticles.map((article, idx) => (
                    <Link
                      key={article.slug}
                      href={`/journal/${article.slug}`}
                      className="group flex gap-3 items-start"
                    >
                      {/* Number Badge */}
                      <span className="w-7 h-7 shrink-0 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-[10px] font-mono text-gray-500 group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all duration-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm text-gray-300 font-medium leading-snug line-clamp-2 group-hover:text-purple-300 transition-colors duration-300">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-600">
                          <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          <span>·</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ArrowUpRight size={14} className="text-gray-600 group-hover:text-purple-400 shrink-0 mt-0.5 transition-colors duration-300" />
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Categories Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="p-5 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent"
              >
                <h3 className="text-sm font-bold font-heading text-white mb-4 tracking-wider uppercase">
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.filter(c => c !== 'All').map((cat) => {
                    const count = articles.filter(a => a.category === cat).length
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat === activeCategory ? 'All' : cat)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all duration-300 border ${
                          activeCategory === cat
                            ? 'bg-purple-500/10 text-purple-300 border-purple-500/20'
                            : 'bg-white/[0.01] text-gray-400 border-white/[0.06] hover:border-white/[0.12] hover:text-white'
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md ${
                          activeCategory === cat
                            ? 'bg-purple-500/20 text-purple-300'
                            : 'bg-white/[0.04] text-gray-600'
                        }`}>
                          {count}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </motion.div>

            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
