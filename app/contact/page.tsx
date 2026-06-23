import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import BreadcrumbJsonLd from '@/components/common/BreadcrumbJsonLd'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

// Import Contact Section Components
import ContactHero from '@/components/sections/ContactHero'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import ContactExperience from '@/components/sections/ContactExperience'
import ContactWhatFor from '@/components/sections/ContactWhatFor'
import ContactWorkflow from '@/components/sections/ContactWorkflow'
import ContactInternetNative from '@/components/sections/ContactInternetNative'
import ContactMinimalDetails from '@/components/sections/ContactMinimalDetails'
import ContactHumanMoment from '@/components/sections/ContactHumanMoment'
import ContactFAQ from '@/components/sections/ContactFAQ'
import ContactCTA from '@/components/sections/ContactCTA'


export const metadata: Metadata = {
  title: 'Contact MeghRoop — Start a Growth, AI or Software Project',
  description:
    'Tell us what you want to build or grow — performance marketing, AI agents & automation, custom software, Shopify, WordPress, or branding. We reply within 24 hours.',
  keywords: [
    'Growth marketing agency contact',
    'AI automation agency',
    'AI agents development',
    'custom software development',
    'Shopify development',
    'WordPress development',
    'branding agency',
    'performance marketing',
    'AI agency India',
    'MeghRoop Contact',
  ],
  openGraph: {
    title: 'Contact MeghRoop — Growth, AI & Software Agency',
    description:
      'Start a conversation about performance marketing, AI agents & automation, custom software, Shopify, WordPress, or branding. We reply within 24 hours.',
    url: 'https://meghroop.tech/contact',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact MeghRoop — Growth, AI & Software Agency',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MeghRoop — Growth, AI & Software Agency',
    description:
      'Talk directly to the founders about growth, AI, software, commerce, and branding. We reply within 24 hours.',
    images: ['https://meghroop.tech/og-image-contact.jpg'],
  },
  alternates: {
    canonical: 'https://meghroop.tech/contact',
  },
}

export default function ContactPage() {
  // Inject structured JSON-LD contact and organization schema for crawlers
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'mainEntity': {
      '@type': 'ProfessionalService',
      'name': 'MeghRoop',
      'description': 'A Growth, AI and Software agency — performance marketing, AI agents & automation, custom software, Shopify, WordPress, and branding.',
      'url': 'https://meghroop.tech',
      'email': 'hello@meghroop.tech',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'IN',
        'addressLocality': 'India'
      },
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer support',
        'email': 'hello@meghroop.tech',
        'url': 'https://meghroop.tech/contact'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <BreadcrumbJsonLd items={[{ name: 'Contact', path: '/contact' }]} />
      <main id="main-content">
        <ContactHero />
        <ContactExperience />
        <ContactWhatFor />
        <ContactWorkflow />
        <ContactInternetNative />
        <ContactMinimalDetails />
        <ContactHumanMoment />
        <ContactFAQ />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
