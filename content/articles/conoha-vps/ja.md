---
service: "ConoHa VPS"
title: "ChatGPTにはサーバーを作らせず、Claudeには作らせる — 1時間1.3円からの時間課金と、10月29日まで最大66%引きの前払いを並べ、AIエージェントに5つの窓口を開いたConoHa VPSを解剖する"
description: "ConoHa VPSは、GMOインターネット株式会社が「ConoHa」ブランドで提供するVPS（仮想専用サーバー）だ。ConoHaは2013年7月に、当時のGMOインターネット（現・GMOインターネットグループ）がVPSの新ブランドとして始めた。メモリ512MBから128GBまでの9プランを、1時間1.3円からで月額に上限がある時間課金と、1〜36か月分を前払いする「まとめトク」の二本立てで売り、クラウド基盤はOpenStack、データ転送量は無料だ。まとめトクは2026年10月29日16時までのキャンペーンで時間課金と比べて最大66%OFF（月額293円から）になるが、価格は申し込み時だけで、更新時には適用されない。当サイトが数えたテンプレートはOS 13系統とアプリ31件、スタートアップスクリプトは38件で、Claude Code、Codex CLI、OpenClaw、Hermes AgentなどAIエージェント系の7件には、9月25日から悪性パッケージ対策「Guard」の管理スクリプトを同梱する。2025年7月のOSS版MCPに続いて、2026年にはリモートMCP、Claudeのコネクタ、ChatGPTのプラグインを公開したが、ChatGPTのプラグインからはサーバーの新規作成とリサイズができない。料金とキャンペーン、テンプレート、MCPとAPIのドキュメント、リリースノート、会員規約、アフィリエイトとパートナー制度、プレスリリース、決算説明資料、当サイトの実観測から、二つの値付けと、AIエージェントへの窓口ごとの権限の分け方を解剖する。"
lead: "「プラグインのご利用によって『ConoHa VPS byGMO』の料金が変動することはありません」——2026年9月1日、GMOインターネットは、ChatGPTからVPSを操作するプラグインの提供開始を、こう説明した。このプラグインからは、料金が新たに発生するサーバーの新規作成やリサイズを行えない。一方、8月に始まったClaudeのコネクタでは、サーバーの作成まで日本語で頼める。1時間単位の時間課金と前払いの割引を並べてきたVPSが、AIエージェントにどこまでの操作を渡したのかを、公開情報だけで解剖する。"
category: dev-tool
tags: [hosting, vps, small-business, api, mcp, ai-agent, security]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-29"
    claim: "Happy Halloweenキャンペーン（まとめトクの初回価格・最大66%OFF、10月29日16時まで）と、それを使った値上がり幅の計算"
  - date: "2026-11-13"
    claim: "2026年12月期第2四半期の決算資料を最新とする記述（第3四半期の決算説明会は11月13日の予定）"
