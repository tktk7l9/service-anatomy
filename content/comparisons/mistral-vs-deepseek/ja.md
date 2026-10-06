---
title: "重みはどちらも配る、値札の向きが逆 — Mistralは動かす場所を、DeepSeekはキャッシュと時間帯を売る"
description: "パリのMistral AIと杭州のDeepSeekは、どちらも米国の外にあり、どちらも主力モデルの重みを寛容なライセンスで公開している。違うのは課金の向きだ。Mistralは地域指定の推論（定価の1.1倍）やEnterprise APIs（定価の75%増し）、自社の計算基盤、月額のVibeを売る。DeepSeekはキャッシュヒットとオフピークで単価を下げ、アプリは無料とする。ライセンスの条文、API定価、個人向けプラン、データの処理場所と準拠法、資本を、両社の一次資料で並べた。"
lead: "Mistral Medium 3.5のライセンスには「月間売上が2,000万ドルを超える会社は使えない」という条件があり、DeepSeek-V4.1-Flashのライセンスは無条件のMITだ。API料金表では、Mistralは地域を指定すると1.1倍になり、DeepSeekは時間帯を外すと半額になる。重みを配る2つの研究所が、何に値段を付けているのか。2026年10月2日に両社の公式ページと規約を読み直して並べる。"
slugA: "mistral"
slugB: "deepseek"
publishedAt: "2026-10-02"
updatedAt: "2026-10-06"
lastVerified: "2026-10-02"
sources:
  - label: "Mistral公式: Models（モデル一覧とライセンス表示）"
    url: "https://mistral.ai/models/"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: mistralai/Mistral-Medium-3.5-128B のLICENSE（Modified MIT Licenseの全文）"
    url: "https://huggingface.co/mistralai/Mistral-Medium-3.5-128B/blob/main/LICENSE"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: mistralai/Mistral-Large-3-675B-Instruct-2512（Apache 2.0）"
    url: "https://huggingface.co/mistralai/Mistral-Large-3-675B-Instruct-2512"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: mistralai/Mistral-Small-4-119B-2603（Apache 2.0）"
    url: "https://huggingface.co/mistralai/Mistral-Small-4-119B-2603"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: API pricing（モデル別単価・Batch・Regional inference +10%・Cached input −90%・Enterprise APIs）"
    url: "https://mistral.ai/pricing/api/"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: Pricing（Free / Pro / Team / EnterpriseとFAQ）"
    url: "https://mistral.ai/pricing/"
    accessedAt: "2026-10-02"
  - label: "Mistral公式ドキュメント: Regional inference（3つのエンドポイント・1.1倍の課金・制限事項）"
    url: "https://docs.mistral.ai/inference/regional-inference"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: Regional Endpoints・Priority Tier・European Compute Unitsの発表（2026-08-11）"
    url: "https://mistral.ai/news/regional-inference-open-models-new-compute/"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: AI Cloud / Mistral Compute（GPU世代・EU域内の容量目標）"
    url: "https://mistral.ai/cloud/compute/"
    accessedAt: "2026-10-06"
  - label: "Mistral公式: Privacy Policy（2026年9月3日発効・運営法人・保持期間・EU域外移転）"
    url: "https://legal.mistral.ai/terms/privacy-policy/"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: ROW - Terms of Service（2026年9月25日発効・EEA以外の消費者向け・準拠法）"
    url: "https://legal.mistral.ai/terms/row-consumer-terms"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: EU - Terms of Service（2026年8月7日発効・EEAの消費者向け・準拠法）"
    url: "https://legal.mistral.ai/terms/eu-consumers-terms-of-service"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: Commercial Terms of Service（2026年9月25日発効・学習利用・準拠法）"
    url: "https://legal.mistral.ai/terms/commercial-terms-of-service"
    accessedAt: "2026-10-02"
  - label: "Mistral公式ドキュメント: Zero data retention"
    url: "https://docs.mistral.ai/admin/monitor-comply/zero-data-retention"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: シリーズD発表（2026-09-08・30億ユーロ・調達後評価額210億ユーロ超）"
    url: "https://mistral.ai/news/mistral-makes-sovereign-open-weight-ai-to-frontier/"
    accessedAt: "2026-10-02"
  - label: "Mistral公式: シリーズC発表（2025-09-09・17億ユーロ・調達後評価額117億ユーロ）"
    url: "https://mistral.ai/news/mistral-ai-raises-1-7-b-to-accelerate-technological-progress-with-ai/"
    accessedAt: "2026-10-02"
  - label: "DeepSeek公式APIドキュメント: Models & Pricing（モデル・料金・ピーク/オフピークの定義）"
    url: "https://api-docs.deepseek.com/quick_start/pricing"
    accessedAt: "2026-10-02"
  - label: "DeepSeek公式APIドキュメント: コンテキストキャッシュの解説"
    url: "https://api-docs.deepseek.com/guides/kv_cache"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: deepseek-ai/DeepSeek-V4.1-Flash（モデルカード・MITライセンス）"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
    accessedAt: "2026-10-02"
  - label: "Hugging Face: deepseek-ai/DeepSeek-V4-Pro-0813（MITライセンス）"
    url: "https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro-0813"
    accessedAt: "2026-10-02"
  - label: "DeepSeek公式ニュース: Introducing DeepSeek-V4.1-Flash（2026-09-10）"
    url: "https://www.deepseek.com/en/news/deepseek-v4-1-flash/"
    accessedAt: "2026-10-02"
  - label: "DeepSeek公式: アプリのダウンロードページ"
    url: "https://www.deepseek.com/en/download/"
    accessedAt: "2026-10-02"
  - label: "DeepSeekプライバシーポリシー（日本語版・最終更新2026年2月10日）"
    url: "https://cdn.deepseek.com/policies/ja-JP/deepseek-privacy-policy.html"
    accessedAt: "2026-10-02"
  - label: "DeepSeek利用規約（日本語版・最終更新2025年1月20日）"
    url: "https://cdn.deepseek.com/policies/ja-JP/deepseek-terms-of-use.html"
    accessedAt: "2026-10-02"
  - label: "DeepSeek Open Platform Terms of Service（2026年4月29日発効）"
    url: "https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html"
    accessedAt: "2026-10-02"
  - label: "個人情報保護委員会: DeepSeekに関する情報提供（令和7年2月3日・3月5日更新）"
    url: "https://www.ppc.go.jp/news/careful_information/250203_alert_deepseek/"
    accessedAt: "2026-10-02"
  - label: "Wikipedia: DeepSeek（二次情報。設立経緯・出資者・資金調達報道の集約）"
    url: "https://en.wikipedia.org/wiki/DeepSeek"
    accessedAt: "2026-10-02"
