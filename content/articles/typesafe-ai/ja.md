---
service: "TypeSafe AI"
title: "文章を書かないAI — TypeSafe AIの「Jev」は、選択肢と確率だけを返して、コードの中の判断を引き受けようとしている"
description: "TypeSafe AIは、文章を生成せず「選択・点数・はい/いいえ」と確率だけを返すモデルJevを、2026年9月15日に早期アクセスで公開した米サンフランシスコのAIラボ。入力10億トークンあたり42ドル・出力は無料という料金、「193.6倍速い」「238倍安い」という同社の主張とその測り方、苦手を並べた公式ページ、公開されていない資金・構造・検証を、公式サイト・ドキュメント・規約・GitHub・報道から解剖する。"
lead: "トップページには「193.6倍速く、444.6倍安い」「10億トークンあたり42ドル」と並ぶ。どれもTypeSafe AI自身の主張で、当サイトが測った数字ではない。ただし同社は、その数字が自社に有利に出る理由まで自分で書き、モデルの苦手を9項目並べたページも公開している。ChatGPTの土台になった学習手法の論文に名を連ねる研究者が、2年間の非公開期間を経て出した「文章を書かないAI」を、公開情報だけで解剖する。"
category: ai-tool
tags: [ai, api, automation, developer-tools, structured-output]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://typesafe.ai/"
vendor: "TypeSafe AI, Inc."
origin: "US"
heroTheme: "typesafe-ai"
scores: { product: 3.5, ux: 3.5, tech: 3.5, business: 2.5 }
techStack:
  - layer: "モデル"
    name: "Jev 1.13 (System One model, in-house)"
    confidence: confirmed
    evidence: "公式ドキュメントのModelsページに、現行モデルjev-1.13.0、料金（10億トークン42ドル）、レート制限、文脈長64kトークン、入力はテキストのみと明記。構造（パラメータ数・層の構成）は公開されていない"
    evidenceUrl: "https://docs.typesafe.ai/models"
  - layer: "学習手法"
    name: "RLCD (Reinforcement Learning for Calibrated Decisions)"
    confidence: confirmed
    evidence: "公式ドキュメントのAI primerが、RLHF・RLVRに続く3つ目の事後学習としてRLCDを説明し、文章を生成せず判断と校正された確率を返すと明記。手法の詳細や論文は公開されていない"
    evidenceUrl: "https://docs.typesafe.ai/introduction/machine-learning-primer"
  - layer: "API"
    name: "REST API (POST /v1/systemone)"
    confidence: confirmed
    evidence: "公式APIリファレンスに、state・model・questionsを送りanswersを受け取る単一のエンドポイントとBearer認証を明記。当サイトの観測（2026-10-01）でも、鍵なしの要求にapi.typesafe.aiがJSONのauthentication_errorとx-typesafe-request-idヘッダーを返した"
    evidenceUrl: "https://docs.typesafe.ai/api"
  - layer: "SDK"
    name: "Python SDK (typesafe-sdk) / TypeScript SDK (@typesafe-ai/sdk)"
    confidence: confirmed
    evidence: "GitHubのtypesafe-ai組織に、公式のPython・TypeScript/JavaScriptライブラリがMITライセンスで公開されている。Python版の依存はhttpx2・pydantic・tenacityなど"
    evidenceUrl: "https://github.com/typesafe-ai"
  - layer: "評価コード"
    name: "WorkflowEvals (Python)"
    confidence: confirmed
    evidence: "evals.typesafe.aiの結果を再現するためのコードをGitHubで公開（Apache-2.0）。4つのワークフロー・計705件の事例と、OpenAI・Anthropic・Fireworksなどの提供元を切り替える実行手順をREADMEに記載"
    evidenceUrl: "https://github.com/typesafe-ai/WorkflowEvals"
  - layer: "Webサイト"
    name: "Framer"
    confidence: confirmed
    evidence: "当サイトの観測（2026-10-01）で、typesafe.aiが server: Framer と framer-site-id ヘッダーを返し、HTMLに generator: Framer のmetaタグがあり、www.typesafe.aiのCNAMEが sites.framer.app を指す"
    evidenceUrl: "https://typesafe.ai/"
  - layer: "ドキュメント"
    name: "Mintlify"
    confidence: likely
    evidence: "当サイトの観測（2026-10-01）で、docs.typesafe.aiのCNAMEが cname.mintlify.builders を指し、画像が mintcdn.com から配信され、llms.txtへのLinkヘッダーが付く。各ページのMarkdown版（.md）の末尾には「This documentation is built and hosted on Mintlify」の一文がある（2026-10-02確認）。TypeSafe AI自身による技術構成の説明ではないためlikely扱い"
  - layer: "CDN・DNS"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの観測（2026-10-01）で、typesafe.aiのネームサーバーが ns.cloudflare.com で、api・console・evals・docsの各サブドメインが server: cloudflare と cf-ray ヘッダーを返す"
  - layer: "コンテナ基盤"
    name: "Kubernetes"
    confidence: likely
    evidence: "公式の採用ページに「Member of Technical Staff, Infrastructure (Kubernetes Specialist)」の募集がある。製品の実行基盤としての明言は見当たらない"
    evidenceUrl: "https://jobs.ashbyhq.com/typesafe-ai"
  - layer: "採用管理"
    name: "Ashby"
    confidence: confirmed
    evidence: "公式サイトの「Open roles」が jobs.ashbyhq.com/typesafe-ai に飛び、typesafe.ai/careers も同じAshbyの求人ボードを返す"
    evidenceUrl: "https://jobs.ashbyhq.com/typesafe-ai"
  - layer: "セキュリティ・コンプライアンス"
    name: "Vanta"
    confidence: likely
    evidence: "データ処理補足契約が下請け処理者の一覧として指す trust.typesafe.ai が、当サイトの観測（2026-10-01）でVantaのスクリプトを読み込むTrust Centerだった。取得済みの認証は確認できていない"
  - layer: "プロダクト分析"
    name: "PostHog"
    confidence: likely
    evidence: "当サイトの観測（2026-10-01）で、typesafe.aiのHTMLに us.posthog.com への参照がある。プライバシーポリシーが名前を挙げる分析サービスはGoogle Analyticsで、PostHogの記載は見当たらない"
  - layer: "メール"
    name: "Google Workspace / SendGrid"
    confidence: likely
    evidence: "当サイトの観測（2026-10-01）で、typesafe.aiのMXレコードがGoogleのメールサーバーを指し、SPFレコードが _spf.google.com と sendgrid.net を含む"
  - layer: "認証"
    name: "Stytch"
    confidence: speculative
    evidence: "当サイトの観測（2026-10-01）で、typesafe.aiのTXTレコードに stytch_verification_dns があった。ドメイン確認の記録であり、コンソールのログインに使っているかは確認できていない"
