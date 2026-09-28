import { NextResponse } from "next/server";
import { ALL_ARTICLES } from "@/engine/articles";
import { buildAnatomyExport } from "@/engine/articles/export";
import { BASE_URL } from "@/engine/site";

// Public endpoint for the structured data of all articles (anatomy scores, tech stack, sources).
// Intended for developers to cite and aggregate, so CORS allows everything and the edge caches it for 1 hour.
//
// It used to be force-dynamic, but on Cloudflare Workers content/ cannot be read at runtime,
// so dynamic rendering cannot work. With SSG generatedAt is fixed to the build date, but articles
// only change per deploy, so the date actually matches what is served.
//
// force-static is required. Since Next 15, GET route handlers are dynamic by default, so
// just removing force-dynamic leaves it as ƒ (confirmed in the build table).
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
