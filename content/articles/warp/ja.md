---
service: "Warp"
title: "ターミナルは無料で配り、エージェントの作業量に値段を付ける — Warpは5年目にクライアントをAGPLで公開し、売り物を「ソフトウェア工場の基盤」へ移した"
description: "Rustで書かれGPUで描画するターミナルとして2022年に公開されたWarpは、2024年にログイン必須をやめ、2025年に「エージェント型開発環境」を名乗り、2026年4月にクライアントをAGPL v3で公開し、同年8月にはクラウドでエージェントを走らせる「Warp Factories」を前面に出した。自作のRust製UIフレームワーク、Alacritty由来のグリッドとシェルフックで作るブロック、ConPTYのフォーク、サーバー側に残したエージェントの中枢、月20ドルで1,500クレジットという作業量連動の料金、公表された計7,300万ドルの調達までを、公式ブログ・ドキュメント・GitHub・報道から解剖する。"
lead: "「ターミナルにログインは要らない」。2022年の公開以来、Warpに最も多く寄せられた批判はこれだった。創業者は2024年2月に、ログイン必須もクローズドソースも当面変えないと書いた。ところがその9か月後にログイン必須を外し、2026年4月にはクライアントのソースコードをAGPLで公開した。いまトップページが名乗るのはターミナルではなく、開発を自動化するための開かれた基盤だ。無料の道具を配る会社が、どこに値段を付け直したのかを解剖する。"
category: dev-tool
tags: [ai, terminal, rust, open-source, coding-agent]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://www.warp.dev/"
vendor: "Denver Technologies, Inc. (d/b/a Warp)"
origin: "US"
heroTheme: "warp"
scores: { product: 4.0, ux: 4.0, tech: 4.5, business: 3.5 }
techStack:
  - layer: "クライアントの言語"
    name: "Rust"
    confidence: confirmed
    evidence: "公式ブログ「How Warp Works」（2021-07-12）に、Electronを短く試したあとRustに切り替え、1つの言語でMac・Linux・Windows、さらにWASMへのコンパイルでWebまで対応する方針を取ったと明記。当サイトの観測（2026-10-01）でも、GitHub APIが返す warpdotdev/warp の言語別バイト数はRustが約6,589万バイトで大半を占めた"
    evidenceUrl: "https://www.warp.dev/blog/how-warp-works"
  - layer: "描画（macOS）"
    name: "Metal (direct GPU rendering)"
    confidence: confirmed
    evidence: "同じ公式ブログに、最初の対象がmacOSだったためOpenGLではなくMetalを選び、描く対象を矩形・画像・グリフの3種類に絞ることでシェーダーを約200行に収めたと明記"
    evidenceUrl: "https://www.warp.dev/blog/how-warp-works"
  - layer: "描画（クロスプラットフォーム）"
    name: "wgpu + winit + cosmic-text"
    confidence: confirmed
    evidence: "Linux版の公式ブログ（2024-02-22）に、クロスプラットフォームのオープンソースRustライブラリであるwgpu・winit・cosmic-textの上に作り、Mac版とコードの約98%を共有すると明記。公開リポジトリのCargo.tomlでもwgpu 30.0.0がdx12・gles・metal・vulkanの機能付きで指定され、winitは自社フォークを参照している（2026-10-01観測）"
    evidenceUrl: "https://www.warp.dev/blog/warp-for-linux"
  - layer: "UIフレームワーク"
    name: "WarpUI (warpui_core / warpui, MIT license)"
    confidence: confirmed
    evidence: "「How Warp Works」に、安定したRust製UIフレームワークがなかったため、Atomの共同創業者ネイサン・ソボと組み、Flutterに着想を得た自前のUIフレームワークを作ったと明記。公開リポジトリのREADMEは、このUIフレームワークのクレート（warpui_core・warpui）をMITライセンス、残りをAGPL v3としている"
    evidenceUrl: "https://github.com/warpdotdev/warp"
  - layer: "端末のデータモデル"
    name: "Alacritty-derived grid + shell hooks (precmd / preexec) + DCS"
    confidence: confirmed
    evidence: "「How Warp Works」に、Alacrittyのモデルのコードをフォークして出発し、シェルのprecmd・preexecフックからJSONを載せた独自のDCS（Device Control String）を送らせることで、コマンドと出力をブロックとして切り分けると明記"
    evidenceUrl: "https://www.warp.dev/blog/how-warp-works"
  - layer: "WindowsのPTY"
    name: "ConPTY (company fork)"
    confidence: confirmed
    evidence: "公式ブログ（2025-01-22）に、ConPTYが独自のDCSを転送せず、OSCの順序も入れ替わるためブロックが成り立たず、ConPTYをフォークして解決したと明記。PowerShell用のシェル統合は一から書いたとしている"
    evidenceUrl: "https://www.warp.dev/blog/building-warp-on-windows"
  - layer: "ライセンスと公開範囲"
    name: "Client: AGPL v3 / UI crates: MIT / server, Drive, Oz: not public"
    confidence: confirmed
    evidence: "公開リポジトリのFAQに、クライアントはAGPL v3、UIフレームワークのクレートはMITで公開し、サーバー・Warp Driveのバックエンド・ホストされた認証・エージェントのオーケストレーション層Ozはこのリポジトリになく、現時点でプロプライエタリのままと明記。内蔵エージェントのハーネスはサーバー側で動き、公開されていないとも書いている"
    evidenceUrl: "https://github.com/warpdotdev/warp/blob/master/FAQ.md"
  - layer: "クライアントとサーバーの通信"
    name: "GraphQL (cynic / graphql-ws-client)"
    confidence: confirmed
    evidence: "公開リポジトリのCargo.toml（2026-10-01観測）に、crates/graphql と warp_graphql_schema のワークスペースクレート、Rust製GraphQLクライアントのcynic 3、graphql-ws-client 0.11.1が依存として記載されている"
    evidenceUrl: "https://github.com/warpdotdev/warp/blob/master/Cargo.toml"
  - layer: "クラウドエージェントの実行環境"
    name: "Docker sandboxes (Warp-hosted / self-hosted)"
    confidence: confirmed
    evidence: "Ozのプレスリリース（2026-02-10）に、エージェントはDockerによる隔離されたクラウド環境で動き、環境はWarpの基盤か、企業向けには自社の基盤に置けると明記。サブプロセッサー一覧（2026-09-02更新）は「顧客の計算環境のホスティング」としてDockerとNamespace Labsを挙げる"
    evidenceUrl: "https://www.warp.dev/newsroom/2026/2/10/warp-launches-oz-the-orchestration-platform-for-cloud-coding-agents"
  - layer: "AIモデル"
    name: "Models from several providers (Anthropic / OpenAI / Google / xAI / Fireworks AI)"
    confidence: confirmed
    evidence: "公式ドキュメントの料金FAQに、Anthropic・OpenAI・Google・xAI・Fireworks AIなど複数のLLM事業者と統合し、これらとゼロデータリテンション（ZDR）の契約を結んでいると明記。利用者自身のAPIキーや独自の推論エンドポイントを通した通信は、その事業者の方針に従うとしている"
    evidenceUrl: "https://docs.warp.dev/support-and-community/plans-and-billing/pricing-faqs/"
  - layer: "コードベース検索"
    name: "Turbopuffer / Voyage AI / Cohere"
    confidence: confirmed
    evidence: "公式のサブプロセッサー一覧（2026-09-02更新）が、「コードベース検索」の区分でTurbopuffer・Voyage AI・Cohereを挙げている。同じ一覧は、ワークフローのオーケストレーションにTemporal、認証・ID基盤にWorkOS、決済にStripeを挙げる"
    evidenceUrl: "https://www.warp.dev/legal/subprocessors"
  - layer: "計測"
    name: "Sentry (crash reporting) / RudderStack (app analytics)"
    confidence: confirmed
    evidence: "公式ドキュメントのプライバシーのページに、クラッシュ報告にSentry、アプリの分析にRudderStackを使うと明記。どちらも設定のPrivacyから止められる"
    evidenceUrl: "https://docs.warp.dev/support-and-community/privacy-and-security/privacy/"
  - layer: "サーバー基盤"
    name: "Google Cloud (app.warp.dev)"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー観測（2026-10-01）で、app.warp.dev は server: Google Frontend と via: 1.1 google を返し、CSPには securetoken.googleapis.com と identitytoolkit.googleapis.com（Firebase Authenticationのエンドポイント）が含まれていた。公開リポジトリにも crates/firebase がある。サブプロセッサー一覧はクラウド基盤としてAWS・Azure・Vercelも挙げており、どの処理をどこに置くかの公式の内訳は見当たらない"
  - layer: "Webサイト"
    name: "Next.js + Tailwind CSS (served by Vercel)"
    confidence: confirmed
    evidence: "公式ブログ（2026-06-02）に、ノーコードのサイトをやめ、エージェントが扱いやすいようにNext.jsとTailwindで一から作り直したと明記。当サイトの観測（2026-10-01）でも www.warp.dev は server: Vercel と x-powered-by: Next.js を返し、CSPにはSanityのドメインが含まれていた"
    evidenceUrl: "https://www.warp.dev/blog/why-we-tore-down-our-no-code-site-and-went-back-to-code"
  - layer: "ドキュメント"
    name: "Astro Starlight (served by Vercel)"
    confidence: confirmed
    evidence: "公開されているドキュメントのリポジトリ warpdotdev/docs の package.json（2026-10-01観測）に @astrojs/starlight と @astrojs/vercel が依存として記載されている。docs.warp.dev は server: Vercel を返した"
    evidenceUrl: "https://github.com/warpdotdev/docs"
