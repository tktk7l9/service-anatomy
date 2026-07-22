#!/usr/bin/env node
// 外部リンク切れチェック。記事・比較解剖の frontmatter が参照する URL
// （serviceUrl / sources[].url / techStack[].evidenceUrl）と、
// content/og-cards.json の OGP画像URL（記事末尾の公式リンクカードに直接表示される）
// へ実際にリクエストを送り、生きているか確認する。
// 週次の棚卸しで `npm run check-links` を実行し、切れているものは記事側の
// URL差し替え・削除、または npm run og-cards の再実行で直す。
// 使い方: npm run check-links [-- --ci]（--ci は切れているリンクがあれば exit 1）
//
// 注意: 403/999 等は bot 対策でスクリプトからのアクセスだけ弾かれている誤検知の
// 場合がある。ブラウザで目視確認してから判断すること。
import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 ServiceAnatomyBot/1.0 (+https://service-anatomy.vercel.app)";
const CONCURRENCY = 6;
const TIMEOUT_MS = 15000;

const ci = process.argv.includes("--ci");

function readFrontmatter(dir, slug) {
  const raw = readFileSync(path.join(dir, slug, "ja.md"), "utf8");
  return matter(raw).data;
}

function collectFromCollection(dir, mapper) {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => mapper(entry.name, readFrontmatter(dir, entry.name)));
}

function ref(slug, field, label, url) {
  return { slug, field, label, url };
}

const articleRefs = collectFromCollection(path.join(ROOT, "content", "articles"), (slug, data) => {
  const refs = [ref(slug, "serviceUrl", "公式サイト", data.serviceUrl)];
  (data.sources ?? []).forEach((s, i) => refs.push(ref(slug, `sources[${i}]`, s.label, s.url)));
  (data.techStack ?? []).forEach((t, i) => {
    if (t.evidenceUrl) refs.push(ref(slug, `techStack[${i}]`, `${t.name}（根拠）`, t.evidenceUrl));
  });
  return refs;
});

const comparisonRefs = collectFromCollection(path.join(ROOT, "content", "comparisons"), (slug, data) =>
  (data.sources ?? []).map((s, i) => ref(slug, `sources[${i}]`, s.label, s.url)),
);

const ogCards = JSON.parse(readFileSync(path.join(ROOT, "content", "og-cards.json"), "utf8"));
const ogCardRefs = Object.entries(ogCards)
  .filter(([, card]) => card.image)
  .map(([slug, card]) => ref(slug, "ogCard.image", "OGP画像（リンクカード表示用）", card.image));

const allRefs = [...articleRefs, ...comparisonRefs, ...ogCardRefs];

// 同一URLが複数箇所（serviceUrl と og-cards.json など）から参照されることがあるため、
// URL単位でまとめてチェックし、結果を全参照元に配る。
const byUrl = new Map();
for (const r of allRefs) {
  if (!byUrl.has(r.url)) byUrl.set(r.url, []);
  byUrl.get(r.url).push(r);
}
const urls = [...byUrl.keys()];

async function checkUrl(url) {
  const opts = (method) => ({
    method,
    headers: { "user-agent": UA },
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  try {
    let res = await fetch(url, opts("HEAD"));
    if (res.status === 405 || res.status === 501) res = await fetch(url, opts("GET"));
    return { ok: res.ok, status: res.status };
  } catch (error) {
    return { ok: false, status: null, error: error.message };
  }
}

async function runWithConcurrency(items, limit, worker) {
  const results = new Array(items.length);
  let next = 0;
  async function runNext() {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(items[i], i);
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, runNext));
  return results;
}

console.log(`外部リンク ${urls.length} 件（重複除去後）をチェック中…\n`);

const results = await runWithConcurrency(urls, CONCURRENCY, async (url) => {
  const result = await checkUrl(url);
  return { url, ...result };
});

const broken = [];
for (const r of results) {
  if (!r.ok) broken.push(r);
}

if (broken.length === 0) {
  console.log(`✓ 全 ${urls.length} 件のリンクが生きています。`);
} else {
  console.log(`⚠ ${broken.length}/${urls.length} 件のリンクが切れています:\n`);
  for (const b of broken) {
    const label = b.status ? `HTTP ${b.status}` : `エラー: ${b.error}`;
    console.log(`  ${label}\n    ${b.url}`);
    for (const r of byUrl.get(b.url)) {
      console.log(`      ← ${r.slug} / ${r.field}（${r.label}）`);
    }
  }
  console.log(
    "\n403/999 等は bot 対策で弾かれているだけの可能性があるため、ブラウザで目視確認のうえ判断してください。",
  );
}

if (ci && broken.length > 0) process.exit(1);
