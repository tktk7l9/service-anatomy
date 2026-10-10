---
service: "mixhost"
title: "2年目からの値段を下げたレンタルサーバー — 更新料金を最大で約6割引き下げ、LiteSpeedとcPanelをクラウドに載せ、紹介をA8.netとafbに任せるmixhostを解剖する"
description: "mixhostは、2016年4月に大阪で設立されたアズポケット株式会社が運営するレンタルサーバーだ。WebサーバーにLiteSpeed、管理画面にcPanel、OSにCloudLinuxを使い、複数のサーバーで多重化したクラウドの上で動かす。2025年4月には更新料金を最大で約6割下げ、月額495円（税込・36か月契約の初回）からのライトプランを足した。アダルトサイトの運営や再販を全プランで認め、紹介はA8.netとafbのアフィリエイトに任せる。料金と仕様のページ、公正使用ポリシー、SLA、返金保証、ニュース、会社概要、当サイトの実観測から、初回の割引と更新料金の二段の値付け、「無制限」を支える使用量の目安、Imunify360やJetpackを足していく守り、紹介と友達招待で客を集める仕組みまでを解剖する。"
lead: "mixhostの料金表には、契約期間ごとに2つの値段が並ぶ。初回だけの割引価格と、その下に小さく書かれた「更新」の価格だ。2025年4月、mixhostはこの下の段を大きく下げた。ビジネスプランの36か月契約なら、更新時の月額は5,478円から2,178円になった。初回の割引で客を集めるのが当たり前の国内のレンタルサーバーで、2年目以降の値段を下げた小さな会社が、どんな技術とお金の流れで動いているのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, wordpress, small-business, php, litespeed, cpanel]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://mixhost.jp/"
# Affiliate link placeholder: mixhost distributes its ads only through two affiliate networks,
# A8.net and afb (https://mixhost.jp/affiliate-program/, checked 2026-10-10: register with either
# network, search for mixhost and apply). Both are ASPs whose ad code must be used as provided:
# copy the link to affiliate.url, the 1x1 impression image (if any) to affiliate.impressionUrl,
# and the text ad verbatim to affiliate.label. Never invent the label — ask the owner for the
# material's exact text. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<a8-or-afb-link-for-mixhost>"
#   program: "mixhost Affiliate Program (A8.net / afb)"
#   impressionUrl: "https://<impression-pixel>"
#   label: "<verbatim text of the ad material>"
vendor: "アズポケット株式会社"
origin: "JP"
heroTheme: "mixhost"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 3.0 }
techStack:
  - layer: "Webサーバー"
    name: "LiteSpeed Web Server (HTTP/3)"
    confidence: confirmed
    evidence: "公式の料金・機能の比較表（2026-10-10確認）が、全プランで「LiteSpeed Webサーバー」と「HTTP/3」に〇を付ける。会社概要は公認パートナーとしてLiteSpeed Technologies Inc.を挙げる"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "OS"
    name: "CloudLinux"
    confidence: confirmed
    evidence: "同じ比較表が、全プランで「CloudLinux」に〇を付ける。公正使用ポリシーは、CPU・メモリ・ストレージの使用状況を監視して制限する仕組みを入れ、公平な配分を超えたアカウントの使用を制限すると書く"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "コントロールパネル"
    name: "cPanel + WP Toolkit"
    confidence: confirmed
    evidence: "比較表が全プランで「cPanelコントロールパネル」と「WP Toolkit」に〇を付け、プレミアム以上ではステージングやAIによるスマートアップデートを含む「WP Toolkit Deluxe」が使えると書く。会社概要は公認パートナーとしてcPanel, L.L.C.を挙げる"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "データベース・言語"
    name: "MariaDB (InnoDB, phpMyAdmin) / PHP (5.6–8.5)"
    confidence: confirmed
    evidence: "比較表に、データベースの種類はMariaDB、phpMyAdminとInnoDBが使え、PHPは5.6〜8.5をドメインやサブドメインごとに切り替えられると明記。ニュース（2026-01-19）はPHP 8.5を1月26日から順次入れると告知した"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "ストレージ・冗長化"
    name: "NVMe SSD (real-time replication across storage servers)"
    confidence: confirmed
    evidence: "レンタルサーバーのページに、複数のサーバーで多重化したクラウドサーバーを使い、故障時は他のサーバーに自動で切り替わること、NVMe SSDのストレージは複数のストレージサーバーにリアルタイムで複製すること、バックアップは別のデータセンター内の複数のストレージサーバーに重複して置くことを明記"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "WordPressの高速化"
    name: "LiteSpeed Cache + RocketBooster (in-house)"
    confidence: confirmed
    evidence: "比較表が全プランで、サーバーと連携するキャッシュのプラグイン「LiteSpeed Cache」と、独自に開発したWordPressの高速化技術「RocketBooster」に〇を付ける"
    evidenceUrl: "https://mixhost.jp/hosting/web/"
  - layer: "セキュリティ"
    name: "Imunify360"
    confidence: confirmed
    evidence: "公式ニュース（2026-09-07）に、ライトプランにもセキュリティツール「Imunify360」を導入し、改ざん防止や不正アクセスの検知・ブロックを自動で行い、cPanelに「Imunify360」の項目が加わったと明記"
    evidenceUrl: "https://mixhost.jp/news/1962"
  - layer: "メールの送信制限"
    name: "MailChannels"
    confidence: confirmed
    evidence: "公正使用ポリシーに、メール送信数の上限（1日1,000通、ライトは100通）に加えて、別途MailChannelsによる送信制限が発生することがあると明記"
    evidenceUrl: "https://mixhost.jp/fair-use-policy/"
  - layer: "自社サイト・顧客管理"
    name: "WordPress / Cloudflare / WHMCS (accounts.mixhost.jp)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-10）で、mixhost.jp は server: cloudflare、x-litespeed-cache: hit、x-turbo-charged-by: LiteSpeed とWordPressのREST APIのリンクを返した。契約者のマイページ accounts.mixhost.jp はCloudflareの背後で WHMCS で始まる名前のクッキーと whmcsBaseUrl を返し、顧客管理・請求の仕組みにWHMCSを使っているとみられる"
