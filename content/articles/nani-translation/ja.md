---
service: "Nani翻訳"
title: "翻訳を「相談」に変える — Nani翻訳が体現する個人開発SaaSの完成形"
description: "Zennを生んだ個人開発者catnoseによるAI翻訳ツールNani翻訳。TTFT基準でLLMを使い分ける速度設計、Electron+Next.jsの構成、フリーミアムの作り方を、開発者自身の一次情報から解剖する。"
lead: "訳文だけを返す翻訳機ではなく、ニュアンスの解説と言い換え候補まで添えて「ネイティブに相談する」体験を再現する。Zennを生んだ個人開発者catnoseの新作Nani翻訳は、AI時代の翻訳ツールの設計と、個人開発SaaSの技術選定の教科書になっている。"
category: ai-tool
tags: [ai, translation, electron, nextjs, indie-dev]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://nani.now/ja"
vendor: "合同会社Kioku"
origin: "JP"
heroTheme: "nani-translate"
scores: { product: 4.0, ux: 4.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Web/バックエンド"
    name: "Next.js (App Router)"
    confidence: confirmed
    evidence: "当サイトによるHTTPヘッダー観測（x-powered-by: Next.js・rsc系vary、2026-07-16）と開発者自身の技術解説"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "ホスティング"
    name: "Vercel"
    confidence: confirmed
    evidence: "HTTPヘッダー観測（server: Vercel・x-vercel-id=hnd1[東京]、2026-07-16）"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "デスクトップアプリ"
    name: "Electron"
    confidence: confirmed
    evidence: "開発者の技術解説。Tauriを試した後、起動速度等の理由でElectron（Electron Vite + Electron Builder）へ"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "APIレイヤー"
    name: "Hono"
    confidence: confirmed
    evidence: "開発者の技術解説（Next.jsのRoute Handler上でHonoを使用）"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "データベース"
    name: "Turso (SQLite) + Drizzle"
    confidence: confirmed
    evidence: "開発者の技術解説"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "キャッシュ/レート制限"
    name: "Upstash Redis"
    confidence: confirmed
    evidence: "開発者の技術解説"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "LLM API"
    name: "Google / OpenAI / Groq"
    confidence: confirmed
    evidence: "開発者の技術解説。TTFT（最初のトークンまでの時間）に応じて使い分け、基本翻訳はGoogle/Groq優先"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
  - layer: "決済"
    name: "Stripe"
    confidence: confirmed
    evidence: "開発者の技術解説"
    evidenceUrl: "https://zenn.dev/catnose99/articles/nani-translate"
sources:
  - label: "Nani翻訳 公式サイト（機能紹介）"
    url: "https://nani.now/ja/about"
    accessedAt: "2026-07-16"
  - label: "Nani翻訳 料金ページ（無料/PRO）"
    url: "https://nani.now/ja/pricing"
    accessedAt: "2026-07-16"
  - label: "Zenn: Nani翻訳の技術的な話（開発者catnose本人による解説）"
    url: "https://zenn.dev/catnose99/articles/nani-translate"
    accessedAt: "2026-07-16"
  - label: "PR TIMES: AI翻訳ツール『Nani !?』を公開（合同会社Kioku）"
    url: "https://prtimes.jp/main/html/rd/p/000000004.000170738.html"
    accessedAt: "2026-07-16"
---

DeepLやGoogle翻訳が「訳文を返す機械」だとすれば、Nani翻訳が目指しているのは「隣の席のネイティブ」だ。訳して終わりではなく、そのニュアンスの解説、トーン別の言い換え、例文までを一息で返す。作者は、日本のエンジニアなら誰もが知る技術情報共有サービスZennを個人開発で生み出したcatnose氏。本記事では、この「個人開発SaaSの完成形」とも言えるプロダクトを解剖する。

## サービス解説

Nani翻訳は、合同会社Kiokuが提供するAI翻訳ツールだ。Web版に加えてmacOS/Windowsのデスクトップアプリがあり、任意のアプリでテキストを選択してショートカットを押すだけで翻訳が起動する。

:::fact
公式サイトによれば、主な機能は①複数のトーン（カジュアル/フォーマル等）での訳し分け ②ニュアンス解説と例文の提示 ③AI添削（誤字脱字・表現改善）④スクリーンショット・画像の翻訳 ⑤ローカル保存の翻訳履歴。無料プランでも基本翻訳・添削・画像翻訳が使え、PROプラン（月額1,000円、年払い12,000円）で高性能モデル・長文上限10万字・月200万トークン超が解放される。
:::

「何?」という日本語の相槌をそのままサービス名にした軽やかさも含めて、道具というより相棒としてデザインされている。

:::pull
訳文を返すだけなら翻訳機で足りる。ニュアンスまで返すから「相談」になる——Nani翻訳の発明は、翻訳の出力形式を変えたことだ。
:::

::scorecard

## UX分析

Nani翻訳のUXの核は**速度**と**文脈**の2つに集約される。

- **ショートカット起点の設計**。翻訳のためにブラウザのタブを開かせない。OSのどこにいても選択→ショートカットで完結する導線は、翻訳を「作業の中断」から「作業の一部」に変える。
- **速度を機能として扱う**。後述するように、LLMの応答は「最初の1文字が出るまでの時間（TTFT）」を基準にプロバイダーを使い分けている。ストリーミングで即座に文字が流れ始める体験は、体感品質に直結する。
- **訳し分けの提示**。同じ文でもカジュアル/フォーマルなど複数案を並べて返すため、ユーザーは「正解を受け取る」のではなく「選ぶ」。言語学習の副次効果も生む。
- **プライバシーの明示**。翻訳履歴はローカル完結を明言しており、業務文書を扱う心理的ハードルを下げている。

競合がDeepL・Google翻訳・ChatGPT直叩きという強豪揃いの中で、「専用UIの速度と文脈」で差別化する構図だ。

## 技術構成

本作の技術構成は、開発者本人がZennで詳細に公開しているため、確度の高い情報が揃っている。当サイトでも2026年7月16日にHTTPレスポンスヘッダーを観測し、Web版がNext.js（App Router）+ Vercel（東京リージョン）で動いていることを確認した。

::techstack

:::fact
開発者の解説によれば、デスクトップアプリは当初Tauriで検討したが、起動速度などの理由からElectron（Electron Vite + Electron Builder）を採用。UIはTypeScript / React / Tailwind CSSでWeb版と共通化し、モノレポ（pnpm + Turborepo）で管理。LLMはGoogle・OpenAI・GroqのAPIをTTFT基準で使い分け、基本翻訳はTTFTの小さいGoogle/Groqを優先している。
:::

:::guess
「軽量なTauriではなくElectron」という選択は、Rust製の新しいものより枯れて確実なものを取るcatnose氏の一貫した技術選定思想の表れとみられる。DB（Turso）・キャッシュ（Upstash）・決済（Stripe）もすべてマネージドサービスで固めており、個人開発者がインフラ運用に時間を吸われないための構成と推測される。翻訳モデルを自前で持たず、複数のLLM APIの「良いとこ取り」をルーティングで実現するアプローチは、モデルの進化がそのままプロダクトの進化になる利点もある。
:::

## ビジネスモデル

料金は無料プランとPRO（月額1,000円/年払い12,000円）の2段構えのフリーミアムで、チーム・法人プランも用意されている。

:::guess
原価構造の主役はLLM APIの従量課金だ。無料プランにも翻訳上限（4,000字）とトークン制限があるのは、API原価を無料ユーザーの獲得コストとして予算化する設計とみられる。TTFT基準でGoogle/Groqを優先するルーティングは、体験の最適化であると同時に、単価の高いモデルの使用を必要な場面に絞るコスト制御でもあると推測される。
:::

個人開発の翻訳ツールにとっての最大のリスクは、OSベンダーの標準機能化（Apple Intelligence等の端末内翻訳）と、汎用チャットAIの浸透だろう。それでも「選択→即翻訳」という専用導線の速さと、翻訳+解説という出力形式は、汎用ツールが構造的に真似しにくい。Zennで実証済みの「開発者自身が最強のマーケティングチャネル」という飛び道具も含めて、個人開発SaaSの生存戦略の見本市のようなプロダクトだ。

翻訳を「相談」に変えるという再定義と、TTFTを軸にした速度設計。Nani翻訳は、AIをどう「機能」に落とし込むかという問いへの、現時点で最も洗練された個人開発の回答のひとつである。
