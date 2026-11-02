---
service: "Paddle"
title: "あなたのソフトウェアを買い取って売り直す決済会社 — Paddleは「再販業者」という契約1本で、世界の売上税・VAT・チャージバック・購入者サポートを5%+50セントに束ねている"
description: "Paddleは、SaaSやアプリ、ゲームなどデジタル製品の会社に代わって「売り手」になるマーチャント・オブ・レコード（MoR）だ。2012年にロンドンで創業し、2022年にKKR主導の2億ドル調達で評価額14億ドル、同年ProfitWellを2億ドル超で買収した。利用規約は、Paddleを開発者の製品の非独占的な再販業者と定め、購入者の支払額から売上税と5%+50セントを差し引いた残りを毎月15日までに払うと書く。英国・アイルランド・米国の3法人の使い分け、売上税の控除と納付、価格を決める権利、売れない商品の一覧、複数の決済代行と自社名義の加盟店口座を切り替えるルーティング、Goのマイクロサービス、リモートMCPサーバーまでを、公式の規約・ヘルプ・開発者ドキュメント・エンジニアリングブログと実観測から解剖する。"
lead: "Paddleで買い物をした人のカード明細に載るのは、ソフトウェアを作った会社の名前ではなくPaddleだ。決済を代行しているのではなく、Paddleが開発者から製品を仕入れ、自分の名前で購入者に売っているからだ。この「再販業者」という法的な立場1つから、税込みの代金から税を差し引いて納める仕組みも、5%+50セントという1行だけの料金表も、月1回の入金も、コンサルティングや物販を断る利用ポリシーも説明できる。Stripeが同じ領域にManaged Paymentsを出した今、売り手を引き受ける会社がどう作られ、どう稼いでいるのかを解剖する。"
category: saas
tags: [payments, fintech, merchant-of-record, saas, sales-tax, developer-experience]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://www.paddle.com/"
expires:
  - date: "2027-03-31"
    claim: "ネイティブの従量課金（Usage-Based Billing）が2027年初めにプライベートプレビューに入るという発表（2026-10-20）"
