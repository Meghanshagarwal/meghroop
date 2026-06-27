/**
 * Server-rendered, keyword-rich overview section.
 *
 * Two jobs:
 *  1. Adds substantial crawlable text content (the homepage was flagged as
 *     "thin content"), distributing the core keywords — software, AI
 *     automation, AI agents, growth marketing — across real prose and headings.
 *  2. Because it is a Server Component (no 'use client'), the copy ships in the
 *     initial HTML, lifting the "rendered content" ratio for LLM/AI crawlers.
 */
export default function AgencyOverview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="section-padding border-t border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2
          id="overview-heading"
          className="font-heading font-bold text-3xl sm:text-5xl text-white tracking-tight mb-6"
        >
          A software, AI and growth marketing agency built for outcomes
        </h2>

        <div className="space-y-5 text-base sm:text-lg leading-relaxed text-gray-400">
          <p>
            MeghRoop is a software, AI and growth agency based in Jaipur, India,
            working with founders and teams worldwide. We combine performance
            marketing, AI automation and custom software engineering under one
            roof, so the team that builds your product is the same team that
            grows it. From awareness to automation, from code to customers — we
            own the full journey instead of handing you off between vendors.
          </p>
          <p>
            Our growth marketing work covers Meta Ads, Google Ads, SEO, social
            media management and content that turns attention into qualified
            leads and measurable revenue. On the engineering side we build
            custom software, SaaS products, web applications, Shopify
            storefronts and WordPress sites with React, Next.js, Node.js and
            TypeScript — fast, accessible and built to last.
          </p>
          <p>
            Where most agencies stop at marketing or development, we go further
            with AI automation. We design custom AI agents, agentic AI systems
            and n8n workflow automation that handle repetitive work around the
            clock — from WhatsApp and CRM automation to AI voice agents, sales
            intelligence and Model Context Protocol (MCP) infrastructure. Each
            automation is engineered to remove a real bottleneck, not to chase a
            trend.
          </p>
          <p>
            Every engagement starts with a clear plan across software, AI and
            marketing, and ends with systems you actually own. If you want to
            scale a business with performance marketing, AI agents, automation
            and custom software, talk to us — we reply within 24 hours.
          </p>
        </div>

        <h3 className="font-heading font-semibold text-xl text-white mt-12 mb-4">
          What MeghRoop helps you do
        </h3>
        <ul className="grid sm:grid-cols-2 gap-3 text-gray-400">
          <li>Scale growth with performance marketing and SEO</li>
          <li>Automate operations with AI agents and n8n workflows</li>
          <li>Ship custom software, SaaS and web applications</li>
          <li>Build Shopify and WordPress storefronts that convert</li>
          <li>Connect AI to your CRM, helpdesk and tools via MCP</li>
          <li>Optimize for AI search and generative engines (GEO)</li>
        </ul>
      </div>
    </section>
  )
}
