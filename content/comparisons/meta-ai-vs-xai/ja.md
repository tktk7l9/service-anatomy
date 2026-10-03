---
title: "広告が払うAIと、計算資源を貸すAI — Meta AIとxAI、ギガワット級の請求書は誰が持つのか"
description: "Meta AIとxAI（現SpaceXAI）は、どちらも上場した親会社とSNSの中にあり、ギガワット単位の計算資源を建てている。違うのは請求書の持ち方だ。Metaは売上の約98%を占める広告でAIを賄い、アシスタントは無料のまま。SpaceXのAI部門は営業損失を出しながら、建てた計算資源を他のAI企業に月額で貸している。決算資料、料金表、API価格、モデルの公開範囲、提供地域を、両社の公開資料から並べる。"
lead: "Metaの2026年4〜6月期の売上は608億ドルで、うち広告が593.6億ドル。SpaceXのAI部門（xAI・Grok・X）の2025年の売上は32億ドルで、営業損失は63.6億ドルだった。どちらも対話AIを自社のSNSの中に置き、ギガワット単位のデータセンターを建てている。だが「その費用を誰が払うのか」への答えは別々だ。片方は広告で払い、もう片方は建てた計算資源を他社に貸している。2つの解剖記事と両社の公開資料を重ねて、その違いを数字で確かめる。"
slugA: "meta-ai"
slugB: "xai"
publishedAt: "2026-10-02"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "SEC EDGAR: Meta 2026年第2四半期決算プレスリリース（Form 8-K Exhibit 99.1・2026-07-29。売上・広告・その他の売上・設備投資・通期見通し。当サイトのMeta AIの記事で2026-10-01に確認した内容を参照）"
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050596/meta-06302026xexhibit991.htm"
    accessedAt: "2026-10-01"
  - label: "SEC EDGAR: Meta Form 10-Q（2026年6月期。AI投資の目的・第三者クラウド容量契約・その他の売上の増加要因。当サイトのMeta AIの記事で2026-10-01に確認した内容を参照）"
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm"
    accessedAt: "2026-10-01"
  - label: "SEC: Space Exploration Technologies Corp. Form S-1（2026-05-20提出。AI部門の業績・COLOSSUS・Anthropicとの契約・有料会員数。当サイトのxAIの記事で2026-10-01に確認した内容を参照）"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
    accessedAt: "2026-10-01"
  - label: "Meta Model API ドキュメント: Pricing and rate limits（標準ティア・コントリビューターティアの単価）"
    url: "https://dev.meta.ai/docs/pricing-rate-limits"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI公式ドキュメント: Models（モデル別のコンテキスト長とAPI価格）"
    url: "https://docs.x.ai/developers/models"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI公式ドキュメント: Pricing（長いコンテキストの料金・Batch・Priority・米国エンドポイント）"
    url: "https://docs.x.ai/developers/pricing"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI公式ドキュメント: Security FAQ（APIのデータを学習に使わないこと・30日保存）"
    url: "https://docs.x.ai/developers/faq/security"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom: Introducing Meta One（2026-09-15・プランと米ドル価格・1,500万件の登録とトライアル）"
    url: "https://about.fb.com/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom 日本版: Meta One（日本円の価格・税込・Meta AIの日常利用は無料）"
    url: "https://about.fb.com/ja/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/"
    accessedAt: "2026-10-02"
  - label: "Apple App Store（米国）: Grok（販売元X Corp.・SuperGrok各プランのアプリ内課金）"
    url: "https://apps.apple.com/us/app/grok/id6670324846"
    accessedAt: "2026-10-02"
  - label: "Apple App Store（日本）: Grok（日本円のアプリ内課金）"
    url: "https://apps.apple.com/jp/app/grok/id6670324846"
    accessedAt: "2026-10-02"
  - label: "Apple App Store（米国）: X（X Premium各プランのアプリ内課金）"
    url: "https://apps.apple.com/us/app/x/id333903271"
    accessedAt: "2026-10-02"
  - label: "Apple App Store（日本）: X（X Premium各プランの日本円のアプリ内課金）"
    url: "https://apps.apple.com/jp/app/x/id333903271"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI公式ドキュメント: FAQ - Grok Website / Apps（週単位の利用枠・無料枠・X Premiumとの関係）"
    url: "https://docs.x.ai/grok/faq"
    accessedAt: "2026-10-02"
  - label: "Meta AI Research Blog: Introducing Muse Glimmer（2026-08-10・重みをApache 2.0で公開）"
    url: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model"
    accessedAt: "2026-10-02"
  - label: "Meta開発者サイト: Llama（世代別のライセンスと利用ポリシー）"
    url: "https://dev.meta.ai/llama"
    accessedAt: "2026-10-02"
  - label: "GitHub: xai-org/grok-1（コードとGrok-1の重み・Apache 2.0）"
    url: "https://github.com/xai-org/grok-1"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: xai-org/grok-2（Grok 2の重み・xAI Community License Agreement）"
    url: "https://huggingface.co/xai-org/grok-2"
    accessedAt: "2026-10-02"
  - label: "AI at Meta: Meta AI アシスタント紹介ページ（ページ説明文・無料・提供面）"
    url: "https://ai.meta.com/meta-ai/assistant/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom 日本版: Muse登場（2026-09-09・米国で提供開始・日本での提供は現時点で未定）"
    url: "https://about.fb.com/ja/news/2026/09/introducing-muse-personal-ai-agent/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom 日本版: Meta AI Convenience Store（2025年11月から日本でMeta AIを段階提供）"
    url: "https://about.fb.com/ja/news/2026/08/meta-ai-convenience-store/"
    accessedAt: "2026-10-02"
  - label: "Meta Data Centers: Richland Parish Data Center（Hyperionを収容する5ギガワットの計算能力）"
    url: "https://datacenters.atmeta.com/richland-parish-data-center/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom: Expanding Meta's Custom Silicon（2026-03-11・MTIAと複数社からの調達）"
    url: "https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom: Launching Meta Enterprise Platform（2026-09-28・事業の次の大きな柱）"
    url: "https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/"
    accessedAt: "2026-10-02"
  - label: "Yahoo Finance: Anthropic to rent all AI capacity at SpaceX's Colossus data center（2026-05-06）"
    url: "https://finance.yahoo.com/news/anthropic-to-rent-all-ai-capacity-at-spacexs-colossus-data-center-180327774.html"
    accessedAt: "2026-10-02"
  - label: "CNBC: Google to pay SpaceX $920 million a month for compute capacity at xAI data centers（2026-06-05）"
    url: "https://www.cnbc.com/2026/06/05/google-to-pay-spacex-920-million-a-month-for-xai-compute-capacity.html"
    accessedAt: "2026-10-02"
