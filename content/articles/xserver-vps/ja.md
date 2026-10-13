---
service: "XServer VPS"
title: "サーバー機器の高騰がVPSの値札に届いた夏 — 2GBの36か月契約を月990円から1,265円に上げた1週間後にAPIとMCPを開き、新規受付を3週間近く止めたXServer VPSを解剖する"
description: "XServer VPSは、国内シェアNo.1をうたうレンタルサーバーのエックスサーバーを運営するエックスサーバー株式会社が、2022年9月に始めたVPS（仮想専用サーバー）だ。メモリ2GBから64GBまでの6プランに第3世代のAMD EPYCとNVMeのSSDを載せてroot権限を渡し、申し込みと同時にOSやアプリを入れる。当サイトが数えたアプリイメージは91件で、うち40件がMinecraftやパルワールドなどのゲーム、6件がClaude Code、Codex CLI、Gemini CLI、DifyなどのAIツールだ。2026年は、想定を上回る申し込みによる在庫のひっ迫を理由に7月に無料VPSの、これに世界的なサーバー機器の需要増加による調達コストの高騰を加えて2GBプランの新規受付を止め、調達コストの高騰を理由に9月1日に全プランの料金を上げ（上げ幅は当サイトの計算で19.7〜32.4%、2GBの36か月契約は月990円から1,265円・税込）、同じ二つの理由で9月17日から10月6日まで新規受付を一時停止した。値上げの1週間後の9月8日には、REST API、MCPサーバー、CLIの対象をVPSに広げ、AIエージェントからの電源操作や新規申し込みを可能にした。料金、仕様、OS・アプリイメージ一覧、ゲーム専用VPS、Windows Server、GPUサーバー、無料VPS、ビジネスプラン、利用規約、マニュアル、APIとCLIのリファレンス、ニュース、アフィリエイト、当サイトの実観測から、「圧倒的なコスパ」を掲げるVPSが機器の値上がりをどう在庫と値札に映し、AIエージェントに何を開いたのかを解剖する。"
lead: "「機器の調達コストが大幅に高騰しており、従来の価格を維持することが困難となりました」——2026年8月3日、XServer VPSは「【重要】」と付けたお知らせで、9月1日から全プランの料金を改定すると告げた。改定前は36か月契約で月990円だった2GBプランとキャンペーンを入口にしてきたVPSは、この夏、無料VPSと2GBプランの受付を止め、値札を書き換え、9月17日には新規受付そのものを止めた。一方で、値上げの1週間後には、AIエージェントからVPSを申し込み、電源を操作できるAPIとMCPサーバーを公開している。機器の値上がりが一つのVPSサービスに何をもたらしたのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, vps, small-business, api, mcp, ai-agent, multiplayer]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-26"
    claim: "トップページのXServer VPS クラウドの告知（「10/26まで｜契約期間＋3ヶ月無料」）"
  - date: "2026-11-19"
    claim: "Windows Serverの新規契約キャッシュバック（11月19日17時まで）と、それに基づく推測"
