---
service: "Wix"
title: "ノーコードの老舗が、バイブコーディングを買った — Wixが創業半年のBase44に8,000万ドルを払った理由"
description: "ノーコードのサイトビルダーWix。3億超の登録ユーザーと年20億ドル規模の売上を持つ老舗が、創業半年のAIアプリ生成サービスBase44を買収し、AIサイトビルダーWix Harmonyを投入した。4,000超のマイクロサービスとマルチクラウドの基盤、制作会社や再販パートナー経由の収益までを、SEC提出書類と公式エンジニアリングブログから解剖する。"
lead: "2025年6月、ノーコードの代名詞だったWixは、1人で創業された半年目のスタートアップBase44を約8,000万ドルで買った。9ヶ月後、Base44のARRは1億ドルに達したと決算資料は書く。「ドラッグ&ドロップ」で20年近く戦ってきた会社が、「話しかけるだけで作る」時代にどう自分を組み替えているのかを解剖する。"
category: saas
tags: [website-builder, no-code, e-commerce, ai, kafka]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.wix.com/"
# Affiliate link placeholder: the owner must register with the Wix Affiliate Program
# (via Impact, https://www.wix.com/about/affiliates) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<wix-affiliate-tracking-link>"
#   program: "Wix Affiliate Program"
vendor: "Wix.com Ltd."
origin: "IL"
heroTheme: "wix"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.5 }
techStack:
  - layer: "サイト配信基盤"
    name: "Google Cloud / AWS / Fastly"
    confidence: confirmed
    evidence: "公式のサイト信頼性ページに、自社データセンターと合わせてAWS・Google Cloud・Fastlyでサイトをホスト・レンダリングし、1社が落ちても自動で迂回すると明記"
    evidenceUrl: "https://www.wix.com/site-reliability"
  - layer: "バックエンド言語"
    name: "Scala / TypeScript / Python"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-02）に、4,000超のマイクロサービスとサーバーレス関数がgRPCとKafkaで通信し、バックエンドはScala・TypeScript・Pythonで書かれていると明記"
    evidenceUrl: "https://www.wix.engineering/post/from-bottleneck-to-breakthrough-how-wix-cut-kafka-costs-by-30-with-a-push-based-consumer-proxy"
  - layer: "イベント基盤"
    name: "Apache Kafka (Confluent Cloud)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-02）に、2020年にKafka基盤全体をConfluentのクラウドへ移し、自社クライアントライブラリGreyhound経由で使っていると明記。プッシュ型のコンシューマープロキシでKafka費用を30%削減"
    evidenceUrl: "https://www.wix.engineering/post/from-bottleneck-to-breakthrough-how-wix-cut-kafka-costs-by-30-with-a-push-based-consumer-proxy"
  - layer: "データベース"
    name: "MySQL (AWS Graviton)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-03）に、約1,000台・160クラスタのMySQLをIntel系EC2からGravitonへ30日・無停止で移し、MySQLの計算コストを約15%下げたと明記"
    evidenceUrl: "https://www.wix.engineering/post/1-000-servers-160-clusters-30-days-zero-downtime-migrating-wix-s-mysql-fleet-to-graviton"
  - layer: "メディア処理"
    name: "Go / C (AVIF encoding)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-09）に、画像処理サービスはGo製で、AVIFエンコードはC製のlibaom/libavifを使い、1日60億件超のメディアリクエストを捌くと明記"
    evidenceUrl: "https://www.wix.engineering/post/architecting-for-6-billion-daily-requests-inside-wix-s-media-platform"
  - layer: "開発者向けバックエンド"
    name: "Node.js (Velo serverless backend)"
    confidence: confirmed
    evidence: "公式開発者ドキュメントに、Wixで作るサイトは設定不要のサーバーレスなバックエンドを持ち、Node.jsのサーバー側ランタイムで動くと明記"
    evidenceUrl: "https://dev.wix.com/docs/develop-websites/articles/coding-with-velo/backend-code/about-the-site-backend"
  - layer: "エッジキャッシュ"
    name: "Varnish"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（wix.com・2026-09-28）で server-timing に varnish;desc=hit_hit と dc;desc=fastly_g、server に Pepyaka が出る。公式ドキュメントでのVarnish採用の明言は見当たらない"
