---
service: "Google Workspace"
title: "30億人超が使うアプリを、1席ずつ売る — 年間プランを既定にした料金表、席に含めて上限で区切るGemini、1人850円からの紹介料、Google Cloudの数字の中に置かれた売上からGoogle Workspaceを解剖する"
description: "Google Workspaceは、Google LLCが提供する仕事向けのアプリのまとまりで、G Suiteから名前を変えた。2026年4月の公式ブログは、30億人超のユーザーと1,300万超の顧客を掲げる。料金ページ（2026-10-13確認・1人あたりの月額・税別）では、年間プランの通常の価格がBusiness Starter 800円、Standard 1,600円、Plus 2,500円で、管理者ヘルプによれば、いつでも解約できるフレキシブル プランは950円・1,900円・3,000円だ。席には2025年からGeminiが含まれ、StarterのGeminiはGmailとVids、Geminiアプリの基本的なアクセスなどに限られる。紹介プログラムは日本で新規ユーザー1人あたり850円から2,550円を払い、Alphabetは決算でWorkspaceの売上をGoogle Cloudのセグメント（2026年第2四半期の売上高247億6,800万ドル）に含めて示す。料金ページ、管理者ヘルプ、Google Workspace Updatesブログ、紹介とアフィリエイトの規約、Alphabetの決算資料、当サイトの実観測から、年間プランを既定にした料金表、上限で区切ったAI、DNSの1行から始まる独自ドメインのメール、紹介者と販売パートナーに開いた窓口までを解剖する。"
lead: "Google Workspaceの料金ページを開くと、「年間プラン（1 年契約なら 16% お得）」のスイッチは初めから入っており、1人月800円（税別）からの年間プランの通常の価格に、最初の3か月の割引後の価格が並ぶ。年間プランは1年の契約を前提とし、管理者ヘルプが示す、いつでも解約できるフレキシブル プランはおよそ19〜20%高い（当サイトの計算）。席には2025年からGeminiが含まれ、使える量はエディションと上限で区切られる。紹介者には1人あたり席代のおよそ1か月分に当たる額を払い（当サイトの計算）、売上はAlphabetの決算でGoogle Cloudの中に置かれる。30億人超が使うアプリを1席ずつ売る仕組みを、公開情報だけで解剖する。"
category: saas
tags: [productivity, groupware, email, ai, google, small-business, security, subscription]
publishedAt: "2026-10-13"
updatedAt: "2026-10-13"
lastVerified: "2026-10-13"
expires:
  - date: "2026-10-31"
    claim: "ムームードメインで契約したときの初年度25%OFF（「10/31まで」）と、その価格を使った比較"
  - date: "2026-10-31"
    claim: "アフィリエイトの日本の報酬（2026年7月の料金表、四半期ごとに更新）"
