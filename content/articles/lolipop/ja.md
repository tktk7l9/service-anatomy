---
service: "ロリポップ！"
title: "月額121円のレンタルサーバーが、半年でMCP・AIエージェント・AIゲートウェイ・デプロイ基盤を足した — 契約38万件、25年目のロリポップ！が「AIエージェントに選ばれるサーバー」へ向かう理由を解剖する"
description: "GMOペパボのロリポップ！は2001年11月に始まった国内のレンタルサーバーで、2026年6月末の契約件数は38万件、2026年上期のサービス売上は13億4,800万円。月額121円のエコノミーから2,420円のエンタープライズまで5プランで、36カ月契約の単価と1カ月契約の単価は最大2.2倍違う。2026年4月から9月の半年で、OpenClawを1クリックで動かすAIエージェントクラウド、npx一発で公開するデプロイナウ、14社のモデルを1つのキーで呼ぶAIゲートウェイ、公開APIとMCPサーバー、AIコーディングエージェントに読ませるskill.mdを立て続けに出した。GMOペパボの決算説明資料、プレスリリース、公式の料金・仕様・取次店ページ、Pepabo Tech Portalの技術スタック、当サイトの実観測から、料金の階段、OpenStackとベアメタルの上の共用サーバー、AI関連の新サービスへの投資と利益の関係を解剖する。"
lead: "ロリポップ！の料金ページを開くと、月額121円のエコノミーと330円のライトが先に目に入る。その同じナビゲーションに、2026年に入ってから「MCPサーバー・公開API」「AIエージェント Skills」「AIエージェントクラウド」「AIゲートウェイ」「デプロイナウ」が並んだ。25年目の国内レンタルサーバーが、人がブラウザで管理画面を触る前提から、AIエージェントがAPIで触る前提へ、半年で看板を書き換えた。その投資は、親会社の決算説明資料に「営業利益の減少要因」として、はっきり数字で出ている。"
category: dev-tool
tags: [hosting, wordpress, ai, mcp, small-business, ai-agent, vibe-coding]
publishedAt: "2026-10-06"
updatedAt: "2026-10-06"
lastVerified: "2026-10-06"
serviceUrl: "https://lolipop.jp/"
# Affiliate link placeholder: Lolipop's official "取次店制度" (https://lolipop.jp/partner/) is a
# referral scheme for web agencies and freelancers who introduce clients (rewards per plan:
# e.g. ¥4,400 for a new Standard contract of 6 months or more, paid monthly, tax included,
# cannot be combined with coupons). Whether it may be used from a review article was not
# confirmed. No official page confirms an ASP program; the owner's existing Moshimo Affiliate
# account (used for the sister service ColorMe Shop) is the first place to check, then A8.net.
# Paste the tracking link and the material's text (label) here before enabling this block.
# Keep the url identical in ja.md and en.md (parity.ts checks it).
# affiliate:
#   url: "https://af.moshimo.com/af/c/click?a_id=<owner-id>&p_id=<program-id>&pc_id=<pc-id>&pl_id=<link-id>"
#   program: "Lolipop Affiliate Program (Moshimo Affiliate)"
vendor: "GMOペパボ株式会社"
origin: "JP"
heroTheme: "lolipop"
scores: { product: 4.0, ux: 3.5, tech: 4.0, business: 3.5 }
techStack:
  - layer: "共用サーバー（OS・Webサーバー）"
    name: "Ubuntu + nginx + Apache HTTP Server (Economy to Standard) / LiteSpeed Web Server (6.3, High Speed and Enterprise)"
    confidence: confirmed
    evidence: "公式の「サーバーの仕様」ページ（2026-10-06時点）に、サーバー情報はLinux（Ubuntu）、共用サーバー、ハイスピードプラン・エンタープライズプランのWebサーバーはLiteSpeed 6.3と明記。料金ページはエコノミー〜スタンダードがNginx+Apache、ハイスピード以上がNginx+LiteSpeedで、PHPはCGI版・モジュール版・LiteSpeed版、ハイスピード以上にLiteSpeed Cacheがあると書く"
    evidenceUrl: "https://lolipop.jp/service/server-spec/"
  - layer: "ホスティング基盤"
    name: "Bare metal + OpenStack + Kubernetes (private cloud \"Nyah\") + Google Cloud + IDCF Cloud"
    confidence: confirmed
    evidence: "Pepabo Tech Portalの「GMOペパボの技術スタック · ロリポップ・ムームードメイン事業部」（2026-10-06時点）に、InfrastructureとしてBaremetal・OpenStack・Kubernetes・Google Cloud・IDCF Cloud、Hosting Web & StorageとしてNginx・ngx_mruby・Apache httpd・LiteSpeed・ProFTPD、Hosting SetupとしてMAAS・Cobbler、Container Runtimeとしてdockerd・containerd・haconiwaが列挙されている。当サイトの実観測（2026-10-06）で、lolipop.jp のIPアドレス（133.130.34.142）のwhoisのnetnameは PEPABO-NYAH、descrは GMO Pepabo, Inc. だった"
    evidenceUrl: "https://tech.pepabo.com/tech-stack/hosting/"
  - layer: "データベース・メール・DNS"
    name: "MySQL (8) / PostgreSQL + Postfix + Dovecot + Courier-IMAP + Amazon SES + PowerDNS"
    confidence: confirmed
    evidence: "同じ技術スタックページに、Hosting DatabaseとしてMySQL・PostgreSQL、Hosting Mail & DNSとしてPostfix・Dovecot・Courier-IMAP・Amazon SES・PowerDNSが列挙されている。料金ページはライト以上のデータベースをMySQL8（ライト50・スタンダード100・ハイスピード以上は無制限）と書き、仕様ページはメールのウイルスチェックにF-Secure、SSLにGlobalSign（有料）とLet's Encrypt（無料）を挙げる"
    evidenceUrl: "https://tech.pepabo.com/tech-stack/hosting/"
  - layer: "運用・監視・CI/CD"
    name: "Prometheus + Apache Kafka + Fluentd + Elastic APM + Mackerel + Sentry + Datadog + GitHub Actions + Argo CD + Chef + Puppet + Ansible + Terraform"
    confidence: confirmed
    evidence: "同じ技術スタックページに、ObservabilityとしてPrometheus・Kafka・Fluentd・Elastic APM・Mackerel・Sentry・Datadog、CI/CDとしてGitHub Actions・ArgoCD、Backend/Hosting InfrastructureとしてRuby・Chef・Perl・gRPC・Puppet・Ansible・Hashicorp Terraform、Other MiddlewareとしてMemcached・Redis・Consul・Vault・Wazuhが列挙されている"
    evidenceUrl: "https://tech.pepabo.com/tech-stack/hosting/"
  - layer: "公開API・MCPサーバー"
    name: "Public REST API (Personal Access Token) + Lolipop MCP server"
    confidence: confirmed
    evidence: "GMOペパボの2026年7月16日のお知らせに、ロリポップ！が開発者向けの公開APIとMCPサーバーを提供開始し、ドメイン・サブドメイン・SSL・WordPress・アカウント情報を操作でき、ユーザー専用ページでAPIキーを発行してClaude Code・Cursor・Gemini CLI・OpenAI Codexなどから使うと明記。公式ページは利用できるプランをスタンダード・ハイスピード・エンタープライズとし、Personal Access Token（PAT）でメール・PHPバージョン・MySQL・FTPアカウントも扱えると書く"
    evidenceUrl: "https://pepabo.com/news/information/202607161300/"
  - layer: "AIゲートウェイ"
    name: "Lolipop AI Gateway (OpenAI- and Anthropic-compatible APIs, 15 providers)"
    confidence: confirmed
    evidence: "2026年8月25日のプレスリリースに、ロリポップ！AIゲートウェイは14社のAIプロバイダのLLMをAnthropicおよびOpenAI互換の統一APIで提供し、初期費用・月額基本料は無料、前払いクレジットの購入時に5%のプラットフォーム手数料がかかると明記。9月18日のお知らせで米TypeSafe AIの判定特化モデルJevに対応し、公式ページ（2026-10-06時点）は15社・65モデル、OpenAI Responses API・Chat Completions API・Anthropic Messages APIに対応と書く"
    evidenceUrl: "https://pepabo.com/news/press/202608251600/"
  - layer: "デプロイナウ（Webアプリのホスティング）"
    name: "Next.js / Nuxt / Astro (disposable builds, sleep-on-idle, WAF, auto HTTPS)"
    confidence: confirmed
    evidence: "公式ページ（2026-10-06時点）に、npx lolipop deployでURLを発行し、Next.js・Nuxt・Astroをそのままビルドして公開、WAFで保護、全プロジェクトで自動HTTPS、URLは https://（プロジェクト名）.lolipop-now.app と明記。Pepabo Tech Portalの2026年9月30日のインタビューは、ビルド環境を毎回使い捨てる設計と、一定時間アクセスがなければスリープしアクセスが来た時点で起動する仕組み、チーム全員がClaude Codeで実装した開発体制を説明している"
    evidenceUrl: "https://lolipop.jp/deploy-now/"
  - layer: "AIエージェントクラウド"
    name: "OpenClaw / Hermes Agent / NanoClaw (dedicated server per user)"
    confidence: confirmed
    evidence: "2026年4月22日のプレスリリースに、ロリポップ！AIエージェントクラウドはOpenClawをブラウザ上の操作だけで動かす機能として提供開始すると明記。公式ページ（2026-10-06時点）はOpenClaw・Hermes Agent・NanoClawの3種類に対応し、料金は月1,200円、ユーザーごとに独立したサーバーを用意し、お試し用のAI無料枠付きで自分のAPIキーも登録できると書く"
    evidenceUrl: "https://pepabo.com/news/press/202604221100/"
  - layer: "サービスサイト・管理画面"
    name: "PHP (lolipop.jp, EUC-JP user panel) + React / Next.js / Vue.js / Nuxt (newer surfaces)"
    confidence: likely
    evidence: "当サイトの実観測（2026-10-06）で、lolipop.jp はHTTP/1.1でserverヘッダーを返さず、PHPSESSIDのCookieを発行し、user.lolipop.jp の応答は charset=EUC-JP だった。技術スタックページのFrontendにはReact/Next.jsとVue.js/Nuxt.jsが列挙され、pepabo.com は CloudFront 経由、tech.pepabo.com は server: GitHub.com を返した"