serviceUrl: "https://vps.conoha.jp/"
# Affiliate link placeholder: ConoHa VPS runs its affiliate program through two ASPs, A8.net and Moshimo
# Affiliate (https://vps.conoha.jp/affiliate/, checked 2026-10-13): flat rewards per sale, 1GB 1,000 yen,
# 2GB 1,100 / 2,000 yen (1-month / 3-month-or-longer) up to 96GB 40,200 / 53,900 yen. The page calls the
# table an excerpt (full terms on each ASP), says there is no cap per sale (several servers in one sale pay
# for each server) and offers self-back on your own sign-up. Register with A8.net (program s00000000018030)
# or Moshimo Affiliate (promotion 2540), then apply to the ConoHa VPS program from the network's
# dashboard. The owner already has a Moshimo link for ConoHa WING (content/articles/conoha-wing); ConoHa VPS
# needs its own material. Use the ASP's ad code as provided: the link to affiliate.url, the 1x1 impression
# image to affiliate.impressionUrl (rewrite Moshimo's //i.moshimo.com to https://), the text ad verbatim to
# affiliate.label. Never invent the label — ask the owner. Do not mix in the ConoHa partner program
# (https://www.conoha.jp/wing/partner/: 300-15,000 yen plus 15% of every renewal for 1GB+ prepaid plans):
# it cannot be combined with affiliate links. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<a8-or-moshimo-link-for-conoha-vps>"
#   program: "ConoHa VPS Affiliate Program (A8.net / Moshimo Affiliate)"
#   impressionUrl: "https://<impression-pixel-of-that-link>"
#   label: "<verbatim text of the ad material>"
vendor: "GMOインターネット株式会社"
origin: "JP"
heroTheme: "conoha-vps"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "クラウド基盤"
    name: "OpenStack (OpenStack-compatible public API, Ver.3.0)"
    confidence: confirmed
    evidence: "公式の料金・スペックのページ（2026-10-13確認）に、クラウド基盤はOpenStackを採用し、OpenStack準拠のAPIを無料で提供すると明記。APIのご利用についてのドキュメントは、APIをクラウド基盤のOpenStackの機能で実装しており、使い方はConoHaのサポート対象外だと書く"
    evidenceUrl: "https://vps.conoha.jp/pricing/"
  - layer: "ストレージ・可用性"
    name: "NVMe SSD distributed storage / automatic failover (HA) / SLA 99.99%"
    confidence: confirmed
    evidence: "公式の法人向けページ（2026-10-13確認）に、すべてのストレージにNVMeのSSDを搭載した耐障害性にすぐれた分散ストレージ構成、ホストサーバーの障害時に別のホストサーバーへ自動フェイルオーバーするHA機能の標準搭載、DDoS攻撃対策システムの配備、月間稼働率99.99%のSLAを明記"
    evidenceUrl: "https://vps.conoha.jp/for-corporations/"
  - layer: "ネットワーク"
    name: "50 Gbps shared uplink (limited to 100 Mbps, upgradable to 1 Gbps) / 1 Gbps private network"
    confidence: confirmed
    evidence: "公式の料金・スペックのページ（2026-10-13確認）に、インターネット50Gbps共有（100Mbps制限あり）、プライベートネットワーク1Gbps共有、IPv4アドレス1個とIPv6アドレス17個、データ転送量は課金なしの無制限と明記。有料のネットワーク帯域拡張は300Mbps・500Mbps・1Gbpsの3段階"
    evidenceUrl: "https://vps.conoha.jp/pricing/"
  - layer: "OS・アプリテンプレート"
    name: "13 OS families / 31 app templates / 38 startup scripts (user-data)"
    confidence: confirmed
    evidence: "公式のOS・アプリケーションテンプレートのページ（2026-10-13確認）に、CentOS、Ubuntu、AlmaLinux、FreeBSD、OpenBSDなどのOSと、KUSANAGI、LAMP、GitLab、Dockerなどのアプリケーションテンプレートを掲載し、サーバー作成と同時にOSのインストールやアプリケーションサーバーの構築が完了すると明記。スタートアップスクリプトのページはOpenClaw、Claude Code、Difyなどを並べ、サーバー作成APIのドキュメントはuser-dataに `#cloud-config` などのヘッダーを使えると書く。件数は当サイトの集計"
    evidenceUrl: "https://vps.conoha.jp/function/template/"
  - layer: "外部API・IaC"
    name: "OpenStack-compatible API (compute.c3j1.conoha.io/v2.1) / Terraform ConoHa VPS Provider"
    confidence: confirmed
    evidence: "公式ドキュメントのサーバー作成API（2026-10-13確認）は、compute.c3j1.conoha.io の /v2.1/servers を宛先とし、ブート用ボリュームの事前作成と、エンコード前で16 KiBまでのuser-dataを説明する。Terraform Providerのページは、Terraform ConoHa VPS Providerを無料の公式プラグインとし、API経由で作成したサーバーは時間課金になり、まとめトクは使えないと答える"
    evidenceUrl: "https://doc.conoha.jp/reference/api-vps3/api-compute-vps3/compute-create_vm-v3/"
  - layer: "AIエージェント連携"
    name: "ConoHa VPS MCP Server (remote: api.conoha.jp/vps/mcp, OAuth 2.1 / OSS: Apache-2.0, Node.js 20+)"
    confidence: confirmed
    evidence: "公式ドキュメント（2026-10-13確認）に、リモート版は https://api.conoha.jp/vps/mcp に接続してConoHaアカウントで認可し、ConoHa APIのパスワードやKeystone tokenを設定ファイルに書かずに使えること、ChatGPTプラグインではサーバーとボリュームの新規作成とサーバーのリサイズを提供しないことを明記。OSS版のドキュメントは、v0.6.2をApache License 2.0で公開し、Node.js v20以上かDockerで動くベータ版で、ConoHaサポートの対象外だと書く"
    evidenceUrl: "https://doc.conoha.jp/reference/mcp-server/remote-mcp/conoha-vps-mcp-server-remote/"
  - layer: "サプライチェーン対策"
    name: "Takumi Guard (GMO Flatt Security, bundled with 7 AI-agent startup scripts)"
    confidence: confirmed
    evidence: "公式ドキュメント（2026-10-13確認）に、Takumi GuardはGMO Flatt Securityの「Takumi byGMO」の「Guard」機能で、パッケージレジストリの手前に置くプロキシとしてブロックリストの悪性パッケージへのリクエストを拒否すること、Claude Code、Codex CLI、OpenClawなど7つのスタートアップスクリプトに管理スクリプト（/root/takumi-guard.sh）を同梱することを明記し、リリースノートは既定で無効と書く"
    evidenceUrl: "https://doc.conoha.jp/products/vps-v3/startupscripts-v3/takumi-guard/"
  - layer: "GPU"
    name: "NVIDIA L4 Tensor Core GPU (24 GB; H100 new orders ended March 31, 2026)"
    confidence: confirmed
    evidence: "公式のGPUサーバーのページ（2026-10-13確認）に、NVIDIA L4（GPU搭載メモリ24GB）1枚の構成を、20vCPU・メモリ128GBで1時間154.0円（月90,200円）、4vCPU・メモリ16GBで1時間60.5円（月36,300円）とし、OSはUbuntu 22.04LTS、アプリケーションテンプレートはAutomatic1111・InvokeAI・NVIDIA Container Toolkitと明記。ページ上部には「NVIDIA H100 TensorコアGPU」提供終了のお知らせが載り、リリースノートは2026年3月31日に新規提供を終えたと書く"
    evidenceUrl: "https://vps.conoha.jp/gpu/"
  - layer: "自社サイト・管理画面"
    name: "Cloudflare (vps.conoha.jp, doc.conoha.jp, api.conoha.jp) / ASP.NET session cookies (manage.conoha.jp) / nginx (compute API)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-13）で、vps.conoha.jp、doc.conoha.jp、api.conoha.jp はHTTP/2で server: cloudflare と末尾がNRTの cf-ray を返し、vps.conoha.jp は PHPSESSID のクッキーを付けた。コントロールパネルの manage.conoha.jp はログインページへの302とともに ASP.NET_SessionId と .ASPXAUTH のクッキーを返し、APIの compute.c3j1.conoha.io はHTTP/1.1で server: nginx を返したため、管理画面はASP.NET、APIの入口はnginxで動いているとみられる"
