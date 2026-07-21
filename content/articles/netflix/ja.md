---
service: "Netflix"
title: "クラウドに全部を預けた会社が、配信だけは自前の箱を置く — Netflixの二層構造"
description: "7年かけて自社データセンターを捨てAWSへ完全移行したNetflixは、動画のバイトを運ぶCDNだけは自作アプライアンスを世界のISPに無償で置く。HTTPヘッダー1行に現れた「制御はクラウド・配信は自前」の二層構造を、公式資料とSEC提出書類から解剖する。"
lead: "netflix.comにリクエストを送ると、viaヘッダーにAWS us-west-2のインスタンスと、東京のインターネットエクスチェンジに置かれたnflxvideo.netの機器が1行で並ぶ。クラウド移行の伝道師でありながら、動画配信だけは自前のハードウェアを1,000超のISPに配る——この一見矛盾した設計の合理を解剖する。"
category: media
tags: [streaming, video, aws, cdn, microservices]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://www.netflix.com/"
vendor: "Netflix, Inc."
origin: "US"
heroTheme: "netflix"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 5.0 }
techStack:
  - layer: "クラウド基盤"
    name: "AWS"
    confidence: confirmed
    evidence: "AWS公式導入事例に、4つのAWSリージョンで運用し数千のオートスケーリンググループでトラフィックを処理、Aurora・EKS・EMR等を利用と明記"
    evidenceUrl: "https://aws.amazon.com/solutions/case-studies/netflix/"
  - layer: "動画配信CDN"
    name: "Open Connect (自社CDNアプライアンス)"
    confidence: confirmed
    evidence: "公式Open Connectサイトに、1,000超のISPと連携し、自社設計のアプライアンス（OCA）を条件を満たすISPへ無償で設置提供（ISP側負担はラック・電源・接続のみ）と明記"
    evidenceUrl: "https://openconnect.netflix.com/en/"
  - layer: "カオスエンジニアリング"
    name: "Chaos Monkey (Simian Army)"
    confidence: confirmed
    evidence: "公式テックブログに、本番環境で意図的に障害を起こすSimian Army（Chaos Monkey等）の設計と運用を明記。カオスエンジニアリングという分野の出発点"
    evidenceUrl: "https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116"
  - layer: "エッジプロキシ"
    name: "Envoy"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: envoy・x-envoy-upstream-service-time、2026-07-21）"
  - layer: "公式サイト配信"
    name: "AWS + Open Connect"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測で、viaヘッダーにus-west-2のEC2インスタンスIDと東京IXのnflxvideo.netホストが併記される（2026-07-21）。制御プレーン=AWS・配信エッジ=Open Connectの二層が1行で観測できる"
    evidenceUrl: "https://www.netflix.com/"
sources:
  - label: "SEC Form 10-K（Netflix, Inc.・2025年度通期・2026-01-23提出）"
    url: "https://www.sec.gov/Archives/edgar/data/1065280/000106528026000034/nflx-20251231.htm"
    accessedAt: "2026-07-21"
  - label: "AWS公式導入事例: Netflix on AWS（4リージョン・Aurora/EKS/EMR）"
    url: "https://aws.amazon.com/solutions/case-studies/netflix/"
    accessedAt: "2026-07-21"
  - label: "Netflix公式: Open Connect（ISP向け自社CDNプログラム）"
    url: "https://openconnect.netflix.com/en/"
    accessedAt: "2026-07-21"
  - label: "Netflix公式テックブログ: The Netflix Simian Army（Chaos Monkeyの原典・2011）"
    url: "https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116"
    accessedAt: "2026-07-21"
---

## サービス解説

Netflixは世界190カ国超で展開する映像ストリーミングサービスだ。1997年にDVD郵送レンタルとして始まり、2007年にストリーミングへ転換。オリジナル作品への大規模投資と、視聴データに基づくパーソナライズで、テレビの視聴習慣そのものを置き換えてきた。

:::fact
SEC提出書類（10-K）と2026年1月の決算発表によれば、2025年度通期の売上は452億ドルで前年比16%増、営業利益は133億ドル（営業利益率29.5%）、純利益は110億ドル。第4四半期に有料メンバーシップは3億2,500万を突破し、広告収入は15億ドル超と前年の2.5倍に伸びた。2026年通期のガイダンスは507億〜517億ドルで、広告収入はさらに倍増を見込む。
:::

