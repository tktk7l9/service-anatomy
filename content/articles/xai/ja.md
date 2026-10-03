---
service: "xAI"
title: "看板はxAIからSpaceXAIへ — Grokを作る会社は、1ギガワットの計算資源を競合にも貸して稼ぎ始めた"
description: "Grokを開発するxAIは、2025年3月にXを、2026年2月にはSpaceXに吸収され、いまは「SpaceXAI」を名乗る。SpaceXが2026年5月に提出した上場目論見書（Form S-1）によれば、AI部門の2025年の売上は32億ドル、営業損失は63.6億ドル、設備投資は127億ドル。一方で、メンフィス周辺に築いた約1ギガワットの計算資源を、AnthropicやGoogleに月額で貸す契約を結んだ。Grok 4.7のAPI価格、SuperGrokの料金、Rustで書かれたバックエンド、Cursorの買収までを、公式ドキュメントと目論見書から解剖する。"
lead: "x.aiを開くと、ページの題名は「SpaceXAI」になっている。Grokを作ってきたxAIは、2025年3月に同じ創業者のXを取り込み、2026年2月にSpaceXの子会社になり、同年7月に看板を掛け替えた。SpaceXの上場目論見書が初めて明かしたのは、この会社がモデルを売るだけでなく、モデルを育てるための計算資源そのものを他社に貸して稼ぎ始めた姿だった。月12.5億ドルを払う借り手は、AIアシスタントで競い合うAnthropicである。"
category: ai-tool
tags: [ai-assistant, llm, api, data-center, coding-agent]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://x.ai"
vendor: "Space Exploration Technologies Corp. (SpaceXAI, formerly xAI)"
origin: "US"
heroTheme: "xai"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.0 }
techStack:
  - layer: "基盤モデル"
    name: "Grok 4.7 (500k context, reasoning effort low / medium / high / xhigh)"
    confidence: confirmed
    evidence: "公式ドキュメントのModelsページに、grok-4.7のコンテキスト長50万トークン、入力2ドル・出力6ドル（100万トークンあたり、プロンプト20万トークン未満）と掲載。Grok 4.7の概要ページに、推論の強さをlow・medium・high（既定）・xhighから選べること、知識のカットオフが2026年5月であることを明記（2026-10-01確認）"
    evidenceUrl: "https://docs.x.ai/developers/models"
  - layer: "計算基盤"
    name: "COLOSSUS / COLOSSUS II (approx. 1.0 GW; NVIDIA H100, GB200, GB300)"
    confidence: confirmed
    evidence: "SpaceXがSECに提出したForm S-1（2026-05-20）に、COLOSSUSとCOLOSSUS IIで合計約1.0ギガワットの計算能力を持つと明記。COLOSSUSは約10万基のH100（約130メガワット）を122日で、COLOSSUS IIは約11万基のGB200（約210メガワット）を91日で稼働させ、続く11万基のGB300（220メガワット）は64日で稼働させたと記載"
    evidenceUrl: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
  - layer: "API"
    name: "Responses API / Chat Completions (OpenAI SDK compatible)"
    confidence: confirmed
    evidence: "公式ドキュメントのGrok 4.7の概要ページに、OpenAIのSDKのbaseURLをhttps://api.x.ai/v1に向けて呼び出すコード例と、Responses APIとChat Completionsの両方に対応することを掲載。ドキュメントの目次（llms.txt）にはgRPC APIのリファレンスも並ぶ"
    evidenceUrl: "https://docs.x.ai/developers/grok-4-7"
  - layer: "データ所在地"
    name: "US regional endpoint (us.api.x.ai)"
    confidence: confirmed
    evidence: "公式ドキュメントに、既定のapi.x.aiは処理する地域を保証せず、米国内での処理が必要な場合はus.api.x.ai/v1を使うと明記。対応モデルはgrok-4.7とgrok-4.6の2つで、トークンの料金は10%高い"
    evidenceUrl: "https://docs.x.ai/developers/advanced-api-usage/regions"
  - layer: "コーディングエージェント"
    name: "Grok Build (TUI / headless CLI / Agent Client Protocol)"
    confidence: confirmed
    evidence: "公式ドキュメントに、対話型のTUI、スクリプトから呼ぶヘッドレス実行（grok -p）、Agent Client Protocol経由での他アプリへの組み込みの3通りで使えるコーディングエージェントと明記"
    evidenceUrl: "https://docs.x.ai/build/overview"
  - layer: "バックエンド言語"
    name: "Rust"
    confidence: confirmed
    evidence: "公式の求人（Backend Engineer - API）に「バックエンドのインフラの大半はRustで書かれている」と明記。同じ求人はgRPCの深い知識も求めている（2026-10-01確認）"
    evidenceUrl: "https://job-boards.greenhouse.io/xai/jobs/5120536007"
  - layer: "学習フレームワーク"
    name: "JAX / Python / Rust / C++"
    confidence: likely
    evidence: "公式の求人（Member of Technical Staff - RL Training Framework）が、応募条件としてPython・Jax・Rust・C++のいずれかの熟達を挙げている。応募条件であり、実際の構成を明言したものではないためlikely扱い"
    evidenceUrl: "https://job-boards.greenhouse.io/xai/jobs/5186992007"
  - layer: "クラスタ運用"
    name: "Kubernetes"
    confidence: likely
    evidence: "公式の求人（Member Of Technical Staff - Cloud Infrastructure、米国政府向けチーム）が、ベアメタルとクラウドにまたがる学習・推論クラスタをKubernetesで運用する経験を求めている。政府向けチームの求人であり、全社の構成を示すものではないためlikely扱い"
    evidenceUrl: "https://job-boards.greenhouse.io/xai/jobs/5133071007"
  - layer: "Webフロントエンド"
    name: "Next.js"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-01）。grok.comのHTMLが/_next/static/配下のファイルを読み込み、docs.x.aiの応答ヘッダーにx-nextjs-cacheとx-nextjs-prerenderが含まれる。公式の明言は見当たらない"
  - layer: "エッジ/CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-01）。x.ai・grok.com・docs.x.ai・api.x.aiの応答ヘッダーがいずれもserver: cloudflare。x.aiはブラウザ以外からの取得に403（チャレンジ）を返す。公式の明言は見当たらない"
