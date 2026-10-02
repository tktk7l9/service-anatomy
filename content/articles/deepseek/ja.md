---
service: "DeepSeek"
title: "キャッシュに当たれば入力は50分の1 — 重みをMITで配り、APIを時間帯で値付けするDeepSeekの設計"
description: "杭州のAI研究所DeepSeekは、最新モデルDeepSeek-V4.1-Flashの重みをMITライセンスで公開しながら、同じモデルのAPIを入力100万トークン0.30ドル（ピーク時・キャッシュミス）で売る。キャッシュヒット時は0.006ドル、オフピークはさらに半額。料金表・モデルカード・技術報告・利用規約・プライバシーポリシーと、公式サイトの実観測から、この値付けを支える構造を解剖する。"
lead: "DeepSeekのAPI料金表には、同じモデルに6つの値段が並んでいる。キャッシュに当たったか外れたか、ピーク時間帯かオフピークか、入力か出力か。いちばん安い入力は100万トークン0.003ドルだ。しかも同じモデルの重みは、MITライセンスで誰でもダウンロードできる。重みを無料で配る会社が、APIで何を売っているのか。公式の料金表・モデルカード・技術報告・規約から構造を読み解く。"
category: ai-tool
tags: [ai-assistant, llm, api, open-weights, coding-agent]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://www.deepseek.com/"
vendor: "Hangzhou DeepSeek Artificial Intelligence Co., Ltd."
origin: "CN"
heroTheme: "deepseek"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.0 }
techStack:
  - layer: "基盤モデル（現行）"
    name: "DeepSeek-V4.1-Flash（552B MoE・Causal Encoder-Decoder・画像入力対応）"
    confidence: confirmed
    evidence: "Hugging Faceの公式モデルカードに、バックボーン552BパラメータのマルチモーダルMoEモデルで、20層の因果エンコーダ＋20層のデコーダ構成、入力処理時8B・生成時16Bのパラメータだけを活性化すると記載。ライセンス欄はMIT（2026-10-01確認）"
    evidenceUrl: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
  - layer: "基盤モデル（上位）"
    name: "DeepSeek-V4-Pro（1.6T MoE・CSA/HCAハイブリッド注意機構・mHC）"
    confidence: confirmed
    evidence: "arXivの技術報告（2606.19348）の要旨に、1.6Tパラメータ（活性49B）・100万トークン文脈、CSAとHCAを組み合わせた注意機構、mHC、Muonオプティマイザ、32T超トークンでの事前学習と記載"
    evidenceUrl: "https://arxiv.org/abs/2606.19348"
  - layer: "API"
    name: "OpenAI形式 / Anthropic形式の互換API（Responses API対応）"
    confidence: confirmed
    evidence: "公式APIドキュメントの料金ページに、OpenAI形式のBASE URL（api.deepseek.com）とAnthropic形式のBASE URL（api.deepseek.com/anthropic）が併記され、Responses API・Tool Calls・JSON Outputへの対応が表で示されている"
    evidenceUrl: "https://api-docs.deepseek.com/quick_start/pricing"
  - layer: "推論の効率化"
    name: "コンテキストキャッシュ（prefix単位でディスクに永続化）"
    confidence: confirmed
    evidence: "公式APIドキュメントのキャッシュ解説に、キャッシュヒットには該当prefixがディスクキャッシュに書き込まれている必要があり、リクエスト境界・共通prefix検出・一定トークン間隔の3つの契機で永続化すると記載"
    evidenceUrl: "https://api-docs.deepseek.com/guides/kv_cache"
  - layer: "エージェント実行環境"
    name: "DeepSeek Harness（TypeScript・Cordisプラグイン構成・MIT）"
    confidence: confirmed
    evidence: "GitHubの公式リポジトリdeepseek-ai/deepseek-harnessは主要言語TypeScript・ライセンスMIT（GitHub APIで2026-10-01確認）。公式ページは「everything is a plugin」のCordisアーキテクチャ上に構築と説明"
    evidenceUrl: "https://github.com/deepseek-ai/deepseek-harness"
  - layer: "公式サイトの配信"
    name: "Next.js + Amazon S3 + Amazon CloudFront"
    confidence: likely
    evidence: "www.deepseek.comへのcurl -sIで server: AmazonS3 / x-cache: Hit from cloudfront / via: CloudFront を実観測、HTMLは/_next/static/以下のチャンクを読み込む（2026-10-01）。構成を明示した公式資料はないためlikely"
  - layer: "API・チャットの前段"
    name: "Amazon CloudFront + AWS WAF + ロードバランサ（server: elb）"
    confidence: likely
    evidence: "api.deepseek.comとplatform.deepseek.comは server: elb / via: CloudFront を返し、chat.deepseek.comはブラウザ以外からのGETにHTTP 403とawsWafCookieDomainListを含むチャレンジページを返した（2026-10-01実観測）。応答ヘッダーからの推定のためlikely"
  - layer: "APIドキュメント"
    name: "Docusaurus v3.1.0 + Tencent Cloud（COS・EdgeOneとみられるCDN）"
    confidence: likely
    evidence: "api-docs.deepseek.comのHTMLに generator: Docusaurus v3.1.0、応答ヘッダーに server: tencent-cos / eo-cache-status: HIT、DNSのCNAMEは eo.dnse1.com 配下（2026-10-01実観測）"
  - layer: "ステータスページ"
    name: "Flashduty Status Page"
    confidence: likely
    evidence: "status.deepseek.comのCNAMEが statuspage.flashduty.com を指す（digで2026-10-01実観測）"
  - layer: "規約・ポリシーの配信"
    name: "Huawei CloudのCDNとみられる配信網（cdn.deepseek.com）"
    confidence: speculative
    evidence: "cdn.deepseek.comのCNAMEがcdnhwc系のドメインを指し、応答ヘッダーは server: openresty（2026-10-01実観測）。CNAMEの命名からの推測であり事業者を公式に確認できていない"
