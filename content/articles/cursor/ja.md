---
service: "Cursor"
title: "コピーではなくフォークを選んだ理由 — Cursorが1年でARR20億ドルに達した設計判断"
description: "VS Codeをフォークして生まれたAIコードエディタCursor。拡張機能では不可能だったエディタ深部へのAI統合、独自の高速コード編集モデル、ARRが約1年で1億→20億ドルに達した成長、そして2026年8月のSpaceXによる買収までを、公式情報から解剖する。"
lead: "拡張機能として作れば早かったはずのAIコードエディタを、Cursorはあえてゼロからのフォークとして作った。その回り道が、エディタの奥深くにAIを埋め込む自由度を生み、アプリケーション層SaaS史上最速のARR成長を支えた。VS Code資産を活かしながら独自インフラを積み上げる設計思想を解剖する。"
category: dev-tool
tags: [ai, code-editor, vscode, developer-tools, funding]
publishedAt: "2026-07-20"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://cursor.com/"
vendor: "Anysphere, Inc.（2026年8月にSpaceXが買収）"
origin: "US"
heroTheme: "cursor"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "エディタ基盤"
    name: "VS Code (Code - OSS) ベース"
    confidence: confirmed
    evidence: "Cursor公式ドキュメントに「Cursor is based upon the VS Code codebase」と明記。拡張機能・テーマ・設定・キーバインドの一括移行機能も提供（2026-10-02再確認）"
    evidenceUrl: "https://cursor.com/docs/configuration/migrations/vscode"
  - layer: "コード編集モデル"
    name: "Fast Apply (ファインチューニング済みLlama-3-70B + 投機的デコード)"
    confidence: confirmed
    evidence: "推論インフラ提携先Fireworks AIの公式ブログ（2024-06-23）に、Cursorがファインチューニングした Llama-3-70B を投機的デコードAPIで配信し、約1,000トークン/秒（通常推論比約13倍）を達成と明記。2024年時点の構成で、現在も同じ構成かは公式情報では確認できない"
    evidenceUrl: "https://fireworks.ai/blog/cursor"
  - layer: "推論インフラ（2024年時点）"
    name: "Fireworks AI"
    confidence: confirmed
    evidence: "Fireworks AI公式ブログ（2024-06-23）に、CursorのFast Applyモデルを同社の投機的デコードAPIで配信していると明記。2024年6月時点の情報で、現在の利用状況は公式情報では確認できない"
    evidenceUrl: "https://fireworks.ai/blog/cursor"
  - layer: "自社コーディングモデル"
    name: "Composer 2.5"
    confidence: confirmed
    evidence: "公式ドキュメントのModels & Pricingが、Composer 2.5を「Cursor Models」枠の自社モデルとして掲載（2026-10-02確認）。初代Composerは公式ブログ（2025-10-29）で「同等の知能を持つモデルの4倍速い」と説明されている"
    evidenceUrl: "https://cursor.com/docs/models-and-pricing"
  - layer: "Composerの土台モデル"
    name: "Kimi K2.5 (Moonshot AI)"
    confidence: confirmed
    evidence: "Composer 2.5の公式ブログ（2026-05-18）に、Composer 2と同じオープンソースのチェックポイントであるMoonshotのKimi K2.5の上に構築したと明記（2026-10-02再確認）"
    evidenceUrl: "https://cursor.com/blog/composer-2-5"
  - layer: "グループのフロンティアモデル"
    name: "Grok (4.7 / 4.6 / 4.5)"
    confidence: confirmed
    evidence: "公式ドキュメントが、Grok 4.7・4.6・4.5をComposer 2.5と同じ「Cursor Models」枠に置き、GrokとComposerを「first-party Cursor models」と呼んでいる（2026-10-02確認）。Grok 4.6は公式ブログ（2026-08-12）でSpaceXAIと共同でのリリースと説明されている"
    evidenceUrl: "https://cursor.com/docs/models-and-pricing"
  - layer: "他社モデル（Other Models枠）"
    name: "Anthropic / OpenAI / Google"
    confidence: confirmed
    evidence: "公式ドキュメントのModels & Pricingに、OpenAI・Anthropic・Google・SpaceXAIなどのフロンティアモデルに対応すると明記（2026-10-02確認）。OpenAIは2026年11月12日に提供を終える予定と報じられている"
    evidenceUrl: "https://cursor.com/docs/models-and-pricing"
  - layer: "配信基盤"
    name: "Vercel + Next.js"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: Vercel / x-vercel-id / x-nextjs-prerender、2026-10-02再観測）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Cursor公式ブログ: Cursor is now a part of SpaceX（2026-08-14・SpaceXによる買収の完了）"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Cursor partners with SpaceX on model training（2026-04-21・モデル学習での提携）"
    url: "https://cursor.com/blog/spacex-model-training"
    accessedAt: "2026-10-02"
  - label: "SpaceX Form S-1（2026-05-20提出・Collaboration with Cursor: 計算資源契約とオプション契約の条件）"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
    accessedAt: "2026-10-02"
  - label: "CNBC: SpaceXがCursorを600億ドルで買収できる権利を得たと発表（2026-04-21）"
    url: "https://www.cnbc.com/2026/04/21/spacex-says-it-can-buy-cursor-later-this-year-for-60-billion-or-pay-10-billion-for-our-work-together.html"
    accessedAt: "2026-10-02"
  - label: "CNBC: OpenAIがCursorへのモデル提供を終了すると発表（2026-08-29）"
    url: "https://www.cnbc.com/2026/08/29/openai-cursor-spacex-model-access.html"
    accessedAt: "2026-10-02"
  - label: "TechCrunch: Cursorの資金調達交渉と年換算売上（2026-04-17・Bloomberg報道の引用を含む）"
    url: "https://techcrunch.com/2026/04/17/sources-cursor-in-talks-to-raise-2b-at-50b-valuation-as-enterprise-growth-surges/"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Series D（2025-11-13・$2.3B調達・評価額$29.3B・年換算売上10億ドル超）"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Series C（2025-06-06・$900M調達・評価額$9.9B・ARR5億ドル超）"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Series B（2025-01-16・$105M調達・経常収益1億ドル超）"
    url: "https://cursor.com/blog/series-b"
    accessedAt: "2026-10-02"
  - label: "Cursor公式: Pricing（プラン構成と価格）"
    url: "https://cursor.com/pricing"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ドキュメント: Models & Pricing（モデル一覧・利用枠・プラン価格）"
    url: "https://cursor.com/docs/models-and-pricing"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Introducing Cursor 2.0 and Composer（2025-10-29）"
    url: "https://cursor.com/blog/2-0"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Introducing Composer 2.5（2026-05-18・Kimi K2.5が土台）"
    url: "https://cursor.com/blog/composer-2-5"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ドキュメント: Cloud Agents（旧Background Agents）"
    url: "https://cursor.com/docs/cloud-agent"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ドキュメント: VS Code Migration（コードベースの基盤について）"
    url: "https://cursor.com/docs/configuration/migrations/vscode"
    accessedAt: "2026-10-02"
  - label: "Fireworks AI公式ブログ: Fast Apply（投機的デコードの技術詳細・2024-06）"
    url: "https://fireworks.ai/blog/cursor"
    accessedAt: "2026-10-02"
