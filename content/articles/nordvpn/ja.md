---
service: "NordVPN"
title: "パナマの契約、渋谷の決済、法務ページの更新額表 — Nord Securityの看板VPNを、円で固定された1年更新の料金、NordLynxと公開されたクライアントのコード、Deloitteの保証、Surfsharkとの「グループ」の書かれ方から解剖する"
description: "NordVPNは、リトアニアで2012年に始まったNord Securityの看板のVPNだ。利用規約の契約相手はパナマのnordvpn S.A.で、準拠法もパナマ法だが、日本の居住者の支払いは主に東京・渋谷のNord Security JP Co., Ltdが処理すると書かれる。更新料金はNord Accountの法務ページに国別の表で置かれ、日本はBasicの年21,960円からComplete Maxの年45,960円まで（2026年6月10日更新、税は別）。当サイトのリクエストはnordvpn.comのCloudflareのチャレンジで拒否されたため、公式サイトの初回価格は読めていない。代わりに、日本のApp Storeの表示、ヘルプセンター、法務文書、Nord Securityの発表と技術ブログ、GitHubで公開されたコードから、値段の決まり方、NordLynxとNordWhisper、10台という上限、5度のノーログの評価、Surfsharkとの関係、アフィリエイトの規約を解剖する。"
lead: "NordVPNの更新料金は、製品サイトではなく、アカウント管理サイトの法務ページに固定の表で置かれている。日本の行にはBasicの21,960円からComplete Maxの45,960円までの6つの年額が並ぶ。契約の相手はパナマの会社で、日本の居住者の支払いは主に渋谷の会社が処理し、利用規約の書き手はこの2つを別の条項に分けて書く。VPNの中身であるNordLynxはWireGuardを土台にし、Linuxのクライアントと通信ライブラリのコードはGitHubに公開されている。2022年にSurfsharkと同じグループになった会社が、どう作られ、どう稼いでいるのかを、公開情報だけで解剖する。"
category: consumer-app
tags: [vpn, privacy, security, subscription]
publishedAt: "2026-11-02"
updatedAt: "2026-11-02"
lastVerified: "2026-11-02"
expires:
  - date: "2026-12-31"
    claim: "Nord Accountの更新料金のページ（最終更新2026-06-10）の日本の行の年額（Basic 21,960円、Standard 23,640円、Plus 28,320円、Complete 34,680円、Ultra 42,720円、Complete Max 45,960円、専用IP 12,840円など）。2026-11-02の観測"
  - date: "2026-12-31"
    claim: "日本のApp Storeのアプリ内課金の表示（12か月のプランが9,300円と11,800円、1か月のプランが1,350円と2,100円）。2026-11-02の観測"
  - date: "2026-12-31"
    claim: "ヘルプセンターの7日間の無料トライアルの対象（日本を含む15か国、Prime・Ultimate Max・Ultra・Complete Maxの1年・2年プラン）と、nordvpn.comが当サイトのリクエストをCloudflareのチャレンジで拒否しているという2026-11-02の観測"
