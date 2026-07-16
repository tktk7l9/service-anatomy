import { NextResponse, type NextRequest } from "next/server";
import ogImageHosts from "../content/og-image-hosts.json";

// Nonce-based Content-Security-Policy. Next.js reads the nonce from the
// request's CSP header and stamps it onto its own <script> tags (the routes
// are force-dynamic so this happens per request).
// img-src は記事末尾の公式リンクカード（OGP画像の直接表示）用に、
// scripts/fetch-og-cards.mjs が生成したオリジン一覧だけを限定的に許可する。
export function proxy(request: NextRequest) {
  const nonce = btoa(crypto.randomUUID());
  const dev = process.env.NODE_ENV !== "production";

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'${dev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    ["img-src 'self' data:", ...ogImageHosts].join(" "),
    "connect-src 'self'",
    "manifest-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("content-security-policy", csp);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("content-security-policy", csp);
  return response;
}

export const config = {
  matcher: [
    {
      source: "/((?!_next/static|_next/image|favicon.ico|icon.svg).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