serviceUrl: "https://workspace.google.com/intl/ja/"
# Affiliate link placeholder: Google runs two official programs for Google Workspace (checked 2026-10-13).
# 1) Referral program (https://workspace.google.com/intl/ja/referral-program/): join by entering a name
#    and email address in Google's sign-up form; a welcome email brings a personal referral link and
#    promo codes (up to 100 a year). In Japan it pays a one-time fee per new user of 850 yen (Business
#    Starter), 1,700 yen (Business Standard) or 2,550 yen (Business Plus), for up to 100 users per referred
#    account and 200 users a year, after the customer has used a paid plan for 90 days; fees are paid
#    monthly to a bank account in the same country, set up through a Google Pay payments profile.
#    Customers who enter a promo code get 10% off per user for the first year; promo codes must be
#    handed out one by one, never posted publicly. The agreement is with Google Asia Pacific Pte. Ltd.
#    (https://workspace.google.com/intl/ja/landing/partners/referral/terms/).
# 2) Affiliate program (https://workspace.google.com/intl/ja/affiliate-program/), meant for 100 or more
#    referred users a year: apply through CJ Affiliate, subject to review. The July 2026 rate list pays
#    1,020 / 2,040 / 3,060 yen per user in Japan, processed in USD through CJ. Its terms (with Google LLC)
#    require Google's prior written approval of the site, disclosure that the affiliate is paid by
#    Google, and nofollow on links; tracking links come through CJ; offers and banners are a library
#    provided by Google.
# Both agreements forbid making hyperlinks to Google web pages open a new browser window (referral
# terms section 8(b), affiliate terms section 5(b)), so this block keeps sameWindow: true, which makes
# AffiliateCard open the link in the same tab with no new-tab cue. To enable it, join one program,
# paste its link into url (in both ja.md and en.md) and uncomment the block. Neither program page
# publishes an ad text, so the block has no label and the card uses the site's own CTA; if Google
# ever supplies an ad text, copy it verbatim into label. Never invent the label. Keep every field
# identical in ja.md and en.md (parity.ts checks it). For the CJ affiliate program, set program to
# "Google Workspace Affiliate Program (CJ Affiliate)" instead.
# affiliate:
#   url: "https://<google-workspace-referral-link-or-cj-tracking-link>"
#   program: "Google Workspace Referral Program"
#   sameWindow: true
vendor: "Google LLC"
origin: "US"
heroTheme: "google-workspace"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.5 }
techStack:
  - layer: "生成AI"
    name: "Gemini (Gemini in Workspace apps, Gemini app, Gemini Notebook)"
    confidence: confirmed
    evidence: "料金ページ（2026-10-13確認）のエディション比較に、Gmail・ドキュメント・スプレッドシート・スライド・Vids・ドライブ・Meet・ChatのGemini、Geminiアプリ、Gemini Notebookの提供範囲がエディションごとに載る。AIのページは、顧客のデータをGeminiモデルのトレーニングや広告のターゲット設定に使用しないと明記"
    evidenceUrl: "https://workspace.google.com/intl/ja/pricing"
  - layer: "AIエージェント・自動化"
    name: "Google Workspace Studio (agents and flows; webhooks, Apps Script custom steps)"
    confidence: confirmed
    evidence: "Google Workspace Updatesブログ（2025-12-03・2026-03-19追記）に、コーディングなしでAIエージェントを作り、管理し、共有する場として紹介され、Webhookで外部のAPIを呼び出すこと、Apps Scriptでカスタムのステップを作ること、Asana・Jira・Mailchimp・Salesforceなどとの接続を明記。2026年3月19日にすべてのリリース トラックのドメインへ展開したと追記"
    evidenceUrl: "https://workspaceupdates.googleblog.com/2025/12/workspace-studio.html"
  - layer: "スクリプトの実行環境"
    name: "Google Apps Script (V8 runtime; formerly Mozilla Rhino)"
    confidence: confirmed
    evidence: "Apps Scriptの開発者向けドキュメント（2026-10-13確認）に、以前はMozillaのRhinoインタープリタで動いてES5に結び付いていたこと、いまはChromeとNode.jsを支えるV8ランタイムで最新のJavaScriptの構文と機能を使えることを明記"
    evidenceUrl: "https://developers.google.com/apps-script/guides/v8-runtime?hl=ja"
  - layer: "ドキュメントの描画"
    name: "Canvas-based rendering (Google Docs)"
    confidence: confirmed
    evidence: "Google Workspace Updatesブログ（2021-05-11）に、ドキュメントの描画の実装をHTMLベースからcanvasベースに移し、性能とプラットフォーム間の表示の一貫性を高めると明記。独自の連携にはGoogle Workspace Add-onsのフレームワークとAPIを使うよう推奨"
    evidenceUrl: "https://workspaceupdates.googleblog.com/2021/05/Google-Docs-Canvas-Based-Rendering-Update.html"
  - layer: "独自ドメインのメールの受信"
    name: "Gmail MX record (smtp.google.com)"
    confidence: confirmed
    evidence: "管理者ヘルプ（2026-10-13確認）に、Google WorkspaceのMXレコードの値はsmtp.google.com（優先度1）で、2023年より前に使い始めたドメインのaspmxで始まる以前の値も引き続きサポートすると明記"
    evidenceUrl: "https://support.google.com/a/answer/174125?hl=ja"
  - layer: "暗号化"
    name: "Client-side encryption (CSE)"
    confidence: confirmed
    evidence: "管理者ヘルプ（2026-10-13確認）に、対応エディションをFrontline Plus・Enterprise Plus・Education Standard・Education Plusとし、CSEによるエンドツーエンドの暗号化はGoogleのサーバーやサードパーティでは復号できないと明記"
    evidenceUrl: "https://support.google.com/a/answer/10741897?hl=ja"
  - layer: "データの保管場所"
    name: "Data regions (United States / Europe / no preference)"
    confidence: confirmed
    evidence: "管理者ヘルプ（2026-10-13確認）は、対象のデータの保管場所を米国、欧州連合、指定なしから選べるとし、対応エディションにBusiness Standard・Business Plus・Enterprise Standard・Enterprise Plusなどを挙げる（Business Starterは挙げていない）。料金ページ（同日確認）は、Enterprise Data RegionsをEnterpriseの列にだけ載せる"
    evidenceUrl: "https://support.google.com/a/answer/7630496?hl=ja"
  - layer: "公式サイトとアプリの配信"
    name: "Google web servers (server: ESF / sffe / GSE), HTTP/3, nonce-based CSP, Trusted Types"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（2026-10-13）。workspace.google.comのトップページと料金ページはserver: ESFでlast-modifiedを返さず、AI、よくある質問、SLA、紹介プログラム、アフィリエイトのページはserver: sffeとlast-modifiedを返した。Updatesブログとmail.google.comはserver: GSEを返した。mail.google.com以外はalt-svcでHTTP/3（h3）を示した。料金ページとdocs.google.comは、require-trusted-types-for 'script'とnonce付きのscript-srcのCSPを返した"