serviceUrl: "https://nordvpn.com/"
# Affiliate link placeholder: NordVPN runs an in-house affiliate program (terms checked 2026-11-02 at
# https://affiliates.nordvpn.com/terms; apply via https://affiliates.nordvpn.com/users/signup/). Commission
# rates were not readable: they are on https://nordvpn.com/affiliate/, which returned a Cloudflare challenge.
# 30-day tracking cookie (clause 2.5), $100 minimum payout (4.1), commission cancelled on refund, chargeback or
# cancellation (3.1.5, 4.7), payout request not earlier than 40 days (4.4). Restrictions: no bidding on Banned
# Keywords (6.2.4, 9.3.3), any pop-ups/unders forbidden (6.2.1), no Nord marks in domain names (9.3.2), and clause
# 2.6.2 forbids posting "any refunds, credits or discounts" without prior written permission in each instance.
# This article describes prices and the refund guarantee, so ask the affiliate manager before enabling. Rule
# 6.2.1 covers pop-ups, so sameWindow is not needed on that ground. If NordVPN supplies ad text, copy it verbatim;
# never invent the label — ask the owner. Keep every field identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://<nordvpn-affiliate-link>"
#   program: "Nord Affiliate Program"
vendor: "nordvpn S.A.（Nord Security）"
origin: "PA"
heroTheme: "nordvpn"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 4.0 }
techStack:
  - layer: "VPNプロトコル"
    name: "NordLynx (WireGuard) / NordWhisper / OpenVPN / IKEv2"
    confidence: confirmed
    evidence: "ヘルプセンターの機能の一覧（2026-11-02確認）に、NordLynx（WireGuardを土台）、NordWhisper、OpenVPN、IKEv2/IPsecの対応を明記。プロトコルの解説は、NordLynxをほとんどのアプリの既定と書く"
    evidenceUrl: "https://support.nordvpn.com/hc/en-us/articles/19559429814545-What-features-does-NordVPN-have"
  - layer: "ポスト量子暗号"
    name: "Post-quantum encryption (NordLynx only)"
    confidence: confirmed
    evidence: "Nord Securityの発表（2025-05-22）に、2024年9月のLinux版を皮切りに全アプリへ広げたと明記。ヘルプセンターは、NordLynxだけで動き、専用IP、OpenVPN、難読化サーバー、Meshnetでは無効になるとする"
    evidenceUrl: "https://nordsecurity.com/press-area/nordvpn-launches-post-quantum-encryption-across-all-its-applications/"
  - layer: "クライアント"
    name: "Go (nordvpn-linux) / Rust (libtelio, NepTUN)"
    confidence: confirmed
    evidence: "GitHubのNordSecurityの組織（2026-11-02確認）で、Linuxクライアントのnordvpn-linux（GPL-3.0）、VPNとMeshnetのネットワークのライブラリlibtelio（GPL-3.0）、WireGuardのユーザー空間実装NepTUN（BSD-3-Clause）を公開"
    evidenceUrl: "https://github.com/NordSecurity/nordvpn-linux"
  - layer: "サーバー基盤"
    name: "Colocated servers"
    confidence: confirmed
    evidence: "Nord Securityの発表（2025-07-16）に、2024年に世界の37のデータセンターにサーバーをコロケーションしたと明記"
    evidenceUrl: "https://nordsecurity.com/press-area/half-of-nord-security-s-colocated-servers-use-renewable-energy/"
  - layer: "CDN・セキュリティ"
    name: "Cloudflare"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、nordvpn.com、my.nordaccount.com、nordsecurity.com、support.nordvpn.com、s1.nordcdn.com は server: cloudflare を返し、nordvpn.com は cf-mitigated: challenge のヘッダーで当サイトのリクエストに応じた"
  - layer: "公式サイト"
    name: "Astro / SolidJS"
    confidence: likely
    evidence: "Nord Securityの技術ブログ（2022-10-20）が、NordVPNのマーケティングサイトの作り直しにAstroとSolidJSを選んだと説明する。当サイトの実観測（2026-11-02）では、nordsecurity.comとnordvpn.orgのHTMLにAstroの痕跡があったが、nordvpn.comそのものは取得できず、今も同じ構成かは確かめていない"
    evidenceUrl: "https://nordsecurity.com/blog/why-we-chose-astro-for-our-websites/"
  - layer: "サポート"
    name: "Zendesk (support.nordvpn.com)"
    confidence: confirmed
    evidence: "プライバシーポリシーが、顧客サポートの提供者としてZendesk Inc.を挙げる。当サイトの実観測（2026-11-02）で、ヘルプセンターは zendesk-service: help-center のヘッダーを返した"
    evidenceUrl: "https://my.nordaccount.com/legal/privacy-policy/"
  - layer: "決済"
    name: "Stripe / Adyen / PayPal / Coingate / Checkout"
    confidence: confirmed
    evidence: "プライバシーポリシーが、決済処理の提供者としてStripe、Adyen、PayPal、Coingate、Checkout Ltdを挙げる。製品の共通の購入窓口はNord Checkoutで、ヘルプセンターは全サービスの統一された決済の仕組みと説明する"
    evidenceUrl: "https://my.nordaccount.com/legal/privacy-policy/"
  - layer: "アフィリエイト計測"
    name: "TUNE (HasOffers)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、affiliates.nordvpn.com の登録ページのCookieの説明に nordvpn.hasoffers.com が現れ、ページのスクリプトは hasoffersBrandTheme を定義していた"
  - layer: "ドキュメント"
    name: "GitBook / Vercel (meshnet.nordvpn.com)"
    confidence: likely
    evidence: "当サイトの実観測（2026-11-02）で、meshnet.nordvpn.com のHTMLは generator に GitBook を示し、応答には x-vercel-cache のヘッダーが付いた"
