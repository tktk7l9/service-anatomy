---
service: "Studio"
title: "書き出せないから、全部を引き受ける — 日本のノーコード制作Studioが公開基盤を作り直し、AIに入口を広げ、2026年10月の不正アクセスで問われた「一か所に集める」設計"
description: "デザイン・CMS・フォーム・配信までを一つにまとめ、作ったサイトの書き出しは提供しない。日本生まれのWeb制作プラットフォームStudioは、利用者90万人・公開サイト25万件の規模でSPAからMPAへ公開基盤を作り直し、月間Visitor上限を撤廃し、Studio.AssistantとStudio.DropでAIに入口を広げた。その直後の2026年10月、不正アクセスで全利用者の情報が流出した可能性を公表している。590円のMiniから月99,800円のAssistantまでの料金構造、PHPとVueの技術構成、テンプレート売上100%還元のエコシステムを、公式ページ・ヘルプ・採用情報と応答ヘッダーの実観測から解剖する。"
lead: "Studioのヘルプセンターには、一度読むと忘れにくい一文がある。デザインも、ページ情報も、ソースコードも、CMSのデータも、書き出せない。公開できるのはStudioのサーバーの上だけだ。不自由に聞こえるこの条件が、サーバーを持たなくていいという価値の裏側でもある。利用者90万人、公開サイト25万件まで育った日本発のWeb制作基盤は、2026年に公開基盤を作り直し、アクセス上限を外し、AIに制作の入口を渡した。そして同じ年の10月、一か所に集めたものの重さを不正アクセスという形で公表した。"
category: saas
tags: [website-builder, no-code, design-tool, cms, hosting, ai]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://studio.design/ja"
vendor: "Studio株式会社"
origin: "JP"
heroTheme: "studio"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 3.5 }
expires:
  - date: "2026-11-15"
    claim: "2026年10月の不正アクセスの続報（対象件数、二次被害の調査結果、原因と再発防止策、個人情報保護委員会への連名報告の受付開始、カスタムプロキシの旧キー差し替え期日）"
  - date: "2026-12-31"
    claim: "Studio.Dropが招待制のクローズドβであること、Studio.Assistantの14日間無料トライアル"
  - date: "2027-01-31"
    claim: "新しい公開サイト基盤から旧基盤へ戻す機能と、旧基盤のサポート窓口対応を2027年1月末を目処に終える予定"