# Affiliate link placeholder: Paddle lists "Referrals" as a way to partner on
# https://www.paddle.com/partners, but no public commission terms were found on 2026-11-02.
# The owner must join and confirm the program terms before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<paddle-referral-link>"
#   program: "Paddle Referrals"
vendor: "Paddle.com Market Limited"
origin: "GB"
heroTheme: "paddle"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "課金API・チェックアウト"
    name: "Paddle Billing API (REST/JSON, api.paddle.com) + Paddle.js v2"
    confidence: confirmed
    evidence: "開発者ドキュメントの索引（llms.txt、2026-11-02閲覧）は、2023-08-08以降の新規登録はすべてPaddle Billingで、旧製品Paddle Classicの新規登録はできないと書く。Billingは api.paddle.com のJSON API、Paddle-SignatureヘッダーとSHA256による署名検証、npmで入れられるPaddle.js v2を使う、Classicとは別の実装だと表で示している"
    evidenceUrl: "https://developer.paddle.com/llms.txt"
  - layer: "サーバーSDK"
    name: "Official SDKs for Node.js, Python, Go and PHP"
    confidence: confirmed
    evidence: "開発者ドキュメントの索引は、公式のサーバーサイドSDKをNode.js・Python・Go・PHPの4つとし、デスクトップ向けSDKはないと明記している"
    evidenceUrl: "https://developer.paddle.com/llms.txt"
  - layer: "バックエンド"
    name: "Go microservices + PostgreSQL / MySQL + Amazon SQS + OpenTelemetry"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-01-28）は、Paddleが複雑なモノリスとして作られ、マイクロサービスへ移る途中でRESTとgRPC、PostgreSQLとMySQLが混在したこと、SQSのメッセージをHTTPへ渡すサイドカーやsqlxを使うPostgres接続管理などのGo製ツールキットを作り、OpenTelemetryを約3か月で全サービスに入れたことを書いている"
    evidenceUrl: "https://paddle.engineering/blog/go-microservices-at-paddle-consistency-catalyst"
  - layer: "決済ルーティング"
    name: "Multi-PSP routing rules engine over Paddle-owned merchant accounts (local acquiring)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2024-07-18、2024-08-12）は、Paddleが複数の独立した決済代行事業者（PSP）とつながり、世界の複数の地域にPaddle名義の加盟店口座を持つこと、支払いのたびにルールエンジンがPSPと加盟店口座の組み合わせを選び、フォールバックと重み付けの戦略を使うことを書いている"
    evidenceUrl: "https://paddle.engineering/blog/payment-routing-part-2-developing-paddles-rules-engine"
  - layer: "Webhook配信"
    name: "Event delivery with priority queues, exponential backoff and Redis locks"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-05-02）は、失敗した配信を低優先度のキューに回して他の宛先への影響を防ぐこと、Redisのロックで冪等性を取ること、2秒の配信SLOで「スリーナイン」を保つことを書いている"
    evidenceUrl: "https://paddle.engineering/blog/hookdeck-podcast-event-delivery-scale"
  - layer: "AIエージェント連携"
    name: "Remote Paddle MCP server (codemode: search / execute / report_missing_tool)"
    confidence: confirmed
    evidence: "開発者向けの変更履歴（2026-05-15）は、Paddle MCPサーバーをホスト型のリモートサービスにし、サンドボックス用と本番用の2つのエンドポイントを置き、API操作を個別のツールにせず3つのツールで公開する「codemode」方式にしたと書いている"
    evidenceUrl: "https://developer.paddle.com/changelog/2026/remote-paddle-mcp-server"
  - layer: "エッジ"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの観測（2026-11-02）で、api.paddle.com、vendors.paddle.com、paddle.net、mcp.paddle.com、cdn.paddle.com、buy.paddle.com の応答はいずれもserverヘッダーがcloudflareで、cf-rayは成田（NRT）のPoPを示していた"
  - layer: "Paddle.jsの配信"
    name: "Amazon S3 + Amazon CloudFront (behind Cloudflare)"
    confidence: likely
    evidence: "当サイトの観測（2026-11-02）で、cdn.paddle.com/paddle/v2/paddle.js と buy.paddle.com の応答に x-amz-version-id・x-amz-replication-status と、x-cache: Hit from cloudfront、成田のCloudFront PoPを示す x-amz-cf-pop が含まれ、同時にCloudflareのcf-rayも付いていた"
  - layer: "マーケティングサイト・開発者ドキュメント"
    name: "Next.js on Netlify + Prismic"
    confidence: likely
    evidence: "当サイトの観測（2026-11-02）で、www.paddle.com は server: Netlify と x-powered-by: Next.js を返し、HTMLには _next/static のアセットと images.prismic.io の画像、PrismicPreviewClient が含まれていた。developer.paddle.com も server: Netlify を返した"
