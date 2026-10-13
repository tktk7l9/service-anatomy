---
service: "バリュードメイン"
title: "同じ.comに三つの値段 — レジストラごとに行を分けた料金表、24.5%の調整費を含めて示す価格、AIエージェントにドメインとサーバーを任せるOne MCPから、バリュードメインを解剖する"
description: "バリュードメインは、GMOインターネットグループのGMOデジロック株式会社（本社・大阪市）が運営するドメイン登録サービスだ。2002年1月に始めた「DOMAIN.XREA.COM」と、同年3月にeNom, Inc.の代理店として始めたドメイン登録代行を源流に持ち、8月にDOMAIN.XREA.COMを「VALUE-DOMAIN」へ改名した。トップページは累計ドメイン登録件数700万件と登録ユーザー数65万人の突破、570種類以上の取り扱いを掲げる。価格一覧（2026-10-13確認・税込）はサービス維持調整費率を含む金額を示し、GMOの.comは1年目790円、更新と移管が1,986円で、同じ.comをKeySystemsで取れば2,231円、eNomなら2,643円と、レジストラごとに別の行で載せる。10月の価格表のPDFは調整費率を24.5%と書き、11月1日からは卸元レジストラの提供価格の変更を理由に、GMOの.comの通常価格を2,283円に上げると告知した。価格一覧、利用規約、APIとOne MCPの公式ドキュメント、ユーザーガイド、お知らせと価格表、GMOデジロックの会社情報、当サイトの実観測から、レジストラを選ぶ料金表、月ごとに出し直す価格表、従来のサイトとValue Domain Oneが並ぶ構成、ドメインをサーバーへの入口にする事業までを解剖する。"
lead: "バリュードメインの価格一覧で.comを探すと、行が三つ並ぶ。GMOの.comは1年目790円・更新1,986円、KeySystemsの.comは2,231円、eNomの.comは2,643円だ。表の下には「上記表示金額は、サービス維持調整費率を含みます。」とあり、月ごとに出る価格表のPDFは、10月の料率を24.5%と書く。2002年に生まれ、従業員23名の会社が運営するこのサービスは、2026年にログインを新しいValue Domain Oneへ統合し、AIエージェントからドメインやサーバーを操作できるMCPサーバーを開いた。その値付けと仕組みとお金の流れを、公開情報だけで解剖する。"
category: dev-tool
tags: [domains, hosting, small-business, api, mcp, security, php, cloudflare]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-31"
    claim: "トップページの料金欄に「（2026.10.31まで）」と添えられた価格（.comの1年目790円など）と、.co.jpの新規取得2,000円のキャンペーン（10月31日まで）"
  - date: "2026-10-31"
    claim: "10月の価格表のサービス維持調整費率24.5%と、それを含む価格（.comの更新1,986円など）、お名前.comの10月の調整費25.50%"
  - date: "2026-10-31"
    claim: "11月1日からの価格改定の告知（GMOの.comの通常価格2,283円など）。改定後の実際の価格と調整費率を確かめる"
