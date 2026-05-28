import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Download } from "lucide-react";
import { CATALOG } from "../data/catalog";
import { catalogTaglineForId } from "../data/i18nCatalog";
import { useLanguage } from "../i18n/context";
import TipPopover from "./TipPopover";
import { LanguageSelector } from "./LanguageSelector";
import { DiscordMark, DISCORD_INVITE } from "./icons/DiscordMark";
import "./Nav.css";

/// Inline GitHub mark — lucide 1.x dropped brand glyphs and we don't
/// want to pull a second icon dep just for this one logo.
function GithubMark({ size = 16 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.21c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.15 1.17a10.95 10.95 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.78 1.07.78 2.16v3.21c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

const LAUNCHER_RELEASE =
  "https://github.com/InfamousVague/MattsSoftware-Launcher/releases/latest";

/// The top nav. Used to be a flat row of 13 explicit per-app Links;
/// the row overflowed at most viewport widths and pushed the Tip
/// popover off-screen. The new layout is:
///
///   [ M Matt's Software ]   [ Apps ▾ ]  [Lang ▾]  [↓ Launcher]  [GitHub]  [♥ Tip]
///
/// "Apps ▾" opens a panel that lists every app in the catalog, so
/// the topbar stays tight and the Tip is always visible. The panel
/// closes on outside-click or Escape.
export function Nav() {
  const { t, format } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onMouseDown(e: MouseEvent) {
      const target = e.target as Node | null;
      if (!target || wrapRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="nav">
      <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
        <img src="/brandmark.png" alt="" className="nav__brand-mark" />
        {t.nav.brand}
      </Link>

      <div className="nav__right">
        {/* Apps dropdown — collapses the 13-app marquee into a single
            affordance. The panel is a grid of every catalog entry. */}
        <div className="nav__apps" ref={wrapRef}>
          <button
            type="button"
            className={`nav__apps-trigger${open ? " nav__apps-trigger--open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-haspopup="menu"
          >
            {t.nav.apps} <ChevronDown size={14} className="nav__apps-chev" />
          </button>

          {open && (
            <div
              className="nav__apps-panel"
              role="menu"
              aria-label={t.nav.appsAllLabel}
            >
              <div className="nav__apps-grid">
                {CATALOG.map((app) => {
                  // The app's localized tagline. Brand names stay as-is.
                  const localizedTagline = catalogTaglineForId(app.id, t);
                  const inner = (
                    <>
                      <img src={app.icon} alt="" className="nav__apps-icon" />
                      <span className="nav__apps-meta">
                        <span className="nav__apps-name">{app.name}</span>
                        <span className="nav__apps-tagline">
                          {localizedTagline}
                        </span>
                      </span>
                    </>
                  );
                  return app.viewExternal ? (
                    <a
                      key={app.id}
                      href={app.view}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nav__apps-item"
                      onClick={() => setOpen(false)}
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link
                      key={app.id}
                      to={app.view}
                      className="nav__apps-item"
                      onClick={() => setOpen(false)}
                    >
                      {inner}
                    </Link>
                  );
                })}
              </div>
              <div className="nav__apps-footer">
                <span>
                  {format(t.nav.suiteFooter, { count: CATALOG.length })}
                </span>
                <a className="nav__apps-cta" href={LAUNCHER_RELEASE}>
                  {t.nav.getLauncher} <Download size={13} />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Language picker — globe-icon dropdown of all 7 supported
            languages. Sits between Apps and Launcher so it's discoverable
            without competing with the primary CTA. */}
        <LanguageSelector />

        {/* Primary CTA — visible everywhere so visitors always have
            an obvious next step. */}
        <a className="nav__cta" href={LAUNCHER_RELEASE}>
          <Download size={14} /> {t.nav.launcher}
        </a>

        <a
          className="nav__icon-link"
          href="https://github.com/InfamousVague"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.nav.githubAria}
        >
          <GithubMark />
        </a>

        {/* Discord — brand-coloured pill in Discord Blurple so the CTA
            actually reads in the dark nav (the icon-link treatment we
            had first was 4%-alpha and invisible). Collapses to an
            icon-only chip below the 720px breakpoint via CSS. */}
        <a
          className="nav__discord"
          href={DISCORD_INVITE}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.nav.discordAria}
        >
          <DiscordMark />
          <span className="nav__discord-label">Discord</span>
        </a>

        {/* Tip popover — now has room to render its trigger and panel. */}
        <TipPopover label={t.nav.tipLabel} />
      </div>
    </nav>
  );
}
