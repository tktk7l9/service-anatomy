---
service: "Firebase"
title: "料金表の行末は「Then Google Cloud pricing」、Firestoreの読み取りに上限は掛けられず、2026年だけで4製品に終了日 — Google Cloudの受付になったFirebaseを解剖する"
description: "Firebaseのプロジェクトは裏側ではすべてGoogle Cloudプロジェクトで、無料のSparkから従量のBlazeへの切り替えは、Cloud Billingアカウントを紐づけることと同じ意味だ。Firestoreの東京の単価は10万読み取り0.038ドル。2026年9月14日に公開プレビューになった利用額の上限（spend caps）はAI Logic・App Hosting・Cloud Functions・Extensionsが対象で、Firestore・Realtime Database・Cloud Storageには掛けられない。Data ConnectはSQL Connectに改名され、Firebase Studio、Extensions、Firebase ML、Test Labには2027年の終了日が付いた。料金ページ、ドキュメント、リリースノート、公式ブログ、当サイトの実観測から解剖する。"
lead: "Firebaseの料金ページで従量プランの列を読んでいくと、同じ言葉に何度も行き当たる。「Then Google Cloud pricing」。公式ドキュメントも「すべてのFirebaseプロジェクトは裏側では実はGoogle Cloudプロジェクト」と書いている。2014年にGoogleに加わったリアルタイムデータベースの会社は、いまはGoogle Cloudの部品を、アプリ開発者が使える形にして渡す受付になった。2026年には周辺の製品に次々と終了日が付き、請求を止める仕組みがようやく入った。受付の外側で何が動いているのかを解剖する。"
category: dev-tool
tags: [baas, backend, database, nosql, google-cloud, serverless, ai-agent, gemini]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
serviceUrl: "https://firebase.google.com/"
# Affiliate link placeholder: no public affiliate program for Firebase was found (checked
# 2026-11-02 on firebase.google.com/pricing and the support FAQ). Leave this block commented out
# unless the owner finds a program. Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<firebase-referral-link>"
#   program: "Firebase"
vendor: "Google LLC"
origin: "US"
heroTheme: "firebase"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
expires:
  - date: "2026-11-02"
    claim: "Firebase AI Logicのリクエストに対するApp Checkの自動適用が2026年11月2日に予告どおり始まったか、延期の扱いが変わっていないか"
  - date: "2027-02-01"
    claim: "spend capsが公開プレビューのままか、対象サービスにFirestore・Realtime Database・Cloud Storageが加わっていないか"
  - date: "2027-03-22"
    claim: "Firebase Studioの終了日（2027年3月22日）に変更がないか、終了後の記述に書き換える"
  - date: "2027-03-31"
    claim: "Firebase Extensionsの終了日（2027年3月31日）に変更がないか、終了後の記述に書き換える"
  - date: "2027-06-15"
    claim: "Firebase MLの終了日（2027年6月15日）に変更がないか、終了後の記述に書き換える"
  - date: "2027-09-30"
    claim: "Firebase Test Labの終了日（2027年9月30日）に変更がないか、終了後の記述に書き換える"
