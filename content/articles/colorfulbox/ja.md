---
service: "カラフルボックス"
title: "バックアップを別の地域に置く資本金300万円のレンタルサーバー — LiteSpeedとcPanelを東日本・西日本の2拠点で動かし、アダルトを別サーバーで受け、8年目に法人向けを足したカラフルボックスを解剖する"
description: "カラフルボックス（ColorfulBox）は、2018年1月に大阪で設立された株式会社カラフルラボが同年7月に始めたレンタルサーバーだ。WebサーバーにLiteSpeed、管理画面にcPanel、OSにCloudLinux、セキュリティにImunify360を使い、サーバーを東日本と西日本のどちらに置くかを選べて、14日分の自動バックアップを契約したのとは別の地域に保存する。月額528円（税込）からのBOX1〜BOX8の8プランに30日の無料お試しが付き、アダルトサイトは別サーバー・別IPで受ける。2026年9月時点の累計ユーザーは24,000超で、同年10月1日には稼働率99.99%のSLAと専用IPを付けた法人向けの「カラフルビジネス」を始めた。紹介はA8.netのアフィリエイトに任せ、公式ページが報酬の表を公開する。料金、特徴、仕様、機能一覧、CDN、無料のtadaサーバー、会社概要、お知らせ、特定商取引法の表記、当サイトの実観測から、初回半額と更新価格の二段の値付け、cPanelとLiteSpeedという市販の部品の構成、地域で分けるバックアップの設計、無料から法人までの階段の作り方までを解剖する。"
lead: "カラフルボックスの特徴のページには、東日本と西日本の地図が並ぶ。契約時にサーバーを置く地域を選ぶと、14日分の自動バックアップは、もう一方の地域に保存される。資本金300万円、設立8年の大阪の会社が、共用レンタルサーバーで「災害に備える」という売り文句を、追加料金なしの標準機能として掲げた。当サイトが解剖したmixhostと同じLiteSpeedとcPanelを使い、同じくアダルトサイトを受け入れ、同じくA8.netで紹介を集めるこの会社が、何を他社と変え、どこで稼いでいるのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, wordpress, small-business, php, litespeed, cpanel, backup]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://www.colorfulbox.jp/"
# Affiliate link placeholder: ColorfulBox runs its affiliate program through A8.net
# (https://www.colorfulbox.jp/partner/affiliate/, checked 2026-10-10; the page lists the rewards per plan
# and contract length, e.g. BOX2 on a 36-month contract pays 8,000 yen before tax, and 1 yen for a 30-day
# trial sign-up). A8.net is an ASP whose ad code must be used as provided: copy the link to affiliate.url,
# the 1x1 impression image to affiliate.impressionUrl, and the text ad verbatim to affiliate.label. Never
# invent the label — ask the owner for the material's exact text. Keep every field identical in ja.md and
# en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<colorfulbox-material>"
#   program: "ColorfulBox Affiliate Program (A8.net)"
#   impressionUrl: "https://www18.a8.net/0.gif?a8mat=<colorfulbox-material>"
#   label: "<verbatim text of the ad material>"
vendor: "株式会社カラフルラボ"
origin: "JP"
heroTheme: "colorfulbox"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 3.0 }
techStack:
  - layer: "Webサーバー"
    name: "LiteSpeed Web Server (6.x, HTTP/3, QUIC)"
    confidence: confirmed
    evidence: "公式の仕様のページ（2026-10-10確認）に、Webサーバーのソフトウェアは「LiteSpeed 6.x.x」、SSHの項目にQUICの対応と明記。特徴のページはHTTP/3への対応とLiteSpeed独自のキャッシュ「LiteSpeed Cache」を全プランで標準搭載すると書く"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "OS"
    name: "CloudLinux"
    confidence: confirmed
    evidence: "仕様のページのシステム構成に、OSはLinux（CloudLinux）、サーバーの種類は共用サーバー、CPUはIntel Xeon / AMD EPYCで最大64コア、メモリは最大512GB、ストレージは高速ピュアSSDのRAID構成と明記"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "コントロールパネル"
    name: "cPanel"
    confidence: confirmed
    evidence: "公式の「cPanelについて」のページ（2026-10-10確認）に、世界で一番使われているコントロールパネルとしてcPanelを採用し、バックアップと復元、メーリングリスト、FTPアカウント、サブドメイン、SSHアクセス、Cronジョブなどを扱うと明記。機能一覧も全プランのコントロールパネルをcPanelとする"
    evidenceUrl: "https://www.colorfulbox.jp/feature/cpanel/"
  - layer: "セキュリティ"
    name: "Imunify360"
    confidence: confirmed
    evidence: "特徴のページ（2026-10-10確認）に、次世代セキュリティ「Imunify360」を導入してWAF / IPS / IDSに対応し、ファイアウォール、マルウェアと改ざんの検知、改ざんの事前防止を標準で使えると明記"
    evidenceUrl: "https://www.colorfulbox.jp/feature/"
  - layer: "データベース・言語"
    name: "MariaDB (10.6) / PHP (5.3–8.3, LSAPI) / Perl / Ruby / Python"
    confidence: confirmed
    evidence: "仕様のページに、データベースはMariaDB 10.6.x（InnoDB / MyISAM）、PHPは5.3系から8.3系まででLSAPIの動作モード、Perlは5.16と5.26、Rubyは1.8から3.1、Pythonは2.7と3.3から3.11まで、と明記"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "メール・FTP"
    name: "Exim / Dovecot / Pure-FTPd / Roundcube"
    confidence: confirmed
    evidence: "仕様のページに、メールの送信はexim4、受信はDovecot、FTPはPure-FTPd、WebメールはRoundcubeと明記。送信ポートは587と465、受信はPOP3の110/995とIMAP4の143/993"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "SSL"
    name: "Let's Encrypt"
    confidence: confirmed
    evidence: "仕様のページに、独自SSLの認証局はLet's Encrypt、対応プロトコルはTLS 1.3と1.2と明記。特徴のページは無料のSSL証明書（Let's Encrypt / COMODO）を標準で提供すると書く"
    evidenceUrl: "https://www.colorfulbox.jp/spec/"
  - layer: "CDN"
    name: "ColorfulBox CDN"
    confidence: confirmed
    evidence: "公式のCDNのページ（2026-10-10確認）に、100か国以上・285を超える都市に広がるバックボーンを持つCDNで、WAF、DDoSプロテクション、画像の最適化、レート制限を備え、月440円からサーバーと別にも契約できると明記。会社概要の沿革は2023年5月に「ColorfulBox CDN」の提供を始めたとする"
    evidenceUrl: "https://www.colorfulbox.jp/cdn/"
  - layer: "サイトビルダー"
    name: "Sitejet Builder"
    confidence: confirmed
    evidence: "公式のSitejetのページ（2026-10-10確認）に、質問に答えるだけでAIがデザイン・文章・構成を作るノーコードのサイトビルダーを、契約者は追加費用なしで使えると明記。会社概要の沿革は2025年6月に「Sitejet Builder」の提供を始めたとする"
    evidenceUrl: "https://www.colorfulbox.jp/feature/sitejet/"
  - layer: "自社サイト・顧客管理"
    name: "Cloudflare / WHMCS (secure.colorfulbox.jp)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-10）で、www.colorfulbox.jp と運営会社のサイトは server: cloudflare を返した。申し込みとログインの入口である secure.colorfulbox.jp は clientarea.php と cart.php のパスを持ち、WHMCSで始まる名前のクッキーを返したため、顧客管理と請求にWHMCSを使っているとみられる"