sources:
  - label: "TypeSafe AI公式: トップページ（193.6倍・444.6倍・42ドル・238倍の表示）"
    url: "https://typesafe.ai/"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ブログ: Introducing System One Models & Jev（2026-09-15）"
    url: "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ブログ: Lies, Damned Lies, and Benchmarks（2026-09-11）"
    url: "https://typesafe.ai/blog/antibenchmaxxing"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式: Manifesto"
    url: "https://typesafe.ai/manifesto"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式: Team（創業者・所在地・働き方）"
    url: "https://typesafe.ai/team"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: Models（料金・レート制限・文脈長・言語）"
    url: "https://docs.typesafe.ai/models"
    accessedAt: "2026-10-02"
  - label: "TypeSafe AI公式ドキュメント: System One"
    url: "https://docs.typesafe.ai/concepts/system-one"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: Introduction（Choice・Score・Noul）"
    url: "https://docs.typesafe.ai/introduction"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: AI primer（RLCD）"
    url: "https://docs.typesafe.ai/introduction/machine-learning-primer"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: Jev 1.13 jaggedness（苦手の一覧・同社による最終レビュー2026-09-17）"
    url: "https://docs.typesafe.ai/model-jaggedness/jev-1.13"
    accessedAt: "2026-10-02"
  - label: "TypeSafe AI公式ドキュメント: Jev with coding agents"
    url: "https://docs.typesafe.ai/introduction/coding-agents"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: API reference"
    url: "https://docs.typesafe.ai/api"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: Legal（ZDRは企業向け）"
    url: "https://docs.typesafe.ai/legal"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式: Workflow evals"
    url: "https://evals.typesafe.ai/"
    accessedAt: "2026-10-01"
  - label: "GitHub: typesafe-ai（公式の組織ページ）"
    url: "https://github.com/typesafe-ai"
    accessedAt: "2026-10-01"
  - label: "GitHub: typesafe-ai/WorkflowEvals（評価コード）"
    url: "https://github.com/typesafe-ai/WorkflowEvals"
    accessedAt: "2026-10-01"
  - label: "GitHub: typesafe-ai/system-one-adapter-python（LLMを同じAPIの形で呼ぶアダプター）"
    url: "https://github.com/typesafe-ai/system-one-adapter-python"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式: Privacy Policy（2025-11-19更新）"
    url: "https://typesafe.ai/legal/privacy-policy"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式: Terms of Use（2026-09-19更新・所在地・準拠法）"
    url: "https://typesafe.ai/legal/terms"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式: Master Customer Agreement（2026-09-23更新）"
    url: "https://typesafe.ai/legal/mca"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式: Data Processing Addendum（2026-04-24更新）"
    url: "https://typesafe.ai/legal/data-processing"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式: 採用ページ（Ashby）"
    url: "https://jobs.ashbyhq.com/typesafe-ai"
    accessedAt: "2026-10-01"
  - label: "arXiv: Training language models to follow instructions with human feedback（InstructGPT論文・2022-03-04）"
    url: "https://arxiv.org/abs/2203.02155"
    accessedAt: "2026-10-01"
  - label: "TechCrunch: A new kind of AI model from a ChatGPT inventor is thrilling developers（2026-09-18）"
    url: "https://techcrunch.com/2026/09/18/a-new-kind-of-ai-model-from-a-chatgpt-inventor-is-thrilling-developers/"
    accessedAt: "2026-10-01"
  - label: "Hacker News: Introducing System One Models and Jev（2026-09-15の投稿）"
    url: "https://news.ycombinator.com/item?id=49717558"
    accessedAt: "2026-10-01"
  - label: "Claude Platform公式ドキュメント: Pricing（Claude Fable 5.1の入力単価）"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    accessedAt: "2026-10-01"
