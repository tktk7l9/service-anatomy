---
service: "TimeTree"
title: "唯一「未来」で埋まった台帳 — TimeTreeが150億レコードを積み替えてまで守ったもの"
description: "世界7,000万人が予定を書き込むカレンダーシェアアプリTimeTree。WAU/MAU 85%という異常な定着率、AuroraからCloud Spannerへの150億レコード移行、そして「未来の予定」そのものを売る広告事業を解剖する。"
lead: "カレンダーに書かれることは、例外なくまだ起きていない。2015年に生まれたTimeTreeは、その当たり前を10年かけて事業に変えた。世界7,000万人、日本のWAU/MAUは85%。2025年には150億レコードのデータベースをAuroraからCloud Spannerへ丸ごと積み替えた。共有カレンダーという地味な器の中身を解剖する。"
category: consumer-app
tags: [calendar, family, advertising, google-cloud, spanner]
publishedAt: "2026-08-06"
updatedAt: "2026-08-06"
lastVerified: "2026-08-06"
serviceUrl: "https://timetreeapp.com/"
vendor: "株式会社TimeTree"
origin: "JP"
heroTheme: "timetree-calendar"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "データベース"
    name: "Google Cloud Spanner"
    confidence: confirmed
    evidence: "Google Cloud公式ブログのTimeTree導入事例（2025-07-25）に明記。150億以上のレコードをMySQLベースのDBから移行"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "データ移行"
    name: "Datastream / Spanner 移行ツール"
    confidence: confirmed
    evidence: "同導入事例に明記。Google Cloud開発チームと連携して移行ツールの性能向上を実施したと記載"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "サーバーアプリ"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "公式が公開した技術スタック（2020-04-21）に明記。当サイトのHTTPヘッダー実観測（x-runtime / x-request-id というRails系ヘッダー、2026-08-06）でも整合"
    evidenceUrl: "https://timetreeapp.com/intl/ja/newsroom/2020-04-21/technology-stack"
  - layer: "コンテナ実行基盤"
    name: "Cloud Run"
    confidence: confirmed
    evidence: "Google Cloud公式ブログのTimeTree導入事例に、移行後に利用しているサービスとして記載"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "キャッシュ"
    name: "Memorystore for Valkey"
    confidence: confirmed
    evidence: "同導入事例に、移行後に利用しているサービスとして記載"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "非同期メッセージング"
    name: "Pub/Sub"
    confidence: confirmed
    evidence: "同導入事例に、移行後に利用しているサービスとして記載"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "配信"
    name: "Cloud CDN / Cloud Load Balancing"
    confidence: confirmed
    evidence: "同導入事例に記載。当サイトのHTTPヘッダー実観測（server: Google Frontend / via: 1.1 google、2026-08-06）とも整合"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "分析基盤"
    name: "BigQuery / Looker"
    confidence: confirmed
    evidence: "同導入事例に、移行後に利用しているサービスとして記載"
    evidenceUrl: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
  - layer: "モバイルアプリ"
    name: "Swift (iOS) / Kotlin (Android)"
    confidence: confirmed
    evidence: "公式が公開した技術スタック（2020-04-21）に明記。CI/CDはBitrise+fastlane"
    evidenceUrl: "https://timetreeapp.com/intl/ja/newsroom/2020-04-21/technology-stack"
  - layer: "Webフロントエンド"
    name: "React / TypeScript（Jotai・React Query・Playwright）"
    confidence: confirmed
    evidence: "TimeTree Tech Blog（Zenn・2023-12-01）のスタック変遷記事に、Redux→Jotai・WebdriverIO→Playwrightへの移行として明記"
    evidenceUrl: "https://zenn.dev/timetree/articles/81c2adaeb29834"
  - layer: "コーポレートサイト"
    name: "Next.js"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（x-powered-by: Next.js / x-next-i18n-router-locale、2026-08-06）"
    evidenceUrl: "https://timetreeapp.com/intl/ja"
