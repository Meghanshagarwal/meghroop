import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { serviceNav, servicePages } from '@/data/services'

export const metadata: Metadata = {
  title: 'Services — Growth, AI & Software',
  description:
    'Performance marketing, AI automation, custom software, Shopify & WordPress, and branding — one premium agency, every lever of growth.',
  alternates: { canonical: '/services' },
}

export default function ServicesIndex() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#c084fc]/[0.08] rounded-full blur-[170px] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6 pb-16 sm:pb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
              Services
            </div>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight mb-7">
              Growth. AI. <span className="gradient-text">Software.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/[0.62] max-w-2xl mx-auto leading-relaxed">
              We help businesses grow through performance marketing, AI automation, custom software,
              branding, and content — all under one roof.
            </p>
          </div>
        </section>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {serviceNav.flatMap((group) =>
              group.links.length && group.label === 'Shopify & WordPress'
                ? [
                    { label: 'Shopify Development', href: '/shopify-development', dot: group.dot },
                    { label: 'WordPress Development', href: '/wordpress-development', dot: group.dot },
                  ]
                : [{ label: group.label, href: group.href, dot: group.dot }]
            ).map((s) => {
              const page = servicePages[s.href.replace('/', '')]
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className="bg-[#0d0d0d] p-8 sm:p-10 group hover:bg-[#101010] transition-colors"
                >
                  <span className={`w-2 h-2 rounded-full ${s.dot} inline-block mb-5`} />
                  <h2 className="font-heading font-bold text-2xl text-white mb-3 flex items-center gap-2">
                    {s.label}
                    <ArrowRight size={18} className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </h2>
                  <p className="text-[15px] text-white/[0.55] leading-relaxed">{page?.sub}</p>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
