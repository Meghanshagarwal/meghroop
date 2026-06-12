import { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

import ServicesPageHero from '@/components/sections/ServicesPageHero'
import ServicesPageWhatAre from '@/components/sections/ServicesPageWhatAre'
import ServicesPageGrid from '@/components/sections/ServicesPageGrid'
import ServicesPageProcess from '@/components/sections/ServicesPageProcess'
import ServicesPageWhy from '@/components/sections/ServicesPageWhy'
import ServicesPageAudience from '@/components/sections/ServicesPageAudience'
import ServicesPageFAQ from '@/components/sections/ServicesPageFAQ'
import ServicesPageCTA from '@/components/sections/ServicesPageCTA'

const SITE_URL = 'https://meghroop.tech'

export const metadata: Metadata = {
  title: 'AI Services Company: Agents, Automation & Voice | MeghRoop',
  description:
    'End-to-end AI services: strategy audits, agent development, voice bots, integrations, and knowledge AI. Fixed-fee, shipped in weeks. Book a free call.',
  keywords: [
    'AI services',
    'AI services company',
    'AI strategy audit',
    'agentic automation',
    'AI voice agents',
    'custom AI agent development',
    'AI integration services',
    'knowledge intelligence',
    'sales AI',
    'AI consulting India',
    'MeghRoop',
  ],
  openGraph: {
    title: 'AI Services Company: Agents, Automation & Voice | MeghRoop',
    description:
      'End-to-end AI services: strategy audits, agent development, voice bots, integrations, and knowledge AI. Fixed-fee, shipped in weeks. Book a free call.',
    url: `${SITE_URL}/services`,
    siteName: 'MeghRoop',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Services Company: Agents, Automation & Voice | MeghRoop',
    description:
      'End-to-end AI services: strategy audits, agent development, voice bots, integrations, and knowledge AI. Fixed-fee, shipped in weeks.',
  },
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
}

const services = [
  {
    name: 'AI Strategy & Readiness Audit',
    description:
      'Fixed-fee, 3-week engagement that maps your highest-ROI AI opportunities, scores them by feasibility, and delivers a 90-day action plan.',
    url: `${SITE_URL}/ai-agents/ai-strategy-audit`,
  },
  {
    name: 'Agentic Systems & Process Automation',
    description:
      'Productized AI agents that run back-office processes end-to-end — invoice-to-pay, ticket triage, reconciliation, vendor onboarding.',
    url: `${SITE_URL}/ai-agents/agentic-automation`,
  },
  {
    name: 'AI Voice Agents',
    description:
      'Human-sounding voice bots for inbound support, outbound qualification, collections, and appointment booking. Multilingual, 24/7.',
    url: `${SITE_URL}/ai-agents/ai-voice-agents`,
  },
  {
    name: 'Custom AI Agent Development',
    description:
      'Bespoke agents for your unique workflow — built from scratch, not templated. You own the code, data, and IP.',
    url: `${SITE_URL}/ai-agents/custom-ai-agents`,
  },
  {
    name: 'AI Integration Services',
    description:
      'Plug AI into the tools you already run — Salesforce, HubSpot, Zoho, Zendesk, SAP, Tally, custom internal systems. No rip-and-replace.',
    url: `${SITE_URL}/ai-agents/ai-integration`,
  },
  {
    name: 'Document & Knowledge Intelligence',
    description:
      'Private, permission-aware AI that reads your documents, contracts, SOPs, and knowledge bases — and answers with citations.',
    url: `${SITE_URL}/ai-agents/knowledge-intelligence`,
  },
  {
    name: 'Sales Intelligence & Outreach Automation',
    description:
      'Signal-triggered outbound for B2B SaaS. Lead research, personalized email + LinkedIn + voice, reply handling.',
    url: `${SITE_URL}/ai-agents/sales-ai`,
  },
]

const faqs = [
  {
    q: 'What are AI services and how are they different from AI tools?',
    a: 'AI services are end-to-end engagements — strategy, build, integration, deployment, and ongoing ops. AI tools are software licenses. Services are what you need when AI has to fit your workflow, your data, and the tools you already run.',
  },
  {
    q: 'How is this different from a big consultancy like Deloitte or Accenture?',
    a: "We actually build what we recommend. Our engagements end in production systems, not decks — and we're 30–60% of the cost because we're India-delivered with US-grade engineering.",
  },
  {
    q: 'Do you only work with our existing stack, or do we have to migrate?',
    a: 'We work with what you have. Most engagements extend your current tools (Salesforce, HubSpot, Zoho, Zendesk, SAP, Tally) rather than replacing them.',
  },
  {
    q: 'Who owns the code and the AI agents you build for us?',
    a: 'You do. Code, prompts, configs, data — all yours. We deliver clean handoff documentation on every project.',
  },
  {
    q: 'What AI models do you use — are we locked in?',
    a: 'No lock-in. We pick the model, framework, and cloud that fits your use case — and you can swap later without a rebuild.',
  },
  {
    q: 'How do you handle data security and compliance?',
    a: 'We deploy in your cloud (AWS/Azure/GCP/VPC) where required. We are GDPR-compliant and engineer each solution to meet the specific compliance requirements of your engagement (e.g. DPDP India). No training on your data.',
  },
  {
    q: "What's the typical engagement size and timeline?",
    a: 'Audits: 3–4 weeks, fixed fee. Builds: 4–12 weeks depending on complexity. Ongoing managed services available monthly.',
  },
  {
    q: 'Can you work with our internal team, or do you need to own the whole thing?',
    a: 'Both. We embed with internal teams or run end-to-end — depending on what you need. Clean handoff in either case.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#professionalservice`,
      name: 'MeghRoop',
      url: `${SITE_URL}/services`,
      description:
        'End-to-end AI services: strategy audits, agent development, voice bots, integrations, and knowledge AI. Fixed-fee, shipped in weeks.',
      serviceType: 'AI services for business',
      areaServed: ['India', 'United States', 'Worldwide'],
      email: 'hello@meghroop.tech',
      telephone: '+91 89495 08264',
    },
    {
      '@type': 'ItemList',
      name: 'MeghRoop AI Services',
      itemListElement: services.map((service, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url: service.url,
        },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main id="main-content">
        <ServicesPageHero />
        <ServicesPageWhatAre />
        <ServicesPageGrid />
        <ServicesPageProcess />
        <ServicesPageWhy />
        <ServicesPageAudience />
        <ServicesPageFAQ />
        <ServicesPageCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
