import { AppPage } from "../components/AppPage";

/// Libre's marketing card on mattssoftware.com. The deep marketing
/// site lives at libre.academy; this page is a one-pager that points
/// there and mirrors the hero. The catalog id is "fishbones" for
/// historical reasons — Libre shipped under that codename and the
/// id survives in old release notes.
export function LibrePage() {
  return (
    <AppPage
      themeId="libre"
      catalogId="fishbones"
      title="Libre"
      tagline="Turn any technical book into an interactive course."
      description={
        "Drop in a PDF or EPUB and Libre pulls out lessons, exercises, and hidden tests. " +
        "Sixteen languages with one editor, a local AI tutor on your laptop, a streak that " +
        "survives weekends, and seventeen themes. The full marketing site is at libre.academy; " +
        "this page is the short version."
      }
      heroImage="/libre/hero.png"
      icon="/libre/libre_icon.png"
      requirements="macOS · Windows · Linux · Free and open source"
      features={[
        {
          title: "Any book becomes a course",
          body:
            "Point Libre at a PDF or EPUB and it reads it, lifts out the ideas worth learning, " +
            "and lays them down as lessons with exercises and hidden tests. You read, the " +
            "editor is open beside it, and the next step is always ready.",
        },
        {
          title: "Sixteen languages, one editor",
          body:
            "JavaScript, TypeScript, Python, Rust, Go, Swift, Kotlin, Java, C, C++, C#, Ruby, " +
            "PHP, Lua, Elixir, and Haskell all compile and run inside Libre. The editor and " +
            "the run button don't change; the language does.",
        },
        {
          title: "A tutor that lives on your laptop",
          body:
            "Libre's tutor runs locally via Ollama. It can see your code, nudge you when " +
            "you're stuck, and answer questions in English. Nothing leaves your machine — no " +
            "API key, no cloud round-trip, no subscription.",
        },
      ]}
      featuresHeading="What Libre does"
      cta={{ kind: "github", repo: "Libre" }}
      site="https://libre.academy"
      closingTitle="Learn by reading, then building."
      closingNote="Free forever. Open source. Pick a book."
    />
  );
}