serviceUrl: "https://vps.xserver.ne.jp/"
# Affiliate link placeholder: XServer VPS runs its affiliate program through A8.net
# (https://vps.xserver.ne.jp/affiliate.php, checked 2026-10-13): flat rewards per sale, e.g. XServer VPS 2GB
# 1,046 / 1,569 yen (1-month / 3-month-or-longer) up to 64GB 40,182 / 60,273 yen, Windows Server 2,000-64,000
# yen, Game 690-47,115 yen, FX Premium 12,000-43,000 yen (business plans: new orders suspended). Register with
# A8.net for free and apply via that page (it says self sign-ups are allowed). Use A8.net's ad code as provided:
# the link to affiliate.url, the 1x1 impression image to affiliate.impressionUrl, the text ad verbatim to
# affiliate.label. Never invent the label — ask the owner. Do not use the friend-referral link
# (https://www.xserver.ne.jp/friend.php): it forbids spreading to an unspecified audience and cannot be combined
# with an ASP. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<xserver-vps-material>"
#   program: "XServer VPS Affiliate Program (A8.net)"
#   impressionUrl: "https://www18.a8.net/0.gif?a8mat=<xserver-vps-material>"
#   label: "<verbatim text of the ad material>"
vendor: "エックスサーバー株式会社"
origin: "JP"
heroTheme: "xserver-vps"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 3.5 }
techStack:
  - layer: "サーバー機器"
    name: "AMD EPYC (3rd gen, Milan) / NVMe SSD (striping + mirroring)"
    confidence: confirmed
    evidence: "公式のサービス紹介ページ（2026-10-13確認）に、CPUは第3世代の「AMD EPYC」（コードネーム「Milan」）で、全ストレージにNVMeを採用し、ストライピング構成とミラーリング構成を備えると明記。読み込み速度を従来のオールSSD環境の最大約17倍とし、根拠を2024年1月時点の自社調べ（fioで128並列の負荷をかけたランダムリードのスループットの比較）と注記する"
    evidenceUrl: "https://vps.xserver.ne.jp/xserver-vps.php"
  - layer: "ネットワーク"
    name: "10 Gbps shared uplink (up to 100 Mbps per contract)"
    confidence: confirmed
    evidence: "公式の料金・仕様一覧（2026-10-13確認）に、ネットワークは「インターネット 10Gbps共有（1契約あたり最大100Mbps）」、データ転送量は無制限、グローバルIPアドレスはIPv4が1個と明記。サービス紹介ページは国内最大級のバックボーン回線に10Gbpsで直結すると書き、ゲーム専用VPSのページはプランごとに100Mbpsから2Gbpsの帯域を示す"
    evidenceUrl: "https://vps.xserver.ne.jp/price.php"
  - layer: "OS・アプリイメージ"
    name: "9 Linux distributions / 91 app images (Claude Code, Codex CLI, Gemini CLI, Dify, n8n, OpenClaw, 40 games)"
    confidence: confirmed
    evidence: "公式のOS・アプリイメージ一覧（2026-10-13確認）に、AlmaLinux、Rocky Linux、Ubuntuなど9系統のOSと、AIツール、ビジネスツール、プログラミングツール、ブログ・サイト制作、ゲーム、サーバー管理・その他の6分類のアプリイメージを掲載し、サーバー作成と同時にOSのインストールやアプリケーションサーバーの構築が完了すると書く。件数は当サイトが数えたもの"
    evidenceUrl: "https://vps.xserver.ne.jp/os-list.php"
  - layer: "ゲームサーバー管理"
    name: "Minecraft Manager / Palworld Manager (XServer-provided tools)"
    confidence: confirmed
    evidence: "公式のMinecraftのページ（2026-10-13確認）に、ゲームの設定変更、バージョンアップ、バックアップをクリック操作で行えるMinecraft専用の管理ツールを提供すると明記。ニュース一覧には「Palworldマネージャー」の設定項目追加のお知らせが3件並び、ゲーム専用VPSのページはPalworld、Minecraft、ARKを他社サーバーから移せる「簡単移行」を載せる"
    evidenceUrl: "https://vps.xserver.ne.jp/minecraft.php"
  - layer: "GPU"
    name: "NVIDIA L4 Tensor Core GPU (24 GB VRAM)"
    confidence: confirmed
    evidence: "公式のGPUサーバーのページ（2026-10-13確認）に、NVIDIA L4 TensorコアGPU 1枚、VRAM 24GB、vCPU 24コア、メモリ120GB、SSD 150GB（RAID10）、OSはUbuntu 22.04LTSで、Automatic1111、InvokeAI、NVIDIA Container Toolkitのイメージを用意し、料金は1時間150円（月の上限88,000円）と明記"
    evidenceUrl: "https://vps.xserver.ne.jp/gpu.php"
  - layer: "外部API"
    name: "XServer API (REST, api.xserver.ne.jp/v1/vps, xs_ keys, OpenAPI)"
    confidence: confirmed
    evidence: "公式のAPIリファレンス（2026-10-13確認）に、ベースURL https://api.xserver.ne.jp、ベースパス /v1/vps、Bearerトークン（APIキー）による認証、JSONの応答、OpenAPIの仕様を明記。レート制限はアカウント単位でプランによらず毎分60・1日1万・同時接続5で、新規申し込みには dry_run、Idempotency-Key、expected_total_price の仕組みがある"
    evidenceUrl: "https://developer.xserver.ne.jp/api/vps/"
  - layer: "AIエージェント連携"
    name: "XServer MCP Server (npx xserver-mcp --services=vps / remote at api.xserver.ne.jp/mcp)"
    confidence: confirmed
    evidence: "公式マニュアル（2026-10-13確認）に、MCPサーバーは利用者のPC上で npx -y xserver-mcp --services=vps として動き、Node.js 18以上とAPIキーが要り、新規申し込みとOS再インストールは環境変数 XSERVER_MCP_ENABLE_HIGH_RISK_EXECUTE を1にしたときだけ有効になると明記。リモート版のマニュアルは、Claudeのコネクタに https://api.xserver.ne.jp/mcp を追加する方式で、課金を伴う操作はコネクタ経由では使えないと書く"
    evidenceUrl: "https://vps.xserver.ne.jp/support/manual/man_tool_mcp.php"
  - layer: "CLI"
    name: "XServer CLI (npm: xserver-cli, Node.js 18+)"
    confidence: confirmed
    evidence: "公式のCLIリファレンス（2026-10-13確認）に、Node.js（v18以上）の環境で npm install -g xserver-cli として入れ、xserver vps 配下のコマンドでVPSの一覧、電源、パケットフィルター、OS再インストール、新規申し込みを操作でき、課金を伴う実申請は対話端末でのみ実行でき --yes では確認を省けないと明記"
    evidenceUrl: "https://developer.xserver.ne.jp/cli/vps/"
  - layer: "自社サイト・管理画面"
    name: "Apache (vps.xserver.ne.jp, api.xserver.ne.jp, secure.xserver.ne.jp) / WordPress on nginx (community)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、vps.xserver.ne.jp、developer.xserver.ne.jp、api.xserver.ne.jp はHTTP/1.1で server: Apache を返し、api.xserver.ne.jp はHSTSを付けた。トップページの「ログイン」ボタンが指す secure.xserver.ne.jp/xapanel/login/xvps/ は server: Apache と charset=EUC-JP を返し、ユーザーコミュニティ community.xserver.ne.jp はHTTP/2で server: nginx とWordPressのREST APIのリンクを返したため、コミュニティはWordPressで動いているとみられる"
