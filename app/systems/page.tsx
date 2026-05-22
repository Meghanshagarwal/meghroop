import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

// Import Section Components
import SystemsHero from '@/components/sections/SystemsHero'

// Dynamically import below-the-fold sections
const SystemsFeaturedGrid = dynamic(() => import('@/components/sections/SystemsFeaturedGrid'), { ssr: false })
const SystemsBreakdown = dynamic(() => import('@/components/sections/SystemsBreakdown'), { ssr: false })
const SystemsThinking = dynamic(() => import('@/components/sections/SystemsThinking'), { ssr: false })
const SystemsLabs = dynamic(() => import('@/components/sections/SystemsLabs'), { ssr: false })
const SystemsOpinion = dynamic(() => import('@/components/sections/SystemsOpinion'), { ssr: false })
const SystemsTechStack = dynamic(() => import('@/components/sections/SystemsTechStack'), { ssr: false })
const SystemsFAQ = dynamic(() => import('@/components/sections/SystemsFAQ'), { ssr: false })
const SystemsCTA = dynamic(() => import('@/components/sections/SystemsCTA'), { ssr: false })

export const metadata: Metadata = {
  title: 'Engineered Systems & Digital Workflows | Web Projects & AI Infrastructure | MeghRoop',
  description:
    'Curated showcase of high-performance custom systems, AI-native infrastructures, Shopify architectures, n8n automations, and intuitive digital interfaces engineered by MeghRoop.',
  keywords: [
    'Web Projects',
    'AI Systems',
    'Automation Systems',
    'Shopify Development',
    'Website Development',
    'Web Engineering',
    'UI/UX Systems',
    'AI Infrastructure',
    'Workflow Automation',
    'Digital Systems',
    'Interactive Experiences',
    'Modern Web Development',
    'Creative Engineering',
    'Frontend Engineering',
    'MeghRoop Systems',
  ],
  openGraph: {
    title: 'Engineered Systems & Bespoke Web Infrastructures | MeghRoop',
    description:
      'Explore selected systems, automated pipelines, custom e-commerce applications, and experimental internet-native user interfaces built with absolute intention.',
    url: 'https://meghroop.tech/systems',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image-systems.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop Custom Systems & Interactive Architectures Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bespoke AI Workflows & Digital Systems | MeghRoop',
    description: 'A curated archive of automated pipelines, high-performance interfaces, and systems built to quietly scale on the modern internet.',
  },
  alternates: {
    canonical: 'https://meghroop.tech/systems',
  },
}

export default function SystemsShowcasePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <SystemsHero />
        <SystemsFeaturedGrid />
        <SystemsBreakdown />
        <SystemsThinking />
        <SystemsLabs />
        <SystemsOpinion />
        <SystemsTechStack />
        <SystemsFAQ />
        <SystemsCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
