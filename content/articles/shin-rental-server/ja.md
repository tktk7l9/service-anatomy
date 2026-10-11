---
service: "シン・レンタルサーバー"
title: "エックスサーバーのもう一つの看板 — 同じ6コア・8GBにディスクを足し、APIを6日遅れで、MCPを同じ日に出し、キャンペーンを9か月あまり切らさなかったシン・レンタルサーバーを解剖する"
description: "シン・レンタルサーバーは、エックスサーバー株式会社が売る、もう一つの共用レンタルサーバーだ。2021年5月に『wpXシン・レンタルサーバー』として始まり、2025年10月にグループ再編でエックスサーバー株式会社へ移管され、2026年6月からは「シンクラウド」というブランドに属する。ベーシックの6コア・メモリ8GBはエックスサーバーのスタンダードと同じ数字で、ディスクは700GBと200GB多く、36か月契約の通常価格は月1,078円（税込）とエックスサーバーのスタンダードより88円高い。WebサーバーはnginxとApacheの併用で、第4世代のEPYCとオールNVMeのRAID10の上に、エックスサーバーが開発したXPageSpeedや、エックスサーバーのサーバーで効果を測ったXアクセラレータが載る。2026年4月にREST API、5月にMCPサーバー・CLI・AIエージェント用のスキルを公開し、8月にはAPIからのサーバーの申し込みも可能にした。紹介はA8.netともしもアフィリエイトに加え、自社のシンクラウドアフィリエイトでも集める。料金、特長、機能一覧、ビジネスプラン、利用規約、マニュアル、APIリファレンス、SKILL.md、ニュース、エックスサーバーの料金と仕様、当サイトの実観測から、エックスサーバーと部品を重ねながら二つ目の看板を掲げる設計と、キャンペーンと紹介で回す稼ぎ方を解剖する。"
lead: "2026年4月16日、エックスサーバーは管理画面の主要な操作をREST APIとして公開した。6日後の4月22日、ほとんど同じ文面のお知らせが、もう一つのレンタルサーバーのサイトに載った。シン・レンタルサーバーだ。運営するのは同じエックスサーバー株式会社で、5月12日のMCPサーバーとCLIの公開は同じ日だった。国内シェアNo.1をうたう会社が、部品を重ねながらもう一つの看板を掲げ、何を変えて売っているのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, wordpress, small-business, php, api, mcp]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
serviceUrl: "https://www.shin-server.jp/"
# Affiliate link placeholder: Shin Rental Server runs two referral routes (checked 2026-10-11).
# (1) ASP: https://www.shin-server.jp/affiliate/ says it promotes through A8.net and Moshimo Affiliate
# (register with either network for free, then apply to the Shin Rental Server program); the page lists
# per-sale rewards of 3,000 yen (Basic / Business Basic), 5,000 yen (Standard / Business Standard) and
# 8,000 yen (Premium / Business Premium). Both are ASPs whose ad code must be used as provided: copy the
# link to affiliate.url, the 1x1 impression image to affiliate.impressionUrl (rewrite Moshimo's
# protocol-relative //i.moshimo.com/... to https://), and the text ad verbatim to affiliate.label.
# (2) In-house "Shin Cloud Affiliate" (https://www.shin-server.jp/shin_affiliate.php): join with a free
# Shin Cloud account; it pays 3,500 / 5,500 / 9,000 yen per plan for contracts of 6 months or longer and
# gives the referred customer 10% off the first fee. It cannot be combined with A8.net, Moshimo Affiliate
# or point sites, and the page asks for a "PR" label when introducing it to an unspecified audience.
# Never invent the label — ask the owner for the material's exact text. Keep every field identical in
# ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<a8-or-moshimo-link-for-shin-rental-server>"
#   program: "Shin Rental Server Affiliate Program (A8.net / Moshimo Affiliate)"
#   impressionUrl: "https://<impression-pixel>"
#   label: "<verbatim text of the ad material>"
vendor: "エックスサーバー株式会社"
origin: "JP"
heroTheme: "shin-rental-server"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Webサーバー"
    name: "nginx + Apache 2.4"
    confidence: confirmed
    evidence: "公式サポートサイトのサーバー仕様一覧（2026-10-11確認）に、ウェブサーバーは「apache 2.4.x、nginx」と明記。特長のページもnginxの採用を掲げ、サイト作成・公開スキルのSKILL.mdは、環境を「Apache ベースの共用ホスティング」と説明し、.htaccessでApacheを設定できると書く"
    evidenceUrl: "https://www.shin-server.jp/support/manual/man_server_spec.php"
  - layer: "サーバー機器"
    name: "AMD EPYC (4th gen) / all-NVMe RAID10"
    confidence: confirmed
    evidence: "公式の特長のページ（2026-10-11確認）に、第4世代「AMD EPYC」の採用、256コアのvCPUと1.5TBのメモリというサーバースペック、全ストレージをNVMeにしたRAID10、国内最大級のバックボーン回線への10Gbpsの直結を明記。サーバー仕様一覧もRAID構成をRAID 10とする"
    evidenceUrl: "https://www.shin-server.jp/service/feature.php"
  - layer: "データベース"
    name: "MariaDB 10.11 / SQLite"
    confidence: confirmed
    evidence: "公式の機能一覧（2026-10-11確認）に、MariaDB 10.11を使ったデータベースとSQLiteを明記。ニュース一覧は2026年4月20日に新規受付サーバーでMariaDB 10.11に対応したと告知した。ビジネスプランのページの機能一覧はMariaDB 10.5と書く"
    evidenceUrl: "https://www.shin-server.jp/service/functions.php"
  - layer: "高速化"
    name: "XPageSpeed (developed by Xserver) / X Accelerator Ver.2"
    confidence: confirmed
    evidence: "公式のXPageSpeedのページ（2026-10-11確認）に、Googleの拡張モジュール「PageSpeed Module」をもとにエックスサーバーが開発したWebサイト最適化機能と明記。特長のページは、PHPを高速化するXアクセラレータ Ver.2の効果を、2019年2月時点のエックスサーバー内の同一構成サーバーでの計測と注記する"
    evidenceUrl: "https://www.shin-server.jp/service/detail_xpagespeed.php"
  - layer: "外部API"
    name: "Shin Cloud API (REST, api.shin-server.jp/v1, xs_ keys)"
    confidence: confirmed
    evidence: "公式のAPIリファレンス（2026-10-11確認）に、ベースURL https://api.shin-server.jp、パス /v1/server/{servername}、Bearerトークンの認証、JSONの応答、OpenAPIの仕様を明記。マニュアルは、キーが xs_ で始まり、権限・IPアドレスの制限・90日分の実行ログ・プラン別のレート制限を持つと書く"
    evidenceUrl: "https://developer.shin-server.jp/api/server/"
  - layer: "AIエージェント連携"
    name: "Shin Cloud MCP Server (npx shincloud-mcp, runs locally) / Shin Cloud CLI"
    confidence: confirmed
    evidence: "公式マニュアル（2026-10-11確認）に、MCPサーバーは利用者のPC上で npx -y shincloud-mcp として動き、Node.js 18以上とAPIキーが必要で、Cursor、Claude Desktop、VS Code（GitHub Copilot）、Claude Code、Codexの設定例を載せる。機能一覧は、APIをターミナルから操作する公式のCLIも並べる"
    evidenceUrl: "https://www.shin-server.jp/support/manual/man_tool_mcp.php"
  - layer: "AIスキル"
    name: "Site creation and publishing skill (SKILL.md 1.2.1, SSH + rsync)"
    confidence: confirmed
    evidence: "公式のSKILL.md（2026-10-11確認）は、バージョンを1.2.1、作者の表記を xserver-inc とし、Cursor、Claude Code、Gemini CLI、Cline、Codex向けに、APIでSSHを有効にして公開鍵を登録し、rsyncでファイルを転送する手順を書く。特設ページは全プランで使えると明記する"
    evidenceUrl: "https://developer.shin-server.jp/ai/skills/shinserver/SKILL.md"
  - layer: "メール"
    name: "WithSecure anti-virus / DKIM / DMARC"
    confidence: confirmed
    evidence: "公式の機能一覧（2026-10-11確認）に、ウィルスメールの駆除機能（WithSecure社）、送信メールの改ざんやなりすましを防ぐDKIM、DMARC、スパムフィルタ、SMTP-AUTH、IMAPを明記"
    evidenceUrl: "https://www.shin-server.jp/service/functions.php"
  - layer: "自社サイト・管理画面"
    name: "Apache (shin-server.jp, secure.wpx.ne.jp) / WordPress on nginx (community)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、www.shin-server.jp、developer.shin-server.jp、api.shin-server.jp は server: Apache を返した。ログインの入口 secure.wpx.ne.jp のページは server: Apache と charset=EUC-JP を返し、ユーザーコミュニティ community.shin-server.jp はHTTP/2で server: nginx とWordPressのREST APIのリンクを返したため、コミュニティはWordPressで動いているとみられる"
