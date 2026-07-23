---
service: "ChatGPT"
title: "非営利研究所が、週間ユーザー9億人の営利企業になるまで — OpenAIが2025年に完了させた組織再編"
description: "2015年に非営利研究所として始まったOpenAIは、10年でChatGPT週間アクティブユーザー9億人・GPT-5.6モデル群を擁する企業へ成長し、2025年10月には非営利財団が26%を保有する公益企業（PBC）への組織再編を完了した。Oracle・Microsoft・Nvidiaと結ぶ数千億ドル規模の計算資源契約と合わせ、公開情報からChatGPTとOpenAIの設計を解剖する。"
lead: "2022年11月30日、ChatGPTは公開から5日で100万ユーザーに達した。2026年2月時点の週間アクティブユーザーは9億人。その裏で運営会社OpenAIは、人類のためにAIを安全に開発する非営利研究所として始まりながら、2025年10月に「OpenAI Foundation（非営利・26%保有）」と「OpenAI Group PBC（営利）」という二層構造への再編を完了させた。非営利の看板を残したまま、Oracleとだけで3,000億ドル規模の計算資源契約を結ぶ会社の設計を解剖する。"
category: ai-tool
tags: [ai-assistant, llm, api, chatbot, coding-agent]
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
serviceUrl: "https://chatgpt.com/"
vendor: "OpenAI Group PBC"
origin: "US"
heroTheme: "chatgpt"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "モデル基盤"
    name: "GPT-5.6ファミリー（Sol / Terra / Luna）"
    confidence: confirmed
    evidence: "OpenAI公式API開発者向けドキュメントの料金ページに、gpt-5.6-sol・gpt-5.6-terra・gpt-5.6-lunaを含むモデル群のトークン単価が掲載されていることを実確認"
    evidenceUrl: "https://developers.openai.com/api/docs/pricing"
  - layer: "コーディングエージェント"
    name: "Codex"
    confidence: confirmed
    evidence: "OpenAI Developers公式サイトのトップページに、開発者向けコーディングエージェント製品として明記されていることを実確認"
    evidenceUrl: "https://developers.openai.com"
  - layer: "アプリ拡張の標準"
    name: "Apps SDK（Model Context Protocol準拠）"
    confidence: confirmed
    evidence: "OpenAI Developers公式サイトに、ChatGPTをアプリで拡張するApps SDKが「Model Context Protocol」に基づくと明記されていることを実確認。競合Anthropicが策定・公開したオープン標準を採用している"
    evidenceUrl: "https://developers.openai.com"
  - layer: "計算基盤（クラウド）"
    name: "Microsoft Azure"
    confidence: likely
    evidence: "Wikipediaの集約情報によれば、2019年以降Microsoft Azureが主要クラウド基盤とされ、2026年4月の契約更新で独占条項が緩和されたと報じられている。OpenAI自身の技術ページでは未確認のためlikely扱い"
  - layer: "計算基盤（追加契約）"
    name: "Oracle Cloud Infrastructure / Stargateプロジェクト"
    confidence: likely
    evidence: "Wikipediaの集約情報によれば、2025年9月にOracleと5年間3,000億ドル規模の計算資源契約を締結、同年1月にはOracle・SoftBank・MGXと共同で総額5,000億ドル規模のデータセンター整備計画「Stargate」を発表したとされる。一次情報未確認のためlikely扱い"
sources:
  - label: "OpenAI Developers公式: API Pricing（GPT-5.6ファミリーのトークン単価）"
    url: "https://developers.openai.com/api/docs/pricing"
    accessedAt: "2026-07-23"
  - label: "OpenAI Developers公式: トップページ（Codex・Apps SDK・API Platformの製品構成）"
    url: "https://developers.openai.com"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: OpenAI（2025年組織再編・出資構造・資金調達史・計算基盤契約の集約）"
    url: "https://en.wikipedia.org/wiki/OpenAI"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: ChatGPT（公開日・週間アクティブユーザー数推移・料金プラン・機能史の集約）"
    url: "https://en.wikipedia.org/wiki/ChatGPT"
    accessedAt: "2026-07-23"
---

## サービス解説

ChatGPTは2022年11月30日、OpenAIが公開した対話型AIだ。運営会社OpenAIは2015年、Elon MuskやSam Altmanらによって非営利研究所として設立された。2019年に「利益上限付き営利企業」という変則的な構造へ移行し、2025年10月28日には、非営利の「OpenAI Foundation」と公益企業（PBC）の「OpenAI Group PBC」からなる二層構造への再編を完了させた。

:::fact
Wikipediaの集約情報によれば、2025年10月の再編後の持分比率はOpenAI Foundation（非営利）26%、Microsoft 27%、従業員・投資家47%とされる。資金調達面では、2019年のMicrosoftによる10億ドル出資に始まり、2023年1月の100億ドル出資（評価額290億ドル）を経て、2026年2月には1,100億ドル調達（評価額7,300億ドル、同年3月に1,200億ドルへ拡大）、同年4月には1,220億ドルの追加出資確約（評価額8,520億ドル）に達したと報じられている。ChatGPTの週間アクティブユーザー数は2026年2月時点で9億人、従業員数はおよそ4,500人（2026年時点）とされる。
:::

