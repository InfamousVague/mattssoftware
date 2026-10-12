import { AppPage } from "../components/AppPage";
import { Checks, Section } from "../components/sections";

// Matt's Tools' page: four small Android tools in one app. Copy follows the
// app's own README (~/Development/Apps/matts-tools) and says only what the
// 1.0.0 release does. English only, like the other pages with no block in
// src/i18n/locales.

export function MattsToolsPage() {
  return (
    <AppPage
      themeId="matts-tools"
      title="Matt's Tools"
      tagline="Small tools for an Android phone, kept in one app."
      description="A floating dock with the phone's temperature and what your other tools are doing, a keep-awake tile, a frame rate profiler for any app, and a temperature readout. Four tools in one install."
      heroImage="/matts-tools/app-icon.png"
      heroFit="icon"
      heroAlt="The Matt's Tools icon: the MattsSoftware mark on a dark tile"
      icon="/matts-tools/app-icon.png"
      requirements="Android 10 or later on a 64-bit ARM phone. Installed by hand from the release."
      featuresHeading="What is in it"
      features={[
        {
          title: "Dock",
          body: "One small pill over whatever is on screen. Drag it anywhere, stand it on end, or sit it beside the camera with the hole inside its frame.",
        },
        {
          title: "Keep awake",
          body: "A quick settings tile that holds the screen on, a second tile for full brightness, and a home screen widget that shows how long it has been on.",
        },
        {
          title: "Frames",
          body: "Frames a second and janky frames for the app in front, kept per app and per build, with a leaderboard and side by side comparisons.",
        },
        {
          title: "Toasty",
          body: "The phone's temperature, read from its battery, in the dock or on a page of its own.",
        },
      ]}
      cta={{ kind: "github", repo: "matts-tools" }}
      platforms={["Android"]}
      closingTitle="Four tools, one install."
    >
      <Section title="In detail">
        <Checks
          items={[
            "The dock shows the temperature, the keep-awake time and the measured frame rate side by side",
            "A tap on the dock switches keep-awake on or off",
            "Keep-awake can end by itself on low battery, when unplugged, or when a folding phone is shut",
            "Frames ranks your apps from fastest to slowest and exports its runs as JSON",
            "A first-run page walks through each permission and what it is for",
            "No account and nothing sent anywhere: every reading stays on the phone",
          ]}
        />
      </Section>
    </AppPage>
  );
}
