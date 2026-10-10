import { Callout } from "@glacier/react";
import { Coffee, Monitor, Smartphone } from "@glacier/icons";
import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { Checks, Flow, Section, Stats, Tiles } from "../components/sections";

// Hardcoded English copy: this page has no block of its own in
// src/i18n/locales, so it reads the same in every language. (The
// `espresso` block there is the copy of the app's first, cross-platform
// incarnation and is only used for the catalogue's one-line tagline.)

const FEATURES: FeatureSection[] = [
  {
    badge: "macOS · Menu Bar",
    title: "Stay awake from your menu bar.",
    description:
      "Native macOS menu-bar agent. Click the cup glyph, pick a " +
      "duration, done. Your Mac stays awake until the timer runs " +
      "out. Real IOPMAssertion under the hood, not a fake screensaver " +
      "blocker; the whole system stays alert, not just the display.",
    bullets: [
      "Duration grid: 5m / 10m / 15m / 30m / 45m / 1h / 2h / 4h / 8h / ∞",
      "Display + System mode (keeps the screen on) or System-only (CPU stays awake, display can sleep)",
      "Mouse jiggle for Slack / Teams / Zoom idle defeat",
      "Prevent sleep when the lid is closed (installs a scoped sudo rule; removable)",
      "Launch at login + LSUIElement (no Dock icon)",
    ],
    image: "/espresso/screenshots/awake.png",
    imageMode: "illustration",
    imageAlt: "A coffee cup holding a laptop's lid open",
  },
  {
    badge: "iOS · Live Activity",
    title: "Keep your iPhone screen awake, with a countdown in the Dynamic Island.",
    description:
      "Single-screen iOS app. Pick a duration, tap, and your phone " +
      "screen won't dim or lock while the app is open. The Dynamic " +
      "Island and Lock Screen carry a live countdown courtesy of " +
      "ActivityKit, so you don't have to open the app to see how much " +
      "time is left.",
    bullets: [
      "Same duration grid as the Mac (10 cells, 5m → ∞)",
      "Activity reason chips (Reading, Watching, Cooking, Other) surface in the Live Activity",
      "Brightness boost (optional): max screen while awake, restore when stopped",
      "Live Activity in the Dynamic Island (iPhone 14 Pro+) + Lock Screen",
      "Native SwiftUI, iOS 17+",
    ],
    imageAlt: "Espresso iOS app + Live Activity in the Dynamic Island",
  },
  {
    badge: "Android · In development",
    title: "A quick-settings tile that keeps the screen on.",
    description:
      "The Android app is built and has not been released yet, so " +
      "there is nothing to download. It lives in quick settings: tap " +
      "the tile and the screen stays on, with a timer that runs while " +
      "it does.",
    bullets: [
      "A quick-settings tile that keeps the screen on",
      "A running timer for as long as it is awake",
      "Optional full brightness while it is on",
      "A home-screen pill that shows whether the screen is being kept awake and for how long. Tap it to switch.",
    ],
    imageAlt: "",
  },
  {
    badge: "Cross-platform brand",
    title: "Same cup, same logic, different OS.",
    description:
      "The Mac and iPhone apps share the duration grid, the activity-reason " +
      "vocabulary, and the cup-and-saucer brand mark. Pick the " +
      "platform that fits your scenario: Mac for builds + meetings + " +
      "downloads that need the system fully awake; iPhone for " +
      "reading, watching, cooking, or any moment where you want the " +
      "screen up but the phone in hand.",
    bullets: [
      "macOS: Developer ID signed + notarized; ships as a .dmg via the launcher",
      "iOS: free Apple ID sideload supported; paid Developer Program → indefinite install + TestFlight",
      "Open source: github.com/InfamousVague/Espresso",
      "Identical amber accent (#C8995A) and SF Symbol cup glyph across platforms",
    ],
    image: "/espresso/screenshots/timer.png",
    imageMode: "illustration",
    imageAlt: "An espresso cup beside a timer",
  },
];

const STATS = [
  { value: "2 platforms", label: "Mac + iPhone" },
  { value: "10 presets", label: "5m to ∞" },
  { value: "1-tap", label: "On / off" },
  { value: "MIT", label: "Open source" },
];

const USE_CASES = [
  "Long Xcode build on the Mac, stay awake until it's done",
  "Watching a video on iPhone, no auto-lock interrupting it",
  "Recipe open on the phone, hands covered in flour",
  "Reading a long article without thumb-tapping every 30s",
  "Slack idle detection thinks you're asleep. Mouse jiggle disagrees",
  "Lid closed on the Mac, big download finishing on Ethernet",
];

export function EspressoPage() {
  return (
    <AppPage
      themeId="espresso"
      title="Espresso"
      tagline="Keep your devices awake."
      description={
        "A menu-bar coffee shot for your Mac. A single-screen Live Activity for your iPhone. " +
        "Same brand, same duration grid, two platforms. An Android version is in development."
      }
      heroImage="/espresso/hero.png"
      icon="/espresso/app-icon.png"
      requirements="macOS · iOS · Free & Open Source"
      cta={{ kind: "github", repo: "Espresso" }}
      closingTitle="Pour one."
      closingNote="Free forever. Open source. Pick the platform that fits."
    >
      <section className="sec sec--tight">
        <Stats items={STATS} />
      </section>

      <FeatureShowcase features={FEATURES} />

      <Section title="Where it runs" center>
        <Flow
          parts={[
            { node: "macOS · Menu bar", icon: <Monitor size={18} aria-hidden /> },
            { link: <Coffee size={16} aria-hidden /> },
            { node: "iOS · Live Activity", icon: <Smartphone size={18} aria-hidden /> },
            { link: <Coffee size={16} aria-hidden /> },
            { node: "Android · In development", icon: <Smartphone size={18} aria-hidden /> },
          ]}
        />
        <div style={{ maxWidth: "36rem", margin: "var(--glacier-space-6) auto 0" }}>
          <Callout tone="note" title="Android is in development">
            The Android app is built but not released. There is no download for it yet.
          </Callout>
        </div>
      </Section>

      <Section title="When you'd reach for it">
        <Checks items={USE_CASES} />
      </Section>

      <Section title="Getting Espresso on your iPhone">
        <Tiles
          items={[
            {
              title: "Free Apple ID",
              body: "Sideload via Xcode for free. The certificate expires every 7 days so you'll need to re-sign. Fine for personal use.",
            },
            {
              title: "Paid Developer Program",
              body: "$99/year. Indefinite install + TestFlight distribution to friends. Required for App Store submission.",
            },
            {
              title: "Source",
              body: (
                <>
                  <code>github.com/InfamousVague/Espresso</code> → open{" "}
                  <code>espresso-mobile/Espresso.xcodeproj</code> in Xcode, sign in with your Apple ID, hit Run.
                </>
              ),
            },
          ]}
        />
      </Section>
    </AppPage>
  );
}
