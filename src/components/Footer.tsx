import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";

/// Site-wide footer. The cat is the office mascot — a generated
/// playful-3D asset — and the copy reflects the actual workshop:
/// loud music, a lot of espresso, one person shipping. Used on
/// every marketing page (the launcher-replica home has its own
/// footer area baked into its layout).
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <img
        className="footer__mascot"
        src="/_brand/cat-mascot.png"
        alt={t.footer.mascotAlt}
      />
      <p className="footer__line">{t.footer.line}</p>
      <p className="footer__sub">{t.footer.sub}</p>
      <div className="footer__links">
        <a
          href="https://github.com/InfamousVague"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.footer.github}
        </a>
        <Link to="/">{t.footer.allApps}</Link>
        <a href="mailto:infamousvaguerat@gmail.com">{t.footer.contact}</a>
      </div>
    </footer>
  );
}
