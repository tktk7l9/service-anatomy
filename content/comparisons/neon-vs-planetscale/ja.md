---
title: "Neon と PlanetScale の比較 — 使った分だけ払うサーバーレスPostgresか、大きさで払うクラスターか。無料枠・料金・ブランチ・高可用性・リージョンを公式ページで並べる"
description: "NeonとPlanetScaleを、両社の公式ページ（2026-11-02閲覧）だけを根拠に比較する。Neonは無料で100プロジェクト、有料は1CU時間0.106ドルからの従量課金で、使っていない間は計算資源がゼロになる。PlanetScaleは無料枠がなく、単一ノードのPostgresが月5ドル、3ノードの高可用構成が月15ドルからの月額制。ブランチの中身、高可用性の作り方、大きくなったときの上限、東京リージョンの有無、互いの比較の語り方まで並べ、どんな使い方ならどちらが合うかを読み解く。"
lead: "マネージドのPostgresを選ぶとき、NeonとPlanetScaleは名前が並びやすい2つだ。どちらも「本物のPostgres」とブランチを売りにするが、請求の組み立ては正反対に近い。Neonは動いた時間を測り、止まっている間は計算資源に払わない。PlanetScaleは選んだ箱の大きさで月額を決め、最初から本番に耐える構成を勧める。2026年11月2日に両社の公式ページを読み直し、無料枠、料金、ブランチ、高可用性、リージョン、そして互いをどう語っているかを並べて、どちらがどんな人に合うのかを解剖する。"
slugA: "neon"
slugB: "planetscale"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "PlanetScaleのBenchmarksページにあるNeon Lakebaseの数字（約1万2,500QPS・月2,768ドル）と、NeonのFreeプランの上限（1プロジェクト1GB・アカウント合計20GB・通信5GB）。比較や上限は更新が多いので月末に確認する"
  - date: "2026-12-31"
    claim: "PlanetScaleのNekiがプラットフォームプレビュー（ベータ機能・SLAなし）であること、Postgresの読み取り専用リージョンが「近日提供」であること"
sources:
  - label: "Neon公式: Pricing（最終更新2026-10-31）"
    url: "https://neon.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Neon公式ドキュメント: Plans"
    url: "https://neon.com/docs/introduction/plans"
    accessedAt: "2026-11-02"
  - label: "Neon公式ドキュメント: Regions"
    url: "https://neon.com/docs/introduction/regions"
    accessedAt: "2026-11-02"
  - label: "Neon公式ドキュメント: Branching"
    url: "https://neon.com/docs/introduction/branching"
    accessedAt: "2026-11-02"
  - label: "Neon公式ドキュメント: Scale to Zero"
    url: "https://neon.com/docs/introduction/scale-to-zero"
    accessedAt: "2026-11-02"
  - label: "Neon公式ドキュメント: The lakebase architecture"
    url: "https://neon.com/docs/introduction/architecture-overview"
    accessedAt: "2026-11-02"
  - label: "Neon公式ドキュメント: Postgres version support"
    url: "https://neon.com/docs/postgresql/postgres-version-support"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: Pricing"
    url: "https://planetscale.com/pricing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: pricing.md（AWSバージニアの料金）"
    url: "https://planetscale.com/pricing.md"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: pricing.md?region=ap-northeast（AWS東京の料金）"
    url: "https://planetscale.com/pricing.md?region=ap-northeast"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: PlanetScale plans"
    url: "https://planetscale.com/docs/planetscale-plans"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: PlanetScale Postgres pricing"
    url: "https://planetscale.com/docs/postgres/pricing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Billing"
    url: "https://planetscale.com/docs/billing"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Branching（Postgres）"
    url: "https://planetscale.com/docs/postgres/branching"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Vitess, Neki, and Postgres"
    url: "https://planetscale.com/docs/postgres-vs-vitess"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Supported versions（Postgres）"
    url: "https://planetscale.com/docs/postgres/cluster-configuration/versions"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Selecting a region"
    url: "https://planetscale.com/docs/plans/regions"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Neki"
    url: "https://planetscale.com/docs/neki"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Migrate from Neon to PlanetScale"
    url: "https://planetscale.com/docs/postgres/imports/neon"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ドキュメント: Using the Neon serverless driver"
    url: "https://planetscale.com/docs/postgres/connecting/neon-serverless-driver"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式: Benchmarks"
    url: "https://planetscale.com/benchmarks"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: PlanetScale forever（2024-03-06）"
    url: "https://planetscale.com/blog/planetscale-forever"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: $5 PlanetScale is live（2025-11-14）"
    url: "https://planetscale.com/blog/5-dollar-planetscale-is-here"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: PlanetScale for Postgres is now GA（2025-09-22）"
    url: "https://planetscale.com/blog/planetscale-for-postgres-is-generally-available"
    accessedAt: "2026-11-02"
  - label: "PlanetScale公式ブログ: Introducing Neki（2026-09-10）"
    url: "https://planetscale.com/blog/introducing-neki"
    accessedAt: "2026-11-02"
