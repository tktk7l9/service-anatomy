---
service: "Resend"
title: "借りた土台の上に「使いやすさ」を作り、300万人を集めてから土台を自前にする — 超過1,000通0.90ドル、黒字化、買い取ったIPv4ブロックと自作MTA「Forge」でメールの下層へ降りるResendを解剖する"
description: "Resendは、React Emailというオープンソースのテンプレート部品から始まった開発者向けのメールAPIだ。2023年1月に法人化し、Y Combinatorを経て、2024年12月にAndreessen Horowitz主導で1,800万ドルを調達、2026年6月に300万ユーザーを超え、2025年から黒字だと書く。料金は送信数で決まる月額制で、無料は月3,000通・1日100通、Proは月20ドルで5万通、超過は1,000通0.90ドル。ドメイン登録の手順書が示すDNSレコードはAmazon SESを指し、2026年10月23日には買い取ったIPv4ブロックから送る自社のMTA「Resend Forge」を発表した。公式の料金ページ、ドキュメント、ハンドブック、ブログ、障害報告、利用規約、AWSの料金ページ、GitHubとnpmのAPI、当サイトの実観測から解剖する。"
lead: "Resendの創業者は、最初のブログ記事で自社を「次世代のSendGrid」と呼んだ。だが、ドメインを登録する手順書が貼り付けさせるSPFのレコードには amazonses.com と書いてある。その送信はAmazon SESとみられ、AWSはそれを1,000通0.10ドルで売っている。Resendは3年かけて、その上にAPIとダッシュボードとReact Emailという「使いやすさ」の層を作り、1,000通0.40〜0.90ドルで売ってきた。300万ユーザーを集め、黒字になった会社が、2026年10月にIPv4のアドレスを買い、自分のMTAを書いた。上の層から始めた会社が、なぜ今、土台へ降りるのかを解剖する。"
category: dev-tool
tags: [email-api, transactional-email, developer-experience, react, open-source, aws, ai-agent, deliverability]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://resend.com/"
# Affiliate link placeholder: Resend has no public affiliate or referral program (checked
# 2026-11-02 on resend.com/pricing, /enterprise, /nonprofits and every child sitemap of
# resend.com/sitemap.xml; only a 50% nonprofit discount and Enterprise sales exist).
# Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<resend-referral-link>"
#   program: "Resend"
expires:
  - date: "2026-11-30"
    claim: "Resend Forgeの公式ページが表示する実測値（2026-11-02時点の直近7日。受信までの中央値がForge 0.8秒対従来1.5秒、5秒以内の配達94.48%対91.09%など）。毎時更新されるため数字を取り直す"
  - date: "2026-12-31"
    claim: "Forgeは開封・クリック計測にまだ対応せず、計測を有効にしたドメインは従来の送信エンジンに回る（FAQの「Not yet」）。対応したかを確認する"
  - date: "2026-12-31"
    claim: "2025年12月の「1,000,000 users」記事が掲げた2026年の計画（サポートSLAをアジア太平洋の時間帯へ広げる）。実施されたかを確認する"
