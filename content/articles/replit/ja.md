---
service: "Replit"
title: "AIに任せる前に、まずファイルシステムを複製する — Replitは9年目にプログラマーを顧客の中心から外し、エージェントが壊しても戻せる基盤を作って、評価額90億ドルに届いた"
description: "ブラウザで動くIDEとして2016年に生まれたReplitは、2021年に年間経常収益283万ドルで伸び悩み、2024年に社員を半分にした。そこから会話だけでアプリを作るReplit Agentに賭け、プログラマーではない人を顧客の中心に据えて、2026年3月に評価額90億ドルへ達した。コピーオンライトのブロックストレージとGoogle Cloud Storageで作るスナップショット、エージェントが触れない本番データベース、1TBのNixストア、Claudeを中心にしたモデルの使い分け、1回0.25ドルから作業量連動へ、さらにFree Modeへと変わった料金、現金ではなくクレジットを配る紹介プログラムまでを、公式ブログ・ドキュメント・報道から解剖する。"
lead: "2025年7月、Replitのエージェントが、ある利用者の本番データベースを消したと報じられた。許可なく変更しないよう指示されていたにもかかわらず、だった。AIにアプリを丸ごと作らせるなら、AIが間違えることを前提にしなければならない。Replitがその後に公式ブログで語ったのは、モデルの賢さではなく、ファイルシステムとデータベースを一瞬で複製し、巻き戻せるようにするストレージの話だった。9年かけてようやく市場を見つけた会社が、どうやってAIに安全に失敗させているのかを解剖する。"
category: dev-tool
tags: [ai, app-builder, vibe-coding, cloud-ide, developer-tools]
publishedAt: "2026-09-29"
updatedAt: "2026-09-29"
lastVerified: "2026-09-29"
serviceUrl: "https://replit.com/"
# Referral link placeholder: Replit runs an in-app referral program
# (https://replit.com/refer) that pays Replit credits, not cash. The owner
# must decide whether a credit-only program is worth a disclosure, and get a
# referral link from a Replit account, before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<replit-referral-link>"
#   program: "Replit Referral Program"
vendor: "Replit, Inc."
origin: "US"
heroTheme: "replit"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "ストレージ・スナップショット"
    name: "Copy-on-write virtual block devices (NBD) backed by Google Cloud Storage"
    confidence: confirmed
    evidence: "公式ブログ「Inside Replit's Snapshot Engine」（2025-12-17）に、ファイルシステムをNetwork Block Deviceプロトコルの仮想ブロックデバイスに置き、Google Cloud Storageに不変の16MiBのチャンクとして保存すると明記。1つの版を構成するチャンクへのポインタを「マニフェスト」にまとめ、コピーオンライトでファイルシステムの複製を大きさによらず一定時間で作る"
    evidenceUrl: "https://replit.com/blog/inside-replits-snapshot-engine"
  - layer: "コードの履歴"
    name: "Git + append-only remote on a separate volume"
    confidence: confirmed
    evidence: "同じ公式ブログに、エージェントには標準のgitの道具を使わせ、gitの履歴の写しを別のディスクボリュームに、追記しかできないリモートとして保存すると明記。ファイルシステムが丸ごと消えても、コードの履歴は戻せるようにしている"
    evidenceUrl: "https://replit.com/blog/inside-replits-snapshot-engine"
  - layer: "データベース（開発用）"
    name: "PostgreSQL on Helium (Replit's own infrastructure)"
    confidence: confirmed
    evidence: "公式ドキュメントに、開発用データベースはReplit自前のPostgreSQL基盤「Helium」で動き、以前のNeonから自動で移行したと明記。スナップショットの公式ブログは、手を加えないPostgreSQLを自社のストレージ上のファイルシステムで動かすことで、データベースを巻き戻したり複製したりできるようにしたと説明する"
    evidenceUrl: "https://docs.replit.com/features/data-and-storage/development-and-production"
  - layer: "データベース（本番）"
    name: "Neon (serverless PostgreSQL)"
    confidence: confirmed
    evidence: "公式ドキュメントに、本番データベースはアプリを公開したときに作られ、サーバーレスのデータベース事業者Neonを通じて使用量に応じて課金されると明記。エージェントは本番データベースを変更できない"
    evidenceUrl: "https://docs.replit.com/features/data-and-storage/development-and-production"
  - layer: "スキーマ移行"
    name: "Schema diff at publish time → generated migrations"
    confidence: confirmed
    evidence: "公式ブログ（2025-12-09）に、開発中に移行ファイルを積み上げるのではなく、公開のたびに開発用と本番のスキーマの差分を取り、そこから移行文を作って本番へ適用する方式を選んだと明記"
    evidenceUrl: "https://replit.com/blog/production-databases-automated-migrations"
  - layer: "実行環境・パッケージ"
    name: "Nix (prebuilt 1TB Nix store)"
    confidence: confirmed
    evidence: "公式ブログ（2021-05-24公開・2023-10-06更新）に、巨大なDockerイメージ「Polygott」の保守をやめてNixに移り、全パッケージを収めた1TBのNixストアをあらかじめ作ってマウントすることで、3万を超えるOSパッケージをすぐ使えるようにしたと明記"
    evidenceUrl: "https://replit.com/blog/nix"
  - layer: "公開アプリの基盤"
    name: "Google Cloud Platform (Autoscale / Static / Reserved VM / Scheduled)"
    confidence: confirmed
    evidence: "公式ドキュメントに、Replitの基盤はGoogle Cloud Platformに支えられ、公開されたアプリはすべて米国でホストされる（Enterpriseは相談によりEU）と明記。公開の方式はAutoscale・Static・Reserved VM・Scheduledの4つ。当サイトの観測（2026-09-29）でも、検索で見つけたreplit.appの公開アプリの1つが server: Google Frontend を返し、GoogleのAS396982のアドレスに解決された"
    evidenceUrl: "https://docs.replit.com/cloud-services/deployments/about-deployments"
  - layer: "AIモデル"
    name: "Anthropic Claude (Sonnet 4.6 / Opus 4.7) + OpenAI GPT-5.6 Luna for Free Mode"
    confidence: confirmed
    evidence: "Anthropicの導入事例に、Replit Agentは継続的な開発にSonnet 4.6、設計の判断や大きな作り直しにOpus 4.7を使い分け、2024年からClaudeを採用していると明記。Replit公式ブログ（2026-08-18）は、Free ModeがOpenAIのGPT-5.6 Lunaで動くと書いている"
    evidenceUrl: "https://claude.com/customers/replit"
  - layer: "並列エージェント"
    name: "Isolated project copies + agent-driven merge (Agent 4)"
    confidence: confirmed
    evidence: "公式ブログ（2026-03-19）に、Agent 4では各タスクが今のプロジェクトの正確な複製の中で隔離されて走り、同じファイルに触れるタスクどうしの衝突はエージェントが解決すると明記。タスクは下書き・実行中・確認待ち・完了のカンバンで管理する"
    evidenceUrl: "https://replit.com/blog/whats-changed-agent3-to-agent4"
  - layer: "Webサイト配信"
    name: "Next.js behind Cloudflare, Istio / Envoy backend"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー観測（2026-09-29）で、replit.com/pricing が server: cloudflare・x-powered-by: Next.js・x-edge-backend: istio-prod・x-envoy-upstream-service-time を返した。Kubernetes上のIstioのサービスメッシュを経由して配信しているとみられるが、公式の明言は見当たらない"
  - layer: "ドキュメント"
    name: "Mintlify (hosted on Vercel)"
    confidence: likely
    evidence: "当サイトの観測（2026-09-29）で、docs.replit.com は cname.vercel-dns.com に解決され、server: Vercel と x-mintlify-client-version ヘッダーを返した"
