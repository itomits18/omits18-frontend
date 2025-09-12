/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['s3.jkt.dewavps.com/omits-storage'],
  },
  devIndicators: false,
};

export default nextConfig;
