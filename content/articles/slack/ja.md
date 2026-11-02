---
service: "Slack"
title: "見えるのは90日、残り275日は課金で戻り、1年で消える。ビジネスプラスのSlackbotは週15通、外部アプリは毎分1回15件 — 過去の会話を「読む権利」に線を引いて売るSlackを解剖する"
description: "Slackの日本向け料金は、プロが年払いで1ユーザー月925円、ビジネスプラスが月1,920円、Enterprise+が月5,760円（いずれも消費税別）。フリープランはメッセージとファイルの閲覧が直近90日までで、2024年8月26日からは1年を超えたデータが順次削除される。2025年6月にはAIをプランに組み込んでビジネスプラスを1,600円から1,920円へ改定し、2026年1月に一般提供したSlackbotは、ビジネスプランでも1人週15通が上限で、超過分はSalesforceのFlex Creditsで買う形になった。同じ時期にAPIも、Marketplace外で商業配布するアプリの履歴取得を毎分1回・1回15件に絞り、規約で大規模言語モデルの学習と一括エクスポートを禁じた。公式の料金ページ、ヘルプセンター、開発者向けの変更履歴と規約、Salesforceの決算資料、Engineering at Slackの記事群から、履歴・AI・APIに同じ線が引かれている構造と、それを支えるHack・Java・Vitess・セルラー構成、Anthropicのモデルから始まったAI基盤までを解剖する。"
lead: "Slackのフリープランで見えなくなった過去の会話は、すぐには消えない。90日を過ぎると隠れ、1年を超えると削除され、その間の275日分は有料プランにすれば戻ってくる。この設計は料金表だけの話ではない。AIが読める範囲も、Slackbotに話しかけられる回数も、外部アプリが履歴を取り出せる速度も、同じように線が引かれている。Slackが売っているのはチャットそのものというより、組織に溜まった会話を誰がどこまで読めるかだ。その線の引き方を、公開情報だけで解剖する。"
category: saas
tags: [business-chat, collaboration, b2b, salesforce, ai-agent, api-platform, hack, vitess]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "料金ページの新規チーム向け「3か月間50%オフ」（期間限定と書かれ、終了日の記載はない）"
  - date: "2026-11-30"
    claim: "料金ページFAQの「まもなく全プランでSlackbotを試せるようになる」と、Slackbotの制限ページの内容（週15通など）"
  - date: "2026-11-30"
    claim: "Salesforceの2027年度第2四半期を最新とする記述（第3四半期の決算日は2026-11-02時点で確認できなかった）"
