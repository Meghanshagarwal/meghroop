// Single source of truth for the /ai-agents/* sub-pages.
// Consumed by the Navbar dropdown and the Footer so these pages are
// discoverable (previously they were orphan routes with no menu links).

export interface AIAgentLink {
  label: string
  href: string
  description: string
}

export const aiAgentLinks: AIAgentLink[] = [
  {
    label: 'Custom AI Agents',
    href: '/ai-agents/custom-ai-agents',
    description: 'Purpose-built agents wired into your tools and data',
  },
  {
    label: 'Agentic Automation',
    href: '/ai-agents/agentic-automation',
    description: 'Autonomous, multi-step workflows that run themselves',
  },
  {
    label: 'AI Voice Agents',
    href: '/ai-agents/ai-voice-agents',
    description: 'Natural-sounding voice agents for calls and support',
  },
  {
    label: 'Sales AI',
    href: '/ai-agents/sales-ai',
    description: 'Lead generation and sales automation that converts',
  },
  {
    label: 'Knowledge Intelligence',
    href: '/ai-agents/knowledge-intelligence',
    description: 'Turn your docs and data into instant answers',
  },
  {
    label: 'AI Integration',
    href: '/ai-agents/ai-integration',
    description: 'Wire AI into your existing CRM and stack',
  },
  {
    label: 'AI Strategy Audit',
    href: '/ai-agents/ai-strategy-audit',
    description: 'Find where AI actually moves the needle first',
  },
]
