import { Link } from "react-router-dom";
import "./AppPage.css";
import "./LegalPage.css";

export function TapEulaPage() {
  return (
    <div className="app-page">
      <section className="app-page__hero" style={{ minHeight: "40vh", paddingBottom: 0 }}>
        <h1 className="app-page__title" style={{ fontSize: 48 }}>End User License Agreement</h1>
        <p className="app-page__tagline">Tap — SSH Command Relay</p>
        <p className="app-page__desc">Effective date: April 14, 2026</p>
      </section>

      <section className="legal">
        <div className="legal__content">
          <p>
            This End User License Agreement ("Agreement") is a legal agreement
            between you and Matt's Software ("we", "us", "our"), based in the
            United States, for the use of Tap ("the App"). By installing or using
            the App, you agree to be bound by this Agreement.
          </p>

          <h2>Licensed Application</h2>
          <p>
            Tap is an SSH command relay application for Apple Watch, iPhone, and Mac,
            developed and published by Matt's Software. The App allows you to execute
            commands on remote servers through a relay server that you host yourself.
          </p>

          <h2>Scope of License</h2>
          <p>
            Matt's Software grants you a limited, non-exclusive, non-transferable,
            revocable license to download, install, and use the App on devices that
            you own or control, in accordance with this Agreement and the Apple
            Media Services Terms and Conditions.
          </p>
          <p>This license does not allow you to:</p>
          <ul>
            <li>Distribute, sublicense, lease, rent, or lend the App to third parties</li>
            <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of the App</li>
            <li>Modify, adapt, translate, or create derivative works based on the App</li>
            <li>Remove, alter, or obscure any copyright, trademark, or other proprietary notices in the App</li>
            <li>Use the App for any purpose that is illegal or prohibited by this Agreement</li>
          </ul>

          <h2>Self-Hosted Relay</h2>
          <p>
            Tap connects to a relay server that you host and operate on your own
            infrastructure. Matt's Software does not provide, manage, or maintain
            your relay server. We are not responsible for any issues arising from
            the configuration, operation, security, or availability of your relay
            server or any remote servers you connect to through the App.
          </p>

          <h2>Ownership</h2>
          <p>
            The App and all related intellectual property rights are and shall remain
            the property of Matt's Software. This Agreement does not grant you any
            ownership interest in the App. Your data, configurations, and content
            stored on your relay server remain yours.
          </p>

          <h2>Termination</h2>
          <p>
            This license is effective until terminated. Your rights under this
            Agreement will terminate automatically without notice if you fail to
            comply with any of its terms. Upon termination, you must stop using the
            App and delete all copies from your devices. Matt's Software may also
            terminate this license at any time for any reason.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            The App is provided "as is" and "as available" without warranty of any
            kind, express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, and non-infringement.
            Matt's Software does not warrant that the App will be uninterrupted,
            error-free, or free of harmful components.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Matt's Software shall
            not be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of data, profits, or revenue, arising from
            or related to your use of the App, regardless of the theory of liability.
          </p>

          <h2>Governing Law</h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the
            laws of the United States, without regard to conflict of law principles.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about this Agreement, please contact us at{" "}
            <a href="mailto:matt@mattssoftware.com">matt@mattssoftware.com</a>.
          </p>

          <div className="legal__nav">
            <Link to="/tap/privacy">Privacy Policy</Link>
            <Link to="/tap/terms">Terms of Service</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
