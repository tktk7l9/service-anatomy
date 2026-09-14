// サイト全体の定数。デプロイ先を変える場合はここだけ更新する。
// 2026-09-14 に Vercel から Cloudflare Workers へ移行した。BASE_URL は canonical /
// metadataBase / sitemap / robots / RSS / JSON-LD / anatomy.json がすべて参照する。
// site.test.ts が vercel.app への差し戻しと末尾スラッシュを止める。
export const SITE_NAME = "Service Anatomy";
export const BASE_URL = "https://service-anatomy.saitotakuya0719.workers.dev";
export const GITHUB_URL = "https://github.com/tktk7l9/service-anatomy";
