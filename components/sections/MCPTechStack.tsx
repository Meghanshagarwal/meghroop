'use client'

import { motion } from 'framer-motion'
import { Database, Layers, Cpu } from 'lucide-react'

const techs = [
  {
    category: 'Core Protocols',
    items: [
      { name: 'Model Context Protocol', desc: 'Secure host-client data standard' },
      { name: 'Node.js & TypeScript', desc: 'Typed, performant server runtimes' },
      { name: 'OpenAI & Claude APIs', desc: 'Reasoning and system orchestrators' },
    ],
    icon: Cpu,
    color: 'text-cyan-400',
    border: 'border-cyan-500/20',
  },
  {
    category: 'Memory & Storage',
    items: [
      { name: 'Supabase & PostgreSQL', desc: 'Relational database anchoring' },
      { name: 'Vector DBs (Pinecone/Qdrant)', desc: 'Semantic cache & context lookups' },
      { name: 'Redis Cache', desc: 'Real-time session memory queues' },
    ],
    icon: Database,
    color: 'text-purple-400',
    border: 'border-purple-500/20',
  },
  {
    category: 'Orchestration Layers',
    items: [
      { name: 'n8n Workflows', desc: 'Deterministic visual automation piping' },
      { name: 'LangChain & LlamaIndex', desc: 'Memory RAG parsing orchestrators' },
      { name: 'Docker & Kubernetes', desc: 'Scale-ready container sandboxes' },
    ],
    icon: Layers,
    color: 'text-blue-400',
    border: 'border-blue-500/20',
  },
]

export default function MCPTechStack() {
  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden" aria-label="Technology Stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Integrations
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            The modern AI system{' ... '}
            <span className="gradient-text">stack.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A curated stack built using highly resilient open protocols and performant execution engines.
          </p>
        </motion.div>

        {/* Tech Stack Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {techs.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-2xl border ${category.border} bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 cursor-default`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                      <Icon size={18} className={category.color} />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.items.map((tech) => (
                      <div key={tech.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] group-hover:bg-white/[0.03] transition-colors">
                        <div className="text-sm font-semibold text-white mb-0.5">{tech.name}</div>
                        <div className="text-xs text-gray-500 leading-relaxed">{tech.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
