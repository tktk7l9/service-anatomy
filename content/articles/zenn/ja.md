---
service: "Zenn"
title: "知見に対価がつく場所 — 公開4ヶ月半で買収されたZennが技術ブログの標準になるまで"
description: "エンジニアのための情報共有コミュニティZenn。Markdown×CLI×GitHub連携の執筆体験、本とバッジで書き手に対価を返すC2C設計、公開4ヶ月半でのクラスメソッド譲渡、Next.js+Rails+Cloud Runの技術構成までを解剖する。"
lead: "個人開発者が作った技術記事プラットフォームが、公開からわずか4ヶ月半で企業に事業譲渡され、そのまま日本のエンジニア文化の中心に居座り続けている。Nani翻訳・しずかなインターネットと同じ開発者catnoseの原点にして最大のプロダクト、Zennを解剖する。"
category: media
tags: [tech-blog, markdown, nextjs, google-cloud, indie-dev]
publishedAt: "2026-07-17"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://zenn.dev/"
vendor: "クラスメソッド"
origin: "JP"
heroTheme: "zenn"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "フロントエンド"
    name: "Next.js"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー観測（x-powered-by: Next.js、2026-07-17）とZenn公式チームの技術記事に明記"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
  - layer: "バックエンドAPI"
    name: "Ruby on Rails (API mode)"
    confidence: confirmed
    evidence: "Zenn公式チームのCloud Run移行記事（2022-03）に「Next.js + Rails（APIモード）」と明記"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
  - layer: "実行基盤"
    name: "Google Cloud Run"
    confidence: confirmed
    evidence: "App Engineからの無停止移行を公式チームが記事化（2022-03）。クラスメソッドの導入事例にも明記"
    evidenceUrl: "https://classmethod.jp/cases/zenn/"
  - layer: "データベース"
    name: "Cloud SQL"
    confidence: confirmed
    evidence: "Zenn公式チームのCloud Run移行記事に構成図と共に記載"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
  - layer: "非同期処理/ジョブ"
    name: "Cloud Tasks / Cloud Scheduler / Cloud Run Jobs"
    confidence: confirmed
    evidence: "公式チームの技術記事群（Cloud Run移行・Cloud Run Jobs移行）に明記"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/we-use-cloud-run-jobs"
  - layer: "IaC / 分析基盤"
    name: "Terraform / BigQuery + Looker Studio"
    confidence: confirmed
    evidence: "クラスメソッドのGoogle Cloud導入事例（2023-03）にTerraform管理・BigQueryログ集計・Looker Studio活用と明記"
    evidenceUrl: "https://classmethod.jp/cases/zenn/"
  - layer: "ロードバランサ"
    name: "Cloud Load Balancing"
    confidence: confirmed
    evidence: "Zenn公式チームのCloud Run移行記事に、ロードバランサのバックエンドサービスをServerless NEG経由でCloud Runへ切り替えて無停止移行したと明記。当サイトの観測（via: 1.1 google、2026-09-28）とも整合"
    evidenceUrl: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
  - layer: "CSP違反レポート受信"
    name: "Cloud Functions"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（CSPのreport-uriがasia-northeast1のcloudfunctions.netを指す、2026-09-28）。公式ドキュメントでの明言は見当たらない"
  - layer: "CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare / cf-ray / cf-cache-status: HIT、2026-09-28）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "Zenn About（公式・機能と対価の仕組み）"
    url: "https://zenn.dev/about"
    accessedAt: "2026-10-06"
  - label: "クラスメソッド: Zenn買収に関するプレスリリース（2021-02-01）"
    url: "https://classmethod.jp/news/20210201-zenn/"
    accessedAt: "2026-10-06"
  - label: "team_zenn: ZennのバックエンドをApp EngineからCloud Runへ移行（2022-03）"
    url: "https://zenn.dev/team_zenn/articles/migrate-appengine-to-cloudrun"
    accessedAt: "2026-09-28"
  - label: "クラスメソッド: ZennのGoogle Cloud導入事例（2023-03）"
    url: "https://classmethod.jp/cases/zenn/"
    accessedAt: "2026-09-28"
  - label: "ITmedia: 技術情報コミュニティ「Zenn」クラスメソッドが買収（2021-02）"
    url: "https://www.itmedia.co.jp/news/articles/2102/01/news092.html"
    accessedAt: "2026-07-17"
  - label: "What's New in Zenn: Publication機能が正式リリース＆Proプラン提供開始（2024-01-22）"
    url: "https://info.zenn.dev/2024-01-22-publication-pro-release"
    accessedAt: "2026-09-28"
  - label: "What's New in Zenn: Publication Proが100件を突破（2026-07）"
    url: "https://info.zenn.dev/2026-07-22-publication-pro-100"
    accessedAt: "2026-10-06"
  - label: "Zenn よくある質問: 販売や振込の手数料は？"
    url: "https://zenn.dev/faq/sales"
    accessedAt: "2026-10-06"
  - label: "Zenn: Publication（プランと料金）"
    url: "https://zenn.dev/publications"
    accessedAt: "2026-10-06"
  - label: "What's New in Zenn: Publicationの利用規約を改定します（2026-09-16）"
    url: "https://info.zenn.dev/2026-09-16-update-publication-terms"
    accessedAt: "2026-10-06"
