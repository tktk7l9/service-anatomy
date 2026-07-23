---
service: "Perplexity"
title: "モデルの利ざやでは稼がない、検索インフラの従量課金で稼ぐ — Perplexityの収益設計と出版社訴訟"
description: "引用付きの回答を返すAI検索エンジンPerplexity。OpenAI・Anthropic・Google等のモデルを「マークアップなし」でルーティングし、収益は検索API・ツール呼び出しの従量課金に寄せる設計を取る。一方でBBC・New York Times・讀賣新聞・朝日新聞・日本経済新聞など複数の報道機関から著作権をめぐる訴えを受けている。公式情報からPerplexityの構造を解剖する。"
lead: "Perplexityは、回答に使うAIモデルの利用料を「マークアップなしで」ユーザーに転嫁すると公式ドキュメントに明記している。モデル自体の利ざやでは稼がず、検索APIやツール呼び出しの従量課金で収益を立てる設計だ。だがその回答の元になっているのは報道機関のコンテンツで、BBC・New York Times・讀賣新聞・朝日新聞・日本経済新聞が相次いで著作権侵害を主張している。答えを売るが、答えの元は作らない会社の構造を解剖する。"
category: ai-tool
tags: [ai-search, answer-engine, llm-routing, api, publisher-licensing]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://www.perplexity.ai/"
vendor: "Perplexity AI, Inc."
origin: "US"
heroTheme: "perplexity"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 3.0 }
techStack:
  - layer: "検索特化自社モデル"
    name: "Sonarモデルファミリー（Sonar / Sonar Pro / Sonar Reasoning Pro / Sonar Deep Research）"
    confidence: confirmed
    evidence: "Perplexity公式APIドキュメントに、検索特化の軽量モデルSonarから、推論特化のSonar Reasoning Pro、深い調査向けのSonar Deep Researchまで、用途別のモデル群が掲載されていることを実確認"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/models"
  - layer: "サードパーティモデルルーティング"
    name: "OpenAI / Anthropic / Google / xAI等のマルチLLMルーティング"
    confidence: confirmed
    evidence: "Perplexity公式APIドキュメントに、Agent APIがOpenAI・Anthropic・Google・xAI等のサードパーティモデルを「マークアップなし」でプロバイダー料金のまま提供すると明記"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/pricing"
  - layer: "自社ブラウザ"
    name: "Cometブラウザ（Chromiumベース）"
    confidence: likely
    evidence: "Wikipediaの集約情報によれば、2025年7月にサブスクリプション限定で提供開始され、同年10月に無料開放されたChromiumベースのAI統合ブラウザとされる。Perplexity公式ページは今回アクセスできず未確認のためlikely扱い"
  - layer: "API課金モデル"
    name: "Search API（$5.00/1,000リクエスト）+ ツール呼び出し従量課金"
    confidence: confirmed
    evidence: "Perplexity公式APIドキュメントに、Search APIは1,000リクエストあたり5.00ドルのトークン非依存課金、Web検索・URL取得等の各ツール呼び出しは1回0.005ドルと明記"
    evidenceUrl: "https://docs.perplexity.ai/getting-started/pricing"
sources:
  - label: "Perplexity公式APIドキュメント: Models（Sonarモデルファミリーの構成）"
    url: "https://docs.perplexity.ai/getting-started/models"
    accessedAt: "2026-07-23"
  - label: "Perplexity公式APIドキュメント: Pricing（Agent API/Search API/ツール呼び出しの料金体系）"
    url: "https://docs.perplexity.ai/getting-started/pricing"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Perplexity AI（創業史・資金調達推移・Cometブラウザ・出版社との著作権紛争の集約）"
    url: "https://en.wikipedia.org/wiki/Perplexity_AI"
    accessedAt: "2026-07-23"
---

## サービス解説

Perplexityは2022年8月、Aravind Srinivas氏ら4人が設立したAI検索エンジンだ。同年12月7日に検索サービスを公開した。従来の検索エンジンのようにリンク一覧を返すのではなく、出典を明示した要約回答をその場で生成する「answer engine（回答エンジン）」として位置づけられている。

:::fact
Wikipediaの集約情報によれば、資金調達は2023年4月のシリーズA（2,600万ドル）から始まり、2024年4月には評価額10億ドルを突破、2025年6月に140億ドル、同年9月に200億ドルへと急拡大し、2026年初頭には212.1億ドル（シリーズE-6）に達したとされる。主要投資家にはJeff Bezos氏・Nvidia・Databricks等が名を連ねる。Perplexity公式APIドキュメントによれば、検索特化の自社モデル「Sonar」ファミリー（軽量版のSonarから推論特化のSonar Reasoning Pro、深い調査向けのSonar Deep Researchまで）に加え、OpenAI・Anthropic・Google・xAI等のサードパーティモデルをAgent API経由で「マークアップなし」（プロバイダーの提供価格のまま）でルーティングしていると明記されている。
:::

