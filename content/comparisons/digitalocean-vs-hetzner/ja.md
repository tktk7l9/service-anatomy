---
title: "DigitalOcean と Hetzner の比較 — 1行にまとめた定額のVMと、原価から組み立てた料金表。価格・転送量・課金の単位・ロケーション・税を公式ページで並べる"
description: "DigitalOceanとHetzner Cloudを、両社の公式ページ（2026-11-02閲覧）だけを根拠に比較する。最安はDigitalOceanが月4ドル、HetznerはEUで月6.49ユーロ（税別）から。転送量はDigitalOceanがプランごとの量をチームで合算し超過は1GiBあたり0.01ドル、HetznerはEUで1台あたり20TB込み。課金はDigitalOceanが秒単位、Hetznerが1時間単位の切り上げ。2026年にHetznerが2度値上げした後の価格、地域ごとの価格差、通貨と付加価値税の扱い（日本・英国・EU・米国・カナダ）まで並べ、誰がどちらを選びやすいかを整理する。"
lead: "個人開発者や小さなチームが最初の1台を借りるとき、候補に並びやすいのがDigitalOceanとHetznerだ。どちらも管理画面から数十秒でLinuxのVMが立ち上がる。けれど料金表を横に置くと、作りがまるで違う。DigitalOceanはCPU・メモリ・SSD・転送量を1行の定額にまとめ、米ドルだけで請求する。Hetznerは時間単価と月額上限を並べ、地域ごとに転送量と価格を変え、ユーロか米ドルで請求する。両社の公式ページを2026年11月2日に読み、価格・転送量・課金・ロケーション・税を横に並べたうえで、どんな使い方にどちらが合いやすいかを解剖する。"
slugA: "digitalocean"
slugB: "hetzner"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-11-30"
    claim: "HetznerのCost-Optimized（CX・CAX）が「not available」表示で、DigitalOceanのv5 DropletのIPv4が導入価格の0.00ドル/時である状態"
sources:
  - label: "DigitalOcean公式: Droplet Pricing（プランごとの価格・転送量・秒課金・FAQ）"
    url: "https://www.digitalocean.com/pricing/droplets"
    accessedAt: "2026-11-02"
  - label: "DigitalOceanドキュメント: Bandwidth Billing（転送量の合算と超過料金）"
    url: "https://docs.digitalocean.com/platform/billing/bandwidth/"
    accessedAt: "2026-11-02"
  - label: "DigitalOceanドキュメント: Regional Availability（データセンターとリージョン）"
    url: "https://docs.digitalocean.com/platform/regional-availability/"
    accessedAt: "2026-11-02"
  - label: "DigitalOceanドキュメント: Tax Information by Country（国別の税）"
    url: "https://docs.digitalocean.com/platform/billing/taxes/"
    accessedAt: "2026-11-02"
  - label: "DigitalOceanドキュメント: Japan Tax Information（日本の消費税・請求通貨）"
    url: "https://docs.digitalocean.com/platform/billing/taxes/jpn/"
    accessedAt: "2026-11-02"
  - label: "Hetzner公式: Cloud（クラウドの概要・ロケーション）"
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
  - label: "Hetzner Docs: Locations（ロケーション・地域別の価格）"
    url: "https://docs.hetzner.com/cloud/general/locations/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Servers overview（Primary IPの料金）"
    url: "https://docs.hetzner.com/cloud/servers/overview/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Value Added Tax（国別の付加価値税）"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/value-added-tax/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Payment overview（支払い方法・通貨）"
    url: "https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/payment-overview/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Standardization and price adjustment effective 15 June 2026（2026-05-27）"
    url: "https://www.hetzner.com/pressroom/standardization-and-price-adjustment-of-our-server-products/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Pressroom: Statement on price adjustment as of April 1st 2026（2026-02-23）"
    url: "https://www.hetzner.com/pressroom/statement-price-adjustment/"
    accessedAt: "2026-11-02"
  - label: "Hetzner Docs: Hetzner pricing structure explained（価格の考え方）"
    url: "https://docs.hetzner.com/general/infrastructure-and-availability/hetzner-pricing-structure-explained/"
    accessedAt: "2026-11-02"
---

