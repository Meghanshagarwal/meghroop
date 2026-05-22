import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import WebEngineeringHero from '@/components/sections/WebEngineeringHero'
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
  title: 'Web Engineering & Modern Website Development | MeghRoop',
  description: 'Premium web engineering services. Custom websites, Next.js development, React applications, UI engineering, and high-performance web systems. Modern frontend architecture for startups and enterprises.',
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
    title: 'Web Engineering & Modern Website Development | MeghRoop',
    description:
      'Premium web engineering services. Fast, beautiful, scalable websites built with Next.js, React, and modern frontend systems. Custom web development for startups and enterprises.',
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
    title: 'Web Engineering & Modern Website Development | MeghRoop',
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
