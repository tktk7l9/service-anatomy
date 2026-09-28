---
service: "Proton"
title: "広告もVCも持たない暗号化スイート — Protonはクラウドを借りず自前のサーバーと回線を持ち、OpenPGPのライブラリを自ら守りながら、1億アカウントを課金だけで支えている"
description: "暗号化メールのProton Mailと、無料でも通信量の上限がないProton VPN。CERNで構想され、2014年にクラウドファンディングで生まれたスイスのProtonは、ベンチャーキャピタルを持たないまま1億アカウントに達し、2024年に非営利の財団を筆頭株主にした。自ら保守するOpenPGP.jsとGopenPGP、Rustで書いた共通コアとWebAssembly、自前の自律システム番号（AS）とデータセンター、検閲を避けるStealthプロトコル、スイスの監視法改正を受けたインフラの移転、そして最大100%のアフィリエイトまでを、公式ブログ・サポート記事・GitHubのソースコードから解剖する。"
lead: "Protonの公式ブログには、自社をこう説明するくだりがある。ベンチャーキャピタルも、億万長者も、政府も、寄付も当てにせず、ほぼすべての収益を利用者へのサービス販売から得ている——。無料プランを広く配りながら広告を載せず、AWSもGoogle Cloudも使わずに自前のサーバーを並べる。暗号化メールから始まり、VPN・カレンダー・ストレージ・パスワード管理・AIアシスタントへ広がった『プライバシーのスイート』が、どう作られ、どう稼いでいるのかを解剖する。"
category: consumer-app
tags: [privacy, email, vpn, end-to-end-encryption, open-source, security]
publishedAt: "2026-09-28"
updatedAt: "2026-09-28"
lastVerified: "2026-09-28"
serviceUrl: "https://proton.me/"
# Affiliate link placeholder: the owner must join the Proton Partners Program
# (https://proton.me/partners/affiliates) before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<proton-partner-link>"
#   program: "Proton Partners Program"
vendor: "Proton AG"
origin: "CH"
heroTheme: "proton"
scores: { product: 4.5, ux: 4.0, tech: 4.5, business: 4.0 }
techStack:
  - layer: "Webクライアント"
    name: "React 18 + TypeScript + Redux Toolkit + webpack (Yarn workspaces monorepo)"
    confidence: confirmed
    evidence: "公式リポジトリ ProtonMail/WebClients（GPL-3.0）は、Mail・Calendar・Drive・Pass・VPN設定・Wallet・Lumo・Meetなどのアプリと共有パッケージ（@proton/components・@proton/sharedなど）を1つのYarn workspacesに収めたモノレポ。当サイトの確認（2026-09-28）で、Mailアプリのpackage.jsonはreact ^18.3.1・@reduxjs/toolkit・webpack 5に依存し、GitHubの言語統計はTypeScriptが大半を占めた"
    evidenceUrl: "https://github.com/ProtonMail/WebClients"
  - layer: "暗号ライブラリ（Web）"
    name: "OpenPGP.js (Proton fork) via @protontech/crypto"
    confidence: confirmed
    evidence: "公式ブログ（2016-08-02）で、ProtonがOpenPGP.jsの主たる保守者を引き継いだと発表。当サイトの確認（2026-09-28）で、npmの @protontech/crypto（「Proton全体のWebプロジェクト向け暗号ライブラリ」）は openpgp を npm:@protontech/openpgp として依存に持ち、WebClientsのDriveなどがこれを使っていた"
    evidenceUrl: "https://proton.me/blog/openpgpjs-email-encryption"
  - layer: "暗号ライブラリ（Go）"
    name: "GopenPGP"
    confidence: confirmed
    evidence: "公式ブログ（2019-05-15）で、高水準のOpenPGPライブラリGopenPGPと、Goの暗号ライブラリのフォークを公開し、自社のAndroid・iOSアプリ、Bridge、Import-Exportアプリ向けに開発したと説明"
    evidenceUrl: "https://proton.me/blog/openpgp-golang"
  - layer: "Pass共通コア"
    name: "Rust (proton-pass-common) + UniFFI / wasm-pack"
    confidence: confirmed
    evidence: "公式リポジトリ protonpass/proton-pass-common のREADMEに、Android・iOS・Webの全クライアントで使う共通ライブラリを純粋なRustで書き、モバイル向けにはUniFFI、Web向けにはwasm-packで書き出すと明記。テストはRustのコア側にだけ置く"
    evidenceUrl: "https://github.com/protonpass/proton-pass-common"
  - layer: "メールクライアント連携"
    name: "Proton Mail Bridge (Go + Qt/QML)"
    confidence: confirmed
    evidence: "公式リポジトリ ProtonMail/proton-bridge のREADMEに、起動すると手元にIMAP/SMTPサーバーを立ち上げ、既存のメールクライアントからProton Mailを使えるようにすると明記。GitHubの言語統計はGoが最大で、GUI部分にC++とQMLが並ぶ"
    evidenceUrl: "https://github.com/ProtonMail/proton-bridge"
  - layer: "デスクトップアプリ"
    name: "Electron (Proton Mail desktop, electron-forge)"
    confidence: confirmed
    evidence: "WebClientsの applications/inbox-desktop/package.json が、Proton MailとProton Calendarの公式デスクトップアプリとして electron と electron-forge に依存している（当サイトの確認・2026-09-28）"
    evidenceUrl: "https://github.com/ProtonMail/WebClients/tree/main/applications/inbox-desktop"
  - layer: "VPNプロトコル"
    name: "WireGuard / OpenVPN / Stealth (obfuscated TLS over TCP)"
    confidence: confirmed
    evidence: "公式ブログ（2022-10-06）に、Stealthは難読化したTLSトンネルをTCPで流し、VPNの通信を通常のHTTPSに見せかけるプロトコルで、OpenVPNの上に作られた従来の難読化方式より性能が高いと説明。GitHubのProtonVPN組織はwireguard-go・wireguard-apple・wireguard-androidのリポジトリを公開している"
    evidenceUrl: "https://protonvpn.com/blog/stealth-vpn-protocol"
  - layer: "インフラ"
    name: "Self-owned servers and network (AS62371, data centers in CH / DE / NO)"
    confidence: confirmed
    evidence: "公式ブログ「Sustaining Proton's mission over time」（2024-02-15）に、すべてのサーバーとネットワーク機器を自社で所有し、自らISPとして運用し、スイス・ドイツ・ノルウェーのデータセンターを使い、AWS・Google Cloud・Azureに頼らないと明記。当サイトの観測（2026-09-28）で、proton.me・mail.proton.me・account.proton.meはいずれも185.70.42.0番台に解決され、このアドレス帯の経路はAS62371（Proton AG・スイス）から広告されていた"
    evidenceUrl: "https://proton.me/blog/sustaining-mission-over-time"
  - layer: "機能フラグ"
    name: "Unleash"
    confidence: confirmed
    evidence: "WebClientsの packages/unleash（説明「Unleash feature flags」）が @unleash/proxy-client-react と unleash-proxy-client に依存し、Driveなどのアプリがこのパッケージを使う（当サイトの確認・2026-09-28）"
    evidenceUrl: "https://github.com/ProtonMail/WebClients/tree/main/packages/unleash"
  - layer: "決済フォーム"
    name: "Chargebee (isolated payment frame)"
    confidence: likely
    evidence: "WebClientsに、Viteで単体ビルドしindex.htmlを持つ @proton/chargebee というパッケージがある（当サイトの確認・2026-09-28）。決済サービスChargebeeの入力欄を本体と切り離したページとして読み込む構成とみられるが、決済基盤を明言した公式ページは見当たらない"
  - layer: "マーケティングサイト"
    name: "Astro (islands)"
    confidence: likely
    evidence: "当サイトの観測（2026-09-28）で、proton.me のHTMLに <astro-island> 要素が多数含まれていた。レスポンスはserverヘッダーを返さず、配信元は製品本体と同じAS62371のアドレスだった"
