import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
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
import AboutHuman from '@/components/sections/AboutHuman'
import AboutCTA from '@/components/sections/AboutCTA'


export const metadata: Metadata = {
  title: 'About MeghRoop | AI Engineering & Creative Technology Studio',
  description:
    'Two engineers building modern internet systems. Explore who we are, what we believe, how we work, and the custom AI infrastructures and cinematic storefronts we ship.',
  keywords: [
    'AI Engineering Studio',
    'Web Engineering Studio',
    'Creative Technology Studio',
    'AI Systems',
    'Automation Studio',
    'Modern Web Development',
    'AI Infrastructure',
    'Cinematic Websites',
    'Digital Systems',
    'Shopify Development',
    'WordPress Development',
    'Workflow Automation',
    'Modern Internet Studio',
    'MeghRoop About',
    'Meghansh',
    'Roop',
  ],
  openGraph: {
    title: 'About MeghRoop | Modern Internet & AI Systems Studio',
    description:
      'Explore the design philosophy, automation processes, and technical convictions of Meghansh and Roop. We build custom-engineered storefronts and secure AI systems.',
    url: 'https://meghroop.tech/about',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About MeghRoop - AI Engineering & Creative Technology Studio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MeghRoop | AI & Custom Web Engineering Studio',
    description:
      'We design interfaces that feel inevitable, workflows that govern operational logic, and high-performance custom digital systems built to scale.',
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
      'description': 'A premium AI engineering and creative technology studio building high-performance websites and automated workflows.',
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
        'AI Engineering',
        'Web Engineering',
        'Headless Commerce',
        'Workflow Automation',
        'Custom Software Architectures'
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
      <main id="main-content">
        <AboutHero />
        <AboutWho />
        <AboutBeliefs />
        <AboutProcess />
        <AboutWhatWeBuild />
        <AboutPhilosophy />
        <AboutAtmosphere />
        <AboutHuman />
        <AboutCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