---

[Neon](/ja/articles/neon)と[PlanetScale](/ja/articles/planetscale)は、どちらも「本物のPostgres」を、ブランチを使う開発の流れと一緒に売っている。ただし料金表を横に置くと、行の立て方からして違う。Neonの行は「CU時間」「GB月」「ブランチ月」という使った量の単位で、PlanetScaleの行は「PS-5」「PS-10」「M-10」というクラスターの型番だ。この記事は、両社の公式ページを2026年11月2日に読み、書かれている数字と条件をそのまま並べる。当サイトは両サービスを契約して使った体験を書いているのではなく、公開されている料金表とドキュメントを突き合わせている。料金は改定されるので、申し込む前に必ず公式ページを確認してほしい。

## 料金の組み立てを並べる

:::fact
以下は、Neonの料金ページ（最終更新2026-10-31）とPlanetScaleの料金ページ・pricing.md・料金ドキュメント（いずれも2026-11-02閲覧）に書かれている内容を、当サイトが項目ごとに並べ直したものだ。金額はすべて米ドルで、PlanetScaleはAWSバージニア（us-east-1）の価格。どちらも大口向けの個別契約（Enterprise）があり、表はセルフサービスの標準の料金を示す。

| 項目 | Neon | PlanetScale |
| --- | --- | --- |
| 無料で使える範囲 | Freeプランは月0ドルで恒久（試用ではない）、カード不要。100プロジェクト、各プロジェクトに月100CU時間・1GBのストレージ（アカウント合計20GBまで）・5GBの通信 | 無料プランなし（2024年4月8日に廃止）。すべてのデータベースに有料の契約が要り、カードの登録が必須 |
| 課金の単位 | 計算は「CU時間」（1CUは約4GBのメモリとCPU・SSD）、ストレージは「GB月」。1時間ごとに計測し、月の最低額はない。0.50ドル未満の請求は徴収しない | 選んだクラスターの型番ごとの月額。作成・変更はミリ秒単位で日割り |
| 最小の計算資源 | Launchは1CU時間0.106ドル、Scaleは0.222ドル。止まっている間はCU時間がかからない | 単一ノードのPS-5（1/16 vCPU・512MiB）が月5ドル、PS-10（1/8 vCPU・1GiB）がArmで月10ドル |
| 高可用性の最小構成 | 全プランでストレージは複数のアベイラビリティゾーンに置かれる（「スタンバイなしの高可用性」） | 1つのプライマリと2つのレプリカの3ノード。PS-5が月15ドル、PS-10がArmで月30ドル |
| ストレージ | 有料プランは1GB月0.35ドル、上限なし | 各クラスターに10GB込み。超えた分はインスタンスごとの課金で、公開APIの単価はバージニアで1GB月0.125ドル（HAは3台分） |
| 過去への復元 | 履歴はFree 6時間、Launch最大7日、Scale最大30日。Instant restoreは1GB月0.20ドル | 12時間ごとの自動バックアップ。ディスクの2倍まで込み、超えた分は1GB月0.023ドル |
| 外向きの通信 | Freeは各プロジェクト5GB、有料は各プロジェクト500GBまで込み、その先は1GB 0.10ドル | 本番ブランチは月100GB、PS-5と開発ブランチは月10GBまで込み、その先は地域ごとの単価 |
| 開発用ブランチ | FreeとLaunchは各プロジェクト10、Scaleは25まで込み。追加は1ブランチ月1.50ドル（1時間ごとの日割り） | Postgresの開発ブランチ（PS-DEV）は1つ月5ドルで、動いている時間だけ課金。既定の上限は100 |
| 支出の通知 | Launch・Scaleで月の基準額の80%と100%にメール | 月の予算の75%と100%に管理者へメール |
| Postgresのバージョン | 14〜18（2026年8月時点で18.6・17.11・16.15・15.19・14.24） | 17.11と18.6 |
| 契約の入口の特典 | スタートアップ向けに最大10万ドルのクレジット、エージェントのプラットフォーム向けのAgent Plan、オープンソース向けのプログラム | スタートアップ向けページは「クラスターは月5ドルから」と書くが、無償クレジットの制度は確認できなかった |
:::

