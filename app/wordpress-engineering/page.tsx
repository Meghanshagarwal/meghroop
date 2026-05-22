import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import WordPressEngineeringHero from '@/components/sections/WordPressEngineeringHero'

// Dynamic below-the-fold imports
const WordPressWhatWeBuild = dynamic(() => import('@/components/sections/WordPressWhatWeBuild'), { ssr: false })
const WordPressPerformance = dynamic(() => import('@/components/sections/WordPressPerformance'), { ssr: false })
const WordPressHeadlessCMS = dynamic(() => import('@/components/sections/WordPressHeadlessCMS'), { ssr: false })
const WordPressSEO = dynamic(() => import('@/components/sections/WordPressSEO'), { ssr: false })
const WordPressOpinionSection = dynamic(() => import('@/components/sections/WordPressOpinionSection'), { ssr: false })
const WordPressAutomation = dynamic(() => import('@/components/sections/WordPressAutomation'), { ssr: false })
const WordPressDevelopmentProcess = dynamic(() => import('@/components/sections/WordPressDevelopmentProcess'), { ssr: false })
const WordPressTechStack = dynamic(() => import('@/components/sections/WordPressTechStack'), { ssr: false })
const WordPressFAQ = dynamic(() => import('@/components/sections/WordPressFAQ'), { ssr: false })
const WordPressCTA = dynamic(() => import('@/components/sections/WordPressCTA'), { ssr: false })

export const metadata: Metadata = {
  title: 'WordPress Development & Headless CMS Engineering | MeghRoop',
  description: 'Expert custom WordPress development and headless CMS engineering. We build high-performance, SEO-optimized publishing systems, scalable content infrastructures, and API integrations.',
  keywords: [
    'WordPress development',
    'WordPress engineering',
    'custom WordPress development',
    'WordPress systems',
    'CMS development',
    'SEO-friendly websites',
    'high performance WordPress',
    'headless WordPress',
    'WordPress automation',
    'scalable CMS systems',
    'WordPress UX',
    'publishing systems',
    'business websites',
    'content infrastructure',
    'WordPress performance optimization',
    'WordPress content management',
    'REST API WordPress',
    'WordPress integrations',
  ],
  openGraph: {
    title: 'WordPress Development & Headless CMS Engineering | MeghRoop',
    description:
      'Expert WordPress engineering. Custom publishing systems, headless CMS, SEO-optimized sites, high-performance content infrastructure.',
    url: 'https://meghroop.tech/wordpress-engineering',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop WordPress Engineering Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WordPress Development & Headless CMS Engineering | MeghRoop',
    description: 'Expert WordPress engineering. Custom publishing systems, headless CMS, high-performance content infrastructure.',
  },
  alternates: {
    canonical: 'https://meghroop.tech/wordpress-engineering',
  },
}

export default function WordPressEngineeringPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <WordPressEngineeringHero />
        <WordPressWhatWeBuild />
        <WordPressPerformance />
        <WordPressHeadlessCMS />
        <WordPressSEO />
        <WordPressOpinionSection />
        <WordPressAutomation />
        <WordPressDevelopmentProcess />
        <WordPressTechStack />
        <WordPressFAQ />
        <WordPressCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
