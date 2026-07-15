import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import FreeAuditForm from '@/components/sections/FreeAuditForm'
import { Gauge, Search, Smartphone, MousePointerClick, ShieldCheck, Palette } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

export const metadata: Metadata = {
  title: 'Free Website Audit — Get a Personalised Report in 24 Hours',
  description:
    'Get a free, expert website audit from MeghRoop. We personally review your site’s speed, SEO, design, mobile experience, and conversion — then send a prioritised report of exactly what to fix. 100% free, no obligation.',
  keywords: [
    'free website audit',
    'website audit',
    'free website review',
    'website analysis',
    'website performance audit',
    'website conversion audit',
    'free site audit',
    'website audit India',
    'get website audit',
  ],
  alternates: { canonical: `${SITE_URL}/free-website-audit` },
  openGraph: {
    title: 'Free Website Audit — Personalised Report in 24 Hours | MeghRoop',
    description:
      'We personally audit your website’s speed, SEO, design, mobile and conversion, then send a clear report of what to fix. 100% free.',
    url: `${SITE_URL}/free-website-audit`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Audit — Personalised Report in 24 Hours',
    description:
      'We personally audit your website’s speed, SEO, design, mobile and conversion, then send a clear report of what to fix. 100% free.',
  },
}

const audits = [
  { icon: Gauge, title: 'Speed & Performance', desc: 'Load time, page weight and Core Web Vitals — the signals that lose you visitors and rankings.' },
  { icon: Search, title: 'SEO & Google Visibility', desc: 'Technical + on-page SEO and why you’re not ranking for the searches your buyers make.' },
  { icon: Palette, title: 'Design & First Impression', desc: 'Does it look trustworthy and premium — or is it quietly costing you credibility?' },
  { icon: Smartphone, title: 'Mobile Experience', desc: 'How it really feels on a phone, where most of your traffic actually is.' },
  { icon: MousePointerClick, title: 'Conversion & Leads', desc: 'Where visitors drop off, and the changes that turn traffic into enquiries and sales.' },
  { icon: ShieldCheck, title: 'Security & Health', desc: 'SSL, broken links, and basic security gaps that put your site and visitors at risk.' },
]

const steps = [
  { n: '01', title: 'Submit your site', desc: 'Drop your URL and email — takes 30 seconds, no account needed.' },
  { n: '02', title: 'We audit it by hand', desc: 'A real expert reviews your site across speed, SEO, design, mobile and conversion.' },
  { n: '03', title: 'You get a clear report', desc: 'A prioritised, plain-English report of exactly what to fix — and what it’ll unlock. Yours to keep, free.' },
]

const faqs = [
  {
    q: 'Is the website audit really free?',
    a: 'Yes — 100% free with no obligation. You get a genuine, personalised audit of your website. There’s no payment, no credit card, and no commitment to work with us afterwards.',
  },
  {
    q: 'What does the free website audit cover?',
    a: 'We review your site across the things that actually matter for growth: speed and Core Web Vitals, technical and on-page SEO, design and trust, mobile experience, conversion and lead flow, and basic security/health. You get a prioritised report of what to fix first and why.',
  },
  {
    q: 'How long does it take to get my report?',
    a: 'Because a real person reviews your site (not just an automated scan), we usually send your report within 24–48 hours of your request.',
  },
  {
    q: 'Is this automated or a real human audit?',
    a: 'A real human. Our team manually reviews your website and writes up findings you can actually act on. If you just want an instant automated SEO score, try our free SEO Checker tool — the website audit is the deeper, personalised version.',
  },
  {
    q: 'What happens after the audit?',
    a: 'You keep the report and can fix things yourself, no strings attached. If you’d like us to handle the fixes — hosting, a redesign, SEO, or ongoing growth — we’ll share options. Only if you want to.',
  },
]

function StructuredData() {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Free Website Audit',
    serviceType: 'Website Audit',
    url: `${SITE_URL}/free-website-audit`,
    description:
      'A free, personalised website audit covering speed, SEO, design, mobile experience, conversion and security, with a prioritised report of what to fix.',
    provider: { '@type': 'Organization', name: 'MeghRoop', url: SITE_URL },
    areaServed: 'Worldwide',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
  }
  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Free Website Audit', item: `${SITE_URL}/free-website-audit` },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

export default function FreeWebsiteAuditPage() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main id="main-content" className="pt-28 pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            {/* Left — pitch */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.06] px-3 py-1 text-xs font-medium text-purple-300">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Free · No obligation
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Free Website Audit —{' '}
                <span className="gradient-text">know exactly what to fix</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-400">
                Not sure why your website isn’t bringing in enquiries? We’ll personally review your site’s
                speed, SEO, design, mobile experience and conversion — and send you a clear, prioritised
                report of what’s holding it back. 100% free.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {audits.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-purple-400">
                      <Icon size={17} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-6 sm:p-8 lg:sticky lg:top-28">
              <h2 className="font-heading text-xl font-bold text-white">Get your free audit</h2>
              <p className="mt-1.5 mb-6 text-sm text-gray-500">
                Tell us where to look. A real expert reviews your site and emails your report within 24–48 hours.
              </p>
              <FreeAuditForm />
            </div>
          </div>

          {/* How it works */}
          <section className="mt-24 border-t border-white/[0.06] pt-16">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              How the free audit works
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="group">
                  <div className="font-heading text-4xl font-bold text-white/[0.1] group-hover:text-purple-400/30 transition-colors">{s.n}</div>
                  <h3 className="mt-3 text-lg font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why free / trust */}
          <section className="mt-20 rounded-[2rem] border border-white/[0.08] bg-[#0a0a0a] p-8 sm:p-12">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Why we do this for free
            </h2>
            <p className="mt-4 max-w-3xl text-gray-400 leading-relaxed">
              Simple: the fastest way to show you we know our craft is to actually help before asking for
              anything. Most owners have no idea what’s quietly costing them leads — a slow homepage, a weak
              mobile layout, missing SEO. We point it out clearly. If you fix it yourself, great. If you’d
              rather we handle it — hosting, redesign, SEO or growth — we’re right here. No pressure either way.
            </p>
          </section>

          {/* FAQ */}
          <section className="mt-20">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Free website audit — FAQs
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <h3 className="text-base font-semibold text-white">{f.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
