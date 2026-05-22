'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowUpRight, Search, BookOpen } from 'lucide-react'
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
            className="text-gray-400 text-lg sm:text-xl leading-relaxed font-light"
          >
            Deep architectural teardowns, technical playbooks, and strategic perspectives on generative engines, high-performance web systems, and autonomous infrastructure.
          </motion.p>
        </div>

        {/* Controls: Category Filter + Search */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12 pb-6 border-b border-white/[0.06]"
        >
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
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
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-500">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.02] text-white placeholder-gray-500 border border-white/[0.08] focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 rounded-xl py-2.5 pl-10 pr-4 text-sm transition-all duration-300 outline-none"
            />
          </div>
        </motion.div>

        {/* Articles Grid */}
        <AnimatePresence mode="popLayout">
          {filteredArticles.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredArticles.map((article, idx) => (
                <motion.article
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="group relative rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-8 flex flex-col justify-between overflow-hidden hover:border-white/[0.15] transition-colors duration-300 min-h-[460px] sm:min-h-[480px]"
                >
                  {/* Background Radial Glow */}
                  <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-purple-500/5 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Top Row: Meta Tags & Image */}
                    <div className="flex justify-between items-start mb-6 gap-4">
                      <span className="px-3 py-1 rounded-lg border border-white/[0.08] bg-white/[0.02] text-white/70 text-[11px] tracking-wider uppercase font-medium font-heading">
                        {article.category}
                      </span>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} />
                          {article.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Code-built Editorial Visual instead of AI/stock image */}
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-6 border border-white/[0.06] bg-black">
                      <CodeBuiltVisual category={article.category} slug={article.slug} />
                    </div>

                    {/* Title & Subtitle */}
                    <Link href={`/journal/${article.slug}`} className="block group/link">
                      <h2 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors duration-300 mb-3 leading-snug">
                        {article.title}
                      </h2>
                    </Link>
                    <p className="text-gray-400 text-sm sm:text-base font-light line-clamp-3 mb-6 leading-relaxed">
                      {article.description}
                    </p>
                  </div>

                  {/* Footer Row: Author & Arrow */}
                  <div className="flex items-center justify-between pt-6 border-t border-white/[0.06] mt-auto">
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
                      className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center text-gray-400 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/[0.08] transition-all duration-300"
                      aria-label={`Read ${article.title}`}
                    >
                      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                    </Link>
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
    </section>
  )
}
