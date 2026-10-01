---
service: "Make"
title: "1万クレジット9ドル、超過分は25%増し、紹介料は12カ月35% — 「モジュールが動いた回数」で課金するMake（旧Integromat）の設計"
description: "チェコ・プラハ発の自動化プラットフォームMake（旧Integromat）は、2020年にCelonisが1億ドル超で買収し、2022年にMakeへ改名した。料金はZapier型の「タスク」ではなく、モジュールが動いた回数＝クレジットで決まり、Coreは1万クレジット9ドルから。超過分は25%増しで、AIモジュールはトークン数でクレジットが変わる。公式の料金ページ、ヘルプセンター、開発者ドキュメント、プレスリリース、アフィリエイト規約、GitHubの公開リポジトリ、当サイトの実観測から、Make自前のAIプロバイダーの段階モデルの中身がGPT-5 nanoとGPT-5 miniであること、35%を12カ月払うアフィリエイト、Cloudflareの後ろにあるAWSまでを解剖する。"
lead: "Makeの料金ページには「Coreプラン 月9ドル（1万クレジット）」とある。この1クレジットは、原則としてシナリオの中のモジュールが1回動いた回数だ。フォームの回答が10件届けば、後続の3つのモジュールは10回ずつ動いて、合計31クレジットが消える。AIを使えばトークン数でも減る。足りなくなれば25%増しで買い足す。1万クレジットで9ドル、つまり1クレジット0.09セントの単価は、こうして「何をつないだか」ではなく「何回動いたか」で請求書に変わる。2012年にチェコで生まれ、2020年にCelonisへ1億ドル超で売られ、2022年にIntegromatからMakeへ改名したこの会社の設計を解剖する。"
category: saas
tags: [no-code, automation, ai, mcp, aws, small-business]
publishedAt: "2026-09-30"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://www.make.com/en"
# Affiliate link placeholder: Make runs its own public affiliate program
# (https://www.make.com/en/affiliate; 35% of referred users' subscription payments for
# 12 months, 30-day cookie, US$100 minimum payout via Wise after 3 unique paying users).
# The owner must sign up with a Make account, get the tracking link from the affiliate
# dashboard, and paste it here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<make-affiliate-tracking-link>"
#   program: "Make Affiliate Program"
vendor: "Celonis, Inc."
origin: "CZ"
heroTheme: "make"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "ホスティング基盤"
    name: "Amazon EC2 (Amazon VPC, 2 availability zones) + AWS KMS"
    confidence: confirmed
    evidence: "公式のSecurityページに、インフラはAmazon AWS EC2のプライベートインスタンス（Amazon VPC）に置き、Amazon Enterpriseサポートを受け、冗長化のため2つのアベイラビリティゾーンに展開すると明記。保存データはAES-256のフルディスク暗号化とAWS KMS、通信はTLS 1.2/1.3。SOC 2 Type IIとSOC 3の監査を受け、ISO 27001認証の情報セキュリティプログラムで運用すると書く"
    evidenceUrl: "https://www.make.com/en/security"
  - layer: "公開API"
    name: "REST API v2 per zone (Token header, 60–1,000 req/min by plan)"
    confidence: confirmed
    evidence: "開発者ドキュメントに、リクエストは {zone_url}/api/v2/... に対して Authorization: Token {token} ヘッダーで送り、zone_urlは例えば https://eu1.make.com だと明記。レート制限はCore 60・Pro 120・Teams 240・Enterprise 1,000（毎分）で、超えると429と「Requests limit for organization exceeded, please try again later.」を返す。多くのエンドポイントは有料プラン向けで無料プランからは使えない場合があるとも書く"
    evidenceUrl: "https://developers.make.com/api-documentation/getting-started/rate-limiting"
  - layer: "AIエージェント連携（MCP）"
    name: "Hosted Make MCP server (mcp.make.com, OAuth) + legacy open-source make-mcp-server (TypeScript, MIT)"
    confidence: confirmed
    evidence: "開発者ドキュメントに、Make MCPサーバーはLLMなどのAIシステムからシナリオの実行、シナリオと接続・Webhookの閲覧と変更、チームと組織の管理を行うためのもので、接続先は https://mcp.make.com（OAuth）か https://<MAKE_ZONE>/mcp/u/<MCP_TOKEN>、またはAuthorizationヘッダーにトークンを載せた https://<MAKE_ZONE>/mcp と明記。GitHubのintegromat/make-mcp-serverはTypeScript製・MITライセンスで、MAKE_API_KEY・MAKE_ZONE・MAKE_TEAMを環境変数に取り、オンデマンドのシナリオをツールとして公開する。READMEは、クラウド版が出たので多くの用途ではそちらを勧めると書く"
    evidenceUrl: "https://developers.make.com/mcp-server"
  - layer: "Make自前のAIプロバイダーのモデル"
    name: "OpenAI GPT-5 nano (Small / Medium) + GPT-5 mini (Large)"
    confidence: confirmed
    evidence: "ヘルプセンターのCreditsページ（2026-09-30時点）の表に、Make's AI ProviderのSmallは「GPT-5 nano with minimal reasoning」、Mediumは「GPT-5 nano with low reasoning」、Largeは「GPT-5 mini」で、1クレジットあたりの入力トークンはSmall/Mediumが18,080・Largeが3,616、出力トークンは2,260・452と明記。有料プランでは自分のOpenAIやAnthropicの接続を使い、トークン代をプロバイダーへ直接払うこともできる"
    evidenceUrl: "https://help.make.com/credits"
  - layer: "エッジ・ボット対策"
    name: "Cloudflare (managed challenge on www, proxy on app zones)"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-30）で、www.make.com はcurlにもヘッドレスChromeにも403と cf-mitigated: challenge を返し、ページタイトルは「しばらくお待ちください...」だった。eu1・eu2・us1.make.com と hook.eu1.make.com の応答は server: cloudflare で、解決先IPアドレスのwhois上のネットワーク名は CLOUDFLARENET（hook.eu1.make.com はRIPE登録の CLOUDFLARE-EU）だった"
  - layer: "Webhookの受け口"
    name: "In-house \"Make Gateway\""
    confidence: likely
    evidence: "当サイトの実観測（2026-09-30）で、Webhookを受けるホスト hook.eu1.make.com の応答に x-powered-by: Make Gateway/production が付き、cf-rayの拠点はVIE（ウィーン）だった。GitHubのintegromat組織には「Integromat Gateway Client for Node.js」と説明された gateway リポジトリもあるが、公開情報からは中身の実装は分からない"
  - layer: "バックエンドの言語"
    name: "Node.js / TypeScript"
    confidence: likely
    evidence: "GitHubのintegromat組織（公開38リポジトリ）にあるimt-protoは「Integromat Proto-Classes」と説明されたTypeScriptのリポジトリで、ほかにNode.js向けのisolated-vm（隔離JS実行環境）とnode-imapのフォーク、TypeScript製のMCPサーバー・SDK・CLI・VS Code拡張がある。実行基盤の言語を公式に明言した資料は見つからなかった"
  - layer: "アプリ内の分析・オンボーディング"
    name: "RudderStack + Userflow + Candu + Chameleon + VWO + OneTrust"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-30）で、eu1.make.com が返すContent-Security-Policyヘッダーの接続先に integromat-dataplane.rudderstack.com、js.userflow.com、api.candu.ai、*.chameleon.io、*.visualwebsiteoptimizer.com、cdn.cookielaw.org が列挙され、img-srcには make-hq-production-user-inputs.s3.eu-west-1.amazonaws.com と storage.googleapis.com が含まれていた"
  - layer: "ドキュメント基盤"
    name: "GitBook (developers.make.com) + Archbee (help.make.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-30）で、developers.make.com の各ページは末尾に .md を付けるとGitBook固有の {% stepper %} 記法を含むMarkdownを返し、404ページの文面にGitBookが回答を調整すると書かれていた。help.make.com の .md はフロントマターの画像URLが archbee-image-uploads.s3.amazonaws.com だった"
