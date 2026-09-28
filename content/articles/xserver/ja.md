---
service: "エックスサーバー"
title: "月495円の共用サーバーがAIエージェントに開いた — エックスサーバーは国内シェア30%の「WordPressの置き場所」をAPIとMCPで作り直している"
description: "国内シェアNo.1をうたうレンタルサーバー、エックスサーバー。大阪で2003年に始まり、運用サイト数250万件・売上83億円の規模になった共用サーバーの老舗が、2026年にREST API・CLI・公式MCPサーバーを相次いで公開した。nginxとApacheを併用するWebサーバー、第5世代EPYCとNVMeの新サーバー、無料テーマCocoonの事業譲受、長期前払いの料金設計、A8.netの成果報酬とお友達紹介の20%までを、公式ニュース・マニュアル・会社情報から解剖する。"
lead: "「example.comというドメインを追加して、WordPressをインストールして」——2026年5月、エックスサーバーは公式のお知らせに、AIアシスタントへこう頼むだけでサーバーが設定される、と書いた。月額換算495円から使える共用サーバーで、国内シェアNo.1をうたい、WordPressサイトの置き場所として定番になった会社が、管理画面の外にAPIとMCPの入口を開けた。23年続く共用サーバーの設計と稼ぎ方を解剖する。"
category: dev-tool
tags: [hosting, wordpress, api, mcp, small-business]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.xserver.ne.jp/"
# Affiliate link placeholder: the owner must join the Xserver program on A8.net
# (see https://www.xserver.ne.jp/affiliate.php — flat reward per contract by plan) before enabling this block.
# Do not use the "friend referral" URL here: its terms forbid spreading the link to an
# unspecified audience on blogs or social media, and it cannot be combined with an ASP.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<xserver-a8-tracking-link>"
#   program: "Xserver Affiliate Program (A8.net)"
vendor: "エックスサーバー株式会社"
origin: "JP"
heroTheme: "xserver"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 4.5 }
techStack:
  - layer: "Webサーバー"
    name: "nginx + Apache 2.4 (.htaccess compatible)"
    confidence: confirmed
    evidence: "公式マニュアルの仕様一覧に、ウェブサーバーとして「apache 2.4.x、nginx」を明記。nginxの解説ページは、nginx環境でもApache向けの.htaccessをそのまま使えると書く。当サイトの観測（2026-09-28）でも、共用サーバーのホスト名（sv13001.xserver.jp など）が HTTP/2 で server: nginx を返した"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_server_spec.php"
  - layer: "サーバー機器"
    name: "AMD EPYC (5th gen) / all-NVMe RAID10"
    confidence: confirmed
    evidence: "公式ニュース（2026-03-27）に、新規申込のサーバーで第5世代EPYCを採用しCPU性能が従来比で最大約40%向上、搭載メモリを1.5TBから2.3TBに増強したと明記。仕様一覧はRAID構成をRAID10とする"
    evidenceUrl: "https://www.xserver.ne.jp/news_detail.php?view_id=17933"
  - layer: "データベース"
    name: "MariaDB 10.11"
    confidence: confirmed
    evidence: "公式ニュース（2026-05-11）に、新規受付サーバーのデータベースをMariaDB 10.5から10.11（LTS）へ変更し、2024年6月以降に発行したサーバーも2026年6月以降に順次更新すると明記"
    evidenceUrl: "https://www.xserver.ne.jp/news_detail.php?view_id=18377"
  - layer: "高速化"
    name: "X Accelerator / XPageSpeed (in-house)"
    confidence: confirmed
    evidence: "公式マニュアルに、Ver.1は静的ファイルのサーバー側キャッシュ（保存期間2分）、Ver.2はそれに加えてPHPプログラムの高速化を行うと明記。WordPressのログイン中のCookieや /wp-admin/ などはキャッシュしない条件も公開している"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_server_xaccelerator.php"
  - layer: "外部API"
    name: "XServer API (REST, scoped API keys)"
    confidence: confirmed
    evidence: "公式ニュース（2026-04-16）でサーバーパネルの主要操作をREST APIとして公開。マニュアルは、キーごとの権限（すべて・読み取り専用・カスタム）とIP制限、プラン別のレート制限（スタンダードで毎分60・1日1万リクエスト）を明記"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_tool_api.php"
  - layer: "AIエージェント連携"
    name: "XServer MCP Server (npm: xserver-mcp / remote OAuth at api.xserver.ne.jp/mcp)"
    confidence: confirmed
    evidence: "公式ニュース（2026-05-12）でMCPサーバーとCLIを公開。リモート版のマニュアルは、https://api.xserver.ne.jp/mcp をClaudeのコネクタに追加し、XServerアカウントにログインして連携範囲を許可する方式を明記。npmのxserver-mcpはMITライセンスで、保守者は developer@xserver.co.jp"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_tool_mcp_remote.php"
  - layer: "CLI"
    name: "XServer CLI (Node.js 18+)"
    confidence: confirmed
    evidence: "公式マニュアルに、XServer APIをターミナルから操作する公式CLIで、Node.js v18以上とAPIキーが必要、CI/CDパイプラインにも組み込めると明記"
    evidenceUrl: "https://www.xserver.ne.jp/manual/man_tool_cli.php"
  - layer: "ネットワーク"
    name: "In-house backbone network (1Tbps+ external capacity)"
    confidence: confirmed
    evidence: "公式サイトのトップに、対外接続容量1Tbps超の自社専用バックボーンネットワークを持つと明記"
    evidenceUrl: "https://www.xserver.ne.jp/"
  - layer: "自社開発の言語"
    name: "PHP"
    confidence: speculative
    evidence: "公式の採用サイトの「数字で見るエックスサーバー」で、エンジニア職の好きな開発言語の1位がPHP（45%）、2位がPython（17%）。これは好みのアンケートで、管理画面やAPIの実装言語の公式な明言は見当たらない"
    evidenceUrl: "https://www.xserver.co.jp/recruit/infographic"
