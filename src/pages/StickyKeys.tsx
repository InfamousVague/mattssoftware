import { AppPage } from "../components/AppPage";

const FEATURES = [
  {
    title: "Lock everything in one click",
    body: "An active keyboard tap swallows every key, modifier, and media key system-wide — wipe the keys without firing a single shortcut.",
  },
  {
    title: "Frosted full-screen overlay",
    body: "A clear, untinted blur covers every display so you can see at a glance the keyboard is locked, with a live auto-unlock countdown.",
  },
  {
    title: "Mouse-only unlock, never trapped",
    body: "Unlock from the overlay button or the menu-bar icon, and a safety auto-unlock fires no matter what so you can never get stuck.",
  },
];

export function StickyKeysPage() {
  return (
    <AppPage
      themeId="stickykeys"
      title="StickyKeys"
      tagline="Lock them keys."
      description="A tiny menu-bar app. Click to lock the keyboard, wipe down the keys with a microfiber cloth without launching apps, sending emails, or quitting your work, then click the overlay to unlock. A frosted full-screen overlay covers every monitor, the mouse stays live, and a safety auto-unlock means you can never get trapped."
      heroImage="/stickykeys/hero.png"
      icon="/stickykeys/app-icon.png"
      requirements="macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed & notarized"
      features={FEATURES}
      featuresHeading="Wipe the keys. Run nothing."
      cta={{ kind: "github", repo: "StickyKeys" }}
      menuBarApp
    />
  );
}