techStack:
  - layer: "クラウド基盤"
    name: "Google Cloud"
    confidence: confirmed
    evidence: "公式のセキュリティページに、データはすべてGoogle Cloud Platformの施設内で管理し、サービスは東京とアイオワの複数リージョンのグローバルロードバランシング構成で冗長化していると明記"
    evidenceUrl: "https://studio.design/ja/lp/security"
  - layer: "WAF"
    name: "Google Cloud Armor"
    confidence: confirmed
    evidence: "公式のセキュリティページに、Google Cloud Armorを導入のうえWAFを設定していると明記"
    evidenceUrl: "https://studio.design/ja/lp/security"
  - layer: "アプリケーションサーバー"
    name: "PHP / Laravel"
    confidence: confirmed
    evidence: "公式の採用情報（Application Engineer）の開発環境に「サーバサイド：PHP, Laravel, Node.js, Nuxt.js」と記載。2026年10月の緊急メンテナンスのお知らせは、PHPの重大な脆弱性への予防措置としてPHPを更新し、公開サイト向けのAPIも止めたと説明している"
    evidenceUrl: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
  - layer: "フロントエンド"
    name: "Vue.js / TypeScript"
    confidence: confirmed
    evidence: "同じ採用情報の開発環境に「フロント：TypeScript, Vue.js, HTML, Sass, CSS」と記載。Vue Fes Japan 2025のスポンサーページの登壇概要は、Vue.jsを1系から8年間使い続けてきたと説明している"
    evidenceUrl: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
  - layer: "サーバーサイドレンダリング"
    name: "Node.js / Nuxt.js"
    confidence: confirmed
    evidence: "同じ採用情報の開発環境にNode.jsとNuxt.jsを記載。当サイトの実観測（2026-11-02）でも、*.studio.siteの公開サイトの応答に x-powered-by: Nuxt が出る"
    evidenceUrl: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
  - layer: "新しい公開サイト基盤"
    name: "Custom rendering engine (MPA + SSR + CDN cache)"
    confidence: confirmed
    evidence: "公式の予告記事に、独自のレンダリングエンジンを新開発し、SPAからMPAへ刷新したと明記。ヘルプはサーバー側で生成したHTMLをCDNにキャッシュして配信すると説明している"
    evidenceUrl: "https://studio.design/ja/whats-new/site-speed-up"
  - layer: "サーバーサイド（フロントエンド職）"
    name: "Bun"
    confidence: confirmed
    evidence: "公式の採用情報（Frontend Engineer）の就業環境に「サーバーサイド：Bun」と記載。どの処理で使っているかは書かれていない"
    evidenceUrl: "https://herp.careers/v1/studio/YiiIMnKiGCpS"
  - layer: "インフラ"
    name: "Kubernetes / Firebase"
    confidence: confirmed
    evidence: "公式の採用情報（Application Engineer）の開発環境に「インフラ：GCP（Firebase, Kubernetes）」と記載"
    evidenceUrl: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
  - layer: "決済"
    name: "Stripe"
    confidence: confirmed
    evidence: "公式ヘルプに、Studio.Assistantの支払い履歴と領収書は決済管理画面（Stripe）に移動して確認すると記載。テンプレートの売上や入金もStripeで管理すると説明している"
    evidenceUrl: "https://help.studio.design/ja/articles/16767384"
  - layer: "CDN・エッジ"
    name: "Cloudflare"
    confidence: likely
    evidence: "採用情報のインフラ欄にGoogle CloudとCloudflareが並ぶ。当サイトの実観測（2026-11-02）では、studio.designの応答に server: cloudflare と cf-ray が出る一方、同社のコーポレートサイトstudio.incや*.studio.siteのサイトは server: Google Frontend を返した。公開サイトの配信全体でCloudflareがどの役割を持つかは確認できていない"
  - layer: "アセット保管"
    name: "Google Cloud Storage"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、公開ページの画像がstorage.googleapis.comのstudio-design-asset-filesから配信され、応答に x-goog- で始まるヘッダーが出る"
  - layer: "ヘルプセンター"
    name: "Intercom"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、help.studio.designの応答に x-intercom-version が出る"
  - layer: "Webフォント配信（検証段階とみられる）"
    name: "Incremental Font Transfer"
    confidence: speculative
    evidence: "GitHubのstudio-design組織に、W3Cのift-encoderのフォーク（2026-10-09作成）とwoff2-rsのフォーク（2026-05-14作成）がある。自社の採用面の記事では、エンジニアがW3CのWeb Fonts WGに参加していると述べている。製品に使われているかは公表されていない"
    evidenceUrl: "https://github.com/studio-design"
