---
title: "Jira vs Linear — 組織の手順を写す自由度で24年育った課題管理と、型を押しつけて速さを売る課題管理、どちらもAIの使用量を席の値段に重ねはじめた"
description: "課題管理の2つの選択肢、JiraとLinearを、2026年10月7日時点の公式の料金ページ・ドキュメント・決算資料・株主書簡・公式ブログ・GitHubだけで比較する。Jiraは2002年公開で、Atlassianの2026年6月期の売上高は65億7,200万ドル、顧客は35万社超、自社運用版のData Centerは2029年3月に読み取り専用になる。Linearは有料で使う会社が4万社超、ARRは1億ドルを超え、2026年8月に評価額25億ドルで社員の株を買い取った。無料プランは、Jiraが10ユーザーまで、Linearがメンバー無制限・課題250件まで。AIは、Jiraが有料プランのユーザーに月25〜150のRovoクレジットを配って超過分を1クレジット0.01ドルで取り、Linearはコードを書かせる機能と定期実行の機能だけを前払いの残高から実費で引く。規模、値段、AIの課金、エージェントの入口、自社運用、データの置き方を同じ項目で並べる。"
lead: "当サイトのLinearの解剖記事は「JiraやAsanaを開くとき、人は無意識にワンテンポ待つ癖がついている」という一文で始まる。待たせない道具として生まれたLinearと、待たせてきた側として名前が挙がるJira。2026年、両者は同じ問題に向き合っている。課題を起票するのが人ではなくエージェントになっていくなかで、ユーザーの数で決まる値段をどう保つかだ。両社の公式情報を同じ日に読み、規模、値段、AIの課金、データの置き方の違いを解剖する。"
slugA: "jira"
slugB: "linear"
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
sources:
  - label: "Atlassian: Jira pricing"
    url: "https://www.atlassian.com/software/jira/pricing"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Rovo Plans and Trial（Rovoクレジット）"
    url: "https://www.atlassian.com/licensing/rovo"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Data Center End of Life"
    url: "https://www.atlassian.com/licensing/data-center-end-of-life"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Fourth Quarter and Fiscal Year 2026 Results（2026-08-06）"
    url: "https://s206.q4cdn.com/270053503/files/doc_financials/2026/q4/TEAM-Q4-2026-Earnings-Release.pdf"
    accessedAt: "2026-10-07"
  - label: "Atlassian: Q4 FY2026 Shareholder Letter（2026-08-06）"
    url: "https://s206.q4cdn.com/270053503/files/doc_financials/2026/q4/TEAM-Q4-2026-Shareholder-Letter.pdf"
    accessedAt: "2026-10-07"
  - label: "Inside Atlassian: An important update on our team（2026-03-11）"
    url: "https://www.atlassian.com/blog/company-news/atlassian-team-update-march-2026"
    accessedAt: "2026-10-07"
  - label: "Atlassian Engineering: Migrating the Jira Database Platform to AWS Aurora（2025-07-01）"
    url: "https://www.atlassian.com/blog/how-we-build/migrating-jira-database-platform-to-aws-aurora"
    accessedAt: "2026-10-07"
  - label: "Atlassian Engineering: How We Unlocked Performance at Scale with Jira Platform（2025-12-15）"
    url: "https://www.atlassian.com/blog/how-we-build/how-we-unlocked-performance-at-scale-with-jira-platform"
    accessedAt: "2026-10-07"
  - label: "GitHub: atlassian/atlassian-mcp-server"
    url: "https://github.com/atlassian/atlassian-mcp-server"
    accessedAt: "2026-10-07"
  - label: "Linear公式: Pricing"
    url: "https://linear.app/pricing"
    accessedAt: "2026-10-07"
  - label: "Linear Docs: AI Credits"
    url: "https://linear.app/docs/ai-credits"
    accessedAt: "2026-10-07"
  - label: "Linear公式ブログ: Sharing Linear's growth with the people building it（2026-08-26）"
    url: "https://linear.app/now/sharing-growth-with-the-people-building-linear"
    accessedAt: "2026-10-07"
  - label: "Linear公式ブログ: Rebuilding Linear's delta sync read path（2026-08-18）"
    url: "https://linear.app/now/rebuilding-delta-sync-read-path"
    accessedAt: "2026-10-07"
  - label: "Linear公式ブログ: Styling Linear for the future with StyleX（2026-08-26）"
    url: "https://linear.app/now/styling-linear-for-the-future-stylex"
    accessedAt: "2026-10-07"
