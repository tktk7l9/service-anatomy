#!/usr/bin/env node
// External broken-link check. Sends real requests to the URLs referenced by the frontmatter
// of articles and comparisons (serviceUrl / sources[].url / techStack[].evidenceUrl) and to
// the OGP image URLs in content/og-cards.json (shown directly in the official link card at the
// end of articles), and checks whether they are alive.
// Run `npm run check-links` in the weekly review; fix broken ones by replacing or removing the
// URL in the article, or by re-running npm run og-cards.
// Usage: npm run check-links [-- --ci]
//   --ci exits 1 if any link is dead or failed for another reason that needs a look.
//   Bot-protected, rate-limited and skipped links never fail the run.
//
// Each URL gets a verdict:
//   alive    2xx (after redirects).
//   dead     404 / 410, DNS name not found, or a TLS error (bad / mismatched certificate).
//            These are the ones to fix.
//   blocked  bot protection (Cloudflare challenge, "Attention Required", Akamai, 401/403/406/419/999).
//            We cannot get past these from a script; open them in a browser.
//   limited  still 429 after one retry. Run again later.
//   other    anything else (5xx, 400, timeout, connection reset). Check manually.
//   skipped  hosts we must not contact (see SKIP_HOSTS).
import { spawnSync } from "node:child_process";
import { readdirSync, readFileSync } from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

// Some sites (webflow.com, gemini.google.com) send response headers larger than Node's default
// 16 KiB limit, and fetch then fails with UND_ERR_HEADERS_OVERFLOW. Node's built-in fetch reads
// its limit from --max-http-header-size, so re-run this script once with a larger limit.
// This is preferred over importing undici for a custom dispatcher: undici is only a transitive
// dependency here, and relying on it being hoisted would break silently on a lockfile change.
const MIN_HEADER_SIZE = 128 * 1024;
if (http.maxHeaderSize < MIN_HEADER_SIZE) {
  const child = spawnSync(
    process.execPath,
    [`--max-http-header-size=${MIN_HEADER_SIZE}`, fileURLToPath(import.meta.url), ...process.argv.slice(2)],
    { stdio: "inherit" },
  );
  process.exit(child.status ?? 1);
}

