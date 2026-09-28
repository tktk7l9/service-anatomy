---
service: "Better Stack"
title: "「Datadogの30分の1」を名乗る監視SaaS — Rails製の小さなチームが、ClickHouseとSentry互換で巨人の顧客を取りにいく"
description: "稼働監視・ログ・トレース・エラー追跡・オンコールを1つにまとめたオブザーバビリティSaaS、Better Stack。プラハ発・創業2021年・累計調達2,860万ドルの小さな会社が、Ruby on RailsとClickHouseの上で「Datadogより30倍安い」と掲げる。Sentry SDKやOpenTelemetryをそのまま受け入れて乗り換えの壁を下げる設計と、1年間25%のアフィリエイトまでを、公式ドキュメント・採用ページ・資金調達発表から解剖する。"
lead: "トップページの見出しは「Datadogより30倍安い」。エラー追跡の説明には「いま使っているSentry SDKのまま、送り先だけBetter Stackに変えればいい」と書く。監視の巨人たちが作った標準を自社の入口に変え、少人数のRailsアプリで価格を武器に戦う——プラハ発のBetter Stackは、2023年に「意図せず」黒字化したと自ら発表した。その設計と稼ぎ方を解剖する。"
category: dev-tool
tags: [observability, monitoring, logging, clickhouse, incident-management]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://betterstack.com/"
# Affiliate link placeholder: the owner must sign up for the Better Stack affiliate program
# (https://betterstack.com/affiliates, payouts via PayPal only) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<better-stack-affiliate-link>"
#   program: "Better Stack Affiliate Program"
vendor: "Better Stack, Inc."
origin: "CZ"
heroTheme: "better-stack"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "アプリケーション"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "公式の採用ページ（エンジニアリング）に、スタックとしてRuby on Railsを筆頭に明記。職種説明でも「Ruby on Rails, PostgreSQL, Redis, ClickHouse, Redpanda...」と列挙"
    evidenceUrl: "https://betterstack.com/careers/engineering"
  - layer: "主データベース・キャッシュ"
    name: "PostgreSQL / Redis"
    confidence: confirmed
    evidence: "公式の採用ページ（エンジニアリング）に「PostgreSQL, Redis, and ClickHouse」と明記"
    evidenceUrl: "https://betterstack.com/careers/engineering"
  - layer: "テレメトリ保管"
    name: "ClickHouse"
    confidence: confirmed
    evidence: "公式プレスリリース（2024-01-22）に、ClickHouseを使うことでホットストレージの保持期間を延ばせると明記。採用ページにも記載"
    evidenceUrl: "https://betterstack.com/press/raises-10m/"
  - layer: "イベントストリーミング"
    name: "Redpanda"
    confidence: confirmed
    evidence: "公式の採用ページの職種説明に、使う技術としてRedpandaを明記（Kafka互換のストリーミング基盤）"
    evidenceUrl: "https://betterstack.com/careers"
  - layer: "フロントエンド"
    name: "Vue.js / Turbo / Tailwind"
    confidence: confirmed
    evidence: "公式の採用ページ（エンジニアリング）に「Vue.js, Vanilla.js, Turbo, ES6, and Tailwind」と明記"
    evidenceUrl: "https://betterstack.com/careers/engineering"
  - layer: "データ収集エージェント"
    name: "Better Stack collector (OpenTelemetry / Vector / eBPF)"
    confidence: confirmed
    evidence: "公式ドキュメントに、eBPFでコード変更なしにログ・メトリクス・OpenTelemetryトレースを集め、ログ転送にVectorを同梱すると明記。GitHubのREADMEはOpenTelemetry・Cilium・Vector・OBI・Corootの上に作ったと謝辞を記す"
    evidenceUrl: "https://betterstack.com/docs/logs/collector/"
  - layer: "エラー追跡の受け口"
    name: "Sentry SDK compatible"
    confidence: confirmed
    evidence: "公式ドキュメントに「既存のSentry SDKをそのまま使い、データの送り先をBetter Stackにするだけ」と明記"
    evidenceUrl: "https://betterstack.com/docs/errors/"
  - layer: "データ保管場所"
    name: "EU regions (DIN ISO/IEC 27001-certified data centers)"
    confidence: confirmed
    evidence: "公式セキュリティページに、既定でGDPR準拠・DIN ISO/IEC 27001認証のEUリージョンのデータセンターに保管すると明記。SOC 2 Type 2にも準拠"
    evidenceUrl: "https://betterstack.com/security"
  - layer: "CDN・エッジ"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（betterstack.com・2026-09-28）で server: cloudflare と cf-cache-status: HIT が返り、IPアドレスもCloudflareの網に属する。公式ドキュメントでの明言は見当たらない"
  - layer: "画像ストレージ"
    name: "Backblaze B2"
    confidence: likely
    evidence: "当サイトの観測（2026-09-28）で、betterstack.comのContent-Security-Policyに組織ロゴ・ユーザーアバター用のBackblaze B2のバケットが許可先として並ぶ。公式の明言は見当たらない"
