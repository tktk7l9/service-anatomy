---
service: "ConoHa WING"
title: "1時間2.5円の共用サーバーが「削除できないFTPS」でAIエージェントを迎えた — ConoHa WINGはVPS育ちの課金設計とLiteSpeedで国内最速を名乗り続ける"
description: "GMOインターネットが2018年に始めたレンタルサーバー、ConoHa WING。時間単位の課金と36か月前払いの「WINGパック」を並べ、h2loadの自社計測で「サーバー処理速度No.1」を掲げる。nginxとApacheとLiteSpeed LSAPIを重ねた構成、プライム・ストラテジーのWEXAL、AIエージェント向けに公開されたFTPSのサイト公開スキル、2026年9月の不正アクセスとDB障害、半期売上115億円のセグメント、A8.netともしもアフィリエイトで最大12,000円の成果報酬までを、公式サイト・お知らせ・決算説明資料から解剖する。"
lead: "「ConoHa WINGのSKILL.mdを読んで、指示に従ってセットアップして」——2026年9月30日時点の公式ページは、AIコーディングエージェントにそう頼めばサーバーへの公開が始まる、と書く。届くのはAPIでもMCPサーバーでもなく、Python標準ライブラリだけで動くFTPSのツールと、削除を最初から持たせない設計だ。時間課金のVPSから育った共用サーバーが、月額649円のキャンペーンと「国内最速」の看板で8年目を迎え、AIエージェントの時代にどんな入口を用意したかを解剖する。"
category: dev-tool
tags: [hosting, wordpress, small-business, ai, php]
publishedAt: "2026-09-30"
updatedAt: "2026-09-30"
lastVerified: "2026-09-30"
serviceUrl: "https://www.conoha.jp/wing/"
# Affiliate link placeholder: the owner must join the ConoHa WING promotion on
# Moshimo Affiliate (the official affiliate page lists A8.net and Moshimo as the two ASPs,
# with rewards from 3,500 to 12,000 yen per contract by plan) before enabling this block.
# Do not use the customer referral URL (お客様紹介プログラム) here: the official FAQ says it
# cannot be combined with the ASP programs and both rewards may be lost.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<owner-id>&p_id=<program-id>&pc_id=<pc-id>&pl_id=<link-id>"
#   program: "ConoHa WING Affiliate Program (Moshimo Affiliate)"
vendor: "GMOインターネット株式会社"
origin: "JP"
heroTheme: "conoha-wing"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Webサーバー"
    name: "nginx + Apache (.htaccess editable)"
    confidence: confirmed
    evidence: "公式の機能一覧・仕様に、OSはCloudLinux、WebサーバーはApache + nginxと明記。トップページは「同時大量アクセスの処理に優れたnginxを採用」と書く。当サイトの観測（2026-09-30）でも、公式の導入事例に載る利用者サイト2件は www1182.conoha.ne.jp / www265.conoha.ne.jp に解決し、HTTP/2で server: nginx と x-nginx-cache: HIT/MISS を返した"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "PHP実行環境"
    name: "LiteSpeed LSAPI + OPcache (PHP 7.0–8.4)"
    confidence: confirmed
    evidence: "公式の機能一覧に、従来のFastCGIより20%高速なLiteSpeed LSAPIをPHPアプリケーション実行環境として採用と明記。PHPは7.0から8.4まで切り替え可能で、OPcacheも使える。2018年9月26日の提供開始プレスリリースの時点でLiteSpeed LSAPIの導入を速さの根拠に挙げていた"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "OS"
    name: "CloudLinux"
    confidence: confirmed
    evidence: "公式の機能一覧・仕様の表に、OSとしてCloudLinuxを明記。同じ表は、メモリ・vCPUコア数を「目安値」とし、共用サーバーの混雑度が低い場合に最大値まで使えると書く（ビジネスプランはリソース保証）"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "ストレージ"
    name: "All-SSD RAID10"
    confidence: confirmed
    evidence: "公式の機能一覧・仕様に、ディスクはSSD（ベーシック500GB・スタンダード600GB・プレミアム700GB）、RAID構成はRAID10と明記。高速性能のページは「ピュアSSD RAID10構成」と書く"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "データベース"
    name: "MySQL (5.0GB per database, phpMyAdmin)"
    confidence: confirmed
    evidence: "公式の機能一覧・仕様に、データベースはMySQL、データベース数は無制限、容量は1個あたり5.0GB、管理ツールとしてphpMyAdminが使えると明記。2026年9月の障害のお知らせでは、DBサーバーの収容ホスト名が mysql1045.conoha.ne.jp の形で示された"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "コンテンツキャッシュ"
    name: "nginx proxy cache (in-house tuned)"
    confidence: likely
    evidence: "公式サポートのガイドは、コンテンツキャッシュ機能でページをキャッシュして表示を高速化でき、動的なページもキャッシュされること、wp-admin配下はキャッシュされないことを書く。当サイトの観測（2026-09-30）では、利用者サイトが x-nginx-cache: MISS / HIT のヘッダーを返しており、nginx側のプロキシキャッシュとみられる。公式が実装名を明言しているわけではない"
    evidenceUrl: "https://support.conoha.jp/w/contentscache/"
  - layer: "フロントエンド高速化"
    name: "WEXAL Page Speed Technology (Prime Strategy)"
    confidence: confirmed
    evidence: "公式のWEXALページに、プライム・ストラテジー社が提供するWordPress高速化エンジンで、共用レンタルサーバーで使えるのは国内初、契約者は追加料金なしでコントロールパネルのスイッチをONにするだけで導入できると明記。機能一覧は「戦略AI『David』」がブラウザ環境に合わせて表示を高速化し、画像・JS・CSSを圧縮すると書く"
    evidenceUrl: "https://www.conoha.jp/wing/function/wexal/"
  - layer: "メールセキュリティ"
    name: "Vade (anti-spam / anti-virus)"
    confidence: confirmed
    evidence: "公式の機能一覧・仕様に、ウイルスチェックと迷惑メールフィルタの提供元としてVadeを明記"
    evidenceUrl: "https://www.conoha.jp/wing/function/"
  - layer: "AIエージェント連携"
    name: "ConoHa WING site publishing skill (SKILL.md + conoha-ftp.py, FTPS over Python stdlib)"
    confidence: confirmed
    evidence: "公式ページに、Claude Code・Cursor・Gemini CLI・Clineなど主要なAIコーディングエージェントに対応するサイト公開スキルを公開していると明記。SKILL.mdは2ファイル構成（説明本文と処理ツール）で、Python 3.8以上だけを要件とし、FTP_TLSのみを使い平文フォールバックを禁じ、削除・同期・.htaccessの操作・WordPress・データベース・SSHを対象外とする"
    evidenceUrl: "https://www.conoha.jp/function/skills/SKILL.md"
  - layer: "公式サイトの配信"
    name: "Cloudflare (www.conoha.jp / doc.conoha.jp)"
    confidence: likely
    evidence: "当サイトの観測（2026-09-30）では、www.conoha.jp と doc.conoha.jp が server: cloudflare と cf-ray ヘッダーを返した。公式サイト側の話であり、利用者のサイトを収容するサーバーはCloudflareを介さず www****.conoha.ne.jp が直接応答した"
