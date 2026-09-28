---
service: "Todoist"
title: "話しかければタスクになる — Todoistは「差分だけ送る同期」と声の入力で、学生の趣味から5,000万人のToDoアプリへ、ベンチャー資本なしで育った"
description: "タスク管理アプリのTodoist。2007年に学生の趣味として生まれ、外部のベンチャー資本を入れずに、38か国に散らばる108人のフルリモート組織で5,000万人超に使われるまでになった。前回からの差分だけを受け渡すsync_tokenとtemp_idの同期プロトコル、gunicornが応答するAPIとAmazon AuroraのMySQL、iOSでRealmからGRDBへ移したローカルDB、GPT-4で書く検索式とGemini 2.5 Flash Liveで話し言葉をタスクに変えるRamble、そして最大25%のアフィリエイトまでを、公式のエンジニアリングブログ・APIドキュメント・料金ページ・プレスリリースから解剖する。"
lead: "Todoistの入力欄に、タスク名と一緒に「every other Tuesday」「#仕事」「p1」と打つと、繰り返しの予定・プロジェクト・優先度が付いたタスクが1行でできあがる。2025年からは、それを声で話すだけでもよくなった。ToDoリストという、誰でも作れて誰でも乗り換えられる道具で、Todoistは20年近くかけて5,000万人超の利用者を集め、ベンチャー資本に頼らずに経営を続けてきた。その作りと稼ぎ方を解剖する。"
category: productivity
tags: [task-management, productivity, sync-engine, python, voice-ai]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.todoist.com/"
# Affiliate link placeholder: the owner must join the Todoist affiliate program
# (https://www.todoist.com/channelpartners, run on PartnerStack) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<todoist-partnerstack-affiliate-link>"
#   program: "Todoist Affiliate Program (PartnerStack)"
vendor: "Doist Inc."
origin: "GLOBAL"
heroTheme: "todoist"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "同期プロトコル"
    name: "Todoist API v1 Sync (sync_token / commands / temp_id)"
    confidence: confirmed
    evidence: "公式のAPIドキュメントに、初回は sync_token=* で全データを取り、以降は返ってきたトークンを渡して更新分だけを受け取る増分同期、1リクエストに最大100件までまとめられるコマンド、作成前のリソースを仮のIDで参照し temp_id_mapping で本当のIDに対応づける仕組みを明記。API v1 は Sync API v9 と REST API v2 を統合したものと説明している"
    evidenceUrl: "https://developer.todoist.com/api/v1/"
  - layer: "データベース"
    name: "MySQL 8.0 (Amazon Aurora)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ「When IN(…) is Not Enough」（2025-06-19）が、MySQL 8.0.40（AWS Aurora）を前提に、IN(…) の代わりに JSON_TABLE を使ってプリペアドステートメントを再利用する手法を解説している"
    evidenceUrl: "https://www.doist.dev/in-mysql"
  - layer: "APIサーバー"
    name: "Python (gunicorn)"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー観測（2026-09-28）で、api.todoist.com/api/v1/sync が server: gunicorn（PythonのWSGIサーバー）を返した。公式ブログ「AWS ECS-based Ephemeral consoles」（2023-12-20）も、開発者が本番の調査にSSHでつないでPython/iPythonのコンソールを使ってきたと書いている。サーバーの言語を明言した公式ページは、現在は公開の求人が無いため確認できていない"
    evidenceUrl: "https://www.doist.dev/ephemeral-consoles"
  - layer: "運用・デバッグ基盤"
    name: "AWS ECS on Fargate + Tailscale (ephemeral consoles)"
    confidence: confirmed
    evidence: "同じ公式ブログに、本番のコードをAWS Fargateで動かしていること、本番の不具合を調べるための一時的なコンソールを、ECS上のFargateタスクとして利用時間を決めて立ち上げ、Tailscale経由のSSHで接続させ、セッションを必ず記録すると明記。起動を担うブートストラップはGoで書かれている"
    evidenceUrl: "https://www.doist.dev/ephemeral-consoles"
  - layer: "Webクライアント"
    name: "TypeScript / React / Redux"
    confidence: confirmed
    evidence: "公式ブログ「Kotlin Multiplatform on the Web」（2022-01-20）が、WebアプリはTypeScriptとReduxで書かれ、状態をイミュータブルなプレーンオブジェクトで表すと説明。「Building Ramble #1」（2025-12-19）はマイク権限を扱うReactのカスタムフック useMicrophone を紹介している"
    evidenceUrl: "https://www.doist.dev/filterist-kotlin-multiplatform-javascript-exploration"
  - layer: "リッチテキストエディタ"
    name: "Typist (Tiptap / ProseMirror)"
    confidence: confirmed
    evidence: "公式のGitHubリポジトリ Doist/typist（MITライセンス）が、Doistの製品を動かすTiptapベースのReact製リッチテキストエディタで、HTMLとMarkdownのシリアライザを持つと説明している"
    evidenceUrl: "https://github.com/Doist/typist"
  - layer: "iOSのローカルDB"
    name: "GRDB (SQLite) — migrated from Realm in 2025"
    confidence: confirmed
    evidence: "公式ブログ「Optimizing GRDB in Todoist for iOS」（2026-01-27）が、2025年夏にRealmからGRDBへ移行したこと、集計にLEFT JOINを使うと中間行が膨らむ問題をサブクエリに置き換えて解いたことを説明している"
    evidenceUrl: "https://www.doist.dev/optimizing-grdb-in-todoist-for-ios"
  - layer: "音声入力（Ramble）"
    name: "Gemini 2.5 Flash Live via Google Vertex AI"
    confidence: confirmed
    evidence: "公式プレスリリース（2026-01-21）に、RambleがGoogleのGemini 2.5 Flash LiveモデルをVertex AI経由で使い、音声をDoistのバックエンドへストリーミングし、モデルが文字起こしをして、システムがプロジェクトや日付などの意図を解釈し、モデルがタスクの作成・更新・削除を構造化されたツール呼び出しとして出すと明記。音声は保存せず、学習にも使わないとしている"
    evidenceUrl: "https://www.prnewswire.com/news-releases/introducing-todoist-ramble-ai-that-turns-natural-speech-into-structured-tasks-302666143.html"
  - layer: "AIフィルター生成"
    name: "FastAPI + OpenAI GPT-4 (Filter Assist)"
    confidence: confirmed
    evidence: "公式ブログ「Filter Assist」（2024-03-14）が、自然文をFastAPIのバックエンドからGPT-4に送ってフィルターの検索式を作らせ、社内のパーサー（Filterist）で検証してから返す仕組みと、27件のテストでの正答率（GPT-3.5-turboが約70%、GPT-4が約96%）を公開している"
    evidenceUrl: "https://www.doist.dev/filter-assist"
  - layer: "プロダクト分析"
    name: "bitmapist + bitmapist-server (Redis bitmaps / Go)"
    confidence: confirmed
    evidence: "公式ブログ「Bitmapist」（2025-07-29・CEOのアミール・サリヘフェンディッチ執筆）が、Redisのビットマップで利用者の行動を記録する自社製のコホート分析ライブラリを説明し、Redisを使わない専用のbitmapist-serverに移して、同じデータのメモリを約130GBから300MB（443分の1）に減らしたと書いている。公式のGitHubリポジトリ Doist/bitmapist-server はGoで書かれている"
    evidenceUrl: "https://www.doist.dev/bitmapist"
  - layer: "AIエージェント連携"
    name: "Todoist MCP server (TypeScript, hosted at ai.todoist.net/mcp)"
    confidence: confirmed
    evidence: "公式のGitHubリポジトリ Doist/todoist-mcp（MITライセンス）が、AIエージェントに利用者の代わりにTodoistを操作させるツール群で、streamable HTTPのMCPサーバーとして https://ai.todoist.net/mcp で提供すると説明している"
    evidenceUrl: "https://github.com/Doist/todoist-mcp"
  - layer: "CI/CD"
    name: "GitHub Actions (Ubicloud runners) / Fastlane / Gradle plugins"
    confidence: confirmed
    evidence: "公式ブログ「Speeding up Todoist Web's CI」（2026-09-18）がGitHub ActionsとUbicloudのランナー、Jest・Playwright・Datadogを、「Continuous Deployment for iOS」（2022-02-15）がGitHub ActionsとFastlane、TestFlightでの毎日の社内配布を、「We release our Android apps every day」（2021-10-13）がmainへのマージごとの社内リリースと、Gradleプラグインにまとめた週1回の公開リリースを説明している"
    evidenceUrl: "https://www.doist.dev/taming-ci-times"
  - layer: "配信・マーケティングサイト"
    name: "Amazon CloudFront / Astro"
    confidence: likely
    evidence: "当サイトの観測（2026-09-28）で、www.todoist.com・app.todoist.com・api.todoist.com がいずれも via: CloudFront と x-amz-cf-pop を返した。料金ページのHTMLには Astro が付ける data-astro-cid 属性が多数含まれていた。doist.com は www.todoist.com/about-us へ301で転送される"
