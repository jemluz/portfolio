import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  pageExtensions: ["tsx", "view.tsx", "api.tsx", "api.ts"],
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default withNextIntl(nextConfig);