sources:
  - label: "Google Workspace公式: トップページ（G Suiteからの改称・14日間の無料試用・300名未満はオンラインで手続き）"
    url: "https://workspace.google.com/intl/ja/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式: 料金（エディション比較・年間プラン・最初の3か月の割引）"
    url: "https://workspace.google.com/intl/ja/pricing"
    accessedAt: "2026-10-13"
  - label: "Internet Archive: Google Workspace 料金ページの保存（2026-10-09）"
    url: "https://web.archive.org/web/20261009060817id_/https://workspace.google.com/pricing?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Internet Archive: Google Workspace 料金ページの保存（2026-09-20）"
    url: "https://web.archive.org/web/20260920213205id_/https://workspace.google.com/pricing?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式: AIソリューション（データの扱い・Geminiの組み込み）"
    url: "https://workspace.google.com/intl/ja/solutions/ai/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式: よくある質問（メール エイリアス・稼働率保証・サポート）"
    url: "https://workspace.google.com/intl/ja/faq/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式: Google Workspace SLA（最終更新2026-08-31）"
    url: "https://workspace.google.com/intl/ja/terms/sla/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式: ご紹介プログラム（日本での紹介料）"
    url: "https://workspace.google.com/intl/ja/referral-program/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式: ご紹介プログラムのよくある質問（プロモーション コード・紹介料の進呈）"
    url: "https://workspace.google.com/intl/ja/landing/partners/referral/faqs/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式: ご紹介プログラム利用規約（Google Asia Pacific Pte. Ltd.）"
    url: "https://workspace.google.com/intl/ja/landing/partners/referral/terms/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式: アフィリエイト プログラム（CJ Affiliate経由）"
    url: "https://workspace.google.com/intl/ja/affiliate-program/"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Affiliate Program: Commission Rates by Country（Last Updated: July 2026・PDF）"
    url: "https://storage.googleapis.com/workspace-affiliate/country-list/current_rates.pdf"
    accessedAt: "2026-10-13"
  - label: "Google Workspace アフィリエイト プログラム: 利用規約（日本語・PDF）"
    url: "https://storage.googleapis.com/workspace-affiliate/terms/affiliate_program_terms_ja.pdf"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: フレキシブル プランと年間 / 定期プランを比較する"
    url: "https://support.google.com/a/answer/1247360?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: Business エディション"
    url: "https://support.google.com/a/answer/13062337?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: Google Workspace のエディションを選択する"
    url: "https://support.google.com/a/answer/6043576?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: Google Workspace の無料試用について"
    url: "https://support.google.com/a/answer/6388094?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: AI の使用量上限について"
    url: "https://support.google.com/a/answer/14700766?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: Google と販売パートナー間でサブスクリプションを移行する"
    url: "https://support.google.com/a/answer/7643791?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: Google Workspace の MX レコードを設定する"
    url: "https://support.google.com/a/answer/174125?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: クライアントサイド暗号化について"
    url: "https://support.google.com/a/answer/10741897?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace管理者ヘルプ: データの地理的な保管場所を選択する"
    url: "https://support.google.com/a/answer/7630496?hl=ja"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: The best of Google AI, now included in Workspace Business and Enterprise plans（2025-01-15）"
    url: "https://workspaceupdates.googleblog.com/2025/01/expanding-google-ai-to-more-of-google-workspace.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: Google Workspace Studio（2025-12-03・2026-03-19追記）"
    url: "https://workspaceupdates.googleblog.com/2025/12/workspace-studio.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: AI Expanded Access（2026-02-05）"
    url: "https://workspaceupdates.googleblog.com/2026/02/google-workspace-ai-expanded-access.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: NotebookLM is now Gemini Notebook（2026-07-16）"
    url: "https://workspaceupdates.googleblog.com/2026/07/notebooklm-now-gemini-notebook.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace Updates: Google Docs will now use canvas based rendering（2021-05-11）"
    url: "https://workspaceupdates.googleblog.com/2021/05/Google-Docs-Canvas-Based-Rendering-Update.html"
    accessedAt: "2026-10-13"
  - label: "Google Workspace公式ブログ: 10 more announcements from Google Workspace at Cloud Next '26（2026-04-23）"
    url: "https://workspace.google.com/blog/product-announcements/10-more-announcements-workspace-at-next-2026?hl=en"
    accessedAt: "2026-10-13"
  - label: "Alphabet: Alphabet Announces Second Quarter 2026 Results（2026-07-22・決算発表資料PDF）"
    url: "https://s206.q4cdn.com/479360582/files/doc_financials/2026/q2/2026q2-alphabet-earnings-release.pdf"
    accessedAt: "2026-10-13"
  - label: "Google公式ブログ: Alphabet earnings call Q2 2026: Sundar Pichai remarks（2026-07-22）"
    url: "https://blog.google/company-news/inside-google/message-ceo/alphabet-earnings-q2-2026/"
    accessedAt: "2026-10-13"
  - label: "Google for Developers: Apps Script V8 ランタイムの概要"
    url: "https://developers.google.com/apps-script/guides/v8-runtime?hl=ja"
    accessedAt: "2026-10-13"
  - label: "ムームードメイン公式: Google Workspace（初年度25%OFF・Google Cloud認定パートナー）"
    url: "https://muumuu-domain.com/lp/google-workspace"
    accessedAt: "2026-10-13"
