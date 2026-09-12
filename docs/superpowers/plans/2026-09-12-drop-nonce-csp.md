# nonce CSP 撤去 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** service-anatomy / ai-primer / acro-finder の3本から nonce ベースの CSP を撤去し、Next middleware に依存しない静的 CSP に置き換えて Cloudflare Workers へ移行可能にする。

**Architecture:** per-request の `proxy.ts` を削除し、CSP 文字列をテスト可能な純関数モジュール（`lib/csp.ts`）に切り出して `next.config` の `headers()` から静的ヘッダーとして配る。`script-src` は `'self' 'unsafe-inline'` に落とし、`'strict-dynamic'` は同時に外す。ページ側の `headers().get("x-nonce")` を消すことで動的レンダリングの強制が解け、ページがキャッシュ可能になる。

**Tech Stack:** Next.js 16 (App Router), TypeScript, Vitest, @testing-library/react

**Spec:** `service-anatomy/docs/superpowers/specs/2026-09-12-drop-nonce-csp-design.md`

## Global Constraints

- `script-src` は `'self' 'unsafe-inline'`。dev のみ `'unsafe-eval'` を追加する（Next 開発オーバーレイ用）。
- **`'strict-dynamic'` を書いてはいけない。** CSP Level 3 では `'strict-dynamic'` があると allowlist と `'self'` / `'unsafe-inline'` が無視される。nonce もハッシュも無い本構成で足すと信頼の起点が消え、全スクリプトが停止する。
- `public/_headers` は使わない。Cloudflare 専用になり、複数マッチがカンマ連結される罠がある。CSP の正本は `next.config` の `headers()` だけ。
- `next.config` から `lib/csp.ts` を読むときのパスは alias (`@/`) ではなく相対パス。config の読み込み時に alias は効かない。
- `force-dynamic` を消すのは nonce 由来の4箇所のみ。`service-anatomy/src/app/[locale]/rss.xml/route.ts:7` と `service-anatomy/src/app/api/anatomy.json/route.ts:8` は nonce 由来ではない（後者はエッジ1時間キャッシュ目的）ので **残す**。
- `robots.ts` のクローラー抑制ルール本体と `acro-finder/app/facilities/page.tsx` の prefetch 無効化は挙動を変えない。コメントの文言のみ現状に合わせる。
- 各リポジトリで独立した PR を立てる。Cloudflare 移行は本計画に含めない。
- コミットメッセージ末尾には次の2行を付ける。

```
Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
```

## File Structure

| ファイル | 責務 |
| --- | --- |
| `<repo>/lib/csp.ts`（新規） | CSP 文字列を組む純関数。引数は dev フラグと、リポジトリ固有の追加 img-src のみ。I/O を持たない |
| `<repo>/lib/csp.test.ts`（新規） | `'strict-dynamic'` 再追加と nonce 復活に対する回帰ガード |
| `<repo>/next.config.*` | `csp.ts` を呼び、`securityHeaders` の先頭に `Content-Security-Policy` を足す |
| `<repo>/.../proxy.ts` | 削除 |
| `<repo>/.../layout.tsx` | `force-dynamic` とその説明コメントを削除 |
| 各 page（計14） | `next/headers` import と nonce 行を削除、`<JsonLd>` から `nonce` prop を外す |
| `json-ld.tsx` / `JsonLd.tsx` | `nonce` prop を型ごと削除 |

パスはリポジトリごとに異なる。

| repo | csp モジュール | proxy | layout |
| --- | --- | --- | --- |
| ai-primer | `src/lib/csp.ts` | `src/proxy.ts` | `src/app/layout.tsx` |
| acro-finder | `lib/csp.ts` | `proxy.ts` | `app/layout.tsx` |
| service-anatomy | `src/lib/csp.ts` | `src/proxy.ts` | `src/app/layout.tsx` |

## 全体像: ページ側の編集について

計画を通して読む人向けの見取り図。**実際の編集手順は各タスクの中に書いてあるので、
そちらを正本とすること**（このセクションと二重管理にならないよう、ここには手順を置かない）。

nonce 撤去のページ側の編集は14ページすべてで完全に同型で、次の3点だけを行う。

1. `import { headers } from "next/headers";` を削除
2. `const nonce = (await headers()).get("x-nonce") ?? undefined;` を削除
3. `<JsonLd ... nonce={nonce} />` から `nonce={nonce}` を落とす（計26箇所）
   — 内訳は ai-primer 3 / acro-finder 4 / service-anatomy 17（1ファイルに複数あるのは
   service-anatomy と ai-primer のレッスンページのみ。acro-finder は各1箇所）

`headers` の出現は14ページすべてで2回（上の1と2）だけであることを実測済みなので、
import ごと消して安全。これが確認できているぶん、ページ側の編集は機械的に進められる。

内訳は ai-primer 2ページ（Task 2）、acro-finder 4ページ（Task 4）、
service-anatomy 8ページ（Task 6）。

---

### Task 1: ai-primer — CSP モジュールと回帰ガード

**Files:**
- Create: `ai-primer/src/lib/csp.ts`
- Create: `ai-primer/src/lib/csp.test.ts`
- Modify: `ai-primer/vitest.config.ts`（coverage の `include` に `src/lib/**/*.ts` を追加）

**Interfaces:**
- Consumes: なし
- Produces: `contentSecurityPolicy(options?: { dev?: boolean }): string`

- [ ] **Step 1: ブランチを作る**

```bash
cd ai-primer
git checkout main && git pull --ff-only
git checkout -b chore/drop-nonce-csp
```

- [ ] **Step 2: 失敗するテストを書く**

Create `ai-primer/src/lib/csp.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "./csp";

describe("contentSecurityPolicy", () => {
  const prod = contentSecurityPolicy();

  it("nonce を含まない（middleware を廃止したので発行元が無い）", () => {
    expect(prod).not.toContain("nonce-");
  });

  it("'strict-dynamic' を含まない", () => {
    // CSP Level 3 では 'strict-dynamic' があると allowlist と 'self' / 'unsafe-inline' が
    // 無視される。nonce もハッシュも無いこの構成で足すと信頼の起点が消え、
    // ページ上の全スクリプトが動かなくなる。足すなら nonce かハッシュを同時に用意すること。
    expect(prod).not.toContain("strict-dynamic");
  });

  it("インラインを許すことを script-src に明示している", () => {
    // Next の bootstrap（self.__next_f.push）がインラインなので必要。
    expect(prod).toContain("script-src 'self' 'unsafe-inline'");
  });

  it("本番では 'unsafe-eval' を出さない", () => {
    expect(prod).not.toContain("unsafe-eval");
  });

  it("dev では Next のオーバーレイ用に 'unsafe-eval' を足す", () => {
    expect(contentSecurityPolicy({ dev: true })).toContain("'unsafe-eval'");
  });

  it("締めるべきディレクティブが揃っている", () => {
    for (const directive of [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "img-src 'self' data:",
      "connect-src 'self'",
      "manifest-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ]) {
      expect(prod).toContain(directive);
    }
  });

  it("ディレクティブは ; 区切りで、末尾に余分な ; を付けない", () => {
    expect(prod.endsWith(";")).toBe(false);
    expect(prod).not.toContain(";;");
  });
});
```

- [ ] **Step 3: テストが落ちることを確認する**

Run: `cd ai-primer && npx vitest run src/lib/csp.test.ts`
Expected: FAIL — `Failed to resolve import "./csp"`

- [ ] **Step 4: 最小の実装を書く**