sources:
  - label: "Nord Account: Subscription Renewal Prices（更新料金、2026-06-10更新）"
    url: "https://my.nordaccount.com/legal/pricing/"
    accessedAt: "2026-11-02"
  - label: "Nord Account: General Terms of Service（2026-08-10更新）"
    url: "https://my.nordaccount.com/legal/terms-of-service/"
    accessedAt: "2026-11-02"
  - label: "Nord Account: Privacy Policy"
    url: "https://my.nordaccount.com/legal/privacy-policy/"
    accessedAt: "2026-11-02"
  - label: "Nord Account: NordVPN Privacy Notice（2026-07-20の版）"
    url: "https://my.nordaccount.com/legal/privacy-policy/nordvpn/"
    accessedAt: "2026-11-02"
  - label: "App Store（日本）: NordVPN：高速・安心セキュリティ対策＆ネットワーク保護"
    url: "https://apps.apple.com/jp/app/nordvpn-vpn-for-privacy/id905953485"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 料金プランの確認方法（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19744251757841-How-to-check-the-plans-and-prices-of-NordVPN"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 更新時の支払い額（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19477173269265-How-much-will-I-need-to-pay-upon-renewal"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 料金の表示通貨（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19744714597905-What-is-the-currency-your-prices-are-shown-in"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: VATの説明（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19743990111121-What-is-VAT-and-why-am-I-charged"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 一括払いかどうか（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19476182512273-Does-NordVPN-charge-all-at-once"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 返金ポリシー（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19476991311121-What-is-your-refund-policy"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 無料トライアル（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19744837091217-Does-NordVPN-have-a-free-trial"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 支払い方法（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19685782821265-What-payment-methods-does-NordVPN-accept"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 安く買う方法（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19477702164369-How-to-get-NordVPN-cheaper"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 同時に使える台数（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19476515228305-How-many-devices-can-I-use-with-NordVPN"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 機能の一覧（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19559429814545-What-features-does-NordVPN-have"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: サーバーの種類（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19479130821521-Different-NordVPN-server-categories-explained"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: プロトコルの選び方（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19482810153745-Which-NordVPN-protocol-should-I-choose"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: NordLynxとは（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19564565879441-What-is-NordLynx"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: ポスト量子暗号の説明（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/30046321712529-NordVPN-Post-quantum-encryption-explained"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 難読化サーバーのNordWhisperへの移行（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/46609126551697-NordVPN-Obfuscated-Servers-are-getting-an-upgrade-what-changed"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: 専用IPの拠点（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19507808024209-Dedicated-NordVPN-IP-addresses"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: ポートフォワーディング（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19483392309649-Does-NordVPN-offer-port-forwarding"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: Next-gen antivirusの説明（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19508765521425-What-is-NordVPN-s-Next-gen-antivirus"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: Incogniとは（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/20228780938129-What-is-Incogni"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: Nord Checkoutとは（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/19685602129297-What-is-Nord-Checkout"
    accessedAt: "2026-11-02"
  - label: "NordVPNヘルプセンター: スポンサーとアフィリエイト（英語）"
    url: "https://support.nordvpn.com/hc/en-us/articles/20285763640337-Sponsorship-and-affiliate-programs-with-NordVPN"
    accessedAt: "2026-11-02"
  - label: "Nord Affiliate Program: Terms and Conditions"
    url: "https://affiliates.nordvpn.com/terms"
    accessedAt: "2026-11-02"
  - label: "Nord Affiliate Program: Partner Sign Up"
    url: "https://affiliates.nordvpn.com/users/signup/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: トップページ"
    url: "https://nordsecurity.com/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: About us（年表）"
    url: "https://nordsecurity.com/about-us/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: 5度目のノーログの保証の発表（2025-02-18）"
    url: "https://nordsecurity.com/press-area/nordvpn-verifies-its-no-logs-assurance-assessment-for-the-fifth-time/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: ポスト量子暗号の全アプリ対応の発表（2025-05-22）"
    url: "https://nordsecurity.com/press-area/nordvpn-launches-post-quantum-encryption-across-all-its-applications/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: NordWhisperの発表（2025-01-29）"
    url: "https://nordsecurity.com/press-area/nordvpn-introduces-nordwhisper-a-new-solution-for-restricted-networks/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: 再生可能エネルギーとImpact Reportの発表（2025-07-16）"
    url: "https://nordsecurity.com/press-area/half-of-nord-security-s-colocated-servers-use-renewable-energy/"
    accessedAt: "2026-11-02"
  - label: "Nord Security: Coveronの単体提供の発表（2025-03-18）"
    url: "https://nordsecurity.com/press-area/coveron-becomes-a-stand-alone-service-and-includes-online-fraud-coverage/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: 16億ドルの評価額での初の外部調達（2022-04-07）"
    url: "https://nordsecurity.com/blog/nord-security-raises-outside-capital-16-b-valuation/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: 1億ドルの追加調達（2023-09-28）"
    url: "https://nordsecurity.com/blog/nord-security-raised-another-100m-investment-round/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: Atlas VPNの終了（2024-03-25）"
    url: "https://nordsecurity.com/blog/announcement-on-atlas-vpn/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: NordLynxの速度テスト（2021-04-15）"
    url: "https://nordsecurity.com/blog/nordlynx-performance/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: WireGuardのままのNAT越え（2023-03-21）"
    url: "https://nordsecurity.com/blog/reaching-beyond-1gbps/"
    accessedAt: "2026-11-02"
  - label: "Nord Security Blog: マーケティングサイトにAstroを選んだ理由（2022-10-20）"
    url: "https://nordsecurity.com/blog/why-we-chose-astro-for-our-websites/"
    accessedAt: "2026-11-02"
  - label: "NordVPN: Social responsibility（nordvpn.org）"
    url: "https://nordvpn.org/"
    accessedAt: "2026-11-02"
  - label: "GitHub: NordSecurity/nordvpn-linux"
    url: "https://github.com/NordSecurity/nordvpn-linux"
    accessedAt: "2026-11-02"
  - label: "GitHub: NordSecurity/libtelio"
    url: "https://github.com/NordSecurity/libtelio"
    accessedAt: "2026-11-02"
  - label: "GitHub: NordSecurity/NepTUN"
    url: "https://github.com/NordSecurity/NepTUN"
    accessedAt: "2026-11-02"
  - label: "Surfshark公式: 弊社について"
    url: "https://surfshark.com/ja/about-us"
    accessedAt: "2026-11-02"
  - label: "Surfshark公式ブログ: Nord Securityとの合併（2022-02-01）"
    url: "https://surfshark.com/blog/surfshark-merges-with-nord-security"
    accessedAt: "2026-11-02"
  - label: "ESET Ireland: NordVPN reveals breach at datacenter provider（2019-10-23、報道。NordVPNの公式の発表はnordvpn.com上にあり取得できなかった）"
    url: "https://blog.eset.ie/2019/10/23/nordvpn-reveals-breach-at-datacenter-provider/"
    accessedAt: "2026-11-02"