---

Google Workspaceは、Google LLCが提供する仕事向けのアプリのまとまりだ。独自ドメインのGmail、カレンダー、ドライブ、Meet、ドキュメント、スプレッドシート、スライドに、Geminiのアシスタント、Gemini Notebook、動画のVids、自動化のStudioまでを1つの契約に束ね、ユーザー1人ごとの月額で売る。当サイトは、Workspaceに組み込まれたAIの側を[Gemini](/ja/articles/gemini)で、仕事のドキュメントを扱う別の道具を[Notion](/ja/articles/notion)で解剖した。Workspaceは、一般向けに無料でも提供しているGmailやドライブに、独自ドメイン、管理、保存容量、AIの上限を足して、1席ずつ値段を付ける。独自ドメインの取得は、[お名前.com](/ja/articles/onamae)と[ムームードメイン](/ja/articles/muumuu-domain)の解剖で扱った。本稿は、料金表の作り方、席に含めたAI、紹介者と販売パートナーに開いた窓口、そしてGoogle Cloudの数字の中に置かれた売上を、公開情報だけで解剖する。

## サービス解説

Google Workspaceは、Business（Starter・Standard・Plus）とEnterpriseのエディションを軸に、ユーザー数に応じた月額で契約する。BusinessはGoogleのサイトからオンラインで申し込め、Enterpriseは営業担当者を通す。

:::fact
トップページのよくある質問（2026-10-13確認）によれば、Googleは、G Suiteのコミュニケーションとコラボレーションのツールの統合性を高めたことに伴い、サービス名をGoogle Workspaceに変えた。同じページは「何百万もの企業が Gmail、カレンダー、ドライブ、Meet などのプレミアム バージョンを業務に活用しています」と書き、従業員が300名未満ならオンラインで手続きしてすぐに使い始められ、300名を超えるならEnterpriseのプランについて営業担当に問い合わせるよう案内する。2026年4月23日の公式ブログ（Google Cloud Next '26の発表のまとめ）は、Google Workspaceを30億人超のユーザーと1,300万超の顧客が仕事に使う場所だとし、Meetの「Take Notes For Me」は直近1か月で1億1,000万人超の参加者が使い、その数は前年比で8.5倍に増えたと書く。管理者ヘルプによれば、Businessエディションは最大300ユーザーで使え、独自ドメインのほか、ビジネス用のメールアドレスやGmailのアドレス（@gmail.com）だけでも申し込める。Gmailのアドレスで申し込んだ場合は1ユーザー アカウントで、ドメインの所有権を証明すると最大300ユーザーやビジネス用のカスタム メールアドレスを使えるようになる。Enterpriseへの申し込みには確認済みのドメインが要る。Businessエディションは、Googleの営業担当者やお近くの販売パートナーからも購入できる。
:::

:::fact
料金ページ（2026-10-13確認・ユーザー1人あたりの月額・税別）によれば、年間プランの通常の価格はBusiness Starterが800円、Business Standardが1,600円、Business Plusが2,500円で、Enterpriseは営業担当者への問い合わせになる。管理者ヘルプは、日本円のフレキシブル プランを月額950円・1,900円・3,000円、年間プランを800円・1,600円・2,500円とし、いずれも消費税10%を含まないと注記する。料金ページは、組織内で共有するストレージ プールをユーザー1人あたりStarterで30GB、Standardで2TB、PlusとEnterprise Plusで5TBとし、Meetの参加者の上限を100人・150人・500人・1,000人、会議の長さの上限をどのエディションでも24時間とする。StarterのGeminiは、GmailとVidsのGemini、Geminiアプリの「基本的なアクセス」などで、「各種 Workspace アプリ内の Gemini」の欄は「制限あり」と表示される。Standard以上は、ドキュメント・スプレッドシート・スライド・ドライブ・Meet・ChatのGemini、複雑なタスクに対応するGoogleの最も高性能なAIモデル、Gemini Notebookの「より広いアクセス」を含む。録画とノイズ キャンセリング、予約ページ、ドキュメントとPDFの電子署名はStandardから、Vaultと高度なエンドポイント管理はPlusから使え、データ損失防止（DLP）、コンテキストアウェア アクセス、Enterprise Data Regions、S/MIMEの暗号化はEnterpriseの列に並ぶ。2段階認証プロセスと高度な保護機能プログラムはすべてのエディションに付く。トップページと料金ページは、すべてのプランに14日間の無料試用があるとし、Starter・Standard・Plusは最大300人、Enterpriseはユーザー数の上限も下限もないとする。
:::

:::pull
同じアプリを30億人超が使い、1,300万超の顧客が席を買う。Workspaceの値段は、その差を何で区切るかの設計だ。
:::

::scorecard

## UX分析

Workspaceの体験は、アプリの画面より先に、契約と設定の入口で形が決まる。料金表のスイッチ、試用の条件、DNSのレコード、AIの上限が、使い始めるまでの道筋を分ける。

