---
title: "Paddle と Stripe の比較 — 売り手を引き受けるマーチャント・オブ・レコードか、決済を処理するプロセッサーか。手数料・売上税とVATの責任・Stripe Managed Paymentsを公式ページで並べる"
description: "PaddleとStripeを、両社の公式の料金ページ・規約・ドキュメント（2026-11-02閲覧）だけを根拠に比較する。Paddleは製品を再販する売り手として、チェックアウト1件5%+50セントで売上税・VAT・チャージバック・購入者サポートまで引き受ける。Stripeは標準では決済を処理し、税はStripe Tax（0.5%〜）で計算する形で、マーチャント・オブ・レコードが要ればManaged Paymentsで3.5%を上乗せする。税の責任が残る範囲、購入者に見える売り手の名前、売れる商品と国、入金の頻度と通貨を並べ、どんな事業にどちらが合いやすいかを整理する。税務の助言ではない。"
lead: "海外の購入者にソフトウェアやSaaSを売り始めると、決済の手数料より先に、各国の売上税やVATを誰が登録し、集め、納めるのかという問題にぶつかる。Paddleはその答えとして、自分が売り手になる。Stripeは長く、決済を処理し、税の計算を道具として渡す側にいたが、今はManaged Paymentsで売り手を引き受ける選択肢も持つ。両社の公式ページを2026年11月2日に読み、手数料、税の責任、売り手の名前、売れるもの、入金を横に並べ、2つのモデルの違いがどこに出るのかを解剖する。"
slugA: "paddle"
slugB: "stripe"
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2027-03-31"
    claim: "Paddleのネイティブの従量課金（Usage-Based Billing）が2027年初めにプライベートプレビューに入るという発表（2026-10-20）"
sources:
  - label: "Paddle: Pricing（5% + 50¢）"
    url: "https://www.paddle.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Paddle: Master Services Agreement（利用規約、最終更新 2026-10-06）"
    url: "https://www.paddle.com/legal/terms"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: The legal relationship between Paddle and you"
    url: "https://www.paddle.com/help/start/intro-to-paddle/the-legal-relationship-between-paddle-and-you"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Acceptable Use Policy"
    url: "https://www.paddle.com/support/aup"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: Which countries are supported by Paddle?"
    url: "https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle"
    accessedAt: "2026-11-02"
  - label: "Paddle Help Center: When and how do I get paid?"
    url: "https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid"
    accessedAt: "2026-11-02"
  - label: "Paddle: Why has Paddle charged me?"
    url: "https://www.paddle.com/about/why-has-paddle-charged-me"
    accessedAt: "2026-11-02"
  - label: "Paddle: Sales tax compliance software"
    url: "https://www.paddle.com/billing/tax-and-compliance"
    accessedAt: "2026-11-02"
  - label: "Paddle: Paddle vs Stripe（Paddle側の比較ページ）"
    url: "https://www.paddle.com/compare/stripe"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Supported countries"
    url: "https://developer.paddle.com/concepts/sell/supported-countries-locales"
    accessedAt: "2026-11-02"
  - label: "Paddle Developer Docs: Supported currencies"
    url: "https://developer.paddle.com/concepts/sell/supported-currencies"
    accessedAt: "2026-11-02"
  - label: "Paddle Blog: Paddle launches AI Toolkit（2026-10-20）"
    url: "https://www.paddle.com/blog/paddle-launches-ai-toolkit-bringing-global-selling-into-ai-workflows"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing（英国）"
    url: "https://stripe.com/gb/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing（オランダ）"
    url: "https://stripe.com/en-nl/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe: Pricing（カナダ）"
    url: "https://stripe.com/en-ca/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe: 料金体系（日本）"
    url: "https://stripe.com/jp/pricing"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments"
    url: "https://docs.stripe.com/payments/managed-payments"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: How Managed Payments works"
    url: "https://docs.stripe.com/payments/managed-payments/how-it-works"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments eligibility"
    url: "https://docs.stripe.com/payments/managed-payments/eligibility"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments tax compliance"
    url: "https://docs.stripe.com/payments/managed-payments/tax-compliance"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Managed Payments changelog"
    url: "https://docs.stripe.com/payments/managed-payments/changelog"
    accessedAt: "2026-11-02"
  - label: "Stripe Docs: Payouts（入金スケジュールと売上処理のタイミング）"
    url: "https://docs.stripe.com/payouts"
    accessedAt: "2026-11-02"
  - label: "Stripe Newsroom: Stripe 2025 annual letter（2026-02）"
    url: "https://stripe.com/newsroom/news/stripe-2025-update"
    accessedAt: "2026-11-02"
