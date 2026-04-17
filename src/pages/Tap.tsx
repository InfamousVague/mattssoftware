import { useState } from "react";
import { Shield, Wifi, Terminal, Watch, Smartphone, Server, Lock, ChevronDown, ExternalLink, Monitor } from "lucide-react";
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
import "./AppPage.css";
import "./Tap.css";

// ── Feature sections ────────────────────────────────────────

const FEATURES: FeatureSection[] = [
  {
    badge: "Watch App",
    title: "Restart prod from your wrist.",
    description: "Native watchOS app with server list, command execution, and haptic feedback. Tap a command, confirm, done. Real output scrollable with the Digital Crown. Works over cellular — no phone needed.",
    bullets: [
      "Server list with live status dots (green/red)",
      "Pinned commands for quick access via Action Button",
      "Confirmation view for dangerous commands",
      "Truncated output, scrollable with Digital Crown",
    ],
    imageAlt: "Tap watch app showing server commands",
    renderVisual: <WatchServerList />,
  },
  {
    badge: "Companion",
    title: "Configure everything from your phone.",
    description: "Full management app for iPhone, iPad, and Mac Catalyst. Add servers, configure commands, manage SSH keys, view history, and set up command suites. Everything syncs to your watch instantly.",
    bullets: [
      "Dashboard with server health grid and activity feed",
      "Visual command editor with template library",
      "Full interactive SSH terminal via WebView",
      "Generates QR code for instant watch pairing",
    ],
    imageAlt: "Tap companion app dashboard",
    renderVisual: <PhoneDashboard />,
  },
  {
    badge: "Suites",
    title: "Run 5 commands with one tap.",
    description: "Group related commands into suites for one-tap deployment workflows. Each step shows pass/fail in real time. Configure whether to continue on failure or stop immediately.",
    bullets: [
      "Ordered step execution with progress tracking",
      "Per-step continue-on-fail toggle",
      "Suite progress streamed via WebSocket",
      "Perfect for deploy sequences and health check routines",
    ],
    imageAlt: "Tap suite execution progress on watch",
    renderVisual: <WatchSuiteProgress />,
  },
  {
    badge: "Alerts",
    title: "Know before your users do.",
    description: "Background health pings every 30 seconds. When a server goes down, you get an immediate push notification on your watch and phone. Per-server toggle so you only get alerts for what matters.",
    bullets: [
      "30-second health ping loop with latency tracking",
      "APNs push to watch + phone on status change",
      "Per-server notification toggle",
      "Haptic alert pattern on Apple Watch",
    ],
    imageAlt: "Tap server down notification on watch",
    renderVisual: <WatchAlert />,
  },
  {
    badge: "Complications",
    title: "Glanceable server health on your watch face.",
    description: "Five configurable complications that show live server metrics right on your watch face. Pick which server and metric to display. Data syncs automatically from the app.",
    bullets: [
      "Server Status: fleet-wide up/down count",
      "Fleet Metrics: disk, memory, or CPU per server",
      "Docker: running container counts",
      "Uptime: per-server uptime display",
      "Quick Commands: pinned commands at a glance",
    ],
    imageAlt: "Tap watch complications showing server metrics",
    renderVisual: <WatchComplications />,
  },
  {
    badge: "macOS",
    title: "Full control from your menu bar.",
    description: "Native macOS app for quick server access. Monitor your fleet, execute commands, and manage configurations without opening a browser. Sign in with Apple for seamless setup.",
    bullets: [
      "Menu bar presence for instant access",
      "Full command execution with output display",
      "Server configuration import from JSON",
      "Apple Sign-In authentication",
    ],
    imageAlt: "Tap macOS app showing server dashboard",
    renderVisual: <MacMenuBar />,
  },
  {
    badge: "Siri",
    title: '"Hey Siri, Tap restart prod-api."',
    description: "Full App Intents integration. Run any command by voice. Check server status hands-free. Siri confirms the action and reports the result. Works from watch, phone, or CarPlay.",
    bullets: [
      "Natural language: 'Tap restart nginx on prod'",
      "Server status check: 'Check my servers on Tap'",
      "Confirmation dialog before execution",
      "Result reported via voice response",
    ],
    imageAlt: "Siri running a Tap command",
    renderVisual: <WatchSiri />,
  },
];

// ── Stats ───────────────────────────────────────────────────

const STATS = [
  { value: "< 3s", label: "Time to run" },
  { value: "Cellular", label: "No phone needed" },
  { value: "AES-256", label: "Key encryption" },
  { value: "MIT", label: "Open source" },
];

