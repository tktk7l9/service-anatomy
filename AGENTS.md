<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
# service-anatomy development conventions (for AI/Claude)

An analysis blog that dissects popular services (Japanese and international, across genres). One article = one service, covering
(1) service overview (2) UX analysis (3) tech stack (4) business model. Fully bilingual ja/en,
tech editorial (magazine-style) design.

## Architectural backbone

- **CSP uses static headers in next.config.ts** (source of truth: `src/lib/csp.ts`).
  `script-src` is `'self' 'unsafe-inline'`. **Never add `'strict-dynamic'`** —
  in CSP Level 3, strict-dynamic makes both `'self'` and `'unsafe-inline'` be ignored, and
  with no nonce and no hashes in this setup every script stops (`src/lib/csp.test.ts` blocks it).
  Migrated from the per-request nonce approach on 2026-09-12. The reason: Next 16's proxy runs
  only on the Node runtime and OpenNext (Cloudflare Workers) does not support Node middleware,
  so the site could not move to Workers. The cost is losing inline XSS protection and Observatory A+
  (an intentional decision).
  For the `img-src` of the official link card at the end of articles, `next.config.ts` reads
  `content/og-image-hosts.json` and passes it to `contentSecurityPolicy({ extraImgSrc })`.
  Pages can be static. Calling `headers()` forces dynamic rendering, so do not call it
  on pages that should be cached.
  Inline `<script>` needs no nonce (ld+json is a data block and outside script-src).
- **Every route is SSG** (`generateStaticParams` + `dynamicParams = false`). 861 pages are
  generated at build time. Read the Markdown in `content/` **only at build time** —
  reading it at runtime depends on how `process.cwd()` resolves in the Worker runtime.
  **Route handlers must set `force-static` explicitly.** Since Next 15, GET route handlers are
  dynamic by default, so just removing `force-dynamic` leaves them as `ƒ` (this applies to `rss.xml` and
  `api/anatomy.json`). If even one `ƒ` shows up in the build table, fix it.
- **Never remove `incrementalCache` from `open-next.config.ts`**
  (`staticAssetsIncrementalCache`). Without it the prerendered output cannot be read from anywhere, and
  combined with `dynamicParams = false` **every article, tag, tech and category page returns 404**.
  Worse, `/ja`, `/en`, `rss.xml` and `sitemap.xml` are plain static routes and keep returning 200,
  so **the site looks alive**. After deploying, always verify by picking real URLs from `sitemap.xml`
  and hitting the dynamic segments. A 200 from the top page guarantees nothing.
- **i18n uses a `[locale]` segment + `Localized<T> = Record<"ja"|"en", T>`**.
  No locale detection in middleware. Missing translations are caught as type errors — do not escape with `Partial`.
