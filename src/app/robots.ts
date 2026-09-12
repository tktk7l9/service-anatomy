import type { MetadataRoute } from "next";
import { BASE_URL } from "@/engine/site";

/** 学習データ収集・AI要約目的のクローラー。
 *
 *  2026-09-12 に nonce CSP をやめたが、記事ページ (articles/[slug]) は
 *  generateStaticParams が無く動的のままなので、CDN キャッシュには乗らない。
 *  巡回の激しいクローラーを素通しにすると 1 リクエスト = 記事本文まるごとが
 *  そのまま転送量になるため、抑制は引き続き必要。
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
