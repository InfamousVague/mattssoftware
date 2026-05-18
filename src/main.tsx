import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Base design-token custom properties FIRST — the launcher-style home
// chrome (launcher.css, ms-* classes) reads --color-*/--sp-*/--radius-*
// /--text-*-size. Vendored (CI-safe; this repo can't resolve Libs/base).
// styles.css loads after (in App.tsx) so marketing sub-pages keep their
// own palette.
import "./base-tokens.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
