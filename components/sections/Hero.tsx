'use client'

import { ArrowRight, TrendingUp, Sparkles, Activity } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="MeghRoop — Software, AI and Growth Agency"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg pt-28 pb-20"
    >
      {/* Ambient glow — subtle, single-source, premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#c084fc]/[0.07] rounded-full blur-[160px]" />
        <div className="absolute top-1/3 right-0 w-[40vw] h-[40vh] bg-[#60a5fa]/[0.06] rounded-full blur-[160px] animate-float-slow" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left — message */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Software + AI + Growth Agency
          </div>

          <h1 className="font-heading font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-7 animate-fade-up [animation-delay:100ms]">
            Growth.
            <br />
            <span className="gradient-text-purple">AI.</span>
            <br />
            Software.
          </h1>

          <p className="text-lg sm:text-xl text-white/[0.65] max-w-xl leading-relaxed mb-10 animate-fade-up [animation-delay:200ms]">
            We help businesses scale through performance marketing, AI automation,
            custom software, branding, and content.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-up [animation-delay:300ms]">
            <Link
              href="/contact"
              onClick={() => trackEvent('cta_click', 'Contact', { label: 'book_call', location: 'hero' })}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_50px_rgba(192,132,252,0.18)]"
            >
              Book a Call
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="#case-studies"
              onClick={() => trackEvent('cta_click', 'ViewContent', { label: 'view_work', location: 'hero' })}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-[15px] hover:bg-white/[0.05] hover:border-white/25 transition-all duration-200"
            >
              View Work
            </Link>
          </div>

          {/* Tagline */}
          <p className="mt-10 text-sm text-[#71717a] animate-fade-up [animation-delay:400ms]">
            From awareness to automation.{' '}
            <span className="text-white/50">From code to customers.</span>
          </p>
        </div>

        {/* Right — animated dashboard mockup */}
        <div className="relative hidden lg:block animate-fade-up [animation-delay:300ms]">
          <DashboardMockup />
        </div>
      </div>
    </section>
  )
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Soft glow behind the panel */}
      <div className="absolute -inset-6 bg-gradient-to-tr from-[#c084fc]/10 to-[#60a5fa]/10 rounded-[2rem] blur-2xl" />

      <div className="relative rounded-2xl border border-white/[0.08] bg-[#0d0d0d] overflow-hidden shadow-2xl shadow-black/60">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="ml-3 text-[11px] text-[#52525b]">growth-dashboard.meghroop.tech</span>
        </div>

        <div className="p-5 space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: TrendingUp, label: 'ROAS', value: '6.4×', tint: 'text-emerald-400' },
              { icon: Activity, label: 'Leads', value: '1,284', tint: 'text-[#60a5fa]' },
              { icon: Sparkles, label: 'Automated', value: '92%', tint: 'text-[#c084fc]' },
            ].map(({ icon: Icon, label, value, tint }) => (
              <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                <Icon size={15} className={`${tint} mb-2`} />
                <div className="font-heading font-bold text-lg text-white tabular-nums">{value}</div>
                <div className="text-[10px] text-[#52525b] uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>

          {/* Animated bar chart */}
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] text-white/60 font-medium">Performance · last 30 days</span>
              <span className="text-[10px] text-emerald-400">▲ 38%</span>
            </div>
            <div className="flex items-end gap-1.5 h-24">
              {[40, 55, 35, 70, 60, 85, 50, 95, 75, 100, 65, 88].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-[#c084fc]/30 to-[#60a5fa]/70" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>

          {/* Live automation pill */}
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
            <span className="w-7 h-7 rounded-lg bg-[#c084fc]/15 flex items-center justify-center">
              <Sparkles size={13} className="text-[#c084fc]" />
            </span>
            <div className="flex-1">
              <div className="text-[12px] text-white/80">AI agent qualified 3 new leads</div>
              <div className="text-[10px] text-[#52525b]">WhatsApp → CRM → Sales · just now</div>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating accent card */}
      <div className="absolute -bottom-6 -left-6 rounded-xl border border-white/[0.08] bg-[#0d0d0d] px-4 py-3 shadow-xl shadow-black/50 animate-float">
        <div className="text-[10px] text-[#52525b] uppercase tracking-wider mb-0.5">Revenue</div>
        <div className="font-heading font-bold text-xl gradient-text-purple">+₹2.4Cr</div>
      </div>
    </div>
  )
}
