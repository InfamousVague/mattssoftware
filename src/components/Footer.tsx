import { Link } from "react-router-dom";

/// Site-wide footer. The cat is the office mascot — a generated
/// playful-3D asset — and the copy reflects the actual workshop:
/// loud music, a lot of espresso, one person shipping. Used on
/// every marketing page (the launcher-replica home has its own
/// footer area baked into its layout).
export function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer__mascot"
        src="/_brand/cat-mascot.png"
        alt="A white cat curled around a blueprint and a mug of coffee — somehow asleep through the music"
      />
      <p className="footer__line">Built on espresso and loud music.</p>
      <p className="footer__sub">
        Matt's Software is a one-person shop. Every app is signed,
        notarized, and free.
      </p>
      <div className="footer__links">
        <a href="https://github.com/InfamousVague" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <Link to="/">All apps</Link>
        <a href="mailto:infamousvaguerat@gmail.com">Contact</a>
      </div>
    </footer>
  );
}