sources:
  - label: "Wikipedia: Todoist（2007年の誕生・機能の年表・利用者数の推移）"
    url: "https://en.wikipedia.org/wiki/Todoist"
    accessedAt: "2026-09-28"
  - label: "Todoist公式: About us（創業者・108人・38か国・2011年からのリモート）"
    url: "https://www.todoist.com/about-us"
    accessedAt: "2026-09-28"
  - label: "Todoist公式: Channel Partners（最大25%・PartnerStack・VC資金なしの成長）"
    url: "https://www.todoist.com/channelpartners"
    accessedAt: "2026-09-28"
  - label: "Todoist Help: Todoist Partner Programs（報酬の条件・90日のCookie）"
    url: "https://www.todoist.com/help/todoist/billing/todoist-partner-programs-t8t2hZ0Z"
    accessedAt: "2026-09-28"
  - label: "Todoist公式: 料金ページ"
    url: "https://www.todoist.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Todoist Help: Quick Addの使い方（#・%・p1〜p3・自然文の日付）"
    url: "https://www.todoist.com/help/articles/use-task-quick-add-in-todoist-va4Lhpzz"
    accessedAt: "2026-09-28"
  - label: "Todoist公式: Meet Ramble"
    url: "https://www.todoist.com/ramble"
    accessedAt: "2026-09-28"
  - label: "PR Newswire: Introducing Todoist Ramble（Doistのプレスリリース・2026-01-21）"
    url: "https://www.prnewswire.com/news-releases/introducing-todoist-ramble-ai-that-turns-natural-speech-into-structured-tasks-302666143.html"
    accessedAt: "2026-09-28"
  - label: "Todoist Developer: API v1（Sync・コマンド・temp_id・リクエスト制限）"
    url: "https://developer.todoist.com/api/v1/"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: When IN(…) is Not Enough（MySQL 8.0 / Aurora・2025-06-19）"
    url: "https://www.doist.dev/in-mysql"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: AWS ECS-based Ephemeral consoles（2023-12-20）"
    url: "https://www.doist.dev/ephemeral-consoles"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Choosing a Multiplatform Stack（2022-04-28）"
    url: "https://www.doist.dev/choosing-a-multiplatform-stack"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Kotlin Multiplatform on the Web（2022-01-20）"
    url: "https://www.doist.dev/filterist-kotlin-multiplatform-javascript-exploration"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Optimizing GRDB in Todoist for iOS（2026-01-27）"
    url: "https://www.doist.dev/optimizing-grdb-in-todoist-for-ios"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Filter Assist: AI-Generated Filters in Todoist（2024-03-14）"
    url: "https://www.doist.dev/filter-assist"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Bitmapist（2025-07-29）"
    url: "https://www.doist.dev/bitmapist"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Building Ramble #1: Taming the Microphone（2025-12-19）"
    url: "https://www.doist.dev/building-ramble-1-taming-the-microphone"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Speeding up Todoist Web's CI（2026-09-18）"
    url: "https://www.doist.dev/taming-ci-times"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: Continuous Deployment for iOS（2022-02-15）"
    url: "https://www.doist.dev/continuous-deployment-for-ios"
    accessedAt: "2026-09-28"
  - label: "Doist Engineering: We release our Android apps every day（2021-10-13）"
    url: "https://www.doist.dev/android-app-continuous-deployment"
    accessedAt: "2026-09-28"
  - label: "GitHub: Doist/typist（Tiptapベースのリッチテキストエディタ）"
    url: "https://github.com/Doist/typist"
    accessedAt: "2026-09-28"
  - label: "GitHub: Doist/bitmapist-server（Go製のbitmapistサーバー）"
    url: "https://github.com/Doist/bitmapist-server"
    accessedAt: "2026-09-28"
  - label: "GitHub: Doist/todoist-mcp（公式MCPサーバー）"
    url: "https://github.com/Doist/todoist-mcp"
    accessedAt: "2026-09-28"
  - label: "1Password公式: Affiliate program（比較用）"
    url: "https://1password.com/affiliate"
    accessedAt: "2026-09-28"
