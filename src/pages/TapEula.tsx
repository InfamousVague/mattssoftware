import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import "./LegalPage.css";

export function TapEulaPage() {
  const { t } = useLanguage();
  const e = t.legal.eula;
  return (
    <div>
      <section className="legal-header">
        <h1 className="legal-header__title">{t.legal.eulaTitle}</h1>
        <p className="legal-header__tagline">{t.legal.tapTagline}</p>
        <p className="legal-header__date">{t.legal.effectiveDate}</p>
      </section>

      <section className="legal">
        <div className="legal__content">
          <p>{e.intro}</p>

          <h2>{e.licensedHeading}</h2>
          <p>{e.licensedBody}</p>

          <h2>{e.scopeHeading}</h2>
          <p>{e.scopeBody}</p>
          <p>{e.scopeIntro}</p>
          <ul>
            {e.scopeList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>{e.relayHeading}</h2>
          <p>{e.relayBody}</p>

          <h2>{e.ownershipHeading}</h2>
          <p>{e.ownershipBody}</p>

          <h2>{e.terminationHeading}</h2>
          <p>{e.terminationBody}</p>

          <h2>{e.warrantyHeading}</h2>
          <p>{e.warrantyBody}</p>

          <h2>{e.liabilityHeading}</h2>
          <p>{e.liabilityBody}</p>

          <h2>{e.governingHeading}</h2>
          <p>{e.governingBody}</p>

          <h2>{e.contactHeading}</h2>
          <p>
            {e.contactBody}{" "}
            <a href="mailto:matt@mattssoftware.com">matt@mattssoftware.com</a>.
          </p>

          <div className="legal__nav">
            <Link to="/tap/privacy">{t.legal.navPrivacy}</Link>
            <Link to="/tap/terms">{t.legal.navTerms}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