sources:
  - label: "ConoHa VPS公式: トップページ（よくある質問・性能比較の注記）"
    url: "https://vps.conoha.jp/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: 料金・スペック（時間課金・まとめトク・オプション）"
    url: "https://vps.conoha.jp/pricing/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: Happy Halloweenキャンペーン（2026年10月29日16時まで）"
    url: "https://vps.conoha.jp/campaign/special/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: 機能一覧"
    url: "https://vps.conoha.jp/function/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: OS・アプリケーションテンプレート"
    url: "https://vps.conoha.jp/function/template/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: スタートアップスクリプト"
    url: "https://vps.conoha.jp/function/startupscript/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: MCPサーバー（リモート版）"
    url: "https://vps.conoha.jp/function/remote-mcp/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: Terraform Provider"
    url: "https://vps.conoha.jp/terraform_provider/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: GPUサーバー"
    url: "https://vps.conoha.jp/gpu/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: 法人向け（NVMe・分散ストレージ・HA機能）"
    url: "https://vps.conoha.jp/for-corporations/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: よくある質問（解約・プラン変更）"
    url: "https://vps.conoha.jp/faq/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: ご利用の流れ（申し込み手順・支払い方法）"
    url: "https://vps.conoha.jp/flow/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: アフィリエイトプログラム（A8.net・もしもアフィリエイト）"
    url: "https://vps.conoha.jp/affiliate/"
    accessedAt: "2026-10-13"
  - label: "ConoHa VPS公式: llms.txt"
    url: "https://vps.conoha.jp/llms.txt"
    accessedAt: "2026-10-13"
  - label: "ConoHaドキュメント: リリースノート"
    url: "https://doc.conoha.jp/release-notes/"
    accessedAt: "2026-10-13"
  - label: "ConoHaドキュメント: ConoHa VPS MCP Server リモート版"
    url: "https://doc.conoha.jp/reference/mcp-server/remote-mcp/conoha-vps-mcp-server-remote/"
    accessedAt: "2026-10-13"
  - label: "ConoHaドキュメント: ConoHa VPS MCP Server OSS版(ローカル)"
    url: "https://doc.conoha.jp/reference/mcp-server/local-mcp/conoha-vps-mcp-server-local/"
    accessedAt: "2026-10-13"
  - label: "ConoHaドキュメント: APIのご利用について（公開API Ver.3.0）"
    url: "https://doc.conoha.jp/reference/api-vps3/api-guideline-vps3/api-guideline-v3/"
    accessedAt: "2026-10-13"
  - label: "ConoHaドキュメント: サーバー作成（Compute API）"
    url: "https://doc.conoha.jp/reference/api-vps3/api-compute-vps3/compute-create_vm-v3/"
    accessedAt: "2026-10-13"
  - label: "ConoHaドキュメント: Takumi Guard（同梱ツール）"
    url: "https://doc.conoha.jp/products/vps-v3/startupscripts-v3/takumi-guard/"
    accessedAt: "2026-10-13"
  - label: "ConoHa公式: 会員規約（自動更新・バックアップ・附則）"
    url: "https://www.conoha.jp/agreement/"
    accessedAt: "2026-10-13"
  - label: "ConoHa公式: 企業情報（GMOインターネット株式会社）"
    url: "https://www.conoha.jp/company/"
    accessedAt: "2026-10-13"
  - label: "GMO Internet, Inc.: Corporate Profile（英文の会社概要）"
    url: "https://internet.gmo/en/company/outline/"
    accessedAt: "2026-10-13"
  - label: "ConoHa公式: パートナープログラム（取次制度）"
    url: "https://www.conoha.jp/wing/partner/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: 旧会社の沿革（2025年1月1日の組織再編前の各社沿革）"
    url: "https://internet.gmo/company/history/archive/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: 『ConoHa VPS byGMO』、国内クラウド事業者で初めてAnthropic「Claude」のコネクタを提供開始（2026-08-12）"
    url: "https://internet.gmo/news/article/218/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: 【国内初】ConoHa VPS byGMOが「ChatGPT」対応プラグイン提供開始（2026-09-01）"
    url: "https://internet.gmo/news/article/224/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: 『ConoHa VPS byGMO』、AIエージェント開発環境に悪意あるプログラム部品の侵入を防ぐ機能を無料で同梱（2026-10-01）"
    url: "https://internet.gmo/news/article/236/"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: 2026年12月期 第2四半期決算説明資料（2026-08-14）"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_presentation.pdf"
    accessedAt: "2026-10-13"
  - label: "GMOインターネット株式会社: 2026年度第2四半期 決算書き起こし"
    url: "https://internet.gmo/pdf/presen/gmointernet_fy2026q2_j_script.pdf"
    accessedAt: "2026-10-13"