sources:
  - label: "シン・レンタルサーバー公式: トップページ"
    url: "https://www.shin-server.jp/"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: 料金（新規契約と契約更新の料金表）"
    url: "https://www.shin-server.jp/service/price.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: 特長（EPYC・オールNVMe・シンクラウドAPI・独自ドメイン特典）"
    url: "https://www.shin-server.jp/service/feature.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: 機能一覧"
    url: "https://www.shin-server.jp/service/functions.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: ビジネスプラン（リソース保証・料金）"
    url: "https://www.shin-server.jp/service/business.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: サイト作成・公開スキル"
    url: "https://www.shin-server.jp/service/detail_skill.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: XPageSpeed"
    url: "https://www.shin-server.jp/service/detail_xpagespeed.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: 企業情報（会社概要・特定商取引に基づく表示）"
    url: "https://www.shin-server.jp/company.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: 利用規約"
    url: "https://www.shin-server.jp/rule.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: アフィリエイト（A8.netともしもアフィリエイト・報酬額）"
    url: "https://www.shin-server.jp/affiliate/"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: シンクラウドアフィリエイト"
    url: "https://www.shin-server.jp/shin_affiliate.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー サポートサイト: サーバー仕様一覧"
    url: "https://www.shin-server.jp/support/manual/man_server_spec.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー サポートサイト: シンクラウドAPI（権限・レート制限）"
    url: "https://www.shin-server.jp/support/manual/man_tool_api.php"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー サポートサイト: シンクラウドMCP Server"
    url: "https://www.shin-server.jp/support/manual/man_tool_mcp.php"
    accessedAt: "2026-10-11"
  - label: "シンクラウド開発者ドキュメント: APIリファレンス（サーバー管理）"
    url: "https://developer.shin-server.jp/api/server/"
    accessedAt: "2026-10-11"
  - label: "シンクラウド開発者ドキュメント: サイト作成・公開スキル（SKILL.md）"
    url: "https://developer.shin-server.jp/ai/skills/shinserver/SKILL.md"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバーのニュース: 一覧（2025年8月〜2026年10月）"
    url: "https://www.shin-server.jp/news/"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバーのニュース: グループ会社（エックスサーバー株式会社）へのサービス移管のお知らせ（2025-09-02）"
    url: "https://www.shin-server.jp/news/detail.php?view_id=1632"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバーのニュース: ブランド名称の新設および、関連する各種名称変更のお知らせ（2026-05-28）"
    url: "https://www.shin-server.jp/news/detail.php?view_id=2222"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバーのニュース: 「シンアカウントAPI」の提供を開始（2026-04-22）"
    url: "https://www.shin-server.jp/news/detail.php?view_id=2154"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバーのニュース: サーバーの新規お申し込み・契約管理APIを追加（2026-08-26）"
    url: "https://www.shin-server.jp/news/detail.php?view_id=2423"
    accessedAt: "2026-10-11"
  - label: "シン・レンタルサーバー公式: 最大半額キャッシュバックキャンペーン（2026-08-10〜10-07・終了）"
    url: "https://www.shin-server.jp/campaign/campaign_260810.php"
    accessedAt: "2026-10-11"
  - label: "エックスサーバー株式会社: 沿革"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-10-11"
  - label: "エックスサーバー公式: 料金プラン（本文のエックスサーバーとの比較の根拠）"
    url: "https://www.xserver.ne.jp/price/"
    accessedAt: "2026-10-11"
  - label: "エックスサーバー公式: アフィリエイト（A8.netの成果報酬）"
    url: "https://www.xserver.ne.jp/affiliate.php"
    accessedAt: "2026-10-11"
  - label: "エックスサーバー公式マニュアル: サーバー仕様一覧（リソース保証）"
    url: "https://www.xserver.ne.jp/manual/man_server_spec.php"
    accessedAt: "2026-10-11"
  - label: "エックスサーバー公式マニュアル: XServer API（キーの形式・レート制限）"
    url: "https://www.xserver.ne.jp/manual/man_tool_api.php"
    accessedAt: "2026-10-11"
  - label: "エックスサーバー公式ニュース: 「XServer API」の提供を開始（2026-04-16）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18133"
    accessedAt: "2026-10-11"
  - label: "エックスサーバー公式ニュース: 「XServer MCP Server」「XServer CLI」の提供を開始（2026-05-12）"
    url: "https://www.xserver.ne.jp/news_detail.php?view_id=18397"
    accessedAt: "2026-10-11"
  - label: "エックスサーバー公式マニュアル: XServer MCP Server リモート版"
    url: "https://www.xserver.ne.jp/manual/man_tool_mcp_remote.php"
    accessedAt: "2026-10-11"
