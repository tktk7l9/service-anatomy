---
service: "ムームードメイン"
title: "契約ドメイン数は減り、売上は伸びる — 1年目750円・更新1,728円の.comに25.50%の調整費が乗る値付け、サーバーやGoogle Workspaceとのセット契約で続く「ずっと無料」、AIエージェントからドメインを取得できるMCPサーバーから、ムームードメインを解剖する"
description: "ムームードメインは、GMOペパボ株式会社が運営し、2004年1月に始まったドメイン取得サービスだ。利用規約によれば、レジストラとしてお名前.com（GMOインターネット株式会社）と米国eNom, Inc.を起用し、トップページは620種類以上のドメインと総取得数560万件を掲げる。価格一覧（2026-10-11確認・税込）では.comの1年目が750円、更新と移管が1,728円で、2023年2月から加わる「サービス維持調整費」は2026年10月に25.50%となり、これを含めると.comの更新は2,168円になる。ムームーサーバーかGoogle Workspace（Standardプラン以上）と同時に契約すれば、45種類以上の対象ドメインの取得・更新費用が0円になる。GMOペパボの決算説明資料によれば、契約ドメイン数は2024年6月末の1,076,138件から2026年6月末の1,012,324件に減った一方、四半期の売上高は約6.5億円から約7.3億円に増えた。価格一覧、利用規約、更新と復旧の費用、ドメインロック、ムームーサーバー、API v2とMCPサーバーの公式ドキュメント、お知らせ、GMOペパボの会社概要・沿革・会社説明資料・決算説明資料・技術ブログ、当サイトの実観測から、1年目と更新と調整費の三段の値付け、PHPとRubyとNuxtが同居するサイト、AIエージェントに開いたAPI、ドメインを入口にオプションを重ねる事業までを解剖する。"
lead: "ムームードメインの価格一覧には「サービス維持調整費を含む」というチェックボックスがあり、最初は外れている。外れたままの表では.comの更新は1,728円で、ページに埋め込まれたデータによれば、25.50%の調整費を含めると2,168円になる。一方で「ドメインずっと無料」のページは、サーバーかGoogle Workspaceと一緒に契約すれば、その更新費用が0円になると案内する。2004年に始まり、総取得数560万件を掲げるこのサービスは、契約ドメイン数が2年で6万件あまり減るなかで売上を伸ばし、2026年にはAIエージェントからドメインを取得できるMCPサーバーを開いた。その値付けと仕組みとお金の流れを、公開情報だけで解剖する。"
category: dev-tool
tags: [domains, hosting, small-business, api, mcp, security, subscription]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
serviceUrl: "https://muumuu-domain.com/"
# Affiliate link placeholder: Muumuu Domain publishes a per-result reward table on its official page
# (https://muumuu-domain.com/affiliate, checked 2026-10-11): new Muumuu Server contract (3 months or
# longer) 5,000 yen, Muumuu Domain for WP Hosting 3,000 yen, Google Workspace 2,000 yen per account,
# domain registration 100 yen, transfer to Muumuu Domain 100 yen (some domains 50 yen), 1 yen per ad
# click. The page's "learn more about the referral program" link opens A8.net's program search
# (keyword s00000000404008), and it recommends registering with A8.net for free first
# (https://www.a8.net/as/as_promo/), then applying to the program from A8.net. A8.net is an ASP whose
# ad code must be used as provided: copy the link to affiliate.url, the 1x1 impression image to
# affiliate.impressionUrl, and the text ad verbatim to affiliate.label. Never invent the label — ask
# the owner for the material's exact text. Keep every field identical in ja.md and en.md (parity.ts
# checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<muumuu-domain-material>"
#   program: "Muumuu Domain Affiliate Program (A8.net)"
#   impressionUrl: "https://www18.a8.net/0.gif?a8mat=<muumuu-domain-material>"
#   label: "<verbatim text of the ad material>"
vendor: "GMOペパボ株式会社"
origin: "JP"
heroTheme: "muumuu-domain"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "レジストラ"
    name: "Onamae.com / eNom (upstream registrars)"
    confidence: confirmed
    evidence: "利用規約（最終改定2026年9月14日・2026-10-11確認）の第2条に、本サービスの提供にあたり、レジストラとしてお名前.com（GMOインターネット株式会社）と米国eNom, Inc.を起用し、ドメインによってはそれ以外のレジストラを起用する場合があると明記。同じ規約は本サービスを「ムームードメイン ドメイン取得代行サービス」と定義する"
    evidenceUrl: "https://muumuu-domain.com/?mode=kiyaku"
  - layer: "サービスサイト（新しいページ）"
    name: "Nuxt / Vue.js / Istio + Envoy"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、トップ、価格一覧、API・MCPのページは server: istio-envoy と muu-origin-app: js を返し、HTMLは /_nuxt/ 配下のスクリプトと window.__NUXT__ の状態データを含んでいた。GMOペパボの技術スタックのページは、ロリポップ・ムームードメイン事業部のフロントエンドにVue.js/Nuxt.jsを、インフラにKubernetesを挙げる"
  - layer: "サービスサイト（従来のページ・ログイン）"
    name: "PHP / Ruby on Rails"
    confidence: confirmed
    evidence: "2017年7月26日の技術ブログで、ムームードメインのエンジニアが、サービス開始以来PHPで開発してきたこと、近年はスマートフォン用のサイトやLPなどをRuby on Railsで開発していること、ショッピングカートはトップページを除くすべてのページをRuby on Rails（当時4.2）とVue.jsで作ったことを説明。当サイトの実観測（2026-10-11）でも、/?mode= のページは muu-origin-app: php、PHPSESSID のクッキー、文字コードEUC-JPを、お知らせの /information/ とログインの /checkout/login は muu-origin-app: rb を返した"
    evidenceUrl: "https://tech.pepabo.com/2017/07/26/muumuu-shopping-cart/"
  - layer: "公開API"
    name: "Muumuu Domain API v2 / OpenAPI (3.1.0; PAT, OAuth 2.0, sandbox)"
    confidence: confirmed
    evidence: "API v2のドキュメント（2026-10-11確認）は、OpenAPI 3.1.0で書かれ、保有ドメイン、DNSレコード、ネームサーバー、空き状況の検索、購入の見積もりと購入、Personal Access Token、支払い履歴のエンドポイント、認証済み1時間1,000リクエスト・未認証100リクエストのレート制限、本番のデータベースから切り離したサンドボックス api-sandbox.muumuu-domain.com を記載する"
    evidenceUrl: "https://muumuu-domain.com/developers/openapi-me.html"
  - layer: "AIエージェント連携"
    name: "Remote MCP server / OAuth (Streamable HTTP, PKCE S256, dynamic client registration)"
    confidence: confirmed
    evidence: "MCPのセットアップガイド（2026-10-11確認）に、接続先 https://mcp.muumuu-domain.com/mcp、Claude Codeでの --transport http による追加、OAuth 2.0の採用、2時間で自動更新される短命のアクセストークン、domains:purchase などのスコープを明記。当サイトの実観測（2026-10-11）では、同じホストの認可サーバーのメタデータが OAuth 2.1、S256のPKCEの必須化、動的クライアント登録のエンドポイントを示した"
    evidenceUrl: "https://muumuu-domain.com/muumuu-domain-mcp/setup"
  - layer: "AIによるドメイン名の提案"
    name: "OpenAI (domain name suggestions)"
    confidence: confirmed
    evidence: "利用規約の第32条の2〜第32条の5に、AIが利用者の要望に沿ったドメインを提案する機能などの利用ではOpenAI, Inc.が提供する「OpenAI」に関する利用規約等を遵守すること、送信した情報がOpenAI, Inc.に送信・保存・利用され、AIの学習に使われる場合があることを明記"
    evidenceUrl: "https://muumuu-domain.com/?mode=kiyaku"
  - layer: "ムームーサーバー"
    name: "heteml (infrastructure behind Muumuu Server)"
    confidence: confirmed
    evidence: "ムームーサーバーのページ（2026-10-11確認）に、GMOペパボが長年運用するレンタルサーバー「ヘテムル」のインフラを活用していると明記。利用規約の第32条の6は、ムームーサーバーの利用に「ヘテムル利用規約」も適用すると定める"
    evidenceUrl: "https://muumuu-domain.com/hosting/muumuu-servers"
  - layer: "クレジットカードの本人認証"
    name: "GMO Payment Gateway (card authentication)"
    confidence: confirmed
    evidence: "利用規約の第30条に、クレジットカードの不正利用の検知と予防のため、本人認証業務の一部をGMOペイメントゲートウェイ株式会社に委託し、必要な範囲で個人情報等を提供すると明記"
    evidenceUrl: "https://muumuu-domain.com/?mode=kiyaku"
  - layer: "ログインのパスワード確認"
    name: "Have I Been Pwned (Pwned Passwords range API)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、ログインの /checkout/login が読み込む pwned_password という名前のスクリプトは、入力されたパスワードのSHA-1ハッシュを計算し、その先頭5文字を https://api.pwnedpasswords.com/range に送る checkPwnedPassword という関数を含んでいた。ログインの画面には「パスワード強度の診断中です...」という表示がある"
  - layer: "ヘルプセンター"
    name: "Zendesk / Cloudflare (help center at support.muumuu-domain.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、support.muumuu-domain.com は muumuu-domain.zendesk.com を指すCNAMEを持ち、当サイトのスクリプトからの取得に 403、server: cloudflare、cf-mitigated: challenge を返した。muumuu-domain.com のSPFレコードは mail.zendesk.com と _spf.onamae.com を含む"