sources:
  - label: "Warp公式: トップページ（現在の位置づけ）"
    url: "https://www.warp.dev/"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Introducing Warp（公開ベータと2,300万ドルの調達・2022-04-05）"
    url: "https://www.warp.dev/blog/introducing-warp"
    accessedAt: "2026-10-01"
  - label: "TechCrunch: Warp raises $23M to build a better terminal（2022-04-05）"
    url: "https://techcrunch.com/2022/04/05/warp-raises-23m-to-build-a-better-terminal/"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Warp DriveとシリーズB（2023-06-21）"
    url: "https://www.warp.dev/blog/warp-drive-series-b"
    accessedAt: "2026-10-01"
  - label: "Wikipedia: Warp (terminal)（創業年）"
    url: "https://en.wikipedia.org/wiki/Warp_(terminal)"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: How Warp Works（2021-07-12）"
    url: "https://www.warp.dev/blog/how-warp-works"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Linux版の公開（2024-02-22）"
    url: "https://www.warp.dev/blog/warp-for-linux"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Windows版の開発で学んだこと（2025-01-22）"
    url: "https://www.warp.dev/blog/building-warp-on-windows"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: オープンソースとログインについて（2024-02-22）"
    url: "https://www.warp.dev/blog/open-source-and-login-for-warp"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: ログイン必須の撤廃（2024-11-22）"
    url: "https://www.warp.dev/blog/lifting-login-requirement"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Proプランの導入（2024-06-24）"
    url: "https://www.warp.dev/blog/pro-plan"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Warp 2.0とエージェント型開発環境（2025-06-24）"
    url: "https://www.warp.dev/blog/reimagining-coding-agentic-development-environment"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: 料金の変更とBuildプラン（2025-10-30）"
    url: "https://www.warp.dev/blog/warp-new-pricing-flexibility-byok"
    accessedAt: "2026-10-01"
  - label: "Warp公式: Ozのプレスリリース（2026-02-10）"
    url: "https://www.warp.dev/newsroom/2026/2/10/warp-launches-oz-the-orchestration-platform-for-cloud-coding-agents"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Warp is now open-source（2026-04-28）"
    url: "https://www.warp.dev/blog/warp-is-now-open-source"
    accessedAt: "2026-10-01"
  - label: "GitHub: warpdotdev/warp（README・ライセンス・スター数）"
    url: "https://github.com/warpdotdev/warp"
    accessedAt: "2026-10-01"
  - label: "GitHub: warpdotdev/warp FAQ.md（公開範囲とライセンスの理由）"
    url: "https://github.com/warpdotdev/warp/blob/master/FAQ.md"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Warp Agent CLIの発表（2026-08-04）"
    url: "https://www.warp.dev/blog/introducing-the-warp-agent-cli-coding-agent"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Warp Factoriesの発表（2026-08-18）"
    url: "https://www.warp.dev/blog/open-infrastructure-for-building-a-software-factory"
    accessedAt: "2026-10-01"
  - label: "TechCrunch: Warp Factoriesの報道（2026-08-18）"
    url: "https://techcrunch.com/2026/08/18/warps-new-system-is-an-out-of-the-box-software-factory-for-ai-development/"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: Sign in to Warp with ChatGPT（2026-09-29）"
    url: "https://www.warp.dev/blog/sign-in-to-warp-with-chatgpt"
    accessedAt: "2026-10-01"
  - label: "Warp公式: 料金ページ"
    url: "https://www.warp.dev/pricing"
    accessedAt: "2026-10-01"
  - label: "Warp公式ドキュメント: クレジットと課金"
    url: "https://docs.warp.dev/support-and-community/plans-and-billing/credits/"
    accessedAt: "2026-10-01"
  - label: "Warp公式ドキュメント: 料金と課金のFAQ（BYOK・ZDR）"
    url: "https://docs.warp.dev/support-and-community/plans-and-billing/pricing-faqs/"
    accessedAt: "2026-10-01"
  - label: "Warp公式ドキュメント: プライバシーとデータの管理（テレメトリー）"
    url: "https://docs.warp.dev/support-and-community/privacy-and-security/privacy/"
    accessedAt: "2026-10-01"
  - label: "Warp公式ドキュメント: オフラインでの利用"
    url: "https://docs.warp.dev/support-and-community/troubleshooting-and-support/using-warp-offline/"
    accessedAt: "2026-10-01"
  - label: "Warp公式: サブプロセッサー一覧（2026-09-02更新）"
    url: "https://www.warp.dev/legal/subprocessors"
    accessedAt: "2026-10-01"
  - label: "Warp公式: 利用規約（運営法人の名称）"
    url: "https://www.warp.dev/legal/terms-of-service"
    accessedAt: "2026-10-01"
  - label: "Warp公式ブログ: マーケティングサイトをコードに戻した理由（2026-06-02）"
    url: "https://www.warp.dev/blog/why-we-tore-down-our-no-code-site-and-went-back-to-code"
    accessedAt: "2026-10-01"
  - label: "Ghostty公式: Financial Support（Hack Clubによる財政スポンサー）"
    url: "https://ghostty.org/docs/sponsor"
    accessedAt: "2026-10-01"
