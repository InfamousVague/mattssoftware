import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import "./AppPage.css";

const REPO = "https://github.com/InfamousVague/Port";

const FEATURES: { title: string; body: string }[] = [
  {
    title: "Every open port, live",
    body: "A menu-bar list of every listening TCP/UDP port with the process and PID behind it, refreshing every second. Kill it, pause it (SIGSTOP/SIGCONT), or leave it.",
  },
  {
    title: "Forward & map",
    body: "Proxy any local port to another with a built-in TCP forwarder, expose it across your LAN, and punch it through your router with native NAT-PMP — no config.",
  },
  {
    title: "Connections on a map → Blip",
    body: "Active connections plotted on a live map by where they actually go. Click any endpoint to open it in Blip for deep inspection (or grab Blip if you don't have it).",
  },
];

async function getPortRelease() {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Port/releases/latest");
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

export function PortPage() {
  const [downloadUrl, setDownloadUrl] = useState(`${REPO}/releases/latest`);
  const [version, setVersion] = useState("");

  useEffect(() => {
    getPortRelease().then(({ url, version }) => {
      setDownloadUrl(url);
      setVersion(version);
    });
  }, []);

  return (
    <div className="app-page">
      <section className="app-page__hero">
        <img src="/port/app-icon.png" alt="Port" className="app-page__icon" />
        <h1 className="app-page__title">Port</h1>
        <p className="app-page__tagline">Every open port on your Mac, one click away.</p>
        <p className="app-page__desc">
          A tiny native menu-bar port manager. See what's listening, kill or pause the
          process, forward or NAT-PMP-map it, and watch active connections on a live
          map — click one to inspect it in Blip.
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
          macOS 14+ &middot; Apple Silicon &middot; Free &middot; Signed &amp; notarized
        </span>
      </section>

      <section className="section">
        <h2 className="section__title" style={{ textAlign: "center" }}>
          See it. Kill it. Forward it.
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
