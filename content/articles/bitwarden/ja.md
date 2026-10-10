---
service: "Bitwarden"
title: "「基本は永久に無料」のパスワード管理が、有料の値段を改めた — ソースをGitHubで公開し、Azureの上で動き、AIエージェントに鍵を渡す手順まで公開するBitwardenを解剖する"
description: "Bitwardenは、2016年に生まれたオープンソースのパスワード管理サービスだ。無料プランで台数も件数も無制限に同期でき、1,500万人超の利用者と8万社超の企業が使う。サーバーはC#と.NET、クライアントはTypeScriptとAngular、共通のSDKはRustで書かれ、ソースコードはGitHubでAGPL/GPLと自社ライセンスの二本立てで公開される。クラウドはMicrosoft Azureの米国とEUの地域で動き、1つのDockerイメージで自宅のサーバーにも置ける。2026年1月にはPremiumの料金を年19.80ドルに改め、6月にはAIエージェントに資格情報を渡すためのオープンソースの規約Agent Access SDKを出し、9月には特権アカウントの貸し出しを始めた。料金ページ、公式ブログ、セキュリティ白書、ヘルプ、GitHub、当サイトの実観測から、端末で鍵を作る暗号の設計、オープンソースとライセンスの線引き、無料で配って企業に売る稼ぎ方までを解剖する。"
lead: "Bitwardenの公式ブログは、2022年に1億ドルの出資を受けたとき、「基本の無料版は、無制限の件数と台数で、永久に」と書いた。2026年1月、同じ会社は有料のPremiumの値段を年19.80ドルに改め、既存の契約者には次の更新で一度きりの25%の割引を付けた。無料は変えず、有料の値段を変える。ソースコードをすべて公開し、Microsoft Azureの上で動き、自宅のサーバーにも置けるパスワード管理が、どこで稼ぎ、AIエージェントの時代に何を守ろうとしているのかを、公開情報だけで解剖する。"
category: saas
tags: [password-manager, security, open-source, end-to-end-encryption, azure, rust, ai-agent]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://bitwarden.com/"
# Affiliate link placeholder: no public affiliate program was found (https://bitwarden.com/affiliates/
# returned 404 on 2026-10-10; https://bitwarden.com/partners/become-a-partner/ offers only MSP,
# reseller and technology partnerships by application form). Nothing to enable for now. If Bitwarden
# ever opens a referral or affiliate program, paste its tracking link here and keep ja/en identical.
# affiliate:
#   url: "https://<bitwarden-affiliate-link>"
#   program: "Bitwarden Affiliate Program"
vendor: "Bitwarden, Inc."
origin: "US"
heroTheme: "bitwarden"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 3.5 }
techStack:
  - layer: "サーバー"
    name: ".NET (ASP.NET Core, C#) / SQL Server (T-SQL)"
    confidence: confirmed
    evidence: "GitHubのbitwarden/serverのREADME（2026-10-10確認）に、サーバーはC#で.NET CoreとASP.NET Coreを使って書かれ、データベースはT-SQL/SQL Serverで書かれていると明記。リポジトリの言語の統計もC#とTSQLが大半を占める"
    evidenceUrl: "https://github.com/bitwarden/server"
  - layer: "クラウド基盤"
    name: "Microsoft Azure (Azure Kubernetes Service, Transparent Data Encryption)"
    confidence: confirmed
    evidence: "公式のセキュリティ白書に、クラウドのデータベースは暗号化された保管庫をMicrosoft Azureの基盤の上に置き、Azureの保存時の暗号化Transparent Data Encryption（TDE）を設定していること、すべてのデータをMicrosoftが管理するAzure Kubernetes Service（AKS）などのサービスで処理・保存することを明記。セキュリティFAQは、クラウドのサーバーを米国とEUのMicrosoft Azureに置くと書く"
    evidenceUrl: "https://bitwarden.com/help/bitwarden-security-white-paper/"
  - layer: "クライアント"
    name: "TypeScript + Angular / Electron (web vault, browser extension, desktop, CLI)"
    confidence: confirmed
    evidence: "公式の開発者向けドキュメント「Web Clients Architecture」に、Web保管庫、ブラウザ拡張、デスクトップアプリ（Electron製）、CLIが1つのリポジトリで共通のコードを使い、見た目のあるクライアントはAngularのコードを共有すると明記。GitHubのbitwarden/clientsの言語の統計はTypeScriptが大半で、デスクトップのpackage.jsonはelectron 43系と@angular/core 21系に依存する"
    evidenceUrl: "https://contributing.bitwarden.com/architecture/clients/"
  - layer: "共通SDK"
    name: "Rust (sdk-internal)"
    confidence: confirmed
    evidence: "GitHubのbitwarden/sdk-internal（2026-10-10確認）は言語の統計の大半がRustで、LICENSEはGPL v3とBitwarden Software Development Kit License v2.0のどちらかを選べる二本立てと書く。2024年10月のclientsのIssue #11611で、創業者が、SDKをGPLと両立する形に整理するためにこのリポジトリを分けたと説明した"
    evidenceUrl: "https://github.com/bitwarden/sdk-internal"
  - layer: "モバイル"
    name: "Swift (iOS) / Kotlin (Android)"
    confidence: confirmed
    evidence: "GitHubのbitwarden/android（2026-10-10確認）はKotlinで書かれたPassword ManagerとAuthenticatorのAndroidアプリで、ライセンスはGPL-3.0。bitwarden/iosは同じくSwiftで書かれ、GPL-3.0"
    evidenceUrl: "https://github.com/bitwarden/android"
  - layer: "暗号"
    name: "AES-256 (CBC + HMAC) / PBKDF2-SHA256 (600,000 iterations) / Argon2id"
    confidence: confirmed
    evidence: "公式のセキュリティ白書に、端末間の暗号化はAES-CBC 256ビットとHMACによる認証、塩を加えたハッシュ、PBKDF2 SHA-256またはArgon2idの鍵導出関数を使い、すべての鍵は利用者の端末のクライアントで生成・管理し、暗号化はすべて端末で行うと明記。アカウントの作成時はPBKDF2を既定の60万回で回し、後からArgon2idに切り替えられる"
    evidenceUrl: "https://bitwarden.com/help/bitwarden-security-white-paper/"
  - layer: "AIエージェント向けの資格情報"
    name: "Agent Access SDK (Rust, Apache-2.0)"
    confidence: confirmed
    evidence: "公式ブログ（2026-06-10）に、AIエージェントに保管庫全体を見せずに資格情報を渡すためのオープンソースの規約Agent Access SDKをgithub.com/bitwarden/agent-accessで公開したと明記。GitHubのリポジトリ（2026-10-10確認）はRustで書かれ、ライセンスはApache-2.0"
    evidenceUrl: "https://github.com/bitwarden/agent-access"
  - layer: "自社運用"
    name: "Docker (Bitwarden lite: MSSQL / PostgreSQL / SQLite / MySQL)"
    confidence: confirmed
    evidence: "公式ヘルプ「Install and deploy Bitwarden lite」に、1つのDockerイメージで動かす個人・自宅向けの配布形態で、MSSQLのほかPostgreSQL、SQLite、MySQL/MariaDBを選べ、Raspberry PiなどのARMでも動くこと、標準の配布はMSSQLが必要なこと、2025年12月にBitwarden Unifiedがベータを終えてliteに改名したことを明記"
    evidenceUrl: "https://bitwarden.com/help/install-and-deploy-lite/"
  - layer: "Web保管庫の配信"
    name: "Azure Storage (vault.bitwarden.com / vault.bitwarden.eu)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-10）で、vault.bitwarden.com と vault.bitwarden.eu は x-ms-request-id と x-ms-version: 2018-03-28 のヘッダーと 0x8DF... 形式のETagを返し、Azure Storageから静的に配信されているとみられる。api.bitwarden.com は x-rate-limit-limit: 1m などのレート制限のヘッダーを返した"
