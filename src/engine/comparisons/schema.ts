import {
  asRecord,
  fail,
  KEBAB_CASE,
  parseSources,
  requireIsoDate,
  requireString,
  type SourceRef,
} from "@/engine/content/validators";

// Frontmatter validator for comparisons (head-to-head articles). Same hand-written style as
// articles/schema.ts, reusing the shared primitives in engine/content/validators.ts.
// Whether slugA/slugB point to real articles is not checked in the engine layer (to avoid depending on
// the article collection) — content.test.ts cross-checks them against ALL_ARTICLES.

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
