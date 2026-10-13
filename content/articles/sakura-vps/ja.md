---
service: "さくらのVPS"
title: "石狩・大阪・東京で値札が違う月643円からの定額VPS — 2026年にSLAを付け、いちばん安い石狩の32GBで在庫が切迫した「さくらのVPS」を解剖する"
description: "さくらのVPSは、さくらインターネットが2010年9月に始めた仮想専用サーバー（VPS）で、仮想化にKVMを使い、メモリ512MBから32GBまでの7つのLinuxプランをroot権限付きで貸す。設置場所は自社運営の石狩・大阪・東京の3リージョンから選び、料金はリージョンごとに違う。毎月払いの月額は石狩の512MBの643円からで、同じプランでも東京は石狩より8.6〜16.7%高い（当サイトの計算）。転送量に上限のない定額制で、12か月一括はおよそ11か月分の料金だ。2026年は、8月1日に4GB以上のLinuxプランへ月間稼働率99.95%のSLAを導入し、8月26日には販売管理システムへの不正アクセスに関連して、契約時の管理者の初期パスワードを使い続けている利用者に変更を求め、10月2日には石狩リージョンの32GBプランの在庫が切迫していると告知した。料金・仕様、FAQ、SLA、約款、マニュアル、APIドキュメント、VPSニュースとコラム、決算資料と有価証券報告書、アフィリエイトのページ、当サイトの実観測から、15年以上続く定額制のVPSが、AIツールの置き場とクラウドへの入口をどう兼ねようとしているのかを解剖する。"
lead: "「『石狩リージョン 32GB Linuxプラン』の在庫が切迫している状況となっております」——2026年10月2日、さくらのVPSはこう告げ、設備調達等の都合で改善まで2週間から1か月かかる可能性があるとして、東京と大阪のリージョンも検討するよう求めた。石狩は、3つのリージョンのうちLinuxのプランの料金が最も安い。累計利用件数が53万件を超えた定額制のVPSは、この夏、4GB以上のLinuxプランにSLAを付け、販売管理システムへの不正アクセスを受けて古い契約の利用者に管理者パスワードの変更を呼びかけた。生成AI向けのGPUが売上の4割あまりを占めるようになった会社で、15年以上続くVPSがどう作られ、どう売られているのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, vps, small-business, api, security, data-center, ai]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-16"
    claim: "石狩リージョンの32GBプランの在庫切迫（10月2日のお知らせ）と、10月13日時点で続報がないこと"
  - date: "2026-10-27"
    claim: "2027年3月期第1四半期を最新とする決算の数字（第2四半期の決算発表は10月28日の予定）"
