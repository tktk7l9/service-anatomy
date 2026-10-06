---
service: "note"
title: "会員1,313万人・MAU9,123万・年間流通総額213億円、売上は前年比+35%で営業利益は約3倍、AIに引用されるドメインで国内2位 — ランキングを置かずにLLMで届け直すnoteを解剖する"
description: "2014年に始まったメディアプラットフォームnoteは、2026年8月末で会員1,313万人・公開コンテンツ8,993万件、2025年11月期の流通総額（税込）は213億円に達した。2026年10月6日に出た2026年11月期第3四半期の決算では、四半期の売上高が14億5,300万円（前年同期比+35.1%）、営業利益が3億1,000万円（同+199.5%）。手数料はコンテンツの種類で10%か20%、決済手段で5〜15%。企業向けのnote proは月8万円（税抜）、個人向けのnoteプレミアムは月500円。ランキングを置かず、2026年2月にLLMでおすすめを作り直し、AI検索に引用されるドメインで国内2位、記事をまとめる「AIコンテクストネットワーク」と国のGENIACでAI時代の流通を狙う。決算説明資料・決算短信、公式の料金ページ、エンジニアチームの技術記事、当サイトの実観測から解剖する。"
lead: "noteのトップページには、ランキングがない。PVを稼げる書き方に寄るのを避けるためだと、同社は繰り返し説明してきた。代わりに置いたのが、記事を読んで分類するLLMと、読み手ごとのおすすめだ。2026年、AIで調べて答えを得て終わる人が増えるなかで、noteはAI検索に引用されるドメインで国内2位になり、売上を前年比35%伸ばし、営業利益を約3倍にした。ランキングを置かない場所が、AI時代に何を売ろうとしているかを解剖する。"
category: media
tags: [creator-economy, publishing, subscription, nextjs, ruby-on-rails, llm, aws, ai]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://note.com/"
# Affiliate link placeholder: no public affiliate or referral program for note pro or note
# premium was found (checked 2026-10-06 on pro.lp-note.com and premium.lp-note.com). The
# reader-side "note affiliate (beta)" ran only for a limited period in 2024 and has ended.
# Leave this block commented out unless the owner finds a program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<note-referral-link>"
#   program: "note"
vendor: "note株式会社"
origin: "JP"
heroTheme: "note"
scores: { product: 4.5, ux: 4.5, tech: 4.0, business: 4.5 }
techStack:
  - layer: "バックエンド"
    name: "Ruby on Rails + Sidekiq Enterprise (Redis)"
    confidence: confirmed
    evidence: "note社のエンジニアの記事（2021-06-23）に「初期のnoteはRuby on Railsのアセット上に構築されたSPAサイト」と明記。同社Advent Calendarの記事（2025-12-13）は、メール送信のレート制御を「Rails側で制御しよう」と考え、Redisベースのレートリミット機能を持つSidekiq EnterpriseのSidekiq::Limiterを導入したと書く"
    evidenceUrl: "https://note.com/sunakujira/n/ne325af361530"
  - layer: "フロントエンド"
    name: "Next.js + Svelte (shared components) / Nuxt.js (legacy pages) / Biome, monorepo"
    confidence: confirmed
    evidence: "noteエンジニアチームの記事（2025-02-01）が、2014年のAngular 1.x、2021年に完了したNuxt.jsへの移行、Nuxt 3への移行コストを理由に段階的にNext.jsへ切り替える方針、共通コンポーネントのSvelte化、モノレポ化、ESLintからBiomeへの移行までを時系列でまとめている"
    evidenceUrl: "https://engineerteam.note.jp/n/nb5b9d045cf86"
  - layer: "配信・サービス間通信"
    name: "Amazon CloudFront + Envoy / Next.js App Router (frontend.st-note.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、note.com の応答は via: CloudFront と x-envoy-upstream-service-time を返し、vary に rsc・next-router-state-tree が並び（Next.jsのApp Routerの応答）、link ヘッダは frontend.st-note.com/next/_next/static のCSSを nonce 付きでpreloadしていた。画像は assets.st-note.com から配信されていた"
  - layer: "記事のタグ付けとスコアリング"
    name: "Gemini 2.5 Flash-Lite (by subsidiary note AI creative)"
    confidence: confirmed
    evidence: "note社のイベントレポート（2026-04-06）で、エンジニアが「生成AIで記事にタグと品質スコアを付与するプロジェクト」は最初Gemini 2.0 Flash-Liteを使い、2026年1月中旬にGemini 2.5 Flash-Liteへ移したと説明。タグ付けは2023年12月設立の子会社note AI creativeのシステムが行い、結果をnoteのRDBに書き込む"
    evidenceUrl: "https://note.jp/n/nce0a239e3c40"
  - layer: "レコメンドのデータ基盤"
    name: "Snowflake + Databricks + Amazon S3 / SQS (formerly Amazon SageMaker)"
    confidence: confirmed
    evidence: "同レポートで、RDBがSnowflakeに同期され、Snowflakeを組織間の「責任分界点」にしたこと、機械学習のSaaSとしてDatabricksで分類・マッチング・レコメンドのロジックを動かし、S3やSQS経由でnote本体に非同期で反映すること、以前はAmazon SageMakerを使っていたことが説明されている"
    evidenceUrl: "https://note.jp/n/nce0a239e3c40"
  - layer: "メール配信"
    name: "Amazon SES"
    confidence: confirmed
    evidence: "同社Advent Calendarの記事（2025-12-13）に「note社では様々なメールを日々配信していますが、AWS SESを使って配信している部分も多くあります」と明記し、SESの秒間送信レートの上限を超えないための制御を説明している"
    evidenceUrl: "https://note.com/sunakujira/n/ne325af361530"
  - layer: "社内のAI利用"
    name: "Claude (all employees) / Claude Code"
    confidence: confirmed
    evidence: "2026年11月期第3四半期の決算説明資料（2026-10-06）に「全社員共通のAIツールとしてClaudeを配布」「経営陣・マネージャーが自ら手を動かすClaude Code研修を実施」「要件定義・設計・コーディングまでAIエージェントと進める開発フロー」と明記"
    evidenceUrl: "https://www.release.tdnet.info/inbs/140120261006546608.pdf"