:::fact
1CUの定義はNeonの料金ページで「約4GBのメモリ＋CPU＋SSD」、PlanetScaleの型番はvCPUとメモリを個別に示す（PS-10は1/8 vCPU・1GiB）。PlanetScaleのドキュメントは、端数のvCPUは「ワークロードに確保される最低限のサイクル」で、共有の基盤に余った計算資源は追加料金なしで使えると説明する。両社の「CPU」は同じ物差しではないので、上の表は単価を横に並べたもので、性能が同じという意味ではない。
:::

:::guess
表を読むと、Neonの料金は「止まっている時間が長いほど安い」、PlanetScaleの料金は「動き続けるほど割安」という形をしているとみられる。PlanetScaleの単一ノードは24時間動かしても月額が変わらず、Neonは同じ大きさでも稼働時間に比例して請求が増える。どちらが安いかは、データベースがどれだけの時間クエリを受けているかでほぼ決まると推測される。
:::

## 小さく始めるときの費用

:::fact
Neonの料金ページは、代表的な負荷の月額の目安を載せている。「断続的な負荷」（140CU時間・1GB、使っていないときはゼロまで縮み、動くときは0.25〜2CU）はLaunchで月15ドル、「低い負荷」（190CU時間・5GB、ゼロへの縮小を止め、ほぼ0.25CUで常時稼働）はLaunchで月22ドル、「中くらいの負荷」（720CU時間・10GB）は月80ドル。Freeプランでは、CU時間か通信を使い切るとその月の残りは計算資源が止まり、1GBのストレージを超えると書き込みが止まるが、どの上限でもデータは消えない。使っていないFreeのプロジェクトを止めることはなく、5分使われないと計算資源がゼロになり、次のクエリで数百ミリ秒で戻る。

PlanetScaleでは、単一ノードのPS-5が月5ドル、PS-10がArmで月10ドルで、10GBのストレージと月10GB（PS-5）の通信を含む。公式ブログ（2025-11-14）は単一ノードを「本番にも使える」「スタートアップ、サイドプロジェクト、検証、開発向け」と説明する。高可用の3ノードにすると、PS-5で月15ドル、PS-10のArmで月30ドルになる。公式ドキュメントによれば、請求はデータベース単位で、100ドル以上の請求を一度支払うまではPS-160とM-320より大きいサイズを選べない。
:::

:::fact
「たくさんの小さなデータベース」を持つ場合の差は大きい。Neonの料金ページの例では、Launchで100のテナントにそれぞれプロジェクトを持たせ、各0.25CUで1日約1時間動かし150MBを置くと、約750CU時間と15GBで月およそ85ドル（1テナント約0.85ドル）。PlanetScaleで100のデータベースをそれぞれ最小の単一ノードで持つと、PS-5の月5ドル×100で月500ドルになる（当サイトの計算。ストレージと通信は込みの範囲に収まる前提）。逆に、1つのデータベースを24時間動かし続ける場合、Neonの「低い負荷」の目安（月22ドル）に対して、PlanetScaleのPS-10の単一ノードは月10ドルだ。
:::

:::guess
個人の試作、授業、AIエージェントが作っては捨てるデータベースのように「数が多く、ほとんど寝ている」使い方では、Neonの無料枠と従量課金が圧倒的に有利とみられる。一方、小さくても毎日ずっとクエリを受ける本番のアプリでは、PlanetScaleの単一ノードの定額のほうが請求を読みやすく、安く収まる場合があると考えられる。ただしPlanetScaleの単一ノードはレプリカのない1台で、止まったときの備えはNeonとは作りが違う（次の節）。
:::