sources:
  - label: "mixhost公式: トップページ"
    url: "https://mixhost.jp/"
    accessedAt: "2026-10-10"
  - label: "mixhost公式: レンタルサーバー（料金・機能の比較・仕様）"
    url: "https://mixhost.jp/hosting/web/"
    accessedAt: "2026-10-10"
  - label: "mixhost公式: 海外レンタルサーバー（アメリカ西海岸・サンノゼ）"
    url: "https://mixhost.jp/hosting/global/"
    accessedAt: "2026-10-10"
  - label: "mixhost公式: 公正使用ポリシー"
    url: "https://mixhost.jp/fair-use-policy/"
    accessedAt: "2026-10-10"
  - label: "mixhostヘルプ＆サポート: 品質保証制度（SLA）について"
    url: "https://help.mixhost.jp/articles/360037394031"
    accessedAt: "2026-10-10"
  - label: "mixhostヘルプ＆サポート: 30日間返金保証"
    url: "https://help.mixhost.jp/articles/360035781732"
    accessedAt: "2026-10-10"
  - label: "mixhost公式: アフィリエイトプログラム（A8.netとafb）"
    url: "https://mixhost.jp/affiliate-program/"
    accessedAt: "2026-10-10"
  - label: "mixhost公式: お友達招待プログラム"
    url: "https://mixhost.jp/refer-a-friend/"
    accessedAt: "2026-10-10"
  - label: "アズポケット株式会社: 会社概要"
    url: "https://www.azpocket.co.jp/company/"
    accessedAt: "2026-10-10"
  - label: "アズポケット株式会社: トップページ（事業内容）"
    url: "https://www.azpocket.co.jp/"
    accessedAt: "2026-10-10"
  - label: "mixhostニュース: 更新料金価格改定のお知らせ（2025-04-01）"
    url: "https://mixhost.jp/news/1736"
    accessedAt: "2026-10-10"
  - label: "mixhostニュース: 月額495円～ライトプラン登場！大幅値下げ＆サービス強化のお知らせ（2025-04-22）"
    url: "https://mixhost.jp/news/1760"
    accessedAt: "2026-10-10"
  - label: "mixhostニュース: 「PHP 8.5」導入開始のお知らせ（2026-01-19）"
    url: "https://mixhost.jp/news/1879"
    accessedAt: "2026-10-10"
  - label: "mixhostニュース: Jetpack無料特典＆有料オプション提供開始のお知らせ（2026-05-25）"
    url: "https://mixhost.jp/news/1924"
    accessedAt: "2026-10-10"
  - label: "mixhostニュース: ライトプランにおけるセキュリティ機能（Imunify360）導入のお知らせ（2026-09-07）"
    url: "https://mixhost.jp/news/1962"
    accessedAt: "2026-10-10"
  - label: "mixhostニュース: 2016年の記事一覧"
    url: "https://mixhost.jp/news/date/2016"
    accessedAt: "2026-10-10"
  - label: "A8.net（運営: 株式会社ファンコミュニケーションズ）"
    url: "https://www.a8.net/"
    accessedAt: "2026-10-10"