serviceUrl: "https://slack.com/intl/ja-jp/"
# Affiliate link placeholder: the official pages read on 2026-11-02 show a partner program in the
# site navigation but no consumer affiliate program. If the owner joins one, copy the ad code as
# provided and keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://example.com/<slack-material>"
#   program: "Slack"
vendor: "Salesforce, Inc.（Slack）"
origin: "US"
heroTheme: "slack"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Webアプリケーション（API）"
    name: "Hack on HHVM (webapp monolith)"
    confidence: confirmed
    evidence: "Engineering at Slackの「Hacklang at Slack」（2020-04-14、2023-11-21更新）が、PHP 5のバックエンドから2016年にHHVMへ移り、Hackへ移行した経緯を説明。2023-04-11の「Real-time Messaging」は、クライアントが呼ぶAPIをすべて持つWebappをHacklangのコードベースと説明"
    evidenceUrl: "https://slack.engineering/hacklang-at-slack-a-better-php/"
  - layer: "リアルタイム配信"
    name: "Channel / Gateway / Admin / Presence Servers (Java) + WebSocket + Consul"
    confidence: confirmed
    evidence: "2023-04-11の「Real-time Messaging」に、中核サービスはJavaで書かれ、Channel Serverがコンシステントハッシュでチャンネルを担当し、Gateway Serverが複数の地域に置かれ、サービス発見にConsulを使うと明記"
    evidenceUrl: "https://slack.engineering/real-time-messaging/"
  - layer: "データストア"
    name: "MySQL + Vitess"
    confidence: confirmed
    evidence: "2020-12-01の「Scaling Datastores at Slack with Vitess」に、2017年に移行を始め、当時で全クエリ負荷の99%をVitessが処理し、ピーク時230万QPSと明記"
    evidenceUrl: "https://slack.engineering/scaling-datastores-at-slack-with-vitess/"
  - layer: "実行基盤と障害の封じ込め"
    name: "AWS us-east-1 (multi-AZ cells, AZ drain) + Envoy + Rotor (in-house xDS control plane)"
    confidence: confirmed
    evidence: "2023-08-22の「Slack's Migration to a Cellular Architecture」に、中核の計算基盤はus-east-1の複数AZにあり、AZをセルとして扱い、エッジのEnvoyと内製のRotorで5分以内にトラフィックを抜く設計と明記"
    evidenceUrl: "https://slack.engineering/slacks-migration-to-a-cellular-architecture/"
  - layer: "EC2の運用"
    name: "Chef (multi-stack) → Shipyard (immutable EC2 platform)"
    confidence: confirmed
    evidence: "2026-07-14の「Shipyard」に、数万台のEC2をChefで運用してきた経緯と、インスタンスを配備物として扱う次世代基盤Shipyardを明記"
    evidenceUrl: "https://slack.engineering/shipyard-how-we-built-slacks-next-generation-ec2-platform/"
  - layer: "AIのモデル基盤"
    name: "Amazon SageMaker → Amazon Bedrock + Google Cloud Vertex AI (intelligent routing layer)"
    confidence: confirmed
    evidence: "2026-05-28の「Slack AI: The Path to Multi-Cloud」に、SageMakerのエスクローVPCでAnthropicのモデルを動かす段階から、2024年半ばのBedrock移行、オンデマンドとの併用、2026年初めのVertex AI追加までの4段階を明記"
    evidenceUrl: "https://slack.engineering/slack-ai-the-path-to-multi-cloud/"
  - layer: "AIクライアント向けの入口"
    name: "Slack MCP Server (mcp.slack.com, JSON-RPC 2.0 over Streamable HTTP)"
    confidence: confirmed
    evidence: "Slack Developer Docsに、接続先、対応ツール、Marketplace公開アプリと社内アプリだけが使えることを明記"
    evidenceUrl: "https://docs.slack.dev/ai/slack-mcp-server/"
  - layer: "静的配信"
    name: "Amazon CloudFront + Amazon S3 (a.slack-edge.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、a.slack-edge.com は server: AmazonS3、via: CloudFront、x-amz-cf-pop: NRT12-P8 を返した。slack.com は server: Apache のほか、via に ingress-edge-nrt、x-edge-backend: envoy-www、x-envoy-upstream-service-time を返した"
