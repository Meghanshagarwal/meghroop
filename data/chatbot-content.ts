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
  welcomeText:
    '👋 Welcome to MeghRoop — a Growth, AI & Software agency.\n\nWe help businesses grow with performance marketing, AI agents & automation, custom software, Shopify & WordPress, and branding & creative.\n\nWhat can we help you with today?',
  whatsappNumber: '+91 8949508264',
  whatsappUrl: 'https://wa.me/918949508264',
}

export const QUICK_ACTIONS = [
  'Growth & Marketing',
  'AI Agents & Automation',
  'Software Development',
  'Shopify & WordPress',
  'Branding & Creative',
  'Book a Call',
]

export const SERVICES_PROFILES: Record<string, ServiceProfile> = {
  'Growth & Marketing': {
    title: 'Growth & Marketing',
    brief:
      'We run growth as a system — Meta Ads, Google Ads, SEO, social media management, content creation, and conversion-optimized funnels. Everything is wired to clean tracking, so every rupee of spend has a number attached to it. Clients typically see ROAS around 6×.',
    consultationPrompt: 'Would you like a free growth audit to see where your funnel is leaking?',
  },
  'AI Agents & Automation': {
    title: 'AI Agents & Automation',
    brief:
      'We build custom AI agents and automations that reason, plan, and execute real work — connected to your tools, data, and workflows. Think n8n pipelines, WhatsApp & CRM automation, voice agents, and sales AI. Most clients save 10–15 hours per week.',
    consultationPrompt: 'Want a free call to map out an AI agent or automation for your business?',
  },
  'Software Development': {
    title: 'Software Development',
    brief:
      'We build custom software, web apps, mobile apps, dashboards, APIs, and full SaaS products end to end — React, Next.js, Node.js, TypeScript, PostgreSQL/MongoDB. You own the code, with a clean documented handover.',
    consultationPrompt: 'Would you like to schedule a discovery call for your product or app?',
  },
  'Shopify & WordPress': {
    title: 'Shopify & WordPress',
    brief:
      'We build custom Shopify storefronts, headless commerce on Next.js, and Shopify apps engineered to convert — plus custom WordPress themes and headless WordPress with deep performance optimization. No page-builder bloat, fast load times, SEO baked in.',
    consultationPrompt: 'Would you like a free store/site speed audit and a build plan?',
  },
  'Branding & Creative': {
    title: 'Branding & Creative',
    brief:
      'We craft brand identity, social and ad creative, video editing, and motion graphics — scroll-stopping work that makes your growth and product actually land.',
    consultationPrompt: 'Want to talk through your brand identity or creative needs?',
  },
}

