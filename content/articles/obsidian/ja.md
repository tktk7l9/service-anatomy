---
service: "Obsidian"
title: "ファイルはアプリより長生きする — Obsidianが10人で築いた「所有できるノート」"
description: "ローカルのMarkdownファイルにすべてを保存し、投資家を入れず、約10人のチームで世界的ノートアプリになったObsidian。File over appの思想と、無料本体+Sync/Publishの課金構造を解剖する。"
lead: "ノートアプリの主流がクラウドへ向かった10年に、Obsidianは逆を張った。データはただのMarkdownファイルとして手元に残り、運営は中身に触れられない。投資家ゼロ・約10人のチームがこの思想だけで世界的プロダクトを築いた構造を解剖する。"
category: productivity
tags: [markdown, local-first, electron, plugins, note-taking]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://obsidian.md/"
vendor: "Obsidian"
origin: "CA"
heroTheme: "obsidian"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "デスクトップアプリ"
    name: "Electron"
    confidence: confirmed
    evidence: "公式チェンジログにインストーラのElectron更新が継続的に記載（v1.12.7でElectron v39.8.3等）"
    evidenceUrl: "https://obsidian.md/changelog"
  - layer: "エディタエンジン"
    name: "CodeMirror"
    confidence: confirmed
    evidence: "公式チェンジログに更新記載（v1.13.1「Upgraded CodeMirror to the latest version」等）"
    evidenceUrl: "https://obsidian.md/changelog"
  - layer: "データ形式"
    name: "Local Markdown files"
    confidence: confirmed
    evidence: "公式の理念に「データは端末に保存され、運営からはアクセス不能」と明記"
    evidenceUrl: "https://obsidian.md/about"
  - layer: "拡張機構"
    name: "Community plugin API (JavaScript)"
    confidence: confirmed
    evidence: "公式のコミュニティプラグインディレクトリ"
    evidenceUrl: "https://obsidian.md/plugins"
  - layer: "同期"
    name: "Obsidian Sync (E2E encryption)"
    confidence: confirmed
    evidence: "料金ページにエンドツーエンド暗号化と版履歴を明記"
    evidenceUrl: "https://obsidian.md/pricing"
  - layer: "公式サイト配信"
    name: "Cloudflare / Fastly"
    confidence: confirmed
    evidence: "当サイトによるHTTPヘッダー観測（cf-ray と x-served-by: cache-nrt…/via: varnish が併存、2026-07-16）"
    evidenceUrl: "https://obsidian.md/"
sources:
  - label: "Obsidian 公式サイト"
    url: "https://obsidian.md/"
    accessedAt: "2026-07-16"
  - label: "Obsidian About（チーム・理念・資金方針）"
    url: "https://obsidian.md/about"
    accessedAt: "2026-07-16"
  - label: "Obsidian Pricing（無料範囲・Sync/Publish/Catalyst/Commercial）"
    url: "https://obsidian.md/pricing"
    accessedAt: "2026-07-16"
  - label: "Obsidian Changelog（Electron/CodeMirror更新の一次記録）"
    url: "https://obsidian.md/changelog"
    accessedAt: "2026-07-16"
---

NotionやEvernoteが「クラウドにすべてを預ける」方向へ進んだ10年間、その逆——「すべてを手元のファイルに残す」——を選んで世界的プロダクトになったのがObsidianだ。VCの資金を一円も入れず、約10人のチーム（と1匹のオフィス猫）で運営されるこのノートアプリを解剖する。

## サービス解説

Obsidianは、ローカルのMarkdownファイルを「Vault」と呼ぶただのフォルダで管理するノートアプリだ。ノート同士を`[[リンク]]`でつなぎ、知識のネットワーク（グラフ）として育てられる。

:::fact
公式のAboutページによれば、創業は2020年、共同創業者はShida Li氏とErica Xu氏で、現CEOはSteph Ango（kepano）氏。チームは約10名（エンジニア5名を含む）で、「100% supported by our users, not investors」と投資家資金に頼らない方針を明記している。掲げる原則は Yours / Durable / Private / Malleable / Independent の5つで、「データは端末に保存され、運営からはアクセス不能」とされる。アプリは個人・商用を問わず無料で使える。
:::

:::pull
アプリはいつか終わる。ファイルは残る——Obsidianの価値提案は、機能ではなく「所有」の再定義にある。
:::

::scorecard

## UX分析

ObsidianのUXは、一般的な「使いやすさ」の物差しでは測れない。

- **所有感がUXの核**。ノートはベンダーのDBのレコードではなく、自分のディスクの.mdファイルだ。サービス終了・値上げ・規約変更への不安が構造的に存在しないことが、道具への信頼＝長期利用を生む。
- **ローカルゆえの速度**。検索もリンクもグラフもオフラインで即時に動く。ネットワーク越しのノートアプリとの体感差は、ノートが数千件を超えたときに決定的になる。
- **可鍛性（Malleable）**。コミュニティプラグインとテーマで、タスク管理からZettelkastenまで自分専用の道具に組み替えられる。使い手が道具を育てるという、ソフトウェアでは希少な体験を提供する。
- **弱点は入口の急坂**。素のMarkdown、無数の設定、プラグインの海——初心者には「何をすればいいか分からない」道具でもある。クラウド同期が有料アドオンである点も、モバイル中心のライトユーザーには摩擦になる。

つまりObsidianは、万人向けの快適さを捨てて「道具を育てたい人」に全振りしたUXであり、その割り切りこそが熱量の高いコミュニティを作っている。

## 技術構成

::techstack

:::fact
デスクトップ版はElectron製で、エディタはCodeMirrorベース——いずれも公式チェンジログのアップデート記録（インストーラのElectron更新、CodeMirror更新）で確認できる。同期アドオンのObsidian Syncはエンドツーエンド暗号化を明記しており、平文のノートが運営サーバーに置かれない設計だ。公式サイトは当サイトの観測でCloudflareとFastly（varnish/cache-nrt）の痕跡が併存していた。
:::

:::guess
データ形式が「ただのMarkdownファイル」であることは、技術選定というより事業戦略とみられる。ユーザーのスイッチングコストを意図的にゼロへ近づける（いつでも他のツールで開ける）ことで、ロックインの代わりに信頼で引き留める構造だ。プラグインAPIをJavaScriptで開放したことも、開発リソース10人という制約を、数千のコミュニティ開発者で補う leverage として機能していると推測される。
:::

## ビジネスモデル

本体は無料のまま、選択的な課金だけで運営を成立させている。

:::fact
料金ページによれば、アプリ本体は個人・商用とも無料。有料はデバイス間同期のSync（年払いで月4ドル）、WebサイトとしてノートをホストするPublish（年払いで月8ドル/サイト）、ベータ早期アクセスのCatalyst（買い切り25ドル）、任意の商用ライセンス（ユーザーあたり年50ドル）で構成される。
:::

:::guess
この構造は「思想への共感がそのまま課金理由になる」設計とみられる。SyncとPublishは、ローカルファーストの弱点（マルチデバイス・共有）だけをピンポイントで補う機能であり、本体の無料性と競合しない。VC資金がないことは成長速度の制約である一方、「ユーザー以外に説明責任を負わない」という理念の担保として、むしろプロダクトの競争力に転化している。約10人のチーム規模から逆算すると、数十万人規模の課金ユーザーで十分に持続する損益構造と推測される。
:::

ファイルはアプリより長生きする。Obsidianは、AI時代にますます増える「自分の知識をどこに置くか」という不安に対して、最も保守的で、それゆえ最も先進的な答えを出したプロダクトだ。
