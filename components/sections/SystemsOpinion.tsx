'use client'

import { motion } from 'framer-motion'
import { Sparkles, EyeOff } from 'lucide-react'

export default function SystemsOpinion() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" aria-label="Opinionated Design Critique">
      {/* Visual background ring */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/[0.02] rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
            Architectural Philosophy
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Why most digital experiences <br className="hidden sm:inline" />
            <span className="gradient-text-purple">feel completely forgettable.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Most modern websites are built on generic frameworks and cookie-cutter layouts. They fulfill functional targets but fail to earn user attention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Critique */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.06] bg-[#050505] p-8 flex flex-col justify-between relative group hover:border-white/[0.1] transition-colors"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/[0.01] to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center mb-6 text-red-400">
                <EyeOff size={18} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">The Template Trap</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Standard themes force companies into visual grid structures that look identical to their competitors. Performance decays, brand message gets lost in bloated scripts, and the user interaction becomes boring.
              </p>
            </div>
            <div className="mt-8 font-mono text-[10px] text-red-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Result: Generic, uninspired layouts.
            </div>
          </motion.div>

          {/* Card 2: Custom Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.01] p-8 flex flex-col justify-between relative group hover:border-white/[0.12] transition-colors"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-cyan-500/[0.02] to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                <Sparkles size={18} />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">Intentional Custom Atmosphere</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We engineer tailor-made digital systems. Every visual transition, background gradient, hover state, and data connection is custom-coded to represent your technical authority and leave a physical memory.
              </p>
            </div>
            <div className="mt-8 font-mono text-[10px] text-cyan-400 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Result: High-conversion, premium authority.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
