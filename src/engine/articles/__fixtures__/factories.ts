import type { Article, ArticleFile } from "../load";
import type { ArticleFrontmatter } from "../schema";

// テスト用ファクトリ（coverage 対象外: vitest.config.ts の exclude 参照）。

export function makeRawFrontmatter(): Record<string, unknown> {
  return structuredClone({
    service: "Alpha",
    title: "Alpha の解剖",
    description: "テスト用の記事です",
    lead: "リード文",
    category: "game",
    tags: ["test-tag"],
    publishedAt: "2026-07-01",
    updatedAt: "2026-07-01",
    lastVerified: "2026-07-01",
    serviceUrl: "https://example.com",
    vendor: "Example Inc.",
    origin: "JP",
    heroTheme: "alpha",
    scores: { product: 4, ux: 3.5, tech: 3, business: 4.5 },
    techStack: [
      { layer: "Frontend", name: "React", confidence: "likely", evidence: "テスト" },
    ],
    sources: [{ label: "公式", url: "https://example.com", accessedAt: "2026-07-01" }],
  });
}

export function makeFrontmatter(overrides: Partial<ArticleFrontmatter> = {}): ArticleFrontmatter {
  return { ...(makeRawFrontmatter() as unknown as ArticleFrontmatter), ...overrides };
}

export function makeArticleFile(
  overrides: Partial<ArticleFrontmatter> = {},
  body = "本文。",
): ArticleFile {
  return { frontmatter: makeFrontmatter(overrides), body };
}

export function makeArticle(
  slug: string,
  overrides: Partial<ArticleFrontmatter> = {},
  enOverrides: Partial<ArticleFrontmatter> = overrides,
): Article {
  return {
    slug,
    ja: makeArticleFile(overrides),
    en: makeArticleFile(enOverrides),
  };
}