techStack:
  - layer: "土台（プロジェクトと請求）"
    name: "Google Cloud projects + Cloud Billing"
    confidence: confirmed
    evidence: "公式ドキュメント「Firebase pricing plans」に、すべてのFirebaseプロジェクトは裏側では実はGoogle Cloudプロジェクトで、請求はFirebaseとGoogle Cloudで共有され、同じプロジェクトを両方のコンソールで見られると明記。Blazeへのアップグレードは「あらゆる意味で、裏側のGoogle CloudプロジェクトにCloud Billingアカウントを紐づけること」と説明している"
    evidenceUrl: "https://firebase.google.com/docs/projects/billing/firebase-pricing-plans"
  - layer: "ドキュメントDB"
    name: "Cloud Firestore (Standard / Enterprise, MongoDB compatibility)"
    confidence: confirmed
    evidence: "公式ドキュメント「Editions」に、Standardはコア操作のみ、Enterpriseは高度なクエリエンジンを持ち、Native modeとFirestore with MongoDB compatibilityの2つのモードを選べると明記。インデックスはStandardでは必須、Enterpriseでは任意"
    evidenceUrl: "https://firebase.google.com/docs/firestore/editions"
  - layer: "JSON DB（元祖）"
    name: "Firebase Realtime Database"
    confidence: confirmed
    evidence: "公式ドキュメントの比較ページに「古典的なFirebaseのJSONデータベース」と書かれ、データは1つの大きなJSONツリーとして保存し、1データベースあたり約20万同時接続・毎秒1,000書き込みまでで、その先はシャーディングが必要と明記"
    evidenceUrl: "https://firebase.google.com/docs/firestore/rtdb-vs-firestore"
  - layer: "リレーショナルDB"
    name: "SQL Connect (GraphQL) + Cloud SQL for PostgreSQL"
    confidence: confirmed
    evidence: "公式ドキュメントに、Cloud SQLで動くフルマネージドのPostgreSQLを使い、GraphQLでスキーマ・クエリ・ミューテーションを管理し、型付きのSDKを生成すると明記。リリースノートは2026年4月22日に「Firebase Data ConnectはFirebase SQL Connectになった。APIは変わらない」と記す"
    evidenceUrl: "https://firebase.google.com/docs/sql-connect"
  - layer: "Webアプリ配信"
    name: "App Hosting (Cloud Build + Cloud Run + Cloud CDN)"
    confidence: confirmed
    evidence: "公式ドキュメントに、アプリはCloud Buildで作られ、Cloud Runで配信され、Cloud CDNでキャッシュされ、APIキーはCloud Secret Managerで守ると明記。コンテナはArtifact Registryに置かれる。利用規約はFirebaseではなくGoogle Cloudのものが適用される"
    evidenceUrl: "https://firebase.google.com/docs/app-hosting/about-app-hosting"
  - layer: "サーバーレス関数"
    name: "Cloud Functions for Firebase (on Cloud Run functions)"
    confidence: confirmed
    evidence: "公式FAQに、Cloud Functions for Firebaseは第1世代・第2世代ともCloud Run functionsに依存し、Cloud Run functionsのspend capが実質的にCloud Functions for Firebaseのspend capになると明記。課金アカウントが要る理由としてCloud Buildなど有料のGoogleサービスへの依存を挙げる"
    evidenceUrl: "https://firebase.google.com/docs/functions/faq-and-troubleshooting"
  - layer: "AI機能の入口"
    name: "Firebase AI Logic (client SDKs + proxy) + Gemini API"
    confidence: confirmed
    evidence: "公式ドキュメントに、Swift・Kotlin/Java・JavaScript・Dart・UnityのクライアントSDKとプロキシサービスから成り、プロキシがクライアントとGemini APIの提供元（Gemini Developer API または Agent Platform Gemini API）の間のゲートウェイになると明記"
    evidenceUrl: "https://firebase.google.com/docs/ai-logic"
  - layer: "AIエージェント向けの入口"
    name: "Firebase MCP server + agent skills + Firebase CLI"
    confidence: confirmed
    evidence: "公式ドキュメントに、ローカルで動くMCPサーバーがAntigravity、Claude Code、Cursorなどから利用でき、agent skillsはAIアシスタントにFirebaseの手順を教えるパッケージだと明記。公式ブログ（2026-09-28）はFirebaseのプラグインがCodexでも使えるようになり、skills・MCPサーバー・CLIをまとめて渡すと書く"
    evidenceUrl: "https://firebase.google.com/docs/ai-assistance/mcp-server"
  - layer: "公開サイト"
    name: "Google Frontend (firebase.google.com) / Fastly (firebase.blog)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、firebase.google.com は server: Google Frontend を返した。firebase.blog は x-served-by: cache-nrt-… と x-timer を返し、この形式はFastlyのキャッシュの応答によくみられるものだが、Firebase側の説明は確認していない"