sources:
  - label: "Paddle: Pricing（5% + 50¢、FAQ）"
    url: "https://www.paddle.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Paddle: Master Services Agreement（利用規約、最終更新 2026-10-06）"
    url: "https://www.paddle.com/legal/terms"
    accessedAt: "2026-11-02"
  - label: "Paddle: About us（経営陣と実績の数字）"
    url: "https://www.paddle.com/about"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: The legal relationship between Paddle and you"
    url: "https://www.paddle.com/help/start/intro-to-paddle/the-legal-relationship-between-paddle-and-you"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: How Paddle is able to take on your VAT and tax responsibilities"
    url: "https://www.paddle.com/help/start/intro-to-paddle/how-paddle-is-able-to-take-on-your-vat-and-tax-responsibilities"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Acceptable Use Policy（売れない商品の一覧）"
    url: "https://www.paddle.com/support/aup"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Which countries are supported by Paddle?（売り手として使えない国）"
    url: "https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: When and how do I get paid?（月1回の入金）"
    url: "https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Is there a fee taken for payouts?"
    url: "https://www.paddle.com/help/manage/get-paid/is-there-a-fee-taken-for-payouts"
    accessedAt: "2026-11-02"
  - label: "Paddle: Why has Paddle charged me?（購入者向けの説明）"
    url: "https://www.paddle.com/about/why-has-paddle-charged-me"
    accessedAt: "2026-11-02"
  - label: "Paddle: Sales tax compliance software（税と準拠）"
    url: "https://www.paddle.com/billing/tax-and-compliance"
    accessedAt: "2026-11-02"
  - label: "Paddle: Paddle vs Stripe（Paddle側の比較ページ）"
    url: "https://www.paddle.com/compare/stripe"
    accessedAt: "2026-11-02"
  - label: "Paddle: Partnerships"
    url: "https://www.paddle.com/partners"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: What is a Merchant of Record?（2024-08-01）"
    url: "https://www.paddle.com/blog/what-is-merchant-of-record"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: Paddle turns 10（2022-08-08）"
    url: "https://www.paddle.com/blog/paddle-turns-10-learnings-from-the-last-decade"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: We've raised $200m（2022-05-10）"
    url: "https://www.paddle.com/blog/weve-raised-200m-to-supercharge-saas-companies-global-growth"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: We've acquired ProfitWell（2022-05-25）"
    url: "https://www.paddle.com/blog/paddle-acquires-profitwell"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: CEO Transition（2023-04-20）"
    url: "https://www.paddle.com/blog/the-next-phase-of-paddle"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: Paddle raises $25M（2025-07-17）"
    url: "https://www.paddle.com/blog/paddle-raises-25m"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: Paddle launches AI Toolkit（2026-10-20）"
    url: "https://www.paddle.com/blog/paddle-launches-ai-toolkit-bringing-global-selling-into-ai-workflows"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: llms.txt（Paddle Billing と Paddle Classic の違い、SDK）"
    url: "https://developer.paddle.com/llms.txt"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Supported countries"
    url: "https://developer.paddle.com/concepts/sell/supported-countries-locales"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Supported currencies"
    url: "https://developer.paddle.com/concepts/sell/supported-currencies"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Payment methods"
    url: "https://developer.paddle.com/concepts/payment-methods"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: API versioning"
    url: "https://developer.paddle.com/api-reference/about/versioning"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Changelog: The Paddle MCP server is now remote（2026-05-15）"
    url: "https://developer.paddle.com/changelog/2026/remote-paddle-mcp-server"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Changelog: Migrate Paddle Classic subscriptions to Paddle Billing（2025-04-15）"
    url: "https://developer.paddle.com/changelog/2025/classic-to-billing-migrations"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: How we rebuilt Paddle for developers（2024-11-15）"
    url: "https://paddle.engineering/blog/how-we-rebuilt-paddle-for-developers"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Go microservices at Paddle（2026-01-28）"
    url: "https://paddle.engineering/blog/go-microservices-at-paddle-consistency-catalyst"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Payment routing part #1（2024-07-18）"
    url: "https://paddle.engineering/blog/payment-routing-part-1-unifying-the-payments-lifecycle"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Payment routing part #2（2024-08-12）"
    url: "https://paddle.engineering/blog/payment-routing-part-2-developing-paddles-rules-engine"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: Behind webhooks at Paddle（2025-05-02）"
    url: "https://paddle.engineering/blog/hookdeck-podcast-event-delivery-scale"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: How we migrated over a million subscriptions（2025-12-16）"
    url: "https://paddle.engineering/blog/self-serve-migrations"
    accessedAt: "2026-11-02"
  - label: "Paddle.engineering: トップページ（Webhookペイロードの見本）"
    url: "https://paddle.engineering/"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing（英国、Managed Payments 3.5%）"
    url: "https://stripe.com/gb/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments の利用資格"
    url: "https://docs.stripe.com/payments/managed-payments/eligibility"
    accessedAt: "2026-11-02"
  - label: "Lemon Squeezy Blog: Stripe acquires Lemon Squeezy（2024-07-26）"
    url: "https://www.lemonsqueezy.com/blog/stripe-acquires-lemon-squeezy"
    accessedAt: "2026-11-02"
---

決済サービスを選ぶとき、ふつうは「手数料はいくらか」「どのカードが使えるか」を比べる。Paddleを理解するには、その前に「誰が売っているのか」を問う必要がある。Paddleの利用規約は、開発者がPaddleを自社製品の再販業者に任命すると書いている。購入者はPaddleから買い、Paddleは開発者から仕入れる。1回の購入の中に2つの取引があり、税も、返金も、チャージバックも、購入者からの問い合わせも、まず売り手であるPaddleが引き受ける。料金表が5%+50セントの1行しかないのも、この立場の帰結だ。当サイトはPaddleを契約して使った体験ではなく、公開されている規約・ヘルプ・ドキュメント・ブログを2026年11月2日に読み、書かれていることを並べている。

## サービス解説

Paddleは、SaaS、アプリ、ゲーム、ダウンロード型ソフトウェアなどのデジタル製品を売る会社のために、チェックアウト、サブスクリプション課金、請求書、売上税とVATの処理、不正対策、購入者サポートを1つの契約で引き受ける。Paddle自身は自社を「完全なマーチャント・オブ・レコード（Merchant of Record、MoR）」と呼ぶ。MoRとは、購入者に対して法的な売り手となり、支払いに伴う責任を負う事業者のことだ。

