---
service: "Clerk"
title: "請求されるのは「2日目に戻ってきた人」だけ、セッショントークンの寿命は60秒、データは米国のCloud SQLに1つ — 認証を部品として売るClerkを解剖する"
description: "Clerkはサインイン画面やユーザー管理を、Reactなどのコンポーネントとして売る認証サービスだ。料金は月間アクティブユーザー（MAU）ではなく、登録の翌日以降に戻ってきた人だけを数える「MRU」で決まり、2026年2月の改定で無料枠は1アプリ5万MRUになった。その裏側では60秒で切れるトークンを50秒ごとに更新し、データは米国のGoogle Cloud SQLのPostgreSQLに置かれる。2025年から2026年にかけての障害と事後報告、料金改定で値上がりした人、AIエージェント向けの新しい入口まで、料金ページ、ドキュメント、公式ブログ、事後報告、当サイトの実観測から解剖する。"
lead: "Clerkの料金ページには、ほかの認証サービスでは見かけない用語がある。「Monthly Retained User（MRU）」。登録した日に一度だけ来て二度と戻らない人は、何人いても請求に入らない。数えるのは、2日目以降に戻ってきた人だけだ。この数え方は、Clerkが何を売っているかをよく表している。売っているのはログインの回数ではなく、アプリに定着した利用者を管理する部品だ。その部品はReactのコンポーネントとして画面に置かれ、裏では60秒で切れるトークンが休みなく更新されている。部品の内側で何が動き、誰が何に払っているのかを解剖する。"
category: dev-tool
tags: [authentication, user-management, nextjs, react, saas, b2b, ai-agent]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://clerk.com/"
# Affiliate link placeholder: no public affiliate program for Clerk was found (checked
# 2026-11-02 on clerk.com/pricing, clerk.com/llms.txt and the legal index; clerk.com/affiliates
# returns 404). Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<clerk-referral-link>"
#   program: "Clerk"
vendor: "Clerk, Inc."
origin: "US"
heroTheme: "clerk"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
expires:
  - date: "2026-12-31"
    claim: "Directory Sync接続の課金が予告どおり2027年1月1日に始まったか（追加1接続あたり月75ドルから）、開始後の記述に書き換える"
  - date: "2027-02-01"
    claim: "Clerk for Agent Authがプライベートベータのままか、提供範囲や料金が公表されていないか"
techStack:
  - layer: "認証API（アプリごと）"
    name: "Frontend API (FAPI) + Backend API (BAPI)"
    confidence: confirmed
    evidence: "公式ドキュメント「How Clerk works」に、アプリを作るとClerkがそのアプリ専用のFrontend APIインスタンスを用意し、開発環境では https://<slug>.clerk.accounts.dev に置かれると明記。Publishable KeyはFAPIのURLをbase64で符号化したもの。ユーザー一覧や停止など複数ユーザーにかかわる管理操作は、Secret Keyで呼ぶ別のBackend APIが担う"
    evidenceUrl: "https://clerk.com/docs/guides/how-clerk-works/overview"
  - layer: "セッション方式"
    name: "Hybrid sessions (60-second session JWT + __client cookie)"
    confidence: confirmed
    evidence: "同ドキュメントに、ログイン時にデータベースへセッションを記録し、FAPIのドメインに長命のclient token（__client、HttpOnly）、アプリのドメインに60秒で切れるsession token（__session）を置き、SDKが50秒ごとに更新すると明記。サーバー描画では「handshake」と呼ぶリダイレクトで更新する"
    evidenceUrl: "https://clerk.com/docs/guides/how-clerk-works/overview"
  - layer: "データベース"
    name: "Google Cloud SQL for PostgreSQL (Enterprise Plus, HA)"
    confidence: confirmed
    evidence: "2026年3月10日の障害の事後報告に、2021年にGoogle Cloud SQLを選び、高可用性構成のEnterprise Plusを使っていると明記。障害の原因はCloud SQLの仮想マシンのライブマイグレーションの失敗だった"
    evidenceUrl: "https://clerk.com/blog/2026-03-10-service-outage-postmortem"
  - layer: "アプリケーション実行"
    name: "Google Cloud Run"
    confidence: confirmed
    evidence: "2025年9月14〜18日のデータベース障害の事後報告に、多数のCloud Runコンテナで動き、各コンテナの接続プールが接続を15分ごとに作り直す設定だったと明記"
    evidenceUrl: "https://clerk.com/blog/2025-09-18-database-incident-postmortem"
  - layer: "エッジ・ボット対策"
    name: "Cloudflare (Turnstile)"
    confidence: confirmed
    evidence: "公式のセキュリティ概要に、基盤の提供元はGoogle CloudとCloudflareで、ボット対策にCloudflare Turnstileを組み込んでいると明記。当サイトの実観測（2026-11-02）でも api.clerk.com は server: cloudflare と via: 1.1 google を返した"
    evidenceUrl: "https://clerk.com/security"
  - layer: "SDK"
    name: "clerk/javascript monorepo (@clerk/nextjs, MIT)"
    confidence: confirmed
    evidence: "GitHubのリポジトリ clerk/javascript はMITライセンス（2026-11-02時点でスター1,775）。npmの @clerk/nextjs の最新版は7.9.23（同日確認）。2026年3月3日に主要SDKの新世代「Core 3」が出て、Node.js 20.9.0以上が必須になった"
    evidenceUrl: "https://github.com/clerk/javascript"
  - layer: "サブスクリプション課金"
    name: "Clerk Billing (Stripe)"
    confidence: confirmed
    evidence: "公式ドキュメントに、Clerk Billingは決済処理にStripeだけを使うが、Stripe Billingとは別の製品で、Clerkで作ったプランとサブスクリプションはStripeに同期されないと明記"
    evidenceUrl: "https://clerk.com/docs/guides/billing/overview"
  - layer: "AIエージェント向けの入口"
    name: "Clerk MCP server + Clerk CLI + agent skills"
    confidence: confirmed
    evidence: "公式のllms.txtに、MCPサーバー（mcp.clerk.com）、npmで入れるCLI、エージェント向けのskillsが並び、アカウントなしで開発用アプリを作る手順（auth.md）が公開されている"
    evidenceUrl: "https://clerk.com/llms.txt"
  - layer: "公開サイト"
    name: "Vercel (clerk.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、clerk.com は server: Vercel と x-vercel-cache: HIT を返した。dashboard.clerk.com も server: Vercel を返した。Clerk側の説明は確認していない"
