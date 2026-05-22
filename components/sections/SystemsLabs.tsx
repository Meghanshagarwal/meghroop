'use client'

import { motion } from 'framer-motion'
import { FlaskConical, Terminal } from 'lucide-react'

const experiments = [
  {
    title: 'sh-context-bridge',
    status: 'ACTIVE EXPERIMENT',
    description: 'A light terminal CLI script that instantly maps local directory trees and secure file tokens into formatted JSON arrays for LLM contexts.',
    tech: 'Rust / Bash CLI',
    code: 'npm i -g @meghroop/bridge',
  },
  {
    title: 'Vector Dynamic DOM Router',
    status: 'PROTOTYPE',
    description: 'Experimental React router component that dynamically renders raw tailwind visual elements straight from active AI system outputs on the fly.',
    tech: 'React / OpenAI API',
    code: '<AIGeneratedNode schema={activeLayout} />',
  },
  {
    title: 'Headless Storefront Proxy Cart',
    status: 'ALPHA EXPLORATION',
    description: 'A custom edge network cache proxy bridging custom storefront carts directly to Shopify checkout routes, slicing cart initialization latency to zero.',
    tech: 'Cloudflare Workers',
    code: 'fetch("https://cart.meghroop.workers.dev")',
  },
]

export default function SystemsLabs() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]" aria-label="Systems Labs & Concept Prototypes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <FlaskConical size={12} className="text-cyan-400 animate-pulse" />
            MeghRoop Labs
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Experimental explorations <br className="hidden sm:inline" />
            <span className="gradient-text-cyan">and future internet prototypes.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We don&apos;t just build client code; we actively build developer tooling, test edge runtime boundaries, and draft future system concepts.
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiments.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border border-white/[0.08] bg-[#050505] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 relative cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[9px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {exp.status}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{exp.tech}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Code Snippet */}
              <div className="rounded-xl border border-white/[0.05] bg-[#0a0a0a] p-3.5 font-mono text-[9px] text-gray-500 flex items-center gap-2 group-hover:border-white/10 transition-colors">
                <Terminal size={10} className="text-cyan-400/80" />
                <span className="truncate">{exp.code}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
