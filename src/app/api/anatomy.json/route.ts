import { NextResponse } from "next/server";
import { ALL_ARTICLES } from "@/engine/articles";
import { buildAnatomyExport } from "@/engine/articles/export";
import { BASE_URL } from "@/engine/site";

// 全記事の構造化データ（解剖スコア・技術構成・出典）の公開エンドポイント。
// 開発者の引用・集計を想定して CORS を全許可し、エッジで1時間キャッシュする。
export const dynamic = "force-dynamic";

export function GET() {
  const data = buildAnatomyExport(ALL_ARTICLES, BASE_URL, new Date().toISOString().slice(0, 10));
  return NextResponse.json(data, {
    headers: {
      "access-control-allow-origin": "*",
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
