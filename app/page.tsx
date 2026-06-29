import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { getSupabase, type Project } from '@/lib/supabase'

// Above-the-fold: eager so the hero + first section render with zero extra
// round-trips and stay in the initial JS bundle.
import Services from '@/components/sections/Services'
import { FaqJsonLd } from '@/components/common/JsonLd'

// Below-the-fold: each section is a `'use client'` component that pulls in
// framer-motion. Code-splitting them with next/dynamic keeps `ssr: true` (so the
// HTML is still fully server-rendered for SEO / H2 headings) while moving their
// JS — and the shared framer-motion chunk — out of the initial bundle into
// deferred chunks. This is what trims the "Reduce unused JavaScript" payload and
// lowers Total Blocking Time / Time to Interactive on mobile.
const WhyMeghRoop = dynamic(() => import('@/components/sections/WhyMeghRoop'))
const AgencyOverview = dynamic(() => import('@/components/sections/AgencyOverview'))
const Projects = dynamic(() => import('@/components/sections/Projects'))
const Process = dynamic(() => import('@/components/sections/Process'))
const TechStack = dynamic(() => import('@/components/sections/TechStack'))
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'))
const FAQ = dynamic(() => import('@/components/sections/FAQ'))
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'))


export const revalidate = 86400

async function getProjects(): Promise<Project[]> {
  try {
    const db = getSupabase()
    const { data } = await db.from('projects').select('*').order('display_order', { ascending: true })
    return data ?? []
  } catch {
    return []
  }
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <>
      {/* FAQPage schema — only here, where the <FAQ /> section is visible */}
      <FaqJsonLd />
      <Navbar />
      <main id="main-content">
        {/* 1. Hero — Growth. AI. Software. */}
        <Hero />
        {/* 2. Services — 5 expandable categories, outcome-first */}
        <Services />
        {/* 3. Why MeghRoop */}
        <WhyMeghRoop />
        {/* 3b. Agency overview — crawlable, keyword-rich server-rendered copy */}
        <AgencyOverview />
        {/* 4. Case Studies */}
        <Projects projects={projects} />
        {/* 5. Process — Discover → Scale */}
        <Process />
        {/* 6. Tech Stack */}
        <TechStack />
        {/* 7. Testimonials */}
        <Testimonials />
        {/* 8. FAQ */}
        <FAQ />
        {/* 9. Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
