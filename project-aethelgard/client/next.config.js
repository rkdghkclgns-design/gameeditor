/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ],
    },
}

module.exports = nextConfig
