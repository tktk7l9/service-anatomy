---
service: "コアサーバー"
title: "月430円は36ヶ月の一括払いの値段 — ApacheのV1とLiteSpeedのV2を一つの看板で売り、2026年7月に短い契約の上げ幅を大きくして値上げしたコアサーバーを解剖する"
description: "コアサーバー（CORESERVER）は、GMOインターネットグループのGMOデジロック株式会社（本社・大阪市）が2007年8月に始めた共用レンタルサーバーだ。開始時のお知らせは、2001年に始めた無料サーバー「XREA.COM」の上位互換の有料サービスと位置づけた。2021年1月にLiteSpeedを使う「V2」（CORE-X・Y・Z）を新設し、それまでのApacheの4プラン（CORE-MINI・A・B・C）を「V1」として並べて売る。料金（2026-10-13確認・税込）は、V2のCORE-Xが36ヶ月契約で月430円、1ヶ月ごとの契約で830円、V2の初期費用は1,650円（ドメインの同時申し込みで無料）で、全プランに30日間の無料お試しが付く。2026年7月1日からは、円安、電気料金、AI需要の拡大によるサーバーコストの上昇を理由に全7プランの料金を上げ、上げ幅はV2の36ヶ月契約で約10%、1ヶ月契約で約20%だった（当サイトの計算）。料金ページ、機能一覧、仕様、よくある質問とマニュアル、お知らせ、APIドキュメント、アフィリエイトのページ、会社情報、姉妹サービスとエックスサーバーの料金ページ、当サイトの実観測から、二つの世代を一つの看板で売る構成、契約期間で変わる値札、市販の部品と自社のパネルの組み合わせ、紹介とキャンペーンで新しい契約を集める事業までを解剖する。"
lead: "コアサーバーのトップページは、V2のプランを「月額430円～」と紹介する。料金ページの比較表を開くと、それはV2のCORE-Xを36ヶ月分、15,480円で一括払いした場合の月額で、1ヶ月ごとの契約なら830円、初期費用は1,650円（ドメインの同時申し込みで無料）だとわかる。2007年にXREAの上位互換の有料サービスとして始まったこのサーバーは、いまもApacheの「V1」とLiteSpeedの「V2」を同じ看板で売り、2026年7月にはV2の36ヶ月契約を約10%、1ヶ月契約を約20%値上げした（当サイトの計算）。その値付けと仕組みとお金の流れを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, wordpress, small-business, php, litespeed, backup, api, security, cloudflare]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-31"
    claim: "co.jpドメイン×コアサーバーV2のビジネス応援キャンペーン（2026年9月1日〜10月31日、V2の初期費用と12ヶ月分の料金をポイントで返す、申請は2027年1月31日まで）。終了後の扱いと、各ページのバナーを確かめる"
  - date: "2026-10-31"
    claim: "One MCPのページ（手順と対応状況を2026年10月時点の内容と書く）が、AIから動かせるサーバー操作の対象にOneレンタルサーバーを挙げ、コアサーバーを挙げていないこと"
  - date: "2026-11-04"
    claim: "エックスサーバーのスタンダードのキャンペーン価格（36ヶ月契約で月693円、12ヶ月契約で990円、11月4日17時まで）と、それを使った3年分の支払額の比較"
