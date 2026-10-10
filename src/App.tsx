import { useEffect, useRef } from "react";
import { ToastProvider } from "@glacier/react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { LanguageProvider } from "./i18n/context";
import { trackPageview } from "./lib/analytics";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { BlipPage } from "./pages/Blip";
import { PortPage } from "./pages/Port";
import { SentryPage } from "./pages/Sentry";
import { PeepholePage } from "./pages/Peephole";
import { StickyKeysPage } from "./pages/StickyKeys";
import { QuarantinePage } from "./pages/Quarantine";
import { DianePage } from "./pages/Diane";
import { AlfredPage } from "./pages/Alfred";
import { UninstallerPage } from "./pages/Uninstaller";
import { LibrePage } from "./pages/Libre";
import { BasePage } from "./pages/Base";
import { StatsPage } from "./pages/Stats";
import { TapPage } from "./pages/Tap";
import { TapPrivacyPage } from "./pages/TapPrivacy";
import { TapTermsPage } from "./pages/TapTerms";
import { TapEulaPage } from "./pages/TapEula";
import { EspressoPage } from "./pages/Espresso";
import { SeasickPage } from "./pages/Seasick";
import { WorktreePage } from "./pages/Worktree";
import { HaloPage } from "./pages/Halo";
import { GhostWirePage } from "./pages/GhostWire";
import { AttackFMPage } from "./pages/AttackFM";
import { PrettyCardboardPage } from "./pages/PrettyCardboard";
import { GhostPage } from "./pages/Ghost";
import { NotFound } from "./pages/NotFound";
import { useLanguage } from "./i18n/context";

/// Hard-redirect to libre.academy. The product formerly known as
/// "Fishbones" graduated to libre.academy; any inbound links to
/// `/fishbones` (or the new `/libre` alias) bounce to the
/// standalone marketing site.
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
/// script in `index.html` auto-fires the FIRST pageview when it
/// loads, so the initial mount is skipped with a `firstRouteRef`
/// toggle and only later route changes fire. Without that guard,
/// every entry visit would double-count (once from the script's
/// auto-fire, once from this effect's first run). Same pattern as
/// libre.academy's App.tsx.
function ChromeShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { site } = useLanguage();

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
        {site.skip}
      </a>
      <Nav />
      <main id="main" tabIndex={-1} style={{ minHeight: "70vh", outline: "none" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ChromeShell>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blip" element={<BlipPage />} />
            {/* /vyv is the address Espresso had under its first name. */}
            <Route path="/vyv" element={<EspressoPage />} />
            <Route path="/port" element={<PortPage />} />
            <Route path="/sentry" element={<SentryPage />} />
            <Route path="/peephole" element={<PeepholePage />} />
            <Route path="/stickykeys" element={<StickyKeysPage />} />
            <Route path="/quarantine" element={<QuarantinePage />} />
            <Route path="/diane" element={<DianePage />} />
            <Route path="/alfred" element={<AlfredPage />} />
            <Route path="/uninstaller" element={<UninstallerPage />} />
            <Route path="/base" element={<BasePage />} />
            <Route path="/stats" element={<StatsPage />} />
            {/* /fishbones is the historical codename route; keep
                it pointing at libre.academy for any links that still
                use it in the wild. /libre is the in-suite marketing
                page now (it used to redirect too). */}
            <Route path="/fishbones" element={<LibreRedirect />} />
            <Route path="/libre" element={<LibrePage />} />
            <Route path="/tap" element={<TapPage />} />
            <Route path="/tap/privacy" element={<TapPrivacyPage />} />
            <Route path="/tap/terms" element={<TapTermsPage />} />
            <Route path="/tap/eula" element={<TapEulaPage />} />
            <Route path="/espresso" element={<EspressoPage />} />
            <Route path="/seasick" element={<SeasickPage />} />
            <Route path="/worktree" element={<WorktreePage />} />
            <Route path="/halo" element={<HaloPage />} />
            <Route path="/ghostwire" element={<GhostWirePage />} />
            <Route path="/attackfm" element={<AttackFMPage />} />
            <Route path="/prettycardboard" element={<PrettyCardboardPage />} />
            <Route path="/ghost" element={<GhostPage />} />
            {/* Legacy path kept as a client-side redirect so any inbound
                links still land on /ghostwire instead of a 404. */}
            <Route path="/blackpearl" element={<Navigate to="/ghostwire" replace />} />
            {/* Catch-all 404: the lost ribbon snake. */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ChromeShell>
      </BrowserRouter>
      </ToastProvider>
    </LanguageProvider>
  );
}