sources:
  - label: "XServer VPS公式: トップページ"
    url: "https://vps.xserver.ne.jp/"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: 料金・仕様一覧（初回契約時と契約更新時の料金表）"
    url: "https://vps.xserver.ne.jp/price.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: XServer VPSについて（第3世代AMD EPYC・NVMe・自社データセンター）"
    url: "https://vps.xserver.ne.jp/xserver-vps.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: 機能一覧"
    url: "https://vps.xserver.ne.jp/feature.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: OS・アプリイメージ一覧"
    url: "https://vps.xserver.ne.jp/os-list.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: Minecraft（マルチサーバー・専用の管理ツール）"
    url: "https://vps.xserver.ne.jp/minecraft.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: ゲーム専用VPS（XServer VPS for Game）"
    url: "https://vps.xserver.ne.jp/game-server/"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: Windows Server（料金・ライセンス・キャッシュバックキャンペーン）"
    url: "https://vps.xserver.ne.jp/windows-server.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: GPUサーバー（XServer VPS for GPU）"
    url: "https://vps.xserver.ne.jp/gpu.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: ビジネスプラン（SLA・自動バックアップ・新規受付の一時停止）"
    url: "https://vps.xserver.ne.jp/business.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: 無料VPS"
    url: "https://vps.xserver.ne.jp/free.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: アフィリエイト（A8.netの成果報酬）"
    url: "https://vps.xserver.ne.jp/affiliate.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: 特定商取引法に基づく表示"
    url: "https://vps.xserver.ne.jp/regulation.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPS公式: 利用規約（XServerアカウント・VPSサービス）"
    url: "https://vps.xserver.ne.jp/rule/rule.php"
    accessedAt: "2026-10-13"
  - label: "XServer VPSのニュース: 一覧（直近100件・2026年1月13日〜10月6日）"
    url: "https://vps.xserver.ne.jp/support/news.php"
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
  - label: "XServer VPSのニュース: ビジネスプランにおける新規受付の一時停止（2026-08-31・9月15日更新）"
    url: "https://vps.xserver.ne.jp/support/news_detail.php?view_id=19336"
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
  - label: "XServer 開発者ドキュメント: 更新履歴（API / CLI）"
    url: "https://developer.xserver.ne.jp/changelog/"
    accessedAt: "2026-10-13"
  - label: "XServer VPS クラウドのニュース: クラウド型VPS『XServer VPS クラウド』の提供を開始（2026-08-31）"
    url: "https://vpscloud.xserver.ne.jp/news/detail.php?view_id=19335"
    accessedAt: "2026-10-13"
  - label: "エックスサーバー株式会社: 沿革"
    url: "https://www.xserver.co.jp/history.php"
    accessedAt: "2026-10-13"
  - label: "エックスサーバー公式: お友達紹介プログラム（XServer VPSの特典・禁止事項）"
    url: "https://www.xserver.ne.jp/friend.php"
    accessedAt: "2026-10-13"
---

XServer VPSは、OSの選択からソフトの導入まで利用者が自分で決められる仮想専用サーバー（VPS）を、1か月から36か月までの前払いで貸す国内のサービスだ。運営するのは、当サイトが解剖した[エックスサーバー](/ja/articles/xserver)と[シン・レンタルサーバー](/ja/articles/shin-rental-server)を売るエックスサーバー株式会社で、2026年には、同じ「XServer API」の入口がVPSにも開いた。看板は、申し込みと同時に立ち上がるゲームのマルチサーバーと、Claude CodeやDifyのようなAIツールの試し場の二つだ。「圧倒的なコスパ」を掲げるこのVPSが、2026年の夏、機器の値上がりと想定を上回る申し込みに、在庫と値札の両方で向き合うことになった。当サイトはほかに[DigitalOcean](/ja/articles/digitalocean)や[ConoHa WING](/ja/articles/conoha-wing)も解剖しており、置き場所を選ぶ際の読み比べに使える。