---

日本のエンジニアが技術記事を書く場所は、長らく[Qiita](/ja/articles/qiita)がほぼ唯一の答えだった。2020年9月、そこに個人開発のサービスが現れ、数年で「とりあえずZennに書く」という新しい既定値を作ってしまう。当サイトで取り上げた[Nani翻訳](/ja/articles/nani-translation)と[しずかなインターネット](/ja/articles/sizu-me)の開発者・catnose氏の原点であり、いまも最大のプロダクトであるZennを解剖する。

## サービス解説

Zennは「エンジニアのための情報共有コミュニティ」を公式に掲げる技術記事プラットフォームだ。記事・本・スクラップ（メモ的な議論スレッド）の3形式で知見を共有できる。

:::fact
公式のAboutページによれば、書き手はMarkdownエディタで記事を書けるほか、知見を「本」にまとめて0〜5,000円で販売でき、読者は有料バッジを著者に贈れる。バッジは現金またはAmazonギフト券に換えられる。運営はクラスメソッド。2020年9月に個人開発者catnose氏が公開し、2021年2月1日に譲渡元CodeBrewからクラスメソッドへ事業譲渡された。公開から買収まではおよそ4ヶ月半だった。
:::

:::pull
「知見を共有するエンジニアに、ちゃんと対価が返る」——Zennの設計思想は、機能一覧ではなくこの一文に集約されている。
:::

::scorecard

## UX分析

Zennの強さは、読む側ではなく「書く側」の体験に振り切ったことにある。

- **書き味がエディタ品質**。Markdownエディタは補完・画像アップロード・プレビューまで滑らかで、「ブログ投稿フォーム」ではなく「エディタ」として作られている。この書き味は後発の[しずかなインターネット](/ja/articles/sizu-me)にも受け継がれる開発者の署名だ。
- **Zenn CLIとGitHub連携が上級者を掴んだ**。記事を自分のリポジトリでMarkdownとして管理し、pushで公開できる。文章がプラットフォームの中に閉じ込められない安心感は、エンジニアという読者層への深い理解を示す。
- **対価の仕組みが「書く理由」を作る**。本の販売とバッジは、金額の多寡よりも「良い知見は評価される」というシグナルとして機能し、記事の平均品質を引き上げる方向に働く。
- **弱点は読み手側の発見体験**。トレンドとトピックが中心で、過去の良記事に出会う導線は細い。検索流入とSNS共有への依存度が高い構造は、他のUGCプラットフォームと共通の課題だ。

## 技術構成

::techstack

