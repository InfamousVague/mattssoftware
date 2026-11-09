/// Per-app theme — accent gradients used by AppPage.
///
/// The six highlighted products each pick a 2-color gradient that
/// matches their own brand. It drives:
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
  glow: string;
  spotlight: string;
}

export const APP_THEMES: Record<string, AppTheme> = {
  ghost:           { from: "#b8b8c0", to: "#6f6f78", glow: "rgba(111, 111, 120, 0.30)", spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(184,184,192,0.18), transparent 65%)" },
  ghostkbd:        { from: "#8b9eff", to: "#3f4fb6", glow: "rgba(63, 79, 182, 0.32)",   spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(139,158,255,0.20), transparent 65%)" },
  libre:           { from: "#ff6a8a", to: "#c2275d", glow: "rgba(194, 39, 93, 0.34)",   spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,106,138,0.22), transparent 65%)" },
  espresso:        { from: "#ffb27a", to: "#e09060", glow: "rgba(224, 144, 96, 0.32)",  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(255,178,122,0.24), transparent 65%)" },
  attackfm:        { from: "#fc427b", to: "#7a1f4a", glow: "rgba(252, 66, 123, 0.34)",  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(252,66,123,0.22), transparent 65%)" },
  prettycardboard: { from: "#c89b6a", to: "#8f5fd6", glow: "rgba(143, 95, 214, 0.32)",  spotlight: "radial-gradient(60% 60% at 50% 40%, rgba(200,155,106,0.22), transparent 65%)" },
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
/// page's root element. Tag with `as React.CSSProperties` upstream.
export function themeVars(id: string): Record<string, string> {
  const t = getTheme(id);
  return {
    "--app-from": t.from,
    "--app-to": t.to,
    "--app-glow": t.glow,
    "--app-spotlight": t.spotlight,
  };
}
