import { ExternalLink } from "lucide-react";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import "./AppPage.css";

const FEATURES: FeatureSection[] = [
  {
    badge: "69 Primitives",
    title: "Every component you need, nothing you don't",
    description: "From buttons and inputs to tree views, color pickers, and sparklines — 69 production-ready primitives built with TypeScript and zero external dependencies beyond React.",
    bullets: [
      "Forms: input, textarea, select, checkbox, radio, pin-input, number-input, color-picker",
      "Layout: grid, stack, container, center, spacer, separator",
      "Data: table, calendar, timeline, carousel, sparkline, tree-view",
      "Feedback: toast, alert, dialog, sheet, popover, skeleton, spinner, progress",
    ],
    image: "/base/screenshots/primitives.png",
    imageAlt: "Base primitives component library",
  },
  {
    badge: "Design Tokens",
    title: "One token system, every platform",
    description: "Color, typography, spacing, radius, elevation, animation, and glassmorphism — all defined as TypeScript tokens that export to CSS variables or React Native styles.",
    bullets: [
      "Monochrome-first color palette with semantic aliases",
      "Glassmorphism tokens for frosted glass effects",
      "Typography scale with fluid responsive sizing",
      "Export to CSS custom properties or React Native StyleSheet",
    ],
    image: "/base/screenshots/tokens.png",
    imageAlt: "Base design tokens",
  },
  {
    badge: "Dark Mode",
    title: "Light and dark, built in from day one",
    description: "Every component respects the color mode out of the box. No additional setup, no theme wrappers to forget — just works with system preferences or manual toggle.",
    bullets: [
      "Automatic system preference detection",
      "Manual toggle with localStorage persistence",
      "All 69 primitives tested in both modes",
      "Glassmorphism effects adapt to color mode",
    ],
    image: "/base/screenshots/darkmode.png",
    imageAlt: "Base dark mode support",
  },
];

const DOCS_URL = "https://infamousvague.github.io/base/";

export function BasePage() {
  return (
    <div className="app-page">
      <section className="app-page__hero">
        <img src="/base/app-icon.png" alt="Base" className="app-page__icon" />
        <h1 className="app-page__title">Base</h1>
        <p className="app-page__tagline">Universal design toolkit — monochrome, glassmorphism, platform-agnostic.</p>
        <p className="app-page__desc">
          69 primitives, 8 token categories, dark mode, and zero opinions about your stack. Just clean, composable components that work everywhere.
        </p>
        <div className="app-page__actions">
          <a href={DOCS_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Documentation</a>
          <a href="https://github.com/InfamousVague/base" className="btn btn--ghost" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> View on GitHub</a>
        </div>
        <span className="app-page__req">Free &amp; Open Source &middot; React &middot; TypeScript</span>
      </section>

      <FeatureShowcase features={FEATURES} />

      <section className="section" style={{ textAlign: "center" }}>
        <h2 className="section__title">Ready to build something?</h2>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 32 }}>
          <a href={DOCS_URL} className="btn btn--primary" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Documentation</a>
          <a href="https://github.com/InfamousVague/base" className="btn btn--ghost" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> View on GitHub</a>
        </div>
      </section>
    </div>
  );
}
