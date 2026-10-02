---
service: "Ghostty"
title: "売れない構造を先に作る — Ghosttyは収益モデルを持たないまま、非営利の器と公開台帳でターミナルを公共インフラにしようとしている"
description: "Ghosttyは、Zigで書いた共有コアlibghosttyの上に、macOSではSwift、LinuxではGTK4の画面を載せたターミナルエミュレータだ。2024年12月に1.0を公開し、2025年12月に非営利団体Hack Clubの財務スポンサーシップへ移って、名称と商標を団体に譲渡した。料金も有料版もなく、資金は寄付で、台帳は取引1件ごとに公開されている。公式ドキュメント、GitHubリポジトリ、作者Mitchell Hashimoto氏の文章、公開台帳から、技術構成と、収益モデルを持たないプロジェクトの続け方を解剖する。"
lead: "ターミナルは無料で手に入るのが当たり前の道具だ。Ghosttyはそこに料金表を足さず、逆に「売れない・転用できない」構造を法的に固める方を選んだ。作者が最大の寄付者でありながら、作者自身は1セントも受け取らないと明記し、入出金を1件ずつ公開する。速さやネイティブな画面より先に、この資金と統治の設計が、ほかの開発者向けツールとのいちばん大きな違いになっている。"
category: dev-tool
tags: [terminal, open-source, zig, nonprofit, developer-tools]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://ghostty.org/"
vendor: "Ghostty（財務スポンサー: Hack Club）"
origin: "US"
heroTheme: "ghostty"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 3.5 }
techStack:
  - layer: "共有コア"
    name: "Zig (libghostty)"
    confidence: confirmed
    evidence: "公式Aboutに、中核はC ABI互換のクロスプラットフォームライブラリlibghosttyで、端末エミュレーション・フォント処理・描画を担うと明記。GitHubの言語統計ではZigが約78%（2026-10-01取得）"
    evidenceUrl: "https://ghostty.org/docs/about"
  - layer: "macOSアプリ"
    name: "Swift (AppKit / SwiftUI)"
    confidence: confirmed
    evidence: "公式Aboutに、macOSのGUIはSwiftで書かれAppKitとSwiftUIを使い、libghosttyのC APIにリンクすると明記"
    evidenceUrl: "https://ghostty.org/docs/about"
  - layer: "Linuxアプリ"
    name: "GTK4"
    confidence: confirmed
    evidence: "公式Aboutに、LinuxのGUIはZigで書かれGTK4のC APIを使うと明記（任意でAdwaita）"
    evidenceUrl: "https://ghostty.org/docs/about"
  - layer: "描画（macOS）"
    name: "Metal"
    confidence: confirmed
    evidence: "公式Featuresに、macOSではMetalで端末画面を描画すると明記"
    evidenceUrl: "https://ghostty.org/docs/features"
  - layer: "描画（Linux）"
    name: "OpenGL"
    confidence: confirmed
    evidence: "公式Featuresに、LinuxではOpenGLで端末画面を描画すると明記"
    evidenceUrl: "https://ghostty.org/docs/features"
  - layer: "組み込みライブラリ"
    name: "libghostty-vt"
    confidence: confirmed
    evidence: "公式READMEに、ZigとCから使え、macOS・Linux・Windows・WebAssemblyに対応すると明記。バージョンのタグはまだ付いておらず、APIのシグネチャは変動中とも書かれている"
    evidenceUrl: "https://github.com/ghostty-org/ghostty"
  - layer: "設定"
    name: "Plain-text config (key = value)"
    confidence: confirmed
    evidence: "公式Configurationに、独自の単純なkey = value構文のテキストファイルで設定し、現時点ではそれが唯一の設定手段と明記"
    evidenceUrl: "https://ghostty.org/docs/config"
  - layer: "クラッシュレポート"
    name: "Sentry envelope format"
    confidence: confirmed
    evidence: "公式READMEに、クラッシュレポートはSentryのenvelope形式で端末内に保存され、自動では外部へ送信されないと明記"
    evidenceUrl: "https://github.com/ghostty-org/ghostty"
  - layer: "CI基盤"
    name: "Namespace"
    confidence: confirmed
    evidence: "公式のFinancial Supportページに、NamespaceがGhosttyのCI基盤すべてを提供していると明記（2023年から）"
    evidenceUrl: "https://ghostty.org/docs/sponsor"
  - layer: "公式サイト"
    name: "Next.js"
    confidence: confirmed
    evidence: "公式サイトのリポジトリのpackage.jsonにnext ^16.1.6とreact 19.2.4。応答ヘッダーにもx-nextjs-prerender: 1（当サイトの観測、2026-10-01）"
    evidenceUrl: "https://github.com/ghostty-org/website/blob/main/package.json"
  - layer: "公式サイト配信"
    name: "Vercel"
    confidence: confirmed
    evidence: "当サイトによるHTTPヘッダー観測（server: Vercel・x-vercel-cache: HIT・x-vercel-id: hnd1::…、2026-10-01）"
    evidenceUrl: "https://ghostty.org/"
  - layer: "DNS"
    name: "Cloudflare DNS"
    confidence: likely
    evidence: "当サイトの観測でghostty.orgのNSレコードがliv.ns.cloudflare.com / oswald.ns.cloudflare.com（2026-10-01）。配信そのものはVercel"
