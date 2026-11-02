---
service: "Auth0"
title: "無料は2万5,000人まで、有料は500人から — Auth0は「ログインを書かなくていい」をMAU単位の従量課金にし、Oktaの傘下でAIエージェントの認証へ広げている"
description: "認証基盤のAuth0（Okta傘下）。無料プランで月2万5,000人まで使え、有料のEssentialsはB2Cで1人あたり月0.07ドルの階段料金、B2Bは500人で月150ドルから始まる。2013年の創業から約65億ドルの株式交換でOktaに入るまでの経緯、Universal LoginとNode.jsのActions、RulesとHooksの終了日、OpenFGAを土台にした認可、Cloudflareの後ろにある地域別エンドポイント、MCPが求めるClient ID Metadata Documentsへの対応、AIエージェント向けのToken Vaultと「基本料金に50%上乗せ」の値付けまでを、公式の料金ページ・ドキュメント・ブログとOktaの投資家向け資料から解剖する。"
lead: "Auth0の料金ページには、月2万5,000人まで無料のプランと、月500人から始まる有料プランが並んでいる。無料の上限が有料の入口より50倍大きいという逆転は、この会社が何を売っているかをよく表している。ログイン画面そのものはほぼ無料で配り、お金を取るのは多要素認証や企業向けSSOのような「次に必ず要るもの」だ。そして2026年、その「次に要るもの」の筆頭はAIエージェントの資格情報になった。Oktaの傘下に入って5年のAuth0の設計と稼ぎ方を解剖する。"
category: dev-tool
tags: [authentication, identity, oauth, developer-tools, ai-agent]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "Oktaの2027年1月期第2四半期（2026年7月期）の決算を最新とする記述（第3四半期の決算発表が出たら数字と見通しを差し替える）"
  - date: "2027-04-30"
    claim: "Hooksの提供終了日を2027年4月30日とする記述（公式の非推奨・移行ページで日付の変更と終了後の扱いを確認する）"
  - date: "2028-01-31"
    claim: "Rulesの提供終了日を2028年1月31日とする記述（公式の非推奨・移行ページで日付の変更と終了後の扱いを確認する）"
