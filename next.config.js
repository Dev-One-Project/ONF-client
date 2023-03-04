/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/home',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
