const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'
const PAGE_URL = `${SITE_URL}/ai-automation-agency-jaipur`

const faqs = [
  {
    q: 'Why work with a Jaipur-based AI automation agency instead of a freelancer or an overseas firm?',
    a: 'A local team can sit in your office, understand how your business actually runs, and stay reachable long after launch. Overseas firms add time-zone lag and handoffs; freelancers rarely stick around for support. We are based in Jaipur and can meet in person when it helps.',
  },
  {
    q: 'What exactly is AI automation, and how is it different from a chatbot?',
    a: 'A chatbot answers questions with scripted replies. AI automation — agents — reason through a task and take real actions: reading data, updating your CRM, sending a follow-up, or routing a ticket. The output is work done, not just a reply typed.',
  },
  {
    q: 'How is this different from RPA (robotic process automation)?',
    a: 'RPA follows fixed rules and breaks the moment something unexpected happens — a new field, a slightly different invoice format. AI agents reason through exceptions instead of failing on them, so they hold up better as your processes change.',
  },
  {
    q: 'How much does AI automation cost?',
    a: 'It depends on scope — one workflow automated end to end costs far less than a multi-agent system across your whole operation. We scope a fixed price per project after understanding what you actually need, not an open-ended hourly retainer.',
  },
  {
    q: 'How long does it take to see something working?',
    a: 'A single automated workflow — WhatsApp lead qualification, or a CRM automation, for example — can be live within 2-4 weeks. Larger, multi-agent systems typically take 4-12 weeks depending on how many processes are involved.',
  },
  {
    q: 'What tools and platforms do you build with?',
    a: 'n8n for workflow orchestration, WhatsApp Business API, and direct integrations with CRMs, Google Sheets, Tally, and most tools that expose an API. For reasoning-heavy agents we pick the right AI stack for the job rather than forcing one platform on every project.',
  },
  {
    q: 'Do you work with businesses outside Jaipur too?',
    a: 'Yes. Jaipur is our home base, so local clients get in-person meetings when useful. Outside Jaipur, we deliver the same builds fully remote, on IST hours.',
  },
  {
    q: 'Is my business too small, or not "technical" enough, for AI automation?',
    a: 'No. Most of the businesses that benefit most are exactly the ones without an in-house tech team — a WhatsApp automation or a CRM follow-up flow does not need any technical knowledge from you to run once it is built.',
  },
  {
    q: 'Which industries in Jaipur and Rajasthan do you work with?',
    a: 'Manufacturing and export, jewellery and gems, tourism and hospitality, real estate, and D2C/e-commerce are the industries we see the most automation demand from in this region — but the underlying agent and workflow patterns apply to almost any business with repetitive, rule-based work.',
  },
  {
    q: 'Will an AI agent make mistakes with my customer data or money?',
    a: 'We build in guardrails on anything irreversible — payments, data deletion, customer-facing commitments — so the agent either acts within safe limits or asks for human approval first. Reasoning happens in the agent; risky actions stay reviewable.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': `${PAGE_URL}#service`,
  name: 'AI Automation Agency in Jaipur',
  serviceType: 'AI Automation',
  url: PAGE_URL,
  description:
    'Custom AI agents, n8n workflows, and WhatsApp/CRM automation built and supported from Jaipur, Rajasthan.',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: {
    '@type': 'City',
    name: 'Jaipur',
    containedInPlace: { '@type': 'State', name: 'Rajasthan' },
  },
  audience: { '@type': 'BusinessAudience', audienceType: 'Businesses and startups' },
}

const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${PAGE_URL}#localbusiness`,
  name: 'MeghRoop — AI Automation Agency Jaipur',
  url: PAGE_URL,
  telephone: '+91 89495 08264',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jhotwara',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302012',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 26.9124, longitude: 75.7873 },
  areaServed: { '@type': 'City', name: 'Jaipur' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'AI Agents & Automation', item: `${SITE_URL}/ai-automation` },
    { '@type': 'ListItem', position: 3, name: 'AI Automation Agency in Jaipur', item: PAGE_URL },
  ],
}

export default function AiAutomationJaipurJsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  )
}
