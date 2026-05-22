'use client'

import { motion, type Variants } from 'framer-motion'
import { Image, Mouse, Sparkles, Zap } from 'lucide-react'

const cinematicElements = [
  {
    icon: Image,
    title: 'Product Galleries',
    description: 'Smooth image transitions. Zoom interactions. Video galleries. Product exploration feels intentional and premium.',
    color: 'text-pink-400',
  },
  {
    icon: Mouse,
    title: 'Hover States',
    description: 'Micro-interactions that delight. Color shifts. Icon reveals. Every hover feels thoughtful and responsive.',
    color: 'text-purple-400',
  },
  {
    icon: Sparkles,
    title: 'Transitions',
    description: 'Page transitions that feel premium. Collection flows that smooth. Motion that guides without distracting.',
    color: 'text-violet-400',
  },
  {
    icon: Zap,
    title: 'Interaction Feedback',
    description: 'Add to cart confirmations. Search results appear. Buttons respond. Every action feels acknowledged.',
    color: 'text-cyan-400',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function CinematicCommerceUI() {
  return (
    <section id="cinematic-commerce" className="section-padding" aria-label="Cinematic ecommerce user interfaces">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            Premium interfaces
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Cinematic commerce{' '}
            <span className="gradient-text">UI systems.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Motion that matters. Interactions that feel alive. Every interface designed to make shopping feel intentional,
            premium, and memorable.
          </p>
        </motion.div>

        {/* Cinematic Elements Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16"
        >
          {cinematicElements.map((element) => {
            const Icon = element.icon
            return (
              <motion.div
                key={element.title}
                variants={item}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="relative rounded-2xl border border-white/[0.08] overflow-hidden group cursor-default transition-all duration-300 p-8"
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: 'inset 0 0 60px rgba(236, 72, 153, 0.1)' }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={24} className={element.color} />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{element.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{element.description}</p>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-pink-600/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Showcase statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-pink-600/5 to-purple-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-xl text-white mb-4">Why motion matters in ecommerce.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Luxury brands don&apos;t rush their experiences. They make you feel every interaction. Every detail is intentional.
              Ecommerce shouldn&apos;t be different. Smooth animations reduce cognitive load. Well-designed motion feels faster. Premium
              interfaces make people willing to spend.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We build cinematic storefronts using Framer Motion. Every transition is GPU-accelerated. Every hover state is
              purposeful. The result feels modern, premium, and intentionally designed. Not generic. Not overdone. Just
              intentional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
