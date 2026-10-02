---
service: "Herdr"
title: "tmuxに「どのエージェントが止まっているか」を足した常駐サーバー — 半年で4万スター、Herdrが言う「ランタイム」の中身"
description: "Claude CodeやCodexなどのコーディングエージェントを、端末ごと常駐サーバーに預けるオープンソースのツール、Herdr。「ランタイム」の実体は、PTYを握り続けるサーバーと、各ペインの状態（working / blocked / idle）の判定、そしてエージェント自身が叩けるCLIとソケットAPIだ。2026年3月の初版から半年で59回の安定版リリース、AGPLからApache 2.0への変更、YC入りと600万ドルのシード調達までを、公式ドキュメント・公開リポジトリ・公式ブログから解剖する。"
lead: "ノートPCを閉じたら、6時間走らせていたエージェントが止まっていた——Herdrはこの1点から始まる。答えは新しいアプリではなく、tmuxと同じ「サーバーが端末を持ち、画面はあとから付け外しする」構造だ。違いは、どのペインがエージェントで、いま作業中なのか、許可待ちで止まっているのかをサーバーが知っていること。公式が「ランタイム」と呼ぶものの中身を、公開されている資料とソースコードだけで確かめる。当サイトは実機での試用はしていない。"
category: dev-tool
tags: [ai, terminal, rust, open-source, developer-tools]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://herdr.dev/"
vendor: "Herdr, Inc."
origin: "TR"
heroTheme: "herdr"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 2.5 }
techStack:
  - layer: "実装言語"
    name: "Rust"
    confidence: confirmed
    evidence: "公開リポジトリ herdrdev/herdr の主言語はRust（GitHub APIの言語別バイト数で約94%）。READMEも「Rustの単一バイナリ、Electronなし」と明記"
    evidenceUrl: "https://github.com/herdrdev/herdr"
  - layer: "TUIの描画"
    name: "ratatui / crossterm"
    confidence: confirmed
    evidence: "v0.9.3のCargo.tomlの依存に ratatui 0.30 と crossterm 0.29 がある"
    evidenceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
  - layer: "端末エミュレーション"
    name: "libghostty-vt (vendored)"
    confidence: confirmed
    evidence: "リポジトリ内のクレート crates/ghostty-vt のCargo.tomlが、自らを「Herdrが同梱するlibghostty-vtへのバインディング」と説明している"
    evidenceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.3/crates/ghostty-vt/Cargo.toml"
  - layer: "PTY"
    name: "portable-pty (vendored) / ConPTY on Windows"
    confidence: confirmed
    evidence: "Cargo.tomlが portable-pty 0.9.0 を固定し、リポジトリ内の vendor/portable-pty に差し替えている。Windowsについては公式ドキュメントがConPTYを使うと明記"
    evidenceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
  - layer: "非同期ランタイム"
    name: "tokio"
    confidence: confirmed
    evidence: "v0.9.3のCargo.tomlの依存に tokio 1（rt-multi-thread・process・io-util ほか）がある"
    evidenceUrl: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
  - layer: "制御API"
    name: "NDJSON over Unix domain socket / Windows named pipe"
    confidence: confirmed
    evidence: "公式ドキュメント（Socket API）に、ローカルソケット上の改行区切りJSONで、UnixではUnixドメインソケット、Windowsでは名前付きパイプだと明記。スキーマは herdr api schema で出力できる"
    evidenceUrl: "https://herdr.dev/docs/socket-api/"
  - layer: "サーバーの無停止更新"
    name: "PTY master FD transfer via SCM_RIGHTS"
    confidence: confirmed
    evidence: "公式ブログ（2026-05-27）に、旧サーバーがPTYマスターのファイルディスクリプタを複製し、非公開のUnixソケット経由で新サーバーへ渡すと明記。ドキュメント上は herdr update --handoff の実験的機能"
    evidenceUrl: "https://herdr.dev/blog/live-updates-without-killing-your-terminal-processes/"
  - layer: "マシン間の接続"
    name: "SSH (OpenSSH)"
    confidence: confirmed
    evidence: "公式ドキュメントに、保存したSSHマシンを1つの画面に並べること、SSH圧縮を要求すること、OpenSSHの接続を共有することが書かれている"
    evidenceUrl: "https://herdr.dev/docs/connecting-machines/"
  - layer: "配布"
    name: "GitHub Releases / install.sh / Homebrew / mise / Nix"
    confidence: confirmed
    evidence: "公式ドキュメントに、インストールスクリプト・Homebrew・mise・Nix・手動ダウンロードの各手順がある。GitHub Releasesには Linux（x86_64 / aarch64）・macOS（x86_64 / aarch64）・Windows（x86_64）のバイナリが付く"
    evidenceUrl: "https://herdr.dev/docs/install/"
  - layer: "ドキュメントサイト"
    name: "Astro / Starlight"
    confidence: confirmed
    evidence: "当サイトの実観測（2026-10-01 UTC）で、herdr.dev/docs/ のHTMLに generator のメタタグとして Astro v5.18.1 と Starlight v0.36.3 が出力されていた"
    evidenceUrl: "https://herdr.dev/docs/"
  - layer: "サイトの配信"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-01 UTC）で、herdr.dev の応答ヘッダーは server: cloudflare と cf-ray を返し、ネームサーバーも ns.cloudflare.com だった。Cloudflareのどの製品で配信しているかは公式の明言が見当たらない"