sources:
  - label: "Wikipedia: Proton AG（創業・製品の公開年・買収・データセンター・従業員数）"
    url: "https://en.wikipedia.org/wiki/Proton_AG"
    accessedAt: "2026-09-28"
  - label: "Proton公式ブログ: Proton Foundationへの移行（2024-06-17）"
    url: "https://proton.me/blog/proton-non-profit-foundation"
    accessedAt: "2026-09-28"
  - label: "Proton公式ブログ: Sustaining Proton's mission over time（2024-02-15）"
    url: "https://proton.me/blog/sustaining-mission-over-time"
    accessedAt: "2026-09-28"
  - label: "heise online: 監視法改正を受け、Protonがインフラの一部をスイス国外へ移す（2025-08-16）"
    url: "https://www.heise.de/en/news/Surveillance-Proton-relocates-parts-of-its-infrastructure-from-Switzerland-10538664.html"
    accessedAt: "2026-09-28"
  - label: "Proton公式サポート: Protonのプランと料金"
    url: "https://proton.me/support/proton-plans"
    accessedAt: "2026-09-28"
  - label: "Proton VPN公式: 料金ページ"
    url: "https://protonvpn.com/pricing"
    accessedAt: "2026-09-28"
  - label: "Proton VPN公式: 無料VPN"
    url: "https://protonvpn.com/free-vpn"
    accessedAt: "2026-09-28"
  - label: "Proton VPN公式サポート: Secure Core"
    url: "https://protonvpn.com/support/secure-core-vpn"
    accessedAt: "2026-09-28"
  - label: "Proton VPN公式ブログ: Stealthプロトコル（2022-10-06）"
    url: "https://protonvpn.com/blog/stealth-vpn-protocol"
    accessedAt: "2026-09-28"
  - label: "Proton VPN公式ブログ: ノーログポリシーの外部監査"
    url: "https://protonvpn.com/blog/no-logs-audit"
    accessedAt: "2026-09-28"
  - label: "Proton公式ブログ: OpenPGP.jsの保守者に（2016-08-02）"
    url: "https://proton.me/blog/openpgpjs-email-encryption"
    accessedAt: "2026-09-28"
  - label: "Proton公式ブログ: GopenPGPの公開（2019-05-15）"
    url: "https://proton.me/blog/openpgp-golang"
    accessedAt: "2026-09-28"
  - label: "GitHub: ProtonMail/WebClients（Webクライアントのモノレポ）"
    url: "https://github.com/ProtonMail/WebClients"
    accessedAt: "2026-09-28"
  - label: "npm: @protontech/crypto"
    url: "https://www.npmjs.com/package/@protontech/crypto"
    accessedAt: "2026-09-28"
  - label: "GitHub: protonpass/proton-pass-common（Proton PassのRust共通コア）"
    url: "https://github.com/protonpass/proton-pass-common"
    accessedAt: "2026-09-28"
  - label: "GitHub: ProtonMail/proton-bridge（Proton Mail Bridge）"
    url: "https://github.com/ProtonMail/proton-bridge"
    accessedAt: "2026-09-28"
  - label: "Proton公式: Proton Partners Program（アフィリエイト）"
    url: "https://proton.me/partners/affiliates"
    accessedAt: "2026-09-28"
  - label: "Proton公式サポート: 紹介プログラム"
    url: "https://proton.me/support/referral-program"
    accessedAt: "2026-09-28"
  - label: "1Password公式: Affiliate program（比較用）"
    url: "https://1password.com/affiliate"
    accessedAt: "2026-09-28"