Create `ai-primer/src/lib/csp.ts`:

```ts
// Content-Security-Policy の正本。next.config.ts の headers() がこれを配る。
//
// 以前は src/proxy.ts が per-request で nonce 付きの CSP を発行していたが、
// Next 16 の proxy は Node ランタイム専用で、OpenNext (Cloudflare Workers) は
// Node middleware に対応していないため移行できなかった。nonce をやめて静的ヘッダーに
// したことで middleware が不要になり、同時にページがキャッシュ可能になった。
//
// script-src に 'unsafe-inline' が要るのは Next の bootstrap（self.__next_f.push）が
// インラインだから。ld+json はデータブロックで実行されないため script-src の対象外。
export function contentSecurityPolicy({ dev = false }: { dev?: boolean } = {}): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data:",
    "connect-src 'self'",
    "manifest-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}
```

- [ ] **Step 5: テストが通ることを確認する**

Run: `cd ai-primer && npx vitest run src/lib/csp.test.ts`
Expected: PASS (7 tests)

- [ ] **Step 6: 新モジュールが coverage の盲点にならないようにする**

`ai-primer/vitest.config.ts` の coverage `include` を変更する。閾値は追加しない（`src/engine/**` の 100% ゲートはそのまま）。

```ts
      include: ["src/engine/**/*.ts", "src/i18n/**/*.ts", "src/lib/**/*.ts"],
```

- [ ] **Step 7: スイート全体が通ることを確認する**

Run: `cd ai-primer && npx vitest run`
Expected: PASS — 407 + 7 = 414 tests

- [ ] **Step 8: コミット**

```bash
cd ai-primer
git add src/lib/csp.ts src/lib/csp.test.ts vitest.config.ts
git commit -m "$(cat <<'EOF'
feat: CSP を静的ヘッダーとして組む純関数を追加する

proxy.ts の per-request nonce CSP を置き換えるための土台。next.config から
呼べるよう I/O を持たない純関数にし、単体テストを付けた。

テストの主眼は 'strict-dynamic' の再追加に対する回帰ガード。CSP Level 3 では
'strict-dynamic' があると 'self' と 'unsafe-inline' が無視されるため、nonce も
ハッシュも無いこの構成で足すとページ上の全スクリプトが止まる。気づくのは
本番デプロイ後になるので、テストで止める。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
```

---

### Task 2: ai-primer — nonce の撤去と静的化

**Files:**
- Modify: `ai-primer/next.config.ts`
- Delete: `ai-primer/src/proxy.ts`
- Modify: `ai-primer/src/app/layout.tsx:10-11`
- Modify: `ai-primer/src/app/[locale]/page.tsx:1,26,45`
- Modify: `ai-primer/src/app/[locale]/learn/[trackId]/[lessonSlug]/page.tsx:3,61,97,98`
- Modify: `ai-primer/src/components/json-ld.tsx`
- Modify: `ai-primer/AGENTS.md:13-15,48`

**Interfaces:**
- Consumes: `contentSecurityPolicy({ dev }: { dev?: boolean }): string` from `src/lib/csp.ts` (Task 1)
- Produces: `JsonLd({ data }: { data: unknown })` — `nonce` prop は無くなる

- [ ] **Step 1: ビルド出力の現状を記録する（後で比較するため）**

```bash
cd ai-primer && npm run build 2>&1 | tee /tmp/ai-primer-before.txt | grep -E "^[┌├└│]|Route \(app\)" | head -30
```

期待: ルート表で各ルートが `ƒ (Dynamic)` になっている（force-dynamic のため）。

- [ ] **Step 2: next.config.ts に CSP を差す**

`ai-primer/next.config.ts` を次の内容にする。

```ts
import type { NextConfig } from "next";
import { contentSecurityPolicy } from "./src/lib/csp";

// CSP は src/lib/csp.ts が正本。以前は src/proxy.ts が per-request で nonce 付きの
// CSP を発行していたが、middleware を廃止して静的ヘッダーに移した。
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy({ dev: process.env.NODE_ENV !== "production" }),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
```

- [ ] **Step 3: proxy.ts を削除する**

```bash
cd ai-primer && git rm src/proxy.ts
```

- [ ] **Step 4: layout.tsx から force-dynamic を外す**

`ai-primer/src/app/layout.tsx` の次の2行を削除する。

```ts
// Per-request rendering so the CSP nonce (set in proxy.ts) is applied.
export const dynamic = "force-dynamic";
```

- [ ] **Step 5: 2ページから nonce を外す**

次の2ファイルを編集する。

- `src/app/[locale]/page.tsx` — 1行目の import、26行目の nonce 行、45行目の `nonce={nonce}`
- `src/app/[locale]/learn/[trackId]/[lessonSlug]/page.tsx` — 3行目の import、61行目の nonce 行、97・98行目の `nonce={nonce}`（2箇所）

**削除する行（両ファイルに1つずつ）:**

```ts
import { headers } from "next/headers";
```

```ts
  const nonce = (await headers()).get("x-nonce") ?? undefined;
```

この2ファイルでは `headers` の出現はこの2行だけ（実測済み）なので、両方消してよい。

**書き換える prop:**

```tsx
<JsonLd data={jsonLd} nonce={nonce} />
```

を

```tsx
<JsonLd data={jsonLd} />
```

に。`data` に渡す変数名はページごとに違う（`jsonLd` / `breadcrumbJsonLd`）ので、`nonce={nonce}` の部分だけを落とす。

- [ ] **Step 6: json-ld.tsx から nonce prop を落とす**

`ai-primer/src/components/json-ld.tsx` を次の内容にする。

```tsx
// Renders a schema.org payload as a <script type="application/ld+json">.
// ld+json はデータブロックで実行されないため CSP script-src の対象外で、nonce は要らない。
// `<` is escaped so embedded strings can never break out of the script element.
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint: 構造化データのみ・スクリプト境界脱出は escape 済み
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
```

- [ ] **Step 7: 残骸がゼロであることを確認する**

Run:

```bash
cd ai-primer && grep -rn --exclude='*.test.ts' --exclude='*.test.tsx' \
  'x-nonce\|nonce={nonce}\|nonce-\|strict-dynamic' src 2>/dev/null
```

Expected: 出力なし。`src/lib/csp.test.ts` は `nonce-` と `strict-dynamic` を検出対象の
文字列リテラルとして意図的に含むため、テストファイルは除外している。

- [ ] **Step 8: 型・リント・テストを通す**

Run: `cd ai-primer && npx tsc --noEmit && npx eslint . && npx vitest run`
Expected: tsc 出力なし / eslint はエラー0（既存 warning のみ）/ 414 tests PASS

- [ ] **Step 9: ビルドして静的化を実測する**

```bash
cd ai-primer && npm run build 2>&1 | tee /tmp/ai-primer-after.txt | grep -E "^[┌├└│]|Route \(app\)" | head -30
diff <(grep -oE "[ƒ○●] " /tmp/ai-primer-before.txt | sort | uniq -c) <(grep -oE "[ƒ○●] " /tmp/ai-primer-after.txt | sort | uniq -c)
```

Expected: `ƒ (Dynamic)` が減り `○ (Static)` / `● (SSG)` が増える。差分が出ない場合は Step 5 の nonce 行が残っている（`headers()` の呼び出しが動的化を強制するため）。

- [ ] **Step 10: CSP ヘッダーが実際に付くことを確認する**