---

NordVPNは、通信を暗号化して接続元のIPアドレスを隠すVPNを核に、悪質なサイトやマルウェアの遮断、データ漏洩の監視などを足したサブスクリプションだ。運営のNord Securityは2012年にリトアニアで始まり、同じ系列にパスワード管理のNordPass、暗号化ストレージのNordLocker、法人向けのNordLayer、eSIMのSailyを持つ。この解剖には1つ、はじめに書いておくべき制約がある。2026年11月2日、当サイトのリクエストは、robots.txtを除いて、`nordvpn.com`のページではCloudflareのチャレンジ（`cf-mitigated: challenge`）で拒否された。当サイトはブラウザを装うなどの回避をしておらず、料金ページ、機能紹介、公式ブログ、アフィリエイトのページを読んでいない。そのため初回の割引価格とプランごとの機能の比較表はこの記事にはない。以下は、取得を許されたNord Accountの法務ページ、ヘルプセンター、Nord Securityのサイト、GitHub、日本のApp Storeから組み立てている。

## サービス解説

:::fact
利用規約（General Terms of Service、2026年8月10日更新）は、「Nord」をパナマ市のnordvpn S.A.と定める。規約はパナマ法に従い、紛争はパナマの裁判所で扱うが、居住国の消費者法に強行規定があればそれが適用され、翻訳と食い違えば英語版が優先する。同じ規約の「支払いの事業者」の条項は、購入は支払い方法と法域によって別の会社が扱う場合があるとして、地域ごとの会社を挙げる。日本の居住者の支払いは、主に東京都渋谷区道玄坂1-12-1の渋谷マークシティ22階に登記されたNord Security JP Co., Ltdが処理するとされ、EUのPayPalはアムステルダムのNordSec B.V.、英国はMoonflash Limited、米国とメキシコはLagosec, Inc.と続く。日本のApp Storeの販売元はNordvpn S.A.だ。アフィリエイトの規約は、同じnordvpn S.A.の住所としてアムステルダムのFred. Roeskestraat 115を書く。プライバシーポリシーは、EEAの代理人を同じ住所のNordSec B.V.とする。Nord Securityの年表によれば、NordVPNは2012年にWindows向けの設定として始まり、2013年にアプリを出し、2020年にNordLynxを導入した。2022年4月7日の発表は、会社の創業を2012年のリトアニアとし、創業者をTom OkmanとEimantas Sabaliauskasとする。
:::

