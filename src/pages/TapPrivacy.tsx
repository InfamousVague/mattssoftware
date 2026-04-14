import { Link } from "react-router-dom";
import "./AppPage.css";
import "./LegalPage.css";

export function TapPrivacyPage() {
  return (
    <div className="app-page">
      <section className="app-page__hero" style={{ minHeight: "40vh", paddingBottom: 0 }}>
        <h1 className="app-page__title" style={{ fontSize: 48 }}>Privacy Policy</h1>
        <p className="app-page__tagline">Tap — SSH Command Relay</p>
        <p className="app-page__desc">Effective date: April 14, 2026</p>
      </section>

      <section className="legal">
        <div className="legal__content">
          <p>
            Matt's Software ("we", "us", "our") operates Tap, an SSH command relay
            application for Apple Watch, iPhone, and Mac. This Privacy Policy explains
            what information we collect, how we use it, and your rights regarding
            your data. Matt's Software is based in the United States.
          </p>

          <h2>Information We Collect</h2>

          <h3>Account Information</h3>
          <p>
            When you sign in with Apple Sign-In, we receive your Apple ID email
            address (or the private relay address Apple provides on your behalf).
            This is the only personally identifiable information we collect and it
            is used solely to authenticate you with your relay server.
          </p>

          <h3>Self-Hosted Relay Data</h3>
          <p>
            Tap stores connection metadata, encrypted SSH keys, command history, and
            execution results on the relay server that you host and operate yourself.
            We do not have access to this data. Because you control the relay, you
            control your data.
          </p>

          <h2>How We Use Information</h2>
          <p>
            Your Apple ID email address is used exclusively to authenticate your
            account. We do not use it for marketing, newsletters, or any other
            purpose. We do not combine it with data from other sources.
          </p>

          <h2>Data Storage and Security</h2>
          <p>
            SSH keys stored on your relay are encrypted at rest using AES-256-GCM.
            All relay data — connection metadata, command logs, and keys — resides
            entirely on your own infrastructure. Matt's Software does not operate
            central servers that store your data.
          </p>
          <p>
            Because the relay is self-hosted, the security of your data ultimately
            depends on how you configure and maintain your server. We recommend
            keeping your relay software up to date and following standard server
            hardening practices.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Tap uses Apple Sign-In for authentication. Apple's privacy policy governs
            the data Apple collects during the sign-in process. Beyond Apple Sign-In,
            Tap does not integrate with any third-party analytics, advertising, or
            tracking services.
          </p>

          <h2>What We Do Not Do</h2>
          <ul>
            <li>We do not run analytics or tracking of any kind</li>
            <li>We do not share data with third parties</li>
            <li>We do not serve ads</li>
            <li>We do not collect usage telemetry</li>
            <li>We do not have access to your relay server or its data</li>
            <li>We do not sell or rent your personal information</li>
          </ul>

          <h2>Data Retention and Deletion</h2>
          <p>
            You can delete your account and all associated data from within the Tap
            app at any time. Since data is stored on your relay, you also have direct
            access to remove it from your server whenever you choose.
          </p>

          <h2>Children's Privacy</h2>
          <p>
            Tap is not directed at children under 13. We do not knowingly collect
            personal information from children under 13. If you believe a child has
            provided us with personal information, please contact us and we will
            take steps to delete it.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will
            post the revised policy on this page with a new effective date. Your
            continued use of Tap after changes are posted constitutes acceptance of
            the updated policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions or concerns about this Privacy Policy, please
            contact us at{" "}
            <a href="mailto:matt@mattssoftware.com">matt@mattssoftware.com</a>.
          </p>

          <div className="legal__nav">
            <Link to="/tap/terms">Terms of Service</Link>
            <Link to="/tap/eula">EULA</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
