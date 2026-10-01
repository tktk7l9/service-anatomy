---
service: "楽天モバイル"
title: "ARPU 2,921円のうち781円は通信料ではない — 1,100万回線の楽天モバイルが「携帯代の外」で回収する設計"
description: "楽天モバイルは2026年9月24日に契約数1,100万回線を超えた。料金は使ったデータ量で3段階に変わり、無制限でも税込3,278円（家族割なら3,168円）。その安さの裏で、決算資料は1回線あたりの収入（ARPU）2,921円のうち781円を、契約者が楽天市場など他の楽天サービスで増やした売上の効果として数えている。楽天グループの決算説明資料、公式の料金ページ・家族割ページ・Rakuten Linkページ、ネットワーク技術の公式解説、2019年のプレスリリース、当サイトの実観測から、完全仮想化ネットワークとOpen RAN、通話アプリで家族を束ねる仕組み、赤字を縮めながら続く基地局投資までを解剖する。"
lead: "「3GBまで968円、20GB超過後もギガ無制限で3,168円」。楽天モバイルの料金ページは、家族割を当てた3つの数字だけで説明が終わる。ところが楽天グループの決算資料を開くと、1回線あたりの月の収入は2,921円で、そのうち781円は通信料ではない。楽天モバイルの契約者が楽天市場などで余分に買い物をした分を、モバイル事業の収入として数えた「エコシステムARPU」だ。2019年に完全仮想化ネットワークで参入した4番目の携帯キャリアが、携帯代の外側でどう回収しようとしているのかを解剖する。"
category: consumer-app
tags: [telecom, subscription, family, open-ran, cdn]
publishedAt: "2026-10-01"
updatedAt: "2026-10-01"
lastVerified: "2026-10-01"
serviceUrl: "https://network.mobile.rakuten.co.jp/"
# Affiliate link placeholder: the owner must join Moshimo Affiliate (https://af.moshimo.com/)
# and get approved for the Rakuten Mobile (楽天モバイル) program before enabling this block.
# The reward terms were not verified from a primary source when this article was written;
# check the program page inside Moshimo before enabling.
# Do not use the customer referral campaign (紹介キャンペーン) link here: it is a
# points program for subscribers, not an advertising program.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<owner-id>&p_id=<program-id>&pc_id=<pc-id>&pl_id=<link-id>"
#   program: "Rakuten Mobile (Moshimo Affiliate)"
vendor: "楽天モバイル株式会社"
origin: "JP"
heroTheme: "rakuten-mobile"
scores: { product: 4.0, ux: 3.5, tech: 4.5, business: 3.5 }
techStack:
  - layer: "モバイルネットワーク（コア）"
    name: "Fully virtualized cloud-native network (NFV → containerized CNF, microservices)"
    confidence: confirmed
    evidence: "公式のネットワーク技術解説（2026-10-01時点）に、ハードウェアの機能をソフトウェアに置き換える仮想化をネットワーク全体に導入し、汎用ハードウェアで作った仮想化基盤の上で4Gと5Gのソフトウェアを同じハードウェアに共存させていると明記。5G基盤にはコンテナ技術を導入し、コンテナ化したネットワーク機能（CNF）をマイクロサービスとして機能ごとに開発しているとも書かれている"
    evidenceUrl: "https://corp.mobile.rakuten.co.jp/innovation/technology/cloud-network/"
  - layer: "無線アクセスネットワーク（RAN）"
    name: "Open RAN (O-RAN ALLIANCE spec, vDU/vCU split, AI-driven RIC)"
    confidence: confirmed
    evidence: "公式のOpen RAN解説（2026-10-01時点）に、2020年8月からO-RAN ALLIANCEに加盟し、その仕様に基づくOpen RANで商用サービスを提供していること、商用ネットワークで仮想化した分散ユニット（vDU）と集約ユニット（vCU）を完全に分離していること、RANを制御するRAN Intelligent Controller（RIC）とAIアプリケーションを開発していることが明記されている。公式の沿革は2025年にAIを使ったRICの全国展開を始めたと書く"
    evidenceUrl: "https://corp.mobile.rakuten.co.jp/innovation/technology/open-ran/"
  - layer: "伝送網・構築パートナー"
    name: "IPv6 transport/backhaul + multi-vendor partners (Cisco, Nokia, Altiostar, Intel, Red Hat, NEC/Netcracker, Mavenir, etc.)"
    confidence: confirmed
    evidence: "2019年2月12日の楽天のプレスリリースに、伝送網はテラビット級の容量で基地局からの100Gbps規模のトラフィックを収容し、IPv6ベースのためアドレス変換機が不要だと明記。パートナーとしてシスコシステムズ、ノキア、アルティオスター ネットワークス、インテル、レッドハット、OKI、富士通、シエナ、NEC/Netcracker、クアルコム、マベニール、QCTなどが挙げられている。2026年時点の構成とベンダーは公開されていない"
    evidenceUrl: "https://corp.rakuten.co.jp/news/press/2019/0212_06.html"
  - layer: "衛星通信"
    name: "AST SpaceMobile (direct-to-device satellite)"
    confidence: confirmed
    evidence: "楽天グループの2026年度第2四半期決算説明資料（2026-08-10）に、2026年第4四半期からの提供開始を目指す商用サービスは、楽天モバイルがAST SpaceMobile社の衛星を利用して提供予定と明記。これとは別に、総務省のJ-LEO事業の間接補助事業者に採択されたとも書かれている"
    evidenceUrl: "https://corp.rakuten.co.jp/investors/assets/doc/documents/26Q2MAINPPT_J.pdf"
  - layer: "通話・メッセージ・契約管理アプリ"
    name: "Rakuten Link (Android 10+ / iOS 16+, Rakuten ID login)"
    confidence: confirmed
    evidence: "公式のRakuten Linkページ（2026-10-01時点）に、アプリを使えば国内通話が無料（未使用時は30秒22円）、利用には楽天IDでのログインが必要、対応OSはAndroid 10以降とiOS 16以降、2026年7月から順次my 楽天モバイル アプリの全機能をRakuten Linkに統合し、通話・メッセージ・契約管理を一つのアプリで行えるようにしたと明記。メッセージの送受信はデータ利用量としてカウントされるとも書かれている"
    evidenceUrl: "https://network.mobile.rakuten.co.jp/service/rakuten-link/"
  - layer: "CDN・Webサイト配信"
    name: "Akamai + OpenStack Swift (origin object storage)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-01）で、network.mobile.rakuten.co.jpとcorp.mobile.rakuten.co.jpのDNSはedgekey.netを経てakamaiedge.netに解決された。network.mobile.rakuten.co.jpの応答にはX-Openstack-Request-IdとX-Trans-Id（tx〜）、X-Object-Meta-Mtimeのヘッダーがあり、OpenStackのオブジェクトストレージ（Swift）が静的ファイルの配信元になっているとみられる"
  - layer: "申し込み画面（フロントエンド）"
    name: "React + Redux + axios (webpack) with nonce-based CSP"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-01）で、onboarding.mobile.rakuten.co.jp/plansのHTMLはnpm.react-dom、npm.react-redux、npm.axios、npm.formatjs、npm.luxon、npm.crypto-jsといったwebpackのチャンクを読み込んでいた。応答のContent-Security-Policyはscript-srcにnonceと'strict-dynamic'を指定していた。ホスト名はonboarding.bss.rmb-ss.jpに解決された"
  - layer: "マーケティングサイト・計測"
    name: "jQuery 3.7.1 + KARTE + RAT (Rakuten Analytics) + Google Tag Manager"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-01）で、network.mobile.rakuten.co.jpのトップページはjquery-3.7.1.min.js、webpackでまとめた自社のbundle.js群、cdn-blocks.karte.ioのbuilder.js、r.r10s.jpのrat-sec.js、Google Tag Managerを読み込み、ABテスト用のbundleと生成AIチャット用のbundleも含んでいた"
  - layer: "WAF・ボット対策"
    name: "F5 BIG-IP (ASM/Advanced WAF)"
    confidence: speculative
    evidence: "当サイトの実観測（2026-10-01）で、portal.mobile.rakuten.co.jpとonboarding.mobile.rakuten.co.jpがTS01で始まる名前のCookieを発行していた。これはF5 BIG-IPのセキュリティ機能が使うCookieの命名に一致するが、公式な記載はない"
