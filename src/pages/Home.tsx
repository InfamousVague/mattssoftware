import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "@glacier/icons";
import { CATALOG, OTHER_THINGS, type CatalogApp } from "../data/catalog";
import { AppIcon } from "../components/AppIcon";
import { GITHUB_PROFILE } from "../components/icons/GithubMark";

/// "https://ghostmarkdown.com" → "ghostmarkdown.com".
function hostOf(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/// One row in the highlighted-six list. Icon left, copy middle, link
/// right. Each row is a `Link` to the product's page on this site —
/// one target per row, no competing buttons, no splash art.
function Row({ app }: { app: CatalogApp }) {
  const platformsLine = [
    ...app.platforms,
    ...(app.upcoming ?? []).map((u) => `${u.platform} ${u.status === "soon" ? "soon" : "in development"}`),
  ].join(" · ");

  const external = app.site ? hostOf(app.site) : null;

  return (
    <li className="home-row">
      <Link to={app.view} className="home-row__link">
        <AppIcon src={app.icon} size="3rem" />
        <div className="home-row__text">
          <p className="home-row__name">{app.name}</p>
          <p className="home-row__tag">{app.tagline}</p>
          <p className="home-row__meta small">{platformsLine}</p>
        </div>
        <span className="home-row__end small" aria-hidden>
          {external ? (
            <>
              {external} <ArrowUpRight size={14} aria-hidden />
            </>
          ) : (
            <ArrowUpRight size={14} aria-hidden />
          )}
        </span>
      </Link>
    </li>
  );
}

/// The home page, deliberately minimal:
///
///   Small apps that do one thing well.
///   [ lede ]
///
///   What I'm building
///   ─ 6 rows: icon + name + tagline + platforms + link
///
///   Other things I've put on GitHub
///   ─ 5 rows: name + one-liner + link
///
///   ─ Matt
///
/// No hero banners, no splash art, no alternating two-column layouts.
/// The product pages carry the detail.
export function Home() {
  const highlighted = CATALOG.filter((a) => a.featured);

  return (
    <article className="wrap wrap--narrow home">
      <section className="home-hero" aria-labelledby="home-title">
        <p className="eyebrow">MattsSoftware</p>
        <h1 className="h1" id="home-title">
          Small apps that do one thing well.
        </h1>
        <p className="lede">
          A one-person shop. Six apps I'm highlighting right now; a handful of
          smaller things below them. Everything is free, most of it is open
          source, and none of it wants your email address.
        </p>
      </section>

      <section className="sec sec--tight" aria-labelledby="home-featured">
        <h2 className="eyebrow" id="home-featured">
          What I'm building
        </h2>
        <ul className="home-list" aria-labelledby="home-featured">
          {highlighted.map((app) => (
            <Row key={app.id} app={app} />
          ))}
        </ul>
      </section>

      <section className="sec sec--tight" aria-labelledby="home-other">
        <h2 className="eyebrow" id="home-other">
          Other things I've put on GitHub
        </h2>
        <ul className="home-list home-list--quiet" aria-labelledby="home-other">
          {OTHER_THINGS.map((t) => (
            <li key={t.name} className="home-row home-row--quiet">
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className="home-row__link"
              >
                <div className="home-row__text">
                  <p className="home-row__name">{t.name}</p>
                  <p className="home-row__tag small">{t.oneLiner}</p>
                </div>
                <span className="home-row__end small" aria-hidden>
                  github <ExternalLink size={12} aria-hidden />
                </span>
              </a>
            </li>
          ))}
          <li className="home-row home-row--quiet">
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="home-row__link"
            >
              <div className="home-row__text">
                <p className="home-row__name">Everything else</p>
                <p className="home-row__tag small">
                  Finished, abandoned, half-finished — the whole shelf.
                </p>
              </div>
              <span className="home-row__end small" aria-hidden>
                github.com/InfamousVague <ArrowUpRight size={12} aria-hidden />
              </span>
            </a>
          </li>
        </ul>
      </section>

      <section className="home-sign" aria-hidden>
        <p className="small">— Matt</p>
      </section>
    </article>
  );
}