vendor: "Plus Five Five, Inc.（Resend）"
origin: "US"
heroTheme: "resend"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "送信基盤（従来のエンジン）"
    name: "Amazon SES (AWS)"
    confidence: likely
    evidence: "公式ドキュメントのDNS設定ガイド（Cloudflare編、2026-11-02時点）は、ドメインの検証に使うレコードとして、MXに feedback-smtp.us-east-1.amazonses.com、SPFのTXTに \"v=spf1 include:amazonses.com ~all\" を指定する。サブプロセッサー一覧はAmazon Web Services, Inc.を「Third party hosting and sending provider」と記す。Forgeの公式ページは比較対象を「サードパーティのプロバイダーを含む従来のエンジン」と呼ぶ。Resend自身が「SESを使う」と書いた一次情報は今回見つからなかったため likely とする"
    evidenceUrl: "https://resend.com/docs/guides/dns/cloudflare"
  - layer: "自社の送信基盤（2026-10〜）"
    name: "Resend Forge (own MTA, owned IPv4 blocks)"
    confidence: confirmed
    evidence: "公式ブログ（2026-10-23「Announcing Resend Forge」）は、Forgeを自社のMail Transfer Agentとし、「自社が所有し運用するIPブロックから送る」「これまでは借りた土台の上でインフラを動かしていた」と書く。製品ページはIPv4を移転市場で買ったと説明する"
    evidenceUrl: "https://resend.com/features/forge"
  - layer: "API・バックエンド"
    name: "TypeScript + Go on AWS ECS Fargate / Lambda, queues, control plane + data plane"
    confidence: confirmed
    evidence: "公式ハンドブック「What is our tech stack」（2026-07-08更新）に、バックエンドはTypeScriptとGo、APIはAWS ECS Fargate、バックグラウンドジョブはAWS Lambda、トラフィックの急増にはキューで備え、「コントロールプレーンがリクエストを受け、データプレーンがメールを送る」と分けていると明記"
    evidenceUrl: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
  - layer: "APIの入口"
    name: "Cloudflare (WAF + Load Balancing) → AWS ALB → ECS (Email API / Resend API)"
    confidence: confirmed
    evidence: "公式の障害報告（2025-11-18）に、api.resend.com へのリクエストはすべてCloudflareを経由し、Cloudflare Load Balancingが POST /emails を「Email API」へ、それ以外を「Resend API」へ振り分け、行き先はECS上のAPIの前にあるAWS ALBだと明記。当サイトの実観測（2026-11-02）でも api.resend.com は server: cloudflare を返した"
    evidenceUrl: "https://resend.com/blog/incident-report-for-november-18-2025"
  - layer: "ダッシュボード・公開サイト・ドキュメント"
    name: "Next.js (React Server Components) on Vercel + Tailwind CSS + Base UI / Mintlify (docs)"
    confidence: confirmed
    evidence: "公式ハンドブックに、ダッシュボードと公開サイトはNext.jsで、Next.js 15以降は主にReact Server Componentsでデータを取り、スタイルはTailwind CSSとBase UI、ドキュメントはMintlifyと明記。当サイトの実観測（2026-11-02）で resend.com は server: Vercel、x-powered-by: Next.js、x-vercel-id: hnd1::iad1 を返し、/docs は x-mintlify-client-version を返した"
    evidenceUrl: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
  - layer: "データ・認証"
    name: "Postgres (Drizzle / sqlc) + Tinybird + Redis / Supabase Auth"
    confidence: confirmed
    evidence: "公式ハンドブックに、主な保存先はPostgresで、TypeScriptではDrizzle、Goではsqlcを使い、集計はTinybird、キャッシュはRedis、認証はSupabaseで、その上に複数チームの組織モデルを自作したと明記。サブプロセッサー一覧（2026-08-27更新）はPlanetScaleを「Database hosting」、Supabaseを「Database and user authentication」、Tinybirdを「Data analytics」と記す"
    evidenceUrl: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
  - layer: "非同期処理・Webhook配信"
    name: "Inngest (background jobs) + Svix (webhooks)"
    confidence: confirmed
    evidence: "公式ハンドブックに、バックグラウンドジョブの主な道具はInngest、ユーザーへのWebhookの処理はSvixで「自動の再送つきで監視と拡張ができる」と明記"
    evidenceUrl: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
  - layer: "テンプレート（オープンソース）"
    name: "React Email (TypeScript, MIT)"
    confidence: confirmed
    evidence: "GitHubの resend/react-email（2026-11-02時点・APIで取得）は主言語TypeScript、ライセンスMIT、スター19,900、フォーク1,109、2022年9月19日作成で、最新リリースは react-email@6.11.6（2026-10-29）。npmの react-email は2026年10月23日〜29日の1週間に7,607,039回ダウンロードされた"
    evidenceUrl: "https://github.com/resend/react-email"
  - layer: "AI"
    name: "Anthropic (AI editor, support agent) + self-hosted LLMs on RunPod (trust and safety)"
    confidence: confirmed
    evidence: "公式のSecurityページのFAQに、Anthropicがメールの内容を受け取るのはAIエディターを使うときと、アプリ内のAIサポートに自分で共有したときだけで、Emails APIでの通常の送信はAnthropicに送られないこと、RunPodは信頼と安全のために少数のメールのサンプルを、Resendが運用する専用基盤で処理することを明記"
    evidenceUrl: "https://resend.com/security"
  - layer: "AIエージェント向けの入口"
    name: "Remote MCP server (mcp.resend.com) + CLI + llms.txt / Markdown pages"
    confidence: confirmed
    evidence: "公式の llms.txt（2026-11-02時点）は、リモートのMCPサーバー https://mcp.resend.com/mcp、CLI、エージェント向けのスキルを列挙し、ブログやガイドは .md を付けるか Accept: text/markdown で原文のMarkdownを返すと書く。2026年6月の公式ブログは、resend.com の全ページをMarkdownで返すようにし、MCPサーバーのAPIカバー率を約8%から約90%に上げ、53コマンドのCLIを出したと書く"
    evidenceUrl: "https://resend.com/llms.txt"
