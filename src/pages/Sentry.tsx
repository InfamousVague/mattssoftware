import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/sentry/screenshots/lantern.png",
  "/sentry/screenshots/manifest.png",
];

export function SentryPage() {
  const { t } = useLanguage();
  const a = t.apps.sentry;

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
      themeId="sentry"
      title="Sentry"
      tagline={a.tagline}
      description={a.description}
      heroImage="/sentry/hero.png"
      icon="/sentry/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Sentry" }}
      menuBarApp
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