## ブランチの意味が違う

:::fact
Neonの公式ドキュメントによれば、ブランチは「データのコピーオンライトの複製」で、現在または過去の任意の時点から作れ、既定では親ブランチのデータをすべて含む。ブランチを作っても親の負荷は増えず、書き込みは差分として保存される。機密データのためにスキーマだけのブランチも作れる。Managed Better Authの利用者とセッション、Object Storage、Functions、AI Gatewayもデータと一緒にブランチする。料金ページによれば、子ブランチのストレージは書き込んだ分だけ増え、0ドルから始まる。

PlanetScaleの公式ドキュメント（Postgres）によれば、ブランチは「完全に分離されたデータベース」で、ブランチ間でデータの複製はない。ブランチの画面から作るとスキーマもデータも入らない単一ノードの開発ブランチ（PS-DEV、月5ドルから）になり、データ込みのブランチはバックアップから復元して作る（クラスターの大きさと費用は親の本番ブランチを引き継ぐ）。ブランチ間でスキーマの変更を自動でマージする手段は「現時点ではない」。製品の比較表はPostgresを「スキーマとデータのブランチ」と書き、スキーマ変更をレビューして本番へ送る「デプロイリクエスト」はMySQL互換のVitessだけにあるとしている。
:::

:::guess
同じ「ブランチ」という言葉でも、Neonではデータの時点を切り出す操作、PlanetScaleのPostgresでは別のデータベースを1つ増やす操作に近いとみられる。プレビュー環境ごとに本番に近いデータを置きたい、エージェントに過去の状態へ戻させたい、という使い方ではNeonのブランチが向くと考えられる。PlanetScaleのPostgresでは、ブランチはマイグレーションを流す空の器として使い、データの扱いはバックアップの復元で明示的に行う運用になると推測される。本番のデータを開発に持ち込まないことを方針にしているチームには、こちらのほうが分かりやすい面もある。
:::

## 高可用性と、大きくなったときの上限

:::fact
Neonの公式ドキュメント「The lakebase architecture」によれば、計算ノードは標準のPostgresで、ストレージ層ではSafekeeperの定足数がPaxosプロトコルでWALを承認した時点でコミットとなり、ページサーバーが必要な版のページを組み立て、オブジェクトストレージが長期の履歴を持つ。料金ページは、全プランが複数のアベイラビリティゾーンにまたがるストレージ（「スタンバイなしの高可用性」）を含むと書く。計算資源の上限は、FreeでCU 2（8GBメモリ）、Launchで16CU（64GB）、Scaleで自動伸縮16CUまたは固定56CU（224GB）。ゼロへの縮小は16CUまでの計算資源だけで使え、それより大きいものは常時稼働になる。読み取りレプリカは別の計算資源として全プランで使え、CU時間に数えられる。

PlanetScaleの公式ドキュメントによれば、Postgresの高可用構成は1つのプライマリと2つのレプリカを3つのアベイラビリティゾーンに置く。単一ノードからは画面の操作で2つのレプリカを足して高可用構成に移れる。最大の型番はPS-2560（32 vCPU・256GiB、x86の3ノードで月5,599ドル）で、ローカルNVMeのMetalも選べる。1つのクラスターを超える規模には、シャーディングしたPostgresの「Neki」を用意しているが、公式ドキュメントによればNekiはプラットフォームプレビュー中の「ベータ機能」でSLAの対象外であり、公式ブログ（2026-09-10）は「プレビューの間は本番のワークロードを動かすべきではない」と書く。
:::

:::guess
高可用性の作り方は、両社の設計思想の違いがいちばんはっきり出る場所とみられる。Neonは計算資源を使い捨てにし、データの耐久性をストレージ層の合意に任せることで、待機系を持たずに可用性を作る。止まっている計算資源を起こす数百ミリ秒の待ちと引き換えに、費用を使用量に連動させる設計と推測される。PlanetScaleは、常に動いている3台のPostgresと自動フェイルオーバーで可用性を作り、その台数分の費用を月額で受け取る。単一のマシンを超える規模の受け皿としては、PlanetScaleのNekiが正式版になるかどうかが、今後の比較の大きな分かれ目になると考えられる。
:::

