---
service: "お名前.com"
title: "1円の1年目と、為替で毎月動く調整費 — 4,900万件の登録実績を掲げ、保有数で更新料金を段階づけ、ログインにパスキーを入れたお名前.comを解剖する"
description: "お名前.comは、GMOインターネット株式会社が運営するドメイン登録サービスだ。1999年9月に「ディスカウントドメインドットコム」として始まった事業を源流に持ち、ICANN公認レジストラとして630種類以上のドメインを扱い、累計登録実績4,900万件超を掲げる。.comや.jpなど24項目の1年目を「お1人様1個限り」の1円で売る一方、.comの1年の更新は保有4個以下（5個以上の保有割引が付かない基本料金）で1,408円（税込）で、2023年2月1日から加算する「サービス維持調整費」は為替状況の変動を主な要因に毎月見直され、2026年10月1日12時からは25.50%に下がった。料金一覧、更新料金、Whois情報公開代行、ドメインプロテクション、DNS管理サービス、Naviガイド、お知らせ、特定商取引法の表記、GMOインターネットの会社概要・沿革・決算説明資料・データシート、当サイトの実観測から、1年目・2年目・調整費の三段の値付け、保有数で下がる更新料金、Cloudflareの背後に置かれたログインとWhois検索、ドメインを入口にした事業の組み立てまでを解剖する。"
lead: "お名前.comのトップページでは、.comや.jpの横に大きく「1円」と書かれている。注記を読むと、1円は1人1個まで、2個目からの.comは750円、更新料金は保有数によって変わり、表示価格にはさらに「サービス維持調整費」が加わる。その料率はほぼ毎月のお知らせで書き換えられ、2026年10月1日からは25.50%になった。1999年にICANNのレジストラに選ばれた事業を源流に持ち、4,900万件超の登録実績を掲げる国内最大級のドメイン登録サービスが、どんな値付けと仕組みで動いているのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [domains, hosting, small-business, security, subscription]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
expires:
  - date: "2026-10-30"
    claim: "移管料金100%キャッシュバックのキャンペーン（10月30日12時まで）"
  - date: "2026-10-31"
    claim: "10月のサービス維持調整費25.50%と、それを含めた更新料金の表"
