---
service: "Hetzner"
title: "「原価どおりの値付け」が安さを生み、2026年には値上げも生んだ — 自前のデータセンターを持つドイツのHetzner Cloudを解剖する"
description: "土地からデータセンター、サーバーの筐体まで自前でそろえ、「値段は実際の原価に基づく」と公言してきたドイツのHetzner。欧州で月20TBの転送量込みのクラウドサーバーが、RAMとNVMeの調達価格の急騰を受けて2026年に2度値上げした経緯を、公式の料金表・ドキュメント・プレスリリースだけから解剖する。時間課金と月額上限、地域ごとの転送量と価格差、KVMとVXLANの基盤、Server Auctionで平均8年使う機材の回し方、紹介制度を終えた集客の形まで。"
lead: "Hetznerの料金表には割引がない。学生割引も、再販業者向けの値引きもない。公式ドキュメントは、値段はサーバーとサポートの実際の原価に基づき、ある商品の赤字を別の商品で埋めることはしないと説明する。この設計は長く「欧州で最も安いクラウド」の評判を支えてきた。そして2026年、RAMとNVMe SSDの調達価格が跳ね上がると、同じ設計がその上昇をほぼそのまま料金表に映した。原価と値段を直結させた会社の強さと、その裏側を解剖する。"
category: dev-tool
tags: [cloud, hosting, vps, dedicated-server, data-sovereignty]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "Cost-Optimized（CX・CAX）の全プランが料金ページで「not available」と表示されている状態"
  - date: "2027-02-28"
    claim: "新本社Hetzner Campusの土木工事が2027年2月までに完了する予定（開業は2030年初めの予定）"
serviceUrl: "https://www.hetzner.com/cloud/"
# No affiliate block: Hetzner's Cloud FAQ states that its referral program has been discontinued,
# and no public affiliate program was found on hetzner.com (checked 2026-11-02).
vendor: "Hetzner Online GmbH"
origin: "DE"
heroTheme: "hetzner"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "仮想化基盤"
    name: "KVM + virtio"
    confidence: confirmed
    evidence: "公式の技術FAQに、ハイパーバイザーはKVMで、仮想NICと仮想ディスクの両方にvirtioを使うと明記。イメージはcloud-initで初期設定し、QEMUゲストエージェントが入っている"
    evidenceUrl: "https://docs.hetzner.com/cloud/technical-details/faq/"
  - layer: "クラウドサーバーのCPU"
    name: "AMD EPYC (2nd–5th gen) / Intel Xeon Scalable / Ampere Altra"
    confidence: confirmed
    evidence: "公式の技術FAQに、プラン系列（CAX・CX・CPX・CCX）ごとの搭載CPUの世代表があり、ローカルストレージはNVMe SSD、全サーバーがECCメモリを使うと明記"
    evidenceUrl: "https://docs.hetzner.com/cloud/technical-details/faq/"
  - layer: "プライベートネットワーク"
    name: "VXLAN encapsulation (MTU 1450)"
    confidence: confirmed
    evidence: "公式の技術FAQに、プライベートネットワークのパケットはVXLANでカプセル化して運ぶため、プライベート側のMTUを1450バイトにしていると明記"
    evidenceUrl: "https://docs.hetzner.com/cloud/technical-details/faq/"
  - layer: "データセンター"
    name: "Self-owned parks (Falkenstein, Nuremberg, Helsinki) + colocation (Ashburn, Hillsboro, Singapore)"
    confidence: confirmed
    evidence: "公式ドキュメントに、ニュルンベルク・ファルケンシュタイン・ヘルシンキの3つのデータセンターパークを自社で所有・運用し、米国とシンガポールでは他社のデータセンターのコロケーションを使うと明記"
    evidenceUrl: "https://docs.hetzner.com/cloud/general/locations/"
  - layer: "バックボーン・ルーティング"
    name: "Juniper + Nokia 7750 SR-1x"
    confidence: confirmed
    evidence: "公式ドキュメント（2020年）はバックボーンにJuniperの機器だけを使うと書き、2026-03-16のプレスリリースはデータセンターとコアネットワークをNokia 7750 SR-1xで更新したと書く"
    evidenceUrl: "https://www.hetzner.com/pressroom/nokia-network-security/"
  - layer: "DDoS対策"
    name: "Nokia Deepfield Defender"
    confidence: confirmed
    evidence: "公式プレスリリース（2026-03-16）に、欧州の全データセンターでNokia Deepfield Defenderを採用し、ピアリングの縁にあるJuniperのルーターで大半の攻撃を落とすと明記"
    evidenceUrl: "https://www.hetzner.com/pressroom/nokia-network-security/"
  - layer: "API・自動化ツール"
    name: "hcloud CLI / hcloud-go / hcloud-python / Terraform provider / Kubernetes CCM & CSI"
    confidence: confirmed
    evidence: "GitHubのhetznercloud組織で公式に公開。CLIとGoライブラリはGo製でMITライセンス、Kubernetesのcloud-controller-managerはApache-2.0、TerraformプロバイダーはMPL-2.0（2026-11-02確認）"
    evidenceUrl: "https://github.com/hetznercloud"
  - layer: "公式サイトの配信"
    name: "HeRay (served from Hetzner's own network)"
    confidence: likely
    evidence: "当サイトの観測（2026-11-02）で、www.hetzner.com と docs.hetzner.com は server: HeRay と heray-cache-status ヘッダーを返し、www.hetzner.com のIPアドレスは逆引きでHetzner自社網（netname EIGENE-NETZE-HETZNER-ONLINE-AG）に属していた。HeRayの正体について公式の説明は見当たらない"
  - layer: "APIドキュメントサイト"
    name: "Next.js"
    confidence: likely
    evidence: "当サイトの観測（2026-11-02）で、docs.hetzner.cloud が x-powered-by: Next.js と x-nextjs-prerender ヘッダーを返した。ドキュメントサイトについての観測で、クラウド本体とは別"
