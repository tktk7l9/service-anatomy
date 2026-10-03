---
service: "Suno"
title: "訴えた側の1社と手を組む — Sunoが学習データ問題を抱えたまま評価額54億ドルに達するまで"
description: "テキストから楽曲を丸ごと生成するAI音楽サービスSuno。2024年6月に全米レコード協会（RIAA）から著作権侵害で提訴されながら、2025年11月には原告の1社であるWarner Music Groupと提携を結び、2026年6月には評価額54億ドルのシリーズDを達成、同年9月には音楽業界と開発した新モデルv6を公開した。公式情報から学習データ問題と急成長が同時進行する構造を解剖する。"
lead: "Sunoは、プロンプト1つで歌詞・メロディ・ボーカルまで含む楽曲を丸ごと生成する。2024年6月、全米レコード協会（RIAA）がSunoと競合Udioを著作権侵害で提訴した。その17ヶ月後の2025年11月、Sunoは原告の1社であるWarner Music Groupとの提携を発表し、2026年6月には評価額54億ドルのシリーズD調達を達成した。訴えられながら、訴えた側の一角と提携して成長を続ける会社の構造を解剖する。"
category: ai-tool
tags: [ai-music, generative-ai, licensing, copyright, creative-tools]
publishedAt: "2026-07-23"
updatedAt: "2026-10-03"
lastVerified: "2026-09-28"
serviceUrl: "https://suno.com/"
vendor: "Suno, Inc."
origin: "US"
heroTheme: "suno"
scores: { product: 4.0, ux: 4.5, tech: 3.5, business: 3.0 }
techStack:
  - layer: "音楽生成モデル"
    name: "Suno v6（v6 / v6-wild / v6-mini）"
    confidence: confirmed
    evidence: "Suno公式ブログ（2026年9月9日）に、業界パートナー（Warner Music Group・BMG・Believe）と開発したv6世代を公開し、v6とv6-wildはPro/Premier向け、v6-miniは全員向けと明記。旧モデルは終了しv6世代へ一本化する方針。1つ前のv5.5は2026年3月26日公開"
    evidenceUrl: "https://suno.com/blog/introducing-v6"
  - layer: "音源分離/制作ツール"
    name: "Suno Studio (MIDI / automation / plugins, etc.)"
    confidence: confirmed
    evidence: "Suno公式ブログに、Suno Studio 2.0（2026年8月13日）でMIDI・オーディオエフェクトとプラグイン・オートメーション・高度なステム分離が追加され、Premier契約者向けに提供と明記"
    evidenceUrl: "https://suno.com/blog/studio-2"
  - layer: "レーベル許諾基盤"
    name: "Warner Music Group (catalog licensing partnership)"
    confidence: confirmed
    evidence: "Suno公式ブログ（2025年11月25日）に、Warner Music Groupとの提携と、ライセンスされた音楽を使う新世代モデルの計画を明記。金額は開示されていない"
    evidenceUrl: "https://suno.com/blog/wmg-partnership"
  - layer: "レーベル許諾基盤"
    name: "BMG (global partnership)"
    confidence: confirmed
    evidence: "Suno公式ブログ（2026年8月12日）に、BMGとのグローバル提携と、参加を選んだアーティスト・ソングライターへの新しい経済機会を明記"
    evidenceUrl: "https://suno.com/blog/suno-partnership-bmg"
  - layer: "コンテンツ識別"
    name: "Audible Magic (content identification partnership)"
    confidence: confirmed
    evidence: "Suno公式ブログに、2024年10月18日にコンテンツ識別技術のAudible Magicとの提携を発表したと明記"
    evidenceUrl: "https://suno.com/blog"
