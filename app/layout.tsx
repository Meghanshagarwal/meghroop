import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { getSupabase } from '@/lib/supabase'
import JsonLd from '@/components/common/JsonLd'
import PWAInstallPrompt from '@/components/common/PWAInstallPrompt'
import MobileNav from '@/components/common/MobileNav'
import dynamic from 'next/dynamic'

const Chatbot = dynamic(() => import('@/components/common/Chatbot'), {
  ssr: false,
})

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

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://meghroop.tech'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MeghRoop — AI Engineering & Shopify Development Studio',
    template: '%s | MeghRoop',
  },
  description:
    'MeghRoop is a premium AI engineering & web studio. We build custom AI agents, complex n8n workflows, Shopify storefronts, and context-aware systems.',
  keywords: [
    'AI Engineering Studio',
    'AI Agents',
    'AI Automation',
    'n8n Workflows',
    'Shopify Development',
    'Next.js Development',
    'MCP Infrastructure',
    'AI Search Optimization',
    'generative engine optimization',
    'GEO optimization',
    'Shopify developer',
    'Shopify agency',
    'autonomous AI workflows',
    'Model Context Protocol',
    'Next.js development studio',
    'frontend engineering',
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
    title: 'MeghRoop — AI Engineering Studio, Shopify Development & n8n Workflows',
    description:
      'We engineer custom autonomous AI agents, complex n8n workflows, Shopify storefronts, MCP infrastructure, and AI search optimized systems. Built properly.',
    url: SITE_URL,
    siteName: 'MeghRoop',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'MeghRoop — AI Engineering & Web Development Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MeghRoop — AI Engineering Studio, Shopify Development & n8n Workflows',
    description:
      'We engineer custom autonomous AI agents, complex n8n workflows, Shopify storefronts, MCP infrastructure, and AI search optimized systems. Built properly.',
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: './',
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
  // Search Console / Webmaster verification — set the token(s) in env to emit the meta tag.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : {},
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#000000',
    'msapplication-TileImage': '/icon-192.png',
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'MeghRoop',
    'mobile-web-app-capable': 'yes',
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

        {/* Service Worker registration */}
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').catch(function() {});
              });
            }
          `}
        </Script>

        {/* JSON-LD structured data */}
        <JsonLd />

        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">
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
          <Script id="meta-pixel-init" strategy="lazyOnload">
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
          <Script id="clarity-init" strategy="lazyOnload">
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
              className="hidden"
              src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        )}
        {children}
        <MobileNav />
        <PWAInstallPrompt />
        <Chatbot />
      </body>
    </html>
  )
}
