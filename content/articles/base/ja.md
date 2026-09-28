---
service: "BASE"
title: "「売れるまで0円」のネットショップはどこで稼ぐのか — BASEの手数料設計と、2012年のPHPを本番で入れ替える技術"
description: "初期費用も月額費用も0円のネットショップ作成サービスBASE。導入実績260万ショップ、年間GMV1,699億円の事業を、売れた時だけ取る手数料の設計、2012年から動くCakePHP 2のモノリスを新旧同時実行で置き換えるリアーキテクチャ、100万商品で学習した商品分類モデルまで、決算資料と公式プロダクトチームブログから解剖する。"
lead: "BASEの料金ページは「スタンダードプランなら売れるまで無料」と書く。売上ゼロの月は費用もゼロ。では、会社はどこで稼いでいるのか。答えは決済にある。個人やスモールチームの小さな売上から少しずつ手数料を取り、その決済の上に資金調達やショッピングアプリを重ねていく。2012年に書かれたPHPのコードを動かしたまま中身を入れ替えていく技術と合わせて、日本の「小さなお店のインフラ」を解剖する。"
category: saas
tags: [e-commerce, small-business, fintech, php, aws]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://thebase.com/"
# Affiliate link placeholder: BASE has no classic ASP program confirmed from a primary source.
# Its official partner program "BASE Partners" (https://partners.thebase.com/) pays sales-linked
# incentives to partners who help new shops open. The owner must apply there and confirm that a
# referral link on this site is allowed before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<base-partners-referral-link>"
#   program: "BASE Partners"
vendor: "BASE, Inc."
origin: "JP"
heroTheme: "base"
scores: { product: 4.0, ux: 4.0, tech: 3.5, business: 3.5 }
techStack:
  - layer: "Webフレームワーク（既存）"
    name: "PHP / CakePHP 2"
    confidence: confirmed
    evidence: "公式プロダクトチームブログ（2024-12）に「BASEのメインアプリケーションはCakePHP2系で書かれています」と明記。2020年の記事では、2012年に開発されたPHP + CakePHP 2.x系のコードが動き続けていると説明している"
    evidenceUrl: "https://devblog.thebase.in/entry/base-todo-2025"
  - layer: "リアーキテクチャ先"
    name: "CakePHP 4 + modular monolith (clean architecture)"
    confidence: confirmed
    evidence: "同ブログ（2024-12）に、モジュラモノリスとクリーンアーキテクチャをベースとしたアーキテクチャを採用し、重要機能であるカート部分はリアーキテクチャが完了してCakePHP 4系で動いていると明記"
    evidenceUrl: "https://devblog.thebase.in/entry/base-todo-2025"
  - layer: "移行検証"
    name: "DryRun (in-house, PHP / Doctrine / Ray.Di)"
    confidence: confirmed
    evidence: "公式ブログ（2024-06）に、配送機能の書き換えにあたり、本番環境上で移行前後の処理を同時実行しデータベースの結果を比較することで動作を保証するツールDryRunを作ったと明記"
    evidenceUrl: "https://devblog.thebase.in/entry/2024/06/14/110000"
  - layer: "クラウド基盤"
    name: "AWS (Amazon Aurora)"
    confidence: confirmed
    evidence: "公式ブログ（2020-09）に、負荷対策としてAWSのインスタンス数のスケールアウトとAuroraのインスタンススペックに触れる記述がある。2024-12の記事でもBASEを支えるAWSインフラのコスト最適化とモダン化に取り組んでいると明記"
    evidenceUrl: "https://devblog.thebase.in/entry/leverage_php"
  - layer: "生成AI機能"
    name: "OpenAI API via Amazon API Gateway + AWS Lambda"
    confidence: confirmed
    evidence: "公式ブログ（2023-06）に、商品説明文の生成機能はCakePHPのバックエンドからAPI GatewayとLambdaで構成したデータ戦略チームのAPIを経由してChatGPTを呼ぶ構成で、API Gatewayの30秒タイムアウトを避けるため非同期のポーリング方式に変えたと明記。2026年時点の構成は未確認"
    evidenceUrl: "https://devblog.thebase.in/entry/2023/06/02/110000"
  - layer: "機械学習（商品分類）"
    name: "Swin Transformer + Japanese BERT (MMBT)"
    confidence: confirmed
    evidence: "公式ブログ（2026-09）に、画像エンコーダーSwin Transformerと日本語BERTを組み合わせたMMBTベースのモデルで、約100万件の商品から498クラスの商品カテゴリを推論し、検証データ全体でaccuracy 90%、学習はGeForce RTX 5090を積んだオンプレサーバーで数日程度と明記"
    evidenceUrl: "https://devblog.thebase.in/entry/2026/09/03/110000"
  - layer: "監視"
    name: "New Relic"
    confidence: confirmed
    evidence: "公式ブログ（2026-07）に、BASEでは以前からNew Relicを導入しており、そのTerraform管理をAIを使いながら改修したと明記"
    evidenceUrl: "https://devblog.thebase.in/entry/newrelic-terraform-next"
  - layer: "マーケティングサイト配信"
    name: "Amazon CloudFront + S3"
    confidence: likely
    evidence: "当サイトの実観測（thebase.com・2026-09-28）で、X-Cache: Hit from cloudfront と X-Amz-Cf-Pop（NRT）、x-amz-server-side-encryption: AES256 が返る。S3に置いた静的ファイルをCloudFrontで配信している構成とみられる。ショップ本体や管理画面の配信構成とは別物の可能性がある"