sources:
  - label: "Slack公式: 料金プラン（日本）"
    url: "https://slack.com/intl/ja-jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: Slack の料金プラン & 機能"
    url: "https://slack.com/intl/ja-jp/help/articles/115003205446"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: Slack のフリープランの機能制限"
    url: "https://slack.com/intl/ja-jp/help/articles/27204752526611"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: 無料ワークスペースにおける使用制限"
    url: "https://slack.com/intl/ja-jp/help/articles/115002422943"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: 無料ワークスペースのメッセージとファイル履歴の最新情報"
    url: "https://slack.com/intl/ja-jp/help/articles/29414264463635"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: Slack でのデータ保存をカスタマイズする"
    url: "https://slack.com/intl/ja-jp/help/articles/203457187"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: Slack プランごとの利用できる機能と料金に関する最新情報"
    url: "https://slack.com/intl/ja-jp/help/articles/39264531104275"
    accessedAt: "2026-11-02"
  - label: "Slack公式ブログ: Salesforce が Slack の料金プランを更新（2025-06-17）"
    url: "https://slack.com/intl/ja-jp/blog/news/june-2025-pricing-and-packaging-announcement"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: Slack のフェアビリングポリシー"
    url: "https://slack.com/intl/ja-jp/help/articles/218915077"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: 米国売上税と付加価値税（VAT）"
    url: "https://slack.com/intl/ja-jp/help/articles/226166647"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: Slackbot の制限とクレジットの使用"
    url: "https://slack.com/intl/ja-jp/help/articles/53579676130195"
    accessedAt: "2026-11-02"
  - label: "Salesforce: Slackbotの一般提供の発表（2026-01-13）"
    url: "https://www.salesforce.com/news/press-releases/2026/01/13/slackbot-announcement/"
    accessedAt: "2026-11-02"
  - label: "Salesforce: Flex Credits Rate Card（2026-08-31）"
    url: "https://www.salesforce.com/en-us/wp-content/uploads/sites/4/assets/pdf/agentforce/Flex-Credits-Rate-Card-08.31.2026.pdf"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Rate limit changes for non-Marketplace apps（2025-05-29）"
    url: "https://docs.slack.dev/changelog/2025/05/29/rate-limit-changes-for-non-marketplace-apps"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Rate limits"
    url: "https://docs.slack.dev/apis/web-api/rate-limits/"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: conversations.history"
    url: "https://docs.slack.dev/reference/methods/conversations.history/"
    accessedAt: "2026-11-02"
  - label: "Slack: API利用規約"
    url: "https://slack.com/intl/ja-jp/terms-of-service/api"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Using the Real-time Search API"
    url: "https://docs.slack.dev/apis/web-api/real-time-search-api/"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Slack MCP server overview"
    url: "https://docs.slack.dev/ai/slack-mcp-server/"
    accessedAt: "2026-11-02"
  - label: "Slack Developer Docs: Slack developer changelog"
    url: "https://docs.slack.dev/changelog/"
    accessedAt: "2026-11-02"
  - label: "Salesforce: 2027年度第2四半期 決算プレスリリース（2026-08-26）"
    url: "https://s205.q4cdn.com/626266368/files/doc_financials/2027/q2/CRM-Q2-FY27-Earnings-Press-Release.pdf"
    accessedAt: "2026-11-02"
  - label: "Salesforce: Slack買収の最終合意（2020-12-01）"
    url: "https://www.salesforce.com/news/press-releases/2020/12/01/salesforce-definitive-agreement-update/"
    accessedAt: "2026-11-02"
  - label: "Salesforce: Slack買収の完了（2021-07-21）"
    url: "https://www.salesforce.com/news/press-releases/2021/07/21/salesforce-slack-deal-close/"
    accessedAt: "2026-11-02"
  - label: "Slack公式: 会社概要"
    url: "https://slack.com/intl/ja-jp/about"
    accessedAt: "2026-11-02"
  - label: "Slack公式ブログ: アジアパシフィック地域での成長の振り返り（2019年）"
    url: "https://slack.com/intl/ja-jp/blog/news/intl-ja-jp-slacks-growth-in-asia"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: Slack のデータレジデンシー機能"
    url: "https://slack.com/intl/ja-jp/help/articles/360035633934"
    accessedAt: "2026-11-02"
  - label: "Slackヘルプセンター: Slack の AI 機能のセキュリティ"
    url: "https://slack.com/intl/ja-jp/help/articles/28310650165907"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Real-time Messaging（2023-04-11）"
    url: "https://slack.engineering/real-time-messaging/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Hacklang at Slack: A Better PHP（2020-04-14）"
    url: "https://slack.engineering/hacklang-at-slack-a-better-php/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Scaling Datastores at Slack with Vitess（2020-12-01）"
    url: "https://slack.engineering/scaling-datastores-at-slack-with-vitess/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Unified Grid（2024-07-31）"
    url: "https://slack.engineering/unified-grid-how-we-re-architected-slack-for-our-largest-customers/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Slack's Migration to a Cellular Architecture（2023-08-22）"
    url: "https://slack.engineering/slacks-migration-to-a-cellular-architecture/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: How We Built Slack AI To Be Secure and Private"
    url: "https://slack.engineering/how-we-built-slack-ai-to-be-secure-and-private/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Slack AI: The Path to Multi-Cloud（2026-05-28）"
    url: "https://slack.engineering/slack-ai-the-path-to-multi-cloud/"
    accessedAt: "2026-11-02"
  - label: "Engineering at Slack: Shipyard（2026-07-14）"
    url: "https://slack.engineering/shipyard-how-we-built-slacks-next-generation-ec2-platform/"
    accessedAt: "2026-11-02"
---