---

ToDoアプリは、ソフトウェアの中でいちばん作りやすく、いちばん乗り換えやすい道具のひとつだ。紙のメモでも、スマートフォンに最初から入っているリマインダーでも代わりがきく。Todoistはその市場で、入力の速さと、どの端末でも同じリストが即座にそろう同期を磨き続け、外部の資本に頼らずに5,000万人超の利用者を集めた。

## サービス解説

Todoistは、タスクをプロジェクト・セクション・ラベル・優先度で整理し、期日やリマインダー、繰り返しを付けて管理するタスク管理アプリだ。個人向けの無料プランと有料のPro、チーム向けのBusinessがあり、Web・Windows・macOS・Linux・iOS・Android・Apple Watch・Wear OSで同じデータを扱える。開発元のDoistは、チャットツールのTwistも手がけている。

:::fact
Wikipediaによれば、Todoistは2007年、アミール・サリヘフェンディッチが特別な資金もなく趣味のプロジェクトとして作った。公式のAbout usページは、忙しい学業と生活を管理するためにコンピューターサイエンスの学生が作った道具として始まったと説明し、サリヘフェンディッチは現在もCEOを務めている。同ページによれば、チームは38か国・94都市に散らばる43の国籍の108人で、「パンデミックでリモートが当たり前になる前の2011年から」リモートかつ非同期で働いている。公式のChannel Partnersページは、創業以来ベンチャー資本も投資家も入れずに自力で成長してきたと掲げ、Pro利用者100万人超、アプリのダウンロード3,000万回超、完了したタスク20億件超という数字を並べる。
:::