sources:
  - label: "Herdr公式サイト（トップページ）"
    url: "https://herdr.dev/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式: agent-guide.md（エージェント向けガイド）"
    url: "https://herdr.dev/agent-guide.md"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ドキュメント: Concepts"
    url: "https://herdr.dev/docs/concepts/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Agents"
    url: "https://herdr.dev/docs/agents/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Integrations"
    url: "https://herdr.dev/docs/integrations/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Session state and restore"
    url: "https://herdr.dev/docs/session-state/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: How to work with Herdr"
    url: "https://herdr.dev/docs/how-to-work/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Connecting machines"
    url: "https://herdr.dev/docs/connecting-machines/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Agent automation"
    url: "https://herdr.dev/docs/agent-automation/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Socket API"
    url: "https://herdr.dev/docs/socket-api/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Plugins"
    url: "https://herdr.dev/docs/plugins/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Marketplace"
    url: "https://herdr.dev/docs/marketplace/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Install Herdr"
    url: "https://herdr.dev/docs/install/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ドキュメント: Windows support"
    url: "https://herdr.dev/docs/windows-beta/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式: Compare（他ツールとの比較表）"
    url: "https://herdr.dev/compare/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式: Herdr Cloud（ウェイトリスト）"
    url: "https://herdr.dev/cloud/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ブログ: Herdr is joining Y Combinator. The runtime stays open.（2026-08-06）"
    url: "https://herdr.dev/blog/herdr-is-joining-y-combinator/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ブログ: Herdr raised a $6M seed. We're hiring.（2026-09-08）"
    url: "https://herdr.dev/blog/herdr-raised-a-seed/"
    accessedAt: "2026-10-02"
  - label: "Herdr公式ブログ: Connecting the machines（2026-09-07）"
    url: "https://herdr.dev/blog/connecting-the-machines/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ブログ: Ten agents, three clients, 95% less CPU（2026-08-03）"
    url: "https://herdr.dev/blog/ten-agents-three-clients-95-percent-less-cpu/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ブログ: Live updates without killing your terminal processes（2026-05-27）"
    url: "https://herdr.dev/blog/live-updates-without-killing-your-terminal-processes/"
    accessedAt: "2026-10-01"
  - label: "Herdr公式ブログ: Coding agents are becoming runtimes（2026-06-10）"
    url: "https://herdr.dev/blog/coding-agents-are-becoming-runtimes/"
    accessedAt: "2026-10-01"
  - label: "GitHub: herdrdev/herdr（README・ライセンス・スター数）"
    url: "https://github.com/herdrdev/herdr"
    accessedAt: "2026-10-01"
  - label: "GitHub: herdrdev/herdr のリリース一覧"
    url: "https://github.com/herdrdev/herdr/releases"
    accessedAt: "2026-10-01"
  - label: "GitHub: herdrdev/herdr v0.9.3 の Cargo.toml"
    url: "https://github.com/herdrdev/herdr/blob/v0.9.3/Cargo.toml"
    accessedAt: "2026-10-01"
  - label: "GitHub: コミット「relicense herdr under apache-2.0」（2026-07-22）"
    url: "https://github.com/herdrdev/herdr/commit/cd5ea1be"
    accessedAt: "2026-10-02"
  - label: "GitHub: コミット「clarify dual licensing」（2026-05-26）"
    url: "https://github.com/herdrdev/herdr/commit/cfffe659"
    accessedAt: "2026-10-02"
  - label: "GitHub: herdrdev/herdr の SPONSORS.md"
    url: "https://github.com/herdrdev/herdr/blob/v0.9.3/SPONSORS.md"
    accessedAt: "2026-10-01"
  - label: "Y Combinator: herdr（企業ページ）"
    url: "https://www.ycombinator.com/companies/herdr"
    accessedAt: "2026-10-01"
  - label: "Homebrew Formulae: herdr"
    url: "https://formulae.brew.sh/formula/herdr"
    accessedAt: "2026-10-01"
