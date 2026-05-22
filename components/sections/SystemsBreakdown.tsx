'use client'

import { motion } from 'framer-motion'
import { Layers } from 'lucide-react'

const breakdowns = [
  {
    title: 'The Grounded AI Memory Cycle',
    tag: 'SYSTEM 01 // CONTEXT ARCHITECTURE',
    challenge: 'A global client wanted an AI assistant to handle internal inventory. Raw LLM calls hallucinated parameters, forgot customer tiers, and was completely blind to current database rows.',
    solution: 'We engineered a custom Model Context Protocol (MCP) server layer. It intercepts model commands, performs secure schema checks, retrieves semantic context from databases, and serves a grounded, zero-hallucination prompt envelope back to the model.',
    outcome: '100% accurate system queries, zero context amnesia across operations, and database updates running inside secure sandbox envelopes.',
    steps: [
      { name: 'Model Intent Query', desc: 'LLM flags a command requiring tool retrieval.' },
      { name: 'MCP Security Check', desc: 'Gateway inspects schema permissions and scopes.' },
      { name: 'Grounded Data Retrive', desc: 'Active records are parsed into precise semantic arrays.' },
      { name: 'Model Execution Output', desc: 'Model executes with complete grounding.' },
    ],
    accent: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
    color: 'from-cyan-500/10 to-transparent',
    glow: 'rgba(6, 182, 212, 0.1)',
  },
  {
    title: 'Besoke Shopify Headless Engine',
    tag: 'SYSTEM 02 // E-COMMERCE CORE',
    challenge: 'A high-traffic fashion brand struggled with standard Shopify liquid latency. Heavy assets, slow DOM updates, and generic layouts lowered conversion rates to 1.1%.',
    solution: 'We engineered a custom Next.js storefront connected via optimized GraphQL queries directly to the Shopify Storefront API. Built on static pre-rendering, custom checkout APIs, and high frame-rate interactive animations.',
    outcome: 'conversion rates surged to 3.8%, Lighthouse performance score achieved 99/100, and first input delay collapsed under 50ms.',
    steps: [
      { name: 'GraphQL Collection Query', desc: 'Storefront pre-fetches products directly on build.' },
      { name: 'Framer Canvas Mount', desc: 'Components render with custom hardware-accelerated animations.' },
      { name: 'Checkout Proxy API', desc: 'Stripe is proxy-charged to prevent standard redirect lag.' },
      { name: 'Live Edge Cache', desc: 'Entire page is edge-distributed worldwide.' },
    ],
    accent: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
    color: 'from-purple-500/10 to-transparent',
    glow: 'rgba(167, 139, 250, 0.1)',
  },
]

export default function SystemsBreakdown() {
  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white/[0.01] border-y border-white/[0.04]" aria-label="System Breakdowns">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            Engineering Case Stories
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
            Under the hood: how we <br className="hidden sm:inline" />
            <span className="gradient-text">solve systemic challenges.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Real engineering storytelling. We break down the challenge, outline the custom architecture, and measure the real-world operational results.
          </p>
        </div>

        {/* Breakdown Blocks */}
        <div className="space-y-20 sm:space-y-28">
          {breakdowns.map((b) => (
            <div key={b.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
              <div className="lg:col-span-6 space-y-6">
                <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-mono tracking-wider ${b.accent}`}>
                  {b.tag}
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white">{b.title}</h3>
                
                <div className="space-y-4 pt-4 text-sm leading-relaxed text-gray-400">
                  <p>
                    <strong className="text-white">The Challenge:</strong> {b.challenge}
                  </p>
                  <p>
                    <strong className="text-white">Our Solution:</strong> {b.solution}
                  </p>
                  <p>
                    <strong className="text-white">Operational Outcome:</strong> {b.outcome}
                  </p>
                </div>
              </div>

              {/* Visual Pipeline Representation */}
              <div className="lg:col-span-6 rounded-2xl border border-white/[0.08] bg-[#050505] p-6 sm:p-8 relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${b.color} opacity-20 pointer-events-none`} />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: `inset 0 0 40px ${b.glow}` }} />

                <h4 className="font-heading font-bold text-lg text-white mb-6 flex items-center gap-2">
                  <Layers size={16} className="text-gray-400" />
                  System Pipeline Dataflow
                </h4>

                <div className="space-y-4 relative">
                  {/* Vertical connector line */}
                  <div className="absolute left-[13px] top-4 bottom-4 w-[1px] bg-white/[0.08] group-hover:bg-white/[0.15] transition-colors" />

                  {b.steps.map((step, sIdx) => (
                    <motion.div
                      key={step.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: sIdx * 0.1 }}
                      className="flex items-start gap-4 relative z-10"
                    >
                      <div className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-white/[0.08] group-hover:border-white/[0.15] flex items-center justify-center text-[10px] font-mono text-gray-400 flex-shrink-0">
                        {String(sIdx + 1).padStart(2, '0')}
                      </div>
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-0.5">{step.name}</h5>
                        <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
