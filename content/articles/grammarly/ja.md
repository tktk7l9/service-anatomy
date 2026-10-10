---
service: "Grammarly"
title: "赤い下線の会社が、社名を「Superhuman」に変えた — 1日4,000万人の文章を週1,000億回のLLM推論で直し、メール・会議メモ・AI検出まで買い集めるGrammarlyを解剖する"
description: "Grammarlyは、英語の文章の誤りに赤い下線を引き、書き直しを提案するAIの文章アシスタントだ。2009年に創業し、1日に4,000万人以上が使い、2025年5月時点の年間売上は7億ドルを超える。2024年12月にCodaの買収を発表して経営者を迎え、2025年10月には会社の名前をSuperhumanに変えた。その後もAIの検出のGPTZero、会議の記録のFathomを買い、製品の名前としてのGrammarlyはSuperhumanのスイートの中心に残っている。公式のブログ、料金ページ、エンジニアリングブログ、アフィリエイトの規約、当サイトの実観測から、Common Lispで書かれた文法エンジンから10億パラメータ超の単一のモデルへの移行、vLLMとAmazon EKSとDatabricksを組み合わせた推論の基盤、プロンプトの回数で分ける料金、買収で広げる「AIの生産性の基盤」までを解剖する。"
lead: "Grammarlyの赤い下線は、利用者がボタンを押さなくても、書いている途中の文章に勝手に現れる。Superhumanのエンジニアリングブログ（2026-09-16）によれば、この「待たせてはいけない」提案を出すために、4,000万人の1日の利用者が、週におよそ1,000億回のLLMへのリクエストを生んでいる。英語の文法チェックの会社として知られたGrammarlyは、2025年に会社の名前をSuperhumanに変え、メールのアプリ、ドキュメント、AIの検出、会議の記録を買い集めた。その技術とお金の流れを、公開情報だけで解剖する。"
category: ai-tool
tags: [ai, ai-assistant, llm, writing, aws, kubernetes]
publishedAt: "2026-10-10"
updatedAt: "2026-10-10"
lastVerified: "2026-10-10"
serviceUrl: "https://www.grammarly.com/"
# Affiliate link placeholder: Grammarly runs its own affiliate program
# (https://www.grammarly.com/affiliates, checked 2026-10-10: a 90-day cookie, an activation bonus,
# commissions for both account sign-ups and purchases). The terms
# (https://www.grammarly.com/affiliates/terms) run the program through HasOffers, Commission
# Junction, PartnerStack or ShareASale, forbid bidding on "Grammarly" and many generic keywords,
# and say affiliates may not use Grammarly's name or logo in marketing materials without written
# approval, so the owner should confirm with the program that an affiliate link inside this
# editorial article is acceptable before enabling it. If a network supplies a text ad, copy it
# verbatim into label (never invent it) and keep every field identical in ja.md and en.md.
# affiliate:
#   url: "https://<grammarly-affiliate-tracking-link>"
#   program: "Grammarly Affiliate Program"
vendor: "Superhuman Platform Inc.（旧Grammarly, Inc.）"
origin: "US"
heroTheme: "grammarly"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "文法の誤り訂正（GEC）"
    name: "Grammarly GEC model (in-house LLM, 1B+ parameters)"
    confidence: confirmed
    evidence: "Superhumanのエンジニアリングブログ（2026-09-16）に、GEC（Grammatical Error Correction）のシステムは数千万〜数億パラメータの小さな専用モデルを複数つないだパイプラインとして始まり、モデル同士の提案のぶつかりを調停する別のモデルまで要ったため、10億パラメータを超える単一の大きなモデルにまとめたと明記"
    evidenceUrl: "https://blog.superhuman.com/scaling-gec-inference/"
  - layer: "推論の基盤"
    name: "vLLM (FP8 quantization, speculative decoding) + Kubernetes (Amazon EKS) + AWS"
    confidence: confirmed
    evidence: "同じ記事に、サービスごとにGPUインスタンスの専用のプールが要ったAmazon ECSから、インスタンスの種類を混ぜて使えるAWS上のKubernetes（Amazon EKS）に移り、推論とモデルの配信にvLLMを採用し、重みを8ビットの浮動小数点で持つ量子化と投機的デコーディングで速さと処理量を上げたと明記"
    evidenceUrl: "https://blog.superhuman.com/scaling-gec-inference/"
  - layer: "外部の推論ベンダー"
    name: "Databricks (Foundation Model API)"
    confidence: confirmed
    evidence: "同じ記事に、DatabricksのFoundation Model APIを本番のトラフィックで影のリクエストとA/Bテストにかけたうえで、最も量の多いモデルをDatabricksに任せ、専門的・実験的・少量のモデルを社内の基盤に残すハイブリッドにしたと明記"
    evidenceUrl: "https://blog.superhuman.com/scaling-gec-inference/"
  - layer: "LLMゲートウェイ"
    name: "LLM gateway/proxy (in-house, ~100,000 RPS)"
    confidence: confirmed
    evidence: "同じ記事に、リクエストを認証して複数の提供元に振り分けるため、社内のLLMゲートウェイ（プロキシ）の層を毎秒約1,000リクエストから約10万リクエストまで、ほぼ100倍に強化したと明記"
    evidenceUrl: "https://blog.superhuman.com/scaling-gec-inference/"
  - layer: "サービスメッシュ"
    name: "Linkerd"
    confidence: confirmed
    evidence: "Grammarlyのエンジニアリングブログ（2025-07-24）に、文章を解析する中核のサービス群（データプレーン）を、従来のコンテナのサービスからAWS上のKubernetesに移し、サービス間の通信の保護と監視にオープンソースのサービスメッシュLinkerdを使っていると明記"
    evidenceUrl: "https://www.grammarly.com/blog/engineering/the-great-linkerd-mystery/"
  - layer: "端末上のモデル"
    name: "Llama (on-device model, ~1B parameters)"
    confidence: confirmed
    evidence: "Grammarlyのエンジニアリングブログ（2025-04-28）に、オフラインでも使えるよう、複数の大きなモデルが担う綴りと文法の訂正を約10億パラメータの1つの小さなモデルにまとめる試作を作り、T5とLlamaを比べてLlamaを土台に選び、まずAppleのデスクトップの利用者に絞って最適化したと明記"
    evidenceUrl: "https://www.grammarly.com/blog/engineering/efficient-on-device-writing-assistance/"
  - layer: "中核の文法エンジン（2015年時点）"
    name: "Common Lisp (SBCL in production, CCL in development)"
    confidence: confirmed
    evidence: "Grammarlyのエンジニアリングブログ（2015-06-26）に、事業の土台である中核の文法エンジンはCommon Lispで書かれ、毎秒1,000文以上を処理し、AWS上の素のLinuxイメージで本番はSBCL、開発者の多くの手元はCCLで動かしていると明記。同じ記事はJVMの言語、JavaScript、Erlang、Python、Goも使うと書く"
    evidenceUrl: "https://www.grammarly.com/blog/engineering/running-lisp-in-production/"
  - layer: "Webの配信"
    name: "Amazon CloudFront"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-10）で、www.grammarly.com は via: ... cloudfront.net (CloudFront)、x-amz-cf-pop: NRT57-P3、x-cache: Miss from cloudfront を返した"
  - layer: "会社のブログ"
    name: "Ghost (blog.superhuman.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-10）で、blog.superhuman.com の記事は <meta name=\"generator\" content=\"Ghost 6.68\"> を含み、server: cloudflare と Varnish のキャッシュのヘッダーを返した"
