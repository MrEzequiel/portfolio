/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['prdytupmauayigpsaeeb.supabase.co']
  }
}

module.exports = nextConfig