---

シン・レンタルサーバーは、WordPressのブログや小さな事業のサイトを置くための国内の共用レンタルサーバーだ。運営するのは、当サイトが解剖した[エックスサーバー](/ja/articles/xserver)と同じエックスサーバー株式会社で、エックスサーバーが開発したXPageSpeedとWordPressテーマのXwrite、エックスサーバーのサーバーで効果を測ったXアクセラレータが並び、2026年に加わったAPIとMCPサーバーも本体と足並みをそろえて出てきた。それでも、プランの名前、ディスクの量、値札、紹介の仕組みは別に設計されている。[ConoHa WING](/ja/articles/conoha-wing)、[mixhost](/ja/articles/mixhost)、[カラフルボックス](/ja/articles/colorfulbox)、[ロリポップ！](/ja/articles/lolipop)、[さくらのレンタルサーバ](/ja/articles/sakura-rental-server)が並ぶ比較の棚に、同じ会社が二つ目の商品を置いている形だ。

## サービス解説

シン・レンタルサーバーは、通常プランのベーシック、スタンダード、プレミアムと、CPUとメモリの値を保証する法人向けのビジネスプラン3つを売る。ドメインのシンドメイン、VPSのシンVPSなど、同じ「シン」の名前のサービスが横に並び、2026年6月からは「シンクラウド」というブランドにまとめられた。