sources:
  - label: "エックスサーバー株式会社: 会社概要（設立2004年1月23日・資本金・事業内容）"
    url: "https://www.xserver.co.jp/overview.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー株式会社: 沿革（2003年7月のサービス開始から2026年まで）"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー株式会社: グループ会社一覧"
    url: "https://www.xserver.co.jp/companies.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー株式会社 採用サイト: 数字で見るエックスサーバー（売上・従業員数・職種比率）"
    url: "https://www.xserver.co.jp/recruit/infographic"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー株式会社: コーポレートサイト（国内シェア・速度No.1の注記）"
    url: "https://www.xserver.co.jp/"
    accessedAt: "2026-09-28"
  - label: "W3Techs: 日本にサーバーを置くWebサイトのホスティング事業者シェア"
    url: "https://w3techs.com/technologies/segmentation/sl-jp-/web_hosting"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式: トップページ（導入企業・運用サイト数・自社バックボーン）"
    url: "https://www.xserver.ne.jp/"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式: 料金プラン"
    url: "https://www.xserver.ne.jp/price/"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: 半額キャッシュバックキャンペーン（2026-09-07）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=19393"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: 1・3・6ヶ月の自動更新の月額料金の見直し（2025-10-31）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=16855"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: ご契約者さま限定割引の提供開始（2025-12-01）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=17117"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式マニュアル: 仕様一覧"
    url: "https://www.xserver.ne.jp/manual/man_server_spec.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式マニュアル: nginxについて"
    url: "https://www.xserver.ne.jp/manual/man_server_nginx.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式マニュアル: Xアクセラレータ"
    url: "https://www.xserver.ne.jp/manual/man_server_xaccelerator.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: 第5世代EPYCの新サーバー環境（2026-03-27）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=17933"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: MariaDB 10.11への対応（2026-05-11）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18377"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: KUSANAGIの技術と最新サーバー機器を導入（2021-10-07）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=8186"
    accessedAt: "2026-09-28"
  - label: "GMOプライム・ストラテジー: エックスサーバーにKUSANAGIの高速化技術が採用（2021-10-07）"
    url: "https://www.prime-strategy.co.jp/information/xserver_20211007/"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: GMOプライム・ストラテジーとの技術提携終了（2026-06-10）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18634"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: XServer APIの提供開始（2026-04-16）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18133"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: サイト作成・公開スキルを公開（2026-04-28）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18254"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: XServer MCP Server・XServer CLIの提供開始（2026-05-12）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18397"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: サーバーの新規申込・契約管理APIを追加（2026-08-26）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=19291"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式マニュアル: XServer API（権限・レート制限）"
    url: "https://www.xserver.ne.jp/manual/man_tool_api.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式マニュアル: XServer MCP Server"
    url: "https://www.xserver.ne.jp/manual/man_tool_mcp.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式マニュアル: XServer MCP Server リモート版"
    url: "https://www.xserver.ne.jp/manual/man_tool_mcp_remote.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式マニュアル: XServer CLI"
    url: "https://www.xserver.ne.jp/manual/man_tool_cli.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: AIクローラー遮断設定の提供開始（2026-01-07）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=17401"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式マニュアル: AIクローラー遮断設定（遮断対象の一覧）"
    url: "https://www.xserver.ne.jp/manual/man_server_ai_crawler.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: WordPressテーマCocoonの開発事業を譲受（2022-09-07）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=9635"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式ニュース: Cocoon開発者との協力体制を強化（2025-02-27）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=14852"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式: アフィリエイト（A8.netの成果報酬）"
    url: "https://www.xserver.ne.jp/affiliate.php"
    accessedAt: "2026-09-28"
  - label: "エックスサーバー公式: お友達紹介プログラム"
    url: "https://www.xserver.ne.jp/friend.php"
    accessedAt: "2026-09-28"
  - label: "XServerビジネス公式: ビジネスパートナープログラム（取次制度）"
    url: "https://business.xserver.ne.jp/partner/"
    accessedAt: "2026-09-28"
