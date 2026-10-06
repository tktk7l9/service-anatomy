---
service: "PayPay"
title: "登録7,460万人・決済のGMVは四半期で5.39兆円、加盟店の手数料は1.60%か1.98%、2026年3月にNasdaqへ上場 — 2024年3月期まで毎年赤字だったQRコード決済が、銀行・証券・保険へ広がるPayPayを解剖する"
description: "2018年に始まったQRコード決済PayPayは、2026年6月末で登録ユーザー7,460万人、月に1回以上支払う利用者4,170万人に達し、2026年3月12日に米Nasdaq（ティッカーPAYP）へ上場した。運営のPayPay株式会社は、ソフトバンクグループが議決権の90.62%を実質的に持つ会社だ。2026年3月期の売上収益は3,807億円（前年比+27%）、当期利益は1,178億円で、創業から2024年3月期までは毎年赤字だった。加盟店の決済手数料は月額1,980円のプランで1.60%、無料のプランで1.98%（いずれも税別）。年次報告書（Form 20-F）、決算発表と決算説明資料、加盟店向けの料金ページ、利用者向けのお知らせ、公式のプロダクトブログ、登壇資料、当サイトの実観測から、JavaとNode.jsのマイクロサービスにRustを足していく基盤、ポイントを本人確認と結びつけた2026年の制度変更、決済から銀行・証券・生命保険へ広げる稼ぎ方までを解剖する。"
lead: "PayPayの年次報告書には、創業から2024年3月期まで毎年赤字だったと書かれている。加盟店の手数料を2021年10月まで中小の店で無料にし、販促に大きな費用をかけて広げたQRコード決済は、2026年3月期に3,807億円の売上収益と1,178億円の利益を出し、米国の株式市場に上場した。いま会社が売り込んでいるのは決済そのものより、決済で集めた7,000万人超の利用者に、カード・銀行・証券・保険を重ねていく道筋だ。その組み替えが料金と技術と決算にどう現れているかを、公開情報だけで解剖する。"
category: consumer-app
tags: [fintech, payments, mobile-app, points, ipo, microservices, rust, kafka]
publishedAt: "2026-10-07"
updatedAt: "2026-10-07"
lastVerified: "2026-10-07"
serviceUrl: "https://paypay.ne.jp/"
# Affiliate link placeholder: the official site shows no consumer affiliate program for the PayPay
# app (checked 2026-10-07 on paypay.ne.jp and the merchant pages). Third-party affiliate directories
# report merchant sign-up (PayPay加盟店) programs on several ASPs, which this site could not verify
# without an ASP account. If the owner joins one, copy the ad code as provided (url, impressionUrl
# and the material's exact text as label). Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/<paypay-merchant-material>"
#   program: "PayPay"
vendor: "PayPay株式会社（ソフトバンクグループ傘下）"
origin: "JP"
heroTheme: "paypay"
scores: { product: 4.5, ux: 4.0, tech: 4.0, business: 4.5 }
techStack:
  - layer: "アプリケーション基盤"
    name: "Java + Spring Boot / Node.js / Kubernetes (on AWS)"
    confidence: confirmed
    evidence: "PayPayのプロダクトブログ「システムについて」（2019-04-19）に、AWS上にKubernetesのクラスターを作り、7つのコンポーネントに分かれたマイクロサービスを主にJavaとSpring Bootで実装し、一部にScalaとNode.jsを使うと明記。2025-02-19の記事も「創業の日からPayPayはJavaとNodeJSで動いてきた」と書く"
    evidenceUrl: "https://blog.paypay.ne.jp/en/about-the-paypay-stack/"
  - layer: "APIゲートウェイ"
    name: "Rust (Actix Web sidecar) + Nginx + Lua"
    confidence: confirmed
    evidence: "PayPayのプロダクトブログ「Scaling PayPay with Rust」（2025-02-19）に、APIゲートウェイのNginx（Luaで流量制限）の各Podに、Actix Webで書いたRustのサイドカー「proxy companion」を置き、認証やヘッダの正規化などの共通処理を移したと明記。CPUはJavaの1.5から0.15、Node.jsの40から2.4に減ったとしている"
    evidenceUrl: "https://blog.paypay.ne.jp/en/scaling-paypay-with-rust/"
  - layer: "決済のデータベース"
    name: "TiDB (payment microservice, migrated from Amazon Aurora)"
    confidence: confirmed
    evidence: "PayPay公式のSpeaker Deckの登壇資料「TiDB at PayPay」（2020-06-26）に、マイクロサービスはSpring BootとMySQL（Amazon Aurora）で、利用者と加盟店の増加でPaymentマイクロサービスのAuroraがボトルネックになり、MySQL互換で水平に拡張できるTiDBを選んだこと、EKS上ではTerraform・Helm・tidb-operatorで運用することを明記"
    evidenceUrl: "https://speakerdeck.com/paypay/tidb-at-paypay-why-we-chose-and-how-we-operate"
  - layer: "データストア・メッセージング"
    name: "Amazon RDS for MySQL / Apache Kafka"
    confidence: confirmed
    evidence: "2019-04-19の記事に、マイクロサービスごとにAmazon RDS（MySQL）のインスタンスを持ち、サービス間の連携とログの転送にApache Kafkaを使うと明記。監視にはNew Relic、Datadog、PagerDutyを挙げている"
    evidenceUrl: "https://blog.paypay.ne.jp/en/about-the-paypay-stack/"
  - layer: "カード事業のデータ連携"
    name: "Amazon MSK + AWS Glue (Spark)"
    confidence: confirmed
    evidence: "PayPayのプロダクトブログ（2025-11-05）に、PayPayカードは複数の用途で共有するKafkaのクラスターをAmazon MSKで運用し、AWS Glue（Spark）から毎日2GB超のCSVを流し込むと、ほかの書き手の遅延が10ミリ秒未満から800ミリ秒超に跳ねたため、並列数・zstd圧縮・linger.msを調整したと明記"
    evidenceUrl: "https://blog.paypay.ne.jp/en/kafka-burst-latency-how-we-optimised-aws-glue-with-msk-ingestion/"
  - layer: "加盟店ツール・不正検知"
    name: "Paytm Labs software (licensed)"
    confidence: confirmed
    evidence: "PayPayの年次報告書（Form 20-F、2026-06-30提出）に、Paytm Labs Inc.がPayPay My Storeのサービスと不正防止・マーケティングのソリューションに使うソフトウェアのライセンスを与えていると明記。LINEヤフーはカードの加盟店業務に必要なソフトウェアのライセンスを与えている"
    evidenceUrl: "https://ir.paypay.ne.jp/assets/20-F_-_Paypay_Corp_-_06-30-2026.pdf"
  - layer: "配信"
    name: "Amazon CloudFront + nginx (paypay.ne.jp)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-07）で、paypay.ne.jp は server: nginx と via: CloudFront（x-amz-cf-pop: NRT57）を返し、キャッシュの状態を示す x-cache-status と x-cached のヘッダが付いていた"
