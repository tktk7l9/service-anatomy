import { readFileSync } from "node:fs";
import type { NextConfig } from "next";
import { contentSecurityPolicy } from "./src/lib/csp";

// 記事末尾の公式リンクカード（OGP画像の直接表示）で許可するオリジン。
// 一覧は scripts/fetch-og-cards.mjs が生成する。以前は src/proxy.ts が import して
// いたが、middleware を廃止したのでここで読む。Next の設定ローダーが JSON import を
// 解決できるかに依存しないよう readFileSync を使う。
const ogImageHosts: string[] = JSON.parse(
  readFileSync(new URL("./content/og-image-hosts.json", import.meta.url), "utf8"),
);

// CSP は src/lib/csp.ts が正本。
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy({
      dev: process.env.NODE_ENV !== "production",
      extraImgSrc: ogImageHosts,
    }),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // 記事 Markdown は実行時に fs で読むため、サーバーバンドルに同梱する。
  outputFileTracingIncludes: {
    "/**": ["./content/**/*"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