---

mixhostは、WordPressのブログや小さな会社のサイトを置くための国内のレンタルサーバーだ。当サイトが解剖した[エックスサーバー](/ja/articles/xserver)や[ConoHa WING](/ja/articles/conoha-wing)、[ロリポップ！](/ja/articles/lolipop)、[さくらのレンタルサーバ](/ja/articles/sakura-rental-server)が、大手のIT企業のグループや長い歴史を背景に持つのに対し、mixhostは2016年に生まれた資本金200万円の会社が運営する。管理画面には、mixhost自身が「世界シェアNo.1」と紹介するcPanelを採用し、アダルトサイトの運営や再販も全プランで認める。国内の共用サーバーのなかでは、作り方も、許す範囲も、少し違う場所に立っている。

## サービス解説

mixhostは、共用のレンタルサーバーを中心に、アダルトサイト向けのプラン、アメリカ西海岸に置く海外レンタルサーバー、1社で1台を使う専用クラウドレンタルサーバーを売る。ドメイン、サイトビルダーのSitejet、クラウドストレージのpCloud、同じ会社のVPNのMillenVPNも並ぶ。

:::fact
会社概要（2026-10-10時点）によれば、運営するアズポケット株式会社は2016年4月11日に設立され、本社は大阪市中央区南船場、資本金は200万円、事業内容はインターネットインフラ事業と電気通信事業法に基づく電気通信事業（届出電気通信事業者 E-28-03926）。主要取引先として、さくらインターネット、GMOインターネット、アカマイ・テクノロジーズ合同会社、A8.netを運営するファンコミュニケーションズなどを、公認パートナーとしてcPanel, L.L.C.、LiteSpeed Technologies Inc.、Softaculous Ltd.を挙げる。会社のトップページは、自社を2016年に創業した「アジア発のインターネットインフラスタートアップ」と紹介し、事業をmixhostとMillenVPNの2つとする。採用ページはフルリモート、フレックスタイム、副業可を掲げる。mixhostのニュースの記録は2016年に始まり、同年11月に自動バックアップと復元の機能、12月にPHP 7.1の提供を始めている。
:::

:::fact
料金・機能の比較表（2026-10-10確認・税込）によれば、共用のレンタルサーバーはライト、スタンダード、プレミアム、ビジネスの4プランで、契約期間は3・6・12・24・36か月から選び、期間分を一括で前払いする。表には初回だけの割引価格と、その後の更新価格が並ぶ。36か月契約の月額換算は、ライトが初回495円・更新748円、スタンダードが858円・1,298円、プレミアムが968円・1,518円、ビジネスが1,408円・2,178円。「一番人気」と書かれた12か月契約では、スタンダードが初回968円・更新1,518円になる。割引は初回の期間だけで、更新時から通常価格になると注記されている。推奨の月間PV数はライト10万、スタンダード20万、プレミアム30万、ビジネス60万。ファイル数の上限（inode）は10万から60万までで、ディスクはライトが100GB、ほかは「無制限」。毎日のバックアップを14日分持つのはスタンダード以上で、ライトにはない。リージョンは東京で、全プランで商用利用、再販、アダルトサイトの運営が「〇」になっている。海外レンタルサーバーはアメリカ西海岸のサンノゼにサーバーを置き、初回は月858円からだ。
:::

:::pull
初回の割引は、どの会社も競う。mixhostが2025年に動かしたのは、その下の段、2年目からの値段だった。
:::

::scorecard

## UX分析

mixhostの体験は、海外のホスティングで標準的な道具を、日本語のサポートと手厚い移行の手伝いで包んだものだ。一方で、「無制限」の中身や返金の手続きは、料金表の1行目だけでは見えない。

