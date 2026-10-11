---
service: "MillenVPN"
title: "mixhostの会社が売る「日本の法令に基づくクリーンなVPN」 — 記録しないものを接続方式ごとに書き分け、2026年に固定IPを足し、紹介をA8.netに任せるMillenVPNを解剖する"
description: "MillenVPN（ミレンVPN）は、レンタルサーバーのmixhostを運営する大阪のアズポケット株式会社（2016年4月設立）のVPNだ。1つの契約で、専用アプリでつなぐMillenVPN、アプリなしでつなぐMillenVPN Native（IKEv2）、通信制限の厳しい国からの接続を想定したMillenVPN Native OpenConnectの3つが使え、2年プランは初回だけ月396円（税込）、更新後は月950円（税別）になる。7日からのワンタイムプラン、法人向けの専用サーバー、2026年8月に始めた固定IPオプションも並ぶ。公式サイトは世界140か所以上・2,000台以上のサーバーをうたい、サーバーリストの144か所のうち56か所には「仮想環境」の注記が付く。料金、サーバーリスト、プライバシーポリシー、利用規約、公正利用ポリシー、返金保証、リリースノート、ニュース、会社概要、アプリストアの掲載情報、当サイトの実観測から、記録しない範囲を接続方式ごとに書き分けたノーログの中身、アプリとそれ以外で分かれるサーバーの層、初回の割引と更新価格の二段の値付け、A8.netと友達招待で客を集める仕組みまでを解剖する。"
lead: "MillenVPNのトップページには、「日本の法令に基づくクリーンなVPN」と「通信内容や使用状況を追跡しないノーログポリシー」が並ぶ。日本で届け出た電気通信事業者が運営するということは、通信の秘密を守る約束であると同時に、裁判所の命令や法令に基づく照会に応じる立場でもある。2026年8月25日、固定IPオプションを売り出したその日に、MillenVPNはプライバシーポリシーを書き足し、どの接続方式で何を記録し、何を記録しないかを分けて示した。mixhostを運営する大阪の会社がVPNをどう作り、どう稼いでいるのかを、公開情報だけで解剖する。"
category: consumer-app
tags: [vpn, privacy, security, subscription, small-business]
publishedAt: "2026-10-11"
updatedAt: "2026-10-11"
lastVerified: "2026-10-11"
serviceUrl: "https://millenvpn.jp/"
# Affiliate link placeholder: MillenVPN distributes its ads through the A8.net affiliate network
# (https://millenvpn.jp/affiliate/, checked 2026-10-11: register with A8.net, search for MillenVPN and
# apply; the page advertises a reward of up to 3,500 yen per contract and publishes no per-plan table).
# The top page also loads tracking scripts from h.accesstrade.net, t.afi-b.com and link-ag.net, and the
# refer-a-friend page mentions "each ASP", so other networks may carry the program too; the affiliate page
# itself names only A8.net. A8.net is an ASP whose ad code must be used as provided: copy the link to
# affiliate.url, the 1x1 impression image to affiliate.impressionUrl, and the text ad verbatim to
# affiliate.label. Never invent the label — ask the owner for the material's exact text. Keep every field
# identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://px.a8.net/svt/ejp?a8mat=<millenvpn-material>"
#   program: "MillenVPN Affiliate Program (A8.net)"
#   impressionUrl: "https://www18.a8.net/0.gif?a8mat=<millenvpn-material>"
#   label: "<verbatim text of the ad material>"
vendor: "アズポケット株式会社"
origin: "JP"
heroTheme: "millenvpn"
scores: { product: 3.5, ux: 3.5, tech: 3.0, business: 3.0 }
techStack:
  - layer: "アプリ接続のプロトコル"
    name: "WireGuard / IKEv2 / OpenVPN (MillenVPN app)"
    confidence: confirmed
    evidence: "公式のサービス比較のページ（2026-10-11確認）に、MillenVPNアプリの対応プロトコルはWireGuard、IKEv2、OPENVPNと明記。リリースノートによれば、WireGuardにはWindows版が2023年7月、iOS版が2024年2月に対応し、macOS版は2025年9月の2.0.0でIKEv2・IPSec・WireGuardを選べるようにした"
    evidenceUrl: "https://millenvpn.jp/millenvpn-and-millenvpnnative/"
  - layer: "アプリ不要の接続"
    name: "IKEv2 (MillenVPN Native) / OpenConnect (MillenVPN Native OpenConnect)"
    confidence: confirmed
    evidence: "同じ比較のページに、MillenVPN NativeはIKEv2、MillenVPN Native OpenConnectはOpenConnectと明記。Nativeは専用アプリを使わず端末のVPN設定でつなぎ、OpenConnectは別途アプリを入れて、中国などの通信制限が厳しい国からの接続でも制限されにくいとする。日本のサーバーはどちらも東京と大阪"
    evidenceUrl: "https://millenvpn.jp/millenvpn-and-millenvpnnative/"
  - layer: "クライアントアプリ"
    name: "Windows / macOS / Android / Android TV / iOS / Fire tablet / Fire TV Stick"
    confidence: confirmed
    evidence: "公式のダウンロードのページ（2026-10-11確認）に、Windows版とmacOS版のインストーラー、Google PlayのAndroid・Android TV版、App StoreのiOS版、AmazonアプリストアのFireタブレット版とFire TV Stick版を掲載。Fire TV Stick版はVega OSでは使えないと注記する"
    evidenceUrl: "https://millenvpn.jp/app/"
  - layer: "アプリ接続の基盤"
    name: "WLVPN (white-label VPN platform, presumed)"
    confidence: likely
    evidence: "Google Playのアプリのパッケージ名が com.wlvpn.consumervpn（当サイトの確認・2026-10-11）。WLVPNは自社サイトで、IPVanishのサーバー網とSDK・APIを使って自社ブランドのVPNを出せるOEMの仕組みを掲げ、ダブルホップ、キルスイッチ、スプリットトンネリング、WireGuardを機能に並べる。MillenVPNはアプリ接続の基盤の提供元を公表していない"
  - layer: "専用サーバー"
    name: "Dedicated VPN servers in Tokyo (IKEv2 / OpenConnect, kernelCare)"
    confidence: confirmed
    evidence: "公式の専用サーバーのページ（2026-10-11確認）に、共通の仕様として専用固定IP、kernelCare、対応プロトコルIKEv2/OpenConnect、リージョン日本/東京、契約期間12か月からと明記。ネットワークはプランにより1〜4Gbps（2026-10-08の見直し後）"
    evidenceUrl: "https://millenvpn.jp/dedicated/"
  - layer: "暗号化と保護機能"
    name: "AES-256 / kill switch / DNS leak protection"
    confidence: confirmed
    evidence: "料金ページのよくある質問（2026-10-11確認）に、256ビットAES暗号化、キルスイッチ（一部のプラットフォームのみ）、接続ログと通信ログの不保持、DNSリークの対策（一部のプラットフォームのみ）を明記"
    evidenceUrl: "https://millenvpn.jp/pricing/"
  - layer: "決済・不正検知"
    name: "Stripe / MaxMind"
    confidence: confirmed
    evidence: "プライバシーポリシー（2026-08-25適用）に、クレジットカード決済はStripeを使い、カード情報はStripeが保持してMillenVPNは保持しないこと、不正利用の防止にMaxMindの不正検知システムを使うことを明記"
    evidenceUrl: "https://millenvpn.jp/privacy-policy/"
  - layer: "障害情報"
    name: "Atlassian Statuspage (status.millenvpn.jp)"
    confidence: confirmed
    evidence: "公式サイトのフッターからリンクされる status.millenvpn.jp が「Powered by Atlassian Statuspage」と表示し、MillenVPNアプリ、MillenVPN Native、マイページの稼働状況を載せる。当サイトの確認（2026-10-11）で、応答は server: AtlassianEdge を返した"
    evidenceUrl: "https://status.millenvpn.jp/"
  - layer: "自社サイト・顧客管理"
    name: "WordPress / LiteSpeed / Cloudflare / WHMCS (accounts.millenvpn.jp)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、millenvpn.jp と support.millenvpn.jp は server: cloudflare、x-litespeed-cache、x-turbo-charged-by: LiteSpeed とWordPressのREST APIのリンクを返し、millenvpn.jp のHTMLは WordPress 7.1.3 のgeneratorを含んだ。申し込みとマイページの accounts.millenvpn.jp は clientarea.php と cart.php のパスを持ち、WHMCSで始まる名前のクッキーを返したため、顧客管理と請求にWHMCSを使っているとみられる"
  - layer: "サポートのチャット"
    name: "DocsBot AI (chat widget)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-11）で、millenvpn.jp のHTMLが widget.docsbot.ai の chat.js を読み込み、DocsBotAI.init を呼んでいた。サイト上の質問にAIのチャットで答える仕組みとみられる"
