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
    label: 'AI & Automation',
    href: '/ai-automation',
    dot: 'bg-[#60a5fa]',
    links: [
      { label: 'AI Agents', href: '/ai-automation' },
      { label: 'n8n Automation', href: '/ai-automation' },
      { label: 'WhatsApp Automation', href: '/ai-automation' },
      { label: 'CRM Automation', href: '/ai-automation' },
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
  { label: 'AI Automation', href: '/ai-automation' },
  { label: 'Software Development', href: '/software-development' },
  { label: 'Shopify Development', href: '/shopify-development' },
  { label: 'WordPress Development', href: '/wordpress-development' },
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
  problemTitle: string
  problemBody: string
  offerings: { title: string; desc: string }[]
  outcomes: { value: string; label: string }[]
  process: { title: string; desc: string }[]
  stack: string[]
  faqs: { q: string; a: string }[]
  ctaHeadline: string
  ctaAccent: string
  ctaButton: string
  seoTitle: string
  seoDescription: string
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
    problemTitle: 'Most marketing burns budget on attention nobody asked for.',
    problemBody:
      'Likes don’t pay salaries. We run growth like a system — clean tracking, sharp creative, and funnels built to convert — so every rupee of spend has a job and a number attached to it.',
    offerings: [
      { title: 'Meta & Google Ads', desc: 'Full-funnel paid campaigns built around clean conversion data and creative that stops the scroll.' },
      { title: 'SEO', desc: 'Technical + content SEO that compounds — ranking for the searches your buyers actually make.' },
      { title: 'Social Media Management', desc: 'Consistent, on-brand presence that builds an audience instead of chasing one.' },
      { title: 'Content Creation', desc: 'Hooks, reels, and copy designed to earn attention and move people to act.' },
      { title: 'Lead Gen Funnels & Landing Pages', desc: 'Conversion-optimised pages and funnels that turn traffic into booked calls and sales.' },
      { title: 'Conversion Optimization', desc: 'Continuous testing on the journey that matters — from first click to checkout.' },
    ],
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
      { q: 'How soon will I see results?', a: 'Paid channels can show signal in weeks; SEO and content compound over months. We set expectations per channel up front and report on real metrics throughout.' },
      { q: 'Do you handle creative too?', a: 'Yes. Ad creative, copy, and landing pages are part of the engine — great targeting can’t save weak creative.' },
    ],
    ctaHeadline: 'Ready to',
    ctaAccent: 'grow better?',
    ctaButton: 'Book a Call',
    seoTitle: 'Performance Marketing & Growth Agency',
    seoDescription:
      'Meta Ads, Google Ads, SEO, social media, and content marketing engineered for qualified leads and measurable revenue. MeghRoop is a premium growth agency.',
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
    problemTitle: 'Off-the-shelf tools stop fitting the moment you grow.',
    problemBody:
      'Spreadsheets, duct-taped no-code, and tools that almost work. We build real products around how your business actually operates — fast, maintainable, and ready to scale.',
    offerings: [
      { title: 'Custom Software', desc: 'Built around your operations — replacing the spreadsheets and workarounds slowing you down.' },
      { title: 'Web Applications', desc: 'Fast, modern web apps with clean UX and architecture that scales.' },
      { title: 'Mobile Apps', desc: 'iOS and Android experiences your users actually want to open.' },
      { title: 'SaaS Products', desc: 'From MVP to production — auth, billing, dashboards, and the infrastructure underneath.' },
      { title: 'Dashboards', desc: 'Real-time visibility into the numbers that run your business.' },
      { title: 'APIs & Integrations', desc: 'Robust APIs and third-party integrations that connect everything cleanly.' },
    ],
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
      { q: 'Can you build an MVP fast?', a: 'Yes — we scope tightly to ship a real, usable MVP quickly, then iterate based on what users actually do.' },
      { q: 'Do you maintain what you build?', a: 'We do. We’re long-term partners, not a build-and-vanish shop. Most clients keep working with us well past launch.' },
      { q: 'Who owns the code?', a: 'You do. Full ownership, clean handover, documented.' },
    ],
    ctaHeadline: 'Ready to',
    ctaAccent: 'build it right?',
    ctaButton: 'Book a Call',
    seoTitle: 'Custom Software & SaaS Development',
    seoDescription:
      'Custom software, web apps, mobile apps, dashboards, APIs, and SaaS products — engineered end to end. MeghRoop builds products that ship, scale, and hold up.',
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
    ctaHeadline: 'Ready to',
    ctaAccent: 'stand out?',
    ctaButton: 'Book a Call',
    seoTitle: 'Branding & Creative Agency',
    seoDescription:
      'Brand identity, social media design, video editing, motion graphics, and creative direction. MeghRoop builds brands people remember and content that earns attention.',
  },
}

export const servicePageSlugs = Object.keys(servicePages)
