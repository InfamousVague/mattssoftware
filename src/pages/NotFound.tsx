import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./NotFound.css";

/// Catch-all 404 — the ribbon-snake-in-pith-helmet illustration on a
/// question-mark rock, two blank signposts. Tone: lost but cheerful.
/// Reachable via either an unmatched URL (the BrowserRouter `*` route)
/// or, on the static GitHub Pages mirror, via the `/404.html` fallback.
export function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__bg" aria-hidden />
      <img
        src="/_brand/404-lost-snake.png"
        alt="A red ribbon snake in a pith helmet sitting on a rock shaped like a question mark, surrounded by blank signposts"
        className="notfound__art"
      />
      <span className="notfound__code">404</span>
      <h1 className="notfound__title">This page wandered off.</h1>
      <p className="notfound__sub">
        The signposts are blank. The snake doesn't know either.
        Let's get you back to something that exists.
      </p>
      <div className="notfound__actions">
        <Link to="/" className="btn btn--primary btn--lg">
          <ArrowLeft size={16} /> Back to the suite
        </Link>
        <a
          href="https://github.com/InfamousVague"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--ghost btn--lg"
        >
          Or rummage on GitHub
        </a>
      </div>
    </div>
  );
}
