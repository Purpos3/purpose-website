/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    unoptimized: true
  },
  // Enable serving .well-known files for LinkedIn SSO
  async rewrites() {
    return [
      {
        source: '/.well-known/:path*',
        destination: '/.well-known/:path*'
      }
    ]
  }
}

module.exports = nextConfig
