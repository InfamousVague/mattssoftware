import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";

const FEATURES = [
  {
    title: "Live 3D map of every connection",
    body: "Every app's traffic plotted on a globe, arcs colored by service. 200 connections, 700+ real submarine cables, particles showing direction. The internet you've been ignoring, made visible.",
  },
  {
    title: "Bouncer for your bandwidth",
    body: "Every app needs permission, no exceptions. Strict mode blocks everything until you say otherwise. Per-app bandwidth bars expose the data hogs. One-click kill switch.",
  },
  {
    title: "200k trackers blocked before they connect",
    body: "DNS blocklists nuke ad and tracker domains on sight; real-time query log surfaces every lookup; tracker leaderboard names the worst offenders.",
  },
];

const SHOWCASE: FeatureSection[] = [
  {
    badge: "Network Map",
    title: "200 connections. Zero of them asked permission.",
    description: "Every app on your computer is quietly phoning home. Blip puts them all on a 3D map so you can watch the chaos unfold in real time.",
    bullets: [
      "Connections route through actual submarine cables across oceans",
      "Service-colored arcs — instantly spot Google, Discord, Apple, and hundreds more",
      "Animated particles show data flowing in both directions",
      "Hop-by-hop traceroute shows the actual path your packets take",
    ],
    image: "/blip/screenshots/map.png",
    imageAlt: "Blip 3D network map showing connection arcs",
  },
  {
    badge: "Firewall",
    title: "Bouncer for your bandwidth",
    description: "Every app needs permission. No exceptions, no excuses. Strict mode blocks everything until you say otherwise. Because your apps have been way too comfortable.",
    bullets: [
      "Strict mode: guilty until proven innocent",
      "Per-app bandwidth bars expose the data hogs",
      "Scoped rules — allow port 443 but block everything else",
      "Kill switch: one click, zero internet, instant silence",
    ],
    image: "/blip/screenshots/firewall.png",
    imageAlt: "Blip firewall showing app-level network access controls",
    imageMaxHeight: "550px",
  },
  {
    badge: "Guard",
    title: "200,000 trackers blocked before they even connect",
    description: "Your DNS is a snitch. Every app, every ad SDK, every analytics ping — Guard catches them at the door. See who's trying to phone home and shut them down.",
    bullets: [
      "DNS blocklists nuke 200k+ tracker and ad domains on sight",
      "Real-time query log — watch every lookup happen live",
      "Tracker leaderboard shows the most persistent offenders",
      "Layered with the firewall — two walls, zero mercy",
    ],
    image: "/blip/screenshots/guard.png",
    imageAlt: "Blip Guard showing DNS blocking and tracker detection",
    imageMaxHeight: "550px",
  },
  {
    badge: "Visualization",
    title: "The internet is just wet cables",
    description: "Your YouTube video crossed three oceans on a cable thinner than a garden hose. Blip shows you exactly which one — 700+ real submarine cable routes, glowing when your data flows through them.",
    bullets: [
      "Real submarine cable routes from TeleGeography mapped on the ocean floor",
      "Active cables light up when your traffic flows through them",
      "Marching dash particles show upload vs download direction",
      "Ping-based speed — fast connections flow fast, laggy ones crawl",
    ],
    image: "/blip/screenshots/map.png",
    imageAlt: "Blip visualization showing submarine cables and data flow",
  },
  {
    badge: "Traceroute",
    title: "14 hops through 6 cities to load one webpage",
    description: "Every packet bounces through a dozen routers before it arrives. Blip traces the route — hop by hop, city by city, cable by cable — and paints it on the map.",
    bullets: [
      "Hop-by-hop markers overlaid directly on the 3D map",
      "Latency colored: green is fast, amber is okay, red is pain",
      "Routes through real submarine cables across ocean crossings",
      "Automatic traceroute for every active connection",
    ],
    image: "/blip/screenshots/hops.png",
    imageAlt: "Blip traceroute showing hop-by-hop network path",
  },
];

export function BlipPage() {
  return (
    <AppPage
      themeId="blip"
      title="Blip"
      tagline="See what's leaving."
      description="See exactly where your data goes, who's collecting it, and shut them down — all on a very pretty 3D map."
      heroImage="/blip/hero.png"
      icon="/blip/app-icon.png"
      requirements="Free & Open Source"
      features={FEATURES}
      featuresHeading="A map. A bouncer. A wall."
      cta={{ kind: "github", repo: "Blip" }}
    >
      <FeatureShowcase features={SHOWCASE} />
    </AppPage>
  );
}
