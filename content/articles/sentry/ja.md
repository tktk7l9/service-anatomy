---
service: "Sentry"
title: "Sentryはなぜ「SDKはMIT・本体はFSL」なのか — エラー監視の定番が、ソースを公開したまま競合の再販だけを止める仕組みと料金の作り方"
description: "エラー監視・トレース・セッションリプレイのSaaS、Sentry。2008年のDjangoの小さなコードから始まり、累計2億1,700万ドルを調達した会社は、サーバーのソースをすべてGitHubに置いたまま、2019年にBSL、2023年に自作のFunctional Source License（FSL）へ切り替えた。SDKはMITのまま残し、本体だけ「競合する商用利用」を2年間禁じる線引きと、イベント量で課金するTeam月29ドルからの料金、1人月40ドルのAI（Seer）、Rust製のRelayとClickHouseの構成を、公式ブログ・ライセンス本文・ドキュメントから解剖する。"
lead: "Sentryのサーバーのコードは、今もGitHubで誰でも読める。社内で動かすのも自由だ。ただし、それを使ってSentryと同じサービスを売ることは、公開から2年間だけ禁じられている。一方で、アプリに組み込むSDKはMITライセンスのままで、他社が「Sentry SDKをそのまま使える」と宣伝することも妨げない。開発者に入口を開いたまま、出口の再販だけを止める——エラー監視の定番になった会社の、ライセンスと料金の設計を解剖する。"
category: dev-tool
tags: [observability, error-tracking, monitoring, licensing, open-source]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://sentry.io/"
vendor: "Functional Software, Inc. (dba Sentry)"
origin: "US"
heroTheme: "sentry"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "アプリケーション（Web・API・ワーカー）"
    name: "Python / Django"
    confidence: confirmed
    evidence: "公開リポジトリgetsentry/sentryのpyproject.tomlに「django>=5.2.15」と「requires-python = \">=3.13\"」が記載。GitHubの言語統計でもPythonが最大"
    evidenceUrl: "https://github.com/getsentry/sentry/blob/master/pyproject.toml"
  - layer: "フロントエンド"
    name: "React / TypeScript / Emotion"
    confidence: confirmed
    evidence: "同リポジトリのpackage.jsonに react 19.3.0、typescript、@emotion/react が記載"
    evidenceUrl: "https://github.com/getsentry/sentry/blob/master/package.json"
  - layer: "イベントの受け口"
    name: "Relay (Rust)"
    confidence: confirmed
    evidence: "公式の開発者向けアーキテクチャ文書に、SDKからのエンベロープをRelayが受け、プロジェクト設定とクォータを確かめてKafkaへ流すと明記。リポジトリgetsentry/relayの主言語はRust"
    evidenceUrl: "https://develop.sentry.dev/application-architecture/overview/"
  - layer: "キュー"
    name: "Apache Kafka"
    confidence: confirmed
    evidence: "アーキテクチャ文書に、取り込み用のKafkaトピックと、保存後にSnubaへ渡すイベントストリームの両方でKafkaを使うと明記"
    evidenceUrl: "https://develop.sentry.dev/application-architecture/overview/"
  - layer: "イベントの保存と検索"
    name: "Snuba / ClickHouse"
    confidence: confirmed
    evidence: "アーキテクチャ文書に、Snubaが問い合わせとイベント保存の層で、KafkaとRedisから読んでClickHouseに書き込むと明記"
    evidenceUrl: "https://develop.sentry.dev/application-architecture/overview/"
  - layer: "リレーショナルデータ・キャッシュ"
    name: "PostgreSQL / Redis / Memcached"
    confidence: confirmed
    evidence: "アーキテクチャ文書に、Postgresがアプリのリレーショナルデータ、Redisがキャッシュとクォータの計数、Memcachedがキャッシュを担うと明記"
    evidenceUrl: "https://develop.sentry.dev/application-architecture/overview/"
  - layer: "スタックトレースの復元"
    name: "Symbolicator (Rust)"
    confidence: confirmed
    evidence: "アーキテクチャ文書に、クラッシュのスタックトレースなどをシンボル化する補助サービスとして記載。リポジトリgetsentry/symbolicatorの主言語はRust"
    evidenceUrl: "https://github.com/getsentry/symbolicator"
  - layer: "データ保管場所"
    name: "US (Iowa) / EU (Frankfurt), Control Silo + Region Silo"
    confidence: confirmed
    evidence: "公式ドキュメントに、データ保管場所は米国（アイオワ）とEU（フランクフルト）から選べ、作成後は変更できないと明記。アーキテクチャ文書は、SaaSがセルフホストと同じソースから作る複数リージョンで動き、共有データのControl Siloと組織データのRegion Siloに分かれると説明"
    evidenceUrl: "https://docs.sentry.io/organization/data-storage-location/"
  - layer: "ロードバランサー・エッジ"
    name: "Google Cloud Load Balancing"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（sentry.io・us.sentry.io・de.sentry.io・取り込み口・2026-11-02）で via: 1.1 google が返り、sentry.ioのIPアドレスは34.x系のGoogleの網に属する。その奥では server: nginx と x-envoy-upstream-service-time が返る。公式の明言は見当たらない"
  - layer: "ドキュメントサイト"
    name: "Next.js on Vercel"
    confidence: likely
    evidence: "公開リポジトリgetsentry/sentry-docsのpackage.jsonに next ^15.5.24 が記載。当サイトの実観測（docs.sentry.io・2026-11-02）で server: Vercel と x-vercel-cache: HIT が返る。ホスティングについての公式の明言は見当たらない"
    evidenceUrl: "https://github.com/getsentry/sentry-docs"
  - layer: "課金"
    name: "Stripe"
    confidence: likely
    evidence: "当サイトの観測（2026-11-02）で、de.sentry.ioのContent-Security-Policyのframe-srcに js.stripe.com が許可先として並ぶ。公式の明言は見当たらない"
