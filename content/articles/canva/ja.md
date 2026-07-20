---
service: "Canva"
title: "100人のVCに断られた学生起業が、黒字8年連続の420億ドル企業になるまで — Canvaの逆張り成長"
description: "デザインツールCanva。100社超のVCに断られた創業者が、外部資金に頼らず黒字を8年連続で維持しながら420億ドル評価額まで育てた経緯と、AWS EKS・Bedrockを使った週1,000億イベント処理のインフラを公式ブログとAWS事例から解剖する。"
lead: "創業者Melanie Perkins氏は100社を超えるVCに断られた。それでも学生時代のオンライン卒業アルバム事業で外部資金なしに黒字化する術を学び、その経験のままCanvaを育て、8年連続黒字を保ったまま評価額420億ドルに到達した。デザインの民主化というミッションと、堅実な財務規律を両立させた成長を解剖する。"
category: consumer-app
tags: [design-tool, bootstrapped, saas, aws, ai]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://www.canva.com/"
vendor: "Canva Pty Ltd"
origin: "AU"
heroTheme: "canva"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.5 }
techStack:
  - layer: "コンテナオーケストレーション"
    name: "Amazon EKS (Kubernetes)"
    confidence: confirmed
    evidence: "Canva公式エンジニアリングブログに「CanvaはAWSショップであり、K8sクラスタの実行にEKSを使用」と明記"
    evidenceUrl: "https://www.canva.dev/blog/engineering/supporting-gpu-accelerated-machine-learning-with-kubernetes-and-nix/"
  - layer: "GPU機械学習基盤"
    name: "Nix (再現可能なコンテナビルド) + EKS GPUノード"
    confidence: confirmed
    evidence: "同ブログに、NixのdockerTools.buildImageでコンテナベースイメージを構築し、背景除去等のML機能にEKSのGPU対応AMIを使用と明記（2022-07）"
    evidenceUrl: "https://www.canva.dev/blog/engineering/supporting-gpu-accelerated-machine-learning-with-kubernetes-and-nix/"
  - layer: "生成AI"
    name: "Amazon Bedrock"
    confidence: confirmed
    evidence: "AWS公式導入事例に、Magic Writeやチャットアシスタント等の生成AI機能はAmazon Bedrockを使用と明記"
    evidenceUrl: "https://aws.amazon.com/solutions/case-studies/innovators/canva/"
  - layer: "ストレージ"
    name: "Amazon S3 (+ S3 Glacier Instant Retrieval)"
    confidence: confirmed
    evidence: "AWS公式導入事例に230ペタバイト超をS3に保存し、130ペタバイトをS3 Glacier Instant Retrievalへ移行して年間300万ドル超のコスト削減と明記"
    evidenceUrl: "https://aws.amazon.com/solutions/case-studies/innovators/canva/"
  - layer: "CDN"
    name: "Fastly"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（x-served-by: cache-*、Fastly特有のヘッダー形式、via: varnish、2026-07-20）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Canva公式エンジニアリングブログ: GPU-accelerated ML with Kubernetes and Nix（2022-07）"
    url: "https://www.canva.dev/blog/engineering/supporting-gpu-accelerated-machine-learning-with-kubernetes-and-nix/"
    accessedAt: "2026-07-20"
  - label: "AWS公式導入事例: Canva on AWS（EKS/Bedrock/S3・週1,000億イベント処理）"
    url: "https://aws.amazon.com/solutions/case-studies/innovators/canva/"
    accessedAt: "2026-07-20"
  - label: "Bloomberg: Canva Begins Share Sale at $42 Billion Valuation（2025-08・黒字8年連続の言及）"
    url: "https://www.bloomberg.com/news/articles/2025-08-20/canva-begins-share-sale-at-42-billion-valuation-in-road-to-ipo"
    accessedAt: "2026-07-20"
---

100社を超えるベンチャーキャピタルに断られた学生起業家が、外部資金への依存を最小限に抑えたまま、評価額420億ドルの企業を育て上げた。CanvaはFigmaやCursorのような大型調達を繰り返す成長物語とは対照的な、財務規律の効いた逆張り成長の実例だ。

## サービス解説

Canvaはブラウザで動くデザインツールで、プロのデザイナーでなくても資料・SNS投稿・動画などを作れることを掲げる。2013年、オーストラリアでMelanie Perkins氏とCliff Obrecht氏が創業した。

