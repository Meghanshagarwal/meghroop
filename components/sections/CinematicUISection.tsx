'use client'

import { motion, type Variants } from 'framer-motion'
import { Sparkles, Zap, RotateCw, Layers } from 'lucide-react'

const systems = [
  {
    icon: Sparkles,
    title: 'Animation Systems',
    description: 'Motion language that serves purpose. Page transitions, scroll animations, hover states, loading sequences. Everything choreographed.',
    items: ['Framer Motion orchestration', 'GPU-optimized performance', 'Staggered animations', 'Gesture interactions'],
  },
  {
    icon: Zap,
    title: 'Interaction Design',
    description: 'Interfaces that respond instantly. Micro-interactions that delight. Feedback systems that make every click feel intentional.',
    items: ['Instant feedback', 'State transitions', 'Loading patterns', 'Error states that guide'],
  },
  {
    icon: RotateCw,
    title: 'Hover Systems',
    description: 'Every element reacts thoughtfully. Subtle glow effects, scale transforms, color shifts. Hover states that feel premium.',
    items: ['Glow treatments', 'Dynamic lighting', 'Smooth transitions', 'Gradient shifts'],
  },
  {
    icon: Layers,
    title: 'Atmosphere Design',
    description: 'The feeling you get when you load a website. Background systems, color moods, typography breathing. Digital ambiance.',
    items: ['Gradient layers', 'Blur effects', 'Depth systems', 'Visual hierarchy'],
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

export default function CinematicUISection() {
  return (
    <section id="cinematic-ui" className="section-padding" aria-label="Cinematic UI and interactive design systems">
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
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            The premium layer
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Cinematic <span className="gradient-text">UI systems</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Motion, interaction, and atmosphere. The difference between a website that works and one that feels premium. Every element animated with intention, every interaction designed for delight.
          </p>
        </motion.div>

        {/* Systems Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {systems.map((system) => {
            const Icon = system.icon
            return (
              <motion.div
                key={system.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative rounded-2xl border border-white/[0.08] hover:border-purple-500/40 overflow-hidden group cursor-default transition-all duration-300 p-8"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300 mb-4">
                    <Icon size={22} className="text-purple-400" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {system.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{system.description}</p>
                  <div className="space-y-2">
                    {system.items.map((item_text) => (
                      <div key={item_text} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1 h-1 rounded-full bg-purple-400" />
                        {item_text}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-purple-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-2xl text-white mb-6">
              Interfaces that feel alive.
            </h3>
            <div className="space-y-4 text-gray-400">
              <p>
                We don&apos;t just build static designs. We build <span className="text-white">systems of motion, interaction, and atmosphere</span>. Every website has a personality, and motion is how we express it.
              </p>
              <p>
                Scroll animations guide users through your story. Hover states make every interaction feel intentional. Transitions between pages feel cinematic, not jarring. Loading states are designed, not overlooked. Even error messages feel like part of the experience.
              </p>
              <p>
                The goal? Websites that feel premium. Interfaces where users say, &quot;This feels nice.&quot; Not just visually nice—nice to interact with. Nice to spend time in. Nice enough to mention to someone else.
              </p>
              <p>
                <span className="text-white">Motion is only as good as its purpose.</span> Every animation we build makes something faster, clearer, or more delightful. No animation for its own sake. Every frame matters.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
