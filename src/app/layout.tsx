import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

// 見出し専用の欧文ディスプレイサンズ（1ファイル・latinのみ）。
// 当初の明朝系見出し（Newsreader+システム明朝）は可読性の指摘により廃止し、
// JP見出しはシステム角ゴ（ヒラギノ角ゴ/Noto Sans JP）の太ウェイトに変更。
// 日本語をWebフォント化しないのは変わらず（unicode-range分割の@font-face群だけで
// CSS約190KBのレンダーブロッキングになりLH perfが80を割った実測知見）。
// display: "optional" — swap だと LCP(h1) がフォント到着時の再描画に引きずられ、
// スロットリング下で LCP が膨らむ（CI の Lighthouse ガードが不安定化した実測知見）。
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "optional",
});

export const metadata: Metadata = {
  title: "Service Anatomy",
  description: "人気サービスを解剖する分析マガジン",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={interTight.variable}>
      <body>
        {children}
        {/* Cloudflare Web Analytics。2026-09-14 の Workers 移行で Vercel Analytics を
            外した代わり。token は HTML に埋まって全訪問者に見えるため秘密情報ではない。
            許可オリジンは src/lib/csp.ts 側にあり、csp.test.ts が両方を固定している。
            gitleaks は 32桁hex を generic-api-key として検出するので、検出行に
            gitleaks:allow を置いて抑止する（設定ファイルを置くと他の本物の秘密まで隠れる）。 */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts --
            type="module" のスクリプトは仕様上 defer されるため、パーサーを止めない */}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon={'{"token": "d8ea39bff560425e8855b06c0d488d51"}' /* gitleaks:allow */}
        />
      </body>
    </html>
  );
}
