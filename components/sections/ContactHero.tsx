'use client'

import { Terminal } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden grid-bg pt-24 sm:pt-28" aria-label="Contact MeghRoop Hero">
      {/* Cinematic animated background glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[380px] h-[380px] bg-cyan-500/[0.04] rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[480px] h-[480px] bg-purple-500/[0.04] rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center flex flex-col items-center">
        {/* Status Pill */}
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs text-gray-400 mb-6 font-mono border border-white/[0.06] hover:border-white/10 transition-colors animate-fade-up"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          CONNECTION LINK: ENCRYPTED
          <span className="text-gray-600">{"//"}</span>
          <span className="text-cyan-400">meghroop-contact-gateway-v4.0</span>
        </div>

        {/* Title */}
        <h1
          className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 max-w-5xl animate-fade-up"
          style={{ animationDelay: '100ms' }}
        >
          Good systems usually start <br className="hidden sm:inline" />
          <span className="gradient-text">with a conversation.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8 animate-fade-up"
          style={{ animationDelay: '200ms' }}
        >
          Tell us what you&apos;re building, what needs optimization, or just what&apos;s on your mind. We read every message. Even the unnecessarily long ones.
        </p>

        {/* Gateway Telemetry Stats */}
        <div
          className="w-full max-w-2xl rounded-xl border border-white/[0.08] bg-[#050505]/75 p-4 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.12] transition-colors duration-300 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[10px] text-gray-500">
            <span className="flex items-center gap-1.5 text-cyan-400/80">
              <Terminal size={10} />
              sh initiate-secure-handshake.sh
            </span>
            <div className="flex gap-4">
              <span>Latency: 48ms</span>
              <span>Ciphers: TLS_AES_256_GCM</span>
              <span className="hidden sm:inline">Server: edge-dist-asia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