---

日本で個人がブログを始めるとき、あるいは中小企業がホームページを作るとき、サーバー選びの記事で最初に名前が挙がることが多いのがエックスサーバーだ。派手な新興クラウドではない。月額換算で1,000円前後の共用サーバーを、23年間売り続けてきた大阪の会社である。その会社が2026年、管理画面を経由せずにAIエージェントからサーバーを操作できる入口を、立て続けに開けた。

## サービス解説

エックスサーバーは、1台のサーバーを多数の契約者で共有する「共用レンタルサーバー」だ。契約すると、Webサイト用の領域、独自ドメイン、メールアカウント、データベースがまとめて使えるようになり、WordPressは管理画面から数クリックで設置できる。運営するエックスサーバー株式会社は、同じ基盤の上に法人向けの「XServerビジネス」、VPS、ドメイン取得の「Xserverドメイン」、WordPressテーマ「Xwrite」なども展開している。

:::fact
コーポレートサイトの沿革によれば、エックスサーバーは2003年7月に屋号として始まり、同時に共用レンタルサーバーの提供を開始した。2004年1月に有限会社ベットを設立し、2012年7月に「エックスサーバー株式会社」へ商号を変更、2013年5月に本社を大阪・梅田のグランフロント大阪へ移した。会社概要によれば資本金は1億円（資本準備金含む）、代表取締役は小林尚希氏。採用サイトの「数字で見るエックスサーバー」は、売上高を83億5,442万円（2025年3月期）、21期連続の増収、従業員数を255名（2026年4月1日時点）とし、職種比率はエンジニア職が46%と最も多い。グループには、クラウドインフラの設計・保守を担うエックスサーバーネットワークス、ドメインを扱うXRegistry、カスタマーサービスのXSカスタマーサービスなどがある。
:::

:::fact
公式サイトは「国内シェアNo.1」「導入企業26万社」「運用サイト数250万件」を掲げる。シェアの根拠として、コーポレートサイトはW3Techsの2026年6月時点の調べを挙げ、WordPressサイトに限ったシェアNo.1についてはDataprovider.comの2025年6月の調べ（国内のWordPressサイトのDNSのNSを集計）を挙げている。当サイトが2026年9月28日に確認したW3Techsの集計では、日本にサーバーを置くWebサイトのうち、XServerが30.4%、GMOインターネットグループが25.8%、さくらが19.0%を占めていた。
:::

:::pull
派手な機能ではなく、「WordPressを置く場所」として選ばれ続けること。エックスサーバーはそれを23年、共用サーバーという古い形のまま磨いてきた。
:::

::scorecard

## UX分析

エックスサーバーのUXは、「サーバーの知識がない人が、迷わずWordPressを公開できること」を中心に組み立てられている。その上に2026年、開発者とAIエージェント向けの入口が足された。

