import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { getSupabase } from '@/lib/supabase'
import JsonLd from '@/components/common/JsonLd'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MeghRoop — AI Engineering & Web Development Studio',
    template: '%s | MeghRoop',
  },
  description:
    'MeghRoop is a creative engineering and AI studio. We build custom AI agents, autonomous workflow systems, MCP servers, and premium web experiences with Next.js and React. Based in India, working worldwide.',
  keywords: [
    'AI agent development',
    'agentic AI',
    'n8n automation',
    'workflow automation',
    'MCP server development',
    'Model Context Protocol',
    'AI integration',
    'Next.js development studio',
    'React development',
    'full stack development',
    'GEO optimization',
    'generative engine optimization',
    'AI search optimization',
    'autonomous AI workflows',
    'multi-agent systems',
    'LangChain',
    'AI operations automation',
    'custom AI tools',
    'creative engineering studio',
    'web development India',
    'MeghRoop',
  ],
  authors: [
    { name: 'Meghansh', url: SITE_URL },
    { name: 'Roop', url: SITE_URL },
  ],
  creator: 'MeghRoop',
  publisher: 'MeghRoop',
  category: 'Technology',
  openGraph: {
    title: 'MeghRoop — AI Engineering & Web Development Studio',
    description:
      'Custom AI agents, autonomous workflow systems, MCP servers, and premium web experiences. Two engineers. Built properly.',
    url: SITE_URL,
    siteName: 'MeghRoop',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MeghRoop — AI Engineering & Web Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MeghRoop — AI Engineering & Web Development Studio',
    description:
      'Custom AI agents, autonomous workflows, MCP servers, and premium web. Two engineers. Built properly.',
    images: ['/og-image.png'],
    creator: '@meghroop',
    site: '@meghroop',
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
}

async function getAnalyticsIds() {
  try {
    const db = getSupabase()
    const { data } = await db.from('settings').select('key, value')
    const map = Object.fromEntries((data ?? []).map((s: { key: string; value: string }) => [s.key, s.value]))
    return {
      gaId: map['ga_id'] || process.env.NEXT_PUBLIC_GA_ID || '',
      pixelId: map['meta_pixel_id'] || process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
      clarityId: map['clarity_id'] || process.env.NEXT_PUBLIC_CLARITY_ID || '',
    }
  } catch {
    return {
      gaId: process.env.NEXT_PUBLIC_GA_ID || '',
      pixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || '',
      clarityId: process.env.NEXT_PUBLIC_CLARITY_ID || '',
    }
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { gaId, pixelId, clarityId } = await getAnalyticsIds()

  return (
    <html lang="en" className="dark">
      <head>
        {/* Resource hints */}
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD structured data */}
        <JsonLd />

        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', { send_page_view: true });
              `}
            </Script>
          </>
        )}

        {/* Meta Pixel */}
        {pixelId && (
          <Script id="meta-pixel-init" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${pixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* Microsoft Clarity */}
        {clarityId && (
          <Script id="clarity-init" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarityId}");
            `}
          </Script>
        )}
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black text-white`}>
        {/* Meta Pixel noscript fallback */}
        {pixelId && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  )
}