:::pull
モデルの利用料には利ざやを乗せない。その代わり、検索インフラの従量課金で稼ぐ。Perplexityは「賢さ」ではなく「調べる速さ」を売っている。
:::

::scorecard

## UX分析

PerplexityのUXは、検索結果ではなく「出典付きの答え」を主役に置く設計だ。

- **回答と出典が同じ画面に同居**。質問に対する要約回答と、その根拠となった情報源のリンクが常に併記され、ユーザーは回答を鵜呑みにせず出典を確認できる。
- **モデル選択をユーザーに開放**。Perplexity Proでは、回答生成に使うモデル（自社Sonarか、GPT・Claude・Gemini等のサードパーティモデルか）をユーザー自身が選べる設計になっている。
- **ブラウザへの拡張で検索の外側まで統合**。2025年7月にリリースされたChromiumベースのCometブラウザは、ページ要約・画像解析・メール作成支援など、単一の検索窓を超えてブラウジング全体にAIを統合する狙いを持つ。
- **無料枠の間口は広いが、出典の質は情報源次第**。登録不要で使える無料枠を用意する一方、回答の質は元になる検索結果・報道機関のコンテンツの質にそのまま依存する構造であり、UXの土台を自社では作っていない。

## 技術構成

::techstack

:::fact
Perplexity公式APIドキュメントによれば、自社開発の検索特化モデル「Sonar」ファミリーは、軽量な事実検索向けのSonar、複雑なクエリに対応するSonar Pro、思考の連鎖（Chain of Thought）による推論特化のSonar Reasoning Pro、網羅的な調査を行うSonar Deep Researchの4段階で構成される。これとは別に、Agent API経由でOpenAI・Anthropic・Google・xAI等のサードパーティモデルを「マークアップなし」でルーティングできると明記されている。課金体系は、Search APIが1,000リクエストあたり5.00ドルのトークン非依存課金、Web検索・URL取得等のツール呼び出しは1回0.005ドルとされる。
:::

:::guess
サードパーティモデルの利用料に利ざやを乗せず、検索インフラ側の従量課金（Search API・ツール呼び出し）で収益化する設計は、モデル性能そのものでの差別化競争から距離を置き、「情報を集めて整形するインフラ」としての立ち位置を明確にする狙いがあると考えられる。自社Sonarモデルを持ちつつサードパーティモデルへのルーティングも維持しているのは、Cursorが外部モデルのファインチューニングと自社フロンティアモデルを併走させているのと似た、段階的な内製化戦略の一形態とみられる。ただし、答えの生成に使う情報の大部分は報道機関等の第三者コンテンツに依存しており、この依存構造こそが後述の著作権紛争の火種になっていると推測される。
:::

## ビジネスモデル

Perplexityの収益は、個人向けサブスクリプション（Perplexity Pro）と、開発者向けAPI従量課金の二本柱だ。

:::fact
Wikipediaの集約情報によれば、Perplexityは2024年7月、広告収益を報道機関等のパートナーと分配する取り組みを発表した。これは、著作権をめぐる懸念への対応として位置づけられている。同資料によれば、2024年6月にForbesが出典表示の不十分さを批判し、同年10月にNew York Timesが無断利用に対する停止要求を送付、2025年6月から8月にかけてBBC・讀賣新聞・朝日新聞・日本経済新聞が相次いで著作権侵害を主張したとされる。同年8月には、Cloudflareの調査により、robots.txtの指示を回避する未申告のクローラーが指摘されたと報告されている。
:::

:::guess
モデルの利ざやを取らない代わりに検索インフラの従量課金で稼ぐ設計は、報道機関のコンテンツという「原材料」を無償で使い続けられることを前提にした収益構造だとみられる。2024年7月の収益分配プログラムは、この前提が崩れつつあることへの対応と考えられるが、複数の報道機関から著作権侵害の主張が続いている以上、収益分配の範囲や条件次第では、Perplexityの原価構造そのものが見直しを迫られる可能性があると推測される。評価額が2024年の10億ドルから2026年初頭の212億ドルへと急拡大している裏で、この著作権紛争がどう決着するかは、Perplexityの持続可能性を左右する未解決の変数として残っている。
:::

モデルの利ざやでは稼がず、検索インフラの従量課金で稼ぐ。答えを売るが、答えの元になるコンテンツは自社では作らない。Perplexityの解剖から見えるのは、情報の「集め方・整形の仕方」に賭けた設計と、その裏側で報道機関との関係という未解決の摩擦を抱えたまま急成長している構図だ。