serviceUrl: "https://www.coreserver.jp/"
# Affiliate link placeholder: CORESERVER's affiliate program runs through the ASP A8.net (checked 2026-10-13
# on https://www.coreserver.jp/partner/affiliate/ and https://www.value-domain.com/affiliate/): register with
# A8.net for free and apply there (the CORESERVER page links to A8.net's program search, keyword
# s00000007238001). New-contract rewards: the CORESERVER page lists V1 only, tax included (CORE-MINI 110-770
# yen, CORE-A 165-1,430, CORE-B 330-2,200, CORE-C 1,100-7,700 for 1-12 months); the Value Domain page lists the
# same V1 rewards tax excluded and adds V2 (CORE-X 635-5,000, CORE-Y 908-7,000, CORE-Z 2,272-10,000 yen). A
# separate in-house referral program (https://www.value-domain.com/service/referral/) pays 100 Value Domain
# points per server order and bans referrals where advertising is prohibited. Neither page states a listing-ad
# keyword ban or a new-window ban (A8.net's program terms need a publisher login, which was not used), so
# sameWindow is not set. Use the A8.net ad code as provided: link to affiliate.url, 1x1 image to
# affiliate.impressionUrl, text ad verbatim to affiliate.label; keep every field identical in ja.md and en.md
# (parity.ts checks it). Never invent the label — ask the owner.
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<coreserver-material>"
#   program: "CORESERVER Affiliate Program (A8.net)"
#   impressionUrl: "https://www<nn>.a8.net/0.gif?a8mat=<coreserver-material>"
#   label: "<verbatim text of the ad material>"
vendor: "GMOデジロック株式会社"
origin: "JP"
heroTheme: "coreserver"
scores: { product: 3.5, ux: 3.0, tech: 3.0, business: 3.0 }
techStack:
  - layer: "Webサーバー"
    name: "LiteSpeed Web Server (V2, HTTP/3) / Apache (V1)"
    confidence: confirmed
    evidence: "サーバー仕様のページ（2026-10-13確認）は、V2プランのWebサーバーをLiteSpeed、V1プランをApacheと明記し、HTTP/2とHTTP/3への対応をV2に、HTTP/2への対応をV1に書く。トップページは、V1を「Apache採用で標準的なセキュリティ対策」、V2をLiteSpeedのプランと説明する。当サイトの実観測（2026-10-13）では、よくある質問がサーバー名の例に挙げる s1.coreserver.jp は server: Apache を返した"
    evidenceUrl: "https://www.coreserver.jp/spec/"
  - layer: "データベース・言語"
    name: "MariaDB (10.6) / PostgreSQL (14, V1 only) / SQLite / PHP (5.3–8.5) / Perl (5.26) / Ruby / Python"
    confidence: confirmed
    evidence: "サーバー仕様のページ（2026-10-13確認）に、MySQLサーバーはV2がMariaDB 10.6系、V1がMariaDB 10.6、PostgreSQLサーバーはV1のみPostgreSQL 14、SQLiteはV2が2系と3系、V1が3系と明記。PHPはV2が7.4＋LiteSpeed PHP（5.3から8.5まで選択可）、V1が7.4＋FastCGI＋OPcache＋APCu（5.6から8.5まで選択可）、Perlは5.26系、RubyはV2が2.3系、V1が2.6系、Pythonは2系と3系とする。よくある質問も、V2はMySQL（MariaDB）のみで、PostgreSQLを使うならV1を選ぶよう案内する"
    evidenceUrl: "https://www.coreserver.jp/spec/"
  - layer: "セキュリティ"
    name: "Imunify360 (V2)"
    confidence: confirmed
    evidence: "トップページ（2026-10-13確認）は、V2の3プランのセキュリティ欄に「セキュリティソフトImunify360」と書き、V1とV2の違いの表でV2を「Imunify360搭載で強化」とする。機能一覧は、Web Application FirewallとIPS/IDSをV2の3プランに付け、V1の4プランのWeb Application Firewallを「未導入」とする"
    evidenceUrl: "https://www.coreserver.jp/"
  - layer: "バックアップ・アプリのインストール"
    name: "JetBackup (V2) / Installatron (V2)"
    confidence: confirmed
    evidence: "マニュアル「自動バックアップからの復元（JetBackup）」（2026-10-13確認）は、V2プランの自動バックアップからの復元を、コントロールパネルの「ツール」から「バックアップ・復旧ソフトウェアを開く」を選び、「Restore & Download」で日時を指定する手順で示す。同じページは、コントロールパネルのアプリインストール（Installatron）から入れたWordPressなどのバックアップと復旧には、Installatronのバックアップ機能を使うよう案内する"
    evidenceUrl: "https://help.coreserver.jp/manual/v2/autobackup-restore/"
  - layer: "OS・リソース制御（V2）"
    name: "CloudLinux (V2, alt-php)"
    confidence: likely
    evidence: "よくある質問（2026-10-13確認）は、V2プランのPHP 8.3のパスを /opt/alt/php83/usr/bin/php、Ruby 3.2を /opt/alt/ruby32/bin/ruby などと示す。CloudLinuxの公式ドキュメントは、PHP Selectorで使うalt-phpの実行ファイルを /opt/alt/php72/usr/bin/php のようなパスで示す。トップページはV2を「クラウド型リソース制御を採用し」と説明する"
  - layer: "サーバー管理の基盤（V2）"
    name: "DirectAdmin (V2)"
    confidence: likely
    evidence: "よくある質問は、V2プランの絶対パスを /home/アカウント名、公開ディレクトリを /domains/ドメイン名/public_html/、新しく作ったメールアカウントの保存先を /imap/ドメイン名/アカウント名/Maildir とする。DirectAdminの公式FAQは、ドメインの公開ディレクトリを /home/user/domains/domain.com/public_html、メールの保存先を /home/user/imap/domain.com/email/Maildir/ とし、cPanelのメールの保存先を /home/user/mail/domain.com/email/ と書き分ける"
  - layer: "コントロールパネル（cp.coreserver.jp）"
    name: "FuelPHP"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、コントロールパネルのログイン画面 cp.coreserver.jp/account/login/ は、fuel_csrf_token と fuelfid という名前のクッキーを設定した。FuelPHPの公式ドキュメントは、ファイルドライバーのセッションのクッキー名の既定値を「fuelfid」とする"
  - layer: "サイトの配信・DNS"
    name: "Cloudflare (proxy, DNS)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、coreserver.jp のネームサーバーは gabriel.ns.cloudflare.com と vera.ns.cloudflare.com で、www・cp・help・apidoc の各ホストは server: cloudflare と末尾がNRTの cf-ray を返した。www・cp・help は x-turbo-charged-by: LiteSpeed も返し、Cloudflareの奥でもLiteSpeedが応答しているとみられる"
  - layer: "サーバー設定のAPI"
    name: "CORESERVER API (api.coreserver.jp, POST key-value)"
    confidence: confirmed
    evidence: "APIドキュメント（題名「Xrea Coreserver API Document」・2026-10-13確認）は、CORESERVERのアクセスURLを https://api.coreserver.jp/、XREAを https://api.xrea.com/ とし、パラメータをJSONに変換せず「POSTのKey,Value形式」で送り、各エンドポイントへのアクセスを「１秒間に１アクセスまで」とする。サイドバーには13のカテゴリーに58の項目が並ぶ（当サイトの集計）。機能一覧はAPIをV1の4プランの基本機能に載せる"
    evidenceUrl: "https://apidoc.coreserver.jp/"
  - layer: "契約の自動化"
    name: "Value Domain API v1 (servers, Bearer token)"
    confidence: confirmed
    evidence: "バリュードメインAPIドキュメントのサーバー編（OpenAPI 3.0.0・2026-10-13確認）は、エンドポイントを https://api.value-domain.com/v1/、認証をBearerトークンとし、/coreservers にサーバーの構築（WordPressの初期インストールの指定を含む）、有効期限の延長、自動更新の設定、リソースの変更など11の操作を並べる（当サイトの集計）。「サーバー」の記載はXrea、コアサーバー、バリューサーバーに共通とする"
    evidenceUrl: "https://www.value-domain.com/api/doc/server/"
