import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import "./AppPage.css";

const REPO = "https://github.com/InfamousVague/Stats";

const FEATURES: { title: string; body: string }[] = [
  {
    title: "Every system signal at a glance",
    body: "CPU per-core, memory pressure (with the wired/compressed/app/cache breakdown), disk read/write, network up/down, sensors, and a live top-process list — all in one compact menu-bar panel.",
  },
  {
    title: "Compact menu-bar widgets",
    body: "Choose which numbers (or a tiny live waveform) ride along in your status bar. Stays glanceable while you're working, never in the way.",
  },
  {
    title: "Sparklines, not spreadsheets",
    body: "Recent history is graphed for every signal, so a spike or a runaway process is obvious without trawling Activity Monitor.",
  },
];

async function getRelease() {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Stats/releases/latest");
    if (!res.ok) return { url: `${REPO}/releases/latest`, version: "" };
    const data = await res.json();
    const dmg = data.assets?.find((a: { name: string }) => a.name.endsWith(".dmg"));
    return {
      url: dmg?.browser_download_url || `${REPO}/releases/latest`,
      version: data.tag_name || "",
    };
  } catch {
    return { url: `${REPO}/releases/latest`, version: "" };
  }
}

export function StatsPage() {
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
        <img src="/stats/app-icon.png" alt="Stats" className="app-page__icon" />
        <h1 className="app-page__title">Stats</h1>
        <p className="app-page__tagline">
          Every system signal at a glance — in your menu bar.
        </p>
        <p className="app-page__desc">
          A native menu-bar system monitor. Live CPU per-core, memory pressure,
          disk read/write, network up/down, and sensor readings — plus optional
          compact widgets that ride along in the status bar and history
          sparklines for every signal, so you can spot a spike without opening
          Activity Monitor.
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
          macOS 14+ &middot; Apple Silicon &middot; Free &middot; Developer ID signed &amp; notarized
        </span>
      </section>

      <section className="section">
        <h2 className="section__title" style={{ textAlign: "center" }}>
          See the whole machine. Without the whole window.
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
