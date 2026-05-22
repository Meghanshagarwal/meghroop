'use client'

import { motion } from 'framer-motion'
import { Terminal, ShieldAlert, Cpu } from 'lucide-react'

export default function AboutWho() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]" aria-label="Who We Are">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Storytelling Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Direct Engineering
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug">
              Bespoke digital systems, <br />
              <span className="gradient-text-purple">built with clear intention.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We started MeghRoop because we got tired of generic agency loops. You talk to a sales rep, who handsoff to an account manager, who handsoff to a junior builder, and by the time code gets shipped, all context is lost.
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We design and code everything ourselves. We sit at the intersection of modern frontends and complex backends. By merging high-performance design with useful AI systems, we eliminate middlemen and build software that works quietly in the background.
            </p>
          </div>

          {/* Cards Column */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Direct Access */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl border border-white/[0.06] bg-[#050505]/60 hover:border-white/[0.1] transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-center justify-center mb-4 text-purple-400">
                <Terminal size={16} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">01 // No Middlemen</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                You work directly with the creators. Every technical decision, feature query, or pivot is resolved instantly without meeting delays.
              </p>
            </motion.div>

            {/* Card 2: Intention */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-5 rounded-2xl border border-white/[0.06] bg-[#050505]/60 hover:border-white/[0.1] transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500/5 border border-cyan-500/10 flex items-center justify-center mb-4 text-cyan-400">
                <Cpu size={16} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">02 // Useful AI First</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                We do not build generic prompts. We build custom-grounded model nodes and workflow failovers designed to automate real-world operations.
              </p>
            </motion.div>

            {/* Card 3: Performance */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-5 rounded-2xl border border-white/[0.06] bg-[#050505]/60 hover:border-white/[0.1] transition-colors sm:col-span-2"
            >
              <div className="w-8 h-8 rounded-xl bg-rose-500/5 border border-rose-500/10 flex items-center justify-center mb-4 text-rose-400">
                <ShieldAlert size={16} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">03 // Zero context dilution</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Because we design the UI, architect the database schema, and configure the server gateways, your project retains absolute cohesion. No split teams. No lost ideas. Just pure, targeted execution.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