sources:
  - label: "Firebase公式: Pricing（プラン・製品別の無料枠と単価）"
    url: "https://firebase.google.com/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase pricing plans"
    url: "https://firebase.google.com/docs/projects/billing/firebase-pricing-plans"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Avoid surprise bills"
    url: "https://firebase.google.com/docs/projects/billing/avoid-surprise-bills"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Spend caps"
    url: "https://firebase.google.com/docs/projects/billing/spend-caps"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ブログ: Introducing Firebase spend caps（2026-09-14）"
    url: "https://firebase.blog/posts/2026/09/firebase-spend-caps"
    accessedAt: "2026-11-02"
  - label: "Firebase公式: FAQ（料金・上限・サポート）"
    url: "https://firebase.google.com/support/faq"
    accessedAt: "2026-11-02"
  - label: "Firebase公式: Release Notes"
    url: "https://firebase.google.com/support/releases"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Understand Cloud Firestore billing（Firestoreの課金）"
    url: "https://firebase.google.com/docs/firestore/pricing"
    accessedAt: "2026-11-02"
  - label: "Google Cloud: Firestore pricing（Standard editionのロケーション別単価）"
    url: "https://cloud.google.com/firestore/pricing"
    accessedAt: "2026-11-02"
  - label: "Google Cloud: Firestore Enterprise edition pricing"
    url: "https://cloud.google.com/firestore/enterprise/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Cloud Firestore editions"
    url: "https://firebase.google.com/docs/firestore/editions"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Choose a database（FirestoreとRealtime Databaseの比較）"
    url: "https://firebase.google.com/docs/firestore/rtdb-vs-firestore"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Realtime Databaseの課金"
    url: "https://firebase.google.com/docs/database/usage/billing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase SQL Connect"
    url: "https://firebase.google.com/docs/sql-connect"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: SQL Connect pricing"
    url: "https://firebase.google.com/docs/sql-connect/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: App Hosting"
    url: "https://firebase.google.com/docs/app-hosting"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: About App Hosting（構成とリージョン）"
    url: "https://firebase.google.com/docs/app-hosting/about-app-hosting"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: App Hosting costs"
    url: "https://firebase.google.com/docs/app-hosting/costs"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: App HostingとFirebase Hostingなどの製品比較"
    url: "https://firebase.google.com/docs/app-hosting/product-comparison"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Cloud Storageの変更に関するFAQ（2024年9月発表）"
    url: "https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Cloud Functions FAQ"
    url: "https://firebase.google.com/docs/functions/faq-and-troubleshooting"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Cloud Functions locations"
    url: "https://firebase.google.com/docs/functions/locations"
    accessedAt: "2026-11-02"
  - label: "Google Cloud: Identity Platform pricing（SMSの国別単価）"
    url: "https://cloud.google.com/identity-platform/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase AI Logic"
    url: "https://firebase.google.com/docs/ai-logic"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase AI Logicの料金"
    url: "https://firebase.google.com/docs/ai-logic/pricing"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase AI Logic FAQ（App Checkの自動適用）"
    url: "https://firebase.google.com/docs/ai-logic/faq-and-troubleshooting"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Develop with AI assistance"
    url: "https://firebase.google.com/docs/ai-assistance"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase MCP server"
    url: "https://firebase.google.com/docs/ai-assistance/mcp-server"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase agent skills"
    url: "https://firebase.google.com/docs/ai-assistance/agent-skills"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ブログ: The Firebase plugin is now available in Codex（2026-09-28）"
    url: "https://firebase.blog/posts/2026/09/firebase-plugin-for-codex"
    accessedAt: "2026-11-02"
  - label: "Genkit公式サイト"
    url: "https://genkit.dev/"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase Studio"
    url: "https://firebase.google.com/docs/studio"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase Studioからの移行"
    url: "https://firebase.google.com/docs/studio/migrating-project"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase Extensions Deprecation FAQ"
    url: "https://firebase.google.com/docs/extensions/faq-and-troubleshooting"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase Extensions"
    url: "https://firebase.google.com/docs/extensions"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase Test Lab Deprecation FAQ"
    url: "https://firebase.google.com/docs/test-lab/deprecation-faq"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ドキュメント: Firebase ML"
    url: "https://firebase.google.com/docs/ml"
    accessedAt: "2026-11-02"
  - label: "Firebase公式: Dynamic Links Deprecation FAQ"
    url: "https://firebase.google.com/support/dynamic-links-faq"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ブログ: Firebase is Joining Google!（2014-10-21）"
    url: "https://firebase.googleblog.com/2014/10/firebase-is-joining-google.html"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ブログ: Firebase expands to become a unified app platform（2016-05-18）"
    url: "https://firebase.googleblog.com/2016/05/firebase-expands-to-become-unified-app-platform.html"
    accessedAt: "2026-11-02"
  - label: "Firebase公式ブログ: Introducing Cloud Firestore（2017-10-03）"
    url: "https://firebase.googleblog.com/2017/10/introducing-cloud-firestore.html"
    accessedAt: "2026-11-02"
  - label: "GitHub: genkit-ai/genkit"
    url: "https://github.com/genkit-ai/genkit"
    accessedAt: "2026-11-02"
---

Firebaseは、アプリのバックエンドに必要な部品を、サーバーを持たずに使えるようにするGoogleのプラットフォームだ。認証、データベース、ファイル保管、関数、配信に加えて、Crashlyticsやプッシュ通知まで同じコンソールに並ぶ。[Supabase](/ja/articles/supabase)が既製のOSSを束ねて「Firebaseの代替」を名乗るのに対して、Firebaseが束ねているのはGoogle Cloudの部品だ。この記事は、その束ね方が料金表と請求にどう現れているかを、2026年11月2日に読み直した公式ページから見ていく。当サイトはFirebaseを運用した体験を書いているのではなく、公開されている料金表、ドキュメント、リリースノートを読み合わせている。