```bash
cd ai-primer && (npm start &) && sleep 6 && \
  curl -sI http://localhost:3000/ja | grep -i "content-security-policy"; \
  pkill -f "next start"
```

Expected: `content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline'; ...` が1行返る。`nonce-` を含まないこと。

- [ ] **Step 11: 実ブラウザでCSP違反が出ないことを確認する**

`'unsafe-inline'` を書き損じると Next の bootstrap がブロックされ、HTML は返るのに
ハイドレーションだけが死ぬ。curl では検出できないのでブラウザで見る。

本番ビルドをローカルで起動する。

```bash
cd ai-primer && npm run build && (npm start &) && sleep 6
```

この workspace には Playwright MCP が入っているので、それで確認する。

1. `browser_navigate` で `http://localhost:3000/ja` を開く
2. `browser_console_messages` を取り、`Content Security Policy` / `Refused to execute` /
   `Refused to load` を含むメッセージが **0件** であることを確認する
3. `browser_snapshot` を取り、ProgressMeter（クライアント側で localStorage を読む
   コンポーネント）が描画されていることを確認する。ここが出ていなければ
   ハイドレーションが死んでいる = `'unsafe-inline'` が効いていない
4. `http://localhost:3000/ja/learn/foundations` でも 2 と 3 を繰り返す

終わったら止める。

```bash
pkill -f "next start"
```

- [ ] **Step 11b: AGENTS.md をコードの実態に合わせる**

`ai-primer/AGENTS.md` は nonce 方式をアーキテクチャの背骨として明記しており、この変更と
正面から矛盾する。直さないと次に触る人間/エージェントがこの変更をバグとして戻す。

13-15行目を次に置き換える。

変更前:

```
- **CSP は proxy.ts の per-request nonce 方式**（acro-finder 実証済み・Observatory A+ 前提）。
  ページは `force-dynamic`。`output: 'export'` や静的化で nonce を壊さないこと。
  インライン `<script>`（JSON-LD 等）は必ず `(await headers()).get("x-nonce")` の nonce を付ける。
```

変更後:

```
- **CSP は next.config.ts の静的ヘッダー方式**（正本は `src/lib/csp.ts`）。
  `script-src` は `'self' 'unsafe-inline'`。**`'strict-dynamic'` を足してはいけない** —
  CSP Level 3 では strict-dynamic があると `'self'` も `'unsafe-inline'` も無視され、
  nonce もハッシュも無い本構成では全スクリプトが停止する（`src/lib/csp.test.ts` が止める）。
  2026-09-12 に per-request nonce 方式から移行した。理由は Next 16 の proxy が Node
  ランタイム専用で、OpenNext (Cloudflare Workers) が Node middleware 非対応のため
  Workers へ移行できなかったこと。代償としてインラインXSS防御と Observatory A+ を
  失っている（意図した判断）。
  ページは静的でよい。`headers()` を呼ぶと動的レンダリングが強制されるので、
  キャッシュを効かせたいページでは呼ばないこと。
  インライン `<script>` に nonce は不要（ld+json はデータブロックで script-src の対象外）。
```

48行目の公開ゲートも直す。

変更前:

```
- private 開始。公開は publish-check 経由のみ（gitleaks 0 / npm audit 全0 / PII なし / Observatory A+）。
```

変更後:

```
- private 開始。公開は publish-check 経由のみ（gitleaks 0 / npm audit 全0 / PII なし）。
  Observatory は 2026-09-12 の CSP 移行で A+ を外れる見込み。`'unsafe-inline'` による減点は
  受け入れた代償なので、スコアの低下自体は公開のブロッカーにしない（実測値は記録する）。
```

- [ ] **Step 12: コミット**

```bash
cd ai-primer
git add -A
git commit -m "$(cat <<'EOF'
refactor!: nonce CSP をやめて静的ヘッダーに移す

Next 16 の proxy は Node ランタイム専用で、OpenNext (Cloudflare Workers) は Node
middleware に対応していない。nonce を middleware で発行している限り Workers へ
移行できないため、nonce を捨てて CSP を next.config の静的ヘッダーに移した。

BREAKING CHANGE: script-src が 'self' 'nonce-X' 'strict-dynamic' から
'self' 'unsafe-inline' になる。インラインXSS防御が下がり、Observatory の
A+ (115) は落ちる。これは移行のために受け入れた代償で、想定外の劣化ではない。

'strict-dynamic' も同時に外している。CSP Level 3 では 'strict-dynamic' があると
'self' と 'unsafe-inline' が無視されるため、nonce だけ消して残すと全スクリプトが
停止する。src/lib/csp.test.ts がこの再追加を止める。

副産物として全ページがキャッシュ可能になった。headers() の呼び出し自体が動的
レンダリングを強制するので、force-dynamic の削除ではなく x-nonce 読み取りの
削除が効いている。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
```

- [ ] **Step 13: PR を立てる**

```bash
cd ai-primer && git push -u origin chore/drop-nonce-csp
gh pr create --title "refactor!: nonce CSP をやめて静的ヘッダーに移す" --body "設計: https://github.com/tktk7l9/service-anatomy/blob/main/docs/superpowers/specs/2026-09-12-drop-nonce-csp-design.md

Cloudflare Workers 移行の障害を外すため nonce CSP を撤去した。Vercel の Hobby
アカウントが 2026-08-11 から \`Account is blocked.\` でデプロイ不能で、月次リセットでは
解消しないことを確認済み（9/1 の境界を越えて未回復）。

## 変更

- \`src/proxy.ts\` 削除。CSP は \`src/lib/csp.ts\` を正本に \`next.config.ts\` の静的ヘッダーへ
- \`script-src 'self' 'unsafe-inline'\`。\`'strict-dynamic'\` も同時に外す（残すと \`'self'\` も
  \`'unsafe-inline'\` も無視されて全スクリプトが停止する）
- \`force-dynamic\` と \`x-nonce\` 読み取りを削除。\`headers()\` の呼び出し自体が動的化を
  強制するので、後者が静的化の実質的なトリガー
- \`JsonLd\` から \`nonce\` prop を型ごと削除（ld+json はデータブロックで script-src の対象外）

## 失うもの

インラインXSS防御と Observatory A+ (115)。移行のために受け入れた代償で、移行後に
再計測して実測値を記録する。

## 回帰ガード

\`src/lib/csp.test.ts\` が \`nonce-\` と \`strict-dynamic\` の再出現を止める。この2つは
本番デプロイ後にしか症状が出ないため、テストで止める価値が高い。

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR"
```

---

### Task 3: acro-finder — CSP モジュールと next.config の TS 化

**Files:**
- Create: `acro-finder/lib/csp.ts`
- Create: `acro-finder/lib/csp.test.ts`
- Delete: `acro-finder/next.config.js`
- Create: `acro-finder/next.config.ts`

**Interfaces:**
- Consumes: なし
- Produces: `contentSecurityPolicy(options?: { dev?: boolean }): string`

acro-finder の CSP は他2本と2点違う。地図タイルと施設写真のため `img-src` に `blob: https:` が入り、`worker-src 'self' blob:` がある。

- [ ] **Step 1: ブランチを作る**

```bash
cd acro-finder
git checkout main && git pull --ff-only
git checkout -b chore/drop-nonce-csp
```

- [ ] **Step 2: 失敗するテストを書く**