:::fact
Paddleのブログ（2022-08-08）で、創業者のChristian Owens氏は、2012年8月にHarrison Rose氏と2人でPaddleを創業したと書いている。エンジニアリングブログ（2024-11-15）によれば、Paddleは最初、オンラインで世界に売ることの難しさ、とくにmacOS向けに売ることの難しさを解くために始まり、Mac向けソフトウェアのライセンス管理の定番になったあと、SaaSのサブスクリプション課金に広がった。2022年5月10日のブログは、KKR主導で2億ドルのシリーズDを評価額14億ドルで調達し、累計調達額が2億9,300万ドルになったと発表している。同年5月25日には、サブスクリプション分析のProfitWellを現金と株式で2億ドル超の評価で買収したと発表した。2023年4月20日、Owens氏はCEOを退いて執行会長になり、COOのJimmy Fitzgerald氏がCEOに就いた。このときOwens氏は、Paddleが売上高1億ドルに近づいていると書いている。2025年7月17日の発表では、CIBC Innovation Bankingから2,500万ドルを調達し、前年比40%成長、従業員は300名超、顧客は6,000社超とされた。2026年10月20日の発表では、顧客は1万社超になっている。
:::

:::fact
Paddleの利用規約（Master Services Agreement、最終更新2026年10月6日、2026-11-02閲覧）は、売り手（Supplier）がPaddleを「全地域における自社製品の非独占的な再販業者」に任命すると定める。契約の相手となるPaddleの法人は、購入者が米国で取引する場合は米国のPaddle.com Inc.、売り手が英国またはマン島の事業者で購入者が米国外の場合はアイルランドのPaddle Payments Limited、それ以外はイングランドのPaddle.com Market Limitedだ。準拠法はイングランド法で、管轄はイングランドの裁判所とされる。規約第4.1条は、Paddleが再販業者であるからこそ売上税の徴収・申告・納付を扱えると書き、売上代金から売上税を差し引いて納付できると定める。第3.4条は、MoRとしてPaddleが製品の販売価格を設定する権利を留保すると書いている。ヘルプセンターも、Paddleは「決済代行業者」ではなく認定再販業者で、注文処理と決済、VATと売上税の徴収・申告・納付、請求書・領収書・ライセンス紛失などの注文サポート、ダウンロードやライセンスキー、Webhookによる納品を通常引き受けると説明している。
:::

:::fact
公式の料金ページ（2026-11-02閲覧）によれば、標準の料金はチェックアウト取引1件につき「5% + 50¢」で、月額料金、移行費用、隠れた追加料金はないとされる。含まれるものとして、チェックアウト、サブスクリプション、複数通貨の決済、売上税とVATの準拠、不正対策、レポート、購入者からの支払い・解約の問い合わせ対応、移行サービスが挙がっている。10ドル未満の製品を売る場合は個別の料金を相談でき、取引量の多い事業者向けにはカスタム料金がある。規約第3.2条は、Paddleが売り手に払う額を「推奨販売価格（SRP）から売上税、Paddle Discount、その他の料金を引いたもの」とし、Paddle Discountをチェックアウトで「SRPの5%に0.50ドルを加えた額」、銀行振込で払われるPaddle Invoicingで「SRPの3.5%」と定める。SRPは「購入者が製品に支払う価格」と定義されている。チェックアウトを離脱した購入者を呼び戻すCheckout Recoveryは、回収できたチェックアウト1件につき10%だ。返金やチャージバックが起きた場合、売り手はその全額と処理費用に加え、チャージバックまたはその予告1件につき取引通貨に応じて最大20ポンド・ドル・ユーロ（豪ドルとカナダドルでは40）を負担する。
:::

:::pull
Paddleが売っているのは決済の処理ではなく、「売り手になること」だ。5%+50セントは、税の申告と、返金の窓口と、チャージバックの矢面に立つ代金でもある。
:::

::scorecard

## UX分析

PaddleのUXは、開発者の画面だけでなく、購入者の目に映るものまで含めて設計されている。売り手がPaddleである以上、購入者がカード明細を見て問い合わせる先もPaddleになるからだ。

