import type { MetadataRoute } from "next";
import { BASE_URL } from "@/engine/site";

/** Crawlers collecting training data or producing AI summaries.
 *
 *  Every page is prerendered now (generateStaticParams + dynamicParams = false), so the old
 *  reason, article pages being rendered per request, no longer applies. The list stays: each
 *  listing page still inlines one HeroArt SVG per article (0.68 MB for /ja), so aggressive
 *  crawlers still cost real transfer.
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
