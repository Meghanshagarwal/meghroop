import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
import TechStack from '@/components/sections/TechStack'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'
import WhatsAppButton from '@/components/common/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
