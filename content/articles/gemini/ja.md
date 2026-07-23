---
service: "Gemini"
title: "チップも作る、配信網も持っている — Geminiが唯一「何も借りずに」戦える理由"
description: "Google DeepMindが開発する対話AI Gemini。前身Bardからのブランド統合、自社設計チップTPUでのモデル学習、Search・Android・Workspaceという既存の配信網——競合が計算資源を複数社から調達し続けるなか、チップから配信まで自社で完結させる垂直統合の構造を公式情報から解剖する。"
lead: "ChatGPTもClaudeも、モデルを動かす計算資源を他社から買っている。Geminiだけが、自社設計のチップ（TPU）でモデルを学習し、Search・Android・Chrome・Workspaceという世界最大級の配信網に無償で乗せて何十億人に届けている。2023年に「Bard」から改称してから3年弱で、唯一「何も借りずに」AI競争を戦えるプレイヤーになった会社の設計を解剖する。"
category: ai-tool
tags: [ai-assistant, llm, multimodal, tpu, google]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://gemini.google.com/"
vendor: "Google LLC"
origin: "US"
heroTheme: "gemini"
scores: { product: 4.5, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "モデル基盤"
    name: "Geminiモデルファミリー（3.6 Flash / 3.1 Pro / 3.1 Deep Think 等）"
    confidence: confirmed
    evidence: "開発元Google DeepMindの公式モデルページに、用途別に分かれた複数バージョン（3.6 Flash・3.5 Flash-Lite・3.1 Pro・3.1 Deep Think・Omni等）が掲載されていることを実確認"
    evidenceUrl: "https://deepmind.google/models/gemini/"
  - layer: "研究開発体制"
    name: "Google DeepMind"
    confidence: confirmed
    evidence: "Geminiの開発元としてGoogle DeepMindの公式サイトに明記。旧Google BrainとDeepMindの統合後の組織"
    evidenceUrl: "https://deepmind.google/models/gemini/"
  - layer: "計算基盤（自社設計）"
    name: "Google TPU (v4 / v5e / v5p)"
    confidence: confirmed
    evidence: "Google公式ブログ（2023-12-06）に、Gemini 1.0を自社設計チップTPU v4・v5eで学習したと明記。同時に次世代のTPU v5pも発表された"
    evidenceUrl: "https://blog.google/technology/ai/google-gemini-ai/"
  - layer: "サブスクリプション基盤"
    name: "Google One AI Premium（Google AI Pro / Ultra）"
    confidence: confirmed
    evidence: "Google公式サイトに、Google AI Plus・Pro・Ultraの3段階プランがGoogle Oneのストレージと統合されて提供されていると明記"
    evidenceUrl: "https://one.google.com/about/google-ai-plans/"
  - layer: "配信統合"
    name: "Android（Pixel / Galaxy 標準アシスタント）"
    confidence: likely
    evidence: "Wikipediaの集約情報によれば、Pixel 9・Galaxy S25シリーズでGeminiが標準アシスタントとして採用されたとされる。Google自身の技術ページでは未確認のためlikely扱い"
sources:
  - label: "Google DeepMind公式: Geminiモデルページ（モデルファミリー・バージョン一覧）"
    url: "https://deepmind.google/models/gemini/"
    accessedAt: "2026-07-23"
  - label: "Google公式ブログ: Gemini発表（2023-12-06・TPU v4/v5eでの学習・Bard/Duet AI統合の経緯）"
    url: "https://blog.google/technology/ai/google-gemini-ai/"
    accessedAt: "2026-07-23"
  - label: "Google One公式: AI Plans（Plus/Pro/Ultraの3段階プラン）"
    url: "https://one.google.com/about/google-ai-plans/"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Gemini (chatbot)（Bardからの改称史・モデルバージョン史・Android統合の集約）"
    url: "https://en.wikipedia.org/wiki/Gemini_(chatbot)"
    accessedAt: "2026-07-23"
---

## サービス解説

Geminiは、Google DeepMindが開発する対話型AIだ。前身は2023年3月公開の「Bard」で、2024年2月にBardと生産性ツール向けAI「Duet AI」がGeminiブランドへ統合された。開発元のGoogle DeepMindは、旧Google BrainとDeepMindが統合してできた研究組織で、モデルの研究開発を担う。

:::fact
Google公式ブログ（2023年12月6日）によれば、初代Gemini 1.0はUltra・Pro・Nanoの3サイズで構成され、自社設計チップのTPU v4・v5eで学習されたと明記されている。同時に次世代のCloud TPU v5pも発表された。Google DeepMind公式のモデルページでは、2026年時点でGemini 3.6 Flash・Gemini 3.1 Pro・Gemini 3.1 Deep Think・マルチモーダル特化のGemini Omniなど、用途別に細分化された複数バージョンが公開されていることを確認した。
:::

:::pull
ChatGPTもClaudeも、計算資源は他社から買っている。Geminiだけが、チップも自社設計、配信網も自社所有。競争の土俵そのものが違う。
:::

::scorecard

## UX分析

GeminiのUXは、単体アプリとしての磨き込みより、Google製品群全体への浸透を優先する設計になっている。

- **Bard・Duet AIからの統合でブランドが複雑化した経緯**。2023年3月のBard公開から2024年2月のGemini統合まで、短期間でブランドと機能が再編されており、単体アプリとしての体験の一貫性は、後発のChatGPT/Claudeに比べて積み上げの時間が短い。
- **単体アプリではなく「どこにでもいる」設計**。Search・Workspace（Gmail/Docs/Sheets）・Android・Chrome・Google Photos・Messagesと、既存のGoogle製品の隅々に組み込まれており、ユーザーは新しいアプリを開かなくてもGeminiに触れる。
- **料金プランはストレージと一体化**。Google AI Plus/Pro/UltraはGoogle Oneのストレージ容量（400GB〜20TB以上）とセットで提供され、AI機能単体でなく「Googleサービス全体の契約」として設計されている。
- **Android標準搭載という配信上の優位**。PixelやGalaxyといった主要Androidデバイスで標準アシスタントとして採用されており、ユーザーが能動的にアプリを探してインストールする必要がない。

## 技術構成

::techstack

:::fact
Google公式ブログによれば、Geminiは自社設計のTPU（Tensor Processing Unit）で学習されている。初代Gemini 1.0はTPU v4・v5eで学習され、以降のTPU v5pなど後継世代も投入されている。開発元のGoogle DeepMindは、旧Google BrainとDeepMindの統合組織で、2026年時点ではGemini 3.6 Flash（トークン効率重視）・Gemini 3.1 Pro（複雑タスク向け）・Gemini 3.1 Deep Think（科学・研究向け）・Gemini Omni（マルチモーダル）など、用途別に細分化されたモデル群を公開している。
:::

:::guess
自社設計チップ（TPU）でモデルを学習し、自社が既に持つ配信網（Search・Android・Workspace）に無償で乗せられる構造は、外部のクラウドベンダーからチップと計算力を調達し続けなければならない競合とは根本的に異なるコスト構造を持つと考えられる。ChatGPT・Claudeがそれぞれ複数のクラウド企業と巨額契約を結んで計算資源を確保しているのに対し、Geminiは「借りる」コストがそもそも構造的に小さい。この垂直統合の強みは、モデル単体の性能競争では見えにくいが、長期的な原価構造の差として効いてくる可能性があると推測される。
:::

## ビジネスモデル

Geminiの収益モデルは、単体のサブスクリプションというより、Google全体のエコシステムへの組み込みが中心だ。

:::fact
公式サイトによれば、個人向けにはGoogle One AI Premiumとして、Google AI Plus・Pro・Ultraの3段階プランが提供されている。各プランはGmail・Google Drive・Google PhotosのストレージとGeminiの利用上限がセットになっており、Ultraでは最上位モデルへの優先アクセスも含まれる。加えて、Vertex AI経由での企業向けAPI提供、Google Workspace各製品への組み込み、Android端末での標準アシスタント採用など、単体課金以外の複数の経路で収益・利用機会を確保している。
:::

:::guess
GeminiがGoogle Oneのストレージ契約と一体化した料金設計を取っているのは、AI機能単体で新規契約者を獲得するより、既存の巨大なGoogleユーザー基盤（Gmail・検索・Android）に対してアップセルする方が獲得コストが低いという判断によるものと考えられる。ChatGPT・Claudeが新規ユーザーをゼロから獲得しなければならないのに対し、Geminiはすでに数十億人が使っているサービス群への「追加機能」として展開できる——広告やクラウドで築いた配信網を、AI競争でも横展開する構図だ。この配信面の優位こそが、Googleがモデル単体の性能競争に多少後れを取っても揺るがない構造的な強みになっていると推測される。
:::

チップは自社設計、配信網は既存のSearch・Android・Workspace、収益はストレージ契約との一体化。GeminiがChatGPT・Claudeと最も違うのは、モデルの賢さではなく、外部に何も借りずに競争できる構造そのものだ。Bardからの改称という混乱した出自を持ちながら、垂直統合という一点で、Geminiは他の2社と異なる土俵に立っている。
