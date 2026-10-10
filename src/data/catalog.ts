/// The MattsSoftware catalogue: every app the site lists, in the order
/// the home page shows them. The five featured apps come first, in the
/// order they are featured; the rest follow in the order they have
/// always had.
///
/// `icon` points at the site's /public/<app> assets. `view` is the app's
/// own page on this site. `site`, when present, is the product's own
/// website, which the featured card and the app page link out to.
/// `channel` says where a download comes from:
///   github   → latest release from github.com/InfamousVague/<repo>
///   appstore → App Store listing (Tap)
///   library  → source/docs (Base is a UI kit, nothing to install)
///   site     → the product's own website carries the downloads

export type Channel = "github" | "appstore" | "library" | "site";

export type Category =
  | "Developer Tools"
  | "Privacy & Security"
  | "Utilities"
  | "Learning"
  | "Design"
  | "Music"
  | "Games"
  | "Notes";

/// What an app runs on, in the words the site uses. The first five are
/// the home page's filters; Linux and Apple Watch are shown on an app's
/// card and page but are not filters.
export type Platform =
  | "Mac"
  | "iPhone"
  | "Android"
  | "Web"
  | "Windows"
  | "Linux"
  | "Apple Watch";

/// The filters on the home page, in the order they are drawn.
export const FILTER_PLATFORMS: readonly Platform[] = [
  "Mac",
  "iPhone",
  "Android",
  "Web",
  "Windows",
];

/// A platform an app is not on yet. "soon" is finished and waiting on a
/// store; "development" is being built. Neither has a download.
export interface UpcomingPlatform {
  platform: Platform;
  status: "soon" | "development";
}

export interface CatalogApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  icon: string;
  tags: string[];
  channel: Channel;
  /// Platforms the app is available on today.
  platforms: Platform[];
  /// Platforms it is headed to, with how far along each is.
  upcoming?: UpcomingPlatform[];
  /// Bare repo under github.com/InfamousVague (github channel only).
  githubRepo?: string;
  /// App Store / source URL (appstore + library channels).
  url?: string;
  /// The product's own website.
  site?: string;
  /// The app's page on this site.
  view: string;
  /// Featured on the home page, above the catalogue.
  featured?: boolean;
}

