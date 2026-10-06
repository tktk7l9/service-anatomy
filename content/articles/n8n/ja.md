---
service: "n8n"
title: "GitHubスター20万、評価額は7カ月で2倍の52億ドル、公開した脆弱性情報は2026年だけで196件 — ソースを配りながらクラウドを売るn8nの「フェアコード」を解剖する"
description: "ベルリンのn8n GmbHが作るワークフロー自動化ツールn8nは、ソースコードをGitHubで公開し（スター206,731・2026-10-06時点）、自分のサーバーで無料で動かせる一方、月20ユーロからのクラウド版と自社ホスト向けの有料ライセンスで稼ぐ。2025年10月にAccel主導で1億8,000万ドルを調達して評価額25億ドル、2026年5月にはSAPの戦略的出資で52億ドルになった。公式の料金ページ、ブログ、ドキュメント、GitHubのリポジトリとセキュリティ勧告、当サイトの実観測から、「実行回数で課金し、ステップ数は数えない」料金、Sustainable Use Licenseと.eeディレクトリの線引き、Node.jsとVueのモノレポ、Redisのキューモード、Code nodeを隔離するタスクランナー、2.0で「安全側を既定」に倒した判断、そして2026年に急増した脆弱性の公開までを解剖する。"
lead: "n8nの料金ページには「実行回数に応じた課金で、複雑さは問わない」と書いてある。ひとつのワークフローが何ステップあっても、最初から最後まで1回動けば1回。ステップ単位で課金する競合との違いを、料金表の見出しに置いた。同じ会社は、ソースコードをGitHubに公開し、自社サーバーで無料で動かすことを許し、その同じリポジトリで2026年に196件の脆弱性勧告を公開した。配ることと売ること、開くことと守ること。どちらも同じ場所で起きている。"
category: saas
tags: [automation, no-code, ai, open-source, mcp, self-hosted, ai-agent, typescript]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://n8n.io/"
# Affiliate link placeholder: n8n runs its own public affiliate program
# (https://n8n.io/affiliates/; 30% of n8n Cloud referrals for 12 months, payouts via
# PayPal once a month on balances of EUR 100 or more, paid ad campaigns are not permitted).
# Only n8n Cloud (Starter / Pro) is rewarded, not self-hosted or Enterprise.
# The owner must apply, get approved, and paste the tracking link here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<n8n-affiliate-tracking-link>"
#   program: "n8n Affiliate Program"
vendor: "n8n GmbH"
origin: "DE"
heroTheme: "n8n"
scores: { product: 4.5, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "言語・ランタイム・リポジトリ構成"
    name: "TypeScript / Node.js (24+) / pnpm (12) / Turborepo"
    confidence: confirmed
    evidence: "GitHubのn8n-io/n8nリポジトリ（2026-10-06時点）は言語の内訳がTypeScript約133MB・Vue約9MBで、ルートのpackage.jsonはenginesにnode >=24.0.0とpnpm >=12.4.2、packageManagerにpnpm@12.4.2、buildスクリプトにturboを指定している。packages/ 配下にcli・core・workflow・nodes-base・frontend・@n8n/（task-runner・task-runner-python・nodes-langchain・typeorm など60以上）が並ぶ"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/package.json"
  - layer: "バックエンド"
    name: "Express (5) + TypeORM (@n8n/typeorm fork) / SQLite (default) / PostgreSQL"
    confidence: confirmed
    evidence: "packages/cli/package.json（2026-10-06時点）の依存にexpress（カタログで5.1.0）、ワークスペース内の@n8n/typeorm、pg、sqlite3 5.1.7が含まれる。公式ドキュメント「Choose n8n's database」は、既定はSQLiteでPostgreSQLにも対応し、n8n CloudではStarter・ProがSQLite、Enterprise ScalingプランのみPostgreSQLを使うと明記。対応PostgreSQLは17と18、互換性のために16（2026年7月時点）"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/packages/cli/package.json"
  - layer: "スケーリング（キューモード）"
    name: "Redis + Bull (queue mode: main / worker / webhook processors)"
    confidence: confirmed
    evidence: "公式ドキュメント「Enable queue mode」に、メインインスタンスがタイマーとWebhookを受けて実行を生成し、実行IDをメッセージブローカーのRedisへ渡し、ワーカーがそれを取ってDBからワークフローを読み、結果をDBに書いてRedisへ完了を通知すると明記。暗号鍵はメインとワーカーで共有し、SQLiteでのキューモードは推奨されない。packages/cli/package.jsonにはbull 4.16.4とioredis 5.3.2が含まれる"
    evidenceUrl: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode"
  - layer: "ユーザーコードの隔離"
    name: "Task runners (JavaScript / native Python, external mode via n8nio/runners image)"
    confidence: confirmed
    evidence: "公式ドキュメント「Set up task runners」に、タスクランナーはCode nodeのJavaScriptとPythonを実行する唯一の隔離層で、本番では外部モードを使うべきこと、内部モードは子プロセスとしてn8nと同じuid/gidで動き設計上安全でなく、n8n 3.0から非推奨になることが明記。2.0の破壊的変更の一覧は、タスクランナーを既定で有効にし、外部モード用のランナーをn8nio/runnersイメージに分離し、Pyodide版のPython Code nodeをネイティブPythonのランナーに置き換えたと書く"
    evidenceUrl: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-task-runners"
  - layer: "AI・エージェント機能"
    name: "LangChain.js (1.x) + LangGraph + Model Context Protocol SDK"
    confidence: confirmed
    evidence: "リポジトリのpnpm-workspace.yaml（2026-10-06時点）のカタログに langchain 1.2.30、@langchain/core 1.2.8、@langchain/langgraph 1.0.2、@langchain/openai、@langchain/anthropic が固定され、packages/cli/package.jsonは@modelcontextprotocol/sdkに依存する。packages/@n8n配下にnodes-langchain・ai-workflow-builder.ee・agents・mcp-apps・mcp-browserがある"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/pnpm-workspace.yaml"
  - layer: "エディタ（フロントエンド）"
    name: "Vue.js (3.5) + Pinia + Vue Flow + Element Plus + CodeMirror + Vite (8)"
    confidence: confirmed
    evidence: "packages/frontend/editor-ui/package.json（2026-10-06時点）の依存にvue・pinia・vue-router（カタログでvue ^3.5.13）、@vue-flow/core 1.48.0、element-plus、@codemirror/state、@n8n/design-systemが含まれ、ビルドはvite（カタログで^8.0.2）"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/packages/frontend/editor-ui/package.json"
  - layer: "ライセンス"
    name: "Sustainable Use License (1.0) + n8n Enterprise License (.ee files)"
    confidence: confirmed
    evidence: "リポジトリのLICENSE.mdに、ファイル名に.ee.を含むかディレクトリ名が.eeのソースはSustainable Use Licenseの対象外でn8n Enterprise Licenseが要ること、それ以外はSustainable Use Licenseで、自社の内部業務・非商用・個人利用に限り使用・改変でき、他者への提供は非商用かつ無償の場合のみ許されると明記。GitHubはライセンスを「Other」と表示する"
    evidenceUrl: "https://github.com/n8n-io/n8n/blob/master/LICENSE.md"
  - layer: "サービスサイト・ドキュメント・ブログ"
    name: "Nuxt + Strapi (n8n.io) / GitBook (docs) / Ghost (6, blog) / Discourse (community) / Cloudflare"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、n8n.io の応答に server: cloudflare が付き、HTMLに __NUXT__ と _nuxt/ のパス、Vueのscoped CSSが付ける data-v- 属性が700件以上、strapi への参照が300件以上含まれていた。app.n8n.cloud は x-powered-by: Nuxt を返し、docs.n8n.io はGitBookの資産を読み込み x-vercel-id を返し、blog.n8n.io は generator: Ghost 6.68 のmetaを持ち、community.n8n.io は x-discourse-route を返した。n8n.io のOGP画像は Azure Blob Storage（n8niostorageaccount.blob.core.windows.net の n8nio-strapi-blobs コンテナ）から配信されていた"
sources:
  - label: "n8n公式: Plans and Pricing"
    url: "https://n8n.io/pricing/"
    accessedAt: "2026-10-06"
  - label: "n8n公式: Affiliate program"
    url: "https://n8n.io/affiliates/"
    accessedAt: "2026-10-06"
  - label: "n8n公式: Imprint（n8n GmbH・ベルリン）"
    url: "https://n8n.io/imprint/"
    accessedAt: "2026-10-06"
  - label: "n8n公式ブログ: n8n raises $180M Series C（2025-10-09）"
    url: "https://blog.n8n.io/series-c/"
    accessedAt: "2026-10-06"
  - label: "n8n公式ブログ: Announcing SAP's strategic investment in n8n（2026-05-12）"
    url: "https://blog.n8n.io/n8n-sap/"
    accessedAt: "2026-10-06"
  - label: "n8n公式ブログ: Introducing n8n 2.0（2025-12-08）"
    url: "https://blog.n8n.io/introducing-n8n-2-0/"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: v2.0 Breaking changes"
    url: "https://docs.n8n.io/changelog/v20-breaking-changes"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Choose how to use n8n（Cloud / Self-hosted・ライセンスとプラン）"
    url: "https://docs.n8n.io/choose-how-to-use-n8n"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Try free then choose a plan"
    url: "https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Choose n8n's database"
    url: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/choose-n8ns-database"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Enable queue mode"
    url: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/scaling/enable-queue-mode"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Set up task runners"
    url: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/set-up-task-runners"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Privacy（GDPR・テレメトリ）"
    url: "https://docs.n8n.io/privacy-and-security/privacy"
    accessedAt: "2026-10-06"
  - label: "GitHub: n8n-io/n8n（リポジトリ・LICENSE.md・package.json）"
    url: "https://github.com/n8n-io/n8n"
    accessedAt: "2026-10-06"
  - label: "GitHub: n8n-io/n8n Security Advisories"
    url: "https://github.com/n8n-io/n8n/security/advisories"
    accessedAt: "2026-10-06"
  - label: "GitHub Security Advisory GHSA-v4pr-fm98-w9pg: Unauthenticated File Access via Improper Webhook Request Handling（CVE-2026-21858）"
    url: "https://github.com/n8n-io/n8n/security/advisories/GHSA-v4pr-fm98-w9pg"
    accessedAt: "2026-10-06"
---

n8nは、ノードをつないで業務の自動化やAIエージェントを作るワークフローツールだ。[Make](/ja/articles/make)やZapierと同じ市場にいるが、ソースコードを公開し、自分のサーバーで無料で動かせる点が違う。その「無料で動く」部分がGitHubのスター20万件と170万人の月間アクティブビルダーを集め、「動かしてあげる」部分と「大企業向けの機能」が売上になっている。

## サービス解説

n8n GmbHはベルリンのNovalisstr. 10に登記され、代表はJan Oberhauser氏だ。GitHubのリポジトリは2019年6月22日に作られ、2026年5月のブログで同氏は「n8nを始めてからほぼ7年」と書いている。製品は、ブラウザのキャンバスでノードをつないでワークフローを作るエディタと、それを実行する基盤で、自社でホストする「n8n Cloud」と、自分のサーバーで動かすセルフホストの両方がある。

:::fact
公式の料金ページ（2026-10-06時点・年払い）によれば、クラウド版はStarterが月20ユーロで月2,500回の実行、1共有プロジェクト、同時実行5、Assistantクレジット月1,600。Proは月50ユーロで月10,000回、3共有プロジェクト、同時実行最大50、7日間のインサイト、ワークフロー履歴、管理者ロール。Businessは月667ユーロでセルフホスト専用、月40,000回、6共有プロジェクト、SSOとLDAP、複数環境、スケーリング用のキューモード、Gitによるバージョン管理。Enterpriseは実行回数が個別見積もりで、共有プロジェクト無制限、同時実行200以上、365日のインサイト、外部シークレットストア連携、ログストリーミング、SLA付きサポート。年払いは17%引き、全プランでユーザー数とワークフロー数は無制限、すべての連携が使える。従業員20人未満にはBusinessが50%引きのStart-up Planがあり、Community Editionはセルフホスト版としてGitHubで無料で手に入る。
:::

:::fact
公式ブログの2025年10月9日の記事によれば、n8nはAccel主導でMeritech、Redpoint、Evantic、Visionaries Club、NVentures（NVIDIA）、T.Capitalと既存投資家のFelicis、Sequoia、Highland Europe、HV Capitalから1億8,000万ドルのシリーズCを調達し、評価額は25億ドル、累計調達額は2億4,000万ドルになった。同記事は2025年にユーザーが6倍、売上が10倍になったこと、GitHubスターが16万2,000であることを挙げ、「n8nがAIで作るための既定のプラットフォームになる。より重要なのは、AIをデプロイするための」と書いている。2026年5月12日の記事によれば、SAPがn8nに出資し、評価額は1年足らず前の2倍以上の52億ドルになった。同記事は月間アクティブビルダー170万人、1,400社以上のエンタープライズ顧客を挙げ、n8nをSAPのJoule Studioにネイティブに組み込むとしている。
:::

:::pull
GitHubのスターは2025年10月の16万2,000から2026年10月の20万6,731へ。評価額は2025年10月の25億ドルから2026年5月の52億ドルへ。どちらも1年足らずで伸びた。
:::

::scorecard

## UX分析

n8nの体験は、「ノードをつなぐ」ローコードと「コードを書く」の間を行き来できるように作られている。料金の読み方と、自分で動かすときの責任の重さが、他の自動化ツールと違う。

- **1実行は1回、ステップは数えない**。料金ページは「他のツールがステップ単位やユーザー単位で課金するのと違い、n8nはワークフローが最初から最後まで動いたときだけ課金する」と書く。[Make](/ja/articles/make)のオペレーション課金に慣れた人には、同じ複雑さのワークフローで見積もりの立て方が変わる。一方で、Starterの1実行は最長5分、Proは40分という上限があり、同時実行はStarterで5、Proで20または50と、回数以外の制約が別の軸にある。
- **無料で試す場所が2つある**。公式ドキュメントによれば、クラウドの無料トライアルは14日間、Proの機能を1,000回の実行まで、計算資源はStarter相当で使え、期限が来るとワークスペースは削除される（ワークフローは90日間ダウンロードできる）。もうひとつはセルフホストのCommunity Editionで、ドキュメントは「ほぼ完全な機能セットを無料で」と説明する。どちらで始めるかで、その後に払うものが変わる。
- **AIはノードでもあり、エディタの補助でもある**。料金ページの機能表には、AI Agentノード、MCP Server Trigger、MCPクライアント、ツール呼び出しへの人間の承認、ホスト型チャット、APIキーなしで使えるAIモデル（Gatewayクレジット）、ワークフローを作るAssistant（Starterで月1,600クレジット）が並ぶ。n8nはワークフローの中でLLMを呼ぶ道具であると同時に、外のAIアプリからワークフローを作らせる道具にもなっている。
- **自分で動かすなら、守るのも自分**。セルフホストの公式ドキュメントは、タスクランナーを「ユーザーが書いたコードとn8nの間の唯一の隔離層」と呼び、本番では外部モードを使うよう太字で求める。無料で動く代わりに、更新と隔離の判断は利用者側にある。
- **テレメトリは既定で送る**。公式ドキュメントのPrivacyページによれば、n8nは製品の使われ方に関する限られた情報を収集し、ワークフローを流れるデータや資格情報は収集しないと書き、セルフホストでは設定でオプトアウトできる。

## 技術構成

::techstack

:::fact
GitHubのn8n-io/n8n（2026-10-06時点）は、スター206,731、フォーク61,008、主言語TypeScriptで、説明文に「Fair-code workflow automation platform with native AI capabilities. 400+ integrations」とある。最新リリースは2026年10月5日のn8n@2.41.7。ルートのpackage.jsonはNode.js 24以上とpnpm 12.4.2以上を要求し、Turborepoでビルドする。packages/cli/package.jsonの依存には、Express、ワークスペース内の@n8n/typeorm、pg、sqlite3、bull、ioredis、@modelcontextprotocol/sdk、isolated-vm、prom-client、Sentry、PostHog、RudderStack、SAML（samlify）・OIDC（openid-client）・LDAP（ldapts）のライブラリ、@n8n_io/license-sdkが含まれる。pnpm-workspace.yamlのカタログはlangchain 1.2.30、@langchain/core 1.2.8、@langchain/langgraph 1.0.2、vue ^3.5.13、vite ^8.0.2、express 5.1.0を固定している。
:::

:::fact
公式ドキュメント「Enable queue mode」（2026-10-06時点）によれば、キューモードではメインのn8nインスタンスがタイマーとWebhookの呼び出しを受けて実行を生成し（実行はしない）、実行IDをRedisに渡す。ワーカーはRedisからメッセージを取り、IDでデータベースからワークフローを読んで実行し、結果をデータベースに書き、Redisに完了を通知する。ワーカーはそれぞれがNode.jsのインスタンスで、ワーカーを足し引きしてスケールする。暗号鍵N8N_ENCRYPTION_KEYはメイン・ワーカー・Webhookプロセッサで共有する必要があり、SQLiteでのキューモードは推奨されず、ファイルシステムでのバイナリデータ保存はキューモードで使えないためS3の外部ストレージを使う。「Choose n8n's database」によれば、既定はSQLiteでPostgreSQLに対応し、n8n CloudはStarter・ProがSQLite、Enterprise ScalingのみPostgreSQL。Amazon Aurora PostgreSQLは実験的扱いで、AlloyDB・CockroachDB・YugabyteDBのような互換DBは非対応だ。
:::

:::fact
2025年12月8日の公式ブログ「Introducing n8n 2.0」によれば、2.0.0はBETAとして公開され、新機能ではなく「既定で安全」に倒す強化リリースだ。タスクランナーを既定で有効にしてCode nodeの実行を隔離環境で動かし、Code nodeからの環境変数アクセスを遮断し、任意のコマンドを実行できるノードを既定で無効にした。新しいSQLiteのプーリングドライバはベンチマークで最大10倍速く、以後は年に1〜2回メジャーバージョンを出すとしている。ドキュメントの破壊的変更一覧は、N8N_BLOCK_ENV_ACCESS_IN_NODEの既定がtrueになること、設定ファイルに0600のパーミッションを要求すること、外部モードのタスクランナーがn8nio/n8nイメージから外れn8nio/runnersイメージになること、Pyodide版のPython Code nodeがネイティブPythonのタスクランナーに置き換わること、$evaluateExpression()がCode nodeで使えなくなることを挙げる。「Set up task runners」は、内部モードはn8nと同じuid/gidの子プロセスで設計上安全でなく、n8n 3.0から非推奨で将来削除されると書く。
:::

:::fact
GitHubのSecurity Advisories（2026-10-06時点でAPIから取得）によれば、n8n-io/n8nが公開した勧告は210件で、公開日は2025年が14件、2026年が196件（9月30日まで）、深刻度は critical 22件・high 95件・medium 91件・low 2件だった。1日に18件が公開された日（2026年6月10日と9月2日）もある。そのうちGHSA-v4pr-fm98-w9pg（CVE-2026-21858、2026-01-07公開、CVSS 10.0）は、特定のフォームベースのワークフローを通じて認証なしのリモート攻撃者がサーバー上のファイルにアクセスできる脆弱性で、1.65.0以上1.121.0未満が影響を受け、1.121.0で修正された。公式の回避策はなく、アップグレードまで公開Webhookとフォームのエンドポイントを制限することが一時的な緩和策とされた。
:::

:::guess
技術構成の中心は、TypeScriptの単一リポジトリで、エディタ（Vue）、実行基盤（Express + TypeORM）、ノード群（LangChainを含む）を一緒に育てる形とみられる。Code nodeをタスクランナーへ追い出し、2.0で既定を安全側に倒したのは、2025年末から2026年にかけて公開された脆弱性の多くが「式の評価」「サンドボックス脱出」「ノードのパラメータ経由のプロトタイプ汚染」に集中していることと対応していると推測される。勧告の件数が2026年に急増したこと自体は、脆弱性が増えたとも、研究者の注目と自社の公開手続きが整ったとも読める。無料でセルフホストできる製品は、修正版を出しても利用者が更新しなければ直らないため、勧告の公開と「既定で安全」の両方が、同じ構造への対処とみられる。クラウド版のStarter・ProがSQLiteで動くという記述からは、顧客ごとに1インスタンスを立てる単一テナントの構成が推測される。
:::

## ビジネスモデル

収益は、クラウド版の月額（実行回数の階段）と、セルフホスト向けの有料ライセンス（Business・Enterprise）だ。無料の部分は、Community Editionのソースコードと、月額の中の「無制限のユーザーとワークフロー」にある。

:::fact
リポジトリのLICENSE.md（2026-10-06時点）によれば、ファイル名に.ee.を含むか、ディレクトリ名が.eeのソースコードはSustainable Use Licenseの対象外で、使うにはn8n Enterprise Licenseが要る。それ以外はSustainable Use License 1.0で、自社の内部業務、非商用または個人利用に限って使用・複製・改変・配布ができ、他者に提供できるのは非商用目的で無償の場合だけと書かれている。公式ドキュメント「Choose how to use n8n」の図は、クラウドにStarter・Pro・Enterprise、セルフホストにCommunity・Registered Community・Business・Enterpriseの各エディションを置き、「無料で動かしたい」人にはCommunity Editionを勧めている。
:::

:::fact
公式のアフィリエイトページ（2026-10-06時点）によれば、n8n Cloudの紹介に対して初年度の12カ月間、紹介した購読の純収入の30%が支払われる。対象はクラウド版（StarterとPro）で、支払いはPayPalで月1回、残高100ユーロ以上のとき。有料広告キャンペーンでのリンク利用は禁止され、違反すればプログラムから外される。同ページはクラウドのプランが月20ユーロからで14日間の無料トライアルがあること、Enterpriseライセンスが無制限の実行回数・SSO・バージョン管理・SLA付きサポートを含むことも案内している。
:::

:::guess
料金を実行回数で数える設計は、1回の実行の中にステップが多いほど、同じ値段でできることが増える。ステップ単位の[Make](/ja/articles/make)とは逆向きの選び方になるため、AIエージェントのように1回の実行で多くのツール呼び出しが起きる使い方ほど、n8nの課金が有利に見えやすいと推測される。一方でクラウド版は実行時間と同時実行数で縛っており、重い処理はPro以上へ、スケールが要る処理はキューモードを含むBusiness以上へ上がる階段になっている。Businessをセルフホスト専用にしたのは、無料のCommunity Editionで本番運用している企業に、SSO・環境分離・Git連携という「運用の機能」を売って有料化する入口とみられる。
:::

:::guess
2025年の売上10倍、2026年の評価額52億ドル、SAPのJoule Studioへの組み込みは、収益の重心が個人のクラウド購読から、エンタープライズのライセンスと提携へ移っていることを示すとみられる。SAPの出資記事が「データ主権」「業界ごとのコンプライアンス」「監査証跡」を並べたのは、セルフホストできることが大企業向けには売り文句になるからだ。無料で配ったソースが導入の摩擦を下げ、同じソースに対する脆弱性の公開が「本番で使うなら有料ライセンスと更新の体制を」という方向に働く。配ることと売ることは、同じリポジトリの中で分かれている。
:::

ソースコードをGitHubで公開し、スターを20万件集め、無料でセルフホストできるようにした会社が、7カ月で評価額を2倍にした。売っているのは「動かしてあげること」と「大企業が本番で使うための機能」で、どちらもソースを配ったからこそ要るものになった。2026年に196件の脆弱性勧告を公開したのも同じリポジトリだ。開くことの代償は、開いた場所に公開されている。
