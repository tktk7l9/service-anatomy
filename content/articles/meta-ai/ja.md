---
service: "Meta AI"
title: "AIは無料、設備投資は年1,300億ドル超 — Meta AIとMuseは何で回収するのか"
description: "Metaの公式サイト ai.meta.com が掲げる「Meta AI」と新エージェント「Muse」を解剖する。無料のアシスタント、Apache 2.0で配るMuse Glimmer、100万トークン0.10ドルからのMeta Model API、月額239円からのMeta One。売上の約98%が広告の会社が、年1,300〜1,450億ドルの設備投資をどう回収しようとしているのかを、決算資料と公式発表だけから読む。"
lead: "Metaは対話AI「Meta AI」を無料で配り、30Bパラメータのモデル「Muse Glimmer」の重みをApache 2.0で公開している。その一方で、2026年の設備投資見通しは1,300〜1,450億ドル。2026年4〜6月期の売上608億ドルのうち、広告は593.6億ドルだ。AIそのものにはほとんど値札を付けない会社が、どこで回収するつもりなのか。2026年9月に出そろった「Muse」「Meta One」「Meta Enterprise Platform」という3つの発表と、SECへの提出書類から設計を読み解く。"
category: ai-tool
tags: [ai-assistant, ai-agent, llm, open-source, advertising]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://ai.meta.com/"
vendor: "Meta Platforms, Inc."
origin: "US"
heroTheme: "meta-ai"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "モデル基盤（API提供・重みは非公開）"
    name: "Muse Spark (1.1 / 1.2 / 1.3)"
    confidence: confirmed
    evidence: "Meta Model APIの料金ページに muse-spark-1.3 / 1.2 / 1.1 が標準ティアのモデルとして掲載されている。開発元はMeta Superintelligence Labs。公式ドキュメントは100万トークンのコンテキストウィンドウを明記"
    evidenceUrl: "https://dev.meta.ai/docs/pricing-rate-limits"
  - layer: "オープンウェイトモデル"
    name: "Muse Glimmer (30B, Apache 2.0)"
    confidence: confirmed
    evidence: "2026-08-10の公式ブログが、30Bパラメータのモデルの重みをApache 2.0ライセンスでHugging Faceに公開したと明記。Muse Sparkの出力からのロジット蒸留で事前学習したと説明している"
    evidenceUrl: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model"
  - layer: "従来のオープンモデル"
    name: "Llama 4 / Llama 3 / Llama 2"
    confidence: confirmed
    evidence: "開発者サイトのLlamaページに、Llama 4・3系・2が世代ごとの独自ライセンスと利用ポリシーへのリンク付きで掲載されている（Apache 2.0ではなく世代別のLlamaライセンス）"
    evidenceUrl: "https://dev.meta.ai/llama"
  - layer: "エージェント実行環境"
    name: "Muse Secure VM + Sentinel agent"
    confidence: confirmed
    evidence: "Muse発表記事（2026-09-08）が、利用者ごとの専用仮想マシンと、同じマシン上でMuseから分離されて通信を承認するSentinelエージェントの構成を説明している"
    evidenceUrl: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/"
  - layer: "自社設計チップ"
    name: "MTIA (300 / 400 / 450 / 500)"
    confidence: confirmed
    evidence: "公式記事（2026-03-11）が、数十万個のMTIAチップを推論に配備済みで、2年以内に4世代を開発・配備すると説明。MTIA 400以降は主に生成AIの推論に使う方針"
    evidenceUrl: "https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/"
  - layer: "学習・推論インフラ"
    name: "Hyperion data center"
    confidence: confirmed
    evidence: "Muse Spark発表ブログ（2026-04-08）が、研究・学習からインフラまでの投資先としてHyperionデータセンターを名指ししている。10-Qは第三者クラウドの容量契約にも言及"
    evidenceUrl: "https://ai.meta.com/blog/introducing-muse-spark-msl/"
  - layer: "開発者向けAPI"
    name: "Meta Model API (OpenAI SDK compatible)"
    confidence: confirmed
    evidence: "製品ページが、既存のOpenAI SDK互換クライアントの向き先を変えるだけで使えると説明。ドキュメントにはResponses・Chat Completions・Messagesの3つのAPI形式が並ぶ"
    evidenceUrl: "https://dev.meta.ai/products/meta-model-api"
  - layer: "開発者サイトの配信"
    name: "Next.js / Vercel (dev.meta.ai)"
    confidence: likely
    evidence: "2026-10-01に curl -sI で dev.meta.ai を実観測。server: Vercel、x-powered-by: Next.js、x-vercel-id のレスポンスヘッダーを確認。ヘッダー上の観測であり、Metaによる公式な説明は確認できていない"
    evidenceUrl: "https://dev.meta.ai/"
  - layer: "ai.meta.com の配信"
    name: "Meta in-house web stack (nonce CSP / HSTS preload / HTTP/3)"
    confidence: likely
    evidence: "2026-10-01に curl -sI で実観測。x-fb-debug、nonce付きのContent-Security-Policy、strict-transport-security（preload・includeSubDomains）、alt-svc: h3 を確認。CSPのreport先はfacebook.comで、Meta共通の配信基盤とみられる"
    evidenceUrl: "https://ai.meta.com/"