- **年間プランが最初から選ばれている**。当サイトの実観測（2026-10-13）では、料金ページのHTMLで「年間プラン（1 年契約なら 16% お得）」のスイッチは aria-checked="true" の状態で返り、ページは年間プランの元の価格800円・1,600円・2,500円に、割引後の価格を並べていた。管理者ヘルプによれば、年間 / 定期プランは1年以上の継続を前提とし、ライセンス数を減らせるのは更新のときに限られ、更新日の前に解約すると残りの期間の料金が請求されて払い戻しはない。フレキシブル プランはユーザーの追加と削除がいつでもでき、その月に存在したアカウントの分だけを払い、解約料なしでいつでも解約できる。年間プランはフレキシブル プランより15.8〜16.7%安く（当サイトの計算）、ページの「16% お得」に近い値になる。
- **試用は14日・10人まで**。管理者ヘルプによれば、申し込むと14日間の無料試用版サブスクリプションが始まり、最大10人のユーザーで機能を試せる。同じヘルプは、Google Workspaceを使うにはお支払い情報の設定が要るとし、試用期間中に請求は発生せず、設定してあれば試用の終了とともに有料のサブスクリプションが自動で始まり、設定しないまま試用が終わるとアカウントは一時停止されるとする。11人目のユーザーを追加するときに試用の終了を選ぶと、有料のサブスクリプションが全員に適用される。一方、紹介プログラムのよくある質問は、アジア太平洋地域の顧客は14日間の試用期間中いつでもお支払い情報とプロモーション コードを入力できるとする。Businessエディションのヘルプは、ストレージ プールは段階的に付与され、購入時は一部だけで、30米ドルのサブスクリプション料金の支払いが済むと上限まで増えるとする。
- **独自ドメインのメールはDNSの1行で切り替える**。管理者ヘルプによれば、Gmailで独自ドメインのメールを受け取るには、ドメイン登録事業者のシステムでMXレコードを smtp.google.com（優先度1）にし、管理コンソールでGmailを有効にする。2023年より前に使い始めたドメインの aspmx で始まる以前の値も引き続きサポートされ、新しいMXレコードが認識されるまで最長で72時間ほどかかる。よくある質問によれば、ユーザー1人につき最大30個のメール エイリアスを追加できる。
- **AIは席に含め、上限で区切る**。2025年1月15日のUpdatesブログによれば、GoogleはBusinessとEnterpriseのプランに、アドオンを買わなくてもAIを含めた。管理者ヘルプによれば、生成AIの機能の使用量の上限はエディションごとに異なり、1日の上限は毎日、月間の上限は毎月1日の、いずれも太平洋時間の午前0時（UTC-8）にリセットされ、繰り越しや他のユーザーとの共有はできない。料金ページでは、Gemini Notebookの2人のAIホストによる音声解説の生成が、Starterは1日あたり最大3件、ほかは最大20件だ。上限を引き上げるアドオンとして「AI 拡張アクセス」（英語名 AI Expanded Access）が並ぶ。
- **名前が変わっても、リンクは切らない**。2026年7月16日のUpdatesブログによれば、GoogleはNotebookLMをGemini Notebookに改め、自動のリダイレクトで既存の共有ノートブックとリンクを使い続けられるようにし、モバイルでは利用者がアプリを更新する必要がある場合があるとした。2025年1月の投稿が「Gemini Advanced」「NotebookLM Plus」と呼んでいた機能は、2026年10月の料金ページでは「Gemini アプリ」「Gemini Notebook」の名前で並ぶ。
- **販売パートナーへ移っても、データは動かない**。管理者ヘルプによれば、有料のサブスクリプションはGoogleと販売パートナーの間、販売パートナー同士の間で移せ、移行はデータやサービスの利用可否に影響せず、取り消せない。販売パートナーへの移行は1暦年に2回までで、移行日以降の請求は販売パートナーから届き、月の途中で移すとその月はGoogleと販売パートナーから2通の請求書が届く。移行後の販売パートナーは、アクセス権を削除しない限り管理コンソールにアクセスできる。

## 技術構成

::techstack

:::fact
当サイトの実観測（2026-10-13）では、workspace.google.com のトップページと料金ページは server: ESF を返して last-modified を返さず、CSPのレポートの送り先は、トップページが /_/IntegratedStaticPageMarketingUi/、料金ページが /_/DasherGrowthPricingUi/ だった。料金ページのCSPは、リクエストごとのnonceを付けたscript-srcに加えて require-trusted-types-for 'script' を指定し、docs.google.com も同じ指定のCSPとともに、accounts.google.com のログインの画面へ302で転送した。一方、紹介プログラムのページは server: sffe とともに last-modified（2026年10月9日 18:08 GMT）と accept-ranges: bytes を返し、AI、よくある質問、SLA、紹介のよくある質問と利用規約、アフィリエイトのページも server: sffe、last-modified、accept-ranges: bytes を返した。これらのページのCSPのレポートの送り先は csp.withgoogle.com の workspace-web-team だった。Updatesブログは server: GSE と last-modified を、mail.google.com は server: GSE を返した。workspace.google.com、Updatesブログ、docs.google.com は alt-svc で HTTP/3（h3）を示し、mail.google.com の301の応答は alt-svc: clear だった。料金ページのHTMLは、価格を AF_initDataCallback という関数に渡すデータとして埋め込み、そこには JP と JAPAC という値、各エディションの年間プランの円の価格と年額（9,600円・19,200円・30,000円）、管理者ヘルプがフレキシブル プランの価格とする950円・1,900円・3,000円、割引の率と期間、「Ranger/3m2000pc」のようなラベルが入っていた。2026年10月13日の取得では、割引の期間の境目を示すUNIX時刻は、太平洋時間の2026年10月26日0時と2027年1月26日0時に当たる（当サイトの計算）。
:::

