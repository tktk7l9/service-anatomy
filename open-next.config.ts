import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// 全ルートを SSG 化済み（PR #15）で ISR も on-demand revalidate も使わない。
//
// incrementalCache の指定は必須。既定（指定なし）だとプリレンダ成果物が
// どこからも読めず、dynamicParams=false と組み合わさって**記事系ルートが
// 全部 404 になる**（2026-09-14 の初回デプロイで実際にそうなった。
// /ja と /en は素の静的ページなので 200 のままで、気づきにくい）。
//
// staticAssetsIncrementalCache はプリレンダ結果を Workers static assets の
// cdn-cgi/_next_cache/ に置いて ASSETS バインディング経由で配る。
// 「revalidation を使わずプリレンダのみ配信するアプリ用」と型定義に明記されており、
// この構成そのもの。
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