sources:
  - label: "Sentry公式: About（組織数・国数・1日あたりのイベント数・累計調達額・拠点）"
    url: "https://sentry.io/about/"
    accessedAt: "2026-11-02"
  - label: "Sentry公式: トップページ（製品一覧・Seerの説明・顧客の声）"
    url: "https://sentry.io/welcome/"
    accessedAt: "2026-11-02"
  - label: "Sentry公式ブログ: Driven by Open Source（David Cramer・2015-06-30。最初のコミットと有料化の経緯）"
    url: "https://blog.sentry.io/driven-by-open-source"
    accessedAt: "2026-11-02"
  - label: "Sentry公式プレスリリース: シリーズEで9,000万ドルを調達（2022-05-04）"
    url: "https://sentry.io/about/press-releases/sentry-raises-90-million-in-series-e-funding-to-expand-and-drive-adoption-of-developer-first-application-monitoring/"
    accessedAt: "2026-11-02"
  - label: "Harness公式プレスリリース: SentryからCodecovを買収（2026-06-02）"
    url: "https://www.harness.io/press-and-news/harness-acquires-codecov"
    accessedAt: "2026-11-02"
  - label: "Sentry公式ブログ: Relicensing Sentry（David Cramer・2019-11-06。BSLへの切り替え）"
    url: "https://blog.sentry.io/relicensing-sentry/"
    accessedAt: "2026-11-02"
  - label: "Sentry公式ブログ: Introducing the Functional Source License（Chad Whitacre・2023-11-17）"
    url: "https://blog.sentry.io/introducing-the-functional-source-license-freedom-without-free-riding/"
    accessedAt: "2026-11-02"
  - label: "Functional Source License 公式サイト（fsl.software）"
    url: "https://fsl.software/"
    accessedAt: "2026-11-02"
  - label: "GitHub: getsentry/sentry LICENSE.md（FSL-1.1-Apache-2.0の本文）"
    url: "https://github.com/getsentry/sentry/blob/master/LICENSE.md"
    accessedAt: "2026-11-02"
  - label: "GitHub: getsentry/sentry-javascript LICENSE（MIT）"
    url: "https://github.com/getsentry/sentry-javascript/blob/develop/LICENSE"
    accessedAt: "2026-11-02"
  - label: "Sentry開発者向けドキュメント: Self-Hosted Sentry（必要スペック・SaaSとの違い・ライセンス）"
    url: "https://develop.sentry.dev/self-hosted/"
    accessedAt: "2026-11-02"
  - label: "Sentry開発者向けドキュメント: Application Architecture Overview"
    url: "https://develop.sentry.dev/application-architecture/overview/"
    accessedAt: "2026-11-02"
  - label: "Sentryドキュメント: Data Storage Location（米国・EU）"
    url: "https://docs.sentry.io/organization/data-storage-location/"
    accessedAt: "2026-11-02"
  - label: "Sentry公式: 料金ページ（プラン・含まれる量・追加料金）"
    url: "https://sentry.io/pricing/"
    accessedAt: "2026-11-02"
  - label: "Sentryドキュメント: Pricing & Billing（カテゴリ別単価・PAYG予算・Seerの料金・税）"
    url: "https://docs.sentry.io/pricing/"
    accessedAt: "2026-11-02"
  - label: "Sentry公式ブログ: Another year, another $1,000,000 to Open Source maintainers（2026-10-21）"
    url: "https://blog.sentry.io/another-year-another-1-000-000-to-open-source-maintainers/"
    accessedAt: "2026-11-02"
  - label: "Better Stack公式ドキュメント: Errors（Sentry SDK互換）"
    url: "https://betterstack.com/docs/errors/"
    accessedAt: "2026-11-02"