---

[Jira](/ja/articles/jira)と[Linear](/ja/articles/linear)は、ソフトウェア開発チームの課題管理の道具として並べて語られることが多い。Jiraは2002年に公開され、組織ごとの手順を写し取れる自由度で広まった。Linearは手元のデータベースに先に書いてから同期する設計で、クリックした瞬間に終わっている速さを売ってきた。2本の解剖記事を重ねると、違いは機能の数ではなく、何を顧客に合わせ、何を顧客に合わせさせるかに出ている。

この記事は、両社の公式の料金ページ・ドキュメント・決算資料・公式ブログ・GitHubを2026年10月7日に読み直してまとめた。当サイトは両方に同じプロジェクトを載せて速さを測ってはおらず、体感の速さの優劣は扱わない。

## 規模：売上65億ドル超の会社と、ARR1億ドルを超えた会社

Jiraを売るAtlassianは上場企業で、決算でJira単体の売上は開示していない。Linearは非上場で、公式ブログで節目の数字を出している。

:::fact
Atlassianの決算発表（2026-08-06）によれば、2026年6月期の売上高は65億7,200万ドル（前年比+26%）、サブスクリプションARRは66億600万ドル（同+23%）で、同社のソフトウェアは35万社超の顧客に使われ、クラウドARRが1万ドルを超える顧客は57,334社。株主書簡は、クラウドの伸びの理由にJiraとConfluenceの席の増加を挙げる。2026年3月11日には、AIと大企業向け営業への投資を自前でまかなうため、従業員の約10%（約1,600人）を減らすと発表した。Linearの公式ブログ（2026-08-26）によれば、Linearは2026年にARRが1億ドルを超え、有料で使う会社は4万社超、売上の継続率（NRR）は177%で、キャッシュフローは黒字、手元資金はこれまでの調達額の合計を上回る。同じ記事で、社員と元社員が持ち株の一部を売れる9,900万ドルのテンダーオファーを評価額25億ドルで行ったと公表し、30を超える職種で採用中だと書く。
:::

| 項目 | Jira（Atlassian） | Linear |
| --- | --- | --- |
| 公表している規模 | 売上高65億7,200万ドル（2026年6月期・全製品） | ARR1億ドル超（2026年） |
| 顧客 | 35万社超（全製品） | 有料で使う会社4万社超 |
| 継続・拡大の指標 | クラウドARR1万ドル超の顧客57,334社 | NRR 177% |
| 2026年の組織の動き | 従業員の約10%（約1,600人）を削減 | 30超の職種で採用中 |
| 資本 | NASDAQ上場（TEAM） | 非上場、評価額25億ドルで社員株を買い取り |

:::pull
Jiraは顧客の手順に合わせて育ち、Linearは顧客を自分の型に合わせさせて育った。2026年、どちらも値段の上にAIの使用量を重ねている。
:::

## 値段の付け方

どちらもユーザー1人あたりの月額で売るが、無料プランの線の引き方と、人数による値段の変わり方が違う。

