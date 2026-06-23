import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { getSupabase, type Project } from '@/lib/supabase'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import Services from '@/components/sections/Services'
import WhyMeghRoop from '@/components/sections/WhyMeghRoop'
import Projects from '@/components/sections/Projects'
import Process from '@/components/sections/Process'
import TechStack from '@/components/sections/TechStack'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'
import { FaqJsonLd } from '@/components/common/JsonLd'


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