---

アプリが本番で落ちたとき、どの行で、どのユーザーの、どのリリースから壊れたのかを教えてくれる。Sentryはその用途の定番として、多くの開発者が最初に入れるエラー監視ツールだ。そして珍しいことに、そのサーバーのコードはほぼすべてGitHubで公開されている。にもかかわらず、Sentryは自分たちのソフトウェアを「オープンソース」とは呼ばない線引きを、自らライセンスを書いてまで引いた。この記事は、その線がどこに引かれ、料金と構成がその線とどう噛み合っているかを読み解く。

## サービス解説

Sentryは、アプリケーションのエラー（例外やクラッシュ）を集めて、同じ原因のものを1つの「Issue」にまとめ、スタックトレース・リリース・ユーザー環境と一緒に見せるサービスだ。今ではエラーに加えて、トレース（処理の流れと所要時間）、ログ、セッションリプレイ（ユーザーの画面操作の再現）、プロファイリング、Cronジョブの監視、稼働監視（Uptime）までを、同じトレースIDでつないで扱う。AIの「Seer」は、エラーの原因を推定して修正のプルリクエストを作り、レビュー段階で不具合を予測する機能として売られている。

:::fact
Sentryの共同創業者David Cramerが2015年6月30日に公式ブログに書いた記事によれば、最初のコミットは2008年5月12日付で、メッセージは「initial working code」。Djangoのエラーをデータベースに記録する小さな例として公開したコードを、当時Cramerが勤めていたDisqusが使うようになり、「2010年5月ごろ」に本格的に作り込むことを決めた日を「Sentryが本当に生まれた日」と書いている。同じ記事によれば、ホスティング版の顧客課金の開発は2012年のクリスマスまで続き、最初の有料顧客は2013年2月28日に付いた。後にDisqusへ加わったChris Jenningsが、Cramerにサンフランシスコへ移るよう説得したことも記されている。
:::

:::fact
公式のAboutページ（2026-11-02閲覧）は、Sentryを「数百万人の開発者」と146か国の20万の組織が使い、1日に1,900億件超のイベントを処理し、6回の資金調達で2億1,700万ドルを集めたと書く。対応するプログラミング言語は100以上で、拠点としてサンフランシスコ・ウィーン・トロントを挙げている。2022年5月4日の公式プレスリリースでは、シリーズEで9,000万ドルを調達して累計2億1,700万ドル、企業価値は30億ドル超。BONDとAccelが共同で主導し、既存投資家のNEAと新規のK5 Globalが参加した。当時の利用者は開発者350万人超・8万5,000組織で、CEOのMilin Desaiは「売上は2年余りで3倍以上になった」と述べている。
:::

