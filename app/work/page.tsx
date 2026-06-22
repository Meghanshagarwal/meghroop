import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { getSupabase, projectSlug, type Project } from '@/lib/supabase'
import { defaultProjects } from '@/data/projects'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Work — Case Studies & Results',
  description:
    'Real work, real results. Growth, AI, software, and branding case studies from MeghRoop — with the numbers to back them.',
  alternates: { canonical: '/work' },
}

async function getProjects(): Promise<Project[]> {
  try {
    const db = getSupabase()
    const { data } = await db.from('projects').select('*').order('display_order', { ascending: true })
    if (data && data.length) return data
  } catch {
    /* fall through */
  }
  return defaultProjects
}

export default async function WorkPage() {
  const projects = await getProjects()

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#c084fc]/[0.08] rounded-full blur-[170px] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6 pb-14 sm:pb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Selected work
            </div>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight mb-7">
              Real work. <span className="gradient-text">Real results.</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/[0.62] max-w-2xl mx-auto leading-relaxed">
              Growth, AI, software, and branding projects — with the numbers to back them.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {projects.map((p) => {
              const headline = p.results?.[0]
              return (
                <Link
                  key={p.id}
                  href={`/work/${projectSlug(p)}`}
                  className="group relative rounded-2xl border border-white/[0.08] bg-[#0d0d0d] overflow-hidden hover:border-white/20 transition-all"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${p.gradient} opacity-25`} />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 text-white/80">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2 leading-snug">{p.title}</h2>
                    <p className="text-sm text-white/[0.55] leading-relaxed line-clamp-2 mb-5">{p.description}</p>
                    <div className="flex items-center justify-between">
                      {headline ? (
                        <span className="text-sm">
                          <span className="font-heading font-bold text-lg gradient-text-purple">{headline.after}</span>
                          <span className="text-white/40 ml-1.5">{headline.label}</span>
                        </span>
                      ) : <span />}
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                        Case study
                        <ArrowRight size={14} className="text-white/40 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden px-8 py-16 sm:py-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[32vh] bg-[#c084fc]/[0.13] rounded-full blur-[140px] pointer-events-none" />
            <h2 className="relative font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Want to be the <span className="gradient-text">next result?</span>
            </h2>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-colors shadow-[0_0_50px_rgba(192,132,252,0.2)]"
            >
              Book a Call <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
