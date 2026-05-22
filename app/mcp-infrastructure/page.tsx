import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import MCPInfrastructureHero from '@/components/sections/MCPInfrastructureHero'

// Dynamic below-the-fold imports
const MCPWhatItMeans = dynamic(() => import('@/components/sections/MCPWhatItMeans'), { ssr: false })
const MCPHowItWorks = dynamic(() => import('@/components/sections/MCPHowItWorks'), { ssr: false })
const MCPAIAgents = dynamic(() => import('@/components/sections/MCPAIAgents'), { ssr: false })
const MCPIntelligentInfrastructure = dynamic(() => import('@/components/sections/MCPIntelligentInfrastructure'), { ssr: false })
const MCPWhySystemsFeelLimited = dynamic(() => import('@/components/sections/MCPWhySystemsFeelLimited'), { ssr: false })
const MCPUseCases = dynamic(() => import('@/components/sections/MCPUseCases'), { ssr: false })
const MCPDevelopmentProcess = dynamic(() => import('@/components/sections/MCPDevelopmentProcess'), { ssr: false })
const MCPTechStack = dynamic(() => import('@/components/sections/MCPTechStack'), { ssr: false })
const MCPFAQ = dynamic(() => import('@/components/sections/MCPFAQ'), { ssr: false })
const MCPCTA = dynamic(() => import('@/components/sections/MCPCTA'), { ssr: false })

export const metadata: Metadata = {
  title: 'MCP Infrastructure & AI Agent Integration | Model Context Protocol | MeghRoop',
  description:
    'Custom Model Context Protocol (MCP) infrastructure, vector database memory pools, and intelligent agent backend orchestration. We build context-aware AI systems grounded in reality.',
  keywords: [
    'MCP Infrastructure',
    'MCP Servers',
    'AI Infrastructure',
    'AI Context Systems',
    'Context Engineering',
    'AI Memory Systems',
    'AI Orchestration',
    'AI Workflows',
    'Agent Infrastructure',
    'Context-Aware AI',
    'AI Integrations',
    'AI Backend Systems',
    'Intelligent Infrastructure',
    'AI System Architecture',
    'Model Context Protocol',
    'MeghRoop',
    'Next.js AI Development',
  ],
  openGraph: {
    title: 'MCP Infrastructure & AI Agent Integration | Model Context Protocol | MeghRoop',
    description:
      'Turn disconnected AI models into powerful, grounded enterprise systems. Custom Model Context Protocol servers, vector memory layers, and secure orchestration pipelines.',
    url: 'https://meghroop.tech/mcp-infrastructure',
    siteName: 'MeghRoop',
    images: [
      {
        url: 'https://meghroop.tech/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MeghRoop MCP Infrastructure & Context Systems Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCP Infrastructure & AI Agent Integration | Model Context Protocol | MeghRoop',
    description: 'We build the secure, resilient context gateways that let AI talk directly to your databases, APIs, and tools.',
  },
  alternates: {
    canonical: 'https://meghroop.tech/mcp-infrastructure',
  },
}

export default function MCPInfrastructurePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <MCPInfrastructureHero />
        <MCPWhatItMeans />
        <MCPHowItWorks />
        <MCPAIAgents />
        <MCPIntelligentInfrastructure />
        <MCPWhySystemsFeelLimited />
        <MCPUseCases />
        <MCPDevelopmentProcess />
        <MCPTechStack />
        <MCPFAQ />
        <MCPCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
