import { ArrowLeft } from "@glacier/icons";
import { ButtonLink } from "../components/ButtonLink";
import { GITHUB_PROFILE } from "../components/icons/GithubMark";
import { useLanguage } from "../i18n/context";

/// Catch-all 404: the ribbon snake in a pith helmet on a question-mark
/// rock, between two blank signposts. Lost but cheerful. Reached by an
/// unmatched URL (the BrowserRouter `*` route) or, on the static GitHub
/// Pages mirror, by the `/404.html` fallback.
export function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="notfound">
      <img
        src="/_brand/404-lost-snake.png"
        alt={t.notFound.altText}
        className="notfound__art"
      />
      <span className="notfound__code">404</span>
      <h1 className="h1">{t.notFound.title}</h1>
      <p className="lede" style={{ maxWidth: "34rem" }}>
        {t.notFound.sub}
      </p>
      <div className="notfound__actions">
        <ButtonLink to="/" size="lg">
          <ArrowLeft size={16} aria-hidden /> {t.notFound.backToSuite}
        </ButtonLink>
        <ButtonLink href={GITHUB_PROFILE} variant="outline" size="lg" external>
          {t.notFound.rummageGithub}
        </ButtonLink>
      </div>
    </div>
  );
}
