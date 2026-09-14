import { NextResponse } from "next/server";
import { ALL_ARTICLES } from "@/engine/articles";
import { buildAnatomyExport } from "@/engine/articles/export";
import { BASE_URL } from "@/engine/site";

// 全記事の構造化データ（解剖スコア・技術構成・出典）の公開エンドポイント。
// 開発者の引用・集計を想定して CORS を全許可し、エッジで1時間キャッシュする。
//
// 以前は force-dynamic だったが、Cloudflare Workers では実行時に content/ を読めない
// ため動的では成立しない。SSG にすると generatedAt がビルド日で固定されるが、記事は
// デプロイ単位でしか変わらないので、むしろ配信物と日付が一致する。
//
// force-static は必須。Next 15 以降 GET の route handler は既定で動的なので、
// force-dynamic を外すだけでは ƒ のままになる（ビルド表で実際に確認した）。
export const dynamic = "force-static";

export function GET() {
  const data = buildAnatomyExport(ALL_ARTICLES, BASE_URL, new Date().toISOString().slice(0, 10));
  return NextResponse.json(data, {
    headers: {
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