sources:
  - label: "コアサーバー公式: トップページ（プラン・V1とV2の違い・特典・よくある質問）"
    url: "https://www.coreserver.jp/"
    accessedAt: "2026-10-13"
  - label: "コアサーバー公式: 料金プラン（契約期間ごとの料金・初期費用）"
    url: "https://www.coreserver.jp/price/"
    accessedAt: "2026-10-13"
  - label: "コアサーバー公式: 機能一覧"
    url: "https://www.coreserver.jp/function/"
    accessedAt: "2026-10-13"
  - label: "コアサーバー公式: サーバー仕様"
    url: "https://www.coreserver.jp/spec/"
    accessedAt: "2026-10-13"
  - label: "コアサーバー公式: バックアップ"
    url: "https://www.coreserver.jp/function/backup/"
    accessedAt: "2026-10-13"
  - label: "コアサーバー公式: 利用規約"
    url: "https://www.coreserver.jp/rule/"
    accessedAt: "2026-10-13"
  - label: "コアサーバー公式: アフィリエイトプログラム（A8.net・成果報酬）"
    url: "https://www.coreserver.jp/partner/affiliate/"
    accessedAt: "2026-10-13"
  - label: "コアサーバーのお知らせ: 一覧（2007年〜2026年）"
    url: "https://www.coreserver.jp/info/"
    accessedAt: "2026-10-13"
  - label: "コアサーバーのお知らせ: CORESERVER.JP:コアサーバーの開始について（2007-08-02）"
    url: "https://www.coreserver.jp/info/2007/20070802.php"
    accessedAt: "2026-10-13"
  - label: "コアサーバーのお知らせ: V2プラン爆誕キャンペーン（2021-01-18）"
    url: "https://www.coreserver.jp/info/2021/0118.php"
    accessedAt: "2026-10-13"
  - label: "コアサーバーのお知らせ: サーバー価格改定（2026-05-20）"
    url: "https://www.coreserver.jp/info/2026/0520.php"
    accessedAt: "2026-10-13"
  - label: "コアサーバー サポート: よくある質問"
    url: "https://help.coreserver.jp/faq/"
    accessedAt: "2026-10-13"
  - label: "コアサーバー マニュアル: アカウントの購入"
    url: "https://help.coreserver.jp/manual/account-buy/"
    accessedAt: "2026-10-13"
  - label: "コアサーバー マニュアル: 自動バックアップからの復元（JetBackup）"
    url: "https://help.coreserver.jp/manual/v2/autobackup-restore/"
    accessedAt: "2026-10-13"
  - label: "Xrea Coreserver API Document"
    url: "https://apidoc.coreserver.jp/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: ドメイン実質永久無料（コアサーバーV2との同時申込）"
    url: "https://www.value-domain.com/guide/setregist/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: co.jpドメイン×コアサーバーV2 ビジネス応援キャンペーン"
    url: "https://www.value-domain.com/campaign/cojp/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: 特定商取引法に関する表記"
    url: "https://www.value-domain.com/commercial/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: アフィリエイトプログラム（コアサーバーV1・V2の成果報酬）"
    url: "https://www.value-domain.com/affiliate/"
    accessedAt: "2026-10-13"
  - label: "バリュードメインAPIドキュメント: サーバー編"
    url: "https://www.value-domain.com/api/doc/server/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: WordPress移行サービス"
    url: "https://www.value-domain.com/guide/wp/"
    accessedAt: "2026-10-13"
  - label: "バリュードメイン公式: Value AI Writer byGMO（料金表・コアサーバーV2との同時申込）"
    url: "https://www.value-domain.com/value-aiwriter/"
    accessedAt: "2026-10-13"
  - label: "Value Domain One: One MCP（AIから操作できる機能）"
    url: "https://one.value-domain.com/service/mcp"
    accessedAt: "2026-10-13"
  - label: "Value Domain One: Oneレンタルサーバー（プラン・契約期間ごとの料金）"
    url: "https://one.value-domain.com/rs"
    accessedAt: "2026-10-13"
  - label: "GMOデジロック株式会社: 会社情報（会社概要・沿革）"
    url: "https://www.digirock.co.jp/about/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネットグループ: 主要グループ会社一覧（GMOデジロック株式会社）"
    url: "https://group.gmo/company-profile/groupinfo/"
    accessedAt: "2026-10-13"
  - label: "エックスサーバー公式: 料金（スタンダードの契約期間ごとの料金・キャンペーン）"
    url: "https://www.xserver.ne.jp/price/"
    accessedAt: "2026-10-13"
  - label: "エックスサーバー公式マニュアル: 仕様一覧（リソース保証）"
    url: "https://www.xserver.ne.jp/manual/man_server_spec.php"
    accessedAt: "2026-10-13"
  - label: "DirectAdmin Docs: Frequently Asked Questions（Webサイトとメールの保存先）"
    url: "https://docs.directadmin.com/getting-started/first-steps/faq.html"
    accessedAt: "2026-10-13"
  - label: "CloudLinux OS Docs: CloudLinux OS components（alt-phpとPHP Selector）"
    url: "https://docs.cloudlinux.com/cloudlinuxos/cloudlinux_os_components/"
    accessedAt: "2026-10-13"
  - label: "FuelPHP Documentation: Session Config（クッキー名の既定値）"
    url: "https://fuelphp.com/docs/classes/session/config.html"
    accessedAt: "2026-10-13"
