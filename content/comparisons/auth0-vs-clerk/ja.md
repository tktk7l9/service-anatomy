---
title: "Auth0 と Clerk の比較 — ログイン画面を自社に置く会社と、アプリに置く会社。数え方（MAUとMRU）・料金・SSO・データの置き場所を公式ページで並べる"
description: "Auth0とClerkを、2026年11月2日に読んだ両社の公式ページだけを根拠に比較する。無料枠はAuth0が2万5,000 MAU、Clerkが1アプリ5万MRU。Auth0はその月にログインかトークン更新をした人をテナントごとに数え、Clerkは登録の翌日以降に戻ってきた人だけをアプリごとに数える。有料の入口はAuth0のEssentialsが月35ドル、ClerkのProが月25ドル（年払い20ドル）。SSOとSCIMの扱い、ホスト型のログイン画面と埋め込み型のコンポーネントの違い、日本リージョンの有無、障害の公開のされ方まで並べ、どんなアプリにどちらが合いやすいかを整理する。"
lead: "認証を外部のサービスに任せようとすると、候補に挙がりやすいのがAuth0とClerkだ。どちらもサインアップ、サインイン、多要素認証、企業向けのSSOまでをまとめて提供し、無料で始められる。ただし公式ページを並べると、利用者の数え方、ログイン画面の置き場所、データを置く国の選び方がそれぞれ違う。Auth0は2013年に始まり2021年からOktaの一部になった認可サーバーで、Clerkは2019年からReactのコンポーネントとして認証を売ってきた。両社の料金ページとドキュメントを2026年11月2日に読み、選ぶときに効いてくる違いを解剖する。"
slugA: "auth0"
slugB: "clerk"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-12-31"
    claim: "ClerkのDirectory Sync接続の課金が予告どおり2027年1月1日に始まったか（追加1接続あたり月75ドルから）、開始後の記述に書き換える"
sources:
  - label: "Auth0: Pricing（プラン・比較表・FAQ）"
    url: "https://auth0.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Auth0: 料金（日本語ページ、米ドルの参考価格）"
    url: "https://auth0.com/jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Auth0公式ブログ: Auth0 MAU Explained（MAUの数え方）"
    url: "https://auth0.com/blog/auth0-monthly-active-user-mau-explained/"
    accessedAt: "2026-11-02"
  - label: "Auth0ドキュメント: Create Tenants（リージョンとロケーション）"
    url: "https://auth0.com/docs/get-started/auth0-overview/create-tenants"
    accessedAt: "2026-11-02"
  - label: "Auth0ドキュメント: Auth0 Universal Login"
    url: "https://auth0.com/docs/authenticate/login/auth0-universal-login"
    accessedAt: "2026-11-02"
  - label: "Auth0ドキュメント: Hosted Login vs. Embedded Login"
    url: "https://auth0.com/docs/authenticate/login/universal-vs-embedded-login"
    accessedAt: "2026-11-02"
  - label: "Auth0ドキュメント: Auth0 Data Processing（無料プランの非アクティブ判定と削除）"
    url: "https://auth0.com/docs/secure/data-privacy-and-compliance/data-processing"
    accessedAt: "2026-11-02"
  - label: "Auth0ドキュメント: Billing Policy"
    url: "https://auth0.com/docs/troubleshoot/customer-support/operational-policies/billing-policy"
    accessedAt: "2026-11-02"
  - label: "Auth0公式ブログ: Okta Completes Acquisition of Auth0（2021-05-03）"
    url: "https://auth0.com/blog/okta-acquisition-announcement/"
    accessedAt: "2026-11-02"
  - label: "Clerk: Pricing（プラン・従量単価・FAQ）"
    url: "https://clerk.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Clerk公式Changelog: New plans, more value（2026-02-05の料金改定）"
    url: "https://clerk.com/changelog/2026-02-05-new-plans-more-value"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ドキュメント: How Clerk works"
    url: "https://clerk.com/docs/guides/how-clerk-works/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ドキュメント: Migrating"
    url: "https://clerk.com/docs/guides/development/migrating/overview"
    accessedAt: "2026-11-02"
  - label: "Clerk公式: Security and Compliance at a Glance"
    url: "https://clerk.com/security"
    accessedAt: "2026-11-02"
  - label: "Clerk公式: Standard Terms and Conditions（税の扱い）"
    url: "https://clerk.com/legal/standard-terms"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Postmortem: Clerk System Outage（2026年3月10日）"
    url: "https://clerk.com/blog/2026-03-10-service-outage-postmortem"
    accessedAt: "2026-11-02"
  - label: "Clerk公式ブログ: Clerk for the AI era（2026-03-03）"
    url: "https://clerk.com/blog/2026-03-03-clerk-for-the-ai-era"
    accessedAt: "2026-11-02"