sources:
  - label: "ムームードメイン公式: トップページ（総取得数560万件・620種類以上・お知らせ）"
    url: "https://muumuu-domain.com/"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: 価格一覧（取得・更新・移管・オプション）"
    url: "https://muumuu-domain.com/domain/price"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: ドメインずっと無料（対象ドメイン・適用条件・サポート窓口）"
    url: "https://muumuu-domain.com/domain/treats/server"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: ドメインの更新について（自動更新・更新のお知らせメール）"
    url: "https://muumuu-domain.com/supports/renew-domain"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: 利用規約（最終改定2026-09-14）"
    url: "https://muumuu-domain.com/?mode=kiyaku"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: ドメイン登録復旧費用一覧表"
    url: "https://muumuu-domain.com/?mode=recovery_contract"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: ドメインロック"
    url: "https://muumuu-domain.com/security/domain-lock"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: ムームーサーバー（ヘテムルのインフラ・最低利用期間）"
    url: "https://muumuu-domain.com/hosting/muumuu-servers"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: Google Workspace（初年度25%OFF・Google Cloud認定パートナー）"
    url: "https://muumuu-domain.com/lp/google-workspace"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: ムームードメインMCPサーバー"
    url: "https://muumuu-domain.com/muumuu-domain-mcp/"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: MCPサーバーのセットアップガイド（OAuth・スコープ）"
    url: "https://muumuu-domain.com/muumuu-domain-mcp/setup"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: ムームードメイン API v2 ドキュメント"
    url: "https://muumuu-domain.com/developers/openapi-me.html"
    accessedAt: "2026-10-11"
  - label: "ムームードメイン公式: アフィリエイトブログについて（成果報酬の表）"
    url: "https://muumuu-domain.com/affiliate"
    accessedAt: "2026-10-11"
  - label: "ムームードメインのお知らせ: 「サービス維持調整費」の導入に関するご案内（2022-12-26）"
    url: "https://muumuu-domain.com/information/news/4901"
    accessedAt: "2026-10-11"
  - label: "ムームードメインのお知らせ: 2026年8月のサービス維持調整費（2026-07-31）"
    url: "https://muumuu-domain.com/information/news/5880"
    accessedAt: "2026-10-11"
  - label: "ムームードメインのお知らせ: 2026年9月のサービス維持調整費（2026-08-31）"
    url: "https://muumuu-domain.com/information/news/5901"
    accessedAt: "2026-10-11"
  - label: "ムームードメインのお知らせ: 2026年10月のサービス維持調整費（2026-09-30）"
    url: "https://muumuu-domain.com/information/news/5918"
    accessedAt: "2026-10-11"
  - label: "ムームードメインのお知らせ: 「.co.jp」を900円で提供（2026-09-08）"
    url: "https://muumuu-domain.com/information/news/5903"
    accessedAt: "2026-10-11"
  - label: "ムームードメインのお知らせ: 汎用JP・都道府県型JPでWHOIS登録者情報の非表示設定（2026-09-14）"
    url: "https://muumuu-domain.com/information/news/5912"
    accessedAt: "2026-10-11"
  - label: "ムームードメインのお知らせ: AIホームページをMCP・コンシェルジュから契約・管理（2026-09-25）"
    url: "https://muumuu-domain.com/information/news/5919"
    accessedAt: "2026-10-11"
  - label: "GMOペパボ: プレスリリース「ムームードメイン」がClaudeの認証済みコネクタに（2026-10-07）"
    url: "https://pepabo.com/news/press/202610071300/"
    accessedAt: "2026-10-11"
  - label: "GMOペパボ株式会社: 会社概要"
    url: "https://pepabo.com/company/overview/"
    accessedAt: "2026-10-11"
  - label: "GMOペパボ株式会社: 沿革"
    url: "https://pepabo.com/company/history/"
    accessedAt: "2026-10-11"
  - label: "GMOペパボ株式会社: 会社説明資料（事業内容・セグメント別売上高比率）"
    url: "https://pdf.pepabo.com/other/pepabo_company_information.pdf"
    accessedAt: "2026-10-11"
  - label: "GMOペパボ株式会社: 2026年12月期 第2四半期 決算説明資料（2026-08-13）"
    url: "https://www.nikkei.com/markets/ir/irftp/data/tdnr/tdnetg3/20260813/g2rw0w/140120260813519264.pdf"
    accessedAt: "2026-10-11"
  - label: "Pepabo Tech Portal: GMOペパボの技術スタック · ロリポップ・ムームードメイン事業部"
    url: "https://tech.pepabo.com/tech-stack/hosting/"
    accessedAt: "2026-10-11"
  - label: "Pepabo Tech Portal: ムームードメインがショッピングカート機能をリリースしました！（2017-07-26）"
    url: "https://tech.pepabo.com/2017/07/26/muumuu-shopping-cart/"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: 「サービス維持調整費」が10月1日12時から25.50%（2026-09-25）"
    url: "https://www.onamae.com/news/article/11547"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: 「サービス維持調整費」が9月1日12時から26.25%（2026-08-25）"
    url: "https://www.onamae.com/news/article/11506"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: 「サービス維持調整費」が8月3日12時から27.00%（2026-07-24）"
    url: "https://www.onamae.com/news/article/11486"
    accessedAt: "2026-10-11"
