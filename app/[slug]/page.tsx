import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'
import LocalSeoTemplate from '@/components/sections/LocalSeoTemplate'
import LocalSeoJsonLd from '@/components/common/LocalSeoJsonLd'
import { servicePages } from '@/data/services'
import { getAllLocalSeoSlugs, parseLocalSeoSlug } from '@/data/localSeo'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

interface PageProps {
  params: { slug: string }
}

// Only ever renders the programmatic local-SEO combinations below — any other
// single-segment path falls through to the real 404 (this file does not act
// as a catch-all for arbitrary URLs).
export async function generateStaticParams() {
  return getAllLocalSeoSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const parsed = parseLocalSeoSlug(params.slug)
  if (!parsed) return {}
  const { service, location } = parsed
  const title = `${service.keyword} in ${location.name} | MeghRoop`
  const description = `${service.intro} MeghRoop works with businesses ${location.isCountry ? 'across' : 'in'} ${location.name}${location.isCountry ? '' : `, ${location.region}`}.`

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${params.slug}` },
    openGraph: { title, description, url: `${SITE_URL}/${params.slug}` },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function LocalSeoPage({ params }: PageProps) {
  const parsed = parseLocalSeoSlug(params.slug)
  if (!parsed) notFound()
  const { service, location } = parsed
  const data = servicePages[service.serviceSlug]
  if (!data) notFound()

  return (
    <>
      <LocalSeoJsonLd slug={params.slug} service={service} location={location} data={data} />
      <Navbar />
      <LocalSeoTemplate service={service} location={location} data={data} />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