sources:
  - label: "ロリポップ！公式: ご利用料金（プラン・契約期間ごとの月額・機能比較）"
    url: "https://lolipop.jp/pricing/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: サーバーの仕様"
    url: "https://lolipop.jp/service/server-spec/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: トップページ（稼働率・累積利用実績・サポート満足度）"
    url: "https://lolipop.jp/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: ロリポップMCPサーバー・公開API"
    url: "https://lolipop.jp/rentalserver/developers/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: AIエージェント Skills（skill.md）"
    url: "https://lolipop.jp/ai/skills/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: AIエージェントクラウド"
    url: "https://lolipop.jp/ai/agent-cloud/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: AIゲートウェイ"
    url: "https://lolipop.jp/ai/gateway/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: デプロイナウ"
    url: "https://lolipop.jp/deploy-now/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: AIホームページ"
    url: "https://lolipop.jp/ai/homepage/"
    accessedAt: "2026-10-06"
  - label: "ロリポップ！公式: 取次店制度"
    url: "https://lolipop.jp/partner/"
    accessedAt: "2026-10-06"
  - label: "GMOペパボ株式会社: 2026年12月期 第2四半期 決算説明資料（2026-08-13）"
    url: "https://www.nikkei.com/markets/ir/irftp/data/tdnr/tdnetg3/20260813/g2rw0w/140120260813519264.pdf"
    accessedAt: "2026-10-06"
  - label: "GMOペパボ: ロリポップ！レンタルサーバーが公開APIとMCPサーバーを提供開始（2026-07-16）"
    url: "https://pepabo.com/news/information/202607161300/"
    accessedAt: "2026-10-06"
  - label: "GMOペパボ: 『ロリポップ！AIエージェントクラウド』を提供開始（2026-04-22）"
    url: "https://pepabo.com/news/press/202604221100/"
    accessedAt: "2026-10-06"
  - label: "GMOペパボ: 『ロリポップ！デプロイナウ』提供開始（2026-07-02）"
    url: "https://pepabo.com/news/press/202607021300/"
    accessedAt: "2026-10-06"
  - label: "GMOペパボ: 『ロリポップ！AIゲートウェイ』提供開始（2026-08-25）"
    url: "https://pepabo.com/news/press/202608251600/"
    accessedAt: "2026-10-06"
  - label: "GMOペパボ: 米TypeSafe AI 提供のJevに対応「ロリポップ！AIゲートウェイ」（2026-09-18）"
    url: "https://pepabo.com/news/information/202609181900"
    accessedAt: "2026-10-06"
  - label: "Pepabo Tech Portal: GMOペパボの技術スタック · ロリポップ・ムームードメイン事業部"
    url: "https://tech.pepabo.com/tech-stack/hosting/"
    accessedAt: "2026-10-06"
  - label: "Pepabo Tech Portal: 「ロリポップ！デプロイナウ」開発秘話（後編・2026-09-30）"
    url: "https://tech.pepabo.com/2026/09/30/deploynow-interview/"
    accessedAt: "2026-10-06"