---

暗号化メールやVPNは、「中身を見ない」と約束する商売だ。だが無料のメールもVPNも、たいていは広告か、利用者のデータか、投資家のお金で支えられている。Protonはそのどれにも頼らないと公言し、無料プランを配りながら、有料の利用者だけで事業を回している。約束を守る仕組みを、暗号の設計とサーバーの持ち方、そして会社の持ち主にまで埋め込んでいるのが、Protonの特徴だ。

## サービス解説

Protonは、エンドツーエンド暗号化のメールProton Mailを中心に、VPN・カレンダー・クラウドストレージ・パスワード管理・文書作成・AIアシスタントを1つのアカウントで提供する「プライバシーのスイート」だ。個々のサービスを単体で契約することも、全部を束ねたプランを契約することもできる。

:::fact
Wikipediaによれば、Protonはアンディ・イェン、ジェイソン・ストックマン、ウェイ・スンが立ち上げ、2014年5月16日にProton Mailの公開ベータを始めた。本社はスイス・ジュネーブ近郊のプラン＝レ＝ズアットにある。公式ブログは、Protonが「CERNで構想された」と書き、立ち上げ時のクラウドファンディングでは1万人が50万ドル超を寄せたと振り返る。製品はカレンダーのほか、Proton VPN（2017年）、Proton Drive（2022年）、Proton Pass（2023年）、Proton Docs（2024年）、AIアシスタントのLumo（2025年7月）と広がり、2022年4月にメールの別名を作るSimpleLogin、2024年4月にメモアプリのStandard Notesを買収した（いずれもWikipediaによる）。
:::

:::fact
2024年2月15日の公式ブログによれば、Protonのアカウントは1億を超え、従業員は400人超。同年6月17日の公式ブログでは、Proton Mailの最初のクラウドファンディングからちょうど10年の日に、非営利の「Proton Foundation」を筆頭株主にしたと発表した。アンディ・イェン、ジェイソン・ストックマン、ディンチャオ・ルーが自らの株式を寄付して財団に拠出し、Protonは条件が許せば純収益の1%を財団に寄付するとしている。同じブログは、Protonにベンチャーキャピタルの出資者がいないこと、社員が3人から500人に増えたことを記している。
:::