sources:
  - label: "SEC Form 6-K（Wix.com Ltd.・2025年第4四半期および通期決算・2026-03-04）"
    url: "https://www.sec.gov/Archives/edgar/data/1576789/000162828026014406/fourthquarterandfullyear20.htm"
    accessedAt: "2026-09-28"
  - label: "TechCrunch: 創業6ヶ月・1人所有のBase44がWixに8,000万ドルで売却（2025-06-18）"
    url: "https://techcrunch.com/2025/06/18/6-month-old-solo-owned-vibe-coder-base44-sells-to-wix-for-80m-cash/"
    accessedAt: "2026-09-28"
  - label: "Wix公式プレスルーム: Base44の買収（2025-06-18）"
    url: "https://www.wix.com/press-room/home/post/wix-further-expands-into-vibe-coding-with-acquisition-of-base44-a-hyper-growth-startup-that-simplif"
    accessedAt: "2026-09-28"
  - label: "Wix公式プレスルーム: Wix Harmonyの発表（2026-01-21）"
    url: "https://www.wix.com/press-room/home/post/wix-launches-wix-harmony-the-ai-website-builder-that-merges-human-and-artificial-intelligence-rein"
    accessedAt: "2026-09-28"
  - label: "Wix公式: Site Reliability（マルチクラウドとCDN）"
    url: "https://www.wix.com/site-reliability"
    accessedAt: "2026-09-28"
  - label: "Wix公式エンジニアリングブログ: Kafka費用を30%削減したプッシュ型コンシューマープロキシ（2025-02）"
    url: "https://www.wix.engineering/post/from-bottleneck-to-breakthrough-how-wix-cut-kafka-costs-by-30-with-a-push-based-consumer-proxy"
    accessedAt: "2026-09-28"
  - label: "Wix公式エンジニアリングブログ: MySQL 1,000台のGraviton移行（2026-03）"
    url: "https://www.wix.engineering/post/1-000-servers-160-clusters-30-days-zero-downtime-migrating-wix-s-mysql-fleet-to-graviton"
    accessedAt: "2026-09-28"
  - label: "Wix公式エンジニアリングブログ: 1日60億リクエストのメディア基盤（2026-09）"
    url: "https://www.wix.engineering/post/architecting-for-6-billion-daily-requests-inside-wix-s-media-platform"
    accessedAt: "2026-09-28"
  - label: "Wix公式エンジニアリングブログ: 障害対応AIエージェントAirBot（2026-01）"
    url: "https://www.wix.engineering/post/when-ai-becomes-your-on-call-teammate-inside-wix-s-airbot-that-saves-675-engineering-hours-a-month"
    accessedAt: "2026-09-28"
  - label: "Wix開発者ドキュメント: About the Site Backend（Velo）"
    url: "https://dev.wix.com/docs/develop-websites/articles/coding-with-velo/backend-code/about-the-site-backend"
    accessedAt: "2026-09-28"
  - label: "Wix公式: About Wix（創業年・本社）"
    url: "https://www.wix.com/about/us"
    accessedAt: "2026-09-28"
  - label: "Wix公式: Wix Affiliate Program"
    url: "https://www.wix.com/about/affiliates"
    accessedAt: "2026-09-28"
---

ドラッグ&ドロップでWebサイトを作る——この体験を20年近く磨いてきたWixが、2025年から急に別の顔を見せ始めた。創業半年のAIアプリ生成サービスBase44を買い、自社の看板サイトビルダーも「話しかけて作る」Wix Harmonyへ組み替えた。ノーコードの老舗が、ノーコードの次に賭けている。

## サービス解説

Wixは、コードを書かずにWebサイトやオンラインストアを作れるサイトビルダーだ。予約・決済・EC・ブログなどの業務機能を同じ管理画面に積み上げ、個人事業主から制作会社までを相手にする。

:::fact
公式サイトによれば、Wixは2006年創業で本社はテルアビブ。SEC提出書類（2025年通期決算・2026-03-04）によれば、2025年の売上は19.9億ドル（前年比13%増）、ブッキングは20.7億ドル（同13%増）。2025年末の登録ユーザーは3億400万超、有料のプレミアム契約は611万件（Base44を含む）、従業員は5,340人だった。
:::

:::fact
公式プレスルームによれば、Wixは2025年6月18日にAIアプリ生成サービスBase44を約8,000万ドルの初期対価で買収した。TechCrunchは、Base44を創業者Maor Shlomoが1人で所有する創業6ヶ月の会社と報じている。2029年まで業績連動の追加支払い（アーンアウト）がつき、Base44は独立したプロダクト・事業として運営を続けるとしている。2026年1月21日には、自然言語で指示するAIエージェントAriaと従来のビジュアル編集を組み合わせたAIサイトビルダーWix Harmonyを発表した。2025年通期決算の資料には、Base44のARRが買収から9ヶ月で1億ドルに達したと書かれている。
:::

:::pull
8,000万ドルの買い物は、9ヶ月後に年1億ドルの継続収益になっていた。老舗が新参を買ったのではなく、老舗が自分の次の姿を買ったと読める数字だ。
:::

::scorecard

## UX分析

WixのUXは「何も知らない人が、今日中に公開できる」ことに最適化されている。そのうえで、AIと開発者向け機能という二つの出口を用意している。

