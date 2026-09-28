// Pure-function generation of the RSS 2.0 feed. The route handler (app/[locale]/rss.xml/route.ts)
// is kept a thin layer that just returns this result.

export interface RssItem {
  title: string;
  url: string;
  description: string;
  /** "YYYY-MM-DD" (publishedAt in frontmatter) */
  publishedAt: string;
  categories: string[];
}

export interface RssFeedArgs {
  title: string;
  description: string;
  siteUrl: string;
  feedUrl: string;
  language: string;
  items: RssItem[];
}

const XML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

export function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => XML_ESCAPES[char]);
}

/** Turns "YYYY-MM-DD" into an RFC 1123 pubDate (UTC 00:00). */
export function toPubDate(isoDate: string): string {
  return new Date(`${isoDate}T00:00:00Z`).toUTCString();
}

export function buildRssFeed(args: RssFeedArgs): string {
  const items = args.items
    .map((item) => {
      const categories = item.categories
        .map((category) => `      <category>${escapeXml(category)}</category>`)
        .join("\n");
      return [
        "    <item>",
        `      <title>${escapeXml(item.title)}</title>`,
        `      <link>${escapeXml(item.url)}</link>`,
        `      <guid isPermaLink="true">${escapeXml(item.url)}</guid>`,
        `      <pubDate>${toPubDate(item.publishedAt)}</pubDate>`,
        `      <description>${escapeXml(item.description)}</description>`,
        ...(categories === "" ? [] : [categories]),
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
    "  <channel>",
    `    <title>${escapeXml(args.title)}</title>`,
    `    <link>${escapeXml(args.siteUrl)}</link>`,
    `    <description>${escapeXml(args.description)}</description>`,
    `    <language>${escapeXml(args.language)}</language>`,
    `    <atom:link href="${escapeXml(args.feedUrl)}" rel="self" type="application/rss+xml"/>`,
    ...(items === "" ? [] : [items]),
    "  </channel>",
    "</rss>",
    "",
  ].join("\n");
}
