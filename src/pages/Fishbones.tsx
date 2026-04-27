import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Download,
  ExternalLink,
  BookOpen,
  Sparkles,
  Cpu,
  Palette,
  Wand2,
  Play,
  Code2,
  FileText,
  GraduationCap,
  Flame,
  ShieldOff,
  Gauge,
  Layers,
  PlayCircle,
} from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./AppPage.css";
import "./Fishbones.css";

// ── 17 themes from the actual app ────────────────────────────
//
// Each entry mirrors one of the app's `[data-theme-name="…"]` blocks in
// themes.css. We use the same hex values so the picker on this landing
// page actually previews what the desktop app looks like — not a
// stylized approximation. Order roughly tracks "default → dark loud →
// dark muted → light → exotic" so the marquee feels intentional.
interface Theme {
  id: string;
  label: string;
  blurb: string;
  bg: string;
  surface: string;
  text: string;
  accent: string;
  accentText: string;
  string: string;
  comment: string;
  keyword: string;
  number: string;
}
const THEMES: Theme[] = [
  {
    id: "default-dark",
    label: "Fishbones Dark",
    blurb: "Monochrome glass — the default.",
    bg: "#09090b",
    surface: "#13131a",
    text: "#fafafa",
    accent: "#fafafa",
    accentText: "#09090b",
    string: "#c8aa7e",
    comment: "#50505a",
    keyword: "#fafafa",
    number: "#c8aa7e",
  },
  {
    id: "synthwave",
    label: "Synthwave",
    blurb: "Neon magenta + cyan on violet.",
    bg: "#1a1427",
    surface: "#241b2f",
    text: "#f9f1ff",
    accent: "#ff7edb",
    accentText: "#1a1427",
    string: "#ff8b39",
    comment: "#8c7a98",
    keyword: "#ff7edb",
    number: "#f97e72",
  },
  {
    id: "claude-code-dark",
    label: "Claude Code Dark",
    blurb: "Anthropic terracotta on deep brown.",
    bg: "#14110d",
    surface: "#1c1814",
    text: "#f5ebdc",
    accent: "#d97757",
    accentText: "#14110d",
    string: "#b5a285",
    comment: "#8a7560",
    keyword: "#d97757",
    number: "#c49268",
  },
  {
    id: "ayu-mirage",
    label: "Ayu Mirage",
    blurb: "Dusty dark with soft cyan.",
    bg: "#1f2430",
    surface: "#191e2a",
    text: "#cbccc6",
    accent: "#ffa759",
    accentText: "#1f2430",
    string: "#bae67e",
    comment: "#5c6773",
    keyword: "#ffa759",
    number: "#d4bfff",
  },
  {
    id: "ayu-dark",
    label: "Ayu Dark",
    blurb: "Near-black base, warm orange.",
    bg: "#0b0e14",
    surface: "#0d1017",
    text: "#bfbdb6",
    accent: "#ff8f40",
    accentText: "#0b0e14",
    string: "#aad94c",
    comment: "#acb6bf",
    keyword: "#ff8f40",
    number: "#d2a6ff",
  },
  {
    id: "ayu-light",
    label: "Ayu Light",
    blurb: "Clean off-white, saturated accents.",
    bg: "#fcfcfc",
    surface: "#fafafa",
    text: "#5c6166",
    accent: "#fa8d3e",
    accentText: "#ffffff",
    string: "#86b300",
    comment: "#abb0b6",
    keyword: "#fa8d3e",
    number: "#a37acc",
  },
  {
    id: "catppuccin-mocha",
    label: "Catppuccin Mocha",
    blurb: "Pastel pink + lavender on indigo.",
    bg: "#1e1e2e",
    surface: "#181825",
    text: "#cdd6f4",
    accent: "#cba6f7",
    accentText: "#1e1e2e",
    string: "#a6e3a1",
    comment: "#6c7086",
    keyword: "#cba6f7",
    number: "#fab387",
  },
  {
    id: "catppuccin-macchiato",
    label: "Catppuccin Macchiato",
    blurb: "Cooler dark cousin of Mocha.",
    bg: "#24273a",
    surface: "#1e2030",
    text: "#cad3f5",
    accent: "#c6a0f6",
    accentText: "#24273a",
    string: "#a6da95",
    comment: "#6e738d",
    keyword: "#c6a0f6",
    number: "#f5a97f",
  },
  {
    id: "catppuccin-frappe",
    label: "Catppuccin Frappé",
    blurb: "Milky indigo with soft pastels.",
    bg: "#303446",
    surface: "#292c3c",
    text: "#c6d0f5",
    accent: "#ca9ee6",
    accentText: "#303446",
    string: "#a6d189",
    comment: "#737994",
    keyword: "#ca9ee6",
    number: "#ef9f76",
  },
  {
    id: "catppuccin-latte",
    label: "Catppuccin Latte",
    blurb: "Cream base, lavender + green.",
    bg: "#eff1f5",
    surface: "#e6e9ef",
    text: "#4c4f69",
    accent: "#8839ef",
    accentText: "#ffffff",
    string: "#40a02b",
    comment: "#9ca0b0",
    keyword: "#8839ef",
    number: "#fe640b",
  },
  {
    id: "tokyo-night",
    label: "Tokyo Night",
    blurb: "Midnight blue + electric purple.",
    bg: "#1a1b26",
    surface: "#16161e",
    text: "#c0caf5",
    accent: "#bb9af7",
    accentText: "#1a1b26",
    string: "#9ece6a",
    comment: "#565f89",
    keyword: "#bb9af7",
    number: "#ff9e64",
  },
  {
    id: "rose-pine",
    label: "Rosé Pine",
    blurb: "Rose + gold + foam on plum.",
    bg: "#191724",
    surface: "#1f1d2e",
    text: "#e0def4",
    accent: "#ebbcba",
    accentText: "#191724",
    string: "#f6c177",
    comment: "#6e6a86",
    keyword: "#31748f",
    number: "#ebbcba",
  },
  {
    id: "ubuntu-dark",
    label: "Ubuntu Dark",
    blurb: "Aubergine + Ubuntu orange.",
    bg: "#2c001e",
    surface: "#220016",
    text: "#f9f4f0",
    accent: "#e95420",
    accentText: "#2c001e",
    string: "#87a556",
    comment: "#9d8593",
    keyword: "#e95420",
    number: "#f7c37b",
  },
  {
    id: "absent-contrast",
    label: "Absent Contrast",
    blurb: "Daylerees Rainglow — teal on slate.",
    bg: "#0e1114",
    surface: "#181e23",
    text: "#aeb9c4",
    accent: "#228a96",
    accentText: "#0e1114",
    string: "#addbbc",
    comment: "#44515e",
    keyword: "#228a96",
    number: "#61bcc6",
  },
  {
    id: "vesper",
    label: "Vesper",
    blurb: "Rauno Freiberg — peach + mint.",
    bg: "#101010",
    surface: "#161616",
    text: "#ffffff",
    accent: "#ffc799",
    accentText: "#000000",
    string: "#99ffe4",
    comment: "#828282",
    keyword: "#a0a0a0",
    number: "#ffc799",
  },
  {
    id: "word",
    label: "Word",
    blurb: "MS Word 5.5 for DOS, faithfully.",
    bg: "#0000aa",
    surface: "#1a1ac0",
    text: "#ffffff",
    accent: "#ff55ff",
    accentText: "#0000aa",
    string: "#ffff55",
    comment: "#828282",
    keyword: "#ff55ff",
    number: "#55ffff",
  },
  {
    id: "default-light",
    label: "Fishbones Light",
    blurb: "System-matched light variant.",
    bg: "#ffffff",
    surface: "#fafafa",
    text: "#09090b",
    accent: "#09090b",
    accentText: "#ffffff",
    string: "#8d6e3a",
    comment: "#9b9ba7",
    keyword: "#09090b",
    number: "#8d6e3a",
  },
];