sources:
  - label: "Bitwarden: About（会社概要・経営陣・利用者数）"
    url: "https://bitwarden.com/about/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Pricing"
    url: "https://bitwarden.com/pricing/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: 料金（日本語版）"
    url: "https://bitwarden.com/ja-jp/pricing/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden launches enhanced premium plan（2026-01-21）"
    url: "https://bitwarden.com/blog/bitwarden-launches-enhanced-premium-plan/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Accelerating value for Bitwarden users - Bitwarden raises $100 million（2022-09-06）"
    url: "https://bitwarden.com/blog/accelerating-value-for-bitwarden-users-bitwarden-raises-usd100-million/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Accelerating innovation at Bitwarden（創業者のCIO就任とCTOの採用・2026-06-17）"
    url: "https://bitwarden.com/blog/accelerating-innovation-at-bitwarden/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Shadow AI agents are already in your organization（Agent Access SDK・2026-06-10）"
    url: "https://bitwarden.com/blog/shadow-ai-agents-how-to-secure-credential-access-with-agent-access-sdk/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden Privileged Controls（2026-09-29）"
    url: "https://bitwarden.com/blog/bitwarden-privileged-controls-secure-your-most-sensitive-accounts-in-minutes/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden upholds high security standards with annual third-party audits（2025-08-14）"
    url: "https://bitwarden.com/blog/third-party-security-audit/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Compliance（SOC 2 Type II・SOC 3・ISO 27001・HIPAA）"
    url: "https://bitwarden.com/compliance/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Bitwarden Security White Paper"
    url: "https://bitwarden.com/help/bitwarden-security-white-paper/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Security FAQs（米国とEUのAzure）"
    url: "https://bitwarden.com/help/security-faqs/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Server Regions"
    url: "https://bitwarden.com/help/server-geographies/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Install and deploy Bitwarden lite"
    url: "https://bitwarden.com/help/install-and-deploy-lite/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Become a Partner（MSP・再販・技術パートナー）"
    url: "https://bitwarden.com/partners/become-a-partner/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Newsfeed（2026-07-28の1,500万人・8万社のプレスリリース、2026-09-09のCPO就任など）"
    url: "https://bitwarden.com/newsfeed/"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/server（README・LICENSE）"
    url: "https://github.com/bitwarden/server"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/clients"
    url: "https://github.com/bitwarden/clients"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/sdk-internal"
    url: "https://github.com/bitwarden/sdk-internal"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/agent-access"
    url: "https://github.com/bitwarden/agent-access"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/clients Issue #11611「Desktop version 2024.10.0 is no longer free software」（2024-10）"
    url: "https://github.com/bitwarden/clients/issues/11611"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Contributing Docs: Web Clients Architecture"
    url: "https://contributing.bitwarden.com/architecture/clients/"
    accessedAt: "2026-10-10"