---

[Paddle](/ja/articles/paddle)と[Stripe](/ja/articles/stripe)は、どちらも「SaaSやアプリの課金に使うサービス」として名前が挙がる。ただし2社が引き受けている役割は同じではない。Paddleは開発者の製品を再販する売り手になり、税もチャージバックも購入者の問い合わせもまず自分が受ける。Stripeの標準の形では売り手は開発者自身で、Stripeは決済を処理し、税の計算や請求の部品を渡す。そのStripeが、マーチャント・オブ・レコード（MoR）としての売り手を引き受けるManaged Paymentsを出したことで、比較の軸は「手数料の率」から「どこまでを誰が引き受けるか」に移った。この記事は、両社の公式の料金ページ・規約・ドキュメントを2026年11月2日に読み、書かれていることを並べる。当サイトは両サービスを契約して使った体験を書いているのではない。料金と条件は改定されるので、申し込む前に必ず公式ページを確かめてほしい。また、売上税・VAT・消費税の扱いは事業者ごとに異なり、この記事は税務の助言ではない。

## 2つのモデル: 売り手になるか、決済を処理するか

:::fact
Paddleの利用規約（最終更新2026年10月6日）は、売り手がPaddleを自社製品の非独占的な再販業者に任命すると定め、再販業者であるからこそPaddleが売上税の徴収・申告・納付を扱い、売上代金から売上税を差し引いて納付できると書く。MoRとして製品の販売価格を設定する権利もPaddleが留保している。ヘルプセンターは、Paddleは「決済代行業者」ではなく認定再販業者だと説明している。購入者向けのページによれば、購入者はPaddleから買っていることになり、カード明細にはPaddleの名前が載る。
:::

:::fact
Stripeのドキュメント（2026-11-02閲覧）は、Managed Paymentsを「Stripeのマーチャント・オブ・レコード・ソリューション」とし、Stripe CheckoutまたはPayment Linksで、各国に現地法人を置かずにSaaS、ソフトウェア、デジタルコンテンツを売れると説明する。売上税・VAT・GSTの準拠、不正対策、不審請求の申し立て（チャージバック）の対応、取引単位の顧客サポートをStripeが担う。Managed Paymentsの変更履歴によれば、2026年4月22日に39か国の事業者向けに一般提供が始まった。利用資格のページは、製品がManaged Paymentsの対象に当たらないと考える場合はStripe Taxで準拠に対応できると書いている。Stripeの料金ページでは、Stripe TaxのBasicプランは「自動の税額計算のみ」を含み、しきい値の監視・登録・計算・申告までを含むのはTax Completeとされる。
:::

:::pull
Paddleでは、最初から最後まで売り手はPaddleだ。Stripeでは、売り手を自分のままにするか、取引ごとにStripe側へ渡すかを選ぶ。
:::

## 手数料を並べる

:::fact
以下は、Paddleの料金ページと規約、Stripeの英国・オランダ・カナダ・日本向けの料金ページ（いずれも2026-11-02閲覧）に書かれている数字を、当サイトが並べ直したものだ。Stripeの米国向け料金ページは、当サイトの所在地からは日本向けのページへ転送されて読めなかったため、米国の料率は載せていない。

