import { useEffect, useState } from "react";
import {
  Download,
  ExternalLink,
  GitBranch,
  FolderTree,
  Bookmark,
  Eye,
} from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
// Reuses Tap.css for the hero / stats / usecases / arch class set —
// same pattern Seasick.tsx and Espresso.tsx follow. Cleanup-by-
// renaming-these-classes-to-appPage-* is a future task.
import "./Tap.css";

// Hardcoded English copy. The newer pages on the site (Stats,
// Sentry, Quarantine, …) localize through src/i18n/locales/*
// against a strict BaseAppCopy shape — would require adding
// a `worktree` block to every one of the 9 locales before
// TypeScript will compile. Mirrors the older Tap / Espresso /
// Seasick landing-page approach to keep this shippable in one
// commit.

const FEATURES: FeatureSection[] = [
  {
    badge: "macOS · Menu Bar",
    title: "The repo + branch you're editing, always in the menu bar.",
    description:
      "Worktree follows your editor focus and shows which git project + " +
      "branch you're currently in. Cmd-Tab between projects and the menu " +
      "bar updates within the second. The popover opens a one-stop git " +
      "console for the focused repo — branches, worktrees, fetch, pull, " +
      "new-branch, new-worktree — without leaving the keyboard.",
    bullets: [
      "Menu-bar status item shows live branch name with the official Git mark",
      "320pt popover with branches list, worktrees list, status pills (ahead / behind / dirty)",
      "One-click branch switching, fetch (--all --prune), pull (--ff-only)",
      "Sheets for new-branch (git switch -c) and add-worktree (git worktree add)",
    ],
    imageAlt: "Worktree menu-bar popover showing repo, branch, and worktrees",
  },
  {
    badge: "Focus detection",
    title: "Knows where you're editing — across every editor.",
    description:
      "Worktree maps the frontmost macOS app to the folder you're working " +
      "in via per-app adapters. No browser extension, no shell helper, no " +
      "config. It just works in the editors and terminals you already use, " +
      "and falls back to reading the frontmost process's working directory " +
      "when there's no purpose-built adapter.",
    bullets: [
      "Xcode — AppleScript dictionary returns the active workspace path",
      "VS Code / Cursor / Windsurf / Code-OSS — reads the live windowsState from storage.json + Accessibility window-title disambiguation",
      "Terminal / iTerm2 / Ghostty / Hyper / Warp / Alacritty / Kitty / Wezterm / Tabby / Zed — walks the descendant process tree to the shell's CWD",
      "Generic processes — proc_pidinfo CWD as the catch-all fallback",
    ],
    imageAlt: "Worktree detecting projects across Xcode, VS Code, and Terminal",
  },
  {
    badge: "Saved projects",
    title: "Manage branches on projects you aren't focused in.",
    description:
      "Bookmark a project once and it lives in the SAVED section of the " +
      "popover forever. Tap a saved project to pin the popover view to it " +
      "— branches, worktrees, fetch, pull, even new-branch and new-worktree " +
      "sheets all act on the pinned project regardless of which app is " +
      "frontmost. Click 'Follow focus' to return to auto-follow mode.",
    bullets: [
      "Persisted across launches (UserDefaults JSON, no cloud sync involved)",
      "Saved list shows each project's last-known branch inline",
      "Pin-to-view: act on a saved repo without switching to it in your editor",
      "Right-click → Remove from saved",
    ],
    imageAlt: "Saved projects list in the Worktree popover",
  },
];

const STATS = [
  { value: "10+", label: "Supported editors" },
  { value: "1-click", label: "Branch switching" },
  { value: "Saved", label: "Projects across launches" },
  { value: "MIT", label: "Open source" },
];

const USE_CASES = [
  { emoji: "🌲", text: "Five active branches across three repos and you can't remember which is checked out where" },
  { emoji: "🔁", text: "Quick context-switch from feature/foo back to main without opening the editor's command palette" },
  { emoji: "🪟", text: "Spinning up a new git worktree to try a refactor in parallel without touching the main checkout" },
  { emoji: "📦", text: "Client A and Client B in different projects — bookmark both, switch branches without ever Cmd-Tabbing" },
  { emoji: "🛬", text: "Pulling main on every saved repo before you go offline for the day" },
  { emoji: "🧭", text: "You forgot which branch you're on and it's 11pm and you're about to commit" },
];

interface ReleaseInfo {
  url: string;
  version: string;
}

