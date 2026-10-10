import { AppPage } from "../components/AppPage";
import { Checks, Section } from "../components/sections";

// PrettyCardboard's page on mattssoftware.com. The game is played at
// prettycardboard.com; this page says what it is and sends people there.
// Copy follows the product's own README (~/Development/Apps/PrettyCardboard).
// English only, like the other pages with no block in src/i18n/locales.

export function PrettyCardboardPage() {
  return (
    <AppPage
      themeId="prettycardboard"
      title="PrettyCardboard"
      tagline="A card table for pretend cardboard."
      description="A multiplayer, freeform tabletop for paper card games like Magic: The Gathering. Everyone sits at one shared table in the browser and moves the cards by hand. It is manual play with conveniences, and there is no rules engine in the way."
      heroImage="/prettycardboard/app-icon.png"
      heroFit="icon"
      heroAlt="The PrettyCardboard icon: a cardboard card peeling back to show a rainbow foil"
      icon="/prettycardboard/app-icon.png"
      requirements="Plays in the browser at prettycardboard.com"
      featuresHeading="What it is"
      features={[
        {
          title: "One shared table",
          body: "Two to six seats around the same table. Create one and share the join link.",
        },
        {
          title: "Cards you move yourself",
          body: "Drag a card anywhere. A fanned hand, zone piles and guided combat keep the table tidy while you play it your way.",
        },
        {
          title: "Everyone sees the same thing",
          body: "The server is the authority on the table, so every seat stays in step.",
        },
      ]}
      cta={{ kind: "site", url: "https://prettycardboard.com" }}
      closingTitle="Pull up a chair at prettycardboard.com."
    >
      <Section title="On the table">
        <Checks
          items={[
            "A shared table with two to six seats",
            "Drag-anywhere cards and a fanned hand",
            "Zone piles for the parts of the table a game needs",
            "Guided combat, for when the table wants help keeping track",
            "Foil cards drawn with depth and shine",
            "Runs in the browser, with nothing to install",
          ]}
        />
      </Section>
    </AppPage>
  );
}