serviceUrl: "https://www.value-domain.com/"
# Affiliate link placeholder: Value Domain runs its affiliate program through the ASP A8.net
# (https://www.value-domain.com/affiliate/, checked 2026-10-13): register with A8.net for free, then
# apply to the program there (the page's "詳細はこちら" link opens A8.net's program search, keyword
# s00000007238). Rewards (tax excluded): new domain 100 yen (50 at a campaign price), transfer in
# 100 yen (50 at a campaign price), Omakase Start 2,000 yen, CORESERVER new contracts 100-10,000 yen,
# Value Server 1,000-3,000 yen, XREA (tax included) 50-700 yen, SiteLock 100-3,500 yen, Value-Auth
# 30-5,000 yen. A separate in-house referral program pays Value Domain points. A8.net ad code must be
# used as provided: link to affiliate.url, 1x1 image to affiliate.impressionUrl, text ad verbatim to
# affiliate.label. Never invent the label — ask the owner. No new-window ban was found, so sameWindow
# is not set. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<value-domain-material>"
#   program: "Value Domain Affiliate Program (A8.net)"
#   impressionUrl: "https://www<nn>.a8.net/0.gif?a8mat=<value-domain-material>"
#   label: "<verbatim text of the ad material>"
vendor: "GMOデジロック株式会社"
origin: "JP"
heroTheme: "value-domain"
scores: { product: 3.5, ux: 3.0, tech: 3.5, business: 3.5 }
techStack:
  - layer: "レジストラ"
    name: "GMO (Onamae.com) / eNom / KeySystems / JPRS"
    confidence: confirmed
    evidence: "利用規約（2026-10-13確認）の「バリュードメイン サービス利用規約」は、上位レジストラとしてお名前.com、ENOM、KeySystemsの規約へのリンクを並べ、JPドメインについてはJPRSのドメイン登録規約への同意を求める。サービス稼働状況のページは、ドメインの項目に「GMO(お名前.com)」「JPRS」「eNom」「KeySystems」を並べる。GMOデジロックの沿革は、2002年3月にeNom, Inc.の代理店としてドメイン登録代行を始め、2003年9月に汎用JPドメインの指定業者契約を結び、2004年1月にドイツのレジストラKeySystems社と契約したと書く"
    evidenceUrl: "https://www.value-domain.com/terms/"
  - layer: "サイトの配信・DNS"
    name: "Cloudflare (proxy, DNS)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、www・one・status・web3・mcp の各 value-domain.com のホストは server: cloudflare と末尾がNRTの cf-ray を返し、__cf_bm という名前のクッキーを設定した。value-domain.com のネームサーバーは gabriel.ns.cloudflare.com と vera.ns.cloudflare.com で、利用者向けの ns1〜ns5・ns11〜ns13.value-domain.com は、Cloudflareが自社のIPv4アドレス範囲として公開する 172.64.0.0/13 の中のアドレスを返した"
  - layer: "利用者向けDNS"
    name: "Value Domain name servers + DNSSEC"
    confidence: confirmed
    evidence: "DNSSECの設定方法のマニュアル（2026-10-13確認）に、DNSSECは、バリュードメインで管理し、かつ同社のネームサーバー ns1～5.value-domain.com、ns11～13.value-domain.com を使うドメインで利用でき、他社管理のドメインでは使えないと明記。無料SSL（Let’s Encrypt）を使う場合に足すCAAレコードの例を「caa @ 0 issue “letsencrypt.org”」の1行で示す"
    evidenceUrl: "https://www.value-domain.com/userguide/manual/dnssec"
  - layer: "従来のサービスサイト"
    name: "PHP / jQuery"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、www.value-domain.com はログインの /login.php、サポートの /support.php など .php で終わるURLを使い、/vdapi/ は PHPSESSID のクッキーを設定してから one.value-domain.com のログインへ転送した。トップページは /assets/js/lib/jquery.js（jQuery v3.5.1）と、jsDelivrの slick-carousel 1.8.1 を読み込んでいた"
  - layer: "Value Domain One"
    name: "Laravel + Livewire / LiteSpeed"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、one.value-domain.com と mcp.value-domain.com は x-turbo-charged-by: LiteSpeed を返した。one.value-domain.com は XSRF-TOKEN と value_domain_one_session という名前のクッキーを設定し、HTMLは /livewire/livewire.min.js、/build/assets/ 配下のスクリプト、Tailwind CSSのCDN、Bootstrap 5.3.0、jQuery 3.7.1 を読み込んでいた。Livewireの公式サイトは、LivewireをLaravelのためのフレームワークとして紹介する"
  - layer: "公開API"
    name: "Value Domain API v1 / OpenAPI 3.0 + ReDoc (Bearer token)"
    confidence: confirmed
    evidence: "APIドキュメント（ドメイン、2026-10-13確認）はOpenAPI 3.0.0で書かれ、ReDoc 2.0.0-rc.24で公開されている。エンドポイントは https://api.value-domain.com/v1/、認証はBearerトークンで、ドメインの登録・移管・有効期限・DNS・DNSSECなどの操作を並べ、新規登録のレジストラの項目は「'GMO'のみ対応しています」と書く。APIのページは、APIキーの発行にSMS認証を求め、管理レジストラがEnomとKey-Systemsのドメインは未対応とする"
    evidenceUrl: "https://www.value-domain.com/api/doc/domain/"
  - layer: "AIエージェント連携"
    name: "One MCP (remote MCP server, OAuth 2.1 + PKCE)"
    confidence: confirmed
    evidence: "One MCPのページ（最終更新2026年10月8日・2026-10-13確認）に、接続先 https://mcp.value-domain.com/mcp、Claude Codeでの --transport http による追加、OAuth 2.1とPKCEによる認証、MCPサーバーの利用料は無料（AIトークン料金は利用者の負担）と明記。当サイトの実観測（2026-10-13）では、同じホストの認可サーバーのメタデータが、認可コードのグラント、S256のPKCE、動的クライアント登録のエンドポイントを示した"
    evidenceUrl: "https://one.value-domain.com/service/mcp"
  - layer: "AIによるドメイン名の提案"
    name: "OpenAI"
    confidence: confirmed
    evidence: "利用規約の「AIを利用した機能についての利用規約」（2023年6月23日の改定で追加）に、AIを利用した機能の利用にあたり、利用者はOpenAIの利用規約を遵守し、送信した情報がOpenAIにより保存・利用されることを承諾すると明記。トップページの「最適なドメインをAIに質問」の欄は、利用規約を確認のうえで使うよう求める"
    evidenceUrl: "https://www.value-domain.com/terms/"
  - layer: "サポートのAIチャット"
    name: "DocsBot AI (chat widget)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、トップページとライブチャットのページは widget.docsbot.ai の chat.js を読み込む処理を含み、ユーザーガイドのページは docsbot-chat.js という名前のスクリプトを読み込んでいた。www.value-domain.com の応答の Content-Security-Policy にも docsbot.ai が並んでいた"
  - layer: "NFTドメイン"
    name: "Unstoppable Domains / ENS resolution"
    confidence: confirmed
    evidence: "Value Domain Web3のページ（2026-10-13確認）のお知らせの一覧は、2023年5月25日の「Value Domain Web3 byGMO」のリリース、2023年8月3日の「unstoppableパートナーシップ締結記念」のキャンペーン、2024年3月27日のDNSドメインでのENS名前解決機能の提供開始を並べ、「NFTドメイン上位レジストラ(UnstoppableDomains)」という表記を含む。取り扱うTLDとして .x、.nft、.crypto など12種類（当サイトの集計）を並べる"
    evidenceUrl: "https://web3.value-domain.com/"
