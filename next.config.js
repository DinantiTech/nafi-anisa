/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    experimental: {
        typedRoutes: true
    },
    compress: true,
}

module.exports = nextConfig
