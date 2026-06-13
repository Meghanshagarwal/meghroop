import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import { articles, getAllArticles, getArticleBySlug } from '@/lib/journal'
import CodeBuiltVisual from '@/components/common/CodeBuiltVisual'

interface ArticlePageProps {
  params: { slug: string }
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

// Revalidate every 60s; new (Supabase) slugs render on-demand via ISR
export const revalidate = 60

// Prerender curated articles at build time; auto-published ones render on first request
export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

// Generate dynamic page metadata
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)
  if (!article) return {}

  const fullUrl = `${SITE_URL}/journal/${article.slug}`

  return {
    title: article.seo.title,
    description: article.seo.description,
    keywords: article.seo.keywords,
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: article.seo.title,
      description: article.seo.description,
      url: fullUrl,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
      images: [
        {
          url: article.heroImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      siteName: 'MeghRoop',
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seo.title,
      description: article.seo.description,
      images: [article.heroImage],
    },
  }
}

// Map slug to related services for topical authority clusters
function getRelatedServices(category: string) {
  switch (category) {
    case 'AI Infrastructure':
      return [
        { name: 'MCP Infrastructure', href: '/mcp-infrastructure', description: 'Grounded Model Context Protocol server ecosystems' },
        { name: 'AI Agents & Automation', href: '/ai-agents-automation', description: 'Bespoke operational reasoning agents' },
      ]
    case 'AI Search Optimization':
      return [
        { name: 'AI Search Optimization', href: '/ai-search-optimization', description: 'Generative Engine Optimization (GEO) engineering' },
        { name: 'Web Engineering', href: '/web-engineering', description: 'Premium high-performance Next.js architectures' },
      ]
    case 'Web Engineering':
      return [
        { name: 'Shopify Engineering', href: '/shopify-engineering', description: 'Ultra-fast sub-400ms headless storefronts' },
        { name: 'Web Engineering', href: '/web-engineering', description: 'Premium high-performance web systems' },
      ]
    case 'Automation':
      return [
        { name: 'n8n Workflows', href: '/n8n-workflows', description: 'Self-healing, enterprise-grade AI automation pipelines' },
        { name: 'AI Agents & Automation', href: '/ai-agents-automation', description: 'Bespoke reasoning and operational tools' },
      ]
    default:
      return [
        { name: 'AI Agents & Automation', href: '/ai-agents-automation', description: 'Custom reasoning AI systems' },
        { name: 'Web Engineering', href: '/web-engineering', description: 'High-performance bespoke engineering' },
      ]
  }
}

