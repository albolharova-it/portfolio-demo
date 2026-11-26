import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Storybook is built into public/storybook (npm run build). Open it at /storybook/index.html,
  // so its relative asset paths resolve inside /storybook/.
  redirects() {
    return [{ source: "/storybook", destination: "/storybook/index.html", permanent: false }];
  },
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
};

export default nextConfig;
