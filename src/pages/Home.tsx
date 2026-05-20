import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowRight, ArrowDown } from "lucide-react";
import { CATALOG, CATEGORIES, type CatalogApp } from "../data/catalog";
import "../launcher.css";
import "./Home.css";

const LAUNCHER_RELEASE =
  "https://github.com/InfamousVague/MattsSoftware-Launcher/releases/latest";

interface ReleaseInfo {
  url: string;
  version: string;
}

async function getLatestRelease(repo: string): Promise<ReleaseInfo> {
  const fallback = {
    url: `https://github.com/InfamousVague/${repo}/releases/latest`,
    version: "",
  };
  try {
    const res = await fetch(
      `https://api.github.com/repos/InfamousVague/${repo}/releases?per_page=20`,
    );
    if (!res.ok) return fallback;
    const releases = await res.json();
    if (!Array.isArray(releases)) return fallback;
    for (const rel of releases) {
      if (rel.draft) continue;
      const dmg = rel.assets?.find((a: { name: string }) =>
        a.name.endsWith(".dmg"),
      );
      if (dmg) return { url: dmg.browser_download_url, version: rel.tag_name || "" };
    }
    return fallback;
  } catch {
    return fallback;
  }
}

/// Whole-card link. Each launcher grid card is wholly clickable — the
/// in-card "View" / "Download" buttons used to live here but they
/// crowded the icon and forced a hover-target choice. Now the entire
/// card is the View target; standalone Download lives on each app's
/// own marketing page. Routes internally for marketing pages, opens
/// in a new tab for external destinations (like libre.academy).
function CardLink({ app, children }: { app: CatalogApp; children: React.ReactNode }) {
  if (app.viewExternal) {
    return (
      <a
        href={app.view}
        target="_blank"
        rel="noopener noreferrer"
        className="ms-card-wrap"
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={app.view} className="ms-card-wrap">
      {children}
    </Link>
  );
}

function ChannelChip({ app }: { app: CatalogApp }) {
  if (app.channel === "appstore")
    return <span className="ms-chip ms-chip--info">App Store</span>;
  if (app.channel === "library")
    return <span className="ms-chip">Library</span>;
  // GitHub-distributed apps: render the platform list. Apps that
  // explicitly ship to macOS + Windows + Linux (Espresso, Libre)
  // collapse to a friendly "Cross-platform" pill; everything else
  // shows just "macOS".
  const platforms = app.platforms ?? ["macOS"];
  const label = platforms.length > 1 ? "Cross-platform" : platforms[0];
  return <span className="ms-chip">{label}</span>;
}

export function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [launcher, setLauncher] = useState<ReleaseInfo>({ url: LAUNCHER_RELEASE, version: "" });

  useEffect(() => {
    let alive = true;
    // Just the launcher's release info — per-app release lookups were
    // here for the now-removed in-card Download button; without that
    // button there's no reason to hit the GitHub API 13 times on every
    // home page visit.
    getLatestRelease("MattsSoftware-Launcher").then((info) => {
      if (alive) setLauncher(info);
    });
    return () => { alive = false; };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATALOG.filter((a) => {
      if (category !== "All" && a.category !== category) return false;
      if (!q) return true;
      return (
        a.name.toLowerCase().includes(q) ||
        a.tagline.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [query, category]);

  return (
    <div className="home-root">
      {/* ============================================================
       * Playful hero — cream shelf illustration on the left, big
       * Cabinet-Grotesk headline on the right, two CTAs. This is
       * the visual that says "this is a curated little shop of apps".
       * ============================================================ */}
      <section className="home-hero">
        <div className="home-hero__bg" aria-hidden />
        <div className="home-hero__inner">
          <div className="home-hero__art">
            <img
              src="/_brand/home-hero-desk.png"
              alt="A wooden desk diorama: brass lamp, sailboat, espresso cup, shield, brass safe, ECG card, butler bust, ribbon snake, and the MattsSoftware squircle in the back — a tiny model of every app on the site"
              className="home-hero__img"
            />
          </div>
          <div className="home-hero__text">
            <span className="home-hero__eyebrow">Matt's Software</span>
            <h1 className="home-hero__title">
              Tiny apps that earn their keep.
            </h1>
            <p className="home-hero__sub">
              A small, curated shop of {CATALOG.length}+ tiny, free apps.
              One launcher installs them all and keeps them up to date —
              or grab any one on its own.
            </p>
            <div className="home-hero__actions">
              <a className="btn btn--primary btn--lg" href={launcher.url}>
                <Download size={16} />
                Download the launcher{launcher.version ? ` ${launcher.version}` : ""}
              </a>
              <a className="btn btn--ghost btn--lg" href="#suite">
                Browse the suite <ArrowDown size={16} />
              </a>
            </div>
            <p className="home-hero__req">
              {/* Honest about the current launcher target without
                  committing the brand to macOS — once the launcher
                  itself ships to Windows / Linux this line drops the
                  qualifier. */}
              Free  ·  Open source  ·  macOS today, more soon
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
       * Launcher-replica strip — the real grid the launcher shows,
       * here on the web so visitors can browse without installing
       * anything. Anchored at #suite so the hero CTA scrolls here.
       *
       * Wrapped in `home-launcher-shell` so a warm cream "shelf"
       * halo can sit BEHIND the dark launcher card (Home.css adds
       * the shelf via the wrapper's ::before). The launcher card
       * itself keeps its dark `.ms-*` look because that's the real
       * menu-bar launcher's appearance.
       * ============================================================ */}
      <div className="home-launcher-shell">
      <div id="suite" className="ms-app home-launcher">
        <header className="ms-titlebar">
          <div className="ms-brand">
            <img
              className="ms-brand__mark"
              src="/brandmark.png"
              alt="MattsSoftware"
            />
            <div className="ms-brand__text">
              <span className="ms-brand__name">MattsSoftware</span>
              <span className="ms-brand__sub">
                Every app I've built, in one place
              </span>
            </div>
          </div>
          <div className="ms-titlebar__tools">
            <input
              className="ms-search-input"
              type="search"
              placeholder="Search apps…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search apps"
            />
          </div>
        </header>

        <nav className="ms-filters" aria-label="Categories">
          {["All", ...CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              className={"ms-filter" + (category === c ? " ms-filter--active" : "")}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </nav>

        <main className="ms-main">
          {filtered.length === 0 ? (
            <div className="ms-empty">
              {/* Empty state — the ribbon snake from 404 is reused
                  here until a dedicated empty-shelf illustration
                  lands (see REBRAND-ASSET-PROMPTS.md, Tier 1). */}
              <img
                src="/_brand/404-lost-snake.png"
                alt=""
                className="ms-empty__art"
              />
              <p className="ms-empty__line">
                Nothing here matches <strong>"{query}"</strong>.
              </p>
              <p className="ms-empty__sub">
                Try a different word, or clear the search to see everything.
              </p>
              <button
                type="button"
                className="ms-btn ms-btn--ghost"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                }}
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="ms-grid">
              {filtered.map((app) => (
                <CardLink app={app} key={app.id}>
                  <div className="ms-card-outlined">
                    <div className="ms-card">
                      <img
                        className="ms-card__icon"
                        src={app.icon}
                        alt=""
                        draggable={false}
                      />
                      <div className="ms-card__body">
                        <div className="ms-card__head">
                          <h3 className="ms-card__name">{app.name}</h3>
                          <ChannelChip app={app} />
                        </div>
                        <p className="ms-card__tagline">{app.tagline}</p>
                        <span className="ms-card__cat">{app.category}</span>
                      </div>
                    </div>
                  </div>
                </CardLink>
              ))}
            </div>
          )}
        </main>
      </div>
      </div>

      {/* ============================================================
       * "How it works" — three-step reassurance under the grid.
       * ============================================================ */}
      <section className="section home-how">
        <span className="eyebrow">How it works</span>
        <h2 className="section__title">One launcher. {CATALOG.length} apps. No store account.</h2>
        <div className="home-how__steps">
          <div className="home-how__step">
            <span className="home-how__num">1</span>
            <h3>Install the launcher</h3>
            <p>A tiny 6 MB native app. Signed, notarized, no telemetry. It's the host every other app folds into.</p>
          </div>
          <div className="home-how__step">
            <span className="home-how__num">2</span>
            <h3>Pick what you need</h3>
            <p>Browse the suite, install only the ones you want. Each app is a separate signed .dmg from GitHub — no marketplace lock-in.</p>
          </div>
          <div className="home-how__step">
            <span className="home-how__num">3</span>
            <h3>One launcher, every app</h3>
            <p>All your installed apps fold into the launcher, with auto-updates. Or run any of them standalone — your choice.</p>
          </div>
        </div>
      </section>

      {/* ============================================================
       * Mascot strip — the cat naps next to a desk that has the
       * music turned up. Copy reflects the actual personality: not
       * a quiet artisan, an extrovert pounding keys to loud music.
       * ============================================================ */}
      <section className="home-mascot">
        <img
          src="/_brand/cat-mascot.png"
          alt="A white iridescent cat curled around a blueprint and a coffee mug — somehow sleeping through the music"
          className="home-mascot__img"
        />
        <h2 className="home-mascot__line">Built loud. Shipped fast. Always free.</h2>
        <p className="home-mascot__sub">
          A one person shop! Every app is open source, signed, notarized,
          and free. No ads, no telemetry, no upsells.
        </p>
        <a
          className="home-mascot__cta"
          href="https://github.com/InfamousVague"
          target="_blank"
          rel="noopener noreferrer"
        >
          See it all on GitHub <ArrowRight size={14} />
        </a>
      </section>
    </div>
  );
}