---

[Meta AI](/ja/articles/meta-ai)と[xAI](/ja/articles/xai)（2026年7月から「SpaceXAI」を名乗る）には、外形の共通点が多い。どちらも単独のAI企業ではなく、上場した大きな親会社の一部だ。どちらも自社のSNSを持ち、対話AIをその中に置いている。そしてどちらも、ギガワット単位の計算資源を建てている。

違いは、その費用の払い方にある。この記事は性能の優劣を扱わない。当サイトはどちらの有料機能も実際には操作しておらず、以下はすべて両社の公開資料、SECへの提出書類、報道に基づく。

## 同じ「SNSの中のAI」でも、会計上の置き場所が違う

まず、数字が載っている場所を確かめる。Metaは会社全体の決算の中でAIを語り、SpaceXはAIを1つの部門として切り出している。

:::fact
Metaの2026年第2四半期（4〜6月）の決算プレスリリースによれば、売上は608.01億ドル、うち広告が593.63億ドル、Family of Appsの「その他の売上」が10.07億ドル、Reality Labsが4.31億ドル。設備投資（ファイナンスリースの元本返済を含む）は同四半期に310.8億ドルで、2026年通期の見通しは1,300〜1,450億ドル。営業利益率は31%だった。MetaはAI単独の売上や、AI向けに限った設備投資額を区分して開示していない。
:::