---

[Mistral AI](/ja/articles/mistral)と[DeepSeek](/ja/articles/deepseek)には共通点が2つある。運営法人が米国の外にあること（Mistralはパリ、DeepSeekは杭州）。そして、主力モデルの重みを誰でもダウンロードできる形で公開していることだ。重みを配ってしまう会社は、何を売るのか。2本の解剖記事を重ねると、答えが逆を向いている。

この記事は、両社の公式ページ・規約・モデルカードを2026年10月2日に読み直してまとめた。当サイトはどちらのモデルも実際には動かしておらず、性能の比較は扱わない。どちらが優れているかの順位も付けない。

## 配っている重みと、ライセンスの条文

「オープンウェイト」と一口に言っても、ライセンスの中身は同じではない。

:::fact
Mistralの公式モデル一覧（2026年10月2日確認）は、Mistral Large 3とMistral Small 4に「Apache 2.0」、Mistral Medium 3.5に「Modified MIT」と表示している。Hugging Faceの各リポジトリのライセンス欄も、Large 3とSmall 4は apache-2.0 だった。Medium 3.5のLICENSEファイルは、MITライセンスの文面に条件を1つ足している。会社（または雇用主）の世界連結の月間売上が前月に2,000万ドルを超える場合、このライセンスの権利を行使できない。その場合はMistralに商用ライセンスを申し込むか、Mistralのホスト型サービスを使うよう案内している。この制限は派生物にも及ぶと書かれている。同じ一覧には「Premier」（OCR 4.1、Codestralなど）や「CC BY-NC 4.0」（Voxtral TTS）と表示されたモデルもある。
:::

:::fact
DeepSeekの重みはHugging Faceで公開されている（2026年10月2日確認）。DeepSeek-V4.1-FlashとDeepSeek-V4-Pro-0813は、どちらもライセンス欄が mit で、LICENSEファイルは標準のMITライセンスの文面だった。モデルカードは「このリポジトリとモデルの重みはMITライセンスで提供する」と記す。売上規模による条件は、LICENSEファイルには書かれていない。
:::