serviceUrl: "https://vps.sakura.ad.jp/"
# Affiliate link placeholder: SAKURA internet runs its affiliate program through A8.net (https://www.sakura.ad.jp/function/affiliate/,
# checked 2026-10-13). Flat rewards per Sakura VPS contract: 585 yen (512 plan), 800 (1G), 1,580 (2G), 3,200 (4G), 6,400 (8G),
# 12,000 (16G), 24,000 yen (32G), i.e. the Ishikari monthly price before tax. Approved once a month; orders canceled during the
# free trial do not count; bidding on the company or service names in search ads is forbidden; self-back is allowed. To join,
# register with A8.net and apply to the SAKURA internet program from the A8 dashboard (SAKURA internet reviews the site). The
# official page shows a sample ad image and a blurb; A8.net supplies the banner and text ads. Use A8.net's ad code as provided
# (link to affiliate.url, 1x1 impression image to affiliate.impressionUrl, the material's text verbatim to affiliate.label).
# Never invent the label — ask the owner.
# Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<sakura-vps-material>"
#   program: "Sakura Internet Affiliate Program (A8.net)"
#   impressionUrl: "https://www<NN>.a8.net/0.gif?a8mat=<sakura-vps-material>"
#   label: "<verbatim text of the ad material>"
vendor: "さくらインターネット株式会社"
origin: "JP"
heroTheme: "sakura-vps"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "仮想化基盤"
    name: "KVM"
    confidence: confirmed
    evidence: "公式のよくある質問（2026-10-13確認）に「さくらのVPSでは、仮想化技術にKVMを採用しています」と明記。Windows Serverの仕様のページも仮想化基盤を「Linux KVM」とする。サービス約款は、データセンター内のサーバー設備に設定した仮想化されたサーバー1台の機能を利用者専用として提供し、CPU・ネットワーク・ストレージなどの設備は複数の利用者で共有すると定める"
    evidenceUrl: "https://vps.sakura.ad.jp/faq/"
  - layer: "データセンター"
    name: "SAKURA internet data centers (Ishikari, Osaka, Tokyo)"
    confidence: confirmed
    evidence: "公式の料金・仕様のページ（2026-10-13確認）に、サーバーの設置場所は東京・大阪・石狩から選べ、3か所のデータセンターはすべて自社運営で、サーバーとネットワークの技術者が常駐して24時間365日監視すると明記。料金はリージョンごとに異なり、Windows Serverのプランは大阪と石狩だけで提供する（Windows Serverの料金・サービス仕様のページによる）"
    evidenceUrl: "https://vps.sakura.ad.jp/specification/"
  - layer: "ネットワーク"
    name: "100 Mbps shared internet / 1 Gbps shared local network (IPv4 + IPv6)"
    confidence: confirmed
    evidence: "公式の料金・仕様のページ（2026-10-13確認）に、インターネットは100Mbpsの共有回線、ローカルネットワークは1Gbpsの共有回線、NICは3個、グローバルIPアドレスはIPv4とIPv6が1個ずつ、データ転送量は無制限、ローカルネットワーク接続は台数無制限と明記。Windows Serverの仕様のページは、物理サーバーが10Gbpsでバックボーンネットワークにつながると注記する"
    evidenceUrl: "https://vps.sakura.ad.jp/specification/"
  - layer: "標準OS"
    name: "AlmaLinux / Rocky Linux / Ubuntu / Debian / CentOS Stream / KUSANAGI (14 standard OS images)"
    confidence: confirmed
    evidence: "公式のOSラインアップのページ（2026-10-13確認）に、コントロールパネルからワンクリックで再インストールできる標準OSとして、CentOS Stream 9、AlmaLinux 8・9・10、Rocky Linux 8・9・10、Ubuntu 22.04・24.04・26.04、KUSANAGI 9（CentOS Stream 9版とAlmaLinux 9版）、Debian 11・12を掲載し、ディストリビューション公式のISOイメージや利用者が用意したISOイメージからのインストールにも対応すると明記。14種類は当サイトの集計"
    evidenceUrl: "https://vps.sakura.ad.jp/functions/os/"
  - layer: "スタートアップスクリプト"
    name: "WordPress / Docker Compose / Dify / Open WebUI / n8n (22 official startup scripts)"
    confidence: confirmed
    evidence: "公式マニュアルのスタートアップスクリプトのページ（2026-10-13確認）に、サーバーの新規追加やOS再インストールのときに任意のスクリプトを実行する機能として、さくらインターネット公式スクリプトの一覧（WordPress、DockerCompose、LAMP、Misskey、GROWI、「Open WebUI + さくらのAI Engine」「Dify + さくらのAI Engine」、n8nなど）と、利用者が10個まで保存して公開もできる「マイスクリプト」を明記。22本は当サイトの集計"
    evidenceUrl: "https://manual.sakura.ad.jp/vps/startupscript/startupscript.html"
  - layer: "外部API"
    name: "Sakura VPS API (v7, REST, HTTP Bearer, OpenAPI)"
    confidence: confirmed
    evidence: "公式のAPIドキュメント（版7.2.3、2026-10-13確認）に、URLは https://secure.sakura.ad.jp/vps/api/v7/ にエンドポイントを続ける形で、コントロールパネルで発行したAPIキーによるHTTP Bearer認証、JSON（UTF-8）の応答、アカウントごとに毎分100リクエストの上限（超えると429）を明記し、OpenAPIの仕様をダウンロードできるようにしている。ロールによる権限の設定に対応する"
    evidenceUrl: "https://manual.sakura.ad.jp/vps/api/api-doc/index.html"
  - layer: "Windows"
    name: "Windows Server (2025 / 2022 Datacenter, SPLA)"
    confidence: confirmed
    evidence: "公式のWindows Serverの料金・サービス仕様のページ（2026-10-13確認）に、OSはWindows Server 2025 Datacenter EditionとWindows Server 2022 Datacenter Editionから選べ、マイクロソフト製品のライセンスはサービスプロバイダ向けライセンス（SPLA）で提供し、サーバー管理以外の目的でリモート接続する人数分のRDS SALが要ると明記"
    evidenceUrl: "https://vps.sakura.ad.jp/windows/specification/"
  - layer: "コントロールパネル"
    name: "Vue.js (3.4) + vue-router + Pinia + vue-i18n + Sentry"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、secure.sakura.ad.jp/vps/ は中身が空のdiv要素（id=app）にモジュール形式のJavaScriptを読み込むHTMLを返し、配信されたバンドルに @vue/shared 3.4.33、vue-router 4.6.3、pinia 2.3.1、vue-i18n 9.14.5 のライセンス表記と、@sentry/vue 8.55.0 を示すSDKの識別文字列があったため、Vue 3のSPAで、エラーの収集にSentryを使っているとみられる"
  - layer: "APIサーバー"
    name: "Django REST framework"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、認証なしの GET https://secure.sakura.ad.jp/vps/api/v7/servers は401、WWW-Authenticate: Bearer、Allow: GET, HEAD, OPTIONS を返し、本文のメッセージ「認証情報が含まれていません。」が、Django REST frameworkの日本語の翻訳ファイルで認証情報のない要求への応答（Authentication credentials were not provided.）に当てた訳と一致したため、APIはDjango REST frameworkで作られているとみられる"
    evidenceUrl: "https://raw.githubusercontent.com/encode/django-rest-framework/master/rest_framework/locale/ja/LC_MESSAGES/django.po"
  - layer: "サイト・ニュース・マニュアル"
    name: "nginx / WordPress (VPS News) / Sphinx (manual)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、vps.sakura.ad.jp はHTTP/1.1で server: nginx とHSTS（max-age=15768000）を返し、VPSニュース（/contents/）はHTMLのgeneratorにWordPress 7.1.3を示し、WordPressのREST APIを指すLinkヘッダーを返した。manual.sakura.ad.jp はHTTP/2で server: nginx、x-amz-id-2、x-amz-request-id、via: 1.1 sac-elb を返し、HTMLにSphinxのテーマ（SphinxRtdTheme）の記述があったため、Sphinxで生成したマニュアルをS3互換のストレージから配信しているとみられる"