sources:
  - label: "Studio株式会社: 会社概要（設立・資本金・従業員数・利用者数・公開サイト数・経営陣）"
    url: "https://studio.inc/company"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社: 10周年サイト（沿革・資金調達の履歴）"
    url: "https://studio.inc/10th"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 料金プラン"
    url: "https://studio.design/ja/pricing"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 利用規約（特定商取引法に基づく表記の税込表示を含む）"
    url: "https://studio.design/ja/terms"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社プレスリリース: リブランディングの発表（2024-10-01）"
    url: "https://studio.inc/pressrelease/rebranding_2024"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 料金プラン改定のお知らせ（2024-10-01）"
    url: "https://studio.design/ja/whats-new/pricing-renewal-2024"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社プレスリリース: Enterpriseプランのリリース（2023-11-13）"
    url: "https://studio.inc/pressrelease/enterprise-plan_release"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社プレスリリース: 米国子会社の設立（2022-12-13）"
    url: "https://studio.inc/pressrelease/studio-us_release"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社プレスリリース: 株式会社gazの吸収合併（2025-05-12）"
    url: "https://studio.inc/pressrelease/studio-gaz"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社プレスリリース: ISO/IEC 27001:2022認証の取得（2024-01-11）"
    url: "https://studio.inc/pressrelease/isms27001"
    accessedAt: "2026-11-02"
  - label: "Studio公式: ノーコードCMS 国内利用数No.1のお知らせ（2026-04-16）"
    url: "https://studio.design/ja/whats-new/no-code-cms-japan-no1"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: サイトデータのエクスポート"
    url: "https://help.studio.design/ja/articles/8860404"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: Studioサイトが公開できるサーバーについて"
    url: "https://help.studio.design/ja/articles/4185070"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: カート・決済機能について"
    url: "https://help.studio.design/ja/articles/4185079"
    accessedAt: "2026-11-02"
  - label: "Studio公式: デザインエディタ"
    url: "https://studio.design/ja/editor"
    accessedAt: "2026-11-02"
  - label: "Studio公式: Editor 5.0 正式リリース（2025-11-25）"
    url: "https://studio.design/ja/whats-new/editor5"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: StudioのAI機能"
    url: "https://help.studio.design/ja/articles/12910840"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社プレスリリース: Figma to STUDIOのリリース（2023-11-01）"
    url: "https://studio.inc/pressrelease/figma-to-studio_release"
    accessedAt: "2026-11-02"
  - label: "Studio公式: Enterprise向けページ"
    url: "https://studio.design/ja/lp/enterprise"
    accessedAt: "2026-11-02"
  - label: "Studio公式: モリサワ書体の追加（2026-03-24）"
    url: "https://studio.design/ja/whats-new/morisawa-fonts-202603"
    accessedAt: "2026-11-02"
  - label: "Studio公式: Embed Code AI（2026-01-27）"
    url: "https://studio.design/ja/whats-new/embedcodeai"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: FONTPLUSの提供終了について"
    url: "https://help.studio.design/ja/articles/14130523"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 公開サイト基盤の高速化の予告（2025-11-04）"
    url: "https://studio.design/ja/whats-new/site-speed-up"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 新しい公開サイト基盤の正式リリース（2026-06-11）"
    url: "https://studio.design/ja/whats-new/site-speed-up-release"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: Studioの公開サイト基盤"
    url: "https://help.studio.design/ja/articles/15444819"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 月間Visitor数の上限廃止（2026-07-02）"
    url: "https://studio.design/ja/whats-new/remove-visitor-limit"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: 同時アクセス数の上限と対応策"
    url: "https://help.studio.design/ja/articles/3559957"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: CloudflareのDNS Proxyモードについて"
    url: "https://help.studio.design/ja/articles/14075332"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: カスタムプロキシの概要と設定手順"
    url: "https://help.studio.design/ja/articles/9334656"
    accessedAt: "2026-11-02"
  - label: "Studio公式: Data Connect API（2026-04-20）"
    url: "https://studio.design/ja/whats-new/dataconnect-api"
    accessedAt: "2026-11-02"
  - label: "Studio公式: Studio.Assistant 正式リリース（2026-09-07）"
    url: "https://studio.design/ja/whats-new/assistant-official-release"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: Studio.Assistantのプランを管理する"
    url: "https://help.studio.design/ja/articles/16767384"
    accessedAt: "2026-11-02"
  - label: "Studio公式: Studio.Assistant よくある質問"
    url: "https://studio.design/ja/assistant/faq"
    accessedAt: "2026-11-02"
  - label: "Studio公式: Studio.Dropの発表（2026-09-01）"
    url: "https://studio.design/ja/whats-new/studiodrop"
    accessedAt: "2026-11-02"
  - label: "Studio.Drop 公式サイト"
    url: "https://drop.studio.design/"
    accessedAt: "2026-11-02"
  - label: "Studio公式: セキュリティ対策"
    url: "https://studio.design/ja/lp/security"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 不正アクセスに関するご案内（ポータル）"
    url: "https://studio.design/ja/security/notice/2026-10-incident"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 不正アクセスによる情報流出に関するお詫びとお願い（第一報・2026-10-16）"
    url: "https://studio.design/ja/whats-new/unauthorized-access-2026-10"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 個人情報保護委員会へのご報告についてのご案内（2026-10-17）"
    url: "https://studio.design/ja/whats-new/unauthorized-access-2026-10-form"
    accessedAt: "2026-11-02"
  - label: "Studio公式: 緊急メンテナンスのお知らせ（2026-10-21）"
    url: "https://studio.design/ja/whats-new/maintenance-20261021"
    accessedAt: "2026-11-02"
  - label: "Studio公式: CMSのAPIレスポンスへの最終更新者情報の混入（2026-02-20）"
    url: "https://studio.design/ja/whats-new/security-incident-report-202602"
    accessedAt: "2026-11-02"
  - label: "Studio採用情報: Application Engineer"
    url: "https://herp.careers/v1/studio/J3Bj14R2i3Ke"
    accessedAt: "2026-11-02"
  - label: "Studio採用情報: Frontend Engineer"
    url: "https://herp.careers/v1/studio/YiiIMnKiGCpS"
    accessedAt: "2026-11-02"
  - label: "Vue Fes Japan 2025: Studio株式会社のスポンサーページ"
    url: "https://vuefes.jp/2025/sponsors/studio"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社 採用サイト: W3Cの、中の人（Web Fonts WGへの参加）"
    url: "https://studio.inc/career/product/engineer/tech-interview/w3c-inside-1"
    accessedAt: "2026-11-02"
  - label: "GitHub: studio-design組織（Gesso、ift-encoderのフォークなど）"
    url: "https://github.com/studio-design"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: 有料テンプレートを販売する（還元率）"
    url: "https://help.studio.design/ja/articles/11755322"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: Studio Template Affiliate Program"
    url: "https://help.studio.design/ja/articles/11755633"
    accessedAt: "2026-11-02"
  - label: "Studio株式会社プレスリリース: STUDIO Storeの売買件数2,000件（2023-12-14）"
    url: "https://studio.inc/pressrelease/studiostore_2000"
    accessedAt: "2026-11-02"
  - label: "Studio公式: Studio.Works"
    url: "https://studio.design/ja/works"
    accessedAt: "2026-11-02"
  - label: "Studio公式: スタートアップ支援プログラム"
    url: "https://studio.design/ja/lp/startup"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: ワークスペースの料金プラン"
    url: "https://help.studio.design/ja/articles/9537342"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: Studioで利用できる決済方法"
    url: "https://help.studio.design/ja/articles/11112909"
    accessedAt: "2026-11-02"
  - label: "Studioヘルプ: プロジェクトプランの返金について"
    url: "https://help.studio.design/ja/articles/3548049"
    accessedAt: "2026-11-02"