- **料金表を1行にする**。料金ページの標準プランに並ぶ数字は「5% + 50¢」だけで、カードブランド別、国内・海外別、決済手段別の行がない。FAQは、決済手段の追加、サブスクリプションの移行、支払いに関する購入者サポートに追加費用はかからないと書く。売り手が比べるべき相手は、決済手数料ではなく、税務と請求の仕組みを自前で組んだときの総費用だ、という見せ方になっている。
- **購入者の疑問に先回りする**。サイトの上部には「Why has Paddle charged me?」という購入者向けの導線が常にある。そのページは、カード明細にPaddleの名前があるのは、Paddleが提携するソフトウェア会社の製品を買ったからだと説明し、paddle.net で取引を調べ、解約や返金を申し込むよう案内している。購入者が「知らない会社から請求された」と感じる場面を、MoRの宿命として正面から引き受けている。
- **チェックアウトの入力を減らす**。開発者ドキュメントの対応国のページは、Paddle Checkoutは完全な住所を求めず、国と、一部の国では郵便番号や地域だけを尋ねると書く。郵便番号などは、税額計算、不正対策、銀行の規制のために必要な国でだけ聞くという。決済手段は購入者の国、通貨、端末から自動で選ばれ、iDEALはオランダの購入者がユーロで払うときだけ、Apple Payは対応する端末やブラウザのときだけ表示される。
- **開発者には「エージェントに読ませる」入口まで用意する**。開発者ドキュメントは、どのページにも末尾に .md を付けたマークダウン版を置き、AIエージェント向けの索引 llms.txt を公開している。2026年5月15日にはMCPサーバーをホスト型のリモートサービスに切り替え、2026年10月20日にはClaude Code・Codex・Cursor・Gemini CLIから課金を設定・テストできる「AI Toolkit」を発表した。

:::fact
公式サイトの「About us」（2026-11-02閲覧）は、処理した取引が60億ドル超、Paddleを使うデジタル事業者が1万社超、平均の支払い承認率94%、前年に世界で納付した売上税1億1,200万ドルという数字を掲げている。同じサイトの「Paddle vs Stripe」のページは、処理した取引1億8,000万件、「前年に納付した売上税60億ドル」、270超の税管轄での準拠をうたう。税と準拠のページは「100を超える管轄」で売上税を登録・徴収・納付すると書き、開発者ドキュメントは200を超える国と地域で販売できるとし、2026年10月20日の発表は顧客が売る市場を「300を超える」と表現している。パートナーシップのページには、売り手6,000超、対応する国と地域245、決済処理額10億ドル超という数字が載っている。
:::

:::guess
ページごとに数字が違うのは、数えている単位が違うためとみられる。「国と地域」「税管轄」「市場」は同じものではなく、米国の州のように1つの国に複数の税管轄がある場合、管轄の数は国の数より大きくなる。一方、比較ページの「前年に納付した売上税60億ドル」は、About usの「処理した取引60億ドル超」「前年に納付した売上税1億1,200万ドル」と並べると、取引額の数字が税額の欄に入った可能性があると当サイトは推測する。パートナーシップのページの6,000社・10億ドルは、2025年7月の発表の6,000社超に近く、更新されずに残った古い数字と考えられる。読み手としては、日付のある発表と規約の数字を優先し、マーケティングページの数字は単位と時点を確かめてから使うのが安全だ。
:::

:::guess
購入者向けの導線をサイトの最上部に置いているのは、MoRという仕組みがそのまま問い合わせの量になるためとみられる。Paddleは数千の会社の製品を自分の名前で売るので、購入者がカード明細で見るのは聞き覚えのない「Paddle」だ。購入者向けのページに「詐欺ではないか」という質問への答えが載っているのは、その違和感が実際に起きていることを示していると考えられる。開発者側から見ると、これは解約や返金の一次窓口をPaddleに任せられるという利点で、料金ページが「購入者からの支払い・解約の問い合わせ対応」を含むものとして挙げているのも、この窓口のことだと推測される。
:::

## 技術構成

::techstack

:::fact
開発者ドキュメントの索引（2026-11-02閲覧）によれば、現行の製品はPaddle Billingで、2023年8月8日以降に登録した人はすべてBillingになり、旧製品Paddle Classicの新規登録はできない。両者は別の製品で、BillingのAPIは api.paddle.com のJSON、Classicは vendors.paddle.com/api のフォーム形式だ。Billingでは、複数商品のサブスクリプション、国別の価格設定、自動の通貨換算、顧客ポータルが使え、ライセンスキーやダウンロードの納品はClassicのようにPaddleが行うのではなく、取引のWebhookを使って自分で組む。APIの版は Paddle-Version ヘッダーで指定し、現行はバージョン1。破壊的変更のときだけ新しい版を出し、既存の連携の版を自動で変えることはなく、現時点で古い版を廃止する予定はないと書かれている。
:::