sources:
  - label: "バリュードメイン公式: トップページ（累計登録件数・取り扱い種類・AIによるドメイン名の提案・登録の入口）"
    url: "https://www.value-domain.com/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: ドメイン価格一覧（レジストラ別・サービス維持調整費率込み）"
    url: "https://www.value-domain.com/domain/price/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: ドメイン移管（レジストラの選択・移管できるドメイン・注意事項）"
    url: "https://www.value-domain.com/domain/transfer/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: ドメイン実質永久無料（コアサーバーV2との同時申込）"
    url: "https://www.value-domain.com/guide/setregist/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: お得意様割引（15個以上・100個以上）"
    url: "https://www.value-domain.com/service/repeat-customer-discount/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: 利用規約（会員規約・サービス利用規約・上位レジストラ・AIを利用した機能）"
    url: "https://www.value-domain.com/terms/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: 特定商取引法に関する表記"
    url: "https://www.value-domain.com/commercial/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: 資金決済法に基づく表記（購入可能金額・ポイントの有効期間）"
    url: "https://www.value-domain.com/settlement/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: バリュードメインAPI（API割・SMS認証・対応レジストラ）"
    url: "https://www.value-domain.com/service/api/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: バリュードメインAPIドキュメント（ドメイン）"
    url: "https://www.value-domain.com/api/doc/domain/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: ドメイン・ホスティングOEM"
    url: "https://www.value-domain.com/service/oem/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: アフィリエイトプログラム（A8.net・成果報酬）"
    url: "https://www.value-domain.com/affiliate/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン ユーザーガイド: 自動更新設定の説明"
    url: "https://www.value-domain.com/userguide/manual/autorenewal_about"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン ユーザーガイド: DNSSECの設定方法"
    url: "https://www.value-domain.com/userguide/manual/dnssec"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン ユーザーガイド: WHOIS情報公開代行の設定"
    url: "https://www.value-domain.com/userguide/manual/whoisproxy_on"
    accessedAt: "2026-10-13"
  - label: "バリュードメインのお知らせ: 「サービス維持調整費」導入に関するご案内（2022-12-26）"
    url: "https://www.value-domain.com/information/detail/?no=20221226-1"
    accessedAt: "2026-10-13"
  - label: "バリュードメインのお知らせ: 2026年10月ドメイン価格についてのお知らせ（2026-09-28）"
    url: "https://www.value-domain.com/information/detail/?no=20260928-2"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: ドメイン改定価格一覧（10/1〜・PDF）"
    url: "https://www.value-domain.com/assets/pdf/information/2026/0928/domain_price.pdf"
    accessedAt: "2026-10-13"
  - label: "バリュードメインのお知らせ: ドメイン価格改定のお知らせ（2026-09-15）"
    url: "https://www.value-domain.com/information/detail/?no=20260915-1"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: ドメイン改定価格一覧（11/1〜・PDF）"
    url: "https://www.value-domain.com/assets/pdf/information/2026/0915/domain_price.pdf"
    accessedAt: "2026-10-13"
  - label: "バリュードメインのお知らせ: co.jpドメイン新規取得キャンペーン（2026-09-01）"
    url: "https://www.value-domain.com/information/detail/?no=20260901-2"
    accessedAt: "2026-10-13"
  - label: "バリュードメインのお知らせ: ログイン画面およびお問い合わせ窓口の統合（2026-09-24）"
    url: "https://www.value-domain.com/information/detail/?no=20260924-1"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン: サービス稼働状況（ドメインの上位レジストラ別の表示）"
    url: "https://status.value-domain.com/"
    accessedAt: "2026-10-13"
  - label: "Value Domain One: One MCP（接続方法・対応する操作・料金）"
    url: "https://one.value-domain.com/service/mcp"
    accessedAt: "2026-10-13"
  - label: "Value Domain One: Oneレンタルサーバー（プラン・ドメイン永久無料特典）"
    url: "https://one.value-domain.com/rs"
    accessedAt: "2026-10-13"
  - label: "Value Domain Web3: NFTドメイン登録・管理サービス"
    url: "https://web3.value-domain.com/"
    accessedAt: "2026-10-13"
  - label: "GMOデジロック株式会社: 会社情報（会社概要・沿革）"
    url: "https://www.digirock.co.jp/about/"
    accessedAt: "2026-10-13"
  - label: "お名前.comのお知らせ: 「サービス維持調整費」が10月1日12時から25.50%（2026-09-25）"
    url: "https://www.onamae.com/news/article/11547"
    accessedAt: "2026-10-13"
  - label: "Cloudflare: IP Ranges（IPv4）"
    url: "https://www.cloudflare.com/ips-v4"
    accessedAt: "2026-10-13"
  - label: "Livewire公式サイト"
    url: "https://livewire.laravel.com/"
    accessedAt: "2026-10-13"
