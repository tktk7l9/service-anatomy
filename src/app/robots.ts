import type { MetadataRoute } from "next";
import { BASE_URL } from "@/engine/site";

/** 学習データ収集・AI要約目的のクローラー。
 *
 *  nonce CSP により全ルートが force-dynamic で CDN キャッシュに乗らないため、
 *  1リクエストが Vercel の Fast Origin Transfer・Function Invocation・Fluid Active CPU を
 *  同時に消費する（2026-08-04〜05 に前2者が 100%、後者も 75% 到達）。
 *  2026-07-22 には 1 記事を秒2回連打するボットで CPU 100% に達した実績もある。
 *
 *  検索流入は維持したいので Googlebot / Bingbot は通す。
 *  Google-Extended は Gemini の学習利用のみを制御し、検索インデックスには影響しない。 */
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
