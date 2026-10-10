---
title: "1Password vs Bitwarden — 必ず払わせて「2つ目の鍵」で守る非公開企業と、無料で配ってソースごと見せるオープンソース"
description: "パスワード管理の定番、1PasswordとBitwardenを、2026年10月10日時点の公式の料金ページ、セキュリティ白書、プレスリリース、公式ブログ、ヘルプ、GitHubだけで比較する。1Passwordは無料プランを持たず、個人向けは月3.99ドル（初年度は2.99ドル）から、ARRは4億ドルを超え、売上の75%以上が法人から来る。Bitwardenは無料プランで台数も件数も無制限に同期でき、Premiumは年19.80ドル、1,500万人超の利用者と8万社超の企業が使い、ソースコードはGitHubで公開される。鍵の設計では、1Passwordが端末だけが持つ128ビット超のSecret Keyを足すのに対し、Bitwardenはマスターパスワードから導いた鍵に託し、導出関数を利用者が選べる。規模、値段の付け方、鍵の設計、オープンソースと自社運用、AIエージェントの資格情報、紹介の仕組み、技術構成の重なりを同じ項目で並べる。"
lead: "当サイトの1Passwordの記事は「サーバーが盗まれても解けない金庫」の話で、Bitwardenの記事は「信じなくていい、確かめればいい」という話だった。どちらも鍵を端末で作り、サーバーには暗号文しか置かない。それでも、無料プランの有無、2つ目の鍵、ソースコードの公開、自社運用の可否で、2つのサービスは正反対の場所に立つ。両社の公式情報を同じ日に読み、規模、値段、鍵、公開の度合い、AIエージェントへの備えの違いを解剖する。"
slugA: "1password"
slugB: "bitwarden"
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
sources:
  - label: "1Password公式: 料金ページ（個人・ファミリー）"
    url: "https://1password.com/pricing/password-manager"
    accessedAt: "2026-10-10"
  - label: "1Password公式: 料金ページ（Teams Starter Pack・Business）"
    url: "https://1password.com/business-pricing"
    accessedAt: "2026-10-10"
  - label: "1Password公式プレスリリース: ARR4億ドル突破と経営陣の拡充（2025-11-06）"
    url: "https://1password.com/press/2025/nov/1password-strengthens-leadership-amid-growth-milestone"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: Secret Key"
    url: "https://agilebits.github.io/security-design/apsk.html"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: A deeper look at keys（PBKDF2 65万回）"
    url: "https://agilebits.github.io/security-design/deepKeys.html"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: Server infrastructure（Amazon Aurora）"
    url: "https://agilebits.github.io/security-design/infra.html"
    accessedAt: "2026-10-10"
  - label: "1Password公式ブログ: 1Password 8: The Story So Far（Rustの共通コア・2021-08-12）"
    url: "https://1password.com/blog/1password-8-the-story-so-far"
    accessedAt: "2026-10-10"
  - label: "1Password公式: Affiliate program"
    url: "https://1password.com/affiliate"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Pricing"
    url: "https://bitwarden.com/pricing/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden launches enhanced premium plan（2026-01-21）"
    url: "https://bitwarden.com/blog/bitwarden-launches-enhanced-premium-plan/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Accelerating value for Bitwarden users - Bitwarden raises $100 million（2022-09-06）"
    url: "https://bitwarden.com/blog/accelerating-value-for-bitwarden-users-bitwarden-raises-usd100-million/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: About（利用者数・経営陣）"
    url: "https://bitwarden.com/about/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Bitwarden Security White Paper"
    url: "https://bitwarden.com/help/bitwarden-security-white-paper/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Server Regions"
    url: "https://bitwarden.com/help/server-geographies/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Help: Install and deploy Bitwarden lite"
    url: "https://bitwarden.com/help/install-and-deploy-lite/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Shadow AI agents are already in your organization（Agent Access SDK・2026-06-10）"
    url: "https://bitwarden.com/blog/shadow-ai-agents-how-to-secure-credential-access-with-agent-access-sdk/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden Blog: Bitwarden Privileged Controls（2026-09-29）"
    url: "https://bitwarden.com/blog/bitwarden-privileged-controls-secure-your-most-sensitive-accounts-in-minutes/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden: Become a Partner"
    url: "https://bitwarden.com/partners/become-a-partner/"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/server（README・LICENSE）"
    url: "https://github.com/bitwarden/server"
    accessedAt: "2026-10-10"
  - label: "GitHub: bitwarden/sdk-internal（Rust）"
    url: "https://github.com/bitwarden/sdk-internal"
    accessedAt: "2026-10-10"
