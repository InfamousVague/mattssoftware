import { useEffect, useState } from "react";
import { AppCard } from "../components/AppCard";
import { LogoTerminal } from "../components/Logo";
import "./Home.css";

const FALLBACK = "https://github.com/InfamousVague";

interface ReleaseInfo {
  url: string;
  version: string;
}

async function getLatestRelease(repo: string): Promise<ReleaseInfo> {
  const fallback = { url: `${FALLBACK}/${repo}/releases/latest`, version: "" };
  try {
    const res = await fetch(`https://api.github.com/repos/InfamousVague/${repo}/releases/latest`);
    if (!res.ok) return fallback;
    const data = await res.json();
    const dmg = data.assets?.find((a: { name: string }) => a.name.endsWith(".dmg"));
    return {
      url: dmg?.browser_download_url || fallback.url,
      version: data.tag_name || "",
    };
  } catch {
    return fallback;
  }
}

export function Home() {
  const [blip, setBlip] = useState<ReleaseInfo>({ url: `${FALLBACK}/Blip/releases/latest`, version: "" });
  const [vyv, setVyv] = useState<ReleaseInfo>({ url: `${FALLBACK}/Vyv/releases/latest`, version: "" });
  const [port, setPort] = useState<ReleaseInfo>({ url: `${FALLBACK}/Port/releases/latest`, version: "" });
  const [sentry, setSentry] = useState<ReleaseInfo>({ url: `${FALLBACK}/Sentry/releases/latest`, version: "" });
  const [peephole, setPeephole] = useState<ReleaseInfo>({ url: `${FALLBACK}/Peephole/releases/latest`, version: "" });
  const [quarantine, setQuarantine] = useState<ReleaseInfo>({ url: `${FALLBACK}/Quarantine/releases/latest`, version: "" });
  const [diane, setDiane] = useState<ReleaseInfo>({ url: `${FALLBACK}/Diane/releases/latest`, version: "" });
  const [stash, setStash] = useState<ReleaseInfo>({ url: `${FALLBACK}/Stash/releases/latest`, version: "" });
  const [fishbones, setFishbones] = useState<ReleaseInfo>({ url: `${FALLBACK}/Fishbones/releases/latest`, version: "" });

  useEffect(() => {
    getLatestRelease("Blip").then(setBlip);
    getLatestRelease("Vyv").then(setVyv);
    getLatestRelease("Port").then(setPort);
    getLatestRelease("Sentry").then(setSentry);
    getLatestRelease("Peephole").then(setPeephole);
    getLatestRelease("Quarantine").then(setQuarantine);
    getLatestRelease("Diane").then(setDiane);
    getLatestRelease("Stash").then(setStash);
    getLatestRelease("Fishbones").then(setFishbones);
  }, []);

  return (
    <div className="home">
      <section className="home__hero">
        <LogoTerminal />
      </section>

      <section className="section">
        <div className="home__grid">
          {/* Libre + Tap surface first — they're the most active /
              externally-linked apps in the lineup right now (Libre
              lives at libre.academy, Tap ships on the App Store).
              The other tiles follow in their original order. */}
          <AppCard
            name="Libre"
            tagline="Turn any technical book into an interactive course."
            description="Drop in a PDF or EPUB and Libre generates lessons, exercises, and hidden tests. Sixteen languages with one editor, a local AI tutor on your laptop, streak fire that survives weekends, and seventeen themes."
            icon="/libre/libre_icon.png"
            path="https://libre.academy"
            tags={["Learning", "Multi-language", "AI Tutor", "Local-first", "macOS", "Windows"]}
            downloadUrl={fishbones.url}
            version={fishbones.version}
          />
          <AppCard
            name="Tap"
            tagline="The command remote for your infrastructure."
            description="Run pre-configured SSH commands on remote servers from your Apple Watch. Works over cellular, supports Siri, and encrypts everything end-to-end."
            icon="/tap/icon.png"
            path="/tap"
            tags={["watchOS", "SSH", "Rust", "Apple Watch", "Open Source"]}
            appStoreUrl="https://apps.apple.com/app/tap-command-runner/id6762214314"
          />
          <AppCard
            name="Blip"
            tagline="Your computer has been talking behind your back."
            description="Real-time network monitoring with a 3D connection map, smart firewall, DNS blocking, submarine cable routing, and bandwidth analytics. See exactly where your data goes."
            icon="/blip/app-icon.png"
            path="/blip"
            tags={["Network", "Firewall", "Privacy", "macOS"]}
            downloadUrl={blip.url}
            version={blip.version}
          />
          <AppCard
            name="Vyv"
            tagline="Your computer wants to sleep. Vyv disagrees."
            description="Keep-awake utility that prevents your computer from sleeping. Timed sessions, mouse jiggle simulation, lid-closed override, and a panic hotkey for instant deactivation."
            icon="/vyv/app-icon.png"
            path="/vyv"
            tags={["Utility", "Cross-Platform", "Productivity"]}
            downloadUrl={vyv.url}
            version={vyv.version}
          />
          <AppCard
            name="Port"
            tagline="Every open port on your Mac, one click away."
            description="A native menu-bar port manager: see what's listening, kill or pause the process, forward or NAT-PMP-map it, and watch active connections on a live map — click one to inspect it in Blip."
            icon="/port/app-icon.png"
            path="/port"
            tags={["Network", "Utility", "macOS", "Menu Bar"]}
            downloadUrl={port.url}
            version={port.version}
          />
          <AppCard
            name="Sentry"
            tagline="Know the moment something digs in."
            description="A menu-bar auditor for macOS persistence — LaunchAgents, login items, cron, and shell startup files — with signature checks and alerts when something new or changed appears. Read-only."
            icon="/sentry/app-icon.png"
            path="/sentry"
            tags={["Security", "Persistence", "macOS", "Menu Bar"]}
            downloadUrl={sentry.url}
            version={sentry.version}
          />
          <AppCard
            name="Peephole"
            tagline="See who's watching."
            description="A menu-bar sentinel for your camera and microphone: which apps are using them right now, a history of access, and a notification the moment something turns them on."
            icon="/peephole/app-icon.png"
            path="/peephole"
            tags={["Security", "Privacy", "macOS", "Menu Bar"]}
            downloadUrl={peephole.url}
            version={peephole.version}
          />
          <AppCard
            name="Quarantine"
            tagline="Trust, but verify every download."
            description="A menu-bar inspector for ~/Downloads: quarantine origin, Gatekeeper/codesign status, SHA-256, and an optional VirusTotal verdict for every new file, with a notification to vet it."
            icon="/quarantine/app-icon.png"
            path="/quarantine"
            tags={["Security", "Privacy", "macOS", "Menu Bar"]}
            downloadUrl={quarantine.url}
            version={quarantine.version}
          />
          <AppCard
            name="Diane"
            tagline="I'm holding in my hand a small tape recorder."
            description="A skeuomorphic retro voice recorder with live speech-to-text transcription, cassette tape library, and dictation mode. Inspired by Special Agent Dale Cooper."
            icon="/diane/app-icon.png"
            path="/diane"
            tags={["Voice", "Transcription", "macOS"]}
            downloadUrl={diane.url}
            version={diane.version}
          />
          <AppCard
            name="Base"
            tagline="Universal design toolkit — monochrome, glassmorphism, platform-agnostic."
            description="69 primitives, 8 design token categories, dark mode, and zero opinions about your stack. Clean, composable React components that work everywhere."
            icon="/base/app-icon.png"
            path="/base"
            tags={["UI Kit", "React", "TypeScript", "Design System"]}
          />
          <AppCard
            name="Stash"
            tagline="Your .env files deserve a bodyguard."
            description="Encrypted environment variable vault with profiles, team sharing via public-key crypto, a CLI, health monitoring, and an API directory. Never leak a secret again."
            icon="/stash/app-icon.png"
            path="/stash"
            tags={["Security", "Developer Tools", "macOS", "Encryption"]}
            downloadUrl={stash.url}
            version={stash.version}
          />
        </div>
      </section>
    </div>
  );
}
