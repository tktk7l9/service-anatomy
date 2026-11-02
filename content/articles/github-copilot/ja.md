---
service: "GitHub Copilot"
title: "定額の席がメーターに変わった — 月10ドルの補完から、トークンで課金するエージェント基盤へ。GitHub Copilotの料金表を解剖する"
description: "2022年に月10ドルの定額で売り出されたGitHub Copilotは、2026年6月1日にトークン単位の従量課金へ移った。プレミアムリクエストからGitHub AI Creditsへの移行、ベースとフレックスの二層の枠、Copilot Fusionのルーティング、クラウドエージェントの実行環境、個人プランのデータを学習に使う既定設定、そしてMicrosoftの決算説明会で語られた数字までを、公式情報から解剖する。"
lead: "「手軽な質問と数時間の自律コーディングが、利用者には同じ料金になり得る」。GitHubは2026年4月、Copilotの定額的な料金設計をそう説明して手放した。補完は枠の外に残し、チャットとエージェントはトークンで測る。席はプリペイドのクレジットになり、他社モデルはAPI価格で通過し、Microsoftの決算説明会には消費という言葉が並び始めた。Copilotは何を売る商品に変わったのか。料金表と決算の発言から読み解く。"
category: dev-tool
tags: [ai, developer-tools, code-assistant, coding-agent, github, usage-based-pricing]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://github.com/features/copilot"
vendor: "GitHub, Inc.（Microsoft傘下）"
origin: "US"
heroTheme: "github-copilot"
scores: { product: 4.5, ux: 3.5, tech: 4.5, business: 4.5 }
techStack:
  - layer: "エディタ統合"
    name: "VS Code (vscode-copilot-chat merged into core)"
    confidence: confirmed
    evidence: "MIT ライセンスのリポジトリ microsoft/vscode-copilot-chat の README に、プロジェクトは VS Code 本体のリポジトリへ移されたと明記。リポジトリは2026年5月20日にアーカイブ済み（2026-11-02確認）"
    evidenceUrl: "https://github.com/microsoft/vscode-copilot-chat"
  - layer: "モデルルーター"
    name: "Copilot Fusion"
    confidence: confirmed
    evidence: "公式ドキュメントが「ランタイムのモデルルーター兼オーケストレーター」と説明し、Single・Cascade・Critique の実行パターンを明記（2026-11-02確認）"
    evidenceUrl: "https://docs.github.com/en/copilot/concepts/models/copilot-fusion"
  - layer: "他社モデルの配信"
    name: "OpenAI / Anthropic / Google / xAI"
    confidence: confirmed
    evidence: "公式ドキュメントのモデルホスティングに、GPTはOpenAIとGitHubのAzure基盤、ClaudeはAWS・Anthropic・Google Cloud、GeminiはGoogle Cloud、GrokはxAIで配信すると明記（2026-11-02確認）"
    evidenceUrl: "https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
  - layer: "Microsoftの自社モデル"
    name: "MAI-Code-1.1-Flash (Azure AI Foundry)"
    confidence: confirmed
    evidence: "公式ドキュメントに、Microsoftのファーストパーティモデルで、GitHubのテナント内のAzure AI Foundryで配信すると明記。入力100万トークン0.20ドル・出力1.20ドル（2026-11-02確認）"
    evidenceUrl: "https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
  - layer: "オープンウェイトモデルと無料プランの補完"
    name: "Fireworks AI"
    confidence: confirmed
    evidence: "公式ドキュメントに、Kimi K3はGitHubがFireworks AI上で配信し、Copilot FreeとStudentのインライン候補のモデルもFireworks AIで配信すると明記。Business・EnterpriseのインラインはAzure（2026-11-02確認）"
    evidenceUrl: "https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
  - layer: "クラウドエージェントの実行環境"
    name: "GitHub Actions / cloud sandboxes"
    confidence: confirmed
    evidence: "公式ドキュメントに2つの環境が併記される。Actionsは単一リポジトリで59分の上限、サンドボックスは複数リポジトリのセッションに対応（2026-11-02確認）"
    evidenceUrl: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent"
  - layer: "製品ページの配信"
    name: "GitHub-operated delivery"
    confidence: likely
    evidence: "製品ページのレスポンスヘッダーの実観測（server: github.com、x-github-request-id、2026-11-02）。ページの配信元を示すだけで、Copilot本体の構成を示すものではない"