sources:
  - label: "Ghostty公式: About（fast・feature-rich・nativeの3条件、libghostty、余暇のプロジェクトであること）"
    url: "https://ghostty.org/docs/about"
    accessedAt: "2026-10-01"
  - label: "Ghostty公式: Features（対応プラットフォーム、Metal/OpenGL、Windowsは将来対応予定）"
    url: "https://ghostty.org/docs/features"
    accessedAt: "2026-10-01"
  - label: "Ghostty公式: Configuration（ゼロ設定の方針、key = value構文、設定GUIは将来の予定）"
    url: "https://ghostty.org/docs/config"
    accessedAt: "2026-10-01"
  - label: "Ghostty公式: Binaries and Packages（公式バイナリはmacOSのみ、Linuxはディストリビューションが配布）"
    url: "https://ghostty.org/docs/install/binary"
    accessedAt: "2026-10-01"
  - label: "Ghostty公式: Release Notes（1.0.1〜1.3.1の公開日一覧）"
    url: "https://ghostty.org/docs/install/release-notes"
    accessedAt: "2026-10-01"
  - label: "Ghostty公式: 1.3.0リリースノート（2026-03-09、180人・2,858コミット、スクロールバック検索ほか）"
    url: "https://ghostty.org/docs/install/release-notes/1-3-0"
    accessedAt: "2026-10-01"
  - label: "Ghostty公式: Financial Support（Hack Clubの財務スポンサーシップ、資金の使途、時給60ドル、BDFL、手数料7%）"
    url: "https://ghostty.org/docs/sponsor"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Ghostty Is Now Non-Profit（2025-12-03）"
    url: "https://mitchellh.com/writing/ghostty-non-profit"
    accessedAt: "2026-10-01"
  - label: "HCB: Ghosttyの公開台帳（残高・累計調達額・取引一覧）"
    url: "https://hcb.hackclub.com/ghostty"
    accessedAt: "2026-10-01"
  - label: "GitHub: ghostty-org/ghostty（README・ロードマップ・MITライセンス・スター数・言語統計）"
    url: "https://github.com/ghostty-org/ghostty"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Libghostty Is Coming（2025-09-22）"
    url: "https://mitchellh.com/writing/libghostty-is-coming"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Ghostty 1.0 is Coming（2024-10-22）"
    url: "https://mitchellh.com/writing/ghostty-is-coming"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Ghostty: Reflecting on Reaching 1.0（2024-12-26）"
    url: "https://mitchellh.com/writing/ghostty-1-0-reflection"
    accessedAt: "2026-10-01"
  - label: "Mitchell Hashimoto: Ghostty Is Leaving GitHub（2026-04-28）"
    url: "https://mitchellh.com/writing/ghostty-leaving-github"
    accessedAt: "2026-10-01"
  - label: "GitHub: ghostty-org/website（公式サイトのソース・package.json）"
    url: "https://github.com/ghostty-org/website/blob/main/package.json"
    accessedAt: "2026-10-01"
---

開発者向けツールの記事は、たいてい料金表の読み解きで終わる。Ghosttyにはその料金表がない。有料版も、チーム向けプランも、クラウド機能もない。あるのは、MITライセンスのソースコードと、寄付の受け皿になっている非営利の枠組みと、取引1件ごとに公開された台帳だ。この記事では、公開情報だけを材料に、Ghosttyが何を作り、どう続けようとしているのかを見ていく。なお、当サイトはGhosttyを実際に使った評価はしていない。動作や速度に関する記述は、すべて公式の文書に書かれている内容の紹介である。