[DigitalOcean](/ja/articles/digitalocean)と[Hetzner](/ja/articles/hetzner)は、「安くて分かりやすいVPS」として同じ記事の中で並べられることが多い。ただし料金表を横に置くと、行の立て方からして違う。DigitalOceanの行は「メモリ・vCPU・転送量・SSD・時間単価・月額」をひとまとめにした定額のプランで、通貨は米ドルだけだ。Hetznerの行は時間単価と月額上限で、その下にロケーションごとの転送量と価格が並び、通貨はユーロか米ドルを選ぶ。この記事は、両社の公式ページを2026年11月2日に読み、書かれている数字と条件をそのまま並べる。当サイトは両サービスを契約して使い比べた体験を書いているのではなく、公開されている料金表とドキュメントを突き合わせている。ユーロとドルの換算はしていない。為替で順位が入れ替わる比較は、読者が申し込む日のレートで確かめるのが確実だからだ。料金は改定されるので、申し込む前に必ず公式ページを確認してほしい。

## 同じ形のVMの値段を並べる

:::fact
以下は、DigitalOceanのDroplet料金ページ（Basic Dropletの「Regular」とGeneral Purposeの表）と、Hetznerの料金ページ（Cost-Optimized・Regular Performance・General Purpose）を2026-11-02に読み、近い構成どうしを当サイトが並べ直したものだ。DigitalOceanは米ドル、Hetznerは料金ページの初期表示であるユーロ・税別で、Hetznerの価格はIPv4込みの表示になっている。Hetznerのアカウントを米ドルで作った場合の価格は、当サイトの取得方法ではページから読み取れなかった。

| 構成 | DigitalOcean（月額・SSD・転送量） | Hetzner EU（ドイツ・フィンランド） | Hetzner 米国・シンガポール |
| --- | --- | --- | --- |
| 最安 | 4ドル（1 vCPU・512MiB・SSD 10GiB・500GiB） | CX23（2 vCPU・4GB・40GB）5.99ユーロ。ただし「not available」表示 | 米国はCPX11（2 vCPU・2GB・40GB）17.99ユーロ・1TB |
| 1 vCPU・1GB | 6ドル（25GiB・1,000GiB） | CPX02（20GB）6.49ユーロ・20TB | シンガポール7.99ユーロ・0.5TB |
| 1 vCPU・2GB | 12ドル（50GiB・2,000GiB） | CPX12（40GB）11.99ユーロ・20TB | シンガポール15.99ユーロ・0.5TB |
| 2 vCPU・4GB | 24ドル（80GiB・4,000GiB） | CPX22（80GB）19.99ユーロ・20TB | シンガポール26.99ユーロ・1TB。米国は3 vCPUのCPX21が32.49ユーロ・2TB |
| 4 vCPU・8GB | 48ドル（160GiB・5,000GiB） | CPX32（160GB）35.99ユーロ・20TB | シンガポール49.49ユーロ・2TB。米国はCPX31が62.99ユーロ・3TB |
| 専有vCPU 2基・8GB | General Purpose 63ドル（25GiB・4,000GiB） | CCX13（80GB）43.49ユーロ・20TB | 米国43.99ユーロ・1TB、シンガポール54.49ユーロ・1TB |

DigitalOceanの料金ページは、BundledプランのほかにCPU・メモリを個別に選ぶv5 Dropletも案内しており、v5の価格は構成した資源に応じた時間単価になる。Hetznerの料金ページでは、旧世代のハードウェアを使うCost-Optimized（CX・CAX）の全プランに「not available」と表示されていた。
:::

:::guess
表の数字だけを見ると、EUに置く共有vCPUのVMは、Hetznerのほうが同じ月額の数字でSSDと転送量が大きい場面が多い。ただし「同じ数字」はユーロとドルの比較で、為替次第で差は縮みも広がりもする。一方で、米国に置く場合は話が変わる。HetznerのUS向けの共有vCPUはEUよりかなり高く、転送量も1TBからになるため、DigitalOceanの同じ形のプランとの差は小さいか、逆転する行もあるとみられる。専有vCPUの最小構成は、どの地域でもHetznerのCCX13の数字のほうが小さい。
:::