sources:
  - label: "ConoHa WING公式: トップページ（サーバー処理速度No.1の注記・稼働率・料金）"
    url: "https://www.conoha.jp/wing/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: 高速性能（h2loadによる計測方法・LiteSpeed LSAPI・SSD RAID10）"
    url: "https://www.conoha.jp/wing/function/highspeed/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: 機能一覧・仕様（CloudLinux・Apache + nginx・MySQL・Vade・PHPバージョン）"
    url: "https://www.conoha.jp/wing/function/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: 料金（WINGパック・通常料金・ビジネスプラン）"
    url: "https://www.conoha.jp/wing/pricing/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: サイト公開スキル（対応エージェント・Python 3.8・削除非対応のFAQ）"
    url: "https://www.conoha.jp/function/skills/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: SKILL.md（サイト公開スキルの本文）"
    url: "https://www.conoha.jp/function/skills/SKILL.md"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: conoha-ftp.py（FTPS操作ツールのソース・v1.0.3）"
    url: "https://www.conoha.jp/function/skills/conoha-ftp.py"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: WEXAL Page Speed Technology"
    url: "https://www.conoha.jp/wing/function/wexal/"
    accessedAt: "2026-09-30"
  - label: "ConoHa公式: ConoHa Pencil（AIライティングツールの料金）"
    url: "https://www.conoha.jp/function/conoha-pencil/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WINGサポート: コンテンツキャッシュ機能を使う"
    url: "https://support.conoha.jp/w/contentscache/"
    accessedAt: "2026-09-30"
  - label: "ConoHa公式: 企業概要（GMOインターネット株式会社・証券コード4784・従業員数）"
    url: "https://www.conoha.jp/company/"
    accessedAt: "2026-09-30"
  - label: "ConoHa公式: サービス品質保証制度（SLA）"
    url: "https://www.conoha.jp/sla/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: アフィリエイトプログラム（A8.net・もしもアフィリエイトの成果報酬）"
    url: "https://www.conoha.jp/wing/affiliate/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WING公式: お客様紹介プログラム"
    url: "https://www.conoha.jp/wing/introduction/"
    accessedAt: "2026-09-30"
  - label: "ConoHa公式: パートナープログラム（取次制度）"
    url: "https://www.conoha.jp/wing/partner/"
    accessedAt: "2026-09-30"
  - label: "ConoHa WINGニュース: 一部収容ホストへの第三者による不正アクセスに関するお詫びとお知らせ（2026-09-20）"
    url: "https://www.conoha.jp/wing/news/?ap=2015054834"
    accessedAt: "2026-09-30"
  - label: "ConoHa WINGニュース: 一部収容ホストにおけるDB接続障害復旧のお知らせ（2026-09-18）"
    url: "https://www.conoha.jp/wing/news/?ap=2015054832"
    accessedAt: "2026-09-30"
  - label: "ConoHa WINGニュース: 脆弱性（CVE-2026-43499）に伴うSSH接続機能の一時停止（2026-07-17）"
    url: "https://www.conoha.jp/wing/news/?ap=2015054705"
    accessedAt: "2026-09-30"
  - label: "ConoHa WINGニュース: WordPressの脆弱性（CVE-2026-87902）に関するご注意（2026-09-25・9/29更新）"
    url: "https://www.conoha.jp/wing/news/?ap=2015054839"
    accessedAt: "2026-09-30"
  - label: "ConoHa WINGニュース: 新規インストールできるWordPressが7.1に対応（2026-08-24）"
    url: "https://www.conoha.jp/wing/news/?ap=2015054764"
    accessedAt: "2026-09-30"
  - label: "ConoHa WINGニュース: WordPressテーマ「SANGO」「OLTANA」の新規販売受付終了（2026-07-30）"
    url: "https://www.conoha.jp/wing/news/?ap=2015054723"
    accessedAt: "2026-09-30"
  - label: "ConoHa WINGニュース: ConoHa VPSがパートナープログラムの対象に追加（2026-07-16）"
    url: "https://www.conoha.jp/wing/news/?ap=2015054703"
    accessedAt: "2026-09-30"
  - label: "GMOインターネットグループ: 「ConoHa WING byGMO」提供開始のプレスリリース（2018-09-26）"
    url: "https://group.gmo/news/article/6167/"
    accessedAt: "2026-09-30"
  - label: "PR TIMES STORY: ConoHa WING開発ストーリー（2020-09-28・アカウント総数23万）"
    url: "https://prtimes.com/story/detail/e7bZlNSgzxK"
    accessedAt: "2026-09-30"
  - label: "GMOインターネット株式会社: 2026年12月期 第2四半期 決算説明資料"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_presentation.pdf"
    accessedAt: "2026-09-30"
  - label: "GMOインターネット株式会社: ConoHa VPSがChatGPT対応プラグインを提供開始（2026-09-01・Claudeコネクタは8月12日）"
    url: "https://internet.gmo/news/article/224/"
    accessedAt: "2026-09-30"
  - label: "W3Techs: 日本にサーバーを置くWebサイトのホスティング事業者シェア"
    url: "https://w3techs.com/technologies/segmentation/sl-jp-/web_hosting"
    accessedAt: "2026-09-30"
