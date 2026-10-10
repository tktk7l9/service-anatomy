---
service: "1Password"
title: "サーバーが盗まれても解けない金庫 — 1Passwordは「2つ目の鍵」とRustの共通コアで、14年の自己資金経営からARR4億ドルの企業向けセキュリティへ進んだ"
description: "パスワード管理の1Password。カナダで2005年に生まれ、14年間外部資本なしで経営したあと、2019年から計3回の調達で評価額68億ドルに達し、2025年11月にARR4億ドルを超えた。サーバーに渡さない128ビット超の「Secret Key」、全プラットフォームで共有するRustのコア、AWS Auroraに置く暗号文、.envに平文を書かせないCLIとSSHエージェント、WebAssemblyで動くSDK、そして25%のアフィリエイトまでを、公式のセキュリティ白書・ブログ・開発者ドキュメント・採用ページから解剖する。"
lead: "1Passwordのセキュリティ白書には、悪意のあるデータベース管理者がサーバーの端末に座り、テーブル名とカラム名の一覧を手にしている——という最悪の想定がそのまま書いてある。それでも金庫は開かない、と白書は続ける。鍵の半分は利用者の端末にしか存在しないからだ。個人向けのパスワード管理アプリから始まった1Passwordは、この設計を土台に、開発者のシークレット、社員の端末、AIエージェントの資格情報までを守る企業向けの事業へ広がった。その設計と稼ぎ方を解剖する。"
category: saas
tags: [password-manager, security, developer-tools, rust, end-to-end-encryption]
publishedAt: "2026-09-28"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://1password.com/"
# Affiliate link placeholder: the owner must join the 1Password affiliate program
# (https://1password.com/affiliate, run on Commission Junction / CJ) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<1password-cj-affiliate-link>"
#   program: "1Password Affiliate Program (CJ)"
vendor: "AgileBits Inc."
origin: "CA"
heroTheme: "1password"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "クライアント共通コア"
    name: "Rust (1Password Core)"
    confidence: confirmed
    evidence: "公式ブログ「1Password 8: The Story So Far」（2021-08-12）に、共有のバックエンドライブラリをRustで書き、macOS・iOS・Windows・Android・Linux・ブラウザ拡張・Webアプリで使うと明記。サーバーとの通信・データベース・権限の強制・暗号処理をUIの手前まですべてコアに寄せたと説明している"
    evidenceUrl: "https://1password.com/blog/1password-8-the-story-so-far"
  - layer: "UIフレームワーク"
    name: "Electron (Windows / Linux / macOS) / SwiftUI (iOS) / Android View"
    confidence: confirmed
    evidence: "同じ公式ブログに、Windows・Linux向けにElectronを使い、iOSはSwiftUIに全面的に移行、AndroidはJetpack Composeを見送ってAndroid Viewを採用、macOSはSwiftUI版の開発を止めてElectron版に一本化したと明記"
    evidenceUrl: "https://1password.com/blog/1password-8-the-story-so-far"
  - layer: "暗号・認証"
    name: "2SKD (PBKDF2-HMAC-SHA256 650,000 rounds + Secret Key via HKDF) / SRP / AES-256-GCM"
    confidence: confirmed
    evidence: "公式のセキュリティ白書に、アカウントパスワードをPBKDF2-HMAC-SHA256で65万回ハッシュし、端末で生成した26文字のSecret KeyからHKDFで作った値とXORして鍵を得る「2SKD」と、パスワードをサーバーに送らないSRP認証、AES256-GCMでの暗号化を明記"
    evidenceUrl: "https://agilebits.github.io/security-design/deepKeys.html"
  - layer: "データベース"
    name: "Amazon Aurora (MySQL-compatible)"
    confidence: confirmed
    evidence: "公式のセキュリティ白書の「サーバー基盤」の章に、すべてのデータベース情報をAWSのAuroraインスタンス（MySQL互換のリレーショナルデータベース）に保存すると明記。暗号化されずに残るカラム（氏名・メールアドレス・チーム名など）も一覧で開示している"
    evidenceUrl: "https://agilebits.github.io/security-design/infra.html"
  - layer: "SDK"
    name: "WebAssembly core (Extism / wazero) + desktop-app IPC library"
    confidence: confirmed
    evidence: "公式のGo SDK（GitHub: 1Password/onepassword-sdk-go）は、go.modでExtismとwazeroに依存し、internal/wasm/core.wasm を同梱する。デスクトップアプリ経由で認証する場合は、アプリに入っている共有ライブラリ（libop_sdk_ipc_client）を探して呼び出す実装になっている"
    evidenceUrl: "https://github.com/1Password/onepassword-sdk-go"
  - layer: "開発者向けシークレット"
    name: "1Password CLI (op run / op inject) / SSH agent / Service Accounts / Connect"
    confidence: confirmed
    evidence: "公式の開発者ドキュメントに、op://<vault>/<item>/<field> 形式のシークレット参照を.envや設定ファイルに書き、op run・op injectで実行時に解決する方式、秘密鍵を1Passwordの外に出さずに署名するSSHエージェント、CI向けのService Accountsと自社ホスト型のConnectサーバーを明記"
    evidenceUrl: "https://www.1password.dev/cli/secret-references/"
  - layer: "バックエンド"
    name: "Go"
    confidence: likely
    evidence: "公式の採用ページ（Developer, Rust・2026年掲載）が歓迎条件に「Goでのバックエンドサービス構築の豊富な経験」と「クラウド基盤（AWS）の実務経験」を挙げる。他の職種もバックエンド言語の例の先頭にGoを置く。サーバー本体の言語を明言した公式ページは見当たらない"
    evidenceUrl: "https://jobs.ashbyhq.com/1password/c247ea98-bf31-45f0-a38b-1fe255909538"
  - layer: "クラウド・リージョン"
    name: "AWS (us-east-1 / ca-central-1 / eu-central-1)"
    confidence: likely
    evidence: "当サイトのDNS観測（2026-09-28）で、my.1password.comはAWS us-east-1、my.1password.caはca-central-1、my.1password.euはeu-central-1（フランクフルト）のEC2アドレスに解決された。白書がAuroraの利用を明記していることとも整合する"
  - layer: "マーケティングサイト"
    name: "Next.js on Vercel (behind Cloudflare) / Contentful"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー観測（2026-09-28）で、1password.comが server: cloudflare・x-powered-by: Next.js・x-vercel-id を返し、ページ内の画像やOGP画像が Contentful の配信ドメイン（ctfassets.net）に置かれていた。製品本体（my.1password.com）はこれらのヘッダーを返さず、別の基盤で動いている"
