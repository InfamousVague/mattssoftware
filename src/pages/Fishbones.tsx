import { useEffect, useState } from "react";
import {
  Download,
  ExternalLink,
  BookOpen,
  Sparkles,
  Code,
  Target,
  Flame,
  Terminal,
  Layers,
} from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./AppPage.css";
import "./Fishbones.css";

// Feature highlights — each becomes an alternating hero section. No
// screenshots yet; the FeatureShowcase component falls back to a
// "Screenshot coming soon" placeholder automatically.
const FEATURES: FeatureSection[] = [
  {
    badge: "Import",
    title: "Point at a PDF. Get a course.",
    description:
      "Drop in any technical book and Fishbones uses Claude to extract the chapter structure, clean up OCR noise, and generate per-lesson readings, exercises, and checkpoint quizzes. Per-lesson saves mean progress lands in the sidebar in real time — crash at lesson 47 and you still have 46.",
    bullets: [
      "Metadata auto-detection — title, author, and primary language read straight from the front matter",
      "Chapter + section splitter handles multiple book layouts (O'Reilly, No Starch, The Rust Book, etc.)",
      "Bulk import queues several PDFs for unattended overnight processing",
      "Swap in a different Anthropic model per-pack — Haiku for drafts, Opus when quality matters",
    ],
    imageAlt: "Fishbones import wizard turning a PDF into a course",
  },
  {
    badge: "Workbench",
    title: "Monaco editor, real runtimes, six languages.",
    description:
      "JavaScript and TypeScript run in-browser via a sandboxed Web Worker; Rust and Go go through their respective playgrounds; Python executes via Pyodide; Swift shells out to the local toolchain. Hidden test harnesses validate each exercise and pass/fail lines stream into the console as they resolve.",
    bullets: [
      "Multi-file workbench for lessons that span src/lib.rs + src/main.rs + tests/",
      "Per-lesson code persistence — reopen a lesson and your in-progress work comes back",
      "Progressive hints that unlock one at a time so a stuck learner can ramp the help",
      "Pop the workbench into its own window when you want more screen real estate",
    ],
    imageAlt: "Fishbones workbench with Monaco editor and test output pane",
  },
  {
    badge: "Reading",
    title: "Books that read like web docs, not PDFs.",
    description:
      "Inline popovers on every documented symbol link to MDN, rustdoc, or pkg.go.dev. First-use glossary terms get a dotted underline and a hover definition. GitHub-style callouts (NOTE / WARNING / TIP / EXAMPLE) render as colored boxes. Any paragraph that says \"try it\" can embed a tiny runnable Monaco sandbox right in the prose.",
    bullets: [
      "Auto-generated \"You'll learn\" objectives card at the top of every lesson",
      "Scroll-progress rail + time-to-read estimate that flips to \"minutes left\" as you go",
      "Collapsible glossary side panel listing every term the lesson introduces",
      "Callouts, popovers, and glossary data generated at ingest time — zero runtime cost",
    ],
    imageAlt: "Fishbones reader with inline popover over a code symbol",
  },
  {
    badge: "Practice",
    title: "Challenge packs for when reading stops being enough.",
    description:
      "Kata-style coding challenges grouped into portable packs. Each pack spans easy / medium / hard tiers across topic buckets (strings, arrays, iterators, concurrency, generics, and more). Generate your own pack for any supported language or ship pre-built packs bundled with the app.",
    bullets: [
      "Separate from the course tree — sidebar shows only packs matching your active language",
      "Difficulty-colored lesson dots (green / amber / red) so you can triage at a glance",
      "The same test harness and runtime used by book exercises — nothing fake",
      "Export + import .fishbones archives to share a pack with a teammate",
    ],
    imageAlt: "Fishbones challenge pack with difficulty tiers and topic tags",
  },
  {
    badge: "Profile",
    title: "Streak. Level. XP. Dopamine on tap.",
    description:
      "Every completed lesson feeds a streak counter, a level ring, and a per-language XP total. The Profile view breaks down which languages you've touched, which topics you've drilled in challenge packs, and a timeline of recent completions you can click to jump back into.",
    bullets: [
      "Streak survives anywhere from today → 365 days; best-streak trophy is yours forever",
      "XP weighted by effort — 5 per reading, 10 per quiz, 20 per exercise",
      "Per-language breakdown of done / total lessons with a progress bar",
      "Topics chip grid shows every skill you've drilled across packs",
    ],
    imageAlt: "Fishbones profile view with level ring and language stats",
  },
];

// Small capabilities grid below the feature sections. Each tile is a
// one-liner — not worth a full hero, worth mentioning.
const CAPABILITIES: Array<{ icon: typeof Code; label: string; desc: string }> = [
  {
    icon: Terminal,
    label: "Playground",
    desc: "jsfiddle-style code scratchpad with per-language persistence. No lesson context, just code and Run.",
  },
  {
    icon: Layers,
    label: "Multi-window",
    desc: "Pop the workbench out into its own window alongside the reader for dual-monitor setups.",
  },
  {
    icon: Flame,
    label: "Daily streaks",
    desc: "Complete one lesson per day to keep the flame alive. Longest streak is its own trophy.",
  },
  {
    icon: Sparkles,
    label: "Enrichment button",
    desc: "One-click retrofit for existing courses — adds objectives, glossary, and doc popovers without re-running the full ingest.",
  },
  {
    icon: Target,
    label: "Targeted regen",
    desc: "Rewrite just the exercises of an existing course when the test-harness prompt improves. Costs a fraction of a full ingest.",
  },
  {
    icon: BookOpen,
    label: "11 themes",
    desc: "Kata Dark, Kata Light, Synthwave, Claude Code Dark, Ayu, and all four Catppuccins. Monaco + chrome stay in sync.",
  },
];