## サービス解説

XServer VPSの中心は、メモリ2GBから64GBまでの6つのLinux向けプランだ。同じXServer VPSの名前の下に、Windows Serverを載せたプラン、ゲームのマルチプレイ向けのゲーム専用VPS、NVIDIA L4を積んだGPUサーバー、FX自動売買専用VPS、法人向けのビジネスプラン、1日ごとに更新する無料VPSが並ぶ。2026年8月には、複数台の構成を自動で組む別サービスのXServer VPS クラウドも加わった。

:::fact
エックスサーバー株式会社のコーポレートサイトの沿革（2026-10-13時点）によれば、同社は2022年9月に『Xserver VPS』を、2023年3月にWindows搭載の『Xserver for Windows』（現『Xserver VPS for Windows Server』）を、2023年4月にゲーム専用の『Xserver for Game』（現『Xserver VPS for Game』）を、2023年9月に『シン・VPS』を、2024年6月にマルチプレイ専用ゲームサーバーの『Xserver GAMEs』を、2025年12月にリソース専有型の『XServer VPS for FX プレミアム』を、2026年8月に『XServer VPS クラウド』を始めた。VPSの利用規約の附則は、規約の発効日を2022年9月8日とする。特定商取引法に基づく表示によれば、販売業者はエックスサーバー株式会社で、本社は大阪市北区のグランフロント大阪にある。サービス紹介のページは、国内の自社データセンターでサーバーを運用し、root権限を渡し、日本語でサポートすると書く。トップページは、エックスサーバーの国内シェアNo.1の根拠を2026年6月時点のW3Techsの調べとし、「国内VPSで圧倒的No.1を誇る処理性能」の根拠を、2024年11月18日の自社調べ（国内シェア上位3社がVPSと称するサービスの2GBメモリのプランを対象に、CPUはsysbench、IOPSはブロックサイズ1MB・合計2GBで5分ごとに70回実施したランダムリードとランダムライトの平均値で比較、シェアはbuiltwith.comのデータで算出）と注記する。
:::

:::fact
料金・仕様一覧（2026-10-13確認・税込）によれば、プランは2GB（vCPU 3コア・NVMe SSD 50GB）、4GB（4コア・150GB）、8GB（6コア・400GB）、16GB（8コア・800GB）、32GB（12コア・1,600GB）、64GB（24コア・2,400GB）の6つで、36か月契約の月額換算はそれぞれ1,265円、2,035円、3,850円、8,690円、22,220円、45,650円、1か月契約では1,980円、2,640円、5,280円、11,770円、26,510円、53,020円。初回契約時と契約更新時の表には同じ金額が並び、支払いは契約期間分の一括前払いで、初期費用は0円だ。ネットワークは「インターネット 10Gbps共有（1契約あたり最大100Mbps）」、データ転送量は無制限、IPv4アドレスは1個で、サーバーを丸ごと保存するイメージ保存は50GBまで無料、500GBの追加は月1,650円。プランは上位へ変更できる。機能一覧によれば、メールでの相談は24時間365日、電話は平日10時から18時に受け付ける。トップページのプラン表は、2GB・4GB・8GBの自動バックアップとプライベートネットワークを「-」とする。Windows Serverのプランは、36か月契約の2GB（3コア・100GB）が月2,410円からで、2026年8月31日17時から11月19日17時までは、12か月以上の新規契約に月額料金の最大30%（12か月20%、24か月25%、36か月30%）をキャッシュバックして実質月1,687円からとし、サーバー管理以外の目的でリモートデスクトップ接続する人数分の契約が要るリモートデスクトップSALは月1,210円、Microsoft Office SALは月3,740円。GPUサーバーは、NVIDIA L4（VRAM 24GB）1枚、vCPU 24コア、メモリ120GBで1時間150円、月の上限は88,000円で、停止中も課金される。法人向けのビジネスプランは、月間稼働率99.99%以上のSLAと週1回・1世代の自動バックアップを無料で付けるが、新規受付を一時停止している。特定商取引法に基づく表示は、支払い方法をクレジットカード、Paidyの翌月後払い（コンビニ・銀行）、プリペイドとし、支払い後の申し込みのキャンセルはできないと書く。
:::

:::pull
「圧倒的なコスパ」を掲げるVPSが、2026年の夏、機器の値上がりを在庫と値札で引き受けた。
:::

