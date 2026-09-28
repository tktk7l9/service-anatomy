import path from "node:path";
import { scanContentDirectory, type ContentEntry, type ContentFile } from "@/engine/content/scan";
import { parseComparisonFrontmatter, type ComparisonFrontmatter } from "./schema";

// Loads content/comparisons/<slug>/{ja.md, en.md}. Same layout as articles/load.ts,
// using the same directory scanner (engine/content/scan.ts).

export type ComparisonFile = ContentFile<ComparisonFrontmatter>;
export type ComparisonItem = ContentEntry<ComparisonFrontmatter>;

function defaultRootDir(): string {
  return path.join(process.cwd(), "content", "comparisons");
}

/** Loads all comparisons and returns them newest first by publish date (same day: slug ascending). */
export function loadComparisons(rootDir: string = defaultRootDir()): ComparisonItem[] {
  const comparisons = scanContentDirectory(rootDir, parseComparisonFrontmatter);
  return comparisons.sort(
    (a, b) =>
      b.ja.frontmatter.publishedAt.localeCompare(a.ja.frontmatter.publishedAt) ||
      a.slug.localeCompare(b.slug),
  );
}