sources:
  - label: "AI at Meta 公式トップ（meta description「Meet Muse, our new AI agent…」・レスポンスヘッダー実観測）"
    url: "https://ai.meta.com/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta: Muse 紹介ページ（機能・無料枠と有料プラン・許可の仕組み）"
    url: "https://ai.meta.com/muse/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta: Meta AI アシスタント紹介ページ（提供面・無料・利用上限のテスト）"
    url: "https://ai.meta.com/meta-ai/assistant/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta Blog: Introducing Muse Spark（2026-04-08・Meta Superintelligence Labs・Llama 4 Maverick比の計算効率）"
    url: "https://ai.meta.com/blog/introducing-muse-spark-msl/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom 日本版: 「Muse Spark」登場（2026-04-09・提供地域の展開・将来のオープンソース化に言及）"
    url: "https://about.fb.com/ja/news/2026/04/introducing-muse-spark-meta-superintelligence-labs-first-model-built-to-prioritize-people/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta Blog: Introducing Muse Spark 1.1（2026-07-09・Meta Model API公開プレビュー・100万トークン）"
    url: "https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/"
    accessedAt: "2026-10-01"
  - label: "Meta AI Research Blog: Introducing Muse Glimmer（2026-08-10・30B・Apache 2.0）"
    url: "https://research.meta.ai/blog/introducing-muse-glimmer-open-agentic-model"
    accessedAt: "2026-10-01"
  - label: "Meta Model API ドキュメント: Pricing and rate limits（標準ティア・コントリビューターティアの単価）"
    url: "https://dev.meta.ai/docs/pricing-rate-limits"
    accessedAt: "2026-10-01"
  - label: "Meta開発者サイト: Muse Code 製品ページ（月5／15／50ドルのプラン）"
    url: "https://dev.meta.ai/products/muse-code"
    accessedAt: "2026-10-01"
  - label: "Meta開発者サイト: Llama（世代別ライセンスと利用ポリシー）"
    url: "https://dev.meta.ai/llama"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Introducing Muse（2026-09-08・Muse Secure VM・広告システムとデータを共有しない旨）"
    url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom 日本版: Muse登場（2026-09-09・日本での提供は現時点で未定）"
    url: "https://about.fb.com/ja/news/2026/09/introducing-muse-personal-ai-agent/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Muse for Small Business（2026-09-29・米国とカナダで提供）"
    url: "https://about.fb.com/news/2026/09/introducing-muse-small-business/"
    accessedAt: "2026-10-02"
  - label: "Meta Newsroom: The Biggest News From Connect 2026（2026-09-24・コネクタ拡大・AIグラスへの展開）"
    url: "https://about.fb.com/news/2026/09/the-biggest-news-from-connect-2026/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Introducing Meta One（2026-09-15・プランと米ドル価格）"
    url: "https://about.fb.com/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom 日本版: Meta One（日本円の価格・税込）"
    url: "https://about.fb.com/ja/news/2026/09/introducing-meta-one-subscription-service-more-features-ai/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom 日本版: Meta AI Convenience Store（2025年11月から日本でMeta AIを段階提供）"
    url: "https://about.fb.com/ja/news/2026/08/meta-ai-convenience-store/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Launching Meta Enterprise Platform（2026-09-28・CEO声明）"
    url: "https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Meta Business Agent（2026-06-03・100万超の事業者・有料化の方針）"
    url: "https://about.fb.com/news/2026/06/meta-business-agent/"
    accessedAt: "2026-10-01"
  - label: "Meta Newsroom: Expanding Meta's Custom Silicon（2026-03-11・MTIA）"
    url: "https://about.fb.com/news/2026/03/expanding-metas-custom-silicon-to-power-our-ai-workloads/"
    accessedAt: "2026-10-01"
  - label: "Meta: Personal Superintelligence（2025-07-30・CEO書簡・オープンソース化の方針）"
    url: "https://www.meta.com/superintelligence/"
    accessedAt: "2026-10-01"
  - label: "AI at Meta: Open Source AI（オープン化がMeta自身にも利益になるという説明）"
    url: "https://ai.meta.com/opensourceai/"
    accessedAt: "2026-10-01"
  - label: "SEC EDGAR: Meta 2026年第2四半期決算プレスリリース（Form 8-K Exhibit 99.1・2026-07-29）"
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050596/meta-06302026xexhibit991.htm"
    accessedAt: "2026-10-01"
  - label: "SEC EDGAR: Meta Form 10-Q（2026年6月30日までの四半期・2026-07-30提出）"
    url: "https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm"
    accessedAt: "2026-10-01"