---

Bitwardenは、パスワードやパスキー、カード番号などを暗号化して預かり、ブラウザの拡張機能、デスクトップ、スマートフォンのあいだで同期するパスワード管理サービスだ。当サイトが解剖した[1Password](/ja/articles/1password)と同じ市場にいるが、立ち位置は対照的で、無料プランで台数も件数も無制限に使え、ソースコードはすべてGitHubで公開され、自分のサーバーに置くこともできる。日本語のサイトと料金ページもある。その会社が2026年、有料プランの値段を改め、AIエージェントに資格情報を渡す仕組みをオープンソースで出した。

## サービス解説

Bitwardenは、個人向けのFree・Premium・Families、法人向けのTeams・Enterpriseを売り、開発者向けにシークレットを管理するSecrets Managerとパスキー認証のPasswordless.devを並べる。

:::fact
会社概要のページ（2026-10-10時点）によれば、Bitwardenは2016年に創業し、本社はカリフォルニア州サンタバーバラで、Bitwarden, Inc.は8bit Solutions LLCの親会社にあたる。利用者は180か国超の1,500万人以上、企業は8万社超、対応する言語は50以上。経営陣はCEOのMichael Sullivan氏、創業者で最高イノベーション責任者のKyle Spearrin氏、CTOのAndrew Hartnett氏らで、公式ブログ（2026-06-17）によれば、創業者のSpearrin氏はOne IdentityのCTOだったHartnett氏をCTOに迎えて自身は新製品の開発に軸足を移し、会社は研究開発への投資を50%増やすとした。ニュース一覧には、2026年7月28日の「利用者1,500万人と8万社を突破」のプレスリリースと、9月9日のMary Writz氏の最高製品責任者への就任が並ぶ。2022年9月6日の公式ブログによれば、会社は投資会社PSGを筆頭に、既存の投資家Battery Venturesも加わる1億ドルの成長投資を受け、PSGは少数株主として取締役会に加わった。同じ記事は、無制限の件数と台数で使える基本の無料版を永久に続けること、オープンソースと自社運用を守ることを約束した。
:::