Create `acro-finder/lib/csp.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "./csp";

describe("contentSecurityPolicy", () => {
  const prod = contentSecurityPolicy();

  it("nonce を含まない（middleware を廃止したので発行元が無い）", () => {
    expect(prod).not.toContain("nonce-");
  });

  it("'strict-dynamic' を含まない", () => {
    // CSP Level 3 では 'strict-dynamic' があると allowlist と 'self' / 'unsafe-inline' が
    // 無視される。nonce もハッシュも無いこの構成で足すと信頼の起点が消え、
    // ページ上の全スクリプトが止まる。足すなら nonce かハッシュを同時に用意すること。
    expect(prod).not.toContain("strict-dynamic");
  });

  it("インラインを許すことを script-src に明示している", () => {
    expect(prod).toContain("script-src 'self' 'unsafe-inline'");
  });

  it("本番では 'unsafe-eval' を出さない", () => {
    expect(prod).not.toContain("unsafe-eval");
  });

  it("dev では Next のオーバーレイ用に 'unsafe-eval' を足す", () => {
    expect(contentSecurityPolicy({ dev: true })).toContain("'unsafe-eval'");
  });

  it("地図タイルと施設写真のため img-src に blob: と https: を許す", () => {
    expect(prod).toContain("img-src 'self' data: blob: https:");
  });

  it("worker-src に blob: を許す（地図ライブラリが Worker を起こす）", () => {
    expect(prod).toContain("worker-src 'self' blob:");
  });

  it("締めるべきディレクティブが揃っている", () => {
    for (const directive of [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "connect-src 'self'",
      "manifest-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ]) {
      expect(prod).toContain(directive);
    }
  });

  it("ディレクティブは ; 区切りで、末尾に余分な ; を付けない", () => {
    expect(prod.endsWith(";")).toBe(false);
    expect(prod).not.toContain(";;");
  });
});
```

- [ ] **Step 3: テストが落ちることを確認する**

Run: `cd acro-finder && npx vitest run lib/csp.test.ts`
Expected: FAIL — `Failed to resolve import "./csp"`

- [ ] **Step 4: 最小の実装を書く**

Create `acro-finder/lib/csp.ts`:

```ts
// Content-Security-Policy の正本。next.config.ts の headers() がこれを配る。
//
// 以前は proxy.ts が per-request で nonce 付きの CSP を発行していたが、Next 16 の
// proxy は Node ランタイム専用で、OpenNext (Cloudflare Workers) は Node middleware に
// 対応していないため移行できなかった。nonce をやめて静的ヘッダーに移した。
//
// script-src に 'unsafe-inline' が要るのは Next の bootstrap（self.__next_f.push）が
// インラインだから。ld+json はデータブロックで実行されないため script-src の対象外。
// img-src の blob: / https: は地図タイルと施設写真、worker-src の blob: は地図
// ライブラリが起こす Worker のため。
export function contentSecurityPolicy({ dev = false }: { dev?: boolean } = {}): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: blob: https:",
    "connect-src 'self'",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}
```

- [ ] **Step 5: テストが通ることを確認する**

Run: `cd acro-finder && npx vitest run lib/csp.test.ts`
Expected: PASS (9 tests)

- [ ] **Step 6: next.config.js を TS 化して CSP を差す**

CommonJS の `next.config.js` からは TS モジュールを `import` できない。Next 16 は TS 設定をサポートしているので `.ts` に変換し、他2本と構成を揃える。

```bash
cd acro-finder && git rm next.config.js
```

Create `acro-finder/next.config.ts`:

```ts
import type { NextConfig } from "next";
import { contentSecurityPolicy } from "./lib/csp";

// CSP は lib/csp.ts が正本。以前は proxy.ts が per-request で nonce 付きの CSP を
// 発行していたが、middleware を廃止して静的ヘッダーに移した。
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy({ dev: process.env.NODE_ENV !== "production" }),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(self), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
```

`Permissions-Policy` の `geolocation=(self)` は他2本と違う（現地の施設検索で位置情報を使う）。値をそのまま持ち越すこと。

- [ ] **Step 7: 設定が読めることを確認する**

Run: `cd acro-finder && npx next build 2>&1 | tail -20`
Expected: ビルドが完走する。`next.config.ts` の解決に失敗した場合はここで落ちる。

この時点では `proxy.ts` がまだ残っているので CSP ヘッダーは二重になる（proxy の nonce 版と
next.config の静的版）。ここで見るのは「設定が読めること」だけなのでそれで構わない。
proxy.ts は Task 4 で消す。

- [ ] **Step 8: スイート全体が通ることを確認する**

Run: `cd acro-finder && npx vitest run`
Expected: PASS — 135 + 9 = 144 tests

- [ ] **Step 9: コミット**

```bash
cd acro-finder
git add lib/csp.ts lib/csp.test.ts next.config.ts
git add -u next.config.js
git commit -m "$(cat <<'EOF'
feat: CSP を静的ヘッダーとして組む純関数を追加し next.config を TS 化する

proxy.ts の per-request nonce CSP を置き換えるための土台。CommonJS の
next.config.js からは TS モジュールを import できないため .ts に変換し、
ai-primer / service-anatomy と構成を揃えた。

テストの主眼は 'strict-dynamic' の再追加に対する回帰ガード。CSP Level 3 では
'strict-dynamic' があると 'self' と 'unsafe-inline' が無視されるため、nonce も
ハッシュも無いこの構成で足すとページ上の全スクリプトが止まる。

img-src の blob: / https: と worker-src の blob: は地図タイル・施設写真・地図
ライブラリの Worker のために必要で、テストで固定した。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
```

---

### Task 4: acro-finder — nonce の撤去と静的化

**Files:**
- Delete: `acro-finder/proxy.ts`
- Modify: `acro-finder/app/layout.tsx:70-71`
- Modify: `acro-finder/app/area/[pref]/page.tsx:60`
- Modify: `acro-finder/app/owners/page.tsx:59`
- Modify: `acro-finder/app/facilities/[id]/page.tsx:53`
- Modify: `acro-finder/app/facilities/page.tsx:22`
- Modify: `acro-finder/components/JsonLd.tsx`
- Modify: `acro-finder/components/JsonLd.test.tsx`

**Interfaces:**
- Consumes: `contentSecurityPolicy` from `lib/csp.ts` (Task 3)
- Produces: `JsonLd({ data }: { data: unknown })` — `nonce` prop は無くなる

- [ ] **Step 1: ビルド出力の現状を記録する**

```bash
cd acro-finder && npm run build 2>&1 | tee /tmp/acro-before.txt | grep -E "^[┌├└│]|Route \(app\)" | head -30
```

- [ ] **Step 2: JsonLd.tsx から nonce prop を落とす（先に実装を壊す）**

このリポジトリだけ既存テストが nonce を主張しているので、実装を先に変えて赤を出す。

`acro-finder/components/JsonLd.tsx` を次の内容にする。

```tsx
// Renders a schema.org payload as a <script type="application/ld+json">.
// ld+json はデータブロックで実行されないため CSP script-src の対象外で、nonce は要らない。
// `<` is escaped so embedded strings can never break out of the script element.
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
```

- [ ] **Step 3: テストが落ちることを確認する**

Run: `cd acro-finder && npx vitest run components/JsonLd.test.tsx`
Expected: FAIL — 1つ目のテストが `expect(script.getAttribute("nonce")).toBe("abc")` で
`expected null to be "abc"` になる。`npx tsc --noEmit` も `nonce` が存在しない prop として
エラーを出す。これが期待する赤。

- [ ] **Step 4: JsonLd.test.tsx を新しい契約に合わせる**

