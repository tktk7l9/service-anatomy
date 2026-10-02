---
title: "端末を持つのはどちらもサーバー、違うのは誰のために持つか — 人の作業場のZellijと、エージェントの居場所のHerdr"
description: "ZellijとHerdrは、どちらもRustで書かれた端末マルチプレクサで、サーバーが端末を持ち、画面はあとから付け外しする。機械比較で重なった技術はRustとtokioの2つ。分かれるのは使い手の想定だ。Zellijはキーボードの前の人に向けてWebAssemblyプラグイン・レイアウト・Webクライアントを積み、Herdrはペインの中のコーディングエージェントに向けて状態の判定とソケットAPIを積む。再起動で何が戻るか、拡張の作り方、遠隔からの入り方、ライセンスの履歴、リリースの頻度、資金と意思決定、そして両者がまだ公開していない値段までを、2つの解剖記事と一次情報から並べる。"
lead: "Herdrの公式の比較ページは、Zellijをtmuxと同じ列に置き、1行でこう書く。「Zellijは端末の中の人間にとって、より親しみやすい作業場。Herdrは端末の中のエージェントのためのランタイム」。同じRust、同じ「サーバーが端末を持つ」構造の2つが、使い手の想定で分かれ、開発の続け方でも分かれている。片方は寄付とメンテナの貯金で続け、有料の共有サービスを準備している。もう片方は600万ドルのシード資金を受け、クラウドの順番待ちを受け付けている。当サイトはどちらも実機では試していない。"
slugA: "herdr"
slugB: "zellij"
publishedAt: "2026-10-02"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
sources:
  - label: "Herdr公式: Compare（他ツールとの比較表と1行の対比）"
    url: "https://herdr.dev/compare/"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ドキュメント: Session state and restore（何が残るかの表）"
    url: "https://herdr.dev/docs/session-state/"
    accessedAt: "2026-10-02"
  - label: "Zellij ドキュメント: Session Resurrection"
    url: "https://zellij.dev/documentation/session-resurrection.html"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ドキュメント: Agents（状態の判定）"
    url: "https://herdr.dev/docs/agents/"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ドキュメント: Agent automation（agent start / prompt / wait）"
    url: "https://herdr.dev/docs/agent-automation/"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ドキュメント: Socket API"
    url: "https://herdr.dev/docs/socket-api/"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ドキュメント: Plugins"
    url: "https://herdr.dev/docs/plugins/"
    accessedAt: "2026-10-02"
  - label: "Zellij ドキュメント: Plugins"
    url: "https://zellij.dev/documentation/plugins.html"
    accessedAt: "2026-10-02"
  - label: "Zellij ドキュメント: Plugin API Permissions"
    url: "https://zellij.dev/documentation/plugin-api-permissions.html"
    accessedAt: "2026-10-02"
  - label: "Zellij 0.44.0 リリース記事（CLIの自動化、wasmi/tokio移行、Protocol Buffers）"
    url: "https://zellij.dev/news/remote-sessions-windows-cli/"
    accessedAt: "2026-10-02"
  - label: "Zellij ドキュメント: Web Client"
    url: "https://zellij.dev/documentation/web-client.html"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ドキュメント: How to work with Herdr（スマホからの使い方）"
    url: "https://herdr.dev/docs/how-to-work/"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ドキュメント: Connecting machines"
    url: "https://herdr.dev/docs/connecting-machines/"
    accessedAt: "2026-10-02"
  - label: "GitHub: herdrdev/herdr v0.9.3 の Cargo.toml（tokio への依存）"
    url: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
    accessedAt: "2026-10-02"
  - label: "GitHub: zellij-org/zellij の Cargo.toml（tokio への依存）"
    url: "https://github.com/zellij-org/zellij/blob/main/Cargo.toml"
    accessedAt: "2026-10-02"
  - label: "GitHub API: herdrdev/herdr（作成日、ライセンス、スター、フォーク）"
    url: "https://api.github.com/repos/herdrdev/herdr"
    accessedAt: "2026-10-02"
  - label: "GitHub API: zellij-org/zellij（作成日、ライセンス、スター、フォーク）"
    url: "https://api.github.com/repos/zellij-org/zellij"
    accessedAt: "2026-10-02"
  - label: "GitHub: herdrdev/herdr のリリース一覧"
    url: "https://github.com/herdrdev/herdr/releases"
    accessedAt: "2026-10-02"
  - label: "GitHub: zellij-org/zellij のリリース一覧"
    url: "https://github.com/zellij-org/zellij/releases"
    accessedAt: "2026-10-02"
  - label: "GitHub: コミット「relicense herdr under apache-2.0」（2026-07-22）"
    url: "https://github.com/herdrdev/herdr/commit/cd5ea1be"
    accessedAt: "2026-10-02"
  - label: "GitHub: コミット「clarify dual licensing」（2026-05-26）"
    url: "https://github.com/herdrdev/herdr/commit/cfffe659"
    accessedAt: "2026-10-02"
  - label: "GitHub: zellij-org/zellij の LICENSE.md（MIT）"
    url: "https://github.com/zellij-org/zellij/blob/main/LICENSE.md"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ブログ: Herdr is joining Y Combinator. The runtime stays open.（2026-08-06）"
    url: "https://herdr.dev/blog/herdr-is-joining-y-combinator/"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ブログ: Herdr raised a $6M seed. We're hiring.（2026-09-08）"
    url: "https://herdr.dev/blog/herdr-raised-a-seed/"
    accessedAt: "2026-10-02"
  - label: "Y Combinator: herdr（企業ページ）"
    url: "https://www.ycombinator.com/companies/herdr"
    accessedAt: "2026-10-02"
  - label: "Herdr公式: Herdr Cloud（ウェイトリスト）"
    url: "https://herdr.dev/cloud/"
    accessedAt: "2026-10-02"
  - label: "Zellij.online の説明ページ（運営者、商用であること、資金の考え方）"
    url: "https://zellij.dev/zellij-online/"
    accessedAt: "2026-10-02"
  - label: "Zellij.online（ウェイトリストのランディングページ）"
    url: "https://zellij.online/"
    accessedAt: "2026-10-02"
  - label: "GitHub Sponsors: imsnif（寄付の目標額、スポンサー数）"
    url: "https://github.com/sponsors/imsnif"
    accessedAt: "2026-10-02"
  - label: "GitHub: zellij-org/zellij の GOVERNANCE.md"
    url: "https://github.com/zellij-org/zellij/blob/main/GOVERNANCE.md"
    accessedAt: "2026-10-02"
  - label: "Zellij FAQ（保守体制、無料であり続けるという記載）"
    url: "https://zellij.dev/faq/"
    accessedAt: "2026-10-02"
