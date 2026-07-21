---
service: "The Browser Company (Arc / Dia)"
title: "愛されたブラウザの殺し方 — 使用率5.5%という現実がArcをDiaに変えるまで"
description: "熱狂的ファンを持つブラウザArcを自ら凍結し、AIブラウザDiaへ全振りしたThe Browser Company。CEOが公開書簡で明かした「新しさの税金」と定量データ、そして6.1億ドルでのAtlassian買収までを、創業者本人の書簡と公式発表から解剖する。"
lead: "看板機能のSpacesを日常的に使うユーザーは5.52%、Live Foldersは4.17%、Calendar Previewは0.4%——愛されたブラウザArcの実際の使用率を、CEO自身が公開書簡で晒した。愛と定着は別物だという決算書を公開し、プロダクトを自ら凍結してAIブラウザに賭け直した会社の意思決定を解剖する。"
category: consumer-app
tags: [browser, ai, chromium, swift, acquisition]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://thebrowser.company/"
vendor: "The Browser Company of New York"
origin: "US"
heroTheme: "browser-company"
scores: { product: 3.5, ux: 4.0, tech: 4.0, business: 3.5 }
techStack:
  - layer: "ブラウザエンジン"
    name: "Chromium"
    confidence: confirmed
    evidence: "CEOの公開書簡（2025-05-26）に、Arcの保守はChromiumの定期更新とセキュリティ修正として継続すると明記。ArcもDiaもChromiumベース"
    evidenceUrl: "https://browsercompany.substack.com/p/letter-to-arc-members-2025"
  - layer: "内製ブラウザ開発基盤"
    name: "ADK (Arc Development Kit)"
    confidence: confirmed
    evidence: "同書簡に、ArcをOSS化しない理由として内製基盤ADKが競争優位の核でありDiaの土台でもあると明記"
    evidenceUrl: "https://browsercompany.substack.com/p/letter-to-arc-members-2025"
  - layer: "クライアント言語"
    name: "Swift"
    confidence: confirmed
    evidence: "公式GitHub（thebrowsercompany/swift-winrt）にWindowsアプリをSwiftで開発するためのWinRT相互運用ライブラリを公開（スター840・2026-07-21実確認）。macOSに加えWindows版もSwiftで書く体制"
    evidenceUrl: "https://github.com/thebrowsercompany/swift-winrt"
  - layer: "公式サイト配信"
    name: "Vercel + Cloudflare"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（x-vercel-id: hnd1::…とserver: cloudflareが併存、2026-07-21）。Vercelの前段にCloudflareを重ねた構成"
    evidenceUrl: "https://thebrowser.company/"
sources:
  - label: "The Browser Company公式書簡: Letter to Arc members 2025（CEO Josh Miller・使用率データと凍結判断・2025-05-26）"
    url: "https://browsercompany.substack.com/p/letter-to-arc-members-2025"
    accessedAt: "2026-07-21"
  - label: "Atlassian公式ブログ: The Browser Company買収発表（2025-09-04）"
    url: "https://www.atlassian.com/blog/announcements/atlassian-acquires-the-browser-company"
    accessedAt: "2026-07-21"
  - label: "CNBC: Atlassianが6.1億ドル現金でThe Browser Company買収に合意（2025-09-04）"
    url: "https://www.cnbc.com/2025/09/04/atlassian-the-browser-company-deal.html"
    accessedAt: "2026-07-21"
  - label: "The Browser Company公式GitHub: swift-winrt（Windows向けSwift開発基盤）"
    url: "https://github.com/thebrowsercompany/swift-winrt"
    accessedAt: "2026-07-21"
---

## サービス解説

The Browser Company of New Yorkは、ブラウザを作るスタートアップだ。2022年に一般公開したArcは、サイドバー中心のタブ管理やSpaces（作業空間の切り替え）といった大胆な再設計で熱狂的な支持者を獲得した。だが2025年5月、同社はArcの新機能開発を止め、AIブラウザDiaへ軸足を移すことを発表。同年9月にはAtlassianによる買収が発表された。

:::fact
CEOのJosh Miller氏は公開書簡（2025年5月26日）で、Arcの機能別使用率を自ら開示した。複数のSpacesを日常的に使うデイリーアクティブユーザーは5.52%、Live Foldersは4.17%、Calendar Preview on Hoverは0.4%。同氏はこれを「新しさの税金（novelty tax）」と呼び、「ほとんどの人にとってArcは違いすぎた。学ぶことが多すぎ、見返りが少なすぎた」と総括した。一方、開発中のDiaでは「タブとのチャット」を40%、パーソナライズ機能を37%のDAUが使っているとされる。2025年9月4日、Atlassianは同社の買収を発表し、CNBCによれば買収額は約6.1億ドルの現金だった。
:::