sources:
  - label: "楽天モバイル: 契約数が1,100万回線を突破（2026-09-25）"
    url: "https://corp.mobile.rakuten.co.jp/news/press/2026/0925_02/"
    accessedAt: "2026-10-01"
  - label: "楽天モバイル: 会社概要"
    url: "https://corp.mobile.rakuten.co.jp/about/overview/"
    accessedAt: "2026-10-01"
  - label: "楽天モバイル: 楽天モバイルの歩み"
    url: "https://corp.mobile.rakuten.co.jp/about/history/"
    accessedAt: "2026-10-01"
  - label: "楽天モバイル: Rakuten最強プラン（料金プラン）"
    url: "https://network.mobile.rakuten.co.jp/fee/saikyo-plan/"
    accessedAt: "2026-10-01"
  - label: "楽天モバイル: 最強家族割"
    url: "https://network.mobile.rakuten.co.jp/fee/family/"
    accessedAt: "2026-10-01"
  - label: "楽天モバイル: Rakuten Link"
    url: "https://network.mobile.rakuten.co.jp/service/rakuten-link/"
    accessedAt: "2026-10-01"
  - label: "楽天モバイル: 完全仮想化クラウドネイティブモバイルネットワーク"
    url: "https://corp.mobile.rakuten.co.jp/innovation/technology/cloud-network/"
    accessedAt: "2026-10-01"
  - label: "楽天モバイル: Open RAN"
    url: "https://corp.mobile.rakuten.co.jp/innovation/technology/open-ran/"
    accessedAt: "2026-10-01"
  - label: "楽天: 世界初のエンドツーエンドの完全仮想化クラウドネイティブネットワークにおいて実証実験に成功（2019-02-12）"
    url: "https://corp.rakuten.co.jp/news/press/2019/0212_06.html"
    accessedAt: "2026-10-01"
  - label: "楽天グループ: 2026年度第2四半期決算説明会資料（2026-08-10）"
    url: "https://corp.rakuten.co.jp/investors/assets/doc/documents/26Q2MAINPPT_J.pdf"
    accessedAt: "2026-10-01"
  - label: "楽天グループ: 2026年度第2四半期決算説明会 補足資料（2026-08-10）"
    url: "https://corp.rakuten.co.jp/investors/assets/doc/documents/26Q2PPT_J.pdf"
    accessedAt: "2026-10-01"
