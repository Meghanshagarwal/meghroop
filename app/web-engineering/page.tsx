import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import WebEngineeringHero from '@/components/sections/WebEngineeringHero'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import WebEngineeringWhatWeBuild from '@/components/sections/WebEngineeringWhatWeBuild'
import DesignEngineering from '@/components/sections/DesignEngineering'
import PerformanceSection from '@/components/sections/PerformanceSection'
import CinematicUISection from '@/components/sections/CinematicUISection'
import WhyWebsitesFeelDead from '@/components/sections/WhyWebsitesFeelDead'
import DevelopmentProcess from '@/components/sections/DevelopmentProcess'
import WebEngineeringTechStack from '@/components/sections/WebEngineeringTechStack'
import WebEngineeringFAQ from '@/components/sections/WebEngineeringFAQ'
import WebEngineeringCTA from '@/components/sections/WebEngineeringCTA'

export const metadata: Metadata = {
  title: 'Next.js & Web Engineering',
  description: 'Premium Next.js web engineering and frontend development services. We build fast, secure React applications and high-fidelity user experiences.',
  keywords: [
    'web engineering',
    'website development',
    'custom web development',
    'Next.js development',
    'React development',
    'frontend engineering',
    'UI engineering',
    'performance optimization',
    'modern web development',
    'responsive websites',
    'premium web design',
    'scalable web systems',
    'UI/UX engineering',
    'high performance websites',
    'web application development',
    'headless web solutions',
    'interactive web experiences',
  ],
  openGraph: {
    title: 'Next.js Web Engineering & Frontend Development Studio | MeghRoop',
    description:
      'Premium web engineering services. Fast, beautiful, scalable websites built with Next.js, React, and modern frontend systems.',
    url: 'https://meghroop.tech/web-engineering',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop Web Engineering Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Web Engineering & Frontend Development Studio | MeghRoop',
    description: 'Premium web engineering. Fast, beautiful, scalable websites built with Next.js, React, and modern systems.',
  },
  alternates: {
    canonical: 'https://meghroop.tech/web-engineering',
  },
}

export default function WebEngineeringPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <WebEngineeringHero />
        <WebEngineeringWhatWeBuild />
        <DesignEngineering />
        <PerformanceSection />
        <CinematicUISection />
        <WhyWebsitesFeelDead />
        <DevelopmentProcess />
        <WebEngineeringTechStack />
        <WebEngineeringFAQ />
        <WebEngineeringCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
