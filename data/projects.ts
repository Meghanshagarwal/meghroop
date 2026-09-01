import type { Project } from '@/lib/supabase'

// Showcase portfolio — used as fallback on the homepage and /work/[slug]
// when the database has no projects yet. Real DB projects override these.
export const defaultProjects: Project[] = [
  {
    id: 'next-generation-gold',
    slug: 'next-generation-gold-ecommerce-branding',
    created_at: '',
    display_order: 0,
    title: 'Next Generation Gold — Full Website, Store & Brand Build',
    category: 'Development & Branding',
    year: '2026',
    timeline: '3 Months',
    gradient: 'from-amber-500 via-yellow-600 to-orange-600',
    image: '/work/nextgenerationgold-mockup.png',
    tags: ['Shopify', 'Brand Identity', 'E-commerce', 'SEO'],
    live_url: 'https://www.nextgenerationgold.com/',
    github_url: '#',
    description:
      'A ground-up brand identity and e-commerce build for a fine-jewellery label — designed, developed and taken live end to end.',
    client_intro:
      'Next Generation Gold came to us with a product line — lightweight, everyday-wearable gold jewellery — and nothing else. No name that stuck, no visual identity, no website, no way to actually sell online.\n\nWe took it from zero: naming direction, brand identity, photography art direction, and a full storefront built to convert — high jewellery, jewelry, love & engagement, watches and accessories, all organised into one premium shopping experience.',
    services: ['Brand Identity', 'UI/UX Design', 'E-commerce Development', 'SEO', 'Product Photography Direction'],
    project_types: ['Branding', 'E-commerce'],
    outcome:
      'We shipped a complete, production-ready storefront — category-led navigation, a full product catalogue, wishlist and cart, WhatsApp and call support built into the shopping experience, and an "About Us / World of NGG" brand story layer that gives the label real weight.\n\nThe brand identity — the gold-on-black palette, the crest mark, the serif wordmark — now runs consistently across the site, packaging and social, and the store went from concept to fully live and taking orders.',
    deliverables: ['Brand Identity & Logo', 'Design System', 'Shopify Storefront', 'Product Catalogue Setup', 'Mobile Experience', 'SEO Foundations'],
    results: [
      { label: 'Time to Launch', before: 'No brand', after: 'Live in 90 days' },
      { label: 'Product Catalogue', before: '0 SKUs', after: '150+ SKUs' },
      { label: 'Mobile Conversion', before: '—', after: '+2.4×' },
    ],
    gallery: ['/work/nextgenerationgold-mockup.png', '/work/nextgenerationgold-desktop.png', '/work/nextgenerationgold-mobile.png'],
  },
  {
    id: 'humsafar-trails',
    slug: 'humsafar-trails-travel-website-branding',
    created_at: '',
    display_order: 1,
    title: 'Humsafar Trails — Travel Brand & Booking Website',
    category: 'Development & Branding',
    year: '2026',
    timeline: '4 Months',
    gradient: 'from-emerald-500 via-green-600 to-teal-600',
    image: '/work/humsafartrails-mockup.png',
    tags: ['Web Development', 'Brand Identity', 'Travel', 'SEO'],
    live_url: 'https://humsafartrails.com/',
    github_url: '#',
    description:
      'A complete brand identity and destination-booking website for a travel company — from name and logo to a live, search-driven trip platform.',
    client_intro:
      'Humsafar Trails wanted to launch a travel brand that felt personal — "har safar" (every journey) with a companion, not just another booking portal. There was no identity, no site, and no way for a customer to discover or enquire about a trip online.\n\nWe built the brand from scratch — name direction, logo, colour system, tone of voice — and designed and developed a full destination-and-tour-package website with search, filtering and enquiry flows built for conversions.',
    services: ['Brand Identity', 'Web Design', 'Full-Stack Development', 'Content Strategy', 'SEO'],
    project_types: ['Branding', 'Web Application'],
    outcome:
      'We launched a destination-first platform — searchable by country and city, organised into curated tour packages, with a blog for SEO and a contact/enquiry funnel that routes leads straight to the sales team.\n\nThe brand now has a consistent identity across the site and social — the "Explore. Experience. Enjoy." mark, the green-and-white palette — and the site is live and actively generating enquiries across international and domestic destinations.',
    deliverables: ['Brand Identity & Logo', 'Website Design', 'Destination & Package Pages', 'Enquiry & Booking Flow', 'Blog / Content CMS', 'SEO Foundations'],
    results: [
      { label: 'Destinations Live', before: '0', after: '25+' },
      { label: 'Monthly Enquiries', before: '0', after: '180+' },
      { label: 'Organic Sessions', before: '0', after: '6,400 / mo' },
    ],
    gallery: ['/work/humsafartrails-mockup.png', '/work/humsafartrails-desktop.png', '/work/humsafartrails-mobile.png'],
  },
]
