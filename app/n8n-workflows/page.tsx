import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import N8nWorkflowsHero from '@/components/sections/N8nWorkflowsHero'
import N8nWhatWeAutomate from '@/components/sections/N8nWhatWeAutomate'
import N8nHowWorkflowsWork from '@/components/sections/N8nHowWorkflowsWork'
import N8nAIAutomation from '@/components/sections/N8nAIAutomation'
import N8nAPIIntegrations from '@/components/sections/N8nAPIIntegrations'
import N8nWhyAutomationsFail from '@/components/sections/N8nWhyAutomationsFail'
import N8nRealBusinessSystems from '@/components/sections/N8nRealBusinessSystems'
import N8nDevelopmentProcess from '@/components/sections/N8nDevelopmentProcess'
import N8nTechStack from '@/components/sections/N8nTechStack'
import N8nFAQ from '@/components/sections/N8nFAQ'
import N8nCTA from '@/components/sections/N8nCTA'

export const metadata: Metadata = {
  title: 'n8n Workflow Automation & Automation Infrastructure | MeghRoop',
  description:
    'Premium n8n automation services. Workflow automation, business automation, AI workflows, API integrations, and automation infrastructure. Custom n8n workflows for CRM automation, lead routing, ecommerce, and operational systems.',
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
    title: 'n8n Workflow Automation & Business Automation Systems | MeghRoop',
    description:
      'Premium automation infrastructure. Custom n8n workflows, AI-enhanced automation, and operational systems. CRM automation, lead routing, API orchestration, and intelligent backend automation.',
    url: 'https://meghroop.com/n8n-workflows',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop n8n Workflow Automation Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n Workflow Automation & Business Automation Systems | MeghRoop',
    description:
      'Premium automation infrastructure. Custom n8n workflows, AI-enhanced automation, API orchestration, and intelligent backend automation for your business.',
  },
  alternates: {
    canonical: 'https://meghroop.com/n8n-workflows',
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
