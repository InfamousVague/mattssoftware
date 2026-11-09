import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, IconButton, Menu, MenuItem, Popover } from "@glacier/react";
import { Check, ChevronDown, Monitor, Moon, Sun } from "@glacier/icons";
import { CATALOG } from "../data/catalog";
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

const THEME_LABEL: Record<ThemeChoice, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

/// The site's top bar, on every page.
///
///   [ >|M MattsSoftware ]            [ Apps v ] [ theme ] [gh] [discord] [ tip ]
///
/// Apps is the kit's Popover holding real links to each highlighted
/// product's page. GitHub and Discord drop out below 720px (the footer
/// has both).
export function Nav() {
  const { choice, setChoice } = useTheme();
  const [appsOpen, setAppsOpen] = useState(false);
  const ThemeIcon = THEME_ICON[choice];

  // Apps menu lists the highlighted set only — the retired products
  // were loud dropdowns for pages that redirect to home now, which
  // was a dead end.
  const highlighted = CATALOG.filter((app) => app.featured);

  return (
    <header className="nav">
      <nav className="wrap nav__inner" aria-label="Primary">
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
            aria-label="All apps"
            className="apps-popover"
            trigger={
              <Button variant="ghost" size="sm">
                Apps <ChevronDown size={14} aria-hidden />
              </Button>
            }
          >
            <div className="apps-panel">
              <ul className="apps-panel__grid">
                {highlighted.map((app) => (
                  <li key={app.id}>
                    <Link to={app.view} className="apps-panel__item" onClick={() => setAppsOpen(false)}>
                      <AppIcon src={app.icon} size="2.25rem" />
                      <span className="apps-panel__meta">
                        <span className="apps-panel__name">{app.name}</span>
                        <span className="apps-panel__tag">{app.tagline}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Popover>

          <Menu
            placement="bottom-end"
            aria-label="Theme"
            trigger={
              <IconButton variant="ghost" size="sm" aria-label="Theme">
                <ThemeIcon size={16} aria-hidden />
              </IconButton>
            }
          >
            {(["system", "light", "dark"] as ThemeChoice[]).map((value) => {
              const Icon = THEME_ICON[value];
              return (
                <MenuItem
                  key={value}
                  icon={<Icon size={14} aria-hidden />}
                  shortcut={value === choice ? <Check size={14} aria-hidden /> : undefined}
                  aria-current={value === choice ? "true" : undefined}
                  onSelect={() => setChoice(value)}
                >
                  {THEME_LABEL[value]}
                </MenuItem>
              );
            })}
          </Menu>

          <a
            className="nav__icon-link nav__wide"
            href={GITHUB_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubMark />
          </a>
          <a
            className="nav__icon-link nav__wide"
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <DiscordMark />
          </a>

          <TipPopover label="Tip" />
        </div>
      </nav>
    </header>
  );
}