:::fact
Bloomberg（2025年8月）の報道によれば、Canvaは2025年8月の従業員株式売却で評価額420億ドルに達し（同年7月の370億ドルから上昇）、年換算収益（ARR）は2025年10月時点で35億ドル、8年連続で黒字を維持していると報じられている。月間アクティブ利用者は2億6,000万人超、有料会員は2,900万人超、Fortune 500企業の85%超が利用しているという。Perkins氏は創業前に100社を超える投資家から出資を断られた経験を持つ。
:::

:::pull
外部資金を積み上げて赤字で急成長するのが業界の型なら、Canvaは黒字を積み上げながら評価額を伸ばすという、もう一つの型を証明した。
:::

::scorecard

## UX分析

CanvaのUXは「デザインの民主化」というミッションを、機能ではなく制約の外し方で実現している。

- **空白のキャンバスを見せない**。テンプレートから始める設計により、デザインの知識がなくても「それらしい」成果物にたどり着ける。プロ向けツールが前提とする「白紙から始める自由」を、あえて手放した設計だ。
- **ドラッグ&ドロップで完結する操作体系**。レイヤーやベクターパスといった専門用語を意識させない操作性は、Figmaのようなプロ向けツールとは異なる利用者層（マーケター・教員・中小企業経営者）を開拓した。
- **チーム機能が個人利用から法人利用への橋渡しになる**。無料での個人利用から始まり、共有・コメント・ブランドキット機能が組織導入への自然な導線を作る。
- **AI機能の統合は「デザインをしない人」をさらに広げる**。Magic Write等の生成AI機能により、テキスト入力だけでデザインの初稿が完成する体験は、デザインツールというより「デザインの代行者」に近づいている。

## 技術構成

::techstack

:::fact
Canva公式エンジニアリングブログ（2022年7月）によれば、CanvaはAWS上でAmazon EKSを使いKubernetesクラスタを運用しており、背景除去などのGPU機械学習機能にはEKSのGPU対応AMIを使用、コンテナベースイメージの構築にはNixのビルドツールを採用している。AWS公式導入事例によれば、生成AI機能（Magic Write・チャットアシスタント等）はAmazon Bedrockを使用し、週あたり1,000億件のイベントと400テラバイトのデータを処理、230ペタバイト超をAmazon S3に保存している。130ペタバイトをS3 Glacier Instant Retrievalへ移行し、年間300万ドル超のストレージコストを削減したとも報告されている。
:::

:::guess
Nixという(比較的niche寄りの)ビルドツールをコンテナイメージ構築に採用した判断は、GPU対応イメージの再現性・軽量性を重視した技術的なこだわりの表れとみられ、一般的なDockerfileベースの構築より学習コストは高いが、依存関係の厳密な固定によって「動いていたのに動かなくなった」という事故を減らす狙いがあると推測される。週1,000億件のイベント処理という規模は、デザイン編集という一見軽量な操作の裏で、リアルタイム協業・バージョン履歴・AI機能がすべてイベントとして流れている設計を示唆しており、Figma同様「デザインツール」の皮を被った大規模分散システムであることがうかがえる。
:::

## ビジネスモデル

Canvaの収益は、無料プランを起点にしたフリーミアムのサブスクリプションだ。

:::fact
Bloombergの報道によれば、Canvaは2025年10月時点で年換算収益35億ドルに達し、8年連続で黒字を維持しているとされる。2025年8月の従業員株式売却では評価額420億ドルに達し、CFOに前ZoomのCFOだったKelly Steckelberg氏を起用するなど、IPOに向けた準備が進んでいると報じられている。
:::

:::guess
黒字を維持しながら評価額を積み上げてきた財務規律は、創業前のオンライン卒業アルバム事業で外部資金なしの黒字経営を経験した創業者の原体験が、そのままCanvaの経営哲学に持ち込まれているとみられる。100社超のVCに断られたという経験も、結果的に「他人の資金に依存しない」という規律を強めた可能性がある。AI機能への積極投資は、生成AIによる無料の代替（汎用チャットAIでの画像生成等）に対する防衛であると同時に、有料転換の新たな入口を作る攻めの一手でもあり、黒字経営という制約の中でリスクを取れる数少ない生成AI企業の一つになっているとみられる。
:::

100社を超える「ノー」を糧に、外部資金への依存を最小限に留めながら黒字を積み上げる。Canvaが証明したのは、デザインの民主化という理想と、堅実な財務規律という現実主義が、決して矛盾しないということだ。
