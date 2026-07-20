---
service: "Midjourney"
title: "会社を持たず、Discordだけを持つ — Midjourneyが外部資金ゼロで築いた画像生成の帝国"
description: "自社アプリを作らずDiscordサーバーだけで運営してきたMidjourney。外部資金を一切受けず創業1年で黒字化、少人数チームで高収益を上げる構造と、Google CloudのTPUで自社モデルを訓練する技術選択を公式情報から解剖する。"
lead: "普通のスタートアップは自社アプリを作る。Midjourneyは作らなかった——Discordのサーバー1つを製品そのものにして、外部資金ゼロで黒字化した。同じDiscordの上で数兆メッセージを捌く基盤を作った運営元とは対照的に、Midjourneyは他社のプラットフォームを製品戦略の中心に据えた。"
category: ai-tool
tags: [image-generation, ai, discord, bootstrapped, indie-dev]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://www.midjourney.com/"
vendor: "Midjourney, Inc."
origin: "US"
heroTheme: "midjourney"
scores: { product: 4.5, ux: 3.5, tech: 4.0, business: 4.5 }
techStack:
  - layer: "配信チャネル"
    name: "Discord Bot"
    confidence: confirmed
    evidence: "創業者David Holz氏自身のForbesインタビュー（2022年9月）で「我々のDiscordは200万人超、現時点で最大のアクティブDiscordサーバー」と明言"
    evidenceUrl: "https://www.forbes.com/sites/robsalkowitz/2022/09/16/midjourney-founder-david-holz-on-the-impact-of-ai-on-art-imagination-and-the-creative-economy/"
  - layer: "モデル学習基盤"
    name: "Google Cloud TPU"
    confidence: confirmed
    evidence: "Google Cloud公式プレスリリース（2023-03-14）に、第4世代モデルの学習にGoogle CloudのTensor Processing Unitを採用と明記"
    evidenceUrl: "https://www.googlecloudpresscorner.com/2023-03-14-Midjourney-Selects-Google-Cloud-to-Power-AI-Generated-Creative-Platform"
  - layer: "推論/画像生成基盤"
    name: "NVIDIA GPU (Google Cloud GPU VM)"
    confidence: confirmed
    evidence: "同プレスリリースに、生成画像のレンダリングはNVIDIA GPU搭載のGPU VMで行うと明記"
    evidenceUrl: "https://www.googlecloudpresscorner.com/2023-03-14-Midjourney-Selects-Google-Cloud-to-Power-AI-Generated-Creative-Platform"
  - layer: "自社Webインターフェース"
    name: "Midjourney Alpha (Web)"
    confidence: likely
    evidence: "複数メディアが2023年12月のアルファ版公開（生成枚数1万枚以上のユーザー限定）→2024年8月の一般開放を報道。公式ドキュメントは当サイトからは閲覧不可（bot遮断）のため確度はlikelyに留める"
  - layer: "CDN/エッジ"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare、2026-07-20。bot対策のchallengeページを検出）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Forbes: Midjourney創業者David Holz氏インタビュー（2022-09・Discord2万人発言）"
    url: "https://www.forbes.com/sites/robsalkowitz/2022/09/16/midjourney-founder-david-holz-on-the-impact-of-ai-on-art-imagination-and-the-creative-economy/"
    accessedAt: "2026-07-20"
  - label: "Google Cloud公式プレスリリース: MidjourneyがGoogle Cloudを採用（2023-03-14・TPU/GPU明記）"
    url: "https://www.googlecloudpresscorner.com/2023-03-14-Midjourney-Selects-Google-Cloud-to-Power-AI-Generated-Creative-Platform"
    accessedAt: "2026-07-20"
  - label: "The Information: 'He Doesn't Need VC in His Life' — MidjourneyがVCを拒み続けてきた経緯"
    url: "https://www.theinformation.com/articles/he-doesnt-need-vc-in-his-life-how-midjourneys-founder-built-an-ai-winner-while-rejecting-venture-capital"
    accessedAt: "2026-07-20"
---

普通のスタートアップは、まずアプリを作る。Midjourneyはそれを省略した——[Discord](/ja/articles/discord)のサーバーを1つ借り、`/imagine`というコマンド1つを製品にして、外部資金を一度も受けずに黒字化した。数兆メッセージを支えるインフラを自社で構築したDiscordの記事と並べると、Midjourneyは「他社のプラットフォームに全面的に乗る」という対極の戦略を取った企業として際立つ。

## サービス解説

