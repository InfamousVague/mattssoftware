import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";
import "./LegalPage.css";

export function TapTermsPage() {
  const { t } = useLanguage();
  const ts = t.legal.terms;
  return (
    <div>
      <section className="legal-header">
        <h1 className="legal-header__title">{t.legal.termsTitle}</h1>
        <p className="legal-header__tagline">{t.legal.tapTagline}</p>
        <p className="legal-header__date">{t.legal.effectiveDate}</p>
      </section>

      <section className="legal">
        <div className="legal__content">
          <h2>{ts.acceptHeading}</h2>
          <p>{ts.acceptBody}</p>

          <h2>{ts.descriptionHeading}</h2>
          <p>{ts.descriptionBody}</p>

          <h2>{ts.accountsHeading}</h2>
          <p>{ts.accountsBody}</p>

          <h2>{ts.responsibilitiesHeading}</h2>

          <h3>{ts.serversHeading}</h3>
          <p>{ts.serversBody}</p>

          <h3>{ts.commandsHeading}</h3>
          <p>{ts.commandsBody}</p>

          <h3>{ts.relayHeading}</h3>
          <p>{ts.relayBody}</p>

          <h2>{ts.acceptableHeading}</h2>
          <p>{ts.acceptableIntro}</p>
          <ul>
            {ts.acceptableList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>{ts.ipHeading}</h2>
          <p>{ts.ipBody}</p>

          <h2>{ts.warrantyHeading}</h2>
          <p>{ts.warrantyBody}</p>

          <h2>{ts.liabilityHeading}</h2>
          <p>{ts.liabilityBody}</p>

          <h2>{ts.terminationHeading}</h2>
          <p>{ts.terminationBody}</p>

          <h2>{ts.governingHeading}</h2>
          <p>{ts.governingBody}</p>

          <h2>{ts.changesHeading}</h2>
          <p>{ts.changesBody}</p>

          <h2>{ts.contactHeading}</h2>
          <p>
            {ts.contactBody}{" "}
            <a href="mailto:matt@mattssoftware.com">matt@mattssoftware.com</a>.
          </p>

          <div className="legal__nav">
            <Link to="/tap/privacy">{t.legal.navPrivacy}</Link>
            <Link to="/tap/eula">{t.legal.navEula}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
