import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@/components/analytics";
import "./globals.css";

// Latin-only display sans for headings (one file, latin subset only).
// The original Mincho headings (Newsreader + system Mincho) were dropped after readability
// feedback; JP headings now use a bold weight of the system kaku-gothic (Hiragino Kaku Gothic / Noto Sans JP).
// Japanese is still not served as a web font (the unicode-range-split @font-face set alone was
// ~190KB of render-blocking CSS and pushed LH perf below 80, measured).
// display: "optional" — with swap, LCP (h1) is dragged along by the repaint when the font arrives,
// and LCP balloons under throttling (measured: it made the CI Lighthouse guard unstable).
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
      <head>
        {/* Site ownership verification for Impact (affiliate network for Shopify etc.). Added 2026-09-23.
            The tag Impact issued uses a value attribute instead of content, so it is written as is.
            content is added too so that checkers reading meta the usual way also pass.
            It is public information identifying the owner, not a secret. */}
        <meta
          name="impact-site-verification"
          // @ts-expect-error -- value is not a standard meta attribute, but Impact's checker reads it
          value="522ef2d5-88ce-4612-949d-235b3c6776c3" /* gitleaks:allow */
          content="522ef2d5-88ce-4612-949d-235b3c6776c3" /* gitleaks:allow */
        />
      </head>
      <body>
        {children}
        {/* Cloudflare Web Analytics, loaded after hydration (components/analytics.tsx). Replaces
            Vercel Analytics, which was removed in the Workers migration on 2026-09-14. */}
        <Analytics />
      </body>
    </html>
  );
}
