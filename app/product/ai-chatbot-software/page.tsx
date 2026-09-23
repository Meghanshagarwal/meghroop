import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  MessageSquare,
  Clock,
  Users,
  ShoppingCart,
  Smartphone,
  Globe,
  BarChart3,
  Bot,
  Check,
  X,
  Package,
  HeadphonesIcon,
  Zap,
  Send,
  Settings,
  BookOpen,
  TestTube,
  Plug,
  ShieldCheck,
} from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ProductFAQ from '@/components/sections/ProductFAQ'

export const metadata: Metadata = {
  title: 'AI Chatbot Software for Customer Service & Sales | 24/7 AI Agent',
  description:
    'Automate customer support and sales with AI chatbot software that answers questions 24/7, recovers abandoned carts, and hands off to humans when needed.',
  alternates: { canonical: '/product/ai-chatbot-software' },
  openGraph: {
    title: 'AI Chatbot Software for Customer Service & Sales | 24/7 AI Agent | MeghRoop',
    description:
      'Automate customer support and sales with AI chatbot software that answers questions 24/7, recovers abandoned carts, and hands off to humans when needed.',
  },
}

/* ── Data ── */

const customerServiceFeatures = [
  {
    icon: Clock,
    title: '24/7 Support Without Adding Headcount',
    desc: 'Customers don\'t only have questions during business hours. An AI chatbot answers common questions — shipping timelines, return policies, account issues — at 2 a.m. on a Sunday exactly as well as at 2 p.m. on a Tuesday.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Reducing Support Ticket Volume',
    desc: 'A well-trained knowledge base chatbot resolves repetitive questions before they ever reach your help desk. Your support team spends time on the issues that actually need a human.',
  },
  {
    icon: Users,
    title: 'Seamless Human Handover',
    desc: 'Good AI customer service agents recognize when a conversation needs a human — a frustrated customer, a billing dispute, an unusual request — and hand it over with full context so the customer never repeats themselves.',
  },
]

const salesFeatures = [
  {
    icon: ShoppingCart,
    title: 'Product Recommendations That Convert',
    desc: 'An AI shopping assistant asks a few quick questions and recommends specific products, working like a knowledgeable store associate available to every visitor at once.',
  },
  {
    icon: Package,
    title: 'Recovering Abandoned Carts',
    desc: 'When a shopper hesitates at checkout or leaves items behind, an abandoned cart recovery chatbot proactively steps in — answering last-minute objections about shipping, sizing, or returns.',
  },
  {
    icon: Send,
    title: 'Order Tracking & WISMO',
    desc: '"Where is my order?" is one of the highest-volume questions any ecommerce store receives. A chatbot connected to your order system answers this instantly, cutting a huge share of routine support volume.',
  },
]

const channels = [
  {
    icon: Globe,
    channel: 'Website Chat Widget',
    useCase: 'General support, lead capture, product Q&A',
  },
  {
    icon: Smartphone,
    channel: 'WhatsApp Chatbot',
    useCase: 'Order updates, support in WhatsApp-primary regions',
  },
  {
    icon: MessageSquare,
    channel: 'SMS Chatbot',
    useCase: 'Time-sensitive alerts, quick answers on mobile',
  },
  {
    icon: ShoppingCart,
    channel: 'Shopify Chatbot',
    useCase: 'Product recommendations, cart recovery, order tracking',
  },
  {
    icon: BookOpen,
    channel: 'WordPress Chatbot',
    useCase: 'Support and lead generation on content-driven sites',
  },
]

const setupSteps = [
  {
    step: '01',
    title: 'Connect your content',
    desc: 'Link your website, help center, or existing documentation so the chatbot can answer questions accurately.',
    icon: Plug,
  },
  {
    step: '02',
    title: 'Choose a template',
    desc: 'Select or customize a chatbot template for your industry or use case — support, sales, or lead generation.',
    icon: Settings,
  },
  {
    step: '03',
    title: 'Define handoff rules',
    desc: 'Set when the bot should hand off to a human agent — frustrated customers, billing disputes, or complex requests.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Set up channels',
    desc: 'Deploy across website, WhatsApp, SMS, or your ecommerce platform from one dashboard.',
    icon: Globe,
  },
  {
    step: '05',
    title: 'Test and go live',
    desc: 'Test conversations and refine responses before going live. The chatbot learns from your own content, not generic data.',
    icon: TestTube,
  },
]

