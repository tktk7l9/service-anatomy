import type { MetadataRoute } from "next";
import { BASE_URL } from "@/engine/site";

/** 学習データ収集・AI要約目的のクローラー。
 *
 *  nonce CSP をやめて CDN キャッシュに乗るようになったが、学習データ収集・AI要約目的の
 *  クローラーは記事本文を丸ごと持っていくため転送量の観点では依然として抑制する。
 *  キャッシュ可否とは別の判断として残している。
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
