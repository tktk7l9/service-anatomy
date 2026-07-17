---
service: "Notion"
title: "「すべてはブロック」という賭け — Notionを1億人に届けた一枚岩のデータモデル"
description: "ドキュメントもデータベースもWikiも、すべてを「ブロック」1種類で表すNotion。2,000億ブロックを支えるPostgresシャーディング、S3+Hudi+Kafkaのデータレイク、フリーミアムからFortune 500へ広がるビジネスまでを公式エンジニアリングブログから解剖する。"
lead: "ページも、箇条書きも、データベースの行も、Notionの中ではすべて同じ「ブロック」だ。プロダクトの柔軟性とエンジニアリングの複雑さを同時に生むこの設計判断が、どうやって1億ユーザー・2,000億ブロックまでスケールしたのか。公式エンジニアリングブログの一次情報で解剖する。"
category: productivity
tags: [note-taking, collaboration, block-editor, postgres, saas]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://www.notion.com/"
vendor: "Notion Labs"
origin: "US"
heroTheme: "notion"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.5 }
techStack:
  - layer: "データモデル"
    name: "Block model (全要素を単一のブロック木で表現)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、テキスト・画像・DB行まで全てをブロックとしてPostgresに格納すると明記"
    evidenceUrl: "https://www.notion.com/blog/sharding-postgres-at-notion"
  - layer: "データベース"
    name: "PostgreSQL (アプリケーションレベルシャーディング)"
    confidence: confirmed
    evidence: "公式ブログ2本（2021シャーディング・2023再シャーディング）。ワークスペースIDをキーに32→96物理インスタンスへ無停止拡張と明記"
    evidenceUrl: "https://www.notion.com/blog/the-great-re-shard"
  - layer: "変更データキャプチャ"
    name: "Kafka + Debezium CDC"
    confidence: confirmed
    evidence: "公式データレイク構築記事（2024-07）にPostgresからの増分取り込み経路として明記"
    evidenceUrl: "https://www.notion.com/blog/building-and-scaling-notions-data-lake"
  - layer: "データレイク"
    name: "Amazon S3 + Apache Hudi + Apache Spark"
    confidence: confirmed
    evidence: "公式データレイク構築記事（2024-07）に、更新の多いワークロード向けにHudiでupsert・Sparkで大規模変換と明記"
    evidenceUrl: "https://www.notion.com/blog/building-and-scaling-notions-data-lake"
  - layer: "分析ウェアハウス"
    name: "Snowflake"
    confidence: confirmed
    evidence: "公式データレイク構築記事に下流の分析・レポート用途として明記"
    evidenceUrl: "https://www.notion.com/blog/building-and-scaling-notions-data-lake"
  - layer: "公式サイト配信"
    name: "Next.js / Vercel / Cloudflare"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（x-powered-by: Next.js / x-vercel-id / cf-ray、2026-07-17）。マーケティングサイト（notion.com）についての観測で、アプリ本体の構成とは別"
sources:
  - label: "Notion公式ブログ: Herding elephants — Postgresシャーディングの教訓（2021）"
    url: "https://www.notion.com/blog/sharding-postgres-at-notion"
    accessedAt: "2026-07-17"
  - label: "Notion公式ブログ: The Great Re-shard — 無停止での96インスタンス化（2023）"
    url: "https://www.notion.com/blog/the-great-re-shard"
    accessedAt: "2026-07-17"
  - label: "Notion公式ブログ: データレイクの構築とスケール（2024-07）"
    url: "https://www.notion.com/blog/building-and-scaling-notions-data-lake"
    accessedAt: "2026-07-17"
  - label: "Notion公式ブログ: 100 million of you — ユーザー1億人到達（2024-09）"
    url: "https://www.notion.com/blog/100-million-of-you"
    accessedAt: "2026-07-17"
  - label: "Forbes: $10B Productivity Startup Notion（2024-04・評価額と企業動向）"
    url: "https://www.forbes.com/sites/kenrickcai/2024/04/11/10-billion-productivity-startup-notion-wants-to-build-your-ai-everything-app/"
    accessedAt: "2026-07-17"
---

ノート、Wiki、タスク管理、データベース。普通は別々のアプリになる機能を、Notionはたった1つの抽象——ブロック——で全部表現するという賭けに出た。この賭けはプロダクトの柔軟性として実を結んだ一方、エンジニアリングには「全ユーザーの全コンテンツが1種類の巨大なテーブルに集まる」という重い代償を課した。ローカルファイルに賭けた[Obsidian](/ja/articles/obsidian)とは正反対の道を選んだ、クラウド側の代表を解剖する。

