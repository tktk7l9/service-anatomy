---
service: "Cursor"
title: "コピーではなくフォークを選んだ理由 — Cursorが1年でARR20億ドルに達した設計判断"
description: "VS Codeをフォークして生まれたAIコードエディタCursor。拡張機能では不可能だったエディタ深部へのAI統合、独自の高速コード編集モデル、ARRが1年で1,000万→20億ドルに達した史上最速SaaS成長を公式情報から解剖する。"
lead: "拡張機能として作れば早かったはずのAIコードエディタを、Cursorはあえてゼロからのフォークとして作った。その回り道が、エディタの奥深くにAIを埋め込む自由度を生み、アプリケーション層SaaS史上最速のARR成長を支えた。VS Code資産を活かしながら独自インフラを積み上げる設計思想を解剖する。"
category: dev-tool
tags: [ai, code-editor, vscode, developer-tools, funding]
publishedAt: "2026-07-20"
updatedAt: "2026-07-20"
lastVerified: "2026-07-20"
serviceUrl: "https://cursor.com/"
vendor: "Anysphere, Inc."
origin: "US"
heroTheme: "cursor"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "エディタ基盤"
    name: "VS Code (Code - OSS) ベース"
    confidence: confirmed
    evidence: "Cursor公式ドキュメントに「Cursor is based upon the VS Code codebase」と明記。拡張機能・テーマ・設定・キーバインドの一括移行機能も提供"
    evidenceUrl: "https://cursor.com/docs/configuration/migrations/vscode"
  - layer: "コード編集モデル"
    name: "Fast Apply (ファインチューニング済みLlama-3-70B + 投機的デコード)"
    confidence: confirmed
    evidence: "推論インフラ提携先Fireworks AIの公式ブログ（2024-06-23）に、Cursorがファインチューニングした Llama-3-70B を投機的デコードAPIで配信し、約1,000トークン/秒（通常推論比13倍）を達成と明記"
    evidenceUrl: "https://fireworks.ai/blog/cursor"
  - layer: "自社フロンティアモデル"
    name: "Composer"
    confidence: confirmed
    evidence: "Cursor公式ブログ（Series D記事）に、独自開発モデルで同等知能のモデル比4倍高速なエージェント型コーディング向けモデルと明記"
    evidenceUrl: "https://cursor.com/blog/series-d"
  - layer: "配信基盤"
    name: "Vercel + Next.js"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: Vercel / x-vercel-id / x-nextjs-prerender、2026-07-20）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Cursor公式ブログ: Series D（2025-11・$2.3B調達・評価額$29.3B・ARR10億ドル超）"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-07-20"
  - label: "Cursor公式ブログ: Series C（2025-06・$900M調達・評価額$9.9B・ARR5億ドル超）"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-07-20"
  - label: "Cursor公式ドキュメント: VS Code Migration（コードベースの基盤について）"
    url: "https://cursor.com/docs/configuration/migrations/vscode"
    accessedAt: "2026-07-20"
  - label: "Fireworks AI公式ブログ: Fast Apply（投機的デコードの技術詳細・2024-06）"
    url: "https://fireworks.ai/blog/cursor"
    accessedAt: "2026-07-20"
---

拡張機能として作れば、開発は数ヶ月早く終わったはずだ。CursorはあえてVS Codeをフォークするという回り道を選んだ——その判断が、[Linear](/ja/articles/linear)と並ぶ「開発者ツールの速度」を追求する2社のうち、Cursorをアプリケーション層SaaS史上最速のARR成長企業に押し上げた。

## サービス解説

CursorはAIをエディタの奥深くに統合したコードエディタだ。運営会社Anysphere（MIT出身の4人が創業）が開発する。

:::fact
Cursor公式ドキュメントによれば、CursorはVS Codeのコードベース（オープンソース版のCode - OSS）を土台にしており、既存VS Codeの拡張機能・テーマ・設定・キーバインドを一括移行できる。公式ブログ（2025年11月・Series D）によれば、年間経常収益（ARR）は10億ドルを突破し、2025年6月のSeries C時点（5億ドル超）からわずか5ヶ月での倍増だったとされる。同時点で従業員は300名超、NVIDIA・Uber・Adobeを含むFortune 500の半数以上が導入していると公式に説明されている。
:::

