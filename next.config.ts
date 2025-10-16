import { register } from "module";
import type { NextConfig } from "next";
import withPWA from "next-pwa"

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        domains: [""],
    }
};

const config = withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
})(nextConfig);

export default nextConfig;