sources:
  - label: "SEC: Space Exploration Technologies Corp. Form S-1（2026-05-20提出。xAI・Xの統合の経緯、AI部門の業績、COLOSSUS、Anthropicとの契約、有料会員数）"
    url: "https://www.sec.gov/Archives/edgar/data/1181412/000162828026036936/spaceexplorationtechnologi.htm"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式ドキュメント: Models（モデルの一覧とAPI価格）"
    url: "https://docs.x.ai/developers/models"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI公式ドキュメント: Pricing（ツール呼び出し・Batch・Priority・Grok 4.7 Fast・米国エンドポイントの料金）"
    url: "https://docs.x.ai/developers/pricing"
    accessedAt: "2026-10-02"
  - label: "SpaceXAI公式ドキュメント: Grok 4.7（概要と提供先）"
    url: "https://docs.x.ai/developers/grok-4-7"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式ドキュメント: Release Notes（2026年6月〜9月の更新）"
    url: "https://docs.x.ai/developers/release-notes"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式ドキュメント: Regional Endpoints（米国エンドポイントの範囲）"
    url: "https://docs.x.ai/developers/advanced-api-usage/regions"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式ドキュメント: Security FAQ（APIのデータを学習に使わないこと、30日保存）"
    url: "https://docs.x.ai/developers/faq/security"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式ドキュメント: FAQ - Grok Website / Apps（週単位の利用枠、追加クレジット、X Premiumとの関係）"
    url: "https://docs.x.ai/grok/faq"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式ドキュメント: Grok Bot（概要と利用できるプラン）"
    url: "https://docs.x.ai/grok-bot/overview"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式ドキュメント: Grok Build（コーディングエージェントの概要）"
    url: "https://docs.x.ai/build/overview"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式: Introducing Grok 4.7（x.aiは直接取得できないため、Internet Archiveの2026-09-29の保存分で確認）"
    url: "https://web.archive.org/web/20260929101703/https://x.ai/news/grok-4-7"
    accessedAt: "2026-10-02"
  - label: "Apple App Store（米国）: Grok（販売元X Corp.、アプリ内課金の価格）"
    url: "https://apps.apple.com/us/app/grok/id6670324846"
    accessedAt: "2026-10-01"
  - label: "Apple App Store（米国）: X（X Premium各プランのアプリ内課金の価格）"
    url: "https://apps.apple.com/us/app/x/id333903271"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式求人: Backend Engineer - API（バックエンドの大半はRust）"
    url: "https://job-boards.greenhouse.io/xai/jobs/5120536007"
    accessedAt: "2026-10-01"
  - label: "SpaceXAI公式求人: Member of Technical Staff - RL Training Framework（Python・Jax・Rust・C++）"
    url: "https://job-boards.greenhouse.io/xai/jobs/5186992007"
    accessedAt: "2026-10-01"
  - label: "Yahoo Finance: Anthropic to rent all AI capacity at SpaceX's Colossus data center（2026-05-06）"
    url: "https://finance.yahoo.com/news/anthropic-to-rent-all-ai-capacity-at-spacexs-colossus-data-center-180327774.html"
    accessedAt: "2026-10-01"
  - label: "The Verge: xAI is becoming SpaceXAI（2026-05-06）"
    url: "https://www.theverge.com/ai-artificial-intelligence/925469/xai-is-becoming-spacexai"
    accessedAt: "2026-10-01"
  - label: "CNBC: Google to pay SpaceX $920 million a month for compute capacity at xAI data centers（2026-06-05）"
    url: "https://www.cnbc.com/2026/06/05/google-to-pay-spacex-920-million-a-month-for-xai-compute-capacity.html"
    accessedAt: "2026-10-01"
  - label: "CNBC: SpaceX says it can buy Cursor later this year for $60 billion（2026-04-21）"
    url: "https://www.cnbc.com/2026/04/21/spacex-says-it-can-buy-cursor-later-this-year-for-60-billion-or-pay-10-billion-for-our-work-together.html"
    accessedAt: "2026-10-01"
  - label: "Business Insider: XAI makes its rebrand to SpaceXAI complete with a new logo（2026-07-06）"
    url: "https://www.businessinsider.com/xai-rebrand-spacexai-new-logo-x-handle-spacex-2026-7"
    accessedAt: "2026-10-01"
  - label: "Cursor公式ブログ: Cursor is now a part of SpaceX（2026-08-14）"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-10-01"
  - label: "Bloomberg Law: SpaceX Completes $60 Billion Acquisition of AI Startup Cursor（2026-08-14）"
    url: "https://news.bloomberglaw.com/mergers-and-acquisitions/spacex-completes-its-60-billion-cursor-acquisition"
    accessedAt: "2026-10-01"
