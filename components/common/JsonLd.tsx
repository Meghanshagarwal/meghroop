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
  description:
    'MeghRoop is a creative engineering and AI studio that builds custom AI agents, autonomous workflow systems, MCP servers, and premium web experiences. Founded in 2022, based in India, serving clients worldwide.',
  numberOfEmployees: { '@type': 'QuantitativeValue', value: 2 },
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
    'AI Agent Development',
    'Agentic AI Systems',
    'n8n Workflow Automation',
    'MCP Server Development',
    'Multi-Agent Systems',
    'LangChain',
    'Generative Engine Optimization',
    'AI Search Optimization',
    'Next.js Development',
    'React Development',
    'Full Stack Web Development',
    'AI Integration',
    'Autonomous AI Workflows',
    'Vector Databases',
    'RAG Systems',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'MeghRoop Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Agent Development',
          description:
            'Custom AI agents that reason, plan, and execute end-to-end — wired into your tools, data, and real workflows.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'n8n Workflow Automation',
          description:
            'AI-powered automation workflows built on n8n, LangChain, and custom agents. Leads, emails, data, and internal ops — handled automatically.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MCP Server Development',
          description:
            'Custom Model Context Protocol servers that expose your real data and APIs to AI models — so they stop guessing and start being genuinely useful.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Full Stack Web Development',
          description:
            'Database to deployment — React, Next.js, Node.js, and everything in between. One team, one product, shipped properly.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'GEO & AI Search Optimization',
          description:
            'Generative Engine Optimization to help brands appear inside AI-generated answers from ChatGPT, Perplexity, Claude, and Google AI Overviews.',
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '1',
    ratingCount: '4',
    reviewCount: '4',
  },
  review: [
    {
      '@type': 'Review',

      reviewBody:
        'MeghRoop completely transformed our online presence. The attention to detail, clean animations, and overall quality of work far exceeded our expectations. Highly recommend.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Rajesh Kumar',
        jobTitle: 'CEO',
      },
    },
    {
      '@type': 'Review',

      reviewBody:
        'Working with MeghRoop was a fantastic experience. They understood our brand vision instantly and delivered a stunning website that our customers love.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Priya Sharma',
        jobTitle: 'Founder',
      },
    },
    {
      '@type': 'Review',

      reviewBody:
        'They built our entire sports court booking platform from scratch. Professional, timely, and the quality of code is exceptional. Will definitely work with them again.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Amit Patel',
        jobTitle: 'CTO',
      },
    },
    {
      '@type': 'Review',

      reviewBody:
        'Our coffee shop website has received so many compliments from customers. The design is beautiful, the site is fast, and it perfectly represents our brand.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: 'Neha Gupta',
        jobTitle: 'Owner',
      },
    },
  ],
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
      name: 'What does MeghRoop build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MeghRoop is a creative engineering and AI studio. We build custom AI agents, autonomous workflow systems, MCP servers, and premium web experiences using React, Next.js, and modern AI infrastructure. We work with startups and businesses that need things done properly — from a blank repo to a shipped product.',
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
        text: 'MeghRoop is two people — Meghansh and Roop. No account managers, no handoffs, no middlemen. You talk directly to the engineers actually building your product. We specialize in AI-first systems and modern web development, not templates. Most agencies outsource or use no-code tools. We write the code, design the systems, and ship the whole thing ourselves.',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
