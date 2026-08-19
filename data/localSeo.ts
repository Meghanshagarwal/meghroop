// Programmatic local-SEO landing pages: {service} x {location}.
// Reuses the real content/offerings from data/services.ts so these pages
// stay consistent with the main service pages instead of duplicating copy
// from scratch, while each location gets a genuinely different intro/FAQ
// so pages don't read as pure find-and-replace duplicates.

export type SeoLocation = {
  slug: string
  name: string
  region: string
  isCountry: boolean
  // A short, real differentiator used in the intro paragraph — not just the city name.
  context: string
}

export const seoLocations: SeoLocation[] = [
  {
    slug: 'jaipur',
    name: 'Jaipur',
    region: 'Rajasthan',
    isCountry: false,
    context: 'our home base — we work with Jaipur businesses in person as often as online',
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    region: 'NCR',
    isCountry: false,
    context: 'a short flight from our Jaipur studio — most Delhi/NCR clients we run fully remote, with calls on IST hours',
  },
  {
    slug: 'mumbai',
    name: 'Mumbai',
    region: 'Maharashtra',
    isCountry: false,
    context: 'remote-first delivery on IST hours, with the same senior team you would get working out of a Mumbai office',
  },
  {
    slug: 'bangalore',
    name: 'Bangalore',
    region: 'Karnataka',
    isCountry: false,
    context: "India's tech capital — we work with a number of Bangalore SaaS and startup teams entirely remotely",
  },
  {
    slug: 'hyderabad',
    name: 'Hyderabad',
    region: 'Telangana',
    isCountry: false,
    context: 'remote delivery on IST hours, so Hyderabad teams get the same turnaround as clients down the road from us',
  },
  {
    slug: 'india',
    name: 'India',
    region: 'India',
    isCountry: true,
    context: 'we work with businesses across India — from Jaipur, our home base, to teams in every major city',
  },
]

export type SeoServiceLink = {
  // Which entry in data/services.ts servicePages to pull offerings/FAQs from
  serviceSlug: string
  // URL prefix, combined with a location slug: `${urlPrefix}-${location.slug}`
  urlPrefix: string
  // The human keyword phrase used in H1/title, e.g. "Digital Marketing Services"
  keyword: string
  intro: string
}

export const seoServiceLinks: SeoServiceLink[] = [
  {
    serviceSlug: 'growth-marketing',
    urlPrefix: 'digital-marketing-services',
    keyword: 'Digital Marketing Services',
    intro:
      'Meta Ads, Google Ads, SEO, social media, and content — run as one accountable growth system instead of five disconnected vendors.',
  },
  {
    serviceSlug: 'ai-automation',
    urlPrefix: 'ai-automation-agency',
    keyword: 'AI Automation & AI Agents',
    intro:
      'Custom AI agents, n8n workflows, and WhatsApp/CRM automation that qualify leads and run operations around the clock.',
  },
  {
    serviceSlug: 'software-development',
    urlPrefix: 'web-development-company',
    keyword: 'Web & Software Development',
    intro:
      'Custom software, web apps, dashboards, and SaaS products engineered end to end — not templated, not outsourced twice.',
  },
  {
    serviceSlug: 'shopify-development',
    urlPrefix: 'shopify-development-agency',
    keyword: 'Shopify Development',
    intro:
      'Custom Shopify storefronts and headless commerce engineered for speed and conversion, not another slow theme.',
  },
  {
    serviceSlug: 'wordpress-development',
    urlPrefix: 'wordpress-development-agency',
    keyword: 'WordPress Development',
    intro:
      'Custom WordPress builds — clean, fast, and free of the page-builder bloat that slows most WordPress sites down.',
  },
]

// 'ai-automation-agency-jaipur' is excluded here on purpose: Jaipur is our
// home base, so that exact keyword gets a real, dedicated pillar page
// (app/ai-automation-agency-jaipur/page.tsx) instead of the generic
// programmatic template every other {service}x{location} combo uses. Keeping
// it out of the generated slug list stops the dynamic app/[slug]/page.tsx
// route from also claiming that URL (duplicate/conflicting content at the
// same path) — all other combos, including ai-automation for other cities
// and every other service for Jaipur, are unaffected.
const excludedCombos = new Set<string>(['ai-automation-agency-jaipur'])

export function getAllLocalSeoSlugs(): string[] {
  const slugs: string[] = []
  for (const s of seoServiceLinks) {
    for (const l of seoLocations) {
      const slug = `${s.urlPrefix}-${l.slug}`
      if (excludedCombos.has(slug)) continue
      slugs.push(slug)
    }
  }
  return slugs
}

export function parseLocalSeoSlug(slug: string): { service: SeoServiceLink; location: SeoLocation } | null {
  if (excludedCombos.has(slug)) return null
  for (const s of seoServiceLinks) {
    for (const l of seoLocations) {
      if (`${s.urlPrefix}-${l.slug}` === slug) return { service: s, location: l }
    }
  }
  return null
}