sources:
  - label: "Grammarly公式: About Us（創業と社名の変更）"
    url: "https://www.grammarly.com/about"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式: Prices and Plans"
    url: "https://www.grammarly.com/plans"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式ブログ: Grammarly to Acquire Coda, Bring on New CEO（2024-12-17）"
    url: "https://www.grammarly.com/blog/company/grammarly-to-acquire-coda/"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式ブログ: Grammarly Announces $1 Billion Growth Financing With General Catalyst（2025-05-29）"
    url: "https://www.grammarly.com/blog/company/grammarly-announces-growth-financing/"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式ブログ: Grammarly to Acquire Superhuman（2025-07-01）"
    url: "https://www.grammarly.com/blog/company/grammarly-to-acquire-superhuman/"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式ブログ: Grammarly Expands Beyond English With AI Writing Assistance in 5 New Languages（2025-09-10）"
    url: "https://www.grammarly.com/blog/company/grammarly-launches-multilingual-support/"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式: Languages（文章の訂正に対応する23言語と文中翻訳の19言語）"
    url: "https://www.grammarly.com/languages"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式ブログ: Grammarly Rebrands Company as Superhuman（2025-10-29）"
    url: "https://www.grammarly.com/blog/company/announcing-company-rebrand-to-superhuman"
    accessedAt: "2026-10-10"
  - label: "Superhuman公式ブログ: Superhuman to Acquire GPTZero（2026-06-23）"
    url: "https://blog.superhuman.com/superhuman-to-acquire-gptzero/"
    accessedAt: "2026-10-10"
  - label: "Superhuman公式ブログ: Superhuman Launches Superhuman Docs（2026-07-08）"
    url: "https://blog.superhuman.com/superhuman-launches-superhuman-docs/"
    accessedAt: "2026-10-10"
  - label: "Superhuman公式ブログ: Superhuman Acquires Fathom（2026-09-14）"
    url: "https://blog.superhuman.com/superhuman-acquires-fathom/"
    accessedAt: "2026-10-10"
  - label: "Superhuman公式ブログ: GPTZero is Now Part of Superhuman（2026-09-30）"
    url: "https://blog.superhuman.com/superhuman-acquires-gptzero/"
    accessedAt: "2026-10-10"
  - label: "Superhumanエンジニアリングブログ: How We Scaled Our LLM Inference Infrastructure to Serve 100+ Billion Requests a Week（2026-09-16）"
    url: "https://blog.superhuman.com/scaling-gec-inference/"
    accessedAt: "2026-10-10"
  - label: "Grammarlyエンジニアリングブログ: Running Lisp in Production（2015-06-26）"
    url: "https://www.grammarly.com/blog/engineering/running-lisp-in-production/"
    accessedAt: "2026-10-10"
  - label: "Grammarlyエンジニアリングブログ: One Model to Rule Them All（端末上のモデル・2025-04-28）"
    url: "https://www.grammarly.com/blog/engineering/efficient-on-device-writing-assistance/"
    accessedAt: "2026-10-10"
  - label: "Grammarlyエンジニアリングブログ: The Great Linkerd Mystery（2025-07-24）"
    url: "https://www.grammarly.com/blog/engineering/the-great-linkerd-mystery/"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式: Affiliates"
    url: "https://www.grammarly.com/affiliates"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式: Affiliate Program Operating Agreement（規約）"
    url: "https://www.grammarly.com/affiliates/terms"
    accessedAt: "2026-10-10"
  - label: "Grammarly公式: Terms of Service（Superhuman Platform Inc.）"
    url: "https://www.grammarly.com/terms"
    accessedAt: "2026-10-10"
