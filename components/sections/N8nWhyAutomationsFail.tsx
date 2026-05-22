'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Zap, Layers, Shuffle, Users, Settings } from 'lucide-react'

const failures = [
  {
    icon: AlertTriangle,
    title: 'Built without understanding the process',
    description: 'Automations fail because nobody actually mapped out how work flows through the organization. They guess. They automate the wrong thing. Then it breaks real processes.',
  },
  {
    icon: Layers,
    title: 'Disconnected systems',
    description: 'Most organizations have automation chaos. Zapier here. Make.com there. Custom scripts somewhere else. Nothing talks to anything. Data is duplicated. Systems go out of sync.',
  },
  {
    icon: Shuffle,
    title: 'No error handling or fallbacks',
    description: 'When automation breaks (and it will), there\'s no graceful degradation. No human handoff. No logging. The whole process just stops and nobody notices until something breaks.',
  },
  {
    icon: Users,
    title: 'People left out of the loop',
    description: 'Automation that doesn\'t include humans for judgment calls causes problems. High-stakes decisions need review. Low-risk tasks run automatically. Most automations get this backwards.',
  },
  {
    icon: Settings,
    title: 'Set it and forget it mentality',
    description: 'Systems built once and never maintained. Requirements change. APIs update. Business processes evolve. Automations that aren\'t monitored and updated slowly break.',
  },
  {
    icon: Zap,
    title: 'Choosing tools over strategy',
    description: 'Teams pick automation platforms first, then try to fit their workflows into them. It should be the opposite. Map your needs. Then choose tools that serve those needs.',
  },
]

export default function N8nWhyAutomationsFail() {
  return (
    <section id="why-automations-fail" className="section-padding" aria-label="Why most automation projects fail">
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
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            The patterns we see in broken automation
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Why most automations{' '}
            <br />
            <span className="gradient-text">actually fail.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            It&apos;s not the tools. It&apos;s the thinking. Most automation projects fail because they skip critical steps. Here&apos;s what we see in the wild.
          </p>
        </motion.div>

        {/* Failure patterns grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {failures.map((failure, index) => {
            const Icon = failure.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div
                  className="group relative p-6 md:p-7 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-red-600/10 to-orange-600/10 hover:border-red-500/30 transition-all duration-500 h-full"
                  style={{
                    boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-black/20 flex items-center justify-center text-red-400 transition-transform duration-300 group-hover:scale-110 mb-4">
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-white transition-colors duration-300">
                    {failure.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {failure.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Key insight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative p-8 md:p-10 rounded-3xl border border-white/[0.08] bg-gradient-to-br from-amber-600/15 to-orange-600/10"
          style={{
            boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">
                Systems thinking first
              </h3>
              <p className="text-gray-300 leading-relaxed">
                The best automation projects start with understanding. <span className="text-white font-semibold">Map the process.</span> Talk to people doing the work. Understand where it breaks. Identify the real friction points. Only then design the automation.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-white mb-4">
                Architecture over tools
              </h3>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">Start with architecture.</span> How should data flow? Where do decisions happen? What needs logging? What needs human review? Once you have this clarity, pick tools that support that architecture.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