---

ConoHa VPSは、OSやソフトを利用者が自由に入れられる仮想専用サーバー（VPS）を、1時間単位の時間課金か、1〜36か月分の前払いで貸す国内のサービスだ。運営するGMOインターネット株式会社は、当サイトが解剖した[ConoHa WING](/ja/articles/conoha-wing)や[お名前.com](/ja/articles/onamae)も手がける。2026年10月のトップページは「セルフホストをもっと手軽にする、ConoHa VPS。」と掲げ、AIエージェントを24時間動かしておく置き場所としての使い方を前に出す。同じ年には、ClaudeやChatGPTからVPSそのものを操作する窓口も相次いで開いた。当サイトはほかに[XServer VPS](/ja/articles/xserver-vps)、[さくらのレンタルサーバ](/ja/articles/sakura-rental-server)、[DigitalOcean](/ja/articles/digitalocean)も解剖しており、置き場所を選ぶ際の読み比べに使える。

## サービス解説

ConoHa VPSの中心は、メモリ512MBから128GBまでの9つのプランだ。ラインアップには、Windows Server、NVIDIA L4を積んだGPUサーバー、オブジェクトストレージ、DBサーバー、メールサーバー、WordPressの実行環境のKUSANAGIが並び、法人向けには株式会社ビヨンドと協業した運用代行のマネージドパックもある。マルチプレイのゲームサーバーには、別ブランドのConoHa for GAMEが用意されている。

:::fact
GMOインターネットの「旧会社の沿革」（2025年1月1日の組織再編前の各社沿革、2026-10-13確認）のインターネットインフラ事業の欄によれば、2013年7月に「GMOインターネット（株）（現・GMOインターネットグループ（株））」がVPSの新ブランド「ConoHa byGMO」の提供を始めた。ConoHaの会員規約の附則は、規約の発効日を2013年7月4日とする。ConoHaの企業情報のページによれば、現在の運営会社はGMOインターネット株式会社で、設立日は1999年9月8日、証券コードは4784（東証プライム）、資本金は106億9,160万円、代表取締役 社長執行役員は伊藤 正氏、従業員数は2026年6月末時点で連結2,405名、主要株主はGMOインターネットグループ株式会社ほか。トップページは「高性能CPUで圧倒的パフォーマンス」を掲げ、根拠を2025年5月時点の自社調べ（UnixBenchによるCPUのパフォーマンステストで、全社とも「メモリ：2GB / CPU：3コア」の同一スペックで比較し、ConoHa VPSはVer 3.0で検証）と注記し、比較グラフの代替テキストは「主要VPS 3社中最高スコア」とする。機能一覧は、サーバー構築にかかる時間を「たったの25秒」とし、電話とチャットのサポートを平日10時から18時とする。
:::

:::fact
料金・スペックのページ（2026-10-13確認・税込）によれば、プランはメモリ512MB（vCPU 1コア・SSD 30GB）、1GB（2コア）、2GB（3コア）、4GB（4コア）、12GB（6コア）、24GB（8コア）、48GB（12コア）、96GB（24コア）、128GB（40コア）の9つで、1GB以上のSSDはいずれも100GB、初期費用は無料だ。時間課金は1時間あたり1.3円（512MB）、1.9円、3.7円、6.6円、13.2円、24.2円、48.4円、96.8円、129.8円（128GB）で、1か月使っても月額751円、1,065円、2,033円、3,608円、7,348円、14,300円、28,600円、53,900円、72,600円を超えては請求されない。まとめトクは1・3・6・12・24・36か月の期間分を一括で前払いし、月単位の分割払いと途中解約はできない。36か月契約の月額は、更新時が326円（512MB）、542円、903円、1,691円、3,192円、7,191円、18,491円、37,991円、50,654円（128GB）で、2026年10月29日16時までのキャンペーン中の初回は293円、466円、677円、1,285円、2,553円、5,249円、13,313円、27,353円、50,654円だ。オプションは、自動バックアップが100GBで月363円から、イメージ保存が50GBまで無料、オブジェクトストレージが100GBあたり月545円、ロードバランサーが月1,210円、追加IPアドレスが月424円。マネージドパックの参考価格は、運用保守・監視が税込月43,780円から、設計・構築が税込月132,000円から。GPUサーバーのページは、NVIDIA L4（GPU搭載メモリ24GB）1枚の構成を、20vCPU・メモリ128GBで1時間154.0円（月90,200円）、4vCPU・メモリ16GBで1時間60.5円（月36,300円）とし、利用に審査が要る場合があると注記する。ご利用の流れのページによれば、支払いはクレジットカードか、前払いのConoHaチャージで、チャージにはAmazon Pay、銀行振込、PayPal、コンビニ払い、ペイジーが使える。
:::

