import Link from "next/link";

// ルート直下の 404（ロケール解決前でも出るため2言語併記）。
export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>404 — ページが見つかりません / Page not found</h1>
      <p>
        <Link href="/ja">記事一覧へ戻る</Link> · <Link href="/en">Back to articles</Link>
      </p>
    </div>
  );
}