---

コーディングエージェントは端末の中で動く。1つなら端末のタブを1枚開けば済むが、5つ、10個と並べて何時間も走らせると、別の問題が出てくる。どれが作業中で、どれが許可待ちで止まっているのか。ノートPCを閉じたら全部止まるのか。Herdrは、この問題に「端末を持つのは常駐サーバーで、画面はただのクライアント」という古い答えを持ち込み、そこにエージェントの状態という新しい層を足したツールだ。

## サービス解説

Herdrは、AIコーディングエージェント向けの端末ワークスペース管理ツールだ。公式のエージェント向けガイドは自らを「tmuxと同じマルチプレクサ」と説明する。バックグラウンドのサーバーが本物の端末プロセスを持ち、クライアントがそこに接続して描画する。クライアントを閉じても、SSHが切れても、ペインの中のプロセスは動き続ける。

そのうえで、同じガイドはtmuxとの違いを「マウス優先で、エージェントを認識する」ことだと説明する。画面全体がクリックでき、ペインの中のエージェントを見つけて、その状態をサイドバーに表示する。あわせて、スクリプトやエージェント自身が叩けるCLIとローカルのソケットAPIを持つ。

:::fact
公開リポジトリ herdrdev/herdr は2026年3月27日に作られ、同じ日に v0.1.0 が出た。GitHubのAPIによれば、2026年10月1日（UTC）時点でスターは41,769、フォークは3,230、ライセンスはApache 2.0、主言語はRust。リリースは事前公開版を含めて94件、そのうち安定版は59件で、最新は2026年9月29日の v0.9.3。公式サイトのトップページは「これまでのインストール1,191,376件」「コミュニティのプラグイン1,445件」「標準で検出するエージェントCLI 22種」と表示している（インストール件数の数え方は書かれていない）。
:::

:::fact
公式ブログ（2026-08-06）で、作者のCan Celikは「Herdrを作っているのは自分1人」と書き、Y Combinatorの2026年秋バッチ（F26）に入ると発表した。YCの企業ページは、設立2026年、チーム1人、所在地トルコ・アンカラ、創業者兼CEOをCan Celikと記載している。公式ブログ（2026-09-08）によれば、Herdrは600万ドルのシード資金を調達した。主導はBessemer Venture Partnersで、Y Combinator、e2vcのほか、Tobi Lütke（Shopify CEO）、Dane Knecht（Cloudflare CTO）、Görkem Yurtseven（fal共同創業者）らが個人として参加したという。公式サイトのフッターの表記は「© 2026 Herdr, Inc.」。
:::

:::pull
「ランタイム」の中身は、端末を握り続けるサーバーと、状態の判定と、エージェントが叩けるAPI。隔離やサンドボックスの話ではない。
:::

「ランタイム」という言葉は広いので、何を含み、何を含まないかを公開資料から切り分けておく。