---

海外のノーコードツールと比べるとき、Studioの特徴は機能の多さより「書き出せない」という一点にある。デザインの編集からCMS、フォーム、配信までを自社の中に置き、外へ持ち出す口を作っていない。利用者はサーバーのことを考えなくてよくなり、その代わりにサイトの土台をStudioに預ける。2026年のStudioに起きた出来事は、よいことも重いことも、ほぼすべてこの構造から説明できる。

## サービス解説

Studioは、コードを書かずにWebサイトをデザインし、そのまま公開・運用するプラットフォームだ。2024年10月のリブランディングまでは「STUDIO」と大文字で表記し、以後は日本で「Studio」、海外で「Studio.Design」の表記を使っている。非上場で売上は開示されていないが、公式ページの数字を時系列に並べると伸び方は追える。

:::fact
Studio株式会社の会社概要（2026-11-02閲覧）によれば、同社の設立は2016年4月、代表取締役CEOは石井穣氏、資本金は1億円（資本準備金を除く）、従業員は75名（2026年10月時点、役員と正社員）。利用者は90万人以上、公開サイトは25万件以上と掲載している。過去のプレスリリースの記載では、2023年8月時点で公開サイト約10万・ユーザー約35万人、2024年9月時点で公開サイト10万・ユーザー50万人超、従業員は2023年5月に30名、2024年3月に41名だった。
:::

:::fact
10周年サイトの沿革によれば、前身はオハコプロダクツ株式会社で、2017年にUXデザインツール「STUDIO β版」を出し、ドメインをstudio.designに改めてWebサイトデザインに対応した。同年にオハコからのMBOで独立し、シードラウンドでD4V等から5,000万円を調達。2019年にプレシリーズAで1.3億円、2022年に3.5億円のシリーズAを完了している。沿革に載るこの3回を足すと5.3億円だが、同社が累計額として公表した数字ではない。2020年にCMSとアニメーションを載せたSTUDIO 3.0を出し、2021年にはデジタル庁がWebサイトに採用したと記している。
:::

