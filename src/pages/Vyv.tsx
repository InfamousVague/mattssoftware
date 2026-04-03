import { useEffect, useState } from "react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./AppPage.css";

const FEATURES: FeatureSection[] = [
  {
    badge: "Keep Awake",
    title: "Your computer wants to sleep. Vyv disagrees.",
    description: "One click and your machine stays awake. Timed sessions from 5 minutes to 8 hours, or just leave it on forever. No more presentations interrupted by screensavers.",
    bullets: [
      "Preset timers: 5 min, 15 min, 30 min, 1 hour, 2 hours, 4 hours, 8 hours",
      "Indefinite mode for when you mean business",
      "Keep display on or let it sleep while the system stays awake",
      "Runs entirely from the system tray — zero clutter",
    ],
    imageAlt: "Vyv keep-awake timer interface",
  },
  {
    badge: "Mouse Jiggle",
    title: "Fool your status indicator",
    description: "Slack says you're away. Teams says you're idle. Your boss is asking questions. Vyv's mouse jiggle moves the cursor just enough to keep you looking active. We don't judge.",
    bullets: [
      "Sub-pixel mouse movement — invisible but effective",
      "Defeats idle detection in Slack, Teams, Zoom, and more",
      "Toggle independently from keep-awake",
      "Your secret is safe with us",
    ],
    imageAlt: "Vyv mouse jiggle feature",
  },
  {
    badge: "Safety",
    title: "Panic button included",
    description: "Ctrl+Shift+Escape instantly kills everything. Display wakes, jiggle stops, timers cancel. For when your boss walks in or you actually need to sleep.",
    bullets: [
      "Global hotkey works from any app",
      "Instant deactivation — no menus, no clicks",
      "Lid-closed override for laptop users on macOS",
      "Lifetime stats track your total uptime with milestone celebrations",
    ],
    imageAlt: "Vyv panic hotkey and safety features",
  },
];

async function getVyvDownloadUrl(): Promise<string> {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Vyv/releases/latest");
    if (!res.ok) return "https://github.com/InfamousVague/Vyv/releases/latest";
    const data = await res.json();
    const asset = data.assets?.[0];
    return asset?.browser_download_url || "https://github.com/InfamousVague/Vyv/releases/latest";
  } catch {
    return "https://github.com/InfamousVague/Vyv/releases/latest";
  }
}

export function VyvPage() {
  const [downloadUrl, setDownloadUrl] = useState("https://github.com/InfamousVague/Vyv/releases/latest");

  useEffect(() => {
    getVyvDownloadUrl().then(setDownloadUrl);
  }, []);

  return (
    <div className="app-page">
      <section className="app-page__hero">
        <h1 className="app-page__title">Vyv</h1>
        <p className="app-page__tagline">Like Caffeine, but open source and cross-platform.</p>
        <p className="app-page__desc">
          Keep your computer awake. Jiggle your mouse. Look busy. All from the system tray.
        </p>
        <div className="app-page__actions">
          <a href={downloadUrl} className="btn btn--primary">Download</a>
          <a href="https://github.com/InfamousVague/Vyv" className="btn btn--ghost" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <span className="app-page__req">macOS &middot; Windows &middot; Linux &middot; Free &amp; Open Source</span>
      </section>

      <FeatureShowcase features={FEATURES} />

      <section className="section" style={{ textAlign: "center" }}>
        <h2 className="section__title">Stay awake. Stay active. Stay employed.</h2>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32 }}>
          <a href={downloadUrl} className="btn btn--primary">Download</a>
          <a href="https://github.com/InfamousVague/Vyv" className="btn btn--ghost" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </section>
    </div>
  );
}