| 項目 | Paddle | Stripe |
| --- | --- | --- |
| 基本の手数料 | チェックアウト取引1件につき5% + 50¢。月額料金なし | 英国: 標準的な英国カード1.5% + 20p、欧州経済領域のカード2.5% + 20p、その他の海外カード3.15% + 20p。オランダ: 標準的な欧州経済領域のカード1.5% + €0.25、英国カード2.5% + €0.25。カナダ: 国内カード2.9% + CA$0.30、海外カードは0.8%を加算。日本: カード3.6% |
| 通貨換算 | 規約上、売り手が残高通貨と異なる通貨で受け取る場合に最大1.5%の換算マージン | 英国・オランダ・カナダ・日本: 換算が必要な場合2%を加算 |
| サブスクリプション課金 | 5% + 50¢に含まれる | Billingの従量制はBilling取引額の0.7% |
| 税の計算・徴収 | 5% + 50¢に含まれ、Paddleが登録・徴収・納付 | Tax Basic（ノーコード連携）: 税の徴収を登録した地域の取引1件につき0.5%。英国ではTax Completeが月額£70から（1年契約） |
| MoR | 5% + 50¢に含まれる | Managed Payments: Payments手数料に加えて、成功した取引1件につき3.5% |
| 請求書 | 銀行振込で払われる請求書はSRPの3.5% | Invoicing Starter: 支払い済み請求書1件につき0.4% |
| チャージバック | 返金・チャージバックの全額と処理費用に加え、1件につき最大20ポンド・ドル・ユーロ（豪ドル・カナダドルは40） | 英国: 申し立て受領手数料£20。日本: 1件1,500円 |
| 少額・大口 | 10ドル未満の製品は個別料金を相談可。大口はカスタム料金 | 大口向けのカスタム料金（IC+、ボリューム割引など） |
:::

:::fact
Paddleの規約は、手数料の基準となる推奨販売価格（SRP）を「購入者が製品に支払う価格」と定義している。Paddleの比較ページは、Stripeでサブスクリプションを売る場合の費用が税込みの金額に対して取引あたり7〜9%に積み上がると主張し、自社の「実質合計」を5% + 50¢、Stripeを「7.1% + 30¢超」と表示している。Stripe側の料金ページには、この合計を示す行はない。
:::

:::guess
Paddleの「7〜9%」は、Stripeの海外カード、通貨換算、Billing、Tax、Managed Paymentsを重ねた場合の見積もりとみられる。実際にどの行が積み上がるかは、売り手の所在国、購入者の国とカード、通貨、使う製品によって変わる。たとえば英国の事業者が英国の購入者に英国カードでポンド建てのサブスクリプションを売るなら、料金表の上では1.5% + 20pにBillingの0.7%とTaxの0.5%を足す形になる。ただし税の登録と申告は売り手自身の仕事のまま残る。逆に、米国の事業者が世界中の消費者に売り、各国でVATやGSTを登録したくない場合は、Managed Paymentsの3.5%か、Paddleの5% + 50¢かという比較になる。Managed Paymentsの取引にBillingの0.7%が別にかかるかどうかは、当サイトが読んだページには書かれていなかった。比べるときは、料率だけでなく、自分で残る作業の手間と、税の登録にかかる費用を同じ表に入れる必要があると考えられる。
:::

## 税の責任はどこまで移るか

:::fact
Paddleの税と準拠のページ（2026-11-02閲覧）は、Paddleが「100を超える管轄」で売上税を登録・徴収・納付すると書き、比較ページは「270超の税管轄」、2026年10月20日の発表は顧客が売る市場を「300を超える」と表現する。開発者ドキュメントは、200を超える国と地域で販売でき、Paddleがすべての国と通貨で税を計算し、売上税の責任を負うと書いている。対応国の一覧では、日本、英国、オランダは税込み表示、米国とカナダは税別表示に分類されている。
:::