sources:
  - label: "TimeTree公式ニュースルーム: UI/UXリニューアルと新機能「みつける」（2026-01-13・登録7,000万人）"
    url: "https://timetreeapp.com/intl/ja/newsroom/2026-01-13/timetree-renewal"
    accessedAt: "2026-08-06"
  - label: "TimeTree公式ニュースルーム: サービス開始10周年インフォグラフィックス（2025-03-24）"
    url: "https://timetreeapp.com/intl/ja/newsroom/2025-03-24/timetree-10th-anniversary-infographics"
    accessedAt: "2026-08-06"
  - label: "Google Cloud公式ブログ: TimeTree、Spannerへの移行でサービスの継続性を確保（2025-07-25）"
    url: "https://cloud.google.com/blog/ja/topics/customers/timetree-migration-to-spanner-ensures-service-continuity"
    accessedAt: "2026-08-06"
  - label: "Speaker Deck: TimeTree Auroraから Spannerへの移行の決断と背景（2024-06-13）"
    url: "https://speakerdeck.com/3utama/timetree-aurora-kara-spanner-heno-yi-xing-nojue-duan-tobei-jing"
    accessedAt: "2026-08-06"
  - label: "TimeTree公式ニュースルーム: メンテナンス後の不具合対応完了のお知らせ（2025-01-12・移行カットオーバー当日）"
    url: "https://timetreeapp.com/intl/ja/newsroom/2025-01-12/2025-1-12-issue-resolution"
    accessedAt: "2026-08-06"
  - label: "TimeTree公式ニュースルーム: TimeTreeの最新技術スタックを公開します（2020-04-21）"
    url: "https://timetreeapp.com/intl/ja/newsroom/2020-04-21/technology-stack"
    accessedAt: "2026-08-06"
  - label: "Zenn / TimeTree Tech Blog: Web版TimeTreeのスタック変遷（2023-12-01）"
    url: "https://zenn.dev/timetree/articles/81c2adaeb29834"
    accessedAt: "2026-08-06"
  - label: "TimeTree Ads メディアガイド 2024.10-12（公式PDF）"
    url: "https://static.timetreeads.com/docs/timetreeads_mediaguide_20241012.pdf"
    accessedAt: "2026-08-06"
  - label: "TimeTree公式ニュースルーム: 広告配信プラットフォームTimeTree Adsの正式販売を開始（2018-07-03）"
    url: "https://timetreeapp.com/intl/ja/newsroom/2018-07-03/ads-release"
    accessedAt: "2026-08-06"
  - label: "TimeTree公式ニュースルーム: 未来行動ターゲティングでコネクテッドTV配信を開始（2025-06-23）"
    url: "https://timetreeapp.com/intl/ja/newsroom/2025-06-23/timetree-ads-ctv-delivery"
    accessedAt: "2026-08-06"
  - label: "TimeTree公式ニュースルーム: 広告接触後の来店計測機能の提供を開始（2025-10-15）"
    url: "https://timetreeapp.com/intl/ja/newsroom/2025-10-15/timetree-ads-store-visit-measurement"
    accessedAt: "2026-08-06"
  - label: "TimeTree公式ニュースルーム: 有料プラン「TimeTreeプレミアム」スタート（2022-04-19）"
    url: "https://timetreeapp.com/intl/ja/newsroom/2022-04-19/timetree-premium"
    accessedAt: "2026-08-06"
  - label: "CodeZine: ユーザー6500万超「TimeTree」の進化を支える組織論（2025-08-18）"
    url: "https://codezine.jp/article/detail/21914"
    accessedAt: "2026-08-06"
  - label: "TimeTree公式: 会社概要"
    url: "https://timetreeapp.com/intl/ja/corporate"
    accessedAt: "2026-08-06"
---

世の中のデータのほとんどは、過去のログである。検索履歴も、購買履歴も、視聴履歴も、すべて「もう終わったこと」の記録だ。企業はそれを機械学習にかけて、必死に未来を推定しようとする。ところが、ユーザーが自分の手で未来を書き込んでくれる場所が、ひとつだけある。カレンダーだ。TimeTreeの10年は、その一点を掘り続けた10年である。

## サービス解説

TimeTreeは、共有を前提に設計されたカレンダーアプリだ。Googleカレンダーが「自分の予定を管理する」道具なら、TimeTreeは「誰かと予定を分かち合う」道具として作られている。家族、カップル、サークル、シフト勤務の職場——ひとつのカレンダーを複数人で書き、その予定ごとにコメントを付けられる。

:::fact
公式ニュースルームによれば、2015年のサービス開始から10年で、2025年11月に世界の登録ユーザー数が7,000万人に到達（2024年10月時点で6,000万人超、うち国内2,700万人超）。200を超える国と地域で使われ、日本以外ではアメリカ・ドイツ・台湾・イギリス・韓国・フランス・オーストラリアの順に利用が多い。10周年インフォグラフィックスでは、累計登録予定数が2024年11月に110億件を突破し、これは1秒あたり36件の新しい予定が生まれている計算になると公表されている。運営元の株式会社TimeTreeは2014年9月設立、東京・西新宿に本社を置き、ソウルにもオフィスを構える。
:::

