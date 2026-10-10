import type { CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Download, ExternalLink } from "@glacier/icons";
import { CATALOG } from "../data/catalog";
import { taglineFor } from "../data/i18nCatalog";
import { themeVars } from "../data/themes";
import { useLanguage } from "../i18n/context";
import { useRelease } from "../lib/releases";
import { AppIcon } from "./AppIcon";
import { ButtonLink } from "./ButtonLink";
import { PlatformPills } from "./PlatformPills";
import { Reveal } from "./Reveal";

/// The page every app has. A page passes its identity, hero art, copy and
/// three "what it does" features; the template draws the hero (the art on a
/// stage washed in the app's own hue), the platforms, the downloads, the
/// feature tiles, whatever sections the page adds as children, a shelf of
/// other apps, and a closing call to action.

export interface AppPageFeature {
  title: string;
  body: string;
}

/// Where the primary button goes.
///   github   → the latest release of github.com/InfamousVague/<repo>
///   appstore → an App Store listing
///   library  → source or docs (nothing to install)
///   site     → the product's own website, which carries its downloads
type GithubCTA = { kind: "github"; repo: string };
type AppstoreCTA = { kind: "appstore"; url: string; label: string };
type LibraryCTA = { kind: "library"; url: string; label: string };
type SiteCTA = { kind: "site"; url: string };
type AppPageCTA = GithubCTA | AppstoreCTA | LibraryCTA | SiteCTA;

interface AppPageProps {
  /// Theme key: matches APP_THEMES (e.g. "blip", "port", "sentry").
  themeId: string;
  /// The app's id in the catalogue, when it differs from `themeId`.
  catalogId?: string;
  /// The product name.
  title: string;
  /// One-line headline.
  tagline: string;
  /// Two to four sentences, shown under the headline.
  description: string;
  /// Public hero art path, e.g. "/blip/hero.png".
  heroImage: string;
  /// How the art sits on its stage: floating (transparent art), filling it
  /// (a screenshot or a banner), or as a large icon.
  heroFit?: "contain" | "cover" | "icon";
  /// What the hero art shows, for screen readers. Omit for decoration.
  heroAlt?: string;
  /// Public app-icon path.
  icon: string;
  /// "macOS 14+ · Apple Silicon · Free · Developer ID signed".
  requirements?: string;
  /// The three "what it does" tiles under the hero, and their heading.
  /// A page that opens with its own section instead leaves both out.
  features?: AppPageFeature[];
  featuresHeading?: string;
  /// The closing line and a note under it, where the page has its own;
  /// otherwise the closing line is "Get <name>." in the active language.
  closingTitle?: string;
  closingNote?: string;
  cta: AppPageCTA;
  /// One download button per desktop platform (github channel only), each
  /// resolving its asset from the latest release. A platform with no asset
  /// in that release is shown as coming soon, with no link.
  platforms?: string[];
  /// The product's own website, linked beside the downloads.
  site?: string;
  /// True when the app lives in the macOS menu bar; picks the closing line.
  menuBarApp?: boolean;
  /// Extra sections between the feature tiles and the shelf of other apps.
  children?: ReactNode;
}