---

ムームードメインは、GMOペパボ株式会社が運営するドメイン取得サービスだ。GMOペパボの会社説明資料によれば、同じ会社は当サイトが解剖した[ロリポップ！](/ja/articles/lolipop)や[カラーミーショップ](/ja/articles/colorme-shop)も運営する。トップページは総取得数560万件と620種類以上のドメインを掲げ、ドメインを取ったあとのメール、サーバー、サイト作成、Google Workspaceへの導線を並べる。料金表では、1年目の取得価格と、多くのドメインでそれより高い更新料金と、毎月見直される「サービス維持調整費」が重なり、その取得・更新費用は、対象のオプションと一緒に契約すると0円になる。

## サービス解説

ムームードメインは、ドメインの取得・更新・移管を中心に、ドメインロック、ムームーメール、ムームーサーバー、AIホームページ、ムームーサイト（MuuMuu Sites）、Google Workspaceなどのオプションを同じアカウントで提供する。JPドメインのオークションとバックオーダー、プレミアムドメインの取得、一括取得のメニューも並び、2026年には開発者向けのAPIと、AIエージェント向けのMCPサーバーを公開した。

:::fact
GMOペパボの沿革（2026-10-11確認）によれば、同社（当時は有限会社paperboy&co.）は2004年1月にドメイン取得代行サービス「ムームードメイン」を始め、同年3月に株式会社へ組織を変えて、グローバルメディアオンライン株式会社（現GMOインターネットグループ株式会社）の連結子会社になり、2014年4月に現在の社名へ変えた。利用規約は2004年1月15日に制定され、最新の改定は2026年9月14日だ。規約は本サービスを「ムームードメイン ドメイン取得代行サービス」と定義し、その提供にあたって、レジストラとして[お名前.com](/ja/articles/onamae)（GMOインターネット株式会社）と米国eNom, Inc.を起用すると定める。会社概要によれば、GMOペパボ株式会社の設立は2003年1月10日、証券コードは3633（東京証券取引所スタンダード市場）、資本金は2億6,222万円、2025年12月期の連結売上高は109億5,910万円、従業員数は2025年12月末時点で362名（正社員308名・臨時従業員54名）、主要株主はGMOインターネットグループ株式会社ほかだ。トップページは総取得数560万件、20年以上の実績、620種類以上の取り扱いドメインを掲げる。2026年12月期第2四半期の決算説明資料（2026年8月13日）は、ムームードメインを「400種類以上の豊富なドメイン」を扱うドメイン取得代行サービスとし、主なユーザーを個人や中小法人、契約件数を101万件（2026年6月末時点）と書く。
:::

