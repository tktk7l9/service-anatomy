---
title: "更地に建てるか、部品棚から組むか — 同じAWSの上でFigmaとCanvaが選んだ正反対の建て方"
description: "C++をWebAssemblyにコンパイルし同時編集プロトコルまで自作したFigmaと、EKS・Bedrock・S3というマネージドサービスを組み立てたCanva。同じデザインツールでありながらtechStackの共有トークンはゼロ——だが両社は同じAWSの上に立っていた。自作と組み立て、2つの工学戦略を比較解剖する。"
lead: "両記事のtechStackを機械照合すると、共有技術トークンはゼロ。だが今回のゼロは、これまでの対決のゼロとは意味が違う。Figmaの「AWS」とCanvaの「Amazon EKS」が別トークンとして数えられているだけで、2社は同じクラウドの上にいる。違いは土地ではなく、建て方だった。"
slugA: "figma"
slugB: "canva"
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
sources:
  - label: "Figma公式ブログ: How Figma's multiplayer technology works（OT/CRDT不採用・Rust自作プロトコル）"
    url: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"
    accessedAt: "2026-07-21"
  - label: "Figma公式ブログ: WebAssembly cut Figma's load time by 3x"
    url: "https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/"
    accessedAt: "2026-07-21"
  - label: "SEC Form 424B4（Figma, Inc.・IPO目論見書・2025年8月上場）"
    url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm"
    accessedAt: "2026-07-21"
  - label: "The Register: Figma files for IPO in wake of abandoned Adobe acquisition（2025-04）"
    url: "https://www.theregister.com/2025/04/16/adobe_figma_ipo/"
    accessedAt: "2026-07-21"
  - label: "AWS公式導入事例: Canva on AWS（EKS/Bedrock/S3・週1,000億イベント処理）"
    url: "https://aws.amazon.com/solutions/case-studies/innovators/canva/"
    accessedAt: "2026-07-21"
  - label: "Bloomberg: Canva Begins Share Sale at $42 Billion Valuation（2025-08・黒字8年連続の言及）"
    url: "https://www.bloomberg.com/news/articles/2025-08-20/canva-begins-share-sale-at-42-billion-valuation-in-road-to-ipo"
    accessedAt: "2026-07-20"
---

[Figma](/ja/articles/figma)と[Canva](/ja/articles/canva)は、どちらも「デザインツール」と呼ばれる。だが両記事のtechStackを機械的に突き合わせると、共有される技術トークンは1つもない。DeepL vs Nani翻訳、X vs Blueskyに続く共有ゼロ——に見えて、今回のゼロだけは性質が違う。照合の粒度がすれ違っているだけで、2社は同じクラウドの上に立っている。

:::fact
両記事のtechStackに共有される技術トークンはゼロ。ただしFigmaの側には「AWS + CloudFront」が公式インフラブログの明記に基づいて載っており、Canvaの側には「Amazon EKS」「Amazon Bedrock」「Amazon S3」が公式エンジニアリングブログとAWS公式導入事例の明記に基づいて並ぶ。「AWS」と「Amazon EKS」は機械照合では別トークンだが、実体としては両社とも同じAWSの上で運用されている。共有ゼロという計測結果は、同じクラウドをまったく異なる抽象度で使っていることの現れだ。
:::

:::pull
FigmaはAWSを更地として使い、その上に自前のエンジンを建てた。CanvaはAWSを完成品の部品棚として使い、組み立てる速さで勝負した。共有技術ゼロという計測結果が写しているのは、同じ土地の上の正反対の建築だ。
:::

## 自作の理由、組み立ての理由

Figmaの技術は「限界性能」に向かって一点に集中している。レンダラーはC++で書かれ、EmscriptenでWebAssemblyへコンパイルされる——公式ブログはこの移行だけで読み込み時間が3倍改善したと記録する。描画バックエンドはWebGPUへ移り、同時編集はOTでもCRDTでもない自作プロトコルをRustで実装した。ブラウザという制約の中でプロ用途の性能を出すために、既製品で足りない部分をすべて自分で作っている。

Canvaの技術は「幅」に向かって水平に広がっている。コンテナ基盤はEKS、背景除去などのML機能はNixで再現可能にビルドしたGPUノード、生成AIはBedrock、230ペタバイト超のストレージはS3——AWS公式事例が記録する週1,000億イベントの処理は、マネージドサービスの組み合わせで支えられている。作り込む対象は部品そのものではなく、部品の組み合わせ方だ。

:::guess
この分岐は、対象ユーザーの違いに帰着するとみられる。プロのデザイナーを相手にするFigmaは、性能の天井がそのまま製品の天井になるため、天井そのものを上げる投資——エンジンの自作——に合理性がある。デザイナーでない人を相手にするCanvaは、機能の幅と出す速さが価値を決めるため、実績のあるマネージドサービスを組み立てる方が合理的だ。同じ「デザインツール」という言葉の下で、2社は別の変数を最大化しているとみられる。
:::

## 資本との距離も、建て方と同じ形

Figmaの資本の物語は一点突破だ。VC資本で成長し、Adobeによる200億ドルでの買収合意は規制当局の抵抗で破談。10億ドルの解約金を受け取り、2025年8月に自力でIPOへ漕ぎ着けた。

Canvaの資本の物語は自給自足に近い。[Canva](/ja/articles/canva)の記事で見た通り、創業者Melanie Perkins氏は100社を超えるVCに断られた経験から外部資金に頼らずに黒字化する術を学び、8年連続の黒字を維持したまま評価額420億ドルに到達。同じ2025年8月に選んだのはIPOではなく、私企業のままの従業員株式売却だった。

:::guess
資金の入り方は、技術の建て方と同じ形をしているとみられる。外部資本を集中的に取り込み、自作エンジンという高い固定費に投資して性能の天井を上げたFigma。黒字という制約を守りながら、市販の部品で機能の幅を広げたCanva。2025年8月——同じ月に、Figmaは公開市場へ出ることを、Canvaは私企業に留まったまま従業員に流動性を渡すことを選んだ。どちらの選択も、それぞれの建て方の延長線上にあるとみられる。
:::

FigmaとCanvaは、デザインツールという同じ言葉の下で、技術も資本も正反対の建て方を選んだ。共有技術トークンゼロという計測結果は今回、「別の産業」ではなく「同じ土地の上の別の建築」を意味していた。既製品を拒む自作と、既製品を活かす組み立て——どちらが正しいかではなく、対象ユーザーの違いが決めた建て方が、レンダリングエンジンから上場の形まで一貫していること。それがこの対決の収穫だ。
