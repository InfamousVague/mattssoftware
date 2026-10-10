import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";

// Ghost.md's page on mattssoftware.com. The app has its own site at
// ghostmarkdown.com, which carries the downloads; this page says what it
// is and sends people there. Copy and screenshots follow that site
// (~/Development/Apps/glyph/landing). The iPhone app is waiting on App
// Store review, so it is "soon" here and never "available".
// English only, like the other pages with no block in src/i18n/locales.

const SHOWCASE: FeatureSection[] = [
  {
    badge: "Journals",
    title: "Dated entries, from your own template.",
    description:
      "Dated entries that start from a template you write. Each one is still a plain Markdown file.",
    bullets: [],
    image: "/ghost/journal.webp",
    imageMode: "phone",
    imageAlt: "A journal in Ghost.md on a phone",
  },
  {
    badge: "Boards",
    title: "To-dos as cards, still lines in the note.",
    description:
      "A board lays named to-dos out in columns. Drag a card to move it. Underneath, the file stays text that any Markdown app can open.",
    bullets: [],
    image: "/ghost/board.webp",
    imageMode: "phone",
    imageAlt: "A board of to-do cards in Ghost.md on a phone",
  },
  {
    badge: "Canvases",
    title: "Ideas on a page, joined up.",
    description: "A canvas is a page you arrange by hand: cards placed where you want them, with lines between the ones that belong together.",
    bullets: [],
    image: "/ghost/canvas.webp",
    imageMode: "phone",
    imageAlt: "A canvas of joined cards in Ghost.md on a phone",
  },
];

export function GhostPage() {
  return (
    <AppPage
      themeId="ghost"
      title="Ghost.md"
      tagline="Organize everything, in plain Markdown."
      description="Notes, journals, boards and canvases, kept as plain Markdown on your own devices. Every note is a .md file you own."
      heroImage="/ghost/desk.webp"
      heroFit="cover"
      heroAlt="Ghost.md on a Mac: pinned notes, recent notes as cards, and today's journal"
      icon="/ghost/app-icon.png"
      requirements="Android, Mac, Windows and the web · iPhone soon · No account needed"
      featuresHeading="What it is"
      features={[
        {
          title: "A place for everything",
          body: "Notes, journals, boards and canvases. Pinned first on the home screen, then where you left off.",
        },
        {
          title: "Plain Markdown, all the way down",
          body: "Every note is one .md file, named after its title. Its settings are front matter at the top; everything else is words you can read.",
        },
        {
          title: "Find anything",
          body: "Search every word, and filter by notebook, pinned or workspace. Workspaces keep work apart, each in its own color.",
        },
      ]}
      cta={{ kind: "site", url: "https://ghostmarkdown.com" }}
      closingTitle="Get Ghost.md at ghostmarkdown.com."
    >
      <FeatureShowcase features={SHOWCASE} />
    </AppPage>
  );
}