sources:
  - label: "Resend公式: Pricing（Markdown版で取得）"
    url: "https://resend.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Resend公式ドキュメント: What are Resend account quotas and limits?"
    url: "https://resend.com/docs/knowledge-base/account-quotas-and-limits"
    accessedAt: "2026-11-02"
  - label: "Resend公式ドキュメント: Usage Limits（レート制限）"
    url: "https://resend.com/docs/api-reference/rate-limit"
    accessedAt: "2026-11-02"
  - label: "Resend公式ドキュメント: Choosing a Region"
    url: "https://resend.com/docs/dashboard/domains/regions"
    accessedAt: "2026-11-02"
  - label: "Resend公式ドキュメント: DNS設定ガイド（Cloudflare）"
    url: "https://resend.com/docs/guides/dns/cloudflare"
    accessedAt: "2026-11-02"
  - label: "Resend公式ドキュメント: Idempotency Keys"
    url: "https://resend.com/docs/dashboard/emails/idempotency-keys"
    accessedAt: "2026-11-02"
  - label: "Resend公式ドキュメント: Retries and Replays（Webhook）"
    url: "https://resend.com/docs/webhooks/retries-and-replays"
    accessedAt: "2026-11-02"
  - label: "Resend公式ドキュメント: How do Dedicated IPs work?"
    url: "https://resend.com/docs/knowledge-base/how-do-dedicated-ips-work"
    accessedAt: "2026-11-02"
  - label: "Resend公式: Security"
    url: "https://resend.com/security"
    accessedAt: "2026-11-02"
  - label: "Resend公式: Subprocessors"
    url: "https://resend.com/legal/subprocessors"
    accessedAt: "2026-11-02"
  - label: "Resend公式: Terms of Service"
    url: "https://resend.com/legal/terms-of-service"
    accessedAt: "2026-11-02"
  - label: "Resend公式: Enterprise"
    url: "https://resend.com/enterprise"
    accessedAt: "2026-11-02"
  - label: "Resend公式: Resend for Nonprofits"
    url: "https://resend.com/nonprofits"
    accessedAt: "2026-11-02"
  - label: "Resend公式: llms.txt（AIエージェント向けの案内）"
    url: "https://resend.com/llms.txt"
    accessedAt: "2026-11-02"
  - label: "Resend公式ハンドブック: How we got here（年表）"
    url: "https://resend.com/handbook/company/how-we-got-here"
    accessedAt: "2026-11-02"
  - label: "Resend公式ハンドブック: How we make money"
    url: "https://resend.com/handbook/company/how-we-make-money"
    accessedAt: "2026-11-02"
  - label: "Resend公式ハンドブック: What is our tech stack"
    url: "https://resend.com/handbook/engineering/what-is-our-tech-stack"
    accessedAt: "2026-11-02"
  - label: "Resend公式ハンドブック: What is our philosophy for anti-abuse"
    url: "https://resend.com/handbook/success/what-is-our-philosophy-for-anti-abuse"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Introducing Resend（2023-01-04）"
    url: "https://resend.com/blog/introducing-resend"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Resend + Y Combinator（2023-02-01）"
    url: "https://resend.com/blog/y-combinator"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Why I spent $25,000 on a domain（2023-02-06）"
    url: "https://resend.com/blog/how-to-pick-a-startup-name"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: New Free Tier（2023-06-12）"
    url: "https://resend.com/blog/new-free-tier"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Resend raises $3M（2023-07-18）"
    url: "https://resend.com/blog/resend-raises-3m-seed-round"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Improving Time to Inbox in Asia（2024-01-17）"
    url: "https://resend.com/blog/improving-time-to-inbox-in-asia"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Introducing the Scale plan（2024-10-16）"
    url: "https://resend.com/blog/introducing-the-scale-plan"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Resend raises $18M Series A（2024-12-04）"
    url: "https://resend.com/blog/series-a"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Resend acquires Mergent（2025-04-23）"
    url: "https://resend.com/blog/resend-acquires-mergent"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Resend acquires Briefer（2025-08-05）"
    url: "https://resend.com/blog/resend-acquires-briefer"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: $3M to Make Email Safer（2025-10-03）"
    url: "https://resend.com/blog/3-million-to-make-email-safer"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Incident report for November 18, 2025"
    url: "https://resend.com/blog/incident-report-for-november-18-2025"
    accessedAt: "2026-11-02"
  - label: "Resend公式チェンジログ: Pay-as-you-go Pricing（2025-12-05）"
    url: "https://resend.com/changelog/pay-as-you-go-pricing"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: 1,000,000 users（2025-12-18）"
    url: "https://resend.com/blog/1-million-users"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Incident report for February 15, 2026"
    url: "https://resend.com/blog/incident-report-for-february-15-2026"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: React Email 6.0（2026-04-17）"
    url: "https://resend.com/blog/react-email-6"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: 3,000,000 users（2026-06-03）"
    url: "https://resend.com/blog/3-million-users"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Sunsetting new.email（2026-07-08）"
    url: "https://resend.com/blog/sunsetting-new-email"
    accessedAt: "2026-11-02"
  - label: "Resend公式チェンジログ: More Domains on the Free Tier（2026-08-25）"
    url: "https://resend.com/changelog/three-domains-on-the-free-tier"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Announcing Inboxes（2026-10-22）"
    url: "https://resend.com/blog/announcing-inboxes"
    accessedAt: "2026-11-02"
  - label: "Resend公式ブログ: Announcing Resend Forge（2026-10-23）"
    url: "https://resend.com/blog/announcing-resend-forge"
    accessedAt: "2026-11-02"
  - label: "Resend公式: Resend Forge（製品ページ・実測値）"
    url: "https://resend.com/features/forge"
    accessedAt: "2026-11-02"
  - label: "AWS公式: Amazon SES Pricing"
    url: "https://aws.amazon.com/ses/pricing/"
    accessedAt: "2026-11-02"
  - label: "GitHub: resend/react-email（APIで取得）"
    url: "https://github.com/resend/react-email"
    accessedAt: "2026-11-02"
  - label: "npm Downloads API: resend（2026-10-23〜10-29）"
    url: "https://api.npmjs.org/downloads/point/last-week/resend"
    accessedAt: "2026-11-02"
