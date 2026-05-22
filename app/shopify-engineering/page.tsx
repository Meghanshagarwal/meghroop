import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ShopifyEngineeringHero from '@/components/sections/ShopifyEngineeringHero'

// Dynamic below-the-fold imports
const ShopifyEngineeringWhatWeBuild = dynamic(() => import('@/components/sections/ShopifyEngineeringWhatWeBuild'), { ssr: false })
const ShopifyAISection = dynamic(() => import('@/components/sections/ShopifyAISection'), { ssr: false })
const ShopifyPerformanceSection = dynamic(() => import('@/components/sections/ShopifyPerformanceSection'), { ssr: false })
const CinematicCommerceUI = dynamic(() => import('@/components/sections/CinematicCommerceUI'), { ssr: false })
const WhyStoresFeelGeneric = dynamic(() => import('@/components/sections/WhyStoresFeelGeneric'), { ssr: false })
const ShopifyAutomationSection = dynamic(() => import('@/components/sections/ShopifyAutomationSection'), { ssr: false })
const ShopifyProcessSection = dynamic(() => import('@/components/sections/ShopifyProcessSection'), { ssr: false })
const ShopifyTechStack = dynamic(() => import('@/components/sections/ShopifyTechStack'), { ssr: false })
const ShopifyEngineeringFAQ = dynamic(() => import('@/components/sections/ShopifyEngineeringFAQ'), { ssr: false })
const ShopifyEngineeringCTA = dynamic(() => import('@/components/sections/ShopifyEngineeringCTA'), { ssr: false })

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