sources:
  - label: "Clerk公式: Pricing（プラン・従量単価・アドオン・FAQ）"
    url: "https://clerk.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Clerk公式Changelog: New plans, more value（2026-02-05の料金改定）"
    url: "https://clerk.com/changelog/2026-02-05-new-plans-more-value"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ドキュメント: How Clerk works"
    url: "https://clerk.com/docs/guides/how-clerk-works/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ドキュメント: Rate limits"
    url: "https://clerk.com/docs/guides/how-clerk-works/system-limits"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ドキュメント: Migrating（移行の方法とClerkからの移行）"
    url: "https://clerk.com/docs/guides/development/migrating/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk公式: Security and Compliance at a Glance"
    url: "https://clerk.com/security"
    accessedAt: "2026-11-02"
  - label: "Clerk公式: Standard Terms and Conditions（2026-10-01更新）"
    url: "https://clerk.com/legal/standard-terms"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ドキュメント: Clerk Billing"
    url: "https://clerk.com/docs/guides/billing/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Clerk raises $4 million（2021-07-01）"
    url: "https://clerk.com/blog/clerk-raises-for-next-gen-auth"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Clerk raises $6.2m led by Andreessen Horowitz（2022-11-30）"
    url: "https://clerk.com/blog/a16z-seed"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Clerk raises $15m Series A led by Madrona（2023-03-22）"
    url: "https://clerk.com/blog/series-a"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Clerk raises $30M Series B from CRV and Stripe（2024-01-18）"
    url: "https://clerk.com/blog/series-b"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Clerk raises $50m Series C（2025-10-15）"
    url: "https://clerk.com/blog/series-c"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Ramp December 2025の顧客数成長ランキング（2025-12-04）"
    url: "https://clerk.com/blog/clerk-ranked-4-fastest-growing-software-vendor-by-ramp"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Clerk for the AI era（2026-03-03）"
    url: "https://clerk.com/blog/2026-03-03-clerk-for-the-ai-era"
    accessedAt: "2026-11-02"
  - label: "Clerk公式Changelog: Core 3（2026-03-03）"
    url: "https://clerk.com/changelog/2026-03-03-core-3"
    accessedAt: "2026-11-02"
  - label: "Clerk公式: llms.txt（エージェント向けの入口の一覧）"
    url: "https://clerk.com/llms.txt"
    accessedAt: "2026-11-02"
  - label: "Clerk公式: auth.md（アカウントなしで開発用アプリを作る手順）"
    url: "https://clerk.com/auth.md"
    accessedAt: "2026-11-02"
  - label: "Clerk公式Changelog: Clerk MCP server（2026-10-15）"
    url: "https://clerk.com/changelog/2026-10-15-revamped-clerk-mcp-server"
    accessedAt: "2026-11-02"
  - label: "Clerk公式Changelog: Introducing Clerk Protect（2026-10-23）"
    url: "https://clerk.com/changelog/2026-10-23-introducing-clerk-protect"
    accessedAt: "2026-11-02"
  - label: "Clerk公式Changelog: Clerk for Agent Auth（2026-10-30）"
    url: "https://clerk.com/changelog/2026-10-30-clerk-for-agent-auth"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Postmortem: June 26, 2025 service outage"
    url: "https://clerk.com/blog/postmortem-jun-26-2025-service-outage"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Postmortem: August 28, 2025 - elevated API latency and errors"
    url: "https://clerk.com/blog/postmortem-aug-28-2025-elevated-latency-errors"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Postmortem: Database Incident（2025年9月14〜18日）"
    url: "https://clerk.com/blog/2025-09-18-database-incident-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Postmortem: DNS Provider Outage（2026年2月10日）"
    url: "https://clerk.com/blog/2026-02-10-dns-outage-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Postmortem: Clerk System Outage（2026年2月19日）"
    url: "https://clerk.com/blog/2026-02-19-system-outage-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Postmortem: Clerk System Outage（2026年3月10日）"
    url: "https://clerk.com/blog/2026-03-10-service-outage-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk公式Changelog: Improved resilience with automatic regional failover（2025-08-04）"
    url: "https://clerk.com/changelog/2025-08-04-regional-failover"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Middleware-based route protection bypass（2026-04-15）"
    url: "https://clerk.com/blog/middleware-based-route-protection-bypass"
    accessedAt: "2026-11-02"
  - label: "GitHub Security Advisory: GHSA-vqx2-fgx2-5wq9（CVE-2026-41248）"
    url: "https://github.com/clerk/javascript/security/advisories/GHSA-vqx2-fgx2-5wq9"
    accessedAt: "2026-11-02"
  - label: "GitHub: clerk/javascript"
    url: "https://github.com/clerk/javascript"
    accessedAt: "2026-11-02"
