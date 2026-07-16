import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { locales, type Locale } from "@/i18n/config";
import { KEBAB_CASE, parseFrontmatter, type ArticleFrontmatter } from "./schema";

// content/articles/<slug>/{ja.md, en.md} を読み込む。slug はディレクトリ名が正。
// rootDir はテストから fixture ディレクトリを注入できるよう引数化してある。

export interface ArticleFile {
  frontmatter: ArticleFrontmatter;
  body: string;
}

export type Article = { slug: string } & Record<Locale, ArticleFile>;

function defaultRootDir(): string {
  return path.join(process.cwd(), "content", "articles");
}

function loadArticle(rootDir: string, slug: string): Article {
  if (!KEBAB_CASE.test(slug)) {
    throw new Error(`記事ディレクトリ名 "${slug}" は kebab-case である必要があります`);
  }
  const files = {} as Record<Locale, ArticleFile>;
  for (const locale of locales) {
    const filePath = path.join(rootDir, slug, `${locale}.md`);
    if (!fs.existsSync(filePath)) {
      throw new Error(`${slug}: ${locale}.md がありません（ja/en は必ず対で置く）`);
    }
    const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
    const body = content.trim();
    if (body === "") {
      throw new Error(`${slug}/${locale}.md: 本文が空です`);
    }
    files[locale] = { frontmatter: parseFrontmatter(data, `${slug}/${locale}.md`), body };
  }
  return { slug, ...files };
}

/** 全記事を読み込み、公開日の新しい順（同日は slug 昇順）で返す。 */
export function loadArticles(rootDir: string = defaultRootDir()): Article[] {
  if (!fs.existsSync(rootDir)) {
    return [];
  }
  const slugs = fs
    .readdirSync(rootDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  const articles = slugs.map((slug) => loadArticle(rootDir, slug));
  return articles.sort(
    (a, b) =>
      b.ja.frontmatter.publishedAt.localeCompare(a.ja.frontmatter.publishedAt) ||
      a.slug.localeCompare(b.slug),
  );
}
