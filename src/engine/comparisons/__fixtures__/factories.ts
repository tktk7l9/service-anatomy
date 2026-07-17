import type { ComparisonFile, ComparisonItem } from "../load";
import type { ComparisonFrontmatter } from "../schema";

// テスト用ファクトリ（coverage 対象外: vitest.config.ts の exclude 参照）。

export function makeRawComparisonFrontmatter(): Record<string, unknown> {
  return structuredClone({
    title: "Alpha vs Beta",
    description: "テスト用の比較解剖です",
    lead: "リード文",
    slugA: "alpha-service",
    slugB: "beta-service",
    publishedAt: "2026-07-18",
    updatedAt: "2026-07-18",
    lastVerified: "2026-07-18",
    sources: [{ label: "公式", url: "https://example.com", accessedAt: "2026-07-18" }],
  });
}

export function makeComparisonFrontmatter(
  overrides: Partial<ComparisonFrontmatter> = {},
): ComparisonFrontmatter {
  return { ...(makeRawComparisonFrontmatter() as unknown as ComparisonFrontmatter), ...overrides };
}

export function makeComparisonFile(
  overrides: Partial<ComparisonFrontmatter> = {},
  body = "本文。",
): ComparisonFile {
  return { frontmatter: makeComparisonFrontmatter(overrides), body };
}

export function makeComparisonItem(
  slug: string,
  overrides: Partial<ComparisonFrontmatter> = {},
  enOverrides: Partial<ComparisonFrontmatter> = overrides,
): ComparisonItem {
  return {
    slug,
    ja: makeComparisonFile(overrides),
    en: makeComparisonFile(enOverrides),
  };
}