sources:
  - label: "さくらのVPS公式: トップページ"
    url: "https://vps.sakura.ad.jp/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS公式: 料金・仕様"
    url: "https://vps.sakura.ad.jp/specification/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS公式: 特長"
    url: "https://vps.sakura.ad.jp/feature/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS公式: OSラインアップ"
    url: "https://vps.sakura.ad.jp/functions/os/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS公式: スケールアップ（ご利用条件）"
    url: "https://vps.sakura.ad.jp/functions/scaleup/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS公式: お申し込みの流れ（お試し期間・お支払い方法）"
    url: "https://vps.sakura.ad.jp/flow/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS公式: よくある質問"
    url: "https://vps.sakura.ad.jp/faq/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS公式: 品質保証（SLA）"
    url: "https://vps.sakura.ad.jp/sla/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS公式: for Windows Server 料金・サービス仕様"
    url: "https://vps.sakura.ad.jp/windows/specification/"
    accessedAt: "2026-10-13"
  - label: "VPSニュース: さくらのVPS「SLA(サービス品質保証）」提供開始のお知らせ（2026-08-04）"
    url: "https://vps.sakura.ad.jp/contents/info/vps-sla/"
    accessedAt: "2026-10-13"
  - label: "VPSニュース: さくらのVPS 管理者パスワード変更のお願い（2026-08-26）"
    url: "https://vps.sakura.ad.jp/contents/info/password-change-faq/"
    accessedAt: "2026-10-13"
  - label: "VPSニュース: さくらのVPS 石狩リージョン 在庫僅少のお知らせ（2026-10-02）"
    url: "https://vps.sakura.ad.jp/contents/info/ik01-stock-2026-1002/"
    accessedAt: "2026-10-13"
  - label: "VPSコラム: 外資クラウドの請求でお困りではありませんか？（2026-03-05）"
    url: "https://vps.sakura.ad.jp/contents/column/advantage-vps-costs/"
    accessedAt: "2026-10-13"
  - label: "VPSコラム: AI活用にも『さくらのVPS』がおすすめ！（2026-04-02）"
    url: "https://vps.sakura.ad.jp/contents/column/start-ai-with-vps/"
    accessedAt: "2026-10-13"
  - label: "VPSコラム: さくらのVPSで始めるDR対策（2026-08-07）"
    url: "https://vps.sakura.ad.jp/contents/column/dr-measures/"
    accessedAt: "2026-10-13"
  - label: "さくらのVPSマニュアル: サーバーのバージョン確認（v1〜v5の提供開始日）"
    url: "https://manual.sakura.ad.jp/vps/controlpanel/server-version.html"
    accessedAt: "2026-10-13"
  - label: "さくらのVPSマニュアル: スタートアップスクリプト（公式スクリプト一覧）"
    url: "https://manual.sakura.ad.jp/vps/startupscript/startupscript.html"
    accessedAt: "2026-10-13"
  - label: "さくらのVPSマニュアル: API（API更新履歴）"
    url: "https://manual.sakura.ad.jp/vps/api/index.html"
    accessedAt: "2026-10-13"
  - label: "さくらのVPS APIドキュメント（版7.2.3）"
    url: "https://manual.sakura.ad.jp/vps/api/api-doc/index.html"
    accessedAt: "2026-10-13"
  - label: "さくらのVPSマニュアル: Acronis Cyber Protect Cloud 簡易セットアップ"
    url: "https://manual.sakura.ad.jp/vps/marketplace/acronis-setup.html"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: さくらのVPS サービス約款（PDF、2026年8月1日適用）"
    url: "https://www.sakura.ad.jp/agreement/%5Ba%5Dyakkan2_vps.pdf"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: 会社概要"
    url: "https://www.sakura.ad.jp/corporate/corp/profile/"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: アフィリエイトプログラム"
    url: "https://www.sakura.ad.jp/function/affiliate/"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: 2027年3月期 第1四半期 決算説明資料（2026-07-28）"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/07/260728-ir_2.pdf"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: 2027年3月期 第1四半期 決算短信（2026-07-28）"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/07/260728-ir_1.pdf"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: 2026年3月期 決算説明資料（2026-04-27、サービス区分の組み替え）"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/04/260427-ir_2.pdf"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: 2025年3月期 決算説明資料（2025-04-28、売上区分の定義）"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2025/04/250428-ir_2.pdf"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: 第27期 有価証券報告書（2026-06-15提出）"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/06/260615-ir_1.pdf"
    accessedAt: "2026-10-13"
  - label: "さくらインターネット: 当社システムへの不正アクセスに関する調査結果および再発防止策について（第三報を含む適時開示、2026-09-10）"
    url: "https://www.sakura.ad.jp/corporate/wp-content/uploads/2026/09/260910-ir_1.pdf"
    accessedAt: "2026-10-13"
  - label: "Django REST framework（GitHub）: 日本語の翻訳ファイル（locale/ja/LC_MESSAGES/django.po）"
    url: "https://raw.githubusercontent.com/encode/django-rest-framework/master/rest_framework/locale/ja/LC_MESSAGES/django.po"
    accessedAt: "2026-10-13"
