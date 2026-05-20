import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import "./AppPage.css";

const REPO = "https://github.com/InfamousVague/StickyKeys";

const FEATURES: { title: string; body: string }[] = [
  {
    title: "Lock everything in one click",
    body: "An active keyboard tap swallows every key, modifier, and media key system-wide — wipe the keys without firing a single shortcut.",
  },
  {
    title: "Frosted full-screen overlay",
    body: "A clear, untinted blur covers every display so you can see at a glance the keyboard is locked, with a live auto-unlock countdown.",
  },
  {
    title: "Mouse-only unlock, never trapped",
    body: "Unlock from the overlay button or the menu-bar icon, and a safety auto-unlock fires no matter what so you can never get stuck.",
  },
];

async function getRelease() {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/StickyKeys/releases/latest");
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

export function StickyKeysPage() {
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
        <img src="/stickykeys/app-icon.png" alt="StickyKeys" className="app-page__icon" />
        <h1 className="app-page__title">StickyKeys</h1>
        <p className="app-page__tagline">
          Lock the keyboard so a cleaning cloth can't fire shortcuts.
        </p>
        <p className="app-page__desc">
          A tiny menu-bar app. Click to lock the keyboard, wipe down the keys with
          a microfiber cloth without launching apps, sending emails, or quitting
          your work, then click the overlay to unlock. A frosted full-screen
          overlay covers every monitor, the mouse stays live, and a safety
          auto-unlock means you can never get trapped.
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
          Wipe the keys. Run nothing.
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
