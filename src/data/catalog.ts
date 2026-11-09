/// The MattsSoftware catalogue. Just the six highlighted products that
/// the site is a storefront for — one entry per product, in the order
/// they appear on the home page. "Other things I've built" at the
/// bottom of the home page is a short set of links, not a catalogue;
/// adding a new product that deserves its own page means adding an
/// entry here AND a page under src/pages.

export type Channel = "github" | "appstore" | "library" | "site";

/// What an app runs on, in the words the site uses.
export type Platform = "Mac" | "iPhone" | "Android" | "Web" | "Windows" | "Linux" | "Apple Watch";

/// A platform an app is not on yet. "soon" is finished and waiting on
/// a store; "development" is still being built. Neither has a download.
export interface UpcomingPlatform {
  platform: Platform;
  status: "soon" | "development";
}

export interface CatalogApp {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  channel: Channel;
  /// Platforms the app is available on today.
  platforms: Platform[];
  /// Platforms it's headed to, with how far along each is.
  upcoming?: UpcomingPlatform[];
  /// Bare repo under github.com/InfamousVague (github channel only).
  githubRepo?: string;
  /// App Store / source URL (appstore + library channels).
  url?: string;
  /// The product's own website.
  site?: string;
  /// The app's page on this site.
  view: string;
  /// Shown on the home page as a tall story section. Every entry in
  /// the catalogue is featured; the field survives because AppPage
  /// and the Nav read it to filter out anything that ever sheds the
  /// flag without being removed.
  featured: boolean;
}

export const CATALOG: readonly CatalogApp[] = [
  {
    id: "ghost",
    name: "Ghost.md",
    tagline: "Notes, journals, boards and canvases, as plain Markdown files on your own devices.",
    description:
      "Every note is a .md file you own. Any other Markdown app can open it. Ghost.md adds notebooks, " +
      "journals, boards and canvases on top of that same shelf.",
    icon: "/ghost/app-icon.png",
    channel: "site",
    platforms: ["Android", "Mac", "Windows", "Web"],
    upcoming: [{ platform: "iPhone", status: "soon" }],
    site: "https://ghostmarkdown.com",
    view: "/ghost",
    featured: true,
  },
  {
    id: "ghostkbd",
    name: "Ghost KBD",
    tagline: "A developer keyboard for Android.",
    description:
      "A faithful Gboard QWERTY as the baseline, and a layer of developer niceties on top. The keyboard " +
      "is native so it opens instantly; the settings app is Flutter drawn with Glacier, same kit as the " +
      "other Ghost products.",
    icon: "/ghostkbd/app-icon.png",
    channel: "github",
    platforms: ["Android"],
    githubRepo: "ghost-kbd",
    view: "/ghostkbd",
    featured: true,
  },
  {
    id: "fishbones",
    name: "Libre",
    tagline: "Turn any technical book into an interactive course.",
    description:
      "Drop in a PDF or EPUB and Libre pulls out lessons, exercises, and hidden tests. Sixteen languages " +
      "with one editor, a local AI tutor on your laptop, a streak that survives weekends, and seventeen " +
      "themes.",
    icon: "/libre/libre_icon.png",
    channel: "github",
    platforms: ["Mac", "Windows", "Linux"],
    githubRepo: "Libre",
    site: "https://libre.academy",
    view: "/libre",
    featured: true,
  },
  {
    id: "espresso",
    name: "Espresso",
    tagline: "Keep your devices awake.",
    description:
      "A menu-bar coffee shot for your Mac. A single-screen Live Activity for your iPhone. Same brand, " +
      "same duration grid, two platforms. An Android version is in development.",
    icon: "/espresso/app-icon.png",
    channel: "github",
    platforms: ["Mac", "iPhone"],
    upcoming: [{ platform: "Android", status: "development" }],
    githubRepo: "Espresso",
    view: "/espresso",
    featured: true,
  },
  {
    id: "attackfm",
    name: "Attack.fm",
    tagline: "A music player and a server you run yourself.",
    description:
      "A music player and a server you run yourself. The files stay on your hardware, and every device " +
      "you own plays from them.",
    icon: "/attackfm/app-icon.png",
    channel: "site",
    platforms: ["Mac", "Windows", "Linux", "Android", "Web"],
    site: "https://attack.fm",
    view: "/attackfm",
    featured: true,
  },
  {
    id: "prettycardboard",
    name: "PrettyCardboard",
    tagline: "A shared online table for paper card games like Magic: The Gathering.",
    description:
      "A multiplayer, freeform card table in the browser. Up to six seats, cards you can drag anywhere, " +
      "a fanned hand and zone piles. Manual play with conveniences, and a server that keeps every seat " +
      "in step.",
    icon: "/prettycardboard/app-icon.png",
    channel: "site",
    platforms: ["Web"],
    site: "https://prettycardboard.com",
    view: "/prettycardboard",
    featured: true,
  },
];

/// "Other things I've built" — surfaced at the bottom of the home page
/// as a short list of plain links. Not catalogue entries: they have no
/// page of their own on this site. If one graduates into a highlighted
/// product, move it into CATALOG above and build its page.
export interface OtherThing {
  name: string;
  oneLiner: string;
  href: string;
}

export const OTHER_THINGS: readonly OtherThing[] = [
  {
    name: "Hush",
    oneLiner: "A macOS ambient sound machine (noise, rain, wipers).",
    href: "https://github.com/InfamousVague/hush",
  },
  {
    name: "Road Trip",
    oneLiner: "A retro car-cabin soundboard for the Mac.",
    href: "https://github.com/InfamousVague/roadtrip",
  },
  {
    name: "Floe",
    oneLiner: "Entirely-P2P file transfer, calls and messaging on iroh.",
    href: "https://github.com/InfamousVague/floe",
  },
  {
    name: "Umbra",
    oneLiner: "P2P end-to-end encrypted messaging.",
    href: "https://github.com/InfamousVague/Umbra",
  },
  {
    name: "Stream",
    oneLiner: "An Electron player for legal torrents and magnet links.",
    href: "https://github.com/InfamousVague/stream",
  },
];