sources:
  - label: "Better Stack公式トップページ（Datadog比30倍安い・7,000超の顧客・60日返金保証・乗り換え時の残契約肩代わり）"
    url: "https://betterstack.com/"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式プレスリリース: インフラ監視の開始・黒字化・1,000万ドル調達（2024-01-22）"
    url: "https://betterstack.com/press/raises-10m/"
    accessedAt: "2026-09-28"
  - label: "TechCrunch: Better Stackが1,000万ドルを調達、累計2,860万ドル・従業員28人（2024-01-25）"
    url: "https://techcrunch.com/2024/01/25/observability-platform-better-stack-secures-10m-cash-infusion/"
    accessedAt: "2026-09-28"
  - label: "Silicon Canals: プラハのBetter StackがCreandum主導で1,860万ドルを調達（2022-07）"
    url: "https://siliconcanals.com/better-stack-raises-18-2m/"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式プレスリリース: Better StackのローンチとBetter Uptime/Logtailの統合"
    url: "https://betterstack.com/press/introducing-better-stack/"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式: 採用ページ（技術スタック・報酬レンジ・Hardcore mode）"
    url: "https://betterstack.com/careers"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式: 採用ページ（エンジニアリング）"
    url: "https://betterstack.com/careers/engineering"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式: 料金ページ（Responder課金・地域別単価・AWS Direct Connect経由の取り込み）"
    url: "https://betterstack.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式ドキュメント: Better Stack collector"
    url: "https://betterstack.com/docs/logs/collector/"
    accessedAt: "2026-09-28"
  - label: "GitHub: BetterStackHQ/collector（README）"
    url: "https://github.com/BetterStackHQ/collector"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式ドキュメント: Welcome to Errors（Sentry SDK互換）"
    url: "https://betterstack.com/docs/errors/"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式: Security（データ保管場所・SOC 2・GDPR）"
    url: "https://betterstack.com/security"
    accessedAt: "2026-09-28"
  - label: "Better Stack公式: Affiliate program"
    url: "https://betterstack.com/affiliates"
    accessedAt: "2026-09-28"
---

監視ツールの市場には、DatadogやNew Relic、PagerDutyといった大手がひしめく。そこへ、プラハで2021年に生まれた小さな会社が「同じことを30分の1の値段で」と正面から書いて乗り込んだ。Better Stackは、価格そのものを製品の中心に置いた珍しいSaaSだ。

## サービス解説

Better Stackは、Webサービスの稼働監視・ログ・メトリクス・トレース・エラー追跡・セッションリプレイ・オンコール（当番への電話やSlack通知）・ステータスページを1つにまとめたオブザーバビリティのプラットフォームだ。元は稼働監視のBetter Uptimeとログ管理のLogtailという別々の製品で、のちにBetter Stackの名前で統合された。

