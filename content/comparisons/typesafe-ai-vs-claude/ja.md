---
title: "238倍安いと言う側が、答え合わせに相手を使う — TypeSafe AIのJevとClaudeは、競合というより別の部品だった"
description: "文章を書かない判断専用モデルJevを出したTypeSafe AIは、トップページで「Claude Fable 5.1より入力が238倍安い」と書く。その同じClaude Fable 5.1を、自社の評価では「正解」の基準に使っている。料金表の比べ方、使える範囲、試せるかどうか、公開している情報の種類——2つの解剖記事を重ねると、汎用の推論モデルと狭く速い判断モデルが、置き換えではなく組み合わせの関係にあることが見えてくる。"
lead: "TypeSafe AIのトップページは、Jevの入力単価が「Claude Fable 5.1の238分の1」だと書く。ところが同社の評価サイトを開くと、そのClaude Fable 5.1の答えが「正解」の基準として使われている。安さを比べる相手と、正しさを教わる相手が同じモデルだ。この一見ねじれた関係を、2つの解剖記事と両社の公式ページから読み解く。"
slugA: "typesafe-ai"
slugB: "claude"
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "TypeSafe AI公式: トップページ（238倍・42ドルの表示）"
    url: "https://typesafe.ai/"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: Models（料金・文脈長・入力の種類）"
    url: "https://docs.typesafe.ai/models"
    accessedAt: "2026-10-01"
  - label: "Claude Platform公式ドキュメント: Pricing（モデル別の入力・出力単価）"
    url: "https://platform.claude.com/docs/en/about-claude/pricing"
    accessedAt: "2026-10-02"
  - label: "TypeSafe AI公式: Workflow evals（基準ラベルの作り方）"
    url: "https://evals.typesafe.ai/"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ブログ: Introducing System One Models & Jev（2026-09-15）"
    url: "https://typesafe.ai/blog/introducing-system-one-models-and-jev"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: Jev with coding agents"
    url: "https://docs.typesafe.ai/introduction/coding-agents"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: Jev 1.13 jaggedness"
    url: "https://docs.typesafe.ai/model-jaggedness/jev-1.13"
    accessedAt: "2026-10-01"
  - label: "TypeSafe AI公式ドキュメント: System One（確信度が低いときの回し先）"
    url: "https://docs.typesafe.ai/concepts/system-one"
    accessedAt: "2026-10-01"
---

[TypeSafe AI](/ja/articles/typesafe-ai)のJevと[Claude](/ja/articles/claude)は、どちらも「APIで呼べるAIモデル」だ。だが、片方は文章もコードも書き、もう片方は選択肢と確率しか返さない。会社の大きさも、公開している情報の種類も大きく違う。それでもこの2つを並べる意味があるのは、TypeSafe AI自身が、比べる相手としてClaudeの名前を挙げているからだ。

## 「238倍」は、料金表のどの行を比べたか

TypeSafe AIのトップページは、Jevの入力単価を「Claude Fable 5.1より238倍低い」と書く。これは同社の主張で、計算の元になる数字は両社の公式の料金表にある。

:::fact
TypeSafe AIの公式ドキュメントによれば、Jev 1.13の料金は入力100万トークンあたり0.042ドル（10億トークンあたり42ドル）で、出力は無料。Anthropicの公式の料金表（2026年10月1日時点）では、Claude Fable 5.1の入力は100万トークンあたり10ドル、出力は50ドル。10ドルを0.042ドルで割ると約238になる。同じ料金表には、Claude Opus 5.5（入力4ドル・出力20ドル）、Claude Sonnet 5.5（入力2ドル・出力10ドル）、Claude Haiku 4.5（入力1ドル・出力5ドル）も載っている。
:::

238倍という数字は、Claudeの料金表の先頭に並ぶ現行4モデルの中で、入力が最も高い行と比べたものだ。同じ計算を当サイトで他の行に当てはめると、Opus 5.5とは約95倍、Haiku 4.5とは約24倍になる（いずれも各モデルの入力単価を0.042ドルで割った当サイトの計算）。料金表の「その他のモデル」には旧モデルも載っており、入力15ドルのClaude Opus 4.1と比べれば約357倍、0.80ドルのClaude Haiku 3.5と比べれば約19倍になる。どの行と比べても桁が違うことは変わらないが、倍率は相手の選び方で10倍動く。

:::pull
238倍は、現行4モデルのうち入力がいちばん高い行と比べた数字だ。いちばん安いHaiku 4.5の行と比べると、約24倍になる。
:::

もう1つ、比べているのは入力だけだ。Claudeは出力に入力の5倍の単価が付く。Jevは出力が無料だが、そもそも文章を出力しない。[TypeSafe AI](/ja/articles/typesafe-ai)の記事で見たとおり、Jevが返すのは決めた選択肢のどれか・点数・確率だけで、Claudeが返すような説明文やコードは最初から料金の対象に存在しない。