:::fact
2021年5月11日のUpdatesブログによれば、Googleはドキュメントの描画の実装を、HTMLベースからcanvasベースへ数か月かけて移し、性能とプラットフォーム間の表示の一貫性を高めるとした。HTMLの構造に頼るChromeの拡張機能は動かなくなるおそれがあるとして、独自の連携にはGoogle Workspace Add-onsのフレームワークと、サポートされているAPIを使うよう勧めた。Apps Scriptのドキュメントによれば、Apps Scriptは以前MozillaのRhinoで動いてES5に結び付いていたが、いまはChromeとNode.jsを支えるV8ランタイムで最新のJavaScriptを使える。2025年12月3日に発表され、2026年3月19日にすべてのリリース トラックのドメインへ広がったWorkspace Studioは、コーディングなしでAIエージェントを作り、管理し、共有する場で、Webhookで外部のAPIを呼び、Apps Scriptでカスタムのステップを作り、Asana・Jira・Mailchimp・Salesforceなどにつなぐ。管理者ヘルプによれば、データの保管場所は米国、欧州連合、指定なしから選べ、対応エディションにはBusiness Standard・Business Plus・Enterprise Standard・Enterprise Plusなどが並び、Business Starterは含まれない。部門やグループごとに保管場所を分ける設定と、保管場所の地域でデータを処理する設定は、Enterprise Plusなどに限られる。料金ページは、Enterprise Data RegionsをEnterpriseの列にだけ載せる。クライアントサイド暗号化（CSE）は、Frontline Plus、Enterprise Plus、Education Standard、Education Plusが対応し、CSEで暗号化したデータはGoogleのサーバーやサードパーティでは復号できない。AIのページは、顧客のデータをGeminiモデルのトレーニングや広告のターゲット設定に使用しないとする。SLA（最終更新2026年8月31日）は、Gmail、ドライブ、Meetなど対象のサービスの月間稼働率を99.9%以上とし、下回ったときのサービス クレジットを、99.9%未満で3日、99.0%未満で7日、95.0%未満で15日とする。
:::

:::guess
料金ページが、地域を表すとみられる JP と JAPAC の値と、太平洋時間で区切った割引の期間と率を、リクエストごとにデータとして埋め込むのは、価格とキャンペーンを国や地域ごとに一か所で管理し、ページはそれを描くだけにする作りと読める。割引の期間の始まりは、当サイトの取得（太平洋時間では10月12日）でも、Internet Archiveの2つの保存（同10月8日と9月20日）でも、ページを見た日のちょうど14日後の0時（太平洋時間）だった（当サイトの計算）。14日は無料試用の長さと同じで、その日に始めた無料試用が終わる日から3か月の割引を数える設計と推測される。トップページ、料金ページ、ドキュメントのホームで、CSPのレポートの送り先の名前が別々なのは、ページごとに別のアプリケーションが応答していることを示しているとみられる。トップと料金のページ（ESF）が last-modified を返さず、紹介・アフィリエイト・よくある質問・AI・SLAのページ（sffe）が返すのは、リクエストごとに組み立てるページと、あらかじめ書き出したファイルとして配るページを、別々の仕組みで配っているためと推測される。2021年のcanvasへの移行と、Add-ons、Apps Script、Studioという公式の拡張の入口をそろえる動きは、HTMLの構造ではなくAPIを外部との境目にして、画面の作りを変えても連携が壊れないようにする方針と読める。料金ページのEnterprise Data Regionsは、ヘルプでEnterprise Plusなどに限られる、部門ごとの保管場所や処理の場所の指定までを含めた形を指しているとみられる。CSEとデータの保管場所は、データの所在や鍵の管理を自分で決めたい組織に、エディションが上がるほど細かく応える位置づけと読める。
:::

## 1席の値段は、払い方と窓口で変わる