`acro-finder/components/JsonLd.test.tsx` の1つ目のテストを次に置き換える。`nonce` の主張だけを外し、直列化と `<` のエスケープ（スクリプト境界脱出の防止）はそのまま残す。

```tsx
  it("serializes data into an ld+json script", () => {
    const { container } = render(<JsonLd data={{ "@type": "Thing", name: "x" }} />);
    const script = container.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
    expect(script).toBeTruthy();
    expect(JSON.parse(script.innerHTML)).toMatchObject({ "@type": "Thing", name: "x" });
  });
```

2つ目のテスト（`escapes < so embedded strings cannot break out of the script`）は変更しない。

Run: `cd acro-finder && npx vitest run components/JsonLd.test.tsx`
Expected: PASS (2 tests)

- [ ] **Step 5: proxy.ts を削除する**

```bash
cd acro-finder && git rm proxy.ts
```

- [ ] **Step 6: layout.tsx から force-dynamic を外す**

`acro-finder/app/layout.tsx` の次の2行を削除する。

```ts
// Per-request rendering so the CSP nonce (set in middleware) is applied.
export const dynamic = "force-dynamic";
```

- [ ] **Step 7: 4ページから nonce を外す**

次の4ファイルを編集する。`nonce={nonce}` は各ファイル1箇所ずつ、計4箇所。

- `app/area/[pref]/page.tsx`（nonce 行 60）
- `app/owners/page.tsx`（nonce 行 59）
- `app/facilities/[id]/page.tsx`（nonce 行 53）
- `app/facilities/page.tsx`（nonce 行 22）

**削除する行（各ファイルに1つずつ）:**

```ts
import { headers } from "next/headers";
```

```ts
  const nonce = (await headers()).get("x-nonce") ?? undefined;
```

4ファイルすべてで `headers` の出現はこの2行だけ（実測済み）なので、両方消してよい。

**書き換える prop:**

```tsx
<JsonLd data={jsonLd} nonce={nonce} />
```

を

```tsx
<JsonLd data={jsonLd} />
```

に。`data` に渡す変数名はページごとに違うので、`nonce={nonce}` の部分だけを落とす。

- [ ] **Step 8: prefetch のコメントを現状に合わせる**

`acro-finder/app/facilities/page.tsx` の prefetch 無効化コメントは force-dynamic を根拠にしている。挙動は変えず、文言だけ直す。

変更前:

```tsx
              {/* 都道府県ぶん並ぶうえ、リンク先の area ページは 1 件あたり約 57KB。
                  force-dynamic でキャッシュが効かないため先読みは切る。 */}
```

変更後:

```tsx
              {/* 都道府県ぶん並ぶうえ、リンク先の area ページは 1 件あたり約 57KB。
                  nonce CSP を外して CDN キャッシュは効くようになったが、47 件を
                  まとめて先読みする転送量は依然として割に合わないので切ったまま。 */}
```

- [ ] **Step 9: 残骸がゼロであることを確認する**

Run:

```bash
cd acro-finder && grep -rn 'x-nonce\|nonce={nonce}' app components lib 2>/dev/null
```

Expected: 出力なし

- [ ] **Step 10: 型・リント・テストを通す**

Run: `cd acro-finder && npx tsc --noEmit && npx eslint . && npx vitest run`
Expected: tsc 出力なし / eslint はエラー0（既存 warning 4件のみ）/ 144 tests PASS

- [ ] **Step 11: ビルドして静的化を実測する**

```bash
cd acro-finder && npm run build 2>&1 | tee /tmp/acro-after.txt | grep -E "^[┌├└│]|Route \(app\)" | head -30
```

Expected: `ƒ (Dynamic)` が減る。`generateStaticParams` が無いため `area/[pref]` と `facilities/[id]` は動的のまま（設計書の「到達しない」節どおり）。トップと `owners` は静的になるはず。

- [ ] **Step 12: CSP ヘッダーを確認する**

```bash
cd acro-finder && (npm start &) && sleep 6 && \
  curl -sI http://localhost:3000/ | grep -i "content-security-policy"; \
  pkill -f "next start"
```

Expected: `worker-src 'self' blob:` と `img-src 'self' data: blob: https:` を含み、`nonce-` を含まない1行。

- [ ] **Step 13: 実ブラウザで地図が動くことを確認する**

`worker-src` / `img-src` を書き損じると地図だけが黙って出なくなる。curl では検出できない。

```bash
cd acro-finder && npm run build && (npm start &) && sleep 6
```

Playwright MCP で確認する。

1. `browser_navigate` で `http://localhost:3000/` を開く
2. `browser_console_messages` を取り、`Content Security Policy` / `Refused to load` /
   `Refused to create a worker` を含むメッセージが **0件** であることを確認する
3. `browser_take_screenshot` を撮り、地図（InteractiveMap）のタイルが描画されている
   ことを目で確認する。タイルが白いままなら `img-src` の `https:`、地図が全く
   出ないなら `worker-src` の `blob:` が落ちている
4. `http://localhost:3000/facilities/f01` でも 2 と 3 を繰り返す

```bash
pkill -f "next start"
```

- [ ] **Step 14: コミットと PR**

```bash
cd acro-finder
git add -A
git commit -m "$(cat <<'EOF'
refactor!: nonce CSP をやめて静的ヘッダーに移す

Next 16 の proxy は Node ランタイム専用で、OpenNext (Cloudflare Workers) は Node
middleware に対応していない。nonce を middleware で発行している限り Workers へ
移行できないため、nonce を捨てて CSP を next.config の静的ヘッダーに移した。

BREAKING CHANGE: script-src が 'self' 'nonce-X' 'strict-dynamic' から
'self' 'unsafe-inline' になる。インラインXSS防御が下がり Observatory は落ちる。
移行のために受け入れた代償で、想定外の劣化ではない。

'strict-dynamic' も同時に外している。残すと 'self' も 'unsafe-inline' も無視されて
全スクリプトが停止するため。lib/csp.test.ts がこの再追加を止める。

facilities の prefetch 無効化はそのまま残した。CDN キャッシュは効くようになったが、
47 件を先読みする転送量は依然として割に合わない。コメントの根拠だけ現状に合わせた。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
git push -u origin chore/drop-nonce-csp
gh pr create --title "refactor!: nonce CSP をやめて静的ヘッダーに移す" --body "設計: https://github.com/tktk7l9/service-anatomy/blob/main/docs/superpowers/specs/2026-09-12-drop-nonce-csp-design.md

Cloudflare Workers 移行の障害を外すため nonce CSP を撤去した。ai-primer と同じ変更で、
このリポジトリ固有の差分は3点。

- \`img-src 'self' data: blob: https:\` と \`worker-src 'self' blob:\` を維持（地図タイル・
  施設写真・地図ライブラリの Worker）。テストで固定した
- \`next.config.js\` を \`next.config.ts\` に変換（CommonJS からは TS モジュールを import
  できないため）
- \`Permissions-Policy\` の \`geolocation=(self)\` はそのまま（現地の施設検索で使う）

\`generateStaticParams\` が無いため \`area/[pref]\` と \`facilities/[id]\` は動的のまま。
CDN キャッシュは効くようになったので実害は無いが、完全な静的化は次の一手。

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR"
```

---

### Task 5: service-anatomy — CSP モジュール（og-image-hosts 対応）

**Files:**
- Create: `service-anatomy/src/lib/csp.ts`
- Create: `service-anatomy/src/lib/csp.test.ts`
- Modify: `service-anatomy/vitest.config.ts`（coverage の `include` に `src/lib/**/*.ts` を追加）

