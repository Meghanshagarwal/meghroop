import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Our Products — MeghRoop',
  description: 'Explore our suite of autonomous, custom AI agents and enterprise solutions tailored to your business.',
  alternates: { canonical: '/product' },
}

export default function ProductIndex() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#c084fc]/[0.08] rounded-full blur-[170px] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6 pb-16 sm:pb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c084fc]" />
              Products
            </div>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight mb-7">
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/[0.62] max-w-2xl mx-auto leading-relaxed">
              Explore our suite of enterprise-grade solutions built to accelerate your business growth through AI and automation.
            </p>
          </div>
        </section>

        <section className="border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-20 sm:py-24 grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] rounded-2xl overflow-hidden">
            {[
              {
                label: 'Custom AI Agent Development',
                href: '/product/custom-ai-agent-development',
                dot: 'bg-[#c084fc]',
                sub: 'Build autonomous, custom AI agents tailored to your business. Enterprise-grade agents that reason, plan, and act across your systems.',
              },
              {
                label: 'AI Voice Agent',
                href: '/product/ai-voice-agent',
                dot: 'bg-[#38bdf8]',
                sub: 'Automate inbound and outbound phone calls 24/7. Natural-sounding AI voice agents for reception, support, sales, and appointment booking.',
              },
              {
                label: 'AI Sales Agent',
                href: '/product/ai-sales-agent',
                dot: 'bg-[#22d3ee]',
                sub: 'Qualify leads, make calls, and book meetings automatically — 24/7, in multiple languages, synced to your CRM.',
              },
              {
                label: 'AI Operating System',
                href: '/product/ai-operating-system',
                dot: 'bg-[#a78bfa]',
                sub: 'One unified platform for AI storage, data pipelines, vector search, and agent orchestration — built for GPU-scale workloads.',
              },
              {
                label: 'AI Chatbot Software',
                href: '/product/ai-chatbot-software',
                dot: 'bg-[#34d399]',
                sub: 'Automate customer support and sales with AI chatbot software that answers questions 24/7, recovers abandoned carts, and hands off to humans when needed.',
              },
            ].map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="bg-[#0d0d0d] p-8 sm:p-10 group hover:bg-[#101010] transition-colors"
              >
                <span className={`w-2 h-2 rounded-full ${p.dot} inline-block mb-5`} />
                <h2 className="font-heading font-bold text-2xl text-white mb-3 flex items-center gap-2">
                  {p.label}
                  <ArrowRight size={18} className="text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </h2>
                <p className="text-[15px] text-white/[0.55] leading-relaxed">{p.sub}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
