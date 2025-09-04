/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  devIndicators: false,
  images: {
    domains: ['s3.jkt.dewavps.com/omits-storage'],
  },
};

export default nextConfig;
