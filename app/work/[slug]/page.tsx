import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { getSupabase, getProjectBySlug, projectSlug, type Project } from '@/lib/supabase'
import { defaultProjects } from '@/data/projects'

export const revalidate = 60

async function resolveProject(slug: string): Promise<Project | null> {
  const fromDb = await getProjectBySlug(slug)
  if (fromDb) return fromDb
  return defaultProjects.find((p) => projectSlug(p) === slug) ?? null
}

export async function generateStaticParams() {
  const slugs = new Set(defaultProjects.map((p) => projectSlug(p)))
  try {
    const db = getSupabase()
    const { data } = await db.from('projects').select('id, slug')
    ;(data ?? []).forEach((p) => slugs.add(projectSlug(p)))
  } catch {
    /* DB unavailable at build — showcase slugs still render */
  }
  return Array.from(slugs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = await resolveProject(params.slug)
  if (!project) return { title: 'Case Study Not Found' }
  return {
    title: `${project.title} — Case Study`,
    description: project.client_intro || project.description,
    openGraph: {
      title: `${project.title} — MeghRoop Case Study`,
      description: project.client_intro || project.description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  }
}

function splitParas(text?: string): string[] {
  if (!text) return []
  return text.split(/\n{2,}|\n/).map((p) => p.trim()).filter(Boolean)
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = await resolveProject(params.slug)
  if (!project) notFound()

  const results = project.results ?? []
  const intro = splitParas(project.client_intro)
  const outcome = splitParas(project.outcome)
  const services = project.services ?? []
  const projectTypes = project.project_types ?? []
  const deliverables = project.deliverables ?? []
  const liveUrl = project.live_url && project.live_url !== '#' ? project.live_url : null

  const meta: { label: string; values: string[] }[] = [
    services.length ? { label: 'Service', values: services } : null,
    projectTypes.length ? { label: 'Project Types', values: projectTypes } : null,
    project.timeline ? { label: 'Timeline', values: [project.timeline] } : null,
    project.category ? { label: 'Category', values: [project.category] } : null,
  ].filter(Boolean) as { label: string; values: string[] }[]

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28">
        {/* Hero */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[70vw] h-[40vh] bg-[#c084fc]/[0.08] rounded-full blur-[160px] pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-6 pb-12 sm:pb-16">
            <Link href="/#case-studies" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8">
              <ArrowLeft size={15} /> All work
            </Link>
            {project.category && (
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[#c084fc] mb-6">
                {project.category}
              </span>
            )}
            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight max-w-3xl">
              {project.title}
            </h1>
          </div>
        </section>

        {/* Cover image */}
        {project.image && (
          <section className="max-w-6xl mx-auto px-6">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/[0.08]">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1100px" priority />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
            </div>
          </section>
        )}

        {/* Body: intro + meta sidebar */}
        <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24 grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-5">
            {(intro.length ? intro : [project.description]).map((p, i) => (
              <p key={i} className="text-lg sm:text-xl text-white/[0.7] leading-relaxed">{p}</p>
            ))}
          </div>

          {/* Meta sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-7 lg:sticky lg:top-28 space-y-7">
              {meta.map((m) => (
                <div key={m.label}>
                  <div className="text-xs uppercase tracking-wider text-[#52525b] mb-2">{m.label}</div>
                  <ul className="space-y-1">
                    {m.values.map((v) => (
                      <li key={v} className="text-sm text-white/80">{v}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="pt-2 space-y-2.5">
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-white/[0.12] text-white text-sm font-semibold hover:bg-white/[0.06] transition-colors">
                    Visit Site <ExternalLink size={14} />
                  </a>
                )}
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors">
                  Let&apos;s Get Started <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </aside>
        </section>

        {/* Results — before / after */}
        {results.length > 0 && (
          <section className="border-t border-white/[0.06]">
            <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
              <div className="text-xs uppercase tracking-wider text-[#52525b] mb-8">Results</div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-6">
                    <div className="text-sm text-white/50 mb-5">{r.label}</div>
                    <div className="flex items-end gap-3">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#52525b] mb-1">Before</div>
                        <div className="font-heading font-semibold text-xl text-white/40 line-through decoration-white/20">{r.before}</div>
                      </div>
                      <ArrowRight size={18} className="text-[#c084fc] mb-1.5 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#52525b] mb-1">After</div>
                        <div className="font-heading font-bold text-3xl gradient-text-purple leading-none">{r.after}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* The Outcome */}
        {outcome.length > 0 && (
          <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
              <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white mb-10 tracking-tight">
                The <span className="gradient-text">Outcome</span>
              </h2>
              <div className="space-y-5 max-w-3xl">
                {outcome.map((p, i) => (
                  <p key={i} className="text-lg text-white/[0.7] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Deliverables */}
        {deliverables.length > 0 && (
          <section className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
            <div className="text-xs uppercase tracking-wider text-[#52525b] mb-6">What we delivered</div>
            <div className="flex flex-wrap gap-2.5">
              {deliverables.map((d) => (
                <span key={d} className="text-sm px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/70">{d}</span>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden px-8 py-16 sm:py-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[30vh] bg-[#c084fc]/[0.12] rounded-full blur-[140px] pointer-events-none" />
            <h2 className="relative font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-5">
              Want results like this?
            </h2>
            <Link href="/contact"
              className="relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold text-[15px] hover:bg-white/90 transition-colors shadow-[0_0_50px_rgba(192,132,252,0.2)]">
              Book a Discovery Call <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