::scorecard

## UX分析

XServer VPSの体験は、VPSに付きものの手間のうち最初の構築を徹底して肩代わりし、その先の運用は利用者に委ねる、という線引きでできている。2026年はそこに、在庫の事情でどのプランが今申し込めるのかを読み解く手間が加わった。

- **申し込みと同時にゲームサーバーが立つ**。OS・アプリイメージ一覧（2026-10-13確認）のゲームの項には40件が並び、うち10件はMinecraftの各版（Java版、統合版、Paper、Forgeなど）だ。トップページは、申し込みが完了すると同時に自動でインストールが始まるとして「たったの20秒でマルチサーバー構築」を掲げる。Minecraftのページは、設定の変更やバージョンアップ、バックアップをクリック操作で行える専用の管理ツールを紹介し、ゲーム専用VPSのページは、パルワールド、Minecraft、ARKを他社のサーバーからワールドデータごと移せる「簡単移行」を載せる。一方で、SatisfactoryとSoulmaskはメモリ16GB以上、Counter-Strike 2とConan Exilesは8GB以上のプランでしか使えないなど、ゲームによっては使えるプランに下限がある。
- **AIツールもイメージで配る**。同じ一覧の「AIツール」の項には、Claude Code、Codex CLI、Gemini CLI、Dify、n8n、OpenClawの6件が並び、Claude Code、Codex CLI、Gemini CLI、Difyはメモリ4GB以上のプランで使える。OpenClawは、DiscordやTelegramなどのチャット経由でVPS上のファイル操作やコマンド実行を行えるAIエージェントと説明されている。無料VPSのページは利用シーンの一つにバイブコーディングを挙げ、お友達紹介のページはXServer VPSを「開発用途やAI活用に対応し多彩なOS・アプリイメージを利用可能」と紹介する。
- **どのプランが今申し込めるかは、お知らせを読み合わせる**。7月14日のお知らせは2GBプランの新規受付を一時停止したと告げ、10月6日のお知らせは、9月17日から止めていた新規受付を再開し、ビジネスプランと無料VPSは引き続き停止すると書く。2026年10月13日の時点で、トップページと料金・仕様一覧は2GBプランを月1,265円からの申し込みボタン付きで載せ、ビジネスプランと無料VPSのページは「受付停止中」と表示していた。APIのリファレンスは、受付を一時停止しているプランも再開予定ならプラン一覧に含めるとし、実際に申し込めるかは新規申し込みのAPIを `dry_run=true` で呼んで確かめるよう求め、受け入れられるサーバーがないときは409 CAPACITY_UNAVAILABLEを返すと書く。
- **無料VPSは1日ごとに手で延ばす**。無料VPSのページは「国内初」をうたい（根拠は2025年7月10日時点の自社調べ）、2GB（2コア）と4GB（3コア）、NVMe 30GB、30Mbpsのプランを、クレジットカードの登録を条件に月0円で載せる。契約はコントロールパネルから1日ごとに手動で更新し、更新しなければサーバーは削除され、更新を自動化するスクリプトやボットの利用は不正行為とされる。7月14日のお知らせによれば、7月22日からは利用期間が最大24時間（変更前は2GBで最大96時間、4GBで最大48時間）に縮み、更新できるのは残り12時間からになった。ニュース一覧によれば、新規受付は7月10日から止まっている。
- **バックアップと更新は自分で**。利用規約は、会社が利用者のデータのバックアップを行う義務を負わず、利用者自身で備える必要があると定める。料金・仕様一覧の標準サービスに自動バックアップの項目はなく、無料で使える備えは50GBまでのイメージ保存だ。ビジネスプランは週1回・1世代の自動バックアップを、XServer VPS クラウドは1日1回・最大7日分のバックアップを標準で付ける。Minecraftのページは「サーバー環境はお客様自身で管理していただく必要があります」と注意する。ニュース一覧に並ぶ直近100件（2026年1月13日〜10月6日）のうち、タイトルに「脆弱性」を含む注意喚起は16件で、n8nとOpenClawがそれぞれ3件を占め、いずれもアプリイメージとして配っているソフトだ。
- **解約の時期は、ページによって書き方が違う**。VPSサービスの利用規約の第8条は、解約の届け出を会社が確認した日の翌月末をもって解約とし、すでに払った料金は返さないと定める。一方で特定商取引法に基づく表示は、解約手続きが完了すると、手続き時点の利用期限日をもって解約になると書く。VPSサービスの利用規約の第12条によれば、契約期間が満了する14日前に更新の通知が届き、その月の末日までに更新しない旨を伝えなければ、同じ期間で自動的に更新される。契約の前に、自分の契約にどちらの書き方が当てはまるかを確かめておきたい。

## 技術構成