構造として重要なのは、予定そのものにコメント欄がぶら下がっていることだ。「土曜の何時に出る？」「保育園の面談、誰が行く？」という交渉が、チャットアプリではなくカレンダーの中で完結する。予定は会話の話題ではなく、会話の器になる。

:::pull
カレンダーに書かれる情報は、例外なく未来のものだ。SNSも検索もECも過去の行動ログを扱うが、TimeTreeの台帳だけは、まだ起きていないことで埋まっている。
:::

::scorecard

## UX分析

共有カレンダーというカテゴリ自体は珍しくない。TimeTreeが抜けているのは、数字に表れる定着の深さである。

:::fact
公式のTimeTree Adsメディアガイド（2024.10-12版）によれば、日本国内のWAU/MAUは85%で、サービスローンチ以来8年間にわたり70%以上を維持している。1つのカレンダーあたり平均37個の予定が毎月作成され、ストアレビューは2024年8月時点でApp Store 4.6・Google Play 4.7。同ガイドは、朝に当日の予定を確認し、日中に共有相手とやりとりし、夜に翌日以降の予定を確認するという1日3回の利用シーンを想定利用として示している。
:::

WAU/MAU 85%は、コンシューマーアプリとしては異例の水準だ。この数字を支えている設計は、機能の派手さとは無関係なところにある。

- **相手がいるから開く**。自分ひとりのカレンダーなら見忘れても困らないが、共有相手が書き込んだ予定は見に行かざるを得ない。利用頻度が自分の意志ではなく他人の書き込みで決まる構造になっている。
- **やめるのに合意がいる**。乗り換えコストは自分の予定データではなく、共有相手との運用習慣に宿る。家族全員のカレンダーを別サービスへ移す交渉は、機能比較よりずっと重い。
- **交渉が中で終わる**。予定ごとのコメント欄があるため、日時調整のためにチャットアプリへ往復する必要がない。予定と会話が同じ場所にあることが、そのまま滞在時間になる。
- **書く動機が毎日ある**。写真共有アプリの投稿が子どもの成長という不定期なイベントに依存するのに対し、予定は毎週必ず発生する。ネタ切れという概念が構造的に存在しない。

2026年1月13日の発表では、10年ぶり規模のUI/UXリニューアルが告知された。複数カレンダーを「共有ごとの箱」として並べる従来の見せ方から、自分の時間を起点に複数のカレンダーを重ね合わせるホームカレンダーへ転換し、あわせて新機能「みつける」を追加している。トレンド予定（TimeTree上で登録数が急上昇している予定）、少し先のおすすめイベントやセール情報、フォロー中の団体やアーティストの公開カレンダー更新が並び、気になったものを保存して自分のカレンダーへ持ち込める。

:::guess
このリニューアルは、UIの刷新というより役割の変更とみられる。従来のTimeTreeは「すでに決まった予定を書き留める器」だった。「みつける」は、まだ決まっていない予定の候補を供給する側に回る機能であり、アプリを記録装置から需要喚起の場へ移そうとする動きだと推測される。後述する広告事業と同じ方向を向いており、プロダクトと収益の接続を正面から設計し直したものと考えられる。
:::

## 技術構成

TimeTreeは技術情報の公開が継続的で、2020年には公式サイトで全レイヤーの技術スタックを公開している。そして2024年から2025年にかけて、この種のサービスでは滅多に見られない大手術を実施した。

::techstack

:::fact
2024年6月の登壇資料によれば、データ規模は2018年から2024年の6年間でユーザー800万→5,500万人、レコード10億→130億、データ量1TB→13TBへ膨張した。移行の動機は機能不足ではなく物理上限で、Auroraのストレージ上限128TB、コネクション数上限約16,000、オンラインDDL時のローカルストレージ枯渇という3点が課題として挙げられている。Vitess・PlanetScale・Cloud Spannerを比較検討したうえでSpannerを採用。Google Cloud公式ブログ（2025-07-25）によれば、150億以上のレコードをDatastreamとSpanner移行ツールで移し、移行準備には1年以上を要し、計画停止の範囲内で致命的な問題なく完了した。カットオーバーは2025年1月12日午前2時（日本時間）からのメンテナンスで実施されている。移行後はSpannerに加えCloud Run・BigQuery・Cloud CDN・Memorystore for Valkey・Pub/Sub・Lookerを利用している。
:::

もっとも、当日が無風だったわけではない。TimeTree自身が同じ1月12日に出したお知らせによれば、メンテナンス後に一部ユーザーでサービスが正常に利用できない状態が発生し、iOS・Android・Webの各プラットフォームで同日午後7時に修正対応が完了している。午前2時の開始から数えて17時間後の全面復旧であり、当日中に自社サイトで告知して収束させている。導入事例が「致命的な問題なく」と要約する範囲の内側にも相応の現場があったことは、記録しておく価値がある。

