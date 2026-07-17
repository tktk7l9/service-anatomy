import path from "node:path";
import { scanContentDirectory, type ContentEntry, type ContentFile } from "@/engine/content/scan";
import { parseComparisonFrontmatter, type ComparisonFrontmatter } from "./schema";

// content/comparisons/<slug>/{ja.md, en.md} を読み込む。articles/load.ts と同じレイアウト・
// 同じディレクトリスキャナ（engine/content/scan.ts）を使う。

export type ComparisonFile = ContentFile<ComparisonFrontmatter>;
export type ComparisonItem = ContentEntry<ComparisonFrontmatter>;

function defaultRootDir(): string {
  return path.join(process.cwd(), "content", "comparisons");
}

/** 全比較解剖を読み込み、公開日の新しい順（同日は slug 昇順）で返す。 */
export function loadComparisons(rootDir: string = defaultRootDir()): ComparisonItem[] {
  const comparisons = scanContentDirectory(rootDir, parseComparisonFrontmatter);
  return comparisons.sort(
    (a, b) =>
      b.ja.frontmatter.publishedAt.localeCompare(a.ja.frontmatter.publishedAt) ||
      a.slug.localeCompare(b.slug),
  );
}
