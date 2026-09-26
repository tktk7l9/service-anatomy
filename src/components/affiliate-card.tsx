import type { AffiliateLink } from "@/engine/articles/schema";
import type { Dictionary } from "@/i18n/dictionaries";

// 記事末尾の提携（アフィリエイト）リンク枠。frontmatter に affiliate がある記事だけ出る。
// 景品表示法のステルスマーケティング規制（2023-10〜）に合わせ、リンクの近くに「PR」と
// 紹介料が入る旨を読者が容易に認識できる形で明示する。rel="sponsored" は検索エンジン向けの
// 同じ意味の宣言。公式リンクカード（LinkCard）の直下に置き、記事本文より前には出さない。
// 注記には frontmatter の program 名を埋め込む（Shopify の規約＝「Shopify Affiliate である」ことの開示）。

export function AffiliateCard({
  affiliate,
  service,
  dict,
}: {
  affiliate: AffiliateLink;
  service: string;
  dict: Dictionary;
}) {
  return (
    <aside className="affiliate-card" aria-label={dict.article.affiliateAria}>
      <span className="affiliate-card-pr">{dict.article.affiliatePr}</span>
      <a
        className="affiliate-card-cta"
        href={affiliate.url}
        target="_blank"
        rel="sponsored noopener noreferrer"
      >
        {dict.article.affiliateCta.replace("{service}", service)} ↗
      </a>
      <p className="affiliate-card-note">
        {dict.article.affiliateNote.replace("{program}", affiliate.program)}
      </p>
    </aside>
  );
}