sources:
  - label: "Wikipedia: 1Password（公開年・資金調達・買収・ARRの年表）"
    url: "https://en.wikipedia.org/wiki/1Password"
    accessedAt: "2026-09-28"
  - label: "1Password公式: Meet the team — Dave Teare（2005年創業・共同創業者）"
    url: "https://1password.com/company/meet-the-team/dave-teare"
    accessedAt: "2026-09-28"
  - label: "TechCrunch: 1Passwordが6億2,000万ドルのシリーズCを調達、評価額68億ドル（2022-01-19）"
    url: "https://techcrunch.com/2022/01/19/1password-series-c-funding/"
    accessedAt: "2026-09-28"
  - label: "1Password公式プレスリリース: ARR4億ドル突破と経営陣の拡充（2025-11-06）"
    url: "https://1password.com/press/2025/nov/1password-strengthens-leadership-amid-growth-milestone"
    accessedAt: "2026-10-10"
  - label: "Kolide公式ブログ: 1PasswordによるKolideの買収（2024-02-20）"
    url: "https://www.kolide.com/blog/1password-acquires-kolide"
    accessedAt: "2026-09-28"
  - label: "1Password公式ブログ: Trelicaの買収（2025-01-07）"
    url: "https://1password.com/blog/1password-acquires-trelica"
    accessedAt: "2026-09-28"
  - label: "1Password公式ブログ: 1Password 8: The Story So Far（2021-08-12）"
    url: "https://1password.com/blog/1password-8-the-story-so-far"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: Secret Key"
    url: "https://agilebits.github.io/security-design/apsk.html"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: A deeper look at keys（2SKD・PBKDF2 65万回）"
    url: "https://agilebits.github.io/security-design/deepKeys.html"
    accessedAt: "2026-10-10"
  - label: "1Password Security Design White Paper: Server infrastructure（Amazon Aurora）"
    url: "https://agilebits.github.io/security-design/infra.html"
    accessedAt: "2026-10-10"
  - label: "1Password公式ブログ: SDKのベータ公開（2024-05-14）"
    url: "https://1password.com/blog/sdk-beta"
    accessedAt: "2026-09-28"
  - label: "GitHub: 1Password/onepassword-sdk-go（公式Go SDK）"
    url: "https://github.com/1Password/onepassword-sdk-go"
    accessedAt: "2026-09-28"
  - label: "1Password Developer: シークレット参照（op run / op inject）"
    url: "https://www.1password.dev/cli/secret-references/"
    accessedAt: "2026-09-28"
  - label: "1Password Developer: SSHエージェントとGitのコミット署名"
    url: "https://www.1password.dev/ssh/"
    accessedAt: "2026-09-28"
  - label: "1Password Developer: Secrets Automation（Service AccountsとConnectの比較）"
    url: "https://www.1password.dev/secrets-automation/"
    accessedAt: "2026-09-28"
  - label: "1Password公式: 料金ページ（個人・ファミリー）"
    url: "https://1password.com/pricing/password-manager"
    accessedAt: "2026-10-10"
  - label: "1Password公式: 料金ページ（Teams Starter Pack・Business）"
    url: "https://1password.com/business-pricing"
    accessedAt: "2026-10-10"
  - label: "1Password公式: Affiliate program"
    url: "https://1password.com/affiliate"
    accessedAt: "2026-10-10"
  - label: "1Password公式ブログ: Oktaのサポートシステム侵害と1Password（2023年）"
    url: "https://1password.com/blog/okta-incident"
    accessedAt: "2026-09-28"
  - label: "1Password公式: 採用ページ（Developer, Rust）"
    url: "https://jobs.ashbyhq.com/1password/c247ea98-bf31-45f0-a38b-1fe255909538"
    accessedAt: "2026-09-28"
  - label: "Bitwarden公式: 料金ページ（比較用）"
    url: "https://bitwarden.com/pricing/"
    accessedAt: "2026-10-10"
  - label: "Bitwarden公式ブログ: Bitwarden launches enhanced premium plan（比較用・2026年1月のPremiumの料金改定・2026-01-21）"
    url: "https://bitwarden.com/blog/bitwarden-launches-enhanced-premium-plan/"
    accessedAt: "2026-10-10"
