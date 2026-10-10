import { Bookmark, Eye, FolderTree, GitBranch } from "@glacier/icons";
import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { Checks, Flow, Section, Stats, Tiles } from "../components/sections";

// Hardcoded English copy: this page has no block in src/i18n/locales, so it
// reads the same in every language.

const FEATURES: FeatureSection[] = [
  {
    badge: "macOS · Menu Bar",
    title: "The repo + branch you're editing, always in the menu bar.",
    description:
      "Worktree follows your editor focus and shows which git project + " +
      "branch you're currently in. Cmd-Tab between projects and the menu " +
      "bar updates within the second. The popover opens a one-stop git " +
      "console for the focused repo, branches, worktrees, fetch, pull, " +
      "new-branch, new-worktree, without leaving the keyboard.",
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
    title: "Knows where you're editing, across every editor.",
    description:
      "Worktree maps the frontmost macOS app to the folder you're working " +
      "in via per-app adapters. No browser extension, no shell helper, no " +
      "config. It just works in the editors and terminals you already use, " +
      "and falls back to reading the frontmost process's working directory " +
      "when there's no purpose-built adapter.",
    bullets: [
      "Xcode, AppleScript dictionary returns the active workspace path",
      "VS Code / Cursor / Windsurf / Code-OSS, reads the live windowsState from storage.json + Accessibility window-title disambiguation",
      "Terminal / iTerm2 / Ghostty / Hyper / Warp / Alacritty / Kitty / Wezterm / Tabby / Zed, walks the descendant process tree to the shell's CWD",
      "Generic processes, proc_pidinfo CWD as the catch-all fallback",
    ],
    imageAlt: "Worktree detecting projects across Xcode, VS Code, and Terminal",
  },
  {
    badge: "Saved projects",
    title: "Manage branches on projects you aren't focused in.",
    description:
      "Bookmark a project once and it lives in the SAVED section of the " +
      "popover forever. Tap a saved project to pin the popover view to it " +
      ",  branches, worktrees, fetch, pull, even new-branch and new-worktree " +
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
  "Five active branches across three repos and you can't remember which is checked out where",
  "Quick context-switch from feature/foo back to main without opening the editor's command palette",
  "Spinning up a new git worktree to try a refactor in parallel without touching the main checkout",
  "Client A and Client B in different projects, bookmark both, switch branches without ever Cmd-Tabbing",
  "Pulling main on every saved repo before you go offline for the day",
  "You forgot which branch you're on and it's 11pm and you're about to commit",
];

export function WorktreePage() {
  return (
    <AppPage
      themeId="worktree"
      title="Worktree"
      tagline="Your current git project + branch, always in the menu bar."
      description={
        "Worktree follows your editor focus and shows which git repo + branch you're in. " +
        "One click to switch branches, manage git worktree instances, or fetch + pull. " +
        "Save projects you care about and manage their branches even when you're focused somewhere else."
      }
      heroImage="/worktree/hero.png"
      icon="/worktree/app-icon.png"
      requirements="macOS 14+ · Menu Bar · Free & Open Source"
      cta={{ kind: "github", repo: "Worktree" }}
      menuBarApp
      closingTitle="Stop alt-tabbing just to read your branch name."
      closingNote="Free forever. Open source. Lives quietly in the menu bar."
    >
      <section className="sec sec--tight">
        <Stats items={STATS} />
      </section>

      <FeatureShowcase features={FEATURES} />

      <Section title="What's in the popover" center>
        <Flow
          parts={[
            { node: "Detect focus", icon: <Eye size={18} aria-hidden /> },
            { link: <GitBranch size={16} aria-hidden /> },
            { node: "Branches + worktrees", icon: <FolderTree size={18} aria-hidden /> },
            { link: <GitBranch size={16} aria-hidden /> },
            { node: "Saved projects", icon: <Bookmark size={18} aria-hidden /> },
          ]}
        />
      </Section>

      <Section title="When you'd reach for it">
        <Checks items={USE_CASES} />
      </Section>

      <Section title="Honest mechanics">
        <Tiles
          items={[
            {
              title: "Editor detection is best-effort",
              body: "Multi-window VS Code / Cursor needs Accessibility permission to disambiguate which window is focused (it reads the title). Without AX, single-window detection still works; multi-window setups need the one-time grant.",
            },
            {
              title: "Shells out to /usr/bin/git",
              body: "Worktree spawns the system git for every operation. It works with whatever you have installed (Apple CLT, homebrew, fork variants) and never ships its own ABI surface. ~3ms per call, imperceptible at user-click rate.",
            },
            {
              title: "Sticky on non-coding apps",
              body: "Focus Mail or Slack and the menu bar keeps showing your last-known repo. The indicator behaves like state, not a live feed that's mostly silent.",
            },
          ]}
        />
      </Section>

    </AppPage>
  );
}
