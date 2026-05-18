'use client'

import { motion, type Variants } from 'framer-motion'
import { Quote } from 'lucide-react'

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

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding" aria-label="Client testimonials">
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
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Testimonials
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Clients who{' '}
            <span className="gradient-text">trust us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real words from real clients. We don&apos;t write these. We just try to earn them.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.author}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative rounded-2xl border border-white/[0.08] overflow-hidden group cursor-default"
            >
              {/* Glass background */}
              <div className="absolute inset-0 glass" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />

              {/* Hover glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 p-5 sm:p-7">
                {/* Quote icon */}
                <div className="w-9 h-9 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5">
                  <Quote size={16} className="text-purple-400" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center`}>
                    <span className="text-xs font-bold text-white font-heading" aria-hidden="true">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.author}</div>
                    <div className="text-xs text-gray-500">
                      <span>{t.role}</span>
                      {' @ '}
                      <span>{t.company}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
