---
service: "Vercel"
title: "フレームワークを無料で配り、その置き場所を売る — 当サイトも載っているVercelの構造"
description: "Next.jsを無償のOSSとして配り、その最適なホスティングを売るVercel。直近12ヶ月で5億ダウンロードを超えたフレームワークのファネル構造、サーバーレスの次を狙うFluid compute、評価額93億ドルのAIクラウド転換までを公式ブログとドキュメントから解剖する。なお、この記事自体がVercelから配信されている。"
lead: "いま読んでいるこのページは、Vercelのサーバーから届いている。当サイトはNext.jsで書かれ、Vercelにデプロイされているからだ。フレームワークを無料で配り、その最適な置き場所を売る——利用者として渦中にいるこのビジネスモデルを、一歩引いて解剖する。"
category: dev-tool
tags: [hosting, nextjs, serverless, rust, ai]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://vercel.com/"
vendor: "Vercel Inc."
origin: "US"
heroTheme: "vercel"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "フレームワーク"
    name: "Next.js"
    confidence: confirmed
    evidence: "公式Series Fブログ（2025-09-30）に、直近12ヶ月のダウンロードが5億回を超え「2016〜2024年の合計より多い」と明記。Grok・Claude・Cursor等のフロントエンドでの採用にも言及"
    evidenceUrl: "https://vercel.com/blog/series-f"
  - layer: "コンピュート基盤"
    name: "Fluid compute"
    confidence: confirmed
    evidence: "公式ブログ（2025-02-04）に、単発呼び出しのサーバーレスを超える「ミニサーバー」型実行モデルとして発表。1インスタンスで多数リクエストを並行処理し、コンピュートコストを最大85%削減と明記"
    evidenceUrl: "https://vercel.com/blog/introducing-fluid-compute"
  - layer: "バンドラ"
    name: "Turbopack (Rust)"
    confidence: confirmed
    evidence: "Next.js公式ドキュメントに、Rust製のインクリメンタルバンドラでNext.js 16から既定と明記"
    evidenceUrl: "https://nextjs.org/docs/app/api-reference/turbopack"
  - layer: "基盤クラウド"
    name: "AWS"
    confidence: likely
    evidence: "公式リージョンドキュメントの20コンピュートリージョンの内部名称（eu-north-1・ap-northeast-1等）がAWSリージョン名と一致することを実確認（2026-07-21）"
  - layer: "公式サイト配信"
    name: "Vercel"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（server: Vercel、2026-07-21）。自社製品による自社サイト配信"
    evidenceUrl: "https://vercel.com/"
sources:
  - label: "Vercel公式ブログ: Towards the AI Cloud — Series F（3億ドル調達・評価額93億ドル・2025-09-30）"
    url: "https://vercel.com/blog/series-f"
    accessedAt: "2026-07-21"
  - label: "Vercel公式ブログ: Introducing Fluid compute（2025-02-04）"
    url: "https://vercel.com/blog/introducing-fluid-compute"
    accessedAt: "2026-07-21"
  - label: "Next.js公式ドキュメント: Turbopack（Rust製・Next.js 16で既定バンドラ）"
    url: "https://nextjs.org/docs/app/api-reference/turbopack"
    accessedAt: "2026-07-21"
  - label: "Vercel公式ドキュメント: Global network and regions（126 PoP・20リージョン）"
    url: "https://vercel.com/docs/regions"
    accessedAt: "2026-07-21"
---

## サービス解説

