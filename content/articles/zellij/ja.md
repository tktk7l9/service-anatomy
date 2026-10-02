---
service: "Zellij"
title: "寄付と貯金で続けた開発、次は「共有」を売る — Zellijが選んだターミナル多重化の続け方"
description: "Rust製のOSSターミナルワークスペースZellij。WebAssemblyプラグイン、セッション復元、内蔵Webクライアントという設計と、寄付頼みの運営からホスト型セッション共有サービス Zellij.online（クローズドベータ）へ踏み出した資金構造を、公開情報だけで解剖する。"
lead: "ターミナルを分割し、切断しても作業を残す「マルチプレクサ」は、無料で当たり前の道具だ。Zellijはその領域で、UIそのものをWebAssemblyプラグインで組み立てる設計を選び、フルタイム開発を寄付と貯金で支えてきた。2026年8月、メンテナ自身が有料のホスト型サービスを始めると明言した。その構造を解剖する。"
category: dev-tool
tags: [terminal, rust, open-source, webassembly, developer-tools]
publishedAt: "2026-10-01"
updatedAt: "2026-10-02"
lastVerified: "2026-10-02"
serviceUrl: "https://zellij.dev/"
vendor: "zellij-org"
origin: "AT"
heroTheme: "zellij"
scores: { product: 4.0, ux: 4.0, tech: 4.5, business: 2.5 }
techStack:
  - layer: "実装言語"
    name: "Rust"
    confidence: confirmed
    evidence: "GitHub APIの言語別バイト数でRustが約98.0%（12,455,954 / 12,709,524バイト、2026-10-01取得）"
    evidenceUrl: "https://api.github.com/repos/zellij-org/zellij/languages"
  - layer: "プロセス構成"
    name: "Client / server (Protocol Buffers contract)"
    confidence: confirmed
    evidence: "0.44.0のリリース記事に「新しいクライアント/サーバー間の契約をProtocol Buffersで作成し強制した」と記載。リポジトリもzellij-client / zellij-serverのクレートに分かれている"
    evidenceUrl: "https://zellij.dev/news/remote-sessions-windows-cli/"
  - layer: "プラグイン実行環境"
    name: "WebAssembly / WASI (wasmi)"
    confidence: confirmed
    evidence: "zellij-serverのCargo.tomlがwasmi 1.1.0とwasmi_wasiに依存。0.44.0の記事にwasmtimeからwasmiへ移行したと記載"
    evidenceUrl: "https://github.com/zellij-org/zellij/blob/main/zellij-server/Cargo.toml"
  - layer: "非同期ランタイム"
    name: "Tokio"
    confidence: confirmed
    evidence: "0.44.0の記事に非同期ランタイムを単一のtokioへ集約したと記載"
    evidenceUrl: "https://zellij.dev/news/remote-sessions-windows-cli/"
  - layer: "設定・レイアウト記述"
    name: "KDL"
    confidence: confirmed
    evidence: "公式FAQにレイアウトはKDLで書く設定ファイル、設定は config.kdl に保存と記載"
    evidenceUrl: "https://zellij.dev/faq/"
  - layer: "セッション永続化"
    name: "Session resurrection (layout serialization)"
    confidence: confirmed
    evidence: "公式ドキュメントに、各セッションを直列化してユーザーのキャッシュフォルダに保持し、終了やクラッシュ後に再生成できると記載"
    evidenceUrl: "https://zellij.dev/documentation/session-resurrection.html"
  - layer: "リモートアクセス"
    name: "Built-in web server / web client"
    confidence: confirmed
    evidence: "公式ドキュメントに、既定では無効の内蔵Webサーバー（既定 127.0.0.1:8082、ログイントークン認証、127.0.0.1以外ではHTTPS必須）と記載"
    evidenceUrl: "https://zellij.dev/documentation/web-client.html"
  - layer: "公式サイト生成"
    name: "Hugo"
    confidence: confirmed
    evidence: "当サイトの観測で、トップページのHTMLに meta generator「Hugo 0.82.0」（2026-10-01）"
    evidenceUrl: "https://zellij.dev/"
  - layer: "公式サイト配信"
    name: "GitHub Pages (Fastly)"
    confidence: confirmed
    evidence: "当サイトのcurl -sI観測で server: GitHub.com、x-github-request-id、via: 1.1 varnish、x-served-by: cache-nrt-…、x-fastly-request-id（2026-10-01）"
    evidenceUrl: "https://zellij.dev/"
  - layer: "アクセス解析"
    name: "GoatCounter"
    confidence: likely
    evidence: "トップページのHTMLが gc.zgo.at/count.js を読み込んでいる（当サイト観測、2026-10-01）。同じメンテナが運営する zellij.online のプライバシーポリシーはGoatCounterの利用を明記するが、zellij.dev 自体についての明文は確認していない"
    evidenceUrl: "https://zellij.online/privacy/"