---

Clerkは、Webやモバイルのアプリに「サインアップ」「サインイン」「プロフィール」の画面と、その裏のユーザー管理をまとめて組み込むサービスだ。[Supabase](/ja/articles/supabase)や[Firebase](/ja/articles/firebase)がデータベースの付属品として認証を持つのに対し、Clerkは認証とユーザー管理そのものを主役にして、画面の部品から売る。比較の相手になりやすい[Auth0](/ja/articles/auth0)が、標準のログイン画面（Universal Login）を自社の認可サーバーに置き、アプリからそこへリダイレクトさせる設計を基本にするのに対して、Clerkの画面はアプリの中に置かれる。この記事は、2026年11月2日に読んだ料金ページ、ドキュメント、公式ブログ、障害の事後報告から、その仕組みと収益の構造を見ていく。当サイトはClerkを運用した体験を書いているのではなく、公開されている一次情報を読み合わせている。

## サービス解説

Clerkの出発点は「コンポーネントが新しいAPIになる」という主張だった。2022年11月30日の公式ブログは、顧客の95%以上が `<SignUp/>`、`<SignIn/>`、`<UserProfile/>` の3つの部品を「すべて」使っていると書き、部品はバックエンドのAPIと出来上がった画面を兼ねるので、APIだけより多くの価値を渡せると説明している。共同創業者のColin SidotiとBraden Sidotiの兄弟が書いた2021年のシード調達の記事は、メールで登録した人がGoogleでログインしようとして2つ目のアカウントができる、パスワード再設定の流れで多要素認証が1要素に落ちる、といった「開発者がよく作り込む間違い」を挙げ、それを完成品の画面でなくすことを売りにしていた。

:::fact
公式ブログに載る資金調達と規模の数字を並べる（いずれも2026-11-02閲覧）。

| 発表日 | ラウンド | 金額 | 主な出資者 | 発表時の規模 |
| --- | --- | --- | --- | --- |
| 2021年7月1日 | シード | 400万ドル | S28 Capital | 8カ月で社員2人から15人に |
| 2022年11月30日 | シード（追加） | 620万ドル | Andreessen Horowitz | 顧客の95%超が3つの部品をすべて使う |
| 2023年3月22日 | シリーズA | 1,500万ドル | Madrona | 管理するユーザーが100万人を超えた |
| 2024年1月18日 | シリーズB | 3,000万ドル | CRV、Stripe | エンドユーザー1,600万人超、1秒に1件以上の新規登録 |
| 2025年10月15日 | シリーズC | 5,000万ドル | Menlo、AnthropicのAnthology Fund | 1万5,000超のアプリで2億人超のユーザー |

