'use client'

import { motion } from 'framer-motion'
import {
  Cpu,
  Database,
  Network,
  Terminal,
  Search,
  Share2,
  Compass,
  Zap,
  Activity,
  Workflow,
  RefreshCw,
  AlertTriangle,
  Server,
  Globe
} from 'lucide-react'

interface CodeBuiltVisualProps {
  category: string
  slug: string
}

export default function CodeBuiltVisual({ category, slug }: CodeBuiltVisualProps) {
  // Generate a unique ID prefix for SVG gradients/patterns to avoid collisions
  const uid = slug || 'visual'

  return (
    <div className="relative w-full h-full min-h-[inherit] overflow-hidden bg-[#050505] flex items-center justify-center select-none">
      {/* Background dynamic grids */}
      <svg
        className="absolute inset-0 w-full h-full stroke-white/[0.015] [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`grid-${uid}`} width="24" height="24" patternUnits="userSpaceOnUse" x="-1" y="-1">
            <path d="M.5 24V.5H24" fill="none" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${uid})`} />
      </svg>

      {/* Render visual systems dynamically by category */}
      {category === 'AI Infrastructure' && <AIInfrastructureVisual />}
      {category === 'AI Search Optimization' && <AISearchVisual />}
      {category === 'Web Engineering' && <WebEngineeringVisual />}
      {category === 'Automation' && <AutomationVisual uid={uid} />}

      {/* Subtle overlay overlay textures */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none opacity-50" />
      <div className="absolute inset-0 border border-white/[0.06] rounded-2xl pointer-events-none" />
    </div>
  )
}

/* ==========================================
   1. AI Infrastructure (MCP Server Models)
   ========================================== */
function AIInfrastructureVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8">
      {/* Immersive glow background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-indigo-500/10 blur-[100px] pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="flex justify-between items-center z-10 text-[10px] sm:text-xs font-mono text-purple-400/80">
        <span className="flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
          SYSTEM_STATE_OK // MCP_CLIENT_CONNECT
        </span>
        <span>LATENCY: 2.1ms</span>
      </div>

      {/* Center diagram */}
      <div className="flex-1 flex items-center justify-center relative w-full h-full max-h-[220px] sm:max-h-[300px]">
        {/* Animated connection lines */}
        <div className="absolute w-[70%] sm:w-[60%] h-0.5 border-t border-dashed border-white/[0.15] flex justify-between items-center z-0">
          <motion.div
            animate={{ left: ['0%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="absolute w-2 h-2 rounded-full bg-purple-400 blur-sm -translate-y-1/2"
          />
          <motion.div
            animate={{ right: ['0%', '100%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute w-2 h-2 rounded-full bg-blue-400 blur-sm -translate-y-1/2"
          />
        </div>

        {/* Nodes */}
        <div className="w-full flex justify-between items-center z-10 px-4 sm:px-12">
          {/* Node 1: LLM App Host */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border border-white/[0.1] bg-black/60 backdrop-blur-md flex items-center justify-center text-gray-400 group-hover:text-purple-400 group-hover:border-purple-500/50 shadow-lg shadow-purple-500/5 transition-all duration-300">
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-[9px] sm:text-[11px] font-mono text-gray-500 group-hover:text-white transition-colors uppercase font-medium">LLM_APP</span>
          </motion.div>

          {/* Node 2: MCP Gateway */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-3xl border border-purple-500/30 bg-purple-950/20 backdrop-blur-md flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-400 shadow-2xl shadow-purple-500/20 transition-all duration-300">
              <Network className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-purple-300 font-semibold tracking-wide uppercase">MCP_GATEWAY</span>
          </motion.div>

          {/* Node 3: Custom Database Host */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border border-white/[0.1] bg-black/60 backdrop-blur-md flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:border-blue-500/50 shadow-lg shadow-blue-500/5 transition-all duration-300">
              <Database className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-[9px] sm:text-[11px] font-mono text-gray-500 group-hover:text-white transition-colors uppercase font-medium">SECURE_DB</span>
          </motion.div>
        </div>
      </div>

      {/* Terminal stdout overlay */}
      <div className="z-10 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 font-mono text-[9px] sm:text-xs text-gray-400 flex items-center justify-between">
        <span className="flex items-center gap-2 text-gray-300">
          <Terminal size={12} className="text-purple-400" />
          <span className="text-purple-400/80">root@meghroop:~$</span> mcp-server --stdio --connect
        </span>
        <span className="text-emerald-400 font-semibold">[STDIO OK]</span>
      </div>
    </div>
  )
}

/* ==========================================
   2. AI Search Optimization (GEO citations)
   ========================================== */
function AISearchVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8">
      {/* Cyan & emerald gradient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-emerald-500/5 blur-[100px] pointer-events-none" />

      {/* Header index */}
      <div className="flex justify-between items-center z-10 text-[10px] sm:text-xs font-mono text-cyan-400/80">
        <span className="flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          GENERATIVE_ENGINE_INDEXING
        </span>
        <span>CITATIONS: ACTIVE</span>
      </div>

      {/* Search mock box & orbital nodes */}
      <div className="flex-1 flex flex-col items-center justify-center relative w-full h-full py-4 z-10">
        {/* Mock Search input box */}
        <motion.div
          whileHover={{ y: -2 }}
          className="w-[85%] sm:w-[70%] bg-white/[0.02] border border-white/[0.08] rounded-2xl p-3 sm:p-4 backdrop-blur-md shadow-xl flex items-center gap-3 relative mb-6"
        >
          <Search size={14} className="text-cyan-400 flex-shrink-0" />
          <div className="text-[10px] sm:text-xs font-mono text-gray-400 flex-1 truncate">
            &quot;Who builds grounded MCP AI architectures?&quot;
          </div>
          <span className="w-1.5 h-3.5 bg-cyan-400 rounded-sm animate-ping" />
        </motion.div>

        {/* Orbiting cites container */}
        <div className="w-full max-w-[280px] sm:max-w-[400px] flex justify-around items-center gap-3">
          {/* Cite card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-xl p-2.5 flex flex-col gap-1 items-center hover:border-cyan-500/30 transition-all duration-300"
          >
            <div className="w-6 h-6 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Share2 size={12} />
            </div>
            <span className="text-[8px] sm:text-[10px] font-mono text-gray-400">meghroop.tech</span>
            <span className="text-[9px] sm:text-[11px] font-mono font-bold text-white uppercase tracking-wider">CITED #1</span>
          </motion.div>

          {/* Cite card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-xl p-2.5 flex flex-col gap-1 items-center hover:border-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/5"
          >
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300">
              <Compass size={12} />
            </div>
            <span className="text-[8px] sm:text-[10px] font-mono text-cyan-300/80">GEO Score</span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-white uppercase tracking-wider">98.4%</span>
          </motion.div>

          {/* Cite card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-1 bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-xl p-2.5 flex flex-col gap-1 items-center hover:border-emerald-500/30 transition-all duration-300"
          >
            <div className="w-6 h-6 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Globe size={12} />
            </div>
            <span className="text-[8px] sm:text-[10px] font-mono text-gray-400">AI search</span>
            <span className="text-[9px] sm:text-[11px] font-mono font-bold text-white uppercase tracking-wider">INDEXED</span>
          </motion.div>
        </div>
      </div>

      {/* Bot tag */}
      <div className="z-10 flex justify-between items-center text-[8px] sm:text-[10px] font-mono text-gray-500 border-t border-white/[0.06] pt-3">
        <span>AGENT_SPIDER_LIST: [GPTBot, ClaudeBot, PerplexityBot]</span>
        <span className="text-cyan-400">SCAN: COMPLETE</span>
      </div>
    </div>
  )
}

/* ==========================================
   3. Web Engineering (Headless Storefronts)
   ========================================== */
function WebEngineeringVisual() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8">
      {/* Cyber pink and green glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-pink-500/5 blur-[100px] pointer-events-none" />

      {/* Top index */}
      <div className="flex justify-between items-center z-10 text-[10px] sm:text-xs font-mono text-emerald-400/80">
        <span className="flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          EDGE_LATENCY_METRIC
        </span>
        <span className="text-pink-400/80">LIGHTHOUSE: 100/100</span>
      </div>

      {/* Telemetry charts & skeleton card */}
      <div className="flex-1 flex gap-4 items-center justify-center relative w-full h-full py-4 z-10">
        {/* Speed Chart */}
        <div className="flex-1 bg-white/[0.01] border border-white/[0.06] rounded-xl p-3 h-full max-h-[140px] flex flex-col justify-between backdrop-blur-md">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[8px] sm:text-[10px] font-mono text-gray-500">SPEED TELEMETRY</span>
            <span className="text-[10px] sm:text-xs font-mono font-bold text-emerald-400">280ms FCP</span>
          </div>
          {/* Mini Graph Grid SVG */}
          <div className="flex-1 w-full h-10 relative overflow-hidden flex items-end">
            <svg className="w-full h-full stroke-emerald-500/25 fill-none" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path d="M 0 30 Q 25 15 50 10 T 100 2" strokeWidth="1.5" />
              <motion.path
                d="M 0 30 Q 25 15 50 10 T 100 2"
                strokeWidth="1.5"
                stroke="#10b981"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
              />
            </svg>
          </div>
          <div className="text-[8px] sm:text-[9px] font-mono text-gray-500 mt-1 flex justify-between">
            <span>STATIC PRE-REND</span>
            <span>SSR_REVAL_OK</span>
          </div>
        </div>

        {/* E-commerce Skeleton Card */}
        <div className="w-[45%] bg-white/[0.01] border border-white/[0.06] rounded-xl p-3 h-full max-h-[140px] flex flex-col justify-between backdrop-blur-md">
          {/* Skeleton visual */}
          <div className="w-full h-12 bg-white/[0.02] border border-white/[0.04] rounded-lg relative overflow-hidden flex items-center justify-center">
            <Zap size={14} className="text-pink-400/40 animate-pulse" />
            <div className="absolute top-1 right-1 px-1 py-0.5 rounded bg-pink-500/10 text-pink-400 text-[6px] font-mono">EDGE</div>
          </div>
          {/* Skeleton detail bars */}
          <div className="flex flex-col gap-1.5 mt-2">
            <div className="h-2 w-[80%] bg-white/[0.05] rounded-sm" />
            <div className="h-1.5 w-[50%] bg-white/[0.03] rounded-sm" />
          </div>
          {/* Skeleton price tag */}
          <div className="flex justify-between items-center mt-2">
            <div className="h-3 w-10 bg-emerald-500/15 rounded-sm" />
            <div className="w-4 h-4 rounded-full bg-white/[0.04] flex items-center justify-center">
              <Activity size={8} className="text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom speed badge */}
      <div className="z-10 bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-2 font-mono text-[9px] sm:text-xs text-emerald-300 flex items-center gap-2">
        <Activity size={12} className="text-emerald-400" />
        <span>Sub-400ms cached static delivery accomplished worldwide</span>
      </div>
    </div>
  )
}

/* ==========================================
   4. Automation (n8n Workflow pipelines)
   ========================================== */
function AutomationVisual({ uid }: { uid: string }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8">
      {/* Orange & amber warm gradient glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-red-500/5 blur-[100px] pointer-events-none" />

      {/* Top telemetry bar */}
      <div className="flex justify-between items-center z-10 text-[10px] sm:text-xs font-mono text-amber-500/80">
        <span className="flex items-center gap-1.5 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          SELF_HEALING_ACTIVE
        </span>
        <span className="text-red-400/80">RETRIES: 3/3</span>
      </div>

      {/* Flow diagrams */}
      <div className="flex-1 flex items-center justify-center relative w-full h-full max-h-[220px] sm:max-h-[300px]">
        {/* Main curved connection path */}
        <svg className="absolute w-[80%] h-24 stroke-white/[0.08] fill-none stroke-dasharray-[4,4] z-0" viewBox="0 0 200 60">
          <path id={`path-${uid}`} d="M 10 30 Q 50 5 100 30 T 190 30" />
          {/* Animated dot on path */}
          <path d="M 10 30 Q 50 5 100 30 T 190 30" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="5,185" strokeDashoffset="0">
            <animate attributeName="stroke-dashoffset" values="190;0" dur="2.5s" repeatCount="indefinite" />
          </path>
        </svg>

        {/* Nodes */}
        <div className="w-full flex justify-between items-center z-10 px-2 sm:px-6">
          {/* Step 1: Trigger */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-1.5 group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-white/[0.08] bg-black/60 backdrop-blur-md flex items-center justify-center text-gray-400 group-hover:text-amber-400 group-hover:border-amber-500/40 shadow-lg transition-all duration-300">
              <Workflow className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <span className="text-[8px] sm:text-[10px] font-mono text-gray-500 group-hover:text-white uppercase">TRIGGER</span>
          </motion.div>

          {/* Step 2: Failure evaluator */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1.5 group cursor-pointer"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl border border-red-500/30 bg-red-950/10 backdrop-blur-md flex flex-col items-center justify-center text-red-400 shadow-xl shadow-red-500/5 transition-all duration-300 relative">
              <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8" />
              {/* Alert pulse */}
              <div className="absolute inset-0 rounded-2xl border border-red-400 animate-ping opacity-15 pointer-events-none" />
            </div>
            <span className="text-[9px] sm:text-[11px] font-mono text-red-400 font-bold uppercase">ERROR_CATCH</span>
          </motion.div>

          {/* Step 3: Auto recovery / retry */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-1.5 group cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl border border-white/[0.08] bg-black/60 backdrop-blur-md flex items-center justify-center text-gray-400 group-hover:text-emerald-400 group-hover:border-emerald-500/40 shadow-lg transition-all duration-300">
              <RefreshCw className="w-5 h-5 sm:w-7 sm:h-7 animate-spin [animation-duration:8s]" />
            </div>
            <span className="text-[8px] sm:text-[10px] font-mono text-gray-500 group-hover:text-white uppercase">RECOVERY</span>
          </motion.div>
        </div>
      </div>

      {/* Terminal logs overlay */}
      <div className="z-10 bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 font-mono text-[9px] sm:text-xs text-gray-400 flex items-center justify-between">
        <span className="flex items-center gap-2 text-gray-300">
          <Server size={12} className="text-amber-500" />
          <span className="text-amber-500/80">n8n_agent:~$</span> run --workflow self-healing
        </span>
        <span className="text-amber-400 font-semibold">[FAILOVER MATCH]</span>
      </div>
    </div>
  )
}
