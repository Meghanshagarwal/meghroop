import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
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
  title: 'AI Search Optimization & GEO (Generative Engine Optimization) | MeghRoop',
  description: 'Premium AI search optimization and GEO (Generative Engine Optimization) services. Optimize your semantic architecture, knowledge graphs, and entities to rank inside Perplexity, Claude, ChatGPT, and Gemini.',
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
  },
  alternates: {
    canonical: 'https://meghroop.tech/ai-search-optimization',
  },
}

export default function AISearchOptimizationPage() {
  return (
    <>
      <Navbar />
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