:::pull
同じリモートMCPサーバー（リモート版）を元にしていても、Claudeからはサーバーを作れ、ChatGPTからは作れない。ConoHa VPSは、AIエージェントに渡す権限を窓口ごとに分けている。
:::

::scorecard

## UX分析

ConoHa VPSの体験は、サーバーが立つまでを短くし、立ったあとの運用と契約の管理は利用者に任せる、という線引きでできている。2026年には、その運用の一部をAIエージェントに頼める窓口が加わった。

- **25秒で立ち、アプリはテンプレートとスクリプトで入る**。機能一覧はサーバー構築にかかる時間を「たったの25秒」とする。OS・アプリケーションテンプレートの一覧（2026-10-13確認）には、当サイトの集計でOSが13系統・48版、アプリケーションテンプレートが31件並び、WordPressのKUSANAGI、LAMP、GitLab、Docker、MT4の自動売買用のUbuntu Desktop for FXなどは、サーバーの作成と同時に構築まで終わる。スタートアップスクリプトの一覧には当サイトの集計で38件が並び、OpenClaw、Hermes Agent、Claude Code、Codex CLI、Antigravity CLI、Dify、n8nなどのAIツールのほか、Mastodon、Misskey、BlueskyのPDS、ゲームサーバー管理パネルのPterodactylも入れられる。トップページのよくある質問は、スタートアップスクリプトで構築する場合は、実行後にツール側の初期設定や接続作業が発生すると断る。申し込みでは、メールアドレスに届く認証コードに加えて、電話かSMSの認証を経る。
- **止めても課金は止まらない**。時間課金は1時間単位で、1か月使っても月額料金を超えては請求されない。料金表の単価で数えると、どのプランも月におよそ547〜591時間（23〜25日ほど）使うと上限に届く（当サイトの計算）。ご利用の流れのページは、停止（シャットダウン）しても料金は変わらず、サーバーの稼働・停止にかかわらず契約数で料金が発生すると書く。よくある質問によれば、時間課金のVPSは最低利用期間なしでいつでも削除（解約）できるが、削除したVPSのデータは完全に消え、復旧できない。
- **VPSを消しても、まとめトクは終わらない**。よくある質問は、まとめトクやVPS割引きっぷを使っている場合、VPSの削除だけでは解約にならず、別途自動更新をOFFにする必要があり、更新処理は契約満了日の7日前に行われると説明する。会員規約の第16条も、ConoHa VPSのVPS割引きっぷとまとめトクの更新日を契約満了日の7日前とし、更新しない意思表示がなければ当初の期間で自動的に更新され、契約期間中は解除や解約ができないと定める。料金表は、更新しなければ契約期間の終わりにサーバーが削除されると注記し、トップページのよくある質問によれば、途中解約による返金はないが、解約金（違約金）もかからない。キャンペーン価格は申し込み時にだけ適用され、たとえば2GBの36か月契約は、初回の月677円と更新時の月903円が並んで表示されている。
- **AIに頼める操作は、窓口で変わる**。リモートMCPのドキュメントによれば、Claude CodeとCodex CLIでは2行のコマンドで登録してConoHaアカウントで認可すれば使え、ClaudeとChatGPTではそれぞれのディレクトリから追加する方法を勧める。ただし、ChatGPTプラグインについては「サーバーおよびボリュームの新規作成、サーバーのリサイズ（プラン変更）の機能は提供していません」と書く。同じドキュメントは、削除、停止、リサイズ、セキュリティグループの変更は実環境に影響し、内容によっては取り消せないとし、AIエージェントが意図と違う操作を提案するときは、対象リソースの名前だけでなくIDも確認するよう指示することを勧める。リモートMCPとTerraform Providerは、基盤がVer.3.0のVPSだけに対応する。
- **バックアップとアップデートは自分で**。会員規約の第31条は、会社はデータのバックアップを行う義務を負わず、会員が自己の費用と責任で行うと定める。トップページのよくある質問によれば、データを守る手段は、1日1回・最大30世代を保つ有料の自動バックアップ（512MBプランは対象外）、50GBまで無料のイメージ保存、取得から24時間で自動削除される無料のスナップショットの3つだ。同じFAQは、セキュリティ設定、SSL証明書の管理、OSやミドルウェアのアップデートなどの継続的な運用管理は基本的に利用者が行う必要があるとし、運用を外に任せたい法人にはマネージドパックを案内する。
- **一覧は、リリースノートと読み合わせる**。リリースノートによれば、2026年9月25日にスタートアップスクリプトのGemini CLIが新規提供を終えて後継のAntigravity CLIが加わり、9月16日にはOSテンプレートのNetBSD 11.0の提供が始まった。アプリケーションテンプレートのRedmineは2025年11月26日に新規提供を終え、同名のスタートアップスクリプトが2025年10月23日に始まっている。2026年10月13日の時点で、料金やテンプレートなど多くのページのHTMLが `rel="llms-txt"` で指す /llms.txt はスタートアップスクリプトの一つにGemini CLIを挙げ、OS・アプリケーションテンプレートの一覧はNetBSDの版を9.3と表示し、料金ページのテンプレートの欄にはRedmineが並んでいた。キャンペーンの割引率も、キャンペーンページの「最大66%OFF」に対し、料金表の帯は「最大65%OFF」と書く。いま選べるものは、日付の入ったリリースノートで確かめたい。