:::fact
2023年11月に大規模サイト向けのEnterpriseプランを出し、2024年1月にISO/IEC 27001:2022の認証を取得した。2022年12月には米国子会社STUDIO Technologies, Inc.を設立している。2025年5月には制作会社の株式会社gazを吸収合併し、gazの代表だった吉岡泰之氏がCOOに就いた。合併のプレスリリースによれば、gazはクライアントワークを終え、累計400件以上の制作実績とノウハウをプラットフォーム側へ移した。2026年4月には、東京商工リサーチの調査（調査時点は2025年12月末）で「ノーコードCMS 国内利用数No.1」になったと公表している。
:::

:::fact
公式ヘルプによれば、Studioにはサイトのデータを他のプラットフォームへ移すためのエクスポート機能がない。デザインデータ、ページ情報、公開サイトのHTML・CSS・JavaScript、CMSのデータは、いずれも書き出せない。書き出せるのはフォーム回答のCSVだ。公開先もStudioのサーバーに限られ、自社サーバーやレンタルサーバーでは公開できない。決済やカートの機能も提供しておらず、ECには外部サービスを埋め込む形になる。
:::

:::pull
出口を作らないことで、利用者からサーバーの仕事を丸ごと取り上げた。Studioの価値と重さは、同じ一点から生まれている。
:::

::scorecard

## UX分析

Studioの体験の芯は、CSSの言葉を前面に出さず、箱を積むようにレイアウトを組ませるところにある。同じノーコードでも、CSSの語彙をそのまま画面に並べるWebflowとは入口の高さが違う。

- **積み木の感覚で組む**。Enterprise向けページは操作を積み木に例え、Figma to STUDIOの発表は、Figmaのデザインデータを貼り付けると自動でボックスモデルに変換しレスポンシブ設定を行うと説明している。デザイナーがFigmaで描いたものを、実装者を挟まずに公開まで運べる流れだ。
- **日本語の書体を標準の道具にしている**。エディタのページは、モリサワのTypeSquare、Google Fonts、カスタムフォント、System Fontsを含む9,200種類以上のフォントを無料で使えると書く。2026年3月にはモリサワの書体が7ファミリー25フォント増えた。一方で書体は提供元の契約に左右される。FONTPLUSはMonotypeとの契約終了で2026年4月7日に提供を終え、翌日以降は設定済みの文字がシステムフォント等に置き換わると案内された。
- **運用する人のための入口がある**。レイアウトを崩さずに文字と画像だけを編集できるコンテンツ編集モード、リアルタイムの同時編集、ワンクリックで戻せるバージョン管理が並ぶ。バージョンの保持はFreeの1日からBusiness Plusの360日まで、料金で変わる。
- **行き止まりは先に確認する必要がある**。カートと決済はなく、書き出しもない。Cloudflareのプロキシを通す構成は標準機能の範囲外で、独自のリバースプロキシを使うにはBusiness Plus以上で月39,800円のカスタムプロキシが要る。有料プランは原則として返金がない。始めやすさと、途中で構成を変えにくいことが同居している。

AIは「任せる」より「手元を速くする」形で入っている。

:::fact
2025年11月25日に正式公開されたEditor 5.0は、画像を自然言語で編集するImage AI、文章を生成・編集するText AI、レスポンシブ設定を補完するAuto Responsive、レイヤー名を整えるLayer Renameの4つを載せた。ヘルプには、タイトルと説明文を生成するSEO Writing Assist、2026年1月に加わった埋め込みコード用のEmbed Code AIも並ぶ。実行回数には上限があり、超えると一定期間使えなくなる。
:::

:::fact
別売りのStudio.Assistantは2025年12月23日にβ版を出し、2026年9月7日に正式版になった。ヒアリング、サイトマップ、ワイヤーフレーム、ドラフトデザイン、文言調整までを扱い、1度に最大10ページを生成してStudioへ書き出す。FAQは、AIエージェントのように業務を自律的に完遂するものではなく、人がGUIで調整する前提の道具だと説明している。生成はすべてStudioが権利を持つセクションの組み合わせと調整で行い、写真は商用利用可能なフォトストックのAPIを使い、作成したサイトをAIの学習には使わないという。
:::

## 技術構成

::techstack

採用サイトにエンジニアの対談連載はあるが、構成を詳しく説明した公式の技術ブログは見当たらなかった。ただ、採用情報、お知らせ、GitHubの公開リポジトリ、応答ヘッダーを合わせると、構成の輪郭はかなり見える。

