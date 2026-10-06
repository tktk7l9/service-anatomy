---
title: "Make vs n8n — 1アクションずつ数える課金と、1回の実行で数える課金。閉じたクラウドと、配るソース"
description: "ワークフロー自動化のMakeとn8nを、2026年10月6日時点の公式ページ・ヘルプ・ドキュメント・リポジトリだけで比較する。Makeはシナリオの各アクションを1クレジットと数え、月9ドルで1万クレジットから。n8nはワークフローの実行1回を1と数え、月20ユーロで2,500回から。Makeは自社のAWS上でしか動かず、n8nはソースを配って自分のサーバーでも動く。無料の形、AIの課金、データを置く場所、親会社と投資家、アフィリエイトの条件を同じ項目で並べ、どちらの数え方が自分の使い方に合うかを決める材料を解剖する。"
lead: "どちらもノードをつないで業務を自動化するツールで、どちらもAIエージェントを売り物にし、どちらもアフィリエイトで12カ月の報酬を払う。違うのは、何を数えて請求するかと、ソースコードをどこに置いているかだ。Makeは1アクションを1クレジットと数え、Celonis傘下のクラウドで動かす。n8nは1回の実行を1と数え、GitHubで配ったソースを自分のサーバーでも動かせる。両社の公式ページを同じ日に読み、数え方と置き場所の違いが料金と事業にどう現れるかを解剖する。"
slugA: "make"
slugB: "n8n"
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
sources:
  - label: "Make公式: Pricing"
    url: "https://www.make.com/en/pricing"
    accessedAt: "2026-10-06"
  - label: "Makeヘルプセンター: Extra credits"
    url: "https://help.make.com/extra-credits"
    accessedAt: "2026-10-06"
  - label: "Make公式: Affiliate program"
    url: "https://www.make.com/en/affiliate"
    accessedAt: "2026-10-06"
  - label: "Make公式: Security"
    url: "https://www.make.com/en/security"
    accessedAt: "2026-10-06"
  - label: "Make公式: Make launches AI Agents（2025-04-14）"
    url: "https://www.make.com/en/make-ai-agents-press-release"
    accessedAt: "2026-10-06"
  - label: "Make公式: Make Grid announcement（2025-06-24）"
    url: "https://www.make.com/en/make-grid-announcement"
    accessedAt: "2026-10-06"
  - label: "n8n公式: Plans and Pricing"
    url: "https://n8n.io/pricing/"
    accessedAt: "2026-10-06"
  - label: "n8n公式: Affiliate program"
    url: "https://n8n.io/affiliates/"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Choose how to use n8n"
    url: "https://docs.n8n.io/choose-how-to-use-n8n"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Try free then choose a plan"
    url: "https://docs.n8n.io/deploy/use-n8n-cloud/start-your-free-trial"
    accessedAt: "2026-10-06"
  - label: "n8n公式ドキュメント: Choose n8n's database"
    url: "https://docs.n8n.io/deploy/host-n8n/configure-n8n/choose-n8ns-database"
    accessedAt: "2026-10-06"
  - label: "n8n公式ブログ: n8n raises $180M Series C（2025-10-09）"
    url: "https://blog.n8n.io/series-c/"
    accessedAt: "2026-10-06"
  - label: "n8n公式ブログ: Announcing SAP's strategic investment in n8n（2026-05-12）"
    url: "https://blog.n8n.io/n8n-sap/"
    accessedAt: "2026-10-06"
  - label: "GitHub: n8n-io/n8n（LICENSE.md）"
    url: "https://github.com/n8n-io/n8n/blob/master/LICENSE.md"
    accessedAt: "2026-10-06"
  - label: "GitHub: n8n-io/n8n Security Advisories"
    url: "https://github.com/n8n-io/n8n/security/advisories"
    accessedAt: "2026-10-06"
---