:::fact
エックスサーバー株式会社のコーポレートサイトの沿革（2026-10-11時点）によれば、同社は2013年1月にWordPress専用のレンタルサーバー＆クラウドサービス『wpX』を、2021年5月に新世代レンタルサーバーサービス『wpXシン・レンタルサーバー』（現『シン・レンタルサーバー』）を、2023年9月に『シン・VPS』を始めた。サービスのサイトとニュースは、名前を「シンレンタルサーバー」と中黒なしで書く。2025年9月2日のお知らせは、グループ再編にともない、シンアカウントで提供するすべてのサービス（シンレンタルサーバー、シンドメイン、シンブログ、シンVPS、シンクラウドデスクトップ for FX、シンフリーサーバー、wpX Speed、wpXレンタルサーバー、wpXクラウド）を2025年10月1日付でグループ会社のエックスサーバー株式会社に移管し、サービス内容や機能は変わらないと告げた。2026年5月28日のお知らせは、それまで公式に定めていなかったブランド名を「シンクラウド」とし、「特定の利用目的やニーズに特化し、最適化した環境を提供するブランド」と説明して、6月2日から「シンアカウント」を「シンクラウドアカウント」に改めた。サイトの企業情報によれば、販売業者はエックスサーバー株式会社（届出電気通信事業者 E-20-03085）、資本金は1億円（資本準備金含む）、運営統括責任者は小林尚希氏で、本社は大阪市北区のグランフロント大阪にある。トップページは「国内最速No.1」をうたい、注記で根拠を、2026年6月30日の自社調べで、自社サービスを除いた国内シェア上位3サービスと独自に選んだサービスの計6つをh2loadで5回計測した結果（複数プランがあるサービスは独自に選んだものを除いて最下位プランで計測、シェアはW3Techsのデータで算出）と説明する。同じページは、運用できるコンテンツのジャンルに制約がないと書く。
:::

