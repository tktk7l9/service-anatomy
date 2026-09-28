#!/usr/bin/env node
// Fetches OGP metadata from each article's serviceUrl and generates
//   content/og-cards.json      … slug → { title, description, image, siteName, fetchedAt }
//   content/og-image-hosts.json … list of og:image origins (next.config.ts reads it and passes it to the CSP img-src)
// Run manually with `npm run og-cards` when adding/updating articles, and commit the result.
// next.config.ts reads it at build time, so newly added hosts reach the CSP only after a rebuild.
// Images themselves are not stored (shown directly from each company's server as a link card = no copying).
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "content", "articles");
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 ServiceAnatomyBot/1.0 (+https://service-anatomy.vercel.app)";

function decodeEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&#x27;", "'");
}

function extractMeta(html, key) {
  const patterns = [
    // Read double- and single-quoted values separately so an apostrophe inside a
    // double-quoted value (e.g. "LIFULL HOME'S") does not cut the value short.
    new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]+content=(?:"([^"]+)"|'([^']+)')`, "i"),
    new RegExp(`<meta[^>]+content=(?:"([^"]+)"|'([^']+)')[^>]+(?:property|name)=["']${key}["']`, "i"),
  ];
  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match) return decodeEntities((match[1] ?? match[2]).trim());
  }
  return undefined;
}

async function fetchCard(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "text/html" },
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const image = extractMeta(html, "og:image") ?? extractMeta(html, "twitter:image");
  return {
    title: extractMeta(html, "og:title") ?? html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim(),
    description: extractMeta(html, "og:description") ?? extractMeta(html, "description"),
    image: image ? new URL(image, res.url).toString() : undefined,
    siteName: extractMeta(html, "og:site_name"),
    fetchedAt: new Date().toISOString().slice(0, 10),
  };
}

const slugs = readdirSync(ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const cards = {};
for (const slug of slugs) {
  const frontmatter = readFileSync(path.join(ROOT, slug, "ja.md"), "utf8");
  const serviceUrl = frontmatter.match(/^serviceUrl: "(.+)"$/m)?.[1];
  if (!serviceUrl) {
    console.warn(`skip ${slug}: no serviceUrl`);
    continue;
  }
  try {
    const card = await fetchCard(serviceUrl);
    cards[slug] = { url: serviceUrl, ...card };
    console.log(`ok   ${slug}: image=${card.image ? "yes" : "no"} title=${card.title?.slice(0, 40)}`);
  } catch (error) {
    console.warn(`fail ${slug}: ${error.message} (falling back to a text-only card)`);
    cards[slug] = { url: serviceUrl, fetchedAt: new Date().toISOString().slice(0, 10) };
  }
}

const hosts = [
  ...new Set(
    Object.values(cards)
      .map((card) => card.image)
      .filter(Boolean)
      .map((image) => new URL(image).origin),
  ),
].sort();

writeFileSync(
  path.join(process.cwd(), "content", "og-cards.json"),
  `${JSON.stringify(cards, null, 2)}\n`,
);
writeFileSync(
  path.join(process.cwd(), "content", "og-image-hosts.json"),
  `${JSON.stringify(hosts, null, 2)}\n`,
);
console.log(`\nwrote og-cards.json (${Object.keys(cards).length} cards) / og-image-hosts.json (${hosts.length} hosts)`);