serviceUrl: "https://auth0.com/"
# No affiliate slot: no public affiliate or referral program was found on auth0.com (checked 2026-11-02).
# If one appears, add a commented-out placeholder here following the 1password article's pattern.
vendor: "Okta, Inc."
origin: "US"
heroTheme: "auth0"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "認証プロトコル"
    name: "OpenID Connect / OAuth 2.0 (PKCE, private_key_jwt, DPoP, CIBA, Token Exchange)"
    confidence: confirmed
    evidence: "Auth0自身のテナント（auth0.auth0.com）が公開するOpenID Connectのディスカバリー文書（2026-11-02取得）に、PKCEのS256、private_key_jwtによるクライアント認証、ES256のDPoP、CIBAのbc-authorizeエンドポイント、トークン交換のグラント、バックチャネルログアウトの対応が列挙されている"
    evidenceUrl: "https://auth0.auth0.com/.well-known/openid-configuration"
  - layer: "拡張機能"
    name: "Actions (Node.js functions on triggers)"
    confidence: confirmed
    evidence: "公式ドキュメントに、Actionsは「トリガー」と呼ばれる時点で実行されるテナントごとのNode.js関数だと明記。制限のページは1回のトリガー実行を20秒以内、1つのActionを100kB以内と定める。非推奨・移行のページは、Node.js 12と16の実行環境を2025年8月15日に終了し、Node 22で強制的に動かすと説明している"
    evidenceUrl: "https://auth0.com/docs/customize/actions/limitations"
  - layer: "パスワードの保存"
    name: "bcrypt"
    confidence: confirmed
    evidence: "公式の料金ページのFAQに、資格情報を平文で保存せず、すべてのパスワードをbcryptでハッシュ化しソルトを付けて保存すると明記"
    evidenceUrl: "https://auth0.com/pricing"
  - layer: "認可"
    name: "Auth0 FGA (based on OpenFGA, Go, Apache-2.0)"
    confidence: confirmed
    evidence: "公式のFGAドキュメントに、Auth0 FGAはCNCFが所有するオープンソースの認可システムOpenFGAを土台にし、Auth0/Oktaがその主要なメンテナーだと明記。GitHubのopenfga/openfgaは主な言語がGo、ライセンスがApache-2.0（2026-11-02確認）"
    evidenceUrl: "https://docs.fga.dev/openfga-vs-auth0-fga"
  - layer: "提供形態"
    name: "Public Cloud (multi-tenant) / Private Cloud on AWS or Azure"
    confidence: confirmed
    evidence: "公式ドキュメントに、標準はマルチテナントのPublic Cloudで、専用・隔離されたPrivate CloudをAWS（Geo-HAの追加オプションあり）とAzureで提供すると明記。料金ページのFAQは、Private CloudのPerformanceで毎秒500リクエスト、Performance Plusで1,500リクエストまで引き上げると説明する"
    evidenceUrl: "https://auth0.com/docs/deploy-monitor/deploy-private-cloud"
  - layer: "エッジ"
    name: "Cloudflare (in front of regional login endpoints)"
    confidence: likely
    evidence: "当サイトのDNS観測（2026-11-02）で、login.us.auth0.com・login.eu.auth0.com・login.jp.auth0.comがそれぞれauth0-ingress.<地域>.auth0.com.cdn.cloudflare.netのCNAMEを経てCloudflareのアドレスに解決された。auth0.auth0.comの応答ヘッダーもserver: cloudflareとcf-rayを返した。オリジン側の基盤は外から見えない"
  - layer: "旧CDN"
    name: "Amazon CloudFront + S3 (cdn.auth0.com)"
    confidence: likely
    evidence: "当サイトの観測（2026-11-02）で、cdn.auth0.comはCloudFrontのドメインに解決され、配布しているJavaScriptファイルがserver: AmazonS3とvia: CloudFrontのヘッダーを返した。公式ドキュメントは2020年6月11日より前に作られた米国のテナントにこのCDNを案内している"
  - layer: "マーケティングサイト・ドキュメント"
    name: "Next.js on Vercel (behind Cloudflare) / Contentful / Mintlify"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー観測（2026-11-02）で、auth0.com/pricingがserver: cloudflareとx-vercel-idを返し、HTMLに__NEXT_DATA__と/_next/static/のパス、Contentfulの配信ドメイン（ctfassets.net）の画像が含まれていた。auth0.com/docs配下はx-mintlify-client-versionのヘッダーを返した。製品のログイン基盤とは別に動いている"
  - layer: "SDK"
    name: "nextjs-auth0 / node-auth0 (GitHub: auth0)"
    confidence: confirmed
    evidence: "公式のGitHubリポジトリで、Next.js向けのauth0/nextjs-auth0はv4.33.0（2026-10-22公開）、Node.js向けのauth0/node-auth0はv7.6.0（2026-10-19公開）が最新のリリースだった（2026-11-02確認）"
    evidenceUrl: "https://github.com/auth0/nextjs-auth0/releases"
