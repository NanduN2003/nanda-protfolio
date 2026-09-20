import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: "/nanda-protfolio",
  assetPrefix: "/nanda-protfolio/",
};

export default nextConfig;