---

AIの会社は、ふつうモデルを売る。賢いモデルを作り、アプリの月額料金とAPIの従量課金で回収する。xAIも同じ道を歩いてきたが、2026年に公開された上場目論見書を読むと、もう1つの売り物が見えてくる。モデルを育てるために建てたデータセンターの計算資源そのものだ。この記事は、SNSとしての[X](/ja/articles/x)ではなく、Grokを作るAIの会社を扱う。

なお、x.ai本体はブラウザ以外からの取得にCloudflareのチャレンジ（403）を返すため、本記事は公式ドキュメント（docs.x.ai）、SECへの提出書類、公式の求人、App Storeの掲載情報、報道をもとにしている。有料プランの機能は実際には操作しておらず、公開された説明から読み取れる範囲で書いた。

## サービス解説

xAIは、対話型AI「Grok」と、その土台になるGrokモデルを開発する会社だ。いまの製品は、チャットのGrok（grok.com、iOS・Androidアプリ、Xへの組み込み）、画像と動画を作るGrok Imagine、音声のGrok Voice、コーディングエージェントのGrok Build、クラウド上のコンピューターで仕事を進めるGrok Bot、そして開発者向けのAPIに広がっている。

:::fact
SpaceXがSECに提出したForm S-1（2026-05-20）によれば、xAIは2023年に創業し、同年11月にGrok-1を公開した。2025年3月28日にXの親会社X Holdings Corp.を取り込み（S-1は「X Merger」と呼ぶ）、2026年2月2日にはxAIの親会社X.AI Holdings Corp.がSpaceXに取得された（同「xAI Merger」）。どちらも同じ支配下にある会社どうしの取引として会計処理され、SpaceXの財務諸表は過去にさかのぼってxAIとXを含む形に組み替えられている。S-1は現在のxAIを「X.AI Holdings LLC」と定義し、事業を「Space」「Connectivity」「AI」の3部門に分けている。GrokとXはどちらもAI部門に入る。
:::