## サービス解説

Firebaseの出発点はリアルタイムデータベースだった。2014年10月21日の公式ブログで共同創業者のJames Tamplin氏は、3年間で11万人の開発者に使われる製品になったとしてGoogleへの合流を発表し、理由の1つに「FirebaseとGoogle Cloud Platformのチームは製品も目的も補完し合う」ことを挙げた。「Firebaseの開発者は強力なクラウド基盤を使えるようになり、Cloud Platformの顧客はFirebaseの素早い開発手段を使えるようになる」という書き方だ。買収額は公式ブログには書かれていない。

:::fact
2016年5月18日の公式ブログによれば、合流から18カ月で開発者は11万人から45万人超に増え、この日にFirebaseは「Android、iOS、モバイルWebの統合アプリ基盤」へ拡張すると発表した。掲げた原則の1つが「1つのSDK、1つのコンソール、ドキュメントとサポートの1つの窓口」だ。2017年10月3日にはCloud Firestoreがベータとして公開された。2025年4月9日のリリースノートはApp HostingとData Connect（現SQL Connect）の正式版を記す。公式ドキュメントはFirestoreについて「60万人を超える開発者に信頼されている」と書く。Firebase全体の開発者数や売上は、今回確認した公式ページにはなかった。
:::

いまのプランは2つしかない。無料のSparkは支払い方法の登録が要らない。従量のBlazeはCloud Billingアカウントを紐づけるプランで、Sparkの無料枠を含みつつ、超えた分を払う。月額の基本料金はない。

:::fact
公式の料金ページとドキュメント（2026-11-02閲覧）によれば、A/B Testing、App Check、App Distribution、大半の認証、Cloud Messaging、Crashlytics、In-App Messaging、Performance Monitoringはどちらのプランでも無料で、「数百万ユーザーがいる本番アプリでも」無料だと書かれている。金額が動くのは次の製品だ。料金はドル表記で、ドル以外で支払う場合はCloud Platform SKUの現地通貨価格が適用されると案内されている。税の扱いは料金ページでは確認できなかった。

| 製品 | Spark（無料） | Blaze（無料枠のあとに従量） |
| --- | --- | --- |
| 認証 | 5万MAU | 5万MAUまで無料、その先はGoogle Cloudの料金 |
| Firestore（Standard） | 保存1GiB、読み取り5万/日、書き込み2万/日、削除2万/日、転送10GiB/月 | 同じ無料枠、その先はGoogle Cloudの料金 |
| Realtime Database | 同時接続100、保存1GB、転送10GB/月 | 同時接続は1データベース20万、保存1GB超は1GBあたり5ドル、転送は1日360MB超で1GBあたり1ドル |
| Cloud Storage | 利用不可（2026-02-03以降） | 新形式のバケットは5GB月、ダウンロード100GB/月、アップロード5,000回/月、ダウンロード5万回/月まで無料。無料枠は us-central1、us-west1、us-east1 のバケットに限る |
| Cloud Functions | 利用不可 | 200万回/月、40万GB秒/月、20万CPU秒/月まで無料。呼び出しは100万回0.40ドル |
| App Hosting | 利用不可 | 転送10GiB/月まで無料、その先はキャッシュ済み1GiB 0.15ドル、未キャッシュ1GiB 0.20ドル。ほかにCloud Runなどの料金 |
| Hosting | 保存10GB、転送360MB/日 | 同じ無料枠、その先は保存1GB 0.026ドル、転送1GB 0.15ドル |
| SQL Connect | 90日の試用（1日約8,000回、330MiB） | 25万回/月まで無料、その先は100万回0.90ドル。ほかにCloud SQL（月9.37ドルから）。3カ月の無料試用あり |

Firestoreの単価はロケーションで変わる。東京（asia-northeast1）のStandard editionは、10万ドキュメントあたり読み取り0.038ドル、書き込み0.115ドル、削除0.013ドルで、Iowaの0.03ドル、0.09ドル、0.01ドルより高い。電話認証はSMS1通ごとの課金で、Identity Platformの料金表では日本宛てが0.03ドル、1日の最初の10通は請求されない。Google Cloudの新規利用者は、条件を満たせば300ドルのクレジットを使える。
:::