:::fact
料金のページ（2026-10-11確認・税込）によれば、通常プランの月額換算は、36か月契約でベーシック1,078円、スタンダード2,002円、プレミアム4,004円、24か月で1,155円・2,145円・4,290円、12か月で1,232円・2,314円・4,628円、3か月と6か月で1,386円・2,574円・5,148円。新規契約の表と契約更新の表には同じ金額が並び、支払いは契約期間分の一括前払いで、初期費用は0円だ。機能一覧によれば、ベーシックは6コア・メモリ8GB・NVMeのSSD 700GB、スタンダードは8コア・12GB・1,000GB、プレミアムは10コア・16GB・1,200GBで、転送量による課金はなく、サーバー仕様一覧は転送量の目安をそれぞれ1日900GB、1,200GB、1,500GBとし、目安を大きく上回ると速度の制限などをかける場合があると書く。ビジネスプランはCPUとメモリの値を保証する法人向けで、36か月契約の月額はビジネス・ベーシック（4コア・4GB・700GB）が1,630円、ビジネス・スタンダード（6コア・8GB・1,000GB）が3,418円、ビジネス・プレミアム（8コア・12GB・1,200GB）が7,236円。無料お試しは最大10日間で、有料のWordPressテーマ「Xwrite」（通常年9,900円）はベーシックを除くプランで無料になる。独自ドメインは、通常プランは指定の中から1つ、ビジネスプランは2つが契約中ずっと無料になる。サーバーの設定を代行する「設定おまかせサポート」は1回5,500円から、サーバー移転代行は1回33,000円。企業情報のページは、支払い方法を銀行振込、クレジットカード、コンビニ決済、プリペイドとする。
:::

:::pull
同じ会社が、同じ比較の棚に置いたもう一つの看板。目に見えて違うのは、名前と、ディスクの量と、売り方だ。
:::

::scorecard

## UX分析

シン・レンタルサーバーの体験は、WordPressを置くための標準的な共用サーバーの道具立てに、「ジャンルの制約がない」ことと「AIエージェントに任せられる」ことの二つの看板を足したものだ。一方で、ページによって書き方が揃っていない箇所があり、契約の前に確かめたい点も残る。

- **試用は10日、払った料金は戻らない**。利用規約によれば、試用期間はサービス開始の連絡から10日間で、その間は一部の機能が制限され、期間中に支払いが確認されれば本契約が始まり、支払わなければ試用の終わりにデータが削除される。特定商取引法に基づく表示は、申し込みの撤回を支払い前の試用期間中に限り、利用規約は、すでに払った料金は解約しても返さないと定める。契約は、満了する月の前月末日までに更新しない旨を伝えなければ、同じ期間で自動的に更新される。
- **ジャンルの制約は、規約の範囲で**。トップページは運用できるコンテンツのジャンルに制約がないと書き、ビジネスプランの機能一覧は、アダルトコンテンツを運営する場合はvCPUの保証値が半分になると注記する。一方で利用規約の禁止事項には、児童ポルノや未成年者の健全な育成に有害と認められる情報の送信・掲載、法令に違反する行為、サーバーやネットワークに著しい負荷をかける行為などが並ぶ。
- **AIに、作るところから公開まで任せる**。サイト作成・公開スキルのページによれば、AIエージェントにSKILL.mdを読ませる1行の指示を送ると接続の手順が読み込まれ、APIキーを入力すれば、あとはサイトの作成から契約中のサーバーへの公開までを指示だけで進められる。対象はClaude Code、Cursor、Gemini CLI、Google AntigravityなどPC上でターミナルを動かせるエージェントで、Web版のAIチャットやスマートフォンのアプリでは使えない。SKILL.md自体は、APIキーをチャットに貼らせない、公開先をAIが独断で決めない、削除や上書きの前に確認を取る、といった規則をエージェントに課している。一方で利用規約の禁止事項には、プログラムによってブログや記事、コメントを自動生成・自動投稿する行為も挙がっており、AIに任せる範囲は規約と照らして決める必要がある。
- **MCPは手元のPCで動かす**。MCP Serverのマニュアルによれば、シンクラウドMCP Serverは利用者のPC上で `npx -y shincloud-mcp` として動き、Node.js 18以上とAPIキーが要り、ブラウザ版のAIチャットからは使えない。料金が発生するサーバーの新規申し込みは初期設定で無効になっていて、APIキー側の許可と環境変数の両方を設定したうえで、申込内容と税込の合計金額を確かめて明示的に承認したときだけ実行される。エックスサーバーには、端末への導入やAPIキーの設定なしにClaudeのコネクタから使えるリモート版があるが、シンのマニュアルが説明するのは手元で動かす方式だけだ。
- **値札の読み方は、時期で変わる**。料金のページは新規契約と契約更新の2つの表を並べるが、2026年10月11日の時点では同じ金額が並び、初回だけ安く2年目から上がる二段の値付けは見えなかった。ただし後で見るように、ここ9か月あまりはほぼずっと新規契約のキャンペーンが続いていて、いつ申し込むかで実質の値段が変わる。
- **ページによって数字が揃っていない**。機能一覧と利用規約は無料お試しを10日間とするが、サイト作成・公開スキルのページは「14日間の無料お試し期間」と書く。特長のページは独自ドメインが「いずれか2つ」無料と書くが、機能一覧は通常プランを「おひとつ」とし、トップページは2つをビジネスプランの特典として示す。データベースも、機能一覧はMariaDB 10.11、ビジネスプランの機能一覧は10.5と書く。契約の前に、どの数字が自分の契約に当てはまるかを確かめておきたい。