---

さくらのVPSは、1台の物理サーバーを仮想化して複数の利用者で分け合い、そのうちの1台分をroot権限ごと貸すサービスだ。OSの設定からソフトの導入、セキュリティ対策までを利用者が受け持つ代わりに、料金は定額で、通信量による従量課金がない。運営するのは、当サイトが解剖した[さくらのレンタルサーバ](/ja/articles/sakura-rental-server)と同じさくらインターネットで、FAQは、共用のレンタルサーバよりも自由度が高く、さくらのクラウドよりも柔軟性に欠けるものの比較的低価格でスケールアップできるサービスとして位置づける。当サイトはほかに国内の[XServer VPS](/ja/articles/xserver-vps)、海外の[DigitalOcean](/ja/articles/digitalocean)、共用サーバーの[ConoHa WING](/ja/articles/conoha-wing)も解剖しており、置き場所を選ぶ際の読み比べに使える。

## サービス解説

さくらのVPSは、メモリ512MBから32GBまでのLinux向けの7プランと、Windows Serverを載せた6プランからなる。Linuxのプランは石狩・大阪・東京の3リージョンから、Windowsのプランは大阪と石狩から設置場所を選ぶ。同じ会社の「さくらのクラウド」へ移ったりつないだりする手段も、関連する機能として並ぶ。

:::fact
VPSマニュアルのバージョン表（2026-10-13確認）によれば、さくらのVPSは2010年9月1日にv1の提供を始め、v3（2012年3月29日）でIPv6接続とローカル接続に、v4（2014年11月27日）でスケールアップに対応し、現行のv5は2019年11月7日に始まった。トップページは、累計利用件数が53万件を突破し、15年以上にわたって使われてきたとし（同じ欄の注記は「2025年12月時点 当社調べ VPS契約数の累計」）、東京・大阪・石狩のデータセンターを自社で運営すると書く。運営するさくらインターネットは、会社概要（2026-10-13時点）によれば1996年12月23日創業、1999年8月17日設立で、本社は大阪市北区のグラングリーン大阪にあり、東証プライム市場に上場している（証券コード3778）。2027年3月期第1四半期の決算説明資料によれば、2011年11月に北海道石狩市に郊外型の大規模データセンターを開き、2026年3月に「さくらのクラウド」が国産で初めてガバメントクラウドのサービス提供事業者に採択された。決算短信は、事業セグメントをインターネットインフラ事業の単一セグメントとしている。特長のページは、マイグレーション機能でVPSと同じ構成のサーバーをクラウド側へ移せると書き、料金・仕様のページは、さくらのクラウドとVPSをレイヤ2でつなげる「ハイブリッド接続」や、利用にさくらのクラウドのプロジェクトの作成が要るCDN「さくらのウェブアクセラレータ」（アウトバウンド1GiBあたり5円）を関連サービスに挙げる。
:::

