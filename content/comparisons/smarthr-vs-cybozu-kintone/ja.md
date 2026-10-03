---
title: "クラウドを借りるか、Kubernetesごと建てるか — 国内SaaS2社が技術で分かれ、事業でも分かれた理由"
description: "労務という単一業務を深く掘るSmartHRと、業務アプリという面を広く取るkintone。共有技術ゼロという計測結果の裏で、Google Cloudに全面委任するSmartHRと、国内向けサービスを自社データセンターのKubernetesで動かすサイボウズという、対極のインフラ選択が横たわっていた。国内SaaSの二つの勝ち筋を比較解剖する。"
lead: "両記事のtechStackを機械照合すると、共有技術はゼロだった。X vs Blueskyと並ぶゼロ共有だが、今回の中身はこれまでと異質だ。片やGoogle Cloudに全面委任し、片や国内向けサービスのために自社データセンターでKubernetesを自作する——同じ「国内SaaS」という言葉の下に、インフラの選択からして別の会社が2社立っていた。"
slugA: "smarthr"
slugB: "cybozu-kintone"
publishedAt: "2026-07-21"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
sources:
  - label: "SmartHR公式テックブログ: RailsとReactへの統一（2023-12-25）"
    url: "https://tech.smarthr.jp/entry/2023/12/25/120000"
    accessedAt: "2026-07-21"
  - label: "SmartHR公式テックブログ: 最大のRailsアプリをRuby 3.4 + YJITへ更新（2025-08-20）"
    url: "https://tech.smarthr.jp/entry/2025/08/20/142858"
    accessedAt: "2026-07-21"
  - label: "Cybozu Inside Out: サイボウズのKubernetes基盤「Neco」の紹介（2025-04-11）"
    url: "https://blog.cybozu.io/entry/2025/04/11/112000"
    accessedAt: "2026-07-21"
  - label: "サイボウズ公式IR: 2025年12月期 事業ダイジェスト（売上高374.3億円・前年比26.1%増）"
    url: "https://cybozu.co.jp/company/ir/meeting/pdf/2512_02.pdf"
    accessedAt: "2026-09-28"
  - label: "マイナビニュース: サイボウズ2025年度通期決算 記者説明会（契約3.9万社・顧客規模別MRR構成・2026-02-25）"
    url: "https://news.mynavi.jp/techplus/article/20260225-4165084/"
    accessedAt: "2026-09-28"
  - label: "サイボウズ公式発表: US向けにAWS基盤のkintoneを提供開始（2019-09-09）"
    url: "https://topics.cybozu.co.jp/news/2019/09/09-8487.html"
    accessedAt: "2026-09-28"
  - label: "Cybozu Inside Out: AWS移行が完了したUS版kintoneと、これからの挑戦（2020-07-02）"
    url: "https://blog.cybozu.io/entry/2020/07/02/000000"
    accessedAt: "2026-09-28"
  - label: "Cybozu Inside Out: 生成AI技術を活用したkintoneの新機能とシステム概要（2025-01-22・Amazon Bedrock）"
    url: "https://blog.cybozu.io/entry/2025/01/22/112000"
    accessedAt: "2026-09-28"
  - label: "Google Cloud公式ブログ: SmartHRのGoogle Cloudへのフルマイグレーション（2022-04-27・Cloud Run/App Engine/Cloud SQL）"
    url: "https://cloud.google.com/blog/ja/topics/customers/smarthr-full-migration-to-google-cloud?hl=ja"
    accessedAt: "2026-09-28"
  - label: "SmartHR公式プレスリリース: ARR 300億円を突破（2026-07-07）"
    url: "https://smarthr.co.jp/news/press/20260707/"
    accessedAt: "2026-09-28"
  - label: "SmartHR公式: 7年連続シェアNo.1を獲得、登録社数は80,000社を突破（2026-04-28）"
    url: "https://smarthr.jp/release/20260428/"
    accessedAt: "2026-09-28"
---

[SmartHR](/ja/articles/smarthr)と[サイボウズ kintone](/ja/articles/cybozu-kintone)は、どちらも国内発の業務SaaSとして語られることが多い。だが両記事のtechStackを機械照合すると、共有される技術トークンは1つもなかった。X vs Blueskyと並ぶゼロ共有だ。Figma vs Canvaは、個別記事のtechStackの抜けを直したところ共有が2つ（AWSとAmazon S3）見つかった。今回は両記事の記録を点検して抜けを補ったうえで、なお重なりが無い。今回は、主力である国内向けサービスのインフラの選択そのものが対極にあった。

:::fact
SmartHR公式テックブログによれば、バックエンドはRuby on Rails・フロントエンドはReact/TypeScript(Next.js導入中)に統一され、データベースはGoogle Cloud SQL、基盤はGoogle Cloudと明記されている。Google Cloud公式ブログの導入事例（2022年4月）によれば、WebサーバーはCloud Run、非同期処理はApp Engineで動く。2025年8月には最大のRailsアプリをRuby 3.4 + YJITへ更新したとも公表された。一方サイボウズは、国内東西のデータセンターにラックを借り、数千台規模のサーバーで自社開発のKubernetes基盤「Neco」を運用し、その上で国内向けのkintoneを動かす。米国向けのkintone.comは2020年6月にAWSへの移行を完了しており、生成AI機能の推論にはAmazon Bedrockを使う。これらを両記事のtechStackに足して2026年9月28日に照合し直しても、レイヤーを問わず重なる技術トークンは1つもなかった。
:::