---

楽天モバイルは、楽天グループが2019年に始めた4番目の携帯キャリアだ。料金は「使った分だけ」の1プランに近く、無制限でも月3,000円台に収まる。ただ、この会社を料金表だけで見ると半分を見落とす。決算資料は、契約者が楽天市場などで使ったお金の一部を、モバイル事業の収入として数えている。

## サービス解説

楽天モバイル株式会社は2018年1月に設立された楽天グループの100%子会社で、携帯電話サービス「楽天モバイル」のほか、ホームルーター「Rakuten Turbo」、光回線「楽天ひかり」、電気の「楽天エナジー」などを提供している。本社は東京都世田谷区の楽天クリムゾンハウス、従業員は992人（2026年1月1日時点）。

:::fact
公式の沿革（2026-10-01時点）によれば、楽天は2014年10月に他社の回線を借りる格安スマホ（MVNO）を始め、2018年に総務省から4G（1.7GHz帯）の周波数を割り当てられて基地局の建設を始めた。2019年10月に自前の回線を持つ携帯キャリア（MNO）としてサービスを始め、2020年4月に本格サービスの「Rakuten UN-LIMIT」、2023年6月に「Rakuten最強プラン」を始めた。2023年10月に「プラチナバンド」と呼ばれる700MHz帯の割り当てを受け、2024年に商用サービスを始めている。2026年9月25日のプレスリリースによれば、契約数は9月24日に1,100万回線を超えた。この数字は法人のBCP（事業継続）用回線、他社への回線の卸売（MVNE）、MVNOを含み、BCP・MVNO・MVNEを除いた自社回線（MNO）の契約は1,018万回線だ。
:::

