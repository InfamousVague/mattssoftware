import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Download, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { CATALOG } from "../data/catalog";
import { themeVars } from "../data/themes";
import { useLanguage } from "../i18n/context";
import { catalogTaglineForId } from "../data/i18nCatalog";
import "./AppPage.css";

/// Shape every app page (Blip, Port, Sentry, …) uses. The page passes
/// its identity, hero artwork, copy, and a list of "what it does"
/// features; the template renders the playful-3D hero (illustration
/// floating over an ambient per-app gradient spotlight), the
/// requirements line, two CTAs, the feature grid, a "see what else
/// we make" carousel of every other app, and a bottom download CTA.
///
/// `themeId` keys into APP_THEMES; pass the same id the catalog uses
/// (or the app's route slug for legacy ids like "vyv" = Espresso).
export interface AppPageFeature {
  title: string;
  body: string;
}

interface AppPageProps {
  /// Theme key — matches APP_THEMES (e.g. "blip", "port", "sentry").
  themeId: string;
  /// Big title (usually the product name).
  title: string;
  /// One-line poetic subhead.
  tagline: string;
  /// 2–4 sentence elevator pitch, shown below the tagline.
  description: string;
  /// Public hero illustration path, e.g. "/blip/hero.png".
  heroImage: string;
  /// Public app-icon path, used in the bottom carousel and Open Graph.
  icon: string;
  /// "macOS 14+ · Apple Silicon · Free · Developer ID signed".
  requirements?: string;
  /// 3 feature cards beneath the hero.
  features: AppPageFeature[];
  /// Section title above the feature grid.
  featuresHeading: string;
  /// Channel + (for GitHub channel) repo to fetch the latest release.
  /// One of:
  ///   { kind: "github", repo: "Blip" }
  ///   { kind: "appstore", url: "https://apps.apple.com/…" }
  ///   { kind: "library", url: "https://github.com/InfamousVague" }
  cta: AppPageCTA;
  /// Opt-in cross-platform downloads. When set (and cta.kind === "github"),
  /// the hero + bottom CTA render one download button per platform —
  /// "macOS" / "Windows" / "Linux" — each resolving the matching asset
  /// (.dmg / .msi|.exe / .AppImage|.deb) from the latest GitHub release,
  /// falling back to a "Soon" chip until that platform's build is published.
  /// Omit it for the usual single Mac-DMG button.
  platforms?: string[];
  /// True when this app genuinely lives in the macOS menu bar — drives
  /// the bottom-CTA copy ("Add X to your menu bar." vs. "Get X.").
  menuBarApp?: boolean;
  /// Optional extra children rendered between the features grid and
  /// the suite carousel — for pages that have extra sections (Tap's
  /// watchOS mockup, Base's primitives list, etc).
  children?: ReactNode;
}

/// Discriminated union for the CTA. Splitting the non-github cases
/// into their own variants (rather than a single `kind: "appstore" |
/// "library"`) keeps TypeScript's narrowing working — after the
/// appstore/library branches return, the remaining `cta` is provably
/// a GithubCTA and `cta.repo` is safe.
type GithubCTA = { kind: "github"; repo: string };
type AppstoreCTA = { kind: "appstore"; url: string; label: string };
type LibraryCTA = { kind: "library"; url: string; label: string };
type AppPageCTA = GithubCTA | AppstoreCTA | LibraryCTA;

interface Release { url: string; version: string }

async function fetchLatestRelease(repo: string): Promise<Release> {
  const fallback: Release = {
    url: `https://github.com/InfamousVague/${repo}/releases/latest`,
    version: "",
  };
  try {
    const res = await fetch(
      `https://api.github.com/repos/InfamousVague/${repo}/releases?per_page=20`,
    );
    if (!res.ok) return fallback;
    const releases = await res.json();
    if (!Array.isArray(releases)) return fallback;
    for (const rel of releases) {
      if (rel.draft) continue;
      const dmg = rel.assets?.find((a: { name: string }) =>
        a.name.endsWith(".dmg"),
      );
      if (dmg) return { url: dmg.browser_download_url, version: rel.tag_name || "" };
    }
    return fallback;
  } catch {
    return fallback;
  }
}