async function getRelease(repo: string): Promise<ReleaseInfo> {
  const fallback = {
    url: `https://github.com/InfamousVague/${repo}/releases/latest`,
    version: "",
  };
  try {
    const res = await fetch(
      `https://api.github.com/repos/InfamousVague/${repo}/releases/latest`,
    );
    if (!res.ok) return fallback;
    const data = await res.json();
    const dmg = data.assets?.find(
      (a: { name: string }) => a.name.toLowerCase().endsWith(".dmg"),
    );
    return {
      url: dmg?.browser_download_url || fallback.url,
      version: data.tag_name || "",
    };
  } catch {
    return fallback;
  }
}

export function WorktreePage() {
  const [mac, setMac] = useState<ReleaseInfo>({
    url: "https://github.com/InfamousVague/Worktree/releases/latest",
    version: "",
  });

  useEffect(() => {
    getRelease("Worktree").then(setMac);
  }, []);

  return (
    <div className="app-page worktree-page">
      {/* Hero */}
      <section className="tap-hero">
        <img
          src="/worktree/app-icon.png"
          alt="Worktree"
          className="tap-hero__app-icon"
        />
        <h1 className="tap-hero__title">Worktree</h1>
        <p className="tap-hero__tagline">
          Your current git project + branch, always in the menu bar.
        </p>
        <p className="tap-hero__subtitle">
          Worktree follows your editor focus and shows which git repo +
          branch you're in. One click to switch branches, manage{" "}
          <code>git worktree</code> instances, or fetch + pull.
          <br />
          Save projects you care about and manage their branches even when
          you're focused somewhere else.
        </p>
        <div className="tap-hero__badges">
          <span>macOS 14+</span>
          <span>Menu Bar</span>
          <span>Free &amp; Open Source</span>
        </div>
        <div className="tap-hero__buttons">
          <a
            href={mac.url}
            className="btn btn--tap-appstore"
            target="_blank"
            rel="noopener"
          >
            <Download size={18} />
            Download for Mac{mac.version ? ` (${mac.version})` : ""}
          </a>
          <a
            href="https://github.com/InfamousVague/Worktree"
            className="btn btn--tap"
            target="_blank"
            rel="noopener"
          >
            <ExternalLink size={18} /> GitHub
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="tap-stats">
        {STATS.map((stat) => (
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

      {/* What it does diagram */}
      <section className="tap-arch">
        <h2>What's in the popover</h2>
        <div className="tap-arch__diagram">
          <div className="tap-arch__node tap-arch__node--mac">
            <Eye size={24} />
            <span>Detect focus</span>
          </div>
          <div className="tap-arch__connector">
            <GitBranch size={18} />
          </div>
          <div className="tap-arch__node tap-arch__node--companion">
            <FolderTree size={24} />
            <span>Branches + worktrees</span>
          </div>
          <div className="tap-arch__connector">
            <GitBranch size={18} />
          </div>
          <div className="tap-arch__node tap-arch__node--mac">
            <Bookmark size={24} />
            <span>Saved projects</span>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="tap-usecases">
        <h2>When you'd reach for it</h2>
        <div className="tap-usecases__grid">
          {USE_CASES.map((uc) => (
            <div key={uc.text} className="tap-usecases__item">
              <span className="tap-usecases__emoji">{uc.emoji}</span>
              <span>{uc.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Honest reality — what works, what doesn't */}
      <section className="tap-tech">
        <h2>Honest mechanics</h2>
        <div className="tap-tech__grid">
          <div className="tap-tech__item">
            <strong>Editor detection is best-effort</strong>
            <span>
              Multi-window VS Code / Cursor needs Accessibility permission
              to disambiguate which window is focused (it reads the title).
              Without AX, single-window detection still works; multi-window
              setups need the one-time grant.
            </span>
          </div>
          <div className="tap-tech__item">
            <strong>Shells out to /usr/bin/git</strong>
            <span>
              Worktree spawns the system git for every operation — works
              with whatever you have installed (Apple CLT, homebrew, fork
              variants) and never ships its own ABI surface. ~3ms per call,
              imperceptible at user-click rate.
            </span>
          </div>
          <div className="tap-tech__item">
            <strong>Sticky on non-coding apps</strong>
            <span>
              Focus Mail or Slack and the menu bar keeps showing your
              last-known repo. The indicator behaves like state, not a
              live feed that's mostly silent.
            </span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="tap-cta">
        <h2>Stop alt-tabbing just to read your branch name.</h2>
        <p>Free forever. Open source. Lives quietly in the menu bar.</p>
        <div className="tap-cta__buttons">
          <a
            href={mac.url}
            className="btn btn--tap-appstore"
            target="_blank"
            rel="noopener"
          >
            <Download size={18} /> Mac{mac.version ? ` ${mac.version}` : ""}
          </a>
          <a
            href="https://github.com/InfamousVague/Worktree"
            className="btn btn--tap"
            target="_blank"
            rel="noopener"
          >
            <ExternalLink size={18} /> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