:::fact
公式の料金ページと家族割ページ（2026-10-01時点）によれば、「Rakuten最強プラン」は毎月のデータ利用量で料金が3段階に変わる。家族割（最強家族割・家族なら誰でも110円引き）を当てた税込の月額は、3GBまで968円、20GBまで2,068円、20GB超で2,880円（税込3,168円）で、20GBを超えても速度は無制限（混雑時などは速度制御あり）。家族割を当てない場合はそれぞれ110円高く、無制限は税込3,278円になる。動画配信のU-NEXTを付けた「Rakuten最強U-NEXT」は月3,980円（税込4,378円）。Rakuten Linkアプリを使えば国内通話は無料で、アプリを使わない場合は30秒22円。家族割は親等を問わず最大20回線まで、期間の制限なく適用される。
:::

:::pull
料金ページの主役は968円・2,068円・3,168円の3つの数字だ。ところが決算資料では、1回線あたりの月の収入2,921円のうち781円が、通信料ではなく「楽天市場などで増えた売上」として数えられている。
:::

::scorecard

## UX分析

楽天モバイルの体験は、「楽天IDとアプリに寄せるほど得になる」ように設計されている。料金そのものはシンプルだが、割引とポイントの条件はRakuten Linkアプリと楽天IDの利用を前提にしている。

- **使った量で自動的に料金が決まる**。料金ページは「使わなければ勝手に安くなる」と書く。容量のプランを選ぶ必要がなく、月に3GBしか使わなかった月は968円（家族割適用時）で終わる。データ量は国内だけでなく海外ローミングも含めて数えられる。
- **通話無料はアプリの中だけ**。国内通話が無料になるのはRakuten Linkアプリから発信した場合で、OS標準の電話アプリから発信すると30秒22円かかる。0570などで始まる番号も無料の対象外だ。スマホに電話アプリが2つある状態になり、どちらでかけたかで料金が変わる。
- **契約管理もLinkへ一本化**。2026年7月から、契約内容やデータ利用量を確認する「my 楽天モバイル」アプリの機能が順次Rakuten Linkに統合された。家族割ページは、家族割のグループ作成と管理にRakuten Linkが必要だと書く。通話・メッセージ・契約・家族管理が一つのアプリにまとまった一方、Linkを使わない人には入口が狭くなった。
- **紹介で家族を連れてくる導線**。家族割ページによれば、他社から電話番号そのままで乗り換える人を1人紹介すると合計2万ポイント（乗り換え以外の新規は12,000ポイント）が分割で付与され、「家族5人で紹介し合うと合計10万ポイント」とうたう。ポイントの付与にも、紹介された側のRakuten Link利用が条件になっている。
- **短期解約への歯止め**。料金ページによれば、同一名義で累計5回線目以上の契約には、2025年11月19日から1回線あたり税込3,850円の契約事務手数料がかかる。「累計」は2020年4月8日以降に契約したすべての回線（解約済みを含む）を数える。4回線目までは無料のままだ。

## 技術構成

::techstack

