import { Pill } from "@glacier/react";
import type { CatalogApp } from "../data/catalog";

const STATUS_LABEL: Record<"soon" | "development", (platform: string) => string> = {
  soon: (platform) => `${platform} soon`,
  development: (platform) => `${platform} in development`,
};

/// What an app runs on, as the kit's pills. Available platforms are
/// soft; upcoming platforms are outline so they can never be read as
/// available ("iPhone soon", "Android in development").
export function PlatformPills({ app, size = "sm" }: { app: CatalogApp; size?: "sm" | "md" }) {
  return (
    <ul className="platforms">
      {app.platforms.map((p) => (
        <li key={p}>
          <Pill tone="neutral" variant="soft" size={size}>
            {p}
          </Pill>
        </li>
      ))}
      {(app.upcoming ?? []).map((u) => (
        <li key={u.platform}>
          <Pill tone="neutral" variant="outline" size={size}>
            {STATUS_LABEL[u.status](u.platform)}
          </Pill>
        </li>
      ))}
    </ul>
  );
}
