---
service: "Hostinger"
title: "月299円は48カ月分を先払い、更新は4.3倍、紹介料は4割 — 4年連続50%成長のHostingerを支える「先に現金を集める」設計"
description: "リトアニア発のレンタルサーバー会社Hostingerは、2025年に売上2億7,540万ユーロ（前年比51%増）、顧客460万件へ伸びた。日本向けの料金は月299円からだが、それは48カ月分をまとめて払ったときの単価で、更新時は月1,299円になる。売れた額の最大40%（AI Builderは最大60%）をアフィリエイターに渡しながら成長できる理由を、公式の料金ページ、アフィリエイト規約、決算ブログ、公式APIドキュメント、GitHubの公開リポジトリ、当サイトの実観測から解剖する。AIビルダーの自前バックエンド、MCPで外部のAIに開いたAPI、サポートの91%を捌くAIエージェントまで。"
lead: "「月299円」と大きく書かれた料金の下に、小さく「48ヶ月の通常価格71,952円のところ、14,352円でご提供中。更新時の価格は1,299円/月になります」とある。Hostingerの料金ページは、この一文にビジネスの骨組みが詰まっている。4年分を先に集め、4年後には4倍を超える値段で更新してもらう。そのうえで、最初の売上の最大40%をアフィリエイターに渡す。2004年にリトアニアのカウナスで始まった会社が、4年連続で売上を50%以上伸ばし、AIエージェントにサポートの9割を任せるまでになった仕組みを解剖する。"
category: dev-tool
tags: [hosting, website-builder, ai, mcp, small-business, vibe-coding]
publishedAt: "2026-09-30"
updatedAt: "2026-09-30"
lastVerified: "2026-09-30"
serviceUrl: "https://www.hostinger.com/"
# Affiliate link placeholder: Hostinger runs its own public affiliate program
# (https://www.hostinger.com/affiliates, tracked on affiliates.hostinger.com;
# up to 40% commission, 30-day cookie, US$100 PayPal minimum). The owner must sign up,
# get approved, and paste the tracking link here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<hostinger-affiliate-tracking-link>"
#   program: "Hostinger Affiliate Program"
vendor: "Hostinger International Ltd."
origin: "LT"
heroTheme: "hostinger"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.5 }
techStack:
  - layer: "共用サーバー（Webサーバー・ストレージ）"
    name: "LiteSpeed Web Server + NVMe SSD + Object Cache"
    confidence: confirmed
    evidence: "公式の料金ページ（2026-09-30時点）に、NVMeストレージとLiteSpeedサーバーでページの読み込みを高速化すると明記。Unlimitedは50GB、Cloud Startupは100GBのNVMeストレージで、WordPress向けにLiteSpeedとオブジェクトキャッシュを使うとも書かれている"
    evidenceUrl: "https://www.hostinger.com/jp/web-hosting"
  - layer: "公開API・AIエージェント連携"
    name: "REST API (Bearer token, 90 req/min) + @hostinger/mcp"
    confidence: confirmed
    evidence: "公式APIドキュメントに、APIはホスティング・ドメイン・DNS・メール・VPS・WordPress・EC・請求を対象とし、hPanelで発行したトークンをBearerヘッダーで送り、上限は毎分90リクエストと明記。同じページは、npmパッケージ@hostinger/mcpがAPIを372本のMCPツールとして公開すること、PHP・Python・TypeScriptの公式SDK、Terraformプロバイダ、Ansibleコレクション、n8nノード、WHMCSモジュール、Postmanコレクションがあることも書いている"
    evidenceUrl: "https://docs.hostinger.com/api-reference/overview"
  - layer: "AIビルダーの生成モデル"
    name: "Google Gemini 3 + Anthropic Claude Sonnet 4.5 (mixed per task)"
    confidence: confirmed
    evidence: "公式ブログの2025年製品アップデート一覧の11月の項に、Googleの新しい大規模言語モデルGemini 3がすでにHostinger AI Builderを動かしていると明記。同じ記事の2025年の総括は、AI BuilderがGemini 3とClaude Sonnet 4.5を含む最新モデルの組み合わせで動き、作業ごとに適したモデルを当てると書く"
    evidenceUrl: "https://www.hostinger.com/blog/product-updates-2025/"
  - layer: "AIビルダーのバックエンド"
    name: "Built-in database / auth / file storage / email (Hostinger-native)"
    confidence: confirmed
    evidence: "公式ブログの2026年製品アップデート一覧の2月の項に、AI Builderにデータベース・認証・ファイルストレージ・メール送信が組み込まれたと明記。2026年8月18日の公式ブログは、データベースのプロビジョニング、パスワード・OTP・ソーシャルログインの認証、ユーザーアカウント管理、ファイルストレージをHostinger自前の基盤で提供し、サードパーティへの依存をなくしたと書く。データベースのエンジンは公開情報からは分からない"
    evidenceUrl: "https://www.hostinger.com/blog/ai-builder-launch/"
  - layer: "CI基盤（オープンソース）"
    name: "fireactions (Firecracker microVM GitHub runners, Go)"
    confidence: confirmed
    evidence: "HostingerのGitHub組織が公開するfireactionsは、自前の物理サーバー（Bring Your Own Metal）でGitHub Actionsのセルフホストランナーを、使い捨てのFirecracker製仮想マシンとして動かすツール。Apache-2.0ライセンスでGo製。社内でどこまで使っているかはREADMEに明記されていない"
    evidenceUrl: "https://github.com/hostinger/fireactions"
  - layer: "VPS"
    name: "AMD EPYC + NVMe SSD + Docker"
    confidence: confirmed
    evidence: "公式の料金ページ（2026-09-30時点）のナビゲーションに、VPSホスティングはAMD EPYC CPU、NVMe SSD、Docker、root権限と明記"
    evidenceUrl: "https://www.hostinger.com/jp/web-hosting"
  - layer: "エッジ・CDN（自社サイト）"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-30）で、www.hostinger.com と www.hostinger.com/jp の応答に server: cloudflare・cf-cache-status: HIT・cf-ray（NRT）が付き、解決先IPアドレスのwhois上のネットワーク名は CLOUDFLARENET だった。管理画面 hpanel.hostinger.com は cf-mitigated: challenge を返し、Cloudflareのマネージドチャレンジで守られている"
  - layer: "サービスサイトのフロントエンド"
    name: "Vue.js"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-30）で、www.hostinger.com のHTMLにVueのscoped CSSが付ける data-v-xxxxxxxx 属性が数千個含まれていた"
  - layer: "ブログ"
    name: "WordPress + WP Rocket (behind a Google Cloud load balancer)"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-30）で、www.hostinger.com/blog/ のHTMLに generator: WP Rocket 3.19.2.1 のmetaと wp-content へのパスが200件以上含まれ、応答ヘッダーに via: 1.1 google が付いていた"
  - layer: "プロダクト分析・実験"
    name: "Amplitude + in-house experiment assignment cookie"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-30）で、www.hostinger.com が amplitude_session_id と、7本の実験IDと割り当て値を持つ hwebsites-exp-assignments というCookieを返した"