---

ターミナルは、開発者が毎日開くのに、お金を払う習慣がほとんどない道具だ。OSに最初から入っているし、高機能なものもオープンソースで手に入る。Warpは、その「払われない道具」を作るためにベンチャー資金を集めた会社で、だからこそ、何を無料にして何を売るのかを5年のあいだに何度も引き直してきた。その線の動きを追うと、AIの時代に開発者向けの道具がどこで稼ごうとしているのかが見えてくる。

## サービス解説

Warpは、macOS・Windows・Linuxで動くターミナルと、その中で動くコーディングエージェント、そしてクラウドでエージェントをまとめて走らせる基盤からなる製品群だ。当サイトが確認したトップページ（2026-10-01）のタイトルは「The Open Platform for Automating Development」で、製品として「Factories」「Terminal」「Agent CLI」の3つを並べている。

:::fact
Wikipediaによれば、Warpは2020年6月にザック・ロイドが創業した。Warpのプレスリリース（2026-02-10）は、ロイドをGoogle スプレッドシートとGoogle ドキュメント群の元エンジニアリング責任者と紹介し、本拠をニューヨークとしている。利用規約に書かれた運営法人は Denver Technologies, Inc.（d/b/a Warp）だ。公式ブログによれば、2022年4月5日にMac向けの公開ベータを始め、2024年2月にLinux版を出し、2025年の年次まとめはWindows版を同年2月に出したと書いている。
:::