:::fact
公式のネットワーク技術解説（2026-10-01時点）によれば、楽天モバイルは専用ハードウェアとソフトウェアが一体になった従来の通信設備の代わりに、クラウドサーバーと同じ汎用ハードウェアの上でネットワーク機能をソフトウェアとして動かしている。4Gと5Gのソフトウェアを同じハードウェアに共存させ、世代の移行もハードウェアを替えずにソフトウェアの追加・更新で対応できるとする。5Gの基盤ではネットワーク機能をコンテナ化（CNF）し、小さな独立したサービス（マイクロサービス）として機能ごとに開発している。基地局では無線信号を処理する機能をエッジクラウドに移し、基地局そのものを簡素にしたと書く。
:::

:::fact
2019年2月12日の楽天のプレスリリースは、サービス開始前の設計を詳しく説明している。無線アクセスからコアまでをすべて共通のTelco Cloud上に載せ、千を超える拠点に分散させて共通のオーケストレーション層で管理する。伝送網はテラビット級の容量で、IPv6ベースのためアドレス変換機が要らない。同じリリースは、シスコシステムズ、ノキア、アルティオスター ネットワークス、インテル、レッドハット、NEC/Netcracker、マベニールなど十数社をパートナーに挙げていた。公式のOpen RAN解説は、2020年8月からO-RAN ALLIANCEに加盟し、特定のベンダーに縛られないマルチベンダー構成で設備投資を抑えていると書く。2025年にはAIを使ってRANを制御するRICの全国展開を始め、2026年2月にはTM ForumからRANの省電力化で「自律型ネットワークレベル4」の認定を受けたと沿革にある。
:::

:::fact
楽天グループの2026年度第2四半期決算説明資料によれば、楽天モバイルのネットワーク関連の設備投資は第2四半期に393億円で、2026年度の計画2,000億円は変えていない。用地交渉など基地局建設の前工程を内製化し、2026年に電波を出す目標数に対して前工程の約9割を終えたという。JR山手線は全30駅のうち25駅で5Gの構築を終え、残る5駅も2026年内に構築する予定。衛星通信では、2026年第4四半期から米AST SpaceMobileの衛星を使った商用サービスを始めることを目指している。
:::

:::guess
Webの側は、ネットワークほど先進的な作りではない。当サイトの観測では、料金ページなどの公式サイトはAkamaiのCDNの後ろにあり、配信元はOpenStackのオブジェクトストレージとみられる。トップページはjQueryと自社のwebpackバンドルで組まれ、KARTEや楽天共通の計測（RAT）、ABテスト用のスクリプトが載っていた。一方で申し込み画面はReactとReduxのSPAで、nonce方式の厳しいCSPを付けていた。宣伝の画面は改修の速さ、契約の画面は安全性を優先して作り分けていると推測される。料金の数字の多くが画像の代替テキストに入っていることも、キャンペーンの差し替えを画像単位で回す運用をうかがわせる。
:::

:::guess
Rakuten Linkへの一本化は、技術と料金の両方に効いているとみられる。メッセージがデータ通信として数えられることから、Linkの通話もIPで運ぶ設計と推測される。そうであれば、Linkを使うほど通話が自社のデータ網の上に乗り、「国内通話無料」を成り立たせやすくなる。同時に楽天IDでのログインが前提になるため、契約者を楽天市場やポイントと結びつける入口にもなる。
:::

## ビジネスモデル

収益の柱は月々の通信料と端末の販売だ。ただし楽天モバイルの損益は、それだけで評価されていない。決算資料は、契約者が楽天グループの他のサービスで増やした売上を「エコシステムARPU」としてモバイル事業の収入に足し込んでいる。

