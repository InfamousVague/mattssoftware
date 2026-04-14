import { Link } from "react-router-dom";
import "./AppPage.css";
import "./LegalPage.css";

export function TapTermsPage() {
  return (
    <div className="app-page">
      <section className="app-page__hero" style={{ minHeight: "40vh", paddingBottom: 0 }}>
        <h1 className="app-page__title" style={{ fontSize: 48 }}>Terms of Service</h1>
        <p className="app-page__tagline">Tap — SSH Command Relay</p>
        <p className="app-page__desc">Effective date: April 14, 2026</p>
      </section>

      <section className="legal">
        <div className="legal__content">
          <h2>Acceptance of Terms</h2>
          <p>
            By downloading, installing, or using Tap ("the App"), you agree to be
            bound by these Terms of Service ("Terms"). If you do not agree to these
            Terms, do not use the App. These Terms constitute a legal agreement
            between you and Matt's Software ("we", "us", "our"), based in the
            United States.
          </p>

          <h2>Description of Service</h2>
          <p>
            Tap is an SSH command relay application for Apple Watch, iPhone, and Mac.
            It allows you to execute commands on remote servers through a relay
            server that you host and operate yourself. Matt's Software provides the
            client application and relay software. We do not operate, manage, or
            have access to your relay server or the servers you connect to.
          </p>

          <h2>User Accounts</h2>
          <p>
            Tap uses Apple Sign-In for authentication. Each person may maintain one
            account. You are responsible for maintaining the security of your account
            and for all activity that occurs under it. You must not share your
            account credentials or allow others to access your account.
          </p>

          <h2>User Responsibilities</h2>

          <h3>Your Servers</h3>
          <p>
            You are responsible for the servers you connect to through Tap. This
            includes ensuring you have proper authorization to access those servers
            and that your use complies with all applicable policies and laws.
          </p>

          <h3>Your Commands</h3>
          <p>
            Tap is a tool that executes the commands you provide. You accept full
            responsibility for every command you run through Tap and its
            consequences. Matt's Software is not liable for the outcome of commands
            executed via the App.
          </p>

          <h3>Your Relay</h3>
          <p>
            The Tap relay server is self-hosted on your infrastructure. You are
            responsible for securing your relay, keeping it updated, and managing
            access to it. Matt's Software does not operate, monitor, or maintain
            your relay.
          </p>

          <h2>Acceptable Use</h2>
          <p>You agree not to use Tap to:</p>
          <ul>
            <li>Gain unauthorized access to any system, network, or data</li>
            <li>Violate any applicable local, state, national, or international law</li>
            <li>Transmit malware, viruses, or other harmful code</li>
            <li>Interfere with or disrupt the integrity or performance of any system</li>
            <li>Harass, abuse, or harm another person or entity</li>
            <li>Engage in any activity that is fraudulent, deceptive, or misleading</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            The Tap application, including its design, code, and documentation, is
            owned by Matt's Software and is protected by applicable intellectual
            property laws. Your use of Tap does not grant you ownership of any
            intellectual property in the App. Your data, configurations, and content
            stored on your relay server remain yours.
          </p>

          <h2>Disclaimer of Warranties</h2>
          <p>
            Tap is provided "as is" and "as available" without warranty of any kind,
            express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, and non-infringement.
            Matt's Software does not guarantee that the App will be uninterrupted,
            error-free, secure, or available at any particular time.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, Matt's Software shall
            not be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of data, profits, revenue, or business
            opportunities, arising from or related to your use of Tap, regardless of
            the theory of liability.
          </p>

          <h2>Termination</h2>
          <p>
            You may delete your account and stop using Tap at any time. Matt's
            Software reserves the right to suspend or terminate your access to the
            App at any time, with or without notice, for conduct that we believe
            violates these Terms or is otherwise harmful to other users or to us.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the
            laws of the United States, without regard to conflict of law principles.
            Any disputes arising from these Terms or your use of Tap shall be
            resolved in the courts of the United States.
          </p>

          <h2>Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. When we do, we will post
            the revised Terms on this page with a new effective date. Your continued
            use of Tap after changes are posted constitutes acceptance of the updated
            Terms.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at{" "}
            <a href="mailto:matt@mattssoftware.com">matt@mattssoftware.com</a>.
          </p>

          <div className="legal__nav">
            <Link to="/tap/privacy">Privacy Policy</Link>
            <Link to="/tap/eula">EULA</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
