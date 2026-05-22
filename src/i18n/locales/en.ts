/// English — the canonical base. Every other locale file must mirror
/// this shape (TypeScript enforces it via `Translation` in ../types.ts).
/// If you add a key here, add it everywhere.

import type { Translation } from "../types";

export const en: Translation = {
  meta: {
    siteTitle: "Matt's Software — Tiny apps that earn their keep",
    siteDescription:
      "A small shop of tiny, free, open-source apps. One launcher installs them all and keeps them up to date.",
    htmlLang: "en",
    direction: "ltr",
  },

  langSelector: {
    label: "Language",
    selectLanguage: "Select language",
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
    apps: "Apps",
    appsAllLabel: "All apps",
    launcher: "Launcher",
    githubAria: "GitHub",
    suiteFooter: "{count} apps, one launcher.",
    getLauncher: "Get the launcher",
    tipLabel: "Tip",
    tipTitle: "Send a tip",
    tipCopy: "Copy",
    tipCopied: "Copied",
  },

  footer: {
    mascotAlt:
      "A white cat curled around a blueprint and a mug of coffee — somehow asleep through the music",
    line: "Built on espresso and loud music.",
    sub: "Matt's Software is a one-person shop. Every app is signed, notarized, and free.",
    github: "GitHub",
    allApps: "All apps",
    contact: "Contact",
  },

  channels: {
    appstore: "App Store",
    library: "Library",
    source: "Source",
    download: "Download",
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
    all: "All",
    developerTools: "Developer Tools",
    privacySecurity: "Privacy & Security",
    utilities: "Utilities",
    learning: "Learning",
    design: "Design",
  },

  home: {
    eyebrow: "MATT'S SOFTWARE",
    title: "Tiny apps that earn their keep.",
    sub: "A small, curated shop of {count}+ tiny, free apps. One launcher installs them all and keeps them up to date — or grab any one on its own.",
    downloadLauncher: "Download the launcher",
    browseSuite: "Browse the suite",
    metaLine: "Free · Open source · macOS today, more soon",
    brandName: "Matt's Software",
    brandSub: "Every app I've built, in one place",
    searchPlaceholder: "Search apps…",
    searchAria: "Search apps",
    categoriesAria: "Categories",
    noResults: "No apps match “{query}”.",
    view: "View",
  },

  appPage: {
    downloadBtn: "Download",
    viewGithub: "View on GitHub",
    openInBrowser: "Open in browser",
    featuresHeadingDefault: "What it does",
    suiteEyebrow: "The suite",
    suiteHeading: "More from the shop",
    suiteSub: "Each one solves exactly one thing well — install just what you need.",
    bottomAddToMenuBar: "Add {name} to your menu bar.",
    bottomGet: "Get {name}.",
  },

  featureShowcase: {
    screenshotComingSoon: "Screenshot coming soon",
  },

  apps: {
    espresso: {
      tagline: "Refuse to sleep.",
      description:
        "Keep-awake utility for the system tray: timed sessions or indefinite mode, sub-pixel mouse-jiggle to defeat idle detection, and a global panic hotkey to drop everything instantly. Lid-closed override and lifetime uptime stats included.",
      catalogTagline: "Your computer wants to sleep. Espresso disagrees.",
      catalogDescription:
        "Keep-awake utility that prevents your computer from sleeping. Timed sessions, mouse-jiggle simulation, lid-closed override, and a panic hotkey for instant deactivation.",
      requirements: "macOS  ·  Windows  ·  Linux  ·  Free & Open Source",
      featuresHeading: "Stay awake. Stay active. Stay employed.",
      features: [
        {
          title: "Keep awake, on a timer or forever",
          body: "Preset timers from 5 minutes to 8 hours, or indefinite mode for when you mean business. Keep the display on or let it sleep while the system stays awake.",
        },
        {
          title: "Fool your status indicator",
          body: "Sub-pixel mouse jiggle — invisible but enough to defeat idle detection in Slack, Teams, Zoom, and any app that watches for inactivity.",
        },
        {
          title: "Panic button included",
          body: "Ctrl+Shift+Escape instantly kills everything: display wakes, jiggle stops, timers cancel. Lid-closed override for laptops. Lifetime stats track your total uptime.",
        },
      ],
      showcase: [
        {
          badge: "Stay awake",
          title: "Your computer wants to sleep. Espresso disagrees.",
          description:
            "A tiny shot stationed in your menu bar that blocks the sleep timer, keeps the display on (or doesn't — your call), and gently jiggles the mouse sub-pixel-by-sub-pixel so idle detectors stay fooled.",
          bullets: [
            "Block system sleep, display sleep, or both — toggle per session",
            "Sub-pixel mouse jiggle defeats Slack, Teams, Zoom idle detection",
            "Lid-closed override keeps things running with the laptop shut",
            "Lifetime uptime stats track how much sleep you've stolen",
          ],
          imageAlt: "Cute 3D espresso cup guarding a drowsy laptop from a sleep Z",
        },
        {
          badge: "On the clock",
          title: "Sessions on a timer, or until you tap out",
          description:
            "Pick a preset (5 min, 30 min, 2 hr, 8 hr) or run indefinite. The global panic hotkey kills everything the instant you need to drop it — display sleeps, jiggle stops, timers cancel.",
          bullets: [
            "Preset timers from 5 minutes to 8 hours, plus indefinite mode",
            "Ctrl+Shift+Escape global panic — everything off, instantly",
            "Session countdown lives in the menu bar so you always know",
            "Auto-end on lock or lid close (configurable)",
          ],
          imageAlt: "Cute 3D chrome hourglass with warm orange sand and a red panic button beside it",
        },
      ],
    },

    stickykeys: {
      tagline: "Lock them keys.",
      description:
        "A tiny menu-bar app. Click to lock the keyboard, wipe down the keys with a microfiber cloth without launching apps, sending emails, or quitting your work, then click the overlay to unlock. A frosted full-screen overlay covers every monitor, the mouse stays live, and a safety auto-unlock means you can never get trapped.",
      catalogTagline: "Lock the keyboard so a cleaning cloth can't fire shortcuts.",
      catalogDescription:
        "A menu-bar keyboard lock for cleaning. Click to swallow every key, modifier, and media key system-wide; a frosted full-screen overlay covers each display, the mouse stays live to unlock, and a safety auto-unlock means you can never get trapped.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed & notarized",
      featuresHeading: "Wipe the keys. Run nothing.",
      features: [
        {
          title: "Lock everything in one click",
          body: "An active keyboard tap swallows every key, modifier, and media key system-wide — wipe the keys without firing a single shortcut.",
        },
        {
          title: "Frosted full-screen overlay",
          body: "A clear, untinted blur covers every display so you can see at a glance the keyboard is locked, with a live auto-unlock countdown.",
        },
        {
          title: "Mouse-only unlock, never trapped",
          body: "Unlock from the overlay button or the menu-bar icon, and a safety auto-unlock fires no matter what so you can never get stuck.",
        },
      ],
      showcase: [
        {
          badge: "Lock down",
          title: "One click, the keyboard goes silent",
          description:
            "A system-wide tap swallows every key, modifier, and media key — so a cleaning cloth can't fire a shortcut, send an email, or quit Logic mid-take. A frosted overlay covers every display so it's obvious at a glance.",
          bullets: [
            "System-wide keyboard tap — every key, every modifier, every media key",
            "Frosted overlay across every monitor with a live unlock countdown",
            "Mouse stays alive so you can unlock the moment you're done",
            "Lives in the menu bar — one click in, one click out",
          ],
          imageAlt: "Cute 3D miniature keyboard under a frosted lavender glass dome with a padlock charm",
        },
        {
          badge: "Safe exit",
          title: "You can't get trapped",
          description:
            "A safety auto-unlock fires no matter what — even if the overlay misfires, even if the menu bar hangs. The unlock surface listens to the mouse, the menu bar, and a hard timer.",
          bullets: [
            "Auto-unlock timer guarantees you're never stuck",
            "Three independent unlock paths: overlay button, menu bar, timer",
            "Configurable max lock duration (1 min default)",
            "Designed paranoid — fails open, never closed",
          ],
          imageAlt: "Cute 3D chrome timer dial with a lavender pointer and a floating key over an unlocked padlock",
        },
      ],
    },

    stats: {
      tagline: "Every signal. One glance.",
      description:
        "A native menu-bar system monitor. Live CPU per-core, memory pressure, disk read/write, network up/down, and sensor readings — plus optional compact widgets that ride along in the status bar and history sparklines for every signal, so you can spot a spike without opening Activity Monitor.",
      catalogTagline: "Every system signal at a glance — in your menu bar.",
      catalogDescription:
        "A native menu-bar system monitor. Live CPU per-core, memory pressure, disk read/write, network up/down, and sensor readings — plus optional compact widgets that ride along in the status bar and history sparklines for every signal, so you can spot a spike without opening Activity Monitor.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed & notarized",
      featuresHeading: "See the whole machine. Without the whole window.",
      features: [
        {
          title: "Every system signal at a glance",
          body: "CPU per-core, memory pressure (with the wired/compressed/app/cache breakdown), disk read/write, network up/down, sensors, and a live top-process list — all in one compact menu-bar panel.",
        },
        {
          title: "Compact menu-bar widgets",
          body: "Choose which numbers (or a tiny live waveform) ride along in your status bar. Stays glanceable while you're working, never in the way.",
        },
        {
          title: "Sparklines, not spreadsheets",
          body: "Recent history is graphed for every signal, so a spike or a runaway process is obvious without trawling Activity Monitor.",
        },
      ],
      showcase: [
        {
          badge: "All signals",
          title: "Every gauge your machine has, in one glance",
          description:
            "CPU per-core, memory pressure (with the wired / compressed / app / cache breakdown), disk read & write, network up & down, sensor readings — Stats reads every signal macOS exposes and pins them all to your menu bar.",
          bullets: [
            "Per-core CPU usage and per-process top list",
            "Memory pressure with the full residency breakdown",
            "Disk I/O, network throughput, and sensor temperatures",
            "Pin any subset as compact menu-bar widgets",
          ],
          imageAlt: "Cute 3D cluster of floating chrome-and-pink gauges and a small chip sensor",
        },
        {
          badge: "Looking back",
          title: "Sparklines, not spreadsheets",
          description:
            "Recent history is graphed for every signal, so a runaway process or a thermal spike is obvious at a glance — no need to crack open Activity Monitor and wait for it to repeat.",
          bullets: [
            "Live sparkline history for every gauge",
            "Configurable history window — last minute, hour, or day",
            "Spot a spike retroactively instead of chasing it live",
            "Tap a sparkline to see the top process at that moment",
          ],
          imageAlt: "Cute 3D glossy pink sparkline ribbon with a chrome marker ball at its peak",
        },
      ],
    },

    port: {
      tagline: "Every port, one click.",
      description:
        "A tiny native menu-bar port manager. See what's listening, kill or pause the process, forward or NAT-PMP-map it, and watch active connections on a live map — click one to inspect it in Blip.",
      catalogTagline: "Every open port on your Mac, one click away.",
      catalogDescription:
        "A native menu-bar port manager: see what's listening, kill or pause the process, forward or NAT-PMP-map it, and watch active connections on a live map — click one to inspect it in Blip.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed",
      featuresHeading: "See it. Kill it. Forward it.",
      features: [
        {
          title: "Every open port, live",
          body: "A menu-bar list of every listening TCP/UDP port with the process and PID behind it, refreshing every second. Kill it, pause it (SIGSTOP/SIGCONT), or leave it.",
        },
        {
          title: "Forward & map",
          body: "Proxy any local port to another with a built-in TCP forwarder, expose it across your LAN, and punch it through your router with native NAT-PMP — no config.",
        },
        {
          title: "Connections on a map → Blip",
          body: "Active connections plotted on a live map by where they actually go. Click any endpoint to open it in Blip for deep inspection (or grab Blip if you don't have it).",
        },
      ],
      showcase: [
        {
          badge: "Harbor",
          title: "Every open port, one click away",
          description:
            "A live menu-bar manifest of every listening TCP/UDP port — the process behind it, the PID, the protocol. Kill it, pause it (SIGSTOP/SIGCONT), or just keep an eye on it.",
          bullets: [
            "Refreshes every second — what's listening, right now",
            "Kill, pause, or resume the process without leaving the menu bar",
            "Known-ports library names common services on sight",
            "Notifies you the moment a new port opens",
          ],
          imageAlt: "Cute 3D miniature harbor with tugboat, barge, and sailboat moored at a small dock",
        },
        {
          badge: "Signal",
          title: "Forward, expose, or punch through",
          description:
            "Built-in TCP forwarder proxies any local port to another. Native NAT-PMP maps it through your router automatically. Watch active connections on a live map — click an endpoint to inspect it in Blip.",
          bullets: [
            "TCP forwarder built on Network.framework — zero dependencies",
            "Native NAT-PMP (RFC 6886) router mapping with no config",
            "Expose a port across your LAN with one toggle",
            "Active connections plotted on a map; hand off to Blip in one click",
          ],
          imageAlt: "Cute 3D miniature lighthouse signaling a small blue data packet with its beam",
        },
      ],
    },

    alfred: {
      tagline: "Reclaim the disk.",
      description:
        "A native menu-bar valet that finds safe-to-delete developer cruft — node_modules, Cargo target/, build & test caches, Xcode DerivedData, package-manager caches — sizes it biggest-first, and moves it to the Trash. Recoverable in one click.",
      catalogTagline: "Reclaim the disk space dev cruft is hoarding.",
      catalogDescription:
        "A native menu-bar valet that finds safe-to-delete developer cruft — node_modules, Cargo target/, build & test caches, Xcode DerivedData, package-manager caches — sizes it biggest-first, and moves it to the Trash (recoverable).",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed",
      featuresHeading: "Find it. Trash it. Get the disk back.",
      features: [
        {
          title: "Find the cruft, biggest first",
          body: "node_modules, Cargo target/, build & test caches, Xcode DerivedData, Homebrew / Yarn / npm caches — scanned, sized, and listed biggest-first so you know exactly what's hoarding your disk.",
        },
        {
          title: "Safe to delete, by design",
          body: "Alfred only touches regenerable folders — caches, build artifacts, dependency trees — never source. Everything moves to the Trash, recoverable in one click if you change your mind.",
        },
        {
          title: "From the menu bar",
          body: "Lives as a tiny menu-bar app. Scan whenever you like, glance at how much you've reclaimed, or leave it as a one-off cleanup tool for the next time the SSD warning pops.",
        },
      ],
      showcase: [
        {
          badge: "At your service",
          title: "Biggest-first, polite, ruthless",
          description:
            "A menu-bar valet who knows exactly which folders are safe to part with. node_modules, Cargo target/, Xcode DerivedData, Homebrew caches, Yarn caches — Alfred finds them, sizes them, and presents them on a silver tray.",
          bullets: [
            "Scans every common dev-cruft folder across your projects",
            "Sized biggest-first so the wins are obvious",
            "Skip rules per-folder so your favorites stay untouched",
            "Lives in the menu bar — scan when you feel like it",
          ],
          imageAlt: "Cute 3D miniature valet with a green sash presenting a silver tray of dev-cruft folders",
        },
        {
          badge: "Safe by design",
          title: "Reclaim the gigabytes, keep the source",
          description:
            "Alfred only touches regenerable folders — caches, build artifacts, dependency trees — never your source code. Everything moves to the Trash, so a wrong call is one click away from undone.",
          bullets: [
            "Touches only regenerable folders — source is always safe",
            "Files go to the Trash, not /dev/null",
            "One click restores anything you change your mind about",
            "Running total shows how much you've reclaimed",
          ],
          imageAlt: "Cute 3D SSD with a green LED ring and small junk packages floating away",
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
    },

    blip: {
      tagline: "See what's leaving.",
      description:
        "See exactly where your data goes, who's collecting it, and shut them down — all on a very pretty 3D map.",
      catalogTagline: "Your computer has been talking behind your back.",
      catalogDescription:
        "Real-time network monitoring with a 3D connection map, smart firewall, DNS blocking, submarine-cable routing, and bandwidth analytics. See exactly where your data goes.",
      requirements: "Free & Open Source",
      featuresHeading: "A map. A bouncer. A wall.",
      features: [
        {
          title: "Live 3D map of every connection",
          body: "Every app's traffic plotted on a globe, arcs colored by service. 200 connections, 700+ real submarine cables, particles showing direction. The internet you've been ignoring, made visible.",
        },
        {
          title: "Bouncer for your bandwidth",
          body: "Every app needs permission, no exceptions. Strict mode blocks everything until you say otherwise. Per-app bandwidth bars expose the data hogs. One-click kill switch.",
        },
        {
          title: "200k trackers blocked before they connect",
          body: "DNS blocklists nuke ad and tracker domains on sight; real-time query log surfaces every lookup; tracker leaderboard names the worst offenders.",
        },
      ],
      showcase: [
        {
          badge: "Network Map",
          title: "200 connections. Zero of them asked permission.",
          description:
            "Every app on your computer is quietly phoning home. Blip puts them all on a 3D map so you can watch the chaos unfold in real time.",
          bullets: [
            "Connections route through actual submarine cables across oceans",
            "Service-colored arcs — instantly spot Google, Discord, Apple, and hundreds more",
            "Animated particles show data flowing in both directions",
            "Hop-by-hop traceroute shows the actual path your packets take",
          ],
          imageAlt: "Blip 3D network map showing connection arcs",
        },
        {
          badge: "Firewall",
          title: "Bouncer for your bandwidth",
          description:
            "Every app needs permission. No exceptions, no excuses. Strict mode blocks everything until you say otherwise. Because your apps have been way too comfortable.",
          bullets: [
            "Strict mode: guilty until proven innocent",
            "Per-app bandwidth bars expose the data hogs",
            "Scoped rules — allow port 443 but block everything else",
            "Kill switch: one click, zero internet, instant silence",
          ],
          imageAlt: "Blip firewall showing app-level network access controls",
        },
        {
          badge: "Guard",
          title: "200,000 trackers blocked before they even connect",
          description:
            "Your DNS is a snitch. Every app, every ad SDK, every analytics ping — Guard catches them at the door. See who's trying to phone home and shut them down.",
          bullets: [
            "DNS blocklists nuke 200k+ tracker and ad domains on sight",
            "Real-time query log — watch every lookup happen live",
            "Tracker leaderboard shows the most persistent offenders",
            "Layered with the firewall — two walls, zero mercy",
          ],
          imageAlt: "Blip Guard showing DNS blocking and tracker detection",
        },
        {
          badge: "Visualization",
          title: "The internet is just wet cables",
          description:
            "Your YouTube video crossed three oceans on a cable thinner than a garden hose. Blip shows you exactly which one — 700+ real submarine cable routes, glowing when your data flows through them.",
          bullets: [
            "Real submarine cable routes from TeleGeography mapped on the ocean floor",
            "Active cables light up when your traffic flows through them",
            "Marching dash particles show upload vs download direction",
            "Ping-based speed — fast connections flow fast, laggy ones crawl",
          ],
          imageAlt: "Blip visualization showing submarine cables and data flow",
        },
        {
          badge: "Traceroute",
          title: "14 hops through 6 cities to load one webpage",
          description:
            "Every packet bounces through a dozen routers before it arrives. Blip traces the route — hop by hop, city by city, cable by cable — and paints it on the map.",
          bullets: [
            "Hop-by-hop markers overlaid directly on the 3D map",
            "Latency colored: green is fast, amber is okay, red is pain",
            "Routes through real submarine cables across ocean crossings",
            "Automatic traceroute for every active connection",
          ],
          imageAlt: "Blip traceroute showing hop-by-hop network path",
        },
      ],
    },

    diane: {
      tagline: "Press record. Talk.",
      description:
        "A retro voice recorder with live speech-to-text transcription, a cassette-tape library, and dictation mode. Inspired by Special Agent Dale Cooper's tape memos.",
      catalogTagline: "I'm holding in my hand a small tape recorder.",
      catalogDescription:
        "A skeuomorphic retro voice recorder with live speech-to-text transcription, a cassette-tape library, and dictation mode. Inspired by Special Agent Dale Cooper.",
      requirements: "Free & Open Source",
      featuresHeading: "Press record. Talk. Walk.",
      features: [
        {
          title: "A skeuomorphic cassette recorder",
          body: "A floating sidebar with a photorealistic recorder: animated reels, VU meters, and physical button controls. Press record and talk — global hotkeys let you record from any app.",
        },
        {
          title: "Live transcription, on-device",
          body: "Apple's SFSpeechRecognizer transcribes as you speak — no cloud, no API keys. Click any word in the transcript to jump to that moment in the recording.",
        },
        {
          title: "A shoebox full of cassettes",
          body: "Every recording is saved as a colored cassette tape with its audio and transcript. Scroll through your collection, load any one, play back anytime.",
        },
      ],
      showcase: [
        {
          badge: "Voice Recorder",
          title: "A skeuomorphic cassette recorder for your desktop",
          description:
            "A floating sidebar with a photorealistic cassette recorder. Press record and talk. Your voice is captured, transcribed live, and saved to a cassette tape you can browse, rewind, and play back.",
          bullets: [
            "Photorealistic cassette recorder with animated reels and VU meters",
            "Record, play, rewind, and fast-forward with physical button controls",
            "Tape spools visually track playback position in real time",
            "Global hotkeys let you record from any app without switching windows",
          ],
          imageAlt: "Diane cassette recorder interface",
        },
        {
          badge: "Live Transcription",
          title: "Your words, typed as you speak them",
          description:
            "Diane transcribes your speech in real time using Apple's on-device speech recognition. No cloud, no API keys, no latency. Just talk and watch the words appear.",
          bullets: [
            "Live speech-to-text powered by macOS SFSpeechRecognizer",
            "Fully on-device processing with zero data leaving your machine",
            "Click any word in the transcript to jump to that moment in the recording",
            "Dictation mode types your words directly into any focused text field",
          ],
          imageAlt: "Diane live transcription overlay",
        },
        {
          badge: "Tape Library",
          title: "A shoebox full of cassette tapes",
          description:
            "Every recording is saved as a cassette tape with its own color variant. Scroll through your collection, click to load, and play back anytime.",
          bullets: [
            "10 unique cassette tape color variants assigned randomly",
            "Tapes persist across sessions with full audio and transcript",
            "Arrow keys cycle through your tape collection",
            "Word count displayed on each tape label",
          ],
          imageAlt: "Diane cassette tape library",
        },
      ],
    },

    peephole: {
      tagline: "See who's watching.",
      description:
        "A menu-bar sentinel for your camera and microphone. Peephole shows which apps are using them right now, keeps a history of access, and notifies you when something turns them on — no special entitlements, no kernel extensions.",
      catalogTagline: "See who's watching.",
      catalogDescription:
        "A menu-bar sentinel for your camera and microphone: which apps are using them right now, a history of access, and a notification the moment something turns them on.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed",
      featuresHeading: "Nothing records without you knowing.",
      features: [
        {
          title: "Live camera & mic status",
          body: "The menu-bar glyph flips the instant the camera or microphone goes active, so you always know when something is recording.",
        },
        {
          title: "Access history",
          body: "A running log of which app used the camera or mic and when — scroll back through the day's activity.",
        },
        {
          title: "Notifications",
          body: "Get alerted the moment an app starts using the camera or microphone. No special entitlements, no kernel extensions.",
        },
      ],
      showcase: [
        {
          badge: "Eyes & ears",
          title: "Know the second something starts watching",
          description:
            "Peephole's menu-bar glyph flips the instant the camera or microphone goes hot. Tap it and you see exactly which app turned it on — and you decide whether that was supposed to happen.",
          bullets: [
            "Live status for both camera and microphone, always visible",
            "Glyph flips the instant access begins or ends",
            "Tap to see the responsible app and its open device",
            "No special entitlements, no kernel extensions — pure user-space",
          ],
          imageAlt: "Cute 3D chrome webcam with a glowing teal slit-eye lens and a chrome microphone beside it",
        },
        {
          badge: "Receipts",
          title: "A running log of every access, with a notification when it matters",
          description:
            "Scroll back through the day's camera and mic activity — who used them, when, and for how long. Optional notifications fire the moment access begins, so a surprise activation never goes unnoticed.",
          bullets: [
            "Per-app history with timestamps and duration",
            "Notification on every new access (toggle per device)",
            "Filter by app, device, or time window",
            "History persists across reboots — nothing slips by",
          ],
          imageAlt: "Cute 3D chrome peephole disc with a glowing teal iris and a stack of history cards behind it",
        },
      ],
    },

    quarantine: {
      tagline: "Vet every download.",
      description:
        "A menu-bar inspector for ~/Downloads. For every new file it surfaces the quarantine origin URL, Gatekeeper/codesign status, SHA-256, and an optional VirusTotal verdict — then notifies you so you can vet it before you open it.",
      catalogTagline: "Trust, but verify every download.",
      catalogDescription:
        "A menu-bar inspector for ~/Downloads: quarantine origin, Gatekeeper/codesign status, SHA-256, and an optional VirusTotal verdict for every new file, with a notification to vet it.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed",
      featuresHeading: "Know what just landed in Downloads.",
      features: [
        {
          title: "Origin & quarantine",
          body: "See exactly where a file came from via its com.apple.quarantine attribute — the agent that downloaded it and the source URL.",
        },
        {
          title: "Gatekeeper & hash",
          body: "Codesign / Gatekeeper assessment plus a SHA-256 for every new file that lands in ~/Downloads.",
        },
        {
          title: "Optional VirusTotal",
          body: "Add an API key and Quarantine surfaces a reputation verdict inline, so you can vet a download before you ever open it.",
        },
      ],
      showcase: [
        {
          badge: "Holding chamber",
          title: "Every new download, isolated until you say otherwise",
          description:
            "The moment a file lands in ~/Downloads, Quarantine pulls it onto the inspection table. You see exactly where it came from — agent, source URL, quarantine attribute — before you've double-clicked anything.",
          bullets: [
            "Watches ~/Downloads in real time via FSEvents",
            "Reads com.apple.quarantine: the downloader app and source URL",
            "Notifies you on every new arrival",
            "One row per file — the whole queue at a glance",
          ],
          imageAlt: "Cute 3D glass isolation pod with a suspended package inside and approved/rejected packages outside",
        },
        {
          badge: "Inspect",
          title: "Signature, hash, and a verdict",
          description:
            "For every file, Quarantine surfaces the Gatekeeper assessment, codesign status, and SHA-256. Drop in a VirusTotal API key and the reputation verdict shows up inline — vet it before you ever open it.",
          bullets: [
            "spctl assessment + codesign --display in a single row",
            "SHA-256 computed on landing — copy-paste ready",
            "Optional VirusTotal verdict inline (BYO API key)",
            "Reveal in Finder or trash straight from the menu",
          ],
          imageAlt: "Cute 3D chrome magnifying glass over a cream file folder with a gold seal stamp beside it",
        },
      ],
    },

    sentry: {
      tagline: "Watch the dark corners.",
      description:
        "A menu-bar auditor for macOS persistence. It enumerates LaunchAgents & Daemons, login items, cron, and shell startup files, checks each target's code-signature and notarization, and alerts you the instant a new or changed item appears — then lets you inspect, block, or restore it, right from the menu bar.",
      catalogTagline: "Know the moment something digs in.",
      catalogDescription:
        "A menu-bar auditor for macOS persistence — LaunchAgents, login items, cron, and shell startup files — with signature checks and alerts when something new or changed appears. Inspect, block, or restore any of them.",
      requirements: "macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed",
      featuresHeading: "Watch the places malware hides.",
      features: [
        {
          title: "Every persistence vector",
          body: "LaunchAgents & Daemons, login items, cron, and shell startup files — every place something can dig in to survive a reboot, in one menu-bar list.",
        },
        {
          title: "Signature-aware",
          body: "Each target binary is classified notarized / signed / unsigned via spctl and codesign, so an unsigned launch agent stands out instantly.",
        },
        {
          title: "Alerts on change, block what shouldn't be there",
          body: "Snapshot diffing notifies you the moment a new persistence item appears or changes. Inspect the plist or script, then block it — Sentry unloads it and sets it aside as .sentry-disabled. Reversible in one click.",
        },
      ],
      showcase: [
        {
          badge: "Watchtower",
          title: "Every dark corner, lit",
          description:
            "LaunchAgents & Daemons, login items, cron, and shell rc files — Sentry holds a lantern over every place something can quietly dig in. One menu-bar list, signature-checked, ready to inspect.",
          bullets: [
            "Enumerates every macOS persistence vector in one panel",
            "Each target classified notarized / signed / unsigned via spctl + codesign",
            "Open the plist or script straight from the row",
            "Lives in the menu bar — no window to keep on top",
          ],
          imageAlt: "Cute 3D chrome lantern with a glowing violet crystal and watching-eye charms",
        },
        {
          badge: "Manifest",
          title: "Notice the moment something new appears",
          description:
            "Sentry snapshots your persistence state and diffs it. The instant a new agent, login item, or rc-file change lands, you're notified — with a one-click block that's fully reversible.",
          bullets: [
            "Snapshot diff catches every new or changed persistence item",
            "Block unloads the item and sets it aside as .sentry-disabled",
            "Restore in one click — nothing destructive happens to your system",
            "Notification taps you on the shoulder before the next reboot",
          ],
          imageAlt: "Cute 3D scroll with violet wax seals on a chrome lectern, with a chrome alarm bell",
        },
      ],
    },

    fishbones: {
      tagline: "Turn any technical book into an interactive course.",
      description:
        "Drop in a PDF or EPUB and Libre generates lessons, exercises, and hidden tests. Sixteen languages with one editor, a local AI tutor on your laptop, streak fire that survives weekends, and seventeen themes.",
      catalogTagline: "Turn any technical book into an interactive course.",
      catalogDescription:
        "Drop in a PDF or EPUB and Libre generates lessons, exercises, and hidden tests. Sixteen languages with one editor, a local AI tutor on your laptop, streak fire that survives weekends, and seventeen themes.",
      requirements: "Free & Open Source",
      featuresHeading: "Learn from any book.",
      features: [],
    },

    tap: {
      tagline: "Servers on your wrist.",
      description:
        "Run pre-configured SSH commands on remote servers from your Apple Watch. Tap, confirm, done. Works over cellular, supports Siri, encrypts everything end-to-end.",
      catalogTagline: "The command remote for your infrastructure.",
      catalogDescription:
        "Run pre-configured SSH commands on remote servers from your Apple Watch. Works over cellular, supports Siri, and encrypts everything end-to-end.",
      requirements: "watchOS  ·  iOS  ·  iPadOS  ·  macOS  ·  Free & Open Source",
      featuresHeading: "A remote control for your servers — on your wrist.",
      features: [
        {
          title: "A real watch app, not a notification shim",
          body: "Native watchOS server list with live status dots, pinned commands via the Action Button, confirmation for dangerous commands, and Digital-Crown-scrollable output. Cellular-ready — no phone required.",
        },
        {
          title: "Companion + Mac, in lockstep",
          body: "Full iPhone, iPad, and Mac Catalyst apps. Add servers, configure commands and command suites, view history, manage SSH keys. Everything syncs to the watch in real time.",
        },
        {
          title: "Suites, alerts, Siri, complications",
          body: 'Bundle commands into one-tap suites. 30-second health pings and APNs alerts when something dies. Five watch-face complications. "Hey Siri, Tap restart prod-api."',
        },
      ],
      showcase: [
        {
          badge: "Watch App",
          title: "Restart prod from your wrist.",
          description:
            "Native watchOS app with server list, command execution, and haptic feedback. Tap a command, confirm, done. Real output scrollable with the Digital Crown. Works over cellular — no phone needed.",
          bullets: [
            "Server list with live status dots (green/red)",
            "Pinned commands for quick access via Action Button",
            "Confirmation view for dangerous commands",
            "Truncated output, scrollable with Digital Crown",
          ],
          imageAlt: "Tap watch app showing server commands",
        },
        {
          badge: "Companion",
          title: "Configure everything from your phone.",
          description:
            "Full management app for iPhone, iPad, and Mac Catalyst. Add servers, configure commands, manage SSH keys, view history, and set up command suites. Everything syncs to your watch instantly.",
          bullets: [
            "Dashboard with server health grid and activity feed",
            "Visual command editor with template library",
            "Full interactive SSH terminal via WebView",
            "Generates QR code for instant watch pairing",
          ],
          imageAlt: "Tap companion app dashboard",
        },
        {
          badge: "Suites",
          title: "Run 5 commands with one tap.",
          description:
            "Group related commands into suites for one-tap deployment workflows. Each step shows pass/fail in real time. Configure whether to continue on failure or stop immediately.",
          bullets: [
            "Ordered step execution with progress tracking",
            "Per-step continue-on-fail toggle",
            "Suite progress streamed via WebSocket",
            "Perfect for deploy sequences and health check routines",
          ],
          imageAlt: "Tap suite execution progress on watch",
        },
        {
          badge: "Alerts",
          title: "Know before your users do.",
          description:
            "Background health pings every 30 seconds. When a server goes down, you get an immediate push notification on your watch and phone. Per-server toggle so you only get alerts for what matters.",
          bullets: [
            "30-second health ping loop with latency tracking",
            "APNs push to watch + phone on status change",
            "Per-server notification toggle",
            "Haptic alert pattern on Apple Watch",
          ],
          imageAlt: "Tap server down notification on watch",
        },
        {
          badge: "Complications",
          title: "Glanceable server health on your watch face.",
          description:
            "Five configurable complications that show live server metrics right on your watch face. Pick which server and metric to display. Data syncs automatically from the app.",
          bullets: [
            "Server Status: fleet-wide up/down count",
            "Fleet Metrics: disk, memory, or CPU per server",
            "Docker: running container counts",
            "Uptime: per-server uptime display",
            "Quick Commands: pinned commands at a glance",
          ],
          imageAlt: "Tap watch complications showing server metrics",
        },
        {
          badge: "macOS",
          title: "Full control from your menu bar.",
          description:
            "Native macOS app for quick server access. Monitor your fleet, execute commands, and manage configurations without opening a browser. Sign in with Apple for seamless setup.",
          bullets: [
            "Menu bar presence for instant access",
            "Full command execution with output display",
            "Server configuration import from JSON",
            "Apple Sign-In authentication",
          ],
          imageAlt: "Tap macOS app showing server dashboard",
        },
        {
          badge: "Siri",
          title: '"Hey Siri, Tap restart prod-api."',
          description:
            "Full App Intents integration. Run any command by voice. Check server status hands-free. Siri confirms the action and reports the result. Works from watch, phone, or CarPlay.",
          bullets: [
            "Natural language: 'Tap restart nginx on prod'",
            "Server status check: 'Check my servers on Tap'",
            "Confirmation dialog before execution",
            "Result reported via voice response",
          ],
          imageAlt: "Siri running a Tap command",
        },
      ],
      stats: [
        { value: "< 3s", label: "Time to run" },
        { value: "Cellular", label: "No phone needed" },
        { value: "AES-256", label: "Key encryption" },
        { value: "MIT", label: "Open source" },
      ],
      threeSecondsHeading: "Three seconds. That's it.",
      threeSecondsSub: "From wrist to server and back.",
      stepTap: "Tap",
      stepConfirm: "Confirm",
      stepDone: "Done",
      archHeading: "Architecture",
      archWatch: "Watch",
      archRelay: "Relay",
      archServers: "Your Servers",
      archCompanion: "Companion",
      archMac: "macOS",
      securityHeading: "Security Model",
      securityCards: [
        {
          title: "Keys at Rest",
          body: "SSH keys encrypted with AES-256-GCM. Master passphrase derived via Argon2id. Keys only exist decrypted in memory while the relay runs.",
        },
        {
          title: "Token Auth",
          body: "Per-device Bearer tokens, Argon2 hashed. Optional TOTP 2FA for destructive operations. Tokens are revocable instantly.",
        },
        {
          title: "TLS Everywhere",
          body: "Built-in Let's Encrypt auto-renewal. All traffic encrypted in transit. Certificate pinning option for self-hosted relays.",
        },
        {
          title: "Watch Security",
          body: "Token stored in hardware-encrypted Watch Keychain. Wrist detection auto-locks. No sensitive data cached on device.",
        },
      ],
      templatesHeading: "27 Built-in Templates",
      templatesSub: "Common commands pre-configured. Pick a template, fill in the blanks, done.",
      templateCategories: {
        system: "System",
        docker: "Docker",
        systemd: "Systemd",
        deploy: "Deploy",
        nginx: "Nginx",
        network: "Network",
      },
      useCasesHeading: "Built for the Moments In Between",
      useCases: [
        "Restart a crashed service from the dog park",
        "Run a health check during a meeting",
        "Deploy from the gym",
        "Check disk space from bed",
        "Check server status from the car (Siri)",
        "Queue commands before takeoff, execute on landing",
      ],
      techHeading: "Tech Stack",
      techStack: {
        watch: { label: "Watch", value: "Swift + SwiftUI + WidgetKit + AppIntents" },
        macos: { label: "macOS", value: "Swift + SwiftUI + Menu Bar" },
        companion: { label: "Companion", value: "React Native + TypeScript + Base RN" },
        relay: { label: "Relay", value: "Rust + axum + russh + SQLite" },
        encryption: { label: "Encryption", value: "AES-256-GCM + Argon2id" },
        tls: { label: "TLS", value: "rustls + Let's Encrypt" },
        notifications: { label: "Notifications", value: "APNs + per-server toggle" },
      },
      quickSetup: "Quick Setup Guide",
      relayConfig: "Relay Configuration",
      ctaHeading: "Your servers are waiting.",
      ctaSub: "Free forever. Open source. No phone required.",
      ctaGithub: "View on GitHub",
    },

    base: {
      tagline: "Primitives. Tokens. Done.",
      description:
        "70 primitives, 8 design-token categories, dark mode, and zero opinions about your stack. Clean, composable React components that work everywhere — including the launcher.",
      catalogTagline: "Universal design toolkit — monochrome, platform-agnostic.",
      catalogDescription:
        "70 primitives, 8 design-token categories, dark mode, and zero opinions about your stack. Clean, composable React components that work everywhere — including the launcher.",
      requirements: "Free & Open Source  ·  React  ·  TypeScript",
      featuresHeading: "The primitives. The tokens. The toggle.",
      ctaLabel: "View source",
      features: [
        {
          title: "70 production-ready primitives",
          body: "Forms, layout, data, feedback — every primitive you need, nothing you don't. Inputs, tables, calendars, sparklines, tree views, color pickers, dialogs, and more.",
        },
        {
          title: "One token system, every platform",
          body: "Color, typography, spacing, radius, elevation, animation, and glassmorphism — all defined as TypeScript tokens that export to CSS variables or React Native styles.",
        },
        {
          title: "Light & dark out of the box",
          body: "Every component respects the color mode automatically — system-preference detection, manual toggle with localStorage, and glassmorphism that adapts in both modes.",
        },
      ],
      showcase: [
        {
          badge: "70 Primitives",
          title: "Every component you need, nothing you don't",
          description:
            "From buttons and inputs to tree views, color pickers, and sparklines — 70 production-ready primitives built with TypeScript and zero external dependencies beyond React.",
          bullets: [
            "Forms: input, textarea, select, checkbox, radio, pin-input, number-input, color-picker",
            "Layout: grid, stack, container, center, spacer, separator",
            "Data: table, calendar, timeline, carousel, sparkline, tree-view",
            "Feedback: toast, alert, dialog, sheet, popover, skeleton, spinner, progress",
          ],
          imageAlt: "Base primitives component library",
        },
        {
          badge: "Design Tokens",
          title: "One token system, every platform",
          description:
            "Color, typography, spacing, radius, elevation, animation, and glassmorphism — all defined as TypeScript tokens that export to CSS variables or React Native styles.",
          bullets: [
            "Monochrome-first color palette with semantic aliases",
            "Glassmorphism tokens for frosted glass effects",
            "Typography scale with fluid responsive sizing",
            "Export to CSS custom properties or React Native StyleSheet",
          ],
          imageAlt: "Base design tokens",
        },
        {
          badge: "Dark Mode",
          title: "Light and dark, built in from day one",
          description:
            "Every component respects the color mode out of the box. No additional setup, no theme wrappers to forget — just works with system preferences or manual toggle.",
          bullets: [
            "Automatic system preference detection",
            "Manual toggle with localStorage persistence",
            "All 70 primitives tested in both modes",
            "Glassmorphism effects adapt to color mode",
          ],
          imageAlt: "Base dark mode support",
        },
      ],
    },
  },

  legal: {
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Service",
    eulaTitle: "End User License Agreement",
    tapTagline: "Tap — SSH Command Relay",
    effectiveDate: "Effective date: April 14, 2026",
    navPrivacy: "Privacy Policy",
    navTerms: "Terms of Service",
    navEula: "EULA",

    privacy: {
      intro:
        'Matt\'s Software ("we", "us", "our") operates Tap, an SSH command relay application for Apple Watch, iPhone, and Mac. This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data. Matt\'s Software is based in the United States.',
      collectHeading: "Information We Collect",
      accountHeading: "Account Information",
      accountBody:
        "When you sign in with Apple Sign-In, we receive your Apple ID email address (or the private relay address Apple provides on your behalf). This is the only personally identifiable information we collect and it is used solely to authenticate you with your relay server.",
      relayHeading: "Self-Hosted Relay Data",
      relayBody:
        "Tap stores connection metadata, encrypted SSH keys, command history, and execution results on the relay server that you host and operate yourself. We do not have access to this data. Because you control the relay, you control your data.",
      useHeading: "How We Use Information",
      useBody:
        "Your Apple ID email address is used exclusively to authenticate your account. We do not use it for marketing, newsletters, or any other purpose. We do not combine it with data from other sources.",
      storageHeading: "Data Storage and Security",
      storageBody1:
        "SSH keys stored on your relay are encrypted at rest using AES-256-GCM. All relay data — connection metadata, command logs, and keys — resides entirely on your own infrastructure. Matt's Software does not operate central servers that store your data.",
      storageBody2:
        "Because the relay is self-hosted, the security of your data ultimately depends on how you configure and maintain your server. We recommend keeping your relay software up to date and following standard server hardening practices.",
      thirdPartyHeading: "Third-Party Services",
      thirdPartyBody:
        "Tap uses Apple Sign-In for authentication. Apple's privacy policy governs the data Apple collects during the sign-in process. Beyond Apple Sign-In, Tap does not integrate with any third-party analytics, advertising, or tracking services.",
      notDoHeading: "What We Do Not Do",
      notDoList: [
        "We do not run analytics or tracking of any kind",
        "We do not share data with third parties",
        "We do not serve ads",
        "We do not collect usage telemetry",
        "We do not have access to your relay server or its data",
        "We do not sell or rent your personal information",
      ],
      retentionHeading: "Data Retention and Deletion",
      retentionBody:
        "You can delete your account and all associated data from within the Tap app at any time. Since data is stored on your relay, you also have direct access to remove it from your server whenever you choose.",
      childrenHeading: "Children's Privacy",
      childrenBody:
        "Tap is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will take steps to delete it.",
      changesHeading: "Changes to This Policy",
      changesBody:
        "We may update this Privacy Policy from time to time. When we do, we will post the revised policy on this page with a new effective date. Your continued use of Tap after changes are posted constitutes acceptance of the updated policy.",
      contactHeading: "Contact Us",
      contactBody: "If you have questions or concerns about this Privacy Policy, please contact us at",
    },

    terms: {
      acceptHeading: "Acceptance of Terms",
      acceptBody:
        'By downloading, installing, or using Tap ("the App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App. These Terms constitute a legal agreement between you and Matt\'s Software ("we", "us", "our"), based in the United States.',
      descriptionHeading: "Description of Service",
      descriptionBody:
        "Tap is an SSH command relay application for Apple Watch, iPhone, and Mac. It allows you to execute commands on remote servers through a relay server that you host and operate yourself. Matt's Software provides the client application and relay software. We do not operate, manage, or have access to your relay server or the servers you connect to.",
      accountsHeading: "User Accounts",
      accountsBody:
        "Tap uses Apple Sign-In for authentication. Each person may maintain one account. You are responsible for maintaining the security of your account and for all activity that occurs under it. You must not share your account credentials or allow others to access your account.",
      responsibilitiesHeading: "User Responsibilities",
      serversHeading: "Your Servers",
      serversBody:
        "You are responsible for the servers you connect to through Tap. This includes ensuring you have proper authorization to access those servers and that your use complies with all applicable policies and laws.",
      commandsHeading: "Your Commands",
      commandsBody:
        "Tap is a tool that executes the commands you provide. You accept full responsibility for every command you run through Tap and its consequences. Matt's Software is not liable for the outcome of commands executed via the App.",
      relayHeading: "Your Relay",
      relayBody:
        "The Tap relay server is self-hosted on your infrastructure. You are responsible for securing your relay, keeping it updated, and managing access to it. Matt's Software does not operate, monitor, or maintain your relay.",
      acceptableHeading: "Acceptable Use",
      acceptableIntro: "You agree not to use Tap to:",
      acceptableList: [
        "Gain unauthorized access to any system, network, or data",
        "Violate any applicable local, state, national, or international law",
        "Transmit malware, viruses, or other harmful code",
        "Interfere with or disrupt the integrity or performance of any system",
        "Harass, abuse, or harm another person or entity",
        "Engage in any activity that is fraudulent, deceptive, or misleading",
      ],
      ipHeading: "Intellectual Property",
      ipBody:
        "The Tap application, including its design, code, and documentation, is owned by Matt's Software and is protected by applicable intellectual property laws. Your use of Tap does not grant you ownership of any intellectual property in the App. Your data, configurations, and content stored on your relay server remain yours.",
      warrantyHeading: "Disclaimer of Warranties",
      warrantyBody:
        'Tap is provided "as is" and "as available" without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. Matt\'s Software does not guarantee that the App will be uninterrupted, error-free, secure, or available at any particular time.',
      liabilityHeading: "Limitation of Liability",
      liabilityBody:
        "To the maximum extent permitted by applicable law, Matt's Software shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, revenue, or business opportunities, arising from or related to your use of Tap, regardless of the theory of liability.",
      terminationHeading: "Termination",
      terminationBody:
        "You may delete your account and stop using Tap at any time. Matt's Software reserves the right to suspend or terminate your access to the App at any time, with or without notice, for conduct that we believe violates these Terms or is otherwise harmful to other users or to us.",
      governingHeading: "Governing Law",
      governingBody:
        "These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles. Any disputes arising from these Terms or your use of Tap shall be resolved in the courts of the United States.",
      changesHeading: "Changes to These Terms",
      changesBody:
        "We may update these Terms from time to time. When we do, we will post the revised Terms on this page with a new effective date. Your continued use of Tap after changes are posted constitutes acceptance of the updated Terms.",
      contactHeading: "Contact",
      contactBody: "If you have questions about these Terms, please contact us at",
    },

    eula: {
      intro:
        'This End User License Agreement ("Agreement") is a legal agreement between you and Matt\'s Software ("we", "us", "our"), based in the United States, for the use of Tap ("the App"). By installing or using the App, you agree to be bound by this Agreement.',
      licensedHeading: "Licensed Application",
      licensedBody:
        "Tap is an SSH command relay application for Apple Watch, iPhone, and Mac, developed and published by Matt's Software. The App allows you to execute commands on remote servers through a relay server that you host yourself.",
      scopeHeading: "Scope of License",
      scopeBody:
        "Matt's Software grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the App on devices that you own or control, in accordance with this Agreement and the Apple Media Services Terms and Conditions.",
      scopeIntro: "This license does not allow you to:",
      scopeList: [
        "Distribute, sublicense, lease, rent, or lend the App to third parties",
        "Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App",
        "Modify, adapt, translate, or create derivative works based on the App",
        "Remove, alter, or obscure any copyright, trademark, or other proprietary notices in the App",
        "Use the App for any purpose that is illegal or prohibited by this Agreement",
      ],
      relayHeading: "Self-Hosted Relay",
      relayBody:
        "Tap connects to a relay server that you host and operate on your own infrastructure. Matt's Software does not provide, manage, or maintain your relay server. We are not responsible for any issues arising from the configuration, operation, security, or availability of your relay server or any remote servers you connect to through the App.",
      ownershipHeading: "Ownership",
      ownershipBody:
        "The App and all related intellectual property rights are and shall remain the property of Matt's Software. This Agreement does not grant you any ownership interest in the App. Your data, configurations, and content stored on your relay server remain yours.",
      terminationHeading: "Termination",
      terminationBody:
        "This license is effective until terminated. Your rights under this Agreement will terminate automatically without notice if you fail to comply with any of its terms. Upon termination, you must stop using the App and delete all copies from your devices. Matt's Software may also terminate this license at any time for any reason.",
      warrantyHeading: "Disclaimer of Warranties",
      warrantyBody:
        'The App is provided "as is" and "as available" without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. Matt\'s Software does not warrant that the App will be uninterrupted, error-free, or free of harmful components.',
      liabilityHeading: "Limitation of Liability",
      liabilityBody:
        "To the maximum extent permitted by applicable law, Matt's Software shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or revenue, arising from or related to your use of the App, regardless of the theory of liability.",
      governingHeading: "Governing Law",
      governingBody:
        "This Agreement shall be governed by and construed in accordance with the laws of the United States, without regard to conflict of law principles.",
      contactHeading: "Contact",
      contactBody: "If you have questions about this Agreement, please contact us at",
    },
  },

  notFound: {
    altText:
      "A red ribbon snake in a pith helmet sitting on a rock shaped like a question mark, surrounded by blank signposts",
    title: "This page wandered off.",
    sub: "The signposts are blank. The snake doesn't know either. Let's get you back to something that exists.",
    backToSuite: "Back to the suite",
    rummageGithub: "Or rummage on GitHub",
  },
};