:::fact
料金・仕様のページ（2026-10-13確認・税込）によれば、Linuxのプランは512MB（仮想1コア・SSD 25GB）、1G（2コア・50GB）、2G（3コア・100GB）、4G（4コア・200GB）、8G（6コア・400GB）、16G（8コア・800GB）、32G（10コア・1,600GB）の7つ。毎月払いの月額は石狩で643円、880円、1,738円、3,520円、7,040円、13,200円、26,400円、東京で698円から30,800円までで、12か月一括は石狩の512MBの7,078円（月額換算590円）からだ。ページは12か月一括を「およそ月額料金1ヶ月分がお得」とし、1G以上では月額のちょうど11か月分になる（当サイトの計算）。初期費用は無料、最低利用期間は3か月。共通仕様は、インターネットが100Mbpsの共有回線、ローカルネットワークが1Gbpsの共有回線、NICが3個、IPv4とIPv6のアドレスが1個ずつ、データ転送量は無制限で、root権限を渡す。Windows Serverの料金・サービス仕様のページによれば、Windows Serverのプランは、W1G（2コア・1GB・50GB）の月1,485円からW32G（10コア・32GB・1,600GB）の月42,240円までの6つで、リージョンによる価格の違いはなく、複数のサーバーからローカルネットワーク経由で使えるNFSは、SSD 100GBの月880円から3,200GBの月26,400円まで。お申し込みの流れのページによれば、支払いはクレジットカード、銀行振込、請求書払い、自動口座振替の4種類だ。トップページと料金・仕様のページにキャンペーン価格の表示はなく、クレジットカード払いなら全プランを2週間無料で試せる（2026-10-13確認）。
:::

:::pull
15年以上続く定額制のVPSに、2026年はSLAが加わり、いちばん安い石狩の32GBプランで在庫が切迫した。
:::

::scorecard

## UX分析

さくらのVPSの体験は、値段が先に決まっていることと、サーバーの中身を利用者が受け持つことの二つでできている。2026年は、どのリージョンを選ぶかが、値段だけでなく在庫の問題にもなった。

- **リージョンを選ぶと、値札も決まる**。料金・仕様のページ（2026-10-13確認）は、プランごとに石狩・大阪・東京の料金を切り替えて示し、毎月払いでは東京が石狩より8.6〜16.7%高い（当サイトの計算）。料金・仕様のページによれば上位プランへの変更はコントロールパネルからでき、スケールアップのページによれば、別のリージョンや別のゾーンへのスケールアップ、ディスク容量が減るプランへの変更、申し込んだ当日の変更はできず、変更先の在庫が足りない場合もできない。さくらのクラウドとの違いを問うFAQへの答えは、トップページでは「スケールアウトはできません」、FAQのページでは「スケールダウンができません」と書かれ、特長のページは「ローカルネットワーク接続で柔軟にスケールアウト」を勧めている。
- **お試しはクレジットカード払いだけ、2台まで**。お申し込みの流れのページによれば、2週間の無料お試しは申し込みでクレジットカード払いを選んだ場合に限られ、同時に使えるのは2台まで。お試し中は外向きの25番ポートが閉じられ（お試し期間中は閉じたままで、本サービスの開始から約72時間で解除）、サーバーからの送信は10Mbpsに制限され、無料のネームサーバーは使えない。キャンセルの手続きをしなければ期間の終わりに自動で本登録になり、銀行振込などほかの払い方では、入金を確認してから使えるようになる。
- **AIツールまでスクリプトで入る**。VPSマニュアルの公式スクリプト一覧（2026-10-13確認）には、WordPress、DockerCompose、LAMP、Misskey、Mastodon、GROWI、Minecraftなど22本が並び（当サイトの集計）、うち「Open WebUI + さくらのAI Engine」「Dify + さくらのAI Engine」「n8n」の3本がAIまわりだ。利用者は自作の「マイスクリプト」を10個まで保存し、ほかの利用者に公開できるが、約款は、すべてのスクリプトについて会社は保証をせず、他の利用者が公開したスクリプトの利用で生じた損害に責任を負わないと定める。一覧のUbuntu 26.04の列には、◯の付いた公式スクリプトがまだない（当サイトの集計）。公式コラムは、VPSを「AIエージェントやAIツールが動く場所」、LLMをAPIで使えるさくらのAI Engineを「頭脳」と位置づけ、AI Engineはデータが国外に送られず、質問内容が学習に使われないと紹介する。
- **バックアップは、VPSの外に用意する**。FAQは「いいえ、さくらのVPSは標準・オプション共にバックアップの機能はありません」と答え、同じゾーンの別のサーバーとの同期や、ローカル環境への保存を勧める。受け皿として並ぶのは、ローカルネットワーク経由で複数台から使えるNFSと、マニュアルのマーケットプレイスの欄が案内するアクロニス・ジャパンのバックアップサービス「Acronis Cyber Protect Cloud」で、後者の料金はさくらのクラウドのプロジェクトごとに請求される。8月7日の公式コラムは、メインのサーバーを東京に、バックアップを大阪や石狩に置く構成を例に挙げる。
- **SLAは4GB以上のLinuxプランから**。8月1日に始まったSLAは、メモリ4GB以上かつv5以上のLinuxプランについて月間稼働率99.95%を保証し、下回った月は、翌月15日までの申告を受けて同社が調査し、自社の責による障害で99.95%を下回ったと判断した場合に限り、満たさなかった部分に相当する料金を翌月以降の請求から減額する。仮想マシン単位の障害、事前に告知したメンテナンスや緊急のメンテナンス、利用者が継続時間を証明できない障害などは対象外で、Windows Serverのプランも含まれない。お知らせは導入の理由を「これまでお客様よりサービス品質の保証に関するご要望を多数いただいており」と説明し、約款には品質保証の条文が加わった。
- **古い契約は、管理者パスワードを確かめたい**。8月26日のお知らせは、販売管理システムへの不正アクセスに関連して、契約時に発行した管理者（root／Administrator）の初期パスワードが同社のシステム内に保存されていた契約の利用者のうち、初期パスワードを使い続けている人に変更を求めた。2022年9月1日以降の新規契約は利用者が自分でパスワードを設定する方式で、同社は保存していない（一部は対象になる場合があり、メールで連絡している）。9月10日の第三報によれば、販売管理システムは各サービスを実際に提供する環境とは別のシステムで、そこに「さくらのVPS」の一部の管理者初期パスワードがハッシュ化されない状態で保存されていた。一方で、「さくらのレンタルサーバ」を除くサービス提供環境には、不正アクセスを示す兆候は確認されなかった。同じ報告は、「データが外部へ持ち出されたことを裏付ける明確な事実は確認されておりません」とし、本件に起因する情報の不正利用、その他の二次被害についても「現時点において確認されておりません」と書く（いずれも9月10日時点）。経緯の全体は[さくらのレンタルサーバ](/ja/articles/sakura-rental-server)の記事で扱っている。

