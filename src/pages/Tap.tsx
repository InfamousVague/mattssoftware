import { Accordion } from "@glacier/react";
import {
  Check,
  ExternalLink,
  Lock,
  Monitor,
  MousePointerClick,
  Server,
  Shield,
  Smartphone,
  Terminal,
  Watch,
  Wifi,
  Zap,
} from "@glacier/icons";
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
import { ButtonLink } from "../components/ButtonLink";
import { Checks, Flow, Section, Stats, Tiles } from "../components/sections";

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

// Templates: the bullet lists stay as English commands ("Check disk",
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

const SECURITY_ICONS = [Lock, Shield, Wifi, Watch];

export function TapPage() {
  const { t } = useLanguage();
  const a = t.apps.tap;

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
      <section className="sec sec--tight">
        <Stats items={a.stats} />
      </section>

      <FeatureShowcase features={showcase} />

      <Section title={a.threeSecondsHeading} sub={a.threeSecondsSub} center>
        <Flow
          parts={[
            { node: a.stepTap, icon: <MousePointerClick size={18} aria-hidden /> },
            { link: "→" },
            { node: a.stepConfirm, icon: <Check size={18} aria-hidden /> },
            { link: "→" },
            { node: a.stepDone, icon: <Zap size={18} aria-hidden /> },
          ]}
        />
      </Section>

      <Section title={a.archHeading} center>
        <Flow
          parts={[
            { node: a.archWatch, icon: <Watch size={18} aria-hidden /> },
            { link: "HTTPS/TLS 1.3" },
            { node: a.archRelay, icon: <Server size={18} aria-hidden /> },
            { link: "SSH" },
            { node: a.archServers, icon: <Terminal size={18} aria-hidden /> },
          ]}
        />
        <Flow
          parts={[
            { node: a.archCompanion, icon: <Smartphone size={18} aria-hidden /> },
            { link: "HTTPS/TLS 1.3" },
            { node: a.archRelay, icon: <Server size={18} aria-hidden /> },
            { link: "HTTPS/TLS 1.3" },
            { node: a.archMac, icon: <Monitor size={18} aria-hidden /> },
          ]}
        />
      </Section>

      <Section title={a.securityHeading}>
        <Tiles
          items={a.securityCards.map((card, i) => {
            const Icon = SECURITY_ICONS[i] ?? Lock;
            return { title: card.title, body: card.body, icon: <Icon size={20} aria-hidden /> };
          })}
        />
      </Section>

      <Section title={a.templatesHeading} sub={a.templatesSub}>
        <ul className="tiles">
          {(Object.keys(TEMPLATE_LISTS) as Array<keyof typeof TEMPLATE_LISTS>).map((cat) => (
            <li key={cat} className="tile">
              <h3>{a.templateCategories[cat]}</h3>
              <ul>
                {TEMPLATE_LISTS[cat].map((tpl) => (
                  <li key={tpl}>{tpl}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      <Section title={a.useCasesHeading}>
        <Checks items={a.useCases} />
      </Section>

      <Section title={a.techHeading}>
        <Tiles
          items={(
            ["watch", "macos", "companion", "relay", "encryption", "tls", "notifications"] as const
          ).map((key) => ({
            key,
            title: a.techStack[key].label,
            body: a.techStack[key].value,
          }))}
        />
      </Section>

      <section className="sec sec--ruled">
        <Accordion
          items={[
            {
              id: "setup",
              title: a.quickSetup,
              content: (
                <pre className="codeblock">{`# Install and run the relay
curl -sSL https://tap.mattssoftware.com/install.sh | bash
tap-relay

# First run: set master passphrase, get API token
# Then on your watch/phone: enter relay URL + token`}</pre>
              ),
            },
            {
              id: "config",
              title: a.relayConfig,
              content: (
                <pre className="codeblock">{`# ~/.tap/relay.toml

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
              ),
            },
          ]}
        />
      </section>

      <Section title={a.ctaHeading} sub={a.ctaSub} center>
        <div className="demo">
          <ButtonLink href="https://github.com/InfamousVague/tap" variant="outline" size="lg" external>
            <ExternalLink size={16} aria-hidden /> {a.ctaGithub}
          </ButtonLink>
        </div>
      </Section>
    </AppPage>
  );
}