sources:
  - label: "Microsoft IR: FY27 第1四半期 決算説明会（2026-10-28）"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2027/earnings-fy-2027-q1"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY26 第4四半期 決算説明会（2026-07-29）"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q4"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY26 第3四半期 決算説明会（2026-04-29）"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q3"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY26 第2四半期 決算説明会（2026-01-28）"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q2"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY26 第1四半期 決算説明会（2025-10-29）"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q1"
    accessedAt: "2026-11-02"
  - label: "Microsoft IR: FY25 第4四半期 決算説明会（2025-07-30）"
    url: "https://www.microsoft.com/en-us/investor/events/fy-2025/earnings-fy-2025-q4"
    accessedAt: "2026-11-02"
  - label: "Microsoft公式: Microsoft to acquire GitHub for $7.5 billion（2018-06-04）"
    url: "https://news.microsoft.com/source/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: Plans for GitHub Copilot（プラン・枠・モデル）"
    url: "https://docs.github.com/en/copilot/get-started/plans"
    accessedAt: "2026-11-02"
  - label: "GitHub公式: Copilotのプラン比較ページ"
    url: "https://github.com/features/copilot/plans"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: Usage-based billing for individuals"
    url: "https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: Usage-based billing for organizations and enterprises"
    url: "https://docs.github.com/en/copilot/concepts/billing-and-usage/organizations-and-enterprises/billing"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: Models and pricing（モデル別のトークン単価）"
    url: "https://docs.github.com/en/copilot/reference/copilot-billing/models-and-pricing"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: Billing for cloud and local sandboxes"
    url: "https://docs.github.com/en/billing/concepts/product-billing/cloud-and-local-sandboxes"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: GitHub Copilot is moving to usage-based billing（2026-04-27）"
    url: "https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Changes to GitHub Copilot Individual plans（2026-04-20）"
    url: "https://github.blog/news-insights/company-news/changes-to-github-copilot-individual-plans/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Introducing flex allotments in Pro and Pro+, and a new Max plan（2026-05-12）"
    url: "https://github.blog/news-insights/company-news/github-copilot-individual-plans-introducing-flex-allotments-in-pro-and-pro-and-a-new-max-plan/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Updates to GitHub Copilot billing and plans（2026-06-01）"
    url: "https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Copilot individual plan sign-ups are reopening（2026-06-17）"
    url: "https://github.blog/changelog/2026-06-17-copilot-individual-plan-sign-ups-are-reopening/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Upcoming changes to GitHub Copilot policies and billing（2026-08-28）"
    url: "https://github.blog/changelog/2026-08-28-upcoming-changes-to-github-copilot-policies-and-billing/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Announcing GitHub Copilot Pro+（2025-04-04）"
    url: "https://github.blog/changelog/2025-04-04-announcing-github-copilot-pro/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Update to GitHub Copilot consumptive billing experience（2025-06-18）"
    url: "https://github.blog/changelog/2025-06-18-update-to-github-copilot-consumptive-billing-experience/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Coding agent now uses one premium request per session（2025-07-10）"
    url: "https://github.blog/changelog/2025-07-10-github-copilot-coding-agent-now-uses-one-premium-request-per-session/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Copilot coding agent is now generally available（2025-09-25）"
    url: "https://github.blog/changelog/2025-09-25-copilot-coding-agent-is-now-generally-available/"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: About Copilot cloud agent"
    url: "https://docs.github.com/en/copilot/concepts/agents/cloud-agent/about-cloud-agent"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: About third-party agents"
    url: "https://docs.github.com/en/copilot/concepts/agents/about-third-party-agents"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: About Copilot code review"
    url: "https://docs.github.com/en/copilot/concepts/code-review/code-review"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: About GitHub Copilot Fusion"
    url: "https://docs.github.com/en/copilot/concepts/models/copilot-fusion"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Route and orchestrate models with GitHub Copilot Fusion（2026-10-28）"
    url: "https://github.blog/changelog/2026-10-28-route-and-orchestrate-models-with-github-copilot-fusion/"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: Hosting of models for GitHub Copilot"
    url: "https://docs.github.com/en/copilot/reference/ai-models/model-hosting"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: MAI-Code-1-Flash available on more Copilot surfaces（2026-06-18）"
    url: "https://github.blog/changelog/2026-06-18-mai-code-1-flash-available-on-more-copilot-surfaces/"
    accessedAt: "2026-11-02"
  - label: "GitHub公式ドキュメント: Managing GitHub Copilot policies as an individual subscriber（学習の設定）"
    url: "https://docs.github.com/en/copilot/how-tos/manage-your-account/manage-policies"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Updates to GitHub Copilot interaction data usage policy（2026-03-25）"
    url: "https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/"
    accessedAt: "2026-11-02"
  - label: "GitHub Community: FAQ on Copilot data use for model training"
    url: "https://github.com/orgs/community/discussions/188488"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: GitHub Universe 2026: Evolving every layer of the stack（2026-10-28）"
    url: "https://github.blog/news-insights/company-news/github-universe-2026-evolving-every-layer-of-the-stack/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Octoverse 2026（2026-10-28）"
    url: "https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Introducing Agent HQ（2025-10-28）"
    url: "https://github.blog/news-insights/company-news/welcome-home-agents/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: Introducing GitHub Copilot（2021-06-29）"
    url: "https://github.blog/news-insights/product-news/introducing-github-copilot-ai-pair-programmer/"
    accessedAt: "2026-11-02"
  - label: "GitHub Blog: GitHub Copilot is generally available to all developers（2022-06-21）"
    url: "https://github.blog/news-insights/product-news/github-copilot-is-generally-available-to-all-developers/"
    accessedAt: "2026-11-02"
  - label: "GitHub Changelog: Japanese Consumption Tax (JCT) on your GitHub Account（2024-08-01）"
    url: "https://github.blog/changelog/2024-08-01-japanese-consumption-tax-jct-on-your-github-account/"
    accessedAt: "2026-11-02"
  - label: "VS Code公式ブログ: VS Code: Open Source AI Editor（2025-05-19）"
    url: "https://code.visualstudio.com/blogs/2025/05/19/openSourceAIEditor"
    accessedAt: "2026-11-02"
  - label: "GitHub: microsoft/vscode-copilot-chat（アーカイブ済みリポジトリ）"
    url: "https://github.com/microsoft/vscode-copilot-chat"
    accessedAt: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "有料プランのCopilot Fusionのモデル費用30%割引（2026年11月30日まで）。終了後の扱いを確認する"
  - date: "2026-12-31"
    claim: "Pro・Pro+・Maxのフレックス枠（500・3,100・10,000クレジット）。可変とされているので現在の枠を確認する"
  - date: "2027-03-31"
    claim: "GitHubのAzureマルチリージョン展開への移行（来年初めに完了見込み）。完了したかを確認する"
