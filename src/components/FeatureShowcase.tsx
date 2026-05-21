import type { ReactNode } from "react";
import { useLanguage } from "../i18n/context";
import "./FeatureShowcase.css";

export interface FeatureSection {
  badge: string;
  title: string;
  description: string;
  bullets: string[];
  image?: string;
  imageAlt: string;
  imageMaxHeight?: string;
  renderVisual?: ReactNode;
  /// "screenshot" (default) wraps the image in the playful window-chrome
  /// frame (`/_brand/window-frame.png`) — right when the image is a flat
  /// app screenshot.
  ///
  /// "illustration" drops the chrome and renders the image naked on the
  /// cream pad — right for the cute-3D transparent PNGs whose subject is
  /// the whole composition.
  imageMode?: "screenshot" | "illustration";
}

function FeatureHero({ feature, index }: { feature: FeatureSection; index: number }) {
  const { t } = useLanguage();
  const isReversed = index % 2 === 1;
  const placeholder = t.featureShowcase.screenshotComingSoon;

  return (
    <div className={`feature-hero ${isReversed ? "feature-hero--reverse" : ""}`}>
      <div className="feature-hero__text">
        <span className="feature-hero__badge">{feature.badge}</span>
        <h2 className="feature-hero__title">{feature.title}</h2>
        <p className="feature-hero__desc">{feature.description}</p>
        <div className="feature-hero__bullets">
          {feature.bullets.map((bullet, i) => (
            <div key={i} className="feature-hero__bullet">
              <span className="feature-hero__bullet-dot" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="feature-hero__visual">
        <div className="feature-hero__glow" />
        {feature.renderVisual ? (
          feature.renderVisual
        ) : feature.image ? (
          feature.imageMode === "illustration" ? (
            <div className="feature-hero__illustration">
              <img
                src={feature.image}
                alt={feature.imageAlt}
                loading="lazy"
                style={
                  feature.imageMaxHeight
                    ? { maxHeight: feature.imageMaxHeight }
                    : undefined
                }
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add(
                    "feature-hero__illustration--missing",
                  );
                }}
              />
            </div>
          ) : (
            <div className="feature-hero__frame">
              <img
                src={feature.image}
                alt={feature.imageAlt}
                loading="lazy"
                style={feature.imageMaxHeight ? { maxHeight: feature.imageMaxHeight, width: "auto", margin: "0 auto", display: "block" } : undefined}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.classList.add("feature-hero__placeholder");
                  e.currentTarget.parentElement!.textContent = placeholder;
                }}
              />
            </div>
          )
        ) : (
          <div className="feature-hero__placeholder">{placeholder}</div>
        )}
      </div>
    </div>
  );
}

export function FeatureShowcase({ features }: { features: FeatureSection[] }) {
  return (
    <section className="feature-showcase">
      {features.map((feature, i) => (
        <div key={feature.badge}>
          {i > 0 && <div className="feature-divider" />}
          <FeatureHero feature={feature} index={i} />
        </div>
      ))}
    </section>
  );
}