sources:
  - label: "カラフルボックス公式: トップページ"
    url: "https://www.colorfulbox.jp/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: 料金プラン（BOX1〜BOX8・契約期間ごとの料金・アダルト対応サーバー）"
    url: "https://www.colorfulbox.jp/price/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: カラフルボックスの特徴（地域別自動バックアップ・LiteSpeed・Imunify360）"
    url: "https://www.colorfulbox.jp/feature/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: 仕様"
    url: "https://www.colorfulbox.jp/spec/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: 機能一覧"
    url: "https://www.colorfulbox.jp/function/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: cPanelについて"
    url: "https://www.colorfulbox.jp/feature/cpanel/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: Sitejet（AIでホームページ作成）"
    url: "https://www.colorfulbox.jp/feature/sitejet/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: ColorfulBox CDN"
    url: "https://www.colorfulbox.jp/cdn/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: アダルトレンタルサーバー"
    url: "https://www.colorfulbox.jp/adult/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: tadaサーバー（無料レンタルサーバー）"
    url: "https://www.colorfulbox.jp/tadaserver/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: 法人向けレンタルサーバー カラフルビジネス"
    url: "https://www.colorfulbox.jp/business/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: アフィリエイトプログラム（A8.net・報酬の表）"
    url: "https://www.colorfulbox.jp/partner/affiliate/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: 会社情報（株式会社カラフルラボの会社概要・沿革）"
    url: "https://www.colorfulbox.jp/company/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックス公式: 特定商取引法に基づく表記"
    url: "https://www.colorfulbox.jp/commercial/"
    accessedAt: "2026-10-10"
  - label: "カラフルボックスのお知らせ: 法人向けレンタルサーバー「カラフルビジネス」の提供を開始（2026-10-01）"
    url: "https://www.colorfulbox.jp/info/detail/?id=229"
    accessedAt: "2026-10-10"
  - label: "カラフルボックスのお知らせ: 【8周年記念】サーバー契約期間88日延長＆初回55%OFF（2026-08-24）"
    url: "https://www.colorfulbox.jp/info/detail/?id=227"
    accessedAt: "2026-10-10"
  - label: "カラフルボックスのお知らせ: 【.co.jpドメイン : 2,000円】日本の法人専用ドメインが50%OFFに（2026-09-01）"
    url: "https://www.colorfulbox.jp/info/detail/?id=228"
    accessedAt: "2026-10-10"
  - label: "カラフルボックスのお知らせ: 一覧（2026年）"
    url: "https://www.colorfulbox.jp/info/"
    accessedAt: "2026-10-10"
  - label: "A8.net（運営: 株式会社ファンコミュニケーションズ）"
    url: "https://www.a8.net/"
    accessedAt: "2026-10-10"
