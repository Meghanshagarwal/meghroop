'use client'

import { motion } from 'framer-motion'
import {
  Cpu, Database, Network, Shield, Zap, Eye,
} from 'lucide-react'

const mcpFeatures = [
  {
    icon: Cpu,
    title: 'Model Context Protocol',
    description:
      'The standard that lets AI access your real data. Not sandboxed hallucinations. Actual databases, actual CRMs, actual tools.',
  },
  {
    icon: Database,
    title: 'Vector Database Integration',
    description: 'Semantic search and long-term memory. AI remembers context across sessions. Learning is possible.',
  },
  {
    icon: Network,
    title: 'Connected Systems',
    description: 'APIs speak to each other. Context flows. Data syncs automatically. No manual pipeline management.',
  },
  {
    icon: Shield,
    title: 'Secure Context Access',
    description: 'Fine-grained permissions. Rate limiting. Audit logs. AI gets what it needs. Nothing it doesn&apos;t.',
  },
  {
    icon: Zap,
    title: 'Real-time Awareness',
    description: 'Agents know your current state. Inventory levels. Customer info. Market data. Right now.',
  },
  {
    icon: Eye,
    title: 'Observable Systems',
    description: 'See what agents see. Understand why decisions were made. Audit trails. Full transparency.',
  },
]

export default function MCPContextInfrastructure() {
  return (
    <section
      id="mcp-infrastructure"
      className="section-padding"
      aria-label="MCP servers and context infrastructure for AI systems"
    >
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
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            The infrastructure layer
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Context systems.{' '}
            <span className="gradient-text">Real knowledge.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            MCP servers connect AI to your actual data. Vector databases maintain semantic memory. Intelligent infrastructure
            that makes AI genuinely useful instead of just convincingly wrong.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.07 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12"
        >
          {mcpFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
                className="relative rounded-2xl border border-white/[0.08] hover:border-white/[0.12] overflow-hidden group cursor-default transition-all duration-300"
              >
                <div className="absolute inset-0 bg-[#0a0a0a]" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors duration-300">
                      <Icon size={22} className="text-blue-400" />
                    </div>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>

                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Deep dive section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading font-bold text-2xl text-white mb-4">What MCP actually does</h3>
            <div className="space-y-4">
              <p className="text-gray-400 leading-relaxed">
                Most AI systems hallucinate. They make up information because they don&apos;t have access to your actual
                systems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                MCP (Model Context Protocol) is the bridge. It exposes your databases, APIs, and tools to AI in a structured,
                safe way. Now the AI{' '}
                <span className="text-white font-semibold">knows</span> your inventory, your customers,
                your workflows.
              </p>
              <p className="text-gray-400 leading-relaxed">
                We build custom MCP servers that translate your data into intelligence the AI can actually use. The difference
                between an AI that guesses and one that knows.
              </p>
            </div>
          </div>

          {/* Right side - Code-like visualization */}
          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden group">
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 p-6 font-mono text-xs text-gray-400 space-y-2 h-full flex flex-col justify-center">
              <div className="text-purple-400">// MCP Server connects AI to your systems</div>
              <div className="pl-4">
                <div>const mcp = {'{{'}</div>
                <div className="pl-4">
                  <div className="text-blue-400">tools:</div>
                  <div className="pl-4">
                    <div>- fetchCustomer(id)</div>
                    <div>- queryInventory()</div>
                    <div>- updateCRM(data)</div>
                  </div>
                </div>
                <div className="pl-4">
                  <div className="text-blue-400">context:</div>
                  <div className="pl-4">
                    <div>- vectorDB: productKnowledge</div>
                    <div>- cache: recentDecisions</div>
                    <div>- memory: sessionHistory</div>
                  </div>
                </div>
                <div>{{'}}'}</div>
              </div>
              <div className="text-purple-400 mt-2">// AI now reasons from real data, not imagination</div>
            </div>

            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/[0.02] to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </motion.div>

        {/* Use cases */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl border border-white/[0.08] bg-white/[0.02]"
        >
          <h3 className="font-heading font-bold text-xl text-white mb-6">When you need this</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'AI Assistants', desc: 'Agents that know your customer base, pricing, inventory — not guessing.' },
              { title: 'Support Automation', desc: 'Answering support questions with real customer data and docs.' },
              { title: 'Sales Acceleration', desc: 'AI that knows deal stages, customer history, pipeline context.' },
              { title: 'Operational Agents', desc: 'Internal automation that understands your process, your tools, your state.' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-3">
                <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0 mt-1.5" />
                <div>
                  <div className="text-sm font-semibold text-white">{title}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Semantic section for crawlers */}
        <p className="sr-only">
          MCP (Model Context Protocol) is the standard for connecting AI models to real-world data and tools. We build custom
          MCP servers that expose your databases, CRMs, APIs, and internal systems to AI in a structured way. This includes
          vector database integration for semantic search and memory, real-time data awareness, security and access control,
          and observable AI systems. MCP servers enable AI agents to access actual data instead of hallucinating, making them
          suitable for customer support, sales acceleration, operations automation, and internal business processes.
        </p>
      </div>
    </section>
  )
}
