---
service: "Signal"
title: "照会されても渡せるのは2つの日付だけ — Signalが徹底する「持たない」という設計"
description: "エンドツーエンド暗号化メッセンジャーSignal。政府の照会に開示できるのが登録日と最終接続日だけになるまでデータ保持を削った設計、耐量子暗号PQXDHへの先行移行、約50人・年約5,000万ドルで回る非営利の台所事情までを公式ブログと公開資料から解剖する。"
lead: "裁判所の召喚状にSignalが提出できるのは、アカウント登録日と最終接続日——2つの日付だけだ。渡さないのではなく、設計として持っていない。約50人のチームが寄付だけで運営し、量子コンピュータ時代の暗号にも先行して移行したこの非営利メッセンジャーの構造を解剖する。"
category: consumer-app
tags: [messaging, encryption, privacy, nonprofit, open-source]
publishedAt: "2026-07-21"
updatedAt: "2026-07-21"
lastVerified: "2026-07-21"
serviceUrl: "https://signal.org/"
vendor: "Signal Technology Foundation"
origin: "US"
heroTheme: "signal"
scores: { product: 4.0, ux: 4.0, tech: 5.0, business: 3.5 }
techStack:
  - layer: "暗号プロトコル"
    name: "Signal Protocol (PQXDH)"
    confidence: confirmed
    evidence: "公式ブログ（2023-09-19）に、鍵合意プロトコルをPQXDHへ更新し、既存のX25519に耐量子のCRYSTALS-Kyberを組み合わせて「両方を破らないと復号できない」設計にしたと明記"
    evidenceUrl: "https://signal.org/blog/pqxdh/"
  - layer: "耐量子鍵カプセル化"
    name: "CRYSTALS-Kyber + X25519"
    confidence: confirmed
    evidence: "公式ブログに、Harvest Now, Decrypt Later（今収集して量子計算機で後に復号する）攻撃への対策として両方式の併用を明記"
    evidenceUrl: "https://signal.org/blog/pqxdh/"
  - layer: "コアライブラリ"
    name: "libsignal (Rust)"
    confidence: confirmed
    evidence: "公式GitHubリポジトリ（signalapp/libsignal）の主要言語がRustであることを実確認（2026-07-21）。クライアント横断の暗号実装をRustで共通化"
    evidenceUrl: "https://github.com/signalapp/libsignal"
  - layer: "サーバー"
    name: "Signal-Server (Java)"
    confidence: confirmed
    evidence: "公式GitHubリポジトリ（signalapp/Signal-Server）が公開されており、主要言語がJavaであることを実確認（2026-07-21）"
    evidenceUrl: "https://github.com/signalapp/Signal-Server"
  - layer: "公式サイト配信"
    name: "Cloudflare"
    confidence: confirmed
    evidence: "当サイトのHTTPヘッダー実観測（server: cloudflare・cf-cache-status、2026-07-21）"
    evidenceUrl: "https://signal.org/"
sources:
  - label: "Signal公式ブログ: Signal is expensive（運営コスト内訳・年約5,000万ドル・2023-11-16）"
    url: "https://signal.org/blog/signal-is-expensive/"
    accessedAt: "2026-07-21"
  - label: "Signal公式ブログ: PQXDH — 耐量子鍵合意への移行（2023-09-19）"
    url: "https://signal.org/blog/pqxdh/"
    accessedAt: "2026-07-21"
  - label: "Signal公式: Government Requests（照会対応の全文公開・開示できるのは登録日と最終接続日のみ）"
    url: "https://signal.org/bigbrother/"
    accessedAt: "2026-07-21"
  - label: "Signal公式ブログ: 電話番号プライバシーとユーザーネーム導入"
    url: "https://signal.org/blog/phone-number-privacy-usernames/"
    accessedAt: "2026-07-21"
---

## サービス解説

Signalはエンドツーエンド暗号化を既定とするメッセンジャーだ。運営は501(c)(3)の非営利団体Signal Technology Foundationで、広告も投資家も持たず、寄付で運営される。メッセージ・通話・プロフィール・グループ情報・連絡先——運営自身がそのどれにもアクセスできない設計を掲げる。

