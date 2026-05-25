import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import AIAgentsAutomationHero from '@/components/sections/AIAgentsAutomationHero'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import WhatWeBuild from '@/components/sections/WhatWeBuild'
import HowAIAgentsWork from '@/components/sections/HowAIAgentsWork'
import AutomationSystems from '@/components/sections/AutomationSystems'
import MCPContextInfrastructure from '@/components/sections/MCPContextInfrastructure'
import WhyImplementationsFail from '@/components/sections/WhyImplementationsFail'
import AIAgentsProcessSection from '@/components/sections/AIAgentsProcessSection'
import AIAgentsAutomationFAQ from '@/components/sections/AIAgentsAutomationFAQ'
import AIAgentsAutomationCTA from '@/components/sections/AIAgentsAutomationCTA'

export const metadata: Metadata = {
  title: 'Autonomous AI Agents & Workflow Automation',
  description: 'Custom AI agents and autonomous workflow systems. We build agentic AI solutions for operations, sales, and CRMs using n8n and custom MCP servers.',
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