- **WordPressまでの距離を縮める**。公式サイトは、申し込みと同時にWordPressを設置する「WordPressクイックスタート」、他社サーバーのWordPressを自動で移す「WordPress簡単移行」、人気テーマを管理画面から入れる「WordPressテーマインストール」を並べる。無料テーマCocoonと有料テーマXwriteも自社で抱え、プレミアム以上のプランでは通常年9,900円のXwriteを無料にしている。
- **Apache向けの設定をそのまま生かす**。仕様一覧によれば、WebサーバーはApache 2.4系とnginxの併用で、nginxの解説ページは「nginx環境下においても、Apache環境下で設定された.htaccessファイルをそのまま利用できる」と書く。ネット上に大量にあるApache前提の設定例を、利用者が書き換えずに使える。
- **速さを「スイッチ1つ」にする**。独自機能のXアクセラレータは、Ver.1で静的ファイルをサーバー側で2分間キャッシュし、Ver.2ではPHPの実行も速くする。WordPressにログイン中のCookieや /wp-admin/、カート画面などはキャッシュしない条件がマニュアルに列挙されていて、初心者が有効にしても管理画面が壊れにくい設計になっている。
- **AIとの距離を選ばせる**。2026年1月には、GPTBot・ClaudeBot・Google-Extended・PerplexityBotなどのAIクローラーをドメイン単位で一括遮断する設定を追加した。初期状態はオフで、お知らせには「有効にするとAI検索の回答で情報源として引用されなくなる」という代償も明記している。
- **AIエージェントからの操作を許す**。2026年4月にREST APIを、4月28日に「サイト作成・公開スキル」（Claude CodeやCursorに読ませるSKILL.md）を、5月にMCPサーバーとCLIを公開した。リモート版のMCPサーバーは、Claudeのコネクタに https://api.xserver.ne.jp/mcp を追加し、XServerアカウントにログインして連携範囲を許可するだけで使える。APIキーをローカルに置く必要がない。

:::fact
公式マニュアルによれば、XServer APIのキーは発行時に1回だけ全文が表示され（xs_ で始まる文字列）、キーごとに有効期限、アクセス元IPアドレス、操作権限（すべての操作・読み取り専用・カスタム）を指定できる。レート制限はサーバーアカウント単位で、スタンダードが毎分60・1日1万リクエスト・同時接続5、プレミアムが毎分120・1日3万、ビジネスが毎分300・1日10万。2026年8月26日の公式ニュースでは、サーバーの新規申し込みと契約管理のAPIが加わり、API経由の申し込みはプリペイド残高から引き落とされ、無料お試し期間は適用されないと明記された。キーでサーバーの新規申し込みを許可するには、プリペイド残高が2万円以上ある必要がある。
:::

## 技術構成

::techstack

:::fact
公式ニュース（2026年3月27日）によれば、新規申し込みのサーバーでは第5世代のAMD EPYCを採用し、CPU性能は当社従来比で最大約40%向上、搭載メモリは1.5TBから2.3TBに増えた。ストレージは全台がNVMeで、仕様一覧はRAID構成をRAID10とする。データベースは2026年5月11日から新規サーバーでMariaDB 10.11（長期サポート版）に切り替わった。公式サイトのトップは、対外接続容量1Tbps超の自社専用バックボーンネットワークを持つと書く。仕様一覧の「リソース保証」では、sv13001以降のサーバーでスタンダードプランに仮想6コア・メモリ8GBを保証しており、共用サーバーでありながら1契約あたりの取り分を数字で示している。
:::

:::fact
2021年10月7日の公式ニュースによれば、エックスサーバーは同年5月に、WordPress実行環境「KUSANAGI」を開発するプライム・ストラテジー社（現GMOプライム・ストラテジー）と戦略的提携を結び、その高速化技術と第3世代EPYCを備えた「1台あたり1,000万円を超える」サーバーを導入した。ところが2026年6月10日、エックスサーバーは同社との技術提携を終了したと発表した。理由は「今後のサービス運営方針を踏まえ」とだけ書かれ、利用者の環境や手続きに変更はないとしている。
:::

:::guess
提携終了のお知らせは、利用者の環境が変わらないと明言している。KUSANAGI由来の高速化はすでに自社のサーバー環境に組み込まれていて、以後の改良は自社の開発チームで回せる段階に来た、という判断とみられる。同じ2026年に、第5世代EPYCの新サーバー、MariaDB 10.11への移行、API・CLI・MCPの公開を立て続けに出していることからも、基盤の作り込みを自社に寄せる方向がうかがえる。
:::

:::guess
当サイトの観測（2026-09-28）では、共用サーバーのホスト名（sv13001.xserver.jp、sv16001.xserver.jp）はHTTP/2で server: nginx を返した。一方、公式サイト（www.xserver.ne.jp）やAPIのドキュメントサイト、api.xserver.ne.jp/mcp は server: Apache を返し、MCPのエンドポイントはPOSTだけを受け付けた。利用者のサイトの前段にはnginxを置いて静的ファイルと同時接続をさばき、PHPの処理と.htaccessの解釈はApacheに任せる、という2段の構成と推測される。採用サイトのアンケートでエンジニアの好きな言語の1位がPHPであることも合わせると、APIやMCPのエンドポイントも、長年の管理画面と同じPHPとApacheの資産の上に作られている可能性がある。
:::

