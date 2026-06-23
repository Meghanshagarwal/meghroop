import type { Project } from '@/lib/supabase'

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=80`

// Showcase portfolio — used as fallback on the homepage and /work/[slug]
// when the database has no projects yet. Real DB projects override these.
export const defaultProjects: Project[] = [
  {
    id: 'diyneza',
    slug: 'diyneza-restaurant-management-platform',
    created_at: '',
    display_order: 0,
    title: 'DIYNEZA — An All-in-One Restaurant POS & Management Platform',
    category: 'Software Development',
    year: '2026',
    timeline: '6 Months',
    gradient: 'from-orange-500 via-amber-600 to-red-600',
    image: img('photo-1517248135467-4c7edcad34c4'),
    tags: ['Next.js', 'Supabase', 'SaaS', 'POS'],
    live_url: 'https://diyneza.com',
    github_url: '#',
    description:
      'A full restaurant operating system — POS & billing, live inventory, KDS, commission-free QR ordering and multi-outlet control, designed, built and shipped end-to-end.',
    client_intro:
      'DIYNEZA set out to replace the tangle of disconnected tools most restaurants run — separate billing, inventory, kitchen and ordering apps — with a single, fast cloud platform.\n\nWe designed and engineered the entire product: a modern Next.js + Supabase stack, an offline-first POS, real-time inventory, a kitchen display system, QR ordering, and a full admin CMS — paired with a conversion- and SEO-optimised marketing site.',
    services: ['Product Design', 'Full-Stack Engineering', 'SaaS Platform', 'SEO', 'Branding'],
    project_types: ['SaaS Product', 'Web Application'],
    outcome:
      'We shipped a production-grade platform that brings POS, inventory, KDS, QR ordering and multi-outlet reporting into one dashboard — with offline-first billing, role-based access, and a 45-day free-trial funnel.\n\nThe marketing site ships with clean structured data, city landing pages, an alternatives/comparison engine and a built-in blog CMS, engineered to rank across both Google and AI search.',
    deliverables: ['Product Design', 'POS & Billing', 'Inventory & KDS', 'QR Ordering', 'Multi-Outlet Dashboard', 'Admin CMS', 'Marketing Site', 'SEO'],
    results: [
      { label: 'Tools Replaced', before: '7 apps', after: '1 platform' },
      { label: 'Direct-Order Commission', before: '18%', after: '0%' },
      { label: 'Outlet Onboarding', before: 'Days', after: '< 24 hrs' },
    ],
    gallery: [img('photo-1552566626-52f8b828add9'), img('photo-1556909212-d5b604d0c90d'), img('photo-1414235077428-338989a2e8c0'), img('photo-1559339352-11d035aa65de')],
  },
  {
    id: 'aurevia',
    slug: 'aurevia-skincare-performance-marketing',
    created_at: '',
    display_order: 1,
    title: 'Scaling Aurevia Skincare with Meta & Google Ads',
    category: 'Growth & Marketing',
    year: '2024',
    timeline: '8 Months',
    gradient: 'from-rose-600 via-pink-600 to-purple-600',
    image: img('photo-1556228720-195a672e8a03'),
    tags: ['Meta Ads', 'Google Ads', 'CRO', 'Landing Pages'],
    live_url: '#',
    github_url: '#',
    description:
      'A full-funnel performance marketing engine for a D2C skincare brand — scaling profitable orders 9× in 8 months.',
    client_intro:
      'Aurevia is a clean-beauty skincare brand with a loyal but small customer base. Great products, gorgeous packaging — but ad spend was leaking and orders had plateaued.\n\nWe rebuilt their entire paid acquisition engine across Meta and Google, paired with conversion-optimised landing pages and a retention flow that actually brought customers back.',
    services: ['Meta Ads', 'Google Ads', 'Performance Marketing', 'Landing Pages', 'Conversion Optimization'],
    project_types: ['Performance Marketing', 'D2C E-commerce'],
    outcome:
      'We restructured the ad account around clean conversion data, killed the bloated campaigns, and rebuilt creative around hooks that actually stopped the scroll.\n\nWithin 8 months, return on ad spend nearly tripled, monthly orders grew 9×, and customer acquisition cost dropped by almost two-thirds — all while spending more, profitably.',
    deliverables: ['Meta Ads', 'Google Ads', 'Landing Pages', 'Creatives', 'Email Marketing', 'CRO', 'Analytics Setup'],
    results: [
      { label: 'ROAS', before: '1.8×', after: '6.4×' },
      { label: 'Monthly Orders', before: '210', after: '1,940' },
      { label: 'Cost per Acquisition', before: '₹640', after: '₹230' },
    ],
    gallery: [img('photo-1556228453-efd6c1ff04f6'), img('photo-1570194065650-d99fb4bedf0a'), img('photo-1598440947619-2c35fc9aa908'), img('photo-1522335789203-aabd1fc54bc9')],
  },
  {
    id: 'fleetiq',
    slug: 'fleetiq-logistics-saas',
    created_at: '',
    display_order: 2,
    title: 'FleetIQ — A Logistics SaaS Built From Scratch',
    category: 'Software Development',
    year: '2024',
    timeline: '5 Months',
    gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    image: img('photo-1551288049-bebda4e38f71'),
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Dashboards'],
    live_url: '#',
    github_url: '#',
    description:
      'A custom logistics dashboard and dispatch platform that took a 60-hour/week manual operation down to 8.',
    client_intro:
      'FleetIQ runs last-mile delivery for regional retailers. Their operations lived in spreadsheets, WhatsApp groups, and a lot of late-night phone calls.\n\nWe designed and engineered a real product — live dispatch, driver tracking, automated route assignment, and a clean dashboard the whole team could actually use.',
    services: ['Custom Software', 'SaaS Product', 'Dashboards', 'APIs'],
    project_types: ['Web Application', 'Internal Platform'],
    outcome:
      'We replaced the spreadsheet chaos with a single source of truth. Dispatch that took hours now happens in minutes, and on-time delivery climbed from guesswork to a tracked, reliable number.\n\nThe ops team went from drowning in manual coordination to running the whole fleet from one screen.',
    deliverables: ['Product Design', 'Web App', 'Admin Dashboard', 'REST APIs', 'Driver Tracking', 'Deployment'],
    results: [
      { label: 'Weekly Ops Hours', before: '60 hrs', after: '8 hrs' },
      { label: 'On-time Deliveries', before: '71%', after: '96%' },
      { label: 'Dispatch Time', before: '~3 hrs', after: '12 min' },
    ],
    gallery: [img('photo-1460925895917-afdab827c52f'), img('photo-1486312338219-ce68d2c6f44d'), img('photo-1551434678-e076c223a692'), img('photo-1517245386807-bb43f82c33c4')],
  },
  {
    id: 'nexa',
    slug: 'nexa-realty-ai-lead-engine',
    created_at: '',
    display_order: 3,
    title: 'AI Lead Engine for Nexa Realty',
    category: 'AI & Automation',
    year: '2024',
    timeline: '3 Months',
    gradient: 'from-purple-600 via-violet-600 to-blue-600',
    image: img('photo-1518770660439-4636190af475'),
    tags: ['AI Agents', 'WhatsApp Automation', 'n8n', 'CRM'],
    live_url: '#',
    github_url: '#',
    description:
      'An AI agent + automation system that responds, qualifies, and routes real-estate leads 24/7 — in under two minutes.',
    client_intro:
      'Nexa Realty was generating plenty of leads but losing most of them to slow follow-up. By the time an agent called back, the buyer had moved on.\n\nWe built an AI-powered lead engine: an agent that instantly engages every inquiry on WhatsApp, qualifies intent, books site visits, and pushes clean data into their CRM.',
    services: ['AI Agents', 'WhatsApp Automation', 'n8n Automation', 'CRM Automation', 'Lead Generation Systems'],
    project_types: ['AI Automation', 'Lead Generation'],
    outcome:
      'Every lead now gets an intelligent reply within seconds, any time of day. The agent handles qualification, the workflow handles routing, and the sales team only talks to people ready to buy.\n\nResponse time collapsed from hours to minutes, qualified leads more than quintupled, and the team got 15 hours a week back.',
    deliverables: ['AI Agent', 'WhatsApp Integration', 'n8n Workflows', 'CRM Sync', 'Lead Scoring', 'Reporting'],
    results: [
      { label: 'Lead Response Time', before: '~6 hrs', after: '2 min' },
      { label: 'Qualified Leads / mo', before: '120', after: '640' },
      { label: 'Team Hours Saved', before: '0', after: '15 / wk' },
    ],
    gallery: [img('photo-1531973576160-7125cd663d86'), img('photo-1522071820081-009f0129c71c'), img('photo-1498050108023-c5249f4df085'), img('photo-1504384308090-c894fdcc538d')],
  },
  {
    id: 'maison-olea',
    slug: 'maison-olea-brand-shopify',
    created_at: '',
    display_order: 4,
    title: 'Branding + Shopify Build for Maison Olea',
    category: 'Branding & Creative',
    year: '2023',
    timeline: '4 Months',
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    image: img('photo-1441986300917-64674bd600d8'),
    tags: ['Brand Identity', 'Shopify', 'Creative Direction', 'Content'],
    live_url: '#',
    github_url: '#',
    description:
      'A complete brand identity and headless Shopify storefront for a premium home-fragrance label.',
    client_intro:
      'Maison Olea had a beautiful product and no brand to match. No identity system, a generic template store, and a conversion rate under 1%.\n\nWe built the brand from the ground up — identity, art direction, content — then engineered a fast, premium Shopify storefront to sell it.',
    services: ['Brand Identity', 'Creative Direction', 'Shopify Stores', 'Content Strategy', 'Social Media Design'],
    project_types: ['Branding', 'E-commerce'],
    outcome:
      'A cohesive premium brand finally did the product justice — and a rebuilt, fast storefront turned browsers into buyers.\n\nConversion rate more than tripled, average order value jumped 38%, and the brand’s audience grew more than 10× as the new creative took off on social.',
    deliverables: ['Brand Identity', 'Logo & Guidelines', 'Shopify Store', 'Product Photography', 'Social Creatives', 'Packaging'],
    results: [
      { label: 'Conversion Rate', before: '0.9%', after: '3.2%' },
      { label: 'Average Order Value', before: '₹1,450', after: '₹2,000' },
      { label: 'Instagram Following', before: '4.1K', after: '48K' },
    ],
    gallery: [img('photo-1441986300917-64674bd600d8'), img('photo-1556905055-8f358a7a47b2'), img('photo-1607082348824-0a96f2a4b9da'), img('photo-1472851294608-062f824d29cc')],
  },
]