:::fact
公式プレスリリースによれば、Better UptimeとLogtailはBetter Stack上のUptimeとLogsに名前を変えて統合され、機能と料金はそのまま、1つのアカウントで行き来できるようになった。Silicon Canalsによれば、Better StackはJuraj MasarとVeronika Kolejakが2021年に創業したプラハの会社で、2022年7月にCreandum主導のシリーズAで1,860万ドルを調達した。2024年1月22日の公式プレスリリースでは、既存投資家KAYAから1,000万ドルを追加調達し（TechCrunchによれば累計2,860万ドル）、2023年に「意図せず」黒字化したと発表している。TechCrunchによれば、当時の従業員は28人で、年末までに50人へ増やす計画だった。当時の利用者は開発者20万人超・顧客4,000社超で、2026年9月時点の公式トップページの説明文は「7,000超の顧客」、採用ページは「開発者30万人超」と書く。
:::

:::fact
公式トップページの見出しは「Datadogより30倍安い」。ログ・トレース・メトリクスを各1TB/月ずつ送る想定でDatadogの概算と比べ、同じ予算で最大80倍のデータを取り込めるか、費用を最大98%減らせると主張している（年払い・欧州でのデータ保管・Responder 1人とTeraバンドルを前提とした概算で、Datadogが月約55,574ドル、Better Stackが月687ドル）。同じページには「Datadogの請求が高すぎる？ 今すぐ移行を。残りの契約期間分は当社が持つ」という乗り換え勧誘も載る。
:::

:::pull
監視の巨人たちが作った標準を、そのまま自分の入口にする。Better Stackの戦い方は「作り直す」ではなく「乗り換えを安くする」だ。
:::

::scorecard

## UX分析

Better StackのUXは「乗り換えの手間を限りなくゼロにする」ことと「1つの画面で完結させる」ことに向けられている。

- **既存のSDKをそのまま受け入れる**。エラー追跡は、Sentryのために書いたコードを変えずに送り先だけ差し替えればよい、と公式ドキュメントは書く。トレースやログもOpenTelemetryという業界標準で受ける。移行の最大の障害である「計装のやり直し」を消しにいく設計だ。
- **コード変更なしの自動収集**。公式のcollectorはeBPFでKubernetesやDockerのクラスタからログ・メトリクス・トレースを集め、設定変更は再デプロイなしに画面から遠隔で反映できる。代わりに、eBPFトレースを有効にすると1ホストあたり4GiBのメモリと4vCPUを空けておくよう求めている。導入は軽いが、観測対象のマシン側には相応の余力が要る。
- **監視から当番呼び出しまでを1つの流れに**。稼働監視がダウンを検知し、オンコール担当に電話やSlackで知らせ、ステータスページで利用者に告知する。複数のSaaSを繋ぐ設定を、1社の中で済ませられる。
- **無料枠で「試せる」ところまで出す**。料金ページによれば、無料プランでも監視10件・ステータスページ1つ・月10万件のエラー・3GBのログ（3日保持）が使える。60日間の返金保証も料金ページの冒頭とトップページの説明文で打ち出している。個人開発者が本番で試してから払う、という順番を許している。

## 技術構成

::techstack

:::fact
公式の採用ページによれば、Better StackのスタックはRuby on Rails・PostgreSQL・Redis・ClickHouse・Redpanda・JavaScript・Vue.js・Tailwind・Dockerで、フロントエンドにはTurboも使う。職種説明には、CTO・CEO・デザイナーと組んでバックエンドからフロントエンドまでの機能を「1日で」届ける、とある。2024年1月の公式プレスリリースは、ClickHouseのおかげでデータをホットストレージ（すぐ検索できる状態）に長く置けること、問い合わせにSQLを使うことを特長に挙げている。
:::

:::fact
公式セキュリティページによれば、データは既定でEUリージョンのDIN ISO/IEC 27001認証データセンターに保管され、SOC 2 Type 2に準拠している（HIPAAには非対応と明記）。採用ページのオペレーション職の説明には「データセンターの運用を手伝う」とある。料金ページでは、ログとトレースの取り込み単価が地域ごとに違い、ドイツ（EU）で1GBあたり0.10ドル、米国で0.15ドル、シンガポールで0.35ドル。同じページには「AWS Direct Connect経由の取り込み」というオプションがあり、AWS上のシステムがAWSのデータ転送料（1GBあたり0.09ドル）を払わずに済むよう、AWS内（eu-central-1）に取り込み口を置き、AWS Direct Connectを自社で設定済みだと説明している。
:::