## 転送量と課金の単位

:::fact
DigitalOceanの転送量のドキュメントによれば、Dropletの各プランには送信の転送量が含まれ、超過分は1GiBあたり0.01ドル、受信は無料。含まれる量はDroplet1台ごとではなくチーム全体で合算され、月をまたいで繰り越せない。Dropletは存在した秒数に応じて課金され（分単位に丸め）、1請求期間あたり最大2,419,200秒（28日）までで、転送量の枠も存在した秒数に比例して積み上がる。料金ページによれば、2026年1月1日から秒課金に移り、最低課金は60秒か0.01ドルのうち高い方。転送量の価格に地域差はないと明記されている。DigitalOceanのファイアウォールのルールで落とした送信は課金しない。
:::

:::fact
Hetznerの料金ページによれば、EUのクラウドサーバーには少なくとも20TB、米国は少なくとも1TB、シンガポールは少なくとも0.5TBの転送量が含まれる。追加1TBごとの料金はEUと米国で1.00ユーロ、シンガポールで7.40ユーロ（税別）と表示されている（ページの文面は「per hour」と書かれており、単位の表記には揺れがある）。課金FAQによれば、課金されるのは送信だけで、受信と、同じネットワークゾーン内のHetzner Cloud同士、プライベートネットワーク、Hetznerの専用サーバーなどとの通信は無料。超過は100MB単位で切り上げる。サーバーの課金は時間単価と月額上限の低い方で、時間は切り上げなので数分だけ使っても1時間分かかる。電源を切っていてもサーバーが存在する限り課金される。
:::

:::fact
IPアドレスの扱いも違う。DigitalOceanの料金ページのFAQによれば、Bundledプランには公開IPv4が追加料金なしで含まれ、v5 DropletのIPv4は別の明細行になり、その導入価格は現在1時間0.00ドルだが、利用規約に従って変更されうると書かれている。Hetznerのドキュメントによれば、クラウドサーバーには公開IPが含まれず、Primary IPとして付ける。IPv6は無料、IPv4は月0.50ユーロ（税別）で、IPv4を付けずにサーバーを作ることもできる。
:::

:::guess
課金の単位の違いは、向いている使い方の違いとして表れるとみられる。CIのテストやバッチのように数分だけVMを立てて消す使い方では、秒課金のDigitalOceanのほうが端数の無駄が出にくい。月単位で動かし続け、外への送信量が大きい使い方（動画やファイルの配信、外部へのバックアップなど）では、EUのHetznerが1台に含める20TBの重みが大きい。DigitalOceanの転送量はチームで合算されるので、送信の少ないDropletを何台も持つチームなら、1台だけ大量に送るDropletの超過を吸収できる場合もある。どちらが安く済むかは、台数と送信量の分布で変わると考えられる。
:::

## ロケーションとデータの置き場所

:::fact
DigitalOceanのドキュメントによれば、同社は13のリージョンで20のデータセンターを運用し、新しい資源を作れるのは16か所。ニューヨーク、サンフランシスコ、アトランタ、リッチモンド（米国）、トロント（カナダ）、ロンドン（英国）、アムステルダム（オランダ）、フランクフルト（ドイツ）、シンガポール、バンガロール（インド）、シドニー（オーストラリア）などが並ぶ。Hetznerのドキュメントによれば、Hetzner Cloudのロケーションはファルケンシュタイン、ニュルンベルク（ドイツ）、ヘルシンキ（フィンランド）、アッシュバーン、ヒルズボロ（米国）、シンガポールの6か所。ドイツとフィンランドの3拠点は自社が所有・運用するデータセンターパークで、米国とシンガポールは他社のデータセンターのコロケーションを使う。専用サーバーはドイツとフィンランドでしか注文できない。米国とシンガポールの価格が違う理由について、Hetznerは運用コストが国によって異なり、米国とシンガポールでは欧州と同じ価格では賄えないと説明している。
:::

:::guess
どちらにも日本のリージョンはなく、日本の利用者にとって地理的に近いのはどちらもシンガポールになる。英国・カナダ・インド・オーストラリアの利用者に近い場所に置きたい場合は、DigitalOceanのほうが選択肢が多い。一方、EUの法域に、運営会社が自ら所有するデータセンターでデータを置きたい場合は、ドイツの会社が自社のデータセンターパークで運用するHetznerのEUロケーションが条件に合いやすいとみられる。
:::

