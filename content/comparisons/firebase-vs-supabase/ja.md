---
title: "Firebase と Supabase の比較 — 回数で払うバックエンドと、箱の大きさで払うバックエンド。料金の単位・請求の止め方・データベースを公式ページで並べる"
description: "FirebaseとSupabaseを、公式ページ（2026-11-02閲覧）だけを根拠に比較する。Firebaseは読み書きの回数に応じて従量で払い、基本料金がない。Supabaseは月25ドルのProと、インスタンスの大きさを選ぶコンピュートで払う。無料枠、請求を止める仕組み（Firebaseのspend capsとSupabaseのSpend Cap）の対象の違い、NoSQLとPostgres、東京リージョン、セルフホスト、製品の終了予定まで並べ、どんなアプリにどちらが合いやすいかを整理する。"
lead: "アプリのバックエンドを自分で持たずに済ませたいとき、最初に比べられるのがFirebaseとSupabaseだ。機能の一覧はよく似ている。認証、データベース、ファイル保管、関数、リアルタイム配信。ただし請求書の作られ方がまるで違う。Firebaseはコードが何回読んだかで払い、Supabaseはどの大きさの箱を借りたかで払う。公式ページを2026年11月2日に読み直し、この違いが無料枠、請求の止め方、データの持ち方、将来の出口にどう響くかを横に並べる。"
slugA: "firebase"
slugB: "supabase"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2027-02-01"
    claim: "Firebaseのspend capsが公開プレビューのままか、対象サービスにFirestore・Realtime Database・Cloud Storageが加わっていないか"
  - date: "2027-03-22"
    claim: "Firebase Studioの終了日（2027年3月22日）に変更がないか"
  - date: "2027-03-31"
    claim: "Firebase Extensionsの終了日（2027年3月31日）に変更がないか"
  - date: "2027-06-15"
    claim: "Firebase MLの終了日（2027年6月15日）に変更がないか"
  - date: "2027-09-30"
    claim: "Firebase Test Labの終了日（2027年9月30日）に変更がないか"
sources:
  - label: "Firebase公式: Pricing"
    url: "https://firebase.google.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase pricing plans"
    url: "https://firebase.google.com/docs/projects/billing/firebase-pricing-plans"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Spend caps"
    url: "https://firebase.google.com/docs/projects/billing/spend-caps"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Avoid surprise bills"
    url: "https://firebase.google.com/docs/projects/billing/avoid-surprise-bills"
    accessedAt: "2026-11-02"
  - label: "Firebase公式: FAQ（Blazeの上限・サポート）"
    url: "https://firebase.google.com/support/faq"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Understand Cloud Firestore billing"
    url: "https://firebase.google.com/docs/firestore/pricing"
    accessedAt: "2026-11-02"
  - label: "Google Cloud: Firestore pricing（東京の単価）"
    url: "https://cloud.google.com/firestore/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Choose a database"
    url: "https://firebase.google.com/docs/firestore/rtdb-vs-firestore"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase SQL Connect"
    url: "https://firebase.google.com/docs/sql-connect"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: SQL Connect pricing"
    url: "https://firebase.google.com/docs/sql-connect/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase Security Rules"
    url: "https://firebase.google.com/docs/rules"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: About App Hosting（リージョン）"
    url: "https://firebase.google.com/docs/app-hosting/about-app-hosting"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Cloud Functions locations"
    url: "https://firebase.google.com/docs/functions/locations"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Cloud Firestore locations"
    url: "https://firebase.google.com/docs/firestore/locations"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Cloud Storageの変更に関するFAQ"
    url: "https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase AI Logic"
    url: "https://firebase.google.com/docs/ai-logic"
    accessedAt: "2026-11-02"
  - label: "Firebase公式: Release Notes（各製品の終了告知）"
    url: "https://firebase.google.com/support/releases"
    accessedAt: "2026-11-02"
  - label: "Supabase公式: Pricing & Fees"
    url: "https://supabase.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Supabase公式ドキュメント: Control your costs（Spend Capの対象）"
    url: "https://supabase.com/docs/guides/platform/cost-control"
    accessedAt: "2026-11-02"
  - label: "Supabase公式ドキュメント: Manage Compute usage"
    url: "https://supabase.com/docs/guides/platform/manage-your-usage/compute"
    accessedAt: "2026-11-02"
  - label: "Supabase公式ドキュメント: Architecture"
    url: "https://supabase.com/docs/guides/getting-started/architecture"
    accessedAt: "2026-11-02"
  - label: "Supabase公式ドキュメント: Row Level Security"
    url: "https://supabase.com/docs/guides/database/postgres/row-level-security"
    accessedAt: "2026-11-02"
  - label: "Supabase公式ドキュメント: Realtime"
    url: "https://supabase.com/docs/guides/realtime"
    accessedAt: "2026-11-02"
  - label: "Supabase公式ドキュメント: Available regions"
    url: "https://supabase.com/docs/guides/platform/regions"
    accessedAt: "2026-11-02"
  - label: "Supabase公式ドキュメント: Self-Hosting"
    url: "https://supabase.com/docs/guides/self-hosting"
    accessedAt: "2026-11-02"
  - label: "Supabase公式: Supabase vs Firebase（Supabase側の比較ページ・2025-08-20）"
    url: "https://supabase.com/alternatives/supabase-vs-firebase"
    accessedAt: "2026-11-02"
  - label: "Supabase公式ブログ: Series F"
    url: "https://supabase.com/blog/supabase-series-f"
    accessedAt: "2026-11-02"
  - label: "GitHub: supabase/supabase"
    url: "https://github.com/supabase/supabase"
    accessedAt: "2026-11-02"
