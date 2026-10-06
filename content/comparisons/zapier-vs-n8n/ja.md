---
title: "Zapier vs n8n — アクションを「タスク」で数える閉じたクラウドと、実行を「1回」で数える配られるソース"
description: "ワークフロー自動化のZapierとn8nを、2026年10月6日時点の公式ページ・ヘルプ・ドキュメント・リポジトリだけで比較する。Zapierは成功したアプリのアクションを1タスクと数え、組み込みツールは無料、AIステップはモデルの階層で1・3・5タスク、MCPの呼び出しは2タスク。月100タスクの無料枠から、Professionalは月19.99ドル（年払い）で750タスクから。n8nはワークフローの実行1回を1と数え、ステップ数は問わず、月20ユーロで2,500回から。Zapierは米国のAWS上でしか動かず、ソースは非公開で、公開アフィリエイトもない。n8nはソースをGitHubで配り、自分のサーバーで無料で動かせ、クラウドの紹介に30%を払う。数え方、無料の形、AIの課金、置き場所、資金、紹介報酬を同じ項目で並べる。"
lead: "どちらもアプリをつないで業務を自動化し、どちらも2025年からAIエージェントとMCPを看板に掲げる。違うのは、何を数えて請求するかと、ソースコードがどこにあるかだ。Zapierは14年前から「タスク」を通貨にし、AIも外部からの呼び出しも同じ通貨に換算してきた。n8nは「実行1回」を単位にし、ステップがいくつあっても1と数え、そのうえでソースをGitHubで配っている。両社の公式ページを同じ日に読み、数え方と置き場所の違いが料金と事業にどう現れるかを解剖する。"
slugA: "zapier"
slugB: "n8n"
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
sources:
  - label: "Zapier公式: Pricing"
    url: "https://zapier.com/pricing"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Task usage rates"
    url: "https://zapier.com/pricing/rates"
    accessedAt: "2026-10-06"
  - label: "Zapierヘルプセンター: How pay-per-task billing works in Zapier"
    url: "https://help.zapier.com/hc/en-us/articles/15279018245901-How-pay-per-task-billing-works-in-Zapier"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Press"
    url: "https://zapier.com/press"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Zapier MCP"
    url: "https://zapier.com/mcp"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Security & Compliance"
    url: "https://zapier.com/security-compliance"
    accessedAt: "2026-10-06"
  - label: "Zapier公式: Ambassador & Affiliate Program Terms（2025-01-17）"
    url: "https://zapier.com/legal/ambassador-affiliate-terms"
    accessedAt: "2026-10-06"
  - label: "Zapierコミュニティ: Does Zapier have an affiliate program?（スタッフ回答 2025-01-08）"
    url: "https://community.zapier.com/show-tell-5/does-zapier-have-an-affiliate-program-13950"
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

[Zapier](/ja/articles/zapier)と[n8n](/ja/articles/n8n)は、同じ仕事をする。アプリとアプリをつなぎ、条件で分岐し、AIを呼び、人の手を減らす。Zapierは2012年に米国で公開され、n8nは2019年にベルリンでリポジトリが作られた。2本の解剖記事を重ねると、違いは機能の一覧ではなく、数え方と置き場所に出ている。

この記事は、両社の公式ページ・ヘルプ・ドキュメント・リポジトリを2026年10月6日に読み直してまとめた。当サイトはどちらのツールでも同じワークフローを実際に動かして比べてはおらず、使いやすさや速さの優劣は扱わない。

## 何を数えて請求するか

数える単位が違う。Zapierは「成功したアクション」、n8nは「実行」だ。

