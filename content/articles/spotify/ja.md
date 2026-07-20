---
service: "Spotify"
title: "「Spotifyモデル」はもう存在しない — 実在するのは1万個のリポジトリを一斉更新する仕組みだった"
description: "音楽ストリーミングの巨人Spotify。アジャイル業界で伝説化した「スクワッド」組織論の実態と現在地、KafkaからGoogle Cloud Pub/Subへの移行、数千リポジトリを自動一斉更新する「Fleet Management」までを公式エンジニアリングブログとSEC提出書類から解剖する。"
lead: "「Spotifyモデル」という組織論を知らないアジャイル実践者はいないだろう。だが当のSpotify自身は、2012年のスナップショットに過ぎなかったその型をとうに手放している。伝説の裏で今も動いているのは、もっと地味で、もっと効いている仕組みだ。"
category: media
tags: [music-streaming, cloud-migration, engineering-culture, subscription, audio]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://open.spotify.com/"
vendor: "Spotify Technology S.A."
origin: "SE"
heroTheme: "spotify"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "クラウド基盤"
    name: "Google Cloud Platform"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、2016年から段階的にGCPへ移行し2018年に自社データセンター4拠点すべてを退役させたと明記"
    evidenceUrl: "https://engineering.atspotify.com/2019/12/views-from-the-cloud-a-history-of-spotifys-journey-to-the-cloud-part-1-2"
  - layer: "イベント配信基盤"
    name: "Google Cloud Pub/Sub (旧Kafkaから移行)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログに、旧バージョンのKafkaベース基盤から2016〜2017年にGoogle Cloud Pub/Subへ移行し2017年2月に旧システムを廃止したと明記"
    evidenceUrl: "https://engineering.atspotify.com/2019/11/spotifys-event-delivery-life-in-the-cloud"
  - layer: "インフラ運用モデル"
    name: "Fleet Management（数千リポジトリの自動一斉変更）"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2023-04）に、個別対応ではなく数千リポジトリを自動的に一斉変更する運用へ転換し、Log4j脆弱性対応を9時間で本番の80%に展開したと明記"
    evidenceUrl: "https://engineering.atspotify.com/2023/04/spotifys-shift-to-a-fleet-first-mindset-part-1"
  - layer: "エッジ/ロードバランサ"
    name: "Envoy"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: envoy / x-envoy-upstream-service-time、2026-07-20）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Spotify公式エンジニアリングブログ: Fleet Management at Spotify Part 1（2023-04）"
    url: "https://engineering.atspotify.com/2023/04/spotifys-shift-to-a-fleet-first-mindset-part-1"
    accessedAt: "2026-07-20"
  - label: "Spotify公式エンジニアリングブログ: クラウド移行の歴史（2019-12）"
    url: "https://engineering.atspotify.com/2019/12/views-from-the-cloud-a-history-of-spotifys-journey-to-the-cloud-part-1-2"
    accessedAt: "2026-07-20"
  - label: "Spotify公式エンジニアリングブログ: Event Delivery – Life in the Cloud（2019-11・Kafka→Pub/Sub移行）"
    url: "https://engineering.atspotify.com/2019/11/spotifys-event-delivery-life-in-the-cloud"
    accessedAt: "2026-07-20"
  - label: "SEC Form 6-K（Spotify Technology S.A.・2025年通期決算）"
    url: "https://www.sec.gov/Archives/edgar/data/1639920/000114036125040271/ef20057592_ex99-1.htm"
    accessedAt: "2026-07-20"
  - label: "45 Degrees: The death of the 'Spotify Model'"
    url: "https://45degrees.be/the-death-of-the-spotify-model/"
    accessedAt: "2026-07-20"
---

「スクワッド」「トライブ」「チャプター」「ギルド」——アジャイル業界でこの4つの単語を知らない人はいないだろう。「Spotifyモデル」として世界中の企業がコピーしようとした組織論だ。だが当のSpotifyは、この型を10年以上前に手放している。伝説の裏側で今も現役なのは、もっと地味で、もっと規模の大きい仕組みだった。

## サービス解説

Spotifyはスウェーデン発の音楽・ポッドキャスト・オーディオブックのストリーミングサービスだ。2006年創業、現在は米国預託証券としてNYSE上場している。