[Make](/ja/articles/make)と[n8n](/ja/articles/n8n)は、同じ仕事をする。アプリとアプリをつなぎ、条件で分岐し、AIを呼び、人の手を減らす。どちらも欧州の会社で（Makeはプラハ、n8nはベルリン）、どちらも2025年にAIエージェントを看板に掲げた。2本の解剖記事を重ねると、違いは機能の一覧ではなく、数え方と置き場所に出ている。

この記事は、両社の公式ページ・ヘルプ・ドキュメント・リポジトリを2026年10月6日に読み直してまとめた。当サイトはどちらのツールでも同じワークフローを実際に動かして比べてはおらず、使いやすさや速さの優劣は扱わない。

## 何を数えて請求するか

料金表の見出しからして、数える単位が違う。

:::fact
Makeの料金ページ（2026年10月6日確認・米ドル・月払い表示）によれば、Freeは月1,000クレジットで有効なシナリオ2本、実行間隔は最短15分、実行時間5分まで。Coreは1万クレジットで月9ドル、Proは同じ1万クレジットで月16ドル、Teamsは月29ドルで、いずれも有効なシナリオは無制限、間隔は1分まで、実行時間40分まで。Enterpriseは個別見積もり。年払いは「15%以上お得」と表示される。同じページは、シナリオの各モジュールのアクション（Google Sheetに行を足す、Gmailのデータを取るなど）が1クレジットと数えられ、エラーハンドラーとルーターは消費しないと説明する。ヘルプセンターのExtra creditsページは、月9ドルで1万クレジットのプランでは1クレジット0.0009ドル、買い足しは25%増しで1,000クレジットが1.125ドルだと例示している。
:::

:::fact
n8nの料金ページ（2026年10月6日確認・ユーロ・年払い表示）によれば、クラウド版のStarterは月20ユーロで月2,500回の実行、Proは月50ユーロで月10,000回、Businessは月667ユーロでセルフホスト専用の月40,000回、Enterpriseは個別見積もり。年払いは17%引き。見出しには「実行回数に応じた課金で、複雑さは問わない」「ステップ数は無制限」とあり、本文は「ステップ単位やユーザー単位で課金する他のツールと違い、n8nはワークフローが最初から最後まで動いたときだけ課金する」と書く。一方で、1回の実行の最長時間はStarterが5分、Proが40分、同時実行はStarterが5、Proが20または50という上限が別にある。
:::

| 項目 | Make | n8n（クラウド版） |
| --- | --- | --- |
| 数える単位 | シナリオの各アクション＝1クレジット | ワークフローの実行1回＝1（ステップ数は数えない） |
| 最も安い有料プラン | Core 月9ドル・1万クレジット | Starter 月20ユーロ・2,500回（年払い） |
| 1単位の定価（当サイトの計算） | 0.0009ドル/クレジット（ヘルプの例示） | 0.008ユーロ/回（20÷2,500） |
| 1回の実行の最長時間 | Free 5分、Core以上40分 | Starter 5分、Pro以上40分 |
| 実行間隔・同時実行の上限 | Free 15分、Core以上1分 | 同時実行 Starter 5、Pro 20〜50、Enterprise 200以上 |
| ユーザー数 | 料金ページにユーザー数の上限の表示はない | 全プラン無制限 |

ここから先は当サイトの計算で、両社の料金ページにこの比較が載っているわけではない。1アクションのMakeと1実行のn8nは単位が違うので、同じワークフローを置いて初めて比べられる。たとえば10ステップ（ルーターを除く）のワークフローを月1,000回動かす場合、Makeでは1万クレジット＝Coreの月枠ちょうど（9ドル）、n8nでは1,000回＝Starterの枠の4割（20ユーロの定額）になる。同じワークフローが50ステップなら、Makeは5万クレジットで買い足しか上位プランが要り、n8nは変わらず1,000回だ。逆に2ステップのワークフローを月1万回動かすなら、Makeは2万クレジット、n8nは1万回でPro（50ユーロ）になる。ステップが多く回数が少ない使い方はn8nの数え方が、ステップが少なく回数が多い使い方はMakeの数え方が、同じ月額で遠くまで届く。

