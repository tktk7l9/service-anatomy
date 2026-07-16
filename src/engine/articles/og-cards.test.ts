import { describe, expect, it } from "vitest";
import path from "node:path";
import { loadOgCards } from "./og-cards";

const FIXTURE = path.join(
  process.cwd(),
  "src",
  "engine",
  "articles",
  "__fixtures__",
  "og-cards",
  "cards.json",
);

describe("loadOgCards", () => {
  const cards = loadOgCards(FIXTURE);

  it("完全なカードを読み込む（fetchedAt は捨てる）", () => {
    expect(cards["full-card"]).toEqual({
      url: "https://example.com/",
      title: "Example Service",
      description: "説明文",
      image: "https://cdn.example.com/og.png",
      siteName: "Example",
    });
  });

  it("url だけの最小カードも有効", () => {
    expect(cards["minimal-card"]).toEqual({ url: "https://example.org/" });
  });

  it("https でない画像は捨てる（カード自体は残す）", () => {
    expect(cards["http-image"]).toEqual({ url: "https://example.net/", title: "No Https Image" });
  });

  it("空白のみの文字列フィールドは捨てる", () => {
    expect(cards["empty-title"]).toEqual({ url: "https://example.dev/" });
  });

  it("https でない url・オブジェクトでないエントリは除外する", () => {
    expect(cards["bad-url"]).toBeUndefined();
    expect(cards["not-object"]).toBeUndefined();
  });

  it("ファイルがなければ空", () => {
    expect(loadOgCards("/no/such/file.json")).toEqual({});
  });

  it("既定パス（content/og-cards.json）でも例外なく読める", () => {
    expect(typeof loadOgCards()).toBe("object");
  });
});
