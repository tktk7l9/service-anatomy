---
service: "RENOSY"
title: "自らをAmazonになぞらえる不動産会社 — RENOSYが売上2,000億円を「ネット」で語る理由"
description: "AI不動産投資「RENOSY」。運営するGA technologiesの売上収益は9か月で2,116億円に達するが、会社が業績の見出しに置くのは売上総利益ベースの「ネット売上収益」だ。物件を仕入れて投資家に売る事業を「マーケットプレイス」と呼び、在庫を16日で回すと説明する理由を、決算短信・決算説明資料・コーポレートストーリー、公式サイト、公式ニュースと開発者ブログから解剖する。"
lead: "RENOSYは、会社員が中古のワンルームマンションなどを買って貸す「不動産投資」を、資料請求からローン契約までオンラインで進められるサービスだ。運営するGA technologiesの売上収益は2026年10月期の9か月で2,116億円。ところが会社は、この数字ではなく「ネット売上収益」385億円を業績の中心に置き、自らの事業をAmazonになぞらえて「マーケットプレイス」と呼ぶ。物件を仕入れて売る会社が、なぜ在庫の回転日数で自分を語るのか。IR資料と開発者ブログから解剖する。"
category: consumer-app
tags: [real-estate, marketplace, fintech, ruby-on-rails, snowflake]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.renosy.com/"
# Affiliate link placeholder: the owner must join a RENOSY affiliate program via an ASP
# before enabling this block. Third-party ASP directories (e.g. affi-search.com, last updated
# 2022-11) list RENOSY on A8.net and afb; this was not confirmed on an official GA technologies
# or RENOSY page, and the reward conditions (e.g. a completed first consultation) must be read
# on the ASP after joining. Investment-property ads also carry extra rules, so check the
# program terms before linking from this article.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<renosy-affiliate-tracking-link>"
#   program: "RENOSY real-estate investment consultation (ASP)"
vendor: "GA technologies Co., Ltd."
origin: "JP"
heroTheme: "renosy"
scores: { product: 4.0, ux: 3.5, tech: 3.5, business: 4.0 }
techStack:
  - layer: "データ基盤（DWH）"
    name: "Snowflake"
    confidence: confirmed
    evidence: "GA technologies公式ニュース（2026-09-02）に、2024年に活動を始めたData Divisionが分析基盤としてDWHを採用し、同年からSnowflakeをはじめとした技術の導入を進めたと明記。登壇概要では、面談・電話・チャット・メールに散らばる顧客の声をSnowflakeに集約し、LLMやEmbeddingモデル、Streamlit in Snowflakeで分析する「全社VoC分析基盤」を紹介している"
    evidenceUrl: "https://www.ga-tech.co.jp/news/5vc1yoh7r4p0c37/"
  - layer: "データパイプライン"
    name: "Dagster + dbt + Apache Iceberg (AWS Glue Catalog) on Amazon ECS Fargate"
    confidence: confirmed
    evidence: "公式開発者ブログ（Zenn、2026-06-15）に、データ基盤のオーケストレーターとしてDagsterを入れ、主にAmazon ECS on Fargateで動かしていると明記。データは「外部サービスや自社プロダクト -> S3 -> Snowflake -> BI tool」と流れ、データレイク上のデータをIcebergテーブル化してdbtとSnowflakeに認識させ、テーブル情報をAWS Glue Catalogで管理していると書いている"
    evidenceUrl: "https://zenn.dev/gatechnologies/articles/76b3f400c26d1a"
  - layer: "機械学習パイプライン"
    name: "Amazon SageMaker Pipelines"
    confidence: confirmed
    evidence: "公式開発者ブログ（Zenn、2026-06-24）に、RENOSYをはじめとする不動産テックサービスで蓄積したデータを使うMLパイプラインをSageMaker Pipelines中心に組み、Snowflakeの推論用データをS3経由で受け渡し、監視はサードパーティツールを足さずCloudWatchを中心としたAWSネイティブの機能で済ませたと明記"
    evidenceUrl: "https://zenn.dev/gatechnologies/articles/sagemaker-ml-pipeline"
  - layer: "Webアプリケーション"
    name: "Ruby on Rails"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-28）で、www.renosy.com のHTMLが csrf-token のmetaタグを持ち、レスポンスが x-runtime と x-request-id を返す（Railsの既定の挙動と一致）。RENOSYマガジンは _renosy_magazine_cms_session というRails形式のセッションCookieを発行する。公式開発者ブログ（2026-04）には、社内のプロダクトがRails 8.0へ上げる際にテストをRSpecへ移したとあるが、プロダクト名は書かれていない。同社は公式開発者ブログ（2026-05）によればRubyKaigi 2026にPlatinumスポンサーとしてブースを出し、公式ニュースによればKaigi on Rails 2026にゴールドスポンサーとして協賛している"
  - layer: "CDN"
    name: "Amazon CloudFront + nginx"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-28）で、www.renosy.com のトップと RENOSYマガジンが server: nginx、via: CloudFront、x-amz-cf-pop: NRT20-P2 を返し、一部のURLは CloudFront Functions の生成レスポンス（x-cache: FunctionGeneratedResponse from cloudfront）でリダイレクトされる。公式ドキュメントでの明言は見当たらない"
  - layer: "フロントエンド計測"
    name: "Datadog RUM"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-28）で、www.renosy.com のHTMLが Datadog RUM のブラウザSDK（datadog-rum.js v6）を読み込んでいる。公式開発者ブログ（2025-12）は、ログイン後画面の体験を測るためにDatadog RUMを入れ、APMとつないだ経緯を書いているが、対象プロダクト名は明記していない"
  - layer: "Web接客"
    name: "KARTE"
    confidence: likely
    evidence: "当サイトの実観測（2026-09-28）で、www.renosy.com のHTMLが KARTE のタグ（cdn-edge.karte.io の edge.js）を読み込んでいる"
  - layer: "UIスタイリング"
    name: "Tailwind CSS"
    confidence: speculative
    evidence: "当サイトの実観測（2026-09-28）で、www.renosy.com のHTMLに desktop:[&>div]:before:w-2 のような任意値バリアント付きのユーティリティクラスが大量に並ぶ。Tailwind CSSの記法と一致するが、公式の明言は見当たらない"
  - layer: "業務AI"
    name: "In-house AI (listing-sheet reading, rent prediction, consultation support)"
    confidence: confirmed
    evidence: "公式ニュース（2026-03-31）に、物件販売図面の自動読み取りとデータ化などAIをはじめとするテクノロジー活用で迅速な買取を実現し、家賃予測ツールや面談支援AIでパーソナライズした情報を顧客に提供していると明記"
    evidenceUrl: "https://www.ga-tech.co.jp/news/wherjxrzxv88n_r/"
  - layer: "ローン手続き"
    name: "MORTGAGE GATEWAY by RENOSY"
    confidence: confirmed
    evidence: "RENOSY公式サイトの「ご契約の流れ」に、売買契約はRENOSYマイページで進み、銀行とのローン契約もオンラインで手続きできるプラットフォームとして、グループ会社の株式会社RENOSY Xが提供する「MORTGAGE GATEWAY by RENOSY」を用意していると明記（金融機関によっては未対応）"
    evidenceUrl: "https://www.renosy.com/investment/why_renosy/flow"