:::pull
viaヘッダー1行に、この会社の設計思想が全部書いてある。計算はAWSに預け、バイトは自前の箱で運ぶ。
:::

::scorecard

## UX分析

NetflixのUXは「選ぶ手間を消す」ことに全振りされている。その洗練と、その代償の両方が観察できる。

- **サムネイルまで個人化される**。同じ作品でも利用者の視聴履歴によって表示される画像が変わる。カタログを「探す棚」ではなく「自分向けの提案」として提示する設計は、他の動画サービスの標準を作った。
- **再生までの摩擦が極端に少ない**。次エピソードの自動再生、イントロスキップ、途中再開の同期——「見続ける」ための障害物を系統的に排除している。一方で自動再生は視聴時間を最大化する装置でもあり、意図的に見るのをやめる操作をユーザー側に要求する。
- **世界同時配信と多言語体験**。字幕・吹替の品質と網羅性が「非英語作品の世界ヒット」を可能にし、コンテンツ戦略とUXが直結している。
- **広告付きプランで価格の階段を作った**。安い入口から広告なし・高画質・同時視聴数へ登る段差の設計は、解約ではなくダウングレードへ誘導する退路の用意でもある。

## 技術構成

::techstack

:::fact
Netflixは2008年の自社データセンター障害を機にクラウド移行を開始し、7年をかけて移行を完了した。AWS公式導入事例には、現在4つのAWSリージョンで数千のオートスケーリンググループを運用し、Aurora・EKS・EMR等を利用していると明記されている。一方、動画のバイトを運ぶCDNは自社開発のOpen Connectで、公式サイトによれば1,000超のISPと連携し、自社設計のアプライアンスを条件を満たすISPに無償で設置している。本番環境で意図的に障害を注入するChaos Monkey（Simian Army）はこの会社が生んだ運用文化で、カオスエンジニアリングという分野の原点になった。当サイトの実観測でも、netflix.comへのリクエストのviaヘッダーにus-west-2のインスタンスと東京IXのnflxvideo.netホストが併記され、二層構造がそのまま見える。
:::

:::guess
制御プレーンをAWSに預けながら配信だけ自前に戻した判断は、コスト構造の非対称に帰着するとみられる。ログイン・推薦・課金のトラフィックは複雑だが総量は小さく、クラウドの柔軟性が勝つ。動画のバイトは単純だが総量が桁違いで、クラウドの転送課金では成立しない——ISPの網内に箱を置いて配信をローカル化する方が、自社にもISPにも安い。ChaosMonkeyに象徴される「壊れる前提の設計」も、数百のマイクロサービスをクラウドで動かす以上、障害を例外でなく日常として扱うしかないという規模の帰結と推測される。
:::

## ビジネスモデル

Netflixの収益はサブスクリプションを中核に、広告付きプランという第二のエンジンが立ち上がりつつある。

:::fact
2025年度は売上452億ドル・営業利益率29.5%と、値上げと広告の両輪で利益率が前年の26.7%から改善した。広告収入は15億ドル超で前年比2.5倍、2026年はさらに倍増の見込みと公表されている。フリーキャッシュフローは95億ドルに達した。
:::

:::guess
広告事業の急伸は、加入者数の成長が飽和に近づく中で「1加入者あたりの収益化面」を増やす転換とみられる。四半期ごとの加入者数開示をやめた判断も、評価軸を「人数」から「視聴時間と収益」へ移す意図の表れだろう。ライブイベントやゲームへの拡張は、解約率を下げる「毎日開く理由」への投資であり、ストリーミング競争の主戦場が獲得から維持へ移ったことを示していると推測される。
:::

自社データセンターを捨てた最初の巨大サービスであり、同時にCDNだけは自前ハードウェアに回帰した会社。Netflixの解剖が示すのは、「クラウドか自前か」という二択の不毛さだ。ワークロードごとに経済が違う以上、答えは常に混成になる——viaヘッダーの1行は、その教科書的な実例である。
