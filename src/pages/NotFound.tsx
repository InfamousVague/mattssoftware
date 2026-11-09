import { ArrowLeft } from "@glacier/icons";
import { ButtonLink } from "../components/ButtonLink";
import { GITHUB_PROFILE } from "../components/icons/GithubMark";

/// Catch-all 404: the ribbon snake in a pith helmet on a question-mark
/// rock, between two blank signposts. Lost but cheerful. Reached by an
/// unmatched URL (the BrowserRouter `*` route) or, on the static GitHub
/// Pages mirror, by the `/404.html` fallback.
export function NotFound() {
  return (
    <div className="notfound">
      <img
        src="/_brand/404-lost-snake.png"
        alt="A red ribbon snake in a pith helmet sitting on a rock shaped like a question mark, surrounded by blank signposts"
        className="notfound__art"
      />
      <span className="notfound__code">404</span>
      <h1 className="h1">This page wandered off.</h1>
      <p className="lede" style={{ maxWidth: "34rem" }}>
        The signposts are blank. The snake doesn't know either. Let's get you back to something
        that exists.
      </p>
      <div className="notfound__actions">
        <ButtonLink to="/" size="lg">
          <ArrowLeft size={16} aria-hidden /> Back to the home page
        </ButtonLink>
        <ButtonLink href={GITHUB_PROFILE} variant="outline" size="lg" external>
          Or rummage on GitHub
        </ButtonLink>
      </div>
    </div>
  );
}