5回の発表額を当サイトが足すと1億520万ドルになる。評価額や売上は、確認した公式ページには書かれていない。シリーズAの記事には、Auth0の取締役だったMadronaのKaran Mehandru氏が取締役に入り、VercelのCEOのGuillermo Rauch氏とAuth0の元CROのDave Wilner氏が新たな出資者に加わったことが書かれている。2025年12月4日の公式ブログは、法人カードのRampが公表した2025年12月の一覧で、顧客数の伸びが4番目に速いソフトウェアの提供元になったと伝える。2026年10月23日のChangelogは「10万を超える稼働中のアプリケーションを守っている」と書く。シリーズCの「1万5,000超のアプリ」とは数え方が違うとみられ、伸び率として比べることはできない。
:::

製品の範囲は、認証から外へ広がってきた。シリーズBの記事は、資金を「認証（ユーザーが誰か）」から「認可（何をしてよいか）」へ広げるために使うと書き、Stripeと組んでプランに応じて機能を開け閉めする仕組みを作ると予告した。それが今のClerk Billingだ。いまの公式サイトは製品を、ユーザー認証、マルチテナント（Organizations）、エンタープライズ認証（SSOとDirectory Sync）、Billing、自社の顧客にClerkを白ラベルで配るPlatformに分けて並べる。

:::fact
公式の料金ページ（2026-11-02閲覧）のプランは4つで、表示はすべて米ドル、税抜きだ。標準規約は「料金にはいかなる国・地域の税も含まれない」とし、付加価値税などの税は顧客が負担すると定める。日本円の料金表や日本向けの料金ページは確認できなかった。

| 項目 | Hobby | Pro | Business | Enterprise |
| --- | --- | --- | --- | --- |
| 月額（月払い） | 無料 | 25ドル | 300ドル | 個別見積もり |
| 月額（年払い） | 無料 | 20ドル | 250ドル | 年払いのみ |
| 含まれるMRU | 1アプリ5万 | 1アプリ5万、超過は従量 | 同左 | 個別 |
| ダッシュボードの席 | 3まで | 3まで | 10（追加1席月20ドル） | 個別 |
| SSO接続 | なし | 1アプリ1つ（追加は月75ドル〜） | 同左 | 個別 |
| セッションの長さ | 7日に固定 | 5分〜10年で設定可 | 同左 | 同左 |
| ログの保存 | 1日 | 7日 | 30日（管理操作のログも） | 個別 |
| 主な違い | 支払い方法の登録不要、ソーシャルログインは3つまで | MFA、パスキー、Clerk表記の削除、SMS認証 | SOC 2報告書、IP制限、高度な不正対策 | 稼働率99.99%のSLA、HIPAAのBAA |

どのプランでもアプリの数は無制限で、ユーザーデータは制限なく書き出せる。HobbyのメールサポートはBilling・登録・不正利用の問い合わせに限られる。BusinessのPriority supportは「応答時間のSLAはない」と注記されている。
:::

:::fact
料金の数え方の中心がMRUだ。料金ページは「Clerkは月間アクティブユーザー（MAU）ではなく、定着したユーザーに課金する」と書き、MRUを「登録した日から少なくとも1日たったあと、その月にアプリを訪れたユーザー」と定義する。登録から24時間を過ぎてもう一度サインインしない限りアクティブとは数えない仕組みを「First Day Free」と呼び、「登録して二度と戻らない人は決して請求されない」と説明する。組織の単位も同じ考え方で、Monthly Retained Organization（MRO）は、メンバーが2人以上いて、そのうち1人以上がその月のMRUである組織を指す。
:::

:::pull
Clerkの請求書に載るのは、登録した人ではなく、戻ってきた人だ。
:::

::scorecard

## UX分析

ClerkのUXは、開発者が最初の10分で見る画面と、本番に出すときに見る画面の2つに分けると分かりやすい。前者は徹底して軽く、後者には認証という仕事の重さがそのまま残っている。