export const KNOWLEDGE_BASE: Record<string, FAQResponse> = {
  pricing: {
    keywords: ['price', 'pricing', 'cost', 'how much', 'rate', 'fees', 'budget'],
    answer:
      'We scope every project individually with clear, fixed pricing — no hidden fees and no agency markup, because you work directly with our founders, Meghansh & Roop.\n\nGrowth & marketing runs on monthly retainers, while software, AI agents, Shopify/WordPress, and branding are fixed-fee per project. The exact number depends on scope.',
    followUpQuestion: 'Would you like a custom quote for what you have in mind?',
    options: ['Book a Call', 'Main Menu'],
  },
  timeline: {
    keywords: ['timeline', 'time', 'how long', 'weeks', 'days', 'duration', 'speed'],
    answer:
      'We build fast and ship properly. Automations and small AI agents usually take 1–2 weeks. Custom websites, Shopify/WordPress builds, and web apps typically take 3–6 weeks depending on scope. Growth campaigns go live within days and compound from there.\n\nBecause we are a focused founder-led team, there are no administrative delays — we start immediately.',
    followUpQuestion: 'Do you have a deadline you would like to hit?',
    options: ['Book a Call', 'Main Menu'],
  },
  services: {
    keywords: ['services', 'capabilities', 'what do you do', 'offer', 'what you build', 'help'],
    answer:
      'MeghRoop is a Growth, AI and Software agency. We help businesses grow across five areas:\n\n1. **Growth & Marketing** — Meta Ads, Google Ads, SEO, social, content\n2. **AI Agents & Automation** — AI agents, n8n, WhatsApp & CRM automation\n3. **Software Development** — custom software, web & mobile apps, SaaS\n4. **Shopify & WordPress** — custom and headless commerce + CMS\n5. **Branding & Creative** — brand identity, video, motion graphics',
    options: ['Growth & Marketing', 'AI Agents & Automation', 'Software Development', 'Main Menu'],
  },
  growth: {
    keywords: ['growth', 'marketing', 'ads', 'meta ads', 'google ads', 'seo', 'social media', 'leads', 'roas', 'performance'],
    answer:
      'We run growth as a system: Meta Ads and Google Ads, SEO, social media management, content creation, and conversion-optimized landing pages and lead-gen funnels. Everything is tied to clean tracking — qualified leads and revenue you can trace, not vanity metrics. Clients typically see ROAS around 6×.',
    followUpQuestion: 'Would you like a free growth audit?',
    options: ['Growth & Marketing', 'Book a Call', 'Main Menu'],
  },
  ai: {
    keywords: ['ai', 'ai agent', 'ai agents', 'agentic', 'automation', 'automate', 'workflow', 'n8n', 'voice agent', 'chatbot', 'sales ai', 'mcp'],
    answer:
      'We build custom AI agents that reason, plan, and execute end-to-end tasks — connected to your tools, data, and real workflows (not chatbot wrappers). We also build n8n automation pipelines, WhatsApp & CRM automation, AI voice agents, and sales AI. Most clients save 10–15 hours per week.',
    followUpQuestion: 'Want to map out an agent or automation for your business?',
    options: ['AI Agents & Automation', 'Book a Call', 'Main Menu'],
  },
  software: {
    keywords: ['software', 'web app', 'mobile app', 'saas', 'custom development', 'react', 'next.js', 'node', 'api', 'database', 'app'],
    answer:
      'We build custom software, web applications, mobile apps, internal dashboards, APIs, and full SaaS products — from MVP to production. Our stack is React, Next.js, Node.js, TypeScript, and PostgreSQL/MongoDB. You own the code, with a clean documented handover.',
    followUpQuestion: 'Would you like a discovery call for your product?',
    options: ['Software Development', 'Book a Call', 'Main Menu'],
  },
  commerce: {
    keywords: ['shopify', 'wordpress', 'ecommerce', 'store', 'cart', 'checkout', 'cms', 'website', 'wp', 'headless'],
    answer:
      'We build custom Shopify storefronts, headless commerce on Next.js, and Shopify apps engineered to convert. For WordPress we build custom themes and blocks, headless WordPress, and deep performance optimization — no page-builder bloat, fast load times, and SEO baked in from the structure up.',
    followUpQuestion: 'Would you like a free store/site speed audit?',
    options: ['Shopify & WordPress', 'Book a Call', 'Main Menu'],
  },
  branding: {
    keywords: ['brand', 'branding', 'identity', 'logo', 'design', 'creative', 'video', 'editing', 'motion', 'content'],
    answer:
      'We craft brand identity, social and ad creative, video editing, and motion graphics. Great targeting and great products still need scroll-stopping creative — we make sure your brand actually lands and reinforces everything else you do.',
    followUpQuestion: 'Want to talk through your brand or creative needs?',
    options: ['Branding & Creative', 'Book a Call', 'Main Menu'],
  },
  geo: {
    keywords: ['geo', 'generative engine', 'ai search', 'chatgpt', 'perplexity', 'ai overviews'],
    answer:
      'GEO (Generative Engine Optimization) is optimizing your content and site structure so AI systems like ChatGPT, Perplexity, Claude, and Google AI Overviews include your brand in their answers. It pairs with traditional SEO — we handle both under Growth & Marketing.',
    options: ['Growth & Marketing', 'Book a Call', 'Main Menu'],
  },
  about: {
    keywords: ['about', 'who are you', 'founders', 'team', 'meghansh', 'roop', 'different', 'why'],
    answer:
      'MeghRoop is a founder-led Growth, AI and Software agency founded in 2022, based in India and serving clients worldwide. You work directly with the people building it — Meghansh & Roop — no account managers, no handoffs, no outsourcing. Growth, AI, software, and branding under one roof, so everything reinforces each other.',
    options: ['Book a Call', 'Main Menu'],
  },
  location: {
    keywords: ['location', 'where', 'based', 'country', 'india', 'remote', 'worldwide', 'timezone'],
    answer:
      'We are based in India and work with clients worldwide — we have delivered projects across the US, UK, Europe, and Asia. We work asynchronously across time zones and keep communication direct and responsive.',
    options: ['Book a Call', 'Main Menu'],
  },
  getting_started: {
    keywords: ['start', 'get started', 'begin', 'next step', 'how do i', 'onboard'],
    answer:
      'Just reach out — email hello@meghroop.tech, use the contact form, or tap "Book a Call" here. Tell us what you are building, what is broken, or what you are thinking about. We reply within 24 hours, usually much sooner. No sales calls, no questionnaires — just a real conversation.',
    options: ['Book a Call', 'Main Menu'],
  },
  support: {
    keywords: ['support', 'maintenance', 'contact', 'reach out', 'whatsapp', 'email'],
    answer:
      'We stand by what we build. Projects ship with post-launch support covering fixes and tuning, and extended retainers are available for ongoing work. Reach us at hello@meghroop.tech or on WhatsApp anytime.',
    options: ['Book a Call', 'Main Menu'],
  },
}