sources:
  - label: "Auth0公式: 料金ページ（Free・Essentials・Professional・Enterprise、B2C/B2B、追加オプション、FAQ）"
    url: "https://auth0.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Auth0公式: 料金ページ（日本語版）"
    url: "https://auth0.com/jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Auth0公式ブログ: Auth0 Plans Got an Upgrade（無料プランを7,500から2万5,000MAUへ・2024-09-24）"
    url: "https://auth0.com/blog/auth0-plans-got-an-upgrade"
    accessedAt: "2026-11-02"
  - label: "Auth0公式: Auth0 for Startups（スタートアップ向けプログラムの条件）"
    url: "https://auth0.com/startups"
    accessedAt: "2026-11-02"
  - label: "Auth0公式ブログ: Oktaによる買収の完了（Eugenio Pace・2021-05-03）"
    url: "https://auth0.com/blog/okta-acquisition-announcement/"
    accessedAt: "2026-11-02"
  - label: "Okta投資家向け情報: Auth0の買収の最終合意（2021-03-03）"
    url: "https://investor.okta.com/news-and-events/news-releases/news-details/2021/Okta-Signs-Definitive-Agreement-to-Acquire-Auth0-to-Provide-Customer-Identity-for-the-Internet-03-03-2021/default.aspx"
    accessedAt: "2026-11-02"
  - label: "Okta投資家向け情報: 2026年1月期の第4四半期・通期決算（2026-03-04）"
    url: "https://investor.okta.com/news-and-events/news-releases/news-details/2026/Okta-Announces-Fourth-Quarter-And-Fiscal-Year-2026-Financial-Results/default.aspx"
    accessedAt: "2026-11-02"
  - label: "Okta投資家向け情報: 2027年1月期の第2四半期決算（2026-08-26）"
    url: "https://investor.okta.com/news-and-events/news-releases/news-details/2026/Okta-Announces-Second-Quarter-Fiscal-Year-2027-Financial-Results/default.aspx"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Universal Login"
    url: "https://auth0.com/docs/authenticate/login/auth0-universal-login"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Actions"
    url: "https://auth0.com/docs/customize/actions"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Actions Limitations（実行時間20秒・100kB）"
    url: "https://auth0.com/docs/customize/actions/limitations"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Deprecations and Migrations（RulesとHooksの終了日）"
    url: "https://auth0.com/docs/troubleshoot/product-lifecycle/deprecations-and-migrations"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Organizations"
    url: "https://auth0.com/docs/manage-users/organizations"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Public Cloud Service Endpoints（地域別のドメイン）"
    url: "https://auth0.com/docs/troubleshoot/customer-support/operational-policies/public-cloud-service-endpoints"
    accessedAt: "2026-11-02"
  - label: "Auth0 Docs: Private Cloud"
    url: "https://auth0.com/docs/deploy-monitor/deploy-private-cloud"
    accessedAt: "2026-11-02"
  - label: "Auth0公式ブログ: Auth0 for AI Agentsの一般提供開始（2025-11-19）"
    url: "https://auth0.com/blog/auth0-for-ai-agents-generally-available/"
    accessedAt: "2026-11-02"
  - label: "Auth0のテナント（auth0.auth0.com）のOpenID Connectディスカバリー文書（当サイトが取得）"
    url: "https://auth0.auth0.com/.well-known/openid-configuration"
    accessedAt: "2026-11-02"
  - label: "Model Context Protocol仕様: Authorization（2025-11-25版）"
    url: "https://modelcontextprotocol.io/specification/2025-11-25/basic/authorization"
    accessedAt: "2026-11-02"
  - label: "Auth0 FGA Docs: Auth0 FGA vs OpenFGA"
    url: "https://docs.fga.dev/openfga-vs-auth0-fga"
    accessedAt: "2026-11-02"
  - label: "CNCFブログ: OpenFGAがCNCFのIncubatingプロジェクトに（2025-11-11）"
    url: "https://www.cncf.io/blog/2025/11/11/openfga-becomes-a-cncf-incubating-project/"
    accessedAt: "2026-11-02"
  - label: "GitHub: openfga/openfga"
    url: "https://github.com/openfga/openfga"
    accessedAt: "2026-11-02"
  - label: "GitHub: auth0/nextjs-auth0（リリース一覧）"
    url: "https://github.com/auth0/nextjs-auth0/releases"
    accessedAt: "2026-11-02"
---

ログイン機能は、どのアプリにも要るのに、どのアプリの売りにもならない。しかもパスワードの保存、多要素認証、ソーシャルログイン、取引先企業のSSOと、要求は製品が育つほど増え、間違えたときの代償は大きい。Auth0はこの「誰もが作りたくないのに、全員が作らされる部分」を、月間アクティブユーザー（MAU）単位で借りられるサービスにした会社だ。入口を極端に広く取り、製品が本番に近づいたところで課金が始まる。その設計は、Oktaの傘下に入った今、AIエージェントにまで延びている。

