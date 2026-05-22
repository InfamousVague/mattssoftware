/// Per-app theme worlds — accent gradients used by AppPage.
///
/// Each app picks a saturated 2-color gradient that matches its hero
/// illustration's palette. The gradient drives:
///   - the primary button background
///   - the eyebrow tag chip
///   - the page's ambient body glow (via --app-from / --app-to)
///   - the hero spotlight behind the illustration
///
/// Keep the colors web-vivid; the dark UI absorbs a lot of saturation
/// so faint pastels read as gray. The "glow" rgba is the same hue as
/// `to` but at ~34% alpha for soft drop shadows.

export interface AppTheme {
  from: string;
  to: string;
  glow: string;        // rgba string for shadows / outer-glow
  spotlight: string;   // soft wash placed behind the hero illustration
}

export const APP_THEMES: Record<string, AppTheme> = {
  blip:       { from: "#ff4d8d", to: "#a020f0", glow: "rgba(160, 32, 240, 0.36)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,77,141,0.22), transparent 65%)" },
  port:       { from: "#5cb8ff", to: "#0099ff", glow: "rgba(0, 153, 255, 0.34)",  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(92,184,255,0.24), transparent 65%)" },
  vyv:        { from: "#ffb27a", to: "#e09060", glow: "rgba(224, 144, 96, 0.32)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,178,122,0.24), transparent 65%)" }, // Espresso (route is /vyv)
  espresso:   { from: "#ffb27a", to: "#e09060", glow: "rgba(224, 144, 96, 0.32)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,178,122,0.24), transparent 65%)" },
  sentry:     { from: "#9d8bff", to: "#5b48e6", glow: "rgba(91, 72, 230, 0.36)",  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(157,139,255,0.22), transparent 65%)" },
  peephole:   { from: "#7fdbb6", to: "#3aa685", glow: "rgba(58, 166, 133, 0.32)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(127,219,182,0.22), transparent 65%)" },
  stats:      { from: "#ff7eb3", to: "#ff4d8d", glow: "rgba(255, 77, 141, 0.34)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,126,179,0.22), transparent 65%)" },
  stickykeys: { from: "#c0a0ff", to: "#9070e0", glow: "rgba(144, 112, 224, 0.34)",spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(192,160,255,0.24), transparent 65%)" },
  diane:      { from: "#e8c598", to: "#b58853", glow: "rgba(181, 136, 83, 0.32)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(232,197,152,0.24), transparent 65%)" },
  tap:        { from: "#b48cff", to: "#7a4dff", glow: "rgba(122, 77, 255, 0.36)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(180,140,255,0.22), transparent 65%)" },
  libre:      { from: "#ff6a8a", to: "#c2275d", glow: "rgba(194, 39, 93, 0.34)",  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,106,138,0.22), transparent 65%)" },
  base:       { from: "#c8c8d4", to: "#6b6b80", glow: "rgba(107, 107, 128, 0.30)",spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(200,200,212,0.18), transparent 65%)" },
  alfred:     { from: "#7bc585", to: "#2f8b48", glow: "rgba(47, 139, 72, 0.32)",  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(123,197,133,0.22), transparent 65%)" },
  quarantine: { from: "#f7d05c", to: "#c89212", glow: "rgba(200, 146, 18, 0.32)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(247,208,92,0.22), transparent 65%)" },
  uninstaller:{ from: "#ff8a8a", to: "#a02828", glow: "rgba(160, 40, 40, 0.34)",  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,138,138,0.24), transparent 65%)" },
};

/// Fallback gradient (matches the :root default in styles.css).
export const DEFAULT_THEME: AppTheme = {
  from: "#ff7eb3",
  to: "#b48cff",
  glow: "rgba(180, 140, 255, 0.34)",
  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,126,179,0.22), transparent 65%)",
};

export function getTheme(id: string): AppTheme {
  return APP_THEMES[id] ?? DEFAULT_THEME;
}

/// Build the inline style object that scopes a per-app theme to a
/// page's root element. Tagged `as React.CSSProperties` upstream.
export function themeVars(id: string): Record<string, string> {
  const t = getTheme(id);
  return {
    "--app-from": t.from,
    "--app-to": t.to,
    "--app-glow": t.glow,
    "--app-spotlight": t.spotlight,
  };
}