:::pull
無料の利用者を支えるのは、広告でも投資家でもなく、有料の利用者だ。Protonはそれを料金ページではなく、会社の持ち主の仕組みで約束している。
:::

::scorecard

## UX分析

ProtonのUXは、「プライバシーのために不便を我慢させない」ことと、「本当に必要な人には、手間のかかる守りを選ばせる」ことの両立で組み立てられている。

- **無料で、上限なしで試させる**。Proton VPNの無料プランは、通信量と速度の上限がなく、広告も出さないと公式ページが明言する。代わりに同時接続は1台、接続先は自動で選ばれる10か国に限られる。Proton全体の無料プランは、メールアドレス1つ、メール保存容量は最大1GB、Driveは最大5GB（初期はそれぞれ500MBと2GBで、最初の設定を進めると増える）。制限を「量」ではなく「選べる幅」に置き、毎日使える体験のまま有料版との差を見せている。
- **1つのアカウントに束ねる**。最上位の個人向けProton Unlimitedは、500GBのストレージ、15のメールアドレス、独自ドメイン3つ、無制限のメール別名、10台までのVPNを1つの契約にまとめる。メールの利用者にVPNを、VPNの利用者にメールを、追加の登録なしで渡せる。
- **既存のメールソフトを捨てさせない**。Proton Mail Bridgeを起動すると、手元にIMAP/SMTPサーバーが立ち上がり、既存のメールソフトにアカウントを追加するだけでProton Mailを読み書きできる。メールソフトが同期できるのはBridgeが動いている間だけなので、Bridgeはパソコンの起動時に立ち上がる設定が既定で有効になっている。
- **検閲や追跡が厳しい人には、重い守りを選ばせる**。VPNには、通信を普通のHTTPSに見せかけて遮断をかわすStealthプロトコルと、スイス・アイスランド・スウェーデンの自社サーバーを一度経由させるSecure Coreがある。
- **払い方でも身元を明かさずに済む**。Proton VPNの料金ページによれば、支払いはカードやPayPalのほか、アカウントを作った後に現金・銀行振込・ビットコインで買える「Protonクレジット」でもできる。全プランに30日間の返金保証がある。

:::fact
Proton VPNの公式ブログによれば、同社のノーログポリシーは、欧州の監査会社Securitumによる外部監査を2022年から2026年まで5年続けて受けている。2026年の監査は、調べたVPNサーバー基盤が、閲覧履歴・DNSの問い合わせ・接続先・通信内容・利用者を特定できる接続のメタデータを記録している形跡はなかったと結論づけた。監査は、ノーログの方針が全サーバー・全地域・全プランに同じく適用されているかも確認項目に含めている。
:::

## 技術構成

::techstack

:::fact
ProtonのWebクライアントは、GitHubで公開されたモノレポ「WebClients」（GPL-3.0）にまとまっている。Mail・Calendar・Drive・Pass・Wallet・Lumo・Meetといったアプリと、共通のUI部品や暗号・決済・機能フラグのパッケージが、1つのYarn workspacesに並ぶ。当サイトの確認（2026-09-28）では、MailアプリはReact 18・Redux Toolkit・webpack 5で組まれ、機能フラグにはUnleashを使っていた。暗号の土台はOpenPGPだ。公式ブログによれば、Protonは2016年8月にOpenPGP.jsの主たる保守者を引き継ぎ、2019年5月にはGoのOpenPGPライブラリGopenPGPを公開して、自社のモバイルアプリやBridgeに使っている。Proton PassではさらにRustの共通コアを書き、モバイルにはUniFFI、WebにはWebAssemblyとして配っている。
:::

:::fact
公式ブログ「Sustaining Proton's mission over time」は、Protonがすべてのサーバーとネットワーク機器を所有し、自らISPとして運用し、スイス・ドイツ・ノルウェーのデータセンターを使っていると書く。当サイトの観測（2026-09-28）でも、proton.me・mail.proton.me・account.proton.me はいずれもProton AGの自律システム番号AS62371から広告されるアドレスに解決された。VPNのSecure Coreについて公式サポートは、サーバーを自社で所有してオフィスから直接発送し、スウェーデンでは地下のデータセンター、アイスランドでは旧軍事基地に置き、自社のLIR（ローカルインターネットレジストリ）が持つIPアドレスで接続していると説明する。
:::

:::fact
heise onlineによれば、スイスでは通信監視令（VÜPF）の改正案が、利用者5,000人以上のオンラインサービスにも利用者の本人確認と、IPアドレスなどのメタデータの6か月保存を求める内容になっている。Protonは2025年8月、この法的な不確実性を理由に、物理インフラの大半をスイス国外へ移し始めたと認め、AIアシスタントLumoのサーバーをドイツに置き、ノルウェーにも拠点を設けているとした。一方で同社は「欧州に投資することは、スイスを離れることを意味しない」とも述べている。
:::