:::fact
SpaceXがSECに提出したForm S-1（2026年5月20日）によれば、同社は事業を「Space」「Connectivity」「AI」の3部門に分けており、Grokと[X](/ja/articles/x)はどちらもAI部門に入る。AI部門の2025年の売上は32億100万ドル、営業損失は63億5,500万ドル、設備投資は127億2,700万ドル。2026年1〜3月は売上8億1,800万ドル、営業損失24億6,900万ドル、設備投資77億2,300万ドルだった。Grok単体やX単体の損益は区分して開示されていない。
:::

この2組の数字は、範囲も期間もそろっていない。Metaの数字は会社全体の1四半期、SpaceXの数字はAI部門だけの通年と1四半期だ。そのうえで、当サイトの計算として比率を出しておく。

| | Meta（全社・2026年4〜6月） | SpaceXのAI部門（2026年1〜3月） |
| --- | --- | --- |
| 売上 | 608.01億ドル | 8.18億ドル |
| 設備投資 | 310.8億ドル | 77.23億ドル |
| 設備投資÷売上（当サイトの計算） | 310.8÷608.01＝約0.51倍 | 77.23÷8.18＝約9.4倍 |
| 営業損益 | 営業利益率31% | 営業損失24.69億ドル |

Metaの広告の比率は、当サイトの計算で593.63÷608.01＝約98%。「その他の売上」は10.07÷608.01＝約1.7%だ。SpaceXのAI部門は、2025年通年で見ると営業損失が売上の約2.0倍（63.55÷32.01）、設備投資が約4.0倍（127.27÷32.01）になる。

:::pull
設備投資は、Metaでは四半期の売上の約半分。SpaceXのAI部門では、四半期の売上の約9倍だ。
:::

:::guess
この差は、AIへの力の入れ方の差というより、AIを載せている器の大きさの差とみられる。Metaは設備投資の絶対額でははるかに大きいが、広告という既存の売上がその倍ある。SpaceXのAI部門は、部門の売上だけでは設備投資を賄えない形で、資金は親会社全体や外部からの調達に支えられていると考えられる。ただしMetaの設備投資にはAI以外の用途も含まれ、SpaceXのAI部門にはSNSであるXの売上と費用も含まれるため、この表は「AI事業どうしの比較」としては読めない。
:::

## 請求書の持ち方 — 広告で払う側と、計算資源を貸す側

次に、費用をどこから回収しているかを見る。

:::fact
MetaのForm 10-Qは、AIへの投資目的を「製品全体で関連性の高いコンテンツを推薦し、広告ツールを強化し、新製品を開発し、既存製品の新機能を開発するため」と説明している。「その他の売上」は前年同期比73%増で、主因は「WhatsAppの有料メッセージングとサブスクリプション」と記載されている。Meta Newsroom（2026年9月15日）は、有料プランMeta Oneについて「アプリとMeta AIの中核体験は無料のまま」とし、サブスクリプションとトライアルの登録が1,500万件を超えたとしている。9月28日には、企業向けのMeta Enterprise Platformを「事業の次の大きな柱」として立ち上げると発表した。
:::

:::fact
SpaceXのForm S-1は、「第三者との計算サービス契約」として、2026年5月にAnthropicと結んだクラウドサービス契約を記載している。AnthropicはCOLOSSUSとCOLOSSUS IIの計算能力の利用に対して、2029年5月まで月12億5,000万ドルを支払う（2026年5〜6月は立ち上げ期間として減額）。契約はどちらの側からも90日前の通知で解約できる。Yahoo Finance（2026年5月6日）は、AnthropicがCOLOSSUS 1の全容量、300メガワット超を使うと伝えた。CNBC（2026年6月5日）は、Googleも月9億2,000万ドルで2026年10月から2029年6月まで計算能力を借りる契約を結んだと報じ、Google Cloudの広報が「つなぎの容量を確保するため」と説明したと伝えている。同じS-1によれば、2026年3月末の有料会員は約630万人で、X PremiumとPremium+が約440万人、SuperGrok各プランが約190万人だ。
:::