**Interfaces:**
- Consumes: なし
- Produces: `contentSecurityPolicy(options?: { dev?: boolean; extraImgSrc?: readonly string[] }): string`

このリポジトリだけ `img-src` が動的で、記事末尾の公式リンクカード（OGP画像の直接表示）用に `content/og-image-hosts.json` のオリジン一覧を許可している。csp.ts を純関数に保つため JSON は読み込まず、引数で受け取る。`next.config.ts` 側が `readFileSync` で読む（Next の設定ローダーが JSON import を解決できるかに依存しないため）。

- [ ] **Step 1: ブランチを作る**

設計書のブランチ（`chore/drop-nonce-csp`）が既にこのリポジトリにあるので、それを続けて使う。

```bash
cd service-anatomy
git checkout chore/drop-nonce-csp
git log --oneline -1   # docs: nonce CSP 撤去の設計書を追加する が出ること
```

この計画書自体がまだ未コミットなので、先にコミットしておく。

```bash
cd service-anatomy
git add docs/superpowers/plans/2026-09-12-drop-nonce-csp.md
git commit -m "$(cat <<'EOF'
docs: nonce CSP 撤去の実装計画を追加する

3リポジトリ分（ai-primer → acro-finder → service-anatomy）のタスク分解。
設計書と同じ理由でここに置き、他2本の PR からリンクする。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
```

- [ ] **Step 2: 失敗するテストを書く**

Create `service-anatomy/src/lib/csp.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { contentSecurityPolicy } from "./csp";

describe("contentSecurityPolicy", () => {
  const prod = contentSecurityPolicy();

  it("nonce を含まない（middleware を廃止したので発行元が無い）", () => {
    expect(prod).not.toContain("nonce-");
  });

  it("'strict-dynamic' を含まない", () => {
    // CSP Level 3 では 'strict-dynamic' があると allowlist と 'self' / 'unsafe-inline' が
    // 無視される。nonce もハッシュも無いこの構成で足すと信頼の起点が消え、
    // ページ上の全スクリプトが止まる。足すなら nonce かハッシュを同時に用意すること。
    expect(prod).not.toContain("strict-dynamic");
  });

  it("インラインを許すことを script-src に明示している", () => {
    expect(prod).toContain("script-src 'self' 'unsafe-inline'");
  });

  it("本番では 'unsafe-eval' を出さない", () => {
    expect(prod).not.toContain("unsafe-eval");
  });

  it("dev では Next のオーバーレイ用に 'unsafe-eval' を足す", () => {
    expect(contentSecurityPolicy({ dev: true })).toContain("'unsafe-eval'");
  });

  it("既定では img-src は self と data: だけ", () => {
    expect(prod).toContain("img-src 'self' data:;");
  });

  it("extraImgSrc で公式リンクカードの OGP ホストを足せる", () => {
    const csp = contentSecurityPolicy({
      extraImgSrc: ["https://cdn.example.com", "https://img.example.org"],
    });
    expect(csp).toContain("img-src 'self' data: https://cdn.example.com https://img.example.org;");
  });

  it("extraImgSrc が空配列でも img-src の形が壊れない", () => {
    expect(contentSecurityPolicy({ extraImgSrc: [] })).toContain("img-src 'self' data:;");
  });

  it("締めるべきディレクティブが揃っている", () => {
    for (const directive of [
      "default-src 'self'",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self'",
      "connect-src 'self'",
      "manifest-src 'self'",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "object-src 'none'",
      "upgrade-insecure-requests",
    ]) {
      expect(prod).toContain(directive);
    }
  });

  it("ディレクティブは ; 区切りで、末尾に余分な ; を付けない", () => {
    expect(prod.endsWith(";")).toBe(false);
    expect(prod).not.toContain(";;");
  });
});
```

- [ ] **Step 3: テストが落ちることを確認する**

Run: `cd service-anatomy && npx vitest run src/lib/csp.test.ts`
Expected: FAIL — `Failed to resolve import "./csp"`

- [ ] **Step 4: 最小の実装を書く**

Create `service-anatomy/src/lib/csp.ts`:

```ts
// Content-Security-Policy の正本。next.config.ts の headers() がこれを配る。
//
// 以前は src/proxy.ts が per-request で nonce 付きの CSP を発行していたが、Next 16 の
// proxy は Node ランタイム専用で、OpenNext (Cloudflare Workers) は Node middleware に
// 対応していないため移行できなかった。nonce をやめて静的ヘッダーに移した。
//
// script-src に 'unsafe-inline' が要るのは Next の bootstrap（self.__next_f.push）が
// インラインだから。ld+json はデータブロックで実行されないため script-src の対象外。
//
// extraImgSrc は記事末尾の公式リンクカード（OGP画像の直接表示）用のオリジン一覧。
// ここでは JSON を読まず引数で受け取り、この関数を I/O のない純関数に保つ。
// 一覧の生成は scripts/fetch-og-cards.mjs、読み込みは next.config.ts が行う。
export function contentSecurityPolicy({
  dev = false,
  extraImgSrc = [],
}: { dev?: boolean; extraImgSrc?: readonly string[] } = {}): string {
  return [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${dev ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    ["img-src 'self' data:", ...extraImgSrc].join(" "),
    "connect-src 'self'",
    "manifest-src 'self'",
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "object-src 'none'",
    "upgrade-insecure-requests",
  ].join("; ");
}
```

- [ ] **Step 5: テストが通ることを確認する**

Run: `cd service-anatomy && npx vitest run src/lib/csp.test.ts`
Expected: PASS (10 tests)

- [ ] **Step 6: 新モジュールが coverage の盲点にならないようにする**

`service-anatomy/vitest.config.ts` の coverage `include` を変更する。閾値は追加しない。

```ts
      include: ["src/engine/**/*.ts", "src/i18n/**/*.ts", "src/lib/**/*.ts"],
```

- [ ] **Step 7: スイート全体が通ることを確認する**

Run: `cd service-anatomy && npx vitest run`
Expected: PASS — 945 + 10 = 955 tests

- [ ] **Step 8: コミット**

```bash
cd service-anatomy
git add src/lib/csp.ts src/lib/csp.test.ts vitest.config.ts
git commit -m "$(cat <<'EOF'
feat: CSP を静的ヘッダーとして組む純関数を追加する

proxy.ts の per-request nonce CSP を置き換えるための土台。

img-src の OGP ホスト一覧は JSON を読まず extraImgSrc 引数で受け取り、この関数を
I/O のない純関数に保った。JSON の読み込みは next.config.ts 側で行う（Next の設定
ローダーが JSON import を解決できるかに依存しないよう readFileSync を使う）。

テストの主眼は 'strict-dynamic' の再追加に対する回帰ガード。CSP Level 3 では
'strict-dynamic' があると 'self' と 'unsafe-inline' が無視されるため、nonce も
ハッシュも無いこの構成で足すとページ上の全スクリプトが止まる。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
```

---

### Task 6: service-anatomy — nonce の撤去と静的化

