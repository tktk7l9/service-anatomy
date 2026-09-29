---
service: "Framer"
title: "売上500万ドルで伸びが止まったプロトタイピングツールが、サイトを「公開する」道具に作り直した — Framerは自社サイトも自分のホスティングで配り、AIエージェントとテンプレート作者で次の利用者を連れてくる"
description: "デザイナー向けのプロトタイピングツールとして育ち、売上500万ドルで1年伸びが止まったFramerは、2022年5月にWebサイトを作って公開するツールとして再出発した。2025年8月には評価額20億ドルでシリーズDを調達している。ReactのサーバーレンダリングとTraffic-aware Pre-Rendering、esbuildからRolldownへの移行、Framer Motionを独立させたアニメーションライブラリMotion、独自の木構造言語で差分だけを書くAIデザインエージェント、200以上の言語への翻訳モデル選び、テンプレート作者に売上の100%を渡すマーケットプレイスと最初の1年分の50%を払うアフィリエイトまでを、公式ブログ・料金ページ・ヘルプ記事・実サイトの観測から解剖する。"
lead: "Framerの共同創業者Jorn van Dijkは、2026年のSXSWでこう振り返っている。プロトタイピングツールの売上が500万ドルに届いたあと、売上は1年ほど横ばいになり、社内の士気は下がった——。使われてはいるが、お金を払う人が足りない。彼らは作っていた道具を捨てずに向きを変え、デザイナーがそのまま本番のWebサイトを公開できるツールにした。再出発から約3年で売上は3,000万ドルに達したと語る。Framerがどう作り直され、どう稼いでいるのかを解剖する。"
category: saas
tags: [website-builder, no-code, design-tool, react, ai, aws]
publishedAt: "2026-09-29"
updatedAt: "2026-09-29"
lastVerified: "2026-09-29"
serviceUrl: "https://www.framer.com/"
# Affiliate link placeholder: the owner must join the Framer Creator Program
# (https://www.framer.com/creators, affiliate links run on Dub) before enabling this block.
# Program terms to respect: sign-up links only credit new users, paid advertising with
# affiliate links is not permitted, and Enterprise subscriptions earn no commission.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<framer-affiliate-link>"
#   program: "Framer Creator Program"
vendor: "Framer B.V."
origin: "NL"
heroTheme: "framer"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "公開サイトの実行環境"
    name: "React (server-side rendering + hydration)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-10-22）に、Framerのサイトは『ReactベースのJavaScriptアプリケーション』で、最適化のためにサーバーサイドレンダリングを使うと明記。2024-03-26の記事『Why Framer uses React to build sites』もReactを採用した理由を説明している。当サイトの観測（2026-09-29）で、www.framer.com のHTMLは framerusercontent.com/sites/ 配下の react.*.mjs を読み込んでいた"
    evidenceUrl: "https://www.framer.com/blog/dynamic-optimization/"
  - layer: "ページの事前レンダリング"
    name: "Traffic-aware Pre-Rendering (render on first visit, cache until next publish)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-10-22）によれば、従来は公開時に全ページを静的生成していたが、各ページを最初の訪問時に最適化し、次の公開まではキャッシュに置く方式に変えた。大きなサイトで最大1分かかっていた最適化の待ち時間は、ページ数に関係なくおおむね1秒以下になったという。2025年10月に全サイトへ順次展開した"
    evidenceUrl: "https://www.framer.com/blog/dynamic-optimization/"
  - layer: "サイトのバンドラー"
    name: "Rolldown + oxc-minify (migrated from esbuild)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2025-11-20）に、esbuildからRolldownへ移り、2025年9月に展開を始めたと明記。JavaScriptの量は中央値で36%減り、全サイトのp90のLCPは11%改善、2MBを超える大きなサイトではLCPが41%改善した。当サイトの観測（2026-09-29）でも、公開サイトのHTMLは rolldown-runtime.*.mjs を読み込んでいた"
    evidenceUrl: "https://www.framer.com/blog/framer-rolldown/"
  - layer: "アニメーション"
    name: "Motion (formerly Framer Motion)"
    confidence: confirmed
    evidence: "Motion公式ブログ（2024-11-12）によれば、Framer MotionはFramerがPopmotionを取り込んで6年間育てたReactのアニメーションライブラリで、npmで週450万回超ダウンロードされていた。これを独立したオープンソースのMotionとして切り出し、Framerは最初のスポンサーになった。Framerのアニメーションは引き続きMotionで動くと説明している。当サイトの観測（2026-09-29）で、公開サイトのHTMLは motion.*.mjs を読み込んでいた"
    evidenceUrl: "https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion"
  - layer: "AIデザインエージェント"
    name: "Frontier LLMs with a compact tree language and patch commands"
    confidence: confirmed
    evidence: "共同創業者Koenの公式エンジニアリングブログ（2026-06-16）に、エージェントはキャンバスの上で直接作り・直し・デバッグし、プロジェクトの木構造を省略した独自の言語で読み、差分を『パッチ命令』で書くと明記。レイアウトの矩形や、アクセシビリティ・コントラスト・文字組みのリンターの結果を返し、必要ならサーバー側のブラウザで画像にして確認させる。2026-07-21の記事では、キャッシュの取りこぼしをなくすなどして1セッションの平均コストを40〜48%下げたと報告している"
    evidenceUrl: "https://www.framer.com/blog/building-framer-agents/"
  - layer: "サイトの翻訳"
    name: "LLM translation (GPT 5.2 selected via multi-judge evaluation GEMBA-DMA)"
    confidence: confirmed
    evidence: "公式エンジニアリングブログ（2026-03-31）によれば、Framerは利用者のサイトを200以上の言語に翻訳し、HTMLの構造・URL・用語集・独自の指示を保ったまま訳す必要がある。参照訳を使わず複数のLLMを審査役にする評価方法GEMBA-DMAを作り、品質スコア95のGPT 5.2を選んだ"
    evidenceUrl: "https://www.framer.com/blog/how-we-pick-translation-models-for-framer/"
  - layer: "ホスティング"
    name: "Framer's own edge servers on AWS (server: Framer/<version>)"
    confidence: likely
    evidence: "当サイトの観測（2026-09-29）で、www.framer.com と利用者のサイト（*.framer.website）はどちらも server: Framer/26fa766 を返し、server-timing ヘッダーに region=ap-northeast-1・キャッシュの状態・ssg-status・A/Bテストの割り当てを載せていた。どちらのホスト名もAS16509（Amazon）のアドレスに解決された。Framerの自社サイトも、利用者と同じホスティングで配信されているとみられる"
  - layer: "画像・スクリプトの配信"
    name: "Amazon CloudFront (framerusercontent.com)"
    confidence: likely
    evidence: "当サイトの観測（2026-09-29）で、画像とJavaScriptを配る framerusercontent.com は server: CloudFront と via: ...cloudfront.net を返し、東京のエッジ（NRT）から応答した"
