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
    id: "espresso",
    name: "Espresso",
    tagline: "Your computer wants to sleep. Espresso disagrees.",
    description:
      "Keep-awake utility that prevents your computer from sleeping. Timed sessions, mouse-jiggle simulation, lid-closed override, and a panic hotkey for instant deactivation.",
    category: "Utilities",
    icon: "/espresso/app-icon.png",
    tags: ["Utility", "Menu Bar", "Productivity", "macOS"],
    channel: "github",
    githubRepo: "Espresso",
    view: "/vyv",
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
    id: "stash",
    name: "Stash",
    tagline: "Your .env files deserve a bodyguard.",
    description:
      "Encrypted environment-variable vault with profiles, team sharing via public-key crypto, a CLI, health monitoring, and an API directory. Never leak a secret again.",
    category: "Developer Tools",
    icon: "/stash/app-icon.png",
    tags: ["Security", "Developer Tools", "macOS", "Encryption"],
    channel: "github",
    githubRepo: "Stash",
    view: "/stash",
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
    id: "stickykeys",
    name: "StickyKeys",
    tagline: "Lock the keyboard so a cleaning cloth can't fire shortcuts.",
    description:
      "A menu-bar keyboard lock for cleaning. Click to swallow every key, modifier, and media key system-wide; a frosted full-screen overlay covers each display, the mouse stays live to unlock, and a safety auto-unlock means you can never get trapped.",
    category: "Utilities",
    icon: "/stickykeys/app-icon.png",
    tags: ["Menu Bar", "Utility", "Accessibility", "macOS"],
    channel: "github",
    githubRepo: "StickyKeys",
    view: "/stickykeys",
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
    id: "alfred",
    name: "Alfred",
    tagline: "Reclaim the disk space dev cruft is hoarding.",
    description:
      "A native menu-bar valet that finds safe-to-delete developer cruft — node_modules, Cargo target/, build & test caches, Xcode DerivedData, package-manager caches — sizes it biggest-first, and moves it to the Trash (recoverable).",
    category: "Developer Tools",
    icon: "/alfred/app-icon.png",
    tags: ["Menu Bar", "Disk", "Developer Tools", "macOS"],
    channel: "github",
    githubRepo: "Alfred",
    view: "https://github.com/InfamousVague/Alfred",
    viewExternal: true,
  },
  {
    id: "fishbones",
    name: "Libre",
    tagline: "Turn any technical book into an interactive course.",
    description:
      "Drop in a PDF or EPUB and Libre generates lessons, exercises, and hidden tests. Sixteen languages with one editor, a local AI tutor on your laptop, streak fire that survives weekends, and seventeen themes.",
    category: "Learning",
    icon: "/libre/libre_icon.png",
    tags: ["Learning", "Multi-language", "AI Tutor", "Local-first", "macOS"],
    channel: "github",
    githubRepo: "Libre",
    view: "https://libre.academy",
    viewExternal: true,
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
  {
    id: "fetch",
    name: "Fetch",
    tagline: "A native torrent client for legal content.",
    description:
      "Menu-bar BitTorrent client (libtorrent) for legal media: Internet Archive, official Linux/BSD ISOs, Academic Torrents, public-domain/CC packs — plus your own Torznab/RSS sources. Add a magnet, import a .torrent, watch downloads & seeding.",
    category: "Utilities",
    icon: "/fetch/app-icon.png",
    tags: ["Menu Bar", "Torrents", "Downloads", "macOS"],
    channel: "github",
    githubRepo: "Fetch",
    view: "/fetch",
  },
];

export const CATEGORIES: readonly Category[] = [
  "Developer Tools",
  "Privacy & Security",
  "Utilities",
  "Learning",
  "Design",
];