:::fact
公式の説明は率直だ。ドキュメントは「すべてのFirebaseプロジェクトは裏側では実はGoogle Cloudプロジェクト」で、Blazeへのアップグレードは「あらゆる意味で、裏側のGoogle CloudプロジェクトにCloud Billingアカウントを紐づけること」と書く。Google Cloudコンソールで請求先アカウントを紐づける、Pub/SubやCloud Runなどを同じプロジェクトで使う、といった操作でもBlazeに自動で切り替わる。逆に請求先アカウントを外すとSparkに戻り、既定以外のRealtime DatabaseインスタンスやCloud Storageバケットには、データは残るがアクセスできなくなる。
:::

:::pull
Firebaseの従量プランは、Firebaseの料金プランというより、Google Cloudの請求先を紐づけたという状態の名前だ。
:::

::scorecard

## UX分析

FirebaseのUXは、開発の初日がいちばん軽い。支払い方法なしでプロジェクトを作り、クライアントSDKからデータベースに直接書き、ログイン画面をつなげられる。重さは、その後の決定に順番に現れる。

- **Sparkの範囲が静かに狭まった**。Cloud Storageは2024年9月に変更が発表され、2026年2月3日からBlazeが必須になった。Sparkのプロジェクトはバケットにアクセスできず、APIは402または403を返し、コンソールではアップグレードの案内へ転送される。Cloud FunctionsとApp HostingもBlazeが前提なので、カードなしで作れるのはデータベース、認証、静的な配信の範囲になった。写真を1枚アップロードする機能を足すと、カード登録が要る。
- **無料枠の周期が製品ごとに違う**。Firestoreは毎日リセットされ（太平洋時間の深夜頃）、Cloud Functionsは毎月リセットされる。Firestoreの無料枠は1プロジェクト1データベースだけ。Cloud Storageの新形式バケットの無料枠は米国の3リージョンに限られる。FAQは、Sparkの上限を超えるとアプリはその暦月の残りの間止まると書く。止まる代わりに請求は来ない。Blazeはその逆で、請求は来るが止まらない。
- **読み取りの単位は、人の直感と合わない**。リアルタイムのリスナーは、結果に入ったドキュメントが追加・更新されるたびに1読み取り。オフライン永続化が有効でも30分を超えて切断されると、新しいクエリとして全件が課金される。`offset` はスキップした分も読み取りとして課金される（`offset` が10で結果が1件なら11読み取り）。結果が0件のクエリにも最低1読み取りがかかる。Security Rulesが `get()` で別のドキュメントを読めば、その分も読み取りになる。
- **失敗の代表例が公式に書いてある**。「想定外の支出」のページは、よくある原因として「数百万件を返すクエリに `limit` を付け忘れる」「Cloud Functionsの組み合わせが過剰なファンアウトや無限ループを起こす」を挙げ、まずLocal Emulator Suiteでの検証を勧める。Realtime Databaseの課金ページは、セキュリティルールで拒否された操作も、コンソールからの読み書きも、課金対象になると書く。
- **データの置き場を選ぶと、配信の場所が選べないことがある**。Firestoreは東京と大阪を選べ、Cloud Functionsも asia-northeast1 に置ける。一方、App Hostingのリージョンは us-central1、us-east4、us-east5、asia-east1（台湾）、asia-southeast1（シンガポール）、europe-west4 の6つで、日本はない。CDNは世界に分散しているが、キャッシュされない内容は選んだリージョンから配信される。Firestoreを東京に置いてApp Hostingを台湾に置く構成では、サーバー描画のたびに国境を越える。
- **エンタープライズ向けの契約は標準では用意されていない**。FAQは「Blazeはあらゆる規模の企業に適している」としつつ、「エンタープライズ向けの契約・料金・サポート、専用の基盤は提供していない」と書く。無料プランを含めて、米国太平洋時間の営業時間内にFirebaseのスタッフからメールのサポートが受けられる。

全体として、Firebaseは「小さく始める」体験を長年磨いてきた。そのぶん、規模が変わる瞬間のUXはGoogle Cloudの画面と語彙に引き渡される。予算はCloud Billingで設定し、上限の解除はCloudコンソールへのリンクから行い、単価はGoogle Cloudの料金ページへ飛ぶ。始める人と払う人が同じ個人開発者のとき、この段差はいちばん大きく見える。

## 技術構成

::techstack

データベースが3つあるのは、Firebaseの歴史がそのまま製品表に残っているからだ。公式の比較ページは新規の利用者にFirestoreから始めるよう勧め、Realtime Databaseを「古典的なFirebaseのJSONデータベース」と呼ぶ。それでも終了の予定は書かれていない。

:::fact
公式ドキュメント（2026-11-02閲覧）から、3つのデータベースを並べる。

