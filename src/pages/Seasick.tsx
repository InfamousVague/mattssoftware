import { useEffect, useState } from "react";
import { Download, ExternalLink, Compass, Smartphone, Monitor, Headphones } from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
// Reuses Tap.css for the hero/stats/usecases/arch class set —
// the visual shape is identical and these classes are generic
// enough despite the namespacing. Same pattern Espresso.tsx
// uses; cleanup-by-renaming-them-to-appPage-* is a future task.
import "./Tap.css";

// Hardcoded English copy. The newer pages on the site (Stats,
// Sentry, Quarantine, …) localize through src/i18n/locales/*
// against a strict BaseAppCopy shape — would require adding
// an `seasick` block to every one of the 9 locales before
// TypeScript will compile. Mirrors the older Tap/Espresso
// landing-page approach to keep this shippable in one commit.

const FEATURES: FeatureSection[] = [
  {
    badge: "macOS · Overlay",
    title: "Motion cues, in the corner of every screen.",
    description:
      "A click-through, all-Spaces, fullscreen-auxiliary overlay drifts " +
      "a soft particle field across every connected display. The dots " +
      "track real-world motion: tilt your laptop, lean the car, sway " +
      "the boat — the field drifts opposite the motion, the same " +
      "vestibular-cue trick Apple ships on iPhone as Motion Cues. " +
      "Never steals focus, never grabs the mouse, never appears in " +
      "screenshots taken at default fidelity.",
    bullets: [
      "Borderless NSPanel at .screenSaver level, click-through everywhere",
      "Per-screen overlay manager — works on multi-monitor setups out of the box",
      "Particle density / size / opacity all tunable from the menu-bar popover",
      "Goes idle when no motion is detected — no flicker, no battery drain",
    ],
    imageAlt: "Seasick overlay drifting particles across a Mac display",
  },
  {
    badge: "Motion sources",
    title: "Three ways to know where you're moving.",
    description:
      "Seasick auto-picks the best motion source available on your " +
      "machine. No special hardware needed for most users — the " +
      "MacBook's built-in tilt sensor is plenty. Desktop Macs with no " +
      "sensor can pair AirPods or use the optional iPhone companion " +
      "to extend the feature to any setup.",
    bullets: [
      "MacBook sudden-motion sensor via IOKit (works on most Intel + Apple Silicon laptops)",
      "AirPods Pro / 3 / Max via CMHeadphoneMotionManager — full 6-DOF motion",
      "iPhone companion app (separate target) streams CoreMotion data over Bonjour to your Mac",
      "Auto-fallback: best source wins, switches live if a better one becomes available",
    ],
    image: "/seasick/feature-sources.png",
    imageMode: "illustration",
    imageAlt: "Chibi MacBook, AirPods, and iPhone feeding motion data to a receiver MacBook",
  },
  {
    badge: "iOS · Companion",
    title: "Hold your phone, your Mac feels it.",
    description:
      "The iPhone target is a tiny CoreMotion streamer. Open it on " +
      "the same Wi-Fi as your Mac, hit Start streaming, and your " +
      "Mac's overlay starts tracking your phone's tilt and " +
      "acceleration in real time. Useful on a Mac mini / Studio / " +
      "iMac / Mac Pro where there's no built-in sensor and no " +
      "AirPods handy.",
    bullets: [
      "Bonjour discovery — no IP / port wrangling, finds the Mac automatically",
      "Native Swift + SwiftUI, iOS 17+",
      "Keeps the screen on while streaming so it doesn't sleep mid-trip",
      "One-tap start/stop with a pulse indicator showing live motion magnitude",
    ],
    image: "/seasick/feature-iphone.png",
    imageMode: "illustration",
    imageAlt: "Chibi iPhone in a hand streaming motion dots to a chibi MacBook's overlay",
  },
];

const STATS = [
  { value: "Click-through", label: "Never steals focus" },
  { value: "Multi-screen", label: "Every display" },
  { value: "3 sources", label: "SMS / AirPods / iPhone" },
  { value: "MIT", label: "Open source" },
];