計算資源との付き合い方も向きが違う。SpaceXのAI部門は、自社で建てた計算資源を他のAI企業に貸している。Metaは10-Qで、AI関連のインフラ投資にサーバー・データセンター・ネットワークに加えて「第三者のクラウド容量契約」を挙げており、建てながら外からも容量を調達する側にいる。

:::fact
計算資源の規模について、SpaceXのS-1は、COLOSSUSとCOLOSSUS IIを合わせた計算能力を約1.0ギガワットとし、次の拡張で400メガワット超を追加する見込みだと記載している。Metaのデータセンター公式サイトは、ルイジアナ州リッチランド郡のデータセンターについて、同社最大の複数ギガワット級AIクラスタ「Hyperion」を収容し、5ギガワットの計算能力を提供すると説明している（稼働済みの容量は同ページからは確認できなかった）。Metaは自社設計チップMTIAを中心に置きつつ、複数社からチップを調達する方針だとも説明している。
:::

:::guess
両社の違いは、AIの売り方より先に「待てる時間の買い方」にあるとみられる。Metaは広告の利益で、新しい課金が育つまでの時間を自己資金で買っていると考えられる。SpaceXのAI部門は、建てた計算資源を貸すことで、Grok自体の有料利用が育つまでの時間を買っていると推測される。Anthropicが払う月12億5,000万ドルは、3か月分で37億5,000万ドル（当サイトの計算、12.5×3）になり、AI部門の2026年1〜3月の売上8億1,800万ドルを上回る。一方、この契約は90日前の通知で解約でき、Metaの広告もまた景気や広告主の予算に左右される。どちらの支え方にも、それぞれ別の種類の不確かさがあると考えられる。
:::

## 料金表を並べる — 無料の範囲、サブスクリプション、API

利用者から見える値札を並べる。まずアシスタントとサブスクリプションだ。

:::fact
Meta AIの紹介ページ（2026年10月2日確認）の説明文は、Meta AIを「無料のパーソナルAIチャットボット兼アシスタント」とし、アプリ、Web、AIグラス、Metaの各アプリの中で使えるとしている。Meta Oneの米ドル価格は、単体プランが月2.99ドルから、個人向けバンドルのCoreが月7.99ドル、Premiumが月19.99ドル、事業者向けのEssentialが月14.99ドルから。日本では単体プランが月額239円から、Coreが月額949円、Premiumが月額2,900円、Essentialが月額2,000円から（税込）と発表されている。Metaは、プランの内容・価格・提供状況は国や地域、アプリ、アカウントの種類で異なる場合があるとしている。
:::

:::fact
Grokについて、公式FAQは、有料プランの週単位の利用枠を使い切ったあとも、チャットと音声は無料枠の範囲で使えると説明している。App Store（米国）のGrokの掲載情報（2026年10月2日確認）は、アプリ内課金としてSuperGrok Lite 10.00ドル、SuperGrok 30.00ドル、SuperGrok Plus 100.00ドル、SuperGrok Heavy 300.00ドルを挙げ、日本のApp Storeでは同じ順に1,500円、5,000円、15,000円、50,000円と表示されている（掲載情報は課金の周期を示していない）。Xのアプリ内課金は、米国でX Premium Basic 月4.00ドル、X Premium 月11.00ドル、X Premium Plus 月50.00ドル、日本で月450円、1,270円、8,000円。App Storeの価格はWebでの価格と異なる場合があり、当サイトはgrok.comのWebでの価格を確認できていない。
:::

次に、開発者向けのAPIだ。両社とも100万トークンあたりの米ドル価格を公式ドキュメントに載せている（2026年10月2日確認）。

