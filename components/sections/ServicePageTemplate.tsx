'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Plus, Minus, Check } from 'lucide-react'
import { trackEvent } from '@/lib/analytics'
import { serviceLinks, type ServicePage } from '@/data/services'

export default function ServicePageTemplate({ data }: { data: ServicePage }) {
  const [open, setOpen] = useState<number | null>(0)
  // Contextual, curated cross-links reinforce the entity graph; fall back to the
  // flat service list (without a note) only if a page hasn't defined `related`.
  const related =
    data.related?.length
      ? data.related
      : serviceLinks
          .filter((s) => s.href !== `/${data.slug}`)
          .slice(0, 4)
          .map((s) => ({ ...s, note: '' }))

  return (
    <main id="main-content" className="pt-28 sm:pt-32">
      {/* ── Hero ── */}
      <section className="grid-bg relative overflow-hidden">
        <div
          className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] rounded-full blur-[170px] pointer-events-none"
          style={{ background: data.glow }}
        />
        <div className="relative max-w-5xl mx-auto px-6 pb-16 sm:pb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
            <span className={`w-1.5 h-1.5 rounded-full ${data.accent.replace('text-', 'bg-')}`} />
            {data.eyebrow}
          </div>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight mb-7">
            {data.headline}{' '}
            <span className="gradient-text">{data.headlineAccent}</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/[0.62] max-w-2xl mx-auto leading-relaxed mb-10">
            {data.sub}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              onClick={() => trackEvent('cta_click', 'Contact', { label: 'book_call', location: `service_${data.slug}` })}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-all duration-200 shadow-[0_0_50px_rgba(192,132,252,0.18)]"
            >
              {data.ctaButton}
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/[0.12] text-white font-semibold text-[15px] hover:bg-white/[0.05] transition-all duration-200"
            >
              View Work
            </Link>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28">
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white leading-[1.08] tracking-tight mb-6">
            {data.problemTitle}
          </h2>
          <p className="text-lg sm:text-xl text-white/[0.62] leading-relaxed max-w-3xl">{data.problemBody}</p>
        </div>
      </section>

      {/* ── Offerings ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-10">What we do</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {data.offerings.map((o) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-[#0d0d0d] p-8 hover:bg-[#101010] transition-colors duration-300"
              >
                <Check size={18} className={`${data.accent} mb-5`} />
                <h3 className="font-heading font-bold text-xl text-white mb-3">{o.title}</h3>
                <p className="text-[15px] text-white/[0.55] leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-10">Outcomes we drive</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {data.outcomes.map((o) => (
              <div key={o.label}>
                <div className="font-heading font-bold text-5xl sm:text-6xl gradient-text-purple leading-none mb-3">{o.value}</div>
                <div className="text-sm text-white/50">{o.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:py-28">
          <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-14">
            How we <span className="gradient-text">work</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.map((p, i) => (
              <div key={p.title} className="group">
                <div className="font-heading font-bold text-5xl text-white/[0.08] mb-4 group-hover:text-[#c084fc]/30 transition-colors">0{i + 1}</div>
                <h3 className="font-heading font-bold text-xl text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/[0.55] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Stack chips */}
          <div className="mt-16 flex flex-wrap gap-2.5">
            {data.stack.map((s) => (
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
            {data.faqs.map((f, i) => {
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

      {/* ── Related services (contextual internal linking / entity graph) ── */}
      <section className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight mb-3">
            Works better <span className="gradient-text">together</span>
          </h2>
          <p className="text-white/[0.55] text-sm sm:text-base max-w-2xl mb-10">
            {data.eyebrow} rarely works alone. Here&apos;s how it connects to the rest of what we do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {related.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group bg-[#0d0d0d] p-6 hover:bg-[#101010] transition-colors"
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-heading font-bold text-lg text-white group-hover:text-white">{s.label}</span>
                  <ArrowRight size={16} className="flex-shrink-0 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
                {'note' in s && s.note && (
                  <p className="text-sm text-white/[0.55] leading-relaxed">{s.note}</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
        <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden px-8 py-16 sm:py-24 text-center">
          <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[32vh] bg-[#c084fc]/[0.13] rounded-full blur-[140px] pointer-events-none" />
          <h2 className="relative font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
            {data.ctaHeadline} <span className="gradient-text">{data.ctaAccent}</span>
          </h2>
          <p className="relative text-white/[0.6] max-w-lg mx-auto mb-9">
            From awareness to automation. From code to customers. Let&apos;s build something amazing.
          </p>
          <Link
            href="/contact"
            onClick={() => trackEvent('cta_click', 'Contact', { label: 'discovery_call', location: `service_${data.slug}_cta` })}
            className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-colors shadow-[0_0_50px_rgba(192,132,252,0.2)]"
          >
            {data.ctaButton}
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  )
}
