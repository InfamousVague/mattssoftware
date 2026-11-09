import { useEffect, useRef } from "react";
import { ToastProvider } from "@glacier/react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { trackPageview } from "./lib/analytics";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { GhostPage } from "./pages/Ghost";
import { GhostKBDPage } from "./pages/GhostKBD";
import { LibrePage } from "./pages/Libre";
import { EspressoPage } from "./pages/Espresso";
import { AttackFMPage } from "./pages/AttackFM";
import { PrettyCardboardPage } from "./pages/PrettyCardboard";
import { TapPrivacyPage } from "./pages/TapPrivacy";
import { TapTermsPage } from "./pages/TapTerms";
import { TapEulaPage } from "./pages/TapEula";
import { NotFound } from "./pages/NotFound";

/// Hard-redirect to libre.academy. Libre's own marketing lives at
/// libre.academy now — this site keeps a /libre marketing section
/// (card on the home page) but points the dedicated /libre-academy
/// URL out at the standalone site, same as /fishbones.
function LibreRedirect() {
  useEffect(() => {
    window.location.replace("https://libre.academy");
  }, []);
  return null;
}

/// The page chrome (skip link, Nav, the main landmark, Footer) around
/// every route, split out of <App> so it can call `useLocation`, which
/// needs a Router ancestor.
///
/// Also fires Plausible SPA pageviews on route change. The hosted
/// script in `index.html` auto-fires the first pageview when it loads,
/// so the initial mount is skipped with a `firstRouteRef` toggle and
/// only later route changes fire. Without that guard, every entry visit
/// would double-count.
function ChromeShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const firstRouteRef = useRef(true);

  useEffect(() => {
    if (firstRouteRef.current) {
      firstRouteRef.current = false;
      return;
    }
    trackPageview();
  }, [location.pathname]);

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} style={{ minHeight: "70vh", outline: "none" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

/// Every retired marketing page is listed here. A visit to any of these
/// paths client-side-redirects to the home page so the old URLs keep
/// resolving instead of turning into a 404. Add new retirements here
/// rather than quietly letting them 404 — that way we only have to grep
/// one place when an old release note or share link points at a dead
/// path.
const RETIRED_PATHS = [
  "/alfred",
  "/base",
  "/blackpearl",
  "/blip",
  "/diane",
  "/ghostwire",
  "/halo",
  "/matts-tools",
  "/peephole",
  "/port",
  "/quarantine",
  "/seasick",
  "/sentry",
  "/stats",
  "/stickykeys",
  "/tap",
  "/uninstaller",
  "/vyv",
  "/worktree",
];

export function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ChromeShell>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Six highlighted products. */}
            <Route path="/ghost" element={<GhostPage />} />
            <Route path="/ghostkbd" element={<GhostKBDPage />} />
            <Route path="/libre" element={<LibrePage />} />
            <Route path="/espresso" element={<EspressoPage />} />
            <Route path="/attackfm" element={<AttackFMPage />} />
            <Route path="/prettycardboard" element={<PrettyCardboardPage />} />

            {/* Tap retired its marketing page but the three legal
                pages stay — the App Store listing points at them. */}
            <Route path="/tap/privacy" element={<TapPrivacyPage />} />
            <Route path="/tap/terms" element={<TapTermsPage />} />
            <Route path="/tap/eula" element={<TapEulaPage />} />

            {/* Libre graduated to its own marketing site; `/fishbones`
                is the project's old codename, kept for stale links. */}
            <Route path="/fishbones" element={<LibreRedirect />} />

            {/* Retired product pages. Each one quietly redirects
                to /, so old links keep working. */}
            {RETIRED_PATHS.map((p) => (
              <Route key={p} path={p} element={<Navigate to="/" replace />} />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ChromeShell>
      </BrowserRouter>
    </ToastProvider>
  );
}
