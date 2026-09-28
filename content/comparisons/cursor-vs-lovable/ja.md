---
title: "エディタを持ち込むか、バックエンドを作るか — CursorとLovableが選んだ別々の内製化"
description: "VS Codeをフォークして生まれたCursorと、Supabase連携から始まったLovable。どちらも「借り物の基盤の上に立つAIツール」だが、あとから自社で作り込んだ層が違う——Cursorは自社モデルComposer、Lovableは組み込みバックエンドLovable Cloud & AI。2025年には評価額が5ヶ月で3倍前後という同じリズムで伸びた2社は、2026年8月、CursorがSpaceXに買収され、Lovableは外部からの調達を続けるという別々の道に入った。内製化の選び方と、その行き先を解剖する。"
lead: "CursorはVS Codeというエディタを借りて、そこにAIモデルを作り込んだ。LovableはSupabaseというバックエンドを借りて、そこに自社クラウドを作り込んだ。同じ「借り物の基盤の上に立つAIツール」という戦略を採りながら、後から内製化した層がまったく違う2社は、2025年には評価額が5ヶ月で3倍前後になるという奇妙に似たリズムで急成長した。そして2026年8月、Cursorは計算資源とモデルを持つSpaceXの傘下に入り、Lovableは同じ月にシリーズCを発表した。2社の内製化の選び方と、分かれた行き先を重ねて解剖する。"
slugA: "cursor"
slugB: "lovable"
publishedAt: "2026-07-23"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "Cursor公式ブログ: Cursor is now a part of SpaceX（2026-08-14・SpaceXによる買収完了）"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Series D（2025-11・評価額293億ドル・NVIDIAとGoogleが新規参加）"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Series C（2025-06・評価額99億ドル）"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ドキュメント: Models & Pricing（自社枠Cursor ModelsにComposerとGrok）"
    url: "https://cursor.com/docs/models-and-pricing"
    accessedAt: "2026-10-02"
  - label: "Cursor公式ブログ: Introducing Composer 2.5（2026-05-18・Kimi K2.5が土台）"
    url: "https://cursor.com/blog/composer-2-5"
    accessedAt: "2026-10-02"
  - label: "Anthropic公式: Lovable導入事例（Claudeの利用）"
    url: "https://claude.com/customers/lovable"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Series C（2026-08-12・4億ドル・評価額133億ドル）"
    url: "https://lovable.dev/blog/series-c"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Series B（2025-12-18・3.3億ドル・評価額66億ドル・投資家一覧）"
    url: "https://lovable.dev/blog/series-b"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Series A（2025-07-17・2億ドル・評価額18億ドル）"
    url: "https://lovable.dev/blog/200m-series-a-fundraise"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ: Lovable Cloud & AI（2025-09-29）"
    url: "https://lovable.dev/blog/lovable-cloud"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ドキュメント: Lovable Cloud（Supabaseのオープンソース基盤を利用）"
    url: "https://docs.lovable.dev/integrations/cloud"
    accessedAt: "2026-10-02"
  - label: "Lovable公式ブログ（資金調達史・ARR推移）"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-10-02"
---

[Cursor](/ja/articles/cursor)と[Lovable](/ja/articles/lovable)は、どちらも「会話やコードでAIにアプリを作らせる」という同じ市場で、驚くほど似た速度で急成長した2社だ。それでも技術構成を機械比較して重なるのは、AIモデルの提供元であるAnthropicの1つだけだ。そして、2社が「借り物の基盤の上で、どの層だけは自社で作り込むか」という選択をした先が、まったく違う。2026年8月にはその違いが資本の面にも表れ、CursorはSpaceXに買収された。

## 同じ戦略、内製化した層が違う

:::fact
[Cursor](/ja/articles/cursor)の記事によれば、CursorはVS Codeのコードベースをフォークしてエディタの基盤とし、2024年時点ではコード編集モデル「Fast Apply」（ファインチューニング済みLlama-3-70B、Fireworks AI提携）を使い、2025年10月に自社開発のコーディングモデル「Composer」を投入した。2026年10月時点の公式ドキュメントは、Composer 2.5とGrok 4.7・4.6・4.5を「Cursor Models」という自社枠にまとめ、Anthropic・OpenAI・Googleなどの他社モデルを「Other Models」枠で提供している。Composer 2.5の公式ブログによれば、このモデルはオープンソースのチェックポイントであるMoonshotのKimi K2.5の上に構築されている。Lovableの公式ブログによれば、同社は2025年9月29日に組み込みバックエンド「Lovable Cloud & AI」（データ永続化・認証を含む）をリリースした。公式ドキュメント（2026年10月確認）は、この組み込みバックエンドがSupabaseのオープンソース基盤を利用していると説明し、自分のSupabaseプロジェクトを接続する方式も引き続き案内している。Anthropic公式の導入事例によれば、Lovableのエージェントは Claude のモデル群の上で動いている。
:::

:::pull
Cursorはエディタを借りて、モデルを作り込んだ。Lovableはバックエンドを借りて、クラウドを作り込んだ。同じ「借りて作る」戦略でも、どの層を選ぶかで会社の個性が決まる。
:::

