---
service: "X"
title: "アルゴリズムを公開する会社が、AI企業に呑み込まれた — Xの透明性と不透明な財務"
description: "旧Twitterの後継、X。推薦アルゴリズムとCommunity Notesという2つのOSS公開で異例の透明性を保つ一方、xAIとの1,130億ドル規模の合併、非公開企業ゆえの財務不透明という対極の顔を持つ。Manhattan/Finagleの技術遺産からGrok統合までを解剖する。"
lead: "自社の推薦アルゴリズムを丸ごとGitHubに公開する——SNS業界でXしかやっていないことだ。その同じ会社が、自社の財務諸表は一切公開しない非公開企業でもある。透明性と不透明さが同居するXを、2025年のxAI合併という転換点を軸に解剖する。"
category: media
tags: [social-media, ai, open-source, moderation, x-corp]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://x.com/"
vendor: "X Corp (xAI Holdings Corp)"
origin: "US"
heroTheme: "x"
scores: { product: 3.5, ux: 3.5, tech: 4.0, business: 3.0 }
techStack:
  - layer: "分散データベース"
    name: "Manhattan"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、Tweet・DM・広告等を支える自社製リアルタイム多テナント分散DBと明記（2014年公開・2022年時点でも技術更新記事あり）"
    evidenceUrl: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
  - layer: "サービス間通信"
    name: "Finagle"
    confidence: confirmed
    evidence: "公式エンジニアリングブログの複数記事でManhattan等のRPC基盤として明記"
    evidenceUrl: "https://blog.x.com/engineering/en_us"
  - layer: "推薦アルゴリズム"
    name: "The Algorithm (open source)"
    confidence: confirmed
    evidence: "GitHub公式リポジトリ（twitter/the-algorithm）で「For You」タイムラインの推薦アルゴリズムをOSS公開。2023年3月公開・7.3万Star超（2026-07-20時点）"
    evidenceUrl: "https://github.com/twitter/the-algorithm"
  - layer: "モデレーション"
    name: "Community Notes (scoring algorithm open source)"
    confidence: confirmed
    evidence: "GitHub公式リポジトリ（twitter/communitynotes）でノート採点・ランキングのコードとデータを公開し継続更新中（2026-07-17時点の更新を確認）"
    evidenceUrl: "https://github.com/twitter/communitynotes"
  - layer: "AI統合"
    name: "Grok (xAI)"
    confidence: confirmed
    evidence: "xAIとの合併（2025年3月）後、Grok 3以降をX Premium+にバンドル。SuperGrok Heavyプラン等の公式価格改定で確認"
    evidenceUrl: "https://x.com/elonmusk/status/1905731750275510312"
  - layer: "エッジ/CDN"
    name: "Cloudflare + Envoy"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare envoy、2026-07-20）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Elon Musk（公式X投稿）: xAIによるX買収発表・評価額$80B+$33B（2025-03-28）"
    url: "https://x.com/elonmusk/status/1905731750275510312?lang=en"
    accessedAt: "2026-07-20"
  - label: "GitHub公式: The X Recommendation Algorithm"
    url: "https://github.com/twitter/the-algorithm"
    accessedAt: "2026-07-20"
  - label: "GitHub公式: Community Notes（採点コード・継続更新）"
    url: "https://github.com/twitter/communitynotes"
    accessedAt: "2026-07-20"
  - label: "X公式エンジニアリングブログ: Manhattan（2014）"
    url: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
    accessedAt: "2026-07-20"
  - label: "WebProNews: Grok 3発表後にPremium+を月$40へ値上げ（2025-02）"
    url: "https://www.webpronews.com/x-raises-premium-subscription-to-40-per-month-on-the-strength-of-grok-3/"
    accessedAt: "2026-07-20"
---

「アルゴリズムを見せろ」というSNSへの長年の不満に、正面から応えた会社が1社だけある。Xは自社の推薦アルゴリズムとファクトチェックの採点コードをまるごとGitHubに公開した。同じ会社が、財務諸表は一切公開しない非公開企業でもある——透明性と不透明さがねじれて同居するXを、2025年のxAI合併という転換点を軸に解剖する。分散型SNSで正反対の道を選んだ[Bluesky](/ja/articles/bluesky)とは、同じ問い（プラットフォームは誰のものか）への別の回答だ。

## サービス解説

Xは旧Twitterが2023年に改称したマイクロブログ型SNSだ。2022年10月にElon Musk氏が非公開化し、2025年3月には氏のAI企業xAIと合併した。

