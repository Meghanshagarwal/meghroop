import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Custom AI Agent Development | MeghRoop — Software, AI & Growth Agency",
  description: "We build production-grade AI agents that reason, plan, and execute — wired into your tools, your data, and your real workflows. Not a chatbot wrapper. Not a prompt template.",
  keywords: ["custom AI agents","AI agent development","LangChain","LangGraph","multi-agent systems","MCP servers","production AI","MeghRoop"],
  openGraph: {
    title: "Custom AI Agent Development | MeghRoop — Software, AI & Growth Agency",
    description: "We build production-grade AI agents that reason, plan, and execute — wired into your tools, your data, and your real workflows. Not a chatbot wrapper. Not a prompt template.",
    url: "https://meghroop.tech/ai-agents/custom-ai-agents",
    siteName: "MeghRoop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom AI Agent Development | MeghRoop — Software, AI & Growth Agency",
    description: "We build production-grade AI agents that reason, plan, and execute — wired into your tools, your data, and your real workflows. Not a chatbot wrapper. Not a prompt template.",
  },
  alternates: {
    canonical: "https://meghroop.tech/ai-agents/custom-ai-agents",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Custom AI Agent Development","description":"Bespoke AI agents that reason, plan, and execute — wired into your tools, your data, and your real workflows. Production-grade systems with guardrails, fallback logic, and human-in-the-loop gates.","provider":{"@type":"Organization","name":"MeghRoop","url":"https://meghroop.tech","email":"hello@meghroop.tech","telephone":"+918949508264","address":{"@type":"PostalAddress","addressLocality":"Jaipur","addressCountry":"IN"},"foundingDate":"2022"},"serviceType":"AI Agent Development","areaServed":"Worldwide","hasOfferCatalog":{"@type":"OfferCatalog","name":"AI Agent Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Sales Research Agent"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Support Resolution Agent"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Data Processing Agent"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Internal Ops Agent"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Research & Analysis Agent"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Content Intelligence Agent"}}]}}) }}
      />
      {children}
    </>
  )
}
