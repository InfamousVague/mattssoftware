import { AppPage } from "../components/AppPage";
import { FeatureShowcase, type FeatureSection } from "../components/FeatureShowcase";

// Attack.fm's page on mattssoftware.com. The product has its own site at
// attack.fm, which carries the downloads; this page says what it is and
// sends people there. Copy follows attack.fm's own landing page and the
// app's store listing (~/Development/Apps/AttackFM: site/, store/play).
// English only, like the other pages with no block in src/i18n/locales.

const SHOWCASE: FeatureSection[] = [
  {
    badge: "Your library",
    title: "Your own music, from your own machine.",
    description:
      "Point the app at a server you run (a spare Mac, a home box, a VPS) and your whole collection is on every device. There is no store and no catalogue: Attack.fm plays music you already have.",
    bullets: [
      "FLAC and ALAC stay lossless, and the server transcodes when the connection cannot carry it",
      "Offline downloads, with a cache that never evicts what you have pinned",
      "Playlists that live on your server, not on one phone",
    ],
    image: "/attackfm/library.jpg",
    imageMode: "phone",
    imageAlt: "The Attack.fm library on a phone",
  },
  {
    badge: "The DJ",
    title: "A DJ that picks by how the recordings sound.",
    description:
      "The server measures every recording and builds a set out of your own library. Playback follows you too: start a song on the phone and pick it up on the desktop, with the queue and the position intact.",
    bullets: [
      "Gapless playback, crossfade and an equaliser",
      "Synced lyrics: tap a line to seek to it",
      "Listen together: start a jam and friends hear what you hear, in step",
    ],
    image: "/attackfm/booth.jpg",
    imageMode: "phone",
    imageAlt: "The Attack.fm DJ booth on a phone",
  },
];

export function AttackFMPage() {
  return (
    <AppPage
      themeId="attackfm"
      title="Attack.fm"
      tagline="Your music, on your machines."
      description="A music player and a server you run yourself. The files stay on your hardware, and every device you own plays from them."
      heroImage="/attackfm/hero.png"
      heroFit="cover"
      heroAlt="The Attack wordmark over a pink audio waveform"
      icon="/attackfm/app-icon.png"
      requirements="Runs on hardware you own · Or open it in your browser at attack.fm"
      featuresHeading="What it is"
      features={[
        {
          title: "A player and a server",
          body: "The server is a single program that indexes a music folder and streams the original files, so a phone plays the same file the desktop does.",
        },
        {
          title: "Every screen you own",
          body: "The same app on the Mac, Windows, Linux and Android, and in a browser tab with nothing to install.",
        },
        {
          title: "Yours to keep",
          body: "Your library, your play history and your playlists live on your server. No advertising and no tracking.",
        },
      ]}
      cta={{ kind: "site", url: "https://attack.fm" }}
      closingTitle="Get Attack.fm at attack.fm."
    >
      <FeatureShowcase features={SHOWCASE} />
    </AppPage>
  );
}
