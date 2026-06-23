'use client'

import { motion, type Variants } from 'framer-motion'
import { TrendingUp, Bot, Code2, ShoppingBag, Palette } from 'lucide-react'

const cards = [
  {
    icon: TrendingUp,
    title: 'Growth & Marketing',
    description: 'Meta & Google Ads, SEO, social media, and content — run as one system and wired to clean tracking, so every rupee of spend maps to qualified leads and revenue.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    span: 'md:col-span-2',
    tag: 'Growth',
  },
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    description: 'Custom AI agents, n8n workflows, WhatsApp & CRM automation, and voice agents that run repetitive work 24/7 — without a human in the loop.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
    tag: 'AI-Native',
  },
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Custom software, web & mobile apps, dashboards, APIs, and full SaaS products — built end to end with React, Next.js, and TypeScript. You own the code.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-1',
    tag: 'Engineering',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify & WordPress',
    description: 'Custom and headless Shopify storefronts, Shopify apps, and fast custom WordPress — engineered to convert, with SEO baked in and no page-builder bloat.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    span: 'md:col-span-1',
    tag: 'Commerce',
  },
  {
    icon: Palette,
    title: 'Branding & Creative',
    description: 'Brand identity, social and ad creative, video editing, and motion graphics — scroll-stopping work that makes your growth and product actually land.',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    span: 'md:col-span-1',
    tag: 'Creative',
  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ContactWhatFor() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" aria-label="What people reach out for">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            PROJECT SCOPES
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Common points <span className="gradient-text">of contact.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From performance marketing to AI automation, custom software, commerce, and brand — tell us where you want to grow and we&apos;ll map the fit.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                variants={item}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className={`${card.span} relative rounded-2xl border border-white/[0.08] ${card.borderHover} overflow-hidden group cursor-default transition-all duration-300`}
              >
                {/* Background */}
                <div className="absolute inset-0 bg-[#050505]/70 backdrop-blur-sm" />
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Inner Glow ring on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 60px ${card.glowColor}` }}
                />

                <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors duration-300">
                        <Icon size={20} className={card.iconColor} />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-500">
                        {card.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {card.description}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono text-gray-600 uppercase tracking-wider mt-2 group-hover:text-white/60 transition-colors">
                    {"// READ PROTOCOL"}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.01] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* SEO Metadata Crawl Helpers */}
        <p className="sr-only">
          Talk to MeghRoop about growth and performance marketing (Meta Ads, Google Ads, SEO, social, content), AI agents and automation (n8n, WhatsApp, CRM, voice agents), custom software and SaaS development, Shopify and WordPress development, and branding and creative. Founder-led, fixed-fee builds and monthly growth retainers, delivered in weeks.
        </p>
      </div>
    </section>
  )
}