---

日本でブログを始める人がレンタルサーバーを比べるとき、[エックスサーバー](/ja/articles/xserver)と並んで名前が挙がるのがConoHa WINGだ。運営は東証プライム上場のGMOインターネット株式会社で、同じ会社がドメイン事業や「ConoHa VPS」も持つ。2018年に「国内最速」を掲げて始まったこのサービスは、時間単位の課金という共用サーバーでは珍しい設計を今も残しながら、36か月前払いの「WINGパック」で月額649円という数字を前面に出す。そして2026年、AIエージェントのための入口を、APIではなくFTPSで開けた。

## サービス解説

ConoHa WINGは、1台のサーバーを多数の契約者で分け合う共用レンタルサーバーだ。契約すると、Webサイトの置き場所、メール、MySQLのデータベース、無料の独自SSLがまとめて使え、WordPressは申し込みと同時に設置できる。「ConoHa」というブランドは元々VPSの名前で、WINGはその上に後から加わったレンタルサーバーである。同じブランドの下には、VPS、ゲーム用のfor GAME、GPUで画像を生成するAI Canvas、AIライティングのPencilが並ぶ。

:::fact
GMOインターネットグループのプレスリリースによれば、ConoHa WINGは2018年9月26日に提供を開始した。当時から「日本国内最速の処理速度」を掲げ、根拠はApache Benchで5回計測した平均値の比較だった。初期費用は無料で最低利用期間はなく、月額1,200円（税抜）から、ベーシックプランは1時間2.0円からという時間課金の設計で始まっている。2020年9月のPR TIMES STORYによれば、開発は2017年に始まり、2019年9月にドメイン管理機能、2020年初めにサーバーと独自ドメインをセットにした「WINGパック」が加わった。その時点でConoHa全体のアカウント総数は23万を超えていた。
:::