:::fact
料金ページ（2026-10-10確認・米ドル・年払い・税別）によれば、Freeは台数も件数も無制限で、パスキーの保存と利用、もう1人との無料の共有、暗号化してデータを送るBitwarden Sendを含む。Premiumは月1.65ドル（年19.80ドル）で、認証アプリの統合、ファイルの添付、緊急アクセス、セキュリティのレポートが付く。Familiesは最大6人で月3.99ドル（年47.88ドル）。法人向けのTeamsは1人あたり月4ドルで、イベントログ、ディレクトリの同期、SCIMによる自動のプロビジョニングを含み、Enterpriseは1人あたり月6ドルで、SSO、ポリシー、自社運用、保管庫の危険を可視化するAccess Intelligenceに加えて、全員に家族向けのFamiliesが無料で付く。日本語の料金ページも同じ米ドルの価格を示す。公式ブログ（2026-01-21）によれば、PremiumとFamiliesに保管庫の健全性の警告、弱いパスワードの助言、5倍の添付の容量（合計5GB）、2要素認証の鍵の上限の倍増を足し、「拡張した価値を反映して」料金を改めた。既存の契約者には更新の15日前に通知し、Premiumと一部の古いFamiliesの契約者には次の年の更新に限り25%の割引を付ける。基本の無料プランは変えないとした。
:::

:::pull
鍵は端末で作り、サーバーは暗号文しか持たない。その設計をソースごと公開して無料で配り、企業に売る。
:::

::scorecard

## UX分析

Bitwardenの体験は、「信じなくていい」ことを売りにしている。暗号の設計は白書に、実装はGitHubに書いてあり、自分のサーバーで動かすこともできる。その代わり、鍵の強さは利用者のマスターパスワードに託される。

- **無料で台数を数えない**。無料プランで件数も台数も無制限に同期でき、[1Password](/ja/articles/1password)のように14日間の試用のあとで必ず払う設計とは入口が違う。公式ブログは2022年の出資のときから「基本の無料版は永久に」と繰り返し、2026年1月の料金の改定でも、無料は変えずに有料の中身と値段を変えた。
- **地域を選んで預ける**。ヘルプ「Server Regions」によれば、クラウドは米国とEUの2つの地域に分かれ、登録のときに「ログイン先」で選ぶ。アカウントや組織は最初に作られた地域にしか存在しないため、後から移すことはできない。当サイトの実観測（2026-10-10）でも、vault.bitwarden.com と vault.bitwarden.eu は別々に応答した。
- **自宅のサーバーにも置ける**。ヘルプによれば、個人や自宅向けのBitwarden liteは1つのDockerイメージで動き、データベースにSQLiteやPostgreSQL、MySQLを選べ、Raspberry PiのようなARMの機器でも動く。ただし、自社運用でPremiumや法人のプランの機能を使うには、先にクラウドで契約してライセンスのファイルを取り出し、自分のサーバーに読み込ませる必要がある。
- **鍵の導出は自分で調整できる**。白書によれば、マスターパスワードはメールアドレスを塩にしたPBKDF2を既定で60万回通して鍵になり、後からArgon2idに変えたり、回数を増やしたりできる。1Passwordの「Secret Key」のような端末だけが持つ2つ目の鍵はなく、保管庫の安全はマスターパスワードの強さに依る設計だ。白書は、鍵はすべて端末で作り、サーバーに送るのはそこから別に導いたハッシュだけだと説明する。
- **値段の変え方に手順がある**。2026年1月の改定では、更新の15日前の通知、既存の契約者への一度きりの25%の割引、何が増えて何が変わらないかを並べたFAQを公式ブログに置いた。無料の利用者には何も変わらないと明記したうえで、有料の価値を増やした分を値段に乗せる説明の仕方だ。

