import { Analytics } from "@vercel/analytics/next";
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

// Per-request rendering so the CSP nonce (set in proxy.ts) is applied.
export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={interTight.variable}>
      <body>
        {children}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
