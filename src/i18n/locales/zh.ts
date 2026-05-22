/// Simplified Chinese translations. Mirrors en.ts shape.

import type { Translation } from "../types";

export const zh: Translation = {
  meta: {
    siteTitle: "Matt's Software — 物有所值的小巧应用",
    siteDescription:
      "一家小而精的小型免费开源应用商店。一个启动器可以安装所有应用并保持更新。",
    htmlLang: "zh",
    direction: "ltr",
  },

  langSelector: {
    label: "语言",
    selectLanguage: "选择语言",
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
    apps: "应用",
    appsAllLabel: "所有应用",
    launcher: "启动器",
    githubAria: "GitHub",
    suiteFooter: "{count} 个应用，一个启动器。",
    getLauncher: "获取启动器",
    tipLabel: "打赏",
    tipTitle: "发送打赏",
    tipCopy: "复制",
    tipCopied: "已复制",
  },

  footer: {
    mascotAlt: "一只白猫蜷缩在蓝图和咖啡杯旁——伴着音乐入睡",
    line: "靠浓缩咖啡和大音量音乐打造。",
    sub: "Matt's Software 是一人工作室。每个应用都经过签名、公证，且完全免费。",
    github: "GitHub",
    allApps: "所有应用",
    contact: "联系",
  },

  channels: {
    appstore: "App Store",
    library: "代码库",
    source: "源码",
    download: "下载",
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
    all: "全部",
    developerTools: "开发工具",
    privacySecurity: "隐私与安全",
    utilities: "实用工具",
    learning: "学习",
    design: "设计",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "物有所值的小巧应用。",
    sub: "一家精选的小型免费应用商店，超过 {count} 款。一个启动器安装全部并保持更新——也可以单独获取任意一个。",
    downloadLauncher: "下载启动器",
    browseSuite: "浏览全集",
    metaLine: "免费 · 开源 · 今天支持 macOS，更多即将到来",
    brandName: "Matt's Software",
    brandSub: "我做过的每个应用，都在一处",
    searchPlaceholder: "搜索应用…",
    searchAria: "搜索应用",
    categoriesAria: "分类",
    noResults: "没有应用匹配「{query}」。",
    view: "查看",
  },

  appPage: {
    downloadBtn: "下载",
    viewGithub: "在 GitHub 上查看",
    openInBrowser: "在浏览器中打开",
    featuresHeadingDefault: "它能做什么",
    suiteEyebrow: "全集",
    suiteHeading: "店里更多",
    suiteSub: "每一款都把一件事做好——只装你需要的。",
    bottomAddToMenuBar: "将 {name} 添加到你的菜单栏。",
    bottomGet: "获取 {name}。",
  },

  featureShowcase: {
    screenshotComingSoon: "截图即将到来",
  },

  apps: {
    espresso: {
      tagline: "拒绝休眠。",
      description:
        "系统托盘里的保持唤醒工具：定时会话或无限模式、亚像素鼠标晃动以骗过空闲检测，以及一个立即停止一切的全局应急快捷键。包含合盖覆盖和总运行时间统计。",
      catalogTagline: "你的电脑想睡觉。Espresso 不同意。",
      catalogDescription:
        "防止电脑进入休眠的保持唤醒工具。定时会话、鼠标晃动模拟、合盖覆盖，以及一个立即停用的应急快捷键。",
      requirements: "macOS  ·  Windows  ·  Linux  ·  免费且开源",
      featuresHeading: "保持清醒。保持活跃。保住饭碗。",
      features: [
        {
          title: "定时或永久保持唤醒",
          body: "预设定时器从 5 分钟到 8 小时，或在你认真起来时使用无限模式。让显示屏保持开启，或让它休眠而系统保持唤醒。",
        },
        {
          title: "骗过你的状态指示器",
          body: "亚像素级鼠标晃动——肉眼不可见，但足以骗过 Slack、Teams、Zoom 以及任何监测空闲的应用。",
        },
        {
          title: "包含应急按钮",
          body: "Ctrl+Shift+Esc 立刻终止一切：显示屏唤醒、晃动停止、定时器取消。笔记本合盖覆盖。终身统计追踪你的总运行时间。",
        },
      ],
      showcase: [
        {
          badge: "保持清醒",
          title: "你的电脑想睡觉。Espresso 不答应。",
          description:
            "一杯小小的浓缩咖啡驻守在你的菜单栏，挡住睡眠计时器，让屏幕保持亮着（或不亮——你说了算），并以子像素级别移动鼠标，让闲置检测器持续被骗。",
          bullets: [
            "阻止系统睡眠、屏幕睡眠或两者——按会话切换",
            "子像素鼠标抖动骗过 Slack、Teams、Zoom 的闲置检测",
            "盖闭模式让笔记本合上时一切照常运行",
            "终生使用统计——你偷走了多少睡眠",
          ],
          imageAlt: "3D 浓缩咖啡杯守卫一台困倦的笔记本电脑",
        },
        {
          badge: "时间到",
          title: "计时会话，或直到你认输",
          description:
            "选个预设（5 分钟、30 分钟、2 小时、8 小时）或无限模式。全局恐慌快捷键瞬间关闭一切——屏幕入睡、抖动停止、计时取消。",
          bullets: [
            "5 分钟到 8 小时的预设计时器，加上无限模式",
            "Ctrl+Shift+Escape 全局恐慌——一切瞬间关闭",
            "会话倒数实时显示在菜单栏",
            "锁屏或合盖时自动结束（可配置）",
          ],
          imageAlt: "3D 铬质沙漏中流淌着温暖的橙色沙子，旁边有一个红色恐慌按钮",
        },
      ],
    },

    stickykeys: {
      tagline: "锁住那些键。",
      description:
        "一个小巧的菜单栏应用。点击锁定键盘，用超细纤维布擦拭键盘，不启动应用、不发邮件、不打断工作，然后点击覆盖层解锁。一个磨砂的全屏覆盖覆盖每个显示器，鼠标保持活跃，安全自动解锁让你永远不会被困住。",
      catalogTagline: "锁住键盘，让清洁布不会触发快捷键。",
      catalogDescription:
        "用于清洁的菜单栏键盘锁。点击吞掉每一个键、修饰键和媒体键；磨砂全屏覆盖覆盖每个显示器，鼠标保持活跃以便解锁，安全自动解锁让你永远不会被困住。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  免费  ·  Developer ID 签名并公证",
      featuresHeading: "擦键盘。什么都不运行。",
      features: [
        {
          title: "一键锁定一切",
          body: "活跃的键盘捕获在系统级吞掉每个键、修饰键和媒体键——擦拭键盘而不触发任何快捷键。",
        },
        {
          title: "磨砂全屏覆盖",
          body: "清透无色调的模糊覆盖每个显示器，让你一眼看出键盘已锁，并有实时的自动解锁倒计时。",
        },
        {
          title: "仅鼠标解锁，永不被困",
          body: "从覆盖按钮或菜单栏图标解锁，无论如何安全自动解锁都会触发，让你永远不会被困住。",
        },
      ],
      showcase: [
        {
          badge: "全面锁定",
          title: "一击，键盘归于寂静",
          description:
            "系统级键盘截取吞掉每一个按键、修饰键和媒体键——这样擦拭布就不会触发快捷键、发送邮件或在录制中途退出 Logic。一层磨砂玻璃覆盖每个显示器，让锁定状态一目了然。",
          bullets: [
            "系统级键盘截取——每个键、每个修饰键、每个媒体键",
            "磨砂遮罩覆盖每台显示器，附带实时解锁倒计时",
            "鼠标保持活动，让你随时解锁",
            "驻留菜单栏——一击锁定，一击解开",
          ],
          imageAlt: "3D 微型键盘在磨砂薰衣草玻璃罩下，配有一把挂锁吊饰",
        },
        {
          badge: "安全出口",
          title: "你绝不会被困住",
          description:
            "无论发生什么，安全自动解锁都会触发——即使遮罩失灵、即使菜单栏卡死。解锁面同时监听鼠标、菜单栏和一个硬性计时器。",
          bullets: [
            "自动解锁计时器保证你永远不会被卡住",
            "三条独立的解锁路径：遮罩、菜单栏、计时器",
            "最大锁定时长可配置（默认 1 分钟）",
            "偏执设计——失败时打开，绝不关闭",
          ],
          imageAlt: "3D 铬质刻度盘，配有薰衣草指针和一把漂浮在打开挂锁之上的钥匙",
        },
      ],
    },

    stats: {
      tagline: "每个信号。一眼看尽。",
      description:
        "一个原生的菜单栏系统监视器。实时显示每核 CPU、内存压力、磁盘读写、网络上下行和传感器读数——加上可选的紧凑小部件，可常驻在状态栏，以及每个信号的历史走势图，让你不打开活动监视器也能发现峰值。",
      catalogTagline: "每个系统信号一眼可见——在你的菜单栏里。",
      catalogDescription:
        "一个原生的菜单栏系统监视器。实时显示每核 CPU、内存压力、磁盘读写、网络上下行和传感器读数——加上可选的紧凑小部件和每个信号的历史走势图。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  免费  ·  Developer ID 签名并公证",
      featuresHeading: "看整台机器。不用整个窗口。",
      features: [
        {
          title: "每个系统信号一眼可见",
          body: "每核 CPU、内存压力（包含线缆/压缩/应用/缓存的细分）、磁盘读写、网络上下行、传感器和实时进程列表——全部集中在一个紧凑的菜单栏面板中。",
        },
        {
          title: "紧凑的菜单栏小部件",
          body: "选择哪些数字（或一个微型实时波形）常驻在你的状态栏。工作时可一瞥可见，绝不挡道。",
        },
        {
          title: "走势图，而非电子表格",
          body: "每个信号的近期历史都绘成图，所以峰值或失控进程一目了然，无需翻找活动监视器。",
        },
      ],
      showcase: [
        {
          badge: "所有信号",
          title: "你机器的每一项指标，尽收眼底",
          description:
            "每核 CPU、内存压力（连同 wired / 压缩 / app / 缓存细分）、磁盘读写、网络上下行、传感器读数——Stats 读取 macOS 暴露的每一项信号，并把它们全部钉在你的菜单栏上。",
          bullets: [
            "每核 CPU 使用率和顶端进程列表",
            "完整驻留细分的内存压力",
            "磁盘 I/O、网络吞吐量和传感器温度",
            "把任意子集钉为紧凑的菜单栏小部件",
          ],
          imageAlt: "3D 漂浮的铬粉色仪表簇与一颗小芯片传感器",
        },
        {
          badge: "回望",
          title: "波形图，而非电子表格",
          description:
            "每项信号的近期历史都被绘制成图，因此失控的进程或一次热点峰值一眼即知——无需打开活动监视器再等它重演。",
          bullets: [
            "为每个仪表提供实时波形图历史",
            "可配置的历史窗口——最近一分钟、一小时或一天",
            "回溯发现峰值，而非追着实时数据跑",
            "点击波形图查看那一刻的顶端进程",
          ],
          imageAlt: "3D 光泽粉色波形丝带，顶端有一颗铬质标记球",
        },
      ],
    },

    port: {
      tagline: "每个端口，一键搞定。",
      description:
        "一个小巧的原生菜单栏端口管理器。看看在监听什么、终止或暂停进程、转发或用 NAT-PMP 映射，并在实时地图上观察活动连接——点击任何一个即可在 Blip 中检查。",
      catalogTagline: "你 Mac 上的每个开放端口，一键即达。",
      catalogDescription:
        "一个原生的菜单栏端口管理器：看在监听什么、终止或暂停进程、转发或用 NAT-PMP 映射，在实时地图上观察活动连接——点击在 Blip 中检查。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  免费  ·  Developer ID 签名",
      featuresHeading: "看到它。终止它。转发它。",
      features: [
        {
          title: "每个开放端口，实时显示",
          body: "菜单栏中列出每个监听的 TCP/UDP 端口，连同背后的进程和 PID，每秒刷新。终止它、暂停它（SIGSTOP/SIGCONT）或放着不管。",
        },
        {
          title: "转发与映射",
          body: "用内置的 TCP 转发器把任意本地端口代理到另一个端口，在局域网中暴露它，并用原生 NAT-PMP 穿越路由器——无需配置。",
        },
        {
          title: "地图上的连接 → Blip",
          body: "活动连接按实际目的地绘制在实时地图上。点击任意端点在 Blip 中深入检查（若未安装则会提示获取）。",
        },
      ],
      showcase: [
        {
          badge: "港口",
          title: "每个开放端口，一击可达",
          description:
            "菜单栏中的实时清单显示每个监听中的 TCP/UDP 端口——背后的进程、PID、协议。杀掉、暂停（SIGSTOP/SIGCONT），或只是盯着它。",
          bullets: [
            "每秒刷新——此刻谁在监听",
            "无需离开菜单栏即可杀掉、暂停或恢复进程",
            "已知端口库一眼命名常见服务",
            "新端口一开，立即通知",
          ],
          imageAlt: "3D 微型港口，拖船、驳船和帆船停泊在一个小码头",
        },
        {
          badge: "信号",
          title: "转发、暴露，或穿透路由器",
          description:
            "内置 TCP 转发器把任何本地端口代理到另一个。原生 NAT-PMP 自动穿透你的路由器。在地图上观看活动连接——点一个端点用 Blip 检视。",
          bullets: [
            "基于 Network.framework 的 TCP 转发器——零依赖",
            "原生 NAT-PMP（RFC 6886）路由器映射，无需配置",
            "一个开关把端口暴露到你的局域网",
            "活动连接绘制在地图上；一击交给 Blip",
          ],
          imageAlt: "3D 微型灯塔用光束照亮一个小蓝色数据包",
        },
      ],
    },

    alfred: {
      tagline: "夺回磁盘。",
      description:
        "一个原生的菜单栏助手，找出可安全删除的开发垃圾——node_modules、Cargo target/、构建与测试缓存、Xcode DerivedData、包管理器缓存——按大小降序排列并移入回收站。可一键恢复。",
      catalogTagline: "夺回被开发垃圾占用的磁盘空间。",
      catalogDescription:
        "一个原生的菜单栏助手，找出可安全删除的开发垃圾——node_modules、Cargo target/、构建与测试缓存、Xcode DerivedData、包管理器缓存——按大小降序排列并移入回收站（可恢复）。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  免费  ·  Developer ID 签名",
      featuresHeading: "找到它。扔掉它。拿回磁盘。",
      features: [
        {
          title: "先找出最大的垃圾",
          body: "node_modules、Cargo target/、构建与测试缓存、Xcode DerivedData、Homebrew/Yarn/npm 缓存——扫描、计算大小、按大小降序列出，让你清楚地知道是什么在霸占你的磁盘。",
        },
        {
          title: "默认安全删除",
          body: "Alfred 只动可重新生成的目录——缓存、构建产物、依赖树——绝不动源码。所有内容都移入回收站，反悔时一键即可恢复。",
        },
        {
          title: "从菜单栏",
          body: "作为小巧的菜单栏应用存在。想扫描就扫描，看看回收了多少，或留作下次 SSD 警告时一次性的清理工具。",
        },
      ],
      showcase: [
        {
          badge: "为您服务",
          title: "最大优先，礼貌而无情",
          description:
            "菜单栏里的男仆，确切知道哪些文件夹可以安心放手。node_modules、Cargo target/、Xcode DerivedData、Homebrew 缓存、Yarn 缓存——Alfred 找到它们，称重，托在银盘上呈给你。",
          bullets: [
            "扫描你项目里每一个常见的开发垃圾文件夹",
            "由大到小排列，让收获一目了然",
            "按文件夹的跳过规则，让你的心头好留下",
            "驻留菜单栏——心情来了就扫一次",
          ],
          imageAlt: "3D 微型男仆披着绿色绶带托着银盘呈上开发垃圾",
        },
        {
          badge: "按设计安全",
          title: "拿回吉字节，留住源码",
          description:
            "Alfred 只动可再生的文件夹——缓存、构建产物、依赖树——绝不碰你的源码。一切先入废纸篓，所以错决定离撤销只差一击。",
          bullets: [
            "只动可再生的文件夹——源码始终安全",
            "文件去废纸篓，不是 /dev/null",
            "一击恢复任何你改了主意的东西",
            "累计总数显示你已经回收了多少",
          ],
          imageAlt: "3D 固态硬盘带绿色 LED 环，小垃圾包裹四散飘走",
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
      tagline: "看清谁在外发。",
      description:
        "看清你的数据去了哪里、谁在收集，并将其关闭——全部都在一张非常漂亮的 3D 地图上。",
      catalogTagline: "你的电脑一直在背着你说话。",
      catalogDescription:
        "实时网络监控，配有 3D 连接地图、智能防火墙、DNS 拦截、海底电缆路由和带宽分析。看清你的数据去了哪里。",
      requirements: "免费且开源",
      featuresHeading: "一张地图。一个保镖。一堵墙。",
      features: [
        {
          title: "每个连接的实时 3D 地图",
          body: "每个应用的流量都绘制在一个地球仪上，按服务着色的弧线。200 条连接、超过 700 条真实海底电缆、显示方向的粒子。你一直忽视的互联网，让你看见。",
        },
        {
          title: "为你带宽把关",
          body: "每个应用都需要许可，毫无例外。严格模式默认拦截一切，直到你说不。按应用的带宽条揭露数据贪吃鬼。一键终止开关。",
        },
        {
          title: "20 万追踪器在连接前被拦截",
          body: "DNS 黑名单立刻干掉广告和追踪域名；实时查询日志显示每次查询；追踪器排行榜点名最严重的违规者。",
        },
      ],
      showcase: [
        {
          badge: "网络地图",
          title: "200 条连接。一个都没问过你。",
          description:
            "你电脑上的每个应用都在悄悄回家。Blip 把它们全部放上一张 3D 地图，让你实时观看这场混乱。",
          bullets: [
            "连接通过跨洋的真实海底电缆路由",
            "服务着色的弧线——立刻看出 Google、Discord、Apple 等数百个服务",
            "动画粒子显示数据双向流动",
            "逐跳的 traceroute 显示你的数据包实际走过的路径",
          ],
          imageAlt: "Blip 3D 网络地图显示连接弧线",
        },
        {
          badge: "防火墙",
          title: "为你带宽把关",
          description:
            "每个应用都需要许可。毫无例外，没有借口。严格模式拦截一切，直到你同意。因为你的应用们已经太自在了。",
          bullets: [
            "严格模式：未证清白前一律有罪",
            "按应用的带宽条揭露数据贪吃鬼",
            "范围规则——允许 443 端口但拦截其他一切",
            "终止开关：一击，零互联网，瞬间静默",
          ],
          imageAlt: "Blip 防火墙显示应用级网络访问控制",
        },
        {
          badge: "守护",
          title: "20 万追踪器在尝试连接前就被拦截",
          description:
            "你的 DNS 是个告密者。每个应用、每个广告 SDK、每个分析 ping——守护在门口将它们拦下。看看谁想回家，把它们关掉。",
          bullets: [
            "DNS 黑名单立刻干掉 20 万以上的追踪器和广告域名",
            "实时查询日志——实时观看每次查询",
            "追踪器排行榜显示最顽固的违规者",
            "与防火墙叠加——两堵墙，零情面",
          ],
          imageAlt: "Blip 守护显示 DNS 拦截和追踪器检测",
        },
        {
          badge: "可视化",
          title: "互联网不过是湿漉漉的电缆",
          description:
            "你的 YouTube 视频通过比花园水管还细的电缆穿越了三个大洋。Blip 准确地告诉你是哪一条——超过 700 条真实海底电缆路由，当你的数据流经时它们就会发光。",
          bullets: [
            "来自 TeleGeography 的真实海底电缆路由绘制在海底",
            "你的流量经过时活跃电缆会亮起",
            "行进虚线粒子显示上传与下载方向",
            "基于 ping 的速度——快连接快流，慢连接慢爬",
          ],
          imageAlt: "Blip 可视化显示海底电缆和数据流",
        },
        {
          badge: "Traceroute",
          title: "加载一个网页需要在 6 个城市间跳 14 跳",
          description:
            "每个数据包到达前都要在十几个路由器间弹跳。Blip 追踪这条路线——逐跳、逐城、逐缆——并绘制在地图上。",
          bullets: [
            "逐跳标记直接叠加在 3D 地图上",
            "延迟着色：绿色快、琥珀色还行、红色痛苦",
            "通过跨洋真实海底电缆路由",
            "为每个活动连接自动 traceroute",
          ],
          imageAlt: "Blip traceroute 显示逐跳网络路径",
        },
      ],
    },

    diane: {
      tagline: "按下录音。说话。",
      description:
        "一款复古录音机，配有实时语音转文字、磁带库和听写模式。灵感来自特工 Dale Cooper 的磁带备忘录。",
      catalogTagline: "我手中拿着一台小型磁带录音机。",
      catalogDescription:
        "一款拟物化复古录音机，配有实时语音转文字、磁带库和听写模式。灵感来自特工 Dale Cooper。",
      requirements: "免费且开源",
      featuresHeading: "按下录音。说话。走起。",
      features: [
        {
          title: "拟物化磁带录音机",
          body: "一条悬浮侧边栏，里面是逼真的录音机：动画的盘卷、VU 表和物理按钮。按下录音并开口——全局快捷键让你可以从任何应用录音。",
        },
        {
          title: "实时设备端转录",
          body: "Apple 的 SFSpeechRecognizer 在你说话时同步转录——无需云端，无需 API 密钥。点击转录中的任意词，跳转到录音中那一刻。",
        },
        {
          title: "装满磁带的鞋盒",
          body: "每段录音都保存为带音频和转录的彩色磁带。在你的收藏中滚动浏览、加载任意一盘、随时回放。",
        },
      ],
      showcase: [
        {
          badge: "录音机",
          title: "为你的桌面打造的拟物化磁带录音机",
          description:
            "一条悬浮侧边栏，里面是逼真的磁带录音机。按下录音并开口。你的声音被捕捉、实时转录并保存到磁带上，可浏览、倒带和回放。",
          bullets: [
            "逼真的磁带录音机，带动画盘卷和 VU 表",
            "用物理按钮录音、播放、倒带、快进",
            "磁带盘卷实时可视化回放位置",
            "全局快捷键让你不切窗口就能从任何应用录音",
          ],
          imageAlt: "Diane 磁带录音机界面",
        },
        {
          badge: "实时转录",
          title: "你说出每个词，它就为你打出来",
          description:
            "Diane 使用 Apple 的设备端语音识别实时转录你的话。无云端、无 API 密钥、无延迟。开口说话，看着字句出现。",
          bullets: [
            "由 macOS SFSpeechRecognizer 驱动的实时语音转文字",
            "完全在设备上处理，零数据离开你的机器",
            "点击转录中的任意词，跳转到录音中的那一刻",
            "听写模式将你的话直接打入任意聚焦的文本字段",
          ],
          imageAlt: "Diane 实时转录浮层",
        },
        {
          badge: "磁带库",
          title: "装满磁带的鞋盒",
          description:
            "每段录音都保存为带有独特颜色的磁带。在你的收藏中滚动浏览，点击加载，随时回放。",
          bullets: [
            "10 种独特磁带颜色随机分配",
            "磁带在会话间持久保存，带有完整音频和转录",
            "方向键浏览磁带收藏",
            "每条磁带标签上显示字数",
          ],
          imageAlt: "Diane 磁带库",
        },
      ],
    },

    peephole: {
      tagline: "看看谁在看着。",
      description:
        "你的相机和麦克风的菜单栏哨兵。Peephole 显示当前哪些应用正在使用它们、保留访问历史，并在有什么把它们打开时通知你——无需特殊权限、无需内核扩展。",
      catalogTagline: "看看谁在看着。",
      catalogDescription:
        "你的相机和麦克风的菜单栏哨兵：当前哪些应用在使用、访问历史，以及在打开的那一刻发出通知。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  免费  ·  Developer ID 签名",
      featuresHeading: "没有你不知道的录制。",
      features: [
        {
          title: "实时相机与麦克风状态",
          body: "相机或麦克风激活的那一刻，菜单栏图标立刻翻转，所以你总能知道有东西在录。",
        },
        {
          title: "访问历史",
          body: "持续记录哪些应用何时使用了相机或麦克风——回滚看一天的活动。",
        },
        {
          title: "通知",
          body: "应用开始使用相机或麦克风的那一刻就提醒你。无需特殊权限、无需内核扩展。",
        },
      ],
      showcase: [
        {
          badge: "眼睛与耳朵",
          title: "在有东西开始监视的那一秒就知道",
          description:
            "Peephole 的菜单栏字形在摄像头或麦克风变热的瞬间翻转。轻点它，你就能看到具体是哪个应用开了它——然后由你决定这是不是应有之举。",
          bullets: [
            "摄像头和麦克风的实时状态，始终可见",
            "字形在访问开始或结束的瞬间翻转",
            "轻点查看负责应用及其打开的设备",
            "无需特殊权限，无需内核扩展——纯用户态",
          ],
          imageAlt: "3D 铬质摄像头镜头是发光的青绿色眯眼，旁边是一个铬质麦克风",
        },
        {
          badge: "收据",
          title: "每次访问都有日志，关键时刻附带通知",
          description:
            "回看一天的摄像头和麦克风活动——谁用了、何时用、用了多久。可选通知会在访问开始的瞬间触发，让任何意外激活都不会无声无息。",
          bullets: [
            "按应用的历史，附带时间戳和时长",
            "每次新访问发出通知（按设备切换）",
            "按应用、设备或时间窗口筛选",
            "历史跨重启保留——没有东西能溜过去",
          ],
          imageAlt: "3D 铬质猫眼圆盘配发光的青绿色虹膜，身后是一摞历史卡片",
        },
      ],
    },

    quarantine: {
      tagline: "审查每个下载。",
      description:
        "~/Downloads 的菜单栏检查器。对每个新文件，它都呈现隔离来源 URL、Gatekeeper/codesign 状态、SHA-256 和可选的 VirusTotal 判定——然后通知你，让你打开前先审查。",
      catalogTagline: "信任，但要审查每个下载。",
      catalogDescription:
        "~/Downloads 的菜单栏检查器：每个新文件的隔离来源、Gatekeeper/codesign 状态、SHA-256 和可选的 VirusTotal 判定，并通知你审查。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  免费  ·  Developer ID 签名",
      featuresHeading: "知道刚才有什么落入了 Downloads。",
      features: [
        {
          title: "来源与隔离",
          body: "通过 com.apple.quarantine 属性精确查看文件来自哪里——下载它的代理和源 URL。",
        },
        {
          title: "Gatekeeper 与哈希",
          body: "对每个落入 ~/Downloads 的新文件进行 codesign/Gatekeeper 评估，并给出 SHA-256。",
        },
        {
          title: "可选 VirusTotal",
          body: "添加 API 密钥后，Quarantine 内嵌显示信誉判定，让你在打开下载前就能审查。",
        },
      ],
      showcase: [
        {
          badge: "隔离仓",
          title: "每一份新下载，在你点头前都被隔离",
          description:
            "文件刚落到 ~/Downloads，Quarantine 就把它请上检验台。你能确切看到它来自哪里——代理、来源 URL、隔离属性——在你双击之前。",
          bullets: [
            "通过 FSEvents 实时监视 ~/Downloads",
            "读取 com.apple.quarantine：下载它的应用和来源 URL",
            "每一次新到货都通知你",
            "一文件一行——整条队列尽收眼底",
          ],
          imageAlt: "3D 玻璃隔离舱里悬浮着一个包裹，外侧围着批准和拒绝的包裹",
        },
        {
          badge: "检视",
          title: "签名、哈希和裁决",
          description:
            "对每个文件，Quarantine 都列出 Gatekeeper 评估、codesign 状态和 SHA-256。塞一个 VirusTotal API key，信誉裁决就在原地出现——开之前先核一遍。",
          bullets: [
            "spctl 评估 + codesign --display 一行展示",
            "落地时即计算 SHA-256——随时可复制",
            "可选 VirusTotal 行内裁决（自带 API key）",
            "从菜单直接在 Finder 显示或丢进废纸篓",
          ],
          imageAlt: "3D 铬质放大镜放在奶白色文件夹上，旁边是金色印章",
        },
      ],
    },

    sentry: {
      tagline: "盯紧那些阴暗角落。",
      description:
        "macOS 持久化的菜单栏审计员。它枚举 LaunchAgents 与 Daemons、登录项、cron 和 shell 启动文件，检查每个目标的代码签名和公证，并在出现新或更改项的那一刻向你发出警报——然后让你直接从菜单栏检查、阻止或恢复。",
      catalogTagline: "在有东西扎根的那一刻就察觉。",
      catalogDescription:
        "macOS 持久化的菜单栏审计员——LaunchAgents、登录项、cron 和 shell 启动文件——配有签名检查，以及出现新或更改项时的警报。检查、阻止或恢复其中任何一项。",
      requirements: "macOS 14+  ·  Apple Silicon  ·  免费  ·  Developer ID 签名",
      featuresHeading: "盯紧恶意软件躲藏的地方。",
      features: [
        {
          title: "每条持久化向量",
          body: "LaunchAgents 与 Daemons、登录项、cron 和 shell 启动文件——任何能扎根并在重启后存活的地方，都集中在一个菜单栏列表中。",
        },
        {
          title: "签名感知",
          body: "通过 spctl 和 codesign 将每个目标二进制分类为已公证 / 已签名 / 未签名，所以未签名的 launch agent 立刻引人注目。",
        },
        {
          title: "变更告警，阻止不该出现的",
          body: "快照对比在新持久化项出现或更改的那一刻通知你。检查 plist 或脚本，然后阻止——Sentry 卸载并以 .sentry-disabled 暂存。一键即可逆。",
        },
      ],
      showcase: [
        {
          badge: "瞭望塔",
          title: "每一个阴暗角落，都被点亮",
          description:
            "LaunchAgents 与 Daemons、登录项、cron 与 shell 启动文件——Sentry 把灯笼举在每一个可能悄悄扎根的地方之上。一张菜单栏列表，签名已核，等你检视。",
          bullets: [
            "在一个面板里列出每种 macOS 持久化向量",
            "通过 spctl + codesign 把每个目标归类为公证 / 已签名 / 未签名",
            "从列直接打开 plist 或脚本",
            "驻留菜单栏——不必让某扇窗口一直在前",
          ],
          imageAlt: "3D 铬质提灯里有一颗发光的紫色水晶，链条上挂着眼睛吊饰",
        },
        {
          badge: "清单",
          title: "在新事物出现的瞬间就察觉",
          description:
            "Sentry 给你的持久化状态拍快照，然后 diff。新代理、登录项或 rc 改动一落地，你就被通知——配一个完全可撤销的一击拦截。",
          bullets: [
            "快照 diff 抓住每一个新增或变更的持久化项",
            "拦截会卸载该项并以 .sentry-disabled 搁置",
            "一击恢复——系统不会遭受任何破坏性操作",
            "通知在下一次重启之前拍拍你的肩",
          ],
          imageAlt: "3D 卷轴上盖着紫色蜡封，立在铬质讲台上，旁边是铬质警铃",
        },
      ],
    },

    fishbones: {
      tagline: "把任何技术书变成互动课程。",
      description:
        "扔入 PDF 或 EPUB，Libre 就生成课时、练习和隐藏测验。16 种语言一个编辑器、笔记本上的本地 AI 助教、能挺过周末的连胜火焰，以及 17 种主题。",
      catalogTagline: "把任何技术书变成互动课程。",
      catalogDescription:
        "扔入 PDF 或 EPUB，Libre 就生成课时、练习和隐藏测验。16 种语言一个编辑器、笔记本上的本地 AI 助教、能挺过周末的连胜火焰，以及 17 种主题。",
      requirements: "免费且开源",
      featuresHeading: "从任何书中学习。",
      features: [],
    },

    tap: {
      tagline: "手腕上的服务器。",
      description:
        "从你的 Apple Watch 在远程服务器上执行预配置的 SSH 命令。轻点、确认、完成。支持蜂窝网络，支持 Siri，端到端加密一切。",
      catalogTagline: "你基础设施的命令遥控器。",
      catalogDescription:
        "从你的 Apple Watch 在远程服务器上执行预配置的 SSH 命令。支持蜂窝网络、支持 Siri，并端到端加密一切。",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  免费且开源",
      featuresHeading: "为你的服务器准备的遥控器——戴在手腕上。",
      features: [
        {
          title: "真正的手表应用，不是通知壳",
          body: "原生 watchOS 服务器列表，配有实时状态点、通过操作按钮访问的固定命令、危险命令确认，以及可用数码表冠滚动的输出。支持蜂窝——无需手机。",
        },
        {
          title: "Companion 与 Mac，步调一致",
          body: "完整的 iPhone、iPad 和 Mac Catalyst 应用。添加服务器、配置命令与命令套件、查看历史、管理 SSH 密钥。所有内容实时同步到手表。",
        },
        {
          title: "套件、警报、Siri、复杂功能",
          body: '将命令打包为一键套件。30 秒健康 ping 和 APNs 警报。五个表盘复杂功能。"嘿 Siri，Tap 重启 prod-api。"',
        },
      ],
      showcase: [
        {
          badge: "手表应用",
          title: "从手腕上重启生产环境。",
          description:
            "原生 watchOS 应用，配有服务器列表、命令执行和触觉反馈。轻点命令、确认、完成。真实输出可用数码表冠滚动。支持蜂窝——无需手机。",
          bullets: [
            "服务器列表带实时状态点（绿/红）",
            "通过操作按钮快速访问固定命令",
            "危险命令的确认视图",
            "可用数码表冠滚动的截短输出",
          ],
          imageAlt: "Tap 手表应用显示服务器命令",
        },
        {
          badge: "Companion",
          title: "从手机配置一切。",
          description:
            "完整的 iPhone、iPad 和 Mac Catalyst 管理应用。添加服务器、配置命令、管理 SSH 密钥、查看历史、设置命令套件。所有内容立即同步到手表。",
          bullets: [
            "带服务器健康网格和活动流的仪表盘",
            "带模板库的可视化命令编辑器",
            "通过 WebView 的完整交互式 SSH 终端",
            "生成 QR 码用于即时手表配对",
          ],
          imageAlt: "Tap Companion 应用仪表盘",
        },
        {
          badge: "套件",
          title: "一键执行 5 条命令。",
          description:
            "将相关命令分组为套件，构建一键部署工作流。每步实时显示成功/失败。配置失败时是否继续或立即停止。",
          bullets: [
            "带进度追踪的有序步骤执行",
            "每步的失败时是否继续切换",
            "套件进度通过 WebSocket 流式推送",
            "完美用于部署序列和健康检查例程",
          ],
          imageAlt: "Tap 套件执行进度在手表上",
        },
        {
          badge: "警报",
          title: "比你的用户先知道。",
          description:
            "每 30 秒后台健康 ping。服务器宕机时，你的手表和手机会立即收到推送通知。每服务器开关，让你只在重要的事上收到警报。",
          bullets: [
            "30 秒健康 ping 循环并追踪延迟",
            "状态变化时向手表+手机的 APNs 推送",
            "每服务器的通知开关",
            "Apple Watch 上的触觉警报模式",
          ],
          imageAlt: "Tap 服务器宕机通知在手表上",
        },
        {
          badge: "复杂功能",
          title: "表盘上一瞥可见的服务器健康。",
          description:
            "五个可配置的复杂功能，直接在你的表盘上显示实时服务器指标。选择要显示的服务器和指标。数据自动从应用同步。",
          bullets: [
            "服务器状态：全集群上/下计数",
            "集群指标：每服务器的磁盘、内存或 CPU",
            "Docker：运行中容器计数",
            "运行时间：每服务器的运行时间显示",
            "快速命令：一瞥可见的固定命令",
          ],
          imageAlt: "Tap 手表复杂功能显示服务器指标",
        },
        {
          badge: "macOS",
          title: "从菜单栏完全掌控。",
          description:
            "原生 macOS 应用，用于快速访问服务器。监控你的集群、执行命令、管理配置，无需打开浏览器。使用 Apple 登录实现无缝设置。",
          bullets: [
            "菜单栏存在感，即时访问",
            "完整命令执行带输出显示",
            "从 JSON 导入服务器配置",
            "Apple Sign-In 认证",
          ],
          imageAlt: "Tap macOS 应用显示服务器仪表盘",
        },
        {
          badge: "Siri",
          title: '"嘿 Siri，Tap 重启 prod-api。"',
          description:
            "完整的 App Intents 集成。语音运行任何命令。免提检查服务器状态。Siri 确认操作并报告结果。可从手表、手机或 CarPlay 工作。",
          bullets: [
            "自然语言：'Tap 在 prod 上重启 nginx'",
            "服务器状态检查：'在 Tap 上检查我的服务器'",
            "执行前的确认对话",
            "通过语音响应报告结果",
          ],
          imageAlt: "Siri 正在执行一个 Tap 命令",
        },
      ],
      stats: [
        { value: "< 3 秒", label: "执行时间" },
        { value: "蜂窝", label: "无需手机" },
        { value: "AES-256", label: "密钥加密" },
        { value: "MIT", label: "开源" },
      ],
      threeSecondsHeading: "三秒。就这么多。",
      threeSecondsSub: "从手腕到服务器再返回。",
      stepTap: "轻点",
      stepConfirm: "确认",
      stepDone: "完成",
      archHeading: "架构",
      archWatch: "手表",
      archRelay: "中继",
      archServers: "你的服务器",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "安全模型",
      securityCards: [
        {
          title: "静态密钥",
          body: "SSH 密钥用 AES-256-GCM 加密。主密码短语通过 Argon2id 派生。密钥仅在中继运行时以解密形式存在于内存中。",
        },
        {
          title: "令牌认证",
          body: "每设备的 Bearer 令牌，经 Argon2 哈希。对破坏性操作可选 TOTP 2FA。令牌可立即吊销。",
        },
        {
          title: "全程 TLS",
          body: "内置 Let's Encrypt 自动续期。所有传输流量加密。自托管中继可选证书钉扎。",
        },
        {
          title: "手表安全",
          body: "令牌存储在硬件加密的 Watch Keychain 中。离腕检测自动锁定。设备上不缓存敏感数据。",
        },
      ],
      templatesHeading: "27 个内置模板",
      templatesSub: "预配置常用命令。选模板、填空白、完成。",
      templateCategories: {
        system: "系统",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "部署",
        nginx: "Nginx",
        network: "网络",
      },
      useCasesHeading: "为间隙时刻而生",
      useCases: [
        "在狗公园重启崩溃的服务",
        "开会途中跑个健康检查",
        "在健身房部署",
        "在床上检查磁盘空间",
        "在车里检查服务器状态（Siri）",
        "起飞前排队命令，落地时执行",
      ],
      techHeading: "技术栈",
      techStack: {
        watch: { label: "手表", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + 菜单栏" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "中继", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "加密", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "通知", value: "APNs + 每服务器开关" },
      },
      quickSetup: "快速安装指南",
      relayConfig: "中继配置",
      ctaHeading: "你的服务器在等。",
      ctaSub: "永久免费。开源。无需手机。",
      ctaGithub: "在 GitHub 上查看",
    },

    base: {
      tagline: "原语。Token。完成。",
      description:
        "70 个原语、8 个设计 Token 类别、深色模式，以及对你的技术栈零意见。干净、可组合的 React 组件，到处都能用——包括启动器。",
      catalogTagline: "通用设计工具包——单色、平台无关。",
      catalogDescription:
        "70 个原语、8 个设计 Token 类别、深色模式，以及对你的技术栈零意见。干净、可组合的 React 组件，到处都能用——包括启动器。",
      requirements: "免费且开源  ·  React  ·  TypeScript",
      featuresHeading: "原语。Token。切换。",
      ctaLabel: "查看源码",
      features: [
        {
          title: "70 个生产就绪的原语",
          body: "表单、布局、数据、反馈——你需要的每个原语，不需要的一个不留。输入框、表格、日历、走势图、树视图、颜色选择器、对话框等等。",
        },
        {
          title: "一套 Token 系统，跨所有平台",
          body: "颜色、字体、间距、圆角、高度、动画和玻璃拟态——全部定义为 TypeScript token，可导出到 CSS 变量或 React Native 样式。",
        },
        {
          title: "开箱即用的明暗模式",
          body: "每个组件都自动尊重颜色模式——系统偏好检测、用 localStorage 的手动切换，以及在两种模式下都适配的玻璃拟态。",
        },
      ],
      showcase: [
        {
          badge: "70 个原语",
          title: "你需要的每个组件，不需要的一个不留",
          description:
            "从按钮、输入框到树视图、颜色选择器和走势图——70 个生产就绪的原语，用 TypeScript 构建，除 React 外零外部依赖。",
          bullets: [
            "表单：input、textarea、select、checkbox、radio、pin-input、number-input、color-picker",
            "布局：grid、stack、container、center、spacer、separator",
            "数据：table、calendar、timeline、carousel、sparkline、tree-view",
            "反馈：toast、alert、dialog、sheet、popover、skeleton、spinner、progress",
          ],
          imageAlt: "Base 原语组件库",
        },
        {
          badge: "设计 Token",
          title: "一套 Token 系统，跨所有平台",
          description:
            "颜色、字体、间距、圆角、高度、动画和玻璃拟态——全部定义为 TypeScript token，可导出到 CSS 变量或 React Native 样式。",
          bullets: [
            "带语义别名的单色优先调色板",
            "玻璃拟态 Token 用于磨砂玻璃效果",
            "带流式响应式尺寸的字体比例",
            "导出到 CSS 自定义属性或 React Native StyleSheet",
          ],
          imageAlt: "Base 设计 Token",
        },
        {
          badge: "深色模式",
          title: "明暗模式，从第一天就内置",
          description:
            "每个组件开箱即用地尊重颜色模式。无需额外设置，无需易忘的主题包装——就是能配合系统偏好或手动切换工作。",
          bullets: [
            "自动系统偏好检测",
            "带 localStorage 持久化的手动切换",
            "70 个原语全部在两种模式下测试",
            "玻璃拟态效果适配颜色模式",
          ],
          imageAlt: "Base 深色模式支持",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "隐私政策",
    termsTitle: "服务条款",
    eulaTitle: "最终用户许可协议",
    tapTagline: "Tap — SSH 命令中继",
    effectiveDate: "生效日期：2026 年 4 月 14 日",
    navPrivacy: "隐私政策",
    navTerms: "服务条款",
    navEula: "EULA",

    privacy: {
      intro:
        'Matt\'s Software（"我们"）运营 Tap，这是一款面向 Apple Watch、iPhone 和 Mac 的 SSH 命令中继应用。本隐私政策说明我们收集哪些信息、如何使用，以及你对自己数据的权利。Matt\'s Software 总部位于美国。',
      collectHeading: "我们收集的信息",
      accountHeading: "账户信息",
      accountBody:
        "当你使用 Apple Sign-In 登录时，我们会收到你的 Apple ID 邮箱地址（或 Apple 代表你提供的私密中继地址）。这是我们收集的唯一可识别个人身份信息，仅用于与你的中继服务器进行认证。",
      relayHeading: "自托管中继数据",
      relayBody:
        "Tap 将连接元数据、加密 SSH 密钥、命令历史和执行结果存储在你自托管运行的中继服务器上。我们无法访问这些数据。因为你控制中继，所以你控制自己的数据。",
      useHeading: "我们如何使用信息",
      useBody:
        "你的 Apple ID 邮箱地址专门用于认证你的账户。我们不将其用于营销、通讯或其他目的。我们不将其与其他来源的数据合并。",
      storageHeading: "数据存储与安全",
      storageBody1:
        "存储在你中继上的 SSH 密钥静态使用 AES-256-GCM 加密。所有中继数据——连接元数据、命令日志和密钥——完全驻留在你自己的基础设施上。Matt's Software 不运营存储你数据的中心服务器。",
      storageBody2:
        "由于中继是自托管的，你数据的安全最终取决于你如何配置和维护你的服务器。我们建议保持你的中继软件最新，并遵循标准的服务器加固实践。",
      thirdPartyHeading: "第三方服务",
      thirdPartyBody:
        "Tap 使用 Apple Sign-In 进行认证。Apple 的隐私政策约束 Apple 在登录过程中收集的数据。除 Apple Sign-In 外，Tap 不与任何第三方分析、广告或追踪服务集成。",
      notDoHeading: "我们不做的事",
      notDoList: [
        "我们不运行任何形式的分析或追踪",
        "我们不与第三方共享数据",
        "我们不投放广告",
        "我们不收集使用遥测",
        "我们无法访问你的中继服务器或其数据",
        "我们不出售或出租你的个人信息",
      ],
      retentionHeading: "数据保留与删除",
      retentionBody:
        "你可以随时在 Tap 应用内删除你的账户及所有相关数据。由于数据存储在你的中继上，你也可以随时直接从你的服务器上移除。",
      childrenHeading: "儿童隐私",
      childrenBody:
        "Tap 不面向 13 岁以下儿童。我们不会在知情的情况下收集 13 岁以下儿童的个人信息。若你认为儿童向我们提供了个人信息，请联系我们，我们会采取措施删除。",
      changesHeading: "本政策的变更",
      changesBody:
        "我们可能不时更新本隐私政策。更新时，我们会在本页发布修订版本并附上新的生效日期。变更发布后你继续使用 Tap 即构成对更新政策的接受。",
      contactHeading: "联系我们",
      contactBody: "如果你对本隐私政策有疑问或顾虑，请通过以下方式联系我们：",
    },

    terms: {
      acceptHeading: "条款的接受",
      acceptBody:
        '下载、安装或使用 Tap（"本应用"）即表示你同意受本服务条款（"条款"）的约束。如果你不同意这些条款，请勿使用本应用。这些条款构成你与位于美国的 Matt\'s Software（"我们"）之间的法律协议。',
      descriptionHeading: "服务说明",
      descriptionBody:
        "Tap 是面向 Apple Watch、iPhone 和 Mac 的 SSH 命令中继应用。它允许你通过你自托管运行的中继服务器在远程服务器上执行命令。Matt's Software 提供客户端应用和中继软件。我们不运营、不管理你的中继服务器或你连接到的服务器，也无法访问它们。",
      accountsHeading: "用户账户",
      accountsBody:
        "Tap 使用 Apple Sign-In 进行认证。每人可维护一个账户。你负责维护账户的安全，并对账户下发生的所有活动负责。你不得分享账户凭证或允许他人访问你的账户。",
      responsibilitiesHeading: "用户责任",
      serversHeading: "你的服务器",
      serversBody:
        "你对通过 Tap 连接的服务器负责。这包括确保你有适当的授权访问这些服务器，且你的使用符合所有适用的政策和法律。",
      commandsHeading: "你的命令",
      commandsBody:
        "Tap 是执行你提供命令的工具。你接受对通过 Tap 运行的每条命令及其后果的全部责任。Matt's Software 不对通过本应用执行的命令的结果承担责任。",
      relayHeading: "你的中继",
      relayBody:
        "Tap 中继服务器自托管在你的基础设施上。你负责保护你的中继、保持其更新，并管理对它的访问。Matt's Software 不运营、不监控、不维护你的中继。",
      acceptableHeading: "可接受的使用",
      acceptableIntro: "你同意不将 Tap 用于：",
      acceptableList: [
        "未经授权访问任何系统、网络或数据",
        "违反任何适用的地方、州、国家或国际法律",
        "传输恶意软件、病毒或其他有害代码",
        "干扰或破坏任何系统的完整性或性能",
        "骚扰、虐待或伤害他人或实体",
        "从事任何欺诈、欺骗或误导性活动",
      ],
      ipHeading: "知识产权",
      ipBody:
        "Tap 应用，包括其设计、代码和文档，归 Matt's Software 所有，并受适用的知识产权法保护。你对 Tap 的使用并不授予你对应用中任何知识产权的所有权。你存储在中继服务器上的数据、配置和内容仍归你所有。",
      warrantyHeading: "保证免责声明",
      warrantyBody:
        'Tap 按"原样"和"可用"提供，不提供任何明示或暗示的保证，包括但不限于适销性、特定用途适用性和不侵权的保证。Matt\'s Software 不保证应用将不中断、无错误、安全或在任何特定时间可用。',
      liabilityHeading: "责任限制",
      liabilityBody:
        "在适用法律允许的最大范围内，Matt's Software 不对因你使用 Tap 而产生的任何间接、附带、特殊、后果性或惩罚性损害，或任何数据、利润、收入或业务机会的损失负责，无论责任理论如何。",
      terminationHeading: "终止",
      terminationBody:
        "你可以随时删除你的账户并停止使用 Tap。Matt's Software 保留随时（无论是否事先通知）暂停或终止你对应用的访问的权利，原因是我们认为违反本条款或对其他用户或我们有害的行为。",
      governingHeading: "适用法律",
      governingBody:
        "本条款受美国法律管辖并据其解释，不考虑冲突法原则。因本条款或你使用 Tap 而引起的任何争议应由美国法院解决。",
      changesHeading: "本条款的变更",
      changesBody:
        "我们可能不时更新本条款。更新时，我们会在本页发布修订版本并附上新的生效日期。变更发布后你继续使用 Tap 即构成对更新条款的接受。",
      contactHeading: "联系",
      contactBody: "如果你对本条款有疑问，请通过以下方式联系我们：",
    },

    eula: {
      intro:
        '本最终用户许可协议（"协议"）是你与位于美国的 Matt\'s Software（"我们"）之间关于使用 Tap（"本应用"）的法律协议。安装或使用本应用即表示你同意受本协议约束。',
      licensedHeading: "授权应用",
      licensedBody:
        "Tap 是面向 Apple Watch、iPhone 和 Mac 的 SSH 命令中继应用，由 Matt's Software 开发和发布。本应用允许你通过你自托管的中继服务器在远程服务器上执行命令。",
      scopeHeading: "许可范围",
      scopeBody:
        "Matt's Software 授予你有限的、非独占的、不可转让的、可撤销的许可，允许你在你拥有或控制的设备上下载、安装和使用本应用，符合本协议和 Apple 媒体服务条款与条件。",
      scopeIntro: "本许可不允许你：",
      scopeList: [
        "向第三方分发、再许可、出租、租用或借出本应用",
        "对本应用进行逆向工程、反编译、反汇编或尝试派生其源代码",
        "修改、改编、翻译或基于本应用创建衍生作品",
        "移除、变更或遮蔽本应用中的任何版权、商标或其他所有权声明",
        "将本应用用于任何非法或本协议禁止的目的",
      ],
      relayHeading: "自托管中继",
      relayBody:
        "Tap 连接到你在自有基础设施上托管和运营的中继服务器。Matt's Software 不提供、不管理、不维护你的中继服务器。我们不对因你中继服务器或你通过本应用连接的远程服务器的配置、运营、安全或可用性引起的任何问题负责。",
      ownershipHeading: "所有权",
      ownershipBody:
        "本应用及所有相关的知识产权归并将继续归 Matt's Software 所有。本协议不授予你对本应用的任何所有权利益。你存储在中继服务器上的数据、配置和内容仍归你所有。",
      terminationHeading: "终止",
      terminationBody:
        "本许可在终止前有效。如果你未能遵守本协议的任何条款，你在本协议下的权利将自动终止，无需通知。终止时，你必须停止使用本应用并从你的设备中删除所有副本。Matt's Software 也可以随时以任何理由终止本许可。",
      warrantyHeading: "保证免责声明",
      warrantyBody:
        '本应用按"原样"和"可用"提供，不提供任何明示或暗示的保证，包括但不限于适销性、特定用途适用性和不侵权的保证。Matt\'s Software 不保证本应用将不中断、无错误或无有害成分。',
      liabilityHeading: "责任限制",
      liabilityBody:
        "在适用法律允许的最大范围内，Matt's Software 不对因你使用本应用而产生的任何间接、附带、特殊、后果性或惩罚性损害，或任何数据、利润或收入的损失负责，无论责任理论如何。",
      governingHeading: "适用法律",
      governingBody:
        "本协议受美国法律管辖并据其解释，不考虑冲突法原则。",
      contactHeading: "联系",
      contactBody: "如果你对本协议有疑问，请通过以下方式联系我们：",
    },
  },

  notFound: {
    altText: "一条戴着探险帽的红色带蛇坐在问号形状的石头上，四周是空白路标",
    title: "这个页面溜走了。",
    sub: "路标是空白的。蛇也不知道。我们带你回到一个真实存在的地方。",
    backToSuite: "回到全集",
    rummageGithub: "或者去 GitHub 翻翻",
  },
};
