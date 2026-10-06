---
service: "Qiita"
title: "15年で会員180万人・記事120万本、2017年に約14.5億円でエイチームの子会社に、記事は無料のまま広告とQiita Teamで稼ぐ — 書き手にお金を払わない技術記事の場所Qiitaを解剖する"
description: "2011年9月16日に公開されたエンジニア向けの技術記事サービスQiitaは、2026年9月1日時点で会員180万人超・累計120万記事超に達し、運営のQiita株式会社は2017年12月からエイチームホールディングスの完全子会社だ。読むのも書くのも無料で、書き手に売上を分ける仕組みはない。収益は企業向けの広告・イベント協賛と、月500円からの社内向け情報共有サービスQiita Teamにある。公式の会社ページ、15周年のリリース、Qiita for Business、Qiita Teamの料金表、Qiita Blog、Qiita社のエンジニアが書いた技術記事、GitHub、親会社の決算説明会、当サイトの実観測から、Rails のモノリスをECS on Fargate（Arm）に載せ替えた基盤、生成AIの時代にトレンドの算出を変えた理由、Organizationを企業の入口にする売り方までを解剖する。"
lead: "Qiitaの画面には、記事を売るボタンも、書き手に贈るバッジもない。あるのは「いいね」と「ストック」と、企業のOrganizationと、広告枠だ。2011年に公開され、15年で会員180万人・記事120万本を積み上げた技術記事の場所は、書き手からも読み手からもお金を取らず、エンジニアに届きたい企業から受け取ってきた。その設計が、生成AIの時代にどう揺れ、何を守ろうとしているかを、公開情報だけで解剖する。"
category: media
tags: [tech-blog, community, markdown, ruby-on-rails, react, aws, advertising, ai]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://qiita.com/"
# Affiliate link placeholder: no public affiliate or referral program was found for Qiita or
# Qiita Team (checked 2026-10-06 on qiita.com/about, business.qiita.com and the Qiita Team
# price list; revenue comes from ads, event sponsorship and Qiita Team subscriptions).
# Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<qiita-team-referral-link>"
#   program: "Qiita Team"
vendor: "Qiita株式会社（株式会社エイチームホールディングスの子会社）"
origin: "JP"
heroTheme: "qiita"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "Webアプリケーション"
    name: "Ruby on Rails (monolith, Qiita and Qiita Team)"
    confidence: confirmed
    evidence: "Qiita社のエンジニアの技術記事「Qiita を ECS 化しました」（2024-12-02）に「Qiita 及び Qiita Team は Ruby on Rails を利用した Web アプリケーション」と明記。旧Increments社の採用ページ（2018年）も言語にRuby・JavaScript、フレームワークにRails・React・Bootstrapを挙げる"
    evidenceUrl: "https://qiita.com/tomoasleep/items/e7f919c7b4d0f091d458"
  - layer: "実行基盤"
    name: "Amazon ECS on AWS Fargate (Arm) + ecspresso / ecschedule + GitHub Actions"
    confidence: confirmed
    evidence: "同記事は2024年7月にEC2（Capistranoでデプロイ、AMIはPackerとChefで作成）からECS on EC2へ移り、ECSのサービスとスケジュールタスクをecspressoとecschedule（設定はJsonnet）でGitHub Actionsから自動デプロイすると説明。2025-04-18の記事は、その後ECS on Fargate（x86）を経てFargate（Arm）へ移し、レスポンスタイムが約20%改善し、ピーク時のサーバー台数が約30%減ったと書く"
    evidenceUrl: "https://qiita.com/WakameSun/items/bf6ed99d589a98eb8d62"
  - layer: "データストア・検索"
    name: "MySQL (Amazon RDS / Aurora) / Redis / Amazon OpenSearch Service"
    confidence: confirmed
    evidence: "Qiita社のエンジニアの記事（2024-12-01）が、RDSの監査ログをCloudWatchからLambda経由でS3に移したこと、RIの購入時にRDSとOpenSearchのサイズを見直したこと、今後Amazon AuroraのストレージをI/O-Optimizedに変えたいことを挙げる。旧Increments社の採用ページ（2018年）はデータベースにMySQL・Redis、検索エンジンにElasticsearchを挙げる"
    evidenceUrl: "https://qiita.com/WakameSun/items/0ebf0ebf7a28d7051ae9"
  - layer: "データ基盤・監視"
    name: "BigQuery (migrated from Treasure Data) / Datadog"
    confidence: confirmed
    evidence: "同じ記事（2024-12-01）に「2019年よりTreasure Dataを中心としたデータ基盤を構築していたが、BigQuery中心の構成に変更した」と明記し、Fargate移行の利点としてDatadogのホスト課金がタスク課金に変わる試算を載せている"
    evidenceUrl: "https://qiita.com/WakameSun/items/0ebf0ebf7a28d7051ae9"
  - layer: "フロントエンド"
    name: "React (React on Rails)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、qiita.com のHTMLに js-react-on-rails-component のマウント要素が7つあり、GlobalHeader・HomeTrendPage・LoginModal などのコンポーネント名と ReactOnRails の記述が含まれていた。旧Increments社の採用ページ（2018年）もReactを挙げるが、現在の構成を説明する公式の記事は見当たらない"
  - layer: "配信"
    name: "Amazon CloudFront + nginx / cdn.qiita.com / S3 (qiita-image-store)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、qiita.com の応答は server: nginx と via: CloudFront（x-amz-cf-pop: NRT57）を返し、Railsの応答に付く x-runtime ヘッダと _qiita_login_session のCookieがあった。CSSは cdn.qiita.com、記事の画像は ap-northeast-1 の S3 バケット qiita-image-store から配信されていた"
  - layer: "Markdownと執筆ツール"
    name: "qiita-markdown (Ruby, MIT) / Qiita CLI (TypeScript, Apache-2.0) / Qiita API v2"
    confidence: confirmed
    evidence: "GitHubの increments/qiita-markdown（2026-10-06時点・API）は主言語Ruby・MIT・スター410・2014年10月作成で「Qiita-specified markdown processor」と説明。increments/qiita-cli は主言語TypeScript・Apache-2.0・スター520・2023年6月作成で「手元の環境で記事の執筆・プレビュー・投稿ができるツール」と説明し、どちらも2026年10月6日にpushがあった"
    evidenceUrl: "https://github.com/increments/qiita-cli"
  - layer: "広告配信"
    name: "Google Ad Manager (GPT)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、qiita.com のHTMLが securepubads.g.doubleclick.net（Google Publisher Tag）を読み込んでいた。Qiita for Businessはインプレッション保証のバナー広告を広告メニューに挙げている"
