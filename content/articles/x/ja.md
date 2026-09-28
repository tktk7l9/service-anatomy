---
service: "X"
title: "アルゴリズムを公開する会社が、AI企業に呑み込まれた — Xの透明性と不透明な財務"
description: "旧Twitterの後継、X。推薦アルゴリズムとCommunity Notesという2つのOSS公開で異例の透明性を保つ一方、xAIとの1,130億ドル規模の合併、2026年のSpaceXによる買収と上場を経てもX単体の損益は見えないという対極の顔を持つ。Manhattan/Finagleの技術遺産からGrok統合までを解剖する。"
lead: "自社の推薦アルゴリズムを丸ごとGitHubに公開する——SNS業界でXしかやっていないことだ。その同じ会社の単体の損益は、2022年の非公開化から今まで外から見えないままだ。親会社のSpaceXが2026年6月に上場しても、XはAIセグメントの一部として合算されている。透明性と不透明さが同居するXを、2025年のxAI合併という転換点を軸に解剖する。"
category: media
tags: [social-media, ai, open-source, moderation, x-corp]
publishedAt: "2026-07-20"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://x.com/"
vendor: "X Corp (SpaceX / xAI)"
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
    evidence: "GitHub公式リポジトリ（twitter/the-algorithm）で「For You」タイムラインの推薦アルゴリズムをOSS公開。2023年3月公開・7.3万Star超（2026-09-28時点）。最終コミットは2025年9月で、以後の公開はxai-org/x-algorithmが引き継いでいる"
    evidenceUrl: "https://github.com/twitter/the-algorithm"
  - layer: "推薦アルゴリズム（現行の公開版）"
    name: "x-algorithm (open source)"
    confidence: confirmed
    evidence: "GitHub公式リポジトリ（xai-org/x-algorithm）で「For You」フィードを決める中核コードを公開。2026年1月19日作成・主要言語Rust・Apache License 2.0・3.3万Star超。READMEに2026年8月と9月の更新が記録され、最終コミットは2026-09-26（GitHub APIで確認・2026-09-28）"
    evidenceUrl: "https://github.com/xai-org/x-algorithm"
  - layer: "モデレーション"
    name: "Community Notes (scoring algorithm open source)"
    confidence: confirmed
    evidence: "GitHub公式リポジトリ（twitter/communitynotes）でノート採点・ランキングのコードとデータを公開し継続更新中（2026-09-21のコミットを確認・2026-09-28時点）"
    evidenceUrl: "https://github.com/twitter/communitynotes"
  - layer: "AI統合"
    name: "Grok (xAI)"
    confidence: confirmed
    evidence: "xAIとの合併（2025年3月）後、Grok 3以降をX Premium+にバンドル。SuperGrok Heavyプラン等の公式価格改定で確認。xAI公式ドキュメントが最も高性能と案内する現行モデルはGrok 4.7（2026-09-28時点）"
    evidenceUrl: "https://x.com/elonmusk/status/1905731750275510312"
  - layer: "エッジ/CDN"
    name: "Cloudflare + Envoy"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare envoy、2026-07-20）。2026-09-28の再観測では、twitter.comとapi.x.comがserver: cloudflare envoy、x.comはserver: envoyとvia: 1.1 varnishを返した。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Elon Musk（公式X投稿）: xAIによるX買収発表・評価額$80B+$33B（2025-03-28）"
    url: "https://x.com/elonmusk/status/1905731750275510312?lang=en"
    accessedAt: "2026-07-20"
  - label: "GitHub公式: The X Recommendation Algorithm"
    url: "https://github.com/twitter/the-algorithm"
    accessedAt: "2026-09-28"
  - label: "GitHub公式: Community Notes（採点コード・継続更新）"
    url: "https://github.com/twitter/communitynotes"
    accessedAt: "2026-09-28"
  - label: "X公式エンジニアリングブログ: Manhattan（2014）"
    url: "https://blog.x.com/engineering/en_us/a/2014/manhattan-our-real-time-multi-tenant-distributed-database-for-twitter-scale"
    accessedAt: "2026-07-20"
  - label: "WebProNews: Grok 3発表後にPremium+を月$40へ値上げ（2025-02）"
    url: "https://www.webpronews.com/x-raises-premium-subscription-to-40-per-month-on-the-strength-of-grok-3/"
    accessedAt: "2026-07-20"
  - label: "GitHub公式: xai-org/x-algorithm（For Youフィードの現行公開コード・2026-01〜）"
    url: "https://github.com/xai-org/x-algorithm"
    accessedAt: "2026-09-28"
  - label: "SEC Form 10-Q（Space Exploration Technologies Corp.・2026年第2四半期・xAI買収とAIセグメント）"
    url: "https://www.sec.gov/Archives/edgar/data/0001181412/000162828026052535/spcx-20260630.htm"
    accessedAt: "2026-09-28"
  - label: "xAI公式ドキュメント: Models（現行モデル一覧）"
    url: "https://docs.x.ai/docs/models"
    accessedAt: "2026-09-28"
---

「アルゴリズムを見せろ」というSNSへの長年の不満に、正面から応えた会社が1社だけある。Xは自社の推薦アルゴリズムとファクトチェックの採点コードをまるごとGitHubに公開した。同じ会社の単体の損益は、親会社が上場した今も外から見えない——透明性と不透明さがねじれて同居するXを、2025年のxAI合併という転換点を軸に解剖する。分散型SNSで正反対の道を選んだ[Bluesky](/ja/articles/bluesky)とは、同じ問い（プラットフォームは誰のものか）への別の回答だ。

## サービス解説

Xは旧Twitterが2023年に改称したマイクロブログ型SNSだ。2022年10月にElon Musk氏が非公開化し、2025年3月には氏のAI企業xAIと合併した。2026年2月にはSpaceXがxAIを買収し、Xは上場企業SpaceXの傘下に入っている。