sources:
  - label: "PayPay Corporation: Annual Report on Form 20-F（2026-06-30）"
    url: "https://ir.paypay.ne.jp/assets/20-F_-_Paypay_Corp_-_06-30-2026.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay Corporation: First Quarter Ended June 30, 2026 Financial Results（2026-07-31）"
    url: "https://ir.paypay.ne.jp/assets/fy2026q1earnings/PayPay_FY2026Q1%20Earnings%20Release.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay Corporation: FY2026 Q1 Earnings Presentation（2026-07-31）"
    url: "https://ir.paypay.ne.jp/assets/fy2026q1earnings/PayPay_FY2026Q1%20Earnings%20Presentation.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay Corporation: FY2026 Q1 Prepared Remarks（2026-07-31）"
    url: "https://ir.paypay.ne.jp/assets/fy2026q1earnings/PayPay_FY2026Q1%20Prepared%20Remarks.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay Corporation: Fourth Quarter and Full Year ended March 31, 2026 Financial Results（2026-05-07）"
    url: "https://ir.paypay.ne.jp/assets/fy2025q4earnings/FY2025Q4%20Earnings%20Release.pdf"
    accessedAt: "2026-10-07"
  - label: "PayPay（加盟店向け）: 費用と振込サイクル"
    url: "https://paypay.ne.jp/store/cost/"
    accessedAt: "2026-10-07"
  - label: "PayPayからのお知らせ: 他社クレジットカード継続利用の方法について（2026-07-01）"
    url: "https://paypay.ne.jp/notice/20260701/c-card_voucher/"
    accessedAt: "2026-10-07"
  - label: "PayPay Product Blog: システムについて（About the PayPay stack、2019-04-19）"
    url: "https://blog.paypay.ne.jp/en/about-the-paypay-stack/"
    accessedAt: "2026-10-07"
  - label: "PayPay Product Blog: Scaling PayPay with Rust（2025-02-19）"
    url: "https://blog.paypay.ne.jp/en/scaling-paypay-with-rust/"
    accessedAt: "2026-10-07"
  - label: "PayPay Product Blog: Kafka Burst Latency: How We Optimized AWS Glue with MSK Ingestion（2025-11-05）"
    url: "https://blog.paypay.ne.jp/en/kafka-burst-latency-how-we-optimised-aws-glue-with-msk-ingestion/"
    accessedAt: "2026-10-07"
  - label: "PayPay（Speaker Deck）: TiDB at PayPay : Why we chose & How we operate（2020-06-26）"
    url: "https://speakerdeck.com/paypay/tidb-at-paypay-why-we-chose-and-how-we-operate"
    accessedAt: "2026-10-07"
