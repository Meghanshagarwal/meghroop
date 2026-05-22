import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'MeghRoop — AI Engineering & Web Studio'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  // Load font from the public directory
  let fontData: ArrayBuffer | null = null
  try {
    const fontUrl = new URL('../public/SpaceGrotesk-Bold.ttf', import.meta.url)
    fontData = await fetch(fontUrl).then((res) => res.arrayBuffer())
  } catch (e) {
    console.error('Failed to load font for OG image, falling back to system fonts', e)
  }

  const fontOptions = fontData
    ? [
        {
          name: 'Space Grotesk',
          data: fontData,
          style: 'normal' as const,
          weight: 700 as const,
        },
      ]
    : []

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
          backgroundImage: 'radial-gradient(circle at 75% 25%, #2d124d 0%, #000000 70%)',
          padding: '80px',
          fontFamily: fontData ? 'Space Grotesk' : 'sans-serif',
          color: '#ffffff',
          position: 'relative',
        }}
      >
        {/* Subtle decorative dot pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.15,
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            pointerEvents: 'none',
          }}
        />

        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            width: '100%',
          }}
        >
          {/* Logo shape */}
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '16px',
              border: '2px solid rgba(167, 139, 250, 0.4)',
              background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.2), rgba(96, 165, 250, 0.2))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: '#a78bfa',
                boxShadow: '0 0 12px #a78bfa',
              }}
            />
          </div>
          <span
            style={{
              fontSize: '28px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
            }}
          >
            MeghRoop
          </span>
        </div>

        {/* Center Main Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '900px',
            margin: 'auto 0',
          }}
        >
          <div
            style={{
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.3em',
              color: '#a78bfa',
            }}
          >
            Creative Engineering &amp; AI Studio
          </div>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              margin: 0,
              background: 'linear-gradient(to right, #ffffff, #a78bfa, #60a5fa)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            We build things. Useful things. Alive things.
          </h1>
          <p
            style={{
              fontSize: '22px',
              color: '#9ca3af',
              fontWeight: 300,
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Custom AI Agents • Model Context Protocol Networks • Ultra-fast Storefronts
          </p>
        </div>

        {/* Bottom Metadata row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '32px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#6b7280',
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <span>Est. 2022</span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <span>Based in India</span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>•</span>
            <span>Serving Worldwide</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: 700,
              color: '#34d399',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#34d399',
              }}
            />
            <span style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Two Engineers. Built Properly.
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fontOptions,
    }
  )
}
