import { Metadata } from 'next'
import ServiceDetailTemplate from '@/components/sections/ServiceDetailTemplate'
import { content } from '@/data/services/ai-for-smb'

const SITE_URL = 'https://meghroop.tech'

export const metadata: Metadata = {
  title: 'AI for Small & Mid-Sized Businesses (SMB) | MeghRoop',
  description:
    'Affordable AI services for SMBs and mid-market — voice agents, custom AI, outbound, and knowledge assistants. Fixed-fee, live in weeks. Book a free call.',
  keywords: [
    'AI for SMB',
    'AI for small business',
    'affordable AI services',
    'AI for mid-market',
    'AI voice agents',
    'agent sprint',
    'AI readiness audit',
    'MeghRoop',
  ],
  openGraph: {
    title: 'AI for Small & Mid-Sized Businesses (SMB) | MeghRoop',
    description:
      'Affordable AI services for SMBs and mid-market — voice agents, custom AI, outbound, and knowledge assistants. Fixed-fee, live in weeks.',
    url: `${SITE_URL}/ai-agents/ai-for-smb`,
    siteName: 'MeghRoop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Small & Mid-Sized Businesses (SMB) | MeghRoop',
    description:
      'Affordable AI services for SMBs and mid-market — voice agents, custom AI, outbound, and knowledge assistants. Fixed-fee, live in weeks.',
  },
  alternates: {
    canonical: `${SITE_URL}/ai-agents/ai-for-smb`,
  },
}

export default function AIForSMBPage() {
  return <ServiceDetailTemplate content={content} />
}
