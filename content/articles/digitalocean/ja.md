---
service: "DigitalOcean"
title: "4ドルのVMから9桁の契約へ — 個人開発者のクラウドDigitalOceanが「AIネイティブクラウド」に賭けるまで"
description: "月4ドルのVMで個人開発者を集めてきたDigitalOcean。創業時のRailsとPerl、1つのMySQLテーブルをメッセージキュー代わりにした設計が1万5千本の接続に膨らみ、Event Router・Harpoon・RabbitMQで解体されるまでの技術史と、年間100万ドル超の顧客が売上の23%を占めるまでに進んだAI推論クラウドへの転換を、公式エンジニアリングブログとSEC提出書類から解剖する。"
lead: "月4ドル・1 vCPUの仮想マシン。DigitalOceanは、AWSの管理画面に怯む個人開発者のための「シンプルなクラウド」として育った。その会社が2026年、年間9桁ドル規模の契約をAI企業と結び、自らを「AIネイティブクラウド」と呼んでいる。小口の開発者を入口に据えたまま、大口のAI推論へ重心を移す——その構造を解剖する。"
category: dev-tool
tags: [cloud, hosting, vps, ai-inference, indie-dev]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.digitalocean.com/"
# affiliate: TODO(owner) — join the DigitalOcean Affiliate Program (via CJ) first, then uncomment and paste the tracking URL (same URL in en.md).
#   url: "https://REPLACE-WITH-CJ-TRACKING-URL"
#   program: "DigitalOcean Affiliate Program"
vendor: "DigitalOcean Holdings, Inc."
origin: "US"
heroTheme: "digitalocean"
scores: { product: 4.0, ux: 4.5, tech: 4.0, business: 4.0 }
techStack:
  - layer: "仮想化基盤"
    name: "KVM"
    confidence: confirmed
    evidence: "公式ブログ（2021-01-14）に、DropletはLinux Kernel Virtual Machine（KVM）というハイパーバイザー上で動くと明記。Basic以外のDropletは専有vCPU"
    evidenceUrl: "https://www.digitalocean.com/blog/how-to-choose-the-right-droplet-vm"
  - layer: "創業時のコントロールプレーン"
    name: "Ruby on Rails + Perl"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2020-01-08）に、2011年にRailsアプリ「Cloud」として始まり、Perl製のSchedulerとDOBEが支えていたと明記"
    evidenceUrl: "https://www.digitalocean.com/blog/from-15-000-database-connections-to-under-100-digitaloceans-tale-of-tech-debt"
  - layer: "バックエンド言語・内部通信"
    name: "Go + gRPC"
    confidence: confirmed
    evidence: "同ブログに、データベースのキューが中核だった4年間にマイクロサービス化を進め、内部通信をHTTPSからgRPCに置き換え、バックエンドはPerlを捨ててGoに移ったと明記"
    evidenceUrl: "https://www.digitalocean.com/blog/from-15-000-database-connections-to-under-100-digitaloceans-tale-of-tech-debt"
  - layer: "イベント基盤"
    name: "RabbitMQ"
    confidence: confirmed
    evidence: "同ブログに、Harpoonがデータベースのメッセージキュー役を引き取り、RabbitMQと非同期ワーカーで構成した内部キューに置き換えたと明記"
    evidenceUrl: "https://www.digitalocean.com/blog/from-15-000-database-connections-to-under-100-digitaloceans-tale-of-tech-debt"
  - layer: "LLM推論基盤"
    name: "llm-d + vLLM"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-07-30）に、分散推論スタックをGPU種別の混在に対応するllm-dで構築し、Kimi K3の配信レシピをvLLMチームと最適化したと明記。NVIDIA HGX B300とAMD Instinct MI350Xの両方で配信"
    evidenceUrl: "https://www.digitalocean.com/blog/serving-kimi-k3-inference-engine"
  - layer: "公式サイト配信"
    name: "Next.js + Cloudflare"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（x-powered-by: Next.js、x-nextjs-prerender: 1、server: cloudflare、2026-09-28）。マーケティングサイトについての観測でクラウド本体とは別"
    evidenceUrl: "https://www.digitalocean.com/"
  - layer: "サイト配信の中継プロキシ"
    name: "Envoy"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（x-envoy-upstream-service-time、2026-09-28）。Envoy特有のヘッダー名からの推定で、公式ドキュメントでの明言は見当たらない"