---

[Auth0](/ja/articles/auth0)と[Clerk](/ja/articles/clerk)は、どちらも「認証とユーザー管理を外部に任せるサービス」として並べられる。ただし料金ページを横に置くと、最初の行から違う。Auth0の料金ページは「月間アクティブユーザーは何人ですか？」というスライダーから始まり、B2CとB2Bの切り替えがある。Clerkの料金ページは「Monthly Retained User」という独自の単位の定義から始まる。この記事は、両社の公式ページを2026年11月2日に読み、書かれている数字と条件をそのまま並べる。当サイトは両サービスを本番で運用した体験を書いているのではなく、公開されている料金表とドキュメントを突き合わせている。料金は改定されるので、申し込む前に必ず公式ページを確認してほしい。

## 利用者の数え方を並べる

認証サービスの請求額は、単価よりも先に「誰を1人と数えるか」で決まる。ここが2社でいちばん大きく違う。

:::fact
両社の公式ページ（2026-11-02閲覧）から、課金の単位を並べる。

| 項目 | Auth0 | Clerk |
| --- | --- | --- |
| 単位 | 月間アクティブユーザー（MAU） | Monthly Retained User（MRU）と、組織単位のMRO |
| 1人と数える条件 | その暦月にログインまたはトークンの更新をしたユーザー | その月に、登録から少なくとも1日たったあとアプリを訪れたユーザー |
| 登録だけして戻らない人 | 公式の説明は、その月にログイン（またはトークン更新）をしたかどうかで判断するというもの | 数えない（「First Day Free」） |
| 数える範囲 | テナントごと。開発・ステージング・本番の3テナントにログインした同じ人は3MAU | アプリごと（無料枠も1アプリ5万MRU） |
| データベースにいるだけの人 | 数えない | 数えない（ユーザーの総数では課金しない） |

Auth0の説明は公式ブログ「Auth0 MAU Explained」によるもので、テナントにdev・staging・prodのどのタグを付けても数え方は同じだと書かれている。Clerkの定義は料金ページと移行ガイドによる。
:::

:::guess
この違いは、無料枠の数字の差以上に効く場面があるとみられる。登録は多いが定着が低いアプリ、たとえば無料体験の多いサービスや、キャンペーンで一時的に登録が増えるアプリでは、Clerkの数え方のほうが請求の対象が少なくなる。逆に、毎月ログインし直す利用者が中心で、開発用のテナントにテスト用の実ユーザーをあまり入れない構成なら、数え方の違いは小さいと考えられる。Auth0で開発・ステージング・本番に別々のテナントを使い、同じ社員やテスターが毎月それぞれにログインすると、その人数分がテナントごとに数えられる点は、見積もりの段階で織り込む必要がある。
:::

## プランと価格

:::fact
両社の料金ページ（2026-11-02閲覧）の標準のプランを並べる。いずれも米ドル表記だ。Auth0の日本語の料金ページも米ドルで、価格に「参考価格」と添えられている。Clerkの標準規約は、料金は税抜きで、税は顧客が負担すると定める。Auth0の料金ページでは税の扱いを確認できなかった。

| 項目 | Auth0 | Clerk |
| --- | --- | --- |
| 無料プラン | Free: 2万5,000 MAUまで。クレジットカード不要（独自ドメインにはカードの確認が必要） | Hobby: 1アプリ5万MRUまで。クレジットカード不要 |
| 有料の入口 | Essentials: 月35ドル（B2Cの表示で、月間アクティブユーザー500人の場合） | Pro: 月25ドル、年払いなら月20ドル。5万MRUを含み、超過は1人月0.02ドルから |
| 次の段 | Professional: 月240ドル（同じ表示条件） | Business: 月300ドル、年払いなら月250ドル |
| 最上位 | Enterprise: 個別見積もり。ユーザー数とSSOの段階は個別、99.99%のSLA | Enterprise: 個別見積もり（年払いのみ）。99.99%のSLA |
| 利用者数の決め方 | 有料プランは1,000人から10万人以上まで、人数を選んで契約する | 含まれる5万MRUを超えた分を、公開された単価で従量課金 |
| 試用 | 22日間の試用のあと、自動でFreeになる | 試用期間はなく、開発用インスタンスでProの機能を試せる |
| スタートアップ向け | 1年間無料のプログラム（外部MAU 10万人など）。AWSクレジット5,000ドルの申請も可 | Stripe Atlas、Y Combinatorなど提携先経由の割引（公開1年以内、調達500万ドル以下） |

