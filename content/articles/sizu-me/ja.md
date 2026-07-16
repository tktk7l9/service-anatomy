---
service: "しずかなインターネット"
title: "数字を消したら、文章が戻ってきた — しずかなインターネットの逆張り設計"
description: "いいねもPVもランキングもない「文章の書き散らし場所」しずかなインターネット。Zenn・Nani翻訳のcatnoseがSNS疲れの時代に建てた小さな聖域の、思想と技術構成（Next.js/Cloud Run/Cloudflare）を解剖する。"
lead: "いいねの数も、閲覧数も、ランキングも見えない。しずかなインターネットは、エンゲージメントを最大化する現代Webの文法を意図的に捨てた「日記とエッセイのための場所」だ。ZennとNani翻訳を生んだcatnoseがこの逆張りをどう設計し、どう維持しているかを解剖する。"
category: media
tags: [writing, blog, nextjs, cloudflare, indie-dev]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://sizu.me/home"
vendor: "catnose"
origin: "JP"
heroTheme: "sizu-me"
scores: { product: 4.0, ux: 4.5, tech: 4.0, business: 3.0 }
techStack:
  - layer: "フレームワーク"
    name: "Next.js (App Router)"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー観測（x-powered-by: Next.js、2026-07-16）と開発者自身の技術解説（2023-11）"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "HTTPヘッダー観測（cf-ray、2026-07-16）と開発者の技術解説"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "ホスティング"
    name: "Google Cloud Run"
    confidence: likely
    evidence: "開発者の技術解説（2023-11時点）。以降の構成変更の有無は非公開"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "データベース"
    name: "PlanetScale (MySQL)"
    confidence: likely
    evidence: "開発者の技術解説（2023-11時点）。以降の構成変更の有無は非公開"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "キャッシュ"
    name: "Upstash Redis"
    confidence: likely
    evidence: "開発者の技術解説（2023-11時点）"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "画像/ファイルストレージ"
    name: "Cloudflare R2"
    confidence: likely
    evidence: "開発者の技術解説（2023-11時点）"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
  - layer: "認証"
    name: "NextAuth.js + Firebase Authentication"
    confidence: likely
    evidence: "開発者の技術解説（2023-11時点）"
    evidenceUrl: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
sources:
  - label: "しずかなインターネット（サービス紹介）"
    url: "https://sizu.me/home"
    accessedAt: "2026-07-16"
  - label: "Zenn: しずかなインターネットの技術構成（開発者catnose本人による解説・2023-11）"
    url: "https://zenn.dev/catnose99/articles/f8a90a1616dfb3"
    accessedAt: "2026-07-16"
  - label: "しずかなインターネット: 裏側を大幅アップデート（catnose・2024-11）"
    url: "https://sizu.me/catnose/posts/dh12msvx92c3"
    accessedAt: "2026-07-16"
  - label: "laiso: 「しずかなインターネット」の技術スタックを調べる（外部分析）"
    url: "https://laiso.hatenablog.com/entry/2023/11/23/210736"
    accessedAt: "2026-07-16"
---

現代のWebサービスは、あらゆる数字を見せることで人を駆動してきた。いいね、閲覧数、フォロワー、ランキング。しずかなインターネットは、その全部を消した。「たくさんの人に読まれなくていい」と公式に言い切る文章サービス——当サイトで[Nani翻訳](/ja/articles/nani-translation)を取り上げたcatnose氏の、もうひとつの代表作を解剖する。

## サービス解説

しずかなインターネットは、日記やエッセイを書くための「文章の書き散らしサービス」だ。書いた文章は公開できるが、読まれることを競う仕組みは何もない。

:::fact
公式の紹介ページは本サービスを「日記やエッセイを書くのにちょうどいい、文章書き散らしサービス」と説明し、「たくさんの人に読まれなくていい」ことを明示的に掲げる。閲覧数やいいね数のような数字を強調しないデザインで、有益な情報発信を求めない。運営は個人開発者のcatnose氏。2023年11月に公開され、開発者自身がZennで技術構成を解説している。
:::

:::pull
たくさんの人に読まれなくていい——サービス紹介にこの一文を置ける文章プラットフォームは、世界でもほとんど存在しない。
:::

::scorecard

## UX分析

しずかなインターネットのUXは「引き算の設計」の見本市だ。

- **数字の不在が行動を変える**。PVもいいねも見えなければ、ウケる文章ではなく書きたい文章を書くようになる。SNSの承認ループから外れることが、このサービスの中核機能であり、機能の不在こそが機能になっている。
- **「書き散らし」という言葉の設計**。作品でも記事でもなく書き散らし。この語の選択が、推敲や有益さへのプレッシャーを外し、書くことのハードルを地面まで下げている。
- **エディタ品質は本格派**。Zennを作った開発者らしく、書く道具としての完成度は高い。「ゆるい思想 × 硬い実装」の組み合わせが、単なるミニマリズム系サービスとの違いを生む。
- **構造的な弱点は発見性のなさ**。読まれる仕組みを捨てたことは、新規ユーザーの流入経路も細いことを意味する。成長はcatnose氏自身の発信力と口コミに依存する。

X（旧Twitter）的な世界への疲労が広がった時期に登場したことも含め、「アンチ・エンゲージメント」という明確なポジションを取った稀有な事例だ。

## 技術構成

::techstack

:::fact
開発者自身の技術解説（2023年11月）によれば、公開時の構成はNext.js（App Router）をGoogle Cloud Runでホストし、CDNにCloudflare、DBにPlanetScale（MySQL）、キャッシュにUpstash Redis、ファイルにCloudflare R2、認証にNextAuth.js + Firebase Authenticationという組み合わせだった。当サイトの2026年7月16日の観測でも、Next.js（x-powered-by）とCloudflare（cf-ray）は現行構成として確認できた。
:::

:::guess
2024年11月に「裏側の大幅アップデート」が予告されており、また2023年の解説にあるPlanetScaleは2024年に無料プランを廃止しているため、データベース層は現在までに移行・変更されている可能性がある。表の確度ラベルを likely に留めているのはこのためだ。Nani翻訳（Turso/Upstash/Vercel）との構成の違いを見ると、catnose氏はプロダクトごとに「その時点で最も安く維持できるマネージド構成」を組み替えており、個人開発の複数プロダクト運用における固定費最小化の一貫した戦略とみられる。
:::

## ビジネスモデル

しずかなインターネットには、収益を最大化する装置がほとんど見当たらない。

:::fact
サービス内にはスポンサーやサポートへの導線が存在するが、公式の紹介ページに料金プランの記載はない。広告も表示されない。
:::

:::guess
数字を見せない思想は、広告モデル（=PV最大化）と原理的に両立しないため、収益はユーザーからの直接支援と低コスト運用の組み合わせで成立させているとみられる。catnose氏のポートフォリオ全体で見れば、しずかなインターネットは単体の収益源というより、思想の表明とコミュニティの維持——そしてZennやNani翻訳で実証済みの「開発者自身が最強の集客チャネル」という構造の一角を担っていると推測される。
:::

エンゲージメントの最大化が唯一の正解とされたWebで、その正解を静かに降りる。しずかなインターネットは、プロダクトの差別化が「何を足すか」ではなく「何を捨てられるか」で決まり得ることを示す、小さくも鋭い反例だ。