:::fact
Application Engineerの採用情報は、開発環境をサーバサイドがPHP・Laravel・Node.js・Nuxt.js、フロントがTypeScript・Vue.js・HTML・Sass・CSS、インフラがGCP（Firebase、Kubernetes）と書く。Frontend Engineerの募集には、サーバーサイドにBun、インフラにGoogle CloudとCloudflareが並ぶ。Vue Fes Japan 2025の登壇概要によれば、同社はVue.jsを1系から8年間使い続けてきた。GitHubのstudio-design組織は、PHP向けのOpenAPI契約テストツールGessoを公開している。
:::

:::fact
公式のセキュリティページによれば、データはすべてGoogle Cloud Platformの施設内で管理され、サービスは東京とアイオワの複数リージョンでグローバルロードバランシング構成をとる。WAFにはGoogle Cloud Armorを使い、通信はTLS 1.3以上を強制する。マルチテナント環境ではデータを論理的に区分けし、Enterpriseプランでは基盤レベルで分離するとしている。
:::

2026年の最大の技術的な出来事は、公開サイト基盤の作り直しだ。

:::fact
2025年11月の予告によれば、Studioは独自のレンダリングエンジンを新たに開発し、JavaScriptの読み込みを最小限に減らし、公開サイトをSPAからMPAへ切り替え、トグルやモーダルを標準のHTMLで実装し直した。これまでの7年間で積み重ねた機能を作り直したと書いている。2026年1月にBeta版、6月11日に正式版となり、以後の新規プロジェクトには新基盤が自動で適用される。ヘルプによれば、新基盤はサーバー側で生成したHTMLをCDNにキャッシュして配り、公開やCMS更新で古いキャッシュを捨てる。
:::

:::fact
同社の検証では、テンプレートをもとに実装を調整したサイトのモバイルのLighthouseスコアが旧基盤の63から100になり、CMSを使う場合でも98前後だった。Studio Blogでは検索流入からの1日あたりの登録数が約84%増え、その他のページでは平均掲載順位が40位から25位に上がったという。同社は、これらは自社サイトとテンプレートでの検証で、すべてのプロジェクトで同じ結果を保証するものではないと断っている。旧基盤では読み込みが難しかったNotebookLMなどのAIツールが内容を読めるようになったことも確認したとしている。
:::

:::fact
既存のプロジェクトは自動では切り替わらない。切り替えると、独自のCSSやJavaScript、SPA向けのタグ設定（Googleタグマネージャーのトリガーなど）が想定どおり動かない場合がある。新基盤から旧基盤へ戻す機能と旧基盤のサポート窓口は2027年1月末を目処に終わる予定で、それ以後も旧基盤のセキュリティ更新は続けるが、新機能の一部は新基盤だけで提供するという。
:::

:::guess
当サイトの観測（2026-11-02）では、studio.designとstudio.incの応答に x-hrc- で始まるヘッダーが出て、studio.designのHTMLにはgenerator「Studio.Design.HRC」がある。一方、*.studio.siteの公開サイトの中には x-powered-by: Nuxt と s-maxage=3 を返すものがあり、新旧の基盤が並走している様子がうかがえる。新しいレンダラーはNuxtを離れた独自実装で、採用情報のBunはその実行環境の候補と推測される。また、GitHubにはW3Cのift-encoderのフォークがあり、同社のエンジニアがWeb Fonts WGに参加している。文字数の多い日本語フォントを分割して必要な分だけ配る仕組みを、予告に出てくる「独自のフォント配信基盤」の延長で検証しているとみられるが、製品への採用は公表されていない。
:::

書き出せない設計は、基盤を丸ごと差し替える自由も生んだ。公開サイトのHTMLを利用者が持ち出さない前提なら、レンダラーは会社の判断で作り直せる。同じ集約が、2026年10月には逆向きに働いた。

:::fact
Studioの第一報（2026年10月16日）とポータルによれば、2026年9月30日から10月1日（日本時間）にかけて、第三者がStudioの一部機能の脆弱性を悪用して同社のクラウド環境に不正アクセスし、環境内のデータを外部から取得できる状態にしていた。この状態は10月14日に同社が対処するまで続いた。10月13日に社内の調査で確認し、13日から14日に脆弱性の修正と経路の遮断を終えたという。実際に取得された事実は確認できていないが、取得されたものとみなして対応しているとしている。
:::

