import type { Article } from "./load";

// Detects mismatches between ja/en frontmatter in fields that should be language-neutral.
// content.test.ts fails CI on this result for missing translations and numeric mismatches.

const NEUTRAL_KEYS = [
  "category",
  "publishedAt",
  "updatedAt",
  "lastVerified",
  "serviceUrl",
  "origin",
  "heroTheme",
] as const;

export function localeParityIssues(article: Article): string[] {
  const issues: string[] = [];
  const ja = article.ja.frontmatter;
  const en = article.en.frontmatter;

  for (const key of NEUTRAL_KEYS) {
    if (ja[key] !== en[key]) {
      issues.push(`${key} differs between ja/en (ja=${ja[key]} / en=${en[key]})`);
    }
  }
  if (ja.tags.join(",") !== en.tags.join(",")) {
    issues.push(`tags differs between ja/en (ja=${ja.tags.join(",")} / en=${en.tags.join(",")})`);
  }
  for (const axis of ["product", "ux", "tech", "business"] as const) {
    if (ja.scores[axis] !== en.scores[axis]) {
      issues.push(`scores.${axis} differs between ja/en (ja=${ja.scores[axis]} / en=${en.scores[axis]})`);
    }
  }
  if (ja.techStack.length !== en.techStack.length) {
    issues.push(`techStack count differs between ja/en (ja=${ja.techStack.length} / en=${en.techStack.length})`);
  } else {
    ja.techStack.forEach((entry, i) => {
      const other = en.techStack[i];
      if (entry.name !== other.name || entry.confidence !== other.confidence || entry.evidenceUrl !== other.evidenceUrl) {
        issues.push(`techStack[${i}] name/confidence/evidenceUrl differs between ja/en`);
      }
    });
  }
  if (ja.sources.length !== en.sources.length) {
    issues.push(`sources count differs between ja/en (ja=${ja.sources.length} / en=${en.sources.length})`);
  } else {
    ja.sources.forEach((source, i) => {
      if (source.url !== en.sources[i].url) {
        issues.push(`sources[${i}].url differs between ja/en`);
      }
    });
  }
  const jaRevisions = ja.revisions ?? [];
  const enRevisions = en.revisions ?? [];
  if (jaRevisions.length !== enRevisions.length) {
    issues.push(`revisions count differs between ja/en (ja=${jaRevisions.length} / en=${enRevisions.length})`);
  } else {
    jaRevisions.forEach((revision, i) => {
      const other = enRevisions[i];
      if (revision.date !== other.date) {
        issues.push(`revisions[${i}].date differs between ja/en (ja=${revision.date} / en=${other.date})`);
      }
      for (const axis of ["product", "ux", "tech", "business"] as const) {
        if (revision.scores[axis] !== other.scores[axis]) {
          issues.push(`revisions[${i}].scores.${axis} differs between ja/en`);
        }
      }
    });
  }
  if (ja.affiliate?.url !== en.affiliate?.url) {
    issues.push(
      `affiliate.url differs between ja/en (ja=${ja.affiliate?.url ?? "none"} / en=${en.affiliate?.url ?? "none"})`,
    );
  }
  if (ja.affiliate?.impressionUrl !== en.affiliate?.impressionUrl) {
    issues.push(
      `affiliate.impressionUrl differs between ja/en (ja=${ja.affiliate?.impressionUrl ?? "none"} / en=${en.affiliate?.impressionUrl ?? "none"})`,
    );
  }
  if (ja.affiliate?.label !== en.affiliate?.label) {
    issues.push(
      `affiliate.label differs between ja/en (ja=${ja.affiliate?.label ?? "none"} / en=${en.affiliate?.label ?? "none"})`,
    );
  }
  return issues;
}
