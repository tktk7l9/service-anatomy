---
title: "ConoHa VPS vs XServer VPS — 時間課金を残すGMOのVPSと、前払いで売るエックスサーバーのVPSは、値札、2026年の受付、AIエージェントに渡す操作、紹介の報酬で分かれる"
description: "国内の二つのVPS、GMOインターネットのConoHa VPSとエックスサーバーのXServer VPSを、2026年10月13日時点の公式の料金・仕様のページ、キャンペーン、お知らせとリリースノート、APIとMCPとCLIのドキュメント、GPUのページ、アフィリエイトのページ、会社の沿革、プレスリリースで比較する。ConoHa VPSは2013年7月に始まり、1時間単位の時間課金（月額に上限あり）と、期間分を前払いする「まとめトク」を並べる。XServer VPSは2022年9月に始まり、標準のプランを1か月から36か月の前払いで売る。メモリ2GBのプランは、ConoHaがvCPU 3コア・SSD 100GB、XServerが3コア・NVMe SSD 50GBで、36か月前払いの月額は、ConoHaの更新時903円（10月29日16時までの初回は677円）に対してXServerが1,265円。XServer VPSは2026年7月から10月にかけて、無料VPSと2GBプランの新規受付の一時停止、9月1日の値上げ、9月17日から10月6日までの新規受付の一時停止を経た（無料VPSとビジネスプランは10月6日の時点でも停止中）。AIエージェントに対しては、ConoHaがリモートMCPとClaudeのコネクタにはサーバーの作成まで許し、ChatGPTのプラグインからは作成とリサイズを外した。XServerは、リモートのMCP（コネクタ）から課金を伴う操作を外し、ローカルのMCPでは新規申し込みを初期設定で無効にし、CLIの課金を伴う申請を対話端末に限る。会社、値札、2026年の受付、AIエージェントへの入口、紹介の仕組み、技術構成の重なりを同じ項目で並べる。"
lead: "ConoHa VPSの料金表には、1か月から36か月までのまとめトクの月額と、1時間あたりの値段（1か月の上限つき）が並ぶ。XServer VPSの料金表には、契約期間ごとの月額だけが並ぶ。2013年に始まったGMOのVPSと、レンタルサーバーのエックスサーバーが2022年に始めたVPSは、同じメモリ2GBの段でも、値段の付け方、2026年の受付の動き、AIエージェントにどこまでの操作を任せるかが違う。両方の公式ページを同じ日に読み、どこが同じでどこが違うのかを並べる。"
slugA: "conoha-vps"
slugB: "xserver-vps"
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-29"
    claim: "ConoHa VPSのまとめトクのキャンペーン（10月29日16時まで）と、その初回価格（1か月・36か月）を使った比較"
