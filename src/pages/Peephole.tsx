import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/peephole/screenshots/camera.png",
  "/peephole/screenshots/alert.png",
];

export function PeepholePage() {
  const { t } = useLanguage();
  const a = t.apps.peephole;

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
      themeId="peephole"
      title="Peephole"
      tagline={a.tagline}
      description={a.description}
      heroImage="/peephole/hero.png"
      icon="/peephole/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Peephole" }}
      menuBarApp
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
