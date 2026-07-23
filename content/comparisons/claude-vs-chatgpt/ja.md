---
title: "利用者9億人と、評価額の逆転 — ClaudeとChatGPTが同じ場所に別々の道で辿り着くまで"
description: "週間アクティブユーザー9億人のChatGPTと、その5分の1にも届かない規模感のClaude。それでも2026年春、評価額はAnthropicがOpenAIを上回った。非営利発の会社と生まれつきのPBCが同じガバナンス形状に収束し、機械比較ではゼロなのに実際には同じ標準の上に乗っている——2社の解剖を重ね合わせる。"
lead: "ChatGPTは2026年2月時点で週間アクティブユーザー9億人。Claudeにはこの規模の数字を公式に見つけられなかった。それでも同年春、評価額はAnthropicの9,650億ドルがOpenAIの8,520億ドルを上回った。利用者数で圧倒的に負けている側が、株式市場の期待では上回っている——この逆転が起きた場所を、2社の解剖記事を重ねて探る。"
slugA: "claude"
slugB: "chatgpt"
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
sources:
  - label: "Anthropic公式: Company（PBCとしての使命・ガバナンス）"
    url: "https://www.anthropic.com/company"
    accessedAt: "2026-07-23"
  - label: "Anthropic公式: Model Context Protocol発表（2024-11-25・オープン標準化）"
    url: "https://www.anthropic.com/news/model-context-protocol"
    accessedAt: "2026-07-23"
  - label: "OpenAI Developers公式: トップページ（Apps SDKがMCP準拠と明記）"
    url: "https://developers.openai.com"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: Anthropic（PBC設立史・評価額推移・IPO報道の集約）"
    url: "https://en.wikipedia.org/wiki/Anthropic"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: OpenAI（2025年組織再編・出資構造・評価額推移の集約）"
    url: "https://en.wikipedia.org/wiki/OpenAI"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: ChatGPT（週間アクティブユーザー数推移の集約）"
    url: "https://en.wikipedia.org/wiki/ChatGPT"
    accessedAt: "2026-07-23"
---

[Claude](/ja/articles/claude)と[ChatGPT](/ja/articles/chatgpt)は、同じ「対話型AI」という市場で最も直接的に競合する2社だ。だが解剖してみると、会社としての出自もガバナンスの来歴も正反対で、機械比較したtechStackの重なりはゼロ。それでも本文を読み比べると、片方が作った標準の上にもう片方が乗っているという、想像以上に近い関係が見えてくる。

## 出自が逆なのに、同じガバナンス形状に着地した

Anthropicは2021年、公益企業（PBC）として生まれた。安全性のミッションを定款に書き込んだ状態からのスタートだ。OpenAIは2015年、純粋な非営利研究所として始まり、2019年に「利益上限付き営利企業」という変則構造を経て、2025年10月28日にようやく非営利の「OpenAI Foundation」（26%保有）と公益企業の「OpenAI Group PBC」からなる二層構造に再編された。

:::fact
Anthropic公式サイトによれば、同社は設立当初からPublic Benefit Corporationとして「先進的なAIを人類の長期的利益のために責任をもって開発・維持すること」を定款上の目的に掲げている。一方Wikipediaの集約情報によれば、OpenAIは2015年の非営利設立から2019年の capped-profit 移行を経て、2025年10月28日に非営利のOpenAI Foundation（26%保有）・Microsoft（27%）・従業員/投資家（47%）という持分構造の「OpenAI Group PBC」へ再編を完了した。
:::

:::pull
Anthropicは最初からPBCだった。OpenAIは10年かけて、非営利という出自をほどきながら似た形に近づいた。ゴールは同じでも、そこへ至る道のりの長さがまるで違う。
:::

出発点が違う2社が、10年越しでほぼ同じ器（非営利・準非営利の少数持分＋PBC）に着地したという事実は、対話型AIという事業を大規模資本で回すには、この種のガバナンス装置が構造的に必要とされているらしいことを示唆している。

:::guess
Anthropicが最初からPBCを選べたのは、OpenAIの内部対立（非営利ミッションと営利事業の衝突）を間近で見た創業者たちが、同じ轍を踏まないよう設計段階で先回りしたためとみられる。対してOpenAIは、非営利という創業時の理想と、フロンティアモデル開発に必要な桁外れの資本需要との間で長く綱引きを続け、2025年の再編でようやく妥協点を制度化した。両社が同じ形に収束したことは、正解が1つしかないというより、「安全性・公益を掲げながら巨大資本を集める」という同じ制約条件を解いた結果、似た解にたどり着いたと考えるのが自然だろう。
:::

