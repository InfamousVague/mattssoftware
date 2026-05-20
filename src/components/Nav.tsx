import { Link } from "react-router-dom";
import TipPopover from "./TipPopover";

export function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Matt's Software
      </Link>
      <div className="nav__links">
        {/* Order matches the Home grid: Libre + Tap surface first
            as the most active externally-linked apps; the rest
            follow in their original order. */}
        <a
          href="https://libre.academy"
          target="_blank"
          rel="noopener noreferrer"
          className="nav__link nav__link--app"
        >
          <img src="/libre/libre_icon.png" alt="" className="nav__app-icon" />
          Libre
        </a>
        <Link to="/tap" className="nav__link nav__link--app">
          <span className="nav__app-icon nav__app-icon--emoji">⌚</span>
          Tap
        </Link>
        <Link to="/blip" className="nav__link nav__link--app">
          <img src="/blip/app-icon.png" alt="" className="nav__app-icon" />
          Blip
        </Link>
        <Link to="/vyv" className="nav__link nav__link--app">
          <img src="/vyv/app-icon.png" alt="" className="nav__app-icon" />
          Vyv
        </Link>
        <Link to="/port" className="nav__link nav__link--app">
          <img src="/port/app-icon.png" alt="" className="nav__app-icon" />
          Port
        </Link>
        <Link to="/sentry" className="nav__link nav__link--app">
          <img src="/sentry/app-icon.png" alt="" className="nav__app-icon" />
          Sentry
        </Link>
        <Link to="/peephole" className="nav__link nav__link--app">
          <img src="/peephole/app-icon.png" alt="" className="nav__app-icon" />
          Peephole
        </Link>
        <Link to="/stickykeys" className="nav__link nav__link--app">
          <img src="/stickykeys/app-icon.png" alt="" className="nav__app-icon" />
          StickyKeys
        </Link>
        <Link to="/quarantine" className="nav__link nav__link--app">
          <img src="/quarantine/app-icon.png" alt="" className="nav__app-icon" />
          Quarantine
        </Link>
        <Link to="/diane" className="nav__link nav__link--app">
          <img src="/diane/app-icon.png" alt="" className="nav__app-icon" />
          Diane
        </Link>
        <Link to="/base" className="nav__link nav__link--app">
          <img src="/base/app-icon.png" alt="" className="nav__app-icon" />
          Base
        </Link>
        <Link to="/stash" className="nav__link nav__link--app">
          <img src="/stash/app-icon.png" alt="" className="nav__app-icon" />
          Stash
        </Link>
        <a href="https://github.com/InfamousVague" className="nav__link" target="_blank" rel="noopener noreferrer">GitHub</a>
        {/* Tip jar — same component as the Libre desktop app's */}
        {/* TipDropdown, ported as a shared web file. Sits at the */}
        {/* end of the nav row so it's the last affordance the eye */}
        {/* lands on before the page content. */}
        <TipPopover />
      </div>
    </nav>
  );
}