sources:
  - label: "MillenVPN公式: トップページ"
    url: "https://millenvpn.jp/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: ご利用料金（サブスクプラン・ワンタイムプラン・固定IPオプション・よくある質問）"
    url: "https://millenvpn.jp/pricing/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: MillenVPN専用サーバー"
    url: "https://millenvpn.jp/dedicated/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: MillenVPNで使える3つのサービス（アプリ・Native・OpenConnectの比較）"
    url: "https://millenvpn.jp/millenvpn-and-millenvpnnative/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: 特長とご利用用途（クイック診断）"
    url: "https://millenvpn.jp/features/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: VPNサーバーリスト"
    url: "https://millenvpn.jp/locations/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: 対応表（接続できる国・VOD）"
    url: "https://millenvpn.jp/vod-table/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: MillenVPNアプリのダウンロード"
    url: "https://millenvpn.jp/app/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: 公正利用ポリシー"
    url: "https://millenvpn.jp/fair-use-policy/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: プライバシーポリシー（2026-08-25適用）"
    url: "https://millenvpn.jp/privacy-policy/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: 利用規約（2025-12-15適用）"
    url: "https://millenvpn.jp/tos/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: アフィリエイトプログラム（A8.net）"
    url: "https://millenvpn.jp/affiliate/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: お友達招待プログラム"
    url: "https://millenvpn.jp/friend/"
    accessedAt: "2026-10-11"
  - label: "MillenVPN公式: クラウドストレージサービス「pCloud」"
    url: "https://millenvpn.jp/pcloud/"
    accessedAt: "2026-10-11"
  - label: "MillenVPNヘルプセンター: 30日間返金保証制度について"
    url: "https://support.millenvpn.jp/30"
    accessedAt: "2026-10-11"
  - label: "MillenVPNヘルプセンター: 固定IPオプションサービス（サブスクプラン専用）"
    url: "https://support.millenvpn.jp/3965"
    accessedAt: "2026-10-11"
  - label: "MillenVPNヘルプセンター: Windows版 リリースノート"
    url: "https://support.millenvpn.jp/102"
    accessedAt: "2026-10-11"
  - label: "MillenVPNヘルプセンター: macOS版 リリースノート"
    url: "https://support.millenvpn.jp/123"
    accessedAt: "2026-10-11"
  - label: "MillenVPNヘルプセンター: iOS版 リリースノート"
    url: "https://support.millenvpn.jp/126"
    accessedAt: "2026-10-11"
  - label: "MillenVPNニュース: MillenVPN専用サーバー スペック最適化のお知らせ（2026-10-08）"
    url: "https://millenvpn.jp/news/2193"
    accessedAt: "2026-10-11"
  - label: "MillenVPNニュース: 固定IPオプション リリースのお知らせ（2026-08-25）"
    url: "https://millenvpn.jp/news/2164"
    accessedAt: "2026-10-11"
  - label: "MillenVPNニュース: プライバシーポリシー改定のお知らせ（2026-08-25）"
    url: "https://millenvpn.jp/news/2154"
    accessedAt: "2026-10-11"
  - label: "MillenVPNニュース: 同時接続台数制限撤廃のお知らせ（2024-11-25）"
    url: "https://millenvpn.jp/news/1876"
    accessedAt: "2026-10-11"
  - label: "MillenVPNニュース: MillenVPN 4周年記念キャンペーンのお知らせ（2024-11-01）"
    url: "https://millenvpn.jp/news/1853"
    accessedAt: "2026-10-11"
  - label: "MillenVPN Status（障害・メンテナンス情報）"
    url: "https://status.millenvpn.jp/"
    accessedAt: "2026-10-11"
  - label: "アズポケット株式会社: 会社概要"
    url: "https://www.azpocket.co.jp/company/"
    accessedAt: "2026-10-11"
  - label: "アズポケット株式会社: トップページ（事業内容・お知らせ）"
    url: "https://www.azpocket.co.jp/"
    accessedAt: "2026-10-11"
  - label: "App Store: MillenVPN（販売元 AzPocket, Inc.）"
    url: "https://apps.apple.com/jp/app/millenvpn/id1514053309"
    accessedAt: "2026-10-11"
  - label: "Google Play: MillenVPN（パッケージ名 com.wlvpn.consumervpn）"
    url: "https://play.google.com/store/apps/details?id=com.wlvpn.consumervpn&hl=ja"
    accessedAt: "2026-10-11"
  - label: "WLVPN: ホーム（ホワイトラベルVPNのOEMプログラム）"
    url: "https://wlvpn.com/"
    accessedAt: "2026-10-11"