sources:
  - label: "note株式会社: 2026年11月期第3四半期 決算説明資料（2026-10-06）"
    url: "https://www.release.tdnet.info/inbs/140120261006546608.pdf"
    accessedAt: "2026-10-06"
  - label: "note株式会社: 2026年11月期第3四半期 決算短信（2026-10-06）"
    url: "https://www.release.tdnet.info/inbs/140120261006546607.pdf"
    accessedAt: "2026-10-06"
  - label: "note pro（公式・料金）"
    url: "https://pro.lp-note.com/"
    accessedAt: "2026-10-06"
  - label: "noteプレミアム（公式）"
    url: "https://premium.lp-note.com/"
    accessedAt: "2026-10-06"
  - label: "note株式会社: 書けば、届くべきひとに届く。noteがLLMでレコメンドをつくり直した舞台裏（2026-02-13）"
    url: "https://note.jp/n/nf016d2c0bc2f"
    accessedAt: "2026-10-06"
  - label: "note株式会社: noteのレコメンド刷新ーー PV2倍を支えた組織とシステムの境界設計（2026-04-06）"
    url: "https://note.jp/n/nce0a239e3c40"
    accessedAt: "2026-10-06"
  - label: "noteエンジニアチーム: noteのフロントエンドのざっくり歴史まとめ（2025-02-01）"
    url: "https://engineerteam.note.jp/n/nb5b9d045cf86"
    accessedAt: "2026-10-06"
  - label: "note株式会社: Next.js + SvelteによるnoteのフロントエンドApp分割（2021-06-23）"
    url: "https://note.jp/n/n7f757d7050f6"
    accessedAt: "2026-10-06"
  - label: "note株式会社 Advent Calendar 2025: AWS SESのレートリミットとうまく付き合うためのSidekiq::Limiter（2025-12-13）"
    url: "https://note.com/sunakujira/n/ne325af361530"
    accessedAt: "2026-10-06"
