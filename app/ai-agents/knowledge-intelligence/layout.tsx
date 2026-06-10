import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Knowledge Intelligence & Enterprise RAG — MeghRoop",
  description: "We build private, citation-backed AI assistants over your documents. Ask questions in plain language and get accurate answers with exact sources. Deployed in your cloud.",
  keywords: ["Enterprise RAG","Knowledge Intelligence","Document AI","vector search","citation-backed AI","private RAG","document search","MeghRoop"],
  openGraph: {
    title: "Knowledge Intelligence & Enterprise RAG — MeghRoop",
    description: "We build private, citation-backed AI assistants over your documents. Ask questions in plain language and get accurate answers with exact sources. Deployed in your cloud.",
    url: "https://meghroop.tech/ai-agents/knowledge-intelligence",
    siteName: "MeghRoop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Intelligence & Enterprise RAG — MeghRoop",
    description: "We build private, citation-backed AI assistants over your documents. Ask questions in plain language and get accurate answers with exact sources. Deployed in your cloud.",
  },
  alternates: {
    canonical: "https://meghroop.tech/ai-agents/knowledge-intelligence",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"Knowledge Intelligence & Enterprise RAG","description":"Private, citation-backed AI assistants built over enterprise documents and databases. Deploys in your cloud with permission-aware retrieval.","provider":{"@type":"Organization","name":"MeghRoop","url":"https://meghroop.tech","email":"hello@meghroop.tech","telephone":"+918949508264","address":{"@type":"PostalAddress","addressLocality":"Jaipur","addressCountry":"IN"},"foundingDate":"2022"},"serviceType":"Document & Knowledge Intelligence","areaServed":"Worldwide","hasOfferCatalog":{"@type":"OfferCatalog","name":"RAG Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Document Audit & Cataloging"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"AI Ingestion Pipeline"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Retrieval & Permission Layer"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Secure Cloud Deployment"}}]}}) }}
      />
      {children}
    </>
  )
}