::techstack

:::fact
サービス紹介のページ（2026-10-13確認）によれば、CPUは第3世代の「AMD EPYC」（コードネーム「Milan」）で、全ストレージにNVMeを使ったストライピング構成にミラーリング構成を備え、従来のオールSSD環境と比べて読み込み速度は最大約17倍（2024年1月時点の自社調べ、fioで128並列の負荷をかけたランダムリードのスループットの比較）としている。ネットワークは国内最大級のバックボーン回線に10Gbpsで直結する。ゲーム専用VPSのページは、2GBから64GBまで標準のプランと同じ月額で、ディスクを2GBで50GB、4GB以上で100GBとし、帯域を2GBと4GBで100Mbps、8GBで200Mbps、16GBで300Mbps、32GBで500Mbps、64GBで1Gbps、128GB（40コア・36か月契約で月91,190円）で2Gbpsとする別の配分を載せる。OS・アプリイメージ一覧は、OSとしてAlmaLinux、Arch Linux、CentOS Stream、Debian、Fedora、Oracle Linux、Rocky Linux、Ubuntu（22.04・24.04・26.04）、openSUSE Leapの9系統を並べる。当サイトが数えたアプリイメージは、AIツール6件、ビジネスツール6件、プログラミングツール4件、ブログ・サイト制作12件、ゲーム40件、サーバー管理・その他23件の計91件で、ベースのOSは多くがUbuntu 24.04、ゲームの多くはUbuntu 22.04、WordPressのKUSANAGIはAlmaLinux 8・9とCentOS Stream 9だ。ニュース一覧によれば、2026年にはOpenClaw（2月6日）、Coolify（2月10日）、Dokploy（4月10日）、Ubuntu 26.04（4月30日）、Conan Exiles（9月2日）などの追加を告知し、9月4日にはDebian 11の新規提供の終了を告知した。GPUサーバーのページは、コントロールパネルを独自開発の管理ツールと説明する。
:::

:::fact
2026年9月8日のお知らせによれば、「XServer API」の対応サービスにXServer VPS、Windows Server、GPUサーバーが加わり（無料プランは対象外）、VPS情報の照会、電源操作、OS再インストール、パケットフィルター、新規申し込みをAIエージェントや外部プログラムから実行できるようになった（新規申し込みはWindows ServerとGPUサーバーでは使えない）。開発者向けの更新履歴は、同じ日にシンVPSのAPIも始まり、APIからの新規申し込みは無料お試し期間のない本契約だと記す。APIのリファレンス（2026-10-13確認）によれば、ベースURLは `https://api.xserver.ne.jp`、ベースパスは `/v1/vps` で、`xs_` で始まるAPIキーをBearerトークンとして送り、OpenAPIの仕様（`openapi.json`）を公開している。レート制限はアカウント単位で、プランによらず毎分60・1日1万・同時接続5。超えると429とRetry-Afterが返り、認証の失敗が短時間に続くとIPアドレス単位で一時的にブロックされる。新規申し込み（`POST /v1/vps/servers`）は、APIキーで申し込みを許すのにプリペイド残高が2万円以上要り、`dry_run=true` で金額と受付可否を確かめ、実申請では `Idempotency-Key` ヘッダー、`expected_total_price`（現在価格と違えばPRICE_MISMATCH）、`agree_to_terms=true` を送る。対象はLinuxの標準OSのVPSとビジネスVPSで、取次店コードの `partner_code` も指定でき、自動更新は既定で有効だ。CLIのリファレンスによれば、npmの `xserver-cli` では課金を伴う実申請は対話端末でしか実行できず、`--yes` で確認を省くこともできず、応答を受け取れずに同じキーで再送すると48時間は409 DUPLICATE_REQUESTになる。MCPサーバーのマニュアルによれば、MCPサーバーは `npx -y xserver-mcp --services=vps` として利用者のPC上で動き（Node.js 18以上）、新規申し込みとOS再インストールは、APIキー側の許可に加えて環境変数 `XSERVER_MCP_ENABLE_HIGH_RISK_EXECUTE` を1にしたときだけ有効になり、実申請の前に申込内容と税込の合計金額が示される。リモート版は、Claudeのコネクタに `https://api.xserver.ne.jp/mcp` を追加してXServerアカウントで連携を許可する方式で、有効期限とIP制限の設定はなく、課金を伴う操作はコネクタ経由では使えない。当サイトの実観測（2026-10-13）では、`vps.xserver.ne.jp` と `developer.xserver.ne.jp` はHTTP/1.1で server: Apache を返し、`api.xserver.ne.jp` のルートは403とともにHSTS（max-age=63072000; includeSubDomains）を返した。トップページの「ログイン」ボタンが指す `secure.xserver.ne.jp/xapanel/login/xvps/` は200とともに server: Apache と charset=EUC-JP を、ユーザーコミュニティの `community.xserver.ne.jp` はHTTP/2で server: nginx とWordPressのREST APIのリンクを返した。当サイトの実観測（2026-10-11）では、認証なしの `GET /v1/vps/servers` は401とJSONのエラー（code: UNAUTHORIZED）を、`/mcp` へのGETは405と Allow: POST を返した。
:::