---

Grammarlyは、ブラウザやメール、文書作成のアプリの上で、書いている英語の誤りに赤い下線を引き、言い換えや語調の調整を提案するAIの文章アシスタントだ。当サイトが解剖した[DeepL](/ja/articles/deepl)が翻訳から書き直しへ広がったのとは逆に、Grammarlyは英語の添削から始まり、いまは[ChatGPT](/ja/articles/chatgpt)のような生成AIの機能も抱える。2025年10月、運営会社は名前をGrammarlyからSuperhumanに変えた。製品としてのGrammarlyは、その新しい会社のスイートの中心に残っている。

## サービス解説

Grammarlyは、無料のFree、個人やチーム向けのPro、大企業向けのEnterpriseの3つのプランで売られ、ブラウザの拡張機能、WindowsとMacのデスクトップアプリ、iPhoneとAndroidのアプリ、自社の文書作成の画面（Docs）で動く。

:::fact
公式のAbout Usのページ（2026-10-10確認）によれば、Grammarlyは2009年にMax Lytvyn氏、Alex Shevchenko氏、Dmytro Lider氏が創業し、学生向けの文法チェッカーから、人が書くあらゆる場所で動くAIのコミュニケーションの基盤に育った。2025年にCodaとSuperhuman Mailを買い、同年10月に会社の名前をSuperhumanに変え、Grammarlyはその中核に残ったと書く。2025年5月29日の発表によれば、Grammarlyを毎日使う人は4,000万人を超え、年間の売上は7億ドルを超えていた。2026年9月14日の発表は、会社が4,000万人以上の利用者、5万の組織、3,000の教育機関に使われていると書く。利用規約の契約の相手方は、旧Grammarly, Inc.のSuperhuman Platform Inc.になっている。
:::