当サイトでも2026年8月6日にレスポンスヘッダーを観測し、`server: Google Frontend` / `via: 1.1 google` によるGoogle Cloud上での配信を確認した。コーポレートサイトは `x-powered-by: Next.js` を返す一方、アプリ側の入口は `x-runtime` / `x-request-id` というRails系のヘッダーを返しており、2020年に公開されたRailsベースのバックエンドが現役であることと整合する。

:::guess
注目すべきは、壊れる前に作り直したという判断そのものだ。128TBの上限に対して13TB、つまり残り10倍近い余裕がある段階で、1年以上をかけた移行に踏み切っている。カレンダーは削除されないデータだ。過去の予定は消されず、未来の予定は毎秒36件のペースで積まれ続ける。単調増加する台帳を持つサービスにとって、容量の天井はそのままサービスの寿命の天井になる。Spannerの水平スケールを選んだのは、新機能のためではなく「終わらせないため」の投資だったとみられる。あわせてAWS中心の構成からGoogle Cloudへ主軸を移したことで、BigQuery・Lookerを含む分析基盤とアプリケーションDBが同一クラウド内に揃った。予定データの分析が事業の中核である以上、この一体化は移行の副次効果ではなく目的の一部だったと推測される。
:::

## ビジネスモデル

TimeTreeはサービス開始から3年近く、収益化の仕組みを持たなかった。現在の柱は広告とサブスクリプションの2本だが、広告のほうは一般的なアプリ内広告とは設計思想が違う。

:::fact
公式発表によれば、TimeTree Adsは2017年12月にβ版として始まり、2018年7月に正式販売を開始した。最大の特徴はユーザー属性ではなく登録された予定に対して配信できることで、当時の検証では旅行関連広告で予定ターゲティング利用時に非利用時の約2.2倍の効果差が確認されたと報告されている。メディアガイド（2024.10-12版）によれば、年間20億件以上登録される予定データを1st Party Dataとして活用し、Cookieに依存しないターゲティングを提供する。メニューはプレミアムリーチ・ターゲットデイ・ペルソナターゲティング・セルフサーブの4種類で、ペルソナのセグメント例には出産予定・結婚・引越し・車検・ゴルフといった予定単位の区分が並ぶ。TimeTree独自の広告フォーマットとして、タップすると事前設定された予定がユーザーのカレンダーに保存され、共有相手にも共有される予定作成型広告がある。有料プランのTimeTreeプレミアムは2022年4月下旬開始で、月額300円または年額3,000円、広告非表示と専用サポート窓口を提供する。
:::

2025年に入ってからの展開が、この事業の射程を示している。6月23日にはマイクロアドと組み、未来行動ターゲティングとしてコネクテッドTVへの配信を開始した。来春に小学校へ進学する子どもがいる世帯へ、テレビ画面でファミリー向け自動車の広告を出す、といった使い方が可能になる。10月15日にはブログウォッチャーの位置情報データを使い、広告接触後の実店舗来店を計測する機能の提供を始めた。予定データはアプリの外へ持ち出され、テレビ画面と実店舗の往来にまで接続されつつある。

:::guess
広告在庫の価値は、届く人数ではなく「いつ買うかを知っていること」で決まる。検索広告は今この瞬間の意図を、SNS広告は過去の関心の蓄積を扱うが、予定データは日付のついた未来の意図という第三のカテゴリに属する。引越しの2週間前、車検の1ヶ月前、結婚式の半年前——購買が発生する時点が事前に判明している広告枠は、他のどの媒体からも作れない。予定作成型広告に至っては、広告そのものをユーザーの台帳に書き込ませることで、以後の閲覧のたびに無料でリマインドが再生される仕組みになっている。一方でリスクも見える。予定という極めて私的なデータを収益源にする以上、事業の拡大とプライバシー期待の衝突は避けられず、プレミアムが広告非表示を主価値に置いていることは、広告体験が一定の負荷であることを会社自身が認めている形でもある。月額300円という価格設定からは、サブスクリプションを主収益ではなく広告への不満の受け皿として位置づけているとみられる。
:::

10年かけてTimeTreeが積み上げたのは、写真でもフォローグラフでもなく、日付のついた意思の台帳だった。過去のログを解析して未来を当てにいく企業が並ぶなかで、この会社だけは、ユーザーが自分の手で書いた未来を最初から持っている。150億レコードを積み替えるという判断の重さは、その台帳が止まることの意味を、誰よりも本人たちが理解していたことの証左である。
