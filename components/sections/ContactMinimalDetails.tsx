'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Copy, Flame } from 'lucide-react'

// Custom inline SVG icons for social connections to guarantee compatibility and look extremely premium
const GithubIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedinIcon = ({ size = 14 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
    { icon: GithubIcon, href: 'https://github.com/Meghanshagarwal/meghroop', label: 'GitHub // Repo' },
    { icon: XIcon, href: 'https://twitter.com', label: 'Twitter // X' },
    { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn // Studio' },
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
                Connect with our founders, view experimental repos, or track live updates.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mt-4">
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