---

GitHub Copilotを説明するときに、いまも「AIペアプログラマー」という呼び名が使われることがある。ただ料金表を開くと、そこに並んでいるのは別の商品だ。月10ドルの定額で売り出された補完ツールは、2026年6月1日にトークン単位の従量課金へ移った。補完だけは枠の外に残り、チャットとエージェントは1クレジット0.01ドルのメーターで測られる。本稿は、当サイトが2026年11月2日に読んだ公式の料金表・ドキュメントと、MicrosoftのIRサイトに載る決算説明会の記録から、Copilotが何を売る商品になったのかを解剖する。当サイトは製品を長期間使い込んだ体験を書いているのではなく、公開情報を突き合わせている。

## サービス解説

GitHub Copilotは、コードの補完から始まり、いまはエディタ、ターミナル、デスクトップアプリ、GitHub.com、そしてクラウド上のエージェントへ広がった開発支援サービスだ。運営するGitHubは、2018年6月にMicrosoftが買収を発表した会社である。

:::fact
Microsoftの発表（2018年6月4日）によれば、MicrosoftはGitHubを75億ドル相当の自社株で買収することに合意した。Copilotのテクニカルプレビューは2021年6月29日に公開され、GitHubのブログは「OpenAIが作った新しいAIシステムOpenAI Codex」で動くと説明している。2022年6月21日に一般提供となり、価格は月10ドルまたは年100ドル、認証済みの学生と人気オープンソースの保守者は無料だった。このとき公式は、過去12か月に120万人超の開発者がプレビューに参加し、有効にしたファイルではPythonなどの主要言語でコードの40%近くをCopilotが書いていると述べている。
:::