// ── Sample code shown inside the theme preview pane ──────────
//
// JS-shaped because it's recognizable to non-coders (most landing-page
// visitors aren't going to clock the difference between Rust and Go at
// a glance). The token classes (`__k` keyword, `__s` string, `__n`
// number, `__c` comment, `__f` function name) get colored from the
// active theme — same trick the live Monaco editor in the app uses to
// re-skin per theme without touching the source.
function ThemeCodeSample({ theme }: { theme: Theme }) {
  const tokenStyle = (color: string): React.CSSProperties => ({
    color,
  });
  return (
    <div className="fishbones-code" style={{ background: theme.bg, color: theme.text }}>
      <div className="fishbones-code__line">
        <span style={tokenStyle(theme.comment)}>// quick fibonacci memo</span>
      </div>
      <div className="fishbones-code__line">
        <span style={tokenStyle(theme.keyword)}>function</span>{" "}
        <span style={tokenStyle(theme.string)} className="fishbones-code__fn">
          fib
        </span>
        (<span style={tokenStyle(theme.text)}>n</span>) {"{"}
      </div>
      <div className="fishbones-code__line fishbones-code__line--indent">
        <span style={tokenStyle(theme.keyword)}>const</span>{" "}
        <span style={tokenStyle(theme.text)}>cache</span> ={" "}
        <span style={tokenStyle(theme.text)}>{"{"}</span>{" "}
        <span style={tokenStyle(theme.number)}>0</span>
        <span style={tokenStyle(theme.text)}>:</span>{" "}
        <span style={tokenStyle(theme.number)}>0</span>
        <span style={tokenStyle(theme.text)}>,</span>{" "}
        <span style={tokenStyle(theme.number)}>1</span>
        <span style={tokenStyle(theme.text)}>:</span>{" "}
        <span style={tokenStyle(theme.number)}>1</span>{" "}
        <span style={tokenStyle(theme.text)}>{"}"}</span>;
      </div>
      <div className="fishbones-code__line fishbones-code__line--indent">
        <span style={tokenStyle(theme.keyword)}>return</span>{" "}
        <span style={tokenStyle(theme.text)}>cache</span>[
        <span style={tokenStyle(theme.text)}>n</span>] ??=
      </div>
      <div className="fishbones-code__line fishbones-code__line--indent2">
        <span style={tokenStyle(theme.string)} className="fishbones-code__fn">
          fib
        </span>
        (<span style={tokenStyle(theme.text)}>n</span> -{" "}
        <span style={tokenStyle(theme.number)}>1</span>) +{" "}
        <span style={tokenStyle(theme.string)} className="fishbones-code__fn">
          fib
        </span>
        (<span style={tokenStyle(theme.text)}>n</span> -{" "}
        <span style={tokenStyle(theme.number)}>2</span>);
      </div>
      <div className="fishbones-code__line">{"}"}</div>
      <div className="fishbones-code__line">&nbsp;</div>
      <div className="fishbones-code__line">
        <span style={tokenStyle(theme.text)}>console</span>
        <span style={tokenStyle(theme.text)}>.</span>
        <span style={tokenStyle(theme.string)} className="fishbones-code__fn">
          log
        </span>
        (
        <span style={tokenStyle(theme.string)}>"fib(40) ="</span>,{" "}
        <span style={tokenStyle(theme.string)} className="fishbones-code__fn">
          fib
        </span>
        (<span style={tokenStyle(theme.number)}>40</span>));
      </div>
    </div>
  );
}