sources:
  - label: "Qiita株式会社: 会社概要"
    url: "https://corp.qiita.com/company"
    accessedAt: "2026-10-06"
  - label: "Qiita株式会社: Qiitaが15周年 会員180万人・累計120万記事を突破（2026-09-16）"
    url: "https://corp.qiita.com/releases/2026/09/15th-anniversary/"
    accessedAt: "2026-10-06"
  - label: "Qiita: About"
    url: "https://qiita.com/about"
    accessedAt: "2026-10-06"
  - label: "Qiita for Business（企業向けの広告・協賛メニュー）"
    url: "https://business.qiita.com/"
    accessedAt: "2026-10-06"
  - label: "Qiita Team: 料金プラン"
    url: "https://teams.qiita.com/price-list/"
    accessedAt: "2026-10-06"
  - label: "ITmedia NEWS: 「Qiita」運営会社、エイチームが買収（2017-12-22）"
    url: "https://www.itmedia.co.jp/news/articles/1712/22/news121.html"
    accessedAt: "2026-10-06"
  - label: "エイチームホールディングス: 2026年7月期 通期決算説明会 書き起こし（2026-09-04）"
    url: "https://www.release.tdnet.info/inbs/140120260908533206.pdf"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: Organization機能のアップデート（2026-08-28）"
    url: "https://blog.qiita.com/organization-improvement/"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: スライド機能（β版）をリリース（2026-07-07）"
    url: "https://blog.qiita.com/slide-beta/"
    accessedAt: "2026-10-06"
  - label: "Qiita Blog: トレンドと通報機能の改善（2026-01-28、2026-04-23更新）"
    url: "https://blog.qiita.com/improve-user-experience/"
    accessedAt: "2026-10-06"
  - label: "Qiita: Qiitaのいろいろランキング2025（2026-01-16）"
    url: "https://qiita.com/Qiita/items/67f7fc1c79173c9a6c44"
    accessedAt: "2026-10-06"
  - label: "Qiita: Qiitaアップデートサマリー - 2026年9月（2026-10-02）"
    url: "https://qiita.com/Qiita/items/93bd65f35d3e3e46cd44"
    accessedAt: "2026-10-06"
  - label: "Qiita社 技術記事: Qiita を ECS 化しました（2024-12-02）"
    url: "https://qiita.com/tomoasleep/items/e7f919c7b4d0f091d458"
    accessedAt: "2026-10-06"
  - label: "Qiita社 技術記事: QiitaのサーバーのCPUをArmにしたらレスポンスタイムが20%高速化した（2025-04-18）"
    url: "https://qiita.com/WakameSun/items/bf6ed99d589a98eb8d62"
    accessedAt: "2026-10-06"
  - label: "Qiita社 技術記事: Qiita社でインフラコストを抑えるためにやった取り組みを公開する（2024-12-01）"
    url: "https://qiita.com/WakameSun/items/0ebf0ebf7a28d7051ae9"
    accessedAt: "2026-10-06"
  - label: "Increments株式会社: エンジニア採用情報（2018年）"
    url: "https://increments.github.io/increments.co.jp/jobs/engineers/"
    accessedAt: "2026-10-06"
  - label: "GitHub: increments/qiita-cli"
    url: "https://github.com/increments/qiita-cli"
    accessedAt: "2026-10-06"
  - label: "GitHub: increments/qiita-markdown"
    url: "https://github.com/increments/qiita-markdown"
    accessedAt: "2026-10-06"