sources:
  - label: "Hostinger公式: About（会社概要・沿革・データセンター）"
    url: "https://www.hostinger.com/about"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式ブログ: Hostinger posts fourth consecutive year of 50%+ growth（2026-02-23）"
    url: "https://www.hostinger.com/blog/financial-results-2025/"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式: レンタルサーバー 料金プラン（日本）"
    url: "https://www.hostinger.com/jp/web-hosting"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式: Web hosting plans（米ドル）"
    url: "https://www.hostinger.com/web-hosting"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式: AIビルダー 料金プラン（日本）"
    url: "https://www.hostinger.com/jp/ai-builder"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式: アフィリエイトプログラム（日本）"
    url: "https://www.hostinger.com/jp/affiliates"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式: Affiliate Program FAQs"
    url: "https://www.hostinger.com/affiliates/faqs"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式: Affiliate Program Agreement（Last revised 2026-08-19）"
    url: "https://www.hostinger.com/legal/affiliate-program-agreement"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式: Referral Program"
    url: "https://www.hostinger.com/referral-program"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式ブログ: What's new at Hostinger: 2025 product updates"
    url: "https://www.hostinger.com/blog/product-updates-2025/"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式ブログ: What's new at Hostinger: 2026 product updates（2026-07-09）"
    url: "https://www.hostinger.com/blog/product-updates-2026/"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式ブログ: AI Builder launch（2026-08-18）"
    url: "https://www.hostinger.com/blog/ai-builder-launch/"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式ブログ: Hostinger Agent launch（2026-09-02）"
    url: "https://www.hostinger.com/blog/agent-launch/"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式ブログ: Introducing subscriptions in Hostinger AI Builder（2026-06-15）"
    url: "https://www.hostinger.com/blog/hostinger-horizons-subscriptions/"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式ブログ: Security incident – what you need to know（2019-08-25・2019-11-25更新）"
    url: "https://www.hostinger.com/blog/security-incident-what-you-need-to-know/"
    accessedAt: "2026-09-30"
  - label: "Hostinger公式: API reference – Overview"
    url: "https://docs.hostinger.com/api-reference/overview"
    accessedAt: "2026-09-30"
  - label: "GitHub: hostinger/api-mcp-server"
    url: "https://github.com/hostinger/api-mcp-server"
    accessedAt: "2026-09-30"
  - label: "GitHub: hostinger/fireactions"
    url: "https://github.com/hostinger/fireactions"
    accessedAt: "2026-09-30"