---

[Herdr](/ja/articles/herdr)と[Zellij](/ja/articles/zellij)は、どちらも手持ちの端末の中で動き、ペインやタブを管理する。どちらもRustで書かれ、裏で動くサーバーが本物の端末プロセスを持ち、画面はそこに接続するクライアントにすぎない。ここまでは同じだ。違いは、その端末の前に誰がいると考えているかにある。この記事は、2つの解剖記事と両者の公開資料を並べたもので、当サイトが実機で使い比べた結果ではない。

## 機械比較で重なったのは、Rustとtokioの2つ

まず、2つの解剖記事の技術構成（techStack）を機械的に突き合わせた結果から始める。

:::fact
当サイトの比較エンジンが両記事のtechStackを突き合わせたところ、共通する技術は2つ、Rustとtokioだった。Herdr側だけに現れたのは17項目（ratatui、crossterm、libghostty-vt、portable-pty、Unixドメインソケット上の改行区切りJSON、SSH、Astro、Starlight、Cloudflareなど）、Zellij側だけに現れたのは11項目（WebAssembly、WASI、KDL、セッション復元、内蔵Webサーバー、Webクライアント、Hugo、GitHub Pages、GoatCounterなど）。この差は、各記事が公開情報から拾えた範囲の差であり、片方が使っていないことの証明ではない。
:::