## サービス解説

Ghosttyは、macOSとLinuxで動くターミナルエミュレータだ。公式の説明は「速く、機能が豊富で、プラットフォームネイティブなUIとGPUアクセラレーションを使うクロスプラットフォームのターミナル」である。作者は、HashiCorpの共同創業者として知られるMitchell Hashimoto氏だ。

:::fact
公式のAboutページは、既存のターミナルが「速さ・機能・ネイティブなUI」のうち2つまでしか選ばせてくれないと述べ、Ghosttyは3つすべてで競争力を持つことを目標にしたと説明している。同じページで作者は、どの分野でも「最高」だと主張するつもりはないと断っている。また、Ghosttyは作者が余暇に取り組む「passion project」であり、関わっている誰にとってもフルタイムの仕事ではない、とも書かれている。
:::

:::fact
作者の文章によると、開発は2022年にZigとグラフィックスプログラミングを学ぶ目的で始まり、公開するつもりはなかった。約2年の非公開ベータを経て、最初の公開版を1.0として2024年12月に出した。ベータ終了時点の利用者は約5,000人、Discordの参加者は約28,000人だったという。その後は1.1.0（2025年1月30日）、1.2.0（2025年9月15日）、1.3.0（2026年3月9日）と続き、当サイトが確認した時点の最新版は1.3.1（2026年3月13日）だった。
:::

GitHubのリポジトリは2022年3月29日に作られている。当サイトが2026年10月1日にGitHubのAPIで確認した時点で、スターは61,764、フォークは3,551、ライセンスはMIT、コントリビューターは約420人だった。1.3.0のリリースノートは、6か月分の作業として180人・2,858コミットを挙げている。READMEには「安定しており、毎日数百万の人とマシンに使われている」という記述があるが、これはプロジェクト側の自己申告で、計測方法は示されていない。

:::pull
料金表のない製品を解剖すると、残るのは「誰が持っていて、誰が決めて、お金がどこへ行くか」という問いだけになる。Ghosttyはその3つすべてに文書で答えている。
:::

::scorecard

## UX分析

実機での操作評価はしていないので、ここでは公式の文書が示している設計方針を読む。

- **OSの流儀に合わせる**。公式は「ネイティブ」を、その環境のアプリとして期待どおりに見え、動くことだと定義している。タブや分割、エラー表示にはOS標準の部品を使い、既定のキー割り当てもmacOSとLinuxで変えている。macOSではQuick Look、セキュア入力、再起動時のウィンドウ復元、AppleScriptに対応すると書かれている。
- **設定なしで始められる**。公式は「Zero Configuration Philosophy」を掲げ、既定のフォント（JetBrains Mono）とNerd Fontsを同梱している。テーマのような好みの問題以外で設定が必要になったら、それは既定値にすべきかもしれないので議論を立ててほしい、とまで書いている。
- **設定はテキストファイル1つ**。構文は独自の`key = value`で、すべてのキーがそのままコマンドライン引数にもなる。複数ファイルへの分割と、実行中の再読み込みもできる。一方で、設定用のGUIは「将来の予定」とされ、現時点ではテキストが唯一の手段だと明記されている。
- **シェル統合を自動で差し込む**。bash、elvish、fish、nushell、zshに対して統合スクリプトを自動で注入し、プロンプト間の移動やコマンド出力の選択などを使えるようにする。macOS付属のbashだけは自動注入に対応せず、手動の設定が必要だと書かれている。
- **入口はプラットフォームで差がある**。公式が配布するバイナリはmacOS版だけで、macOS 13以降が必要だ。Linuxは各ディストリビューションのパッケージに頼る形で、それらはGhosttyプロジェクトとは無関係に作られていると明記されている。

:::fact
1.3.0のリリースノートは、要望の多かった機能として、スクロールバック検索、OS標準のスクロールバー、シェルのプロンプト内をクリックしてカーソルを動かす機能、長時間コマンドの終了通知、tmuxのようなモードを作れるキーテーブルを挙げている。検索は専用スレッドで動き、端末の入出力と並行して進むと説明されている。
:::