:::fact
公式サイトの企業概要によれば、運営するGMOインターネット株式会社は1999年9月8日設立、証券コードは4784（東証プライム）、資本金は106億9,160万円、代表取締役社長執行役員は伊藤正氏。従業員数は2026年6月末時点で連結2,240名、単体1,138名で、主要株主はGMOインターネットグループ株式会社。事業はドメイン、クラウド・レンタルサーバー、インターネット接続のインフラ事業と、広告・メディア事業からなる。2026年12月期第2四半期の決算説明資料によれば、GPUクラウドを含む「ドメイン・レンタルサーバー事業」の上半期の売上高は115億円（前年同期比+18.1%）、営業利益は31.0億円（+73.6%）で、国内の契約件数はグループ全体で1,370万件（2026年6月末）とされる。
:::

:::fact
ConoHa WINGのトップページは「サーバー処理速度No.1」「国内シェアNo.1」「稼働率99.99%以上」の3つを掲げる。注記によれば、処理速度は2026年7月の自社調べで、国内シェア90%以上を占めるトップ10サービスの最下位プランをh2loadとApache Benchで5回計測した平均値の比較。シェアは2026年7月のbuiltwith.comの調査結果で、主語はGMOインターネットグループである。稼働率は「サーバーへのアクセスが完全に不能となった状態を障害と定義した場合」の2025年7月1日から2026年7月31日までの実績値だ。当サイトが2026年9月30日に確認したW3Techsの集計では、日本にサーバーを置くWebサイトのうち、XServerが30.4%、GMOインターネットグループが25.8%、さくらが19.0%を占めていた。W3Techsの数字はグループ全体のもので、ConoHa WING単体のシェアは公式にも第三者にも見当たらない。
:::

:::pull
VPSの時間課金と、共用サーバーの36か月前払い。ConoHa WINGは、正反対の2つの値付けを同じ料金表に並べている。
:::

::scorecard

## UX分析

ConoHa WINGのUXは、「サーバーの知識がない人が、最短10分でWordPressを公開できること」を中心に組み立てられている。その上に2026年、AIコーディングエージェント向けの、意図的に狭い入口が足された。

