import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How MeghRoop collects, uses, and protects your information.',
  alternates: { canonical: '/privacy' },
}

const sections = [
  { h: 'Information we collect', p: 'When you contact us or book a call, we collect details you provide — such as your name, email, phone number, and project information. We also collect basic analytics data (via Google Analytics, Meta Pixel, and Microsoft Clarity) to understand how the site is used.' },
  { h: 'How we use it', p: 'We use your information to respond to enquiries, deliver our services, improve the website, and — only with your consent — send relevant updates. We do not sell your personal data.' },
  { h: 'Cookies & analytics', p: 'We use cookies and similar technologies for analytics and marketing measurement. You can control cookies through your browser settings.' },
  { h: 'Data sharing', p: 'We share data only with trusted processors that help us operate (e.g. analytics, email, hosting), and only as needed. We may disclose information where required by law.' },
  { h: 'Your rights', p: 'You can request access to, correction of, or deletion of your personal data at any time by emailing hello@meghroop.tech.' },
  { h: 'Contact', p: 'Questions about this policy? Email hello@meghroop.tech.' },
]

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white tracking-tight mb-3">Privacy Policy</h1>
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