| 項目 | Mistral | DeepSeek |
| --- | --- | --- |
| 現行の主なオープンウェイト | Mistral Medium 3.5、Mistral Large 3、Mistral Small 4 | DeepSeek-V4.1-Flash、DeepSeek-V4-Pro |
| ライセンス | Medium 3.5はModified MIT、Large 3とSmall 4はApache 2.0 | どちらもMIT |
| ライセンス本文にある利用者の条件 | Medium 3.5のみ、月間売上2,000万ドル超の会社は権利を行使できない | LICENSEファイルに売上規模の条件はない |
| 重みを公開していないモデル | あり（一覧で「Premier」と表示） | 現行のAPIモデル2つは、どちらも重みを公開 |

Mistralの料金ページのFAQには、もう1つ読んでおきたい一文がある。「モデルはどこでも自前で動かせる」と答えたうえで、「オープンウェイトのモデル（例: Mistral 7B）は研究・個人利用向けにApache 2.0でライセンスされ、商用の導入にはMistralのライセンスが必要で、派生物と本番利用には別の条件がある」と続けている。Apache 2.0の条文そのものは商用利用を認めているので、このFAQの書き方と、モデル一覧のライセンス表示がどう対応するのかは、当サイトでは確認できていない。商用で使う場合は、モデルごとのLICENSEファイルを直接読むのが確実だ。

:::guess
最新の主力モデルだけに売上の上限を付けるMistralの設計は、大企業を自社のホスト型サービスや商用ライセンスへ案内する入口として働いているとみられる。小さな会社や研究者には無料で広まり、大きな会社からは対価を得る、という線の引き方だと考えられる。DeepSeekが条件のないMITで通しているのは、重みそのものから対価を得る設計ではないことの表れと推測される。ただし、どちらの会社も意図を公式には説明しておらず、別の解釈も成り立つ。
:::

## API料金表を並べる

次に、両社が自分で動かして売っているAPIの定価を並べる。単位はすべて100万トークンあたりの米ドルで、2026年10月2日に各社の料金ページに表示されていた数字だ。

| モデル（API） | 入力 | キャッシュされた入力 | 出力 | 表示されていた条件 |
| --- | --- | --- | --- | --- |
| Mistral Medium 3.5 | 1.5 | 入力トークンが90%引き（料金ページの切り替え項目の表示。FAQは「最大90%」） | 7.5 | Standardの定価。Batchは半額。Regional inferenceは+10% |
| Mistral Large 3 | 0.5 | 同上 | 1.5 | 同上 |
| Mistral Small 4 | 0.15 | 同上 | 0.6 | 同上 |
| deepseek-flash（DeepSeek-V4.1-Flash） ピーク | 0.3（キャッシュミス） | 0.006（キャッシュヒット） | 1.2 | ピークは月〜金のUTC 1:00〜4:00と6:00〜10:00（中国の祝日を除く） |
| deepseek-flash オフピーク | 0.15（キャッシュミス） | 0.003（キャッシュヒット） | 0.6 | ピーク以外のすべての時間。週末と中国の祝日は終日 |
| deepseek-v4-pro（DeepSeek-V4-Pro-0813） ピーク | 1.32（キャッシュミス） | 0.044（キャッシュヒット） | 3.96 | ピークの定義は同じ |
| deepseek-v4-pro オフピーク | 0.66（キャッシュミス） | 0.022（キャッシュヒット） | 1.98 | オフピークの定義は同じ |

:::fact
表の出どころと、表に入らなかった条件。Mistralの数字は公式のAPI pricingページから取った。同じページは、Regional inferenceを「+10%」、キャッシュされた入力トークンを「−90%」、Batchを半額と表示する。公式ドキュメントは、Regional inferenceの課金を「入力・出力・キャッシュ読み出し・キャッシュ書き込みについて定価の1.1倍」と説明している。Enterprise APIs（地域単位のデータ処理の制御、システム単位のSLA、レート上限の引き上げ、優先サポート）は「対象APIの定価の75%増し」と書かれている。DeepSeekの数字は公式のModels & Pricingページから取った。同ページの注記は「オフピークの料金はピークの半額」とし、ピークを月〜金のUTC 1:00〜4:00と6:00〜10:00（中国の祝日を除く）、それ以外をすべてオフピークと定める。キャッシュはすべての利用者に既定で有効で、前の要求と先頭部分が重なったぶんがキャッシュヒットとして数えられる、とキャッシュの解説ページにある。
:::