:::fact
Sentryは2022年にコードカバレッジのCodecovを買収したが（AboutページにはADTMagなどの2022年12月の報道が並ぶ）、2026年6月2日のHarnessの公式プレスリリースによれば、HarnessがSentryからCodecovを買い取った。価格は非公表で、Harnessはブランドとオープンソースプロジェクト向けの無料提供を維持するとしている。同じリリースでSentryのMilin Desaiは「Codecovのために家を見つけただけでなく、ふさわしい家を見つけた」とコメントしている。
:::

:::pull
読めて、動かせて、直せる。ただし、それで同じ商売をしてはいけない。Sentryのライセンスは、その一点だけを禁じるために書かれている。
:::

### 「オープンソース」から「Fair Source」へ

Sentryの元のコードはBSD 3-Clauseで公開され、リポジトリによってApache-2.0やMITも混ざっていた。そこから2度、ライセンスを変えている。

:::fact
2019年11月6日の公式ブログ「Relicensing Sentry」（David Cramer）で、SentryはBusiness Source License（BSL）への切り替えを発表した。記事自身が、BSLは「正式にはオープンソースのライセンスではない」と書いている。制限は「Sentryのサービスの商用版を提供してはならない」という一点で、36か月たつとそのコードはApache-2.0になる。理由として、資金を得た企業がSentryのコードやドキュメント、マーケティングまで写して競合してきたこと、大手クラウドが商用ホスティングする恐れを挙げ、「自社の仕事を他社に売られないための保護」が目的だと説明した。社内でSentryを動かす人への影響はない、とも書いている。
:::

:::fact
2023年11月17日の公式ブログ（Chad Whitacre）で、SentryはSentryとCodecovを、自ら書いた新しいライセンス「Functional Source License（FSL）」に切り替えると発表した。BSLは既定の非競合期間4年が長すぎ（Sentryは3年にしていたが、それでも長すぎたと書く）、追加利用許諾（Additional Use Grant）の書き方が案件ごとに違うため、BSLのプロジェクトは実質的にすべて別のライセンスになってしまう、というのが乗り換えの理由だ。FSLは、禁止事項を「競合する利用（Competing Use）」に固定し、2年後にApache 2.0またはMITへ移る。公式サイトfsl.softwareは、FSLを「2年後にApache 2.0またはMITに変わるFair Sourceのライセンス」と説明し、FSL-1.1-ALv2とFSL-1.1-MITの2版を載せている。
:::

:::fact
getsentry/sentryのLICENSE.md（2026-11-02閲覧）はFSL-1.1-Apache-2.0で、著作権表示は「Copyright 2008-2024 Functional Software, Inc. dba Sentry」。使用・複製・改変・再配布は「許可された目的（Permitted Purpose）」なら認められ、それは「競合する利用」以外のすべてと定義される。競合する利用とは、ソフトウェアを他者に商用の製品やサービスとして提供することのうち、そのソフトウェアの代替になるもの、Sentryがそのソフトウェアを使って提供している製品の代替になるもの、または同じか実質的に同じ機能を提供するものを指す。社内利用、非商用の教育と研究、ライセンシーへの専門的なサービス提供は、許可された目的として明記されている。そして公開日から2年たった時点で、Apache License 2.0での利用を取り消し不能な形で認める「将来ライセンスの付与」がある。当サイトの確認では、取り込み口のrelay、保存層のsnuba、セルフホスト用のself-hostedのリポジトリも同じFSL-1.1-Apache-2.0だった。一方で、sentry-javascriptのLICENSEはMIT（「Copyright (c) 2012 Functional Software, Inc. dba Sentry」）で、GitHubのAPIはsentry-pythonのライセンスをMITと返す。
:::

:::guess
この線引きは、ソフトウェアを「入口」と「本体」に分けて考えるとわかりやすい。アプリに組み込むSDKは、利用者のコードと一緒に配布されるので、条件が厳しいと採用そのものが止まる。だからSDKは最も緩いMITのまま置かれているとみられる。サーバー側は、SaaSとして売っている製品そのものなので、そこだけに「競合する利用」の禁止をかける。結果として、Better Stackのように「既存のSentry SDKのまま、送り先だけ変えればいい」と公式ドキュメントに書く競合が現れても、それはライセンス上の抜け道ではなく、Sentryが入口をMITにした時点で受け入れた帰結と読める。SDKが他社にも使われるほど「Sentry SDK」が事実上の標準になる、という損得を承知のうえの設計とも考えられる。
:::