:::fact
価格一覧（2026-10-11確認・税込・1年あたり）によれば、.comは取得750円、更新1,728円、移管1,728円で、.netは三つとも1,848円、.jpは取得990円、更新と移管が3,344円、.co.jpは取得900円、更新4,378円だ。価格一覧は取得価格の終了日を示さず、.co.jpを900円とする2026年9月8日のお知らせは、この価格は新規取得の契約期間1年に限って適用し、予告なく終了する可能性があると書く。表の上には「サービス維持調整費を含む」のチェックボックスがある。2026年9月30日のお知らせによれば、10月1日0時からの調整費は25.50%で、税抜のドメイン価格に乗じ、新規取得・契約更新・移管の請求にかかる。価格一覧のオプションの表によれば、ドメインロックは年額1,320円、ムームーメールは年額2,350円、ムームーサーバーは初回2ヵ月無料のあと月額1,430円、AIホームページは月額2,200円だ。「ドメインずっと無料」のページによれば、ムームーサーバーかGoogle Workspace（Standardプラン以上）とドメインを同時に契約すると、.jp、.com、.co.jp、.netなど45種類以上の対象ドメインの取得費用と更新費用が0円になる。条件はクレジットカードでの取得、1年契約、対象オプションの同時契約と継続利用で、オプションを解約するか支払いがなければ優待は解除され、プレミアムドメインは対象外となる。利用規約の第27条は、上位レジストラとレジストリが定める範囲で、Whois情報にGMOペパボの情報を無料で代理公開できると定める。
:::