---

[Firebase](/ja/articles/firebase)と[Supabase](/ja/articles/supabase)は、どちらも「サーバーを持たずにアプリのバックエンドを用意するサービス」として並べられる。Supabase自身も、公式の比較ページを持ち、アーキテクチャ文書で「Firebaseと1対1の対応ではない」と書いている。機能の名前は似ているが、料金表の行を読むと、課金の単位が別物だと分かる。この記事は、両社の公式ページを2026年11月2日に読み、書かれている数字と条件をそのまま並べる。当サイトは両サービスを運用した体験を書いているのではなく、公開されている料金表とドキュメントを突き合わせている。料金は改定されるので、選ぶ前に必ず公式ページを確認してほしい。金額はどちらも公式ページのドル表記で、税の扱いは両社の料金表の金額からは読み取れなかった。Supabaseの比較ページは競合側が書いたものなので、本記事ではSupabaseが自社の製品について述べている部分だけを根拠に使う。

## 料金の単位を並べる

:::fact
Firebaseの料金ページ（Firestore Standard edition）とSupabaseの料金ページ（いずれも2026-11-02閲覧）から、主な項目を並べる。

| 項目 | Firebase | Supabase |
| --- | --- | --- |
| 有料プランの形 | Blaze。基本料金なしの従量 | Pro 月25ドルから、Team 月599ドルから、Enterpriseは個別 |
| データベースの課金単位 | 読み書き削除の回数、保存量、転送量 | インスタンスの大きさ（コンピュート）、ディスク量、転送量 |
| データベースの主な単価 | Firestoreの東京で10万件あたり読み取り0.038ドル、書き込み0.115ドル、削除0.013ドル | 月額でMicro 10ドル、Small 15ドル、Medium 60ドル、Large 110ドル。Proの8GB超のディスクは1GB 0.125ドル |
| APIリクエスト | Firestoreは読み書きとして課金 | 無制限（Free） |
| 認証 | 5万MAUまで無料、その先はGoogle Cloudの料金 | Free 5万MAU、Pro 10万MAU、超過は1MAU 0.00325ドル |
| ファイル保管 | Blaze必須。新形式バケットは5GB月まで無料、その先はCloud Storageの料金 | Free 1GB、Pro 100GB、超過は1GB 0.0213ドル |
| 関数 | Blaze必須。200万回/月まで無料、超過は100万回0.40ドルとCPU・メモリの料金 | Free 50万回、Pro 200万回、超過は100万回2ドル |
| リアルタイム | Firestoreはリスナーの更新が読み取りとして課金 | Free 同時200接続・200万メッセージ、Pro 同時500接続・500万メッセージ、超過は1,000接続10ドル、100万メッセージ2.50ドル |
| 転送 | Firestoreは10GiB/月まで無料、その先はGoogle Cloudの料金 | Free 5GB、Pro 250GB、超過は1GB 0.09ドル。キャッシュ済みは別枠で超過1GB 0.03ドル |

