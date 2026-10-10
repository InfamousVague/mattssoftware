import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Button, EmptyState, FilterChip, Pill, SearchField, SegmentedControl } from "@glacier/react";
import { ArrowDown, ArrowRight, ArrowUpRight, SearchX } from "@glacier/icons";
import {
  CATALOG,
  FEATURED,
  FILTER_PLATFORMS,
  appMatchesPlatform,
  type CatalogApp,
  type Platform,
} from "../data/catalog";
import { taglineFor } from "../data/i18nCatalog";
import { themeVars } from "../data/themes";
import { useLanguage } from "../i18n/context";
import { useMedia } from "../lib/useMedia";
import { AppIcon } from "../components/AppIcon";
import { ButtonLink } from "../components/ButtonLink";
import { PlatformPills } from "../components/PlatformPills";
import { Reveal } from "../components/Reveal";

/// What stands on each featured card's stage, and how it sits there.
/// Every picture is the product's own: its banner, its hero art, its icon,
/// or a screenshot from its own site.
const FEATURED_ART: Record<string, { src: string; fit: "contain" | "cover" | "icon"; alt: string }> = {
  attackfm: {
    src: "/attackfm/hero.png",
    fit: "cover",
    alt: "The Attack wordmark over a pink audio waveform",
  },
  fishbones: { src: "/libre/hero.png", fit: "contain", alt: "" },
  prettycardboard: { src: "/prettycardboard/app-icon.png", fit: "icon", alt: "" },
  ghost: {
    src: "/ghost/desk.webp",
    fit: "cover",
    alt: "Ghost.md on a Mac: pinned notes, recent notes as cards, and today's journal",
  },
  espresso: { src: "/espresso/hero.png", fit: "contain", alt: "" },
};

/// Theme keys differ from catalogue ids for one app (Libre's id is the
/// product's old codename).
const themeKey = (id: string) => (id === "fishbones" ? "libre" : id);