:::fact
現在のプランは次のとおり（公式ドキュメント、2026-11-02閲覧）。価格はいずれも米ドルで、1クレジットは0.01ドルである。

| プラン | 価格 | 月間のGitHub AI Credits | モデルの範囲 |
| --- | --- | --- | --- |
| Free | 無料 | 枠あり（量の記載なし）、補完は月2,000回 | 自動選択のみ |
| Student | 認証済み学生は無料 | 枠あり（量の記載なし）、補完は無制限 | 自動選択のみ |
| Pro | 月10ドル（一部の利用者は無料） | ベース1,000＋フレックス500＝1,500 | 一部のモデル |
| Pro+ | 月39ドル | ベース3,900＋フレックス3,100＝7,000 | プレミアムモデル |
| Max | 月100ドル | ベース10,000＋フレックス10,000＝20,000 | プレミアムモデルへの優先アクセス |
| Business | 付与した席あたり月19ドル | 1人あたり1,900（組織でプール） | プレミアムモデル |
| Enterprise | 付与した席あたり月39ドル | 1人あたり3,900（組織でプール） | プレミアムモデルへの優先アクセス |
| Copilot access | GitHub Enterprise Cloudのライセンス保有者は0ドル、Copilot Standaloneは1人月10ドル | 含まれる枠なし、利用分は別途課金 | プレミアムモデルへの優先アクセス |

ドキュメントのモデル表によれば、Claude Sonnet 5.5、Grok 4.7、Kimi K3、MAI-Code-1.1-FlashはProから使えるが、Claude Opus 5.5、Claude Fable 5.1、GPT-5.6 Sol、GPT-6.1 SolはPro+以上である。補完とNext Edit Suggestionsはクレジットを消費せず、有料プランでは無制限とされている。Copilotは現時点でGitHub Enterprise Serverでは使えない。
:::

:::fact
日本の利用者について、GitHubの料金は上記のとおり米ドル建てで案内されている。GitHubのChangelog（2024年8月1日）によれば、2024年10月1日から、クレジットカードまたはPayPalで支払う日本のセルフサービス顧客に消費税を課しており、請求書には登録番号と、10%の消費税額が米ドルと日本円で記載される。当サイトはこの記事以降の更新をCopilot固有の案内としては確認していない。
:::

:::pull
補完は無制限のまま残り、考える仕事だけがトークンで測られる。Copilotの料金表は、この2つの間に線を引き直した。
:::

::scorecard

## UX分析

CopilotのUXの論点は、画面の出来よりも、利用者がコストをどれだけ意識しないで済むかに移っている。

