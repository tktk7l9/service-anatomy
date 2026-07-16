import { describe, expect, it } from "vitest";
import { absoluteLanguageAlternates, languageAlternates } from "./alternates";

describe("seo/alternates", () => {
  it("languageAlternates は全ロケール + x-default を返す", () => {
    expect(languageAlternates("/articles/alpha")).toEqual({
      ja: "/ja/articles/alpha",
      en: "/en/articles/alpha",
      "x-default": "/en/articles/alpha",
    });
  });

  it("languageAlternates はパス省略時にロケールルートを返す", () => {
    expect(languageAlternates()).toEqual({
      ja: "/ja",
      en: "/en",
      "x-default": "/en",
    });
  });

  it("absoluteLanguageAlternates は baseUrl を前置する", () => {
    expect(absoluteLanguageAlternates("https://example.test", "/tech")).toEqual({
      ja: "https://example.test/ja/tech",
      en: "https://example.test/en/tech",
      "x-default": "https://example.test/en/tech",
    });
  });
});