export default async function ArticleDetail({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug)
  if (!article) notFound()

  const allArticles = await getAllArticles()
  const fullUrl = `${SITE_URL}/journal/${article.slug}`
  const relatedServices = getRelatedServices(article.category)

  // JSON-LD dynamic BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Journal',
        item: `${SITE_URL}/journal`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: fullUrl,
      },
    ],
  }

  // JSON-LD dynamic BlogPosting Schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    alternativeHeadline: article.subtitle,
    description: article.description,
    image: article.heroImage,
    datePublished: article.date,
    dateModified: article.lastUpdated,
    author: {
      '@type': 'Person',
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'MeghRoop',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl,
    },
    genre: article.category,
    keywords: article.seo.keywords.join(', '),
  }

  // JSON-LD FAQ schema for dynamic answers
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Navbar />

      <article className="relative min-h-screen bg-black text-white py-24 sm:py-32 overflow-hidden" role="main">
        {/* Glow Effects */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-40 right-10 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="mb-10 text-xs sm:text-sm text-gray-500 flex items-center gap-2" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/journal" className="hover:text-white transition-colors duration-200">Journal</Link>
            <span>/</span>
            <span className="text-gray-400 truncate max-w-[200px] sm:max-w-sm" aria-current="page">{article.title}</span>
          </nav>

          {/* Back button */}
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Journal
          </Link>

          {/* Article Header */}
          <header className="max-w-4xl mb-12">
            <span className="inline-block px-3.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-heading tracking-wider uppercase mb-6">
              {article.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 font-light leading-relaxed mb-8">
              {article.subtitle}
            </p>

            {/* Telemetry bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-y border-white/[0.08] py-5">
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/[0.1] bg-white/[0.05]">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{article.author.name}</div>
                  <div className="text-xs text-gray-500">{article.author.role}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-gray-500" />
                  <span>Published: </span>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2 text-purple-300">
                  <Calendar size={14} className="text-purple-400" />
                  <span>Updated: </span>
                  {new Date(article.lastUpdated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} className="text-gray-500" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </header>

          {/* Pure Code-built Editorial Visual Hero instead of AI/stock image */}
          <div className="relative w-full h-[300px] sm:h-[480px] rounded-3xl overflow-hidden mb-16 border border-white/[0.08] bg-black">
            <CodeBuiltVisual category={article.category} slug={article.slug} />
          </div>

          {/* Article Grid Layout: Content vs Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            {/* Main Content Column */}
            <div className="lg:col-span-8">
              <div className="prose prose-invert max-w-none">
                {article.blocks.map((block, index) => {
                  switch (block.type) {
                    case 'heading':
                      if (block.level === 2) {
                        return (
                          <h2 key={index} className="text-2xl sm:text-3xl font-bold font-heading text-white mt-12 mb-6">
                            {block.content}
                          </h2>
                        )
                      }
                      return (
                        <h3 key={index} className="text-xl sm:text-2xl font-bold font-heading text-white mt-8 mb-4">
                          {block.content}
                        </h3>
                      )

                    case 'paragraph':
                      return (
                        <p key={index} className="text-gray-300 text-base sm:text-lg leading-relaxed font-light mb-6">
                          {block.content}
                        </p>
                      )

                    case 'list':
                      return (
                        <ul key={index} className="space-y-4 mb-6 pl-5 list-none">
                          {(block.content as string[]).map((item, itemIdx) => {
                            // Support basic inline bolding e.g. **text** -> <strong>text</strong>
                            const parts = item.split('**')
                            return (
                              <li key={itemIdx} className="text-gray-300 text-base sm:text-lg leading-relaxed font-light flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 flex-shrink-0" />
                                <span>
                                  {parts.map((part, partIdx) => 
                                    partIdx % 2 === 1 ? <strong key={partIdx} className="font-semibold text-white">{part}</strong> : part
                                  )}
                                </span>
                              </li>
                            )
                          })}
                        </ul>
                      )

                    case 'quote':
                      return (
                        <blockquote key={index} className="relative border-l-2 border-purple-500 pl-6 my-10 text-gray-400 text-lg sm:text-xl font-light italic leading-relaxed">
                          {block.content}
                        </blockquote>
                      )

                    case 'code':
                      return (
                        <div key={index} className="relative rounded-2xl border border-white/[0.08] bg-white/[0.01] overflow-hidden my-8 font-mono">
                          {/* File Header */}
                          <div className="flex items-center justify-between bg-white/[0.02] px-5 py-3 border-b border-white/[0.06] text-xs text-gray-500">
                            <span>example-connector.{block.language === 'typescript' ? 'ts' : 'js'}</span>
                            <span className="uppercase text-[10px] tracking-widest">{block.language}</span>
                          </div>
                          {/* Terminal content */}
                          <pre className="p-5 text-sm sm:text-base leading-relaxed overflow-x-auto text-purple-200">
                            <code>{block.content}</code>
                          </pre>
                        </div>
                      )

                    default:
                      return null
                  }
                })}
              </div>

              {/* Dynamic crawlable FAQs inside DOM to secure maximum semantic GEO/SEO points */}
              <section className="mt-16 pt-12 border-t border-white/[0.08]" aria-label="Frequently Asked Questions">
                <h2 className="text-2xl font-bold font-heading text-white mb-8">FAQ Insights</h2>
                <div className="space-y-6">
                  {article.faqs.map((faq, index) => (
                    <div key={index} className="bg-white/[0.01] border border-white/[0.04] rounded-2xl p-6">
                      <h3 className="text-base sm:text-lg font-medium text-white mb-3 flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center text-xs flex-shrink-0 mt-0.5 font-bold font-heading">Q</span>
                        {faq.question}
                      </h3>
                      <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Column: Cluster Services & CTA */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Topical Authority Cluster Sidebar */}
              <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.02] to-transparent p-6 sm:p-8">
                <h3 className="text-xs font-semibold text-gray-400 font-heading tracking-wider uppercase mb-6 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  Related Capabilities
                </h3>
                <div className="space-y-4">
                  {relatedServices.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="group block p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300"
                    >
                      <div className="flex items-center justify-between text-sm font-medium text-white group-hover:text-purple-300 transition-colors mb-1.5">
                        {service.name}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                      <p className="text-xs text-gray-500 leading-normal font-light">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Direct Studio CTA */}
              <div className="rounded-3xl border border-purple-500/20 bg-purple-950/10 p-6 sm:p-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-purple-500/5 blur-2xl group-hover:bg-purple-500/10 transition-colors duration-500 pointer-events-none" />
                <h3 className="text-lg font-bold font-heading text-white mb-3">
                  Have a complex system requirement?
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed font-light mb-6">
                  Skip the agency layers. Work directly with Meghansh & Roop to build grounded AI layers, autonomous workflows, and custom edge-cached platforms.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-black bg-white rounded-xl py-3 px-5 hover:bg-gray-200 transition-colors w-full justify-center"
                >
                  Initiate Conversation
                </Link>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          <section className="mt-24 pt-16 border-t border-white/[0.08]" aria-label="Related Articles">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <span className="inline-block px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-300 text-xs font-medium mb-3 font-heading tracking-wider uppercase">
                  Editorial Feed
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  Read Next
                </h2>
              </div>
              <Link 
                href="/journal" 
                className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group"
              >
                View all articles
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {allArticles
                .filter((a) => a.slug !== article.slug)
                .slice(0, 3)
                .map((relatedArticle) => (
                  <article
                    key={relatedArticle.slug}
                    className="group relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent p-5 flex flex-col justify-between overflow-hidden hover:border-white/[0.15] transition-colors duration-300 min-h-[380px]"
                  >
                    {/* Background Radial Glow */}
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-purple-500/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div>
                      {/* Code-built Editorial Visual */}
                      <div className="relative w-full h-32 rounded-xl overflow-hidden mb-4 border border-white/[0.06] bg-black">
                        <CodeBuiltVisual category={relatedArticle.category} slug={relatedArticle.slug} />
                      </div>

                      <span className="inline-block text-[10px] tracking-wider uppercase font-medium font-heading text-purple-400 mb-2">
                        {relatedArticle.category}
                      </span>

                      <Link href={`/journal/${relatedArticle.slug}`} className="block group/link">
                        <h3 className="text-lg font-bold font-heading text-white group-hover:text-purple-300 transition-colors duration-300 mb-2 line-clamp-2 leading-snug">
                          {relatedArticle.title}
                        </h3>
                      </Link>
                      <p className="text-gray-400 text-xs font-light line-clamp-3 leading-relaxed">
                        {relatedArticle.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-4">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/[0.1] bg-white/[0.05]">
                          <Image
                            src={relatedArticle.author.avatar}
                            alt={relatedArticle.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white">{relatedArticle.author.name}</div>
                        </div>
                      </div>

                      <span className="text-[10px] text-gray-500 flex items-center gap-1">
                        <Clock size={10} />
                        {relatedArticle.readTime}
                      </span>
                    </div>
                  </article>
                ))}
            </div>
          </section>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
