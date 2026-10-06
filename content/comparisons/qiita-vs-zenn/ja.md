---
title: "Qiita vs Zenn — 書き手にお金を払わず企業から受け取る場所と、書き手の売上から手数料を取る場所"
description: "日本の技術記事の2大サービス、QiitaとZennを、2026年10月6日時点の公式ページ・FAQ・料金表・リリース・決算資料・リポジトリだけで比較する。Qiitaは2011年公開、会員180万人超・累計120万記事超で、読むのも書くのも無料、書き手への分配はなく、企業向けの広告・協賛と月500円からのQiita Teamで稼ぐ。Zennは本を0〜5,000円で売れ、読者はバッジを贈れ、Zennは決済手数料3.6%と残りの10%を受け取る。企業向けにはPublication Proが月9,980円、新設のPublication Connectが6カ月36万円。親会社はエイチームとクラスメソッド。お金の流れ、企業への売り方、AI時代の質の守り方、執筆の道具、技術構成を同じ項目で並べる。"
lead: "どちらもMarkdownで技術記事を書く場所で、どちらも手元のCLIから投稿でき、どちらも企業が組織としてテックブログを持てる。違うのは、書き手にお金が渡るかどうかと、企業に何を売るかだ。Qiitaは15年間、書き手に分配せず、エンジニアに届きたい企業から広告と協賛で受け取ってきた。Zennは書き手の本とバッジの売上から手数料を取り、企業にはテックブログの運営機能を月額で売る。両者の公式ページを同じ日に読み、お金の流れの違いが体験と事業にどう現れるかを解剖する。"
slugA: "qiita"
slugB: "zenn"
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
sources:
  - label: "Qiita株式会社: 会社概要"
    url: "https://corp.qiita.com/company"
    accessedAt: "2026-10-06"
  - label: "Qiita株式会社: Qiitaが15周年 会員180万人・累計120万記事を突破（2026-09-16）"
    url: "https://corp.qiita.com/releases/2026/09/15th-anniversary/"
    accessedAt: "2026-10-06"
  - label: "Qiita for Business（企業向けの広告・協賛メニュー）"
    url: "https://business.qiita.com/"
    accessedAt: "2026-10-06"
  - label: "Qiita Team: 料金プラン"
    url: "https://teams.qiita.com/price-list/"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: Organization機能のアップデート（2026-08-28）"
    url: "https://blog.qiita.com/organization-improvement/"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: トレンドと通報機能の改善（2026-01-28、2026-04-23更新）"
    url: "https://blog.qiita.com/improve-user-experience/"
    accessedAt: "2026-10-06"
  - label: "エイチームホールディングス: 2026年7月期 通期決算説明会 書き起こし（2026-09-04）"
    url: "https://www.release.tdnet.info/inbs/140120260908533206.pdf"
    accessedAt: "2026-10-06"
  - label: "GitHub: increments/qiita-cli"
    url: "https://github.com/increments/qiita-cli"
    accessedAt: "2026-10-06"
  - label: "Zenn: About"
    url: "https://zenn.dev/about"
    accessedAt: "2026-10-06"
  - label: "Zenn よくある質問: 販売や振込の手数料は？"
    url: "https://zenn.dev/faq/sales"
    accessedAt: "2026-10-06"
  - label: "Zenn よくある質問: 掲載料（分配金）とは？"
    url: "https://zenn.dev/faq/dividend"
    accessedAt: "2026-10-06"
  - label: "Zenn: Publication（プランと料金）"
    url: "https://zenn.dev/publications"
    accessedAt: "2026-10-06"
  - label: "Zenn よくある質問: Publication Pro でできることは？"
    url: "https://zenn.dev/faq/what-is-publication-pro"
    accessedAt: "2026-10-06"
  - label: "What's New in Zenn: Publicationの利用規約を改定します（2026-09-16）"
    url: "https://info.zenn.dev/2026-09-16-update-publication-terms"
    accessedAt: "2026-10-06"
  - label: "What's New in Zenn: 投稿内のシークレット検出（2026-09-17）"
    url: "https://info.zenn.dev/2026-09-17-content-secret-detection"
    accessedAt: "2026-10-06"
  - label: "What's New in Zenn: Publication Proが100件を突破（2026-07）"
    url: "https://info.zenn.dev/2026-07-22-publication-pro-100"
    accessedAt: "2026-10-06"
  - label: "クラスメソッド: Zenn買収に関するプレスリリース（2021-02-01）"
    url: "https://classmethod.jp/news/20210201-zenn/"
    accessedAt: "2026-10-06"
  - label: "GitHub: zenn-dev/zenn-editor"
    url: "https://github.com/zenn-dev/zenn-editor"
    accessedAt: "2026-10-06"
---

[Qiita](/ja/articles/qiita)と[Zenn](/ja/articles/zenn)は、日本のエンジニアが技術記事を書く場所として並んで語られることが多い。Qiitaは2011年に公開され、Zennは個人開発のサービスとして現れて2021年にクラスメソッドに買収された。2本の解剖記事を重ねると、違いは書き味や見た目ではなく、お金がどちらの方向に流れるかに出ている。

