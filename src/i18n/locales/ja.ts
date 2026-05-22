/// Japanese translations. Mirrors en.ts shape.

import type { Translation } from "../types";

export const ja: Translation = {
  meta: {
    siteTitle: "Matt's Software — 役に立つ小さなアプリたち",
    siteDescription:
      "小さくて無料のオープンソースアプリのちょっとしたショップ。ひとつのランチャーで全部インストール、自動更新。",
    htmlLang: "ja",
    direction: "ltr",
  },

  langSelector: {
    label: "言語",
    selectLanguage: "言語を選択",
  },

  languageNames: {
    en: "English",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    zh: "中文",
    ja: "日本語",
    pt: "Português",
    ko: "한국어",
    pl: "Polski",
  },

  nav: {
    brand: "Matt's Software",
    apps: "アプリ",
    appsAllLabel: "すべてのアプリ",
    launcher: "ランチャー",
    githubAria: "GitHub",
    suiteFooter: "{count} 個のアプリ、ひとつのランチャー。",
    getLauncher: "ランチャーを入手",
    tipLabel: "チップ",
    tipTitle: "チップを送る",
    tipCopy: "コピー",
    tipCopied: "コピーしました",
  },

  footer: {
    mascotAlt: "設計図とコーヒーのマグの周りに丸まる白猫——音楽の中でなぜか眠っている",
    line: "エスプレッソと大音量の音楽で作りました。",
    sub: "Matt's Software は一人ショップ。すべてのアプリは署名済み、公証済み、そして無料です。",
    github: "GitHub",
    allApps: "すべてのアプリ",
    contact: "お問い合わせ",
  },

  channels: {
    appstore: "App Store",
    library: "ライブラリ",
    source: "ソース",
    download: "ダウンロード",
  },

  platforms: {
    macos: "macOS",
    windows: "Windows",
    linux: "Linux",
    watchos: "watchOS",
    ios: "iOS",
    ipados: "iPadOS",
  },

  categories: {
    all: "すべて",
    developerTools: "開発ツール",
    privacySecurity: "プライバシーとセキュリティ",
    utilities: "ユーティリティ",
    learning: "学習",
    design: "デザイン",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "役に立つ小さなアプリたち。",
    sub: "厳選した {count} 以上の小さくて無料のアプリショップ。ひとつのランチャーで全部インストール、自動更新——もちろん個別にも入手できます。",
    downloadLauncher: "ランチャーをダウンロード",
    browseSuite: "コレクションを見る",
    metaLine: "無料 · オープンソース · 今日は macOS、もっと近々",
    brandName: "Matt's Software",
    brandSub: "私が作ったすべてのアプリ、一か所に",
    searchPlaceholder: "アプリを検索…",
    searchAria: "アプリを検索",
    categoriesAria: "カテゴリ",
    noResults: "「{query}」に一致するアプリはありません。",
    view: "見る",
  },

  appPage: {
    downloadBtn: "ダウンロード",
    viewGithub: "GitHub で見る",
    openInBrowser: "ブラウザで開く",
    featuresHeadingDefault: "できること",
    suiteEyebrow: "コレクション",
    suiteHeading: "ショップから他に",
    suiteSub: "それぞれが一つのことだけをきちんとこなす——必要なものだけ入れて。",
    bottomAddToMenuBar: "{name} をメニューバーに追加。",
    bottomGet: "{name} を入手。",
  },

  featureShowcase: {
    screenshotComingSoon: "スクリーンショットは近日公開",
  },

  apps: {
    espresso: {
      tagline: "眠るのを拒否。",
      description:
        "システムトレイ用のスリープ防止ユーティリティ：時間指定セッションまたは無制限モード、アイドル検出をかわすサブピクセルマウス揺らし、すべてを即座に止めるグローバルパニックホットキー。蓋閉じ上書きと総稼働時間統計付き。",
      catalogTagline: "あなたのコンピュータは眠りたい。Espresso は反対です。",
      catalogDescription:
        "コンピュータがスリープに入るのを防ぐスリープ防止ユーティリティ。時間指定セッション、マウス揺らしシミュレーション、蓋閉じ上書き、即座に解除するパニックホットキー。",
      requirements: "macOS  ·  Windows  ·  Linux  ·  無料＆オープンソース",
      featuresHeading: "起きていろ。動いていろ。雇われていろ。",
      features: [
        {
          title: "タイマー、または永久にスリープ防止",
          body: "5 分から 8 時間までのプリセットタイマー、または本気の時のための無制限モード。ディスプレイをオンに保つか、システムが起きたままディスプレイだけ眠らせるか。",
        },
        {
          title: "ステータスインジケータを欺く",
          body: "サブピクセル単位のマウス揺らし——目に見えないが、Slack、Teams、Zoom、その他アイドルを監視するあらゆるアプリのアイドル検出をかわすには十分。",
        },
        {
          title: "パニックボタン付き",
          body: "Ctrl+Shift+Esc ですべてを即座に停止：ディスプレイ起動、揺らし停止、タイマーキャンセル。ラップトップ用の蓋閉じ上書き。生涯統計があなたの総稼働時間を追跡します。",
        },
      ],
      showcase: [
        {
          badge: "起きていろ",
          title: "あなたのコンピュータは眠りたい。Espresso は同意しない。",
          description:
            "メニューバーに陣取る小さなショット。スリープタイマーを阻み、ディスプレイを点けたまま（点けなくても — あなた次第）、マウスをサブピクセル単位で動かして、アイドル検出器を欺き続けます。",
          bullets: [
            "システムスリープ、ディスプレイスリープ、または両方を阻止 — セッション単位で切替",
            "サブピクセルのマウスジグルが Slack、Teams、Zoom のアイドル検出を欺く",
            "蓋を閉じても動作を続けるオーバーライド",
            "生涯使用統計 — あなたが奪った睡眠の量",
          ],
          imageAlt: "眠そうなノートパソコンを守る 3D エスプレッソカップ",
        },
        {
          badge: "時計のもとで",
          title: "タイマー付きのセッション、または自分が降参するまで",
          description:
            "プリセット（5 分、30 分、2 時間、8 時間）を選ぶか無期限で走らせる。グローバルパニックホットキーが全てを瞬時に終わらせる — ディスプレイは眠り、ジグルは止まり、タイマーはキャンセル。",
          bullets: [
            "5 分から 8 時間までのプリセットタイマーと無期限モード",
            "Ctrl+Shift+Escape のグローバルパニック — 全て瞬時に停止",
            "セッションカウントダウンはメニューバーに常時表示",
            "ロックや蓋閉じで自動終了（設定可能）",
          ],
          imageAlt: "暖かいオレンジ色の砂が流れる 3D クローム製砂時計と、横に赤いパニックボタン",
        },
      ],
    },

    stickykeys: {
      tagline: "そのキーをロックして。",
      description:
        "小さなメニューバーアプリ。クリックでキーボードをロックし、アプリを起動したりメールを送ったり作業を中断したりせずに、マイクロファイバークロスでキーを拭き、それからオーバーレイをクリックでロック解除。フロストのフルスクリーンオーバーレイがすべてのモニタを覆い、マウスは生きたままで、安全自動解除のおかげで閉じ込められることはありません。",
      catalogTagline: "掃除布がショートカットを発火しないようキーボードをロック。",
      catalogDescription:
        "掃除用のメニューバーキーボードロック。クリックでシステム全体のすべてのキー、修飾キー、メディアキーを飲み込みます；フロストのフルスクリーンオーバーレイが各ディスプレイを覆い、マウスはロック解除のために生きたまま、安全自動解除のおかげで閉じ込められることはありません。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  無料  ·  Developer ID 署名＆公証済み",
      featuresHeading: "キーを拭く。何も実行しない。",
      features: [
        {
          title: "ワンクリックですべてをロック",
          body: "アクティブなキーボードキャプチャがシステム全体のすべてのキー、修飾キー、メディアキーを飲み込む——ショートカットを 1 つも発火させずにキーを拭く。",
        },
        {
          title: "フロストのフルスクリーンオーバーレイ",
          body: "透明で色の付かないぼかしがすべてのディスプレイを覆うので、キーボードがロックされていることが一目で分かり、自動解除のライブカウントダウン付き。",
        },
        {
          title: "マウスのみで解除、決して閉じ込めない",
          body: "オーバーレイボタンまたはメニューバーアイコンから解除でき、何があっても安全自動解除が発火するので、行き詰まることはありません。",
        },
      ],
      showcase: [
        {
          badge: "完全ロック",
          title: "ワンクリックで、キーボードは静寂に",
          description:
            "システム全体のキーボードタップが、あらゆるキー、修飾キー、メディアキーを呑み込みます — そうすればクリーニングクロスがショートカットを発動したり、メールを送ったり、録音中の Logic を終了させたりしません。フロストオーバーレイがどのディスプレイも覆い、ロック中であることが一目瞭然です。",
          bullets: [
            "システム全体のキーボードタップ — 各キー、修飾キー、メディアキー",
            "全モニターをフロストオーバーレイで覆い、ライブ解除カウントダウン付き",
            "マウスは生きたまま、終わったらすぐ解除できる",
            "メニューバーに常駐 — 一クリックで入り、一クリックで出る",
          ],
          imageAlt: "南京錠のチャームを伴った、フロスト加工のラベンダーガラスドーム下の 3D ミニチュアキーボード",
        },
        {
          badge: "安全な出口",
          title: "閉じ込められることはありえない",
          description:
            "セーフティオートアンロックが何があっても発動します — オーバーレイが誤作動しても、メニューバーがハングしても。解除面はマウス、メニューバー、そして硬いタイマーを聴いています。",
          bullets: [
            "オートアンロックタイマーで決して立ち往生しない",
            "三つの独立した解除経路：オーバーレイ、メニューバー、タイマー",
            "最大ロック時間は設定可能（デフォルト 1 分）",
            "パラノイア設計 — 開いたまま失敗する、決して閉じたまま失敗しない",
          ],
          imageAlt: "ラベンダーの指針を持つ 3D クロームダイヤルと、開いた南京錠の上を浮かぶ鍵",
        },
      ],
    },

    stats: {
      tagline: "あらゆる信号。ひと目で。",
      description:
        "ネイティブのメニューバーシステムモニタ。コア別のライブ CPU、メモリプレッシャー、ディスク読み書き、ネットワーク上り下り、センサー読み取り——加えてステータスバーに乗るオプションのコンパクトウィジェットと、すべての信号の履歴スパークラインで、アクティビティモニタを開かずにスパイクを発見できます。",
      catalogTagline: "あらゆるシステム信号をひと目で——あなたのメニューバーで。",
      catalogDescription:
        "ネイティブのメニューバーシステムモニタ。コア別のライブ CPU、メモリプレッシャー、ディスク読み書き、ネットワーク上り下り、センサー読み取り——加えてコンパクトウィジェットと履歴スパークライン。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  無料  ·  Developer ID 署名＆公証済み",
      featuresHeading: "マシン全体を見る。全画面なしで。",
      features: [
        {
          title: "あらゆるシステム信号をひと目で",
          body: "コア別 CPU、メモリプレッシャー（有線/圧縮/アプリ/キャッシュの内訳付き）、ディスク読み書き、ネットワーク上り下り、センサー、ライブのトッププロセスリスト——すべてが 1 つのコンパクトなメニューバーパネルに。",
        },
        {
          title: "コンパクトなメニューバーウィジェット",
          body: "どの数字（または小さなライブ波形）をステータスバーに乗せるか選択。作業中も見やすいまま、決して邪魔にならない。",
        },
        {
          title: "スパークライン、表計算ではなく",
          body: "すべての信号の最近の履歴がグラフ化されるので、スパイクや暴走プロセスがアクティビティモニタを漁らなくても明らか。",
        },
      ],
      showcase: [
        {
          badge: "全シグナル",
          title: "あなたのマシンの全ゲージが、ひと目で",
          description:
            "コア別 CPU、メモリプレッシャー（wired / 圧縮 / アプリ / キャッシュの内訳付き）、ディスク読み書き、ネットワーク上り下り、センサー値 — Stats は macOS が露出するすべてのシグナルを読み、メニューバーにピン留めします。",
          bullets: [
            "コア別 CPU 使用率とトッププロセス一覧",
            "完全な常駐内訳付きのメモリプレッシャー",
            "ディスク I/O、ネットワークスループット、センサー温度",
            "任意のサブセットをコンパクトなメニューバーウィジェットとしてピン留め",
          ],
          imageAlt: "クロームとピンクの浮遊する 3D ゲージの集まりと小さなチップセンサー",
        },
        {
          badge: "振り返り",
          title: "スプレッドシートではなく、スパークライン",
          description:
            "各シグナルの最近の履歴がグラフ化されるので、暴走したプロセスや熱のスパイクが一目で分かります — アクティビティモニタを開いて再発を待つ必要はありません。",
          bullets: [
            "各ゲージのライブスパークライン履歴",
            "履歴ウィンドウは設定可能 — 直近の 1 分、1 時間、または 1 日",
            "スパイクを後から発見し、ライブで追いかけ回さない",
            "スパークラインをタップして、その瞬間のトッププロセスを確認",
          ],
          imageAlt: "頂点にクロームのマーカーボールを乗せた、3D 光沢ピンクのスパークラインリボン",
        },
      ],
    },

    port: {
      tagline: "あらゆるポート、ワンクリック。",
      description:
        "小さなネイティブのメニューバーポートマネージャ。何がリッスンしているか確認し、プロセスを終了または一時停止、転送または NAT-PMP マップ、ライブマップでアクティブな接続を観察——どれかをクリックすれば Blip で詳しく見られます。",
      catalogTagline: "あなたの Mac の開いているポートすべて、ワンクリックで。",
      catalogDescription:
        "ネイティブのメニューバーポートマネージャ：何がリッスンしているか確認、プロセスを終了または一時停止、転送または NAT-PMP マップ、ライブマップでアクティブな接続を観察——クリックして Blip で詳しく見る。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  無料  ·  Developer ID 署名済み",
      featuresHeading: "見る。止める。転送する。",
      features: [
        {
          title: "開いているポートすべて、ライブ",
          body: "リッスン中のすべての TCP/UDP ポートと、その背後のプロセスと PID をメニューバーリストで、毎秒更新。終了、一時停止 (SIGSTOP/SIGCONT)、あるいは放置。",
        },
        {
          title: "転送＆マップ",
          body: "内蔵の TCP フォワーダで任意のローカルポートを別のポートにプロキシ、LAN に公開、ネイティブ NAT-PMP でルーターを貫通——設定不要。",
        },
        {
          title: "マップ上の接続 → Blip",
          body: "アクティブな接続が実際の宛先ごとにライブマップ上に描かれます。任意のエンドポイントをクリックすると Blip で詳細検査（持っていなければ Blip を取得）。",
        },
      ],
      showcase: [
        {
          badge: "港",
          title: "開いている各ポートが、ワンクリック先に",
          description:
            "メニューバーに常駐する、待ち受け中のあらゆる TCP/UDP ポートのライブ目録 — 背後のプロセス、PID、プロトコル。殺す、停める（SIGSTOP/SIGCONT）、または眺める。",
          bullets: [
            "毎秒リフレッシュ — 何が、今、待ち受けているか",
            "メニューバーから離れずにプロセスを殺す、停める、再開する",
            "既知ポートライブラリが一般的なサービスを即座に命名",
            "新しいポートが開いた瞬間に通知",
          ],
          imageAlt: "小さな波止場に係留されたタグボート、はしけ、帆船を擁する 3D ミニチュア港",
        },
        {
          badge: "シグナル",
          title: "転送、公開、あるいはルーターを突き抜ける",
          description:
            "組み込みの TCP フォワーダーが任意のローカルポートを別のポートへプロキシ。ネイティブな NAT-PMP がルーターを自動でマッピング。アクティブな接続をマップで眺め、エンドポイントをクリックして Blip で詳細検査。",
          bullets: [
            "Network.framework 上に構築された TCP フォワーダー — 依存ゼロ",
            "ネイティブ NAT-PMP（RFC 6886）ルーターマッピング、設定不要",
            "ワントグルで LAN にポートを公開",
            "アクティブな接続をマップに描き、ワンクリックで Blip に渡す",
          ],
          imageAlt: "ビームで小さな青いデータパケットを照らす 3D ミニチュア灯台",
        },
      ],
    },

    alfred: {
      tagline: "ディスクを取り戻す。",
      description:
        "削除しても安全な開発者のゴミ——node_modules、Cargo target/、ビルドとテストキャッシュ、Xcode DerivedData、パッケージマネージャキャッシュ——を見つけて大きい順に並べ、ゴミ箱に移動するネイティブのメニューバー執事。ワンクリックで復元可能。",
      catalogTagline: "開発者のゴミに占拠されたディスクスペースを取り戻す。",
      catalogDescription:
        "削除しても安全な開発者のゴミ——node_modules、Cargo target/、ビルドとテストキャッシュ、Xcode DerivedData、パッケージマネージャキャッシュ——を見つけて大きい順に並べ、ゴミ箱に移動する（復元可能）。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  無料  ·  Developer ID 署名済み",
      featuresHeading: "見つける。捨てる。ディスクを取り戻す。",
      features: [
        {
          title: "ゴミを大きい順に発見",
          body: "node_modules、Cargo target/、ビルドとテストキャッシュ、Xcode DerivedData、Homebrew/Yarn/npm キャッシュ——スキャンしてサイズを測り、大きい順にリストアップするので、何があなたのディスクを占拠しているか正確に分かります。",
        },
        {
          title: "設計上安全に削除",
          body: "Alfred は再生成可能なフォルダ——キャッシュ、ビルド成果物、依存ツリー——のみに触れ、ソースには決して触れません。すべてゴミ箱に移動し、気が変わればワンクリックで復元可能。",
        },
        {
          title: "メニューバーから",
          body: "小さなメニューバーアプリとして存在。好きな時にスキャン、どれだけ取り戻したかを確認、次の SSD 警告に向けた使い捨てクリーンアップツールとして残しておくことも。",
        },
      ],
      showcase: [
        {
          badge: "お役に立ちます",
          title: "大きいものから、丁寧に、容赦なく",
          description:
            "メニューバーの執事は、どのフォルダなら安心して手放せるかを正確に知っています。node_modules、Cargo target/、Xcode DerivedData、Homebrew キャッシュ、Yarn キャッシュ — Alfred はそれらを見つけ、計量し、銀の盆に載せて差し出します。",
          bullets: [
            "プロジェクト全体の一般的な開発ゴミフォルダをすべてスキャン",
            "大きい順に並ぶので、勝利が一目瞭然",
            "フォルダ単位のスキップルールで、お気に入りはそのまま",
            "メニューバー常駐 — その気が向いた時にスキャン",
          ],
          imageAlt: "緑のたすきを掛けた 3D ミニチュア執事が開発ゴミの銀盆を差し出している",
        },
        {
          badge: "設計から安全",
          title: "ギガバイトは取り戻し、コードは残す",
          description:
            "Alfred は再生可能なフォルダだけに触れます — キャッシュ、ビルド成果物、依存関係ツリー — あなたのソースコードには絶対に触れません。すべてゴミ箱に移動するので、誤りはワンクリックで取り消せます。",
          bullets: [
            "再生可能なフォルダだけ — ソースは常に安全",
            "ファイルはゴミ箱へ、/dev/null へではなく",
            "気が変わったものはワンクリックで復元",
            "累計合計で、どれだけ取り戻したかを表示",
          ],
          imageAlt: "緑色 LED リングを纏った 3D SSD と、漂い去る小さなジャンクパッケージ",
        },
      ],
    },
    uninstaller: {
      tagline: "Apps + their crumbs, in one click.",
      description:
        "Dragging an app to the Trash leaves behind preferences, caches, sandbox containers, login items, and crash logs. Uninstaller finds the whole pile for any installed app and moves it all to Trash in one click — with a clear list of what's about to go and a separate badge for system-owned files it can't touch.",
      catalogTagline: "Apps + their crumbs, in one click.",
      catalogDescription:
        "Native menu-bar uninstaller. Finds every leftover an app keeps on disk — preferences, caches, sandbox containers, login items, crash logs — and moves the whole pile to Trash in one click.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed",
      featuresHeading: "Three reasons to use Uninstaller",
      features: [
        {
          title: "One click, whole pile",
          body: "Pick an app, see every residue path with sizes, hit Uninstall. The bundle and every leftover go to Trash together — recoverable in one click, no separate cleanup pass.",
        },
        {
          title: "Login items + LaunchAgents",
          body: "Catches the helper plists that survive normal app removal and would otherwise quietly re-run at every login. Surfaces them with the rest of the residue so they don't slip through.",
        },
        {
          title: "Honest about admin",
          body: "System paths under /Library and /private/var/db/receipts are listed but flagged — Uninstaller won't ask for your password to scrub things you probably don't care about.",
        },
      ],
      showcase: [
        {
          badge: "One sweep, whole pile",
          title: "Apps and their crumbs, gone together",
          description:
            "Pick an app and Uninstaller scans the dozen-plus standard residue locations — Preferences, Application Support, Caches, Saved State, Logs, Containers, Group Containers, HTTP Storages, WebKit data, Cookies, LaunchAgents, crash reports. The bundle and every leftover go to the Trash together, in a single batched Finder request.",
          bullets: [
            "Twelve+ residue locations probed per app — by bundle id AND display name so apps that store under either layout don't get missed",
            "Sized biggest-first so you can see exactly what's about to be reclaimed",
            "Trash by default — recoverable in one click if you change your mind",
            "Single batched recycle call so macOS shows one auth prompt for the whole pile, not one per file",
          ],
          imageAlt: "Cute 3D sanitation worker character in a red coverall and red hardhat sweeping a row of colourful app squircles into a chunky white trash bag",
        },
        {
          badge: "Honest about admin",
          title: "App Management permission, asked once",
          description:
            "macOS 13+ gates modifying apps in /Applications behind App Management TCC. Uninstaller routes the trash request through Finder so you get a single, clear permission prompt the first time — and a deep-link to System Settings → Privacy & Security → App Management if anything's still denied after.",
          bullets: [
            "Single Finder-mediated prompt the first time, not one per app removed",
            "System-owned residue under /Library and /private/var/db/receipts is listed with an 'admin' badge but never silently fails — you see exactly what was skipped",
            "Permission-shaped failures surface a one-line tip + a button that opens the right Privacy & Security pane directly",
            "Apple's own apps (com.apple.*) are filtered out of the picker — never offered for removal",
          ],
          imageAlt: "Cute 3D sanitation worker character in red holding up a Privacy & Security clipboard with a green checkmark, three app icons fading into sparkles on his right",
        },
      ],
    },

    blip: {
      tagline: "出ていくものを見る。",
      description:
        "あなたのデータがどこへ行くのか、誰が集めているのかを正確に見て、シャットダウンしましょう——すべて、とても綺麗な 3D マップで。",
      catalogTagline: "あなたのコンピュータは陰であなたのことを話していました。",
      catalogDescription:
        "リアルタイムネットワークモニタリング、3D 接続マップ、スマートファイアウォール、DNS ブロック、海底ケーブルルーティング、帯域分析を備えています。あなたのデータがどこへ行くのか正確に確認。",
      requirements: "無料＆オープンソース",
      featuresHeading: "地図。用心棒。壁。",
      features: [
        {
          title: "あらゆる接続のライブ 3D マップ",
          body: "各アプリのトラフィックを地球上にプロットし、サービス別に色分けされた弧。200 接続、700 以上の実在する海底ケーブル、方向を示すパーティクル。あなたが無視してきたインターネットを、見えるかたちに。",
        },
        {
          title: "帯域の用心棒",
          body: "すべてのアプリに許可が必要、例外なし。厳格モードは、あなたが言うまですべてをブロック。アプリごとの帯域バーがデータ大食漢を暴く。ワンクリックキルスイッチ。",
        },
        {
          title: "20 万のトラッカーを接続前にブロック",
          body: "DNS ブロックリストが広告とトラッカードメインを瞬殺；リアルタイムクエリログがすべての検索を浮かび上がらせる；トラッカーランキングが最悪の犯人を晒す。",
        },
      ],
      showcase: [
        {
          badge: "ネットワークマップ",
          title: "200 接続。誰一人として許可を求めなかった。",
          description:
            "あなたのコンピュータ上のすべてのアプリが、こっそり実家に電話をかけています。Blip はそれらを 3D マップに置き、その混乱をリアルタイムで眺めさせてくれます。",
          bullets: [
            "接続は実在する海底ケーブルを通って海を越える",
            "サービス別の色分け弧——Google、Discord、Apple、その他何百を瞬時に識別",
            "アニメーションパーティクルが両方向のデータフローを表示",
            "ホップごとの traceroute がパケットの実際の経路を表示",
          ],
          imageAlt: "Blip の 3D ネットワークマップが接続弧を表示",
        },
        {
          badge: "ファイアウォール",
          title: "帯域の用心棒",
          description:
            "すべてのアプリに許可が必要。例外も言い訳もありません。厳格モードは、あなたが言うまですべてをブロック。あなたのアプリがあまりに居心地良くなっていたから。",
          bullets: [
            "厳格モード：無実が証明されるまで有罪",
            "アプリごとの帯域バーがデータ大食漢を暴く",
            "範囲指定ルール——ポート 443 は許可、他はブロック",
            "キルスイッチ：ワンクリック、インターネットゼロ、即時の静けさ",
          ],
          imageAlt: "Blip ファイアウォールがアプリレベルのネットワークアクセス制御を表示",
        },
        {
          badge: "ガード",
          title: "20 万のトラッカーを接続を試みる前にブロック",
          description:
            "あなたの DNS は告げ口屋。すべてのアプリ、すべての広告 SDK、すべての分析 ping——ガードは入口でそれらを捕まえます。誰が実家に電話しようとしているか見て、シャットダウン。",
          bullets: [
            "DNS ブロックリストが 20 万以上のトラッカーと広告ドメインを瞬殺",
            "リアルタイムクエリログ——すべての検索をライブで観察",
            "トラッカーランキングが最も執拗な犯人を表示",
            "ファイアウォールと併用——壁が二重、慈悲ゼロ",
          ],
          imageAlt: "Blip ガードが DNS ブロックとトラッカー検出を表示",
        },
        {
          badge: "ビジュアライゼーション",
          title: "インターネットはただの濡れたケーブル",
          description:
            "あなたの YouTube 動画は、庭のホースより細いケーブルで 3 つの海を越えました。Blip はどのケーブルか正確に教えます——700 以上の実在する海底ケーブルルートが、あなたのデータが通る時に光ります。",
          bullets: [
            "TeleGeography の実在する海底ケーブルルートが海底に描かれる",
            "あなたのトラフィックが流れるとアクティブなケーブルが点灯",
            "進行するダッシュパーティクルがアップロード対ダウンロードの方向を表示",
            "Ping ベースの速度——速い接続は速く、遅い接続は這う",
          ],
          imageAlt: "Blip ビジュアライゼーションが海底ケーブルとデータフローを表示",
        },
        {
          badge: "Traceroute",
          title: "1 ページを読み込むのに 6 都市を通る 14 ホップ",
          description:
            "すべてのパケットは到着前に十数台のルーターを跳ね回ります。Blip はその経路を辿り——ホップごと、都市ごと、ケーブルごと——マップに描きます。",
          bullets: [
            "ホップごとのマーカーが 3D マップに直接重ねられる",
            "レイテンシで色分け：緑は速い、琥珀色は普通、赤は痛み",
            "海越えの実在する海底ケーブルを通る経路",
            "すべてのアクティブな接続に対する自動 traceroute",
          ],
          imageAlt: "Blip traceroute がホップごとのネットワーク経路を表示",
        },
      ],
    },

    diane: {
      tagline: "録音を押す。話す。",
      description:
        "ライブの音声認識、カセットテープライブラリ、ディクテーションモードを備えたレトロボイスレコーダ。特別捜査官デール・クーパーのテープメモにインスパイアされています。",
      catalogTagline: "私は手の中に小さなテープレコーダを持っています。",
      catalogDescription:
        "ライブの音声認識、カセットテープライブラリ、ディクテーションモードを備えたスキューモーフィックなレトロボイスレコーダ。特別捜査官デール・クーパーにインスパイアされています。",
      requirements: "無料＆オープンソース",
      featuresHeading: "録音を押す。話す。歩く。",
      features: [
        {
          title: "スキューモーフィックなカセットレコーダ",
          body: "フォトリアリスティックなレコーダの浮遊サイドバー：アニメーションするリール、VU メータ、物理ボタン。録音を押して話す——グローバルホットキーでどのアプリからでも録音できます。",
        },
        {
          title: "ライブのオンデバイス文字起こし",
          body: "Apple の SFSpeechRecognizer があなたの話を即座に文字起こし——クラウドも API キーもなし。トランスクリプトの任意の単語をクリックして、録音のその瞬間にジャンプ。",
        },
        {
          title: "カセットでいっぱいの靴箱",
          body: "すべての録音は音声と文字起こし付きの色付きカセットテープとして保存されます。コレクションをスクロールし、どれでも読み込み、いつでも再生。",
        },
      ],
      showcase: [
        {
          badge: "ボイスレコーダ",
          title: "デスクトップ用のスキューモーフィックなカセットレコーダ",
          description:
            "フォトリアリスティックなカセットレコーダの浮遊サイドバー。録音を押して話す。あなたの声がキャプチャされ、ライブで文字起こしされ、参照、巻き戻し、再生できるカセットテープに保存されます。",
          bullets: [
            "アニメーションするリールと VU メータ付きのフォトリアリスティックなカセットレコーダ",
            "物理ボタンで録音、再生、巻き戻し、早送り",
            "テープスプールが再生位置をリアルタイムで視覚的に追跡",
            "グローバルホットキーでウィンドウを切り替えずにどのアプリからでも録音",
          ],
          imageAlt: "Diane カセットレコーダインターフェース",
        },
        {
          badge: "ライブ文字起こし",
          title: "あなたが話す通りに、あなたの言葉が打ち出される",
          description:
            "Diane は Apple のオンデバイス音声認識を使ってあなたの話をリアルタイムで文字起こしします。クラウドも、API キーも、レイテンシもなし。話すだけで、言葉が現れるのを見てください。",
          bullets: [
            "macOS SFSpeechRecognizer 駆動のライブ音声認識",
            "完全にオンデバイスで処理、データはマシンを出ない",
            "トランスクリプトの任意の単語をクリックして録音のその瞬間にジャンプ",
            "ディクテーションモードがあなたの言葉をフォーカスされた任意のテキストフィールドに直接打ち込む",
          ],
          imageAlt: "Diane ライブ文字起こしオーバーレイ",
        },
        {
          badge: "テープライブラリ",
          title: "カセットテープでいっぱいの靴箱",
          description:
            "すべての録音は独自のカラーバリアントを持つカセットテープとして保存されます。コレクションをスクロール、クリックで読み込み、いつでも再生。",
          bullets: [
            "10 種類の独特なカセットテープカラーバリアントがランダムに割り当て",
            "テープはセッション間で音声と文字起こし全体を保持",
            "矢印キーでテープコレクションを巡回",
            "各テープラベルに単語数が表示",
          ],
          imageAlt: "Diane カセットテープライブラリ",
        },
      ],
    },

    peephole: {
      tagline: "誰が見ているかを見る。",
      description:
        "あなたのカメラとマイクのためのメニューバー監視者。Peephole は今どのアプリがそれらを使っているかを表示し、アクセス履歴を保持し、何かが起動したときに通知します——特別な権限もカーネル拡張も不要。",
      catalogTagline: "誰が見ているかを見る。",
      catalogDescription:
        "あなたのカメラとマイクのためのメニューバー監視者：今どのアプリが使っているか、アクセス履歴、そして何かがそれらを起動した瞬間の通知。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  無料  ·  Developer ID 署名済み",
      featuresHeading: "あなたに知られずに何も録音されない。",
      features: [
        {
          title: "カメラとマイクのライブステータス",
          body: "カメラまたはマイクがアクティブになった瞬間、メニューバーのグリフが切り替わるので、何かが録音している時を常に把握できます。",
        },
        {
          title: "アクセス履歴",
          body: "どのアプリがいつカメラまたはマイクを使ったかの継続的なログ——その日の活動を遡れます。",
        },
        {
          title: "通知",
          body: "アプリがカメラまたはマイクを使い始めた瞬間にアラート。特別な権限もカーネル拡張も不要。",
        },
      ],
      showcase: [
        {
          badge: "目と耳",
          title: "何かが見始めた瞬間に気づく",
          description:
            "Peephole のメニューバーグリフは、カメラやマイクが熱を持った瞬間に切り替わります。タップすると、どのアプリが点けたのかが正確に分かります — そして、それが意図通りだったか、あなたが決めます。",
          bullets: [
            "カメラとマイクの両方のライブステータスが常時表示",
            "アクセス開始や終了の瞬間にグリフが切り替わる",
            "タップして責任アプリと開いているデバイスを確認",
            "特別な権限なし、カーネル拡張なし — 純粋なユーザー空間",
          ],
          imageAlt: "光る青緑色のスリット状の瞳を持つ 3D クロームウェブカメラと、隣のクロームマイク",
        },
        {
          badge: "領収書",
          title: "全アクセスのログ、肝心な時には通知付き",
          description:
            "その日のカメラとマイクの活動を遡る — 誰が、いつ、どれだけ使ったか。任意の通知がアクセス開始の瞬間に発火し、不意のアクティブ化が見過ごされることはありません。",
          bullets: [
            "アプリ別の履歴、タイムスタンプと継続時間付き",
            "新規アクセス毎の通知（デバイス単位で切替）",
            "アプリ、デバイス、時間帯で絞り込み",
            "履歴は再起動を跨いで保持される — 何も逃さない",
          ],
          imageAlt: "光る青緑色の虹彩を持つ 3D クローム製のぞき穴円盤と、その後ろに重なる履歴カード",
        },
      ],
    },

    quarantine: {
      tagline: "すべてのダウンロードを精査。",
      description:
        "~/Downloads のメニューバーインスペクタ。新しいファイルごとに、隔離元 URL、Gatekeeper/codesign ステータス、SHA-256、オプションの VirusTotal 判定を表示し——開く前に精査できるよう通知します。",
      catalogTagline: "信頼するが、すべてのダウンロードを検証せよ。",
      catalogDescription:
        "~/Downloads のメニューバーインスペクタ：隔離元、Gatekeeper/codesign ステータス、SHA-256、そして新しいファイルごとのオプションの VirusTotal 判定、精査するための通知。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  無料  ·  Developer ID 署名済み",
      featuresHeading: "Downloads に着いたばかりのものを知る。",
      features: [
        {
          title: "出所と隔離",
          body: "com.apple.quarantine 属性を通じてファイルが正確にどこから来たかを確認——ダウンロードしたエージェントと元の URL。",
        },
        {
          title: "Gatekeeper とハッシュ",
          body: "~/Downloads に着いた新しいファイルごとに、Codesign/Gatekeeper 評価と SHA-256。",
        },
        {
          title: "オプションの VirusTotal",
          body: "API キーを追加すると、Quarantine は評判判定をインラインで表示するので、ダウンロードを開く前に精査できます。",
        },
      ],
      showcase: [
        {
          badge: "隔離室",
          title: "新しいダウンロードはすべて、あなたが許すまで隔離",
          description:
            "ファイルが ~/Downloads に着いた瞬間、Quarantine がそれを検査台に運びます。どこから来たか — エージェント、ソース URL、隔離属性 — を、ダブルクリックする前に正確に確認できます。",
          bullets: [
            "FSEvents 経由で ~/Downloads をリアルタイム監視",
            "com.apple.quarantine を読み取り：ダウンロード元アプリとソース URL",
            "新着のたびに通知",
            "ファイル一つに一行 — キュー全体が一目で",
          ],
          imageAlt: "中に吊られたパッケージを抱えた 3D ガラスの隔離ポッドと、外側にある承認/拒否のパッケージ",
        },
        {
          badge: "検査",
          title: "署名、ハッシュ、そして裁定",
          description:
            "Quarantine は各ファイルの Gatekeeper 評価、codesign 状態、SHA-256 を提示します。VirusTotal の API キーを入れれば、レピュテーションの裁定がインラインで表示 — 開く前に審査できます。",
          bullets: [
            "spctl 評価 + codesign --display を一行で",
            "着地時に SHA-256 を計算 — コピー＆ペースト可能",
            "任意の VirusTotal 裁定をインライン表示（API キーは自前）",
            "メニューから直接 Finder で表示、またはゴミ箱へ",
          ],
          imageAlt: "クリーム色のフォルダの上の 3D クローム拡大鏡と、横にある金の印章スタンプ",
        },
      ],
    },

    sentry: {
      tagline: "暗い隅を見張る。",
      description:
        "macOS の永続化のためのメニューバー監査員。LaunchAgents とデーモン、ログイン項目、cron、シェル起動ファイルを列挙し、各ターゲットのコード署名と公証をチェックし、新しいまたは変更された項目が現れた瞬間にアラートを出します——そしてメニューバーから直接、検査、ブロック、復元できます。",
      catalogTagline: "何かが食い込んだ瞬間を知る。",
      catalogDescription:
        "macOS の永続化のためのメニューバー監査員——LaunchAgents、ログイン項目、cron、シェル起動ファイル——署名チェック付きで、新しいまたは変更されたものが現れるとアラート。検査、ブロック、復元のいずれか。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  無料  ·  Developer ID 署名済み",
      featuresHeading: "マルウェアが隠れる場所を見張る。",
      features: [
        {
          title: "すべての永続化ベクトル",
          body: "LaunchAgents とデーモン、ログイン項目、cron、シェル起動ファイル——再起動を生き延びるために何かが食い込める場所すべてを、ひとつのメニューバーリストに。",
        },
        {
          title: "署名認識",
          body: "各ターゲットバイナリは spctl と codesign を経て公証済み / 署名済み / 未署名に分類されるので、未署名の launch agent は瞬時に目立ちます。",
        },
        {
          title: "変更時アラート、そこにあるべきでないものをブロック",
          body: "スナップショット差分が新しい永続化項目が現れたり変更されたりした瞬間に通知。plist またはスクリプトを検査して、ブロック——Sentry はそれをアンロードし .sentry-disabled として脇に置きます。ワンクリックで元に戻せます。",
        },
      ],
      showcase: [
        {
          badge: "見張り台",
          title: "あらゆる暗い隅、光を当てて",
          description:
            "LaunchAgents と Daemons、ログイン項目、cron、シェル起動ファイル — 何かが静かに巣食う可能性のある場所すべての上に、Sentry はランタンを掲げます。署名チェック済みのメニューバーリストが、検査の準備を整えています。",
          bullets: [
            "macOS の各種永続化ベクトルをひとつのパネルに列挙",
            "spctl と codesign で各ターゲットを公証 / 署名 / 未署名に分類",
            "plist やスクリプトを行から直接開く",
            "メニューバー常駐 — 前面に維持するウィンドウは不要",
          ],
          imageAlt: "光る紫の水晶と目のチャームを纏った 3D クロームランタン",
        },
        {
          badge: "目録",
          title: "新たな何かが現れた瞬間に気づく",
          description:
            "Sentry は永続化状態のスナップショットを取り、差分を取ります。新しいエージェント、ログイン項目、rc ファイルの変化が着地した瞬間、通知が届きます — ワンクリックのブロックは完全に可逆です。",
          bullets: [
            "スナップショット差分が新規・変更された永続化項目をすべて捕捉",
            "ブロックは項目をアンロードし、.sentry-disabled として脇に置く",
            "ワンクリックで復元 — システムには破壊的なことは何も起こらない",
            "通知が次の再起動の前に肩を叩いてくれる",
          ],
          imageAlt: "クロームの書見台の上に紫の蝋封の 3D 巻物と、クロームの警鐘",
        },
      ],
    },

    fishbones: {
      tagline: "どんな技術書もインタラクティブなコースに変える。",
      description:
        "PDF または EPUB を投入すると、Libre がレッスン、演習、隠しテストを生成します。16 言語をひとつのエディタで、ノートパソコン上のローカル AI チューター、週末を乗り越える連続記録、17 のテーマ。",
      catalogTagline: "どんな技術書もインタラクティブなコースに変える。",
      catalogDescription:
        "PDF または EPUB を投入すると、Libre がレッスン、演習、隠しテストを生成します。16 言語をひとつのエディタで、ノートパソコン上のローカル AI チューター、週末を乗り越える連続記録、17 のテーマ。",
      requirements: "無料＆オープンソース",
      featuresHeading: "どんな本からでも学ぶ。",
      features: [],
    },

    tap: {
      tagline: "手首にサーバ。",
      description:
        "Apple Watch からリモートサーバで事前設定された SSH コマンドを実行。タップ、確認、完了。セルラーで動作、Siri 対応、すべてエンドツーエンドで暗号化。",
      catalogTagline: "あなたのインフラのためのコマンドリモコン。",
      catalogDescription:
        "Apple Watch からリモートサーバで事前設定された SSH コマンドを実行。セルラーで動作、Siri 対応、すべてエンドツーエンドで暗号化。",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  無料＆オープンソース",
      featuresHeading: "サーバのためのリモコン——あなたの手首に。",
      features: [
        {
          title: "本物の Watch アプリ、通知のシムではなく",
          body: "ライブステータスドット付きのネイティブ watchOS サーバリスト、アクションボタンを通じたピン留めコマンド、危険なコマンドの確認、Digital Crown でスクロールできる出力。セルラー対応——電話不要。",
        },
        {
          title: "Companion と Mac、歩調を合わせて",
          body: "iPhone、iPad、Mac Catalyst の完全なアプリ。サーバの追加、コマンドとコマンドスイートの設定、履歴表示、SSH キーの管理。すべてリアルタイムで Watch に同期。",
        },
        {
          title: "スイート、アラート、Siri、コンプリケーション",
          body: 'コマンドをワンタップスイートに束ねる。30 秒ごとのヘルス ping と何かが死んだときの APNs アラート。5 つの文字盤コンプリケーション。"Hey Siri、Tap で prod-api を再起動。"',
        },
      ],
      showcase: [
        {
          badge: "Watch アプリ",
          title: "手首から本番を再起動。",
          description:
            "サーバリスト、コマンド実行、触覚フィードバックを備えたネイティブ watchOS アプリ。コマンドをタップ、確認、完了。実際の出力は Digital Crown でスクロール可能。セルラーで動作——電話不要。",
          bullets: [
            "ライブステータスドット付きのサーバリスト（緑/赤）",
            "アクションボタンを通じた素早いアクセスのためのピン留めコマンド",
            "危険なコマンドの確認ビュー",
            "Digital Crown でスクロールできる切り詰められた出力",
          ],
          imageAlt: "Tap Watch アプリがサーバコマンドを表示",
        },
        {
          badge: "Companion",
          title: "電話からすべてを設定。",
          description:
            "iPhone、iPad、Mac Catalyst のための完全な管理アプリ。サーバの追加、コマンドの設定、SSH キーの管理、履歴の表示、コマンドスイートの設定。すべて瞬時に Watch に同期。",
          bullets: [
            "サーバヘルスグリッドとアクティビティフィード付きのダッシュボード",
            "テンプレートライブラリ付きの視覚的コマンドエディタ",
            "WebView 経由のフル対話型 SSH ターミナル",
            "即座の Watch ペアリングのための QR コード生成",
          ],
          imageAlt: "Tap Companion アプリダッシュボード",
        },
        {
          badge: "スイート",
          title: "ワンタップで 5 つのコマンドを実行。",
          description:
            "関連するコマンドをスイートにグループ化してワンタップのデプロイワークフローに。各ステップは合格/不合格をリアルタイムで表示。失敗時に続行するか即停止するかを設定。",
          bullets: [
            "進捗追跡付きの順序付けされたステップ実行",
            "ステップごとの失敗時続行トグル",
            "WebSocket でストリーミングされるスイート進捗",
            "デプロイシーケンスとヘルスチェックルーチンに最適",
          ],
          imageAlt: "Watch 上の Tap スイート実行進捗",
        },
        {
          badge: "アラート",
          title: "ユーザーより先に知る。",
          description:
            "30 秒ごとのバックグラウンドヘルス ping。サーバがダウンすると、Watch と電話に即座にプッシュ通知が届く。サーバごとのトグルで、重要なことだけアラート。",
          bullets: [
            "レイテンシ追跡付きの 30 秒ヘルス ping ループ",
            "ステータス変化時の Watch + 電話への APNs プッシュ",
            "サーバごとの通知トグル",
            "Apple Watch での触覚アラートパターン",
          ],
          imageAlt: "Watch 上の Tap サーバダウン通知",
        },
        {
          badge: "コンプリケーション",
          title: "文字盤に一目でわかるサーバヘルス。",
          description:
            "あなたの文字盤に直接ライブのサーバメトリクスを表示する 5 つの設定可能なコンプリケーション。どのサーバとメトリックを表示するかを選択。データはアプリから自動同期。",
          bullets: [
            "サーバステータス：フリート全体のアップ/ダウンカウント",
            "フリートメトリクス：サーバごとのディスク、メモリ、CPU",
            "Docker：実行中のコンテナ数",
            "Uptime：サーバごとの稼働時間表示",
            "クイックコマンド：一目でわかるピン留めコマンド",
          ],
          imageAlt: "Tap Watch コンプリケーションがサーバメトリクスを表示",
        },
        {
          badge: "macOS",
          title: "メニューバーからの完全コントロール。",
          description:
            "素早いサーバアクセスのためのネイティブ macOS アプリ。ブラウザを開かずにフリートの監視、コマンド実行、設定管理。シームレスなセットアップのために Apple でサインイン。",
          bullets: [
            "即時アクセスのためのメニューバープレゼンス",
            "出力表示付きの完全なコマンド実行",
            "JSON からのサーバ設定インポート",
            "Apple Sign-In 認証",
          ],
          imageAlt: "Tap macOS アプリがサーバダッシュボードを表示",
        },
        {
          badge: "Siri",
          title: '"Hey Siri、Tap で prod-api を再起動。"',
          description:
            "完全な App Intents 統合。あらゆるコマンドを音声で実行。サーバステータスをハンズフリーでチェック。Siri がアクションを確認して結果を報告。Watch、電話、CarPlay から動作。",
          bullets: [
            "自然言語：「Tap で prod の nginx を再起動」",
            "サーバステータスチェック：「Tap で私のサーバを確認」",
            "実行前の確認ダイアログ",
            "音声応答による結果報告",
          ],
          imageAlt: "Siri が Tap コマンドを実行している",
        },
      ],
      stats: [
        { value: "< 3 秒", label: "実行時間" },
        { value: "セルラー", label: "電話不要" },
        { value: "AES-256", label: "キー暗号化" },
        { value: "MIT", label: "オープンソース" },
      ],
      threeSecondsHeading: "3 秒。それだけ。",
      threeSecondsSub: "手首からサーバへ、そして戻る。",
      stepTap: "タップ",
      stepConfirm: "確認",
      stepDone: "完了",
      archHeading: "アーキテクチャ",
      archWatch: "Watch",
      archRelay: "リレー",
      archServers: "あなたのサーバ",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "セキュリティモデル",
      securityCards: [
        {
          title: "静止状態の鍵",
          body: "SSH キーは AES-256-GCM で暗号化。マスターパスフレーズは Argon2id で導出。鍵はリレーが動作している間のみ復号化されてメモリに存在。",
        },
        {
          title: "トークン認証",
          body: "デバイスごとの Bearer トークン、Argon2 ハッシュ。破壊的な操作にはオプションの TOTP 2FA。トークンは即座に取り消し可能。",
        },
        {
          title: "至るところで TLS",
          body: "内蔵の Let's Encrypt 自動更新。すべてのトラフィックは転送中に暗号化。セルフホストリレーには証明書ピン留めオプション。",
        },
        {
          title: "Watch セキュリティ",
          body: "トークンはハードウェア暗号化された Watch Keychain に保存。手首検出が自動ロック。デバイス上に機密データはキャッシュされない。",
        },
      ],
      templatesHeading: "27 の組み込みテンプレート",
      templatesSub: "一般的なコマンドが事前設定済み。テンプレートを選び、空欄を埋めて、完了。",
      templateCategories: {
        system: "システム",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "デプロイ",
        nginx: "Nginx",
        network: "ネットワーク",
      },
      useCasesHeading: "合間のひとときのために作られた",
      useCases: [
        "ドッグパークからクラッシュしたサービスを再起動",
        "会議中にヘルスチェックを実行",
        "ジムからデプロイ",
        "ベッドからディスクスペースを確認",
        "車からサーバステータスを確認 (Siri)",
        "離陸前にコマンドをキュー、着陸時に実行",
      ],
      techHeading: "テックスタック",
      techStack: {
        watch: { label: "Watch", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + メニューバー" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "リレー", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "暗号化", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "通知", value: "APNs + サーバごとのトグル" },
      },
      quickSetup: "クイックセットアップガイド",
      relayConfig: "リレー設定",
      ctaHeading: "あなたのサーバが待っています。",
      ctaSub: "永久に無料。オープンソース。電話不要。",
      ctaGithub: "GitHub で見る",
    },

    base: {
      tagline: "プリミティブ。トークン。完了。",
      description:
        "70 のプリミティブ、8 つのデザイントークンカテゴリ、ダークモード、そしてあなたのスタックへのゼロの意見。クリーンで構成可能な React コンポーネントは、どこでも動きます——ランチャーを含めて。",
      catalogTagline: "ユニバーサルデザインツールキット——モノクロ、プラットフォーム非依存。",
      catalogDescription:
        "70 のプリミティブ、8 つのデザイントークンカテゴリ、ダークモード、そしてあなたのスタックへのゼロの意見。クリーンで構成可能な React コンポーネントは、どこでも動きます——ランチャーを含めて。",
      requirements: "無料＆オープンソース  ·  React  ·  TypeScript",
      featuresHeading: "プリミティブ。トークン。トグル。",
      ctaLabel: "ソースを見る",
      features: [
        {
          title: "70 の本番対応プリミティブ",
          body: "フォーム、レイアウト、データ、フィードバック——必要なすべてのプリミティブ、不要なものは一切なし。入力、テーブル、カレンダー、スパークライン、ツリービュー、カラーピッカー、ダイアログなど。",
        },
        {
          title: "1 つのトークンシステム、すべてのプラットフォーム",
          body: "色、タイポグラフィ、スペーシング、半径、エレベーション、アニメーション、グラスモルフィズム——すべて TypeScript トークンとして定義され、CSS 変数または React Native スタイルにエクスポート。",
        },
        {
          title: "ライト＆ダークが最初から",
          body: "すべてのコンポーネントが自動的にカラーモードを尊重——システム設定検出、localStorage 付きの手動トグル、両モードで適応するグラスモルフィズム。",
        },
      ],
      showcase: [
        {
          badge: "70 のプリミティブ",
          title: "必要なすべてのコンポーネント、不要なものは一切なし",
          description:
            "ボタンと入力からツリービュー、カラーピッカー、スパークラインまで——TypeScript で構築され、React 以外の外部依存がゼロの 70 の本番対応プリミティブ。",
          bullets: [
            "フォーム：input、textarea、select、checkbox、radio、pin-input、number-input、color-picker",
            "レイアウト：grid、stack、container、center、spacer、separator",
            "データ：table、calendar、timeline、carousel、sparkline、tree-view",
            "フィードバック：toast、alert、dialog、sheet、popover、skeleton、spinner、progress",
          ],
          imageAlt: "Base プリミティブコンポーネントライブラリ",
        },
        {
          badge: "デザイントークン",
          title: "1 つのトークンシステム、すべてのプラットフォーム",
          description:
            "色、タイポグラフィ、スペーシング、半径、エレベーション、アニメーション、グラスモルフィズム——すべて TypeScript トークンとして定義され、CSS 変数または React Native スタイルにエクスポート。",
          bullets: [
            "セマンティックエイリアス付きのモノクロ優先カラーパレット",
            "すりガラス効果のためのグラスモルフィズムトークン",
            "流動的なレスポンシブサイジングのタイポグラフィスケール",
            "CSS カスタムプロパティまたは React Native StyleSheet へのエクスポート",
          ],
          imageAlt: "Base デザイントークン",
        },
        {
          badge: "ダークモード",
          title: "ライトとダーク、初日から組み込み",
          description:
            "すべてのコンポーネントは最初からカラーモードを尊重します。追加のセットアップなし、忘れるテーマラッパーなし——システム設定または手動トグルでただ動きます。",
          bullets: [
            "自動システム設定検出",
            "localStorage 永続化付きの手動トグル",
            "70 のプリミティブすべてが両モードでテスト済み",
            "グラスモルフィズム効果がカラーモードに適応",
          ],
          imageAlt: "Base ダークモードサポート",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "プライバシーポリシー",
    termsTitle: "利用規約",
    eulaTitle: "エンドユーザライセンス契約",
    tapTagline: "Tap — SSH コマンドリレー",
    effectiveDate: "発効日：2026 年 4 月 14 日",
    navPrivacy: "プライバシーポリシー",
    navTerms: "利用規約",
    navEula: "EULA",

    privacy: {
      intro:
        'Matt\'s Software（「当社」）は、Apple Watch、iPhone、Mac 向けの SSH コマンドリレーアプリケーション Tap を運営しています。本プライバシーポリシーは、当社が収集する情報、その使用方法、およびお客様のデータに関する権利について説明します。Matt\'s Software は米国に拠点を置いています。',
      collectHeading: "当社が収集する情報",
      accountHeading: "アカウント情報",
      accountBody:
        "Apple Sign-In でサインインすると、当社はお客様の Apple ID メールアドレス（または Apple がお客様に代わって提供するプライベートリレーアドレス）を受け取ります。これは当社が収集する唯一の個人を特定できる情報であり、お客様のリレーサーバーで認証するためにのみ使用されます。",
      relayHeading: "セルフホストリレーデータ",
      relayBody:
        "Tap は、接続メタデータ、暗号化された SSH キー、コマンド履歴、実行結果を、お客様自身がホストおよび運用するリレーサーバーに保存します。当社はこれらのデータにアクセスできません。お客様がリレーをコントロールするため、お客様がご自分のデータをコントロールします。",
      useHeading: "情報の使用方法",
      useBody:
        "お客様の Apple ID メールアドレスは、お客様のアカウントの認証にのみ使用されます。マーケティング、ニュースレター、その他の目的には使用しません。他のソースのデータと組み合わせることもありません。",
      storageHeading: "データの保存とセキュリティ",
      storageBody1:
        "お客様のリレーに保存される SSH キーは、AES-256-GCM を使用して保存時に暗号化されます。すべてのリレーデータ——接続メタデータ、コマンドログ、キー——はお客様自身のインフラに完全に存在します。Matt's Software は、お客様のデータを保存する中央サーバーを運営していません。",
      storageBody2:
        "リレーはセルフホストであるため、お客様のデータのセキュリティは最終的にお客様がサーバーをどのように設定し維持するかに依存します。リレーソフトウェアを最新の状態に保ち、標準的なサーバー強化プラクティスに従うことをお勧めします。",
      thirdPartyHeading: "第三者サービス",
      thirdPartyBody:
        "Tap は認証に Apple Sign-In を使用します。サインインプロセス中に Apple が収集するデータは Apple のプライバシーポリシーに準拠します。Apple Sign-In 以外、Tap はサードパーティの分析、広告、追跡サービスと統合しません。",
      notDoHeading: "当社が行わないこと",
      notDoList: [
        "当社はいかなる種類の分析や追跡も実行しません",
        "当社は第三者とデータを共有しません",
        "当社は広告を表示しません",
        "当社は使用状況のテレメトリを収集しません",
        "当社はお客様のリレーサーバーまたはそのデータにアクセスできません",
        "当社はお客様の個人情報を販売または貸与しません",
      ],
      retentionHeading: "データの保持と削除",
      retentionBody:
        "お客様はいつでも Tap アプリ内からアカウントとすべての関連データを削除できます。データはお客様のリレーに保存されているため、選択した時にいつでもサーバーから直接削除することもできます。",
      childrenHeading: "子供のプライバシー",
      childrenBody:
        "Tap は 13 歳未満の子供を対象としていません。当社は 13 歳未満の子供から意図的に個人情報を収集することはありません。子供が当社に個人情報を提供したと考える場合は、当社に連絡してください。削除するための措置を講じます。",
      changesHeading: "本ポリシーの変更",
      changesBody:
        "当社は本プライバシーポリシーを随時更新する場合があります。更新する場合、新しい発効日とともに改訂版を本ページに掲載します。変更が掲載された後の Tap の継続使用は、更新されたポリシーの受諾を構成します。",
      contactHeading: "お問い合わせ",
      contactBody:
        "本プライバシーポリシーに関するご質問やご懸念がございましたら、以下までご連絡ください：",
    },

    terms: {
      acceptHeading: "条項の受諾",
      acceptBody:
        'Tap（「本アプリ」）をダウンロード、インストール、または使用することにより、お客様は本利用規約（「規約」）に拘束されることに同意します。本規約に同意しない場合は、本アプリを使用しないでください。本規約は、米国に拠点を置くお客様と Matt\'s Software（「当社」）の間の法的契約を構成します。',
      descriptionHeading: "サービスの説明",
      descriptionBody:
        "Tap は、Apple Watch、iPhone、Mac 向けの SSH コマンドリレーアプリケーションです。お客様自身がホストおよび運用するリレーサーバーを介して、リモートサーバーでコマンドを実行できます。Matt's Software はクライアントアプリケーションとリレーソフトウェアを提供します。当社はお客様のリレーサーバーや接続先のサーバーを運営、管理、アクセスしません。",
      accountsHeading: "ユーザーアカウント",
      accountsBody:
        "Tap は認証に Apple Sign-In を使用します。各人は 1 つのアカウントを維持できます。お客様はアカウントのセキュリティを維持し、その下で発生するすべての活動について責任を負います。アカウントの認証情報を共有したり、他者にアカウントへのアクセスを許可したりしてはなりません。",
      responsibilitiesHeading: "ユーザーの責任",
      serversHeading: "お客様のサーバー",
      serversBody:
        "お客様は Tap を通じて接続するサーバーについて責任を負います。これには、これらのサーバーにアクセスする適切な権限があり、お客様の使用がすべての適用される方針および法律に準拠することを保証することが含まれます。",
      commandsHeading: "お客様のコマンド",
      commandsBody:
        "Tap はお客様が提供するコマンドを実行するツールです。お客様は Tap を通じて実行するすべてのコマンドとその結果について全責任を負うことに同意します。Matt's Software は本アプリを介して実行されたコマンドの結果について責任を負いません。",
      relayHeading: "お客様のリレー",
      relayBody:
        "Tap リレーサーバーはお客様のインフラ上にセルフホストされます。お客様はリレーの保護、最新状態の維持、アクセスの管理について責任を負います。Matt's Software はお客様のリレーを運営、監視、保守しません。",
      acceptableHeading: "許容される使用",
      acceptableIntro: "お客様は次の目的で Tap を使用しないことに同意します：",
      acceptableList: [
        "システム、ネットワーク、またはデータへの不正アクセスを取得すること",
        "適用される地域、州、国、または国際法に違反すること",
        "マルウェア、ウイルス、その他の有害なコードを送信すること",
        "システムの整合性またはパフォーマンスを妨害または中断すること",
        "他者または団体を嫌がらせ、虐待、または害すること",
        "詐欺的、欺瞞的、または誤解を招く活動に従事すること",
      ],
      ipHeading: "知的財産",
      ipBody:
        "そのデザイン、コード、ドキュメントを含む Tap アプリケーションは Matt's Software が所有し、適用される知的財産法によって保護されています。お客様の Tap の使用は、本アプリの知的財産の所有権を付与するものではありません。お客様のリレーサーバーに保存されたお客様のデータ、構成、コンテンツはお客様のものです。",
      warrantyHeading: "保証の否認",
      warrantyBody:
        'Tap は、商品性、特定目的への適合性、非侵害の保証を含むがこれらに限定されない、明示または黙示のいかなる種類の保証もなく、「現状のまま」および「利用可能な状態」で提供されます。Matt\'s Software は、本アプリが中断されないこと、エラーがないこと、安全であること、または特定の時に利用可能であることを保証しません。',
      liabilityHeading: "責任の制限",
      liabilityBody:
        "適用される法律で許可される最大限の範囲で、Matt's Software は、責任理論に関係なく、お客様の Tap の使用に起因またはこれに関連する間接的、付随的、特別、結果的、または懲罰的損害、またはデータ、利益、収益、ビジネス機会の損失について責任を負いません。",
      terminationHeading: "終了",
      terminationBody:
        "お客様はいつでもアカウントを削除して Tap の使用を中止できます。Matt's Software は、本規約に違反するか、他のユーザーまたは当社にとって有害であると当社が考える行為について、通知の有無にかかわらず、いつでも本アプリへのお客様のアクセスを一時停止または終了する権利を留保します。",
      governingHeading: "準拠法",
      governingBody:
        "本規約は、抵触法の原則を考慮することなく、米国の法律に準拠し解釈されます。本規約またはお客様の Tap の使用から生じる紛争は、米国の裁判所で解決されるものとします。",
      changesHeading: "本規約の変更",
      changesBody:
        "当社は本規約を随時更新する場合があります。更新する場合、新しい発効日とともに改訂版を本ページに掲載します。変更が掲載された後の Tap の継続使用は、更新された規約の受諾を構成します。",
      contactHeading: "お問い合わせ",
      contactBody: "本規約に関するご質問は、以下までご連絡ください：",
    },

    eula: {
      intro:
        '本エンドユーザライセンス契約（「本契約」）は、Tap（「本アプリ」）の使用に関する、お客様と米国に拠点を置く Matt\'s Software（「当社」）の間の法的契約です。本アプリをインストールまたは使用することにより、お客様は本契約に拘束されることに同意します。',
      licensedHeading: "ライセンスされたアプリケーション",
      licensedBody:
        "Tap は、Matt's Software によって開発および公開された、Apple Watch、iPhone、Mac 向けの SSH コマンドリレーアプリケーションです。本アプリは、お客様自身がホストするリレーサーバーを介して、リモートサーバーでコマンドを実行できるようにします。",
      scopeHeading: "ライセンスの範囲",
      scopeBody:
        "Matt's Software は、本契約および Apple Media Services Terms and Conditions に従って、お客様が所有または管理するデバイスに本アプリをダウンロード、インストール、使用するための限定的、非独占的、譲渡不能、取消可能なライセンスをお客様に付与します。",
      scopeIntro: "本ライセンスでは、以下のことは許可されていません：",
      scopeList: [
        "本アプリを第三者に配布、サブライセンス、リース、レンタル、または貸与すること",
        "本アプリのリバースエンジニアリング、逆コンパイル、逆アセンブル、またはソースコードの導出を試みること",
        "本アプリを変更、適応、翻訳、または本アプリに基づく派生作品を作成すること",
        "本アプリの著作権、商標、その他の所有権表示を削除、変更、または不明瞭にすること",
        "本契約で違法または禁止されている目的で本アプリを使用すること",
      ],
      relayHeading: "セルフホストリレー",
      relayBody:
        "Tap はお客様自身のインフラ上にホストおよび運用するリレーサーバーに接続します。Matt's Software はお客様のリレーサーバーを提供、管理、または維持しません。当社は、お客様のリレーサーバーまたは本アプリを介して接続するリモートサーバーの構成、運用、セキュリティ、可用性に起因する問題について責任を負いません。",
      ownershipHeading: "所有権",
      ownershipBody:
        "本アプリおよびすべての関連する知的財産権は Matt's Software の所有物であり、引き続き Matt's Software の所有物であり続けます。本契約は、本アプリにおけるいかなる所有権益もお客様に付与しません。お客様のリレーサーバーに保存されたお客様のデータ、構成、コンテンツはお客様のものです。",
      terminationHeading: "終了",
      terminationBody:
        "本ライセンスは終了するまで有効です。本契約の条件のいずれかを遵守しない場合、本契約に基づくお客様の権利は通知なしに自動的に終了します。終了時に、お客様は本アプリの使用を停止し、デバイスからすべてのコピーを削除する必要があります。Matt's Software は、いつでも、いかなる理由でも本ライセンスを終了することができます。",
      warrantyHeading: "保証の否認",
      warrantyBody:
        '本アプリは、商品性、特定目的への適合性、非侵害の保証を含むがこれらに限定されない、明示または黙示のいかなる種類の保証もなく、「現状のまま」および「利用可能な状態」で提供されます。Matt\'s Software は、本アプリが中断されないこと、エラーがないこと、または有害なコンポーネントがないことを保証しません。',
      liabilityHeading: "責任の制限",
      liabilityBody:
        "適用される法律で許可される最大限の範囲で、Matt's Software は、責任理論に関係なく、お客様の本アプリの使用に起因またはこれに関連する間接的、付随的、特別、結果的、または懲罰的損害、またはデータ、利益、収益の損失について責任を負いません。",
      governingHeading: "準拠法",
      governingBody:
        "本契約は、抵触法の原則を考慮することなく、米国の法律に準拠し解釈されます。",
      contactHeading: "お問い合わせ",
      contactBody: "本契約に関するご質問は、以下までご連絡ください：",
    },
  },

  notFound: {
    altText:
      "ピスヘルメットをかぶった赤いリボンヘビが、疑問符の形の岩の上に座り、まわりは何も書かれていない道しるべに囲まれている",
    title: "このページはどこかへ行きました。",
    sub: "道しるべは空白。ヘビも知らない。存在する場所へ戻りましょう。",
    backToSuite: "コレクションに戻る",
    rummageGithub: "あるいは GitHub をあさる",
  },
};