:::fact
公式の照会対応ページには、実際に受けた召喚状・捜索令状と回答が原文で公開されている（2016年の初例から2026年の大陪審召喚状まで）。エンドツーエンド暗号化とデータ最小化により、法的強制があってもSignalが提供できるのは「アカウント登録日時」と「最終接続日」の2点だけだと明記される。運営コストも公式ブログで開示されており、2025年には年約5,000万ドル——ストレージ130万ドル・サーバー290万ドル・帯域280万ドル・SMS認証600万ドル・人件費約1,900万ドル（約50人）——と、LINEやKakaoTalkが数千人規模で運営される中で際立って小さい。
:::

:::pull
「渡さない」のではない。「持っていない」。照会への回答が2つの日付になるのは方針ではなく、アーキテクチャの帰結だ。
:::

::scorecard

## UX分析

SignalのUXは「セキュアであることを意識させない」ことに向けられている。暗号は設定項目ではなく前提であり、使い心地は普通のメッセンジャーと変わらない。

- **暗号化はオプトインではなくデフォルト**。セキュリティを「上級者向け設定」にしない判断が、暗号化メッセージングを専門家の道具から日常の道具に変えた。
- **普通のアプリとして成立している**。ステッカー・音声/ビデオ通話・ストーリーと、機能面で主流メッセンジャーに追随する。「安全だが不便」という定番のトレードオフを拒否する製品方針だ。
- **電話番号への依存を段階的に手放している**。ユーザーネーム機能の導入で、電話番号を知らせずに会話を始められるようになった。連絡先=電話帳という同期の簡単さと、番号という個人情報の露出のバランスを取り直している。
- **メタデータ最小化の代償も見える**。既読やプロフィールの同期が競合よりも保守的に振る舞う場面があり、「持たない」設計は時に利便の遅れとして表面化する。

## 技術構成

::techstack

:::fact
Signalの暗号プロトコルは2023年9月、鍵合意をPQXDHへ更新した。既存の楕円曲線X25519に耐量子のCRYSTALS-Kyberを重ね、「攻撃者は両方を破らない限り鍵を得られない」構成で、今のうちに暗号文を収集し将来の量子計算機で復号するHarvest Now, Decrypt Later攻撃に先回りした。実装も公開されており、クライアント横断の暗号コアlibsignalはRust、サーバー実装Signal-ServerはJavaで、いずれも公式GitHubで確認できる。
:::

:::guess
主要メッセンジャーの中で最初期に耐量子暗号へ移行した動きは、Signalの本当の製品が「アプリ」ではなく「プロトコルへの信頼」であることの表れとみられる。暗号学界からの信頼が寄付と採用（他社製品への波及を含む）の源泉である以上、暗号の世代交代で後手に回ることは事業リスクそのものになる。コアをRustに寄せた設計も、メモリ安全性の欠陥が一発で信頼を毀損するという、この組織特有のリスク構造から導かれた選択と推測される。
:::

## ビジネスモデル

Signalの収益モデルは寄付だ。広告・データ販売・有料プランのいずれも持たない。

:::fact
公式ブログ（2023年11月）は運営コストの内訳を公開し、2025年に年約5,000万ドルを要すると見積もる。中でもSMS認証費用が年600万ドルと、ストレージ（130万ドル）や帯域（280万ドル）を大きく上回る。運営は約50人のフルタイムスタッフで、人件費は年約1,900万ドルとされる。
:::

:::guess
コスト全文を公開するという異例の行動自体が、寄付モデルの営業活動とみられる。監視型広告を拒否する以上、支払う理由を作れるのは透明性だけであり、「あなたのデータで稼がない代わりに、台所事情をすべて見せる」という交換を提示している。ただし年5,000万ドルを寄付で恒常的に賄えるかは未知数で、利用者数に比例して帯域・認証コストが増える構造は、成長がそのまま財務リスクになるという非営利特有の緊張を抱えていると推測される。
:::

X vs Blueskyの比較解剖で見た「見る透明性」と「出る透明性」に続けるなら、Signalの答えは第三の透明性——「そもそも見るものが存在しない」だ。照会への回答が2つの日付に縮むまでデータを削り、コストは全公開し、暗号は量子時代に先回りする。持たないことを徹底する設計は、信頼をアーキテクチャで証明するという、もっとも硬い形の約束である。
