import { useEffect, useState } from "react";
import { Download, ExternalLink, Coffee, Smartphone, Monitor } from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
// Reuses Tap.css for now — the `tap-hero` / `tap-stats` / etc.
// class set is generic enough (despite the name) and styles the
// same hero + stats-bar + use-cases shape this page uses.
// Future cleanup: rename those to `appPage-*` or extract to a
// shared sheet so non-Tap pages don't reach across by name.
import "./Tap.css";

// Hardcoded English copy on purpose. The newer pages on this
// site (Stats, Sentry, Quarantine, …) localize through
// src/i18n/locales/* against a strict BaseAppCopy shape, which
// requires every one of the 9 supported locales to gain a
// matching `espresso` block before TypeScript will compile. To
// keep this landing page shippable in a single commit, mirrors
// the older Tap.tsx pattern of inline strings and skips the
// i18n round-trip. Easy to retrofit later — add the espresso
// key to BaseAppCopy + each locale and swap these strings out.

const FEATURES: FeatureSection[] = [
  {
    badge: "macOS · Menu Bar",
    title: "Stay awake from your menu bar.",
    description:
      "Native macOS menu-bar agent. Click the cup glyph, pick a " +
      "duration, done — your Mac stays awake until the timer runs " +
      "out. Real IOPMAssertion under the hood, not a fake screensaver " +
      "blocker; the whole system stays alert, not just the display.",
    bullets: [
      "Duration grid: 5m / 10m / 15m / 30m / 45m / 1h / 2h / 4h / 8h / ∞",
      "Display + System mode (keeps the screen on) or System-only (CPU stays awake, display can sleep)",
      "Mouse jiggle for Slack / Teams / Zoom idle defeat",
      "Prevent sleep when the lid is closed (installs a scoped sudo rule; removable)",
      "Launch at login + LSUIElement (no Dock icon)",
    ],
    imageAlt: "Espresso macOS menu-bar panel",
  },
  {
    badge: "iOS · Live Activity",
    title: "Keep your iPhone screen awake — with a countdown in the Dynamic Island.",
    description:
      "Single-screen iOS app. Pick a duration, tap, and your phone " +
      "screen won't dim or lock while the app is open. The Dynamic " +
      "Island and Lock Screen carry a live countdown courtesy of " +
      "ActivityKit — you don't have to open the app to see how much " +
      "time is left.",
    bullets: [
      "Same duration grid as the Mac (10 cells, 5m → ∞)",
      "Activity reason chips — Reading, Watching, Cooking, Other — surface in the Live Activity",
      "Brightness boost (optional): max screen while awake, restore when stopped",
      "Live Activity in the Dynamic Island (iPhone 14 Pro+) + Lock Screen",
      "Native SwiftUI, iOS 17+",
    ],
    imageAlt: "Espresso iOS app + Live Activity in the Dynamic Island",
  },
  {
    badge: "Cross-platform brand",
    title: "Same cup, same logic, different OS.",
    description:
      "Both apps share the duration grid, the activity-reason " +
      "vocabulary, and the cup-and-saucer brand mark. Pick the " +
      "platform that fits your scenario: Mac for builds + meetings + " +
      "downloads that need the system fully awake; iPhone for " +
      "reading, watching, cooking, or any moment where you want the " +
      "screen up but the phone in hand.",
    bullets: [
      "macOS: Developer ID signed + notarized; ships as a .dmg via the launcher",
      "iOS: free Apple ID sideload supported; paid Developer Program → indefinite install + TestFlight",
      "Open source — github.com/InfamousVague/Espresso",
      "Identical amber accent (#C8995A) and SF Symbol cup glyph across platforms",
    ],
    imageAlt: "Espresso on Mac and iPhone side by side",
  },
];

const STATS = [
  { value: "2 platforms", label: "Mac + iPhone" },
  { value: "10 presets", label: "5m to ∞" },
  { value: "1-tap", label: "On / off" },
  { value: "MIT", label: "Open source" },
];

const USE_CASES = [
  { emoji: "🛠️", text: "Long Xcode build on the Mac — stay awake until it's done" },
  { emoji: "🎥", text: "Watching a video on iPhone — no auto-lock interrupting it" },
  { emoji: "🍳", text: "Recipe open on the phone, hands covered in flour" },
  { emoji: "📖", text: "Reading a long article without thumb-tapping every 30s" },
  { emoji: "👔", text: "Slack idle detection thinks you're asleep — mouse jiggle disagrees" },
  { emoji: "💻", text: "Lid closed on the Mac, big download finishing on Ethernet" },
];

interface ReleaseInfo {
  url: string;
  version: string;
}