Cursorが内製化したのは「知能」の層だ。エディタというUIはVS Codeという枯れたOSSに委ね、その代わりコード編集の精度と速度を左右するモデル層に自社の差別化を集中させている。ただし買収後のいま、この層は自社だけの持ち物ではない。Cursorの記事によれば、親会社のSpaceXがGPUクラスタの計算資源を提供し、Grokは自社枠のモデルとして並んでいる。Lovableが内製化したのは「土台」の層だ。アプリを生成するAIモデル自体は、Anthropic公式の導入事例によればClaudeに委ねている一方、生成したアプリが実際に動くためのデータベース・認証というバックエンドを、Supabaseのオープンソース基盤の上に自社のサービスとして組み立てている。

:::guess
この選択の違いは、2社が「AIがコードを書く」という同じ現象の、異なる部分に価値の重心を置いているためだと考えられる。Cursorのユーザーはすでにコードを書ける開発者で、彼らが評価するのは編集の精度・速度そのものだから、モデル層の内製化が直接の差別化になる。Lovableのユーザーは会話だけでアプリを作りたい非エンジニアも含まれ、彼らにとっての価値は「動くものが出てくること」そのものであり、モデルの精妙さよりも生成後のアプリが安定して動くバックエンドの信頼性が体験を左右する。同じ「AI開発者ツール」というカテゴリの中でも、想定する利用者の技術レベルが、どの層を内製化するべきかを規定していると推測される。なお、Composerはオープンソースのチェックポイントの上に、Lovable CloudはSupabaseのオープンソース基盤の上にあるため、どちらの内製化も、ゼロから作るというより借りた土台を自社の製品へ仕立て直す形に近いとみられる。
:::

訂正（2026年10月2日）。これまで、2社の技術構成を機械比較すると共有技術はゼロだと書いていたが、誤りだった。Cursorの記事のtechStackに他社モデルの提供元が、Lovableの記事のtechStackに生成AIモデルの提供元が入っていなかったためで、両方を一次情報で確認して追加した結果、機械比較はAnthropicを共有技術として返す。あわせて、Lovableが使うAIモデルを推測として書いていた箇所を、Anthropic公式の導入事例にもとづく記述へ改め、ComposerとLovable Cloudがそれぞれオープンソースの土台の上にあることを加えた。

## 同じリズムで伸びた評価額、分かれた行き先

内製化の対象は違うのに、2025年の資金調達の速度は奇妙なほど似ていた。違いが出たのは2026年である。

:::fact
Cursorの公式ブログによれば、Cursorの評価額はSeries C（2025年6月・99億ドル）からSeries D（2025年11月・293億ドル）へ、約5ヶ月で約3倍になり、Series DにはNVIDIAとGoogleが新規投資家として参加した。[Cursor](/ja/articles/cursor)の記事によれば、これらは買収前に公式発表された最後の調達で、その後SpaceXがCursorの株式価値を600億ドルとみなす条件で買収の権利を得て、Cursor公式ブログは2026年8月14日に買収の完了を発表した。Lovableの公式ブログによれば、Lovableの評価額はSeries A（2025年7月・18億ドル、同ブログの表現で「ローンチから8ヶ月」）からSeries B（2025年12月・66億ドル）へ、約5ヶ月で約3.7倍になり、Series C（2026年8月12日発表・4億ドル調達）で133億ドルになった。Series BはCapitalGとMenlo VenturesのAnthologyファンドが主導し、NVenturesなどが参加している。
:::

:::guess
2025年に2社が同じような速度で評価額を伸ばしたことは、AIコーディング・AI開発ツールという領域全体に、投資家が同じ時間軸で資本を投じていたことを示していると考えられる。当時のCursorでは、NVIDIAとGoogleという計算基盤の主要プレイヤーがSeries Dに参加し、計算資源の供給者がそれを消費するツール企業の株主にもなる構図が生まれていた。LovableのSeries BにもNVIDIAのベンチャー部門とAlphabet系の成長投資ファンドが名を連ねており、似た構図は両社に共通していたと読める。2026年に入ると行き先が分かれた。Cursorは株主に計算資源の供給者を迎える段階を越えて、計算資源とモデルを持つ親会社の一部になった。Lovableは公式ブログで確認できる限り、2026年8月にも外部の投資家からシリーズCを調達しており、独立した企業として資金を集める道を続けているとみられる。Series BからCまでは約8ヶ月で約2倍と、伸びの速さ自体は2025年より穏やかになっている。
:::

エディタを借りてモデルを作り込んだCursorと、バックエンドを借りてクラウドを作り込んだLovable。内製化した層は違っても、2025年の評価額が数ヶ月で数倍になるという成長のリズムは驚くほど重なっていた。2社を並べて解剖すると見えてくるのは、「AIにコードを書かせる」という同じ市場が、想定する利用者の技術レベルに応じて複数の勝ちパターンを同時に許容してきたこと、そしてその先の資本の形までは一つに決まらないということだ。モデルを作り込んだCursorは、計算資源とモデルを垂直統合する親会社の内側へ入った。クラウドを作り込んだLovableは、いまのところ外部からの調達で規模を広げている。どの層を自社で持つかという選択は、誰と組むかという選択にもつながっているのかもしれない。