:::fact
名乗り方は3度変わった。2022年の公開時は「21世紀のターミナル」。2025年6月のWarp 2.0で「エージェント型開発環境（Agentic Development Environment）」を名乗り、コード・エージェント・ターミナル・Driveの4つを1つのアプリにまとめた。2026年2月にはクラウドでエージェントを走らせ管理する「Oz」を発表し、同年8月18日には、課題の振り分け・仕様づくり・実装・レビュー・検証をクラウドのエージェントに回す「Warp Factories」をクローズドベータとして発表した。利用者数について、2026年2月のプレスリリースは「70万人を超える開発者」、同年4月の公式ブログは「100万人近いアクティブな開発者」、当サイトが確認したターミナルの製品ページは「80万人超」と書いており、ページによって数字が異なる。
:::

:::pull
ターミナルそのものは、もう売り物ではない。Warpが値段を付けているのは、ターミナルの向こう側でエージェントが働いた量だ。
:::

::scorecard

## UX分析

当サイトはWarpを実際に操作して検証していない。以下は、公式ブログ・ドキュメント・公開リポジトリに書かれた設計から読み取れる範囲の分析だ。

- **入力欄はテキストエディタ、出力はブロック**。公式ブログ「How Warp Works」によれば、コマンドの入力欄は選択・カーソル移動・複数カーソルが使える完全なテキストエディタで、コマンドとその出力は「ブロック」という単位にまとめられる。出力だけをコピーする、1つ前のコマンドの結果へ飛ぶ、といった操作が、文字の流れではなく塊を相手にできる。
- **コマンドと頼みごとを同じ欄に書く**。2024年6月のAgent Modeから、同じ入力欄に自然な文章で頼むと、エージェントがコマンドを実行する許可を求め、その出力を見て次の手を決める。Agent CLIの公式ブログ（2026-08-04）は、入力がシェルのコマンドか頼みごとかを分類器が自動で見分けると説明している。
- **ターミナルだけにも、開発環境にもできる**。オープンソース化の公式ブログ（2026-04-28）は、ただのターミナルとして使う設定から、差分ビューとファイルツリーだけを足す設定、エージェントを内蔵した開発環境として使う設定まで選べるようにし、設定ファイルも加えたと書いている。
- **ログインなしで始められる**。2024年11月22日から、アカウントを作らずに使い始められる。公式ドキュメントによれば、初回の起動時だけはオンラインである必要があり、そのときにAIの利用量を数えるための利用者IDが作られ、ログインしない場合は匿名の利用者アカウントに結び付けられる。初期設定のあと、ターミナルの基本機能はオフラインでも動く。
- **外に出るデータを見せる**。公式ドキュメントは、送信されるテレメトリーのイベントを一覧表で公開し、アプリ内の「Network Log」で通信を確認でき、設定のPrivacyから「Help improve Warp」とクラッシュ報告を止められるとしている。同じページによれば、止めていない場合に集めうるのは、機能の利用状況の分析データと、AI機能を動かすためのAIとのやり取りおよびコンソールへの入力で、AIとのやり取りにはシークレットの墨消しが必ず適用される。BusinessとEnterpriseのプランでは、AIとのやり取りとコンソールのデータは集めないと書いている。
- **ほかのターミナルでも使える**。2026年8月のWarp Agent CLIは、内蔵エージェントを単体のCLIとして切り出したもので、公式ブログはGhostty・iTerm2・VS Code・OS標準のターミナルで動くとしている。