ここから先は当サイトの計算だ。同じ会社の同じモデルの中で、キャッシュの有無による差だけを見る。deepseek-flashのピーク時は、キャッシュヒット0.006ドル÷キャッシュミス0.3ドル＝0.02で、キャッシュに当たった入力はミス時の50分の1になる。deepseek-v4-proは0.044÷1.32≒0.033で、約30分の1だ。Mistralは、料金ページの表示どおり90%引きなら10分の1になる。Medium 3.5に当てはめると1.5×0.1＝0.15ドルだが、これは当サイトの計算で、料金ページにこの数字が表示されているわけではない。

会社をまたいだ「何倍安い」は計算しない。モデルの大きさも得意な用途も違い、同じ仕事を同じ品質でこなせるかを当サイトは確かめていないからだ。数字として言えるのは次の2点までである。Mistral Small 4の定価（入力0.15ドル・出力0.6ドル）と、deepseek-flashのオフピーク・キャッシュミスの単価（同0.15ドル・0.6ドル）は同じ数字だ。そして、キャッシュに当たった入力の単価は、表の中ではDeepSeekの行が最も小さい。

:::pull
Mistralは地域を指定すると1.1倍になる。DeepSeekは時間帯を外すと半額になる。料金表の調整つまみが、別の場所に付いている。
:::

:::guess
料金表から読み取れるのは、定価そのものの差よりも、割引と割増の掛かる向きの違いだとみられる。DeepSeekは、同じ文脈を繰り返し送る使い方と、急がない処理を混雑の少ない時間に回す使い方に、大きな値引きを付けている。[DeepSeek](/ja/articles/deepseek)の記事で見たとおり、同社はV4.1-Flashの設計の中心をキャッシュの圧縮に置いており、値引きの根拠を技術の側で説明している。Mistralは逆に、定価の上に乗る項目——地域の指定、SLA、優先枠——に値段を付けている。安さを求める利用者と、条件を求める利用者という、別の買い手を見ている料金表だと考えられる。
:::

## 個人向けの入口は、月額と無料

個人が使う入口でも、2社の形は違う。

:::fact
Mistralの料金ページ（2026年10月2日確認）は、エージェント「Vibe」のプランを4段で示す。Free、Pro（月14.99ドル、税別）、Team（1ユーザー月24.99ドル、税別）、Enterprise（問い合わせ）。FAQは、認証を受けた学生はProが月5.99ドルになると書く。Freeプランにも月10ドル分のAPIクレジットが付くと記載されている。プランの上限を超えたぶんは、API単価の従量課金で続けられる。Enterpriseの欄には、自社ホスト・プライベートクラウド・オンプレミスへの「Custom deployments」が並ぶ。
:::

:::fact
DeepSeekの公式サイトのダウンロードページ（同日確認）は、アプリを「主要なAIモデルと無料でチャットできる」と説明し、iOS版とAndroid版を案内する。同じページには、デスクトップ向けのエージェント実行環境DeepSeek Harness（macOSとWindows）も並ぶ。当サイトが確認した範囲では、公式サイトの導線に月額プランの案内はなく、料金の表示があるのはAPIの料金ページだった。無料アプリの利用上限の数字は、公式ページからは確認できなかった。
:::

:::guess
Mistralは、個人向けの月額課金と開発者向けのAPIを同じ契約の中でつなぎ、そこから企業契約へ上げていく階段を作っているとみられる。DeepSeekは、個人向けを無料の入口と位置づけ、課金をAPIの従量制に寄せていると考えられる。どちらの形が利用者に合うかは、月額で上限を買いたいのか、使ったぶんだけ払いたいのかによる。
:::

## データはどこで処理され、どの法律に従うか

2社の文書が最もはっきり違うのは、この項目だ。以下は、それぞれの会社の規約・プライバシーポリシー・公式ドキュメントに書かれている内容を、同じ項目で並べたものである。法的な評価は加えていない。

