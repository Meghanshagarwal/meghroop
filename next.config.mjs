/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
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
      // Page moved: /services -> /agentic-ai (preserve link equity)
      {
        source: '/services',
        destination: '/agentic-ai',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
