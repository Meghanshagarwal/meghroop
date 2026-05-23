import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import MCPInfrastructureHero from '@/components/sections/MCPInfrastructureHero'

// Static imports for 100% server-side HTML pre-rendering (SEO & H2 headings)
import MCPWhatItMeans from '@/components/sections/MCPWhatItMeans'
import MCPHowItWorks from '@/components/sections/MCPHowItWorks'
import MCPAIAgents from '@/components/sections/MCPAIAgents'
import MCPIntelligentInfrastructure from '@/components/sections/MCPIntelligentInfrastructure'
import MCPWhySystemsFeelLimited from '@/components/sections/MCPWhySystemsFeelLimited'
import MCPUseCases from '@/components/sections/MCPUseCases'
import MCPDevelopmentProcess from '@/components/sections/MCPDevelopmentProcess'
import MCPTechStack from '@/components/sections/MCPTechStack'
import MCPFAQ from '@/components/sections/MCPFAQ'
import MCPCTA from '@/components/sections/MCPCTA'

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