- **申し込みとWordPressを1つの手続きにする**。「WordPressかんたんセットアップ」は、レンタルサーバー、独自ドメイン、WordPress、テーマ、SSLをまとめて一括で取得・設定する機能で、公式は「最短10分」と書く。他社からの引っ越しは「WordPressかんたん移行」、公開中のサイトを別ドメインへ写す「WordPressサイトコピー」、初期状態へ戻す「WordPress初期化」まで、WordPressの一生に沿った機能が並ぶ。
- **試すハードルを時間課金で下げる**。「通常料金」はベーシックプランで1時間2.5円、月の上限は1,452円。料金ページは「月の途中からご利用を始めてもムダなコストは発生しません」と書く。最低利用期間がないのも通常料金の側で、WINGパックは最低3か月で途中解約できない。
- **速さをスイッチにする**。コンテンツキャッシュは対象を「すべてのコンテンツ」「静的コンテンツのみ」から選べ、WordPressのwp-admin配下はどれを選んでもキャッシュされない。一方でサポートのガイドは「動的なページもキャッシュされるのでご注意ください」と注意している。WEXALも、サイト管理の「高速化」でスイッチをONにするだけで導入できる。
- **コントロールパネルにパスキーを入れる**。機能一覧によれば、独自開発の管理画面は生体認証やPINを使うパスキーによるログインに対応する。モニタリングでCPU・メモリ・ディスクのしきい値超過をメールやSlackに通知し、「自動プランアップ」をONにしておけば超過時に自動で上のプランへ移る。
- **AIエージェントには「できないこと」を先に決める**。サイト公開スキルのFAQは、削除ができるかという問いに「いいえ」と答え、削除は取り消しが難しいので安全に配慮してあえて対象外にしたと説明する。ブラウザ版のAIチャットやスマートフォンからは使えず、PCで動くClaude Code・Cursor・Gemini CLI・Clineなどに限る。

:::fact
SKILL.mdは、AIエージェントに向けた文書として書かれている。URLで渡されたエージェントは、まず`~/.claude/skills/conoha-wing-hosting/`にSKILL.mdとconoha-ftp.pyの2ファイルを保存し、Python 3.8以上を確認し、接続情報を会話で聞き取って設定ファイルを作る。文書は「専門用語を使わない」「質問は最小限・1つずつ」「技術的な判断は黙ってこちらで行う」と利用者への接し方まで指示し、`index.html`は「サイトの入口ページ」、上書きは「入れ替え」と言い換えるよう求める。できることは一覧・ダウンロード・アップロード・要承認の上書き・フォルダごとの一括公開で、削除、同期、.htaccessなどサーバー管理ファイルの操作、WordPressの構築・運用、データベース、SSH、`public_html/<ドメイン>/`の外への書き込みは対象外とする。処理ツールのconoha-ftp.py（v1.0.3）は、ソース冒頭のコメントによれば、FTP_TLSのみを使い平文フォールバックを禁じ、証明書とホスト名を検証し、`..`や絶対パスを拒否し、上書きは「--planで提案→承認→--execute --approved」の2段階、アップロードは一時ファイル名で置いてからリネームする。
:::

## 技術構成

::techstack

:::fact
公式の機能一覧・仕様によれば、OSはCloudLinux、WebサーバーはApache + nginx、PHPの実行環境は「従来のFastCGIより20%高速」とうたうLiteSpeed LSAPIで、PHPは7.0から8.4まで切り替えられ、OPcacheとHTTP/2が使える。ストレージはSSDのRAID10、データベースはMySQLで1個あたり5.0GB、メールのウイルスチェックと迷惑メールフィルタはVade社のものだ。ベーシックプランの目安はvCPU 6コア・メモリ8GBで、注記は「共用サーバーの混雑度が低い場合、最大値までご利用いただけます」と書く。ビジネスプランは逆にvCPU 2コア・メモリ1GBからの「リソース保証」で、目安ではなく確保する数字として示されている。当サイトの観測（2026年9月30日）では、公式の導入事例に載る利用者サイト2件はそれぞれ www1182.conoha.ne.jp と www265.conoha.ne.jp に解決し、HTTP/2で server: nginx と x-nginx-cache: HIT または MISS を返した。IPアドレスの割当先はGMOの旧社名である「interQ」名義だった。
:::

:::guess
利用者のサイトが返すx-nginx-cacheヘッダーと、公式が「同時大量アクセスの処理に優れたnginxを採用」と書くことを合わせると、前段にnginxを置いてキャッシュと同時接続をさばき、後段のApacheが.htaccessとPHP（LiteSpeed LSAPI）を担う2段の構成と推測される。同じ「nginx + Apache」でも、[エックスサーバー](/ja/articles/xserver)がnginxでも.htaccessをそのまま使えると説明するのに対し、ConoHa WINGは.htaccessの編集をコントロールパネルの機能として並べるにとどまり、どちらの層が解釈するかは公式には書かれていない。
:::

