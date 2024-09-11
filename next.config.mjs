/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const isProduction = process.env.NODE_ENV === "production";

const nextPWA = withPWA({
  dest: "public",
  disable: !isProduction,
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextPWA(nextConfig);