---

Qiitaは、エンジニアが技術の知識を記事にして共有するサービスだ。2011年に公開され、日本のエンジニアが「調べたら出てくる場所」として長く使われてきた。後発の[Zenn](/ja/articles/zenn)が書き手に売上を返す仕組みを看板にしたのに対し、Qiitaは15年間、書き手にも読み手にも課金していない。お金を払うのは、エンジニアに届きたい企業だ。

## サービス解説

Qiitaは、記事を書き、いいねとストックで評価し、タグとトレンドで見つける技術記事のサービスだ。企業や団体は「Organization」として所属メンバーの記事をまとめて見せられ、毎年12月のAdvent Calendar、オンラインのQiita Conference、夏のQiita Tech Festaといったイベントがその上に重なる。

:::fact
Qiita株式会社の会社概要（2026-10-06時点）によれば、同社は2012年2月29日設立、資本金5,000万円、代表取締役社長は柴田健介氏、本社は名古屋市中村区で、親会社は東証プライム上場の株式会社エイチームホールディングス（証券コード3662）だ。事業はQiitaと社内向け情報共有サービスQiita Teamの開発・運営。同社が2026年9月16日に出したリリースによれば、Qiitaは2011年9月16日に公開され、2026年9月1日時点で会員180万人超・累計120万記事超に達した。2026年はMarkdownで書けるスライド機能（β）を公開し、Qiita AI Summitを初めて開いた。ITmedia NEWS（2017-12-22）によれば、エイチームは当時の運営会社Increments株式会社の全株式を約14億5,300万円で取得し、2017年12月25日付で子会社にした。
:::

:::fact
Qiitaの公式Aboutページ（2026-10-06時点）は「月間600万人以上のユーザーが訪れる（2021年2月時点）」と書く。企業向けの「Qiita for Business」は、日付を示さずに月間約800万UU、登録会員150万人、利用者の約65%がツール導入の決裁や助言の立場にあるとし、Qiita Conferenceは春と秋で年間1万2,000件以上の申し込みがあると書く。Qiitaが2026年1月16日に公開した「Qiitaのいろいろランキング2025」の記事投稿数の分布表を当サイトで合計すると、2025年に1本以上の記事を投稿したユーザーは2万4,898人で、そのうち1〜5本が1万9,651人。年間100本以上を投稿したユーザーは2024年の64人から2025年は85人に増えた。
:::