---

拡張機能として作れば、開発は数ヶ月早く終わったはずだ。CursorはあえてVS Codeをフォークするという回り道を選んだ——その判断が、[Linear](/ja/articles/linear)と並ぶ「開発者ツールの速度」を追求する2社のうち、Cursorをアプリケーション層SaaS史上最速のARR成長企業に押し上げた。

## サービス解説

CursorはAIをエディタの奥深くに統合したコードエディタだ。MIT出身の4人が創業したAnysphere, Inc.が開発し、2026年8月からはSpaceXの傘下にある。

:::fact
Cursor公式ドキュメントによれば、CursorはVS Codeのコードベース（オープンソース版のCode - OSS）を土台にしており、既存VS Codeの拡張機能・テーマ・設定・キーバインドを一括移行できる。公式ブログによれば、2025年6月のSeries C時点でARRは5億ドルを超え、NVIDIA・Uber・Adobeを含むFortune 500の半数以上が利用していた。5ヶ月後のSeries D（2025年11月）では年換算売上が10億ドルを超え、従業員は300名超と説明されている。そして公式ブログ（2026年8月14日）は、CursorがSpaceXに正式に買収されたと発表した。公式サイトの著作権表示は2026年10月時点でも「Anysphere, Inc.」のままである。
:::

:::pull
拡張機能では届かない場所にAIを埋め込むために、Cursorはエディタそのものを作り直した。回り道こそが最短ルートだった、という逆説がここにある。
:::

