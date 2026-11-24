import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // Self-contained server in .next/standalone, used by the production Docker image.
  output: "standalone",
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      { source: "/", destination: "/es", permanent: false },
      { source: "/cv", destination: "/es/cv", permanent: false },
    ]
  },
}

export default nextConfig
