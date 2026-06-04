import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Download, ArrowDown } from "lucide-react";
import { CATALOG, CATEGORIES, type CatalogApp } from "../data/catalog";
import { themeVars } from "../data/themes";
import { useLanguage } from "../i18n/context";
import { LanguageSelector } from "../components/LanguageSelector";
import { HoverAnimGrid } from "../components/HoverAnimGrid";
import { DiscordMark, DISCORD_INVITE } from "../components/icons/DiscordMark";
import {
  catalogTaglineForId,
  catalogDescriptionForId,
  localizedCategory,
  localizedPlatforms,
} from "../data/i18nCatalog";
import type { Translation } from "../i18n/types";
import "../launcher.css";

const LAUNCHER_RELEASE =
  "https://github.com/InfamousVague/MattsSoftware-Launcher/releases/latest";

interface ReleaseInfo {
  url: string;
  version: string;
}

/// Latest release .dmg for an InfamousVague repo (same lookup the
/// launcher's backend does), with a graceful fallback to the releases
/// page if the API is unavailable / rate-limited. Walks recent releases
/// newest-first so an assetless tag can't break the Download button.
async function getLatestRelease(repo: string): Promise<ReleaseInfo> {
  const fallback = {
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

/// `/blip/app-icon.png` → `/blip/hero.png`. All catalog apps ship a
/// matching `hero.png` next to their icon (audit-verified).
function heroFor(app: CatalogApp): string {
  const dir = app.icon.replace(/\/[^/]+$/, "");
  return `${dir}/hero.png`;
}

/// Tiny eyebrow label. Channel takes priority (App Store / Library),
/// otherwise the localized platform list (`["macOS"]` by default;
/// cross-platform apps surface every platform they ship on).
function platformLabel(app: CatalogApp, t: Translation): string {
  if (app.channel === "appstore") return t.channels.appstore;
  if (app.channel === "library") return t.channels.library;
  return localizedPlatforms(app.platforms, t);
}

/// Per-app feature section: alternating big-hero row that mirrors the
/// marketing page's spotlight + theme. Primary CTA goes to the app's
/// marketing route ("View →"); secondary is the channel-aware download.
function AppSection({
  app,
  release,
  flipped,
}: {
  app: CatalogApp;
  release?: ReleaseInfo;
  flipped: boolean;
}) {
  const { t } = useLanguage();
  const style = themeVars(app.id) as CSSProperties;
  const downloadHref =
    app.channel === "github"
      ? release?.url ??
        `https://github.com/InfamousVague/${app.githubRepo}/releases/latest`
      : app.url ?? "#";
  const downloadLabel =
    app.channel === "appstore"
      ? t.channels.appstore
      : app.channel === "library"
        ? t.channels.source
        : `${t.channels.download}${release?.version ? ` ${release.version}` : ""}`;
  // `Link` for internal routes so the SPA doesn't full-reload; <a> for
  // external View targets (Libre → libre.academy, Alfred → GitHub).
  const ViewCTA = app.viewExternal ? (
    <a
      className="ms-btn ms-btn--primary"
      href={app.view}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t.home.view} <span aria-hidden="true">→</span>
    </a>
  ) : (
    <Link className="ms-btn ms-btn--primary" to={app.view}>
      {t.home.view} <span aria-hidden="true">→</span>
    </Link>
  );

  const localizedTagline = catalogTaglineForId(app.id, t) || app.tagline;
  const localizedDescription =
    catalogDescriptionForId(app.id, t) || app.description;

  return (
    <article
      className={"ms-section" + (flipped ? " ms-section--flipped" : "")}
      style={style}
    >
      <div className="ms-section__hero">
        <img src={heroFor(app)} alt="" draggable={false} loading="lazy" decoding="async" />
      </div>
      <div className="ms-section__text">
        <span className="ms-section__eyebrow">{platformLabel(app, t)}</span>
        <h2 className="ms-section__name">{app.name}</h2>
        <p className="ms-section__tagline">{localizedTagline}</p>
        <p className="ms-section__desc">{localizedDescription}</p>
        <div className="ms-section__actions">
          {ViewCTA}
          <a
            className="ms-btn ms-btn--ghost"
            href={downloadHref}
            {...(app.channel !== "github"
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {downloadLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

export function Home() {
  const { t, format } = useLanguage();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [releases, setReleases] = useState<Record<string, ReleaseInfo>>({});

  useEffect(() => {
    let alive = true;
    Promise.all(
      CATALOG.filter((a) => a.channel === "github" && a.githubRepo).map(
        async (a) => [a.id, await getLatestRelease(a.githubRepo!)] as const,
      ),
    ).then((pairs) => {
      if (alive) setReleases(Object.fromEntries(pairs));
    });
    return () => {
      alive = false;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATALOG.filter((a) => {
      if (category !== "All" && a.category !== category) return false;
      if (!q) return true;
      const localizedTagline = catalogTaglineForId(a.id, t).toLowerCase();
      const localizedDesc = catalogDescriptionForId(a.id, t).toLowerCase();
      return (
        a.name.toLowerCase().includes(q) ||
        a.tagline.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        localizedTagline.includes(q) ||
        localizedDesc.includes(q) ||
        a.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [query, category, t]);

  return (
    <div className="ms-app">
      {/* Cream hero card on the dark page: the desk illustration plus
          the launcher pitch + Browse-the-suite anchor jump. */}
      <section className="ms-bighero">
        {/* Used to be the desk-illustration shelf image; now
            the live 3×3 hover-icon grid lives in this column
            instead so the homepage opens on motion. Wrapper
            sits in the SAME grid slot as the old `.ms-bighero__
            art` <img>, but uses its own class so the image's
            drop-shadow filter doesn't bleed onto the icons. */}
        <div className="ms-bighero__icons">
          <HoverAnimGrid />
        </div>
        <div className="ms-bighero__text">
          <span className="ms-bighero__eyebrow">{t.home.eyebrow}</span>
          <h1 className="ms-bighero__title">{t.home.title}</h1>
          <p className="ms-bighero__sub">
            {format(t.home.sub, { count: CATALOG.length })}
          </p>
          <div className="ms-bighero__actions">
            <a
              className="ms-bighero__btn ms-bighero__btn--primary"
              href={LAUNCHER_RELEASE}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} /> {t.home.downloadLauncher}
            </a>
            <a className="ms-bighero__btn ms-bighero__btn--ghost" href="#suite">
              {t.home.browseSuite} <ArrowDown size={18} />
            </a>
          </div>
          <p className="ms-bighero__meta">{t.home.metaLine}</p>
        </div>
      </section>

      <header className="ms-titlebar">
        <div className="ms-brand">
          <img
            className="ms-brand__mark"
            src="/brandmark.png"
            alt="MattsSoftware"
          />
          <div className="ms-brand__text">
            <span className="ms-brand__name">{t.home.brandName}</span>
            <span className="ms-brand__sub">{t.home.brandSub}</span>
          </div>
        </div>
        <div className="ms-titlebar__tools">
          {/* Language picker — the home page is its own self-contained
              surface (no global Nav), so the selector lives here. */}
          <LanguageSelector />
          <input
            className="ms-search-input"
            type="search"
            placeholder={t.home.searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label={t.home.searchAria}
          />
          {/* Discord CTA — the global Nav is hidden on this surface
              (`shouldHideChrome` in App.tsx), so the marketing Nav's
              Blurple pill never reaches the home page. Mirroring it
              here gives the launcher-replica its own community CTA
              without breaking the titlebar layout. */}
          <a
            className="ms-discord"
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.discordAria}
          >
            <DiscordMark />
            <span className="ms-discord__label">Discord</span>
          </a>
        </div>
      </header>

      <nav className="ms-filters" aria-label={t.home.categoriesAria}>
        {["All", ...CATEGORIES].map((c) => {
          const label =
            c === "All" ? t.categories.all : localizedCategory(c, t);
          return (
            <button
              key={c}
              type="button"
              className={
                "ms-filter" + (category === c ? " ms-filter--active" : "")
              }
              onClick={() => setCategory(c)}
            >
              {label}
            </button>
          );
        })}
      </nav>

      <main className="ms-main">
        {filtered.length === 0 ? (
          <div className="ms-empty">
            <p>{format(t.home.noResults, { query })}</p>
          </div>
        ) : (
          <div id="suite" className="ms-sections">
            {filtered.map((app, i) => (
              <AppSection
                key={app.id}
                app={app}
                release={releases[app.id]}
                flipped={i % 2 === 1}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
