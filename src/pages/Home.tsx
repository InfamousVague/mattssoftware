import { AppCard } from "../components/AppCard";
import "./Home.css";

export function Home() {
  return (
    <div className="home">
      <section className="home__hero">
        <h1 className="home__title">Matt's Software</h1>
        <p className="home__subtitle">
          Open source apps that do what they say and nothing else.
        </p>
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
        </div>
      </section>
    </div>
  );
}