---

カラフルボックスは、WordPressのブログや小さな事業のサイトを置くための国内の共用レンタルサーバーだ。当サイトが解剖した[mixhost](/ja/articles/mixhost)と同じく、WebサーバーにLiteSpeed、管理画面にcPanelを使い、アダルトサイトの運営を認め、紹介をA8.netのアフィリエイトに任せる。[エックスサーバー](/ja/articles/xserver)や[ロリポップ！](/ja/articles/lolipop)、[さくらのレンタルサーバ](/ja/articles/sakura-rental-server)が大手のグループや長い歴史を背負うのに対し、運営するのは2018年に生まれた資本金300万円の大阪の会社で、看板は「地域別の自動バックアップ」という、共用サーバーでは珍しい一点に絞られている。

## サービス解説

カラフルボックスは、BOX1からBOX8までの共用レンタルサーバーを中心に、アダルトサイト向けの別サーバー、無料のtadaサーバー、2026年10月に始めた法人向けのカラフルビジネス、サーバーと別にも契約できるCDN、ドメイン、SSL証明書、サイトの改ざんを検知するサイトロックを売る。

:::fact
会社情報のページ（2026-10-10時点）によれば、運営する株式会社カラフルラボ（ColorfulLab, Inc.）は2018年1月23日に設立され、本社は大阪市西区阿波座、資本金は300万円、代表取締役社長は杉原恵美子氏、主な事業はインターネットサービスの開発とアプリの開発で、届出電気通信事業者（E-30-04229）として登録されている。沿革は、2018年7月にレンタルサーバー「ColorfulBox」、2023年5月に「ColorfulBox CDN」、2025年6月に無料のレンタルサーバー「tadaサーバー」とノーコードの「Sitejet Builder」の提供を始めたとし、同じページは累計ユーザーを24,000超（2026年9月時点）とする。トップページは利用者数を「2.4万人突破」と書く。お知らせの一覧によれば、2026年8月24日に8周年の記念キャンペーン、9月1日に.co.jpドメインの割引、10月1日に法人向けの「カラフルビジネス」の提供開始を告知し、5月29日にはWordPress 7.0の提供を、7月22日にはWordPressの脆弱性への注意喚起を出している。
:::

