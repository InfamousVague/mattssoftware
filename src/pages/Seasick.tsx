import { Compass, Headphones, Monitor, Smartphone } from "@glacier/icons";
import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { Checks, Flow, Section, Stats, Tiles } from "../components/sections";

// Hardcoded English copy: this page has no block in src/i18n/locales, so it
// reads the same in every language.

const FEATURES: FeatureSection[] = [
  {
    badge: "macOS · Overlay",
    title: "Motion cues, in the corner of every screen.",
    description:
      "A click-through, all-Spaces, fullscreen-auxiliary overlay drifts " +
      "a soft particle field across every connected display. The dots " +
      "track real-world motion: tilt your laptop, lean the car, sway " +
      "the boat, the field drifts opposite the motion, the same " +
      "vestibular-cue trick Apple ships on iPhone as Motion Cues. " +
      "Never steals focus, never grabs the mouse, never appears in " +
      "screenshots taken at default fidelity.",
    bullets: [
      "Borderless NSPanel at .screenSaver level, click-through everywhere",
      "Per-screen overlay manager, works on multi-monitor setups out of the box",
      "Particle density / size / opacity all tunable from the menu-bar popover",
      "Goes idle when no motion is detected, no flicker, no battery drain",
    ],
    imageAlt: "Seasick overlay drifting particles across a Mac display",
  },
  {
    badge: "Motion sources",
    title: "Three ways to know where you're moving.",
    description:
      "Seasick auto-picks the best motion source available on your " +
      "machine. No special hardware needed for most users, the " +
      "MacBook's built-in tilt sensor is plenty. Desktop Macs with no " +
      "sensor can pair AirPods or use the optional iPhone companion " +
      "to extend the feature to any setup.",
    bullets: [
      "MacBook sudden-motion sensor via IOKit (works on most Intel + Apple Silicon laptops)",
      "AirPods Pro / 3 / Max via CMHeadphoneMotionManager, full 6-DOF motion",
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
      "Bonjour discovery, no IP / port wrangling, finds the Mac automatically",
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
  "Passenger seat on a long drive, no more carsick laptop",
  "Working on Amtrak through Pennsylvania bends",
  "Boats. The original use case. It's in the name.",
  "Window seat, slight turbulence, deadline looming",
  "Bus rides where reading would normally make you queasy",
  "Treadmill-desk hybrid setups where the laptop sways",
];

export function SeasickPage() {
  return (
    <AppPage
      themeId="seasick"
      title="Seasick"
      tagline="Motion cues for your Mac. Apple's iPhone trick, on the desktop."
      description={
        "A subtle particle field drifts across your screen against the direction of travel. " +
        "Less motion sickness in cars, trains, planes, boats, anywhere your visual frame and your inner ear disagree. " +
        "MacBook sensor, AirPods motion, or your iPhone as a streamer."
      }
      heroImage="/seasick/hero.png"
      icon="/seasick/app-icon.png"
      requirements="macOS · iOS · Free & Open Source"
      cta={{ kind: "github", repo: "Seasick" }}
      menuBarApp
      closingTitle="Bring the cabin to your screen."
      closingNote="Free forever. Open source. Click-through. Never in the way."
    >
      <section className="sec sec--tight">
        <Stats items={STATS} />
      </section>

      <FeatureShowcase features={FEATURES} />

      <Section title="Where the motion comes from" center>
        <Flow
          parts={[
            { node: "MacBook · SMS", icon: <Monitor size={18} aria-hidden /> },
            { link: <Compass size={16} aria-hidden /> },
            { node: "AirPods · CMHeadphoneMotion", icon: <Headphones size={18} aria-hidden /> },
            { link: <Compass size={16} aria-hidden /> },
            { node: "iPhone · CoreMotion stream", icon: <Smartphone size={18} aria-hidden /> },
          ]}
        />
      </Section>

      <Section title="When you'd reach for it">
        <Checks items={USE_CASES} />
      </Section>

      <Section title="Honest hardware reality">
        <Tiles
          items={[
            {
              title: "MacBook",
              body: "Most models, including many Apple Silicon, expose the sudden-motion sensor (SMS) via IOKit. Seasick reads x/y tilt and the overlay just works.",
            },
            {
              title: "AirPods Pro / 3 / Max",
              body: "Provides full 6-DOF motion via CMHeadphoneMotionManager on macOS 14+. Plays nice with SMS; auto-picks the highest-quality source.",
            },
            {
              title: "Desktop Macs without AirPods",
              body: "No built-in motion source. The overlay still renders (idle dots), and a \"Simulate\" slider lets you nudge the field by hand, useful for testing. Or pair the iPhone companion to stream real motion.",
            },
          ]}
        />
      </Section>

    </AppPage>
  );
}