## サービス解説

Auth0は、アプリにログイン・新規登録・多要素認証・ソーシャルログイン・企業SSOを組み込むための認証・認可の基盤（CIAM、顧客向けのアイデンティティ管理）だ。開発者は自前でパスワードを保存する代わりに、利用者をAuth0のログイン画面へ送り、戻ってきたトークンを検証する。消費者向けのアプリ（B2C）と、法人顧客ごとにログインを分けるSaaS（B2B）の両方を対象に、料金表も2系統に分かれている。

:::fact
Auth0の公式ブログによれば、Auth0は2013年の初めに、現CEOのエウヘニオ・ペースとCTOのマティアス・ウォロスキが共同で創業した。Oktaの投資家向け資料によれば、Oktaは2021年3月3日、Auth0を約65億ドルの株式交換で買収する最終合意を発表した。対価はOktaのクラスA普通株で、株数を固定し、1株276.21ドルで換算した額だ。Oktaはこの買収で「550億ドルのアイデンティティ市場」での成長を加速させると説明し、Auth0は「Oktaの中の独立した事業部門」として運営されるとした。買収の完了は2021年5月3日で、Auth0の公式ブログは、ペースがAuth0のCEOとしてOktaのトッド・マキノンCEOに直接報告する体制になったと伝えている。
:::

:::fact
Oktaは決算でAuth0単体の数字を開示していない。2026年3月4日の決算発表によれば、2026年1月期の売上高は29億1,900万ドル（前年比12%増）、フリーキャッシュフローは8億6,300万ドル（売上高の30%）、GAAPの純利益は2億3,500万ドルで、同じ発表は製品の一覧に「Customer Identity Cloud」を挙げている。2026年8月26日の発表によれば、2027年1月期第2四半期（2026年7月31日まで）の売上高は8億500万ドル（前年比11%増）、うちサブスクリプションが7億9,300万ドル（同12%増）、残存履行義務（RPO）は48億5,800万ドル（同17%増）だった。CFOは「主力のワークフォース（社員向け）とカスタマー（顧客向け）アイデンティティの堅調な勢いが、両事業でACVの伸びを加速させた」と述べている。通期の売上高の見通しは32億1,600万〜32億2,600万ドルだ。
:::

:::pull
無料の上限は2万5,000人、有料の入口は500人。Auth0はログイン画面をほぼ無料で配り、「次に必ず要るもの」で稼ぐ。
:::

::scorecard

## UX分析

Auth0のUXは、開発者に「ログインの画面とロジックを自分のコードベースに置かない」ことを選ばせる方向で設計されている。

- **ログイン画面ごと預ける**。推奨されるUniversal Loginでは、アプリは利用者をAuth0の認可サーバーのページへリダイレクトし、認証はAuth0が引き受ける。公式ドキュメントは、認証方式を増やしてもアプリ側の統合作業が要らず、Auth0がログインページを改良してもアプリを変える必要がないと説明する。JavaScriptで各ページを組む旧来のClassic Loginは「もう更新されない」と明記されている。
- **フックはコードで書く**。ログインや登録の途中に処理を挟みたいときは、Actionsという、トリガーごとに実行されるNode.jsの関数を書く。npmのパッケージも使えるが、1回のトリガーの実行は20秒以内、1つのActionは100kB以内という制限がある。
- **古い拡張は期限付きで閉じる**。Actionsの前身にあたるRulesとHooksは、2023年5月16日に非推奨となり、2024年11月18日から読み取り専用になった。公式の非推奨・移行のページによれば、Hooksは2027年4月30日、Rulesは2028年1月31日に提供を終え、Rulesは「2028年1月31日の後、実行されなくなり削除される」。
- **法人顧客ごとに部屋を分ける**。B2BのSaaS向けには、1つのテナントの中で複数の法人顧客を管理するOrganizationsがある。組織ごとの名前とブランディング、取引先の社内IdPにつなぐ企業向けの接続、メールでの招待、組織ごとのロールを持てる。
- **無料のまま本番に出せる幅が広い**。料金ページの無料プランは、クレジットカードなしで登録でき、月2万5,000人まで、パスワードレス、ソーシャル接続の無制限（システムの制限内）、カスタムドメイン1つ（クレジットカードの確認が必要）、5つのOrganizations、企業向け接続1つを含む。FAQによれば、登録後22日間は有料機能のトライアルで、その後は自動的に無料プランへ移る。