:::fact
ログインをめぐる方針は、公開から2年半で反転した。創業者のロイドは2024年2月22日の公式ブログで、ログインはチーム機能と、AIの利用量を数えるために必要であり、必要になった時点で求める「後からのログイン」は体験を悪くすると考えるので採らないと書いた。同じ文章で、コンソールのデータは共同作業や端末間の同期を選ばない限りWarpのサーバーへ送らないこと、利用者の声を受けてテレメトリーを任意にしたことも説明している。そのうえで2024年11月22日の公式ブログは、ログイン必須が利用をためらう理由になっていると数百人の開発者から伝えられたとして、必須をやめたと発表した。
:::

:::guess
ログイン必須の撤廃は、方針の放棄というより、識別の単位をアカウントから匿名のIDへ下げた変更とみられる。AIの利用量を数える必要は残るので、初回の起動時にオンラインでIDを作る仕組みは維持されている。利用者から見える摩擦（メールアドレスの登録）は消し、事業者が必要とする計量は残す、という折り合いの付け方だと推測される。
:::

## 技術構成

::techstack

:::fact
公式ブログ「How Warp Works」（2021-07-12）によれば、Warpは当初の要件として、4Kや8Kの画面でも60fpsで動く速さ、bash・zsh・fishとの互換性、Webを含む複数プラットフォームへの対応、任意のUI部品の描画、エディタ並みの入力を挙げた。Electronを短く試したあと、RustとMetalによるGPU直接描画に切り替えた。描く対象を矩形・画像・グリフの3種類に絞ることでシェーダーを約200行に収め、その上に、Atomの共同創業者ネイサン・ソボと組んで、Flutterに着想を得たRust製のUIフレームワークを自作した。同社はこれを「ブラウザのアーキテクチャを作るのに近い」作業だったと書いている。
:::

