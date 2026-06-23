'use client'

import { ArrowRight, TrendingUp, Users, Zap, IndianRupee } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const pills = ['Meta & Google Ads', 'SEO', 'AI Agents', 'Automation', 'Shopify & WordPress', 'Branding']

const stats = [
  { icon: TrendingUp, value: '6.4×', label: 'Avg ROAS', tint: 'text-emerald-400' },
  { icon: Users, value: '1,284', label: 'Leads generated', tint: 'text-[#60a5fa]' },
  { icon: Zap, value: '92%', label: 'Work automated', tint: 'text-[#c084fc]' },
  { icon: IndianRupee, value: '2.4Cr+', label: 'Revenue driven', tint: 'text-amber-400' },
]

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="MeghRoop — Software, AI and Growth Agency"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-28 pb-20"
    >
      {/* Ambient glow — subtle, single-source, premium */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] bg-[#c084fc]/[0.07] rounded-full blur-[160px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[55vw] h-[40vh] bg-[#60a5fa]/[0.06] rounded-full blur-[160px] animate-float-slow" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 w-full flex flex-col items-center text-center">
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

        <p className="text-lg sm:text-xl text-white/[0.65] max-w-xl mx-auto leading-relaxed mb-8 animate-fade-up [animation-delay:200ms]">
          We help businesses scale through performance marketing, AI automation,
          custom software, branding, and content.
        </p>

        {/* Service pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-up [animation-delay:250ms]">
          {pills.map((pill) => (
            <span
              key={pill}
              className="text-xs sm:text-[13px] px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/60"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 animate-fade-up [animation-delay:300ms]">
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
        <p className="mt-9 text-sm text-[#71717a] animate-fade-up [animation-delay:400ms]">
          From awareness to automation.{' '}
          <span className="text-white/50">From code to customers.</span>
        </p>

        {/* Stats strip */}
        <div className="w-full max-w-2xl mt-12 pt-8 border-t border-white/[0.06] grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-up [animation-delay:500ms]">
          {stats.map(({ icon: Icon, value, label, tint }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <Icon size={16} className={tint} />
              <span className="font-heading font-bold text-2xl sm:text-3xl text-white tabular-nums">{value}</span>
              <span className="text-[11px] text-[#52525b] uppercase tracking-wider">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