| 項目 | Mistral（同社の文書の記載） | DeepSeek（同社の文書の記載） |
| --- | --- | --- |
| 運営法人 | パリで登記されたフランスの会社（プライバシーポリシー） | 中国に登記住所を有するHangzhou DeepSeek Artificial Intelligence Co., Ltd.（プライバシーポリシー） |
| 処理・保存の場所 | APIは3つのエンドポイントがある。グローバルは推論の場所を約束しない。EUはEUとEFTA諸国の複数のデータセンター、USは米国内の複数のデータセンター。アカウント設定・APIキー・請求・利用状況の分析などは、選んだ地域の外で扱われることがある（公式ドキュメント） | 収集した情報を中華人民共和国にある安全なサーバーに保存する。居住国の外にあるサーバーに保存されることがある（プライバシーポリシー） |
| 国や地域をまたぐ移転 | EU域内の事業者を優先し、例外的に域外の事業者を使う場合はGDPR第46条の保護措置と標準契約条項を付す（プライバシーポリシー） | 必要に応じ、適用されるデータ保護法令に従って、国外へ移転するための適切な保護手段を講じる（プライバシーポリシー） |
| 準拠法と裁判所 | 利用者の所在地で分かれる。南北アメリカはカリフォルニア州法とサンタクララ郡の裁判所。日本を含むアジア太平洋はシンガポール法とシンガポールの裁判所。それ以外はフランス法とパリの裁判所。EEAの消費者は居住国の裁判所と法律、またはパリの裁判所とフランス法（消費者向け規約・Commercial Terms） | 中華人民共和国大陸の法令。協議で解決しない場合は、Hangzhou DeepSeek Artificial Intelligence Co., Ltd.の登記上の所在地を管轄する裁判所（利用規約9条、Open Platform Terms 10条） |
| 保持期間 | Vibeは、アカウントか会話を削除するまで。APIは、出力の生成に必要な期間に加えて不正利用の監視のため30日。有料プランでは、対象のAPIについてZero data retentionを申請できる（プライバシーポリシー・公式ドキュメント） | サービスの提供などの目的に必要な期間。サービス提供のために処理する情報は、アカウントがある限り保持する（プライバシーポリシー） |
| 学習への利用 | 入力と出力を、拒否の設定をしない限りモデルの学習に使う。アカウントの設定から拒否できる。法人向け規約は、所定の場合を除き学習に使わないと定める（プライバシーポリシー・各規約） | 匿名化などを前提に、最小限の範囲で入力と出力をサービスの改善に使うことがある。モデル訓練への個人データの利用を拒否する権利があり、窓口はメール（利用規約4.3・プライバシーポリシー） |

:::fact
Mistralの文書について補足する。公式ドキュメントは、Regional inferenceが制御プレーンのデータまで地域内に置くものではないと明記し、状態を持つ機能（Agents、Batch、Files API）は地域エンドポイントでは使えないとしている。2026年8月11日の発表は、選択した地域の外にある再委託先へ、限定的で保護措置のある移転が生じうると注記する。プライバシーポリシーは、苦情の申立先としてフランスのデータ保護機関（CNIL）を挙げている。
:::

:::fact
DeepSeekの文書について補足する。日本の個人情報保護委員会は2025年2月3日（同年3月5日更新）、同社が公表するプライバシーポリシーの記載内容について情報提供を行った。内容は2点で、取得された個人情報を含むデータが中華人民共和国に所在するサーバに保存されること、当該データに中華人民共和国の法令が適用されること、である。同じ文書は、適用される法令の例を参考として挙げている。Mistralについて、同委員会から同じ種類の情報提供が出ているかどうかは、当サイトでは確認していない。
:::

どちらの会社でも、公式のAPIやアプリを使わずに、公開された重みを自前の環境や第三者のクラウドで動かす道がある。その場合、データを処理する場所は動かす側が決めることになる。ただし、Mistral Medium 3.5には前述の売上の条件があり、第三者のクラウドを使う場合はその事業者の規約が別に適用される。

:::guess
Mistralが「主権」と呼んで売っているものは、文書の上では、推論の場所を選べること、SLA、そして自社環境への導入支援だとみられる。[Mistral AI](/ja/articles/mistral)の記事で見たとおり、同社は顧客の大半がすでに自社のデータセンターやクラウドでモデルを動かしていると述べている。DeepSeekの公式サービスには、文書を読む限り、処理の地域を選ぶ項目は見当たらない。置き場所を選びたい利用者に対しては、MITライセンスの重みそのものが答えになっていると考えられる。片方は場所の選択を商品にし、もう片方は場所の選択を重みの公開に委ねている、という違いだと推測される。どちらが自分の用途に合うかは、扱うデータの性質と、所属する組織の規程によって変わる。
:::