---

チャットAIは、人に読ませる文章を返す。プログラムがその答えを使うには、文章を読み解いて、形が合っているかを確かめる必要がある。TypeSafe AIは、この手間を「モデルの側で無くす」ことに賭けた会社だ。同社のモデルは文章を1文字も書かない。返すのは、あらかじめ決めた選択肢のどれか、点数、はい/いいえの確率だけである。

## サービス解説

TypeSafe AIは、自社を「ソフトウェアの中で判断を下すための、機械向けの知能基盤を作るAIラボ」と説明する。最初の公開モデルが「Jev」（ジェブ）で、同社はこの種のモデルを「System One Model」と呼ぶ。

使い方は単純だ。判断の材料になるテキストやJSONを「state」として渡し、そこに「質問」を付ける。質問は3種類しかない。

- **Choice**。決めた選択肢から1つを選ぶ。選んだ答えと、選択肢ごとの確率、確信度が返る。
- **Score**。決めた段階に沿って点数を付ける。点数と、段階ごとの確率、確信度が返る。
- **Noul**。はい/いいえの問いに、「はい」である確率（0〜1）を返す。

返ってくるのはこの値だけなので、受け取ったプログラムは `if` や並べ替えにそのまま使える。公式ドキュメントは、返品の依頼を例に挙げる。顧客の文面・取引履歴・返金規定をstateに入れ、「返金を求めているか」「二重請求の証拠があるか」「規定は返金を認めるか」を別々の質問として同時に尋ね、答えをコード側の決まりと組み合わせて、処理するか人に回すかを決める。

「System 1」は、心理学者ダニエル・カーネマンが著書『ファスト&スロー』で広めた言葉で、速く直感的な思考を指す。じっくり考える「System 2」と対になる。同社の説明に沿えば、汎用のLLMが文章を1トークンずつ順に書きながら考えるのに対し、Jevは「よく知っている人が、材料を見て数秒で下せる判断」だけを引き受ける。複数の要素を比べる込み入った判断は、小さな質問に分けて、足し合わせ方はコードに書く、というのが同社の勧める作り方だ。