---

MillenVPNは、スマートフォンやパソコンの通信を暗号化し、接続先の国を選べるVPNサービスだ。運営するのは、当サイトが解剖したレンタルサーバー[mixhost](/ja/articles/mixhost)と同じアズポケット株式会社で、公式サイトのフッターにもmixhostへのリンクが並ぶ。VPNを選ぶとき、運営会社がどこの国のどんな法律の下にいるかは、それ自体が商品の一部になる（[Proton](/ja/articles/proton)の解剖も参照）。MillenVPNは料金ページのよくある質問で、自らを日本の法令を守り総務省への届出も済ませたサービスだと説明し、「多くのオフショア拠点に存在するVPN業者とは根本的に異なります」と書く。日本の会社であること自体を、商品の中心に置いたVPNだ。

## サービス解説

MillenVPNの契約は、1つで3つの接続方法を使い分けられる作りになっている。専用アプリで140か所以上の中から接続先を選ぶ「MillenVPN」、アプリを入れずに端末のVPN設定（IKEv2）でつなぐ「MillenVPN Native」、中国など通信制限の厳しい国からの接続を想定した「MillenVPN Native OpenConnect」だ。プランは、1年と2年のサブスクプラン、7日からのワンタイムプラン、法人向けの専用サーバーの3つで、2026年8月にはアプリで自分専用の固定IPを使える固定IPオプションが加わった。クラウドストレージのpCloudとeSIMのAiraloも「提携サービス」として並び、公式サイトは日本語のほか、英語、簡体字中国語、繁体字中国語、韓国語でも読める。