---

ロリポップ！は、GMOペパボが2001年から運営する国内のレンタルサーバーだ。月額121円から借りられる共用サーバーで、WordPressのサイトやメールを置く用途が中心にある。その土台の上に2026年、AIエージェントのための新しいサービスが半年で5つ乗った。安いサーバーを大量に貸す商売と、AIのための国産インフラという看板が、同じブランドの下に同居している。

## サービス解説

GMOペパボ株式会社は東証スタンダード上場（証券コード3633）の会社で、ロリポップ！のほかにムームードメイン、[カラーミーショップ](/ja/articles/colorme-shop)、minne、SUZURIを運営する。決算説明資料の沿革によれば、ロリポップ！の提供開始は2001年11月で、会社の設立（2003年1月、福岡の有限会社paperboy&co.）より早い。2004年3月にGMOインターネットグループの連結子会社になり、2008年12月にJASDAQに上場、2014年4月にGMOペパボへ社名を変えた。

:::fact
GMOペパボの2026年12月期第2四半期決算説明資料（2026-08-13）によれば、ロリポップ！は「国内最大級のレンタルサーバーサービス」で、契約件数は38万件（2026年6月末時点）、主なユーザーは個人や中小法人、利用料金は月額121円〜。2026年上期（2Q累計）のロリポップ！の売上高は1,348百万円（前年同期比102.7%、+35百万円）、営業利益は562百万円（同93.5%、△39百万円）で、増収の要因に「ロリポップ！ for Gamers」と「ロリポップ！固定IPアクセス」、減益の要因に「AI関連サービスの開発、プロモーションに伴う費用計上」が挙げられている。この数字にはfor Gamers、固定IPアクセス、AIエージェントクラウド、デプロイナウ、ゼロトラストリンクが含まれる。四半期ごとの売上は2024年2Qの642百万円から2026年2Qの678百万円へ緩やかに伸び、営業利益は同じ期間に304百万円から268百万円へ下がっている。
:::