:::guess
当サイトの観測では、betterstack.comの応答ヘッダーに server: cloudflare とキャッシュヒットが返り、RailsのRackミドルウェアが付ける x-runtime ヘッダーも出ていた。マーケティングサイトもRailsアプリそのものをCloudflareの後ろに置いた構成とみられる。また、ブラウザのセキュリティポリシー違反レポートの送り先（reporting-endpoints ヘッダー）は自社のログ取り込み口（in.logs.betterstack.com）で、自社製品を自分の監視に使う「ドッグフーディング」をしていると読める。AWS Direct Connectは本来、AWSの外にある設備とAWSを専用線で結ぶサービスだ。AWS内に置いた取り込み口からDirect Connectで自社の基盤へ運ぶ構成と読めるため、主な処理基盤はAWSの外、採用ページのいう「自社のデータセンター」にあるとみられる。ドイツ（EU）の取り込み単価が最も安いことと既定の保管先がEUであることを合わせると、欧州に自前で運用する安価な計算資源を持ち、それが「30倍安い」の原資になっていると推測される。ただし公式にハイパースケーラーを使っていないとは書かれておらず、これは状況証拠からの推測にとどまる。
:::

:::guess
監視SaaSの原価は、ほぼ「取り込んだデータを保存して検索する費用」で決まる。列指向のClickHouseは同じ種類の値が並ぶログやメトリクスを強く圧縮でき、全文検索エンジン型の基盤より保存費が下がりやすい。Better Stackの価格は、この保管層の選択に支えられているとみられる。一方、アプリ層にRailsを選んだのは、少人数でも画面と機能を速く出し続けるためと推測される。重い処理はClickHouseとRedpandaに任せ、人手の要る部分は生産性の高い枯れた道具で書く——役割の切り分けが明快だ。
:::

## ビジネスモデル

Better Stackの収益は、オンコール担当（Responder）単位の席課金と、取り込んだデータ量による従量課金の二本立てだ。

:::fact
料金ページによれば、テレメトリを見るだけのメンバーは無料で、稼働監視・インシデント管理・オンコール・ステータスページを使い、電話やSMSで呼び出される当番のResponderは月34ドル（年払いなら月29ドル）。テレメトリはNano・Micro・Mega・Teraの4段階のバンドルと、1GBあたりの従量課金を選べ、バンドルには30日のログ保持が含まれる。公式の採用ページは、フルスタックエンジニアの報酬を年6万〜30万ドル＋株式と公開し、「1.5倍働いて2倍稼ぐ」Hardcore modeという別レンジも並べている。
:::

:::fact
公式サイトによれば、Better Stackは紹介経由の有料顧客の売上の25%を、最初の1年間に限って払うアフィリエイトプログラムを運営している。基準は決済・プラットフォーム手数料を引いた純売上で、支払いは紹介した顧客の60日返金保証期間が過ぎてから、残高が100ドルを超えた時点で、PayPal口座にのみ行う。複数人が同じ顧客を紹介した場合は最後の紹介者だけが対象になる。公式の例では、月100ドル使う顧客を紹介すると、1年で25ドル×12回、計300ドルになる。
:::

:::guess
席課金は「当番を担う人」にだけかかり、データを見るだけの人は無料という形は、社内に広く配っても請求が膨らまないことを売りにした設計とみられる。Datadogのようにホスト単位などで増えていく課金に不満を持つ層を、価格表の形そのもので引き寄せる狙いと推測される。また採用ページは「F1のスポンサーやスーパーボウルの広告は買えないが、テックブロガーの副業を後押しするスポンサーはできる」と書く。大きな広告費を使わず、開発者向けの発信者とアフィリエイトで顧客を集めることが、少人数で黒字を保つ成長のしかたの中心にあるとみられる。
:::

「Datadogより30倍安い」という一文は、挑発のようでいて、保管層にClickHouseを選び、アプリをRailsで少人数に書き、入口を他社の標準に合わせた結果の請求書でもある。巨人と同じ機能を、巨人と違う原価構造で売る——Better Stackは、後発の開発者向けSaaSがどこで勝負できるかの一つの答えを示している。
