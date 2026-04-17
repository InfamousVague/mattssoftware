import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import "./AppCard.css";

interface AppCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  iconEmoji?: string;
  path: string;
  tags: string[];
  downloadUrl?: string;
  appStoreUrl?: string;
  version?: string;
}

export function AppCard({ name, tagline, description, icon, iconEmoji, path, tags, downloadUrl, appStoreUrl, version }: AppCardProps) {
  return (
    <div className="app-card card">
      <div className="app-card__header">
        {iconEmoji ? (
          <span className="app-card__icon app-card__icon--emoji">{iconEmoji}</span>
        ) : (
          <img src={icon} alt={name} className="app-card__icon" />
        )}
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
        <Link to={path} className="btn btn--primary"><ArrowRight size={16} /> Learn More</Link>
        {appStoreUrl && (
          <a href={appStoreUrl} className="btn btn--appstore" target="_blank" rel="noopener"> App Store</a>
        )}
        {downloadUrl && (
          <a href={downloadUrl} className="btn btn--ghost"><Download size={16} /> Download{version ? ` ${version}` : ""}</a>
        )}
      </div>
    </div>
  );
}
