import satori from 'satori'
import { readFileSync } from 'fs'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

const fontBuffer = readFileSync(join(process.cwd(), 'public/SpaceGrotesk-Bold.ttf'))

const configs = {
  primary: {
    width: 360, height: 80,
    meghColor: '#FFFFFF',
    roopColor: 'rgba(255,255,255,0.88)',
    dot: true, dotSize: 7,
    fontSize: 36,
  },
  navbar: {
    width: 260, height: 60,
    meghColor: '#FFFFFF',
    roopColor: 'rgba(255,255,255,0.88)',
    dot: false, dotSize: 0,
    fontSize: 28,
  },
  monochrome: {
    width: 360, height: 80,
    meghColor: '#FFFFFF',
    roopColor: '#FFFFFF',
    dot: false, dotSize: 0,
    fontSize: 36,
  },
  dark: {
    width: 360, height: 80,
    meghColor: '#FFFFFF',
    roopColor: 'rgba(255,255,255,0.88)',
    dot: true, dotSize: 8,
    fontSize: 36,
  },
} as const

export async function GET(req: NextRequest) {
  const v = (req.nextUrl.searchParams.get('v') ?? 'primary') as keyof typeof configs
  const cfg = configs[v] ?? configs.primary

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: cfg.dot ? '8px' : '0px',
          background: 'transparent',
          padding: '0 4px',
        },
        children: [
          {
            type: 'span',
            props: {
              style: {
                display: 'flex',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: cfg.fontSize,
                letterSpacing: '-0.042em',
                lineHeight: 1,
              },
              children: [
                {
                  type: 'span',
                  props: { style: { color: cfg.meghColor }, children: 'Megh' },
                },
                {
                  type: 'span',
                  props: { style: { color: cfg.roopColor }, children: 'Roop' },
                },
              ],
            },
          },
          ...(cfg.dot
            ? [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: cfg.dotSize,
                      height: cfg.dotSize,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #c084fc, #60a5fa)',
                      flexShrink: 0,
                      marginBottom: cfg.fontSize * 0.22,
                    },
                  },
                },
              ]
            : []),
        ],
      },
    },
    {
      width: cfg.width,
      height: cfg.height,
      fonts: [{ name: 'Space Grotesk', data: fontBuffer, weight: 700, style: 'normal' }],
    }
  )

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
