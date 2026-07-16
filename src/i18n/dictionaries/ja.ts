import type { CategoryId } from "@/engine/articles/taxonomy";

// UI クロームの文言のみ（記事本文は content/articles/ 側の ja.md / en.md に持つ）。
// この ja が辞書の形を定義し、en は Dictionary 型で同形を強制される。
const ja = {
  meta: {
    siteName: "Service Anatomy",
    title: "Service Anatomy — 人気サービスを解剖する",
    description:
      "国内外の人気サービスを1記事ずつ取り上げ、サービス解説・UX分析・技術構成・ビジネスモデルの4面から公開情報ベースで読み解く分析マガジン。",
  },
  nav: {
    home: "記事一覧",
    tech: "技術データベース",
    about: "このサイトについて",
    switchLocale: "English",
    rss: "RSS",
  },
  home: {
    tagline: "人気サービスを、解剖する。",
    lead: "国内外の気になるサービスを1本ずつ取り上げ、プロダクト・UX・技術構成・ビジネスモデルの4面から読み解く分析マガジン。",
    featured: "最新の解剖",
    archive: "アーカイブ",
    empty: "記事を準備中です。",
  },
  article: {
    toc: "目次",
    sources: "出典・参照",
    published: "公開",
    updated: "更新",
    lastVerified: "最終確認",
    visitService: "公式サイト",
    vendor: "運営",
    origin: "発祥",
    tagsLabel: "タグ",
    scoresTitle: "解剖スコア",
    scoresNote: "編集部による主観的評価（5点満点）",
    scoreAxes: {
      product: "プロダクト",
      ux: "UX",
      tech: "技術",
      business: "ビジネス",
    },
    techStackTitle: "技術構成",
    techStackNote: "公開情報からの推定を含みます。確度ラベルを参照してください。",
    techStackHeaders: {
      layer: "レイヤー",
      name: "技術",
      confidence: "確度",
      evidence: "根拠",
    },
    confidence: {
      confirmed: "確認済み",
      likely: "有力",
      speculative: "推測",
    },
    callouts: {
      fact: "事実",
      guess: "推測",
    },
    accessedAt: "閲覧日",
    disclaimer:
      "本記事は非公式の分析です。公開情報に基づく執筆時点の内容で、推測を含みます。名称・商標は各社に帰属します。",
  },
  listing: {
    categoryTitle: "カテゴリ",
    tagTitle: "タグ",
    techTitle: "技術",
    countSuffix: "本の記事",
  },
  tech: {
    indexTitle: "技術データベース",
    indexLead:
      "記事で確認・推定した技術構成を横断する索引です。技術を選ぶと、それを採用しているサービスの解剖記事が並びます。確度（確認済み/有力/推測）は各記事の技術構成表を参照してください。",
    servicesSuffix: "サービス",
  },
  about: {
    title: "このサイトについて",
    lead: "Service Anatomy は、国内外の人気サービスを「解剖」する非公式の分析マガジンです。",
    paragraphs: [
      "1つの記事で1つのサービスを取り上げ、①サービス解説（何が良いのか・なぜ使われるのか）②UX分析 ③技術構成の推定 ④ビジネスモデル、の4つの切り口から読み解きます。",
      "運営は個人であり、掲載しているサービスの運営各社とは一切関係がありません。記事は各社の許諾を得たものではなく、公開情報のみに基づいて執筆しています。",
    ],
    methodologyTitle: "分析の方法論",
    methodology: [
      "出典主義 — 記事中の事実には出典（公式サイト・プレスリリース・採用情報・技術ブログ・登壇資料など）を付けます。",
      "事実と推測の分離 — 観測できた事実は「事実」、推測は「推測」のラベルで明示し、混ぜません。",
      "技術構成の確度 — 確認済み（一次情報あり）／有力（強い状況証拠）／推測（合理的な仮説）の3段階で示します。",
      "鮮度の明示 — 各記事に「最終確認」日を記載します。サービスの仕様・価格は変化するため、最新情報は必ず公式サイトで確認してください。",
    ],
    disclaimerTitle: "免責事項",
    disclaimerBody:
      "本サイトの内容は執筆時点の公開情報に基づく分析・意見であり、正確性・完全性を保証するものではありません。スコアは編集部の主観的評価です。掲載名称・商標は各社に帰属します。",
  },
  footer: {
    disclaimer: "非公式の分析メディアです。内容は公開情報に基づく執筆時点の分析・推測を含みます。",
    trademark: "掲載名称・商標は各社に帰属します。",
    github: "GitHub",
  },
  notFound: {
    title: "ページが見つかりません",
    backHome: "記事一覧へ戻る",
  },
  categories: {
    game: "ゲーム",
    "ai-tool": "AIツール",
    "consumer-app": "コンシューマーアプリ",
    productivity: "生産性",
    saas: "SaaS",
    "dev-tool": "開発者ツール",
    media: "メディア",
  } satisfies Record<CategoryId, string>,
};

export type Dictionary = typeof ja;
export default ja;