:::fact
料金のページ（2026-10-10確認・税込）によれば、共用サーバーはBOX1からBOX8の8プランで、契約期間は1・3・6・12・24・36か月から選び、3か月以上なら初期費用は無料、1か月契約だけ2,200円かかる。36か月契約の月額換算は、BOX1が528円（更新も528円）、BOX2が初回484円・更新968円、BOX3が814円・1,628円、BOX4が1,089円・2,178円、BOX5が1,639円・3,278円、BOX6が2,739円・5,478円、BOX7が3,839円・7,678円、BOX8が7,689円・15,378円で、BOX2以上は初回限定の50%割引と更新価格の二段になっている。12か月契約のBOX2は初回583円・更新1,166円。「人気No.1」のBOX2はSSD 700GB、6vCPU、メモリ8GB、転送量の目安は無制限、月間PVの目安は6万で、BOX1は200GB、1vCPU、2GB、転送量の目安は月6TB。BOX8は1,600GB、18vCPU、40GBまで上がり、BOX7以上には電話サポートが付く。独自ドメインは、BOX2以上を12か月以上で契約すると6種類から1つが永久無料になる。全プランに30日の無料お試しが付き、クレジットカードの登録は要らない。プランの変更はいつでもでき、サーバーを置く地域は東日本と西日本から選べる（既定は東日本）。アダルトサイトを運用する場合は、BOX2からBOX8までの別のサーバーから申し込み、36か月契約の初回はBOX2が528円・更新1,320円で、通常のサーバーとの間でのプラン変更はできない。
:::

:::pull
共用サーバーの売り文句は、速さと安さに集まりがちだ。カラフルボックスは「壊れたとき、別の地域に控えがある」を、追加料金なしの看板にした。
:::

::scorecard

## UX分析

カラフルボックスの体験は、海外の共用ホスティングの標準的な部品を、日本語のサポートと、地域で分けたバックアップという安心で包んだものだ。一方で、どこまでが共用で、何が有料かは、料金表の1行目だけでは見えない。

- **バックアップを別の地域に置く**。特徴のページによれば、14日分の自動バックアップは、契約時に選んだ東日本か西日本の、もう一方の地域に保存され、利用者が意識しなくても災害などのリスクに備えた分散になる。全プランで標準、無料。[mixhost](/ja/articles/mixhost)が別のデータセンターへのバックアップをスタンダード以上に付け、ライトには付けないのと比べると、最も安いBOX1にも同じ守りがある点が違う。
- **30日のお試しに、カードが要らない**。料金のページによれば、お試し期間中に本契約しても、契約はお試しの30日が終わってから始まり、残りの無料期間が消えることはない。入口の心理的な壁を下げる作りで、アフィリエイトの報酬の表では、この無料お試しの申し込み自体にも1円の成果が付く。
- **管理画面はcPanel、作り方はAI**。cPanelのページは、世界で一番使われているコントロールパネルであることと、バックアップの復元やCron、SSHまでが揃うことを売りにする。2025年6月からは、質問に答えるだけでAIがデザインと文章を作るSitejetが追加費用なしで使え、WordPressはサーバーとドメインの同時申し込みでSSL対応のサイトがすぐできる。一方で、cPanelの項目の多さは初めての人には重く見えることがある。
- **「無制限」と「目安」が並ぶ**。機能一覧によれば、マルチドメイン、サブドメイン、データベース、メールアドレス、FTPアカウントは無制限で、転送量はBOX2以上が「無制限」、BOX1が月6TBの「目安」だ。仕様のページは、100万ファイル以上を保存したディレクトリは動作とバックアップの保証の対象外とし、不要なファイルの削除を求めることがあると書く。
- **安い側の削り方が見える**。無料のtadaサーバーは、独自ドメインを自分で用意するのが条件で、広告は出ないが、サポートもバックアップもなく、SSDは5GB、メモリは1GB、メールの送信は1時間10通、HTTP/3とLiteSpeedのキャッシュは使えない。BOX1はHTTP/3もキャッシュも使えるが、独自ドメインの無料特典の対象外で、電話サポートはBOX7からだ。
- **返金の条件は8日**。特定商取引法の表記によれば、申し込みの解約はクレジットカード決済でも銀行振込でも申し込み後8日以内に限って受け付け、取得済みのドメインの料金は返金できず、返金に応じるかどうかは会社の判断で決まる。30日のお試しがあるので本契約の前に確かめる余地は大きいが、払ったあとの逃げ道は短い。

## 技術構成

::techstack

