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

  it("loads a complete card (drops fetchedAt)", () => {
    expect(cards["full-card"]).toEqual({
      url: "https://example.com/",
      title: "Example Service",
      description: "説明文",
      image: "https://cdn.example.com/og.png",
      siteName: "Example",
    });
  });

  it("a minimal card with only url is valid", () => {
    expect(cards["minimal-card"]).toEqual({ url: "https://example.org/" });
  });

  it("drops non-https images (keeps the card)", () => {
    expect(cards["http-image"]).toEqual({ url: "https://example.net/", title: "No Https Image" });
  });

  it("drops whitespace-only string fields", () => {
    expect(cards["empty-title"]).toEqual({ url: "https://example.dev/" });
  });

  it("excludes non-https urls and non-object entries", () => {
    expect(cards["bad-url"]).toBeUndefined();
    expect(cards["not-object"]).toBeUndefined();
  });

  it("empty when the file does not exist", () => {
    expect(loadOgCards("/no/such/file.json")).toEqual({});
  });

  it("reads the default path (content/og-cards.json) without throwing", () => {
    expect(typeof loadOgCards()).toBe("object");
  });
});
