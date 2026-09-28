import { describe, expect, it } from "vitest";
import { absoluteLanguageAlternates, languageAlternates } from "./alternates";

describe("seo/alternates", () => {
  it("languageAlternates returns every locale + x-default", () => {
    expect(languageAlternates("/articles/alpha")).toEqual({
      ja: "/ja/articles/alpha",
      en: "/en/articles/alpha",
      "x-default": "/en/articles/alpha",
    });
  });

  it("languageAlternates returns locale roots when the path is omitted", () => {
    expect(languageAlternates()).toEqual({
      ja: "/ja",
      en: "/en",
      "x-default": "/en",
    });
  });

  it("absoluteLanguageAlternates prefixes baseUrl", () => {
    expect(absoluteLanguageAlternates("https://example.test", "/tech")).toEqual({
      ja: "https://example.test/ja/tech",
      en: "https://example.test/en/tech",
      "x-default": "https://example.test/en/tech",
    });
  });
});
