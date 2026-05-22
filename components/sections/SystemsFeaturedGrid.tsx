'use client'

import { motion } from 'framer-motion'
import { Cpu, Network, ShoppingBag, Eye, Database } from 'lucide-react'

const projects = [
  {
    title: 'Cognitive Memory Interface',
    category: 'AI Infrastructure',
    description: 'Custom Model Context Protocol server stack bridging Claude & OpenAI models to postgres datasets. Houses vector-grounded memory buffers and token audit streams.',
    metric: 'Uptime: 99.998%',
    latency: 'Trace Latency: < 40ms',
    glow: 'rgba(6, 182, 212, 0.15)',
    icon: Cpu,
    tech: ['MCP', 'TypeScript', 'Vector Cache', 'PostgreSQL'],
    color: 'text-cyan-400',
    border: 'border-cyan-500/10',
    bg: 'from-cyan-600/10 to-blue-600/5',
  },
  {
    title: 'Autonomous Flow Pipelines',
    category: 'Automation Workflows',
    description: 'Advanced n8n workflow cluster executing cross-platform synchronization across CRM pipelines, transaction nodes, and dynamic slack notifications.',
    metric: 'Daily Runs: 140k+',
    latency: 'Error Failover: Active',
    glow: 'rgba(167, 139, 250, 0.15)',
    icon: Network,
    tech: ['n8n', 'Node.js', 'REST APIs', 'Webhooks'],
    color: 'text-purple-400',
    border: 'border-purple-500/10',
    bg: 'from-purple-600/10 to-violet-600/5',
  },
  {
    title: 'Cinematic E-Commerce Core',
    category: 'Shopify Experiences',
    description: 'Ultra-fast custom Shopify headless interface leveraging custom Storefront GraphQL nodes, custom checkout hooks, and premium animations.',
    metric: 'Lighthouse PageSpeed: 99',
    latency: 'First Contentful Paint: 0.2s',
    glow: 'rgba(59, 130, 246, 0.15)',
    icon: ShoppingBag,
    tech: ['Next.js', 'Shopify Graph', 'Framer Motion', 'Tailwind'],
    color: 'text-blue-400',
    border: 'border-blue-500/10',
    bg: 'from-blue-600/10 to-indigo-600/5',
  },
  {
    title: 'Creative Interactive Frame',
    category: 'Cinematic Websites',
    description: 'Fully customized, brand-centric creative web system displaying fluid vector designs, interactive scroll triggers, and immersive audio layouts.',
    metric: 'Awwwards Nominated',
    latency: 'GPU FrameRate: 60 FPS',
    glow: 'rgba(245, 158, 11, 0.15)',
    icon: Eye,
    tech: ['React', 'Framer Motion', 'Vanilla CSS', 'Audioscape'],
    color: 'text-amber-400',
    border: 'border-amber-500/10',
    bg: 'from-amber-600/10 to-orange-600/5',
  },
  {
    title: 'Intelligent Enterprise Panel',
    category: 'Dashboards & Tools',
    description: 'High-security control panel built for private analytics. Tracks dynamic client data pipelines, handles session logs, and parses real-time database loads.',
    metric: 'Secured Logins: OAuth2',
    latency: 'Query Optimizations: Indexed',
    glow: 'rgba(16, 185, 129, 0.15)',
    icon: Database,
    tech: ['Supabase', 'React Table', 'Docker', 'Recharts'],
    color: 'text-emerald-400',
    border: 'border-emerald-500/10',
    bg: 'from-emerald-600/10 to-teal-600/5',
  },
]

export default function SystemsFeaturedGrid() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" aria-label="Featured Engineered Systems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Curated Systems
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Engineered artifacts <br className="hidden sm:inline" />
            <span className="gradient-text-purple">built to serve active utility.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Instead of standard placeholder templates, we construct resilient, interactive applications that process active logic and elevate brand identity.
          </p>
        </div>

        {/* Dynamic Bento-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((project, idx) => {
            const Icon = project.icon
            const isWide = idx === 0 || idx === 4
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`${isWide ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'} rounded-2xl border ${project.border} bg-[#050505] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 relative overflow-hidden cursor-default`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.01] to-transparent pointer-events-none" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 50px ${project.glow}` }}
                />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400 group-hover:text-white transition-colors">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors duration-300">
                      <Icon size={18} className={project.color} />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="font-heading font-bold text-2xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-8">
                    {project.description}
                  </p>
                </div>

                {/* Footer telemetry */}
                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white/[0.02] border border-white/[0.04] text-gray-500 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Telemetry info */}
                  <div className="flex items-center justify-between border-t border-white/[0.04] pt-4 font-mono text-[10px] text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{project.metric}</span>
                    </div>
                    <span>{project.latency}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
