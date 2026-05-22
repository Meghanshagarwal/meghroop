import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

// Import Contact Section Components
import ContactHero from '@/components/sections/ContactHero'

// Dynamically import below-the-fold sections
const ContactExperience = dynamic(() => import('@/components/sections/ContactExperience'), { ssr: false })
const ContactWhatFor = dynamic(() => import('@/components/sections/ContactWhatFor'), { ssr: false })
const ContactWorkflow = dynamic(() => import('@/components/sections/ContactWorkflow'), { ssr: false })
const ContactInternetNative = dynamic(() => import('@/components/sections/ContactInternetNative'), { ssr: false })
const ContactMinimalDetails = dynamic(() => import('@/components/sections/ContactMinimalDetails'), { ssr: false })
const ContactHumanMoment = dynamic(() => import('@/components/sections/ContactHumanMoment'), { ssr: false })
const ContactFAQ = dynamic(() => import('@/components/sections/ContactFAQ'), { ssr: false })
const ContactCTA = dynamic(() => import('@/components/sections/ContactCTA'), { ssr: false })


export const metadata: Metadata = {
  title: 'Contact MeghRoop | AI Engineering & Web Development Studio',
  description:
    'Start a conversation about your next system. Inquire about custom AI automation, headless Shopify frontends, and high-performance digital architectures.',
  keywords: [
    'Contact AI Engineering Studio',
    'Web Development Agency Contact',
    'AI Automation Studio',
    'Shopify Development Contact',
    'WordPress Development Contact',
    'n8n Automation Services',
    'AI Systems Development',
    'Web Engineering Studio',
    'Creative Technology Studio',
    'Digital Systems Agency',
    'MeghRoop Contact',
  ],
  openGraph: {
    title: 'Contact MeghRoop | Modern AI & Digital Systems Studio',
    description:
      'Inquire about custom AI agents, automated workflow systems, static Next.js commerce architectures, and borderless design collaborations.',
    url: 'https://meghroop.tech/contact',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact MeghRoop - AI Engineering & Creative Technology Studio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MeghRoop | Intelligent AI & Web Operations',
    description:
      'Connect directly with our engineering duo to blueprint custom web frontends and automated operations.',
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
      'description': 'A premium AI engineering and creative technology studio building high-performance websites and automated workflows.',
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