---

PayPayは、スマートフォンでQRコードを読み取るか見せるかして支払う決済アプリだ。2018年に始まり、街の小さな店から公共料金の請求書まで、日本の「現金以外の払い方」の入口になった。運営のPayPay株式会社は2026年3月に米国のNasdaqに上場し、いまは決済の上にクレジットカード、銀行、証券、そして生命保険を重ねる会社として自らを説明している。当サイトが解剖した[Square](/ja/articles/square)が店の側からキャッシュレスを広げたのに対し、PayPayは利用者の側から広げてきた。

## サービス解説

PayPayの利用者は、アプリに入金した残高（PayPay残高）か、PayPayカードと結びつけた「PayPayクレジット」で支払い、友だちに送金し、ポイントを受け取る。グループには同名のカード会社・銀行・証券会社があり、どれも同じアプリから入れる。

:::fact
PayPayの年次報告書（Form 20-F、2026年6月30日提出）によれば、同社は2018年6月15日にPay株式会社として設立され、同年7月にPayPay株式会社に社名を変えた。本社は東京都新宿区。2026年3月12日（米国時間）に米国預託証券（ADS）がNasdaq Global Select Marketで取引を始め（ティッカーPAYP）、売り出しを含む計63,235,295 ADSを1 ADS 16ドルで売り、手取りは約946億円（6億300万ドル）だった。2026年5月31日時点の大株主は、ソフトバンクとLINEヤフーが半分ずつ持つBホールディングス（47.07%）、SVF II Piranha（DE）LLC（28.48%）、ソフトバンク（7.54%）、LINEヤフー（7.54%）で、ソフトバンクグループが議決権の90.62%を実質的に持つとみなされる。連結の従業員数は2026年3月末で4,567人。
:::

:::fact
同じ報告書によれば、2026年3月末の登録ユーザーは約7,300万人で、日本のスマートフォン利用者の78%にあたる。2025年の日本のコード決済の取扱高のうち65%をPayPayが占め、国内のキャッシュレス決済約435億件のうち20%がPayPayのコード決済だった。2025年の送金（送る・受け取る）は約5億2,300万件で、コード決済の個人間送金の98%を占める。2027年3月期第1四半期の決算発表（2026年7月31日）によれば、2026年6月末の登録ユーザーは7,460万人、6月に1回以上支払った利用者（MTU）は4,170万人で、登録者に対する比率は56%だった。決算説明会の原稿は、PayPayが1日に約3,000万件の支払いを処理していると述べる。
:::

:::pull
創業から2024年3月期まで毎年赤字。手数料を無料にして広げた決済は、7,000万人超の利用者に金融を重ねる入口になった。
:::

::scorecard

## UX分析

PayPayの体験は「店が何も買わなくても始められ、利用者はアプリを開くだけで払える」ことに向けて作られてきた。2026年は、その入口に本人確認とカードの条件を組み込む年になっている。

- **どちらが読み取ってもいい**。年次報告書によれば、利用者はアプリに表示したコードを店に読み取ってもらうか、店のPayPayのコードを読み取って支払う。店は印刷したコードを置く方式なら端末を買わずに導入でき、加盟店のサポートは24時間365日受け付ける。
- **ポイントは本人確認と引き換えに**。決算発表によれば、2026年6月2日にポイントの制度を大きく改め、本人確認（eKYC）を済ませることをポイント付与の条件にし、PayPayポイントで払った分へのポイント付与をやめ、PayPayカード ゴールドの上乗せ（利用額の+0.5%）を、年間100万円以上の利用で11,000ポイントを贈る「年間利用特典」に替えた。本人確認を済ませた利用者は6月末に4,250万人で、前の四半期から190万人増えた。同社は、利用者の定着と取扱高への影響は想定の範囲に収まり、6月だけで約10億円の費用が減ったとしている。
- **他社のカードは「利用券」経由に**。PayPayのお知らせ（2026-07-01）によれば、PayPayカード以外のクレジットカードは、2026年7月1日に始まった「他社カード利用券」（1万円単位で最大25万円、Visa・Mastercardのみ、追加の利用料なし）を買って使う形に変わり、従来の支払い方は2026年8月末に終わる予定だ。三井住友カードが発行する個人向けカードは従来の方式を続ける。決算説明資料は、この変更を「赤字の解消」と表し、他社カードの利用はQRコード決済の取扱高（2026年3月期で15.5兆円）の1.4%だったと示す。
- **送金は事実上の標準**。コード決済の個人間送金の98%がPayPayを通っており、割り勘や子どもへのお小遣いの受け渡しといった使い方が、決済とは別に利用者をアプリに呼び戻す。
- **弱点はルールの変化の速さ**。ポイントの条件、カードの扱い、手数料の体系が数カ月単位で変わり、利用者と加盟店は前提が変わるたびに使い方を見直すことになる。ポイント目当ての利用が多い層ほど、制度変更の影響を受けやすいとみられる。

