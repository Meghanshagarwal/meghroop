'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Zap, Brain, Bot, Workflow, HeadphonesIcon, Plug, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

const pills = ['AI Strategy Audit', 'Agentic Automation', 'AI Voice Agents', 'Custom AI Agents', 'AI Integration', 'Knowledge Intelligence']

const buildGrid = [
  { icon: Brain, label: 'AI Strategy Audit', color: 'text-cyan-400' },
  { icon: Bot, label: 'Custom AI Agents', color: 'text-violet-400' },
  { icon: Workflow, label: 'Agentic Automation', color: 'text-emerald-400' },
  { icon: HeadphonesIcon, label: 'AI Voice Agents', color: 'text-blue-400' },
  { icon: Plug, label: 'AI Integration', color: 'text-pink-400' },
  { icon: BookOpen, label: 'Knowledge AI', color: 'text-amber-400' },
]

export default function ServicesPageHero() {
  return (
    <section
      id="services-hero"
      aria-label="AI services that ship — strategy, agents, automation, voice and integration"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16"
    >
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-600/25 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-violet-600/20 rounded-full blur-[120px] animate-float-delay" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/15 rounded-full blur-[100px] animate-float-slow" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <motion.div {...fadeUp(0)} className="flex mb-6 sm:mb-8">
              <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 px-3 sm:px-4 py-2 rounded-full glass text-xs sm:text-sm text-gray-300">
                <Zap size={13} className="text-cyan-400 flex-shrink-0" />
                <span>End-to-end AI services</span>
                <span className="hidden sm:inline-flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs">Shipping in production</span>
                </span>
              </div>
            </motion.div>

            <motion.p {...fadeUp(0.1)} className="font-heading font-bold text-sm sm:text-base text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-5"
            >
              AI services that{' '}
              <span className="gradient-text">actually ship.</span>
              <br />
              Not slide decks.
            </motion.h1>

            <motion.p {...fadeUp(0.35)} className="text-gray-400 text-lg max-w-xl leading-relaxed mb-8">
              We help growing businesses move from &ldquo;AI is amazing&rdquo; to{' '}
              <span className="text-white">&ldquo;AI is running our work.&rdquo;</span> Strategy audits, custom
              agents, agentic automation, voice, integration, knowledge intelligence, and outbound — delivered by
              engineers who&apos;ve shipped AI in production, not pitched it in PowerPoint.
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="flex flex-wrap gap-2 mb-9">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-gray-400"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                onClick={() => trackEvent('cta_click', 'Lead', { label: 'ai_roadmap', location: 'services_hero' })}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                Get my 90-day AI roadmap
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/ai-agents/ai-strategy-audit"
                onClick={() => trackEvent('cta_click', 'ViewContent', { label: 'readiness_audit', location: 'services_hero' })}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
              >
                Start with an AI Readiness Audit
              </Link>
            </motion.div>
          </div>

          {/* Right — what we build card */}
          <motion.div {...fadeUp(0.3)} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-violet-600/20 rounded-3xl blur-2xl" />
            <div className="relative glass rounded-3xl p-8">
              <p className="text-sm font-semibold text-cyan-400 mb-5 text-center">What we build &amp; ship</p>
              <div className="grid grid-cols-2 gap-3">
                {buildGrid.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/[0.08]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className={color} />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/10 text-center">
                <p className="text-sm text-gray-400">India + US delivery · Fixed fees · Ships in weeks</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