## 技術構成

::techstack

:::fact
GitHubのbitwarden/serverのREADME（2026-10-10確認）によれば、サーバーはC#で.NET CoreとASP.NET Coreを使って書かれ、データベースはT-SQL/SQL Serverで書かれている。LICENSEのファイルは、リポジトリのコードがAGPL v3.0とBitwarden License v1.0のどちらかで提供され、既定はAGPLで、Bitwardenライセンスのコードは/bitwarden_licenseのディレクトリにだけあると書く。クライアントの開発者向けドキュメントによれば、Web保管庫、ブラウザ拡張、Electron製のデスクトップアプリ、CLIは1つのリポジトリにあり、見た目のあるクライアントはAngularのコードを共有する。モバイルはAndroidがKotlin、iOSがSwiftで、どちらもGPL-3.0。共通のSDKはRustで書かれたsdk-internalで、GPL v3とBitwarden SDK License v2.0のどちらかを選べる。2024年10月17日に開かれたclientsのIssue #11611は、デスクトップ版2024.10.0がBitwardenのSDKのライセンスを含み、自由ソフトウェアでなくなったと指摘した。創業者のKyle Spearrin氏は10月20日に、SDKとクライアントは別のプログラムでGPLと両立する使い方を目指していると答え、24日に、GPLのライセンスだけで組み立てられるようにsdk-internalという新しいリポジトリに分けたと報告し、Issueは25日に閉じられた。
:::

:::fact
公式のセキュリティ白書によれば、クラウドのデータベースはMicrosoft Azureの上にあり、Azureの保存時の暗号化TDEを設定し、データの処理と保存にはMicrosoftが管理するAzure Kubernetes Serviceなどを使う。セキュリティFAQは、クラウドのサーバーを米国とEUのMicrosoft Azureに置くと書く。白書は、端の側でWAFとDDoS対策、キャッシュを担うCDNを使うと書くが、事業者の名前は出していない。当サイトの実観測（2026-10-10）では、vault.bitwarden.com と vault.bitwarden.eu はAzure Storageに特有のx-ms-request-idとx-ms-versionのヘッダーを返し、api.bitwarden.com は1分あたりのレート制限のヘッダーを返した。公式ブログ（2025-08-14）によれば、会社はCure53やInsight Risk Consultingのような外部の専門家による年次のセキュリティ監査を、サーバー、Webアプリケーション、各クライアント、ソースコードに対して行い、HackerOneのバグ報奨金プログラムも運営する。コンプライアンスのページは、Web、ブラウザ拡張、デスクトップの各クライアントと中核のアプリケーションやライブラリに対するソースコードの監査と侵入テストを毎年行うと書き、SOC 2 Type IIとSOC 3、ISO 27001、HIPAAへの対応を掲げる。
:::

:::guess
サーバーがC#とSQL Serverで書かれていることと、クラウドがMicrosoft Azureであることは、同じ系統の技術をそろえて運用を簡単にする選択とみられる。白書がTDEのような保存時の暗号化を説明しているのは、端末で暗号化された保管庫をさらにAzureの側でも暗号化する二重の守りで、サーバーが盗まれても解けないという前提を、設計と運用の両方で支えているとみられる。SDKをRustに寄せたのは、Web、デスクトップ、モバイルの各クライアントで同じ暗号の実装を使い回すためと推測され、1Passwordが共通のコアをRustで書いた方向と重なる。AGPL/GPLの既定と自社ライセンスのディレクトリを分ける作り方は、監査できる透明性を保ちながら、企業向けの機能だけを有償にするオープンコアの線引きと読める。2024年のIssueに創業者が1週間で答えてリポジトリを分けたことからは、オープンソースの信用が事業の土台であることを会社自身が意識していると推測される。
:::

## AIエージェントに鍵を渡す