:::fact
WEXAL Page Speed Technologyは、公式ページによれば、プライム・ストラテジー社が提供するWordPress高速化エンジンで、共用レンタルサーバーで使えるのは国内初、ConoHa WINGの契約者は追加料金なしで使える。機能一覧は「戦略AI『David』」がブラウザの環境に合わせて表示を高速化し、画像やJS、CSSを圧縮すると書く。画像は対応ブラウザごとにWebPへ自動変換される。一方、同じプライム・ストラテジーと2021年に提携していたエックスサーバーは、2026年6月に技術提携の終了を発表している。
:::

:::fact
2026年の夏から秋にかけて、公式ニュースには基盤に関わるお知らせが続いた。7月17日の続報によれば、Linuxカーネルの権限昇格の脆弱性（CVE-2026-43499）への暫定対策としてSSH接続機能を一時停止し、7月21日の0時から8時のメンテナンス後に再開する予定とされた。9月17日から18日にかけては、収容ホスト mysql1045.conoha.ne.jp のDBサーバーに接続できない障害が、9月16日14時35分頃から18日1時55分頃まで続いた。原因はハードウェアの故障で、被疑箇所の交換で復旧したが、データは9月16日の1時から2時頃の状態に復元された。そして9月20日、一部の収容ホストで第三者による不正アクセスがあり、426件のアカウントのWebサーバー領域に不正なプログラムが設置されたと発表した。時系列は9月3日に不正アクセス開始、9月16日に検知・調査開始、9月18日に原因と影響範囲の特定と不正プログラムの排除。会員情報・契約情報・支払い情報は別の環境で管理しており漏えいはない、対象の利用者には個別にメールで連絡する、と書かれている。9月25日にはWordPressコアの脆弱性（CVE-2026-87902、対象4.7.0〜7.1.1）への注意喚起を出し、9月29日にかんたんセットアップで入るバージョンを修正済みの7.1.2に更新した。
:::

:::guess
9月の不正アクセスは、公式のお知らせがWebサーバー領域への「不正なプログラムの設置」と書き、侵入経路には触れていない。13日間気づかれなかった点と、同じ月にDBホストのハードウェア故障で約35時間の障害と1日分のデータ巻き戻しが起きた点は、共用サーバーの弱点そのものだ。1台に多数の契約者を載せる形は原価を下げる一方で、1ホストの障害や侵害が数百のサイトに及ぶ。トップページの「稼働率99.99%以上」は「アクセスが完全に不能となった状態」を障害と定義した数字で、DBだけが落ちた時間や、ファイルが改ざんされていた期間はこの定義には入らないとみられる。
:::

:::guess
AIエージェントへの入口の作り方は、同じGMOインターネットの中でも製品によって違う。ConoHa VPSは2026年7月にリモートMCPサーバー、8月12日にClaudeのコネクタ、9月1日にChatGPT対応プラグインを出し、サーバーの起動・停止・再起動や設定変更をAIから行えるようにした。ConoHa WINGが公開したのは、それらと比べてずっと狭い、FTPSで静的ファイルを置くだけのスキルである。共用サーバーではAPIの公開範囲がそのまま他の契約者への影響範囲になりうること、利用者の多くがサーバーの専門知識を持たないことを考えると、まず「壊せない操作」だけを切り出して出した、という判断と推測される。エックスサーバーがREST APIとMCPサーバーでWordPressの設置やDNSまで開けたのとは、対照的な選び方だ。
:::

## ビジネスモデル

ConoHa WINGの収益は共用サーバーの利用料で、その値付けは「時間課金の通常料金」と「長期前払いのWINGパック」の二本立てになっている。

:::fact
料金ページ（2026年9月30日時点）によれば、通常料金はベーシックが1時間2.5円で1か月最大1,452円、スタンダードが4.4円で最大2,640円、プレミアムが8.8円で最大5,280円（いずれも税込）。初期費用は無料で、独自ドメインの無料特典は付かない。WINGパックは契約期間分を一括前払いする長期利用割引で、36か月契約の月額はベーシック649円（通常料金より55%OFF）、スタンダード1,925円、プレミアム3,850円。3か月契約ではベーシック1,331円で8%OFFにとどまる。649円は2026年10月7日16時までに新規申し込みした場合のキャンペーン料金で、独自ドメインは最大2つが契約中は永久無料になる（2つ目は.online/.space/.website/.tech/.site/.fun/.tokyo/.shopの8種類から）。WINGパックは途中解約できず、月単位の分割払いにも対応しない。法人向けのビジネスプランはBizライトが36か月で月額1,573円、Bizスタンダード3,328円、Bizアドバンス6,655円で、こちらはメモリとvCPUを保証する。SLAは月間稼働率99.99%を保証値とし、99.9%以上99.99%未満なら月額の10%、99.9%未満なら30%をサービス利用権として付与する。
:::

