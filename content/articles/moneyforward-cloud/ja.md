---
service: "マネーフォワード クラウド"
title: "確定申告ソフトの年額を47%上げる理由 — マネーフォワード クラウドが個人事業主に付け直す値段"
description: "個人事業主と中小企業向けのバックオフィスSaaS「マネーフォワード クラウド」。SaaS ARR476.7億円のうち個人事業主は31.2億円。2026年12月の料金改定でパーソナルプランの年額が15,360円から22,560円へ上がる背景を、決算短信・決算説明資料・決算補足資料、公式サポートサイト、公式開発者ブログから解剖する。Railsの会計アプリとリモートMCPサーバーの作りも読む。"
lead: "2026年9月24日、マネーフォワードは個人事業主向けの料金改定を告知した。消費税申告ができるパーソナルプランの年額は、12月1日以降の更新から15,360円が22,560円になる。約47%の値上げだ。個人事業主の課金顧客は23.7万件と伸び続けている。それでもなぜ、いま値段を付け直すのか。決算資料の数字と、会計アプリの中身から解剖する。"
category: saas
tags: [accounting, small-business, fintech, ruby-on-rails, mcp]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://biz.moneyforward.com/tax_return/"
affiliate:
  url: "https://af.moshimo.com/af/c/click?a_id=5824839&p_id=888&pc_id=1087&pl_id=38622"
  program: "Money Forward Cloud Affiliate Program (Moshimo Affiliate)"
  impressionUrl: "https://i.moshimo.com/af/i/impression?a_id=5824839&p_id=888&pc_id=1087&pl_id=38622"
vendor: "Money Forward, Inc."
origin: "JP"
heroTheme: "moneyforward-cloud"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Webフレームワーク"
    name: "Ruby on Rails (+ Go)"
    confidence: confirmed
    evidence: "公式開発者ブログ（2019-11）に、マネーフォワード クラウド会計・確定申告を開発する会計チームについて「開発言語はRubyで、フレームワークにRuby on Railsを使っています。一部はGo言語で開発しています」と明記。GitHubでバージョン管理し、CircleCIで自動テストしているとも書かれている"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2019/11/29/my-resume01/"
  - layer: "フロントエンド"
    name: "CoffeeScript → Vanilla JS / TypeScript"
    confidence: confirmed
    evidence: "公式開発者ブログ（2024-04）に、2013年リリースのクラウド会計にはCoffeeScript・Vanilla JS・TypeScriptが混在しており、約250ファイル・2万行のCoffeeScriptをdecaffeinateでVanilla JSへ変換するプロジェクトを2023年8月に始め、2024年3月末に完了したと明記"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2024/04/10/190149"
  - layer: "AIエージェント連携"
    name: "Cloud Accounting MCP server (remote MCP)"
    confidence: confirmed
    evidence: "公式サポートサイトに、クラウド会計・確定申告の利用者は追加料金なくMCPサーバーを使え、認証はOAuthとAPIキーの2方式、接続先はalpha（2026年3月26日〜・1時間ごとに再認証・今後廃止予定）とbeta（2026年4月1日〜・認証時間の延長と再認証の自動化に対応）の2つのURLだと明記。操作は仕訳の取得・作成・更新、残高試算表や推移表の取得など"
    evidenceUrl: "https://biz.moneyforward.com/support/account/guide/others/ot10.html"
  - layer: "モバイル配信"
    name: "CircleCI + Firebase App Distribution (Android)"
    confidence: confirmed
    evidence: "公式開発者ブログ（2023-12）に、マネーフォワード クラウド確定申告アプリのAndroid版では、QAメンバーがCircleCIのパイプラインをトリガーし、Firebase App Distributionに上がったアプリを検証端末に入れて確認していると明記"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2023/12/18/ca_android2_bot"
  - layer: "姉妹製品のジョブ基盤"
    name: "Sidekiq on Amazon EKS (Cloud Expense)"
    confidence: confirmed
    evidence: "公式開発者ブログ（2026-01）に、同じマネーフォワード クラウドのクラウド経費で、月間数億レコードのアクセスログ基盤をAWS（Kinesis Data Firehose・Glue・S3・Athena）へ移し、書き込みをEKS上のSidekiqコンテナが担うと明記。クラウド会計・確定申告が同じ基盤で動いているかは記事からは分からない"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2026/01/30/143450"
  - layer: "エッジ / CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-28）で、アプリ本体のaccounting.moneyforward.com、ログインのid.moneyforward.com、MCPサーバーのbeta.mcp.developers.biz.moneyforward.comがいずれもcdn.cloudflare.netへのCNAMEで、server: cloudflare と cf-ray（NRT）を返す。accounting と id はRack（Rails）が付ける x-runtime ヘッダーも返しており、Cloudflareの後ろでRailsが応答している構成とみられる"