- **補完は「水道」のまま残した**。補完とNext Edit Suggestionsはクレジットの外に置かれ、組織の予算が0ドルでも止まらない。開発者が1日に最も多く触れる機能を、メーターの対象から外した設計である。月額の価値を体感する入口を守ったとも読める。
- **モデルを選ばせないほうへ戻ってきた**。公式のOctoverseによれば、2026年9月に有料の開発者の63%が自動選択を少なくとも1回使い、自分でモデルを選んだ利用者の61%が複数のモデルを使った。有料利用者が使ったモデルは9月に47種類に達している。選択肢を増やしたあと、Copilot Fusionで「標準・高・最大」という努力量の選択に置き換えようとしている。
- **作業の単位がプルリクエストになった**。クラウドエージェントはIssueの割り当て、Agentsタブ、プルリクエストでのメンションから起動でき、レビュー依頼とコメントで結果を直させる。新しい操作を覚えさせず、開発者がすでに知っている手順に載せている。
- **費用の読みにくさは残る**。1回の依頼の費用はモデルとトークン量で変わる。コードレビューの目安でさえ、Liteが1回0.05〜1ドル、既定のBalancedが0.25〜5ドル、公開プレビューのMaxが1.5〜25ドルと幅があり、これにActionsの分数が加わる。ドキュメントは残高の警告や予算の設定を用意するが、定額の頃にはなかった判断を利用者に求めている。
- **枠が尽きたときの振る舞いが変わった**。2026年6月以前のような低コストモデルへの自動切り替えはなくなり、個人は追加の予算を設定するか、差額でアップグレードするか、毎月1日のリセットを待つ。組織の管理者は、利用者ごとの予算で利用を止められる。

:::fact
個人プランのデータの扱いは、2026年に変わった。GitHubのブログ（2026年3月25日）によれば、2026年4月24日から、Free・Pro・Pro+の利用者のインタラクションデータを、オプトアウトしない限りAIモデルの学習と改善に使う。現在のドキュメントは対象にMaxを加えて、入力、出力、コードスニペット、関連するコンテキストが含まれ得るとしている。設定名は「Allow GitHub to use my data for AI model training」で、Disabledを選ぶと止められる。以前に収集を拒否していた利用者の選択は引き継がれる。

一方でドキュメントは「GitHubはCopilot BusinessやCopilot Enterpriseの顧客データをAIモデルの学習に使わない」と明記している。コミュニティのFAQは、Copilot Studentの利用者と無料でProを使う教員は対象外で、有料組織のリポジトリの内容では学習せず、有料組織のメンバーや外部コラボレーターのアカウントは対象外だと説明している。ブログによれば、保存されているIssue、Discussion、プライベートリポジトリの内容は対象外だが、「Copilotを使っている間はプライベートリポジトリのコードを処理する」。データはMicrosoftを含むGitHubの関連会社と共有され得るが、第三者のAIモデル提供者には共有しないと書かれている。
:::

:::guess
学習への利用を個人プランだけオプトアウト方式にしたことは、データの価値と法人契約の重さを切り分けた判断とみられる。法人は契約で守り、個人は設定で選ばせる。自社モデルのMAI-Code系を育てる局面では、個人の実利用データの価値が高まると推測される。一方で、個人のアカウントで業務のコードを扱う人にとっては、既定の設定を確認する手間が増えた。有料組織に属していれば対象外になるという条件は、副業や個人開発のアカウントでは当てはまらない場合があるだろう。
:::

## 技術構成

::techstack

:::fact
公式ドキュメント（2026-11-02閲覧）によれば、Copilotのクラウドエージェントには2つの実行環境がある。GitHub Actionsベースの環境は変更が1つのリポジトリに限られ、チャットデータは28日保持され、カスタムのコンピュートやセルフホストランナーを使えるが、59分の上限は「延長も回避もできない」。クラウドサンドボックスは1つの組織内の複数リポジトリにまたがるセッションを扱え、クライアントをまたいで再開でき、チャットデータはアカウントが存続する間保持されるが、カスタムのコンピュートやセルフホストランナーには対応しない。どちらの環境でも、1タスクで開けるプルリクエストは1本で、作業できるブランチは同時に1つ、GitHub以外でホストされたリポジトリは扱えない。2026年10月28日からは新しい「Copilot in the cloud」の体験が有料プランに提供されている。

