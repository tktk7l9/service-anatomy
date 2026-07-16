---
service: "家族アルバム みてね"
title: "国内の親の65%が使うインフラ — 『みてね』が11年かけて築いた信頼の構造"
description: "MIXIの家族アルバム『みてね』は世界3,000万人・175カ国に広がった。無料無制限アップロードという踏み絵、Rails+EKSの成熟した基盤、写真グッズからGPSまで広がる事業をまとめて解剖する。"
lead: "子どもの写真を、招待した家族だけに、無料で無制限に。2015年に生まれた『みてね』は、2026年に世界累計3,000万人・国内のママパパの約65%が使う「家族のインフラ」になった。派手さのない機能の裏にある、11年分の設計と技術を解剖する。"
category: consumer-app
tags: [family, photo-sharing, rails, aws, subscription]
publishedAt: "2026-07-16"
updatedAt: "2026-07-16"
lastVerified: "2026-07-16"
serviceUrl: "https://mitene.us/"
vendor: "株式会社MIXI"
origin: "JP"
heroTheme: "mitene-family"
scores: { product: 4.5, ux: 4.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "サーバーアプリ"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "みてねSRE責任者の登壇資料（2024年・@IT運用管理セミナー）に明記"
    evidenceUrl: "https://speakerdeck.com/isaoshimizu/overview-of-operation-management-and-observability-in-familyalbum"
  - layer: "コンテナ基盤"
    name: "Amazon EKS (Kubernetes)"
    confidence: confirmed
    evidence: "同登壇資料および『FamilyAlbum release-flow on EKS』登壇資料に明記"
    evidenceUrl: "https://speakerdeck.com/isaoshimizu/overview-of-operation-management-and-observability-in-familyalbum"
  - layer: "データベース"
    name: "Amazon Aurora MySQL"
    confidence: confirmed
    evidence: "同登壇資料に明記"
    evidenceUrl: "https://speakerdeck.com/isaoshimizu/overview-of-operation-management-and-observability-in-familyalbum"
  - layer: "CDN"
    name: "Amazon CloudFront"
    confidence: confirmed
    evidence: "当サイトによるHTTPヘッダー観測（via: cloudfront.net、2026-07-16）とAWS公式導入事例資料"
    evidenceUrl: "https://pages.awscloud.com/rs/112-TZM-766/images/20210826-Cloud-Container-Optimization-mixi-mitene.pdf"
  - layer: "IaC / CD"
    name: "Terraform / Argo CD / GitHub Actions"
    confidence: confirmed
    evidence: "SRE登壇資料に明記"
    evidenceUrl: "https://speakerdeck.com/isaoshimizu/overview-of-operation-management-and-observability-in-familyalbum"
  - layer: "監視/オブザーバビリティ"
    name: "New Relic / Prometheus / Grafana"
    confidence: confirmed
    evidence: "SRE登壇資料およびNew Relic公式導入事例に明記"
    evidenceUrl: "https://speakerdeck.com/isaoshimizu/overview-of-operation-management-and-observability-in-familyalbum"
  - layer: "メディア処理/ML"
    name: "FFmpeg / TensorFlow etc."
    confidence: likely
    evidence: "エンジニア採用情報の使用技術欄に画像・動画処理（FFmpeg等）と機械学習基盤の記載（閲覧時点）"
sources:
  - label: "MIXI ニュースリリース: 世界累計利用者数3,000万人突破（2026-05-07）"
    url: "https://mixi.co.jp/news/2026/0507/51754/"
    accessedAt: "2026-07-16"
  - label: "Speaker Deck: みてねの運用管理・オブザーバビリティの全貌（MIXI 清水勲氏・2024）"
    url: "https://speakerdeck.com/isaoshimizu/overview-of-operation-management-and-observability-in-familyalbum"
    accessedAt: "2026-07-16"
  - label: "Speaker Deck: FamilyAlbum release-flow on EKS（MIXI・みてね）"
    url: "https://speakerdeck.com/kohbis/familyalbum-release-flow-on-eks"
    accessedAt: "2026-07-16"
  - label: "AWS 導入事例資料: みてねのスポットインスタンス活用（2021）"
    url: "https://pages.awscloud.com/rs/112-TZM-766/images/20210826-Cloud-Container-Optimization-mixi-mitene.pdf"
    accessedAt: "2026-07-16"
  - label: "New Relic 導入事例: みてねのグローバル展開と急成長を支える"
    url: "https://newrelic.com/jp/customers/mixi"
    accessedAt: "2026-07-16"
  - label: "みてね公式サイト"
    url: "https://mitene.us/"
    accessedAt: "2026-07-16"
  - label: "みてねみまもりGPS 公式サイト"
    url: "https://family-album.com/gps"
    accessedAt: "2026-07-16"
---

バズも、招待キャンペーンも、広告攻勢も印象にない。それなのに、子どもが生まれた家庭のスマホには、いつのまにか入っている。『家族アルバム みてね』は、そういう静かな普及の仕方をした稀有なプロダクトだ。SNSの祖・mixiを生んだ会社が、SNSの対極のような「閉じた共有」で築いた11年を解剖する。

## サービス解説

『みてね』は、子どもの写真・動画を「招待した家族だけ」で共有するアプリだ。祖父母を含む家族が、それぞれのスマホから孫の成長を時系列で眺め、コメントを残せる。

:::fact
MIXIのニュースリリースによれば、2015年4月のサービス開始から11年で、2026年5月に世界累計利用者数3,000万人を突破。日本国内ではママ・パパの約65%以上が利用し、7言語・175以上の国と地域に展開。海外ユーザーが全体の4割超（うち北米が2割）を占め、海外の新規登録者数は国内を上回るペースで増えている。
:::

機能の核は徹底して地味だ。写真と動画の無料・無制限アップロード、家族ごとのタイムライン、1秒動画（自動生成のダイジェスト）、そしてフォトブックなどの物理グッズ。この地味さこそが、後述するように戦略そのものである。

:::pull
「子どもの写真を家族に見せる」という行為は、SNSの真逆にある。公開範囲は最小、投稿頻度は最高、離脱動機は最低——みてねはこの特異な需要だけを取りに行った。
:::

::scorecard

## UX分析

みてねのUXは「家族の最も詳しくないメンバー」を基準に設計されている。

- **招待制の閉じた空間**。公開・フォロー・いいね数といったSNSの文法を持ち込まず、見る人は家族だけ。投稿のハードルが「映えるか」ではなく「撮れたか」まで下がるため、投稿頻度が維持される。
- **祖父母が使える**。時系列に並ぶ写真をスクロールして見る、以上。この操作モデルは説明を必要とせず、家族内で最もITから遠い層を巻き込める。見る側の巻き込みこそが、投稿する側の継続動機になる。
- **無料・無制限という踏み絵**。容量に上限がないため「どれを残すか」の選別が不要になり、スマホの写真をそのまま流し込める。心理的な管理コストをゼロにしたことが、他サービスからの乗り換え障壁を実質なくした。
- **成長の自動編集**。1秒動画やフォトブックの提案など、溜まった写真を「振り返れる形」に自動加工する機能が、蓄積そのものを報酬に変える。

子どもの誕生という人生イベントに紐づくため獲得は口コミで足り、家族全員が使うため解約は「家族の合意」を要する。継続率の構造が一般のアプリと根本から違う。

## 技術構成

みてねの基盤は、MIXIのエンジニアが登壇資料や技術ブログで継続的に公開しており、国内有数の「教科書的に学べる大規模インフラ」でもある。当サイトでも2026年7月16日にWebサイトのレスポンスヘッダーを観測し、CloudFront経由の配信を確認した。

::techstack

:::fact
みてねのSRE責任者・清水勲氏の登壇資料（2024年）によれば、アプリケーションはRuby on Rails、基盤はAmazon EKS（Kubernetes）+ Aurora MySQL。IaCはTerraform、デプロイはArgo CD/GitHub Actions/CircleCI、監視はNew Relic・Prometheus・Grafana・PagerDutyという構成で、KEDAによるイベント駆動オートスケーリングやスポットインスタンス活用（AWS公式事例）などコスト最適化の取り組みも公開されている。
:::

:::guess
写真・動画という重量級メディアを「無料・無制限」で預かるサービスは、ストレージと配信のコスト管理が生命線になる。スポットインスタンス活用やKEDAといった公開事例から、インフラコストの継続的な圧縮がプレミアム課金・グッズ収益と並ぶ「利益の源泉」として扱われているとみられる。2015年から11年、RailsとAWSという構成を大きく変えずにスケールさせ続けている点は、「作り直し」ではなく「運用の練度」で成長を支えるという技術戦略の表れと言える。
:::

## ビジネスモデル

基本無料のアプリを入口に、収益は複数の階層で立ち上がる。

- **みてねプレミアム**: 月額制のサブスクリプション。動画の長尺アップロードやPC閲覧などの上位機能を解放する。
- **フォトグッズ**: フォトブック・写真プリント・年賀状など、蓄積された写真を物理商品に変換する。データが溜まるほど購入動機が強まる、ストック型のコマースだ。
- **周辺ハードとサービス**: 「みてねみまもりGPS」（公式サイトで利用者数No.1を掲げる子ども見守りGPS）や往診サービス「みてねコールドクター」など、「子どもと家族」の文脈で事業領域を拡張している。

:::guess
無料無制限のストレージは単体では赤字のはずで、アプリ本体は「家族の写真がすべて集まる場所」という独占的ポジションを買うための投資と位置づけられているとみられる。写真という感情資産を握ることで、グッズ・保険的サービス・ハードウェアへのクロスセルが自然に成立する。北米を中心とする海外比率の上昇は、この国内で実証済みのモデルを輸出するフェーズに入ったことを示していると推測される。
:::

SNSで栄華を極めた会社が、「公開しない共有」で次の柱を建てた。みてねの11年は、プロダクトの競争力が新奇な機能ではなく、「誰の、どの瞬間の需要を、どれだけ深く独占するか」で決まることの証明である。