// ---- cross-platform downloads (macOS / Windows / Linux) ----

interface PlatformAssets {
  version: string;
  releaseUrl: string;
  mac?: string;
  windows?: string;
  linux?: string;
}

/// Resolve the latest release's download URL for each platform from its asset
/// list (Tauri ships .dmg / .msi+.exe / .AppImage+.deb). Missing platforms stay
/// undefined so the UI can show "Soon" until that build is published.
async function fetchPlatformAssets(repo: string): Promise<PlatformAssets> {
  const releaseUrl = `https://github.com/InfamousVague/${repo}/releases/latest`;
  const empty: PlatformAssets = { version: "", releaseUrl };
  try {
    const res = await fetch(
      `https://api.github.com/repos/InfamousVague/${repo}/releases?per_page=20`,
    );
    if (!res.ok) return empty;
    const releases = await res.json();
    if (!Array.isArray(releases)) return empty;
    for (const rel of releases) {
      if (rel.draft) continue;
      const assets: { name: string; browser_download_url: string }[] = rel.assets ?? [];
      const find = (test: (n: string) => boolean) =>
        assets.find((a) => test(a.name.toLowerCase()))?.browser_download_url;
      const mac = find((n) => n.endsWith(".dmg"));
      const windows = find((n) => n.endsWith(".msi") || n.endsWith(".exe"));
      const linux = find((n) => n.endsWith(".appimage") || n.endsWith(".deb") || n.endsWith(".rpm"));
      if (mac || windows || linux) {
        return { version: rel.tag_name || "", releaseUrl, mac, windows, linux };
      }
    }
    return empty;
  } catch {
    return empty;
  }
}

const PLATFORM_META: Record<string, { label: string; key: "mac" | "windows" | "linux" }> = {
  macOS: { label: "macOS", key: "mac" },
  Windows: { label: "Windows", key: "windows" },
  Linux: { label: "Linux", key: "linux" },
};

function PlatformDownloads({ repo, platforms }: { repo: string; platforms: string[] }) {
  const [assets, setAssets] = useState<PlatformAssets>({
    version: "",
    releaseUrl: `https://github.com/InfamousVague/${repo}/releases/latest`,
  });
  useEffect(() => {
    fetchPlatformAssets(repo).then(setAssets);
  }, [repo]);

  return (
    <>
      {platforms.map((p) => {
        const meta = PLATFORM_META[p];
        if (!meta) return null;
        const url = assets[meta.key];
        return url ? (
          <a key={p} href={url} className="btn btn--primary btn--lg" download>
            <Download size={16} /> {meta.label}
          </a>
        ) : (
          <span
            key={p}
            className="btn btn--ghost btn--lg is-soon"
            aria-disabled="true"
            title={`${meta.label} build coming soon`}
          >
            {meta.label} · Soon
          </span>
        );
      })}
    </>
  );
}

function PrimaryCTA({ cta }: { cta: AppPageProps["cta"] }) {
  const { t } = useLanguage();
  const [release, setRelease] = useState<Release>({ url: "", version: "" });

  useEffect(() => {
    if (cta.kind !== "github") return;
    fetchLatestRelease(cta.repo).then(setRelease);
  }, [cta]);

  if (cta.kind === "appstore") {
    return (
      <a
        href={cta.url}
        className="btn btn--primary btn--lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Download size={16} /> {cta.label}
      </a>
    );
  }
  if (cta.kind === "library") {
    return (
      <a
        href={cta.url}
        className="btn btn--primary btn--lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink size={16} /> {cta.label}
      </a>
    );
  }
  // cta.kind === "github" — TS narrows once the other two branches return.
  const repo = cta.repo;
  const href =
    release.url || `https://github.com/InfamousVague/${repo}/releases/latest`;
  return (
    <a href={href} className="btn btn--primary btn--lg">
      <Download size={16} /> {t.appPage.downloadBtn}
      {release.version ? ` ${release.version}` : ""}
    </a>
  );
}

