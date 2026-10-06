---
service: "Mistral AI"
title: "重みを配り、置き場所を売る — Mistral AIが「主権AI」で稼ぐ仕組み"
description: "フランスのAI研究所Mistral AIは、主力モデルの重みをApache 2.0や改変MITライセンスで公開しながら、2026年9月に評価額210億ユーロ超で30億ユーロを調達したと発表した。Le Chatを改称したエージェント「Vibe」、従量課金のAPI、リージョン指定の推論、自社の計算基盤Mistral Compute——公開情報から、重みを無料で配る研究所がどこで収益を得ているのかを解剖する。"
lead: "Mistral AIの料金ページには、質問への答えとして「モデルはどこでも自前で動かせる」と書かれている。主力のMistral Large 3とSmall 4はApache 2.0、最新のMedium 3.5は改変MITライセンス（月間売上2,000万ドル超の企業は対象外で、別途の商用ライセンスが要る）で重みが公開されている。それでも同社は2026年9月、評価額210億ユーロ超で30億ユーロのシリーズDを発表した。配ってしまえるものを作る会社が、何を売っているのか。公式サイトとドキュメント、応答ヘッダーの観察から解剖する。"
category: ai-tool
tags: [ai-assistant, llm, api, open-source, sovereign-ai, coding-agent]
publishedAt: "2026-10-01"
updatedAt: "2026-10-06"
lastVerified: "2026-10-02"
serviceUrl: "https://mistral.ai/"
vendor: "Mistral AI SAS"
origin: "FR"
heroTheme: "mistral"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "基盤モデル"
    name: "Mistral Medium 3.5 / Large 3 / Small 4 (open weights)"
    confidence: confirmed
    evidence: "公式のモデル一覧に、Mistral Large 3とSmall 4は「Apache 2.0」、Medium 3.5は「Modified MIT」のライセンス表示つきで掲載されていることを実確認（2026-10-01）。Medium 3.5のLICENSEファイルは、月間売上が2,000万ドルを超える企業を対象外とし、商用ライセンスの取得を求めている（Hugging Faceで2026-10-02確認）"
    evidenceUrl: "https://mistral.ai/models/"
  - layer: "計算基盤"
    name: "Mistral Compute (NVIDIA GB200 / GB300)"
    confidence: confirmed
    evidence: "公式のAI Cloudページに、GPUとして「GB200・GB300・B300」、2026年2月に「GB200 serving production」、EU域内で2030年までに1GWという容量目標が記載されている"
    evidenceUrl: "https://mistral.ai/cloud/compute/"
  - layer: "推論APIの提供形態"
    name: "Regional Endpoints (Europe / US) + Priority Tier"
    confidence: confirmed
    evidence: "公式発表（2026-08-11）に、推論を欧州と米国のどちらで実行するか選べるRegional Endpointsを一般提供、稼働率SLAつきのPriority Tierを公開プレビューと明記"
    evidenceUrl: "https://mistral.ai/news/regional-inference-open-models-new-compute/"
  - layer: "CDN / エッジ"
    name: "Cloudflare"
    confidence: likely
    evidence: "mistral.ai・api.mistral.ai の応答ヘッダーに server: cloudflare と cf-ray があり、ネームサーバーも ns.cloudflare.com を返す（curl -sI と dig で実確認）。公式の技術説明は未確認のためlikely扱い"
  - layer: "公式サイト（mistral.ai）"
    name: "Astro + Netlify"
    confidence: likely
    evidence: "トップページのHTMLが /_astro/ 配下のアセットと data-astro- 属性を持ち、応答ヘッダーに cache-status: \"Netlify Edge\" と x-nf-request-id がある（実確認）。公式の言及は未確認"
  - layer: "ドキュメント（docs.mistral.ai）"
    name: "Next.js + Vercel"
    confidence: likely
    evidence: "docs.mistral.ai の応答ヘッダーに server: Vercel、x-nextjs-prerender、x-vercel-cache がある（実確認）。llms.txt へのLinkヘッダーも返している"
  - layer: "APIゲートウェイ"
    name: "Kong"
    confidence: likely
    evidence: "api.mistral.ai と console.mistral.ai の応答ヘッダーに x-kong-request-id と x-kong-response-latency がある（実確認）。構成の詳細は公開されていない"