## 資本と資金調達は、公表の仕方が違う

:::fact
Mistralは資金調達を自社で発表している。2025年9月9日付の発表によれば、シリーズCは17億ユーロ、調達後の評価額は117億ユーロで、ASMLが主導した。2026年9月8日付の発表によれば、シリーズDは30億ユーロ、調達後の評価額は210億ユーロ超。Samsung Electronicsが主導し、EQTが運用するScaleup Europe Fundと既存投資家のPSG Equityが共同で主導した。新規の投資家としてAdvent、BlackRockが運用するファンドと口座、ルクセンブルク大公国の名前が挙がり、既存の投資家としてBpifrance、NVIDIA、a16zなどが参加したと書かれている。同じ発表は、20か国で事業を行い、125社以上の企業を支援していると述べる。計算基盤について公式のAI Cloudページは、GPUとしてGB200・GB300・B300を挙げ、2030年までにEU域内で1GWという容量の目標を掲げている。
:::

:::fact
DeepSeekの公式サイトには、当サイトが確認した範囲で、出資者や資金調達を説明するページが見当たらなかった。以下は二次情報である。Wikipediaの集約によれば、中国のヘッジファンドHigh-Flyerが2023年4月14日にAGI研究ラボの立ち上げを発表し、同年7月17日にそのラボが独立した会社になった。同社はHigh-Flyerが所有し資金を出しているとされ、共同創業者の梁文鋒（Liang Wenfeng）氏がCEOを務める。同じ資料は、2026年5月にシリーズAで70億ドルを調達して調達後の評価額が520億ドルになったこと、同年7月にBloombergとFinancial Timesが上場準備の開始を報じたことを記している。当サイトは、これらを同社の公式発表では確認できていない。公式の一次情報として確認できたのは、V4.1-Flashの公式ニュースにある「2,000基のGPUとストレージクラスターを伴う大規模導入」の相談を受け付ける一文までだ。学習や推論に使う計算基盤の規模と所在は、公式ドキュメントからは確認できなかった。
:::

:::guess
資金調達を自社の言葉で発表し、投資家の名前を並べるMistralのやり方は、企業や政府という買い手に「長く続く調達先である」と示す営業の一部になっているとみられる。DeepSeekは、モデルカード・技術報告・料金表という技術と価格の情報を細かく出す一方で、会社そのものの情報は公式にはあまり出していない。これは優劣ではなく、何を公開して信頼を得ようとしているかの違いだと考えられる。売上高は、どちらの会社も公表していない。
:::

## 技術構成の重なりは、Next.jsの1件だけ

このページの下に出る技術構成の比較は、2本の記事のtechStackを機械的に突き合わせたものだ。共通と判定されたのはNext.jsの1件だけである。それも、Mistralはドキュメントサイト、DeepSeekは公式サイトでの観測で、どちらも応答ヘッダーやHTMLからの推定（likely）にとどまる。モデルも、計算基盤も、配信網も重ならない。Mistral側にはMistral Medium 3.5・Large 3・Small 4、Mistral Compute、Regional Endpoints、Priority Tier、Kong、Cloudflare、Astro、Netlify、Vercelが並ぶ。DeepSeek側にはDeepSeek-V4.1-Flash、DeepSeek-V4-Pro、OpenAI形式とAnthropic形式の互換API、DeepSeek Harness、Amazon CloudFront、Amazon S3、AWS WAF、Docusaurus、Tencent Cloudなどが並ぶ。

この差分の表も、ここまでの話と同じ向きを指している。Mistralの側に並ぶのは「どこで、どんな保証で動かすか」の部品で、DeepSeekの側に並ぶのは「他社の形式のまま呼べるAPI」と「手元で動かすエージェント実行環境」という、使い始める手間を減らす部品だ。

重みを配るという同じ出発点から、[Mistral AI](/ja/articles/mistral)は動かす場所と保証に、[DeepSeek](/ja/articles/deepseek)はキャッシュと時間帯に値段を付けた。料金表で動くのは、前者では地域の指定とSLA、後者ではキャッシュヒットとオフピークだ。選ぶ側が先に決めるべきなのは、単価の小ささよりも、データをどこで処理し、どの法律のもとに置くかという条件のほうだろう。そのうえで、両社の文書を自分の用途に照らして読むことになる。