この記事は、両社の公式ページ・FAQ・料金表・リリース・親会社の資料・GitHubを2026年10月6日に読み直してまとめた。当サイトは両方に同じ記事を投稿して反応を比べてはおらず、読者数や検索流入の優劣は扱わない。

## お金はどちらに流れるか

Qiitaでは、書き手にも読み手にもお金が動かない。Zennでは、読み手から書き手にお金が動き、Zennがその一部を受け取る。

:::fact
Qiitaには、記事を有料で売る機能も、読者が書き手にお金を贈る機能もない。書き手への見返りは「いいね」が積み上がるContributionと表彰プログラムだ。Zennの公式Aboutページ（2026年10月6日確認）によれば、Zennでは知見を「本」にまとめて0〜5,000円で販売でき、読者は有料のバッジを著者に贈れ、バッジを受け取った著者にはZennから分配金が支払われる。受け取りは銀行振込かAmazonギフトカード。ZennのFAQ「販売や振込の手数料は？」によれば、本の販売には決済手数料として販売価格の3.6%（Stripeの決済手数料に準拠）と、プラットフォーム利用料として決済手数料を引いた額の10%がかかり、現金の振込申請には1回350円がかかる。FAQの例では、1,000円の本が売れると販売者の受取額は868円だ。
:::

| 項目 | Qiita | Zenn |
| --- | --- | --- |
| 記事・本の販売 | なし | 本を0〜5,000円で販売 |
| 読者から書き手への送金 | なし | 有料のバッジ（著者に分配金） |
| プラットフォームの取り分 | なし（取引がない） | 決済手数料3.6%＋残りの10% |
| 1,000円の本の受取額 | — | 868円（FAQの計算例） |
| 振込手数料 | — | 1回350円（Amazonギフトカードも選べる） |
| 書き手への見返り | いいね・Contribution・表彰 | 売上・分配金に加えていいね |

:::pull
Qiitaは書き手にお金を払わず、企業から受け取る。Zennは書き手が受け取るお金から、手数料を受け取る。
:::

:::guess
書き手への分配がないQiitaでは、記事の数と訪問者の数がそのまま企業に売る注目の量になる。Zennでは、書き手が売る本とバッジがプラットフォームの取引になり、Zennの取り分は書き手の売上に比例する。前者は「たくさん読まれる場所」であることが、後者は「お金を払ってでも読みたいものが書かれる場所」であることが事業の前提になっているとみられる。
:::

## 企業に何を売るか

どちらも企業がテックブログを持てるが、Qiitaは「場所への露出」を、Zennは「運営の機能」を売る。

:::fact
Qiita for Business（2026年10月6日確認）は、インプレッション保証のバナー広告、外部サイトでも配信するQiita DSP、Qiita Zineの記事広告、1社単独のメール広告、エンジニア調査のQiita Research、Advent Calendar・Qiita Conference・Qiita Tech Festaの協賛を挙げ、「数十万円から実施可能」と書く。企業や団体のOrganizationは無料で作れ、Qiita Blog（2026-08-28）によれば、記事の目次の下に採用やイベントを告知できる「PR枠」を1組織1つ置けるようになった。別に、社内向けの情報共有サービスQiita Teamを月500円（1人）から月15,300円（17人まで）、それ以上は1人720円の加算で売っている（税込）。
:::

:::fact
Zennの公式Publicationページ（2026年10月6日確認）によれば、企業・組織向けのPublicationには3つのプランがある。Freeは無料で、メンバーの記事の紐づけ、下書きの共有、Publicationのトップページを持てる。Proは月額9,980円または年額99,800円で初回30日間無料、記事のレビュー、統計ダッシュボード、記事へのPRバナー、全員を1つのGitHubリポジトリに連携、Google Analytics連携、コメント欄の無効化が加わる。新設のConnectは6カ月36万円（月あたり6万円）で、カード払いは6カ月契約、請求書払いは年間契約で、記事への質問箱、フォロワーへのニュースレター、リピート読者の分析、経営層向けレポート、優先登壇権が加わる。What's New in Zenn（2026-09-16）によれば、有料プランを複数持てるように利用規約を改め、2026年10月16日に施行する。2026年7月22日時点でPublicationは1,800を超え、Proを使うPublicationは100を超えた。
:::

| 項目 | Qiita | Zenn |
| --- | --- | --- |
| 企業の組織ページ | Organization（無料） | Publication Free（無料） |
| 組織ページの有料版 | なし（PR枠も無料） | Pro 月9,980円／Connect 6カ月36万円 |
| 広告・協賛 | バナー、DSP、記事広告、メール、調査、イベント協賛（数十万円から） | ProのPRバナーは自組織の記事に表示 |
| 社内向けツール | Qiita Team（月500円から） | なし |
| 運営会社 | Qiita株式会社（エイチームの子会社） | クラスメソッド |