---

## サービス解説

ai.meta.com は、MetaがAIの製品・モデル・研究をまとめて見せる公式サイトだ。2026年10月1日時点のページ説明文は「Meet Muse, our new AI agent that takes tasks off your plate. Use Meta AI for questions and images, plus tools for developers.」。つまり入口は3つある。質問と画像生成のための無料アシスタント「Meta AI」、タスクを代行するエージェント「Muse」、そして開発者向けのモデルとツールだ。

1年前まで、Metaの生成AIといえばLlamaだった。いまサイトの中心にあるのは「Muse」という名前で、これはモデルの系列名であり、同時にエージェント製品の名前でもある。

:::fact
公式ブログによれば、Muse Sparkは2026年4月8日に発表された、Meta Superintelligence Labs（MSL）による最初のMuse系モデルだ。Metaはこれを「AIへの取り組みを土台から作り直した最初の成果」と位置づけ、以前のモデルLlama 4 Maverickと同じ性能に、1桁以上少ない学習の計算量で到達できると説明している（小さなモデル群に当てはめたスケーリング則にもとづく同社自身の比較）。7月9日にはMuse Spark 1.1と同時にMeta Model APIの公開プレビューが始まり、8月10日には30Bパラメータの「Muse Glimmer」がApache 2.0で公開された。開発者サイトには現在、Muse Spark 1.3が最新版として掲載されている。エージェント製品のMuseは9月8日に発表され、発表記事は米国での提供開始を伝えた。9月29日のMeta Newsroomの記事は、Museを「米国とカナダで利用できる」と記している。
:::

:::fact
日本での提供状況は製品ごとに違う。Meta日本版ニュースルームによれば、Meta AIは2025年11月から日本で段階的に提供が始まっている。一方、エージェントのMuseについて、日本版の発表記事は「日本での提供については現時点で未定」と明記している。本記事はMuseを実際には操作しておらず、Museに関する記述はすべて公式ページと発表文に基づく。
:::

:::pull
モデルは配る。アシスタントは無料。値札が付いているのは、使いすぎた分と、仕事を任せる分だけだ。
:::

::scorecard

## UX分析

公開されているページから読み取れる設計は、「新しいアプリを覚えさせない」ことに寄っている。

- **既存アプリの中に置く**。公式ページによれば、Meta AIはmeta.ai、Meta AIアプリ、Mac用デスクトップアプリに加えて、WhatsApp・Instagram・Messenger・Facebookの中から使える。既存のMetaアカウント以外に別のアカウントは要らないと説明されている。
- **エージェントはメッセージの形で話す**。MuseはMuseアプリ、muse.ai、またはWhatsAppの中で、人にメッセージを送るのと同じ形で指示する。Metaは「学習コストがない」ことを設計の中心に置いている。
- **承認と監査を前面に出す**。メールの送信や購入などの前にはMuseが確認を求め、許可は「今回だけ」「常に許可」「拒否」から選べる。Museが行ったことと、これから行う予定のことは監査履歴として見られると説明されている。
- **入口の名前とドメインは多い**。ai.meta.com（紹介）、meta.ai（アシスタント）、muse.ai（エージェント）、dev.meta.ai（開発者）、research.meta.ai（研究）と役割ごとにドメインが分かれ、llama.com は開発者サイトへ転送される。初めての人は、Meta AIとMuseのどちらが自分の用途かをまず見分ける必要がある。
- **地域差が大きい**。Museの提供は米国とカナダにとどまり、Meta AIの新機能も「一部の市場から順次」と告知されている。日本の利用者が今日触れられるのは、Meta AIのほうだ。

