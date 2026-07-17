---
service: "Bluesky"
title: "「アカウントごと引っ越せるSNS」の実験台 — Blueskyが4,300万人で試すプロトコルの賭け"
description: "分散型SNSのBlueskyを解剖する。PDS/Relay/AppViewを分離するAT Protocolの連合アーキテクチャ、DIDによるアカウント移行可能性、積み替え可能なモデレーション、$100MシリーズBと未完成の収益化までを公式ドキュメント一次情報で読み解く。"
lead: "SNSの不満は数あれど、根っこは一つ——アカウントも読者も運営に人質に取られていることだ。Blueskyは「アカウントごと引っ越せる」を技術仕様として実装し、4,300万人の実ユーザーでそれを試している。プロトコルの設計から未完成のビジネスまでを解剖する。"
category: media
tags: [social-media, decentralized, at-protocol, open-source, community]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://bsky.app/"
vendor: "Bluesky Social, PBC"
origin: "US"
heroTheme: "bluesky"
scores: { product: 4.0, ux: 4.0, tech: 4.5, business: 2.5 }
techStack:
  - layer: "プロトコル"
    name: "AT Protocol (OSS)"
    confidence: confirmed
    evidence: "公式ドキュメントに、Bluesky本体をatproto上の1アプリケーションとして構築と明記"
    evidenceUrl: "https://docs.bsky.app/docs/advanced-guides/atproto"
  - layer: "連合アーキテクチャ"
    name: "PDS / Relay / AppView 分離"
    confidence: confirmed
    evidence: "公式の連合アーキテクチャ解説に、データ保管(PDS)・全網クロール(Relay)・フィード組み立て(AppView)の3役分離を明記"
    evidenceUrl: "https://docs.bsky.app/docs/advanced-guides/federation-architecture"
  - layer: "アイデンティティ"
    name: "DID + 署名付きデータリポジトリ"
    confidence: confirmed
    evidence: "公式ドキュメントに、サーバーの協力なしにPDS移行できるようDIDと署名リポジトリで検証すると明記"
    evidenceUrl: "https://docs.bsky.app/docs/advanced-guides/atproto"
  - layer: "リファレンス実装"
    name: "TypeScript (公式OSSモノレポ)"
    confidence: confirmed
    evidence: "公式リポジトリbluesky-social/atprotoの主要言語（GitHub APIで確認・2026-07-17）"
    evidenceUrl: "https://github.com/bluesky-social/atproto"
  - layer: "セルフホスト"
    name: "PDS公式コンテナ配布"
    confidence: confirmed
    evidence: "公式リポジトリでPDSのコンテナイメージとcompose構成を配布"
    evidenceUrl: "https://github.com/bluesky-social/pds"
  - layer: "モデレーション"
    name: "Ozone (積み替え可能なラベラー)"
    confidence: confirmed
    evidence: "公式ブログに、モデレーションを独立サービス(ラベラー)として分離しOzoneをOSS公開と明記"
    evidenceUrl: "https://docs.bsky.app/blog/blueskys-moderation-architecture"
sources:
  - label: "Bluesky公式ドキュメント: 連合アーキテクチャ（PDS/Relay/AppView）"
    url: "https://docs.bsky.app/docs/advanced-guides/federation-architecture"
    accessedAt: "2026-07-17"
  - label: "Bluesky公式ドキュメント: The AT Protocol"
    url: "https://docs.bsky.app/docs/advanced-guides/atproto"
    accessedAt: "2026-07-17"
  - label: "Bluesky公式ブログ: $100MシリーズB開示（2026-03・ユーザー4,300万/公開レコード約200億）"
    url: "https://bsky.social/about/blog/03-19-2026-series-b"
    accessedAt: "2026-07-17"
  - label: "Bluesky公式ブログ: モデレーションアーキテクチャ"
    url: "https://docs.bsky.app/blog/blueskys-moderation-architecture"
    accessedAt: "2026-07-17"
  - label: "TechCrunch: Bluesky announces $100M Series B after CEO transition（2026-03）"
    url: "https://techcrunch.com/2026/03/19/bluesky-announces-100m-series-b-after-ceo-transition/"
    accessedAt: "2026-07-17"
---

TwitterがXになる過程で、世界は「SNSは運営の持ち物で、ユーザーは間借り人」という当たり前を再確認させられた。Blueskyはその当たり前への技術的な反論だ。アカウント・データ・フォローグラフを運営から切り離せる設計を、理念ではなくプロトコル仕様として実装し、いま4,300万人の実トラフィックで検証している。