:::fact
Zenn公式チームの技術記事（2022年3月）によれば、構成はNext.jsとRails（APIモード）の2種のアプリケーションサーバーで、いずれもGoogle Cloud Run上で動く。もともとApp Engineで動いていたが、記事がバズった際のスケール遅延（起動に数分）を契機に無停止でCloud Runへ移行し、スパイク時の増強をおよそ10秒まで短縮した。移行はCloud Load Balancingのバックエンドサービスを切り替える形で行われた。インフラはTerraformで管理され、ログはBigQueryに集約してLooker Studioで可視化される。当サイトの2026年9月28日の観測でも、x-powered-by: Next.jsとGoogleのロードバランサ（via: 1.1 google）、CSP違反レポートの送信先としてasia-northeast1のCloud Functionsが確認できた。
:::

:::guess
配信の最前段にはCloudflareが立っている（server: cloudflare、cf-cache-status: HITを実観測）。公式ドキュメントでCDN構成への明言は見当たらないため表ではlikelyに留めるが、キャッシュヒットが観測できることから、記事ページの多くはCDNキャッシュで返され、Cloud Runの負荷を大きく抑えているとみられる。Zennがこの規模のトラフィックを少人数で運用できているのは、「動的アプリを静的に配る」この二段構えの寄与が大きいと推測される。
:::

## ビジネスモデル

Zennの収益構造は、広告ではなくC2Cの手数料と親会社の戦略価値でできている。

:::fact
当サイトの確認では、サービス内に一般的な広告枠は見当たらない。個人向けの収益化の仕組みは本の販売（0〜5,000円）と読者からのバッジ贈付で、いずれも書き手に対価が渡るC2C取引だ。これとは別に、企業・組織向けの有料プラン「Publication Pro」が2024年1月22日に提供開始された。統計ダッシュボード、レビュー機能、組織の目的に合わせたバナー設置などを備え、2026年7月22日時点で利用Publicationは100を超えた（Publication全体では1,800超）。運営はAWS支援事業などを手がけるクラスメソッドで、同社は買収時のプレスリリースで、自社技術ブログDevelopers.IOとは独立してZennを運営すると表明している。
:::

:::fact
2026年10月6日に確認したZennのFAQ「販売や振込の手数料は？」によれば、本の販売には販売価格の3.6%の決済手数料（Stripeの決済手数料に準拠）と、決済手数料を引いた額の10%のプラットフォーム利用料がかかり、現金の振込申請には1回350円がかかる。FAQの例では1,000円の本の受取額は868円だ。同日に確認した公式のPublicationページによれば、Publication Proは月額9,980円または年額99,800円（初回30日間無料）で、その上に新しいプラン「Publication Connect」（6カ月36万円、月あたり6万円）が加わり、記事への質問箱、フォロワーへのニュースレター、リピート読者の分析、経営層向けレポート、優先登壇権が付く。Zennは複数の有料プランを持てるようPublicationの利用規約を改め、2026年10月16日に施行する（2026年9月16日告知）。
:::

:::guess
本・バッジの手数料とPublication Proの売上でこの規模のプラットフォームを賄えているかは公開されておらず、単体の収益性は限定的とみられる。むしろクラスメソッドにとってのZennは、国内エンジニアコミュニティの中心を押さえるブランド資産であり、採用・認知への波及効果を含めた投資と解釈するのが自然だ。catnose氏自身が譲渡理由として語った「個人がC2Cの金銭を預かる重さ」は、逆に言えば企業が持つことで初めて安定するモデルであり、個人開発の出口戦略としても教科書的な事例になっている。
:::

個人が4ヶ月半で作った文化が、企業の資本で持続可能になり、いまも開発者本人の思想（書き味・対価・データの持ち運びやすさ）を保ったまま動き続けている。Zennは「個人開発の成功」と「事業譲渡の成功」が両立した、日本ではまだ数少ない実例だ。

訂正（2026年9月28日）。初版ではZennの収益化の仕組みを「本の販売と読者からのバッジ贈付」のみと書いていたが、誤りだった。2024年1月22日から企業・組織向けの有料プラン「Publication Pro」が提供されており、その記述を加えた。あわせて「サービス内に広告は表示されない」との記述を、当サイトの確認範囲に限った表現に改めた。
