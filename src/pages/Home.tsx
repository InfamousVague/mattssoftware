import { AppCard } from "../components/AppCard";
import { LogoTerminal } from "../components/Logo";
import "./Home.css";

export function Home() {
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
            downloadUrl="https://github.com/InfamousVague/Blip/releases/latest"
          />
<AppCard
            name="Vyv"
            tagline="Your computer wants to sleep. Vyv disagrees."
            description="Keep-awake utility that prevents your computer from sleeping. Timed sessions, mouse jiggle simulation, lid-closed override, and a panic hotkey for instant deactivation."
            icon="/vyv/app-icon.png"
            path="/vyv"
            tags={["Utility", "Cross-Platform", "Productivity"]}
            downloadUrl="https://github.com/InfamousVague/Vyv/releases/latest"
          />
          <AppCard
            name="Diane"
            tagline="I'm holding in my hand a small tape recorder."
            description="A retro voice recorder with live speech-to-text transcription, cassette tape library, and dictation mode. Inspired by Special Agent Dale Cooper."
            icon="/diane/app-icon.png"
            path="/diane"
            tags={["Voice", "Transcription", "macOS"]}
            downloadUrl="https://github.com/InfamousVague/Diane/releases/latest"
          />
        </div>
      </section>
    </div>
  );
}