::scorecard

## UX分析

CursorのUXは「馴染みと侵入」という一見矛盾する2つの体験を両立させている。

- **移行コストをゼロに設計**。VS Codeの拡張機能・設定・キーバインドがそのまま持ち込めるため、既存ユーザーは学習コストなしに乗り換えられる。エディタ市場で最大のスイッチングコストを公式ツールで解消した設計だ。
- **エディタ内蔵だからこそ実現する機能**。タブ補完やShadow Workspace（見えない場所での提案生成）などは、拡張機能APIの権限では実装できない領域まで踏み込んでいる。フォークという回り道が機能の差別化に直結している。
- **既存VS Code拡張との摩擦も報告される**。フォーク由来の互換性問題や、コミュニティからの「VS Codeエコシステムの分断」への懸念は、この戦略の代償として指摘され続けている。
- **エージェント化が体験をエディタの外へ広げた**。公式サイトは自らを「コーディングエージェント」と紹介し、製品はデスクトップのエディタに加えて、ターミナルで動くCLI、クラウド上の隔離されたVMで動くCloud Agents（旧称Background Agents）、iOSアプリ、コードレビューのBugbotへ広がっている。UXの主戦場は単発の補完から、複数ステップの作業を任せて結果を確認する体験へ動いている。

## 技術構成

::techstack

:::fact
Fireworks AIの公式ブログ（2024年6月）によれば、Cursorのコード編集機能「Fast Apply」はファインチューニング済みのLlama-3-70Bを投機的デコードで配信し、通常推論比で約13倍の約1,000トークン/秒を実現した。Cursor公式ブログ（2025年10月）は、初の自社コーディングモデル「Composer」を、同等の知能を持つ他モデルの4倍の速度で動くと説明している。2026年10月時点の公式ドキュメントは、Composer 2.5とGrok 4.7・4.6・4.5を「Cursor Models」という自社枠にまとめ、Anthropic・OpenAI・Googleなどの他社モデルを「Other Models」枠で提供している。SpaceXのForm S-1（2026年5月提出）によれば、2026年4月19日の契約でSpaceXはGPUクラスタの計算資源をCursorに提供し、両社はGrokを含む既存モデルの改良に協力する。
:::

:::guess
ファインチューニングした外部モデル（Fast Apply）、自社モデル（Composer）、そして親会社のGPUで鍛えるGrokという順番から、Cursorは「まず外部モデルの微調整で市場投入し、収益が確立してから自社モデルに資源を投じ、最後に計算資源そのものを確保する」という段階的な内製化を進めてきたとみられる。これはNani翻訳が複数のLLM APIをルーティングで使い分ける戦略とも、DeepLが最初から自社LLMに全振りする戦略とも異なる、第三の道だ。VS Codeフォークという選択も含め、Cursorの技術選定は「土台は借りて、差別化点だけ自作する」という効率重視の思想で貫かれていると推測される。ただし買収後は、借りていた土台の一部（計算資源とフロンティアモデル）がグループ内のものに置き換わりつつあるとも読める。
:::