:::fact
紹介による集客は3系統あり、公式のアフィリエイトページは併用できないと明記する。ASP経由のアフィリエイトはA8.netともしもアフィリエイトの2社で、成果報酬は1件あたりWINGパックのベーシック5,000円、スタンダード7,500円、プレミアム10,000円、通常料金ならそれぞれ3,500円・5,000円・6,500円。WINGパックと同時にAIライティングツールのConoHa Pencilが申し込まれると、Liteで6,000〜11,000円、StandardかBusinessで7,000〜12,000円に上がる。ビジネスプランは12か月以上の契約だけが対象で、ConoHa WINGを使っていなくても参加できる。契約者向けの「お客様紹介プログラム」は、WINGパック12か月以上の契約で、紹介した側に5,000円の報酬、紹介された側に初回支払いから5,000円の割引を与え、報酬は銀行振込のほかセブン銀行ATMやローソンのLoppiで現金でも受け取れる。制作会社向けの「パートナープログラム（取次制度）」は、初回の成果報酬5,000円に加えて料率15%が更新のたびに続き、2026年7月16日からはConoHa VPSのまとめトクとKUSANAGIも対象になった。ConoHa Pencil自体は月額0円のFreeから770円のLite、2,480円のStandard、8,980円のBusinessまでの4段階で、新規同時申し込みならLiteの初月が無料になる。
:::

:::guess
2つの料金タイプは、同じ商品を2つの客層に売る仕組みとみられる。時間課金はVPS時代のConoHaが持っていた設計で、「試してすぐやめられる」ことを保証し、最低利用期間の無さを他社との違いにする。一方で36か月のWINGパックは、数年分の売上を先に受け取り、解約を考える機会を減らす。55%OFFという割引率の大きさは、通常料金の側を高めに置いておくことで成り立っており、料金表の「通常料金より55%OFF」という表示は、時間課金の上限額を比較の基準にしている。共用サーバーは長く留まる契約者が増えるほど1契約あたりの原価が下がる事業なので、入口は時間課金で広く、定着は前払いで固める、という2段構えと推測される。
:::

:::guess
紹介の設計は、ブログを書く人を販売網に変える。もしもアフィリエイトとA8.netの報酬はプラン別の定額で、「レンタルサーバーの選び方」を書くブログにとって扱いやすい。ConoHa Pencilの同時申し込みで報酬が上がる仕組みは、記事を書く人にAIライティングを勧めさせ、ブログの立ち上げからサーバーとAIの両方を月額で取る導線とみられる。WordPressテーマの「SANGO」「OLTANA」の販売を2026年7月に終えた一方で、トップページはJIN:RやTHE THORなどのテーマを契約者向けの特別割引で並べ続けており、テーマは品揃えを絞りつつ、報酬の上乗せは自社のAIツールに寄せる動きとも読める。パートナープログラムの継続報酬15%は、制作会社にとってクライアントの更新のたびに入る収入になり、エックスサーバーの取次制度と同じく、法人サイトの置き場所を制作会社経由で押さえる仕組みだ。
:::

ConoHa WINGは、共用サーバーの中では珍しい時間課金を残し、LiteSpeed LSAPIとnginxで「国内最速」を8年間名乗り続け、WordPressの設置から高速化までをスイッチにしてきたサービスだ。2026年の夏から秋には、SSHの一時停止、DBホストの故障、426件への不正アクセスと、共用サーバーが抱える弱さが続けて表に出た。同じ時期に公開したAIエージェント向けの入口は、削除もWordPressもデータベースも触れない、FTPSの狭い一本道だった。VPSではMCPとコネクタで操作を開け、共用サーバーでは「壊せない操作」だけを渡す。その線引きが、月額649円の置き場所を守る選び方として続くのか、それともエージェントが手順で選ぶ時代に狭すぎる入口になるのか。次の勝負はそこにある。
