'use client'

import { motion } from 'framer-motion'
import { Monitor } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden grid-bg pt-24 sm:pt-28" aria-label="About MeghRoop Hero">
      {/* Meticulous background gradient glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[350px] h-[350px] bg-purple-500/[0.04] rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 translate-x-1/2 w-[450px] h-[450px] bg-cyan-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs text-gray-400 mb-6 font-mono border border-white/[0.06] hover:border-white/10 transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          STUDIO STATUS: ACTIVE
          <span className="text-gray-600">{"//"}</span>
          <span className="text-purple-400">meghroop-about-core-v3.0</span>
        </motion.div>

        {/* Cinematic Slogans */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 max-w-5xl"
        >
          Two people. Multiple tabs open. <br className="hidden sm:inline" />
          <span className="gradient-text">Still shipping.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-12"
        >
          MeghRoop is a modern AI engineering and creative technology studio. We design high-conversion storefronts, secure automated operations, and internet-native systems built to scale.
        </motion.p>

        {/* Telemetry card for the founders */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full max-w-3xl rounded-2xl border border-white/[0.08] bg-[#050505]/75 p-6 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center divide-x divide-white/[0.06] text-left">
            <div>
              <div className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">2 Engineers</div>
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-1">Founding Duo</div>
            </div>
            <div className="pl-4 sm:pl-6">
              <div className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">30+ Shipped</div>
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-1">Live Systems</div>
            </div>
            <div className="pl-4 sm:pl-6">
              <div className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight">168 Tabs</div>
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-1">Active Ctx</div>
            </div>
            <div className="pl-4 sm:pl-6">
              <div className="text-xl sm:text-2xl font-bold font-heading text-cyan-400 tracking-tight">0% Bloat</div>
              <div className="text-[10px] text-gray-500 font-mono uppercase tracking-wider mt-1">Agency Tax</div>
            </div>
          </div>

          {/* Inline active terminal state log */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-gray-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-purple-400/80">
                <Monitor size={10} />
                sh read-studio-logs.sh
              </span>
              <span className="hidden sm:inline">Stack: Next.js 14, React 18, Tailwind CSS, n8n, OpenAI SDK</span>
            </div>
            <span className="animate-pulse">Threads Active: 2/2</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
