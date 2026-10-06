import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "./csp";

describe("contentSecurityPolicy", () => {
  const prod = contentSecurityPolicy();

  it("does not include a nonce (worker.ts adds one per HTML response, src/lib/csp-nonce.ts)", () => {
    expect(prod).not.toContain("nonce-");
  });

  it("does not include 'strict-dynamic'", () => {
    // In CSP Level 3, 'strict-dynamic' makes the allowlist and 'self' / 'unsafe-inline' be
    // ignored. Adding it in this setup, which has neither nonces nor hashes, removes the root of trust
    // and stops every script on the page. If you add it, provide nonces or hashes at the same time.
    expect(prod).not.toContain("strict-dynamic");
    // Forbidden on the dev side too. Do not miss a mix-in that breaks only dev.
    expect(contentSecurityPolicy({ dev: true })).not.toContain("strict-dynamic");
  });

  it("script-src explicitly allows inline", () => {
    // Pin it including the trailing ;. Otherwise it would still pass if a loose value were appended,
    // like "'unsafe-inline' https: *".
    expect(prod).toContain(
      "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com;",
    );
  });

  it("does not emit 'unsafe-eval' in production", () => {
    expect(prod).not.toContain("unsafe-eval");
  });

  it("adds 'unsafe-eval' in dev for the Next overlay", () => {
    expect(contentSecurityPolicy({ dev: true })).toContain("'unsafe-eval'");
  });

  it("img-src is only self and data: by default", () => {
    expect(prod).toContain("img-src 'self' data:;");
  });

  it("extraImgSrc can add OGP hosts for official link cards", () => {
    const csp = contentSecurityPolicy({
      extraImgSrc: ["https://cdn.example.com", "https://img.example.org"],
    });
    expect(csp).toContain("img-src 'self' data: https://cdn.example.com https://img.example.org;");
  });

  it("img-src keeps its shape when extraImgSrc is an empty array", () => {
    expect(contentSecurityPolicy({ extraImgSrc: [] })).toContain("img-src 'self' data:;");
  });

  it("allows the two origins needed by the Cloudflare Web Analytics beacon", () => {
    // The beacon is loaded from static.cloudflareinsights.com and POSTs measurements to
    // cloudflareinsights.com. **If either is missing the page still looks fine while only the
    // beacon is silently blocked** (only a CSP violation appears in the console), so both are
    // pinned here.
    expect(prod).toContain("https://static.cloudflareinsights.com");
    expect(prod).toContain("connect-src 'self' https://cloudflareinsights.com;");
  });

  it("includes all directives that should be locked down", () => {
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

  it("directives are separated by ; with no trailing ;", () => {
    expect(prod.endsWith(";")).toBe(false);
    expect(prod).not.toContain(";;");
  });
});
