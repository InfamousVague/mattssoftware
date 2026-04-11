import { useEffect, useState } from "react";
import { Download, ExternalLink, Shield, Users, Terminal, Activity, Import, GitMerge, Share2, Clock, ChevronDown, Lock, Key, Eye, EyeOff, Clipboard, Wifi } from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./AppPage.css";
import "./Stash.css";

// ── Feature sections (alternating hero layout) ───────────────

const FEATURES: FeatureSection[] = [
  {
    badge: "Vault",
    title: "AES-256 encryption. Argon2id key derivation. Your .env files are Fort Knox now.",
    description: "Every project gets its own encrypted vault secured by your master password. Import existing .env files or generate new ones from framework templates. Profiles let you juggle dev, staging, and production without the mess.",
    bullets: [
      "AES-256-GCM encryption with Argon2id key derivation",
      "Touch ID / Keychain unlock on macOS — no password retyping",
      "Profile switching: dev, staging, production, whatever you need",
      "Framework templates for Next.js, Express, Django, Rails, and more",
    ],
    image: "/stash/screenshots/vault.png",
    imageAlt: "Stash encrypted vault interface",
  },
  {
    badge: "Team Sync",
    title: "Share secrets without sharing secrets.",
    description: "Encrypted team sharing using X25519 public-key cryptography. Each teammate gets their own keypair. Push encrypts your .env for every member. Pull decrypts only what's yours. The .stash.lock file is safe to commit.",
    bullets: [
      "X25519 ECDH key exchange — private keys never leave your machine",
      "Per-member encryption — each person can only decrypt their own copy",
      ".stash.lock is git-safe — commit it, share it, nobody sees plaintext",
      "Contact address book with shareable stash:// deep links",
    ],
    image: "/stash/screenshots/team.png",
    imageAlt: "Stash team sharing panel",
  },
  {
    badge: "Pull Preview",
    title: "Never blindly overwrite .env again.",
    description: "When teammates push changes, the Pull Preview shows exactly what's different — per-profile, per-key. Cherry-pick the changes you want, skip the rest. A backup is created before every merge.",
    bullets: [
      "Per-key diff: added (green), removed (red), changed (yellow)",
      "Checkbox selection — accept only the keys you want",
      "Automatic .env backup before every merge",
      "Unchanged keys clearly counted so you know what's stable",
    ],
    image: "/stash/screenshots/pull-preview.png",
    imageAlt: "Stash pull preview with per-key conflict resolution",
  },
  {
    badge: "CLI",
    title: "stash pull. stash push. stash switch. Done.",
    description: "Full-featured CLI that lives in your terminal. Pull decrypted vars, push encrypted changes, switch profiles, diff environments, export to JSON/YAML/Docker/GitHub Actions, and run commands with injected env vars.",
    bullets: [
      "12 commands: pull, push, switch, list, init, status, diff, keys, add, remove, run, export",
      "Export to JSON, YAML, Docker env-file, or GitHub Actions secret commands",
      "stash run — inject env vars into any command without touching .env",
      "One-click install from the desktop app to /usr/local/bin/stash",
    ],
    image: "/stash/screenshots/cli.png",
    imageAlt: "Stash CLI in terminal",
  },
  {
    badge: "Key Health",
    title: "Your API key expired 3 months ago. We noticed.",
    description: "Automated health checks across all your projects. Stash flags stale keys, format issues, git exposure, duplicate values, overlapping key names, and approaching expiry dates.",
    bullets: [
      "Staleness detection: flags keys not rotated in 30+ or 90+ days",
      "Format validation for AWS, Stripe, GitHub tokens, URLs, and ports",
      "Git exposure scanner — finds .env files tracked in version control",
      "Expiry tracking with configurable warning thresholds",
    ],
    image: "/stash/screenshots/health.png",
    imageAlt: "Stash health monitor dashboard",
  },
  {
    badge: "Directory",
    title: "600 APIs, all the keys they need, zero Googling.",
    description: "Built-in API directory with 600+ services organized by category. Each entry lists the environment variables it needs and links directly to the provider's key portal. Stop guessing what NEXT_PUBLIC_STRIPE_KEY should be called.",
    bullets: [
      "600+ services: Stripe, AWS, Firebase, Twilio, SendGrid, and more",
      "Category filters: Payment, Auth, Storage, Email, Analytics, etc.",
      "Direct links to provider portals for key generation",
      "Generate .env templates from selected services",
    ],
    image: "/stash/screenshots/directory.png",
    imageAlt: "Stash API directory with service listings",
  },
];