sources:
  - label: "Make公式: 料金"
    url: "https://www.make.com/en/pricing"
    accessedAt: "2026-10-01"
  - label: "Make公式: アフィリエイトプログラム"
    url: "https://www.make.com/en/affiliate"
    accessedAt: "2026-10-01"
  - label: "Make公式: パートナープログラム"
    url: "https://www.make.com/en/partners"
    accessedAt: "2026-10-01"
  - label: "Make公式: Press（沿革・プレスリリース一覧）"
    url: "https://www.make.com/en/press"
    accessedAt: "2026-10-01"
  - label: "Make公式: Make launches Make AI Agents（2025-04-14）"
    url: "https://www.make.com/en/make-ai-agents-press-release"
    accessedAt: "2026-10-01"
  - label: "Make公式: Make launches Make Grid（2025-06-24）"
    url: "https://www.make.com/en/make-grid-announcement"
    accessedAt: "2026-10-01"
  - label: "Make公式: End of Integromat（2023-02-28）"
    url: "https://www.make.com/en/end-of-integromat"
    accessedAt: "2026-10-01"
  - label: "Make公式: AWS partnership（2022-06-09）"
    url: "https://www.make.com/en/aws-make-partnership"
    accessedAt: "2026-10-01"
  - label: "TechCrunch: Celonis acquires Czech startup Integromat（2020-10-14）"
    url: "https://techcrunch.com/2020/10/14/celonis-acquires-czech-startup-integromat-to-accelerate-move-to-process-automation/"
    accessedAt: "2026-10-01"
  - label: "Make公式: Security"
    url: "https://www.make.com/en/security"
    accessedAt: "2026-10-01"
  - label: "Make公式: Careers"
    url: "https://www.make.com/en/careers"
    accessedAt: "2026-10-01"
  - label: "Make公式: AI Agents"
    url: "https://www.make.com/en/ai-agents"
    accessedAt: "2026-10-01"
  - label: "Make公式: Make Grid"
    url: "https://www.make.com/en/grid"
    accessedAt: "2026-10-01"
  - label: "Make公式ブログ: Introducing Make Grid（2024-11-14）"
    url: "https://www.make.com/en/blog/introducing-make-grid"
    accessedAt: "2026-10-01"
  - label: "Make公式ブログ: Designing Maia by Make（2026-08-21）"
    url: "https://www.make.com/en/blog/designing-maia"
    accessedAt: "2026-10-01"
  - label: "Make公式ブログ: How to build Make automations and AI agents in ChatGPT（2026-09-16）"
    url: "https://www.make.com/en/blog/make-plugin-chatgpt"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Credits"
    url: "https://help.make.com/credits"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Operations"
    url: "https://help.make.com/operations"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Extra credits"
    url: "https://help.make.com/extra-credits"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Adjustments to plans and pricing（2025-11-06）"
    url: "https://help.make.com/adjustments-to-plans-and-pricing"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Updated Make's AI Provider token pricing model（2026-08-25）"
    url: "https://help.make.com/more-value-for-your-credits-updated-makes-ai-provider-token-pricing-model"
    accessedAt: "2026-10-01"
  - label: "Make Help Center: Credit usage for AI agents"
    url: "https://help.make.com/credit-usage-for-ai-agents"
    accessedAt: "2026-10-01"
  - label: "Make Developers: Rate limiting"
    url: "https://developers.make.com/api-documentation/getting-started/rate-limiting"
    accessedAt: "2026-10-01"
  - label: "Make Developers: Making your first API request"
    url: "https://developers.make.com/api-documentation/getting-started/making-your-first-api-request"
    accessedAt: "2026-10-01"
  - label: "Make Developers: Make MCP server"
    url: "https://developers.make.com/mcp-server"
    accessedAt: "2026-10-01"
  - label: "GitHub: integromat/make-mcp-server"
    url: "https://github.com/integromat/make-mcp-server"
    accessedAt: "2026-10-01"
  - label: "GitHub: integromat（組織）"
    url: "https://github.com/integromat"
    accessedAt: "2026-10-01"