共通の2つは一次情報でも確かめられる。HerdrのCargo.toml（v0.9.3）は tokio 1 に依存し、Zellijのワークスペースの Cargo.toml も tokio に依存している。Zellijの0.44.0のリリース記事は、複数あった非同期ランタイムを1つのtokioにまとめたと書いている。

言語と非同期ランタイムという土台は同じだが、その上に積んだものが重ならない。Herdr側に並ぶのは、端末を描く部品と、外から操作するための口だ。Zellij側に並ぶのは、プラグインを動かす仕組みと、設定を書く言語と、ブラウザから入る口だ。この並びの違いが、そのまま以降の話の見取り図になる。

:::pull
土台はRustとtokioで同じ。上に積んだのは、片方が「外から叩く口」、もう片方が「中で動かすプラグイン」だ。
:::

## Herdrの比較ページは、Zellijをtmuxの隣に置く

Herdrの公式サイトには、ほかのツールとの比較表がある。そこでZellijがどう書かれているかを、言葉どおりに引く。以下はすべてHerdr側の整理であり、Zellij側の見解ではない。

:::fact
Herdrの比較ページ（2026-10-02取得）は、9つのツールを4つの列に分け、Zellijをtmuxと同じ列「tmux · zellij」に置いている。この列の「種類」は terminal multiplexer（Herdr自身は runtime + clients）。「UIを閉じても作業が残るか」の行は、この列が「yes, detach」、Herdrが「yes, the server owns the terminals」。「エージェントの状態の意味づけ」の行は、Herdrが「blocked · working · done · idle」、この列は「—」。「エージェントが自分で叩けるAPI」の行は、Herdrが「read · send · wait · split · attach」、この列は「terminal scripting」。同じページの1行の対比は「Zellij is a friendlier workspace for humans in terminals. Herdr is a runtime for agents in terminals: state, waits, direct attach, and an API.」と書く。ページは、列は「カテゴリであって敵ではない」とも述べている。
:::

Herdrが引いた線は「端末を残すかどうか」ではない。その行では両者とも「yes」だ。線は「どのペインがエージェントで、いま何をしているかをサーバーが知っているか」に引かれている。

:::fact
Zellijの公式FAQは、Zellijの特徴として、画面にショートカットを出すステータスバー、フローティングペインとスタックペイン、レイアウト、複数人が同じセッションに入って各自の色のカーソルを持つ「True Multiplayer」を挙げる。同じFAQは、Zellijは自らを「tmuxやscreenの置き換えとは考えていない」とも書いている。0.44.0のリリース記事は、CLIからペインの一覧を取る `zellij action list-panes`、キー入力を送る `send-keys`、画面を書き出す `dump-screen`、画面の更新を購読する `zellij subscribe` を追加したと書き、後者について「外部のツールが端末の内容の変化に反応できる」と説明している。
:::

:::guess
Herdrの表が「terminal scripting」と呼ぶものは、Zellijの0.44.0以降のCLIにかなり近いとみられる。画面を読み、キーを送り、変化を待つ、という部品は両方にある。差は、その上に「これはエージェントで、いまは許可待ちだ」という意味づけをサーバーが持つかどうかだと推測される。Zellijでは、その解釈は外部のツールやプラグインの側に任される形と読める。ただし、Zellijが今後どこまでをサーバー側に持つつもりかは、当サイトが読んだ範囲の公開資料からは分からない。
:::

## 再起動のあとに何が戻るかを、両者とも文書にしている

画面を閉じても動き続ける、という点は同じだ。違いが出るのは、サーバーそのものが止まったあとである。両者とも、何が戻り何が戻らないかを公式の文書に書いている。

:::fact
Herdrの公式ドキュメント（Session state and restore）は、場合ごとの表を載せている。クライアントを切り離して付け直すだけなら、プロセスは動き続け、レイアウトも画面も戻る。サーバーを再起動した場合、プロセスは動き続けず、レイアウトは戻る。直近の画面は「pane screen history」を有効にしたときだけ戻り、この機能は既定で無効で、設定ファイルの experimental の項目として有効にする（ペインの出力に秘密情報が含まれうるため、と理由が書かれている）。エージェントの会話は「native agent session restore」で戻り、こちらは既定で有効で、公式のインテグレーションがセッションの参照を報告したペインを、エージェント自身の再開コマンドで起動し直す。レイアウトの保存は最大48世代で、世代を足すのは最短15分に1回。
:::