const comparisonRows = [
  {
    feature: 'Who responds',
    chatbot: 'AI agent, automatically',
    liveChat: 'Human agent, manually',
  },
  {
    feature: 'Availability',
    chatbot: '24/7',
    liveChat: 'Limited to agent hours',
  },
  {
    feature: 'Response time',
    chatbot: 'Instant',
    liveChat: 'Depends on agent availability',
  },
  {
    feature: 'Best for',
    chatbot: 'Repetitive questions, initial triage, high volume',
    liveChat: 'Complex, sensitive, or high-value conversations',
  },
  {
    feature: 'Scales with volume',
    chatbot: 'Yes — unlimited concurrent chats',
    liveChat: 'No — requires more agents',
  },
]

const faqs = [
  {
    q: 'What is an AI chatbot?',
    a: 'An AI chatbot is software that uses conversational AI to understand and respond to customer questions in natural language, without a human agent needing to type each reply.',
  },
  {
    q: 'How is an AI agent different from a traditional chatbot?',
    a: 'A traditional chatbot follows fixed scripts and decision trees. An AI agent understands open-ended questions, can be trained on your own content, and can take actions like recommending products or creating support tickets — not just reply with pre-written text.',
  },
  {
    q: 'Can an AI chatbot integrate with WhatsApp and SMS?',
    a: 'Yes. Most modern AI chatbot platforms let you deploy the same trained agent across your website, WhatsApp, and SMS, so customers get consistent answers wherever they reach out.',
  },
  {
    q: 'How do I train a chatbot on my website content?',
    a: 'You typically connect the chatbot to your website URL, help center, or uploaded documents. The AI reads this content and uses it to answer customer questions accurately, without manual scripting for every possible question.',
  },
  {
    q: 'What happens when the chatbot can\'t answer a question?',
    a: 'A well-configured AI chatbot recognizes when it doesn\'t have a confident answer and hands the conversation to a human agent, along with the chat history, so the customer doesn\'t have to repeat themselves.',
  },
  {
    q: 'Is an AI chatbot better than live chat software?',
    a: 'Neither replaces the other entirely. AI chatbots are faster and available 24/7 for common questions; live chat is better for complex or sensitive conversations. Most businesses use both together.',
  },
  {
    q: 'How much does AI chatbot software cost?',
    a: 'Pricing typically depends on conversation volume, number of channels, and features like analytics or multilingual support. Providers usually offer a free trial so you can evaluate response quality before paying.',
  },
  {
    q: 'Can an AI chatbot work with Shopify or WordPress?',
    a: 'Yes. Purpose-built integrations let an AI chatbot access product catalogs and order data on Shopify, or support content and lead capture on WordPress, without custom development.',
  },
]

