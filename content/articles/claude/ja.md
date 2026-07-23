---
service: "Claude"
title: "研究所は安全性を、製品は速度を追う — Anthropicが二枚看板で駆け抜けた5年"
description: "AI安全性研究所として2021年に生まれたAnthropicは、5年で評価額9,650億ドルの企業に成長した。会社サイトをanthropic.com（研究・安全性）とclaude.com（製品）に分割し、独自プロトコルMCPをオープンソース化し、Amazon・Google・Microsoftの3社から計算資源を調達する——公開情報からClaudeとAnthropicの設計を解剖する。"
lead: "Anthropicの公式サイトはいま、2つのドメインに分かれている。研究と安全性を語るanthropic.comと、製品を売るclaude.com。2021年に元OpenAI社員7人が「もっと安全なAI」を掲げて始めた会社は、2026年5月に評価額9,650億ドルへ到達し、同年6月には非公開のIPO申請を行ったと報じられた。安全性のミッションと、上場に向かう成長速度をどう両立させているのかを解剖する。"
category: ai-tool
tags: [ai-assistant, llm, api, developer-tools, mcp]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://claude.com/"
vendor: "Anthropic, PBC"
origin: "US"
heroTheme: "claude"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "基盤モデル"
    name: "Claudeモデルファミリー（最新はClaude Sonnet 5）"
    confidence: confirmed
    evidence: "Anthropic公式ニュースルームに、コーディング・エージェント・専門業務全般でフロンティア性能を謳うClaude Sonnet 5のリリース（2026-06-30）が掲載されていることを実確認"
    evidenceUrl: "https://www.anthropic.com/news"
  - layer: "計算基盤（主契約）"
    name: "AWS Trainium / Inferentia（Amazon）"
    confidence: confirmed
    evidence: "Anthropic公式発表に、AWSを「ミッションクリティカルな処理の主要クラウド」と位置づけ、Amazon独自チップTrainium・Inferentiaをモデルの学習・提供に用いると明記。Amazonは最大40億ドルを投資"
    evidenceUrl: "https://www.anthropic.com/news/anthropic-amazon"
  - layer: "計算基盤（補完契約）"
    name: "Google Cloud TPU"
    confidence: likely
    evidence: "AmazonへのAWS一本化に加え、GoogleもAnthropicへ出資・TPU提供で提携していると複数メディアが報じている（2023年10月に5億ドル出資・累計20億ドルの提携を発表、2025年にはTPU提供拡大の報道）。Anthropic自身の技術詳細ページは未確認のためlikely扱い"
  - layer: "エージェント間連携プロトコル"
    name: "Model Context Protocol (MCP)"
    confidence: confirmed
    evidence: "Anthropic公式発表（2024-11-25）に、AIとデータソースを安全に繋ぐオープン標準として無償公開したと明記。仕様・SDK・サーバー実装群をOSSで公開"
    evidenceUrl: "https://www.anthropic.com/news/model-context-protocol"
  - layer: "開発者向け実行環境"
    name: "Claude Code"
    confidence: confirmed
    evidence: "公式製品ページに、ターミナル・IDE拡張・Web・モバイル・Slackなど複数の入口からコードベースを直接操作できるエージェント型CLIと明記"
    evidenceUrl: "https://claude.com/product/claude-code"
sources:
  - label: "Anthropic公式: Company（Public Benefit Corporationとしての使命・ガバナンス）"
    url: "https://www.anthropic.com/company"
    accessedAt: "2026-07-23"
  - label: "Anthropic公式: Amazon提携発表（出資額・AWS Trainium/Inferentiaの役割）"
    url: "https://www.anthropic.com/news/anthropic-amazon"
    accessedAt: "2026-07-23"
  - label: "Anthropic公式: Model Context Protocol発表（2024-11-25・オープン標準化）"
    url: "https://www.anthropic.com/news/model-context-protocol"
    accessedAt: "2026-07-23"
  - label: "Claude公式: Pricing（Free/Pro/Max/Team/Enterpriseの料金体系）"
    url: "https://claude.com/pricing"
    accessedAt: "2026-07-23"
  - label: "Claude公式: Claude Code製品ページ（提供チャネル・機能）"
    url: "https://claude.com/product/claude-code"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Anthropic（創業経緯・資金調達史・評価額推移・IPO報道の集約）"
    url: "https://en.wikipedia.org/wiki/Anthropic"
    accessedAt: "2026-07-23"
---

## サービス解説

Anthropicは2021年1月26日、OpenAIを離れた研究者7人（Dario Amodei、Daniela Amodei兄妹ら）によって設立された。目的はAIの安全性研究と、その知見を実装した対話AI「Claude」の開発だ。運営会社はPublic Benefit Corporation（PBC）という法人格を選び、公式サイトには「先進的なAIを人類の長期的利益のために責任をもって開発・維持すること」を定款上の目的として明記している。

