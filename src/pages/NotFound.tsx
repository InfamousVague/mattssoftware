import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../i18n/context";
import "./NotFound.css";

/// Catch-all 404 — the ribbon-snake-in-pith-helmet illustration on a
/// question-mark rock, two blank signposts. Tone: lost but cheerful.
/// Reachable via either an unmatched URL (the BrowserRouter `*` route)
/// or, on the static GitHub Pages mirror, via the `/404.html` fallback.
export function NotFound() {
  const { t } = useLanguage();
  return (
    <div className="notfound">
      <div className="notfound__bg" aria-hidden />
      <img
        src="/_brand/404-lost-snake.png"
        alt={t.notFound.altText}
        className="notfound__art"
      />
      <span className="notfound__code">404</span>
      <h1 className="notfound__title">{t.notFound.title}</h1>
      <p className="notfound__sub">{t.notFound.sub}</p>
      <div className="notfound__actions">
        <Link to="/" className="btn btn--primary btn--lg">
          <ArrowLeft size={16} /> {t.notFound.backToSuite}
        </Link>
        <a
          href="https://github.com/InfamousVague"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost btn--lg"
        >
          {t.notFound.rummageGithub}
        </a>
      </div>
    </div>
  );
}