sources:
  - label: "Mistral公式: Models（モデル一覧とライセンス表示）"
    url: "https://mistral.ai/models/"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: mistralai/Mistral-Medium-3.5-128B LICENSE（Modified MIT License・月間売上2,000万ドル超の企業は対象外）"
    url: "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/blob/main/LICENSE"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: Pricing（Free / Pro / Team / Enterpriseの料金とFAQ）"
    url: "https://mistral.ai/pricing/"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: API pricing（モデル別の従量単価・Regional inferenceの割増・Enterprise APIs・ツール料金）"
    url: "https://mistral.ai/pricing/api/"
    accessedAt: "2026-10-02"
  - label: "Mistral公式ドキュメント: Regional inference（定価の1.1倍・対象は入力・出力・キャッシュの読み書き）"
    url: "https://docs.mistral.ai/inference/regional-inference"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: シリーズD発表（30億ユーロ・評価額210億ユーロ超・Samsung Electronicsが主導）"
    url: "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: シリーズC発表（2025-09-09・17億ユーロ・評価額117億ユーロ・ASMLが主導）"
    url: "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: Regional Endpoints・第三者オープンモデル・European Compute Unitsの発表（2026-08-11）"
    url: "https://mistral.ai/news/regional-inference-open-models-new-compute/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: AI Cloud / Mistral Compute（GPU世代・タイムライン・1GW目標）"
    url: "https://mistral.ai/cloud/compute/"
    accessedAt: "2026-10-06"
  - label: "Mistral公式: Mistral Compute発表（2025-06-11）"
    url: "https://mistral.ai/news/mistral-compute/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: Vibe gets to work（2026-05-28・Le ChatをVibeに改称）"
    url: "https://mistral.ai/news/vibe-agent/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: Mistral Medium 3.5発表（2026-05-22・128B・改変MIT・ベンチマークは同社公表値）"
    url: "https://mistral.ai/news/vibe-remote-agents-mistral-medium-3-5/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: Introducing Mistral 3（2025-12-02・Large 3とMinistral 3をApache 2.0で公開）"
    url: "https://mistral.ai/news/mistral-3/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: About（創業の経緯・主要な日付・共同創業者）"
    url: "https://mistral.ai/about/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: Privacy Policy（運営法人・学習利用とオプトアウト・保持期間・EU域外移転）"
    url: "https://legal.mistral.ai/terms/privacy-policy/"
    accessedAt: "2026-10-01"
  - label: "Mistral公式: Commercial Terms of Service（14.10 準拠法と管轄・顧客の本社所在地による3区分）"
    url: "https://legal.mistral.ai/terms/commercial-terms-of-service"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: EEA域外の消費者向け利用規約（第10条 準拠法・管轄・仲裁合意）"
    url: "https://legal.mistral.ai/terms/row-consumer-terms"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: EEAの消費者向け利用規約（第12条 準拠法と管轄）"
    url: "https://legal.mistral.ai/terms/eu-consumers-terms-of-service"
    accessedAt: "2026-10-02"
  - label: "Mistral公式ドキュメント: Zero data retention（対象エンドポイントと対象外の製品）"
    url: "https://docs.mistral.ai/admin/monitor-comply/zero-data-retention"
    accessedAt: "2026-10-01"
  - label: "Wikipedia: Mistral AI（シード〜シリーズBの調達額と評価額・提携報道の集約）"
    url: "https://en.wikipedia.org/wiki/Mistral_AI"
    accessedAt: "2026-10-01"
---

## サービス解説

Mistral AIは、パリに本社を置くAI研究所だ。公式のAboutページによれば、大手テック企業が技術を閉じ始めた2022年の状況を見た共同創業者たちが「開かれた、欧州発のAI企業」を構想し、2023年4月に設立した。共同創業者はArthur Mensch（CEO）、Guillaume Lample（Chief Science Officer）、Timothée Lacroix（CTO）の3人。プライバシーポリシーには、運営法人がパリで登記されたフランス企業であることが明記されている。

現在の公式サイトは、製品を5つに整理している。エージェント「Vibe」、コーディング用の「Vibe for code」、開発者向けの「Studio」、モデルを自社データで鍛える「Forge」、そして計算基盤の「AI Cloud」だ。トップページの見出しは「Frontier AI. In your hands.」、その下に「組織がそれぞれに合わせたAIシステムを構築するのを支援する」という趣旨の一文が続く。個人向けチャットよりも、企業と政府を正面の顧客として語っているサイトである。

