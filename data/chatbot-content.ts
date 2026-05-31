export interface FAQResponse {
  keywords: string[]
  answer: string
  followUpQuestion?: string
  options?: string[]
}

export interface ServiceProfile {
  title: string
  brief: string
  consultationPrompt: string
}

export const CHATBOT_BRAND = {
  name: 'MeghRoop Assistant',
  avatar: '/favicon.svg',
  welcomeText: '👋 Welcome to MeghRoop.\n\nWe build AI Automation, AI Agents, MCP Infrastructure, Shopify Experiences, and Modern Web Systems.\n\nHow can we help today?',
  whatsappNumber: '+91 8949508264',
  whatsappUrl: 'https://wa.me/918949508264',
}

export const QUICK_ACTIONS = [
  'AI Automation',
  'AI Agents',
  'MCP Infrastructure',
  'Shopify Development',
  'Web Development',
  'n8n Workflows',
  'AI Search Optimization',
  'Book a Call'
]

export const SERVICES_PROFILES: Record<string, ServiceProfile> = {
  'AI Automation': {
    title: 'AI Automation',
    brief: 'We help businesses automate repetitive work using self-healing n8n automation pipelines, LangChain, and grounded data models. Most clients save 10–15 hours per week.',
    consultationPrompt: 'Would you like a free consultation on how to automate your workflows?'
  },
  'AI Agents': {
    title: 'AI Agents',
    brief: 'We build bespoke autonomous AI agents that can reason, plan, and execute tasks directly across your tools, database, and internal systems.',
    consultationPrompt: 'Would you like a free engineering call to map out an autonomous agent for your business?'
  },
  'MCP Infrastructure': {
    title: 'MCP Infrastructure',
    brief: 'We engineer Model Context Protocol (MCP) servers and memory layers that ground AI models directly in your databases and private APIs, eliminating hallucinations.',
    consultationPrompt: 'Would you like to explore setting up custom secure MCP gateways for your data?'
  },
  'Shopify Development': {
    title: 'Shopify Development',
    brief: 'We build ultra-fast sub-400ms headless Shopify storefronts on Next.js, and engineer custom AI integrations for inventory, carts, and support.',
    consultationPrompt: 'Would you like to audit your store speed and discuss a custom headless storefront?'
  },
  'Web Development': {
    title: 'Web Development',
    brief: 'We design and engineer high-performance bespoke React, Next.js, and Node.js web platforms built correctly, with clean architecture and perfect responsiveness.',
    consultationPrompt: 'Would you like to schedule a discovery call for your custom web application?'
  },
  'n8n Workflows': {
    title: 'n8n Workflows',
    brief: 'We specialize in constructing complex n8n workflows featuring exponential backoff retries and robust human-in-the-loop failover triggers.',
    consultationPrompt: 'Would you like to build an enterprise-grade automated pipeline on n8n?'
  },
  'AI Search Optimization': {
    title: 'AI Search Optimization',
    brief: 'Generative Engine Optimization (GEO) keeps your brand visible, highly fact-dense, and cited inside ChatGPT Search, Perplexity, and Google AI Overviews.',
    consultationPrompt: 'Would you like to audit your AI search visibility and set up a GEO campaign?'
  }
}

export const KNOWLEDGE_BASE: Record<string, FAQResponse> = {
  pricing: {
    keywords: ['price', 'pricing', 'cost', 'how much', 'rate', 'fees', 'budget'],
    answer: 'We operate on a project-basis with clear, fixed pricing tailored to the scope of what we build. There are no hidden fees or agency markup layers because you work directly with our founders and core engineers.\n\nAI automation workflows typically start from $1,500, custom high-performance web platforms from $3,500, and comprehensive custom AI agent systems depending on complexity.',
    followUpQuestion: 'Would you like to get a custom price quote for your project?',
    options: ['Request Quote', 'See Services', 'Main Menu']
  },
  timeline: {
    keywords: ['timeline', 'time', 'how long', 'weeks', 'days', 'duration', 'speed'],
    answer: 'We build fast and ship properly. A standard n8n workflow or MCP integration takes about 1 to 2 weeks. Custom Next.js web applications and headless Shopify storefronts usually take 3 to 6 weeks depending on features.\n\nBecause we are a focused two-person team, there are no administrative delays. We start coding immediately.',
    followUpQuestion: 'Do you have an upcoming project deadline you would like to discuss?',
    options: ['Book a Call', 'Main Menu']
  },
  services: {
    keywords: ['services', 'capabilities', 'what do you do', 'offer', 'what you build'],
    answer: 'Our core capabilities are divided into five strategic engineering pillars:\n\n1. **AI Agents & Reasoning Systems**\n2. **n8n Workflow Automation**\n3. **MCP Secure Gateways & Infrastructure**\n4. **Headless Shopify & Web Engineering**\n5. **GEO (Generative Engine Optimization)**',
    options: ['AI Agents', 'Shopify Development', 'n8n Workflows', 'Main Menu']
  },
  shopify: {
    keywords: ['shopify', 'ecommerce', 'store', 'headless shopify', 'cart', 'checkout'],
    answer: 'We engineer ultra-fast, edge-cached headless Shopify storefronts using Next.js and the Storefront GraphQL API. By bypassing monolithic themes, we achieve sub-400ms loading speeds and eliminate cumulative layout shifts, boosting mobile conversion rates.',
    followUpQuestion: 'Would you like to audit your existing store speed?',
    options: ['Request Audit', 'Shopify Development', 'Main Menu']
  },
  ai_automation: {
    keywords: ['ai automation', 'automation', 'automate', 'workflows', 'pipeline'],
    answer: 'We build autonomous, AI-driven automation pipelines. We connect your databases, CRMs, emails, and internal communication nodes using open standards so your team can focus on high-impact work.',
    followUpQuestion: 'Would you like a free workflow optimization draft?',
    options: ['Get Consultation', 'AI Automation', 'Main Menu']
  },
  mcp: {
    keywords: ['mcp', 'model context protocol', 'mcp servers', 'grounding', 'context'],
    answer: 'Model Context Protocol (MCP) is the open standard that connects LLMs to real data. We build secure MCP servers (running in isolated serverless or VPC environments) that supply your AI client with real, schema-grounded context.',
    options: ['MCP Infrastructure', 'Book a Call', 'Main Menu']
  },
  n8n: {
    keywords: ['n8n', 'n8n workflows', 'workflow trigger', 'failover'],
    answer: 'n8n is an incredibly extensible node-based automation platform. We build enterprise n8n pipelines configured with exponential backoffs, automatic error triggers, and Slack-integrated human-in-the-loop fallback nodes.',
    options: ['n8n Workflows', 'Main Menu']
  },
  custom_development: {
    keywords: ['custom development', 'coding', 'react', 'next.js', 'node', 'database'],
    answer: 'We write clean, performance-optimized code in React, Next.js, and TypeScript, backed by lightweight databases (Supabase, PostgreSQL). Everything we ship is built server-side first, visually stable, and fully scale-tested.',
    options: ['Web Development', 'Main Menu']
  },
  support: {
    keywords: ['support', 'help', 'maintenance', 'contact', 'reach out', 'whatsapp'],
    answer: 'We stand by what we build. Every project we ship comes with 30 days of comprehensive hyper-care support covering bug fixes, speed audits, and workflow tuning. Extended retainers are available for ongoing engineering support.',
    options: ['Book a Call', 'Main Menu']
  }
}