sources:
  - label: "Zellij 公式サイト（トップ。ダウンロード、有料ホスト型サービスへの言及）"
    url: "https://zellij.dev/"
    accessedAt: "2026-10-01"
  - label: "Zellij About（設計思想）"
    url: "https://zellij.dev/about/"
    accessedAt: "2026-10-01"
  - label: "Zellij FAQ（機能、対応OS、保守体制、tmux/screenとの関係）"
    url: "https://zellij.dev/faq/"
    accessedAt: "2026-10-01"
  - label: "Zellij.online の説明ページ（運営者、商用であること、資金の考え方）"
    url: "https://zellij.dev/zellij-online/"
    accessedAt: "2026-10-01"
  - label: "Zellij.online（ウェイトリストのランディングページ）"
    url: "https://zellij.online/"
    accessedAt: "2026-10-01"
  - label: "Zellij.online Legal Notice（運営法人 poor.dev GmbH）"
    url: "https://zellij.online/legal/"
    accessedAt: "2026-10-01"
  - label: "Zellij.online Privacy Policy（GitHub Pages、GoatCounter の利用）"
    url: "https://zellij.online/privacy/"
    accessedAt: "2026-10-01"
  - label: "Zellij 0.45.0 リリース記事（ネスト、Kittyグラフィックス、モバイルWeb UI、Zellij.online の告知）"
    url: "https://zellij.dev/news/nested-sessions-kitty-graphics-new-ui/"
    accessedAt: "2026-10-02"
  - label: "Zellij 0.44.0 リリース記事（ネイティブWindows、HTTPS越しのアタッチ、wasmi/tokio移行、Protocol Buffers）"
    url: "https://zellij.dev/news/remote-sessions-windows-cli/"
    accessedAt: "2026-10-01"
  - label: "Zellij 0.43.0 リリース記事（Webクライアント、zellij-no-web）"
    url: "https://zellij.dev/news/web-client-multiple-pane-actions/"
    accessedAt: "2026-10-01"
  - label: "Zellij 0.39.0 リリース記事（セッション復元、Webからのプラグイン読み込み）"
    url: "https://zellij.dev/news/session-resurrection-ui-components/"
    accessedAt: "2026-10-01"
  - label: "Zellij ドキュメント: Session Resurrection"
    url: "https://zellij.dev/documentation/session-resurrection.html"
    accessedAt: "2026-10-01"
  - label: "Zellij ドキュメント: Layouts（リモートURLのレイアウトはコマンドを保留）"
    url: "https://zellij.dev/documentation/layouts.html"
    accessedAt: "2026-10-02"
  - label: "Zellij ドキュメント: Plugins"
    url: "https://zellij.dev/documentation/plugins.html"
    accessedAt: "2026-10-01"
  - label: "Zellij ドキュメント: Plugin API Permissions"
    url: "https://zellij.dev/documentation/plugin-api-permissions.html"
    accessedAt: "2026-10-01"
  - label: "Zellij ドキュメント: Web Client"
    url: "https://zellij.dev/documentation/web-client.html"
    accessedAt: "2026-10-01"
  - label: "Zellij ドキュメント: Installation"
    url: "https://zellij.dev/documentation/installation.html"
    accessedAt: "2026-10-01"
  - label: "GitHub: zellij-org/zellij（README、スポンサー表記）"
    url: "https://github.com/zellij-org/zellij"
    accessedAt: "2026-10-01"
  - label: "GitHub API: zellij-org/zellij（作成日、ライセンス、スター、フォーク）"
    url: "https://api.github.com/repos/zellij-org/zellij"
    accessedAt: "2026-10-01"
  - label: "GitHub API: zellij-org/zellij の言語別バイト数"
    url: "https://api.github.com/repos/zellij-org/zellij/languages"
    accessedAt: "2026-10-01"
  - label: "GitHub: zellij-org/zellij Releases（リリース履歴、配布バイナリ）"
    url: "https://github.com/zellij-org/zellij/releases"
    accessedAt: "2026-10-01"
  - label: "GitHub: GOVERNANCE.md（意思決定の体制）"
    url: "https://github.com/zellij-org/zellij/blob/main/GOVERNANCE.md"
    accessedAt: "2026-10-01"
  - label: "GitHub: zellij-server/Cargo.toml（wasmi 依存）"
    url: "https://github.com/zellij-org/zellij/blob/main/zellij-server/Cargo.toml"
    accessedAt: "2026-10-01"
  - label: "GitHub Sponsors: imsnif（寄付の目標額、スポンサー数）"
    url: "https://github.com/sponsors/imsnif"
    accessedAt: "2026-10-02"
