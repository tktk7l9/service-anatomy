import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Every route is SSG (PR #15); neither ISR nor on-demand revalidation is used.
//
// Setting incrementalCache is mandatory. With the default (unset), prerendered output
// cannot be read from anywhere, and combined with dynamicParams=false **every article route
// returns 404** (this actually happened on the first deploy on 2026-09-14;
// /ja and /en are plain static pages and stay 200, so it is easy to miss).
//
// staticAssetsIncrementalCache places prerender results under cdn-cgi/_next_cache/ in
// Workers static assets and serves them through the ASSETS binding.
// Its type definition explicitly says it is "for apps that serve prerenders only, without
// revalidation", which is exactly this setup.
//
// Cache interception answers those prerendered routes before the Next server loads. Without it
// every page view started the Next server just to read the same file (x-nextjs-cache: HIT,
// 0.3-1.3 s to first byte), and a cold isolate doing that sometimes went past the free plan's
// CPU limit (error 1102 on /en/tech/mtia and /en/compare/deepl-vs-nani-translation, 2026-10).
// Interception sends `s-maxage=31536000, stale-while-revalidate=2592000`; worker.ts rewrites it
// for browsers (applyBrowserCacheControl), or Chrome would reuse stale RSC payloads after a
// deploy.
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
  enableCacheInterception: true,
});