対応していないものも公式に書かれている。Windowsは「将来対応する予定」とされ、当サイトの確認時点でダウンロードページにWindows版はなかった。文字の扱いについては、アラビア語やヘブライ語の個々の書記素は正しく描画するが、対応しているのは左から右への文章だけだと明記されている。ロードマップの6番目にある「Ghostty独自の制御シーケンス」は未着手で、端末の世界をこれ以上分断したくないので慎重になっている、という理由が添えられている。

:::guess
設定をテキストに寄せ、画面の部品はOSに任せるという分担は、ターミナルを日常的に使う開発者という利用者像にかなり絞り込んだ設計とみられる。設定GUIがまだないことは初めての人には段差になりうるが、既定値を磨いて「設定しなくてよい」状態を先に作るという順序は、その段差を別の方法で低くしようとしているものと推測される。
:::

## 技術構成

::techstack

:::fact
公式のAboutによれば、Ghosttyの中核はlibghosttyという、C ABI互換のクロスプラットフォームライブラリで、端末エミュレーション、フォント処理、描画を受け持つ。macOSアプリはSwiftで書かれ、AppKitとSwiftUIを使ってlibghosttyのC APIにリンクする。LinuxアプリはZigで書かれ、GTK4のC APIを使う。描画はmacOSがMetal、LinuxがOpenGLだ。作者は1.0の振り返りで、コードの90%以上をプラットフォーム間で共有できていると書いている。
:::

:::fact
READMEは、端末1つにつき読み取り・書き込み・描画の専用スレッドを持つマルチスレッド構成と、CPU固有のSIMD命令を使うパーサーを、性能を支える設計として挙げている。性能についての公式の言い方は控えめで、Aboutには「最速クラスのターミナルと同じ部類に入ることを目指す。あるベンチマークでは速く、別のベンチマークでは遅い」とあり、詳しいベンチマークは将来提供したいと書かれている。当サイトは具体的な測定名と手順が示された数値を確認できなかったため、速度の数値はここに載せない。
:::

:::fact
作者は2025年9月の文章で、libghosttyを小さなライブラリ群に分けて提供する計画を示した。最初の1つがlibghostty-vtで、端末の制御シーケンスの解析と状態の保持だけを担い、libcにも依存しない。READMEは、これがZigとCから使え、macOS・Linux・Windows・WebAssemblyに対応すると説明している。一方で、バージョンのタグはまだ付いておらず、APIのシグネチャは変動中だとも書かれている。
:::

Linux版は2025年8月に書き直されている。作者の文章によると、GTKのオブジェクトシステム（GObject）をZigから正面から使う形に改め、Valgrindで検証しながら進めたという。READMEは、Linux版がsystemdと連携し、単一インスタンスでの新規ウィンドウやcgroupによる分離に使うとも述べている。

公式サイトの側は、ごく普通のWebの構成だ。当サイトが2026年10月1日に`curl -sI https://ghostty.org/`で観測した応答には、`server: Vercel`、`x-vercel-cache: HIT`、`x-nextjs-prerender: 1`が含まれていた。サイトのソースも公開されており、`package.json`にはNext.js 16系とReact 19.2.4が並ぶ。ドキュメントの各ページには「Edit on GitHub」のリンクがある。

:::guess
アプリ本体より先にライブラリの設計が語られている点は、Ghosttyの重心が「1つのターミナルアプリ」より「端末機能の共通部品」に置かれていることを示しているとみられる。作者は、エディタやCIのログ表示、ホスティングのコンソールがそれぞれ端末エミュレーションを独自に実装している現状を挙げ、共有できる部品が要ると論じている。Windowsアプリが未提供でも、libghostty-vtが先にWindowsとWebAssemblyへ対応しているのは、この優先順位の表れと推測される。
:::

## ビジネスモデル

Ghosttyには収益モデルがない。売るものがなく、資金は寄付で、その受け皿が非営利の枠組みになっている。ここでは、公開されている範囲で「どう続けるのか」を整理する。

:::fact
作者は2025年12月3日、Ghosttyが米国の501(c)(3)非営利団体Hack Clubの財務スポンサーシップ（fiscal sponsorship）の下に入ったと発表した。独自の法人を作ったのではなく、既存の非営利団体が免税資格をプロジェクトに及ぼす仕組みである。同じ文章で、Ghosttyに関する名称・商標・知的財産はHack Clubへ譲渡され、著作権は従来どおり各コントリビューターが持ち、ライセンスはMITのまま変わらないと説明されている。寄付の7%は、管理費としてHack Clubに渡る。
:::

