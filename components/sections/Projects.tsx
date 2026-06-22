'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { projectSlug, type Project } from '@/lib/supabase'
import { defaultProjects } from '@/data/projects'


// Spring-based slide — feels natural on both desktop and mobile touch
const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring' as const, stiffness: 280, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-40%' : '40%',
    opacity: 0,
    transition: { duration: 0.25, ease: 'easeIn' as const },
  }),
}

export default function Projects({ projects: propProjects }: { projects?: Project[] }) {
  const projects = propProjects && propProjects.length > 0 ? propProjects : defaultProjects
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [paused, setPaused] = useState(false)

  const total = projects.length
  // Reset to first slide when project list changes
  useEffect(() => { setCurrent(0) }, [total])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + total) % total)
  }, [total])

  // Auto-slide every 4.5 s — pauses on hover or drag
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

  const handleDragEnd = (_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
    setDragging(false)
    setPaused(false)
    // Trigger on swipe distance OR velocity for a snappy feel on mobile
    if (info.offset.x < -50 || info.velocity.x < -300) next()
    else if (info.offset.x > 50 || info.velocity.x > 300) prev()
  }

  const project = projects[current]

  return (
    <section id="case-studies" className="section-padding overflow-hidden" aria-label="Case studies by MeghRoop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 mb-4 sm:mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Case studies
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight">
              Real work.{' '}
              <span className="gradient-text">Real results.</span>
            </h2>
          </div>

          {/* Nav controls */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="font-heading text-sm text-gray-500 tabular-nums">
              <span className="text-white font-semibold">{String(current + 1).padStart(2, '0')}</span>
              {' / '}
              {String(total).padStart(2, '0')}
            </span>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/20 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Carousel wrapper — overflow hidden clips the sliding cards */}
        <div
          className="relative overflow-hidden rounded-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence custom={direction} mode="popLayout">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.06}
              dragDirectionLock
              onDragStart={() => { setDragging(true); setPaused(true) }}
              onDragEnd={handleDragEnd}
              className={`grid grid-cols-1 md:grid-cols-5 rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0a0a0a] select-none touch-pan-y ${dragging ? 'cursor-grabbing' : 'cursor-grab md:cursor-grab'}`}
            >
              {/* Visual panel */}
              <div className="md:col-span-3 relative h-56 sm:h-72 md:h-auto overflow-hidden min-h-[260px]">
                {/* Base photo */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                  priority={current === 0}
                />
                {/* Light color wash — keeps each card distinct without killing the photo */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40`} />
                {/* Bottom fade so the card edge blends cleanly */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent" />

                {/* Category badge */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70">
                    {project.category}
                  </span>
                </div>

                {/* Year badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/50 font-heading">
                    {project.year}
                  </span>
                </div>
              </div>

              {/* Info panel */}
              <div className="md:col-span-2 p-5 sm:p-7 md:p-8 flex flex-col justify-between gap-5 sm:gap-6">
                <div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2 sm:mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/work/${projectSlug(project)}`}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-colors"
                      onClick={(e) => dragging && e.preventDefault()}
                    >
                      View Case Study
                      <ArrowRight size={13} />
                    </Link>
                    {project.live_url && project.live_url !== '#' && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.12] text-white text-xs font-semibold hover:bg-white/[0.06] transition-colors"
                        onClick={(e) => dragging && e.preventDefault()}
                      >
                        <ExternalLink size={13} />
                        Visit Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots + status */}
        <div className="flex items-center justify-between mt-5 sm:mt-6">
          <p className="text-xs text-gray-400">
            {paused ? 'Paused — take your time.' : 'Scrolling · drag or swipe to look around'}
          </p>
          <div className="flex items-center">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                aria-label={`Go to project ${i + 1}`}
                className="p-3 flex items-center justify-center"
              >
                <span className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
