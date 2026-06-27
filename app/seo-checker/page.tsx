import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SeoCheckerForm from '@/components/sections/SeoCheckerForm'
import { Gauge, Search, Bot, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free SEO Checker — Instant Branded Audit Report',
  description:
    'Enter your website URL and get a free, in-depth SEO audit report as a downloadable PDF. Technical SEO, On-Page, Core Web Vitals, Schema, GEO and AI Search — analysed by MeghRoop.',
  alternates: { canonical: '/seo-checker' },
}

const features = [
  { icon: Search, title: 'Technical & On-Page SEO', desc: 'Title, meta, headings, canonical, robots, sitemap and more — checked on your live site.' },
  { icon: Gauge, title: 'Performance & Core Web Vitals', desc: 'Page weight, response time and load signals that affect rankings and bounce rate.' },
  { icon: Bot, title: 'GEO & AI Search', desc: 'How well LLMs and AI search engines can read, understand and cite your content.' },
  { icon: FileText, title: 'Branded PDF report', desc: 'A consultant-grade audit with severity, evidence and fixes — yours to download instantly.' },
]

export default function SeoCheckerPage() {
  return (
    <>
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
        </div>
      </main>
      <Footer />
    </>
  )
}
