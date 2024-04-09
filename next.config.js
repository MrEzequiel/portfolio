/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prdytupmauayigpsaeeb.supabase.co',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
