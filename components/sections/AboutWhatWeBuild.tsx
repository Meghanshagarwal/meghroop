'use client'

import { motion } from 'framer-motion'
import { Layers, Workflow, Smartphone } from 'lucide-react'

const capabilities = [
  {
    icon: Workflow,
    title: 'AI Systems & Resilient Automations',
    spec: 'INTELLIGENT PIPELINES // n8n // VECTOR DBs',
    desc: 'We construct secure, server-side data automation structures. From automated CRM updates to custom Model Context Protocol (MCP) integrations, we replace manual data Entry loops with bulletproof background systems.',
    points: ['Model integration & context grounding', 'Automatic failovers & recovery pipelines', 'Secured token sandboxing & security gate'],
    glow: 'rgba(167, 139, 250, 0.08)',
    borderColor: 'group-hover:border-purple-500/30',
  },
  {
    icon: Smartphone,
    title: 'Cinematic Frontends & Storefronts',
    spec: 'NEXT.JS // FRAMER MOTION // SHOPIFY CUSTOM',
    desc: 'We engineer tailor-made e-commerce storefronts that perform beautifully. By connecting static edge engines directly to Shopify GraphQL endpoints, we deliver sub-100ms first input delays and premium brand visuals.',
    points: ['Lighthouse performance target of 99/100', 'Fluid hardware-accelerated transitions', 'Pre-rendered static collection routing'],
    glow: 'rgba(6, 182, 212, 0.08)',
    borderColor: 'group-hover:border-cyan-500/30',
  },
  {
    icon: Layers,
    title: 'Bespoke Enterprise Web Infrastructure',
    spec: 'HEADLESS WORDPRESS // CUSTOM API LAYER',
    desc: 'We rebuild standard CMS templates into state-of-the-art headless servers. We decouple Content Management from the frontend layout, providing deep security, unlimited layout freedom, and immediate static rendering.',
    points: ['Decoupled frontend static distribution', 'Secure custom REST & GraphQL endpoints', 'Zero WordPress template loading bloat'],
    glow: 'rgba(16, 185, 129, 0.08)',
    borderColor: 'group-hover:border-emerald-500/30',
  },
]

export default function AboutWhatWeBuild() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" aria-label="What We Build">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Capabilities & Output
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Bespoke components for <br className="hidden sm:inline" />
            <span className="gradient-text">the future internet.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We don&apos;t just install plugins. We write clean, customized web systems designed to quiet down your operations and elevate your digital design authority.
          </p>
        </div>

        {/* Capabilities grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {capabilities.map((c, idx) => {
            const Icon = c.icon
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-[#050505] p-6 sm:p-8 flex flex-col justify-between relative group hover:bg-[#070707] transition-all duration-300"
              >
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 35px ${c.glow}` }} />

                <div className="space-y-6">
                  {/* Top line specs */}
                  <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.04] flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                      <Icon size={14} />
                    </div>
                    <span className="text-[9px] font-mono text-gray-500 tracking-wider">
                      {c.spec}
                    </span>
                  </div>

                  {/* Body description */}
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white tracking-tight leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 pt-2 border-t border-white/[0.04]">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-[11px] text-gray-500 font-mono">
                        <span className="w-1 h-1 rounded-full bg-cyan-400/70" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
