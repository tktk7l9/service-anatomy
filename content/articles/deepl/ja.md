---
service: "DeepL"
title: "汎用AIに翻訳を明け渡さない — DeepLが自社スパコンで守る「専業」の砦"
description: "Google翻訳を追い落とした挑戦者DeepLは、LLM時代には守る側に回った。翻訳特化の自社LLM、NVIDIA DGX SuperPODによる自前の学習インフラ、Pro/APIのB2B収益、データ削除を売るセキュリティ戦略までを公開情報から解剖する。"
lead: "かつて「Google翻訳より自然」という口コミだけで世界に広がったDeepLは、ChatGPTが翻訳もこなす時代に挑戦者から防衛側へ回った。汎用LLMに対して専業の砦をどう築いているのか——翻訳特化LLM、自社導入のDGX SuperPOD、B2B転換の現在地を解剖する。"
category: ai-tool
tags: [translation, ai, llm, nvidia, b2b]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://www.deepl.com/ja/translator"
vendor: "DeepL SE"
origin: "DE"
heroTheme: "deepl"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "翻訳モデル"
    name: "自社開発の翻訳特化LLM"
    confidence: confirmed
    evidence: "公式ブログ（2024-07）に、翻訳・編集に特化した次世代LLMを完全自社開発・自社インフラで構築と明記"
    evidenceUrl: "https://www.deepl.com/en/blog/next-gen-language-model"
  - layer: "学習データ"
    name: "7年超の自社独自データ"
    confidence: confirmed
    evidence: "公式ブログ（2024-07）に、7年以上蓄積した独自データで翻訳・文章生成向けにチューニングと明記"
    evidenceUrl: "https://www.deepl.com/en/blog/next-gen-language-model"
  - layer: "学習インフラ"
    name: "NVIDIA DGX SuperPOD (DGX GB200)"
    confidence: confirmed
    evidence: "公式プレスリリース（2024-10）にDGX GB200搭載SuperPODを欧州で商用初導入・自社3基目・2025年中頃スウェーデンで稼働予定と明記"
    evidenceUrl: "https://prtimes.jp/main/html/rd/p/000000027.000112534.html"
  - layer: "API"
    name: "DeepL API (REST)"
    confidence: confirmed
    evidence: "公式開発者ドキュメントで提供中（Free/Proプラン）"
    evidenceUrl: "https://developers.deepl.com/docs"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare / cf-cache-status: HIT、2026-07-17）。公式ドキュメントでの明言は見当たらない"
  - layer: "エッジ/ロードバランサ"
    name: "自社L7ロードバランサ層"
    confidence: speculative
    evidence: "server-timingヘッダーのl7_lb_*計測値とx-deepl-ingress-typeという独自ヘッダーの実観測（2026-07-17）からの推測"
sources:
  - label: "DeepL公式ブログ: 次世代言語モデル発表（2024-07）"
    url: "https://www.deepl.com/en/blog/next-gen-language-model"
    accessedAt: "2026-07-17"
  - label: "DeepL公式プレスリリース: $300M調達・評価額$2B（2024-05）"
    url: "https://www.deepl.com/en/press-release/deepl-announces-300-million-investment-at-2-billion-valuation-fueled-by-global-demand-for-ai-language-solutions"
    accessedAt: "2026-07-17"
  - label: "DeepL公式プレスリリース: NVIDIA DGX SuperPOD（DGX GB200）欧州初導入（2024-10）"
    url: "https://prtimes.jp/main/html/rd/p/000000027.000112534.html"
    accessedAt: "2026-07-17"
  - label: "AWS Startupブログ: DeepL CTO Talks（2023-07・有料ユーザー50万超/登録2万社超）"
    url: "https://aws.amazon.com/jp/blogs/startup/event-report-ctotalks-deepl-2023/"
    accessedAt: "2026-07-17"
  - label: "DeepL会社案内（公式PDF・Linguee発の沿革・原本404のためWayback Machine 2022年アーカイブ）"
    url: "https://web.archive.org/web/20220720053339/https://static.deepl.com/files/press/companyProfile_JA.pdf"
    accessedAt: "2026-07-22"
---

2017年、ケルンの小さな会社が公開した翻訳サービスは、広告費ではなく「Googleより自然」という口コミだけで世界に広がった。それから数年、生成AIが翻訳を「ついでに」こなすようになり、DeepLは挑戦者から防衛側に立場を変えた。当サイトで取り上げた[Nani翻訳](/ja/articles/nani-translation)のような「翻訳UXの再発明」勢とも、汎用LLMとも違う、「専業の砦」戦略を解剖する。

