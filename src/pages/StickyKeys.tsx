import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

const SHOWCASE_IMAGES = [
  "/stickykeys/screenshots/lock.png",
  "/stickykeys/screenshots/unlock.png",
];

export function StickyKeysPage() {
  const { t } = useLanguage();
  const a = t.apps.stickykeys;

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
      themeId="stickykeys"
      title="StickyKeys"
      tagline={a.tagline}
      description={a.description}
      heroImage="/stickykeys/hero.png"
      icon="/stickykeys/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "StickyKeys" }}
      menuBarApp
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
