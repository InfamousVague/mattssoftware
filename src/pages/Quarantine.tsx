import { AppPage } from "../components/AppPage";

const FEATURES = [
  {
    title: "Origin & quarantine",
    body: "See exactly where a file came from via its com.apple.quarantine attribute — the agent that downloaded it and the source URL.",
  },
  {
    title: "Gatekeeper & hash",
    body: "Codesign / Gatekeeper assessment plus a SHA-256 for every new file that lands in ~/Downloads.",
  },
  {
    title: "Optional VirusTotal",
    body: "Add an API key and Quarantine surfaces a reputation verdict inline, so you can vet a download before you ever open it.",
  },
];

export function QuarantinePage() {
  return (
    <AppPage
      themeId="quarantine"
      title="Quarantine"
      heroImage="/quarantine/hero.png"
      icon="/quarantine/app-icon.png"
      tagline="Vet every download."
      description="A menu-bar inspector for ~/Downloads. For every new file it surfaces the quarantine origin URL, Gatekeeper/codesign status, SHA-256, and an optional VirusTotal verdict — then notifies you so you can vet it before you open it."
      requirements="macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed"
      features={FEATURES}
      featuresHeading="Know what just landed in Downloads."
      cta={{ kind: "github", repo: "Quarantine" }}
      menuBarApp
    />
  );
}
