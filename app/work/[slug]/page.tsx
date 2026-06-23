import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import CaseStudyGallery from '@/components/sections/CaseStudyGallery'
import { BreadcrumbJsonLd } from '@/components/common/JsonLd'
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
  const gallery = (project.gallery ?? []).filter(Boolean)
  const liveUrl = project.live_url && project.live_url !== '#' ? project.live_url : null

  const meta: { label: string; values: string[] }[] = [
    services.length ? { label: 'Services', values: services } : null,
    projectTypes.length ? { label: 'Project Type', values: projectTypes } : null,
    project.timeline ? { label: 'Timeline', values: [project.timeline] } : null,
    project.year ? { label: 'Year', values: [project.year] } : null,
  ].filter(Boolean) as { label: string; values: string[] }[]

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', path: '/' },
          { name: 'Work', path: '/work' },
          { name: project.title, path: `/work/${projectSlug(project)}` },
        ]}
      />
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#c084fc]/[0.08] rounded-full blur-[170px] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-6 pb-14 sm:pb-20">
            <Link href="/#case-studies" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-10">
              <ArrowLeft size={15} /> All work
            </Link>

            <div className="flex flex-wrap items-center gap-2.5 mb-7">
              {project.category && (
                <span className="text-xs px-3 py-1 rounded-full bg-[#c084fc]/[0.12] border border-[#c084fc]/20 text-[#c084fc]">
                  {project.category}
                </span>
              )}
              {project.timeline && (
                <span className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/60">
                  {project.timeline}
                </span>
              )}
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.02] tracking-tight max-w-4xl mb-7">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-white/[0.6] max-w-2xl leading-relaxed">
              {project.description}
            </p>

            {/* Quick results strip */}
            {results.length > 0 && (
              <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
                {results.map((r) => (
                  <div key={r.label}>
                    <div className="font-heading font-bold text-3xl sm:text-4xl gradient-text-purple leading-none">{r.after}</div>
                    <div className="text-sm text-white/45 mt-1.5">{r.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ── Cover ────────────────────────────────────────── */}
        {project.image && (
          <section className="max-w-6xl mx-auto px-6">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden border border-white/[0.08]">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 1100px" priority />
              <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-[0.18]`} />
            </div>
          </section>
        )}

        {/* ── Overview + meta ──────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-28 grid lg:grid-cols-3 gap-12 lg:gap-20">
          <div className="lg:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-6">Overview</div>
            <div className="space-y-5">
              {(intro.length ? intro : [project.description]).map((p, i) => (
                <p key={i} className="text-lg sm:text-xl text-white/[0.72] leading-relaxed">{p}</p>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-7 lg:sticky lg:top-28 divide-y divide-white/[0.06]">
              {meta.map((m) => (
                <div key={m.label} className="py-4 first:pt-0">
                  <div className="text-xs uppercase tracking-wider text-[#52525b] mb-2">{m.label}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {m.values.map((v) => (
                      <span key={v} className="text-sm text-white/85">{v}</span>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-5 space-y-2.5">
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

        {/* ── Gallery ──────────────────────────────────────── */}
        {gallery.length > 0 && (
          <section className="border-t border-white/[0.06]">
            <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
              <div className="flex items-end justify-between mb-10">
                <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight">
                  The <span className="gradient-text">work</span>
                </h2>
                <span className="text-sm text-white/40 hidden sm:block">Click any image to expand</span>
              </div>
              <CaseStudyGallery images={gallery} title={project.title} />
            </div>
          </section>
        )}

        {/* ── Results (before → after) ─────────────────────── */}
        {results.length > 0 && (
          <section className="border-t border-white/[0.06] bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
              <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-12">
                The <span className="gradient-text">numbers</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {results.map((r) => (
                  <div key={r.label} className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d] p-7">
                    <div className="text-sm text-white/50 mb-6">{r.label}</div>
                    <div className="flex items-end gap-3">
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#52525b] mb-1">Before</div>
                        <div className="font-heading font-semibold text-xl text-white/40 line-through decoration-white/20">{r.before}</div>
                      </div>
                      <ArrowRight size={18} className="text-[#c084fc] mb-1.5 flex-shrink-0" />
                      <div>
                        <div className="text-[10px] uppercase tracking-wider text-[#52525b] mb-1">After</div>
                        <div className="font-heading font-bold text-3xl sm:text-4xl gradient-text-purple leading-none">{r.after}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Outcome ──────────────────────────────────────── */}
        {outcome.length > 0 && (
          <section className="border-t border-white/[0.06]">
            <div className="max-w-5xl mx-auto px-6 py-20 sm:py-28">
              <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white mb-10 tracking-tight">
                The <span className="gradient-text">outcome</span>
              </h2>
              <div className="space-y-5 max-w-3xl">
                {outcome.map((p, i) => (
                  <p key={i} className="text-lg sm:text-xl text-white/[0.72] leading-relaxed">{p}</p>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Deliverables ─────────────────────────────────── */}
        {deliverables.length > 0 && (
          <section className="border-t border-white/[0.06]">
            <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
              <div className="text-xs uppercase tracking-[0.2em] text-[#52525b] mb-7">What we delivered</div>
              <div className="flex flex-wrap gap-2.5">
                {deliverables.map((d) => (
                  <span key={d} className="text-sm px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/70">{d}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 py-20 sm:py-24">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#0d0d0d] overflow-hidden px-8 py-16 sm:py-24 text-center">
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[32vh] bg-[#c084fc]/[0.13] rounded-full blur-[140px] pointer-events-none" />
            <h2 className="relative font-heading font-bold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
              Want results <span className="gradient-text">like this?</span>
            </h2>
            <p className="relative text-white/[0.6] max-w-lg mx-auto mb-9">
              Tell us where you want to grow — we&apos;ll show you the path from awareness to automation.
            </p>
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
