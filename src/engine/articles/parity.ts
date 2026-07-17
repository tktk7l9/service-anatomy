import type { Article } from "./load";

// ja/en の frontmatter のうち言語中立であるべきフィールドの食い違いを検出する。
// 翻訳漏れ・数値の不一致は content.test.ts がこの結果を CI で落とす。

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
      issues.push(`${key} が ja/en で一致しません（ja=${ja[key]} / en=${en[key]}）`);
    }
  }
  if (ja.tags.join(",") !== en.tags.join(",")) {
    issues.push(`tags が ja/en で一致しません（ja=${ja.tags.join(",")} / en=${en.tags.join(",")}）`);
  }
  for (const axis of ["product", "ux", "tech", "business"] as const) {
    if (ja.scores[axis] !== en.scores[axis]) {
      issues.push(`scores.${axis} が ja/en で一致しません（ja=${ja.scores[axis]} / en=${en.scores[axis]}）`);
    }
  }
  if (ja.techStack.length !== en.techStack.length) {
    issues.push(`techStack の件数が ja/en で一致しません（ja=${ja.techStack.length} / en=${en.techStack.length}）`);
  } else {
    ja.techStack.forEach((entry, i) => {
      const other = en.techStack[i];
      if (entry.name !== other.name || entry.confidence !== other.confidence || entry.evidenceUrl !== other.evidenceUrl) {
        issues.push(`techStack[${i}] の name/confidence/evidenceUrl が ja/en で一致しません`);
      }
    });
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
  const jaRevisions = ja.revisions ?? [];
  const enRevisions = en.revisions ?? [];
  if (jaRevisions.length !== enRevisions.length) {
    issues.push(`revisions の件数が ja/en で一致しません（ja=${jaRevisions.length} / en=${enRevisions.length}）`);
  } else {
    jaRevisions.forEach((revision, i) => {
      const other = enRevisions[i];
      if (revision.date !== other.date) {
        issues.push(`revisions[${i}].date が ja/en で一致しません（ja=${revision.date} / en=${other.date}）`);
      }
      for (const axis of ["product", "ux", "tech", "business"] as const) {
        if (revision.scores[axis] !== other.scores[axis]) {
          issues.push(`revisions[${i}].scores.${axis} が ja/en で一致しません`);
        }
      }
    });
  }
  return issues;
}