:::fact
Auth0の公式ブログ（2024年9月24日）によれば、無料プランのMAUの上限はこの日に7,500から2万5,000へ引き上げられ、ソーシャル接続とOkta接続の無制限化、カスタムドメイン、Organizations、パスワードレス認証も無料プランに加わった。既存の無料プランの利用者には自動で適用された。同じ発表で、B2C向けの有料プランはOrganizationsを10まで、B2B向けは無制限に含むようになり、Essentialsには「Pro MFA」、Professionalには「Enterprise MFA」が付いた。
:::

:::fact
料金ページの比較表では、無料プランの「企業向け接続1つ・セルフサービスSSO・SCIM」に「New」の印が付き、B2CのEssentialsとProfessionalの欄には「EC（企業向け接続）・セルフサービスSSO・SCIMを使い続けるにはB2Bへアップグレードを」という注記がある。B2CのEssentialsとProfessionalでは企業向け接続は提供されず、B2BのEssentialsは3つ、Professionalは5つを含み、1つ月100ドル（年1,100ドル）で合計30まで追加できる。ログの保存期間は無料1日・Essentials 5日・Professional 10日・Enterprise 30日、テナントの数は1・3・12・無制限（システムの制限内）だ。
:::

:::guess
無料プランで取引先企業のSSOを1つ試せる一方、B2Cの有料プランに上げるとそれが使えなくなる、という表の作りは、一見ちぐはぐに見える。ただ、これは「B2Bの機能はB2Bの料金で売る」という線引きを、無料の段階では緩め、有料に移る時点で引き直していると読める。最初の法人顧客からSSOを求められたスタートアップが、無料のまま動くものを作って商談に出し、契約が決まったらB2Bの料金表に乗る、という道筋を想定しているとみられる。
:::

## 技術構成

::techstack

:::fact
Auth0は、テナントのログインの入口を地域別のドメインで分けている。公式ドキュメントによれば、米国は`{テナント名}.us.auth0.com`、オーストラリア・カナダ・欧州・日本・英国は`{テナント名}.[au|ca|eu|jp|uk].auth0.com`の形で、管理画面の`manage.auth0.com`は共通だ。2020年6月11日より前に作られた米国のテナントは、地域の付かない`cdn.auth0.com`を使うよう案内されている。標準の提供形態はマルチテナントのPublic Cloudで、専用のPrivate CloudはAWSとAzureで提供される。料金ページのFAQは、Private CloudのPerformanceで毎秒500リクエスト、Performance Plusで毎秒1,500リクエストまで引き上げるとし、大半の地域で月間の稼働率が99.99%を超えていると書く。パスワードは平文で保存せず、bcryptでハッシュ化しソルトを付けて保存するという。
:::

:::fact
当サイトが2026年11月2日に取得した、Auth0自身のテナント（auth0.auth0.com）のOpenID Connectのディスカバリー文書は、PKCE（S256）、`private_key_jwt`によるクライアント認証、ES256の署名によるDPoP（トークンを鍵に結びつける仕組み）、CIBAの`bc-authorize`エンドポイント（ポーリング方式）、トークン交換のグラント、バックチャネルログアウトを列挙し、`client_id_metadata_document_supported`を`true`としていた。Model Context Protocol（MCP）の認可の仕様（2025年11月25日版）は、認可サーバーとMCPクライアントはClient ID Metadata Documents（クライアントIDとしてHTTPSのURLを使い、その先のJSONにクライアントの情報を置く方式）に対応すべき（SHOULD）だとし、対応の有無はまさにこの項目で示すと定めている。
:::