:::fact
Zellijの公式ドキュメント（Session Resurrection）によれば、各セッションは既定で直列化されてキャッシュフォルダに保持され、意図的な終了や予期しないクラッシュのあとに再生成できる。既定で直列化されるのはレイアウト（ペインとタブ）と各ペインで動いていたコマンドで、設定により画面表示とスクロールバックも対象にできる。復元されたコマンドはすぐには実行されず、「Press ENTER to run...」の表示の後ろで待つ。理由として文書は `rm -rf` のような事故の防止を挙げる。セッションのデータは1秒ごとにレイアウトとして保存され、人が読める形式で、ほかのマシンに持っていって読み込むこともできる。
:::

どちらも、元のプロセスそのものが再起動を越えて残るとは書いていない。戻るのは「形」と「続きを始める手がかり」だ。その手がかりの種類が違う。Zellijが覚えているのは、ペインで動いていたコマンドだ。Herdrが覚えているのは、作業ディレクトリと、エージェントの会話を指す参照だ。

:::guess
この違いは、想定する使い手の違いをそのまま映しているとみられる。人が使う端末では、再起動のあとに欲しいのは「同じコマンドをもう一度走らせる」ことで、勝手に走らせない一拍も人のためのものだ。エージェントの端末では、同じコマンドを打ち直しても会話は最初からになるため、会話の続きに戻るための参照のほうが重要になると推測される。なお、Herdrにはサーバーのバイナリを入れ替えるあいだプロセスを生かしておく `herdr update --handoff` があるが、ドキュメントの表はこれを「ベストエフォート」と書いている。
:::

## 拡張の作り方: 中で動くWebAssemblyか、外から叩くCLIか

拡張の仕組みは、2つの設計の違いが最もはっきり出る場所だ。

:::fact
Zellijの公式ドキュメントによれば、プラグインは WebAssembly / WASI の仕組みで動き、Zellij自身のUIもプラグインから組み立てられている。プラグインは端末のペインと同じ「第一級」の存在で、UIを描き、状態の変化に反応し、Zellijを操作できる。公式にサポートされるプラグイン言語は現時点でRustのみで、ほかの言語はコミュニティの取り組みとされる。権限の文書には、アプリケーション状態の読み取りと変更、コマンドの実行、標準入力への書き込み、ペイン内容の読み取り、Webサーバーの操作など14種類が並び、プラグインは利用者に許可を求める。
:::

:::fact
Herdrの公式ドキュメント（Plugins）は、専用のプラグインSDKも、制限されたコマンドの集合もなく、「HerdrのCLI全体がプラグインのAPI」だと説明する。プラグインの実装言語・依存・ファイルはプラグイン側が持つ。インストール時に、取得元と実行されるコマンドの予告が表示されるが、Herdrはプラグインのコードを審査もサンドボックス化もしない、と同じ文書に書かれている。CLIの下にあるのはローカルソケット上の改行区切りJSONで、ドキュメント（Socket API）は、エージェント向けのスキル・CLI・生のソケットの3層が「同じ操作面を共有する」と説明する。ドキュメント（Agent automation）には `agent start`、`agent prompt`、`agent wait` があり、エージェントがすでにblockedのとき `agent prompt` は端末に入力を送らずに `agent_blocked` を返す。
:::

Zellijの拡張は、Zellijの中に入って画面の一部になる。Herdrの拡張は、Herdrの外にいて、人やエージェントと同じ口からHerdrを操作する。前者は権限の枠の中で動き、後者は普通のプログラムとして動く。

:::guess
どちらの選び方にも、それぞれの筋が通っているとみられる。画面を人に見せる道具では、拡張が画面の中に行儀よく収まることと、何をしてよいかを利用者が許可できることに価値がある。エージェントに使わせる道具では、エージェントがすでに扱えるもの、つまりシェルのコマンドがそのままAPIであることに価値があると推測される。引き換えに、Zellijではプラグインを書く側がWebAssemblyへのビルドを求められ、Herdrでは入れるプラグインの中身を利用者が自分で確かめる必要がある。
:::

