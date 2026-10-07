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

const NAMED_ENTITIES = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  ndash: "–",
  mdash: "—",
  hellip: "…",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
};

// One pass, so "&amp;lt;" becomes "&lt;" rather than "<". Numeric references (&#8212; / &#x2014;)
// and the named ones above are decoded; anything else is left as written.
function decodeEntities(value) {
  return value.replace(/&(#x[0-9a-f]+|#[0-9]+|[a-z]+);/gi, (entity, body) => {
    if (body.startsWith("#")) {
      const hex = body[1] === "x" || body[1] === "X";
      const code = Number.parseInt(body.slice(hex ? 2 : 1), hex ? 16 : 10);
      return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
    }
    return NAMED_ENTITIES[body.toLowerCase()] ?? entity;
  });
}

// An http:// og:image on an https:// page would be mixed content, and the site drops non-https
// images anyway (src/engine/articles/og-cards.ts), so ask for the same image over https.
// check-links reports the URL as dead if the host does not serve it over https.
// Some image URLs redirect to another host (Squarespace's static1 host answers 301 to its CDN).
// The CSP img-src is checked against every hop, so store the final URL and allow its origin.
async function resolveImage(image, pageUrl) {
  const url = new URL(image, pageUrl);
  if (url.protocol === "http:" && new URL(pageUrl).protocol === "https:") {
    url.protocol = "https:";
  }
  try {
    const res = await fetch(url, {
      method: "HEAD",
      headers: { "user-agent": UA },
      redirect: "follow",
      signal: AbortSignal.timeout(15000),
    });
    if (res.ok && res.url.startsWith("https://")) return res.url;
  } catch {
    // Keep the URL as written; check-links will report it if it is really broken.
  }
  return url.toString();
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

// res.text() always decodes as UTF-8, which garbles pages served in Shift_JIS
// (e.g. SBI Securities returns Windows-31J). Honor the declared charset instead.
function decodeHtml(bytes, contentType) {
  const head = new TextDecoder("latin1").decode(bytes.subarray(0, 4096));
  const charset =
    contentType?.match(/charset=["']?([\w-]+)/i)?.[1] ??
    head.match(/<meta[^>]+charset=["']?([\w-]+)/i)?.[1] ??
    "utf-8";
  try {
    return new TextDecoder(charset).decode(bytes);
  } catch {
    return new TextDecoder("utf-8").decode(bytes);
  }
}

function decodeTitle(html) {
  const title = html.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1]?.trim();
  return title ? decodeEntities(title) : undefined;
}

async function fetchCard(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "text/html" },
    redirect: "follow",
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = decodeHtml(new Uint8Array(await res.arrayBuffer()), res.headers.get("content-type"));
  const image = extractMeta(html, "og:image") ?? extractMeta(html, "twitter:image");
  return {
    title: extractMeta(html, "og:title") ?? decodeTitle(html),
    description: extractMeta(html, "og:description") ?? extractMeta(html, "description"),
    image: image ? await resolveImage(image, res.url) : undefined,
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