:::fact
社名の表記も変わった。The Verge（2026-05-06）は、Anthropicとの提携の発表でこの会社が初めて「SpaceXAI」を名乗ったこと、Elon Muskが「xAIは独立した会社としては解消され、SpaceXのAI製品であるSpaceXAIになる」と述べたことを伝えた。Business Insider（2026-07-06）によれば、X上のxAIのアカウント名がSpaceXAIに変わり、新しいロゴも公開された。同記事は、SpaceXが2026年6月に上場し、750億ドルを調達、評価額は約1兆7,700億ドルだったとも伝えている。当サイトが2026-10-01に確認した範囲でも、公式ドキュメントは社名を「SpaceXAI」と書き、Grokの説明文は「SpaceXAIが作ったAIアシスタント」になっている。一方、ドメイン（x.ai）、APIの名称（xAI API）、SDK（xai_sdk）、App Storeの著作権表記（xAI Inc.）にはxAIの名前が残る。
:::

:::pull
Xを取り込んだ会社が、今度はSpaceXに取り込まれた。看板は2回変わったが、売り物の中心にあるGrokと、それを育てる計算資源は変わっていない。
:::

::scorecard

スコアの根拠を先に書く。プロダクト（4.0）は、チャット・画像と動画・音声・コーディング・エージェント・APIまでを1つのモデル群でそろえ、有料会員が約190万人いる点を評価した。UX（3.5）は、製品をまたぐ週単位の利用枠という分かりやすい設計を評価しつつ、購入する場所によって窓口が分かれる点と、当サイトが有料機能を操作していない点を差し引いた。技術（4.5）は、約1ギガワットの計算資源を短期間で立ち上げた実績と、機械が読める形で整えられたドキュメントを評価した。ビジネス（3.0）は、AI部門が売上を上回る営業損失を出している一方、計算資源の貸し出しという新しい収入の柱ができた点を両方見た結果だ。

## UX分析

GrokのUXは、「どの製品をどれだけ使ったか」を利用者に数えさせない方向へ作り直されている。

- **利用枠を1つの週単位の枠にまとめた**。公式FAQによれば、2026年6月から有料プランは、チャット・Imagine・Voice・Buildごとに分かれていた1日単位の上限をやめ、製品をまたいで使える1つの週単位の枠に切り替えている。画像生成だけ上限に達してチャットの枠が余る、という状態をなくす狙いだと説明されている。
- **使い切っても止まらない**。同じFAQによれば、週の枠を使い切ると有料機能は次のリセットまで止まるが、チャットと音声は無料枠の範囲で使い続けられる。追加の利用クレジットを5ドルから買うか、自動チャージを設定するか、上位のプランに上げるかも選べる。クレジットは購入から1年で失効する。
- **入口が3つあり、窓口も3つに分かれる**。Grokはgrok.com、モバイルアプリ、Xのどこからでも使える。そのかわり、解約や返金の窓口は買った場所で変わる。FAQは、Webで買った分はxAI、App Storeで買った分はApple、X Premium経由の分はX（xAIではない）が担当すると案内している。
- **つながる先を増やしている**。公式ドキュメントには、Google Drive、GmailとGoogleカレンダー、Outlook、SharePoint、OneDrive、Microsoft Teams、Salesforceのコネクタと、自前のMCPサーバーをつなぐ方法が並ぶ。
- **Grok Botは、会話ではなく仕事の受け渡しを前提にする**。公式ドキュメントによれば、名前と役割を持つBotが、ブラウザ・ファイルシステム・ターミナルを備えたクラウド上のコンピューターで作業を続け、承認が必要なときだけ利用者に戻ってくる。Cursorの有料の個人プランとTeamsプランに含まれ、SuperGrokの契約をひも付けても使える。

:::fact
App Store（米国）のGrokの掲載情報（2026-10-01確認）は、アプリ内課金として、SuperGrok Lite 10.00ドル、SuperGrok 30.00ドル、SuperGrok Plus 100.00ドル、SuperGrok Heavy 300.00ドルを挙げている（掲載情報は課金の周期を示していない。300.00ドルの「SuperGrok」という項目も別にある）。販売元はX Corp.だ。X経由では、同じくApp Store（米国）のXの掲載情報に、X Premium Basic 月4.00ドル、X Premium 月11.00ドル、X Premium Plus 月50.00ドルが並ぶ。App Storeの価格はWebでの価格と異なる場合があり、grok.comの料金画面はログインが必要なため、当サイトはWebでの価格を確認できていない。
:::