:::fact
エンジニアリングブログ（2024-11-15）は、2022年に技術と製品の負債に向き合い、コア製品の大半を作り直してPaddle Billingを出したと書く。当時のAPIは水準に届かず、開発者ツールはなく、ドキュメントは十分に明快ではなかったと率直に振り返り、API仕様を先に決めて実装する「APIファースト」を標準にし、API Working Groupで変更を議論していると説明している。2025年12月16日の記事によれば、過去2年でClassicからBillingへ130万件超のサブスクリプションを移し、当初は顧客と毎日通話しながら2〜3週間かかった移行を、顧客が自分で行えるダッシュボードの機能に変えた。Billingの公開後に出したBilling専用の更新は200件近いという。
:::

:::fact
2026年1月28日のエンジニアリングブログによれば、Paddleは複雑なモノリスとして作られ、それが全チームのボトルネックになったためにマイクロサービスへ移り始めた。その後18か月で、RESTとgRPC、PostgreSQLとMySQLが混在し、ECS、Fargate、Lambda、Elastic Beanstalk、Herokuといった実行基盤が乱立したという。そこでGoのサービス用に、HTTPハンドラー、SQSのメッセージをHTTPエンドポイントへ届けるサイドカー、設定の読み込み、sqlxを使うPostgresの接続とトランザクション管理、組み込みPostgresでのテストなどのツールキットを作り、OpenTelemetryを数週間で入れて約3か月で全サービスに行き渡らせた。エンジニアは約90名で、そのうちプラットフォームエンジニアリングは2〜4名だと書かれている。
:::

:::fact
決済ルーティングを扱う2本のエンジニアリングブログ（2024-07-18、2024-08-12）によれば、PaddleはMoRとして複数の独立した決済代行事業者（PSP）とつながり、世界の複数の地域にPaddle名義の加盟店口座を持っている。購入者に近い地域の加盟店口座で決済を受ける「ローカル・アクワイアリング」により、取引が国内扱いになりやすく、承認率が上がり、カードネットワークの手数料も下がるという。同じ地域で複数のPSPとつないでいるのは、PSPによって使える決済手段が違うこと、同じ地域でも承認率に大きな差があること、障害や規制上の問題、倒産に備える冗長性のためだ。支払いのたびにルールエンジンがPSPと加盟店口座の組み合わせ（宛先）を選び、失敗したときに別の宛先で再試行するフォールバック戦略と、宛先ごとの成績を比べる重み付け戦略を使う。結果は、使った決済手段、PSP、加盟店口座、Paddleの法人、適用したルールの版とともに記録される。
:::

:::fact
2025年5月2日のエンジニアリングブログは、2年前のブラックフライデーと同じ量のWebhookを今は毎日配信していると書く。配信に失敗した宛先への再試行は低優先度のキューに回し、1つの問題のある宛先が全体の配信を遅らせないようにしている。冪等性はRedisのロックで取り、2秒の配信SLOで「スリーナイン」を保つという。開発者向けの変更履歴（2026-05-15）によれば、Paddle MCPサーバーはホスト型のリモートサービスになり、サンドボックス用と本番用のエンドポイントを分け、APIキーをBearerトークンとして使う。API操作を1つずつツールにする代わりに、メソッドを探す search、複数のAPI呼び出しをつなぐJavaScriptの非同期関数を実行する execute、足りない機能を知らせる report_missing_tool の3つだけを公開する「codemode」方式をとる。
:::

:::fact
当サイトの観測（2026-11-02）では、api.paddle.com、vendors.paddle.com、paddle.net、mcp.paddle.com はCloudflareを経由し、cf-rayは成田のPoPを示していた。チェックアウトのスクリプト cdn.paddle.com/paddle/v2/paddle.js と buy.paddle.com は、Cloudflareのcf-rayに加えて、Amazon S3のバージョンIDと、CloudFrontのキャッシュヒットを示すヘッダーを返した。www.paddle.com と developer.paddle.com は server: Netlify を返し、www.paddle.com のHTMLにはNext.jsのアセットとPrismicの画像が含まれていた。
:::