:::fact
会社概要（2026-10-11時点）によれば、アズポケット株式会社は2016年4月11日に設立され、本社は大阪市中央区南船場、事業内容はインターネットインフラ事業と電気通信事業法に基づく電気通信事業で、事業者番号は届出電気通信事業者のE-28-03926。会社のトップページは、自社を2016年に創業した「アジア発のインターネットインフラスタートアップ」と紹介し、事業をmixhostとMillenVPNの2つとして、MillenVPNを「定額制で短期利用から始められるVPN」と説明する。特長のページは、MillenVPNを、日本で電気通信事業を行うアズポケットが総務省に届け出て運営するサービスとし、日本国憲法第21条の通信の秘密を守って運用していると書く。利用規約の第21条も、通信の秘密を電気通信事業法第4条に基づいて保護すると定める。アプリのリリースノートは、Windows版とmacOS版の最初の版を2020年6月2日の「新規リリース」、iOS版の1.0.0を2020年7月30日とし、2024年11月1日のお知らせは、MillenVPNが4周年を迎えたと告げた。
:::

:::fact
料金のページ（2026-10-11確認）によれば、サブスクプランの2年プランは初回の月額が360円（税込396円）、1年プランは540円（税込594円）で、それぞれ「初回62％OFF」「初回43％OFF」と書かれ、更新時はどちらも月950円（税別）になる。表示の月額は契約期間分を一括で払ったときの1か月あたりの額で、契約は自動更新、割引は初回だけだ。ワンタイムプランは7日間638円、15日間1,078円、30日間1,738円（いずれも税込）で、期間が過ぎると自動で終わる。固定IPオプションは1つにつき月396円（税込）で、サブスクプランの契約が前提になり、リージョンは東京、ロンドン、パリ、フランクフルト、カンザスシティの5つ。法人向けの専用サーバーは、ソロ（月2,310円〜・税込）からエンタープライズ（月26,400円〜）までの6プランで、表示は最長の契約期間で一括払いしたときの月額、契約は12か月から、アカウント数は1から160まで。どのプランも端末の台数に制限はなく、30日間の返金保証はサブスクプランにだけ付く。支払いはクレジットカード（VISA、MasterCard、JCB、American Express、Diners Club、Discover）で、PayPalと銀行振込は日本円の支払いに限って使える。トップページは、世界140か所以上に置いた2,000台以上のVPNサーバーを使えると書く。
:::