sources:
  - label: "BASE株式会社: 2026年12月期第2四半期決算説明会資料（2026-08-05）"
    url: "https://contents.xj-storage.jp/xcontents/AS08546/2364c60d/6ebc/4638/9005/d1b9179eb4c0/140120260805510102.pdf"
    accessedAt: "2026-09-28"
  - label: "BASE株式会社: 2026年12月期第2四半期決算に関するQ&A（2026-08-25）"
    url: "https://contents.xj-storage.jp/xcontents/AS08546/8b36d330/c978/4d4d/9ba6/56d055623c28/20260825092735337s.pdf"
    accessedAt: "2026-09-28"
  - label: "BASE株式会社: 事業計画及び成長可能性に関する事項の開示（2026-03-26）"
    url: "https://contents.xj-storage.jp/xcontents/AS08546/d371d91b/efc7/45e1/8b5d/f30bf82f1b6f/140120260326589407.pdf"
    accessedAt: "2026-09-28"
  - label: "BASE株式会社: SBIホールディングスとの資本業務提携契約の締結等に関する補足説明資料（2026-08-28）"
    url: "https://contents.xj-storage.jp/xcontents/AS08546/2e2f2b40/d5ff/46a3/8f61/f2419318c952/140120260828528137.pdf"
    accessedAt: "2026-09-28"
  - label: "BASE公式サイト（トップページ・導入実績と料金の図）"
    url: "https://thebase.com/"
    accessedAt: "2026-09-28"
  - label: "BASE公式: 料金プラン・手数料"
    url: "https://thebase.com/price/"
    accessedAt: "2026-09-28"
  - label: "BASEプロダクトチームブログ: 【令和最新版】今BASEに入社してやることあるの？という疑問に答えるよ（2024-12）"
    url: "https://devblog.thebase.in/entry/base-todo-2025"
    accessedAt: "2026-09-28"
  - label: "BASEプロダクトチームブログ: リアーキテクチャをお手伝いするDryRunというツールを作りました（2024-06）"
    url: "https://devblog.thebase.in/entry/2024/06/14/110000"
    accessedAt: "2026-09-28"
  - label: "BASEプロダクトチームブログ: 事業継続のためにPHPを使ったサービスを継続的に進化させていくこと（2020-09）"
    url: "https://devblog.thebase.in/entry/leverage_php"
    accessedAt: "2026-09-28"
  - label: "BASEプロダクトチームブログ: ChatGPTを活用した文章生成機能のシステム構成（2023-06）"
    url: "https://devblog.thebase.in/entry/2023/06/02/110000"
    accessedAt: "2026-09-28"
  - label: "BASEプロダクトチームブログ: マルチモーダルな商品カテゴリの分類モデル（2026-09）"
    url: "https://devblog.thebase.in/entry/2026/09/03/110000"
    accessedAt: "2026-09-28"
  - label: "BASEプロダクトチームブログ: 変わり続けるAI時代に備えて、New RelicのTerraform管理を再設計した話（2026-07）"
    url: "https://devblog.thebase.in/entry/newrelic-terraform-next"
    accessedAt: "2026-09-28"
  - label: "BASEプロダクトチームブログ: 問い合わせ調査AIエージェントcs_a導入の苦難とこれから（2026-08）"
    url: "https://devblog.thebase.in/entry/2026/08/25/110000"
    accessedAt: "2026-09-28"
  - label: "BASE U: 「BASE Partners」が4周年を迎えました（2024-10）"
    url: "https://baseu.jp/information/20241009"
    accessedAt: "2026-09-28"
---

BASEは、ネットショップを「売れるまで0円」で開ける日本のサービスだ。売上がない月は費用もかからない。この約束を守りながら利益を出すために、BASEは手数料の取り方を細かく設計し、2012年に書かれたPHPのコードを止めずに少しずつ入れ替えてきた。

## サービス解説