:::guess
アシスタントを既存アプリの中に置き、エージェントをWhatsAppの会話として成立させる設計は、単体アプリとしての完成度を競うより、すでにある配信面をそのまま使うことを優先した判断とみられる。決算資料によれば、Metaのアプリ群を毎日使う人は2026年6月平均で36.0億人。新しいアプリを入れてもらう必要がない、という一点が最大の武器になっていると考えられる。その代わりに、名前とドメインが増えたぶんの分かりにくさは、当面は利用者側が引き受ける構図だと推測される。
:::

## 技術構成

::techstack

:::fact
モデルの公開の仕方は2通りに分かれている。主力のMuse SparkはMeta Model API経由で提供され、公式ドキュメントはMuse Glimmerについて「別の道を取る。重みをダウンロードして自分のハードウェアで動かす」と書き分けている。GlimmerはApache 2.0、従来のLlamaは世代ごとの独自ライセンスと利用ポリシーで配布されている。CEO書簡（2025年7月30日）は、超知能の利益は広く共有すべきだとしつつ「何をオープンソースにするかは慎重に選ぶ必要がある」と述べている。Muse Sparkの日本語発表文は「将来的にはオープンソース化も視野に入れる」としている。
:::

:::fact
エージェントの実行環境も公表されている。Museは利用者ごとに専用の仮想マシン「Muse Secure VM」で動き、同じマシン上のSentinelエージェントが承認しない限り、Museの操作はインターネットに届かない。パスワードや支払い情報はMuseからは見えない保管領域に置かれる。決済はStripeのLinkが使い捨てのカード番号を発行する。Metaは年内に、利用者だけが鍵を持つ「Muse Confidential VM」を導入すると予告している。
:::

:::fact
計算基盤について、公式記事は自社設計チップMTIAを「インフラ戦略の中心」に置きつつ、複数社からチップを調達するポートフォリオ方式だと説明している。Form 10-Qは、AI関連のインフラ投資として、サーバー・データセンター・ネットワークに加えて「第三者のクラウド容量契約」を挙げている。
:::

:::guess
主力モデルを閉じたAPIで出し、小さいモデルを最も緩いライセンスで配るという組み合わせは、Llama時代の「すべてを重みで配る」方針からの調整とみられる。手元で動く小型モデルを標準にしてもらうことで開発者の層を広げ、計算資源を大量に使う最上位モデルはAPIと自社製品で回収する、という役割分担と考えられる。ただしMeta自身は、どのモデルを今後公開するかの基準を具体的には示していないため、この線引きが固定されたものかどうかは外からは分からない。
:::

## ビジネスモデル

ここが本題だ。まず、現在の売上の内訳を確認する。

:::fact
2026年第2四半期（4〜6月）の決算プレスリリースによれば、売上は608.01億ドル（前年同期比28%増）。うち広告が593.63億ドル、Family of Appsの「その他の売上」が10.07億ドル、Reality Labsが4.31億ドルだ。本記事の計算では、広告は売上の約98%にあたる。広告の表示回数は前年同期比14%増、広告1件あたりの平均価格は12%増だった。設備投資（ファイナンスリースの元本返済を含む）は同四半期に310.8億ドル、2026年通期の見通しは1,300〜1,450億ドル。営業利益率は31%（前年同期は43%）、フリーキャッシュフローは7.84億ドルだった。
:::

:::fact
Form 10-Qは、AIへの投資目的を「製品全体で関連性の高いコンテンツを推薦し、広告ツールを強化し、新製品を開発し、既存製品の新機能を開発するため」と説明している。「その他の売上」は前年同期比73%増で、増加の主因は「WhatsAppの有料メッセージングとサブスクリプション」と記載されている。決算プレスリリースでCEOは「AIはいま中核事業を加速させ、次世代の製品を動かし、まったく新しいエンタープライズの機会への扉を開いている」と述べた。
:::

公式資料を並べると、回収の経路は4本に整理できる。

**1本目は広告そのもの**。10-Qが投資目的の最初に挙げるのは推薦と広告ツールで、これは新しい課金ではなく既存事業の効率を上げる使い道だ。四半期で593億ドルを稼ぐ事業が相手なので、数%の改善でも金額は大きい。