---

Resendは、アプリからメールを送るための開発者向けAPIだ。パスワードの再設定、ログイン用のリンク、領収書のように、ユーザーの操作に応じて1通ずつ送る「トランザクションメール」を、APIキー1つと数行のコードで送れるようにした。メールマーケティングの[Mailchimp](/ja/articles/mailchimp)が「連絡先のリスト」から始まったのに対し、Resendは「開発者のコード」から始まった。この会社の3年間は、借りた送信基盤の上に使いやすい層を重ね、人が集まってから土台そのものを自前に置き換えていく順番で説明できる。

## サービス解説

公式ハンドブックの年表によれば、Zeno Rocha氏とBu Kinoshita氏は2022年8月、古く遅くマーケター向けに作られたメールの道具に不満を持ち、「メールのStripe」を副業として作り始めた。同年9月、スタートアップで働く友人が試作品を本番で使い始め、2人が送った10ドルの支払いリンクに実際に支払った。11月にY Combinatorの2023年冬のバッチに採択されて仕事を辞め、12月にオープンソースのReact Emailを公開し、2023年1月に法人化した。2023年1月4日の最初のブログ記事で、Rocha氏はLiferay CloudのCPOとWorkOSの開発者体験の責任者だった頃に迷惑メールフォルダの問題に苦しんだと書き、自社を「次世代のSendGrid」と呼んだ。主要な競合は2009〜2010年ごろに生まれ、すでにどこも買収されており、営業主導の成長と大企業の要件ばかりを優先している、というのが参入の理由だった。

:::fact
Resendの公式ブログと公式ハンドブックによれば、会社の歩みは次のとおりだ。2023年2月1日の記事は、公開から4週間で待機リストが4,949人、React EmailのGitHubスターが4,168になったと書き、Bu Kinoshita氏とJonni Lundy氏とともにY Combinatorの2023年冬のバッチに参加したと述べる。2023年2月6日の記事でRocha氏は、resend.com のドメインの言い値が39,999ドルで、7,999ドルを提示し、3万5,000ドルの対案を経て2万5,000ドルで買ったと書いている。2023年6月に待機リストを外して一般公開し、7月18日に300万ドルのシードラウンド（Y Combinator、SV Angel、FigmaのDylan Field氏、VercelのGuillermo Rauch氏、SupabaseのPaul Copplestone氏らが参加）を発表した（ハンドブックの年表はシードを2023年4月の項に置いている）。2023年12月に有料顧客が1,000社、2024年4月に10万ユーザーに届き、2024年12月4日にAndreessen Horowitz主導で1,800万ドルのシリーズAを発表した。2025年12月18日の記事は、2025年の1年でユーザーが24万9,000人から100万人に、売上が5倍に、チームが12人から28人になったと書く。2026年6月3日の記事は、ユーザーが300万人、チームが43人になり、「Resendは黒字で、昨年からそうだ」と書いている。利用規約の契約相手は「Plus Five Five, Inc.」で、準拠法はカリフォルニア州法だ。
:::