:::pull
SmartHRは「クラウドを借りる」側の極、サイボウズは「クラウドを自分で建てる」側の極にいる。同じ「国内SaaS」という言葉が、インフラ思想としては正反対の2社を覆っている。
:::

訂正（2026年9月28日）。初版では、サイボウズを自社データセンターだけで動く会社として書き、インフラの選択が文字通り正反対だとしていたが、不正確だった。公式発表によれば、米国向けのkintone.comは2020年6月にAWSへの移行を完了しており、生成AI機能の推論にもAmazon Bedrockを使っている。自社基盤で動くのは国内向けサービスである。あわせて個別記事のtechStackに、サイボウズ側のAWSとAmazon Bedrock、SmartHR側のCloud RunとApp Engineを足した。共有技術ゼロという照合結果は、補ったあとも変わらない。また初版では、今回をDeepL vs Nani翻訳、X vs Blueskyに続く3例目のゼロ共有とし、Figma vs Canvaを見せかけのゼロの例として引いていたが、どちらも前提が変わった。個別記事のtechStackの抜けを直した結果、Figma vs Canvaの共有は2つ、DeepL vs Nani翻訳の共有は1つ（Cloudflare）になったため、該当の記述を改めた。

## 業務を深く掘るか、面を広く取るか

SmartHRは労務手続きという単一の業務領域を深く掘る設計だ。入社手続き・年末調整・雇用契約という、法改正のたびに仕様が変わる複雑な業務を、Rails+Reactという標準的な技術スタックで愚直に磨き込む。公式テックブログが明かす「10超のプロダクトでRailsとReactの組み合わせを統一」という方針は、機能の幅よりも一貫した開発体験を優先する判断だ。基盤をGoogle Cloudに預けているのも、労務という業務ロジックの複雑さにエンジニアリングリソースを集中させるためだと読める。

kintoneは逆に、業務アプリという面をできるだけ広く取る設計だ。フォーム・データベース・承認フローという汎用部品を組み合わせ、労務に限らず経費精算でも案件管理でも顧客が自分でアプリを作れるようにする。この汎用性ゆえに、SmartHRのような特定ドメインへの機能集中ではなく、基盤そのものの安定性と長期のコスト構造にエンジニアリングを投じている——数千台規模のインフラを自社開発で運用するNecoへの投資は、その現れだ。

:::guess
この分岐は、両社が売る「安心」の種類が違うことに帰着するとみられる。SmartHRが売るのは「法改正に追従し続ける正確さ」で、これは業務ロジックの更新速度こそが価値になるため、インフラは信頼できる既製品(Google Cloud)に預けて開発速度を最大化するのが合理的だ。kintoneが売るのは「何十年も同じ場所で動き続ける安定」で、多数の企業の基幹データを長期間預かる以上、原価構造をコントロールできる自社基盤の方が、長期的には合理的な選択になる。同じSaaSでも、何を安心の中身にするかがインフラの選択を規定していると推測される。
:::

## 増収の中身が語る、それぞれの天井

SmartHRは労務という単一業務のTAM（獲得可能な市場規模）の中で深化を続け、kintoneは業務アプリという広い定義の中でMRR構成比を大企業・中堅・中小にほぼ均等に広げている。

:::fact
サイボウズの公式IRと決算説明会の報道によれば、2025年12月期のkintone売上は前年比33.9%増、契約社数は3万9,000社を突破し、顧客規模別のMRR構成は従業員99名以下39.1%・100〜999名33.7%・1,000名以上27.2%とバランスが取れている。全社の連結営業利益は前年比106.4%増とほぼ倍増した。SmartHRは公式発表によれば、ARRが2025年4月に200億円、2026年7月に300億円を突破し、登録社数は2026年4月に8万社を超えた。
:::

:::guess
kintoneの顧客構成が特定セグメントに偏らない理由は、汎用ノーコードという製品設計そのものが、企業規模を問わない適用範囲を持つためとみられる。対照的にSmartHRは労務という単一業務の深さで差別化するため、企業規模よりも「その企業が労務をどれだけ複雑に運用しているか」に成長が連動しやすい構造だと推測される。国内SaaSの勝ち筋は、Neco型の「基盤の自社化による原価優位」と、SmartHR型の「単一業務への特化による専門性」という、少なくとも2つの独立した軸で成立し得ることを、この比較は示している。
:::

同じ「国内SaaS」という括りの下で、SmartHRとサイボウズは技術でも事業戦略でも重ならなかった。クラウドを借りて業務の深さで勝つか、クラウドを建てて業務の広さで勝つか——共有技術ゼロという計測結果は、2社が同じ市場の別の場所にいることの、もっとも正直な証拠だった。