---

noteは、記事を投稿し、無料でも有料でも公開できるメディアプラットフォームだ。2014年に始まり、個人の日記から企業の広報、省庁や自治体の発信までが同じ場所に並ぶ。[しずかなインターネット](/ja/articles/sizu-me)が小ささを、[Ghost](/ja/articles/ghost)が書き手の独立を看板にするのに対し、noteは「ランキングのない大きな場所」を作ってきた。そして2026年、その場所はAIに読まれる場所になりつつある。

## サービス解説

noteでは、誰でも記事を書き、有料記事・有料マガジン・定期購読マガジン・メンバーシップ・チップで読者からお金を受け取れる。企業や団体は月額のnote proで独自ドメインのオウンドメディアを持てる。運営のnote株式会社は東証グロース市場に上場している（証券コード5243）。

:::fact
note株式会社の2026年11月期第3四半期の決算説明資料（2026年10月6日公表）によれば、noteの会員登録者数は2026年8月末で1,313万人、公開コンテンツ数は8,993万件、2025年11月期の年間流通総額（GMV・税込）は213億円だった。非会員を含め月1回以上アクセスしたブラウザ数であるMAUは、2025年12月〜2026年5月の平均で9,123万。同資料はSimilarwebを引用し、2026年6月1日時点の日本のWebサイトのアクセスランキングで note.com が13位だとする。また、総務省が情報流通プラットフォーム対処法にもとづいて指定する「大規模特定電気通信役務提供者」に、Google、Meta、LINEヤフーなどとともに指定され、2026年8月31日時点の指定は13事業者だと書く。第3四半期には外務省と経済産業省、岩手県釜石市・兵庫県明石市などの自治体、青森県の全県立学校などが発信を始めた。
:::

:::fact
同じ資料によれば、2025年11月期のクリエイター上位1,000人の平均年間売上は1,515万円で、記事を購入した読者のうち1年に2カ月以上購入した人が金額ベースで91.4%、6カ月以上が70.5%だった。noteは2026年2月12日に、おすすめの仕組みをLLMを使って全面的に作り直した。CEOの加藤貞顕氏はインタビュー（2026-02-13）で、noteには約7,000万件の作品があり（2025年11月末時点）、月200万件以上の投稿があると述べ、「noteには、あえてランキングを置いていない」と説明している。
:::

:::pull
ランキングを置かず、LLMに記事を読ませて届け直す。その場所が、AI検索に引用されるドメインで国内2位になった。
:::

::scorecard

## UX分析

noteの体験は「書く人が数字に引っぱられない」ことと「読む人が自分に合う記事に出会える」ことの両立に向けられている。その両立を、ランキングではなく分類とおすすめで作ろうとしている。