:::fact
Stripeのドキュメント（2026-11-02閲覧）によれば、Managed Paymentsは80を超える国で、デジタル製品の売上税・VAT・GSTを計算・徴収し、登録と申告を行い、納付する。料金ページの説明は「75を超える国」としている。Managed Paymentsが税の準拠を扱わない国の取引については、売り手が責任を負い、その税額計算にはStripe Taxを追加料金なしで使えるとされる。国内取引については、Managed Paymentsが使える国のうち、シンガポール（B2Bの国内取引）と日本（すべての国内取引）が除外されており、日本に拠点を置く事業者は、日本国内の顧客への販売について税の計算・徴収・申告・納付を自分で行う必要があると明記されている。返金時には、一部の管轄でStripeが元の売上税を納付し続ける必要があるため、その分だけ売り手の残高が減るという。
:::

:::guess
「MoRだから税の心配はなくなる」という理解は、どちらのサービスでも条件付きとみられる。Paddleは対象国の数を広く示しているが、管轄・国・市場という異なる単位で書かれており、自分の購入者がいる国が含まれるかは対応国の一覧で確かめる必要がある。Stripe Managed Paymentsは、日本の事業者の国内販売を明示的に対象外にしているので、日本の開発者が日本の顧客に売る分は、消費税の扱いを自分で考える前提になる。Paddleについて、日本の事業者が日本の購入者に売る場合の扱いを特に説明したページは、当サイトが読んだ範囲では見つからなかった。どちらを選ぶにしても、自分の売上がどの国に立つかを先に整理し、税理士に確認するのが確実だ。
:::

## 購入者に見える「売り手」の名前

:::fact
Paddleの購入者向けページは、カード明細にPaddleの名前があるのは、Paddleが提携するソフトウェア会社の製品を買ったためで、paddle.net で取引を調べ、解約や返金を申し込めると案内している。Paddleの規約は、売り手のサイトがPaddleの再販業者としての立場をはっきり示すことを求めている。Stripeのドキュメントによれば、Managed Paymentsの取引では、購入者はチェックアウト・領収書・購入後のサポートでLinkとやり取りし、Linkをマーチャント・オブ・レコードとして見て、購入は「Sold through Link」と表示される。カード明細の表記は「LINK.COM* [売り手の明細表記]」になり、領収書や請求書、返金の通知はLinkから送られ、Managed Paymentsのチェックアウトでは独自ドメインを使えない。Stripeは、売り手に確認が必要な問い合わせで48時間以内に返答がない場合、売り手の承認なしに返金することがあるとしている。
:::

:::guess
どちらのMoRでも、購入者が最初に目にする売り手の名前は自社ではなくなるとみられる。Paddleでは「Paddle」、Stripe Managed Paymentsでは「Link」だ。開発者にとっては、明細を見た購入者からの問い合わせや「知らない請求」による返金依頼が、自社ではなくMoRの窓口に向かうことになる。自社ブランドを明細とチェックアウトの最後まで通したい事業者は、標準のStripeで自分が売り手のままでいる形を選ぶ理由になると考えられる。
:::

## 売れるものと、使える国

:::fact
Paddleの利用ポリシー（2026-11-02閲覧）は、Paddleを「ソフトウェア企業（B2BのSaaS、消費者向けソフトウェア、ゲームを含む）」向けとし、物理的な配送を伴う商品、ソフトウェアに関係しない人的サービス（コンサルティング、コーチング、ITサービスなど）、寄付やクラウドファンディング、第三者に販売させるマーケットプレイス、規制対象の金融商品、決済サービスなどを禁止している。売り手として使えない国として、ロシア、ベラルーシ、イラン、北朝鮮、キューバなどを挙げる。購入者側では、開発者ドキュメントの対応国一覧に、中国を含む229の国と地域が並び、ロシアやイランなど23の国と地域が対象外とされている。
:::