---

コアサーバーは、GMOインターネットグループのGMOデジロック株式会社が2007年から運営する共用レンタルサーバーだ。同じ会社のドメイン登録サービス[バリュードメイン](/ja/articles/value-domain)と、アカウントや契約、支払いの入口を共有している。2021年1月にLiteSpeedを使う「V2」の3プランを新設し、それまでのApacheの4プランを「V1」として残したため、いまは二つの世代を一つの看板で売る。トップページが掲げる「月額430円～」は、V2で最も安いCORE-Xを36ヶ月分まとめて払った場合の月額で、2026年7月1日には全7プランの料金が上がった。当サイトは、共用レンタルサーバーとして[エックスサーバー](/ja/articles/xserver)、[ロリポップ！](/ja/articles/lolipop)、[スターレンタルサーバー](/ja/articles/star-server)、[ConoHa WING](/ja/articles/conoha-wing)も解剖している。

## サービス解説

コアサーバーは、1台のサーバーを複数の契約者で使う共用レンタルサーバーで、独自ドメインのWebサイト、メール、データベースをまとめて扱える。V1はCORE-MINI、CORE-A、CORE-B、CORE-Cの4プラン、V2はCORE-X、CORE-Y、CORE-Zの3プランで、トップページは「個人から法人まで幅広く対応できる７プランをご用意しました。」と書く。サーバーの購入はバリュードメインのサイトで行い、サイトやメールの設定はコアサーバーのコントロールパネル（cp.coreserver.jp）で行う。

:::fact
GMOデジロックの会社情報（2026-10-13確認）によれば、同社（英語名GMO DigiRock, Inc.）は2001年7月に有限会社デジロックとして登記され、翌月にレンタルサーバーのXREAを、2007年8月にコアサーバーを始めた。2011年7月にGMOインターネットグループ株式会社と資本・業務提携し、2013年5月に現在の社名へ変え、2026年2月にValue Domain OneとOneレンタルサーバーを正式に始めた。事業内容はインターネットサービスの提供とソフトウェアの開発で、従業員数は23名（2026年10月1日現在）、資本金は1,000万円、本社は大阪市北区のグランフロント大阪にあり、GMOインターネットグループの主要グループ会社一覧にも名前が載る。2007年8月2日のお知らせは、コアサーバーを、2001年8月2日に始めた無料サーバー「XREA.COM」の「上位互換性がある有料サービス」と位置づけ、15日間の無料お試しと、有料版の「XREA+(Plus)」との互換性を特徴に挙げた。お知らせ一覧の見出しによれば、2009年10月に上位プランのCORE-Bが始まり、11月に下位プランのCORE-MINIの開始予定が告げられ、2011年4月にCORE-Cが加わった。2017年には新しいコントロールパネルへの移行、無料SSL、コールバック型の電話サポート、APIが、2018年1月には自動バックアップ&復元サービスとリージョン選択サービスが始まっている。2021年1月18日のお知らせによれば、この日に新プラン「V2」を設け、それまでの4プランを「V1」として料金を据え置いたまま、ディスク容量を約200%に増やした。V2は、CPUに64コアの最新EPYC、1TBのメモリー、Webサーバーに「LiteSpeed」を採用し、HTTP/3、IPv6、標準搭載の自動バックアップを特徴に挙げ、V2の契約者にドメイン永久無料の特典を付けた。
:::

:::fact
料金ページ（2026-10-13確認・税込）によれば、V2の初期費用は1,650円で、.com、.net、.org、.info、.biz、.jpのドメインを同時に申し込めば無料になり、V1の初期費用は無料だ。V2の月額は、CORE-X（NVMe SSD 500GB、メモリ割当6GB、CPU割当300%）が、1ヶ月ごとのサブスクリプション契約で830円、12ヶ月契約で610円、24ヶ月契約で545円、36ヶ月契約で430円。CORE-Y（700GB、9GB、600%）は1,190円・990円・925円・760円、CORE-Z（1,000GB、12GB、1,200%）は2,990円・2,505円・2,445円・2,190円で、CPU割当は「CPUの1コア相当のリソースを100とした場合の利用可能なリソース量」と説明される。V1は1・3・6・12・24・36ヶ月の料金を並べ、36ヶ月契約の月額はCORE-MINI（SSD 300GB）が255円、CORE-A（600GB）が510円、CORE-B（800GB）が1,015円、CORE-C（1,400GB）が3,165円、1ヶ月契約は425円・795円・1,585円・4,950円だ。CORE-MINIはマルチドメインが50個、メールアドレスが200個、MySQL（MariaDB）が10個までで、ほかの6プランはいずれも無制限。転送量は全プランで無制限とされ、V2の「転送量目安」には、規定の転送量を超えた分はベストエフォートになると注記がある。全プランに30日間の無料お試しが付き、トップページと料金ページは「クレジットカード不要」と書く。ドメイン実質永久無料のページによれば、V2をドメインと同時に申し込み、お試し期間中に12ヶ月以上で本契約すると、対象のドメイン（.com、.net、.org、.biz、.info、.jp）の取得費用と更新費用が無料になり、他社管理のドメインとプレミアムドメインは対象外だ。よくある質問によれば、サポートは24時間受け付けるお問い合わせフォームと、土日祝を除く10:00〜12:00と13:00〜17:00のライブチャットで、折り返しの電話サポートは、V1のCORE-BとCORE-C、V2のCORE-Zの契約者だけが使える。
:::

