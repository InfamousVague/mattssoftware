import { AppPage } from "../components/AppPage";

const FEATURES = [
  {
    title: "Find the cruft, biggest first",
    body: "node_modules, Cargo target/, build & test caches, Xcode DerivedData, Homebrew / Yarn / npm caches — scanned, sized, and listed biggest-first so you know exactly what's hoarding your disk.",
  },
  {
    title: "Safe to delete, by design",
    body: "Alfred only touches regenerable folders — caches, build artifacts, dependency trees — never source. Everything moves to the Trash, recoverable in one click if you change your mind.",
  },
  {
    title: "From the menu bar",
    body: "Lives as a tiny menu-bar app. Scan whenever you like, glance at how much you've reclaimed, or leave it as a one-off cleanup tool for the next time the SSD warning pops.",
  },
];

export function AlfredPage() {
  return (
    <AppPage
      themeId="alfred"
      title="Alfred"
      tagline="Reclaim the disk."
      description="A native menu-bar valet that finds safe-to-delete developer cruft — node_modules, Cargo target/, build & test caches, Xcode DerivedData, package-manager caches — sizes it biggest-first, and moves it to the Trash. Recoverable in one click."
      heroImage="/alfred/hero.png"
      icon="/alfred/app-icon.png"
      requirements="macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed"
      features={FEATURES}
      featuresHeading="Find it. Trash it. Get the disk back."
      cta={{ kind: "github", repo: "Alfred" }}
      menuBarApp
    />
  );
}
