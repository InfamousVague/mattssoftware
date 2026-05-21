/// Helpers that bridge the static CATALOG (English-only metadata like
/// `id`, `icon`, `githubRepo`) with the active locale's translation
/// object. The catalog stays a single source of truth for non-textual
/// fields (icon paths, repo names, routes); these helpers pull
/// translated copy (tagline, description) out of the active locale.

import type { CatalogApp } from "./catalog";
import type { Translation } from "../i18n/types";

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
  return key ? t.apps[key].catalogTagline : "";
}

/// Get the localized long description for a catalog row.
export function catalogDescriptionForId(id: string, t: Translation): string {
  const key = appKey(id);
  return key ? t.apps[key].catalogDescription : "";
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

/// Localized category label. The catalog's `category` field is an
/// English literal ("Developer Tools", "Privacy & Security", etc.);
/// this maps it to the active locale's `categories.*` string.
export function localizedCategory(
  englishCategory: string,
  t: Translation,
): string {
  switch (englishCategory) {
    case "Developer Tools":
      return t.categories.developerTools;
    case "Privacy & Security":
      return t.categories.privacySecurity;
    case "Utilities":
      return t.categories.utilities;
    case "Learning":
      return t.categories.learning;
    case "Design":
      return t.categories.design;
    default:
      return englishCategory;
  }
}

/// Localized platform label list for the catalog row's `platforms`
/// array (defaults to ["macOS"] when omitted). Joins with " · ".
export function localizedPlatforms(
  platforms: string[] | undefined,
  t: Translation,
): string {
  const list = platforms ?? ["macOS"];
  return list
    .map((p) => {
      switch (p) {
        case "macOS":
          return t.platforms.macos;
        case "Windows":
          return t.platforms.windows;
        case "Linux":
          return t.platforms.linux;
        case "watchOS":
          return t.platforms.watchos;
        case "iOS":
          return t.platforms.ios;
        case "iPadOS":
          return t.platforms.ipados;
        default:
          return p;
      }
    })
    .join(" · ");
}