- **引っ越しを入口にする**。レンタルサーバーのページによれば、申し込み画面にWordPressのログインURL、ID、パスワードの3つを入れるだけでサイトの移転が始まる「WordPressらくらく引っ越し」が無料で使え、作業をまるごと任せるWP移行代行も年に1サイトまで無料（2023年4月4日以降の申し込みが対象）。新しく作る場合は、テーマとプラグインを入れ済みの「簡単テンプレート」を選べる。乗り換えの手間を減らすことが、客を集める最初の手段になっている。
- **管理画面は自社製ではなくcPanel**。当サイトが解剖した[ConoHa WING](/ja/articles/conoha-wing)が独自開発の管理画面を使うのに対し、mixhostは全プランでcPanelを使い、WordPressの管理にはWP Toolkitを載せる。プレミアム以上では、テストサイトを作って本番に反映する機能や、テストサイトで更新を試してAIが問題の有無を確かめる「スマートアップデート」が使える。cPanelの一般的な解説や手順書を参考にしやすい一方、初めてサーバーを借りる人には項目が多く見えるかもしれない。
- **「無制限」には目安がある**。公正使用ポリシーによれば、利用者の99%のストレージ使用量の平均は5GB、データ転送量の平均は7GBで、これを大きく超える使い方はファイル置き場やダウンロードサイトがほとんどだとする。そのうえで許容の目安を、ストレージはライト50GB・スタンダード以上100GB、転送量は月50GBから800GBまでとし、データベースは1GB以下に保つよう求める。料金表がライトのディスクを100GBとする点とは数字が揃っておらず、大きなファイルを置く予定があるなら、契約前に確かめておきたい。
- **安いライトは、守りも絞る**。ライトプランにはバックアップがなく、メールの送信は1時間50通・1日100通まで。2025年4月の告知は、スタンダード以上からライトへの変更はできず、ライトを使うには新しく契約する必要があると書く。入口の値段を下げる代わりに、何を削ったかを把握して選ぶ必要がある。
- **返金は、自分から連絡して初めて動く**。返金保証のヘルプによれば、共用・アダルト・海外のレンタルサーバーは契約から30日以内なら返金の対象だが、解約の手続きで「直ちに解約する」を選び、そのうえでサポートに連絡しないと返金は自動では行われない。ドメインや専用クラウドは対象外で、銀行振込の場合は2,200円の返金手数料がかかる。

## 技術構成

::techstack

:::fact
料金・機能の比較表（2026-10-10確認）は、全プランの共通の仕様として、LiteSpeed Webサーバー、HTTP/3、CloudLinux、cPanel、MariaDB、PHP 5.6〜8.5、SSHとGitでのアクセス、無料のSSL証明書、DDoS攻撃からの保護、AIを載せたセキュリティ、マルウェアのスキャンと駆除を並べる。ビジネスプランだけは「2倍のリソースが利用できる超高速サーバー」に置かれる。レンタルサーバーのページは、一般的なレンタルサーバーが物理サーバーを使うのに対し、mixhostは複数のサーバーで多重化したクラウドサーバーを使い、1台が故障しても自動で他のサーバーに切り替わると説明する。NVMe SSDのストレージは複数のストレージサーバーにリアルタイムで複製し、バックアップは別のデータセンターにある、イレブンナイン（99.999999999%）の耐久性を持つストレージサーバーに置く。品質保証制度（SLA）のヘルプによれば、月間稼働率が99.99%を下回ると月額費用の10%、99.50%を下回ると30%を返し、返金は預り金かポイントとして次の更新に充てる。
:::

:::fact
公式ニュースによれば、mixhostは2026年1月26日からPHP 8.5を順次入れ、5月25日にはAutomatticのプラグイン「Jetpack」の無料特典（1GBのバックアップ、月500回までのAkismet、Jetpack Protect）と有料オプションの再販を始めた。ただし同じお知らせは、提供元の規約により、アダルトコンテンツを扱うサイトではJetpackの特典を使えないと書く。9月7日には、ライトプランにもセキュリティツールのImunify360を導入し、cPanelに項目を加えた。公正使用ポリシーは、メールの送信数の上限に加えて、MailChannelsによる送信制限が別にかかる場合があるとする。当サイトの実観測（2026-10-10）では、mixhost.jp と運営会社のサイトはCloudflareの背後でLiteSpeedのキャッシュのヘッダーとWordPressのREST APIのリンクを返し、どちらもWordPressで動いているとみられる。契約者のマイページはWHMCSの名前を含むクッキーを返した。
:::

:::guess
cPanel、LiteSpeed、CloudLinux、Imunify360、WHMCSという組み合わせは、海外のホスティング会社で広く使われる市販の部品の構成とみられる。管理画面や課金の仕組みを自社で作らずに既製品のライセンスで組み立てることで、少人数の会社でも機能の幅を大手に近づけられる。その代わり、ライセンスの費用は利用者が増えるほど積み上がり、部品の値上げが利益率に響きやすい構造と推測される。会社概要の主要取引先には、データセンターやクラウド、CDNを手がけるさくらインターネット、GMOインターネット、アカマイ・テクノロジーズが並ぶが、どの会社が何を担っているかは公開されていない。
:::

