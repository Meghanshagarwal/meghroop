'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XCircle, CheckCircle2 } from 'lucide-react'

export default function SystemsThinking() {
  const [activeTab, setActiveTab] = useState<'standard' | 'grounded'>('grounded')

  return (
    <section className="py-20 sm:py-24 md:py-32 relative overflow-hidden" aria-label="Systems Thinking Philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              Invisible Architecture
            </div>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-snug">
              Good systems <br />
              <span className="gradient-text-purple">quietly reduce friction.</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Most digital solutions attempt to solve complexity by adding more pages, forms, and buttons. True design is reduction. We build interfaces that feel inevitable and backend pipelines that predict user intention.
            </p>
            <div className="space-y-4 pt-4 font-mono text-xs text-gray-500">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Performance is a core UI asset</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Eliminate unnecessary database handshakes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Synchronous automation failover protection</span>
              </div>
            </div>
          </div>

          {/* Interactive latency simulator */}
          <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#050505] p-6 sm:p-8 relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/[0.03] to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-6 mb-6">
              <h3 className="font-heading font-bold text-lg text-white">Latency & Friction Audit</h3>
              
              {/* Tabs */}
              <div className="flex rounded-lg bg-[#0a0a0a] p-1 border border-white/[0.06]">
                <button
                  onClick={() => setActiveTab('standard')}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${activeTab === 'standard' ? 'bg-red-500/10 text-red-400 font-semibold' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Standard UI
                </button>
                <button
                  onClick={() => setActiveTab('grounded')}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 ${activeTab === 'grounded' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  Grounded Engine
                </button>
              </div>
            </div>

            {/* Sim Content */}
            <div className="min-h-[220px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeTab === 'standard' ? (
                  <motion.div
                    key="standard"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/[0.02] border border-red-500/10 font-mono text-xs text-red-400">
                      <XCircle size={16} />
                      <div>
                        <strong>User Path:</strong> Multi-page Redirects (Liquid Loop)
                        <div className="text-[10px] text-gray-500 mt-0.5">{"Loads checkout session -> prompts credentials -> executes redirect loop."}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 font-mono text-[11px] text-gray-400">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-gray-500">Query Handshakes</span>
                        <div className="text-sm font-bold text-white mt-1">14 loops</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-gray-500">Total Latency</span>
                        <div className="text-sm font-bold text-red-400 mt-1">8,400ms</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="grounded"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-cyan-500/[0.02] border border-cyan-500/10 font-mono text-xs text-cyan-400">
                      <CheckCircle2 size={16} />
                      <div>
                        <strong>User Path:</strong> Custom Edge Middleware (Bypass Handshake)
                        <div className="text-[10px] text-gray-500 mt-0.5">{"Executes inline schema check -> renders instant cached static DOM bundle."}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 font-mono text-[11px] text-gray-400">
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-gray-500">Query Handshakes</span>
                        <div className="text-sm font-bold text-white mt-1">1 direct query</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-gray-500">Total Latency</span>
                        <div className="text-sm font-bold text-cyan-400 mt-1">120ms</div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Friction Indicator Graphic */}
              <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-gray-500">
                <span>System friction index:</span>
                <span className={`font-bold transition-colors duration-300 ${activeTab === 'standard' ? 'text-red-400' : 'text-cyan-400'}`}>
                  {activeTab === 'standard' ? 'HIGH FRICTION' : 'ZERO CONTEXT FRICTION'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