:::fact
料金ページは、新規の顧客に向けて最初の3か月の割引を掲げ、「この特典は期間限定です。」とする。割引率は取得ごとに変わり、当サイトが2026年10月13日に3回取得したページでは、見出しの「最大」の値が30%か50%、Starterが20%か50%（640円か400円）、Standardが30%か50%（1,120円か800円）、Plusが20%か30%（2,000円か1,750円）だった（埋め込みデータには「Ranger/3m2000pc」などのラベルがあった）。どの取得でも、ページは年間プランの元の価格800円・1,600円・2,500円に割引後の価格を並べ、「価格はユーザー 1 人あたりの月額料金です（税別）」と注記した。価格の詳細が示す割引の期間は、ページを見た日によって変わる。2026年10月13日（日本時間）の取得では「2026/10/26 – 2027/01/26」で、その後を通常の価格とした。Internet Archiveが保存した同じページでは、2026年10月9日 06:08（UTC）の保存で「2026/10/22 – 2027/01/22」、2026年9月20日 21:32（UTC）の保存で「2026/10/04 – 2027/01/04」で、いずれも、ページを見た日の太平洋時間の日付の14日後、太平洋時間の0時に始まっていた（当サイトの計算）。割引の表示と価格の詳細は期間を3か月とする一方、価格に付いた注記は、対象を新規の顧客に限ったうえで「このお試し価格は、最初に追加された 20 ユーザーについて 12 か月間に限り提供されるものです。12 か月を過ぎると、すべてのユーザーに標準料金が適用されます。」と書いており、ページは3か月と12か月の両方を示している。注記は、最終的な金額は登録手続きの完了前に提示されるとする。紹介プログラムのよくある質問によれば、紹介者が配るプロモーション コードを使った顧客は、初年度にユーザー1人あたり10%の割引を受け、アジア太平洋の顧客は、お支払い情報を入力する前なら14日間の試用期間中いつでもコードを入力できる。ムームードメインのGoogle Workspaceのページ（2026-10-13確認）は、提供元のGMOペパボ株式会社をGoogle Cloudの認定パートナーとし、年間契約の初年度25%OFFの月額をStarter 660円（通常880円）、Standard 1,320円（通常1,760円）、Plus 2,063円（通常2,750円）、更新は通常価格、キャンペーン期間を10月31日までとする。このページの表示部分に税込・税抜の表記はないが、同じページのHTMLに埋め込まれた、20シート以上の新規契約の割引を知らせるお知らせ（2026年4月6日付）は、「・Business Starter：598円/月（通常880円 → 約32%OFF）・Business Standard：1,144円/月（通常1,760円 → 約35%OFF）・Business Plus：1,788円/月（通常2,750円 → 約35%OFF）※年額契約。税込価格」と書き、通常の価格を税込とする。この通常の価格は、Googleの年間プランの税別価格に消費税10%を足した額に当たり、表示部分の初年度の価格は、そこから25%を引いた額に当たる（当サイトの計算、Plusは1円未満を切り上げた額）。紹介する側への支払いは、紹介プログラムが日本で新規ユーザー1人あたり一度だけStarter 850円、Standard 1,700円、Plus 2,550円で、紹介先1件につき最大100ユーザー、1年に200ユーザーまで、紹介先が有料版を90日以上使うことが条件だ。CJ Affiliateを通じて参加するアフィリエイト プログラムの国別の料金表（2026年7月更新）は、日本の1人あたりの紹介料を1,020円・2,040円・3,060円とし、支払いはCJのネットワークを通じて米ドルで処理し、料率は為替の変動に合わせて四半期ごとに更新するとする。
:::

| エディション | 年間プラン（税別） | フレキシブル プラン（税別） | 公式サイトの最初の3か月（税別） | ムームードメインの初年度（税込・カッコ内は通常の価格） | 紹介料（新規1人につき1回）：紹介プログラム／アフィリエイト |
| --- | --- | --- | --- | --- | --- |
| Business Starter | 800円 | 950円 | 640円か400円（20%か50%オフ） | 660円（880円） | 850円／1,020円 |
| Business Standard | 1,600円 | 1,900円 | 1,120円か800円（30%か50%オフ） | 1,320円（1,760円） | 1,700円／2,040円 |
| Business Plus | 2,500円 | 3,000円 | 2,000円か1,750円（20%か30%オフ） | 2,063円（2,750円） | 2,550円／3,060円 |

紹介料を除く金額は、ユーザー1人あたりの月額。年間プランと最初の3か月は料金ページ、フレキシブル プランは管理者ヘルプ（料金ページの埋め込みデータとも一致）、ムームードメインは同社のページ（税込はページに埋め込まれたお知らせによる）による。最初の3か月の割引率は取得ごとに変わり、表には当サイトが2026年10月13日に3回取得したページで見た値を並べた。紹介料は新規ユーザー1人あたり一度の金額で、アフィリエイトは2026年7月更新の料金表による（いずれも2026-10-13確認）。

:::guess
割引率が取得ごとに入れ替わり、埋め込みデータに割引率に対応するとみられる「Ranger/3m2000pc」「Ranger/3m3000pc」「Ranger/3m5000pc」のラベルが現れることは、訪問ごとに割引率を割り当て、どの率が申し込みにつながるかを比べる、割引率のA/Bテストのような仕組みと読める。年間プランの価格を初めから選ばせること、ページを見た日の14日後から始まる3か月の割引、紹介者のコードによる初年度10%の割引、販売パートナーが付ける初年度25%の値引きは、定価を1つに保ったまま、入口ごとに実際に払う額を変える作りと読める。ムームードメインの通常の価格がGoogleの税別の定価に消費税を足した額に当たることからは、販売パートナーは定価ではなく、初年度の値引きやドメインと組み合わせた特典で競う構図と推測される。紹介料は、年間プランの1か月分の月額に対して、紹介プログラムで102〜106.25%、アフィリエイトで122.4〜127.5%に当たる（当サイトの計算）。新しい席の獲得に、席代のおよそ1か月分を払うという相場観が読み取れる。紹介料の支払いを有料版の90日以上の利用のあとにするのは、試用だけで終わる申し込みに報酬を払わないための仕組みとみられる。
:::