## 2025年4月の値下げ

:::fact
2025年4月1日のお知らせによれば、mixhostは4月22日から、利用中の客の更新価格を下げた。理由は、調達コストと運用コストの最適化を図った結果と説明されている。36か月契約の月額（税込）は、スタンダードが2,178円から1,298円、プレミアムが3,278円から1,518円、ビジネスが5,478円から2,178円になった。12か月契約のビジネスは5,478円から2,618円、3か月契約でも3,168円になる。改定後の価格は4月8日以降に発行された請求書から適用された。同じ4月22日のお知らせは、月額495円（税込）からのライトプランの新設、新規と更新の両方の値下げ、6か月と24か月の契約期間の追加を告げ、推奨の月間PV数をスタンダードで2万5,000から20万、プレミアムで10万から30万、ビジネスで40万から60万へ引き上げ、スタンダードのinodeの上限を5万から20万に増やした。年1回のWordPressの無料移転代行、無料のサブドメイン（mixh.jp）の再開、pCloudの1年間無料のクーポンの対象の拡大も並ぶ。
:::

| 36か月契約の更新価格（税込・月額換算） | 改定前 | 2025年4月22日から | 下げ幅 |
| --- | --- | --- | --- |
| スタンダード | 2,178円 | 1,298円 | 約40% |
| プレミアム | 3,278円 | 1,518円 | 約54% |
| ビジネス | 5,478円 | 2,178円 | 約60% |

:::guess
国内のレンタルサーバーの料金表は、初回の割引率やキャッシュバックで並べて比べられやすい。mixhostが初回の価格より先に更新価格を大きく下げたのは、2年目以降も使い続ける客と、その客に「更新しても高くならない」と勧めるアフィリエイトの書き手を意識したためとみられる。更新価格の下げ幅が上位のプランほど大きいことからは、アクセスが増えて上位に移った客ほど他社へ流れやすかった、という事情も推測できる。一方で、初回の割引も同時に続けているため、料金表が初回と更新の二段構えで読みにくいことは変わっていない。
:::

## ビジネスモデル

稼ぎ方は、契約期間分を前払いで受け取るレンタルサーバーの料金が中心で、WordPressの移行や高速化などの作業の代行、Jetpackの有料オプションのような他社製品の再販が上に乗る。客を集める役は、アフィリエイトと友達招待に任せている。

:::fact
アフィリエイトのページ（2026-10-10確認）によれば、mixhostはアフィリエイトサービスプロバイダー（ASP）のA8.netとafbで広告を配信しており、アフィリエイトを始めるには、どちらかに登録してmixhostを探し、提携を申請する。お友達招待のページによれば、契約者が専用の招待リンクとクーポンコードを知らせ、相手がそれで申し込むと、相手は1,000円の割引を受け、30日間の利用が確認されると紹介した側に1,000円がクレジットとして入る。招待の回数に上限はない。比較表は、プレミアム以上にZoomでのWordPressの相談（月2回まで）や設定の代行、優先のサポートを付ける。会社の製品には、レンタルサーバーのほかにVPNのMillenVPNがあり、pCloudの有料プランの契約者もpCloudのクーポンの対象に含める。
:::

:::guess
資本金200万円の会社が、大手のグループに属する他社と同じ市場で戦えているのは、広告費を先に払うのではなく、成約したときだけ払うアフィリエイトに集客を寄せているからとみられる。紹介する書き手にとっては、成約の単価に加えて、紹介した読者が更新でがっかりしないことが信用に関わる。更新価格の値下げと、引っ越しの無料の代行は、この紹介の流れを太く保つための投資とも読める。アダルトサイトの運営を認める方針は、大手が扱いにくい需要を拾う差別化と推測されるが、同じ方針がJetpackのような提携先の規約とぶつかる場面もある。
:::

2016年に大阪で生まれたmixhostは、LiteSpeedとcPanelという世界の標準の部品をクラウドに載せ、移行の手伝いと日本語のサポートで包んで売ってきた。2025年には初回の割引の競争から一歩引き、更新料金という2年目からの値段を下げた。客を広告ではなく紹介で集める小さな会社にとって、長く使ってもらえることこそが、いちばんの集客になるという判断だ。
