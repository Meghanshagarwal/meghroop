import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Agentic Process Automation — MeghRoop",
  description: "AI agents that reason through exceptions, read unstructured data, and handle the messy stuff your team shouldn't be doing manually. Not RPA — real intelligence.",
  keywords: ["agentic process automation","AI agents","n8n workflows","back-office AI","workflow intelligence","process automation","MeghRoop"],
  openGraph: {
    title: "Agentic Process Automation — MeghRoop",
    description: "AI agents that reason through exceptions, read unstructured data, and handle the messy stuff your team shouldn't be doing manually. Not RPA — real intelligence.",
    url: "https://meghroop.tech/ai-agents/agentic-automation",
    siteName: "MeghRoop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Process Automation — MeghRoop",
    description: "AI agents that reason through exceptions, read unstructured data, and handle the messy stuff your team shouldn't be doing manually. Not RPA — real intelligence.",
  },
  alternates: {
    canonical: "https://meghroop.tech/ai-agents/agentic-automation",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","serviceType":"Agentic process automation","name":"Agentic Process Automation","description":"AI agents that reason through exceptions, read unstructured data, and handle the messy stuff your team shouldn't be doing manually.","provider":{"@type":"Organization","name":"MeghRoop","url":"https://meghroop.tech","email":"hello@meghroop.tech","telephone":"+918949508264","address":{"@type":"PostalAddress","streetAddress":"Jhotwara","addressLocality":"Jaipur","addressRegion":"Rajasthan","postalCode":"302012","addressCountry":"IN"},"foundingDate":"2026"},"areaServed":"Worldwide","url":"https://meghroop.tech/agentic-automation"}) }}
      />
      {children}
    </>
  )
}
