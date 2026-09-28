import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { KEBAB_CASE } from "@/engine/content/validators";
import { locales, type Locale } from "@/i18n/config";

// Directory scanner shared across content types (articles, comparisons, etc.) that use the
// common layout content/<collection>/<slug>/{ja.md, en.md}.
// Article-specific ordering (publishedAt descending) is applied by the caller.

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

/** Reads frontmatter/body, treating each directory directly under rootDir as one entry (order not guaranteed). */
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
