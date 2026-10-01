import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// Origins of the affiliate impression pixels (frontmatter affiliate.impressionUrl), for the CSP img-src.
//
// next.config.ts calls this at build time and passes the result to contentSecurityPolicy({ extraImgSrc }),
// so img-src allows exactly the hosts that some article uses: no wildcard, no hand-kept list that can
// drift from the content. A pixel whose origin is missing from the CSP is blocked silently (the page
// looks fine and the network just counts no impressions), which is why the list is derived, not typed.
//
// Only relative and package imports here: next.config.ts loads this file outside the app bundler,
// where the "@/" alias is not guaranteed to resolve. That is also why the frontmatter is read raw
// instead of through engine/articles (schema.ts validates the same field in the tests and the build).

const LOCALE_FILES = ["ja.md", "en.md"] as const;

/** Reduces impression URLs to a sorted, de-duplicated list of origins. Throws on anything not plain https. */
export function impressionOrigins(urls: readonly string[]): string[] {
  const origins = new Set<string>();
  for (const value of urls) {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.hostname.includes("*")) {
      throw new Error(`affiliate.impressionUrl must be an https URL with a concrete host: ${value}`);
    }
    origins.add(url.origin);
  }
  return [...origins].sort();
}

/** Reads every article's frontmatter under articlesDir and returns the impression pixel origins. */
export function readImpressionOrigins(articlesDir: string): string[] {
  const urls: string[] = [];
  for (const entry of readdirSync(articlesDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    for (const file of LOCALE_FILES) {
      const filePath = path.join(articlesDir, entry.name, file);
      if (!existsSync(filePath)) continue;
      const impressionUrl: unknown = matter(readFileSync(filePath, "utf8")).data.affiliate?.impressionUrl;
      if (impressionUrl === undefined) continue;
      if (typeof impressionUrl !== "string") {
        throw new Error(`${entry.name}/${file}: affiliate.impressionUrl must be a string`);
      }
      urls.push(impressionUrl);
    }
  }
  return impressionOrigins(urls);
}