- **ランキングを置かない**。CEOの加藤氏は2026年2月のインタビューで、ランキングがあるとクリエイターが数字を意識した発信に偏り、多様性が失われると説明する。代わりにトップページに置いたのは、全53カテゴリ、毎時間更新されるトピック、新設の「急上昇」、読み手ごとの「おすすめ」だ。
- **LLMが記事を読んで分類する**。インタビューと2026年4月のイベントレポートによれば、記事が投稿されるとほぼリアルタイムでLLMがタグと品質スコアを付け、トピックごとに分類し、読み手の行動履歴とマッチングする。AIが生成した文章をそのまま貼ったような記事は表示の優先度が下がり、攻撃的な表現なども判定される。カテゴリページ経由のインプレッションは2026年2月末時点で約4.5倍、PVは約2.6倍（概算）になったとしている。
- **売る仕組みは段階的に開く**。noteプレミアムの公式ページによれば、月額制のメンバーシップは2022年7月から無料会員でも始められる。月500円のnoteプレミアムに入ると、定期購読マガジンの申し込み、予約投稿、販売価格の上限を10万円まで引き上げる設定、つくれるマガジン数の21個から1,000個への拡大、1日にアップロードできるファイル数の10件から100件への拡大などが加わる。加入月は無料だ。
- **日本語の記事を外へ**。決算説明資料によれば、AIによる自動翻訳を2026年3月に一部のクリエイター向けに始め、5月に全クリエイターの無料記事の英語翻訳、8月下旬に有料記事の英語翻訳と無料記事の韓国語翻訳に広げた。韓国のNAVERの「AI Briefing」でnoteの記事が引用され始めたとも書く。
- **弱点は手数料の読みにくさ**。読者が払った額から、コンテンツの種類で決まるプラットフォーム利用料と、決済手段で決まる事務手数料が引かれる。同じ1,000円の記事でも、読者が何で払ったかで書き手の受取額が変わる。

## 技術構成

::techstack

:::fact
noteのフロントエンドは3度作り替えられている。noteエンジニアチームの記事（2025-02-01）と、2021年6月の登壇の書き起こしによれば、2014年のnoteはRuby on Railsのアセットパイプライン上に構築したAngularJSとCoffeeScriptのSPAで、SSRができずクローラー向けにヘッドレスブラウザでHTMLを返していた。2018年にNuxt.jsへの移行を始め、2021年に完了した。しかしNuxt 3への移行コストと互換性の問題が大きく、Next.jsへ段階的に切り替える方針に変え、エディタや設定ページなどを独立したNext.jsのアプリとして切り出し、NuxtとNextの両方で使える共通コンポーネントをSvelteで作っている。モノレポ化し、ESLintからBiomeへ移った。当サイトの実観測（2026-10-06）では、note.com のトップページはNext.jsのApp Routerの応答（vary に rsc）を CloudFront 経由で返し、Envoyのヘッダ（x-envoy-upstream-service-time）が付いていた。
:::

:::fact
2026年4月6日に公開されたイベントレポートで、noteのエンジニアはレコメンドの構成を初めて図で示した。子会社note AI creative（2023年12月設立）のシステムがGeminiで記事にタグと品質スコアを付け（2026年1月中旬にGemini 2.0 Flash-Liteから2.5 Flash-Liteへ移行）、noteのRDBに書き込む。そのRDBがSnowflakeに同期され、Snowflakeを組織間の「責任分界点」として、note側はDatabricksで分類・マッチング・レコメンドのロジックを動かし、S3やSQS経由でnote本体に非同期で反映する。以前はAmazon SageMakerを使っていたが、運用の難易度が高く、定常的に保守するチームがなかったという。バックエンドについては、2025年12月13日の記事が、AWS SESのメール送信をRails側で制御するためにSidekiq Enterpriseのレートリミット機能を導入したと書いている。決算説明資料は、全社員にClaudeを配り、要件定義からコーディングまでAIエージェントと進める開発フローを取り入れ、売上が伸びる一方で人員数は横ばいだと説明する。
:::

:::guess
noteの技術の選び方は、全面的な作り直しを避け、境界で分ける方向で一貫しているとみられる。フロントエンドは機能ごとに独立したNext.jsのアプリに切り出し、旧来のNuxtと共存させる。レコメンドは子会社・データ基盤・本体の3者をSnowflakeとS3・SQSで非同期につなぎ、それぞれが自分の領域だけを変えられるようにする。CloudFrontの後ろにEnvoyが見えることも、複数のアプリをパスごとに振り分ける構成と整合的と推測される。タグ付けに上位モデルではなくFlash-Liteの系統を使っているのは、月200万件を超える投稿をほぼリアルタイムで処理する費用を抑える判断とみられる。
:::

