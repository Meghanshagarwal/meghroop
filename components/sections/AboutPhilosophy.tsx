'use client'

import { motion } from 'framer-motion'
import { EyeOff, Sparkles } from 'lucide-react'

export default function AboutPhilosophy() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]" aria-label="Our Philosophy">
      
      {/* Immersive radial glow backdrop */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-500/[0.02] rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Core Slogan block */}
        <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
            Studio Manifesto
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            The internet got boring. <br />
            <span className="gradient-text-purple">So we started building.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Most digital experiences feel interchangeable. Every tech landing page uses the same layouts, the same vector shapes, and the same lazy templates. Brands look identical to their competitors.
          </p>
        </div>

        {/* Dynamic Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Boring Templates */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.06] bg-[#050505] p-6 sm:p-8 flex flex-col justify-between relative group hover:border-white/[0.1] transition-colors"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-500/[0.01] to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-9 h-9 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center justify-center mb-6 text-red-400">
                <EyeOff size={16} />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-3">
                The Interchangeable Internet
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                Relying on pre-made themes means locking your brand into structures that do not represent you. Scripts bloat, styles clash, and page load latency destroys conversions. The result is visual fatigue.
              </p>
            </div>
            <div className="mt-8 font-mono text-[10px] text-red-400/80 flex items-center gap-2 border-t border-white/[0.04] pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              Effect: Forgettable identity & high friction.
            </div>
          </motion.div>

          {/* Card 2: Custom Systems */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.01] p-6 sm:p-8 flex flex-col justify-between relative group hover:border-white/[0.12] transition-colors"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/[0.02] to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="w-9 h-9 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                <Sparkles size={16} />
              </div>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-3">
                Intentional Web Systems
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                We believe modern brands deserve custom code. We engineer layouts from scratch, ensuring that margins align perfectly, animations accelerate on GPUs, and database connections return data in milliseconds.
              </p>
            </div>
            <div className="mt-8 font-mono text-[10px] text-cyan-400 flex items-center gap-2 border-t border-white/[0.04] pt-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Effect: Authentic authority & silent speed.
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
