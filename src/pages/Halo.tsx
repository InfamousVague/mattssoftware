import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";

/// Halo marketing page. Hardcoded English copy (like Worktree /
/// Seasick / Espresso) rather than the i18n locale path — keeps it
/// shippable in one commit without adding a `halo` block to all 9
/// locales. Uses the AppPage template so the champagne-gold hero
/// illustration (`/halo/hero.png`) drives the page, with the two
/// guardian-angel showcase scenes beneath.

const FEATURES = [
  {
    title: "Hangs from the notch",
    body:
      "A rounded Dynamic-Island shape pinned to the top of the screen, " +
      "sized to the MacBook's hardware notch. Icon on the left, live value " +
      "on the right, inside a tray band below the menu bar.",
  },
  {
    title: "One pill, every app",
    body:
      "Volume + brightness HUDs, the now-playing track, AirPods battery, " +
      "and every MattsSoftware suite app share a single slot — Espresso's " +
      "countdown, Worktree's repo + branch, Port's listening count, " +
      "Peephole's camera/mic activity.",
  },
  {
    title: "Quiet by default",
    body:
      "Shows only active state, so the notch stays empty until something " +
      "has something to say. Hover to expand a dropdown with controls; " +
      "click the pill to cycle through everything currently published.",
  },
];

const SHOWCASE: FeatureSection[] = [
  {
    badge: "Live Activities",
    title: "Every app's status, gathered into one pill.",
    description:
      "Halo polls a shared on-disk store that any app — first-party or " +
      "third-party — can publish to. It sorts by priority and renders the " +
      "winner, so the volume HUD, the track you're playing, your AirPods " +
      "battery, and the rest of the suite all flow through the same " +
      "Dynamic Island instead of fighting for menu-bar space.",
    bullets: [
      "System HUDs — volume + brightness on every change",
      "Now Playing — artwork, scrubber, and transport controls from any app",
      "AirPods + Mac battery, charging state, connected accessories",
      "Suite slots — Espresso, Worktree, Port, Peephole, and more",
    ],
    image: "/halo/feature-aggregate.png",
    imageAlt:
      "Halo's guardian-angel mascot holding a Dynamic Island pill with app activity chips orbiting it",
    imageMode: "illustration",
  },
  {
    badge: "Context-aware focus",
    title: "Whatever just changed pulls to attention.",
    description:
      "Each publisher pulls to the front the moment its state changes — a " +
      "new track, a finished countdown, a branch switch — then settles back " +
      "to ambient priority. Hover for a second and the pill expands into a " +
      "full dropdown with controls; click it to cycle through everything " +
      "live right now.",
    bullets: [
      "Context-aware focus — the active publisher wins the slot",
      "Hover to expand a rich dropdown; click to cycle",
      "A champagne-gold accent traces the pill when a new activity arrives",
      "Per-publisher toggles in Settings — keep only what you want",
    ],
    image: "/halo/feature-focus.png",
    imageAlt:
      "Halo's guardian-angel mascot tapping an expanded Dynamic Island dropdown with one activity in focus",
    imageMode: "illustration",
  },
];

export function HaloPage() {
  return (
    <AppPage
      themeId="halo"
      title="Halo"
      tagline="Dynamic Island for the MacBook notch."
      description={
        "A native macOS Dynamic Island that turns the notch into a live " +
        "status pill. It hangs from the screen edge and shows your system " +
        "HUDs, now-playing track, AirPods battery, and every MattsSoftware " +
        "app that wants the slot — context-aware, quiet by default, and a " +
        "click away from the rest."
      }
      heroImage="/halo/hero.png"
      icon="/halo/app-icon.png"
      requirements="macOS 14+ · Free · Open source · Developer ID signed"
      features={FEATURES}
      featuresHeading="What it does"
      cta={{ kind: "github", repo: "Halo" }}
      menuBarApp
    >
      <FeatureShowcase features={SHOWCASE} />
    </AppPage>
  );
}