Auth0の有料プランの価格は、料金ページのスライダーで選ぶ利用者数とB2C・B2Bの切り替えで変わる。上の35ドルと240ドルは、ページを開いたときの既定の表示（B2C、500人）で読める値だ。Clerkの料金ページのFAQも、Auth0の有料プランを「Essentialsが月35ドル、Professionalが月240ドルから」と書いている。
:::

:::fact
入っている機能の段差も違う。Auth0の比較表（B2Cの表示）では、ログの保存期間がFree 1日、Essentials 5日、Professional 10日、Enterprise 30日、含まれるテナント数が1・3・12・無制限、管理者はFreeが3人まででそれ以降は無制限だ。既存のユーザーデータベースでログインさせる「Custom Database Connections」はProfessional以上。Clerkはログの保存期間がHobby 1日、Pro 7日、Business 30日で、ダッシュボードの席はHobbyとProが3人まで、4人以上はBusiness（10席を含み、追加1席月20ドル）が必要になる。多要素認証は、ClerkではPro以上、Auth0では「Pro MFA Factors」がEssentials以上だ。
:::

:::guess
入口の価格はClerkが低く、無料枠もClerkが大きい。ただし比べ方には注意が要るとみられる。Auth0は「契約する利用者数」を先に決める形で、上限を超えれば上の段を選び直す。Clerkは基本料金に従量を足す形で、使った分がそのまま請求に乗る。前者は月々の金額が読みやすく、後者は小さく始めて伸びた分だけ払える。もう1つの違いは管理者の数で、チームが4人を超えた時点で、ClerkはBusinessの月300ドルが視野に入り、Auth0のEssentialsは管理者を無制限に置ける。開発チームの人数は、利用者数と同じくらい請求に効く変数になると考えられる。
:::

## 企業向けの機能: SSO・組織・SCIM

B2BのSaaSにとっては、顧客企業のIdPとつなぐSSO、顧客企業ごとの組織（テナント）、社員の入退社を自動で反映するSCIMが選定の中心になる。

:::fact
Auth0の料金ページ（2026-11-02閲覧）では、Freeに「1 Enterprise Connection」「Self-Service SSO」「SCIM」が「New」として並び、組織（Organizations）は5つまで含まれる。EssentialsとProfessionalの説明には「EC（エンタープライズ接続）、Self-Service SSO、SCIMを使い続けるにはB2Bへアップグレード」と注記があり、B2Cの有料プランでは比較表のInbound SCIMが「Not included」になっている。組織の数はEssentialsとProfessionalが10、Enterpriseが個別。エンタープライズ接続の数の段階はEnterpriseで個別に決まる。

Clerkの料金ページでは、SSO接続はHobbyにはなく、ProとBusinessが1アプリ1接続を含み、追加は2〜15接続が1つ月75ドル、16〜100が60ドル、101〜250が48ドル。Directory Sync（SCIMとGoogle Workspace）も1接続を含み、同じ単価で2027年1月1日から課金が始まる。組織は全プランで1アプリ100MRO・1組織20人まで無料で、それを超えるとB2B Authenticationの拡張アドオン（月100ドル、年払いなら85ドル）と、1組織月1ドルからの従量が必要になる。Clerkは2026年2月の改定で、エンタープライズ接続を無制限から従量に変え、3接続以上のアプリは費用が増えると自ら書いている。
:::

