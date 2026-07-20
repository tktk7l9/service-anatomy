---
service: "Figma"
title: "ブラウザにゲームエンジンを埋め込む — Figmaが200億ドルの破談を10億ドルの手切れ金に変えた強さ"
description: "ブラウザ上で動くデザインツールFigma。C++をWebAssemblyにコンパイルした独自レンダリングエンジン、OTでもCRDTでもない自作の同時編集プロトコル、Adobe買収破談から自力IPOへ至った経緯までを公式ブログとSEC提出書類から解剖する。"
lead: "ブラウザはゲームエンジンを動かす場所ではない、というのが常識だった。FigmaはC++をWebAssemblyにコンパイルして常識を覆し、複数人が同じキャンバスを同時に編集する体験を作った。200億ドルの買収が規制当局に阻まれても、10億ドルの手切れ金を元手に自力でIPOまで漕ぎ着けた技術と経営の強さを解剖する。"
category: productivity
tags: [design-tool, webassembly, collaboration, rust, ipo]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://www.figma.com/"
vendor: "Figma, Inc."
origin: "US"
heroTheme: "figma"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "レンダリングエンジン"
    name: "C++ (WebAssembly / Emscripten)"
    confidence: confirmed
    evidence: "公式ブログに、レンダラーはC++で書かれEmscriptenでWebAssemblyへコンパイルしてメインアプリで使用と明記。WebAssembly化で読み込み時間が3倍改善"
    evidenceUrl: "https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/"
  - layer: "描画API"
    name: "WebGPU"
    confidence: confirmed
    evidence: "公式ブログにC++レンダラーの描画バックエンドをWebGPUへ移行と明記"
    evidenceUrl: "https://www.figma.com/blog/figma-rendering-powered-by-webgpu/"
  - layer: "リアルタイム同期サーバー"
    name: "Rust (自作の同時編集プロトコル)"
    confidence: confirmed
    evidence: "公式ブログに、サーバーはRustで書かれ、OTでもCRDTでもない自作の同時編集システムを採用したと明記"
    evidenceUrl: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"
  - layer: "永続化（書き込み保証）"
    name: "DynamoDB (Write-Ahead Journal)"
    confidence: confirmed
    evidence: "公式ブログ（2022-10）にDynamoDB上のジャーナルで1日22億件超の変更を処理し、データロス許容時間を60秒から1秒未満に短縮と明記"
    evidenceUrl: "https://www.figma.com/blog/making-multiplayer-more-reliable/"
  - layer: "永続化（非マルチプレイヤーデータ）"
    name: "PostgreSQL"
    confidence: confirmed
    evidence: "公式ブログに、コメント・ユーザー・チーム等のデータはPostgreSQLで管理と明記"
    evidenceUrl: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"
  - layer: "クラウド基盤"
    name: "AWS + CloudFront"
    confidence: confirmed
    evidence: "公式インフラブログにAWS上での運用を明記。当サイトのHTTPヘッダー実観測（via: CloudFront、2026-07-20）とも整合"
    evidenceUrl: "https://www.figma.com/blog/under-the-hood-of-figmas-infrastructure/"
sources:
  - label: "Figma公式ブログ: How Figma's multiplayer technology works（OT/CRDT不採用の理由）"
    url: "https://www.figma.com/blog/how-figmas-multiplayer-technology-works/"
    accessedAt: "2026-07-20"
  - label: "Figma公式ブログ: Making multiplayer more reliable（2022-10・DynamoDB WAL）"
    url: "https://www.figma.com/blog/making-multiplayer-more-reliable/"
    accessedAt: "2026-07-20"
  - label: "Figma公式ブログ: WebAssembly cut Figma's load time by 3x"
    url: "https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/"
    accessedAt: "2026-07-20"
  - label: "SEC Form 424B4（Figma, Inc.・IPO目論見書・2025年8月上場）"
    url: "https://www.sec.gov/Archives/edgar/data/1579878/000162828025037014/figma424b4.htm"
    accessedAt: "2026-07-20"
  - label: "The Register: Figma files for IPO in wake of abandoned Adobe acquisition（2025-04）"
    url: "https://www.theregister.com/2025/04/16/adobe_figma_ipo/"
    accessedAt: "2026-07-20"
---

ブラウザは文書やフォームを表示する場所であって、ゲームエンジンを動かす場所ではない——2015年当時の常識だった。Figmaはこの常識を覆し、C++で書いたレンダリングエンジンをWebAssemblyにコンパイルしてブラウザに埋め込み、複数人が同じキャンバスを同時に編集する体験を実現した。この技術的な賭けが、200億ドルの買収破談という経営上の危機を、自力IPOという勝利に変える土台になった。

## サービス解説

Figmaはブラウザ上で動くコラボレーティブなデザインツールだ。デザイナーだけでなく、エンジニア・PMを含むチーム全体が同じファイルを同時に見て編集する体験を核に据える。

