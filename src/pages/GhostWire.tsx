import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./GhostWire.css";

/// GhostWire's marketing card on mattssoftware.com.
///
/// Copy and feature framing mirror the canonical GhostWire.tv landing
/// page (see ~/Development/Apps/ghosty/site/index.html); illustrations
/// are pulled straight from the GhostWire source repo's /public/ so
/// what ships here matches what ships in the app. Hero + downloads come
/// from AppPage; the showcase + richer sections are passed as children.
///
/// Cross-platform: the `platforms` prop makes AppPage render one download
/// button per OS, each resolving the matching asset (.dmg / .msi /
/// .AppImage) from the latest github.com/InfamousVague/GhostWire.tv release.

const SHOWCASE: FeatureSection[] = [
  {
    badge: "Discover",
    title: "One search. Every source.",
    description:
      "Point GhostWire at the sources you want and search them all from one bar. Results are ranked by seeders, size, and quality, so the right title is always first — and a “Test source” diagnoses a dead channel with HTTP status, detected format, item count, and a plain-language hint.",
    bullets: [
      "Every configured source queried in parallel — apibay, 1337x, Torznab",
      "Ranked best-match-first, with seeders / size / quality up front",
      "Source health checks built in: status, format, item count, hints",
    ],
    image: "/ghostwire/discover.png",
    imageAlt: "GhostWire Discover view searching every configured source at once",
    imageMode: "illustration",
  },
  {
    badge: "Movies",
    title: "Movies, with poster art for every shelf.",
    description:
      "Finished films land in a clean Movies library — sorted automatically, with posters fetched and cached for you. A “Recently added” feed buckets new arrivals by Today / This week / and beyond, so the next thing to watch is always at the top.",
    bullets: [
      "Posters and metadata pulled and cached automatically",
      "Recently-added rail bucketed Today / This week / and on",
      "Title, year, and runtime auto-extracted from the file",
    ],
    image: "/ghostwire/movies.png",
    imageAlt: "A grid of movie posters in GhostWire's Movies library",
    imageMode: "illustration",
  },
  {
    badge: "TV",
    title: "Shows, sorted by series and season.",
    description:
      "TV groups itself by series with season-and-episode aware sorting. A missing-episodes finder cross-references TVMaze so you can spot the gaps in a season at a glance, and one click sends you back to Discover with the right query already typed.",
    bullets: [
      "Series-and-season grouping, episode-aware sort",
      "Missing-episode finder backed by TVMaze",
      "One click to fill a gap from Discover",
    ],
    image: "/ghostwire/tv.png",
    imageAlt: "GhostWire's TV library grouped by series and season",
    imageMode: "illustration",
  },
  {
    badge: "Anime",
    title: "Anime gets its own room.",
    description:
      "Anime is sorted and posterized through a dedicated pipeline backed by AniList, Jikan, and Kitsu — so the artwork matches the source, the season numbering matches the franchise, and the catalog stays clean even when a series goes long.",
    bullets: [
      "Posters from AniList → Jikan → Kitsu (free, keyless)",
      "Franchise-aware season numbering",
      "Sub / dub indicators on the poster grid",
    ],
    image: "/ghostwire/anime.png",
    imageAlt: "GhostWire's Anime library grid with cover art",
    imageMode: "illustration",
  },
  {
    badge: "Books",
    title: "A reading shelf, alongside the rest.",
    description:
      "Books get their own room next to Movies, TV, and Anime — sorted by author and series, with covers and metadata fetched automatically. EPUB and PDF land directly in the library, ready to open in whatever reader you already use.",
    bullets: [
      "Sorted by author and series, with covers and metadata",
      "EPUB and PDF land in the library ready to read",
      "Opens through your existing reader — no built-in DRM, ever",
    ],
    image: "/ghostwire/books.png",
    imageAlt: "GhostWire's Books library showing covers grouped by author and series",
    imageMode: "illustration",
  },
  {
    badge: "Library",
    title: "Everything you keep, organized for you.",
    description:
      "Movies, TV, anime, music, books — every type lives in its own browsable room, with automatic sorting and box art for every shelf. No metadata wrangling, no folder rename rituals: GhostWire's local-AI organize pass keeps the library tidy without ever leaving your machine.",
    bullets: [
      "One library, every content type, sorted automatically",
      "Box art for movies, TV, anime, games, and albums",
      "Local-AI organize pass runs on Ollama, on-device only",
    ],
    image: "/ghostwire/library.png",
    imageAlt: "GhostWire's unified Library view with movies, TV, anime, and music sections",
    imageMode: "illustration",
  },
];