sources:
  - label: "Foundation Capital: What it takes to build a $2B company — lessons from Framer at SXSW"
    url: "https://foundationcapital.com/ideas/what-it-takes-to-build-a-2b-company-lessons-from-framer-at-sxsw"
    accessedAt: "2026-09-29"
  - label: "The Next Web: SofaのKoen BokとJorn van DijkがFacebookを離れる（2013-07-26）"
    url: "https://thenextweb.com/news/founder-of-dutch-software-firm-sofa-koen-bok-and-art-director-jorn-van-dijk-leave-facebook-after-2-years"
    accessedAt: "2026-09-29"
  - label: "Framer公式ブログ: シリーズDの調達（2025-08-28）"
    url: "https://www.framer.com/blog/series-d/"
    accessedAt: "2026-09-29"
  - label: "Framer公式: 利用規約（運営会社Framer B.V.）"
    url: "https://www.framer.com/legal/terms-of-service/"
    accessedAt: "2026-09-29"
  - label: "Framer公式: 料金ページ"
    url: "https://www.framer.com/pricing"
    accessedAt: "2026-09-29"
  - label: "Framer公式ブログ: Traffic-aware Pre-Rendering（2025-10-22）"
    url: "https://www.framer.com/blog/dynamic-optimization/"
    accessedAt: "2026-09-29"
  - label: "Framer公式ブログ: Rolldownへの移行（2025-11-20）"
    url: "https://www.framer.com/blog/framer-rolldown/"
    accessedAt: "2026-09-29"
  - label: "Framer公式ブログ: Why Framer uses React to build sites（2024-03-26）"
    url: "https://www.framer.com/blog/why-framer-uses-react-to-build-sites/"
    accessedAt: "2026-09-29"
  - label: "Framer公式ブログ: Building Agents for Framer（2026-06-16）"
    url: "https://www.framer.com/blog/building-framer-agents/"
    accessedAt: "2026-09-29"
  - label: "Framer公式ブログ: Making the Framer Agent cheaper & faster（2026-07-21）"
    url: "https://www.framer.com/blog/making-the-framer-agent-cheaper-faster/"
    accessedAt: "2026-09-29"
  - label: "Framer公式ブログ: How we pick translation models for Framer（2026-03-31）"
    url: "https://www.framer.com/blog/how-we-pick-translation-models-for-framer/"
    accessedAt: "2026-09-29"
  - label: "Motion公式ブログ: Framer Motionの独立（2024-11-12）"
    url: "https://motion.dev/blog/framer-motion-is-now-independent-introducing-motion"
    accessedAt: "2026-09-29"
  - label: "Framer公式: Creator Program"
    url: "https://www.framer.com/creators"
    accessedAt: "2026-09-29"
  - label: "Framer公式ヘルプ: How the Creator Program works"
    url: "https://www.framer.com/help/articles/how-the-creator-program-works/"
    accessedAt: "2026-09-29"
  - label: "Framer公式ヘルプ: How affiliate links work"
    url: "https://www.framer.com/help/articles/how-affiliate-links-work/"
    accessedAt: "2026-09-29"
  - label: "Framer公式: Agency Partner Program"
    url: "https://www.framer.com/agencies/"
    accessedAt: "2026-09-29"
  - label: "Webflow公式: Webflow Affiliate Program（比較用）"
    url: "https://webflow.com/solutions/affiliates"
    accessedAt: "2026-09-29"
