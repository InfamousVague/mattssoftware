import { AppPage } from "../components/AppPage";

/// Ghost KBD — an Android developer-centric keyboard. The marketing
/// card on mattssoftware.com; the keyboard itself is in
/// ~/Development/Apps/ghost-kbd (native Kotlin InputMethodService
/// with a Flutter settings app drawn with Glacier, same kit as the
/// other Ghost products).
export function GhostKBDPage() {
  return (
    <AppPage
      themeId="ghostkbd"
      title="Ghost KBD"
      tagline="A developer keyboard for Android."
      description={
        "A faithful Gboard QWERTY as the baseline — and a layer of developer niceties on top. " +
        "The keyboard itself is native (so it opens instantly), the settings app is drawn with " +
        "Glacier, and both live in step with the rest of the Ghost family."
      }
      heroImage="/ghostkbd/hero.png"
      icon="/ghostkbd/app-icon.png"
      requirements="Android · Free and open source"
      features={[
        {
          title: "Gboard parity, as a baseline",
          body:
            "QWERTY, the ?123 and =\\< pages, long-press panels (digits on the top row, Gboard's " +
            "symbol hints below), auto-caps, caps-lock, repeating backspace, slide-on-space " +
            "cursor move, double-space period, and the enter key that follows the field.",
        },
        {
          title: "A native keyboard, a Flutter settings app",
          body:
            "The keyboard is a Kotlin InputMethodService drawing one custom view, so it never " +
            "waits on a runtime. Setup and settings are a Flutter app drawn with Glacier. One " +
            "MethodChannel bridges them and every change on the settings side shows up on the " +
            "keyboard immediately.",
        },
        {
          title: "Built for writing code on a phone",
          body:
            "Symbol hints you can actually reach, parentheses, brackets, and quotes at " +
            "thumb-distance, and the usual indenting conventions code expects. The developer " +
            "layer rides on top of the Gboard base, so none of the muscle memory changes.",
        },
      ]}
      featuresHeading="What Ghost KBD does"
      cta={{ kind: "github", repo: "ghost-kbd" }}
      closingTitle="Code at a bus stop."
      closingNote="Free forever. Open source. Pick it as your keyboard in Android settings."
    />
  );
}