:::fact
公式の料金ページ（2026-10-06時点）によれば、レンタルサーバーは5プランで、初期費用は0円、無料お試し期間は10日間。36カ月契約の月額はエコノミー121円、ライト330円、スタンダード605円、ハイスピード660円、エンタープライズ2,420円で、1カ月契約では231円、605円、1,265円、1,430円、2,860円、12カ月契約では231円、539円、957円、1,045円、2,585円になる。容量（ファイル・メール・DB合算のSSD）は120GB、350GB、450GB、700GB、1.2TB、独自ドメインは50、200、300、無制限、無制限、MySQL8はライト50、スタンダード100、ハイスピード以上は無制限で、エコノミーにはない。SSHはスタンダード以上、電話サポートはハイスピード以上、ハイスピード以上では12カ月以上の契約と自動更新の設定をしている間、独自ドメイン2個の新規取得・更新がずっと無料になる。
:::

:::fact
公式トップページ（2026-10-06時点）は、サーバー稼働率99.9%、累積250万人の利用実績、サポート対応後のアンケート（2026年1月1日〜8月31日集計）でチャットサポート満足度90%以上、60秒でWordPressをインストールできると書き、HostAdvice.comの「2026の日本でのウェブホスティングのマーケットシェア」における順位を2026年9月30日に確認したと注記している。AIチャットは24時間、専門スタッフはチャット・メール・電話（電話はハイスピード以上）で対応する。
:::