:::pull
ドメインの値段は、1年目の取得価格では決まらない。2年目からの更新料金と毎月の調整費、そしてオプションと一緒に契約するかどうかで決まる。
:::

::scorecard

## UX分析

ムームードメインの体験は、検索窓とAIによるドメイン名の提案から始まり、取得後のメールやサイト作成へと続く。支払う額の全体像は、チェックボックス、注記、お知らせに分かれて置かれている。

- **表の初期表示は調整費を含まない**。当サイトの実観測（2026-10-11）では、価格一覧のチェックボックス「サービス維持調整費を含む」はHTMLの時点で外れており、ページに埋め込まれた表示設定も調整費を含まない状態だった。同じデータには調整費込みの税込価格も入っており、.comの更新は1,728円に対して2,168円、.jpの更新は3,344円に対して4,196円になる。お知らせは、価格一覧はドメイン価格（税込）で記載しており、実際の金額は請求金額の画面で確かめるよう求める。
- **自動更新は最初から有効**。「ドメインの更新について」のページによれば、ドメインには取得時に自動更新が設定され、更新期限の1ヵ月前に、そのドメインの最低更新可能年数で決済される。自動更新で使えるのはクレジットカードとおさいぽ！決済で、コンビニ決済と銀行振込はコントロールパネルからの手動更新で選べる。更新のお知らせメールは有効期限の30日前、15日前、10日前、2日前、1日前、当日に届き、メールからはログインせずに更新できる。
- **期限切れからの復旧は別料金**。ドメイン登録復旧費用一覧表によれば、期限が切れたドメインの登録を復旧する費用は、.jpと都道府県型の.jpが13,280円、.co.jpと.or.jpが28,600円、.comや.netなどが37,500円で、別にドメインの更新料金がかかる。復旧できる期間はドメインによって異なると注記する。
- **Whoisの代理公開は無料、JPドメインは登録者名も隠せる**。利用規約の第27条によれば、Whois情報代理公開は取得時と会員専用ページから無料で使え、適用中はレジストラの移管ができない。2026年9月14日のお知らせによれば、汎用JPと都道府県型JPのドメインでは、JPRSが提供する「WHOIS登録者情報非表示設定機能」で、登録者名をドメインごとに非表示にできるようになった。同じ日に足された利用規約の第27条の2は、初期設定を公開とし、本人が選んだ場合に限って非公開にすると定め、Whois情報代理公開とは併用できないとする。
- **制作会社とクライアントの間に承認を挟む**。ドメインロックのページによれば、WHOIS情報、ネームサーバー、管理者の変更（移管・譲渡）、契約設定（自動更新の変更・解約）の4項目をロックでき、ロックした項目を変えるには申請と承認が要る。申請者を制作会社、承認者をクライアントとする流れを図で示し、料金は1ドメイン年1,320円、支払いはクレジットカードとおさいぽ！決済に限られる。
- **AIに任せる操作と、人が確かめる操作**。2026年9月25日のお知らせによれば、ムームードメインMCPとコントロールパネル内の「ムームードメインコンシェルジュ」から、AIホームページの契約状況の確認、10日間の無料お試しの開始、自動更新の変更、解約などができるようになったが、お試しから有料の本契約への切り替えだけは「安全のため」AIから直接は行えず、コントロールパネルで手続きする。MCPのセットアップガイドは、一度完了した購入はキャンセルできないとして、購入時に必ず金額を確認するよう求める。

## 技術構成

::techstack