sources:
  - label: "株式会社マネーフォワード: 2026年11月期 第2四半期（中間期）決算短信〔日本基準〕(連結)（2026-07-13）"
    url: "https://contents.xj-storage.jp/xcontents/AS71106/eee10499/1dac/4664/9aa5/229eaf8de8d0/140120260713592274.pdf"
    accessedAt: "2026-09-28"
  - label: "株式会社マネーフォワード: 2026年11月期 第2四半期決算説明資料（2026-07-13）"
    url: "https://contents.xj-storage.jp/xcontents/AS71106/d6d5dd76/4582/4a3b/96c8/10c9b996d59d/140120260713592129.pdf"
    accessedAt: "2026-09-28"
  - label: "株式会社マネーフォワード: 2026年11月期 第2四半期決算補足資料（Excel・2026-07-13）"
    url: "https://contents.xj-storage.jp/objects/AS71106/2033affd/a26c/4837/9c1d/d0bf4aecf12d/Supplemental_Financial_Data__FY26_Q2.xlsx"
    accessedAt: "2026-09-28"
  - label: "マネーフォワード クラウド確定申告: 料金"
    url: "https://biz.moneyforward.com/tax_return/price/"
    accessedAt: "2026-09-28"
  - label: "マネーフォワード クラウド サポート: 料金体系の一部改定について（改定日：2026年12月1日および2027年6月1日）（2026-09-24）"
    url: "https://biz.moneyforward.com/support/plan/news/20260924.html"
    accessedAt: "2026-09-28"
  - label: "マネーフォワード クラウド会計 サポート: マネーフォワード クラウド会計MCPサーバー"
    url: "https://biz.moneyforward.com/support/account/guide/others/ot10.html"
    accessedAt: "2026-09-28"
  - label: "PR TIMES（株式会社マネーフォワード）: 『マネーフォワード クラウド会計』、リモートMCPサーバーを全プランで提供開始（2026-03-26）"
    url: "https://prtimes.jp/main/html/rd/p/000001605.000008962.html"
    accessedAt: "2026-09-28"
  - label: "Money Forward Developers Blog: 私の履歴書：マネーフォワードの会計開発チーム編（2019-11）"
    url: "https://moneyforward-dev.jp/entry/2019/11/29/my-resume01/"
    accessedAt: "2026-09-28"
  - label: "Money Forward Developers Blog: 10年もののRailsアプリの持続可能性を求めて -なぜ初手でCoffeeScript廃止を選んだのか-（2024-04）"
    url: "https://moneyforward-dev.jp/entry/2024/04/10/190149"
    accessedAt: "2026-09-28"
  - label: "Money Forward Developers Blog: Next GenerationなAndroidアプリのデプロイSlack Appを作ってみた（2023-12）"
    url: "https://moneyforward-dev.jp/entry/2023/12/18/ca_android2_bot"
    accessedAt: "2026-09-28"
  - label: "Money Forward Developers Blog: SRE Kaigi 2026「月間数億レコードのアクセスログ基盤を無停止・低コストでAWS移行せよ！」の発表内容と補足（2026-01）"
    url: "https://moneyforward-dev.jp/entry/2026/01/30/143450"
    accessedAt: "2026-09-28"
  - label: "A8.net 導入事例: アフィリエイト広告の新規獲得150%増！マネーフォワードのBtoBマーケティング成功事例"
    url: "https://www.a8.net/ec/casestudy/12/"
    accessedAt: "2026-09-28"
  - label: "GitHub: freee/freee-mcp（比較用）"
    url: "https://github.com/freee/freee-mcp"
    accessedAt: "2026-09-28"
  - label: "フリー株式会社: 2026年6月期 決算説明資料（2026-08-13・比較用）"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/97bc7144/e317/47ab/926b/998554b4c0e4/20260814105745837s.pdf"
    accessedAt: "2026-09-28"
  - label: "freee公式: 個人事業主向け料金プラン（比較用）"
    url: "https://www.freee.co.jp/personal-business/accounting/pricing/"
    accessedAt: "2026-09-28"
---

マネーフォワード クラウドの決算資料で、個人事業主はいつも小さな行にいる。SaaS ARR476.7億円のうち31.2億円。それでも課金顧客の数では、法人と並ぶ大きな塊だ。2026年9月、その個人事業主向けの値段が付け直された。家計簿アプリの会社として知られたマネーフォワードが、確定申告ソフトの価格で何を調整しようとしているのかを読む。

