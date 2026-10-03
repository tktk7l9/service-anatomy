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
    compare: "比較解剖",
    about: "このサイトについて",
    switchLocale: "English",
    rss: "RSS",
    menu: "メニュー",
    skipToContent: "本文へ移動",
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
    affiliateAria: "{service} の提携リンク（PR）",
    affiliatePr: "PR",
    affiliateNotice: "この記事には広告（アフィリエイトリンク）が含まれます。",
    affiliateNoticeLink: "広告・アフィリエイトについて",
    affiliateCta: "{service} を無料で試す",
    affiliateNewTab: "新しいタブで開きます",
    affiliateNote:
      "PR：運営者は {program} に参加しており、このリンク経由で申し込むと紹介料を受け取ることがあります。紹介料の有無は解剖スコアや記事の内容に影響しません。",
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
    // Name of the scrollable region around each table in the body ({n} = table number).
    tableRegion: "表 {n}",
    accessedAt: "閲覧日",
    related: "関連する解剖",
    comparisons: "この記事を含む比較解剖",
    comparedWith: "比較相手",
    revisionsTitle: "定点観測",
    revisionsNote: "過去の解剖スコアからの推移。noteに変更点の根拠を記す時系列データ。",
    revisionsCurrent: "現在",
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
  compare: {
    indexTitle: "比較解剖",
    indexLead:
      "2つのサービスを、同じ4軸のスコアと技術構成で並べて読む対決フォーマットです。各記事の構造化データ（scorecard・techStack）から機械的に算出するため、比較のたびに新たな手入力は最小限です。",
    countSuffix: "本の比較解剖",
    techOverlapTitle: "技術構成の重なりと違い",
    techOverlapNote: "各記事のtechStack frontmatterから機械的に算出した比較です。確度は各記事の技術構成表を参照してください。",
    techShared: "共通",
    techOnly: "限定",
    readArticle: "解剖記事を読む",
  },
  about: {
    title: "このサイトについて",
    lead: "Service Anatomy は、国内外の人気サービスを「解剖」する非公式の分析マガジンです。",
    paragraphs: [
      "1つの記事で1つのサービスを取り上げ、①サービス解説（何が良いのか・なぜ使われるのか）②UX分析 ③技術構成の推定 ④ビジネスモデル、の4つの切り口から読み解きます。",
      "運営は個人であり、掲載しているサービスの運営各社とは、一部サービスのアフィリエイト（紹介）プログラムへの参加を除き、資本・業務上の関係はありません。記事は各社の許諾を得たものではなく、公開情報のみに基づいて執筆しています。紹介料の有無は、記事の内容や解剖スコアに影響しません。",
    ],
    methodologyTitle: "分析の方法論",
    methodology: [
      "出典主義 — 記事中の事実には出典（公式サイト・プレスリリース・採用情報・技術ブログ・登壇資料など）を付けます。",
      "事実と推測の分離 — 観測できた事実は「事実」、推測は「推測」のラベルで明示し、混ぜません。",
      "技術構成の確度 — 確認済み（一次情報あり）／有力（強い状況証拠）／推測（合理的な仮説）の3段階で示します。",
      "鮮度の明示 — 各記事に「最終確認」日を記載します。サービスの仕様・価格は変化するため、最新情報は必ず公式サイトで確認してください。",
    ],
    dataTitle: "オープンデータ",
    dataBody:
      "全記事の構造化データ（解剖スコア・技術構成・出典）を JSON で公開しています。出典として本サイトへのリンクを明記のうえ、引用・集計にご利用ください。",
    disclosureLink: "広告・アフィリエイトの方針を読む",
    disclaimerTitle: "免責事項",
    disclaimerBody:
      "本サイトの内容は執筆時点の公開情報に基づく分析・意見であり、正確性・完全性を保証するものではありません。スコアは編集部の主観的評価です。掲載名称・商標は各社に帰属します。記事内で「PR」と表示したリンクはアフィリエイトリンクです。",
  },
  disclosure: {
    title: "広告・アフィリエイトについて",
    lead: "Service Anatomy は、一部の記事に広告（アフィリエイトリンク）を掲載しています。どの記事が広告を含むのか、どう表示しているのか、紹介料が記事にどう影響しないのかをまとめます。",
    whatTitle: "アフィリエイトリンクとは",
    whatBody: [
      "アフィリエイトリンクは、サービスの提供会社（広告主）が運営する提携（紹介）プログラムのリンクです。読者の方がこのリンクを経由してサービスに申し込むと、運営者が紹介料を受け取ることがあります。",
      "そのため本サイトは、アフィリエイトリンクを含む記事を「広告を含む記事」として扱い、読者の方が一目で分かるように表示します。",
    ],
    howTitle: "表示の方法",
    howItems: [
      "記事の冒頭（本文の前）に「PR」の表示と「この記事には広告（アフィリエイトリンク）が含まれます。」という一文を出します。",
      "記事末尾の提携リンク枠に「PR」と、参加している提携プログラムの名前、紹介料を受け取ることがある旨を出します。",
      "記事一覧のカードにも「PR」と表示します。",
      "2つのサービスを並べる比較解剖のページも、取り上げたサービスの記事に提携リンクがあれば広告を含む記事として扱います。冒頭に同じ表示を出し、本文のあとにサービス名を添えた提携リンク枠をサービスごとに出します。",
      "提携リンクには検索エンジン向けの広告の目印（rel=\"sponsored\"）を付けます。",
      "アフィリエイトリンクを含まない記事には、これらの表示を出しません。記事の「公式サイト」リンクと公式リンクカードは、提携リンクではありません。",
    ],
    independenceTitle: "記事の独立性",
    independenceItems: [
      "紹介料の有無は、解剖スコアや記事の内容に影響しません。",
      "記事は各社の許諾や事前確認を経ず、公開情報のみに基づいて執筆しています。",
      "アフィリエイトリンクのある記事も、ほかの記事と同じ方法論（出典主義・事実と推測の分離・技術構成の確度ラベル）で書きます。",
      "スコアは編集部の主観的評価です。",
      "現在、アフィリエイトリンク以外の広告（バナー広告や、企業から依頼・報酬を受けて書く記事）は掲載していません。",
    ],
    programsTitle: "利用する提携プログラム",
    programsBody: "参加する提携プログラムは、次のいずれかの形です。",
    programsItems: [
      "アフィリエイト・サービス・プロバイダ（ASP）や広告ネットワークを通じて参加するプログラム",
      "サービスの提供会社が自社で運営する紹介（アフィリエイト・リファラル）プログラム",
    ],
    programsNote: "記事ごとにどのプログラムに参加しているかは、その記事末尾の提携リンク枠に名前を明記します。",
    cookiesTitle: "Cookie と計測用画像について",
    cookiesBody:
      "アフィリエイトリンクをクリックすると、成果を計測するために、リンク先の提携プログラム（またはその計測サービス）のサイトで Cookie 等が使われることがあります。その取り扱いは各社のプライバシーポリシーに従います。本サイト自身は、アフィリエイトリンクのために Cookie を設定しません。",
    pixelBody:
      "アフィリエイト・サービス・プロバイダ（ASP）が配布する広告コードは、改変せずそのまま使います。このコードには、広告が表示された回数を数えるための 1×1 ピクセルの計測用画像が含まれることがあります。この画像は、アフィリエイトリンクを含む記事でだけ（比較解剖のページを含みます）、記事末尾の提携リンク枠が画面に近づいたときに ASP のサーバーから読み込まれます。そのとき、ASP には IP アドレス、ブラウザの情報、閲覧中の記事の URL が送られ、ASP が Cookie 等を使うことがあります。アフィリエイトリンクを含まない記事では読み込みません。",
    contactTitle: "お問い合わせ",
    contactBody: "広告の表示についてのご指摘・お問い合わせは、GitHub の Issue で受け付けています。",
    contactLink: "GitHub Issues",
    updatedLabel: "最終更新",
  },
  footer: {
    disclaimer: "非公式の分析メディアです。内容は公開情報に基づく執筆時点の分析・推測を含みます。",
    trademark: "掲載名称・商標は各社に帰属します。",
    github: "GitHub",
    disclosure: "広告・アフィリエイトについて",
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