:::fact
Zapierの料金ページ（2026年10月6日確認・米ドル・年払い表示）によれば、Freeは月100タスクで2ステップのZap、Professionalは月19.99ドルから（750タスクの帯）、Teamは月69ドルから、Enterpriseは個別見積もり。有料の帯は750から200万タスクまで17段階で、年払いは「33%お得」。同ページのFAQは、トリガー・ポーリング・失敗したアクションはタスクに数えず、Tables、Forms、Filter、Formatter、Paths、Delay、Looping、Sub-Zapなどの組み込みツールは0タスクと説明する。「Task usage rates」ページによれば、アプリのアクションは1ステップ1タスク、AI by Zapierは標準モデル1・高度3・最上位5タスク（ツール呼び出しも同じ数）、MCPのツール呼び出しは2タスク、Code by Zapierは1実行1タスク。ヘルプセンターによれば、上限を超えると従量課金に切り替わり、プランの上限の3倍で止まる。
:::

:::fact
n8nの料金ページ（2026年10月6日確認・ユーロ・年払い表示）によれば、クラウド版のStarterは月20ユーロで月2,500回の実行、Proは月50ユーロで月10,000回、Businessは月667ユーロでセルフホスト専用の月40,000回、Enterpriseは個別見積もり。年払いは17%引き。見出しには「実行回数に応じた課金で、複雑さは問わない」「ステップ数は無制限」とあり、本文は「ステップ単位やユーザー単位で課金する他のツールと違い、n8nはワークフローが最初から最後まで動いたときだけ課金する」と書く。一方で、1回の実行の最長時間はStarterが5分、Proが40分、同時実行はStarterが5、Proが20または50という上限が別にある。
:::

| 項目 | Zapier | n8n（クラウド版） |
| --- | --- | --- |
| 数える単位 | 成功したアプリのアクション＝1タスク（組み込みツールは0） | ワークフローの実行1回＝1（ステップ数は数えない） |
| 最も安い有料プラン | Professional 月19.99ドル・750タスク（年払い） | Starter 月20ユーロ・2,500回（年払い） |
| 1単位の定価（当サイトの計算） | 0.027ドル/タスク（19.99÷750） | 0.008ユーロ/回（20÷2,500） |
| 上限を超えたとき | 従量課金へ自動切替（上限の3倍で停止） | 料金ページに超過の仕組みの記載なし |
| 実行の長さ・頻度の制約 | ポーリング Free 15分・Pro 2分・Team 1分 | 1実行 Starter 5分・Pro 40分、同時実行 5〜50 |
| ユーザー数 | Free・Pro 1、Team 25、Enterprise 無制限 | 全プラン無制限 |

ここから先は当サイトの計算で、両社の料金ページにこの比較が載っているわけではない。1アクションのZapierと1実行のn8nは単位が違うので、同じワークフローを置いて初めて比べられる。たとえばアプリのアクションが5つ（FilterやFormatterを除く）のワークフローを月500回動かす場合、Zapierでは2,500タスクで750の帯を超え、2,000タスク以上の帯か従量課金が要る。n8nでは500回でStarterの枠の2割（20ユーロの定額）だ。逆にアクションが1つのワークフローを月3,000回動かすなら、Zapierは3,000タスク、n8nは3,000回でProの帯（50ユーロ）になる。アクションが多く回数が少ない使い方はn8nの数え方が、アクションが少なく回数が多い使い方はZapierの数え方が、同じ月額で遠くまで届く。

:::pull
Zapierは「アプリに何をしたか」を数え、n8nは「何回動いたか」を数える。同じワークフローでも、アプリのアクションが増えるほど前者は高くなり、後者は変わらない。
:::

:::guess
Zapierが組み込みツールを0タスクにし、n8nが「ステップ数は無制限」を見出しに置いたのは、どちらも「ステップを足す摩擦」を料金から外す方向だが、外し方が違うとみられる。Zapierは「アプリに触れないステップ」を無料にし、アプリに触れるステップとAIと外部呼び出しに重みをつける。n8nは実行の中身をまったく見ない。AIエージェントのように1回の実行の中で多くのツール呼び出しが起きる使い方では、Zapierの1タスクが3や5に膨らむのに対し、n8nは1回のままで、差は料金表の見た目より大きくなると推測される。
:::