sources:
  - label: "DeepSeek公式サイト（トップ。製品導線・フッターの運営会社表記・ICP番号）"
    url: "https://www.deepseek.com/"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式APIドキュメント: Models & Pricing（モデル・文脈長・料金・ピーク/オフピーク）"
    url: "https://api-docs.deepseek.com/quick_start/pricing"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式APIドキュメント: Change Log（2026-09-10までの変更履歴）"
    url: "https://api-docs.deepseek.com/updates"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式APIドキュメント: コンテキストキャッシュの解説"
    url: "https://api-docs.deepseek.com/guides/kv_cache"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式APIドキュメント: Rate Limit & Isolation（同時接続数）"
    url: "https://api-docs.deepseek.com/quick_start/rate_limit"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式ニュース: Introducing DeepSeek-V4.1-Flash（2026-09-10）"
    url: "https://www.deepseek.com/en/news/deepseek-v4-1-flash/"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式ニュース: DeepSeek-V4 Preview（2026-04-24）"
    url: "https://www.deepseek.com/en/news/v4-preview/"
    accessedAt: "2026-10-01"
  - label: "Hugging Face: deepseek-ai/DeepSeek-V4.1-Flash モデルカード（構成・学習・自社公表のベンチマーク・MITライセンス）"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
    accessedAt: "2026-10-01"
  - label: "arXiv 2606.19348: DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence"
    url: "https://arxiv.org/abs/2606.19348"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式: DeepSeek Harness 製品ページ"
    url: "https://www.deepseek.com/en/harness/"
    accessedAt: "2026-10-01"
  - label: "GitHub: deepseek-ai/deepseek-harness（MIT・TypeScript）"
    url: "https://github.com/deepseek-ai/deepseek-harness"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式: アプリのダウンロードページ"
    url: "https://www.deepseek.com/en/download/"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式: Transparency Center（モデルカード・技術報告の一覧）"
    url: "https://www.deepseek.com/en/transparency/"
    accessedAt: "2026-10-01"
  - label: "DeepSeek公式: モデルの仕組みと学習方法の説明（Model Mechanism and Training Methods）"
    url: "https://cdn.deepseek.com/policies/en-US/model-algorithm-disclosure.html"
    accessedAt: "2026-10-01"
  - label: "DeepSeekプライバシーポリシー（日本語版・最終更新2026年2月10日）"
    url: "https://cdn.deepseek.com/policies/ja-JP/deepseek-privacy-policy.html"
    accessedAt: "2026-10-01"
  - label: "DeepSeek利用規約（日本語版・最終更新2025年1月20日）"
    url: "https://cdn.deepseek.com/policies/ja-JP/deepseek-terms-of-use.html"
    accessedAt: "2026-10-01"
  - label: "DeepSeek Open Platform Terms of Service（2026年4月29日発効）"
    url: "https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html"
    accessedAt: "2026-10-01"
  - label: "個人情報保護委員会: DeepSeekに関する情報提供（令和7年2月3日・3月5日更新）"
    url: "https://www.ppc.go.jp/news/careful_information/250203_alert_deepseek/"
    accessedAt: "2026-10-01"
  - label: "Wikipedia: DeepSeek（設立経緯・出資者・資金調達報道の集約）"
    url: "https://en.wikipedia.org/wiki/DeepSeek"
    accessedAt: "2026-10-01"
  - label: "Anthropic公式ドキュメント: Pricing（価格比較の参照点）"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    accessedAt: "2026-10-01"