:::fact
公式サイトで確認できる事実は次のとおり。2026年5月28日の発表で、対話アシスタント「Le Chat」は「Vibe」に改称され、会話・設定・契約プランはそのまま引き継がれた（旧URLの /products/le-chat は /products/vibe へ転送されることを実確認）。モデルは、Mistral Large 3とMistral Small 4がApache 2.0、Mistral Medium 3.5が改変MITライセンスで重みを公開している。2026年9月8日付の発表では、Samsung Electronicsが主導するシリーズDで30億ユーロを調達し、調達後の評価額は210億ユーロ超、20か国で事業を行い125社以上の企業を支援していると述べている。
:::

:::pull
重みは誰でも持ち帰れる。売っているのは、そのモデルを「どこで、誰の管理下で動かすか」という選択肢のほうだ。
:::

::scorecard

## UX分析

今回は公開ページとドキュメントの観察に基づく。有料機能を実際に使った評価ではない。なお、アプリ本体（chat.mistral.ai）はコマンドラインからの取得に対してCloudflareのチャレンジ（HTTP 403、cf-mitigated: challenge）を返したため、ログイン後の画面は確認していない。

- **看板を1つにまとめ直した**。チャットの「Le Chat」とコーディングエージェントの「Vibe」は別々の名前だったが、2026年5月に「Vibe」へ統一された。公式発表は「1つのエージェント、1つのライセンス」と説明しており、Work Mode（調査・資料作成・定型業務）とCode Mode（リモートのコーディングエージェント）を同じ契約で使う構成になっている。
- **料金表は4段で、数字が明示されている**。Free、Pro（月14.99ドル、税別）、Team（1ユーザー月24.99ドル、税別）、Enterprise（問い合わせ）。学生は認証を受けるとProが月5.99ドルになると記載されている。ユーロ表示に切り替えても数字は同じ14.99 / 24.99だった。
- **サブスクリプションにAPIクレジットが付く**。Freeプランにも月10ドル分のAPIクレジットが含まれると書かれており、チャットの利用者を開発者プラットフォームのStudioへ誘導する導線になっている。プランの上限を超えたぶんは、API単価の従量課金で続けられる。
- **入口が多い**。料金ページはWeb、CLI、IDE拡張（VS CodeとJetBrains）、モバイル（iOS / Android）を並べている。CLIのドキュメントには、OpenAI互換APIの背後で動く任意のモデルを使えるという説明があり、自前で動かすモデルにも接続できる作りだ。
- **利用上限は相対表現が多い**。「無料の最大6倍のメッセージ」「最大40倍の画像生成」のように、絶対数ではなく無料プラン比で書かれた項目が目立つ。FAQには「Flash answersはProで1日150回、Teamで1日200回」という具体例もあるが、契約前に上限の全体像を数字で把握するのは難しい。

学習へのデータ利用については、料金表の「Model training」の行に「Opt-out」と表示されている。プライバシーポリシーは、入力と出力をモデルの学習に使うこと、利用者がアカウント設定から拒否できることを記載している。

## 技術構成

::techstack

:::fact
モデルについて、公式のモデル一覧と各発表から確認できること。Mistral Large 3（2025年12月2日発表）は有効41B・総計675Bパラメータの疎なmixture-of-expertsで、基盤版と指示チューニング版がApache 2.0で公開された。Mistral Small 4（2026年3月16日発表）は総計119Bパラメータで、Apache 2.0。Mistral Medium 3.5（2026年5月22日発表）は128Bの密なモデルで、改変MITライセンスの重みがHugging Faceで公開されている。このライセンスは、会社（または雇用主）の全世界の連結売上が前月に2,000万ドルを超える場合は権利を行使できないと定め、その場合はMistralに商用ライセンスを求めるか、同社のホスト型サービスを使うよう案内している（Hugging FaceのLICENSEファイル、2026-10-02確認）。料金ページのFAQも、「モデルはどこでも自前で動かせる」と答えたうえで、オープンウェイトのモデルは研究・個人利用向けにApache 2.0で提供し、商用の導入には派生物と本番利用について別条件のMistralのライセンスが必要だと続けている。同社はMedium 3.5について「SWE-Bench Verifiedで77.6%」「最少4基のGPUで自前運用できる」と公表している（いずれもMistral自身の公表値で、本記事では再現していない）。一方、モデル一覧にはOCR 4.1やCodestralのように「Premier」と表示されたモデル、CC BY-NC 4.0のVoxtral TTSもあり、すべてが同じ条件で開かれているわけではない。
:::