:::guess
新規申し込みのAPIに、事前の試算、予想金額の一致、Idempotency-Key、CLIでの対話端末の確認という歯止めが重なり、受付を止めているプランをあえて一覧に残して409 CAPACITY_UNAVAILABLEで断る設計は、AIエージェントやプログラムが、在庫の揺れる中で申し込むことを前提にしたものと読める。更新履歴によれば、APIキーは2026年8月からXServerアカウント単位になり、1つのキーでサーバー管理やドメインなど複数のサービスを扱えるようになった。シンVPSのAPIが同じ日に始まったことも合わせると、契約と管理の仕組みを複数のブランドで共有し、VPSはその上に載ったとみられる。ログインの入口が文字コードにEUC-JPを使っていることは、長く使われてきた顧客管理の仕組みを引き継いでいることをうかがわせる。一方で、サービス紹介のページのCPUは第3世代のEPYCのままで、8月に始めたXServer VPS クラウドについては、お知らせが「本サービス向けに新たに設計したハードウェア」を採用したと書く。新しく調達した機器は、クラウドの側に振り向けられたと推測される。
:::

## 機器の値上がりが、在庫と値札に届くまで

:::fact
ニュース一覧と各お知らせ（2026-10-13確認）によれば、2026年の夏の経過は次のとおりだ。7月10日、想定を上回る申し込みでサーバー在庫がひっ迫しているとして、無料2GBプランと無料4GBプランの新規受付を止めた。7月14日17時には、世界的なサーバー機器の需要増加などで機器の調達コストが大幅に高騰し、従来と同等の水準で在庫を確保することが難しくなったうえ、想定を上回る申し込みで在庫がひっ迫しているとして、2GBプランの新規受付の一時停止、4GB以上のプランの「メモリ無料増設」の新規提供の終了、9月3日までの予定だった「最大20％オフキャンペーン」の早期終了を実施し、7月22日には無料VPSの利用期間を縮めた。メモリ無料増設は、Windows Serverとビジネスプランのページによれば、8GBに4GBを足して12GBにするように、無料でメモリ容量を永続的に増やす仕組みだ。7月9日には、お友達紹介の特典を2倍にするキャンペーンの早期終了も告知している。8月3日には、9月1日付で全プランの初回契約時と契約更新時の料金を改定すると告げ、改定日までに更新すれば改定前の料金で契約期間を延ばせると案内した。8月31日にはビジネスプランの新規受付を止め、同じ日に、半年以上前から別に準備してきた専用の設備で提供するXServer VPS クラウドを始めた。ビジネスプランの再開は、9月中旬の予定から9月15日に「未定」に改められた。9月17日にはXServer VPSの全プランの新規受付を止め（契約中の利用者の追加申し込みは可能）、再開を11月中と予告したが、10月6日17時に再開した。ビジネスプランと無料VPSは、10月13日の時点でも停止中だ。同日のトップページは、XServer VPS クラウドを「10/26まで｜契約期間＋3ヶ月無料」、月額2,480円から（1か月契約の場合）と勧めるポップアップを載せていた。
:::

| 月額（税込） | 改定前（8月31日まで） | 改定後（9月1日から） | 上げ幅（当サイトの計算） |
| --- | --- | --- | --- |
| 2GB・36か月契約 | 990円 | 1,265円 | 27.8% |
| 2GB・1か月契約 | 1,496円 | 1,980円 | 32.4% |
| 4GB・36か月契約 | 1,700円 | 2,035円 | 19.7% |
| 8GB・36か月契約 | 3,201円 | 3,850円 | 20.3% |
| 16GB・36か月契約 | 7,200円 | 8,690円 | 20.7% |
| 64GB・36か月契約 | 38,000円 | 45,650円 | 20.1% |

表の金額は8月3日のお知らせによる。36の契約期間とプランの組み合わせのうち、上げ幅が最も小さいのは4GBの36か月契約などの19.7%、最も大きいのは2GBの1か月契約の32.4%で、2GBを36か月契約で払う総額は35,640円から45,540円になる（当サイトの計算）。

