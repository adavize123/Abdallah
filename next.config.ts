import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/Abdallah" : undefined;
const assetPrefix = isProd ? "/Abdallah/" : undefined;

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath,
  assetPrefix,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
