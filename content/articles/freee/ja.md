---
service: "freee"
title: "確定申告ソフトが「AIから最も使いやすいSaaS」を名乗るまで — freeeが380本のAPIとMCPに賭ける理由"
description: "個人事業主と中小企業向けのクラウド会計・人事労務ソフトfreee。有料課金69万社・ARR435億円の規模を、14年もののRailsモノリス、Kubernetes（EKS）基盤、公式MCPサーバーfreee-mcpまで、決算説明資料と公式開発者ブログから解剖する。確定申告の季節に膨らんでしぼむ個人事業主の数字も読む。"
lead: "毎年3月、freeeの個人事業主ユーザーは一気に増え、6月には数万件減る。確定申告という年1回の締め切りに乗った事業だからだ。その会社がいま、自社を「AIから最も使いやすいSaaS」と呼び、380本超の公開APIとMCPサーバーを前面に出している。会計ソフトが、人ではなくAIエージェントに選ばれることを狙い始めた理由を解剖する。"
category: saas
tags: [accounting, small-business, fintech, ruby-on-rails, mcp]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://www.freee.co.jp/"
# Affiliate link placeholder: the owner must join the freee affiliate program via an ASP
# (A8.net or Moshimo Affiliate; see https://www.freee.co.jp/affiliate/) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<freee-affiliate-tracking-link>"
#   program: "freee Affiliate Program (A8.net)"
vendor: "freee K.K."
origin: "JP"
heroTheme: "freee"
scores: { product: 4.0, ux: 4.0, tech: 4.0, business: 4.0 }
techStack:
  - layer: "Webフレームワーク"
    name: "Ruby on Rails"
    confidence: confirmed
    evidence: "公式開発者ブログ（2026-04）に、freee会計はリリースから14年が経過した国内有数の大規模Ruby on Railsアプリケーションで、2012年7月の最初のコミットから続くモノリスに毎週1,000以上のコミットが積み重なると明記"
    evidenceUrl: "https://developers.freee.co.jp/entry/backend-committee-and-ruby-yjit"
  - layer: "Ruby実行系"
    name: "YJIT"
    confidence: confirmed
    evidence: "同ブログに、freee会計でRubyのJITコンパイラYJITを有効化し、APIの応答時間が平均・中央値で約15%、P90〜P99で約13%速くなり、CPU使用率は全体で約20%下がったと明記"
    evidenceUrl: "https://developers.freee.co.jp/entry/backend-committee-and-ruby-yjit"
  - layer: "静的型検査"
    name: "Sorbet / Tapioca"
    confidence: confirmed
    evidence: "同ブログに、バックエンド委員会が静的型チェッカーSorbetと型定義生成ツールTapiocaの普及を進め、GitHub Actionsやテスト実行時に型チェックを自動化していると明記"
    evidenceUrl: "https://developers.freee.co.jp/entry/backend-committee-and-ruby-yjit"
  - layer: "コンテナ基盤"
    name: "Amazon EKS (Kubernetes)"
    confidence: confirmed
    evidence: "公式開発者ブログ（2025-12）に、freeeの標準的なインフラはAmazon EKSベースで構築されており、ECSで動いていたfreeeサインも2025年5月にEKSへ移したと明記"
    evidenceUrl: "https://developers.freee.co.jp/entry/freee-sign-eks-migration"
  - layer: "データベース"
    name: "Amazon Aurora (MySQL-compatible)"
    confidence: likely
    evidence: "公式開発者ブログ（2024-09）に、freee人事労務の給与計算ロジックへAurora 3.04以降で使えるLocal Write Forwardingを導入したとある。この機能とバージョン番号はAurora MySQL互換版のものだが、記事内でエンジン名の明言は無い"
    evidenceUrl: "https://developers.freee.co.jp/entry/introduce-local-write-forwarding"
  - layer: "フロントエンド"
    name: "React / TanStack Query"
    confidence: confirmed
    evidence: "公式開発者ブログ（2026-09）に、freee販売の新フロントエンドはReact 18（React Compiler導入済み）・React Router v7・TanStack Queryで、旧フロントエンド（React 17・SWR）と画面単位で共存させながら移行していると明記"
    evidenceUrl: "https://developers.freee.co.jp/entry/spa_react_upgrade"
  - layer: "AIエージェント連携"
    name: "freee-mcp (TypeScript, MCP server)"
    confidence: confirmed
    evidence: "公式GitHubリポジトリに、freee会計・人事労務・請求書など12のAPIと電子契約をAIエージェントから操作できる公式MCPサーバーとAgent Skillsで、TypeScript製・Apache-2.0・OAuth 2.0 + PKCE認証と明記。Remote MCPのURLも公開"
    evidenceUrl: "https://github.com/freee/freee-mcp"
  - layer: "社内AI基盤"
    name: "LiteLLM on AWS"
    confidence: confirmed
    evidence: "公式開発者ブログ（2025-11）に、AWSとLiteLLMで作るセキュアなAIエージェント基盤のアーキテクチャをAWSのBuilders Flashで公開したと明記"
    evidenceUrl: "https://developers.freee.co.jp/entry/aws-builders-flash-202511"
  - layer: "コーポレートサイト配信"
    name: "Amazon CloudFront + S3"
    confidence: likely
    evidence: "当サイトのHTTPヘッダー実観測（www.freee.co.jp・2026-09-28）で x-amz-cf-pop（NRT）と x-amz-server-side-encryption が返る。製品本体（secure.freee.co.jp）の配信構成とは別物の可能性がある"