:::fact
楽天グループの2026年度第2四半期決算説明資料と補足資料（2026-08-10）によれば、楽天モバイルの第2四半期の売上収益は1,013億円（前年同期比11.9%増）で、そのうちMNOは627億円（22.8%増）。Non-GAAP営業損失は323億円で、前年同期から67億円改善した。EBITDAは59億円（6.4%増）。2026年6月末の全契約回線数は1,075万回線（前年同期比178万回線増）、BCP回線を除いた調整後のMNO解約率は1.38%。モバイルセグメント全体（楽天シンフォニーなどを含む）では、売上収益1,214億円、Non-GAAP営業損失331億円だった。
:::

:::fact
同じ資料によれば、第2四半期のMNOのARPU（1回線あたりの月の収入）は2,921円で、内訳はデータ1,761円、通話87円、オプション215円、その他（広告など）77円、エコシステム781円。エコシステムARPUは「MNO契約者によるグループ売上のアップリフト効果」で、契約から1年たった利用者に限ると917円になる。そこから関連する売上原価とグループ会社からの送客効果を差し引いた「正味ARPU」は2,516円（前年同期比42円増）。資料は、2023年6月の最強プラン開始以降、データ使用量の中央値が1GB上がるごとにB2CのデータARPUが約31円上がる相関（R²=0.896）があり、20GBを超えて使う利用者の比率が前年から3.6ポイント上がったと説明している。
:::

:::fact
料金ページによれば、楽天モバイルの契約者は楽天市場での買い物に「楽天モバイルSPU」として+4倍のポイントが付き（要エントリー・毎月の上限2,000ポイント・期間限定ポイント）、楽天会員の1倍と合わせて5倍になる。2026年2月からは楽天銀行と共同の上乗せ金利も始めた（プレスリリース）。決算資料の注記は、PMCF（プレマーケティングキャッシュフロー）の計算で、マーケティング費やショップ費用とともに「SPU等」を顧客獲得関連費用として扱っている。
:::

:::fact
同じ決算資料は、2026年4月に米ドル建て永久劣後債（817億円）、6月に円建てシニア債（200億円）を償還し、5月には保有有価証券の売却で約2,000億円を調達して、2026年の社債償還の原資は確保済みと書く。2027年以降の償還については、銀行借入や資産流動化などを組み合わせて対応する方針を示している。楽天グループは第2四半期に連結の税後利益272億円を計上し、資料はこれを2020年第2四半期以来の黒字としている。
:::

:::guess
料金表とARPUを並べると、設計の意図が見えてくる。通信料だけで見ると、無制限3,278円の上限がある以上、1回線から取れる額には天井がある。そこで楽天は、データを使うほど上がる従量の段階でデータARPUを押し上げつつ、天井の外側、つまり契約者が楽天市場や楽天銀行で使うお金をモバイルの収入として数える。2,921円のうち781円がその部分で、契約1年後の利用者では917円に増える。通話をLinkに、家族割の管理をLinkに、ポイントを楽天IDに寄せるUXは、このエコシステムARPUを育てるための導線だとみられる。楽天経済圏への入口という役割は、[楽天トラベル](/ja/articles/rakuten-travel)とも重なる。ただしエコシステムARPUは楽天グループ内での評価の方法で、同じ金額の現金が楽天モバイルに入るわけではない点には注意が要る。
:::

:::guess
一方で、赤字はまだ続いている。Non-GAAPで四半期323億円の営業損失を縮めながら、年2,000億円の基地局投資を続ける必要がある。仮想化とOpen RANで設備と運用のコストを下げる技術の選択は、4番目のキャリアとして後から全国網を作るための条件だったと推測される。5回線目以上の手数料や本人確認の強化で「ホッピング」と呼ばれる短期解約を抑え、解約率を下げる施策も、1回線あたりの獲得費を回収する期間を延ばす狙いとみられる。
:::

楽天モバイルの料金ページは3つの数字しか見せないが、決算資料には、携帯代の外側で回収する仕組みが書かれている。家族を紹介で連れてきて、通話も契約管理もLinkに集め、楽天市場のポイントを上乗せする。1,100万回線という規模は、その導線の上に積み上がったとみられる。
