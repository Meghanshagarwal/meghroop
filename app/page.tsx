import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import AgenticAI from '@/components/sections/AgenticAI'
import MCPServers from '@/components/sections/MCPServers'
import AIWorkflows from '@/components/sections/AIWorkflows'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import Contact from '@/components/sections/Contact'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { getSupabase, type Project } from '@/lib/supabase'

export const revalidate = 60

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
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
