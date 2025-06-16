import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FocusProvider } from "./contexts/FocusContext.tsx";
import "iconify-icon";

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");
createRoot(root).render(
  <StrictMode>
    <FocusProvider>
      <App />
    </FocusProvider>
  </StrictMode>,
);
