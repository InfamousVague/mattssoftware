/// The MattsSoftware catalog — mirrors the launcher's catalog
/// (src/data/catalog.ts in mattssoftware-launcher) so the website and
/// the launcher show exactly the same apps, copy, and order.
///
/// Web-adapted: `icon` points at the site's /public/<app> assets, and
/// `view` is the marketing route (internal) or external URL the
/// "View" button opens. `channel` drives the "Download" button:
///   github   → latest release .dmg from github.com/InfamousVague/<repo>
///   appstore → App Store listing (Tap is watchOS)
///   library  → source/docs (Base is a design system, nothing to install)

export type Channel = "github" | "appstore" | "library";

export type Category =
  | "Developer Tools"
  | "Privacy & Security"
  | "Utilities"
  | "Learning"
  | "Design";

export interface CatalogApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  icon: string;
  tags: string[];
  channel: Channel;
  /// Platforms the app actually ships on. Drives the platform chip
  /// shown on the launcher-replica home grid. Defaults to ["macOS"]
  /// when omitted — set explicitly for cross-platform apps so the
  /// chip can say "Cross-platform" instead of mis-labelling them.
  platforms?: string[];
  /// Bare repo under github.com/InfamousVague (github channel only).
  githubRepo?: string;
  /// App Store / source URL (appstore + library channels).
  url?: string;
  /// "View" target: marketing route, or an external URL.
  view: string;
  /// True when `view` is an external URL (render <a>, not <Link>).
  viewExternal?: boolean;
}

export const CATALOG: readonly CatalogApp[] = [
  {
    id: "espresso",
    name: "Espresso",
    tagline: "Keep your devices awake. Mac or iPhone.",
    description:
      "Menu-bar keep-awake on macOS with a duration grid, mouse jiggle, and lid-closed override. iPhone companion with a Live Activity countdown in the Dynamic Island, brightness boost, and the same duration vocabulary. Same cup-and-saucer brand, two platforms.",
    category: "Utilities",
    icon: "/espresso/app-icon.png",
    tags: ["Utility", "Menu Bar", "Live Activity", "macOS", "iOS"],
    channel: "github",
    platforms: ["macOS", "iOS"],
    githubRepo: "Espresso",
    view: "/espresso",
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
    platforms: ["macOS", "Linux"],
    githubRepo: "StickyKeys",
    view: "/stickykeys",
  },
  {
    id: "stats",
    name: "Stats",
    tagline: "Every system signal at a glance — in your menu bar.",
    description:
      "A native menu-bar system monitor. Live CPU per-core, memory pressure, disk read/write, network up/down, and sensor readings — plus optional compact widgets that ride along in the status bar and history sparklines for every signal, so you can spot a spike without opening Activity Monitor.",
    category: "Utilities",
    icon: "/stats/app-icon.png",
    tags: ["Menu Bar", "System Monitor", "Utility", "macOS", "Linux"],
    channel: "github",
    platforms: ["macOS", "Linux"],
    githubRepo: "Stats",
    view: "/stats",
  },
  {
    id: "port",
    name: "Port",
    tagline: "Every open port on your Mac, one click away.",
    description:
      "A native menu-bar port manager: see what's listening, kill or pause the process, forward or NAT-PMP-map it, and watch active connections on a live map — click one to inspect it in Blip.",
    category: "Developer Tools",
    icon: "/port/app-icon.png",
    tags: ["Menu Bar", "Network", "Developer Tools", "macOS"],
    channel: "github",
    githubRepo: "Port",
    view: "/port",
  },
  {
    id: "alfred",
    name: "Alfred",
    tagline: "Reclaim the disk space dev cruft is hoarding.",
    description:
      "A native menu-bar valet that finds safe-to-delete developer cruft — node_modules, Cargo target/, build & test caches, Xcode DerivedData, package-manager caches — sizes it biggest-first, and moves it to the Trash (recoverable).",
    category: "Developer Tools",
    icon: "/alfred/app-icon.png",
    tags: ["Menu Bar", "Disk", "Developer Tools", "macOS", "Linux"],
    channel: "github",
    platforms: ["macOS", "Linux"],
    githubRepo: "Alfred",
    view: "/alfred",
  },
  {
    id: "uninstaller",
    name: "Uninstaller",
    tagline: "Apps + their crumbs, in one click.",
    description:
      "Native menu-bar uninstaller. Finds every leftover an app keeps on disk — preferences, caches, sandbox containers, login items, crash logs — and moves the whole pile to Trash in one click.",
    category: "Utilities",
    icon: "/uninstaller/app-icon.png",
    tags: ["Menu Bar", "Utility", "Disk", "macOS"],
    channel: "github",
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
    githubRepo: "Quarantine",
    view: "/quarantine",
  },
  {
    id: "sentry",
    name: "Sentry",
    tagline: "Know the moment something digs in.",
    description:
      "A menu-bar auditor for macOS persistence — LaunchAgents, login items, cron, and shell startup files — with signature checks and alerts when something new or changed appears. Inspect, block, or restore any of them.",
    category: "Privacy & Security",
    icon: "/sentry/app-icon.png",
    tags: ["Menu Bar", "Privacy", "Persistence", "macOS"],
    channel: "github",
    githubRepo: "Sentry",
    view: "/sentry",
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
    platforms: ["macOS", "Windows", "Linux"],
    githubRepo: "Libre",
    view: "/libre",
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
    url: "https://apps.apple.com/app/tap-command-runner/id6762214314",
    view: "/tap",
  },
  {
    id: "base",
    name: "Base",
    tagline: "Universal design toolkit — monochrome, platform-agnostic.",
    description:
      "70 primitives, 8 design-token categories, dark mode, and zero opinions about your stack. Clean, composable React components that work everywhere — including the launcher.",
    category: "Design",
    icon: "/base/app-icon.png",
    tags: ["UI Kit", "React", "TypeScript", "Design System"],
    channel: "library",
    url: "https://github.com/InfamousVague",
    view: "/base",
  },
];

export const CATEGORIES: readonly Category[] = [
  "Developer Tools",
  "Privacy & Security",
  "Utilities",
  "Learning",
  "Design",
];
