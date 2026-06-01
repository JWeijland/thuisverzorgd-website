import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Zet de projectmap vast als root (er staat nog een lockfile in de home-map).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
