/// Helpers that bridge the static CATALOG (English-only metadata like
/// `id`, `icon`, `githubRepo`) with the active locale's translation
/// object. The catalog stays a single source of truth for non-textual
/// fields (icon paths, repo names, routes); these helpers pull
/// translated copy (tagline, description) out of the active locale.

import { CATALOG, type CatalogApp } from "./catalog";
import type { Translation } from "../i18n/types";
import type { SiteCopy } from "../i18n/site";

/// Map a catalog id to the matching key in `t.apps`. The catalog uses
/// "fishbones" as the legacy id for the Libre app; the translation
/// object uses the same key. All other ids map 1:1.
type AppKey = keyof Translation["apps"];

function appKey(id: string): AppKey | undefined {
  // Cheap runtime safeguard — if a catalog id ever drifts from the
  // translation shape, this returns undefined and the caller can fall
  // back to the catalog's English copy instead of crashing.
  const known: AppKey[] = [
    "espresso",
    "stickykeys",
    "stats",
    "port",
    "alfred",
    "uninstaller",
    "blip",
    "diane",
    "peephole",
    "quarantine",
    "sentry",
    "fishbones",
    "tap",
    "base",
  ];
  return (known as string[]).includes(id) ? (id as AppKey) : undefined;
}

/// Get the localized tagline for a catalog row (the short, one-liner
/// shown on the home grid + nav popover). Falls back to the English
/// tagline baked into the catalog if the id isn't found.
export function catalogTaglineForId(id: string, t: Translation): string {
  const key = appKey(id);
  if (key) return t.apps[key].catalogTagline;
  return CATALOG.find((a) => a.id === id)?.tagline ?? "";
}

/// Get the localized long description for a catalog row.
export function catalogDescriptionForId(id: string, t: Translation): string {
  const key = appKey(id);
  if (key) return t.apps[key].catalogDescription;
  return CATALOG.find((a) => a.id === id)?.description ?? "";
}

/// Convenience: pulls the localized {tagline, description} pair for an
/// app from a CatalogApp + Translation. If the id doesn't match a
/// known app key (shouldn't happen, but defensive), falls back to the
/// English copy on the catalog row itself.
export function localizedCatalogRow(app: CatalogApp, t: Translation) {
  const key = appKey(app.id);
  if (!key) {
    return { tagline: app.tagline, description: app.description };
  }
  return {
    tagline: t.apps[key].catalogTagline,
    description: t.apps[key].catalogDescription,
  };
}

/// The one line shown beside an app's name, in the active language.
/// Apps with a block in the locale files use its catalogue tagline; the
/// featured apps without one (Attack.fm, PrettyCardboard, Ghost.md) use
/// their featured sentence, which site.ts carries in every language; the
/// rest fall back to the catalogue's English line.
export function taglineFor(app: CatalogApp, t: Translation, site: SiteCopy): string {
  const key = appKey(app.id);
  if (key) return t.apps[key].catalogTagline;
  const featured = site.featured as Record<string, string | undefined>;
  return featured[app.id] ?? app.tagline;
}