:::fact
ブロックは、ターミナルとシェルの間の古い約束事を拡張して作られている。同じブログによれば、ターミナルは疑似端末を通じて文字を読み書きするだけなので、どこからどこまでが1つのコマンドかを本来は知ることができない。Warpは、シェルが持つprecmd・preexecのフックから、JSONを載せた独自のDCS（Device Control String）を送らせ、それを目印にブロックを作る。グリッドのデータモデルはAlacrittyのコードをフォークして出発した。Windows版の公式ブログ（2025-01-22）によれば、Windowsの疑似コンソールConPTYはこの独自のDCSを転送せず、代わりに使ったOSCは順序が入れ替わって届いたため、ConPTYをフォークして対応した。Windows版には2024年4月から約5人のエンジニアが取り組んだという。
:::

:::fact
2026年4月28日、Warpはクライアントのソースコードを github.com/warpdotdev/warp で公開した。リポジトリのFAQによれば、アプリ本体と大半のクレートはAGPL v3、UIフレームワークのクレート（warpui_core・warpui）はMITで、サーバー、Warp Driveのバックエンド、ホストされた認証、エージェントのオーケストレーション層Ozは含まれず、プロプライエタリのままだ。内蔵エージェントのハーネスはサーバー側で動いており、公開されていない。AGPLを選んだ理由としてFAQは、寛容なライセンスではフォークした側が変更を閉じたまま製品にできるため、派生物を開いたままにしたかったと説明している。READMEは、OpenAIをこの公開リポジトリの創設スポンサーと記している。当サイトの観測（2026-10-01）で、リポジトリのスター数は65,321だった。
:::

:::guess
公開する範囲の引き方は、どこで稼ぐかの線とほぼ重なっているとみられる。ロイドは2024年2月の時点で、Warpの価値の大半はクライアント側にあり、公開すれば収益化の上限を自分で決めてしまうおそれがあると書いていた。2年後に同じクライアントを公開できたのは、課金の対象がクライアントの機能から、サーバー側で動くエージェントのハーネスとクラウドの実行基盤へ移ったからだと推測される。クライアントを開いても、値段の付いている部分は手元に残る構図だ。
:::

:::guess
自作のUIフレームワークは、当初は速さのための選択だったが、結果としてエージェント時代の資産になったとみられる。Agent CLIの公式ブログは、このCLIがWarpのターミナル基盤の上に作られ、エージェントとシェルの間に疑似端末の層を挟むことで、エージェントにvimやデータベースのREPLのような全画面のアプリを操作させられると説明している。ターミナルの入出力をブロックとして構造化して持っていることが、エージェントに「いま画面で何が起きているか」を渡す土台になっていると推測される。
:::

## ビジネスモデル

Warpの収益は、月額のサブスクリプションと、エージェントの作業量に応じて減るクレジットの組み合わせでできている。ターミナルとしての利用は無料だ。売上の額は公表されていない。

:::fact
当サイトが確認した料金ページ（2026-10-01）によれば、プランは5つある。Freeは0ドルで、ターミナルの基本機能とAgent CLIが使え、自前の推論を持ち込める。Buildは月20ドル（年払いなら月18ドル）で1,500クレジット（「APIの料金で20ドル分のエージェント利用」と説明）が付く。Maxは月200ドル（年払いなら月180ドル）で18,000クレジット。Businessは1人あたり月50ドル（年払いなら月45ドル）で25席まで、1席ごとに1,500クレジットとSAMLのSSOが付く。Enterpriseは個別見積もりで、自社のクラウドを通した推論や、自社の基盤でのクラウドエージェントの実行が含まれる。公式ドキュメントによれば、Freeプランには内蔵エージェント用のAI利用は含まれず、使うには有料プランにするか、追加クレジットを買うか、自分のAPIキーなどを持ち込む。2026年9月29日の公式ブログは、ChatGPTのアカウントでサインインし、その契約に含まれる利用枠をWarpのAIに使えるようにしたと発表した。
:::