:::fact
料金ページ（2026-10-10確認）によれば、Freeは誤りの訂正と語調の表示に加えて月100回までAIで文章を生成でき、Proは文の丸ごとの書き換え、語調の調整、盗用とAIが書いた文章の検出を足し、AIのプロンプトは1人あたり月2,000回まで。Enterpriseは回数が無制限で、Superhuman Goを通じて提供され、独自の鍵での暗号化（BYOK）やデータの持ち出しの防止が付く。Proの表示は月12ドルで、当サイトの閲覧環境（日本）でページに埋め込まれた価格表では、年払いが144ドル、月払いが30ドル、3か月払いが60ドルだった。2025年9月10日の発表によれば、Grammarlyはこの日、初めて英語の外に広がり、スペイン語、フランス語、ポルトガル語、ドイツ語、イタリア語の5つで文法・綴りの訂正と段落の書き換えを始めた。言語のページ（2026-10-10確認）は、文章の訂正に対応する言語を、英語と前述の5言語に、トルコ語、ポーランド語、オランダ語、ベトナム語、インドネシア語、韓国語、ヒンディー語などを加えた23言語とする。日本語はこの一覧に入っておらず、有料の文中翻訳の訳先として、中国語や韓国語とともに日本語を含む19言語が並ぶ。
:::

:::pull
赤い下線は、頼まれる前に出なければ意味がない。その「待たせない」約束を、週1,000億回のリクエストで守っている。
:::

::scorecard

## UX分析

Grammarlyの体験の芯は、利用者に頼ませないことにある。チャットの欄に質問を打ち込む生成AIと違い、書いている場所に、書いている最中に、提案のほうからやって来る。

- **ボタンを押さなくても提案が出る**。エンジニアリングブログ（2026-09-16）は、ほとんどのAIの機能が利用者の操作を待って応答するのに対し、文法の訂正は常に動いている「アンビエント」な機能で、提案が即座に出なければ書く人の手を止めてしまうため、遅延は譲れない条件だと書く。この前提が、後で見る推論の基盤の作り方をすべて決めている。
- **書く場所を選ばない**。2025年7月の発表は、Grammarlyが50万を超えるアプリとWebサイトで動き、20を超えるメールの事業者の上で週5,000万通を超えるメールの推敲を手伝っていると書いた。10月の社名変更の発表では、連携先は100万を超えるアプリとWebサイトと数えられている。利用者がアプリを乗り換えなくても、同じ添削がついてくる。
- **生成AIは回数で区切る**。Freeは月100回、Proは月2,000回と、AIのプロンプトの回数がプランの境目になっている。赤い下線による訂正は回数を数えずに使わせ、計算の重い生成だけを数える分け方だ。
- **AIで書いたかどうかも見せる**。Proには盗用とAIが書いた文章の検出が付く。2026年9月30日の記事は、文章がどう書かれたか（打ち込んだ部分、貼り付けた部分、AIが生成した部分）を示すGrammarlyのAuthorshipに、買収したGPTZeroのAIの検出を並べ、教員が1つの点数だけで学生を判断しないための材料にすると説明する。添削の道具が、同時にAIの使用を確かめる道具も売っている。
- **日本語の文章は直せない**。訂正に対応する言語は23に増えたが、日本語は入っていない。有料の文中翻訳で日本語へ訳すことはできても、日本語の文章そのものに赤い下線は引かれない。日本の利用者にとっては、英文のメールや論文、英語の学習の補助としての位置づけになる。

