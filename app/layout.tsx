import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'MeghRoop — Creative Development Studio',
  description:
    'MeghRoop is a creative web development studio. We design and develop premium websites, scalable web applications, and modern digital experiences for startups and businesses.',
  keywords: [
    'web development',
    'Next.js',
    'React',
    'creative studio',
    'MeghRoop',
    'UI/UX',
    'full stack',
    'web design',
  ],
  authors: [{ name: 'MeghRoop Studio' }],
  openGraph: {
    title: 'MeghRoop — Creative Development Studio',
    description:
      'We design and develop premium websites, scalable web applications, and modern digital experiences.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MeghRoop — Creative Development Studio',
    description:
      'We design and develop premium websites, scalable web applications, and modern digital experiences.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID

  return (
    <html lang="en" className="dark">
      <head>
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
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
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
        {children}
      </body>
    </html>
  )
}
