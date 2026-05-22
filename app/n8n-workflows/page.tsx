import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import N8nWorkflowsHero from '@/components/sections/N8nWorkflowsHero'

// Dynamic below-the-fold imports
const N8nWhatWeAutomate = dynamic(() => import('@/components/sections/N8nWhatWeAutomate'), { ssr: false })
const N8nHowWorkflowsWork = dynamic(() => import('@/components/sections/N8nHowWorkflowsWork'), { ssr: false })
const N8nAIAutomation = dynamic(() => import('@/components/sections/N8nAIAutomation'), { ssr: false })
const N8nAPIIntegrations = dynamic(() => import('@/components/sections/N8nAPIIntegrations'), { ssr: false })
const N8nWhyAutomationsFail = dynamic(() => import('@/components/sections/N8nWhyAutomationsFail'), { ssr: false })
const N8nRealBusinessSystems = dynamic(() => import('@/components/sections/N8nRealBusinessSystems'), { ssr: false })
const N8nDevelopmentProcess = dynamic(() => import('@/components/sections/N8nDevelopmentProcess'), { ssr: false })
const N8nTechStack = dynamic(() => import('@/components/sections/N8nTechStack'), { ssr: false })
const N8nFAQ = dynamic(() => import('@/components/sections/N8nFAQ'), { ssr: false })
const N8nCTA = dynamic(() => import('@/components/sections/N8nCTA'), { ssr: false })

export const metadata: Metadata = {
  title: 'n8n Workflows & AI Automation Engineering | MeghRoop',
  description:
    'Premium n8n automation and workflow engineering services. We build custom operational pipelines, CRM automations, complex API integrations, and robust business automation infrastructure.',
  keywords: [
    'n8n automation',
    'workflow automation',
    'business automation',
    'AI workflows',
    'CRM automation',
    'lead automation',
    'process automation',
    'API integrations',
    'workflow orchestration',
    'automation infrastructure',
    'n8n development',
    'backend automation',
    'AI workflow systems',
    'intelligent operations',
    'operational automation',
    'ecommerce automation',
    'webhook automation',
    'automation systems',
    'workflow engineering',
    'automation architecture',
  ],
  openGraph: {
    title: 'n8n Workflows & AI Automation Engineering | MeghRoop',
    description:
      'Premium automation infrastructure. Custom n8n workflows, AI-enhanced automation, CRM automation, API orchestration, and intelligent backend automation.',
    url: 'https://meghroop.tech/n8n-workflows',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop n8n Workflow Automation Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n Workflows & AI Automation Engineering | MeghRoop',
    description:
      'Premium automation infrastructure. Custom n8n workflows, AI-enhanced automation, API orchestration, and intelligent backend automation for your business.',
  },
  alternates: {
    canonical: 'https://meghroop.tech/n8n-workflows',
  },
}

export default function N8nWorkflowsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <N8nWorkflowsHero />
        <N8nWhatWeAutomate />
        <N8nHowWorkflowsWork />
        <N8nAIAutomation />
        <N8nAPIIntegrations />
        <N8nWhyAutomationsFail />
        <N8nRealBusinessSystems />
        <N8nDevelopmentProcess />
        <N8nTechStack />
        <N8nFAQ />
        <N8nCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
