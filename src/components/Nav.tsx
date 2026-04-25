import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Matt's Software
      </Link>
      <div className="nav__links">
        <Link to="/blip" className="nav__link nav__link--app">
          <img src="/blip/app-icon.png" alt="" className="nav__app-icon" />
          Blip
        </Link>
<Link to="/vyv" className="nav__link nav__link--app">
          <img src="/vyv/app-icon.png" alt="" className="nav__app-icon" />
          Vyv
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
        <Link to="/fishbones" className="nav__link nav__link--app">
          <img src="/fishbones/app-icon.png" alt="" className="nav__app-icon" />
          Fishbones
        </Link>
        <Link to="/tap" className="nav__link nav__link--app">
          <span className="nav__app-icon nav__app-icon--emoji">⌚</span>
          Tap
        </Link>
        <a href="https://github.com/InfamousVague" className="nav__link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </nav>
  );
}