:::pull
Makeは「何をしたか」を数え、n8nは「何回動いたか」を数える。同じワークフローでも、ステップが増えるほど前者は高くなり、後者は変わらない。
:::

:::guess
n8nが「ステップ数は無制限」を見出しに置いたのは、AIエージェントのように1回の実行の中で多くのツール呼び出しが起きる使い方を、料金の面で引き受けるためとみられる。Makeがアクション単位を保っているのは、[Make](/ja/articles/make)の記事で見たとおり、AI Providerのトークン消費もクレジットに換算して同じ単位で請求できる設計と一体で、単位を変えると課金の全体が組み替えになるからだと推測される。
:::

## 無料の形

無料の入口は、どちらにもある。形が違う。

:::fact
MakeのFreeプランは、料金ページによれば月1,000クレジット、有効なシナリオ2本、15分間隔、データ転送512MB、実行時間5分で、期限はない。n8nの公式ドキュメント「Try free then choose a plan」によれば、クラウドの無料トライアルは14日間で、Proの機能を1,000回の実行まで、計算資源はStarter相当で使え、期限が来るとワークスペースは削除される（ワークフローは90日間ダウンロードできる）。n8nにはもうひとつ、GitHubで配られるCommunity Editionがあり、「Choose how to use n8n」は「無料で動かしたい」人にセルフホストのCommunity Editionを勧め、「ほぼ完全な機能セットを無料で」と説明する。
:::

| 項目 | Make | n8n |
| --- | --- | --- |
| 無料のクラウド | Free（月1,000クレジット・シナリオ2本・期限なし） | 14日間のトライアル（Pro相当・1,000回まで・期限後に削除） |
| 無料のセルフホスト | なし | Community Edition（Sustainable Use License） |
| 無料で動かし続ける条件 | 月1,000クレジット以内 | 自分のサーバーと、更新と隔離の運用 |

:::guess
Makeの無料は「小さく使い続ける」ための枠で、n8nの無料は「自分で動かす」ための配布とみられる。前者は月1,000クレジットの中に収まる限り費用がかからず、後者はサーバー代と運用の手間が利用者側に移る。どちらが安いかは、使う量よりも、サーバーを自分で持てるかどうかで決まると考えられる。
:::

## AIの課金は、どちらもクレジット

:::fact
Makeは2025年4月14日のプレスリリースでMake AI Agentsを発表し、20万以上の企業、2,000以上のアプリ、3万以上のアクションを挙げた。[Make](/ja/articles/make)の記事で確認したとおり、ヘルプセンターはMake's AI Providerを全プランで使えるとし、OpenAIやAnthropicのアカウントなしでトークン数と操作数に応じたクレジットをMakeに払う仕組みで、有料プランでは自分のプロバイダー接続を使って操作数分だけMakeに払うこともできる。n8nの料金ページ（2026年10月6日確認）は、AI Agentノード、MCP Server Trigger、MCPクライアント、ツール呼び出しへの人間の承認、ホスト型チャット、「APIキーなしで使えるAIモデル」（Gatewayクレジット）、ワークフローを作るAssistant（Starterで月1,600クレジット、Proで最大9,600）を機能表に並べる。
:::

| 項目 | Make | n8n |
| --- | --- | --- |
| AIエージェント | Make AI Agents（2025-04発表） | AI Agentノード、Agents（preview） |
| 自社経由のモデル利用 | Make's AI Provider（トークンをクレジット換算、全プラン） | Gatewayクレジット（APIキーなしのAIモデル） |
| 自分のAPIキー | 有料プランで可（操作数分のクレジットのみMakeへ） | 可（LLMの資格情報として登録） |
| AIにワークフローを作らせる | — | Assistant（Starter 1,600クレジット/月、Pro 最大9,600） |
| 外のAIから操作する | Make MCPサーバー（mcp.make.com） | MCP Server Trigger、インスタンス単位のMCP |

