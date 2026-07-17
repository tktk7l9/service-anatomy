import path from "node:path";
import { scanContentDirectory, type ContentEntry, type ContentFile } from "@/engine/content/scan";
import { parseFrontmatter, type ArticleFrontmatter } from "./schema";

// content/articles/<slug>/{ja.md, en.md} を読み込む。slug はディレクトリ名が正。
// rootDir はテストから fixture ディレクトリを注入できるよう引数化してある。
// ディレクトリスキャン自体は engine/content/scan.ts（比較解剖等と共通）。

export type ArticleFile = ContentFile<ArticleFrontmatter>;
export type Article = ContentEntry<ArticleFrontmatter>;

function defaultRootDir(): string {
  return path.join(process.cwd(), "content", "articles");
}

/** 全記事を読み込み、公開日の新しい順（同日は slug 昇順）で返す。 */
export function loadArticles(rootDir: string = defaultRootDir()): Article[] {
  const articles = scanContentDirectory(rootDir, parseFrontmatter);
  return articles.sort(
    (a, b) =>
      b.ja.frontmatter.publishedAt.localeCompare(a.ja.frontmatter.publishedAt) ||
      a.slug.localeCompare(b.slug),
  );
}
