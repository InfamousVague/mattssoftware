import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./GhostWire.css";

/// GhostWire's marketing page on mattssoftware.com — a detailed,
/// signal-themed landing page. Hero + download buttons come from AppPage;
/// the rich showcase + custom sections are passed as children.
///
/// Rebranded from "The Black Pearl" (the pirate-themed earlier name). The
/// product is the same Tauri media browser; this page now matches the
/// new GhostWire.tv identity — friendly Pixar ghost, electric-wire teal,
/// and copy that leans on signal / channel / broadcast metaphors instead
/// of nautical ones.
///
/// Cross-platform: the `platforms` prop makes AppPage render one download button
/// per OS, each resolving the matching asset (.dmg / .msi / .AppImage) from the
/// latest github.com/InfamousVague/GhostWire.tv release.
///
/// The feature-scene illustrations under /public/ghostwire are themed
/// placeholders; swap in the generated art at the same filenames.

const SHOWCASE: FeatureSection[] = [
  {
    badge: "Tune in",
    title: "One dial. Every channel.",
    description:
      "Turn the dial once and GhostWire pulls every configured source in unison: The Pirate Bay through the apibay JSON API, 1337x, and any Torznab indexer you add. Results come back ranked best-match-first, with a heavy thumb on the scale for exact title matches — so the thing you actually wanted lands at the top.",
    bullets: [
      "Seeders, size, and quality readable at a glance — no clicking through",
      "Exact-title matches strongly favored, so the right result surfaces first",
      "A “Test source” button diagnoses a dead channel: HTTP status, detected format, item count, and a plain-language hint",
    ],
    image: "/ghostwire/discover.png",
    imageAlt:
      "GhostWire Discover view: a single search bar above ranked results from multiple sources, each showing seeders, size, and quality.",
    imageMode: "illustration",
  },
  {
    badge: "Stream while downloading",
    title: "Press play. The wire takes over.",
    description:
      "Hit play and the picture starts now — not when the transfer finishes. On-the-fly HLS transcoding handles the formats a webview can't decode on its own, with hardware VideoToolbox acceleration on Mac doing the heavy lifting. Scrubbing and seeking stay smooth, even mid-download.",
    bullets: [
      "Watch immediately, long before 100%",
      "MKV, AVI, and HEVC play through ffmpeg transcoding — no fiddling",
      "Seamless scrubbing and seeking, even on a file that's still arriving",
    ],
    image: "/ghostwire/stream.png",
    imageAlt:
      "A video playing inside GhostWire while a download progress bar below sits well short of complete, the timeline scrubber mid-seek.",
    imageMode: "illustration",
  },
  {
    badge: "Library",
    title: "Everything you keep, on the shelf.",
    description:
      "Everything you decide to hold onto lands in a tidy library, sorted into Movies, TV, and Music. A cross-type “Recently added” feed buckets new arrivals into Today, This week, and beyond, while TV groups itself by series. A “find missing episodes” finder cross-references TVMaze so you can see the gaps in a season at a glance.",
    bullets: [
      "Movies, TV, and Music, cleanly grouped",
      "“Recently added” feed bucketed Today / This week / and on",
      "TV grouped by series with a missing-episodes finder backed by TVMaze",
    ],
    image: "/ghostwire/library.png",
    imageAlt:
      "GhostWire Library with Movies, TV, and Music sections, a Recently-added rail bucketed by Today and This week, and a TV series showing missing episodes flagged.",
    imageMode: "illustration",
  },
  {
    badge: "Music",
    title: "An iTunes-style shelf, neatly stacked.",
    description:
      "Drill from Artists into Albums into Tracks in a familiar, iTunes-style view that makes a big music collection easy to wander. Album art is pulled legitimately from Spotify's catalog API, so your shelves look the part without you lifting a finger. It's the listening room of the house, finally organized.",
    bullets: [
      "Artists → Albums → Tracks, no hunting through folders",
      "Album art pulled legitimately from Spotify's catalog API",
      "Built for browsing a real collection, not just one playlist",
    ],
    image: "/ghostwire/music.png",
    imageAlt:
      "An iTunes-style music browser in GhostWire showing an artist list, an album grid with cover art, and a track listing for the selected album.",
    imageMode: "illustration",
  },
  {
    badge: "Organize",
    title: "A friendly ghost tidies up.",
    description:
      "One click sics a local-AI pass on your messy download folder and turns the chaos into a clean, well-named library. It runs on Ollama, right on your laptop, so no cloud is involved and no data leaves the machine. You point; the ghost does the tidying.",
    bullets: [
      "One click to tidy and rename a cluttered download folder",
      "Runs locally on Ollama, on your own hardware",
      "No cloud, no uploads — nothing leaves your machine",
    ],
    image: "/ghostwire/organize.png",
    imageAlt:
      "Before-and-after of a download folder: cryptic torrent filenames on the left, a clean well-named Movies and TV library on the right, with a local-AI Organize button between them.",
    imageMode: "illustration",
  },
  {
    badge: "Downloads & Seeding",
    title: "Watch the wire, both ways.",
    description:
      "See every active transfer in one place — and just as clearly, see what you're seeding back to the swarm. Live upload speeds and peer counts show exactly what you're sharing in real time. A polite ghost gives a little back; here you can actually watch it happen.",
    bullets: [
      "Active downloads and active seeds in a single view",
      "Live upload speed and peer counts as you share back",
      "Real-time visibility into what you're giving the swarm",
    ],
    image: "/ghostwire/seeding.png",
    imageAlt:
      "GhostWire Downloads view listing active transfers alongside a seeding section with live upload speeds and peer counts for each shared item.",
    imageMode: "illustration",
  },
];