:::guess
ProtonがOpenPGP.jsやGopenPGPを自ら保守しているのは、暗号化メールの相互運用性を、他社のライブラリの都合に委ねないためとみられる。PGPは他のメールソフトとも暗号化メールをやりとりできる標準で、その実装を持っている会社が、仕様の更新や脆弱性への対応を自分の速さで進められる。ブラウザではJavaScript、モバイルとBridgeではGo、PassではRustと、言語ごとに別の実装を持つのは重い投資だが、「サーバーを信用しなくていい」という約束は、クライアントの暗号実装の質にそのまま依存する。そこを外注しないことが、製品の信頼性の中核になっていると推測される。
:::

:::guess
自前のサーバーと回線を持つ判断は、コストよりも「法域の選択肢」を買う意味が大きいとみられる。クラウドを借りていれば、データを置く国は事業者の都合にも左右される。自社の機材と自社のアドレス帯を持っていれば、スイスの法改正に合わせてドイツやノルウェーへ動かすことも、自分の判断で進められる。Lumoを最初にドイツへ置いた動きは、その選択肢を実際に使った例と推測される。
:::

## ビジネスモデル

Protonの収益は、個人・家族・法人向けのサブスクリプションでできている。広告は載せず、無料プランの費用は有料の利用者が負担する。

:::fact
Protonの公式サポートによれば、Mail Plusは月4.99ユーロ（年払いなら月3.99ユーロ）、全サービスを束ねるProton Unlimitedは月12.99ユーロ（年払いなら月9.99ユーロ）、2人用のDuoは月19.99ユーロ、6人までのFamilyは月29.99ユーロ、最上位のVisionaryは月39.99ユーロ。Proton VPNの無料ページは、無料のサービスは有料の利用者に支えられていると明記する。2024年2月の公式ブログは、収益のほぼすべてを利用者へのサービス販売から黒字で得ていること、10年間値上げしていないこと、ベンチャーキャピタルの出資者がいないことを挙げ、これまでに270万ドル超を理念の近い団体に寄付したと書いている。
:::

:::fact
公式の「Proton Partners Program」のページによれば、アフィリエイトの報酬は、新規の有料契約に対してProton VPNの1か月プランが100%、1〜2年プランが40%、Proton Mailが30%、Proton Drive・Pass・Lumoが30%で、更新時の支払いにも全製品で30%が付く。報酬は翌月30日に銀行振込で支払われ、100ドルに満たない場合は超えるまで繰り越される。利用者どうしの紹介プログラムも別にあり、紹介した側とされた側の紹介された人が対象の有料プランを契約すると双方に20ドル分のクレジットが付く（紹介する側が受け取れるのは合計1,000ドル分まで）。比較として、1Passwordのアフィリエイトは、サインアップ1件2ドルと、最初の1年分または1か月分の支払いの25%だ。
:::

:::guess
VPNの1か月プランに100%を払うのは、VPNが「解約されやすく、比較サイト経由で選ばれやすい」商品だからとみられる。VPNの比較記事やレビュー動画は、紹介料の高い事業者を上位に並べやすい。最初の1か月分をまるごと渡してでも入口の記事で選ばれ、その後の更新にも30%を払い続けることで、長く使う利用者を紹介した媒体ほど得をする仕組みになっていると推測される。更新にも報酬が付く点は、最初の支払いにだけ報酬を結びつける1Passwordとは対照的だ。
:::

:::guess
一方で、無料プランを広く配り、広告を載せず、自前のインフラを持つモデルは、有料への転換率に強く依存する。1億アカウントの大半は無料の利用者とみられ、その費用を有料の利用者が負担し続けられるかが事業の要になる。VPN・パスワード管理・ストレージ・AIと製品を増やし、Unlimitedで束ねて単価を上げる動きは、1人あたりの支払額を増やして、この負担を薄める戦略と推測される。
:::

Protonが売っているのは、暗号化されたメールやVPNそのものより、「誰にも中身を見せない」という約束を、裏切りにくい形で持っていることだ。暗号の実装を自ら保守し、サーバーと回線を自ら持ち、会社の持ち主を財団にする。どれも短期の利益には遠回りだが、プライバシーを売る事業では、その遠回りこそが商品になる。スイスの法改正に合わせてインフラを動かし始めた今、その約束が国境をまたいでどう守られていくかが、次の試金石になる。