serviceUrl: "https://www.onamae.com/"
# Affiliate link placeholder: Onamae.com runs its affiliate program through two ASPs, A8.net and
# ValueCommerce (https://www.onamae.com/clever/affiliate/, checked 2026-10-11: register with either
# network for free, apply to the Onamae.com program from the network's dashboard, and the approval
# email usually arrives within one to two business days). The page does not publish reward terms.
# Both are ASPs whose ad code must be used as provided: copy the link to affiliate.url, the 1x1
# impression image (if any) to affiliate.impressionUrl, and the text ad verbatim to affiliate.label.
# Never invent the label — ask the owner for the material's exact text. Keep every field identical in
# ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<a8-or-valuecommerce-link-for-onamae>"
#   program: "Onamae.com Affiliate Program (A8.net / ValueCommerce)"
#   impressionUrl: "https://<impression-pixel>"
#   label: "<verbatim text of the ad material>"
vendor: "GMOインターネット株式会社"
origin: "JP"
heroTheme: "onamae"
scores: { product: 4.0, ux: 3.0, tech: 3.5, business: 4.0 }
techStack:
  - layer: "レジストラ"
    name: "ICANN-accredited registrar (GMO Internet, Inc. d/b/a Onamae.com)"
    confidence: confirmed
    evidence: "公式の「お名前.comとは」（2026-10-11確認）に、ICANN公認レジストラであり「日本に19社しか認められていないレジストラの1社」と明記。トップページの注記は国内シェアの集計に使うレジストラ名を「GMO Internet, Inc. d/b/a Onamae.com」と書き、運営会社の会社概要は所属団体にICANNを挙げる"
    evidenceUrl: "https://www.onamae.com/clever/about/"
  - layer: "権威DNS"
    name: "Onamae.com DNS (01–04.dnsv.jp, default dns1/dns2.onamae.com)"
    confidence: confirmed
    evidence: "お名前.com Naviガイドの「ネームサーバーの変更」（2026-10-11確認）に、お名前.comのネームサーバーとして01.dnsv.jp〜04.dnsv.jp、レンタルサーバー（ベーシック・RSプラン）などにns-rs1/ns-rs2.gmoserver.jp、ドメイン登録時の既定としてdns1.onamae.com / dns2.onamae.comと明記"
    evidenceUrl: "https://www.onamae.com/guide/p/67"
  - layer: "DNSSEC・セカンダリDNS"
    name: "DNSSEC / secondary DNS master (DNS add-on option)"
    confidence: confirmed
    evidence: "DNS管理サービスのページ（2026-10-11確認）に、DNSレコード設定・セカンダリDNS（Slave）・ホスト登録は無料、ゾーン情報のテンプレート・セカンダリDNS（Master）・DNSSEC・外部管理ドメインのDNS設定は1ドメイン月額110円（税込）のDNS追加オプションと明記"
    evidenceUrl: "https://www.onamae.com/option/dns/"
  - layer: "ログイン認証"
    name: "Passkeys + two-step verification (email / SMS)"
    confidence: confirmed
    evidence: "公式のお知らせ（2026-09-28）に、お名前.com Naviとレンタルサーバーのコントロールパネルへのログインでパスキー認証の提供を始め、既存のIDとパスワードでのログインも引き続き使えると明記。Naviガイドは、ログインや会員情報の変更などでメールかSMSの認証コードを使う二段階認証の手順を載せる"
    evidenceUrl: "https://www.onamae.com/news/article/11513"
  - layer: "ドメインの保護"
    name: "Domain Protection (registrant approval for NS, Whois and transfer-lock changes)"
    confidence: confirmed
    evidence: "ドメインプロテクションのページ（2026-10-11確認）に、ネームサーバーの変更、DNS関連機能の設定、ドメイン移管ロック、自動更新設定、ドメインWhois情報変更などの手続きを登録者の承認制にでき、料金は1ドメイン年1,078円（税込）と明記"
    evidenceUrl: "https://www.onamae.com/service/protectoption/"
  - layer: "リセラー向けAPI"
    name: "Domain registration API for resellers (Advanced Partner, spec under NDA)"
    confidence: confirmed
    evidence: "販売パートナー制度のページ（2026-10-11確認）に、アドバンストパートナー契約ではドメインの登録・更新・情報変更などをAPIで自動化でき、API仕様書はNDA締結後に渡し、システムの接続はパートナー側で行うと明記"
    evidenceUrl: "https://www.onamae.com/partner/"
  - layer: "レンタルサーバー（RSプラン）"
    name: "nginx + Apache HTTP Server 2.4 + LSAPI, AlphaSSL"
    confidence: confirmed
    evidence: "ドメインとレンタルサーバーの同時登録のページ（2026-10-11確認）に、同時大量アクセスの処理に優れたnginxを採用し、そのバックエンドにApache HTTP Server 2.4を使うこと、アプリケーション実行環境にLSAPI、オールSSDのRAID10、HTTP/2、標準で無料の独自SSLにアルファSSLを採用すると明記"
    evidenceUrl: "https://www.onamae.com/server/rs/campaign/simulregist/"
  - layer: "公式サイトの配信・ボット対策"
    name: "Cloudflare (bot protection, challenge on login and lookup paths)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、www.onamae.com は server: cloudflare と末尾がNRTの cf-ray を返し、__cf_bm クッキーを設定した。ログインの /navi/login/、Whois検索の /service/whois/、更新の /campaign/renewal/、ヘルプの help.onamae.com は、当サイトのスクリプトからの取得に 403 と cf-mitigated: challenge を返した"
  - layer: "公式サイトのフロントエンド"
    name: "jQuery 3.7.1 / Swiper / lazysizes / Google tag"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、トップページのHTMLは jquery-3.7.1.min.js、swiper.min.js、lazysizes.min.js、googletagmanager.com の gtag.js、cache.img.gmo.jp に置かれたGMO共通のヘッダー・フッターのスクリプトを読み込んでいた。料金一覧の表は、ページ内のスクリプトが table_type と table_group を付けたGETで後から読み込む"
