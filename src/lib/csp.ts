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