:::pull
日本の会社であることを売るVPNは、記録しないものと、記録するものの両方を、接続方式ごとに書き分けている。
:::

::scorecard

## UX分析

MillenVPNの体験は、日本語で完結する手続きと、短期から長期、個人から法人までをそろえた品ぞろえで組み立てられている。一方で、3つの接続方法とオプションの違いは、料金表の1行目だけでは見えにくい。

- **短く試すか、長く安く使うか**。ワンタイムプランは7日から買え、料金のページは旅行や一時的な海外のサービスの利用に勧める。サブスクプランは30日間の返金保証付きで、初めての人にも勧められている。特長のページの「クイック診断」は、利用目的、接続する場所、接続先の国、利用期間の4問から、プランと接続方法を勧める。専用サーバーにはお試し期間がなく、よくある質問は、同じ仕様のMillenVPN Nativeを返金保証付きのプランで試すよう案内する。
- **接続方法を3つから選ぶ**。サービス比較のページによれば、アプリはWireGuard、IKEv2、OpenVPNで140か所・2,000台以上のサーバーにつなぎ、日本国内と国外の多くの配信サイトに対応するとする。MillenVPN NativeはアプリなしでIKEv2を使い、日本国内のほぼ全ての配信サイトに対応するとし、他の利用者と共用の固定IPを標準で使える。MillenVPN Native OpenConnectは別途アプリを入れて使い、制限の厳しい国から「特に制限を受けにくい」とする。料金ページのよくある質問は、キルスイッチとDNSリークの対策を一部のプラットフォームだけの機能と書く。選べる幅が広い反面、どの用途にどれを使うかを理解する手間は利用者に残る。
- **140か所の数え方**。サーバーリスト（2026-10-11確認）には、当サイトの集計で110の国と地域の144か所が並び、そのうち56か所に「仮想環境」の注記が付く。注記の説明は、サーバーの設置位置ではなく、仮想的にそのロケーションとして扱われる環境のサーバーを示すというもので、アジアでは33か所のうち20か所がこれにあたる。App StoreとGoogle Playのアプリの説明文は、いまも「75以上のロケーション、1300台以上のVPNサーバー」と、公式サイトより小さい数字を書いている。サーバーが物理的にどの国にあるかを気にする用途なら、リストの注記まで確かめたい。
- **動画の対応表には条件が付く**。対応表は、日本から使える海外の配信サービスと、海外から使える日本の配信サービス（TVer、U-NEXT、ABEMA、dアニメストアなど）を並べる。ただしトップページは、すべての配信サービスへの対応を保証するものではなく、配信会社の仕様変更で視聴できなくなる場合があること、配信サービスとは別に契約が要ることを注記し、対応表は一部の国からはMillenVPN Nativeを使う必要があるとする。特長のページは、表にないサービスはVPNを通してもアクセスや視聴ができない場合があると書く。各配信サービスが視聴できる地域をどう定めているかは、利用者がそれぞれの規約で確かめる必要がある。
- **返金は自分で手続きできるが、対象は狭い**。返金保証のヘルプによれば、対象は公式サイトから申し込んだサブスクプラン（2年・1年）の初回の契約で、期間は利用開始日の翌日から30日以内（日本時間）。クレジットカードかPayPalなら、解約の手続きで「直ちに解約し、返金保証を適用する」を選ぶと自動で返金される。銀行振込はサポートへの連絡が要り、返金手数料330円（税込）がかかる。ワンタイムプラン、アップグレードで切り替えたサブスクプラン、更新されたサブスクプラン、専用サーバー、pCloud、Airaloは対象外で、固定IPオプションはサブスクプランと同時に申し込んだ場合だけ対象になる。固定IPオプションのヘルプは、解約したIPアドレスが将来ほかの利用者に割り当てられる可能性があるため、許可リストに登録していれば削除するよう勧める。利用規約は、それ以外の支払い済みの料金は理由を問わず返金しないとし、サブスクプランと専用サーバーは、契約終了日の14日前までに申し出ない限り同じ期間で自動更新されると定める。
- **アプリの機能は、2026年夏に足並みがそろった**。リリースノートによれば、WireGuardにはWindows版が2023年7月、iOS版が2024年2月に対応し、macOS版は2025年9月の2.0.0でIKEv2・IPSec・WireGuardを選べるようにした。キルスイッチは同じ2025年9月にmacOS版とiOS版に入り、脅威保護はWindows版が2024年8月に先行した。2026年8月の更新で、Windows版・macOS版・iOS版に固定IPとダブルホップが、macOS版とiOS版に脅威保護が加わった。OSによって機能のそろう時期が年単位でずれてきたため、使う端末の版で何ができるかは確かめておきたい。

