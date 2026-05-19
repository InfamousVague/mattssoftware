import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import "./AppPage.css";

const REPO = "https://github.com/InfamousVague/Fetch";

const FEATURES: { title: string; body: string }[] = [
  {
    title: "A real engine, self-contained",
    body: "A native Swift menu-bar app over libtorrent 2.0 — vendored and notarized, no Homebrew at runtime. Add a magnet, import a .torrent, pick a folder, watch downloads & seeding live.",
  },
  {
    title: "Legal sources, built in",
    body: "Internet Archive (broad search), Free media (LibriVox / Gutenberg / Blender / Prelinger), official Linux/BSD ISOs, and Academic Torrents — legal by source, not by fragile filtering.",
  },
  {
    title: "Extensible — neutrally",
    body: "Bring your own Torznab/Newznab indexer endpoint or RSS/Atom feeds, plus extra trackers. All user-supplied; Fetch ships and scrapes no index sites. What you point them at is yours.",
  },
];

async function getFetchRelease() {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Fetch/releases/latest");
    if (!res.ok) return { url: `${REPO}/releases/latest`, version: "" };
    const data = await res.json();
    const asset = data.assets?.[0];
    return {
      url: asset?.browser_download_url || `${REPO}/releases/latest`,
      version: data.tag_name || "",
    };
  } catch {
    return { url: `${REPO}/releases/latest`, version: "" };
  }
}

export function FetchPage() {
  const [downloadUrl, setDownloadUrl] = useState(`${REPO}/releases/latest`);
  const [version, setVersion] = useState("");

  useEffect(() => {
    getFetchRelease().then(({ url, version }) => {
      setDownloadUrl(url);
      setVersion(version);
    });
  }, []);

  return (
    <div className="app-page">
      <section className="app-page__hero">
        <img src="/fetch/app-icon.png" alt="Fetch" className="app-page__icon" />
        <h1 className="app-page__title">Fetch</h1>
        <p className="app-page__tagline">A native torrent client for legal content.</p>
        <p className="app-page__desc">
          A menu-bar BitTorrent client built on libtorrent. Legal media built in —
          Internet Archive, official Linux/BSD ISOs, Academic Torrents,
          public-domain/CC packs — plus your own Torznab/RSS sources.
        </p>
        <div className="app-page__actions">
          <a href={downloadUrl} className="btn btn--primary">
            <Download size={16} /> Download{version ? ` ${version}` : ""}
          </a>
          <a href={REPO} className="btn btn--ghost" target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> View on GitHub
          </a>
        </div>
        <span className="app-page__req">
          macOS 26+ &middot; Apple Silicon &middot; Free &middot; Notarized
        </span>
      </section>

      <section className="section">
        <h2 className="section__title" style={{ textAlign: "center" }}>
          Search it. Fetch it. Seed it.
        </h2>
        <div className="app-page__features">
          {FEATURES.map((f) => (
            <div key={f.title} className="app-page__feature">
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <a href={downloadUrl} className="btn btn--primary">
            <Download size={16} /> Download{version ? ` ${version}` : ""}
          </a>
        </div>
      </section>
    </div>
  );
}