:::pull
「愛されている」と「使われている」は別の指標だった。CEOが自社製品の使用率を晒したこの書簡は、プロダクト供養の書式として異例なほど誠実だ。
:::

::scorecard

## UX分析

Arcの UXは業界で最も賞賛され、同時に最も定着しなかった部類に入る。その落差自体が教材だ。

- **再設計の美しさと学習コストが正比例した**。縦型サイドバー・Spaces・URLバーの隠蔽——既存ブラウザの常識を外す設計は熱心なファンを生んだが、書簡の数字が示す通り、大多数は新しい概念を学ぶ手前で止まった。
- **ファンの声は定着率の代理指標にならない**。SNSでの称賛やコミュニティの熱量と、5.52%という実使用率が共存していた。声の大きさで製品判断を誤る危険の、定量的な実例になっている。
- **Diaは「学ばなくていい」側に振った**。見た目は普通のブラウザに近づけ、AIチャットという既にChatGPTで学習済みの操作系を中心に置く。新概念を教えるのではなく、既に普及した習慣に乗る設計転換だ。
- **凍結後の誠実さも設計の一部**。Arcは新機能なしでもChromium更新とセキュリティ修正が続くと明言され、移行を強制しない。プロダクトの畳み方が丁寧であることは、次のプロダクトへの信頼の持ち越しに直結している。

## 技術構成

::techstack

:::fact
ArcとDiaはいずれもChromiumベースで、公開書簡にはArcの保守をChromium定期更新とセキュリティパッチとして続けると明記されている。ArcをOSS化しない理由も同書簡で説明されており、内製のブラウザ開発基盤ADK（Arc Development Kit)が競争優位の核でありDiaの土台でもあるためとされる。クライアントはSwiftで開発されており、Windows版のために自社でSwift/WinRT相互運用ライブラリを開発しOSS公開している（公式GitHubで実確認）。
:::

:::guess
ブラウザという製品カテゴリでは、エンジン自体（Chromium）の自作は現実的でなく、差別化はその上の層に集中する。ADKという「Chromiumの上の内製層」に競争優位を置く構図は、SupabaseがPostgresの上に、VercelがAWSの上に価値を積んだのと同型の判断とみられる。WindowsクライアントのためにSwiftの相互運用基盤まで自作した投資は、UI品質への執着の表れであると同時に、少人数でmac/Windows両対応を保つための単一言語戦略と推測される。
:::

## ビジネスモデル

The Browser Companyは買収までの間、収益化を本格的に始めていなかった。VC資金で製品開発を続け、出口はAtlassianへの売却となった。

:::fact
Atlassianは公式ブログ（2025年9月4日）で買収を発表し、CEOのMike Cannon-Brookes氏は「今日のブラウザは仕事のために作られていない。閲覧のために作られている」と述べた。Diaを「ナレッジワーカーのブラウザ」として、SaaSアプリへの最適化・仕事の文脈を記憶するAI・企業向けセキュリティの3点で発展させる計画が示されている。CNBCによれば買収額は約6.1億ドルで、Atlassianの手元資金から現金で支払われる。
:::

:::guess
6.1億ドルという価格は、消費者向けブラウザとしての事業価値というより、「ブラウザを作りきれるチーム」への人材・技術獲得の色が濃いとみられる。単独でのマネタイズ（サブスクリプションや検索契約）はChromeが無料で君臨する市場では困難であり、企業向けSaaSの入口としてブラウザを再定義できるAtlassian傘下は、Diaにとって数少ない生存経路だったと推測される。買収の成否は、Arcで証明した「作る力」と、Arcで露呈した「広める難しさ」のどちらがAtlassianの流通網で増幅されるかに懸かっている。
:::

自社製品の使用率を晒し、愛されたプロダクトを畳み、賭け直した先ごと大企業に売る——The Browser Companyの3年間は、プロダクト判断の教科書として異常に密度が高い。「新しさの税金」という言葉は、UXの野心を持つすべての作り手への警句であり、同時に、その税金を払ってでも試した者だけがDiaにたどり着けたという反語でもある。
