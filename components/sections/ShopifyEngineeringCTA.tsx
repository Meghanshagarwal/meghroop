'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { trackEvent } from '@/lib/analytics'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' as const },
})

export default function ShopifyEngineeringCTA() {
  return (
    <section id="cta" className="section-padding overflow-hidden" aria-label="Call to action for Shopify development">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Floating gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-cyan-600/15 rounded-full blur-[100px] animate-float-delay" />
        </div>

        {/* CTA Content */}
        <motion.div {...fadeUp(0)} className="text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6 leading-tight">
            Build commerce{' '}
            <span className="gradient-text">that feels modern.</span>
          </h2>

          <motion.p {...fadeUp(0.15)} className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10">
            Your storefront deserves better systems. Fast, intentional, conversion-focused ecommerce that doesn&apos;t feel generic. Let&apos;s
            build something that matters.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:hello@meghroop.com?subject=Shopify Engineering Inquiry"
              onClick={() => trackEvent('cta_click', 'Contact', { label: 'shopify_engineering_cta' })}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-all duration-200 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="https://wa.me/918076901234?text=Hi%20MeghRoop%2C%20I%27m%20interested%20in%20Shopify%20engineering%20services."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('cta_click', 'WhatsApp', { label: 'shopify_engineering_cta' })}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/[0.12] text-white font-semibold hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200"
            >
              Let&apos;s Chat
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