sources:
  - label: "株式会社GA technologies: 2026年10月期 第3四半期決算短信〔IFRS〕（連結）（2026-09-14）"
    url: "https://www.release.tdnet.info/inbs/140120260914535676.pdf"
    accessedAt: "2026-09-28"
  - label: "株式会社GA technologies: 2026年10月期 第3四半期 決算説明資料（2026-09-14）"
    url: "https://ssl4.eir-parts.net/doc/3491/tdnet/2884649/00.pdf"
    accessedAt: "2026-09-28"
  - label: "株式会社GA technologies: コーポレートストーリー（2026年9月）"
    url: "https://ssl4.eir-parts.net/doc/3491/ir_material_for_fiscal_ym/210705/00.pdf"
    accessedAt: "2026-09-28"
  - label: "GA technologies公式ニュース: 2026年10月期 第3四半期 決算説明関連資料（2026-09-14）"
    url: "https://www.ga-tech.co.jp/news/0524ezmlf2shq7d/"
    accessedAt: "2026-09-28"
  - label: "GA technologies公式ニュース: AI不動産投資のRENOSY、投資用マンションおよびアパートの売上実績で2年連続全国No.1を獲得（2026-03-31）"
    url: "https://www.ga-tech.co.jp/news/wherjxrzxv88n_r/"
    accessedAt: "2026-09-28"
  - label: "GA technologies公式ニュース: AI不動産投資のRENOSY、「資産形成プラットフォーム」へ進化（2026-06-30）"
    url: "https://www.ga-tech.co.jp/news/s9u_k77tl28fjels/"
    accessedAt: "2026-09-28"
  - label: "GA technologies公式ニュース: AI不動産投資のRENOSY、「不動産投資顧客動向レポート 2026年4〜6月」を公開（2026-08-05）"
    url: "https://www.ga-tech.co.jp/news/ruojmgsy5i49a_9w/"
    accessedAt: "2026-09-28"
  - label: "RENOSY公式サイト: トップページ（不動産投資の流れ・初回面談特典・口コミ評価）"
    url: "https://www.renosy.com/"
    accessedAt: "2026-09-28"
  - label: "RENOSY公式サイト: ご契約の流れ"
    url: "https://www.renosy.com/investment/why_renosy/flow"
    accessedAt: "2026-09-28"
  - label: "GA technologies公式ニュース: GA technologiesのデータ人材が「Snowflake World Tour Tokyo 2026」にて2セッションに登壇（2026-09-02）"
    url: "https://www.ga-tech.co.jp/news/5vc1yoh7r4p0c37/"
    accessedAt: "2026-09-28"
  - label: "GA technologies公式ニュース: 「Kaigi on Rails 2026」ゴールドスポンサー協賛およびブース出展のお知らせ（2026-09-04）"
    url: "https://www.ga-tech.co.jp/news/ja17cw281bk4a3wp/"
    accessedAt: "2026-09-28"
  - label: "GA technologies開発者ブログ（Zenn）: データ基盤にDagsterを導入した話（2026-06-15）"
    url: "https://zenn.dev/gatechnologies/articles/76b3f400c26d1a"
    accessedAt: "2026-09-28"
  - label: "GA technologies開発者ブログ（Zenn）: SageMaker中心のスケールするMLパイプラインの構築（2026-06-24）"
    url: "https://zenn.dev/gatechnologies/articles/sagemaker-ml-pipeline"
    accessedAt: "2026-09-28"
  - label: "GA technologies開発者ブログ（Zenn）: AIコード生成に「秩序」を。900ファイルのテストを2ヶ月でRSpecへ完全移行した軌跡（2026-04-22）"
    url: "https://zenn.dev/gatechnologies/articles/3694b4daf9ea6e"
    accessedAt: "2026-09-28"
  - label: "GA technologies開発者ブログ（Zenn）: GA technologiesがRubyKaigi 2026にブース初出展してきました！（2026-05-01）"
    url: "https://zenn.dev/gatechnologies/articles/3ac3995ada18cc"
    accessedAt: "2026-09-28"
  - label: "GA technologies開発者ブログ（Zenn）: Datadog RUMでログイン後画面の体験を数値で語れるようにした話（2025-12-22）"
    url: "https://zenn.dev/gatechnologies/articles/147acc3197651f"
    accessedAt: "2026-09-28"