sources:
  - label: "フリー株式会社: 2026年6月期 決算説明資料（2026-08-13）"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/97bc7144/e317/47ab/926b/998554b4c0e4/20260814105745837s.pdf"
    accessedAt: "2026-09-28"
  - label: "フリー株式会社: 2026年6月期 決算短信〔日本基準〕(連結)（2026-08-13）"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/44a73483/5ccb/49e7/adc3/93f007680fdc/140120260813519620.pdf"
    accessedAt: "2026-09-28"
  - label: "フリー株式会社: 事業計画及び成長可能性に関する説明資料（2026-09-28）"
    url: "https://contents.xj-storage.jp/xcontents/AS08692/c3c6f903/1281/41ec/8c69/3683cd07f1ef/140120260928540940.pdf"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: 大規模Railsアプリを支える「バックエンド委員会」とRuby YJIT導入（2026-04）"
    url: "https://developers.freee.co.jp/entry/backend-committee-and-ruby-yjit"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: EKS移行でSRE支援体制を強化したfreeeサインの事例（2025-12）"
    url: "https://developers.freee.co.jp/entry/freee-sign-eks-migration"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: freee人事労務の給与計算ロジックにLocal Write Forwardingを導入した話（2024-09）"
    url: "https://developers.freee.co.jp/entry/introduce-local-write-forwarding"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: freee販売のフロントエンド刷新（2026-09）"
    url: "https://developers.freee.co.jp/entry/spa_react_upgrade"
    accessedAt: "2026-09-28"
  - label: "freee Developers Hub: AWSとLiteLLMで実現するAIエージェント基盤（2025-11）"
    url: "https://developers.freee.co.jp/entry/aws-builders-flash-202511"
    accessedAt: "2026-09-28"
  - label: "GitHub: freee/freee-mcp（公式MCPサーバー）"
    url: "https://github.com/freee/freee-mcp"
    accessedAt: "2026-09-28"
  - label: "freee公式: 個人事業主向け料金プラン"
    url: "https://www.freee.co.jp/personal-business/accounting/pricing/"
    accessedAt: "2026-09-28"
  - label: "freee公式: アフィリエイトパートナー募集"
    url: "https://www.freee.co.jp/affiliate/"
    accessedAt: "2026-09-28"
---

freeeは、確定申告の季節とともに大きくなってきた会社だ。その会社が2026年、決算資料の見出しに「AIに選ばれるSaaS」と書いた。人が画面で帳簿をつける道具から、AIエージェントが代わりに帳簿をつける先の「記録の置き場」へ。日本のクラウド会計の代表格が、自分の役割を書き換えようとしている。

