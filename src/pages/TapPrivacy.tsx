import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import "./LegalPage.css";

export function TapPrivacyPage() {
  const { t } = useLanguage();
  const p = t.legal.privacy;
  return (
    <div>
      <section className="legal-header">
        <h1 className="legal-header__title">{t.legal.privacyTitle}</h1>
        <p className="legal-header__tagline">{t.legal.tapTagline}</p>
        <p className="legal-header__date">{t.legal.effectiveDate}</p>
      </section>

      <section className="legal">
        <div className="legal__content">
          <p>{p.intro}</p>

          <h2>{p.collectHeading}</h2>

          <h3>{p.accountHeading}</h3>
          <p>{p.accountBody}</p>

          <h3>{p.relayHeading}</h3>
          <p>{p.relayBody}</p>

          <h2>{p.useHeading}</h2>
          <p>{p.useBody}</p>

          <h2>{p.storageHeading}</h2>
          <p>{p.storageBody1}</p>
          <p>{p.storageBody2}</p>

          <h2>{p.thirdPartyHeading}</h2>
          <p>{p.thirdPartyBody}</p>

          <h2>{p.notDoHeading}</h2>
          <ul>
            {p.notDoList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>{p.retentionHeading}</h2>
          <p>{p.retentionBody}</p>

          <h2>{p.childrenHeading}</h2>
          <p>{p.childrenBody}</p>

          <h2>{p.changesHeading}</h2>
          <p>{p.changesBody}</p>

          <h2>{p.contactHeading}</h2>
          <p>
            {p.contactBody}{" "}
            <a href="mailto:matt@mattssoftware.com">matt@mattssoftware.com</a>.
          </p>

          <div className="legal__nav">
            <Link to="/tap/terms">{t.legal.navTerms}</Link>
            <Link to="/tap/eula">{t.legal.navEula}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