---

[1Password](/ja/articles/1password)と[Bitwarden](/ja/articles/bitwarden)は、パスワードやパスキーを端末で暗号化してから預かり、ブラウザ、デスクトップ、スマートフォンで同期するパスワード管理サービスとして、並べて比べられることが多い。1Passwordは2005年にカナダで生まれ、14年間を外部資本なしで経営したあと、企業向けのアクセス管理へ広がった。Bitwardenは2016年にオープンソースのパスワード管理として生まれ、無料プランと自社運用を看板に、個人から企業へ広がった。2本の解剖記事を重ねると、2社の違いは暗号の強さよりも、誰に払わせ、何を見せるかに出ている。

この記事は、両社の公式の料金ページ、セキュリティ白書、プレスリリース、公式ブログ、ヘルプ、GitHubを2026年10月10日に読み直してまとめた。当サイトは両方のアプリを同じ条件で使って使い心地や入力の補完の精度を測ってはおらず、体感の優劣は扱わない。

## 規模：ARRを公表する非公開企業と、利用者の数を公表するオープンソース

どちらも非公開の企業で、決算は出さない。1PasswordはARRと法人顧客の数を、Bitwardenは利用者と企業の数を節目ごとに発表する。

:::fact
1Passwordのプレスリリース（2025-11-06）によれば、同社はARR（年間経常収益）で4億ドルを超え、フリーキャッシュフローは黒字で、売上の75%以上が法人から来る。法人顧客は18万社で、Fortune 100の30%超が含まれ、13億を超える人と機械の資格情報を守り、100万人超の開発者が使う。法人向けの料金ページは「20万社の企業」が信頼すると書く。Bitwardenの会社概要（2026-10-10時点）によれば、Bitwardenは2016年に創業し、180か国超の1,500万人以上の利用者と8万社超の企業が使う。公式ブログ（2022-09-06）によれば、投資会社PSGを筆頭に1億ドルの成長投資を受け、PSGは少数株主として取締役会に加わった。売上やARRは公表していない。
:::

| 項目 | 1Password | Bitwarden |
| --- | --- | --- |
| 創業 | 2005年（カナダ） | 2016年（米国サンタバーバラ） |
| 資本 | 非公開、2019年以降に外部資本を受け入れ | 非公開、2022年にPSG主導で1億ドル |
| 公表している規模 | ARR4億ドル超、売上の75%以上が法人 | 利用者1,500万人超、企業8万社超、売上は非公表 |
| 法人顧客 | 18万社（料金ページは20万社） | 8万社超 |
| ソースコード | 非公開（SDKなど一部をGitHubで公開） | GitHubで公開（AGPL/GPLと自社ライセンスの二本立て） |

:::pull
1Passwordは全員に払わせ、端末だけが持つ2つ目の鍵で守る。Bitwardenは無料で配り、鍵の作り方をソースごと見せる。
:::

## 値段の付け方：必ず払うか、無料から始めるか

:::fact
1Passwordの料金ページ（2026-10-10確認・米ドル・年払い）によれば、個人向けのIndividualは月3.99ドル、家族を5人まで招待できるFamiliesは月5.99ドルで、新規の顧客が年払いにすると初年度はそれぞれ2.99ドルと4.49ドルになる。無料プランはなく、14日間の無料トライアルから始まる。法人向けは、10人までのTeams Starter Packが月24.95ドル（年299.40ドル）、Businessが1人あたり月8.99ドル（年107.88ドル）で、Businessの利用者全員に家族向けのFamiliesが無料で付く。Bitwardenの料金ページ（同日確認・米ドル・年払い・税別）によれば、無料プランで件数も台数も無制限に同期でき、Premiumは月1.65ドル（年19.80ドル）、最大6人のFamiliesは月3.99ドル（年47.88ドル）、法人向けのTeamsは1人あたり月4ドル、Enterpriseは1人あたり月6ドルで、Enterpriseの利用者全員にFamiliesが無料で付く。公式ブログ（2026-01-21）によれば、Premiumの料金はこの年19.80ドルに改められ、既存の契約者には次の年の更新に限り25%の割引が付いた。
:::

