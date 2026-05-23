import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ShopifyEngineeringHero from '@/components/sections/ShopifyEngineeringHero'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import ShopifyEngineeringWhatWeBuild from '@/components/sections/ShopifyEngineeringWhatWeBuild'
import ShopifyAISection from '@/components/sections/ShopifyAISection'
import ShopifyPerformanceSection from '@/components/sections/ShopifyPerformanceSection'
import CinematicCommerceUI from '@/components/sections/CinematicCommerceUI'
import WhyStoresFeelGeneric from '@/components/sections/WhyStoresFeelGeneric'
import ShopifyAutomationSection from '@/components/sections/ShopifyAutomationSection'
import ShopifyProcessSection from '@/components/sections/ShopifyProcessSection'
import ShopifyTechStack from '@/components/sections/ShopifyTechStack'
import ShopifyEngineeringFAQ from '@/components/sections/ShopifyEngineeringFAQ'
import ShopifyEngineeringCTA from '@/components/sections/ShopifyEngineeringCTA'

export const metadata: Metadata = {
  title: 'Shopify Development & E-commerce Engineering Studio | MeghRoop',
  description: 'Expert Shopify development and custom ecommerce engineering. We build high-performance storefronts, headless commerce architectures, AI-powered automation systems, and premium Next.js ecommerce sites.',
  keywords: [
    'Shopify development',
    'Shopify engineering',
    'Shopify store development',
    'Shopify automation',
    'ecommerce development',
    'Shopify UX',
    'Shopify performance',
    'Shopify Plus',
    'headless Shopify',
    'Shopify store design',
    'ecommerce systems',
    'conversion optimization',
    'AI ecommerce',
    'Shopify workflows',
    'custom storefronts',
    'Shopify Hydrogen',
    'Shopify React',
    'ecommerce infrastructure',
    'premium Shopify development',
    'modern commerce',
  ],
  openGraph: {
    title: 'Shopify Development & E-commerce Engineering Studio | MeghRoop',
    description:
      'High-performance custom Shopify storefronts, headless commerce engineering, AI automations, and premium Next.js ecommerce development.',
    url: 'https://meghroop.tech/shopify-engineering',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop Shopify Engineering Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopify Development & E-commerce Engineering Studio | MeghRoop',
    description: 'Custom Shopify storefronts built for conversion. Fast, modern, automation-ready ecommerce systems.',
  },
  alternates: {
    canonical: 'https://meghroop.tech/shopify-engineering',
  },
}

export default function ShopifyEngineeringPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ShopifyEngineeringHero />
        <ShopifyEngineeringWhatWeBuild />
        <ShopifyAISection />
        <ShopifyPerformanceSection />
        <CinematicCommerceUI />
        <WhyStoresFeelGeneric />
        <ShopifyAutomationSection />
        <ShopifyProcessSection />
        <ShopifyTechStack />
        <ShopifyEngineeringFAQ />
        <ShopifyEngineeringCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