// ── Capabilities grid items ──────────────────────────────────

const CAPABILITIES = [
  { icon: Import, label: "Bulk Import", desc: "Paste KEY=VALUE lines or drop a file. Preview before importing." },
  { icon: Share2, label: "Single-Var Sharing", desc: "Share one secret via encrypted deep link. No full push needed." },
  { icon: Wifi, label: "Local-Only Mode", desc: "Gitignore .env files and .stash.lock with one toggle. Keep secrets entirely off version control." },
  { icon: Clock, label: "Lock Changelog", desc: "See who changed .stash.lock and when, straight from git history." },
  { icon: GitMerge, label: ".env.example Export", desc: "Generate a safe-to-commit template with keys but no values." },
  { icon: Shield, label: "Paste Detection", desc: "Paste an API key and Stash auto-detects the service (AWS, Stripe, etc.)." },
];

// ── Side-by-side comparison cards ────────────────────────────

interface ComparisonCard {
  competitor: string;
  verdict: string;
  stashWins: string[];
  theyWin: string[];
}

const COMPARISONS: ComparisonCard[] = [
  {
    competitor: "Committing .env to git",
    verdict: "Stash encrypts what git exposes",
    stashWins: ["Encrypted at rest and in transit", "Per-member keys — not a shared password", "Health monitoring catches stale & leaked keys", "Pull preview prevents blind overwrites"],
    theyWin: ["Zero setup — just commit"],
  },
  {
    competitor: "1Password / HashiCorp Vault",
    verdict: "Stash is git-native and free",
    stashWins: ["No cloud account or subscription", "Works fully offline", "Git-native sync via .stash.lock", "Purpose-built for .env workflows"],
    theyWin: ["Broader secret types (SSH, certs)", "Enterprise access policies"],
  },
  {
    competitor: "Doppler / Infisical",
    verdict: "Stash keeps secrets on your machine",
    stashWins: ["No cloud dependency — fully local", "Per-member public-key crypto", "Per-key conflict resolution", "Native desktop app, not a web dashboard"],
    theyWin: ["Hosted dashboards for large teams", "Runtime injection via SDK"],
  },
  {
    competitor: "dotenv-vault",
    verdict: "Stash gives you more control",
    stashWins: ["No account required", "Per-member encryption (not one master key)", "Key health monitoring built-in", "Visual desktop app + CLI"],
    theyWin: ["Framework-agnostic cloud sync", "CI/CD integration"],
  },
];

// ── Animated terminal lines ──────────────────────────────────

const TERMINAL_LINES = [
  { prompt: true, text: "stash pull" },
  { prompt: false, text: "✓ Decrypted 3 profiles (12 keys) from .stash.lock" },
  { prompt: true, text: "stash switch staging" },
  { prompt: false, text: "✓ Active profile: staging (symlinked .env → .env.staging)" },
  { prompt: true, text: "stash push" },
  { prompt: false, text: "✓ Encrypted for 3 team members → .stash.lock updated" },
  { prompt: true, text: "stash run -- npm start" },
  { prompt: false, text: "● Injecting 12 env vars into npm start..." },
];

// ── Service detection patterns ───────────────────────────────

const SERVICE_PATTERNS: [string, string][] = [
  ["sk_live_", "Stripe"],
  ["sk_test_", "Stripe"],
  ["AKIA", "AWS"],
  ["ghp_", "GitHub"],
  ["xoxb-", "Slack"],
  ["SG.", "SendGrid"],
  ["AIza", "Google Cloud"],
  ["sk-", "OpenAI"],
];

function detectService(val: string): string | null {
  for (const [prefix, name] of SERVICE_PATTERNS) {
    if (val.startsWith(prefix)) return name;
  }
  return null;
}

// ── GitHub release helper ────────────────────────────────────

async function getStashRelease(): Promise<{ url: string; version: string }> {
  const fallback = { url: "https://github.com/InfamousVague/Stash/releases/latest", version: "" };
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Stash/releases/latest");
    if (!res.ok) return fallback;
    const data = await res.json();
    const dmg = data.assets?.find((a: { name: string }) => a.name.endsWith(".dmg"));
    return { url: dmg?.browser_download_url || fallback.url, version: data.tag_name || "" };
  } catch {
    return fallback;
  }
}

// ── Animated terminal component ──────────────────────────────

function AnimatedTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => (prev >= TERMINAL_LINES.length ? 0 : prev + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stash-terminal">
      <div className="stash-terminal__titlebar">
        <span className="stash-terminal__dot stash-terminal__dot--red" />
        <span className="stash-terminal__dot stash-terminal__dot--yellow" />
        <span className="stash-terminal__dot stash-terminal__dot--green" />
        <span className="stash-terminal__titlebar-text">stash — Terminal</span>
      </div>
      <div className="stash-terminal__body">
        {TERMINAL_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`stash-terminal__line ${line.prompt ? "stash-terminal__line--prompt" : "stash-terminal__line--output"}`}>
            {line.prompt && <span className="stash-terminal__prompt">$</span>}
            <span>{line.text}</span>
          </div>
        ))}
        {visibleLines < TERMINAL_LINES.length && (
          <div className="stash-terminal__line stash-terminal__line--prompt">
            <span className="stash-terminal__prompt">$</span>
            <span className="stash-terminal__cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Interactive paste detection demo ─────────────────────────

function PasteDetectionDemo() {
  const [demoKey, setDemoKey] = useState("API_KEY");
  const [demoValue, setDemoValue] = useState("");
  const [detected, setDetected] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const handleValueChange = (val: string) => {
    setDemoValue(val);
    const service = detectService(val.trim());
    setDetected(service);
  };

  return (
    <div className="stash-paste-demo">
      <div className="stash-paste-demo__header">Try it — paste an API key</div>
      <div className="stash-paste-demo__row">
        <input
          className="stash-paste-demo__key"
          value={demoKey}
          onChange={(e) => setDemoKey(e.target.value)}
          placeholder="KEY"
        />
        <span className="stash-paste-demo__eq">=</span>
        <div className="stash-paste-demo__value-wrap">
          <input
            className="stash-paste-demo__value"
            type={visible ? "text" : "password"}
            value={demoValue}
            onChange={(e) => handleValueChange(e.target.value)}
            placeholder="sk_live_... or AKIA... or ghp_..."
          />
          <button className="stash-paste-demo__toggle" onClick={() => setVisible(!visible)} aria-label="Toggle visibility">
            {visible ? <EyeOff size={14} /> : <Eye size={14} />}
          </button>
        </div>
      </div>
      {detected && (
        <div className="stash-paste-demo__detected">
          <Key size={14} />
          <span>Detected: <strong>{detected}</strong></span>
        </div>
      )}
      {!detected && demoValue.length > 0 && (
        <div className="stash-paste-demo__encrypted">
          <Lock size={14} />
          <span>Encrypted with AES-256-GCM</span>
        </div>
      )}
      {!demoValue && (
        <div className="stash-paste-demo__hint">
          <Clipboard size={14} />
          <span>Stash auto-detects AWS, Stripe, GitHub, Slack, OpenAI, and more</span>
        </div>
      )}
    </div>
  );
}

// ── Expandable section ───────────────────────────────────────

function Expandable({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`stash-expandable ${open ? "stash-expandable--open" : ""}`}>
      <button className="stash-expandable__trigger" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <ChevronDown size={16} className="stash-expandable__chevron" />
      </button>
      {open && <div className="stash-expandable__content">{children}</div>}
    </div>
  );
}

// ── Download button (reusable) ───────────────────────────────

function DownloadCTA({ url, version }: { url: string; version: string }) {
  return (
    <div className="stash-inline-cta">
      <a href={url} className="btn btn--stash"><Download size={16} /> Download{version ? ` ${version}` : ""}</a>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────

export function StashPage() {
  const [downloadUrl, setDownloadUrl] = useState("https://github.com/InfamousVague/Stash/releases/latest");
  const [version, setVersion] = useState("");

  useEffect(() => {
    getStashRelease().then(({ url, version }) => { setDownloadUrl(url); setVersion(version); });
  }, []);

  return (
    <div className="app-page stash-page">
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="app-page__hero">
        <img src="/stash/app-icon.png" alt="Stash" className="app-page__icon" />
        <h1 className="app-page__title">Stash</h1>
        <p className="app-page__tagline">Your .env files deserve a bodyguard.</p>
        <p className="app-page__desc">
          Encrypted vault for environment variables. Team sharing with public-key crypto. A CLI that actually works. Health monitoring that catches leaked secrets. All offline, all yours.
        </p>
        <div className="app-page__actions">
          <a href={downloadUrl} className="btn btn--stash"><Download size={16} /> Download{version ? ` ${version}` : ""}</a>
          <a href="https://github.com/InfamousVague/Stash" className="btn btn--ghost" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> View on GitHub</a>
        </div>
        <span className="app-page__req">macOS &middot; Free &amp; Open Source</span>
      </section>

      {/* Animated terminal below hero */}
      <div className="stash-hero-terminal">
        <AnimatedTerminal />
      </div>

      {/* ── Stats bar ───────────────────────────────────── */}
      <section className="stash-stats">
        <div className="stash-stats__item">
          <span className="stash-stats__value">AES-256</span>
          <span className="stash-stats__label">Encryption</span>
        </div>
        <div className="stash-stats__divider" />
        <div className="stash-stats__item">
          <span className="stash-stats__value">X25519</span>
          <span className="stash-stats__label">Key Exchange</span>
        </div>
        <div className="stash-stats__divider" />
        <div className="stash-stats__item">
          <span className="stash-stats__value">600+</span>
          <span className="stash-stats__label">API Services</span>
        </div>
        <div className="stash-stats__divider" />
        <div className="stash-stats__item">
          <span className="stash-stats__value">15</span>
          <span className="stash-stats__label">Languages</span>
        </div>
        <div className="stash-stats__divider" />
        <div className="stash-stats__item">
          <span className="stash-stats__value">12</span>
          <span className="stash-stats__label">CLI Commands</span>
        </div>
      </section>

      {/* ── Feature sections ────────────────────────────── */}
      <FeatureShowcase features={FEATURES} />

      {/* Inline CTA after features */}
      <DownloadCTA url={downloadUrl} version={version} />

      {/* ── Interactive paste demo ──────────────────────── */}
      <section className="section">
        <h2 className="section__title">Smart enough to know what you just pasted</h2>
        <p className="section__subtitle">Stash detects API key formats automatically — no manual tagging needed.</p>
        <PasteDetectionDemo />
      </section>

      {/* ── Capabilities grid ───────────────────────────── */}
      <section className="section">
        <h2 className="section__title">And that's not all</h2>
        <p className="section__subtitle">Every tool you need for a bulletproof .env workflow.</p>
        <div className="stash-caps">
          {CAPABILITIES.map((cap) => (
            <div key={cap.label} className="stash-caps__card card">
              <cap.icon size={20} className="stash-caps__icon" />
              <span className="stash-caps__label">{cap.label}</span>
              <span className="stash-caps__desc">{cap.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Side-by-side comparisons ────────────────────── */}
      <section className="section">
        <h2 className="section__title">How Stash compares</h2>
        <p className="section__subtitle">Most teams use one of these. None of them do everything.</p>
        <div className="stash-versus">
          {COMPARISONS.map((card) => (
            <div key={card.competitor} className="stash-versus__card card">
              <div className="stash-versus__header">
                <span className="stash-versus__vs">Stash vs</span>
                <span className="stash-versus__competitor">{card.competitor}</span>
              </div>
              <p className="stash-versus__verdict">{card.verdict}</p>
              <div className="stash-versus__columns">
                <div className="stash-versus__col">
                  <span className="stash-versus__col-label stash-versus__col-label--stash">Stash wins</span>
                  {card.stashWins.map((w, i) => (
                    <div key={i} className="stash-versus__point stash-versus__point--win">
                      <span className="stash-versus__dot stash-versus__dot--green" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
                <div className="stash-versus__col">
                  <span className="stash-versus__col-label stash-versus__col-label--they">They win</span>
                  {card.theyWin.map((w, i) => (
                    <div key={i} className="stash-versus__point stash-versus__point--lose">
                      <span className="stash-versus__dot stash-versus__dot--neutral" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inline CTA after comparisons */}
      <DownloadCTA url={downloadUrl} version={version} />

      {/* ── Security architecture ───────────────────────── */}
      <section className="section">
        <h2 className="section__title">Security architecture</h2>
        <p className="section__subtitle">Every layer is designed so your secrets stay yours.</p>
        <div className="stash-security">
          <div className="stash-security__card card">
            <Shield size={24} className="stash-security__icon" />
            <h3 className="stash-security__title">Vault Encryption</h3>
            <p className="stash-security__desc">AES-256-GCM with a master key derived via Argon2id. Each vault is independently encrypted. Touch ID unlocks via the macOS Secure Enclave.</p>
          </div>
          <div className="stash-security__card card">
            <Users size={24} className="stash-security__icon" />
            <h3 className="stash-security__title">Team Crypto</h3>
            <p className="stash-security__desc">X25519 ECDH key agreement generates a shared secret per teammate. Each member's .env is encrypted with their own derived key. Private keys never leave the machine.</p>
          </div>
          <div className="stash-security__card card">
            <Terminal size={24} className="stash-security__icon" />
            <h3 className="stash-security__title">Lock File</h3>
            <p className="stash-security__desc">.stash.lock v2 stores per-profile encrypted blobs and public key metadata. Safe to commit — it's ciphertext, not secrets. Pull preview lets you review before merging.</p>
          </div>
          <div className="stash-security__card card">
            <Activity size={24} className="stash-security__icon" />
            <h3 className="stash-security__title">Runtime Safety</h3>
            <p className="stash-security__desc">Session files locked to 0600 permissions. No telemetry, no analytics, no network calls except OTA update checks. Everything runs locally on your machine.</p>
          </div>
        </div>

        {/* Architecture flow diagram */}
        <div className="stash-arch">
          <div className="stash-arch__step">
            <div className="stash-arch__node">.env files</div>
            <div className="stash-arch__label">Plaintext on disk</div>
          </div>
          <div className="stash-arch__arrow">&rarr;</div>
          <div className="stash-arch__step">
            <div className="stash-arch__node stash-arch__node--accent">Stash Vault</div>
            <div className="stash-arch__label">AES-256-GCM + Argon2id</div>
          </div>
          <div className="stash-arch__arrow">&rarr;</div>
          <div className="stash-arch__step">
            <div className="stash-arch__node">.stash.lock</div>
            <div className="stash-arch__label">Per-member X25519</div>
          </div>
          <div className="stash-arch__arrow">&rarr;</div>
          <div className="stash-arch__step">
            <div className="stash-arch__node">Git</div>
            <div className="stash-arch__label">Safe to commit</div>
          </div>
        </div>
      </section>

      {/* ── Use cases ───────────────────────────────────── */}
      <section className="section">
        <h2 className="section__title">Built for how teams actually work</h2>
        <p className="section__subtitle">Real workflows, not hypothetical ones.</p>
        <div className="stash-usecases">
          <div className="stash-usecases__card card">
            <h3 className="stash-usecases__title">Onboarding a new developer</h3>
            <p className="stash-usecases__desc">They install Stash, generate a keypair, and share their public key. You add them on the People page, push the lock file, and they pull — every .env they need is decrypted on their machine. No Slack DMs, no shared passwords, no "ask Jake for the Stripe key."</p>
          </div>
          <div className="stash-usecases__card card">
            <h3 className="stash-usecases__title">Rotating a compromised key</h3>
            <p className="stash-usecases__desc">Update the key in Stash, push the lock file. Every teammate pulls the change and the health monitor stops flagging it. The changelog shows exactly when it was rotated and by whom. The old value is preserved in history if you need to roll back.</p>
          </div>
          <div className="stash-usecases__card card">
            <h3 className="stash-usecases__title">Setting up a new microservice</h3>
            <p className="stash-usecases__desc">Scan your filesystem to import the .env. Stash auto-detects the framework, matches API keys to the 600+ service directory, and validates formats. Enable sharing with the wizard — identity, members, and encryption in three clicks.</p>
          </div>
          <div className="stash-usecases__card card">
            <h3 className="stash-usecases__title">Auditing secrets across 20 projects</h3>
            <p className="stash-usecases__desc">Open the Health page: stale keys, exposed .env files in git, format violations, and approaching expiry dates — all in one dashboard. Export .env.example files so contributors know what's needed without seeing values.</p>
          </div>
        </div>
      </section>

      {/* ── Tech stack + details (expandable) ───────────── */}
      <section className="section">
        <h2 className="section__title">Under the hood</h2>
        <p className="section__subtitle">Native performance, modern tooling, zero Electron.</p>
        <div className="stash-tech">
          <div className="stash-tech__item"><span className="stash-tech__label">Frontend</span><span className="stash-tech__value">React 19 + TypeScript + Vite</span></div>
          <div className="stash-tech__item"><span className="stash-tech__label">Backend</span><span className="stash-tech__value">Rust (Tauri 2)</span></div>
          <div className="stash-tech__item"><span className="stash-tech__label">Encryption</span><span className="stash-tech__value">AES-256-GCM + Argon2id + X25519</span></div>
          <div className="stash-tech__item"><span className="stash-tech__label">Biometrics</span><span className="stash-tech__value">macOS Keychain / Secure Enclave</span></div>
          <div className="stash-tech__item"><span className="stash-tech__label">Sync</span><span className="stash-tech__value">Git-native via .stash.lock</span></div>
          <div className="stash-tech__item"><span className="stash-tech__label">Bundle</span><span className="stash-tech__value">~8 MB (vs ~200 MB Electron)</span></div>
          <div className="stash-tech__item"><span className="stash-tech__label">i18n</span><span className="stash-tech__value">15 languages</span></div>
          <div className="stash-tech__item"><span className="stash-tech__label">Updates</span><span className="stash-tech__value">Signed OTA with in-app progress</span></div>
        </div>

        <div className="stash-expandables">
          <Expandable title="Deep links & protocol handlers">
            <div className="stash-expandable-table">
              <div className="stash-expandable-table__row"><code>stash://add-contact?name=...&key=...</code><span>Add a teammate by public key</span></div>
              <div className="stash-expandable-table__row"><code>stash://import-var?key=...&enc=...&from=...</code><span>Import an encrypted variable</span></div>
              <div className="stash-expandable-table__row"><code>stash://import-key?service=...&envKey=...</code><span>Import an API key from a link</span></div>
            </div>
          </Expandable>
          <Expandable title="CLI command reference">
            <div className="stash-expandable-table">
              <div className="stash-expandable-table__row"><code>stash pull</code><span>Decrypt .stash.lock into .env files</span></div>
              <div className="stash-expandable-table__row"><code>stash push</code><span>Encrypt .env files into .stash.lock</span></div>
              <div className="stash-expandable-table__row"><code>stash switch &lt;profile&gt;</code><span>Switch active profile</span></div>
              <div className="stash-expandable-table__row"><code>stash run -- &lt;cmd&gt;</code><span>Run with injected env vars</span></div>
              <div className="stash-expandable-table__row"><code>stash diff</code><span>Compare profiles side by side</span></div>
              <div className="stash-expandable-table__row"><code>stash export</code><span>Export to JSON, YAML, Docker, GitHub Actions</span></div>
              <div className="stash-expandable-table__row"><code>stash status</code><span>Show sync status</span></div>
              <div className="stash-expandable-table__row"><code>stash keys</code><span>List all keys in current profile</span></div>
              <div className="stash-expandable-table__row"><code>stash add &lt;key&gt; &lt;value&gt;</code><span>Add or update a variable</span></div>
              <div className="stash-expandable-table__row"><code>stash remove &lt;key&gt;</code><span>Remove a variable</span></div>
              <div className="stash-expandable-table__row"><code>stash init</code><span>Initialize .stash.lock</span></div>
              <div className="stash-expandable-table__row"><code>stash list</code><span>List all projects</span></div>
            </div>
          </Expandable>
          <Expandable title="Supported API key formats">
            <div className="stash-expandable-table">
              <div className="stash-expandable-table__row"><code>AKIA...</code><span>AWS Access Key</span></div>
              <div className="stash-expandable-table__row"><code>sk_live_ / sk_test_</code><span>Stripe Secret Key</span></div>
              <div className="stash-expandable-table__row"><code>ghp_ / gho_ / ghs_</code><span>GitHub Personal Access Token</span></div>
              <div className="stash-expandable-table__row"><code>xoxb- / xoxp-</code><span>Slack Bot / User Token</span></div>
              <div className="stash-expandable-table__row"><code>SG.</code><span>SendGrid API Key</span></div>
              <div className="stash-expandable-table__row"><code>AIza</code><span>Google Cloud API Key</span></div>
              <div className="stash-expandable-table__row"><code>sk-</code><span>OpenAI API Key</span></div>
              <div className="stash-expandable-table__row"><code>sq0atp- / sq0csp-</code><span>Square Access Token</span></div>
            </div>
          </Expandable>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="section stash-cta">
        <h2 className="section__title">Ready to stop leaking secrets?</h2>
        <p className="section__subtitle">Free, open source, and built for people who ship.</p>
        <div className="stash-cta__actions">
          <a href={downloadUrl} className="btn btn--stash"><Download size={16} /> Download{version ? ` ${version}` : ""}</a>
          <a href="https://github.com/InfamousVague/Stash" className="btn btn--ghost" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> View on GitHub</a>
        </div>
      </section>
    </div>
  );
}
