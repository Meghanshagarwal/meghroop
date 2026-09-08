// Single source of truth for the agency's service architecture.
// Drives the navbar mega-menu, footer, mobile nav, and the 6 service pages.

export type NavGroup = {
  label: string
  href: string
  dot: string
  links: { label: string; href: string }[]
}

// ── Navbar / footer mega-menu structure ───────────────────────────
export const serviceNav: NavGroup[] = [
  {
    label: 'Growth & Marketing',
    href: '/growth-marketing',
    dot: 'bg-[#c084fc]',
    links: [
      { label: 'Meta Ads', href: '/growth-marketing' },
      { label: 'SEO', href: '/growth-marketing' },
      { label: 'Social Media Management', href: '/growth-marketing' },
      { label: 'Content Creation', href: '/growth-marketing' },
      { label: 'Performance Marketing', href: '/growth-marketing' },
    ],
  },
  {
    label: 'Software Development',
    href: '/software-development',
    dot: 'bg-emerald-400',
    links: [
      { label: 'Custom Software', href: '/software-development' },
      { label: 'Web Apps', href: '/software-development' },
      { label: 'Mobile Apps', href: '/software-development' },
      { label: 'SaaS Products', href: '/software-development' },
    ],
  },
  {
    label: 'Shopify & WordPress',
    href: '/shopify-development',
    dot: 'bg-amber-400',
    links: [
      { label: 'Shopify Development', href: '/shopify-development' },
      { label: 'WordPress Development', href: '/wordpress-development' },
      { label: 'Web & WordPress Hosting', href: '/wordpress-hosting' },
    ],
  },
  {
    label: 'Branding & Creative',
    href: '/branding-creative',
    dot: 'bg-pink-400',
    links: [
      { label: 'Brand Identity', href: '/branding-creative' },
      { label: 'Video Editing', href: '/branding-creative' },
      { label: 'Motion Graphics', href: '/branding-creative' },
    ],
  },
]

// Flat list of service pages (footer column 2, sitemap)
export const serviceLinks = [
  { label: 'Growth & Marketing', href: '/growth-marketing' },
  { label: 'AI Agents', href: '/agentic-ai' },
  { label: 'Software Development', href: '/software-development' },
  { label: 'Shopify Development', href: '/shopify-development' },
  { label: 'WordPress Development', href: '/wordpress-development' },
  { label: 'Managed Hosting', href: '/wordpress-hosting' },
  { label: 'Branding & Creative', href: '/branding-creative' },
]

// ── Full content for each service page ─────────────────────────────
export type ServicePage = {
  slug: string
  eyebrow: string
  accent: string // text color class for the accent word + dots
  glow: string // hero glow rgba
  headline: string
  headlineAccent: string
  sub: string
  // Optional direct-answer block for AI Overviews / AEO — "What is X?"
  whatIs?: { title: string; paragraphs: string[] }
  problemTitle: string
  problemBody: string
  offerings: { title: string; desc: string }[]
  // Optional "How much does X cost?" block — pricing signal for AEO queries
  pricing?: { title: string; body: string; note?: string }
  outcomes: { value: string; label: string }[]
  process: { title: string; desc: string }[]
  stack: string[]
  faqs: { q: string; a: string }[]
  // Contextual internal links — semantic relationships to sibling services.
  // `note` explains *why* the two services connect (reinforces the entity graph).
  related: { label: string; href: string; note: string }[]
  ctaHeadline: string
  ctaAccent: string
  ctaButton: string
  seoTitle: string
  seoDescription: string
  seoKeywords?: string
}

