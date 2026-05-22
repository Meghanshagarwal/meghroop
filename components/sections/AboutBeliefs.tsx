'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Star, Zap, Cpu } from 'lucide-react'

const beliefs = [
  {
    icon: Cpu,
    title: 'Useful AI is cooler.',
    desc: 'Most AI systems are lazy prompt wraps or slow chat boxes. We believe in grounded agent workflows — custom context layers that safely write database schemas, sync inventory logs, and run operations without hallucinating.',
    accent: 'text-purple-400 bg-purple-500/5 border-purple-500/10',
    color: 'from-purple-500/10 to-transparent',
    glow: 'rgba(167, 139, 250, 0.08)',
  },
  {
    icon: Zap,
    title: 'Good systems quietly reduce friction.',
    desc: 'Boring software forces people to click 12 buttons. Great systems predict intent. We build silent, automated pathways — edge caching, webhook triggers, and intelligent routing that make interfaces feel entirely natural.',
    accent: 'text-cyan-400 bg-cyan-500/5 border-cyan-500/10',
    color: 'from-cyan-500/10 to-transparent',
    glow: 'rgba(6, 182, 212, 0.08)',
  },
  {
    icon: CheckCircle2,
    title: 'Performance is part of the experience.',
    desc: 'Speed is not a technical afterthought; it is a primary design material. If a custom web page takes 4 seconds to parse, the visual illusion of brand authority collapses. We build lightweight, edge-distributed storefronts.',
    accent: 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10',
    color: 'from-emerald-500/10 to-transparent',
    glow: 'rgba(16, 185, 129, 0.08)',
  },
  {
    icon: Star,
    title: 'People remember atmosphere.',
    desc: 'Templates make the internet feel interchangeable and visually dull. True design creates identity through subtle transitions, typographic rhythm, harmonious gradients, and rich layouts that leave a physical memory.',
    accent: 'text-rose-400 bg-rose-500/5 border-rose-500/10',
    color: 'from-rose-500/10 to-transparent',
    glow: 'rgba(244, 63, 94, 0.08)',
  },
]

export default function AboutBeliefs() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" aria-label="Our Beliefs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            Core Convictions
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            We build things with <br className="hidden sm:inline" />
            <span className="gradient-text">unapologetic opinion.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            The internet has become a sea of generic themes. Here is what we actively believe is required to build a premium digital footprint that converts.
          </p>
        </div>

        {/* Beliefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {beliefs.map((b, idx) => {
            const Icon = b.icon
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-[#050505] p-6 sm:p-8 relative overflow-hidden group hover:border-white/[0.12] transition-all duration-300"
              >
                {/* Accent glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-20 pointer-events-none`} />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 35px ${b.glow}` }} />

                <div className="relative z-10 space-y-4">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${b.accent}`}>
                    <Icon size={16} />
                  </div>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-white">{b.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