sources:
  - label: "お名前.com公式: トップページ（1円の条件・国内シェアNo.1の注記・RDAP検索）"
    url: "https://www.onamae.com/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: お名前.comとは（ICANN公認レジストラ・630種類以上・登録実績4,900万件）"
    url: "https://www.onamae.com/clever/about/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: ドメイン料金一覧（登録・更新・移管・Whois代行・サービス維持調整費の切り替え）"
    url: "https://www.onamae.com/service/d-price/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: ドメイン更新料金（保有数ごとの更新料金）"
    url: "https://www.onamae.com/service/d-renew/price.html"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: ドメイン更新とは（自動更新）"
    url: "https://www.onamae.com/service/d-renew/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: Whois情報公開代行"
    url: "https://www.onamae.com/service/d-regist/option.html"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: ドメインプロテクション"
    url: "https://www.onamae.com/service/protectoption/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: DNS管理サービス（DNSSEC・セカンダリDNS）"
    url: "https://www.onamae.com/option/dns/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: ドメイン1円＆レンタルサーバー同時登録（更新無料の条件・RSプランの構成）"
    url: "https://www.onamae.com/server/rs/campaign/simulregist/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: ドメイン移管100%キャッシュバックキャンペーン（2026-09-30〜10-30）"
    url: "https://www.onamae.com/campaign/transferincp/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: 販売パートナー制度（リセラープログラム・API連携）"
    url: "https://www.onamae.com/partner/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: アフィリエイトとは？（A8.net・バリューコマース）"
    url: "https://www.onamae.com/clever/affiliate/"
    accessedAt: "2026-10-11"
  - label: "お名前.com公式: 特定商取引法に基づく表記"
    url: "https://www.onamae.com/tokusho/"
    accessedAt: "2026-10-11"
  - label: "お名前.com Naviガイド: ネームサーバーの変更"
    url: "https://www.onamae.com/guide/p/67"
    accessedAt: "2026-10-11"
  - label: "お名前.com Naviガイド: ニュース配信を停止したい"
    url: "https://www.onamae.com/guide/p/5"
    accessedAt: "2026-10-11"
  - label: "お名前.com Naviガイド: 二段階認証設定"
    url: "https://www.onamae.com/guide/p/102"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: パスキーログイン提供開始（2026-09-28）"
    url: "https://www.onamae.com/news/article/11513"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: 「サービス維持調整費」が10月1日から25.50%（2026-09-25）"
    url: "https://www.onamae.com/news/article/11547"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: 「サービス維持調整費」が9月1日から26.25%（2026-08-25）"
    url: "https://www.onamae.com/news/article/11506"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: 「サービス維持調整費」が8月3日から27.00%（2026-07-24）"
    url: "https://www.onamae.com/news/article/11486"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: 一部取り扱いドメインの料金改定（2026-09-04・サービス維持調整費は2023年2月1日以降）"
    url: "https://www.onamae.com/news/article/11532"
    accessedAt: "2026-10-11"
  - label: "お名前.comのお知らせ: 「GMO AIかんたん集客」が初月無料・月額30%割引（2026-02-25）"
    url: "https://www.onamae.com/news/article/11336"
    accessedAt: "2026-10-11"
  - label: "GMOインターネット株式会社: 会社概要"
    url: "https://internet.gmo/company/outline/"
    accessedAt: "2026-10-11"
  - label: "GMOインターネット株式会社: 沿革（2025年1月1日以降）"
    url: "https://internet.gmo/company/history/"
    accessedAt: "2026-10-11"
  - label: "GMOインターネット株式会社: 旧会社の沿革（インターネットインフラ事業 1995年11月〜2024年12月ほか）"
    url: "https://internet.gmo/company/history/archive/"
    accessedAt: "2026-10-11"
  - label: "GMOインターネット株式会社: サービス（お名前.com byGMO・ConoHa byGMO）"
    url: "https://internet.gmo/service/"
    accessedAt: "2026-10-11"
  - label: "GMOインターネット株式会社: 2025年12月期 通期決算説明資料（2026-02-12）"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2025_full-year_j_presentation.pdf"
    accessedAt: "2026-10-11"
  - label: "GMOインターネット株式会社: 2026年12月期 第2四半期決算説明資料（2026-08-14）"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_presentation.pdf"
    accessedAt: "2026-10-11"
  - label: "GMOインターネット株式会社: 2026年度第2四半期 データシート（四半期の売上・国内総契約件数）"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_datasheet.xlsx"
    accessedAt: "2026-10-11"
  - label: "Cloudflare Docs: Cloudflare Cookies（__cf_bm）"
    url: "https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/"
    accessedAt: "2026-10-11"
  - label: "Cloudflare Docs: Detect a Challenge Page response（cf-mitigated）"
    url: "https://developers.cloudflare.com/cloudflare-challenges/challenge-types/challenge-pages/detect-response/"
    accessedAt: "2026-10-11"