---

バリュードメインは、GMOインターネットグループのGMOデジロック株式会社が運営するドメイン登録サービスだ。同じ会社はレンタルサーバーのコアサーバー、バリューサーバー、XREAも運営し、トップページは、一つのアカウントでドメインとレンタルサーバーを管理できると書く。価格一覧では、同じTLDがレジストラごとに別の行に並び、金額はサービス維持調整費を含めて示され、その料率は月ごとのお知らせと価格表のPDFで告げられる。2026年にはログインを新しい「Value Domain One」へ統合し、AIエージェント向けのMCPサーバーも公開した。当サイトは、ドメイン登録サービスとして[お名前.com](/ja/articles/onamae)と[ムームードメイン](/ja/articles/muumuu-domain)も解剖している。

## サービス解説

バリュードメインは、ドメインの登録・更新・移管を中心に、.jpドメインのオークションとバックオーダー、gTLDオークション、プレミアムドメイン、WHOIS検索、SSL証明書、サイトロックなどを並べ、コアサーバー、バリューサーバー、XREA、Oneレンタルサーバーとあわせて契約できる。トップページには、要望を書くとAIがドメイン名を考える「最適なドメインをAIに質問」の欄があり、NFTドメインは別サイトの「Value Domain Web3」で扱う。

:::fact
GMOデジロックの会社情報（2026-10-13確認）によれば、同社（英語名GMO DigiRock, Inc.）は2001年7月に有限会社デジロックとして登記され、翌月にレンタルサーバーのXREAを始めた。2002年1月に他社のドメインをXREAのサーバーで提供する「DOMAIN.XREA.COM」を始め、3月にeNom, Inc.の代理店としてドメイン登録代行サービスを開始し、8月にDOMAIN.XREA.COMを「VALUE-DOMAIN」に改名した。2003年9月に汎用JPドメインの指定業者契約を結び、2004年1月にドイツのレジストラKeySystems社と契約し、同年4月に株式会社となった。2011年7月にGMOインターネットグループ株式会社と資本・業務提携し、2013年5月に現在の社名へ変え、2026年2月にValue Domain OneとOneレンタルサーバーを正式に始めた。事業内容はインターネットサービスの提供とソフトウェアの開発で、従業員数は23名（2026年10月1日現在）、資本金は1,000万円、本社は大阪市北区のグランフロント大阪にある。バリュードメインのトップページは、累計ドメイン登録件数700万件の突破、登録ユーザー数65万人の突破、サービス運用20周年の突破、570種類以上の取り扱いを掲げる。利用規約の「バリュードメイン サービス利用規約」は、このサービスをセカンドレベルドメインの登録と、そのドメインを運用するネームサーバーを提供するものと定め、利用者を日本国内に住み日本語を理解できる者とし、「上位レジストラ」としてお名前.com、ENOM、KeySystemsの規約へのリンクを並べる。
:::