sources:
  - label: "Suno公式: Pricing（Free/Pro/Premierの料金体系）"
    url: "https://suno.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Suno公式: About（本社所在地・企業理念）"
    url: "https://suno.com/about"
    accessedAt: "2026-07-23"
  - label: "Suno公式ブログ（資金調達史・Warner Music Group提携・製品リリース履歴）"
    url: "https://suno.com/blog"
    accessedAt: "2026-09-28"
  - label: "Wikipedia: Suno（創業史・RIAA提訴の経緯と現状・2026年の学習データに関する報道・各社との提携の集約）"
    url: "https://en.wikipedia.org/wiki/Suno_(platform)"
    accessedAt: "2026-09-28"
  - label: "Suno公式ブログ: Introducing v6（2026-09-09）"
    url: "https://suno.com/blog/introducing-v6"
    accessedAt: "2026-09-28"
  - label: "Suno公式ブログ: Warner Music Groupとの提携（2025-11-25・金額の開示なし）"
    url: "https://suno.com/blog/wmg-partnership"
    accessedAt: "2026-09-28"
  - label: "Suno公式ブログ: シリーズD（4億ドル超・評価額54億ドル・2026-06-03）"
    url: "https://suno.com/blog/series-d-announcement"
    accessedAt: "2026-09-28"
  - label: "Suno公式ブログ: BMGとのグローバル提携（2026-08-12）"
    url: "https://suno.com/blog/suno-partnership-bmg"
    accessedAt: "2026-09-28"
  - label: "Suno公式ブログ: Suno Studio 2.0（2026-08-13）"
    url: "https://suno.com/blog/studio-2"
    accessedAt: "2026-09-28"
  - label: "TheWrap（Yahoo転載・報道）: Warner Music GroupがSunoとの5億ドルの訴訟を和解し提携（2025-11）"
    url: "https://www.yahoo.com/entertainment/music/articles/warner-music-group-settles-500-194041732.html"
    accessedAt: "2026-09-28"
---

## サービス解説

Sunoは、Kensho出身の4人（Mikey Shulman・Georg Kucsko・Martin Camacho・Keenan Freyberg）が設立したAI音楽生成サービスだ。本社はマサチューセッツ州ケンブリッジに置かれ、公式サイトによればニューヨーク・ロサンゼルスにも拠点を持つ。2023年12月20日、ウェブアプリとMicrosoft Copilot連携で一般公開された。テキストプロンプトから、歌詞・メロディ・ボーカル・伴奏を含む楽曲をまるごと生成する点が特徴だ。

:::fact
Suno公式ブログによれば、資金調達は2025年11月のシリーズC（2億5,000万ドル・評価額24.5億ドル）から、2026年6月のシリーズD（4億ドル超・評価額54億ドル）へと急拡大した。モデルは2026年3月26日のv5.5（ボイス機能・カスタムモデル・好み学習機能「My Taste」を追加）を経て、同年9月9日に音楽業界のパートナーと開発したv6世代へ移った。一方でWikipediaの集約情報によれば、2024年6月に全米レコード協会（RIAA）がSunoと競合Udioを著作権侵害で提訴し、1作品あたり最大15万ドルの損害賠償を求めたとされる。
:::

:::pull
提訴から17ヶ月後、Sunoは訴えた側の一角と手を組んだ。訴訟と提携が同じタイムラインの上で進んでいる。
:::

::scorecard

## UX分析

SunoのUXは、音楽制作の専門知識をほぼゼロにする方向へ徹底している。

- **プロンプト1つで曲が完成する**。歌詞・メロディ・ボーカル・伴奏を個別に組み立てる必要がなく、テキストの指示だけで4分程度の楽曲がまるごと生成される。
- **既存曲の拡張・編集機能が充実**。Suno Studioでは、生成済みの楽曲に対してWarp Markers・不要音除去（Remove FX）・拍子記号対応など、DTM経験者向けの編集機能も用意されている。
- **プラン間で商用利用権が明確に分かれる**。無料プランは商用利用不可、有料のPro/Premierプランには商用利用権が含まれると公式サイトに明記されており、趣味利用と収益化の境界が料金プランで明確に線引きされている。
- **アップロード時間・優先キュー等、細かい制約でプランを差別化**。Free（アップロード8分まで）、Pro（30分まで・優先キュー）、Premier（Suno Studio込み）と、単なる生成回数だけでなく利用シーン全体の快適さで段階を分けている。

## 技術構成

::techstack