## サービス解説

Blueskyは一見、往年のTwitterによく似たマイクロブログSNSだ。しかし本体はその下にあるAT Protocol（atproto）で、Blueskyアプリは「プロトコル上の1アプリケーション」に過ぎない。

:::fact
公式ブログ（2026年3月）によれば、2025年4月にBain Capital Cryptoをリードとして1億ドルのシリーズBを実施（累計調達は1.2億ドル超）。ユーザーは2024年10月のシリーズA時点の1,300万人から4,300万人超へ成長し、ネットワーク上の公開レコード（投稿・いいね等）は約200億件、atproto上のアプリは毎週1,000以上使われ、SDKは月間40万回以上ダウンロードされるとする。運営は公益法人（PBC）で、創業CEOのJay GraberはChief Innovation Officerへ移った。
:::

:::pull
Blueskyの製品は「Xの代替アプリ」ではない。「SNSの運営を交代可能にする仕様」であり、アプリはその実演にすぎない。
:::

::scorecard

## UX分析

Blueskyの体験設計は、「分散を意識させない分散SNS」に徹している。

- **見た目は保守的、思想は過激**。UIは旧Twitterの文法をほぼ踏襲し、乗り換えの学習コストを最小化する。分散・連合の複雑さはプロトコル側に沈め、表層では見せない判断が一貫している。
- **フィードを選べる・作れる**。アルゴリズムは単一の「For You」ではなく、カスタムフィードとして選択・自作できる。タイムラインの編集権を運営からユーザー側に寄せた、思想が最も体験に出ている機能だ。
- **モデレーションも「積み替え可能」**。ラベラーを購読する方式で、何を見たくないかの判断を複数の主体から選べる。中央集権の一律基準とも、無法地帯とも違う第三の道を狙う。
- **弱点はネットワーク効果と「普通の人への説明」**。友人がいなければSNSは始まらず、DIDやPDSの価値は移行が必要になるまで見えない。保険と同じで、効いてから初めてありがたみが分かる製品は、マーケティングが構造的に難しい。

## 技術構成

::techstack

:::fact
公式ドキュメントによれば、ネットワークはPDS（個人データサーバー・投稿等のリポジトリを署名付きで保管）、Relay（全網をクロールして一本のfirehoseに束ねる）、AppView（firehoseからフィードや集計を組み立てる）の3役に分離される。ユーザーはDIDで識別され、データリポジトリは署名検証できるため、元のサーバーの協力なしにPDSを引っ越せる。リファレンス実装はTypeScriptでOSS公開され、セルフホスト用のPDSコンテナも公式配布されている。モデレーションはOzoneというOSSのラベラーとして本体から分離されている。
:::

:::guess
この構成は「連合はするが、まず動くものを中央で運用する」という現実主義的な分散だ。Relayは資源を食うため、当面は少数の大規模事業者と多数の部分プロバイダに収斂すると公式自身が見込んでおり、完全なP2Pではなく「交代可能な中央」を作る設計思想と読める。ActivityPub（Mastodon等）との最大の違いはアカウント移行可能性を仕様の中心に置いた点で、「サーバー選び」をユーザーに強いるフェデレーションの失敗から学んだ跡がうかがえる。
:::

## ビジネスモデル

Blueskyの解剖で最も未完成な器官が収益化だ。

:::fact
公式ブログはシリーズBの資金使途を成長とオープンなソーシャルインフラの構築に置いており、現時点で広告収益や確立したサブスクリプション収益は公表されていない。運営は公益法人で、監視型広告への依存を避ける方針を繰り返し表明している。
:::

:::guess
報道ではBluesky+と呼ばれるサブスクリプションの展開が言及されており、収益化は「体験を歪めない課金」——カスタムドメイン、上位機能、開発者向けサービス——の組み合わせになるとみられる。ただし4,300万ユーザー規模のインフラ費用をサブスクだけで賄えるかは未知数で、シリーズBの1億ドルは実質的に「収益モデル発明のための滑走路」だ。プロトコルが成功するほどBluesky社自身は代替可能になるという構造的ジレンマを、公益法人という器とエコシステム内での先行者優位でどう解くかが、この実験の本当の見どころだろう。
:::

Blueskyが証明しようとしているのは、SNSが良くなることではなく、SNSが悪くなったときに逃げられることだ。出口が保証された場所でしか、人は安心して住めない——4,300万人が参加するこの社会実験は、ソーシャルメディアの所有権をめぐる10年越しの問いに、初めて実装で答えようとしている。