:::fact
計算基盤について。Mistral Computeは2025年6月11日に発表された自社のAIインフラで、公式ページのタイムラインは「2025年4月に構想承認、同年7月にGB200のラック搬入、2026年2月にGB200が本番稼働、スウェーデン拠点（EcoDataCenter）が進行中、同年3月に最初の外部顧客」と記している。容量の目標は「2030年までにEU域内で1GW」。2026年8月11日には、推論を欧州と米国のどちらで実行するか選べるRegional Endpointsの一般提供、稼働率SLAつきのPriority Tierの公開プレビュー、第三者のオープンモデル（Z.aiのGLM-5.2から）の取り扱い開始を発表した。API料金ページには現在、GLM 5.3とGLM 5.2が「Third-party」の表示つきで並んでいる（2026-10-02確認）。Regional Endpointsについて同社は、選択した地域の外にある再委託先へ限定的な移転が生じうると注記している。
:::

Webの観察結果も記録しておく。mistral.ai は Cloudflare の背後にあり、HTMLは /_astro/ 配下のアセットを読み込み、応答ヘッダーには Netlify Edge のキャッシュ表示がある。docs.mistral.ai は server: Vercel と Next.js のプリレンダリングを示すヘッダーを返し、llms.txt を Link ヘッダーで案内している。api.mistral.ai は未認証のリクエストに401を返し、Kongのリクエストidをヘッダーに付けていた。トップページのCSPには、同意管理のAxeptio、HubSpotのEUリージョン（js-eu1）、Google Analyticsのオリジンが列挙されている。

:::guess
「欧州の主権」を掲げる会社の公式サイトが、Cloudflare・Netlify・Vercelという米国企業の配信基盤に載っている点は、矛盾というより線引きの表れとみられる。同社が主権と呼んでいるのは、顧客の入力データと推論の実行場所、そしてモデルの重みに対する支配であり、誰でも読めるマーケティングサイトやドキュメントの配信はその範囲外と整理しているのではないかと推測される。また、3系統に分かれていたモデル（指示追従・推論・コーディング）をSmall 4とMedium 3.5で1つの重みに統合しているのは、自前で運用する顧客が抱えるモデルの本数を減らす狙いがあると考えられる。配る前提のモデルでは、性能だけでなく「何基のGPUで動くか」が製品仕様の一部になるためだ。
:::

## ビジネスモデル

重みを公開している会社の収益源は、公式ページから読める範囲で少なくとも5つに分かれている。

:::fact
1つ目はAPIの従量課金。API料金ページの表示では、100万トークンあたりMistral Medium 3.5が入力1.5ドル・出力7.5ドル、Mistral Large 3が入力0.5ドル・出力1.5ドル、Mistral Small 4が入力0.15ドル・出力0.6ドル。バッチ処理は50%引き、キャッシュされた入力は最大90%引きとFAQに書かれている。2つ目はその上乗せ商品で、推論の地域を指定する「Regional inference」は定価の10%増しと料金ページに表示され、ドキュメントは入力・出力・キャッシュの読み書きのいずれも定価の1.1倍で課金すると説明している。「Enterprise APIs」は地域単位のデータ処理の制御、システム単位のSLA、レート上限の引き上げ、優先サポートを含み、対象APIの定価に75%を加えた価格で提供すると明記されている。3つ目はVibeのサブスクリプション（Pro月14.99ドル、Team 1ユーザー月24.99ドル）。4つ目はEnterprise契約で、料金表には自社ホスト・プライベートクラウド・オンプレミスへの「Custom deployments」、カスタムモデル、監査ログ、SAML SSO、ホワイトラベルが並び、価格は問い合わせ制。Medium 3.5の商用ライセンス（月間売上2,000万ドル超の企業向け）も、ライセンスの文面によれば営業窓口への問い合わせで個別に付与される。5つ目は計算資源そのもので、複数年の利用確約をMistralが構築するインフラへのアクセス権に変える「European Compute Units（ECU）」を2026年8月に発表している。
:::