BASEは、個人やスモールチームがネットショップを作り、商品を売るためのサービスだ。ショップのデザイン、決済、商品管理を一か所で用意し、拡張機能の「BASE Apps」で抽選販売やメルマガなどを足せる。運営会社のBASE株式会社は、決済APIの「PAY.JP」、資金調達サービス「YELL BANK」、ショッピングアプリ「PAY ID」なども持つ。

:::fact
事業計画及び成長可能性に関する資料（2026-03）によれば、BASE株式会社の設立は2012年12月11日で、2025年12月末の連結従業員数は394名。2025年12月期のBASE事業のGMV（注文額）は1,699億円だった。同資料にある会社の調査（2025年11月）では、BASEで開設されたショップの71.5%が個人の運営で、運営人数1名のショップが77.4%、SNSを活用しているショップが82.7%、ネットショップが本業ではないショップが47.1%を占める。公式サイトのトップは導入実績を「260万ショップ」と表示している（2026-09-28時点）。
:::

:::fact
2026年12月期第2四半期決算説明会資料（2026-08-05）によれば、第2四半期（4〜6月）のBASE事業のGMV（注文）は約423億円で前年同期比5.6%増、テイクレート（売上高をGMVで割った比率）は6.4%から7.0%に上がり、売上高は17.0%増、売上総利益は24.4%増だった。グループ全体の中間期（1〜6月）の売上高は123.9億円（35.5%増）、営業利益は10.7億円（87.3%増）。
:::

:::pull
BASEのショップの約8割は1人で運営されていて、半分近くはネットショップが本業ではない。BASEの顧客は「企業のEC担当者」よりも「副業で作ったものを売る人」に近い。
:::

::scorecard

## UX分析

BASEのUXは、はじめてネットショップを作る人が「失敗しても損をしない」ことを最優先にしている。

- **固定費をゼロにして、始める判断を軽くする**。公式サイトのトップページの図は「7月・8月・9月は売上がないため費用0円、10月は売上に応じた手数料のみ」と、売れない月の費用がゼロであることを具体的な月で見せる。スタンダードプランは初期費用・月額費用とも0円で、商品が売れたときだけ手数料がかかる。
- **決済の申し込みを省く**。事業計画資料によれば、「BASEかんたん決済」は利用申請だけで8つの決済方法を最短翌営業日から使え、BASEが売り手と買い手の間に入るエスクロー型の決済になっている。個人が決済代行会社と個別に契約する手間がない。
- **AIを「ショップ運営の相談相手」として足す**。事業計画資料と第2四半期の資料によれば、SNS投稿文や商品説明文の生成、問い合わせへの返信文、ショップデザインの提案などのAI機能を順次広げ、ショップ運営を対話で相談できる「BASE AI」を限定公開した。1人で商品づくりから発送、SNSまでこなすオーナーには、文章やデザインの下書きを任せられる意味が大きい。
- **手数料の総額は一目ではわかりにくい**。スタンダードプランの手数料は「決済手数料3.6%+40円」と「サービス利用料3%」の二段構えで、PayPay・Amazon Pay・PayPalでは1%が加わり、PAY IDアプリからの注文は別の料率になる。1件あたりいくら引かれるかを、売値を入れると示す計算表があればさらに迷いにくいだろう。

## 技術構成

::techstack

:::fact
公式プロダクトチームブログ（2020-09）によれば、BASEは2012年に開発されたPHPとCakePHP 2.x系のコードで動いてきた。記事は、CakePHP 2.xのライフサイクル終了を前に次のアーキテクチャへの移行が必要だとしたうえで、開発生産性も含めて他の言語へまるごと切り替えてでも実現したい代替技術は見つかっていないと述べ、PHPを使い続ける判断を説明している。一方で、BASE BANKチームはGo、PAY.JPのチームとデータ戦略チームはPythonを使うなど、チームごとに言語を選んでいるとも書いている。
:::

:::fact
同ブログ（2024-12）によれば、メインアプリケーションはいまもCakePHP 2系で書かれており、新しいコードはモジュラモノリスとクリーンアーキテクチャをベースにしたCakePHP 4系へ移している。重要機能であるカートは移行が完了した。配送機能の書き換えでは、DDDとクリーンアーキテクチャに基づく新しいリポジトリへ移す際、本番環境で移行前と移行後の処理を同時に実行してデータベースの結果を比べ、同じ動きをすることを確かめるツール「DryRun」を自作した（2024-06）。
:::

:::fact
同ブログ（2026-09）によれば、BASEは商品ごとのカテゴリを機械学習で推論して付けている。モデルは画像エンコーダーのSwin Transformerと日本語BERTを組み合わせたMMBTベースで、約100万件の商品を学習データに498クラスを分類し、検証データ全体でのaccuracyは90%。学習はGeForce RTX 5090を積んだオンプレミスのサーバーで数日程度かかったという。第2四半期の決算資料は、越境EC機能「かんたん海外販売」で、独自のAIモデルが商品情報の特定から梱包サイズ・重量、航空禁制品かどうかといった発送可否の判定までを自動化していると説明している。
:::