:::fact
ヘルプセンター（2026-11-02確認）によれば、NordVPNの期間は2年、1年、1か月で、2年と1年は購入時に全額を払う。購入経路はNordVPNの料金ページのほかApp StoreとGoogle Playがある。1つの契約で同時に使えるのは10台までで、同じサーバーに複数の端末をつなぐならプロトコルを変える必要がある。アプリはWindows、Linux、macOS、iOS、Androidなどにあり、Chrome、Firefox、Edgeの拡張機能もある。7日間の無料トライアルは、新規の利用者が、Prime、Ultimate Max、Ultra、Complete Maxの1年か2年のプランをクレジットカードかPayPalで申し込む場合が対象で、対象の15か国に日本が含まれる。終了前に取り消さなければ、始めたときに示された価格でプランが始まる。支払いは、クレジットカード、PayPal、暗号通貨、Apple Pay、Google Pay、銀行振込、プリペイドカードなどで、地域によって使えない方法がある。専用IPの拠点は31の国と地域が挙がり（当サイトの集計）、日本は東京だ。ポートフォワーディングは専用IPでは使えず、追加の専用サーバーだけが対応する。サーバーの総数を当サイトが読める最新の公式の数字は、2025年5月22日の発表の118か国7,600台以上で、同じ年の1月と2月の発表は111か国6,400台以上だった。日本のサーバーの台数は、取得できたページには書かれていない。
:::

機能の中心は、VPNそのものと、VPNの外でも動く保護の2層だ。ヘルプセンターの機能の一覧は、暗号化、ノーログ、DNS漏洩の防止、Kill Switch、ダークウェブの監視、Double VPN、Tor網と組み合わせるOnion Over VPN、難読化サーバー、端末どうしをつなぐMeshnet、Androidの詐欺電話の警告を並べる。Next-gen antivirusは、VPN接続なしでマルウェアのスキャンや詐欺サイトの警告を行い、Windows 10（64ビット）以降と、Mac App Store版を除くmacOSで動く。VPN接続中だけDNSで遮断するReal-time protectionとは別の機能だ。

:::pull
初回の値段は読めなかった。更新の値段は、製品サイトではなくアカウントの法務ページに、円の固定の表で置かれていた。
:::

::scorecard

## UX分析

NordVPNのUXは、ヘルプセンターと法務文書の厚さに支えられている一方で、どこを読むかによって書き方が揃っていない箇所がある。

- **更新額は1つの表にまとまる**。更新時の料金はNord Accountの「Subscription Renewal Prices」に、NordVPN、NordPass、NordLocker、脅威対策、専用IP、Incogniの商品ごと、国ごとに並ぶ。利用者は自分の国の行を探せばよい。ただしA/B価格テストの但し書きが同じページにあり、表示される更新価格もテストの対象になりうるとされる。
- **表示の通貨と請求の通貨は別の話として書かれる**。ヘルプセンターは、円を含む各国の通貨で価格を表示するが、請求は一部の決済事業者を除いて米ドルで行うと書く。更新料金のページは、最初の支払いの通貨で請求すると書く。日本で円の請求になるかは、選ぶ決済手段で確かめることになる。
- **税は後から足される**。利用規約は、価格を税抜きで最初に表示することがあり、居住国を選んだあとに税を計算して、請求の前に合計を示すとする。更新料金のページも、最初の支払いのときに指定した国の税を、請求日の税率で加えるとする。
- **返金は最初の購入の30日以内**。ヘルプセンターと利用規約によれば、30日間の返金保証は最初の購入にだけ適用され、更新分は対象外だ。ドイツ、オランダ、英国から買った場合に更新後の日割り返金を認める条項はあるが、日本は挙がっていない（居住国の法が権利を認める場合は連絡するよう書く）。手続きはライブチャットから始まる自動の処理で、Apple経由はAppleへ、Amazon Appstoreはアマゾンへ、Google Playはサポート経由か48時間以内ならGoogleへ、小売店や再販業者はその店へと分かれる。返金が口座に届くまで最大10営業日かかる場合がある。
- **10台の説明は数え方に揺れがある**。台数の記事は、同じサーバーには合計5台と書いたうえで、HTTPプロキシ、SOCKS5、NordLynx、NordWhisper、OpenVPN TCP、OpenVPN UDPの6つを挙げる。
- **古い説明と新しい説明が併存する**。「保存する情報」の記事は匿名の支払いにCoinPaymentsを勧め、プライバシーポリシーの決済事業者はCoingateを挙げる。プロトコルの記事はWireGuardを「experimental」と呼び、NordLynxの記事もWireGuardが開発途上で注意して使うよう書く一方、同じ記事でNordLynxを既定として勧める。
- **日本語のヘルプはあるが翻訳は部分的**。ヘルプセンターのサイトマップには日本語版のURLが487件ある（英語版は492件、当サイトの集計）。一方で、「一括払いか」「安く買う方法」などの記事は、日本語版のURLでも題名が英語のままだった。

