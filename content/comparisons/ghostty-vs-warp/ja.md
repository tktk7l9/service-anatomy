---
title: "売れない構造を作ったターミナルと、クライアントを開いてエージェントを売るターミナル — GhosttyとWarpは、同じGPU描画から逆の続け方を選んだ"
description: "GhosttyとWarpは、どちらもネイティブコードで書かれ、GPUで画面を描くターミナルだ。ところが続け方は逆を向く。Ghosttyは収益モデルを持たず、非営利団体Hack Clubの財務スポンサーシップと取引単位の公開台帳で動く。Warpはベンチャー資金を受けた会社で、クライアントをAGPL v3で公開し、エージェントの作業量をクレジットで売る。構造、公開範囲とライセンス、ログインと通信、AI機能、対応プラットフォーム、資金を、両者の公式情報から並べる。"
lead: "ターミナルは、お金を払う習慣がほとんどない道具だ。Ghosttyはそこに料金表を足さず、売れない・転用できない形を先に固めた。Warpはターミナルを無料で配り、ソースコードも開いたうえで、その向こう側で働くエージェントに値段を付けた。機械的に比べると、2つの技術構成で重なるのはMetalとNext.jsだけだ。似た土台から、なぜここまで違う続け方になったのかを、2つの解剖記事と両者の公式情報から読む。"
slugA: "ghostty"
slugB: "warp"
publishedAt: "2026-10-02"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "Ghostty公式: About（fast・feature-rich・nativeの3条件、libghostty、余暇のプロジェクトであること）"
    url: "https://ghostty.org/docs/about"
    accessedAt: "2026-10-02"
  - label: "Ghostty公式: Features（対応プラットフォーム、Metal/OpenGL、Windowsは将来対応予定）"
    url: "https://ghostty.org/docs/features"
    accessedAt: "2026-10-02"
  - label: "Ghostty公式: Download（macOSとLinuxの入手方法、最新版1.3.1）"
    url: "https://ghostty.org/download"
    accessedAt: "2026-10-02"
  - label: "Ghostty公式: Financial Support（Hack Clubの財務スポンサーシップ、資金の使途、時給60ドル、BDFL、手数料7%）"
    url: "https://ghostty.org/docs/sponsor"
    accessedAt: "2026-10-02"
  - label: "Mitchell Hashimoto: Ghostty Is Now Non-Profit（2025-12-03）"
    url: "https://mitchellh.com/writing/ghostty-non-profit"
    accessedAt: "2026-10-02"
  - label: "HCB: Ghosttyの公開台帳（残高・累計調達額・取引一覧）"
    url: "https://hcb.hackclub.com/ghostty"
    accessedAt: "2026-10-02"
  - label: "GitHub: ghostty-org/ghostty（README・MITライセンス・libghostty-vt・クラッシュレポート）"
    url: "https://github.com/ghostty-org/ghostty"
    accessedAt: "2026-10-02"
  - label: "Warp公式: トップページ（現在の位置づけと3つの製品）"
    url: "https://www.warp.dev/"
    accessedAt: "2026-10-02"
  - label: "Warp公式ブログ: How Warp Works（2021-07-12）"
    url: "https://www.warp.dev/blog/how-warp-works"
    accessedAt: "2026-10-02"
  - label: "Warp公式ブログ: Linux版の公開（wgpu・winit・cosmic-text、コードの約98%を共有・2024-02-22）"
    url: "https://www.warp.dev/blog/warp-for-linux"
    accessedAt: "2026-10-02"
  - label: "GitHub: warpdotdev/warp（README・ライセンス・創設スポンサー）"
    url: "https://github.com/warpdotdev/warp"
    accessedAt: "2026-10-02"
  - label: "GitHub: warpdotdev/warp FAQ.md（公開範囲とライセンスの理由）"
    url: "https://github.com/warpdotdev/warp/blob/master/FAQ.md"
    accessedAt: "2026-10-02"
  - label: "GitHub: warpdotdev/warp Cargo.toml（wgpuの指定とwinitのフォーク）"
    url: "https://github.com/warpdotdev/warp/blob/master/Cargo.toml"
    accessedAt: "2026-10-02"
  - label: "Warp公式ブログ: Warp is now open-source（2026-04-28）"
    url: "https://www.warp.dev/blog/warp-is-now-open-source"
    accessedAt: "2026-10-02"
  - label: "Warp公式ブログ: ログイン必須の撤廃（2024-11-22）"
    url: "https://www.warp.dev/blog/lifting-login-requirement"
    accessedAt: "2026-10-02"
  - label: "Warp公式ドキュメント: オフラインでの利用（初回起動と匿名の利用者ID）"
    url: "https://docs.warp.dev/support-and-community/troubleshooting-and-support/using-warp-offline/"
    accessedAt: "2026-10-02"
  - label: "Warp公式ドキュメント: プライバシーとデータの管理（テレメトリー）"
    url: "https://docs.warp.dev/support-and-community/privacy-and-security/privacy/"
    accessedAt: "2026-10-02"
  - label: "Warp公式: 料金ページ"
    url: "https://www.warp.dev/pricing"
    accessedAt: "2026-10-02"
  - label: "Warp公式ドキュメント: クレジットと課金"
    url: "https://docs.warp.dev/support-and-community/plans-and-billing/credits/"
    accessedAt: "2026-10-02"
  - label: "Warp公式: ダウンロードページ（macOS・Windows・Linux）"
    url: "https://www.warp.dev/download"
    accessedAt: "2026-10-02"
  - label: "Warp公式ブログ: Warp Agent CLIの発表（2026-08-04）"
    url: "https://www.warp.dev/blog/introducing-the-warp-agent-cli-coding-agent"
    accessedAt: "2026-10-02"
  - label: "TechCrunch: Warp raises $23M to build a better terminal（2022-04-05）"
    url: "https://techcrunch.com/2022/04/05/warp-raises-23m-to-build-a-better-terminal/"
    accessedAt: "2026-10-02"
  - label: "Warp公式ブログ: Warp DriveとシリーズB（2023-06-21）"
    url: "https://www.warp.dev/blog/warp-drive-series-b"
    accessedAt: "2026-10-02"
