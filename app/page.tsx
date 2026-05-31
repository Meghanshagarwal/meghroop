import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { getSupabase, type Project } from '@/lib/supabase'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import About from '@/components/sections/About'
import AgenticAI from '@/components/sections/AgenticAI'
import MCPServers from '@/components/sections/MCPServers'
import AIWorkflows from '@/components/sections/AIWorkflows'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import HomeJournalFeed from '@/components/sections/HomeJournalFeed'
import Contact from '@/components/sections/Contact'


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
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <AgenticAI />
        <MCPServers />
        <AIWorkflows />
        <Services />
        <Projects projects={projects} />
        <TechStack />
        <Testimonials />
        <HomeJournalFeed />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