| 項目 | 1Password | Bitwarden |
| --- | --- | --- |
| 無料プラン | なし（14日間の無料トライアル） | あり（件数・台数とも無制限） |
| 個人向け | 月3.99ドル（初年度2.99ドル） | Premium 月1.65ドル（年19.80ドル） |
| 家族向け | 月5.99ドル（初年度4.49ドル）、家族を5人まで招待 | 月3.99ドル（年47.88ドル）、最大6人 |
| 小規模チーム | Teams Starter Pack 月24.95ドル（10人まで） | Teams 1人あたり月4ドル |
| 法人 | Business 1人あたり月8.99ドル | Enterprise 1人あたり月6ドル |
| 法人の利用者への家族向け特典 | Businessの全員にFamilies | Enterpriseの全員にFamilies |

:::guess
1Passwordは無料の入口を持たず、個人でも最初から払ってもらう形で、売上の4分の3以上を占める法人向けと同じ「有料の製品」として個人を扱っているとみられる。Bitwardenは無料で台数無制限に使わせ、職場に持ち込んでもらう入口を広げ、払う人からの売上を2026年の改定で増やしにいったと読める。両社がそろって法人の利用者に家族向けのプランを付けているのは、個人の習慣と会社の契約を往復させる狙いが共通しているからと推測される。
:::

## 鍵の設計：2つ目の鍵を足すか、マスターパスワードに託すか

:::fact
1Passwordのセキュリティ白書によれば、マスターパスワードに加えて、端末だけが持つ26文字のSecret Keyを鍵の導出に混ぜ、Secret Keyの取りうる値は2の128乗をわずかに超える。マスターパスワードはPBKDF2-HMAC-SHA256を65万回通し、白書はサーバーが盗まれてもSecret Keyなしでは保管庫を解けない設計だと説明する。データはAWSのAmazon Auroraに置かれる。Bitwardenのセキュリティ白書によれば、マスターパスワードはメールアドレスを塩にしたPBKDF2 SHA-256を既定で60万回通して鍵になり、利用者は後からArgon2idに切り替えたり回数を増やしたりでき、端末間の暗号化はAES-CBC 256ビットとHMACによる認証で行う。鍵はすべて端末で作り、サーバーに送るのは別に導いたハッシュだけで、暗号化した保管庫はMicrosoft Azureに置かれ、Azureの保存時の暗号化TDEも設定される。
:::

| 項目 | 1Password | Bitwarden |
| --- | --- | --- |
| 鍵の材料 | マスターパスワード + Secret Key（端末だけが持つ、128ビット超） | マスターパスワード（メールアドレスを塩に） |
| 鍵導出関数 | PBKDF2-HMAC-SHA256 65万回 | PBKDF2 SHA-256 既定60万回、またはArgon2id（利用者が選択） |
| サーバー側の保管 | AWS Amazon Aurora | Microsoft Azure（TDEで保存時も暗号化） |
| 地域 | 米国・カナダ・EUのAWS | 米国・EUのAzure（登録時に選ぶ） |

:::guess
2つ目の鍵を端末に置く1Passwordの設計は、弱いマスターパスワードを使う利用者がいても、サーバーから盗まれた暗号文の総当たりを事実上不可能にする守りとみられる。その代わり、Secret Keyを失うと誰も保管庫を開けない。Bitwardenは2つ目の鍵を持たず、導出関数と回数を利用者に選ばせる形で、安全の度合いをマスターパスワードの強さと設定に委ねているとみられる。前者は「迷わせない代わりに逃げ道を狭める」設計、後者は「確かめられる代わりに利用者に判断を委ねる」設計と読める。
:::

## オープンソースと自社運用

:::fact
Bitwardenのサーバーのリポジトリ（GitHub）のREADMEによれば、サーバーはC#で.NET CoreとASP.NET Coreを使って書かれ、データベースはSQL Server。LICENSEは、既定をAGPL v3.0とし、自社ライセンスのコードは/bitwarden_licenseのディレクトリにだけあると書く。共通のSDKのsdk-internalはRustで書かれ、GPL v3と自社のSDKライセンスのどちらかを選べる。ヘルプによれば、個人や自宅向けのBitwarden liteは1つのDockerイメージで動き、SQLiteやPostgreSQL、MySQLを選べ、自社運用で有料の機能を使うにはクラウドで契約してライセンスのファイルを読み込ませる。1Passwordは、公式ブログ（2021-08-12）によれば共通のバックエンドのライブラリをRustで書き、SDKをGitHubで公開しているが、当サイトが解剖した時点で製品本体のソースコードや自社運用の提供は公式の料金ページに載っていない。
:::

