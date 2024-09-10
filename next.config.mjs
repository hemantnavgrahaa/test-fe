/** @type {import('next').NextConfig} */

import withPWA from "next-pwa";

const nextPWA = withPWA({
  dest: "public",
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
