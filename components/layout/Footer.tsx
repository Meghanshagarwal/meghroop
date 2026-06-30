import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'
import { serviceLinks } from '@/data/services'
import { aiAgentLinks } from '@/data/aiAgents'

type IconProps = { size?: number }

const LinkedinIcon = ({ size = 16 }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = ({ size = 16 }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const XIcon = ({ size = 16 }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const YoutubeIcon = ({ size = 16 }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C6.483 20.455 12 20.455 12 20.455s7.517 0 9.387-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const FacebookIcon = ({ size = 16 }: IconProps) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8c0-.05 0-.1 0-.15z" />
  </svg>
)

const socialLinks = [
  {
    icon: Mail,
    href: 'mailto:hello@meghroop.tech',
    label: 'Email',
    hoverColor: 'hover:text-purple-400',
    glowClass: 'group-hover:shadow-[0_0_16px_rgba(139,92,246,0.25),0_0_4px_rgba(139,92,246,0.25)]',
    borderHover: 'hover:border-purple-500/40',
    bgHover: 'hover:bg-purple-500/[0.08]',
  },
  {
    icon: LinkedinIcon,
    href: 'https://linkedin.com/company/meghroop',
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-400',
    glowClass: 'group-hover:shadow-[0_0_16px_rgba(59,130,246,0.25),0_0_4px_rgba(59,130,246,0.25)]',
    borderHover: 'hover:border-blue-500/40',
    bgHover: 'hover:bg-blue-500/[0.08]',
  },
  {
    icon: XIcon,
    href: 'https://x.com/meghroop_tech',
    label: 'Twitter',
    hoverColor: 'hover:text-sky-400',
    glowClass: 'group-hover:shadow-[0_0_16px_rgba(56,189,248,0.25),0_0_4px_rgba(56,189,248,0.25)]',
    borderHover: 'hover:border-sky-500/40',
    bgHover: 'hover:bg-sky-500/[0.08]',
  },
  {
    icon: YoutubeIcon,
    href: 'https://www.youtube.com/channel/UCcmaDrZZMKlKu-ZJCxpPVjQ',
    label: 'YouTube',
    hoverColor: 'hover:text-red-500',
    glowClass: 'group-hover:shadow-[0_0_16px_rgba(239,68,68,0.25),0_0_4px_rgba(239,68,68,0.25)]',
    borderHover: 'hover:border-red-500/40',
    bgHover: 'hover:bg-red-500/[0.08]',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/meghroop.tech',
    label: 'Instagram',
    hoverColor: 'hover:text-pink-400',
    glowClass: 'group-hover:shadow-[0_0_16px_rgba(236,72,153,0.25),0_0_4px_rgba(236,72,153,0.25)]',
    borderHover: 'hover:border-pink-500/40',
    bgHover: 'hover:bg-pink-500/[0.08]',
  },
  {
    icon: FacebookIcon,
    href: 'https://www.facebook.com/meghroop.tech',
    label: 'Facebook',
    hoverColor: 'hover:text-blue-500',
    glowClass: 'group-hover:shadow-[0_0_16px_rgba(59,130,246,0.25),0_0_4px_rgba(59,130,246,0.25)]',
    borderHover: 'hover:border-blue-500/40',
    bgHover: 'hover:bg-blue-500/[0.08]',
  },
]

const companyLinks = [
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/work' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

const resourceLinks = [
  { label: 'Free SEO Checker', href: '/seo-checker' },
  { label: 'Case Studies', href: '/work' },
  { label: 'FAQs', href: '/#faq' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={`Footer ${title}`}>
      <h3 className="text-sm font-semibold text-white mb-4 font-heading">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((item) => (
          <li key={item.label}>
            <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#080808]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-10 sm:gap-12 mb-14">
          {/* Column 1 — Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <MeghRoopLogo variant="favicon" />
              <MeghRoopLogo variant="primary" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Software, AI, branding and growth systems for modern businesses. Made in India. Built for everywhere.
            </p>
            {/* Business address & phone — visible NAP for Local SEO */}
            <address className="not-italic mb-6 space-y-2.5">
              <a
                href="https://maps.google.com/?q=MeghRoop,+Jaipur,+Rajasthan,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                <MapPin size={15} className="mt-0.5 shrink-0 text-gray-500" />
                <span>Jhotwara, Jaipur, Rajasthan 302012, India</span>
              </a>
              <a
                href="tel:+918949508264"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone size={15} className="shrink-0 text-gray-500" />
                <span>+91 89495 08264</span>
              </a>
            </address>
            <div className="flex items-center gap-2.5">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor, glowClass, borderHover, bgHover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`relative w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-gray-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 active:scale-95 ${hoverColor} ${borderHover} ${bgHover} ${glowClass} group`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <FooterCol title="Services" links={serviceLinks} />

          {/* Column 3 — AI Agents */}
          <FooterCol title="AI Agents" links={aiAgentLinks.map(({ label, href }) => ({ label, href }))} />

          {/* Column 4 — Company */}
          <FooterCol title="Company" links={companyLinks} />

          {/* Column 5 — Resources */}
          <FooterCol title="Resources" links={resourceLinks} />
        </div>

        {/* GEO / semantic positioning — crawlable */}
        <p className="sr-only">
          MeghRoop is a premium Software, AI and Growth agency. We help businesses grow through
          performance marketing (Meta Ads, Google Ads, SEO, social media, content), AI agents and
          automation (n8n, WhatsApp, CRM), custom software and SaaS development, Shopify and WordPress
          development, and branding and creative. From awareness to automation. From code to customers.
          Based in Jaipur, Rajasthan, India. Serving clients worldwide.
        </p>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} MeghRoop. All rights reserved.</p>
          <p className="text-sm text-gray-500">
            From awareness to automation.{' '}
            <span className="gradient-text-purple font-medium">From code to customers.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