:::fact
当サイトの実観測（2026-10-11）では、当サイトが取得した muumuu-domain.com のページはいずれも HTTP/2 で server: istio-envoy と x-envoy-upstream-service-time を返し、muu-origin-app という独自のヘッダーの値がページによって異なった。トップ、価格一覧、API・MCPのページは js で、HTMLは /_nuxt/ 配下のスクリプトと window.__NUXT__ の状態データを含む。利用規約や移管などの /?mode= のページは php で、PHPSESSID のクッキーと文字コードEUC-JPを返した。お知らせとキャンペーンの /information/ のページ、ログインの /checkout/login、MCPのOAuth認可サーバーのメタデータは rb で、/information/ とログインのページは _www-smartphone_session という名前のクッキーを設定し、HTMLに csrf-param と csrf-token のmetaタグを含んでいた。ログインのページはムームーIDとパスワードのほかにGoogle認証でのログインを用意し、読み込む pwned_password という名前のスクリプトは、入力されたパスワードのSHA-1ハッシュの先頭5文字を api.pwnedpasswords.com の range に送る関数を含んでいた。トップページのHTMLは837,918バイトで、その8割あまりを状態データが占め、価格一覧のページと同じく、521件のドメインの価格データと93件の機能フラグを埋め込んでいた。2017年7月26日の技術ブログで、ムームードメインのエンジニアは、サービス開始以来PHPで開発を進めてきたこと、近年はスマートフォン用のサイトやLPなどをRuby on Railsで開発していること、ショッピングカートはトップページを除くすべてのページをRuby on Rails（当時4.2）とVue.jsで作ったことを書いている。GMOペパボの技術スタックのページは、ロリポップ・ムームードメイン事業部のサービスサイトの言語としてGo、TypeScript、PHP、Rubyを、フロントエンドにReact/Next.jsとVue.js/Nuxt.jsを、インフラにベアメタル、KVM、OpenStack、Kubernetes、AWS、Google Cloudなどを挙げる。
:::

:::fact
API v2のドキュメント（2026-10-11確認）はOpenAPI 3.1.0で書かれ、Redocで公開されている。保有ドメインの一覧と詳細、自動更新の設定、DNSレコードの作成・更新・削除、ネームサーバーの確認と変更、空き状況の検索、購入の見積もりと購入、Personal Access Token（PAT）の管理、支払い履歴などのエンドポイントを持ち、レート制限は認証済みで1時間1,000リクエスト、未認証で100リクエスト、DNSレコードは1ドメイン200件（SOAを除く）までだ。本番のデータベースから切り離したサンドボックス（api-sandbox.muumuu-domain.com）では、テスト用のPATを自分で発行できる。購入の前には必ず見積もりのAPIを呼ぶよう求め、そこで発行される購入トークンの有効期限は10分で、金額をユーザーに示して同意を得てから購入を実行するよう書く。MCPのページは「国内初のドメインMCPサーバー」を掲げ、全11種のツールでドメインの検索・取得、管理、DNS設定を扱い、MCPサーバー自体の利用は無料とする。セットアップガイドによれば、接続先は https://mcp.muumuu-domain.com/mcp で、Claude Codeでは --transport http で追加し、認証はOAuth 2.0、アクセストークンは2時間の短命で自動更新され、domains:read、dns:write、domains:purchase、options:write などのスコープを認可する。当サイトの実観測（2026-10-11）では、同じホストのOAuth認可サーバーのメタデータは、OAuth 2.1、認可コードとリフレッシュトークン、S256のPKCEの必須化、動的クライアント登録のエンドポイントを示した。2026年10月7日のプレスリリースによれば、このリモートMCPサーバーは2026年9月30日から、Anthropic社のClaudeの「Connectors Directory」に「認証済み」コネクタとして掲載され、ドメイン購入の決済は利用者自身がムームードメインのサイト上で確定する仕組みだ。同じリリースは、2026年3月31日にリモートMCPサーバーの提供を始め、5月にAPI v2を一般公開し、6月にコントロールパネルへAIアシスタント「ムームードメインコンシェルジュ」を載せたと振り返る。
:::

