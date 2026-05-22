'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Zap, Code2 } from 'lucide-react'

const problems = [
  {
    icon: AlertCircle,
    title: 'Built on Bloat',
    description: 'Plugins for everything. Page builders. Theme frameworks. Hundreds of megabytes of JavaScript loading on every page. Plugins that don\'t talk to each other. Systems that groan under their own weight.',
    color: 'from-red-600/30 to-orange-600/30',
    iconColor: 'text-red-400',
  },
  {
    icon: Zap,
    title: 'No Real Architecture',
    description: 'Most WordPress sites are theme + plugins. No cohesive design system. No component architecture. No performance optimization. Just hope it works together. Usually it doesn\'t.',
    color: 'from-orange-600/30 to-amber-600/30',
    iconColor: 'text-amber-400',
  },
  {
    icon: Code2,
    title: 'Generic & Templated',
    description: 'Elementor sites. Page builder templates. Every business looks the same. No differentiation. No intentional design. It\'s visible that it\'s a template. Users feel it.',
    color: 'from-yellow-600/30 to-orange-600/30',
    iconColor: 'text-orange-400',
  },
]

export default function WordPressOpinionSection() {
  return (
    <section className="section-padding overflow-hidden" aria-label="Why most WordPress sites feel outdated">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Our take on WordPress today
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why most WordPress{' '}
            <br className="hidden sm:inline" />
            <span className="gradient-text">sites feel outdated.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            It&apos;s not WordPress&apos;s fault. WordPress is powerful. But the way most people build on it is from another decade.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 sm:mb-16">
          {problems.map((problem, idx) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-2xl border border-white/[0.08] overflow-hidden group bg-gradient-to-br ${problem.color} bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-300 p-7`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center">
                    <Icon size={24} className={problem.iconColor} />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {problem.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* The Problem */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02] p-8 sm:p-10 mb-8"
        >
          <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-4">
            The real problem:
          </h3>
          <div className="space-y-4">
            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">Good systems should disappear into the experience.</span> Your users shouldn&apos;t think about WordPress. They should think about your content, your brand, your product.
            </p>
            <p className="text-gray-400 leading-relaxed">
              But most WordPress sites feel slow. Bloated. Generic. Users feel the infrastructure. That&apos;s the opposite of good design. That&apos;s failed engineering.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">WordPress doesn&apos;t have to be like this.</span> With clean architecture, modern tech, and thoughtful engineering, WordPress can power beautiful, fast, differentiated digital experiences.
            </p>
          </div>
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden bg-gradient-to-br from-cyan-600/5 to-blue-600/5 p-8 sm:p-10"
        >
          <h3 className="font-heading font-bold text-white text-lg sm:text-xl mb-6">
            So we build differently:
          </h3>
          <ul className="space-y-4">
            {[
              {
                title: 'Clean Architecture',
                desc: 'No plugin bloat. Clean custom code. Systems that actually scale.',
              },
              {
                title: 'Modern Tech',
                desc: 'React, Next.js, TypeScript. WordPress powers content. Modern tech powers experience.',
              },
              {
                title: 'Performance First',
                desc: 'Sub-second load times. Core Web Vitals in the green. Performance that feels invisible.',
              },
              {
                title: 'Intentional Design',
                desc: 'Your brand. Your systems. Nothing generic. Every pixel, every interaction, every animation matters.',
              },
              {
                title: 'SEO-Ready',
                desc: 'Semantic structure. Schema markup. Content infrastructure engineered for discovery.',
              },
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-black text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-sm mb-1">{point.title}</h4>
                  <p className="text-gray-400 text-sm">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
