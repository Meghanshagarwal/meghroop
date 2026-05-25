import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import WordPressEngineeringHero from '@/components/sections/WordPressEngineeringHero'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import WordPressWhatWeBuild from '@/components/sections/WordPressWhatWeBuild'
import WordPressPerformance from '@/components/sections/WordPressPerformance'
import WordPressHeadlessCMS from '@/components/sections/WordPressHeadlessCMS'
import WordPressSEO from '@/components/sections/WordPressSEO'
import WordPressOpinionSection from '@/components/sections/WordPressOpinionSection'
import WordPressAutomation from '@/components/sections/WordPressAutomation'
import WordPressDevelopmentProcess from '@/components/sections/WordPressDevelopmentProcess'
import WordPressTechStack from '@/components/sections/WordPressTechStack'
import WordPressFAQ from '@/components/sections/WordPressFAQ'
import WordPressCTA from '@/components/sections/WordPressCTA'

export const metadata: Metadata = {
  title: 'Headless WordPress & Custom CMS Engineering',
  description: 'Expert custom WordPress development and headless CMS engineering. We build high-performance publishing systems and scalable content infrastructures.',
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