## サービス解説

Notionは「オールインワン・ワークスペース」を掲げるコラボレーションツールだ。ページの中に文章もデータベースもカンバンも埋め込め、個人のメモから企業のナレッジベースまでを同じ道具でまかなう。

:::fact
公式ブログによれば、Notionは2024年にユーザー1億人に到達した。Forbes（2024年4月）は評価額100億ドルの企業として報じている。データ規模の一次情報もある——公式エンジニアリングブログは、Postgres上のブロック行が2021年初頭の200億から2024年には2,000億超・数百TB（圧縮後）に達したと明かしている。
:::

:::pull
プロダクトの言葉で「何でも作れる」は、エンジニアリングの言葉では「何が来るか予測できない」と同義だ。Notionのインフラ史はその翻訳作業の記録である。
:::

::scorecard

## UX分析

Notionの体験は「白紙の万能さ」と「白紙の途方もなさ」の間で揺れる。

- **ブロックが学習を転移させる**。箇条書きをトグルに、テキストをToDoに——1つの操作体系を覚えれば全機能に応用が効く。機能ごとにUIを覚え直す従来型スイートとの決定的な差だ。
- **データベースビューが「表計算の呪い」を解く**。同じデータをテーブル・カンバン・カレンダー・ギャラリーで見替えられる設計は、Excelを疑似DBとして使う文化への直接の回答になっている。
- **一方で自由度は導入コストとして跳ね返る**。白紙から始める負荷は高く、テンプレートギャラリーとコミュニティがその補助輪を担う。組織導入では「Notion職人」の存在が定着を左右しがちだ。
- **オフラインと動作速度は長年の弱点**。クラウド前提の設計は、ローカル完結の[Obsidian](/ja/articles/obsidian)のような即応性と可用性を構造的に持てない。ここはデータモデルの賭けの裏面だ。

## 技術構成

::techstack

:::fact
公式エンジニアリングブログによれば、Notionの全コンテンツはブロックとしてPostgreSQLに格納される。2021年にワークスペースIDをシャードキーとするアプリケーションレベルシャーディングで32物理インスタンス（480論理シャード）へ移行し、2023年には無停止で96物理インスタンスへ再シャーディングした。分析系は2024年に自前データレイクへ移行——PostgresからKafka+Debezium CDCで取り込み、S3上のApache Hudiでupsertを捌き、Sparkで変換、下流のSnowflakeで分析する。移行の動機として、480本のFivetranコネクタの運用負荷と「upsertの90%が更新」というNotion特有のワークロードが挙げられている。
:::

:::guess
マーケティングサイト（notion.com）はNext.js+Vercel+Cloudflareで配信されていることがヘッダーから観測できるが、アプリ本体（notion.so）はCloudflare越しで内部構成のヘッダーを出しておらず、公式ブログもアプリケーション層の言語やフレームワークには踏み込んでいない。ブロックモデルという単一の抽象は、AI機能にとっても好都合とみられる——構造が均質なため、検索・要約・エージェントの操作対象として扱いやすく、Notion AIの展開速度はこのデータモデルの配当と推測される。
:::

## ビジネスモデル

Notionの収益はフリーミアムSaaSの教科書に、ボトムアップ導入という現代的なひねりを加えたものだ。

:::fact
個人向けは無料プランがあり、有料はPlus・Business・Enterpriseの段階制。AI機能は追加課金として提供されてきた。公式発表の1億ユーザーという規模が、このファネルの入口になっている。
:::

:::guess
典型的な浸透経路は「個人が無料で使い始める→チームに持ち込む→情報資産が蓄積して離脱コストが上がる→全社契約」というボトムアップ型で、コンテンツが増えるほど乗り換えが難しくなるデータ重力そのものがロックイン装置として働く。AI機能の追加課金は、蓄積された社内ナレッジを推論の文脈として使えるNotionの位置取りを収益化する動きであり、「ワークスペース」から「社内知識のインターフェース」への転換を狙っているとみられる。
:::

すべてをブロックにするという2013年由来の設計判断は、プロダクトの柔軟性・インフラの難易度・AI時代の適合性という三つの顔で同じ会社を規定し続けている。Notionは、初期のデータモデル設計がその後の10年を決めるという意味で、ソフトウェア設計の教材そのものだ。
