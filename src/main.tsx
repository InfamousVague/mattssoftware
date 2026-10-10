import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// The kit, in its order: the fonts its tokens name (Inter and JetBrains
// Mono, the two default families; the kit's fonts.css also registers three
// alternates this site never selects), Inter's optical-size axis for the
// display sizes, then the tokens every component reads, then the compiled
// component styles. All of it resolves to vendor/@glacier.
import "@fontsource-variable/inter";
import "@fontsource-variable/inter/opsz.css";
import "@fontsource-variable/jetbrains-mono";
import "@glacier/tokens/css/tokens.css";
import "@glacier/react/styles.css";
// Last: the site's own look, laid over the kit's tokens.
import "./site.css";
import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