:::fact
仕様のページ（2026-10-10確認）によれば、サーバーはCPUがIntel Xeon / AMD EPYCで最大64コア、メモリは最大512GB、OSはCloudLinux、ストレージは高速ピュアSSDのRAID構成で、東日本と西日本のデータセンターはどちらも10Gbpsでバックボーンに接続する。Webサーバーのソフトウェアは「LiteSpeed 6.x.x」で、.htaccessとmod_rewriteが使え、SSHは公開鍵認証でsftpとQUICに対応する。PHPは5.3系から8.3系までをLSAPIで動かし、php.iniの編集と拡張モジュールの選択ができる。データベースはMariaDB 10.6.x、メールはexim4とDovecot、FTPはPure-FTPd、WebメールはRoundcube、独自SSLの認証局はLet's Encryptで、TLS 1.3と1.2に対応する。特徴のページは、Imunify360によるWAF / IPS / IDSと、LiteSpeed独自のキャッシュを全プランで標準とし、LiteSpeedはWordPressのベンチマークでApacheの約3倍、Nginxの約5倍以上の速さと書く。
:::

:::fact
CDNのページ（2026-10-10確認）によれば、ColorfulBox CDNは100か国以上・285を超える都市に広がるバックボーンを持ち、WAF、DDoSプロテクション、画像の最適化、レート制限を備え、ライト（1ドメイン・月440円から）、スタンダード（2ドメイン・880円から）、プレミアム（5ドメイン・2,200円から）の3プランをサーバーと別にも契約できる。アダルト対応サーバーのページは、BOX2以上にプレミアムのCDNを載せると書く。当サイトの実観測（2026-10-10）では、www.colorfulbox.jp と運営会社のサイトは server: cloudflare を返し、申し込みとログインの入口である secure.colorfulbox.jp は clientarea.php へ転送してWHMCSで始まる名前のクッキーを返した。
:::

:::guess
LiteSpeed、cPanel、CloudLinux、Imunify360、WHMCSという組み合わせは、[mixhost](/ja/articles/mixhost)の解剖で見たのと同じ、海外のホスティング会社で広く使われる市販の部品の構成とみられる。少人数の会社が、管理画面や課金の仕組みを自作せずに大手に近い機能の幅を出せる反面、ライセンスの費用が利用者の数に比例して積み上がる構造も同じと推測される。CDNの説明にある「285を超える都市」や「600万のウェブサイトの集合知」という数字は、大手のCDN事業者が自社のネットワークについて公表してきた数字と重なり、自前の配信網ではなく他社のCDNを再販している可能性が高いとみられるが、事業者の名前は公開されていない。東日本と西日本の2拠点にバックアップを振り分ける設計は、物理サーバーを2地域に持つ必要があるため、小さな会社にとっては固定費の負担になる一方、看板にできる差別化を安く作れる点で割に合っていると読める。
:::

## 二段の値付けと8年目の法人向け

:::fact
料金のページ（2026-10-10確認）によれば、BOX2以上の初回の割引は「初回限定割引」で、更新時には通常価格に戻る。36か月契約のBOX2は初回484円で更新968円、BOX3は814円で1,628円、BOX4は1,089円で2,178円だ。8周年のお知らせ（2026-08-24）によれば、8月24日から9月24日まで、12か月以上の新規契約に初回55%OFF（月436円から）とサーバー契約期間の88日間の無料延長、独自ドメインの永年無料、初期費用0円を付け、初回の割引は初回の契約だけで更新以降は通常料金だと注記した。10月1日のお知らせによれば、法人向けの「カラフルビジネス」は、既存のカラフルボックスとは別の新しい契約として申し込み、稼働率99.99%のSLA（下回った月は利用残高を自動で付与）、契約ごとに割り当てる送信用の専用IP、.co.jpを含む10種類から1つの独自ドメインが契約中ずっと無料、複数人での運用に対応する。法人向けのページによれば、36か月契約の月額はスターターが2,280円（SSD 700GB・7vCPU・10GB）、ベーシックが4,950円（1,300GB・13vCPU・22GB）、アドバンスが9,510円（1,500GB・17vCPU・34GB）で、SPF・DKIM・DMARCの送信ドメイン認証、メール・サイト・DBの機能別の権限をサブユーザーに割り当てるチームアカウント、申し込み前の見積書の発行を全プランに付ける。
:::

