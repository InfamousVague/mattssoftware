import { useState } from "react";
import {
  Shield,
  Wifi,
  Terminal,
  Watch,
  Smartphone,
  Server,
  Lock,
  ChevronDown,
  ExternalLink,
  Monitor,
} from "lucide-react";
import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import {
  WatchServerList,
  PhoneDashboard,
  WatchSuiteProgress,
  WatchAlert,
  WatchComplications,
  MacMenuBar,
  WatchSiri,
} from "../components/WatchMockup";
import { useLanguage } from "../i18n/context";
import "./Tap.css";

// Watch mockups are rendered in the same order as the translation's
// `showcase` array — keep these in sync if reordering.
const SHOWCASE_VISUALS = [
  <WatchServerList />,
  <PhoneDashboard />,
  <WatchSuiteProgress />,
  <WatchAlert />,
  <WatchComplications />,
  <MacMenuBar />,
  <WatchSiri />,
];

// Templates — the bullet lists stay as English commands ("Check disk",
// "Restart container", etc.) since they're literal SSH command names
// users would type. Only category labels are translated.
const TEMPLATE_LISTS = {
  system: ["Check disk", "Check memory", "CPU load", "Top processes", "Uptime"],
  docker: ["List containers", "Restart container", "Container logs", "Docker stats"],
  systemd: ["Restart service", "Service status", "View logs", "Stop service"],
  deploy: ["Git pull", "PM2 restart", "PM2 status", "Current commit"],
  nginx: ["Test config", "Reload", "Access log", "Error log"],
  network: ["Port check", "Connection count", "DNS lookup"],
};

const USE_CASE_EMOJI = ["🐕", "📊", "🏋️", "🛏️", "🚗", "✈️"];

