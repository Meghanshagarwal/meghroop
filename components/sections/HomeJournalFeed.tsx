'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import { articles } from '@/lib/journal'

export default function HomeJournalFeed() {
  // Take the 3 latest technical logs for clean PageRank distribution
  const latestArticles = articles.slice(0, 3)

  return (
    <section id="engineering-logs" className="section-padding bg-black border-t border-white/[0.04]" aria-label="Recent Engineering Logs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              Technical playbooks & logs
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white">
              Recent <span className="gradient-text">Engineering Logs.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm rounded-lg border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white transition-all duration-200 group"
            >
              Explore all articles
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Dynamic Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {latestArticles.map((article, i) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-6 sm:p-8 flex flex-col justify-between hover:border-white/[0.15] transition-all duration-300 min-h-[340px]"
            >
              <div>
                <span className="text-[10px] tracking-wider uppercase font-semibold font-heading text-purple-400 mb-3 block">
                  {article.category}
                </span>

                <Link href={`/journal/${article.slug}`} className="block">
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors duration-300 mb-3 line-clamp-2 leading-snug">
                    {article.title}
                  </h3>
                </Link>

                <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-3 mb-6">
                  {article.description}
                </p>
              </div>

              {/* Author & Read Time Telemetry */}
              <div className="flex items-center justify-between pt-5 border-t border-white/[0.06] mt-auto">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/[0.1] bg-white/[0.05]">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{article.author.name}</div>
                    <div className="text-[10px] text-gray-500">{article.author.role}</div>
                  </div>
                </div>

                <span className="text-[10px] text-gray-500 flex items-center gap-1">
                  <Clock size={11} />
                  {article.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