## 技術構成

::techstack

:::fact
料金・スペックのページ（2026-10-13確認）によれば、クラウド基盤はOpenStackで、ネットワークはインターネット50Gbps共有（100Mbps制限あり）とプライベートネットワーク1Gbps共有、グローバルIPアドレスはIPv4が1個とIPv6が17個、データ転送量は課金なしの無制限で、OpenStack準拠のAPIを無料で提供する。100Mbpsの帯域は、有料のネットワーク帯域拡張で300Mbps（月4,950円）、500Mbps（月7,920円）、1Gbps（月15,180円）に広げられ、リリースノートによれば500Mbpsと1Gbpsは2026年10月6日に加わった。法人向けのページは、全ストレージにNVMeのSSDを載せた耐障害性にすぐれた分散ストレージ構成、ホストサーバーの障害時に別のホストサーバーへ自動でフェイルオーバーするHA機能の標準搭載、DDoS攻撃対策システムの配備を挙げ、トップページのよくある質問は、全プランで月間稼働率99.99%以上を保証するSLAを導入していると書く。APIのご利用についてのドキュメントは、APIをクラウド基盤のOpenStackの機能で実装しており、使い方はConoHaのサポート対象外だと断り、自動化の設定や設計に誤りや不備があると「APIの実行を繰り返し、意図しないサービス利用につながる可能性がございます」と注意する。サーバー作成のAPIの例は `compute.c3j1.conoha.io` の `/v2.1/servers` を宛先とし、事前にブート用のボリュームを作っておく必要があり、スタートアップスクリプトはuser-dataとして、エンコード前で16 KiBまで、`#!` や `#cloud-config` などのヘッダーで渡せる。リモートデスクトップSALが必要なWindows Serverは、APIからは作れない。Terraform Providerのページによれば、Terraform ConoHa VPS Providerは無料の公式プラグインで（リリースノートによれば初回β版は2026年3月5日）、API経由で作成したサーバーは時間課金になり、まとめトクは使えない。当サイトの実観測（2026-10-13）では、`compute.c3j1.conoha.io` のルートはHTTP/1.1の300 Multiple Choicesを server: nginx とともに返し、JSONで v2.1（status: CURRENT、version: 2.87、min_version: 2.1）を示した。
:::

:::fact
リリースノートによれば、ConoHa VPS MCPは2025年7月23日に初回β版（v0.1.0）を公開し、OSS版（ローカル）は2026年9月24日にv0.6.2になった。OSS版のドキュメントによれば、このMCPサーバーはApache License 2.0で公開され、利用者のPCでNode.js v20以上かDockerを使って動き、APIユーザーのテナントID・ユーザーID・パスワードを要し、ConoHaサポートの対象外のベータ版だ。2026年7月7日に始まったリモート版は、どのクライアントからも `https://api.conoha.jp/vps/mcp` に接続してConoHaアカウントで認可する方式で、AIエージェントの設定にConoHa APIのパスワード、Keystone token、テナントIDを書かない。対応するのはサーバーの一覧・作成・削除・起動・停止・強制停止・再起動・リサイズ・リモートコンソールURL発行、ボリューム、SSHキーペア、セキュリティグループなどで、オブジェクトストレージは2026年8月7日に始まった別のリモートMCP（`https://api.conoha.jp/vps/swift-mcp`）が受け持つ。Claudeのコネクタディレクトリから追加した場合は、内部で `https://api.conoha.jp/vps/claude` という専用のエンドポイントが使われる。Takumi Guardのドキュメントとリリースノートによれば、2026年9月25日から、Claude Code、Codex CLI、OpenCode、Antigravity CLI、OpenClaw、Hermes Agent、NanoClawの7つのスタートアップスクリプトに、GMO Flatt Securityの「Takumi byGMO」の「Guard」機能を設定する管理スクリプト（`/root/takumi-guard.sh`）を同梱した。Guardはパッケージレジストリの手前に置くプロキシとして、ブロックリストに載った悪性パッケージへのリクエストを拒否する。管理スクリプトが、npm、pip・uv、RubyGems、Go modules、Composerのうち導入済みのものの設定ファイルを書き換えてGuard経由にする。既定は無効で、`enable` でメール登録なしの匿名モード、`register` と `login` でメール認証のモードになり、どちらも無料だ。当サイトの実観測（2026-10-13）では、vps.conoha.jp、doc.conoha.jp、api.conoha.jp はHTTP/2で server: cloudflare と末尾がNRTの cf-ray を返し、vps.conoha.jp は PHPSESSID のクッキーとHSTS（max-age=31536000）を付けた。認証なしで `https://api.conoha.jp/vps/mcp` にGETすると、401と、resource_metadata と `scope="vps:read vps:write"` を含む WWW-Authenticate が返り、メタデータが示す認可サーバー `https://cp.conoha.jp/auth` は、認可コードとリフレッシュトークンのグラント、S256のPKCE、動的クライアント登録のエンドポイント、`client_id_metadata_document_supported: true` を公開していた。コントロールパネルの manage.conoha.jp は `https://www.conoha.jp/login/` への302とともに ASP.NET_SessionId と .ASPXAUTH のクッキーを返し、転送先のログインページは当サイトのスクリプトからの取得に403と cf-mitigated: challenge を返した。vps.conoha.jp の robots.txt は、OAI-SearchBot、ChatGPT-User、Applebot-Extended、PerplexityBot、ClaudeBot を名指しで許可し、/llms.txt は x-robots-tag: noindex を付けて配信されていた。
:::