## 通貨・税・支払い

:::fact
DigitalOceanのドキュメントによれば、支払いに使える通貨は米ドルだけで、請求書もすべて米ドル建て。法律にもとづき国ごとに税を課し、一部の地域では登録事業者がVATやGSTの番号を入力するとその税が外れる。国別の表では、日本は2021年10月1日から消費税10%、英国は20%、EU・米国・カナダは「Varies（地域による）」となっている。Hetznerのドキュメントによれば、アカウントの通貨はユーロか米ドルで、作成後は変えられない。料金表の価格は税別で、ドイツの顧客には19%、有効なVAT番号を持つEU域内の事業者にはリバースチャージ、VAT番号のないEU域内の顧客には各国の税率（オランダ21%など）、英国には20%を課す。米国はテキサス州の8%と、ユタ・アリゾナ・コロラド・ニューメキシコの各州の売上税だけを徴収する。表にない国（日本やカナダを含む）の顧客には、付加価値税なしで請求する。Hetznerの支払い方法はカード、SEPA口座引き落とし（ユーロのみ）、銀行振込、PayPalで、暗号資産は受け付けない。
:::

:::guess
日本の利用者から見ると、DigitalOceanは請求に消費税10%を上乗せし、Hetznerは付加価値税なしで請求する、という書き方の違いになる。ただし、国外の事業者から受けるサービスの消費税をどう扱うかは、事業者か個人か、課税事業者かどうかで変わる。数字の上の差がそのまま手元の差になるとは限らないので、事業で使う場合は税理士に確認するのが確実だ。米国の利用者にとっては、Hetznerが売上税を徴収する州は表に挙がった5州に限られ、DigitalOceanの米国の扱いは「Varies」とされている点が請求額に効いてくるとみられる。英国の利用者には、どちらも20%を課すと書いている。
:::

## 値段の安定性

:::fact
Hetznerは2026年、調達価格の急騰を理由に2度値上げした。2月23日の発表では、4月1日から既存の契約と新規の注文の両方の価格を上げるとした。5月27日の発表では、6月15日から全ロケーションの専用サーバーとクラウドプランの新規注文の月額を上げ、既存の契約は条件を維持し、新規注文と既存サーバーのリスケールにだけ新価格を適用するとした。課金FAQによれば、旧価格のサーバーは、リスケール（拡大でも縮小でも）、削除したサーバーの復元、別の通貨のプロジェクトへの移動で現在の価格に切り替わり、再構築や同じ通貨のプロジェクトへの移動では切り替わらない。DigitalOceanの料金ページでは、最安のDropletは月4ドルで、[DigitalOceanの解剖記事](/ja/articles/digitalocean)が2026年9月28日に確認した価格と変わっていない。料金ページが冒頭に掲げる2026年の変更は、1月1日からの秒課金への移行だ。
:::

:::guess
Hetznerの価格の考え方を説明する公式ドキュメントは、値段は実際の原価に基づくと書く。原価が上がれば料金表も動く、ということでもあり、2026年はそれが目に見えた年だったとみられる。6月以降は既存の契約が据え置かれているので、すでに動いているサーバーを持つ利用者には影響が限られる。一方で、サーバーを作り直して規模を変える運用を前提にするなら、その時点の価格で計算し直す必要がある。毎月の請求額を予測しやすいことを最優先にするなら、転送量を含めた定額を1行で示し、当サイトが確認した9月28日から最安の価格も変わっていないDigitalOceanのBundledプランのほうが読みやすいと当サイトはみる。
:::

## どんな使い方にどちらが合いやすいか

ここからは、上の料金表と条件を当サイトが読んだうえでの整理だ。優劣を付けるものではなく、使い方ごとに、公式の料金表のどの行が効いてくるかを示す。