---

お名前.comは、「ドメイン取るならお名前.com」を掲げる国内のドメイン登録サービスだ。運営は東証プライム上場のGMOインターネット株式会社で、同じ会社は当サイトが解剖した[ConoHa WING](/ja/articles/conoha-wing)を含むConoHaブランドも持つ。.comや.jpを「1円」で売る入口の裏側で、料金表は、保有数で変わる更新料金と、為替状況の変動を主な要因に毎月見直す「サービス維持調整費」という二つの仕組みを抱えている。

## サービス解説

お名前.comは、ドメインの登録・更新・移管を中心に、Whois情報公開代行、ドメインプロテクション、DNS管理サービス、ドメインパーキングなどのオプションと、中古ドメインのオークションやバックオーダー、ドメイン売買サービスを提供する。レンタルサーバー、AIホームページパック、お名前メール、VPS、SSL証明書も並び、契約の管理は「お名前.com Navi」という管理画面で行う。

:::fact
特定商取引法に基づく表記（2026-10-11時点）によれば、販売事業者はGMOインターネット株式会社、屋号は「GMOインターネットお名前.com」で、所在地は東京都渋谷区桜丘町のセルリアンタワー。GMOインターネットの旧会社の沿革のページは、インターネットインフラ事業の歩みとして、1999年4月にICANNから「アジア圏および日本では唯一の商用ドメイン名登録機関（レジストラ）」に選ばれ、同年9月に「ディスカウントドメインドットコム（現お名前.com）」を始めてドメイン事業に入ったと書く。2024年6月にはこの事業の再編に伴う吸収分割契約を結び、沿革のページによれば、2025年1月1日、GMOインターネットグループ株式会社が運営していたインターネットインフラ事業をGMOアドパートナーズ株式会社が承継し、商号をGMOインターネット株式会社に変えた。会社概要は設立日を1999年9月8日とし、旧会社の沿革によれば、この法人はもともと電子メール広告配信サービスを事業目的として設立された、のちのGMOアドパートナーズだ。会社概要によれば、証券コードは4784（東証プライム）、資本金は106億9,160万円、従業員数は2026年6月末時点で連結2,405名（社員1,915名・臨時従業員490名）、主要株主はGMOインターネットグループ株式会社ほかで、所属団体にICANNを挙げる。「お名前.comとは」のページは、ICANN公認レジストラとして「日本に19社しか認められていないレジストラの1社」、630種類以上のドメイン、累計登録実績4,900万件超を掲げる。トップページの「国内シェアNo.1」の注記は、ICANNの公表数値をもとにgTLDを対象とし、InterNICが提供する認定レジストラの一覧で「Japan」と書かれた事業者の中で、レジストラ「GMO Internet, Inc. d/b/a Onamae.com」のシェアを集計した2026年5月時点の調査だとする。
:::

