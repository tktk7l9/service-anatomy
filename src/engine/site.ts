// サイト全体の定数。デプロイ先を変える場合はここだけ更新する。
// 2026-09-14 に Vercel から Cloudflare Workers へ移行し、2026-09-23 に独自ドメインへ移した。
// BASE_URL は canonical / metadataBase / sitemap / robots / RSS / JSON-LD / anatomy.json が
// すべて参照する。旧URL（workers.dev）と www は next.config.ts の redirects で恒久転送する。
// site.test.ts が旧URLへの差し戻しと末尾スラッシュを止める。
export const SITE_NAME = "Service Anatomy";
export const BASE_URL = "https://serviceanatomy.com";
export const GITHUB_URL = "https://github.com/tktk7l9/service-anatomy";