他社のエージェントも同じ場所で動く。Agent HQは2025年10月28日に発表され、現在はAnthropicのClaudeとOpenAIのCodexのコーディングエージェントが公開プレビューで使える。追加のサブスクリプションは不要で、Actionsの分数とAI Creditsを消費する。ドキュメントはProから利用可能としており、製品のプラン比較ページの表記（Pro+以上）とは異なる。生成されたコードにはCodeQL、シークレットスキャン、依存関係の検査がかかり、GitHub Advanced Securityのライセンスは要らないとされている。
:::

:::fact
Copilot Fusionは2026年10月28日に一般提供となった。ドキュメントは「ランタイムのモデルルーター兼オーケストレーター」と説明し、プロンプトごとに3つの実行パターンから選ぶ。1つのモデルが完結させるSingle、効率のよいモデルの下書きを判定役が受け入れるか強いモデルへ回すCascade、下書きを複数モデルが並行して批評し元のモデルが直すCritiqueである。努力量はStandard・High・Maxで、HighとMaxはFree・Student・Proには含まれない。Fusion自体の料金はなく、使ったモデルごとの標準料金を払う。有料プランには2026年11月30日までモデル費用の30%割引がある。下書きを捨てても、その下書きがすでに加えたファイル変更は元に戻らないと注意書きがある。

GitHubのChangelogは、Fusion MaxがArtificial AnalysisのCoding Agent Indexで60点を記録し、Opus 5.5 MaxのClaude Codeとの差は2点以内で、タスクあたりの平均API費用はおよそ半分、時間は約40%短いと書いている。Nadella CEOは決算説明会（2026年10月28日）で、フロンティア級の品質を「最大40%速く、最大77%低いコストで」提供すると述べた。どちらも提供元の数字で、Changelogのページには測定方法の詳細はない。
:::

:::fact
公式のモデルホスティングのページによれば、GitHubはOpenAIとゼロデータ保持の契約を結び、Anthropicとも一般提供の機能について同様の契約があるが、Claude Fable 5と5.1は既定では対象外で、ベータやプレビューの一部の機能も除かれる。Kimi K3はGitHubがFireworks AI上で配信し、プロンプトと出力はMoonshot AIに送られない。

クライアント側では、Microsoftが2025年5月19日にCopilot Chat拡張のオープンソース化を発表した。MITライセンスのリポジトリmicrosoft/vscode-copilot-chatは2026年5月20日にアーカイブされ、READMEは開発がVS Code本体のリポジトリへ移ったと説明している。MAI-Code-1-Flashの提供先としてChangelogが挙げる環境には、Copilot CLI、クラウドエージェント、Copilotアプリ、GitHub上のCopilot Chat、Visual Studio、GitHub Mobile、JetBrains IDE、Eclipse、Xcodeが並ぶ。
:::

:::fact
負荷は基盤の話にもなっている。Nadella CEOは決算説明会で、エージェントが生成するプルリクエストは過去6か月で6倍になり、いまやプラットフォーム上のプルリクエストの3分の1超をエージェントが開いていると述べ、GitHubの信頼性に懸命に取り組んでいるとした。Octoverseは定義の異なる指標として、2026年9月にプルリクエストの40%超がエージェントの下書きから始まり、3月の17%から増えたと書く。これらはCopilotに限らず、検知できたエージェント全体の数字である。GitHubのブログ（2026年10月28日）によれば、今年に入って400万CPUコア、160PBの高速ストレージ、50Tb/sのネットワーク容量を追加し、Azureのマルチリージョン展開への移行は来年初めに完了する見込みだという。新しいGitアーキテクチャの原則には、ストレージとコンピュートの分離などが挙げられている。
:::