:::fact
公式ブログ（2026年9月15日）は、創業者のディオゴ・アルメイダの名前で、2年間の非公開期間を経てJevを早期アクセスで公開したと発表した。公式のTeamページによれば、創業者はCEOのアルメイダ、COOのサーシャ・シェン、CTOのエリック・ガフニの3人。同ページはアルメイダを「RLHFとInstructGPTの共同発明者」で、以前はGoogle Brainに在籍したと紹介している。InstructGPTの論文（arXiv・2022年3月）の著者20人の中に、Diogo Almeidaの名前がある。利用規約によれば運営会社はTypeSafe AI, Inc.で、所在地はサンフランシスコのCalifornia St 255番地。Teamページは、チームが週5日、サンフランシスコのオフィスに出社して働くと書く。GitHubの組織ページは2024年5月28日に作られている。
:::

:::fact
公開されていないことも多い。Teamページは「一流の投資家の支援を受けている」と書くが、投資家の名前・調達額・評価額は公式サイトのどこにも見当たらない。TechCrunch（2026年9月18日）の記事にも、調達額や投資家の記載はない。従業員数、売上、顧客の社名、Jevのパラメータ数や構造も公開されていない。採用ページ（2026年10月1日時点）は、モデルの能力・バックエンド・インフラの技術職から、最初の採用担当・最初のマーケター・財務まで9職種を募集しており、勤務地はすべてサンフランシスコのオフィスだった。
:::

:::pull
Jevは文章を書かない。返すのは、選択肢のどれか、点数、はい/いいえの確率だけだ。
:::

::scorecard

採点について。Jevは早期アクセスで、順番待ちの登録から順に招待される。当サイトはコンソールとAPIを実際には使えておらず、速さ・精度・料金の体感は確かめていない。このため、点数は公式ドキュメント・規約・公開コードから読み取れる範囲で付け、確かめられない部分は高く付けていない。サービス設計は、3種類の質問という絞り込みと、できないことの明記を評価し、テキストのみ・英語中心・公開から半月という若さを差し引いた。UXは、ドキュメントの充実と、試すまでに順番待ちがあることの両方を見た。技術は、公開された評価コードと、構造が非公開で第三者の検証がまだ少ないことの両方を見た。ビジネスは、価格が明示されている一方で、資金・売上・価格の持続性が確かめられないため低めにしている。

## UX分析

Jevの「利用者」は開発者と、開発者の書いたコードだ。体験の設計も、画面よりAPIの形とドキュメントに表れている。

- **質問が3種類しかない**。Choice・Score・Noulのどれかに当てはめる、という制約そのものが設計になっている。1回の要求に3種類を混ぜて入れられ、公式ドキュメントによれば各質問は同じstateに対して並列に、互いに独立して評価される。
- **確信度で「機械に任せるか、人に回すか」を分ける**。ChoiceとScoreの答えには確信度が付く。公式ドキュメントは、確信度が高ければ自動で処理し、低ければ人や推論型のモデルに回す、という作り方を「Confidence-gated routing」として説明している。
- **できないことを先に書く**。コーディングエージェント向けのページは、JevはClaude CodeやCursorの裏にあるLLMの置き換えではない、と冒頭で断っている。文章を書かず、コードも書かず、会話もしないからだ。
- **苦手を並べたページがある**。「Jev 1.13 jaggedness」は、文字どおりに読みすぎる、数を確実には数えられない、日付の前後の比較が当てにならない、何段も推論が要る問いに弱い、関係のない情報が多いと精度が落ちる、誘導する文面に動かされうる、など9項目を挙げ、それぞれに回避策を書いている。
- **AIエージェントが読みやすい入口**。docs.typesafe.aiは `llms.txt` を置き、各ページを `.md` で返す。Claude CodeやCodex向けの「agent skill」も公開しており、GitHubのスター数は2,513だった（2026年10月1日時点）。

:::fact
公式ドキュメントのModelsページ（2026年10月1日時点）によれば、現行モデルは `jev-1.13.0`。レート制限は毎秒10万トークン・毎秒40リクエスト、文脈長は1リクエスト64kトークン（stateと最も長い質問の合計は32kまで）。入力はテキストのみで、画像・音声・動画には対応しない。同ページは、需要が大きいためレート制限は予告なく変わりうると警告している。言語は英語が主な学習言語で精度が最も高く、日本語を含むCJKの文字も扱えるが同等ではないため、英語以外で使う前に自分のデータで試すよう勧めている。
:::

:::fact
当サイトはJevを試せていない。公式ブログは、順番待ちの登録者を「できるだけ早く」招待していると書く。当サイトの観測（2026年10月1日）では、鍵を付けずに `api.typesafe.ai/v1/models` を呼ぶと、認証エラーを示すJSONが返った。TechCrunchは、公開直後に需要が大きすぎて、APIが一時的に利用者へ応答できなくなったと報じている。
:::

