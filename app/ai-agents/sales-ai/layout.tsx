import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Sales AI & Outreach Automation — MeghRoop",
  description: "Signal-triggered, AI-researched cold outreach that fills your pipeline with qualified meetings. No spray-and-pray. Built by MeghRoop.",
  keywords: ["sales AI","outbound automation","cold outreach","signal-based selling","lead generation","LinkedIn automation","B2B sales","MeghRoop"],
  openGraph: {
    title: "Sales AI & Outreach Automation — MeghRoop",
    description: "Signal-triggered, AI-researched cold outreach that fills your pipeline with qualified meetings. No spray-and-pray. Built by MeghRoop.",
    url: "https://meghroop.tech/ai-agents/sales-ai",
    siteName: "MeghRoop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales AI & Outreach Automation — MeghRoop",
    description: "Signal-triggered, AI-researched cold outreach that fills your pipeline with qualified meetings. No spray-and-pray. Built by MeghRoop.",
  },
  alternates: {
    canonical: "https://meghroop.tech/ai-agents/sales-ai",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Sales Intelligence & Outreach Automation","description":"Signal-triggered, AI-researched cold outreach that fills your pipeline with qualified meetings. No spray-and-pray.","provider":{"@type":"Organization","name":"MeghRoop","url":"https://meghroop.tech","email":"hello@meghroop.tech","telephone":"+918949508264","foundingDate":"2022","address":{"@type":"PostalAddress","addressLocality":"Jaipur","addressCountry":"IN"}},"areaServed":{"@type":"Place","name":"Worldwide"},"serviceType":"Sales Intelligence & Outreach Automation","hasOfferCatalog":{"@type":"OfferCatalog","name":"Sales AI Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Signal-Triggered Outbound"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Multi-Channel Outreach"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"AI-Powered Sales Intelligence"}}]}}) }}
      />
      {children}
    </>
  )
}