export function TapPage() {
  const { t } = useLanguage();
  const a = t.apps.tap;
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const showcase: FeatureSection[] = a.showcase!.map((s, i) => ({
    badge: s.badge,
    title: s.title,
    description: s.description,
    bullets: s.bullets,
    imageAlt: s.imageAlt,
    renderVisual: SHOWCASE_VISUALS[i],
  }));

  return (
    <AppPage
      themeId="tap"
      title="Tap"
      tagline={a.tagline}
      description={a.description}
      heroImage="/tap/hero.png"
      icon="/tap/icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{
        kind: "appstore",
        url: "https://apps.apple.com/app/tap-command-runner/id6762214314",
        label: t.channels.appstore,
      }}
    >
      <div className="tap-extra">
        <section className="tap-stats">
          {a.stats.map((stat) => (
            <div key={stat.label} className="tap-stats__item">
              <span className="tap-stats__value">{stat.value}</span>
              <span className="tap-stats__label">{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="features">
          <FeatureShowcase features={showcase} />
        </section>

        <section className="tap-demo">
          <h2>{a.threeSecondsHeading}</h2>
          <p className="tap-demo__subtitle">{a.threeSecondsSub}</p>
          <div className="tap-demo__flow">
            <div className="tap-demo__step">
              <div className="tap-demo__step-icon">👆</div>
              <span>{a.stepTap}</span>
            </div>
            <div className="tap-demo__arrow">→</div>
            <div className="tap-demo__step">
              <div className="tap-demo__step-icon">✓</div>
              <span>{a.stepConfirm}</span>
            </div>
            <div className="tap-demo__arrow">→</div>
            <div className="tap-demo__step">
              <div className="tap-demo__step-icon">⚡</div>
              <span>{a.stepDone}</span>
            </div>
          </div>
        </section>

        <section className="tap-arch">
          <h2>{a.archHeading}</h2>
          <div className="tap-arch__diagram">
            <div className="tap-arch__node tap-arch__node--watch">
              <Watch size={24} />
              <span>{a.archWatch}</span>
            </div>
            <div className="tap-arch__connector">
              <span>HTTPS/TLS 1.3</span>
            </div>
            <div className="tap-arch__node tap-arch__node--relay">
              <Server size={24} />
              <span>{a.archRelay}</span>
            </div>
            <div className="tap-arch__connector">
              <span>SSH</span>
            </div>
            <div className="tap-arch__node tap-arch__node--server">
              <Terminal size={24} />
              <span>{a.archServers}</span>
            </div>
          </div>
          <div className="tap-arch__also">
            <div className="tap-arch__node tap-arch__node--companion">
              <Smartphone size={24} />
              <span>{a.archCompanion}</span>
            </div>
            <div className="tap-arch__connector">
              <span>HTTPS/TLS 1.3</span>
            </div>
            <div className="tap-arch__node tap-arch__node--relay">
              <Server size={24} />
              <span>{a.archRelay}</span>
            </div>
            <div className="tap-arch__connector">
              <span>HTTPS/TLS 1.3</span>
            </div>
            <div className="tap-arch__node tap-arch__node--mac">
              <Monitor size={24} />
              <span>{a.archMac}</span>
            </div>
          </div>
        </section>

        <section className="tap-security">
          <h2>{a.securityHeading}</h2>
          <div className="tap-security__grid">
            <div className="tap-security__card">
              <Lock size={20} />
              <h3>{a.securityCards[0].title}</h3>
              <p>{a.securityCards[0].body}</p>
            </div>
            <div className="tap-security__card">
              <Shield size={20} />
              <h3>{a.securityCards[1].title}</h3>
              <p>{a.securityCards[1].body}</p>
            </div>
            <div className="tap-security__card">
              <Wifi size={20} />
              <h3>{a.securityCards[2].title}</h3>
              <p>{a.securityCards[2].body}</p>
            </div>
            <div className="tap-security__card">
              <Watch size={20} />
              <h3>{a.securityCards[3].title}</h3>
              <p>{a.securityCards[3].body}</p>
            </div>
          </div>
        </section>

        <section className="tap-templates">
          <h2>{a.templatesHeading}</h2>
          <p className="tap-templates__subtitle">{a.templatesSub}</p>
          <div className="tap-templates__grid">
            {(Object.keys(TEMPLATE_LISTS) as Array<keyof typeof TEMPLATE_LISTS>).map(
              (cat) => (
                <div key={cat} className="tap-templates__category">
                  <h4>{a.templateCategories[cat]}</h4>
                  <ul>
                    {TEMPLATE_LISTS[cat].map((tpl) => (
                      <li key={tpl}>{tpl}</li>
                    ))}
                  </ul>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="tap-usecases">
          <h2>{a.useCasesHeading}</h2>
          <div className="tap-usecases__grid">
            {a.useCases.map((text, i) => (
              <div key={text} className="tap-usecases__item">
                <span className="tap-usecases__emoji">{USE_CASE_EMOJI[i]}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="tap-tech">
          <h2>{a.techHeading}</h2>
          <div className="tap-tech__grid">
            <div className="tap-tech__item">
              <strong>{a.techStack.watch.label}</strong>
              <span>{a.techStack.watch.value}</span>
            </div>
            <div className="tap-tech__item">
              <strong>{a.techStack.macos.label}</strong>
              <span>{a.techStack.macos.value}</span>
            </div>
            <div className="tap-tech__item">
              <strong>{a.techStack.companion.label}</strong>
              <span>{a.techStack.companion.value}</span>
            </div>
            <div className="tap-tech__item">
              <strong>{a.techStack.relay.label}</strong>
              <span>{a.techStack.relay.value}</span>
            </div>
            <div className="tap-tech__item">
              <strong>{a.techStack.encryption.label}</strong>
              <span>{a.techStack.encryption.value}</span>
            </div>
            <div className="tap-tech__item">
              <strong>{a.techStack.tls.label}</strong>
              <span>{a.techStack.tls.value}</span>
            </div>
            <div className="tap-tech__item">
              <strong>{a.techStack.notifications.label}</strong>
              <span>{a.techStack.notifications.value}</span>
            </div>
          </div>
        </section>

        <section className="tap-expandable">
          <button
            className={`tap-expandable__trigger ${expandedSection === "setup" ? "active" : ""}`}
            onClick={() =>
              setExpandedSection(expandedSection === "setup" ? null : "setup")
            }
          >
            <span>{a.quickSetup}</span>
            <ChevronDown size={18} />
          </button>
          {expandedSection === "setup" && (
            <div className="tap-expandable__content">
              <pre>{`# Install and run the relay
curl -sSL https://tap.mattssoftware.com/install.sh | bash
tap-relay

# First run: set master passphrase, get API token
# Then on your watch/phone: enter relay URL + token`}</pre>
            </div>
          )}

          <button
            className={`tap-expandable__trigger ${expandedSection === "config" ? "active" : ""}`}
            onClick={() =>
              setExpandedSection(expandedSection === "config" ? null : "config")
            }
          >
            <span>{a.relayConfig}</span>
            <ChevronDown size={18} />
          </button>
          {expandedSection === "config" && (
            <div className="tap-expandable__content">
              <pre>{`# ~/.tap/relay.toml

[server]
host = "0.0.0.0"
port = 8443

[tls]
auto_cert = true
domain = "tap.yourdomain.com"

[ssh]
max_idle_seconds = 300
default_timeout_seconds = 30

[health]
ping_interval_seconds = 30`}</pre>
            </div>
          )}
        </section>

        <section className="tap-cta">
          <h2>{a.ctaHeading}</h2>
          <p>{a.ctaSub}</p>
          <div className="tap-cta__buttons">
            <a
              href="https://github.com/InfamousVague/tap"
              className="btn btn--ghost"
              target="_blank"
              rel="noopener"
            >
              <ExternalLink size={18} /> {a.ctaGithub}
            </a>
          </div>
        </section>
      </div>
    </AppPage>
  );
}