:::pull
ハイスピードプランは36カ月契約なら月660円、1カ月契約なら月1,430円。同じサーバーで単価は2.2倍違う。月121円のエコノミーだけは、1カ月契約でも231円と、期間による差が最も小さい。
:::

::scorecard

## UX分析

ロリポップ！の体験は、「人が管理画面で触る」入口と「AIエージェントがAPIで触る」入口の2つに分かれ始めている。前者は25年分の蓄積があり、後者は2026年に一気に足された。

- **安さは期間で決まる**。料金ページの大きな数字（121円、330円、660円）はいずれも36カ月契約の単価で、1カ月契約の単価は別表にある。[Hostinger](/ja/articles/hostinger)の48カ月先払いほど極端ではないが、ハイスピードの660円と1,430円のように、同じプランで2倍以上の開きがある。一方で初期費用は0円、10日間の無料お試しがあり、お試し中も契約後も同じ10日間が一律に付く。
- **機能は上のプランに寄せてある**。SSHはスタンダード以上、LiteSpeedと電話サポートはハイスピード以上、MCPサーバー・公開APIとAIエージェントSkillsはスタンダード以上（Skillsの説明は「SSH機能が使えるプランが必要」）。月額330円のライトは「手軽にWordPressサイトが作成できる」入口で、AIで自動化したい人は最低でも605円からになる。
- **AIに読ませる手順書を公開している**。AIエージェント Skillsのページは、Claude Code・Cursor・Gemini CLIなどに「https://lolipop.jp/ai/skills/skill.md を読んで、指示に従ってセットアップして」と送るだけだと説明する。当サイトが読んだskill.md（2026-10-06時点）は、AIに向けて「Step 1から順番に実行してください」と指示し、ブラウザを直接操作する権限がない場合はPlaywrightのコードを書いて実行すること、セレクタが失敗したらスクリーンショットを撮って最大3回まで自律回復することまで書いている。人向けのマニュアルと同じ場所に、AI向けの手順書が置かれた。
- **会話だけでも作れる**。AIホームページは、AIの質問に答えて色や文章を調整し、1クリックで公開する流れで、10日間の無料お試し、最短10分で公開と説明され、料金は1カ月1,540円から36カ月660円まで期間で変わる。AIエージェントクラウドは「3分でAIエージェントが起動」「ターミナルもプログラミングも不要」で、ロリポップのシンプルな管理画面とOpenClaw・Hermes Agentのネイティブな管理画面をサーバー単位で切り替えられる。

## 技術構成

::techstack

