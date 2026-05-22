'use client'

import { motion } from 'framer-motion'
import { Database, Cpu, Zap, Shield } from 'lucide-react'

export default function MCPHowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden" aria-label="How Context Systems Work">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] animate-pulse" />
      </div>

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
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            System Architecture
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            The anatomy of a{' '}
            <span className="gradient-text">fully grounded AI workflow.</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            See how custom MCP layers bridge models, security envelopes, and internal microservices seamlessly to form intelligent cycles.
          </p>
        </motion.div>

        {/* Visual Architecture Representation */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-stretch">
          {/* Step 1: User & Interface (LLM Agent) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/5 to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 mb-6 font-mono">
                STAGE 01 // REQUEST
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Model Core Orchestration</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                An LLM, autonomous agent, or runtime workflow attempts to solve an advanced operational request. Instead of blindly trying to answer, it queries the available Model Context Protocol tools.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 font-mono text-[11px] text-gray-400">
              <Cpu size={16} className="text-blue-400 animate-pulse flex-shrink-0" />
              <div>
                <span className="text-blue-400">GET</span> /mcp/tools
                <div className="text-[9px] text-gray-500 mt-0.5">Awaiting active tool list...</div>
              </div>
            </div>
          </motion.div>

          {/* Connection Vector 1 */}
          <div className="hidden lg:flex items-center justify-center w-12 sm:w-16 h-full">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="origin-left w-full h-[2px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-violet-500/40 relative"
            >
              <div className="absolute -top-1 right-0 w-2.5 h-2.5 rounded-full bg-violet-400 animate-ping" />
            </motion.div>
          </div>

          {/* Step 2: The MCP Server Layer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 mb-6 font-mono">
                STAGE 02 // ACCESS & GATEWAY
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Custom MCP Interface</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Our custom MCP infrastructure intercept routes requests. It maps, caches, filters, and formats active schemas safely, passing real-time system states and security constraints downstream.
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 font-mono text-[10px] text-gray-400">
              <div className="flex items-center gap-2">
                <Shield size={12} className="text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">Identity Guard passed</span>
              </div>
              <div className="flex items-center gap-2">
                <Database size={12} className="text-purple-400 flex-shrink-0" />
                <span className="text-purple-400">Caching verified</span>
              </div>
            </div>
          </motion.div>

          {/* Connection Vector 2 */}
          <div className="hidden lg:flex items-center justify-center w-12 sm:w-16 h-full">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="origin-left w-full h-[2px] bg-gradient-to-r from-purple-500/40 via-cyan-500/40 to-emerald-500/40 relative"
            >
              <div className="absolute -top-1 right-0 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            </motion.div>
          </div>

          {/* Step 3: Grounded Truth & Execution */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 rounded-2xl border border-white/[0.08] bg-[#0a0a0a] p-6 sm:p-8 flex flex-col justify-between group hover:border-white/[0.12] transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/5 to-transparent rounded-bl-full pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 mb-6 font-mono">
                STAGE 03 // EXECUTION
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-3">Enterprise Systems</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">
                Connected microservices, CRMs, and internal relational DBs execute safe queries, injecting grounded logic right back.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-4 font-mono text-[11px] text-emerald-400">
              <Zap size={16} className="text-emerald-400 animate-bounce flex-shrink-0" />
              <div>
                <span className="font-bold">STATUS 200</span> OK
                <div className="text-[9px] text-emerald-500/60 mt-0.5">Response successfully emitted.</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Dynamic code visualization panel */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 rounded-2xl border border-white/[0.08] overflow-hidden group relative"
        >
          <div className="absolute inset-0 bg-[#070707]" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 p-6 sm:p-8 font-mono text-xs text-gray-400 space-y-4">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <span className="text-[10px] text-gray-500 ml-2">mcp-server-config.json</span>
              </div>
              <span className="text-[10px] text-cyan-400 animate-pulse">● Live Engine Running</span>
            </div>
            
            <div className="space-y-1 sm:space-y-2">
              <div><span className="text-purple-400">{`{`}</span></div>
              <div className="pl-4"><span className="text-cyan-400">&quot;mcpServers&quot;</span>: <span className="text-purple-400">{`{`}</span></div>
              <div className="pl-8"><span className="text-cyan-400">&quot;meghroop-context-bridge&quot;</span>: <span className="text-purple-400">{`{`}</span></div>
              <div className="pl-12"><span className="text-cyan-400">&quot;command&quot;</span>: <span className="text-emerald-400">&quot;node&quot;</span>,</div>
              <div className="pl-12"><span className="text-cyan-400">&quot;args&quot;</span>: <span className="text-purple-400">[</span><span className="text-emerald-400">&quot;./dist/index.js&quot;</span><span className="text-purple-400">]</span>,</div>
              <div className="pl-12"><span className="text-cyan-400">&quot;env&quot;</span>: <span className="text-purple-400">{`{`}</span></div>
              <div className="pl-16"><span className="text-cyan-400">&quot;DB_CONNECTION_LIMIT&quot;</span>: <span className="text-emerald-400">&quot;10&quot;</span>,</div>
              <div className="pl-16"><span className="text-cyan-400">&quot;GUARDRAILS_ACTIVE&quot;</span>: <span className="text-emerald-400">&quot;true&quot;</span></div>
              <div className="pl-12"><span className="text-purple-400">{`}`}</span></div>
              <div className="pl-8"><span className="text-purple-400">{`}`}</span></div>
              <div className="pl-4"><span className="text-purple-400">{`}`}</span></div>
              <div><span className="text-purple-400">{`}`}</span></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