## サービス解説

freeeは、個人事業主と中小企業向けのクラウド会計ソフトを中心に、人事労務・請求書・販売管理・電子契約などを一つの「統合型経営プラットフォーム」として提供する。銀行口座やクレジットカードの明細を自動で取り込み、質問に答えていくと確定申告書ができる、という体験で個人事業主に広がった。

:::fact
事業計画及び成長可能性に関する説明資料（2026-09）によれば、フリー株式会社の設立は2012年で、2026年6月末の連結従業員数は2,327名。決算説明資料（2026-08-13）によれば、2026年6月末の有料課金ユーザー企業数は694,586件（前年比14.0%増）で、うち個人事業主が419,957件、法人が274,629件。継続収益を年換算したプラットフォームARRは約436億円（同21.8%増）、ARRの12ヶ月平均月次解約率は1.0%だった。
:::

:::fact
公式の料金ページによれば、個人事業主向けのfreee会計は4プランで、表示価格はすべて税抜き。スターターは年払いで月980円（年額11,760円）、月払いで月1,780円。消費税申告に対応するスタンダードは年払いで月1,980円（年額23,760円）、月払いで月2,980円。電話サポートや税務調査サポートが付くプレミアム（年額39,800円）と、入力・仕訳作業を代行する入力おまかせ（年額49,800円）は年払いのみ。
:::

:::pull
3月末に448,155件あった個人事業主の有料ユーザーは、6月末に419,957件になっていた。確定申告の締め切りが、そのまま事業の季節になっている。
:::

::scorecard

## UX分析

freeeのUXは「簿記を知らない人が、経理を意識せずに申告まで終える」ことに最適化されてきた。そして2026年、その体験の入口に人間の画面ではなくAIエージェントを加えた。

- **仕訳ではなく質問で進める**。料金ページは「○×の質問に答えて確定申告書を作成」と説明する。借方・貸方という会計の言葉を前面に出さず、日常の言葉で答えさせる設計は、初めて申告する個人事業主の不安を減らす。
- **明細の自動取得で入力を減らす**。1,000以上の口座・サービスから明細を自動で取り込むと公式はうたう。入力の手間が減るほど、年1回しか触らない人でも続けやすい。
- **AIエージェントを「もう一人の利用者」として扱う**。公式MCPサーバーfreee-mcpは、Claude等のAIツールにURLを1つ登録するだけでfreeeを操作できるRemote MCPを用意している。READMEには「freee公式以外のURLを入力しないように」という注意書きもあり、会計データを預かる側としてなりすましへの警戒を明示している点は丁寧だ。
- **プランの境目がわかりにくい面もある**。スターターで足りるのか、消費税申告のためにスタンダードが要るのかは、課税事業者かどうかという税務の知識に依存する。「インボイス登録をしたらスタンダード」のように、事業者の状況からプランを案内する導線があればさらに迷いにくいだろう。

## 技術構成

::techstack

:::fact
公式開発者ブログ（2026-04）によれば、freee会計のバックエンドは2012年7月の最初のコミットから続くRuby on Railsのモノリスで、いまも毎週1,000以上のコミットが積み重なる。会計のコアロジックが密結合した複雑なドメインを保つため「バックエンド委員会」を置き、静的型チェッカーSorbetの普及などを進めている。Kubernetes上のPod単位でメモリ上限とワーカー数を見積もったうえでRubyのJITコンパイラYJITを有効化し、APIの応答時間を平均・中央値で約15%、遅いリクエスト（P90〜P99）でも約13%縮め、CPU使用率を全体で約20%下げた。
:::

:::fact
同ブログの別記事によれば、freeeの標準的なインフラはAmazon EKS（Kubernetes）で、ECSで動いていた電子契約のfreeeサインも2025年5月にEKSへ移し、全社のSREが同じ前提で支援できるようにした（2025-12）。フロントエンドでは、freee販売が旧（React 17・SWR）と新（React 18とReact Compiler・TanStack Query）の二つのSPAを同じプロダクト内で共存させ、サーバーがリクエストのパスを見て返すHTMLを切り替えながら画面単位で移行している（2026-09）。
:::

