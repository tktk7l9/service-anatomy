---
service: "Discord"
title: "ゲーマーの溜まり場が国家規模になった — 数兆メッセージを支えるDiscordの現実主義"
description: "2億人が集まるコミュニケーション基盤Discord。ElixirにRustを足し、CassandraをScyllaDBに替え、数兆件のメッセージを9日で移行した現実主義のエンジニアリングと、広告を拒んできたNitro中心のビジネスモデルを公式ブログの一次情報から解剖する。"
lead: "ゲーム中の音声チャットから始まった溜まり場は、いまや数兆件のメッセージを蓄え、200万req/秒でデータベースを叩く国家規模のインフラになった。Discordの技術史は流行の追跡ではなく「困るまで替えない」現実主義の記録だ。公式エンジニアリングブログを一次情報として解剖する。"
category: consumer-app
tags: [chat, community, elixir, rust, realtime]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://discord.com/"
vendor: "Discord"
origin: "US"
heroTheme: "discord"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 3.5 }
techStack:
  - layer: "リアルタイム基盤"
    name: "Elixir (BEAM)"
    confidence: confirmed
    evidence: "Elixir公式サイトの導入事例に、ゲートウェイ等のリアルタイム基盤として大規模採用と明記（2020-10）"
    evidenceUrl: "https://elixir-lang.org/blog/2020/10/08/real-time-communication-at-scale-with-elixir-at-discord/"
  - layer: "メッセージデータベース"
    name: "ScyllaDB (Cassandraから移行)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2023-03）にCassandra 177ノード→ScyllaDB 72ノードへの移行と明記"
    evidenceUrl: "https://discord.com/blog/how-discord-stores-trillions-of-messages"
  - layer: "データサービス層"
    name: "Rust"
    confidence: confirmed
    evidence: "同記事に、APIとDBの間のデータサービスとリクエスト合流(coalescing)をRustで実装と明記"
    evidenceUrl: "https://discord.com/blog/how-discord-stores-trillions-of-messages"
  - layer: "クラウド基盤"
    name: "Google Cloud (Persistent Disk / Local SSD)"
    confidence: confirmed
    evidence: "公式ブログ（2022-08）に「ハードウェアの大半はGoogle Cloud上」と明記。Local SSDとPersistent Diskを組み合わせた「スーパーディスク」構成を解説"
    evidenceUrl: "https://discord.com/blog/how-discord-supercharges-network-disks-for-extreme-low-latency"
  - layer: "音声/映像"
    name: "WebRTC"
    confidence: confirmed
    evidence: "公式ブログ（2018）に同時250万音声ユーザーをWebRTCで捌く構成として明記"
    evidenceUrl: "https://discord.com/blog/how-discord-handles-two-and-half-million-concurrent-voice-users-using-webrtc"
  - layer: "クライアント"
    name: "React / React Native"
    confidence: confirmed
    evidence: "公式ブログにReact Native継続採用の技術判断を明記（2018時点・以降の構成変更は各公式記事参照）"
    evidenceUrl: "https://discord.com/blog/why-discord-is-sticking-with-react-native"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare / cf-cache-status: HIT、2026-07-17）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Discord公式ブログ: How Discord Stores Trillions of Messages（2023-03）"
    url: "https://discord.com/blog/how-discord-stores-trillions-of-messages"
    accessedAt: "2026-07-17"
  - label: "Discord公式ブログ: ネットワークディスクの高速化（2022-08・GCP明記）"
    url: "https://discord.com/blog/how-discord-supercharges-network-disks-for-extreme-low-latency"
    accessedAt: "2026-07-17"
  - label: "Elixir公式: Real time communication at scale with Elixir at Discord（2020-10）"
    url: "https://elixir-lang.org/blog/2020/10/08/real-time-communication-at-scale-with-elixir-at-discord/"
    accessedAt: "2026-07-17"
  - label: "Discord公式ブログ: WebRTCで同時250万音声ユーザー（2018）"
    url: "https://discord.com/blog/how-discord-handles-two-and-half-million-concurrent-voice-users-using-webrtc"
    accessedAt: "2026-07-17"
  - label: "Business of Apps: Discord統計（MAU2億超等の推計・随時更新）"
    url: "https://www.businessofapps.com/data/discord-statistics/"
    accessedAt: "2026-07-17"
---

2015年、ゲーム中に使える軽い音声チャットとして生まれたDiscordは、いつの間にか勉強会・OSS・推し活・AIコミュニティまで、あらゆる「常設の溜まり場」の既定値になった。その裏側は、流行の技術を次々と試す実験場ではない。「困るまで替えない、困ったら躊躇なく替える」という現実主義の見本市だ。

