import { useState, type ReactNode } from "react";
import { Pill } from "@glacier/react";
import { Check } from "@glacier/icons";
import { Reveal } from "./Reveal";

export interface FeatureSection {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  image?: string;
  imageAlt: string;
  imageMaxHeight?: string;
  renderVisual?: ReactNode;
  /// A row with neither `image` nor `renderVisual` is set as text alone.
  /// How the image stands on its stage. "illustration" and "screenshot"
  /// (the default) float it inside the stage; "phone" is a tall phone
  /// screenshot, shown at its own proportions.
  imageMode?: "screenshot" | "illustration" | "phone";
}

function Row({ feature, index }: { feature: FeatureSection; index: number }) {
  // A picture that fails to load is dropped, and the row is set as text.
  const [missing, setMissing] = useState(false);
  const hasVisual = Boolean(feature.renderVisual || (feature.image && !missing));
  const stageClass = feature.renderVisual
    ? "stage stage--free"
    : feature.imageMode === "phone"
      ? "stage stage--tall"
      : "stage";

  return (
    <Reveal className={`row${index % 2 === 1 ? " row--flip" : ""}${hasVisual ? "" : " row--solo"}`}>
      <div className="row__text">
        <Pill tone="neutral" variant="outline" size="sm">
          {feature.badge}
        </Pill>
        <h3 className="h2">{feature.title}</h3>
        <p className="body">{feature.description}</p>
        {feature.bullets.length > 0 ? (
          <ul className="row__bullets">
            {feature.bullets.map((bullet) => (
              <li key={bullet}>
                <Check size={14} aria-hidden />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      {hasVisual ? (
        <div className="row__visual">
          <div className={stageClass}>
            {feature.renderVisual ?? (
              <img
                src={feature.image}
                alt={feature.imageAlt}
                loading="lazy"
                decoding="async"
                style={feature.imageMaxHeight ? { maxHeight: feature.imageMaxHeight } : undefined}
                onError={() => setMissing(true)}
              />
            )}
          </div>
        </div>
      ) : null}
    </Reveal>
  );
}

export function FeatureShowcase({ features }: { features: FeatureSection[] }) {
  if (features.length === 0) return null;
  return (
    <section className="sec sec--ruled">
      <div className="rows">
        {features.map((feature, i) => (
          <Row key={feature.badge + feature.title} feature={feature} index={i} />
        ))}
      </div>
    </section>
  );
}