export const CATALOG: readonly CatalogApp[] = [
  {
    id: "attackfm",
    name: "Attack.fm",
    tagline:
      "A music player and server you run yourself: your files stay on your hardware and play on every device you own.",
    description:
      "A music player and a server you run yourself. The files stay on your hardware, and every device you own plays from them.",
    category: "Music",
    icon: "/attackfm/app-icon.png",
    tags: ["Music", "Self-hosted", "Lossless", "Player", "Server"],
    channel: "site",
    platforms: ["Mac", "Windows", "Linux", "Android", "Web"],
    site: "https://attack.fm",
    view: "/attackfm",
    featured: true,
  },
  {
    id: "fishbones",
    name: "Libre",
    tagline: "Turn any technical book into an interactive course.",
    description:
      "Drop in a PDF or EPUB and Libre generates lessons, exercises, and hidden tests. Sixteen languages with one editor, a local AI tutor on your laptop, streak fire that survives weekends, and seventeen themes.",
    category: "Learning",
    icon: "/libre/libre_icon.png",
    tags: ["Learning", "Multi-language", "AI Tutor", "Local-first", "macOS", "Windows", "Linux"],
    channel: "github",
    platforms: ["Mac", "Windows", "Linux"],
    githubRepo: "Libre",
    site: "https://libre.academy",
    view: "/libre",
    featured: true,
  },
  {
    id: "prettycardboard",
    name: "PrettyCardboard",
    tagline:
      "A shared online table for paper card games like Magic: The Gathering, where you move the cards by hand and no rules engine gets in the way.",
    description:
      "A multiplayer, freeform card table in the browser. Up to six seats, cards you can drag anywhere, a fanned hand and zone piles. Manual play with conveniences, and a server that keeps every seat in step.",
    category: "Games",
    icon: "/prettycardboard/app-icon.png",
    tags: ["Card games", "Tabletop", "Multiplayer", "Magic: The Gathering"],
    channel: "site",
    platforms: ["Web"],
    site: "https://prettycardboard.com",
    view: "/prettycardboard",
    featured: true,
  },
  {
    id: "ghost",
    name: "Ghost.md",
    tagline:
      "Notes, journals, boards and canvases, kept as plain Markdown files on your own devices.",
    description:
      "Notes, journals, boards and canvases, kept as plain Markdown on your own devices. Every note is a .md file you own, and any Markdown app can open it.",
    category: "Notes",
    icon: "/ghost/app-icon.png",
    tags: ["Notes", "Markdown", "Journal", "Boards", "Canvas"],
    channel: "site",
    platforms: ["Android", "Mac", "Windows", "Web"],
    upcoming: [{ platform: "iPhone", status: "soon" }],
    site: "https://ghostmarkdown.com",
    view: "/ghost",
    featured: true,
  },
  {
    id: "espresso",
    name: "Espresso",
    tagline: "Keep your devices awake.",
    description:
      "Menu-bar keep-awake on the Mac with a duration grid, mouse jiggle, and lid-closed override. An iPhone companion with a Live Activity countdown in the Dynamic Island and a brightness boost. An Android version is in development.",
    category: "Utilities",
    icon: "/espresso/app-icon.png",
    tags: ["Utility", "Menu Bar", "Live Activity", "macOS", "iOS", "Android"],
    channel: "github",
    platforms: ["Mac", "iPhone"],
    upcoming: [{ platform: "Android", status: "development" }],
    githubRepo: "Espresso",
    view: "/espresso",
    featured: true,
  },
  {
    id: "ghostwire",
    name: "GhostWire",
    tagline:
      "Tune in, press play, keep what stays with you. A friendly ghost on the wire.",
    description:
      "A media browser for legal & public-domain streams: tune every source at once, press play before the download lands, and pin a tidy library of movies, TV, and music. On-the-fly transcoding plays formats the browser can't, an iTunes-style music view pulls album art from Spotify, and a local-AI pass quietly tidies your folder. Cross-platform: macOS, Windows, Linux.",
    category: "Utilities",
    icon: "/ghostwire/app-icon.png",
    tags: ["Media", "Streaming", "Library", "macOS", "Windows", "Linux"],
    channel: "github",
    platforms: ["Mac", "Windows", "Linux"],
    githubRepo: "GhostWire.tv",
    view: "/ghostwire",
  },
  {
    id: "seasick",
    name: "Seasick",
    tagline: "Motion cues for your Mac. Apple's iPhone trick, on the desktop.",
    description:
      "Native macOS overlay that flows particle dots across every screen in the direction of device travel, mirroring Apple's iPhone Motion Cues. Reads from the MacBook's sudden-motion sensor, your AirPods Pro/3/Max, or a paired iPhone companion that streams CoreMotion data over Bonjour. Click-through, multi-screen, never steals focus.",
    category: "Utilities",
    icon: "/seasick/app-icon.png",
    tags: ["Utility", "Accessibility", "Motion", "Menu Bar", "macOS", "iOS"],
    channel: "github",
    platforms: ["Mac", "iPhone"],
    githubRepo: "Seasick",
    view: "/seasick",
  },
  {
    id: "worktree",
    name: "Worktree",
    tagline: "Your current git project + branch, always in the menu bar.",
    description:
      "Menu-bar agent that follows your editor focus and surfaces the repo + branch you're editing. One-click branch switching, worktree management, fetch + pull, and a saved-projects list so you can manage branches on repos you aren't focused in. Detects projects in Xcode, VS Code / Cursor / Windsurf / Code-OSS, and every common terminal.",
    category: "Developer Tools",
    icon: "/worktree/app-icon.png",
    tags: ["Developer Tools", "Git", "Menu Bar", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Worktree",
    view: "/worktree",
  },
  {
    id: "halo",
    name: "Halo",
    tagline: "Dynamic Island for the MacBook notch.",
    description:
      "A native macOS Dynamic Island that turns the MacBook notch into a live status pill. Hangs from the screen edge, shows the volume HUD, brightness, now-playing track, AirPods battery, and every MattsSoftware suite app that wants the slot: Espresso countdown, Worktree's current repo, Port's listening count, Peephole's camera/mic activity. Context-aware focus so each app pulls to attention when its state changes; ambient priority otherwise. Click the pill to cycle through what's published.",
    category: "Utilities",
    icon: "/halo/app-icon.png",
    tags: ["Utilities", "Menu Bar", "Dynamic Island", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Halo",
    view: "/halo",
  },
  {
    id: "stickykeys",
    name: "StickyKeys",
    tagline: "Lock the keyboard so a cleaning cloth can't fire shortcuts.",
    description:
      "A menu-bar keyboard lock for cleaning. Click to swallow every key, modifier, and media key system-wide; a frosted full-screen overlay covers each display, the mouse stays live to unlock, and a safety auto-unlock means you can never get trapped.",
    category: "Utilities",
    icon: "/stickykeys/app-icon.png",
    tags: ["Menu Bar", "Utility", "Accessibility", "macOS", "Linux"],
    channel: "github",
    platforms: ["Mac", "Linux"],
    githubRepo: "StickyKeys",
    view: "/stickykeys",
  },
  {
    id: "stats",
    name: "Stats",
    tagline: "Every system signal at a glance, in your menu bar.",
    description:
      "A native menu-bar system monitor. Live CPU per-core, memory pressure, disk read/write, network up/down, and sensor readings, plus optional compact widgets that ride along in the status bar and history sparklines for every signal, so you can spot a spike without opening Activity Monitor.",
    category: "Utilities",
    icon: "/stats/app-icon.png",
    tags: ["Menu Bar", "System Monitor", "Utility", "macOS", "Linux"],
    channel: "github",
    platforms: ["Mac", "Linux"],
    githubRepo: "Stats",
    view: "/stats",
  },
  {
    id: "port",
    name: "Port",
    tagline: "Every open port on your Mac, one click away.",
    description:
      "A native menu-bar port manager: see what's listening, kill or pause the process, forward or NAT-PMP-map it, and watch active connections on a live map. Click one to inspect it in Blip.",
    category: "Developer Tools",
    icon: "/port/app-icon.png",
    tags: ["Menu Bar", "Network", "Developer Tools", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Port",
    view: "/port",
  },
  {
    id: "alfred",
    name: "Alfred",
    tagline: "Reclaim the disk space dev cruft is hoarding.",
    description:
      "A native menu-bar valet that finds safe-to-delete developer cruft (node_modules, Cargo target/, build & test caches, Xcode DerivedData, package-manager caches), sizes it biggest-first, and moves it to the Trash (recoverable).",
    category: "Developer Tools",
    icon: "/alfred/app-icon.png",
    tags: ["Menu Bar", "Disk", "Developer Tools", "macOS", "Linux"],
    channel: "github",
    platforms: ["Mac", "Linux"],
    githubRepo: "Alfred",
    view: "/alfred",
  },
  {
    id: "uninstaller",
    name: "Uninstaller",
    tagline: "Apps + their crumbs, in one click.",
    description:
      "Native menu-bar uninstaller. Finds every leftover an app keeps on disk (preferences, caches, sandbox containers, login items, crash logs) and moves the whole pile to Trash in one click.",
    category: "Utilities",
    icon: "/uninstaller/app-icon.png",
    tags: ["Menu Bar", "Utility", "Disk", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Uninstaller",
    view: "/uninstaller",
  },
  {
    id: "blip",
    name: "Blip",
    tagline: "Your computer has been talking behind your back.",
    description:
      "Real-time network monitoring with a 3D connection map, smart firewall, DNS blocking, submarine-cable routing, and bandwidth analytics. See exactly where your data goes.",
    category: "Privacy & Security",
    icon: "/blip/app-icon.png",
    tags: ["Network", "Firewall", "Privacy", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Blip",
    view: "/blip",
  },
  {
    id: "diane",
    name: "Diane",
    tagline: "I'm holding in my hand a small tape recorder.",
    description:
      "A skeuomorphic retro voice recorder with live speech-to-text transcription, a cassette-tape library, and dictation mode. Inspired by Special Agent Dale Cooper.",
    category: "Utilities",
    icon: "/diane/app-icon.png",
    tags: ["Voice", "Transcription", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Diane",
    view: "/diane",
  },
  {
    id: "peephole",
    name: "Peephole",
    tagline: "See who's watching.",
    description:
      "A menu-bar sentinel for your camera and microphone: which apps are using them right now, a history of access, and a notification the moment something turns them on.",
    category: "Privacy & Security",
    icon: "/peephole/app-icon.png",
    tags: ["Menu Bar", "Privacy", "Camera & Mic", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Peephole",
    view: "/peephole",
  },
  {
    id: "quarantine",
    name: "Quarantine",
    tagline: "Trust, but verify every download.",
    description:
      "A menu-bar inspector for ~/Downloads: quarantine origin, Gatekeeper/codesign status, SHA-256, and an optional VirusTotal verdict for every new file, with a notification to vet it.",
    category: "Privacy & Security",
    icon: "/quarantine/app-icon.png",
    tags: ["Menu Bar", "Privacy", "Downloads", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Quarantine",
    view: "/quarantine",
  },
  {
    id: "sentry",
    name: "Sentry",
    tagline: "Know the moment something digs in.",
    description:
      "A menu-bar auditor for macOS persistence (LaunchAgents, login items, cron, and shell startup files) with signature checks and alerts when something new or changed appears. Inspect, block, or restore any of them.",
    category: "Privacy & Security",
    icon: "/sentry/app-icon.png",
    tags: ["Menu Bar", "Privacy", "Persistence", "macOS"],
    channel: "github",
    platforms: ["Mac"],
    githubRepo: "Sentry",
    view: "/sentry",
  },
  {
    id: "tap",
    name: "Tap",
    tagline: "The command remote for your infrastructure.",
    description:
      "Run pre-configured SSH commands on remote servers from your Apple Watch. Works over cellular, supports Siri, and encrypts everything end-to-end.",
    category: "Developer Tools",
    icon: "/tap/icon.png",
    tags: ["watchOS", "SSH", "Rust", "Apple Watch"],
    channel: "appstore",
    platforms: ["Apple Watch", "iPhone", "Mac"],
    url: "https://apps.apple.com/app/tap-command-runner/id6762214314",
    view: "/tap",
  },
  {
    id: "base",
    name: "Base",
    tagline: "Universal design toolkit: monochrome, platform-agnostic.",
    description:
      "70 primitives, 8 design-token categories, dark mode, and zero opinions about your stack. Clean, composable React components that work everywhere, including the launcher.",
    category: "Design",
    icon: "/base/app-icon.png",
    tags: ["UI Kit", "React", "TypeScript", "Design System"],
    channel: "library",
    platforms: ["Web"],
    url: "https://github.com/InfamousVague",
    view: "/base",
  },
];

export const FEATURED: readonly CatalogApp[] = CATALOG.filter((a) => a.featured);

/// Every platform an app is on or headed to, for the home page's filter.
export function appMatchesPlatform(app: CatalogApp, platform: Platform): boolean {
  return (
    app.platforms.includes(platform) ||
    (app.upcoming ?? []).some((u) => u.platform === platform)
  );
}
