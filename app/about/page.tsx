import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import BreadcrumbJsonLd from '@/components/common/BreadcrumbJsonLd'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

// Import About Section Components
import AboutHero from '@/components/sections/AboutHero'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import AboutWho from '@/components/sections/AboutWho'
import AboutBeliefs from '@/components/sections/AboutBeliefs'
import AboutProcess from '@/components/sections/AboutProcess'
import AboutWhatWeBuild from '@/components/sections/AboutWhatWeBuild'
import AboutPhilosophy from '@/components/sections/AboutPhilosophy'
import AboutAtmosphere from '@/components/sections/AboutAtmosphere'
import AboutFounders from '@/components/sections/AboutFounders'
import AboutHuman from '@/components/sections/AboutHuman'
import AboutCTA from '@/components/sections/AboutCTA'


export const metadata: Metadata = {
  title: 'About MeghRoop — Growth, AI & Software Agency',
  description:
    'Two founders running a Growth, AI and Software agency. Meet Meghansh & Roop and see how we help businesses grow through performance marketing, AI automation, software, commerce, and branding.',
  keywords: [
    'Growth marketing agency',
    'AI automation agency',
    'AI agents development',
    'custom software development',
    'Shopify development',
    'WordPress development',
    'branding agency',
    'performance marketing',
    'founder-led agency',
    'AI agency India',
    'MeghRoop About',
    'Meghansh',
    'Roop',
  ],
  openGraph: {
    title: 'About MeghRoop — Growth, AI & Software Agency',
    description:
      'Meet the founders, Meghansh & Roop. We run growth, AI automation, custom software, Shopify & WordPress, and branding under one roof — from awareness to automation.',
    url: 'https://meghroop.tech/about',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About MeghRoop — Growth, AI & Software Agency',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MeghRoop — Growth, AI & Software Agency',
    description:
      'A founder-led agency running growth, AI automation, software, commerce, and branding under one roof. From awareness to automation, from code to customers.',
    images: ['https://meghroop.tech/og-image-about.jpg'],
  },
  alternates: {
    canonical: 'https://meghroop.tech/about',
  },
}

export default function AboutPage() {
  // Inject structured JSON-LD organization and about schema for search engine crawlers
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'mainEntity': {
      '@type': 'ProfessionalService',
      'name': 'MeghRoop',
      'description': 'A Growth, AI and Software agency — performance marketing, AI agents & automation, custom software, Shopify, WordPress, and branding.',
      'url': 'https://meghroop.tech',
      'founder': [
        {
          '@type': 'Person',
          'name': 'Meghansh',
        },
        {
          '@type': 'Person',
          'name': 'Roop',
        }
      ],
      'areaServed': 'Worldwide',
      'knowsAbout': [
        'Performance Marketing',
        'AI Agents & Automation',
        'Custom Software Development',
        'Shopify & WordPress Development',
        'Branding & Creative'
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <BreadcrumbJsonLd items={[{ name: 'About', path: '/about' }]} />
      <main id="main-content">
        <AboutHero />
        <AboutWho />
        <AboutBeliefs />
        <AboutProcess />
        <AboutWhatWeBuild />
        <AboutPhilosophy />
        <AboutAtmosphere />
        <AboutFounders />
        <AboutHuman />
        <AboutCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
