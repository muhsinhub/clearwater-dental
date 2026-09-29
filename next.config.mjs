/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be hosted on any static host (Cloudflare Pages, etc.)
  output: 'export',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