:::guess
/?mode= のPHP、/information/ や /checkout/ のRuby、/_nuxt/ のNuxtという三つの応答は、2004年からのPHPのサイトを、全面的に作り直すのではなく、Railsのスマートフォン向けサイトやカート、Nuxtのページへとページ単位で置き換えてきた跡と読める。muu-origin-app というヘッダーは、Istioの入口でパスごとに振り分けた先のアプリケーションを示しているとみられる。クッキーの名前 _www-smartphone_session からは、2017年の記事にあるスマートフォン用のRailsアプリケーションが、いまはお知らせやログイン、OAuthの認可を受け持っていることがうかがえる。ログインの画面でパスワードのハッシュの先頭5文字だけを外部に送るのは、パスワードそのものを渡さずに、漏えい済みの文字列かどうかを確かめる仕組みと読める。トップページのHTMLの大半を状態データが占めるのは、価格や機能フラグをすべてのページで共有するストアに載せているためと推測される。API v2とMCPサーバーは、見積もりと購入を分け、購入トークンを10分で失効させ、MCPからの購入の決済をサイト上で確定させる。AIエージェントが誤って、あるいは利用者の意図を超えて課金することを、仕組みの側で防ぐ設計と読める。
:::

## 単体で買う値段と、ずっと無料になる条件

:::fact
当サイトの実観測（2026-10-11）では、価格一覧のページに埋め込まれたデータで、各ドメインの取得価格は通常価格（original_price）とキャンペーン価格（campaign_price）の二つの欄に分かれ、.comは通常価格1,728円に対してキャンペーン価格750円、.jpは3,344円に対して990円、.co.jpは4,378円に対して900円、.onlineは5,478円に対して125円が入っていた。取得のキャンペーン価格が入っていたのは521件中120件で、更新と移管の欄にキャンペーン価格が入ったドメインはなく、表に出る更新料金は.comが1,728円、.onlineが5,962円だ。同じデータの調整費込みの税込価格は、税抜価格に25.50%を加えて消費税10%を足し、1円未満を切り捨てた値と一致した（当サイトの計算）。調整費は2022年12月26日のお知らせで、国内の電気料金の高騰、為替の円安、ドメインの仕入れ価格の値上がりを理由に、2023年2月1日から10〜20%程度で導入すると告知され、1〜3ヵ月ごとに見直す予定とされた。2026年は、7月31日のお知らせが8月を27.00%、8月31日のお知らせが9月を26.25%、9月30日のお知らせが10月を25.50%とし、いずれも毎月1日の0時に切り替わる。利用規約がレジストラとして名前を挙げるお名前.comも、ドメイン（オプション含む）の調整費を、8月3日12時から27.00%、9月1日12時から26.25%、10月1日12時から25.50%とし、主な要因に為替状況の変動を挙げる。
:::

| ドメイン（税込） | 1年目の取得 | 1年の更新 | 調整費25.50%込みの更新 | 移管 | ずっと無料の対象 |
| --- | --- | --- | --- | --- | --- |
| .com | 750円 | 1,728円 | 2,168円 | 1,728円 | 対象 |
| .net | 1,848円 | 1,848円 | 2,318円 | 1,848円 | 対象 |
| .jp | 990円 | 3,344円 | 4,196円 | 3,344円 | 対象 |
| .co.jp | 900円 | 4,378円 | 5,493円 | 表に記載なし | 対象 |
| .tokyo | 126円 | 2,560円 | 3,213円 | 2,560円 | 対象 |
| .shop | 335円 | 6,690円 | 8,395円 | 6,690円 | 対象 |
| .online | 125円 | 5,962円 | 7,482円 | 5,962円 | 一覧になし |

1年目・更新・移管は価格一覧の初期表示（調整費を含まない税込）、調整費込みの更新はページに埋め込まれたデータの値（いずれも2026-10-11確認）。右端は「ドメインずっと無料」のページの対象ドメインの一覧による。ずっと無料の適用には、ムームーサーバーかGoogle Workspace（Standardプラン以上）との同時契約、クレジットカードでの1年契約などの条件がある。

:::guess
1年目の価格をキャンペーン価格（campaign_price）の欄に持ちながら終了日を示さないのは、1年目の安さを常設の入口として使い、2年目以降の更新料金で回収する設計とみられる。.onlineは1年目の125円に対して更新が5,962円で、調整費を含めると7,482円になる。この差をセット契約でまるごと0円にできると示すのが「ドメインずっと無料」で、ドメイン単体の更新料金を、サーバーやGoogle Workspaceの月額に置き換えて契約をつなぎとめる仕組みと読める。対象の一覧に.onlineのような1年目の安いドメインが入っていないのも、無料で配る範囲を選んでいる表れと推測される。調整費の料率は2026年8月から10月まで、お名前.comと同じ値で動いた。利用規約がお名前.comをレジストラとして挙げていることを合わせると、上位の事業者が決める料率、ひいては為替の動きを、そのまま利用者の料金に映しているとみられる。ただし切り替えの時刻は、ムームードメインが毎月1日の0時、お名前.comが9月と10月は1日の12時、8月は3日の12時で、そのあいだは両社の料率が食い違う。
:::