:::fact
Jiraの料金ページ（2026-10-07確認）によれば、Freeは10ユーザーまで、ストレージ2GB、自動化は月150ステップ。ページに埋め込まれた価格表では、月払いのStandardは1〜100ユーザーの部分が1ユーザー月9.05ドル（円建ては1,240円）、Premiumは同18.30ドル（2,500円）で、人数が増えるほど段階的に安くなり、年払いなら最大17%安い。Enterpriseは年払いのみで営業経由。Linearの料金ページ（同日確認）によれば、Freeはメンバー無制限・2チーム・課題250件まで、Basicは年払いで1ユーザー月10ドル（5チーム・課題無制限）、Businessは同16ドル（チーム無制限、非公開のチームとゲスト、Triage IntelligenceやLoopsなど）、Enterpriseは個別見積もりで年払いのみ。
:::

| 項目 | Jira | Linear |
| --- | --- | --- |
| 無料プランの上限 | 10ユーザー、ストレージ2GB | メンバー無制限、2チーム、課題250件 |
| 入門の有料プラン | Standard 月9.05ドル／人（月払い・1〜100人の部分） | Basic 月10ドル／人（年払い） |
| 上位の有料プラン | Premium 月18.30ドル／人（同） | Business 月16ドル／人（年払い） |
| 人数による変化 | 段階的に1人あたりが下がる | 料金ページには段階の記載なし |
| 最上位 | Enterprise（年払い・営業経由、最大150サイト） | Enterprise（年払い・個別見積もり） |

:::guess
Jiraは人数が増えるほど1人あたりの値段を下げ、数千人、数万人の組織に全社で入れてもらう形を前提にしているとみられる。Linearは無料プランで人数を絞らず課題の数で絞り、少人数のチームがまず使い込み、組織が育つにつれて有料に移る形に向くとみられる。前者は「全社に配る道具」、後者は「チームが選ぶ道具」としての値付けと読める。
:::

## AIの課金：席に配るクレジットと、前払いの実費

2026年、両者ともAIの費用を席の値段だけでは回収しない形に移った。ただし、何に課金するかが違う。

:::fact
Rovoのライセンスのページ（2026-10-07確認）によれば、Jiraの有料プランにはユーザーあたり月25（Standard）、70（Premium）、150（Enterprise）のRovoクレジットが付き、組織全体のプールで共有される。基本的なAIの操作は1回10クレジットで、上限を超えた分は1クレジット0.01ドルの従量で払える。追加の利用を止めていれば、新しいAIの操作が翌月まで止まるだけで、Rovo Searchなどの無料の機能は使い続けられる。LinearのAIクレジットのドキュメント（同日確認）によれば、コードを書かせるCoding sessionsと、定期的な作業を任せるLoopsだけがAIクレジットを使い、それ以外のAI機能はプランに含まれる。AIクレジットはワークスペースで共有する前払いの残高で、Coding sessionsはモデルのトークン代を提供元の公表価格のまま上乗せなしで払い、サンドボックスの実行時間に20分ごとに0.25ドルがかかる。Loopsは1回あたり0.07〜0.20ドル程度。残高を入れなければ、これらの機能は使えず課金もされない。
:::

| 項目 | Jira（Rovo） | Linear |
| --- | --- | --- |
| 席に含まれるAI | 有料プランにRovo（月25〜150クレジット／人） | Coding sessionsとLoops以外のAI機能 |
| 使用量の単位 | Rovoクレジット（基本の操作は1回10） | 米ドル建ての前払い残高 |
| 超過・追加の払い方 | 1クレジット0.01ドルの従量（または前払いパック） | トークンは提供元の価格で上乗せなし、サンドボックス20分0.25ドル |
| 使わない組織 | 席のクレジットの範囲で追加の支払いなし | 残高を入れなければ課金なし |

:::guess
Jiraは全ユーザーに少しずつAIを配り、組織全体で使う量に応じて取る形で、AIを「全員の道具」として広げる狙いとみられる。Linearは重い処理であるコードの生成と自動実行だけを切り出し、原価に近い実費で取る形で、「席の値段にAIの原価を混ぜない」ことを選んだと読める。前者は推論の費用をクレジットの単価に吸収させ、後者は原価をそのまま顧客に見せる形と読める。
:::