:::guess
ルーティングの記事が示しているのは、MoRであることが技術の形まで決めているということだとみられる。決済代行業者を使う通常の形では、加盟店口座は売り手のもので、どの国でどのアクワイアラーを使うかは売り手の契約に縛られる。Paddleでは売り手がPaddle自身なので、Paddle名義の口座を地域ごとに持ち、取引ごとに宛先を切り替えられる。About usの「平均承認率94%」と、比較ページの「承認率2〜6%向上」という主張は、この仕組みから来ているものとして書かれていると推測されるが、測定の条件は公開ページからは分からない。
:::

:::guess
エンジニアリングブログのトップページには、Webhookの見本として transaction.completed のペイロードが載っている。その数字は、小計599.00ドル、税53.15ドル、合計652.15ドル、手数料（fee）33.11ドルで、当サイトの計算では652.15ドルの5%に0.50ドルを足すと33.11ドルになり、税込みの合計に料率を掛けた形と一致する。規約が手数料の基準となるSRPを「購入者が支払う価格」と定義していることとも合う。ただし見本は説明用のデータとみられ、実際の請求で同じ計算になるかは、売り手が自分の取引データで確かめる必要がある。Paddleの比較ページはStripe側の費用が「税込みの金額で計算される」と指摘しているが、この見本どおりならPaddleの5%も税込みの金額に掛かっていると読める。
:::

## ビジネスモデル

Paddleは非上場で、規約・ヘルプ・発表から読み取れるのは、収益の取り方と、そのリスクをどう管理しているかだ。

:::fact
ヘルプセンター（2026-11-02閲覧）によれば、売り手は残高を好きなときに引き出せず、入金は月1回だ。毎月1日に残高が売り手の設定した下限額（最低100ドル、100,000ドルまで設定可能、ポンドとユーロでは100ポンド・100ユーロ）を超えていれば支払い待ちになり、2日から15日の間に送金され、着金までさらに最大3営業日かかる。下限に届かない残高は翌月に繰り越される。受け取り方法は銀行送金かPayoneerで、残高通貨と銀行の国の通貨が一致すれば（米国のUSD、ユーロ圏のEUR、英国のGBP、カナダのCAD、豪州のAUD）現地の決済網を使って通常は無料、それ以外はSWIFTで15ドル・ユーロ・ポンドの送金手数料がかかる。残高通貨と異なる通貨で受け取る場合は最大1.5%の換算マージンが加わることがある。規約は、売り手の支払通貨（Payment Currency）をUSD・EUR・GBP・CAD・AUDのいずれかと定め、6か月連続で売上がない場合に休眠手数料を課すことがあると書いている。
:::

:::fact
開発者ドキュメント（2026-11-02閲覧）によれば、購入者が払える通貨は30超で、日本円も含まれ、最低請求額は100円とされる。一方、売り手の残高として持てる通貨はUSD・EUR・GBP・AUD・CADの5つで、送金で受け取れる通貨にはこのほかCHF・CNY・CZK・DKK・HUF・PLN・SEK・ZARが並ぶが、日本円は一覧にない。対応国の一覧では、日本は日本円で税込み表示の国に分類されている。決済手段は、カード、Apple Pay、Google Pay、PayPalのほか、iDEAL | Wero、Bancontact、BLIK、MB WAY、Pix、UPI、Alipay、WeChat Pay、韓国のKakaoPay・Naver Pay・Payco・国内カード、Samsung Pay、銀行振込が並んでいる。当サイトが確認した範囲では、Paddleの公式サイトに日本語のページはなく、料金ページの表記はドル建ての「5% + 50¢」だけだった。
:::

:::fact
Paddleの利用ポリシー（Acceptable Use Policy、2026-11-02閲覧）は、Paddleが「ソフトウェア企業（B2BのSaaS、消費者向けソフトウェア、ゲームを含む）」のためのもので、主な商品が人によるサービス（相談、サポート、デザインなど）や物販の会社には向かないと書く。禁止される分野として、物理的な配送を伴う商品、ソフトウェアに関係しない人的サービス（コンサルティング、法律相談、コーチング、ITサービス、専門家コミュニティへのアクセスなど）、寄付・クラウドファンディング・広告・スポンサーシップのように真正なソフトウェアやサービスを売らないもの、Paddleの売り手でない第三者に販売させるマーケットプレイス、規制対象の金融商品、決済サービス（MoRを含む）、ギャンブル、アダルトなどを挙げる。売り手として使えない国として、ヘルプセンターはロシア、ベラルーシ、イラン、北朝鮮、キューバなどを列挙している。規約は、チャージバックや返金の率が過大だとPaddleが判断した場合に販売の停止や契約の解除ができ、将来の返金やチャージバックに備えて売り手への支払いを留保できると定めている。
:::