::scorecard

## UX分析

SentryのUXは、「最初の1件のエラーが届くまでを短くする」ことと、「届いたエラーを、直す人が直せる形にする」ことの2つに向けられている。

- **導入は数行**。トップページは「5行」のコードで始められると書き、Python・JavaScript・React・Next.js・Go・Ruby・PHP・.NETなどのSDKを並べる。SDKを入れるとエラーが自動で送られ、同じ原因のエラーは1つのIssueにまとめられる。大量の例外を1件ずつ眺めるのではなく、「直すべき問題の一覧」として見られることが、エラー監視の体験の中心だ。
- **エラーから周辺の文脈へ**。トップページは、エラー・ログ・リプレイ・スパン・プロファイル・メトリクスを「同じトレース」でつなぐと説明する。例外の画面から、そのときのユーザー操作の再現や遅い処理、関連するログへたどれる。GitHub・Slack・Jira・Linearとの連携も挙げられ、どのコミットで壊れたか、誰に回すかまでを1画面で扱う流れになっている。
- **AIは「なぜ壊れたか」を書く役**。Seerは、ログ・コミット・トレース・スタックトレースを材料に「どこで」だけでなく「なぜ」失敗したかを説明し、マージできる修正パッチを作る、とトップページは書く。プルリクエストをエラーと性能の履歴と照らして、出荷前に退行を見つけるコードレビューも同じSeerの機能だ。料金ドキュメントは、Seerがアプリのデータ・エラー情報・ソースコードをAIモデルの学習に使わないと明記している。
- **無料で「1人で本番に入れる」まで**。料金ページによれば、無料のDeveloperプランは利用者1人で、エラー月5,000件、スパン500万、リプレイ50件、ログ5GBなどが含まれ、さかのぼれる期間は30日。新規アカウントには14日間のBusinessプランの無料トライアルが付き、クレジットカードは要らない。
- **上限に達したら、黙って捨てる**。料金ドキュメントによれば、予約した量とPAYG（従量）予算を使い切ったあとのデータは破棄され、課金されない。そのかわり、その請求期間の残りは監視が失われる。請求が青天井にならない安心と、障害が重なった月ほど肝心のデータが落ちるかもしれない危うさが、同じ一文に同居している。

:::fact
公式の開発者向けドキュメント（2026-11-02閲覧）によれば、セルフホスト版はDockerとDocker Composeで動き、最低要件は4コア・RAM 16GB（加えてスワップ16GB）・空きディスク20GBで、推奨はRAM 32GB。ディスクの入出力が重要で、iowaitがCPU時間の10%を超えるなら負荷に耐えられていない可能性が高いと注意する。保証や専任のサポートはなく、Sentryのエンジニアがベストエフォートで答えるほかは、コミュニティのDiscordを案内している。SaaSにあってセルフホストにないものとして、料金と課金の仕組み、スパイク保護、クローズドソースのSeerなどのAI・機械学習機能、データ保管場所の選択が挙がり、iOSのシンボル化などモバイルのスタックトレース復元も限られるという。ライセンスの節は、FSLの下で社内を含めどこにでも導入できるが、セルフホストしたSentryを販売することや、FSLのコードで直接競合することは禁じられ、2年後にApache 2.0になると書く。
:::

:::guess
セルフホストの最低要件がRAM 16GBというのは、エラー監視を「ちょっと自分で建てる」には重い。Kafka・ClickHouse・Postgres・Redisと、Rust製のサービス群を一式動かす構成なので、当然の重さではある。読み方を変えれば、ソースを公開していても、運用の手間とAI機能の差によって、小さなチームほどSaaSを選ぶ合理性が高い作りになっているとみられる。ライセンスで競合の再販を止め、構成の重さとAIの非公開で自前運用との差を作る——コードの公開と商売を両立させる二段構えと読める。
:::

## 技術構成