export const servicePages: Record<string, ServicePage> = {
  'growth-marketing': {
    slug: 'growth-marketing',
    eyebrow: 'Growth & Marketing',
    accent: 'text-[#c084fc]',
    glow: 'rgba(192,132,252,0.09)',
    headline: 'Performance marketing that',
    headlineAccent: 'pays for itself.',
    sub: 'Meta Ads, Google Ads, SEO, social, and content — engineered around one thing: qualified leads and revenue you can actually trace.',
    whatIs: {
      title: 'What is performance marketing?',
      paragraphs: [
        'Performance marketing is advertising and content spend that’s measured against a real business outcome — leads, sales, or revenue — instead of impressions, likes, or reach. Every campaign we run is tied to a number you can trace back to your CRM or your bank account.',
        'That’s the difference between a marketing agency and a performance marketing agency: we don’t report on engagement. We report on cost per lead, cost per acquisition, and return on ad spend.',
      ],
    },
    problemTitle: 'Most marketing burns budget on attention nobody asked for.',
    problemBody:
      'Likes don’t pay salaries. We run growth like a system — clean tracking, sharp creative, and funnels built to convert — so every rupee of spend has a job and a number attached to it.',
    offerings: [
      { title: 'Meta & Google Ads', desc: 'Full-funnel paid campaigns built around clean conversion data and creative that stops the scroll. We set up proper tracking first — GA4, conversion APIs, server-side events — so every rupee of spend is measurable before a single ad goes live. Campaigns run across Meta, Google Search, and Google Performance Max, with weekly optimization based on cost-per-lead and ROAS, not clicks.' },
      { title: 'SEO', desc: 'Technical and content SEO that compounds — ranking for the searches your buyers actually make, not just traffic for traffic’s sake. We start with a technical audit (site speed, indexing, structure), then build content around real search intent, including how your business shows up in AI answers like Google AI Overviews, ChatGPT, and Perplexity.' },
      { title: 'Social Media Management', desc: 'Consistent, on-brand presence that builds an audience instead of chasing one. Content calendars, posting, community management, and reporting — designed to support the funnel, not just fill a feed.' },
      { title: 'Content Creation', desc: 'Hooks, reels, and copy designed to earn attention and move people to act. We write and produce for the platform, not repurpose one asset five times and hope it works everywhere.' },
      { title: 'Lead Gen Funnels & Landing Pages', desc: 'Conversion-optimised pages and funnels that turn traffic into booked calls and sales — built, tested, and iterated based on real user behavior, not a template.' },
      { title: 'Conversion Optimization', desc: 'Continuous testing on the journey that matters — from first click to checkout — so the traffic you’re already paying for converts at a higher rate over time.' },
    ],
    pricing: {
      title: 'How much does performance marketing cost?',
      body: 'Retainers typically start around ₹40,000–₹80,000/month for a single-channel engagement (e.g., Meta Ads only), scaling up for multi-channel campaigns (paid + SEO + social) or larger ad budgets. Ad spend itself is separate and set based on your goals. We’ll give you an honest number on a discovery call once we understand your market and current numbers — no generic package pricing that doesn’t fit your business.',
    },
    outcomes: [
      { value: '6.4×', label: 'Typical ROAS achieved' },
      { value: '9×', label: 'Order growth in 8 months' },
      { value: '−64%', label: 'Cost per acquisition' },
    ],
    process: [
      { title: 'Audit', desc: 'We dig into your data, funnel, and market to find where growth is leaking.' },
      { title: 'Strategy', desc: 'A clear plan across channels — prioritised by impact, not vanity.' },
      { title: 'Launch', desc: 'Campaigns, creative, and landing pages go live, wired to clean tracking.' },
      { title: 'Scale', desc: 'We double down on winners and cut the rest — profitably.' },
    ],
    stack: ['Meta Ads', 'Google Ads', 'GA4', 'Search Console', 'Ahrefs', 'Landing Pages'],
    faqs: [
      { q: 'What budget do I need to start?', a: 'We work with brands at different stages. What matters more than a big budget is clean tracking and a product people want — we’ll tell you honestly if paid is the right lever yet.' },
      { q: 'How soon will I see results?', a: 'Paid campaigns (Meta/Google Ads) typically show early signal within 2–3 weeks as we optimize targeting and creative. SEO is slower and compounding — expect meaningful movement in 3–4 months, with results building from there. We’ll set realistic timelines specific to your market on the discovery call.' },
      { q: 'Do you handle creative too?', a: 'Yes. Ad creative, landing page copy and design, and content for organic and paid both come from the same team, so your messaging stays consistent across every channel instead of getting diluted between vendors.' },
      { q: 'Do you require a long-term contract?', a: 'We work month-to-month after an initial trial period, typically 3 months — long enough to get real data, short enough that you’re never locked in if it’s not working.' },
      { q: 'What size businesses do you work with?', a: 'Mostly growth-stage businesses with an existing product or service and some traction — we’re most useful once there’s a real funnel to optimize, not for pre-launch validation.' },
      { q: 'Do you report results, or just spend?', a: 'Every engagement includes a reporting cadence (typically weekly or biweekly) tied to the metrics that matter for your business — cost per lead, ROAS, or revenue — not impressions or reach.' },
    ],
    related: [
      { label: 'AI Automation', href: '/ai-automation', note: 'Automate lead capture, qualification, and follow-up so paid traffic never goes cold.' },
      { label: 'Branding & Creative', href: '/branding-creative', note: 'Scroll-stopping creative and content — great targeting can’t save weak ads.' },
      { label: 'Shopify Development', href: '/shopify-development', note: 'Pair paid + SEO with a store engineered to convert the traffic you send it.' },
      { label: 'Software Development', href: '/software-development', note: 'Custom landing pages, funnels, and tracking built around your real data.' },
    ],
    ctaHeadline: 'Ready to',
    ctaAccent: 'grow better?',
    ctaButton: 'Book a Call',
    seoTitle: 'Performance Marketing & Growth Agency',
    seoDescription:
      'Meta Ads, Google Ads, and SEO run as a system, not a spend line. MeghRoop is a performance marketing agency built for qualified leads and traceable revenue.',
    seoKeywords:
      'performance marketing agency, Meta Ads agency, Google Ads management, SEO agency India, social media management agency, lead generation funnels, conversion rate optimization, growth marketing India',
  },

  'ai-automation': {
    slug: 'ai-automation',
    eyebrow: 'AI & Automation',
    accent: 'text-[#60a5fa]',
    glow: 'rgba(96,165,250,0.09)',
    headline: 'Put the repetitive work',
    headlineAccent: 'on autopilot.',
    sub: 'AI agents, n8n workflows, WhatsApp and CRM automation — systems that qualify leads, follow up, and run operations without a human in the loop.',
    problemTitle: 'Your team is doing work software should be doing.',
    problemBody:
      'Leads go cold while someone’s busy. Follow-ups slip. Data lives in five tools that don’t talk. We build AI-powered automation that closes those gaps — quietly, reliably, around the clock.',
    offerings: [
      { title: 'AI Agents', desc: 'Agents that reason, qualify, and respond — wired into your real tools and data, not chatbot wrappers.' },
      { title: 'n8n Automation', desc: 'Custom workflows that connect your stack and handle the repetitive work end to end.' },
      { title: 'WhatsApp Automation', desc: 'Instant, intelligent replies that engage and qualify leads on the channel they actually use.' },
      { title: 'CRM Automation', desc: 'Clean data, auto-routing, and follow-ups so nothing falls through the cracks.' },
      { title: 'Lead Generation Systems', desc: 'End-to-end engines that capture, qualify, and route leads to your sales team.' },
      { title: 'Workflow Automation', desc: 'Internal ops automated — onboarding, reporting, data pipelines, and more.' },
    ],
    outcomes: [
      { value: '2 min', label: 'Lead response time' },
      { value: '5×+', label: 'More qualified leads' },
      { value: '15 hrs', label: 'Saved per week' },
    ],
    process: [
      { title: 'Map', desc: 'We map your workflows and find the highest-leverage things to automate.' },
      { title: 'Design', desc: 'We design the agents and flows — what triggers, what decides, what acts.' },
      { title: 'Build', desc: 'We wire it into your tools and test it against real scenarios.' },
      { title: 'Optimise', desc: 'We monitor, refine, and expand as the system proves itself.' },
    ],
    stack: ['AI Agents', 'n8n', 'OpenAI', 'WhatsApp API', 'CRMs', 'Webhooks'],
    faqs: [
      { q: 'Are these just chatbots?', a: 'No. We build agents and workflows that take real actions — qualifying leads, updating systems, routing work — not just scripted replies.' },
      { q: 'Will it work with my existing tools?', a: 'Almost certainly. We integrate with CRMs, WhatsApp, email, sheets, and most APIs. If it has an endpoint, we can wire it.' },
      { q: 'Is it reliable enough to trust?', a: 'We build with guardrails, logging, and human-in-the-loop where it matters — so you can trust it and still stay in control.' },
    ],
    related: [
      { label: 'Growth & Marketing', href: '/growth-marketing', note: 'Feed qualified, automated leads straight into paid and lead-gen funnels.' },
      { label: 'AI Agents', href: '/agentic-ai', note: 'Go deeper with bespoke autonomous agents for complex, multi-step workflows.' },
      { label: 'Software Development', href: '/software-development', note: 'Custom systems and APIs for automation that off-the-shelf tools can’t reach.' },
      { label: 'Shopify Development', href: '/shopify-development', note: 'Wire in commerce automation — abandoned-cart flows, inventory, and order ops.' },
    ],
    ctaHeadline: 'Ready to',
    ctaAccent: 'automate smarter?',
    ctaButton: 'Book a Call',
    seoTitle: 'AI Agents & Automation Agency',
    seoDescription:
      'Custom AI agents, n8n automation, WhatsApp and CRM automation, and lead generation systems that run your repetitive work 24/7. MeghRoop builds AI-powered growth systems.',
  },

  'software-development': {
    slug: 'software-development',
    eyebrow: 'Software Development',
    accent: 'text-emerald-400',
    glow: 'rgba(52,211,153,0.08)',
    headline: 'Software that ships,',
    headlineAccent: 'scales, and holds up.',
    sub: 'Custom software, web and mobile apps, dashboards, and SaaS products — engineered end to end by the team that builds them.',
    whatIs: {
      title: 'What is custom software development?',
      paragraphs: [
        'Custom software development means building an application around how your business actually operates, instead of bending your operations around an off-the-shelf tool. It covers everything from internal dashboards and SaaS products to mobile apps and API integrations — designed, built, and maintained by one team, end to end.',
        'The alternative — no-code workarounds, spreadsheets, or generic software that "almost" fits — tends to break the moment a business grows past a certain size. Custom software is the fix when off-the-shelf stops fitting.',
      ],
    },
    problemTitle: 'Off-the-shelf tools stop fitting the moment you grow.',
    problemBody:
      'Spreadsheets, duct-taped no-code, and tools that almost work. We build real products around how your business actually operates — fast, maintainable, and ready to scale.',
    offerings: [
      { title: 'Custom Software', desc: 'Built around your operations — replacing the spreadsheets and workarounds slowing you down. We start by mapping your actual workflow, not a generic template, so the product fits from day one instead of needing a rebuild in a year.' },
      { title: 'Web Applications', desc: 'Fast, modern web apps with clean UX and architecture that scales. Built on React and Next.js, with an eye on performance from the first commit — not bolted on after launch.' },
      { title: 'Mobile Apps', desc: 'iOS and Android experiences your users actually want to open. Native performance where it matters, shared codebase where it saves time and cost without hurting the experience.' },
      { title: 'SaaS Products', desc: 'From MVP to production — auth, billing, dashboards, and the infrastructure underneath. We scope tightly so you get a real, usable product in market fast, then iterate on what users actually do with it.' },
      { title: 'Dashboards', desc: 'Real-time visibility into the numbers that run your business — built to surface the metrics you actually check, not a generic admin panel with everything and nothing.' },
      { title: 'APIs & Integrations', desc: 'Robust APIs and third-party integrations that connect everything cleanly — so your software, your CRM, and your other tools actually talk to each other instead of living in silos.' },
    ],
    pricing: {
      title: 'How much does custom software development cost?',
      body: 'Most engagements start around ₹1.5L–₹4L for a scoped MVP, scaling with complexity, integrations, and platform (web vs. web + mobile). Ongoing maintenance is typically a separate monthly retainer once you’re live. We give an exact number after a discovery call, once we understand the actual scope — not a generic package price that doesn’t reflect what you’re building.',
    },
    outcomes: [
      { value: '8 hrs', label: 'Ops time, down from 60/wk' },
      { value: '96%', label: 'On-time delivery rate' },
      { value: '99+', label: 'Performance scores' },
    ],
    process: [
      { title: 'Discover', desc: 'We learn your workflows, users, and the problem worth solving.' },
      { title: 'Design', desc: 'Product and UX design that makes the complex feel simple.' },
      { title: 'Build', desc: 'Engineered properly — typed, tested, and deployed on solid infra.' },
      { title: 'Scale', desc: 'We maintain, iterate, and grow the product with you.' },
    ],
    stack: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB'],
    faqs: [
      { q: 'Can you build an MVP fast?', a: 'Yes — we scope tightly to ship a real, usable MVP quickly, then iterate based on what users actually do, instead of trying to build every feature before launch.' },
      { q: 'Do you maintain what you built?', a: 'Yes. Most clients move to an ongoing maintenance and iteration retainer after launch — bug fixes, updates, and new features as the product grows. We don’t build and disappear.' },
      { q: 'Who owns the code?', a: 'You do. Full source code and infrastructure access are handed over — there’s no lock-in, and nothing runs on a system you can’t access or move if you choose to.' },
      { q: 'What’s your tech stack, and why?', a: 'React and Next.js on the frontend, Node.js and TypeScript on the backend, with PostgreSQL or MongoDB depending on the data model. It’s a modern, widely-supported stack — fast to build on, easy for another team to pick up later if needed, and proven at scale.' },
      { q: 'How long does a typical project take?', a: 'An MVP typically takes 6–10 weeks depending on scope. Larger products with multiple integrations or platforms run longer — we’ll give a realistic timeline after scoping, not a guess.' },
      { q: 'Do you work with early-stage startups or only established businesses?', a: 'Both. Early-stage teams usually come to us for a scoped MVP to test with real users; established businesses typically need a product rebuilt around how they actually operate now.' },
    ],
    related: [
      { label: 'AI Automation', href: '/ai-automation', note: 'Layer AI agents and automation on top of the software we build.' },
      { label: 'Shopify Development', href: '/shopify-development', note: 'Custom Shopify apps and headless storefronts on the same modern stack.' },
      { label: 'WordPress Development', href: '/wordpress-development', note: 'Headless WordPress as a CMS behind a custom Next.js front end.' },
      { label: 'Growth & Marketing', href: '/growth-marketing', note: 'Launch with clean tracking, funnels, and paid to drive real usage.' },
    ],
    ctaHeadline: 'Ready to',
    ctaAccent: 'build it right?',
    ctaButton: 'Book a Call',
    seoTitle: 'Custom Software & SaaS Development',
    seoDescription:
      'Custom software, web apps, mobile apps, dashboards, and SaaS products — engineered end to end by the team that maintains them. Book a discovery call.',
    seoKeywords:
      'custom software development company, SaaS development agency, web app development India, mobile app development company, MVP development agency, custom dashboard development, API development company',
  },

  'shopify-development': {
    slug: 'shopify-development',
    eyebrow: 'Shopify Development',
    accent: 'text-emerald-400',
    glow: 'rgba(52,211,153,0.08)',
    headline: 'Shopify stores that',
    headlineAccent: 'actually convert.',
    sub: 'Custom Shopify storefronts, headless commerce, custom apps, and performance work — built to load fast and sell faster.',
    problemTitle: 'A pretty store that doesn’t convert is just an expense.',
    problemBody:
      'Slow themes, generic templates, and conversion rates under 1%. We engineer Shopify for speed and sales — and wire in the automation that recovers carts and runs ops for you.',
    offerings: [
      { title: 'Shopify Stores', desc: 'Custom, on-brand storefronts engineered for speed and conversion.' },
      { title: 'Shopify Custom Apps', desc: 'Bespoke apps and functionality when off-the-shelf doesn’t cut it.' },
      { title: 'Headless Commerce', desc: 'Next.js + Shopify for lightning-fast, fully custom storefronts.' },
      { title: 'Performance Optimization', desc: 'Core Web Vitals and load times that rank better and convert better.' },
      { title: 'Commerce Automation', desc: 'Abandoned-cart flows, inventory triggers, and order ops wired into your backend.' },
      { title: 'Shopify SEO', desc: 'Structured, fast, discoverable — in search and in AI answers.' },
    ],
    outcomes: [
      { value: '3.2%', label: 'Conversion, up from 0.9%' },
      { value: '+38%', label: 'Average order value' },
      { value: '99+', label: 'Core Web Vitals' },
    ],
    process: [
      { title: 'Audit', desc: 'We find what’s slowing the store and killing conversions.' },
      { title: 'Design', desc: 'A premium storefront that does the product justice.' },
      { title: 'Build', desc: 'Fast, custom, and automated — engineered, not themed.' },
      { title: 'Grow', desc: 'Optimise conversion and pair it with paid + SEO to scale.' },
    ],
    stack: ['Shopify', 'Liquid', 'Next.js', 'Storefront API', 'n8n', 'Tailwind'],
    faqs: [
      { q: 'Theme or headless?', a: 'Depends on your goals and budget. We’ll recommend the right approach — a fast custom theme is plenty for most; headless when you need full control.' },
      { q: 'Can you fix my slow store?', a: 'Yes. Performance work is one of our most requested services — we profile, fix, and measure real gains.' },
      { q: 'Do you handle marketing too?', a: 'We do — paid, SEO, and automation under one roof, so your store and its growth aren’t two separate vendors.' },
    ],
    related: [
      { label: 'Growth & Marketing', href: '/growth-marketing', note: 'Drive traffic with Meta/Google Ads and SEO built for ecommerce.' },
      { label: 'Branding & Creative', href: '/branding-creative', note: 'A premium brand and product creative that makes the store actually sell.' },
      { label: 'AI Automation', href: '/ai-automation', note: 'Commerce automation — abandoned-cart flows, inventory, and order ops.' },
      { label: 'WordPress Development', href: '/wordpress-development', note: 'Need content + commerce? Pair Shopify with a fast WordPress blog.' },
    ],
    ctaHeadline: 'Ready to',
    ctaAccent: 'sell more?',
    ctaButton: 'Book a Call',
    seoTitle: 'Shopify Development & Headless Commerce',
    seoDescription:
      'Custom Shopify stores, headless commerce, Shopify apps, performance optimization, and commerce automation that convert. MeghRoop is a Shopify development agency.',
  },

  'wordpress-development': {
    slug: 'wordpress-development',
    eyebrow: 'WordPress Development',
    accent: 'text-[#60a5fa]',
    glow: 'rgba(96,165,250,0.08)',
    headline: 'WordPress sites that',
    headlineAccent: 'load fast and rank.',
    sub: 'Custom WordPress websites, headless builds, and deep performance optimization — clean, fast, and easy to manage.',
    problemTitle: 'Bloated plugins and slow themes hold most WordPress sites back.',
    problemBody:
      'WordPress can be fast and premium — when it’s built properly. We strip the bloat, harden the performance, and ship a site that’s a pleasure to run and quick to load.',
    offerings: [
      { title: 'WordPress Websites', desc: 'Custom, on-brand sites built for speed, SEO, and easy editing.' },
      { title: 'Headless WordPress', desc: 'WordPress as a CMS behind a fast Next.js front end.' },
      { title: 'Performance Optimization', desc: 'Caching, image, and code work that fixes slow, bloated sites.' },
      { title: 'Custom Themes & Blocks', desc: 'Tailored themes and Gutenberg blocks — no page-builder bloat.' },
      { title: 'Maintenance & Support', desc: 'Updates, backups, and security so the site keeps running clean.' },
      { title: 'WordPress SEO', desc: 'Technical SEO baked in from the structure up.' },
    ],
    outcomes: [
      { value: '<1s', label: 'Load times achieved' },
      { value: '90+', label: 'Lighthouse scores' },
      { value: '0', label: 'Page-builder bloat' },
    ],
    process: [
      { title: 'Audit', desc: 'We assess your current site, content, and performance.' },
      { title: 'Design', desc: 'A clean, modern design mapped to your content.' },
      { title: 'Build', desc: 'Custom, lightweight, and SEO-ready — built to last.' },
      { title: 'Maintain', desc: 'Ongoing care so it stays fast and secure.' },
    ],
    stack: ['WordPress', 'PHP', 'ACF', 'Next.js', 'MySQL', 'Tailwind'],
    faqs: [
      { q: 'Do you use page builders?', a: 'Only when it’s the right call. We prefer clean custom themes and blocks — they’re faster and easier to maintain than heavy builders.' },
      { q: 'Can you make my WordPress site faster?', a: 'Yes. Performance optimization is a core service — most sites have a lot of easy wins we can unlock.' },
      { q: 'Will I be able to edit content myself?', a: 'Absolutely. We build editing experiences your team can actually use, without breaking the design.' },
    ],
    related: [
      { label: 'Growth & Marketing', href: '/growth-marketing', note: 'Technical + content SEO that compounds on a fast WordPress base.' },
      { label: 'Software Development', href: '/software-development', note: 'Headless WordPress behind a custom Next.js app when you outgrow themes.' },
      { label: 'Branding & Creative', href: '/branding-creative', note: 'Brand identity and design that make the site unmistakably yours.' },
      { label: 'Shopify Development', href: '/shopify-development', note: 'Adding a store? We build Shopify alongside your WordPress site.' },
    ],
    ctaHeadline: 'Ready for a',
    ctaAccent: 'site that performs?',
    ctaButton: 'Book a Call',
    seoTitle: 'WordPress Development & Optimization',
    seoDescription:
      'Custom WordPress websites, headless WordPress, custom themes, and performance optimization — fast, clean, and easy to manage. MeghRoop builds WordPress properly.',
  },

  'branding-creative': {
    slug: 'branding-creative',
    eyebrow: 'Branding & Creative',
    accent: 'text-pink-400',
    glow: 'rgba(244,114,182,0.08)',
    headline: 'A brand people',
    headlineAccent: 'remember.',
    sub: 'Brand identity, social design, video, and motion — creative that makes you look as good as you perform.',
    problemTitle: 'Great products lose to better-branded ones every day.',
    problemBody:
      'If your brand doesn’t match the quality of what you do, you leave money and trust on the table. We build identity and creative that earns attention and makes the whole experience feel premium.',
    offerings: [
      { title: 'Brand Identity', desc: 'Logo, system, and guidelines that give your brand a real, recognisable voice.' },
      { title: 'Social Media Design', desc: 'Scroll-stopping, on-brand creative built for engagement.' },
      { title: 'Video Editing', desc: 'Reels, ads, and long-form edits that hold attention and convert.' },
      { title: 'Motion Graphics', desc: 'Animation and motion that makes content feel premium and alive.' },
      { title: 'Content Strategy', desc: 'A plan for what to say, where, and why — so creative has direction.' },
      { title: 'Creative Direction', desc: 'A consistent visual language across every touchpoint.' },
    ],
    outcomes: [
      { value: '10×+', label: 'Audience growth' },
      { value: '+38%', label: 'Average order value' },
      { value: '1', label: 'Cohesive brand system' },
    ],
    process: [
      { title: 'Discover', desc: 'We learn your brand, audience, and the feeling you want to create.' },
      { title: 'Define', desc: 'Positioning, voice, and a visual direction that’s unmistakably you.' },
      { title: 'Design', desc: 'Identity, assets, and templates ready to use everywhere.' },
      { title: 'Create', desc: 'Ongoing content and creative that keeps the brand alive.' },
    ],
    stack: ['Figma', 'After Effects', 'Premiere', 'Illustrator', 'Photoshop'],
    faqs: [
      { q: 'Do you do one-off projects or ongoing?', a: 'Both. We’ll build your identity as a project, and many clients keep us on for ongoing content and creative.' },
      { q: 'Can branding tie into my marketing?', a: 'That’s the point. Branding, content, and paid all live under one roof here — so your creative actually drives growth.' },
      { q: 'Do you handle video too?', a: 'Yes — editing, motion graphics, and short-form social video are all part of the offering.' },
    ],
    related: [
      { label: 'Growth & Marketing', href: '/growth-marketing', note: 'Turn brand and content into reach with paid and social.' },
      { label: 'Shopify Development', href: '/shopify-development', note: 'Bring the brand to life in a storefront engineered to convert.' },
      { label: 'WordPress Development', href: '/wordpress-development', note: 'Express the identity in a fast, custom WordPress site.' },
      { label: 'Software Development', href: '/software-development', note: 'Carry the design system into product and app interfaces.' },
    ],
    ctaHeadline: 'Ready to',
    ctaAccent: 'stand out?',
    ctaButton: 'Book a Call',
    seoTitle: 'Branding & Creative Agency',
    seoDescription:
      'Brand identity, social media design, video editing, motion graphics, and creative direction. MeghRoop builds brands people remember and content that earns attention.',
  },
}

export const servicePageSlugs = Object.keys(servicePages)
