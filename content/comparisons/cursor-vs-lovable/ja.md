---
title: "エディタを持ち込むか、バックエンドを作るか — CursorとLovableが選んだ別々の内製化"
description: "VS Codeをフォークして生まれたCursorと、Supabase連携から始まったLovable。どちらも「借り物の基盤の上に立つAIツール」だが、あとから自社で作り込んだ層が違う——Cursorは自社フロンティアモデルComposer、Lovableは組み込みバックエンドLovable Cloud & AI。評価額が5ヶ月で3倍という同じリズムで急成長した2社の、内製化の選び方を解剖する。"
lead: "CursorはVS Codeというエディタを借りて、そこにAIモデルを作り込んだ。LovableはSupabaseというバックエンドを借りて、そこに自社クラウドを作り込んだ。同じ「借り物の基盤の上に立つAIツール」という戦略を採りながら、後から内製化した層がまったく違う2社は、評価額が5ヶ月で3倍前後になるという奇妙に似たリズムでも急成長した。2社の内製化の選び方を重ねて解剖する。"
slugA: "cursor"
slugB: "lovable"
publishedAt: "2026-07-23"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
sources:
  - label: "Cursor公式ブログ: Series D（2025-11・評価額293億ドル）"
    url: "https://cursor.com/blog/series-d"
    accessedAt: "2026-09-28"
  - label: "Cursor公式ブログ: Series C（2025-06・評価額99億ドル）"
    url: "https://cursor.com/blog/series-c"
    accessedAt: "2026-09-28"
  - label: "Lovable公式ブログ（資金調達史・ARR推移）"
    url: "https://lovable.dev/blog"
    accessedAt: "2026-09-28"
  - label: "Cursor公式ブログ: Introducing Composer 2.5（2026-05-18・Kimi K2.5が土台）"
    url: "https://cursor.com/blog/composer-2-5"
    accessedAt: "2026-09-28"
  - label: "Cursor公式ドキュメント: Models（対応モデル一覧）"
    url: "https://cursor.com/docs/models"
    accessedAt: "2026-09-28"
  - label: "Cursor公式ブログ: Cursor is now a part of SpaceX（2026-08-14・買収完了）"
    url: "https://cursor.com/blog/joining-spacex"
    accessedAt: "2026-09-28"
  - label: "SEC提出書類: SpaceX Form 8-K（2026-08-14・Cursorの株式価値600億ドル）"
    url: "https://www.sec.gov/Archives/edgar/data/0001181412/000162828026056945/spcx-20260814.htm"
    accessedAt: "2026-09-28"
  - label: "Lovable公式ドキュメント: Lovable Cloud（Supabaseのオープンソース基盤を利用）"
    url: "https://docs.lovable.dev/integrations/cloud"
    accessedAt: "2026-09-28"
  - label: "Anthropic公式: Lovable導入事例（Claudeの利用）"
    url: "https://claude.com/customers/lovable"
    accessedAt: "2026-09-28"
  - label: "Lovable公式ブログ: Series B（2025-12-18・評価額66億ドル・投資家一覧）"
    url: "https://lovable.dev/blog/lovable-raises-330m-to-power-the-age-of-the-builder"
    accessedAt: "2026-09-28"
  - label: "Lovable公式ブログ: Series C（2026-08-12・4億ドル調達・評価額133億ドル）"
    url: "https://lovable.dev/blog/series-c"
    accessedAt: "2026-09-28"
---

[Cursor](/ja/articles/cursor)と[Lovable](/ja/articles/lovable)は、どちらも「会話やコードでAIにアプリを作らせる」という同じ市場で、驚くほど似た速度で急成長した2社だ。それでも技術構成を機械比較して重なるのは、AIモデルの提供元であるAnthropicの1つだけだ。そして、2社が「借り物の基盤の上で、どの層だけは自社で作り込むか」という選択をした先が、まったく違う。

## 同じ戦略、内製化した層が違う

:::fact
[Cursor](/ja/articles/cursor)の記事によれば、CursorはVS Codeのコードベースをフォークしてエディタの基盤とし、その上でコード編集モデル「Fast Apply」（ファインチューニング済みLlama-3-70B、Fireworks AI提携）と、自社モデル「Composer」を組み合わせている。Composer 2.5の公式ブログによれば、このモデルはオープンソースのチェックポイントであるMoonshotのKimi K2.5の上に構築されており、公式のモデル一覧にはAnthropic・OpenAI・Googleのモデルも並ぶ。[Lovable](/ja/articles/lovable)の記事によれば、LovableはSupabaseのデータベース基盤に接続する仕組みを提供しつつ、2025年9月には組み込みバックエンド「Lovable Cloud & AI」（データ永続化・認証を含む）を自社リリースしている。Lovable公式ドキュメントによれば、この組み込みバックエンドはSupabaseのオープンソース基盤を利用している。Anthropic公式の導入事例によれば、Lovableのエージェントは Claude のモデル群の上で動いている。
:::