- **ビジュアル編集とAI生成を同じ画面に置く**。Wix Harmonyは、AIに話しかけて作る速さと、ピクセル単位で直せるエディタの手触りを一つの体験にまとめたと公式は説明する。AIの出力が思い通りでないとき、プロンプトを書き直すのではなく手で直せる逃げ道があるのは、非エンジニアにとって大きい。
- **本番運用の面倒を丸ごと引き受ける**。公式によれば、サイトはAWS・Google Cloud・Fastlyの上で動き、1社が落ちても自動で迂回する。200超のCDNノードで配信し、稼働率99.99%をうたう。サーバーやSSLを意識しないで済むこと自体が、Wixの売っている体験だ。
- **行き止まりにならない開発者向けの出口**。コードを書きたい人にはVelo（JavaScript）とNode.jsのサーバーレスなバックエンドがあり、データベースやHTTPエンドポイントも持てる。ノーコードで始めて、足りなくなったらコードを足せる。
- **機能の多さは迷いやすさと裏表**。予約・EC・会員・ブログと何でもできる分、最初の設定画面で選択肢が多すぎると感じる人もいるだろう。AIに初期構成を任せるHarmonyは、この「最初の一歩」の重さへの回答とも読める。

## 技術構成

::techstack

:::fact
公式エンジニアリングブログ（2025-02）によれば、Wixのバックエンドは4,000を超える小さなマイクロサービスとサーバーレス関数で構成され、同期通信はgRPC、非同期通信はKafkaで行う。言語はScala・TypeScript・Pythonが併用され、どの言語からも自社ライブラリGreyhound経由でKafkaを使う。2020年にKafka基盤をConfluentのクラウドへ移し、その後プッシュ型のコンシューマープロキシを作って重複読み込みを減らし、Kafka費用を30%削った。
:::

:::fact
同ブログの別記事によれば、データベース層では約1,000台・160超のMySQLクラスタを、Intel系のEC2からAWS Gravitonへ30日間・無停止で移した（2026-03）。MySQLの計算コストは約15%下がり、CPU使用率は最大50%下がったという。メディア基盤は3億超のサイトに1日60億件超のメディアリクエストを返し、数十ペタバイトのデータを扱う。画像処理サービスはGoで書かれ、AVIFのエンコードにはC製のlibaom/libavifを使う（2026-09）。さらに、3,500本超のAirflowパイプラインの障害調査をLLMで自動化するAirBotを社内で運用し、月675時間のエンジニア工数を浮かせたと報告している（2026-01）。
:::

:::guess
当サイトの観測では、wix.comの応答ヘッダーに server: Pepyaka と、Varnishのキャッシュヒット、Fastly経由を示す値が並んでいた。自社の配信層の前段にFastly（それ自体Varnishを基にしたCDN）のキャッシュを置いた構成とみられる。数億のサイトをほぼ同じテンプレートの仕組みで配るWixにとって、キャッシュのヒット率はそのまま配信原価になる。Kafka費用の30%削減やGraviton移行の15%削減といった記事が続くのも、規模に比例して膨らむインフラ費を数%でも削ることが利益率を左右する事業だからだと推測される。
:::

## ビジネスモデル

Wixの収益は、サイトの有料プラン（Creative Subscriptions）と、決済・EC・配送などの業務機能（Business Solutions）の二本柱だ。

:::fact
SEC提出書類によれば、2025年の売上19.9億ドルのうち、Creative Subscriptionsが14.1億ドル（前年比11%増）、Business Solutionsが5.83億ドル（同18%増）。Business Solutionsのうち、主にWix Paymentsによる取引収益は2.55億ドル（同19%増）だった。他人のサイトやアプリを作る制作会社・フリーランスと、LegalZoomやVistaprintのようなB2Bの再販パートナーを経由した売上（Partners revenue）は7.50億ドルで、前年比23%増と全社を上回る伸びだった。フリーキャッシュフローは5.73億ドルで、買収関連費用を除くと6.05億ドル（売上の30%）になる。2026年はブッキング・売上ともに10%台半ばの成長を見込む。
:::

:::guess
伸び率を並べると、サイトの月額料金（11%増）より、決済（19%増）や制作会社などのパートナー経由（23%増）のほうが速い。Wixの重心は「1人が自分のサイトを作る道具」から「他人の商売を作る人と、商売そのものに乗る仕組み」へ移りつつあるとみられる。Base44とHarmonyはこの流れの入口を広げる投資と読める。AIでサイトやアプリを作る人が増えるほど、その先の決済・ホスティング・継続課金はWixの基盤に流れ込む。
:::

:::fact
公式サイトによれば、Wixは紹介経由で新規ユーザーがプレミアム契約に至ると報酬を払うアフィリエイトプログラム（Wix Affiliate Program）を運営しており、申し込みはImpact経由で受け付けている。
:::

ドラッグ&ドロップの老舗が、自分の得意技を捨てずにAIを載せ、決済と制作会社の経済圏で稼ぐ。Wixの2025年は、ノーコードの次を買いにいった年だった。その裏では、足元のインフラ費を少しずつ削る地道な作業が続いている。