sources:
  - label: "ConoHa VPS公式: 料金・スペック（時間課金・まとめトク）"
    url: "https://vps.conoha.jp/pricing/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: Happy Halloweenキャンペーン（2026年10月29日16時まで）"
    url: "https://vps.conoha.jp/campaign/special/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: Terraform Provider（API経由で作成したサーバーの課金）"
    url: "https://vps.conoha.jp/terraform_provider/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: GPUサーバー"
    url: "https://vps.conoha.jp/gpu/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: GPUサーバーのご利用の流れ（時間課金への自動切り替え）"
    url: "https://vps.conoha.jp/gpu/flow/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: アフィリエイトプログラム（A8.net・もしもアフィリエイト）"
    url: "https://vps.conoha.jp/affiliate/"
    accessedAt: "2026-10-13"
  - label: "ConoHaドキュメント: リリースノート"
    url: "https://doc.conoha.jp/release-notes/"
    accessedAt: "2026-10-13"
  - label: "ConoHaドキュメント: ConoHa VPS MCP Server リモート版"
    url: "https://doc.conoha.jp/reference/mcp-server/remote-mcp/conoha-vps-mcp-server-remote/"
    accessedAt: "2026-10-13"
  - label: "ConoHa公式: 企業情報（GMOインターネット株式会社）"
    url: "https://www.conoha.jp/company/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: 旧会社の沿革（2025年1月1日の組織再編前の各社沿革）"
    url: "https://internet.gmo/company/history/archive/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: 『ConoHa VPS byGMO』、国内クラウド事業者で初めて Anthropic「Claude」のコネクタを提供開始（2026-08-12）"
    url: "https://internet.gmo/news/article/218/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: ConoHa VPS byGMOが「ChatGPT」対応プラグイン提供開始（2026-09-01）"
    url: "https://internet.gmo/news/article/224/"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: 料金・仕様一覧"
    url: "https://vps.xserver.ne.jp/price.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: XServer VPSについて（国内の自社データセンター）"
    url: "https://vps.xserver.ne.jp/xserver-vps.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: GPUサーバー（XServer VPS for GPU）"
    url: "https://vps.xserver.ne.jp/gpu.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: アフィリエイト（A8.netの成果報酬）"
    url: "https://vps.xserver.ne.jp/affiliate.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPSのニュース: 無料プランにおける新規受付の一時停止（2026-07-10）"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=18884"
    accessedAt: "2026-10-13"
  - label: "XServer VPSのニュース: 2GBプランの新規受付停止および一部提供内容の変更（2026-07-14）"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=18920"
    accessedAt: "2026-10-13"
  - label: "XServer VPSのニュース: 【重要】利用料金の改定について（2026-08-03・9月1日実施）"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19107"
    accessedAt: "2026-10-13"
  - label: "XServer VPSのニュース: 新規受付の一時停止（2026-09-18・10月6日追記）"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19471"
    accessedAt: "2026-10-13"
  - label: "XServer VPSのニュース: 新規受付の再開（2026-10-06）"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19612"
    accessedAt: "2026-10-13"
  - label: "XServer VPSのニュース: 「XServer API」に対応（2026-09-08）"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19395"
    accessedAt: "2026-10-13"
  - label: "XServer VPSサポートサイト: XServer MCP Server"
    url: "https://vps.xserver.ne.jp/support/manual/man_tool_mcp.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPSサポートサイト: XServer MCP Server リモート版"
    url: "https://vps.xserver.ne.jp/support/manual/man_tool_mcp_remote.php"
    accessedAt: "2026-10-13"
  - label: "XServer 開発者ドキュメント: APIリファレンス（VPS管理）"
    url: "https://developer.xserver.ne.jp/api/vps/"
    accessedAt: "2026-10-13"
  - label: "XServer 開発者ドキュメント: CLIリファレンス（VPS管理）"
    url: "https://developer.xserver.ne.jp/cli/vps/"
    accessedAt: "2026-10-13"
  - label: "エックスサーバー株式会社: 沿革"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-10-13"
---

[ConoHa VPS](/ja/articles/conoha-vps)と[XServer VPS](/ja/articles/xserver-vps)は、root権限のある仮想専用サーバーを借りたい個人や小さな事業者に向けた、国内の二つのVPSだ。2本の解剖記事を重ねると、違いはサーバーの性能の数字よりも、値段を時間でも付けるか期間だけで付けるか、2026年の受付をどう動かしたか、AIエージェントにどこまでの操作を任せるかに出ている。

この記事は、両サービスの公式ページを2026年10月13日に読み直してまとめた。当サイトは両方を同じ条件で借りて速度や安定性を測ってはおらず、使い心地の優劣は扱わない。料金はすべて税込だ。

## 会社と基盤：2013年からのGMOのVPSと、2022年からのエックスサーバーのVPS

:::fact
GMOインターネットの旧会社の沿革（2026-10-13時点）によれば、2013年7月に「GMOインターネット（株）（現・GMOインターネットグループ（株））」がVPSの新ブランド「ConoHa byGMO」の提供を始めた。ConoHaの企業情報のページによれば、いまの運営会社はGMOインターネット株式会社だ。ConoHa VPSの料金・スペックのページは、クラウド基盤をOpenStackとし、メモリ512MBから128GBまでの9つのプランを載せる。エックスサーバー株式会社の沿革によれば、同社は2022年9月に『Xserver VPS』の提供を始め、2023年にWindows搭載のVPSとゲーム専用のVPSを、2026年8月に複数台の構成を自動で組む『XServer VPS クラウド』を加えた。XServer VPSの紹介のページは、国内の自社データセンターでサーバーを運用すると書き、料金・仕様一覧は、標準のプランをメモリ2GBから64GBまでの6つとする。
:::