---

デザインツールの多くは、作ったものを別の誰かに渡すところで役目を終える。画面の案はエンジニアが組み直し、動く試作品は本番のコードにはならない。Framerは長くその「渡す前」の道具だったが、伸びが止まったところで、渡さずにそのまま公開する道具へ作り直した。キャンバスで並べた要素が、そのままReactで動く本番のサイトになる。Framerの特徴は、その変換をデザイナーから見えない場所で引き受け、配信とAIまでを1つの製品に抱え込んでいることだ。

## サービス解説

Framerは、キャンバスの上でレイアウトを組み、そのまま自社のホスティングでWebサイトとして公開できるツールだ。CMS・分析・A/Bテスト・多言語化・SEOの設定を内蔵し、最近はチャットで指示するとキャンバスの上でページを作り直すAIデザインエージェントを看板に据えている。公式サイトの見出しも「AI design agent」だ。

:::fact
The Next Webによれば、共同創業者のKoen BokとJorn van Dijkは、自分たちのソフトウェア会社SofaをFacebookに買われたあと、同社のプロダクトデザイナーとして働き、2013年7月に揃って退社した。Foundation CapitalがまとめたSXSWでのJorn van Dijkとの対談（2026-04-01公開）によれば、Sofaの買収は2011年で、Foundation Capitalは2014年にFramerのシードに出資した。Framerはデザイナー向けのプロトタイピングツールとして広がったが、売上が500万ドルに届いたあと1年ほど横ばいが続いた。1年ほど議論し、9か月かけて作り直した新しいFramerを2022年5月に公開し、最初の8か月で売上0から100万ドル、翌年に1,000万ドル、その翌年に3,000万ドルへ伸び、「今年は1億を超える」と語っている。
:::

:::fact
Framer公式ブログ（2025-08-28）によれば、Framerは評価額20億ドルでシリーズD 1億ドルを調達した。主導したのは既存株主のMeritechとAtomicoで、WiLとHVも参加した。同じ記事は、数十万のサイトがFramerで動き、毎月50万人超が使っていること、直近1年は損益がほぼ均衡していること、Y Combinatorの直近のバッチの半分近くがFramerでサイトを公開したことを挙げ、利用企業としてPerplexity・Cal.com・Miro・Scale AI・Mixpanel・Zapierなどを並べている。
:::

:::pull
作ったものを誰かに渡す道具から、そのまま世に出す道具へ。Framerは伸びが止まったプロトタイピングツールを捨てずに、向きだけを変えた。
:::

::scorecard

## UX分析

FramerのUXは、「デザインツールの操作感のまま、公開までの工程を消す」ことに集中している。