| 項目 | Cloud Firestore | Realtime Database | SQL Connect |
| --- | --- | --- | --- |
| データモデル | コレクションとドキュメント | 1つの大きなJSONツリー | PostgreSQLのテーブル（GraphQLで定義） |
| クエリ | 複合の並べ替えとフィルタ。結果はドキュメント単位 | ソートかフィルタのどちらか。サブツリー全体を返す | 複数テーブルのクエリ、複数行の更新 |
| 課金の軸 | 読み書き削除の回数、保存、転送 | 保存量と下り転送 | 操作回数とCloud SQLインスタンス |
| 拡張 | 自動。同時接続や全体の書き込み数に上限なし。単一ドキュメントやインデックスに書き込み速度の制限 | 約20万同時接続、毎秒1,000書き込みまで。その先はシャーディング | 比較ページに記載なし（実体はCloud SQL） |
| 可用性の説明 | 典型99.999%。リージョンまたはマルチリージョン | 典型99.95%。リージョン内のゾーン単位 | 比較ページに記載なし（実体はCloud SQL） |
| 向き | 新規の標準 | 頻繁な状態同期。応答は典型10ms以内 | 関係データ、ベクトル検索 |

オフライン対応はFirestoreがApple・Android・Web、Realtime DatabaseがAppleとAndroid。接続状態の「プレゼンス」はRealtime Databaseが標準で持ち、Firestoreでは持たないため、両者をCloud Functionsで同期する方法が案内されている。
:::

:::fact
Firestoreには2つのeditionがある。Standardはインデックスが必須で、1フィールドのインデックスは自動で作られる。Enterpriseはインデックスが任意で、Pipeline操作と、MongoDB互換のモードを持つ。リリースノートでは、2026年10月19日にEnterpriseの全文検索と地理空間検索が正式版になり、10月22日にDML操作が正式版になった。料金の単位も異なり、Enterpriseは読み取りを4KiB単位のRead Unit、書き込みを1KiB単位のWrite Unitで数える。既定表示のIowaでは100万Read Unitあたり0.05ドル、100万Write Unitあたり0.26ドルだ。Standardがドキュメントの大きさにかかわらず1件を1回と数えるのに対し、Enterpriseは処理したデータ量で数える。
:::

:::fact
SQL Connectは2026年4月22日にData Connectから改名された。リリースノートは「機能はすべて残り、APIは変わらない」と書く。ドキュメントによれば、GraphQLでデータモデルと必要なクエリを宣言すると、PostgreSQLのスキーマ、安全なエンドポイント、Kotlin・iOS・Flutter・Web向けの型付きSDKが生成される。公式の説明は「注文生産の自動運転アプリサーバー」だ。料金ページは「操作ごとの課金で、読み込むデータ量とは関係がない。行の読み取り料金はない」と注記する。Cloud SQLの既定の構成は db-f1-micro 相当（1vCPU、メモリ628.74MB、ストレージ10GB）。
:::

:::fact
App Hostingはサーバー描画のWebアプリ向けで、Next.jsとAngularを標準でサポートする。ブランチにpushするとGoogle Cloud Developer Connectがイベントを送り、Cloud Buildがコンテナを作り、Artifact Registryに置き、Cloud Runの新しいリビジョンに切り替える。リクエストのタイムアウトは5分で、従来のHostingの1分より長い。公式の比較ページは「Hostingの単純な置き換えではない」とし、静的サイトやSPAには従来のHostingを勧める。従来のHostingはSparkで使えるが、App HostingはBlazeが必須だ。利用規約もHostingはFirebase、App HostingはGoogle Cloudと分かれている。
:::

:::guess
データベース3つとホスティング2つの並びは、Firebaseが同じ問いに世代ごとに別の答えを足してきた結果とみられる。Realtime Databaseは同期の速さ、Firestoreは問い合わせと拡張、SQL Connectはリレーショナルという答えで、後の世代ほどGoogle Cloudの既存製品に近い。「Data Connect」という抽象的な名前から「SQL Connect」への改名も、ドキュメントDBの会社がSQLの需要に正面から名前を付けたものと読める。AIエージェントがコードを書く場面では、学習データの多いSQLが有利だという事情も背景にあると推測されるが、公式の説明は改名の理由を語っていない。
:::

AIに関しては、「Firebase」の名前が付くものと付かないものの線引きが2026年に大きく動いた。今のFirebaseが持っているのは、開発者を助けるAIと、アプリに組み込むAIの入口の2つだ。

:::fact
公式ドキュメント（2026-11-02閲覧）から、AI関連の現状を整理する。

