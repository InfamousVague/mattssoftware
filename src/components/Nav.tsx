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
        <a href="https://github.com/InfamousVague" className="nav__link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </nav>
  );
}
