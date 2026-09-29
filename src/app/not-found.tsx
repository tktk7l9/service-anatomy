import Link from "next/link";

// Root-level 404 (bilingual because it can render before the locale is resolved).
export default function NotFound() {
  return (
    <main className="container not-found">
      <h1>404 — ページが見つかりません / Page not found</h1>
      <p>
        <Link href="/ja">記事一覧へ戻る</Link> · <Link href="/en">Back to articles</Link>
      </p>
    </main>
  );
}
