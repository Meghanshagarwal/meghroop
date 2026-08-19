import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import AiAutomationJaipurPage from '@/components/sections/AiAutomationJaipurPage'
import AiAutomationJaipurJsonLd from '@/components/common/AiAutomationJaipurJsonLd'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'
const PAGE_PATH = '/ai-automation-agency-jaipur'

// Dedicated pillar page for MeghRoop's home-base keyword — "AI Automation
// Agency in Jaipur". Jaipur is where we're actually based, so this gets a
// real, deep, unique page instead of the generic {service}x{location}
// template used for the other ~30 city combos (see data/localSeo.ts, which
// excludes this exact combo so the dynamic app/[slug]/page.tsx route never
// serves it — this static route takes precedence at the same URL).
export const metadata: Metadata = {
  title: 'AI Automation Agency in Jaipur | MeghRoop',
  description:
    'MeghRoop is an AI agent development company based in Jaipur — AI agents, n8n workflows, WhatsApp & CRM automation.',
  alternates: { canonical: `${SITE_URL}${PAGE_PATH}` },
  openGraph: {
    title: 'AI Automation Agency in Jaipur | MeghRoop',
    description:
      'AI agents, n8n workflows, and WhatsApp/CRM automation — designed, built, and supported from Jaipur, Rajasthan.',
    url: `${SITE_URL}${PAGE_PATH}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency in Jaipur | MeghRoop',
    description: 'AI agents, n8n workflows, and WhatsApp/CRM automation built and supported from Jaipur.',
  },
}

export default function Page() {
  return (
    <>
      <AiAutomationJaipurJsonLd />
      <Navbar />
      <AiAutomationJaipurPage />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