:::fact
Wikipediaによれば、登録利用者は2012年に35万人、2015年に500万人、2024年には3,000万人を超えた。2026年1月21日のDoistのプレスリリースは、Todoistを「世界で5,000万人超に使われている」と紹介している。機能の歩みでは、2012年にHTML5のWeb版とネイティブのモバイルアプリを出し、2015年には繰り返しの予定を自然な文章で解釈できるようにし、2020年にチームで使うワークスペースとかんばん形式のボードを加えた。
:::

:::pull
「every other Tuesday」と書けば繰り返しになり、「p1」と書けば最優先になる。Todoistの強さは、ボタンを押させずに、打った文字と話した言葉を構造に変えるところにある。
:::

::scorecard

## UX分析

TodoistのUXは、「入力の手間を限りなくゼロに近づけ、整理はあとから機械に手伝わせる」方向で設計されている。

- **1行で全部決める**。タスクを追加する入力欄（Quick Add）は、「tomorrow at 4 PM」「every other Tuesday starting March 3」のような日付と繰り返し、プロジェクト（#）、ラベル（%。従来の@は2026年末で廃止予定）、優先度（p1〜p3）を文章の中から読み取る。フォームの項目を1つずつ埋める必要がなく、思いついた順に打てばよい。「Create monthly report」の「monthly」のように意図せず日付と解釈された語は、クリックすれば普通の文字に戻せる。
- **話せばタスクになる**。2025年11月にベータ公開、2026年1月に正式公開された音声入力「Ramble」は、思いつくままに話した内容を、プロジェクト・日付・期限・優先度・所要時間付きの複数のタスクに分ける。話している途中で「やっぱり木曜にして」と言い直すと、その場でタスクが書き換わる。正式公開時のプレスリリースでは38言語、現在の公式ページでは40言語に対応し、無料プランでは月の回数に上限があり、ProとBusinessでは無制限だ。
- **検索式を書かせない**。Todoistのフィルターは `(today | tomorrow) & @work` のような独自の検索式で、使いこなせる人は限られていた。2024年の「Filter Assist」は、自然文で頼むとAIが検索式と名前を作る。
- **無料のまま長く使える**。無料のBeginnerプランでも、個人のプロジェクト5つ、Smart Quick Add、リマインダー、リストとボードの表示、フィルター3つが使える。カレンダー表示、タスクの所要時間、フィルター150個、活動履歴の全期間といった「管理する側」の機能がProに回されている。

