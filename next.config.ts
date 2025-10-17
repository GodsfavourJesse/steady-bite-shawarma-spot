import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [""],
  },
  eslint: {
    // ✅ This line makes Vercel ignore ESLint/type errors during build
    ignoreDuringBuilds: true,
  },
};

const config = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
})(nextConfig);

// ✅ Export the wrapped config, not the plain one
export default config;