## サービス解説

Discordはサーバー（コミュニティ）単位で集まる、テキスト・音声・映像のコミュニケーションサービスだ。ゲームを起点にしつつ、現在は用途を限定しない常設コミュニティ基盤として使われている。

:::fact
公式エンジニアリングブログによれば、蓄積されたメッセージは2022年初頭時点で数兆件に達し、データベース群はおよそ200万リクエスト/秒を処理する。業界統計ではMAUは2億人超とされる（Business of Apps集計）。収益はNitroとNitro Basicの二段のサブスクリプション、サーバーブースト、および近年導入されたQuests等のスポンサー型施策が柱で、ユーザーデータを売る広告モデルを長年採ってこなかった。
:::

:::pull
Discordの技術選定には一貫した文体がある——「ElixirはRustが必要になるまで使い、CassandraはScyllaDBが必要になるまで使う」。
:::

::scorecard

## UX分析

DiscordのUXは「常設の場所」という比喩に忠実に作られている。

- **サーバー=建物、チャンネル=部屋**。会話がスレッドの奔流に流されるSNSと違い、Discordの会話は場所に属する。この空間メタファーが、コミュニティに「帰ってくる場所」の感覚を与える。
- **音声チャンネルは「入室すれば会える」**。通話を「発信する」のではなく、部屋に入る。この非同期と同期の中間にある設計が、ゲーム由来でありながら雑談・作業通話・イベントまで自然に拡張できた理由だ。
- **ボットAPIが文化を作った**。役職付与、音楽再生、モデレーション、ミニゲーム——サーバー主が自分の場を拡張できるボット生態系は、プラットフォームの機能開発をコミュニティに外注する仕組みとして機能している。
- **弱点は新規参加者の認知負荷**。サーバーごとに構造・ルール・文化が違い、通知設計も複雑だ。「住めば都、入るまで迷宮」という構造的な入りにくさは、成長の上限を規定し続けている。

## 技術構成

::techstack

:::fact
リアルタイム基盤はElixirで、Elixir公式の導入事例に大規模採用が記録されている。メッセージ保存は公式ブログ（2023年3月）に詳しく、Cassandra 177ノードの運用が限界を迎え、ScyllaDB 72ノードへ移行。過去メッセージ取得のp99レイテンシは40〜125msから15msへ、書き込みは5〜70msから5msへ改善した。移行ツールはRustで書き直され、秒間320万件を処理して数兆件を9日間で移し切った。APIとDBの間にはRust製データサービスを挟み、ホットパーティションへのリクエストを合流させる。ハードウェアの大半はGoogle Cloud上で、Local SSDとPersistent Diskを組み合わせた「スーパーディスク」でI/O待ちを約半減させたことも公式に解説されている。音声・映像はWebRTCベースだ。
:::

:::guess
構成の変遷から読み取れるのは「言語もDBも道具であり、痛みが実測されるまで替えない」という運用哲学だ。ElixirとRustの分担——並行接続の管理はBEAM、CPUバウンドな高速処理はRust——は、両言語の教科書的な適所適材として今後も参照され続けるだろう。CDNとしてCloudflareが観測されるが、静的アセット中心の利用とみられ、リアルタイム経路は自前のゲートウェイ群が担っていると推測される。
:::

## ビジネスモデル

Discordの収益設計は、SNSの標準である広告モデルからの意図的な逸脱として読むのが正しい。

:::fact
柱はNitro（上位）とNitro Basic（廉価）のサブスクリプションで、アップロード上限やカスタム絵文字などの快適さを売る。コミュニティ側にはサーバーブーストという「場への課金」があり、近年はゲーム連動のQuestsなどスポンサー型の収益も導入された。
:::

:::guess
推計ではNitro系が収益の過半を占めるとされ、広告を排してきた歴史はプライバシーとコミュニティの居心地をブランド資産に変えてきた。一方でMAU2億人という規模に対して収益化率は控えめで、報道されるIPO準備は「居心地を壊さずに単価を上げる」という難題への回答を市場に示す試験になる。Questsのような「広告ではなく報酬」型の設計は、その妥協点の探索と読める。
:::

ゲーマー向けチャットが国家規模のインフラになるまで、Discordは一度も「全部作り直し」をしていない。困った箇所だけを、実測に基づいて、確実に強い道具へ置き換える——数兆メッセージの裏にあるのは、この地味で強靭な工学の文体だ。
