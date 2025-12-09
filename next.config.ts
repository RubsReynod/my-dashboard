import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"),
    ],
  },
};

export default nextConfig;
