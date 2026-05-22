import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import WebEngineeringHero from '@/components/sections/WebEngineeringHero'

// Dynamic below-the-fold imports
const WebEngineeringWhatWeBuild = dynamic(() => import('@/components/sections/WebEngineeringWhatWeBuild'), { ssr: false })
const DesignEngineering = dynamic(() => import('@/components/sections/DesignEngineering'), { ssr: false })
const PerformanceSection = dynamic(() => import('@/components/sections/PerformanceSection'), { ssr: false })
const CinematicUISection = dynamic(() => import('@/components/sections/CinematicUISection'), { ssr: false })
const WhyWebsitesFeelDead = dynamic(() => import('@/components/sections/WhyWebsitesFeelDead'), { ssr: false })
const DevelopmentProcess = dynamic(() => import('@/components/sections/DevelopmentProcess'), { ssr: false })
const WebEngineeringTechStack = dynamic(() => import('@/components/sections/WebEngineeringTechStack'), { ssr: false })
const WebEngineeringFAQ = dynamic(() => import('@/components/sections/WebEngineeringFAQ'), { ssr: false })
const WebEngineeringCTA = dynamic(() => import('@/components/sections/WebEngineeringCTA'), { ssr: false })

export const metadata: Metadata = {
  title: 'Next.js Web Engineering & Frontend Development Studio | MeghRoop',
  description: 'Premium Next.js web engineering services. We develop fast, scalable, and beautifully designed web systems, React applications, and custom cinematic user experiences.',
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