## ビジネスモデル

Workspaceの稼ぎ方は、主にユーザー1人ごとの席の月額と、AIの上限を引き上げるアドオンとみられる。料金ページは、Google Meetのハードウェア、Chrome Enterprise、Voice、AppSheetも個別に購入できるアドオンとして並べ、Enterpriseの列にはAssured ControlsとAI分類のアドオンを載せる。売上は、Alphabetの決算ではGoogle Cloudのセグメントに含まれ、単独では示されない。

:::fact
Alphabetが2026年7月22日に発表した2026年第2四半期の決算資料によれば、Google Cloudのセグメントの売上高は前年同期の136億2,400万ドルから247億6,800万ドル（82%増）に、営業利益は28億2,600万ドルから88億1,400万ドルに増え、営業利益率は20.7%から35.6%に上がった（当サイトの計算）。資料はGoogle Cloudを、企業向けのインフラとプラットフォームのサービス、アプリケーションなどを含むセグメントとし、サービスの売上は主に、Google Cloud Platformのサービス、Google Workspaceのコミュニケーションとコラボレーションのツール、その他の企業向けサービスの従量課金とサブスクリプションから、製品の売上は主にTPUシステムの販売から生じると説明する。Workspace単体の売上は示されず、成長を主導したのは、企業向けのAIソリューションとAIインフラ、中核のサービスにわたるGoogle Cloud Platformの増加だとする。同じ日のCEOの発言は、GeminiがGemini Enterprise、データ分析、サイバーセキュリティ、Google WorkspaceなどCloudのすべての製品に深く組み込まれていると述べた。2025年1月15日のUpdatesブログによれば、GoogleはBusinessとEnterpriseのプランにAIを含めたことに伴い、Gemini Business、Gemini Enterprise、AI Meetings & Messaging、AI Securityのアドオンの販売をやめ、新規の顧客には2025年1月16日から改定後の価格を適用した。2026年2月5日には、標準の提供と最上位のAI Ultra Access（旧Google AI Ultra for Business）の間に、Business Standard・Plus、Enterprise Standard・Plus向けのアドオン「AI Expanded Access」を加え、2026年3月1日からは高度な画像生成や動画生成を引き上げた水準で使い続けるのにこのアドオンが要るとした。管理者ヘルプによれば、販売パートナーは顧客に代わってサブスクリプションと請求を管理でき、Enterpriseなどの料金はGoogleの営業担当者と販売パートナーからの購入に適用される。紹介プログラムの契約の相手方はGoogle Asia Pacific Pte. Ltd.で、販売パートナーの顧客は紹介の対象外とされ、アフィリエイト プログラムの契約の相手方はGoogle LLCだ。
:::

:::guess
資料がGoogle Cloud Platformを成長の主役に挙げていることからは、Workspaceは急成長の牽引役というより、席の数と月額で積み上がるサブスクリプションの土台として働いているとみられる。ただし、Alphabetは決算資料でGoogle Cloudの伸びをGCPが牽引したと書き、Workspace単体の売上は開示していないため、Google Cloudの82%の成長のうちWorkspaceが占める部分も、この見方も、外からは確かめられない。2025年にAIのアドオンをやめて席の価格に含め、2026年に上限を引き上げるアドオンを足した流れは、AIで席そのものの価値を上げつつ、計算資源を多く使う利用者からは追加で受け取る二段の設計と読める。30億人超のユーザーと1,300万超の顧客という数字の開きは、無料のGmailやドキュメントで慣れた人が、仕事で使うときに有料の席へ移る導線の大きさを示しているとみられる。販売パートナー、紹介、アフィリエイトという外の窓口に、席代のおよそ1か月分に当たる報酬（当サイトの計算）や初年度の値引きを任せるのは、300人以下の組織への販売を自社の営業で抱え込まずに広げるためと推測される。
:::

G Suiteから名前を変えたGoogle Workspaceは、30億人超が使うアプリに、独自ドメイン、管理、保存容量、Geminiの上限で区切りを入れ、1席ずつ値段を付けている。料金表は年間プランを先に選ばせ、新規の顧客には取得ごとに率の変わる最初の3か月の割引を示し、紹介者には席代のおよそ1か月分に当たる報酬を払う（当サイトの計算）。販売パートナーのムームードメインは、初年度25%の値引きで同じ席を売る。AIを席に含めたあとの値付けが、Google Cloudの数字の中でどれだけの重みを持つのか。売上が単独で示されないぶん、料金表と規約の細部がその手がかりを示し続けている。
