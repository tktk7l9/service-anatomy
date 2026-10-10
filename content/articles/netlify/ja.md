---
service: "Netlify"
title: "Jamstackという言葉を作った会社が、新規プロジェクトの93%をGitホスト抜きで受け取るようになった — 値段をクレジットに統一し、エッジ関数をマイクロVMに載せ替え、Claude CodeやCodexを管理画面に入れたNetlifyを解剖する"
description: "Netlifyは、2014年にサンフランシスコで創業したWebアプリのホスティングとデプロイのプラットフォームだ。git pushだけでビルドと世界配信が終わる体験と、Deploy Previewを広め、創業者は「Jamstack」という言葉を作った。2021年11月にBessemer主導で1億500万ドルを調達し、評価額は20億ドル。2025年9月には料金を「クレジット」という1つの単位に統一し、10月にはClaude Code・Codex・Geminiを管理画面から動かすAgent Runnersを出し、2026年3月には1,000万人超の開発者とチームが使うと発表した。料金ページ、パートナーのページ、プレスリリース、公式ブログ、ドキュメント、GitHub、当サイトの実観測から、エッジ関数をV8 isolateからFirecrackerのマイクロVMへ移した設計、S3を正本にした自前のGitストレージ、PartnerStackで20%を払うパートナー制度、フレームワークを持たない会社がAIの時代にどこで稼ぐのかまでを解剖する。"
lead: "Netlifyの公式ブログ（2026年9月22日）は、こう書いた。先月、新しいプロジェクトの93%は、GitHubのようなGitホストを経由せず、フォルダのアップロードやAPI、MCP、エージェントから直接作られた。2年前は70%だった。Gitのワークフローを売りに育った会社が、Gitホストなしで届くプロジェクトのために、S3を正本にした自前のGitリポジトリを全プロジェクトに持たせた。フレームワークを持たず、クラウドも借りているNetlifyが、何を自作し、何を値段に換えているのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, jamstack, serverless, edge, ai-agent, deno, aws]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://www.netlify.com/"
# Affiliate link placeholder: Netlify Partners (https://www.netlify.com/partners/, checked 2026-10-10)
# pays Ecosystem Partners a 20% revenue share for up to 12 months on eligible self-serve new business
# (Certified Partners: 20% for up to 24 months). Applications are reviewed by the Netlify Partner Team
# and tracking links are issued through PartnerStack after approval. Once the owner is approved, paste
# the PartnerStack tracking link here and keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<partnerstack-tracking-link-for-netlify>"
#   program: "Netlify Partners (PartnerStack)"
vendor: "Netlify, Inc."
origin: "US"
heroTheme: "netlify"
scores: { product: 4.0, ux: 4.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "エッジ関数の実行基盤"
    name: "Firecracker MicroVM (Unikraft)"
    confidence: confirmed
    evidence: "公式ブログ（2026-09-29）に、1日に約10億回動くEdge Functionsの基盤を作り直し、以前はネットワークの外のホスト型の実行サービスに出していた要求を、自社のエッジネットワーク内の計算ノードで、関数ごとに1つのFirecrackerのマイクロVMとして動かすようになったと明記。VMの起動・スナップショット・復元・ゼロへの縮退はUnikraftの製品が担い、中央値は25〜40msから5〜6msになった。以前の実行モデルはV8 isolateだったと書く"
    evidenceUrl: "https://www.netlify.com/blog/edge-functions-firecracker-microvms/"
  - layer: "エッジ関数のランタイム"
    name: "Deno"
    confidence: confirmed
    evidence: "公式ドキュメント「Edge Functions overview」（2026-10-10確認）に、TypeScriptとJavaScriptで書く処理を、利用者に最も近いネットワークの端で、Denoに基づく安全なランタイムで動かすと明記。2022年4月のプレスリリースでもDenoを選んだことを公表している"
    evidenceUrl: "https://docs.netlify.com/build/edge-functions/overview/"
  - layer: "サーバーレス関数"
    name: "Netlify Functions"
    confidence: confirmed
    evidence: "公式ドキュメント（2026-10-10確認）に、関数はプロジェクト内のファイルで、イベントのたびに使い捨てのランタイム環境で動き、トラフィックに応じて自動で拡張すると明記。AWS Lambdaのハンドラの形式で書く「Lambda互換モード」は非推奨で、2027年7月1日以降はこのモードの関数を含むデプロイを受け付けないとし、同じLambda互換のページにはGoで書く関数の作り方も載る"
    evidenceUrl: "https://docs.netlify.com/build/functions/overview/"
  - layer: "基盤クラウド"
    name: "AWS (S3, Lambda)"
    confidence: confirmed
    evidence: "公式ブログ「How we built Git storage for millions of Netlify projects」（2026-09-22）に、自前のGitサービスはS3を永続的な正本にし、各ポッドはディスクのキャッシュを持ち、refの更新はS3の条件付き書き込み（If-Match）で原子的に行うと明記。関数のドキュメントはAWS Lambdaの環境変数の上限（4KB）に言及する。当サイトの実観測（2026-10-10）では、www.netlify.com などの応答のserver-timingヘッダーに dc;desc=\"aws-nrt\" が含まれ、東京の拠点がAWS上にあることを示す"
    evidenceUrl: "https://www.netlify.com/blog/how-we-built-git-storage-for-millions/"
  - layer: "Gitストレージ"
    name: "Go / Amazon S3"
    confidence: confirmed
    evidence: "同じブログに、GitサービスはGoで書かれ、ローカルのベアリポジトリに対してGitのバイナリを実行し、Smart HTTPでクライアントと話すこと、オブジェクトとpackfileはGitのネイティブな形式のままS3に置き、refは小さなJSONとして保存することを明記。ビルドとエージェント実行のための作業領域の準備は、2026年9月7〜13日の中央値で0.76秒（GitHub接続のプロジェクトは0.84秒）だった"
    evidenceUrl: "https://www.netlify.com/blog/how-we-built-git-storage-for-millions/"
  - layer: "データベース"
    name: "Netlify Database (managed Postgres with branching)"
    confidence: confirmed
    evidence: "公式ドキュメント（2026-10-10確認）に、Netlify Databaseはプラットフォームに組み込まれたフルマネージドのPostgresで、プロビジョニング・マイグレーション・ブランチを自動で扱い、Deploy Previewとエージェントの実行ごとに本番データのコピーを持つブランチが作られると明記。クレジット制のプランだけで使える"
    evidenceUrl: "https://docs.netlify.com/build/data-and-storage/netlify-database/"
  - layer: "認証（Identity）"
    name: "GoTrue"
    confidence: confirmed
    evidence: "GitHubのnetlify/gotrue（2026-10-10確認）は、利用者の管理とJWTの発行を行うAPIで、言語はGo、ライセンスはMIT、スター数は約4,500。同じ組織のnetlify/git-gatewayもGoで書かれている"
    evidenceUrl: "https://github.com/netlify/gotrue"
  - layer: "CLI・ビルド"
    name: "TypeScript / Node.js"
    confidence: confirmed
    evidence: "GitHubのnetlify/cli（2026-10-10確認）は言語がTypeScriptでMIT、netlify/buildはJavaScriptでMITの「Netlify Build（Nodeのプロセス）」で、ビルドコマンドとBuild Pluginsの実行、関数のバンドルを担うと説明する。ドキュメントは関数の依存関係を@netlify/zip-it-and-ship-itがまとめると書く"
    evidenceUrl: "https://github.com/netlify/cli"
  - layer: "AI基盤"
    name: "AI Gateway + Agent Runners"
    confidence: confirmed
    evidence: "公式ドキュメント（2026-10-10確認）に、AI GatewayはOpenAI・Anthropic・Google Gemini・OpenRouter・TypeSafe AIのAPIキーと接続先を関数の環境に自動で注入し、実際のトークン使用量をクレジットに換算して請求すると明記。Agent RunnersはClaude Code、OpenAI Codex、Google Gemini、OpenCode（OpenRouter経由でZero Data Retentionの提供元だけに送る）を管理画面から動かし、Gitに接続したプロジェクトではGitHubだけに対応する"
    evidenceUrl: "https://docs.netlify.com/build/ai-gateway/overview/"
  - layer: "パートナー管理"
    name: "PartnerStack"
    confidence: confirmed
    evidence: "公式のパートナーのページ（2026-10-10確認）に、紹介・推薦・影響の追跡と帰属、報告、ブランド素材の配布、成果の確認にPartnerStackを使うと明記"
    evidenceUrl: "https://www.netlify.com/partners/"
  - layer: "自社サイト配信"
    name: "Netlify"
    confidence: confirmed
    evidence: "当サイトの実観測（2026-10-10）で、www.netlify.com、app.netlify.com、docs.netlify.com はいずれも server: Netlify、cache-status: \"Netlify Edge\"、x-nf-request-id のヘッダーを返した。自社製品による自社サイトの配信"
    evidenceUrl: "https://www.netlify.com/"
sources:
  - label: "Netlify公式: トップページ"
    url: "https://www.netlify.com/"
    accessedAt: "2026-10-10"
  - label: "Netlify公式: Pricing（Free / Personal / Pro / Enterpriseとクレジットの単価）"
    url: "https://www.netlify.com/pricing/"
    accessedAt: "2026-10-10"
  - label: "Netlify公式: About（創業年・本社・プレスリリース一覧）"
    url: "https://www.netlify.com/about/"
    accessedAt: "2026-10-10"
  - label: "Netlify公式: Netlify Partners（20%の収益分配・PartnerStack）"
    url: "https://www.netlify.com/partners/"
    accessedAt: "2026-10-10"
  - label: "Netlifyプレスリリース: After Onboarding 800,000 Developers, Netlify Raises $53M in Series C（2020-03-04）"
    url: "https://www.netlify.com/press/after-onboarding-800000-developers-netlify-raises-53m-in-series-c-funding-to-fuel-enterprise-growth/"
    accessedAt: "2026-10-10"
  - label: "Netlifyプレスリリース: Netlify Raises $105 Million to Transform Development for the Modern Web（2021-11-17）"
    url: "https://www.netlify.com/press/netlify-raises-usd105-million-to-transform-development-for-the-modern-web/"
    accessedAt: "2026-10-10"
  - label: "Netlifyプレスリリース: Netlify Edge Functions Accelerate Development of Modern Web Applications at the Edge（Deno採用・2022-04-19）"
    url: "https://www.netlify.com/press/netlify-edge-functions-accelerate-development-of-modern-web-applications-at-the-edge/"
    accessedAt: "2026-10-10"
  - label: "Netlifyプレスリリース: Netlify Acquires Gatsby Inc.（2023-02-01）"
    url: "https://www.netlify.com/press/netlify-acquires-gatsby-inc-to-accelerate-adoption-of-composable-web-architectures/"
    accessedAt: "2026-10-10"
  - label: "Netlifyプレスリリース: Bolt.new and Netlify Power 1 Million AI-Generated Websites（2025-03-26）"
    url: "https://www.netlify.com/press/bolt-netlify-1-million-ai-generated-websites/"
    accessedAt: "2026-10-10"
  - label: "Netlify公式ブログ: New credit-based pricing for today's AI development（2025-09-04）"
    url: "https://www.netlify.com/blog/new-pricing-credits/"
    accessedAt: "2026-10-10"
  - label: "Netlifyプレスリリース: Netlify Launches AI Agent Runners（2025-10-01）"
    url: "https://www.netlify.com/press/netlify-launches-ai-agent-runners-to-clear-production-backlogs-turning-days-of-updates-into-minutes/"
    accessedAt: "2026-10-10"
  - label: "Netlifyプレスリリース: As AI accelerates how fast code ships, Netlify delivers the production tools built for this AI era（2025-12-16）"
    url: "https://www.netlify.com/press/as-ai-accelerates-how-fast-code-ships-netlify-delivers-the-production-tools-built-for-this-ai-era/"
    accessedAt: "2026-10-10"
  - label: "Netlifyプレスリリース: Netlify Turns AI Prompts Into Production-Ready Software（2026-03-18）"
    url: "https://www.netlify.com/press/netlify-turns-ai-prompts-into-production-ready-software/"
    accessedAt: "2026-10-10"
  - label: "Netlify公式ブログ: New Netlify projects are now private by default（2026-07-28）"
    url: "https://www.netlify.com/blog/new-netlify-projects-are-now-private-by-default/"
    accessedAt: "2026-10-10"
  - label: "Netlify公式ブログ: Open models are having a moment. We're all in.（2026-08-06）"
    url: "https://www.netlify.com/blog/build-with-open-models-in-production/"
    accessedAt: "2026-10-10"
  - label: "Netlify公式ブログ: How we built Git storage for millions of Netlify projects（2026-09-22）"
    url: "https://www.netlify.com/blog/how-we-built-git-storage-for-millions/"
    accessedAt: "2026-10-10"
  - label: "Netlify公式ブログ: 5x faster Edge Functions: v8 isolates to Unikraft MicroVMs（2026-09-29）"
    url: "https://www.netlify.com/blog/edge-functions-firecracker-microvms/"
    accessedAt: "2026-10-10"
  - label: "Netlify Docs: Functions overview"
    url: "https://docs.netlify.com/build/functions/overview/"
    accessedAt: "2026-10-10"
  - label: "Netlify Docs: Lambda compatibility for Functions（2027年7月1日に受付終了）"
    url: "https://docs.netlify.com/build/functions/lambda-compatibility/"
    accessedAt: "2026-10-10"
  - label: "Netlify Docs: Edge Functions overview（Denoに基づくランタイム）"
    url: "https://docs.netlify.com/build/edge-functions/overview/"
    accessedAt: "2026-10-10"
  - label: "Netlify Docs: Netlify Database"
    url: "https://docs.netlify.com/build/data-and-storage/netlify-database/"
    accessedAt: "2026-10-10"
  - label: "Netlify Docs: Agent Runners overview"
    url: "https://docs.netlify.com/build/build-with-ai/agent-runners/overview/"
    accessedAt: "2026-10-10"
  - label: "Netlify Docs: AI Gateway overview"
    url: "https://docs.netlify.com/build/ai-gateway/overview/"
    accessedAt: "2026-10-10"
  - label: "Netlify Docs: Frameworks overview（Next.js・Astro・SvelteKitなどの設定）"
    url: "https://docs.netlify.com/build/frameworks/overview/"
    accessedAt: "2026-10-10"
  - label: "GitHub: netlify/gotrue（Go・MIT）"
    url: "https://github.com/netlify/gotrue"
    accessedAt: "2026-10-10"
  - label: "GitHub: netlify/cli（TypeScript・MIT）"
    url: "https://github.com/netlify/cli"
    accessedAt: "2026-10-10"
  - label: "GitHub: netlify/build（JavaScript・MIT）"
    url: "https://github.com/netlify/build"
    accessedAt: "2026-10-10"
---

Netlifyは、Gitリポジトリをつなぐか、フォルダを放り込むだけで、ビルドから世界への配信までを終わらせるWebアプリのホスティングプラットフォームだ。当サイトが解剖した[Vercel](/ja/articles/vercel)と同じ市場で、Deploy Previewやgit pushによるデプロイといった、いまでは当たり前になった体験を早くから広めた。違いは、VercelがNext.jsという自前のフレームワークを入口に持つのに対し、Netlifyはフレームワークを持たず、どのフレームワークでも同じように動かすことを売りにしてきた点にある。2025年から2026年にかけて、その会社は料金、実行基盤、ソースコードの置き場所、そして「誰が作るのか」を立て続けに作り直した。

## サービス解説

Netlifyは、静的サイトからサーバーレスの関数、エッジで動く関数、データベース、Blobストレージ、フォーム、認証、AIのゲートウェイまでを1つのプラットフォームに並べ、個人の無料プランから企業向けの契約までを売る。

:::fact
会社概要のページ（2026-10-10時点）によれば、Netlifyは2014年に創業したベンチャー出資のソフトウェア会社で、本社はサンフランシスコ、チームは世界に散らばる。ページの構造化データは創業者としてMathias Biilmann氏とChristian Bach氏を挙げ、CEOはBiilmann氏（公式ブログの署名は「Co-founder and CEO」）、CTOはDana Lawson氏（2026年8月の公式ブログの対談）。プレスリリースによれば、2020年3月のシリーズCはEQT Venturesが主導して5,300万ドルで、当時の開発者は80万人、累計の調達は9,700万ドル。同じリリースは、創業者が2015年にWebサーバーを不要にする新しい構成に会社を賭け、その構成を「JAMstack」と名付けたと書く。2021年11月のシリーズDはBessemer Venture Partnersが主導し、Andreessen Horowitz、BOND、EQT Ventures、Kleiner Perkins、Mango Capital、Menlo Venturesが参加して1億500万ドル、評価額は20億ドル、累計の調達は2億1,200万ドルになった。このとき同社はGraphQLのOneGraphを買収し、2023年2月にはGatsby Inc.を、同年6月にはStackbitを買収した。利用者の数は、2025年3月のプレスリリースで600万人超、2025年9月の公式ブログで800万人超、10月に850万人超、12月に900万人超、2026年3月には1,000万人超の開発者とチーム、と発表のたびに増えている。
:::

:::fact
料金ページ（2026-10-10確認・米ドル）によれば、プランはFree（0ドル・月300クレジットまで・メンバー1人）、Personal（月9ドル・月1,000クレジット・メンバー1人）、Pro（月20ドル・メンバー無制限・月3,000クレジットから20,000クレジットまでの段階を選ぶ）、Enterprise（個別見積もり・99.99%のSLA・SSOとSCIM・ログの転送）の4つで、使った分は「クレジット」という1つの単位で数える。本番へのデプロイは1回15クレジット、コンピュートは1GB時あたり10クレジット、帯域は1GBあたり20クレジット、Webリクエストは1万件あたり2クレジットで、AIの推論は使ったモデルの費用に応じて変わる。追加のクレジットは、自動の補充を有効にしたときに500クレジットを5ドル、1,500クレジットを10ドルで買える。Deploy Previewとブランチのデプロイは無制限で、クレジット制のアカウントでは新しいプロジェクトが公開するまで非公開になる。2025年9月4日の公式ブログによれば、このクレジット制は同日に導入され、既存の顧客は従来のプランに留まることができ、Proは「月19ドルから20ドルに」改められた。同じ記事は、AIによる開発で1年のうちにコミュニティが倍になり800万人の開発者を超えたこと、古い料金は人の速度で進む開発を前提にしていたことを、変更の理由に挙げている。
:::

:::pull
フレームワークを持たない会社は、フレームワークの外にあるものを売るしかない。Netlifyが作り直したのは、値段の単位と、コードが届く経路と、関数が動く箱だった。
:::

::scorecard

## UX分析

Netlifyの体験は、「デプロイを考えずに済むこと」を10年かけて磨いたうえで、2025年以降は「人が書かないコードをどう受け取るか」へ重心を移している。

- **git pushでなくても届く**。公式ブログ（2026-09-22）によれば、直近の1か月で新しいプロジェクトの93%が、Netlify Drop（フォルダやzipのアップロード）、API、MCP、エージェントから直接作られ、2年前の70%から増えた。件数では月に数百万件で、2年で14倍になった。Gitホストを使わずに届いたプロジェクトには、Netlifyが管理するGitリポジトリが裏で用意され、クローンも、別のリモートへのpushも、GitHubへのエクスポートもできる。入口を広げながら、出口を閉じない作りだ。
- **非公開が既定になった**。公式ブログ（2026-07-28）によれば、クレジット制の新しいチームでは、新しいプロジェクトは最初から非公開で、Netlifyのログインで守られ、公開するまで誰にも見えない。試作や社内ツール、エージェントが作ったものが増え、「デプロイは発表ではなく作業の途中」になったことへの応答だと説明している。パスワードを作ったり配ったりする必要はなく、アクセスはチームの権限に従う。
- **値段の単位が1つになった**。帯域、ビルド時間、関数の呼び出し回数と別々に数えていた使用量を、クレジットという1つの数字にまとめた。1つの数字を見ていればよい反面、本番デプロイ1回が15クレジットという換算は、デプロイのたびに費用がかかることを意味し、小さな修正を何度も本番に出す使い方では数字が動きやすい。プレビューは無制限なので、試す場所と出す場所を分けることが、そのまま費用の設計になる。
- **エージェントが管理画面の中にいる**。プレスリリース（2025-10-01）によれば、Agent RunnersはClaude Code、Codex、Geminiを管理画面から動かし、コードベース、ログ、デプロイのパイプラインにアクセスできる状態で修正を作らせ、プレビューと承認を経て本番に出す。2026年3月の netlify.new では、プロンプトだけから新しいプロジェクトを始められるようになった。ドキュメントによれば、Gitに接続したプロジェクトでAgent Runnersを使えるのはGitHubだけで、GitLabやBitbucket、Azure DevOps、Cursor Originにつないだプロジェクトでは使えない。
- **モデルを選ぶ自由を売りにする**。公式ブログ（2026-08-06）によれば、Agent RunnersとAI Gatewayは、OpenRouterとOpenCodeとの提携でDeepSeek、Qwen、GLM、Kimiのようなオープンウェイトのモデルにも対応し、Claude、GPT、Geminiと切り替えても、プロジェクトもデプロイの流れも本番環境も変わらない。
- **互換モードの終わりが決まっている**。ドキュメントによれば、AWS Lambdaのハンドラの形式で関数を書く「Lambda互換モード」は非推奨で、2027年7月1日以降はこのモードの関数を含むデプロイを受け付けない。移行先は新しいFunctions APIか、Lambdaの書き方のまま新しいランタイムで動かす互換パッケージだ。期限が明記されているぶん、古い関数を抱える利用者には準備の時間が見える。

## 技術構成

::techstack

:::fact
公式ブログ（2026-09-29）によれば、Edge Functionsは1日に約10億回動き、以前は要求がNetlifyのネットワークを出てホスト型の実行サービスで処理されてから戻っていたが、作り直した基盤では、エッジのノードがTLSを終端し、関数のルートに合うと、ネットワーク内の計算ノードに転送する。計算ノードは関数ごとにFirecrackerのマイクロVMを1ミリ秒未満で作り、p99で約2msで起動し、関数のファイルはEROFSのイメージとしてメモリにマップして使う部分だけを読む。JavaScriptのサーバーがポートを開いた時点でスナップショットを取り、呼ばれていないときはゼロまで縮退し、次の呼び出しではスナップショットから復元する。VMの起動・スナップショット・復元・縮退はUnikraftの製品が担う。デプロイごとに別のサービスIDになり、同じ計算ノードに同じサービスを寄せる rendezvous hashing でVMを温かく保ち、負荷が閾値を超えると複数のノードに分散する。結果として、温まった呼び出しの中央値は25〜40msから5〜6msになり、p99は47.4%速くなり、可用性は99.998%、コールドスタートは呼び出しの約1.2%で平均約9msだった。同じ記事は、以前のV8 isolateでは得られなかった隔離が手に入ったこと、CPU 50ms・メモリ512MB・圧縮後20MBという現在の上限はisolateの時代の制約なので見直す余地があること、npmパッケージの対応をベータから出せることを挙げる。
:::

:::fact
公式ブログ（2026-09-22）によれば、Gitホストなしで届くプロジェクトのために作った自前のGitサービスはGoで書かれ、ローカルのベアリポジトリに対してGitのバイナリを実行し、Smart HTTPで通常のリモートとして振る舞う。永続的な正本はS3で、オブジェクトとpackfileはGitのネイティブな形式のまま、refは小さなJSONとして置く。pushでは、S3からの同期、git receive-packの実行、新しいオブジェクトのアップロード、ETagに対するIf-Matchの条件付き書き込みによるrefの更新、という順で処理し、S3が原子的に判定するため、2つのポッドが同じブランチを同時に進めても片方だけが成功する。S3への永続化が終わるまでクライアントに成功を返さず、大きなpushでは10秒ごとにGitの進捗メッセージを流して接続を保つ。ビルドとエージェント実行のための作業領域の準備は、2026年9月7〜13日の中央値で0.76秒、p95で2.26秒で、GitHubに接続したプロジェクトの0.84秒と2.51秒に近い。Agent Runnersの公開はgit mergeとpushになり、衝突のない更新は数分からおよそ1秒になった。ドキュメントによれば、Netlify Functionsは使い捨てのランタイム環境で動き、Edge FunctionsはDenoに基づくランタイムで動く。GitHubのnetlify/gotrueはGoで書かれたJWT発行のAPIで、netlify/cliはTypeScript、netlify/buildはJavaScriptで、いずれもMITライセンス。当サイトの実観測（2026-10-10）では、www.netlify.com、app.netlify.com、docs.netlify.com は server: Netlify と cache-status: "Netlify Edge" を返し、server-timingヘッダーには dc;desc="aws-nrt" が含まれていた。
:::

:::guess
基盤のクラウドをAWSに置いたまま、エッジの計算ノードやGitストレージといった「体験を決める層」を自作する構図は、[Vercel](/ja/articles/vercel)の解剖で見た割り切りとよく似ている。Edge Functionsを外部の実行サービスからネットワーク内のマイクロVMへ移したのは、速度だけでなく、要求の経路を自分で握ることで隔離とデバッグ、そして原価を自分の手に戻す判断とみられる。V8 isolateからマイクロVMへという方向は、isolateを看板にしてきた[Cloudflare](/ja/articles/cloudflare)のWorkersとは逆に見えるが、Netlifyの場合はisolateを自前で運用していたのではなく外部のサービスに出していたので、比べるべきは「借りていた箱を自分で持つことにした」という点だろう。S3の条件付き書き込みだけで多重のpushを捌くGitストレージの設計は、レプリカの管理を自分でやらずに済ませる代わりに、原子性をrefごとに狭く取る割り切りで、Gitホストの会社になるつもりはないという宣言と整合している。
:::

## 誰が作るのか

:::fact
プレスリリース（2025-03-26）によれば、Bolt.newで生成されNetlifyにデプロイされたサイトは、2024年11月から2025年3月までの5か月で100万を超え、同社はこの提携を「エージェント体験（AX）」の時代の入口と位置づけた。2025年10月1日のリリースによれば、Agent RunnersはClaude Code、Codex、Geminiを管理画面に取り込み、作る段階ではBolt、Same、Rocketなど20のパートナーから、開発の段階ではCopilot、Windsurf、CursorからMCPサーバーかGitを通じて、本番の段階ではAgent Runnersで、という3段階を1つの流れにしたと説明する。初期の利用者のデータに基づく推定として、開発者1人あたり週に約3時間、年に約18,000ドル分の余力が戻るとした。2025年12月16日のリリースは、Observability、AI Gateway（Anthropic・OpenAI・Google Geminiの認証情報と請求を1か所にまとめる）、クローラーとAIエージェントに描画済みのHTMLを返すPrerenderの拡張を一般提供にし、2026年3月18日のリリースは、netlify.new でプロンプトから新しいプロジェクトを始められること、企業向けに、製品管理者やデザイナー、マーケターがエージェントで作れる「Internal Builder」のシートを用意したことを発表した。顧客としてはFigma、Mattel、Riot Gamesが挙げられている。
:::

| 発表 | 日付 | Netlifyが公表した利用者の数 |
| --- | --- | --- |
| シリーズC | 2020年3月 | 開発者80万人 |
| シリーズD（評価額20億ドル） | 2021年11月 | 開発者200万人超 |
| Gatsbyの買収 | 2023年2月 | 開発者300万人超 |
| Bolt.newとの100万サイト | 2025年3月 | 開発者600万人超 |
| クレジット制の料金 | 2025年9月 | 開発者800万人超（1年で倍） |
| Agent Runners | 2025年10月 | 850万人超 |
| Observability・AI Gateway | 2025年12月 | 900万人超 |
| netlify.new | 2026年3月 | 1,000万人超の開発者とチーム |

:::guess
2023年の300万人から2025年3月の600万人まで2年かかった数字が、そこから1年で1,000万人に届いたのは、Boltのような生成ツールから流れ込む、自分でコードを書かない利用者の分とみられる。この層は無料プランに留まりやすく、1人あたりの売上は小さいと推測されるが、Netlifyがクレジット制に移り、新規プロジェクトを非公開を既定にし、Agent Runnersの推論をクレジットで課金するのは、この層の「試す」行為そのものを課金の単位に変える設計と読める。Gitホストを経由しないプロジェクトが93%という数字は、GitHubと並んで立つ会社から、GitHubの前に立つ会社へ位置が変わったことを示しているとみられる。一方で、Agent RunnersがGit接続ではGitHubにしか対応していないことからは、エージェントのための統合がまだ最大手の1社から順に進んでいる段階だと推測される。
:::

## ビジネスモデル

稼ぎ方は、Personal、Pro、Enterpriseのプランの料金と、クレジットで数える使用量だ。無料プランで利用者を集め、チームと企業の契約で稼ぐ構図は10年変わっていないが、AIの推論までクレジットに乗せたことで、課金の対象は配信から「作る工程」へ広がった。

:::fact
パートナーのページ（2026-10-10確認）によれば、Netlify Partnersは、まず全員がEcosystem Partnerとして始まり、対象となるセルフサーブの新規の売上に対して最大12か月、20%の収益分配を受ける。年に3社以上の新しいProの顧客か1社以上のEnterpriseの顧客を紹介し、研修を終えるとCertified Partnerになり、セルフサーブと企業向けの売上に対して、更新や拡大も含めて最大24か月、20%を受ける。Ecosystem PartnerになるのにNetlifyの顧客である必要はなく、排他の条件もなく、追跡と帰属、報告、ブランド素材の配布はPartnerStackで行う。申し込みはNetlify Partner Teamが審査する。プレスリリース（2021-11-17）によれば、シリーズDの時点で、インターネット利用者の推定16%が毎月Netlifyで配信されたサイトを訪れ、顧客にはAdyen、Affirm、Autodesk、Box、Okta、ServiceNow、Twilio、Unilever、VMwareが並んだ。2023年のGatsbyの買収のリリースは、Gatsbyのクラウド事業の売上が年率100%超で伸びていたと書き、Gatsbyのフレームワークはオープンソースのまま維持するとした。
:::

:::guess
Netlifyの弱点は、[Vercel](/ja/articles/vercel)のNext.jsのような、無料で配って自社に客を流し込むフレームワークを持たないことだった。Gatsbyの買収はその穴を埋める試みだったとみられるが、同社は買収後もフレームワークに依存しない立場を保ち、代わりに、Boltのような生成ツールと、Claude CodeやCodexのようなエージェントを入口にする道を選んだと読める。フレームワークの作者ではなく、エージェントとツールの「置き場所」になる戦略で、オープンウェイトのモデルまで並べるのは、特定のモデルの会社に入口を握られないための保険と推測される。評価額20億ドルは2021年11月のもので、その後の資金調達は公式のプレスリリースには見当たらない。Vercelが2025年に93億ドルの評価で3億ドルを調達したのと比べると、資本の面では差が開いており、Netlifyのクレジット制への移行とパートナーへの20%の分配は、広告費を先に払わずに有料の利用者を増やすための、現実的な手段とみられる。
:::

2014年にJamstackという言葉とともに生まれたNetlifyは、10年かけてデプロイを「考えなくていいもの」にし、2025年からの1年で、値段の単位をクレジットに、エッジ関数の箱をマイクロVMに、コードの置き場所を自前のGitに、作り手を人からエージェントへと作り直した。フレームワークを持たない会社が、フレームワークの代わりにエージェントを入口に据える賭けが、1,000万人の次の数字をどう動かすかを見る年になる。
