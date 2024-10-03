import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AnimeProvider } from "./context/animeContext.jsx";
createRoot(document.getElementById("root")).render(
  <AnimeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AnimeProvider>
);