## リージョンと、日本からの距離

:::fact
Neonの公式ドキュメント「Regions」（2026-11-02時点）は、AWSの8リージョン（バージニア、オハイオ、オレゴン、フランクフルト、ロンドン、シンガポール、シドニー、サンパウロ）を挙げ、東京はない。Azureの3リージョンは非推奨で新規作成できず、90日以上使われていないFreeのプロジェクトは2026年10月5日以降削除の対象になると書く。Object Storage、Functions、AI Gatewayなどのバックエンド機能は、シンガポールを含む4リージョンで先に提供されている。リージョンは作成後に変えられない。

PlanetScaleの公式ドキュメント「Selecting a region」は、AWSの12リージョン（東京を含む）、Google Cloudの7リージョン（ソウルを含む）、Azureの3リージョンを挙げる。リージョンは作成後に変えられず、移すにはダンプと復元が必要。pricing.md の東京版では、単一ノードのPS-5が月5ドル、PS-10がArmで月14ドル、高可用のPS-10がArmで月41ドルと、バージニア（10ドルと30ドル）より高い。ストレージの単価もバージニアの1GB月0.125ドルに対し、東京は0.15ドルだった。
:::

:::guess
日本国内のサーバーから使う場合、同じ国にデータベースを置けるのはPlanetScaleだけになる。東京の単価はやや高いが、応答のたびに国境を越える往復がなくなる効果は、クエリの多いアプリほど大きいと考えられる。Neonを日本から使う場合はシンガポールが最寄りで、アプリの実行環境も同じリージョンに寄せる設計が前提になるとみられる。
:::

:::pull
Neonの料金表は「止まっている時間」に値段を付けず、PlanetScaleの料金表は「止まらないこと」に値段を付けている。
:::

## 相手をどう語っているか

PlanetScaleは公式ページの中でNeonに何度も触れている。当サイトが閲覧日に確認した範囲では、NeonのサイトマップにPlanetScaleを扱う比較ページは見当たらなかった。PlanetScale側の記述は、競合が自社の条件で測った結果として割り引いて読む必要がある。

:::fact
- PlanetScaleの「Benchmarks」ページは、3ノードHAのM-320（4 vCPU・32GB）が約1万8,000QPSで月1,349ドル、Neon Lakebaseが約1万2,500QPSで月2,768ドルと載せる。PlanetScaleの社内ツールによる計測で、方法やコスト計算の誤りの指摘を benchmarks@planetscale.com で受け付けると書いている。
- PlanetScaleの公式ドキュメントには「Migrate from Neon to PlanetScale」があり、Postgresの論理レプリケーションで止めずに移す手順を載せる。手順の中で、Neon側で論理レプリケーションを有効にすると「既存の接続がすべて切れ、すべての計算資源が再起動する」というNeonの画面の警告に注意するよう書く。Neonの公式ドキュメントは、Neonから外へ論理レプリケーションしている間は購読側がつながっている限り計算資源がゼロに縮まないと書いている。
- PlanetScaleの公式ドキュメントは、Neonのサーバーレスドライバー（@neondatabase/serverless）をPlanetScale Postgresで使う方法を載せ、TCPの接続や接続プールを保てない環境（Netlify Functions、Deno Deploy、Hyperdriveなしの Cloudflare Workers）に勧めている。VercelやAWS Lambdaでは、通常の pg とPgBouncerを勧める。
- PlanetScale for Postgresの正式版の発表（2025-09-22）は、顧客の移行事例の1つとして「Why We Migrated from Neon to PlanetScale」という題の記事へのリンクを載せている。
:::

:::guess
PlanetScaleのベンチマークは、3ノードの高可用構成を常時動かす条件での比較で、Neonが得意とする「止まっている間は払わない」使い方は測っていないとみられる。大きく常時忙しいデータベースではPlanetScaleの主張が当てはまりやすく、小さく断続的なデータベースではこの表の月額はそのまま当てはまらないと考えられる。一方、PlanetScaleがNeonのドライバーを公式にサポートし、Neonからの移行手順まで用意していることは、Neonで育ったデータベースが大きくなったときの受け皿を意識していることの表れと読める。
:::