sources:
  - label: "Hetzner公式: Cloud（クラウドの概要・ロケーション・SLA）"
    url: "https://www.hetzner.com/cloud/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: Cost-Optimized（CX・CAXの料金表）"
    url: "https://www.hetzner.com/cloud/cost-optimized/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: Regular Performance（CPXの料金表・地域別の転送量）"
    url: "https://www.hetzner.com/cloud/regular-performance/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: General Purpose（CCXの料金表）"
    url: "https://www.hetzner.com/cloud/general-purpose/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Billing FAQ（時間課金と月額上限・転送量の課金）"
    url: "https://docs.hetzner.com/cloud/billing/faq/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Locations（ロケーション・地域別の価格・自社所有のデータセンター）"
    url: "https://docs.hetzner.com/cloud/general/locations/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Servers overview（サーバー種別・Primary IP）"
    url: "https://docs.hetzner.com/cloud/servers/overview/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Technical details FAQ（CPU・KVM・ネットワーク）"
    url: "https://docs.hetzner.com/cloud/technical-details/faq/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Cloud general FAQ（注文できない場合・紹介制度の終了）"
    url: "https://docs.hetzner.com/cloud/general/faq/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Hetzner pricing structure explained（価格の考え方）"
    url: "https://docs.hetzner.com/general/infrastructure-and-availability/hetzner-pricing-structure-explained/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: IP pricing"
    url: "https://docs.hetzner.com/general/infrastructure-and-availability/ipv4-pricing/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Value Added Tax（国別の付加価値税）"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/value-added-tax/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Payment overview（支払い方法・通貨・請求）"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/payment-overview/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Promo codes"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/promo-code/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Statement on the adjustment of setup fees（2026-02-02）"
    url: "https://www.hetzner.com/pressroom/statement-setup-fees-adjustment/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Statement on price adjustment as of April 1st 2026（2026-02-23）"
    url: "https://www.hetzner.com/pressroom/statement-price-adjustment/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Statement on the latest adjustment to setup fees（2026-04-29）"
    url: "https://www.hetzner.com/pressroom/statement-on%20the-latest-adjustment-to%20setup-fees/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Standardization and price adjustment effective 15 June 2026（2026-05-27）"
    url: "https://www.hetzner.com/pressroom/standardization-and-price-adjustment-of-our-server-products/"
    accessedAt: "2026-11-02"
  - label: "heise online: Up to 200 percent: Cloud hoster Hetzner adjusts prices again（報道）"
    url: "https://www.heise.de/en/news/Up-to-200-percent-Cloud-hoster-Hetzner-adjusts-prices-again-11333037.html"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Hetzner introduces arm64-based cloud servers（2023-04-12）"
    url: "https://www.hetzner.com/pressroom/arm64-cloud/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: New dedicated vCPU cloud servers（2023-08-23）"
    url: "https://www.hetzner.com/pressroom/new-dedicated-vcpu-cloud-servers/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Hetzner Cloud: new location in Singapore（2024-08-06）"
    url: "https://www.hetzner.com/pressroom/new-location-singapore/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Hetzner invests in AI-based network security from Nokia（2026-03-16）"
    url: "https://www.hetzner.com/pressroom/nokia-network-security/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: About Us（会社概要）"
    url: "https://www.hetzner.com/unternehmen/ueber-uns/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: Sustainability（再生可能電力・PUE・サーバーの寿命）"
    url: "https://www.hetzner.com/unternehmen/nachhaltigkeit/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: HT clean energy GmbH の設立（2025-03-04）"
    url: "https://www.hetzner.com/pressroom/ht-clean-energy/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: Server Auction"
    url: "https://www.hetzner.com/sb/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: Dedicated Server AX-Line（専用サーバーの料金表）"
    url: "https://www.hetzner.com/dedicated-rootserver/matrix-ax/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: GEX430（4基のNVIDIA Blackwell GPUを積む専用サーバー・2026-10-21）"
    url: "https://www.hetzner.com/pressroom/hetzner-introduces-its-first-multi-gpu-server-with-four-nvidia-blackwell-gpus/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: Object Storage（料金とFAQ）"
    url: "https://www.hetzner.com/storage/object-storage/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: 新本社Hetzner Campusの起工（2026-10-01）"
    url: "https://www.hetzner.com/pressroom/hetzner-celebrates-groundbreaking-for-new-corporate-headquarters-in-gunzenhausen/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Bavaria's Best 50 に6回目の選出（2026-07-31）"
    url: "https://www.hetzner.com/pressroom/hetzner-bavarias-best-50-fastest-growing-companies/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: IT Award 2026「Sovereign Cloud」部門でゴールド（2026-10-16）"
    url: "https://www.hetzner.com/pressroom/hetzner-wins-the-2026-it-award-in-gold-for-sovereign-cloud/"
    accessedAt: "2026-11-02"
  - label: "GitHub: hetznercloud（公式のCLI・ライブラリ・Terraform・Kubernetes連携）"
    url: "https://github.com/hetznercloud"
    accessedAt: "2026-11-02"