---

## サービス解説

DeepSeek（深度求索）は、中国・杭州に登記のあるAI研究所だ。大規模言語モデルを自社で開発し、その重みを公開する。同じモデルを、無料のチャットアプリと従量課金のAPIでも提供している。公式サイトのトップに並ぶ導線は「DeepSeek Web」「DeepSeek Harness」「API Platform」「API Docs」「Downloads」の5つで、料金プランのページは存在しない。

:::fact
公式サイトのフッターは、運営会社を「杭州深度求索人工智能基础技术研究有限公司」と表記している。プライバシーポリシー（日本語版）は、サービスの提供・管理者を「中国に登記住所を有するHangzhou DeepSeek Artificial Intelligence Co., Ltd.」と記す。現行モデルは2系統ある。2026年9月10日公開のDeepSeek-V4.1-Flash（API名は deepseek-flash）と、同年8月13日に正式版となったDeepSeek-V4-Pro（deepseek-v4-pro）だ。公式ドキュメントによれば、どちらも文脈長は100万トークン、最大出力は384Kトークンである。重みはHugging Faceで公開されており、モデルカードのライセンス欄はMITになっている。
:::

:::fact
設立の経緯と資本について、DeepSeekの公式サイトには出資者や資金調達を説明するページが見当たらない（2026-10-01時点）。Wikipediaの集約情報によれば、中国のヘッジファンドHigh-Flyer（幻方）が2023年4月14日にAGI研究ラボの立ち上げを発表し、同年7月17日にそのラボが独立会社となった。High-Flyerは主要な出資者とされ、共同創業者の梁文鋒（Liang Wenfeng）氏がCEOを務める。同じ資料によれば、2026年5月にシリーズAで70億ドルを調達し、調達後の評価額は520億ドルとされる。同年7月にはBloombergとFinancial Timesが上場準備の開始を報じたとされている。いずれも二次情報であり、当サイトでは公式発表を確認できていない。
:::

:::pull
重みはMITで配る。APIは時間帯とキャッシュで値付けする。DeepSeekが売っているのは、モデルそのものより「そのモデルを安く動かす運用」に見える。
:::

::scorecard

## UX分析

DeepSeekのUXは、チャット、API、エージェント実行環境の3つの入口に分かれている。以下は公式ページと公式ドキュメントの記載、および当サイトの外形観測にもとづく整理で、実際に利用した感想ではない。

- **トップページがそのまま入口になっている**。見出しの下に「DeepThink」「Search」の表示と、「Chat with DeepSeek」「API Platform」「Harness Desktop」の3つのボタンが並ぶ。機能説明や料金表を挟まず、使う場所へ直接送る構成だ。
- **チャットアプリは無料と明記**。ダウンロードページは「Chat with leading AI models for free」と書き、iOS版とAndroid版（APKの直接配布を含む）を案内する。V4 Preview時の公式ニュースは、chat.deepseek.comで「Expert Mode / Instant Mode」を選べると説明している。
- **APIは他社の形式に合わせている**。OpenAI形式とAnthropic形式のBASE URLを両方用意し、ドキュメントの「Agent Integrations」にはClaude Code・Codex・OpenCodeなど外部のコーディングエージェントへの接続手順が並ぶ。乗り換える側は、接続先とモデル名を書き換えるだけで済む設計になっている。
- **モデル名を短く固定している**。現行のFlashは deepseek-flash という世代番号のない名前で呼ぶ。旧名の deepseek-v4-flash は受け付けるが、中身はV4.1-Flashに振り替えられ、Flashの料金で課金されると料金ページに注記がある。
- **デスクトップにエージェントを置く**。DeepSeek Harnessは、macOS（Apple silicon）とWindows（64-bit）向けに配布されているオープンソースのエージェント実行環境だ。公式ページは「全世界でパブリックプレビュー中」と記し、文書作成・コーディング・調査・バックグラウンド処理を用途に挙げる。

:::fact
利用者の入力と出力の扱いは、規約に明文がある。利用規約（日本語版）4.2は、アウトプットに関する権利を利用者に譲渡するとし、インプットとアウトプットを「個人使用、学術研究、派生製品の開発、他のモデルのトレーニング（モデルの蒸留など）」に使えると明記する。4.3は、匿名化などを前提に、最小限の範囲でインプットとアウトプットをサービスの改善に使うことがあると定める。プライバシーポリシーは、利用者の権利のひとつに「当社モデル訓練または技術最適化のための個人データ利用を拒否する権利」を挙げ、窓口をメールとしている。同ポリシーによれば、サービスは14歳未満を対象としていない。
:::