:::fact
流出した可能性があるとされたのは、登録している全利用者について、アカウント情報（ユーザー名、メールアドレス、ハッシュ化されたパスワードなど）、デザインエディタとCMSの内容、フォームに送信された内容、ライブプレビューのURL、API連携に登録した外部サービスのAPIキーやトークン、パスワード保護ページのパスワード、Googleスプレッドシート連携の認証情報、カスタムプロキシのプロキシキーなどだ。暗号化していたものも、復号に必要な鍵が同じ不正アクセスで読み出されたため、内容を知られた可能性があると説明している。同社の説明では、第三者が取得した認証情報には書き換えの権限も含まれていたが、操作の記録の調査では利用者のデータを書き換えたり削除したりした記録はなかった。2026-11-02閲覧時点で、対象件数、二次被害の調査結果、原因と再発防止策は続報待ちで、原因調査は外部の専門機関に依頼する調整中とされている。
:::

:::fact
フォームの回答について、同社は送信者本人へ直接通知せず、サイトの運営者から案内してもらう形をとっている。Studioは運営者からの委託を受けて情報を保管している立場で、法律の仕組みとしても運営者から本人へ知らせる流れになるという説明だ。個人情報保護委員会への報告は、同委員会と調整した連名の方式を用意し、受付は11月上旬の開始予定としている。10月21日にはPHPの重大な脆弱性の公表予告を受けて緊急メンテナンスを実施した。事前の案内と異なり公開サイトのフォーム送信なども22:26から翌4:05まで止まったが、攻撃に使われうる通信を止めるための判断で、被害は確認していないと説明している。これとは別に、2026年2月には、CMSのAPIレスポンスに編集者のメールアドレスなどが2024年12月13日から2026年2月17日まで含まれていたことも公表している。
:::

:::guess
ここから読み取れるのは、特定の失敗の話より、集約の構造の話だとみられる。利用者がサーバーを持たないということは、外部サービスのAPIキーも、問い合わせフォームの回答も、すべて一つの環境に集まるということでもある。公式のセキュリティページは機密情報の暗号化を説明しているが、鍵と暗号文が同じ経路で読める状態になれば、暗号化だけでは守りきれない。原因が公表されていない現時点で、設計の良し悪しを判断することはできない。一方で、段階的に更新される公開の説明、機能別の個別通知、連名報告の調整を見ると、同社が利用者の手間を減らそうとしていることも読み取れる。サイトの運営者にとっては、フォームで個人情報を集めるなら、委託先としての管理を自分の仕事として考える必要があると考えられる。
:::

## ビジネスモデル

Studioの収益の中心は、サイトごとのプロジェクトプランだ。料金は個人向けの数百円から始まり、法人向けの機能で段階的に上がる。

:::fact
公式の料金ページ（2026-11-02閲覧・利用規約の表記では表示価格は税込）によれば、料金はサイト単位で、次の6段階がある。

| プラン | 年払いの月額 | 月払い | ページ数 | CMSモデル | 公開CMSアイテム | 主な違い |
| --- | --- | --- | --- | --- | --- | --- |
| Free | 0円 | 0円 | 50 | 3 | 100 | フォーム回答の閲覧100件、バージョン管理1日 |
| Mini | 590円 | 1,290円 | 2 + 404ページ | 3 | 100 | 独自ドメインでの公開、GA・GTM連携 |
| Personal | 1,190円 | 1,720円 | 150 | 5 | 1,000 | サイト全体のパスワード制限、回答1,000件、30日 |
| Business | 3,980円 | 5,460円 | 300 | 10 | 5,000 | Data Connect API 1件、リダイレクト、120日 |
| Business Plus | 9,980円 | 12,900円 | 300 | 30 | 15,000 | 同時接続1,000件保証、アクティビティログ、優先サポート、360日 |
| Enterprise | 問い合わせ | 問い合わせ | 300〜 | 300〜 | 300〜 | 公開サイトSLA 99.9%、IPアドレス制限、銀行振込 |

Enterpriseの支払いは銀行振込（前払い）のみで、それ以外はカード決済だ。アドオンのカスタムプロキシは月39,800円。チームで使うワークスペースのTeamプランは3シート込みで月払い5,940円（年払い換算で月4,350円）、追加メンバーは1人月1,980円（年払い換算で月1,450円）。創業3年以内の企業が審査を通れば、Business以上が50%オフになるスタートアップ支援プログラムもある。
:::

