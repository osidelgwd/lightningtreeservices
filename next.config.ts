import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gwd-website.b-cdn.net',
        port: '',
        // Esto permite cualquier archivo dentro de la carpeta /lightning/
        pathname: '/lightning/**', 
      },
    ],
  },
};

export default nextConfig;