const STEPS = [
  {
    n: "01",
    t: "Add your sources",
    b: "Point GhostWire at the sources you want — The Pirate Bay (apibay), 1337x, or any Torznab indexer — and use “Test source” to confirm each one is alive.",
  },
  {
    n: "02",
    t: "Search every source at once",
    b: "One query fans out to all your sources, ranked best-match-first with seeders, size, and quality up front.",
  },
  {
    n: "03",
    t: "Press play, the rest takes care of itself",
    b: "Streaming starts before the download finishes, the file lands in a clean library with box art, and you can seed it back to the swarm.",
  },
];

const STATS = [
  { big: "5", l: "content rooms: Movies, TV, Anime, Music, Books" },
  { big: "3", l: "platforms — macOS (signed & notarized), Windows, and Linux" },
  { big: "0", l: "accounts, API keys, or sign-ins required" },
  { big: "1", l: "click to organize a messy folder with on-device AI" },
];

const TECH = [
  "librqbit torrent engine, in Rust",
  "Its own loopback streaming server, entirely local",
  "ffmpeg transcoding with hardware VideoToolbox on Mac",
  "Developer-ID signed & Apple-notarized macOS build",
  "Local-AI organizing via Ollama, on-device only",
  "Keyless artwork: TMDB / OMDb / iTunes for film + music, AniList / Jikan / Kitsu for anime",
];

const FAQ = [
  {
    q: "Is GhostWire legal to use?",
    a: "The app itself is a search, streaming, and library tool. It's framed and intended for legal and public-domain content — of which there's a vast amount: films, music, and shows whose copyright has expired or that were released freely. What you choose to search for is your responsibility; keep your dial on legal frequencies.",
  },
  {
    q: "Which platforms can run it?",
    a: "macOS (Apple Silicon + Intel), Windows, and Linux. The macOS build is Developer-ID signed and Apple-notarized, so it opens cleanly without wrestling Gatekeeper. It's a Tauri app, so it stays light on resources across all three.",
  },
  {
    q: "Do I need an account, and where does my data go?",
    a: "No account, ever. GhostWire is local-first by design: searching, streaming, organizing, and your entire library all live on your own machine. No sign-up, no telemetry pipeline, and the local-AI organize pass uses Ollama on your own hardware — nothing leaves the wire on your side of the wall.",
  },
  {
    q: "What's this ffmpeg and transcoding business about?",
    a: "Some video formats — MKV, AVI, HEVC — can't be decoded by the webview directly. GhostWire uses ffmpeg to transcode them on the fly into HLS so they play smoothly, with hardware VideoToolbox acceleration on Mac. It happens automatically in the background; you just press play.",
  },
  {
    q: "How can I stream before the download finishes?",
    a: "The librqbit torrent engine and a local loopback streaming server work together to serve the parts of the file you need as they arrive. Press play and watch immediately — scrubbing and seeking stay seamless while the rest is still coming in.",
  },
  {
    q: "What does it cost?",
    a: "Nothing. GhostWire is free — no account, no subscription, no upsell. Free as in clear signal.",
  },
];