## 遠隔からの入り方: ブラウザを足したZellij、SSHに寄せたHerdr

手元にないマシンのセッションへどう入るかでも、2つは別の道を選んでいる。

:::fact
Zellijの公式ドキュメント（Web Client）によれば、Zellijには内蔵のWebサーバーがあり、既定では無効。既定の待ち受けは 127.0.0.1:8082 で、ログイントークンによる認証が必須、127.0.0.1以外で待ち受ける場合は利用者が用意した証明書によるHTTPSが必須とされる。`zellij attach https://…` で別の端末から直接つなぐこともでき、見るだけの読み取り専用トークンもある。Webクライアントはアプリとしてインストールでき（PWA）、モバイルのブラウザでは専用の画面に自動で切り替わる。
:::

:::fact
Herdrの公式ドキュメント（How to work with Herdr）は、Herdrは「モバイルアプリもWebダッシュボードもなしに」スマホで使えると書き、任意のSSHクライアントで接続してHerdrを起動する手順を示す。TUIは狭い画面に合わせて表示を変える。手元から1つの遠隔セッションにつなぐ `herdr --remote <host>` と、保存したSSHマシンを手元のものと1つの画面に並べる `herdr machine add <host>` もある（Connecting machines）。公式の比較ページは、同じランタイムにつながるクライアントとして「TUI · CLI · plain SSH, more coming」を挙げ、「tmux · zellij」の列には「its own client」と書いている。
:::

比較ページのこの行はHerdr側の整理だ。Zellijの文書に書かれているクライアントは、端末のほかにブラウザがある。

:::guess
入り口の選び方は、それぞれの次の商品とつながっているとみられる。Zellijは、ブラウザから入れる口と読み取り専用の共有をオープンソースの本体に先に入れ、証明書やポート開放の手間だけを有料サービスが肩代わりする形を取ろうとしている。Herdrは、SSHで届く範囲をそのまま使い、SSHの設定という手間を「Herdr Cloud」が肩代わりする形を掲げている。売ろうとしているものは、どちらも機能ではなく「つなぐ手間」だと推測される。ただし、両サービスの中身は公開されておらず、これは説明文から読み取った範囲の見立てにとどまる。
:::

## リポジトリの数字とライセンスの履歴

数字は2026年10月2日（UTC）にGitHubのAPIから取得した。

:::fact
herdrdev/herdr は2026年3月27日に作成され、スターは41,854、フォークは3,240、ライセンスはApache 2.0。リリースは94件で、うち事前公開版でないものが59件、最新は2026年9月29日の v0.9.3。zellij-org/zellij は2020年9月1日に作成され、スターは35,623、フォークは1,472、ライセンスはMIT。リリースは71件で、最新は2026年8月28日の v0.45.1。Herdrの初版が出た2026年3月27日以降に限ると、Zellijの安定版リリースは5件（v0.44.1からv0.45.1まで）、Herdrは59件だった。
:::

:::fact
ライセンスの履歴も違う。Herdrのリポジトリでは、LICENSEファイルに触れたコミットは3つある。2026年3月27日の初版はAGPL v3の本文、2026年5月26日のコミットは「AGPL-3.0-or-laterと、AGPLに従えない組織向けの商用ライセンス」の二本立てだと冒頭に明記し、2026年7月22日のコミットでApache 2.0に切り替わった。公式ブログ（2026-08-06）でCan Celikは、切り替えの理由を「誰にでも自由に使ってほしいから」と書いている。Zellijのリポジトリでは、LICENSE.mdに触れたコミットは2つで、2020年10月29日の最初の版からMITであり、2021年2月の変更は著作権表示の名前を旧称のMosaicからZellijに改めたものだった。
:::

:::guess
リリースの件数の差は、開発の速さの優劣ではなく、番号の付け方と仕事の種類の違いを映しているとみられる。Zellijは数か月に1度、機能をまとめた版を出し、あいだを修正版でつなぐ。Herdrは細かい版を続けて出している。[Herdr](/ja/articles/herdr)の記事で触れたとおり、Herdrは各社のエージェントの画面を読んで状態を判定するため、相手の画面が変わるたびに追従が必要になる。件数の多さは、その追従の頻度を映している可能性がある。件数だけで、どちらがよく保守されているかは判断できない。
:::

