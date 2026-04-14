import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BlipPage } from "./pages/Blip";
import { VyvPage } from "./pages/Vyv";
import { DianePage } from "./pages/Diane";
import { BasePage } from "./pages/Base";
import { StashPage } from "./pages/Stash";
import { TapPage } from "./pages/Tap";
import { TapPrivacyPage } from "./pages/TapPrivacy";
import { TapTermsPage } from "./pages/TapTerms";
import { TapEulaPage } from "./pages/TapEula";
import "./styles.css";

export function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blip" element={<BlipPage />} />
          <Route path="/vyv" element={<VyvPage />} />
          <Route path="/diane" element={<DianePage />} />
          <Route path="/base" element={<BasePage />} />
          <Route path="/stash" element={<StashPage />} />
          <Route path="/tap" element={<TapPage />} />
          <Route path="/tap/privacy" element={<TapPrivacyPage />} />
          <Route path="/tap/terms" element={<TapTermsPage />} />
          <Route path="/tap/eula" element={<TapEulaPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