| 項目 | ConoHa VPS | XServer VPS |
| --- | --- | --- |
| 始まり | 2013年7月（「ConoHa byGMO」として） | 2022年9月 |
| 運営 | GMOインターネット株式会社 | エックスサーバー株式会社 |
| 基盤として書かれているもの | OpenStack | 国内の自社データセンター |
| メモリの段（標準のプラン） | 512MBから128GBまでの9つ | 2GBから64GBまでの6つ |

:::pull
同じメモリ2GBでも、片方は時間でも期間でも値段を付け、もう片方は期間だけで値段を付ける。AIエージェントに任せる操作も、別々の線で区切られている。
:::

## 値札：時間課金の上限と、前払いの月額

:::fact
ConoHa VPSの料金・スペックのページ（2026-10-13確認）によれば、時間課金は1時間あたりの料金で、1か月使っても月額の上限を超えては請求されない。メモリ2GB（vCPU 3コア・SSD 100GB）は1時間3.7円・上限は月2,033円、4GB（4コア・SSD 100GB）は1時間6.6円・上限は月3,608円だ。もう一つの「まとめトク」は1・3・6・12・24・36か月の利用期間分を一括で前払いする料金で、月単位の分割払いと期間中の途中解約はできない。月額は、1か月契約が2GBで更新時1,259円、4GBで更新時2,189円、36か月契約が2GBで更新時903円、4GBで更新時1,691円。キャンペーンのページによれば、2026年10月29日16時までの「Happy Halloweenキャンペーン」では、まとめトクの初回契約時の料金が下がり、初回は1か月契約で2GBが1,007円、4GBが1,752円、36か月契約で2GBが677円、4GBが1,285円で、まとめトクは時間課金と比べて最大66%OFF（2GBプランの場合）とされる。全プランで初期費用は無料だ。XServer VPSの料金・仕様一覧（同日確認）によれば、メモリ2GB（vCPU 3コア・NVMe SSD 50GB）は36か月契約で月1,265円、1か月契約で月1,980円、4GB（4コア・NVMe SSD 150GB）は36か月契約で月2,035円、1か月契約で月2,640円で、初回契約時と契約更新時の表に同じ金額が並ぶ。支払いは契約期間分の一括前払いで、初期費用は0円だ。
:::

| 税込 | ConoHa VPS | XServer VPS |
| --- | --- | --- |
| 2GBプランの構成 | vCPU 3コア・SSD 100GB | vCPU 3コア・NVMe SSD 50GB |
| 2GBを1か月使う | 時間課金なら月2,033円が上限（1時間3.7円）、まとめトクの1か月契約なら更新時1,259円（10月29日16時までの初回は1,007円） | 1か月契約で月1,980円 |
| 2GBを36か月前払い（月額） | まとめトクの更新時903円（10月29日16時までの初回は677円） | 1,265円（初回・更新とも） |
| 4GBプランの構成 | vCPU 4コア・SSD 100GB | vCPU 4コア・NVMe SSD 150GB |
| 4GBを1か月使う | 時間課金なら月3,608円が上限（1時間6.6円）、まとめトクの1か月契約なら更新時2,189円（同じく初回は1,752円） | 1か月契約で月2,640円 |
| 4GBを36か月前払い（月額） | まとめトクの更新時1,691円（同じく初回は1,285円） | 2,035円（初回・更新とも） |

:::guess
1か月だけ使う場合、ConoHaの時間課金の上限と比べれば、XServerの1か月契約が2GBで53円、4GBで968円安いが、ConoHaのまとめトクの1か月契約と比べると、更新時の価格でもConoHaが2GBで721円、4GBで451円安い（10月29日16時までの初回なら973円と888円）。36か月を前払いする場合も、更新時の価格で2GBでConoHaが362円、4GBでConoHaが344円安い（いずれも当サイトの計算）。ただしSSDの容量は2GBではConoHaが、4GBではXServerが大きく、同じ段でも中身が揃っていない。ConoHaは時間課金で短い利用と試しの利用を受け止め、まとめトクで期間分を前払いする客に割り引く二本立てで、キャンペーンも初回に寄せているとみられる。XServerは初回と更新の値段を揃え、期間を長くするほど安くなる一本の表で売っているとみられる。どちらが安いかは、使う期間とメモリの段、キャンペーンの有無で入れ替わるため、申し込む日の両方の料金のページで確かめたい。
:::