:::guess
利用枠を1つにまとめた設計は、製品が増えるほど効いてくると考えられる。チャット・画像・動画・音声・コーディング・エージェントのそれぞれに別の上限があると、利用者は「何がどれだけ残っているか」を6通り覚えなければならない。1つの枠に計算量で重みを付けて引き落とす方式なら、新しい製品を足しても料金表を増やさずに済む。一方で、動画の生成や長いコーディング作業は消費が大きいとFAQ自身が書いており、「何をすると枠がどれだけ減るか」を事前に見積もりにくいという別の分かりにくさは残るとみられる。
:::

## 技術構成

::techstack

:::fact
公式ドキュメント（2026-10-01確認）によれば、APIの主力はgrok-4.7で、コンテキスト長は50万トークン、料金は100万トークンあたり入力2ドル・キャッシュ済み入力0.50ドル・出力6ドル。プロンプトが20万トークン以上になると、そのリクエストの全トークンが倍の料金（入力4ドル・出力12ドル）になる。grok-4.3とgrok-4.20系はコンテキスト長100万トークンで、入力1.25ドル・出力2.50ドル（プロンプトが20万トークン未満の場合。20万トークン以上では同じく倍になる）。サーバー側のツールは別料金で、Web検索とコード実行は1,000回あたり5ドル、Xの検索は取得した投稿1,000件あたり5ドル・プロフィール1,000件あたり10ドルと、回数ではなく取得件数で課金される。Batch APIの割引（20%）はgrok-4.3とgrok-4.20系だけにあり、優先処理（Priority Processing）は2倍の料金になる。
:::

:::fact
リリースノートによれば、2026年7月にGrok 4.5、8月にGrok 4.6とGrok Bot、9月にGrok 4.7が公開された。Grok 4.7の高速版「Grok 4.7 Fast」は同じモデルを速いインフラで動かすもので、料金は2倍（長いコンテキストでは1.5倍）。使えるのはCursorとGrok Buildだけで、公開のAPIでは提供されていない。Grok 4.7は、APIのほかにOpenRouter・Vercel・Cloudflareのモデルゲートウェイからも使えると書かれている。Security FAQは、APIのリクエストと応答を不正利用の調査のために30日間保存し、明示的な許可なしに学習には使わないとしている。
:::

:::fact
計算基盤について、Form S-1（2026-05-20）は次のように書いている。主力のデータセンターCOLOSSUSはテネシー州メンフィスにあり、COLOSSUS IIはメンフィスとミシシッピ州サウスヘイブンにまたがる。2つを合わせた計算能力は約1.0ギガワット。COLOSSUSの最初のクラスタ（H100が約10万基、約130メガワット）は、既存の工場の建物を転用して122日で稼働した。COLOSSUS IIの最初のクラスタ（GB200が約11万基、約210メガワット）は91日、続くクラスタ（GB300が11万基、220メガワット）は64日で稼働した。次の拡張では、GB300を少なくとも22万基、400メガワット超を追加する見込みだとしている。電源は、敷地内の発電（behind-the-meter）と蓄電池を組み合わせると説明されている。
:::

:::fact
ベンチマークは、公表した主体を明記して読む必要がある。SpaceXAIの発表（Introducing Grok 4.7）は、Grok 4.7がGrok 4.6より大きな新しいベースモデルを使い、完了まで何時間もかかる課題に重みを置いた、より長い強化学習で訓練されたと説明している。同じ発表は、CursorBench 4.0で価格あたりの性能が最前線にあること、自社のベンチマークHackerBench v0.3で安全性が最も高かったことを挙げている。CursorBenchは傘下のCursorの、HackerBenchは自社のベンチマークであり、当サイトは第三者による再現を確認していない。
:::

:::guess
求人の書き方からは、バックエンドをRustに寄せ、学習の基盤にJAXを使い、政府向けにはKubernetesでベアメタルとクラウドをまたぐ構成が読み取れる。ただし求人は「求める経験」を書いたものであり、全社の構成を示す資料ではない。確かなのは、APIの求人が「バックエンドの大半はRust」と明言している点だけだ。APIがOpenAIのSDKからそのまま呼べる形になっているのは、後発として乗り換えの手間を最小にするための選択とみられる。ドキュメントのすべてのページに.mdを付けるとMarkdownで読めること、llms.txtやMCPサーバーを公開していることも、人間の開発者より先にコーディングエージェントに読ませることを意識した設計だと推測される。
:::

## ビジネスモデル

収益は4本ある。Xの広告、XとGrokのサブスクリプション、APIとデータのライセンス、そして2026年に加わった計算資源の貸し出しだ。

