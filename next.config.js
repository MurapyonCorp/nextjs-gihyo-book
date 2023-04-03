/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  compiler: {
    // styledComponentsの有効化
    styledComponents: true,
  },
}

module.exports = nextConfig