:::guess
どちらも「モデルの代金を自社のクレジットに換算して請求する」方向に揃っており、違いはその単位が実行の課金と同じ（Make）か、別のクレジット（n8n）かにある。Makeではエージェントの1ステップも1クレジット＋トークン分なので、エージェントが長く考えるほど請求が伸びる。n8nでは実行1回は1回のままで、モデルの代金だけが別に伸びる。エージェントの使い方が重いほど、この差は料金表の見た目より大きくなると推測される。
:::

## どこで動き、誰のソースか

:::fact
Makeの公式Securityページ（2026年10月6日確認）によれば、MakeのインフラはAmazon AWS EC2のプライベートインスタンス（Amazon VPC）に置かれ、2つのゾーンに展開し、保存データはAES-256とAWS KMS、通信はTLS 1.2と1.3、SOC 2 Type IIとSOC 3の監査、ISO 27001認証の情報セキュリティプログラム、ログ保持は既定30日、Enterpriseは99.5%の稼働率が付く。[Make](/ja/articles/make)の記事で見たとおり、APIは組織のゾーン（例: eu1.make.com）ごとに分かれる。Makeのソースコードは公開されておらず、GitHubのintegromat組織にあるのは旧版のmake-mcp-server（TypeScript・MIT）などの周辺ツールだ。
:::

:::fact
n8nのリポジトリのLICENSE.md（2026年10月6日確認）によれば、ファイル名に.ee.を含むか、ディレクトリ名が.eeのソースはSustainable Use Licenseの対象外でn8n Enterprise Licenseが要り、それ以外はSustainable Use License 1.0で、自社の内部業務・非商用・個人利用に限って使用・改変でき、他者への提供は非商用かつ無償の場合だけ許される。公式ドキュメント「Choose n8n's database」によれば、セルフホストの既定はSQLiteでPostgreSQLにも対応し、n8n CloudはStarter・ProがSQLite、Enterprise ScalingのみPostgreSQLを使う。GitHubのSecurity Advisoriesには、2026年10月6日時点で210件の勧告が公開され、2025年が14件、2026年が196件（9月30日まで）で、critical 22件を含む。
:::

| 項目 | Make | n8n |
| --- | --- | --- |
| 動く場所 | Makeのクラウドのみ（AWS EC2、EU/USのゾーン） | n8n Cloud、または自分のサーバー（Docker、npm） |
| ソースコード | 非公開 | 公開（Sustainable Use License＋.eeはEnterprise License） |
| 自分のインフラで動かす選択肢 | なし | あり（Community・Business・Enterprise） |
| 脆弱性情報の公開 | Securityページに監査と認証の記載 | GitHub Security Advisoriesで個別に公開（2026年に196件） |
| 更新の責任 | Make | クラウドはn8n、セルフホストは利用者 |

:::guess
置き場所を選べることは、n8nが大企業に売る理由であり、同時にn8nが脆弱性を公開し続ける理由でもあるとみられる。自分のサーバーで動かす利用者には、修正版が出ても更新しなければ届かない。Makeは置き場所を選ばせない代わりに、更新と監査をまとめて引き受け、その保証をSecurityページとEnterpriseの稼働率で示している。勧告の件数の差は、脆弱性の多さの差ではなく、公開するかどうかの差として読むのが妥当と考えられる。
:::

## 親会社と投資家

:::fact
Makeは、[Make](/ja/articles/make)の記事で確認したとおり、2020年10月にCelonisが買収したIntegromatが2022年2月に改名したもので、公式サイトのフッターは「© 2026 Celonis, Inc.」だ。2025年6月24日のMake Gridのプレスリリースは「25万以上の組織」が使うと書き、共同創業者でCTOのPatrik Simek氏の談話を載せている。n8nは、2025年10月9日の公式ブログによれば、Accel主導で1億8,000万ドルのシリーズCを調達して評価額25億ドル、累計調達額2億4,000万ドルになり、2026年5月12日の公式ブログによれば、SAPの戦略的出資で評価額は52億ドルになった。同記事は月間アクティブビルダー170万人、1,400社以上のエンタープライズ顧客、SAPのJoule Studioへの組み込みを挙げている。
:::

