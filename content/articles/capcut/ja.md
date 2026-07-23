---
service: "CapCut"
title: "競合のフィードのために、自社の編集ツールを無料で配る — CapCutという逆説"
description: "ByteDance製の動画編集アプリCapCut。中国版アプリ「剪映（Jianying）」の国際版として2020年に世界展開し、Google Play累計10億ダウンロードを超えた。TikTok向けとは限定せず、Instagram ReelsやYouTube Shorts向けの動画作成にも自由に使われている——競合の配信網さえ強化しかねない無料配布戦略を公式情報から解剖する。"
lead: "CapCutで作った動画は、TikTokに投稿されるとは限らない。InstagramのReelsにも、YouTubeのShortsにも、同じ動画がそのまま流れていく。ByteDanceは、自社の編集エンジンを競合の配信網のためにも無料で使わせている。Google Playだけで累計10億ダウンロードを超えたこのアプリが、なぜ「自社アプリへの囲い込み」を捨てたのかを解剖する。"
category: consumer-app
tags: [video-editing, mobile-app, ai-tools, bytedance, creator-tools]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://www.capcut.com/"
vendor: "ByteDance Ltd."
origin: "CN"
heroTheme: "capcut"
scores: { product: 4.0, ux: 4.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "運営元"
    name: "CapCut（ByteDance子会社）"
    confidence: confirmed
    evidence: "ByteDance公式サイトのプロダクト一覧に、CapCutが自社製品として明記されていることを実確認"
    evidenceUrl: "https://www.bytedance.com/en/"
  - layer: "本家アプリとの関係"
    name: "剪映（Jianying）の国際版"
    confidence: likely
    evidence: "Wikipediaの集約情報によれば、2019年に中国向け「剪映（Jianying）」として先行公開され、2020年にCapCutとして国際版がグローバル展開されたとされる。CapCut公式ページでの明言は今回未確認のためlikely扱い"
  - layer: "提供チャネル"
    name: "モバイル / デスクトップ / Web / CapCut Pad"
    confidence: confirmed
    evidence: "CapCut公式サイトに、モバイルアプリ・デスクトップ版（Mac/Windows）・ブラウザ版・タブレット向けCapCut Padの複数チャネルで提供されていると明記"
    evidenceUrl: "https://www.capcut.com/"
  - layer: "ビジネス向け派生製品"
    name: "Pippit（CapCut基盤のB2Bコンテンツ生成ツール）"
    confidence: confirmed
    evidence: "Pippit公式サイトのフッターに「Powered by CapCut」と明記されており、CapCutの技術基盤を使った企業・マーケター向けの動画/画像生成ツールとして展開されていることを実確認"
    evidenceUrl: "https://www.pippit.ai/"
sources:
  - label: "ByteDance公式: 会社概要（CapCutを含むプロダクト一覧）"
    url: "https://www.bytedance.com/en/"
    accessedAt: "2026-07-23"
  - label: "CapCut公式サイト（提供チャネル・AI機能・テンプレート数）"
    url: "https://www.capcut.com/"
    accessedAt: "2026-07-23"
  - label: "Pippit公式サイト（CapCut基盤であることの明記・B2B向け用途）"
    url: "https://www.pippit.ai/"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: CapCut（剪映からの国際版展開史・ダウンロード数推移・料金体系・2025年の米国関連措置）"
    url: "https://en.wikipedia.org/wiki/CapCut"
    accessedAt: "2026-07-23"
---

## サービス解説

CapCutはByteDaceが開発する動画編集アプリだ。Wikipediaの集約情報によれば、2019年に中国向けアプリ「剪映（Jianying）」として先行公開され、2020年にCapCutとして国際版が世界展開された。テンプレート・AIキャプション生成・写真加工・動画/台本のAI生成など、編集初心者でも扱える機能群を備え、モバイル・デスクトップ（Mac/Windows）・ブラウザ版・タブレット向けCapCut Padの複数チャネルで提供されている。

:::fact
Wikipediaの集約情報によれば、2022年に月間アクティブユーザー2億人へ到達し、2023年3月には米国での最ダウンロードアプリ2位（Wall Street Journal報道）、2025年1月にはGoogle Playだけで累計10億ダウンロードを超えたとされる。CapCut公式サイトでは、AI画像編集（背景除去・解像度向上）・AI動画編集（トリミング・トランジション・字幕）・テキスト音声変換・87万点超のテンプレートライブラリを備えると説明されている。2025年1月には米国でTikTokと共に一時的にサービス停止措置を受け、同月中に復旧、2月13日にアプリストアでの提供が完全復旧したとWikipediaは伝えている。
:::

:::pull
CapCutで作った動画の行き先は、TikTokとは限らない。ByteDanceは、自社の編集エンジンを、競合の配信網を太らせる用途にも無料で開放している。
:::

::scorecard

## UX分析

CapCutのUXは、「動画編集の専門知識を必要としない」ことに徹底的に振り切っている。

- **プラットフォームを選ばない書き出し設計**。CapCut公式サイトによれば、作成した動画はSNS各社向けにそのまま書き出せる設計で、TikTokに限らずInstagram ReelsやYouTube Shortsなど、どの配信先にも同じ動画をそのまま使える。
- **テンプレート駆動の編集**。87万点超という膨大なテンプレートライブラリにより、ゼロから編集する代わりに既存の型に素材を流し込むだけで完成度の高い動画が作れる。
- **無料の入り口が広い**。公式サイトのトップに「クレジットカード不要」「無料で試す」を明示しており、高機能AIツールへのアクセスを課金の壁の手前に置いている。
- **B2B領域は別ブランド（Pippit）に分離**。企業・マーケター向けの用途は、CapCutブランドのまま拡張するのではなく、「Powered by CapCut」を掲げる別サービスPippitとして切り出されており、消費者向けUXと業務向けUXを意図的に分けている。

## 技術構成

::techstack

:::fact
CapCutはByteDance子会社として運営され、公式サイトによれば中国向け先行アプリ「剪映（Jianying）」の技術基盤を国際版として展開したものとされる。提供チャネルはモバイル・デスクトップ（Mac/Windows）・ブラウザ版・タブレット向けCapCut Padの4系統。企業・マーケター向けには、CapCutの技術基盤を使う派生サービスPippitが「Powered by CapCut」を明記して展開されている。
:::

:::guess
CapCutが出力先のプラットフォームを制限せず、TikTok以外のSNS向け動画作成にも自由に使わせているのは、編集ツールとしての普及そのものを目的化し、動画がどこに投稿されるかは問わないという戦略とみられる。競合の配信網を強化する可能性を許容してでも、世界最大級の動画編集インフラの座を取りにいく——ブラウザ市場におけるChromeのような、配信網ではなくツール層での支配を狙う設計に近いと推測される。B2B領域をPippitという別ブランドに切り出したのも、消費者向け無料ツールとしてのCapCutのブランドイメージを、企業向け有償ツールの複雑さで薄めないための切り分けと考えられる。
:::

## ビジネスモデル

CapCutの収益は、コンシューマー向けフリーミアムと、B2B領域の別ブランド展開の二段構えだ。

:::fact
Wikipediaの集約情報によれば、CapCutは無料版とクラウドストレージ・高度機能を含む有料Pro版のフリーミアムモデルを採る。企業・マーケター向けには、CapCutの技術基盤を使う別サービスPippitが用意されており、公式サイトでは商品マーケティング・広告・Eコマース向けの動画/画像生成ツールとして位置づけられている。2023年7月には、生体情報や位置情報を同意なく収集しているとする集団訴訟が提起されたが、2025年9月に大半の請求が却下されたとされる。2025年1月には米国でTikTokと共に一時的なサービス停止措置を受けたが、同月中に復旧した。
:::

:::guess
コンシューマー向けCapCutを無料の入り口として最大限普及させ、収益化はB2B向けのPippitに寄せるという二段構えは、個人ユーザーの離脱を招きかねない値上げや機能制限を避けながら、収益源は法人予算に求めるという設計だと考えられる。TikTokと同時期に米国で一時停止措置を受けた事実は、CapCutがByteDance系プロダクト全体として米国の規制環境と地続きのリスクを共有していることを示しており、TikTok本体で見られた米国事業の合弁会社化のような構造がCapCutにも将来的に及ぶ可能性は否定できないと推測される。
:::

TikTok向けに囲い込むのではなく、どのプラットフォームにも使える編集ツールとして無料で配る。CapCutの解剖から見えるのは、配信網の奪い合いではなく、ツール層での普及を優先する戦略と、収益化はB2Bの別ブランドに寄せるという切り分けだ。ByteDanceは、自社の配信網（TikTok）と自社のツール（CapCut）を、あえて別々の勝ち方で育てている。
