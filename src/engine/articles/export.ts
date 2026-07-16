import { locales, type Localized } from "@/i18n/config";
import type { Article } from "./load";
import type { Confidence, Scores } from "./schema";
import type { CategoryId } from "./taxonomy";

// 全記事の構造化データを JSON 公開（/api/anatomy.json）するための純関数。
// 言語中立フィールド（parity.ts の NEUTRAL_KEYS + name/confidence/evidenceUrl 等）は
// ja 側を正とし、ローカライズされるフィールドは Localized<string> で両言語を含める。

export interface AnatomyTechEntry {
  layer: Localized<string>;
  name: string;
  confidence: Confidence;
  evidence: Localized<string>;
  evidenceUrl?: string;
}

export interface AnatomySource {
  label: Localized<string>;
  url: string;
  accessedAt: string;
}

export interface AnatomyArticle {
  slug: string;
  url: Localized<string>;
  service: Localized<string>;
  title: Localized<string>;
  description: Localized<string>;
  category: CategoryId;
  tags: string[];
  vendor: Localized<string>;
  origin: string;
  serviceUrl: string;
  publishedAt: string;
  updatedAt: string;
  lastVerified: string;
  scores: Scores;
  techStack: AnatomyTechEntry[];
  sources: AnatomySource[];
}

export interface AnatomyExport {
  site: string;
  terms: Localized<string>;
  generatedAt: string;
  count: number;
  articles: AnatomyArticle[];
}

function localized(article: Article, pick: (file: Article["ja"]) => string): Localized<string> {
  return Object.fromEntries(
    locales.map((locale) => [locale, pick(article[locale])]),
  ) as Localized<string>;
}

function exportArticle(article: Article, baseUrl: string): AnatomyArticle {
  const ja = article.ja.frontmatter;
  return {
    slug: article.slug,
    url: Object.fromEntries(
      locales.map((locale) => [locale, `${baseUrl}/${locale}/articles/${article.slug}`]),
    ) as Localized<string>,
    service: localized(article, (file) => file.frontmatter.service),
    title: localized(article, (file) => file.frontmatter.title),
    description: localized(article, (file) => file.frontmatter.description),
    category: ja.category,
    tags: ja.tags,
    vendor: localized(article, (file) => file.frontmatter.vendor),
    origin: ja.origin,
    serviceUrl: ja.serviceUrl,
    publishedAt: ja.publishedAt,
    updatedAt: ja.updatedAt,
    lastVerified: ja.lastVerified,
    scores: ja.scores,
    techStack: ja.techStack.map((entry, i) => ({
      layer: { ja: entry.layer, en: article.en.frontmatter.techStack[i].layer },
      name: entry.name,
      confidence: entry.confidence,
      evidence: { ja: entry.evidence, en: article.en.frontmatter.techStack[i].evidence },
      ...(entry.evidenceUrl !== undefined && { evidenceUrl: entry.evidenceUrl }),
    })),
    sources: ja.sources.map((source, i) => ({
      label: { ja: source.label, en: article.en.frontmatter.sources[i].label },
      url: source.url,
      accessedAt: source.accessedAt,
    })),
  };
}

/** 全記事を機械可読な公開データセットに変換する。 */
export function buildAnatomyExport(
  articles: Article[],
  baseUrl: string,
  generatedAt: string,
): AnatomyExport {
  return {
    site: baseUrl,
    terms: {
      ja: `Service Anatomy（${baseUrl}）の全記事の構造化データです。公開情報に基づく編集部の分析で、推測を含み、スコアは主観的評価です。引用・集計の際は出典として本サイトへのリンクを明記してください。`,
      en: `Structured data for all Service Anatomy articles (${baseUrl}). Editorial analysis based on public information; includes speculation, and scores are subjective ratings. When quoting or aggregating, please credit Service Anatomy with a link.`,
    },
    generatedAt,
    count: articles.length,
    articles: articles.map((article) => exportArticle(article, baseUrl)),
  };
}