function SecondaryCTA({ cta }: { cta: AppPageProps["cta"] }) {
  const { t } = useLanguage();
  if (cta.kind === "github") {
    return (
      <a
        href={`https://github.com/InfamousVague/${cta.repo}`}
        className="btn btn--ghost btn--lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalLink size={16} /> {t.appPage.viewGithub}
      </a>
    );
  }
  return (
    <a
      href={cta.url}
      className="btn btn--ghost btn--lg"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink size={16} /> {t.appPage.openInBrowser}
    </a>
  );
}

function SuiteCarousel({ excludeId }: { excludeId: string }) {
  const { t } = useLanguage();
  // Show every other app in the catalog as a "more from Matt's
  // Software" carousel. The carousel reads horizontally so visitors
  // browse sideways without crowding the page.
  const others = CATALOG.filter((a) => a.id !== excludeId).slice(0, 12);
  return (
    <section className="suite-carousel">
      <div className="suite-carousel__head">
        <span className="eyebrow">{t.appPage.suiteEyebrow}</span>
        <h2>{t.appPage.suiteHeading}</h2>
        <p>{t.appPage.suiteSub}</p>
      </div>
      <div className="suite-carousel__row">
        {others.map((a) => {
          const localizedTagline = catalogTaglineForId(a.id, t);
          const Card = (
            <div className="suite-carousel__card">
              <img src={a.icon} alt="" className="suite-carousel__icon" />
              <div className="suite-carousel__meta">
                <h3>{a.name}</h3>
                <p>{localizedTagline}</p>
              </div>
              <ArrowRight size={14} className="suite-carousel__arrow" />
            </div>
          );
          return a.viewExternal ? (
            <a
              key={a.id}
              href={a.view}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Card}
            </a>
          ) : (
            <Link key={a.id} to={a.view}>
              {Card}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export function AppPage(props: AppPageProps) {
  const { t, format } = useLanguage();
  const style = themeVars(props.themeId) as CSSProperties;
  return (
    <div className="app-page" style={style}>
      {/* Cream wash banner behind the hero — it's the same cream
          shelf material we use on the home hero, with the spotlight
          gradient burning through it from below. */}
      <section className="app-page__hero">
        <div className="app-page__hero-bg" aria-hidden />
        <div className="app-page__hero-inner">
          <div className="app-page__hero-text">
            <span className="eyebrow">{props.title}</span>
            <h1 className="app-page__title">{props.tagline}</h1>
            <p className="app-page__desc">{props.description}</p>
            <div className="app-page__actions">
              {props.platforms && props.platforms.length > 0 && props.cta.kind === "github" ? (
                <PlatformDownloads repo={props.cta.repo} platforms={props.platforms} />
              ) : (
                <PrimaryCTA cta={props.cta} />
              )}
              <SecondaryCTA cta={props.cta} />
            </div>
            {props.requirements ? (
              <span className="app-page__req">{props.requirements}</span>
            ) : null}
          </div>
          <div className="app-page__hero-art">
            <img src={props.heroImage} alt="" className="app-page__hero-img" />
          </div>
        </div>
      </section>

      <section className="section section--narrow">
        <h2 className="section__title">{props.featuresHeading}</h2>
        <div className="app-page__features">
          {props.features.map((f) => (
            <div key={f.title} className="app-page__feature">
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {props.children}

      <SuiteCarousel excludeId={props.themeId} />

      <section className="section app-page__bottom-cta">
        <img src={props.icon} alt="" className="app-page__bottom-icon" />
        {/* "Add X to your menu bar." only when the app actually lives
            in the menu bar; "Get X." everywhere else. */}
        <h2>
          {props.menuBarApp
            ? format(t.appPage.bottomAddToMenuBar, { name: props.title })
            : format(t.appPage.bottomGet, { name: props.title })}
        </h2>
        <div className="app-page__actions">
          {props.platforms && props.platforms.length > 0 && props.cta.kind === "github" ? (
            <PlatformDownloads repo={props.cta.repo} platforms={props.platforms} />
          ) : (
            <PrimaryCTA cta={props.cta} />
          )}
          <SecondaryCTA cta={props.cta} />
        </div>
        {props.requirements ? (
          <span className="app-page__req">{props.requirements}</span>
        ) : null}
      </section>
    </div>
  );
}