## 無料の形

無料の入口は、どちらにもある。形が違う。

:::fact
ZapierのFreeプランは、料金ページによれば月100タスク、2ステップのZap、15分間隔のポーリング、Zap・Tables・Formsは無制限で、期限はなく、従量課金はない。新規登録でProfessionalの14日間トライアルがクレジットカードなしで始まる。n8nの公式ドキュメント「Try free then choose a plan」によれば、クラウドの無料トライアルは14日間で、Proの機能を1,000回の実行まで使え、期限が来るとワークスペースは削除される（ワークフローは90日間ダウンロードできる）。n8nにはもうひとつ、GitHubで配られるCommunity Editionがあり、「Choose how to use n8n」は「無料で動かしたい」人にセルフホストのCommunity Editionを勧め、「ほぼ完全な機能セットを無料で」と説明する。
:::

| 項目 | Zapier | n8n |
| --- | --- | --- |
| 無料のクラウド | Free（月100タスク・2ステップ・期限なし） | 14日間のトライアル（Pro相当・1,000回まで・期限後に削除） |
| 有料の試用 | Professionalの14日間（カード不要） | 同上 |
| 無料のセルフホスト | なし | Community Edition（Sustainable Use License） |
| 無料で動かし続ける条件 | 月100タスク以内、2ステップ | 自分のサーバーと、更新と隔離の運用 |

:::guess
Zapierの無料は「小さく使い続ける」ための枠で、n8nの無料は「自分で動かす」ための配布とみられる。前者は月100タスクと2ステップに収まる限り費用がかからず、後者はサーバー代と運用の手間が利用者側に移る。どちらが安いかは、使う量よりも、サーバーを自分で持てるかどうかで決まると考えられる。
:::

## AIとMCPは、どちらも看板

:::fact
Zapierの公式MCPページ（2026年10月6日確認）によれば、Zapier MCPは「すべてのZapierプランに含まれ、ツール呼び出し1回でZapと同じ枠から2タスクを使う」、AIクライアントは9,000以上のアプリと66,000以上のトリガーとアクションから選ぶ。「Task usage rates」ページによれば、AI by Zapierのステップはモデルの階層で1・3・5タスクで、自分のモデル提供者の口座をつなげば1タスク。ヘルプセンターによれば、新しいAIステップの既定は高度なモデル（3倍）だ。n8nの料金ページ（同日確認）は、AI Agentノード、MCP Server Trigger、MCPクライアント、ツール呼び出しへの人間の承認、ホスト型チャット、APIキーなしで使えるAIモデル（Gatewayクレジット）、ワークフローを作るAssistant（Starterで月1,600クレジット、Proで最大9,600）を機能表に並べる。
:::

| 項目 | Zapier | n8n |
| --- | --- | --- |
| AIステップの課金 | モデルの階層で1・3・5タスク（自分のキーなら1） | 実行は1回のまま、モデルの代金はGatewayクレジットか自分のキー |
| 外のAIから操作する | Zapier MCP（全プラン・1呼び出し2タスク） | MCP Server Trigger、インスタンス単位のMCP |
| AIにワークフローを作らせる | Copilot（Freeは日次の上限、有料は無制限） | Assistant（Starter 1,600クレジット/月、Pro 最大9,600） |
| エージェント製品 | Zapier Agents（別枠の「アクティビティ」で課金、Freeは月400） | AI Agentノード、Agents（preview） |

:::guess
どちらも「AIの利用を自社の単位に換算する」方向に揃っているが、Zapierはその単位がZapの課金と同じタスクで、n8nは実行とは別のクレジットだ。Zapierではエージェントが長く考えるほど同じ帯のタスクが減り、n8nでは実行1回は1回のままで、モデルの代金だけが別に伸びる。外部からのMCP呼び出しを「2タスク」と明記して全プランに含めたZapierの設計は、AIクライアントを新しい販売経路として既存の料金表に組み込む判断と読める。
:::