:::fact
公式ブログ（2026-06-10）によれば、CSAの調査で54%の組織に承認されていない「シャドーAI」のエージェントがすでにあり、AIエージェントは仕事を終えるために.envファイルやチャットの履歴、パスワード管理の中から資格情報を探し、ファイルを無視するよう指示されていても必要になれば読むと説明する。そのうえで会社は、エージェントに保管庫全体を見せずに資格情報を渡すオープンソースの規約Agent Access SDKをgithub.com/bitwarden/agent-accessで公開した。エージェントが資格情報を求めると、SDKがエージェントを認証して端末間で暗号化した経路を開き、要求は利用者の端末に届いて、人が承認か拒否を決める。GitHubのリポジトリ（2026-10-10確認）はRustで書かれ、ライセンスはApache-2.0で、オープンな規約とCLIとSDKを含む。公式ブログ（2026-09-29）によれば、法人向けのPrivileged Controlsが非公開のプレビューとして始まり、特権アカウントの資格情報を、期間と理由を示して借りる「貸し出し」、承認やIPアドレスの確認を条件にするアクセスのルール、貸し出しの終了時の自動のパスワードの更新（開始時はMicrosoft Entra IDに対応）を提供する。
:::

:::guess
エージェントへの資格情報の受け渡しを、人が端末で承認する形にしたのは、鍵を端末でしか扱わないBitwardenの設計を、人ではない利用者にもそのまま延ばした形とみられる。規約をApache-2.0で公開したのは、他社のパスワード管理やエージェントの開発者にも同じ手順を使わせて事実上の標準にし、「エージェントに.envを読ませない」市場で先に名前を置く狙いと推測される。特権アカウントの貸し出しは、[1Password](/ja/articles/1password)が「AIの信頼の層」として売る方向と重なり、パスワード管理の2社が、次の売り場を社員ではなくエージェントの資格情報に見ていることがうかがえる。
:::

## ビジネスモデル

稼ぎ方は、個人向けのPremiumとFamilies、法人向けのTeamsとEnterpriseの年払いの料金だ。無料プランとオープンソースで利用者を集め、企業の席と、MSPや再販の経路で稼ぐ。

:::fact
パートナーのページ（2026-10-10確認）は、Bitwardenを顧客に運用代行で提供するMSP、ライセンスを再販する再販パートナー、連携を作る技術パートナーの3種類を申し込みフォームで募る。ニュース一覧には、2026年9月8日のオーストラリアの販売代理店Leader Cloudとの提携が並ぶ。公式のアフィリエイトのページは見当たらず、当サイトの実観測（2026-10-10）では bitwarden.com/affiliates/ は404を返した。料金ページによれば、Enterpriseの利用者全員にFamiliesが無料で付き、会社概要のFAQは、事業は有料の法人向けと個人向けのプランに基づくと書く。2022年の1億ドルの出資の記事は、基本の無料版、オープンソース、自社運用、法人向けの高度な機能という方針を、出資のあとも守ると約束した。
:::

:::guess
無料で台数無制限のプランは、利用者を集める広告と、職場に持ち込んでもらう入口の両方を担っているとみられる。1Passwordが法人のBusinessの利用者に家族向けのプランを付けるのと同じく、BitwardenもEnterpriseの全員にFamiliesを付けており、個人の習慣と会社の契約を往復させる設計は2社で共通している。2026年のPremiumの料金の改定は、無料の利用者の数は保ったまま、払う人からの売上を増やす判断と推測される。MSPと再販の経路を広げるのは、営業の人数を増やさずに中小企業の席を積み上げるためで、オープンソースと自社運用の選択肢が、調達の条件が厳しい公共や規制産業の顧客にも売りやすくしているとみられる。
:::

2016年に生まれたBitwardenは、鍵を端末で作る暗号の設計を白書に書き、実装をGitHubに置き、無料で台数無制限に使わせて、1,500万人と8万社を集めた。2026年には有料の値段を改め、AIエージェントに鍵を渡す規約を公開し、特権アカウントの貸し出しを始めた。信じてもらうのではなく確かめてもらう作り方が、人だけでなくエージェントの資格情報まで預かる商売の土台になるかを試す年だ。
