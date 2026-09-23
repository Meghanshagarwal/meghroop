import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  BarChart3,
  Users,
  Layers,
  Clock,
  Send,
  Check,
  Globe,
  Smartphone,
  Megaphone,
  Building2,
  Rocket,
  Link2,
  FileEdit,
  Timer,
  UserCheck,
  TrendingUp,
  Eye,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ProductFAQ from '@/components/sections/ProductFAQ'

export const metadata: Metadata = {
  title: 'Social Media Automation Tool for Startups & Agencies | MeghRoop',
  description:
    'Schedule, publish, and analyze social media content across Facebook, Instagram, X, LinkedIn, and YouTube from one dashboard. Built for startups and agencies that need results without the enterprise price tag.',
  alternates: { canonical: '/product/social-media-automation-tool' },
  openGraph: {
    title: 'Social Media Automation Tool for Startups & Agencies | MeghRoop',
    description:
      'Schedule, publish, and analyze social media content across Facebook, Instagram, X, LinkedIn, and YouTube from one dashboard. Built for startups and agencies.',
  },
}

/* ── Data ── */

const manualVsAutoRows = [
  {
    aspect: 'Publishing',
    manual: 'Log into each platform separately',
    auto: 'Schedule once, publish everywhere',
  },
  {
    aspect: 'Timing',
    manual: 'Post when you remember to',
    auto: 'Posts go live at planned times automatically',
  },
  {
    aspect: 'Reporting',
    manual: 'Screenshot metrics from each app',
    auto: 'Consolidated dashboard, exportable reports',
  },
  {
    aspect: 'Team workflow',
    manual: 'Shared logins, no approval trail',
    auto: 'Role-based access and review steps',
  },
  {
    aspect: 'Scaling',
    manual: 'Gets harder with every new account',
    auto: 'Same effort regardless of account count',
  },
]

const keyFeatures = [
  {
    icon: CalendarDays,
    title: 'Scheduling & Publishing',
    desc: 'Plan and queue content across multiple platforms from one content calendar. Draft posts in advance, preview how they\'ll look before they go live, and let the tool auto-publish at your chosen time — no need to be online when a post is scheduled.',
    highlights: ['Content calendar view', 'Multi-platform preview', 'Auto-publish at chosen time', 'Instagram Stories support'],
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    desc: 'Track engagement, reach, and audience growth across every connected account without switching platforms. Reports can be exported or, for agencies, white-labeled for client delivery.',
    highlights: ['Engagement rate tracking', 'Audience demographics', 'Campaign-level performance', 'White-label reports for agencies'],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    desc: 'Assign roles, route posts through a review step before they publish, and control who can access which accounts. Replaces shared logins and guesswork with a clear approval trail.',
    highlights: ['Role-based access control', 'Post approval workflow', 'Per-account permissions', 'Activity audit trail'],
  },
  {
    icon: Layers,
    title: 'Campaign Management',
    desc: 'Group related posts into a single campaign to plan and measure them together, across platforms, rather than tracking each post as an isolated item.',
    highlights: ['Cross-platform campaigns', 'Grouped performance metrics', 'Campaign-level scheduling', 'Visual campaign timeline'],
  },
]

const platforms = [
  { name: 'Facebook', color: 'bg-blue-500' },
  { name: 'Instagram', color: 'bg-pink-500' },
  { name: 'X (Twitter)', color: 'bg-white' },
  { name: 'LinkedIn', color: 'bg-blue-600' },
  { name: 'YouTube', color: 'bg-red-500' },
]

const howItWorksSteps = [
  {
    step: '01',
    title: 'Connect your accounts',
    desc: 'Link your Facebook, Instagram, X, LinkedIn, and YouTube accounts to the dashboard.',
    icon: Link2,
  },
  {
    step: '02',
    title: 'Plan your content',
    desc: 'Draft posts and place them on a shared content calendar, individually or in bulk.',
    icon: FileEdit,
  },
  {
    step: '03',
    title: 'Schedule or auto-publish',
    desc: 'Set publish times in advance, or queue content to go out automatically based on your posting schedule.',
    icon: Timer,
  },
  {
    step: '04',
    title: 'Review and approve',
    desc: 'If you work with a team, route drafts through an approval step before they go live.',
    icon: UserCheck,
  },
  {
    step: '05',
    title: 'Track performance',
    desc: 'Monitor engagement and reach in the analytics dashboard, and export reports as needed.',
    icon: TrendingUp,
  },
]