:::guess
入口を増やす一方で、料金プランの比較表やサブスクリプションの案内を置いていないのは、個人向けの月額課金を収益源として設計していないためとみられる。チャットは無料で間口を広げ、課金はAPIの従量制に一本化する構成だと考えられる。この形は説明が少なくて済む反面、利用上限や混雑時の扱いが公式ページからは読み取りにくい。無料枠の具体的な制限は公開情報では確認できなかった。
:::

## 技術構成

::techstack

:::fact
DeepSeek-V4.1-Flashの公式モデルカードによれば、同モデルは552Bパラメータのバックボーンを持つMixture-of-Experts（MoE）モデルで、40層を20層の因果エンコーダと20層のデコーダに分ける「Causal Encoder-Decoder（CED）」構成を取る。1トークンあたりに活性化するパラメータは、入力を読み込む段階で8B、生成の段階で16Bとされる。各MoE層は共有エキスパート1つと384のルーティング対象エキスパートを持ち、トークンごとに6つを使う。事前学習は45Tトークンのマルチモーダルコーパスで一から行ったと記載されている。
:::

:::fact
同じモデルカードは、KVキャッシュの圧縮を設計の中心に置いている。注意層ごとにFull・Reindex・Reuseの3モードを割り当てる「CSA2」と、FP4形式でのキャッシュ保持を組み合わせ、グローバルKVキャッシュを1トークンあたり890バイト（前世代V4-Flashの約4分の1）に抑えたという。公式ニュースは、前世代と比べて必要なHBMが4分の1、SSDストレージが8分の1になったと説明し、「エージェントのコストではキャッシュヒット分の課金が大きな割合を占めることが多い」と理由を添えている。上位モデルのV4-Proについては、arXivの技術報告が、100万トークン文脈でDeepSeek-V3.2と比べ1トークンあたりの推論FLOPsが27%、KVキャッシュが10%で済むと記している。
:::

:::fact
性能に関する数値は、いずれもDeepSeek自身が公表したものだ。V4.1-Flashのモデルカードには、最大の推論強度での比較として、Terminal-Bench 2.1で90.6（同じ表のOpus-5.0は89.1）、DeepSWE v1.1で74.2（同74.0）という値が載っている。同じ表には、Terminal-Bench 4.0で31.2（同51.8）、NL2Repo-Benchで64.0（同75.3）と、他社モデルを下回る項目も並ぶ。評価には自社のDeepSeek Harnessなどを使ったと注記されている。第三者による再現結果は、当サイトでは確認していない。
:::

:::fact
配信基盤は、実観測の範囲では複数のクラウドにまたがる。www.deepseek.comは server: AmazonS3 と CloudFront のヘッダーを返し、api.deepseek.comは server: elb と CloudFront のヘッダーに加えて strict-transport-security（max-age=31536000; includeSubDomains; preload）を返した。chat.deepseek.comはブラウザ以外からのGETに対し、HTTP 403とAWS WAFのチャレンジページを返した。一方でapi-docs.deepseek.comは server: tencent-cos を返し、status.deepseek.comのCNAMEはFlashdutyのステータスページを指していた（いずれも2026-10-01）。
:::

:::guess
アーキテクチャの改良点がKVキャッシュの圧縮に集中しているのは、エージェント用途の費用構造に合わせた設計とみられる。エージェントは長い文脈を何度も再送するため、入力の大半は「前回と同じprefix」になる。その保持コストを4分の1から8分の1に下げられれば、キャッシュヒット時の単価を下げても採算を保ちやすいと考えられる。モデルの学習や推論に使う計算基盤（GPUの種類や規模、データセンターの所在）は、公式ドキュメントからは確認できなかった。応答ヘッダーから分かるのは前段の配信網だけで、推論サーバーの場所を示すものではない点には注意が要る。
:::

## ビジネスモデル

公開情報から確認できるDeepSeekの収益源は、前払い残高から引き落とすAPIの従量課金だ。チャットアプリは無料とされ、公式サイトにサブスクリプションのプランは掲載されていない。

:::fact
公式の料金ページ（2026-10-01確認）によれば、deepseek-flashの100万トークンあたりの価格は、ピーク時で入力0.30ドル（キャッシュミス）・0.006ドル（キャッシュヒット）・出力1.20ドル。オフピークは各々その半額で、0.15ドル・0.003ドル・0.60ドルになる。deepseek-v4-proはピーク時に1.32ドル・0.044ドル・3.96ドル、オフピークは0.66ドル・0.022ドル・1.98ドルだ。ピーク時間帯は平日のUTC 1〜4時と6〜10時（日本時間の10〜13時と15〜19時）で、週末と中国の祝日は終日オフピークと定められている。同時接続数の上限は、deepseek-flashが2,500、deepseek-v4-proが500で、枠の拡張に追加費用はかからないと記載されている。
:::