:::pull
トップページの430円は、36ヶ月分を先に払う人の月額だ。コアサーバーの値札は、短く払う人ほど高くなる。
:::

::scorecard

## UX分析

コアサーバーの体験は、カード不要の30日のお試しと、申し込みと同時に設置されるWordPressから始まる。その先では、契約はバリュードメイン、操作はコアサーバーのパネルと入口が分かれ、V1とV2で使える機能も違う。

- **30日のお試しに、カードは要らない**。アカウントの購入のマニュアルによれば、お試し中に購入しても残りの日数は引き継がれる。一方でよくある質問によれば、お試し期間中はサーバー付属のメールアドレスが使えず、突発的な大量アクセスやメールの大量送信には本契約より厳しい制限がかかり、電話サポートも使えない。1週間程度で終わるプロモーション用のサイトや、お試し期間の「乗り継ぎ」サイトなど、本契約の予定がないとみなせるサイトは予告なく削除する場合があるとも書く。2007年のサービス開始時のお試しは15日間だった。
- **V1とV2は、名前が同じ別のサーバー**。トップページは違いを表にまとめ、V1を「プラン変更不可」、V2を「上位プランへの変更可能」とし、無料ドメインの特典をV2だけの対象とする。よくある質問によれば、V2のプラン変更はアップグレードだけで「差額 × 残日数」を課金し、V1は別のプランへの変更を行わない。独自IPアドレス、PostgreSQL、パスワード認証のSSH、.user.ini、VALUE-IPはV1でしか使えず、V2のSSHは公開鍵認証だけだ。V1のデータは、LiteSpeedが.htaccessなどのApacheの設定ファイルを読めるため、V2でもそのまま使えるとする。どちらもアダルトサイトの運営はできず、よくある質問は、アダルト利用が可能なサーバーの例に[カラフルボックス](/ja/articles/colorfulbox)の名前を挙げる。
- **契約はバリュードメインで行い、数字はページごとに確かめる**。アカウントの購入のマニュアルによれば、サーバーの購入はバリュードメインにログインして行い、選べる契約月数はV1が1・3・6・12ヶ月、V2が1・12・24・36ヶ月とされる。料金ページはV1にも24ヶ月と36ヶ月の料金を載せていて、両者の書き方は一致しない。CORE-Xの月間アクセス数の目安も、トップページは312,500PV、co.jpのキャンペーンページは250,000PVと書く。利用規約の第7条は支払い方法を「クレジットカード決済／銀行振込／郵便振替／WebMoneyのみ」とする一方、特定商取引法に関する表記はYahoo!ウォレット決済とコンビニ決済も挙げる。よくある質問によれば、入金だけでは購入も延長も行われず、購入可能金額に反映されたあとで購入や延長の手続きが要る。
- **WordPressは申し込みと同時に入る**。トップページは、ドメインを同時に申し込めば独自ドメインのWordPressサイトを最短1分30秒で設置できると書く。V2のマニュアルによれば、コントロールパネルのアプリインストール（Installatron）からWordPressなどを入れられる。バリュードメインの「WordPress移行サービス」は、他社のサーバーからデータベース、メディア、プラグイン、テーマを自動で移す無料のツールで、データサイズの制限はないが約100GBを超えるサイトは失敗することがあり、マルチサイトとWordPress.comからは移せない。よくある質問によれば、不正ログインや改ざんを防ぐため、WordPressの管理画面とログインページへの海外からのアクセスを制限している。トップページは初期設定代行の「おまかせスタート」も並べるが、よくある質問によれば、Webサイトの開設代行はV2では対応しておらず、V1向けの案内だ。
- **バックアップは無料、ただし保証はしない**。バックアップのページによれば、申し込みなしで毎日1回バックアップを取り、15世代（15日分、CORE-Xは7世代）を保管し、コントロールパネルから申し込めば約5〜10分で指定のディレクトリに戻る。V1のデータベースは利用領域にダンプファイルとして保存され、V2はマニュアルによれば、JetBackupの画面から日時を選んで戻す。同じページは「バックアップデータの完全性、正確性、有用性等を保証するものではありません。」と書き、利用者自身のバックアップも求める。V1は新規の申し込み時に東日本と西日本のリージョンを選べるが、機能一覧と仕様のページでリージョンの項目があるのはV1だけだ。お知らせ一覧の見出しには、2018年1月の「自動バックアップ&復元サービス」の提供開始、2021年9月のV1の「有料バックアップ開始」、2023年3月の「バックアップ無料標準化」が並ぶ。
- **払った料金は原則として戻らない**。利用規約の第6条は「契約後は、理由の如何にかかわらず、受領料金の返金はいたしません。」と定め、第9条は解約時に残りの契約期間分を返金しないとする。一方、バリュードメインの特定商取引法に関する表記は、クレジットカード決済と銀行振込の申し込みの解約を申し込み後10日以内に限って受け付けるとし、解約と返金に応じるかどうかは会社の判断で決めると書く。よくある質問によれば、契約を延長しなければ有効期限の翌日に自動で解約され、ファイルは1〜7日程度ののちに削除される。期限切れから30日以内なら復活できるが、データは保証しないとする。