---

不動産の会社は、ふつう「売上」で自分を語る。RENOSYを運営するGA technologiesの売上収益は、2026年10月期の9か月だけで2,116億円ある。ところが会社が決算資料の先頭に置くのは、その2割にも満たない「ネット売上収益」だ。そして自社の事業を、Amazonと並べて「マーケットプレイス」と説明する。物件を仕入れて投資家に売る会社が、なぜ売上ではなく粗利と回転日数で自分を語るのか。

## サービス解説

RENOSY（リノシー）は、GA technologiesが2016年から運営する「AI不動産投資」のサービスだ。会社員などの個人が、中古のワンルーム（同社の呼び名では「STUDIO」）やコンパクトマンションを中心に、アパート、戸建て、海外不動産を買い、家賃収入を得る。資料請求から面談、申し込み、売買契約、ローン契約、購入後の賃貸管理、売却までを一つのサービスでまとめて扱う。運営会社は東証グロース市場に上場している。

:::fact
決算短信（2026-09-14）によれば、GA technologiesの2026年10月期第3四半期累計（2025年11月〜2026年7月）の売上収益は2,116億円（前年同期比24.8%増）。一方、事業利益は57.2億円（同3.6%減）、営業利益は53.9億円（同9.9%減）、親会社の所有者に帰属する四半期利益は27.3億円（同9.0%減）だった。会社が別に開示する「ネット売上収益」（RENOSYマーケットプレイス事業の売上総利益＋ITANDIなどの売上収益）は385.3億円（同24.2%増）。通期予想は売上収益3,230億円、ネット売上収益559億円、事業利益100億円で据え置いた。
:::

:::fact
同じ決算短信のセグメント情報によれば、報告セグメントは「RENOSYマーケットプレイス事業」と、不動産会社向けSaaSの「ITANDI事業」の二つ。第3四半期累計のRENOSYマーケットプレイス事業の売上収益は2,052.8億円、セグメント利益は103.0億円で、連結売上の約97%を占める。セグメントの説明には、国内外の不動産の購入・売却・管理運用のワンストップ提供、オーナー向けのサブスクリプション型の管理プラン、不動産ファンドの組成・販売・運用などが並ぶ。
:::