:::guess
- **EUに置き、送信量が大きいサービス**（配信、ダウンロード、外部へのバックアップ）は、Hetznerの料金表が当てはまりやすいとみられる。EUでは1台に20TBが含まれ、超過も1TBあたり1.00ユーロと表示されている。DigitalOceanは同じ形のプランで4,000GiB前後で、超過は1GiBあたり0.01ドルになる。
- **CPUを専有したい本番の小さなサーバー**は、どの地域でもHetznerのCCX13の数字が小さい。DigitalOceanのGeneral Purposeの最小構成は63ドルで、SSDは25GiBだ。
- **数分だけ立てて消す使い方**（CI、検証、短いバッチ）は、秒課金のDigitalOceanのほうが端数の無駄が出にくい。Hetznerは作った時点で1時間分かかる。
- **512MiBで足りる試し用のVM**は、DigitalOceanの月4ドルが最も小さい入口になる。Hetznerの最小クラスであるCost-Optimizedは、2026年11月2日時点で注文できない表示だった。
- **米国・英国・カナダ・インド・オーストラリアの利用者の近くに置きたい場合**は、DigitalOceanのほうがリージョンの選択肢が多い。Hetznerの米国拠点は2か所で、共有vCPUの価格はEUより高く、転送量も1TBからだ。
- **物理サーバーを丸ごと借りたい場合**は、Hetznerがドイツとフィンランドで専用サーバーを月額で貸している。DigitalOceanの料金ページが案内するのは仮想マシンのDropletだ。
- **請求を米ドルに統一したい場合**はどちらも可能だが、Hetznerはアカウント作成時に選んだ通貨を後から変えられない。ユーロで経費を払う欧州の事業者には、SEPA引き落としが使えるHetznerのユーロ建てアカウントが合いやすいとみられる。
- 本番はHetznerのEUに置き、CIや一時的な検証環境はDigitalOceanで秒課金にする、といった使い分けも考えられる。ただしクラウドをまたぐ通信はどちらの側でも外向きの転送量として数えられるので、その分は織り込んでおく必要がある。
:::

## なぜ料金表の形が違うのか

:::fact
[DigitalOceanの解剖記事](/ja/articles/digitalocean)によれば、DigitalOceanは個人開発者や小さなチームに向けて「クラウドを1台のサーバーとして見せる」ことに徹し、CPU・メモリ・SSD・転送量をひとまとめにした定額プランを、従量項目の多い巨大クラウドの料金体系への対案として示してきた。[Hetznerの解剖記事](/ja/articles/hetzner)によれば、Hetznerはデータセンターとその土地を自社で所有し、サーバーを自社で組み、値段は実際の原価に基づいて内部補助をせず、割引もしないという方針を公式ドキュメントで説明している。
:::

:::guess
料金表の形の違いは、両社が何を約束しているかの違いから来ているとみられる。DigitalOceanが約束しているのは「請求額を事前に言い当てられること」だ。だから転送量はプランに含め、チームで合算し、地域差をなくし、通貨を米ドルに一本化する。秒課金への移行も、短い利用の端数を細かく刻むことで、使った分だけ払うという分かりやすさを強める方向にある。

Hetznerが約束しているのは「原価に近い値段」だ。だから地域ごとに運用コストが違えば価格も転送量も変え、旧世代のハードウェアは安く貸し、ハードウェアの調達価格が上がれば料金表も動かす。1時間の切り上げや電源オフ時の課金も、資源を確保していることの原価として説明される。料金表が読みにくく見えるのは、原価の構造がそのまま表に出ているからだと当サイトは見ている。

どちらの約束にも代償がある。DigitalOceanの単純さは、送信量の大きい使い方では割高に、Hetznerの原価連動は、原価が上がる局面では値上げとして跳ね返る。2026年は、その代償がHetzner側で表に出た年だったと推測される。
:::

DigitalOceanとHetznerは、同じLinuxのVMを別の約束で売っている。DigitalOceanは「1行で読める請求」を、Hetznerは「原価に近い値段」を約束する。申し込む側が見るべきなのは、どちらの最安値が小さいかより、自分のサーバーをどこに置き、どれだけ外へ送り、どれだけの時間動かすかだ。EUで長く動かし大量に送るのか、世界のあちこちで短く立てては消すのか。その答えが決まれば、2つの料金表のどの行を読めばよいかはおのずと決まる。