## 技術構成

::techstack

:::fact
サーバー仕様のページ（2026-10-13確認）によれば、V2はCPUが最大64コア、メモリーが最大512GB〜1TB、ストレージがNVMe SSDのRAID10、V1はCPUが最大64コア、メモリーが最大1TB、ストレージがピュアSSDのRAIDで、どちらもサーバーは自社管理・国内設置、各サーバーは10Gbpsでバックボーンにつながる。Webサーバーは、V2がLiteSpeed、V1がApacheだ。PHPは、V2が7.4とLiteSpeed PHPで5.3から8.5まで、V1が7.4とFastCGI、OPcache、APCuで5.6から8.5まで選べ、データベースはMariaDB 10.6系（V1はPostgreSQL 14も）、メーリングリストはV2がMajordomo、V1がMailmanだ。機能一覧によれば、無料SSLはLet's Encryptで、Web Application FirewallとIPS/IDSはV2の3プランに付き、V1の4プランのWeb Application Firewallは「未導入」とされる（トップページのよくある質問は、無料SSLとWAFを標準提供すると書く）。よくある質問は、V2の負荷制限を、ディスク速度が毎秒200MB・400MB・800MB、1秒あたりのIO処理数が2,048・4,096・8,192、Webサーバーへの同時接続数が30・60・200、アカウント全体のプロセス数が200・400・800（CORE-X・Y・Zの順）とし、サーバー全体の負荷が最大処理能力の90%を超えると、負荷の上位のアカウントを制限する場合があると書く。同じページは、V2の絶対パスを /home/アカウント名、公開ディレクトリを /domains/ドメイン名/public_html/、新しく作ったメールアカウントの保存先を /imap/ドメイン名/アカウント名/Maildir、PHP 8.3のパスを /opt/alt/php83/usr/bin/php と示し、private_htmlはpublic_htmlへのシンボリックリンクだとする。DirectAdminの公式FAQは、ドメインの公開ディレクトリを /home/user/domains/domain.com/public_html、メールの保存先を /home/user/imap/domain.com/email/Maildir/ とし、CloudLinuxの公式ドキュメントは、PHP Selectorで使うalt-phpの実行ファイルを /opt/alt/php72/usr/bin/php のようなパスで示す。
:::

:::fact
当サイトの実観測（2026-10-13）では、coreserver.jp のネームサーバーは gabriel.ns.cloudflare.com と vera.ns.cloudflare.com で、www、cp（コントロールパネル）、help（マニュアル）、apidoc（APIドキュメント）の各ホストは、HTTP/2で server: cloudflare と末尾がNRTの cf-ray を返し、www と cp と help は x-turbo-charged-by: LiteSpeed も返した。cpのログイン画面は fuel_csrf_token と fuelfid という名前のクッキーを設定し、FuelPHPの公式ドキュメントは、ファイルドライバーのセッションのクッキー名の既定値を「fuelfid」とする。helpは /wp-json/ を指すLinkヘッダーを返した。api.coreserver.jp はCloudflareのヘッダーを返さずに server: LiteSpeed を返し、そのIPアドレスはWHOISでGMO DigiRock, Inc.のCOREVPSという名前のブロックに、よくある質問がサーバー名の例に挙げる s1.coreserver.jp（server: Apache）のアドレスはDigiRockの名前で登録されたブロックに属していた。お知らせ一覧によればAPIは2017年12月25日に始まり、APIドキュメント（題名「Xrea Coreserver API Document」、当サイトの実観測でLast-Modifiedは2018年7月30日）は、CORESERVERのアクセスURLを https://api.coreserver.jp/ とし、パラメータを「POSTのKey,Value形式」で送り、各エンドポイントへのアクセスを「１秒間に１アクセスまで」とする。サイドバーには13のカテゴリーに58の項目が並び、WordPressのインストール、データベースのダンプと復元、メールアドレス、Cron、サーバー間コピー、WordPressの海外ログイン拒否の設定などを扱う（当サイトの集計）。機能一覧はAPIをV1の4プランの基本機能に載せ、V2の表には載せていない。契約の側は、バリュードメインAPIのサーバー編が /coreservers に、サーバーの構築、有効期限の延長、自動更新、リソースの変更など11の操作を並べる（当サイトの集計）。One MCPのページ（最終更新2026年10月8日）は、AIとの対話で動かせるサーバー操作として、Oneレンタルサーバーの作成・管理、ファイル管理、バックアップなどを挙げ、コアサーバーを操作の対象には挙げていない。AIを使う機能としては、トップページがAI記事作成ツール「Value AI Writer」を「毎月1回無料」の特典に並べ、その製品ページは、本文の生成にGPT-4o・4.1、Claude 4.0、Gemini 2.5 Proを選べるとし、無料のフリープランを毎月1記事とする。同じページは、コアサーバーV2と一緒に申し込むと有料プランが「最大40%割引」になるとうたい、表では約20〜43%の割引を示す。
:::