- **アカウントを作る前にアプリが動く**。公式の `auth.md` は、AIエージェントに向けて、認証なしの `POST /v1/accountless_applications` で開発用アプリと鍵を受け取り、あとから人が自分のワークスペースに「引き取る」手順を書いている。CLIでは `npx clerk@latest init` がこれを行い、フレームワークを見分けてSDKを入れ、鍵を環境変数のファイルに書く。Core 3のChangelogには2026年8月付けの編集注記があり、以前の「Keyless mode」は廃止され、この `clerk init` に置き換わったと書かれている。
- **部品の自由度は3段階**。公式ドキュメントは抽象度を、完成品のコンポーネント、フックなどの低レベルの部品で組む「custom flows」、直接のFrontend APIの順に説明する。完成品は「CSSはどこでも変えられるが、HTMLの構造と、認証の流れの論理や順序は変えられない」。2026年3月3日のCore 3では `useSignIn()` などのフックが作り直され、状態やエラーをフック側が持つようになった。公式ブログはこれを、AIが画面を素早く作る時代に「完全に自分のUIを持ちたい」利用者のためだと説明している。
- **無料のHobbyでは本番向けの機能が一部閉じている**。多要素認証、パスキー、生体認証、ユーザーのBAN、ブロックリストはPro以上だ。セッションは7日に固定され、ソーシャルログインは3種類まで。一方で、開発用インスタンスではProの機能をすべて試せる。料金ページのFAQは、試用期間の代わりにこの仕組みを用意しているとし、本番でアップグレードが要る機能にはダッシュボードで印が付くと書く。
- **上限を超えても、すぐには止まらない**。Hobbyで5万MRUを超えた場合、または追加料金なしの枠である100MROを超えた場合は、アップグレードまで1カ月の猶予があり、その間アプリは動き続ける。
- **開発と本番は別の世界**。開発用インスタンスのユーザーは本番用インスタンスへ移せない。開発環境では、ブラウザのセッション状態をCookieではなくURLのクエリ（`__clerk_db_jwt`）で運ぶ。公式ドキュメントはこれを本番には安全でないとして、「開発環境を本番にデプロイしてはいけない」と明記している。本番では、FAPIを自分のドメインのサブドメイン（例: `clerk.example.com`）にCNAMEで置く必要がある。
- **入るのも出るのも、手順が公開されている**。移行のガイドは、一括で取り込む方法と、旧システムと並行して少しずつ移す「trickle migration」の2つを示し、取り込み用のオープンソースのツールを用意している。パスワードのハッシュ方式を指定して取り込め、場合によってはbcryptへ透過的に作り直す。Clerkから出るときは、ダッシュボードからハッシュ化されたパスワードを含むCSVを書き出せる。料金ページも「データは常にあなたの管理下にあるべきだ」と書く。
- **レート制限は小さめに切られている**。Frontend APIはIPアドレス単位で、サインインとサインアップの開始が10秒に5回、検証の試行が10秒に3回。Backend APIはインスタンス単位で、本番が10秒に1,000回、開発が10秒に100回。ユーザーのメタデータ更新は1ユーザーあたり10秒に10回だ。大量の取り込みでは、この上限が作業時間を決める。

全体として、Clerkは「認証のことを考えずに済む」体験を売り、その約束はかなりの程度守られている。代わりに、考えなくてよかった部分の判断は、Clerkが選んだ既定値として部品に埋め込まれている。部品の流れの順序を変えたくなったときは、完成品を手放して自分で組む段に降りることになる。

## 技術構成

::techstack

Clerkの技術的な核は、セッションの持ち方にある。公式ドキュメントは、データベースを毎回引く「状態を持つ認証」と、署名付きトークンだけで判断する「状態を持たない認証」の長所と短所を並べたうえで、その間をとる自社の方式を詳しく説明している。

:::fact
公式ドキュメント「How Clerk works」（2026-11-02閲覧）によれば、ログインに成功すると、Clerkはデータベースにセッションを記録し、2種類の署名付きJWTを発行する。

| 項目 | client token | session token |
| --- | --- | --- |
| Cookie名 | `__client` | `__session` |
| 置き場所 | FAPIのドメイン（例: `clerk.example.com`） | アプリのドメイン。サブドメインとは共有しない |
| 寿命 | セッションの長さ（Cookieの期限はブラウザ次第） | 60秒 |
| HttpOnly | あり | なし（クライアントのSDKが読むため） |
| 役割 | 認証状態の正本。ログインのたびに `rotating_token` を回してセッション固定攻撃を防ぐ | アプリのサーバーが署名を検証して、ユーザーIDなどを取り出す |

SDKは50秒ごと（通信の遅れに10秒の余裕を見る）にFAPIへ新しいsession tokenを取りに行く。タブを閉じて5分後に戻った場合のように、更新が止まって期限が切れていると、クライアント描画のアプリではSDKがFAPIに直接問い合わせる。サーバー描画のアプリではブラウザのCookieをサーバーから送れないので、サーバーがいったんブラウザをFAPIへリダイレクトさせて新しいトークンを受け取る。Clerkはこれを「handshake」と呼ぶ。ドキュメントは、JWTの期限を1週間や1カ月にすると盗まれたときにその期間ずっと悪用されうるが、60秒なら攻撃者が使う前に切れていることが多いと説明している。
:::

