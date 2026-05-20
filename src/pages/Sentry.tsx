import { AppPage } from "../components/AppPage";

const FEATURES = [
  {
    title: "Every persistence vector",
    body: "LaunchAgents & Daemons, login items, cron, and shell startup files — every place something can dig in to survive a reboot, in one menu-bar list.",
  },
  {
    title: "Signature-aware",
    body: "Each target binary is classified notarized / signed / unsigned via spctl and codesign, so an unsigned launch agent stands out instantly.",
  },
  {
    title: "Alerts on change, block what shouldn't be there",
    body: "Snapshot diffing notifies you the moment a new persistence item appears or changes. Inspect the plist or script, then block it — Sentry unloads it and sets it aside as .sentry-disabled. Reversible in one click.",
  },
];

export function SentryPage() {
  return (
    <AppPage
      themeId="sentry"
      title="Sentry"
      tagline="Watch the dark corners."
      description="A menu-bar auditor for macOS persistence. It enumerates LaunchAgents & Daemons, login items, cron, and shell startup files, checks each target's code-signature and notarization, and alerts you the instant a new or changed item appears — then lets you inspect, block, or restore it, right from the menu bar."
      heroImage="/sentry/hero.png"
      icon="/sentry/app-icon.png"
      requirements="macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed"
      features={FEATURES}
      featuresHeading="Watch the places malware hides."
      cta={{ kind: "github", repo: "Sentry" }}
      menuBarApp
    />
  );
}