:::fact
Doistのプレスリリース（2026年1月21日）によれば、2025年11月19日のベータ公開から3週間で、7万6,000人がRambleを約29万回使った。話した内容から最後までタスクを作れた割合は、2025年10月の約40%から12月には約62%に上がった。無料のBeginnerプランの新規利用者のうち、最初の1週間にRambleを使った人は、有料プランへの切り替え率が基準の約5倍だったという。公式エンジニアリングブログ「Filter Assist」（2024年3月14日）は、それまでフィルターを追加していた利用者が一部にとどまっていたことを、この機能を作った理由に挙げている。
:::

## 技術構成

::techstack

:::fact
公式のAPIドキュメントによれば、Todoistのクライアントとサーバーは「sync_token」でデータをやりとりする。初回は `sync_token=*` で全データを受け取り、以降は前回のトークンを渡して、それ以降に変わったデータだけを受け取る。書き込みは「コマンド」として1リクエストに最大100件までまとめて送れ、コマンドごとのUUIDで結果を照合する。まだサーバーに存在しないプロジェクトを作り、その中にタスクを入れる、という操作も、クライアントが決めた仮のID（temp_id）で参照し合えば1回で送れ、サーバーは本当のIDとの対応表（temp_id_mapping）を返す。利用者1人あたりの上限は、差分の同期が15分に1,000回、全データの同期が15分に100回。2つあったSync API v9とREST API v2は、現在のAPI v1に統合された。
:::

:::fact
公式エンジニアリングブログによれば、サーバー側のデータベースはAmazon AuroraのMySQL 8.0で（「When IN(…) is Not Enough」2025年6月）、本番のコードはAWS Fargateで動き、本番の調査用コンソールも利用時間を決めたFargateタスクとして立ち上げ、Tailscale経由でつなぐ（2023年12月）。WebアプリはTypeScriptとReduxで書かれ（2022年1月）、リッチテキストの編集には、Tiptapを土台に自社で作ったTypistを使う。iOSアプリは2025年夏に、手元のデータベースをRealmからSQLiteベースのGRDBに移した（2026年1月）。2022年4月の「Choosing a Multiplatform Stack」では、AndroidとAppleのプラットフォーム、Web、Windowsでロジックを共有する手段として、JavaScript・Go・Rust・Kotlin Multiplatformを比べ、Appleのプラットフォームで性能（一部のテストではSwiftのネイティブ実装より速い）と相互運用性を試した結果、Kotlin Multiplatformを「唯一検討に値する」と結論づけた。一方で同年1月の記事は、検索式のパーサーFilteristをKotlinからJavaScriptに書き出す実験について、「本番投入にはまだ早い」とまとめている。
:::

:::guess
当サイトの観測（2026-09-28）では、api.todoist.com の同期エンドポイントが `server: gunicorn` を返した。gunicornはPythonのWebアプリを動かすサーバーなので、APIの本体はPythonで書かれているとみられる。AI機能のバックエンドを「Pythonのバックエンドで要件を満たせる」としてFastAPIで作ったこと、調査用コンソールでPythonを使うことからも、サーバーの中心はPythonと推測される。同期の設計が「差分だけを送る」「書き込みをまとめて1回で送る」「仮のIDで先に作ってしまう」の3つでできているのは、地下鉄や機内のように電波が途切れがちな場所でも、手元で先にタスクを作り、つながった瞬間にまとめて送るためとみられる。この方式なら、サーバーを重い言語で作り込まなくても、端末側の体感速度を保ちやすい。
:::