## 技術構成

::techstack

:::fact
ヘルプセンターによれば、NordVPNのアプリの既定はNordLynxで、WireGuardを土台にしたNordVPNの技術と説明される。Nord Securityの2021年4月15日の技術ブログは、Linuxで試してから他のOSへ広げたと書き、1か月にわたる256,886回の速度テストの設計を説明する。これは自社の測定だ。OpenVPNはAES-256-GCMと4096ビットのDHを使うとされる。NordWhisperは2025年1月29日に発表された、制限されたネットワークを越えるためのプロトコルで、発表は、ウェブトンネルの技術で通常のウェブの通信を模すと説明する。現在はWindows、Android、Linux、iOS、macOSで使え、専用IP、Meshnet、Onion Over VPNとは併用できない。ヘルプセンターの別の記事は、難読化サーバーの区分がOpenVPNからNordWhisperに移ったと説明し、手動のOpenVPNでは接続できなくなったと書く。ポスト量子暗号は、2024年9月にLinux版のNordLynxで始まり、2025年5月22日の発表で全アプリに広がった。設定で有効にする機能で、ヘルプセンターによればNordLynxだけで動き、OpenVPN、専用IP、難読化サーバー、Meshnetでは無効になる。
:::

:::fact
GitHubのNordSecurityの組織（2026-11-02確認、API上で62件のリポジトリ）は、Go製のLinuxクライアント `nordvpn-linux`（GPL-3.0）、VPNとMeshnetのネットワークのライブラリでRust製の `libtelio`（GPL-3.0）、ファイル共有の `libdrop`（GPL-3.0）、WireGuardのユーザー空間実装 `NepTUN`（BSD-3-Clause）を公開する。`libtelio`のREADMEは、異なるWireGuardの実装を使い分けられることを機能に挙げ、`NepTUN`のREADMEは移植性と速度のための実装と書く。2023年3月21日の技術ブログは、Meshnetが素のWireGuardのままNAT越えを行う設計を説明し、利用者のデータはNord Security自身にも読めないことを第一の規則に挙げる。Nord Securityの発表によれば、同社は2024年に37のデータセンターにサーバーをコロケーションした。ウェブ側では、2022年10月20日の技術ブログが、20以上の言語、10の通貨、数千のページとA/Bテストを前提に、NordVPNのマーケティングサイトをAstroとSolidJSで作り直すと決めた経緯を語る。当サイトの実観測（2026-11-02）では、Nord Accountの法務ページはHTMLに本文を持たず、スクリプトで描かれる。ヘルプセンターはZendeskのヘッダーを返した。
:::

:::fact
NordVPNのプライバシーの告知（2026年7月20日の版）は、インターネットの活動を監視、記録、保存せず、使用帯域、通信ログ、IPアドレス、閲覧情報を保存しないとする。そのうえで処理するものとして、同時接続の数を制限するための最後のセッションの情報（セッション終了後15分以内に自動で削除）と、不正利用の防止とチャージバックへの反論のために、過去90日間にサービスを使ったかどうかの情報を挙げる。専用IPと専用サーバーは利用者のメールアドレスとアカウントの情報に結びつき、SmartDNSは有効にするとIPアドレスを保存するとはっきり書く。アプリは端末の国や市、OS、接続先のサーバーやプロトコルなどを、端末で作るランダムな識別子とともに集める場合があると書き、日本のApp Storeのプライバシーの表示（開発者の自己申告）は、メールアドレスとユーザーIDを「ユーザーに関連付けられたデータ」に挙げる。データの開示の要請は、相互法律援助条約など、パナマの法で認められた手続きを経る必要があるとされる。外部の評価について、2025年2月18日の発表は、NordVPNがDeloitte Audit Lithuaniaに依頼した5度目の保証の業務を告げる。ISAE 3000（改訂版）に基づき、2024年11月18日から12月20日までアクセスを得て、標準、Double VPN、Onion Over VPN、難読化、P2Pのサーバーの設定と展開のプロセスを見た。以前の評価は2018年、2020年、2022年、2023年で、報告書の全文はNord Accountにログインした利用者が読める。過去の事故として、ESET Irelandの2019年10月23日の記事は、NordVPNの説明として、2018年3月にフィンランドのデータセンターの事業者が残した安全でない遠隔管理の仕組みが悪用され、約3,000台のうち1台が影響を受け、その後期限が切れたTLS鍵が露出し、利用者の活動ログや認証情報は含まれなかったとした、と伝える。NordVPN自身の発表はnordvpn.comにあり、当サイトは読めていない。
:::

