import type { Article } from "./load";

// Pure functions that auto-generate the "tech stack cross-cutting pages" (/tech/<slug>) from
// the name in techStack frontmatter. Because name allows compound forms such as "Next.js (App Router)"
// or "Terraform / Argo CD / GitHub Actions", it is split into individual tech tokens by
// (1) removing parenthetical notes → (2) splitting on " / " and " + " → (3) removing "etc.".
// Only a slash with whitespace on at least one side is a list separator. A slash inside a word
// ("Pub/Sub", "CI/CD", "TCP/IP", "I/O") is part of the name, so "Google Cloud Pub/Sub" stays one
// token (slug "google-cloud-pub-sub") instead of becoming "google-cloud-pub" and "sub".
// Tokens that cannot be slugified, such as Japanese ones, are skipped.

export interface TechRef {
  slug: string;
  name: string;
}

export interface TechIndexEntry {
  slug: string;
  name: string;
  count: number;
}

/** Splits a compound name into individual tech tokens. */
export function techTokens(name: string): string[] {
  const stripped = name
    .replace(/[（(][^）)]*[）)]/g, " ")
    .replace(/\betc\.?/gi, " ");
  return stripped
    .split(/\s+\/\s*|\s*\/\s+|\s\+\s/)
    .map((token) => token.trim())
    .filter((token) => token !== "");
}

/** Turns a tech token into a URL slug (empty string if it cannot be slugified). */
export function techSlug(token: string): string {
  return token
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Tech references in name that have a cross-cutting page. */
export function techRefs(name: string): TechRef[] {
  const refs: TechRef[] = [];
  for (const token of techTokens(name)) {
    const slug = techSlug(token);
    if (slug !== "" && !refs.some((ref) => ref.slug === slug)) {
      refs.push({ slug, name: token });
    }
  }
  return refs;
}

/** Aggregates the tech of all articles (most articles first; ties by slug ascending). */
export function collectTech(articles: Article[]): TechIndexEntry[] {
  const bySlug = new Map<string, { name: string; count: number }>();
  for (const article of articles) {
    const seen = new Set<string>();
    for (const entry of article.ja.frontmatter.techStack) {
      for (const ref of techRefs(entry.name)) {
        if (seen.has(ref.slug)) continue;
        seen.add(ref.slug);
        const existing = bySlug.get(ref.slug);
        if (existing) {
          existing.count += 1;
        } else {
          bySlug.set(ref.slug, { name: ref.name, count: 1 });
        }
      }
    }
  }
  return [...bySlug.entries()]
    .map(([slug, { name, count }]) => ({ slug, name, count }))
    .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));
}

/** Filters the articles that use the tech with the given slug (keeps original article order). */
export function filterByTech(articles: Article[], slug: string): Article[] {
  return articles.filter((article) =>
    article.ja.frontmatter.techStack.some((entry) =>
      techRefs(entry.name).some((ref) => ref.slug === slug),
    ),
  );
}
