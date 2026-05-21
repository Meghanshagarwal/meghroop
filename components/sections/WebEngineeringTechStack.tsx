'use client'

import { motion, type Variants } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiReact, SiNextdotjs, SiNodedotjs,
  SiTypescript, SiTailwindcss, SiFramer, SiSupabase, SiVercel,
} from 'react-icons/si'
import { Database, Server, Zap } from 'lucide-react'

type Tech = {
  name: string
  SiIcon?: IconType
  LucideIcon?: React.ElementType
  color: string
  bg: string
  border: string
}

const frontendTechs: Tech[] = [
  { name: 'React.js',      SiIcon: SiReact,      color: 'text-cyan-400',   bg: 'bg-cyan-500/10',   border: 'border-cyan-500/20'   },
  { name: 'Next.js',       SiIcon: SiNextdotjs,  color: 'text-white',      bg: 'bg-white/5',       border: 'border-white/10'      },
  { name: 'TypeScript',    SiIcon: SiTypescript, color: 'text-blue-300',   bg: 'bg-blue-500/10',   border: 'border-blue-400/20'   },
  { name: 'Tailwind CSS',  SiIcon: SiTailwindcss,color: 'text-sky-400',    bg: 'bg-sky-500/10',    border: 'border-sky-500/20'    },
  { name: 'Framer Motion', SiIcon: SiFramer,     color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
]

const backendTechs: Tech[] = [
  { name: 'Node.js',       SiIcon: SiNodedotjs,  color: 'text-emerald-400',bg: 'bg-emerald-500/10',border: 'border-emerald-500/20' },
  { name: 'Supabase',      SiIcon: SiSupabase,   color: 'text-teal-400',   bg: 'bg-teal-500/10',   border: 'border-teal-500/20'   },
  { name: 'PostgreSQL',    LucideIcon: Database, color: 'text-blue-400',   bg: 'bg-blue-500/10',   border: 'border-blue-500/20'   },
  { name: 'APIs',          LucideIcon: Server,   color: 'text-slate-400',  bg: 'bg-slate-500/10',  border: 'border-slate-500/20'  },
]

const infraTechs: Tech[] = [
  { name: 'Vercel',        SiIcon: SiVercel,     color: 'text-white',      bg: 'bg-white/5',       border: 'border-white/10'      },
  { name: 'Performance',   LucideIcon: Zap,      color: 'text-amber-400',  bg: 'bg-amber-500/10',  border: 'border-amber-500/20'  },
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

export default function WebEngineeringTechStack() {
  return (
    <section id="tech" className="section-padding overflow-hidden" aria-label="Technology stack for web development">
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
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Tech Stack
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Built with tools we{' '}
            <span className="gradient-text">genuinely trust.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Every tool chosen for performance, scalability, and developer experience. No cargo-culting. Every technology earned its place through production experience.
          </p>
        </motion.div>

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
            className="hidden sm:grid grid-cols-2 md:grid-cols-5 gap-3"
          >
            {frontendTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Backend Stack */}
        <div className="mb-12">
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">Backend</span>
            <div className="flex-1 h-px bg-emerald-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {backendTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Infrastructure */}
        <div>
          <div className="hidden sm:flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Infrastructure</span>
            <div className="flex-1 h-px bg-slate-500/20" />
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="hidden sm:grid grid-cols-2 md:grid-cols-2 gap-3"
          >
            {infraTechs.map((tech) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Mobile stack list */}
        <div className="sm:hidden space-y-4">
          <div>
            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-3">Frontend & Backend</p>
            <div className="grid grid-cols-2 gap-3">
              {[...frontendTechs, ...backendTechs].map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">Infrastructure</p>
            <div className="grid grid-cols-2 gap-3">
              {infraTechs.map((tech) => (
                <TechCard key={tech.name} tech={tech} />
              ))}
            </div>
          </div>
        </div>

        {/* Why this stack */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-blue-600/5" />
          <div className="relative z-10">
            <h3 className="font-heading font-bold text-lg text-white mb-4">
              Why this stack?
            </h3>
            <p className="text-gray-400 leading-relaxed">
              React and Next.js give us the power of component architecture with server-side rendering for performance. TypeScript keeps the code clean and scalable. TailwindCSS means consistent design systems and rapid iteration. Framer Motion lets us build cinematic interfaces without compromising performance. Supabase provides backend flexibility. Vercel ensures global CDN deployment with zero-config optimizations. Every choice compounds over time—faster development, fewer bugs, better performance.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