:::fact
SEC提出書類（Form 424B4）によれば、Figmaは2025年8月1日にニューヨーク証券取引所に上場し、公募価格1株33ドルで新規発行株1,250万株を売り出した。この上場に先立ち、Adobeは2022年9月に約200億ドルでFigmaを買収すると発表していたが、欧州・英国の規制当局から承認の見通しが立たないとして2023年12月に両社合意のうえ破談。The Register等の報道によれば、この破談に伴いAdobeはFigmaに10億ドルの契約解除手数料を支払った。
:::

:::pull
買収が壊れて終わる会社は多いが、その手切れ金を元手に単独でIPOまで漕ぎ着けた会社は稀だ。Figmaにとって破談は敗北ではなく、独立への軍資金だった。
:::

::scorecard

## UX分析

FigmaのUXは「ブラウザの限界を感じさせない」という一点に技術投資が集中している。

- **カーソルが見えるという発明**。他人のカーソルと選択範囲がリアルタイムで見えるだけで、同時編集は「衝突を避ける作業」から「一緒に作る体験」に変わる。この体感の良さが、Figmaを単なるデザインツールから協業インフラへ押し上げた。
- **重いドキュメントでも固まらない**。C++/WebAssemblyのレンダリングエンジンにより、数千レイヤーの巨大ファイルでもブラウザタブがネイティブアプリ並みに動く。「ブラウザで動くのに重くない」という体感自体が差別化になっている。
- **コメント・バージョン履歴が非デザイナーを引き込む**。デザインファイルの中にPM・エンジニアのフィードバックがそのまま溜まる設計は、Figmaを「デザイナーの道具」から「プロダクトチーム全体の場所」に変えた。
- **無料開始のハードルの低さが伝播力を生む**。個人利用の閲覧・コメントが無料枠に含まれるため、1人のデザイナーの導入が組織全体への伝播につながりやすい。

## 技術構成

::techstack

:::fact
公式ブログによれば、Figmaのレンダリングエンジンは元々C++で書かれ、Emscriptenを介してWebAssemblyにコンパイルされている（この移行により読み込み時間が3倍改善）。描画バックエンドは近年WebGPUへ移行した。同時編集はOT（Operational Transform）でもCRDT（Conflict-free Replicated Data Type）でもない自作の中央集権的プロトコルで、サーバーはRustで実装されている。永続化は用途で分離されており、コメント・ユーザー・チーム等の一般データはPostgreSQL、マルチプレイヤーの変更履歴はDynamoDB上のWrite-Ahead Journalで扱う。2022年の公式ブログでは、このジャーナルが1日22億件超の変更を処理し、データロス許容時間を60秒から1秒未満に短縮したと報告されている。基盤はAWS上で構築され、当サイトのヘッダー観測でもCloudFront経由の配信を確認できた。
:::

:::guess
OT・CRDTという学術的に確立した2つの手法をあえて両方とも採用しなかった判断は、Figmaのドキュメントが「数百のプロパティを持つオブジェクトの木構造」であり、テキスト編集向けに最適化されたOTとは相性が悪く、分散合意を前提とするCRDTの複雑さも中央集権サーバー構成では不要という、ドメインを見切った現実的な選択だったとみられる。C++/WASMへの初期投資は、Web上での「重いアプリ」というカテゴリそのものを切り開いた先行者利益として、その後のFigma Slides等の新製品展開の土台にもなっていると推測される。
:::

## ビジネスモデル

Figmaの収益はシート課金のSaaSだが、その経営史はM&A劇そのものが最大のプロットだ。

:::fact
2022年9月、Adobeは約200億ドル（現金・株式ほぼ半々）でFigma買収を発表したが、欧州・英国当局の承認見通しが立たず2023年12月に破談。Adobeは契約に基づき10億ドルの解除手数料をFigmaに支払った。Figmaはその後2025年7月にIPOを申請し、同年8月1日に1株33ドルで新規株式公開を果たした。
:::

:::guess
規制当局が買収を止めた理由は、FigmaがAdobeにとって単なる買収対象ではなく、将来のAdobe XD/Adobe自身の製品ラインへの脅威になり得る競合だったからだと広く解釈されている。10億ドルの手切れ金は、破談による事業毀損（人材流出・顧客不安）を相殺する保険として機能し、結果的にFigmaが独立を選ぶ経済的な後押しになったとみられる。生成AIによるデザイン自動化という新しい競争軸が立ち上がる中、上場企業として四半期ごとの説明責任を負いながらこの変化に対応できるかが、次のFigmaにとっての本当の試金石になるだろう。
:::

ブラウザにゲームエンジン級のソフトウェアを埋め込むという技術的な賭けと、規制当局に阻まれた買収を独立への原資に変える経営判断。Figmaの10年は、技術と経営の両輪がそれぞれ「常識の外側」を選び続けた記録だ。
