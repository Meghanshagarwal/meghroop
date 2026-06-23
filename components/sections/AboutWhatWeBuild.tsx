'use client'

import { motion } from 'framer-motion'
import { Layers, Workflow, TrendingUp } from 'lucide-react'

const capabilities = [
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    spec: 'META & GOOGLE ADS // SEO // CONTENT',
    desc: 'We run growth as a system — paid acquisition, SEO, social media, and content — wired to clean tracking so every rupee of spend maps to qualified leads and real revenue, not vanity metrics.',
    points: ['Meta & Google Ads that convert', 'SEO & content that compounds', 'Funnels & tracking, end to end'],
    glow: 'rgba(167, 139, 250, 0.08)',
    borderColor: 'group-hover:border-purple-500/30',
  },
  {
    icon: Workflow,
    title: 'AI Agents & Automation',
    spec: 'AI AGENTS // n8n // WHATSAPP & CRM',
    desc: 'Custom AI agents and automations that reason, plan, and run repetitive work 24/7 — connected to your real tools and data. Autonomous systems, not chatbot wrappers.',
    points: ['Grounded custom AI agents', 'n8n & workflow automation', 'WhatsApp, CRM & voice integrations'],
    glow: 'rgba(6, 182, 212, 0.08)',
    borderColor: 'group-hover:border-cyan-500/30',
  },
  {
    icon: Layers,
    title: 'Software, Commerce & Brand',
    spec: 'NEXT.JS // SHOPIFY // WORDPRESS // DESIGN',
    desc: 'Custom software, web and mobile apps, and SaaS — plus Shopify and WordPress storefronts and the branding and creative that makes them land. Built properly, owned by you.',
    points: ['Web & mobile apps, SaaS', 'Shopify & WordPress builds', 'Brand identity, video & motion'],
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
            From growth campaigns to AI automation, custom software, commerce, and brand — built properly, owned by you, and wired to move real numbers.
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
