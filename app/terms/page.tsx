import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern your use of the MeghRoop website and services.',
  alternates: { canonical: '/terms' },
}

const sections = [
  { h: 'Using this website', p: 'By accessing meghroop.tech you agree to these terms. The content here is provided for general information about our services and may change without notice.' },
  { h: 'Our services', p: 'Specific engagements are governed by a separate written agreement or proposal between you and MeghRoop, which takes precedence over anything on this site.' },
  { h: 'Intellectual property', p: 'All branding, copy, and design on this website belong to MeghRoop unless stated otherwise. Work delivered to clients is owned per the terms of each engagement.' },
  { h: 'Limitation of liability', p: 'The website is provided "as is". To the extent permitted by law, MeghRoop is not liable for any indirect or consequential loss arising from its use.' },
  { h: 'Contact', p: 'Questions about these terms? Email hello@meghroop.tech.' },
]

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3">Terms of Service</h1>
          <p className="text-white/40 text-sm mb-14">Last updated: {new Date().getFullYear()}</p>
          <div className="space-y-10">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-heading font-bold text-xl text-white mb-3">{s.h}</h2>
                <p className="text-white/[0.6] leading-relaxed">{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