:::fact
2024年12月の料金改定は、Starter・CMS・Businessの3プランをMini、Personal、Business、Business Plusに組み替え、課金の軸に「ページ数」と「CMSモデル数」の上限を加えた。このとき同社は、エディタのデータ容量には内部的な上限があり、作り方によっては80ページ未満でも警告が出ると説明し、内部を見直して上限を明示すると書いている。アクセス数の上限はPVからVisitorへ変え、さらに2026年7月2日に全プランで月間Visitor数の上限そのものを廃止した。理由には、AIやクローラーによる急なアクセス増を挙げている。
:::

:::guess
アクセス量の上限を外したことで、Studioの課金の軸は「どれだけ見られたか」から「どれだけの機能と統制が要るか」へ移ったとみられる。AIのクローラーで利用者の請求や上限が揺れる状況を避けつつ、法人が必要とする監査ログ、SLA、同時接続の保証、IP制限を上位プランに置く形だ。CDNキャッシュ中心の新基盤でアクセスあたりの原価を下げられたことが、この判断を支えた可能性がある。
:::

2つ目の収益の柱に育てようとしているのがAIの別売りだ。

:::fact
Studio.AssistantはStudioの有料アドオンで、ヘルプ（表示価格は税込）によれば、Starterが月払い24,800円（年払いは月19,800円）、Proが月払い99,800円（年払いは月74,800円）で、ユーザー単位の契約となる。FAQは、制作できるサイト数の目安を1サイト10ページ規模でStarterが3サイト程度、Proが20サイト程度としている。さらに2026年8月に発表し、9月1日に事前登録を始めたStudio.Dropは、稼働中のサイトをURLやファイルのアップロードで取り込み、日本語の指示で編集・運用するサービスで、ClaudeやCodexとMCPで接続できるとうたう。提供は招待制のクローズドβで、料金は確認できなかった。
:::

:::guess
Assistantの価格は、個人のサイト代ではなく制作会社の人件費と比べられる水準だ。最上位の公開価格のBusiness Plusよりも高い。AIは「個人にサイトを作らせる」より「受託の初期工程を圧縮する」用途で売るという判断が読める。Studio.Dropは逆に、Studioの外で作られたサイトを受け入れる入口だ。書き出しのない会社が、取り込みの口を大きく開ける形になる。Dropで取り込んだサイトを外へ戻せるかどうかは、確認した範囲では説明されていない。
:::

最後の柱は、Studioの周りで稼ぐ人たちの経済圏だ。

:::fact
Studio Storeでは、有料テンプレートの売上の100%が出品者の報酬になる（ヘルプの記載、条件は将来変更の可能性あり。利用規約には購入者が所定の手数料を合わせて支払う旨の定めもある）。無料テンプレートは、そこから作られたプロジェクトが12ヶ月以内に年払いの有料プランへ上がると、初年度の料金の50%が出品者に支払われる（Studio Template Affiliate Program）。Storeは2023年3月に始まり、同年12月に売買件数2,000件、流通総額約3,000万円を公表した。制作会社や個人の認定プログラムStudio.Expertsは、Studio.Worksのページで230以上が掲載され、案件のマッチング手数料は無料としている。
:::

:::guess
テンプレートの売上をほぼ渡し、無料テンプレートには初年度料金の半分を払う。これはストア手数料で稼ぐ設計ではなく、月額課金の顧客を連れてくる人に顧客獲得コストを払う設計とみられる。gazの吸収合併で制作の現場を社内に取り込んだことも、同じ方向にある。書き出しがないので、一度Studioで納品されたサイトは原則としてStudioの上で更新され続ける。制作者が増えるほど月額課金が積み上がる構造だと考えられる。だからこそ、10月の不正アクセスの対応の評価は、エンドユーザーだけでなく、顧客に説明する立場の制作者たちの判断にも直結すると推測される。
:::

出口を作らず、サーバーの仕事を引き受ける。その約束のうえで、Studioは基盤を作り替え、アクセス上限を外し、AIで入口を広げてきた。同じ約束は、預かったものが一か所にあることの責任も意味する。続報で示される原因と再発防止策が、この会社の次の10年を読む最初の材料になる。
