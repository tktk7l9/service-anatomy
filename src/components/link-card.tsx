import type { OgCard } from "@/engine/articles/og-cards";

// 記事末尾の「公式リンクカード」。対象サービスの OGP メタデータ
// （content/og-cards.json・scripts/fetch-og-cards.mjs で取得）を、
// 公式サイトへのリンクプレビューとして表示する。SNS等のリンクカードと
// 同じ慣行に沿い、画像は各社サーバーから直接表示する（自サーバーに複製しない）。

export function LinkCard({
  card,
  service,
  label,
}: {
  card: OgCard;
  service: string;
  label: string;
}) {
  const host = new URL(card.url).hostname;
  return (
    <a className="link-card" href={card.url} target="_blank" rel="noopener noreferrer">
      <span className="link-card-body">
        <span className="link-card-label">{label}</span>
        <span className="link-card-title">{card.title ?? service}</span>
        {card.description && <span className="link-card-desc">{card.description}</span>}
        <span className="link-card-host">{host} ↗</span>
      </span>
      {card.image && (
        // eslint-disable-next-line @next/next/no-img-element -- 外部OGP画像（寸法不定・最適化プロキシ経由にしない）
        <img
          className="link-card-image"
          src={card.image}
          alt={card.title ?? service}
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      )}
    </a>
  );
}
