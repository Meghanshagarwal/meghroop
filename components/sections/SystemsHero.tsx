'use client'

import { Terminal } from 'lucide-react'

const stats = [
  { label: 'Core Systems Built', value: '18+' },
  { label: 'Avg System Uptime', value: '99.99%' },
  { label: 'Grounded Context Rate', value: '100%' },
  { label: 'Weekly API Executions', value: '2.4M' },
]

export default function SystemsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden grid-bg pt-24 sm:pt-28 md:pt-32" aria-label="Systems Showcase Intro">
      {/* Cinematic animated background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-purple-500/[0.04] rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/[0.04] rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Status Pill */}
        <div
          className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full glass text-xs text-gray-400 mb-6 font-mono border border-white/[0.06] hover:border-white/10 transition-colors animate-fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          SYSTEM STATUS: ONLINE
          <span className="text-gray-600">{"//"}</span>
          <span className="text-cyan-400">meghroop-systems-engine-v2.0</span>
        </div>

        {/* Title */}
        <h1
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 max-w-5xl animate-fade-up"
          style={{ animationDelay: '100ms' }}
        >
          Selected systems from the <br className="hidden sm:inline" />
          <span className="gradient-text">modern internet.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed mb-12 animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          We design interfaces that feel inevitable, workflows that govern complex operational logic, and secure AI systems built to quietly scale.
        </p>

        {/* Dynamic telemetry card */}
        <div
          className="w-full max-w-4xl rounded-2xl border border-white/[0.08] bg-[#050505]/80 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center divide-x divide-white/[0.06] text-left">
            {stats.map((s, idx) => (
              <div key={s.label} className={`${idx > 0 ? 'pl-4 sm:pl-6' : ''} ${idx === 2 ? 'col-span-1' : ''}`}>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-white tracking-tight flex items-baseline gap-1">
                  {s.value}
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase tracking-wider mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Terminal output overlay inside telemetry */}
          <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[9px] sm:text-[10px] text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-cyan-400/80">
                <Terminal size={10} />
                sh systems-telemetry.sh
              </span>
              <span className="hidden sm:inline">Active Caches: VectorDB, RedisMemory, schemaGrid</span>
            </div>
            <span className="animate-pulse">Active Connections: 94/100</span>
          </div>
        </div>
      </div>
    </section>
  )
}
