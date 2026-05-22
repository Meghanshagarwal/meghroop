'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Settings, Eye } from 'lucide-react'

export default function AboutAtmosphere() {
  const [glowSpeed, setGlowSpeed] = useState<'normal' | 'hyper'>('normal')

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" aria-label="Visual Atmosphere">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text/Editorial side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Interactive Sandbox
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug">
              Atmosphere is an <br />
              <span className="gradient-text">exact science.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We design layouts where animations are GPU-accelerated and hover metrics are micro-balanced. Visual rhythm is not just about graphics; it is the physical sensation of navigating an intentional digital space.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Toggle the telemetry board to see how we control interface parameters to create responsive, immersive web experiences.
            </p>
          </div>

          {/* Immersive Panel side */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#050505] p-6 sm:p-8 relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300">
            {/* Ambient dynamic glows depending on glowSpeed state */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <AnimatePresence mode="wait">
                {glowSpeed === 'normal' ? (
                  <motion.div
                    key="normal-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-purple-500/[0.04] to-transparent rounded-bl-full animate-pulse"
                  />
                ) : (
                  <motion.div
                    key="hyper-glow"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-bl from-cyan-500/[0.08] to-transparent rounded-bl-full"
                  />
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between border-b border-white/[0.06] pb-6 mb-6">
              <h3 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                <Settings size={16} className="text-purple-400" />
                Interface Parameters
              </h3>

              {/* State Toggles */}
              <div className="flex rounded-lg bg-[#0a0a0a] p-1 border border-white/[0.06]">
                <button
                  onClick={() => setGlowSpeed('normal')}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${glowSpeed === 'normal' ? 'bg-purple-500/10 text-purple-400 font-semibold' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Subtle Ambient
                </button>
                <button
                  onClick={() => setGlowSpeed('hyper')}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${glowSpeed === 'hyper' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Interactive Glow
                </button>
              </div>
            </div>

            {/* Sandbox details */}
            <div className="space-y-4 font-mono text-[11px] text-gray-400">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-gray-500 block mb-1">FONT HEADING</span>
                  <span className="text-white font-semibold">Space Grotesk</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-gray-500 block mb-1">FONT BODY</span>
                  <span className="text-white font-semibold">Inter Standard</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-gray-500">MOTION CURVE:</span>
                  <span className="text-cyan-400 font-semibold">{"cubic-bezier(0.16, 1, 0.3, 1)"}</span>
                </div>
                <div className="w-full bg-white/[0.06] h-[3px] rounded-full overflow-hidden">
                  <motion.div
                    animate={glowSpeed === 'normal' ? { x: ['-100%', '100%'] } : { x: ['-100%', '100%'] }}
                    transition={glowSpeed === 'normal' ? { repeat: Infinity, duration: 3, ease: 'easeInOut' } : { repeat: Infinity, duration: 1.2, ease: 'linear' }}
                    className={`h-full w-1/3 rounded-full ${glowSpeed === 'normal' ? 'bg-purple-500/50' : 'bg-cyan-400'}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-gray-500 block mb-1">GLOW FREQUENCY</span>
                  <span className={`text-white font-bold transition-colors ${glowSpeed === 'hyper' ? 'text-cyan-400' : 'text-purple-400'}`}>
                    {glowSpeed === 'hyper' ? '1.8Hz (Interactive)' : '0.4Hz (Ambient)'}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-gray-500 block mb-1">CONTRAST RATING</span>
                  <span className="text-emerald-400 font-bold">18.4:1 (A++ Standard)</span>
                </div>
              </div>
            </div>

            {/* Bottom visual indicator */}
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[9px] text-gray-500">
              <span className="flex items-center gap-1.5">
                <Eye size={10} />
                Viewport tracking: Active
              </span>
              <span>Grid lines: 0px absolute mapping</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
