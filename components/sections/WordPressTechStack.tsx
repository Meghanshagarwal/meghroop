'use client'

import { motion, type Variants } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiWordpress, SiReact, SiNextdotjs,
  SiTypescript, SiTailwindcss, SiFramer, SiPostgresql, SiVercel, SiGraphql,
} from 'react-icons/si'
import { Database, Server, Search, Zap, Code2 } from 'lucide-react'

type Tech = {
  name: string
  SiIcon?: IconType
  LucideIcon?: React.ElementType
  color: string
  bg: string
  border: string
}

const cmsTechs: Tech[] = [
  { name: 'WordPress',       SiIcon: SiWordpress,    color: 'text-blue-400',   bg: 'bg-blue-500/10',   border: 'border-blue-500/20'   },
  { name: 'REST API',        LucideIcon: Code2,      color: 'text-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20'   },
  { name: 'GraphQL',         SiIcon: SiGraphql,      color: 'text-pink-400',   bg: 'bg-pink-500/10',   border: 'border-pink-500/20'   },
]

const frontendTechs: Tech[] = [
  { name: 'React.js',        SiIcon: SiReact,        color: 'text-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20'   },
  { name: 'Next.js',         SiIcon: SiNextdotjs,    color: 'text-white',      bg: 'bg-white/5',       border: 'border-white/10'      },
  { name: 'TypeScript',      SiIcon: SiTypescript,   color: 'text-blue-300',   bg: 'bg-blue-500/10',   border: 'border-blue-400/20'   },
  { name: 'Tailwind CSS',    SiIcon: SiTailwindcss,  color: 'text-sky-400',    bg: 'bg-sky-500/10',    border: 'border-sky-500/20'    },
  { name: 'Framer Motion',   SiIcon: SiFramer,       color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
]

const backendTechs: Tech[] = [
  { name: 'PostgreSQL',      SiIcon: SiPostgresql,   color: 'text-blue-400',   bg: 'bg-blue-500/10',   border: 'border-blue-500/20'   },
  { name: 'Node.js APIs',    LucideIcon: Server,     color: 'text-emerald-400',bg: 'bg-emerald-500/10',border: 'border-emerald-500/20' },
  { name: 'Database Design', LucideIcon: Database,   color: 'text-slate-400',  bg: 'bg-slate-500/10',  border: 'border-slate-500/20'  },
]

const seoTechs: Tech[] = [
  { name: 'Schema Markup',   LucideIcon: Search,     color: 'text-green-400',  bg: 'bg-green-500/10',  border: 'border-green-500/20'  },
  { name: 'Performance',     LucideIcon: Zap,        color: 'text-amber-400',  bg: 'bg-amber-500/10',  border: 'border-amber-500/20'  },
]

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

function TechIcon({ tech, size = 20 }: { tech: Tech; size?: number }) {
  if (tech.SiIcon) {
    const Icon = tech.SiIcon
    return <Icon size={size} className={tech.color} />
  }
  if (tech.LucideIcon) {
    const Icon = tech.LucideIcon
    return <Icon size={size} className={tech.color} />
  }
  return <span className={`font-heading font-bold text-base ${tech.color}`}>T</span>
}

function TechCard({ tech }: { tech: Tech }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ scale: 1.06, transition: { duration: 0.15 } }}
      className={`relative rounded-2xl border ${tech.border} ${tech.bg} p-4 flex flex-col items-center gap-3 cursor-default group transition-all duration-300`}
    >
      <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center">
        <TechIcon tech={tech} size={20} />
      </div>
      <span className="text-xs text-gray-400 font-medium text-center group-hover:text-white transition-colors duration-200">
        {tech.name}
      </span>
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${tech.bg}`} />
    </motion.div>
  )
}

export default function WordPressTechStack() {
  return (
    <section id="tech" className="section-padding overflow-hidden" aria-label="Technology stack for WordPress development">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Tech Stack
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Built with tools we{' '}
            <span className="gradient-text">genuinely trust.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Every technology chosen through production experience. No buzzwords. No cargo-culting. Everything on this stack has earned its place by delivering results.
          </p>
        </motion.div>

        {/* CMS Stack */}
        <div className="mb-12">
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">CMS & Content</span>
            <div className="flex-1 h-px bg-blue-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-3 gap-3"
          >
            {cmsTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Frontend Stack */}
        <div className="mb-12">
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Frontend</span>
            <div className="flex-1 h-px bg-cyan-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-5 gap-3"
          >
            {frontendTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Backend Stack */}
        <div className="mb-12">
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Backend & Database</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-3 gap-3"
          >
            {backendTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* SEO & Infrastructure */}
        <div className="mb-12">
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-green-400 uppercase tracking-widest">SEO & Deployment</span>
            <div className="flex-1 h-px bg-green-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-2 gap-3 max-w-md"
          >
            {seoTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid mt-3"
          >
            <TechCard tech={{ name: 'Vercel', SiIcon: SiVercel, color: 'text-white', bg: 'bg-white/5', border: 'border-white/10' }} />
          </motion.div>
        </div>

        {/* Mobile view */}
        <div className="sm:hidden space-y-4">
          <div>
            <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">CMS, Frontend & Backend</p>
            <div className="grid grid-cols-2 gap-3">
              {[...cmsTechs, ...frontendTechs, ...backendTechs].map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-3">SEO & Deployment</p>
            <div className="grid grid-cols-2 gap-3">
              {[...seoTechs, { name: 'Vercel', SiIcon: SiVercel, color: 'text-white', bg: 'bg-white/5', border: 'border-white/10' }].map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-cyan-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Why this stack?
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              <span className="text-white font-semibold">WordPress</span> is battle-tested. Millions of sites run on it. The ecosystem is mature. But it needs to be built right—clean code, modern architecture, proper separation of concerns.
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">
              <span className="text-white font-semibold">React and Next.js</span> give us component architecture with server-side rendering. Frontend frameworks that scale with your business. SEO-friendly, performant, modern.
            </p>
            <p className="text-gray-400 leading-relaxed">
              <span className="text-white font-semibold">The full stack compounds:</span> Faster development. Fewer bugs. Better performance. Easier to maintain. More scalable. Every choice builds on the others to create a system that stays alive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
