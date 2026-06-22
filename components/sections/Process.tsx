'use client'

import { motion, type Variants } from 'framer-motion'

const steps = [
  { n: '01', title: 'Discover', desc: 'We learn your business, market, and the number you actually need to move.' },
  { n: '02', title: 'Strategize', desc: 'A clear plan across growth, AI, and product — prioritised by impact.' },
  { n: '03', title: 'Build', desc: 'Software, sites, funnels, and creative — engineered properly, shipped fast.' },
  { n: '04', title: 'Automate', desc: 'AI agents and workflows take the repetitive work off your plate.' },
  { n: '05', title: 'Scale', desc: 'Optimise, compound, and grow — with you for the long run.' },
]

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const item: Variants = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

export default function Process() {
  return (
    <section id="process" className="section-padding" aria-label="How we work">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 sm:mb-20 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Process
          </div>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-[1.05] tracking-tight">
            A clear path{' '}
            <span className="gradient-text">from idea to scale.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
        >
          {steps.map((s) => (
            <motion.div key={s.n} variants={item} className="relative group">
              <div className="font-heading font-bold text-5xl text-white/[0.08] mb-4 transition-colors duration-300 group-hover:text-[#c084fc]/30">
                {s.n}
              </div>
              <div className="h-px w-full bg-white/[0.08] mb-5 relative overflow-hidden">
                <span className="absolute inset-y-0 left-0 w-0 bg-gradient-to-r from-[#c084fc] to-[#60a5fa] group-hover:w-full transition-all duration-500" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2">{s.title}</h3>
              <p className="text-sm text-white/[0.55] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