:::fact
Musk氏自身のX投稿（2025年3月28日）によれば、xAIがXを全株式交換で買収し、xAIを800億ドル、Xを330億ドル（企業価値450億ドルから負債120億ドルを控除）と評価する取引で、持株会社xAI Holdings Corpのもとに統合された。X製品責任者Nikita Bier氏は、サブスクリプション収益が年換算10億ドルに達したと述べている（複数メディア報道）。Premium+は2025年2月のGrok 3発表後に月額40ドルへ値上げされ、上位のSuperGrok Heavy（月額300ドル）は2025年7月に追加された。
:::

:::pull
自社アルゴリズムを世界に公開する会社が、自社の決算は世界に公開しない——Xほどこの矛盾を体現する企業は他にない。
:::

::scorecard

## UX分析

XのUXは「透明性の実験場」と「Muskの気まぐれな仕様変更」という2つの顔を持つ。

- **Community Notesは業界随一の実装**。文脈の異なる複数ユーザーの合意でノートを表示する仕組みは、中央集権のファクトチェックとも野放しとも違う第三の道を実証しており、採点アルゴリズム自体が公開されているため検証可能性も高い。
- **推薦アルゴリズムの公開は象徴的だが実効性は限定的**。2023年3月に公開された「The Algorithm」リポジトリは7万Star超を集めたが、GitHub上の更新は2025年9月で止まっており、現在の本番アルゴリズムと完全に一致する保証はない。透明性のジェスチャーとしての価値と、実運用の追跡可能性は別問題だ。
- **無料ユーザーへの機能制限が続く**。ブックマーク上限・返信順位・閲覧数上限など、有料化を促す制約が段階的に増えており、UXの一貫性より収益動線が優先される場面が目立つ。
- **Grok統合はタイムラインの外側から侵食する**。投稿の要約・返信生成などAI機能が有料プランのバンドルとして拡大しており、SNSとAIアシスタントの境界が薄れつつある。

## 技術構成

::techstack

:::fact
Manhattan（自社製の多テナント分散データベース）とFinagle（サービス間通信の基盤）は旧Twitter時代から公式エンジニアリングブログで詳述されており、2022年時点の技術更新記事も確認できる。推薦アルゴリズムは2023年3月に「The Algorithm」としてGitHubで公開され、Community Notesの採点コードも公式リポジトリで継続的に更新されている（2026年7月17日の更新を確認）。xAI合併後はGrok（xAI開発のLLM）がPremium+にバンドルされ、価格帯はGrokのモデル世代（Grok 3→4→4.5）に連動して改定されてきた。
:::

:::guess
当サイトの観測ではCloudflareとEnvoyのヘッダーが確認でき、エッジ層は旧来のTwitter自社インフラから一部クラウド化・標準化が進んでいるとみられる。「The Algorithm」の更新が2025年9月で止まっている点は、公開当初の透明性への熱意が薄れたのか、xAI統合に開発リソースが振り向けられたのかのどちらかを示唆していると推測される。一方でCommunity Notesは継続更新されており、モデレーションの透明性だけは経営方針として維持されているとみられる。
:::

## ビジネスモデル

Xの収益構造は、広告・サブスクリプション・xAIとのAIバンドルの三本柱に再編されつつある。

:::fact
Musk氏の2022年買収は約130億ドルの負債を伴うレバレッジド・バイアウトだったと広く報じられており、以降Xは非公開企業として財務諸表を公開していない。2025年3月のxAI合併により、X単体の財務はxAI Holdings Corpという持株会社の中に統合された。サブスクリプション収益は年換算10億ドル規模に達したと報告されている。
:::

:::guess
広告収益は買収後の広告主離れから回復途上とみられ、公開情報だけでは正確な規模を検証できない。xAIとの合併は、広告収益の不確実性をAIサブスクリプションという新しい収益源で補う狙いがあると推測される——GrokをXに組み込むことで、Xのユーザー基盤をxAIの顧客獲得コスト削減装置として使う構図だ。財務が非公開である以上、この賭けが実際に機能しているかどうかを外部から検証する手段は限られている。
:::

透明性と不透明さ。Xは、プラットフォームのアルゴリズムを覗ける稀有な窓を提供しながら、その経営の実態はますます見えなくなっている。SNSの「見える化」を最も進めた企業が、同時に最も「見えない」企業になったという逆説こそ、いまのXを最も正確に言い表す一文かもしれない。