:::fact
Stripeのドキュメント（2026-11-02閲覧）によれば、Managed Paymentsは利用資格の審査を経て使え、事業者の所在地として米国、カナダ、英国、オランダ、ドイツ、フランス、アイルランド、オーストラリア、香港、日本、シンガポールなどが並ぶ。対象はソフトウェア、ビデオゲーム、電子書籍や音声・動画などのデジタルメディア、オンライン講座、ウェブホスティングのような電子的に提供されるサービスで、物販、コンサルティング・マーケティング・デザイン・開発・技術サポートといった専門サービス、対面のイベントは対象外だ。人の介在を伴うサービス（ライブの1対1コーチングなど）も対象外とされる。連携の形は直接の連携だけで、Connectのプラットフォームや、プラットフォームが管理するアカウントでは使えない。購入者は195を超える国と地域から買えるが、中国、キューバ、イラン、北朝鮮、ロシア、シリアなどからは買えない。2026年6月2日には、AIをサービスとして提供する製品の税コードが対象に加わった。
:::

:::guess
両社のMoRが扱う商品の範囲は、「人が介在しないデジタル製品」という点でよく似ているとみられる。どちらも、税の分類がはっきりし、納品をシステムで確かめられる商品に絞っている。違いが出るのは周辺で、購入者の国の一覧では、Paddleは中国の購入者を対象に含め、Stripe Managed Paymentsは中国を対象外にしている。中国の購入者が多い製品なら、この1行が選択を左右しうる。逆に、コンサルティングと抱き合わせのSaaSや、マーケットプレイス型の事業は、どちらのMoRにも載らず、標準のStripeとStripe Taxで自分が売り手になる形が現実的だと考えられる。
:::

## 入金の頻度と通貨

:::fact
Paddleのヘルプセンター（2026-11-02閲覧）によれば、入金は月1回だ。毎月1日に、残高が売り手の設定した下限額（最低100ドル、100,000ドルまで設定可能）を超えていれば支払い待ちになり、15日までに送金され、着金までさらに最大3営業日かかる。売り手は残高を好きなときに引き出せない。残高として持てる通貨はUSD・EUR・GBP・AUD・CADの5つで、開発者ドキュメントの送金通貨の一覧に日本円はない。購入者は日本円を含む30を超える通貨で払える。
:::

:::fact
Stripeの入金のドキュメント（2026-11-02閲覧）によれば、入金の頻度は日次・週次・月次・手動から選べ、売上が入金可能になるまでの期間は国ごとに決まっている。初回はカナダ・日本・オランダ・英国で7暦日、米国で2営業日。以降の標準は、カナダ・オランダ・英国が3営業日、日本が4営業日とされる。日本では日次入金は使えず、標準は手動で、週次と月次も選べる。日本の入金先は、本人名義の普通預金または当座預金で、WiseやPayoneerのように本人名義の口座を開かない仮想口座には入金できない。
:::

:::guess
入金の設計の違いは、2つのモデルの違いをそのまま映しているとみられる。Paddleは売り手として返金とチャージバックの請求を後から受けるので、残高を月単位でためてから払う。Stripeの標準の形では売り手が自分で責任を負うので、数営業日ごとの入金を選べる。毎週の入金で資金繰りを回したい小さな事業者と、月次の締めでまとめて受け取れればよい事業者とでは、同じ手数料でも使い勝手の評価が変わると考えられる。日本の開発者がPaddleを使う場合は、ドルやユーロで受け取り、円への換算を自分の銀行や送金サービスで行う前提になる。
:::

## どんな事業にどちらが合いやすいか

ここからは、上の料金と条件を当サイトが読んだうえでの整理だ。優劣を付けるものではなく、事業の形ごとに、どちらのモデルのどの条件が効いてくるかを示す。