:::fact
Pepabo Tech Portalの「GMOペパボの技術スタック · ロリポップ・ムームードメイン事業部」（2026-10-06時点）によれば、ホスティングの基盤はBaremetal、OpenStack、Kubernetes、Google Cloud、IDCF Cloudで、物理サーバーのセットアップにMAASとCobbler、WebとストレージにNginx、ngx_mruby、Apache httpd、LiteSpeed、ProFTPD、OpenSSH、データベースにMySQLとPostgreSQL、メールとDNSにPostfix、Dovecot、Courier-IMAP、Amazon SES、PowerDNS、コンテナランタイムにdockerd、containerd、haconiwa、監視にPrometheus、Kafka、Fluentd、Elastic APM、Mackerel、Sentry、Datadog、CI/CDにGitHub ActionsとArgoCD、構成管理にChef、Puppet、Ansible、Terraformを使う。サービスサイト側の言語はRuby、Perl、TypeScriptで、フロントエンドにReact/Next.jsとVue.js/Nuxt.jsが並ぶ。同ページは、お客様のコンテンツが動くホスティング環境の言語はここに載せていないと断っている。
:::

:::fact
公式の「サーバーの仕様」ページ（2026-10-06時点）によれば、サーバーのOSはLinux（Ubuntu）、種類は1つのサーバーを複数のユーザーで使う共用サーバーで、ハイスピードプラン・エンタープライズプランのWebサーバーはLiteSpeed 6.3。PHPはエコノミーが8.3〜8.5のCGI版、ライト・スタンダードは8.4にモジュール版もあり、SSLは有料のGlobalSignと無料のLet's Encrypt、TLSは1.2と1.3、メールのウイルスチェックはF-Secure、FTPアカウントは1サーバー契約につき1つ。料金ページは、エコノミー〜スタンダードのWebサーバーをNginx+Apache、ハイスピード以上をNginx+LiteSpeedとし、LiteSpeedの説明に「WordPressの速度はApacheのWebサーバーと比較すると84倍の性能」と書いている。当サイトの実観測（2026-10-06）では、lolipop.jp のIPアドレスのwhoisはnetnameがPEPABO-NYAHで、GMOペパボ自身のネットワークだった。
:::

:::fact
2026年に加わったAI関連のサービスは、プレスリリースの日付で追える。4月22日にOpenClawをブラウザ操作だけで動かすAIエージェントクラウドを提供開始し、4月28日にHermes Agentに対応、公式ページ（2026-10-06時点）はNanoClawを含む3種類、月1,200円、ユーザーごとに独立したサーバーと説明する。7月2日に、Claude CodeなどのAIエージェントと作ったWebアプリをdeployコマンドひとつで https://◯◯◯.lolipop-now.app に公開するデプロイナウを開始。公式ページ（同時点）はFreeが0円で200プロジェクト・月間CPU実行時間4時間・CDN帯域100GB/月、Personalが980円で500プロジェクト・40時間・1TB/月、Proは近日公開、対応はNext.js・Nuxt・Astro、全プロジェクトで自動HTTPSとWAFと書く。7月16日に公開APIとMCPサーバーを提供開始し、GMOペパボは同年3月にカラーミーショップとムームードメイン、6月にSUZURIでもMCPサーバーを出していたと説明している。8月25日にAIゲートウェイを開始し、Anthropic・OpenAI互換の統一APIで14社のモデルを呼び、初期費用・月額基本料は無料、前払いクレジットの購入時に5%の手数料がかかる。9月18日に米TypeSafe AIの判定特化モデルJevに対応し、公式ページは15社・65モデル、クレジットの有効期限は購入から1年と書く。
:::

:::fact
Pepabo Tech Portalの2026年9月30日のインタビュー（後編）によれば、デプロイナウはチームメンバー全員がClaude Codeを使える状態で、エンジニアがデータベースの構造や命名規則をMarkdownで整え、Claude Codeと一緒に実装する形で作られた。ビルド環境は毎回使い捨てにして安全な状態を保ち、公開中のサイトは一定時間アクセスがなければスリープし、アクセスが来た時点で起動する。初回リリース後、利用者がまだ少ないうちに大きな作り直しをしたと説明されている。
:::

