'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Cpu } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

const pills = ['Custom AI Agents', 'Autonomous Workflows', 'n8n Automation', 'MCP Servers', 'AI Operations', 'Smart Integrations']

export default function AIAgentsAutomationHero() {
  return (
    <section
      id="ai-agents-hero"
      aria-label="AI Agents and Automation — Autonomous Systems for Business"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/25 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-float-delay" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-violet-600/10 rounded-full blur-[100px] animate-float" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Section badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-1 px-3 sm:px-4 py-2 rounded-full glass text-xs sm:text-sm text-gray-300">
            <Cpu size={13} className="text-purple-400 flex-shrink-0" />
            <span>Autonomous Systems & AI Infrastructure</span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs">Always learning</span>
            </span>
          </div>
        </motion.div>

        {/* Section title */}
        <motion.p {...fadeUp(0.1)} className="font-heading font-bold text-sm sm:text-base text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
          AI Agents & Automation
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-5 sm:mb-6"
        >
          AI that actually{' '}
          <br />
          <span className="gradient-text">does things.</span>
          <br />
          Useful things.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          {...fadeUp(0.35)}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Custom AI agents that reason, plan, and execute autonomously.{' '}
          <span className="text-white">Wired into your real tools, your real data, your actual workflow.</span> Not
          demos. Not wrappers. Production-grade automation that quietly gets work done.
        </motion.p>

        {/* Capability pills */}
        <motion.div {...fadeUp(0.42)} className="flex flex-wrap justify-center gap-2 mb-10">
          {pills.map((pill) => (
            <span
              key={pill}
              className="text-xs px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-gray-400"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="#what-we-build"
            onClick={() => trackEvent('cta_click', 'ViewContent', { label: 'explore_ai_agents', location: 'hero' })}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            Explore AI Agents
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            href="#contact"
            onClick={() => trackEvent('cta_click', 'Contact', { label: 'build_automation', location: 'hero' })}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
          >
            Let's Build
          </Link>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          {...fadeUp(0.6)}
          className="mt-10 sm:mt-16 flex flex-row items-center justify-center gap-8 sm:gap-10"
        >
          {[
            { value: '9+', label: 'AI Systems Live' },
            { value: '1000+', label: 'Hours Automated' },
            { value: '15/10', label: 'Average ROI' },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="font-heading font-bold text-2xl gradient-text-purple">{value}</span>
              <span className="text-xs text-gray-500">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