:::fact
価格一覧（2026-10-13確認・税込）は、表の下に「上記表示金額は、サービス維持調整費率を含みます。」と注記する。GMOをレジストラとする.comは1年目の新規取得が790円、更新と移管が1,986円で、トップページは2個目以降の.comを1,390円とする。.netは1年目2,090円・更新2,301円、.jpは1年目2,035円・更新と移管が3,889円、.co.jpは更新と移管が5,177円で、2026年9月1日のお知らせによれば、10月31日までのキャンペーンで.co.jpの新規取得が2,000円（サービス維持調整費込）になる。トップページの料金欄には「（2026.10.31まで）」と添えられている。2026年9月28日のお知らせと、その価格表のPDFによれば、10月1日0時からの価格は「サービス維持調整費率 24.5%を含むお支払い額」で、キャンペーンの対象を除くドメインの登録・更新・移管に適用される。この調整費は、2022年12月26日のお知らせで、国内の電気料金の高騰、為替の円安、ドメインの仕入れ価格の値上がりを理由に、2023年2月1日以降の手続きから10〜20%程度を加算すると告知され、1〜3ヵ月程度ごとに見直す予定とされた。15個以上のドメインを管理するアカウントには「お得意様割引」があり、次の取得・移管・更新から.comが1,781円になる。コアサーバーV2プラン（CORE-X・Y・Zのいずれか）をドメインと同時に申し込み、お試し期間中に12ヶ月以上で本契約すると、対象のドメイン（.com、.net、.org、.biz、.info、.jp）の更新費用が無料になり、同時に取得したドメインは取得費用も無料になる「ドメイン永久無料」の特典もある。他社管理のドメインとプレミアムドメインは対象外だ。
:::

:::pull
ドメインの値段は、TLDだけでは決まらない。どのレジストラを通すか、何個を持つか、どの月に払うか、サーバーと一緒に契約するかで変わる。
:::

::scorecard

## UX分析

バリュードメインの体験は、検索窓とAIによるドメイン名の提案から始まる。支払う額を確かめる場所は、価格一覧、月ごとのお知らせとPDF、割引や特典のページに分かれている。

- **料金表は調整費込みで、開くとセール中の行が並ぶ**。当サイトの実観測（2026-10-13）では、価格一覧の表は517行あり、HTMLの時点で「セール中」のタブが選ばれた状態だった。キャンペーン価格の行は126行で、いずれも1年目の新規取得が更新より安い（行数はいずれも当サイトの集計）。列はドメイン名のほか「新規取得（初年度）」「更新/年」「移管」「新規取得（定価）」「WHOIS代行」で、1年目の値段の隣に定価が並ぶ。表の金額にはサービス維持調整費率が含まれ、価格表のPDFもこれを「お支払い額」と呼ぶ。
- **月初の価格改定をまたぐと、更新が止まる**。2026年9月28日のお知らせは、月初の価格改定をまたいで更新すると、実際の更新料金との差異が生じてドメインの更新手続きが行われないと注意する。銀行振込・郵便振替やコンビニ決済では、入金の反映（通常は銀行の翌々営業日以内）が月をまたがないよう求め、差異が出た場合は差額の入金が必要になる。即時に決済できるクレジットカード自動決済などの支払いも勧める。
- **自動更新は30日前から6回、事前の案内はない**。自動更新設定の説明によれば、「自動更新する」に設定したドメインとサーバーは、有効期限日の30日前から計6回、更新が実施され、メールなどでの事前告知はない。正常に更新されるには、前払いの「購入可能金額」が更新料金に足りているか、クレジットカード自動決済が有効になっている必要がある。資金決済法に基づく表記によれば、購入可能金額の有効期間は購入日から3年間、バリュードメインポイントは取得日から6ヶ月間だ。
- **ログインはOneに統合され、管理画面は二つから選ぶ**。2026年9月24日のお知らせによれば、9月25日からバリュードメインのログイン画面はValue Domain Oneのログイン画面に統合され、ログイン後に「従来のコントロールパネルを使う」と「Value Domain One パネルを使う」のどちらかを選ぶ。問い合わせの窓口もOneへ移った。新規登録の入口も二つあり、トップページは、従来のユーザー登録に「外部サービスでの登録が一部未対応（Google等）」と添え、Oneのアカウント作成ではGoogle、Yahoo!、GMO ID、Amazonでの登録を並べる。
- **WHOIS代行は、レジストラによって手順が変わる**。価格一覧の「WHOIS代行」の列は、517行中476行が○、41行が✕だった（当サイトの集計）。WHOIS情報公開代行の設定のマニュアルによれば、代行はWHOISで公開される登録者情報をバリュードメインの情報で公開するもので、有効にする際に登録されたユーザー情報が正確かどうかを確かめる。eNomのドメインは即時に有効になる一方、KeySystemsのドメインは登録者名義の変更を承認するメールが2通届き、両方で承認すると完了する。代行中に迷惑行為や規約違反があればドメインを停止し、ドメイン紛争などが起きた場合はユーザー情報へ強制的に変更するとも書く。
- **申し込みは取り消せず、移管の取り消しはポイントで返る**。特定商取引法に関する表記は、クレジットカード決済と銀行振込の申し込みの解約を申し込み後10日以内に限って受け付けるとしつつ、いずれの場合も取得済みのドメインの料金は解約・返金できないとする。APIのページも、APIで行った購入・更新の料金はキャンセルや返金ができないと書く。移管のページによれば、移管のキャンセルによる返金は全額がバリュードメインポイントで返され、移管には1年分の更新料がかかり、完了時に有効期限が1年延びる。

