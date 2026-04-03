import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav className="nav">
      <Link to="/" className="nav__brand">
        Matt's Software
      </Link>
      <div className="nav__links">
        <Link to="/blip" className="nav__link">Blip</Link>
        <Link to="/vyv" className="nav__link">Vyv</Link>
        <a href="https://github.com/InfamousVague" className="nav__link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </nav>
  );
}
