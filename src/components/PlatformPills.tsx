import { Pill } from "@glacier/react";
import type { CatalogApp } from "../data/catalog";
import { useLanguage } from "../i18n/context";

/// What an app runs on, as the kit's pills. A platform it is on today is a
/// soft pill; one it is headed to is an outline pill that says how far along
/// it is ("iPhone soon", "Android in development"), so it can never be read
/// as available.
export function PlatformPills({ app, size = "sm" }: { app: CatalogApp; size?: "sm" | "md" }) {
  const { site, format } = useLanguage();
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
            {format(site.status[u.status], { platform: u.platform })}
          </Pill>
        </li>
      ))}
    </ul>
  );
}