---

パスワード管理アプリは、全部の鍵を1か所に集める道具だ。便利さと引き換えに、その1か所が破られたら終わる。1Passwordはこの弱点に、「提供元のサーバーが丸ごと盗まれても、金庫は開かない」という設計で答えてきた。そして同じ設計を、開発者のAPIキーや社員の端末、AIエージェントの資格情報を守る商売にまで広げている。

## サービス解説

1Passwordは、パスワード・パスキー・クレジットカード・メモなどを暗号化して保存し、ブラウザやアプリで自動入力するパスワードマネージャーだ。個人・家族向けのプランに加え、社員の資格情報を一元管理する企業向けのプラン、開発者のシークレットを扱うCLI・SSHエージェント・SDK、そして端末とSaaSのアクセスまで管理する「Extended Access Management（XAM）」を提供している。

:::fact
1Passwordの公式ページによれば、創業は2005年で、共同創業者はデイブ・ティアとサラ・ティア、ルスタム・カリモフとナタリア・カリモフの4人。Wikipediaによれば、最初の版は2006年に公開され、開発元はカナダのAgileBits Inc.だ。初めての外部資本は2019年11月、Accelが主導した2億ドルのシリーズAで、2021年に評価額20億ドルで1億ドル、2022年1月には評価額68億ドルで6億2,000万ドルのシリーズCを調達した。TechCrunchによれば、シリーズCを主導したのはICONIQ Growthで、Tiger Global・Lightspeed・Accelのほか、俳優のライアン・レイノルズやロバート・ダウニー・Jr.らも参加した。同記事は、有料の法人顧客が2021年7月のシリーズBの時点の9万社から10万社超に、従業員が475人から570人に増えたと伝えている。
:::

:::fact
2025年11月6日の公式プレスリリースによれば、1PasswordはARR（年間経常収益）4億ドルを超え、フリーキャッシュフローは黒字を保っている。法人顧客は18万社で、Fortune 100の30%超、Forbes AI 50の3分の2超が含まれ、収益の75%超が法人から来る。守っている資格情報は人間と機械のものを合わせて13億件超、利用する開発者は世界で100万人超という。買収では、2024年2月に端末の健全性を確かめるKolide（Kolideの公式ブログ）を、2025年1月にSaaSの利用実態とアクセスを管理するTrelica（1Passwordの公式ブログ）を傘下に入れ、これらがXAMの土台になった。
:::

:::pull
鍵の半分は、1Passwordのサーバーに一度も届かない。「提供元を信用しなくていい」ことが、そのまま製品の売り文句になっている。
:::

::scorecard

## UX分析

1PasswordのUXは、「安全のための手間を、最初の1回と見えない場所に寄せる」方向で設計されている。