## 技術構成

::techstack

:::fact
サービス比較のページ（2026-10-11確認）によれば、アプリ接続のプロトコルはWireGuard、IKEv2、OpenVPN、MillenVPN NativeはIKEv2、MillenVPN Native OpenConnectはOpenConnectで、日本のサーバーはどれも東京と大阪にある。アプリ接続のサーバーは140か所・2,000台以上、NativeとOpenConnectのサーバーは「随時追加中」とされる。専用サーバーは、申し込み後に客ごとのVPNサーバーを構築する方式で（固定IPオプションのお知らせによる）、リージョンは東京、プロトコルはIKEv2とOpenConnect、共通の仕様に「kernelCare」を挙げる。料金ページのよくある質問は、256ビットのAES暗号化、キルスイッチ、接続ログと通信ログを持たないこと、DNSリークの対策を挙げ、Tier1プロバイダの大容量ネットワークを使うと説明する。アプリのIPアドレスは、世界で数万個以上を運用し、その中からランダムに払い出す動的なものだとする。同じよくある質問はデータ転送量に制限はないとする。公正利用ポリシーは、2024年11月25日から同時接続台数の制限（それまでは10台）をなくしたと書く一方、CPU、メモリ、データ転送量の使用状況を監視して制限する仕組みを入れているとし、制限の目安を1契約・接続方法ごとに月3TBとする。公平な配分を超えて使う客は全体の0.01%以下だという。
:::

:::fact
当サイトの実観測（2026-10-11）では、millenvpn.jp はCloudflareの背後で x-litespeed-cache と x-turbo-charged-by: LiteSpeed のヘッダー、WordPressのREST APIのリンクを返し、HTMLには「WordPress 7.1.3」のgeneratorと、LiteSpeed Cacheによる最適化の注記があった。HTMLは widget.docsbot.ai のチャットのスクリプトも読み込んでいた。ヘルプセンター（support.millenvpn.jp）も同じくWordPressとLiteSpeedのヘッダーを返した。申し込みとマイページの入口 accounts.millenvpn.jp は clientarea.php、cart.php、submitticket.php のパスを持ち、WHMCSで始まる名前のクッキーを返した。障害情報の status.millenvpn.jp は「Powered by Atlassian Statuspage」と表示し、10月7日のマイページのメンテナンス中は、新規の申し込みとサポートへの問い合わせもできないと告知していた。アプリのインストーラーは app.millenvpn.jp からCloudflare経由で配られ、Windows版の最終更新日時はリリースノートのV2.5.2.0のリリース日（2026年9月25日）と一致した。プライバシーポリシーは、クレジットカード決済にStripe、不正利用の検知にMaxMindを使うと明記する。App Storeの販売元とGoogle Playのデベロッパーはどちらも AzPocket, Inc. で、Google Playのアプリのパッケージ名は com.wlvpn.consumervpn だ。
:::

:::guess
MillenVPNの中身は、2つの層に分かれているとみられる。1つは、アプリでつなぐ140か所以上のサーバー網だ。Google Playのパッケージ名に含まれる wlvpn は、ホワイトラベルのVPNを提供するWLVPNの名前と重なる。WLVPNは自社サイトで、IPVanishのサーバー網とSDK・APIを使って自社ブランドのVPNを立ち上げられるOEMの仕組みを掲げ、110以上の国にある3,000台以上のサーバー、145以上のロケーションから経路を選べるダブルホップ、キルスイッチ、スプリットトンネリング、WireGuardを並べる。MillenVPNのアプリが足してきた機能の並びも、サーバーリストの110の国と地域・144か所という規模もこれに近く、アプリ接続の基盤にこうした外部のプラットフォームを使っている可能性が高いとみられるが、MillenVPNは提供元を公表していない。そうだとすれば、アプリの「ノーログ」の約束の一部は、その基盤の運用にも支えられていることになる（WLVPN自身も、第三者が検証したトラフィックのノーログを売りにしている）。もう1つは、東京と大阪をはじめ日本国内に多くのサーバーを置くとするMillenVPN Native、OpenConnect、専用サーバーの層で、こちらはアズポケットが自ら運用しているとみられる。後で見るように、プライバシーポリシーがNativeと専用サーバーでは接続元のIPアドレスとタイムスタンプを集めるとし、アプリでは集めないとする違いも、この層の違いに対応していると読める。サイト、ヘルプ、顧客管理、障害情報は既製の部品で組まれており、構成の比較には[mixhost](/ja/articles/mixhost)の解剖も参考になる。
:::