Slackは、チャンネルを単位に仕事の会話を集めるビジネスチャットだ。[Chatwork](/ja/articles/chatwork)が社外の人とすぐ話せることを入口にしたのに対し、Slackは会話を公開のチャンネルに置いて後から検索できることを価値にしてきた。その「後から読める」という性質は今、そのまま商品の境界線になっている。無料で見える過去は90日まで。AIが読める幅はプランごとに違う。外部アプリが取り出せる量は、Marketplaceを通るかどうかで桁が変わる。

## サービス解説

Slackは2013年に始まり、2017年11月17日に日本語版の提供を始めた。2021年にSalesforceの傘下に入り、今はSalesforceのAIエージェントの入口という役割も担っている。

:::fact
Engineering at Slackの記事（2024-07-31）によれば、Slackは2013年に、ユーザーが1つのワークスペースに属してチャンネルで話す単純な構造で始まり、2017年に大企業向けのEnterprise Gridを出した。Salesforceは2020年12月1日にSlackの買収で最終合意し、Slack株1株につき現金26.79ドルとSalesforce株0.0776株を支払う条件を、2020年11月30日の終値に基づく企業価値で約277億ドルと説明した。買収は2021年7月21日に完了した。
:::

:::fact
Slackの会社概要（2026-11-02閲覧・時点の記載なし）は、有料プランの利用企業数を「20万+」、有料プランを利用するフォーチュン100企業を77社、日間アクティブユーザーの居住国を「150か国以上」と示す。Slackの公式ブログ（2019年）は、2019年9月に日間アクティブユーザーが1,200万人を超え、そのうち128万人が日本・オーストラリア・ニュージーランドのユーザーだと書いていた。これより新しい利用者数や、日本単独の数字は、当サイトが読んだ公式ページでは確認できなかった。
:::

料金は4段階で、日本では円で示される。

:::fact
公式の料金ページ（2026-11-02閲覧）の価格は次のとおりだ。ヘルプセンターによれば、Slackのウェブサイトに表示された料金に税は含まれず、請求先住所が日本国内にある場合は消費税が課税される。

| プラン | 月払い（1ユーザー月額） | 年払い（1ユーザー月額） | 履歴 | AIの区分 |
| --- | --- | --- | --- | --- |
| フリー | ￥0 | — | 90日 | なし |
| プロ | ￥1,050 | ￥925 | 無制限 | 基本的なAI機能 |
| ビジネスプラス | ￥2,160 | ￥1,920 | 無制限 | 高度なAI機能 |
| Enterprise+ | 表示なし | ￥5,760 | 無制限 | エンタープライズグレードのAI機能 |

プロとビジネスプラスの月払いには、チーム作成から7日以内にオンラインで購入すると3か月間50%オフになる期間限定オファーが表示されている（年払いとEnterprise+は対象外）。Enterprise+は営業担当者への問い合わせで購入する。
:::

:::pull
無料で見える過去は90日。その先の275日は隠れたまま残り、有料プランにすると戻ってくる。
:::

::scorecard

## UX分析

Slackの体験の芯は、会話がチャンネルに残り、後から検索できることにある。料金とAIは、その「残る」と「読める」を切り分ける形で組まれている。

