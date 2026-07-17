---
service: "setlog"
title: "編集させないという編集 — 韓国発setlogが1時間ごとの通知でZ世代を掴んだ理由"
description: "BeRealの次に流行るSNSと呼ばれるsetlog。1時間ごとの通知で撮る2秒動画、最大12人の閉じたグループ、加工・編集なしで1本のVlogに自動編集される仕組みと、K-POPスターが火をつけたバイラルの構造、そして見えない収益化までを解剖する。"
lead: "友人と最大12人。1時間ごとに来る通知に合わせて2秒だけ撮る。編集も加工もできない。setlogが提示したのは「頑張らなくていいSNS」という逆張りで、韓国発の小さなアプリを日本のApp Store無料ランキング1位に押し上げた。"
category: consumer-app
tags: [video, social, closed-sns, bereal, gen-z]
publishedAt: "2026-07-17"
updatedAt: "2026-07-17"
lastVerified: "2026-07-17"
serviceUrl: "https://apps.apple.com/jp/app/setlog/id6587576438"
vendor: "New Chat Inc."
origin: "KR"
heroTheme: "setlog"
scores: { product: 4.0, ux: 4.0, tech: 2.5, business: 2.5 }
techStack:
  - layer: "配信プラットフォーム"
    name: "iOS / Android (ネイティブアプリ)"
    confidence: confirmed
    evidence: "App Store（日本）およびGoogle Playの公式ストア掲載により両OS向けネイティブアプリとして提供と確認"
    evidenceUrl: "https://apps.apple.com/jp/app/setlog/id6587576438"
  - layer: "CDN"
    name: "Fastly"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（x-served-by: cache-nrt-*、Fastly特有のヘッダー形式、2026-07-17）。公式ドキュメントでの明言は見当たらない"
sources:
  - label: "setlog 公式Appストア（日本）ページ"
    url: "https://apps.apple.com/jp/app/setlog/id6587576438"
    accessedAt: "2026-07-17"
  - label: "Business Insider Japan: BeRealの次はこれ。K-POPスターが火をつけたZ世代の人気アプリ「Setlog」とは？"
    url: "https://www.businessinsider.jp/article/2606-setlog-kpop-popular-app-vlog-friends-glimpse-real-life/"
    accessedAt: "2026-07-17"
  - label: "Impress Watch: BeRealの二番手「setlog」が大人気 止まらない「クローズドSNS」への流れ"
    url: "https://www.watch.impress.co.jp/docs/news/2116019.html"
    accessedAt: "2026-07-17"
  - label: "セキュリティ対策Lab: セットログ(Setlog)の危険性と概要を解説"
    url: "https://rocket-boys.co.jp/security-measures-lab/setlog-sns-privacy-threats/"
    accessedAt: "2026-07-17"
---

BeRealが「2分以内に投稿しないと遅刻がバレる」という緊張でZ世代を疲れさせ始めた頃、韓国発の小さなアプリがその疲労そのものを製品にした。setlogは、撮る瞬間を減らし、編集する自由を奪うことで、かえって「気楽なSNS」を作り上げた。

## サービス解説

setlogは、最大12人までの友人グループで日常を記録するビデオSNSだ。運営はNew Chat Inc.（ソウルとニューヨークに拠点を持つ韓国系スタートアップ）。

:::fact
Impress Watch（2026年6月）によれば、setlogは1時間ごとに届く通知に合わせてその場で2秒程度の動画を撮る仕組みで、過去に撮影済みの動画のアップロードはできない。1日の終わりには参加者全員の動画が時系列でつながり、1本のミニVlogとして自動生成される。Business Insider Japan（2026年6月）は、K-POPグループSEVENTEENやaespaのカリナがInstagramに使用動画を投稿したことでバイラルに火がついたと報じ、2026年5月単月で200万回超のダウンロードを記録したとしている。日本でも同時期にApp Store無料ランキング1位を獲得した。
:::

:::pull
「頑張らなくていい」という約束は、機能を足すことでは実現できない。setlogはむしろ、加工・編集・後からの投稿という選択肢そのものを取り上げることでそれを実現した。
:::

::scorecard

## UX分析

setlogのUXは、BeRealが生んだ「疲労」への正確な処方箋として設計されている。

- **強制のタイミングを本人任せにしない**。BeRealの「2分以内」というプレッシャーに対し、setlogは「その1時間の中で撮ればいい」という緩さを持つ。緊張を下げながら、リアルタイム性という核だけは残す設計判断だ。
- **編集不可が加工文化への反論になる**。フィルターも投稿の選び直しもできないことが、逆に「盛らなくていい」という安心感に変わる。機能の欠如がそのままブランドメッセージになっている稀有な例だ。
- **自動編集が「見せる」体験に変える**。1日の終わりに時系列で1本のVlogが勝手に完成する仕組みは、記録という個人的な行為を、友人と一緒に眺める体験に変換する。
- **12人という上限が「閉じた安心」を作る**。全世界公開ではなく決められた友人だけに見える設計は、Instagramが後追いで「Instants」機能を出したことからも分かるとおり、クローズドSNSという潮流そのものを体現している。

## 技術構成

::techstack

:::fact
setlogはApp Store（日本）およびGoogle Playの両方でネイティブアプリとして配信されている。当サイトの2026年7月17日の観測では、公式サイト（setlog.kr / newchat.kr）の配信にFastly特有のヘッダー（x-served-by: cache-nrt-*）が確認できた。
:::

:::guess
New Chat Incは公開のエンジニアリングブログや技術カンファレンス登壇を持たない小規模スタートアップとみられ、バックエンドの構成（言語・DB・動画処理基盤等）を裏付ける一次情報は見当たらなかった。1時間ごとの通知配信と、参加者全員の動画を時系列で自動結合する処理は技術的に軽くはないはずだが、その実装詳細が非公開であること自体が、急成長中の小規模チームが機能開発を優先しインフラの外部発信に手が回っていない状態を示唆していると推測される。
:::

## ビジネスモデル

setlogのビジネスモデルは、解剖できる材料が最も少ない部分だ。

:::fact
アプリは無料で提供されており、公式情報において広告表示やサブスクリプションの導入は確認できなかった。セキュリティ対策Lab（2026年6月）は、開発者がグループ内限定の暗号化を謳う一方、第三者機関によるセキュリティ監査は公表されていないと指摘している。
:::

:::guess
現時点の急成長は、K-POPスターの投稿という無償のバイラルループに大きく依存しているとみられ、収益化の仕組みはまだ確立されていない可能性が高い。BeRealが人気のピーク後に収益化とユーザー数維持の両立に苦しんだ前例を踏まえると、setlogにとっての次の関門は「頑張らなくていい」という価値観を壊さずに課金や広告をどう組み込むかだろう。位置情報や行動パターンを含むデータ収集の設計は、将来的な広告事業の布石である可能性もあるが、公開情報からは確認できない。
:::

BeRealが問いを立て、setlogがその答えの一つを出した——SNS疲れの時代に生き残るのは、機能を足すアプリではなく、機能を削ぎ落とす勇気を持ったアプリなのかもしれない。バイラルの後に何を積み上げるかは、まだ誰も見ていない。