## ビジネスモデル

ムームードメインの料金は、ドメインの取得・更新・移管と、その上に重ねるオプションの月額・年額でできている。紹介は、成果報酬の表を公開したアフィリエイトプログラムで集め、API連携でドメインを配る事業者向けの規約も用意している。

:::fact
GMOペパボの会社説明資料（2025年12月末時点）によれば、ドメイン・レンタルサーバー（ホスティング）事業は2025年12月期の連結売上高109億円の56.6%を占め、ムームードメインの利用料金は年額0円〜（レンタルサーバーとセットで契約した場合。利用料金のほかに別途サービス維持調整費用が発生）、契約件数は102万件とされる。2026年12月期第2四半期の決算説明資料（2026年8月13日）の四半期推移によれば、ムームードメインの契約ドメイン数は2024年6月末の1,076,138件から、2025年6月末に1,036,661件、2026年6月末に1,012,324件へ減った。同じ時点を含む四半期の売上高は6億5,000万円から6億7,000万円、7億3,200万円へ、営業利益は1億1,600万円から1億1,500万円、1億4,200万円へ動いた（いずれも百万円未満切り捨て）。2026年上半期の累計では、ムームードメインの売上高は14億4,500万円（前年同期比108.5%）、営業利益は2億6,600万円（同121.2%）で、資料は増収の理由に「ムームードメイン関連オプション、ムームーサーバー」を挙げる。同じ資料は、ムームードメイン関連オプション、ロリポップ！固定IPアクセス、ロリポップ！ for Gamersを合わせた新しいサービスの上半期の売上高を1億5,600万円（前年同期比291.0%）とし、法人によるGoogle Workspaceの導入とドメインのセット契約が好調だと書く。Google Workspaceのページ（2026-10-11確認）によれば、ムームードメインで契約すると初年度は通常価格の25%引き（ページの表記は「10月31日まで」）で、Business Standardは月額1,320円（通常1,760円）、更新は通常価格になり、GMOペパボはGoogle Cloudの認定パートナーだという。アフィリエイトのページは、成果報酬をムームーサーバーの新規契約（3ヵ月以上の契約）5,000円、ムームードメイン for WPホスティングの契約3,000円、Google Workspaceの契約（1アカウントにつき）2,000円、ドメインの取得とムームードメインへの移管が各100円、広告1クリック1円とし、「紹介プログラムについて詳しく見る」のリンクはA8.netのプログラム検索を開く。利用規約の第32条の8は、自社のサービスの顧客に附属サービスとしてドメインを提供する事業者が、GMOペパボの個別の承諾を得てAPIで連携する仕組みを定め、独立したドメインの提供サービスに使うことを禁じる。
:::

:::guess
契約ドメイン数が2年で6万件あまり減るなかで、四半期の売上高が1割強、営業利益が2割強増えたのは、1ドメインあたりの稼ぎをオプションの積み上げで増やしてきた結果とみられる。「ドメインずっと無料」は、ドメインの更新料金を受け取らない代わりに、ムームーサーバーの月額1,430円やGoogle Workspaceの月額を受け取る契約へ切り替える仕組みと読め、決算資料が挙げる増収の理由とも重なる。トップページの総取得数560万件と、決算資料の契約ドメイン数約101万件の差は、累計の取得数と、いま契約が続いているドメイン数の違いと読める。APIとMCPの整備や、API連携でドメインを配る事業者向けの規約は、個人が画面で買う流れに加えて、制作会社や他社のサービス、AIエージェントを新しい買い手にする試みと推測される。アフィリエイトの報酬が、ドメインの取得の100円に対してムームーサーバーの新規契約では5,000円と開いているのも、ドメインそのものより、上に乗る月額の契約に価値を置く設計を映しているとみられる。
:::

2004年にPHPのサイトとして始まったムームードメインは、Railsのカート、Nuxtのページ、そしてAPIとMCPサーバーと、層を重ねながら22年あまり続いてきた。料金表は、750円の1年目、1,728円の更新、25.50%の調整費という三段でできており、その横に、サーバーやGoogle Workspaceと一緒なら0円という別の道が引かれている。契約ドメイン数が減るなかで売上を伸ばす今の形を、人の手による購入だけでなく、AIエージェントが選ぶ入口へと広げられるかが、国内のドメイン取得サービスの老舗に問われている。