## 「ノーログ」は接続方式ごとに違う

:::fact
プライバシーポリシー（2026-10-11確認）は、2020年6月26日から適用した版を改定して2026年8月25日から適用するもので、MillenVPN（アプリ）、MillenVPN Native、専用サーバー、固定IPオプションの4つに分けて書かれている（MillenVPN Native OpenConnectだけの項目はない）。アプリは、接続元のIPアドレスとタイムスタンプ、通信内容や閲覧履歴、DNSの問い合わせを収集も記録もしないとし、集めるのは、Stripeが持つクレジットカード情報、契約時のIPアドレス、選んだサーバーのロケーション、月ごとの通信量の合計、アプリのバージョン、不具合のときに利用者がアプリから送った診断ログ（Windows版は接続元のIPアドレスなど、Android版は端末の情報）に限るとする。診断ログは利用者が送ったときだけ届き、サーバー側で常に集めるものではないとも書く。MillenVPN Nativeは、通信内容と閲覧履歴、DNSの問い合わせは記録しないが、接続元のIPアドレスとタイムスタンプ（通信内容を含まない）は集める。専用サーバーと固定IPオプションでは、割り当てた固定IPアドレスとその期間を集め、固定IPと契約者の情報が技術的に紐付くため、外部からの照会で知らされたIPアドレスと利用日時から契約者を特定できる状態になると明記し、収集の理由に、裁判所の命令、情報流通プラットフォーム対処法に基づく発信者情報開示請求を含む開示請求、捜査機関からの照会への対応を挙げる。接続元のIPアドレスとタイムスタンプは、専用サーバーでは集め、固定IPオプションでは集めない。8月25日のお知らせによれば、この改定でアプリの診断ログと、専用サーバーと固定IPオプションの規定が加わり、専用サーバーの利用者には改めて同意を求めた。日付は、固定IPオプションのリリースのお知らせと同じだ。ストアの申告欄では、App Storeが、ユーザーID、使用状況、診断のデータをユーザーに関連付けて集める場合があるとし（Appleは検証していないと注記）、Google Playは「データは収集されません」としながら、個人情報を第三者と共有する場合があると表示する。
:::

| プライバシーポリシーの区分 | 接続元のIPとタイムスタンプ | 通信内容・閲覧履歴・DNS | 契約者の特定 |
| --- | --- | --- | --- |
| MillenVPNアプリ（動的IP） | 収集・記録しない | 収集・記録しない | できないとする |
| MillenVPN Native | 集める（通信内容は含まない） | 収集・記録しない | できないとする |
| 固定IPオプション（2026年8月〜） | 収集・記録しない | 収集・記録しない | 固定IPと利用日時から可能 |
| 専用サーバー | 集める（通信内容は含まない） | 収集・記録しない | 固定IPと利用日時から可能 |

:::guess
この書き分けは、トップページが「誰にも追跡される心配はありません」と書く個人向けのアプリと、誰の通信かが分かること自体に価値がある固定IPを、同じ看板の下で売るための線引きとみられる。固定IPは、社内システムや外部サービスの接続元を絞るために使われ、専用サーバーのページも、IP制限のある勤怠管理や経費精算のサービスへのアクセスを用途に挙げる。特定できることを前もって契約の言葉で示すのは、「日本の法令に基づくクリーンなVPN」という看板と食い違わないための設計と読める。固定IPオプションのリリースと同じ日にポリシーを改定したことからは、商品を足すたびに、記録の範囲を追いかけて書き直してきた様子もうかがえる。一方で、「ノーログ」はあくまで公式の説明で、当サイトは独立に検証していない。ストアの申告欄はアプリの分析や診断の扱いを書く欄で、VPNの通信の記録とは別の話と読めるが、ストアによって表示が異なるため、最終的にはプライバシーポリシーの本文で確かめるのが確実だ。
:::

## ビジネスモデル

