import path from "node:path";
import { scanContentDirectory, type ContentEntry, type ContentFile } from "@/engine/content/scan";
import { parseFrontmatter, type ArticleFrontmatter } from "./schema";

// Loads content/articles/<slug>/{ja.md, en.md}. The directory name is the authoritative slug.
// rootDir is a parameter so tests can inject a fixture directory.
// The directory scan itself is engine/content/scan.ts (shared with comparisons etc.).

export type ArticleFile = ContentFile<ArticleFrontmatter>;
export type Article = ContentEntry<ArticleFrontmatter>;

function defaultRootDir(): string {
  return path.join(process.cwd(), "content", "articles");
}

/** Loads all articles and returns them newest first by publish date (same day: slug ascending). */
export function loadArticles(rootDir: string = defaultRootDir()): Article[] {
  const articles = scanContentDirectory(rootDir, parseFrontmatter);
  return articles.sort(
    (a, b) =>
      b.ja.frontmatter.publishedAt.localeCompare(a.ja.frontmatter.publishedAt) ||
      a.slug.localeCompare(b.slug),
  );
}
