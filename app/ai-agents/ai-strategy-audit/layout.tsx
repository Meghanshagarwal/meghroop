import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Strategy & Readiness Audit — MeghRoop",
  description: "A 3-week deep-dive into your business, data, and workflows. We map where AI actually fits — and where it doesn't. No slides. No frameworks. Just clarity.",
  keywords: ["AI audit","AI readiness","AI strategy","ROI mapping","90-day roadmap","AI consulting","MeghRoop"],
  openGraph: {
    title: "AI Strategy & Readiness Audit — MeghRoop",
    description: "A 3-week deep-dive into your business, data, and workflows. We map where AI actually fits — and where it doesn't. No slides. No frameworks. Just clarity.",
    url: "https://meghroop.tech/ai-agents/ai-strategy-audit",
    siteName: "MeghRoop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Strategy & Readiness Audit — MeghRoop",
    description: "A 3-week deep-dive into your business, data, and workflows. We map where AI actually fits — and where it doesn't. No slides. No frameworks. Just clarity.",
  },
  alternates: {
    canonical: "https://meghroop.tech/ai-agents/ai-strategy-audit",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"AI Strategy & Readiness Audit","description":"A 3-week deep-dive into your business, data, and workflows. We map where AI actually fits, score use cases by ROI, and deliver a prioritized 90-day roadmap.","provider":{"@type":"Organization","name":"MeghRoop","url":"https://meghroop.tech","email":"hello@meghroop.tech","telephone":"+918949508264","address":{"@type":"PostalAddress","addressLocality":"Jaipur","addressCountry":"IN"},"foundingDate":"2022"},"serviceType":"AI readiness audit","areaServed":"Worldwide","hasOfferCatalog":{"@type":"OfferCatalog","name":"AI Audit Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Workflow Mapping"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Data Readiness Check"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Use-Case Scoring"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"90-Day Roadmap"}}]}}) }}
      />
      {children}
    </>
  )
}
