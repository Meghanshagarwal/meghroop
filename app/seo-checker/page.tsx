import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SeoCheckerForm from '@/components/sections/SeoCheckerForm'
import { Gauge, Search, Bot, FileText } from 'lucide-react'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

export const metadata: Metadata = {
  title: 'Free SEO Checker — Instant Website SEO Audit Report (PDF)',
  description:
    'Free SEO checker by MeghRoop. Enter your website URL and get an instant, in-depth SEO audit report as a downloadable PDF — technical SEO, on-page, Core Web Vitals, schema, GEO and AI search. No sign-up, no install.',
  keywords: [
    'free SEO checker',
    'SEO checker',
    'SEO audit tool',
    'free SEO audit',
    'website SEO checker',
    'free SEO analysis',
    'SEO report generator',
    'check website SEO',
    'on-page SEO checker',
    'technical SEO audit',
    'GEO checker',
    'AI search optimization checker',
    'SEO score checker',
  ],
  alternates: { canonical: '/seo-checker' },
  openGraph: {
    title: 'Free SEO Checker — Instant Website SEO Audit Report',
    description:
      'Get a free, in-depth SEO audit of your website as a downloadable PDF. Technical SEO, on-page, Core Web Vitals, schema, GEO and AI search — analysed on your live site.',
    url: `${SITE_URL}/seo-checker`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SEO Checker — Instant Website SEO Audit Report',
    description:
      'Get a free, in-depth SEO audit of your website as a downloadable PDF. No sign-up, no install.',
  },
}

const features = [
  { icon: Search, title: 'Technical & On-Page SEO', desc: 'Title, meta, headings, canonical, robots, sitemap and more — checked on your live site.' },
  { icon: Gauge, title: 'Performance & Core Web Vitals', desc: 'Page weight, response time and load signals that affect rankings and bounce rate.' },
  { icon: Bot, title: 'GEO & AI Search', desc: 'How well LLMs and AI search engines can read, understand and cite your content.' },
  { icon: FileText, title: 'Branded PDF report', desc: 'A consultant-grade audit with severity, evidence and fixes — yours to download instantly.' },
]

const faqs = [
  {
    q: 'Is the SEO checker really free?',
    a: 'Yes. The MeghRoop SEO checker is 100% free. Enter your website URL and your email, and you get a full SEO audit report as a downloadable PDF — no payment, no credit card, no subscription.',
  },
  {
    q: 'What does the SEO checker analyse?',
    a: 'It crawls your live page and checks technical SEO (HTTPS, canonical, robots, sitemap, viewport), on-page SEO (title, meta description, headings, content depth, image alt text), schema / structured data, internal linking, Core Web Vitals signals, and GEO / AI search readiness — how well ChatGPT, Perplexity, Claude and Google AI Overviews can understand your content.',
  },
  {
    q: 'Do I need to sign up or install anything?',
    a: 'No. There is nothing to install and no account to create. Just paste your website URL, add your email so we can send the report, and run the audit. The branded PDF downloads automatically in about 20–40 seconds.',
  },
  {
    q: 'How accurate is the SEO score?',
    a: 'The score is calculated deterministically from real signals crawled on your live website — not guessed — so the same site always gets the same, reproducible score. It reflects concrete factors like metadata quality, heading structure, structured data, links and page weight.',
  },
  {
    q: 'What is GEO and AI search optimization?',
    a: 'GEO (Generative Engine Optimization) is the practice of structuring your content so AI systems like ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews can read, understand and cite your brand in their answers. The checker measures how AI-ready your page is alongside traditional SEO.',
  },
  {
    q: 'Who builds this tool?',
    a: 'MeghRoop — a Growth, AI and Software agency. We help businesses grow with performance marketing, AI automation, custom software, SEO and GEO. If you want help fixing what the audit finds, just reach out at hello@meghroop.tech.',
  },
]

function StructuredData() {
  const softwareApp = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MeghRoop Free SEO Checker',
    url: `${SITE_URL}/seo-checker`,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description:
      'Free SEO checker that audits any website and generates an instant, downloadable PDF report covering technical SEO, on-page SEO, Core Web Vitals, schema, GEO and AI search readiness.',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    provider: { '@type': 'Organization', name: 'MeghRoop', url: SITE_URL },
    featureList: [
      'Technical SEO audit',
      'On-page SEO analysis',
      'Core Web Vitals signals',
      'Schema / structured data check',
      'GEO and AI search optimization check',
      'Downloadable PDF report',
    ],
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
      { '@type': 'ListItem', position: 2, name: 'Free SEO Checker', item: `${SITE_URL}/seo-checker` },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  )
}

export default function SeoCheckerPage() {
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
                Free tool
              </span>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Free SEO Checker —{' '}
                <span className="gradient-text">instant audit report</span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-gray-400">
                Enter your website and get a detailed, MeghRoop-branded SEO audit as a downloadable
                PDF — covering technical SEO, on-page, Core Web Vitals, schema, GEO and AI search.
                Real findings from your live site, not generic advice.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {features.map(({ icon: Icon, title, desc }) => (
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
              <h2 className="font-heading text-xl font-bold text-white">Run your free audit</h2>
              <p className="mt-1.5 mb-6 text-sm text-gray-500">
                Takes about 20–40 seconds. Your branded PDF downloads automatically.
              </p>
              <SeoCheckerForm />
            </div>
          </div>

          {/* What the SEO checker checks — keyword-rich supporting content */}
          <section className="mt-24 border-t border-white/[0.06] pt-16">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What this free SEO checker analyses
            </h2>
            <p className="mt-4 max-w-3xl text-gray-400 leading-relaxed">
              Our SEO audit tool crawls your live website and grades it across the factors that
              actually move rankings — then explains, in plain language, exactly what to fix and why.
              It is built by the team at MeghRoop, who do this for clients every day.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ['Technical SEO', 'HTTPS, canonical tags, robots directives, XML sitemap, viewport and crawlability checks on your live URL.'],
                ['On-Page SEO', 'Title tag and meta description length, H1–H6 heading structure, content depth and image alt attributes.'],
                ['Schema & Structured Data', 'Detects JSON-LD and the entity types (Organization, FAQ, Product…) that help you win rich results.'],
                ['Core Web Vitals', 'Page-weight and load signals that influence both Google rankings and user bounce rate.'],
                ['GEO & AI Search', 'How readable and citable your content is for ChatGPT, Perplexity, Claude, Gemini and Google AI Overviews.'],
                ['Internal Linking & EEAT', 'Internal link depth and trust/authority signals that strengthen your whole site.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How it works */}
          <section className="mt-20">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              How the SEO checker works
            </h2>
            <ol className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                ['1. Enter your URL', 'Paste your website address and your email so we can send your report.'],
                ['2. We crawl your site', 'We fetch your live page and extract real, verifiable SEO signals — no guessing.'],
                ['3. Download your PDF', 'You get a consultant-grade, branded SEO audit with your score, issues and fixes.'],
              ].map(([title, desc]) => (
                <li key={title} className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-5">
                  <h3 className="text-base font-semibold text-purple-300">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{desc}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* FAQ — matches the FAQPage schema above */}
          <section className="mt-20">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Free SEO checker — FAQ
            </h2>
            <div className="mt-8 divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {faqs.map((f) => (
                <div key={f.q} className="py-6">
                  <h3 className="text-base font-semibold text-white">{f.q}</h3>
                  <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-400">{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