:::fact
Musk氏自身のX投稿（2025年3月28日）によれば、xAIがXを全株式交換で買収し、xAIを800億ドル、Xを330億ドル（企業価値450億ドルから負債120億ドルを控除）と評価する取引で、持株会社xAI Holdings Corpのもとに統合された。X製品責任者Nikita Bier氏は、サブスクリプション収益が年換算10億ドルに達したと述べている（複数メディア報道）。Premium+は2025年2月のGrok 3発表後に月額40ドルへ値上げされ、上位のSuperGrok Heavy（月額300ドル）は2025年7月に追加された。SpaceXのSEC提出書類（2026年第2四半期の10-Q）によれば、SpaceXは2026年2月2日にX.AI Holdings Corp.の買収を完了して完全子会社とし、2026年6月の新規株式公開でクラスA普通株6億3,890万株を1株135ドルで売り出した（Nasdaq・ティッカーSPCX）。
:::

:::pull
自社アルゴリズムを世界に公開する会社の損益は、親会社の決算の1セグメントに溶けて見えない——Xほどこのねじれを体現する企業は他にない。
:::

::scorecard

## UX分析

XのUXは「透明性の実験場」と「Muskの気まぐれな仕様変更」という2つの顔を持つ。

- **Community Notesは業界随一の実装**。文脈の異なる複数ユーザーの合意でノートを表示する仕組みは、中央集権のファクトチェックとも野放しとも違う第三の道を実証しており、採点アルゴリズム自体が公開されているため検証可能性も高い。
- **推薦アルゴリズムの公開は新しいリポジトリへ引き継がれた**。2023年3月に公開された「The Algorithm」リポジトリは7万Star超を集めたが、更新は2025年9月が最後になっている。2026年1月にはxAI名義の「x-algorithm」が公開され、READMEに2026年8月と9月の更新が記録されている。READMEには「このリポジトリに含まれないもの」の節もあり、公開コードが本番の全体と一致するかどうかは外部からは確かめきれない。
- **無料ユーザーへの機能制限が続く**。ブックマーク上限・返信順位・閲覧数上限など、有料化を促す制約が段階的に増えており、UXの一貫性より収益動線が優先される場面が目立つ。
- **Grok統合はタイムラインの外側から侵食する**。投稿の要約・返信生成などAI機能が有料プランのバンドルとして拡大しており、SNSとAIアシスタントの境界が薄れつつある。

## 技術構成

::techstack

:::fact
Manhattan（自社製の多テナント分散データベース）とFinagle（サービス間通信の基盤）は旧Twitter時代から公式エンジニアリングブログで詳述されており、2022年時点の技術更新記事も確認できる。推薦アルゴリズムは2023年3月に「The Algorithm」としてGitHubで公開され（最終コミットは2025年9月）、2026年1月19日からはxAI名義のリポジトリ「x-algorithm」で「For You」フィードの中核コードが公開されている。こちらは主要言語がRustで、2026年9月26日のコミットを確認した。Community Notesの採点コードも公式リポジトリで継続的に更新されている（2026年9月21日のコミットを確認）。xAI合併後はGrok（xAI開発のLLM）がPremium+にバンドルされ、価格帯はGrokのモデル世代（Grok 3→4→4.5）に連動して改定されてきた。2026年9月28日時点でxAI公式ドキュメントが最も高性能と案内するモデルはGrok 4.7だ。
:::

:::guess
当サイトの観測ではCloudflareとEnvoyのヘッダーが確認でき、エッジ層は旧来のTwitter自社インフラから一部クラウド化・標準化が進んでいるとみられる。「The Algorithm」の更新が2025年9月で止まり、2026年1月からxAI名義の「x-algorithm」が更新されている流れは、推薦システムの開発主体がxAI側へ移ったことを反映しているとみられる。Community Notesも継続更新されており、アルゴリズムとモデレーションのコードを公開する方針は維持されていると推測される。
:::

## ビジネスモデル

Xの収益構造は、広告・サブスクリプション・xAIとのAIバンドルの三本柱に再編されつつある。

:::fact
Musk氏の2022年買収は約130億ドルの負債を伴うレバレッジド・バイアウトだったと広く報じられており、以降Xは単体の財務諸表を公開していない。2025年3月のxAI合併でX単体の財務はxAI Holdings Corpという持株会社の中に統合され、2026年2月2日にはSpaceXがそのxAIを買収した。SpaceXは2026年6月に上場し、10-QではXをGrokや計算基盤とともにAIセグメントに含めている。2026年第2四半期のAIセグメント売上は25.61億ドルで、内訳は広告3.67億ドルとAIソリューション・インフラ21.94億ドル。X単体の損益は区分して示されていない。サブスクリプション収益は年換算10億ドル規模に達したと報告されている。
:::

:::guess
広告収益は買収後の広告主離れから回復途上とみられる。親会社の開示で広告売上の規模は四半期ごとに追えるようになったが、Xの利益や費用までは公開情報から検証できない。xAIとの合併は、広告収益の不確実性をAIサブスクリプションという新しい収益源で補う狙いがあると推測される——GrokをXに組み込むことで、Xのユーザー基盤をxAIの顧客獲得コスト削減装置として使う構図だ。X単体の損益が区分開示されていない以上、この賭けが実際に機能しているかどうかを外部から検証する手段は限られている。
:::

透明性と不透明さ。Xは、プラットフォームのアルゴリズムを覗ける稀有な窓を提供しながら、その経営の実態はますます見えなくなっている。SNSの「見える化」を最も進めた企業が、同時に最も「見えない」企業になったという逆説こそ、いまのXを最も正確に言い表す一文かもしれない。
