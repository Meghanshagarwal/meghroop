import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import WorkGrid from '@/components/sections/WorkGrid'
import { getSupabase, type Project } from '@/lib/supabase'
import { defaultProjects } from '@/data/projects'

export const revalidate = 60

async function getProjects(): Promise<Project[]> {
  try {
    const db = getSupabase()
    const { data } = await db
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true })
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
        {/* Hero */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#c084fc]/[0.08] rounded-full blur-[170px] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6 pb-14 sm:pb-20 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Selected work
            </div>
            <h1 className="font-heading font-bold text-5xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight mb-7">
              Our portfolio{' '}
              <span className="gradient-text">and expertise</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/[0.62] max-w-2xl mx-auto leading-relaxed">
              Growth, AI, software, and branding projects — with the numbers to
              back them.
            </p>
          </div>
        </section>

        {/* Filterable grid */}
        <WorkGrid projects={projects} />

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden px-8 py-16 sm:py-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[32vh] bg-[#c084fc]/[0.13] rounded-full blur-[140px] pointer-events-none" />
            <h2 className="relative font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Want to be the{' '}
              <span className="gradient-text">next result?</span>
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