::techstack

:::fact
公式の開発者向けアーキテクチャ文書（2026-11-02閲覧）によれば、SDKはイベントをロードバランサー経由で `/api/0/envelope/` に送り、Relayが受け取る。RelayはSentry本体からプロジェクト設定を取ってメモリとRedisにキャッシュし、Redisでイベント数とクォータを数えたうえで、取り込み用のKafkaトピックに流す。Sentryの取り込みコンシューマーがKafkaから読んで前処理のタスクを始め、必要に応じてSymbolicatorでスタックトレースをシンボル化し、処理・保存のタスクを経て、Snuba向けのイベントストリームに出す。SnubaのコンシューマーがそれをClickHouseに書き込み、別のコンシューマーがアラートを処理する。Sentry本体（Web）はUIとAPIを担い、Postgres・Memcached・Redis・Snuba・Kafka・Seer・Symbolicatorにつながる。
:::

:::fact
同じ文書によれば、SaaSのSentryはセルフホスト版と同じソースから作られた複数のリージョンで動く。ログインやサインアップのようにどの地域にも属さない共有データは「Control Silo」に、組織のデータはそれぞれのインフラを持つ「Region Silo」に置かれ、どちらにも触れる「Monolith」モードもある。データ保管場所のドキュメントは、米国（アイオワ）とEU（ドイツ・フランクフルト）を選べ、一度選ぶと変えられないと書く。エラー・トランザクション・スパン・ログ・リプレイ、リリースやソースマップは選んだ地域に保存される一方、ユーザーアカウント、組織の設定、監査ログ、Cronのチェックイン、DSNキーやアクセストークン、サポートでやりとりしたデータは常に米国に置かれる。稼働監視のチェックは複数の地点から行われ、選んだ地域の外に保存されることがある。
:::

:::fact
GitHubのgetsentry/sentryは2010年8月30日に作られたリポジトリで（GitHubのAPI・2026-11-02）、言語別のコード量はPythonが最大、TypeScriptがそれに続く。pyproject.tomlはPython 3.13以上とDjango 5.2.15以上を求め、package.jsonはReact 19.3.0とEmotionを使う。取り込み口のrelayとシンボル化のsymbolicatorはRust、保存層のsnubaはPythonで書かれている。当サイトのHTTPヘッダー観測（2026-11-02）では、sentry.ioやus.sentry.io、de.sentry.ioの応答に via: 1.1 google と server: nginx が、us.sentry.ioなどには x-envoy-upstream-service-time も返った。docs.sentry.ioは server: Vercel を返した。
:::

:::guess
via: 1.1 google はGoogle Cloudのロードバランサーが付けるヘッダーで、IPアドレスもGoogleの網に属するため、SaaSの入口はGoogle Cloud上にあるとみられる。ただし公式ドキュメントはクラウド事業者を名指ししておらず、保管場所のアイオワとフランクフルトがどの事業者の設備かも書かれていないので、これはヘッダーからの推測にとどまる。構成全体を見ると、遅延と量に厳しい入口（Relay）と、ネイティブのクラッシュを扱う重い処理（Symbolicator）だけをRustで書き、画面と業務ロジックは長年のDjangoのまま、大量のイベントの検索は列指向のClickHouseに任せる、という役割の切り分けが読み取れる。監視サービスの原価を左右する「受ける・数える・捨てる」をRelayに集めたことで、上限を超えたデータを処理の早い段階で落とせる作りになっていると推測される。
:::

## ビジネスモデル

Sentryの収益は、プランの月額と、イベントの量に応じた課金の組み合わせでできている。利用者の人数ではなく、送られてくるデータの量に値段を付けるのが基本だ。そこに2026年、AIのSeerだけは「人数」で課金する別の軸が加わった。