:::fact
公式のGitHubリポジトリによれば、freee-mcpはTypeScriptで書かれたApache-2.0のオープンソースで、freee会計・人事労務・請求書・工数管理・販売など12のAPIと電子契約の、合計515操作をAIエージェントから呼び出せる。MCPサーバーがOAuth 2.0 + PKCEでの認証とOpenAPIスキーマによるリクエスト検証を受け持ち、Agent SkillsがAPIリファレンスと操作レシピを必要な分だけAIのコンテキストに注入する二段構えになっている。成長可能性資料によれば、freee-mcpの利用実績がある事業所数は、2026年3月の約0.5万社から6月には約1.8万社に増え、公開APIは380本を超える。
:::

:::guess
14年もののRailsモノリスを抱えたまま、新しい層としてMCPを薄く被せる選択は合理的とみられる。帳簿の整合性を守るロジックは既存のAPIの裏側に閉じたまま、AIに渡すのは「検証済みのAPI呼び出し」だけにできるからだ。Agent Skillsで必要なリファレンスだけを渡す作りは、成長可能性資料が掲げる「高いトークン効率」とも対応していると読める。AIに自由に帳簿を書かせるのではなく、既存の業務ルールという柵の中で動かす設計だと推測される。
:::

## ビジネスモデル

freeeの収益の柱は、月額・年額のサブスクリプションと、法人カードなど取引量に比例する手数料型の収益だ。

:::fact
決算短信（2026-08-13）によれば、2026年6月期の売上高は424.4億円（前期比27.6%増）、営業利益は10.9億円（同78.6%増）、株式報酬などを除いた調整後営業利益は26.6億円（同41.3%増）。決算説明資料によれば、ARR約436億円のうち法人が347.8億円、個人事業主が88.2億円で、手数料型のトランザクションARRは法人向けクレジットカード事業の拡大で前年比65.4%増えた。2027年6月期は売上高522億円（同23.0%増）、調整後営業利益率11%を目指すとしている。
:::

:::fact
同資料の四半期推移によれば、個人事業主の有料課金ユーザーは毎年3月末（第3四半期）に跳ね上がり、6月末に減る。2026年6月期は3月末の448,155件から6月末の419,957件へ、約2.8万件減った。資料は、個人事業主のサブスクリプションARRが「確定申告後の解約抑制」で前年比13.5%増に加速したと説明し、プロダクト強化とプライシングの最適化で個人事業主の年契約比率が約70%に上がったとしている。1ユーザーあたりの年間ARRは、法人が126,655円、個人事業主が20,995円だった。
:::

:::guess
個人事業主の平均単価（約2.1万円）は、スターターの年額（11,760円）とスタンダードの年額（23,760円）の間にある。多くの個人事業主はこの2プランのどちらかを年払いで使っているとみられる。年払いの比率を上げることは、申告が終わった春に解約される「季節の穴」を塞ぐ最も直接的な手段で、freeeが月払いより年払いを大きく値引きしているのもそのためと推測される。一方で成長の重心は明らかに法人側にあり、個人事業主は「ブランド認知の入口」、法人とその会計事務所が「単価の出口」という役割分担に読める。
:::

:::fact
公式サイトによれば、freeeはブログなどで紹介して報酬を受け取るアフィリエイトプログラムを運営している。クラウド会計ソフトfreeeはA8.netともしもアフィリエイトで、給与計算とマイナンバー管理はもしもアフィリエイトのみで提携できる。
:::

確定申告の季節に膨らんでしぼむ個人事業主の数字と、年率2割超で積み上がる法人の数字。freeeはその両方を抱えたまま、帳簿をつける主体が人からAIへ移る未来に、APIとMCPという形で先回りしている。14年分のRailsの上に、AI向けの入口を一枚足す。それが2026年のfreeeの賭けだ。