**2本目は利用上限つきのサブスクリプション**。9月15日に発表されたMeta Oneは、公式発表によれば「アプリとMeta AIの中核体験は無料のまま」で、計算資源を多く使うAI機能の利用枠を広げる有料プランだ。日本では単体プランが月額239円から、個人向けバンドルのCoreが月額949円、Premiumが月額2,900円、事業者向けのEssentialが月額2,000円から（いずれも税込）。Metaは発表時点で1,500万件の登録とトライアルがあるとしている。Museも「ほとんどの用途は無料」で、上限に達した人向けに有料プランがあると説明されているが、価格は公開ページでは確認できなかった。

**3本目は開発者と企業**。Meta Model APIの標準ティアは、Muse Sparkが入力100万トークンあたり1.25ドル、出力4.25ドル。これとは別に、プロンプトと応答をMetaの将来のモデル学習に使うことを許可する「コントリビューター」ティアがあり、入力0.10ドル、出力0.20ドルになる。ターミナル用のコーディングエージェントMuse Codeは月5／15／50ドルの3プランだ。9月28日には「事業の次の大きな柱」としてMeta Enterprise Platformの立ち上げが発表され、Museエージェント、Meta Business Agent、API、Muse Codeを企業向けに提供するとしている。

**4本目は事業者向けエージェントとデバイス**。Meta Business Agentは発表時点で100万を超える事業者がWhatsAppとMessengerで使っているとされ、当初は無料、今後は有料サブスクリプションで提供すると告知されている。Museに自社サービスをつなぐコネクタには、Shopifyのカタログや小売各社、Shop Pay、PayPalが並ぶ。Connect 2026では、MuseをAIグラスに載せる計画と、専用デバイス「Muse Charm」が予告された。

:::fact
Muse発表記事は「Museは利用者の会話やVM内のデータを、Metaの広告システムと共有しない」と明記している。muse.ai のトップページにも同じ趣旨の記述がある。Museとのやりとりをモデル学習に使わせない設定も選べると説明されている。
:::

:::guess
この一文は、収益の設計を読むうえで重要だと考えられる。Metaは広告の会社だが、最も個人的な情報が集まるエージェントについては、広告のためのデータ利用を自ら切り離している。そうするとMuseの回収経路は、利用上限を超えた分のサブスクリプション、コネクタ経由の購買や決済から生まれる事業者側の価値、そして対応デバイスの販売に絞られるとみられる。広告で稼いだ資金で無料の利用者を広げ、そのうち重く使う人と事業者から課金する、という二段構えと推測される。
:::

:::guess
モデルを配る理由についても、公式サイトに手がかりがある。Open Source AIのページは、自社のAIが世界標準のひとつになれば「競合の閉じたエコシステムに閉じ込められない」ことがMeta自身の利益になると説明している。Metaはクラウドを外販して稼ぐ会社ではないため、モデルの重みを公開しても失う売上が小さい、という前提があると考えられる。コントリビューターティアの価格差も同じ発想で読める。標準の10分の1以下の単価と引き換えに、学習に使えるデータを受け取る交換とみられる。
:::

:::guess
現時点の数字の大きさは非対称だ。サブスクリプションとWhatsAppの有料メッセージングを含む「その他の売上」は四半期10億ドルで、伸び率は高いが、同じ四半期の設備投資310.8億ドルとは桁が違う。したがって当面の回収は、新しい課金よりも広告事業の伸びに依存する構図だと考えられる。別の見方をすれば、広告という既存の収益源があるからこそ、新しい課金が育つまでの時間を自己資金で待てる、とも読める。Meta自身も10-Qのリスク要因で、投資が長期的に成功しなければ事業と業績が損なわれうると記している。
:::

最後に、確認できなかったことを挙げておく。Museの有料プランの価格、Meta AIとMuseそれぞれの利用者数、Meta Model APIやMuse Codeの売上、AI向けに限った設備投資額は、今回参照した公開資料では開示されていなかった。決算説明会の発言録が載るIRサイトは本記事の環境から取得できなかったため、決算に関する記述はSEC提出のプレスリリースと10-Qに限っている。

配るものは増え、値札の付く場所は絞られている。アシスタントは無料、小さなモデルはApache 2.0、主力モデルは従量課金、エージェントは使いすぎた分だけ課金。そして請求書の大半は、いまも広告が払っている。ai.meta.com が見せているのは、AIを売る会社というより、AIで既存の事業を太らせながら、次の柱を育てる時間を買っている会社の姿だ。