---

Hetznerの料金表には割引がない。公式ドキュメントは、学生向けにも再販業者向けにも値引きはしない、と書いている。値段はサーバーとサポートの実際の原価から組み立て、ある商品の赤字を別の商品で埋める「内部補助」はしない、というのがその理由だ。土地を買い、データセンターを自分で建て、サーバーの筐体まで自分で組む。その原価の低さを値段に直結させる設計が、長く「欧州でいちばん安いクラウド」の評判を支えてきた。そして2026年、RAMとNVMe SSDの調達価格が跳ね上がると、同じ設計がその上昇もほぼそのまま料金表に映した。

## サービス解説

Hetznerは、ドイツ・バイエルン州のグンツェンハウゼンに本社を置くHetzner Online GmbHが運営するホスティング事業者だ。専用サーバー（Dedicated）、クラウドサーバー（Hetzner Cloud）、S3互換のObject Storage、バックアップ用のStorage Box、Webホスティング、ドメイン、マネージドサーバーまでを1社で扱う。開発者のあいだでは、管理画面からVMを数秒で立ち上げられるHetzner Cloudと、物理サーバーを月額で借りる専用サーバーの2本で知られている。

:::fact
公式の会社紹介によれば、Hetznerは1997年創業のドイツのIT企業で、ニュルンベルクとファルケンシュタイン（ドイツ）、ヘルシンキ（フィンランド）のデータセンターパークで数千台規模のサーバーを運用し、シンガポールと米国にもインフラを広げている。事業部門として、専用ホスティング、クラウドホスティング、コロケーション、共用ホスティング、Storage Box、ドメイン、SSL証明書を挙げる。クラウドの各プランのページは「Over 1,000,000 happy customers」と掲げる。クラウドの概要ページは、99.9%の稼働率を保証するSLAと、メールによる24時間365日のサポート、ドイツ連邦情報セキュリティ庁（BSI）のC5認証を挙げ、ドイツとフィンランドのデータセンターパークはISO/IEC 27001の認証を受けているとする。
:::