:::guess
入力単価だけを見せる比べ方は、Jevに有利な見せ方である一方、的外れとも言い切れない。仕分けや確認のような用途では、長い材料を読ませて短い答えをもらうので、費用の大半は入力側に寄るとみられる。ただし、同じ仕事をClaudeにさせるなら、Fable 5.1ではなくHaiku 4.5のような安いモデルを選ぶ利用者も多いと考えられ、その場合の差は238倍よりずっと小さくなると推測される。精度まで含めてどちらが得かは、料金表からは分からない。
:::

## 安さを比べる相手が、正しさの基準でもある

TypeSafe AIは、速さと安さの主張の根拠として「ワークフロー評価」を公開している。その採点の仕方に、Claudeが登場する。

:::fact
TypeSafe AIの評価サイトによれば、この評価は「コードで書いた業務の流れは正しい」と仮定し、各質問への「正解」を、GPT-6 AstraとClaude Fable 5.1（どちらも推論を高く設定）の答えの平均で作る。ほかのモデルは、提供元の既定の推論設定で同じ質問に答え、この基準とどれだけ一致するかで測られる。公式ブログは、この作り方がOpenAIとAnthropicのモデルに有利に働き、自社モデルの相対的な成績はおそらく低めに出ている、と注記している。
:::

つまり、この評価でJevが目指しているのは「Claude Fable 5.1より賢いこと」ではない。「Claude Fable 5.1とGPT-6 Astraが出す答えに、はるかに安く速く近づくこと」だ。評価の設計そのものが、大きな汎用モデルを先生の位置に置いている。

:::fact
TypeSafe AIの公式ドキュメントは、JevがClaudeの代わりにならない場面もはっきり書いている。コーディングエージェント向けのページは、JevはClaude CodeやCursorの裏にあるLLMの置き換えではないと述べる。苦手を並べたページは、何段も推論が要る問い、計算、日付の比較、文章の生成は不得意だとし、文章が必要なら「ほかのモデルがある」と書く。System Oneの説明ページは、確信度が低い答えを人か推論型のモデルに回す作りを勧めている。同社は、Claude CodeなどのエージェントにJevのAPIの使い方を教える「agent skill」も公開している。
:::

:::guess
この関係は、競合よりも分業に近いとみられる。[Claude](/ja/articles/claude)の記事で見たように、Anthropicは文章・コード・エージェントという「人が成果物を受け取る」方向に製品を広げている。Jevが狙うのは、その手前や後ろにある、仕分け・点数付け・確認といった「プログラムが結果を受け取る」部分だ。Jevで大量の判断を安く済ませ、確信度の低いものだけをClaudeのようなモデルに回す、という組み合わせが、TypeSafe AI自身の勧める使い方から読み取れる。Jevが広がっても、Claudeの呼び出しが減るとは限らず、むしろ難しい判断だけが選ばれて届く形になると推測される。
:::

## 試せる範囲と、公開している情報が逆を向く

2社は、外から確かめられるものの種類も違う。

:::fact
[Claude](/ja/articles/claude)の記事によれば、Claudeは無料プランから誰でも使え、個人・チーム・企業向けの5段階のプランとAPIの従量課金がある。Anthropicは公益企業（PBC）で、従業員はおよそ2,500人、2026年5月時点の評価額は9,650億ドルと報じられている。一方、[TypeSafe AI](/ja/articles/typesafe-ai)の記事によれば、Jevは2026年9月15日に早期アクセスで公開され、順番待ちから招待される。入力はテキストのみで、文脈長は64kトークン。投資家の名前・調達額・従業員数・モデルの構造は公開されていない。当サイトも、Jevを実際には試せていない。
:::

:::fact
TypeSafe AIが公開しているのは、別の種類の情報だ。[TypeSafe AI](/ja/articles/typesafe-ai)の記事で確認した評価の実行コードと705件の事例、モデルの苦手を9項目並べたページ、そして自社の数字への但し書きである。公式ブログは、193.6倍・444.6倍という数字が実際の利用で得られる改善の上のほうになる見込みであること、評価の業務を自社のチームが作ったこと、価格が補助されていないとは証明できないことを、自分で書いている。
:::

:::guess
会社の規模や資金の情報はAnthropicのほうが多く、モデルの限界や評価の手順の情報は、少なくともJevという1つのモデルについてはTypeSafe AIのほうが細かい、というのが当サイトの見立てだ。公開から半月の会社にとって、資金力や顧客の名前で信用を得るのは難しい。代わりに「自分で確かめられる材料」を出すことで、開発者の信頼を得ようとしているとみられる。ただし、確かめられるのは招待を受けた人だけで、その数字が広く再現されるかどうかは、まだ分からない。
:::

238倍安いと言う側が、答え合わせに相手を使っている。この関係は矛盾ではなく、2つのモデルが別の部品であることの表れだ。[Claude](/ja/articles/claude)は考えて書く。[TypeSafe AI](/ja/articles/typesafe-ai)のJevは、書かずに決める。どちらが勝つかよりも、1つのシステムの中でどこに線を引くかが、これからの開発者の問いになる。
