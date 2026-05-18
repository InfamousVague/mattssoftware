import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import "./AppPage.css";

const REPO = "https://github.com/InfamousVague/Sentry";

const FEATURES: { title: string; body: string }[] = [
  {
    title: "Every persistence vector",
    body: "LaunchAgents & Daemons, login items, cron, and shell startup files — every place something can dig in to survive a reboot, in one menu-bar list.",
  },
  {
    title: "Signature-aware",
    body: "Each target binary is classified notarized / signed / unsigned via spctl and codesign, so an unsigned launch agent stands out instantly.",
  },
  {
    title: "Alerts on change",
    body: "Snapshot diffing notifies you the moment a new persistence item appears or an existing one mutates. Click the alert to jump straight to it.",
  },
  {
    title: "Block what shouldn't be there",
    body: "Inspect any item's plist or script, then block it — Sentry unloads it and sets it aside as .sentry-disabled so it can't run. Reversible in one click; system-level items prompt for admin.",
  },
];

async function getRelease() {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Sentry/releases/latest");
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

export function SentryPage() {
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
        <img src="/sentry/app-icon.png" alt="Sentry" className="app-page__icon" />
        <h1 className="app-page__title">Sentry</h1>
        <p className="app-page__tagline">Know the moment something digs in.</p>
        <p className="app-page__desc">
          A menu-bar auditor for macOS persistence. It enumerates LaunchAgents &amp;
          Daemons, login items, cron, and shell startup files, checks each target's
          code-signature and notarization, and alerts you the instant a new or
          changed item appears — then lets you inspect, block, or restore it,
          right from the menu bar.
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
          Watch the places malware hides.
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