## 技術構成

::techstack

:::fact
当サイトの実観測（2026-10-13）では、www、one、status、web3、mcp の各 value-domain.com のホストは、いずれも HTTP/2 で server: cloudflare と末尾がNRTの cf-ray を返し、__cf_bm という名前のクッキーを設定した。value-domain.com 自体のネームサーバーは gabriel.ns.cloudflare.com と vera.ns.cloudflare.com で、利用者向けのネームサーバー ns1〜ns5.value-domain.com と ns11〜ns13.value-domain.com は、Cloudflareが自社のIPv4アドレス範囲として公開する 172.64.0.0/13 の中のアドレスを返した。www.value-domain.com は、ログインの /login.php やサポートの /support.php など .php で終わるURLを使い、/vdapi/ は PHPSESSID のクッキーを設定してから one.value-domain.com のログインへ転送した。トップページは /assets/js/lib/jquery.js（jQuery v3.5.1）、jsDelivrの slick-carousel 1.8.1、Google翻訳のウィジェット、cache.img.gmo.jp に置かれたGMO共通のヘッダーやフッターのスクリプト、Cloudflareの beacon.min.js、widget.docsbot.ai の chat.js を読み込む処理を含んでいた。応答の Content-Security-Policy は default-src ひとつに68種類のホストを並べ、その中には *.stripe.com、payments.amazon.co.jp、auth.login.yahoo.co.jp、unstoppabledomains.com、docsbot.ai、bzr.openai.com などがあった（当サイトの集計）。one.value-domain.com と mcp.value-domain.com は x-turbo-charged-by: LiteSpeed を返し、one.value-domain.com は XSRF-TOKEN と value_domain_one_session という名前のクッキーを設定して、HTMLで /livewire/livewire.min.js、/build/assets/ 配下のスクリプト、Tailwind CSSのCDN、Bootstrap 5.3.0、jQuery 3.7.1 を読み込んでいた。Livewireの公式サイトは、LivewireをLaravelのためのフレームワークとして紹介する。ユーザーガイドの /userguide/ は、/userguide/wp-content/ 配下のテーマとプラグインを読み込む。
:::

:::fact
バリュードメインAPIのページ（2026-10-13確認）によれば、APIは登録ユーザー全員が無料で使え、コントロールパネルで行うドメインやサーバーの購入・更新・設定変更を自動化できる。APIキーの発行にはSMS認証が必要で、ドメインのAPIは汎用JP、属性型JP（.co.jp・.or.jp）、都道府県型JPにも対応する一方、管理レジストラがEnomとKey-Systemsのドメインには対応していない。APIでの取得・更新には「お得意様割引サービス（バルクレジスター）」の料金が適用され、.comは1,986円が1,781円になる。APIドキュメント（ドメイン）はOpenAPI 3.0.0で書かれ、ReDoc 2.0.0-rc.24で公開されている。エンドポイントは https://api.value-domain.com/v1/ で、認証にはBearerトークンを使う。ドメインの登録、移管申請、有効期限の延長、自動更新、移管ロック、Whois、ネームサーバー、DNS、ダイナミックDNS、DNSSEC、プライベートネームサーバー、ユーザー間の移動、無料ネームサーバー、空き状況の検索、APIログまで、32のパスに51の操作が並び（当サイトの集計）、新規登録のレジストラの項目は「'GMO'のみ対応しています」と書く。One MCPのページ（最終更新2026年10月8日）は、ドメインの取得・DNS設定・サーバー操作・サイト公開などをAIとの対話で動かせるとし、MCPサーバーの利用料を無料（AIトークン料金は利用者の負担）とする。接続先は https://mcp.value-domain.com/mcp で、認証はOAuth 2.1とPKCEを使い、ページは「重要な操作は確認プロンプトを経るため、AIが勝手に課金や削除を行うことはありません。」と書く。claude.aiの「コネクタ」から「ValueDomainMCP」を選んで接続した場合は、ドメインの新規取得・更新（期限延長）・移管、サーバーの新規契約・更新・プラン変更・解約、APIトークンの一覧・失効などが対象外になり、接続先URLを入力して追加した場合はすべての機能を使える。AIサイト生成（β）は、現在は xxxx.oners.jp のサブドメインでの公開に対応する。当サイトの実観測（2026-10-13）では、同じホストのOAuth認可サーバーのメタデータは、認可コードのグラント、S256のPKCE、クライアント認証なし（none）、動的クライアント登録のエンドポイントを示し、domain:contract、server:contract、domain:transfer、apikey:manage などを含む33のスコープ（当サイトの集計）を並べていた。
:::

