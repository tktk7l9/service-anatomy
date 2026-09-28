import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "./csp";

describe("contentSecurityPolicy", () => {
  const prod = contentSecurityPolicy();

  it("nonce を含まない（middleware を廃止したので発行元が無い）", () => {
    expect(prod).not.toContain("nonce-");
  });

  it("'strict-dynamic' を含まない", () => {
    // In CSP Level 3, 'strict-dynamic' makes the allowlist and 'self' / 'unsafe-inline' be
    // ignored. Adding it in this setup, which has neither nonces nor hashes, removes the root of trust
    // and stops every script on the page. If you add it, provide nonces or hashes at the same time.
    expect(prod).not.toContain("strict-dynamic");
    // Forbidden on the dev side too. Do not miss a mix-in that breaks only dev.
    expect(contentSecurityPolicy({ dev: true })).not.toContain("strict-dynamic");
  });

  it("インラインを許すことを script-src に明示している", () => {
    // Pin it including the trailing ;. Otherwise it would still pass if a loose value were appended,
    // like "'unsafe-inline' https: *".
    expect(prod).toContain(
      "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com;",
    );
  });

  it("本番では 'unsafe-eval' を出さない", () => {
    expect(prod).not.toContain("unsafe-eval");
  });

  it("dev では Next のオーバーレイ用に 'unsafe-eval' を足す", () => {
    expect(contentSecurityPolicy({ dev: true })).toContain("'unsafe-eval'");
  });

  it("既定では img-src は self と data: だけ", () => {
    expect(prod).toContain("img-src 'self' data:;");
  });

  it("extraImgSrc で公式リンクカードの OGP ホストを足せる", () => {
    const csp = contentSecurityPolicy({
      extraImgSrc: ["https://cdn.example.com", "https://img.example.org"],
    });
    expect(csp).toContain("img-src 'self' data: https://cdn.example.com https://img.example.org;");
  });

  it("extraImgSrc が空配列でも img-src の形が壊れない", () => {
    expect(contentSecurityPolicy({ extraImgSrc: [] })).toContain("img-src 'self' data:;");
  });

  it("Cloudflare Web Analytics のビーコンに必要な2オリジンを許可している", () => {
    // The beacon is loaded from static.cloudflareinsights.com and POSTs measurements to
    // cloudflareinsights.com. **If either is missing the page still looks fine while only the
    // beacon is silently blocked** (only a CSP violation appears in the console), so both are
    // pinned here.
    expect(prod).toContain("https://static.cloudflareinsights.com");
    expect(prod).toContain("connect-src 'self' https://cloudflareinsights.com;");
  });

  it("締めるべきディレクティブが揃っている", () => {
    for (const directive of [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "connect-src 'self' https://cloudflareinsights.com;",
      "manifest-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ]) {
      expect(prod).toContain(directive);
    }
  });

  it("ディレクティブは ; 区切りで、末尾に余分な ; を付けない", () => {
    expect(prod.endsWith(";")).toBe(false);
    expect(prod).not.toContain(";;");
  });
});
