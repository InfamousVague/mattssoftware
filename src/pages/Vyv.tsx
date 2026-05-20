import { AppPage } from "../components/AppPage";

const FEATURES = [
  {
    title: "Keep awake, on a timer or forever",
    body: "Preset timers from 5 minutes to 8 hours, or indefinite mode for when you mean business. Keep the display on or let it sleep while the system stays awake.",
  },
  {
    title: "Fool your status indicator",
    body: "Sub-pixel mouse jiggle — invisible but enough to defeat idle detection in Slack, Teams, Zoom, and any app that watches for inactivity.",
  },
  {
    title: "Panic button included",
    body: "Ctrl+Shift+Escape instantly kills everything: display wakes, jiggle stops, timers cancel. Lid-closed override for laptops. Lifetime stats track your total uptime.",
  },
];

export function VyvPage() {
  return (
    <AppPage
      themeId="espresso"
      title="Espresso"
      tagline="Refuse to sleep."
      description="Keep-awake utility for the system tray: timed sessions or indefinite mode, sub-pixel mouse-jiggle to defeat idle detection, and a global panic hotkey to drop everything instantly. Lid-closed override and lifetime uptime stats included."
      heroImage="/espresso/hero.png"
      icon="/espresso/app-icon.png"
      requirements="macOS  ·  Windows  ·  Linux  ·  Free & Open Source"
      features={FEATURES}
      featuresHeading="Stay awake. Stay active. Stay employed."
      cta={{ kind: "github", repo: "Espresso" }}
    />
  );
}