:::guess
www.value-domain.com の .php で終わるURLとPHPSESSIDのクッキー、WordPressのユーザーガイド、Livewireを読み込むValue Domain Oneという三つの層は、2002年からのサイトを残したまま、新しいOneを別のアプリケーションとして立ち上げ、ログインと問い合わせの入口から順に寄せている跡と読める。XSRF-TOKEN と value_domain_one_session のクッキー、/livewire/ のスクリプトからは、OneはLaravelとLivewireで作られているとみられる。自社のドメインだけでなく、利用者向けのネームサーバーまでCloudflareの範囲のアドレスを返すことからは、権威DNSの前段にも[Cloudflare](/ja/articles/cloudflare)のネットワークを置いているとみられる。Content-Security-Policyに並ぶ68種類のホストは、決済、外部サービスでのログイン、チャット、計測、AIなど、サイトが頼る外部サービスの一覧としても読める。APIの新規登録がGMOのみに対応し、EnomとKey-Systemsのドメインに対応しないのは、自動化の対象を主に使うレジストラに絞っているためと推測される。One MCPのスコープが契約（domain:contract・server:contract）や移管を参照や設定と別に切り出し、ディレクトリから接続した場合は課金を伴う操作を外しているのは、AIエージェントによる意図しない課金を、権限の側で区切る設計と読める。
:::

## 同じ.comに三つの値段 — レジストラで分かれる料金と、月ごとの価格表

:::fact
当サイトの実観測（2026-10-13）では、価格一覧の517行は、レジストラの表示でGMOが393行、KeySystemsが97行、eNomが19行、JPRSが8行で、.com、.net、.org、.info、.bizなど24のTLDが二つか三つのレジストラの行に分かれていた。この5つのgTLDでは、更新はいずれもGMOの行が最も安く、eNomの行が最も高い（いずれも当サイトの集計）。サービス稼働状況のページは、ドメインの項目に「GMO(お名前.com)」「JPRS」「eNom」「KeySystems」を並べ、移管のページでは、申し込みの際にGMO、KeySystems、eNomからレジストラを選び、.bz、.mn、.sc、.vc、.co、.com.twなどはKeySystemsのみで受け付ける。10月の価格表（10/1〜）は料率を24.5%とし、改定前と改定後の金額がすべての行で同じだった（当サイトの集計）。一方、2026年9月15日のお知らせは、11月1日0時から、卸元レジストラによる提供価格の大幅変更を主な原因として一部のドメインの価格を改定し、対象以外の価格は変えないと告知した。その価格表（11/1〜）によれば、.com、.net、.org、.bizの通常価格（新規登録・更新・移管）がGMO、ENOM、「CentralNicReceller（旧 KeySystems）」のいずれでも上がり、GMOの.comは1,986円から2,283円に、15個以上のお得意様割引の.comは1,781円から2,154円になる。KeySystemsの.fmは15,593円から26,510円になる。利用規約が上位レジストラとして名前を挙げるお名前.comは、2026年9月25日のお知らせで、自社のドメイン（オプション含む）の調整費を10月1日12時から25.50%とし、主な要因に「為替状況の変動」を挙げた。
:::

| ドメイン（税込・1年） | レジストラ | 1年目の新規取得 | 更新 | 移管 | 11月1日からの通常価格 |
| --- | --- | --- | --- | --- | --- |
| .com | GMO | 790円 | 1,986円 | 1,986円 | 2,283円 |
| .com | KeySystems | 2,231円 | 2,231円 | 2,231円 | 2,566円 |
| .com | eNom | 2,643円 | 2,643円 | 2,643円 | 3,039円 |
| .net | GMO | 2,090円 | 2,301円 | 2,301円 | 2,485円 |
| .org | GMO | 1,370円 | 2,301円 | 2,301円 | 2,553円 |
| .biz | GMO | 420円 | 3,395円 | 3,395円 | 3,633円 |
| .info | GMO | 590円 | 3,949円 | 3,949円 | 改定の対象外 |
| .jp | JPRS | 2,035円 | 3,889円 | 3,889円 | 改定の対象外 |
| .co.jp | JPRS | 2,000円 | 5,177円 | 5,177円 | 改定の対象外 |

1年目・更新・移管は価格一覧の値（2026-10-13確認、サービス維持調整費率を含む税込）。右端は2026年9月15日のお知らせの価格表（11/1〜）の改定後の金額で、KeySystemsの行は価格表では「CentralNicReceller（旧 KeySystems）」と書かれる。.co.jpの2,000円は10月31日までのキャンペーン価格で、トップページは.comの790円などの料金欄に「（2026.10.31まで）」と添えている。