const faqs = [
  {
    q: 'What is a social media automation tool?',
    a: 'A social media automation tool is software that schedules, publishes, and reports on social media content across multiple platforms from one dashboard, reducing the manual work of posting and tracking performance on each platform separately.',
  },
  {
    q: 'Which social platforms does it support?',
    a: 'Facebook, Instagram, X (formerly Twitter), LinkedIn, and YouTube are supported for scheduling, publishing, and analytics.',
  },
  {
    q: 'Is this suitable for a one-person team or solo founder?',
    a: 'Yes. The core scheduling and analytics features work whether you\'re managing accounts solo or with a full team — collaboration and approval features become useful once more people are involved, but aren\'t required to use the tool.',
  },
  {
    q: 'How is this different from posting manually?',
    a: 'Manual posting means logging into each platform separately, tracking performance by hand, and having no formal record of who approved what. Automation consolidates scheduling, publishing, and reporting into one dashboard and adds a structured approval workflow for teams.',
  },
  {
    q: 'How does the pricing work?',
    a: 'Pricing is pay-as-you-go, meaning cost scales with actual usage rather than a fixed monthly fee — useful for teams whose content volume changes from month to month.',
  },
  {
    q: 'Can agencies manage multiple client accounts with this tool?',
    a: 'Yes. The platform supports managing multiple accounts with white-label reporting and team permission controls, so client work can stay organized and separated by account.',
  },
]

