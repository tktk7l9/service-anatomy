import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// キャッシュは既定のまま。全ルートを SSG 化済みで、ISR も on-demand revalidate も
// 使っていない（PR #15）。
// https://opennext.js.org/cloudflare/caching
export default defineCloudflareConfig();