sources:
  - label: "DigitalOcean公式エンジニアリングブログ: From 15,000 database connections to under 100（2020-01-08）"
    url: "https://www.digitalocean.com/blog/from-15-000-database-connections-to-under-100-digitaloceans-tale-of-tech-debt"
    accessedAt: "2026-09-28"
  - label: "DigitalOcean公式ブログ: The modern Droplet（KVMとvCPUの種類・2021-01-14）"
    url: "https://www.digitalocean.com/blog/how-to-choose-the-right-droplet-vm"
    accessedAt: "2026-09-28"
  - label: "SEC 8-K（DigitalOcean Holdings・2025年第4四半期および通期決算・2026-02-24）"
    url: "https://www.sec.gov/Archives/edgar/data/1582961/000158296126000015/a2025-q4dopressrelease.htm"
    accessedAt: "2026-09-28"
  - label: "SEC 8-K（DigitalOcean Holdings・2026年第2四半期決算・2026-08-04）"
    url: "https://www.sec.gov/Archives/edgar/data/0001582961/000162828026052135/a2026-q2dopressrelease.htm"
    accessedAt: "2026-09-28"
  - label: "DigitalOcean公式エンジニアリングブログ: Under the Hood: Serving Kimi K3（2026-07-30更新）"
    url: "https://www.digitalocean.com/blog/serving-kimi-k3-inference-engine"
    accessedAt: "2026-09-28"
  - label: "DigitalOcean公式: Droplet Pricing（月4ドルからの料金表・秒課金への移行）"
    url: "https://www.digitalocean.com/pricing/droplets"
    accessedAt: "2026-09-28"
  - label: "DigitalOcean公式: Affiliate Program（紹介料の条件）"
    url: "https://www.digitalocean.com/affiliates"
    accessedAt: "2026-09-28"
---

月4ドルで、自分だけのLinuxサーバーが1台手に入る。DigitalOceanはこの分かりやすさで、巨大クラウドの管理画面に尻込みする個人開発者を集めてきた。その会社がいま、年間9桁ドル規模の契約をAI企業と結んでいる。入口の小ささと、売上を押し上げている顧客の大きさ。この二つの距離が、2026年のDigitalOceanを読む鍵になる。

## サービス解説

DigitalOceanは、仮想マシン（Droplet）・マネージドKubernetes・マネージドデータベース・オブジェクトストレージ（Spaces）などを提供するクラウド事業者だ。2011年に創業し、ニューヨーク証券取引所に上場している（ティッカーDOCN）。近年はGPUと推論サービスを前面に出し、自社を「AIネイティブクラウド」と呼んでいる。

:::fact
公式の料金表によれば、最も安いDropletは月4ドル（1 vCPU・メモリ512MiB・SSD 10GiB・転送量500GiB）。2026年1月1日からDropletは秒単位の課金（最低60秒または0.01ドルのうち高い方）に移行した。SEC提出書類によれば、2025年通期の売上は9億100万ドルで前年比15%増、調整後EBITDAマージンは42%。2025年12月には月次売上の年換算が10億ドルに達した。
:::

:::pull
入口は月4ドル、成長を牽引するのは年間100万ドル超の顧客。DigitalOceanは、同じ看板の下で二つの別の商売をしている。
:::

::scorecard

## UX分析

DigitalOceanのUXは「クラウドを1台のサーバーとして見せる」ことに徹してきた。対象は、インフラ専任者のいない個人開発者や小さなチームだ。

- **料金が1行で読める**。CPU・メモリ・SSD・転送量をひとまとめにした定額プラン（Bundled Plan）は、従量項目が何十と並ぶ巨大クラウドの料金体系に対する明確な対案になっている。2026年時点では、資源を個別に選んで時間単位で払うv5 Dropletも並んでいるが、請求書にはDroplet1台につき1行でまとめて載る。請求額を事前に言い当てられること自体が、個人にとっての安心材料だ。
- **秒課金で「試してすぐ消す」が安くなる**。2026年からの秒単位課金で、CIのテストやバッチ処理のように数分だけ立ち上げるVMの費用が細かく刻まれるようになった。料金表の説明もこの短命なワークロードを名指ししている。
- **サイト自体が学習教材の入口を兼ねる**。公式サイト共通のフッターでは、「Products」欄のすぐ隣の「Resources」欄に、コミュニティのチュートリアル・Q&A・CSS-Tricksが並ぶ。検索から来た学習者がそのまま最初のDropletを作る導線が、製品の外側に敷かれている。
- **単純さは上限の低さと表裏一体**。料金ページのFAQ自身が、AWS EC2のほうがインスタンスの種類とサービスの幅が広く、複雑な要件を持つ大企業に向く場合があると認めている。成長した顧客が別のクラウドへ移る「卒業」の圧力は、この種の単純さに付きまとう課題になりやすいとみられる。

## 技術構成

::techstack

