#!/usr/bin/env node
// Article freshness check. Lists articles whose lastVerified exceeds the threshold (default 90 days), oldest first,
// then the time-limited claims registered under `expires` in articles and comparisons (src/engine/content/expires.ts),
// marking the ones past their last valid day.
// Run `npm run freshness` in the weekly review; overdue articles become candidates for re-verification or periodic re-anatomy.
// Usage: npm run freshness [-- --days N] [-- --ci] (--ci exits 1 if any article is overdue or any claim has expired)
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.join(process.cwd(), "content", "articles");
const MS_PER_DAY = 86_400_000;

const args = process.argv.slice(2);
const daysArg = args.indexOf("--days");
const maxAgeDays = daysArg === -1 ? 90 : Number(args[daysArg + 1]);
const ci = args.includes("--ci");

if (!Number.isFinite(maxAgeDays) || maxAgeDays < 0) {
  console.error("--days must be a number >= 0");
  process.exit(2);
}

// Assumes dates are written as quoted "YYYY-MM-DD" (UTC-based), per the AGENTS.md convention.
const today = new Date().toISOString().slice(0, 10);
const rows = readdirSync(ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const frontmatter = readFileSync(path.join(ROOT, entry.name, "ja.md"), "utf8");
    const lastVerified = frontmatter.match(/^lastVerified: "(\d{4}-\d{2}-\d{2})"$/m)?.[1];
    const age = lastVerified
      ? Math.floor((Date.parse(today) - Date.parse(lastVerified)) / MS_PER_DAY)
      : Number.POSITIVE_INFINITY;
    return { slug: entry.name, lastVerified: lastVerified ?? "(unknown)", age };
  })
  .sort((a, b) => b.age - a.age || a.slug.localeCompare(b.slug));

const stale = rows.filter((row) => row.age > maxAgeDays);

console.log(`Article freshness (based on lastVerified, threshold ${maxAgeDays} days, today ${today})\n`);
for (const row of rows) {
  const mark = row.age > maxAgeDays ? "⚠" : " ";
  const days = Number.isFinite(row.age) ? `${String(row.age).padStart(4)}d ago` : " unknown ";
  console.log(`${mark} ${days}  ${row.lastVerified}  ${row.slug}`);
}
console.log(
  stale.length === 0
    ? `\nAll ${rows.length} articles are within the threshold.`
    : `\n⚠ ${stale.length}/${rows.length} articles are older than ${maxAgeDays} days. Re-verify them (web search, direct observation) and update lastVerified, or mark them as candidates for a revision (re-anatomy).`,
);

// Time-limited claims: `date` is the last day a claim is known to hold, so it expires from the next day on.
const CONTENT = path.join(process.cwd(), "content");
const claims = ["articles", "comparisons"]
  .flatMap((kind) =>
    readdirSync(path.join(CONTENT, kind), { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .flatMap((entry) => {
        const { data } = matter(readFileSync(path.join(CONTENT, kind, entry.name, "ja.md"), "utf8"));
        const items = Array.isArray(data.expires) ? data.expires : [];
        return items.map((item) => ({ where: `${kind}/${entry.name}`, date: String(item.date), claim: String(item.claim) }));
      }),
  )
  .sort((a, b) => a.date.localeCompare(b.date) || a.where.localeCompare(b.where));
const expired = claims.filter((row) => row.date < today);

console.log(`\nTime-limited claims (frontmatter expires, ${claims.length} registered)\n`);
for (const row of claims) {
  console.log(`${row.date < today ? "⚠" : " "} ${row.date}  ${row.where}  ${row.claim}`);
}
console.log(
  expired.length === 0
    ? `\nNo claim is past its last valid day.`
    : `\n⚠ ${expired.length}/${claims.length} claims are past their last valid day. Re-check them, then rewrite or remove the statement and update or remove its expires entry.`,
);

if (ci && (stale.length > 0 || expired.length > 0)) process.exit(1);
