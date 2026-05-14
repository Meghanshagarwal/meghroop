'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

export const projects = [
  {
    title: 'Corporate Business Website',
    description:
      'A premium corporate website with sophisticated design, smooth animations, and strong SEO foundation built for a B2B company that needed to convert enterprise clients.',
    gradient: 'from-purple-600 via-violet-600 to-blue-600',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#',
    mockup: 'CORP',
    year: '2024',
    category: 'Corporate',
  },
  {
    title: 'Sports Court Booking Platform',
    description:
      'Full-stack booking platform with real-time availability, Stripe payment integration, and a complete admin dashboard for managing sports facility bookings and memberships.',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    mockup: 'BOOK',
    year: '2024',
    category: 'Platform',
  },
  {
    title: 'Coffee Shop Website',
    description:
      'Elegant brand-focused website for a premium coffee shop featuring an animated menu, location finder, online ordering, and loyalty program integration that increased foot traffic.',
    gradient: 'from-amber-600 via-orange-600 to-red-600',
    tags: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'CMS'],
    liveUrl: '#',
    githubUrl: '#',
    mockup: 'CAFÉ',
    year: '2023',
    category: 'E-commerce',
  },
  {
    title: 'Modern Business Website',
    description:
      'Conversion-optimized business website with interactive UI components, HubSpot CRM integration, and comprehensive analytics tracking that doubled lead generation within 3 months.',
    gradient: 'from-emerald-600 via-green-600 to-teal-600',
    tags: ['React', 'TypeScript', 'GSAP', 'HubSpot'],
    liveUrl: '#',
    githubUrl: '#',
    mockup: 'BIZ',
    year: '2023',
    category: 'Business',
  },
]

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? '60%' : '-60%',
    opacity: 0,
    scale: 0.92,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? '-60%' : '60%',
    opacity: 0,
    scale: 0.92,
    transition: { duration: 0.4, ease: 'easeIn' as const },
  }),
}

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [paused, setPaused] = useState(false)

  const total = projects.length

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((c) => (c + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + total) % total)
  }, [total])

  // Auto-slide every 4.5 s, pauses on hover or drag
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    setDragging(false)
    setPaused(false)
    if (info.offset.x < -60) next()
    else if (info.offset.x > 60) prev()
  }

  const project = projects[current]

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Featured Work
            </div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
              Projects we&apos;re{' '}
              <span className="gradient-text">proud of</span>
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

        {/* Carousel */}
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ minHeight: 460 }}
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
              dragElastic={0.08}
              onDragStart={() => { setDragging(true); setPaused(true) }}
              onDragEnd={handleDragEnd}
              className={`grid md:grid-cols-5 gap-0 rounded-2xl border border-white/[0.08] overflow-hidden bg-[#0a0a0a] ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            >
              {/* Left — visual */}
              <div className={`md:col-span-3 relative h-64 md:h-auto bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                {/* Browser mockup */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="w-full h-full rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 flex flex-col overflow-hidden">
                    {/* Browser bar */}
                    <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/10 bg-black/20">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                      <div className="flex-1 mx-3 h-4 rounded bg-white/10 flex items-center px-2">
                        <span className="text-[9px] text-white/30">meghroop.com/{project.mockup.toLowerCase()}</span>
                      </div>
                    </div>
                    {/* Browser body */}
                    <div className="flex-1 p-4 flex flex-col gap-2">
                      <div className="h-3 w-2/3 rounded bg-white/10" />
                      <div className="h-2 w-full rounded bg-white/[0.06]" />
                      <div className="h-2 w-4/5 rounded bg-white/[0.06]" />
                      <div className="mt-2 grid grid-cols-3 gap-2 flex-1">
                        <div className="rounded-lg bg-white/[0.08] col-span-2" />
                        <div className="rounded-lg bg-white/[0.05]" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/70">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Right — info */}
              <div className="md:col-span-2 p-7 md:p-8 flex flex-col justify-between gap-6">
                <div>
                  <div className="text-xs text-gray-600 font-heading mb-3">{project.year}</div>
                  <h3 className="font-heading font-bold text-xl text-white mb-3 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.06] text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-black text-xs font-semibold hover:bg-gray-100 transition-colors"
                      onClick={(e) => dragging && e.preventDefault()}
                    >
                      <ExternalLink size={13} />
                      Live Preview
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] text-white text-xs font-semibold hover:bg-white/[0.06] transition-colors"
                      onClick={(e) => dragging && e.preventDefault()}
                    >
                      <GithubIcon />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress dots + hint */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-xs text-gray-600">
            {paused ? 'Paused' : 'Auto-playing'} · drag to explore
          </p>
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1)
                  setCurrent(i)
                }}
                aria-label={`Go to project ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-6 bg-white'
                    : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