:::guess
Copilotの技術構成で目を引くのは、モデルそのものより、モデルの間に置いた層だと考えられる。GitHubは複数社のモデルを同じクレジットの財布に並べ、Fusionで振り分け、キャッシュの境界でしか切り替えないように作っている。これは品質の工夫であると同時に、原価の工夫でもあるとみられる。軽量な自社モデルがCascadeの下書きを担い、必要なときだけ高いモデルへ回せば、利用者の支払いが減っても、同じクレジットで回る作業が増える。Copilotが優れたモデルを1つ持つことより、どのモデルが来ても受け止められる配線を持つことに賭けていると読める。ただしこの設計は、Fusionの判断が見えにくいという弱点も持つ。応答の下に使ったモデルが出るとはいえ、なぜその費用になったのかを利用者が検証するのは容易ではないだろう。
:::

## ビジネスモデル

Copilotの料金の歴史は、「何を1単位として数えるか」を変え続けた歴史である。席、リクエスト、そしてトークンへと、単位は小さくなってきた。

:::fact
公式の発表をたどると、変更は次のように進んだ。

| 時期 | 課金の単位 | 内容 |
| --- | --- | --- |
| 2022年6月 | 定額 | 個人向けを月10ドルまたは年100ドルで一般提供 |
| 2025年4〜6月 | プレミアムリクエスト | Pro+を発表（月1,500回）。2025年6月18日に月間枠の適用を開始。超過分は支出上限を設定した場合のみで、既定は0ドル |
| 2025年7月 | 1セッション1回 | コーディングエージェントの消費を、規模によらず1セッション1プレミアムリクエストに固定 |
| 2026年4月20日 | 利用制限の強化 | Pro・Pro+・Studentの新規受付を停止。セッションと7日間のトークン上限を強化 |
| 2026年6月1日 | トークン（GitHub AI Credits） | 全プランを従量課金へ。プラン価格は据え置き |
| 2026年6月17日 | 受付再開 | Student・Pro・Pro+・Maxの新規受付を数週間かけて段階的に再開 |

GitHubは4月20日のブログで「エージェント型のワークフローはCopilotの計算需要を根本から変えた」と述べ、「少数のリクエストでプランの価格を超える費用が発生することが今では普通になった」と書いた。4月27日のブログは「手軽なチャットの質問と数時間の自律コーディングセッションが、利用者には同じ金額になり得る」として、プレミアムリクエストのモデルは持続できないと説明している。6月からは、入力・出力・キャッシュのトークンをモデルの公開API価格で計算し、低コストモデルへのフォールバックは廃止された。Copilotのコードレビューは、これに加えてActionsの分数も消費する。
:::

:::fact
新しい料金の中身はプリペイドに近い。ベースのクレジットはプラン価格と同額で固定され、その上にフレックス枠が載る。5月12日のブログは、フレックスを「AIの経済性の変化に合わせて変わる」可変の部分と説明している。ベースが先に消費され、未使用分は翌月に繰り越されず、毎月1日0時（UTC）にリセットされる。法人のBusinessとEnterpriseには、フレックス枠は記載されていない代わりに、クレジットが組織で共有される。ドキュメントの例では、100席のBusinessは190,000クレジットのプールになる。導入時の6〜8月には、Businessに月30ドル、Enterpriseに月70ドルの販促枠があった。

モデルの単価は表のとおりで、公式の料金ページ（2026-11-02閲覧）は100万トークンあたりの米ドルで示している。

| モデル | 入力 | キャッシュ読み取り | 出力 |
| --- | --- | --- | --- |
| MAI-Code-1.1-Flash | 0.20 | 0.02 | 1.20 |
| Claude Sonnet 5.5 | 2.00 | 0.10 | 10.00 |
| Grok 4.7（200K以下） | 2.00 | 0.50 | 6.00 |
| Claude Opus 5.5 | 4.00 | 0.20 | 20.00 |
| Claude Fable 5.1 | 10.00 | 0.25 | 50.00 |

当サイトの単純な試算では、入力10万トークン・出力1万トークンの作業（キャッシュなし）はClaude Sonnet 5.5で0.30ドル、つまり30クレジットになる。Proの1,500クレジットで50回分、MAI-Code-1.1-Flashなら同じ作業は0.032ドルである。エージェントの長い実行では、入出力の量はこの例より大きくなり得る。クラウドサンドボックスのセッションにはさらに、コンピュート、メモリ、スナップショット保存の3つの計測項目があり、AIクレジットとは別に数えられる。
:::