:::guess
この方式は、アプリの開発者から見ると「状態を持たない認証」の手軽さで使える。サーバーはJWTの署名を確かめるだけで済み、JWKSの取得にはレート制限がない。その代わり、1分ごとの更新、Cookieの置き場所、handshakeのリダイレクトという複雑さは、すべてClerkのFAPIの側に集められている。言い換えると、アプリのリクエストのたびにClerkが応答しなくてもよいが、利用者のブラウザは1分に1回ずつClerkに話しかけ続ける。どの程度の負荷になるかは公開されていないが、Clerkの可用性が、ログインの瞬間だけでなくセッションを保つ間ずっと問われる設計とみられる。下に見る障害の報告が「セッションを保つ仕組み」を何度も話題にするのは、このためだと考えられる。
:::

Clerkは自社の基盤について、事後報告の中でかなり具体的に書いている。2026年3月の報告は「普段は取引先の名前を出さないが、失敗した操作がその会社に固有のものなので名前を出す」と前置きして、Google Cloud SQLの名を挙げた。

:::fact
公式ブログの事後報告とChangelog（2026-11-02閲覧）から、2025年以降の主な障害を並べる。

| 日付 | 何が起きたか | 公式が挙げた原因と対応 |
| --- | --- | --- |
| 2025年6月26日 | 6時16分〜7時01分（UTC）、全サービスが停止 | 計算基盤の障害。これを受けて2025年8月4日に、重要な部分の自動リージョンフェイルオーバーを導入 |
| 2025年8月28日 | 約22分と約12分の2回、APIの遅延とエラーが増加 | 1つの顧客のアプリの認証エンドポイントへの分散型クレデンシャルスタッフィング攻撃。session tokenの発行は通常どおり続いた |
| 2025年9月14〜18日 | 断続的なリクエスト失敗と遅延 | クラウド事業者によるPostgreSQLの自動マイナーアップグレードで接続の付与が速くなり、Cloud Runの各コンテナが15分ごとに一斉に接続を作り直すようになった。接続プールの設定を直して解消 |
| 2026年2月10日 | 17時06分（UTC）から2時間32分、権威DNSの名前解決ができなくなった | DNSプロバイダーの障害。キャッシュや予備のDNSサーバーにより、成功したリクエストは想定量の95%超を保った |
| 2026年2月19日 | 約90分の停止。トラフィックの95%超が429を返した | PostgreSQLの自動ANALYZEで実行計画が切り替わった。手動のANALYZEで復旧 |
| 2026年3月10日 | 15時57分〜16時23分（UTC）の停止 | Cloud SQLの仮想マシンのライブマイグレーションが失敗し、ディスクの遅延が急増した |

3月の報告によれば、ClerkはCloud SQLを2021年に選び、保守を含めて99.99%の可用性SLAが付くEnterprise Plusの高可用性構成で使ってきた。2025年9月にもライブマイグレーションが原因の大きな障害があり、Googleは80人を超える社員を関わらせて数カ月かけて対応し、2026年1月にデータベースの「固定」を解いた。3月の障害はその後に起きた。報告は、今後は保守のたびにレプリカを昇格させる方式に移り、Googleがライブマイグレーションを恒久的に止める手段を出さない限り、別のデータベースの提供元に移るか、PostgreSQLを自前で運用することを「積極的に検討している」と書く。冒頭には「エンジニアの大半を信頼性の改善に移し、当面の最優先とする。新機能の遅れについて謝罪する」とある。
:::

:::fact
障害の間もログイン済みの利用者を締め出さない仕組みも、事後報告から読み取れる。2月19日の報告によれば、データベースが「落ちてはいないが劣化している」状態では、PostgreSQLの停止を想定した従来のSession APIのフェイルオーバーが働かなかった。数カ月かけて作っていた新しい仕組みを手動で有効にし、コアのSession APIの外でsession tokenを発行して、多くの利用者がアプリを使える状態に戻した。ただし、サインインとアカウント管理のAPIは使えないままだった。3月10日の障害では、16時10分に「Origin Outage Mode」を有効にしてセッション管理を動かし続けた。報告は、内部のサービスが返した429がそのまま外に出ていたことも問題として挙げ、Clerkの状態を正しく判断できるよう500に改めるとしている。
:::

:::fact
セキュリティの面では、公式の概要ページ（2026-08-17最終確認と記載）が、SOC 2 Type 2とHIPAAを2022年5月6日から保持し、EU・英国・スイスとの間はData Privacy Frameworkで個人データを移転すると書く。ISO 27001は持っておらず、基盤の提供元であるGoogle CloudとCloudflareが持つと明記している。地域ごとのデータ保管（データレジデンシー）は「提供していない」とされ、データは米国の基盤に置かれ、副処理者もすべて米国にあるという。概要ページは、Clerk自身のシステムや顧客データの侵害は公に報告されておらず、記録にあるのはオープンソースのSDKの脆弱性で、それぞれ数日で修正してCVEと勧告を公開したと書く。その1つが2026年4月15日に公開されたCVE-2026-41248で、Next.js・Nuxt・Astroのミドルウェアで `createRouteMatcher` を使ったルート保護をすり抜けられるもので、GitHubの勧告では深刻度は「critical」だった。
:::

