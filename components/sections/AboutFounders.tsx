'use client'

import { motion } from 'framer-motion'
import { Terminal, Shield } from 'lucide-react'

export default function AboutFounders() {
  return (
    <section className="py-20 sm:py-24 relative overflow-hidden bg-white/[0.01] border-b border-white/[0.04]" aria-label="Founders of MeghRoop">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            No account managers. Just us.
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug">
            The Two-Person Engine<br />
            <span className="gradient-text">Doing the actual work.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            We don&apos;t pass your project down a chain of interns. We design the layout, write the database queries, wire the automations, and talk to you directly. Here is who you are actually dealing with.
          </p>
        </motion.div>

        {/* Founders Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Meghansh */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-3xl overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-65" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-3xl border border-white/[0.08]" />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[360px] gap-6">
              <div>
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                    <Terminal size={18} />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 font-semibold px-2 py-0.5 rounded border border-purple-500/20 bg-purple-500/5">
                    Code & Systems
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">Meghansh</h3>
                <p className="text-xs text-gray-500 mt-1 font-mono">Founder &amp; Core Systems Architect</p>
                
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-5">
                  Spends way too much time staring at database schemas, configures self-healing n8n workflow nodes with exponential backoffs, and writes Python scripts that solve problems you didn&apos;t know you had. Handles the core systems engineering and basically runs everything else.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                {['AI Engineering', 'n8n Workflows', 'Backend Systems', 'Python', 'Supabase'].map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-gray-400">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Roop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.01 }}
            className="relative rounded-3xl overflow-hidden group cursor-default"
          >
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-65" />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-3xl border border-white/[0.08]" />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[360px] gap-6">
              <div>
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                    <Shield size={18} />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 font-semibold px-2 py-0.5 rounded border border-cyan-500/20 bg-cyan-500/5">
                    Growth & Ops
                  </span>
                </div>
                <h3 className="font-heading font-bold text-2xl text-white">Roop</h3>
                <p className="text-xs text-gray-500 mt-1 font-mono">Co-Founder &amp; Growth Lead</p>
                
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mt-5">
                  Ranks pages on search engines with black-magic SEO setups, runs Meta ads campaigns that actually convert visitors into paying clients, and wires up automated loops so we can occasionally sleep. Keeps our projects on rails and stops Meghansh from coding 24/7.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.04]">
                {['Project Management', 'SEO Optimization', 'Meta Ads', 'n8n Workflows', 'Client Relations'].map((tag) => (
                  <span key={tag} className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-cyan-500/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