:::fact
公式の料金ページ（2026-11-02時点・Markdown版）によれば、トランザクションメールの料金は月の送信数で決まる。Freeは月3,000通で1日100通まで、Proは月20ドルで5万通・月35ドルで10万通、Scaleは月90ドルで10万通から、20万通160ドル、50万通350ドル、100万通650ドル、150万通825ドル、250万通1,150ドルまで刻まれ、その上はEnterpriseの個別見積もりだ。含まれる通数を超えた分は、ProとScaleの10万通までが1,000通0.90ドル、Scaleの20万通が0.80ドル、50万通が0.70ドル、100万通が0.65ドル、150万通が0.52ドル、250万通が0.46ドル。マーケティングメールは送信数ではなく連絡先の数で決まり、Freeは1,000件、Pro marketingは5,000件40ドルから15万件650ドルまで。自動化（Automations）は全プランに月1万回の実行を含み、有料プランの超過は1回0.0015ドル。受信箱（Inboxes）は全プランに3つ含まれ、追加は1つ月1ドル。追加オプションはドメイン100個が月20ドル、専用IPが月30ドル（Scaleで1日3,000通を超える送信者向け）、シングルサインオンが月150ドル（Scale）。セルフサービスのプランは月払いだけで、年払いも年払い割引もない。表示はすべて米ドルで、税の扱いは料金ページに書かれていない。
:::

:::pull
AWSは送信1,000通を0.10ドルで売る。Resendの超過料金は1,000通0.90ドルだ。その差の多くは、APIとダッシュボードとReact Emailという「使いやすさ」の値段とみられる。
:::

::scorecard

## UX分析

ResendのUXは、「最初の1通までの距離」を縮めることと、「迷惑メールにならない送り方」を製品に埋め込むことの2つでできている。審査を待たせず、そのかわりに送り方の規律を数字で課す。

- **審査を待たずに送れる**。公式ハンドブックの乱用対策（anti-abuse）の方針は、競合の多くは送信を始める前に長いフォームを書かせ、承認まで数日待たせると指摘し、Resendは「信頼を既定にする」と書く。登録すると、テスト用の resend.dev のドメインからすぐに送れる。ただし公式ドキュメントによれば、resend.dev から送れるのは自分のアカウントのメールアドレスだけで、他人に送るには自分のドメインをDNSで検証する必要がある。試しの1通はすぐ送れ、本番の1通にはドメインの設定が要る、という二段階になっている。
- **無料枠は少しずつ広がってきた**。2023年6月12日の公式ブログは、無料枠を月100通から月3,000通（1日100通）へ30倍にしたと書き、同時に無料のドメインを1つに、地域の選択をProだけにした。2026年8月25日のチェンジログは無料のドメインを3つに増やし、今の料金ページは地域の選択を全プランに含める。一度有料に寄せた機能を、あとから無料に戻している。
- **上限は「止める」より「超えて払う」**。2025年12月5日のチェンジログで、有料プランに超過分の従量課金（Transactional Overages）が加わった。公式ドキュメントによれば既定ではオフで、オンにすると月の上限を超えても1,000通単位で超過料金を払って送り続けられる。予期しない請求を防ぐため、超過は月の上限の5倍で止まる。
- **レート制限はプランで変わらない**。公式ドキュメントによれば、APIの上限はチームごとに毎秒10リクエストで、APIキーやドメインごとではなくチーム全体で共有し、バーストの余裕もない。料金ページのFAQは「プランを上げてもレート制限は上がらない」と明記し、1回で100通まで送れるバッチAPIを案内する。応答ヘッダーはIETFの草案に沿った ratelimit-limit などを返す。
- **送り方の規律は数字で決まっている**。公式ドキュメントは、全アカウントにバウンス率4%未満、迷惑メール報告率0.08%未満を求め、上回ると一時的に送信を止めることがあると書く。受信したメールも送信と同じく通数に数え、To・CC・BCCの宛先は1人ずつ1通と数える。
- **再送しても二重に届かない**。公式ドキュメントによれば、送信のリクエストに Idempotency-Key ヘッダー（最大256文字）を付けると、24時間以内に同じキーで来た要求は送り直さずに同じ応答を返す。SMTPでは Resend-Idempotency-Key ヘッダーで同じことができる。Webhookは失敗すると、直後から最後は10時間の間隔まで8回、間隔を広げて再送される。
- **東京から送れるが、データは米国に置かれる**。2024年1月17日の公式ブログで東京リージョンが加わり、送信の地域はバージニア（us-east-1）、アイルランド（eu-west-1）、サンパウロ（sa-east-1）、東京（ap-northeast-1）の4つになった。公式ドキュメントは、地域の選択が決めるのは「どこから送るか」で、メールのメタデータやログを含むアカウントのデータは地域にかかわらず米国に保存されると明記する。データの保持は全プラン30日だ。