/// "https://attack.fm" → "attack.fm".
function hostOf(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

const DESKTOP: Record<string, { label: string; key: "mac" | "windows" | "linux" }> = {
  macOS: { label: "Mac", key: "mac" },
  Windows: { label: "Windows", key: "windows" },
  Linux: { label: "Linux", key: "linux" },
};

function Actions({ cta, platforms, site }: Pick<AppPageProps, "cta" | "platforms" | "site">) {
  const { t, site: copy, format } = useLanguage();
  const release = useRelease(cta.kind === "github" ? cta.repo : undefined);

  const siteLink = site ? (
    <ButtonLink href={site} variant="outline" size="lg" external>
      {format(copy.appPage.visitSite, { site: hostOf(site) })} <ArrowUpRight size={16} aria-hidden />
    </ButtonLink>
  ) : null;

  if (cta.kind === "site") {
    return (
      <ButtonLink href={cta.url} size="lg" external>
        {format(copy.appPage.visitSite, { site: hostOf(cta.url) })} <ArrowUpRight size={16} aria-hidden />
      </ButtonLink>
    );
  }

  if (cta.kind === "appstore" || cta.kind === "library") {
    return (
      <>
        <ButtonLink href={cta.url} size="lg" external>
          {cta.kind === "appstore" ? <Download size={16} aria-hidden /> : <ExternalLink size={16} aria-hidden />}
          {cta.label}
        </ButtonLink>
        {siteLink}
      </>
    );
  }

  const repoLink = (
    <ButtonLink href={`https://github.com/InfamousVague/${cta.repo}`} variant="ghost" size="lg" external>
      <ExternalLink size={16} aria-hidden /> {t.appPage.viewGithub}
    </ButtonLink>
  );

  if (platforms && platforms.length > 0) {
    return (
      <>
        {platforms.map((p) => {
          const meta = DESKTOP[p];
          if (!meta) return null;
          const url = release[meta.key];
          return url ? (
            <ButtonLink key={p} href={url} size="lg" download>
              <Download size={16} aria-hidden /> {meta.label}
            </ButtonLink>
          ) : (
            <span key={p} className="lbtn lbtn--outline lbtn--lg" aria-disabled="true">
              {format(copy.status.soon, { platform: meta.label })}
            </span>
          );
        })}
        {siteLink}
        {repoLink}
      </>
    );
  }

  return (
    <>
      <ButtonLink href={release.mac ?? release.releaseUrl} size="lg">
        <Download size={16} aria-hidden /> {t.appPage.downloadBtn}
        {release.version ? ` ${release.version}` : ""}
      </ButtonLink>
      {siteLink}
      {repoLink}
    </>
  );
}

function MoreApps({ excludeId }: { excludeId: string }) {
  const { t, site } = useLanguage();
  const others = CATALOG.filter((a) => a.id !== excludeId).slice(0, 8);
  return (
    <section className="sec sec--ruled" aria-labelledby="more-heading">
      <div className="sec__head">
        <p className="eyebrow">MattsSoftware</p>
        <h2 className="h2" id="more-heading">
          {t.appPage.suiteHeading}
        </h2>
      </div>
      <ul className="more">
        {others.map((a) => (
          <li key={a.id}>
            <Link to={a.view}>
              <AppIcon src={a.icon} size="2.5rem" />
              <span className="apps-panel__meta">
                <span className="apps-panel__name">{a.name}</span>
                <span className="apps-panel__tag">{taglineFor(a, t, site)}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function AppPage(props: AppPageProps) {
  const { t, site, format } = useLanguage();
  const style = themeVars(props.themeId) as CSSProperties;
  const catalogId = props.catalogId ?? props.themeId;
  const app = CATALOG.find((a) => a.id === catalogId);
  const fit = props.heroFit ?? "contain";

  return (
    <article className="wrap" style={style}>
      <Link to="/" className="ap-back">
        <ArrowLeft size={14} aria-hidden /> {site.appPage.back}
      </Link>

      <header className="ap-hero">
        <div className="ap-hero__text">
          <p className="ap-hero__id">
            <AppIcon src={props.icon} size="2.75rem" eager />
            {props.title}
          </p>
          <h1 className="h1">{props.tagline}</h1>
          <p className="lede">{props.description}</p>
          {app ? <PlatformPills app={app} size="md" /> : null}
          <div className="ap-hero__actions">
            <Actions cta={props.cta} platforms={props.platforms} site={props.site} />
          </div>
          {props.requirements ? <p className="ap-hero__req">{props.requirements}</p> : null}
        </div>
        <div className={`stage${fit === "contain" ? "" : ` stage--${fit}`}`}>
          <img src={props.heroImage} alt={props.heroAlt ?? ""} decoding="async" />
        </div>
      </header>

      {props.features && props.features.length > 0 ? (
        <section className="sec sec--tight" aria-labelledby="features-heading">
          <div className="sec__head">
            <h2 className="h2" id="features-heading">
              {props.featuresHeading}
            </h2>
          </div>
          <ul className="tiles">
            {props.features.map((f, i) => (
              <Reveal as="li" key={f.title} index={i} className="tile">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </Reveal>
            ))}
          </ul>
        </section>
      ) : null}

      {props.children}

      <MoreApps excludeId={catalogId} />

      <section className="closing stage" aria-labelledby="closing-heading">
        <AppIcon src={props.icon} size="4.5rem" />
        <h2 className="h2" id="closing-heading">
          {props.closingTitle ??
            (props.menuBarApp
              ? format(t.appPage.bottomAddToMenuBar, { name: props.title })
              : format(t.appPage.bottomGet, { name: props.title }))}
        </h2>
        {props.closingNote ? <p className="body">{props.closingNote}</p> : null}
        <div className="ap-hero__actions">
          <Actions cta={props.cta} platforms={props.platforms} site={props.site} />
        </div>
        {props.requirements ? <p className="ap-hero__req">{props.requirements}</p> : null}
      </section>
    </article>
  );
}