- **過去は3段階で遠ざかる**。ヘルプセンターによれば、フリープランでは90日を過ぎたメッセージとファイルが非表示になり、1年を超えると完全に削除される。削除は2024年8月26日に始まり、以後は作成から1年が過ぎたデータが継続的に消える。いったん消えると復元できない。一方で90日を超えて1年以内の275日分は、アップグレードすると読めるようになる。有料プランでは、データはデフォルトでワークスペースが存在する限り保存される。
- **ダウングレードできるぶん、失うものが具体的に書かれている**。「フリープランの機能制限」のページは、切り替えると何が止まるかを1つずつ挙げる。Slackコネクトのチャンネルは切断されて1対1のDMに限られ、ゲストアカウントは無効になり、canvasとリストは読み取り専用になり、ワークフローは動かなくなり、アプリは10個までになる。ダウングレードする前に、ワークスペースのアナリティクスで非表示になる量を確かめるよう案内している。
- **課金は使った人の分だけ**。公式のフェアビリングポリシーによれば、ウェブサイト経由のプランでは、アクティブなメンバーだけが請求の対象で、支払い済みのメンバーが非アクティブになると、未使用分が日割りのクレジットとして次回に反映される。料金ページのFAQは、28日間のいずれかの時点でSlack上で行動したメンバーをアクティブと判定すると書く。シングルチャンネルゲストとボットは無料で、マルチチャンネルゲストは有料だ。
- **AIは段階ごとに読める幅が違う**。ヘルプセンターの表によれば、プロは会話とスレッドの要約、ハドルミーティング議事録の2つで、ビジネスプラス以上で検索、まとめ、翻訳、ファイルの要約、ワークフローの自動化が加わり、接続した外部のアプリまで横断するエンタープライズ検索はEnterprise+だけだ。
- **Slackbotは回数で区切る**。ヘルプセンターによれば、2026年1月に一般提供された新しいSlackbotに送れるメッセージは、ビジネスプラスで1人週15通（月曜0時にリセット）。フリーとプロはトライアルかプレビューの間だけで、含まれる回数を使い切るとリセットされない。Enterprise+には週や無期限の回数制限がない。タスクの自動実行は1日3回まで。ゲストとフロントラインメンバーは使えない。
- **弱点は、線の位置が分かりにくくなること**。同じAIでも、機能の有無、週の回数、Flex Creditsのアクション種別という3つの物差しが重なる。料金ページのFAQは「まもなく全プランでSlackbotを試せるようになる」と書き、制限のページはフリーとプロについて「トライアルまたはプレビュー期間中のみ」と書く。読む人によっては、自分のプランで何回使えるかがすぐには判断しにくい可能性がある。

## 技術構成

::techstack

:::fact
Engineering at Slackの記事によれば、Slackの出発点はLinux・Apache・MySQL・PHPのLAMP構成で、PHP 5のバックエンドを2016年にHHVMへ移し、静的型検査のあるHackへ移行した。クライアントが呼ぶAPIは、今もHacklangのコードベースであるWebappが担う。リアルタイム配信はJavaで書かれた別系統だ。2023年4月の記事によれば、Channel Serverはチャンネルをコンシステントハッシュで受け持ち、ピーク時に1台あたり約1,600万チャンネルを扱う。Gateway Serverは複数の地域に置かれ、クライアントは最寄りのエッジにWebSocketでつながる。Webappが受けたメッセージはAdmin Serverを経てChannel Serverに届き、購読している世界中のGateway Serverへ送られ、世界全体で500ミリ秒で届くと書かれている。入力中の表示のように保存されないイベントは、同じ経路をWebappを通らずに流れる。Channel Serverが壊れても、新しいサーバーは20秒未満で処理を始められるという。
:::

:::fact
2020年12月の記事によれば、Slackのデータは当初すべてMySQLで、ワークスペースIDごとにシャードを分け、1つのワークスペースのデータを1つのシャードに置いていた。この方式では1社が最大のシャードに収まらなくなる問題があり、2017年からVitessへ移行した。当時でVitessは全クエリ負荷の99%を処理し、ピーク時の230万QPS（読み取り200万、書き込み30万）を中央値2ミリ秒、p99で11ミリ秒でさばいていた。記事は、各メッセージがWebSocketで配られる前に保存されること、SlackコネクトとデータレジデンシーにVitessの柔軟性が効いたことも説明する。2024年7月の記事は、シャードの軸がワークスペースやオーガナイゼーションから離れたことが、複数のワークスペースを1つの画面で見せるUnified Gridの前提になったと書く。
:::

:::fact
2023年8月の記事によれば、Slackの中核の計算基盤は単一リージョンus-east-1の複数のアベイラビリティーゾーン（AZ）にある。2021年6月30日に1つのAZのネットワークリンクが断続的に故障した障害では、AZごとに見え方が異なる「グレー障害」で利用者に影響が出た。そこで約1年半をかけて重要なサービスをAZごとのセルに分け、各サービスが同じAZの中だけで通信する形（siloing）にして、エッジのEnvoyと内製のRotorの設定だけで、5分以内にAZからトラフィックを抜くことを目標にした。Hack、Go、Java、C++が混在していたため、各言語のクライアントに切り替えを実装するのではなく、入口の1か所で切り替える設計を選んだという。記事はその動機として、99.99%の可用性SLAでは年間の停止が1時間未満しか許されないことを挙げる（現行のSLAの数字は、当サイトの閲覧では確認できなかった）。2026年7月の記事は、数万台のEC2をChefで更新し続ける運用が限界に近づき、インスタンスを配備物として扱うShipyardを作ったと書く。
:::