:::fact
料金一覧とトップページ（2026-10-11確認・税込）によれば、.comと.netの登録は「お1人様1個まで」1円で、2個目以降と、過去に1円で買ったことがある人には750円がかかる。同じ条件の1円の対象は、ローマ字の.jp（2個目以降1,860円）、日本語の.jp（1,160円）、.org（860円）、.shop（280円）、.xyz（220円）、.online（60円）、.tokyo（80円）など24項目に及ぶ。1年の更新は、更新料金のページによれば.comが1,408円、.netが1,628円、.jpが3,124円、.co.jpが7,678円（いずれも保有4個以下。更新料金のページで「5個以上保有の方」などの割引が付かない基本の料金）で、料金一覧によれば.comの移管は1,012円。表示価格には、2026年10月1日12時から、ドメイン（オプション含む）に25.50%の「サービス維持調整費」が加わる。ドメインの支払いはクレジットカード、銀行振込、コンビニ払いで、特定商取引法の表記によればコンビニ払いには165円の手数料がかかる。Whois情報公開代行は1ドメイン年1,078円で、新規登録と同時に申し込めば無料。レンタルサーバーと同時に申し込むと、ドメインの登録は1円になり、1個目のドメインは、.comや.jpなど対象のドメインであれば、サーバーを使っている間は更新が無料になる（無料で更新したあと12か月以内にサーバーを解約すると、更新費用の実費がかかる）。2個目で更新が無料になるのは、翌月に届く.comの取得料金相当額のクーポンで期限内に取得し、サーバーに追加した.comだけで、クーポンを.com以外に使った場合は対象にならない。レンタルサーバーRSプランの月額は2,398円で、初月は無料、初期費用はかからない。
:::

:::pull
ドメインの値段は、1年目の1円では決まらない。保有数で変わる2年目の更新料金と、毎月書き換わる調整費の掛け算で決まる。
:::

::scorecard

## UX分析

お名前.comの体験は、トップページのメインビジュアルにドメインの検索窓を置く一方、支払う額の全体像は、注記と別のページに分かれている。

- **入口は1円、条件は注記に**。トップページと料金一覧の注記によれば、1円は24項目とも1人1個までで、.comと.netは過去に1円で買ったことがあれば2個目以降と同じ750円になる。トップページは更新料金を「会員毎の保有件数に伴い変動」すると書き、料金一覧は、登録の時期によっても更新料金が異なるため、正確な額はお名前.com Naviで確かめるよう求める。過去のキャンペーンで取ったドメインの更新料金も、Naviでドメインごとに確かめる形だ。
- **表の初期表示は調整費を含まない**。料金一覧の表には「サービス維持調整費含む」のチェックボックスがあり、当サイトの実観測（2026-10-11）では、初期状態でチェックは外れ、加算前の金額が表示される。チェックを入れると、.comの更新は1,287円〜から1,615円〜に、移管は1,012円から1,270円に切り替わる。表の数字だけを見ると、支払額との間に4分の1ほどの差が残る。
- **更新を忘れさせない導線**。「ドメイン更新とは」のページによれば、自動更新を有効にすると、更新期限日の15日前に、そのドメインの最低更新可能年数で自動的に更新される。Naviガイドは、ネームサーバーの設定やマイページへ進もうとしたときに「更新手続きをお忘れではございませんか？」という画面が出る場合があり、その際は「更新画面から移動する」を押すよう案内する。
- **お知らせも更新案内も止められるが、ICANNが義務付ける期限前の通知は止められない**。Naviガイドの「ニュース配信を停止したい」によれば、新ドメインの登録開始やキャンペーンを知らせるメールは「配信なし」を選べ、SMSの配信やドメイン更新案内のメールも設定で止められる。ただし、ICANNにより送付が義務付けられている期限前の自動通知は停止できないと注記する。
- **ログインの守りは全員が使え、ドメインの守りはオプション**。2026年9月28日のお知らせによれば、お名前.com Naviとレンタルサーバーのコントロールパネルへのログインにパスキーを使えるようになり、IDとパスワードでのログインも引き続き使える。Naviガイドは、ログインや会員情報の変更でメールかSMSの認証コードを求める二段階認証の手順を載せる。一方、ネームサーバーの変更や移管ロックなどを登録者の承認制にするドメインプロテクションは1ドメイン年1,078円、DNSSECは月額110円のDNS追加オプションに含まれる。
- **Whoisの代行は取得と同時なら無料、ドメインの申込みは取り消せない**。Whois情報公開代行のページによれば、登録者の氏名や住所の代わりに、お名前.comの名義と東京都渋谷区桜丘町のセルリアンタワー11階の住所を公開する。料金一覧では、.co.jpや.aiなどはWhois代行の欄が×になっている。料金一覧のよくある質問は、ドメインの取得・契約は「いかなる理由があってもキャンセル、取り消しはできません」と答え、特定商取引法の表記も返品（キャンセル）を受け付けないとする。

