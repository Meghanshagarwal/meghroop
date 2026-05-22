import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { getSupabase, type Project } from '@/lib/supabase'

// Dynamically import heavy below-the-fold sections
const About = dynamic(() => import('@/components/sections/About'), { ssr: false })
const AgenticAI = dynamic(() => import('@/components/sections/AgenticAI'), { ssr: false })
const MCPServers = dynamic(() => import('@/components/sections/MCPServers'), { ssr: false })
const AIWorkflows = dynamic(() => import('@/components/sections/AIWorkflows'), { ssr: false })
const Services = dynamic(() => import('@/components/sections/Services'), { ssr: false })
const Projects = dynamic(() => import('@/components/sections/Projects'), { ssr: false })
const TechStack = dynamic(() => import('@/components/sections/TechStack'), { ssr: false })
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), { ssr: false })
const FAQ = dynamic(() => import('@/components/sections/FAQ'), { ssr: false })
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false })


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