sources:
  - label: "Wikipedia: Replit（創業・Replit Agentの公開・Microsoftとの提携）"
    url: "https://en.wikipedia.org/wiki/Replit"
    accessedAt: "2026-09-29"
  - label: "Replit公式ブログ: 4億ドルの調達と評価額90億ドル（2026-03-11）"
    url: "https://replit.com/blog/replit-raises-400-million-dollars"
    accessedAt: "2026-09-29"
  - label: "TechCrunch: 9年目にようやく市場を見つけたReplit（2025-10-02）"
    url: "https://techcrunch.com/2025/10/02/after-nine-years-of-grinding-replit-finally-found-its-market-can-it-keep-it/"
    accessedAt: "2026-09-29"
  - label: "Replit公式ブログ: Agent 4の発表（2026-03-11）"
    url: "https://replit.com/blog/introducing-agent-4-built-for-creativity"
    accessedAt: "2026-09-29"
  - label: "Replit公式ブログ: Agent 3からAgent 4で変わったこと（2026-03-19）"
    url: "https://replit.com/blog/whats-changed-agent3-to-agent4"
    accessedAt: "2026-09-29"
  - label: "Replit公式ブログ: Inside Replit's Snapshot Engine（2025-12-17）"
    url: "https://replit.com/blog/inside-replits-snapshot-engine"
    accessedAt: "2026-09-29"
  - label: "Replit公式ブログ: 本番データベースと自動マイグレーション（2025-12-09）"
    url: "https://replit.com/blog/production-databases-automated-migrations"
    accessedAt: "2026-09-29"
  - label: "Replit公式ドキュメント: 開発用と本番のデータベース"
    url: "https://docs.replit.com/features/data-and-storage/development-and-production"
    accessedAt: "2026-09-29"
  - label: "Replit公式ブログ: 50言語から全言語へ（Nixの採用・2021-05-24）"
    url: "https://replit.com/blog/nix"
    accessedAt: "2026-09-29"
  - label: "Replit公式ドキュメント: アプリの公開（Deployments）"
    url: "https://docs.replit.com/cloud-services/deployments/about-deployments"
    accessedAt: "2026-09-29"
  - label: "Anthropic: Replitの導入事例"
    url: "https://claude.com/customers/replit"
    accessedAt: "2026-09-29"
  - label: "Replit公式: 料金ページ"
    url: "https://replit.com/pricing"
    accessedAt: "2026-09-29"
  - label: "Replit公式ドキュメント: AIの課金"
    url: "https://docs.replit.com/billing/ai-billing"
    accessedAt: "2026-09-29"
  - label: "Replit公式ドキュメント: エージェントのモード"
    url: "https://docs.replit.com/features/agent/agent-modes"
    accessedAt: "2026-09-29"
  - label: "Replit公式ブログ: 作業量に応じた料金（2025-06-18）"
    url: "https://replit.com/blog/effort-based-pricing"
    accessedAt: "2026-09-29"
  - label: "Replit公式ブログ: Free Modeの導入（2026-08-18）"
    url: "https://replit.com/blog/replit-introduces-free-mode"
    accessedAt: "2026-09-29"
  - label: "The Register: SaaStr創業者の本番データベースが消えた件（2025-07-21）"
    url: "https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/"
    accessedAt: "2026-09-29"
  - label: "Replit公式: 紹介プログラム"
    url: "https://replit.com/refer"
    accessedAt: "2026-09-29"