async function getRelease(repo: string): Promise<ReleaseInfo> {
  const fallback = {
    url: `https://github.com/InfamousVague/${repo}/releases/latest`,
    version: "",
  };
  try {
    const res = await fetch(
      `https://api.github.com/repos/InfamousVague/${repo}/releases/latest`
    );
    if (!res.ok) return fallback;
    const data = await res.json();
    const dmg = data.assets?.find(
      (a: { name: string }) => a.name.toLowerCase().endsWith(".dmg")
    );
    return {
      url: dmg?.browser_download_url || fallback.url,
      version: data.tag_name || "",
    };
  } catch {
    return fallback;
  }
}

export function EspressoPage() {
  const [mac, setMac] = useState<ReleaseInfo>({
    url: "https://github.com/InfamousVague/Espresso/releases/latest",
    version: "",
  });

  useEffect(() => {
    getRelease("Espresso").then(setMac);
  }, []);

  return (
    <div className="app-page espresso-page">
      {/* Hero */}
      <section className="tap-hero">
        <img
          src="/espresso/app-icon.png"
          alt="Espresso"
          className="tap-hero__app-icon"
        />
        <h1 className="tap-hero__title">Espresso</h1>
        <p className="tap-hero__tagline">
          Keep your devices awake. Mac or iPhone.
        </p>
        <p className="tap-hero__subtitle">
          A menu-bar coffee shot for your Mac.
          A single-screen Live Activity for your iPhone.
          <br />
          Same brand, same duration grid, two platforms.
        </p>
        <div className="tap-hero__badges">
          <span>macOS</span>
          <span>iOS</span>
          <span>Free &amp; Open Source</span>
        </div>
        <div className="tap-hero__buttons">
          <a
            href={mac.url}
            className="btn btn--tap-appstore"
            target="_blank"
            rel="noopener"
          >
            <Download size={18} />
            Download for Mac{mac.version ? ` (${mac.version})` : ""}
          </a>
          <a
            href="https://github.com/InfamousVague/Espresso"
            className="btn btn--tap"
            target="_blank"
            rel="noopener"
          >
            <ExternalLink size={18} /> GitHub
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="tap-stats">
        {STATS.map((stat) => (
          <div key={stat.label} className="tap-stats__item">
            <span className="tap-stats__value">{stat.value}</span>
            <span className="tap-stats__label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features">
        <FeatureShowcase features={FEATURES} />
      </section>

      {/* Platform availability bar */}
      <section className="tap-arch">
        <h2>Where it runs</h2>
        <div className="tap-arch__diagram">
          <div className="tap-arch__node tap-arch__node--mac">
            <Monitor size={24} />
            <span>macOS · Menu bar</span>
          </div>
          <div className="tap-arch__connector">
            <Coffee size={18} />
          </div>
          <div className="tap-arch__node tap-arch__node--companion">
            <Smartphone size={24} />
            <span>iOS · Live Activity</span>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="tap-usecases">
        <h2>When you'd reach for it</h2>
        <div className="tap-usecases__grid">
          {USE_CASES.map((uc) => (
            <div key={uc.text} className="tap-usecases__item">
              <span className="tap-usecases__emoji">{uc.emoji}</span>
              <span>{uc.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* iOS sideload note */}
      <section className="tap-tech">
        <h2>Getting Espresso on your iPhone</h2>
        <div className="tap-tech__grid">
          <div className="tap-tech__item">
            <strong>Free Apple ID</strong>
            <span>
              Sideload via Xcode for free. The certificate expires every
              7 days so you'll need to re-sign — fine for personal use.
            </span>
          </div>
          <div className="tap-tech__item">
            <strong>Paid Developer Program</strong>
            <span>
              $99/year. Indefinite install + TestFlight distribution to
              friends. Required for App Store submission.
            </span>
          </div>
          <div className="tap-tech__item">
            <strong>Source</strong>
            <span>
              <code>github.com/InfamousVague/Espresso</code> → open
              <code>espresso-mobile/Espresso.xcodeproj</code> in Xcode,
              sign in with your Apple ID, hit Run.
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tap-cta">
        <h2>Pour one.</h2>
        <p>Free forever. Open source. Pick the platform that fits.</p>
        <div className="tap-cta__buttons">
          <a
            href={mac.url}
            className="btn btn--tap-appstore"
            target="_blank"
            rel="noopener"
          >
            <Download size={18} /> Mac{mac.version ? ` ${mac.version}` : ""}
          </a>
          <a
            href="https://github.com/InfamousVague/Espresso"
            className="btn btn--tap"
            target="_blank"
            rel="noopener"
          >
            <ExternalLink size={18} /> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