## 2026年の受付：在庫で止まったXServer

:::fact
XServer VPSのお知らせ（2026-10-13確認）によれば、2026年7月10日に、想定を上回る申し込みでサーバー在庫がひっ迫しているとして無料VPSの新規受付を一時停止し、7月14日には、機器の調達コストの高騰と想定を上回る申し込みを理由に、2GBプランの新規受付を一時停止した。8月3日のお知らせは、世界的なサーバー機器の需要拡大などを背景に機器の調達コストが大幅に高騰したとして、9月1日から初回契約時と契約更新時の月額料金を改め、2GBの36か月契約は990円から1,265円になった。9月18日のお知らせは、9月17日から新規の申し込みの受付を一時停止したと告げ（契約中の利用者の追加の申し込みは受け付ける）、10月6日のお知らせは、同日17時に受付を再開し、ビジネスプランと無料VPSは引き続き新規受付を一時停止していると書く。10月13日の料金・仕様一覧は、2GBプランを申し込みのリンク付きで載せていた。ConoHa VPSのキャンペーンのページは、同じ10月に、まとめトクが時間課金と比べて最大66%OFFになるキャンペーンを10月29日16時まで行うと案内している。
:::

:::guess
XServer VPSは、入口の安いプランから受付を絞り、値上げと受付の一時停止で、機器の調達と在庫の制約を値札と受付に映したと読める。同じ10月に、ConoHa VPSはまとめトクのキャンペーンで初回の値段を下げており、機器の値上がりの中でも、在庫と値付けの事情は会社ごとに違うとみられる。
:::

## AIエージェントへの入口：課金を伴う操作の線の引き方

:::fact
ConoHaのリリースノートとMCPのドキュメント（2026-10-13確認）によれば、ConoHa VPSは2026年7月7日にリモート版のMCPサーバーを始め、どのクライアントからも `https://api.conoha.jp/vps/mcp` に接続し、ConoHaアカウントで認可する。2026年8月12日のプレスリリースは、Claudeのコネクタの提供開始を告げ、「Ubuntu 24.04でメモリ1GBのサーバーを作成して」のように日本語で指示してVPSを操作できると書く。9月1日のプレスリリースは、ChatGPT向けのプラグインからは、料金が新たに発生する操作（サーバーとボリュームの新規作成、サーバーのリサイズ）は行えないため、プラグインの利用によって料金が変動することはないと説明する。Terraform Providerのページによれば、API経由で作成したサーバーは時間課金になり、まとめトクは使えない。XServer VPSの2026年9月8日のお知らせによれば、「XServer API」の対応サービスにXServer VPSが加わった（Windows ServerとGPUサーバーでは新規申し込みのAPIは使えない）。APIリファレンスによれば、APIキーはBearerトークンとして送り、レート制限はアカウント単位で毎分60・1日10,000・同時接続5、新規申し込みには課金せずに受付の可否を確かめる dry_run、実申請に必須の Idempotency-Key、見積額を指定する expected_total_price がある。MCPのマニュアルによれば、利用者のPCで動かすMCPサーバーでは、新規申し込みとOS再インストールの実行機能が初期設定で無効になっており、APIキーの権限と環境変数 `XSERVER_MCP_ENABLE_HIGH_RISK_EXECUTE` の両方を設定したときだけ使える。リモート版は `https://api.xserver.ne.jp/mcp` をコネクタとして追加し、XServerアカウントにログインして連携の範囲を許可する方式で、そのマニュアルは、課金を伴う操作はコネクタ経由では使えないと書く。CLIのリファレンスは、課金を伴う実申請は対話端末でのみ実行でき、`--yes` では確認を省略できないと書く。
:::

| 項目 | ConoHa VPS | XServer VPS |
| --- | --- | --- |
| API | OpenStack準拠の公開API（APIで作ったサーバーは時間課金） | XServer API（VPSは2026年9月8日から、毎分60・1日10,000・同時接続5） |
| リモートのMCPサーバー | `https://api.conoha.jp/vps/mcp`（2026年7月7日から、ConoHaアカウントで認可） | `https://api.xserver.ne.jp/mcp`（XServerアカウントにログインして許可、課金を伴う操作は不可） |
| 課金を伴う操作 | Claudeのコネクタでは作成を案内、ChatGPTのプラグインでは新規作成とリサイズを外す | リモートのMCP（コネクタ）では不可、ローカルのMCPは新規申し込みを初期設定で無効、CLIの実申請は対話端末のみ、APIは dry_run と見積額の指定 |