:::fact
クレジットは、やり取りの回数ではなく処理したトークンの量に連動する。公式ドキュメントによれば、消費量はモデル・ツール呼び出しの数・作業の複雑さ・コードベースの大きさで変わり、同じような依頼でも消費量が異なりうるため、正確に予測する式はない。クレジットには3つの区分がある。モデルの呼び出しに使う「AIクレジット」、クラウドでエージェントを動かすサンドボックスに使う「コンピュートクレジット」、実行の管理・連携・ダッシュボード・APIといった基盤に使う「プラットフォームクレジット」で、最後のものはエージェントが作業した時間で課金される。通常のシェルコマンドや、AIを使わない機能はクレジットを消費しない。
:::

:::fact
料金の単位は、回数から作業量へ移ってきた。2024年6月の公式ブログによれば、当時はAIへの「リクエスト」の回数で数え、無料プランは月40回、Proは500回、Teamは750回だった。2025年10月30日の公式ブログで、ロイドはPro・Turbo・Lightspeedの3プランを廃止してBuildに一本化すると発表し、理由として、多くの利用者が払った分のクレジットを使い切っていなかったこと、超過分の単価がプラン内の8倍に達していたこと、そして利用者が枠を使い切る場合には採算が合わず、利用が増えるほどWarpの損失が増えていたことを挙げた。同じ文章は、この変更で一部の利用者の負担は増え、解約も一定数出ると見込んでいると書いている。この時点で自分のAPIキーの持ち込みは有料プランだけだったが、現在のドキュメントはFreeプランでも設定できるとしている。
:::

:::fact
資金調達について、公表されている額は合計7,300万ドルだ（合計は当サイトの計算）。TechCrunch（2022-04-05）によれば、GVが主導した600万ドルのシードと、Figmaの共同創業者ディラン・フィールドが主導した1,700万ドルのシリーズAで、計2,300万ドルを調達した。Warpの公式ブログ（2023-06-21）は、Sequoia Capitalが主導する5,000万ドルのシリーズBを発表し、新たな個人投資家としてサム・アルトマンとトビ・リュトケの名を挙げた。当サイトが確認した範囲（2026-10-01）では、同社のニュースルームとプレスのページに、これ以降の調達や評価額の発表は見当たらなかった。対照的に、オープンソースのターミナルGhosttyは、公式サイトによれば、501(c)(3)の非営利団体Hack Clubを財政スポンサーとし、寄付に支えられた非営利の活動として開発されている。
:::

:::guess
回数制から作業量連動への移行は、AIを内蔵した道具に共通する原価の問題を映しているとみられる。エージェントが1回の依頼で何十回もモデルを呼ぶようになると、回数で売る定額は、よく使う利用者ほど赤字になる。Warpが公開の場でそれを認め、クレジットを「APIの料金で20ドル分」と原価に近い言葉で説明し、Freeプランにまで自前の推論の持ち込みを開いたのは、推論の転売で利益を出すのではなく、その外側——ハーネス、クラウドの実行環境、管理の基盤——で稼ぐ方向へ寄せたからだと推測される。
:::

:::guess
Warp Factoriesは、この方向の延長にあるとみられる。ロイドはオープンソース化の公式ブログで、ベンチャー資金を受けた会社ではあるが、価格で競ったり利用料を大きく補填したりする資源はないと書いている。個人の開発者に月20ドルを払ってもらうモデルは、モデルを自社で持つ競合と同じ土俵に立つことになる。一方で、エージェントをクラウドで走らせ、費用と成果を測り、権限を管理する基盤は、どのモデルやハーネスを使う会社にも必要で、作業時間で課金できる。Factoriesはまだクローズドベータであり、この賭けが売上にどうつながるかは公表された数字からは判断できない。
:::

Warpは、ログインを必須にして批判され、クローズドソースであることを批判され、そのどちらも数年かけて手放した。ただ、手放したのは守る必要がなくなったものでもある。ターミナルの機能が無料で、ソースコードが公開されていても、エージェントの中枢と実行基盤がサーバー側にある限り、課金の起点は動かない。開発者向けの道具が「手元で動くソフト」から「向こう側で働くエージェント」へ重心を移すとき、オープンソースにすることと稼ぐことは、以前ほど対立しなくなっている。Warpの5年間は、その変わり目の記録として読める。
