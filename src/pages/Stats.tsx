import { AppPage } from "../components/AppPage";

const FEATURES = [
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

export function StatsPage() {
  return (
    <AppPage
      themeId="stats"
      title="Stats"
      tagline="Every signal. One glance."
      description="A native menu-bar system monitor. Live CPU per-core, memory pressure, disk read/write, network up/down, and sensor readings — plus optional compact widgets that ride along in the status bar and history sparklines for every signal, so you can spot a spike without opening Activity Monitor."
      heroImage="/stats/hero.png"
      icon="/stats/app-icon.png"
      requirements="macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed & notarized"
      features={FEATURES}
      featuresHeading="See the whole machine. Without the whole window."
      cta={{ kind: "github", repo: "Stats" }}
      menuBarApp
    />
  );
}