:::fact
公式ドキュメントによれば、Hetzner Cloudには4つのネットワークゾーンと6つのロケーションがある。eu-central（ファルケンシュタインfsn1・ニュルンベルクnbg1・ヘルシンキhel1）、us-east（バージニア州アッシュバーン）、us-west（オレゴン州ヒルズボロ）、ap-southeast（シンガポール）だ。ドイツとフィンランドの3拠点は自社で所有・運用するデータセンターパークで、米国とシンガポールは他社のデータセンターのコロケーションスペースを使う。米国とシンガポールで使えるのはクラウド製品だけで、専用サーバーは注文できない。シンガポールは2024年8月6日に開設された。
:::

:::pull
値段は原価から組み立て、割引はしない。その約束は、原価が下がる時代には安さを、上がる時代には値上げを、同じ速さで利用者に届ける。
:::

::scorecard

## UX分析

HetznerのUXは、親切さよりも「仕組みが読めること」を優先して組み立てられている。料金・課金・制限のルールがドキュメントに細かく書かれ、利用者はそれを読んで自分で判断する前提だ。

- **時間課金と月額上限の二本立て**。各プランには時間単価と月額上限があり、請求は「時間単価×使った時間」と「月額上限」の低い方になる。ただし時間は切り上げで、数分だけ作ったサーバーも1時間分かかる。課金FAQはその理由を「作成した時点でシステムに負荷をかけたから」と説明する。電源を切っていても、資源を確保し続けているので課金は止まらない。止めるならスナップショットを取って削除するよう勧めている。
- **転送量は地域ごとにまったく違う**。料金表によれば、EU内のサーバーには少なくとも20TBの転送量が含まれ、米国は1TBから、シンガポールは0.5TBからだ。米国とシンガポール、それにEUの専有vCPUの上位プランでは、プランが大きいほど含まれる量が増える。課金されるのは送信だけで、受信と、同じネットワークゾーン内のHetzner Cloud同士、プライベートネットワーク、Hetznerの専用サーバーやWebホスティングとの通信は無料だ。超過分は100MB単位で切り上げて請求され、含まれる量の75%と100%に達した時点で通知が来る。ただし通知は上限ではなく、遅れても届かなくても超過分は請求されると明記している。
- **IPv4は別の部品**。クラウドサーバーには公開IPアドレスが含まれず、Primary IPとして付け外しする。IPv6は無料、IPv4は月0.50ユーロ（税別）。料金表の価格はIPv4込みの表示になっている。IPv4なしでプライベートネットワークだけのサーバーも作れる。
- **「注文できないことがある」を正直に書く**。一般FAQは、特定のロケーションで空きがない場合や、安定のために一部の利用者に新規作成を一時的に制限する場合があると書く。制限中は新しいサーバーの作成、リスケール、他アカウントへの移動ができず、「翌日にまた試して」と案内している。2026年11月2日に当サイトが見た料金ページでは、旧世代のハードウェアを使うCost-Optimized（CX・CAX）の全プランに「not available」の表示が付き、概要ページのCost-Optimizedの枠にも「Currently not available」と出ていた。
- **言語と通貨は欧米向け**。公式サイトの言語はドイツ語・英語・フランス語・スペイン語で、日本語ページはない。アカウントの通貨はユーロか米ドルで、作成後は変えられない。支払いはVISA・Mastercard・AMEX・UnionPayのカード、SEPA口座引き落とし（ユーロのみ）、銀行振込、PayPalで、暗号資産は受け付けない。登録時にはVPNやフリーメールの利用を避けるよう案内している。