:::fact
競合の動きとして、Stripeは英国向け料金ページ（2026-11-02閲覧）で、Managed Paymentsを「Stripeのマーチャント・オブ・レコード・ソリューション」とし、Payments手数料に加えて成功した取引1件につき3.5%と表示している。Stripeのドキュメントによれば、Managed Paymentsを使える事業者の所在地には米国、カナダ、英国、オランダ、日本などが含まれる。Lemon Squeezyのブログ（2024-07-26）は、StripeがLemon Squeezyを買収したと発表している。Paddleの比較ページは、Managed Paymentsを「前向きな一歩」と評したうえで、サブスクリプション事業ではStripeの費用が税込みの金額に対して取引あたり7〜9%に積み上がると主張している。パートナーシップのページには、投資家・連携・紹介（Referrals）の3つの提携の形が並ぶが、紹介報酬の条件は公開ページでは確認できなかった。
:::

:::guess
5%+50セントという料金の中身は、カードネットワークとアクワイアラーに払う原価、税務の登録と申告、不正とチャージバックの損失、購入者サポートの人件費の合計に、Paddleの取り分を足したものとみられる。料金を1行にすると、売り手は原価の変動を見なくて済む一方、Paddleは国やカードの種類による原価の違いを自分で吸収することになる。ローカル・アクワイアリングとルーティングで原価と承認率を改善するほど、同じ5%の中の取り分が増える構造だと推測される。10ドル未満の製品に個別の料金を用意しているのは、50セントの固定部分が少額取引で重くなりすぎるためだろう。
:::

:::guess
利用ポリシーの禁止リストの長さは、MoRが負う責任の裏返しと考えられる。売り手がPaddleである以上、売った商品が詐欺的だったり、チャージバックが多かったりすれば、カードネットワークや税務当局に対して責任を問われるのはPaddleだ。人的サービスや物販を断り、ソフトウェアに絞っているのは、税の分類が比較的はっきりし、納品をWebhookやライセンスで確かめられ、返金の判断がしやすい商品に限ることで、5%の中に収まるリスクにとどめる設計だと推測される。月1回の入金と、支払いを留保できる規約の条項も、返金とチャージバックの請求が後から届くまでの時間を、売り手の残高で吸収する仕組みとみられる。
:::

:::guess
Stripeが3.5%の上乗せでMoRを始めたことで、Paddleの比較の相手は「税務を自前でやるStripe」から「MoRを選べるStripe」に変わったとみられる。Paddleが比較ページで、Stripe側の費用を税込みの金額基準で7〜9%と見積もり、自社を「完全なMoR」と呼んで区別しているのは、その変化への応答と読める。一方でPaddleが2025年以降に強調しているのは、AppleのApp Storeの外でのWeb課金と、AIで作られる小さなチームへの対応だ。2026年10月にAI Toolkitを出し、2027年初めには従量課金をネイティブで扱うプライベートプレビューを始めると発表したのは、AI製品の従量課金という、税の扱いがさらに複雑な領域をMoRとして取りにいく動きと推測される。日本の開発者にとっては、日本円で残高を持てず、日本語の窓口もないことが、使う前に確かめるべき条件になると考えられる。売上税や消費税の扱いは事業者ごとに異なるため、判断は税理士などの専門家に確認するのが確実だ。
:::

Paddleを解剖すると、決済の会社というより、売り手という役割を請け負う会社の姿が見えてくる。開発者の製品を買い取って売り直す契約を土台に、税を差し引いて納め、購入者の問い合わせを受け、チャージバックの矢面に立ち、そのリスクを利用ポリシーと月1回の入金で抑え、複数のPSPと自社名義の加盟店口座で原価と承認率を磨く。5%+50セントの1行は、その全部の値段だ。Stripeが同じ役割に手を伸ばした今、Paddleが問われているのは、売り手を引き受けるという仕事を、どれだけ深く、どれだけ多くの国で、どれだけ安く続けられるかだ。