## 技術構成

::techstack

:::fact
PayPayのプロダクトブログ（2019-04-19）は、話題になった「100億円キャンペーン」を支えるシステムとして全体像を紹介している。それによれば、PayPayのシステムはAWS上のKubernetesのクラスターで動くマイクロサービスの集まりで、アプリ用のBFF、決済、残高、ユーザー、リスク、加盟店、キャンペーン管理の7つのコンポーネントに分かれ、決済のコンポーネントだけで十数個のマイクロサービスがある。各システムは主にJavaとSpring Bootで書かれ、一部にScalaとNode.jsを使い、マイクロサービスごとにAmazon RDS（MySQL）を持ち、キャッシュにElastiCache、サービス間のメッセージングにApache Kafkaを使う。PayPay公式のSpeaker Deckに載る2020年6月26日の登壇資料は、サービス開始から1年7カ月の2020年4月に利用者が2,800万人を超え、1秒あたりのトランザクション数が伸びて決済のマイクロサービスのAmazon Auroraがボトルネックになったため、MySQL互換で水平に拡張できるTiDBを選び、検証ではAuroraの3倍のトランザクションを処理したと説明する。
:::

:::fact
2025年2月19日の記事「Scaling PayPay with Rust」によれば、PayPayは創業の日からJavaとNode.jsで動いてきたが、規模が大きくなるにつれてKubernetes上のCPUとメモリの使用量とサーバー費が増え、2023年末にGraalVM、Go、Rustなどを比べてRustを選んだ。最初の検証では、APIゲートウェイのNginxの各Podに、Actix Webで書いたRustのサイドカー「proxy companion」を置き、認証やヘッダの正規化などの共通処理を移した。トラフィックの少ない機能ではJavaの1.5 CPU・6GBがRustの0.15 CPU・75MBに、次の機能ではNode.jsの40 CPU・24GBが2.4 CPU・240MBに減り、平均の遅延は約30%下がったとしている。2025年11月5日の記事は、PayPayカードが共有のKafkaのクラスターをAmazon MSKで運用し、AWS Glue（Spark）からの毎日の一括投入でほかの書き手の遅延が跳ねた問題を、並列数の調整とzstd圧縮で解いたと書く。年次報告書は、基盤をクラウドネイティブのマイクロサービスと説明し、2026年3月末にPayPay株式会社とPayPay Indiaの従業員の約48%が製品と技術の開発に携わり、その人材は48カ国にわたると書く。Paytm Labsからは、加盟店向けのPayPay My Storeと不正防止・マーケティングに使うソフトウェアのライセンスを受けている。当サイトの実観測（2026-10-07）では、paypay.ne.jp は server: nginx と CloudFront を返した。
:::

:::guess
PayPayの基盤は、作り直すのではなく、費用や性能の限界が見えた部品から入れ替えてきた形とみられる。書き込みが集中する決済のデータベースはAuroraからTiDBへ、トラフィックをすべて受けるゲートウェイの共通処理はJavaとNode.jsからRustのサイドカーへ移った。どちらも「アプリの書き方はそのままで、一番重いところだけを差し替える」選び方で、毎日3,000万件を処理しながら止めずに移すための現実的な手順と推測される。2019年の記事が「100億円キャンペーンを支えるシステム」としてこの構成を紹介していたことからは、急激な利用の伸びに耐えることを最優先に、各チームが独立して作れるマイクロサービスと、実績のあるJavaを選んだ初期の判断が、今も土台として残っているとみられる。
:::

## ビジネスモデル