:::guess
主要な5つのgTLDでGMOの行が最も安く、APIの新規登録もGMOのみに対応することからは、いまの主力はGMO（お名前.com）の経路で、eNomとKeySystemsの行は、2002年のeNomの代理店から始まり2004年にKeySystemsと契約した歴史と、それぞれで管理されてきたドメインを引き継ぐために残されているとみられる。.bzや.coなどをKeySystemsだけで受け付けることからは、扱えるTLDを広げる役割もあると読める。11月の改定では、.comはレジストラを問わず約15%、.orgは約11%、.netは約8%、.bizは約7%上がる（当サイトの計算）。率がレジストラによらず揃っていることからは、個々のレジストラの事情より、TLDごとの卸値の変更を映した改定とみられる。お得意様割引の.comは約21%上がり、通常価格との差は205円から129円に縮まる（当サイトの計算）。10月の調整費率24.5%は、お名前.comが自社の料率として示す25.50%とは別の値で、価格も前月から動いていなかった。バリュードメインは、為替の動きを月々の料率で細かく映すより、価格表を月ごとに出し直し、卸値の変化は通常価格の改定で反映していると推測される。トップページの1年目の価格に添えられた「（2026.10.31まで）」は、この改定の前日までという区切りとも読める。
:::

## ビジネスモデル

バリュードメインの稼ぎ方は、ドメインの登録・更新・移管の料金を軸に、同じアカウントで売るレンタルサーバー、SSL証明書、Google Workspaceなどの契約が重なる形とみられる。紹介はA8.netのアフィリエイトで集め、ドメインを大量に持つ事業者には、お得意様割引、API、OEMを用意している。

:::fact
Oneレンタルサーバーのページ（2026-10-13確認）は、15日間の無料トライアルのあと、36ヶ月契約で月680円からのベーシック、月1,680円からのプロ、月2,680円からのビジネスの3プランを並べ、独自ドメインの永久無料特典をプランに応じて1〜2個付ける。同じページは、100万以上のサイトをホストし、700万以上のドメインを管理し、24年以上のインフラ運用実績があると掲げる。トップページは、Google WorkspaceのBusiness Starterプランを月880円から（年10,560円）とし、バリュードメインで管理中のドメインならDNSの認証は不要だと書く。お得意様割引のページは、15個以上のドメインを管理するアカウントの次の購入から割引価格を適用し、100個以上の割引価格（.comは1,582円）は問い合わせのうえで適用するとする。ドメイン・ホスティングOEMのページは、コアサーバー、バリューサーバー、XREAなどの独自開発のホスティングと、cPanelやDirectAdminを基盤に、事業者が自社ブランドでドメイン・ホスティングを提供できるとし、月額の内訳をサーバーのレンタル代金と、対応時間に応じたテクニカルサポート代金とする。アフィリエイトのページによれば、プログラムはASPのA8.netで運用され、成果報酬（税別）は新規ドメイン取得とバリュードメインへの移管が各100円（キャンペーン価格では各50円）、おまかせスタートの新規申し込みが2,000円、コアサーバーの新規契約がプランと期間に応じて100円から10,000円だ。Value Domain Web3のページは、NFTドメインについて、料金を支払うのは取得時のみで、更新料が一切発生しないと説明する。
:::

:::guess
従業員23名の会社が、ドメインに加えて四つのレンタルサーバー、SSL証明書、NFTドメイン、AIの記事作成ツールまでを運営している。サーバーとの同時契約で更新料金を受け取らない「ドメイン永久無料」は、ドメインの料金を、コアサーバーやOneレンタルサーバーの月額に置き換えて契約を長くつなぐ仕組みと読める。アフィリエイトの報酬が、ドメインの取得の100円に対して、コアサーバーの新規契約では最大10,000円と開いているのも、ドメインそのものより、上に乗るサーバーの契約に価値を置く設計を映しているとみられる。お得意様割引、API割、OEMは、個人の新規客より、まとまった数のドメインを持つ事業者や制作会社を手元に置く道具と推測される。更新料で稼ぐドメインの会社が、更新料のかからないNFTドメインを別サイトで売り、無料のAPIとOne MCPでドメインの取得からサーバーの作成までを利用者とAIの側に開くのは、少ない人数で品ぞろえを広げ、手作業を増やさずに入口を増やす試みとみられる。
:::

2002年にeNomの代理店として始まったバリュードメインは、KeySystemsとの契約、汎用JPの指定業者、GMOインターネットグループとの提携を重ねながら、24年続いてきた。その料金表では、一つのTLDに複数のレジストラの値段が並び、月ごとの価格表と調整費、まとめ買いの割引、サーバーとの組み合わせが重なる。PHPのサイトにValue Domain OneとMCPを重ねたいま、この入り組んだ値段の仕組みを、人にもAIエージェントにも読み解ける入口として差し出せるかが問われている。