- **プロセスの持ち主**。公式ドキュメント（Concepts）によれば、サーバーがペインとプロセスの状態を持ち、クライアントはそのサーバーに接続した端末UIだ。セッションは「永続するサーバーの名前空間」と定義されている。
- **状態の判定**。エージェントの状態は working / blocked / done / idle / unknown の5つ。タブとワークスペースの単位に集計され、サイドバーに出る。
- **遠隔からの接続**。SSHで入ってから herdr を起動する、手元から `herdr --remote <host>` で接続する、複数のSSHマシンを1つの画面に並べる、の3通りがある。
- **含まないもの**。当サイトが読んだ範囲のドキュメントに、Herdr自身がエージェントを隔離する機能の記述は見当たらなかった。あるのは、外部のサンドボックス用ラッパー越しにエージェントを動かすとき、環境変数 `HERDR_AGENT` で種類を教える手順だ。プラグインについても、公式ドキュメントは「コードの審査もサンドボックス化もしない」と明記している。

::scorecard

## UX分析

当サイトはHerdrをインストールして試していない。以下は公式ドキュメント・README・公式ブログに書かれた設計を読んだ分析で、操作感の評価ではない。

- **覚えるキーがなくても使える**。エージェント向けガイドによれば、ペイン・タブ・ワークスペース・分割の境界・右クリックメニューのすべてがクリックでき、キーバインドを覚えなくても使える。キーボードで操作したい人には、tmuxと同じ `ctrl+b` のプレフィックスが既定で用意されている。
- **止まっている1つを探させない**。ドキュメント（Agents）によれば、Herdrは各ペインのプロセスからエージェントを見つけ、ペインの最下部の表示を検出ルール（マニフェスト）に当てて状態を決める。エージェントが完了したとき、または人を必要としたときに通知する。
- **動きは「変化」だけに使う**。公式ブログ（2026-08-03）によれば、以前は作業中のエージェントごとにスピナーが回っていたが、20個並ぶと「どれが自分を待っているのか」がかえって分からなくなるという声を受け、v0.8.0で静止した色付きの印に変えた。
- **スマホはSSHクライアントで足りる**。ドキュメントによれば、専用アプリもWebダッシュボードもなく、スマホのSSHクライアントから同じセッションを開く。TUIは狭い画面に合わせて表示を変える。
- **導入は1行、既存の構成は変えない**。インストールは `curl -fsSL https://herdr.dev/install.sh | sh` の1行で、Homebrew・mise・Nixにも対応する。端末アプリを置き換えるのではなく、いま使っている端末の中で動く。

状態の判定には、公式が自分で書いている限界もある。

:::fact
ドキュメント（Agents）によれば、画面を読んで判定するエージェントでは、blockedの検出は「意図的に厳しく」してあり、既知の承認・質問・許可のUIに一致したときだけblockedにする。見たことのない新しいプロンプトは、Herdrがその画面の形を覚えるまでidleと表示されることがある。Codexは、作業中と応答後で画面が同じに見える場合があるため、どのルールにも一致しないときはunknownになる。誤判定が影響するのは表示と待機だけで、Herdrが勝手に入力を送ったり破壊的な操作をしたりする原因にはならない、とドキュメントは説明している。
:::

:::fact
同じドキュメントの対応表には、Claude Code・Codex・GitHub Copilot CLI・Cursor Agent CLI・OpenCode・Pi・Devin CLI・Grok CLIなど18種のエージェントに専用のインテグレーション（`herdr integration install <name>`）がある。インテグレーションはエージェントのセッションをHerdrに伝え、サーバー再起動のあとに同じ会話へ戻れるようにする。OpenCode・Pi・Kimi Code CLI・Kilo Code CLIなどは状態も自分から報告し、その場合Herdrは画面を読む代わりに報告を使う。Amp・Kiro CLI・Gemini CLI・Clineなどは状態の検出のみに対応する。
:::

「何が残り、何が消えるか」を公式が表にしている点も、UXとして大きい。ドキュメント（Session state and restore）によれば、クライアントを切り離すだけならプロセスはそのまま動く。サーバーを再起動すると元のプロセスは失われ、戻るのはレイアウトと作業ディレクトリ、そしてインテグレーションを入れたエージェントの会話だ。READMEも「元のプロセスは残らない」と書いている。期待できる範囲を先に言い切る書き方は、長時間のジョブを預ける道具として誠実だ。