:::fact
同ブログ（2026-08）によれば、エンジニアが受け持つ顧客からの問い合わせ調査には、Slack Botとして動くAIエージェント「cs_a」を導入した。コードだけでなくNew Relicのログ、機能の仕様書、CSチームの手順書などを参照するマルチエージェント型に作り替えた結果、一部の領域やカテゴリを除いた問い合わせの7割で、cs_aの回答がエンジニアの回答とほぼ一致するようになった。一方で、参照先を増やすほどLLMの出力が揺らぐ要因も増えたと、課題もあわせて報告している。
:::

:::guess
2012年のコードを捨てて書き直すのではなく、本番で新旧を同時に動かして結果を突き合わせる方法を選んだのは、決済と配送のような「お金と荷物が動く処理」を止められないからとみられる。多数のショップの取引が流れる処理を一度に切り替えると、差分があったときの影響が大きすぎる。DryRunのように、新しいコードの答えが古いコードと一致することを本番のデータで確かめながら少しずつ切り替えるのは、時間はかかっても事故の少ない選び方だと推測される。カートの次に配送、という順番も、影響範囲の大きいところから確実に固めていく方針と読める。
:::

## ビジネスモデル

BASEの収益は、ショップの売上に比例する手数料が中心だ。月額費用で稼ぐのではなく、売れた分から取る。

:::fact
公式の料金ページ（2026-09-28時点）によれば、スタンダードプランは初期費用・月額費用とも0円で、売れたときに決済手数料3.6%+40円とサービス利用料3%がかかる。グロースプランは月額16,580円（年払い時の1か月あたり。月払いは19,980円）で、決済手数料2.9%、サービス利用料は0円。どちらのプランも、決済方法がPayPay・Amazon Pay・PayPalの場合は1%が加わる。ショッピングアプリ「PAY ID」からの注文には、決済手数料3.6%+40円とサービス利用料5.9%がかかる。
:::

:::guess
スタンダードとグロースの料率の差は、1件あたり3.7%と40円になる。40円を無視して月額費用だけで割ると、月払い（19,980円）なら月の売上が約54万円、年払い（16,580円）なら約45万円を超えたあたりから、グロースプランのほうが安くなる計算だ。ほとんどの小さなショップはスタンダードのまま手数料を払い、売上が大きくなったショップだけが固定費を払って料率を下げる。売れる前は負担をかけず、売れるほど手数料率が下がる二段構えは、ショップが育っても他のサービスへ移りにくくする設計と推測される。
:::

:::fact
第2四半期の決算資料とQ&A（2026-08-25）によれば、BASE事業の売上高の伸び（17.0%）がGMVの伸び（5.6%）を大きく上回ったのは、GMVの増加に加えて、ショッピングアプリ「PAY ID」の有料化でテイクレートが上がったためだ。GMVは、月間売店数と1ショップあたりの月間平均GMVがともに前年を上回ったが、前四半期比ではファッションカテゴリで既存ショップの伸びが鈍り1.8%減った。BASEは新規ショップを増やすため、2026年5月に全国でのマスマーケティングを実施している。
:::

:::fact
SBIホールディングスとの資本業務提携に関する補足資料（2026-08-28）によれば、SBIホールディングスの完全子会社SBINM合同会社が、BASE株式の最大20.00%を1株340円で取得する公開買付けを2026年8月31日から9月30日まで実施している。BASEは公開買付けに賛同し、応募するかどうかは株主の判断に委ねるとした。目的はBASEをSBIホールディングスの持分法適用関連会社にすることで、東証グロース市場への上場は維持する方針だ。提携ではSBIグループのキャラクターやコンテンツをBASEのECや決済で商品化する事業と、コマースと金融を組み合わせたFintech事業の共同展開を検討するとしている。
:::

:::fact
BASE Uの告知（2024-10）によれば、BASEは2020年10月に始めたオフィシャルパートナープログラム「BASE Partners」を運営しており、2024年10月時点でパートナー数は2,000を超えていた。企業・団体・個人事業主が参加でき、パートナーには売上連動型の成果報酬（インセンティブ）や、ショップオーナーに渡せる特典などを提供している。
:::

売れるまでは取らない。売れた分から少しずつ取り、その取引の上に決済、資金調達、アプリ、越境ECを重ねてテイクレートを上げていく。2012年のPHPを本番で入れ替え続ける慎重さも、SBIとの提携で決済と金融を広げる動きも、「小さなお店の取引を止めない」という同じ前提の上に乗っている。
