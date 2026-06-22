'use client'

import { motion, type Variants } from 'framer-motion'
import type { IconType } from 'react-icons'
import {
  SiReact, SiNodedotjs, SiTypescript, SiMongodb,
  SiShopify, SiWordpress, SiMeta, SiGoogleads, SiOpenai,
} from 'react-icons/si'
import { Zap } from 'lucide-react'

type Tech = { name: string; SiIcon?: IconType; LucideIcon?: React.ElementType; color: string }

const stack: Tech[] = [
  { name: 'React', SiIcon: SiReact, color: 'text-cyan-400' },
  { name: 'Node.js', SiIcon: SiNodedotjs, color: 'text-emerald-400' },
  { name: 'TypeScript', SiIcon: SiTypescript, color: 'text-[#60a5fa]' },
  { name: 'MongoDB', SiIcon: SiMongodb, color: 'text-green-400' },
  { name: 'AI Agents', SiIcon: SiOpenai, color: 'text-[#c084fc]' },
  { name: 'n8n', LucideIcon: Zap, color: 'text-rose-400' },
  { name: 'Shopify', SiIcon: SiShopify, color: 'text-green-400' },
  { name: 'WordPress', SiIcon: SiWordpress, color: 'text-[#60a5fa]' },
  { name: 'Meta Ads', SiIcon: SiMeta, color: 'text-[#60a5fa]' },
  { name: 'Google Ads', SiIcon: SiGoogleads, color: 'text-amber-400' },
]

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
const item: Variants = { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } } }

function Icon({ tech }: { tech: Tech }) {
  if (tech.SiIcon) { const I = tech.SiIcon; return <I size={22} className={tech.color} /> }
  if (tech.LucideIcon) { const I = tech.LucideIcon; return <I size={22} className={tech.color} /> }
  return null
}

export default function TechStack() {
  return (
    <section id="tech" className="section-padding" aria-label="Technology and platforms we use">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16 max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Tech & platforms
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight">
            The stack behind{' '}
            <span className="gradient-text">the results.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3"
        >
          {stack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={item}
              className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2.5 sm:gap-3 rounded-2xl border border-white/[0.06] bg-[#0d0d0d] px-3 py-5 sm:px-5 group hover:border-white/[0.14] transition-colors duration-300"
            >
              <span className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0">
                <Icon tech={tech} />
              </span>
              <span className="text-[13px] sm:text-sm font-medium text-white/70 group-hover:text-white transition-colors leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