## 技術構成

::techstack

:::fact
v0.9.3のCargo.tomlによれば、Herdrは単一のRustクレート（説明文は「AIコーディングエージェント向けの端末ワークスペース管理」）で、TUIは ratatui と crossterm、非同期処理は tokio、PTYは portable-pty（リポジトリ内に取り込んだ版に差し替え）を使う。端末エミュレーションは、リポジトリ内のクレート ghostty-vt を通じて、同梱した libghostty-vt を呼ぶ。Linuxでは zbus を使ってsystemd-logindのシャットダウン予告を受け取り、ホストが止まる前にセッションを保存する。READMEは「Rustの単一バイナリ、Electronなし」と書く。
:::

:::fact
公式ドキュメント（Socket API）によれば、動いているサーバーはローカルのソケットで制御でき、プロトコルは改行区切りのJSON、UnixではUnixドメインソケット、Windowsでは名前付きパイプを使う。ドキュメント（Agent automation）は操作の単位をレイアウト・ペイン・エージェントの3つに分け、`agent start`（エージェントの起動）、`agent prompt`（プロンプトの送信）、`agent wait`（状態が変わるまで待つ）などのコマンドを用意している。エージェントがすでにblockedのとき、`agent prompt` は端末に何も送らずに `agent_blocked` を返す。プラグインに専用のSDKはなく、公式ドキュメントは「HerdrのCLI全体がプラグインのAPI」だと説明する。
:::

:::fact
公式ブログ（2026-05-27）によれば、Herdrはサーバーのバイナリを入れ替えるあいだもペインのプロセスを生かしておける。子プロセスを動かすのではなく、子プロセスがつながっているPTYのマスター側のファイルディスクリプタを、SCM_RIGHTSでUnixソケット越しに新しいサーバーへ渡す。ドキュメントはこれを `herdr update --handoff` の実験的な機能としており、成功したときに限ってプロセスが動き続ける「ベストエフォート」だと書く。
:::

:::fact
公式ブログ（2026-09-07）によれば、v0.9でHerdrの外枠のUIはクライアント側で描画するようになった。それまでは1つのクライアントが1つのサーバーに接続し、画面はすべてサーバー側で描いていた。サーバーが各自のセッションを持ち続け、クライアントが複数の独立したサーバーを1つのTUIに束ねる形に変えたことで、`herdr machine add <host>` で追加したSSHマシンのワークスペースとエージェントが、手元のものと並ぶ。同じ記事は、エージェント用のCLIはまだ1つのサーバーの中でしか働かず、別のマシンのエージェントは見えないとも書いている。
:::

:::fact
公式ブログ（2026-08-03）によれば、スピナーの廃止、見えていないペインの描画の省略、変化のないフレームの再描画の省略によって、不要な描画が支配的だった負荷では、サーバーと接続中クライアントの合計CPU使用率が89〜95%下がった。エージェント1つだけが作業している状態では、Linuxで1.467%から0.133%、macOSで3.280%から0.265%になったという（いずれもHerdr自身の計測）。
:::

:::guess
Herdrの技術的な賭けは、エージェントを「包む」のではなく「外から読む」ことにあるとみられる。各社のCLIに手を入れず、プロセスと画面の表示から状態を推定するので、対応するエージェントを増やしやすい。その代わり、エージェント側のUIが変わるたびに検出ルールを直す必要があり、公式ブログも検出の修正が頻繁にあると書いている。半年で59回という安定版リリースの多さは、この追従の負荷を映している可能性がある。エージェント側が自分で状態を報告する方式（OpenCodeやPiなど）と、状態を報告するための手順を公開していることは、画面読みへの依存を徐々に減らす狙いと読める。
:::