:::pull
読むのも書くのも無料、書き手への分配はない。15年続いたこの設計の上に、会員180万人と記事120万本が積み上がった。
:::

::scorecard

## UX分析

Qiitaの体験は「調べる人が着地する場所」として磨かれてきた。検索から記事に来て、答えを見つけ、ストックして帰る。書き手への見返りはお金ではなく、いいねとContributionの数字と、Organizationを通じた所属の見え方だ。

- **書き手の動機は数字と所属**。記事への「いいね」がContributionとして積み上がり、表彰プログラムが段階ごとに書き手を表彰する。ランキング2025の記事は、Contributionが100〜250と1,000〜2,500の帯で直前の帯よりユーザー数が跳ね上がる分布を示し、「3桁」「4桁」という大台を目指す人が多いのではないかと書いている。[Zenn](/ja/articles/zenn)の本の販売やバッジのように、書き手にお金が渡る仕組みはQiitaにはない。
- **トレンドの算出を変えた**。Qiita Blog（2026-01-28、4月23日更新）によれば、Qiitaはトレンドのロジックを「エンジニアにとって質が高く、信頼できる情報」を優先する方向に改め、一部ユーザーへの先行提供ののち2026年4月23日に正式に切り替えた。理由として、生成AIや技術の民主化で「情報発信がしやすくなった一方で、ノイズも増えた」ことを挙げる。同時に通報の画面を大分類と小分類の2段階に作り替えた。
- **Organizationを企業の窓口に**。Qiita Blog（2026-08-28）によれば、Organizationに紐づく記事の目次の下に、採用やイベントを告知できる「PR枠」を1組織1つ置けるようになり、記事のフッターに組織のX・GitHub・connpassなどのリンクが並ぶようになった。いずれも追加料金の記載はない。
- **執筆の入口を手元に広げる**。Qiita CLI は手元のエディタで書いてプレビューし、投稿できる。2026年7月7日にβ公開されたスライド機能はMarpと互換で、9月には公開範囲（自分のみ・リンク限定・メンバー限定・全体）を選べるようになった。一方で、GitHub Gistとの連携は2026年2月18日に終了した。
- **弱点は分配のなさと情報の古さ**。15年分の記事は検索の資産だが、古いバージョンを前提にした記事も残る。書き手に直接の収入がない以上、記事を更新し続ける動機は、評価の数字と所属先の広報に頼ることになる。

## 技術構成

::techstack

:::fact
Qiita社のエンジニアが2024年12月2日に書いた記事によれば、QiitaとQiita TeamはRuby on RailsのWebアプリケーションで、長くEC2上でCapistranoによるデプロイと、PackerとChefで作るAMIの入れ替えで運用されてきた。設定変更の手順が複雑で、こなせるエンジニアが限られることなどを理由に、2024年7月にECS on EC2へ移行し、ECSのサービスとスケジュールタスクの定義をecspressoとecschedule（設定はJsonnet）で管理して、GitHub Actionsからデプロイする形にした。2025年4月18日の記事によれば、その後ECS on Fargate（x86）を経てFargate（Arm）へ移り、具体的な数値は伏せつつも、レスポンスタイムが約20%改善し、ピーク時のサーバー台数が約30%減ったと書いている。
:::

:::fact
2024年12月1日の記事は、インフラのコスト削減として、2019年から使っていたTreasure Data中心のデータ基盤をBigQuery中心に移したこと、RDSの監査ログをCloudWatch LogsからLambda経由でS3に移したこと、RDSとOpenSearchのサイズを見直し、古い世代のインスタンスをGravitonのr6gやt4gに替えたことを挙げる。Fargateへの移行の理由には、Datadogの課金がホスト単位からタスク単位に変わることも挙げている。当サイトの実観測（2026-10-06）では、qiita.com は server: nginx と CloudFront を返し、Railsの応答に付く x-runtime ヘッダと _qiita_login_session のCookieがあり、HTMLには React on Rails のマウント要素とGoogle Publisher Tagの読み込みがあった。GitHubでは、QiitaのMarkdown処理系 qiita-markdown（Ruby・MIT）と Qiita CLI（TypeScript・Apache-2.0）が公開されている。
:::