:::fact
公式のFinancial Supportページは、資金の使途を3つに限っている。コントリビューターへの報酬、サービス費用（サイトのホスティング、Discordボット、CI、コード署名など）、依存している上流プロジェクトへの支援だ。報酬は招待制の契約で、全員が同じ時給60ドル。作者のMitchell Hashimoto氏は最大の寄付者であり、作者本人や関連するプロジェクトには1セントも支払われないと明記されている。統治はBDFLモデルのままで、作者が資金の使い道を含む最終決定権を持ち、Hack Clubの理事会が非営利の目的と法令に沿っているかを監督する。
:::

:::fact
入出金はHCB（Hack Clubの会計基盤）で公開されている。当サイトが2026年10月1日にHCBの公開APIで確認した時点で、残高は35,767.13ドル、累計の調達額は79,055.55ドルだった。台帳には、個人からの少額の寄付、週ごとのスポンサーシップ手数料、サービス料金の支払い、コントリビューターへの送金が1件ずつ並んでいる。CI基盤は、Namespaceが2023年から提供していると公式ページに書かれている。
:::

独自の非営利法人を作らなかった理由も説明されている。法人の設立と維持にかかる費用より7%の手数料の方が安いこと、501(c)(3)の認定には数か月から数年かかりうること、既存団体の下に入れば会計と法令順守の監督が初日から付くこと、そして手数料が営利の管理会社ではなく別の非営利団体に渡ること、の4点だ。作者は、この枠組みが比較的新しく、どの上流プロジェクトをどう支援するかなどの手続きはまだ整えている途中だとも書いている。

運営の土台についても動きがある。作者は2026年4月28日、プロジェクトをGitHubから移すと発表した。理由として挙げたのは、作業が止まる日が続いたという作者自身の経験で、移行先は数か月かけて決めること、GitHubには読み取り専用のミラーを残す予定であることが書かれていた。当サイトが2026年10月1日に確認した時点では、GitHub上でプルリクエストのマージが続いており、作者の文章一覧に移行先を告げる続報は見当たらなかった。

:::guess
この構造は、収益を作るためではなく、収益化の可能性を自分から閉じるための設計とみられる。作者は、将来の方針転換（いわゆるrug pull）への懸念を消すことを非営利化の理由の1つに挙げている。開発者向けツールでは、人気が出たあとにライセンスや料金が変わる例が繰り返し話題になってきた。商標を団体へ移し、資金を私的に使えない形にしたことは、利用者と、libghosttyを自社製品に組み込む側の両方に向けた約束として働いていると推測される。
:::

:::guess
一方で、持続性の面では作者個人への依存がまだ大きいとみられる。作者自身が、最大の寄付者が自分である現状を「異例に恵まれた立場」と表現し、もっと広い支援者に支えられる将来を望むと書いている。累計の調達額と時給60ドルの契約という数字から見ると、現在の資金規模は、少人数に限られた時間の報酬を払う水準と推測される。作者なしでも続く体制になるかどうかは、寄付の広がりと、libghosttyを使う企業が資金面で関わるかどうかに左右されそうだ。資金目標や予算は、作者が今後示すとしており、当サイトの確認時点では、公式のFinancial Supportページと作者の発表文に見当たらなかった。
:::

## 編集部の見立て

スコアは、製品4.5、UX 4.0、技術4.5、事業3.5とした。製品は、3つの条件を同時に満たすという目標が明確で、1.0以降もリリースが続いている点を評価した。Windows版がないことと、リリースの間隔が半年単位であることを差し引いている。UXは、OSごとの流儀に合わせる方針と設定なしで使える既定値を評価しつつ、設定GUIがないことと、右から左への文章に未対応であることを差し引いた。当サイトは実機で試していないので、この点数は公開された設計方針に対するものだ。技術は、共有コアとネイティブな画面の分離、そしてそのコアをライブラリとして外へ出す構想を評価した。libghosttyにまだバージョンが付いていない点は減点している。

事業の3.5は、収益がないことへの減点ではない。売れない構造、作者が受け取れない仕組み、取引単位の公開台帳は、信頼の設計としては高い水準にある。そのうえで、資金の出どころが作者に偏っていること、資金目標と予算を当サイトが確認できなかったこと、枠組みができて1年に満たないことを、持続性の不確かさとして反映した。

料金表のない製品にも、事業の設計はある。Ghosttyのそれは、何を売るかではなく、何を売れなくするかを先に決めることだった。