## 技術構成

::techstack

:::fact
特長のページ（2026-10-11確認）によれば、サーバーは第4世代のAMD EPYCを採用し、256コアのvCPUと1.5TBのメモリというスペックで、全ストレージをNVMeにしたRAID10で組み、nginxを入れ、国内最大級のバックボーン回線に10Gbpsでつなぐ。NVMeの読み込み速度は従来のオールSSD環境の最大約32倍とし、注記で2024年3月時点の自社調べ（fioで128並列の負荷をかけたランダムリードのスループットの比較）と説明する。サーバー仕様一覧は、OSをLinux、ウェブサーバーを「apache 2.4.x、nginx」とし、SSH、Cron、.htaccess、mod_rewriteが使えてtelnetは使えないと書く。機能一覧は、データベースにMariaDB 10.11とSQLite、PHP 8と7、FastCGI、OPcache、毎日の自動バックアップ（Web・メールとMySQLをそれぞれ過去14日分）、WAF、WithSecure社のウィルスメールの駆除、DKIMとDMARCを並べる。XPageSpeedのページは、この機能をGoogleの「PageSpeed Module」をもとにエックスサーバーが開発したものとし、同社のサービス内の同一構成のサーバーに対する比較でPageSpeed Insightsのスコアが最大で264%に上がったと書く。特長のページは、PHPを高速化するXアクセラレータ Ver.2の効果（キャッシュなしで最大20倍、WordPressで最大10倍）を、2019年2月時点のエックスサーバー内の同一構成サーバーでの計測と注記する。ニュース一覧によれば、2026年1月14日にAIクローラーの遮断設定、1月22日にPHP 8.5、4月20日に新規受付サーバーでのMariaDB 10.11、6月22日に独自のAIシステムがWordPressのトラブルを解決するとうたう「WordPressリカバリー」が加わった。
:::

:::fact
APIリファレンス（2026-10-11確認）によれば、シンクラウドAPIのベースURLは `https://api.shin-server.jp`、パスは `/v1/server/{servername}` で、APIキーをBearerトークンとして送る。`{servername}` には `サーバーID.wpx.jp` という形の初期ドメインを入れ、ドメインの追加とメールアカウントの作成では、`_xserver-verify.{ドメイン}` というTXTレコードで所有権を確かめる。サーバーの新規申し込み（`POST /v1/server`）は、まず `dry_run=true` で内容と税込の合計金額を確かめ、実申請では金額を `expected_total_price` に入れ、`agree_to_terms=true` と `Idempotency-Key` ヘッダーを送る。応答を受け取れなかった場合に同じキーで送り直すと、48時間は409 DUPLICATE_REQUESTが返る。APIのマニュアルによれば、キーは `xs_` で始まり、権限は「すべての操作」「読み取り専用」「カスタム」から選べ、IPアドレスの制限と90日分の実行ログがあり、キーでサーバーの申し込みを許すにはプリペイド残高が2万円以上要る。レート制限はサーバーアカウント単位で、ベーシックが毎分60・1日1万・同時接続5、スタンダードが120・3万・10、プレミアムが300・10万・20。SKILL.md（バージョン1.2.1、作者の表記は xserver-inc）は、SSHを公開鍵認証のみ・ポート10022とし、既定では手元でed25519の鍵を作って公開鍵だけをAPIで登録し、rsyncで転送する手順を書く。プロジェクトの設定ファイルの名前は `.xserver.json` で、環境は「Apache ベースの共用ホスティング。Node.js ランタイム不可」と説明される。当サイトの実観測（2026-10-11）では、`www.shin-server.jp` と `developer.shin-server.jp` は server: Apache をHTTP/1.1で返し、`api.shin-server.jp` のルートは403とともにHSTS（max-age=63072000; includeSubDomains）を返した。ログインの入口 `secure.wpx.ne.jp` のページは server: Apache と charset=EUC-JP を、ユーザーコミュニティ `community.shin-server.jp` はHTTP/2で server: nginx とWordPressのREST APIのリンクを返した。
:::