収益は、加盟店から受け取る決済手数料、カードの利息や手数料などの決済セグメントと、銀行・証券の金融サービスセグメントの2本立てだ。利用者がアプリでお金を払うこと自体は無料のままで、払う回数と金額が増えるほど、手数料と金融の取引が増える。

:::fact
加盟店向けの料金ページ（2026-10-07確認・税別）によれば、決済システム利用料は、月額1,980円の「PayPayマイストア ライトプラン」をすべての実店舗で契約すると1.60%、それ以外は1.98%で、初期費用と機器費用はかからない。PayPayクーポンを使った取引には、取引額の3%の利用料が別にかかる。売上金の振り込みは月1回（月末締め、最短で翌日入金）なら手数料が無料で、早く受け取る早期振込サービスでは振込額の0.38%に加え、PayPay銀行なら20円、ほかの銀行なら200円がかかる。年次報告書によれば、PayPayは2021年10月まで中小の加盟店から決済手数料を取らず、その後すべての加盟店から受け取るようになった。2026年3月期には、決済手数料が決済セグメントの売上収益の61.5%を占めた。
:::

:::fact
決算発表によれば、2026年3月期の売上収益は3,807億円（前年比+27%）、当期利益は1,178億円（同+201%）で、繰延税金資産の計上による一時的な税効果575億円を含む。調整後EBITDAは1,111億円。年次報告書は、創業から2024年3月期まで毎年赤字だったと書く。2027年3月期第1四半期（2026年4〜6月）の売上収益は1,098億円（前年同期比+27%）で、決済セグメントが886億円（同+25%）、金融サービスセグメントが225億円（同+44%）。決済セグメントの取扱高（GMV）は5.39兆円（同+23%）で、売上収益を取扱高で割ったテイクレートは1.64%。当期利益は197億円（同+83%）、調整後EBITDAは374億円（利益率34%）だった。会社は通期の売上収益の予想を4,650億〜4,730億円、調整後EBITDAを1,490億〜1,550億円に引き上げた。
:::

:::fact
金融サービスは、2025年4月にPayPay銀行とPayPay証券を連結子会社にしてから伸びている。2026年6月末のPayPay銀行の口座数は1,020万、預金残高は2.3兆円、貸出残高は1.3兆円（前年同期比+37%）、PayPay証券の口座数は182万。2026年6月にはT&Dフィナンシャル生命の議決権の70.2%を取得する契約を結び、取得費用は約1,343億円の見込みで、2027年10月1日の完了を予定する。7月31日にはセブン＆アイ・ホールディングスとの資本・業務提携を発表し、約22,000店・1日約2,000万人の来店とPayPayの約7,500万人の利用者をつなぐとした。年次報告書は、Visaと組んで米国でデジタルウォレットを始めるための新会社を検討中だとも書く。
:::

:::guess
PayPayの稼ぎ方は、決済の手数料で利益を出す形から、決済を「毎日の接点」として金融商品を売る形へ移りつつあるとみられる。テイクレートは1.6%台で大きくは動かない一方、金融サービスの売上は前年同期比+44%で伸びている。決済で得た利用者と加盟店の取引の記録は、カードの審査、加盟店向けの融資、生命保険の商品設計に使える材料になりうる。2026年のポイントの見直しで本人確認を条件にしたことは、不正対策であると同時に、銀行口座や証券口座を開くときの手間を減らし、金融の商品へ誘導する入口を整える意味を持つと推測される。
:::

:::guess
他社のクレジットカードを利用券に切り替えた判断は、手数料を払って他社カードの決済を受け付けるより、自社のPayPayカードとPayPayクレジットに利用を寄せたほうが採算が良いという計算に基づくとみられる。決算説明資料が他社カードの取扱高を1.4%と示し、変更を赤字の解消と表したことからは、使い勝手と採算の釣り合いを、自社のカードに寄せる方向で取り直したとも読める。ただ、ソフトバンクグループが議決権の9割を持つ構造のもとで、ソフトバンクの携帯料金やLINEヤフーのサービスとの結びつきが強まるほど、グループ外の利用者や加盟店にとっての中立性がどう保たれるかは、上場企業として問われ続けると推測される。
:::

2018年に手数料無料と大きな販促で広がったQRコード決済は、2024年3月期まで毎年赤字を出しながら、7,000万人超の利用者と日本のコード決済の65%を手にした。2026年、PayPayはその規模を米国の市場に示し、ポイントとカードの条件を絞り、生命保険とコンビニとの提携へ進んだ。払うための道具だったアプリは、いま、金融を売るための毎日の入口として設計し直されている。