## 技術構成

::techstack

:::fact
FAQ（2026-10-13確認）によれば、さくらのVPSは仮想化にKVMを使う。約款は、データセンター内のサーバー設備に設定した仮想化されたサーバー1台の機能を利用者専用として提供し、CPU、ネットワーク、ストレージなどの設備は複数の利用者の共有で、割り当てる計算資源の数量は利用できる最大値を示し、恒常的に占有することはできないと定め、暗号資産のマイニングなどを禁止事項に挙げる。OSラインアップのページは、コントロールパネルからワンクリックで再インストールできる標準OSとして、CentOS Stream 9、AlmaLinux 8・9・10、Rocky Linux 8・9・10、Ubuntu 22.04・24.04・26.04、KUSANAGI 9（CentOS Stream 9版とAlmaLinux 9版）、Debian 11・12の14種類を並べ（当サイトの集計）、ディストリビューション公式のISOイメージや利用者が用意したISOイメージからの手動インストールにも対応する。料金・仕様のページによれば、ホスト型WAFの「SiteGuard Server Edition」をVPS向けの特別版として無料で提供し、サーバーの疎通を確かめる監視は無料のオプションで、ローカルネットワークは台数無制限でつなげる。Windows Serverの仕様のページは、物理サーバーが10Gbpsでバックボーンネットワークにつながり、ローカル接続のスイッチは1つの会員IDにつき20個までと注記し、マイクロソフト製品のライセンスをサービスプロバイダ向けのSPLAで提供すると書く。2027年3月期第1四半期の決算説明資料は、6月に「さくらのレンタルサーバ」「さくらのVPS」など4サービスで、電力使用量から算出したCO2排出量（推計値、Scope2）を確認できる機能を始めたと記す。
:::

:::fact
VPSマニュアルのAPIのページ（2026-10-13確認）によれば、APIは2023年3月28日に公開され、2024年9月18日にロールとAPIキーによるアクセス制御が、2026年2月5日にディストリビューション公式ISOイメージでのOS再インストールが、7月28日に標準OSでのOS再インストールが加わった。APIドキュメント（版7.2.3）によれば、URLは `https://secure.sakura.ad.jp/vps/api/v7/` にエンドポイントを続ける形で、コントロールパネルで発行したAPIキーをHTTP Bearer認証で送り、結果はJSON（UTF-8）で返る。リクエストの上限は基本でアカウントごとに毎分100回で、超えると429が返る。ドキュメントは「まだ一部の機能に制限しておりますが、順次機能を追加していく予定です」と書き、仕様として示したリクエストとレスポンスの文字列をCC BY 4.0で提供し、OpenAPIの仕様をダウンロードできるようにしている。当サイトが数えたところ、43のパスに62の操作が並び、サーバーの電源、OS再インストール、パケットフィルター、サーバー監視、ホストサーバーの移行、NFS、スイッチ、APIキーとロールを扱うが、サーバーの新規契約や解約にあたる操作はなかった。当サイトの実観測（2026-10-13）では、認証なしの `GET /vps/api/v7/servers` は401とともに WWW-Authenticate: Bearer と Allow: GET, HEAD, OPTIONS を返し、本文は `{"message":"認証情報が含まれていません。","code":"not_authenticated"}` だった。コントロールパネル（`secure.sakura.ad.jp/vps/`）は中身が空のdiv要素にJavaScriptを読み込む作りで、配信されたバンドルには @vue/shared 3.4.33、vue-router 4.6.3、pinia 2.3.1、vue-i18n 9.14.5 のライセンス表記と、@sentry/vue 8.55.0 を示すSDKの識別文字列があった。`vps.sakura.ad.jp` はHTTP/1.1で server: nginx とHSTS（max-age=15768000）を返し、VPSニュース（`/contents/`）のHTMLはgeneratorにWordPress 7.1.3を示した。マニュアル（`manual.sakura.ad.jp`）はHTTP/2で server: nginx、x-amz-request-id、via: 1.1 sac-elb を返し、HTMLにはSphinxのテーマ（SphinxRtdTheme）の記述があった。
:::

