---
service: "Klarna"
title: "700人分の仕事を自慢した1年後、人間を呼び戻した — KlarnaのAI実験が示した限界線"
description: "後払い決済(BNPL)のKlarna。OpenAIと組んだAIアシスタントが「従業員700人分の仕事」を1ヶ月でこなしたと2024年に公式発表し、2025年にはCEO自ら「行き過ぎた」と認めて人間を呼び戻した経緯を、公式プレスリリースとCEO本人の発言から解剖する。品質とコストの綱引きの実例だ。"
lead: "AIで700人分の顧客対応をこなせると胸を張った1年後、同じCEOが「行き過ぎた、品質が落ちた」と認めて人間のオペレーターを呼び戻した。Klarnaが晒したのは失敗ではなく、AI導入の限界線がどこにあるかを示す貴重な実測データだ。"
category: saas
tags: [fintech, bnpl, ai, customer-service, ipo]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://www.klarna.com/"
vendor: "Klarna Group plc"
origin: "SE"
heroTheme: "klarna"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "AIカスタマーサポート"
    name: "OpenAI (GPT系モデル)"
    confidence: confirmed
    evidence: "Klarna公式プレスリリース（2024-02-27）とOpenAI公式ページの双方に、OpenAIとの提携でAIアシスタントを構築したと明記"
    evidenceUrl: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"
  - layer: "配信基盤"
    name: "Amazon S3 + CloudFront"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（server: AmazonS3 / via: CloudFront、2026-07-20）でコーポレートサイトの配信を確認"
    evidenceUrl: "https://www.klarna.com/"
sources:
  - label: "Klarna公式プレスリリース: AIアシスタントが1ヶ月で従業員700人分の会話をこなす（2024-02-27）"
    url: "https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/"
    accessedAt: "2026-07-20"
  - label: "OpenAI公式: Klarna's AI assistant does the work of 700 full-time agents"
    url: "https://openai.com/index/klarna/"
    accessedAt: "2026-07-20"
  - label: "Klarna Group plc IR: 2025年通期決算発表（2026-02-26）"
    url: "https://investors.klarna.com/News--Events/news/news-details/2026/Klarna-Group-plc-Publishes-Full-Year-2025-Results/default.aspx"
    accessedAt: "2026-07-20"
  - label: "Forbes: Klarna Reverses AI Push, Says Customers Prefer Human Support（2025-05・CEOのBloomberg発言引用）"
    url: "https://www.forbes.com/sites/quickerbettertech/2025/05/18/business-tech-news-klarna-reverses-on-ai-says-customers-like-talking-to-people/"
    accessedAt: "2026-07-20"
---

AIで従業員700人分の仕事をこなせる——そう胸を張った1年余り後、同じCEOが「行き過ぎた、品質が落ちた」と認めて人間のオペレーターを呼び戻した。多くの企業がAI導入の成功事例ばかりを喧伝する中、Klarnaは失敗も含めて実測データを世界に晒し続けている稀有な会社だ。

## サービス解説

Klarnaはスウェーデン発の後払い決済（BNPL）・ネオバンクサービスだ。2005年創業、2025年9月にNYSEへ上場した。

:::fact
Klarna Group plc公式IR（2026年2月）によれば、2025年通期の流通総額（GMV）は1,279億ドル（前年比22%増）、売上は35億ドル（前年比25%増）、調整後営業利益は6,500万ドル（調整後営業利益率1.9%）。アクティブ消費者は1億1,800万人（同28%増）、加盟店は96万6,000店（同42%増）に達した。現在NYSEに「KLAR」として上場している。
:::

:::pull
AI導入の「成功事例」は世の中に溢れている。KlarnaがAI業界にとって貴重なのは、成功を発表した同じ口で、1年後に失敗を認めたことだ。
:::

::scorecard

## UX分析

KlarnaのUXは、チェックアウト時の摩擦を減らすというBNPL本来の強みと、AI導入の揺り戻しという2つの物語が交差している。

- **チェックアウトの分割払いが核心的な発明**。「今買って後で払う」という選択肢をワンクリックで提示する体験は、クレジットカード申込のような重い手続きなしに与信判断を完結させる。BNPL業界全体のUX標準を作った側面がある。
- **AIアシスタントは速度で圧倒した**。公式プレスリリース（2024年2月）によれば、解決時間は従来の11分から2分未満へ短縮され、顧客満足度も人間対応と同水準だったと報告されている。速度と満足度が両立していたという初期の実測値自体は本物だった。
- **それでも人間を呼び戻す決断をした**。CEOのSebastian Siemiatkowski氏はBloombergに「コストを重視しすぎた。結果として品質が落ちた」と語り、2025年に人間のオペレーターを段階的に呼び戻した。数値上の効率と、顧客が求める体験の質が必ずしも一致しないことを、自ら証明した形だ。
- **「Uber型」のハイブリッド体制へ再設計**。学生や主婦など柔軟な勤務形態の人間オペレーターに、AIが会話ごとに支援を提供する構成へ転換したと報じられている。AIを置き換えではなく補助として再定義した。

## 技術構成

::techstack

:::fact
Klarna公式プレスリリース（2024年2月）およびOpenAI公式ページによれば、AIアシスタントはOpenAIとの提携で構築され、23市場・35言語以上に対応し24時間365日稼働、公開1ヶ月で230万件の会話（全顧客対応チャットの3分の2）を処理し、これは従業員700人分のフルタイム業務量に相当すると発表された。2024年通期で4,000万ドルの利益改善を見込むとされた。
:::

:::guess
公開当初の数字（解決時間11分→2分未満、顧客満足度は人間と同水準）自体は実測に基づく本物の成果だったとみられるが、「満足度が同水準」という指標だけでは、AI対応特有の摩耗——毎回同じ丁寧な文面で解決はするが、複雑な事情や感情的な訴えを汲み取れない蓄積的な不満——を捉えきれなかった可能性がある。CEO自身の「品質が落ちた」という発言は、定量指標が健全に見えている間にも、定性的な体験劣化が進行しうることを示す実例として読める。
:::

## ビジネスモデル

Klarnaの収益は、加盟店からの決済手数料と消費者向け金融サービス（分割払いの金利等）の組み合わせだ。

:::fact
公式IR（2026年2月）によれば、2025年通期売上は35億ドル（前年比25%増）だが、調整後営業利益は6,500万ドルにとどまり、調整後営業利益率はわずか1.9%。2025年9月にNYSEへ上場している。
:::

:::guess
売上成長率（25%）に対して営業利益率が極めて薄い（1.9%）という構図は、BNPL事業が本質的に与信リスクを抱えた金融事業であり、成長のための与信拡大とデフォルト（貸し倒れ）リスクの管理がせめぎ合っていることを示していると考えられる。AIによるコスト削減の実験は、この薄い利益率を守るための切実な手段だったとみられ、それでも品質を理由に撤回せざるを得なかった事実は、BNPL業界全体が「コスト削減」と「顧客体験の維持」の両立にどれだけ余白がないかを物語っている。上場企業として四半期ごとに利益率を問われる立場になった今、この綱引きはより一層シビアになるだろう。
:::

AIに700人分の仕事を任せられると発表した1年後、CEO自身が「行き過ぎた」と認めて人間を呼び戻す。Klarnaが示したのは失敗の記録ではなく、AI導入がどこで品質の一線を越えるかを示す、業界にとって数少ない実測データだ。
