import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/alfred/screenshots/butler.png",
  "/alfred/screenshots/disk.png",
];

export function AlfredPage() {
  const { t } = useLanguage();
  const a = t.apps.alfred;

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
      themeId="alfred"
      title="Alfred"
      tagline={a.tagline}
      description={a.description}
      heroImage="/alfred/hero.png"
      icon="/alfred/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Alfred" }}
      menuBarApp
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
