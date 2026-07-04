import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Integration Services — MeghRoop | Plug AI Into Your Existing Tools",
  description: "MeghRoop integrates AI into your existing CRM, ERP, helpdesk, and collaboration tools. Salesforce, HubSpot, SAP, Slack — no rip-and-replace, just smarter workflows.",
  keywords: ["AI integration","CRM AI","ERP AI","MCP servers","Salesforce AI","HubSpot AI","SAP integration","API integration","MeghRoop"],
  openGraph: {
    title: "AI Integration Services — MeghRoop | Plug AI Into Your Existing Tools",
    description: "MeghRoop integrates AI into your existing CRM, ERP, helpdesk, and collaboration tools. Salesforce, HubSpot, SAP, Slack — no rip-and-replace, just smarter workflows.",
    url: "https://meghroop.tech/ai-agents/ai-integration",
    siteName: "MeghRoop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Integration Services — MeghRoop | Plug AI Into Your Existing Tools",
    description: "MeghRoop integrates AI into your existing CRM, ERP, helpdesk, and collaboration tools. Salesforce, HubSpot, SAP, Slack — no rip-and-replace, just smarter workflows.",
  },
  alternates: {
    canonical: "https://meghroop.tech/ai-agents/ai-integration",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"AI Integration Services","description":"We integrate AI into your existing CRM, ERP, helpdesk, and collaboration tools. MCP servers, API connections, and intelligent automation — without replacing your stack.","provider":{"@type":"Organization","name":"MeghRoop","url":"https://meghroop.tech","email":"hello@meghroop.tech","telephone":"+918949508264","address":{"@type":"PostalAddress","streetAddress":"Jhotwara","addressLocality":"Jaipur","addressRegion":"Rajasthan","postalCode":"302012","addressCountry":"IN"},"foundingDate":"2026"},"serviceType":"AI Integration & Automation","areaServed":"Worldwide","hasOfferCatalog":{"@type":"OfferCatalog","name":"AI Integration Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"CRM AI Integration"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"ERP AI Integration"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"MCP Server Development"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legacy System AI Bridge"}}]}}) }}
      />
      {children}
    </>
  )
}