- **2つ目の鍵を紙に刷らせる**。サインアップ時に端末で生成されるSecret Keyは、31種類の英大文字と数字から選んだ26文字で、組み合わせは2の128乗を超える。人が覚えられる長さではないので、1Passwordのアプリが端末に保存し、アカウント作成時には保存・印刷を強く勧められる「Emergency Kit」に控える。覚えるのはアカウントパスワード1つのままで、総当たりの前提そのものを壊している。
- **.envに平文を書かせない**。CLIでは、`.env` や設定ファイルに実際の値ではなく `op://<vault>/<item>/<field>` 形式の参照を書き、`op run` や `op inject` が実行時に値へ差し替える。参照だけのファイルはGitにコミットでき、平文のシークレットはリポジトリに残らない。
- **SSHの秘密鍵を外に出さない**。SSHエージェントは既存のSSHクライアントやGitに鍵を供給する役を担い、署名の要求はTouch IDやWindows Helloで承認する。秘密鍵そのものは1Passwordの外に出ず、Gitのコミット署名もアプリから設定できる。
- **CIには人のアカウントを使わせない**。CI/CDやサーバーには、人のアカウントとは切り離したService Accountsを使う。レート制限と要求数の上限がある代わりに、追加のサーバーが要らない。大量に読むなら、データを自社の環境にキャッシュするConnectサーバーを立てる。どちらもサブスクリプションに含まれる。
- **試すのは14日間の無料トライアルで**。料金ページに並ぶのは有料プランと14日間の試用で、Bitwardenのような無期限の無料プランは載っていない。

:::fact
公式ブログによれば、2023年9月29日、1Passwordは自社のOktaの管理画面で不審な操作を検知し、すぐに止めて調査した。原因はOktaのサポートシステムの侵害で、攻撃者はサポート用にやりとりされたHARファイルを悪用していた。1Passwordは同年10月、利用者のデータや社内外のほかのシステムが侵害された形跡はなかったと結論づけている。Wikipediaによれば、1Password 8では金庫を手元に保存する選択肢がなくなり、批判を受けた。
:::

## 技術構成

::techstack

:::fact
公式ブログ「1Password 8: The Story So Far」（2021年8月12日）によれば、1Passwordはそれまでプラットフォームごとに別々だった実装を捨て、共有のバックエンドライブラリをRustで書き直した。このコアはmacOS・iOS・Windows・Android・Linux・ブラウザ拡張・Webアプリで共有され、サーバーとの通信・データベース・権限の強制・暗号処理を、UIの手前まですべて引き受ける。UIはプラットフォームごとに選び、Windows・Linux・macOSはElectron、iOSはSwiftUI、AndroidはAndroid Viewを使う。公式のセキュリティ白書は、アカウントパスワードをPBKDF2-HMAC-SHA256で65万回ハッシュした値と、Secret KeyからHKDFで作った値をXORして鍵を導く「2SKD（2つの秘密による鍵導出）」を説明する。より新しいハッシュ方式を選ばなかった理由として、全クライアントで効率よく動く実装があること、特にWebブラウザのJavaScriptで遅すぎないことを挙げている。認証はパスワードをサーバーに送らないSRP方式で、データはAES256-GCMで暗号化される。
:::

:::fact
同じ白書の「サーバー基盤」の章は、すべてのデータベース情報をAWSのAurora（MySQL互換）に保存すると書き、暗号化されずに残るカラム——チーム名、利用者の氏名とメールアドレス、端末の機種やOS、IPアドレス、公開鍵など——を一覧で開示している。悪意のある管理者がテーブルの関係を書き換えて別人に項目を見せようとしても、金庫の鍵はその利用者の公開鍵で暗号化されているため復号できない、と説明する。公式のGo SDKは、Extismとwazeroを使ってWebAssemblyのコア（core.wasm）を動かし、デスクトップアプリで認証する場合はアプリに同梱された共有ライブラリを呼び出す作りになっている。
:::

:::guess
当サイトの観測（2026-09-28）では、my.1password.com・my.1password.ca・my.1password.eu がそれぞれAWSの米国東部・カナダ中部・フランクフルトのアドレスに解決された。国ごとにアカウントのドメインを分け、データを置く地域を利用者が選べる形にしているとみられる。法人顧客、とくにカナダや欧州の企業がデータの所在を求めることへの対応と推測される。また、SDKのコアがWebAssemblyで配られていることから、Rustで書いた共通コアをWebAssemblyにコンパイルし、Go・Python・JavaScriptの各SDKが同じ暗号処理を呼んでいる可能性が高い。言語ごとに暗号を実装し直さないことは、バグの入り口を1つに絞るという意味で、セキュリティ製品にとって速さ以上の意味を持つとみられる。
:::

