/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    images: {
        unoptimized: true,
    },
    trailingSlash: true
}

module.exports = nextConfig