---

ターミナルを分割し、SSHが切れても作業を残す。この種の道具は「ターミナルマルチプレクサ」と呼ばれ、長く無料で配られてきた。Zellijはその領域に2020年に現れたRust製のOSSで、公式サイトは自らを「Terminal Workspace with Batteries Included（電池付きのターミナルワークスペース）」と呼ぶ。この記事は、公開されている文書・リポジトリ・HTTPヘッダーだけを材料にした解剖であり、当サイトが実際に使い込んだうえでの評価ではない。

## サービス解説

Zellijは、手持ちのターミナルエミュレータの中で動き、ペイン・タブ・セッションを管理するソフトウェアだ。公式FAQは「特定のターミナルエミュレータに縛られない」ことを特徴に挙げ、既存のシェルやエディタ、dotfilesをそのまま使えると説明している。

:::fact
GitHub APIによれば、リポジトリ zellij-org/zellij は2020年9月1日に作成され、ライセンスはMIT。2026年10月1日（UTC）の取得時点でスターは35,610、フォークは1,470、言語別バイト数ではRustが約98.0%を占める。リリースは71件あり、最初のタグは2021年1月21日の v0.1.0-alpha、最新は2026年8月28日の v0.45.1 だった。最新リリースの配布物は、Linux（x86_64 / aarch64、musl）、macOS（x86_64 / aarch64）、Windows（x86_64、MSIインストーラ付き）向けに用意されている。
:::

:::fact
公式FAQには、Zellijは Aram Drevekenin 氏がフルタイムで開発しており、コミュニティとスポンサーの支援を受けていると書かれている。同じFAQは「Zellijは常に無料でオープンソースであり続ける」と明記する。リポジトリの GOVERNANCE.md は、同氏を BDFL（終身の慈悲深い独裁者）と位置づけ、財務と協業に関する大きな決定の最終権限と拒否権を持つと定めたうえで、合意による決定を目指すこと、拒否権は最後の手段であることを記している。同文書には現在の組織メンバーとして13名が挙がっている。
:::

FAQには、tmuxやscreenと似た機能を持ちながらも「自らをtmuxやscreenの置き換えとは考えていない」という一文がある。競合の代替を名乗らず、ターミナルの上に作業場を作るという独自の位置づけを取っている点は、製品を読むうえで押さえておきたい。

:::pull
タブバーもステータスバーも、Zellijでは「プラグイン」だ。自分のUIを自分の拡張機構で作ることが、設計の中心にある。
:::

::scorecard

## UX分析

ここで扱うのは、公式文書が説明する設計上の選択であり、当サイトの使用感ではない。

- **覚えなくていい、を最初に置く**。FAQによれば、ステータスバーが使えるショートカットを画面に表示するため、キーを暗記する必要がない。0.43.0では、常時表示の代わりに必要なときだけヒントを出すツールチップも追加された。
- **キー衝突への逃げ道が用意されている**。vimなどと衝突する場合のために、先にロックを解除してから操作する「Unlock-First (non-colliding)」というプリセットが公式に提供されている。
- **フローティングペインとスタックペイン**。重ねて浮かせるペインと、縦に積んで1枚だけ展開するペインを第一級の機能として持つ。0.45.0では、ペインの枠を既定で外してタイトル行だけにする新しい見た目になり、従来の表示へ戻す設定も併記された。
- **壊さないための一拍**。セッション復元時、保存されていたコマンドは即座には実行されず、「Press ENTER to run...」の表示の後ろで待つ。公式ドキュメントはその理由として `rm -rf` のような事故の防止を挙げている。レイアウトの文書によれば、リモートURLから読み込むレイアウトのコマンドも同様に保留される。
- **アップデートの摩擦を消す工夫**。0.45.0では、更新後に出るリリースノート画面が、設定ファイルに足りない新しいキーバインドを検出し、1回のキー操作で追記を提案する。
- **同じセッションに複数人**。FAQは「True Multiplayer」として、複数のユーザーが同じセッションに接続し、それぞれが色の付いた自分のカーソルを持つと説明する。0.45.0では、クライアントごとにタブのサイズを分け、別のタブを見ている人の画面まで縮む挙動を改めた。

