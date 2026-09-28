import type { MetadataRoute } from "next";
import { BASE_URL } from "@/engine/site";

/** Crawlers collecting training data or producing AI summaries.
 *
 *  nonce CSP was dropped on 2026-09-12, but article pages (articles/[slug]) have no
 *  generateStaticParams and remain dynamic, so they are not served from the CDN cache.
 *  Letting aggressive crawlers through means every request costs a full article body
 *  in transfer, so throttling them is still needed.
 *
 *  Googlebot / Bingbot are allowed to keep search traffic.
 *  Google-Extended only controls use for Gemini training and does not affect the search index. */
const DISALLOWED_AI_CRAWLERS = [
  "AI2Bot",
  "Amazonbot",
  "anthropic-ai",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ChatGPT-User",
  "Claude-Web",
  "ClaudeBot",
  "cohere-ai",
  "Diffbot",
  "FacebookBot",
  "Google-Extended",
  "GPTBot",
  "ImagesiftBot",
  "Meta-ExternalAgent",
  "meta-externalagent",
  "OAI-SearchBot",
  "omgili",
  "PerplexityBot",
  "Perplexity-User",
  "Timpibot",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...DISALLOWED_AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        disallow: "/",
      })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
