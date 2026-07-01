'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { projectSlug, type Project } from '@/lib/supabase'

function getCategoryCounts(projects: Project[]) {
  const counts: Record<string, number> = {}
  projects.forEach((p) => {
    counts[p.category] = (counts[p.category] || 0) + 1
  })
  return counts
}

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const categoryCounts = getCategoryCounts(projects)
  const categories = ['All', ...Object.keys(categoryCounts)]
  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  // Masonry pattern for visual variety
  const getCardSize = (idx: number) => {
    const pattern = [
      'md:col-span-1 md:row-span-2', // tall
      'md:col-span-1 md:row-span-1', // normal
      'md:col-span-1 md:row-span-1', // normal
      'md:col-span-1 md:row-span-2', // tall
      'md:col-span-1 md:row-span-1', // normal
    ]
    return pattern[idx % pattern.length]
  }

  const getImageAspect = (idx: number) => {
    const pattern = [
      'aspect-[3/4]', // tall
      'aspect-[4/3]', // wide
      'aspect-[4/3]', // wide
      'aspect-[3/4]', // tall
      'aspect-[4/3]', // wide
    ]
    return pattern[idx % pattern.length]
  }

  return (
    <>
      {/* Filter tabs */}
      <div className="max-w-6xl mx-auto px-6 pt-10 sm:pt-14">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-3 sm:gap-x-2">
          {categories.map((cat, i) => {
            const count =
              cat === 'All' ? projects.length : categoryCounts[cat] || 0
            const isActive = activeFilter === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className="group relative flex items-center"
              >
                <span
                  className={`flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {cat}
                  <span
                    className={`text-[11px] font-semibold tabular-nums leading-none -translate-y-px ${
                      isActive ? 'text-black/40' : 'text-white/25'
                    }`}
                  >
                    {String(count).padStart(2, '0')}
                  </span>
                </span>
                {i < categories.length - 1 && (
                  <span className="text-white/[0.12] text-sm ml-1 sm:ml-2 pointer-events-none select-none hidden sm:inline">
                    /
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[1fr] gap-4 sm:gap-5"
          style={{ gridAutoRows: 'minmax(0, 1fr)' }}
        >
          {filtered.map((p, idx) => {
            const headline = p.results?.[0]
            return (
              <Link
                key={p.id}
                href={`/work/${projectSlug(p)}`}
                className={`group relative rounded-2xl overflow-hidden bg-[#111] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 ${getCardSize(idx)}`}
              >
                {/* Image */}
                <div
                  className={`relative overflow-hidden w-full ${getImageAspect(idx)}`}
                >
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                  />
                  {/* Hover arrow */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h2 className="font-heading font-bold text-[15px] sm:text-base text-white mb-2 leading-snug line-clamp-2 group-hover:text-white/90 transition-colors">
                    {p.title}
                  </h2>

                  {headline && (
                    <div className="mb-3">
                      <span className="font-heading font-bold text-sm gradient-text-purple">
                        {headline.after}
                      </span>
                      <span className="text-white/35 text-xs ml-1.5">
                        {headline.label}
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.06] text-white/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