規律を数字で課す設計は、送る側から見れば「最初は甘く、あとから厳しい」体験にもなりうる。審査なしで始められる一方、バウンス率が4%を超えれば送信は止まりうる。ただ、ハンドブックは「アカウントから締め出さない」「機能を止めて送信を遅くするのはよいが、アクセスを自動で取り上げるのは理想的でない」とも書いており、止めるのは送信で、アカウントそのものではない、という線を引いている。

## 技術構成

::techstack

:::fact
公式ハンドブック「What is our tech stack」（2026-07-08更新）によれば、バックエンドはTypeScriptとGoで、できる限りサーバーレスで動かし、Next.jsはVercel、バックグラウンドジョブはAWS Lambda、APIはAWS ECS Fargateに置く。トラフィックの急増に備えてキューを挟み、「コントロールプレーンがリクエストを受け、データプレーンがメールを送る」形で責任を分けて障害の影響を限る。保存先はPostgresで、TypeScriptはDrizzle、Goはsqlcで読み書きし、集計はTinybird、キャッシュはRedis、認証はSupabase、ジョブはInngest、Webhookの配信はSvix、ドキュメントはMintlify、インフラの管理はAWS CDKとTerraform、CI/CDはGitHub ActionsとDepotだ。2025年11月18日の障害報告は入口の構成を明かしている。api.resend.com への要求はすべてCloudflareを通り、Cloudflare Load Balancingが POST /emails を「Email API」へ、それ以外を「Resend API」へ振り分け、行き先はECS上のAPIの前にあるAWS ALBだ。この日のCloudflareの障害で、Resendは11時30分から14時31分（UTC）まで送信に影響が出た。報告は、振り分けをCloudflareで行っていたため入口を別の事業者へ移すのが「DNSを1つ書き換えるより難しかった」と書き、AWS CloudFrontへの迂回路を用意して、再発時は60秒以内に切り替えられる手順書を作ったとしている。
:::

:::fact
公式ドキュメントのDNS設定ガイド（Cloudflare編）は、ドメインを検証するレコードとして、MXに feedback-smtp.us-east-1.amazonses.com、SPFに "v=spf1 include:amazonses.com ~all" を指定する。サブプロセッサー一覧（2026-08-27更新）は、Amazon Web Services, Inc.を「サードパーティのホスティングと送信の事業者」と記す。AWSの公式料金ページによれば、Amazon SESの送信は1,000通0.10ドル（添付データは別に1GB 0.12ドル）、受信も1,000通0.10ドルだ。2026年10月23日の公式ブログは、自社のMTA「Resend Forge」を発表し、「これまで、私たちはインフラを借りた土台の上で動かしてきた。今日、それが変わる」と書いた。Forgeの製品ページによれば、ForgeはResendが所有し運用するIPブロックから送る。IPv4の空きはとうに尽きており、北米の登録機関ARINの待機リストは小さなブロックしか出さないため、ブローカーを通じて移転市場で買い、以前の持ち主や経路、近隣、ブロックリストの記録を調べ、「何年も使われず、評判のよい持ち主のもとにあった」ブロックを選んだ。その後、受信側ごとに数週間から数カ月かけて少しずつ送信量を増やした。受信側（Gmail、Outlook、Yahoo、Apple）ごとに接続数や再送の間隔の設定を分け、その調整には人だけでなく、同じデータを見るAIエージェントも使っていると書く。
:::

:::fact
Forgeの製品ページは、直近7日の実測値を毎時更新で表示する。2026-11-02に当サイトが取得した時点では、APIの呼び出しから受信側が受け取るまでの中央値は、全受信側で従来のエンジン（「サードパーティのプロバイダーを含む」）が1.5秒、Forgeが0.8秒、Googleが1.4秒対0.7秒、Outlookが3.0秒対2.2秒、Appleが4.9秒対4.8秒だった。5秒以内に届いた割合はForge 94.48%対従来91.09%、3分以内は99.97%対98.59%。公式ブログは、ここ数カ月で数百の顧客が1,000万通以上をForgeで送ったと書く。Forgeを使うにはドメインの設定画面でCNAMEのレコードを1つ足し、自動の審査で「よい送り手」と判断されれば移される。コードの変更は要らない。障害時は従来のエンジンに自動で切り替わり、開封・クリックの計測を有効にしたドメインは、まだ従来のエンジンで送られる。
:::