---

Hostingerは、日本ではまだ知名度の低いレンタルサーバー会社だ。だが世界では、2025年に460万件の顧客と2億7,540万ユーロの売上を持ち、4年連続で50%以上伸びている。売っているのは、月数百円のレンタルサーバーと、その上に載せたAIのサイト作成ツールとエージェントだ。安売りに見える料金の裏に、現金を先に集め、紹介者に厚く払い、更新で回収する設計がある。

## サービス解説

Hostingerは、リトアニアのカウナスで2004年11月に「Hosting Media」として始まったホスティング会社だ。共用サーバー、VPS、ドメイン、メール、WordPressのマネージドホスティングに加え、会話でWebサイトやWebアプリを作るAI Builder、サポートと業務を担うHostinger Agentを一つのアカウントでまとめて売る。本社はビリニュス、上場はしていない。

:::fact
公式のAboutページ（2026-09-30時点）によれば、Hostingerは2004年11月にカウナスで創業し、2007年に無料ホスティングの000webhost.comを始めた。2023年にAIチャットボットを立ち上げ、2024年に顧客数が300万件を超え、2025年には400万件を超えた。150カ国以上にサービスを提供し、Webサイトとサポートは30以上の言語に対応する。データセンターは欧州（フランス・ドイツ・リトアニア・オランダ・英国）、北米（フェニックス・ボストン・アッシュビル）、アジア（インド・インドネシア・マレーシア）、南米（ブラジル）にあり、日本はCDNの拠点として挙げられている。同じページは、Hostingerは非公開会社で、プライベートエクイティ会社が約30%の少数株を持ち、残りは創業者とチームが持つと書く。従業員は1,000人以上。
:::

:::fact
公式の日本向け料金ページ（2026-09-30時点・税抜）によれば、レンタルサーバーは3プラン。Premiumは月299円で、48カ月の通常価格71,952円のところ14,352円、更新時は月1,299円。Unlimitedは月469円で、48カ月22,512円（通常100,752円）、更新時は月1,899円。Cloud Startupは月1,249円で、48カ月59,952円（通常210,192円）、更新時は月4,069円。Premiumは3サイト・20GB SSD、Unlimitedはサイト数無制限・50GB NVMe、Cloud Startupは100GB NVMeで、いずれもドメインが1年間無料、30日間の返金保証が付く。米ドルのページでは同じ3プランが$2.99・$3.99・$7.99で、更新時は$10.99・$16.99・$25.99だ。
:::

:::pull
月299円は、48カ月分の14,352円をまとめて払ったときの単価だ。更新時は月1,299円で、4.3倍になる。米ドルのPremiumも$2.99が$10.99へ、3.7倍に上がる。
:::

::scorecard

## UX分析

Hostingerの体験は、「安く始めて、AIに任せて、あとは全部おまかせ」に寄せて作られている。ただし、その「安く」がどこまで続くかは、細かい字を読まないと分からない。