## 技術構成

::techstack

:::fact
Grammarlyのエンジニアリングブログ（2015-06-26）によれば、当時の事業の土台である中核の文法エンジンはCommon Lispで書かれ、毎秒1,000文以上を処理し、ほぼ3年にわたって本番で動いていた。言語学者と研究者が作った膨大な知識の上で動く古典的なAIのアプリケーションで、AWS上で本番はSBCL、開発者の多くの手元ではCCLで動かした。Superhumanのエンジニアリングブログ（2026-09-16）によれば、文法の誤り訂正（GEC）は、数千万〜数億パラメータの小さな専用モデルをつないだパイプラインを経て、10億パラメータを超える単一のモデルにまとめられた。サービスごとにGPUの専用プールが要ったAmazon ECSから、インスタンスの種類を混ぜられるAmazon EKS（Kubernetes）に移り、推論にはvLLMを使い、重みを8ビットの浮動小数点で持つ量子化と投機的デコーディングで速さを詰めた。そのうえで、DatabricksのFoundation Model APIに本番のトラフィックを影のリクエストとして流し、A/Bテストで遅延、提案の正しさ、トークンあたりの費用を比べてから、最も量の多いモデルをDatabricksに任せ、少量や実験的なモデルを社内の基盤に残すハイブリッドにした。振り分けのために、社内のLLMゲートウェイは毎秒約1,000リクエストから約10万リクエストまで強化された。
:::

:::fact
Grammarlyのエンジニアリングブログ（2025-04-28）は、ネットにつながらない場所でも使えるよう、複数の大きなモデルが担う綴りと文法の訂正を約10億パラメータの1つのモデルにまとめる試作を作り、T5とLlamaを比べてLlamaを土台に選び、まずAppleのデスクトップの利用者に絞って最適化したと書く。2025年7月24日の記事は、文章を解析する中核のサービス群をAWS上のKubernetesに移し、サービス間の通信の保護と監視にLinkerdを使っていること、移行の直後にプロキシの「denied」エラーが多発し、その原因を突き止めた経緯を書く。当サイトの実観測（2026-10-10）では、www.grammarly.com はAmazon CloudFrontから配信され、blog.superhuman.com はGhost 6.68で動いていた。
:::

:::guess
週におよそ1,000億回のリクエストのうち、多くは無料の利用者の文章から生まれているとみられる。訂正のたびに大きな生成AIを呼んでいては採算が合わないため、10億パラメータ級の専用のモデルに絞り、量子化と投機的デコーディングで1回あたりの費用と遅延を削ることが、無料のプランを維持する前提になっていると推測される。端末で動く約10億パラメータのモデルと、サーバーの単一のモデルが同じ大きさにそろっていることからは、同じ系統のモデルを場所に応じて配り分ける方向が読める。外部のDatabricksと社内の基盤を両方持つのは、GPUの不足や需要の急増でどちらかが詰まっても、もう一方へ逃がせるようにするためで、記事自身も「作るか買うか」ではなく「両方」を選んだと書いている。
:::

## 名前を変えた会社

:::fact
Grammarlyは2024年12月17日、ドキュメントのCodaを買収し、Codaの共同創業者でCEOのShishir Mehrotra氏をGrammarlyのCEOに迎えると発表した。2025年5月29日には、2025年1月のCodaの買収を経て、General CatalystのCustomer Value Fundから10億ドルの資金を得たと発表し、使い道を営業とマーケティングの拡大と戦略的な買収とした。7月1日には、AIを組み込んだメールのアプリSuperhumanの買収を発表し、メールを職業人にとってのGrammarlyの最大の用途と位置づけた。10月29日、会社の名前をSuperhumanに変え、Grammarly、Coda、Superhuman Mailに、新しいAIのアシスタントSuperhuman Goを加えた4製品のスイートを発表した。Goは利用者の作業の文脈をつかんで提案し、自社と他社のAIエージェントを使い分け、2026年2月1日まではすべての機能を追加料金なしで使えるとされた。2026年には、6月23日にAIの検出のGPTZeroの買収で合意し（9月30日に完了）、7月8日にCodaを作り直したSuperhuman Docsを出し、9月14日に会議の記録をとるAIのFathomを買った。
:::

