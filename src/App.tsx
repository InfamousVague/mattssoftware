import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BlipPage } from "./pages/Blip";
import { VyvPage } from "./pages/Vyv";
import { DianePage } from "./pages/Diane";
import { BasePage } from "./pages/Base";
import { StashPage } from "./pages/Stash";
import { FishbonesPage } from "./pages/Fishbones";
import { TapPage } from "./pages/Tap";
import { TapPrivacyPage } from "./pages/TapPrivacy";
import { TapTermsPage } from "./pages/TapTerms";
import { TapEulaPage } from "./pages/TapEula";
import "./styles.css";

/// Routes where the marketing chrome (Nav + Footer) should be hidden
/// because the page is its own self-contained surface and the
/// marketing chrome would compete with it.
///
/// Currently just `/fishbones/learn/*` — that path is the embedded
/// Fishbones web app, served as a standalone index.html. If nginx's
/// SPA fallback ever drops the request through to the marketing
/// router (e.g. a deep `/fishbones/learn/foo` link clicked from
/// inside the embed), this guard keeps the marketing Nav + Footer
/// off the page so the user doesn't see two competing site chromes.
function shouldHideChrome(pathname: string): boolean {
  return pathname.startsWith("/fishbones/learn");
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
          <Route path="/diane" element={<DianePage />} />
          <Route path="/base" element={<BasePage />} />
          <Route path="/stash" element={<StashPage />} />
          <Route path="/fishbones" element={<FishbonesPage />} />
          <Route path="/tap" element={<TapPage />} />
          <Route path="/tap/privacy" element={<TapPrivacyPage />} />
          <Route path="/tap/terms" element={<TapTermsPage />} />
          <Route path="/tap/eula" element={<TapEulaPage />} />
        </Routes>
      </ChromeShell>
    </BrowserRouter>
  );
}
