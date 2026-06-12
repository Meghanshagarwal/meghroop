'use client'

import { useState, useEffect } from 'react'
import { Bot, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'
import { aiAgentLinks } from '@/data/aiAgents'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'AI Agents', href: '/agentic-ai', dropdown: true },
  { label: 'Systems', href: '/systems' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [agentsOpen, setAgentsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b animate-slide-down transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-black/70 border-white/[0.06]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="MeghRoop home">
          <MeghRoopLogo variant="favicon" />
          <MeghRoopLogo
            variant="navbar"
            className="transition-opacity duration-200 group-hover:opacity-80"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={link.dropdown ? 'relative' : undefined}
              onMouseEnter={link.dropdown ? () => setAgentsOpen(true) : undefined}
              onMouseLeave={link.dropdown ? () => setAgentsOpen(false) : undefined}
            >
              <Link
                href={link.href}
                aria-haspopup={link.dropdown ? 'menu' : undefined}
                aria-expanded={link.dropdown ? agentsOpen : undefined}
                className={`flex items-center px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  link.label === 'AI Agents'
                    ? 'text-purple-300 hover:text-purple-200 hover:bg-purple-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label === 'AI Agents' && (
                  <Bot size={12} className="mr-1.5 -mt-0.5" />
                )}
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={13}
                    className={`ml-1 transition-transform duration-200 ${agentsOpen ? 'rotate-180' : ''}`}
                  />
                )}
              </Link>

              {/* AI Agents dropdown */}
              {link.dropdown && (
                <div
                  role="menu"
                  className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[20rem] transition-all duration-200 ${
                    agentsOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="rounded-2xl border border-white/[0.08] bg-black/90 backdrop-blur-xl p-2 shadow-2xl shadow-black/60">
                    {aiAgentLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className="block px-3 py-2.5 rounded-xl hover:bg-purple-500/10 transition-colors duration-150 group/item"
                      >
                        <span className="block text-sm font-medium text-gray-200 group-hover/item:text-purple-200">
                          {item.label}
                        </span>
                        <span className="block text-xs text-gray-500 mt-0.5 leading-snug">
                          {item.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] rounded-lg transition-all duration-200"
          >
            Let&apos;s Talk
          </Link>
        </div>

      </nav>
    </header>
  )
}