:::guess
Qiitaは組織ページを無料のまま厚くし、企業をまず住まわせてから広告と協賛の商談につなげる形とみられる。Zennは組織ページそのものに段階的な値段をつけ、レビューや統計やニュースレターといった「テックブログを運営する手間」を減らす機能を売る形だ。Qiitaの売り物は他社の読者への露出で、Zennの売り物は自社の発信の運営だと言い換えられる。
:::

## 規模と親会社

:::fact
Qiita株式会社のリリース（2026-09-16）によれば、Qiitaは2011年9月16日に公開され、2026年9月1日時点で会員180万人超・累計120万記事超。同社は東証プライム上場のエイチームホールディングスの子会社で、エイチームは2017年12月に当時の運営会社を約14億5,300万円で取得した。エイチームの通期決算説明会（2026-09-04）は、グループのmicroCMSの成長要因の一つに「Qiita内においてプロモーションを強化していること」を挙げるが、Qiita単体の売上は開示していない。クラスメソッドのプレスリリース（2021-02-01）によれば、同社は技術情報共有サービスZennを合同会社CodeBrewから買収し、主な開発者は同社に入って開発を続ける。Zennの会員数や記事数は、当サイトが確認した公式ページには載っていない。
:::

| 項目 | Qiita | Zenn |
| --- | --- | --- |
| 現在の運営の始まり | 2017年12月にエイチームが運営会社を買収（公開は2011年9月） | 2021年2月にクラスメソッドが買収 |
| 運営 | Qiita株式会社（名古屋・エイチームHDの子会社） | クラスメソッド |
| 公表されている規模 | 会員180万人超、累計120万記事超（2026-09） | Publication 1,800超、うちPro 100超（2026-07） |
| 親会社にとっての役割 | グループのmicroCMSの販促先にもなる | 公式ページでは説明なし |

## AI時代の質の守り方

:::fact
Qiita Blog（2026-01-28、4月23日更新）によれば、Qiitaは生成AIや技術の民主化で「情報発信がしやすくなった一方で、ノイズも増えた」として、トレンドの算出を「質が高く、信頼できる情報」を優先する方向に改め、2026年4月23日に正式に切り替え、通報の画面も作り替えた。What's New in Zenn（2026-09-17）によれば、Zennは公開済みの記事・本・スクラップ・コメントを定期的に検査し、APIキーなどのシークレットが含まれている可能性があると書き手にメールで知らせる機能を入れた。投稿時に公開を止める機能ではなく、検出の完全さは保証しないと書いている。
:::

:::guess
両者とも生成AIで記事が書きやすくなったことへの対応を始めているが、守ろうとしているものが違うとみられる。Qiitaは「何を上に出すか」の基準を変え、場の質を広告主と読者に対して守ろうとしている。Zennは書き手が誤って鍵を公開する事故を減らす方向で、書き手を守ろうとしている。前者は場所の信頼が売り物で、後者は書き手との取引が事業の中心にある、という違いと整合的だ。
:::

## 執筆の道具

:::fact
どちらも手元のエディタで書いて投稿できる。GitHubの increments/qiita-cli（2026年10月6日確認）は「手元の環境で記事の執筆・プレビュー・投稿ができるツール」で、主言語TypeScript・Apache-2.0・スター520、2023年6月作成。zenn-dev/zenn-editor は「Convert markdown to html in Zenn format」と説明され、主言語TypeScript・MIT・スター747、2020年5月作成で、どちらも同日にpushがあった。ZennのPublication Proは、メンバー全員の記事を1つのGitHubリポジトリで管理できる連携を売り物の一つにしている。
:::

## 技術構成の重なりは、Ruby on RailsとBigQueryの2件

このページの下に出る技術構成の比較は、2本の記事のtechStackを機械的に突き合わせたものだ。共通と判定されたのは、Ruby on RailsとBigQueryの2件である。使い方は違う。QiitaのRailsは2011年からのモノリスで、当サイトの実観測ではRailsが返す画面に部品単位でReactが差し込まれている。ZennのRailsはAPIモードで、画面はNext.jsが描く。BigQueryは、QiitaではTreasure Dataから移したデータ基盤、Zennではログを集めてLooker Studioで見る基盤だ。違いは置き場所に大きく出ている。Qiita側にはAmazon ECS on Fargate、CloudFront、OpenSearch、Datadogが並び、AWSの上でコストとレスポンスタイムを削ってきた記録がある。Zenn側にはCloud Run、Cloud SQL、Cloud Tasks、Cloud Load Balancing、Cloudflareが並び、Google Cloudのサーバーレスの上でスパイクに耐える構成がある。同じRailsでも、15年動き続けるモノリスと、2020年に作られたAPIでは、載せる場所の選び方が違う。

書き手として選ぶなら、問いはひとつだ。書いたものから直接お金を受け取りたいならZennに本とバッジの仕組みがあり、Qiitaにはない。企業として選ぶなら、問いは2つになる。他社の読者に名前を出したいなら、Qiitaの広告・協賛と無料のOrganizationがその入口で、自社のテックブログの運営を楽にしたいなら、ZennのPublicationの有料プランがその道具だ。読み手にとってはどちらも無料だが、その無料を誰が支えているかは、2つの場所でまったく違う。
