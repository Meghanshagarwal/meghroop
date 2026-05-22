'use client'

import { motion } from 'framer-motion'
import { MessageSquareCode, Compass, UserCheck, ShieldCheck } from 'lucide-react'

const steps = [
  {
    icon: MessageSquareCode,
    name: '01 // Direct Discovery',
    title: 'A sentence or a 14-page PDF.',
    desc: 'Send us whatever you have. A vague idea on a napkin, a persistent bottleneck in your operations, or a 14-page technical specification. We read every word, and we reply faster than you expect. Usually in hours.',
    accent: 'bg-cyan-500/5 text-cyan-400 border-cyan-500/10',
  },
  {
    icon: Compass,
    name: '02 // Systems Thinking',
    title: 'Context mapping and project fit.',
    desc: 'We do not sell pre-packaged services. We evaluate if there is a genuine technical alignment. We inspect your API limits, database structures, and performance goals to verify if we can make a significant impact.',
    accent: 'bg-purple-500/5 text-purple-400 border-purple-500/10',
  },
  {
    icon: UserCheck,
    name: '03 // Direct Communication',
    title: 'Engineers, not sales reps.',
    desc: 'You speak directly to the developers writing your code and architecting your workflows. No account managers. No communication handoffs. We discuss feasibility, timelines, and exact tech selections in plain English.',
    accent: 'bg-emerald-500/5 text-emerald-400 border-emerald-500/10',
  },
  {
    icon: ShieldCheck,
    name: '04 // Blueprint & Momentum',
    title: 'Immediate technical speed.',
    desc: 'We construct an interactive architectural blueprint detailing exactly what will change and how we will build it. Once approved, we run in rapid, focused sprints. You see results in production from day one.',
    accent: 'bg-amber-500/5 text-amber-400 border-amber-500/10',
  },
]

export default function ContactWorkflow() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]" aria-label="Our communication and collaboration workflow">
      {/* Background glow lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-1/3 w-[1px] h-full bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
        <div className="absolute top-0 left-2/3 w-[1px] h-full bg-gradient-to-b from-white/[0.04] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Title and Quotes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 sm:mb-24">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              OUR CADENCE
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
              How we work. <br className="hidden sm:inline" />
              <span className="gradient-text-purple">Human, fast, and structured.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl">
              We avoid traditional corporate layers. Our engineering methodology is transparent, conversational, and hyper-focused on code performance.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            <div className="border-l-2 border-white/[0.06] pl-6 py-2 space-y-3">
              <p className="text-xs sm:text-sm font-mono text-gray-500 italic leading-relaxed">
                &ldquo;Most replies happen faster than expected. We read every email. Even the unnecessarily long ones.&rdquo;
              </p>
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                {"//"} THE MEGHROOP GUARANTEE
              </span>
            </div>
          </div>
        </div>

        {/* Workflow steps list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-[#050505]/80 backdrop-blur-sm relative overflow-hidden group hover:border-white/[0.1] hover:bg-[#070707] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step index */}
                <div className="absolute top-4 right-6 text-[48px] font-bold font-mono text-white/[0.015] group-hover:text-white/[0.03] transition-colors pointer-events-none select-none">
                  {`0${idx + 1}`}
                </div>

                <div className="space-y-6 relative z-10">
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${step.accent}`}>
                    <Icon size={16} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[9px] font-mono text-gray-600 block tracking-widest uppercase">
                      {step.name}
                    </span>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-white leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
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
