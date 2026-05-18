import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import "./AppPage.css";

const REPO = "https://github.com/InfamousVague/Peephole";

const FEATURES: { title: string; body: string }[] = [
  {
    title: "Live camera & mic status",
    body: "The menu-bar glyph flips the instant the camera or microphone goes active, so you always know when something is recording.",
  },
  {
    title: "Access history",
    body: "A running log of which app used the camera or mic and when — scroll back through the day's activity.",
  },
  {
    title: "Notifications",
    body: "Get alerted the moment an app starts using the camera or microphone. No special entitlements, no kernel extensions.",
  },
];

async function getRelease() {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Peephole/releases/latest");
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

export function PeepholePage() {
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
        <img src="/peephole/app-icon.png" alt="Peephole" className="app-page__icon" />
        <h1 className="app-page__title">Peephole</h1>
        <p className="app-page__tagline">See who's watching.</p>
        <p className="app-page__desc">
          A menu-bar sentinel for your camera and microphone. Peephole shows which
          apps are using them right now, keeps a history of access, and notifies
          you when something turns them on — no special entitlements, no kernel
          extensions.
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
          Nothing records without you knowing.
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