:::guess
少数の顧客企業とSSOでつなぐ段階では、Clerkは単価が公開されているので見積もりが立てやすい。料金ページのFAQもこの点を自社の強みとして挙げている。Auth0は無料のFreeでもエンタープライズ接続を1つ、SCIMとセルフサービスのSSOまで試せる一方、B2Cの有料プランに上げるとこれらが外れ、B2Bのプランか個別見積もりへ進む形だ。顧客企業の数が増えてSSO接続が数十を超えるような段階では、どちらも個別の交渉や上位プランの領域に入り、公開の料金表だけでは比べられなくなると考えられる。
:::

## ログイン画面をどこに置くか

2社の設計の違いがいちばんはっきり出るのは、ログイン画面の置き場所だ。

:::fact
Auth0のドキュメント（2026-11-02閲覧）は、ログインの体験を「ホスト型（Universal Login）」と「埋め込み型」に分けて説明する。Universal Loginでは、アプリが利用者をAuth0の認可サーバー（自分のテナント）へリダイレクトし、Auth0がログイン画面を出し、IDトークンとアクセストークンを持たせてアプリに戻す。設定はダッシュボードで変えられ、アプリ側のコードを変えずにAuth0の改善が反映される。WCAG 2.2 AAとEN 301 549に沿ったアクセシビリティを既定で備えると書く。埋め込み型も使え、画面を完全に自分で作れるが、Webでは独自ドメインを設定しない限り、サードパーティCookieを使うクロスオリジン認証になる。ドキュメントは両者を併用できるとし、Universal Loginを主なサインイン・サインアップ・パスワード再設定の既定としている。

Clerkのドキュメントは、完成品のコンポーネント（`<SignIn />` など）をアプリの画面の中に置くことを第一に勧め、より自由に作りたい場合はフックなどで組む「custom flows」を用意する。完成品はCSSを変えられるが、HTMLの構造と認証の流れの順序は変えられない。本番ではClerkのFrontend APIを自分のドメインのサブドメインにCNAMEで置き、60秒で切れるsession tokenをSDKが50秒ごとに更新する。サーバー描画のアプリでは、期限切れのトークンをリダイレクト（handshake）で更新する。
:::

:::guess
Auth0の設計は、ログインを「アプリの外にある1つの場所」にまとめる考え方とみられる。複数のアプリや第三者のアプリの間でSSOを効かせたいとき、ログイン画面のセキュリティ更新をアプリのリリースと切り離したいときには、この形が素直に合う。Clerkの設計は、ログインを「アプリの画面の一部」として扱う考え方で、利用者がアプリの外へ出ない体験や、ReactやNext.jsのアプリの中で部品として扱える手軽さが強みになる。どちらも反対側の形を用意しているので、できる・できないの差というより、既定値がどちらにあるかの差だと当サイトは見ている。
:::

## データの置き場所と運用

:::fact
Auth0のドキュメント（2026-11-02閲覧）によれば、パブリッククラウドのテナントは、オーストラリア、カナダ、欧州、日本、英国、米国のロケーションから選べ、選んだロケーションがテナントのドメインとデータを置く地域を決める。日本を選ぶと、ドメインは `{テナント名}.jp.auth0.com` の形になる。料金ページのFAQは、パブリッククラウド（共有型）に加えて、データレジデンシーの要件に応える専用のPrivate Cloud Basic、毎秒500リクエストのPrivate Cloud Performance、毎秒1,500リクエストのPerformance Plusという配置の形を挙げ、「ほとんどのリージョンで月間99.99%を超える稼働」と書く。無料プランのテナントは、すべてのテナントで150日間の活動がないと、データごと完全に削除される予定に入る。

Clerkのセキュリティ概要は、地域ごとのデータ保管を「提供していない」とし、データは米国の基盤（Google CloudとCloudflare、副処理者はすべて米国）に置かれ、EU・英国・スイスの個人データはData Privacy Frameworkで米国へ移転すると書く。SOC 2 Type 2とHIPAAを2022年5月6日から保持し、SOC 2の報告書はBusiness以上、HIPAAのBAAはEnterpriseで提供する。Auth0の比較表では、コンプライアンス認証は全プランに「Included」、HIPAAのBAAはアドオンだ。
:::

:::fact
障害の公開のされ方も違う。Clerkは公式ブログに詳しい事後報告を載せており、2026年3月10日の報告では、データベースであるGoogle Cloud SQLのライブマイグレーションの失敗で約26分サービスが止まったこと、エンジニアの大半を信頼性の改善に移したこと、データベースの提供元の変更や自前運用を検討していることを書いている。Auth0の料金ページは、現在と過去の稼働状況をステータスページで確認できると案内している。当サイトはAuth0の個別の障害の記録は今回確認していない。
:::

