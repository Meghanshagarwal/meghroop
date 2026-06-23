'use client'

import { motion } from 'framer-motion'
import { HardDrive, Play, GitPullRequest, PocketKnife } from 'lucide-react'

const processSteps = [
  {
    icon: HardDrive,
    name: '01 // Discover',
    title: 'Understand the real goal',
    desc: 'Before any design, ad, or line of code, we map what actually matters — your funnel, your tools, your numbers, and the friction in between — and decide where we can make the biggest impact.',
  },
  {
    icon: Play,
    name: '02 // Plan',
    title: 'A clear, honest blueprint',
    desc: 'We propose a concrete plan with scope, timeline, and the exact approach — whether that is a growth campaign, an AI agent, a custom build, or a brand. No fluff, no pre-packaged retainers.',
  },
  {
    icon: GitPullRequest,
    name: '03 // Build & Launch',
    title: 'Ship in focused sprints',
    desc: 'We run in rapid, focused sprints — campaigns go live, agents get wired in, software ships to production. No templates, no bloat, no redundant plugins. You see results early, not at the very end.',
  },
  {
    icon: PocketKnife,
    name: '04 // Measure & Scale',
    title: 'Optimize what works',
    desc: 'Once it is live, we watch the numbers, tune what works, and automate the repetitive parts — so growth, systems, and operations keep compounding quietly in the background.',
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
