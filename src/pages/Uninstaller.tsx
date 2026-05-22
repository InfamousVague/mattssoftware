import { AppPage } from "../components/AppPage";
import { useLanguage } from "../i18n/context";

export function UninstallerPage() {
  const { t } = useLanguage();
  const a = t.apps.uninstaller;

  return (
    <AppPage
      themeId="uninstaller"
      title="Uninstaller"
      tagline={a.tagline}
      description={a.description}
      heroImage="/uninstaller/app-icon.png"
      icon="/uninstaller/app-icon.png"
      requirements={a.requirements}
      features={a.features}
      featuresHeading={a.featuresHeading}
      cta={{ kind: "github", repo: "Uninstaller" }}
      menuBarApp
    />
  );
}