Supabaseの有料プランには毎月10ドルのコンピュートクレジットが付き、Microインスタンス1つ分をまかなう。2つ目以降のプロジェクトは月10ドルからで、組織にプロジェクトを足すたびにコンピュートが増える。Firebaseは料金をプロジェクト全体に適用し、同じプロジェクト内のアプリの利用をすべて合算する。
:::

:::guess
料金表の形から、請求の増え方の違いを次のように読める。Firebaseの請求はアプリの動きに比例する。使われていなければほぼ0ドルで、人気が出れば線形に増え、設計を変えれば同じ利用者数でも桁が変わる。Supabaseの請求は階段状で、箱の中に収まっている間はクエリを何回投げても同じ金額だが、箱が足りなくなると次の段へ上がる。当サイトの[Firebaseの解剖記事](/ja/articles/firebase)の試算では、1日1万人が1人200読み取り・20書き込みするアプリのFirestore費用は東京で月28ドルほどだった。この規模なら両社の金額はあまり違わないとみられる。差が出るのは、同じ1万人が読み取りを10倍に増やしたとき（Firestoreは月234ドルほど）と、利用者がほとんどいない時期（Firebaseは0ドル、SupabaseのProは月25ドル）だと考えられる。
:::

## 無料枠はどこで終わるか

:::fact
両社の無料プランの終わり方は異なる。

| 項目 | Firebase Spark | Supabase Free |
| --- | --- | --- |
| データベース | Firestore 1GiB（読み取り5万/日、書き込み2万/日） | Postgres 500MB（共有CPU、メモリ500MB） |
| 使えないもの | Cloud Storage、Cloud Functions、App Hosting | 画像変換 |
| 使わないとき | 休止の記載は確認できなかった | 1週間活動がないプロジェクトは一時停止 |
| プロジェクト数 | 確認した料金ページに上限の記載なし | 有効なものは2つまで |
| 超えたとき | FAQによれば、その暦月の残りの間アプリが止まる（Firestoreの無料枠自体は毎日リセット） | 下の「Spend Cap」の節を参照 |

Firebaseの場合、Cloud Storageは2026年2月3日からBlazeが必須になった。ファイルのアップロードを扱うアプリは、Sparkのままでは作れない。一方のSupabase FreeにはStorageと関数が含まれる。
:::

:::guess
個人の試作という同じ用途でも、制約の出方は反対だとみられる。Firebaseは放置に強く、機能に弱い。写真のアップロードや関数を使わなければ、誰も使っていないアプリを置いておける。Supabaseは機能に強く、放置に弱い。1つの無料プロジェクトで認証、ファイル、関数まで試せるが、1週間触らなければ止まる。趣味のアプリを長く置きたいのか、1つのアイデアを短い期間で一通り作りたいのかで、向く側が変わると考えられる。
:::

## 請求を止める仕組み

どちらの製品にも、名前の似た「上限」がある。ただし対象がほぼ逆だ。

:::fact
Firebaseのspend capsは2026年9月14日に発表された公開プレビューで、サービスごとに月の予算を決めると、100%で新しい利用が月末まで止まる。対象はFirebase AI Logic、App Hosting、Cloud Functions、Extensions。FAQは「それ以外の有料枠のある製品には、Blazeでは上限を掛けられない」と書き、Firestore、Realtime Database、Cloud Storageなどはアラートのみになる。公式は「hard capではない」と明記し、報告の遅延の間に発生した超過分は通常どおり請求される。