:::pull
物件を仕入れて売る会社が、自分を「マーケットプレイス」と呼ぶ。掲げる数字は売上ではなく、在庫が現金に戻るまでの16日だ。
:::

::scorecard

## UX分析

RENOSYのUXは、数千万円の買い物である投資用マンションを、ネット通販に近い手順まで分解することに向いている。一方で、決め手になる場面にはいまも人の面談が座っている。

- **入口は資料請求、次は人の面談**。公式サイトの「ご契約の流れ」によれば、資料請求のあと同社の「Asset Planner（アセットプランナー）」から電話かメールで面談の日程調整の連絡が来る。面談はオンラインが基本で、ライフプランに合わせた提案、仕組みとリスクの説明、販売物件と管理プランの提案、収支シミュレーションを行う。トップページは、初回面談でPayPayポイント5万円分を贈る特典（条件・上限あり）を掲げている。
- **契約はマイページとオンラインのローン手続きで進む**。申し込みはオンラインで、売買契約はRENOSYマイページで進行し、銀行とのローン契約はグループ会社のRENOSY Xが提供する「MORTGAGE GATEWAY by RENOSY」で手続きできる（金融機関によっては未対応）。公式サイトは申し込み時期や審査次第としながら「最短1週間」でオーナーになれるとし、契約翌月1日にアプリとマイページへ管理情報が反映されると書く。
- **買った後もアプリが窓口になる**。マイページでは面談予定、契約手続き、購入した不動産の管理運用、確定申告のサポートまでを扱う。売却については「スマホから自分で価格を設定して売り出すことができます」と説明している。
- **口コミを前面に出す**。トップページは口コミの総合評価4.3（回答数7,242件、2026年9月現在）を掲げ、各口コミに年代・性別・年収帯・勤務先を添えて並べる。
- **成約顧客の8割に投資経験がある**。公式ニュース（2026-08-05）の顧客動向レポートによれば、2026年4〜6月の成約顧客のうち「投資経験あり」は80%で、四半期単位で初めて8割を超えた。年齢は40代が40%、30代が26%。年収は1,000万〜1,500万円未満が26%、1,500万〜3,000万円未満が27%。決算説明資料は、直近1年の購入オーナーのうち年収1,000万円超が50%を占めるとしている。

## 技術構成

::techstack

:::fact
GA technologiesの公式ニュース（2026-09-02）によれば、同社のData Divisionは2024年に横断組織として活動を始め、分析基盤としてDWHを採用し、同年からSnowflakeをはじめとした技術を導入した。RENOSYなどの事業を通じた実践例として、面談・電話・チャット・メールに散らばる顧客の声をSnowflakeに集め、Snowflake上のLLMやEmbeddingモデル、Streamlit in Snowflakeで抽出から可視化まで行う全社のVoC分析基盤を挙げている。公式開発者ブログ（2026-06）は、データの流れを「外部サービスや自社プロダクト -> S3 -> Snowflake -> BI tool」と書き、オーケストレーターにDagster（Amazon ECS on Fargate上）、変換にdbt、データレイクのテーブル形式にApache Iceberg（カタログはAWS Glue）を使っていると説明している。機械学習はSageMaker Pipelinesが中心で、Snowflakeの推論用データをS3経由で受け渡し、監視は追加のツールを入れずCloudWatchを中心に組んでいる。
:::

:::fact
公式ニュース（2026-03-31）によれば、RENOSYは物件販売図面の自動読み取りとデータ化などAIをはじめとするテクノロジーで買取を速め、家賃予測ツールや面談支援AIでパーソナライズした情報を顧客に出している。決算説明資料は、不動産会社から届く仕入情報、AI査定金額、管理資産残高を合計した「物件パイプライン」（直近12ヶ月、中古コンパクトマンションのみ）が5.0兆円に達したとし、コーポレートストーリーはAI査定の累計件数を4.8万件超（2025年10月末）としている。
:::

:::guess
当サイトの実観測では、www.renosy.com はCloudFrontの背後でnginxが応答し、レスポンスヘッダとHTMLにRuby on Railsの既定の挙動と一致する痕跡がある。同社の開発者ブログにはRails 8.0への更新やRSpecへの移行の記事が並び、RubyKaigiやKaigi on Railsに協賛していることから、RENOSYのWebアプリケーションの中核はRailsで作られているとみられる。ただし公式にRENOSYの構成を明言した一次資料は見つけられなかった。技術の重心は、画面よりもデータの側にあるようにみえる。仕入情報を読み取り、家賃を予測し、面談の記録まで一つのDWHに集めるという投資の並びは、後述する「在庫を短く回す」ビジネスの要求に沿ったものと推測される。
:::