:::guess
- 世界中の個人や企業にSaaSやダウンロード型ソフトウェアを売り、各国の売上税やVATの登録・申告を自分で持ちたくない小さなチームは、PaddleかStripe Managed Paymentsのどちらかが候補になるとみられる。料金表の上では、Paddleは5% + 50¢の1行、Managed Paymentsは各国のカード手数料に3.5%が加わる形で、どちらが安くなるかは購入者の国・カード・単価で変わる。
- 単価が低い製品（数ドルのアプリ内課金や、10ドル未満のプランなど）は、Paddleの50セントの固定部分が重くなる。Paddleは10ドル未満の製品に個別の料金を用意しているので、申し込む前に見積もりを取る価値があると考えられる。
- すでにStripeで決済やBillingを組んでいる事業者は、Managed PaymentsをCheckoutやPayment Linksに追加する形で、市場や商品を選んでMoRを試せる。Stripeの料金ページは、すべての取引にも、特定の市場や商品だけにも使えると書いている。ただしManaged PaymentsはStripe Checkoutか支払いリンクが前提で、独自ドメインは使えない。
- 中国の購入者が多い製品は、購入者の国の一覧でPaddleが中国を含み、Stripe Managed Paymentsが中国を対象外にしている点が効いてくる。
- 日本に拠点を置き、日本の顧客にも売る開発者は、Stripe Managed Paymentsでは日本国内の販売の税を自分で扱う前提になる。Paddleでは残高を日本円で持てない。どちらでも、国内分の消費税の扱いを税理士と確認しておく必要があると考えられる。
- コンサルティングや導入支援を含む契約、マーケットプレイス、物販を伴う事業は、両社のMoRの対象外の商品にあたるため、標準のStripeとStripe Taxで自分が売り手になる形が現実的だと推測される。その場合、税の登録と申告は自社の仕事として残る。
- 明細やチェックアウトを自社ブランドのまま通したい事業者は、売り手の名前がPaddleやLinkになるMoRより、標準のStripeが合いやすいとみられる。
:::

## なぜこの2社の形は違うのか

:::fact
[Paddleの解剖記事](/ja/articles/paddle)によれば、Paddleは2012年に創業し、Mac向けソフトウェアのライセンス販売から始まって、MoRとしてSaaSの課金に広がった。2026年10月20日の発表で、PaddleはAIツールから課金を設定できるAI Toolkitを発表し、ネイティブの従量課金が2027年初めにプライベートプレビューに入るとした。Stripeの2025年の年次レター（2026年2月）によれば、Stripe上の総決済額は前年比34%増の1.9兆ドルで、世界のGDPの約1.6%にあたる。[Stripeの解剖記事](/ja/articles/stripe)は、Stripeを、APIとドキュメントを製品の顔とした決済インフラとして描いている。
:::

:::guess
2社の形の違いは、最初に何を引き受けたかの違いから来ているとみられる。Paddleは、ひとりの開発者がMacアプリを世界に売るときの面倒をまるごと引き取るところから始まった。だから最初から売り手になり、料金を1行にまとめ、扱う商品を絞り、入金を月単位にした。Stripeは、決済を自社のサービスに組み込む開発者に部品を渡すところから始まった。だから料金は部品ごとに積み上がり、税も最初は計算の道具として渡し、売り手を引き受けるManaged Paymentsも、CheckoutやPayment Linksという既存の部品に後から足す形をとっている。

その結果、Paddleは「全部任せる」入口を1つだけ持ち、Stripeは「自分でやる」から「任せる」までを取引単位で選べる幅を持つ。どちらが優れているかではなく、自分がどこまでを手放したいか、どの国に売るか、売り手の名前を誰にしたいかで、選ぶべき入口は変わると当サイトは考える。
:::

PaddleとStripeの違いは、手数料の率より先に、売り手が誰かにある。Paddleでは最初から最後まで売り手はPaddleで、税もチャージバックも問い合わせも5% + 50¢の中に入っている。Stripeでは売り手は自分のままで、税の計算や請求を部品として足していき、必要ならManaged Paymentsで売り手をStripe側に渡せる。選ぶ側が先に答えるべきなのは、どの国の誰に、何を売るのか、そして税の登録と申告をどこまで自分で持つのかだ。その答えが決まれば、2つの料金表のどの行を読めばよいかはおのずと決まる。