:::fact
認可（誰が何にアクセスできるか）は、Auth0 FGAという別のサービスが受け持つ。公式ドキュメントによれば、Auth0 FGAはCNCF（Cloud Native Computing Foundation）が所有するオープンソースの認可システムOpenFGAを土台にし、Auth0/Oktaはその主要なメンテナーだ。OpenFGAは無料で、中核の機能はAuth0 FGAと同じだが、Auth0 FGAは米国・オーストラリア・欧州の各ロケールで2つのクラウドリージョンに展開され、バックアップもAuth0が管理する。CNCFのブログ（2025年11月11日）によれば、OpenFGAはOktaの社員のグループが開発し、2022年9月にCNCFのSandboxに採択され、2025年11月にIncubatingへ進んだ。本番で使っていると公表している企業は37社という。
:::

:::fact
AIエージェント向けには、2025年11月19日に「Auth0 for AI Agents」が一般提供になった。Auth0の公式ブログによれば、利用者の認証、Google Drive・Jira・Slackなど外部サービスのOAuthトークンを保管・更新するToken Vault（35以上の連携先に対応）、重要な操作の前に利用者の承認をバックグラウンドで求める非同期の認可（CIBA）、検索拡張生成（RAG）で利用者が見てよい文書だけを答えに使うためのFGA for RAG、の4つで構成される。LangChain・LlamaIndex（JavaScriptとPython）やVercel AI SDKに対応し、当時「Auth for MCP」は早期アクセスとされていた。
:::

:::guess
当サイトの観測（2026-11-02）では、`login.us.auth0.com`・`login.eu.auth0.com`・`login.jp.auth0.com`がいずれも`auth0-ingress.<地域>.auth0.com`というCloudflareの名前を経て解決された。地域ごとに入口を分けたうえで、その手前をCloudflareでそろえ、DDoS対策やTLSの終端を共通化しているとみられる。一方、地域の付かない古い`cdn.auth0.com`はAmazon CloudFrontとS3から配信されていた。2020年の地域別ドメインへの切り替え以前のテナントのために古い配信経路を残している、と推測される。認証基盤は、一度配ったURLを利用者のアプリが何年も参照し続けるので、入口を変えにくい。ドメイン設計に新旧の層が見えるのは、その制約の表れとみられる。
:::

:::guess
ディスカバリー文書にClient ID Metadata Documentsへの対応を載せていることは、AIエージェントの時代にAuth0が狙う位置をよく示しているとみられる。MCPでは、クライアント（AIアプリ）とサーバー（ツール）が事前に知り合いでないことが普通で、そのたびに管理画面でクライアントを登録する運用は成り立たない。仕様が推す方式に認可サーバーの側でいち早く対応しておけば、MCPサーバーを作る開発者が「認可サーバーはAuth0に任せる」と選ぶ理由になる。ログイン画面を預かってきた会社が、エージェントとツールの間の鍵の受け渡しも預かろうとしている、と読める。
:::

## ビジネスモデル

Auth0の収益は、MAUの段階ごとに値段が決まる月額・年額のサブスクリプションと、個別見積もりのEnterprise契約、その上に積む追加オプションでできている。料金はOktaの売上の中に含まれ、単体では開示されていない。

:::fact
公式の料金ページによれば、料金は米ドル表記で（日本語版のページも同じドル表記）、税の扱いについての記載は見当たらない。無料プランはB2C・B2Bとも月2万5,000人まで0ドル。Essentialsは月500人でB2Cが月35ドル、B2Bが月150ドル、ProfessionalはB2Cが月240ドル、B2Bが月800ドルから始まる。B2CのEssentialsは1,000人で70ドル、1万人で700ドル、5万人で3,500ドル、B2CのProfessionalは1万人で1,600ドル、2万人で3,200ドル（3万人からは要相談）、B2BのEssentialsは1万人で2,100ドル、2万人で3,800ドル、B2BのProfessionalは1万人で2,400ドルだ。利用が段階の間に入ると「1つ上の段階で請求される」。年払いは「月額の11倍（1か月分無料に相当）」で、Essentials B2Cの500人なら年385ドルになる。
:::