**Files:**
- Modify: `service-anatomy/next.config.ts`
- Delete: `service-anatomy/src/proxy.ts`
- Modify: `service-anatomy/src/app/layout.tsx:24-25`
- Modify: `service-anatomy/src/app/[locale]/articles/[slug]/page.tsx:25-26,74`
- Modify: `service-anatomy/src/app/[locale]/page.tsx:37`
- Modify: `service-anatomy/src/app/[locale]/category/[category]/page.tsx:50`
- Modify: `service-anatomy/src/app/[locale]/compare/page.tsx:40`
- Modify: `service-anatomy/src/app/[locale]/compare/[slug]/page.tsx:67`
- Modify: `service-anatomy/src/app/[locale]/tech/page.tsx:40`
- Modify: `service-anatomy/src/app/[locale]/tech/[tech]/page.tsx:48`
- Modify: `service-anatomy/src/app/[locale]/tag/[tag]/page.tsx:48`
- Modify: `service-anatomy/src/components/json-ld.tsx`
- Modify: `service-anatomy/AGENTS.md:14-16,73`

**Interfaces:**
- Consumes: `contentSecurityPolicy({ dev, extraImgSrc })` from `src/lib/csp.ts` (Task 5)
- Produces: `JsonLd({ data }: { data: unknown })` — `nonce` prop は無くなる

- [ ] **Step 1: ビルド出力の現状を記録する**

```bash
cd service-anatomy && npm run build 2>&1 | tee /tmp/sa-before.txt | grep -E "^[┌├└│]|Route \(app\)" | head -40
```

- [ ] **Step 2: next.config.ts に CSP を差す**

`service-anatomy/next.config.ts` の先頭から `securityHeaders` までを次に置き換える。`nextConfig` 本体（`outputFileTracingIncludes` を含む）は変更しない。

```ts
import { readFileSync } from "node:fs";
import type { NextConfig } from "next";
import { contentSecurityPolicy } from "./src/lib/csp";

// 記事末尾の公式リンクカード（OGP画像の直接表示）で許可するオリジン。
// 一覧は scripts/fetch-og-cards.mjs が生成する。以前は src/proxy.ts が import して
// いたが、middleware を廃止したのでここで読む。Next の設定ローダーが JSON import を
// 解決できるかに依存しないよう readFileSync を使う。
const ogImageHosts: string[] = JSON.parse(
  readFileSync(new URL("./content/og-image-hosts.json", import.meta.url), "utf8"),
);

// CSP は src/lib/csp.ts が正本。
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: contentSecurityPolicy({
      dev: process.env.NODE_ENV !== "production",
      extraImgSrc: ogImageHosts,
    }),
  },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "geolocation=(), camera=(), microphone=(), payment=(), usb=(), interest-cohort=()",
  },
];
```

- [ ] **Step 3: og-image-hosts.json の形を確認する**

Run: `cd service-anatomy && head -c 200 content/og-image-hosts.json`
Expected: 文字列の配列（`["https://...", ...]`）。オブジェクトだった場合は Step 2 の `JSON.parse` の後に取り出し方を合わせる必要がある。

- [ ] **Step 4: proxy.ts を削除する**

```bash
cd service-anatomy && git rm src/proxy.ts
```

- [ ] **Step 5: layout.tsx から force-dynamic を外す**

`service-anatomy/src/app/layout.tsx` の次の2行を削除する。

```ts
// Per-request rendering so the CSP nonce (set in proxy.ts) is applied.
export const dynamic = "force-dynamic";
```

- [ ] **Step 6: articles/[slug]/page.tsx から force-dynamic を外す**

`service-anatomy/src/app/[locale]/articles/[slug]/page.tsx` の次の2行を削除する。

```ts
// per-request nonce（proxy.ts）を壊さないよう、ビルド時プリレンダリングを禁止する。
export const dynamic = "force-dynamic";
```

`rss.xml/route.ts` と `api/anatomy.json/route.ts` の `force-dynamic` は **残す**（nonce 由来ではない）。

- [ ] **Step 7: 8ページから nonce を外す**

`nonce={nonce}` は計17箇所（1ファイルに複数あるものが多い）。

**削除する行（各ファイルに1つずつ）:**

```ts
import { headers } from "next/headers";
```

```ts
  const nonce = (await headers()).get("x-nonce") ?? undefined;
```

8ファイルすべてで `headers` の出現はこの2行だけ（実測済み）なので、両方消してよい。

**書き換える prop:**

```tsx
<JsonLd data={webSite} nonce={nonce} />
```

を

```tsx
<JsonLd data={webSite} />
```

に。`data` に渡す変数名はページごと・1ページ内でも複数あるので、`nonce={nonce}` の部分だけを落とす。対象ファイル:

- `src/app/[locale]/page.tsx`（nonce 行 37）
- `src/app/[locale]/category/[category]/page.tsx`（50）
- `src/app/[locale]/articles/[slug]/page.tsx`（74）
- `src/app/[locale]/compare/page.tsx`（40）
- `src/app/[locale]/compare/[slug]/page.tsx`（67）
- `src/app/[locale]/tech/page.tsx`（40）
- `src/app/[locale]/tech/[tech]/page.tsx`（48）
- `src/app/[locale]/tag/[tag]/page.tsx`（48）

- [ ] **Step 8: json-ld.tsx から nonce prop を落とす**

`service-anatomy/src/components/json-ld.tsx` を次の内容にする。

```tsx
// Renders a schema.org payload as a <script type="application/ld+json">.
// ld+json はデータブロックで実行されないため CSP script-src の対象外で、nonce は要らない。
// `<` is escaped so embedded strings can never break out of the script element.
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
```

- [ ] **Step 9: robots.ts のコメントを現状に合わせる**

`service-anatomy/src/app/robots.ts` のクローラー抑制ルール本体は変えない。根拠として書かれている「nonce CSP により全ルートが force-dynamic で CDN キャッシュに乗らないため」の文を、現状に合わせて書き換える。

```
 *  nonce CSP をやめて CDN キャッシュに乗るようになったが、学習データ収集・AI要約目的の
 *  クローラーは記事本文を丸ごと持っていくため転送量の観点では依然として抑制する。
 *  キャッシュ可否とは別の判断として残している。
```

- [ ] **Step 10: 残骸がゼロであることを確認する**

Run:

```bash
cd service-anatomy && grep -rn 'x-nonce\|nonce={nonce}' src 2>/dev/null
```

Expected: 出力なし

- [ ] **Step 11: 型・リント・テストを通す**

Run: `cd service-anatomy && npx tsc --noEmit && npx eslint . && npx vitest run`
Expected: tsc 出力なし / eslint エラー0 / 955 tests PASS

- [ ] **Step 12: ビルドして静的化を実測する**

```bash
cd service-anatomy && npm run build 2>&1 | tee /tmp/sa-after.txt | grep -E "^[┌├└│]|Route \(app\)" | head -40
```

Expected: `ƒ (Dynamic)` が減る。`generateStaticParams` が `[locale]/layout.tsx` にしか無いため、記事・タグ・tech の各ルートは動的のまま（設計書の「到達しない」節どおり）。`articles/[slug]` から force-dynamic を外しても、`generateStaticParams` が無いので
フルルートの CDN キャッシュには乗らない。外した意味は nonce 依存が消えたことにある。

記事 Markdown を実行時に fs で読む構成（`outputFileTracingIncludes`）なので、ビルドが記事の読み込みで落ちないことも合わせて確認する。

- [ ] **Step 13: CSP ヘッダーに OGP ホストが載ることを確認する**

```bash
cd service-anatomy && (npm start &) && sleep 8 && \
  curl -sI http://localhost:3000/ja | grep -i "content-security-policy" | tr ';' '\n' | grep -i "img-src"; \
  pkill -f "next start"
```

Expected: `img-src 'self' data: https://...` として `content/og-image-hosts.json` のオリジンが並ぶ。`'self' data:` だけなら Step 2 の `extraImgSrc` が渡っていない。

