import { useEffect, useState } from "react";

/// The latest GitHub release of an InfamousVague repo, resolved to one
/// download per desktop platform by file extension.
///
/// Every failure path leaves `releaseUrl` (the releases page), which is
/// always a working destination: the unauthenticated API is rate-limited
/// per IP and a marketing page must not depend on it. Walks recent releases
/// newest-first so a tag with no assets cannot blank the buttons.

export interface ReleaseAssets {
  version: string;
  releaseUrl: string;
  mac?: string;
  windows?: string;
  linux?: string;
}

const cache = new Map<string, Promise<ReleaseAssets>>();

async function fetchAssets(repo: string): Promise<ReleaseAssets> {
  const releaseUrl = `https://github.com/InfamousVague/${repo}/releases/latest`;
  const empty: ReleaseAssets = { version: "", releaseUrl };
  try {
    const res = await fetch(
      `https://api.github.com/repos/InfamousVague/${repo}/releases?per_page=20`,
    );
    if (!res.ok) return empty;
    const releases = await res.json();
    if (!Array.isArray(releases)) return empty;
    for (const rel of releases) {
      if (rel.draft) continue;
      const assets: { name: string; browser_download_url: string }[] = rel.assets ?? [];
      const find = (test: (n: string) => boolean) =>
        assets.find((a) => test(a.name.toLowerCase()))?.browser_download_url;
      const mac = find((n) => n.endsWith(".dmg"));
      const windows = find((n) => n.endsWith(".msi") || n.endsWith(".exe"));
      const linux = find(
        (n) => n.endsWith(".appimage") || n.endsWith(".deb") || n.endsWith(".rpm"),
      );
      if (mac || windows || linux) {
        return { version: rel.tag_name || "", releaseUrl, mac, windows, linux };
      }
    }
    return empty;
  } catch {
    return empty;
  }
}

export function useRelease(repo: string | undefined): ReleaseAssets {
  const [assets, setAssets] = useState<ReleaseAssets>({
    version: "",
    releaseUrl: repo ? `https://github.com/InfamousVague/${repo}/releases/latest` : "",
  });
  useEffect(() => {
    if (!repo) return;
    let alive = true;
    let pending = cache.get(repo);
    if (!pending) {
      pending = fetchAssets(repo);
      cache.set(repo, pending);
    }
    pending.then((a) => {
      if (alive) setAssets(a);
    });
    return () => {
      alive = false;
    };
  }, [repo]);
  return assets;
}