Supabaseの料金ページによれば、ProプランのSpend Capは既定で有効だ。公式ドキュメントによれば、オンのときはプランの枠を超えた項目の利用が次の請求周期まで止まり、超過分の請求は発生しないが、枠を超え続けるとFair Use Policyに従って制限される。対象は、ディスク量、転送量、関数の呼び出し、ログ、MAU、Realtimeのメッセージと同時接続、画像変換、ストレージ量。対象外は、コンピュート、ブランチやリードレプリカのコンピュート、独自ドメイン、追加のIOPS・スループット、IPv4、Log Drain、電話のMFA、PITR。公式は対象外の理由を「予測でき、利用者が明示的に選んだ項目」と説明する。Spend Capは組織単位で、項目ごとの予算設定や到達時の通知はできないとも書いている。
:::

:::fact
並べると次のようになる。

| 項目 | Firebase spend caps | Supabase Spend Cap |
| --- | --- | --- |
| 既定の状態 | 自分で設定する | Proで有効 |
| 単位 | プロジェクト × サービス、金額で指定 | 組織全体のオン/オフ |
| データベースの従量分 | 対象外 | ディスク量は対象。コンピュートは選んだ分の固定額 |
| 関数とAI | 対象 | 関数は対象。AIのAPI費用はSupabaseの料金表の外 |
| 到達時 | そのサービスを月末まで停止、手動で解除できる | 該当項目の利用を次の周期まで止める。オフにすれば従量で継続 |
| 通知 | 50%、80%、100%でメール | 特定の金額に達したときの通知はできないと記載 |
:::

:::pull
Firebaseは止まらない製品の上に遮断器を足し始めた。Supabaseは止まる製品の上に、外すスイッチを置いた。
:::

:::guess
既定で止まるSupabaseは請求の事故に強く、利用の急増には弱いとみられる。放送やセールで人が集まった瞬間に枠を超えれば、機能が止まる。止めないためにはSpend Capをオフにして、その時点から従量の請求を受け入れることになる。Firebaseは逆で、Blazeのデータベースは止まらないので急増には強いが、バグのループが読み取りを続けても遮断されない。Firebaseを使う個人開発者が取れる手当ては、アラートのみの予算に加えて、`limit` の徹底、Emulator Suiteでの検証、予算通知からの課金無効化など、自分で組み立てるものになると考えられる。
:::

## データベースの設計

:::fact
Supabaseのアーキテクチャ文書は「NoSQLストアではなくPostgresを使う。この選択は意図的だ」と書く。すべてのプロジェクトが専用のPostgresを持ち、PostgRESTとpg_graphqlがREST APIとGraphQL APIを提供する。Firebaseの中心はCloud Firestoreで、データはコレクションとドキュメントで持ち、クエリはドキュメント単位で返す。公式の比較ページは、Firestoreのオフライン対応をApple・Android・Webで標準提供としている。Realtime Databaseはさらに古いJSONツリー型だ。

FirebaseにもPostgresの選択肢はある。SQL Connect（2026年4月にData Connectから改名）は、Cloud SQL for PostgreSQLの上でGraphQLでスキーマとクエリを定義し、型付きのSDKを生成する。費用は操作回数（Blazeで25万回/月まで無料、超過は100万回0.90ドル）とCloud SQLインスタンス（月9.37ドルから、3カ月の無料試用あり）の2本立てで、行の読み取り料金はない。

リアルタイムについて、SupabaseはBroadcast、Presence、Postgres Changesの3機能を持つ。Firestoreはクエリの結果を購読するリスナーが標準機能で、更新が読み取りとして課金される。Presenceは、FirebaseではRealtime Databaseの機能で、Firestoreは標準では持たない。オフラインについて、Supabaseの比較ページは「オフラインアクセスには独自のキャッシュ戦略が要る」と自社の側で書いている。
:::

:::guess
ここでの分かれ目は、データの形より先に、問いがいつ決まるかだとみられる。Firestoreは「この画面はこのドキュメントを読む」と決まっているアプリで強く、モバイルのオフライン同期まで標準で付く。後から「先月の売上を地域別に」のような横断の問いが出ると、非正規化やBigQueryへの書き出しが要る。Postgresは問いが後から増えるアプリで強く、SQLで書けば済むことが多い。その代わり、オフライン同期は自分で用意する。AIコーディングツールに任せる場合は、どちらにもMCPサーバーがあり、どちらが有利とは一概に言えないが、Supabaseは新規データベースの60%超が何らかのAIツールによって作られていると発表している。
:::

