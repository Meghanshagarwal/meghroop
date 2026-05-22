import Link from 'next/link'
import { Mail } from 'lucide-react'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'

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
    glowColor: 'rgba(139,92,246,0.25)',
    borderHover: 'hover:border-purple-500/40',
    bgHover: 'hover:bg-purple-500/[0.08]',
  },
  {
    icon: LinkedinIcon,
    href: 'https://linkedin.com/company/meghroop',
    label: 'LinkedIn',
    hoverColor: 'hover:text-blue-400',
    glowColor: 'rgba(59,130,246,0.25)',
    borderHover: 'hover:border-blue-500/40',
    bgHover: 'hover:bg-blue-500/[0.08]',
  },
  {
    icon: InstagramIcon,
    href: 'https://www.instagram.com/meghroop.tech',
    label: 'Instagram',
    hoverColor: 'hover:text-pink-400',
    glowColor: 'rgba(236,72,153,0.25)',
    borderHover: 'hover:border-pink-500/40',
    bgHover: 'hover:bg-pink-500/[0.08]',
  },
  {
    icon: FacebookIcon,
    href: 'https://www.facebook.com/meghroop.tech',
    label: 'Facebook',
    hoverColor: 'hover:text-blue-500',
    glowColor: 'rgba(59,130,246,0.25)',
    borderHover: 'hover:border-blue-500/40',
    bgHover: 'hover:bg-blue-500/[0.08]',
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <MeghRoopLogo variant="favicon" />
              <MeghRoopLogo variant="primary" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Not a massive agency. Not trying to be one. Two people, one obsession — AI systems, web experiences, and intelligent infrastructure that quietly does its job. Made in India. Built for everywhere.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 mt-6">
              {socialLinks.map(({ icon: Icon, href, label, hoverColor, glowColor, borderHover, bgHover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`relative w-9 h-9 rounded-xl border border-white/[0.08] flex items-center justify-center text-gray-400 transition-all duration-200 hover:scale-110 hover:-translate-y-0.5 active:scale-95 ${hoverColor} ${borderHover} ${bgHover} group`}
                  style={{
                    ['--glow' as string]: glowColor,
                  }}
                >
                  {/* Glow on hover */}
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ boxShadow: `0 0 16px ${glowColor}, 0 0 4px ${glowColor}` }}
                  />
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold text-white mb-4 font-heading">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Studio', href: '/about' },
                { label: 'Systems & Showcases', href: '/systems' },
                { label: 'Engineering Journal', href: '/journal' },
                { label: 'Initiate Conversation', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer capabilities directory">
            <h3 className="text-sm font-semibold text-white mb-4 font-heading">Capabilities</h3>
            <ul className="space-y-2">
              {[
                { label: 'AI Agents & Automation', href: '/ai-agents-automation' },
                { label: 'Model Context Infrastructure', href: '/mcp-infrastructure' },
                { label: 'n8n Workflow Automation', href: '/n8n-workflows' },
                { label: 'AI Search Optimization (GEO)', href: '/ai-search-optimization' },
                { label: 'Headless Shopify Engineering', href: '/shopify-engineering' },
                { label: 'High-Performance Web Engineering', href: '/web-engineering' },
                { label: 'WordPress Engineering', href: '/wordpress-engineering' },
              ].map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* India badge */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] group hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-300"
          >
            {/* India flag SVG */}
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-[2px] flex-shrink-0 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="India flag"
            >
              {/* Saffron */}
              <rect width="20" height="4.67" y="0" fill="#FF9933" />
              {/* White */}
              <rect width="20" height="4.67" y="4.67" fill="#FFFFFF" />
              {/* Green */}
              <rect width="20" height="4.67" y="9.33" fill="#138808" />
              {/* Ashoka Chakra */}
              <circle cx="10" cy="7" r="1.8" stroke="#000080" strokeWidth="0.5" fill="none" />
              <circle cx="10" cy="7" r="0.3" fill="#000080" />
              {/* 24 spokes */}
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24
                const rad = (angle * Math.PI) / 180
                const x1 = 10 + 0.3 * Math.cos(rad)
                const y1 = 7 + 0.3 * Math.sin(rad)
                const x2 = 10 + 1.8 * Math.cos(rad)
                const y2 = 7 + 1.8 * Math.sin(rad)
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#000080" strokeWidth="0.3" />
              })}
            </svg>
            <span className="font-heading text-[11px] tracking-[0.18em] uppercase text-gray-600 group-hover:text-gray-400 transition-colors duration-300 select-none">
              Made in India
            </span>
            <span className="text-white/20 text-[10px] group-hover:text-white/30 transition-colors duration-300">•</span>
            <span className="font-heading text-[11px] tracking-[0.18em] uppercase text-gray-600 group-hover:text-gray-400 transition-colors duration-300 select-none">
              For Everywhere
            </span>
          </div>
        </div>

        {/* Crawlable GEO + semantic positioning — invisible to users, clear to AI */}
        <p className="sr-only">
          MeghRoop is a creative engineering and AI studio based in India, working with clients worldwide.
          We specialize in custom AI agent development, agentic AI systems, n8n workflow automation,
          MCP server development, multi-agent systems, full stack web development with React and Next.js,
          and generative engine optimization (GEO) for AI search discoverability.
          Founded in 2022. Contact: hello@meghroop.tech
        </p>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MeghRoop Studio. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Handbuilt. Slightly overthought.{' '}
            <span className="gradient-text-purple font-medium">Shipped anyway.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