:::fact
付加価値税の扱いは公式ドキュメントに国別の表で載っている。料金表の価格はすべて税別で、ネット価格は全顧客で同じ。ドイツの顧客には19%を課税し、有効なVAT番号を持つEU域内の事業者にはリバースチャージで請求する。VAT番号のないEU域内の顧客には各国の税率（オランダ21%など）を、英国には20%を課す。米国はテキサス州に8%の売上税を課し、ユタ・アリゾナ・コロラド・ニューメキシコの各州では所在地に応じた税率で徴収する。表にない国（日本を含む）の顧客には、付加価値税なしで請求するとしている。
:::

:::guess
請求のルールを細かく公開するやり方は、問い合わせ窓口に人を割かずに済ませるための仕組みでもあるとみられる。価格の考え方を説明する公式ドキュメントは、値引き交渉をしないことで顧客との交渉や特別提案の説得に時間を使わずに済む、と書いている。利用者にとっては、ルールを読める人ほど安く使え、読まない人は電源オフのサーバーや超過転送量で想定外の請求を受けやすい。分かりやすい定額プランを前面に出すクラウドとは、親切さの置き場所が違うと当サイトはみる。
:::

## 技術構成

::techstack

:::fact
公式の技術FAQによれば、Hetzner CloudのハイパーバイザーはKVMで、仮想NICと仮想ディスクにはvirtioを使う。イメージはcloud-initでネットワークなどを設定し、QEMUゲストエージェントが入っている。CPUはプラン系列とロケーションごとに異なり、表ではArm系のCAXがAmpere Altra、それ以外の系列がIntel Xeon Scalable（第1・第2世代）とAMD EPYC（第2世代から第5世代のTurinまで）にまたがる。ローカルストレージはNVMe SSDで、全サーバーがECCメモリを使う。各ホストは冗長化した10Gbitの回線を持つが、ホスト上の全インスタンスで共有するため帯域の保証はなく、目安は300〜500Mbitsだという。プライベートネットワークはパケットをVXLANでカプセル化して運ぶので、プライベート側のMTUは1450バイトになる。
:::

:::fact
価格の考え方を説明する公式ドキュメント（2020年）によれば、Hetznerは自社のデータセンターだけでなく、その下の土地も所有している。最初の自社データセンターは2009年に完成した。建設は外注せず、電気技師、空調技術者、現場監督、建築士などを自社で抱え、サーバーを運ぶトラックも持つ。サーバーも自社で組み、高価な1Uの19インチ筐体の代わりに気流を考えた簡素な特注筐体を使い、一部は筐体すらない。部品は性能・価格・消費電力・品質（頑丈さ）の4点で選ぶ。バックボーンにはJuniperの機器だけを使い、冗長化した機器を各拠点に2台ずつ置く。2026年3月16日のプレスリリースによれば、データセンターとコアネットワークはNokia 7750 SR-1xで更新され、DDoS対策には欧州の全データセンターでNokia Deepfield Defenderを採用した。攻撃の大半はピアリングの縁にあるJuniperのルーターで落とし、複雑なアプリケーション層の攻撃はNokiaの7750 Defender Mitigation Systemに回して洗浄する。
:::

:::fact
サステナビリティのページによれば、ドイツのデータセンターは2008年から再生可能電力を使い、2018年に建設したフィンランドのパークは当初から再生可能電力で動いている。外気で冷やす設計で、外気冷房は年間の最大98%の期間に使える。PUEは1.10〜1.16、水を冷却に使わないのでWUEは0 L/kWh。役目を終えたサーバーは検査して多くがServer Auctionに回り、修理や部品の再利用も含めて、サーバーの寿命を平均8年まで延ばしているという。2025年3月には創業者Martin Hetzner氏らが太陽光発電と大型蓄電の会社HT clean energy GmbHを設立し、長期的にはデータセンターを自社の太陽光で賄うことを目標に掲げた。
:::

:::fact
自動化の入口として、Hetzner CloudはREST APIとCLIを公開している。APIはプロジェクトごとのトークンで認証し、トークンは作ったプロジェクトにしか使えない。GitHubのhetznercloud組織（2026年11月2日確認）では、Go製のCLI（MITライセンス、2017年11月作成、10月23日にv1.70.2）、Goライブラリhcloud-go、Pythonライブラリ、Terraformプロバイダー（MPL-2.0）、Kubernetes向けのcloud-controller-manager（Apache-2.0）とCSIドライバーが公開されている。料金ページは、CoolifyやDocker CE、GitLab CE、Nextcloud、WireGuard、WordPressなどのワンクリックアプリも並べる。
:::

