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
  const [diane, setDiane] = useState<ReleaseInfo>({ url: `${FALLBACK}/Diane/releases/latest`, version: "" });
  const [stash, setStash] = useState<ReleaseInfo>({ url: `${FALLBACK}/Stash/releases/latest`, version: "" });
  const [fishbones, setFishbones] = useState<ReleaseInfo>({ url: `${FALLBACK}/Fishbones/releases/latest`, version: "" });

  useEffect(() => {
    getLatestRelease("Blip").then(setBlip);
    getLatestRelease("Vyv").then(setVyv);
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
          <AppCard
            name="Fishbones"
            tagline="Turn any technical book into an interactive course."
            description="Drop in a PDF or EPUB and Fishbones generates lessons, exercises, and hidden tests. Sixteen languages with one editor, a local AI tutor on your laptop, streak fire that survives weekends, and seventeen themes."
            icon="/fishbones/app-icon.png"
            path="/fishbones"
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
        </div>
      </section>
    </div>
  );
}