## 機械比較はゼロ、それでも同じ標準の上に立っている

techStackを機械照合すると、共有される技術トークンは**1つもない**。AnthropicはAWS Trainium・Google Cloud TPU、OpenAIはMicrosoft Azure・Oracle——計算基盤の調達先からしてまるで重ならない。

:::fact
[Claude](/ja/articles/claude)の記事によれば、Anthropicは2024年11月、AIとデータソースを安全に接続するオープン標準「Model Context Protocol（MCP）」を無償公開した。[ChatGPT](/ja/articles/chatgpt)の記事によれば、OpenAI公式の開発者向けサイトは、ChatGPTをアプリで拡張する「Apps SDK」がこのMCPに準拠すると明記している。
:::

この一致は、当サイトの機械比較（techOverlap）には表れない。ChatGPT側のtechStack記載が「Apps SDK（Model Context Protocol準拠）」という1つのエントリで、MCPが括弧内の注記として扱われているため、技術トークンとしては"Apps SDK"だけが抽出され、"Model Context Protocol"という共有トークンには変換されない。機械比較の粒度の限界が、[Figma vs Canva](/ja/compare/figma-vs-canva)の解剖記事で見たのと同じ形で、ここでも表面化している。

:::guess
競合が策定したオープン標準を自社の拡張機構の土台に採用するという判断は、エージェント連携という新しい規格争いにおいて、独自規格で囲い込むより普及した標準に乗るほうが得策だという、OpenAI側の実利的な判断を示していると考えられる。一方のAnthropicにとって、自社が作った標準を最大のライバルが採用したという事実は、収益源にはならないものの、技術的な主導権の証明として機能しているとみられる。機械比較がゼロを返す裏で、実際には両社ともこの1点でだけ足並みを揃えているという構図は、表層の対抗関係と、基盤層での協調が同時に存在しうることを示している。
:::

## 利用者9億人と、評価額の逆転

対話型AIとしての普及規模は、ChatGPTが圧倒している。それでも2026年春の評価額は、Anthropicが上回った。

:::fact
[ChatGPT](/ja/articles/chatgpt)の記事によれば、週間アクティブユーザーは2026年2月時点で9億人と報じられている。[Claude](/ja/articles/claude)の記事執筆時点では、これに相当する消費者規模の数字はAnthropic公式・Wikipediaいずれからも確認できなかった。一方で評価額は、Anthropicが2026年5月時点で9,650億ドル（Wikipedia集約情報）、OpenAIが2026年4月時点で8,520億ドル（同）と報じられており、ほぼ同時期の比較でAnthropicがOpenAIを上回っている。
:::

:::pull
ChatGPTの利用者は、Claudeの何倍もいる。それでも2026年春、株式市場が高く値付けしたのはAnthropicのほうだった。規模と評価は、必ずしも同じ方向を向かない。
:::

:::guess
この逆転は、投資家がChatGPTの「消費者としての普及」よりも、Anthropicの「開発者・企業向けの浸透」を高く評価している可能性を示唆していると考えられる。[Claude](/ja/articles/claude)の記事で見たように、AnthropicはClaude Code等の開発者向け製品への投資を積み重ねており、消費者向けの利用者数を前面に出さない発信スタイルを取っている。対してOpenAIは週間アクティブユーザー数を主要な指標として公表し続けている。評価額の逆転は、両社が同じ「対話型AI企業」というカテゴリの中で、実際には異なる勝ち筋——消費者の大規模普及か、開発者・企業への深い浸透か——を追いかけていることの現れだと推測される。ただし評価額の差はわずかで、資金調達のタイミングのずれだけで説明できる範囲でもあり、この逆転が構造的な傾向なのか一時的なブレなのかは、今後の資金調達ラウンドが示すことになるだろう。
:::

出自の違う2社が同じガバナンス形状に着地し、機械比較ではゼロなのに同じオープン標準の上に立ち、利用者数では圧倒的に差がついているのに評価額では逆転している。[Claude](/ja/articles/claude)と[ChatGPT](/ja/articles/chatgpt)を重ねて解剖すると見えてくるのは、対話型AIという同じ市場で戦う2社が、競合であると同時に、気づかぬところで同じ土台を共有しているという構図だ。