- **無料のまま公開できる**。料金ページによれば、無料プランでもFramerのドメインでサイトを公開でき、AIのクレジットが500付く。帯域は1GBまでで、独自ドメインは有料プランから。まずはURLを人に見せるところまで、支払いなしで進められる。
- **サイトの規模で料金を分ける**。年払いの表示で、Basicは月10ドルで30ページ・帯域50GB、Proは月30ドルで150ページ・帯域100GB・ステージング環境とブランチのプレビュー付き。Proは毎月のAIクレジットを3,000から50,000まで段階で選べる。編集者はデザイナーが1人月20ドル、文章だけを直す編集者が月10ドル、閲覧は無料だ。多言語化は1言語あたり月20ドル、A/BテストのConvertは50万イベントあたり月50ドルの追加料金になる。
- **公開の待ち時間をなくす**。公式エンジニアリングブログによれば、以前は公開のたびに全ページを事前に生成し、大きなサイトでは最適化に最大1分かかった。2025年10月からは、各ページを最初に訪問されたときに最適化してキャッシュする方式に変え、この待ち時間は1秒以下になった。
- **AIに任せても、キャンバスで直せる**。AIデザインエージェントは、コードではなくキャンバスの要素を直接作り変える。公式ブログによれば、エージェントはレイアウトの位置関係やアクセシビリティ・コントラスト・文字組みのチェック結果を受け取りながら作業し、変更はすべてキャンバスで編集できる状態のまま残る。
- **テンプレートから始めさせる**。公式のマーケットプレイスでは、コミュニティの作者がテンプレート・プラグイン・コンポーネント・ベクター素材を配り、有料テンプレートの売上は作者が100%受け取る。

:::fact
公式エンジニアリングブログ（2026-06-16）によれば、AIエージェントが1ページを丸ごと作るのにかかる時間はおよそ40〜100秒で、GPT-5.5を使うとトークン代はページ全体の生成で約3ドル、中程度の修正で約0.5ドルかかる。サイト全体を作り上げた利用者の中には、300ドル分を使った例もあった。2026-07-21の記事は、キャッシュの取りこぼしを10〜20%からゼロにし、不要な道具の呼び出しを減らすなどして、1セッションの平均コストを40〜48%下げたと報告している。
:::

## 技術構成

::techstack

:::fact
Framerで公開されたサイトは、ReactのJavaScriptアプリケーションだ。公式エンジニアリングブログ（2025-10-22）によれば、サーバーでレンダリングしたHTMLを返し、その後ブラウザでReactが動き出す。以前は公開時に全ページを静的に生成していたが、今は最初の訪問でページを最適化し、次の公開までキャッシュする「Traffic-aware Pre-Rendering」に切り替えた。アクセスの多いページは分析データをもとに先回りして生成し、JavaScriptを実行しないクローラーには、まだ最適化されていないページでも直近の最適化済みの版を返す。2025年11月の記事によれば、バンドラーはesbuildからRolldownに移り、JavaScriptの量は中央値で36%減り、分割されるファイル数はp75で67個から22個になった。当サイトの観測（2026-09-29）でも、公開サイトのHTMLは framerusercontent.com から react・motion・rolldown-runtime のモジュールを読み込んでいた。
:::

:::fact
当サイトの観測（2026-09-29）で、www.framer.com と利用者のサイト（*.framer.website）は、どちらも同じ server: Framer/26fa766 を返した。server-timing ヘッダーには、応答した地域（ap-northeast-1）・キャッシュの状態・ssg-status・ページのID、そしてwww.framer.comではA/Bテストの割り当てまでが載っていた。どちらのホスト名もAS16509（Amazon）のアドレスに解決され、画像とスクリプトを配る framerusercontent.com はAmazon CloudFrontの東京のエッジから応答した。
:::

:::fact
Motion公式ブログ（2024-11-12）によれば、Framer MotionはFramerがアニメーションライブラリPopmotionを取り込み、作者のMatt Perryが社内で6年間育てたReactのライブラリで、npmで週450万回超ダウンロードされていた。Framerはこれを独立したオープンソースプロジェクト「Motion」として切り出し、最初のスポンサーになった。Framerのサイトのアニメーションは、今もMotionで動いている。
:::

:::guess
Framerの自社サイトが、利用者と同じサーバー・同じバージョンの配信基盤から届いているのは、ドッグフーディング（自社製品を自分で使うこと）を徹底しているからとみられる。server-timingにA/Bテストの割り当てやキャッシュの状態をそのまま載せているのも、自社のマーケティングチームが、利用者と同じ分析・A/Bテスト機能で日々サイトを回している表れと推測される。自社のサイトが遅ければ真っ先に困るのは自社という構造が、Rolldownへの移行やTraffic-aware Pre-Renderingのような配信側の改善を後押ししていると考えられる。
:::

:::guess
Framer Motionを手放して独立させた判断は、競合のWebflowがアニメーションライブラリGSAPを事業ごと買い、無料にした動きとは逆向きにみえる。ただ、どちらも「サイトのアニメーションを支えるライブラリを、自社の外の開発者にも広く使わせ続ける」点では同じだ。Framerは所有をやめてスポンサーとして関わる形を選び、ライブラリの開発をMotion側の独立した資金で回しながら、自社の製品は引き続きその成果を使える位置に立ったと推測される。
:::