## 技術構成

::techstack

:::fact
公式ブログは、Jevのために「新しいモデル構造」「並列のサンプラー」「RLCDという学習手法」を作ったと書く。同社の説明では、LLMが1トークンずつ順に出力するのに対し、Jevはすべての答えの確率を1回の処理で並列に出す。出力の形はあらかじめ決まっているので、型の合わない答えは返らない。公式ドキュメントのAI primerは、RLCDを「文章を生成せず、判断と確率を返す」「確率が高いほど正解である見込みが高くなるよう学習する」手法と説明する。ただし、構造の詳細、パラメータ数、学習の手順、論文は公開されていない。TechCrunchはJevを「transformerベースだがLLMではないモデル」と書き、アルメイダは構造について口が堅く、外部には「公開されているLLMの重みを土台にしているのでは」という見方があると伝えている。同記事でアルメイダは、学習データはすべて合成データだと述べている。
:::

:::fact
同社の「ハルシネーションはゼロ」という表現は、意味を絞って読む必要がある。公式ブログは、この数字は実測ではなく、出力が決めた形に必ず一致することから0%と書いている、と自分で注記している。一方、公式ドキュメントは「校正は予測のまとまりについて測るもので、個々の答えが正しいことは保証しない」と書く。つまり、形の外れた答えは返らないが、選択肢の中で間違ったものを選ぶことはありうる。
:::

:::fact
GitHubの `typesafe-ai` 組織には、公式のPython・TypeScript SDK（MIT）、評価コードのWorkflowEvals（Apache-2.0）、LLMをJevと同じ形のAPIで呼ぶためのアダプター、n8n用のノードなどが公開されている。同じ組織には、LLMの推論エンジン `vllm` と、拡散型の言語モデルの実装 `LLaDA` のフォークもある。
:::

:::guess
Jevの中身について、公開情報から言えることは少ない。入力の単価がClaude Fable 5.1の定価と比べて2桁安く、出力を無料にできている点、文脈長が64kトークンである点、質問を何個足しても応答時間がほとんど変わらないと説明されている点からは、stateを1回だけ読み込み、質問ごとの答えを短い計算で同時に取り出す構造だと推測される。Hacker Newsでは、分類や回帰向けに学習し直したエンコーダー型のtransformerではないか、という見方も出ていた。組織にvllmとLLaDAのフォークがあることは、同社が既存の推論基盤や、順番に生成しない方式の言語モデルを調べていたことを示すとみられるが、Jevがそれらを使っているかどうかは分からない。
:::

:::guess
観測できる範囲の周辺技術は、人数の少ない会社らしい組み合わせに見える。公式サイトはFramer、ドキュメントはMintlify、採用はAshby、Trust CenterはVantaと、モデル以外は外部のサービスで組み、手を掛ける場所をモデルと推論基盤に絞っているとみられる。公式ブログは、公開している評価を「西海岸のノートPCから」測っており、サービスも現在は西海岸に置いていると書いている。日本を含む遠い地域から呼ぶと、同社の言う70〜500ミリ秒に通信の往復が上乗せされると推測される。
:::

## ビジネスモデル

収益の柱は、APIの従量課金の1本だ。

:::fact
公式ドキュメントによれば、料金は入力10億トークンあたり42ドル（100万トークンあたり0.042ドル）で、出力は無料。レート制限の引き上げは「カスタムおよびエンタープライズのプラン」で提供し、営業への問い合わせを案内している。月額のプランや無料枠の一覧は、公式サイトにもドキュメントにも見当たらなかった。Master Customer Agreement（2026年9月23日更新）によれば、支払いは前払いのクレジット方式で、入力を送るたびにクレジットが減る。購入したクレジットは、別の定めがなければ購入から12か月で失効し、払い戻しはできない。残高が尽きたときの自動補充は利用者が選んで有効にする。同社が任意で配る無料の「プロモーションクレジット」の条項もあるが、配る義務はないと書かれている。
:::