## どちらを選ぶと合いやすいか

ここからは、上の表と条件を当サイトが読んだうえでの整理だ。優劣を付けるものではなく、用途ごとに、どの条件が効いてくるかを示す。

:::guess
- お金をかけずに試したい、授業や個人の試作で使いたいなら、Neonが合いやすいとみられる。カードなしで100プロジェクトまで作れ、上限に達してもデータは消えない。
- AIエージェントや自社のサービスが、利用者ごとにデータベースを大量に作る設計なら、Neonの料金の形が向いていると考えられる。PlanetScaleは請求がデータベース単位で、1つにつき最低月5ドルかかる。
- プレビュー環境ごとに本番に近いデータを持たせたい、過去の時点に戻したいという開発の流れを重視するなら、Neonのコピーオンライトのブランチが便利とみられる。
- 毎日ずっとクエリを受ける本番のアプリを、月額を固定して小さく始めたいなら、PlanetScaleの単一ノード（月5〜10ドル）が分かりやすい。必要になったら同じ画面で3ノードの高可用構成に移れる。
- 日本の利用者向けで、データベースを国内に置きたい場合は、東京リージョンのあるPlanetScaleが候補になる。Neonは最寄りがシンガポールだ。
- 常時高い負荷がかかる、単一のマシンの限界に近づいている、MySQL（Vitess）とPostgresを同じ会社で扱いたいというチームには、PlanetScaleのMetalやNeki、Vitessの選択肢が効いてくると推測される。ただしNekiはまだ本番向けではない。
- Postgres 14〜16を使い続けたい場合はNeonが対応している。PlanetScaleのPostgresは17と18だけで、メジャーバージョンの更新は新しいデータベースへの移行になる。
- 認証、オブジェクトストレージ、関数までデータベースと一緒にブランチさせたいなら、それらを1つの料金表に持つNeonが合うとみられる。PlanetScaleはデータベースに絞り、アプリの実行環境はCloudflareなど他社と組む立場をとっている。
:::

## なぜ料金の形が違うのか

:::fact
[Neonの解剖記事](/ja/articles/neon)でも取り上げたとおり、NeonはDatabricksの一員で、料金ページは自らを「Databricksによる、Lakebase Postgresを中核にしたバックエンドの部品一式」と説明する。公式ドキュメントによれば、Neonは計算と保存を切り離し、計算ノードはいつでも縮み、再起動できる。PlanetScaleは2024年3月6日の公式ブログで「利益を出すことを優先する」と宣言して無料プランを廃止し、「成長を続けるために無料のリソースを際限なく配る必要はない」と書いた。2025年11月14日には月5ドルの単一ノードを世界中の基盤で提供し終えたと発表している。
:::

:::guess
計算と保存を切り離したNeonにとって、止まっている計算資源は誰のものでもなく、原価もほとんどかからないとみられる。だから止まっている時間に値段を付けず、無料枠を広く配り、Databricksの製品群への入口として育てる戦略が成り立つと推測される。PlanetScaleは、実際に3台のPostgresを動かし続け、ローカルのNVMeを顧客ごとに確保して性能を約束する。原価が箱の大きさに比例する以上、箱の大きさで月額を決めるのは自然な形と考えられる。無料枠をなくしたのは、使われていない箱にも原価がかかる構造で、利益を優先した結果と読める。

ただし両社は近づいてもいる。Neonは固定サイズの56CUまでの計算資源と常時稼働の設定を持ち、PlanetScaleは5ドルの入口と月の途中のミリ秒単位の日割りで、小さく始める人に歩み寄った。両社の境界は、エージェントが作る大量の小さなデータベースと、成長して止められなくなった大きなデータベースのあいだに引かれつつあるとみられる。
:::

NeonとPlanetScaleは、同じPostgresを別の約束で売っている。Neonは、使わなかった時間には払わなくてよいと約束する。PlanetScaleは、大きくなっても乗り換えなくてよいと約束する。選ぶ側が見るべきなのは、データベースが一日のうちどれだけ眠っているか、そしていくつのデータベースを持つことになるかだ。その答えが決まれば、2社の表のどの行を読めばよいかは自然に決まる。