- **大きな数字と小さな注記**。料金ページは「299円/月」を大きく、48カ月の総額と更新価格を小さく書く。月払いや1年契約の単価は同じ画面では見えにくく、比較したい人は期間の切り替えを探すことになる。返金保証は30日間なので、4年分を払ったあとの気変わりは1カ月しか救われない。
- **AIビルダーの「クレジット」は使い切り**。日本向けのAI Builder料金ページによれば、Premiumには5、UnlimitedとCloud Startupには15のAIクレジットが「1回限りのギフト」として付く。Cloud StartupにはHostinger Agent向けの20クレジットも付く。会話でアプリを作り続けるには、この先のクレジットの買い足しが前提になる。
- **サポートの入口はAI**。2026年9月2日の公式ブログによれば、Hostinger Agent（前身のKodee）は月およそ150万件のサポート会話の91%を人手なしで解決し、およそ10件に1件が人間の専門家に渡る。専門家が付いた場合の解決率は6月以降に41%から72%へ上がり、解決までの中央値は3分だという。人と話したい人にとっては遠くなったが、待ち時間は短くなった。
- **外のAIからも触れる**。2026年8月の公式ブログは、Hostinger Connectorは全プランに無料で含まれ、Claude CodeやCursorなど外部のAIアシスタントからプロジェクトのデプロイやドメイン管理、在庫の更新ができると書く。料金ページの下部にも「CursorやClaudeなどのMCPクライアントをホスティングと連携。セットアップはわずか2分」とある。

## 技術構成

::techstack

:::fact
公式APIドキュメント（2026-09-30時点）によれば、Hostinger APIはホスティング・ドメイン・DNS・メール・VPS・WordPress・EC・請求を対象にし、hPanelで発行したトークンをBearerヘッダーで送る。上限は毎分90リクエストで、超えると429を返す。同じページは、同じ仕様書から生成した公式CLI（ブラウザでのサインインが必要）、PHP・Python・TypeScriptのSDK、Terraformプロバイダ、Ansibleコレクション、n8nノード、WHMCSモジュール、Postmanコレクションを挙げ、npmパッケージ@hostinger/mcpがAPIを372本のMCPツールとして公開すると書く。GitHubのapi-mcp-serverのREADMEは、search・execute・multi-executeの3つのツールで403の操作を扱い、stdioとHTTPストリーミングの両方で動き、認証はAPIトークンまたはPKCE付きOAuth 2.0だと説明している。
:::

:::fact
AI Builderの中身は、公式ブログの製品アップデート一覧から追える。2025年2月にHostinger Horizonsとして始まり、11月にGoogleのGemini 3が生成を担うようになり、同じ記事の年間総括は、Gemini 3とClaude Sonnet 4.5を含む複数のモデルを作業ごとに使い分けていると書く。2026年2月にデータベース・認証・ファイルストレージ・メール送信を内蔵し、3月にはChatGPTの中から使えるようになった。6月15日の公式ブログによれば、サブスクリプション機能はStripeで決済し、Visa・Mastercard・Apple Pay・Google Payに対応し、プラットフォーム手数料は0%だ。8月18日の公式ブログは、Website BuilderとAI Builderを一つに統合し、AIが主導するAgenticモードと自分で配置を決めるManualモードを持つと書く。同じ記事は、プラットフォーム上のプロジェクトのおよそ20%がSaaS・社内ツール・学習プラットフォームで、1年前の4%未満から5倍になったと述べている。
:::

:::fact
サポートのAIも段階を踏んでいる。2025年5月にはVPS向けのKodeeがMCPでサーバー作業を扱うようになり、8月には「案内するだけでなく、実際の作業をする」ように変わった。2026年2月23日の決算ブログによれば、Kodeeは350以上の管理者レベルの操作を扱い、サポート対応の81%を処理し（年初は50%）、サポートの自動化で900万ユーロを節約した。2026年9月2日の公式ブログによれば、8月中旬からKodeeはHostinger Agentに置き換えられ、サポートと口座の管理は追加費用なし、専門的なエージェントの作業は段階制のサブスクリプションになった。
:::

:::fact
2019年8月25日の公式ブログ（同年11月25日更新）によれば、8月23日に第三者が認可トークンを手に入れ、社内のRESTful APIサーバーへの権限を昇格させた。APIのデータベースには約1,400万件の顧客のユーザー名・メールアドレス・ハッシュ化されたパスワード・氏名・IPアドレスが含まれていた。決済カードなどの金融データはサーバーに保存していないため影響はなく、顧客のWebサイトとデータも無事だったとし、全顧客のパスワードをリセットした。11月の更新では、コードの書き直し、専任のセキュリティチーム、自動でローテーションする資格情報、二要素認証、機微なデータを分離するデータベースの再構成を挙げている。
:::