:::guess
共用サーバーの本体は、自社のベアメタルとOpenStackの私有クラウド（当サイトの観測で見えたNyah）の上にあり、月額121円という単価は自前の設備で原価を抑えているからこそ成り立つとみられる。2026年の新サービスは、その共用サーバーの外側に、AIエージェントごとの独立したサーバー（AIエージェントクラウド）、アクセスがあるときだけ起動するコンテナ（デプロイナウ）、各社のLLMへの窓口（AIゲートウェイ）を足した形で、共用サーバーの売り方（長期契約の先払い）とは課金の単位が違う。デプロイナウの「使い捨てのビルド環境」と「スリープと起動」は、技術スタックに列挙されたKubernetesとhaconiwaのようなコンテナ基盤を流用していると推測される。skill.mdがAIにブラウザ操作を自律的にやらせる設計は、公開APIが2026年7月にようやく出た共用サーバーの管理画面に、API化されていない操作がまだ残っていることの裏返しとも読める。
:::

## ビジネスモデル

収益の柱は、共用サーバーの利用料（契約38万件）と、その上に載る有料オプション・新サービスだ。親会社の決算説明資料は、ロリポップ！の中にAI関連の新サービスを含めて集計し、その投資が営業利益を押し下げていることを明示している。

:::fact
決算説明資料（2026-08-13）によれば、GMOペパボの2026年上期の連結売上高は5,264百万円（前年同期比95.0%）、営業利益は513百万円（同85.9%）で、ドメイン・レンタルサーバー（ホスティング）事業は売上高3,215百万円（同105.1%）、営業利益969百万円（同100.6%）と、グループの中で唯一増収増益だった。会社は成長戦略として「高単価・法人向け新サービスの成長」「仲間づくりの実施」「AIエージェントに選ばれるサービス」の3つを掲げ、ホスティング事業では「AI関連サービス開発に伴う投資を顧客単価の増加でカバーし、前年同期比で増益」と説明している。
:::

:::fact
公式の取次店制度ページ（2026-10-06時点）によれば、制作会社やフリーランスがクライアントにロリポップ！を紹介し、契約につながると取次報酬が支払われる。登録は無料でノルマはなく、新規6カ月以上の契約でライト3,300円、スタンダード4,400円、ハイスピード5,500円、エンタープライズ11,000円、更新12カ月で660円〜5,280円、更新24カ月で1,320円〜10,560円（いずれも税込）が、成果の確認後に月単位で振り込まれる。エコノミーは対象外で、クーポンとの併用はできない。取次の対象には独自SSL（有料）、固定IPアクセス、ゼロトラストリンクも含まれる。
:::

:::guess
取次報酬を単価と比べると、スタンダード（36カ月なら月605円）の新規契約で4,400円は7カ月分、ハイスピード（月660円）で5,500円は8カ月分に当たる。長期契約の先払いで現金が先に入るため、契約時に1年近い月額を紹介者へ渡しても回る設計とみられ、更新時にも報酬が続く点は、更新に報酬を付けない[Hostinger](/ja/articles/hostinger)と逆だ。制作会社が顧客のサイトを置く先としてロリポップ！を選び続けることに、継続的な報酬で報いる仕組みと推測される。
:::

:::guess
2026年のAI関連サービスは、少なくとも上期の時点では利益ではなく費用として決算に現れている。デプロイナウのFreeプランが0円、AIゲートウェイの月額基本料が無料、AIエージェントクラウドが月1,200円という値付けは、短期の売上より「AIエージェントに選ばれるサービス」という成長戦略の実績づくりを優先しているとみられる。共用サーバーの契約38万件は、人がWordPressを置く需要の上に積み上がったもので、その需要がAIエージェントにサイトを作らせる方向へ動いたとき、同じ顧客に高単価のサービスを足せるかどうかが、親会社の言う「顧客単価の増加」の中身になると推測される。
:::

月額121円のサーバーを25年売ってきた会社が、半年でMCPサーバー、AIエージェントの実行環境、AIゲートウェイ、デプロイ基盤を足した。その費用は決算説明資料に営業利益の減少要因として書かれ、売上はまだ共用サーバーが支えている。安いサーバーを大量に貸す商売が、AIエージェントのための国産インフラに育つかどうかは、来期の同じ資料の同じ行に出る。