- **Articles live in `content/articles/<slug>/{ja.md, en.md}`**. The directory name is the authoritative slug (not in frontmatter).
  Frontmatter is validated by `src/engine/articles/schema.ts` (a hand-written validator). Always write dates as quoted
  strings (schema.ts rejects gray-matter's automatic YAML Date conversion as invalid).
- **Body Markdown is converted to HTML server-side by `src/engine/markdown/render.ts`** (unified + remark-directive).
  MDX is forbidden. remark-rehype ignores raw HTML by default (safe) — keep this property.
  `::scorecard` / `::techstack` are swapped for React components via HTML comment markers
  (`split.ts` splits them as a pure function).
- Because content is read with fs at runtime, next.config.ts's `outputFileTracingIncludes` bundles content/.
  After deploying, always check that article pages actually work (no 500s).
- **Structured data for all articles is published at `/api/anatomy.json`** (`src/engine/articles/export.ts`, CORS fully open).
  If you change the frontmatter schema, update export too.

## Testing policy

- `src/engine/**` and `src/i18n/**` are at **100% coverage** (the thresholds in vitest.config.ts are the gate, enforced in CI).
- Content consistency is checked across the board by `content.test.ts` (both ja/en files exist, language-neutral fields are equal,
  sources≥1, scores in range, confirmed requires evidenceUrl, at least 4 h2s, `::techstack` present).
  Keep the design where tests automatically include newly added articles.
- React components are the presentation layer and outside coverage (write smoke tests).

## Article writing rules (legal and quality ground rules)

- **Observed facts go in `:::fact`** with a required source (sources / evidenceUrl). **Guesses are marked explicitly with `:::guess`**
  and must not use assertive wording (use phrasing like 「〜とみられる」「〜と推測される」 — "appears to", "is presumed to").
- The confidence of tech stack entries (techStack) has three levels: confirmed (primary source exists) / likely (strong circumstantial evidence) /
  speculative (guess). confirmed requires evidenceUrl (enforced by tests).
- Avoid negative assertions about companies or individuals (defamation risk). Base critique on facts and offer alternative interpretations.
- Do not use screenshots or logo images (copyright, trademark). Visuals are self-made generative SVG art only.
  **The only exception = the official link card at the end of articles**: show the serviceUrl's OGP as a "link preview to the official site"
  (within the same practice as link cards on social media). Images are not copied to our server but shown directly from each company's
  server, and `img-src` allows only the origins in `content/og-image-hosts.json`.
  Fetch with `npm run og-cards` (scripts/fetch-og-cards.mjs) → commit the output. Re-run it when adding articles.
  Do not use OGP images for anything other than link previews, such as thumbnails or heroes.
- Freshness: `lastVerified` (ISO date) is required. Always verify with web search and real observation (curl -sI etc.) when writing
  (do not trust the LLM's training knowledge). `npm run freshness` lists articles whose lastVerified is over 90 days old —
  run it in the weekly review, and re-verify overdue articles and update lastVerified, or make them candidates for periodic re-anatomy (定点観測).
- Broken links: `npm run check-links` sends real requests to serviceUrl / sources[].url / techStack[].evidenceUrl / OGP image URLs
  (content/og-cards.json) to check whether they are alive. Run it in the weekly review; fix broken ones by
  replacing or removing the URL, or for OGP images by re-running `npm run og-cards`. 403/999 etc. may be false positives
  caused by bot protection, so check in a browser before deciding.
- Write ja first and sync en in the same commit (never leave a change in only one language).

## Development commands

- `npm run dev` / `npm run build` / `npm start`
- `npm run typecheck` / `npm test` / `npm run coverage` (100% gate)
- `npm run og-cards` (refetch link cards) / `npm run freshness` (lastVerified freshness list) / `npm run check-links` (external link liveness check)

## Commit granularity

- 1 commit = 1 self-contained change (one article, one component, etc.). Commit with tests green.

## Before publishing

- Starts private. Publish only via publish-check (gitleaks 0 / npm audit all 0 / no PII).
  Observatory **dropped from A+ to B (75, 10/12)** (measured on the Workers production URL on 2026-09-14).
  Both failing items are accepted trade-offs, so this score does not block publishing —
  `content-security-policy` −20 is the `'unsafe-inline'` from the CSP migration, and `subresource-integrity` −5 is
  the Cloudflare Web Analytics beacon. **Never add SRI to the beacon**:
  Cloudflare swaps the content behind the unversioned `beacon.min.js` URL, so
  pinning `integrity` silently stops just the beacon on the next update.
- Keep the "unofficial, analysis based on public information" disclaimer in the footer and on about at all times (**never remove it**).
- **Advertising disclosure (Japan stealth-marketing rule, 2023-10-01).** Every affiliate
  disclosure surface keys off `hasAffiliate()` / `affiliateOf()` in
  `src/engine/articles/disclosure.ts`: the notice above the article body (`AffiliateNotice`),
  the PR card after it (`AffiliateCard`), and the "PR" label on listing cards (`ArticleCard`).
  Do not add a new affiliate surface with its own condition.
  Comparison pages take the links of their two articles through `affiliateSlots()` in the same
  file: the same notice above the body, and after it one `AffiliateCard` per affiliated side
  under the service name (`ComparisonAffiliates`).
  **Use the ASP's ad code as provided** (A8.net and Moshimo Affiliate forbid modifying it).
  Their code is a link plus a 1x1 impression image, so copy both: the `<a href>` goes to
  `affiliate.url` and the `<img src>` to the optional `affiliate.impressionUrl` (https only;
  rewrite Moshimo's protocol-relative `//i.moshimo.com/...` to `https://`; ja/en must match,
  parity.ts checks it). Networks without a pixel (e.g. Shopify via Impact) leave it unset.
  **The ad text is part of the code**: A8.net forbids rewording a text ad or using only its link
  part. For every ASP link, copy the material's text verbatim into `affiliate.label` (one line,
  max 120 chars, identical in ja/en — parity.ts checks it; keep brackets like 【】, do not
  translate or shorten). `AffiliateCard` then shows exactly that string as the link text, with
  `lang="ja"` on the English page; the "opens in a new tab" cue (↗) sits outside the `<a>`.
  **If you do not know the material's text, ask the owner — never invent a label.** Without
  `label` the card falls back to the site's own CTA from the dictionary (fine for non-ASP
  programs such as Shopify via Impact).
  `AffiliateCard` renders the pixel after the link and gives the link
  `rel="sponsored nofollow noopener"` + `referrerPolicy="no-referrer-when-downgrade"` —
  **no `noreferrer`**, because the networks' code sends the Referer. Other external links keep
  `noopener noreferrer`. The pixel's origin reaches the CSP `img-src` automatically:
  `next.config.ts` derives it from the articles via `src/lib/impression-origins.ts`
  (exact origins, never a wildcard). The pixel is third-party tracking that loads only on
  articles with `impressionUrl`; the policy page says so — keep that text true. The policy page is
  `/[locale]/disclosure` (linked from the footer, about, and the notice); bump its
  `POLICY_UPDATED_AT` when the policy text changes. Keep the notice above the body, at
  body-like size and in regular ink — the CAA operational standards treat end-only,
  small, or faint labels as unclear.
