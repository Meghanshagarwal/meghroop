'use client'

import { motion } from 'framer-motion'
import { GitBranch, Clock, MessageSquare, ArrowUpRight } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: 'Async-First Flow',
    desc: 'No unnecessary status calls. We document everything, write clean blueprints, and drop loom walkthroughs. You stay updated without breaking your focus.',
    color: 'text-cyan-400 bg-cyan-500/5 border-cyan-500/10',
  },
  {
    icon: MessageSquare,
    title: 'Direct Chat Nodes',
    desc: 'Zero corporate layers. We plug straight into your Slack, WhatsApp, or Discord. Instant developer access with a flat communication hierarchy.',
    color: 'text-purple-400 bg-purple-500/5 border-purple-500/10',
  },
  {
    icon: Clock,
    title: 'Global Delivery Cycles',
    desc: 'Operating globally. A timezone offset means you go to sleep and wake up to finished commits. Seamless 24-hour engineering acceleration.',
    color: 'text-emerald-400 bg-emerald-500/5 border-emerald-500/10',
  },
  {
    icon: GitBranch,
    title: 'Absolute Ownership',
    desc: 'Zero lock-ins. Clean, modular codebases on GitHub, completely documented API layers, automated deployments, and frictionless handoffs.',
    color: 'text-rose-400 bg-rose-500/5 border-rose-500/10',
  },
]

export default function ContactInternetNative() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden" aria-label="Internet-native work culture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              OPERATING PROTOCOL
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              Built for the <br className="hidden sm:inline" />
              <span className="gradient-text">borderless internet.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We operate as a modern, internet-native Growth, AI &amp; software studio. No offices, no geographical boundaries, and zero bureaucratic bloat.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
              We coordinate across timezones, ship directly to production, and maintain absolute transparency over GitHub. We make systems that work perfectly, regardless of where your team is sitting.
            </p>
            
            <div className="pt-4">
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('name')?.focus()
                  document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-400 hover:text-cyan-300 uppercase transition-colors"
              >
                Inquire about a collaboration <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-6 rounded-2xl border border-white/[0.06] bg-[#050505]/40 backdrop-blur-sm relative overflow-hidden group hover:border-white/[0.1] transition-all"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/[0.01] to-transparent rounded-bl-full pointer-events-none" />
                  
                  <div className="space-y-4">
                    <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${feat.color}`}>
                      <Icon size={14} />
                    </div>
                    <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                      {feat.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed group-hover:text-gray-400 transition-colors">
                      {feat.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
