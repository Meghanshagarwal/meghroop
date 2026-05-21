'use client'

import { motion, type Variants } from 'framer-motion'
import { Palette, Code2, Sparkles, Zap } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: 'Semantic Design',
    description: 'Every pixel intentional. Color systems, typography hierarchies, spacing rhythms. Design that means something.',
    gradient: 'from-pink-600/30 to-rose-600/30',
    iconColor: 'text-pink-400',
    borderHover: 'hover:border-pink-500/40',
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Code that reads like prose. Component-driven development, atomic design principles, and systems that scale.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
  },
  {
    icon: Sparkles,
    title: 'Motion Systems',
    description: 'Animations that serve purpose. Transitions that guide. Every movement calculated, never arbitrary.',
    gradient: 'from-violet-600/30 to-purple-600/30',
    iconColor: 'text-violet-400',
    borderHover: 'hover:border-violet-500/40',
  },
  {
    icon: Zap,
    title: 'Interaction Design',
    description: 'Interfaces that respond instantly. Hover states that delight. Feedback systems that make sense.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
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

export default function DesignEngineering() {
  return (
    <section id="design-engineering" className="section-padding" aria-label="Design and engineering approach">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            Where art meets engineering
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Design <span className="gradient-text">×</span> Engineering
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Not design that developers argue about. Not engineering that ignores the visual story. Systems where both disciplines inform each other.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className={`relative rounded-2xl border border-white/[0.08] ${feature.borderHover} overflow-hidden group cursor-default transition-all duration-300 p-6`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300 mb-4">
                    <Icon size={22} className={feature.iconColor} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main content section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              The intersection where good websites become memorable experiences
            </h3>
            <div className="space-y-4 text-gray-400">
              <p>
                Design without engineering is decoration. Engineering without design is invisible. We work differently.
              </p>
              <p>
                Our designers don&apos;t hand off to developers. They collaborate in the same tools, speak the same language, and own the same outcome. Design systems are built in code from day one. Components are designed to be built. Motion is calculated, not guessed.
              </p>
              <p>
                The result? Websites that feel purposeful. Interfaces that make sense. Code that reflects the design intent. Motion that enhances the story. Accessibility that&apos;s built-in, not bolted-on.
              </p>
              <p>
                <span className="text-white">Good interfaces quietly remove friction.</span> They feel inevitable. Like they were always meant to be that way. That&apos;s what design × engineering looks like.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