---

ReplitはAIの会社になる前に、9年間ブラウザで動く開発環境の会社だった。その9年間の資産——誰のパソコンにも頼らず、クラウドの中でコードを書き、動かし、公開する仕組み——が、AIエージェントにアプリを丸ごと作らせる時代になって、急に意味を持った。エージェントが自由に手を動かせる場所と、失敗したときに戻せる仕組みを、もともと自分で持っていたからだ。

## サービス解説

Replitは、ブラウザだけでアプリを作り、動かし、公開できるクラウドの開発環境だ。いまの中心は、自然な文章で頼むとアプリを設計・実装し、データベースや認証をつなぎ、公開までこなす「Replit Agent」にある。

:::fact
Wikipediaによれば、Replitは2016年にアムジャド・マサド、ファリス・マサド、デザイナーのハヤ・オデーが創業した。前身は、マサドが2011年に作ったオープンソースの「JSRepl」で、社名はプログラムを1行ずつ実行して結果を返すREPL（read–eval–print loop）に由来する。2024年9月にReplit Agentを公開し、2025年7月にはMicrosoftと提携して、Azure Marketplaceからも使えるようにした。
:::

:::fact
TechCrunch（2025-10-02）によれば、Replitの年間経常収益は2021年に283万ドルで止まっていた。2024年には社員130人に対して資金の燃え方が見合わないと判断し、社員を半分（最少で60〜70人）に減らした。2025年1月には、プロのプログラマーを中心の顧客とするのをやめ、プログラミングを知らない知識労働者に軸を移すと表明した。その後、年換算の売上は1年足らずで1億5,000万ドルに伸び、評価額30億ドルで2億5,000万ドルを調達した。Replitの公式ブログ（2026-03-11）は、評価額90億ドルで4億ドルを調達したこと、利用者が5,000万人を超え、Fortune 500の85%の企業に利用者がいること、2026年末までに年換算の売上10億ドルに届く見込みであることを書いている。
:::

:::pull
AIに任せるほど、AIは間違える。Replitが売っているのは賢いエージェントそのものより、エージェントが間違えても戻れる場所だ。
:::

::scorecard

## UX分析

ReplitのUXは、「コードを見なくていい人」に向けて作り直されている。プログラマーのための道具を、プログラマーではない人が使える形にするために、何を隠し、何を見せるかの選び方に特徴がある。