- [ ] **Step 14: 実ブラウザで記事の公式リンクカードが表示されることを確認する**

`extraImgSrc` を渡し忘れると OGP 画像だけが黙ってブロックされる。curl では検出できない。

```bash
cd service-anatomy && npm run build && (npm start &) && sleep 8
```

Playwright MCP で確認する。記事の slug は `ls content/articles | head -1` で取る。

1. `browser_navigate` で `http://localhost:3000/ja` を開く
2. `browser_console_messages` を取り、`Content Security Policy` / `Refused to load` を
   含むメッセージが **0件** であることを確認する
3. `browser_navigate` で `http://localhost:3000/ja/articles/<slug>` を開く
4. `browser_console_messages` で `Refused to load the image` が 0件であることを確認する。
   出ていれば Step 2 の `extraImgSrc` が渡っていない
5. `browser_take_screenshot` を撮り、記事末尾の公式リンクカードに OGP 画像が
   出ていることを目で確認する

```bash
pkill -f "next start"
```

- [ ] **Step 14b: AGENTS.md をコードの実態に合わせる**

`service-anatomy/AGENTS.md` は nonce 方式をアーキテクチャの背骨として明記しており、この
変更と正面から矛盾する。直さないと次に触る人間/エージェントがこの変更をバグとして戻す。

14-16行目を次に置き換える。

変更前:

```
- **CSP は proxy.ts の per-request nonce 方式**（ai-primer 実証済み・Observatory A+ 前提）。
  ページは `force-dynamic`。`output: 'export'` や静的化で nonce を壊さないこと。
  インライン `<script>`（JSON-LD 等）は必ず `(await headers()).get("x-nonce")` の nonce を付ける。
```

変更後:

```
- **CSP は next.config.ts の静的ヘッダー方式**（正本は `src/lib/csp.ts`）。
  `script-src` は `'self' 'unsafe-inline'`。**`'strict-dynamic'` を足してはいけない** —
  CSP Level 3 では strict-dynamic があると `'self'` も `'unsafe-inline'` も無視され、
  nonce もハッシュも無い本構成では全スクリプトが停止する（`src/lib/csp.test.ts` が止める）。
  2026-09-12 に per-request nonce 方式から移行した。理由は Next 16 の proxy が Node
  ランタイム専用で、OpenNext (Cloudflare Workers) が Node middleware 非対応のため
  Workers へ移行できなかったこと。代償としてインラインXSS防御と Observatory A+ を
  失っている（意図した判断）。
  記事末尾の公式リンクカード用の `img-src` は `content/og-image-hosts.json` を
  `next.config.ts` が読み、`contentSecurityPolicy({ extraImgSrc })` に渡す。
  ページは静的でよい。`headers()` を呼ぶと動的レンダリングが強制されるので、
  キャッシュを効かせたいページでは呼ばないこと。
  インライン `<script>` に nonce は不要（ld+json はデータブロックで script-src の対象外）。
```

73行目の公開ゲートも直す。

変更前:

```
- private 開始。公開は publish-check 経由のみ（gitleaks 0 / npm audit 全0 / PII なし / Observatory A+）。
```

変更後:

```
- private 開始。公開は publish-check 経由のみ（gitleaks 0 / npm audit 全0 / PII なし）。
  Observatory は 2026-09-12 の CSP 移行で A+ を外れる見込み。`'unsafe-inline'` による減点は
  受け入れた代償なので、スコアの低下自体は公開のブロッカーにしない（実測値は記録する）。
```

- [ ] **Step 15: コミットと PR**

```bash
cd service-anatomy
git add -A
git commit -m "$(cat <<'EOF'
refactor!: nonce CSP をやめて静的ヘッダーに移す

Next 16 の proxy は Node ランタイム専用で、OpenNext (Cloudflare Workers) は Node
middleware に対応していない。nonce を middleware で発行している限り Workers へ
移行できないため、nonce を捨てて CSP を next.config の静的ヘッダーに移した。

BREAKING CHANGE: script-src が 'self' 'nonce-X' 'strict-dynamic' から
'self' 'unsafe-inline' になる。インラインXSS防御が下がり、Observatory の
A+ (115) は落ちる。移行のために受け入れた代償で、想定外の劣化ではない。

'strict-dynamic' も同時に外している。残すと 'self' も 'unsafe-inline' も無視されて
全スクリプトが停止するため。src/lib/csp.test.ts がこの再追加を止める。

nonce CSP は全ルートを force-dynamic にし、CDN キャッシュを一切効かなくしていた。
これが Vercel の転送量・関数実行を同時に食っていた根本原因なので、撤去で
キャッシュに乗るようになった。ただし generateStaticParams が [locale]/layout.tsx に
しか無いため、記事・タグ・tech は動的のまま（完全な静的化は次の一手）。

robots.ts のクローラー抑制は残した。キャッシュに乗るようになっても、学習データ
収集目的のクローラーが記事本文を丸ごと持っていく転送量は別の判断なので、
コメントの根拠だけ現状に合わせた。

Co-Authored-By: Claude Opus 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR
EOF
)"
git push -u origin chore/drop-nonce-csp
gh pr create --title "refactor!: nonce CSP をやめて静的ヘッダーに移す" --body "設計と実装計画を含む。ai-primer (#30 相当) / acro-finder と同じ変更で、3本の最後。

- 設計: \`docs/superpowers/specs/2026-09-12-drop-nonce-csp-design.md\`
- 計画: \`docs/superpowers/plans/2026-09-12-drop-nonce-csp.md\`

## このリポジトリ固有の差分

- \`img-src\` が動的。記事末尾の公式リンクカード用に \`content/og-image-hosts.json\` の
  オリジン一覧を許可する。\`src/lib/csp.ts\` は純関数に保ち、JSON の読み込みは
  \`next.config.ts\` が \`readFileSync\` で行う
- nonce 受け渡しが8ページ・\`nonce={nonce}\` が17箇所で3本のうち最大
- \`articles/[slug]/page.tsx\` にもページ単位の \`force-dynamic\` があり、これも外した
- \`rss.xml/route.ts\` と \`api/anatomy.json/route.ts\` の \`force-dynamic\` は残した
  （nonce 由来ではなく、後者はエッジ1時間キャッシュ目的）

## 効果と限界

nonce CSP が全ルートを force-dynamic にして CDN キャッシュを完全に無効化していた。
これが Vercel 逼迫の根本原因だったので、撤去でキャッシュに乗る。ただし
\`generateStaticParams\` が \`[locale]/layout.tsx\` にしか無いため記事・タグ・tech は
動的のままで、完全な静的化は別PR。

🤖 Generated with [Claude Code](https://claude.com/claude-code)

https://claude.ai/code/session_011gkgtBMD6G1QRS3xuzWBkR"
```

---

## 全タスク完了後の確認

- [ ] 3リポジトリすべてで `grep -rn 'x-nonce\|nonce={nonce}\|strict-dynamic'` が csp.test.ts の行以外にヒットしないこと
- [ ] 3リポジトリすべてで `proxy.ts` が存在しないこと（`ls */proxy.ts */src/proxy.ts` が空）
- [ ] テスト数: ai-primer 414 / acro-finder 144 / service-anatomy 955
- [ ] 3本の PR が open で、CI の `build-test` が通っていること（Vercel チェックの `Account is blocked.` は既知で判定から除く）
- [ ] Observatory の再計測は Cloudflare 移行後に行う（Vercel が配信停止中のため今は測れない）。低下は想定内
