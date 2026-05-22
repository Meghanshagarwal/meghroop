import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import AIAgentsAutomationHero from '@/components/sections/AIAgentsAutomationHero'

// Dynamic below-the-fold imports
const WhatWeBuild = dynamic(() => import('@/components/sections/WhatWeBuild'), { ssr: false })
const HowAIAgentsWork = dynamic(() => import('@/components/sections/HowAIAgentsWork'), { ssr: false })
const AutomationSystems = dynamic(() => import('@/components/sections/AutomationSystems'), { ssr: false })
const MCPContextInfrastructure = dynamic(() => import('@/components/sections/MCPContextInfrastructure'), { ssr: false })
const WhyImplementationsFail = dynamic(() => import('@/components/sections/WhyImplementationsFail'), { ssr: false })
const AIAgentsProcessSection = dynamic(() => import('@/components/sections/AIAgentsProcessSection'), { ssr: false })
const AIAgentsAutomationFAQ = dynamic(() => import('@/components/sections/AIAgentsAutomationFAQ'), { ssr: false })
const AIAgentsAutomationCTA = dynamic(() => import('@/components/sections/AIAgentsAutomationCTA'), { ssr: false })

export const metadata: Metadata = {
  title: 'AI Agents & Automation Systems | Autonomous Workflow Studio | MeghRoop',
  description: 'Custom AI agents, autonomous workflow orchestration, and intelligent automation systems. We build agentic AI solutions for operations, CRM, sales, and workflows using n8n and custom MCP servers.',
  keywords: [
    'AI agents',
    'AI automation',
    'agentic AI',
    'autonomous workflows',
    'workflow automation',
    'AI systems',
    'n8n automation',
    'AI infrastructure',
    'business automation',
    'MCP servers',
    'AI operations',
    'AI workflow systems',
    'intelligent automation',
    'AI integrations',
  ],
  openGraph: {
    title: 'AI Agents & Automation Systems | Autonomous Workflow Studio | MeghRoop',
    description:
      'Build custom AI agents that reason, plan, and execute. Autonomous workflows for customer support, sales, operations, and business automation.',
    url: 'https://meghroop.tech/ai-agents-automation',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop AI Agents & Automation Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents & Automation Systems | Autonomous Workflow Studio | MeghRoop',
    description: 'Build custom AI agents that reason, plan, and execute. Autonomous workflows for any business process.',
  },
  alternates: {
    canonical: 'https://meghroop.tech/ai-agents-automation',
  },
}

export default function AIAgentsAutomationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <AIAgentsAutomationHero />
        <WhatWeBuild />
        <HowAIAgentsWork />
        <AutomationSystems />
        <MCPContextInfrastructure />
        <WhyImplementationsFail />
        <AIAgentsProcessSection />
        <AIAgentsAutomationFAQ />
        <AIAgentsAutomationCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