## どこで動き、誰のソースか

:::fact
Zapierの公式Security & Complianceページ（2026年10月6日確認）によれば、ホスティングは「米国のAWS」で、SOC 2 Type IIとSOC 3の年次監査、TLS 1.2以上とAES-256、SAML SSO、2要素認証、SCIMが挙げられる。公式ブログ（2025-10-09）は「ZapierはHIPAAに準拠していない」と明記する。Zapierのワークフローエンジンのソースコードは公開されておらず、GitHubのzapier組織にあるのは連携を作るためのzapier-platform（JavaScript）やMCP・SDKの周辺ツールだ。n8nのリポジトリのLICENSE.md（同日確認）によれば、ファイル名に.ee.を含むか、ディレクトリ名が.eeのソースはSustainable Use Licenseの対象外でn8n Enterprise Licenseが要り、それ以外はSustainable Use License 1.0で、自社の内部業務・非商用・個人利用に限って使用・改変でき、他者への提供は非商用かつ無償の場合だけ許される。公式ドキュメント「Choose n8n's database」によれば、セルフホストの既定はSQLiteでPostgreSQLにも対応し、n8n CloudはStarter・ProがSQLite、Enterprise ScalingのみPostgreSQLを使う。GitHubのSecurity Advisoriesには、2026年10月6日時点で210件の勧告が公開され、2025年が14件、2026年が196件（9月30日まで）で、critical 22件を含む。
:::

| 項目 | Zapier | n8n |
| --- | --- | --- |
| 動く場所 | Zapierのクラウドのみ（米国のAWS） | n8n Cloud、または自分のサーバー（Docker、npm） |
| ソースコード | 非公開（連携キットとMCP・SDKのみ公開） | 公開（Sustainable Use License＋.eeはEnterprise License） |
| 自分のインフラで動かす選択肢 | なし | あり（Community・Business・Enterprise） |
| 脆弱性情報の公開 | Security & Complianceページに監査と認証の記載 | GitHub Security Advisoriesで個別に公開（2026年に196件） |
| HIPAA | 非対応と明記 | 料金ページに記載なし |
| 更新の責任 | Zapier | クラウドはn8n、セルフホストは利用者 |

:::guess
置き場所を選べることは、n8nが大企業に売る理由であり、同時にn8nが脆弱性を公開し続ける理由でもあるとみられる。自分のサーバーで動かす利用者には、修正版が出ても更新しなければ届かない。Zapierは置き場所を選ばせない代わりに、更新と監査をまとめて引き受け、その保証をSecurity & Complianceページで示している。勧告の件数の差は、脆弱性の多さの差ではなく、公開するかどうかの差として読むのが妥当と考えられる。
:::

## 資金と規模

:::fact
Zapierの公式プレスページ（2026年10月6日確認）によれば、同社は「2012年に130万ドルを調達し、それ以上の資金調達なしに、2021年に50億ドルの評価額がついた」。9,000以上のアプリ、340万社以上の顧客、2,500万以上のZap、800人以上の従業員が40カ国にまたがる。n8nは、2025年10月9日の公式ブログによれば、Accel主導で1億8,000万ドルのシリーズCを調達して評価額25億ドル、累計調達額2億4,000万ドルになり、2026年5月12日の公式ブログによれば、SAPの戦略的出資で評価額は52億ドルになった。同記事は月間アクティブビルダー170万人、1,400社以上のエンタープライズ顧客、SAPのJoule Studioへの組み込みを挙げている。
:::

| 項目 | Zapier | n8n |
| --- | --- | --- |
| 運営 | Zapier, Inc.（デラウェア州・独立） | n8n GmbH（ベルリン・独立） |
| 公表されている規模 | 340万社以上、9,000以上のアプリ、800人以上（2026-10） | 月間アクティブビルダー170万人、1,400社以上のエンタープライズ顧客（2026-05） |
| 調達額 | 2012年の130万ドルのみ | 累計2億4,000万ドル（2025-10時点）＋SAPの出資（2026-05） |
| 評価額 | 50億ドル（2021年） | 52億ドル（2026年5月） |

