import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ExternalLink } from "@glacier/icons";
import { CATALOG, OTHER_THINGS, type CatalogApp } from "../data/catalog";
import { themeVars } from "../data/themes";
import { AppIcon } from "../components/AppIcon";
import { ButtonLink } from "../components/ButtonLink";
import { PlatformPills } from "../components/PlatformPills";
import { Reveal } from "../components/Reveal";
import { GITHUB_PROFILE } from "../components/icons/GithubMark";

/// "https://ghostmarkdown.com" → "ghostmarkdown.com".
function hostOf(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/// A tall story section for one of the six highlighted products. The
/// hero art sits on one side, the copy on the other; side alternates
/// per entry so the scroll has rhythm.
function Story({ app, flip }: { app: CatalogApp; flip: boolean }) {
  const style = themeVars(app.id) as CSSProperties;
  const heroSrc = `/${app.id === "fishbones" ? "libre" : app.id}/hero.png`;

  return (
    <section
      className={`story${flip ? " story--flip" : ""}`}
      style={style}
      aria-labelledby={`story-${app.id}`}
    >
      <div className="stage story__art">
        <img src={heroSrc} alt="" decoding="async" loading="lazy" />
      </div>
      <div className="story__text">
        <p className="story__eyebrow">
          <AppIcon src={app.icon} size="1.75rem" />
          <span>{app.name}</span>
        </p>
        <h2 className="h2" id={`story-${app.id}`}>
          {app.tagline}
        </h2>
        <p className="lede">{app.description}</p>
        <PlatformPills app={app} size="sm" />
        <div className="story__actions">
          {app.site ? (
            <ButtonLink href={app.site} size="md" external>
              Visit {hostOf(app.site)} <ArrowUpRight size={14} aria-hidden />
            </ButtonLink>
          ) : null}
          <ButtonLink to={app.view} variant="outline" size="md">
            Read more <ArrowRight size={14} aria-hidden />
          </ButtonLink>
          {app.channel === "github" && app.githubRepo ? (
            <ButtonLink
              href={`https://github.com/InfamousVague/${app.githubRepo}`}
              variant="ghost"
              size="md"
              external
            >
              <ExternalLink size={14} aria-hidden /> Source
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/// The home page.
///
///   [ quiet hero ]
///   [ Ghost.md ]
///   [ Ghost KBD ]
///   [ Libre ]
///   [ Espresso ]
///   [ Attack.fm ]
///   [ PrettyCardboard ]
///   [ Other things I've built ]
///   [ A sign-off line ]
export function Home() {
  const highlighted = CATALOG.filter((a) => a.featured);

  return (
    <article>
      <section className="home-hero">
        <div className="wrap">
          <p className="eyebrow">MattsSoftware</p>
          <h1 className="h1 home-hero__title">
            Small apps that do one thing well.
          </h1>
          <p className="lede home-hero__lede">
            A one-person shop building a handful of tools I actually use. Below
            are the six I'm highlighting right now. Everything is free, most of
            it is open source, and none of it wants your email address.
          </p>
        </div>
      </section>

      <section className="home-stories wrap">
        {highlighted.map((app, i) => (
          <Reveal key={app.id} index={i}>
            <Story app={app} flip={i % 2 === 1} />
          </Reveal>
        ))}
      </section>

      <section className="home-other wrap">
        <div className="sec__head">
          <p className="eyebrow">Also by MattsSoftware</p>
          <h2 className="h2">Other things I've built.</h2>
          <p className="lede">
            Smaller projects that live on GitHub and don't have a storefront
            page here yet. Each is free; most are open source.
          </p>
        </div>
        <ul className="other-list">
          {OTHER_THINGS.map((thing) => (
            <li key={thing.name} className="other-item">
              <a
                href={thing.href}
                target="_blank"
                rel="noopener noreferrer"
                className="other-item__link"
              >
                <span className="other-item__name">{thing.name}</span>
                <span className="other-item__tag">{thing.oneLiner}</span>
                <ArrowUpRight size={14} aria-hidden className="other-item__arrow" />
              </a>
            </li>
          ))}
          <li className="other-item">
            <a
              href={GITHUB_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="other-item__link"
            >
              <span className="other-item__name">Everything else</span>
              <span className="other-item__tag">
                Finished, abandoned, half-finished — the whole shelf is on GitHub.
              </span>
              <ArrowUpRight size={14} aria-hidden className="other-item__arrow" />
            </a>
          </li>
        </ul>
      </section>

      <section className="home-sign wrap">
        <p className="small">
          Built with espresso and loud music.{" "}
          <Link to="/" className="home-sign__link">
            — Matt
          </Link>
        </p>
      </section>
    </article>
  );
}