## 権限の書き方

:::fact
Firebaseのアクセス制御はSecurity Rulesで、Firestore、Realtime Database、Cloud Storageに対して専用の言語で書く。公式の比較ページによれば、Firestoreのルールは原則としてカスケードせず、Realtime Databaseのルールはカスケードする。サーバーSDKからのアクセスはIAMで守られる。Firestoreのルールで `get()` や `exists()` を使うと、読んだドキュメント分の読み取りが課金される。

SupabaseのアクセスのしくみはPostgresのRow Level Securityで、SQLのポリシーとして書く。公式ドキュメントは「公開されたスキーマのテーブルにRLSがなければ、権限を持つどのロールからも読み書きできる。公開スキーマのすべてのテーブルでRLSを有効にすること」と警告している。
:::

:::guess
どちらもクライアントからデータベースへ直接触る設計で、そのため権限の記述が設計の中心になる。書き忘れたときの壊れ方はどちらにも起きうるので、選ぶ基準にはなりにくいとみられる。違いが出るのは検査の方法で、RLSはSQLのテストや既存のPostgresの知識を流用でき、Security RulesはEmulator Suiteで検証する。チームにSQLの経験があるかどうかが判断材料になると考えられる。
:::

## 配信、東京、セルフホスト

:::fact
日本からの距離に関わる項目を並べる。

| 項目 | Firebase | Supabase |
| --- | --- | --- |
| データベースの東京 | Firestoreは asia-northeast1（東京）、大阪も選べる | ap-northeast-1（東京）を選べる |
| 関数の東京 | Cloud Functionsは asia-northeast1 に置ける | Edge Functionsの実行場所は今回未確認 |
| SSRのWebアプリ配信 | App Hosting。リージョンは米国3、台湾、シンガポール、オランダで、日本はない | 確認した料金表にSSRアプリの配信の項目はない |
| 実行基盤 | Google Cloud | AWS |
| セルフホスト | Supabaseの比較ページは「サポートされない」と記載 | Dockerで可能。ブランチ、管理されたバックアップとPITRなどは使えないと記載 |
| ソースの公開 | 確認していない | 公式文書に「すべてオープンソース」と記載。本体リポジトリはApache-2.0、スター11万4,420（2026-11-02時点） |
:::

:::fact
Firebaseには、Supabaseの料金表にない製品が含まれる。Crashlytics、Cloud Messaging、A/B Testing、Remote Config、App Distributionはモバイルアプリの運用のための機能で、大半が無料で提供される。一方で、Firebaseは2026年にFirebase Studio（2027年3月22日終了）、Extensions（2027年3月31日終了）、Firebase ML（2027年6月15日終了）、Test Lab（2027年9月30日終了）の終了を告知した。公式はFirestore、認証、App Hostingなどの中核は影響を受けないと書く。Supabaseは、2026年6月にSeries Fで5億ドルを調達し（プレ評価額100億ドル）、開発者は約1,000万人と発表している。
:::

:::guess
出口の形も異なるとみられる。SupabaseのデータはPostgresなので、`pg_dump` の感覚で別のPostgresへ持ち出せる見込みが立つ。ただし認証やRLS、Realtimeの設定は別の作業になる。Firestoreのデータ移行はデータモデルの書き直しを伴い、より重くなると考えられる。これは「Firebaseに閉じ込められる」という断定ではなく、Google Cloudの中に残るなら移行の必要自体が小さい、という裏返しでもある。Firebaseの場合に見積もるべきなのは、中核以外の製品が別の看板へ移る可能性だと考えられる。
:::

## どんなアプリにどちらが合いやすいか

ここからは、上の料金表と条件を当サイトが読んだうえでの整理だ。優劣を付けるものではなく、作るものごとに、どの行が効いてくるかを示す。