サイト側は軽い。当サイトの観測（2026-10-01 UTC）では、herdr.dev の応答は `server: cloudflare` で、トップページがsrc属性で読み込むスクリプトはCloudflareのメールアドレス難読化用の1本だけだった。ドキュメントはAstroとStarlightで生成され、英語・日本語・簡体字中国語の3言語がある。エージェントに読ませるための `llms.txt` と、人への説明役を任せるための `agent-guide.md` も置かれている。なお、サイトマップに料金・利用規約・プライバシーポリシーのページはなく、`/pricing` `/terms` `/privacy` を開くとトップページと同じ内容が返ってきた。

## ビジネスモデル

2026年10月1日時点で、Herdrに値段の付いた製品は見当たらない。配っているのはApache 2.0のバイナリとソースコードで、料金ページはない。

:::fact
ライセンスの表記は2度書き換えられ、ライセンスそのものの変更は1度だ。リポジトリのコミット履歴によれば、初版（2026年3月）はAGPL-3.0で、2026年5月26日のコミットで「AGPL-3.0-or-laterと、AGPLに従えない組織向けの商用ライセンス」の二本立てだと明記され、2026年7月22日のコミットでApache 2.0に切り替わった。公式ブログ（2026-08-06）でCan Celikは、切り替えの理由を「誰にでも自由に使ってほしいから」と書き、「いま使っているランタイムは無料のまま、Apache 2.0のまま」と述べている。リポジトリのSPONSORS.mdによれば、スポンサー募集はすでに締め切られ、過去の支援者の一覧だけが残っている。
:::

:::fact
公式サイトは「Herdr Cloud」を近日公開として掲げ、ウェイトリストを受け付けている。説明は「同じマシンを、SSHの設定なしで」「マシンはあなたが用意し、私たちがつなぐ」。公式ブログ（2026-09-07）は、1つのHerdrアカウントでどこのマシンでもつなげるようにすることを1.0に向けた次の目標に挙げている。価格・提供時期・課金の単位は公開されていない。READMEとSPONSORS.mdには、エンタープライズと提携の問い合わせ先としてメールアドレスが載っている。
:::

:::fact
普及の入口は開発者の手元だ。Homebrewの公開統計によれば、herdr の過去30日のインストールは11,925件（2026-10-01取得）。公式ドキュメント（Marketplace）によれば、プラグインの一覧はGitHubのトピック `herdr-plugin` が付いた公開リポジトリを30分ごとに自動で集めたもので、審査はなく、掲載はHerdrによる保証を意味しない。YCの企業ページは、マーケットプレイスが公開から1か月で500件を超えたと書いている。
:::

:::guess
収益の柱は、オープンなランタイムの上に乗る接続サービス（Herdr Cloud）になるとみられる。ランタイムを無料で広く配り、複数のマシンをつなぐ中継とアカウントの部分で課金する形は、公式ブログの「ランタイムは開いたまま、その上に自分も作る」という説明と合う。AGPLと商用ライセンスの二本立てをやめてApache 2.0にしたのは、ライセンス販売ではなくサービスで稼ぐ方向に決めた結果と読める。ただし、価格も提供形態も未公表で、売上に関する公開情報はない。現時点の事業の評価は、利用の広がりと、公式ブログが公表した600万ドルの調達が示す期待に基づくもので、収益の実績に基づくものではない。
:::

:::guess
競合との線引きは、公式の比較ページがそのまま示している。tmuxやZellijは端末を残すがエージェントの状態を知らず、ConductorやEmdashのような管理アプリはワークツリーや差分レビューを扱うがアプリを閉じると作業が止まる、と同ページは整理している。Herdrはこれらを「敵ではなくカテゴリの違い」と書き、ワークツリー管理とは組み合わせて使えるとしている。エージェントを作る各社が自前の遠隔実行や管理画面を強化した場合に、どのCLIでも同じように扱える中立の層がどこまで必要とされ続けるかが、今後の分かれ目になると推測される。
:::

Herdrがやっているのは、新しい画面を作ることではなく、エージェントの居場所を端末の中に固定することだ。1人で始めたプロジェクトが半年で4万スターを集めたことは、その居場所を欲しがっていた開発者の多さを示している。次に問われるのは、無料のランタイムの上に、払ってもらえる接続サービスを載せられるかどうかだ。