:::fact
AI基盤の記事（2026-05-28）によれば、Slackは2023年初めにAWS SageMakerから始め、エスクローVPCの中でAnthropicのモデルを動かした。モデル提供元が顧客データに触れず、Slackもモデルの重みに触れない構成だ。しかしGPUの不足や遊休の負担が大きく、新しいモデルが先にBedrockへ来る差も広がったため、2024年半ばにAmazon Bedrockへ移り、夜間のまとめのような処理はオンデマンドに回した。2026年初めにはGoogle CloudのVertex AIを加え、機能ごとにモデルを選び、劣化を検知すると別のモデルや提供元へ自動で切り替える経路を作った。Slackは、複雑な推論の品質指標が約10%改善し、処理の軽い負荷の遅延が約67%減ったと書いている。ヘルプセンターは、データをLLMの学習に使わず、毎回の推論に必要な分だけ渡す検索拡張生成（RAG）を採用していると説明する。
:::

:::guess
ヘルプセンターと料金ページのFAQは、顧客データがSlackの管理するインフラの外に出ないこと、LLMがSlackのAWSのVPC内に直接ホストされていることを説明している。一方で2026年5月の技術記事は、マネージドのBedrockとVertex AIを使う構成を書いており、FAQの表現は初期のSageMaker時代のままの部分があるとみられる。もっとも、技術記事もデータの境界は保たれていると書いており、「管理するインフラ」が契約上の境界まで含む言い方である可能性もある。どちらの読み方が正しいかは公開情報だけでは判断できない。
:::

:::guess
技術の歴史を並べると、Slackは一度も全部を捨てていないように見える。PHPはHackになり、MySQLはVitessの下に残り、Chefの上にShipyardが重なる。セルの設計も、言語が混在する現実を前提に入口だけで切り替える形で、完全な分離を目指していない。単一リージョンに中核を置いたままAZで障害を区切る判断は、一からマルチリージョンに作り直すより、動いている基盤の上で可用性を積む選択と推測される。AI基盤だけが3年で提供元まで変わったのは、モデルの世代交代がこの積み上げの速さを上回っているためとみられる。
:::

## ビジネスモデル

収益の中心はユーザー数に応じた月額料金で、2025年からはそこにAIの段階と従量課金が重なった。

:::fact
公式ブログ（2025-06-17）によれば、Slackはこの日にプランと料金を更新し、プロの料金は据え置いて要約とハドルミーティング議事録を組み込み、ビジネスプラスを年払いの1人月1,600円から1,920円へ、月払いを1,800円から2,160円へ改定し、Enterprise+を新設した。ヘルプセンターによれば、それまで別売りだったSlack AIアドオンはウェブサイトでの新規購入ができなくなり、購入済みの顧客は2025年8月17日より後の最初の更新まで使える。新しいSlackbotは2026年1月13日にビジネスプラスとEnterprise+向けに一般提供された。超過分はSalesforceのFlex Creditsで買う形で、フリー、プロ、ビジネスプラスのワークスペースにSalesforce組織を連携していれば使える。2026年8月31日付の料金表では、Slackbotの標準アクションが40クレジット、高度なアクションが200クレジットだ。
:::

もう1つの線はAPIにある。

