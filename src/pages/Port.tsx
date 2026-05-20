import { AppPage } from "../components/AppPage";

const FEATURES = [
  {
    title: "Every open port, live",
    body: "A menu-bar list of every listening TCP/UDP port with the process and PID behind it, refreshing every second. Kill it, pause it (SIGSTOP/SIGCONT), or leave it.",
  },
  {
    title: "Forward & map",
    body: "Proxy any local port to another with a built-in TCP forwarder, expose it across your LAN, and punch it through your router with native NAT-PMP — no config.",
  },
  {
    title: "Connections on a map → Blip",
    body: "Active connections plotted on a live map by where they actually go. Click any endpoint to open it in Blip for deep inspection (or grab Blip if you don't have it).",
  },
];

export function PortPage() {
  return (
    <AppPage
      themeId="port"
      title="Port"
      tagline="Every port, one click."
      description="A tiny native menu-bar port manager. See what's listening, kill or pause the process, forward or NAT-PMP-map it, and watch active connections on a live map — click one to inspect it in Blip."
      heroImage="/port/hero.png"
      icon="/port/app-icon.png"
      requirements="macOS 14+  ·  Apple Silicon  ·  Free  ·  Developer ID signed"
      features={FEATURES}
      featuresHeading="See it. Kill it. Forward it."
      cta={{ kind: "github", repo: "Port" }}
      menuBarApp
    />
  );
}
