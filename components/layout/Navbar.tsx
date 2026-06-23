'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown, ArrowRight, Bot } from 'lucide-react'
import Link from 'next/link'
import MeghRoopLogo from '@/components/common/MeghRoopLogo'
import { serviceNav } from '@/data/services'
import { aiAgentLinks } from '@/data/aiAgents'

const navLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Journal', href: '/journal' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [agentsOpen, setAgentsOpen] = useState(false)

  // Small grace delay on close so moving the cursor across the gap between the
  // trigger and the (viewport-centered) dropdown doesn't snap the menu shut.
  const servicesTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const agentsTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const openServices = () => { if (servicesTimer.current) clearTimeout(servicesTimer.current); setServicesOpen(true) }
  const closeServices = () => { servicesTimer.current = setTimeout(() => setServicesOpen(false), 160) }
  const openAgents = () => { if (agentsTimer.current) clearTimeout(agentsTimer.current); setAgentsOpen(true) }
  const closeAgents = () => { agentsTimer.current = setTimeout(() => setAgentsOpen(false), 160) }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Clear any pending close timers on unmount
  useEffect(() => () => {
    if (servicesTimer.current) clearTimeout(servicesTimer.current)
    if (agentsTimer.current) clearTimeout(agentsTimer.current)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b animate-slide-down transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-[#080808]/75 border-white/[0.06]' : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="MeghRoop home">
          <MeghRoopLogo variant="favicon" />
          <MeghRoopLogo variant="navbar" className="transition-opacity duration-200 group-hover:opacity-80" />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {/* Services mega menu */}
          <li
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              className="flex items-center px-4 py-2 text-sm rounded-lg text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
            >
              Services
              <ChevronDown size={13} className={`ml-1 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <div
              role="menu"
              className={`fixed left-1/2 top-16 -translate-x-1/2 pt-3 w-[min(92vw,820px)] transition-all duration-200 ${
                servicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d]/95 backdrop-blur-xl p-3 shadow-2xl shadow-black/60">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                  {serviceNav.map((group) => (
                    <div key={group.label} className="p-3">
                      <Link
                        href={group.href}
                        className="flex items-center gap-2 mb-3 group/h"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${group.dot}`} />
                        <span className="text-[13px] font-semibold text-white group-hover/h:text-white/80">{group.label}</span>
                      </Link>
                      <ul className="space-y-1.5">
                        {group.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className="block text-[13px] text-gray-400 hover:text-white transition-colors"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <Link
                  href="/work"
                  className="mt-1 flex items-center justify-between gap-2 rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-3 hover:bg-white/[0.06] transition-colors group/cta"
                >
                  <span className="text-[13px] text-white/70">See the results across every service</span>
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white">
                    View Work <ArrowRight size={13} className="group-hover/cta:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>
          </li>

          {/* AI Agents dropdown */}
          <li
            className="relative"
            onMouseEnter={openAgents}
            onMouseLeave={closeAgents}
          >
            <Link
              href="/agentic-ai"
              aria-haspopup="menu"
              aria-expanded={agentsOpen}
              className="flex items-center px-4 py-2 text-sm rounded-lg text-purple-300 hover:text-purple-200 hover:bg-purple-500/10 transition-all duration-200"
            >
              <Bot size={13} className="mr-1.5" />
              AI Agents
              <ChevronDown size={13} className={`ml-1 transition-transform duration-200 ${agentsOpen ? 'rotate-180' : ''}`} />
            </Link>

            <div
              role="menu"
              className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[21rem] transition-all duration-200 ${
                agentsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1 pointer-events-none'
              }`}
            >
              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d]/95 backdrop-blur-xl p-2 shadow-2xl shadow-black/60">
                {aiAgentLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    className="block px-3 py-2.5 rounded-xl hover:bg-purple-500/10 transition-colors duration-150 group/item"
                  >
                    <span className="block text-sm font-medium text-gray-200 group-hover/item:text-purple-200">{item.label}</span>
                    <span className="block text-xs text-gray-500 mt-0.5 leading-snug">{item.description}</span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center px-4 py-2 text-sm rounded-lg text-gray-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-black bg-white hover:bg-white/90 rounded-lg transition-all duration-200 shadow-[0_0_30px_rgba(192,132,252,0.15)]"
          >
            Book a Call
          </Link>
        </div>
      </nav>
    </header>
  )
}
