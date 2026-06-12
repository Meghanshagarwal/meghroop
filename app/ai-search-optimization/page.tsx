import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import BreadcrumbJsonLd from '@/components/common/BreadcrumbJsonLd'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import AISearchOptimizationHero from '@/components/sections/AISearchOptimizationHero'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import AISearchOptimizationWhatItMeans from '@/components/sections/AISearchOptimizationWhatItMeans'
import AISearchOptimizationHowItWorks from '@/components/sections/AISearchOptimizationHowItWorks'
import AISearchOptimizationTechnicalSEO from '@/components/sections/AISearchOptimizationTechnicalSEO'
import AISearchOptimizationEntity from '@/components/sections/AISearchOptimizationEntity'
import AISearchOptimizationWhyChanging from '@/components/sections/AISearchOptimizationWhyChanging'
import AISearchOptimizationWebStructure from '@/components/sections/AISearchOptimizationWebStructure'
import AISearchOptimizationProcess from '@/components/sections/AISearchOptimizationProcess'
import AISearchOptimizationTechStack from '@/components/sections/AISearchOptimizationTechStack'
import AISearchOptimizationFAQ from '@/components/sections/AISearchOptimizationFAQ'
import AISearchOptimizationCTA from '@/components/sections/AISearchOptimizationCTA'

export const metadata: Metadata = {
  title: 'AI Search Optimization & GEO Engine Ranking',
  description: 'Premium AI search optimization & GEO services. Optimize your semantic architecture and entity nodes to cite your brand inside ChatGPT & Perplexity.',
  keywords: [
    'AI search optimization',
    'AI SEO',
    'GEO optimization',
    'Generative engine optimization',
    'AI discoverability',
    'AI search results',
    'semantic SEO',
    'technical SEO',
    'structured data',
    'AI crawlers',
    'search optimization',
    'entity SEO',
    'AI visibility',
    'LLM optimization',
    'AI ranking systems',
    'AI-readable architecture',
    'schema markup',
    'knowledge graphs',
  ],
  openGraph: {
    title: 'AI Search Optimization & GEO (Generative Engine Optimization) | MeghRoop',
    description:
      'Premium AI search optimization. Semantic SEO, structured data, GEO optimization, and AI discoverability. Build systems AI can actually understand.',
    url: 'https://meghroop.tech/ai-search-optimization',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop AI Search Optimization Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Search Optimization & GEO (Generative Engine Optimization) | MeghRoop',
    description: 'Premium AI search optimization. Semantic SEO, structured data, and AI discoverability for modern search systems.',
    images: ['https://meghroop.tech/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://meghroop.tech/ai-search-optimization',
  },
}

export default function AISearchOptimizationPage() {
  return (
    <>
      <Navbar />
      <BreadcrumbJsonLd items={[{ name: 'AI Search Optimization', path: '/ai-search-optimization' }]} />
      <main id="main-content">
        <AISearchOptimizationHero />
        <AISearchOptimizationWhatItMeans />
        <AISearchOptimizationHowItWorks />
        <AISearchOptimizationTechnicalSEO />
        <AISearchOptimizationEntity />
        <AISearchOptimizationWhyChanging />
        <AISearchOptimizationWebStructure />
        <AISearchOptimizationProcess />
        <AISearchOptimizationTechStack />
        <AISearchOptimizationFAQ />
        <AISearchOptimizationCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
