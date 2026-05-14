'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-float-delay" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] animate-float-slow" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Studio badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-1 px-3 sm:px-4 py-2 rounded-full glass text-xs sm:text-sm text-gray-300">
            <Sparkles size={13} className="text-purple-400 flex-shrink-0" />
            <span>Creative Development Studio</span>
            <span className="hidden xs:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs">Available for projects</span>
            </span>
          </div>
        </motion.div>

        {/* Studio name */}
        <motion.p {...fadeUp(0.1)} className="font-heading font-bold text-sm sm:text-base text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
          MeghRoop
        </motion.p>

        {/* Main headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-5 sm:mb-6"
        >
          Building{' '}
          <span className="gradient-text">Modern</span>
          <br />
          Digital Experiences
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          We design and develop premium websites, scalable web applications, and modern digital experiences for{' '}
          <span className="text-white">startups and businesses</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.45)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            View Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
          >
            Start a Project
          </Link>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { value: '30+', label: 'Projects Delivered' },
            { value: '2+', label: 'Years Experience' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-heading font-bold text-2xl gradient-text-purple">{value}</span>
              <span className="text-xs text-gray-500">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
