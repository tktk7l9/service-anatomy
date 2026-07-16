import type { Article } from "./load";

// techStack frontmatter の name から「技術スタック横断ページ」(/tech/<slug>) を
// 自動生成するための純関数群。name は "Next.js (App Router)" や
// "Terraform / Argo CD / GitHub Actions" のような複合表記を許すため、
// ①括弧注釈の除去 → ②" / " と " + " での分割 → ③"etc." の除去 で
// 個別技術トークンに分解する。日本語等スラッグ化できないトークンは対象外。

export interface TechRef {
  slug: string;
  name: string;
}

export interface TechIndexEntry {
  slug: string;
  name: string;
  count: number;
}

/** 複合表記の name を個別技術トークンへ分解する。 */
export function techTokens(name: string): string[] {
  const stripped = name
    .replace(/[（(][^）)]*[）)]/g, " ")
    .replace(/\betc\.?/gi, " ");
  return stripped
    .split(/\s*\/\s*|\s\+\s/)
    .map((token) => token.trim())
    .filter((token) => token !== "");
}

/** 技術トークンを URL スラッグにする（スラッグ化できなければ空文字）。 */
export function techSlug(token: string): string {
  return token
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** name に含まれる、横断ページを持つ技術参照の一覧。 */
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

/** 全記事の技術を集計する（記事数の多い順・同数はスラッグ昇順）。 */
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

/** 指定スラッグの技術を使う記事を絞り込む（元の記事順を保つ）。 */
export function filterByTech(articles: Article[], slug: string): Article[] {
  return articles.filter((article) =>
    article.ja.frontmatter.techStack.some((entry) =>
      techRefs(entry.name).some((ref) => ref.slug === slug),
    ),
  );
}
