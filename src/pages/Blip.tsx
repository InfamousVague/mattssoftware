import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";
import { useLanguage } from "../i18n/context";

/// Each showcase entry gets its art path from a fixed array — only
/// text fields are translated. Order matches `apps.blip.showcase[]`
/// in the locales: Network Map, Firewall, Guard, Visualization
/// (the undersea-cable illustration), Traceroute (hops).
const SHOWCASE_IMAGES = [
  "/blip/screenshots/map.png",
  "/blip/screenshots/firewall.png",
  "/blip/screenshots/guard.png",
  "/blip/screenshots/latencyandunderseacables.png",
  "/blip/screenshots/hops.png",
];

export function BlipPage() {
  const { t } = useLanguage();
  const a = t.apps.blip;

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
      themeId="blip"
      title="Blip"
      tagline={a.tagline}
      description={a.description}
      heroImage="/blip/hero.png"
      icon="/blip/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Blip" }}
    >
      <FeatureShowcase features={showcase} />
    </AppPage>
  );
}
