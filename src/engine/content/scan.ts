import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { KEBAB_CASE } from "@/engine/articles/schema";
import { locales, type Locale } from "@/i18n/config";

// content/<collection>/<slug>/{ja.md, en.md} という共通レイアウトを持つ
// コンテンツ種別（記事・比較解剖など）を横断して使うディレクトリスキャナ。
// 記事固有の並び順（publishedAt 降順）は呼び出し側が付与する。

export interface ContentFile<F> {
  frontmatter: F;
  body: string;
}

export type ContentEntry<F> = { slug: string } & Record<Locale, ContentFile<F>>;

function loadEntry<F>(
  rootDir: string,
  slug: string,
  parseFrontmatter: (data: unknown, context: string) => F,
): ContentEntry<F> {
  if (!KEBAB_CASE.test(slug)) {
    throw new Error(`ディレクトリ名 "${slug}" は kebab-case である必要があります`);
  }
  const files = {} as Record<Locale, ContentFile<F>>;
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

/** rootDir 直下のディレクトリ1つを1エントリとして、frontmatter/本文を読み込む（順序は保証しない）。 */
export function scanContentDirectory<F>(
  rootDir: string,
  parseFrontmatter: (data: unknown, context: string) => F,
): ContentEntry<F>[] {
  if (!fs.existsSync(rootDir)) {
    return [];
  }
  const slugs = fs
    .readdirSync(rootDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
  return slugs.map((slug) => loadEntry(rootDir, slug, parseFrontmatter));
}