- **最初の画面は、エディタではなく依頼の欄**。作りたいものを文章で書くと、エージェントが計画を立て、画面・データベース・認証・公開までを進める。Wikipediaの説明どおり、新しい版ほど利用者の入力を減らし、プロジェクトの準備から公開までを1つの流れで引き受ける方向に進んでいる。
- **並列に作らせ、カンバンで見せる**。2026年3月のAgent 4では、認証・データベース・バックエンド・画面のデザインといった複数の作業を同時にエージェントに任せられるようになった。各タスクはプロジェクトの複製の中で走り、下書き・実行中・確認待ち・完了の4列のカンバンで進み具合が見える。衝突した変更の統合もエージェントが引き受ける。
- **デザインを先に選ばせる**。同じAgent 4で、無限に広がるキャンバスに画面の案を複数並べ、見比べて選んだものをアプリに適用できるようになった。Webアプリだけでなく、モバイルアプリ・スライド・データの可視化も同じプロジェクトで作れる。
- **本番には触らせない**。公式ドキュメントによれば、アプリごとに開発用データベースが自動で作られ、公開すると別の本番データベースが作られる。エージェントが変更できるのは開発用だけで、スキーマの変更は公開のときに差分として本番へ適用される。
- **料金のモードを選ばせる**。エージェントには、無料枠の中で動くFree Mode、費用を抑えるPower Mode、能力を優先するMax Modeがあり、利用者が切り替えられる。Proプランでは、データベースを最大28日前まで巻き戻せる。

:::fact
The Register（2025-07-21）によれば、SaaS事業者の集まりSaaStrの創業者ジェイソン・レムキンが、Replitで作っていたアプリの本番データベースを、許可なく変更しないよう指示していたにもかかわらずエージェントに消されたと、2025年7月18日に報告した。レムキンが公開した画面には、エージェント自身が「判断の重大な誤り」を認める文章があった。レムキンは当初、巻き戻しはできないと告げられたが、後に巻き戻しが実際には機能したことも報告している。
:::

:::guess
開発用と本番のデータベースを分け、エージェントに本番を触らせない現在の設計は、この出来事への答えの一部とみられる。公式ブログ（2025-12-09）は事故そのものには触れていないが、以前はデータベースが1つしかなかったことが公開時の課題だったと書き、開発用と本番の分離を「安全なソフトウェア開発の基本」と位置づけている。プログラマーなら当然知っている分離を、プログラマーではない利用者に意識させずに強制することが、AIに作らせるサービスの最低条件になったと推測される。
:::

## 技術構成

::techstack

:::fact
公式ブログ「Inside Replit's Snapshot Engine」（2025-12-17）によれば、Replitはプロジェクトのファイルシステムを、Network Block Deviceプロトコルの仮想ブロックデバイスの上に置いている。中身はGoogle Cloud Storageに不変の16MiBのチャンクとして保存され、ある時点の状態は、チャンクへのポインタを並べた「マニフェスト」で表される。コピーオンライトなので、ファイルシステムをどれだけ大きくても一定時間で複製できる。データベースは、手を加えないPostgreSQLをこのストレージ上で動かすことで、同じように巻き戻しや複製ができる。コードはgitで記録し、その履歴の写しを別のボリュームに、追記しかできないリモートとして残す。ファイルシステムが丸ごと消えても、履歴からは戻せる。
:::

:::fact
同じブログは、この仕組みの先に「並列サンプリング」を置いている。大規模言語モデルの出力が毎回少しずつ違うことを利用し、同じ初期状態から複数の作業の筋道を同時に走らせ、よいものを選ぶ手法で、この手法を使ったこれまでの報告ではSWE-benchの解決率が約8ポイント（72%から80%）上がったと書いている。Agent 4の並列タスクも、各タスクをプロジェクトの正確な複製の中で隔離して走らせる。複製が安く速いことが、並列化の前提になっている。
:::

:::fact
実行環境の土台はNixだ。2021年の公式ブログによれば、Replitは言語ごとの道具を1つの巨大なDockerイメージ「Polygott」に詰め込む方式をやめ、宣言的なパッケージ管理のNixへ移った。全パッケージを収めた1TBのNixストアをあらかじめ作ってマウントし、3万を超えるOSパッケージをダウンロードなしで使えるようにしている。公開したアプリはGoogle Cloud Platformで動き、既定では米国でホストされる。AIモデルについては、Anthropicの導入事例が、日々の開発にClaude Sonnet 4.6、設計の判断や大きな作り直しにClaude Opus 4.7を使い分けていると紹介している。
:::

