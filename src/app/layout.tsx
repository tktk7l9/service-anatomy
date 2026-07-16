import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

// 見出し・プルクオート専用のエディトリアルセリフ（欧文のみ・約2KB）。
// 日本語セリフはシステム明朝（ヒラギノ明朝/游明朝）にフォールバックする —
// Webフォント化すると unicode-range 分割の @font-face 群だけで CSS が
// 約190KB のレンダーブロッキングになり Lighthouse perf が 80 を割った（実測）。
// 本文はシステムサンズ（日本語本文をウェブフォント化しない）。
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
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
    <html lang="ja" className={newsreader.variable}>
      <body>
        {children}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
