'use client'

import { ArrowUpRight } from 'lucide-react'

export default function ContactCTA() {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden" aria-label="Frictionless Start">
      {/* Background radial glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/[0.02] rounded-t-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-purple-500/[0.01] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Visual Frame */}
        <div className="rounded-3xl border border-white/[0.06] bg-[#050505]/40 p-8 sm:p-12 md:p-16 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.1] transition-all duration-500">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent" />
          
          <div className="max-w-2xl mx-auto space-y-6">
            <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase block">
              {"//"} SYSTEM CLOSURE
            </span>
            
            <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight">
              Sometimes a conversation <br className="hidden sm:inline" />
              <span className="gradient-text">becomes a system.</span>
            </h2>
            
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              No sales funnels, no automated pitches, no lock-in clauses. Let us sit down and map out exactly what your systems need to scale quietly.
            </p>

            <div className="pt-6">
              <button
                onClick={() => {
                  document.getElementById('name')?.focus()
                  document.getElementById('name')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-black text-xs font-mono font-semibold uppercase tracking-widest inline-flex items-center gap-2 group transition-all duration-300 shadow-lg shadow-white/[0.02]"
              >
                Initiate Gateway Connection
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