:::guess
DNSのレコードとサブプロセッサー一覧を並べると、Resendの「従来のエンジン」の送信部分はAmazon SESとみられる。そう読むと、Resendの3年間の技術は「送ること」そのものではなく、送る前と後の層に集中していたことになる。前はReact EmailとAPI、SDK、テンプレート、後はWebhook、バウンスの理由、迷惑メール報告、配達の指標、ダッシュボードだ。Forgeは、その層の下にあった最後の「借り物」を自社に置き換える試みと推測される。中央値で0.7秒の短縮は、パスワードの再設定やログインのリンクのように「ユーザーが待っているメール」では体感に関わり、受信側ごとの設定を自分で調整できること自体が、借りた基盤では持てなかった手段だとみられる。一方で、IPを所有すれば、プールを汚す送り手を止める責任も自社が直接負う。2025年10月に「メールを安全にするため3年で300万ドルを投じる」と発表したこと、Forgeのページが「共有のプールは最も悪い入居者と同じだけの品質」と書くことは、その責任を引き受ける準備と読める。
:::

:::fact
2026年2月15日の公式の障害報告によれば、22時19分（UTC）から3時間31分、送信の遅延とダッシュボードの障害が起きた。原因はデータベースの接続の枯渇で、設定の漏れにより1つのサービスの接続数が平均60から330超へ跳ね上がった。報告は、長く動くもの、サーバーレス、cronなど配置の形と、Postgresのライブラリ、直接接続か接続プーラー経由かの組み合わせが混在していて、健全な使い方を保つのが難しかったと書く。送信の基盤はデータベースが使えなくても耐えるように作られていたため、メールは平均約2時間遅れたが1通も失われなかった。対策として、Postgresのロールごとの接続上限の見直しと、重要なテーブルを別のデータベースへ分けることを挙げている。
:::

:::fact
React Emailは、メールのテンプレートをReactのコンポーネントで書くためのオープンソースのライブラリで、Resendより先に生まれた。GitHubの resend/react-email（2026-11-02時点・APIで取得）は、TypeScript、MITライセンス、スター19,900、フォーク1,109で、2022年9月19日に作られた。2026年4月17日の公式ブログ「React Email 6.0」は、自分のアプリに埋め込めるオープンソースの視覚的なエディター（@react-email/editor）を出し、週200万ダウンロード、196人のコントリビューターと書いた。npmのAPIによれば、2026年10月23日〜29日の1週間のダウンロードは、Resendの公式SDK「resend」が16,955,624回、「react-email」が7,607,039回だった。当サイトの実観測（2026-11-02）でも、/docs の応答の link ヘッダーは llms.txt やMCPのサーバーカード、エージェントのスキルの一覧を宣言していた。
:::

:::guess
React Emailは、Resendの集客の入口として働いているとみられる。テンプレートをReactで書いた開発者にとって、それを送る先にResendを選ぶ手間は最も小さい。料金ページが全プランに「React Email」を含めると書くのは、ライブラリ自体は誰でも無料で使えるため、機能というより導線の表現と推測される。2026年のMarkdown化、MCP、CLI、スキルの整備は、同じ導線をAIエージェントにも引く試みで、「エージェントにはダッシュボードではなくAPIが要る」という公式ブログの言葉どおり、人がブラウザで操作しなくても送信の設定が終わる状態を目指していると読める。
:::

## ビジネスモデル

収益は、トランザクションメールの送信数、マーケティングメールの連絡先数、それに自動化の実行・受信箱・ドメイン・専用IP・シングルサインオンという部品ごとの月額と従量課金でできている。無料枠で広く集め、送信量とチームの規模が大きくなるにつれて請求が伸びる形だ。

:::fact
公式ハンドブック「How we make money」（2026-07-08更新）は、収益の考え方を3つ挙げる。1つ目は「先に与える」で、手厚い無料枠は「低い顧客獲得コストで見込み客を得る方法」であり、価値を感じた人には遠慮なく課金するとする。2つ目は「価値に合わせる」で、Resendは複数の製品を持つ会社として、トランザクションとマーケティングを別々の契約にし、いつでも追加・解約できるようにする。3つ目は「一緒に成長する」で、量が増えるほど1通あたりが安くなる段階制と、上限を超えた分だけ払う従量課金を挙げる。2024年10月16日の公式ブログは、月10万通を超えると受信側から「大量送信者」と見なされ、DMARCやワンクリックの配信停止が必須になるとして、10万通からのScaleプランを月90ドルで新設し、10万通を超えるProの段を置き換えたと書く。Scaleには1,000ドメイン、Slackでのエンジニアの直接の対応、緊急時の応答時間の保証、10個のWebhookの宛先が付く。料金ページでは、10万通はProなら月35ドル、Scaleなら月90ドルで、同じ量に55ドルの差がある。月30ドルの専用IPについては、公式ドキュメントが「月9万通未満ではIPを温めておくには足りないかもしれない」と書き、送信者全員に勧めてはいない。
:::