:::fact
追加オプションでは、AIエージェント向けの「Auth0 for AI Agents」が「基本料金に50%を上乗せ（1ドル単位で切り上げ）」する形で、Token Vaultの無制限化とCIBAを含む。料金ページのデータでは、B2CのEssentialsで1,000人の場合、この上乗せは年385ドル（基本の年770ドルの半分）になる。企業向けSSOの接続は1つ月100ドル、B2BのEssentialsでは企業向けMFAも月100ドルの追加で、マシン間（M2M）のトークンにも段階料金がある。Auth0の公式ブログ（2025年11月）によれば、無料プランでもToken Vaultに2つまでの外部サービスをつなげる。スタートアップ向けには、ベンチャーキャピタルの出資を受けた調達額500万ドル未満・ARR100万ドル未満・設立2年未満の企業に、B2BのProfessionalプランと10万MAUを1年間無料で提供する。非営利団体については、料金ページがすべての有料プランを「Social Impact」の割引の対象としており、同じブログはセルフサービスとEnterpriseのプランが50%引きになるとしている。
:::

:::guess
表から計算すると、B2CのEssentialsは500人でも5万人でも1人あたり月0.07ドルで、量が増えても単価は下がらない。一方でB2CのProfessionalは500人で1人0.48ドル、1万人で0.16ドルと、少人数ほど割高になる。つまり、Professionalの「月240ドル」は事実上の最低料金で、Essentialsは素直にMAUに比例する従量課金とみられる。注意したいのは無料プランからの移り方だ。2万5,000人で無料プランを使っているアプリが、たとえばPro MFAを付けたくてEssentialsに上げると、2万5,000人は2万人と3万人の段階の間に入るので、3万人の段階の月2,100ドルになる。無料の範囲が広いぶん、最初の有料機能の値札は「機能の値段」ではなく「その時点の全ユーザーの値段」になる。これを高いと見るか、2万5,000人まで無料で育てられた対価と見るかで、評価は分かれるとみられる。
:::

:::guess
B2BのEssentialsは500人で月150ドルと、B2Cの約4.3倍の値段から始まる。人数あたりではB2Bのほうが割高だが、B2Bの利用者は1人ひとりが法人顧客の社員で、1社の契約が大きい。SaaSにとって、取引先の社内IdPとのSSOやSCIMでのアカウント連携は、大企業に売る際の前提条件になりやすい。Auth0は、その前提条件を自前で作る手間と、1社ごとに月100ドルの接続料を払う手間を天秤にかけさせ、後者を選ばせることで稼いでいると推測される。AIエージェント向けを「基本料金の50%」という一律の上乗せにしたのも、新しい市場の値段を、すでにMAUで決まっている既存の値段に結びつけて、導入の判断を単純にする狙いとみられる。
:::

:::guess
Oktaの決算は、Auth0単体の売上を示さない。それでも、社員向けのOktaと顧客向けのAuth0を「両事業」と呼んでACVの伸びを説明していることから、Auth0はOktaにとって、社員のログインという成熟した市場の外に成長の余地を持つ柱として位置づけられているとみられる。CEOが第2四半期の発表で「すべてのエージェントに信頼できるアイデンティティが要る」と述べ、Auth0がMCPの仕様に沿った機能をそろえているのは、AIエージェントを「新しいMAU」として数え直す試みと読める。
:::

Auth0が売っているのは、ログイン画面そのものではない。パスワードの保存、地域ごとの入口、古い拡張機能の計画的な終了、法人顧客ごとのSSO——作りたくないのに作らされ、間違えると高くつく部分を、MAUという1本の物差しで借りられるようにしたことだ。入口は2万5,000人まで広く開け、製品が本番の要求を持ち始めたところで料金表に乗せる。AIエージェントが人間に代わってツールを呼ぶ時代に、その物差しは人の数からエージェントの数へ伸びようとしている。