:::guess
データベースが1つの事業者の1つのマネージド製品に集まっている構成は、Clerk自身が書く「実績のある技術を選ぶ保守的な方針」の帰結とみられる。それが2025年から2026年にかけて裏目に出たことを、Clerkは隠さず書いている。報告の率直さは、同じ種類のサービスと比べても目立つ。一方で、データレジデンシーがないことは、利用者の側の判断材料として残る。日本の利用者の個人データも米国に置かれるため、個人情報の越境移転の扱いを社内でどう整理するかは、導入の前に確認が要る論点になると考えられる。法的な評価は事業者ごとに異なるので、ここでは事実の記述にとどめる。
:::

## ビジネスモデル

Clerkの収益は、プランの月額、MRUやMROの従量、SSO接続などの接続単位の課金、不正対策の判定回数、Billingの取扱高に対する料率から成る。2026年2月5日の改定は、そのどこに重みを置くかを組み替えたものだった。

:::fact
公式Changelog「New plans, more value」（2026-02-05）は、2023年11月以来の大きな料金改定だとして、次のように説明している。

- 値下げや機能の追加: 無料のMRUを1アプリ1万から5万に引き上げ、すべてのプランでアプリを無制限にした。Enhanced Authenticationアドオンを廃止し、多要素認証やサテライトドメインなどの多くをPro（年払いで月20ドルから）に含めた。月5回までのなりすまし（impersonation）を無料にし、量に応じた割引と年払いの割引を入れた。
- 値上げになる変更: ダッシュボードの席を4つ以上使うにはBusiness（年払いで月250ドルから）が必要になった。SAMLとOIDCのエンタープライズ接続は、旧アドオンでは無制限だったものがProで従量になり、3接続以上のアプリは費用が増える。SOC 2とHIPAAの監査資料の入手はBusiness以上に限った。

有料の顧客が4月から始まる請求期間までに新しいプランを選ばなければ、Clerkが自動で移行すると書かれている。改定の目的は「認証の基本を安くし、差別化された機能と実際に運用費がかかる部分に料金を集める」ことだという。
:::

:::fact
料金ページ（2026-11-02閲覧）の従量単価をまとめる。

| 対象 | 含まれる量 | 超過分の単価（月額） |
| --- | --- | --- |
| MRU | 1アプリ5万 | 5万1〜10万は1人0.02ドル、10万1〜100万は0.018ドル、100万1〜1,000万は0.015ドル、それ以上は0.012ドル |
| MRO（B2B Authenticationの拡張アドオン、月100ドル・年払い85ドル） | 1アプリ100 | 101〜1,000は1組織1ドル、1,001〜1万は0.90ドル、1万1〜10万は0.75ドル、それ以上は0.60ドル |
| SSO接続（SAML・OIDC・EASIE） | 1アプリ1つ | 2〜15は1接続75ドル、16〜100は60ドル、101〜250は48ドル |
| Directory Sync接続（SCIM・Google Workspace） | 1アプリ1つ | SSOと同じ単価。課金は2027年1月1日から |
| 不正対策の判定（Protect） | 月1万回 | 100万回までは1回0.002ドル |
| サテライトドメイン | なし | 1つ10ドル |
| SMS認証 | なし | 米国・カナダは1通0.01ドル、その他は市場価格 |
| Clerk Billing | — | 取扱高の0.7%（Stripeの2.9%＋0.30ドルとは別） |

アドオンを入れない場合でも、組織の機能は1アプリ100MRO・1組織20人までは無料で使える。スタートアップ向けには、Stripe Atlas、Y Combinator、South Park Commons、OnDeckを通じた割引があり、公開から1年以内、調達額500万ドル以下が条件とされている。
:::

料金の性格を見るために、当サイトが料金ページの単価で規模感を計算した。

:::fact
料金ページの単価（月払い）をもとにした当サイトの計算で、税、SMS、Protectの判定、Billingの料率は含まない。