## エージェントの入口

:::fact
Atlassianの株主書簡（2026-08-06）によれば、AtlassianのMCPサーバーとTeamwork Graph CLIの月間アクティブユーザーは四半期で2倍超に増えて100万を超え、MCP経由で作られたJiraの課題とConfluenceのページは前四半期の約4倍になった。MCPの利用者の98%は同じ月にJiraの画面も使っている。公式のMCPサーバーはGitHubで atlassian/atlassian-mcp-server として公開され、Apache-2.0、スター1,084（2026-10-07時点）。Linearの公式ブログ（2026-08-26）によれば、エージェントは有料ワークスペースの95%に導入され、エージェントが作る作業の割合は1年前の3%から50%に増えた。2026年に入ってから、エンジニアリング・プロダクト・デザインの担当者がプルリクエストを紐づけた課題の数は7倍になったとしている。Linearの料金ページは、AIとエージェントの機能としてエージェント基盤、MCPでのアクセス、Linear Agent、Coding sessions、Loopsを並べる。
:::

:::guess
両社とも、エージェントが画面を通らずに課題を作り、処理する時代を前提にしているとみられる。Atlassianは、MCPを使う人の98%がJiraの画面も使っていると示すことで、外のAIが増えても席が減らないことを投資家に説明しているとみられる。Linearは、作業の半分をエージェントが作るようになったことを成長の数字として示し、課題管理を「人が起票する場所」から「人とエージェントが同じ文脈で働く場所」へ定義し直そうとしていると推測される。
:::

## 自社運用：終わらせる側と、載せていない側

:::fact
Atlassianの公式の告知ページ（2026-10-07確認）によれば、JiraのData Center版は2026年3月30日に新規顧客への販売を終え、既存顧客の新規契約・追加購入は2028年3月30日まで、2029年3月28日に読み取り専用になる。例外として延長保守を個別に提供する。同じページは、Atlassianの顧客の99%がクラウドにいるか移行の途上にあるとする。Linearの料金ページ（同日確認）には、自社のサーバーで動かす版の選択肢は載っていない。
:::

## 技術構成の重なりは、PostgreSQLとReactの2件

このページの下に出る技術構成の比較は、2本の記事のtechStackを機械的に突き合わせたものだ。共通と判定されたのはPostgreSQLとReactの2件で、どちらも使い方がまったく違う。JiraのPostgreSQLは、顧客のサイトごとに1つずつ、約400万のデータベースとして13のAWSリージョンに散らばり、サーバー版から引き継いだ1テナント1データベースの前提を抱えている。LinearのPostgreSQLは、ワークスペースごとの変更の記録（sync action）を追記していくログの正本だ。両社とも2025〜2026年に、重い読み出しをPostgreSQLから専用の索引へ移した点は似ている。JiraはJQLの検索をOpenSearchの上のJSISに、課題の表示をJISのキャッシュに移し、Linearは差分同期の問い合わせを転置インデックスのturbopufferに移した。Reactも、Jiraでは17年分のJSPやBackboneの画面を置き換えるためにNode.jsのサーバーサイドレンダリングと組み合わせ、Linearでは手元のIndexedDBとMobXの上で動かし、2026年にstyled-componentsからStyleXへ移した。片方はサーバー時代の構造を少しずつ切り出し、もう片方は最初から手元に書く構造を太くしている。

選ぶ側の問いは2つに分けられる。組織の手順を道具に合わせて変えられるなら、Linearの型と速さが効き、課題の数で絞る無料プランから小さく始められる。手順を変えずに全社へ配りたい、承認や権限を細かく作り込みたいなら、Jiraの自由度と人数割引が効く。ただしJiraは2029年3月以降クラウドでしか使えなくなり、Linearの料金ページにはクラウドの選択肢しかない。どちらを選んでも、2026年の課題管理は、席の値段とAIの使用量を足した額で比べる時代に入っている。