## 技術構成

::techstack

:::fact
Naviガイドの「ネームサーバーの変更」（2026-10-11確認）によれば、お名前.comのネームサーバーは01.dnsv.jpから04.dnsv.jpの4つで、レンタルサーバーのベーシックとRSプラン、AIホームページパック、お名前メール（エコノミー/ベーシック）はns-rs1.gmoserver.jpとns-rs2.gmoserver.jp、共用サーバーSDプランとお名前メール（ライト/スタンダード）はdns01.gmoserver.jpとdns02.gmoserver.jpを使い、ドメイン登録時の既定はdns1.onamae.comとdns2.onamae.comとされる。同じページは、ネームサーバーの変更がインターネット全体に反映するまで最大72時間程を要すると注意書きする。DNS管理サービスのページによれば、DNSレコードの設定、セカンダリDNS（Slave）、ホスト登録は無料で、ゾーン情報のテンプレート、セカンダリDNS（Master）、DNSSEC、外部で管理されているドメインのDNS設定は、1ドメイン月額110円のDNS追加オプションになる。販売パートナー制度のページによれば、アドバンストパートナー契約ではドメインの登録・更新・情報変更などをAPIで自動化でき、API仕様書はNDAの締結後に渡される。販売パートナー契約の完了時には10万円の保証金がかかる。レンタルサーバーRSプランについて、同時登録のページは、nginxの後ろにApache HTTP Server 2.4を置き、LSAPI、オールSSDのRAID10、HTTP/2を使い、標準で無料の独自SSLにアルファSSLを採用すると説明する。
:::

:::fact
当サイトの実観測（2026-10-11）では、www.onamae.com のトップページは HTTP/2 で server: cloudflare、末尾がNRTの cf-ray、cf-cache-status: DYNAMIC、cache-control: no-cache, no-store, max-age=0, must-revalidate を返し、__cf_bm という名前のクッキーを設定した。Cloudflareのドキュメントによれば、__cf_bm はBot ManagementかBot Fight Modeで守られたサイトに置かれるクッキーだ。同じ日、ログインの /navi/login/、Whois検索の /service/whois/、更新の /campaign/renewal/、ヘルプの help.onamae.com は、当サイトのスクリプトからの取得に 403 と cf-mitigated: challenge を返した。Cloudflareのドキュメントは、このヘッダーをチャレンジページの応答に付くものと説明する。トップページのHTMLは jquery-3.7.1.min.js、swiper.min.js、lazysizes.min.js、Googleの gtag.js、cache.img.gmo.jp に置かれたGMO共通のヘッダーとフッターのスクリプトを読み込み、リンクの多くには btn_id というパラメーターが付く。料金一覧の表は、ページ内のスクリプトが table_type と table_group を付けたGETで、スクロールに合わせて後から読み込む。
:::

:::guess
www.onamae.comはCloudflareの背後にあり、当サイトが取得したページのうち、ログイン、Whois検索、更新の入口、ヘルプでは、自動の取得に対するチャレンジが返った。パスワードを総当たりで試す攻撃や、登録者の情報や料金の機械的な収集を、[Cloudflare](/ja/articles/cloudflare)のボット対策で絞っているとみられる。トップページはjQueryで組んだ従来型のページで、料金一覧の表のように重い部分だけを後からGETで読み込む作りと読める。リンクに付く btn_id は、どのボタンから申し込みに進んだかを測るためのパラメーターと推測される。パスキーと二段階認証は会員が自分で有効にする機能で、お知らせとガイドに追加料金の記載はない。一方、ドメインプロテクションとDNSSECは有料のオプションだ。この線引きは、ログインの守りは全員が使えるようにし、ドメインの設定そのものの守りは必要な人が買う、という設計と読める。
:::