:::fact
Suno公式ブログによれば、最新の音楽生成モデルはv6世代（2026年9月9日公開）で、Warner Music Group・BMG・Believeを業界パートナーとして開発したとされる。v6・v6-wild・v6-miniの3種があり、旧モデルは終了してv6世代へ一本化する方針だ。1つ前のv5.5（2026年3月26日リリース）はボイス機能・カスタムモデル・好み学習機能「My Taste」を追加していた。制作ツールのSuno Studioは2026年2月のバージョン1.2でWarp Markers・不要音除去・拍子記号対応を、同年8月13日の2.0でMIDI・オートメーション・プラグインを追加した。2024年10月には、著作権コンテンツの識別技術を持つAudible Magicとの提携を発表している。学習データの詳細（どの楽曲データセットで学習したか）については、Suno自身の技術文書での開示は今回確認できなかった。
:::

:::guess
Audible Magicとの提携を2024年10月という比較的早い段階で結んでいるのは、生成物が既存楽曲と類似した場合の識別・対処体制を先んじて整えることで、著作権侵害の指摘に対する一定の防御線を敷く狙いがあったとみられる。一方で、学習データそのものの構成についてSuno自身が技術的な開示をしていない点は、AI音楽生成という分野全体に共通する透明性の課題を反映していると考えられる。Warner Music Groupとの提携によって少なくとも同社のカタログについては許諾関係が明確になったとみられるが、他のレーベルとの関係がどう整理されるかは、今後の訴訟の展開次第だと推測される。
:::

## ビジネスモデル

Sunoの収益は、個人向けサブスクリプション（Free/Pro/Premier）が中心だ。

:::fact
Suno公式サイトによれば、Freeプランは無料でモデルv6-mini利用・1日50クレジット付与・商用利用不可、Proプラン（月8ドル）は上位モデルのv6とv6-wild・月2,500クレジット・商用利用権付き、Premierプラン（月24ドル）はSuno Studio込み・月1万クレジットという3段階の料金体系だ。事業面では、2024年6月のRIAA提訴（Sunoと競合Udioが対象、1作品最大15万ドルの損害賠償請求）を受けながら、2025年11月25日には原告の1社であるWarner Music Groupとの提携を公式に発表した。公式発表は、参加を選んだ同社所属アーティストの名前・肖像・声・楽曲を新しい生成に使えるようにすることと、ライセンスされた音楽で新世代モデルを作ることを挙げており、金額は開示していない。報道によれば、この提携によって同社との訴訟は和解となり、5億ドルという数字は提携の金額ではなく訴訟の請求規模として伝えられた。Wikipediaの集約情報によれば、同じ合意の一部としてWarner傘下のコンサート発見プラットフォームSongkickをSunoが取得した。公式ブログによれば、2026年8月にはBMG、同年9月にはBelieveおよびTuneCoreとも提携している。一方でWikipediaの集約情報によれば、Universal Music GroupとSony Musicは原告として訴訟を続けている。
:::

:::guess
RIAA提訴からわずか17ヶ月でその加盟社の1社と大型提携を結んだという展開は、無許諾学習をめぐる法的リスクを、個別レーベルとの許諾契約への切り替えによって段階的に解消していく戦略を示していると考えられる。Warner一社との提携で問題が全面的に解決したわけではなく、他のレーベルとの関係が今後どう整理されるかは不透明なまま、評価額は24.5億ドルから54億ドルへと7ヶ月で倍増以上に拡大している。この急成長が、係争中の著作権問題の解決を先取りした強気の評価なのか、それとも問題の重大性を市場がまだ十分に織り込んでいないだけなのかは、今後の訴訟の帰趨が示すことになるだろう。
:::

訂正（2026年9月28日）。初版では、Warner Music Groupとの提携を5億ドル規模と書き、題名にも掲げていたが、誤りだった。5億ドルは報道が伝えた訴訟の請求規模であり、提携の金額は公表されていない。あわせて、提訴から提携までの期間を15ヶ月としていた箇所を17ヶ月に、v5.5の公開時期を2026年6月と読める記述を同年3月に改めた。

訴えられながら、訴えた側の一角と手を組み、成長を続ける。Sunoの解剖から見えるのは、生成AIの「学習データ問題」を抱えた会社が、個別のレーベルとの許諾契約という形で少しずつ正当性を積み上げていく、係争と提携が同時進行する過渡期の姿だ。
