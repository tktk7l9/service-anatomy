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
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