:::fact
資金調達は、公式発表と報道で次のように伝えられている。Wikipediaの集約によれば、2023年6月のシードが1億500万ユーロ（評価額はFinancial Timesの推定で2億4,000万ユーロ）、同年12月が3億8,500万ユーロ、2024年6月が6億ユーロ（評価額58億ユーロ）。Mistral自身の発表では、2025年9月9日のシリーズCがASML主導で17億ユーロ・調達後評価額117億ユーロ、2026年9月のシリーズDがSamsung Electronics主導で30億ユーロ・調達後評価額210億ユーロ超。同社はシリーズDを「欧州のテクノロジー企業による過去最大のエクイティ調達」と表現している。このほかWikipediaは、2026年3月にパリ近郊とスウェーデンのデータセンター建設のため8億3,000万ドルを調達したこと、同年7月にMicrosoftと欧州のAIインフラに関する契約を結んだとLe Figaroが報じたことを記載している。売上高は公式には公表されていない。
:::

「主権AI」という位置づけは、同社自身の言葉で定義されている。シリーズDの発表は、主権を4つの次元の支配として説明する——組織の境界内にとどまるデータ、制御とカスタマイズが可能なモデル、専有できて予測可能な計算資源、制御と監査が可能な本番システム。2026年8月の発表は「顧客の大半は、すでに自社のデータセンターやクラウド環境の中で当社のモデルを動かしている」と述べ、Mistral Computeの発表は、米国または中国に拠点を置くクラウド・AI事業者に代わる選択肢を待っていた地域に向けたものだと書いている。

データの扱いも、この位置づけに沿って文書化されている。プライバシーポリシーは、EU域内の事業者を優先して選び、例外的に域外の事業者を使う場合はGDPR第46条の保護措置と標準契約条項を付すとしている。入力と出力は、出力の生成に必要な期間に加えて不正利用の監視のため30日間保持されるが、有料プランではステートレスなAPIに限って保持をなくすZero data retentionを申請できる。会話履歴を持つVibeのWorkやChatは、その対象外と明記されている。

準拠法は、利用者の所在地で分かれる。法人向けのCommercial Terms of Service（2026年9月25日発効）の14.10は、顧客の本社所在地を基準に、南北アメリカはカリフォルニア州法とサンタクララ郡の連邦・州裁判所、日本を含むアジア太平洋はシンガポール法とシンガポールの裁判所、それ以外はフランス法とパリの裁判所と定める。EEA域外の消費者向け規約（同日発効）の第10条も、居住地を基準に同じ3区分を置く。この規約はあわせて、紛争を米国仲裁協会（AAA）の消費者仲裁規則に基づくサンタクララ郡での仲裁で解決するという合意と、規約に同意してから30日以内に通知すればその合意から外れられることを定めている。EEAの消費者向け規約（2026年8月7日発効）の第12条は、居住国の裁判所に居住国の法で訴えを起こせるほか、パリの裁判所にフランス法で訴えることもできるとする。運営法人はフランス企業だが、これらの文書に従えば、日本の法人顧客と消費者に適用される準拠法はシンガポール法である。

:::guess
重みの公開は、収益を手放す行為というより、販売の入口として機能しているとみられる。重みが手元にあれば、顧客は調達の前に自社環境で試せるうえ、特定ベンダーに縛られないという説明が成り立つ。そのうえでMistralが課金しているのは、定価に75%を上乗せするEnterprise APIsや問い合わせ制のEnterprise契約が示すとおり、地域の指定、SLA、カスタマイズ、運用支援といった「重み以外の部分」が中心だと考えられる。ただし最新のMedium 3.5は売上の大きい企業に商用ライセンスを求めており、重みの利用許諾そのものも、大企業向けには売り物に含まれるとみられる。ECUと1GWの目標は、この構造をさらに計算資源の側へ広げる動きと推測される。モデルが配られて差がつきにくくなるほど、欧州域内で確保された計算容量という希少な資産を持つことが、価格を保つ根拠になりうるためだ。一方で、データセンターは先に資金が出ていく事業であり、売上高が公表されていない現時点では、調達額に見合う収益が立っているかを外部から判断する材料は限られる。シリーズCをASML、シリーズDをSamsung Electronicsという製造業の企業が主導している点は、同社が純粋な財務投資だけでなく、産業側の顧客兼株主を集めていることを示しているとみられる。
:::

チャットの名前を変え、モデルの系統を束ね、計算基盤まで自社で持つ。この1年のMistralの動きは、「良いモデルを公開する研究所」から「モデルの置き場所まで含めて引き受ける事業者」への移行として読める。重みを配ることと、それで稼ぐことは、同社の設計の中では対立していない。配れるものを配ったうえで、配れないもの——場所、保証、容量——と、大企業向けの利用許諾に値段を付けている。