:::guess
- iOS・Androidのネイティブアプリで、オフラインでも動かしたい場合は、Firebaseが合いやすいとみられる。FirestoreのSDKがオフライン同期を標準で持ち、Crashlytics、プッシュ通知、A/B Testingが無料で同じコンソールに揃う。Supabaseの場合、オフラインとこれらの運用機能は別に用意することになる。
- 管理画面、業務アプリ、SaaSのように、後から集計や検索の問いが増えるWebアプリは、Supabaseが合いやすいとみられる。SQLで書け、読み取り回数が請求に直結しない。東京リージョンも選べる。
- 利用者がまだいない個人の試作で、固定費を0にしたい場合は、どちらも無料で始められる。ファイルのアップロードや関数が要るならSupabase Freeの範囲が広く、長く放置したいならFirebase Sparkが扱いやすいと考えられる。
- 毎月の金額を読めるようにしたい場合は、Supabase Proの階段状の料金が合いやすいとみられる。逆に、利用がほとんどない期間が長く、当たれば伸びるアプリは、基本料金のないBlazeが合いやすい。ただしBlazeのデータベースには上限が掛からないことを織り込む必要がある。
- テレビや広告で利用が瞬間的に跳ねるアプリは、Firestoreの自動拡張の説明が当てはまりやすい。Supabaseでは事前にコンピュートを上げるか、Spend Capをオフにする運用になると考えられる。
- Next.jsのSSRを日本の利用者に配信したい場合は、App Hostingに日本のリージョンがないことを確認しておきたい。データをFirestoreの東京に置くなら、配信は別のサービスを選ぶ構成も考えられる。Supabaseの料金表にもSSRアプリの配信の項目はなく、配信は別のサービスと組み合わせる形になるとみられる。
- 既にGoogle Cloudを使っている会社、またはGeminiをモバイルアプリから直接呼びたいチームには、同じ請求とIAMに載るFirebaseが合いやすいとみられる。AI LogicのクライアントSDKとApp Checkがこの用途のために用意されている。
- 規制や社内ルールでインフラを自分で持つ必要があるなら、Dockerでセルフホストできる点でSupabaseが候補に残る。機能の一部は使えないことを確認してほしい。
:::

## なぜ請求の形が違うのか

:::guess
違いは、両社が何を売っている会社かから説明できるとみられる。Firebaseは、Google Cloudの部品を使いやすくした受付で、[解剖記事](/ja/articles/firebase)で見たとおり、料金表の先はGoogle Cloudの従量料金に続いている。クラウドの標準的な売り方が「使った分だけ」である以上、Firebaseの請求もその形になる。基本料金がなく、止まらず、規模の上限を意識させないのは、この基盤を受け継いでいるからだと考えられる。

Supabaseは、[解剖記事](/ja/articles/supabase)のとおりPostgresを中心に既製のOSSを束ねた製品で、プロジェクトごとに専用のPostgresを動かす。動いている箱の費用はクエリの回数にかかわらず発生するので、料金は箱の大きさとサブスクリプションになる。公式文書が「すべてオープンソース」と書くのも、Postgresの標準性をそのまま価値にしている点と同じ根から来ていると推測される。

2社は互いに近づいている。FirebaseはSQL ConnectでPostgresを取り込み、Firestore EnterpriseでMongoDB互換とインデックス任意のクエリを足し、spend capsで請求に止める場所を作り始めた。Supabaseは新規データベースの多くがAIツール経由で作られる製品になった。それでも請求書の作られ方が変わらないのは、それぞれの土台が変わらないからだとみられる。
:::

FirebaseとSupabaseは、同じ機能の一覧を別々の土台の上に並べている。Firebaseは回数で払い、Googleの基盤の上でほぼ止まらずに伸びる。Supabaseは箱で払い、Postgresという持ち運べる標準の上に立つ。選ぶ側が見るべきなのは機能の表の丸の数ではなく、自分のアプリのアクセスが、回数と箱のどちらで読みやすいかだ。オフラインで動くモバイルアプリか、問いが増え続けるWebアプリか。請求の事故を恐れるのか、止まることを恐れるのか。その答えが決まれば、2つの料金表のどちらの行を読むべきかはおのずと決まる。