:::fact
Form S-1（2026-05-20）によれば、AI部門（GrokとXを含む）の2025年の売上は32億100万ドル、営業損失は63億5,500万ドル、設備投資は127億2,700万ドルだった。2026年1〜3月は、売上8億1,800万ドル、営業損失24億6,900万ドル、設備投資77億2,300万ドル。同じ四半期のSpace部門の設備投資は10億5,200万ドル、Connectivity部門（Starlink）は13億3,200万ドルで、AI部門が全体の大半を占める。2026年3月末の有料会員は約630万人で、内訳はX PremiumとPremium+が約440万人、SuperGrok・SuperGrok Heavy・SuperGrok Liteが約190万人。GrokとXを合わせた月間アクティブユーザーは約5億5,000万人としている。
:::

:::fact
計算資源の貸し出しは、S-1に「第三者との計算サービス契約」として書かれている。2026年5月、SpaceXはAnthropicとクラウドサービス契約を結び、AnthropicはCOLOSSUSとCOLOSSUS IIの計算能力の利用に対して、2029年5月まで月12億5,000万ドルを支払う（2026年5〜6月は立ち上げ期間として減額）。契約はどちらの側からも90日前の通知で解約できる。Yahoo Finance（2026-05-06）は、AnthropicがCOLOSSUS 1の全容量、300メガワット超・NVIDIAのGPU 22万基超を使うと伝えた。CNBC（2026-06-05）は、SpaceXの提出書類をもとに、Googleも約11万基のNVIDIAのGPUを月9億2,000万ドルで2026年10月から2029年6月まで借りる契約を結んだと報じている。S-1は、AnthropicとGoogleをAIの競合としても挙げている。
:::

:::fact
コーディングの分野では買収で製品を足した。CNBC（2026-04-21）によれば、SpaceXは2026年4月、Cursorを600億ドルで買収する権利か、共同作業の対価として100億ドルを支払う権利を得たと発表した。S-1はこの契約を、計算資源の提供と買収オプションの組み合わせとして説明し、コーディングの作業から得られるデータがGrokの学習と推論を強くすると期待していると書いている。Cursorの公式ブログとBloomberg Law（いずれも2026-08-14）によれば、買収は2026年8月14日に完了した。買収後の製品と料金は、当サイトの[Cursor](/ja/articles/cursor)の記事で扱っている。
:::

:::guess
数字を並べると、計算資源の貸し出しの大きさが際立つ。Anthropicが払う月12億5,000万ドルは、AI部門の2026年1〜3月の四半期の売上8億1,800万ドルを1か月で上回る。Googleの契約と単純に合計すると月21億7,000万ドルで、契約どおりに続けば年260億ドル前後になる計算だ。モデルの会社として建てたデータセンターが、データセンターそのものとしても稼ぎ始めたとみられる。ただしこの収入は、どちらの側からも90日前の通知で解約できる契約に支えられており、借り手は自前の計算資源が整うまでの「つなぎ」として使っている可能性がある。Googleの広報がCNBCに「つなぎの容量を確保するため」と説明しているのは、その見方と整合する。

もう1つの読み方は、SpaceXがS-1で「垂直統合」と呼ぶ構図だ。計算資源、モデル、そして利用者に届く面（X、Grok、Cursor）を1社で持てば、コーディングの作業から得たデータでモデルを鍛え、そのモデルを自社の製品に真っ先に載せられる。Grok 4.7の高速版がCursorとGrok Buildだけで使えるのは、その統合を料金表の上で見せた例だと考えられる。一方、AI部門は売上の約2倍の営業損失を出しており、設備投資は売上の約4倍にのぼる。この賭けが引き合うかどうかは、Grok自体の有料利用がどこまで伸びるかにかかっていると推測される。なお、本記事は事業と技術の構造の分析に絞っており、Grokの出力やデータセンターをめぐる個別の係争や規制上の論点は扱っていない。
:::

[Claude](/ja/articles/claude)を作るAnthropicは計算資源を借りる側に回り、[Gemini](/ja/articles/gemini)を作るGoogleも、つなぎの容量として借りる契約を結んだと報じられた。[ChatGPT](/ja/articles/chatgpt)のOpenAIも含め、AIアシスタントの競争は、モデルの出来と同じくらい、電力とGPUをどれだけ早く確保できるかの競争になっている。xAIの解剖から見えるのは、その競争で「貸す側」に立った会社の姿だ。看板がxAIからSpaceXAIに変わっても、問われていることは変わらない。建てた計算資源を、自分のモデルで使い切れる日が来るかどうかである。
