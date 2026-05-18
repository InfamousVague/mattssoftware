import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import "./AppPage.css";

const REPO = "https://github.com/InfamousVague/Quarantine";

const FEATURES: { title: string; body: string }[] = [
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
];

async function getRelease() {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Quarantine/releases/latest");
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

export function QuarantinePage() {
  const [downloadUrl, setDownloadUrl] = useState(`${REPO}/releases/latest`);
  const [version, setVersion] = useState("");

  useEffect(() => {
    getRelease().then(({ url, version }) => {
      setDownloadUrl(url);
      setVersion(version);
    });
  }, []);

  return (
    <div className="app-page">
      <section className="app-page__hero">
        <img src="/quarantine/app-icon.png" alt="Quarantine" className="app-page__icon" />
        <h1 className="app-page__title">Quarantine</h1>
        <p className="app-page__tagline">Trust, but verify every download.</p>
        <p className="app-page__desc">
          A menu-bar inspector for ~/Downloads. For every new file it surfaces the
          quarantine origin URL, Gatekeeper/codesign status, SHA-256, and an
          optional VirusTotal verdict — then notifies you so you can vet it before
          you open it.
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
          macOS 14+ &middot; Apple Silicon &middot; Free &middot; Developer ID signed
        </span>
      </section>

      <section className="section">
        <h2 className="section__title" style={{ textAlign: "center" }}>
          Know what just landed in Downloads.
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