:::guess
自社サイトはCloudflareの後ろに置き、管理画面はマネージドチャレンジで守っている。共用サーバーの基盤はLiteSpeedとNVMeで、AI Builderのバックエンドは「自前」と説明されるものの、データベースのエンジンやAI Builderの実行基盤は公開されていない。2019年の侵害が「APIサーバーへの権限昇格」だったことを考えると、2025年以降にAPIとMCPを外部のAIエージェントへ大きく開いた判断は、毎分90リクエストの上限やPKCE付きOAuthのような境界の設計とセットで見るべきだと推測される。fireactionsのようなCI基盤を自前の物理サーバーで動かす姿勢からは、クラウド利用料ではなく自社の機器で原価を抑える方針がうかがえる。
:::

## ビジネスモデル

収益の柱は、レンタルサーバーとその周辺（ドメイン・メール・VPS・AI Builder・Hostinger Agentのサブスクリプション）の利用料だ。特徴は、その集め方にある。長期契約を先払いで集め、更新で値上げし、新規獲得はアフィリエイトに厚く払って外に任せる。

:::fact
2026年2月23日の公式決算ブログによれば、売上は2022年の6,960万ユーロ（前年比64%増）、2023年の1億1,020万ユーロ（57%増）、2024年の1億8,240万ユーロ（65%増）、2025年の2億7,540万ユーロ（51%増）と推移し、2022〜2025年の年平均成長率は58%。顧客数は150万件（2022年）から240万件、350万件、460万件（2025年・35%増）へ増えた。2023年に初めてEBITDAで240万ユーロの黒字を出した。2025年末時点でAI Builderの利用者は80万人以上、メールマーケティングのHostinger Reachの利用者は12月時点で15万人。NPSは+59。CEOのDaugirdas Jankus氏は「顧客はインフラやツールを管理したいのではなく、事業を営みたいのだ」と述べている。
:::

:::fact
アフィリエイトプログラムの規約（最終改定2026-08-19）とFAQによれば、報酬は共用ホスティング・クラウドホスティング・VPS・Hostinger Reach、それに特別オファー中の年契約ドメインとメールで最大40%（日本語の案内ページは「40%からスタートし、売上高によって増加」と書く）、AI Builderの特定のオファーは最大60%で、1件あたりの報酬の上限は300ドル。Cookieは30日間有効。1カ月契約のホスティング、更新、アップグレードには報酬が付かない。最低支払額はPayPalで100ドル、銀行振込で500ドルで、いずれも3件以上の承認済み成果が必要。自分のリンクからの購入、Hostingerの商標での検索広告の入札、値引き方法の宣伝を主目的にした動画は禁止されている。別に紹介プログラムもあり、紹介者は対象の売上の20%を受け取り、紹介された側は20%引きになる。アフィリエイト報酬は、購入から45日以内にキャンセル・返金があれば付与されず、支払いの対象になるのも45日を過ぎた分だけだ。
:::

:::guess
2025年の売上2億7,540万ユーロを顧客460万件で割ると、1顧客あたり年およそ60ユーロ、月5ユーロ前後になる。日本向けのPremiumの先払い単価（月299円）より高く、更新後の月1,299円より低い。先払いの安い顧客と、更新して高い単価を払う顧客が混ざった平均とみられる。48カ月の先払いは、会計上は前受けとして少しずつ売上に計上されるが、現金は初日に入る。この現金があるから、最初の売上の40%をアフィリエイターに渡しても回る、と推測される。更新やアップグレードに報酬を付けないのは、紹介料を「初回の獲得費」に限り、更新後の高い単価をまるごと自社の利益にする設計だ。
:::

:::guess
AIの役割は、原価と売上の両方に効いている。サポートの9割をAIが解決すれば、顧客が460万件に増えても人件費は比例しない。決算ブログが2025年に900万ユーロの節約を挙げたのは、その一端だ。一方でAI Builderのクレジットは使い切り型で、作り続ける人は買い足す。プロジェクトの2割がSaaSや社内ツールになったという数字は、月数百円のサーバーを借りる個人から、アプリを動かして課金する事業者へ顧客の中心を動かそうとしているとみられる。[Lovable](/ja/articles/lovable)や[Replit](/ja/articles/replit)がAIから始めてホスティングへ降りてきたのに対し、Hostingerはホスティングから始めてAIへ登っている。
:::

月299円の看板の裏には、48カ月の先払い、4.3倍の更新価格、4割の紹介料、AIで薄くしたサポートの原価が並んでいる。どれも公式ページと規約に書いてある。読めば分かるが、大きな数字の下の小さな字を読む人は多くない。Hostingerの成長は、その読まれなさの上に建っているとみられる。
