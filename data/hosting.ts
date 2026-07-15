// Single source of truth for the Managed WordPress Hosting product.
// Drives the /wordpress-hosting page content and its Product/Offer JSON-LD.

export type HostingPlan = {
  id: string
  name: string
  price: number // INR
  period: 'month' | 'year'
  cadence: string // human label e.g. "/mo"
  tagline: string
  note?: string // savings / highlight line
  featured?: boolean
}

export type HostingFeature = { title: string; desc: string }
export type HostingStep = { title: string; desc: string }
export type HostingFaq = { q: string; a: string }

export const hostingMeta = {
  slug: 'wordpress-hosting',
  eyebrow: 'Managed WordPress Hosting',
  accent: 'text-[#60a5fa]',
  glow: 'rgba(96,165,250,0.09)',
  currency: 'INR',
  currencySymbol: '₹',
  seoTitle: 'Managed WordPress & VPS Hosting — Fully Managed, Secure',
  seoDescription:
    'Fully managed VPS WordPress hosting from ₹249/mo (₹2500/yr). Free SSL, malware protection, security hardening, daily backups, free migration, and 24/7 support — with a 30-day money-back guarantee.',
}

// ── Pricing plans ──────────────────────────────────────────────────
export const hostingPlans: HostingPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly',
    price: 249,
    period: 'month',
    cadence: '/mo',
    tagline: 'Fully managed hosting, billed month to month. Cancel anytime.',
  },
  {
    id: 'yearly',
    name: 'Yearly',
    price: 2500,
    period: 'year',
    cadence: '/yr',
    tagline: 'The same fully managed hosting, billed annually.',
    note: 'Save ₹488 a year — nearly 2 months free.',
    featured: true,
  },
]

// ── Everything included (all plans get everything) ─────────────────
export const hostingFeatures: HostingFeature[] = [
  { title: 'Free SSL Certificate', desc: 'Auto-provisioned and auto-renewing HTTPS on every site — the padlock, handled for you.' },
  { title: 'Malware Protection & Removal', desc: 'Continuous scanning plus hands-on cleanup if anything ever slips through — at no extra cost.' },
  { title: 'Security Hardening + Firewall', desc: 'Web application firewall, brute-force protection, and a hardened server config out of the box.' },
  { title: 'Daily Automated Backups', desc: 'Off-site daily backups with one-click restore, so a bad update is never a disaster.' },
  { title: 'Free Website Migration', desc: 'We move your existing WordPress site over for you — zero downtime, nothing for you to do.' },
  { title: 'Managed Updates', desc: 'Core, theme, and plugin updates handled and tested by us, so your site stays current and safe.' },
  { title: '99.9% Uptime', desc: 'Dedicated VPS resources and proactive monitoring keep your site fast and online.' },
  { title: 'Caching + CDN', desc: 'Server-level caching and a global CDN baked in for sub-second load times worldwide.' },
  { title: '24/7 Support', desc: 'Real humans, real answers — we manage the server so you never touch a control panel.' },
  { title: 'Staging Environment', desc: 'Test changes safely on a staging copy, then push to live when it is ready.' },
  { title: 'Free Business Email', desc: 'Professional you@yourdomain email included and configured with your hosting.' },
  { title: 'DDoS Protection', desc: 'Network-level mitigation absorbs attacks before they ever reach your site.' },
]

// ── How onboarding works ───────────────────────────────────────────
export const hostingSteps: HostingStep[] = [
  { title: 'Migrate', desc: 'Send us your current site — we migrate it to a dedicated, tuned VPS with zero downtime.' },
  { title: 'Secure', desc: 'SSL, firewall, malware scanning, and daily backups are switched on and hardened.' },
  { title: 'Optimize', desc: 'Caching, CDN, and server tuning bring load times down and keep them there.' },
  { title: 'Manage', desc: 'We monitor, update, back up, and support it 24/7 — hosting you never have to think about.' },
]

export const hostingStack: string[] = [
  'Managed VPS', 'WordPress', 'LiteSpeed', 'Free SSL', 'CDN', 'WAF', 'Daily Backups', 'Cloudflare',
]

export const hostingFaqs: HostingFaq[] = [
  {
    q: 'What does the 30-day money-back guarantee cover?',
    a: 'If you are not happy within the first 30 days, tell us and we refund you directly — the full hosting fee, no runaround. It is a genuine, no-questions-asked refund so you can try the service risk-free.',
  },
  {
    q: 'Is this really fully managed?',
    a: 'Yes. We handle the server, security, SSL, updates, backups, caching, and monitoring. You get a fast WordPress site and a login — you never have to touch a control panel or manage the VPS yourself.',
  },
  {
    q: 'Can you migrate my existing website?',
    a: 'Absolutely, and it is free. Send us access to your current WordPress site and we move it over for you with no downtime and nothing broken.',
  },
  {
    q: 'What is the difference between the monthly and yearly plan?',
    a: 'Exactly the same fully managed hosting and features. Monthly is ₹249 billed each month; yearly is ₹2500 billed once — which saves you ₹488 a year, close to two months free.',
  },
  {
    q: 'What if my site gets hacked or infected with malware?',
    a: 'Malware protection and removal are included. We scan continuously, and if anything ever gets through, we clean it up for you at no extra charge.',
  },
  {
    q: 'Do I need to know anything technical?',
    a: 'No. That is the whole point of managed hosting — we run the technical side end to end so you can focus on your business, not your server.',
  },
]
