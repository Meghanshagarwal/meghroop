'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus, Check, ShieldCheck, RefreshCw } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import {
  hostingMeta,
  hostingPlans,
  hostingIncludes,
  hostingSteps,
  hostingStack,
  hostingFaqs,
  yearlyDiscount,
  yearlyMonthly,
  yearlyTotal,
} from '@/data/hosting'

const related = [
  { label: 'WordPress Development', href: '/wordpress-development', note: 'Need the site built too? We design and build fast, custom WordPress — then host it for you.' },
  { label: 'Growth & Marketing', href: '/growth-marketing', note: 'A fast, secure site is the base — pair it with SEO and paid to actually drive traffic.' },
  { label: 'Software Development', href: '/software-development', note: 'Outgrowing WordPress? We build custom apps and host them on the same managed infrastructure.' },
  { label: 'AI Automation', href: '/ai-automation', note: 'Wire your hosted site into lead capture, follow-up, and CRM automation.' },
]

export default function HostingContent() {
  const [open, setOpen] = useState<number | null>(0)
  const [yearly, setYearly] = useState(true)
  const sym = hostingMeta.currencySymbol
  const off = Math.round(yearlyDiscount * 100)

  return (
    <main id="main-content" className="pt-28 sm:pt-32">
      {/* ── Hero ── */}
      <section className="grid-bg relative overflow-hidden">
        <div
          className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] rounded-full blur-[170px] pointer-events-none"
          style={{ background: hostingMeta.glow }}
        />
        <div className="relative max-w-5xl mx-auto px-6 pb-16 sm:pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
            <span className={`w-1.5 h-1.5 rounded-full ${hostingMeta.accent.replace('text-', 'bg-')}`} />
            {hostingMeta.eyebrow}
          </div>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight mb-7">
            Hosting you never <span className="gradient-text">have to think about.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/[0.62] max-w-2xl mx-auto leading-relaxed mb-8">
            Fully managed web, WordPress &amp; VPS-grade hosting — SSL, security, malware protection, daily
            backups, and free migration all included. From <span className="text-white font-semibold">₹49/mo</span>,{' '}
            <span className="text-white font-semibold">20% off yearly</span>, with a{' '}
            <span className="text-white font-semibold">30-day money-back guarantee</span>.
          </p>
          {/* Guarantee ribbon */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] text-emerald-300 text-[13px] mb-10">
            <ShieldCheck size={15} />
            30-day money-back guarantee — full, direct refund, no questions asked
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="#pricing"
              onClick={() => trackEvent('cta_click', 'Contact', { label: 'view_pricing', location: 'hosting_hero' })}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_50px_rgba(96,165,250,0.18)]"
            >
              See Plans
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              onClick={() => trackEvent('cta_click', 'Contact', { label: 'free_migration', location: 'hosting_hero' })}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-[15px] hover:bg-white/[0.05] transition-all duration-200"
            >
              Get Free Migration
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28">
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-[1.08] tracking-tight mb-6">
            Cheap hosting costs you more than it saves.
          </h2>
          <p className="text-lg sm:text-xl text-white/[0.62] leading-relaxed max-w-3xl">
            Slow load times, surprise downtime, security holes, and a control panel you never wanted to
            learn. We take the whole server off your plate — hardened, tuned, and fully managed on fast NVMe
            SSD — so your site stays fast, safe, and online while you get on with your business.
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="border-t border-white/[0.06] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-3">Plans &amp; pricing</div>
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Simple plans. <span className="gradient-text">Everything managed.</span>
          </h2>
          <p className="text-white/[0.55] max-w-2xl mb-8">
            Every plan is fully managed and includes free SSL, free migration, malware protection, and 24/7
            support. Pick your size — upgrade anytime.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full border border-white/[0.1] bg-white/[0.03] mb-12">
            <button
              onClick={() => setYearly(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                !yearly ? 'bg-white text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${
                yearly ? 'bg-white text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              Yearly
              <span className={`text-[11px] px-2 py-0.5 rounded-full ${yearly ? 'bg-emerald-500/15 text-emerald-600' : 'bg-emerald-400/15 text-emerald-300'}`}>
                −{off}%
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hostingPlans.map((p) => {
              const price = yearly ? yearlyMonthly(p.monthly) : p.monthly
              return (
                <div
                  key={p.id}
                  className={`relative flex flex-col rounded-2xl border p-6 sm:p-7 ${
                    p.featured ? 'border-[#60a5fa]/40 bg-[#60a5fa]/[0.05]' : 'border-white/[0.08] bg-white/[0.02]'
                  }`}
                >
                  {p.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#60a5fa] text-black whitespace-nowrap">
                      {p.badge}
                    </span>
                  )}
                  <div className="text-sm font-semibold text-white mb-1">{p.name}</div>
                  <p className="text-[13px] text-white/[0.5] leading-snug mb-5 min-h-[2.5rem]">{p.tagline}</p>

                  <div className="flex items-end gap-1">
                    <span className="font-heading font-bold text-4xl sm:text-5xl text-white leading-none">
                      {sym}{price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-white/50 text-sm mb-1">/mo</span>
                  </div>
                  <div className="mt-2 mb-5 text-[12px] h-5">
                    {yearly ? (
                      <span className="text-emerald-300">
                        {sym}{yearlyTotal(p.monthly).toLocaleString('en-IN')}/yr billed yearly · save {off}%
                      </span>
                    ) : (
                      <span className="text-white/40">Billed monthly · cancel anytime</span>
                    )}
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => trackEvent('cta_click', 'Purchase', { label: `hosting_${p.id}_${yearly ? 'yearly' : 'monthly'}`, location: 'hosting_pricing' })}
                    className={`group inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-[15px] transition-all duration-200 mb-6 ${
                      p.featured ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_40px_rgba(96,165,250,0.2)]' : 'border border-white/[0.12] text-white hover:bg-white/[0.05]'
                    }`}
                  >
                    Choose {p.name}
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>

                  <ul className="space-y-2.5 mb-5">
                    {p.specs.map((s) => (
                      <li key={s.label} className="flex items-center justify-between gap-2 text-[13px]">
                        <span className="text-white/45">{s.label}</span>
                        <span className="text-white/80 font-medium text-right">{s.value}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-2 pt-4 border-t border-white/[0.06] mt-auto">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[13px] text-white/[0.6]">
                        <Check size={15} className={`${hostingMeta.accent} flex-shrink-0 mt-0.5`} />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-white/45">
            <ShieldCheck size={15} className="text-emerald-400" />
            Every plan is covered by our 30-day money-back guarantee.
          </p>
        </div>
      </section>

      {/* ── Included on every plan ── */}
      <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-8">Included on every plan</div>
          <div className="flex flex-wrap gap-3">
            {hostingIncludes.map((f) => (
              <span key={f} className="inline-flex items-center gap-2 text-sm px-4 py-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-white/70">
                <Check size={15} className={hostingMeta.accent} />
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Money-back guarantee callout ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-20 sm:py-24">
          <div className="relative rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.04] overflow-hidden px-8 py-14 sm:px-14 sm:py-16">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-300">
                <RefreshCw size={24} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
                  Try any plan risk-free for 30 days.
                </h2>
                <p className="text-white/[0.62] text-lg leading-relaxed max-w-2xl">
                  If the hosting is not right for you within the first 30 days, just tell us — we refund you{' '}
                  <span className="text-white font-semibold">directly and in full</span>. No forms to fight,
                  no fine print, no questions asked. The risk is entirely on us, not you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-14">
            How it <span className="gradient-text">works</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingSteps.map((p, i) => (
              <div key={p.title} className="group">
                <div className="font-heading font-bold text-5xl text-white/[0.08] mb-4 group-hover:text-[#60a5fa]/30 transition-colors">0{i + 1}</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/[0.55] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 flex flex-wrap gap-2.5">
            {hostingStack.map((s) => (
              <span key={s} className="text-sm px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/65">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-20 sm:py-28">
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-12 text-center">
            Questions, <span className="gradient-text">answered.</span>
          </h2>
          <div className="space-y-3">
            {hostingFaqs.map((f, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="rounded-2xl border border-white/[0.08] overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-white">{f.q}</span>
                    <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/[0.06] flex items-center justify-center text-white/60">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 sm:px-6 pb-6 text-sm text-white/[0.6] leading-relaxed border-t border-white/[0.06] pt-4">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3">
            Works better <span className="gradient-text">together</span>
          </h2>
          <p className="text-white/[0.55] text-sm sm:text-base max-w-2xl mb-10">
            Managed hosting rarely works alone. Here&apos;s how it connects to the rest of what we do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {related.map((s) => (
              <Link key={s.href} href={s.href} className="group bg-[#0d0d0d] p-6 hover:bg-[#101010] transition-colors">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-heading font-bold text-lg text-white">{s.label}</span>
                  <ArrowRight size={16} className="flex-shrink-0 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-sm text-white/[0.55] leading-relaxed">{s.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
        <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden px-8 py-16 sm:py-24 text-center">
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[32vh] bg-[#60a5fa]/[0.13] rounded-full blur-[140px] pointer-events-none" />
          <h2 className="relative font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
            Ready for hosting <span className="gradient-text">that just works?</span>
          </h2>
          <p className="relative text-white/[0.6] max-w-lg mx-auto mb-9">
            Free migration, everything managed, 20% off yearly, and a 30-day money-back guarantee. Let&apos;s
            get your site on a faster, safer home today.
          </p>
          <Link
            href="/contact"
            onClick={() => trackEvent('cta_click', 'Contact', { label: 'discovery_call', location: 'hosting_cta' })}
            className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-colors shadow-[0_0_50px_rgba(96,165,250,0.2)]"
          >
            Get Started
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}