:::fact
公式のEnterpriseページによれば、Enterpriseは年単位または複数年の契約で、前払いの請求書・30日払い。送信の稼働率99.99%を「商業的に合理的な努力」で目指し、届かなかった月は申請により5%から50%のサービスクレジットが出る。同ページは、緊急の問い合わせの90%に13分以内に最初の返答をしていると書く。2025年12月の公式ブログは、2025年に82,416人のユーザーを支援し、最初の返答までの中央値は2時間45分、緊急の90%は47分以内で、2026年にはサポートの時間帯をアジア太平洋に広げると書いた。公式のSecurityページによれば、SOC 2 Type IIを取得しGDPRに従う一方、HIPAAには対応せずBAAも結ばず、ISO 27001の認証は持たない。非営利団体は審査を経て有料プランが50%引きになる。利用規約は、支払い済みの料金は法律が求める場合を除き返金しないとし、無料枠については、機能や上限の変更、終了、上限を超えた無料アカウントの有料への切り替えを、予告なく行う権利を留保している。
:::

:::fact
Resendは、製品の周辺を買収と撤退で組み替えてきた。2025年4月23日の公式ブログはサーバーレスのジョブ実行サービスMergentの買収を発表し、Mergentは2025年7月28日に終了するとした。2025年8月5日にはデータ分析基盤のBriefer（YC S23）の買収を発表し、「毎週テラバイト単位のデータを処理する」Resendを速くするためとして、Brieferは2025年11月5日に終了するとした。2025年2月に始めた、自然言語でメールのテンプレートを作る別ブランドの「new.email」は、2026年7月8日に終了を発表し、主な機能はResend本体のエディターに無料で移した。Rocha氏はこの記事で、別ブランドと別の技術基盤を選んだことを「立ち上げは速いが、保守が重い」と振り返り、「メールはウェブサイトと違い、テンプレートは数個作って何度も送るもので、人は新しいテンプレートを頻繁には必要としなかった」と書いている。2026年10月22日には、チームとAIエージェントが同じ受信箱を扱う「Inboxes」を発表した。
:::

:::guess
料金表を送信基盤の原価と並べると、Resendの粗利の源泉が見えてくるとみられる。Amazon SESの送信は1,000通0.10ドルで、Resendの料金はProの5万通で1,000通あたり0.40ドル、超過で0.90ドル、Scaleの最上段でも0.46ドルだ。この差は、送信に加えてAPIの基盤、データの保持、Webhookの配信、サポートの人件費、乱用対策を賄う必要があるため単純な利ざやではないが、Resendの価値が「送ること」ではなく「送る前後の層」にあったことを価格の形で示していると推測される。Forgeは、その原価の一部を外部への支払いから自社の設備（IPのブロックとMTAの運用）へ移す動きでもあり、量が増えるほど効いてくる。黒字の会社が、送信量が最も大きいときに土台を自前にするのは、配達の速さと同時に、原価と配達の評判を自分で管理するためとみられる。
:::

:::guess
もう1つの読み方として、Resendは「開発者がまず選ぶメールの層」から、「メールの送受信と会話を一か所で扱う基盤」へ範囲を広げているとみられる。受信、マーケティング、自動化、受信箱と製品を足し、2026年6月の公式ブログは「複数のメールサービスを使う必要はない」と書き、エージェントにとってはサービスが1つ増えるたびに請求とAPIキーと壊れる場所が1つ増える、と説明した。製品を増やすほど、1チームあたりの請求は送信数だけに依存しなくなる。一方、new.emailの終了が示すように、別の顧客層へ広げる試みはすべてが続くわけではなく、本体の中に統合できるものだけが残っていくと推測される。
:::

最初のブログ記事で「次世代のSendGrid」を名乗った会社は、3年間、借りた送信基盤の上で、開発者が触る層だけを磨いてきた。300万ユーザーと黒字を手にした今、IPv4のブロックを買い、MTAを自分で書き、乱用対策に300万ドルを積んでいる。上の層で集めた信頼を、下の層の責任と引き換えにできるかどうかが、この会社の次の3年を決めそうだ。
