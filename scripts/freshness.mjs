#!/usr/bin/env node
// 記事の鮮度チェック。lastVerified が閾値（既定90日）を超えた記事を古い順に一覧する。
// 週次の棚卸しで `npm run freshness` を実行し、超過記事は再検証・定点観測（再解剖）の候補にする。
// 使い方: npm run freshness [-- --days N] [-- --ci]（--ci は超過があれば exit 1）
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "content", "articles");
const MS_PER_DAY = 86_400_000;

const args = process.argv.slice(2);
const daysArg = args.indexOf("--days");
const maxAgeDays = daysArg === -1 ? 90 : Number(args[daysArg + 1]);
const ci = args.includes("--ci");

if (!Number.isFinite(maxAgeDays) || maxAgeDays < 0) {
  console.error("--days には 0 以上の数値を指定してください");
  process.exit(2);
}

// 日付は AGENTS.md の規約どおり引用符付き "YYYY-MM-DD"（UTC基準）で書かれている前提。
const today = new Date().toISOString().slice(0, 10);
const rows = readdirSync(ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => {
    const frontmatter = readFileSync(path.join(ROOT, entry.name, "ja.md"), "utf8");
    const lastVerified = frontmatter.match(/^lastVerified: "(\d{4}-\d{2}-\d{2})"$/m)?.[1];
    const age = lastVerified
      ? Math.floor((Date.parse(today) - Date.parse(lastVerified)) / MS_PER_DAY)
      : Number.POSITIVE_INFINITY;
    return { slug: entry.name, lastVerified: lastVerified ?? "(不明)", age };
  })
  .sort((a, b) => b.age - a.age || a.slug.localeCompare(b.slug));

const stale = rows.filter((row) => row.age > maxAgeDays);

console.log(`記事の鮮度（lastVerified 基準・閾値 ${maxAgeDays} 日・今日 ${today}）\n`);
for (const row of rows) {
  const mark = row.age > maxAgeDays ? "⚠" : " ";
  const days = Number.isFinite(row.age) ? `${String(row.age).padStart(4)}日前` : "  不明  ";
  console.log(`${mark} ${days}  ${row.lastVerified}  ${row.slug}`);
}
console.log(
  stale.length === 0
    ? `\n全 ${rows.length} 記事が閾値内です。`
    : `\n⚠ ${stale.length}/${rows.length} 記事が ${maxAgeDays} 日を超えています。再検証（Web検索・実観測）のうえ lastVerified を更新するか、定点観測（再解剖）の候補にしてください。`,
);

if (ci && stale.length > 0) process.exit(1);