## サービス解説

DeepLはニューラル機械翻訳サービスだ。Webとアプリの翻訳ツールに加え、法人向けのPro、開発者向けAPI、文章推敲のDeepL Writeを提供する。

:::fact
会社の前身は2009年にケルンで創業した対訳検索エンジンLingueeで、その対訳データ資産を土台に2017年8月にDeepL翻訳が公開された。2023年のAWS主催イベント時点で有料ユーザー50万超・登録2万社超。2024年5月には3億ドルを調達し評価額20億ドルに到達、2024年7月の公式発表では顧客組織は10万を超えFortune 500の半数を含むとされる。
:::

:::pull
DeepLの製品哲学は一貫している——マーケティングではなく品質だけで選ばれること。それはLLM時代の防衛戦でも変わっていない。
:::

::scorecard

## UX分析

DeepLのUXは「翻訳の道具」として徹底的に実務側に振れている。

- **貼り付けて即座に、代替案まで**。訳文の単語をクリックすると別訳候補がその場で展開され、訳文全体が組み替わる。「翻訳結果を編集する」のではなく「翻訳と対話する」この操作感は、いまだに他社が完全には追いつけていない。
- **デスクトップアプリのCtrl+C×2**。どのアプリからでもコピー2回で翻訳が呼び出せるショートカットは、翻訳を「サイトに行く行為」から「OSの機能」に変えた。
- **文体・用語集がB2Bの本丸**。敬体/常体の切り替えや用語集は、個人の便利機能に見えて、実は企業の文書ワークフローに食い込むための機能群だ。
- **弱点は無料版の制約と「1文字も外せない」場面**。文字数・ファイル制限は競合の無料枠より窮屈で、契約書のような高リスク文書では人間のポストエディットが依然前提になる。

## 技術構成

::techstack

:::fact
公式ブログ（2024年7月）によれば、DeepLは翻訳・編集に特化した次世代LLMを完全自社開発し、自社インフラ上で学習させている。7年以上蓄積した独自データを使い、ブラインドテストでは言語専門家がGoogle翻訳の1.3倍、ChatGPT-4の1.7倍の頻度でDeepLの訳を選好したとする。学習基盤としては、DGX GB200を搭載したNVIDIA DGX SuperPODを欧州で商用初導入すると2024年10月に発表しており、これは同社3基目のSuperPODで、スウェーデンのデータセンターで2025年中頃の稼働を予定するとしていた。
:::

:::guess
配信面では、当サイトの観測でCloudflare（server: cloudflare、キャッシュHIT）と、l7_lbというserver-timing計測値・x-deepl-ingress-typeという独自ヘッダーが確認できた。CDNの背後に自社運用のL7ロードバランサ層を持つ構成とみられる。GPUを自社導入し推論も自社インフラで抱える構造は、クラウドGPU全借りの生成AI企業と比べて固定費が重い代わりに、翻訳という推論量が読みやすいワークロードでは単位コストを大きく下げられる——「専業ゆえに需要予測が立つ」ことをインフラ戦略に変換していると推測される。
:::

## ビジネスモデル

DeepLの収益は、無料の翻訳体験を入口に、Pro・API・法人契約へ引き上げる古典的なフリーミアムだ。ただしその売り物は訳質だけではない。

:::fact
Proプランは訳質・文字数の開放に加えて、テキストが翻訳後に削除されるといったデータ取り扱いを明示的な売りにしている。2024年5月の調達発表では、AI言語ソリューションへの世界的な需要とB2B成長への注力が資金使途として語られた。
:::

:::guess
無料の汎用LLMが「そこそこの翻訳」を無限に供給する時代に、DeepLの防衛線は品質の差分そのものより、企業が求める確実性——データ主権、用語統一、監査可能性、EU企業であること——に移りつつあるとみられる。評価額20億ドルは翻訳API市場だけでは説明しづらく、投資家は「多言語ビジネスコミュニケーション基盤」への拡張（Write、音声翻訳など）を織り込んでいると推測される。専業の砦が守り切れるかは、汎用モデルの翻訳品質が「差が気にならない」水準に達する速度との競争だ。
:::

かつてGoogleという巨人を品質で出し抜いた会社が、今度は自分より大きな波を自社スパコンで受け止めようとしている。DeepLの現在は、「専業AI企業は汎用AI時代を生き残れるか」という、業界全体の問いの最前線にある。
