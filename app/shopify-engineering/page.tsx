import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ShopifyEngineeringHero from '@/components/sections/ShopifyEngineeringHero'
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
  title: 'Shopify Engineering & Development Services | Premium Ecommerce Storefronts',
  description: 'Expert Shopify development and engineering. Custom storefronts, headless commerce, automation systems, and high-performance ecommerce solutions. Build modern Shopify stores that convert.',
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
    title: 'Premium Shopify Engineering & Ecommerce Development',
    description:
      'Custom Shopify storefronts and engineering. Fast, modern, conversion-focused ecommerce solutions. Automation systems, headless commerce, and AI-powered experiences.',
    url: 'https://meghroop.com/shopify-engineering',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop Shopify Engineering Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Shopify Engineering & Ecommerce Development',
    description: 'Custom Shopify storefronts built for conversion. Fast, modern, automation-ready ecommerce systems.',
  },
  alternates: {
    canonical: 'https://meghroop.com/shopify-engineering',
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