## 資金と意思決定、そしてまだ公開されていない値段

最後に、開発を誰のお金で続け、誰が決めているかを並べる。ここが2つの最も大きな違いだ。

:::fact
Zellijの公式の説明ページは、開発は「継続的な寄付とメンテナの貯金だけ」で賄われてきたと書き、その方式を「機能しているが脆い」と表現する。同じページは、準備中の Zellij.online を「エンドツーエンド暗号化のターミナルセッション共有サービス」「商用」「無料枠のある有料サービス」と明記し、現在はクローズドベータだとする。ベンチャーキャピタルやプライベートエクイティの資金は受けていないこと、Zellij本体は同じライセンスのまま無料であり続けること、内蔵のWebクライアントは全機能のまま残ることも書かれている。メンテナ個人のGitHub Sponsorsのページは、月5,000ドルの目標と、現在のスポンサー269を表示していた（2026-10-02取得）。リポジトリの GOVERNANCE.md は、Aram Drevekenin 氏をBDFLとし、財務と協業に関する大きな決定の最終権限と拒否権を持つと定めたうえで、合意による決定を目指し、拒否権は最後の手段だと書く。現在の組織メンバーとして13名が挙がっている。
:::

:::fact
Herdrの公式ブログ（2026-09-08）によれば、Herdrは600万ドルのシード資金を調達した。主導はBessemer Venture Partnersで、Y Combinator、e2vc、および個人の投資家が参加したという。公式ブログ（2026-08-06）でCan Celikは、自分を「Herdrの後ろにいる唯一の人間」と書き、Y Combinatorの2026年秋バッチに入ること、いま使われているランタイムは無料でApache 2.0のままであることを述べた。YCの企業ページ（2026-10-02取得）は、設立2026年、チーム1人、所在地トルコ・アンカラと記載している。公式サイトは「Herdr Cloud」を近日公開として掲げ、「マシンはあなたが用意し、私たちがつなぐ」と説明し、ウェイトリストを受け付けている。
:::

どちらも、いま値段の付いたものは売っていない。そして、これから売るものの値段を、どちらも公開していない。

:::fact
当サイトが2026年10月2日に確認した範囲で、Zellij.online の説明ページとランディングページには、料金、無料枠の範囲、一般提供の時期の記載がなかった。Herdr Cloud のページにも、料金、課金の単位、提供の時期の記載がなかった。Zellijの寄付の実際の月額、両者の利用者数、Herdrの売上も、公開情報からは分からない。Herdrについて、Zellijの GOVERNANCE.md に当たるような、意思決定の体制を定めた公開文書は、当サイトが読んだ範囲では見当たらなかった。
:::

:::guess
2つは、同じ問いに逆の順序で答えているとみられる。Zellijは、5年あまり寄付と貯金で道具を作り続けたあとで、外部の資本を入れないまま有料サービスを足そうとしている。約束を先に文書にして、越えない線を自分で引いた形だ。Herdrは、公開から半年ほどで外部の資本を受け、人を雇い、その上に接続サービスを載せようとしている。前者は、開発の速さを資金に合わせる代わりに、決める権限をメンテナとコミュニティの側に残す選び方と読める。後者は、エージェントの使われ方が急に広がっている時期に、追従と拡張に人手をかけるための選び方と読める。どちらが続くかは、未公開の値段と、それを払う人の数が決めることで、現時点の公開情報からは判断できない。
:::

サーバーが端末を持ち、画面は付け外しする。この古い構造の上に、[Zellij](/ja/articles/zellij)は人が覚えずに使える作業場を作り、[Herdr](/ja/articles/herdr)はエージェントが止まらずにいられる居場所を作った。同じ端末の中で両方が必要になる場面もありうる。2つを分けているのは性能の順位ではなく、端末の前に誰がいると考えたか、そして開発を誰のお金で続けると決めたかだ。