:::guess
日本の事業者にとって、データの置き場所は料金と同じくらい大きな分かれ目になりうるとみられる。Auth0なら日本のロケーション（欧州・英国・カナダ・オーストラリアも選べる）にテナントを置けるが、Clerkは米国の基盤に置かれ、選択肢がない。個人情報の越境移転を社内規程や顧客との契約でどう扱うかによっては、この1行で候補が決まることもあると考えられる。一方で、Clerkの事後報告は、何が起きてどう直すかを具体的に知る材料として読める。どちらの姿勢をどう評価するかは、導入する側が自分の可用性の要件と照らして判断することになる。
:::

## 会社の成り立ち

:::fact
Auth0の公式ブログによれば、Auth0はEugenio Pace氏とMatias Woloski氏が2013年初めに共同で創業し、2021年5月3日にOktaによる買収が完了した。発表時点で、Auth0はOktaの中の独立した事業部門として、Pace氏が率い、OktaのCEOに直接報告すると説明されている。Auth0の課金ポリシーは、返金の申請先をOktaの売掛金の窓口としている。

Clerkの公式ブログは、同社が2019年から認証とユーザー管理の開発者体験に取り組んできたと書く。2025年10月15日にはMenloとAnthropicのAnthology Fundが主導する5,000万ドルのシリーズCを発表し、1万5,000超のアプリで2億人超のユーザーを管理しているとした。2023年のシリーズAでは、Auth0の取締役だったMadronaのKaran Mehandru氏がClerkの取締役に加わっている。
:::

## どんなアプリにどちらが合いやすいか

ここからは、上の公式ページを当サイトが読んだうえでの整理だ。優劣を付けるものではなく、アプリの形ごとに、どの行が効いてくるかを示す。

:::guess
- ReactやNext.jsで作る個人開発や小さなSaaSで、ログイン画面をすぐに用意したい場合は、Clerkの料金表が当てはまりやすいとみられる。無料枠は1アプリ5万MRUと大きく、MFAとパスキーを本番で使っても月25ドル（年払い20ドル）で収まる。登録だけで戻らない人が請求に入らない点も、試しに使われることの多いアプリには合う。
- 利用者データを日本（あるいは欧州・英国・カナダ・オーストラリア）に置く必要がある、または置きたい場合は、Auth0のロケーションが選択肢になる。Clerkはデータレジデンシーを提供していないと明記している。
- 複数のアプリや第三者のアプリの間でSSOを効かせたい、ログイン画面をアプリのリリースと切り離して一元管理したい場合は、Auth0のUniversal Loginの設計が素直に合うと考えられる。
- 企業の顧客を数社から十数社持つB2BのSaaSで、SSO接続の費用を事前に読みたい場合は、接続ごとの単価を公開しているClerkが見積もりやすい。Auth0は無料プランでもエンタープライズ接続とSCIMを試せるが、有料で使い続けるにはB2Bのプランを選ぶことになる。
- 既存の自社データベースのユーザーでそのままログインさせたい場合、Auth0ではProfessional以上の「Custom Database Connections」が該当する。Clerkは一括の取り込みと、並行運用しながら移す「trickle migration」の手順を公開している。
- 無料で大量の利用者を抱える消費者向けアプリでは、どちらも無料枠を超えたあとの単価を先に計算したほうがよい。Clerk自身も料金ページのFAQで、1人あたりの売上が低いアプリではSupabase AuthやFirebase Authのほうが安い可能性があると書いている。
:::

Auth0とClerkは、同じ「認証の外部化」を別の入口から売っている。Auth0は、アプリの外にある認可サーバーを入口にし、企業の要件に応える配置の選択肢を広げてきた。Clerkは、アプリの画面に置く部品を入口にし、定着した利用者だけを数える料金で開発者を呼び込んできた。選ぶ側が先に決めるべきなのは、単価の安さより、ログイン画面をアプリの内と外のどちらに置きたいか、利用者のデータをどの国に置く必要があるか、そして自分のアプリで「1人」が何を意味するかだ。そこが決まれば、2つの料金表のどの行を読めばよいかはおのずと決まる。
