import { describe, expect, it } from "vitest";
import { makeArticle } from "./__fixtures__/factories";
import { buildAnatomyExport } from "./export";

const BASE = "https://example.test";

describe("articles/export", () => {
  it("トップレベルに site / terms / generatedAt / count を持つ", () => {
    const data = buildAnatomyExport([], BASE, "2026-07-17");
    expect(data.site).toBe(BASE);
    expect(data.generatedAt).toBe("2026-07-17");
    expect(data.count).toBe(0);
    expect(data.articles).toEqual([]);
    expect(data.terms.ja).toContain(BASE);
    expect(data.terms.en).toContain(BASE);
  });

  it("言語中立フィールドは ja を正とし、ローカライズ項目は両言語を含む", () => {
    const article = makeArticle("alpha", { title: "Alpha の解剖" }, { title: "Anatomy of Alpha" });
    const data = buildAnatomyExport([article], BASE, "2026-07-17");
    expect(data.count).toBe(1);

    const exported = data.articles[0];
    expect(exported.slug).toBe("alpha");
    expect(exported.url).toEqual({
      ja: `${BASE}/ja/articles/alpha`,
      en: `${BASE}/en/articles/alpha`,
    });
    expect(exported.title).toEqual({ ja: "Alpha の解剖", en: "Anatomy of Alpha" });
    expect(exported.category).toBe("game");
    expect(exported.tags).toEqual(["test-tag"]);
    expect(exported.origin).toBe("JP");
    expect(exported.serviceUrl).toBe("https://example.com");
    expect(exported.scores).toEqual({ product: 4, ux: 3.5, tech: 3, business: 4.5 });
    expect(exported.sources).toEqual([
      { label: { ja: "公式", en: "公式" }, url: "https://example.com", accessedAt: "2026-07-01" },
    ]);
  });

  it("techStack は evidenceUrl の有無を保って書き出す", () => {
    const withUrl = {
      layer: "Frontend",
      name: "React",
      confidence: "confirmed" as const,
      evidence: "公式ブログ",
      evidenceUrl: "https://example.com/blog",
    };
    const article = makeArticle("beta", { techStack: [withUrl] });
    const [exported] = buildAnatomyExport([article], BASE, "2026-07-17").articles;
    expect(exported.techStack).toEqual([
      {
        layer: { ja: "Frontend", en: "Frontend" },
        name: "React",
        confidence: "confirmed",
        evidence: { ja: "公式ブログ", en: "公式ブログ" },
        evidenceUrl: "https://example.com/blog",
      },
    ]);

    const withoutUrl = makeArticle("gamma");
    const [plain] = buildAnatomyExport([withoutUrl], BASE, "2026-07-17").articles;
    expect(plain.techStack[0]).not.toHaveProperty("evidenceUrl");
  });
});