export function GhostWirePage() {
  return (
    <AppPage
      themeId="ghostwire"
      title="GhostWire"
      tagline="Stream anything. Wait for nothing."
      description="A free desktop app that searches every source you configure, streams torrents while they download, and builds a tidy library with automatic box art — no account, no API keys, nothing leaves your machine."
      heroImage="/ghostwire/hero.png"
      icon="/ghostwire/app-icon.png"
      requirements="Free · No account, ever · macOS (signed & notarized), Windows, Linux · Runs entirely on your machine"
      featuresHeading="What it does"
      features={[
        {
          title: "Search every source at once",
          body: "One search hits every configured source in parallel, favors exact matches, and shows seeders, size, and quality at a glance — the best result is always first.",
        },
        {
          title: "Stream while it downloads",
          body: "Press play and watch immediately. Even MKV and other formats the browser can't decode are transcoded on the fly, with seamless seeking.",
        },
        {
          title: "A library that organizes itself",
          body: "Movies, TV, anime, music, and books each get their own room — sorted automatically, with poster art and metadata fetched for every shelf.",
        },
      ]}
      cta={{ kind: "github", repo: "GhostWire.tv" }}
      platforms={["macOS", "Windows", "Linux"]}
    >
      <div className="gw">
        <FeatureShowcase features={SHOWCASE} />

        {/* Three steps onto the wire */}
        <section className="gw-section">
          <div className="gw-head">
            <span className="gw-eyebrow">Tune in</span>
            <h2 className="gw-title">Three steps onto the wire</h2>
            <p className="gw-sub">
              No account, no setup wizard, no waiting. Add a source, search, and press play — GhostWire
              handles the rest while you watch.
            </p>
          </div>
          <div className="gw-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="gw-step">
                <div className="gw-step__n">{s.n}</div>
                <div className="gw-step__t">{s.t}</div>
                <p className="gw-step__b">{s.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What's on the wire */}
        <section className="gw-section">
          <div className="gw-head">
            <span className="gw-eyebrow">At a glance</span>
            <h2 className="gw-title">What's on the wire</h2>
            <p className="gw-sub">Real claims, no tall tales — everything below ships in the box and runs on your own machine.</p>
          </div>
          <div className="gw-stats">
            {STATS.map((s) => (
              <div key={s.l} className="gw-stat">
                <div className="gw-stat__big">{s.big}</div>
                <div className="gw-stat__l">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Under the hood */}
        <section className="gw-section">
          <div className="gw-tech">
            <span className="gw-eyebrow">Under the hood</span>
            <h2 className="gw-title">Built in Rust, run on the loopback</h2>
            <p className="gw-sub">
              GhostWire is a Tauri app: a Rust core under a dark, monochrome React interface. Torrents
              run on the librqbit engine and stream through their own loopback server on your machine, so
              playback never touches a remote service. Local-first isn't a slogan here — it's the architecture.
            </p>
            <div className="gw-chips">
              {TECH.map((c) => (
                <span key={c} className="gw-chip">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* On the air */}
        <section className="gw-section">
          <div className="gw-quote">
            <div className="gw-quote__mark">“</div>
            <p className="gw-quote__q">Stream the public domain — without sending anyone's signal home.</p>
            <p className="gw-quote__b">
              The public domain is the original open frequency: a century of films, music, and shows that belong
              to everyone, free for the watching. GhostWire carries that spirit, keyless and accountless, and
              routes it somewhere entirely legal.
            </p>
          </div>
        </section>

        {/* On the dial — FAQ */}
        <section className="gw-section">
          <div className="gw-head">
            <span className="gw-eyebrow">On the dial</span>
            <h2 className="gw-title">Questions before you tune in</h2>
          </div>
          <div className="gw-faq">
            {FAQ.map((f) => (
              <div key={f.q} className="gw-faq__item">
                <h3 className="gw-faq__q">{f.q}</h3>
                <p className="gw-faq__a">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Terms & disclaimer — kept small, at the very bottom of the page. */}
        <section className="gw-legal">
          <p>
            <strong>Terms &amp; Disclaimer.</strong> GhostWire is a general-purpose search, streaming,
            and library tool. It hosts, stores, and indexes no media of its own — every result comes
            from third-party sources that you choose to configure. You are solely responsible for the
            material you search for, download, stream, or share, and for ensuring it is lawful in your
            jurisdiction. Use only legal, authorized, or public-domain sources; do not use this software
            to infringe copyright or any other rights. The software is provided “as is,” without
            warranty of any kind, and the developer accepts no liability for how it is used or for any
            third-party content accessed through it. This notice is not legal advice.
          </p>
        </section>
      </div>
    </AppPage>
  );
}