function ThemePicker() {
  const [activeIdx, setActiveIdx] = useState(0);
  const theme = THEMES[activeIdx];

  // Auto-advance every 4s so visitors who don't click still see the
  // palette change. Stops once the user picks one — the click is a
  // commitment to a flavour and we shouldn't keep stealing it back.
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setInterval(() => {
      setActiveIdx((i) => (i + 1) % THEMES.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [autoplay]);

  return (
    <div className="fishbones-themes">
      <div
        className="fishbones-themes__preview"
        style={{ background: theme.surface, borderColor: theme.accent }}
      >
        <div className="fishbones-themes__chrome" style={{ background: theme.surface }}>
          <span className="fishbones-themes__dot" style={{ background: "#ff5f57" }} />
          <span className="fishbones-themes__dot" style={{ background: "#febc2e" }} />
          <span className="fishbones-themes__dot" style={{ background: "#28c840" }} />
          <span className="fishbones-themes__chrome-label" style={{ color: theme.text }}>
            {theme.label}
          </span>
        </div>
        <ThemeCodeSample theme={theme} />
        <div
          className="fishbones-themes__statusbar"
          style={{ background: theme.accent, color: theme.accentText }}
        >
          <span>{theme.label}</span>
          <span style={{ opacity: 0.85 }}>
            {activeIdx + 1} / {THEMES.length}
          </span>
        </div>
      </div>

      <div className="fishbones-themes__list">
        <p className="fishbones-themes__heading">17 themes. One vibe.</p>
        <p className="fishbones-themes__sub">{theme.blurb}</p>
        <div className="fishbones-themes__chips">
          {THEMES.map((t, i) => (
            <button
              key={t.id}
              type="button"
              className={`fishbones-themes__chip ${i === activeIdx ? "fishbones-themes__chip--active" : ""}`}
              onClick={() => {
                setActiveIdx(i);
                setAutoplay(false);
              }}
              title={t.label}
              aria-label={`Preview ${t.label}`}
            >
              <span
                className="fishbones-themes__swatch"
                style={{
                  background: `linear-gradient(135deg, ${t.bg} 0%, ${t.bg} 50%, ${t.accent} 50%, ${t.accent} 100%)`,
                  borderColor: t.accent,
                }}
              />
              <span>{t.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Languages strip — the polyglot proof point ───────────────
//
// The app actually runs all of these. Anything labeled "Browser"
// executes in a Web Worker / Pyodide / iframe with no setup; "Local"
// shells out to a compiler the user has installed; "Sandbox" hits
// play.rust-lang.org / play.golang.org / a Tauri-hosted preview server.
const LANGUAGES: Array<{ name: string; runs: string }> = [
  { name: "JavaScript", runs: "Browser" },
  { name: "TypeScript", runs: "Browser" },
  { name: "Python", runs: "Browser (Pyodide)" },
  { name: "Rust", runs: "Sandbox" },
  { name: "Go", runs: "Sandbox" },
  { name: "Swift", runs: "Local" },
  { name: "C", runs: "Local (clang)" },
  { name: "C++", runs: "Local (c++)" },
  { name: "Java", runs: "Local (javac)" },
  { name: "Kotlin", runs: "Local (kotlinc)" },
  { name: "C#", runs: "Local (dotnet)" },
  { name: "Assembly", runs: "Local (as + ld)" },
  { name: "Web (HTML/CSS/JS)", runs: "Iframe preview" },
  { name: "Three.js", runs: "Iframe preview" },
  { name: "React", runs: "Iframe preview" },
  { name: "React Native", runs: "react-native-web" },
];

// ── Stat tiles ───────────────────────────────────────────────
const STATS = [
  { value: "16", label: "Languages" },
  { value: "17", label: "Themes" },
  { value: "0", label: "Cloud accounts" },
  { value: "100%", label: "Local-first" },
];

// ── Comparison cards ─────────────────────────────────────────
//
// The "what makes Fishbones different from X?" frame. Honest about
// what each competitor still does better — readers smell propaganda
// fast, and admitting the gaps makes the wins read truer.
interface ComparisonCard {
  competitor: string;
  verdict: string;
  fishbonesWins: string[];
  theyWin: string[];
}

const COMPARISONS: ComparisonCard[] = [
  {
    competitor: "Codecademy / Boot.dev",
    verdict: "Fishbones runs your books, not theirs.",
    fishbonesWins: [
      "Import any technical book (PDF / EPUB) — get a course",
      "16 languages with one editor, switch in a dropdown",
      "Local-first; SQLite + JSON on disk, no account",
      "AI tutor runs on your laptop via Ollama (free)",
    ],
    theyWin: [
      "Larger catalog of polished courses",
      "Mobile app for casual study",
    ],
  },
  {
    competitor: "Exercism / LeetCode",
    verdict: "Fishbones teaches the why, not just the what.",
    fishbonesWins: [
      "Reading + exercises + quizzes interleaved",
      "Generated from your reference book — no random puzzles",
      "Inline AI explanations for any code block",
      "Personal streak + XP, no leaderboard pressure",
    ],
    theyWin: [
      "Mentor / community feedback on solutions",
      "Massive cataloged problem archive",
    ],
  },
  {
    competitor: "ChatGPT / Cursor",
    verdict: "Fishbones is a curriculum, not a chatbot.",
    fishbonesWins: [
      "Structured chapters + lessons, not free-form chat",
      "Hidden tests grade your code — pass/fail, not vibes",
      "Streak tracker keeps you showing up",
      "Local Ollama tutor scopes its hints to the lesson",
    ],
    theyWin: [
      "Open-ended brainstorming",
      "Larger model knowledge for niche libraries",
    ],
  },
  {
    competitor: "VS Code + a textbook",
    verdict: "Fishbones is the textbook + the IDE + the grader.",
    fishbonesWins: [
      "Tests come with the lesson, results in the same window",
      "Progress + XP + streak — measurable forward motion",
      "Per-language sandboxes with no toolchain setup",
      "AI tutor knows the lesson context without you pasting it",
    ],
    theyWin: [
      "VS Code's deeper IDE feature set",
      "Reading prose in your favourite reader",
    ],
  },
];

// ── Pipeline visual: book → course ───────────────────────────
//
// Custom renderVisual for the "books-to-courses" feature hero. Animated
// dot ride from Book → Claude → Lessons so the ingestion story reads
// at a glance. CSS does the motion; JS only sets the icons.
function PipelineVisual() {
  return (
    <div className="fishbones-pipeline">
      <div className="fishbones-pipeline__node">
        <BookOpen size={28} />
        <span>Your book</span>
        <small>PDF · EPUB · docs site</small>
      </div>
      <div className="fishbones-pipeline__arrow">
        <span className="fishbones-pipeline__bead" />
      </div>
      <div className="fishbones-pipeline__node fishbones-pipeline__node--accent">
        <Sparkles size={28} />
        <span>Claude pipeline</span>
        <small>structures + writes exercises</small>
      </div>
      <div className="fishbones-pipeline__arrow">
        <span className="fishbones-pipeline__bead fishbones-pipeline__bead--delay" />
      </div>
      <div className="fishbones-pipeline__node">
        <GraduationCap size={28} />
        <span>Course</span>
        <small>chapters · lessons · tests</small>
      </div>
    </div>
  );
}

// ── Lesson run visual: editor + console + tests ──────────────
function LessonRunVisual() {
  return (
    <div className="fishbones-lessonrun">
      <div className="fishbones-lessonrun__editor">
        <div className="fishbones-lessonrun__row">
          <span className="fishbones-lessonrun__lineno">1</span>
          <span>
            <span className="fishbones-lessonrun__kw">function</span> sumList(xs) {"{"}
          </span>
        </div>
        <div className="fishbones-lessonrun__row">
          <span className="fishbones-lessonrun__lineno">2</span>
          <span style={{ paddingLeft: 16 }}>
            <span className="fishbones-lessonrun__kw">return</span> xs
            <span className="fishbones-lessonrun__op">.</span>reduce((a, b) {"=>"} a +
            b, <span className="fishbones-lessonrun__num">0</span>);
          </span>
        </div>
        <div className="fishbones-lessonrun__row">
          <span className="fishbones-lessonrun__lineno">3</span>
          <span>{"}"}</span>
        </div>
      </div>
      <div className="fishbones-lessonrun__console">
        <div className="fishbones-lessonrun__test fishbones-lessonrun__test--pass">
          ✓ sumList([1,2,3]) === 6
        </div>
        <div className="fishbones-lessonrun__test fishbones-lessonrun__test--pass">
          ✓ sumList([]) === 0
        </div>
        <div className="fishbones-lessonrun__test fishbones-lessonrun__test--pass">
          ✓ sumList([-1,-2]) === -3
        </div>
        <div className="fishbones-lessonrun__summary">3 / 3 passed · 12ms</div>
      </div>
    </div>
  );
}

// ── Fishbones AI character — the tutor blob ──────────────────
function FishbonesAiVisual() {
  return (
    <div className="fishbones-ava">
      <div className="fishbones-ava__stage">
        <div className="fishbones-ava__char" aria-hidden>
          <div className="fishbones-ava__ring" />
          <div className="fishbones-ava__logo" />
        </div>
        <div className="fishbones-ava__bubble">
          <p>
            <strong>You're stuck on the recursion case.</strong>
          </p>
          <p>
            Try walking through fib(3) by hand on paper. What's fib(2) + fib(1)?
            That's the value the recursive call should produce.
          </p>
          <span className="fishbones-ava__bubble-meta">
            <Cpu size={11} /> qwen2.5-coder · local · 0 tokens billed
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Feature sections ────────────────────────────────────────
const FEATURES: FeatureSection[] = [
  {
    badge: "Book → Course",
    title: "Drop a PDF in. Get a course out.",
    description:
      "Fishbones runs your technical books through an AI pipeline that splits them into chapters, drafts lessons, and generates starter code, hidden tests, and exercises. Don't have a book? Point it at a documentation site and crawl that instead.",
    bullets: [
      "PDF and EPUB ingest with Claude-structured chapter outlines",
      "Auto-generates exercise scaffolding: starter, solution, hidden tests",
      "Docs-site crawler turns any HTML reference into a course",
      "Bundle and re-share your course as a `.fishbones` archive",
    ],
    imageAlt: "Pipeline from book to lesson",
    renderVisual: <PipelineVisual />,
  },
  {
    badge: "Multi-runtime Playground",
    title: "16 languages. One editor. Zero setup.",
    description:
      "Pick a language and the right runtime fires up. JavaScript and Python run in-browser. Rust and Go hit hosted sandboxes. C, C++, Java, Kotlin, C# shell out to your local toolchain — and Fishbones probes for missing compilers + offers a one-click brew install.",
    bullets: [
      "Browser sandboxes for JS · TS · Python · React · Web",
      "Online sandboxes for Rust + Go (no toolchain needed)",
      "Native subprocess runners for C · C++ · Java · Kotlin · C# · Swift · Assembly",
      "Auto-routes DOM JavaScript into the Web preview when you forget to switch",
    ],
    imageAlt: "Language runtime grid",
    renderVisual: (
      <div className="fishbones-langs">
        {LANGUAGES.map((l) => (
          <div key={l.name} className="fishbones-langs__chip">
            <span className="fishbones-langs__name">{l.name}</span>
            <span className="fishbones-langs__runs">{l.runs}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    badge: "Local AI Tutor",
    title: "Fishbones AI lives on your laptop. No keys. No bills.",
    description:
      "The floating tutor character runs entirely against a local Ollama instance. She auto-loads the lesson body, your starter code, and the hidden tests — so when you ask 'why is this failing?' she actually knows. Generate code, explain code, walk through every step.",
    bullets: [
      "Default model: qwen2.5-coder 7B — Fishbones offers a one-click pull",
      "Mood states: idle · thinking · celebrating · alert (when Ollama's down)",
      "Auto-applies generated code to the editor, no copy-paste",
      "Step-by-step explanations of any selection, in plain English",
    ],
    imageAlt: "Fishbones AI tutor character",
    renderVisual: <FishbonesAiVisual />,
  },
  {
    badge: "Read · Run · Test",
    title: "Prose, code, and a verdict — in one window.",
    description:
      "Every exercise lesson is split: prose on the left, editor + hidden tests on the right. Click Run, the tests grade you, the AI explains the failures. No tab-switching, no copying solutions out to a separate IDE.",
    bullets: [
      "Reading lessons with inline syntax highlighting (Shiki, 200+ langs)",
      "Hidden tests that grade pass/fail per assertion",
      "Quizzes for checkpoint comprehension between code blocks",
      "Streak fire + XP per lesson — Reading 5 · Quiz 10 · Exercise 20",
    ],
    imageAlt: "Lesson editor + console",
    renderVisual: <LessonRunVisual />,
  },
];

// ── Capabilities grid ────────────────────────────────────────
const CAPABILITIES = [
  {
    icon: Wand2,
    label: "Challenge Packs",
    desc: "Generate 20–200 synthetic exercises in any language. Live cost estimate as you drag the count slider.",
  },
  {
    icon: Layers,
    label: "Multi-Tab Library",
    desc: "Open multiple courses at once. Tabs across the top, shared sidebar — like a browser, for learning.",
  },
  {
    icon: Flame,
    label: "Streak + XP",
    desc: "Per-lesson XP, calendar-day streaks with a one-day grace, level curve at N×(N+1)/2 × 10.",
  },
  {
    icon: Palette,
    label: "17 Themes",
    desc: "Synthwave, Catppuccin, Tokyo Night, Vesper, Word 5.5 for DOS — pick one or cycle through them.",
  },
  {
    icon: Gauge,
    label: "Pop the Workbench",
    desc: "Drag the editor + console out into its own window. Two monitors, two halves of the lesson.",
  },
  {
    icon: ShieldOff,
    label: "Zero Telemetry",
    desc: "Progress lives in SQLite on your machine. No accounts, no analytics, no signup wall.",
  },
];

// ── Tech stack chips ─────────────────────────────────────────
const TECH = [
  { label: "Frontend", value: "React 19 + TypeScript + Vite" },
  { label: "Editor", value: "Monaco (the VS Code engine)" },
  { label: "Desktop", value: "Tauri 2 (Mac + Windows)" },
  { label: "Course Pipeline", value: "Anthropic Claude API" },
  { label: "Tutor", value: "Ollama (local · qwen2.5-coder)" },
  { label: "Browser Runtimes", value: "Web Workers · Pyodide · iframes" },
  { label: "Native Runtimes", value: "Rust subprocess shells" },
  { label: "Storage", value: "SQLite + JSON · zero cloud" },
];

// ── GitHub release helper ────────────────────────────────────
async function getFishbonesRelease(): Promise<{ url: string; version: string }> {
  const fallback = {
    url: "https://github.com/InfamousVague/Fishbones/releases/latest",
    version: "",
  };
  try {
    const res = await fetch(
      "https://api.github.com/repos/InfamousVague/Fishbones/releases/latest",
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

// ── Page ─────────────────────────────────────────────────────
export function FishbonesPage() {
  const [downloadUrl, setDownloadUrl] = useState(
    "https://github.com/InfamousVague/Fishbones/releases/latest",
  );
  const [version, setVersion] = useState("");

  useEffect(() => {
    getFishbonesRelease().then(({ url, version }) => {
      setDownloadUrl(url);
      setVersion(version);
    });
  }, []);

  // Memo the lesson kinds row — pure data, never changes.
  const lessonKinds = useMemo(
    () => [
      { icon: BookOpen, label: "Reading", xp: "5 XP", desc: "Markdown prose with syntax-highlighted code." },
      { icon: Code2, label: "Exercise", xp: "20 XP", desc: "Starter + hidden tests + a Run button." },
      { icon: FileText, label: "Quiz", xp: "10 XP", desc: "Multiple-choice + short-answer checkpoints." },
      { icon: Layers, label: "Mixed", xp: "20 XP", desc: "Narrative on top, exercise underneath." },
    ],
    [],
  );

  return (
    <div className="app-page fishbones-page">
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="app-page__hero fishbones-hero">
        <img src="/fishbones/app-icon.png" alt="Fishbones" className="app-page__icon fishbones-hero__icon" />
        <h1 className="app-page__title">Fishbones</h1>
        <p className="app-page__tagline">
          Turn any technical book into an interactive course.
        </p>
        <p className="app-page__desc">
          Read prose, write code, watch tests grade you, level up. Sixteen
          languages in one editor, a local AI tutor on your laptop, no
          accounts, no cloud, and a streak fire that doesn&apos;t reset just because
          you took the weekend off.
        </p>
        <div className="app-page__actions">
          <a href={downloadUrl} className="btn btn--fishbones">
            <Download size={16} /> Download{version ? ` ${version}` : ""}
          </a>
          {/* Plain <a> (not the React-Router <Link>) so the browser
              does a full navigation out of the marketing SPA into the
              embedded Fishbones web app at /fishbones/learn/. React
              Router doesn't intercept because the target resolves to
              a real file at dist/fishbones/learn/index.html (staged
              by scripts/sync-fishbones-learn.mjs in CI, or the
              coming-soon HTML when embed is skipped). */}
          <a href="/fishbones/learn/" className="btn btn--ghost">
            <PlayCircle size={16} /> Try in browser
          </a>
          <a
            href="https://github.com/InfamousVague/Fishbones"
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} /> View on GitHub
          </a>
        </div>
        <span className="app-page__req">macOS · Windows · Free &amp; Open Source</span>
      </section>

      {/* ── Stats bar ───────────────────────────────────── */}
      <section className="fishbones-stats">
        {STATS.map((s, i) => (
          <div key={s.label} className="fishbones-stats__item">
            {i > 0 && <div className="fishbones-stats__divider" />}
            <span className="fishbones-stats__value">{s.value}</span>
            <span className="fishbones-stats__label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── Theme picker (the gimmick) ──────────────────── */}
      <section className="section">
        <h2 className="section__title">Pick a vibe. The whole app follows.</h2>
        <p className="section__subtitle">
          Every theme repaints the chrome AND the editor — Monaco's syntax
          highlighter is pinned to the same palette you see here. Click around.
        </p>
        <ThemePicker />
      </section>

      {/* ── Feature sections ────────────────────────────── */}
      <FeatureShowcase features={FEATURES} />

      {/* ── Lesson kinds row ────────────────────────────── */}
      <section className="section">
        <h2 className="section__title">Four ways a lesson can shape up.</h2>
        <p className="section__subtitle">
          Each one rewards differently. The total adds up to your level.
        </p>
        <div className="fishbones-kinds">
          {lessonKinds.map((k) => (
            <div key={k.label} className="fishbones-kinds__card card">
              <k.icon size={20} className="fishbones-kinds__icon" />
              <div className="fishbones-kinds__head">
                <span className="fishbones-kinds__label">{k.label}</span>
                <span className="fishbones-kinds__xp">{k.xp}</span>
              </div>
              <p className="fishbones-kinds__desc">{k.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Capabilities grid ───────────────────────────── */}
      <section className="section">
        <h2 className="section__title">Plus the small stuff that keeps you in the chair.</h2>
        <p className="section__subtitle">
          The features you don&apos;t notice until you don&apos;t have them.
        </p>
        <div className="fishbones-caps">
          {CAPABILITIES.map((cap) => (
            <div key={cap.label} className="fishbones-caps__card card">
              <cap.icon size={20} className="fishbones-caps__icon" />
              <span className="fishbones-caps__label">{cap.label}</span>
              <span className="fishbones-caps__desc">{cap.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Inline CTA ──────────────────────────────────── */}
      <section className="section fishbones-inline-cta">
        <a href={downloadUrl} className="btn btn--fishbones">
          <Download size={16} /> Download{version ? ` ${version}` : ""}
        </a>
      </section>

      {/* ── Comparisons ─────────────────────────────────── */}
      <section className="section">
        <h2 className="section__title">How Fishbones compares.</h2>
        <p className="section__subtitle">
          The other options. Honest about where each one still wins.
        </p>
        <div className="fishbones-versus">
          {COMPARISONS.map((card) => (
            <div key={card.competitor} className="fishbones-versus__card card">
              <div className="fishbones-versus__header">
                <span className="fishbones-versus__vs">Fishbones vs</span>
                <span className="fishbones-versus__competitor">{card.competitor}</span>
              </div>
              <p className="fishbones-versus__verdict">{card.verdict}</p>
              <div className="fishbones-versus__columns">
                <div className="fishbones-versus__col">
                  <span className="fishbones-versus__col-label fishbones-versus__col-label--win">
                    Fishbones wins
                  </span>
                  {card.fishbonesWins.map((w, i) => (
                    <div key={i} className="fishbones-versus__point fishbones-versus__point--win">
                      <span className="fishbones-versus__dot fishbones-versus__dot--win" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
                <div className="fishbones-versus__col">
                  <span className="fishbones-versus__col-label fishbones-versus__col-label--they">
                    They win
                  </span>
                  {card.theyWin.map((w, i) => (
                    <div
                      key={i}
                      className="fishbones-versus__point fishbones-versus__point--lose"
                    >
                      <span className="fishbones-versus__dot fishbones-versus__dot--neutral" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tech stack ──────────────────────────────────── */}
      <section className="section">
        <h2 className="section__title">Under the hood.</h2>
        <p className="section__subtitle">
          Native performance. No Electron. The same engine that runs VS Code.
        </p>
        <div className="fishbones-tech">
          {TECH.map((t) => (
            <div key={t.label} className="fishbones-tech__item">
              <span className="fishbones-tech__label">{t.label}</span>
              <span className="fishbones-tech__value">{t.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────── */}
      <section className="section fishbones-cta">
        <h2 className="section__title">Pick up the next book waiting on your shelf.</h2>
        <p className="section__subtitle">
          Free, open source, and built for people who actually finish chapters.
        </p>
        <div className="fishbones-cta__actions">
          <a href={downloadUrl} className="btn btn--fishbones">
            <Download size={16} /> Download{version ? ` ${version}` : ""}
          </a>
          <a
            href="https://github.com/InfamousVague/Fishbones"
            className="btn btn--ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} /> View on GitHub
          </a>
          <Link to="/" className="btn btn--ghost">
            <Play size={16} /> Browse all apps
          </Link>
        </div>
      </section>
    </div>
  );
}
