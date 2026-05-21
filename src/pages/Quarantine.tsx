import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/quarantine/screenshots/chamber.png",
  "/quarantine/screenshots/inspect.png",
];

export function QuarantinePage() {
  const { t } = useLanguage();
  const a = t.apps.quarantine;

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
      themeId="quarantine"
      title="Quarantine"
      heroImage="/quarantine/hero.png"
      icon="/quarantine/app-icon.png"
      tagline={a.tagline}
      description={a.description}
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Quarantine" }}
      menuBarApp
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
