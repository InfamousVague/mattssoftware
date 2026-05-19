import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CATALOG, CATEGORIES, type CatalogApp } from "../data/catalog";
import "../launcher.css";

const LAUNCHER_RELEASE =
  "https://github.com/InfamousVague/MattsSoftware-Launcher/releases/latest";

interface ReleaseInfo {
  url: string;
  version: string;
}

/// Latest release .dmg for an InfamousVague repo (same lookup the
/// launcher's backend does), with a graceful fallback to the
/// releases page if the API is unavailable / rate-limited.
async function getLatestRelease(repo: string): Promise<ReleaseInfo> {
  const fallback = {
    url: `https://github.com/InfamousVague/${repo}/releases/latest`,
    version: "",
  };
  try {
    // Newest-first; first release that actually ships a .dmg wins, so a
    // stray/assetless release (a tag with no CI build) can't break Download.
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

function ActionButton({
  app,
  release,
}: {
  app: CatalogApp;
  release?: ReleaseInfo;
}) {
  if (app.channel === "appstore") {
    return (
      <a
        className="ms-btn ms-btn--primary"
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        App Store
      </a>
    );
  }
  if (app.channel === "library") {
    return (
      <a
        className="ms-btn ms-btn--primary"
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
    );
  }
  const href =
    release?.url ??
    `https://github.com/InfamousVague/${app.githubRepo}/releases/latest`;
  return (
    <a className="ms-btn ms-btn--primary" href={href}>
      Download{release?.version ? ` ${release.version}` : ""}
    </a>
  );
}

function ViewButton({ app }: { app: CatalogApp }) {
  if (app.viewExternal) {
    return (
      <a
        className="ms-btn ms-btn--ghost"
        href={app.view}
        target="_blank"
        rel="noopener noreferrer"
      >
        View
      </a>
    );
  }
  return (
    <Link className="ms-btn ms-btn--ghost" to={app.view}>
      View
    </Link>
  );
}

function ChannelChip({ app }: { app: CatalogApp }) {
  if (app.channel === "appstore")
    return <span className="ms-chip ms-chip--info">App Store</span>;
  if (app.channel === "library")
    return <span className="ms-chip">Library</span>;
  return <span className="ms-chip">macOS</span>;
}

export function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [releases, setReleases] = useState<Record<string, ReleaseInfo>>({});

  useEffect(() => {
    let alive = true;
    Promise.all(
      CATALOG.filter((a) => a.channel === "github" && a.githubRepo).map(
        async (a) => [a.id, await getLatestRelease(a.githubRepo!)] as const,
      ),
    ).then((pairs) => {
      if (alive) setReleases(Object.fromEntries(pairs));
    });
    return () => {
      alive = false;
    };
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
    <div className="ms-app">
      {/* Web-only: nudge visitors to the native launcher (the
          launcher itself never shows this). */}
      <div className="ms-webbar">
        <img className="ms-webbar__icon" src="/launcher-icon.png" alt="" />
        <span className="ms-webbar__text">
          <b>Get everything in one app.</b> The MattsSoftware launcher
          installs and auto-updates every app below.
        </span>
        <a
          className="ms-webbar__cta"
          href={LAUNCHER_RELEASE}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the launcher
        </a>
      </div>

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
            <p>No apps match “{query}”.</p>
          </div>
        ) : (
          <div className="ms-grid">
            {filtered.map((app) => (
              <div className="ms-card-wrap" key={app.id}>
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
                      <div className="ms-card__foot">
                        <span className="ms-card__cat">{app.category}</span>
                        <span className="ms-card__actions">
                          <ViewButton app={app} />
                          <ActionButton
                            app={app}
                            release={releases[app.id]}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