:::guess
API、MCP、スキルのあちこちにエックスサーバーの名前が残っている。キーの接頭辞の `xs_`、所有権確認の `_xserver-verify`、スキルの `.xserver.json`、エックスサーバーのサーバーで計測した高速化の機能だ。シン・レンタルサーバーは、エックスサーバーと同じ基盤とコードの上で、プランの定義と看板を変えて動いているとみられる。ログインの入口がwpXのドメインにあり、文字コードにEUC-JPを使っていることからは、2013年に始まったwpXの時代からの顧客管理の仕組みを引き継いでいると推測される。サーバーの申し込みのAPIに、事前の金額の確認、予想金額の一致、Idempotency-Keyという三重の歯止めがあるのは、AIエージェントが応答を待てずに同じ注文を繰り返したり、想定と違う値段で契約したりする事故を、APIの設計の側で防ごうとしたものと読める。
:::

## エックスサーバーと重なる部品、ずらした値札

:::fact
エックスサーバーの公式ニュースによれば、XServer APIは2026年4月16日にエックスサーバーとXServerビジネスで始まった。シン・レンタルサーバーの「シンアカウントAPI」は6日後の4月22日に始まり、お知らせの本文はサービスの名前を除けばほぼ同じで、使えるAPIの一覧にも同じ14項目が並ぶ。MCPサーバーとCLIは、エックスサーバーが5月12日に公開し、シン・レンタルサーバーもニュース一覧によれば同じ5月12日に公開した。XServer APIのマニュアルによれば、キーは同じ `xs_` で始まり、レート制限はスタンダードが毎分60・1日1万・同時5、プレミアムが120・3万・10、ビジネスが300・10万・20で、シンのベーシック・スタンダード・プレミアムと同じ数字だ。エックスサーバーのサーバー仕様一覧は、sv13001以降のサーバーのリソース保証をスタンダードが仮想6コア・メモリ8GB、プレミアムが8コア・12GB、ビジネスが10コア・16GBとする。シンの通常プランも6コア・8GB、8コア・12GB、10コア・16GBで、シンのビジネスプランのページは、通常プランと異なりビジネスプランはプランごとにリソース値を保証すると書く。違いも残る。エックスサーバーには、端末への導入やAPIキーなしで使えるリモート版のMCPサーバー（`https://api.xserver.ne.jp/mcp`）がある。エックスサーバーの料金のページ（2026-10-11確認）は、2026年10月5日17時から11月4日17時まで最大30%オフのキャンペーン価格を適用し、スタンダードの36か月契約を990円から693円に下げていた。
:::

| 36か月契約の月額（税込・通常価格） | シン・レンタルサーバー | エックスサーバー |
| --- | --- | --- |
| 6コア・メモリ8GBのプラン | ベーシック 1,078円（700GB） | スタンダード 990円（500GB） |
| 8コア・メモリ12GBのプラン | スタンダード 2,002円（1,000GB） | プレミアム 1,980円（600GB） |
| 10コア・メモリ16GBのプラン | プレミアム 4,004円（1,200GB） | ビジネス 3,960円（700GB） |
| A8.netの成果報酬（上の3つ） | 3,000円・5,000円・8,000円 | 5,000円・7,500円・10,000円 |
| 2026年10月11日のキャンペーン | なし | 最大30%オフ（11月4日まで） |

:::guess
部品の多くを重ねたまま看板を二つに分けるのは、比較の棚に二つの商品を置き、それぞれ別の客を取りにいくためとみられる。エックスサーバーが料金のページの冒頭で国内シェアNo.1と導入企業の数を掲げるのに対し、シン・レンタルサーバーは「国内最速」「最新技術を野心的に」「コンテンツのジャンルに制約がない」を掲げ、同じ数字のCPUとメモリにディスクを足して売る。通常価格はわずかに高く、ASPの報酬は低いが、キャンペーンを途切れさせない運用で、実質の値段の勝負に持ち込んでいると読める。APIを6日後に、MCPを同じ日に出せるのは開発を一つにまとめているからで、二つ目の看板にかかる追加の開発費は小さいと推測される。2025年の移管と2026年のブランド名の設定は、シン・レンタルサーバーを、VPSやドメインと並ぶ「シンクラウド」という一つの商品群として育てる段階に入ったことを示しているとみられる。
:::