| 名前 | 中身 | 状態 |
| --- | --- | --- |
| Firebase AI Logic | モバイル・WebからGeminiを呼ぶクライアントSDKとプロキシ。2025年5月20日に「Vertex AI in Firebase」から改名 | 利用は無料で、Gemini APIの費用は別。Gemini Developer APIの無料枠はSparkのままで使える |
| Gemini in Firebase | コンソールなどの開発支援。Crashlytics、Messaging、SQL ConnectのAI支援を含む | 料金ページでは無料 |
| Firebase MCP server | AIコーディングツールからプロジェクトを操作するローカルのサーバー | Antigravity、Claude Code、Cursorなどに対応 |
| Firebase agent skills | AIアシスタント向けの手順パッケージ | Antigravity、Claude Code、Codex、Cursorに対応 |
| Google AI Studio連携 | AI StudioのエージェントがFirestoreと認証を設定する | ドキュメントに記載 |
| Genkit | GoogleのオープンソースのAIフレームワーク（TypeScript、Go、Python、Dart） | 旧ドキュメントのURLは genkit.dev へ移動。リポジトリは genkit-ai/genkit、Apache-2.0、スター6,563 |
| Firebase Studio | ブラウザの開発環境 | 2026年6月22日に新規作成と登録を停止。2027年3月22日に終了 |

AI Logicは2026年11月2日から、App Checkを自動で適用すると予告している。有効なApp Checkトークンのないリクエストは遮断され、公開済みのアプリ版も対象になる（コンソールで一時的に遅らせることはできる）。公式はこの変更を、アプリから直接呼ばれるGemini APIを守るためのものと説明している。呼び出し先の名称も変わり、Vertex AIの改名に合わせて「Agent Platform Gemini API」となった。SDKの旧 `vertexAI` の初期化構文は2026年8月に非推奨になり、10月に削除された。Imagenのモデルは2026年8月17日に終了し、SDKとドキュメントから消された。
:::

## ビジネスモデル

Firebaseには単独の売上の開示がない。確認できる範囲で言えるのは、料金ページの構造がそのままビジネスモデルを説明しているということだ。無料の製品で開発者を引き寄せ、インフラを使う部分でGoogle Cloudの請求に接続する。

:::fact
公式の料金ページは、Cloud FunctionsやSQL Connectの従量分の一部を自ら単価で示す一方、Firestore、認証、Cloud Runなどの行の多くを「Then Google Cloud pricing」として外へ飛ばす。Blazeの請求はCloud Billingアカウントで処理され、古い `*.appspot.com` バケットはApp Engine利用料として、新しい `*.firebasestorage.app` バケットはCloud Storage利用料として計上される。Firestoreには1年と3年の確約利用割引があり、東京の読み取りは0.038ドルが0.0304ドル、0.0228ドルになる。無料枠の超過からCloudの割引プログラムまで、同じ階段の上にある。
:::

請求がどう増えるかは、製品ごとに軸が違う。Firestoreの単価は小さく見えるが、回数はコードが決める。当サイトの試算で規模感を示す。

:::fact
Firestore Standardの東京の単価（読み取り0.038ドル、書き込み0.115ドル／10万件）と無料枠をもとに、当サイトが計算した例だ。保存量と転送量は含まない。

| 想定 | 読み取り/日 | 書き込み/日 | 1カ月（30日）の概算 |
| --- | --- | --- | --- |
| 1日の利用者1万人、1人200読み取り・20書き込み | 200万 | 20万 | 約28ドル |
| 同じ利用者で、リスナーの設計により1人2,000読み取り | 2,000万 | 20万 | 約234ドル |
| バグのループが毎分100万読み取りを続ける | 14億4,000万 | — | 1日で約547ドル |

普通の使い方なら金額は小さい。公式ドキュメントが警戒しているのは1行目ではなく、3行目のような事故である。
:::

長いあいだ、Blazeにはこの3行目を止める標準機能がなかった。予算のアラートはメールを送るだけで、公式の案内は「予算の通知を使ってプログラムから課金を無効にする」というものだった。

:::fact
2026年9月14日の公式ブログは「Firebase spend caps」を公開プレビューとして発表した。サービスごとに月の予算を設定すると、50%と80%で警告メールが届き、100%でそのサービスの新しい利用が月末まで止まる。解除すれば、その月は上限なしで動き続け、再開には最大1時間かかることがある。上限額を翌月まで維持したまま月内に引き上げることもできる。対象はFirebase AI Logic、App Hosting（Cloud Run）、Cloud Functions（Cloud Run functions）、Extensionsの4つで、プロジェクト単位・サービス単位の設定だ。請求アカウント全体には掛けられない。ドキュメントは「hard capではない」と繰り返す。利用量の報告に遅延があり、適用は数分遅れることがあって、その間の超過分は通常どおり請求される。計算はクレジットや割引を引く前の総額で行う。
:::