## ビジネスモデル

Cursorの収益成長は、アプリケーション層SaaSとして記録的な速度だ。そして2026年、その成長は独立企業としてではなくSpaceXの一部として続くことになった。

:::fact
公式ブログによれば、経常収益は2025年1月に1億ドルを超え、同年11月には年換算売上が10億ドルを超えた。2026年2月に年換算20億ドルに達したという数字は公式発表ではなく、Bloombergの報道をTechCrunch（2026年4月17日）が引用したものである。資金調達はSeries C（2025年6月・9億ドル・評価額99億ドル）からSeries D（2025年11月・23億ドル・評価額293億ドル）へと5ヶ月で評価額が約3倍になり、Series DにはNVIDIAとGoogleが新規投資家として参加した。これらは買収前に公式に発表された最後の調達の記録である。

CNBC（2026年4月21日）によれば、SpaceXは同日、Cursorを年内に600億ドルで買収できる権利、または共同作業の対価として100億ドルを支払う取り決めを得たと発表した。SpaceXのForm S-1はこの条件を、Cursorの株式価値を600億ドルとみなしたClass A普通株での支払い、および不成立時の解約金15億ドルと繰延サービス料85億ドルとして記している。Cursor公式ブログは2026年8月14日に買収の完了を発表した。

料金は公式の料金ページとドキュメント（2026年10月確認）によれば、無料のHobby、個人向けのPro（月20ドル）・Pro Plus（月60ドル）・Ultra（月200ドル）、Teams（Standardが1ユーザー月40ドル、Premiumが月120ドル）、個別見積もりのEnterpriseで構成される。各プランには一定のモデル利用量が含まれ、超過分はAPI価格での従量課金になる。利用枠は自社枠の「Cursor Models」と他社モデルの「Other Models」に分かれ、インド向けのStart（月649ルピー）は自社枠だけを含む。
:::

:::fact
CNBC（2026年8月29日）によれば、OpenAIは買収完了後に、Cursor経由での自社モデルの提供を終了すると発表し、終了予定日を2026年11月12日とした。CursorのCEOは、OpenAIのモデルが占めるのは利用トラフィックの約5%で、解決に向けてOpenAIと協議していると述べている。同記事によれば、Anthropicの共同創業者はClaudeの提供を続けると投稿した。2026年10月2日時点の公式ドキュメントには、OpenAIのモデルも引き続き掲載されている。
:::

:::guess
SpaceXはForm S-1で、この取引を「計算基盤・モデル・アプリケーションを垂直統合する戦略の延長」と位置づけ、コーディング作業から得られるデータがGrokを含むモデルの学習を強化すると見込んでいると述べている。Cursorにとっては、推論コストの重いAIアプリケーションの原価を、親会社の計算資源と自社枠のモデルで下げられる可能性があるとみられる。料金体系で自社枠（GrokとComposer）に多めの利用量を割り当て、Teams向けの上乗せ料金を自社モデルには課さない設計は、利用を原価の低い自社モデルへ寄せる狙いを持つと推測される。一方で、他社モデルを選べる中立性はCursorの価値の一部でもあった。グループにGrokを抱える以上、モデル提供元との関係は買収前より複雑になると考えられ、どこまで「どのモデルも選べるエディタ」であり続けられるかが、今後の観察点になりそうだ。
:::

拡張機能ではなくフォークを選ぶという、一見遠回りな技術判断が、エディタの主導権を握り、史上最速のSaaS成長を可能にした。「土台を借りて、差別化点だけ自作する」という戦略で育ったCursorは、いま計算資源とモデルを持つ親会社の内側で、その戦略がどこまで通用するかを試す新しい段階にいる。
