import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/// Mount this inside `<BrowserRouter>`: resets the window scroll to
/// the top whenever the route's pathname changes. Without it, clicking
/// from one app page to another lands the visitor mid-scroll on the
/// new page because React Router updates the URL but doesn't touch
/// `window.scrollY`.
///
/// Hash anchors are preserved: if the new URL has a `#section`, we
/// skip the scroll-reset so the browser's native anchor jump still
/// works (e.g. the home hero's buttons → `#featured`).
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    // "instant": the page sets smooth scrolling for its anchors, and a new
    // page should start at its top, not glide there.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}