const USE_CASES = [
  { emoji: "🚗", text: "Passenger seat on a long drive — no more carsick laptop" },
  { emoji: "🚆", text: "Working on Amtrak through Pennsylvania bends" },
  { emoji: "🛥️", text: "Boats. The original use case. It's in the name." },
  { emoji: "✈️", text: "Window seat, slight turbulence, deadline looming" },
  { emoji: "🚌", text: "Bus rides where reading would normally make you queasy" },
  { emoji: "🏃", text: "Treadmill-desk hybrid setups where the laptop sways" },
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
      `https://api.github.com/repos/InfamousVague/${repo}/releases/latest`,
    );
    if (!res.ok) return fallback;
    const data = await res.json();
    const dmg = data.assets?.find(
      (a: { name: string }) => a.name.toLowerCase().endsWith(".dmg"),
    );
    return {
      url: dmg?.browser_download_url || fallback.url,
      version: data.tag_name || "",
    };
  } catch {
    return fallback;
  }
}

export function SeasickPage() {
  const [mac, setMac] = useState<ReleaseInfo>({
    url: "https://github.com/InfamousVague/Seasick/releases/latest",
    version: "",
  });

  useEffect(() => {
    getRelease("Seasick").then(setMac);
  }, []);

  return (
    <div className="app-page seasick-page">
      {/* Hero */}
      <section className="tap-hero">
        <img
          src="/seasick/app-icon.png"
          alt="Seasick"
          className="tap-hero__app-icon"
        />
        <h1 className="tap-hero__title">Seasick</h1>
        <p className="tap-hero__tagline">
          Motion cues for your Mac — Apple's iPhone trick, on the desktop.
        </p>
        <p className="tap-hero__subtitle">
          A subtle particle field drifts across your screen against
          the direction of travel. Less motion sickness in cars, trains,
          planes, boats — anywhere your visual frame and your inner ear
          disagree.
          <br />
          MacBook sensor, AirPods motion, or your iPhone as a streamer.
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
            href="https://github.com/InfamousVague/Seasick"
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

      {/* Motion-source diagram */}
      <section className="tap-arch">
        <h2>Where the motion comes from</h2>
        <div className="tap-arch__diagram">
          <div className="tap-arch__node tap-arch__node--mac">
            <Monitor size={24} />
            <span>MacBook · SMS</span>
          </div>
          <div className="tap-arch__connector">
            <Compass size={18} />
          </div>
          <div className="tap-arch__node tap-arch__node--companion">
            <Headphones size={24} />
            <span>AirPods · CMHeadphoneMotion</span>
          </div>
          <div className="tap-arch__connector">
            <Compass size={18} />
          </div>
          <div className="tap-arch__node tap-arch__node--mac">
            <Smartphone size={24} />
            <span>iPhone · CoreMotion stream</span>
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

      {/* Honest hardware reality */}
      <section className="tap-tech">
        <h2>Honest hardware reality</h2>
        <div className="tap-tech__grid">
          <div className="tap-tech__item">
            <strong>MacBook</strong>
            <span>
              Most models — including many Apple Silicon — expose the
              sudden-motion sensor (SMS) via IOKit. Seasick reads x/y
              tilt and the overlay just works.
            </span>
          </div>
          <div className="tap-tech__item">
            <strong>AirPods Pro / 3 / Max</strong>
            <span>
              Provides full 6-DOF motion via
              CMHeadphoneMotionManager on macOS 14+. Plays nice with
              SMS; auto-picks the highest-quality source.
            </span>
          </div>
          <div className="tap-tech__item">
            <strong>Desktop Macs without AirPods</strong>
            <span>
              No built-in motion source. The overlay still renders
              (idle dots), and a "Simulate" slider lets you nudge the
              field by hand — useful for testing. Or pair the iPhone
              companion to stream real motion.
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tap-cta">
        <h2>Bring the cabin to your screen.</h2>
        <p>Free forever. Open source. Click-through. Never in the way.</p>
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
            href="https://github.com/InfamousVague/Seasick"
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
