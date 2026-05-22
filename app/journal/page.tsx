import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import JournalCatalog from '@/components/sections/JournalCatalog'
import { articles } from '@/lib/journal'

export const metadata: Metadata = {
  title: 'Engineering Journal | AI Insights, Web Architecture & Custom Workflows | MeghRoop',
  description:
    'Deep engineering logs, strategic playbooks, and structural explorations on Generative Engine Optimization (GEO), Model Context Protocol (MCP) networks, headless commerce speeds, and autonomous workflow automation systems.',
  keywords: [
    'AI Engineering Journal',
    'Model Context Protocol',
    'Generative Engine Optimization',
    'GEO playbook',
    'Headless Shopify Next.js',
    'n8n workflow automation',
    'AI agent development',
    'autonomous AI systems',
    'software engineering studio',
    'MeghRoop Journal',
    'high-performance web architecture'
  ],
  openGraph: {
    title: 'MeghRoop Studio Engineering Journal | AI & Web Infrastructure Logs',
    description:
      'Explore deep architectural playbooks on building resilient AI networks, optimizing for generative engines, and delivering sub-400ms web experiences.',
    url: 'https://meghroop.tech/journal',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop Studio Engineering Journal - AI & Systems Architecture',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering Journal | AI & Web Architectures | MeghRoop',
    description: 'Deep technical articles exploring MCP grounded layers, Generative Engine Optimization, headless shopify, and self-healing n8n automations.',
  },
  alternates: {
    canonical: 'https://meghroop.tech/journal',
  },
}

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <JournalCatalog articles={articles} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
