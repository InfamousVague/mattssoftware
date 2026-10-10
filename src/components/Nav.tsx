import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Menu, MenuItem, Popover } from "@glacier/react";
import { Check, ChevronDown, Globe, Monitor, Moon, Sun } from "@glacier/icons";
import { CATALOG } from "../data/catalog";
import { taglineFor } from "../data/i18nCatalog";
import { useLanguage } from "../i18n/context";
import { LANGUAGE_CODES } from "../i18n/types";
import { useTheme, type ThemeChoice } from "../lib/theme";
import { AppIcon } from "./AppIcon";
import TipPopover from "./TipPopover";
import { DiscordMark, DISCORD_INVITE } from "./icons/DiscordMark";
import { GithubMark, GITHUB_PROFILE } from "./icons/GithubMark";

const THEME_ICON: Record<ThemeChoice, typeof Sun> = {
  system: Monitor,
  light: Sun,
  dark: Moon,
};

/// The site's top bar, on every page.
///
///   [ >|M MattsSoftware ]            [ Apps v ] [ globe ] [ theme ] [gh] [discord] [ tip ]
///
/// Apps is the kit's Popover holding real links to every app's page, so
/// each one can be opened in a new tab. Language and theme are the kit's
/// Menu. GitHub and Discord drop out below 720px (the footer has both).
export function Nav() {
  const { t, site, lang, setLang } = useLanguage();
  const { choice, setChoice } = useTheme();
  const [appsOpen, setAppsOpen] = useState(false);
  const ThemeIcon = THEME_ICON[choice];

  const themeItems: { value: ThemeChoice; label: string; icon: typeof Sun }[] = [
    { value: "system", label: site.nav.themeSystem, icon: Monitor },
    { value: "light", label: site.nav.themeLight, icon: Sun },
    { value: "dark", label: site.nav.themeDark, icon: Moon },
  ];

  return (
    <header className="nav">
      <nav className="wrap nav__inner" aria-label={site.nav.primary}>
        <Link to="/" className="nav__brand" onClick={() => setAppsOpen(false)}>
          <img src="/brandmark-dark.png" alt="" className="nav__mark only-light" width={36} height={36} />
          <img src="/brandmark.png" alt="" className="nav__mark only-dark" width={36} height={36} />
          <span className="nav__name">MattsSoftware</span>
        </Link>

        <div className="nav__tools">
          <Popover
            open={appsOpen}
            onOpenChange={setAppsOpen}
            placement="bottom-end"
            aria-label={site.nav.allApps}
            className="apps-popover"
            trigger={
              <Button variant="ghost" size="sm">
                {site.nav.apps} <ChevronDown size={14} aria-hidden />
              </Button>
            }
          >
            <div className="apps-panel">
              <ul className="apps-panel__grid">
                {CATALOG.map((app) => (
                  <li key={app.id}>
                    <Link to={app.view} className="apps-panel__item" onClick={() => setAppsOpen(false)}>
                      <AppIcon src={app.icon} size="2.25rem" />
                      <span className="apps-panel__meta">
                        <span className="apps-panel__name">{app.name}</span>
                        <span className="apps-panel__tag">{taglineFor(app, t, site)}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Popover>

          <Menu
            placement="bottom-end"
            aria-label={site.nav.language}
            trigger={
              <IconButton variant="ghost" size="sm" aria-label={site.nav.language}>
                <Globe size={16} aria-hidden />
              </IconButton>
            }
          >
            {LANGUAGE_CODES.map((code) => (
              <MenuItem
                key={code}
                lang={code}
                icon={code === lang ? <Check size={14} aria-hidden /> : <span style={{ width: 14 }} />}
                aria-current={code === lang ? "true" : undefined}
                onSelect={() => setLang(code)}
              >
                {t.languageNames[code]}
              </MenuItem>
            ))}
          </Menu>

          <Menu
            placement="bottom-end"
            aria-label={site.nav.theme}
            trigger={
              <IconButton variant="ghost" size="sm" aria-label={site.nav.theme}>
                <ThemeIcon size={16} aria-hidden />
              </IconButton>
            }
          >
            {themeItems.map((item) => (
              <MenuItem
                key={item.value}
                icon={<item.icon size={14} aria-hidden />}
                shortcut={item.value === choice ? <Check size={14} aria-hidden /> : undefined}
                aria-current={item.value === choice ? "true" : undefined}
                onSelect={() => setChoice(item.value)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>

          <a
            className="nav__icon-link nav__wide"
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.githubAria}
          >
            <GithubMark />
          </a>
          <a
            className="nav__icon-link nav__wide"
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.nav.discordAria}
          >
            <DiscordMark />
          </a>

          <TipPopover label={t.nav.tipLabel} />
        </div>
      </nav>
    </header>
  );
}
