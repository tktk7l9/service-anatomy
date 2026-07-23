---
service: "TikTok"
title: "米国事業だけ、別会社になった — TikTokが2026年に背負った「合弁アプリ」という構造"
description: "2016年にByteDanceが公開したショート動画TikTok。2025年9月の枠組み合意を経て、2026年1月22日に米国事業だけを運営する新会社「TikTok USDS Joint Venture LLC」が稼働を始めた。Oracle・Silver Lake・MGXが主要株主となり、ByteDanceの持分は19.9%に縮小する——世界で唯一、一国の事業だけが別会社化されたアプリの構造を公式情報から解剖する。"
lead: "TikTokは今、世界共通の1つの会社ではない。2026年1月22日、米国事業だけを切り出して運営する新会社「TikTok USDS Joint Venture LLC」が稼働を始めた。Oracle・Silver Lake・MGX Fund Managementがそれぞれ15%、ByteDanceは19.9%——「For You」フィードという同じ体験を、米国だけ別の会社が運営するという、他のどのグローバルアプリにも例のない構造がここにある。"
category: media
tags: [short-video, social-media, algorithm, e-commerce, bytedance]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://www.tiktok.com/"
vendor: "TikTok Ltd."
origin: "CN"
heroTheme: "tiktok"
scores: { product: 4.0, ux: 4.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "運営主体（グローバル）"
    name: "TikTok Ltd.（ByteDance子会社）"
    confidence: confirmed
    evidence: "ByteDance公式サイトのプロダクト一覧に、TikTok・TikTok Shop・CapCutが自社製品として明記されていることを実確認"
    evidenceUrl: "https://www.bytedance.com/en/"
  - layer: "米国事業運営主体（2026年新設）"
    name: "TikTok USDS Joint Venture LLC"
    confidence: confirmed
    evidence: "同社の公式サイトに、データ保護・アルゴリズムセキュリティ・信頼性と安全性等を担う米国事業専用の合弁会社として稼働していることが明記されている（2026年時点）"
    evidenceUrl: "https://usdsjv.tiktok.com/"
  - layer: "推薦アルゴリズム"
    name: "「For You」レコメンドシステム"
    confidence: likely
    evidence: "Wikipediaの集約情報によれば、フォロー関係よりも視聴中の行動シグナルを重視するAI主導のフィードと説明されている。TikTok公式の技術詳細ページは今回未確認のためlikely扱い"
  - layer: "コマース基盤"
    name: "TikTok Shop"
    confidence: confirmed
    evidence: "ByteDance公式サイトのプロダクト一覧にTikTok Shopが明記されている。英国での先行展開後、2022年10月に米国展開が発表されたとWikipediaに記載"
    evidenceUrl: "https://www.bytedance.com/en/"
sources:
  - label: "ByteDance公式: 会社概要（設立年・プロダクト一覧・取締役会・主要投資家）"
    url: "https://www.bytedance.com/en/"
    accessedAt: "2026-07-23"
  - label: "TikTok USDS Joint Venture公式サイト（米国事業専用合弁会社の役割・経営体制）"
    url: "https://usdsjv.tiktok.com/"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: TikTok（公開日・2025年米国再編の枠組みと出資比率・利用者数推移・広告収益）"
    url: "https://en.wikipedia.org/wiki/TikTok"
    accessedAt: "2026-07-23"
---

## サービス解説

TikTokは2016年9月20日、中国のByteDanceが公開したショート動画アプリだ。ByteDanceは2012年、Zhang Yiming・Liang Rubo両氏らが設立し、公式サイトによれば現在は世界約120都市に拠点を持ち、従業員15万人超・取締役会にはCoatue・General Atlantic・Sequoia Capital・KKR・SoftBank Vision Fundなど著名投資家が名を連ねる。グローバルに展開するTikTok本体はケイマン諸島法人のTikTok Ltd.が運営し、本拠はシンガポールとロサンゼルスに置かれている（Wikipedia）。

:::fact
2025年9月14日、米国事業の枠組み合意が発表され、2026年1月22日に「TikTok USDS Joint Venture LLC」という新会社が米国事業専用の運営主体として稼働を始めた。出資比率はOracle・MGX Fund Management・Silver Lakeがそれぞれ15%、ByteDanceは19.9%に縮小し、残り35.1%をMichael Dell氏の投資会社とVastmere Strategic Investmentsが分け合うとされる（Wikipedia集約）。同社の公式サイトには、データ保護・アルゴリズムセキュリティ・信頼性と安全性・ソフトウェア保証・相互運用性の5領域を担うと明記されている。利用者数は2021年4月に20億ダウンロード、2021年9月に月間アクティブ10億人へ達したと報告されている。
:::

:::pull
同じ「For You」フィードを、世界のほとんどの地域ではByteDance系のTikTok Ltd.が、米国だけは別会社が運営する。1つのアプリが、事業運営の国籍だけ分かれるという構造は他に類例がない。
:::

::scorecard

## UX分析

TikTokのUXの核心は、フォローや友人関係に依存しない「For You」フィードそのものだ。

- **フォロー不要で最適化されたフィード**。Wikipediaの集約情報によれば、視聴中の滞在時間・リプレイ・スクロール速度といった行動シグナルを重視し、フォロー関係を起点とする従来型SNSのフィードとは異なる設計だとされる。
- **ショート動画フォーマットが業界標準を作った**。InstagramのReels・YouTubeのShortsなど、主要競合が同種のフォーマットを追随して実装しており、フィード設計そのものが業界の参照点になっている。
- **クリエイター向けの収益化とコマースが同じ画面に統合**。動画視聴からTikTok Shopでの購入までが同一アプリ内で完結する設計で、コンテンツ消費とコマースの境界を意図的に薄くしている。
- **米国だけ運営主体が変わったことによるUXへの影響は未知数**。アプリの見た目や基本機能は維持される想定だが、アルゴリズムの調整方針や米国向け機能展開の意思決定主体が変わったことが、体験にどう波及するかは今後の運用次第だ。

## 技術構成

::techstack

:::fact
TikTokはByteDanceの子会社TikTok Ltd.（ケイマン諸島法人、拠点はシンガポール・ロサンゼルス）が運営する。2026年1月22日には、米国事業専用の新会社「TikTok USDS Joint Venture LLC」が稼働を開始し、公式サイトによればデータ保護・アルゴリズムセキュリティ・信頼性と安全性・ソフトウェア保証・相互運用性の5領域を担うとされる。レコメンド機能「For You」は、フォロー関係よりも視聴中の行動データを重視するAI主導のフィードとされる。ByteDanceは同じグループ内でTikTok Shop・CapCutなど関連プロダクトも展開している。
:::

:::guess
グローバルなアプリ本体（TikTok Ltd.）とアルゴリズム・データを扱う米国専用の合弁会社（USDS JV）を分離する構造は、米国政府が繰り返し表明してきたデータ主権・アルゴリズムの安全性への懸念に対し、米国内のガバナンスを別法人として切り出すことで応える設計だと考えられる。ByteDanceの持分を19.9%まで下げつつ製品としての連続性（同じFor Youフィード・同じUI）を維持しているのは、事業の実効支配と製品体験を意図的に分離し、米国内の政治的な懸念と、世界共通のプロダクト価値の両方を同時に満たそうとする折衷案とみられる。この構造が実際に機能するかどうかは、米国専用合弁会社が今後どこまで独立した意思決定を行うかにかかっていると推測される。
:::

## ビジネスモデル

TikTokの収益は、広告とTikTok Shopのコマース手数料が柱だ。

:::fact
Wikipediaの集約情報によれば、広告収益は2021年に40億ドル、2023年には141.5億ドル（2022年の98.9億ドルから拡大）に達したと報告されている。同資料は、米国での広告単価が視聴1時間あたり0.31ドルとFacebookのおよそ3分の1水準だったとも指摘している。TikTok Shopは英国での先行展開後、2022年10月に米国展開が発表され、動画視聴からその場での購入までをアプリ内で完結させるコマース機能として位置づけられている。
:::

:::guess
広告単価が競合より低いという指摘は、TikTokの収益化がまだ利用者規模ほど成熟していないことを示唆していると考えられる。TikTok Shopへの投資は、広告単価の伸び悩みを補うためにコマース手数料という別の収益源を育てる狙いがあるとみられる。米国事業の合弁会社化という2026年の再編は、短期的には事業運営コストや意思決定の複雑さを増す要因になりうるが、米国市場からの事業撤退リスクを解消し、広告主・クリエイター双方に対して事業継続の予見可能性を示す効果を持つとも考えられる。
:::

同じアプリ、同じFor Youフィードを、世界のほとんどでByteDance系列が、米国だけ別の合弁会社が運営する——TikTokの解剖から見えるのは、プロダクトとしての一貫性を保ったまま、事業運営の国籍だけを地域ごとに分離するという、他に類例のない構造的な妥協点だ。この妥協が持続可能かどうかは、今後の合弁会社の運営実績が示すことになる。