:::guess
Qiitaの基盤は、2011年からのRailsのモノリスを書き換えずに、下の層を入れ替えてきた形とみられる。アプリケーションはRailsのまま、デプロイはCapistranoからECSへ、計算資源はEC2からFargateのArmへ、データ基盤はTreasure DataからBigQueryへ移った。いずれの記事もコストとレスポンスタイムを主な理由に挙げており、記事を無料で配り続けるサービスにとって、インフラ費が利益に直結していることがうかがえる。React on Railsのマウント要素が画面の部品ごとに並ぶことからは、ページ全体をSPAに作り替えるのではなく、Railsの画面に部品単位でReactを差し込む方針が続いていると推測される。
:::

## ビジネスモデル

収益の入口は2つある。エンジニアに届きたい企業からの広告・協賛と、Qiita Teamの月額料金だ。読者と書き手からはお金を取らない。

:::fact
Qiita for Business（2026-10-06時点）は、企業向けのメニューとして、インプレッション保証のバナー広告、エンジニアに外部サイトでも配信するQiita DSP、編集部が取材して書くQiita Zineの記事広告、行動履歴でセグメントした1社単独のメール広告、エンジニア調査のQiita Research、ユーザー参加型のキャンペーンやハッカソン、Advent Calendar・Qiita Conference・Qiita Tech Festaなどのイベント協賛を挙げ、「数十万円から実施可能」と書く。Qiita Teamの料金表（同日確認・税込）は、Personal 1人で月500円、Micro 3人まで月1,520円、Small 7人まで月4,900円、Medium 10人まで月7,050円、Large 17人まで月15,300円、Extra は人数無制限で月15,300円から18人目以降1人720円を加え、IPアドレス制限と請求書払い（年払い可）が付く。全プランで投稿数は無制限、ファイル容量は30GBだ。
:::

:::fact
親会社エイチームホールディングスの2026年7月期の通期決算説明会（2026年9月4日、書き起こし）によれば、同社の売上高は229億9,700万円で、セグメントはデジタルマーケティングとエンターテインメントの2つだ。同説明会は、グループ入りしたヘッドレスCMSのmicroCMS社が伸びている理由の一つに「エンジニアコミュニティサイトQiita内においてプロモーションを強化していること」を挙げている。Qiita単体の売上高や利益は、同説明会では開示されていない。
:::

:::guess
Qiitaの収益構造は、記事そのものではなく「エンジニアの注目」を企業に売る形とみられる。書き手に分配しないぶん、記事の数と訪問者の数がそのまま広告在庫になり、Organization・Advent Calendar・Conferenceは企業がエンジニアに名前を出すための場として売られる。2026年8月にOrganizationへ無料のPR枠を加えたのは、まず企業を無料でQiitaに住まわせ、広告や協賛の商談につなげる入口を太くする狙いと推測される。親会社がグループのmicroCMSの販促にQiitaを使っていると説明していることは、Qiitaがグループにとって、単体の売上だけでなく、エンジニア向けの集客チャネルとしても評価されていることを示すとみられる。
:::

:::guess
生成AIで記事が書きやすくなったことは、記事の数で広告在庫を増やす構造にとって追い風にも逆風にもなりうる。記事が増えるほど在庫は増えるが、質の低い記事が増えれば、企業が名前を出したい場としての価値が下がる。2026年4月のトレンド算出の変更と通報機能の作り替えは、数よりも「信頼できる情報」を前に出すことで、広告主にとっての場の質を守る判断とも読める。
:::

2011年にRailsで書かれたサービスは、15年後もRailsのまま、下の基盤だけをArmのFargateに入れ替えて動いている。書き手にお金を払わず、読み手からも取らず、エンジニアに届きたい企業から受け取る。その設計は変えずに、AIの時代に「何を上に出すか」の基準を変えた。Qiitaが守ろうとしているのは記事の数ではなく、企業が名前を出したくなる場の信頼だ。