## 1円の1年目と、保有数と為替で動く2年目

:::fact
更新料金のページ（2026-10-11確認・税込）によれば、1年の更新料金は保有数で4段階に分かれ、.comは保有4個以下が1,408円、5個以上が1,375円、11個以上が1,342円、31個以上が1,287円になる。.netと.orgは1,628円から1,507円、.jpは3,124円から3,091円、.co.jpは7,678円から4,125円まで下がる。.xyz（2,013円）、.shop（6,688円）、.online（5,040円）に段階はない。移管のキャンペーンのページは、2026年9月30日12時から10月30日12時まで、国内の事業者から.com、.net、汎用・都道府県型の.jpを移す場合に、移管料金を100%キャッシュバックし、有効期限を3年延ばす（.jpは翌月に付ける2年分の延長のみ。クレジットカード払い、期間中1人10ドメインまで）とし、「ドメインを31件以上お持ちの方」に向けて、件数が増えるほど更新費用が安くなると案内する。これらの料金に加わるサービス維持調整費について、2026年9月4日のお知らせは、「各種価格高騰の情勢に鑑み」2023年2月1日以降、一時的にいただくと書く。トップページは料率を「毎月割合は異なります」と注記し、お知らせは、2026年8月3日12時からを27.00%、9月1日12時からを26.25%、10月1日12時からを25.50%とし、いずれも主な要因に「為替状況の変動」を挙げ、変更日の0時から12時までに発生した請求は変更前の料率で計算すると書く。
:::

| ドメイン（税込） | 1個目の登録 | 2個目以降の登録 | 1年の更新（保有4個以下） | 移管 | 調整費25.50%込みの更新 |
| --- | --- | --- | --- | --- | --- |
| .com | 1円 | 750円 | 1,408円 | 1,012円 | 1,767円 |
| .net | 1円 | 750円 | 1,628円 | 1,012円 | 2,043円 |
| .jp（ローマ字） | 1円 | 1,860円 | 3,124円 | 3,124円 | 3,921円 |
| .xyz | 1円 | 220円 | 2,013円 | 2,013円 | 2,526円 |
| .shop | 1円 | 280円 | 6,688円 | 6,688円 | 8,393円 |
| .online | 1円 | 60円 | 5,040円 | 表に記載なし | 6,325円 |
| .co.jp | 930円 | — | 7,678円 | 1,320円 | 9,636円 |

表の右端は、.xyz・.shop・.onlineが料金一覧の「サービス維持調整費含む」の表示で、.com・.net・.jp・.co.jpは保有4個以下の更新料金に25.50%を加えた当サイトの計算（1円未満は四捨五入）。.co.jpは、移管のキャンペーンのページによれば、属性型JPドメインとして原則1組織につき1ドメイン名しか登録できないため、2個目以降の欄を「—」とした。

:::guess
1円の対象は24項目あり、.onlineのように2個目以降の登録が60円のドメインでも、1年の更新は5,040円になる。1年目の安さで会員とドメインを集め、2年目以降の更新で回収する設計とみられる。保有数で4段階に下がる更新料金と、31件以上の保有者に向けた移管の案内は、ドメインを大量に持つ事業者を集めて手放させない狙いと読める。.co.jpで保有4個以下と31個以上の差が3,500円を超えるのも、まとめて管理する制作会社などを意識した値付けと推測される。サービス維持調整費は「一時的」と書かれながら2023年2月から続き、主な要因として為替状況の変動を挙げて毎月見直されている。外貨建てとみられる仕入れの変動を、表の価格を書き換えずに利用者へ転嫁する仕組みと推測されるが、料金一覧の初期表示が調整費を含まない金額のため、表の数字だけを引用した比較では支払額との差に注意が要るとみられる。
:::