:::guess
AIエージェントに独自の短い木構造言語とパッチ命令を使わせているのは、生成AIのコストがそのまま原価になるからとみられる。1ページ3ドル、サイト全体で300ドルという規模では、トークンの無駄はそのまま利益を削る。平均コストを4割以上下げたという報告は、AIの機能が「無料のおまけ」ではなく、クレジットとして売る商品になっていることの裏返しと推測される。
:::

## ビジネスモデル

Framerの収益は、サイトごとの有料プラン、編集者の席、多言語化やA/Bテストなどの追加機能、そして大企業向けのEnterpriseでできている。無料プランで公開までを体験させ、独自ドメイン・ページ数・帯域・編集者の数が増えるところで課金する。

:::fact
料金ページ（年払いの表示）によれば、有料プランはBasicが月10ドル（AIクレジット月1,000）、Proが月30ドル（同3,000から選択）、Enterpriseは個別見積もりで、Enterpriseには大量購入の割引が付いたAIクレジット、個別の上限、無制限の編集者、SSO・SCIM・稼働率の保証が含まれる。追加機能として、多言語化が1言語あたり月20ドル（Basic・Proは20言語まで）、A/BテストのConvertが50万イベントあたり月50ドル、1つのドメインの下に複数のサイトを並べるAdvanced Hostingが200ドルと並ぶ。
:::

:::fact
Framerの公式Creator Programのページによれば、アフィリエイトの報酬は、紹介した人が有料プランに切り替えたときの「最初の12か月分のサブスクリプションの50%」。公式ヘルプによれば、アフィリエイトリンクの計測と支払いはDubが担い、支払いはStripe経由で行われる。紹介リンクで計上されるのは新規の利用者だけで、テンプレートの購入は登録の紹介より優先され、アフィリエイトリンクを使った有料広告は禁止されている。Enterpriseの契約は報酬の対象外だ。参加するには、マーケットプレイスに作品を公開するか、認定されたFramer Expertになるか、作品・発信力・宣伝の計画の審査を受ける。同じページは、2025年に作者へ650万ドルを支払ったとしている。制作会社向けには別に、自社の全員がFramerを無料で使え、紹介に最大50%を払うAgency Partner Programがある。
:::

:::fact
比較として、Webflowのアフィリエイトは、紹介した新規顧客の最初のサブスクリプションについて最長12か月分の50%を払い、クッキーの有効期間は90日だ。上位の区分では、顧客が1年を超えて更新するとさらに最長12か月分の10%か15%が加わる。一方で、フリーランスや制作会社が自分の顧客を紹介しても報酬は出ず、そちらは別の認定パートナープログラムへ案内される（Webflow公式）。
:::

:::guess
Framerのアフィリエイトは、率も期間もWebflowの基本の条件とほぼ同じだが、入口の設計が違う。Framerでは、テンプレートの作者が作品に付けた「リミックス」のリンクから始めた人が有料に切り替えると、作者に報酬が付く。テンプレートを配ること自体が紹介になり、マーケットプレイスの売上100%と紹介料が同じ作者に積み上がる。作者を増やすほど、Framerで作り始める入口が増える仕組みとみられる。有料広告を禁じているのは、「Framer」という名前での検索広告を紹介者どうし、あるいは自社と取り合わないためと推測される。
:::

:::guess
一方で、AIエージェントを看板にしたことで、Framerの原価の構造は変わりつつあるとみられる。ホスティングの原価は帯域とページ数で読めるが、AIの原価は利用者がどれだけ指示を重ねるかで大きく振れる。料金ページで無料プランにもクレジットを配り、Proではクレジットの量で段階を分け、Enterpriseに大量購入の割引を付けているのは、AIの利用量を定額に含めず、クレジットとして別に数える形に寄せている表れと推測される。
:::

Framerが売っているのは、デザインツールそのものより、「デザイナーが作ったものが、そのまま速い本番のサイトとして出ていく」という短い道のりだ。ReactとRolldownとMotionでその道のりの裏側を引き受け、自社のサイトも同じ道で配り、テンプレートの作者とAIエージェントに次の利用者の入口を作らせる。伸びが止まったプロトタイピングツールは、向きを変えることで、作ったものを世に出す道具になった。AIがその「最初の8割」を担う時代に、残りの2割をキャンバスで直せることが、Framerの次の差になる。