:::pull
拡張機能では届かない場所にAIを埋め込むために、Cursorはエディタそのものを作り直した。回り道こそが最短ルートだった、という逆説がここにある。
:::

::scorecard

## UX分析

CursorのUXは「馴染みと侵入」という一見矛盾する2つの体験を両立させている。

- **移行コストをゼロに設計**。VS Codeの拡張機能・設定・キーバインドがそのまま持ち込めるため、既存ユーザーは学習コストなしに乗り換えられる。エディタ市場で最大のスイッチングコストを公式ツールで解消した設計だ。
- **エディタ内蔵だからこそ実現する機能**。タブ補完、Shadow Workspace（見えない場所での提案生成）、バックグラウンドエージェントなどは、拡張機能APIの権限では実装できない領域まで踏み込んでいる。フォークという回り道が機能の差別化に直結している。
- **既存VS Code拡張との摩擦も報告される**。フォーク由来の互換性問題や、コミュニティからの「VS Codeエコシステムの分断」への懸念は、この戦略の代償として指摘され続けている。
- **エージェント化が体験を再定義しつつある**。単発の補完から、複数ステップのタスクを自律的にこなすエージェント型コーディングへと軸足が移っており、UXの主戦場そのものが動いている。

## 技術構成

::techstack

:::fact
Fireworks AIの公式ブログ（2024年6月）によれば、Cursorのコード編集機能「Fast Apply」はファインチューニング済みのLlama-3-70Bを投機的デコードで配信し、既存コードを「ドラフトトークン」として使うことで通常推論比13倍の約1,000トークン/秒を実現した。さらにCursor公式ブログ（Series D）は、エージェント型コーディング向けに一から設計した自社フロンティアモデル「Composer」を、同等の知能を持つ他モデルの4倍の速度で動かしていると説明している。
:::

:::guess
サードパーティモデル（Llama系のファインチューニング）と自社フロンティアモデル（Composer）を併走させている構成から、Cursorは「まず外部モデルの微調整で市場投入し、収益が確立してから自社モデル開発に資源を投じる」という段階的な内製化戦略を取っているとみられる。これはNani翻訳が複数のLLM APIをルーティングで使い分ける戦略とも、DeepLが最初から自社LLMに全振りする戦略とも異なる、第三の道だ。VS Codeフォークという選択も含め、Cursorの技術選定は一貫して「土台は借りて、差別化点だけ自作する」という効率重視の思想で貫かれていると推測される。
:::

## ビジネスモデル

Cursorの収益成長は、アプリケーション層SaaSとして記録的な速度だ。

:::fact
公式ブログによれば、ARRは2025年1月の1億ドルから同年11月に10億ドルへ、2026年2月には20億ドルへと拡大した。資金調達はSeries C（2025年6月・9億ドル・評価額99億ドル）からSeries D（2025年11月・23億ドル・評価額293億ドル）へと5ヶ月で評価額が約3倍になっている。Series DにはNVIDIAとGoogleが新規投資家として参加した。
:::

:::guess
NVIDIAとGoogleという計算基盤の主要プレイヤー自身が出資者に名を連ねている点は、Cursorの原価構造（推論コスト）そのものへの戦略的な関心を示唆していると考えられる。ARRの急拡大は開発者個人・企業双方への浸透が同時進行していることの表れだが、推論コストの重いAIアプリケーションである以上、粗利率は従来型SaaSより構造的に低いとみられる。自社モデルComposerへの投資は、外部LLM APIへの原価依存を減らし収益性を改善する狙いを持つ、中長期の合理的な一手と推測される。
:::

拡張機能ではなくフォークを選ぶという、一見遠回りな技術判断が、エディタの主導権を握り、史上最速のSaaS成長を可能にした。Cursorは、AIネイティブな開発者ツールという新しい市場で、「土台を借りて、差別化点だけ自作する」という戦略がどこまで通用するかを試す最前線にいる。
