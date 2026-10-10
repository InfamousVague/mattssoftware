import { useCallback, useSyncExternalStore } from "react";

/// The site's theme: follow the system, or an explicit light or dark.
///
/// The kit's tokens answer `prefers-color-scheme` on their own whenever
/// `<html>` carries no `data-theme`, so "system" is the absence of the
/// attribute rather than a third value written to it. The inline script
/// in index.html applies a stored choice before first paint; this module
/// adopts whatever that left on the document.

export type ThemeChoice = "system" | "light" | "dark";

const STORAGE_KEY = "mattssoftware:theme";
const listeners = new Set<() => void>();

function read(): ThemeChoice {
  if (typeof document === "undefined") return "system";
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "light" || attr === "dark" ? attr : "system";
}

export function setTheme(choice: ThemeChoice): void {
  const root = document.documentElement;
  if (choice === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", choice);
  try {
    if (choice === "system") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    /* private mode: the choice lasts for this page only */
  }
  listeners.forEach((fn) => fn());
}

function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function useTheme(): { choice: ThemeChoice; setChoice: (c: ThemeChoice) => void } {
  const choice = useSyncExternalStore(subscribe, read, () => "system" as ThemeChoice);
  const setChoice = useCallback((c: ThemeChoice) => setTheme(c), []);
  return { choice, setChoice };
}