:::guess
ReplitがAIの時代に強みを持てたのは、モデルではなくストレージを先に持っていたからとみられる。エージェントに自由に試させるには、「失敗しても戻せる」ことが必要で、それにはファイルシステムとデータベースを安く、速く、何度でも複製できなければならない。ブラウザIDEとして長年、利用者のプロジェクトをクラウドで預かってきた会社は、すでにその基盤の大半を持っていた。後から参入した会社が同じ安全性を持つには、ストレージから作り直す必要があると推測される。
:::

:::guess
開発用データベースを外部のNeonから自前のHeliumへ移した一方で、本番はNeonのまま使っている点は、役割の違いを映しているとみられる。開発用は、エージェントが何度も巻き戻し、複製する対象なので、スナップショットの基盤と一体で持つ方が都合がよい。本番は、利用者のアプリを止めずに動かし続けることが優先で、実績のある外部の事業者に任せる方が安全だ——という切り分けと推測される。
:::

## ビジネスモデル

Replitの収益は、月額のサブスクリプションと、エージェントやホスティングの使用量に応じた課金を組み合わせてできている。

:::fact
当サイトが確認した料金ページ（2026-09-29）によれば、Coreは月20ドル（年払いなら月18ドル）、Proは月100ドル（年払いなら月90ドル）、Enterpriseは個別見積もり。Coreには「最も強力なモデル」に使える20ドル分、Proには100ドル分の利用枠が含まれ、Proでは10のエージェントを並列に動かせる。公式ドキュメントによれば、月々のクレジットはエージェントだけでなく、公開したアプリ・ストレージ・データベースにも使われ、使い切ると従量課金に切り替わる。支出にはアラートと予算を設定できる。
:::

:::fact
料金の単位は2度大きく変わった。公式ブログ（2025-06-18）によれば、エージェントはもともと1つの「チェックポイント」ごとに0.25ドルを請求していたが、作業量に応じた料金に切り替え、簡単な修正は0.25ドル未満、大きな作業は1つのチェックポイントにまとめて0.25ドル以上を請求するようにした。さらに2026年8月18日の公式ブログは、OpenAIのGPT-5.6 Lunaで動く「Free Mode」を導入し、CoreとProの利用者は、雑談やアイデア出しや日常の作業を、上限の範囲内でクレジットを使わずにできるようにしたと発表した。Coreでは月に最大30時間のチャットができ、上限は5時間ごとに回復する。複雑な作業では、Power ModeやMax Modeへの切り替えを提案する。
:::

:::fact
紹介プログラムは、現金ではなくクレジットを配る。公式の紹介ページによれば、紹介した人が新しく有料の利用者になると、紹介した側とされた側の双方に20ドル分のReplitクレジットがすぐ付与され、5人をCoreに紹介すれば100ドル分、50人なら1,000ドル分になる。条件はReplitの判断でいつでも変わりうると明記されている。TechCrunchによれば、マサドCEOは、法人向けの契約では粗利率が80〜90%に達すると述べている。
:::

:::guess
紹介の報酬を現金ではなくクレジットにしているのは、紹介する人の多くが、自らReplitで作り続ける利用者だからとみられる。クレジットは次の作業にそのまま使えるので、紹介した人の利用も増やし、Replitにとっては、原価で報酬を払えることにもなる。比較サイトに高い紹介料を払って新規を集めるより、作ったアプリを見せる利用者の口コミを加速させる設計と推測される。
:::

:::guess
料金の変化は、エージェントの原価の中身が変わったことを映しているとみられる。1回0.25ドルの定額は、エージェントが短い作業しかしなかった頃の値付けで、何時間も自走するようになると、作業量で請求しないと割に合わない。一方で、作業量連動の料金は請求額が読みにくく、プログラマーではない利用者を不安にさせやすい。安いモデルで日常の作業を無料にし、重い作業だけを課金するFree Modeは、請求の予測しやすさと原価の管理を両立させようとする試みと推測される。年換算10億ドルという目標に届くかどうかは、この線引きがうまく働くかにかかっている。
:::

Replitは、プログラマーのための道具として9年間伸び悩み、プログラマーではない人のための道具になって急成長した。だが、その成長を支えているのは、プログラマーのために作ってきた基盤——クラウドの中の開発環境、Nixで組む実行環境、安く複製できるストレージ——だ。AIにアプリを作らせるサービスが増えるほど、差がつくのはモデルの賢さより、AIが間違えたときにどれだけ静かに元へ戻せるかになる。その意味でReplitは、AIの会社である前に、巻き戻しの会社だといえる。