---

[Ghostty](/ja/articles/ghostty)と[Warp](/ja/articles/warp)は、どちらも「GPUで描く、ネイティブコードのターミナル」として語られる。出発点は近い。だが、誰が持ち、何を開き、どこからお金が入るのかを並べると、2つはほぼ反対の答えを出している。この記事は優劣を付けない。当サイトはどちらも実機で試しておらず、以下は両者の公式の文書と公開リポジトリに書かれている内容の比較だ。

## 似た土台、重なるのはMetalとNext.jsだけ

まず、いまの名乗り方が違う。

:::fact
Ghosttyの公式Aboutは、Ghosttyを「速く、機能が豊富で、ネイティブであることで差別化するターミナルエミュレータ」と説明している。同じページで作者のMitchell Hashimoto氏は、これは余暇に取り組む「passion project」で、関わる誰にとってもフルタイムの仕事ではないと書いている。一方、Warpのトップページのタイトル（2026年10月2日確認）は「The Open Platform for Automating Development」で、製品として「Warp Factories」「Warp Terminal」「Warp Agent CLI」の3つを並べる。公開リポジトリのREADMEは、Warpを「ターミナルから生まれたエージェント型開発環境」と呼んでいる。
:::

作りも違う。どちらも1つのコードを複数のOSで使い回すが、画面の作り方が逆だ。

:::fact
Ghosttyの公式Aboutによれば、中核はZigで書かれたlibghosttyという、C ABI互換のライブラリで、端末エミュレーション・フォント処理・描画を受け持つ。その上に載る画面はOSごとに別で、macOSはSwift（AppKitとSwiftUI）、LinuxはZigからGTK4を使う。描画は、公式FeaturesによればmacOSがMetal、LinuxがOpenGLだ。Warpは、公式ブログ「How Warp Works」（2021年）によれば、Electronを短く試したあとRustとMetalに切り替え、安定したRust製のUIフレームワークがなかったため、Atomの共同創業者Nathan Sobo氏と組んで自前のUIフレームワークを作った。Linux版の公式ブログ（2024年）は、wgpu・winit・cosmic-textの上に作り、Mac版とコードの約98%を共有すると書いている。公開リポジトリのCargo.toml（2026年10月2日確認）では、wgpu 30.0.0がdx12・gles・metal・vulkanの機能付きで指定されている。
:::

当サイトの比較ページは、2つの記事の技術構成を機械的に突き合わせる。その結果、重なったのはMetalとNext.jsの2つだけだった。Next.jsは両者の公式サイトの話なので、ターミナル本体で重なるのはMetalだけになる。言語（ZigとRust）、画面の部品（OS標準と自作）、Linuxでの描画（OpenGLとwgpu）は、すべて別の側に分かれた。

:::pull
Ghosttyは画面をOSに任せ、中身を部品として外に出す。Warpは画面を自分で描き、その画面の上に製品を積む。
:::

:::guess
この違いは、それぞれが画面に何を載せたいかの違いから来ているとみられる。Ghosttyは「その環境のアプリとして期待どおりに動くこと」を目標に挙げているので、タブや分割をOS標準の部品に任せる作りが合う。Warpは、コマンドと出力をまとめる「ブロック」や、エディタ並みの入力欄、エージェントとのやり取りといった独自の画面を載せるので、どのOSでも同じものを描ける自前のUIフレームワークが要ったと推測される。なお、速さについては両者とも公式に目標を掲げているが、当サイトは測定名と手順が示された比較の数値を確認できなかったため、ここでは数字を載せない。
:::