:::guess
当サイトの観測（2026-11-02）では、www.hetzner.com と docs.hetzner.com は server: HeRay というヘッダーとheray-cache-statusという独自のキャッシュ状態ヘッダーを返し、www.hetzner.com のIPアドレスはHetzner自身のネットワーク（ニュルンベルクの区画）に属していた。外部のCDNの名前は見当たらず、公式サイトの配信も自社の基盤と自社製とみられる配信層で賄っていると推測される。土地・建物・筐体・ネットワークまで内製に寄せる姿勢が、自社のWebサイトにも及んでいる可能性がある。
:::

:::guess
基盤の内製は、エネルギーと建物と人件費の原価を下げる。一方で、CPU・RAM・SSDのような部品は市場から買うしかない。2026年に起きたのは、まさにこの「内製できない部分」の価格の急騰だった。データセンターを自前で持つ強みは、部品の高騰に対しては効きにくい構造だとみられる。使い終えた機材を平均8年まで回す仕組みと、旧世代のハードを安く貸すCost-Optimizedの枠は、新しい部品を買わずに済む容量を増やす手段でもあり、その枠が売り切れの表示になっているのは、古い機材の在庫にも限りがあることを示していると読める。
:::

## ビジネスモデル

Hetznerの収益は、専用サーバー・クラウドサーバー・ストレージ・Webホスティングなどの月額・時間課金の賃料だ。値付けの原則は公式ドキュメントにはっきり書かれている。

:::fact
価格の考え方を説明する公式ドキュメント（2020年）は、値段はサーバーとサポートの実際の原価に基づき、内部補助による値付けはしないと書く。だから学生・再販業者などへの割引はない。サーバーの一生で最も大きな費用は新しいハードウェアの購入時に発生し、価値の目減りも最初の5か月が最も大きいので、多くのサーバーに初期費用をかける。初期費用を下げれば、その分だけ月額か時間単価を上げなければならない、とも明記している。そして、すべての要望に応えようとはせず、主流の約95%の顧客を効率よく確実に扱うことを狙う、と結んでいる。
:::

:::fact
2026年、この原則は調達価格の急騰に直面した。2026年2月2日の声明で、HetznerはRAM市場が少数のメーカーに支配され、その価格政策は「ほとんど理解できない」もので短期間に原価を押し上げたと書き、NVMe SSDも同様で、約束された供給枠や価格すら当てにならないとして、まず専用サーバーの初期費用を上げた。2月23日には、既存の契約と新規の注文の両方を対象に、4月1日から値上げすると発表した。4月29日には専用サーバーの初期費用を再び改定した。5月27日の発表では、6月15日8時（中央ヨーロッパ夏時間）から専用サーバーの構成を「-1」「-2」「-3」の型に標準化し、全ロケーションの専用サーバーとクラウドプランの新規注文の月額を上げる一方、ほとんどの専用サーバーの初期費用を大きく下げるとした。この6月の改定では既存の契約は条件を維持し、対象は新規注文と既存サーバーのリスケールに限られる。Webホスティング、マネージドサーバー、Server Auction、IP、ストレージ、ロードバランサー、Volume、スナップショット、Object Storageは対象外とされた。
:::

:::fact
2026年11月2日に料金ページ（ユーロ・税別表示）で確認したクラウドの価格は次のとおり。EU（ドイツ・フィンランド）の共有vCPUのRegular Performanceは、CPX02（1 vCPU・1GB・20GB）が月6.49ユーロ、CPX22（2 vCPU・4GB・80GB）が月19.99ユーロ。旧世代ハードのCost-OptimizedはCX23（2 vCPU・4GB・40GB）が月5.99ユーロ、ArmのCAX11が月6.49ユーロだが、いずれも「not available」の表示だった。専有vCPUのGeneral PurposeはCCX13（2 vCPU・8GB・80GB）がEUで月43.49ユーロ、米国で43.99ユーロ、シンガポールで54.49ユーロ。比較の材料として、同社の過去の発表では、2023年4月のArm版CAXは「月3.79ユーロから（IPv4込み）」、2023年8月の専有vCPUのCCXは「月11.99ユーロから」、2024年8月のシンガポール開設時のCCX13は「月21.50ユーロ」だった。旧価格と新価格の対照表は公式ドキュメントに掲載されていたが、当サイトが確認した2026年11月2日時点ではそのページは見つからなかった（404）。報道では、heise onlineが6月の改定について、クラウドの平均の上げ幅をドイツで99%、米国で158%、シンガポールで約78%と集計している。
:::

