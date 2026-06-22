'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      "MeghRoop completely transformed our online presence. The attention to detail, clean animations, and overall quality of work far exceeded our expectations. Highly recommend.",
    author: 'Rajesh Kumar',
    role: 'CEO',
    company: 'TechVentures',
    avatar: 'RK',
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    quote:
      "Working with MeghRoop was a fantastic experience. They understood our brand vision instantly and delivered a stunning website that our customers love.",
    author: 'Priya Sharma',
    role: 'Founder',
    company: 'StyleHub',
    avatar: 'PS',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    quote:
      "They built our entire sports court booking platform from scratch. Professional, timely, and the quality of code is exceptional. Will definitely work with them again.",
    author: 'Amit Patel',
    role: 'CTO',
    company: 'SportZone',
    avatar: 'AP',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    quote:
      "Our coffee shop website has received so many compliments from customers. The design is beautiful, the site is fast, and it perfectly represents our brand.",
    author: 'Neha Gupta',
    role: 'Owner',
    company: 'Brewed Bliss',
    avatar: 'NG',
    gradient: 'from-amber-500 to-orange-500',
  },
]

export default function Testimonials() {
  const [perView, setPerView] = useState(1)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  // 1 card on mobile, 2 on laptop/desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const apply = () => setPerView(mq.matches ? 2 : 1)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - perView)

  // Clamp when perView changes
  useEffect(() => { setCurrent((c) => Math.min(c, maxIndex)) }, [maxIndex])

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex])
  const prev = useCallback(() => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)), [maxIndex])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section id="testimonials" className="section-padding" aria-label="Client testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Clients
            </div>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight">
              Growth they{' '}
              <span className="gradient-text">can feel.</span>
            </h2>
            <p className="text-white/[0.55] text-base sm:text-lg mt-4 max-w-xl">
              Partners who stayed — because the work kept paying off.
            </p>
          </div>

          {/* Nav controls */}
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.1] hover:border-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Carousel viewport */}
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -mx-2.5"
            style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.author} className="w-full md:w-1/2 flex-shrink-0 px-2.5">
                <div className="relative h-full rounded-2xl border border-white/[0.08] overflow-hidden">
                  <div className="absolute inset-0 glass" />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl" />

                  <div className="relative z-10 p-6 sm:p-8">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5">
                      <Quote size={16} className="text-purple-400" />
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-amber-400 text-sm">★</span>
                      ))}
                    </div>
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                        <span className="text-xs font-bold text-white font-heading" aria-hidden="true">{t.avatar}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">{t.author}</div>
                        <div className="text-xs text-gray-500">
                          <span>{t.role}</span>{' @ '}<span>{t.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-1 mt-7">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="p-2.5 flex items-center justify-center"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