| 項目 | 1Password | Bitwarden |
| --- | --- | --- |
| 製品のソースコード | 非公開（SDKなどは公開） | 公開（サーバー・クライアント・モバイル・SDK） |
| ライセンス | — | AGPL v3 / GPL v3 を既定に、企業向けの機能は自社ライセンス |
| 自社運用 | 料金ページに記載なし | 標準の配布（MSSQL）とlite（1つのDockerイメージ） |

## AIエージェントの資格情報

:::fact
1Passwordのプレスリリース（2025-11-06）は、AIのシステムが社員と同じアクセスを持ちながら同じ監視を受けていないことを新しい危険とし、人でもAIでも、すべてのパスワードと鍵と資格情報を安全に追跡できる「AIのための信頼の層」を打ち出した。PerplexityのブラウザCometの立ち上げのパートナーになったとも書く。Bitwardenの公式ブログ（2026-06-10）は、AIエージェントが.envファイルやパスワード管理から資格情報を探す振る舞いを前提に、エージェントに保管庫全体を見せずに資格情報を渡すオープンソースの規約Agent Access SDKをGitHubで公開した（Rust、Apache-2.0）。要求は利用者の端末に届き、人が承認する。2026年9月29日のブログによれば、特権アカウントの資格情報を期間と理由を示して借りるPrivileged Controlsが非公開のプレビューとして始まった。
:::

:::guess
2社とも、次の売り場を社員の席ではなく、エージェントや機械の資格情報に見ているとみられる。1Passwordは法人向けのアクセス管理の延長として、自社の製品の中で「信頼の層」を売る方向で、Bitwardenは規約を公開して、他社のエージェントや管理ツールにも同じ手順を使わせる方向と読める。無料で配るか、必ず払わせるかという2社の違いが、AIエージェントへの備え方にもそのまま表れている。
:::

## 紹介の仕組み

:::fact
1Passwordのアフィリエイトのページ（2026-10-10確認）によれば、Commission Junctionで運営するプログラムは、登録1件につき2ドルと、初年または初月の支払いの25%（最低2ドル）を払う。Bitwardenには公式のアフィリエイトのページが見当たらず、当サイトの実観測（2026-10-10）では bitwarden.com/affiliates/ は404を返した。パートナーのページは、MSP、再販、技術パートナーの3種類を申し込みフォームで募る。
:::

## 技術構成の重なりは、RustとElectronの2件

このページの下に出る技術構成の比較は、2本の記事のtechStackを機械的に突き合わせたものだ。共通と判定されたのはRustとElectronの2件で、使い方は近い。1Passwordは公式ブログによれば、すべてのプラットフォームで共有するバックエンドのライブラリ「Core」をRustで書き、デスクトップはElectronの上に載せる。Bitwardenは共通のSDKであるsdk-internalをRustで書き、デスクトップアプリはElectron製で、Web保管庫やブラウザ拡張とAngularのコードを共有する。暗号の実装を1つの言語に寄せて各クライアントで使い回す作り方は、2社でほぼ同じだ。違いは土台で、1PasswordはAWSのAmazon Aurora、BitwardenはMicrosoft AzureとSQL Serverの上にあり、サーバーの言語も、BitwardenがC#と.NETだと公開しているのに対し、1Passwordは採用ページでGoを挙げている。

選ぶ側の問いは2つに分けられる。迷いたくない、家族や会社の全員に同じ守りを配りたい、Secret Keyのような2つ目の鍵で弱いパスワードの穴まで塞ぎたいなら、全員が払う前提の1Passwordが向く。まず無料で始めたい、ソースコードや監査の結果を自分で確かめたい、自分のサーバーに置きたいなら、Bitwardenが向く。どちらを選んでも、2026年のパスワード管理は、人のパスワードを預かる道具から、AIエージェントに鍵を渡す手順を決める場所へと変わりつつある。