:::guess
Webサイト、ドキュメント、リモートMCPはCloudflareの背後に置かれているとみられる一方、APIの例が指す `compute.c3j1.conoha.io` はCloudflareを介さずnginxが応答しているとみられ、v2.1という版の名前とあわせて、公開APIをOpenStackの機能で実装しているという説明と合うと読める。リモートMCPは、ConoHaアカウントのOAuthで受けた依頼を、利用者に代わってこの公開APIへ取り次ぐ層と読める。動的クライアント登録とクライアントIDのメタデータ文書に対応した認可サーバーは、事前に登録していないAIクライアントでも、利用者の認可だけでつなげるための設計と推測される。Terraform Providerの説明どおりAPIで作ったサーバーが時間課金になるなら、リモートMCPから作ったサーバーも時間課金になるとみられるが、MCPのドキュメントはこの点を明記していない。クッキーの名前からは、コントロールパネルがASP.NET、サービスサイトがPHPで動いていることがうかがえる。robots.txtでAI検索のクローラーを名指しで迎え、llms.txtを用意していることは、検索結果だけでなくAIアシスタントの回答にも載ることを意識した準備と読める。
:::

## AIエージェントに渡す権限は、窓口ごとに違う

:::fact
リリースノートとプレスリリース（2026-10-13確認）によれば、AIエージェントに向けた窓口と道具は次の順に増えた。2025年7月23日にMCPの初回β版、10月16日にスタートアップスクリプトのClaude Code、Codex CLI、Gemini CLI、Dify、n8n、2026年2月5日にOpenClaw、4月28日にHermes Agent、5月21日にOpenCodeとNanoClaw、6月4日にOpen WebUI、7月7日にリモートMCP、8月7日にオブジェクトストレージのリモートMCP、8月12日にClaudeのコネクタ、9月1日にChatGPTのプラグイン、9月25日にGuardの同梱とAntigravity CLI。8月12日のプレスリリースは、Claudeのコネクタディレクトリへの掲載を、VPSを提供する国内クラウド事業者で初めてとし（2026年8月12日時点の自社調べ）、GMOインターネットグループが2026年7月10日にAnthropicと戦略的パートナーシップ契約を結んだと書く。9月1日のプレスリリースは、ChatGPT対応プラグインの提供を国内クラウド事業者で初めてとし（2026年9月1日時点の自社調べ）、プラグインはOpenAIの審査を経て公開され、接続設定とサーバー運用の手順をまとめた「スキル」でできていて、GMOインターネットが運用するサーバー上で動くためスマートフォンのアプリからも使えると説明する。決算説明資料（2026年8月14日）は、ドメイン・レンタルサーバー事業のトピックに「AIによるサーバー運用・AIエージェント活用を推進」を掲げた。
:::

| 窓口 | 公開 | つなぎ方 | サーバーの新規作成・リサイズ |
| --- | --- | --- | --- |
| OSS版MCP（ローカル） | 2025年7月23日（β版） | 利用者のPCで動かし、APIユーザーの認証情報を設定する | できる |
| リモートMCP | 2026年7月7日 | `https://api.conoha.jp/vps/mcp` に接続し、ConoHaアカウントで認可する | できる（通常の料金が発生） |
| オブジェクトストレージのリモートMCP | 2026年8月7日 | `https://api.conoha.jp/vps/swift-mcp` に接続し、ConoHaアカウントで認可する | 対象外（オブジェクトストレージを操作） |
| Claudeのコネクタ | 2026年8月12日 | コネクタディレクトリから追加し、ConoHaアカウントで認可する | できる（通常の料金が発生） |
| ChatGPTのプラグイン | 2026年9月1日 | プラグインディレクトリから追加し、ConoHaアカウントで認可する | できない（起動・停止・再起動・状態確認・セキュリティ設定の変更など） |

表はリリースノート、MCPのドキュメント、プレスリリースによる。リモートMCP、Claudeのコネクタ、ChatGPTのプラグインそのものの利用料金はいずれも無料で、かかるのは作成や起動などで生じるConoHa VPSの通常の料金と、各AIサービスの利用料だ。

