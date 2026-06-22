/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.meghroop.tech' }],
        destination: 'https://meghroop.tech/:path*',
        permanent: true,
      },
      // ── Consolidate legacy software-era routes into the new
      //    Growth + AI + Software service architecture ──
      // NOTE: /agentic-ai and /ai-agents/* are kept live — they power the
      // dedicated "AI Agents" nav section.
      { source: '/ai-agents-automation', destination: '/agentic-ai', permanent: true },
      { source: '/n8n-workflows', destination: '/agentic-ai', permanent: true },
      { source: '/mcp-infrastructure', destination: '/agentic-ai', permanent: true },
      { source: '/web-engineering', destination: '/software-development', permanent: true },
      { source: '/shopify-engineering', destination: '/shopify-development', permanent: true },
      { source: '/wordpress-engineering', destination: '/wordpress-development', permanent: true },
      { source: '/ai-search-optimization', destination: '/growth-marketing', permanent: true },
      { source: '/systems', destination: '/work', permanent: true },
    ]
  },
};

export default nextConfig;