:::guess
401の本文にある「認証情報が含まれていません。」という文は、Django REST frameworkの日本語の翻訳ファイルが、認証情報のない要求への応答（Authentication credentials were not provided.）に当てている訳と一字一句同じで、APIはDjango REST frameworkで作られているとみられる。コントロールパネルはVue 3で書かれたSPAで、画面で起きたエラーをSentryで集めていると読める。APIが電源やOSの入れ直しといった運用の操作に絞られ、契約の操作を含まないのは、料金と契約を販売管理の側に置いたまま、自動化の需要が大きい運用の側から順に開いてきたためと推測される。8月の件でVPSの利用者に対応が求められたのも、サーバーが動く環境ではなく、契約の情報を持つ側のシステムに保存されていたパスワードのためだったと読める。
:::

## 3つのリージョン、3つの値札

:::fact
料金・仕様のページ（2026-10-13確認）は、サーバーの設置場所を東京・大阪・石狩から選べるとし、プランごとにリージョンを切り替えて料金を示す。3か所のデータセンターはいずれも自社運営で、技術者が常駐して24時間365日監視し、トップページは石狩を「災害に強いロケーション」と紹介する。2027年3月期第1四半期の決算説明資料によれば、石狩データセンターは北海道の寒冷な気候を生かした冷却を採り（1・2号棟は直接外気冷房、3号棟は間接外気冷房、コンテナ型は液冷）、再生可能エネルギー100％での運用を続けている。同じ四半期の決算短信は、総資産が増えた主な要因を石狩データセンターのインフラの増強などとする。NFSとWindows Serverのプランは、リージョンで料金が変わらない。10月2日のお知らせは、「『石狩リージョン 32GB Linuxプラン』の在庫が切迫している状況となっております」として、新規申し込み、スケールアップ、在庫を要するその他の手続きに応じられない場合があり、石狩のほかのプランも今後切迫する可能性があると告げた。在庫は補充する予定だが、設備調達等の都合で「在庫状況の改善まで2週間から１ヶ月を要する可能性がございます」とし、東京と大阪のリージョンは申し込めると案内している。10月13日の時点で、VPSニュースに続報は載っていない。
:::

| プラン（毎月払い・税込） | 石狩 | 大阪 | 東京 | 東京と石狩の差（当サイトの計算） |
| --- | --- | --- | --- | --- |
| 512MB（1コア・25GB） | 643円 | 671円 | 698円 | +8.6% |
| 1G（2コア・50GB） | 880円 | 935円 | 990円 | +12.5% |
| 2G（3コア・100GB） | 1,738円 | 1,848円 | 1,958円 | +12.7% |
| 4G（4コア・200GB） | 3,520円 | 3,740円 | 3,960円 | +12.5% |
| 8G（6コア・400GB） | 7,040円 | 7,480円 | 7,920円 | +12.5% |
| 16G（8コア・800GB） | 13,200円 | 14,300円 | 15,400円 | +16.7% |
| 32G（10コア・1,600GB） | 26,400円 | 28,600円 | 30,800円 | +16.7% |

表の金額は料金・仕様のページによる（2026-10-13確認）。大阪は石狩より4.4〜8.3%高い（当サイトの計算）。12か月一括で払う場合、32Gプランの年額は石狩290,400円、東京338,800円（料金・仕様のページ）で、差は48,400円（当サイトの計算）になる。

