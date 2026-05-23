'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy, Flame } from 'lucide-react'

// Custom inline SVG icons for social connections to guarantee compatibility and look extremely premium
const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const InstagramIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 0.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const FacebookIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8c0-.05 0-.1 0-.15z" />
  </svg>
)

const YoutubeIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11C6.483 20.455 12 20.455 12 20.455s7.517 0 9.387-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export default function ContactMinimalDetails() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@meghroop.tech')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    { icon: LinkedinIcon, href: 'https://linkedin.com/company/meghroop', label: 'LinkedIn // Studio' },
    { icon: InstagramIcon, href: 'https://www.instagram.com/meghroop.tech', label: 'Instagram // Feed' },
    { icon: FacebookIcon, href: 'https://www.facebook.com/meghroop.tech', label: 'Facebook // Hub' },
    { icon: YoutubeIcon, href: 'https://www.youtube.com/channel/UCcmaDrZZMKlKu-ZJCxpPVjQ', label: 'YouTube // Channel' },
  ]

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden" aria-label="Direct contact details">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Direct Email */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-[#050505]/50 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.1] transition-all flex flex-col justify-between min-h-[180px]">
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-cyan-400 tracking-widest uppercase block">
                {"//"} DIRECT DISPATCH
              </span>
              <h3 className="font-heading font-bold text-lg text-white">Email Gateway</h3>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[220px]">
                Drop us a line for direct partnership briefs or general inquiries.
              </p>
            </div>
            
            <div className="flex items-center justify-between gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-2.5 mt-4">
              <a
                href="mailto:hello@meghroop.tech"
                className="text-xs font-mono text-white hover:text-cyan-400 transition-colors truncate"
              >
                hello@meghroop.tech
              </a>
              <button
                onClick={handleCopy}
                className="p-1.5 rounded-lg hover:bg-white/[0.04] text-gray-500 hover:text-white transition-colors relative flex items-center justify-center"
                aria-label="Copy email address"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="text-emerald-400"
                    >
                      <Check size={12} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                    >
                      <Copy size={12} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
 
          {/* Card 2: Social Networks */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-[#050505]/50 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.1] transition-all flex flex-col justify-between min-h-[180px]">
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-purple-400 tracking-widest uppercase block">
                {"//"} DISTRIBUTED NODES
              </span>
              <h3 className="font-heading font-bold text-lg text-white">Social Frameworks</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Connect with our founders, explore our feed, or track live updates.
              </p>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.05] hover:border-white/10 text-gray-500 hover:text-white transition-all group/item"
                    aria-label={social.label}
                  >
                    <Icon size={14} />
                    <span className="text-[8px] font-mono text-gray-600 mt-2 truncate max-w-full">
                      {social.label.split(' // ')[1]}
                    </span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Card 3: SLA Expectation */}
          <div className="p-6 sm:p-8 rounded-2xl border border-white/[0.06] bg-[#050505]/50 backdrop-blur-md relative overflow-hidden group hover:border-white/[0.1] transition-all flex flex-col justify-between min-h-[180px]">
            <div className="space-y-4">
              <span className="text-[9px] font-mono text-emerald-400 tracking-widest uppercase block">
                {"//"} RESPONSE METRIC
              </span>
              <h3 className="font-heading font-bold text-lg text-white">Latency / Expectations</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                We respect your time. Every message is directly delivered to our engineering hubs.
              </p>
            </div>
            
            <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.06] rounded-xl px-4 py-3 mt-4">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Flame size={12} className="animate-pulse" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono text-white block font-semibold">
                  Avg Reply: &lt; 4 Hours
                </span>
                <span className="text-[8px] font-mono text-gray-500 block uppercase tracking-wider">
                  No automated templates.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