## ビジネスモデル

収益の土台は、読者が記事に払うお金から取る手数料だ。その上に、企業向けのnote pro、AI事業者向けのデータ、IPのライセンスが積み上がる。

:::fact
決算説明資料によれば、2026年11月期第3四半期（2026年6〜8月）の連結売上高は14億5,300万円（前年同期比+35.1%）、調整後EBITDAは3億3,800万円（同+193.4%）、営業利益は3億1,000万円（同+199.5%）、当期純利益は3億3,400万円。第3四半期までの累計の売上高は40億5,800万円（同+33.2%）で、7月7日に公表した通期予想（売上高56億5,000万円、調整後EBITDA12億2,000万円、営業利益11億円）に対し、各段階利益は上振れでの着地を見込む。事業はnote、note pro、法人向けサービス、AI関連（国の生成AIプロジェクトGENIAC）、IP関連（Tales & Co.）に分かれ、重視するKPIはnoteのGMVとnote proのARRだ。noteのGMVに占めるサブスク（定期購読マガジンとメンバーシップ）の比率は29.4%、月間購読者数は前年同期比+20.7%、ARPPUは2,700円台。note proのARRは同+29.5%、有料契約数は同+145件だった。2025年12月にNAVER、2026年4月にKADOKAWAから出資を受け、借入金を返済し、2026年8月末の現預金は78億9,600万円、自己資本比率は70.6%。
:::

:::fact
同資料の手数料の説明によれば、プラットフォーム利用料は有料単発コンテンツ・有料マガジン・チップ・メンバーシップが10%、定期購読マガジンが20%。事務手数料は決済手段で異なり、クレジットカード5%、PayPal 6.5%、PayPayとAmazon Payが7%、noteポイント10%、携帯キャリア決済15%。テイクレート（GMVに占める両者の割合）は、単発コンテンツとメンバーシップの伸びや決済手段の拡充で下がっているが、計算上の下限は15%だとする。企業向けのnote proの公式ページ（2026-10-06時点）は、初期費用と申し込み月を0円、月額8万円（税抜）、年額88万円（税抜）とし、地方公共団体・学校・文化施設向けの無償プランがあると書く。
:::

:::guess
noteの事業は、読者の課金という「量に左右されにくい」土台の上に、AI時代の流通を売る層を足す形とみられる。決算説明資料は、AIで答えを得て終わる人が増えWebサイトへの流入が減るなかで、noteがAI検索に引用されるドメインで国内2位（Ahrefs調べ・2026年6月）、AI検索からの流入期待値が他サイトの約4倍（ヴァリューズとの共同調査・2025年10月）だと示す。その強みを、作品や商品ごとに公式情報と感想記事を集める「AIコンテクストネットワーク」（キーワードページ117万件超・2026年9月末）で企業に有償提供し、GENIACで作るデータベースを通じてAI事業者から利用料を得て、クリエイターにも還元する計画だ。PVではなく「一次情報が集まる場所」であることを売り物にする判断と読める。
:::

:::guess
営業利益が約3倍になった理由として、同社は売上の伸びと並んで、AI活用で人員を横ばいに保ったことを挙げる。手数料型のプラットフォームは、取引が増えても人件費が比例して増えにくい構造で、そこにAIで社内の生産性を上げる取り組みが重なった結果とみられる。一方で、AI関連の売上の中心であるGENIACは国からの委託事業で、費用は規定の範囲で精算される形だと資料は書く。AI事業者からの利用料が委託事業の外で継続的な売上になるかが、次の段階の分かれ目になると推測される。
:::

2014年に、ランキングを置かず、書く人が数字に引っぱられない場所として始まったnoteは、12年後、その方針のままLLMに記事を読ませ、AIに引用される場所になった。売上の土台は今も読者が記事に払うお金だが、上に積み始めたのは、人とAIの両方に「まずここを見よう」と思わせる場所の価値だ。