:::fact
FAQは「Blazeで利用量に上限を掛けられるか」という問いに、上の4製品は可能で、「それ以外の有料枠のある製品には、Blazeでは上限を掛けられない。ただし選択肢を積極的に検討している」と答える。つまり2026年11月2日時点で、Firestore、Realtime Database、Cloud Storage、Hostingはspend capsの対象外で、アラートのみの予算だけが使える。公式の一覧も「対象サービスの追加に取り組んでいる」と書く。
:::

:::pull
spend capsは、AIと関数の暴走を止める遮断器として届いた。読み取りの回数で請求が増えるデータベースは、まだ回路の外にある。
:::

:::guess
対象が関数とAIから始まったのは、一時停止の意味が比較的はっきりしているからとみられる。関数やAIが止まっても、アプリの一部の機能が失敗するだけで済むことが多い。データベースが止まれば、アプリ全体が読めなくなる。もう1つの理由は技術的で、Cloud Runの課金は単一のサービスとして止めやすく、クライアントSDKが直接読むFirestoreは止める場所の設計が別に必要だと推測される。発表の文面が「AI-powered feature」と「runaway bill」から書き始めていることからは、生成AIのAPI費用が要望を押し上げた面も読み取れる。
:::

2026年のもう1つの動きは、周辺の製品の整理だ。公式のリリースノートを並べると、方向がはっきり見える。

:::fact
リリースノートと各製品のFAQ（2026-11-02閲覧）から、終了の告知をまとめる。

| 製品 | 告知 | 終了日 | 案内されている移行先 |
| --- | --- | --- | --- |
| Firebase Studio | 2026年3月19日 | 2027年3月22日 | Google AI Studio、Google Antigravity |
| Firebase ML | 2026年6月11日 | 2027年6月15日 | モデル配信はCloud Storage、画像分析はAI LogicまたはCloud Vision API |
| Firebase Extensions | 2026年7月20日 | 2027年3月31日 | Cloud Functionsのfunction kits |
| Firebase Test Lab | 2026年9月30日 | 2027年9月30日 | Google CloudのDeveloper Device Platform |
| Dynamic Links | 公式FAQに記載 | 2025年8月25日 | App Links、Universal Links |

Extensionsは終了後も導入済みのものが動き続けるが、コンソールやCLIからの更新、再設定、アンインストールができなくなる。公式FAQは、多くの拡張機能が古いCloud Functions v1のSDKに依存し、そのランタイムが廃止されれば止まる可能性があると書き、理由を「基盤のGoogle Cloudの変更と廃止」と説明する。Studioの移行ガイドは「Firebaseの中核は影響を受けない」と明記する。Firebase Studioはプレビュー、ExtensionsとFirebase MLはベータと表示されており、いずれもSLAや廃止ポリシーの対象外の扱いだった。
:::

:::guess
移行先の欄を見ると、整理の方向は「Firebaseの製品を減らす」というより「Googleの別の看板へ渡す」に近いとみられる。Test LabはGoogle Cloudへ、StudioはAI StudioとAntigravityへ、ExtensionsはCloud Runの上で動く関数へ移る。Firebaseに残るのは、認証、データベース、配信、計測という、どのAIツールから作られたアプリにも必要な層だ。AI Studioのエージェントが設定するのも、CodexのプラグインがMCPとCLIで操作するのも、この層である。これは開発環境の入口としてのFirebaseを手放し、バックエンドとしてのFirebaseに賭ける判断だと推測される。

一方で、Studioで作り始めた利用者が別のツールへの移行を求められていることは事実として残る。ベータやプレビューの製品に依存するときの費用を、Firebaseの利用者は改めて見積もることになる。その費用は無料枠にも料金表にも載っていない。
:::

Firebaseの強みは、Googleの基盤の規模と個人開発者の手軽さを、1つのSDKと1つのコンソールでつないだことだった。その受付の奥にある請求の仕組みは最初からGoogle Cloudのもので、2026年にようやく遮断器が付き始めた。読むべきなのは無料枠の大きさよりも、自分のコードが1回の画面表示で何回読むかと、その行がspend capsの内側にあるかどうかだ。AIの入口が別の看板へ移っても、データが置かれる場所としてのFirebaseは残る。Googleがこの層をどこまで「受付」のまま保つのかは、次にFirestoreが上限の対象に入るかどうかで見えてくる。
