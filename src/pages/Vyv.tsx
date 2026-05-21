import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/espresso/screenshots/awake.png",
  "/espresso/screenshots/timer.png",
];

export function VyvPage() {
  const { t } = useLanguage();
  const a = t.apps.espresso;

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
      themeId="espresso"
      title="Espresso"
      tagline={a.tagline}
      description={a.description}
      heroImage="/espresso/hero.png"
      icon="/espresso/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Espresso" }}
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
