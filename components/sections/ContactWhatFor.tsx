'use client'

import { motion, type Variants } from 'framer-motion'
import { Brain, ShoppingBag, Zap, Layout, Server, Layers } from 'lucide-react'

const cards = [
  {
    icon: Brain,
    title: 'AI Systems & Infrastructure',
    description: 'Cognitive agents that plan, reason, and act. Customized model training, custom MCP servers to expose backend systems, and memory layers. Designed for absolute operational autonomy.',
    gradient: 'from-purple-600/30 to-violet-600/30',
    iconColor: 'text-purple-400',
    borderHover: 'hover:border-purple-500/40',
    glowColor: 'rgba(139, 92, 246, 0.15)',
    span: 'md:col-span-2',
    tag: 'AI-Native',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Engineering',
    description: 'High-conversion headless storefronts built on Next.js, customized checkout pipelines, and complex backend inventory logic. sub-400ms loading speeds.',
    gradient: 'from-emerald-600/30 to-teal-600/30',
    iconColor: 'text-emerald-400',
    borderHover: 'hover:border-emerald-500/40',
    glowColor: 'rgba(16, 185, 129, 0.15)',
    span: 'md:col-span-1',
    tag: 'Commerce',
  },
  {
    icon: Zap,
    title: 'Automation Workflows',
    description: 'Seamless n8n automation pipelines, secure data synchronizations, and API routing hubs. Moving information across tools in background loops that never fail.',
    gradient: 'from-amber-600/30 to-orange-600/30',
    iconColor: 'text-amber-400',
    borderHover: 'hover:border-amber-500/40',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    span: 'md:col-span-1',
    tag: 'Pipelines',
  },
  {
    icon: Layout,
    title: 'Web Engineering & Frontends',
    description: 'Bespoke web applications, high-performance static builds, responsive layouts, and interactive experiences. Deep attention to typography, spacing rhythm, and fluid animations.',
    gradient: 'from-blue-600/30 to-cyan-600/30',
    iconColor: 'text-blue-400',
    borderHover: 'hover:border-blue-500/40',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    span: 'md:col-span-2',
    tag: 'Frontend',
  },
  {
    icon: Server,
    title: 'Decoupled WordPress Systems',
    description: 'Re-engineering legacy architectures. Speeding up WordPress using decoupled headless frameworks, static generation, secure REST/GraphQL API schemas, and premium custom panels.',
    gradient: 'from-indigo-600/30 to-violet-600/30',
    iconColor: 'text-indigo-400',
    borderHover: 'hover:border-indigo-500/40',
    glowColor: 'rgba(99, 102, 241, 0.15)',
    span: 'md:col-span-1',
    tag: 'Headless',
  },
  {
    icon: Layers,
    title: 'Modern Digital Systems',
    description: 'Comprehensive digital ecosystems, databases, search architectures, and Generative Engine Optimization (GEO) models to ensure discoverability inside AI environments.',
    gradient: 'from-rose-600/30 to-pink-600/30',
    iconColor: 'text-rose-400',
    borderHover: 'hover:border-rose-500/40',
    glowColor: 'rgba(244, 63, 94, 0.15)',
    span: 'md:col-span-2',
    tag: 'Ecosystems',
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
            We build cohesive tech infrastructure. Whether it is a single high-impact Next.js canvas or a complex cognitive AI workflow, we design with engineering intention.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
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
          Inquire about our AI Engineering Studio, Custom n8n workflow automations, headless Shopify custom commerce platforms, headless WordPress architectures, and high-performance Next.js web application designs. Custom MCP servers connect standard large language models safely to existing operational systems and private customer data.
        </p>
      </div>
    </section>
  )
}
