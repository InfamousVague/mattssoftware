import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BlipPage } from "./pages/Blip";
import { VyvPage } from "./pages/Vyv";
import { PortPage } from "./pages/Port";
import { FetchPage } from "./pages/Fetch";
import { SentryPage } from "./pages/Sentry";
import { PeepholePage } from "./pages/Peephole";
import { StickyKeysPage } from "./pages/StickyKeys";
import { QuarantinePage } from "./pages/Quarantine";
import { DianePage } from "./pages/Diane";
import { BasePage } from "./pages/Base";
import { StashPage } from "./pages/Stash";
import { StatsPage } from "./pages/Stats";
import { TapPage } from "./pages/Tap";
import { TapPrivacyPage } from "./pages/TapPrivacy";
import { TapTermsPage } from "./pages/TapTerms";
import { TapEulaPage } from "./pages/TapEula";
import "./styles.css";

/// Routes where the marketing chrome (Nav + Footer) should be hidden
/// because the page is its own self-contained surface and the
/// marketing chrome would compete with it.
///
/// Empty for now — the Libre app used to ship an embedded web build
/// on this site, but that has graduated to its own host at
/// libre.academy. If a future product wants to embed at a path on
/// mattssoftware.com again, add that prefix here.
/// The home ("/") is now the launcher replica — its own self-contained
/// surface with its own titlebar, so the marketing Nav/Footer are
/// hidden there. Every marketing sub-page keeps the Nav/Footer chrome.
function shouldHideChrome(pathname: string): boolean {
  return pathname === "/";
}

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

/// Splits the chrome decision out of <App> so we can call
/// `useLocation` (which requires a Router ancestor — App itself
/// IS the Router, so we need a child component).
function ChromeShell({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideChrome = shouldHideChrome(location.pathname);
  return (
    <>
      {!hideChrome && <Nav />}
      <main style={{ minHeight: "100vh" }}>{children}</main>
      {!hideChrome && <Footer />}
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ChromeShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blip" element={<BlipPage />} />
          <Route path="/vyv" element={<VyvPage />} />
          <Route path="/port" element={<PortPage />} />
          <Route path="/fetch" element={<FetchPage />} />
          <Route path="/sentry" element={<SentryPage />} />
          <Route path="/peephole" element={<PeepholePage />} />
          <Route path="/stickykeys" element={<StickyKeysPage />} />
          <Route path="/quarantine" element={<QuarantinePage />} />
          <Route path="/diane" element={<DianePage />} />
          <Route path="/base" element={<BasePage />} />
          <Route path="/stash" element={<StashPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/fishbones" element={<LibreRedirect />} />
          <Route path="/libre" element={<LibreRedirect />} />
          <Route path="/tap" element={<TapPage />} />
          <Route path="/tap/privacy" element={<TapPrivacyPage />} />
          <Route path="/tap/terms" element={<TapTermsPage />} />
          <Route path="/tap/eula" element={<TapEulaPage />} />
        </Routes>
      </ChromeShell>
    </BrowserRouter>
  );
}