:::pull
公開5日で100万ユーザーに達した対話AIは、3年余りで週間9億人が使うプロダクトになった。運営会社は非営利のまま生まれ、営利企業として上場を目指す規模にまで育った。
:::

::scorecard

## UX分析

ChatGPTのUXは、単一のチャットボットから、複数のエージェント製品群へと拡張を続けている。

- **チャット単体から製品群へ**。ブラウザ拡張のような単機能ではなく、コーディングエージェントのCodex、文書作成のChatGPT Work、ブラウザ操作エージェントのOperator/ChatGPT Atlasなど、用途別の製品ラインをChatGPTブランドの傘の下に展開している。
- **競合の標準に相乗りする柔軟さ**。ChatGPTをアプリで拡張する「Apps SDK」は、競合Anthropicが策定したオープン標準Model Context Protocol（MCP）に準拠している。エージェント間連携の規格争いでは、自社規格への固執よりも普及した標準への追随を選んだ格好だ。
- **料金プランは個人からGoまで幅広い**。無料プランに加え、Plus（月20ドル）、Pro（月200ドル）という高価格帯、さらにインドなど一部市場向けの低価格プラン「ChatGPT Go」まで、市場ごとに価格帯を細分化している。
- **急速な機能追加が体験の一貫性を試している**。メモリ機能、音声対話、画像生成（GPT Image）、検索統合など、短期間に多数の機能が積み重なっており、製品としての焦点がチャットボットからパーソナルAIエージェントへと移りつつある過渡期にある。

## 技術構成

::techstack

:::fact
OpenAI公式の開発者向けサイトによれば、API基盤はGPT-5.6ファミリー（Sol・Terra・Lunaの3グレード）を中心に、旧世代のGPT-5.5・GPT-5.4系列も併存提供されている。同サイトでは、コーディングエージェント「Codex」と、ChatGPTをアプリで拡張する「Apps SDK」が主力製品として並んでおり、Apps SDKは競合Anthropicが公開したオープン標準Model Context Protocol（MCP）に準拠すると明記されている。
:::

:::guess
自社の対話AIを拡張する仕組みに、競合が策定したオープン標準を採用しているのは、エージェント連携の規格争いにおいて「独自規格で囲い込む」より「普及した標準に乗って開発者を取り込む」ほうが得策だという判断が働いたためとみられる。計算基盤をMicrosoft・Oracle・Nvidia・AMD・CoreWeaveと多数のベンダーに分散させている点も同様で、単一ベンダーへの依存や供給制約を避けつつ、5,000億ドル規模とされるStargate計画のような超大型インフラ投資を複数パートナーとのリスク分散契約で実現しようとしている構図と推測される。
:::

## ビジネスモデル

OpenAIの収益は、ChatGPTの個人・法人向けサブスクリプションと、開発者向けAPI従量課金の二本柱だ。

:::fact
ChatGPTの料金は無料プランに加え、Plus（月20ドル、2023年2月開始）、Pro（月200ドル、2024年12月開始）、一部市場向けの低価格プラン「ChatGPT Go」（インドで月399ルピー）が確認されている。法人向けにはTeam・Business・Enterpriseプランも存在する。資金調達は2025年10月の組織再編を経て、2026年4月時点で評価額8,520億ドルに達したと報じられており、Microsoftの累計出資額は130億ドル超とされる。同時に、Oracleとの5年3,000億ドル契約、Oracle・SoftBank・MGXと共同のStargate計画（総額5,000億ドル規模）など、桁違いの計算資源投資契約が積み上がっている。
:::

:::guess
週間9億人という利用規模と、数千億ドル規模の計算資源契約が同時に積み上がっている構図は、ChatGPTがすでに巨大な需要を持ちながらも、その需要を満たす計算能力への投資がさらに先行し続けている状態を示していると考えられる。非営利のOpenAI Foundationが26%を保有する構造を維持したまま営利企業としての資金調達を続けているのは、Anthropicと同じく「安全性・公益のミッションを掲げる組織」が「莫大な資本を集める営利事業」を運営するという矛盾を抱えたままの拡大であり、この二重構造がガバナンス上どこまで実効性を持つかは、今後の経営判断の積み重ねでしか検証できないと推測される。
:::

非営利研究所として生まれた会社が、10年で週間9億人の消費者向けプロダクトと、数千億ドル規模のインフラ投資契約を同時に抱える企業になった。ChatGPTとOpenAIの解剖から見えるのは、規格争いでは競合の標準に相乗りし、計算資源では特定ベンダーに依存しない分散調達を選び、組織構造では非営利の看板を残しながら営利企業としての資金調達を最大化するという、実利を優先した一貫した設計判断である。