:::fact
料金ページ（2026-11-02閲覧）によれば、プランは無料のDeveloper（利用者1人）、Team（月29ドル、年払いなら月26ドル）、Business（月89ドル、年払いなら月80ドル）、個別見積もりのEnterpriseの4つで、Team以上は利用者数が無制限。有料プランにはエラー5万件、スパン500万、リプレイ50件、ログ5GB、アプリケーションメトリクス5GB、添付ファイル1GB、稼働監視とCron監視が各1件などが含まれる。さかのぼれる期間はDeveloperが30日、TeamとBusinessが最大90日。料金ドキュメントによれば、ページに表示された価格には売上税が含まれず、EUと英国では有効なVAT番号などを出さない注文にVATがかかる。価格はすべて米ドルで、日本円の料金表は当サイトの確認した範囲では見当たらなかった。
:::

:::fact
料金ドキュメント（2026-11-02閲覧）によれば、含まれる量を超えた分は、前払いで割安になる「予約量（Reserved）」か、全カテゴリで共有する「PAYG予算」で賄う。エラーの単価は量に応じて下がり、Teamの場合、5万〜10万件の帯で予約1件0.00029ドル・PAYG 0.0003625ドル、50万〜1,000万件の帯で予約0.00015ドル・PAYG 0.0001875ドル、2,000万件超で予約0.00012ドル・PAYG 0.00015ドル。Businessの単価は帯によってTeamの約2〜3倍で、5万〜10万件の帯のPAYGは0.0011125ドル、2,000万件超のPAYGは0.0003ドル。ログとアプリケーションメトリクスは1GBあたり0.50ドル、Cron監視は1件0.78ドル、稼働監視は1件1.00ドルでPAYGのみ。ドキュメントは、カテゴリ別の価格は丸めた値だと断っている。
:::

:::fact
同じドキュメントによれば、Seerは「アクティブなコントリビューター1人あたり月40ドル」で既存の契約に追加し、PAYG予算とは別の月額として請求される。アクティブなコントリビューターとは、Seerを有効にしたリポジトリに月2件以上のプルリクエストを出した人で、人数は毎月数え直す。GitHubの [bot] アカウントは数えない。2026年1月より前の旧Seerは、契約あたり月20ドルに25ドル分のクレジットが付き、修正の実行1回1.00ドルといった従量課金だったが、2026年1月以降は新規には提供されない。
:::

:::fact
Sentryは、使っているオープンソースのメンテナーに毎年お金を払っている。2026年10月21日の公式ブログによれば、2026年の額は前年の75万ドルから引き上げた100万ドルで、うち49万5,000ドルをthanks.dev経由で利用中のパッケージのメンテナーへ、10万ドルをecosyste.ms Fundsへ、約30万5,000ドルをPython Software Foundation（6万ドル）やDjango Software Foundation（4万ドル）などの財団へ配った。「Open Source Pledge」の参加37社が払った累計は841万5,535ドルだという。
:::

:::guess
料金の形からは、Sentryが「量」と「人」を使い分けていることが読み取れる。エラーやスパンは、サービスが成長するほど自然に増え、単価が下がっても総額は伸びる。利用者数を無制限にしているのは、社内に広く配るほどイベントの送り元が増え、量の課金に返ってくるからとみられる。一方のSeerは、イベント量ではなく「プルリクエストを出す人」を数える。AIの原価はエラーの件数よりも、修正やレビューを依頼する開発者の数に比例すると判断し、旧来の従量課金から開発者向けツールに多い席課金に寄せたと推測される。

ライセンスとの関係でいえば、FSLが守っているのはサーバーのコードそのものより、この料金表で売っている「運用されたSaaS」だと考えられる。オープンソースへの毎年の支払いは、自社のソフトウェアをオープンソースと呼ばなくなったあとも、オープンソースの生態系に対する立場を数字で示す行為と読める。ただし、それが採用や評判にどれだけ返ってきているかは、公開情報からは判断できない。
:::

Sentryは、コードを公開したまま、公開と商売の境目を自分で定義し直した会社だ。SDKはMITで誰にでも開き、サーバーは読めて動かせるが2年間は同じ商売に使わせない。そのうえで料金は量に付け、AIだけは人に付ける。エラー監視を選ぶ側にとって、この線引きは「いざとなれば自分で動かせる」という保険であり、同時に、SDKの互換を掲げる他社へ移る道も開いたままにしている。どちらを使うかを決めるのは、ライセンスの文言より、自分たちのデータ量と、それを誰が運用するかだ。