:::guess
評価額はほぼ同じだが、辿った道が逆だ。Zapierは130万ドルで14年かけて50億ドルに達し、n8nは2億4,000万ドルと戦略的出資で7年で52億ドルに達した。Zapierの数字は「顧客の社数」と「アプリの数」で、n8nの数字は「ビルダー」と「エンタープライズ顧客」と「投資家」で語られている。前者は自前の売上で育った会社が誇る数字で、後者は投資家に成長を示す会社が出す数字だと考えられる。
:::

## アフィリエイトの条件

:::fact
Zapierには2026年10月6日時点で一般に申し込める公開アフィリエイトプログラムがない。公式コミュニティでスタッフは2025年1月8日に「Zapierには現在アフィリエイトプログラムはない」と回答し、紹介報酬はコンサルタント向けのSolution Partner Programと、2025年1月17日付の規約による招待制のAmbassador & Affiliate Program（PartnerStack経由、料率と期間はポータル内にのみ記載、月次集計で月末から30日以内に支払い）に限られる。n8nの公式アフィリエイトページ（同日確認）によれば、n8n Cloudの紹介に対して12カ月間、純収入の30%で、対象はStarterとPro。支払いはPayPalで月1回、残高100ユーロ以上のとき。有料広告キャンペーンは一切禁止で、違反すればプログラムから外される。
:::

| 項目 | Zapier | n8n |
| --- | --- | --- |
| 公開プログラム | なし（招待制とパートナー向けのみ） | あり |
| 料率・期間 | 非公開（ポータル内） | 30%・12カ月 |
| 対象 | サブスクリプション（アドオン・税は除く） | n8n Cloud（StarterとPro） |
| 支払い | 月次集計・月末から30日以内 | PayPal・月1回・最低100ユーロ |

## 技術構成の重なりは、PostgreSQLとSQLiteの2件

このページの下に出る技術構成の比較は、2本の記事のtechStackを機械的に突き合わせたものだ。共通と判定されたのは、PostgreSQLとSQLiteの2件である。ただし使い方は違う。ZapierのPostgreSQLはDjangoのアプリの裏のデータベースで、SQLiteはKafkaが止まっても受け付けを続けるためのローカルのアウトボックスだ。n8nのSQLiteはセルフホストとクラウドのStarter・Proの既定のデータベースで、PostgreSQLはEnterpriseと大規模なセルフホストの選択肢だ。違うのは、Zapier側にPython、Django、Celery、RabbitMQ、Kafka、Go、Next.js、Vercel、Contentfulといった「公式ブログと観測から見える部品」が並ぶのに対し、n8n側にTypeScript、Express、TypeORM、Redis、Bull、タスクランナー、LangChain.js、Vue.js、Sustainable Use Licenseといった「リポジトリで読める中身」が並ぶことだ。片方はソースが非公開なので、会社が書いた記事と外から観測できる境界までが見え、もう片方は公開されているので依存関係まで見える。この差分の表は、技術の違いであると同時に、何が公開されているかの違いでもある。

数え方の違いは、使い方で決まる。アプリのアクションが多く回数が少ないならn8nの単位が、アクションが少なく回数が多いならZapierの単位が遠くまで届く。AIを重く使うほど、Zapierの1タスクは3や5に膨らみ、n8nの1回は1回のままだ。置き場所の違いは、組織で決まる。自分のサーバーを持ち、更新を自分で引き受けられるならn8nの配布が選択肢になり、そうでなければどちらもクラウドで、Zapierは置き場所を選ばせない代わりに、9,000のアプリと14年分の監査をまとめて出す。料金表の最初の行を比べる前に、自分のワークフローのアクション数と、AIのステップがいくつあるかと、自分の組織がサーバーを持てるかを数えるほうが先だ。
