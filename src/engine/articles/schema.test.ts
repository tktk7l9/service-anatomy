import { describe, expect, it } from "vitest";
import { makeRawFrontmatter } from "./__fixtures__/factories";
import { ISO_DATE, KEBAB_CASE, parseFrontmatter } from "./schema";

function mutate(fn: (raw: Record<string, unknown>) => void): Record<string, unknown> {
  const raw = makeRawFrontmatter();
  fn(raw);
  return raw;
}

describe("parseFrontmatter", () => {
  it("正しい frontmatter をパースする", () => {
    const parsed = parseFrontmatter(makeRawFrontmatter(), "ctx");
    expect(parsed.service).toBe("Alpha");
    expect(parsed.category).toBe("game");
    expect(parsed.scores).toEqual({ product: 4, ux: 3.5, tech: 3, business: 4.5 });
    expect(parsed.techStack[0].confidence).toBe("likely");
    expect(parsed.sources).toHaveLength(1);
  });

  it("evidenceUrl 付きの confirmed を受理する", () => {
    const raw = mutate((r) => {
      (r.techStack as Record<string, unknown>[])[0].confidence = "confirmed";
      (r.techStack as Record<string, unknown>[])[0].evidenceUrl = "https://example.com/proof";
    });
    expect(parseFrontmatter(raw, "ctx").techStack[0].evidenceUrl).toBe("https://example.com/proof");
  });

  it.each([
    ["frontmatter が文字列", () => "not-object" as unknown, /frontmatter はオブジェクト/],
    ["frontmatter が null", () => null as unknown, /frontmatter はオブジェクト/],
    ["frontmatter が配列", () => [] as unknown, /frontmatter はオブジェクト/],
  ])("%s なら失敗", (_name, make, pattern) => {
    expect(() => parseFrontmatter(make(), "ctx")).toThrow(pattern);
  });

  it.each([
    ["service 欠落", (r: Record<string, unknown>) => delete r.service, /service は空でない文字列/],
    ["service が非文字列", (r: Record<string, unknown>) => (r.service = 1), /service は空でない文字列/],
    ["title が空白のみ", (r: Record<string, unknown>) => (r.title = "  "), /title は空でない文字列/],
    ["category が未定義値", (r: Record<string, unknown>) => (r.category = "sports"), /category "sports" は定義されていません/],
    ["tags が配列でない", (r: Record<string, unknown>) => (r.tags = "steam"), /tags は1件以上の配列/],
    ["tags が空配列", (r: Record<string, unknown>) => (r.tags = []), /tags は1件以上の配列/],
    ["tags に非文字列", (r: Record<string, unknown>) => (r.tags = [1]), /tags\[0\] は kebab-case/],
    ["tags に kebab-case でない値", (r: Record<string, unknown>) => (r.tags = ["Steam Deck"]), /tags\[0\] は kebab-case/],
    ["publishedAt が形式外", (r: Record<string, unknown>) => (r.publishedAt = "2026/07/01"), /publishedAt は "YYYY-MM-DD"/],
    [
      "publishedAt が YAML Date（裸日付）",
      (r: Record<string, unknown>) => (r.publishedAt = new Date("2026-07-01")),
      /publishedAt は空でない文字列/,
    ],
    ["serviceUrl が http", (r: Record<string, unknown>) => (r.serviceUrl = "http://example.com"), /serviceUrl は https:\/\//],
    ["scores がオブジェクトでない", (r: Record<string, unknown>) => (r.scores = 5), /scores はオブジェクト/],
    [
      "scores の軸欠落",
      (r: Record<string, unknown>) => delete (r.scores as Record<string, unknown>).ux,
      /scores\.ux は 0〜5/,
    ],
    [
      "scores が範囲外（負）",
      (r: Record<string, unknown>) => ((r.scores as Record<string, unknown>).tech = -0.5),
      /scores\.tech は 0〜5/,
    ],
    [
      "scores が範囲外（5超）",
      (r: Record<string, unknown>) => ((r.scores as Record<string, unknown>).product = 5.5),
      /scores\.product は 0〜5/,
    ],
    [
      "scores が 0.5 刻みでない",
      (r: Record<string, unknown>) => ((r.scores as Record<string, unknown>).business = 4.2),
      /scores\.business は 0〜5/,
    ],
    ["techStack が空", (r: Record<string, unknown>) => (r.techStack = []), /techStack は1件以上の配列/],
    [
      "techStack 要素がオブジェクトでない",
      (r: Record<string, unknown>) => (r.techStack = ["React"]),
      /techStack\[0\]: 要素 はオブジェクト/,
    ],
    [
      "confidence が未定義値",
      (r: Record<string, unknown>) => ((r.techStack as Record<string, unknown>[])[0].confidence = "certain"),
      /confidence は confirmed \| likely \| speculative/,
    ],
    [
      "evidenceUrl が http",
      (r: Record<string, unknown>) => ((r.techStack as Record<string, unknown>[])[0].evidenceUrl = "http://x.com"),
      /evidenceUrl は https:\/\//,
    ],
    [
      "confirmed なのに evidenceUrl なし",
      (r: Record<string, unknown>) => ((r.techStack as Record<string, unknown>[])[0].confidence = "confirmed"),
      /confirmed の場合は evidenceUrl/,
    ],
    ["sources が空", (r: Record<string, unknown>) => (r.sources = []), /sources は1件以上の配列/],
    [
      "sources 要素がオブジェクトでない",
      (r: Record<string, unknown>) => (r.sources = ["https://example.com"]),
      /sources\[0\]: 要素 はオブジェクト/,
    ],
    [
      "sources.url が https でない",
      (r: Record<string, unknown>) => ((r.sources as Record<string, unknown>[])[0].url = "ftp://x"),
      /sources\[0\]: url は https:\/\//,
    ],
    [
      "sources.accessedAt が形式外",
      (r: Record<string, unknown>) => ((r.sources as Record<string, unknown>[])[0].accessedAt = "July 1"),
      /sources\[0\]: accessedAt は "YYYY-MM-DD"/,
    ],
  ])("%s なら失敗", (_name, mutator, pattern) => {
    expect(() => parseFrontmatter(mutate(mutator as (r: Record<string, unknown>) => void), "ctx")).toThrow(pattern);
  });

  it("エラーメッセージにコンテキスト（ファイル名）が入る", () => {
    const raw = mutate((r) => delete r.title);
    expect(() => parseFrontmatter(raw, "my-service/ja.md")).toThrow(/^my-service\/ja\.md: /);
  });
});

describe("正規表現エクスポート", () => {
  it.each(["2026-07-01"])("ISO_DATE は %s に一致", (value) => {
    expect(ISO_DATE.test(value)).toBe(true);
  });

  it.each(["2026-7-1", "20260701", ""])("ISO_DATE は %s に一致しない", (value) => {
    expect(ISO_DATE.test(value)).toBe(false);
  });

  it.each(["meccha-chameleon", "a1", "tag"])("KEBAB_CASE は %s に一致", (value) => {
    expect(KEBAB_CASE.test(value)).toBe(true);
  });

  it.each(["Bad_Slug", "-lead", "trail-", "UPPER", "日本語"])("KEBAB_CASE は %s に一致しない", (value) => {
    expect(KEBAB_CASE.test(value)).toBe(false);
  });
});
