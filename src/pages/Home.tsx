import { useEffect, useState } from "react";
import { AppCard } from "../components/AppCard";
import { LogoTerminal } from "../components/Logo";
import "./Home.css";

const FALLBACK = "https://github.com/InfamousVague";

async function getLatestDmg(repo: string): Promise<string> {
  try {
    const res = await fetch(`https://api.github.com/repos/InfamousVague/${repo}/releases/latest`);
    if (!res.ok) return `${FALLBACK}/${repo}/releases/latest`;
    const data = await res.json();
    const dmg = data.assets?.find((a: { name: string }) => a.name.endsWith(".dmg"));
    return dmg?.browser_download_url || `${FALLBACK}/${repo}/releases/latest`;
  } catch {
    return `${FALLBACK}/${repo}/releases/latest`;
  }
}

export function Home() {
  const [blipUrl, setBlipUrl] = useState(`${FALLBACK}/Blip/releases/latest`);
  const [vyvUrl, setVyvUrl] = useState(`${FALLBACK}/Vyv/releases/latest`);
  const [dianeUrl, setDianeUrl] = useState(`${FALLBACK}/Diane/releases/latest`);

  useEffect(() => {
    getLatestDmg("Blip").then(setBlipUrl);
    getLatestDmg("Vyv").then(setVyvUrl);
    getLatestDmg("Diane").then(setDianeUrl);
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
            downloadUrl={blipUrl}
          />
          <AppCard
            name="Vyv"
            tagline="Your computer wants to sleep. Vyv disagrees."
            description="Keep-awake utility that prevents your computer from sleeping. Timed sessions, mouse jiggle simulation, lid-closed override, and a panic hotkey for instant deactivation."
            icon="/vyv/app-icon.png"
            path="/vyv"
            tags={["Utility", "Cross-Platform", "Productivity"]}
            downloadUrl={vyvUrl}
          />
          <AppCard
            name="Diane"
            tagline="I'm holding in my hand a small tape recorder."
            description="A retro voice recorder with live speech-to-text transcription, cassette tape library, and dictation mode. Inspired by Special Agent Dale Cooper."
            icon="/diane/app-icon.png"
            path="/diane"
            tags={["Voice", "Transcription", "macOS"]}
            downloadUrl={dianeUrl}
          />
        </div>
      </section>
    </div>
  );
}