| 36か月契約の月額（税込） | 初回 | 更新 | 更新時の上がり幅 |
| --- | --- | --- | --- |
| BOX1 | 528円 | 528円 | なし |
| BOX2 | 484円 | 968円 | 2倍 |
| BOX3 | 814円 | 1,628円 | 2倍 |
| BOX4 | 1,089円 | 2,178円 | 2倍 |
| アダルト対応 BOX2 | 528円 | 1,320円 | 2.5倍 |
| カラフルビジネス スターター | 2,280円 | — | 法人向けは割引の表記なし |

:::guess
国内の共用サーバーの料金表で初回の割引率を競う型は、カラフルボックスも同じだが、割引の幅を「50%」や「55%」という分かりやすい倍率にそろえ、BOX1だけは最初から更新と同じ値段にしているのは、最も安い入口で「2年目に上がる」という不信を買わないためとみられる。アダルト対応のサーバーが通常より高い更新価格になっているのは、別サーバー・別IPとプレミアムのCDNを載せる原価が乗っていると推測される。8年目に法人向けを足したのは、個人のブログやアフィリエイトのサイトを集めてきた入口の層が、更新のたびに安い他社へ移りやすいのに対し、.co.jpのドメインとメールを預けた法人は動きにくく、月額も高いからと読める。専用IPやSPF・DKIM・DMARCを法人の看板にしているのは、大手のメールサービスが送信ドメイン認証を厳しく求めるようになり、共用サーバーのメールが迷惑メールとして弾かれやすくなった流れを、営業の材料に変えた形とみられる。
:::

## ビジネスモデル

稼ぎ方は、契約期間分を前払いで受け取るレンタルサーバーの料金が中心で、ドメインの登録、有料のSSL証明書、サイトロック、初期設定の代行「あんしんスタート」、WordPressの移行代行、CDNが上に乗る。客を集める役はA8.netのアフィリエイトと、無料のお試しに任せている。

:::fact
アフィリエイトのページ（2026-10-10確認）によれば、カラフルボックスのアフィリエイトはA8.netで提供され、参加費は無料でノルマもなく、ロゴやキャプチャの素材は自由に使ってよいとし、報酬の表を公開する。レンタルサーバーの申し込みの報酬（税別）は、30日間の無料お試しが1円、BOX1が契約期間に応じて1,500円（1・3・6か月）から7,000円（36か月）、BOX2が2,500円から8,000円、BOX3が3,000円から8,500円、BOX4が3,500円から9,500円、BOX5が4,000円から11,500円で、表にはドメイン、CDN、オプション、SSL、サイトロックの項目も並ぶ。トップページは、BOX2を「アフィリエイトや小規模サイトに最適」と紹介し、WordPressのサイトを5分で作れること、ドメインが永久無料になることを売りにする。法人向けのページは、累計24,000契約の声から法人向けの5つの強みを作ったと書く。
:::

:::guess
36か月契約のBOX2の報酬8,000円は、同じ契約の初回の支払い（484円×36か月で約17,400円）の半分近くにあたり、紹介した書き手に初回の売上の多くを渡して、更新で回収する設計とみられる。無料のお試しに1円、tadaサーバーを無料で配るのは、A8.netの成果報酬を広告費の代わりにし、まず名前を知ってもらうための入口を複数持つ考え方と推測される。資本金300万円の会社が8年で24,000の契約を集められたのは、広告費を先に払わずに済むこの構造と、市販の部品で機能を揃えたことの組み合わせとみられる。一方で、紹介者が初回の価格を強調しやすい構造では、更新で値段が倍になることへの不満が紹介者の信用に跳ね返りやすく、BOX1の更新価格を据え置き、法人向けで割引を前面に出さないのは、その反動を小さくする判断と読める。
:::

2018年に大阪で生まれたカラフルボックスは、LiteSpeedとcPanelという世界の標準の部品に、東日本と西日本に分けたバックアップという一点の安心を足して、個人のブログから集めてきた。8年目には、初回の割引で入った客が更新で離れやすい構造を見据えて、SLAと専用IPとドメインを束ねた法人向けを足した。小さな会社が共用サーバーで選ばれ続けるには、速さと安さの先に、何を預かっているかを言葉にできるかどうかが問われている。