:::fact
SEC提出書類（2025年通期決算）によれば、2025年通期の月間アクティブユーザー（MAU）は7億5,000万人超、有料会員（Premium）は2億9,000万人に達し、年間売上は171.9億ユーロ（前年比9.7%増）、うちPremium会員収益が153.5億ユーロと全社売上の89.3%を占める。「Spotifyモデル」という組織論は、開発者Henrik Kniberg氏とAnders Ivarsson氏が2012年に発表した論文『Scaling Agile @ Spotify』が起源で、両氏自身が後に「当時のスナップショットに過ぎず、汎用フレームワークとして意図したものではない」と繰り返し説明している。
:::

:::pull
世界が「Spotifyモデル」をコピーし続けている間に、Spotify自身はとっくに次の問題——1万個のリポジトリをどう一斉に動かすか——に移っていた。
:::

::scorecard

## UX分析

SpotifyのUXは「機械学習によるキュレーション」を核に据え、能動的な検索を最小化する方向に磨き込まれている。

- **Discover Weekly / Wrapped が体験の顔になった**。個人の再生履歴から自動生成されるプレイリストと年次まとめは、機能というよりSpotifyというブランドそのものの象徴になっている。
- **無料プランは制約込みで「体験の入口」として機能する**。広告と一部機能制限のある無料プランは、有料転換のファネルであると同時に、音楽以外（ポッドキャスト・オーディオブック）への接触機会にもなっている。
- **オーディオブックへの拡張はUXの一貫性を試している**。音楽アプリの中に本を組み込む拡張は、既存ユーザーには機能過多に映る場面もあり、プラットフォームの守備範囲が広がるほど「音楽アプリとしてのシンプルさ」との綱引きが続く。
- **値上げへの反応は静かだが確実に効いている**。Premium収益が売上の9割近くを占める以上、価格改定への感応度がビジネス全体の健全性に直結する構造だ。

## 技術構成

::techstack

:::fact
公式エンジニアリングブログによれば、Spotifyは2016年から段階的にGoogle Cloud Platformへ移行し、2018年までに自社運用してきた4つのデータセンターすべてを退役させた。イベント配信基盤はもともと旧バージョンのKafkaとHadoopに依存していたが、2016〜2017年にGoogle Cloud Pub/Subへ移行し、2017年2月に旧システムを完全停止した。2023年4月の公式ブログでは、数千に及ぶリポジトリを個別対応ではなく自動的に一斉変更する「Fleet Management」への転換を報告しており、Log4j脆弱性の修正を9時間で本番環境の80%に展開できた事例を紹介している。あるJavaランタイムの一斉アップグレードには8ヶ月・約2,000件の半自動プルリクエストを要したとも記されている。
:::

:::guess
KafkaからGoogle Cloud Pub/Subへの移行は、当時のKafkaバージョンがイベントの永続化に対応しておらずHadoopが単一障害点になっていたという技術的制約への対処であり、汎用的な「Kafka嫌い」ではなく具体的な設計上の弱点への反応だったとみられる。Fleet Managementへの投資は、開発チーム数が数百に及ぶ組織で「変更を各チームの善意に頼る」運用が限界を迎えたことの表れで、「Spotifyモデル」が体現した自律分散組織の理想と、実際の大規模運用に必要な中央集権的な一括制御は、当のSpotify社内でも綱引きが続いてきたことを示唆している。
:::

## ビジネスモデル

Spotifyの収益は、Premium会員のサブスクリプションが9割近くを占める構造だ。

:::fact
SEC提出書類によれば、2025年通期売上171.9億ユーロのうちPremium会員収益は153.5億ユーロ（89.3%）、広告収益を含むAd-Supported事業は残り約1割にとどまる。有料会員は2億9,000万人、MAUは7億5,000万人を超え、2026年第1四半期はさらなる増加が見込まれている。
:::

:::guess
Premium収益への極端な依存は、音楽ストリーミング事業の粗利率がレーベルへの原盤使用料支払いで構造的に薄いことの裏返しとみられ、ポッドキャスト・オーディオブックへの拡張は、この薄利構造を補う高粗利事業の獲得が狙いだったと推測される。無料会員の規模（MAUと有料会員の差、4億人超）は広告在庫として大きな潜在価値を持つが、Ad-Supported事業の売上比率がなお1割程度にとどまっている点は、音楽以外のコンテンツで広告収益を本格的に立ち上げられるかが今後の焦点であることを示している。
:::

「Spotifyモデル」という神話は、実物のSpotifyよりも長生きしている。当のSpotifyは自律的なスクワッドの理想を掲げながら、1万個のリポジトリを一斉に動かす中央集権的な仕組みを黙々と作っていた——理想と規模の現実がせめぎ合う様子こそが、この会社を最もよく物語っている。
