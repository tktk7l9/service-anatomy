---
service: "マネーフォワード ME"
title: "無料は4口座と1年分まで — 利用者1,830万人のうち67万人が月540円を払う「マネーフォワード ME」の線引き"
description: "家計簿・資産管理アプリ「マネーフォワード ME」は、利用者1,830万人に対してプレミアム課金ユーザーが67.3万人。無料会員の口座連携を4件に絞り、閲覧できる家計簿を1年分に限り、その外側に月540円（アプリ内決済なら590円）のスタンダードコースと月980円の資産形成アドバンスコースを置く。Homeセグメントのプレミアム課金ARRは40.2億円（前年同期比30.2%増）。決算短信・決算説明資料、公式サポートサイト、公式プレスリリース、公式開発者ブログ、アプリストアの実観測から、無料と有料の境界線がどう引かれ、三井住友カードとの合弁で何が変わったかを解剖する。Java製のアグリゲーション基盤、Flutterを混ぜたモバイルアプリ、2026年5月にGitHubへの不正アクセスを受けて銀行連携を止めた顛末まで。"
lead: "2022年12月7日、マネーフォワード MEは無料会員が連携できる金融関連サービスを10件から4件に減らした。5件以上つないでいた無料会員には、30日間のプレミアムクーポンと「4件に絞って無料で利用する」ボタンが用意された。2025年8月5日には、スタンダードコースの料金を改定した。利用者1,830万人という日本最大級の家計簿アプリが、どこに無料と有料の線を引き、その線をどう動かしてきたか。決算資料とサポートサイトの告知、公式開発者ブログ、アプリの実観測から解剖する。"
category: consumer-app
tags: [personal-finance, fintech, subscription, ruby-on-rails, flutter, mcp]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://moneyforward.com/me"
# Affiliate link placeholder: as of 2026-10-01 no public page confirms which ASP
# carries a Money Forward ME program (A8.net and Moshimo Affiliate program search
# requires a login). Candidates to check first: Moshimo Affiliate, A8.net and
# ValueCommerce. The owner must search the ASP dashboards for the Money Forward ME
# premium-service program, pass the review, and paste the tracking link here
# before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<asp-moneyforward-me-tracking-link>"
#   program: "マネーフォワード ME プレミアムサービス（ASP 未確定: もしもアフィリエイト / A8.net / バリューコマースを確認）"
vendor: "Money Forward Home, Inc."
origin: "JP"
heroTheme: "moneyforward-me"
scores: { product: 4.5, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "Webアプリ"
    name: "Ruby (likely Ruby on Rails)"
    confidence: likely
    evidence: "公式開発者ブログ（2026-04）に、家計簿アプリ「マネーフォワード ME」やクラウド経費などを代表に多くのサービスでRubyが使われていると明記。当サイトの実観測（2026-10-01）では、moneyforward.com が Rails 由来の「_moneybook_session」というセッションCookieと、Rack が付ける x-runtime ヘッダーを返す。フレームワークがRailsだと直接書いた一次情報は見つかっていない"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2026/04/08/100000"
  - layer: "アカウントアグリゲーション基盤"
    name: "Java account aggregation platform (microservice)"
    confidence: confirmed
    evidence: "公式開発者ブログ（2014-06）に、金融機関からデータを集めるWebアグリゲーション基盤はJavaで書かれ、当時のCTOがほぼ一人で作り、1,400を超える金融機関・サービスに対応していると明記。CTOメッセージ（2022-03）は、ID基盤・課金基盤・アグリゲーション基盤など共通機能はマイクロサービス化されていると書いている。現在も実装言語がJavaのままかは記事からは分からない"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2014/06/10/java_20140610/"
  - layer: "インフラ"
    name: "Multi-tenant Kubernetes cluster"
    confidence: confirmed
    evidence: "CTOメッセージ（2022-03）に、マルチテナントのKubernetesクラスタを中心に、モニタリングやCI/CDまで標準化したインフラ基盤を構築していると明記"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2022/03/10/cto-message-202203/"
  - layer: "モバイルアプリ"
    name: "Swift + Flutter (Add-to-App)"
    confidence: confirmed
    evidence: "公式開発者ブログ（2023-10）に、マネーフォワード MEのモバイル開発では新規画面を基本的にFlutterで実装し、既存のネイティブアプリにAdd-to-Appで組み込んでいること、CIをJenkinsからBitriseへ移したこと、2019年ごろにリアーキテクチャを行ったことが明記。iOS版のコントロールウィジェット対応記事（2024-12）はSwiftのApp Intentsで実装を説明している"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2023/10/18/110000"
  - layer: "認証"
    name: "Money Forward ID (in-house IdP with passkeys)"
    confidence: confirmed
    evidence: "公式開発者ブログ（2023-04）に、マネーフォワード IDは同社サービス向けのIdPで、ブラウザのオートフィルを使うPasskey autofillによるパスワードレスログインを導入したと明記。2026年7月のレポートでは登録パスキーが約340万個"
    evidenceUrl: "https://moneyforward-dev.jp/entry/2023/04/05/134721"
  - layer: "金融機関連携"
    name: "Bank API + screen scraping"
    confidence: confirmed
    evidence: "公式サポートサイトに、連携方法はAPI連携方式とスクレイピング方式の2種類で、API連携では銀行側のサイトでログインするため暗証番号を預からず、スクレイピング方式ではID・パスワードを暗号化して預かり連携先サイトにログインすると明記。別のサポート記事は、銀行法改正により同社を含む電子決済等代行業者は各銀行と個別に契約を結ぶ必要があると説明している"
    evidenceUrl: "https://support.me.moneyforward.com/hc/ja/articles/900004397063"
  - layer: "AIエージェント連携"
    name: "Apps in ChatGPT (likely an MCP server)"
    confidence: likely
    evidence: "マネーフォワードホームの発表（2026-09-17）によれば、2026年9月17日からChatGPTのアプリとして提供され、ChatGPTとの対話でMEの家計簿・資産データを参照できる（更新はできない）。発表はSDKやプロトコルに触れていないが、OpenAIの開発者ドキュメントはApps SDKでアプリを作る手順としてMCP（Model Context Protocol）サーバーの構築を案内しており、MCPサーバー経由の接続と推測される"
    evidenceUrl: "https://corp.moneyforward.com/news/release/service/20260917-mf-press-3/"
  - layer: "エッジ / CDN"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-01）で、moneyforward.com と id.moneyforward.com が server: cloudflare と cf-ray（NRT）を返し、id.moneyforward.com は cdn.cloudflare.net へのCNAME。サポートサイト support.me.moneyforward.com は pfmus.zendesk.com へのCNAMEでZendeskが返答する"
sources:
  - label: "株式会社マネーフォワード: 2026年11月期 第2四半期（中間期）決算短信〔日本基準〕(連結)（2026-07-13）"
    url: "https://contents.xj-storage.jp/xcontents/AS71106/eee10499/1dac/4664/9aa5/229eaf8de8d0/140120260713592274.pdf"
    accessedAt: "2026-10-01"
  - label: "株式会社マネーフォワード: 2026年11月期 第2四半期決算説明資料（2026-07-13）"
    url: "https://contents.xj-storage.jp/xcontents/AS71106/d6d5dd76/4582/4a3b/96c8/10c9b996d59d/140120260713592129.pdf"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME: プレミアムサービスでできること"
    url: "https://moneyforward.com/pages/premium"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME: プレミアム会員と無料会員のサービス比較"
    url: "https://moneyforward.com/pages/premium_features"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME: 資産形成アドバンスコース"
    url: "https://moneyforward.com/pages/extra_premium"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME サポート: プレミアムサービスの料金について教えてください"
    url: "https://support.me.moneyforward.com/hc/ja/articles/4409828451993"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME サポート: 【重要】プレミアムサービス スタンダードコースの料金改定に関するお知らせ（2025年8月5日 改定）"
    url: "https://support.me.moneyforward.com/hc/ja/articles/48081250560409"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME サポート: 無料会員における金融関連サービス連携上限数の変更のお知らせ（2022-10-03）"
    url: "https://support.me.moneyforward.com/hc/ja/articles/11112036463001"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME サポート: 金融機関のデータ管理とログイン情報はどうなっていますか"
    url: "https://support.me.moneyforward.com/hc/ja/articles/900004397063"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME サポート: 銀行連携に関する一部変更のお知らせ（背景）"
    url: "https://support.me.moneyforward.com/hc/ja/articles/900003516286"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME サポート: 『GitHub』への不正アクセス発生および銀行口座連携機能の一時停止に関するお知らせ（2026年6月23日 更新）"
    url: "https://support.me.moneyforward.com/hc/ja/articles/57504390625305"
    accessedAt: "2026-10-01"
  - label: "マネーフォワード ME サポート: 【お詫び】プレミアムサービスの購読期間延長について（2026年6月19日 更新）"
    url: "https://support.me.moneyforward.com/hc/ja/articles/58059562469913"
    accessedAt: "2026-10-01"
  - label: "株式会社マネーフォワード: 『GitHub』への不正アクセスに関する調査結果のご報告（第四報）（2026-06-23）"
    url: "https://corp.moneyforward.com/news/info/20260623-mf-press-1/"
    accessedAt: "2026-10-01"
  - label: "株式会社マネーフォワード: マネーフォワードと三井住友カード、個人向け事業における資本業務提携に関する基本合意書の締結について（2024-07-17）"
    url: "https://corp.moneyforward.com/news/release/corp/20240717-mf-press/"
    accessedAt: "2026-10-01"
  - label: "マネーフォワードホーム株式会社: 『マネーフォワード ME』、新機能「ポイントが貯まる家計簿」を提供開始（2024-12-02）"
    url: "https://corp.moneyforward.com/news/release/service/20241202-mf-press-2/"
    accessedAt: "2026-10-01"
  - label: "マネーフォワードホーム株式会社: 『マネーフォワード ME』の資産管理機能の一部が『三井住友銀行アプリ』および『三井住友カード Vpassアプリ』で利用可能に（2026-03-02）"
    url: "https://corp.moneyforward.com/news/release/service/20260302-mf-press-1/"
    accessedAt: "2026-10-01"
  - label: "マネーフォワードホーム株式会社: 『マネーフォワード ME』、2026年9月17日より「Apps in ChatGPT」で利用できるアプリの提供を開始（2026-09-17）"
    url: "https://corp.moneyforward.com/news/release/service/20260917-mf-press-3/"
    accessedAt: "2026-10-01"
  - label: "OpenAI Developers: Apps SDK（Apps in ChatGPT の開発者ドキュメント）"
    url: "https://developers.openai.com/apps-sdk/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: マネーフォワードのJavaエンジニアはどのような環境で仕事をしているのか（2014-06）"
    url: "https://moneyforward-dev.jp/entry/2014/06/10/java_20140610/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: マネーフォワードCTOが考えていること（2022年3月）"
    url: "https://moneyforward-dev.jp/entry/2022/03/10/cto-message-202203/"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: マネーフォワード MEのモバイル開発の生産性を爆上げした事ランキング（2023-10）"
    url: "https://moneyforward-dev.jp/entry/2023/10/18/110000"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: マネーフォワード MEのControl Widget対応（2024-12）"
    url: "https://moneyforward-dev.jp/entry/2024/12/11/125931"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: マネーフォワードはRubyKaigi 2026にスポンサーします！（2026-04）"
    url: "https://moneyforward-dev.jp/entry/2026/04/08/100000"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: Passkey autofillを利用したパスワードレスログイン導入（2023-04）"
    url: "https://moneyforward-dev.jp/entry/2023/04/05/134721"
    accessedAt: "2026-10-01"
  - label: "Money Forward Developers Blog: パスキー利用状況レポート @ マネーフォワード ID（vol.10, Jul 2026）"
    url: "https://moneyforward-dev.jp/entry/2026/07/10/passkey-report-vol10"
    accessedAt: "2026-10-01"
  - label: "App Store: 家計簿マネーフォワード ME - 資産管理もこれ一つで（Money Forward Home, Inc.）"
    url: "https://apps.apple.com/jp/app/id594145971"
    accessedAt: "2026-10-01"
  - label: "Google Play: マネーフォワード ME（com.moneyforward.android.app）"
    url: "https://play.google.com/store/apps/details?id=com.moneyforward.android.app&hl=ja"
    accessedAt: "2026-10-01"
---

マネーフォワードの決算資料で、家計簿アプリはHomeセグメントという名前で出てくる。全社のSaaS ARR476.7億円のうち、Homeのプレミアム課金は40.2億円。会社の看板になった製品の売上は、いまでは全体の1割を切る。それでも利用者は1,830万人を超え、課金ユーザーは67万人を超えて伸び続けている。無料で使える範囲をどこまでにするか。その線引きの歴史が、このアプリのビジネスそのものだ。

## サービス解説

マネーフォワード MEは、銀行・証券・クレジットカード・電子マネー・ポイントなどの口座をつなぎ、明細を自動で取り込んで家計簿と資産一覧を作るアプリだ。Web版とiOS版・Android版があり、2012年12月にサービスを始めた。2024年8月に設立されたマネーフォワードホーム株式会社が運営し、App Storeの販売元表記も「Money Forward Home, Inc.」になっている。同じグループの個人事業主・法人向け「[マネーフォワード クラウド](/ja/articles/moneyforward-cloud)」とは別の製品で、決算資料ではHomeセグメントに入る。

:::fact
決算説明資料（2026-07-13）によれば、2026年11月期第2四半期（2026年3月〜5月）のHomeセグメントの売上高は13.0億円（前年同期比13%増、非連結化したNext Solution社を除くと18%増）で、年末年始のキャンペーンが好調に推移し、プレミアム課金収入は前年同期比26%増だった。マネーフォワード MEの利用者数は1,830万を超え、課金ユーザーは67.3万を超えた。利用者数はアプリのダウンロード数とWEB登録者数の累計と注記されている。決算短信によれば、Homeプレミアム課金のSaaS ARRは2026年5月末で40.17億円（前年同期比30.2%増）。全社のSaaS ARRは476.69億円だった。
:::

:::fact
公式の料金案内によれば、プレミアムサービスはスタンダードコースと資産形成アドバンスコースの2つで、価格は決済方法で異なる（すべて税込）。スタンダードコースはWeb版からのクレジットカード決済で月額540円・年額5,940円、App Store決済とGoogle Play決済で月額590円・年額6,490円。資産形成アドバンスコースはどの決済方法でも月額980円・年額10,700円。新規登録者には30日間の無料お試しがある。サポートサイトの告知によれば、スタンダードコースの料金は2025年8月5日に改定され、理由として物価上昇に伴うシステムの保守・運用コストとAPIにかかる費用の増加を挙げている。資産形成アドバンスコースは据え置きだった。
:::

:::pull
無料会員は金融関連サービスの連携が4件まで、閲覧できる家計簿は過去1年分まで。その外側に月540円の線が引かれている。
:::

::scorecard

## UX分析

マネーフォワード MEのUXは「口座をつなぐと家計簿が勝手にできあがる」体験に集約される。無料と有料の差は機能の質ではなく、つなげる数と見える期間で付けられている。

- **無料の範囲が数字で決まっている**。公式の比較表によれば、無料会員は金融関連サービスの連携が最大4件、家計簿データの閲覧は過去1年分、グループは1つ、広告が表示される。プレミアムはどれも無制限で、広告非表示、一括更新、家計資産レポート、CSVダウンロード、カード引落し時の残高不足通知などが付く。何が有料かを迷う余地が小さい。
- **境界線は動かされてきた**。サポートサイトの告知（2022-10-03）によれば、2022年12月7日から無料会員の連携上限が10件から4件になった。理由はデータ量増加に伴う保守・運用コストとAPI連携のコスト上昇。2022年11月6日時点で5件以上つないでいた無料会員には30日間無料のプレミアムクーポンを配り、変更日以降にアプリを開くと「4件に絞って無料で利用する」か「連携する口座を選ぶ」かを選ぶ画面が出る設計だった。無料で残る道を用意しつつ、上限に当たった人にはその場で有料の入口を見せる。
- **プランは2段、投資家向けは上の段**。資産形成アドバンスコースは、配当の履歴と予測、Myポートフォリオ、資産へのタグ付け、株式の業種別内訳といった投資家向けの機能を足す。公式ページによれば、これらの専用機能はスマートフォンアプリでしか使えない。公式開発者ブログ（2023-10）によれば、このコースは2023年2月末にリリースされ、その機能はFlutterで開発された。
- **決済方法で値段が違う**。Web版からのクレジットカード決済のほうが、App Store・Google Play決済より月50円・年550円安い。アプリの中で申し込むと高い設定は、ストア手数料をそのまま利用者側の選択に映したものと読める。
- **家族と共有する機能が後から来た**。決算短信によれば、前期には家族・パートナーと家計や資産状況を確認できる「シェアボード」と、プレミアム会員限定の「Prime Coupon」が始まった。料金改定の告知は、シェアボードはプレミアム会員同士か、プレミアム会員と無料会員のペアで使えると説明している。
- **止まったときに代替手段がなかった**。2026年5月、後述する不正アクセスへの対応で銀行口座連携が止まった。サポートサイトのお詫びは「CSV取り込み等の銀行口座連携の代替機能もない」ことを理由の一つに挙げて、プレミアム会員の購読期間を15日延長した。自動連携の便利さは、連携が止まったときの脆さと表裏一体だった。

## 技術構成

::techstack

:::fact
公式開発者ブログ（2014-06）によれば、金融機関からデータを集めるWebアグリゲーション基盤はJavaで書かれており、当時のCTOがほぼ一人で作り、1,400を超える金融機関・サービスに対応していた。新しい金融機関の追加は基盤の上で比較的容易で、入社2週間ほどで追加を実装できたと書かれている。CTOメッセージ（2022-03）は、ID基盤・課金基盤・アグリゲーション基盤など共通して使われる機能はマイクロサービス化され、マルチテナントのKubernetesクラスタを中心にモニタリングやCI/CDまで標準化したインフラ基盤を構築していると説明している。
:::

:::fact
公式サポートサイトによれば、金融機関との連携方法はAPI連携方式とスクレイピング方式の2種類で、ログイン情報の扱いが異なる。API連携では銀行が提供するAPIの情報をもとにデータを反映するため、登録時は銀行側のサイトへ遷移し、暗証番号は同社が預からない。スクレイピング方式は利用者が登録したID・パスワードを暗号化して預かり、連携先サイトにログインして取得する。別のサポート記事は、銀行法改正により同社を含む電子決済等代行業者は、銀行口座の情報を取得する場合に各銀行と個別に契約を締結する必要があると説明している。
:::

:::fact
公式開発者ブログ（2023-10）によれば、マネーフォワード MEのモバイル開発では、2019年ごろにリアーキテクチャを行い、CIをJenkinsからBitriseへ移し、OpenAPIを導入した。新規画面は基本的にFlutterで実装し、既存のネイティブアプリにAdd-to-Appで組み込んでいる。ネイティブで画面を作る場合と比べ、開発コストは全体で半分以下に感じるという。iOS版のコントロールウィジェット対応（2024-12）はApp Intentsで実装され、iOS 18.0では不具合のあったOpenURLIntentを使わない方針を取り、遷移先のカスタムURLスキームを一時的に保持してアプリ側で画面遷移を処理する方法を説明している。当サイトの実観測（2026-10-01）では、App Storeのバージョンは20.3.0（2026-09-30更新）、対応OSはiOS 18.0以上、評価は4.4（174,310件）。Google Playはダウンロード500万以上、評価4.3（4.69万件）。
:::

:::fact
マネーフォワードホームの発表（2026-09-17）によれば、2026年9月17日から「Apps in ChatGPT」でマネーフォワード MEのアプリが使えるようになった。ChatGPTとの対話の中で、連携している銀行・カード・証券・年金・電子マネー・ポイントの情報や取引履歴、家計簿、資産・負債のデータを参照できる。金融関連サービスを連携するための認証情報がChatGPTに共有されることはなく、アプリからMEのデータを更新することはできない。
:::

:::guess
発表はSDKやプロトコルに触れていないが、OpenAIの開発者ドキュメントは、Apps SDKでアプリを作る手順としてMCP（Model Context Protocol）サーバーの構築を案内している。マネーフォワード MEのアプリも、MEのデータを読み取るツールを載せたMCPサーバーをOAuthで認可する形だと推測される。[マネーフォワード クラウド](/ja/articles/moneyforward-cloud)が2026年3月に全プランへ開いたリモートMCPサーバーが仕訳の作成・更新まで許すのに対して、MEは読み取り専用から始めた。家計データを外部のAIに渡す入口を、まず「見せるだけ」に絞ったとみられる。
:::

:::fact
公式サポートサイトのお知らせによれば、2026年5月1日にソースコード管理サービス「GitHub」への不正アクセスが公表され、マネーフォワード MEの銀行口座連携機能が一時停止された。2026年5月12日から金融機関ごとに順次再開し、2026年6月5日10時50分にすべての銀行の連携が再開した。株式会社マネーフォワードの第四報（2026-06-23）によれば、漏えいはGitHub上のリポジトリに含まれていた情報に限られ、顧客124名の氏名（100件）・メールアドレス（24件）、取引先28名、従業員・元従業員2,300名の情報、顧客60,449名分の単体では個人を特定できない識別子が含まれていた。顧客情報を格納する本番データベースへの不正アクセスや本番環境からの情報漏えいは一切ないとしている。決算説明資料によれば、対策としてGitHubの認証管理の厳格化、開発環境のリアルタイム監視体制の構築、リポジトリ内の機密情報混入を自動検知する仕組みの強化を挙げている。
:::

## ビジネスモデル

収益の柱はプレミアムサービスの月額・年額課金だ。決算説明資料によれば、Homeセグメントの売上はプレミアム課金収入、金融関連サービス収入、メディア・広告収入の3つで構成される。金融関連サービス収入には『マネーフォワード お金の相談』や『マネーフォワード 固定費の見直し』などの収入が入る。決算短信の注記によれば、HomeセグメントのSaaS ARRはプレミアム課金収入だけから算出している。

:::fact
決算短信によれば、Homeプレミアム課金のSaaS ARRは2025年5月末の30.87億円から2026年5月末の40.17億円へ30.2%増えた。決算説明資料によれば、第2四半期のHomeセグメント売上13.0億円のうち、金融関連サービス収入は前年同期比18%減、メディア・広告収入は同15%減で、伸びているのはプレミアム課金収入だけだった。決算短信は、前期に実施したマネーフォワード MEの価格改定に加え、シェアボードとPrime Couponでユーザーの体験価値向上に努めていると説明している。
:::

:::guess
利用者1,830万に対して課金ユーザー67.3万は、比率にすると4%弱になる。ただし利用者数はダウンロードとWEB登録の累計なので、実際に使い続けている人に対する課金率はこれより高いとみられる。ARR40.17億円を課金ユーザー67.3万で割ると1人あたり年間約5,970円で、スタンダードコースの年額（クレジットカード決済5,940円・アプリ内決済6,490円）に近い。課金ユーザーの大半がスタンダードコースで、資産形成アドバンスコースはまだ少数と推測される。2025年8月の料金改定と、2022年12月の無料枠の縮小は、どちらも「連携先のAPIコスト」を理由に挙げている。金融機関ごとに個別契約を結ぶ電子決済等代行業の構造が、無料の範囲を狭める圧力として働いているように読める。
:::

:::fact
株式会社マネーフォワードの発表（2024-07-17）によれば、同社と三井住友カード株式会社は個人向け事業における合弁会社の設立を含む資本業務提携の基本合意書を締結した。発表時点のマネーフォワード MEは、2,460以上の金融関連サービスに対応し、利用者数1,610万人、口座連携金融資産額25兆円（2024年5月末）。三井住友カードが三井住友銀行などと提供する『Olive』は、サービス開始から1年あまりで230万人がアカウントを開設していた。合弁会社は2024年12月に事業を始める予定で、代表取締役会長に三井住友カードの大西幸彦氏、代表取締役社長にマネーフォワードの辻庸介氏が就くとされた。決算短信（2026年11月期第2四半期）によれば、前中間連結会計期間に連結子会社のマネーフォワードホーム株式会社が第三者割当増資を実施し、資本剰余金が25.18億円増加した。
:::

:::fact
基本合意は、検討するサービスとして「シームレスな資金移動」「リアルタイムでの家計管理」「自分だけのローン」「ポイントがたまる家計簿」「AIアシスタントによるお金のサポート」の5つを挙げていた。このうちいくつかは形になっている。マネーフォワードホームの発表によれば、2024年12月2日にアプリを開く・口座を連携する・マンスリーレポートを見るなどの行動に応じてポイントが貯まり、1ポイント1円分のVポイントに交換できる「ポイントが貯まる家計簿」が始まった。ポイントが貯まるアクションの例には「口座を5件以上連携」も挙がっている。スタンダードコースの料金改定の告知によれば、2025年8月5日からプレミアムサービスをOliveフレキシブルペイや三井住友カード（NL）などでクレジットカード決済すると、Vポイント10%還元の対象になる（App Store決済・Google Play決済は対象外）。2026年3月2日には、三井住友銀行アプリと三井住友カード Vpassアプリの口座一覧に、MEに連携している金融関連サービスの資産情報を表示する機能と、カードの支払額が引落口座の残高を上回るときに知らせる機能が入った。連携にはSMBC IDへの登録が必要で、どちらかのアプリで連携すると両方に反映される。決算説明資料によれば、三井住友銀行・三井住友カードとの3社共同で公式YouTubeチャンネル「ME STUDIO」も始めている。
:::

:::guess
合弁の相手が銀行ではなくカード会社である点は、収益の作り方を示しているとみられる。家計簿の上でポイントを配り、カードの即時利用通知を家計簿に流し、家計データからローンの借入可能額を提案する。基本合意に並んだ5つのサービスは、どれもMEの家計データをSMBCグループの金融商品の入口にする設計だ。決算短信は、MEの見える化とOliveの金融サービスを掛け合わせて「収益源の多角化」に取り組むと書いている。プレミアム課金だけが伸びているHomeセグメントに、金融関連の収入を足す土台として合弁を選んだと推測される。一方で、2026年3月にSMBCのアプリ側でMEの資産一覧が見られるようになったことは、MEのアプリを開かなくても中核機能の一部が使えることを意味する。利用者の入口が銀行アプリへ移ったとき、MEのプレミアム課金がどう保たれるかは、まだ資料からは読めない。
:::

無料で4口座、1年分。その線の外側にある月540円が、Homeセグメントの売上を支えている。線を動かすたびに理由として挙げられたのは、金融機関とつなぎ続けるコストだった。三井住友カードとの合弁は、そのコストを金融商品の入口に変える試みであり、GitHubへの不正アクセスで止まった銀行連携は、このアプリの価値がどこにあるかを裏側から示した。家計簿は無料で作れる。つなぎ続けることに、値段が付いている。
