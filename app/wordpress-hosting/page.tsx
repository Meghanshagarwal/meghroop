import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import HostingContent from '@/components/sections/HostingContent'
import HostingJsonLd from '@/components/common/HostingJsonLd'
import { hostingMeta } from '@/data/hosting'

export const metadata: Metadata = {
  title: hostingMeta.seoTitle,
  description: hostingMeta.seoDescription,
  alternates: { canonical: '/wordpress-hosting' },
  openGraph: {
    title: `${hostingMeta.seoTitle} | MeghRoop`,
    description: hostingMeta.seoDescription,
  },
}

export default function Page() {
  return (
    <>
      <HostingJsonLd />
      <Navbar />
      <HostingContent />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
