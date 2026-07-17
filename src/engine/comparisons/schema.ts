import {
  asRecord,
  fail,
  KEBAB_CASE,
  parseSources,
  requireIsoDate,
  requireString,
  type SourceRef,
} from "@/engine/content/validators";

// 比較解剖（対決記事）の frontmatter バリデータ。articles/schema.ts と同じ
// 手書きスタイルで、共通プリミティブは engine/content/validators.ts を再利用する。
// slugA/slugB が実在の記事を指しているかは engine 層では検証しない（記事コレクションへの
// 依存を避けるため）— content.test.ts が ALL_ARTICLES と突き合わせて横断検証する。

export interface ComparisonFrontmatter {
  title: string;
  description: string;
  lead: string;
  slugA: string;
  slugB: string;
  publishedAt: string;
  updatedAt: string;
  lastVerified: string;
  sources: SourceRef[];
}

function parseComparisonSlug(obj: Record<string, unknown>, key: string, context: string): string {
  const value = requireString(obj, key, context);
  if (!KEBAB_CASE.test(value)) {
    fail(context, `${key} は kebab-case の文字列である必要があります`);
  }
  return value;
}

export function parseComparisonFrontmatter(data: unknown, context: string): ComparisonFrontmatter {
  const obj = asRecord(data, context, "frontmatter");
  const slugA = parseComparisonSlug(obj, "slugA", context);
  const slugB = parseComparisonSlug(obj, "slugB", context);
  if (slugA === slugB) {
    fail(context, `slugA と slugB は異なる記事を指す必要があります`);
  }
  return {
    title: requireString(obj, "title", context),
    description: requireString(obj, "description", context),
    lead: requireString(obj, "lead", context),
    slugA,
    slugB,
    publishedAt: requireIsoDate(obj, "publishedAt", context),
    updatedAt: requireIsoDate(obj, "updatedAt", context),
    lastVerified: requireIsoDate(obj, "lastVerified", context),
    sources: parseSources(obj, context),
  };
}