## 開いている範囲と、選んだライセンス

どちらもソースコードを公開している。だが、開いている範囲と、選んだライセンスの向きが違う。

:::fact
Ghosttyは、公式のFinancial SupportページとGitHubのリポジトリによれば、MITライセンスだ。READMEは、libghosttyを「誰でもターミナルエミュレータを作ったり、自分のアプリに端末を組み込んだりするのに使える」ライブラリと説明し、最初に切り出したlibghostty-vtがZigとCから使え、macOS・Linux・Windows・WebAssemblyに対応するとしている。同じREADMEは、libghosttyにはまだバージョンのタグを付けておらず、APIのシグネチャは変動中だとも書いている。
:::

:::fact
Warpは2026年4月28日にクライアントを公開した。リポジトリのFAQによれば、アプリ本体と大半のクレートはAGPL v3、UIフレームワークのクレート（warpui_core・warpui）はMITだ。サーバー、Warp Driveのバックエンド、ホストされた認証、エージェントのオーケストレーション層Ozはこのリポジトリになく、現時点ではプロプライエタリのままだと明記されている。内蔵エージェントのハーネスはサーバー側で動き、公開されていない。AGPLを選んだ理由としてFAQは、寛容なライセンスではフォークした側が変更を閉じたまま製品にできるので、派生物を開いたままにしたかったと説明している。貢献にはCLA（コントリビューターライセンス契約）が要る。
:::

2つのライセンスは、どちらも「取り込まれ方」を決めるために選ばれている。ただし決め方が逆だ。Ghosttyは、他社の製品に組み込まれることを望む側としてMITを選んだ。Warpは、クライアントを閉じた製品に作り替えられることを避ける側としてAGPLを選び、ほかのアプリでも使えるUIフレームワークだけをMITにした。

:::guess
公開の範囲は、それぞれの続け方と対応しているとみられる。Ghosttyには売るものがないので、全部を寛容なライセンスで開いても失うものが少なく、使われる場所が増えるほど目的に近づく。Warpは、値段を付けている部分（エージェントの中枢とクラウドの実行基盤）をサーバー側に置いているので、クライアントを開いても課金の起点は動かない、という構図だと推測される。どちらが「より開いている」かは、何を数えるかで変わる。全体のうち読めるコードの割合で見ればGhosttyが広く、派生物も開いたままにさせる力で見ればWarpのAGPLが強い。
:::

## アカウント、外に出るデータ、AI

日常の使い心地に近い違いは、この3つに集まっている。

:::fact
Ghosttyについて、当サイトが確認した公式のAbout・Features・Downloadの各ページ（2026年10月2日）には、アカウントの登録やログインの手順、AIやエージェントの機能は書かれていなかった。READMEは、クラッシュレポートが端末内に保存され、自動ではどこにも送信されないと明記している。送りたい場合は、利用者が自分でコマンドを実行して送る。
:::

:::fact
Warpは、2024年11月22日の公式ブログで、アカウントを作らずに使い始められるようにしたと発表した。公式ドキュメントによれば、初回の起動時だけはオンラインである必要があり、そのときにAIの利用量を数えるための利用者IDが作られ、ログインしない場合は匿名の利用者アカウントに結び付けられる。初期設定のあと、ターミナルの基本機能はオフラインでも動く。テレメトリーについては、送信するイベントの一覧を公開し、アプリ内のNetwork Logで通信を確認でき、設定から「Help improve Warp」とクラッシュ報告を止められるとしている。同じページには、FreeプランでAI機能を使うにはテレメトリーを有効にする必要があり、有料プランは止めたままAIを使える、という注記がある。クラッシュ報告にはSentry、アプリの分析にはRudderStackを使うと書かれている。
:::

AIについては、差がいちばんはっきりしている。Warpは、入力欄に自然な文章で頼むとエージェントがコマンドを実行する機能を内蔵し、クラウドでエージェントをまとめて走らせる基盤まで持つ。Ghosttyの公式ページには、そうした機能の記載がない。

:::fact
ただし、2つは排他的ではない。Warpの公式ブログ（2026年8月4日）は、内蔵エージェントを単体で切り出した「Warp Agent CLI」を発表し、Ghostty・iTerm 2・VS Code・OS標準のターミナルなど、好きなターミナルで動くと書いている。料金ページでは、このCLIはFreeプランにも含まれている。
:::

:::guess
ここから読み取れるのは、Warpにとってターミナルの画面が、もう唯一の入口ではないということだ。エージェントをほかのターミナルでも動くようにしたのは、売り物が画面ではなくエージェントの作業量に移ったからだとみられる。Ghosttyの側から見ると、AIを内蔵しないことは機能の不足というより、端末という層に役割を絞った結果と推測される。その上でどのエージェントを動かすかは、利用者が選ぶ。
:::

