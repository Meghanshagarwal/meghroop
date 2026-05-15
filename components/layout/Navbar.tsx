'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Bot } from 'lucide-react'
import Link from 'next/link'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'AI Agents', href: '#agentic-ai' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'backdrop-blur-xl bg-black/70 border-white/[0.06]'
          : 'bg-transparent border-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
            <span className="text-white font-bold font-heading text-sm">M</span>
          </div>
          <span className="font-heading font-bold text-lg text-white group-hover:gradient-text transition-all duration-300">
            MeghRoop
          </span>
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
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-white bg-white/[0.08] hover:bg-white/[0.12] border border-white/[0.1] rounded-lg transition-all duration-200"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden backdrop-blur-xl bg-black/90 border-b border-white/[0.06] overflow-hidden"
          >
            <ul className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 text-sm rounded-lg transition-all duration-200 ${
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
              <li className="mt-2">
                <Link
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-white text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg"
                >
                  Start a Project
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
