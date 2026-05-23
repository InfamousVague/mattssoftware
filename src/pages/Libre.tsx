import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/libre/screenshots/lessons.png",
  "/libre/screenshots/streak.png",
];

/// Libre's marketing page on mattssoftware.com.
///
/// The i18n key is still `apps.fishbones` for historical reasons —
/// the product used to ship under that codename. Renaming the locale
/// keys would touch nine translation files for purely cosmetic gain;
/// the user-facing strings already say "Libre" everywhere.
export function LibrePage() {
  const { t } = useLanguage();
  const a = t.apps.fishbones;

  const showcase: FeatureSection[] = (a.showcase ?? []).map((s, i) => ({
    badge: s.badge,
    title: s.title,
    description: s.description,
    bullets: s.bullets,
    image: SHOWCASE_IMAGES[i],
    imageAlt: s.imageAlt,
    imageMode: "illustration",
  }));

  return (
    <AppPage
      themeId="libre"
      title="Libre"
      tagline={a.tagline}
      description={a.description}
      heroImage="/libre/hero.png"
      icon="/libre/libre_icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Libre" }}
      menuBarApp
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