// ── Command templates ───────────────────────────────────────

const TEMPLATE_CATEGORIES = [
  { name: "System", templates: ["Check disk", "Check memory", "CPU load", "Top processes", "Uptime"] },
  { name: "Docker", templates: ["List containers", "Restart container", "Container logs", "Docker stats"] },
  { name: "Systemd", templates: ["Restart service", "Service status", "View logs", "Stop service"] },
  { name: "Deploy", templates: ["Git pull", "PM2 restart", "PM2 status", "Current commit"] },
  { name: "Nginx", templates: ["Test config", "Reload", "Access log", "Error log"] },
  { name: "Network", templates: ["Port check", "Connection count", "DNS lookup"] },
];

// ── Use cases ───────────────────────────────────────────────

const USE_CASES = [
  { emoji: "🐕", text: "Restart a crashed service from the dog park" },
  { emoji: "📊", text: "Run a health check during a meeting" },
  { emoji: "🏋️", text: "Deploy from the gym" },
  { emoji: "🛏️", text: "Check disk space from bed" },
  { emoji: "🚗", text: "Check server status from the car (Siri)" },
  { emoji: "✈️", text: "Queue commands before takeoff, execute on landing" },
];

export function TapPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="app-page tap-page">
      {/* Hero */}
      <section className="tap-hero">
        <img src="/tap/icon.png" alt="Tap" className="tap-hero__app-icon" />
        <h1 className="tap-hero__title">Tap</h1>
        <p className="tap-hero__tagline">The command remote for your infrastructure.</p>
        <p className="tap-hero__subtitle">
          Run pre-configured SSH commands on remote servers from your Apple Watch.
          <br />Tap, confirm, done.
        </p>
        <div className="tap-hero__badges">
          <span>watchOS</span>
          <span>iOS</span>
          <span>iPadOS</span>
          <span>macOS</span>
          <span>Free & Open Source</span>
        </div>
        <div className="tap-hero__buttons">
          <a href="https://apps.apple.com/app/tap-command-runner/id6762214314" className="btn btn--tap-appstore" target="_blank" rel="noopener">
             App Store
          </a>
          <a href="https://github.com/InfamousVague/tap" className="btn btn--tap" target="_blank" rel="noopener">
            <ExternalLink size={18} /> GitHub
          </a>
          <a href="#features" className="btn btn--tap-outline">
            Learn More <ChevronDown size={16} />
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="tap-stats">
        {STATS.map(stat => (
          <div key={stat.label} className="tap-stats__item">
            <span className="tap-stats__value">{stat.value}</span>
            <span className="tap-stats__label">{stat.label}</span>
          </div>
        ))}
      </section>

      {/* Features */}
      <section id="features">
        <FeatureShowcase features={FEATURES} />
      </section>

      {/* Interactive Demo */}
      <section className="tap-demo">
        <h2>Three seconds. That's it.</h2>
        <p className="tap-demo__subtitle">From wrist to server and back.</p>
        <div className="tap-demo__flow">
          <div className="tap-demo__step">
            <div className="tap-demo__step-icon">👆</div>
            <span>Tap</span>
          </div>
          <div className="tap-demo__arrow">→</div>
          <div className="tap-demo__step">
            <div className="tap-demo__step-icon">✓</div>
            <span>Confirm</span>
          </div>
          <div className="tap-demo__arrow">→</div>
          <div className="tap-demo__step">
            <div className="tap-demo__step-icon">⚡</div>
            <span>Done</span>
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="tap-arch">
        <h2>Architecture</h2>
        <div className="tap-arch__diagram">
          <div className="tap-arch__node tap-arch__node--watch">
            <Watch size={24} />
            <span>Watch</span>
          </div>
          <div className="tap-arch__connector">
            <span>HTTPS/TLS 1.3</span>
          </div>
          <div className="tap-arch__node tap-arch__node--relay">
            <Server size={24} />
            <span>Relay</span>
          </div>
          <div className="tap-arch__connector">
            <span>SSH</span>
          </div>
          <div className="tap-arch__node tap-arch__node--server">
            <Terminal size={24} />
            <span>Your Servers</span>
          </div>
        </div>
        <div className="tap-arch__also">
          <div className="tap-arch__node tap-arch__node--companion">
            <Smartphone size={24} />
            <span>Companion</span>
          </div>
          <div className="tap-arch__connector">
            <span>HTTPS/TLS 1.3</span>
          </div>
          <div className="tap-arch__node tap-arch__node--relay">
            <Server size={24} />
            <span>Relay</span>
          </div>
          <div className="tap-arch__connector">
            <span>HTTPS/TLS 1.3</span>
          </div>
          <div className="tap-arch__node tap-arch__node--mac">
            <Monitor size={24} />
            <span>macOS</span>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="tap-security">
        <h2>Security Model</h2>
        <div className="tap-security__grid">
          <div className="tap-security__card">
            <Lock size={20} />
            <h3>Keys at Rest</h3>
            <p>SSH keys encrypted with AES-256-GCM. Master passphrase derived via Argon2id. Keys only exist decrypted in memory while the relay runs.</p>
          </div>
          <div className="tap-security__card">
            <Shield size={20} />
            <h3>Token Auth</h3>
            <p>Per-device Bearer tokens, Argon2 hashed. Optional TOTP 2FA for destructive operations. Tokens are revocable instantly.</p>
          </div>
          <div className="tap-security__card">
            <Wifi size={20} />
            <h3>TLS Everywhere</h3>
            <p>Built-in Let's Encrypt auto-renewal. All traffic encrypted in transit. Certificate pinning option for self-hosted relays.</p>
          </div>
          <div className="tap-security__card">
            <Watch size={20} />
            <h3>Watch Security</h3>
            <p>Token stored in hardware-encrypted Watch Keychain. Wrist detection auto-locks. No sensitive data cached on device.</p>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section className="tap-templates">
        <h2>27 Built-in Templates</h2>
        <p className="tap-templates__subtitle">Common commands pre-configured. Pick a template, fill in the blanks, done.</p>
        <div className="tap-templates__grid">
          {TEMPLATE_CATEGORIES.map(cat => (
            <div key={cat.name} className="tap-templates__category">
              <h4>{cat.name}</h4>
              <ul>
                {cat.templates.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="tap-usecases">
        <h2>Built for the Moments In Between</h2>
        <div className="tap-usecases__grid">
          {USE_CASES.map(uc => (
            <div key={uc.text} className="tap-usecases__item">
              <span className="tap-usecases__emoji">{uc.emoji}</span>
              <span>{uc.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tap-tech">
        <h2>Tech Stack</h2>
        <div className="tap-tech__grid">
          <div className="tap-tech__item">
            <strong>Watch</strong>
            <span>Swift + SwiftUI + WidgetKit + AppIntents</span>
          </div>
          <div className="tap-tech__item">
            <strong>macOS</strong>
            <span>Swift + SwiftUI + Menu Bar</span>
          </div>
          <div className="tap-tech__item">
            <strong>Companion</strong>
            <span>React Native + TypeScript + Base RN</span>
          </div>
          <div className="tap-tech__item">
            <strong>Relay</strong>
            <span>Rust + axum + russh + SQLite</span>
          </div>
          <div className="tap-tech__item">
            <strong>Encryption</strong>
            <span>AES-256-GCM + Argon2id</span>
          </div>
          <div className="tap-tech__item">
            <strong>TLS</strong>
            <span>rustls + Let's Encrypt</span>
          </div>
          <div className="tap-tech__item">
            <strong>Notifications</strong>
            <span>APNs + per-server toggle</span>
          </div>
        </div>
      </section>

      {/* Expandable Sections */}
      <section className="tap-expandable">
        <button
          className={`tap-expandable__trigger ${expandedSection === 'setup' ? 'active' : ''}`}
          onClick={() => setExpandedSection(expandedSection === 'setup' ? null : 'setup')}
        >
          <span>Quick Setup Guide</span>
          <ChevronDown size={18} />
        </button>
        {expandedSection === 'setup' && (
          <div className="tap-expandable__content">
            <pre>{`# Install and run the relay
curl -sSL https://tap.mattssoftware.com/install.sh | bash
tap-relay

# First run: set master passphrase, get API token
# Then on your watch/phone: enter relay URL + token`}</pre>
          </div>
        )}

        <button
          className={`tap-expandable__trigger ${expandedSection === 'config' ? 'active' : ''}`}
          onClick={() => setExpandedSection(expandedSection === 'config' ? null : 'config')}
        >
          <span>Relay Configuration</span>
          <ChevronDown size={18} />
        </button>
        {expandedSection === 'config' && (
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

      {/* Final CTA */}
      <section className="tap-cta">
        <h2>Your servers are waiting.</h2>
        <p>Free forever. Open source. No phone required.</p>
        <div className="tap-cta__buttons">
          <a href="https://github.com/InfamousVague/tap" className="btn btn--tap" target="_blank" rel="noopener">
            <ExternalLink size={18} /> View on GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