Midjourneyはテキストから画像を生成するAIツールだ。2021年にDavid Holz氏が創業し、当初はDiscordのボットとしてのみ提供されていた。

:::fact
Forbes（2022年9月）のインタビューでHolz氏は「我々のDiscordは200万人超で、現時点で最大のアクティブDiscordサーバーだ」と述べている。自社の独立したWebインターフェース「Midjourney Alpha」は複数メディアの報道によれば2023年12月にアルファ公開（生成画像1万枚以上のユーザー限定）、2024年8月に一般開放された。Holz氏は自社を「製品を作る応用研究ラボ」と位置づけ、投資家ではなく研究者としての自己認識を語っている。
:::

:::pull
アプリを持たない会社が、AI画像生成というプロダクトカテゴリを実質的に作った——Midjourneyの発明はモデルだけでなく、配信チャネルの選択そのものにある。
:::

::scorecard

## UX分析

MidjourneyのUXは、Discordという「借り物のUI」の上に成立している点が最大の特徴だ。

- **コマンド1つの単純さ**。`/imagine`とプロンプトを打つだけで生成が始まる。専用アプリのオンボーディングが一切不要で、既にDiscordを使っているユーザーには参入障壁が事実上ゼロだった。
- **公開チャンネルが暗黙のギャラリーになる**。他人の生成結果とプロンプトが同じチャンネルに流れ続けるため、意図せず「プロンプトエンジニアリングの公開教材」が生まれた。学習コストを下げる効果は大きかった一方、プライバシーの欠如が長年の弱点でもあった（Stealth modeという有料オプションはその埋め合わせだ）。
- **Web化はUXの妥協点の解消だった**。Discordのチャット形式は大量生成・大量選別という画像生成特有の作業に向かず、2023年末以降の自社Web展開はこの構造的な不便さへの遅れた回答だったとみられる。
- **無料トライアルを2023年3月に廃止**。悪用の急増を理由に打ち切られており、UXの気前の良さより持続可能性を優先した数少ない決断のひとつだ。

## 技術構成

::techstack

:::fact
Google Cloud公式プレスリリース（2023年3月）によれば、Midjourneyは第4世代モデルの学習にGoogle CloudのTPU（Tensor Processing Unit）を採用し、生成画像のレンダリング（推論）はNVIDIA GPU搭載のGPU VMで行う二段構えのインフラだ。配信は創業以来Discordボットが中心で、Holz氏自身がその規模の大きさを公言している。自社Webインターフェースは2023年末のアルファ版を経て2024年8月に一般開放されたと複数メディアが報じている。
:::

:::guess
TPUでの学習とGPUでの推論という組み合わせは、学習と推論でワークロードの性質が異なる（前者はGoogleのTPUクラスタの並列性能が有利、後者は汎用性の高いNVIDIA GPUエコシステムが有利）ことを踏まえた合理的な使い分けとみられる。一方で、報道によればHolz氏自身がTPU選択によって研究の進捗が一時的に遅れたと振り返っており、学習基盤の選定が必ずしも最適解のみで動いていたわけではないことも示唆される。自社アプリを持たずDiscordに全面依存してきた経緯は、開発リソースをモデル品質に集中させるための意図的な選択だったと推測される。
:::

## ビジネスモデル

Midjourneyの収益構造は、AI業界で最も異質な部類に入る——外部資金ゼロで黒字を出し続けている。

:::fact
The Information等の報道によれば、Midjourneyは創業以来ベンチャーキャピタルからの資金調達を一切行っておらず、創業から1年ほどで黒字化したと伝えられている。有料プランは月額固定のサブスクリプションで、生成に使えるGPU時間（Fast/Relax等のモード）で階層化されている。年商100万ドルを超える企業には法人ライセンスが必須と公式に案内されている。
:::

:::guess
少人数のチーム構成で高い収益を上げているとされる同社の効率性は、外部資金を持たないことの裏返しとみられる——株主説明責任や急成長プレッシャーがない分、機能拡張よりモデル品質とインフラ効率に投資を集中できる。GPU時間課金というモデルは、原価（クラウドの計算コスト）と売上を直結させる設計であり、生成AIサービスの中では珍しく単価とコストの関係が透明な部類に入ると考えられる。無投資・高収益というこの構造こそが、Midjourneyが価格競争や機能競争に流されず独自路線を保てている最大の要因だろう。
:::

自社アプリを作らない、投資家を入れない、それでも黒字を出し続ける。Midjourneyは、AI業界の常識とされる「まず巨額調達、後から収益化」という順番を丸ごとひっくり返した、数少ない反証だ。