## ビジネスモデル

稼ぎ方は、ドメインの登録・更新・移管の料金が中心とみられ、Whois情報公開代行やドメインプロテクション、DNSの追加オプションが上に乗り、レンタルサーバーやAIの集客ツールへも客を送る。紹介は、A8.netとバリューコマースのアフィリエイトと、事業者向けの販売パートナー制度に任せている。

:::fact
GMOインターネットの事業紹介のページ（2026-10-11確認）は、お名前.comを「登録実績3,700万を超える国内シェアNo.1ドメイン登録サービスを中心としたブランド」とし、「ドメインを入口として、個人・法人（SMB）をターゲットに」ドメイン、レンタルサーバー、DNSなどを提供すると書く。2025年12月期の通期決算説明資料（2026年2月12日）は、ドメイン累積登録数を4,200万件超、Domain Name Statの集計（2026年2月3日時点のアクティブなドメインの管理数）による管理ドメイン数を世界4位とし、GPUクラウドを含むドメイン・レンタルサーバー事業の2025年の売上高を207億円、営業利益を51.2億円とする。2026年12月期第2四半期の資料（2026年8月14日）によれば、同事業の上半期の売上高は115億円（前年同期比+18.1%）、営業利益は31.0億円（+73.6%）で、GPUクラウドのH200とB300の高い稼働と、既存事業での広告投資の継続が並ぶ。データシートによれば、プロバイダー事業なども含むインターネットインフラ事業の国内総契約件数は、2025年6月末の約833万件から、9月末に約952万件、12月末に約1,244万件、2026年6月末に約1,370万件へ増えた。資料はこの急増を、2025年第3・第4四半期の法人・事業者によるドメインの大口契約（ドメイン売買やSEO/AIOの検証目的など）が主因とし、1年契約のため2026年の下期に一定の減少を想定し、低単価のため業績への影響は限定的と説明する。同じ資料は、お名前.comの顧客向けに割引プランを提供して送客とストック収益化を図る取り組みを挙げる。2026年2月25日のお知らせによれば、お名前.comはWeb集客支援ツール「GMO AIかんたん集客」を初月無料・月額30%割引で使えるサービス連携を始めた。アフィリエイトのページによれば、紹介する側はA8.netかバリューコマースに無料で登録してお名前.comのプログラムに提携を申し込み、承認のメールは通常1〜2営業日で届く。販売パートナー制度は、1か月分の後払いとAPI連携を用意する。
:::

:::guess
GMOインターネットの事業紹介が書く「ドメインを入口として」という言葉どおり、お名前.comはドメインを安く配り、レンタルサーバー、Whois情報公開代行、ドメインプロテクション、DNSのオプション、AIの集客ツールへと客を送る入口の役割を担っているとみられる。サーバーと同時に申し込めばドメインの更新を無料にする特典は、ドメイン単体の更新料金を、サーバーの月額に置き換えて契約をつなぎとめる仕組みと読める。2025年後半の大口契約の急増と、その後の減少の見込みからは、件数の規模は大口の需要で大きく振れうる一方、売上への影響は限られるという構造がうかがえる。保有数で下がる更新料金や販売パートナー制度の後払いとAPIは、こうした大口の利用者と制作会社を取り込むための道具とも推測される。公式の資料ごとに登録実績が3,700万、4,200万、4,900万と異なるのは、更新の時点や数え方の違いによるものと推測され、単純には比べられない。
:::

1999年にディスカウントドメインドットコムとして始まったお名前.comは、運営会社の名前と形を変えながら続き、いまは1円のドメインで入口を広げている。その料金表は、1円の1年目、保有数で変わる2年目、為替で毎月変わる調整費の三段でできている。パスキーやドメインプロテクションで「預かる側」の守りを揃える一方、利用者が実際の支払額にたどり着くには、注記と別のページを読み合わせる必要がある。4,900万件の入口を、更新のたびに選ばれ続ける理由に変えられるかが、国内最大級のレジストラに問われている。