| モデル（条件） | 入力 | キャッシュ済み入力 | 出力 |
| --- | --- | --- | --- |
| Meta: Muse Spark 1.1〜1.3（標準ティア） | 1.25ドル | 0.15ドル | 4.25ドル |
| Meta: Muse Spark 1.2・1.3（コントリビューターティア） | 0.10ドル | 0.002ドル | 0.20ドル |
| SpaceXAI: grok-4.7（プロンプト20万トークン未満） | 2.00ドル | 0.50ドル | 6.00ドル |
| SpaceXAI: grok-4.7（プロンプト20万トークン以上） | 4.00ドル | 1.00ドル | 12.00ドル |
| SpaceXAI: grok-4.3（プロンプト20万トークン未満） | 1.25ドル | 0.20ドル | 2.50ドル |

:::fact
条件の違いは料金表に書かれている。Metaのコントリビューターティアは、プロンプトと応答をMetaの将来のモデルの学習に使うことを許可する代わりの割引で、標準ティアでは学習に使わないと明記されている。SpaceXAIのSecurity FAQは、APIのリクエストと応答を30日間保存し、明示的な許可なしに学習には使わないとしている。grok-4.7は、プロンプトが20万トークン以上になるとそのリクエストの全トークンが高い料金になる。コンテキスト長は、grok-4.7が50万トークン、grok-4.3が100万トークン。Muse Sparkは、公式ブログが100万トークンとしている。SpaceXAIには、優先処理（2倍）や米国内で処理するエンドポイント（1.1倍）の料金もある。
:::

この表は、公開された単価をそのまま並べたものだ。モデルの性能や、同じ仕事に必要なトークン数は表に含まれていないため、どちらが割安かはここからは分からない。ベンチマークは両社とも自社の発表として公表しているが、当サイトは第三者による再現を確認しておらず、この比較では扱わない。

:::guess
料金表の形には、それぞれの事情が表れているとみられる。Metaのコントリビューターティアは、標準の入力単価の12.5分の1（当サイトの計算、1.25÷0.10）で、割引の対価は学習に使えるデータだ。APIの売上よりも、開発者の利用と学習データを優先した設計と考えられる。SpaceXAIの料金表は、長いコンテキスト・優先処理・処理する地域といった条件ごとに倍率が付いており、使われた計算資源の量に料金を近づける設計と推測される。計算資源を外に貸してもいる会社にとって、計算資源の原価を料金に映す発想は自然だとも読める。
:::

## 何を公開しているか — 重みとライセンス

モデルの重みの公開は、両社とも「全部」でも「ゼロ」でもない。

:::fact
Metaは、30Bパラメータの「Muse Glimmer」の重みをApache 2.0ライセンスで公開している（公式ブログ、2026年8月10日。Hugging Faceの掲載情報もapache-2.0）。従来のLlamaは、開発者サイトにLlama 4・3系・2の世代ごとのライセンスと利用ポリシーが並び、Apache 2.0ではない独自のライセンスで配布されている。主力のMuse SparkはAPIで提供され、重みは公開されていない。
:::

:::fact
xAIは、Grok-1のコードと重みをApache 2.0ライセンスで公開している（GitHubのxai-org/grok-1。READMEは314Bパラメータと記載）。Hugging Faceのxai-org/grok-2は、Grok 2の重みを「xAI Community License Agreement」で公開しており、同ライセンスは非商用・研究目的の利用と、同社の利用規定を守ることを条件にした商用利用を認め、ほかの基盤モデルの学習に使うことを制限している。現在のAPIの主力であるGrok 4.7の重みの公開は、当サイトが確認した範囲では見当たらなかった。モデルとは別に、Xの「おすすめ」フィードのコードはGitHubでApache 2.0で公開されている（[X](/ja/articles/x)の記事を参照）。
:::

:::guess
並べると、両社とも「最新の主力モデルはAPIで出し、それ以外を重みで配る」という点では似た形に落ち着いているとみられる。違いは配るものの選び方だ。Metaは主力から蒸留した小型の現行モデルを、最も緩い部類のライセンスで配っている。xAIが配っているのは過去の世代のモデルで、Grok-1はApache 2.0、Grok 2は条件付きのライセンスだ。どちらの方針がより開かれているかは、何を基準にするか（ライセンスの緩さ、モデルの新しさ、規模）で答えが変わると考えられる。
:::