---

Makeは、[Zapier](https://zapier.com/)と同じ「アプリをつなぐ自動化」の分野に属する、チェコ・プラハ発の自動化プラットフォームだ。Google Sheetsに行が増えたらSlackに知らせる、フォームの回答ごとに書類を作ってメールする、といった「シナリオ」を、キャンバス上にモジュールを並べて作る。2012年にIntegromatとして生まれ、2020年にドイツのプロセスマイニング企業Celonisが買収し、2022年にMakeへ改名した。料金の単位は「モジュールが動いた回数」で、この単位の選び方に、この会社の設計が詰まっている。

## サービス解説

Makeは、3,000以上のアプリを視覚的につないで自動化とAIエージェントを作るプラットフォームだ。トリガー（新しい行を見張る、Webhookを受ける）から始まり、フィルタや分岐、変換、各アプリへの書き込みをモジュールとして並べる。2025年にはAIエージェントと、外部のAIから触るMCPサーバー（GitHubの旧版は2025年3月公開）が加わり、2026年の公式ブログでは会話でシナリオを作るMaiaと、ChatGPTの中から使うプラグインが紹介された。

:::fact
TechCrunch（2020-10-14）によれば、CelonisはチェコのIntegromatを買収し、CEOのAlexander Rinke氏は金額を「1億ドルを超える3桁の額」と述べた。Integromatは2012年創業で、外部から資金を調達しておらず、およそ1,000万ドル規模の事業、60人のスタッフ、11,000を超える顧客を持っていた。Make公式のPressページによれば、2022年2月22日にIntegromatはMakeへ改名し、2022年6月9日にはAWS Marketplaceに掲載された。同日のプレスリリースは、1,000以上のアプリ、6,000以上のエンドポイント、世界で50万以上の組織を支えると書いている。2023年2月28日の告知によれば、旧Integromatは2023年6月30日にサポートを終え、9月30日に停止し、シナリオはすべて無効化された。CEOは「シナリオは数十万件の単位で移行された」と述べ、期限前に移行した利用者には従来の価格と操作数上限を保つLegacyプランが用意された。
:::

:::fact
公式の料金ページ（2026-09-30時点・米ドル・月払い表示）によれば、Freeは月1,000クレジット・有効なシナリオ2本・実行間隔は最短15分・データ転送512MB・ファイル5MB・実行時間5分まで。Coreは1万クレジットで月9ドル、有効なシナリオは無制限、間隔は1分まで、データ転送5GB、ファイル100MB、実行時間40分。Proは同じ1万クレジットで月16ドル（ファイル250MB）、Teamsは月29ドル（ファイル500MB）、Enterpriseは個別見積もり（ファイル1,000MB）。年払いは「15%以上お得」とあり、クレジットは期間の終わりに失効する。同じページは、シナリオが行う各アクションが一定のクレジットを消費し、ほとんどのアクションは1クレジットだが、Make's AI Providerを使う一部の高度な機能はそれ以上使うと書く。
:::

:::pull
1万クレジット9ドルは、1クレジット0.09セントだ。買い足しは25%増しの0.1125セントになる。AIを通すと、同じ1回でもトークン数でクレジットが変わる。
:::

::scorecard

## UX分析

Makeの体験は、「何が起きたかを全部見せる」方向に寄せて作られている。編集画面はキャンバスで、分岐や繰り返しを含むシナリオを図のまま描く。代わりに、料金も「見える」ものにした。

- **1回の実行で何クレジット減るかが画面に出る**。ヘルプセンターのOperationsページによれば、シナリオを実行すると各モジュールの上の白い吹き出しに操作数が、切り替えるとクレジット数が表示される。操作は「データを処理または確認するためにモジュールが1回動くこと」で、Gmailで5通送れば5操作、トリガーは返す件数に関係なく1回の確認で1操作だ。トリガーが10件返せば後続の各モジュールは10回動くので、例として挙げられたフォーム回答のシナリオは1回の実行で31操作（1+10×3）になる。
- **止めても途中では止まらない**。同じページは、実行中にStopを押しても、動いているモジュールはすべてのバンドルを処理し終えるまで止まらないと書く。誤って大量のデータを流したときの損失は、その1モジュール分は確定する。
- **超過は自動で買い足される**。ヘルプセンターのExtra creditsページによれば、有料プランでは1,000単位で手動購入できるほか、自動購入を有効にすると上限を超えた時点でMakeが追加分を買う。2025年11月6日の変更で、自動購入も手動購入も25%増しに統一された（それまでは自動が30%増し、手動は割増なし）。Coreの年払いでは通常のクレジットが毎月リセットされ、買い足したクレジットも毎月の更新時に失効する。
- **AIは「トークン」という第二の単位を持ち込む**。Creditsページによれば、非AIのモジュールは1操作1クレジットで固定だが、Make's AI Providerを使うAIエージェントやAI Toolkitはトークン数に応じてクレジットが変わり、ファイルサイズ・ページ数・処理時間で変わる機能もある。2026年8月25日の変更で入力と出力のトークン単価が分かれ、Mediumで入力2,000・出力100トークンの抽出処理はおよそ0.6クレジットから0.16クレジットへ減ったと説明されている。長い文章を短い指示で生成させる用途は逆に増えることがあるとも書く。
- **会話から作る入口が増えた**。2026年8月21日の公式ブログによれば、Maia by Makeはキャンバス上で利用者の隣に立ち、言葉をその場でワークフローに変えながら、何をしているかを吹き出しで説明する。2026年9月16日の公式ブログによれば、ChatGPT用のMakeプラグインはFreeを含む全プランで使え、ブラウザ版・ChatGPT Workのデスクトップアプリ・Codexの3つで動く。ただし同じ記事には、OpenAIが自動化ツールの対応を更新するあいだプラグインを一時的に無効にしているという注記があり（2026-10-01確認）、その間はMCP経由でChatGPTやCodexから使う手順が案内されている。

## 技術構成

::techstack

:::fact
公式のSecurityページによれば、Makeのインフラは Amazon AWS EC2 のプライベートインスタンス（Amazon VPC）に置かれ、Amazon Enterpriseサポートを受け、冗長化のため2つのアベイラビリティゾーンに展開されている。プライベートネットワークへの接続はVPN経由のみで、公開インターネットからの直接アクセスはない。保存データはAES-256のフルディスク暗号化とAWS KMSで、通信はTLS 1.2および1.3で守られる。SOC 2 Type IIとSOC 3の監査を受け、ISO 27001認証の情報セキュリティプログラムで運用し、第三者のペネトレーションテスト、OWASPに沿ったコーディング、SASTを実施する。ログの保持は既定で30日、Enterpriseは延長できる。Enterpriseプランには99.5%のクラウドサービス稼働率が付く。
:::

:::fact
開発者ドキュメントによれば、Make APIは {zone_url}/api/v2/ の下にあり、zone_urlは組織が置かれたゾーン（例: https://eu1.make.com）で、認証はAuthorizationヘッダーに「Token」と認証トークンを付けて行う。レート制限は組織のプランごとに毎分Core 60・Pro 120・Teams 240・Enterprise 1,000リクエストで、超えると429と「Requests limit for organization exceeded, please try again later.」を返す。多くのエンドポイントは有料プラン向けで、無料プランからは使えない場合がある。MCPサーバーは https://mcp.make.com にOAuthで、または https://<MAKE_ZONE>/mcp/u/<MCP_TOKEN> にトークンで接続し、シナリオの実行、シナリオ・接続・Webhookの閲覧と変更、チームと組織の管理ができる。GitHubのintegromat/make-mcp-serverはTypeScript製・MITライセンスの旧版で、MAKE_API_KEY・MAKE_ZONE（例: eu2.make.com）・MAKE_TEAMを環境変数に取り、オンデマンドで動くシナリオを、その入力パラメータの説明付きでAIアシスタントのツールとして公開する。READMEは、クラウド版が出たので多くの用途ではそちらを勧めると書く。
:::

:::fact
ヘルプセンターのCreditsページ（2026-09-30時点）によれば、Make's AI Providerは全プランで使え、利用者はOpenAIやAnthropicのアカウントを持たずに済む代わりに、トークン数と操作数に応じたクレジットをMakeに払う。段階モデルのSmallは「GPT-5 nano with minimal reasoning」、Mediumは「GPT-5 nano with low reasoning」、Largeは「GPT-5 mini」で、1クレジットあたりの入力トークンはSmall・Mediumが18,080、Largeが3,616、出力トークンは2,260と452だ。段階モデルのほかにOpenAIやAnthropicの個別モデルも選べ、表ではGPT-5.5やClaude Opus 5が入力180・出力30〜36トークンで1クレジットと、Smallの100分の1ほどの量で1クレジットになる。有料プランでは自分のOpenAIやAnthropic Claudeなどの接続を使え、その場合Makeには操作数分のクレジットを、トークン代はプロバイダーへ直接払う。2025年11月6日の変更前は、自分の接続を使えるのはPro以上だけだった。Credit usage for AI agentsページによれば、AIエージェントの実行は「1操作1クレジット＋トークン分」、知識ファイル（PDF/DOCX）の取り込みは「1操作1クレジット＋1ページ10トークン＋説明生成と埋め込みのトークン分」で、埋め込みはファイルをRAG用のベクトルデータベースに入れるための処理だと説明されている。
:::

:::guess
自社サイトはCloudflareの後ろにあり、curlにもヘッドレスChromeにもマネージドチャレンジを返す。アプリのゾーン（eu1・eu2・us1）とWebhookの受け口もCloudflare経由で、受け口は「Make Gateway」と名乗る自前の層とみられる。実行基盤はAWS（バケット名の eu-west-1 はアイルランド）で、GitHub組織の公開リポジトリがTypeScriptとNode.js向けのフォーク（isolated-vm、node-imap）に偏っていることから、バックエンドはNode.jsで書かれ、利用者のカスタム関数のような信頼できないコードを隔離して動かす仕組みを持つと推測される。段階モデルのSmall・Medium・Largeがすべて安価なOpenAIのモデル（GPT-5 nano・mini）で構成されているのは、既定の段階を「アカウント不要で安く始められる入口」として置く設計だとみられる。同じプロバイダーで上位モデルを選べば1クレジットで処理できるトークンは大きく減るので、性能を求める利用者はクレジットを多く使うか、自分のAPIキーを持ち込んでトークン代をプロバイダーへ直接払うかを選ぶことになる。
:::

## ビジネスモデル

収益の柱は、クレジットの束を売るサブスクリプションだ。プランが上がるほど1クレジットの単価が下がり、足りなければ25%増しで買い足す。新規獲得は、35%を12カ月払うアフィリエイトと、コンサルタント向けのパートナー制度に任せる。

:::fact
ヘルプセンターの「Adjustments to plans and pricing」（2025-11-06）によれば、Coreプランは月30万クレジットまでとなり、それを超える段階はProへ移された（月払いでCoreの30万超を契約していた組織は、同じ料金とクレジット数のままProへ自動昇格し、例として月338.13ドルで50万クレジットの利用者は、Proでも月338.13ドルのまま）。Proは月800万クレジットまで。Extra creditsページの例では、月9ドルで1万クレジットのプランは1クレジット0.0009ドルで、1,000クレジットの買い足しは1.125ドル（×1.25）、1万クレジットなら11.25ドルになる。買い足したクレジットは、月払いなら当月の請求期間、年払いなら請求年の終わりまで有効で、データ転送の枠も増えるが、それ以外の上限は変わらない。
:::

:::fact
公式のアフィリエイトページによれば、報酬は「紹介したすべてのユーザーに対して12カ月間35%」で、対象はその利用者のサブスクリプションの支払いで、利用者が追加で買った操作（クレジット）からは報酬が出ない。12カ月はアフィリエイトリンクから登録した時点から数える。リンクをクリックした訪問者がMakeに登録するまでの猶予は30日。Makeのアカウントがあれば誰でもアフィリエイトになれ、統合コンサルタント・代理店・思想的リーダー・フリーランサーに向くと書く。支払いはWise経由で、最低支払額は100ドル、支払いを申請する前に3人の異なる有料ユーザーを紹介している必要があり、申請から2〜3週間で処理される（現在は遅延があるとも書かれている）。有料広告では商標「Make」をタイトルにも本文にも使ってはならず、オンラインキャンペーンでの商標利用にはCelonisの事前の書面同意が要る。パートナーページは、ほかにソリューションパートナー（コンサルティング・導入支援）、テクノロジーパートナー（コネクタを作るISV）、大学向けのAcademic Alliance、VC・アクセラレーター向けのStartupパートナーを挙げている。
:::

:::fact
Careersページ（2026-09-30時点）によれば、Makeには50を超える国籍の350人以上の「Maker」が働き、求人はプラハとマドリードに置かれ、フッターは「© 2026 Celonis, Inc.」だ。2025年4月14日のプレスリリース（ニューヨーク発）は「20万以上の企業」がMakeを使い、2,000以上のアプリと3万以上のアクションがあると書き、CEOのFabian Veit氏と製品担当VPのAnton Danilov氏の談話を載せた。2025年6月24日のMake Gridオープンベータ公開のプレスリリースは「25万以上の組織」と書き、共同創業者でCTOのPatrik Simek氏が、自動化のネットワークをブラックボックスから共有できる地図に変えると述べた。Make Gridは2024年11月14日にクローズドベータとして発表された。公式のGridページは、オープンベータ中は無料で、正式公開後は一部の機能や情報が特定のプランに限られるか追加料金になる場合があると案内している。
:::

:::guess
2022年6月のプレスリリースは「50万以上の組織」、2025年4月は「20万以上の企業」、同年6月は「25万以上の組織」と、数え方が揃っていない。登録した組織と実際に使っている組織、あるいは旧Integromatを含む数と含まない数のように、定義が違うとみられる。一つの読み方として、2023年9月の旧Integromat停止で、移行しなかった組織が数から落ちた可能性がある。裏取りのできる決算はCelonisが非公開企業のため存在せず、Make単体の売上も公表されていない。
:::

:::guess
クレジット課金は、Zapierの「タスク」課金と似ているが、トリガーが返した件数が後続のモジュールすべてに掛け算で効く点で、使い方の設計が請求額に直結する。上手に組めば安く、雑に組めば高い。この構造は、自分で最適化できる人には得で、できない人にはコンサルタントの需要を生む。ソリューションパートナー制度と、フリーランサーやコンサルタントに向くと明記したアフィリエイトは、その需要を外の人に取らせる仕組みだとみられる。12カ月35%という料率は、初回だけ払う型（[Hostinger](/ja/articles/hostinger)の最大40%）と違い、紹介した利用者が使い続けるほど紹介者にも入る。継続率に自信があるか、継続を紹介者にも手伝わせたいか、あるいはその両方と推測される。AIエージェントとMaiaは、モジュールの設計を人から機械へ移す。作る手間が減れば動くシナリオが増え、動くシナリオが増えればクレジットが減る。AIが自動化の「作り手」になるほど、クレジットの売れ行きが伸びる構造だ。
:::

「1万クレジット9ドル」の裏には、モジュールが動いた回数という単位、トリガーの件数が掛け算で効く仕組み、25%増しの買い足し、トークンで変わるAIの単価、12カ月35%の紹介料が並んでいる。どれも料金ページとヘルプセンターに書いてある。Makeは、分岐も繰り返しも描ける自由な図を渡す代わりに、その図の一つ一つの動きに値段を付けた。自由と請求は同じ画面に出ている。
