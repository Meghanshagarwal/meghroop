import { NextResponse } from 'next/server'

// Pure path-based M mark — no font dependency, scales infinitely
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="100%" stop-color="#60a5fa"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="44" fill="#0d0d0d"/>
  <path
    d="M44 164V48L100 108L156 48V164"
    stroke="white"
    stroke-width="16"
    stroke-linecap="round"
    stroke-linejoin="round"
    fill="none"
  />
  <rect x="148" y="24" width="30" height="30" rx="8" fill="url(#g)"/>
</svg>`

export async function GET() {
  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
