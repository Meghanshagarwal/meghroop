'use client'

import { motion } from 'framer-motion'
import { HardDrive, Play, GitPullRequest, PocketKnife } from 'lucide-react'

const processSteps = [
  {
    icon: HardDrive,
    name: '01 // Context Mapping',
    title: 'Visualizing structural data loops',
    desc: 'Before touching design or opening VS Code, we outline the exact topology of your systems. We map API boundaries, DB rows, and user friction bottlenecks, deciding what to optimize.',
  },
  {
    icon: Play,
    name: '02 // Atmospheric Prototyping',
    title: 'Balancing performance with emotion',
    desc: 'We sketch clean, customized layouts. Every visual transition and interactive frame is coded dynamically in interactive sandboxes to guarantee hardware acceleration and beautiful visual rhythm.',
  },
  {
    icon: GitPullRequest,
    name: '03 // Pure Implementation',
    title: 'Coded with absolute intention',
    desc: 'We write dry, modular React code, lightweight GraphQL schemas, and custom Next.js endpoints. No templates. No redundant plugins. We construct websites that generate static edge layers instantly.',
  },
  {
    icon: PocketKnife,
    name: '04 // Secure Automation Failovers',
    title: 'Scaling operations quietly',
    desc: 'Once the code compiles, we orchestrate backends. We integrate resilient webhook pipelines (n8n), safe database actions, and contextual LLM loops with zero downtime and automatic recovery systems.',
  },
]

export default function AboutProcess() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]" aria-label="Our Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Our Workflow
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Bespoke engineering is a <br className="hidden sm:inline" />
            <span className="gradient-text-purple">rhythmic cadence.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We bypass typical corporate agency milestone templates. We focus on transparent direct engineering, systems thinking, and meticulous technical execution.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl border border-white/[0.06] bg-[#050505] relative overflow-hidden group hover:border-white/[0.1] transition-colors"
              >
                {/* Visual grid numbers */}
                <div className="absolute top-4 right-4 text-[44px] font-bold font-mono text-white/[0.02] group-hover:text-white/[0.04] transition-colors pointer-events-none">
                  {`0${idx + 1}`}
                </div>

                <div className="space-y-4">
                  <div className="w-8 h-8 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-400">
                    <Icon size={14} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 block tracking-widest uppercase mb-1">
                      {step.name}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
