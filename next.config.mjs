/** @type {import('next').NextConfig} */
const nextConfig = {
  // Don't advertise the framework; tiny security/perf win.
  poweredByHeader: false,
  images: {
    // Serve modern formats (smaller payloads) where the browser supports them.
    formats: ['image/avif', 'image/webp'],
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
    // Tree-shake big component/icon libraries so fewer/smaller JS chunks ship.
    optimizePackageImports: ['lucide-react', 'framer-motion', 'react-icons'],
  },
  // Reduce the number of JS requests each page makes. Next's default
  // splitChunks fans node_modules out into ~10 small vendor files, so the page
  // fires a long list of JS requests (flagged by the SEO "Page Objects" audit).
  // Rather than collapse everything into one chunk — which would force
  // page-specific libraries (e.g. the admin-only TipTap editor) onto every page
  // and bloat the payload — we keep Next's smart, page-scoped splitting but
  // raise the minimum chunk size and cap how many parallel requests a page may
  // start. Webpack then merges the small fragments into fewer files without
  // pulling in code a given page doesn't use.
  webpack: (config, { isServer }) => {
    if (!isServer && config.optimization.splitChunks) {
      config.optimization.splitChunks.minSize = 100_000
      config.optimization.splitChunks.maxInitialRequests = 4
      config.optimization.splitChunks.maxAsyncRequests = 6
    }
    return config
  },
  // Send HSTS with `preload` so browsers upgrade http→https on their own and
  // skip the network redirect hop the PageSpeed audit flagged ("avoid multiple
  // page redirects"). Submit the domain at hstspreload.org to make it permanent.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
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
