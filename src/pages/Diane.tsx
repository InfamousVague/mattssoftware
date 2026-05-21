import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/diane/screenshots/recorder.png",
  "/diane/screenshots/transcription.png",
  "/diane/screenshots/library.png",
];

export function DianePage() {
  const { t } = useLanguage();
  const a = t.apps.diane;

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
      themeId="diane"
      title="Diane"
      tagline={a.tagline}
      description={a.description}
      heroImage="/diane/hero.png"
      icon="/diane/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Diane" }}
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
