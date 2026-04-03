import { Link } from "react-router-dom";
import "./AppCard.css";

interface AppCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  path: string;
  tags: string[];
  downloadUrl?: string;
}

export function AppCard({ name, tagline, description, icon, path, tags, downloadUrl }: AppCardProps) {
  return (
    <div className="app-card card">
      <div className="app-card__header">
        <img src={icon} alt={name} className="app-card__icon" />
        <div>
          <h3 className="app-card__name">{name}</h3>
          <span className="app-card__tagline">{tagline}</span>
        </div>
      </div>
      <p className="app-card__desc">{description}</p>
      <div className="app-card__tags">
        {tags.map((t) => (
          <span key={t} className="app-card__tag">{t}</span>
        ))}
      </div>
      <div className="app-card__actions">
        <Link to={path} className="btn btn--primary">Learn More</Link>
        {downloadUrl && (
          <a href={downloadUrl} className="btn btn--ghost">Download</a>
        )}
      </div>
    </div>
  );
}