const ROOT = process.cwd();
// First attempt: identify ourselves honestly so site owners can see who is checking.
// The UA carries only the public site URL, never a personal contact.
const BOT_UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 ServiceAnatomyBot/1.0 (+https://service-anatomy.vercel.app)";
// GET retry: a plain browser UA plus the headers a browser sends on a top-level navigation.
// Some servers reject anything that looks automated or lacks Sec-Fetch-* (ai.meta.com answers
// 400 without them). The retry is a single GET per URL, i.e. what a reader clicking the link
// does, so looking like a browser here does not hide unusual traffic.
const BROWSER_HEADERS = {
  "user-agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
  "accept-language": "ja,en-US;q=0.9,en;q=0.8",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "none",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
};
// sec.gov requires a declared contact (name + e-mail) in the User-Agent and blocks requests
// without one. This project never sends a personal contact, so these URLs are not checked.
const SKIP_HOSTS = [{ suffix: "sec.gov", reason: "requires declared contact" }];
const CONCURRENCY = 6;
const TIMEOUT_MS = 15000;
// Retry-After is honoured up to this cap; without the header we wait DEFAULT_BACKOFF_MS.
const MAX_BACKOFF_MS = 30000;
const DEFAULT_BACKOFF_MS = 5000;
// For error pages we read at most this much body to look for a bot-challenge title.
const SNIFF_BYTES = 32 * 1024;

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

function hostOf(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function skipReason(url) {
  const host = hostOf(url);
  const rule = SKIP_HOSTS.find((s) => host === s.suffix || host.endsWith(`.${s.suffix}`));
  return rule?.reason ?? null;
}

const skipped = [];
const toCheck = [];
for (const url of byUrl.keys()) {
  const reason = skipReason(url);
  if (reason) skipped.push({ url, verdict: "skipped", detail: reason });
  else toCheck.push(url);
}

// Interleave hosts (round-robin) so that consecutive requests rarely hit the same server.
// This keeps us polite to hosts with many links (webflow.com, make.com, github.com) and
// avoids most 429s without lowering the global concurrency.
function interleaveByHost(list) {
  const groups = new Map();
  for (const url of list) {
    const host = hostOf(url);
    if (!groups.has(host)) groups.set(host, []);
    groups.get(host).push(url);
  }
  const queues = [...groups.values()];
  const out = [];
  for (let round = 0; out.length < list.length; round++) {
    for (const q of queues) if (round < q.length) out.push(q[round]);
  }
  return out;
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function retryAfterMs(res) {
  const value = res.headers.get("retry-after");
  if (!value) return DEFAULT_BACKOFF_MS;
  const seconds = Number(value);
  const ms = Number.isFinite(seconds) ? seconds * 1000 : Date.parse(value) - Date.now();
  if (!Number.isFinite(ms) || ms < 0) return DEFAULT_BACKOFF_MS;
  return Math.min(ms, MAX_BACKOFF_MS);
}

// Reads at most SNIFF_BYTES of the body, then cancels the stream so large files
// (PDFs, images) are never downloaded in full.
async function sniffBody(res) {
  if (!res.body) return "";
  const reader = res.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (size < SNIFF_BYTES) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      size += value.byteLength;
    }
  } catch {
    // A body that fails mid-stream still leaves us with the status and headers.
  } finally {
    reader.cancel().catch(() => {});
  }
  return Buffer.concat(chunks).toString("utf8");
}

async function discardBody(res) {
  await res.body?.cancel().catch(() => {});
}

// One request, retried once after a backoff when rate limited.
async function request(url, method, headers) {
  const send = () =>
    fetch(url, { method, headers, redirect: "follow", signal: AbortSignal.timeout(TIMEOUT_MS) });
  let res = await send();
  if (res.status === 429 || res.status === 503) {
    const wait = retryAfterMs(res);
    await discardBody(res);
    await sleep(wait);
    res = await send();
  }
  return res;
}

const TLS_ERROR =
  /^(ERR_TLS_|ERR_SSL_|CERT_|UNABLE_TO_|DEPTH_ZERO_SELF_SIGNED_CERT$|SELF_SIGNED_CERT_IN_CHAIN$|HOSTNAME_MISMATCH$)/;

function classifyError(error) {
  if (error.name === "TimeoutError") return { verdict: "other", detail: `timeout after ${TIMEOUT_MS / 1000}s` };
  // fetch wraps the network error ("fetch failed"); the useful code sits on a nested cause.
  let cause = error.cause;
  while (cause && typeof cause.code !== "string" && cause.cause) cause = cause.cause;
  const code = typeof cause?.code === "string" ? cause.code : null;
  if (code === "ENOTFOUND") return { verdict: "dead", detail: `DNS: ${cause.hostname ?? "host"} not found` };
  if (code && TLS_ERROR.test(code)) return { verdict: "dead", detail: `TLS: ${code} (${cause.message})` };
  if (code === "UND_ERR_HEADERS_OVERFLOW") {
    return { verdict: "other", detail: "response headers too large (likely alive; check in a browser)" };
  }
  if (code) return { verdict: "other", detail: `${code}: ${cause.message}` };
  return { verdict: "other", detail: `error: ${error.message}` };
}

const CHALLENGE_TITLE = /<title>\s*(Just a moment|Attention Required|Are you a robot|Security check|Access Denied)/i;

function classifyResponse(res, body) {
  const status = res.status;
  const label = `HTTP ${status}`;
  if (res.ok) return { verdict: "alive", detail: label };
  if (status === 404 || status === 410) return { verdict: "dead", detail: label };
  if (status === 429) return { verdict: "limited", detail: `${label} after one retry` };

  const server = (res.headers.get("server") ?? "").toLowerCase();
  let signal = null;
  if (res.headers.get("cf-mitigated")) signal = `cf-mitigated: ${res.headers.get("cf-mitigated")}`;
  else if (CHALLENGE_TITLE.test(body)) signal = `"${body.match(CHALLENGE_TITLE)[1]}" page`;
  else if (server.includes("akamai") || res.headers.has("akamai-grn")) signal = "Akamai";
  if (signal) return { verdict: "blocked", detail: `${label}, ${signal}` };
  if ([401, 403, 406, 419, 999].includes(status)) return { verdict: "blocked", detail: `${label}, access denied` };
  return { verdict: "other", detail: label };
}

async function checkUrl(url) {
  // 1) HEAD with our own UA: cheap, and most servers answer it correctly.
  try {
    const res = await request(url, "HEAD", { "user-agent": BOT_UA });
    if (res.ok) return { verdict: "alive", detail: `HTTP ${res.status}` };
  } catch (error) {
    const result = classifyError(error);
    // DNS / TLS failures do not depend on the method or headers; no point retrying.
    if (result.verdict === "dead") return result;
  }
  // 2) GET with browser headers. Some servers answer HEAD with 403/404 but GET with 200
  // (thenextweb.com, usdsjv.tiktok.com, release.tdnet.info). Only error pages are read,
  // and only up to SNIFF_BYTES; a 2xx body is cancelled right after the headers.
  try {
    const res = await request(url, "GET", BROWSER_HEADERS);
    if (res.ok) {
      await discardBody(res);
      return { verdict: "alive", detail: `HTTP ${res.status}` };
    }
    return classifyResponse(res, await sniffBody(res));
  } catch (error) {
    return classifyError(error);
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

console.log(`Checking ${toCheck.length} external links (after deduplication)...`);
if (skipped.length > 0) console.log(`Skipping ${skipped.length} links on hosts we do not contact.`);
console.log("");

const started = Date.now();
const results = await runWithConcurrency(interleaveByHost(toCheck), CONCURRENCY, async (url) => ({
  url,
  ...(await checkUrl(url)),
}));

const GROUPS = [
  { verdict: "dead", title: "Dead (404/410/DNS/TLS) — fix these" },
  { verdict: "other", title: "Other errors (check manually)" },
  { verdict: "limited", title: "Rate limited (run again later)" },
  { verdict: "blocked", title: "Blocked by bot protection (verify manually)" },
  { verdict: "skipped", title: "Skipped (requires declared contact)" },
];

const all = [...results, ...skipped];
const count = (verdict) => all.filter((r) => r.verdict === verdict).length;

for (const group of GROUPS) {
  const items = all.filter((r) => r.verdict === group.verdict).sort((a, b) => a.url.localeCompare(b.url));
  if (items.length === 0) continue;
  console.log(`⚠ ${group.title}: ${items.length}\n`);
  for (const item of items) {
    console.log(`  ${item.detail}\n    ${item.url}`);
    for (const r of byUrl.get(item.url)) {
      console.log(`      ← ${r.slug} / ${r.field} (${r.label})`);
    }
  }
  console.log("");
}

const alive = count("alive");
const seconds = Math.round((Date.now() - started) / 1000);
console.log(
  `Summary (${all.length} links, ${seconds}s): ✓ alive ${alive} / dead ${count("dead")} / other ${count("other")} / ` +
    `rate limited ${count("limited")} / bot protection ${count("blocked")} / skipped ${count("skipped")}`,
);
if (alive === results.length) console.log(`✓ All ${results.length} checked links are alive.`);

if (ci && count("dead") + count("other") > 0) process.exit(1);
