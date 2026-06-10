import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Voice Agents — MeghRoop | Human-Sounding AI Callers, 24/7",
  description: "AI voice agents that sound human. 24/7 multilingual callers for inbound support, outbound qualification, appointment booking, and collections. Hindi, English, and regional languages. Sub-second response times.",
  keywords: ["AI voice agents","voice bots","AI callers","multilingual voice AI","conversational AI","call automation","MeghRoop"],
  openGraph: {
    title: "AI Voice Agents — MeghRoop | Human-Sounding AI Callers, 24/7",
    description: "AI voice agents that sound human. 24/7 multilingual callers for inbound support, outbound qualification, appointment booking, and collections. Hindi, English, and regional languages. Sub-second response times.",
    url: "https://meghroop.tech/ai-agents/ai-voice-agents",
    siteName: "MeghRoop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Voice Agents — MeghRoop | Human-Sounding AI Callers, 24/7",
    description: "AI voice agents that sound human. 24/7 multilingual callers for inbound support, outbound qualification, appointment booking, and collections. Hindi, English, and regional languages. Sub-second response times.",
  },
  alternates: {
    canonical: "https://meghroop.tech/ai-agents/ai-voice-agents",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"Service","name":"AI Voice Agents","description":"Human-sounding AI voice agents for inbound support, outbound qualification, appointment booking, and collections. 24/7 availability in Hindi, English, and regional languages with sub-second response times.","provider":{"@type":"Organization","name":"MeghRoop","url":"https://meghroop.tech","email":"hello@meghroop.tech","telephone":"+918949508264","address":{"@type":"PostalAddress","addressLocality":"Jaipur","addressCountry":"IN"},"foundingDate":"2022"},"areaServed":{"@type":"Place","name":"Worldwide"},"serviceType":"AI Voice Agent Development","hasOfferCatalog":{"@type":"OfferCatalog","name":"AI Voice Agent Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Inbound Support Voice Agents"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Appointment Booking Voice Agents"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Lead Qualification Voice Agents"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Collections Voice Agents"}},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Outbound Survey Voice Agents"}}]}}) }}
      />
      {children}
    </>
  )
}
