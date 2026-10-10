import { Link } from "react-router-dom";
import { Button, SegmentedControl, Select, useToast } from "@glacier/react";
import { Copy } from "@glacier/icons";
import { useLanguage } from "../i18n/context";
import { LANGUAGE_CODES, type LanguageCode } from "../i18n/types";
import { useTheme, type ThemeChoice } from "../lib/theme";
import { DISCORD_INVITE } from "./icons/DiscordMark";
import { GITHUB_PROFILE } from "./icons/GithubMark";

const EMAIL = "infamousvaguerat@gmail.com";
const LAUNCHER_RELEASE =
  "https://github.com/InfamousVague/MattsSoftware-Launcher/releases/latest";

/// Site-wide footer: the office cat, who the studio is, the theme and the
/// language (the kit's SegmentedControl and Select), and the plain links.
export function Footer() {
  const { t, site, lang, setLang } = useLanguage();
  const { choice, setChoice } = useTheme();
  const { toast } = useToast();

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast({ tone: "success", message: site.footer.emailCopied });
    } catch {
      // No clipboard (an insecure context, a denied permission): the
      // mail link beside this button still works.
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__inner">
          <div className="footer__about">
            <img
              className="footer__mascot"
              src="/_brand/cat-mascot.png"
              alt={t.footer.mascotAlt}
              loading="lazy"
              width={88}
              height={88}
            />
            <div>
              <p className="footer__line">{t.footer.line}</p>
              <p className="small">{site.footer.sub}</p>
            </div>
          </div>
          <div className="footer__tools">
            <SegmentedControl
              size="sm"
              aria-label={site.nav.theme}
              value={choice}
              onValueChange={(v) => setChoice(v as ThemeChoice)}
              options={[
                { value: "system", label: site.nav.themeSystem },
                { value: "light", label: site.nav.themeLight },
                { value: "dark", label: site.nav.themeDark },
              ]}
            />
            <Select
              size="sm"
              aria-label={site.nav.language}
              value={lang}
              onValueChange={(v) => setLang(v as LanguageCode)}
              options={LANGUAGE_CODES.map((code) => ({
                value: code,
                label: t.languageNames[code],
              }))}
            />
          </div>
        </div>
        <div className="footer__links">
          <Link to="/">{t.footer.allApps}</Link>
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
            {t.footer.github}
          </a>
          <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
            {site.footer.discord}
          </a>
          <a href={LAUNCHER_RELEASE} target="_blank" rel="noopener noreferrer">
            {site.footer.launcher}
          </a>
          <a href={`mailto:${EMAIL}`}>{t.footer.contact}</a>
          <Button variant="ghost" size="sm" onClick={copyEmail}>
            <Copy size={14} aria-hidden /> {site.footer.copyEmail}
          </Button>
          <span className="small footer__copy">© MattsSoftware</span>
        </div>
      </div>
    </footer>
  );
}