function hostOf(url: string): string {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function FeaturedCard({ app, index }: { app: CatalogApp; index: number }) {
  const { site, format } = useLanguage();
  const art = FEATURED_ART[app.id];
  const sentence = (site.featured as Record<string, string | undefined>)[app.id] ?? app.tagline;
  return (
    <Reveal as="li" index={index}>
      <article className="fcard" style={themeVars(themeKey(app.id)) as CSSProperties}>
        {art ? (
          <div className={`stage${art.fit === "contain" ? "" : ` stage--${art.fit}`}`}>
            <img src={art.src} alt={art.alt} loading={index < 2 ? "eager" : "lazy"} decoding="async" />
          </div>
        ) : null}
        <div className="fcard__body">
          <div className="fcard__head">
            <AppIcon src={app.icon} size="3rem" />
            <h3 className="fcard__name">{app.name}</h3>
          </div>
          <p className="body">{sentence}</p>
          <PlatformPills app={app} />
          <div className="fcard__actions">
            {app.site ? (
              <ButtonLink href={app.site} size="sm" external>
                {format(site.home.visit, { site: hostOf(app.site) })} <ArrowUpRight size={14} aria-hidden />
              </ButtonLink>
            ) : null}
            <ButtonLink to={app.view} size="sm" variant={app.site ? "outline" : "solid"} aria-label={`${site.home.details}: ${app.name}`}>
              {site.home.details} <ArrowRight size={14} aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function CatalogueCard({ app }: { app: CatalogApp }) {
  const { t, site } = useLanguage();
  return (
    <li>
      <article className="acard">
        <div className="acard__head">
          <AppIcon src={app.icon} size="3rem" />
          <h3 className="acard__name">
            <Link to={app.view} className="acard__link">
              {app.name}
            </Link>
          </h3>
        </div>
        <p className="acard__tag">{taglineFor(app, t, site)}</p>
        <PlatformPills app={app} />
      </article>
    </li>
  );
}

type Filter = "all" | Platform;

export function Home() {
  const { t, site, format } = useLanguage();
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState<Filter>("all");
  // Six segments want about 34rem; below that the same choice is a row of
  // the kit's filter chips, which wraps.
  const wide = useMedia("(min-width: 760px)");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATALOG.filter((a) => {
      if (platform !== "all" && !appMatchesPlatform(a, platform)) return false;
      if (!q) return true;
      return (
        a.name.toLowerCase().includes(q) ||
        a.tagline.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        taglineFor(a, t, site).toLowerCase().includes(q) ||
        a.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [query, platform, t, site]);

  const options: { value: Filter; label: string }[] = [
    { value: "all", label: site.home.all },
    ...FILTER_PLATFORMS.map((p) => ({ value: p as Filter, label: p as string })),
  ];

  const reset = () => {
    setQuery("");
    setPlatform("all");
  };

  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <Pill tone="neutral" variant="outline">
              {site.home.eyebrow}
            </Pill>
            <h1 className="display">{site.home.title}</h1>
            <p className="lede">{format(site.home.lede, { count: CATALOG.length })}</p>
            <div className="hero__actions">
              <ButtonLink href="#featured" size="lg">
                {site.home.ctaFeatured} <ArrowDown size={16} aria-hidden />
              </ButtonLink>
              <ButtonLink href="#catalogue" size="lg" variant="outline">
                {format(site.home.ctaCatalogue, { count: CATALOG.length })}
              </ButtonLink>
            </div>
          </div>
          <ul className="mosaic" aria-label={site.nav.allApps}>
            {CATALOG.slice(0, 20).map((app) => (
              <li key={app.id}>
                <Link to={app.view} aria-label={app.name}>
                  <AppIcon src={app.icon} eager />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sec sec--tight" id="featured" aria-labelledby="featured-heading">
        <div className="wrap">
          <div className="sec__head">
            <h2 className="h2" id="featured-heading">
              {site.home.featuredHeading}
            </h2>
            <p className="body">{site.home.featuredSub}</p>
          </div>
          <ul className="featured">
            {FEATURED.map((app, i) => (
              <FeaturedCard key={app.id} app={app} index={i} />
            ))}
          </ul>
        </div>
      </section>

      <section className="sec" id="catalogue" aria-labelledby="catalogue-heading">
        <div className="wrap">
          <div className="sec__head">
            <h2 className="h2" id="catalogue-heading">
              {site.home.catalogueHeading}
            </h2>
            <p className="body">{site.home.catalogueSub}</p>
          </div>

          <div className="controls">
            <div className="controls__search">
              <SearchField
                value={query}
                onValueChange={setQuery}
                placeholder={site.home.searchPlaceholder}
                aria-label={site.home.searchPlaceholder}
              />
            </div>
            {wide ? (
              <SegmentedControl
                aria-label={site.home.filterAria}
                options={options}
                value={platform}
                onValueChange={(v) => setPlatform(v as Filter)}
              />
            ) : (
              <div className="controls__chips" role="group" aria-label={site.home.filterAria}>
                {options.map((o) => (
                  <FilterChip
                    key={o.value}
                    size="md"
                    selected={platform === o.value}
                    onSelectedChange={() => setPlatform(o.value)}
                  >
                    {o.label}
                  </FilterChip>
                ))}
              </div>
            )}
            <p className="controls__count" role="status">
              {format(site.home.count, { count: filtered.length })}
            </p>
          </div>

          {filtered.length === 0 ? (
            <EmptyState
              icon={<SearchX size={28} aria-hidden />}
              title={site.home.emptyTitle}
              description={site.home.emptyBody}
              action={
                <Button variant="soft" onClick={reset}>
                  {site.home.reset}
                </Button>
              }
            />
          ) : (
            <ul className="cards">
              {filtered.map((app) => (
                <CatalogueCard key={app.id} app={app} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}