VercelはWebアプリのホスティングプラットフォームだ。git pushするだけでビルド・デプロイ・世界配信までが完了する体験を売り、その入口として、Reactフレームワークのデファクトになった[Next.js](https://nextjs.org/)を無償のOSSとして開発・配布している。当サイト自身もNext.jsで書かれ、Vercelから配信されている——この記事は、利用者が自分の足元を解剖する試みでもある。

:::fact
公式のSeries F発表（2025年9月30日）によれば、VercelはAccelとGICの共同リードで3億ドルを調達し、評価額は93億ドル。同時に約3億ドル規模のテンダーオファー（従業員・初期投資家向け）も実施した。Next.jsの直近12ヶ月のダウンロードは5億回を超え、「2016年から2024年の合計より多い」とされる。AI SDKの週間ダウンロードは1年で44.6万から320万に伸び、Grok・Claude・CursorのフロントエンドがNext.jsで動いていることにも言及されている。
:::

:::pull
フレームワークは無料で、どこでも動く。だが「一番よく動く場所」は一つしかない。この非対称がVercelのビジネスの重心だ。
:::

::scorecard

## UX分析

VercelのUXは「デプロイという概念を消す」ことに向けられている。対象は開発者であり、その体験設計は業界の期待値を引き上げてきた。

- **git pushがデプロイになる**。ブランチを押せばプレビューURLが生え、mainに入れば本番へ。CI/CDの構築という概念自体を製品が吸収し、個人開発者にも大企業と同じ配信パイプラインを与えた。
- **プレビューURLが共同作業の単位になる**。変更ごとに世界へ配信される一意のURLは、レビュー・デザイン確認・共有の摩擦を大きく下げた発明で、後発ホスティングが揃って模倣する型になった。
- **ゼロ設定の陰に「最適化の檻」もある**。Next.jsの新機能はVercel上で最も滑らかに動くよう設計され、他ホスティングでは自前の設定や機能差の吸収が必要になる場面がある。簡単さの代償として、事実上の囲い込みが機能している。
- **ダッシュボードは観測装置を兼ねる**。Analytics・Speed Insights・ログが同じ画面に集まり、「配信して終わり」でなく「測って直す」導線が既定で敷かれている。当サイトのWeb Analyticsもこの仕組みの上にある。

## 技術構成

::techstack

:::fact
Vercelのインフラは126のPoPと20のコンピュートリージョンで構成され、公式ドキュメントのリージョン一覧の内部名称はAWSリージョン名と一致する。実行基盤は2025年2月発表のFluid computeで、単発呼び出しで課金される従来型サーバーレスに代えて、1インスタンスが多数のリクエストを並行処理する「ミニサーバー」型を採用し、コンピュートコストを最大85%削減すると公表。ビルド側はRust製のTurbopackがNext.js 16から既定のバンドラになっている。
:::

:::guess
Fluid computeは、AIワークロードの登場でサーバーレスの課金モデルが破綻したことへの応答とみられる。LLM応答を待つ関数は「何もしていないのに課金される」時間が支配的になるため、待ち時間に別のリクエストを処理できる実行モデルへの転換は、AIクラウドを名乗るうえでの必要条件だったと推測される。基盤をAWSに置いたままCDN・実行モデル・ビルドという「体験を決める層」だけを自作する構図は、CanvaやNetflixの解剖でも見た「どの抽象度で作り、どこを買うか」の一つの答えで、Vercelの場合は開発者が触れる面のすべてを自作し、触れない面はすべて借りるという割り切りが一貫している。
:::

## ビジネスモデル

Vercelの収益はホスティングのサブスクリプションと従量課金で、無料のHobbyからPro、そしてエンタープライズ契約へと階段が続く。

:::fact
Series F発表では、調達資金の使途としてv0（自然言語からのUI生成）・AI Gateway・AI SDK・AI Sandboxの拡大が明記され、「Webページを作る会社」から「AIアプリの基盤」への転換が公式に打ち出されている。AI SDKの週間320万ダウンロードとNext.jsの12ヶ月5億ダウンロードが、その転換の足場として提示されている。
:::

:::guess
Next.jsという無償OSSは、ホスティングという有料製品の獲得コストをほぼゼロにする装置として機能しているとみられる。フレームワークの学習者が最初のデプロイ先に選ぶのは自然とVercelになり、営業なしで世界中から見込み客が流入する。一方でこの構造は「OSSのスチュワードと商業ホスティングの利益相反」という緊張を常に孕み、Next.jsがVercel外でも完全に同等に動くかは、コミュニティが監視し続ける論点であり続けるだろう。評価額93億ドルはARR推定値に対してかなり強気で、AIクラウド転換の成否——v0とAI SDKが第二のNext.jsになれるか——を先取りした価格と推測される。
:::

無料で配ったフレームワークが12ヶ月で5億回落とされ、その置き場所として自社クラウドが選ばれる。当サイトもその5億分の1であり、この記事もその構造の中から配信されている。OSSをファネルにする戦略の完成形と、その利益相反という宿題——Vercelの解剖は、現代の開発者向けビジネスの教科書そのものだ。