:::pull
Cursorはエディタを借りて、モデルを作り込んだ。Lovableはバックエンドを借りて、クラウドを作り込んだ。同じ「借りて作る」戦略でも、どの層を選ぶかで会社の個性が決まる。
:::

Cursorが内製化したのは「知能」の層だ。エディタというUIはVS Codeという枯れたOSSに委ね、その代わりコード編集の精度と速度を左右するモデル層に自社の差別化を集中させている。Lovableが内製化したのは「土台」の層だ。アプリを生成するAIモデル自体はAnthropicのClaudeに委ねている一方、生成したアプリが実際に動くためのデータベース・認証というバックエンド基盤を自社で持とうとしている。

:::guess
この選択の違いは、2社が「AIがコードを書く」という同じ現象の、異なる部分に価値の重心を置いているためだと考えられる。Cursorのユーザーはすでにコードを書ける開発者で、彼らが評価するのは編集の精度・速度そのものだから、モデル層の内製化が直接の差別化になる。Lovableのユーザーは会話だけでアプリを作りたい非エンジニアも含まれ、彼らにとっての価値は「動くものが出てくること」そのものであり、モデルの精妙さよりも生成後のアプリが安定して動くバックエンドの信頼性が体験を左右する。同じ「AI開発者ツール」というカテゴリの中でも、想定する利用者の技術レベルが、どの層を内製化するべきかを規定していると推測される。なお、Composerはオープンソースのチェックポイントの上に、Lovable CloudはSupabaseのオープンソース基盤の上にあるため、どちらの内製化も、ゼロから作るというより借りた土台を自社の製品へ仕立て直す形に近いとみられる。
:::

訂正（2026年9月28日）。初版では、2社の技術構成を機械比較すると共有技術はゼロだと書いていたが、誤りだった。Cursorの記事のtechStackにサードパーティモデルの提供元が、Lovableの記事のtechStackに生成AIモデルの提供元が入っていなかったためで、両方を一次情報で確認して追加した結果、機械比較はAnthropicを共有技術として返す。あわせて、Lovableが使うAIモデルを推測として書いていた箇所を、Anthropic公式の導入事例にもとづく記述へ改め、ComposerとLovable Cloudがそれぞれオープンソースの土台の上にあることを加えた。

## 評価額が5ヶ月で3倍、という同じリズム

内製化の対象は違うのに、資金調達の速度は奇妙なほど似ている。

:::fact
[Cursor](/ja/articles/cursor)の記事によれば、Cursorの評価額はSeries C（2025年6月・99億ドル）からSeries D（2025年11月・293億ドル）へ、約5ヶ月で約3倍になった。[Lovable](/ja/articles/lovable)の記事によれば、Lovableの評価額はSeries A（2025年7月・18億ドル、ローンチから8ヶ月・ARR1億ドル到達と同時期）からSeries B（2025年12月・66億ドル）へ、約5ヶ月で約3.7倍になった。その後、Lovableは2026年8月12日のSeries Cで評価額133億ドルになり、Series Bから約8ヶ月で約2倍になった。Cursorは2026年8月14日にSpaceXによる買収が完了し、SEC提出書類によれば株式価値は600億ドルと算定された。Series Dの評価額から約9ヶ月で約2倍にあたる。
:::

:::guess
2社が独立に同じような速度で評価額を伸ばしていることは、AIコーディング・AI開発ツールという領域全体に、投資家が同じ時間軸で資本を投じる合意ができつつあることを示していると考えられる。Cursorの記事によれば、Series DにはNVIDIAとGoogleという計算基盤の主要プレイヤー自身が新規投資家として参加しており、モデルを動かす計算資源の供給者が、その計算資源を消費するツール企業の株主にもなるという構造が生まれている。Lovableの公式発表によれば、2025年12月のSeries BにもNVIDIAのNVenturesが参加し、Googleの成長投資部門CapitalGが共同でリードしており、同じ構図はLovableにも現れているとみられる。2025年の「5ヶ月で約3倍」に続いて、2026年は2社とも8〜9ヶ月で約2倍という近い歩調になったが、Cursorは買収、Lovableは資金調達と出口の形は分かれており、この歩調が今後も続くかは分からない。
:::

訂正（2026年9月28日）。初版では、計算基盤の供給者が株主になる構図がLovableにも現れるかは不明だと書いていたが、誤りだった。Lovableの公式発表によれば、2025年12月のSeries BにはNVIDIAのNVenturesと、Googleの成長投資部門CapitalGが参加している。

エディタを借りてモデルを作り込んだCursorと、バックエンドを借りてクラウドを作り込んだLovable。内製化した層は違っても、評価額が数ヶ月で数倍になるという成長のリズムは驚くほど重なっている。2026年8月には、CursorがSpaceXの完全子会社になり、Lovableは独立したまま評価額133億ドルで資金を調達した。2社を並べて解剖すると見えてくるのは、「AIにコードを書かせる」という同じ市場が、想定する利用者の技術レベルに応じて複数の勝ちパターンを同時に許容しながら、資本市場の側は両方に同じ速度で賭けているという構図だ。