export default function SocialMediaAutomationPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        {/* ── Hero ── */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#f472b6]/[0.08] rounded-full blur-[170px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 pt-6 pb-16 sm:pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f472b6]" />
              Social Media Automation • Product
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.04] tracking-tight mb-7">
              Social Media Automation Tool for{' '}
              <span className="gradient-text">Startups & Agencies</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/[0.62] max-w-3xl mx-auto leading-relaxed mb-5">
              Managing five social platforms by hand doesn&apos;t scale — not for a three-person startup and not for an agency juggling a dozen client accounts. Schedule, publish, and track content across <strong className="text-white">Facebook, Instagram, X, LinkedIn, and YouTube</strong> from a single dashboard.
            </p>
            <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
              Spend less time switching tabs and more time on strategy.
            </p>

            {/* Supported Platforms Pills */}
            <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
              {platforms.map((p) => (
                <span
                  key={p.name}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-[13px] text-white/70"
                >
                  <span className={`w-2 h-2 rounded-full ${p.color}`} />
                  {p.name}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[15px]"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-white/80 hover:text-white hover:bg-white/[0.08] transition-all text-[15px]"
              >
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ── What Is Social Media Automation? ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="text-[13px] uppercase tracking-wider text-[#f472b6] font-mono font-medium block mb-3">
                  Definition
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                  What Is Social Media Automation?
                </h2>
                <p className="text-white/60 leading-relaxed mb-5 text-[16px]">
                  Social media automation is the use of software to handle the repetitive parts of running social accounts — scheduling posts in advance, publishing them automatically at the right time, and pulling performance data into one report — instead of logging into each platform manually every day.
                </p>
                <p className="text-white/60 leading-relaxed text-[16px]">
                  It doesn&apos;t replace strategy or creativity. It removes the manual, time-consuming steps around them: copy-pasting captions into five apps, tracking who approved what, and building reports by hand from screenshots.
                </p>
              </div>

              {/* Manual vs Automation comparison */}
              <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden">
                <div className="p-6 pb-4 border-b border-white/[0.06]">
                  <h3 className="font-heading font-semibold text-lg text-white flex items-center gap-3">
                    <Clock size={18} className="text-[#f472b6]" />
                    Manual Posting vs. Automation
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-[13px]">
                    <thead>
                      <tr className="bg-white/[0.03]">
                        <th className="text-left px-5 py-3 font-semibold text-white/80">Aspect</th>
                        <th className="text-left px-5 py-3 font-semibold text-white/40">Manual</th>
                        <th className="text-left px-5 py-3 font-semibold text-[#f472b6]">Automated</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                      {manualVsAutoRows.map((row, i) => (
                        <tr key={i}>
                          <td className="px-5 py-3 font-medium text-white">{row.aspect}</td>
                          <td className="px-5 py-3 text-white/40">{row.manual}</td>
                          <td className="px-5 py-3 text-white/90 font-medium">{row.auto}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Features ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#f472b6] font-mono font-medium block mb-3">
                Features
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Key Features
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Four core capabilities that make managing multiple social accounts feel like managing one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyFeatures.map((f, i) => {
                const IconComponent = f.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#f472b6]/[0.08] text-[#f472b6] flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-3">{f.title}</h3>
                    <p className="text-white/50 text-[15px] leading-relaxed mb-5">{f.desc}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {f.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-white/60 text-[13px]">
                          <Check size={12} className="text-[#f472b6] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Who It's For ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#f472b6] font-mono font-medium block mb-3">
                Audience
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Who It&apos;s For
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#f472b6]/10 text-[#f472b6] flex items-center justify-center mb-6">
                  <Rocket size={22} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">Startups</h3>
                <p className="text-white/60 text-[15px] leading-relaxed mb-5">
                  Early-stage teams usually don&apos;t have a dedicated social media hire, let alone a department. A social media management tool built for startups needs to be fast to set up, light on the learning curve, and priced in a way that doesn&apos;t eat into a limited marketing budget.
                </p>
                <ul className="space-y-2">
                  {['Fast setup, minimal learning curve', 'Consistent posting without a dedicated hire', 'Basic performance visibility', 'Budget-friendly pricing'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/70 text-[14px]">
                      <Check size={14} className="text-[#f472b6] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10 hover:border-white/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#f472b6]/10 text-[#f472b6] flex items-center justify-center mb-6">
                  <Building2 size={22} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-white mb-4">Agencies</h3>
                <p className="text-white/60 text-[15px] leading-relaxed mb-5">
                  Agencies have a different problem: volume and client accountability. Managing multiple client accounts means you need clean separation between clients, an approval workflow so nothing goes live without sign-off, and reporting you can hand to a client without extra formatting.
                </p>
                <ul className="space-y-2">
                  {['Multi-client account management', 'Approval workflows before publishing', 'White-label reports for clients', 'Team permissions and access control'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/70 text-[14px]">
                      <Check size={14} className="text-[#f472b6] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#f472b6] font-mono font-medium block mb-3">
                Workflow
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                How It Works
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Five steps from account connection to performance tracking — all in one dashboard.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {howItWorksSteps.map((s) => {
                const IconComponent = s.icon
                return (
                  <div
                    key={s.step}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-2xl font-bold text-[#f472b6]">{s.step}</span>
                      <div className="p-2.5 rounded-xl bg-white/[0.03] text-white/70">
                        <IconComponent size={18} />
                      </div>
                    </div>
                    <h3 className="font-heading font-bold text-[15px] text-white mb-2">{s.title}</h3>
                    <p className="text-white/50 text-[13px] leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
                <span className="text-[13px] uppercase tracking-wider text-[#f472b6] font-mono font-medium block mb-3">
                  Investment
                </span>
                <h2 className="font-heading font-bold text-2xl text-white mb-4">Pricing</h2>
                <p className="text-white/60 leading-relaxed text-[15px] mb-5">
                  Pay-as-you-go pricing — you pay for what you use instead of committing to a fixed monthly plan you may not fully use.
                </p>
                <p className="text-white/60 leading-relaxed text-[15px]">
                  This suits startups and small teams whose posting volume fluctuates month to month, and agencies that want costs to scale in line with the number of client accounts they manage.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#f472b6]/[0.06] to-transparent border border-[#f472b6]/20 rounded-2xl p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-xl text-white mb-4">Why pay-as-you-go works:</h3>
                <ul className="space-y-3">
                  {[
                    'No fixed monthly fee — costs match actual usage',
                    'Scale with your posting volume, not against it',
                    'Agencies: costs align with client account count',
                    'No bloated enterprise pricing for small teams',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80 text-[15px]">
                      <Check size={16} className="text-[#f472b6] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 text-[#f472b6] hover:underline font-medium text-[15px]"
                >
                  Get Pricing Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[13px] uppercase tracking-wider text-[#f472b6] font-mono font-medium block mb-3">
                Questions
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <ProductFAQ faqs={faqs} />
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-[#f472b6]/[0.06] rounded-full blur-[160px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Ready to Automate Your Social Media?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Stop switching between five apps. Schedule, publish, and track all your social media content from one dashboard — whether you&apos;re a startup or an agency.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[16px]"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl glass text-white/80 hover:text-white hover:bg-white/[0.08] transition-all text-[15px]"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