:::guess
NordVPNの技術の見せ方は、独自の新プロトコルで差をつけるより、WireGuardという公開された土台の上に、接続の仕組みや難読化の層を足していく方向とみられる。Linuxクライアントと`libtelio`の公開は、アプリの動きを第三者が確かめられる範囲を広げる。ただしサーバー側やWindows、macOS、iOS、Androidのアプリの全体が公開されているわけではなく、「公開されているから安全」とまでは言えない。Deloitteの保証は、依頼された範囲と期間についての手続きで、報告書の全文はアカウントの中にあり、当サイトは読んでいない。検索では2026年に6度目の評価を報じる見出しが見られたが、本文を読めていないため、ここでは本文を確認できた5度目までを書く。
:::

## 円で固定された更新の表

:::fact
更新料金のページ（2026年6月10日更新）は、プランの初回の期間が終わると自動で更新され、税を加えた表の額を、最初の支払いの通貨で請求すると説明する。利用規約とサブスクリプションの条項によれば、1年以上のプランはどれも1年ごとに更新され、更新の30日前に通知が届き（月単位以下の契約を除く）、1か月プランは更新日に、それ以外は更新期間が始まる14日前に引き落とされる。次の表の更新額の列は日本の行の値で、税は含まない。月あたりは当サイトの計算だ。日本の行にUltimateとPrimeはなく、日本にUltraとComplete Maxがある。ユーロ圏にはUltimateとUltimate Pro、Ultimate Maxが、米国にはUltimateとPrimeがある。米国のBasicは139.08ドル、Standardは149.88ドルで、ページは現地通貨で払えない国は米ドルで請求するとする。
:::

| 商品 | 1年の更新額（日本、税別） | 月あたり（当サイトの計算） |
| --- | --- | --- |
| NordVPN Basic | 21,960円 | 1,830円 |
| NordVPN Standard | 23,640円 | 1,970円 |
| NordVPN Plus | 28,320円 | 2,360円 |
| NordVPN Complete | 34,680円 | 2,890円 |
| NordVPN Ultra | 42,720円 | 3,560円 |
| NordVPN Complete Max | 45,960円 | 3,830円 |
| 専用IP | 12,840円 | 1,070円 |
| Threat Protection | 9,360円 | 780円 |
| NordPass Premium | 5,760円 | 480円 |
| NordLocker 500GB | 9,480円 | 790円 |

:::fact
一方、日本のApp Store（2026-11-02確認）のアプリ内課金の一覧には、12か月のプランが11,800円と9,300円、1か月のプランが2,100円と1,350円、「Basic」の名前の付いた12か月が11,800円、1か月が2,100円と並ぶ。ページはどの額がどの条件のものかを示さない。利用規約は、紹介の段階の価格は最初の期間に限られ、料金は変更でき、変更は次の更新から効き、事前に通知すると書く。更新料金のページは、「初回の購入には最初の期間の割引が含まれることがあり、節約額は現在の更新価格と比べたもの」と説明する。
:::

:::guess
この構成は、最初の1〜2年を割り引き、その後は1年ごとの定価で受け取る、長期前払いのVPNに多い形とみられる。App Storeの12か月の11,800円と、ウェブのBasicの更新額21,960円を見比べると、同じ1年でも購入の経路や時期で差があることがうかがえる。ただし前者が初回のものか、税の扱いがどうかはページに書かれておらず、同じ条件の比較ではない。更新額をアカウント側の法務ページに集めたのは、国ごとの通貨の額を1つの表で管理できる作りとも、購入の画面とは別に法的な説明の場所を用意した作りとも読める。[Surfshark](/ja/articles/surfshark)が閲覧者の位置に応じてスクリプトで描く表を別ページに置くのと比べると、NordVPNの表は国を問わず同じ内容を読める点で確かめやすい。
:::

## ビジネスモデル

NordVPNの売り物は、段階のあるサブスクリプションと、専用IPや専用サーバーなどの追加だ。Nord Securityはその上に、製品の幅を広げるグループの経営を重ねている。