:::fact
npmに公開されている公式MCPサーバー xserver-mcp は、2026年4月22日に登録され、9月8日に1.5.0が出ている。ライセンスはMITで、保守者のアドレスは developer@xserver.co.jp。マニュアルには、Cursor・Claude Desktop・VS Code（GitHub Copilot）・Claude Code・Codexそれぞれの設定例が並ぶ。MCPサーバーから使える機能はXServer APIの公開範囲と同じで、ドメイン・サブドメイン・無料SSL・DNSレコード・メールアカウント・WordPressのインストール・MySQL・FTP・SSH鍵・Cron・PHPバージョン・アクセスログとエラーログの取得までをカバーする。
:::

## ビジネスモデル

エックスサーバーの収益は、共用サーバーの利用料が柱だ。値付けの特徴は、長く前払いするほど月額が安くなる設計と、頻繁なキャンペーンにある。

:::fact
料金ページ（2026年9月28日時点）によれば、初期費用は0円で、月額料金（税込）はスタンダードが3か月契約で1,320円、12か月で1,100円、36か月で990円。プレミアムは36か月で1,980円、ビジネスは3,960円で、ディスクはそれぞれ500GB・600GB・700GB（NVMe）。支払いは契約期間分の一括前払いで、全プランに10日間の無料お試しがある。2026年9月7日から10月5日までは、12か月以上の新規契約で利用料金の半額をキャッシュバックするキャンペーンを行っており、スタンダードの36か月契約は実質月額495円になる。独自ドメインは、スタンダードの24か月以上の契約とプレミアム以上の全契約で、契約中は最大2つが永久無料になる。2025年12月からは、1・3・6か月の自動更新にかけていた割引を廃止し、12か月以上の契約に切り替えれば従来と同じ月額で使えると案内した。
:::

:::fact
紹介による集客は3系統ある。公式のアフィリエイトページによれば、A8.net経由の成果報酬は1件あたりスタンダード5,000円、プレミアム7,500円、ビジネス10,000円。契約者向けの「お友達紹介プログラム」では、紹介した側と紹介された側の双方に利用料金の20%が付与される（エックスサーバーの場合）。ただし規約は、SNSや掲示板、ブログ等での不特定多数への拡散を禁じ、A8.netなどのアフィリエイトとの併用もできない。法人向けには、制作会社などがクライアントに紹介すると契約更新時にも報酬が続く「ビジネスパートナープログラム」（取次制度）がある。
:::

:::guess
長期の一括前払いは、利用者にとっては月額が下がる代わりに、会社にとっては数年分の売上を先に受け取り、解約の検討が起きる回数を減らす仕組みでもある。自動更新の短期割引をやめて12か月以上へ誘導した2025年の改定も、同じ方向の判断とみられる。共用サーバーは1台に多数の契約を載せるほど1契約あたりの原価が下がる事業なので、長く留まる契約者を増やすことが利益率に直結していると推測される。
:::

:::guess
紹介の設計は、ブログ運営者を販売網に変えてきた。A8.netの報酬は定額で、ブログで「サーバーの選び方」を書く人にとって分かりやすい。一方でお友達紹介はブログでの拡散を禁じ、知人間の紹介に限っている。不特定多数に向けた宣伝はASPの管理下に置き、報酬の二重取りを防ぐ線引きとみられる。そして、ブログ運営者が使う無料テーマCocoonを2022年に譲り受け、無料のまま提供を続けていることは、ブログを始める人の最初の選択肢に自社の名前を置き続ける投資だと当サイトはみる。APIとMCPの公開も、同じ入口の話の延長にある。AIエージェントに「ブログを作って」と頼む人が増えれば、エージェントが手順を知っているサーバーが選ばれやすくなる。サイト作成・公開スキルのSKILL.mdは、その手順をエージェントに先回りして渡す試みと推測される。
:::

エックスサーバーは、新しい種類のクラウドを作った会社ではない。共用サーバーという昔からある形を、WordPressの設置のしやすさ、.htaccessをそのまま生かす互換性、長期前払いの値付け、ブログ運営者を巻き込んだ紹介網で、国内最大の置き場所に育てた会社だ。その会社が2026年、管理画面を開かない利用者、つまりAIエージェントのための入口を作り始めた。人が画面で選ぶ時代に取ったシェアを、エージェントが手順で選ぶ時代にも持ち越せるか。月495円のサーバーの次の勝負は、そこにある。