:::guess
Rambleの音声を端末から直接Googleに送らず、いったんDoistのバックエンドを通してGemini 2.5 Flash Liveにつないでいるのは、利用者のプロジェクト名やラベルを文脈として渡し、モデルが出すツール呼び出しを既存のタスク操作に流し込むためとみられる。プレスリリースは音声を保存しないと明言し、公式のRambleページも、保存しうるのはデバッグと改善のための利用データを自社のサーバーに一時的に置く場合に限ると説明している。録音を貯めずに性能を上げ続けるには、「タスクを最後まで作れたか」という結果の指標で改善を回す必要があり、プレスリリースが成功率の推移を公開しているのもその表れと推測される。
:::

## ビジネスモデル

Todoistの収益は、個人向けのProと、チーム向けのBusinessのサブスクリプションでできている。無料のBeginnerで使い始めてもらい、使い込んだ人を有料に移す、典型的なフリーミアムだ。

:::fact
公式の料金ページ（2026年9月28日に日本から閲覧）によれば、Proは年払いで1人あたり月672円（年8,064円）、月払いで月894円。Businessは年払いで1人あたり月960円（年11,520円）に税、月払いで月1,280円。米ドル表示では、Proが年払いで月5ドル（年60ドル）・月払いで月7ドル、Businessが年払いで月8ドル（年96ドル）・月払いで月10ドル。Proはプロジェクト300個とカレンダー表示・所要時間・フィルター150個・活動履歴の全期間・AIの「Task Assist」・Rambleの無制限利用を含む。Businessはチームの共有ワークスペース、最大500のチームプロジェクト、最大1,000人のメンバーとゲスト、役割と権限、請求の一元化を加え、SOC 2 Type IIに準拠している。
:::

:::fact
公式のChannel Partnersページとヘルプページによれば、TodoistのアフィリエイトプログラムはPartnerStack上で運営され、報酬はパートナーの段階に応じて最大25%。年払いのプランは初回の支払いに1度だけ、月払いのプランは最大12回の支払いに対して支払われる。リンクを踏んでから90日以内に有料プランにした場合が対象で、追跡するのはtodoist.comでの購入だけのため、App StoreやGoogle Playでの購入は含まれない。報酬は30日の返金期間を過ぎてから受け取れ、支払いは米ドル。応募には「ある程度の規模の読者」を持っていることが求められる。
:::

:::guess
アフィリエイトの条件は、1Passwordの「初回の支払いの25%+サインアップ1件2ドル」と比べると、月払いの顧客を紹介した場合でも最大12か月分を払う点で、紹介した側に報酬が残りやすい。一方で、モバイルのアプリストア経由の課金は対象外になる。公式の説明は「todoist.comでの購入しか追跡していない」というものだが、アプリストアの手数料がかかる経路では紹介料まで払う余地が小さいこともあり、Webでの課金に利用者を寄せる効果もあるとみられる。Rambleを試した無料利用者の切り替え率が約5倍だったというプレスリリースの数字は、AI機能が「無料で試せて、使い込むと有料になる」導線として働いていることを示しており、今後もAI機能を無料プランの入口と有料プランの差別化の両方に使っていくと推測される。
:::

:::guess
ベンチャー資本を入れていないことは、事業の設計にも表れているとみられる。108人のチームで5,000万人超の利用者を支えるには、少ない人数で回る仕組みが欠かせない。AndroidとiOSの開発版を毎日社内に配り、WebのCIの時間を40%、デプロイの時間を50%、「やらなくていい処理をやめる」ことで縮め、分析基盤のメモリを443分の1にする——エンジニアリングブログに並ぶ話題の多くが、速さと同時にコストと人手の節約に向いているのは、外部の資金で赤字を埋められない経営と表裏一体と推測される。
:::

Todoistが売っているのは、タスクを並べる画面ではない。思いついたことを、打つか話すかした瞬間に、どの端末でも同じ構造で取り出せる状態だ。差分だけを受け渡す同期、仮のIDで先に作る書き込み、文章と音声を構造に変える入力。その積み重ねが、誰でも作れて誰でも乗り換えられるはずのToDoアプリを、20年近く続く自立した事業にしている。AIエージェントがMCP経由でタスクを書き込む時代になっても、「入口を速く、中身をどこでも同じに」という設計の価値は変わらない。
