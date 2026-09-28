// Site-wide constants. When changing the deploy target, update only this file.
// Moved from Vercel to Cloudflare Workers on 2026-09-14 and to the custom domain on 2026-09-23.
// BASE_URL is referenced by canonical / metadataBase / sitemap / robots / RSS / JSON-LD / anatomy.json.
// The old URL (workers.dev) and www are permanently redirected by the redirects in next.config.ts.
// site.test.ts blocks reverting to the old URL and a trailing slash.
export const SITE_NAME = "Service Anatomy";
export const BASE_URL = "https://serviceanatomy.com";
export const GITHUB_URL = "https://github.com/tktk7l9/service-anatomy";