:::guess
大きなプランほど東京との差が、金額では一貫して、率でも8.6%からおよそ12.5%、16.7%へと段階的に広がる値付けは、電力や冷却、用地といったデータセンターの費用の差を、資源の量に応じて値札に映しているとみられる。安いリージョンに大きなプランの需要が集まれば、在庫は石狩から先に減ることになり、最初に切迫したのが最も高価な32GBだったのは、その表れと読める。スケールアップはリージョンをまたげないため、石狩で小さく始めた利用者は、在庫が戻るまで上位プランへ移れない可能性がある。「設備調達等の都合」という説明と、同じ時期に会社が石狩データセンターのインフラ増強と最新のGPUへの投資を進めていることを合わせると、汎用のサーバーの調達にも時間がかかっていると推測される。公式コラムが東京のサーバーのバックアップを大阪や石狩に置く構成を勧めるのは、障害への備えであると同時に、需要をリージョンに散らす効果も持つと推測される。
:::

## ビジネスモデル

稼ぎ方は、リージョンとプランで決まる定額の利用料を、毎月か12か月分の前払いで受け取る形で、Windowsのライセンスや追加のソフト、NFSが上に乗る。客を集める役は、A8.netのアフィリエイトと2週間の無料お試し、そして自社のコラムが担う。

:::fact
公式のアフィリエイトプログラムのページ（2026-10-13確認）によれば、さくらインターネットはA8.netで成果報酬型の広告を出しており、さくらのVPSの報酬は1件あたり512プラン585円、1Gプラン800円、2Gプラン1,580円、4Gプラン3,200円、8Gプラン6,400円、16Gプラン12,000円、32Gプラン24,000円だ。いずれも石狩リージョンの毎月払いの月額を税抜きにした額と一致する（512プランは円未満を四捨五入、当サイトの計算）。成果の承認は月1回で、お試し期間中に解約された注文は対象外、検索連動型広告で同社名やサービス名に出稿することは禁じられ、自分の契約で報酬を受け取るセルフバックも認める。ページ冒頭は「最大12,000円/件をお支払い」と書く一方、VPSの32Gプランの欄は24,000円を示す。外資クラウドの請求に悩む人に向けた2026年3月5日の公式コラムは、クラウドの4GBメモリのインスタンスを約6,108円/月、石狩の4GBプランを12か月一括で3,227円/月として、VPSを「およそ半額程度」とし、自社を「国内最古参のVPS業者」と紹介する。決算資料によれば、売上区分の「クラウドインフラストラクチャー」は2025年3月期の資料で「主にクラウドサービス、VPSサービス」と定義され、2026年3月期からはGPUをクラウド型で提供する高火力 DOKと高火力 VRTも含む。2027年3月期第1四半期のクラウドインフラストラクチャーの売上は28億1,000万円（前年同期比+11.1%）、さくらインターネット単体のクラウド・VPS・レンタルサーバのARRは155億7,900万円（同+8.9%）で、ARRの注記はクラウドを従量課金制とする。同じ四半期の連結売上高111億3,400万円（同+48.6%）のうち、GPUインフラストラクチャーサービスが47億1,800万円（同+245.9%）と42.4%を占め、会社は最新のNVIDIA GPU「Rubin」への投資を決めた。当サイトが確認した資料に、VPS単独の売上は載っていなかった。有価証券報告書は、事業を「クラウド・インターネットインフラサービスを自社グループで運営する国内のデータセンターを活かして提供する事業」と説明し、2025年3月期の決算説明資料は「垂直統合型・自前主義のビジネスモデル」を掲げる。
:::

:::guess
報酬が石狩の毎月払いの月額1か月分（税抜き）にそろえてあるのは、最低利用期間の3か月のうちに紹介の費用を回収できる水準に置いたものとみられる。値段を変えずに長く使ってもらう定額のVPSは、ARRに数えられる積み上げ型の収入で、前年同期比で245.9%伸びたGPUとは伸び方が異なるとみられる。それでも、会社がクラウドとVPSを同じ区分で数え、VPSの機能の先にクラウドへの移行、クラウドとのハイブリッド接続、クラウドのプロジェクトで請求されるバックアップやCDNを並べていることからは、VPSがさくらのクラウドへの入口として扱われているとみられる。コラムが外資クラウドの請求に悩む人へ定額を訴え、AI Engineと組み合わせる使い方を勧めるのも、定額のVPSで客を迎え、従量課金のクラウドやAIのAPIへ利用を広げていく導線を組んでいるためと推測される。
:::

2010年に始まったさくらのVPSは、自社で運営する石狩・大阪・東京のデータセンターに置いた仮想サーバーを、通信量に左右されない定額で貸し続けてきた。2026年には、4GB以上のLinuxプランにSLAを付け、AIツールの置き場としても売り込む一方で、販売管理システムに保存されていた古い契約の初期パスワードについて利用者に変更を呼びかけ、いちばん安い石狩では大きなプランの在庫が切迫した。値段が先に決まっていることを売りにするVPSにとって、次に問われるのは、選んだ場所に、選んだ大きさのサーバーを、必要なときに用意できるかどうかなのかもしれない。
