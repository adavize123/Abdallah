import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: "/Abdallah",
  assetPrefix: "/Abdallah/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
