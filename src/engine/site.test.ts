import { describe, expect, it } from "vitest";
import { BASE_URL } from "./site";

describe("BASE_URL", () => {
  it("独自ドメインを指している", () => {
    expect(BASE_URL).toBe("https://serviceanatomy.com");
  });

  it("workers.dev を含まない", () => {
    // 旧URLは next.config.ts の redirects で独自ドメインへ転送している。
    // canonical が旧URLに戻ると、転送先と正規URLが食い違って検索エンジンが迷う。
    expect(BASE_URL).not.toContain("workers.dev");
  });

  it("vercel.app を含まない", () => {
    // Vercel の Hobby アカウントは 2026-08-11 から停止していて配信されない。
    // ここが vercel.app に戻ると canonical・sitemap・RSS・OGP が死んだURLを指す。
    expect(BASE_URL).not.toContain("vercel.app");
  });

  it("末尾スラッシュを持たない", () => {
    // 各所で `${BASE_URL}/${locale}/...` のように連結するので、
    // 末尾スラッシュがあると // になる。
    expect(BASE_URL.endsWith("/")).toBe(false);
  });

  it("https である", () => {
    expect(BASE_URL.startsWith("https://")).toBe(true);
  });
});