## サービス解説

マネーフォワード クラウドは、会計・確定申告・請求書・経費・給与などを揃えたバックオフィス向けのクラウドサービス群だ。個人事業主向けの入口は「マネーフォワード クラウド確定申告」で、銀行やクレジットカードの明細を自動で取り込み、仕訳から青色・白色の申告書づくり、電子申告までを受け持つ。同じ会社の個人向け家計簿アプリ「マネーフォワード ME」とは別の製品で、決算資料ではBusinessセグメントに入る。

:::fact
決算短信（2026-07-13）によれば、マネーフォワードの2026年11月期中間期（2025年12月〜2026年5月）の売上高は289.9億円（前年同期比24.8%増）、全社のSaaS ARRは476.7億円（同34.2%増）。Businessセグメントのうち法人顧客のSaaS ARRは367.7億円（同36.4%増）、個人事業主顧客のSaaS ARRは31.2億円（同19.2%増）だった。決算補足資料によれば、2026年5月末の個人事業主の課金顧客数は237,328件、法人は255,406件。PR TIMESに掲載された同社の発表によれば、設立は2012年5月。
:::

:::fact
公式の料金ページによれば、個人事業主向けは3プランで、表示価格はすべて税抜き。消費税申告ができないパーソナルミニプランは年払いで月900円（年10,800円）、月払いで月1,280円。消費税申告（インボイス制度対応）ができるパーソナルプランは年払いで月1,280円（年15,360円）、月払いで月1,680円。電話サポートが付くパーソナルプラスプランは年払いのみで年35,760円。1ヶ月の無料トライアルがある。
:::

:::pull
消費税申告ができるパーソナルプランの年額は、2026年12月1日以降の更新から15,360円が22,560円になる。月払いは1,680円が2,880円になる。
:::

::scorecard

## UX分析

マネーフォワード クラウドの個人事業主向けUXは、「家計簿と同じ感覚で明細を集め、そのまま申告まで持っていく」ことに寄せてある。そして2026年、その入口にAIエージェントを加えた。

- **プランの境目が「消費税申告」一本で明快**。料金ページは、パーソナルミニの欄に「消費税申告は利用できません」と書き、パーソナルとの差を一点に絞っている。免税事業者か、インボイス登録をした課税事業者かで選べばよいので、迷いにくい。
- **レシート読み取りの追加料金がなくなる**。いまはAI-OCRの読み取りに、パーソナルプランなら月31件目、パーソナルプラスプランなら月101件目から1件20円（税抜）のオプション料金がかかる。2026年12月1日からは両プランでこの料金が廃止され、件数の制限がなくなる。値上げと同時に「使うほど増える費用」を消す組み合わせで、請求額は読みやすくなる。
- **AIエージェントから帳簿を触れる**。公式サポートサイトによれば、クラウド会計・確定申告の利用者は追加料金なくMCPサーバーにつなげる。AIツールに接続先のURLを登録し、OAuthかAPIキーで認証する。同社の発表は、対応するAIツールとしてClaude DesktopやClaude Code、Cursor、Gemini CLIなどを挙げている。サポートサイトは、認可コードがAIの学習に使われないようデータ収集を許可しない設定で使うよう注意している。
- **技術的な問い合わせ窓口は狭い**。同じサポートページは、API・MCPの技術的な問い合わせ窓口を原則として設けず、サポート対象は有償の公認メンバー（士業事務所）に限るとしている。個人事業主が自分でAIエージェントをつなぐ場合は、手探りになる場面がありそうだ。

## 技術構成

::techstack

:::fact
公式開発者ブログ（2019-11）によれば、クラウド会計・確定申告を開発する会計チーム（経理財務プロダクト本部）は2013年に立ち上がり、当時すでに社内最大の開発部署だった。開発言語はRubyでフレームワークはRuby on Rails、一部はGoで書かれている。2024年4月の記事によれば、2013年リリースのクラウド会計にはCoffeeScript・Vanilla JS・TypeScriptが混在しており、開発者に求めるスキルが増えすぎることを最大の課題とみて、約250ファイル・2万行のCoffeeScriptをdecaffeinateでVanilla JSへ変換した。2023年8月に始め、2024年3月末に終えている。この記事は参考文献に、freee会計に残るCoffeeScriptを同じdecaffeinateで書き換えたfreee側の記事も挙げている。
:::

