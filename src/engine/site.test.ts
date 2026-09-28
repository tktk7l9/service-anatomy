import { describe, expect, it } from "vitest";
import { BASE_URL } from "./site";

describe("BASE_URL", () => {
  it("独自ドメインを指している", () => {
    expect(BASE_URL).toBe("https://serviceanatomy.com");
  });

  it("workers.dev を含まない", () => {
    // The old URL is redirected to the custom domain by the redirects in next.config.ts.
    // If canonical reverts to the old URL, the redirect target and canonical URL disagree and search engines get confused.
    expect(BASE_URL).not.toContain("workers.dev");
  });

  it("vercel.app を含まない", () => {
    // The Vercel Hobby account has been suspended since 2026-08-11 and serves nothing.
    // If this reverts to vercel.app, canonical, sitemap, RSS and OGP all point to a dead URL.
    expect(BASE_URL).not.toContain("vercel.app");
  });

  it("末尾スラッシュを持たない", () => {
    // It is concatenated everywhere as `${BASE_URL}/${locale}/...`, so
    // a trailing slash would produce //.
    expect(BASE_URL.endsWith("/")).toBe(false);
  });

  it("https である", () => {
    expect(BASE_URL.startsWith("https://")).toBe(true);
  });
});
