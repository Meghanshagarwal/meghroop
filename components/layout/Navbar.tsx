'use client'

import { useState, useEffect } from 'react'
import { Bot } from 'lucide-react'
import Link from 'next/link'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'AI Agents', href: '/#agentic-ai' },
  { label: 'Systems', href: '/systems' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                  link.label === 'AI Agents'
                    ? 'text-purple-300 hover:text-purple-200 hover:bg-purple-500/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {link.label === 'AI Agents' && (
                  <Bot size={12} className="inline mr-1.5 -mt-0.5" />
                )}
                {link.label}
              </Link>
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
