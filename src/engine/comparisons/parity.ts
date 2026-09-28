import type { ComparisonItem } from "./load";

// Detects mismatches between ja/en frontmatter in fields that should be language-neutral.
// Same role as articles/parity.ts (comparison version).

const NEUTRAL_KEYS = ["slugA", "slugB", "publishedAt", "updatedAt", "lastVerified"] as const;

export function localeParityIssues(comparison: ComparisonItem): string[] {
  const issues: string[] = [];
  const ja = comparison.ja.frontmatter;
  const en = comparison.en.frontmatter;

  for (const key of NEUTRAL_KEYS) {
    if (ja[key] !== en[key]) {
      issues.push(`${key} が ja/en で一致しません（ja=${ja[key]} / en=${en[key]}）`);
    }
  }
  if (ja.sources.length !== en.sources.length) {
    issues.push(`sources の件数が ja/en で一致しません（ja=${ja.sources.length} / en=${en.sources.length}）`);
  } else {
    ja.sources.forEach((source, i) => {
      if (source.url !== en.sources[i].url) {
        issues.push(`sources[${i}].url が ja/en で一致しません`);
      }
    });
  }
  return issues;
}
