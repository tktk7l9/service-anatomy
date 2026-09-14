import { describe, expect, it } from "vitest";
import { BASE_URL } from "./site";

describe("BASE_URL", () => {
  it("Workers の公開URLを指している", () => {
    expect(BASE_URL).toBe("https://service-anatomy.saitotakuya0719.workers.dev");
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