:::fact
ほかの商品の価格も、同じ原価の論理の上にある。料金ページのヘッダーによれば、中古の専用サーバーを競り下げ方式で売るServer Auctionは2026年11月2日時点で月72.70ユーロ（税別）からで、初期費用はかからない。新品の専用サーバーAX41は月59.00ユーロで初期費用0ユーロ、AX42は月79.00〜99.00ユーロで初期費用49.00ユーロ。2026年10月21日に発表したGPUサーバーGEX430（NVIDIA RTX PRO 6000 Blackwell Max-Qを4基、VRAM合計384GB）は、月3,599.00ユーロに加えて同額の初期費用がかかる（税別）。Object Storageは月6.49ユーロ（税別）の基本料に1TBの保存容量と1TBの送信転送量が含まれ、超過分は従量課金になる。
:::

:::fact
集客の仕組みは控えめだ。Hetzner Cloudの一般FAQは、以前あった紹介リンクによるクレジットの制度はすでに終了し、参加できないと書いている。プロモコードのドキュメントによれば、Hetznerが配るクレジットや割引のコードは1アカウントにつき1回だけ使え、譲渡できず、紹介コードとクラウドのプロモコードはどちらか一方しか使えない。当サイトが確認した範囲では、公式のアフィリエイトプログラムは見当たらなかった。会社の側では、2026年10月1日に新本社「Hetzner Campus」の起工式を行い、約7万平方メートルの敷地に500人超が働ける建物を建てて2030年初めに開業する予定だとした。7月31日には、バイエルン州が成長著しい同族経営の中小企業を表彰する「Bavaria's Best 50」に6回目の選出を受けたと発表している。
:::

:::guess
「原価どおり」の値付けには二つの読み方がある。一つは、値上げもまた約束どおりだという見方だ。初期費用を下げれば月額が上がると2020年の時点で書いていた会社が、2026年6月に実際に初期費用を下げて月額を上げた。原則を曲げずに、原価の変化を素直に価格に移しただけとも言える。もう一つは、安さが原価の低さだけでなく、部品の市況という外部の条件にも支えられていたことが見えたという見方だ。4月の改定は既存契約にも及んだが、6月の改定では既存契約を据え置いた。古い価格のまま走り続けるサーバーと、新しい価格で作られるサーバーが並ぶことになり、利用者にとってはリスケールや作り直しのたびに値段が変わりうる。クラウドの「いつでも作り直せる」という性質と、価格を据え置く仕組みが、ここで少しぶつかっているとみられる。
:::

:::guess
紹介制度を終え、アフィリエイトも持たず、割引もしない。それでも100万を超える顧客を集めてきたのは、価格表そのものが広告として働いてきたからだと当サイトはみる。2026年の値上げで、その最大の広告が弱まったのは確かだ。代わりに前面に出てきているのが「欧州の主権クラウド」という立ち位置で、自社所有のデータセンター、ISO/IEC 27001やC5の認証、2026年10月のIT Award「Sovereign Cloud」部門のゴールドがそれを支える。安さで選ばれてきた会社が、データの置き場所で選ばれる会社へ重心を移せるかどうかが、次の数年の焦点になると推測される。
:::

土地を買い、データセンターを建て、サーバーを組み、値段は原価から決める。Hetznerはその単純な原則で、巨大クラウドとは違う安さを作ってきた。2026年、その原則は原価が上がる側にも働くことを示した。料金表から割引を消した会社は、値上げの理由も料金表の外に隠さなかった。原価を隠さない値付けが、安さを失った後も信頼として残るのか。Hetznerのいまの試験は、そこにある。
