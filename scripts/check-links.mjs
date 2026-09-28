#!/usr/bin/env node
// External broken-link check. Sends real requests to the URLs referenced by the frontmatter
// of articles and comparisons (serviceUrl / sources[].url / techStack[].evidenceUrl) and to
// the OGP image URLs in content/og-cards.json (shown directly in the official link card at the
// end of articles), and checks whether they are alive.
// Run `npm run check-links` in the weekly review; fix broken ones by replacing or removing the
// URL in the article, or by re-running npm run og-cards.
// Usage: npm run check-links [-- --ci] (--ci exits 1 if any link is broken)
//
// Note: 403/999 etc. may be false positives where bot protection blocks only script access.
// Check in a browser before deciding.
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
  const refs = [ref(slug, "serviceUrl", "official site", data.serviceUrl)];
  (data.sources ?? []).forEach((s, i) => refs.push(ref(slug, `sources[${i}]`, s.label, s.url)));
  (data.techStack ?? []).forEach((t, i) => {
    if (t.evidenceUrl) refs.push(ref(slug, `techStack[${i}]`, `${t.name} (evidence)`, t.evidenceUrl));
  });
  return refs;
});

const comparisonRefs = collectFromCollection(path.join(ROOT, "content", "comparisons"), (slug, data) =>
  (data.sources ?? []).map((s, i) => ref(slug, `sources[${i}]`, s.label, s.url)),
);

const ogCards = JSON.parse(readFileSync(path.join(ROOT, "content", "og-cards.json"), "utf8"));
const ogCardRefs = Object.entries(ogCards)
  .filter(([, card]) => card.image)
  .map(([slug, card]) => ref(slug, "ogCard.image", "OGP image (for the link card)", card.image));

const allRefs = [...articleRefs, ...comparisonRefs, ...ogCardRefs];

// The same URL can be referenced from several places (serviceUrl and og-cards.json, etc.),
// so check once per URL and hand the result to every referrer.
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

console.log(`Checking ${urls.length} external links (after deduplication)...\n`);

const results = await runWithConcurrency(urls, CONCURRENCY, async (url) => {
  const result = await checkUrl(url);
  return { url, ...result };
});

const broken = [];
for (const r of results) {
  if (!r.ok) broken.push(r);
}

if (broken.length === 0) {
  console.log(`✓ All ${urls.length} links are alive.`);
} else {
  console.log(`⚠ ${broken.length}/${urls.length} links are broken:\n`);
  for (const b of broken) {
    const label = b.status ? `HTTP ${b.status}` : `error: ${b.error}`;
    console.log(`  ${label}\n    ${b.url}`);
    for (const r of byUrl.get(b.url)) {
      console.log(`      ← ${r.slug} / ${r.field} (${r.label})`);
    }
  }
  console.log(
    "\n403/999 and similar may just be bot protection rejecting the request; check them in a browser before deciding.",
  );
}

if (ci && broken.length > 0) process.exit(1);