:::guess
V2の部品に並ぶLiteSpeed、Imunify360、JetBackup、Installatronは、海外のホスティング会社が広く使う市販のソフトウェアだ。/home/アカウント名 の下に /domains/ドメイン名/public_html と /imap/ドメイン名/アカウント名/Maildir を置く構成は、DirectAdminの公式FAQが示すパスと一致し、同じFAQが書くcPanelのメールの保存先とは違うことから、V2の基盤にはDirectAdminが使われているとみられる。/opt/alt/ で始まるPHPやRubyのパスと「クラウド型リソース制御」という説明からは、OSにCloudLinuxを使っているとみられる。当サイトが解剖した[カラフルボックス](/ja/articles/colorfulbox)がcPanelを表に出すのに対し、コアサーバーはFuelPHPのクッキー名を持つ自社のコントロールパネルを前面に置き、その奥でこれらの部品を動かしていると推測される。一方、2017年に始まったAPIは、XREAと共有するドキュメントで説明され、機能一覧ではV1にだけ載る。V2の設定の操作がまだこのAPIの外にあるとも読めるし、機能一覧の表に載せていないだけとも読める。同じ会社がAIエージェント向けのOne MCPを新しいOneレンタルサーバーから始めたことは、エージェント向けの投資を新しい基盤に寄せている表れとみられる。
:::

## 36ヶ月で割った値札 — 7月の値上げと、姉妹サービス・エックスサーバーとの比較

:::fact
2026年5月20日のお知らせは、「円安・電気料金の高止まりの継続に加え、AI需要拡大による世界的なサーバーコストの上昇により、現在のご提供価格の維持が困難な状況となりました。」として、7月1日以降の契約手続きからV1とV2の全7プランの料金を上げ、支払い済みの利用者には次回の更新から新価格を適用すると告げた。お知らせの表は税の扱いを書いていないが、改定後の金額は料金ページの税込の価格と一致する。V2の月額は、CORE-Xの1ヶ月契約が690円から830円に、36ヶ月契約が390円から430円に、CORE-Zの1ヶ月契約が2,490円から2,990円に、36ヶ月契約が1,990円から2,190円になった。上げ幅は、V2の3プランとも1ヶ月契約で約20%、12ヶ月と24ヶ月で約15%、36ヶ月で約10%、V1の4プランは1・3・6ヶ月で約20〜21%、12・24・36ヶ月で約15〜16%だ（当サイトの計算）。料金ページは新規と更新で別の価格を示しておらず、co.jpのキャンペーンページは、対象を新規の契約に限り、更新を対象外とする。同じ会社のOneレンタルサーバーのページは、ベーシック（NVMe SSD 800GB、8コアのvCPUと10GBのメモリーをリソース保証）を36ヶ月契約で月680円、12ヶ月契約で1,280円、初期費用0円、無料お試し15日間とし、税込か税別かは書いていない。エックスサーバーの料金ページ（税込）は、スタンダード（NVMe 500GB）の通常の月額を36ヶ月契約で990円、12ヶ月契約で1,100円とし、2026年10月5日17時から11月4日17時までのキャンペーンで693円と990円にしている。初期費用は0円、無料お試しは10日間で、仕様一覧は、sv13001以降のサーバーのスタンダードに仮想6コアとメモリー8GBを保証する。
:::

| プラン（月額） | 容量 | CPU・メモリー（各社の表記） | 初期費用 | 12ヶ月契約 | 36ヶ月契約 | 36ヶ月分の支払額（当サイトの計算） | 無料お試し |
| --- | --- | --- | --- | --- | --- | --- | --- |
| コアサーバー CORE-X | NVMe SSD 500GB | CPU割当300%・メモリ割当6GB | 1,650円（ドメインの同時申込で無料） | 610円 | 430円 | 15,480円（初期費用込みで17,130円） | 30日 |
| コアサーバー CORE-Y | NVMe SSD 700GB | CPU割当600%・メモリ割当9GB | 1,650円（同上） | 990円 | 760円 | 27,360円（初期費用込みで29,010円） | 30日 |
| Oneレンタルサーバー ベーシック | NVMe SSD 800GB | 8コアvCPU・10GB（リソース保証） | 0円 | 1,280円 | 680円 | 24,480円 | 15日 |
| エックスサーバー スタンダード | NVMe 500GB | 仮想6コア・8GB（sv13001以降の保証） | 0円 | 1,100円（キャンペーン990円） | 990円（キャンペーン693円） | 35,640円（キャンペーン24,948円） | 10日 |

いずれも2026-10-13確認。コアサーバーとエックスサーバーは税込、Oneレンタルサーバーのページは税の扱いを書いていない。エックスサーバーのキャンペーン価格は2026年11月4日17時まで。36ヶ月分の支払額は月額×36に、表示した場合は初期費用を足した値（当サイトの計算）。

