const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: 'MeghRoop',
  alternateName: 'MeghRoop Studio',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  email: 'hello@meghroop.tech',
  telephone: '+91 89495 08264',
  foundingDate: '2022',
  slogan: 'From awareness to automation. From code to customers.',
  description:
    'MeghRoop is a Growth, AI and Software agency. We help businesses grow through performance marketing (Meta Ads, Google Ads, SEO, social media, content), AI agents and automation (n8n, WhatsApp, CRM), custom software and SaaS development, Shopify and WordPress development, and branding and creative. Founded in 2022, based in India, serving clients worldwide.',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 2 },
  founder: [
    {
      '@type': 'Person',
      name: 'Meghansh',
      jobTitle: 'Co-Founder & AI Engineer',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      sameAs: ['https://linkedin.com/company/meghroop'],
    },
    {
      '@type': 'Person',
      name: 'Roop',
      jobTitle: 'Co-Founder & Engineer',
      worksFor: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      sameAs: ['https://linkedin.com/company/meghroop'],
    },
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jaipur Road',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302001',
    addressCountry: 'IN',
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    // Growth & Marketing
    'Performance Marketing',
    'Meta Ads',
    'Google Ads',
    'Search Engine Optimization',
    'Social Media Management',
    'Content Marketing',
    'Lead Generation',
    'Conversion Rate Optimization',
    // AI & Automation
    'AI Agent Development',
    'Agentic AI Systems',
    'AI Automation',
    'n8n Workflow Automation',
    'WhatsApp Automation',
    'CRM Automation',
    'Workflow Automation',
    'MCP Server Development',
    'RAG Systems',
    'AI Integration',
    // Software & Web
    'Custom Software Development',
    'SaaS Development',
    'Web Application Development',
    'Mobile App Development',
    'API Development',
    'Next.js Development',
    'React Development',
    'Shopify Development',
    'Headless Commerce',
    'WordPress Development',
    // Brand & Creative
    'Branding',
    'Brand Identity Design',
    'Video Editing',
    'Motion Graphics',
    // Discovery
    'Generative Engine Optimization',
    'AI Search Optimization',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MeghRoop Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Growth & Performance Marketing',
          url: `${SITE_URL}/growth-marketing`,
          serviceType: 'Performance Marketing',
          description:
            'Meta Ads, Google Ads, SEO, social media management, content creation, and lead-generation funnels engineered for qualified leads and measurable revenue.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Agents & Automation',
          url: `${SITE_URL}/ai-automation`,
          serviceType: 'AI Automation',
          description:
            'Custom AI agents, n8n workflow automation, WhatsApp and CRM automation, and lead-generation systems that run repetitive work 24/7 without a human in the loop.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software Development',
          url: `${SITE_URL}/software-development`,
          serviceType: 'Custom Software Development',
          description:
            'Custom software, web apps, mobile apps, dashboards, APIs, and SaaS products — engineered end to end with React, Next.js, Node.js, and TypeScript.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Shopify Development',
          url: `${SITE_URL}/shopify-development`,
          serviceType: 'Shopify Development',
          description:
            'Custom Shopify storefronts, headless commerce, Shopify apps, performance optimization, and commerce automation built to load fast and convert.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'WordPress Development',
          url: `${SITE_URL}/wordpress-development`,
          serviceType: 'WordPress Development',
          description:
            'Custom WordPress websites, headless WordPress, custom themes and blocks, and deep performance optimization — fast, clean, and easy to manage.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Branding & Creative',
          url: `${SITE_URL}/branding-creative`,
          serviceType: 'Branding',
          description:
            'Brand identity, social media design, video editing, motion graphics, and creative direction that make a brand people remember.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'GEO & AI Search Optimization',
          url: `${SITE_URL}/ai-search-optimization`,
          serviceType: 'Generative Engine Optimization',
          description:
            'Generative Engine Optimization to help brands appear inside AI-generated answers from ChatGPT, Perplexity, Claude, Gemini, and Google AI Overviews.',
        },
      },
    ],
  },
  sameAs: [
    'https://linkedin.com/company/meghroop',
    'https://www.instagram.com/meghroop.tech',
    'https://www.facebook.com/meghroop.tech',
    'https://x.com/meghroop_tech',
    'https://www.youtube.com/channel/UCcmaDrZZMKlKu-ZJCxpPVjQ',
  ],
  // NOTE: self-serving aggregateRating / review on the Organization is against
  // Google's review-snippet policy (can trigger a manual action), so it is
  // intentionally omitted here. Surface reviews via third-party platforms.
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'MeghRoop',
  image: `${SITE_URL}/og-image.png`,
  url: SITE_URL,
  telephone: '+91 89495 08264',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jaipur Road',
    addressLocality: 'Jaipur',
    addressRegion: 'Rajasthan',
    postalCode: '302001',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.9124,
    longitude: 75.7873,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '09:00',
    closes: '21:00',
  },
  sameAs: [
    'https://linkedin.com/company/meghroop',
    'https://www.instagram.com/meghroop.tech',
    'https://www.facebook.com/meghroop.tech',
    'https://x.com/meghroop_tech',
    'https://www.youtube.com/channel/UCcmaDrZZMKlKu-ZJCxpPVjQ',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'MeghRoop',
  description:
    'Creative engineering and AI studio. AI agents, autonomous workflows, MCP servers, and modern web experiences.',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-US',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does MeghRoop do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MeghRoop is a Growth, AI and Software agency. We help businesses grow across five areas: (1) Growth & marketing — Meta Ads, Google Ads, SEO, social media, and content; (2) AI & automation — AI agents, n8n, WhatsApp and CRM automation; (3) Software development — custom software, web and mobile apps, and SaaS; (4) Shopify and WordPress development; and (5) Branding & creative. From awareness to automation. From code to customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does MeghRoop do for growth and performance marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We run growth as a system: Meta Ads and Google Ads, SEO, social media management, content creation, and conversion-optimized landing pages and lead-gen funnels. Everything is wired to clean tracking so every rupee of spend has a number attached to it — qualified leads and revenue you can trace, not vanity metrics. Clients typically see ROAS around 6×.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MeghRoop build custom software and SaaS products?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build custom software, web applications, mobile apps, internal dashboards, APIs, and full SaaS products end to end — from MVP to production. Our stack is React, Next.js, Node.js, TypeScript, and PostgreSQL/MongoDB. You own the code, with a clean, documented handover.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does MeghRoop do Shopify and WordPress development?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build custom Shopify storefronts, headless commerce on Next.js, Shopify apps, and commerce automation engineered to convert. For WordPress we build custom themes and blocks, headless WordPress, and deep performance optimization — no page-builder bloat, fast load times, and SEO baked in from the structure up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build custom AI agents?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We build custom AI agents that reason, plan, and execute end-to-end tasks — connected to your tools, your data, and your actual workflows. These are not chatbot wrappers. They are autonomous systems that handle real work: customer support, sales outreach, research, data processing, and internal operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is n8n automation and how can it help my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'n8n is an open-source workflow automation platform. We use it to build AI-powered automation pipelines that handle repetitive tasks your team does manually — lead generation, email workflows, CRM updates, data processing, and more. Once built, these workflows run automatically without any human involvement. Most clients save 10–15 hours per week.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are MCP servers and why do they matter for AI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MCP stands for Model Context Protocol — an open standard that lets AI models access your real data, tools, and systems in structured context. Without MCP, AI models guess or hallucinate. With MCP servers, they have grounded, accurate information to work with. We build custom MCP servers that expose your databases, CRMs, and APIs to AI in a reliable, production-ready way.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is GEO — Generative Engine Optimization?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GEO stands for Generative Engine Optimization. It is the practice of optimizing your content and website structure so that AI systems like ChatGPT, Perplexity, Claude, and Google AI Overviews include your brand in their generated answers. Traditional SEO helps you rank in search results. GEO helps you appear inside AI-generated responses — which is where more and more searches are being answered today.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is MeghRoop different from a regular web agency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most agencies do one thing — ads, or websites, or branding — and make you stitch the rest together. MeghRoop runs growth, AI automation, software, and branding under one roof, so your ads, your site, your automation, and your brand actually reinforce each other. And you work directly with the people building it (Meghansh and Roop) — no account managers, no handoffs, no outsourcing. From awareness to automation, from code to customers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get started with MeghRoop?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Just reach out. Email us at hello@meghroop.tech or use the contact form on our website. Tell us what you are building, what is broken, or what you are thinking about. We reply within 24 hours — usually much sooner. No sales calls, no discovery questionnaires. Just a real conversation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work with clients outside India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. MeghRoop is based in India and works with clients worldwide. We have delivered projects for businesses in the US, UK, Europe, and across Asia. We work asynchronously across time zones and keep communication direct and responsive.',
      },
    },
  ],
}

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

// BreadcrumbList — render on nested pages (case studies, articles) so search
// engines can show breadcrumb trails in the SERP. Pass the trail in order.
export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// FAQPage schema is only valid on a page where the FAQ content is actually
// visible. Render this on the homepage (which has the matching <FAQ /> section)
// — NOT globally — to stay within Google's structured-data guidelines.
export function FaqJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