:::guess
二社とも、AIエージェントが利用者の意図を超えて課金することを防ぐ線を引いているとみられ、どちらも窓口ごとに許す操作を変えている。ConoHaは利用者層の広いChatGPTのプラグインから、XServerはリモートのコネクタから、課金を伴う操作を外した。XServerはそのうえで、ローカルのMCP、API、CLIでは新規申し込みに明示の許可や金額の確認を求めており、操作の範囲に加えて、申し込みの手続きにも歯止めを置いていると読める。違いは、ConoHaがClaudeのコネクタにはサーバーの作成まで渡している点に表れている。
:::

## 紹介の仕組み：A8.netの報酬表

:::fact
ConoHa VPSのアフィリエイトのページ（2026-10-13確認）は、A8.netともしもアフィリエイトを案内し、「長期割引パスの成果報酬」として、2GBが1か月の契約で1,100円・3か月以上で2,000円、4GBが2,100円・3,600円などと載せ、この表は一部の抜粋だと注記する。XServer VPSのアフィリエイトのページは、A8.netでの成果報酬を、2GBが1か月契約で1,046円・3か月以上で1,569円、4GBが2,000円・3,000円などとする。
:::

| 成果報酬（1件あたり） | ConoHa VPS（表の見出しは「長期割引パス」） | XServer VPS |
| --- | --- | --- |
| ASP | A8.net、もしもアフィリエイト | A8.net |
| 2GB（1か月／3か月以上） | 1,100円／2,000円 | 1,046円／1,569円 |
| 4GB（1か月／3か月以上） | 2,100円／3,600円 | 2,000円／3,000円 |

:::guess
2GBと4GBのどちらの段でも、成果報酬はConoHaの方が高い。紹介記事の書き手にとっては実入りの差になるため、どちらの紹介記事を読むときも、報酬の仕組みがあることを前提に、時間課金と前払いのどちらで、何か月使うつもりなのかに合わせて料金を確かめたい。
:::

## 技術構成の重なりは1件

このページの下に出る技術構成の比較は、2本の記事のtechStackを機械的に突き合わせたものだ。共通と判定されたのは、GPUサーバーに載るNVIDIA L4 TensorコアGPUの1件だけだ。

:::fact
ConoHa VPSのGPUサーバーのページ（2026-10-13確認）は、NVIDIA L4（GPU搭載メモリ24GB）1枚の構成を、20vCPU・メモリ128GBで1時間154.0円（月90,200円）、4vCPU・メモリ16GBの構成で1時間60.5円（月36,300円）とする。XServer VPSのGPUサーバーのページは、NVIDIA L4 TensorコアGPU 1枚、vCPU 24コア、メモリ120GBの構成を1時間150円、月の上限88,000円とし、サーバーの停止中も課金されると注記する。ConoHaのGPUサーバーのご利用の流れのページは、1か月に満たない利用は時間単位の課金へ自動的に切り替わり、常に一番安い料金になるように計算されると書く。
:::

ConoHaがGPUサーバーでも時間単位の課金を使うのに対し、XServer VPSは標準のプランを前払いで売りながら、GPUサーバーは時間で貸している。どちらも、使う時間の読めない用途には時間課金を当てているとみられる。

選ぶ側の問いは、どれだけの期間、どの窓口から使うかで分けられる。数日から数週間だけ試したい、APIやTerraformで台数を増減させたい、まとめトクのキャンペーンに合わせて長く借りたい、という人には、時間課金と前払いを選べるConoHa VPSが候補になる。初回と更新の値段が同じ方がいい、ローカルのMCPやCLIで申し込みの手順に確認を挟みたい、という人には、XServer VPSが候補になる。同じVPSという商品を分けているのは、サーバーの部品よりも、値段を時間でも刻むか期間だけで刻むかと、課金を伴う操作にどこで歯止めを置くかという設計とみられる。
