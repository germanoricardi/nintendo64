/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'germanoricardi.com.br',
      },
      {
        hostname: 'raw.githubusercontent.com'
      } 
    ]
  }
};

export default nextConfig;
