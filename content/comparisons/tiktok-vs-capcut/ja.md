---
title: "同じ親を持つ2つのアプリが、正反対の勝ち方を選んだ理由 — TikTokとCapCutの兄弟比較"
description: "ともにByteDance製のTikTokとCapCut。機械比較したtechStackの重なりはゼロ——しかも、この2社が最も明白に共有しているはずの「親会社」自体が、両記事とも括弧内の注記としてしか書かれていないため、機械には見えない。配信網を囲い込むTikTokと、編集ツールを競合の配信網にまで無料で配るCapCut、同じ屋根の下の正反対の戦略を解剖する。"
lead: "TikTokとCapCutは、同じ会社が作った2つのアプリだ。それなのに機械比較したtechStackの重なりはゼロ。もっと言えば、2社が最も確実に共有しているはずの「ByteDance」という親会社の名前さえ、両記事とも括弧の中の注記としてしか書いていないため、この比較ツールには見えていない。ライバル同士ではなく兄弟同士——初めての「競合ではない比較解剖」で、同じ屋根の下の正反対の戦略を探る。"
slugA: "tiktok"
slugB: "capcut"
publishedAt: "2026-07-23"
updatedAt: "2026-07-23"
lastVerified: "2026-07-23"
sources:
  - label: "ByteDance公式: 会社概要（TikTok・CapCut・TikTok Shopを含むプロダクト一覧）"
    url: "https://www.bytedance.com/en/"
    accessedAt: "2026-07-23"
  - label: "TikTok USDS Joint Venture公式サイト（米国事業専用合弁会社の役割）"
    url: "https://usdsjv.tiktok.com/"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: TikTok（2025年米国再編の枠組みと出資比率の集約）"
    url: "https://en.wikipedia.org/wiki/TikTok"
    accessedAt: "2026-07-23"
  - label: "Wikipedia: CapCut（国際版展開史・2025年1月の米国関連措置の集約）"
    url: "https://en.wikipedia.org/wiki/CapCut"
    accessedAt: "2026-07-23"
---

[TikTok](/ja/articles/tiktok)と[CapCut](/ja/articles/capcut)は、これまでの比較解剖のようなライバル同士ではない。同じByteDanceが作った2つのアプリだ。それなのに機械比較したtechStackの重なりはゼロ。しかも2社が最も確実に共有しているはずの「親会社」の名前自体、機械には見えていない。

## 機械比較が見落とすもの——親会社そのもの

:::fact
[TikTok](/ja/articles/tiktok)の記事のtechStackは「TikTok Ltd.（ByteDance子会社）」、[CapCut](/ja/articles/capcut)の記事のtechStackは「CapCut（ByteDance子会社）」と記載している。ByteDance公式サイトのプロダクト一覧には、TikTok・CapCut・TikTok Shopがいずれも自社製品として並んで掲載されている。
:::

両記事とも「ByteDance」は括弧内の注記として書かれており、当サイトの機械比較（techOverlap）は括弧内の文字列を技術トークンとして扱わない。結果、TikTokとCapCutという2つのアプリが最も明白に共有しているはずの「同じ親を持つ」という事実は、機械比較の結果には一切現れない。共有技術の欄は空のままだ。

:::pull
2つのアプリを比べるツールが、その2つが同じ会社の子であることにさえ気づかない。比較の網の目より細かいところに、最も大きな共通点が隠れている。
:::

:::guess
この見落としは、当サイトのtechStack記載が「その技術・製品が何であるか」を主語に置き、「誰が作ったか」を副次的な注記として扱う設計になっているために起きているとみられる。[Claude vs ChatGPT](/ja/compare/claude-vs-chatgpt)の解剖記事でも、OpenAIのApps SDKがAnthropic製のMCPに準拠しているという事実が同じ理由で機械比較から漏れていた。今回のケースはそれよりさらに直接的で、漏れているのは技術的な依存関係ではなく、資本的な親子関係そのものだ。機械比較は「何を使っているか」の重なりを見るのには向いているが、「誰が作ったか」の重なりを見るのには向いていない、という比較ツール自体の性質を示している。
:::

## 囲い込みと無料配布、正反対の勝ち方

同じByteDance傘下でありながら、TikTokとCapCutが選んだ成長戦略は正反対だ。

:::fact
[TikTok](/ja/articles/tiktok)の記事によれば、2026年1月22日に米国事業だけを運営する新会社「TikTok USDS Joint Venture LLC」が稼働を始めた。出資比率はOracle・MGX Fund Management・Silver Lakeがそれぞれ15%、ByteDanceは19.9%に縮小しつつ、同じFor Youフィード・同じUIという製品の連続性は維持されている。一方[CapCut](/ja/articles/capcut)の記事によれば、CapCutで作った動画の書き出し先はTikTokに限定されず、Instagram ReelsやYouTube Shortsなど、どのプラットフォーム向けにも自由に使える設計になっている。
:::

TikTokは、配信網という最も価値の高い資産を守るために、出資比率を大きく譲ってでも米国事業を存続させる道を選んだ。CapCutは逆に、自社の編集ツールが競合の配信網を太らせる可能性を許容してでも、ツールとしての普及そのものを優先している。

:::guess
この対比は、2つのアプリがByteDanceの事業ポートフォリオの中で異なる役割を担っていることを示していると考えられる。TikTokにとって配信網（レコメンドフィード・利用者の滞在時間）こそが収益の源泉であり、それを守るためなら出資比率という経営権の一部を手放してでも事業を継続する価値がある。CapCutにとって収益源は編集ツールの普及そのものではなく、[CapCutの記事](/ja/articles/capcut)で見たように、B2B向け派生サービスPippitへの誘導や、ツール層での支配的地位の確立にある。同じ会社が、資産の性質に応じて「守る」と「配る」という正反対の戦略を使い分けているという構図だ。
:::

## 同じ規制リスクを、別の理由で共有する

戦略は正反対でも、規制環境という外部要因は同じ親を持つ以上、逃れられない。

:::fact
[CapCut](/ja/articles/capcut)の記事によれば、2025年1月、米国の外国敵対者管理アプリ法（Foreign Adversary Controlled Applications Act）に基づき、CapCutはTikTokと同時に一時的なサービス停止措置を受けた。両アプリとも同月中に復旧している。[TikTok](/ja/articles/tiktok)の記事によれば、TikTokはその後2026年1月に米国事業専用の合弁会社という形で恒久的な対応を取ったのに対し、CapCutについては同種の合弁会社化は今回確認できなかった。
:::

:::guess
2つのアプリが同時に停止措置を受けたという事実は、ByteDanceという資本構造そのものが規制リスクの単位になっていることを示している。TikTokは配信網という守るべき資産の大きさゆえに、恒久的な組織再編という重い対応を取ったとみられるが、CapCutにはそこまでの対応が及んでいない。編集ツールという性質上、CapCutの資産価値はTikTokほど「米国内での運営継続」に依存していない——最悪の場合、他社の配信網向けに動画を作るツールとしてであれば生き残れるという、無料配布戦略が図らずも規制リスクへの耐性にもなっている可能性がある。
:::

同じ親を持つ2つのアプリが、機械比較ではゼロの重なりしか見せず、しかもその親自体が比較ツールには見えていない。それでも並べて読むと、配信網を守るために経営権を譲るTikTokと、配信網に依存しないことで規制リスクを軽くしのぐCapCutという、資産の性質に応じた2つの生存戦略が浮かび上がる。ByteDanceは、1つの資本の下で、囲い込みと無料配布という矛盾した勝ち方を同時に走らせている。
