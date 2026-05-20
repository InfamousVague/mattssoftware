import { AppPage } from "../components/AppPage";

const FEATURES = [
  {
    title: "Live camera & mic status",
    body: "The menu-bar glyph flips the instant the camera or microphone goes active, so you always know when something is recording.",
  },
  {
    title: "Access history",
    body: "A running log of which app used the camera or mic and when — scroll back through the day's activity.",
  },
  {
    title: "Notifications",
    body: "Get alerted the moment an app starts using the camera or microphone. No special entitlements, no kernel extensions.",
  },
];

export function PeepholePage() {
  return (
    <AppPage
      themeId="peephole"
      title="Peephole"
      tagline="See who's watching."
      description="A menu-bar sentinel for your camera and microphone. Peephole shows which apps are using them right now, keeps a history of access, and notifies you when something turns them on — no special entitlements, no kernel extensions."
      heroImage="/peephole/hero.png"
      icon="/peephole/app-icon.png"
      requirements="macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed"
      features={FEATURES}
      featuresHeading="Nothing records without you knowing."
      cta={{ kind: "github", repo: "Peephole" }}
      menuBarApp
    />
  );
}