// GitHub repo is `InfamousVague/Kata` (pre-rebrand). Release endpoint
// reuses that repo — the release itself is tagged as Fishbones v*.
async function getFishbonesRelease(): Promise<{ url: string; version: string }> {
  const fallback = {
    url: "https://github.com/InfamousVague/Kata/releases/latest",
    version: "",
  };
  try {
    const res = await fetch(
      "https://api.github.com/repos/InfamousVague/Kata/releases/latest",
    );
    if (!res.ok) return fallback;
    const data = await res.json();
    const dmg = data.assets?.find((a: { name: string }) => a.name.endsWith(".dmg"));
    return {
      url: dmg?.browser_download_url || fallback.url,
      version: data.tag_name || "",
    };
  } catch {
    return fallback;
  }
}

function DownloadCTA({ url, version }: { url: string; version: string }) {
  return (
    <div className="app-page__cta">
      <a href={url} className="btn btn--primary">
        <Download size={16} /> Download{version ? ` ${version}` : ""}
      </a>
      <a
        href="https://github.com/InfamousVague/Kata"
        className="btn btn--ghost"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink size={16} /> Source on GitHub
      </a>
    </div>
  );
}

export function FishbonesPage() {
  const [downloadUrl, setDownloadUrl] = useState(
    "https://github.com/InfamousVague/Kata/releases/latest",
  );
  const [version, setVersion] = useState("");

  useEffect(() => {
    getFishbonesRelease().then(({ url, version }) => {
      setDownloadUrl(url);
      setVersion(version);
    });
  }, []);

  return (
    <div className="app-page fishbones-page">
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="app-page__hero">
        <img
          src="/fishbones/app-icon.png"
          alt="Fishbones"
          className="app-page__icon"
        />
        <h1 className="app-page__title">Fishbones</h1>
        <p className="app-page__tagline">
          Turn any technical book into an interactive course.
        </p>
        <p className="app-page__desc">
          Drop in a PDF, get a Codecademy-style course with generated
          exercises, checkpoint quizzes, and inline documentation popovers.
          Six languages, real runtimes, offline-first. Built for the
          engineer who learns by shipping.
        </p>
        <DownloadCTA url={downloadUrl} version={version} />
      </section>

      {/* ── Feature sections ────────────────────────────── */}
      <FeatureShowcase features={FEATURES} />

      {/* ── Capabilities grid ──────────────────────────── */}
      <section className="section">
        <h2 className="section__title">And a handful of smaller things</h2>
        <div className="capabilities-grid">
          {CAPABILITIES.map((cap) => (
            <div key={cap.label} className="capability-card">
              <div className="capability-card__icon">
                <cap.icon size={20} />
              </div>
              <div className="capability-card__label">{cap.label}</div>
              <div className="capability-card__desc">{cap.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Under the hood ──────────────────────────────── */}
      <section className="section">
        <h2 className="section__title">Under the hood</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <div className="tech-card__label">Tauri 2 + React 19</div>
            <div className="tech-card__desc">
              Native macOS shell with a React + Vite frontend. Monaco editor,
              Shiki syntax highlighting, sucrase for TypeScript transforms.
            </div>
          </div>
          <div className="tech-card">
            <div className="tech-card__label">Rust backend</div>
            <div className="tech-card__desc">
              Tauri commands for PDF extraction (pdf-extract + ocrs), SQLite
              progress DB, streaming Anthropic API calls, and incremental
              per-lesson saves.
            </div>
          </div>
          <div className="tech-card">
            <div className="tech-card__label">Sandboxed runtimes</div>
            <div className="tech-card__desc">
              User code never touches the host — JS/TS run in a Web Worker,
              Python in Pyodide, Rust and Go via their official playgrounds,
              Swift via a temp-file shell-out.
            </div>
          </div>
          <div className="tech-card">
            <div className="tech-card__label">Offline-first</div>
            <div className="tech-card__desc">
              All courses, progress, settings, and workbench code live in
              your app-data dir. The Anthropic key is only needed for
              ingest — once a course is imported, it's fully local.
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing CTA ─────────────────────────────────── */}
      <section className="section app-page__closing">
        <h2 className="section__title">Ready to learn something?</h2>
        <p className="app-page__desc">
          Fishbones is free, open-source, and macOS-only for now (Windows +
          Linux builds are on the roadmap). An Anthropic API key is required
          for the AI-assisted structuring pipeline.
        </p>
        <DownloadCTA url={downloadUrl} version={version} />
      </section>
    </div>
  );
}