:::fact
Nord Securityの2022年4月7日の発表によれば、同社は創業から外部の資金なしで利益を出してきたとし、Novator Venturesが主導した1億ドルの調達が初の外部資本で、評価額は16億ドルだった。2023年9月28日の発表は、Warburg Pincusなどからの1億ドルの調達で評価額が30億ドルになり、従業員が約2,000人だとする。同社のトップページは、保護する利用者2,000万人以上、法人2万5,000社以上、特許400件以上と書く。2021年10月にAtlas VPNを買収し、2024年3月25日の発表のとおり同年4月24日にAtlas VPNを終え、利用者のNordVPNへの移行を案内した。Surfsharkとの関係について、Nord Securityの2022年の発表は「2022年にSurfsharkとjoined forces」、2023年の発表は「Surfsharkとグループの企業を形成した」と書く。Surfsharkの会社概要は、2022年に両社が1つの持株会社の下で合併し、それぞれ独立したブランドとして運営すると書き、2022年の公式ブログは、別々のインフラと製品開発計画を持つ自律した会社として続けるとした。Nord Securityの現在の年表、製品の一覧、発表の末尾の会社紹介に、Surfsharkの名はない（当サイトが読んだ範囲）。2025年の発表の末尾は、Nord SecurityをNordVPNの親会社と書く。製品の面では、プライバシーポリシーがIncogniとSailyを第三者のサービスの例に挙げ、ヘルプセンターはIncogniの案内を載せる。Incogniは更新料金の表にも載るが日本の行はない。SailyはNord Securityの年表に2024年の自社の立ち上げとして載る。
:::

:::fact
アフィリエイトの規約（affiliates.nordvpn.com）は、NordVPN、NordLocker、NordPass、NordLayerが対象で、相手はnordvpn S.A.（NordLayerだけならNord Security Inc.）とする。計測のCookieは30日で、報酬は購入が返金、チャージバック、解約にならず30日を過ぎたものに発生し（一部の無料登録にも支払う場合がある）、顧客が後に解約すれば取り消される。最低支払額は100ドル、支払いの請求は発生から40日より後で、PayPalか銀行送金だ。ブランドの語への入札、商標を含むドメイン、ポップアップとポップアンダーは禁じられ、返金・クレジット・割引の掲載には毎回の書面の許可が必要で、クーポンは提供されたものだけを使う。報酬の率は、ヘルプセンターによれば選んだプランで変わり、詳しくはnordvpn.comのアフィリエイトのページにあるが、当サイトはそのページを読めていない。ヘルプセンターは、YouTubeや配信のスポンサー、クリエイターのクーポン、月替わりのクーポン、18〜26歳の学生割引、友人の紹介で1か月無料を、安く買う方法として並べる。支払いの窓口のNord Checkoutは、NordVPN、NordPass、NordLocker、Coveronを1つにまとめる。2025年3月18日の発表によれば、Coveronの身元盗用の保護は米国だけで、英国、オランダ、フランス、スウェーデン、ドイツ、イタリアにはサイバー保険の特典があるとされ、日本は挙がっていない。nordvpn.orgは、非営利団体向けの割引と緊急時のVPNの無償提供の活動を、12,600件の寄贈などの数字とともに載せる。
:::

:::guess
NordVPNの稼ぎ方は、スポンサーとアフィリエイトで新規の客を集め、割引した前払いで迎え、1年ごとの更新で回収する形とみられる。プランの段階を増やし、上のプランに脅威対策やパスワード管理を足すのは、VPNだけなら解約しやすい客を、複数の機能で留める狙いとも読める。一方で、上位の特典の一部は米国や欧州に限られ、日本の利用者には価値の出方が違う可能性がある。各国に決済の子会社を置くのは、現地の通貨や税の処理のためとみられるが、税務上の扱いは公開情報からは分からない。Surfsharkの名を年表に載せないのは、独立したブランドとして見せる方針の結果とも読め、両社の説明は矛盾しない。利用者にとっては、2つのブランドは競合する商品だが、同じグループに属する。VPNの乗り換えで運営の資本から離れたいなら、この点は確かめておく価値がある。
:::

NordVPNは、契約はパナマ、支払いは国ごとの会社、規約の言葉は英語、更新料金はアカウントの法務ページと、説明の場所が分かれたサービスだ。その分、読む場所を知っていれば、更新額も記録の範囲も文書で確かめられる。読めなかった初回の価格とプランの比較は、申し込む人自身が料金ページと決済の画面で確かめる必要がある。
