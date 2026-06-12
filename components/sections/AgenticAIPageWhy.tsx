'use client'

import { motion, type Variants } from 'framer-motion'
import { Rocket, Clock, Lock, Globe, Cpu } from 'lucide-react'

const differentiators = [
  {
    icon: Cpu,
    title: 'We build what we recommend',
    description: 'Agents, MCP servers, and automations running in production — not slideware. You are not our first AI deployment.',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Clock,
    title: 'Ship in weeks, not quarters',
    description: 'Fixed-fee, fixed-timeline. No time-and-materials creep, no endless discovery.',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Lock,
    title: 'Own your stack',
    description: 'No lock-in. Pick the model, framework, and cloud that fits your business. Code, prompts, and IP are yours.',
    iconColor: 'text-violet-400',
  },
  {
    icon: Globe,
    title: 'India + US delivery',
    description: 'Built in Jaipur, delivered to US standards, priced 40–60% below US boutiques.',
    iconColor: 'text-blue-400',
  },
  {
    icon: Rocket,
    title: 'Execution, not slideware',
    description: 'Every engagement ends with something running in production. Clean handoff documentation, always.',
    iconColor: 'text-pink-400',
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

export default function AgenticAIPageWhy() {
  return (
    <section id="why-meghroop" className="section-padding" aria-label="Why MeghRoop">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Why work with us
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why <span className="gradient-text">MeghRoop.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            We combine real engineering with services delivery, so outcomes show up fast — and stay yours.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {differentiators.map((d) => {
            const Icon = d.icon
            return (
              <motion.div
                key={d.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-white/[0.08] hover:border-white/20 overflow-hidden transition-all duration-300 p-6 sm:p-7"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.1] transition-colors duration-300">
                    <Icon size={20} className={d.iconColor} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{d.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
