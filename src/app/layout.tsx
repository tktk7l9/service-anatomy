import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Newsreader, Shippori_Mincho } from "next/font/google";
import "./globals.css";

// 見出し・プルクオート専用のエディトリアルセリフ。本文はシステムフォント
// （日本語本文をウェブフォント化しない = 転送量リスクの根本回避）。
// 日本語セリフは preload: false + unicode-range 分割（acro-finder 実証パターン）。
const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const shippori = Shippori_Mincho({
  weight: ["500", "700"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
  preload: false,
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
    <html lang="ja" className={`${newsreader.variable} ${shippori.variable}`}>
      <body>
        {children}
        {process.env.VERCEL && <Analytics />}
      </body>
    </html>
  );
}
