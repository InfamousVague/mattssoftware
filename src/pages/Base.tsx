import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/base/screenshots/primitives.png",
  "/base/screenshots/tokens.png",
  "/base/screenshots/darkmode.png",
];

export function BasePage() {
  const { t } = useLanguage();
  const a = t.apps.base;

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
      themeId="base"
      title="Base"
      tagline={a.tagline}
      description={a.description}
      heroImage="/base/hero.png"
      icon="/base/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{
        kind: "library",
        url: "https://github.com/InfamousVague",
        label: a.ctaLabel,
      }}
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