:::fact
Slackの開発者向け変更履歴（2025-05-29）によれば、Marketplaceの外で商業配布されるアプリについて、conversations.historyとconversations.repliesのレート制限をTier 3からTier 1へ下げた。上限は毎分1回、1回あたり15件で、対象はこの日以降に作られたアプリと、既存アプリの新規インストールだ。社内で作るカスタムアプリは毎分50回以上、1回1,000件のままで、Marketplaceのアプリも影響を受けない。現在の版は、既存のインストールには適用しないと書く。理由としてSlackは、審査を経ていないアプリによる大量のデータ持ち出しの防止を挙げる。API利用規約は、組織外に提供するアプリについて、APIデータを大規模言語モデルの学習に使うこと、メッセージやファイルを一括でエクスポートすること（別途許可された場合を除く）、ある組織のデータを別の組織のために使うことを禁じ、商業配布には原則としてMarketplaceへの参加かパートナー契約を求める。Real-time Search APIとSlack MCP Serverは、Marketplace公開アプリと社内アプリだけが使える。Real-time Search APIに関する規約は、他組織のデータの永続的なコピーやインデックスを作ることも禁じている。Marketplaceは審査に、稼働中のワークスペースで10件以上のインストールを求めている（2026年7月から）。
:::

:::fact
開発者向け変更履歴によれば、2026年に入ってからSlackは外のAIを中に招く部品を増やしている。6月18日にSlackbotから外部のMCPサーバーを呼ぶSlackbot MCP Client、7月31日にClaude CodeとCursor向けのSlack MCP and Skills Plugin、8月20日に人とエージェントが専用のチャンネルで作業するSlack Code、10月28日にSlackbotのスキルをAPIで管理するメソッド群を公開した。6月17日には、システム通知の送信者をSlackbotから「Slack」というシステムユーザーへ移し、Slackbotを「AIとの会話の場所」として切り分けた。
:::

:::fact
Salesforceの2027年度第2四半期（2026年5〜7月）の決算プレスリリースによれば、売上高は113億4,500万ドルで前年同期比11%増。Slackの売上は単独で開示されていない。2027年度第1四半期に開示区分が改められ、SlackはAgentforce Sales、Agentforce Serviceなどと同じ「Agentforce Apps」（第2四半期71億9,300万ドル、為替一定で8%増）に含まれる。同社はこの四半期について、Slackの正味新規年間受注額（NNAOV）の伸びが買収以来で最も速く、Slackbotの利用者が前四半期比で150%超増えたと説明した。Agentforceの年間経常収益（ARR）は15億ドル超で前年同期比240%超増だが、第2四半期からSlackbotとHeadless 360を含む定義になっている。AgentforceとSlack全体で提供したAgentic Work Unitsは累計70億、第2四半期に32億。通期の売上高予想は461億〜464億ドルだ。
:::

:::guess
履歴の90日、Slackbotの週15通、外部アプリの毎分1回は、別々の施策に見えて、同じ資産を守る線とみられる。組織に溜まった会話は、AIにとって最も価値のある文脈になった。それを無料で開放し続ければ保管の費用がかかり、外部のAIに持ち出されれば、自社のAI機能を上位プランに載せて売る根拠が薄れる。2025年5月にAPIを絞り、翌月にAIをプランへ組み込んだ順序は、この2つが一体の判断だったことをうかがわせる。Slackは理由を顧客データの保護と説明しており、それも実際に大きな論点だと考えられる。データ保護と競争上の防御は同時に成り立つので、どちらか一方の動機と決めることはできない。
:::

:::guess
一方で、外のAIを完全に締め出しているわけではない点も重要だ。Real-time Search APIとMCP Serverは、データを外に保存させず、利用者の権限の範囲で検索させる形で窓を開けている。履歴を「コピーさせない」が「その都度は読ませる」という形は、Slackを会話データの置き場として維持しながら、どのAIからも呼ばれる場所にする設計と読める。Salesforceの決算資料でSlackbotがAgentforceのARRに入ったことは、Slackを人のチャットの売上としてより、エージェントの入口として評価させたい意図の表れと推測される。ただしSlackの売上が非開示である以上、週15通の上限からFlex Creditsへの移行がどれだけの収入になっているかは外からは分からず、「買収以来で最も速い」という説明の絶対額も検証できない。
:::

2013年に単純なチャットとして始まったSlackは、過去の会話が組織の資産になる場所へと育った。今、その資産には、90日、15通、毎分1回という形で値札と柵が付いている。チャットを買っている利用者から見れば細かな制限でも、Slackから見れば、AIの時代に自分たちが何を持っているかの定義そのものだ。