:::fact
PR TIMESに掲載された同社の発表（2026-03-26）によれば、クラウド会計のリモートMCPサーバーとAPIは、それまで一部の士業事務所に限って提供されていた（MCPサーバーはβ版としてプラチナランク以上、APIはシルバーランク以上の公認メンバーの士業事務所向け）。2026年3月26日に全プランへ公開し、ユーザー側での環境構築が要らないリモート型を「β版の開始当初より」採ったと説明している。公式サポートサイトに並ぶ操作は、事業者情報や会計年度の取得、仕訳の一覧・取得・作成・更新、残高試算表と推移表の取得、勘定科目・補助科目・取引先・部門・税区分の取得、入出金明細の作成と一覧、明細からの仕訳作成など。同じページは、APIキー認証ではクラウド会計の「メンバーの追加・管理」画面で設定した権限に基づいて操作できる一方、OAuth認証ではアプリポータルで権限を付与したユーザーが、クラウド会計・確定申告側の権限にかかわらず操作できると注意している。
:::

:::guess
並ぶ操作は、帳簿の読み書きに絞られている。[freee](/ja/articles/freee)の公式MCPサーバーが12のAPIにまたがる操作を公開しているのと比べると、マネーフォワードは「仕訳と試算表」という会計の芯から開けたとみられる。サポートページはプランごとの機能差異のガイドも案内しており、MCPから使える機能も契約プランの範囲に収まると読める。10年以上続くRailsアプリの既存APIの前段にMCPを薄く被せる作りだと推測される。ただしOAuth認証ではクラウド会計側のメンバー権限が効かないと明記されており、権限の設計まで既存の画面と同じになっているわけではない。
:::

## ビジネスモデル

収益の柱は、法人と個人事業主から受け取る月額・年額のサブスクリプションだ。そこにビジネスカードや早期入金などの決済・金融の手数料（Fintech ARR）が重なる。

:::fact
決算補足資料によれば、個人事業主の課金顧客数は毎年、第1四半期（12月〜2月）に大きく増える。2025年11月期は2024年11月末の182,579件から2025年2月末に200,889件へ、2026年11月期は2025年11月末の210,190件から2026年2月末に233,027件へ増え、5月末は237,328件（前年同期比16.3%増）だった。決算説明資料によれば、個人事業主の顧客解約率（月次平均）は3ヶ月平均で4.9%、12ヶ月平均で2.3%。決算補足資料によれば、個人事業主のARPA（期末時点のARRを課金顧客数で割った値）は13,165円で、前年同期比2.5%の伸びにとどまる。
:::

:::fact
公式サポートサイトの告知（2026-09-24）によれば、個人事業主向けの料金は2026年12月1日以降に更新となる契約から改定される。パーソナルプランは年払い15,360円→22,560円、月払い1,680円→2,880円。パーソナルミニプランは月払いが1,280円→1,680円で、年払い10,800円は据え置き。パーソナルプラスプランは年払い35,760円→38,160円。法人向けは2027年6月1日に、スモールビジネスが月5,980円→6,980円、ビジネスが月7,980円→8,980円に改定される（いずれも税抜・月払い。ひとり法人は月払い据え置きで年払いのみ29,760円→35,760円）。決算説明資料は、2025年6月にSMB領域で実施した価格改定について、解約率が想定を下回り、ARRへの影響は当初見込みを上回る+24億円で着地したと説明している。
:::

:::guess
個人事業主のARPAが13,165円、freeeの個人事業主のARPU（プラットフォームARRベース・2026年6月末で20,995円）との差は大きい。両社の指標は定義が同じではないが、マネーフォワードは顧客数を伸ばす一方で、1件あたりの単価で後れを取っていたとみられる。改定後のパーソナルプランの年額22,560円は、freeeで消費税申告ができるスタンダードの年額23,760円（税抜）に近い。法人で先に試した値上げが解約を大きく増やさなかったことが、個人事業主にも同じ手を打つ根拠になったと推測される。年払いのパーソナルミニを据え置いたのは、消費税申告が要らない免税事業者の入口を安いまま残すためと読める。
:::

:::fact
A8.netの導入事例（マネーフォワードの担当者へのインタビュー）によれば、マネーフォワードは中小企業・個人事業主向けの新規獲得にアフィリエイト広告を2019年から使い、2020年6月にA8.netでの運用を始めた。アフィリエイト広告経由の月間獲得件数は前年同月比120〜150%に増え、A8.net経由の顧客の有料プラン転換率はディスプレイ広告より高いと答えている。主なKPIは無料トライアル数と有料プランへの移行率だという。
:::

課金顧客の数では法人と並びながら、ARRでは1割に満たない個人事業主。マネーフォワードは2026年、その差を値段で詰めにいった。明細を集める家計簿の感覚と、AIエージェントが仕訳を書く新しい入口。その両方を、少し高くなった年額の中に収めようとしている。