:::guess
一方、サーバー側の言語を明言した公式の文書は見当たらない。公式の採用ページがRustの開発職の歓迎条件に「Goでのバックエンドサービス構築」と「AWS」を並べていることから、クライアントの共通コアはRust、サーバーはGoとAWSという分担になっているとみられる。サーバーは暗号文を保管して受け渡すだけで、復号の鍵を持たない設計なので、重い処理と守るべき秘密はクライアントのRustに寄せ、サーバーはスケールしやすい言語で素直に作る、という役割分担と推測される。
:::

## ビジネスモデル

1Passwordの収益は、個人・家族向けのサブスクリプションと、席数に応じた法人向けのサブスクリプションでできている。収益の4分の3超は法人から来る。

:::fact
公式の料金ページによれば、個人向けのIndividualは月3.99ドル、最大5人のFamiliesは月5.99ドルで、いずれも年払い。新規の顧客が1Password.comで直接年払いにすると、最初の1年はそれぞれ2.99ドル、4.49ドルになる。法人向けは、10人までのTeams Starter Packが月24.95ドル、Businessが1人あたり月8.99ドルで、SSO連携とWatchtower（漏えいや弱いパスワードの警告）を含む。Businessでは、利用者全員に個人用のFamiliesプランを無料で付ける。Enterpriseは個別見積もり。個人・家族向けとTeams Starter Pack・Businessには14日間の無料トライアルがあり、法人向けの料金ページは「20万社の企業」に使われていると掲げる。比較として、オープンソースの[Bitwarden](/ja/articles/bitwarden)は、無料プランで台数無制限に同期でき、PremiumはBitwardenの料金ページで年19.80ドル、法人向けのTeamsは1人あたり月4ドル。Bitwardenの公式ブログ（2026-01-21）によれば、Premiumの料金はこの年19.80ドルに改められ、既存の契約者には次の年の更新に限り25%の割引が付いた（改定前の価格は公式ブログに書かれていない）。
:::

:::fact
公式のアフィリエイトページによれば、1PasswordのアフィリエイトプログラムはCommission Junction（CJ）上で運営され、紹介したサインアップ1件につき2ドルと、最初の1年分または1か月分の支払いの25%（最低2ドル）が支払われる。個人・法人（B2C・B2B）どちらの読者を持つパブリッシャーも応募でき、テクノロジー・セキュリティ・生産性に関心のある読者を持つ媒体を想定している。
:::

:::guess
1Passwordは無料プランを持たず、Bitwardenの数倍の値付けを保っている。それでも法人顧客とARRを伸ばせている理由は、「パスワード管理」ではなく、開発者のシークレット、社員の端末、SaaSのアクセス、AIエージェントの資格情報までを1つの管理画面に集める「アクセス管理」として売っているからとみられる。個人向けの製品で使い心地を覚えた社員が、職場にも同じものを求める——いわゆるボトムアップの導入が、法人の席数を押し上げていると推測される。法人のBusinessプランに家族向けアカウントを無料で付ける施策も、その往復を意識した設計とみられる。
:::

:::guess
アフィリエイトの報酬は、最初の支払い（年払いなら1年分、月払いなら1か月分）の25%だ。1年間払い続けるElevenLabsの22%やBetter Stackの25%と比べると、月払いの顧客を紹介した場合の取り分は小さい一方、「サインアップ1件2ドル」を上乗せしている。紹介の報酬を最初の支払いにだけ結びつけるのは、年払いへの誘導と、紹介直後の成約を重く見ているからとみられる。開発者向けのブログや技術系の記事は、`.env` の平文やSSH鍵の管理という具体的な悩みから1Passwordへつなげやすく、アフィリエイトとの相性が良い分野と推測される。
:::

1Passwordが売っているのは、パスワードを覚えなくて済む便利さだけではない。「提供元のサーバーを信用しなくていい」という設計そのものだ。2つ目の鍵を利用者の手元に置き、暗号の処理をRustのコア1つに集め、平文のシークレットをリポジトリから追い出す。その積み重ねが、個人向けのアプリを、13億件の資格情報を預かる企業向けのセキュリティ事業に変えた。人間だけでなくAIエージェントも鍵を持つようになった今、「誰にも中身を見せずに鍵を配る」仕組みの価値は、まだ上がり続けている。