## どこで使えるか — 既存アプリの中、そして日本

アシスタントの置き場所は、どちらも自社のSNSの中だ。

:::fact
Metaの決算プレスリリースによれば、同社のアプリ群を毎日使う人は2026年6月平均で36.0億人。[Meta AI](/ja/articles/meta-ai)の記事によれば、Meta AIはmeta.ai、Meta AIアプリのほか、WhatsApp・Instagram・Messenger・Facebookの中から使える。SpaceXのS-1は、GrokとXを合わせた月間のアクティブなAI利用者を2026年3月末時点で約5億5,000万人としている。[xAI](/ja/articles/xai)の記事によれば、Grokはgrok.com、モバイルアプリ、Xのどこからでも使え、有料プランはX Premium経由でも提供されている。両社の利用者数は定義も時点も違うため、そのままは比べられない。
:::

:::fact
日本での提供状況は次のとおり。Meta日本版ニュースルームによれば、Meta AIは2025年11月から日本で段階的に提供が始まっている。エージェントのMuseは米国で提供が始まり、日本版の発表記事は「日本での提供については現時点で未定」と明記している。Meta Oneは日本円の価格が発表されているが、一部の機能には「日本では現時点で未対応」と注記がある。Grokは、日本のApp Storeに日本語の説明文と日本円のアプリ内課金付きで掲載されている（2026年10月2日確認）。Grokの提供国を一覧で示した公式の説明は、当サイトが確認した範囲では見つけられなかった。
:::

## techStackを突き合わせると、重なりは1件

最後に、2つの解剖記事のtechStackを機械的に突き合わせた結果を書いておく。共有と判定されたのはNext.jsの1件だけだった。

:::fact
当サイトの機械比較では、Meta AI側13件、xAI側14件の技術トークンのうち、重なったのはNext.jsのみ。Meta側は開発者サイトdev.meta.aiの、xAI側はgrok.comとdocs.x.aiの応答から当サイトが観測したもので、どちらの記事でも確度は「likely」（公式の明言なし）だ。Meta側だけにあるのはMuse Spark、Muse Glimmer、Llama、MTIA、Hyperionデータセンター、Muse Secure VM、Vercelなど。xAI側だけにあるのはGrok 4.7、COLOSSUS、COLOSSUS II、Rust、JAX、Kubernetes、Cloudflareなどだ。
:::

重なったのはWebサイトの表側の作り方だけで、モデル、チップ、データセンター、バックエンドには共有が1つもない。なお、両社のAPIはどちらもOpenAIのSDKから呼べる形だと各記事が確認しているが、techStackの名前の付け方が違うため、機械比較では重なりとして数えられていない。

:::guess
開発者に見える入口（OpenAI互換のAPI、Next.jsのドキュメントサイト）は業界の標準に寄せ、その奥の計算資源とモデルは自前で持つ、という二層の作りが両社に共通しているとみられる。差がつくのは奥の層であり、そこにかかる費用の大きさが、この記事で見てきた「誰が払うのか」という問いを生んでいると考えられる。
:::

[Meta AI](/ja/articles/meta-ai)は、広告という既存の事業が請求書を持ち、アシスタントは無料のまま、サブスクリプションを含む「その他の売上」はまだ売上の2%に満たない。[xAI](/ja/articles/xai)は、AI部門が営業損失を出しながら、建てた計算資源を他のAI企業に貸し、サブスクリプションは[X](/ja/articles/x)とGrokの両方から集めている。確認できなかったことも多い。MetaのAI単独の売上と設備投資、SpaceXのAI部門の2026年4月以降の業績、Museの有料プランの価格、Grokの提供国の一覧は、今回参照した資料からは分からなかった。同じ「SNSの中のAI」が、ギガワット単位の設備を、別々の財布で建てている。この比較で確かめられたのは、そこまでだ。