対応するOSにも差がある。Ghosttyの公式Featuresは、macOSとLinuxで動き、Windowsは将来対応する予定だと書く。公式が配るバイナリはmacOS版で、Linuxは各ディストリビューションのパッケージに頼る。Warpのダウンロードページは、macOS・Windows・Linuxの3つに向けた配布物を並べている。

## お金の出どころが、いちばん遠い

ここが、2つのいちばん大きな違いだ。

:::fact
Ghosttyは、2025年12月3日に米国の501(c)(3)非営利団体Hack Clubの財務スポンサーシップの下に入った。作者の発表文によれば、名称・商標・知的財産はHack Clubへ移され、著作権は各コントリビューターが持ち続け、ライセンスはMITのままだ。公式のFinancial Supportページは、Ghosttyは「売却も、方針転換も、気まぐれな終了もできない」と書き、資金の使途をコントリビューターへの報酬（全員が時給60ドル）、サービス費用、上流プロジェクトへの支援の3つに限っている。作者は最大の寄付者であり、作者本人には1セントも支払われないと明記されている。寄付の7%はHack Clubに渡る。当サイトが2026年10月2日にHCBの公開APIで確認した時点で、残高は35,772.13ドル、累計の調達額は79,060.93ドルだった。
:::

:::fact
Warpは、ベンチャー資金を受けた会社だ。TechCrunch（2022年4月5日）によれば、GVが主導した600万ドルのシードと、Figmaの共同創業者Dylan Field氏が主導した1,700万ドルのシリーズAを調達した。公式ブログ（2023年6月21日）は、Sequoia Capitalが主導する5,000万ドルのシリーズBを発表している。公表された額の合計は7,300万ドルになる（合計は当サイトの計算）。収益は月額のプランとクレジットからなり、料金ページ（2026年10月2日確認）によれば、Freeは0ドル、Buildは月20ドルで1,500クレジット、Maxは月200ドルで18,000クレジット、Businessは1人あたり月50ドル、Enterpriseは個別見積もりだ。公式ドキュメントによれば、Freeプランには内蔵エージェント用のAI利用は含まれない。公開リポジトリのREADMEは、OpenAIをこのリポジトリの創設スポンサーと記している。
:::

:::pull
Ghosttyは、お金がどこへ行くかを1件ずつ見せる。Warpは、どこに値段を付けたかを料金表で見せる。
:::

2つの金額は、種類が違うので単純には比べられない。片方は寄付の累計で、もう片方は出資の累計だ。それでも、資金の規模に3桁の開きがあること、そして片方には出資者への見返りという前提がなく、もう片方にはあることは、公開情報から言える。Warpの創業者Zach Lloyd氏は、オープンソース化の公式ブログで、公開は事業を成功させたいという考えから来ていると書き、ベンチャー資金を受けた会社ではあるが、価格で競ったり利用料を大きく補填したりする資源はない、とも書いている。

:::guess
どちらの形にも、それぞれの不確かさがあるとみられる。Ghosttyは、将来の方針転換への心配を構造で消した一方、作者自身が、最大の寄付者が自分である現状を「異例に恵まれた立場」と書いており、資金の広がりはこれからの課題だと推測される。Warpは、開発に使える資金と人が多い一方、収益を作る必要があるので、何を無料にして何を売るかの線は今後も動きうる。実際にWarpは、ログイン必須をやめ、料金の単位を回数から作業量へ変え、クライアントを公開するという変更を、数年のあいだに重ねてきた。これは利用者の声に応えた結果とも読めるし、線が動くこと自体を前提にする必要がある、とも読める。
:::

## 利用者は、何と何のあいだで選んでいるのか

機能の一覧を並べると、この2つは「AIのあるターミナルと、ないターミナル」に見える。だが、公式情報を重ねて見えてくるのは、もう少し手前の選択だ。

1つは、ターミナルに何をさせたいか。Ghosttyは端末という層に役割を絞り、その層を部品として外にも配る。Warpは、ターミナルをエージェントと働く場所に作り替え、さらにその先のクラウドの基盤へ製品を広げている。

もう1つは、どんな約束を信頼の根拠にするか。Ghosttyの約束は構造にある。売れず、資金を私的に使えず、台帳が公開されている。Warpの約束は、公開されたクライアントのコード、通信の一覧、そして料金表にある。前者は「変えられないこと」を、後者は「見えること」を差し出している。

そして、この2つは同時に使うこともできる。Warpのエージェントは、Warp自身の説明によればGhosttyの中でも動く。[Ghostty](/ja/articles/ghostty)と[Warp](/ja/articles/warp)は、同じ棚に並ぶ競合というより、「ターミナルはだれのもので、どこまでが道具か」という問いに、別々の答えを出した2つの例として読める。