対応OSの記載にはページ間で差がある。0.44.0のリリース記事はWindowsでネイティブに動くようになったと述べ、インストール文書にもWindows用バイナリの手順がある一方、FAQの対応OS欄は「Windows: Via WSL」のままだった（2026-10-01時点）。配布物とリリース記事を見るかぎり、ネイティブ対応が現在の姿と読める。

## 技術構成

::techstack

:::fact
プラグインについて、公式ドキュメントは「WebAssembly / WASI のプラグインシステム」であり、「Zellij自身がUIをプラグインから組み立てている」と説明する。FAQは組み込みプラグインとして、タブバーとステータスバー、ファイルピッカーのStrider、セッションマネージャ、複数ペイン選択、設定画面を挙げる。公式にサポートされるプラグイン言語は現時点でRustのみで、ほかの言語はコミュニティの取り組みとされる。プラグインは権限制で、アプリケーション状態の読み書き、コマンド実行、標準入力への書き込み、ペイン内容の読み取り、Webサーバーの操作など14種類の権限が文書に列挙されており、利用者に許可を求める仕組みになっている。
:::

:::fact
0.44.0のリリース記事は、内部の変更として次を挙げている。プラグイン実行環境をwasmtimeからwasmiへ移行したこと（理由はバイナリサイズの削減と移植性の向上とされる）、非同期ランタイムを単一のtokioへ集約したこと、クライアントとサーバーの間の契約をProtocol Buffersで定めたこと。最後の点について同記事は、これまでバージョンを上げるたびに既存セッションが孤立していたが、今後のバージョンは既存セッションに接続できるようになると説明している。
:::

:::fact
セッション復元（0.39.0で導入）は、セッションを人が読めるレイアウトとして直列化し、キャッシュフォルダに保持する仕組みだ。既定で保存されるのはペインとタブの配置、各ペインで動いていたコマンドで、設定によって画面表示とスクロールバックも保存できる。内蔵Webサーバー（0.43.0で導入）は既定で無効で、ログイントークンによる認証を必須とし、トークンはハッシュ化してローカルのデータベースに保存される。127.0.0.1以外で待ち受ける場合は、利用者が用意した証明書によるHTTPSが必須と文書にある。0.44.0では `zellij attach https://…` でターミナルから直接アタッチできるようになり、読み取り専用トークンも加わった。Webサーバー機能を含まない zellij-no-web というビルドも配布されている。
:::

公式サイト自体の構成は質素だ。当サイトの観測では、zellij.dev はHugo 0.82.0で生成された静的サイトで、GitHub Pagesから配信されていた（`server: GitHub.com`、Fastlyのヘッダー）。ドキュメントはmdBookの生成物で、解析スクリプトは `gc.zgo.at/count.js` の1本だった。

:::guess
UIをプラグインとして作る方針は、少人数での開発を成り立たせるための構造とみられる。0.44.0の記事には「新しいUIは組み込みプラグインとして作るのが開発方針」とあり、機能を足すたびに同じAPIが第三者にも開く。本体の開発とエコシステムの整備が同じ作業になるため、専任の人数が限られていても拡張面が自然に広がる設計だと推測される。wasmiへの移行も、ネイティブWindows対応と同じ0.44.0で行われており、対応プラットフォームを増やすための移植性を優先した判断だった可能性がある。
:::

:::guess
内蔵Webサーバー、HTTPS越しのアタッチ、読み取り専用の共有、モバイル向けWeb UIという直近3リリースの流れは、後述のホスト型サービスの土台と重なって見える。ただし、Zellij.onlineがどのような仕組みで中継や暗号化を行っているのかは公開されておらず、OSS本体のWebサーバーと同じ実装を使っているかどうかも当サイトでは確認できていない。
:::

## ビジネスモデル

無料のターミナルマルチプレクサは、どうやって開発者の生活費を賄うのか。Zellijの公開情報は、この問いにかなり率直に答えている。

:::fact
寄付の窓口は、メンテナ個人のGitHub Sponsors、Ko-fi、Liberapayで、リポジトリの FUNDING.yml にこの3つが設定されている。GitHub Sponsorsのページには、月5,000ドルを目標とし、それが「支出との収支が合う」水準であること、現在のスポンサー数は269であることが表示されていた（2026-10-01時点）。同ページで本人は、主に貯金で生活しながら全時間をこの開発に充てていると述べている。READMEにはスポンサーとして G-Research と Terminal Trove などへのリンクが掲載されている。
:::