export default function AIChatbotSoftwarePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-28 sm:pt-32">
        {/* ── Hero ── */}
        <section className="grid-bg relative overflow-hidden">
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[80vw] h-[45vh] bg-[#34d399]/[0.08] rounded-full blur-[170px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-6 pt-6 pb-16 sm:pb-24 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-[13px] text-white/70 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
              AI Chatbot Software • Product
            </div>

            <h1 className="font-heading font-bold text-4xl sm:text-6xl md:text-7xl text-white leading-[1.04] tracking-tight mb-7">
              AI Chatbot Software for{' '}
              <span className="gradient-text">24/7 Customer Service, Sales & Support</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/[0.62] max-w-3xl mx-auto leading-relaxed mb-5">
              Running a business today means answering the same questions dozens of times a day, following up with shoppers who leave without buying, and trying to be available around the clock. An <strong className="text-white">AI chatbot</strong> solves all three — automatically, and without making customers feel like they&apos;re talking to a machine.
            </p>
            <p className="text-base text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
              This guide explains what AI chatbot software actually does, how it&apos;s used for customer service and sales, and what to look for before you choose one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[15px]"
              >
                Get Started Free
                <ArrowRight size={16} />
              </Link>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass text-white/80 hover:text-white hover:bg-white/[0.08] transition-all text-[15px]"
              >
                See How It Works
              </a>
            </div>
          </div>
        </section>

        {/* ── What Is an AI Chatbot? ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
                  Definition
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                  What Is an AI Chatbot?
                </h2>
                <p className="text-white/60 leading-relaxed mb-5 text-[16px]">
                  An AI chatbot is software that uses conversational AI to understand what a customer is asking and respond in natural language — without a human agent typing the reply. Unlike older rule-based bots that only followed rigid decision trees (&ldquo;Press 1 for billing&rdquo;), a modern AI agent can read your website, help center, and product catalog, then answer questions in its own words, hold a real conversation, and take action.
                </p>
                <p className="text-white/60 leading-relaxed text-[16px]">
                  The shift in terminology from &ldquo;chatbot&rdquo; to &ldquo;AI agent&rdquo; reflects this change: today&apos;s tools don&apos;t just chat, they complete tasks — qualifying leads, recovering abandoned carts, or handing a complex issue to a human teammate at the right moment.
                </p>
              </div>

              <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-8">
                <h3 className="font-heading font-semibold text-lg text-white mb-6 flex items-center gap-3">
                  <Bot size={18} className="text-[#34d399]" />
                  What Makes It Different:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X size={16} className="text-white/30 mt-1 shrink-0" />
                    <div>
                      <span className="text-white/40 text-[13px] font-mono">Old bots</span>
                      <p className="text-white/50 text-[14px]">Fixed scripts, decision trees, pre-written replies</p>
                    </div>
                  </div>
                  <div className="border-t border-white/[0.06]" />
                  <div className="flex items-start gap-3">
                    <Check size={16} className="text-[#34d399] mt-1 shrink-0" />
                    <div>
                      <span className="text-[#34d399] text-[13px] font-mono">AI chatbot</span>
                      <p className="text-white/70 text-[14px]">Reads your content, answers in its own words, takes real actions (recommends products, creates tickets, qualifies leads)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Customer Service ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
                Customer Service
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                How an AI Chatbot Improves Customer Service
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Remove the repetitive parts of customer service so your team focuses on the conversations that actually need a human.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {customerServiceFeatures.map((f, i) => {
                const IconComponent = f.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#34d399]/[0.08] text-[#34d399] flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{f.title}</h3>
                    <p className="text-white/50 text-[14px] leading-relaxed">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Sales & Ecommerce ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
                Sales & Ecommerce
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                AI Chatbots for Sales and Ecommerce
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                An AI chatbot for ecommerce does more than answer questions — it can actively drive revenue.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {salesFeatures.map((f, i) => {
                const IconComponent = f.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 hover:border-white/20 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#34d399]/[0.08] text-[#34d399] flex items-center justify-center mb-6">
                      <IconComponent size={22} />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-3">{f.title}</h3>
                    <p className="text-white/50 text-[14px] leading-relaxed">{f.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Channels ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
                Omnichannel
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Where Your AI Chatbot Can Work
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Deploy the same AI agent across every channel your customers actually use.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {channels.map((ch, i) => {
                const IconComponent = ch.icon
                return (
                  <div
                    key={i}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 hover:border-white/20 transition-all text-center"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#34d399]/10 text-[#34d399] flex items-center justify-center mx-auto mb-4">
                      <IconComponent size={20} />
                    </div>
                    <h3 className="font-heading font-bold text-[15px] text-white mb-2">{ch.channel}</h3>
                    <p className="text-white/50 text-[13px] leading-relaxed">{ch.useCase}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Setup Steps ── */}
        <section id="how-it-works" className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
                Setup
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                Building Your Chatbot: Training & Setup
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Most no-code AI chatbot builders let you launch without writing a line of code. Here&apos;s the typical process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {setupSteps.map((s) => {
                const IconComponent = s.icon
                return (
                  <div
                    key={s.step}
                    className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-6 hover:border-white/20 transition-all"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-mono text-2xl font-bold text-[#34d399]">{s.step}</span>
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

            <p className="text-center text-white/50 text-[14px] mt-8 max-w-2xl mx-auto">
              Because the chatbot is trained directly on <strong className="text-white/70">your own content</strong>, answers stay accurate to your business rather than generic.
            </p>
          </div>
        </section>

        {/* ── Analytics ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
                  Insights
                </span>
                <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-6">
                  Chatbot Analytics: Measuring What Matters
                </h2>
                <p className="text-white/60 leading-relaxed text-[16px]">
                  Chatbot analytics show you what&apos;s actually happening in every conversation: resolution rates, most-asked questions, where customers drop off, and — for sales use cases — which conversations led to a purchase. This kind of sales attribution reporting helps you see the chatbot&apos;s ROI in real numbers, not guesswork.
                </p>
              </div>

              <div className="bg-[#0d0d0d] border border-white/[0.08] rounded-2xl p-8">
                <h3 className="font-heading font-semibold text-lg text-white mb-6 flex items-center gap-3">
                  <BarChart3 size={18} className="text-[#34d399]" />
                  Key Metrics Tracked:
                </h3>
                <ul className="space-y-3">
                  {[
                    'Resolution rate — questions answered without human help',
                    'Most-asked questions — what customers really care about',
                    'Drop-off points — where conversations lose the customer',
                    'Sales attribution — which chats led to a purchase',
                    'Handoff rate — how often humans need to step in',
                    'Response quality — accuracy of AI answers over time',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/70 text-[14px]">
                      <span className="w-5 h-5 rounded-full bg-[#34d399]/10 text-[#34d399] flex items-center justify-center text-[11px] font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── AI Chatbot vs Live Chat ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
              <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
                Comparison
              </span>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight mb-5">
                AI Chatbot vs. Live Chat: What&apos;s the Difference?
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                One of the most common points of confusion for buyers comparing tools.
              </p>
            </div>

            <div className="border border-white/[0.08] rounded-2xl overflow-hidden bg-[#0d0d0d]">
              <div className="grid grid-cols-12 bg-white/[0.04] p-5 font-heading font-semibold text-[14px] text-white/80 border-b border-white/[0.08]">
                <div className="col-span-4">Feature</div>
                <div className="col-span-4 text-[#34d399]">AI Chatbot</div>
                <div className="col-span-4 text-white/40">Live Chat</div>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-5 text-[14px] items-center">
                    <div className="col-span-4 font-medium text-white">{row.feature}</div>
                    <div className="col-span-4 text-white/90 font-medium flex items-center gap-2">
                      <Check size={14} className="text-[#34d399] shrink-0" />
                      {row.chatbot}
                    </div>
                    <div className="col-span-4 text-white/40 flex items-center gap-2">
                      <span className="w-3.5 h-0.5 rounded bg-white/20 shrink-0" />
                      {row.liveChat}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-white/50 text-[14px] mt-6 max-w-2xl mx-auto">
              In practice, the strongest customer service automation setups <strong className="text-white/80">combine both</strong>: the AI chatbot handles volume and speed, and live agents step in for anything nuanced — with the chatbot handing over full conversation context automatically.
            </p>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="border-t border-white/[0.06] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-[#0d0d0d] border border-white/[0.06] rounded-2xl p-8 sm:p-10">
                <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
                  Investment
                </span>
                <h2 className="font-heading font-bold text-2xl text-white mb-4">Pricing</h2>
                <p className="text-white/60 leading-relaxed text-[15px] mb-6">
                  AI chatbot software pricing varies by provider and usually depends on conversation volume, number of channels, and available features (analytics, integrations, multilingual support).
                </p>
                <p className="text-white/60 leading-relaxed text-[15px]">
                  Look for a <strong className="text-white/80">free trial</strong> so you can test response quality on your own content before committing.
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#34d399]/[0.06] to-transparent border border-[#34d399]/20 rounded-2xl p-8 sm:p-10 flex flex-col justify-center">
                <h3 className="font-heading font-bold text-xl text-white mb-4">Pricing typically depends on:</h3>
                <ul className="space-y-3">
                  {[
                    'Conversation volume per month',
                    'Number of channels (web, WhatsApp, SMS)',
                    'Features: analytics, integrations, multilingual',
                    'Seats / team members with access',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/80 text-[15px]">
                      <Check size={16} className="text-[#34d399] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-6 text-[#34d399] hover:underline font-medium text-[15px]"
                >
                  Request Custom Pricing <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="border-t border-white/[0.06] bg-[#070707] py-20 sm:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[13px] uppercase tracking-wider text-[#34d399] font-mono font-medium block mb-3">
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
        <section className="border-t border-white/[0.06] py-24 sm:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vh] bg-[#34d399]/[0.06] rounded-full blur-[160px] pointer-events-none" />

          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6">
              Ready to Automate Customer Service & Sales?
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              See how an AI chatbot answers your real customer questions, recovers abandoned carts, and hands off to your team when it matters — all on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-all text-[16px]"
              >
                Get Started Free
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
