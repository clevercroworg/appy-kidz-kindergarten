/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/refund-policy',
        destination: '/admission-and-refund-policy',
        permanent: true,
      },
      {
        source: '/cancellation-policy',
        destination: '/admission-and-refund-policy',
        permanent: true,
      },
      {
        source: '/admission-policy',
        destination: '/admission-and-refund-policy',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

