import { describe, expect, it } from "vitest";
import { makeArticle, makeArticleFile } from "./__fixtures__/factories";
import { localeParityIssues } from "./parity";

describe("localeParityIssues", () => {
  it("empty when everything matches", () => {
    expect(localeParityIssues(makeArticle("ok"))).toEqual([]);
  });

  it("detects mismatched language-neutral fields", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({ publishedAt: "2026-07-02", origin: "US" });
    const issues = localeParityIssues(article);
    expect(issues.join("\n")).toMatch(/publishedAt differs between ja\/en/);
    expect(issues.join("\n")).toMatch(/origin differs between ja\/en/);
  });

  it("detects mismatched tags", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({ tags: ["other-tag"] });
    expect(localeParityIssues(article).join("\n")).toMatch(/tags differs between ja\/en/);
  });

  it("detects mismatched scores", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({ scores: { product: 4, ux: 3.5, tech: 3, business: 5 } });
    expect(localeParityIssues(article).join("\n")).toMatch(/scores\.business differs between ja\/en/);
  });

  it("detects a mismatched techStack count", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({
      techStack: [
        { layer: "F", name: "React", confidence: "likely", evidence: "t" },
        { layer: "B", name: "Rails", confidence: "likely", evidence: "t" },
      ],
    });
    expect(localeParityIssues(article).join("\n")).toMatch(/techStack count/);
  });

  it("detects mismatched techStack content (name/confidence/evidenceUrl)", () => {
    const article = makeArticle("x");
    article.en = makeArticleFile({
      techStack: [{ layer: "Frontend", name: "Vue", confidence: "likely", evidence: "t" }],
    });
    expect(localeParityIssues(article).join("\n")).toMatch(/techStack\[0\]/);
  });

  it("detects mismatched sources count and url", () => {
    const fewer = makeArticle("x");
    fewer.en = makeArticleFile({
      sources: [
        { label: "a", url: "https://example.com", accessedAt: "2026-07-01" },
        { label: "b", url: "https://example.org", accessedAt: "2026-07-01" },
      ],
    });
    expect(localeParityIssues(fewer).join("\n")).toMatch(/sources count/);

    const differentUrl = makeArticle("x");
    differentUrl.en = makeArticleFile({
      sources: [{ label: "a", url: "https://example.org", accessedAt: "2026-07-01" }],
    });
    expect(localeParityIssues(differentUrl).join("\n")).toMatch(/sources\[0\]\.url/);
  });

  it("no issue when affiliate.url matches", () => {
    const affiliate = { url: "https://shopify.pxf.io/abc", program: "Shopify" };
    expect(localeParityIssues(makeArticle("x", { affiliate }))).toEqual([]);
  });

  it("detects a mismatched affiliate.url", () => {
    const article = makeArticle(
      "x",
      { affiliate: { url: "https://shopify.pxf.io/abc", program: "Shopify" } },
      { affiliate: { url: "https://shopify.pxf.io/xyz", program: "Shopify" } },
    );
    expect(localeParityIssues(article).join("\n")).toMatch(/affiliate\.url differs between ja\/en/);
  });

  it("mismatch when affiliate exists on only one side", () => {
    const article = makeArticle("x", { affiliate: { url: "https://shopify.pxf.io/abc", program: "Shopify" } }, {});
    expect(localeParityIssues(article).join("\n")).toMatch(/affiliate\.url differs between ja\/en/);
  });

  it("mismatch even when affiliate exists only on en (shows ja=none)", () => {
    const article = makeArticle("x", {}, { affiliate: { url: "https://shopify.pxf.io/abc", program: "Shopify" } });
    expect(localeParityIssues(article).join("\n")).toMatch(/affiliate\.url differs between ja\/en \(ja=none/);
  });

  it("no issue when affiliate.impressionUrl matches", () => {
    const affiliate = {
      url: "https://px.example.net/c?id=1",
      program: "Example",
      impressionUrl: "https://www12.example.net/0.gif?id=1",
    };
    expect(localeParityIssues(makeArticle("x", { affiliate }))).toEqual([]);
  });

  it("detects a mismatched affiliate.impressionUrl", () => {
    const base = { url: "https://px.example.net/c?id=1", program: "Example" };
    const article = makeArticle(
      "x",
      { affiliate: { ...base, impressionUrl: "https://www12.example.net/0.gif?id=1" } },
      { affiliate: { ...base, impressionUrl: "https://www12.example.net/0.gif?id=2" } },
    );
    expect(localeParityIssues(article).join("\n")).toMatch(/affiliate\.impressionUrl differs between ja\/en/);
  });

  it("mismatch when impressionUrl exists only on ja (shows en=none)", () => {
    const base = { url: "https://px.example.net/c?id=1", program: "Example" };
    const article = makeArticle(
      "x",
      { affiliate: { ...base, impressionUrl: "https://www12.example.net/0.gif?id=1" } },
      { affiliate: base },
    );
    expect(localeParityIssues(article)).toEqual([
      "affiliate.impressionUrl differs between ja/en (ja=https://www12.example.net/0.gif?id=1 / en=none)",
    ]);
  });

  it("mismatch when impressionUrl exists only on en (shows ja=none)", () => {
    const base = { url: "https://px.example.net/c?id=1", program: "Example" };
    const article = makeArticle(
      "x",
      { affiliate: base },
      { affiliate: { ...base, impressionUrl: "https://www12.example.net/0.gif?id=1" } },
    );
    expect(localeParityIssues(article).join("\n")).toMatch(/affiliate\.impressionUrl differs between ja\/en \(ja=none/);
  });

  it("no issue when affiliate.label matches", () => {
    const affiliate = { url: "https://px.example.net/c?id=1", program: "Example", label: "即日払い【EXAMPLE】" };
    expect(localeParityIssues(makeArticle("x", { affiliate }))).toEqual([]);
  });

  it("detects a mismatched affiliate.label (the ASP text is one fixed string for both locales)", () => {
    const base = { url: "https://px.example.net/c?id=1", program: "Example" };
    const article = makeArticle(
      "x",
      { affiliate: { ...base, label: "即日払い【EXAMPLE】" } },
      { affiliate: { ...base, label: "Same-day payout [EXAMPLE]" } },
    );
    expect(localeParityIssues(article)).toEqual([
      "affiliate.label differs between ja/en (ja=即日払い【EXAMPLE】 / en=Same-day payout [EXAMPLE])",
    ]);
  });

  it("mismatch when label exists only on ja (shows en=none)", () => {
    const base = { url: "https://px.example.net/c?id=1", program: "Example" };
    const article = makeArticle("x", { affiliate: { ...base, label: "即日払い【EXAMPLE】" } }, { affiliate: base });
    expect(localeParityIssues(article)).toEqual([
      "affiliate.label differs between ja/en (ja=即日払い【EXAMPLE】 / en=none)",
    ]);
  });

  it("mismatch when label exists only on en (shows ja=none)", () => {
    const base = { url: "https://px.example.net/c?id=1", program: "Example" };
    const article = makeArticle("x", { affiliate: base }, { affiliate: { ...base, label: "即日払い【EXAMPLE】" } });
    expect(localeParityIssues(article).join("\n")).toMatch(/affiliate\.label differs between ja\/en \(ja=none/);
  });

  it("treated as matching when neither side sets revisions", () => {
    expect(localeParityIssues(makeArticle("x"))).toEqual([]);
  });

  it("detects a mismatched revisions count", () => {
    const article = makeArticle("x", {
      revisions: [{ date: "2026-07-01", scores: { product: 4, ux: 3.5, tech: 3, business: 4.5 }, note: "ja note" }],
    });
    article.en = makeArticleFile({ revisions: undefined });
    expect(localeParityIssues(article).join("\n")).toMatch(/revisions count differs between ja\/en/);
  });

  it("detects mismatched revisions[].date / scores and ignores note differences", () => {
    const article = makeArticle(
      "x",
      {
        revisions: [
          { date: "2026-07-01", scores: { product: 4, ux: 3.5, tech: 3, business: 4.5 }, note: "ja note" },
        ],
      },
      {
        revisions: [
          { date: "2026-07-02", scores: { product: 4, ux: 3.5, tech: 3, business: 5 }, note: "en note (different)" },
        ],
      },
    );
    const issues = localeParityIssues(article).join("\n");
    expect(issues).toMatch(/revisions\[0\]\.date differs between ja\/en/);
    expect(issues).toMatch(/revisions\[0\]\.scores\.business differs between ja\/en/);
    expect(issues).not.toMatch(/note/);
  });

  it("no issue when revisions match exactly (only note differs)", () => {
    const article = makeArticle(
      "x",
      { revisions: [{ date: "2026-07-01", scores: { product: 4, ux: 3.5, tech: 3, business: 4.5 }, note: "ja" }] },
      { revisions: [{ date: "2026-07-01", scores: { product: 4, ux: 3.5, tech: 3, business: 4.5 }, note: "en" }] },
    );
    expect(localeParityIssues(article)).toEqual([]);
  });
});
