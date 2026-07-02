'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { ArrowRight, Check, Plus, Minus, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { trackEvent } from '@/lib/analytics'
import ObfuscatedEmail from '@/components/common/ObfuscatedEmail'
import type { Accent, ServiceContent } from '@/data/services/types'

const ACCENTS: Record<
  Accent,
  { orb1: string; orb2: string; dot: string; icon: string; link: string; gradStat: string; bg: string }
> = {
  purple: { orb1: 'bg-purple-600/25', orb2: 'bg-violet-600/20', dot: 'bg-purple-400', icon: 'text-purple-400', link: 'text-purple-300 hover:text-purple-200', gradStat: 'gradient-text-purple', bg: 'rgba(139, 92, 246, 0.15)' },
  cyan: { orb1: 'bg-cyan-600/25', orb2: 'bg-blue-600/20', dot: 'bg-cyan-400', icon: 'text-cyan-400', link: 'text-cyan-300 hover:text-cyan-200', gradStat: 'gradient-text-cyan', bg: 'rgba(34, 211, 238, 0.15)' },
  blue: { orb1: 'bg-blue-600/25', orb2: 'bg-cyan-600/20', dot: 'bg-blue-400', icon: 'text-blue-400', link: 'text-blue-300 hover:text-blue-200', gradStat: 'gradient-text-cyan', bg: 'rgba(59, 130, 246, 0.15)' },
  emerald: { orb1: 'bg-emerald-600/25', orb2: 'bg-teal-600/20', dot: 'bg-emerald-400', icon: 'text-emerald-400', link: 'text-emerald-300 hover:text-emerald-200', gradStat: 'gradient-text-cyan', bg: 'rgba(16, 185, 129, 0.15)' },
  amber: { orb1: 'bg-amber-600/25', orb2: 'bg-orange-600/20', dot: 'bg-amber-400', icon: 'text-amber-400', link: 'text-amber-300 hover:text-amber-200', gradStat: 'gradient-text-purple', bg: 'rgba(245, 158, 11, 0.15)' },
  rose: { orb1: 'bg-rose-600/25', orb2: 'bg-pink-600/20', dot: 'bg-rose-400', icon: 'text-rose-400', link: 'text-rose-300 hover:text-rose-200', gradStat: 'gradient-text-purple', bg: 'rgba(244, 63, 94, 0.15)' },
  violet: { orb1: 'bg-violet-600/25', orb2: 'bg-purple-600/20', dot: 'bg-violet-400', icon: 'text-violet-400', link: 'text-violet-300 hover:text-violet-200', gradStat: 'gradient-text-purple', bg: 'rgba(124, 58, 237, 0.15)' },
  indigo: { orb1: 'bg-indigo-600/25', orb2: 'bg-violet-600/20', dot: 'bg-indigo-400', icon: 'text-indigo-400', link: 'text-indigo-300 hover:text-indigo-200', gradStat: 'gradient-text-purple', bg: 'rgba(99, 102, 241, 0.15)' },
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

function SectionHeader({ accent, eyebrow, heading, subtitle }: { accent: typeof ACCENTS[Accent]; eyebrow?: string; heading: React.ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-10 sm:mb-14"
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-gray-400 mb-5">
          <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} animate-pulse`} />
          {eyebrow}
        </div>
      )}
      <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-4">{heading}</h2>
      {subtitle && <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  )
}

const SITE_URL = 'https://meghroop.tech'

export default function ServiceDetailTemplate({ content, slug }: { content: ServiceContent; slug: string }) {
  const a = ACCENTS[content.accent]
  const [open, setOpen] = useState<number | null>(null)

  const pageUrl = `${SITE_URL}/ai-agents/${slug}`
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Agentic AI', item: `${SITE_URL}/agentic-ai` },
          { '@type': 'ListItem', position: 3, name: content.eyebrow, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: content.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Navbar />
      <main id="main-content">
        {/* HERO */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${a.orb1} rounded-full blur-[120px] animate-float`} />
            <div className={`absolute top-1/3 right-1/4 w-80 h-80 ${a.orb2} rounded-full blur-[120px] animate-float-delay`} />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-float-slow" />
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-24">
            {/* Visible breadcrumb (matches BreadcrumbList schema) */}
            <nav aria-label="Breadcrumb" className="flex justify-center mb-5">
              <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-gray-500">
                <li><Link href="/" className="hover:text-gray-300 transition-colors">Home</Link></li>
                <li className="text-white/20">/</li>
                <li><Link href="/agentic-ai" className="hover:text-gray-300 transition-colors">Agentic AI</Link></li>
                <li className="text-white/20">/</li>
                <li className="text-gray-300" aria-current="page">{content.eyebrow}</li>
              </ol>
            </nav>
            <motion.div {...fadeUp(0)} className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex flex-wrap justify-center items-center gap-x-2 gap-y-1 px-3 sm:px-4 py-2 rounded-full glass text-xs sm:text-sm text-gray-300">
                <Sparkles size={13} className={`${a.icon} flex-shrink-0`} />
                <span>{content.badge}</span>
              </div>
            </motion.div>

            <motion.p {...fadeUp(0.1)} className="font-heading font-bold text-sm sm:text-base text-gray-500 uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-3 sm:mb-4">
              {content.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight mb-5 sm:mb-6"
            >
              {content.titleLines.map((line, i) => (
                <span key={i}>
                  {i === content.gradientIndex ? <span className="gradient-text">{line}</span> : line}
                  {i < content.titleLines.length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p {...fadeUp(0.35)} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              {content.subtitle}
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="flex flex-wrap justify-center gap-2 mb-10">
              {content.pills.map((pill) => (
                <span key={pill} className="text-xs px-3 py-1.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-gray-400">
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href={content.primaryCta.href}
                onClick={() => trackEvent('cta_click', 'Lead', { label: content.eyebrow, location: 'service_hero' })}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                {content.primaryCta.label}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              {content.secondaryCta && (
                <Link
                  href={content.secondaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
                >
                  {content.secondaryCta.label}
                </Link>
              )}
            </motion.div>

            {content.stats && content.stats.length > 0 && (
              <motion.div {...fadeUp(0.6)} className="mt-10 sm:mt-16 flex flex-row flex-wrap items-center justify-center gap-8 sm:gap-10">
                {content.stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <span className={`font-heading font-bold text-2xl ${a.gradStat}`}>{value}</span>
                    <span className="text-xs text-gray-500 max-w-[8rem] text-center">{label}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>

        {/* PROBLEM */}
        {content.problem && (
          <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-10 items-start">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-5">{content.problem.heading}</h2>
                  {content.problem.paragraphs.map((p, i) => (
                    <p key={i} className="text-gray-400 text-base sm:text-lg leading-relaxed mb-5">{p}</p>
                  ))}
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative rounded-2xl border border-white/[0.08] overflow-hidden p-8 sm:p-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                  <div className="relative z-10">
                    <h3 className="font-heading font-bold text-2xl text-white mb-5">{content.problem.card.title}</h3>
                    <ul className="space-y-3 text-gray-400">
                      {content.problem.card.items.map((it) => (
                        <li key={it} className="flex gap-3">
                          <Check size={18} className={`${a.icon} flex-shrink-0 mt-0.5`} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )}

        {/* FEATURES (bento) */}
        {content.features && (
          <section className="section-padding">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <SectionHeader accent={a} eyebrow="What's inside" heading={content.features.heading} subtitle={content.features.subtitle} />
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {content.features.items.map((f) => (
                  <motion.div key={f.title} variants={item} whileHover={{ scale: 1.01, transition: { duration: 0.2 } }} className="group relative rounded-2xl border border-white/[0.08] hover:border-white/20 overflow-hidden transition-all duration-300">
                    <div className="absolute inset-0 bg-[#0a0a0a]" />
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: `inset 0 0 60px ${a.bg}` }} />
                    <div className="relative z-10 p-7 sm:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.06] flex items-center justify-center`}>
                          <Sparkles size={18} className={a.icon} />
                        </div>
                        {f.tag && <span className="text-xs px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400">{f.tag}</span>}
                      </div>
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-white mb-2.5">{f.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{f.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              {content.features.note && (
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8">
                  <h3 className="font-heading font-bold text-lg text-white mb-4">{content.features.note.title}</h3>
                  <ul className="grid sm:grid-cols-2 gap-3 text-gray-400">
                    {content.features.note.items.map((it) => (
                      <li key={it} className="flex gap-3"><Check size={16} className={`${a.icon} flex-shrink-0 mt-1`} /><span>{it}</span></li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </section>
        )}

        {/* PROCESS */}
        {content.process && (
          <section className="section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <SectionHeader accent={a} eyebrow="How it works" heading={content.process.heading} subtitle={content.process.subtitle} />
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-5">
                {content.process.steps.map((step, i) => (
                  <motion.div key={step.title} variants={item} whileHover={{ x: 8, transition: { duration: 0.2 } }} className="group relative rounded-2xl border border-white/[0.08] hover:border-white/20 overflow-hidden transition-all duration-300 p-6 sm:p-8">
                    <div className="relative z-10 flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                        <span className="font-heading font-bold text-lg text-white/60 group-hover:text-white transition-colors duration-300">{i + 1}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-bold text-lg text-white mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* WHY */}
        {content.why && (
          <section className="section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <SectionHeader accent={a} eyebrow="Why MeghRoop" heading={content.why.heading} subtitle={content.why.subtitle} />
              <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {content.why.items.map((d) => (
                  <motion.div key={d.title} variants={item} whileHover={{ y: -4, transition: { duration: 0.2 } }} className="relative rounded-2xl border border-white/[0.08] hover:border-white/20 overflow-hidden transition-all duration-300 p-7 sm:p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                    <div className="relative z-10">
                      <h3 className="font-heading font-bold text-lg text-white mb-2">{d.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{d.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* COMPARISON */}
        {content.comparison && (
          <section className="section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <SectionHeader accent={a} eyebrow="How we compare" heading={content.comparison.heading} subtitle={content.comparison.subtitle} />
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-x-auto rounded-2xl border border-white/[0.08]">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="bg-white/[0.03]">
                      {content.comparison.columns.map((c, i) => (
                        <th key={i} className={`p-4 font-heading font-semibold ${i === 1 ? 'text-white' : 'text-gray-400'} whitespace-nowrap`}>{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.comparison.rows.map((row) => (
                      <tr key={row.label} className="border-t border-white/[0.06]">
                        <td className="p-4 font-semibold text-white align-top">{row.label}</td>
                        {row.values.map((v, i) => (
                          <td key={i} className={`p-4 align-top ${i === 0 ? a.icon : 'text-gray-400'}`}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>
        )}

        {/* OUTCOMES */}
        {content.outcomes && (
          <section className="section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <SectionHeader accent={a} eyebrow="What you get" heading={content.outcomes.heading} subtitle={content.outcomes.subtitle} />
              <div className="grid sm:grid-cols-2 gap-4">
                {content.outcomes.items.map((it) => (
                  <motion.div key={it} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <Check size={18} className={`${a.icon} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-gray-300 leading-relaxed">{it}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* AUDIENCE */}
        {content.audience && (
          <section className="section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <SectionHeader accent={a} eyebrow="Who it's for" heading={content.audience.heading} subtitle={content.audience.subtitle} />
              <div className="space-y-4">
                {content.audience.items.map((it) => (
                  <div key={it} className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5">
                    <span className={`mt-2 w-1.5 h-1.5 rounded-full ${a.dot} flex-shrink-0`} />
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{it}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PRICING */}
        {content.pricing && (
          <section className="section-padding">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <SectionHeader accent={a} eyebrow="Pricing" heading={content.pricing.heading} subtitle={content.pricing.subtitle} />
              <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
                {content.pricing.tiers.map((t) => (
                  <motion.div key={t.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 sm:p-8">
                    <p className={`text-xs uppercase tracking-wider font-semibold ${a.icon} mb-3`}>{t.title}</p>
                    <p className="font-heading font-bold text-3xl text-white mb-2">{t.price}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{t.scope}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section-padding">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <SectionHeader accent={a} eyebrow="Questions people ask" heading={<>Things worth <span className="gradient-text">actually answering.</span></>} />
            <div className="space-y-4">
              {content.faqs.map((faq, i) => {
                const isOpen = open === i
                return (
                  <div key={i} className="rounded-2xl border border-white/[0.08] overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <button onClick={() => setOpen(isOpen ? null : i)} className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200 group" aria-expanded={isOpen}>
                      <span className="text-sm sm:text-base text-white" itemProp="name">{faq.q}</span>
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.1]">
                        {isOpen ? <Minus size={16} className="text-gray-400" /> : <Plus size={16} className="text-gray-400" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                          <div className="px-5 sm:px-6 pb-5 sm:pb-6 bg-white/[0.02] border-t border-white/[0.04]">
                            <p className="text-sm sm:text-base text-gray-400 leading-relaxed" itemProp="text">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative min-h-[460px] flex items-center justify-center overflow-hidden grid-bg section-padding">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-1/4 left-1/4 w-96 h-96 ${a.orb1} rounded-full blur-[120px] animate-float`} />
            <div className={`absolute bottom-1/4 right-1/4 w-80 h-80 ${a.orb2} rounded-full blur-[120px] animate-float-delay`} />
          </div>
          <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <motion.h2 {...fadeUp(0)} className="font-heading font-bold text-3xl sm:text-4xl md:text-6xl leading-[1.1] tracking-tight mb-5">
              {content.cta.heading}
            </motion.h2>
            <motion.p {...fadeUp(0.2)} className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8">
              {content.cta.subtitle}
            </motion.p>
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link href={content.cta.primary.href} onClick={() => trackEvent('cta_click', 'Lead', { label: content.eyebrow, location: 'service_cta' })} className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                {content.cta.primary.label}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <ObfuscatedEmail className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border border-white/[0.12] text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200" />
            </motion.div>
            <motion.div {...fadeUp(0.4)} className="mt-12 flex flex-wrap justify-center items-center gap-x-5 gap-y-3 border-t border-white/[0.06] pt-8 text-xs text-gray-500 max-w-2xl mx-auto">
              <Link href="/agentic-ai" className={`hover:${a.icon.replace('text-', 'text-')} transition-colors`}>All AI Services</Link>
              <span className="text-white/10">•</span>
              <Link href="/ai-agents/custom-ai-agents" className="hover:text-white transition-colors">Custom AI Agents</Link>
              <span className="text-white/10">•</span>
              <Link href="/ai-agents/agentic-automation" className="hover:text-white transition-colors">Agentic Automation</Link>
              <span className="text-white/10">•</span>
              <Link href="/ai-agents/ai-voice-agents" className="hover:text-white transition-colors">AI Voice Agents</Link>
              <span className="text-white/10">•</span>
              <Link href="/ai-agents/sales-ai" className="hover:text-white transition-colors">Sales AI</Link>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