稼ぎ方は、1年か2年分を前払いで受け取るサブスクプランが中心で、7日からのワンタイムプラン、1つ月396円の固定IPオプション、12か月以上の契約になる法人向けの専用サーバーとアカウントの追加が上に乗る。pCloudの販売やAiraloのクーポン（特長のページは最大15％OFFと書く）も並び、客を集める役は、A8.netのアフィリエイトと友達招待、そしてフッターに並ぶ自社のメディアが担う。

:::fact
アフィリエイトのページ（2026-10-11確認）によれば、MillenVPNはアフィリエイトサービスプロバイダー（ASP）のA8.netで広告を配信し、契約の成立で最大3,500円の成果報酬を払う。始めるにはA8.netに登録してMillenVPNを探し、提携を申請する。お友達招待のページによれば、契約者が専用の招待リンクとクーポンコードを知らせ、相手がそれで申し込むと相手は1,000円の割引を受け、30日間の利用が確認されると紹介した側に1,000円がクレジットとして入る（日本円の決済だけが対象で、回数の上限はない）。料金ページのよくある質問は、10契約以上のボリュームディスカウント、再販やOEMの相談、複数の契約を1つの請求にまとめることを案内し、専用サーバーのよくある質問は、インボイス制度に対応した請求書をマイページから取得できると書く。pCloudのページは、MillenVPNの利用者に500GBを1年間無料で使えるプロモコード（約7,700円相当）を配り、pCloudの有料プランをMillenVPN経由で買えるようにしている。2024年11月1日の4周年のお知らせは、サブスクプランの通常の新規料金を1年7,128円、2年9,504円（いずれも税込）としており、これは現在の初回の月額（594円と396円）に契約月数を掛けた額と同じだ。2026年10月8日のお知らせによれば、専用サーバーは、インフラの調達コストの高騰を受けて利用状況を調べたうえで、ネットワーク帯域をプロ2Gbpsから1Gbps、ビジネス4Gbpsから1Gbps、ビジネスプラス5Gbpsから2Gbps、エンタープライズ6Gbpsから4Gbpsへ見直し、ビジネスプラスのアカウント数を60から80に増やした。同時にプロ、ビジネス、ビジネスプラスを値下げし、ビジネスの2年契約の月額（税込）は14,300円から13,200円になった。専用サーバーのページは「最大7Gbps」の高速通信をうたっており、見直し後のプランの帯域（1〜4Gbps）とは数字がそろっていない。Google Playでのアプリのダウンロード数は5万以上だ。
:::

:::guess
値付けの骨格は、初回の割引で入口を下げ、更新で回収する前払いのサブスクリプションとみられる。2年プランは初回の支払いが9,504円（税込）で、更新後は月950円（税別）の24か月分、税込に直すと25,080円になり（当サイトの計算）、約2.6倍に上がる。A8.netの最大3,500円は、税の扱いが書かれていないものの、2年プランの初回の支払いの4割弱にあたり、初回の売上の多くを紹介者に渡しても、更新で取り戻す設計と読める。初回の料金を2024年から据え置いたまま、同時接続の制限をなくし、アプリの機能を足し、固定IPオプションを月396円で加えたのは、機能の幅を広げつつ、日本の会社であることを差別化に使う戦略と推測される。固定IPは、他の利用者と共用のIPを使えるNative、自分専用のIPを1つ持てる固定IPオプション、サーバーごと自分専用になる月2,310円からの専用サーバー（エントリー以上は複数のアカウントで1つのIPを共有できる）の3段に並び、個人の用途から会社の業務までを順に受け止める階段になっている。専用サーバーの帯域の見直しと値下げを同時に出したのは、インフラの費用が上がるなかで、実際の使われ方に合わせて原価と値段を組み直した動きとみられる。フッターに並ぶ「MillenVPN動画ガイド」「MillenVPNスポーツ」などのメディアは、配信サービスの情報を探す人を検索から集める入口と推測される。
:::

2020年にアプリを出したMillenVPNは、mixhostと同じ大阪の会社が、日本で届け出た電気通信事業者であることを看板にして売ってきたVPNだ。アプリ接続では記録しないものを並べ、固定IPと専用サーバーでは、記録するものと、契約者を特定できることまで書き添える。何を記録しないかだけでなく、何を記録するかまで接続方式ごとに書き分けたことが、「日本の法令に基づくクリーンなVPN」という言葉のいちばん具体的な中身になっている。
