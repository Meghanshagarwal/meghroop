'use client'

import { motion, type Variants } from 'framer-motion'
import {
  Globe, Code2, Smartphone, Zap, Palette, Video, Package, BarChart3, Layers,
} from 'lucide-react'

const webServices = [
  {
    icon: Globe,
    title: 'Custom Websites',
    description: 'Purpose-built websites that convert. Not templates. Not no-code. Engineered systems designed for your exact business.',
    gradient: 'from-cyan-600/30 to-blue-600/30',
    iconColor: 'text-cyan-400',
    borderHover: 'hover:border-cyan-500/40',
    glowColor: 'rgba(34, 211, 238, 0.15)',
    span: 'md:col-span-2',
    tag: 'Core',
  },
  {
    icon: Code2,
    title: 'Web Applications',
    description: 'React and Next.js apps that feel alive. Real-time interactions, smooth state management, production-ready architecture.',
    gradient: 'from-blue-600/30 to-violet-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Smartphone,
    title: 'Responsive Systems',
    description: 'Mobile-first architecture. Pixel-perfect on every screen. Once from desktop to device — no compromises on experience.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Zap,
    title: 'Performance Engineering',
    description: 'Core Web Vitals optimized. Sub-second load times. Optimized assets, caching strategies, and clean code that breathes.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Palette,
    title: 'UI/UX Engineering',
    description: 'Design systems that scale. Atomic components, semantic tokens, and interfaces built to grow with your business.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
    borderHover: 'hover:border-pink-500/40',
    glowColor: 'rgba(236, 72, 153, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Video,
    title: 'Interactive Experiences',
    description: 'Framer Motion animations that feel premium. Cinematic transitions, hover systems, and motion that serves purpose.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    glowColor: 'rgba(168, 85, 247, 0.15)',
    span: 'md:col-span-2',
    tag: 'Premium',
  },
  {
    icon: Package,
    title: 'Component Libraries',
    description: 'Reusable, battle-tested components. TypeScript-first, fully accessible, documented, and ready for scale.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: BarChart3,
    title: 'Conversion Optimization',
    description: 'Data-driven design. A/B testing infrastructure, analytics integration, and interfaces that actually convert.',
    gradient: 'from-sky-600/30 to-cyan-600/30',
    iconColor: 'text-sky-400',
    borderHover: 'hover:border-sky-500/40',
    glowColor: 'rgba(14, 165, 233, 0.15)',
    span: 'md:col-span-1',
  },
  {
    icon: Layers,
    title: 'Headless Solutions',
    description: 'Decoupled architecture. Shopify, Strapi, or your own CMS. Frontend freedom with powerful backend infrastructure.',
    gradient: 'from-indigo-600/30 to-blue-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    span: 'md:col-span-2',
    tag: 'Advanced',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function WebEngineeringWhatWeBuild() {
  return (
    <section id="what-we-build" className="section-padding" aria-label="Web engineering services and solutions">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Building the modern web
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            What we build.{' '}
            <span className="gradient-text">Interfaces that matter.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Custom websites, web applications, and interactive experiences. Every project engineered for performance, accessibility, and the kind of design that actually stays open in someone&apos;s tab.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {webServices.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`${card.span} relative rounded-2xl border border-white/[0.08] ${card.borderHover} overflow-hidden group cursor-default transition-all duration-300`}
                style={{
                  ['--glow' as string]: card.glowColor,
                }}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow ring on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 60px ${card.glowColor}` }}
                />

                <div className="relative z-10 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={22} className={card.iconColor} />
                    </div>
                    {card.tag && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400">
                        {card.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Semantic summary for SEO/AI crawlers */}
        <p className="sr-only">
          MeghRoop provides premium web engineering services including custom website development, Next.js web applications, React development, responsive design systems, performance optimization, UI/UX engineering, interactive experiences with Framer Motion, component libraries, conversion optimization, and headless web solutions. All projects built with TypeScript, TailwindCSS, and modern web standards for production-grade quality.
        </p>
      </div>
    </section>
  )
}