:::fact
公式エンジニアリングブログ（2020年1月）によれば、DigitalOceanは2011年にRailsアプリ「Cloud」として始まった。Perl製のSchedulerがDropletを置くハイパーバイザーを決め、全サーバーで動くPerl製のDOBEが実際のVMを作る。この3者は直接通信せず、1つのMySQLデータベースのテーブルをメッセージキュー代わりにして、互いに新しい行をポーリングしていた。2012年から2016年にユーザートラフィックは1万%以上増え、2016年初めにはデータベースへの直接接続が1万5千本を超えた。各接続が1〜5秒ごとに問い合わせ、そのSQLは150行・18テーブルのJOINにまで膨らんでいた。地域ごとの代理としてEvent Routerを置いたことで接続は100本未満に減り、2017年末にはAPI層のHarpoonがキューへの唯一の書き手になった。その後HarpoonはRabbitMQと非同期ワーカーでキューを作り直し、データベースはメッセージの仲介役から外れた。なお、データベースのキューが中核だった4年の間に、マイクロサービス化とともに内部通信はHTTPSからgRPCへ、バックエンドはPerlからGoへ移っていた。それでもブログの言葉を借りれば、どの道も最後はこのMySQLに通じていた。
:::

:::fact
仮想化はLinuxのKVMで、Basic以外のDropletは専有vCPUを持つ（2021年の公式ブログ）。AI推論では、2026年7月30日更新の公式エンジニアリングブログが、約2.78兆パラメータのKimi K3を公開初日から配信した方法を説明している。分散推論スタックはGPU種別の混在に対応するllm-dで組み、NVIDIA HGX B300とAMD Instinct MI350Xの8GPUサーバーを配備の単位とし、配信レシピはvLLMチームと共同で調整したという。
:::

:::guess
「1つのテーブルをキューにする」設計は、人手の足りない初期チームにとっては合理的な近道だったとみられる。ブログ自身も、単純で実際に動いたと評価している。注目すべきは解体のやり方で、一気に作り直すのではなく、接続数（Event Router）・配置アルゴリズム（Scheduler V2）・キュー（Harpoon）の順にボトルネックを1つずつ外している。推論基盤でNVIDIAとAMDを最初から混在させる設計にも、特定の部品に賭けすぎずに調達の選択肢を残す、同じ実務的な発想が続いているように見える。GPUの確保が競争力を左右する局面で、2社の供給に乗れることは価格交渉と在庫の両面で効くと推測される。
:::

## ビジネスモデル

DigitalOceanの収益は、Droplet・データベース・ストレージ・GPUなどの利用量に応じた課金だ。長く「小さな顧客を大量に」の会社だったが、成長の源泉は明らかに大口へ移っている。

:::fact
2026年第2四半期（2026年8月4日発表）の売上は2億8,100万ドルで前年比29%増。ARRは11億2,500万ドル、そのうちAI顧客のARRは2億3,400万ドルで212%増えた。月8万3,333ドル超（年換算100万ドル超）を使う顧客からの売上は全体の23%を占め、214%増。同四半期には初めて年間9桁ドル規模の契約をAI企業と結び、加重平均の契約期間は1.6年から3年超に延びた。残存履行義務（RPO）は前年同期の7,100万ドルから8億9,400万ドルへ拡大し、2026年通期の売上見通しは11億7,000万〜11億8,000万ドル（30〜31%増）に引き上げられた。なお2025年第4四半期から、月500ドル以下しか使わない利用者（旧称Builders）は顧客数の集計から外されている。
:::

:::fact
公式のアフィリエイトプログラムは、紹介した新規の有料ユーザーの月額利用料の10%を、1年間毎月支払う条件になっている。参加は誰でも可能で、CJ（Commission Junction）経由で登録する。
:::

:::guess
月4ドルのDropletと紹介料・チュートリアルによる集客は、いまも顧客獲得の土台として機能しているとみられる。一方で、月500ドル以下の利用者を顧客数から外した集計の変更は、経営が見せたい指標が「利用者の数」から「大口の売上」へ移ったことを示していると読める。ここには二つの見方がある。一つは、推論需要という追い風で単価の高い顧客を取り込み、この種のクラウドに付きまといがちな顧客の卒業を止めつつあるという見方。もう一つは、少数のAI企業への依存が強まり、GPU投資と契約の集中が新しいリスクになるという見方だ。RPOの急増は前者を裏付ける材料だが、決算資料自身が、RPOは従量課金から契約コミットへの切り替えでも増え、必ずしも売上の上積みを意味しないと注記している。その多くは少数の大型契約に由来するとみられ、どちらに転ぶかは数四半期の推移を見ないと判断できない。
:::

月4ドルで個人開発者を迎え入れる入口と、9桁ドルの契約でAI企業を抱える奥の間。1本のMySQLテーブルから始まったクラウドは、ボトルネックを1つずつ外しながら、いま最も大きな顧客層へ手を伸ばしている。入口の単純さを保ったまま奥を深くできるか——DigitalOceanの次の数年は、その両立の試験になる。
