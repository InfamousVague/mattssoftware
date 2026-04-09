import { useEffect, useState } from "react";
import { Download, ExternalLink } from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./AppPage.css";

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

async function getStashDownloadUrl(): Promise<string> {
  try {
    const res = await fetch("https://api.github.com/repos/InfamousVague/Stash/releases/latest");
    if (!res.ok) return "https://github.com/InfamousVague/Stash/releases/latest";
    const data = await res.json();
    const dmg = data.assets?.find((a: { name: string }) => a.name.endsWith(".dmg"));
    return dmg?.browser_download_url || "https://github.com/InfamousVague/Stash/releases/latest";
  } catch {
    return "https://github.com/InfamousVague/Stash/releases/latest";
  }
}

export function StashPage() {
  const [downloadUrl, setDownloadUrl] = useState("https://github.com/InfamousVague/Stash/releases/latest");

  useEffect(() => {
    getStashDownloadUrl().then(setDownloadUrl);
  }, []);

  return (
    <div className="app-page">
      <section className="app-page__hero">
        <img src="/stash/app-icon.png" alt="Stash" className="app-page__icon" />
        <h1 className="app-page__title">Stash</h1>
        <p className="app-page__tagline">Your .env files deserve a bodyguard.</p>
        <p className="app-page__desc">
          Encrypted vault for environment variables. Team sharing with public-key crypto. A CLI that actually works. Health monitoring that catches leaked secrets. All offline, all yours.
        </p>
        <div className="app-page__actions">
          <a href={downloadUrl} className="btn btn--primary"><Download size={16} /> Download for macOS</a>
          <a href="https://github.com/InfamousVague/Stash" className="btn btn--ghost" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> View on GitHub</a>
        </div>
        <span className="app-page__req">macOS &middot; Free &amp; Open Source</span>
      </section>

      <FeatureShowcase features={FEATURES} />

      <section className="section" style={{ textAlign: "center" }}>
        <h2 className="section__title">Ready to stop leaking secrets?</h2>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32 }}>
          <a href={downloadUrl} className="btn btn--primary"><Download size={16} /> Download for macOS</a>
          <a href="https://github.com/InfamousVague/Stash" className="btn btn--ghost" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> View on GitHub</a>
        </div>
      </section>
    </div>
  );
}