## ビジネスモデル

RENOSYの収益は、会社の整理では「マーケットプレイス」「サブスクリプション」「アセットマネジメント」の三つに分かれる。主役は一つ目だ。

:::fact
コーポレートストーリー（2026年9月）は、従来型の不動産投資販売を「営業人員による仕入販売モデル」「在庫保有期間における物件価格の値上がりで粗利を確保」と整理し、RENOSYを「買い手と売り手を即時につなぐプラットフォーム型モデル」「在庫の高速回転による取引の積み上がりで粗利を確保」と対比している。同資料はAmazonの1stパーティー事業と並べ、どちらも在庫を持つマーケットプレイスだと説明する。会社の集計では、物件情報の掲載から申し込みまでの「マッチング日数」は4日、CCC（キャッシュ・コンバージョン・サイクル）は16日、年22回転（2025年10月期）で、比較対象とした国内上場不動産会社の売上上位20社平均（CCC365日）やOpendoor・Offerpadの平均（同144日）より短いとしている。
:::

:::fact
決算説明資料によれば、第3四半期（2026年5〜7月）単体のRENOSY国内マーケットプレイスのネット売上収益は78.8億円（前年同期比10.4%増）、事業利益は23.9億円で、前年同期の25.3億円から減った。会社は、中期的な認知拡大のためのテレビCM（約5億円）を理由に挙げ、例年は第4四半期に投下していた広告宣伝費を今期は期初から約15億円計上したと説明している。サブスクリプション（賃貸管理）の契約件数は40,905件（前年同期比32%増）、RENOSY会員数は累計677,772人（同16%増）、直近12ヶ月の成約件数は約8,200件（同874件増）。入居者の入れ替え時に家賃を上げられた割合は90%を超えて推移しているという。
:::

:::fact
一方、決算短信の財政状態計算書では、棚卸資産が2025年10月末の116.8億円から2026年7月末の251.9億円へ増え、流動負債の社債及び借入金も124.9億円から258.1億円に増えた。この間の2026年6月30日には、金融商品取引業などを営むエスピーシー証券の完全子会社化を完了し、その子会社でアセットマネジメント事業を行うSPCアセットマネジメントもグループに加わった。公式ニュース（2026-06-30）は、不動産小口化商品など実物不動産以外の商品を扱い、RENOSYを「資産形成プラットフォーム」へ進化させるとしている。決算説明資料は、棚卸資産の前年同期比約97億円の増加を「今期4QおよびSPC証券グループとの経営統合による小口化事業加速に向けた戦略的かつ一時的な増加」と位置づけ、来期以降は収束していく見込みだと説明する。同じ頁が示す第3四半期末時点のCCCは26.3日で、前年同期の24.2日から2日ほど延びた。
:::

:::guess
売上2,000億円を超える会社が「ネット売上収益」を見出しに置くのは、物件の代金をまるごと売上に計上する仕入販売の会計と、自らを取引の場として見てほしいという主張とのずれを埋めるためとみられる。物件価格の大半は右から左へ流れるお金で、事業の実力を映すのは粗利と回転の速さだ、という説明である。この見方に立てば、四半期末の在庫が倍に増えたことをどう読むかが焦点になる。会社の説明どおり「戦略的かつ一時的」な積み上がりで来期以降に収束するなら、回転の速さという看板は保たれる。一方で、小口化商品の組成に向けて物件を抱える局面が続けば、在庫を短く回すモデルとの両立が課題になるとも読める。第3四半期末のCCCは前年同期比で2日ほどの延びにとどまっており、どちらに近いかは次の四半期以降のCCCの開示が答え合わせになると推測される。もう一つ、面談の特典やテレビCMに費用をかけて会員を増やす姿は、AIが仲立ちするマーケットプレイスというより、人の面談で成約する販売会社に近い面もある。会社がAIで面談の支援や物件の目利きを進めているのは、この「人が売る」部分を回転の速さに組み込むための投資とみられる。
:::

RENOSYは、不動産を「売る」会社と「つなぐ」場のあいだにいる。売上は仕入販売の大きさで膨らみ、会社は粗利と16日の回転で自分を語る。その主張が数字で持ちこたえるかどうかは、会社が「一時的」と説明する在庫の積み上がりが来期以降に収束し、第3四半期末に26.3日だったCCCがどこに着地するかで見えてくる。