| 項目 | Make | n8n |
| --- | --- | --- |
| 運営 | Celonis, Inc.（2020年にIntegromatを買収） | n8n GmbH（ベルリン・独立） |
| 公表されている規模 | 25万以上の組織（2025-06） | 月間アクティブビルダー170万人、1,400社以上のエンタープライズ顧客（2026-05） |
| 直近の資金 | 親会社の一部（単体の調達発表はない） | シリーズC 1億8,000万ドル（2025-10）、SAPの戦略的出資（2026-05・評価額52億ドル） |

:::guess
Makeの数字は「組織」で、n8nの数字は「ビルダー」と「エンタープライズ顧客」で数えられており、同じ物差しではない。Makeは親会社のプロセスマイニング事業と並ぶ製品として位置づけられ、n8nは投資家に成長を示す独立したスタートアップとして数字を出している。公表の仕方の違いは、誰に向けて数字を出しているかの違いだと考えられる。
:::

## アフィリエイトの条件

:::fact
Makeの公式アフィリエイトページ（2026年10月6日確認）によれば、報酬は紹介したすべてのユーザーに対して12カ月間35%で、対象はサブスクリプションの支払い、買い足した操作（クレジット）は対象外。クリックから登録までの猶予は30日、支払いはWise経由で、最低100ドルかつ3人の有料ユーザーの紹介が必要。有料広告は可能だが、Celonisの書面同意なしに商標「Make」を広告のタイトルにも本文にも使ってはならない。n8nの公式アフィリエイトページ（同日確認）によれば、n8n Cloudの紹介に対して12カ月間、純収入の30%で、対象はStarterとPro。支払いはPayPalで月1回、残高100ユーロ以上のとき。有料広告キャンペーンは一切禁止で、違反すればプログラムから外される。
:::

| 項目 | Make | n8n |
| --- | --- | --- |
| 料率・期間 | 35%・12カ月 | 30%・12カ月 |
| 対象 | サブスクリプション（買い足しクレジットは除く） | n8n Cloud（StarterとPro） |
| 支払い | Wise・最低100ドル・有料ユーザー3人 | PayPal・月1回・最低100ユーロ |
| 有料広告 | 可（商標「Make」の使用は不可） | 不可 |

## 技術構成の重なりは、Cloudflare・GitBook・Node.js・TypeScriptの4件

このページの下に出る技術構成の比較は、2本の記事のtechStackを機械的に突き合わせたものだ。共通と判定されたのは、Cloudflare、GitBook、Node.js、TypeScriptの4件である。どちらもNode.jsとTypeScriptで書かれ、開発者向けドキュメントをGitBookに置き、公開サイトをCloudflareの後ろに置いている。違うのは、n8n側にExpress、TypeORM、SQLite、PostgreSQL、Redis、Bull、タスクランナー、LangChain.js、Vue.js、Sustainable Use Licenseといった「中身」が並ぶのに対し、Make側にはAmazon EC2、Make Gateway、REST API v2、Make MCPサーバー、OpenAIのGPT-5系モデル、RudderStackやVWOといった「外から観測できる境界」が並ぶことだ。片方はソースが公開されているので中身が見え、もう片方は非公開なので境界までしか見えない。この差分の表は、技術の違いであると同時に、何が公開されているかの違いでもある。

数え方の違いは、使い方で決まる。ステップが多く回数が少ないならn8nの単位が、ステップが少なく回数が多いならMakeの単位が遠くまで届く。置き場所の違いは、組織で決まる。自分のサーバーを持ち、更新を自分で引き受けられるならn8nの配布が選択肢になり、そうでなければどちらもクラウドで、Makeは置き場所を選ばせない代わりに保証をまとめて出す。料金表の最初の行を比べる前に、自分のワークフローのステップ数と、自分の組織がサーバーを持てるかを数えるほうが先だ。
