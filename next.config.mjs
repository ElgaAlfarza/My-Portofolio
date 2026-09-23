/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep image optimisation off — we proxy everything through /api/photos/[id]
  // so next/image's remote pattern allowlist is not needed.
  images: { unoptimized: true },

  // Increase server action body size to 10 MB so multi-file uploads work.
  experimental: {
    serverActions: { bodySizeLimit: '10mb' },
  },
}

export default nextConfig