## ビジネスモデル

稼ぎ方は、契約期間分を前払いで受け取るサーバーの利用料が中心で、設定や移転の代行、有料のSSL証明書、シンドメインのドメイン、Xwriteなどが上に乗る。客を集める役は、期間を区切ったキャンペーンと、ASPと自社の二本立てのアフィリエイトが担う。

:::fact
ニュース一覧（2026-10-11確認）には、2025年12月26日の「《2/26まで》1年契約が月額492円！初年度最大69％オフキャンペーン」から、2026年2月26日の《4/7まで》最大60%キャッシュバック（実質月額754円から）、4月7日の《5/11まで》最大50%オフ（月額862円から）、5月11日の《7/7まで》最大60%キャッシュバック（実質539円から）、7月7日の《8/10まで》最大30%オフ（862円から）、8月10日の《10/7まで》最大半額キャッシュバック（実質754円から）まで、前のキャンペーンが終わる日に次の告知が出る形で6本が並ぶ。最後のキャンペーンのページによれば、期間は8月10日17時から10月7日17時までで、12か月以上の新規契約に、ベーシックとビジネス・ベーシックは30%、ほかのプランは50%をキャッシュバックし（ベーシックの36か月契約は11,664円で実質月754円）、申請の案内は申し込みから満6か月が過ぎた翌月の10日ごろに届き、申請の時点で契約が終わっていれば対象外とした。このページは「本キャンペーンは終了いたしました」と表示していた。アフィリエイトのページによれば、ASPはA8.netともしもアフィリエイトで、成約報酬はベーシックとビジネス・ベーシックが3,000円、スタンダードとビジネス・スタンダードが5,000円、プレミアムとビジネス・プレミアムが8,000円。ニュース一覧によれば2025年10月22日に始まった自社のシンクラウドアフィリエイトは、無料のシンクラウドアカウントがあれば参加でき、6か月以上の契約を紹介すると3,500円から9,000円を払い、紹介された側は初回の利用料金が10%割引になる。報酬は、紹介された客の本契約日を起算日として翌々月の15日に銀行振込で払われ、A8.netやもしもアフィリエイト、ポイントサイトとは併用できない。2025年12月1日には、契約者が未契約のサービスを申し込むと初回の利用料金が10%オフになる「ご契約者さま限定割引」も始めた。2026年8月26日のお知らせは、APIからのサーバーの新規申し込みを、複数のサーバーを構築・管理する制作会社や再販事業者に特に勧め、API経由の申し込みはプリペイド残高から払い、無料お試しは適用されないと書く。
:::

:::guess
自社のアフィリエイトがASPより各プランで500円から1,000円高い報酬を払えるのは、ASPに払う手数料がかからない分を、紹介者と紹介された客の割引に回しているためとみられる。ASPとの併用を禁じ、紹介された客の割引を初回だけに限るのは、二重の支払いを避けつつ、更新の売上は守る設計と読める。キャッシュバックを満6か月後の申請にしているのは、短い期間で解約する客に割引が流れるのを防ぐ仕組みと推測される。キャンペーンが途切れないことは、客にとっては「いつ申し込んでも何かしらの割引がある」状態に近いが、2026年10月11日のように切れ目に当たると通常価格しか見えない。APIからの申し込みを制作会社や再販事業者に勧めるのは、個人のブログに加えて、複数のサイトをまとめて抱える事業者を、AIエージェントやプログラム経由の新しい販路として取り込む狙いとみられる。
:::

2021年に『wpXシン・レンタルサーバー』として生まれたシン・レンタルサーバーは、2025年に本体の会社へ移り、2026年には「シンクラウド」という看板を得た。中身の多くはエックスサーバーと重なり、APIもMCPも本体と足並みをそろえて出てくる。それでも、ディスクの量、看板の言葉、値札とキャンペーンの回し方は別に設計されている。同じ会社の二つの商品が同じ比較の棚に並ぶとき、選ぶ側に問われるのは、ブランドの名前ではなく、どの数字が自分のサイトに効くかだ。