| 時期 | 出来事 |
| --- | --- |
| 2009年 | 3人の創業者がGrammarlyを創業 |
| 2024年12月 | Codaの買収を発表、CodaのCEOがGrammarlyのCEOに |
| 2025年5月 | General Catalystから10億ドル、年間売上は7億ドル超 |
| 2025年7月 | メールのアプリSuperhumanの買収を発表 |
| 2025年9月 | 英語以外の5言語に対応 |
| 2025年10月 | 社名をSuperhumanに変更、Superhuman Goを発表 |
| 2026年6〜9月 | GPTZeroの買収（合意・完了）、Superhuman Docs、Fathomの買収 |

:::guess
添削の会社が名前まで変えたのは、生成AIの登場で「文章を整える」機能そのものが、ChatGPTのような汎用のAIに取り込まれていく危機感からとみられる。Grammarlyが持つ強みは、モデルよりも、100万を超えるアプリの上で書いている瞬間に入り込める配り方にある。その入口に、メール、ドキュメント、会議の記録、AIの検出という「仕事の文脈」を次々につなぎ、提案の質で汎用のAIと差をつける戦略と読める。AIで書く道具を売る会社が、AIで書かれた文章を見つける道具も買ったことは矛盾に見えるが、書く側と読む側の両方に「どう作られたか」を示す層を押さえる狙いとすれば筋が通る。
:::

## ビジネスモデル

稼ぎ方は、無料のプランで利用者を集め、Proと法人向けのプランに引き上げるフリーミアムだ。紹介の報酬を払うアフィリエイトも、自社のページで募っている。

:::fact
アフィリエイトのページ（2026-10-10確認）は、紹介者が成果報酬を受け取る仕組みとして、90日間のクッキー、端末をまたいだ計測、最初の活動に払うボーナスを掲げ、報酬の受け取り方が2通りあると書く。規約によれば、個人向けのプログラムでは、Grammarlyのアカウントの新規登録と、有料プランへのアップグレードの2つが報酬の対象になり、法人向けのプログラムでは149席までのセルフサービスの購入などの3つが対象になる。プログラムはHasOffers、Commission Junction、PartnerStack、ShareASaleを通じて運営され、「grammarly」などの商標や「grammar checker」のような一般的な語句への検索広告の入札は禁じられている。2025年5月の10億ドルは、General CatalystのCustomer Value Fund（CVF）からの「市場開拓のための投資（go-to-market investment）」と説明され、使い道は営業とマーケティングの拡大と買収とされた。
:::

:::guess
登録だけでも報酬を払うアフィリエイトの設計は、まず無料で使い始めてもらい、書く量が増えた人を有料に引き上げるフリーミアムの入口を広げるためとみられる。10億ドルを、営業とマーケティングに充てる「市場開拓のための投資」として受けたことも、獲得した客がどれだけ払い続けるかを読める事業であることの表れと推測される。4,000万人の無料と有料の利用者を、Superhumanのスイートの席に変えられるかどうかが、社名の変更の成否を決めるとみられる。
:::

2009年に英語の文法チェッカーとして生まれたGrammarlyは、Common Lispの文法エンジンから10億パラメータ超の単一のモデルへ作り替え、週1,000億回の推論を自社の基盤とDatabricksに振り分けて、赤い下線を待たせずに出し続けている。会社はその入口の広さを元手に、名前をSuperhumanに変え、メール、ドキュメント、会議、AIの検出を買い集めた。添削の道具が、AIの時代の「仕事のどこにでもいるアシスタント」になれるかを試す、大きな賭けだ。
