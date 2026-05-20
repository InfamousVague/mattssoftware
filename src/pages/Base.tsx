import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";

const FEATURES = [
  {
    title: "70 production-ready primitives",
    body: "Forms, layout, data, feedback — every primitive you need, nothing you don't. Inputs, tables, calendars, sparklines, tree views, color pickers, dialogs, and more.",
  },
  {
    title: "One token system, every platform",
    body: "Color, typography, spacing, radius, elevation, animation, and glassmorphism — all defined as TypeScript tokens that export to CSS variables or React Native styles.",
  },
  {
    title: "Light & dark out of the box",
    body: "Every component respects the color mode automatically — system-preference detection, manual toggle with localStorage, and glassmorphism that adapts in both modes.",
  },
];

const SHOWCASE: FeatureSection[] = [
  {
    badge: "70 Primitives",
    title: "Every component you need, nothing you don't",
    description: "From buttons and inputs to tree views, color pickers, and sparklines — 70 production-ready primitives built with TypeScript and zero external dependencies beyond React.",
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
      "All 70 primitives tested in both modes",
      "Glassmorphism effects adapt to color mode",
    ],
    image: "/base/screenshots/darkmode.png",
    imageAlt: "Base dark mode support",
  },
];

export function BasePage() {
  return (
    <AppPage
      themeId="base"
      title="Base"
      tagline="Primitives. Tokens. Done."
      description="70 primitives, 8 design-token categories, dark mode, and zero opinions about your stack. Clean, composable React components that work everywhere — including the launcher."
      heroImage="/base/hero.png"
      icon="/base/app-icon.png"
      requirements="Free & Open Source  ·  React  ·  TypeScript"
      features={FEATURES}
      featuresHeading="The primitives. The tokens. The toggle."
      cta={{
        kind: "library",
        url: "https://github.com/InfamousVague",
        label: "View source",
      }}
    >
      <FeatureShowcase features={SHOWCASE} />
    </AppPage>
  );
}
