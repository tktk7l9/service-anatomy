---
title: "検索を壊しにいく側が、壊す相手のモデルも売っている — PerplexityとGeminiの共犯関係"
description: "Google検索に挑むAI答えエンジンPerplexityと、Google自身のAI Gemini。対立関係に見えて、実はPerplexityのAgent APIはGoogleのGeminiを含む複数モデルを「マークアップなしで」ルーティング先に加えている。配信網をゼロから作ろうとするPerplexity(Cometブラウザ)と、Search・Android・Workspaceという配信網をすでに持つGemini——2社の非対称な戦いを解剖する。"
lead: "PerplexityはGoogle検索の存在意義そのものに挑む「答えエンジン」だ。それなのに、Perplexity自身のAPIドキュメントには、ルーティング先の1つとしてGoogleの名前が並ぶ。壊しにいく相手のモデルを、自社製品の一部として売っている。配信網をChromiumベースの自社ブラウザCometでゼロから作ろうとするPerplexityと、Search・Android・Workspaceという世界最大級の配信網をすでに持つGemini——机上の対立関係と、実際の依存関係が食い違う2社を解剖する。"
slugA: "perplexity"
slugB: "gemini"
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
sources:
  - label: "Perplexity公式APIドキュメント: Pricing（Agent APIがGoogle等をマークアップなしでルーティング）"
    url: "https://docs.perplexity.ai/getting-started/pricing"
    accessedAt: "2026-07-23"
  - label: "Google DeepMind公式: Geminiモデルページ"
    url: "https://deepmind.google/models/gemini/"
    accessedAt: "2026-07-23"
  - label: "Google One公式: AI Plans（Google AI Plus/Pro/Ultra）"
    url: "https://one.google.com/about/google-ai-plans/"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Perplexity AI（Cometブラウザ・資金調達推移の集約）"
    url: "https://en.wikipedia.org/wiki/Perplexity_AI"
    accessedAt: "2026-07-23"
---

[Perplexity](/ja/articles/perplexity)は、リンク一覧ではなく引用付きの回答を返す「答えエンジン」として、Google検索という巨人の存在意義そのものに挑んでいる。それなのに、Perplexity自身のAPIドキュメントを読むと、ルーティング先の1つとして挑んでいる相手——Google——の名前が並ぶ。

## 壊しにいく相手のモデルを、自社製品として売る

:::fact
[Perplexity](/ja/articles/perplexity)の記事によれば、公式APIドキュメントにはAgent APIがOpenAI・Anthropic・Google・xAI等のサードパーティモデルを「マークアップなし」（プロバイダーの提供価格のまま）でルーティングできると明記されている。[Gemini](/ja/articles/gemini)の記事によれば、GoogleはGemini 3.6 Flash・Gemini 3.1 Pro等の自社モデル群を、Google DeepMindの公式ページで公開している。
:::

Perplexityのユーザーは、Google検索を経由せずに情報へたどり着くためにPerplexityを使う。それでいて、その回答生成の裏側では、Googleが作ったモデル自体を選んで使うことができる。競合関係と依存関係が、同じ製品の中で同居している。

:::pull
検索の存在意義を壊しにいく側が、壊す相手のモデルを自社の商品棚に並べている。競合というより、同じ土俵の中でレイヤーだけがずれた関係だ。
:::

:::guess
この構図は、Perplexityにとって「どのAIモデルを使うか」と「どう情報を届けるか」が別々の勝負であることを示していると考えられる。モデルの性能そのものでは、自社開発のSonarに加えて他社の最良のモデルを取り込む方が製品として強く、そこにGoogleを含めない理由はない。一方で「情報の届け方」——引用付きの回答、広告のない検索体験——という体験の層こそが、Perplexityが実際にGoogleと戦っている場所だ。技術的には協力し、体験の層で対立するという二重構造が、AI企業同士の競合が単純な敵対関係では説明できないことを示している。
:::

## 配信網をゼロから作る側と、すでに持つ側

情報を届ける「場所」をめぐる戦いでは、両社の立ち位置は非対称だ。

:::fact
[Perplexity](/ja/articles/perplexity)の記事によれば、Chromiumベースの自社ブラウザCometは2025年7月にサブスクリプション限定でリリースされ、同年10月に無料開放された。[Gemini](/ja/articles/gemini)の記事によれば、Geminiは既にGoogle Search・Workspace（Gmail/Docs/Sheets）・Android・Chrome・Google Photos・Messagesという既存のGoogle製品群に組み込まれ、PixelやGalaxyでは標準アシスタントとして採用されている。
:::

:::guess
Perplexityがブラウザという入り口をゼロから作らなければならないのは、検索エンジンでもOSでもデバイスでも配信網を持たない独立系企業だからだと考えられる。Cometは、Googleがすでに持っている「ユーザーが最初に開く画面」という資産を、後発が獲得するための唯一の現実的な手段とみられる。対してGeminiは、[Geminiの記事](/ja/articles/gemini)で見た「チップも配信網も自社所有」という構造の一部として、新しいアプリを作る必要すらなく既存製品への機能追加だけで数十億人に届く。Perplexityが評価額212億ドル(2026年初頭)という独立企業としての資金調達を積み重ねてこの差を埋めようとしているのに対し、GeminiはAlphabetという親会社の既存の配信網と資本を前提にできる——同じAI競争の中で、必要な投資の性質がまったく異なっている。
:::

Perplexityは、壊しにいく相手のモデルを自社製品の一部として使いながら、その相手が既に持っている配信網だけは自力で作らなければならない。機械比較の共有技術がゼロなのは偶然ではなく、両社が同じ市場で、モデル・配信網という異なるレイヤーに異なる立ち位置で臨んでいるからだ。PerplexityとGeminiの解剖から見えるのは、AI企業同士の競合が、技術的な協力と体験層での対立を同時に抱えながら進む、単純な敵対関係には収まらない構図である。