:::fact
Anthropicの公式サイトは現在、研究・安全性の話をするanthropic.comと、製品を売るclaude.comの2ドメインに分かれている（本記事執筆時点で実確認）。会社の規模感について、2026年時点の従業員数はおよそ2,500人とされ、資金調達は2021年5月のシード（1億2,400万ドル）から始まり、2023年のAmazon出資（最大40億ドル）・Google出資（累計20億ドル）を経て、2026年5月には650億ドルの追加調達により評価額9,650億ドルに達したと報じられている（Wikipedia集約）。同年6月には非公開のIPO申請を行い、秋のIPOを目指していると報じられた。
:::

:::pull
「AIの安全性を掲げる研究所」として生まれた会社が、5年で評価額9,650億ドルの上場準備企業になった。安全性と成長速度は、両立しないはずの二つの目的語だった。
:::

::scorecard

## UX分析

ClaudeのUXは、単一のチャット画面ではなく、複数の入口を意図的に用意する設計に向かっている。

- **会社と製品でドメインを分離**。研究・安全性の発信はanthropic.com、実際に使う製品はclaude.comと明確に切り分けられており、企業としての立ち位置（安全性）と製品としての立ち位置（実用性）を同じサイトで混ぜていない。
- **開発者向けの入口が異常に多い**。Claude Codeはターミナル・VS Code/JetBrains拡張・ブラウザ（claude.ai/code）・iOS/Androidアプリ・Slack・デスクトップアプリの6経路から使え、「コードベースの隣にAIを置く」という発想を1つのチャネルに絞っていない。
- **料金プランがFree/Pro/Max/Team/Enterpriseの5段階**。個人利用（月0〜20ドル）からヘビーユーザー向けMax（月100ドル〜）、チーム（席課金）、企業向け（従量課金＋席課金、または個別契約）まで、利用量に応じた粒度で分かれている。
- **API利用は別会計**。サブスクリプションはあくまでチャット/エージェント利用向けで、API従量課金は別体系。開発者は「製品として使う」か「基盤として組み込む」かで支払い方が分岐する構造だ。

## 技術構成

::techstack

:::fact
Anthropicは計算基盤をAmazon・Google・Microsoftの3社に分散して調達している。公式発表によれば、AWSは「ミッションクリティカルな処理の主要クラウド」であり、Amazon独自チップのTrainium・Inferentiaをモデルの学習・提供に使う。これとは別に、Googleとの提携（出資累計20億ドル）でもTPUの利用が報じられている。2024年11月には、AIとデータソースを安全に接続するオープン標準「Model Context Protocol（MCP）」を無償・OSSで公開し、仕様・SDK・主要プラットフォーム向けサーバー実装まで一括で提供した。
:::

:::guess
複数の大手クラウド（AWS・Google Cloud・Microsoft Azure）に計算資源を分散させているのは、単一ベンダーへの依存によって価格交渉力や供給リスクを握られることを避ける戦略とみられる。主要な競合の一角が特定クラウドに深く依存する構造を取っているのとは対照的に、Anthropicは出資と計算資源提供を分けて複数社から引き出すことで、資本と計算力の両方を分散調達している格好だ。MCPのオープンソース化も同じ発想の延長と考えられる——エージェント同士やツールとの接続規格を自社だけで囲い込まず、業界標準として公開することで、Claude自身をその標準の上に乗る一プレイヤーとしてではなく、標準を作った側として位置づける狙いがあると推測される。
:::

## ビジネスモデル

Anthropicの収益は、個人・チーム向けサブスクリプションと、開発者向けAPI従量課金の二本柱だ。

:::fact
公式の料金ページによれば、Claudeの個人プランはFree（無料）、Pro（月17〜20ドル）、Max（月100ドル〜、利用量5倍/20倍）、Team（席課金・月20〜125ドル）、Enterprise（セルフサーブは席課金＋API従量、または個別契約）の5段階。API利用は別途、モデルとタスクに応じた従量課金と説明されている。資金調達面では、2021年の1億2,400万ドルのシードから、Amazon（最大40億ドル）・Google（累計20億ドル）・Microsoft（2025年11月に300億ドル規模のAzure計算力契約）の出資・提携を経て、2026年5月に評価額9,650億ドルへ到達したと報じられており、同年6月には非公開のIPO申請を行ったとされる。
:::

:::guess
サブスクリプションとAPIの二本柱は、個人ユーザーの月額課金という予測可能な収益と、企業の従量課金という規模拡大に連動する収益を同時に持つ設計であり、開発者向けのClaude CodeやMCPへの投資は後者を太らせるための布石と考えられる。IPOに向かいながらもPBC（Public Benefit Corporation）という法人格とLong-Term Benefit Trustというガバナンス機構を維持している点は、上場後に短期的な株主利益と「責任あるAI開発」という定款上の目的が衝突したときに、どちらが優先されるかという緊張を制度として抱え込んだままの上場になることを意味するとみられる。その緊張が実際にどう機能するかは、上場後にしか検証できない。
:::

安全性研究所として始まった会社が、5年で3大クラウド企業を出資者・計算資源の供給元として抱え、自ら定めたプロトコルを業界標準に押し上げ、上場を準備するところまで来た。Anthropicの解剖から見えるのは、「安全性」という制約を掲げたまま最速で成長するために、会社の看板を二枚に分け、計算資源を複数社に分散し、囲い込みではなく標準化で技術的な主導権を握るという、一貫した分散志向の設計思想である。