:::fact
トップページの数字は、どれも同社自身の主張で、比べる相手が決まっている。「238倍」は、入力単価をClaude Fable 5.1と比べたものだ。Anthropicの公式の料金表では、Fable 5.1の入力は100万トークンあたり10ドルで、0.042ドルで割ると約238になる。出力の単価（同50ドル）は、Jevの出力が無料なので比べていない。「193.6倍速い、444.6倍安い」は、公式ブログによれば、同社が作った「ワークフロー評価」の結果だ。4つの業務（請求書の処理、顧客対応、エージェントの記録の監視、セキュリティ警告の仕分け）をコードの流れとして書き、各モデルに同じ質問を投げ、GPT-6 AstraとClaude Fable 5.1の答えの平均を「正解」の基準にして比べる。評価コードと705件の事例は公開されている。
:::

:::fact
同社は、この数字に自分で但し書きを付けている。公式ブログによれば、193.6倍・444.6倍は「実際の利用で得られる改善の上のほう」になる見込みで、評価に使った業務は自社のモデル能力チームが作ったため偏りがありうる。比べる側のLLMは、同社のアダプター経由で確率付きの答えを出させており、確率なしで答えさせるより遅く高くなる傾向がある。公開した測定は西海岸のノートPCから行っている。価格については「補助されていないことは証明できない」と書き、長い時間をかけて示すしかないとしている。別のブログ記事は、同社が標準的なベンチマークの表をモデルの発表に載せない方針だと説明している。つまり、他社のモデルと同じ土俵で比べられる公開のベンチマーク結果は、今のところない。
:::

:::fact
第三者の報告は、まだ個別の事例にとどまる。TechCrunchは、Vercelのエンジニアが、コマンドの安全性を確かめる分類器をOpenAIのモデルからJevに替えて5〜18倍速くなったと述べたこと、別の開発者がビジネスメールの分類でGeminiと比べ、Geminiのほうがわずかに正確だったが10〜20倍高かったと述べたことを紹介している。いずれも本人の報告で、当サイトは確かめていない。公式ブログのHacker Newsへの投稿は、1,989ポイント・520コメントを集めた（2026年10月1日時点）。コメントには、既存のゼロショット分類や小さな専用モデルで足りるのではないか、という指摘もあった。
:::

:::fact
データの扱いは規約に書かれている。プライバシーポリシーは、利用者の入力でAIモデルを学習・微調整しないこと、入力をサービス提供者以外の第三者に開示しないこと、サービスは米国でホストされることを明記する。Modelsページも、Jevは顧客の要求と応答で学習せず、同じ重みが全アカウントに使われると書く。データを保持しない設定（ZDR）は企業向けに提供し、営業への問い合わせを案内している。一方、Master Customer Agreementは、技術ログや統計などの「Telemetry」を、サービス改善を含めて制限なく処理できると定めている。同契約の責任の上限は、過去12か月の支払額か50ドルの大きいほうで、サービスは「現状のまま」提供される。Jevの出力を使ってモデルを蒸留することや、出力を真似るモデルを学習することは禁じられている。
:::

:::guess
出力を無料にし、入力を10億トークン単位で値付けするやり方は、「1回あたりの判断を、気にせず大量に呼べる値段にする」ことを狙っていると推測される。モデルの名前は、石炭の利用効率が上がると消費がかえって増えると論じた経済学者ジェヴォンズに由来すると公式ブログは説明しており、安くすることで使い道そのものを増やす、という考えを名前に込めているとみられる。ただし、この値段で利益が出るのか、投資家の資金で支えているのかは、外からは分からない。同社自身がそれを証明できないと書いている。
:::

:::guess
規約と採用の様子からは、今後の売り方も読み取れる。請求書払いと注文書を前提にした契約、企業向けのZDR、営業・財務・マーケティングの最初の担当者の募集は、従量課金の入口に加えて、企業との個別契約を伸ばす準備とみられる。Jevが引き受けるのは、仕分け・点数付け・確認といった、これまでLLMに「JSONで返して」と頼んでいた部分だ。LLMを置き換えるというより、LLMの手前や後ろに置く部品として広がるかどうかが、この事業の行方を決めると考えられる。
:::

TypeSafe AIが出したのは、何でもできるAIではなく、できることを3種類に絞ったAIだ。同社の数字は大きいが、どれも自社で測ったもので、同社自身がそう書いている。確かめる手段として評価コードと苦手の一覧を公開している点は、判断の材料になる。資金も構造も明かされておらず、公開からまだ半月しか経っていない。「文章を書かない」という引き算が、コードの中の判断という場所で実際に選ばれるのかは、招待を受けた開発者たちの検証がこれから示すことになる。
