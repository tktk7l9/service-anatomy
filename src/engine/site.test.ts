import { describe, expect, it } from "vitest";
import { BASE_URL } from "./site";

describe("BASE_URL", () => {
  it("points to the custom domain", () => {
    expect(BASE_URL).toBe("https://serviceanatomy.com");
  });

  it("does not contain workers.dev", () => {
    // The old URL is redirected to the custom domain by the redirects in next.config.ts.
    // If canonical reverts to the old URL, the redirect target and canonical URL disagree and search engines get confused.
    expect(BASE_URL).not.toContain("workers.dev");
  });

  it("does not contain vercel.app", () => {
    // The Vercel Hobby account has been suspended since 2026-08-11 and serves nothing.
    // If this reverts to vercel.app, canonical, sitemap, RSS and OGP all point to a dead URL.
    expect(BASE_URL).not.toContain("vercel.app");
  });

  it("has no trailing slash", () => {
    // It is concatenated everywhere as `${BASE_URL}/${locale}/...`, so
    // a trailing slash would produce //.
    expect(BASE_URL.endsWith("/")).toBe(false);
  });

  it("is https", () => {
    expect(BASE_URL.startsWith("https://")).toBe(true);
  });
});