| 想定 | 内訳 | 月額 |
| --- | --- | --- |
| 個人のSaaS、MRU 8,000、本番でMFAとパスキーを使う | Pro | 25ドル |
| 消費者向けアプリ、MRU 10万 | Pro 25ドル＋5万人×0.02ドル | 1,025ドル |
| 同じアプリで、登録は月30万人あるが翌日以降に戻るのは10万人 | MRUで数えるので上と同じ | 1,025ドル |
| B2BのSaaS、MRU 2万、組織500、顧客企業のSSOが5社 | Pro 25ドル＋B2B拡張100ドル＋400組織×1ドル＋4接続×75ドル | 825ドル |
| 同じSaaSで、ダッシュボードを使う社員が4人になった | 上のProをBusiness 300ドルに置き換える | 1,100ドル |

3行目は、MRUの数え方が効く場面だ。4行目と5行目は、2026年2月の改定で費用が増えると公式が書いた2つの軸（エンタープライズ接続の従量と、席の数）にあたる。
:::

:::guess
MRUという単位は、Clerkが狙う顧客をはっきり映しているとみられる。料金ページのFAQは自ら「B2Cに向いているか」を問い、有料の消費者向けアプリや定額課金の製品には合いやすいが、無料や広告収入のアプリ、1人あたりの売上が非常に低いアプリでは、無料枠を超えると高く感じるかもしれないと書く。その場合はSupabase AuthやFirebase Authのほうが安い可能性があるとまで認めている。定着した利用者に課金するということは、利用者が売上につながる事業ほど払いやすく、つながらない事業ほど重い。FAQの「定着が売上に結びつくときに最も正当化しやすい」という一文は、価格表の設計思想をそのまま説明している。
:::

:::guess
もう1つの読み方は、料金表の重心が個人開発者からB2BのSaaSへ移りつつあるというものだ。改定で無料のMRUは5倍になったが、値上げの対象になったのは、企業の顧客を持つSaaSが使う機能だった。エンタープライズ接続、Directory Sync、監査資料、席の数、IP制限、管理操作のログである。B2Bの顧客は利用者1人あたりの単価が高く、SSOのような機能に払う理由もはっきりしている。入口を広げて個人開発者とAIエージェントに最初の1行を書かせ、売上は企業向けの機能で立てる、という二段構えの設計と推測される。
:::

その入口として、Clerkは2026年にAIエージェントへの対応を前面に出した。公式ブログ「Clerk for the AI era」（2026-03-03）は「アプリをプロンプトで作るのが、かつてない簡単さになった」と書き、部品に加えて、エージェントが使いやすいAPIとツールに投資すると宣言した。

:::fact
公式のllms.txtとChangelog（2026-11-02閲覧）によれば、ClerkはMCPサーバー（`mcp.clerk.com`）、npmで入れるCLI、フレームワーク別の手順をエージェントに渡すskillsを公開している。2026年10月15日には、MCPサーバーからClerkのアカウントにサインインして、アプリの作成、認証の設定、ユーザーの管理、本番インスタンスの用意まで、利用者が承認した範囲で操作できるようになった。10月30日には、Personal Agent Protocolと標準のOAuthを土台に、エージェントの身元を確かめて認証する「Clerk for Agent Auth」をプライベートベータとして発表した。シリーズCの記事は、出資を主導した1社がAnthropicのAnthology Fundで、資金の使い道の第一にエージェントの身元（Agent Identity）を挙げている。不正対策のClerk Protectは2026年10月23日に正式に発表され、VPNやTorからの登録の遮断、国別の制限、IPごとの登録数の制限などがBusinessに入った。
:::

:::guess
エージェントへの対応には2つの意味があるとみられる。1つは、AIのコーディングツールが「認証はClerkで」と選ぶ確率を上げる販売の経路としての意味だ。アカウントなしで鍵を発行する `auth.md` は、エージェントが人の手を待たずに最初のアプリを作れるようにしたもので、ここで作られたアプリが引き取られ、本番に出て、MRUが5万を超えたところで請求が始まる。もう1つは、エージェントそのものを「新しい種類のユーザー」として管理する製品としての意味で、こちらはまだプライベートベータの段階にある。前者は今の売上の入口を広げ、後者は将来の課金単位を探していると読める。
:::

Clerkは、認証という地味で失敗の許されない仕事を、画面の部品という目に見える形にして売ってきた会社だ。料金表は定着したユーザーと企業向けの接続に重心を置き、技術は60秒のトークンを回し続けることで安全性と手軽さを両立させている。その手軽さの裏側で、2025年から2026年の障害は、部品の向こうにある1つのデータベースが、何万ものアプリのログイン画面を同時に止めうることを示した。Clerkがエンジニアの大半を信頼性に振り向けた判断が、次の1年でどんな形に現れるか。データベースの提供元を変えるのか、自前で運用するのか。その答えは、MRUの単価よりも、Clerkを選ぶ理由を大きく左右するとみられる。