:::guess
36ヶ月の値札を並べると、最も安いのはCORE-Xの430円だ。CPUとメモリーの表記が近いCORE-Yとエックスサーバーのスタンダードでは、3年分の支払額は、通常価格どうしならCORE-Yが8,280円安く（初期費用を含めても6,630円安い）、エックスサーバーのキャンペーン価格と比べるとCORE-Yが2,412円高い（初期費用を含めると4,062円高い）（当サイトの計算）。コアサーバーの値札は新規と更新で変わらないため、キャンペーンの時期を外れた比較では長期契約の安さが残り、他社のキャンペーン中はその差が縮むか逆転するとみられる。同じ会社のOneレンタルサーバーのベーシックは、表記の上ではCORE-Yより容量もCPUもメモリーも大きく、3年分の支払額は2,880円安い（当サイトの計算）。税の表記がないため仮に税別として10%を足しても26,928円で、CORE-Yを下回る（当サイトの計算）。新しい基盤の主力をOneレンタルサーバーに置き、コアサーバーは30日のお試しやV1から続く機能で選ばれる位置にあるとも読めるが、無料お試しの日数や使える機能が違うため、単純な置き換えとはいえない。7月の改定で、V2の1ヶ月契約の上げ幅が36ヶ月契約の約2倍になったのは、コストの上昇分を短い契約に多く負わせ、長期の前払いへ誘う設計と推測される。別の読み方として、毎月の請求や更新の手間がかかる短い契約の事務の費用を映したとも考えられる。
:::

## ビジネスモデル

コアサーバーの稼ぎ方は、1〜36ヶ月分を前払いで受け取るサーバーの利用料を柱に、V2の初期費用、バリュードメインで売るドメインや有料のSSL証明書、Value AI Writerの有料プランが重なる形とみられる。客を集める役は、A8.netのアフィリエイト、新規の契約に向けたキャンペーン、30日間の無料お試しが担う。

:::fact
コアサーバーのアフィリエイトのページ（2026-10-13確認）は、ASPのA8.netに登録して広告リンクを貼り、成約に応じてA8.netから報酬が支払われる仕組みを説明し、報酬（税込）の表にV1の4プランだけを並べる。新規申し込みの報酬は、CORE-MINIが1ヶ月の110円から12ヶ月の770円、CORE-Cが1,100円から7,700円だ。バリュードメインのアフィリエイトのページは、同じV1の報酬を税別で示し（CORE-MINIは100円から700円で、V1の16の額はいずれも税込の額のちょうど1.1分の1、当サイトの計算）、V2も載せる。V2の新規契約の報酬（税別）は、CORE-Xが1ヶ月635円、3ヶ月2,000円、6ヶ月3,500円、12ヶ月5,000円、CORE-Yが908円から7,000円、CORE-Zが2,272円から10,000円だ。どちらの表にも24ヶ月と36ヶ月の行はなく、バリュードメインの表は、V2の料金ページにない3ヶ月と6ヶ月の行をV2にも並べる。co.jpのキャンペーンページによれば、2026年9月1日0時から10月31日23時59分までにco.jpドメインを取得してV2を12ヶ月で契約し、2026年10月1日から2027年1月31日までに法人名、法人番号、法人住所を連絡すると、V2の初期費用と1年分の料金をポイントで返し、そのポイントは次年度の更新に使える。24ヶ月と36ヶ月の契約は対象外で、自動更新の設定を適用していることも条件だ。お知らせ一覧に並ぶ2026年の8件の告知のうち5件がキャンペーンの告知で、20%、30%、24%の割引や、V2の料金1年間無料をうたう（当サイトの集計）。ドメイン実質永久無料のページは、サーバーを解約してもドメインはほかのドメインと変わらず使え、再び永久無料にするには新たなV2の契約が要ると書き、よくある質問は、V2の無料対象ドメインをV1、バリューサーバー、XREAでも使えるとする。
:::

:::guess
12ヶ月契約で比べると、V2の報酬はCORE-Xが5,000円、CORE-Zが10,000円で、税別の12ヶ月分の料金（CORE-Xは約6,655円、CORE-Zは約27,327円）の約75%と約37%にあたり、V1は約15〜21%にとどまる（当サイトの計算）。1年目の売上の多くを紹介者に渡して更新で回収する設計で、販売の重心をV2に置いているとみられる。新規と更新で同じ値札を使い、割引は新規の契約だけに掛ける形は、更新時に値段が跳ね上がる不満を避けながら、紹介とキャンペーンで新しい契約を取りに行く組み立てと読める。ドメイン永久無料は、ドメインの更新料をV2の契約に置き換えてサーバーを長くつなぐ仕掛けとして働く一方、解約してもドメインは手元に残るため、乗り換えの壁を高くしすぎない線引きとも読める。同じ会社がXREA、バリューサーバー、Oneレンタルサーバーも売る中で、コアサーバーは長期の前払いと既存の契約者を受け止める役を担っているとみられるが、各サービスの売上の内訳は公開されておらず、確かめる材料はない。
:::

2007年にXREAの上位互換の有料サービスとして始まったコアサーバーは、V1の4プランを残したまま2021年にLiteSpeedのV2を重ね、2026年7月には短い契約の上げ幅を大きくする値上げを行った。30日のカード不要のお試し、新規にも更新にも同じ値札、V2に付くドメイン永久無料という組み合わせの上で、AIエージェント向けの入口は新しいOneレンタルサーバーから開かれた。2017年のAPIと二つの世代を抱えるこの看板が、どの契約者を引き受け、どこまで新しい入口を広げていくのかが問われている。