:::fact
2026年8月20日の0.45.0リリース記事で、メンテナは Zellij.online を開発中だと告知した。公式の説明ページによれば、これはエンドツーエンド暗号化のターミナルセッション共有サービスで、TLS証明書の準備やポート開放なしに、リンクを渡した相手がブラウザ・自分のターミナル・スマートフォンから参加できる。現在はクローズドベータで、ウェイトリストを受け付けている。同ページは「商用であり、Zellijをメンテナンスしているのと同じ人々が運営する」「無料枠のある有料サービス」と明記し、運営者として Aram Drevekenin 氏とZellijチームの他のメンバーを挙げる。zellij.online の Legal Notice に記載された運営法人は、ウィーン所在の poor.dev GmbH（代表は同氏）だ。
:::

:::fact
同じ説明ページは、有料サービスを始めても変えないことを列挙している。Zellijは同じライセンスのまま無料のOSSであり続ける。「community edition」と「pro edition」の区別は設けない。ホスト型サービスを魅力的に見せるために機能を外したり作らずにおいたりはしない。内蔵Webクライアントは全機能のまま残り、自前のインフラでの共有は第一級の経路であり続ける。広告、テレメトリ、データ収集は行わない。Zellijの利用にアカウントは要らない。資金については、開発は継続的な寄付とメンテナの貯金だけで賄われてきたこと、その方式は「機能しているが脆く、必要な作業量に対して伸びにくい」こと、現実的な選択肢は広告・ベンチャーキャピタル・ユーザーデータの販売・サービスの販売であり、最後のものだけがプロジェクトと利用者を損なわないと考えて試していること、Zellij.online はベンチャーキャピタルやプライベートエクイティの資金を受けていないことが書かれている。
:::

公開されていないことも多い。Zellij.online の料金、無料枠の範囲、一般提供の時期は、説明ページにもランディングページにも記載がなかった。寄付の実際の月額、Zellijの利用者数、運営法人の売上や人員も公開情報からは分からない。READMEに載るスポンサー企業の支援額も不明だ。

:::guess
この構造は、OSSの持続可能性をめぐるよくある分岐点を、かなり慎重に渡ろうとしているものとみられる。マルチプレクサは個人の端末で完結する道具で、運営側にサーバー費用が発生しない代わりに、課金の接点もない。寄付は善意に依存する。実際の月額は公開されていないが、スポンサー269という数字と、収支が合う水準として掲げられた月5,000ドルという目標から推し量るかぎり、多くてもフルタイム開発者1人の生計に届くかどうかという規模だと推測される。そこで選ばれたのが、道具そのものではなく「道具の外側にある面倒」、つまり証明書・ポート開放・NAT越えを肩代わりするサービスを売るという形だ。セルフホストの経路を第一級のまま残すと公約しているため、有料版の価値は機能の差ではなく手間の差だけで成り立つ必要がある。
:::

:::guess
難しさも読み取れる。ターミナル共有は毎日使う機能とは限らず、支払う理由が弱くなりやすい領域と考えられる。一方で、0.44.0以降に強化されたCLI自動化（ペイン一覧の取得、キー送信、画面内容の購読）は、人だけでなくスクリプトや外部ツールからセッションを操作する用途を広げており、遠隔から長時間動く作業を見守るといった需要と結びつけば、共有の利用頻度は上がる可能性がある。ただしこれは当サイトの推測で、公式がそうした狙いを述べているわけではない。料金が公開されていない現時点では、この事業が開発を支える規模になるかどうかは判断できない。
:::

スコアは、製品4.0、UX4.0、技術4.5、ビジネス2.5とした。技術は、UIまでプラグインで組む一貫した設計と、互換性・移植性に向けた内部の作り直しを評価した。ビジネスを低めに置いたのは、収益の柱が寄付であり、公式自身がその方式を「脆い」と表現していること、有料サービスがまだクローズドベータで料金も未公開であることによる。事業の質への否定的評価ではなく、現時点で確認できる収益基盤の薄さを反映した数字だ。

無料の道具を作り続けるために、道具の外側で対価を得る。Zellijが公開した説明ページは、その選択の理由と、越えない線を先に書き出している。成否はまだ誰にも分からないが、OSSの資金調達を「あとから知られる」のではなく「先に述べる」形で進めた記録として、読む価値がある。
