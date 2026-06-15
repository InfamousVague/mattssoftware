import { AppPage } from "../components/AppPage";

/// The Black Pearl's marketing page on mattssoftware.com.
///
/// Cross-platform: the `platforms` prop makes AppPage render one download
/// button per OS, each resolving the matching asset (.dmg / .msi / .AppImage)
/// from the latest github.com/InfamousVague/TheBlackPearl release. Until a
/// platform's build is published, its button shows a "Soon" chip.
export function BlackPearlPage() {
  return (
    <AppPage
      themeId="blackpearl"
      title="The Black Pearl"
      tagline="Discover, stream, and keep movies, shows & music — one beautiful app."
      description="Search every source at once, stream the moment you press play, and build a tidy library of movies, TV, and music. On-the-fly transcoding plays the formats a browser can't, an iTunes-style music view pulls album art from Spotify, and a one-click local-AI pass keeps your folder organized."
      heroImage="/blackpearl/hero.png"
      icon="/blackpearl/app-icon.png"
      requirements="macOS 11+ · Apple Silicon · Notarized & Developer ID signed · Free"
      featuresHeading="What it does"
      features={[
        {
          title: "Discover everything",
          body: "One search hits all your sources at once, favors exact matches, and shows seeders, size, and quality at a glance — so the best result is always first.",
        },
        {
          title: "Stream while it downloads",
          body: "Press play and watch immediately. Even MKV and other formats the browser can't decode are transcoded on the fly, with seamless seeking.",
        },
        {
          title: "A library that tidies itself",
          body: "Movies, shows, and music land in a clean, browsable library — album art scrubbed from Spotify, an iTunes-style music view, and a local-AI organize pass.",
        },
      ]}
      cta={{ kind: "github", repo: "TheBlackPearl" }}
      platforms={["macOS", "Windows", "Linux"]}
    />
  );
}