:::guess
在庫のひっ迫を理由に最初に止まったのが無料VPSと最も安い2GBプランで、値上げ幅も2GBが最も大きかったことは、入口のプランほど、値段と機器の原価の差が小さくなっていたことを示しているとみられる。7月まで4GB以上に付いていたメモリの無料増設とキャンペーンも消えたため、新しく契約する人にとっての実質の値上がりは、値札の上げ幅（当サイトの計算で19.7〜32.4%）を上回ると推測される。お友達紹介のページが「開発用途やAI活用」を掲げ、無料VPSのページが利用シーンにバイブコーディングを挙げていたことを合わせると、AIツールを試すための需要が、想定を上回った申し込みの一部を占めた可能性がある。止まっている間の受け皿として、別の設備で動くクラウドを同じ日に立ち上げていたことは、新しい機器を、日次バックアップや複数台構成で単価を上げやすい新サービスに優先して振り向ける判断と読める。
:::

## ビジネスモデル

稼ぎ方は、契約期間分を前払いで受け取るVPSの利用料が中心で、イメージ保存の追加、Windowsのライセンス、GPUの時間課金などが上に乗る。客を集める役は、A8.netのアフィリエイト、お友達紹介、期間を区切ったキャンペーンが担う。

:::fact
アフィリエイトのページ（2026-10-13確認）によれば、プログラムはA8.netで提供され、XServer VPSの成果報酬は1件あたり、2GBが1か月契約で1,046円・3か月以上で1,569円、4GBが2,000円・3,000円、8GBが4,000円・6,000円、16GBが8,864円・13,296円、32GBが20,091円・30,137円、64GBが40,182円・60,273円で、ビジネスプランの行は「新規受付を一時停止しています」と表示する。Windows Serverは2,000円から64,000円、ゲーム専用VPSは690円から47,115円（128GBは45,000円）、FX自動売買専用VPSのFXプレミアムは12,000円から43,000円で、ページは自分の申し込みにも使えると注記する。4GBから64GBの1か月契約の報酬は、8月3日のお知らせにある改定前の1か月契約の月額（税込）を1.1で割った額と円未満の四捨五入で一致し、3か月以上の報酬はその約1.5倍だ（当サイトの計算）。お友達紹介のページによれば、XServer VPSの紹介では紹介した側と紹介された側の双方に利用料金の10%の特典が付き（2GBの36か月契約では、改定後の支払総額45,540円の10%にあたる4,554円）、A8.netなどのアフィリエイトやXServerビジネスパートナープログラムとは併用できず、SNSや掲示板、ブログなどでの不特定多数への拡散は禁じられ、ビジネスプランの申し込みには新規受付の停止に伴い成果報酬が発生しない。VPSサービスの利用規約の第23条は、条件付きで、XServer VPSを使って同様のサービスを第三者に提供する再販を認める。ニュース一覧によれば、2026年4月16日に6月18日までの最大25％キャッシュバック（実質月額742円から）、5月1日に還元率を最大30％に上げたキャンペーン（実質月額693円から）、6月18日に9月3日までの最大20％オフが告知されたが、10月13日の料金・仕様一覧にLinuxのプランのキャンペーン価格は載っていなかった。
:::

:::guess
A8.netの報酬の表が改定前の料金をもとに組まれたまま残っているとすれば、料金に連動するお友達紹介と違って、値上げのあとも紹介1件あたりの支払いは据え置かれ、売上に対する紹介の費用の比率は下がったことになる。一方で、在庫が足りない時期には紹介で申し込みを増やすことが必ずしも望ましくなく、7月にお友達紹介の特典を2倍にするキャンペーンを早く切り上げ、Linuxのプランのキャンペーンを止めたのは、集客の蛇口を絞る判断とみられる。それでもWindows Serverのキャンペーンを11月19日まで続けていることからは、ライセンス料が上に乗るWindowsのプランでは、在庫の状況や採算がLinuxのプランと異なる可能性がうかがえる。再販の許可、APIの取次店コード、APIからの申し込みは、個人の客に加えて、複数のサーバーをまとめて扱う事業者を販路に取り込む仕組みと推測される。
:::

2022年に始まったXServer VPSの入口は、改定前は36か月契約で月990円だった2GBプランと、申し込みと同時に立つゲームサーバーで、2026年にはClaude CodeやOpenClawのようなAIツールまでイメージで配っている。その夏、機器の値上がりと想定を上回る申し込みは、無料枠の縮小、メモリの増設とキャンペーンの終了、約2割から3割強（当サイトの計算）の値上げ、3週間近い受付停止という形で利用者の前に現れた。同じ時期に開いたAPIとMCPは、AIエージェントが在庫の揺れる中で申し込むことまで織り込んで設計されているように見える。安さを看板にするVPSが値札で競いにくくなったとき、次に選ばれる理由は、エージェントが迷わず扱える手順と、止まっても戻れる仕組みの側に移っていくのかもしれない。