:::fact
値付けの変更履歴も公式に残っている。Change Logによれば、ピーク/オフピーク制は2026年8月13日の告知で導入され、8月16日16時（UTC）に発効した。9月10日のV4.1-Flash公開時には、APIの価格を引き下げたと告知している。同日の公式ニュースは「V4.1-Flashによって、より低いコストでより多くの利用者に提供できる。その分を還元する」と説明した。同じニュースは、9月14日以降 deepseek-v4-pro へのリクエストをV4.1-Flashに振り替えると予告していた。しかしChange Logには、利用者の要望を受けて9月14日以降もV4-ProのAPI提供を続け、課金方法も変えないとの記載がある。料金ページにも両モデルが載っている。
:::

:::fact
価格水準の参照点として、Anthropicの公式料金表（2026-10-01確認）を引く。Claude Haiku 4.5は入力100万トークン1ドル・出力5ドル、Claude Opus 5.5は入力4ドル・出力20ドルと記載されている。これはあくまで定価の比較であり、モデルの能力や用途が同等であることを意味しない。
:::

:::fact
データの所在と準拠法は、ポリシーと規約に明記されている。プライバシーポリシーは「当社が収集した情報を中華人民共和国にある安全なサーバーに保存します」と記す。利用規約9.1とOpen Platform利用規約10.1は、準拠法を中華人民共和国（大陸）の法令とし、協議で解決しない紛争はHangzhou DeepSeek Artificial Intelligence Co., Ltd.の登記上の所在地を管轄する裁判所に提起できると定める。日本の個人情報保護委員会は2025年2月3日（同年3月5日更新）、同社のプライバシーポリシーの記載内容として、取得された個人情報を含むデータが中華人民共和国に所在するサーバに保存されること、当該データに中華人民共和国の法令が適用されることの2点を情報提供している。
:::

:::guess
重みをMITで公開すれば、他社のクラウドや利用者の自前環境でも同じモデルを動かせる。それでも自社のAPIに課金の余地が残るのは、売り物がモデルではなく運用の効率だからだと考えられる。キャッシュヒット時の入力単価はキャッシュミス時の50分の1で、オフピークはさらに半額になる。これは、KVキャッシュをディスクに保持する仕組みと、需要の谷に処理を寄せる時間帯別の値付けを、自社の設備で両方握っているから出せる価格だとみられる。重みを入手した第三者が同じ単価を再現するには、同等のキャッシュ基盤と稼働率が要ると推測される。
:::

:::guess
この価格でAPI単体が黒字なのかどうかは、公開情報からは判断できない。売上・利益・推論の原価は公表されていない。Wikipediaは、同社が研究に注力し、当面の商業化を予定していないと述べてきたと記している。公式ニュースには「2,000基のGPUとストレージクラスターを伴う大規模導入」の相談を受け付ける一文があり、API以外に自社環境への導入支援という収益の経路を探っている可能性がある。報じられている資金調達や上場準備が事実であれば、研究を出資者の資金で賄う段階から、外部の投資家に収益の見通しを説明する段階へ移りつつあるとも読める。ただし、これらは二次情報にもとづく推測であり、別の解釈も成り立つ。
:::

:::guess
利用を検討する側にとっての論点は、価格よりもデータの置き場所になりそうだ。公式のチャットとAPIを使う場合、データは中国国内のサーバーに保存され、中国法が適用されるとポリシーに書かれている。一方、MITライセンスの重みを自前の環境や第三者のクラウドで動かす場合は、この条項の対象外になると考えられる。同じモデルに「安い公式API」と「置き場所を選べる公開重み」の2つの入手経路があること自体が、用途に応じて選べる設計になっているとみられる。どちらを選ぶかは、扱うデータの性質と各組織の規程による。
:::

重みはMITライセンスで配り、APIはキャッシュと時間帯で細かく値付けし、チャットは無料にする。DeepSeekの解剖から見えるのは、モデルの希少性ではなく、長い文脈を安く保持して再利用する運用の効率に値段を付ける設計だ。その採算と、資本構成の詳細は公表されていない。公開情報から確かめられるのは、料金表が1カ月の間に2度書き換えられ、公式ニュースとモデルカードがその値下げの根拠をKVキャッシュの圧縮として説明している、という対応関係までである。