const STEPS = [
  {
    n: "01",
    t: "Add your channels",
    b: "Point GhostWire at The Pirate Bay (apibay), 1337x, or any Torznab indexer, and use “Test source” to confirm each one is alive.",
  },
  {
    n: "02",
    t: "Tune every channel at once",
    b: "One query fans out to all your sources, ranked best-match-first with seeders, size, and quality up front.",
  },
  {
    n: "03",
    t: "Press play, the wire takes over",
    b: "Streaming starts before the download finishes, the file lands in a clean library, and you can seed it back to the swarm.",
  },
];

const STATS = [
  { big: "3", l: "platforms — macOS (signed & notarized), Windows, and Linux" },
  { big: "3", l: "source types searched at once: apibay, 1337x, and Torznab" },
  { big: "0", l: "accounts, and zero bytes of your data sent to any cloud" },
  { big: "1", l: "click to organize a messy folder with on-device AI" },
];

const TECH = [
  "librqbit torrent engine, in Rust",
  "Its own loopback streaming server, entirely local",
  "ffmpeg transcoding with hardware VideoToolbox on Mac",
  "Developer-ID signed & Apple-notarized macOS build",
  "Local-AI organizing via Ollama, on-device only",
];

const FAQ = [
  {
    q: "Is GhostWire legal to use?",
    a: "The app itself is a search, streaming, and library tool. It's framed and intended for legal and public-domain content — of which there's a vast amount: films, music, and shows whose copyright has expired or that were released freely. What you choose to search for and download is your responsibility; we ask you to keep your dial on legal frequencies.",
  },
  {
    q: "Which platforms can run it?",
    a: "macOS, Windows, and Linux. The macOS build is Developer-ID signed and Apple-notarized, so it opens cleanly without wrestling Gatekeeper. It's a Tauri app, so it stays light on resources across all three.",
  },
  {
    q: "Do I need an account, and where does my data go?",
    a: "No account, ever. GhostWire is local-first by design: searching, streaming, organizing, and your entire library all live on your own machine. No sign-up, no telemetry pipeline, and the local-AI organize pass uses Ollama on your own hardware — nothing leaves the wire on your side of the wall.",
  },
  {
    q: "What's this ffmpeg and transcoding business about?",
    a: "Some video formats — MKV, AVI, HEVC — can't be decoded by the webview directly. GhostWire uses ffmpeg to transcode them on the fly into HLS so they play smoothly, with hardware VideoToolbox acceleration on Mac. It happens automatically in the background; you just press play, even before the download is done.",
  },
  {
    q: "How can I stream before the download finishes?",
    a: "The librqbit torrent engine and a local loopback streaming server work together to serve the parts of the file you need as they arrive. Press play and watch immediately — scrubbing and seeking stay seamless while the rest of the file is still coming in over the wire.",
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
      tagline="One ghost. Every wire."
      description="Tune every source at once, press play before the download lands, and watch a tidy library settle in on its own. Free, local-first, and built to roam the public domain."
      heroImage="/ghostwire/hero.png"
      icon="/ghostwire/app-icon.png"
      requirements="Free · No account, ever · macOS (signed & notarized), Windows, Linux · Runs entirely on your machine"
      featuresHeading="What it does"
      features={[
        {
          title: "Discover everything",
          body: "One search hits all your sources at once, favors exact matches, and shows seeders, size, and quality at a glance — so the best result is always first.",
        },
        {
          title: "Stream while it downloads",
          body: "Press play and watch immediately. Even MKV and other formats the browser can't decode are transcoded on the fly, with seamless seeking.",
        },
        {
          title: "A library that tidies itself",
          body: "Movies, shows, and music land in a clean, browsable library — album art from Spotify, an iTunes-style music view, and a local-AI organize pass.",
        },
      ]}
      cta={{ kind: "github", repo: "GhostWire.tv" }}
      platforms={["macOS", "Windows", "Linux"]}
    >
      <div className="gw">
        <FeatureShowcase features={SHOWCASE} />

        {/* Tune in — 3 steps */}
        <section className="gw-section">
          <div className="gw-head">
            <span className="gw-eyebrow">Tune in</span>
            <h2 className="gw-title">Three steps onto the wire</h2>
            <p className="gw-sub">
              No account, no setup wizard, no waiting. Add a channel, tune the dial, and press play —
              GhostWire handles the rest while you watch.
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

        {/* The signal kit — stats */}
        <section className="gw-section">
          <div className="gw-head">
            <span className="gw-eyebrow">The signal kit</span>
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

        {/* Under the hood — tech */}
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

        {/* On the air — quote */}
        <section className="gw-section">
          <div className="gw-quote">
            <div className="gw-quote__mark">“</div>
            <p className="gw-quote__q">Built to broadcast the public domain — not to steal anyone's signal.</p>
            <p className="gw-quote__b">
              The public domain is the original open frequency: a century of films, music, and shows that belong to
              everyone, free for the listening. We carry the spirit of it — and route it somewhere entirely legal.
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