:::guess
同じリモートMCPサーバー（リモート版）を元にしながら、ChatGPTのプラグインだけが料金の発生する操作を外していることは、窓口ごとに想定する利用者に合わせて権限を絞った判断と読める。プレスリリースは、プラグインの利点にスマートフォンからの操作を挙げ、料金が変動しないことを明記しており、サーバーに詳しくない利用者が外出先から再起動するような使い方を想定して、意図せず課金が増える操作を最初から渡さなかったとみられる。一方、Claude Code、Codex CLI、Claudeには作成やリサイズまで渡し、取り消せない操作の確認は利用者に求めている。トップページが「ローカルPCのAIエージェント、閉じると止まってしまう」という悩みに24時間の稼働で応え、AIエージェント系のスタートアップスクリプトにGuardを同梱したことを合わせると、ConoHa VPSは、AIエージェントに操作される道具であると同時に、AIエージェントが常駐する場所としても売り込まれていると推測される。
:::

## ビジネスモデル

稼ぎ方は、時間課金とまとめトクで受け取るVPSの利用料が中心で、自動バックアップ、追加ストレージ、オブジェクトストレージ、ネットワーク帯域拡張、Windows Server、GPUサーバーが上に乗る。客を集める役は、期間を区切ったキャンペーン、A8.netともしもアフィリエイトのアフィリエイト、制作会社向けのパートナープログラムが担う。

:::fact
アフィリエイトのページ（2026-10-13確認）によれば、プログラムはA8.netともしもアフィリエイトの2社で提供され、成果報酬は1件あたり、1GBが1,000円、2GBが1か月契約で1,100円・3か月以上で2,000円、4GBが2,100円・3,600円、12GBが4,100円・7,400円、24GBが9,000円・14,300円、48GBが20,100円・28,600円、96GBが40,200円・53,900円だ。ページはこの表を一部抜粋とし、1成果あたりの報酬に上限はなく、1成果で複数台のサーバーを使えば台数分のサーバー金額が報酬になると書き、本人の申し込みで報酬を受け取れるセルフバックも案内する。2GBから96GBまでの3か月以上の報酬は、時間課金の月額上限とほぼ同額で、24GB・48GB・96GBでは一致する（当サイトの照合）。制作会社やフリーランス向けのパートナープログラム（取次制度）は、メモリ1GB以上のまとめトクの紹介に、1GBで300円（1か月）から6,000円（36か月）、2GB以上で500円から15,000円の初回固定報酬と、更新のたびに更新時の一括支払い金額の15%の継続報酬を払い、アフィリエイトなどとの併用はできない。キャンペーンページによれば、2026年10月29日16時までのHappy Halloweenキャンペーンは、まとめトクを新規で申し込む全員を対象に、時間課金と比べて最大66%OFF、月額293円からとし、価格は申し込み時のみに適用されて更新時には適用されず、時間課金からまとめトクへの変更やまとめトク以外のオプションは対象外だ。決算説明資料（2026年8月14日）によれば、GMOインターネットの2026年上半期の連結売上高は412億円（前年同期比+7.2%）、営業利益は47.6億円（+46.2%）で、GPUクラウドを含むドメイン・レンタルサーバー事業は売上高115億円（+18.1%）、営業利益31.0億円（+73.6%）だった。同社の国内契約件数は1,370万件、ストック比率は87.6%とされる。同事業の第2四半期の説明はGPUクラウドのH200・B300の高稼働と既存事業での広告投資の継続を挙げ、決算の書き起こしは、AIエージェントからのサーバー操作とスタートアップスクリプトについて「新規顧客の獲得と継続率の向上につなげてまいります」と述べる。
:::

:::guess
2GBから96GBまでの3か月以上の報酬が時間課金の月額上限にほぼ並ぶことは、紹介1件に通常料金のおよそ1か月分を払う考え方とみられる。一方、パートナープログラムは更新のたびに15%を払い続ける。単発の申し込みはブログや比較サイトに、長く続く契約は制作会社に集めてもらう二段の販路と推測される。キャンペーンの割引が初回だけに効き、2GBの36か月契約では更新時に月677円から903円へ33.4%上がる（当サイトの計算）設計は、入口の値札で客を集め、更新で単価を戻す形と読める。API経由のサーバーが時間課金になるという説明が当てはまるなら、AIエージェントが作る検証用のサーバーは、月額に直すとまとめトクより高い時間課金で使われることになるとみられる。ただし決算資料はConoHa VPS単体の数字を示しておらず、ドメイン・レンタルサーバー事業の第2四半期の説明は、既存事業の堅調さに加えてGPUクラウド（H200・B300）の稼働を増収増益の理由に挙げ、AIエージェントとの連携がどれほど新規顧客と継続率に効いているかは、公開情報からは読み取れない。
:::

2013年に始まったConoHaのVPSは、月の上限がある時間課金と、長く使うほど安い前払いのまとめトクを並べ、テンプレートとスクリプトでサーバーが立つまでを短くしてきた。MCPの初回β版から1年あまりで、その操作をAIエージェントに頼める窓口はリモートMCP、Claude、ChatGPTへと広がり、窓口ごとにサーバーを作れるかどうかが分けられた。AIエージェントを24時間動かしておく置き場所と、AIエージェントが扱える道具を同時に売るこの試みが、同社の掲げる新規顧客の獲得と継続率の向上にどう表れるのか。その答えを、公開されている決算資料の数字から読み取ることは、まだできない。
