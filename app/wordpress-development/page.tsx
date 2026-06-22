import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import ServicePageTemplate from '@/components/sections/ServicePageTemplate'
import ServiceJsonLd from '@/components/common/ServiceJsonLd'
import { servicePages } from '@/data/services'

const data = servicePages['wordpress-development']

export const metadata: Metadata = {
  title: data.seoTitle,
  description: data.seoDescription,
  alternates: { canonical: '/wordpress-development' },
  openGraph: {
    title: `${data.seoTitle} | MeghRoop`,
    description: data.seoDescription,
  },
}

export default function Page() {
  return (
    <>
      <ServiceJsonLd data={data} />
      <Navbar />
      <ServicePageTemplate data={data} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