:::fact
Microsoftは、GitHub Copilotの売上を今回当サイトが読んだ決算説明会の資料では金額として開示していない。語られた数字は次のとおりで、利用者数の定義は説明されていない。

| 説明会の日付 | 発言の内容 |
| --- | --- |
| 2025-07-30 | Copilotの利用者2,000万人。Fortune 100の90%が利用 |
| 2025-10-29 | 利用者2,600万人超。GitHubの開発者は1億8,000万人超 |
| 2026-01-28 | 有料購読者470万人超（前年比75%増）。Pro+の購読者は前四半期比77%増 |
| 2026-04-29 | 約14万組織が利用。企業の購読者は前年比でほぼ3倍。Copilotの利用増が粗利率の低下要因の1つ |
| 2026-07-29 | 利用者5,000万人。GitHubは2億2,500万ユーザー。6月の変更後に消費が想定を上回り、利益率は四半期の中で改善。「Copilotの売上は前四半期比60%超加速」 |
| 2026-10-28 | エージェント機能のクレジット消費は従量課金の開始以降2倍超。MAI Code Flashは先月300万人が利用 |

2026年10月の説明会でHood CFOは、M365 Commercial cloudの業績について「GitHub Copilotの採用と利用の増加」を想定超えの要因に挙げ、ARPUの伸びへの寄与に「主にGitHub Copilot」の従量型の提供を挙げた。アナリストからは、GitHubを席から消費へ移したことが売上の伸びを解き放ったという趣旨の質問も出ている。Nadella CEOは同じ場で、コーディングは「人々が従量課金に慣れている」ので移行が速いと答えた。
:::

:::guess
決算の発言を時系列に並べると、Copilotの課題が売上の不足ではなく、売れるほど原価が膨らむ構造にあったことがうかがえる。2026年4月の説明会ではCopilotの利用増が粗利率を押し下げる要因として語られ、7月の説明会では6月の移行により利益率が四半期の中で改善したと語られた。定額の席は、補完の時代には機能したが、エージェントの時代には利用が重い人ほど損失を生みやすい形だったと推測される。

従量化の後のCopilotは、モデルの小売に近い事業に見える。他社モデルはおおむねAPI価格で通過し、トークンの売買そのものから大きな利ざやを取っているようには見えない。利幅が生まれ得る場所は別にあるとみられる。1つは、未使用のまま消える枠と、変えられるフレックス枠による調整だ。もう1つは、MAI-Code系のように自社で原価を握るモデルへ、Fusionで作業を寄せること。さらに、エージェントが使うActionsの分数やサンドボックスの計測項目、そしてAdvanced Securityのように、エージェントが増えるほど売れる周辺の商品である。Nadella CEOは2026年10月の説明会で、Advanced Securityの売上が前年比50%超増えたことにも触れている。

ただし、これは全体の構図の推測で、Microsoftは個別の採算を開示していない。別の読み方として、割引やフレックス枠が厚いままなら、Copilotはしばらく利幅より市場の維持を優先している可能性もある。Claude CodeやCursorのように、他社のエージェントがGitHub上で仕事をする状況で、競合を締め出すより場所代を取る方向へ動いたことも、この事業の特徴だろう。リポジトリという場所を持っている限り、どのエージェントが勝ってもGitHubにはプルリクエストが届く。
:::

2022年の月10ドルは、補完という1つの機能に付いた値段だった。2026年の月10ドルは、15ドル分のトークンを買える財布に近い。Copilotは補完の無料枠で開発者の手元に居続け、仕事の重い部分をメーターに載せ、他社のモデルも他社のエージェントも自分の場所に招き入れた。残る問いは、利用者が費用を読めるかどうかと、Fusionの振り分けを信頼できるかどうかだ。賭けの対象は、もはや最良のモデルではなく、どのモデルが来ても仕事が流れ込むGitHubという場所そのものである。
